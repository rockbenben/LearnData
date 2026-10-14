import SocialLink from "./components/SocialLink.js";
import { defineClientConfig } from "vuepress/client";

// 如果启用 Algolia 全文搜索（theme.ts 中开启 docsearch），建议取消下方注释：
// DocSearch v5 的 stallThreshold 是 300ms（等待超 300ms 就会将放大镜切成 Loading 图标）。
// 插件内部默认包了一层 500ms 的 searchClient 防抖，500ms > 300ms 导致每次输入第 1 个字符必在 300ms 触发 loading，
// Preact 切换图标时因无 key 会将兄弟节点 <input> 销毁重建，导致光标丢失、无法继续输入。
// 客户端覆盖 transformSearchClient，去除这层多余的 500ms 延迟，恢复顺畅输入。
// import { defineDocSearchConfig } from "@vuepress/plugin-docsearch/client";
// defineDocSearchConfig({
//   transformSearchClient: (searchClient) => searchClient,
// });

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("SocialLink", SocialLink);
  },
});
