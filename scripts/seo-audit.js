import fs from "fs";
import path from "path";
import { getAllMarkdownFiles, parseFrontmatter, getCharLength } from "./lib/markdown-utils.js";
import config from "./config.js";

/**
 * Frontmatter 审计脚本
 * 扫描所有 Markdown 文件，检查 SEO 相关配置
 */

const { docsDir } = config;
const { excludedDirs, outputFile, seoRules } = config.audit;

// 存储审计结果
const auditResults = {
  totalFiles: 0,
  checkedFiles: 0,
  issues: [],
  summary: {
    missingDescription: 0,
    shortDescription: 0,
    longDescription: 0,
    templateDescription: 0,
    missingTitle: 0,
    needsShortTitle: 0,
    perfect: 0,
  },
};

/**
 * 审计单个文件
 */
function auditFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const frontmatter = parseFrontmatter(content);
  const relativePath = path.relative(docsDir, filePath).replace(/\\/g, "/");

  const result = {
    file: relativePath,
    frontmatter: frontmatter || {},
    issues: [],
    score: 100,
  };

  if (!frontmatter) {
    result.issues.push({
      severity: "warning",
      field: "frontmatter",
      message: "没有找到 Frontmatter 配置",
    });
    result.score = 0;
    return result;
  }

  // 检查 title
  if (!frontmatter.title) {
    result.issues.push({
      severity: "error",
      field: "title",
      message: "缺少必填字段 title",
    });
    result.score -= 30;
    auditResults.summary.missingTitle++;
  } else {
    const titleText = String(frontmatter.title);
    const titleLength = getCharLength(titleText);
    if (titleLength > seoRules.title.maxLength) {
      result.issues.push({
        severity: "info",
        field: "title",
        message: `title 过长 (${titleLength} 字符)，建议精简或添加 shortTitle`,
      });
      result.score -= 5;

      if (!frontmatter.shortTitle) {
        result.issues.push({
          severity: "warning",
          field: "shortTitle",
          message: "title 较长但未提供 shortTitle",
        });
        result.score -= 10;
        auditResults.summary.needsShortTitle++;
      }
    }
  }

  // 检查 description
  if (!frontmatter.description) {
    result.issues.push({
      severity: "error",
      field: "description",
      message: "缺少必填字段 description",
    });
    result.score -= 40;
    auditResults.summary.missingDescription++;
  } else {
    const descText = Array.isArray(frontmatter.description) ? frontmatter.description.join(" ") : String(frontmatter.description);
    const descLength = getCharLength(descText);

    if (descLength < seoRules.description.minLength) {
      result.issues.push({
        severity: "warning",
        field: "description",
        message: `description 太短 (${descLength} 字符)，建议 ${seoRules.description.minLength}-${seoRules.description.maxLength} 字符`,
      });
      result.score -= 15;
      auditResults.summary.shortDescription++;
    } else if (descLength > seoRules.description.maxLength) {
      result.issues.push({
        severity: "warning",
        field: "description",
        message: `description 太长 (${descLength} 字符)，建议 ${seoRules.description.minLength}-${seoRules.description.maxLength} 字符`,
      });
      result.score -= 10;
      auditResults.summary.longDescription++;
    }

    // 检查模板化表述
    const hasTemplate = seoRules.description.avoidPhrases.some((phrase) => descText.includes(phrase));
    if (hasTemplate) {
      result.issues.push({
        severity: "warning",
        field: "description",
        message: "使用了模板化表述，建议改为更吸引人的描述",
      });
      result.score -= 15;
      auditResults.summary.templateDescription++;
    }
  }

  // 完美分数
  if (result.score === 100) {
    auditResults.summary.perfect++;
  }

  return result;
}

/**
 * 生成优化建议
 */
function generateSuggestions(result) {
  const suggestions = [];

  if (!result.frontmatter.description) {
    suggestions.push({
      field: "description",
      current: null,
      suggested: `为「${result.frontmatter.title || "此文章"}」撰写一个${seoRules.description.minLength}-${seoRules.description.maxLength}字符的吸引人的描述`,
    });
  } else if (result.issues.some((i) => i.field === "description")) {
    const desc = Array.isArray(result.frontmatter.description) ? result.frontmatter.description.join(" ") : String(result.frontmatter.description);
    const descLength = getCharLength(desc);

    if (descLength < seoRules.description.minLength) {
      suggestions.push({
        field: "description",
        current: desc,
        suggested: `扩充内容，添加核心亮点和关键词，达到${seoRules.description.minLength}-${seoRules.description.maxLength}字符`,
      });
    } else if (descLength > seoRules.description.maxLength) {
      suggestions.push({
        field: "description",
        current: desc,
        suggested: `精简表述，保留核心内容，控制在${seoRules.description.maxLength}字符以内`,
      });
    }

    if (seoRules.description.avoidPhrases.some((p) => desc.includes(p))) {
      suggestions.push({
        field: "description",
        current: desc,
        suggested: "去掉「本文介绍了」等模板化表述，改为提问或直接描述核心价值",
      });
    }
  }

  if (result.frontmatter.title && getCharLength(String(result.frontmatter.title)) > seoRules.shortTitle.requiredWhenTitleLong && !result.frontmatter.shortTitle) {
    suggestions.push({
      field: "shortTitle",
      current: null,
      suggested: `为导航栏提供一个简短的标题（基于：${result.frontmatter.title}）`,
    });
  }

  return suggestions;
}

/**
 * 主函数
 */
function main() {
  console.log("🔍 开始审计 Frontmatter...\n");

  const allFiles = getAllMarkdownFiles(docsDir, excludedDirs);
  auditResults.totalFiles = allFiles.length;

  console.log(`📄 找到 ${allFiles.length} 个 Markdown 文件\n`);

  allFiles.forEach((filePath) => {
    const result = auditFile(filePath);
    auditResults.checkedFiles++;

    if (result.issues.length > 0) {
      result.suggestions = generateSuggestions(result);
      auditResults.issues.push(result);
    }
  });

  // 按评分排序（低分在前）
  auditResults.issues.sort((a, b) => a.score - b.score);

  // 保存报告
  fs.writeFileSync(outputFile, JSON.stringify(auditResults, null, 2), "utf-8");

  // 打印摘要
  console.log("📊 审计完成！\n");
  console.log("=== 整体统计 ===");
  console.log(`总文件数: ${auditResults.totalFiles}`);
  console.log(`已检查: ${auditResults.checkedFiles}`);
  console.log(`发现问题: ${auditResults.issues.length} 个文件\n`);

  console.log("=== 问题分类 ===");
  console.log(`缺少 description: ${auditResults.summary.missingDescription}`);
  console.log(`description 过短: ${auditResults.summary.shortDescription}`);
  console.log(`description 过长: ${auditResults.summary.longDescription}`);
  console.log(`使用模板化表述: ${auditResults.summary.templateDescription}`);
  console.log(`缺少 title: ${auditResults.summary.missingTitle}`);
  console.log(`需要 shortTitle: ${auditResults.summary.needsShortTitle}`);
  console.log(`完美配置: ${auditResults.summary.perfect}\n`);

  console.log(`📝 详细报告已保存到: ${outputFile}`);
  console.log(`\n💡 提示: 查看 ${outputFile} 获取详细信息`);
}

// 执行
main();

export { auditFile, generateSuggestions };
