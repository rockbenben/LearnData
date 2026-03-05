import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllMarkdownFiles } from "./lib/markdown-utils.js";
import config from "./config.js";

const { baseUrl: BASE_URL, title: SITE_TITLE, description: SITE_DESC } = config.site;

if (!BASE_URL) console.warn("⚠️ No baseUrl detected. Check .vuepress/theme.ts or set BASE_URL env var.");
if (!SITE_TITLE) console.warn("⚠️ No site title detected. Check .vuepress/config.ts");

/**
 * Generate URL based on file path
 */
function generateUrl(filePath) {
  const relativePath = path.relative(config.docsDir, filePath);

  // Handle Docsify reading notes
  if (relativePath.startsWith("reading" + path.sep)) {
    const docsifyPath = relativePath
      .replace(/^reading[\/\\]/, "")
      .replace(/\\/g, "/")
      .replace(/\.md$/, "");
    return `${BASE_URL}/reading/#/${docsifyPath}`;
  }

  // Handle VuePress pages
  let urlPath = relativePath.replace(/\\/g, "/");

  if (urlPath.endsWith("README.md") || urlPath.endsWith("index.md")) {
    urlPath = urlPath.replace(/(^|\/)(README|index)\.md$/, "$1");
  } else {
    urlPath = urlPath.replace(/\.md$/, ".html");
  }

  if (urlPath && !urlPath.endsWith(".html") && !urlPath.endsWith("/")) {
    urlPath += "/";
  }

  return `${BASE_URL}/${urlPath}`;
}

/**
 * Clean description text
 */
function cleanDescription(text) {
  if (text == null) return "";
  if (Array.isArray(text)) text = text.filter(Boolean).join(" ");
  if (typeof text !== "string") {
    if (typeof text === "number" || typeof text === "boolean") text = String(text);
    else return "";
  }
  return text
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/[\r\n]+/g, " ")
    .trim();
}

/**
 * Main function
 */
function main() {
  console.log("🔍 Scanning for Markdown files...");
  console.log(`🌐 Base URL: ${BASE_URL}`);
  const files = getAllMarkdownFiles(config.docsDir, config.llms.excludedDirs);
  console.log(`📄 Found ${files.length} files.`);

  const pages = [];

  files.forEach((filePath) => {
    try {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content: body } = matter(raw);
      const frontmatter = Object.keys(data).length > 0 ? data : null;

      let title = frontmatter?.title ? String(frontmatter.title) : null;
      let description = frontmatter?.description ? cleanDescription(frontmatter.description) : null;

      // Fallback if no title in frontmatter
      if (!title) {
        const h1Match = body.match(/^#\s+(.+)$/m);
        if (h1Match) {
          title = h1Match[1].trim();
        }
      }

      // Fallback: extract first content paragraph from body
      if (!description && title) {
        for (const line of body.split("\n")) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith(">") || trimmed.startsWith("![") || trimmed.startsWith("```") || trimmed.startsWith("<")) continue;

          description = cleanDescription(trimmed);
          if (description.length > 200) {
            description = description.substring(0, 197) + "...";
          }
          break;
        }
      }

      if (title) {
        pages.push({
          title,
          description: description || "",
          url: generateUrl(filePath),
        });
      }
    } catch (e) {
      console.warn(`⚠️ Error processing ${filePath}: ${e.message}`);
    }
  });

  pages.sort((a, b) => a.url.localeCompare(b.url));

  let content = `# ${SITE_TITLE}\n\n`;
  content += `> ${SITE_DESC}\n\n`;
  content += `## Pages\n\n`;

  pages.forEach((page) => {
    content += `- [${page.title}](${page.url})`;
    if (page.description) {
      content += ` - ${page.description}`;
    }
    content += `\n`;
  });

  const outputDir = path.dirname(config.llms.outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(config.llms.outputFile, content, "utf-8");
  console.log(`✅ Generated ${config.llms.outputFile} with ${pages.length} pages.`);
}

main();
