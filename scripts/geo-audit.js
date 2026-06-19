import fs from "fs";
import path from "path";
import { getAllMarkdownFiles, parseFrontmatter, getCharLength } from "./lib/markdown-utils.js";
import config from "./config.js";

/**
 * GEO (Generative Engine Optimization) 审计脚本
 * 扫描所有文章，检查 FAQ Schema 结构化数据配置
 * 工作流：运行 pnpm geo:audit → 查看报告 → 让 AI 为缺少 FAQ 的文章补充
 */

const { docsDir } = config;
const { excludedDirs, outputFile, rules } = config.geoAudit;

const auditResults = {
  totalFiles: 0,
  checkedFiles: 0,
  withFaqFiles: 0,
  issues: [],
  summary: {
    missingFaq: 0,
    tooFewItems: 0,
    tooManyItems: 0,
    answerTooShort: 0,
    answerTooLong: 0,
    invalidFormat: 0,
    yamlUnsafe: 0,
    backtickInValue: 0,
    perfect: 0,
  },
};

/**
 * YAML 不安全字符：未加引号的值以这些字符开头会被 YAML 解析器误解
 * [ ] { } → 流式集合  > | → 块标量  * & → 锚点/别名  ! → 标签  % → 指令  # → 注释  @ ` → 保留字符
 * （引号 " ' 不在此列：正确成对的引号是合法且推荐的写法，不该被当作"不安全开头"）
 */
const YAML_UNSAFE_START = /^[\x5b\x5d\x7b\x7d\x3e\x7c\x2a\x26\x21\x25\x23\x40\x60]/;

/**
 * 仅在 frontmatter YAML 解析失败时调用：扫描原始文本定位最可能的 FAQ 元凶行，
 * 把笼统的"解析失败"升级为具体的修复建议。
 *
 * 设计要点：
 * - 兼容数组首键 "- question:" 与续行 "answer:"（旧实现 /^\s+(question|answer):/ 匹配不到
 *   破折号行上的 question，等于只检查了 answer）。
 * - 正确成对加引号的值（answer: "含冒号：的值"）是合法写法、能正常解析、根本不会进入本分支，
 *   故直接跳过——这正是承载冒号/特殊字符的推荐写法，旧实现却把它误报成"会导致构建失败"。
 * - 真正使解析失败的是【未加引号】且含冒号+空白/行尾冒号，或以 YAML 特殊字符开头的值。
 */
function findYamlCulprits(content) {
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return [];

  const issues = [];
  const lines = fmMatch[1].split(/\r?\n/);

  for (const line of lines) {
    const match = line.match(/^\s*(?:-\s+)?(question|answer):\s*(.*\S)?\s*$/);
    if (!match || !match[2]) continue;

    const label = match[1] === "question" ? "问题" : "答案";
    const value = match[2];

    const quoted = (value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"));
    if (quoted) continue;

    if (/:(\s|$)/.test(value) || YAML_UNSAFE_START.test(value)) {
      issues.push(`FAQ ${label}未加引号且含冒号或特殊字符，建议用引号包裹：${value.slice(0, 30)}`);
    }
  }

  return issues;
}

/**
 * 检查 FAQ 条目格式是否合法
 */
function isValidFaqItem(item) {
  return (
    item &&
    typeof item === "object" &&
    typeof item.question === "string" &&
    item.question.trim().length > 0 &&
    typeof item.answer === "string" &&
    item.answer.trim().length > 0
  );
}

/**
 * 审计单个文件
 */
function auditFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const frontmatter = parseFrontmatter(content);
  const relativePath = path.relative(docsDir, filePath).replace(/\\/g, "/");

  const result = {
    file: relativePath,
    title: frontmatter?.title ? String(frontmatter.title) : null,
    hasFaq: false,
    faqCount: 0,
    issues: [],
  };

  if (!frontmatter) {
    // 区分"无 frontmatter"和"YAML 解析失败"
    const hasFmBlock = /^---\r?\n[\s\S]*?\r?\n---/.test(content);
    if (hasFmBlock) {
      result.issues.push({ severity: "error", message: "Frontmatter YAML 解析失败，请检查语法" });
      auditResults.summary.invalidFormat++;
      // 解析失败时定位最可能的 FAQ 元凶行（未加引号的冒号/特殊字符值），给出具体修复建议
      for (const msg of findYamlCulprits(content)) {
        result.issues.push({ severity: "error", message: msg });
        auditResults.summary.yamlUnsafe++;
      }
    } else {
      result.issues.push({ severity: "info", message: "没有 Frontmatter" });
    }
    return result;
  }

  // 跳过纯索引/导航页（index: false 的 README 页面）
  if (frontmatter.index === false) {
    return null;
  }

  // 跳过内容过短的 README（通常只是目录导航，正文不足 500 字符）
  const basename = path.basename(filePath);
  if (basename === "README.md") {
    const body = content.replace(/^---[\s\S]*?---/, "").trim();
    if (getCharLength(body) < 500) {
      return null;
    }
  }

  const faq = frontmatter.faq;

  if (!faq) {
    result.issues.push({ severity: "warning", message: "缺少 faq 字段" });
    auditResults.summary.missingFaq++;
    return result;
  }

  if (!Array.isArray(faq)) {
    result.issues.push({ severity: "error", message: "faq 字段格式错误，应为数组" });
    auditResults.summary.invalidFormat++;
    return result;
  }

  result.hasFaq = true;
  result.faqCount = faq.length;
  auditResults.withFaqFiles++;

  if (faq.length < rules.minItems) {
    result.issues.push({
      severity: "warning",
      message: `FAQ 条目太少 (${faq.length})，建议至少 ${rules.minItems} 个`,
    });
    auditResults.summary.tooFewItems++;
  } else if (faq.length > rules.maxItems) {
    result.issues.push({
      severity: "info",
      message: `FAQ 条目较多 (${faq.length})，建议不超过 ${rules.maxItems} 个`,
    });
    auditResults.summary.tooManyItems++;
  }

  faq.forEach((item, index) => {
    if (!isValidFaqItem(item)) {
      result.issues.push({
        severity: "error",
        message: `第 ${index + 1} 条 FAQ 格式无效，需包含 question 和 answer 字符串`,
      });
      auditResults.summary.invalidFormat++;
      return;
    }

    // 结构化数据应为纯文本：问题/答案含反引号（markdown 代码标记）会污染 JSON-LD 展示
    if (item.question.includes("`") || item.answer.includes("`")) {
      result.issues.push({
        severity: "warning",
        message: `第 ${index + 1} 条含反引号，结构化数据中应使用纯文本描述`,
      });
      auditResults.summary.backtickInValue++;
    }

    const answerLength = getCharLength(item.answer);
    if (answerLength < rules.answerMinLength) {
      result.issues.push({
        severity: "warning",
        message: `第 ${index + 1} 条答案太短 (${answerLength} 字符)，建议至少 ${rules.answerMinLength} 字符`,
      });
      auditResults.summary.answerTooShort++;
    } else if (answerLength > rules.answerMaxLength) {
      result.issues.push({
        severity: "info",
        message: `第 ${index + 1} 条答案较长 (${answerLength} 字符)，建议不超过 ${rules.answerMaxLength} 字符`,
      });
      auditResults.summary.answerTooLong++;
    }
  });

  if (result.issues.length === 0) {
    auditResults.summary.perfect++;
  }

  return result;
}

