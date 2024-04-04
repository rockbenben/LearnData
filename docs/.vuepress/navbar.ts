import { navbar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
// 专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
  { text: "博客", icon: "fa-solid fa-blog", link: "/blog" },
  {
    text: "应用",
    icon: "fa-solid fa-bars-staggered",
    prefix: "/",
    children: [
      "apps/Applist",
      {
        text: "常用扩展",
        icon: "fa-brands fa-chrome",
        link: "apps/Chrome",
      },
      {
        text: "服务/专题",
        icon: "",
        prefix: "",
        children: [
          {
            text: "专题示例",
            icon: "fa-solid fa-dice-d20",
            link: "apps/topic/",
          },
        ],
      },
    ],
  },
  {
    text: "生活",
    icon: "fa-solid fa-bed-pulse",
    prefix: "/family/",
    children: ["Diet", "Coupon"],
  },
  {
    text: "工具",
    icon: "fa-solid fa-toolbox",
    children: [
      {
        text: "ChatGPT SC",
        icon: "fa-solid fa-bolt",
        link: "https://www.aishort.top/",
      },
      { text: "IMGPrompt", icon: "fa-solid fa-image", link: "https://prompt.newzone.top/" },
      { text: "多语言翻译", icon: "fa-solid fa-language", link: "https://tools.newzone.top/json-translate" },
      {
        text: "工具收藏",
        icon: "fa-solid fa-bars",
        link: "https://nav.newzone.top/",
      },
    ],
  },
]);
