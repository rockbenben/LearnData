---
article: false
title: LearnData 开源笔记
icon: fa-solid fa-book-open-reader
---

> 开源工具、效率方法、心理学探索的自我提升笔记

[![](https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&label=Discord&logo=discord&style=for-the-badge)](https://discord.gg/PZTQfJ4GjX)

## ✨ 初衷

曾经，我采用了 Notion、Obsidian 和 飞书 等多款知识管理工具来存储我的心得与笔记。然而，这种方式导致我的资料分散，难以管理和分享。

更重要的是，**笔记里的知识并不属于你，只有经过消化、应用，才会成为我们的财富。**

为此，我基于 VuePress 和 vuepress-theme-hope 构建了 LearnData 开源笔记，将我所有的笔记与文章聚合到同一页面形成知识库，便于集中管理和分享。

![](https://img.newzone.top/2022-08-22-19-28-25.png?imageMogr2/thumbnail/600x "笔记 + 文章 = LearnData 知识库")

![](https://img.newzone.top/2022-08-24-19-14-59.png "笔记/博客自动化发布")

## 🧱 笔记结构

- 置顶：日常习惯、健身、阅读；
- 软件应用：常用应用、Chrome 扩展和相关教程；
- Docker 服务：NAS 和服务器上的后端应用，以 Docker 容器为主；
- 系统问题：Windows 系统优化和相关问题；
- 代码编程：常用代码的学习和使用笔记，页面开发攻略和网站相关的工具和知识收集；
- 生活角落：说明书、生活记录和小技巧；
- 博客汇总：聚合所有博客文章，以分类、标签、时间轴等方式进行组合。

## 🍥 搭建 LearnData

1. 首先，访问 [LearnData 项目页面](https://github.com/rockbenben/LearnData)，然后点击页面右上角的「Use this template」按钮。在弹出的页面中选择「Create a new repository」以创建一个基于此模板的新仓库。

   ![](https://img.newzone.top/2022-08-10-19-32-05.png?imageMogr2/format/webp)

   ![](https://img.newzone.top/2022-08-10-19-34-13.png?imageMogr2/thumbnail/500x)

2. 进入你的项目仓库，点击「Settings」>「Actions」>「General」，找到页面底部的 `Workflow permissions` 设置。选中 `Read and write permissions` 选项，并点击保存。这一步骤是确保 GitHub Page 在部署时能够正确访问和修改你的仓库内容，避免因权限不足导致部署失败（报错 `failed with exit code 128`）。

   ![](https://img.newzone.top/2023-03-14-04-02-16.png?imageMogr2/format/webp)

3. 然后，请进入菜单栏顶部的「Actions」页签，选择最新的 workflow。在页面右上方点击「Re-run jobs」>「Re-run all jobs」，这样做可以触发 GitHub 自动重新生成并部署网页。如果设置无误，GitHub 会自动创建一个名为 gh-page 的分支，并在其中部署你的页面。

   ![](https://img.newzone.top/2023-03-14-04-04-52.gif?imageMogr2/format/webp)

4. 接下来，返回「Settings」页面，修改 `Repository name` 为 `你的用户名.github.io`。例如，如果你的仓库链接是 `https://github.com/xxx/LearnData`，那么 `xxx` 就是你的 GitHub 用户名。若该名称已被其他项目使用，系统会显示红色错误提示。此时，你可以选择任意其他名称，例如 LearnData，部署页面路径将变为 `你的用户名.github.io/LearnData`。如果页面样式显示不正常，可能需要设置子域名，具体方法可以参考页面底部的[常见问题 - 网页显示异常](#网页显示异常)。

   ![](https://img.newzone.top/20180505202201.png?imageMogr2/format/webp)

5. 在「Settings」>「Pages」>「Build and deployment」>「Branch」中，将 gh-page 分支设置为 GitHub Pages 的源。大部分情况下，网站运行目录保持默认的 `/(root)` 即可。完成设置后，不要忘记点击「Save」保存。如果在此步骤中未找到 gh-pages 分支，请回到第三步重新触发一次 workflow，或尝试修改仓库中的任意文件以手动启动 GitHub Action。

   ![](https://img.newzone.top/2022-08-10-19-39-15.png?imageMogr2/format/webp)

6. 设置完成后，稍等几分钟再刷新页面，你将看到一个新的访问链接提示：`https://你的用户名.github.io/`。此时，你的个人知识库已经成功搭建，并且可以通过此链接访问了。

## 🔣 配置 LearnData

### 文档结构

LearnData 网站的配置和文本都存放在 `docs` 文件夹中。文章和页面的配置可参考主目录下的 [samplepage.md](https://github.com/rockbenben/LearnData/blob/main/samplepage.md?plain=1)。其中，`order` 参数表示侧边栏的顺序，数字越小越靠前，支持非整数和负数。我个人的偏好是将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。这种设置使我能随时记录低于 1000 字的短文，同时不会影响那些寻求干货文章的用户体验，因为干货文章的排序始终保持在最上方。

docs 目录结构如下：

```bash
docs
|── .vuepress               # 网站配置
│   ├── config.ts           # 网站环境依赖和网站属性
│   ├── sidebar.ts          # 侧边栏
│   ├── navbar.ts           # 导航栏
│   ├── theme.ts            # 主题和插件
│   └── templateBuild.html  # 网页模板，网站关键词和统计
|── _posts                  # 博客文章目录
├── _temp                   # 草稿箱
├── reading                 # 读书笔记
├── anyname                 # 自定义笔记
├── blog.md                 # 博客页面
└── intro.md                # 博主个人介绍
```

`docs/.vuepress` 路径下是网站的配置文件，我已添加了详细的注释。你可以参考注释和 [vuepress-theme-hope 配置案例](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress)来调整配置。请在 `docs/.vuepress/sidebar.ts` 文件中修改文件夹路径，后台会自动抓取路径下的 md 文件来生成侧边栏。`docs/.vuepress/theme.ts` 有[评论插件](https://newzone.top/web/Comments.html)的相关配置。

注意：

- LearnData 默认采用 algolia 进行全文检索。如果你没用 algolia，可在 `docs/.vuepress/theme.ts` 文件的 plugins 部分删除 docsearch 区块，并激活 searchPro。这样，网站将转用本地全文索引来进行搜索。
- `docs/_temp` 文件夹默认不同步到 GitHub 上。你可以手动在本地建立 `_temp` 文件夹，用来存放草稿。
- 自 VuePress2 的 beta.54 版本开始，文件夹名前缀为 `_` 在生成链接时将被省略，例如文章路径为 `/_posts/`，但网页链接路径会是 `/posts/`。

### 看板娘

LearnData 集成了看板娘 [Live2D Widget](https://github.com/stevenjoezhang/live2d-widget)，支持随机对话、切换人物服饰和玩打飞机游戏，能提升网站美观度和趣味性。如果不需要看板娘，可以删除 `docs\.vuepress\public` 下的 live2d-widget 文件夹。

如果网站部署在子页面 `https://xxx.github.io/yyy`，则需将子页面路径 yyy 加入到以下两个文件：

- 将 `docs\.vuepress\public\live2d-widget\autoload.js` 文件第三行的 `const live2d_path = "/live2d-widget/"` 修改为 `const live2d_path = "/yyy/live2d-widget/"`。
- 将 `docs\.vuepress\templateBuild.html` 文件中看板娘区块代码 `<script src="/live2d-widget/autoload.js">` 修改为 `<script src="/yyy/live2d-widget/autoload.js">`。

如果你想要修改看板娘模型，请参考 `docs\.vuepress\public\live2d-widget` 路径下的 README 和修改说明。如果你想在服务器上自建 [live2d api](https://github.com/fghrsh/live2d_api)，请注意添加跨域配置，否则可能会出现只显示文字而不显示看板娘图片的情况。

### 读书笔记

读书笔记中可能会有大量的原文引用，这与 LearnData 精简化知识点的初衷并不相符。因此，我们使用 docsify 来构建读书笔记，并将其放置于 `docs/reading` 目录下。在生成静态页面后，该路径下的文件不会被转换为 HTML 文件，而是将被自动复制到静态网站下，完成 docsify 页面构建和独立的读书笔记搜索索引。

由于读书笔记架构更换到 docsify，不能使用相对链接。请调整 `docs\.vuepress\sidebar.ts` 的 `{ text: "读书笔记", icon: "read", link: "https://newzone.top/reading/" }`，将 `newzone.top` 替换为你的博客域名。

如果你没有部署 Waline，或不需统计阅读量和评论功能，可移除 `docs\reading\index.html` 中的 Waline 代码块。

```typescript
waline: {
   serverURL: "https://waline.newzone.top",
   ...
}
```

### 本地图片引用

为了避免在生成静态页面时出现 `Rollup failed to resolve import` 错误，本地图片必须保存在 `docs/.vuepress/public` 路径下。如果图片名称为 `1.png`，保存在 `docs/.vuepress/public/imgs` 路径下，则可以使用以下链接来引用该图片：`/imgs/1.png` 或使用 Markdown 图片链接：`![](/imgs/1.png)`。本方法也适用于将附件部署到网站上。

## 🖥️ 网站部署

在将 LearnData 推送到 GitHub 后，会自动生成可访问的网页。但由于国内访问 GitHub Pages 的速度不稳定，为了确保网站能够正常访问，建议增加国内的访问节点。

很多人选择使用 Gitee Pages 作为国内节点，通过 GitHub Actions 将新文档同步到 Gitee 上，从而生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 有很多限制，例如必须实名认证、免费版无法自定义域名，近期也发生过下架风波。因此，我没有选择 Gitee，而是将文档同步到国内服务器（域名需要备案）或 Vercel（国外服务可能会出现断网）。

### 同步到服务器

如果你的项目已经搭建好，但出现了红色的叉叉提示，这可能是 GitHub Actions 同步到服务器时发生了错误。你需要进入项目仓库的「Setting」>「Secrets」>「Action」，并添加 `FTP_HOST`、`FTP_PORT`、`FTP_USERNAME` 和 `FTP_PASSWORD` 的密钥。之后，每当文件发生变化时，GitHub Actions 就会将修改推送到服务器的 FTP 上。

你也可以参考文章 [GitHub 同步到 OSS](https://newzone.top/deploy/Static.html#同步到-oss)，将网页部署到云存储上。

### 部署到 Vercel

Vercel 的速度相对 GitHub Pages 更快，但 `*.vercel.app` 域名已受 DNS 污染影响。为保证国内用户访问稳定，需绑定自定义域名。

Vercel 部署步骤如下：

1. 点击 [![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frockbenben%2FLearnData%2Ftree%2Fgh-pages) 或将 `https://vercel.com/new/clone?repository-url=https://github.com/rockbenben/LearnData/tree/gh-pages` 中的 `rockbenben/LearnData` 改为 `你的用户名/仓库名`，然后会跳转至 Vercel 进行网页部署。如果你未登录，Vercel 提示你注册或登录，请使用 GitHub 账户进行快捷登录。

2. 输入一个你喜欢的 Vercel 项目名称，默认 private 即可，然后点击 `Create`。

   ![](https://img.newzone.top/2022-08-24-17-24-16.png "创建 Vercel 项目")

3. 接着，Vercel 会基于 LearnData 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。几十秒后，满屏的烟花会庆祝你部署成功。此时，点击 `Go to Dashboard` 跳转到应用的控制台。

   ![](https://img.newzone.top/2022-08-24-17-21-58.png "Vercel 部署成功提示")

## 🤔 常见问题

### 网页显示异常

如果你的网站仅显示文本而不正常加载样式和脚本，可能是因为网站路径设置错误。这通常发生在将仓库作为子路径部署时，例如 `https://xxx.github.io/LearnData/`。

![](https://img.newzone.top/2023-03-14-06-11-10.png?imageMogr2/format/webp)

解决步骤如下：

1. **找到配置文件**：在你的项目中，打开 `docs/.vuepress/config.ts`。
2. **修改 `base` 设置**：将 `base` 配置项的值更改为你的子路径 `/LearnData/`。

   ```typescript
   export default defineUserConfig({
     base: '/LearnData/',
     // 其他配置...
   });
   ```

3. 提交并推送更改。等待 GitHub Actions 自动重新部署网站。
4. 部署后，刷新网站应能正常显示。

通过正确配置 `base` 路径，你的网站将能够加载所有必要的资源文件，从而正确显示样式和功能。如果你的网站是部署在根路径（如 `https://xxx.github.io/`），那么 `base` 应保留默认值 `/`。

### 同步服务器报错

- `Error: Input required and not supplied: server` 表示服务器配置错误，请按照上方的网站部署步骤检查配置。如果你不需要将**网页部署同步到服务器**，可以删除 `.github/workflows/main.yml` 中 Sync files 区块的代码。

- `FTPError: 530 Login authentication failed` 指 FTP 密码错误或账号不存在，可使用 FileZilla 来测试 FTP 的有效性。

- `Error: Timeout (control socket)` 指同步服务器出现超时报错。如果出现该错误，可以进入 Actions 页面，点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭服务器防火墙，检查 GitHub 服务器 IP 是否屏蔽了。

### Get counter failed with 403

`Get counter failed with 403` 错误仅在本地运行 `pnpm docs:dev` 时使用**非 localhost 域名**会发生，静态构建过程中不会出现。这是由评论插件 Waline 引起的。要解决这个问题，只需在 `docs/.vuepress/theme.ts` 文件中的 plugins 部分删除 Waline 配置。

![](https://img.newzone.top/2024-02-23-21-07-05.png?imageMogr2/format/webp)

### ERR_MODULE

如果出现 `Error [ERR_MODULE_NOT_FOUND]: Cannot find module` 的报错，可能是第三方插件或 pacakge.json 环境依赖未正确配置。此报错出现的几率极低，如果遇到，可以使用最新版本的 `package.json` 和 `pnpm-lock.yaml` 来覆盖本地设置，或者删除主目录下的 `.npmrc` 文件。

### 本地运行 LearnData

1. 为了本地运行，你需要安装 npm 和 pnpm 环境，可参考[环境部署教程](https://newzone.top/deploy/VPS.html#环境部署)。
2. 将 LearnData 项目下载到本地后，在项目目录下打开终端，输入命令 `pnpm i` 安装依赖。
3. 在终端中输入命令 `pnpm docs:dev`，若成功则会提示访问链接，默认为 `http://localhost:8080/`。

本地服务运行后，修改文件时页面会同步更新预览。若需停止本地服务器，可在终端中按下 `Ctrl + C`。

如果你想深入了解 LearnData 的高级技巧，请浏览 [LearnData 博客：高效知识管理和进阶应用技巧](https://newzone.top/posts/2024-01-28-learndata-advanced.html)。
