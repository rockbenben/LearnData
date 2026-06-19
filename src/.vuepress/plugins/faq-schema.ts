import type { PluginFunction } from "vuepress/core";

/**
 * VuePress 插件：自动将 Frontmatter 中的 faq 字段转换为 FAQPage JSON-LD
 * 注入到页面 <head> 中，用于 GEO (Generative Engine Optimization)
 *
 * Frontmatter 格式：
 * faq:
 *   - question: "问题"
 *     answer: "回答"
 */
export const faqSchemaPlugin = (): PluginFunction => () => ({
  name: "vuepress-plugin-faq-schema",

  extendsPage(page) {
    const faq = page.frontmatter.faq as
      | Array<{ question: string; answer: string }>
      | undefined;

    if (!faq || !Array.isArray(faq) || faq.length === 0) {
      return;
    }

    // 过滤无效条目
    const validItems = faq.filter(
      (item) =>
        item &&
        typeof item.question === "string" &&
        item.question.trim() &&
        typeof item.answer === "string" &&
        item.answer.trim()
    );

    if (validItems.length === 0) {
      return;
    }

    // 构建 FAQPage JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: validItems.map((item) => ({
        "@type": "Question",
        name: item.question.trim(),
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer.trim(),
        },
      })),
    };

    // 注入到 page head
    const head = page.frontmatter.head ?? [];
    if (!Array.isArray(head)) {
      return;
    }

    head.push([
      "script",
      { type: "application/ld+json" },
      // 转义 < 为 <，避免答案/问题文本中的 </script> 提前闭合 JSON-LD 脚本块
      // （VuePress renderHead 原样注入 innerHTML，不做转义）。< 仍是合法 JSON，解析后还原为 <。
      JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
    ]);

    page.frontmatter.head = head;
  },
});
