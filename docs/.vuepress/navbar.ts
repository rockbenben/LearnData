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
        text: "开源工具",
        icon: "chrome",
        link: "apps/toolbox",
      },
      {
        text: "服务/专题",
        icon: "any",
        prefix: "",
        children: [
          {
            text: "专题示例",
            icon: "process",
            link: "apps/topic/",
          },
        ],
      },
    ],
  },
  {
    text: "生活",
    icon: "emmet",
    prefix: "/family/",
    children: ["Diet", "Coupon"],
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
      { text: "多语言处理", icon: "others", link: "https://tools.newzone.top/json-translate" },
      {
        text: "工具收藏",
        icon: "categoryselected",
        link: "https://nav.newzone.top/",
      },
    ],
  },
]);
