//import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { searchPlugin } from "@vuepress/plugin-search";
//import { defineUserConfig } from "vuepress";
import { defineUserConfig } from '@vuepress/cli';
import theme from "./theme";

export default defineUserConfig({

  lang: "zh-CN",
  title: "LearnData-开源学习笔记",
  description: "开源工具、前端代码的学习笔记，记录一切能让自己提升的知识",

  base: "/",

  head: [
    [
      "img",
      {
        referrerpolicy: "no-referrer-when-downgrade",
        src: "https://piwik.seoipo.com/matomo.php?idsite=7&amp;rec=1",
        style: "border:0",
        alt: "",
      },
    ],
  ],

  theme,
  plugins: [
    //docsearchPlugin({
      // 你的选项
    //}),
    searchPlugin({
      // 你的选项
    }),
  ],
});
