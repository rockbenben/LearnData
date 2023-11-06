import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
  //专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
  { text: "博客", icon: "blog", link: "/blog" },
  {
    text: "应用",
    icon: "app",
    prefix: "/",
    children: [
      "apps/Applist",
      {
        text: "常用扩展",
        icon: "chrome",
        link: "apps/Chrome",
      },
      {
        text: "服务/专题",
        icon: "any",
        prefix: "",
        children: [
          {
            text: "直播手册",
            icon: "quote",
            link: "apps/livestreaming/1_obs_basic",
          },
          {
            text: "NAS 应用",
            icon: "process",
            link: "services/dockers-on-nas/",
          },
        ],
      },
    ],
  },
  {
    text: "生活",
    icon: "emmet",
    prefix: "/family/",
    children: ["Diet", "Shoppinglist", "Coupon", "baby/"],
  },
  {
    text: "工具",
    icon: "tool",
    children: [
      {
        text: "ChatGPT SC",
        icon: "creative",
        link: "https://www.aishort.top/",
      },
      { text: "IMGPrompt", icon: "pic", link: "https://prompt.newzone.top/" },
      { text: "文字处理", icon: "others", link: "https://tools.newzone.top/" },
      {
        text: "工具收藏",
        icon: "categoryselected",
        link: "https://nav.newzone.top/",
      },
    ],
  },
  {
    text: "Contact",
    icon: "advance",
    children: [
      {
        text: "微信",
        icon: "wechat",
        link: "https://img.newzone.top/wechat.svg",
      },
      { text: "Email", icon: "alias", link: "mailto:learndata@newzone.top" },
      { text: "Discord", icon: "group", link: "https://discord.gg/PZTQfJ4GjX" },
      { text: "RSS", icon: "rss", link: "https://newzone.top/rss.xml" },
    ],
  },
]);
