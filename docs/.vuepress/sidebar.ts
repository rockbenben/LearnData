import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar({
  "": [
  "/DailyRoutine",
  "/Fitness",
  // 读书笔记架构更换到 docsify，不能使用相对链接
  { text: "读书笔记", icon: "read", link: "https://newzone.top/reading/" },
  // 指定显示页面
  {
    text: "🧰 应用手册",
    icon: "",
    prefix: "/apps/",
    link: "",
    collapsible: true,
    children: [
      "Applist.md",
      "design.md",
      "ChatGPT.md",
      "Chrome.md",
      {
        text: "工具笔记",
        icon: "plugin",
        prefix: "tutorials/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "直播手册",
        icon: "load",
        prefix: "livestreaming/",
        link: "",
        collapsible: true,
        children: "structure",
      },
    ],
  },
  {
    text: "🐋 Docker 服务",
    icon: "",
    prefix: "/services/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🪟 系统问题",
    icon: "",
    prefix: "/windows/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🔡 代码编程",
    icon: "",
    prefix: "",
    link: "",
    collapsible: true,
    children: [
      {
        text: "页面开发",
        icon: "",
        prefix: "/web/",
        collapsible: true,
        children: "structure",
      },
      {
        text: "网站部署",
        icon: "",
        prefix: "/deploy/",
        collapsible: true,
        children: [
          "Static.md",
          "CloudServices.md",
          "VPS.md",
          {
            text: "部署工具",
            icon: "emmet",
            collapsible: true,
            children: ["GitHub.md", "Cloudflare.md", "MySQL.md", "DNS.md"],
          },
        ],
      },
      {
        text: "代码学习",
        icon: "",
        prefix: "/code/",
        collapsible: true,
        children: [
          "README.md",
          {
            text: "Basic",
            icon: "emmet",
            collapsible: true,
            children: ["Markdown.md", "Electron.md", "AutoHotkey.md", "Regex.md"],
          },
          {
            text: "FrondEnd",
            icon: "app",
            collapsible: true,
            children: ["Vue.md", "HTML.md", "JavaScript.md", "Python.md"],
          },
        ],
      },
    ],
  },
  {
    text: "🛖 生活记录",
    icon: "",
    prefix: "/family/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "博客文章",
    icon: "blog",
    prefix: "/_posts/",
    link: "/blog",
    collapsible: true,
    children: "structure",
  }],
  // 独立功能区
  "/services/dockers-on-nas/": "structure",
  "/family/baby/": "structure"
});
