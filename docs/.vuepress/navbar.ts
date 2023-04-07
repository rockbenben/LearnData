import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "博客", icon: "blog", link: "/blog" },
  {
    text: "代码",
    icon: "code",
    prefix: "/",
    children: [
      "code/Markdown",
      "code/AutoHotkey",
      "code/Electron",
      {
        text: "页面开发",
        icon: "vue",
        prefix: "",
        children: ["web/VuePress", "web/docsify", "deploy/VPS"],
      },
    ],
  },
  {
    text: "应用",
    icon: "app",
    prefix: "/",
    children: [
      "apps/Applist",
      { text: "ChatGPT SC", icon: "creative", link: "https://ai.newzone.top/" },
      { text: "直播手册", icon: "quote", link: "apps/livestreaming/1_obs_basic" },
      {
        text: "服务/系统",
        icon: "any",
        prefix: "",
        children: ["services/NAS", "windows/faq"],
      },
    ],
  },
  {
    text: "生活",
    icon: "emmet",
    prefix: "/family/",
    children: ["Diet", "Shoppinglist", "Coupon"],
  },
  {
    text: "Contact",
    icon: "advance",
    children: [
      { text: "微信", icon: "wechat", link: "https://tc.seoipo.com/wechat.svg" },
      { text: "Discord", icon: "group", link: "https://discord.gg/PZTQfJ4GjX" },
      { text: "RSS", icon: "rss", link: "https://newzone.top/rss.xml" },
    ],
  },
  { text: "工具收藏", icon: "tool", link: "https://nav.newzone.top/" },
]);
