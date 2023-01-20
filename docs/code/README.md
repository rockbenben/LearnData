---
article: false
title: Coding
icon: code
---

代码编程的学习路径：

- 基础知识：ES6, MySQL，HTML，Markdown，正则表达式
- 脚本/开发工具：AutoHotkey，Electron
- 编程语言：[TypeScript 4.x](https://www.typescriptlang.org/zh/) + [JavaScript](https://www.javascript.com/)
- 前端框架：[Vue 3.x](https://cn.vuejs.org/)
  - 构建工具：[Vite 2.x](https://cn.vitejs.dev/)
  - 路由工具：[Vue Router 4.x](https://router.vuejs.org/zh/index.html)
  - 状态管理：[Vuex 4.x](https://next.vuex.vuejs.org/)
- UI 框架：[Element Plus](https://element-plus.gitee.io/zh-CN/guide/quickstart.html)
  - CSS 预编译：[Stylus](https://stylus-lang.com/) / [Sass](https://sass.bootcss.com/documentation) / [Less](http://lesscss.cn/)
  - CSS 后处理器：PostCSS，[tailwindcss](https://www.tailwindcss.cn/docs)
- Node.js 框架：[Midway](https://www.midwayjs.org/docs/intro)
- HTTP 工具：[Axios](https://axios-http.com/)
  - Git Hook 工具：[husky](https://typicode.github.io/husky/#/) + [lint-staged](https://github.com/okonet/lint-staged)
  - 代码规范：[EditorConfig](http://editorconfig.org) + [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) + [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#translation)
  - 提交规范：[Commitizen](http://commitizen.github.io/cz-cli/) + [Commitlint](https://commitlint.js.org/#/)
  - 单元测试：[vue-test-utils](https://next.vue-test-utils.vuejs.org/) + [jest](https://jestjs.io/) + [vue-jest](https://github.com/vuejs/vue-jest) + [ts-jest](https://kulshekhar.github.io/ts-jest/)
  - 自动部署：[GitHub Actions](https://docs.github.com/cn/actions/learn-github-actions)

## Visual Studio Code

本地代码编辑器使用 Visual Studio Code，其插件生态成熟，能实现大部分的需求。

GitHub Copilot，CodeGeeX，Tabnine，aiXcoder 插件均可以辅助补全代码。Tabnine 和 aiXcoder 有免费版，可以预测一到两行的代码。CodeGeeX 由清华大学开发，提供完整补全功能。

### 修改快捷键

选择「菜单栏」>「文件」>「首选项」>「键盘快捷方式」，修改或解绑快捷键。

以 PicGo 图床为例，其默认配置放置于 `%AppData%\picgo\data.json`，推荐快捷键为

- 剪贴板图片上传：`ctrlOrCmd+alt+q`
- 打开文件管理器上传：`ctrlOrCmd+alt+e`
- 打开输入框输入路径上传：`ctrlOrCmd+alt+x`

另外，右键对应快捷方式，点击「重置按键绑定」，即可将快捷键设为默认。

### 排除文件夹

在 VS Code 中点击快捷键 Ctrl/Command+Shift+P，输入「setting」，在设置中添加排除文件夹选项。注意：排除文件夹不能使用全路径，只能使用规则排除。

```json
"files.exclude": {
  "**/blog": true, //隐藏指定文件夹
  "**/[Pp]lugins": true, //使用中括号时表示不区分大小写
  "**/*.pyc": true, //隐藏所有 pyc 文件
  "**/*.d.ts": true, //隐藏所有 d.ts 文件
}
```

## 在线 IDE

在线 IDE 最大的优势是开箱即用，无需搭建环境，避免本地环境错误导致的各类 bug。

[StackBlitz](https://stackblitz.com/)：StackBlitz 界面类似 Visual Studio Code，可以直接 push 和拉取 GitHub 仓库的代码进行查看和编辑，项目支持离线开发，同时所有应用程序会自动部署在其服务器上。^[[六个好用的在线代码编辑器，你选哪个？](https://www.51cto.com/article/718302.html)]

[CodePen](https://codepen.io/pen/)：CodePen 是一个在线的 HTML、CSS 和 JavaScript 代码编辑器，能够编写代码并即时预览效果，便于项目分享预览。CodePen 也一个庞大的前端社区，上面有来自全球开发者分享的各种各样炫酷的效果，并且这些代码都是开源和共享的。

[CodeSandbox](https://codesandbox.io/s/)：CodeSandbox 编辑体验与 VSCode 类似，并支持 GitHub 导出、静态文件托管、本地项目导入等。缺点：不能直接导入 GitHub 项目。

## MySQL

在 Windows 平台上，需要先设置 [MySQL Server](https://downloads.mysql.com/archives/installer/)，然后使用数据库软件进行连接。如果使用本地数据库且未将 MySQL Server 设为自动启动，每次开机后需要手动启动。启动流程为：右键点击菜单栏最左侧，选择「计算机管理」>「服务和应用程序」>「服务」>「MYSQL57」，双击启动即可。
