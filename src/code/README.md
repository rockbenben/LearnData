---
article: false
title: Coding
description: 想入门编程或提升技能？这份指南为你规划全栈学习路径：从Vue/React前端到Node.js后端，再到AutoHotkey自动化脚本。精选实用IDE与在线编辑器推荐，助你构建完整技术栈。
icon: fa6-solid:code
---

## 编程学习路径

AI 时代我们可以利用人工智能辅助编程，但你得对代码有基础的了解。

代码编程的学习路径：

- 编程语言：[TypeScript](https://www.typescriptlang.org/zh/)，[JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- 相关基础知识：HTML，Markdown，MySQL，正则表达式
- 脚本/开发工具：AutoHotkey，Electron，Tauri

- 前端框架：[Vue.js](https://cn.vuejs.org/)，[React](https://zh-hans.react.dev/)
- UI 框架：[Ant Design](https://ant-design.antgroup.com/index-cn)，[Element Plus](https://element-plus.org/zh-CN/)，[shadcn/ui](https://ui.shadcn.com/)
  - CSS 预编译：[Stylus](https://stylus-lang.com/) / [Sass](https://sass-lang.com/documentation/) / [Less](https://lesscss.cn/)
  - CSS 后处理器：PostCSS，[tailwindcss](https://www.tailwindcss.cn/docs)
- 网站生成工具：[VitePress](https://vitepress.dev/zh/)，[VuePress](https://v2.vuepress.vuejs.org/zh/)，[Astro](https://astro.build/)，[Next.js](https://nextjs.org/docs)

- Node.js 框架：[NestJS](https://nestjs.com/)，[Express](https://expressjs.com/)，[Hono](https://hono.dev/)，[Midway](https://www.midwayjs.org/)
- 构建工具：[Vite](https://cn.vite.dev/)，包管理器 [pnpm](https://pnpm.io/zh/)
- HTTP 工具：[Axios](https://axios-http.com/) / 原生 fetch
  - Git Hook 工具：[husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged)
  - 代码规范：[EditorConfig](https://editorconfig.org/) + [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/)（新项目用 flat config）
  - 提交规范：[Commitizen](https://commitizen.github.io/cz-cli/) + [Commitlint](https://commitlint.js.org/)
  - 单元测试：[Vitest](https://cn.vitest.dev/)（Vite 项目首选）/ [Jest](https://jestjs.io/) + [Vue Test Utils](https://test-utils.vuejs.org/zh/)
  - 自动部署：[GitHub Actions](https://docs.github.com/cn/actions)

## IDE 编辑器

- AI CLI：[Claude Code](https://newzone.top/code/ai-cli/claude-code.html)、[OpenAI Codex CLI](https://newzone.top/code/ai-cli/codex.html)、[Antigravity CLI（agy）](https://newzone.top/code/ai-cli/antigravity-cli.html)、[opencode](https://newzone.top/code/ai-cli/opencode.html)；已停用/转付费：[Gemini CLI](https://newzone.top/code/ai-cli/gemini-cli.html)、[Qwen Code](https://newzone.top/code/ai-cli/qwen-code.html)、[Rovo Dev CLI](https://newzone.top/code/ai-cli/rovo-dev-cli.html)
- AI IDE：[Cursor](https://cursor.com/)、[Windsurf](https://windsurf.com/)、[Google Antigravity](https://antigravity.google/)、[Kiro](https://kiro.dev/)（亚马逊）、GitHub Copilot、[Zed](https://zed.dev/)；国产有 TRAE（字节）、CodeBuddy（腾讯），以及 VS Code 插件形态的通义灵码（阿里）
- [Visual Studio Code](https://newzone.top/apps/tutorials/vscode.html)：本地代码编辑器首选，插件丰富，适应各种开发需求。

- 在线 IDE：开箱即用，无需搭建环境，避免本地环境错误导致的各类 bug。
  - [StackBlitz](https://stackblitz.com/)：StackBlitz 界面类似 Visual Studio Code，可以直接 push 和拉取 GitHub 仓库的代码进行查看和编辑，项目支持离线开发，同时所有应用程序会自动部署在其服务器上。^[[六个好用的在线代码编辑器，你选哪个？](https://www.51cto.com/article/718302.html)]

  - [CodePen](https://codepen.io/pen/)：CodePen 是一个在线的 HTML、CSS 和 JavaScript 代码编辑器，能够编写代码并即时预览效果，便于项目分享预览。CodePen 也是一个庞大的前端社区，上面有来自全球开发者分享的各种各样炫酷的效果，并且这些代码都是开源和共享的。

  - [GitHub Codespaces](https://github.com/features/codespaces)：GitHub 官方的云端开发环境，基于容器为仓库一键启动完整的 VS Code（网页或本地连接），自带终端、可装插件、能跑服务，个人账户每月有免费额度。CodeSandbox 的 GitHub 仓库导入功能已于 2026 年停用，官方亦建议迁移到 Codespaces。

  - [bolt.new](https://bolt.new/)：StackBlitz 推出的 AI 全栈生成工具，用自然语言直接生成、运行并部署 Web 应用，适合快速原型。
