> 开源工具、效率方法、心理学探索的自我提升笔记

<!-- TABLE OF CONTENTS 有序为<ol>，无序为<ul> -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#-初衷">✨ 初衷</a></li>
    <li><a href="#-笔记结构">🧱 笔记结构</a></li>
    <li><a href="#-搭建-LearnData">🍥 搭建 LearnData</a></li>
    <li><a href="#-配置-LearnData">🔣 配置 LearnData</a></li>
    <li><a href="#️-网站部署">🖥️ 网站部署</a></li>
    <li><a href="#-常见问题">🤔 常见问题</a></li>
    <li><a href="#-版本升级">🆙 版本升级</a></li>
  </ul>
</details>

<a href="https://discord.gg/PZTQfJ4GjX">
   <img src="http://tc.seoipo.com/2022-12-04-11-56-44.svg" alt="Discord">
</a>
<a href="mailto:learndata@newzone.top">
   <img src="http://tc.seoipo.com/2022-12-04-11-58-19.svg" alt="Mail">
</a>

## ✨ 初衷

曾经，我把知识记录在 Notion、Obsidian、飞书等知识管理软件上，导致笔记散落各处，使用起来很麻烦，也难以对外分享。

更重要的是，**笔记里的知识并不属于你，只有经过消化、应用，才会成为自己的知识。**

因此，我基于 VuePress 和 vuepress-theme-hope 建立了 LearnData，将所有笔记与文章重新整合，聚合到同一页面形成知识库，方便自己使用和分享。

