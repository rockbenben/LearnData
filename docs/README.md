---
article: false
title: LearnData 开源笔记
icon: note
---

> 开源工具、效率方法、心理学探索的自我提升笔记

<a href="https://discord.gg/PZTQfJ4GjX">
   <img src="https://tc.seoipo.com/2022-12-04-11-56-44.svg" alt="Discord">
</a>  
<a href="mailto:learndata@newzone.top">
   <img src="https://tc.seoipo.com/2022-12-04-11-58-19.svg" alt="Mail">
</a>

## ✨ 初衷

曾经，我把知识记录在 Notion、Obsidian、飞书等知识管理软件上，导致笔记散落各处，使用起来很麻烦，也难以对外分享。

更重要的是，**笔记里的知识并不属于你，只有经过消化、应用，才会成为自己的知识。**

因此，我基于 VuePress 和 vuepress-theme-hope 建立了 LearnData，将所有笔记与文章重新整合，聚合到同一页面形成知识库，方便自己使用和分享。

![](https://tc.seoipo.com/2022-08-22-19-28-25.png?imageMogr2/thumbnail/!80p "笔记 + 文章 = LearnData 知识库")

![](https://tc.seoipo.com/2022-08-24-19-14-59.png "笔记/博客自动化发布")

## 🧱 笔记结构

- 置顶：日常习惯、健身、阅读；
- 代码：常用代码的学习和使用笔记；
- 软件应用：常用应用、Chrome 扩展和相关教程；
- 页面开发：页面插件和框架生成工具；
- 网站部署：网站相关的工具和知识收集；
- Linux 服务：NAS 和服务器上的后端应用，主要以 Docker 方式部署；
- 系统问题：Windows 系统优化和相关问题；
- 生活区：说明书、生活记录和小技巧；
- 博客区：聚合所有博客文章，以分类、标签、时间轴等方式进行组合。

## 🍥 搭建 LearnData

1. 首先，进入 [LearnData](https://github.com/rockbenben/LearnData) 项目页，点击右上方的「Use this template」>「Create a new repository」。

   ![](https://tc.seoipo.com/2022-08-10-19-32-05.png?imageMogr2/format/webp)

   ![](https://tc.seoipo.com/2022-08-10-19-34-13.png?imageMogr2/thumbnail/!60p)

2. 接着，进入项目仓库的「Settings」>「Actions」>「General」，选中底部 Workflow permissions 中的 `Read and write permissions`，然后点击保存即可。如果未授权，GitHub Page 部署会由于 repo 权限不足而报错 `failed with exit code 128`。

   ![](https://tc.seoipo.com/2023-03-14-04-02-16.png?imageMogr2/format/webp)

3. 接下来，进入菜单栏顶部的「Actions」>「最新的 workflow」，点击右上方的「Re-run jobs」>「Re-run all jobs」，重新生成网页。若部署正确，GitHub 将自动搭建 gh-page branch 页面。(如果你不需要将**文件同步到服务器**，则请删除 `.github/workflows/main.yml` 中 Sync files 区块的代码，以避免出现报错。)

   ![](https://tc.seoipo.com/2023-03-14-04-04-52.gif)

4. 然后点击「Settings」, 修改 `Repository name` 为 `用户名.github.io`。假设你的仓库链接是 `https://github.com/xxx/LearnData`，那么中间的 `xxx` 就是你的用户名。如果该仓库名称已被使用，GitHub Pages 将无法正常显示样式，请查看页面底部的常见问题来设置子域名。

   ![](https://tc.seoipo.com/20180505202201.png?imageMogr2/format/webp)

5. 在同一页面选择「Settings」>「Pages」>「Build and deployment」>「Branch」, 将 gh-page branch 设为 GitHub Pages 的来源，网站运行目录默认为 `/(root)`。设置完成后，点击「Save」。如果找不到 gh-pages 分支，可以按照上面提到的第三步进行操作，或在 GitHub 中修改任意文件以手动触发 GitHub Action，等待其执行完成后，再重新设置 Pages 的来源。

   ![](https://tc.seoipo.com/2022-08-10-19-39-15.png?imageMogr2/format/webp)

6. 设置成功后，页面会提示访问链接：`https://xxx.github.io/`，知识库搭建完毕。

   如果未出现访问链接提示或不能打开 GitHub Pages，则删除 `docs/_posts` 路径下的博客文件，GitHub Pages 有时会对旧文章里的代码报错。

## 🔣 配置 LearnData

### 文档结构

LearnData 的网站配置和文本存放在 `docs` 文件夹下，文章与页面配置可参考主目录下的 `samplepage.md`。

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

- LearnData 默认使用了 algolia 全文搜索。如果你没有使用 algolia 爬虫，则可以在 `docs/.vuepress/config.ts` 文件中删除 plugins 下的 docsearchPlugin 区块，网站将转用本地全文索引搜索。
- `docs/_temp` 文件夹默认不同步到 GitHub 上。你可以手动在本地建立 `_temp` 文件夹，用来存放草稿。
- 自 VuePress2 的 beta.54 版本开始，文件夹名前缀为 `_` 在生成链接时将被省略，例如文章路径为 `/_posts/`，但网页链接路径会是 `/posts/`。

### 看板娘

LearnData 集成了看板娘 [Live2D Widget](https://github.com/stevenjoezhang/live2d-widget)，支持随机对话、切换人物服饰和玩打飞机游戏，能提升网站美观度和趣味性。如果不需要看板娘，可以删除 `docs\.vuepress\public` 下的 live2d-widget 文件夹。

要启用看板娘模型，需要修改 `docs\.vuepress\public\live2d-widget\autoload.js` 文件，将其中的 `apiPath: "https://newzone.top/live2d-widget/live2d_api/"` 替换为 `cdnPath: live2d_path + "live2d_api/"`。如果未正确配置，看板娘会出现跨域报错，只显示文字而不显示图片。如果使用服务器自建 [live2d api](https://github.com/fghrsh/live2d_api) 的话，可以修改看板娘模型。

如果网站部署在子页面 `https://xxx.github.io/yyy`，则需将子页面路径 yyy 加入到以下两个文件：

- 将 `docs\.vuepress\public\live2d-widget\autoload.js` 文件第三行的 `const live2d_path = "/live2d-widget/"` 修改为 `const live2d_path = "/yyy/live2d-widget/"`。
- 将 `docs\.vuepress\templateBuild.html` 文件中看板娘区块代码 `<script src="/live2d-widget/autoload.js">` 修改为 `<script src="/yyy/live2d-widget/autoload.js">`。

### 读书笔记

读书笔记中可能会有大量的原文引用，这与 LearnData 精简化知识点的初衷并不相符。因此，我们使用 docsify 来构建读书笔记，并将其放置于 `docs/reading` 目录下。在生成静态页面后，该路径下的文件不会被转换为 HTML 文件，而是将被自动复制到静态网站下，完成 docsify 页面构建和独立的读书笔记搜索索引。

如果你没有部署 Waline，也不需要阅读量统计和评论区，可以删除 `docs\reading\index.html` 中的 Waline 区块。

```javascript
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

如果你不需要将文档同步到服务器的 FTP 上，则请删除 `.github/workflows/main.yml` 中 Sync files 区块的代码，以避免出现报错。或者根据 [GitHub 同步到 OSS](https://newzone.top/deploy/Static.html#同步到-oss) 步骤将网页部署到云存储上。

### 部署到 Vercel

Vercel 的速度比 GitHub Pages 稳定一些，不过「\*.vercel.app」域名已经被 DNS 污染。建议国内用户绑定自定义域名以获得更好的使用体验。

Vercel 部署步骤如下：

1. 点击 [![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frockbenben%2FLearnData%2Ftree%2Fgh-pages) 或将 `https://vercel.com/new/clone?repository-url=https://github.com/rockbenben/LearnData/tree/gh-pages` 中的 `rockbenben/LearnData` 改为 `你的用户名/仓库名`，然后会跳转至 Vercel 进行网页部署。如果你未登录，Vercel 提示你注册或登录，请使用 GitHub 账户进行快捷登录。

2. 输入一个你喜欢的 Vercel 项目名称，默认 private 即可，然后点击 `Create`。

   ![](https://tc.seoipo.com/2022-08-24-17-24-16.png "创建 Vercel 项目")

3. 接着，Vercel 会基于 LearnData 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。几十秒后，满屏的烟花会庆祝你部署成功。此时，点击 `Go to Dashboard` 跳转到应用的控制台。

   ![](https://tc.seoipo.com/2022-08-24-17-21-58.png "Vercel 部署成功提示")

4. 为了让 Vercel 页面与 GitHub Pages 自动保持同步更新，你需要配置 `PERSONAL_TOKEN` 和 GitHub Actions。

   - 新建 [Personal access tokens](https://github.com/settings/tokens)，勾选权限「repo (Full control of private repositories)」，生成后复制 token 值。
   - 在项目仓库中选择「setting」>「Secrets」>「Action」，新建密钥 PERSONAL_TOKEN，并填入刚复制的 token 值。
   - 将下方代码编辑到 `.github/workflows/main.yml` 文件末尾，注意修改 `dst_owner` 和 `dst_repo_name`。

   ```yml
   # 将页面更新到 Vercel
   - name: Copy file to Vercel
     if: always()
     uses: andstor/copycat-action@v3
     with:
       personal_token: ${{ secrets.PERSONAL_TOKEN }}
       src_path: /.
       dst_path: /
       # 你的用户名
       dst_owner: rockbenben
       # 与 Vercel 链接的仓库名，也就是 Vercel 部署时新建的仓库
       dst_repo_name: LearnData-Vercel
       dst_branch: main
       src_branch: gh-pages
       clean: true
   ```

## 🤔 常见问题

### 网页显示异常

如果你的网站只显示文字而不能正常显示网页，可能是因为网站路径不正确导致的页面样式错误。比如，GitHub Page 提示访问链接 `https://xxx.github.io/yyy`，则需要将 `docs/.vuepress/config.ts` 中的 base 改为 `/yyy`，其默认值为 `/`。请按照此路径将网站的 base 设置正确，以确保你的网站能够正常显示。

![](https://tc.seoipo.com/2023-03-14-06-11-10.png?imageMogr2/format/webp)

### 同步服务器报错

- `Error: Input required and not supplied: server` 表示服务器配置错误，请按照上方的网站部署步骤检查配置。如果你不需要将**文件同步到服务器**，则请删除 `.github/workflows/main.yml` 中 Sync files 区块的代码，以避免出现报错。

- `FTPError: 530 Login authentication failed` 指 FTP 密码错误或账号不存在，可使用 FileZilla 来测试 FTP 的有效性。

- `Error: Timeout (control socket)` 指同步服务器出现超时报错。如果出现该错误，可以进入 Actions 页面，点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭服务器防火墙，检查 GitHub 服务器 IP 是否屏蔽了。

### ERR_MODULE

如果出现 `Error [ERR_MODULE_NOT_FOUND]: Cannot find module` 的报错，可能是第三方插件或 pacakge.json 环境依赖未正确配置。此报错出现的几率极低，如果遇到，可以使用最新版本的 `package.json` 和 `pnpm-lock.yaml` 来覆盖本地设置，或者删除主目录下的 `.npmrc` 文件。

### 静态文件名字总变

VuePress 默认使用 Vite。在打包时，会为文件引入时间戳和 hash，并对其进行重命名。这会导致即使没有更新文章，大部分生成的静态文件也会发生更改。如果你希望减少重命名频次，可以使用「[nohashname](https://github.com/rockbenben/LearnData/tree/nohashname)」分支。该分支使用的打包工具是 Webpack，并使用 chainWebpack 设置文件命名规则，避免不必要的文件重命名。（注意：nohashname 非主分支，不作功能更新。）

### 本地运行 LearnData

1. 为了本地运行，你需要安装 npm 和 pnpm 环境，可参考[环境部署教程](https://newzone.top/deploy/VPS.html#环境部署)。
2. 将 LearnData 项目下载到本地后，在项目目录下打开终端，输入命令 `pnpm i` 安装依赖。
3. 在终端中输入命令 `pnpm docs:dev`，若成功则会提示访问链接，默认为 `http://localhost:8080/`。

本地服务运行后，修改文件时页面会同步更新预览。若需停止本地服务器，可在终端中按下 `Ctrl + C`。
