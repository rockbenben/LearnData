import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "LearnData-开源学习笔记",
  description: "开源工具，前端代码的学习笔记，记录一切能让自己提升的知识",

  base: "/notes/",

  head: [
    [
      "img",
      {
        name: "referrerpolicy",
        content: "no-referrer-when-downgrade",
      },
      {
        name: "src",
        content: "https://piwik.seoipo.com/matomo.php?idsite=7&amp;rec=1",
      },
      {
        name: "style",
        content: "border:0",
      },
    ],
  ],

  theme,
  plugins: [
    docsearchPlugin({
    }),
  ],
});
