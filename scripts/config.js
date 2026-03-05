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

  // generate-llms-txt.js
  llms: {
    outputFile: path.join(docsDir, ".vuepress/dist/llms.txt"),
    excludedDirs: ["node_modules", ".vuepress", "_temp"],
  },

  // audit-frontmatter.js
  audit: {
    excludedDirs: ["node_modules", ".vuepress", "_temp", "reading"],
    outputFile: path.join(__dirname, "../audit-report.json"),
    seoRules: {
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

  // generate-reading-sidebar.js
  reading: {
    dir: path.join(docsDir, "reading"),
    sidebarFile: "_sidebar.md",
    ignoreFiles: ["README.md", "_sidebar.md", "_navbar.md", "index.html", ".nojekyll"],
    homeEntry: "- [读书方法](README.md)",
    // Category directories must match this pattern (e.g. "0_效率与习惯")
    categoryPattern: /^\d+_/,
    // How to transform directory name for display (e.g. "0_效率与习惯" -> "0.效率与习惯")
    categoryNameReplace: [/^(\d+)_/, "$1."],
    // Pinned names (shown first in their category, matched without .md)
    pinnedFiles: ["原则"],
  },
};
