/**
 * Auto-generate _sidebar.md for Docsify reading notes
 * Run: node scripts/reading-sidebar.js
 */

import fs from "fs";
import path from "path";
import config from "./config.js";

const { dir: READING_DIR, sidebarFile, ignoreFiles, homeEntry, categoryPattern, categoryNameReplace, pinnedFiles = [] } = config.reading;
const SIDEBAR_PATH = path.join(READING_DIR, sidebarFile);

/**
 * Extract title from markdown file (first H1 heading), stripping markdown decorations.
 * 防御性剥离：H1 里若写了 `# **书名**` `# [书名](url)` `# *书名*` `# `书名``，
 * 直接拿 match[1] 会把 markdown 字符带进 sidebar 显示文本。
 */
function getTitle(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const match = content.match(/^#\s+(.+)$/m);
    if (match) {
      return match[1]
        .trim()
        .replace(/\*\*(.+?)\*\*/g, "$1") // bold
        .replace(/\*(.+?)\*/g, "$1") // italic
        .replace(/\[(.+?)\]\([^)]+\)/g, "$1") // links
        .replace(/`(.+?)`/g, "$1"); // inline code
    }
  } catch (e) {
    // Ignore read errors
  }
  return path.basename(filePath, ".md").replace(/_/g, " ");
}

/**
 * Scan directory and build sidebar structure
 */
function buildSidebar() {
  const lines = [];
  if (homeEntry) lines.push(homeEntry);

  // Get all category directories matching the configured pattern.
  // 用数值排序（不用 localeCompare）是为了支持 10+ 个类目——字符串排序会把 "10_xx" 排到 "1_xx" 后面、"2_xx" 前面，
  // 数值排序保持自然顺序。categoryPattern 已保证有数字前缀，?.[1] 双保险防 match 返回 null。
  const categories = fs
    .readdirSync(READING_DIR)
    .filter((name) => {
      const fullPath = path.join(READING_DIR, name);
      return fs.statSync(fullPath).isDirectory() && categoryPattern.test(name);
    })
    .sort((a, b) => {
      const numA = parseInt(a.match(/^(\d+)/)?.[1] ?? "0");
      const numB = parseInt(b.match(/^(\d+)/)?.[1] ?? "0");
      return numA - numB;
    });

  for (const category of categories) {
    const categoryPath = path.join(READING_DIR, category);

    // Get all .md files in this category, pinned files first.
    // 用 findIndex 而非 some——多个 pinned 项之间按 pinnedFiles 数组的声明顺序排，
    // 而不是按 localeCompare 落回拼音排序。配置 ["原则", "终身成长"] 时这两本就按这个顺序 pin。
    // 注意：includes(k) 是子串匹配，pinnedFiles: ["原则"] 会同时匹配 "原则.md" 和未来可能的 "原则与方法.md"。
    const files = fs
      .readdirSync(categoryPath)
      .filter((name) => name.endsWith(".md") && !ignoreFiles.includes(name))
      .sort((a, b) => {
        const pa = pinnedFiles.findIndex((k) => a.includes(k));
        const pb = pinnedFiles.findIndex((k) => b.includes(k));
        if (pa !== pb) {
          if (pa === -1) return 1;
          if (pb === -1) return -1;
          return pa - pb;
        }
        return a.localeCompare(b, "zh-CN");
      });

    if (files.length === 0) continue;

    const categoryName = category.replace(categoryNameReplace[0], categoryNameReplace[1]);
    lines.push(`- ${categoryName}`);

    for (const file of files) {
      const filePath = path.join(categoryPath, file);
      const title = getTitle(filePath);
      const relativePath = `${category}/${file}`;

      lines.push(`  - [${title}](${relativePath})`);
    }
  }

  return lines.join("\n") + "\n";
}

// Main
if (!fs.existsSync(READING_DIR)) {
  console.error(`❌ Reading directory not found: ${READING_DIR}`);
  process.exit(1);
}

const sidebar = buildSidebar();
fs.writeFileSync(SIDEBAR_PATH, sidebar, "utf-8");
console.log("✅ Generated _sidebar.md with", sidebar.split("\n").length - 1, "entries");