/**
 * 主函数
 */
function main() {
  console.log("🔍 开始 GEO 审计 (FAQ Schema)...\n");

  const allFiles = getAllMarkdownFiles(docsDir, excludedDirs);
  auditResults.totalFiles = allFiles.length;

  allFiles.forEach((filePath) => {
    const result = auditFile(filePath);
    if (result === null) return;
    auditResults.checkedFiles++;

    if (result.issues.length > 0) {
      auditResults.issues.push(result);
    }
  });

  // 缺少 FAQ 的排前面，有问题的排后面
  auditResults.issues.sort((a, b) => {
    if (!a.hasFaq && b.hasFaq) return -1;
    if (a.hasFaq && !b.hasFaq) return 1;
    return a.file.localeCompare(b.file);
  });

  // 保存报告
  fs.writeFileSync(outputFile, JSON.stringify(auditResults, null, 2), "utf-8");

  // 打印摘要
  const withFaq = auditResults.withFaqFiles;
  const { summary } = auditResults;

  console.log(`📄 共 ${auditResults.totalFiles} 个文件，${auditResults.checkedFiles} 篇文章\n`);
  console.log(`✅ 已配置 FAQ: ${withFaq}/${auditResults.checkedFiles} 篇`);
  console.log(`❌ 缺少 FAQ:   ${summary.missingFaq} 篇`);

  // 仅在有质量问题时显示详细分类
  // 解析失败时定位到的 YAML 元凶单独醒目提示
  if (summary.yamlUnsafe > 0) {
    console.log(`\n🚨 疑似 YAML 元凶: ${summary.yamlUnsafe} 处（解析失败文件中未加引号的冒号/特殊字符值）`);
  }

  const qualityIssues = summary.tooFewItems + summary.tooManyItems + summary.answerTooShort + summary.answerTooLong + summary.invalidFormat + summary.backtickInValue;
  if (qualityIssues > 0) {
    console.log(`\n⚠️  质量问题: ${qualityIssues} 处`);
    if (summary.invalidFormat) console.log(`   格式无效: ${summary.invalidFormat}`);
    if (summary.tooFewItems) console.log(`   条目太少: ${summary.tooFewItems}`);
    if (summary.tooManyItems) console.log(`   条目较多: ${summary.tooManyItems}`);
    if (summary.answerTooShort) console.log(`   答案太短: ${summary.answerTooShort}`);
    if (summary.answerTooLong) console.log(`   答案太长: ${summary.answerTooLong}`);
    if (summary.backtickInValue) console.log(`   含反引号: ${summary.backtickInValue}`);
  }

  console.log(`\n📝 详细报告: ${outputFile}`);
}

main();

export { auditFile };
