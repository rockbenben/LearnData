//import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { defineUserConfig } from "@vuepress/cli";
//import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { feedPlugin } from "vuepress-plugin-feed2";
import { path } from "@vuepress/utils";
import theme from "./theme";

export default defineUserConfig({
  //filenameHashing: false,

  bundler: webpackBundler({
    // ...
    chainWebpack(config) {
      // do not use chunk hash in js
      //参照案例：https://github.com/vuepress/vuepress-plugin-named-chunks/blob/b9fb5a1d3475530b1d74b6616f92a6e3bf14a7ed/__tests__/docs/.vuepress/config.js
      //config.output.filename("[name].js").chunkFilename("[name].js");
      config
        .output
          //.path(path.resolve(__dirname, "../dist"))
          //.filename(`[name].[hash:8].js`)
          .filename(`[name].js`)
          //.chunkFilename("assets/chunks/[name].[chunkhash].js")
          .chunkFilename("assets/chunks/[name].js")
    },
  }),

  lang: "zh-CN",
  title: "LearnData-开源学习笔记",
  description: "开源工具、前端代码的学习笔记，记录一切能让自己提升的知识",

  base: "/",

  theme,
  shouldPrefetch: false,

  //修改页面模板，@vuepress-theme-hope/templates/index.build.html
  templateBuild: path.resolve(__dirname, "templateBuild.html"),

  plugins: [
    //docsearchPlugin({
      // 你的选项
    //}),
    searchPlugin({
      // 你的选项
    }),
    googleAnalyticsPlugin({
      id: "G-RWKZTY2P9R",
    }),
    feedPlugin({
      hostname: "https://newzone.top",
      rss: true,
      count: 10,
    }),
  ],
});