![](http://tc.seoipo.com/2022-08-22-19-28-25.png?imageMogr2/thumbnail/!80p "笔记 + 文章 = LearnData 知识库")

![](http://tc.seoipo.com/2022-08-24-19-14-59.png "笔记/博客自动化发布")

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

1. 进入 [LearnData](https://github.com/rockbenben/LearnData) 项目页，点击「Use this template」，复制该模板文件。

   ![](http://tc.seoipo.com/2022-08-10-19-32-05.png)

   ![](http://tc.seoipo.com/2022-08-10-19-34-13.png?imageMogr2/thumbnail/!60p)

2. 复制完成后，GitHub 会自动搭建网站，大约需要 3 分钟的时间。
3. 点击 `Setting`, 修改 `Repository name` 为 `xxx.github.io`, `xxx` 是你的 GitHub 用户名。如果该项名称已被占据，GitHub Pages 无法正常显示，则查看页面底部的常见问题。

   ![](http://tc.seoipo.com/20180505202201.png)

4. 同一页面选择「Code and automation」>「Pages」>「Build and deployment」>「Branch」, 将 gh-page branch 设为 GitHub Pages 的来源，网站运行目录默认为 `/(root)`。设置完成后，点击「Save」。如果没找到 gh-page branch，可以在 GitHub 中修改任意文件以手动触发 GitHub Action，等待其执行完成后，再重新设置 Pages 的来源。

   ![](http://tc.seoipo.com/2022-08-10-19-39-15.png)

5. 设置成功后，页面会提示访问链接：`https://xxx.github.io/`，知识库搭建完毕。

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

`docs/.vuepress` 路径下是网站的配置文件，我在上面添加了详细的注释。你可以参考注释和 [vuepress-theme-hope 配置案例](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress)来调整配置。修改 `docs/.vuepress/sidebar.ts` 中的文件夹路径，后台会自动抓取路径下的 md 文件来生成侧边栏。`docs/.vuepress/theme.ts` 中配置了[评论插件](https://newzone.top/web/Comments.html)。

注意：

- `docs/_temp` 默认不同步到 GitHub。你需要手动在本地建立 `_temp` 文件夹，用来存放草稿。
- VuePress2 从 beta.54 开始忽略文件夹名的前缀 `_`，比如博客路径为 `/_posts/`，转为网页后链接路径会是 `/posts/`。
- LearnData 默认使用了 algolia 全文搜索。如果你没使用 algolia 爬虫，则删除 `docs/.vuepress/config.ts` 中 plugins 下的 docsearchPlugin 区块，网站将转用本地全文索引搜索。

### 看板娘

LearnData 集成了看板娘 [Live2D Widget](https://github.com/stevenjoezhang/live2d-widget)，支持随机对话、切换人物服饰和玩打飞机游戏，能提升网站美观度和趣味性。如果不需要看板娘，可以删除 `docs\.vuepress\public` 下的 live2d-widget 文件夹。

要启用看板娘模型，需要修改 `docs\.vuepress\public\live2d-widget\autoload.js` 文件，将其中的 `apiPath: "https://newzone.top/live2d-widget/live2d_api/"` 替换为 `cdnPath: live2d_path + "live2d_api/"`。如果未正确配置，看板娘会出现跨域报错，只显示文字而不显示图片。如果使用服务器自建 [live2d api](https://github.com/fghrsh/live2d_api) 的话，可以修改看板娘模型。

如果网站部署在子页面 `https://xxx.github.io/yyy`，则需将子页面路径 yyy 加入到以下两个文件：

- 将 `docs\.vuepress\public\live2d-widget\autoload.js` 文件第三行的 `const live2d_path = "/live2d-widget/"` 修改为 `const live2d_path = "/yyy/live2d-widget/"`。
- 将 `docs\.vuepress\templateBuild.html` 文件中看板娘区块代码 `<script src="/live2d-widget/autoload.js">` 修改为 `<script src="/yyy/live2d-widget/autoload.js">`。

### 读书笔记

读书笔记中会有大量原文引用，这与 LearnData 将知识点精简化的初衷并不相符。为了避免增加知识点的使用难度，我们使用 docsify 来构建读书笔记，并将其放置于 `docs\reading` 目录下。该路径下的文件不会被转换为 HTML 文件，而是在静态页面生成完毕后，被自动复制到静态网站下，完成 docsify 页面构建和独立的读书笔记搜索索引。

如果你没有部署 Waline，也不需要阅读量统计和评论区，可以删除 `docs\reading\index.html` 中的 Waline 区块。

```javascript
waline: {
   serverURL: "https://waline.newzone.top",
   ...
}
```

### 本地图片引用

本地图片必须保存在 `docs/.vuepress/public` 目录中，否则在生成静态页面时会报错 `Rollup failed to resolve import`。假设图片名为 `1.png`，将其保存在 `docs/.vuepress/public/imgs` 中，则该图片的引用链接为 `/imgs/1.png`，或使用 Markdown 图片链接：`![](/imgs/1.png)`。

## 🖥️ 网站部署

LearnData 推送到 GitHub 后，会自动生成可访问的网页，但国内访问 GitHub Pages 的速度极不稳定。为了确保网站能被正常访问，建议增加国内的访问节点。

很多人选择 Gitee Pages 作为国内节点，通过 GitHub Actions 将新文档同步到 Gitee，生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 的限制非常多，必须实名验证，免费版无法自定义域名，更别提近期的下架风波。因此，我没有选择 Gitee，而是把文档同步到国内服务器（域名需备案）或 Vercel（国外服务永远不知什么时候会断）。

### 同步到服务器

项目搭建好后，出现了红色叉叉，这是 GitHub Actions 同步服务器的失败提示，需要进入 GitHub 仓库「Setting」>「Secrets」>「Action」，添加 `FTP_HOST`、`FTP_PORT`、`FTP_USERNAME` 和 `FTP_PASSWORD` 的密钥。之后，GitHub Actions 在文件发生变动时，会将修改推送到服务器 FTP。

如果你不需要同步到服务器 FTP，建议按常见问题中的操作删除对应代码，或者按照 [GitHub 同步到 OSS](https://newzone.top/deploy/Static.html#同步到-oss) 步骤将网页部署到云存储上。

### 部署到 Vercel

Vercel 的速度比 GitHub Pages 稳定些，不过「\*.vercel.app」域名已经被 DNS 污染，国内使用建议绑定自定义域名。

Vercel 部署步骤如下：

1. 点击 [![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frockbenben%2FLearnData%2Ftree%2Fgh-pages) 或将 `https://vercel.com/new/clone?repository-url=https://github.com/rockbenben/LearnData/tree/gh-pages` 中的 `rockbenben/LearnData` 改为 `你的用户名/仓库名`，然后会跳转至 Vercel 进行网页部署。如果你未登录，Vercel 提示你注册或登录，请使用 GitHub 账户进行快捷登录。

2. 输入一个你喜欢的 Vercel 项目名称，默认 private 即可，然后点击 `Create`。

   ![](http://tc.seoipo.com/2022-08-24-17-24-16.png "创建 Vercel 项目")

3. 接着，Vercel 会基于 LearnData 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。几十秒后，满屏的烟花会庆祝你部署成功。此时，点击 `Go to Dashboard` 跳转到应用的控制台。

   ![](http://tc.seoipo.com/2022-08-24-17-21-58.png "Vercel 部署成功提示")

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

### failed with exit code 128

GitHub Page 部署报错 `failed with exit code 128`，这是由于 repo 权限不足导致的。进入项目仓库的「Settings」>「Code and automation」>「Actions」>「General」，选中底部 Workflow permissions 中的 `Read and write permissions`，点击保存后重新部署即可。

### 网页显示异常

网站只显示文字，不能正常显示网页，这是网站路径不正确导致的页面样式错误。

如果 GitHub Page 提示访问链接 `https://xxx.github.io/yyy`，则需要将 `docs/.vuepress/config.ts` 中的 base 改为 `/yyy`，其默认值为 `/`。

### 同步服务器报错

- `Error: Input required and not supplied: server` 是配置服务器错误的提示，需要按照上方的网站部署步骤配置。如果不需将文件同步到服务器，建议删除 `.github/workflows/main.yml` 中 Sync files 区块的代码，以避免出现错误。

- `FTPError: 530 Login authentication failed` 指 FTP 密码错误或账号不存在，需要使用 FileZilla 来测试 FTP 的有效性。

- `Error: Timeout (control socket)` 是指同步服务器出现超时报错。如果出现该错误，可以进入 Actions 页面，点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭服务器防火墙，检查 GitHub 服务器 IP 是否屏蔽了。

### ERR_MODULE

生成静态网页时，如果出现 `Error [ERR_MODULE_NOT_FOUND]: Cannot find module` 的保存，可能是第三方插件或 pacakge.json 环境依赖未正确配置。该报错出现几率极低，如果遇到，可用最新版本的 `package.json` 和 `pnpm-lock.yaml` 来覆盖本地设置。如果你已经修改了环境依赖，可以删除主目录下的 `.npmrc` 文件。

### 静态文件名字总变

VuePress 默认使用 Vite，打包时会引入时间戳和 hash 对文件重命名，导致网站大部分的文件发生更改，即使没有更新文章，生成的静态文件也会改变。比如我的笔记网站用的 VuePress 默认配置，每次服务器部署需要 10 分钟，期间打开网站就会出错。

如果不想每次构建都重命名文件，可以复制「[nohashname](https://github.com/rockbenben/LearnData/tree/nohashname)」branch。我把 nohashname 分支的打包工具换成了 Webpack，并用 chainWebpack 设置文件命名规则，避免文件不必要的重命名。

### 本地运行 LearnData

1. 安装环境 npm 和 pnpm，可参考[环境部署教程](https://newzone.top/deploy/VPS.html#环境部署)。
2. 下载 LearnData 项目到本地，在目录下运行终端，输入命令 `pnpm i`。
3. 完成前两步后，终端中输入 `pnpm docs:dev`，成功后会提示访问链接，默认为 `http://localhost:8080/`。

运行本地服务器后，修改文件时预览页面也会同步更新。若要停止本地服务器，在终端中按下 `Ctrl + C`。

## 🆙 版本升级

LearnData 一般不需要升级，除非你想使用新功能。一般升级时，除了 docs 目录外，所有内容都使用最新版本的 LearnData 进行覆盖升级，`docs/.vuepress` 中的 `config.ts` 和 `theme.ts` 与新版文件进行比对，选择性升级，其他文档则无需更改。

以下是升级目录的说明：

```bash
LearnData
|── .github                     # 比对升级（一般覆盖）
├── docs
│   |── .vuepress               # 比对升级
│   │   ├── config.ts           # 大升级时需比对升级
│   │   ├── theme.ts            # 大升级时需比对升级
│   │   ├── sidebar.ts          # 侧边栏，一般不变
│   │   ├── navbar.ts           # 导航栏，一般不变
│   │   ├── templateBuild.html  # 网页模板，一般不变
│   │   └── public              # 自定义文档，一般不变
│   |── reading                 # 读书笔记，一般不变
│   ├── blog.md                 # 博客页面，一般不变
│   └── others                  # 笔记/博客，无需更改
└── others                      # 使用新版 LearnData 覆盖
```

## Features

- [x] 专题化，将长文分为几篇手册型文章，方便使用。
- [x] 增加「阅读笔记」，该区块将用 docsify 管理，与 LearnData 文章区分离。
- [x] 增加文章互动区块，让读者能通过 emoji 简便与作者沟通。
- [x] 看板娘：远程支持 api，也可使用本地文件。
- [x] 样式调整：黑色主题调整深紫色；调整 TOC 规则。
- [x] typo 修正：v1.0.3 之前的版本升级需将「docs\.vuepress\sidebar.ts」中的「collapsable」全部替换为「collapsible」。
