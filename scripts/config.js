/**
 * Shared configuration for all scripts.
 * Edit this file to adapt to your project.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, "../src");
const themeFile = path.join(docsDir, ".vuepress/theme.ts");
const vuepressConfigFile = path.join(docsDir, ".vuepress/config.ts");

/**
 * Auto-detect site info from VuePress config files.
 */
function readSiteConfig() {
  const site = { baseUrl: "", title: "", description: "" };

  try {
    if (fs.existsSync(themeFile)) {
      const raw = fs.readFileSync(themeFile, "utf-8");
      const match = raw.match(/\bhostname\s*:\s*["']([^"']+)["']/);
      if (match) site.baseUrl = match[1];
    }
  } catch {}

  try {
    if (fs.existsSync(vuepressConfigFile)) {
      const raw = fs.readFileSync(vuepressConfigFile, "utf-8");
      const titleMatch = raw.match(/\btitle\s*:\s*["']([^"']+)["']/);
      const descMatch = raw.match(/\bdescription\s*:\s*["']([^"']+)["']/);
      if (titleMatch) site.title = titleMatch[1].trim();
      if (descMatch) site.description = descMatch[1].trim();
    }
  } catch {}

  // Environment variable override
  if (process.env.BASE_URL) site.baseUrl = process.env.BASE_URL;

  return site;
}

const site = readSiteConfig();

if (!fs.existsSync(docsDir)) {
  console.error(`❌ Docs directory not found: ${docsDir}`);
  console.error("   Please check the docsDir path in scripts/config.js");
  process.exit(1);
}

export default {
  // Common
  docsDir,

  // Auto-detected from .vuepress/theme.ts and .vuepress/config.ts
  site,

  // llms-txt.js
  llms: {
    outputFile: path.join(docsDir, ".vuepress/dist/llms.txt"),
    excludedDirs: ["node_modules", ".vuepress", "_temp"],
  },

  // seo-audit.js
  seoAudit: {
    excludedDirs: ["node_modules", ".vuepress", "_temp", "reading"],
    outputFile: path.join(__dirname, "../seo-audit-report.json"),
    rules: {
      description: {
        minLength: 120,
        maxLength: 160,
        avoidPhrases: ["本文介绍了", "本文讲述了", "本文分享了", "本篇文章"],
      },
      title: {
        maxLength: 60,
      },
      shortTitle: {
        requiredWhenTitleLong: 50,
      },
    },
  },

  // geo-audit.js
  geoAudit: {
    excludedDirs: ["node_modules", ".vuepress", "_temp", "reading"],
    outputFile: path.join(__dirname, "../geo-audit-report.json"),
    rules: {
      minItems: 2,
      maxItems: 5,
      answerMinLength: 20,
      answerMaxLength: 300,
    },
  },

  // reading-sidebar.js
  reading: {
    dir: path.join(docsDir, "reading"),
    sidebarFile: "_sidebar.md",
    // 类目子目录里若意外出现 README.md 或 _sidebar.md（如某类目自带简介），不进 sidebar
    // index.html / .nojekyll 等非 .md 由 endsWith(".md") 自动过滤，无需在此列出
    ignoreFiles: ["README.md", "_sidebar.md"],
    // 留空 = sidebar 不显示首页链接（顶栏 brand + sidebar 站名已能点回 README.md）
    homeEntry: "",
    // Category directories must match this pattern (e.g. "0_效率与习惯")
    categoryPattern: /^\d+_/,
    // How to transform directory name for display (e.g. "0_效率与习惯" -> "0.效率与习惯")
    categoryNameReplace: [/^(\d+)_/, "$1."],
    // 置顶项（同类目内排在最前），数组顺序即显示顺序；与文件名做 includes 子串匹配，
    // 例如 "原则" 会同时命中 "原则.md" 和未来可能的 "原则与方法.md"
    pinnedFiles: ["原则"],
  },
};
