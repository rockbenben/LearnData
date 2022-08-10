import { navbar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  //"/",
  { text: "博客", icon: "blog", link: "/blog" },
  {
    text: "代码",
    icon: "code",
    prefix: "/",
    children: [
      "code/Markdown",
      "code/AutoHotKey",
      "code/Electron",
      {
        text: "页面开发",
        icon: "vue",
        prefix: "",
        children: [
          "web/VuePress",
          "web/docsify",
          "deploy/VPS",
        ],
      },
    ],
  },
  {
    text: "应用",
    icon: "app",
    prefix: "/",
    children: [
      "apps/Applist",
      "apps/AppNotes",
      "apps/Chrome",
      {
        text: "服务/系统",
        icon: "any",
        prefix: "",
        children: [
          "services/NAS",
          "windows/faq",
        ],
      },
    ],
  },
  {
    text: "生活",
    icon: "emmet",
    prefix: "/family/",
    children: [
      "Diet",
      "Shoppinglist",
      "Coupon",
    ],
  },
  { text: "工具收藏", icon: "tool", link: "https://nav.newzone.top/" },
]);
