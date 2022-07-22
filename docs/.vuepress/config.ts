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
      "meta",
      {
        name: "keywords",
        content: "自我提升,效率,开源工具",
      },
    ],
  ],

  theme,
  plugins: [
    docsearchPlugin({
    }),
  ],
});
