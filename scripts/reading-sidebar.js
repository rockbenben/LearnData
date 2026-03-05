/**
 * Auto-generate _sidebar.md for Docsify reading notes
 * Run: node scripts/generate-reading-sidebar.js
 */

import fs from "fs";
import path from "path";
import config from "./config.js";

const { dir: READING_DIR, sidebarFile, ignoreFiles, homeEntry, categoryPattern, categoryNameReplace, pinnedFiles = {} } = config.reading;
const SIDEBAR_PATH = path.join(READING_DIR, sidebarFile);

/**
 * Extract title from markdown file (first H1 heading)
 */
function getTitle(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const match = content.match(/^#\s+(.+)$/m);
    if (match) return match[1].trim();
  } catch (e) {
    // Ignore read errors
  }
  return path.basename(filePath, ".md").replace(/_/g, " ");
}

/**
 * Scan directory and build sidebar structure
 */
function buildSidebar() {
  const lines = [homeEntry];

  // Get all category directories matching the configured pattern
  const categories = fs
    .readdirSync(READING_DIR)
    .filter((name) => {
      const fullPath = path.join(READING_DIR, name);
      return fs.statSync(fullPath).isDirectory() && categoryPattern.test(name);
    })
    .sort((a, b) => {
      const numA = parseInt(a.match(/^(\d+)/)[1]);
      const numB = parseInt(b.match(/^(\d+)/)[1]);
      return numA - numB;
    });

  for (const category of categories) {
    const categoryPath = path.join(READING_DIR, category);

    // Get all .md files in this category, pinned files first
    const files = fs
      .readdirSync(categoryPath)
      .filter((name) => name.endsWith(".md") && !ignoreFiles.includes(name))
      .sort((a, b) => {
        const pa = pinnedFiles.some((k) => a.includes(k));
        const pb = pinnedFiles.some((k) => b.includes(k));
        if (pa !== pb) return pa ? -1 : 1;
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
