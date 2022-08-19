---
article: false
title: LearnData 开源笔记
icon: note
---

> 开源工具、效率方法、心理学探索的自我提升笔记

## ✨ 初衷

曾经，我把知识记录在 Notion、Obsidian、飞书等知识管理软件上，散落各处，要找能找到，但使用起来很麻烦，也难以对外分享。

但**记录的笔记并不属于你，只有实际应用消化了才是你的知识**。

因此，我基于 VuePress 和 vuepress-theme-hope 建立了 LearnData，将所有笔记和博客聚合在同一页面，方便知识点查询和对外输出分享。

## 🧱 笔记结构

- 置顶：日常习惯、健身、阅读；
- 代码：常用代码的学习使用笔记；
- 软件应用：常用应用、Chrome 扩展及相关教程；
- 页面开发：页面插件和架构生成工具；
- 网站部署：网站相关的平台、工具及知识收集；
- Linux 服务：NAS 和服务器上的后端应用，主要以 Docker 方式部署；
- 系统问题：Windows 系统优化和相关问题；
- 生活区：说明书，生活记录及小技巧；
- 博客区：聚合所有博客文章，并以分类、标签、时间轴等方式进行组合。

## 🍥 搭建 LearnData

1. 进入 [LearnData](https://github.com/rockbenben/LearnData) 项目页，点击「Use this template」，复制模板文件。

   ![](http://tc.seoipo.com/2022-08-10-19-32-05.png)

   ![](http://tc.seoipo.com/2022-08-10-19-34-13.png?imageMogr2/thumbnail/!60p)

2. 复制好后，清空 `docs/_posts` 路径下的所有文件。这是因为测试搭建时 GitHub Pages 对我旧文章里的代码报错，需要清空文章来避免部署出错。之后，GitHub 会自动搭建网站，架构时间约 3 分钟。
3. 点击 `Setting`, 修改 `Repository name` 为 `xxx.github.io`, `xxx` 是你的 GitHub 用户名。如果该项名称已被占据，GitHub Pages 无法正常显示，查看下方解决办法。

   ![](http://tc.seoipo.com/20180505202201.png)

4. 同一页面选择「Code and automation - Pages - Build and deployment - Branch」, 将 gh-page branch 设为 GitHub Pages 来源，网站运行目录默认为 `/(root)`。设置好后，点击「Save」。

   ![](http://tc.seoipo.com/2022-08-10-19-39-15.png)

5. 设置成功后，页面会提示访问链接 `https://xxx.github.io/`，你的知识库搭建完毕。

## 🔣 配置 LearnData

LearnData 的文本目录和配置都在 `docs` 路径中。

`.vuepress` 存放网站配置文件，`_post` 存放博客文章，`_temp` 默认不同步到 GitHub，需手动在本地建立 `_temp` 文件夹，用来存放草稿。你也可以按范围或功能新建文件夹，存放不同方向的笔记。

`README.md` 是默认主页，`blog.md` 配置博客页面，`intro.md` 是你的个人介绍。

![](http://tc.seoipo.com/2022-08-19-14-50-13.png "docs 路径结构")

`.vuepress` 路径下是网站的配置文件。`config.ts` 配置网站环境依赖和网站属性。`sidebar.ts` 配置侧边栏，替换文档中文件夹路径即可，后台自动抓取路径下的 md 文件来生成侧边栏。`navbar.ts` 配置导航栏，推荐放你常用的文档链接。theme.ts 对主题和插件进行设置。我在配置文件上有详细注释，可按需求修改，或参考 [vuepress-theme-hope 配置案例](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress)。

## 🖥️ 同步到服务器

项目搭建好后，出现了红色叉叉，这是 GitHub Action 的失败提示。这是由于 LearnData 部署了同步 ftp 代码，如果你没有正确配置服务器，Github Action 就会报错。

进入 repo 的「setting - Secrets - Action」，添加 `FTP_HOST`，`FTP_PORT`，`FTP_USERNAME` 和 `FTP_PASSWORD` 的密钥。配置成功后，每次修改文件，Github 都会自动推送到服务器 FTP。

如果你没有服务器，可以同步到云存储上，步骤参考 [GitHub 同步到 oss](https://newzone.top/deploy/Static.html#同步到-oss)。

如果你不需要页面同步推送功能，就删除 `.github/workflows/main.yml` 中 Sync files 区块的代码。

## 🤔 常见问题

### 搭建后页面异常

搭建后，页面能打开，不过只显示文字。这是由于网站路径设置设错，静态文件路径不正确而导致的页面样式错误。

检查 `docs/_posts/config.ts` 中 base 的设置，默认为 `/`。如果 GitHub Page 提示访问链接 `https://xxx.github.io/yyy`，则将 base 改为 `/yyy`。

### 同步服务器报错

`Error: Timeout (control socket)` 是同步服务器超时报错。如果出现该错误，进入 Actions 页面点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭防火墙，测试是否 GitHub 服务器被拉黑了。

`FTPError: 530 Login authentication failed` 指 FTP 密码错误或账号不存在，需用 FileZilla 测试 FTP 的有效性。

### 静态文件名字总变

VuePress 默认使用 Vite，打包时会引入时间戳和 hash 对文件重命名，导致网站大部分的文件发生更改。即使你并没有更新文章，生成的静态文件也会改变。比如我的笔记网站用的 VuePress 默认配置，每次服务器部署需要 10 分钟，期间打开网站就会出错。

如果不想每次架构都重命名文件，可以复制「[nohashname](https://github.com/rockbenben/LearnData/tree/nohashname)」branch。我把 nohashname 分支的打包工具换成了 Webpack，并用 chainWebpack 设置文件命名规则，避免文件非必要重命名。

### 本地使用 LearnData

1. 安装环境 npm 和 pnpm，方法查看 [Linux 环境部署教程](https://newzone.top/deploy/VPS.html#环境部署)。
2. 下载 LearnData 项目到本地，在目录下运行终端，输入命令 `pnpm add vuepress@next vuepress-theme-hope@next @vuepress/plugin-search@next && pnpm i && pnpm up`。
3. 完成前两步后，终端中输入 `pnpm docs:dev`，成功即可提示访问链接，默认为 `http://localhost:8080/`。

运行本地服务器后，修改文件时预览页面也会同步发生改变。如果想停止本地服务器，在终端中按键 `Ctrl + C`。
