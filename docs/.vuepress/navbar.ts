import { navbar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  "/",
  { text: "博客记录", icon: "blog", link: "/blog" },
  { text: "VuePress", icon: "vue", link: "/web/VuePress" },
  {
    text: "代码笔记",
    icon: "code",
    prefix: "/code/",
    children: [
      "Markdown",
      "AutoHotKey",
      "Electron",
      "HTML",
      "Javascript",
    ],
  },
  //{ text: "GitHub", icon: "github", link: "/deploy/GitHub" },
  //{ text: "NAS", icon: "any", link: "/services/NAS" },
  //{ text: "生活", icon: "emmet", link: "/family/" },
  { text: "工具收藏", icon: "tool", link: "https://nav.newzone.top/" },
]);
