import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Recursively collect all Markdown files, skipping excluded directories.
 */
export function getAllMarkdownFiles(dir, excludedDirs = []) {
  const fileList = [];

  const scan = (currentDir) => {
    for (const entry of fs.readdirSync(currentDir)) {
      const fullPath = path.join(currentDir, entry);
      if (fs.statSync(fullPath).isDirectory()) {
        if (!excludedDirs.includes(entry)) scan(fullPath);
      } else if (entry.endsWith(".md")) {
        fileList.push(fullPath);
      }
    }
  };

  scan(dir);
  return fileList;
}

/**
 * Parse frontmatter via gray-matter. Returns data object or null.
 */
export function parseFrontmatter(content) {
  try {
    const { data } = matter(content);
    return Object.keys(data).length > 0 ? data : null;
  } catch {
    return null;
  }
}

/**
 * Display-width character length (non-ASCII counts as 2).
 * Iterates by code point to correctly handle emoji / surrogate pairs.
 */
export function getCharLength(str) {
  if (str == null) return 0;
  if (typeof str !== "string") str = String(str);
  let len = 0;
  for (const char of str) {
    len += char.codePointAt(0) > 127 ? 2 : 1;
  }
  return len;
}
