---
title: 集自动发布、本地管理于一身：WordPress 博客管理方案分享
subtitle: 18 年博客探索总结
date: 2022-06-07
category:
  - 博客
tag:
  - blog
  - github
  - WordPress
order: -47
---

## 博客探索

2005 年，我开始用博客记录感想，发布在 MSN space 平台和短命的 Google Sidewiki 上。六年后，MSN space 关闭，博客被转移到 WordPress 托管，我改用 Blogger，没多久就暂停了博客。​

2018 年，我偶然接触到 [Jekyll](https://jekyllrb.com/)，被其简洁的界面和便捷性打动，重新恢复了博客记录。博客方向从感想记录转变到知识整理输出。Jekyll 方案需要首先在本地用 Markdown 编辑排版，然后同步到 github 发布，最后以 Markdown 格式手动分发到各个渠道。当文章较少时，这套方案的体验感特别好。​

到了 2021 年，**随着文章和发布渠道的增多，文章的修改和管理变得愈加困难**。慢慢地，我开始习惯本地 Markdown 只做初稿排版，更新则只在外部平台上进行。​

我的文章都是工具教程类，要随着工具的更新而修改，有时甚至要对几年前发布的文章进行更新。因此，针对少量平台更新的策略，带来了文章版本混乱，让博客偏离了知识记录的初衷。为了保证文章版本统一，我把博客从 Jekyll 迁移到 WordPress，准备以 WordPress 作为统一版。

![Jekyll 博客](https://img.newzone.top/20210128124408.png?imageMogr2/thumbnail/400x)

然而，WordPress 方案很快就被放弃了。原因除了 WordPress 糟糕的编辑体验，更重要的是，我遇到了 Notion。其界面美观，编辑方便，支持对外展示，能导出为 Markdown、HTML 文件。​

可是，没什么平台是完美的。Notion 不支持同步本地 markdown 内容，图床不能在站外使用，国内访问速度成谜。这令 **Notion 只适合个人分享，而非博客网站**。我用 Notion，纯属垂涎美色。​

2022 年，由于疫情被封控在家两个月。时间多了，我继续折腾博客，希望找到一个界面美观，能自动发布且具备本地管理功能的博客方案。

## 博客方案

最初，我幻想着修改一篇文章同步到多个平台，但找了许久也没有合适的。网上所谓的一键分发软件，实际上是通过网页操作来完成发布，并不能自动修改更新。​

剔除掉这类不现实的想法后，新的博客方案以 Markdown 版本为主，自动同步 WordPress，最后手动同步主要分发平台。​

**最终方案**如下：​

1. 初稿：Markdown 本地编辑文章，使用七牛云自建图床。​

2. 发布：同步本地 Markdown 文本，自动发布，保持主要平台内容为最新。​

3. 管理：本地更新修改 Markdown 文件，docsify 页面整合文本内容，博客后台管理文章版本。​

4. 订阅：用户能通过 RSS、邮件或微信来订阅博客更新。

## WP 发布工具

### 工具说明

[WordPressXMLRPCTools](https://github.com/zhaoolee/WordPressXMLRPCTools) 能用 Markdown 生成博客，推送更新到 Github 后，通过 Github Actions 自动将文章更新到 WordPress，并将 WordPress 网站的文章索引更新到 Github 仓库的 README.md，供搜索引擎收录，方便 Windows 用户使用。iOS 用户有更成熟的发布工具，无需代码即可到同步 WordPress，比如 @ern 推荐的 MWeb/Ulysses。

基于 WordPressXMLRPCTools，我做了三点修改：​

- 发布设置：修改 `main.py` 文件。

  - 修复无法覆盖更新文章的 bug。
  - 调整项目页的时间格式。
  - 页首添加文章编辑时间，默认为格林尼治标准时间，比北京晚 8 小时。
  - 将文章页尾部的本文永久更新地址从标题格式调整为常规字母。

- 草稿箱：`_post` 路径内新建 `TEMP` 文件夹，用于存放文章草稿。WordPress 推送程序会忽略 `_post` 子文件夹的内容，换言之，`TEMP` 文件夹不会发布到 WordPress 网站。

- 文章聚合页：主路径添加 `.nojekyll`、`index.html` 和 `_sidebar.md` 三个文件，引入了文档生成工具 docsify，使得博客文章能聚合在一个页面，方便快速定位和位置管理。示例：<https://rockbenben.github.io/Blog_WP/>。

  ![](https://img.newzone.top/2022-05-26-20-12-56.png "docsify 页面效果")

### 使用流程

1. 进入 [项目页面](https://github.com/rockbenben/Blog_WP)，点击「Use this template」，复制模板文件。
2. 回到你新建的 repo，删除 \_post 文件夹中的所有文件，参照主目录下 `example_article.md` 的格式编辑文章。注意：md 文件名不能包含大写字母。
3. 按 [WordPressXMLRPCTools 安装步骤](https://github.com/zhaoolee/WordPressXMLRPCTools#%E7%94%A8github-actions%E5%86%99markdown%E6%96%87%E7%AB%A0%E8%87%AA%E5%8A%A8%E6%9B%B4%E6%96%B0%E5%88%B0wordpress) 执行，如遇报错，查看下方使用问题。注意检查 WordPress 登录授权和 Github Actions secret，这两步极易遗漏。
4. 修改主目录下的 `index.html` 和 `_sidebar.md` 文件，调整 docsify 网页设置。
   - `index.html` 修改 docsify 网页标题、描述和关键词。
   - `_sidebar.md` 修改 docsify 网页侧边栏，加入博客文章的标题和位置。

## WP 发布常见问题

### 文章发布不成功

`_post` 文件夹添加了文档，但同步后，`README.md` 和 WordPress 并没有添加文章。

检查以下两点：

- 文章后缀必须为「.md」，不支持「.markdown」或其他后缀格式。
- 进入 repo 页面中的 `Actions`，检查最近一次的 update 是否正确。根据报错代码，寻找错误原因。

  ![](https://img.newzone.top/2022-05-26-20-36-56.png?imageMogr2/format/webp)

### Error: git denied to github-actions[bot]

遇到 GitHub Actions 报错：`git denied to github-actions[bot]` 或 `Process completed with exit code 128`。

点击该 repository 的「Setting」>「Code and automation」>「Actions」>「General」，然后在 Workflow permissions 中开启「Read and write permissions」。

### Error: Process completed with exit code 1

遇到 GitHub Actions 报错：`Error: Process completed with exit code 1`，可能是文章内容触发了服务器的安全规则，拒绝了文章的同步。

如果出现该项报错，暂时关闭服务器防火墙，可解决问题。同步完成后，记得重新开启防火墙。

### 无法覆盖更新原文章 ​

修改旧文章并同步后，WordPress 站的文章没同步修改，而是新增了一篇相同的文章。

- 检查 md 文件名有没有出现大写字母，有没有更改文件名。
- 进入 WordPress 后台，点击「设置」>「固定链接」，选中自定义结构，并将文章链接设为 `/p/%postname%`。

如果修改版在检查后依然出现此问题，建议手动将新文章内容覆盖旧文章，然后删除新文章。​ 这个 bug 可以当作是强提醒。当 WordPress 新增了旧文章，你就被提醒要在其他平台修改该文章，让文章版本保持统一。

### WordPress 发布时间与实际不符 ​

同步文章后，WordPress 显示的文章发布时间是 GitHub push 时间，而非文章真实的发布时间。​

如果你将旧文章转移到 WordPress，文章的发布时间需在 WordPress 后台手动修改，无法在 Markdown 文件中指定 WordPress 显示的发布时间。

### 有序列表编号有误

文章中设定的编号是 `3`，但同步到 WordPress 后，变成了 `1`。

有序列表中穿插了图片、段落，编号就会重置到 `1`。去除图片与旧序列的空行，就能识别正确编号。

### 无序列表只有一个层级

Markdown 转 WordPRess 文章时，默认规则无法识别缩进级别。多层级列表只会显示一个层级，其他层级的列表都被提到第一层级。

## 本地管理 Markdown 文章

如果用 Windows 资源管理器管理 Markdown 文章，会存在 3 个问题：

- 资源管理器的视觉效果非常难看。
- Markdown 文件名称不能展示关键信息，较难定位文档。文章越多，管理越困难。
- 无法对文章内容进行本地检索，只能通过文件名称猜测内容。

![](https://img.newzone.top/2022-05-30-19-00-15.png "难以管理的本地文档")

为解决这些问题，我借助飞书表格、RunAny 和 docsify 重构本地文章管理方案。

### 飞书文档管理

飞书文档功能与 Notion、Airtable 类似，可将文字、链接、图片聚合在同一页面，操作便捷。

打开飞书多维表格，填入本地 Markdown 文章的标题、本地位置、链接、标签和封面，即可聚合本地文章的关键信息。将表格视图切换为「画册视图」，文档管理界面更达到 90% 的 Notion 视觉效果。

![](https://img.newzone.top/2022-05-06-12-43-36.png "飞书表格视图")

![](https://img.newzone.top/2022-05-06-12-28-41.png "飞书画册视图")

### RunAny 文档直达 ​

在线文档中，无法像打开超链接一样直接打开本地文件。若要节省中间打开时间，可以使用 RunAny。​

[RunAny](https://hui-zz.gitee.io/runany/#/) 是基于 AutoHotkey 的一键启动软件。按下方配置后，点击飞书表格中的「本地位置」，即可使用默认编辑器打开 md 文件。如果你的默认编辑器是 notepad++，则将下方命令中的 `Code.exe` 替换为 `notepad++.exe`。

```ini
;将 Runany 主目录下的 RunAny.ini 文件内的「编辑」模块替换为下方命令
-编辑(&Edit)
 --编程|cmd bat md ahk html js css json yml yaml py
 vscode|Code.exe
```

### docsify 全文检索

飞书表格可以搜索关键元素，但不能对检索全文。这时，我们需要使用 [docsify](https://docsify.js.org/#/)，一款能将 markdown 文档自动生成网站的工具，相当于轻量级的 GitBook。​

docsify 使用简单，如果使用了前文我修改过的[发布工具](https://github.com/rockbenben/Blog_WP)，则无需配置。在发布工具文件夹内的空白区域，右键打开终端，执行命令`docsify serve`即可生成全文检索网页，默认管理链接为 `http://localhost:3000/`。

![docsify 本地运行](https://img.newzone.top/2022-05-30-20-03-19.png?imageMogr2/format/webp)

如果你设置了 Github Pages，项目会默认启动在线 docsify 网页，页面链接取决于 Github 的设置。比如我的用户名是 rockbenben，项目名是 Blog_WP，所以 docsify 管理页面就是 <https://rockbenben.github.io/Blog_WP/>。

## 订阅管理：WordPress

40% 的网站基于 WordPress 架构，因此 WordPress 有超多的主题和插件，可以实现你想要的功能，比如 RSS、Newsletter。

如果你拥有较多的粉丝，可以使用 [Substack](https://substack.com/) 和[竹白](https://zhubai.love/)来分发博客。这两者都支持 Newsletter 付费订阅。只针对国内用户的话，竹白可支持微信订阅。

## 后续

比起原来的 Jekyll，新方案的配置要复杂些，但使用并不难，推荐稿件多的人采用。

折腾新方案的过程中，我发现了篇 2021 年初写的文章。当时，稿子写到 90%，我就去忙其他事，忘了这篇文章。等到这次被发现，它已经在草稿箱待了一年半。

用了新方案，稿件管理会变得很简单，稿件遗忘、找不到的情况也会减少许多。最近我出稿速度大增，也都跟这有关，都是从草稿箱捡回来的半成品。

写完这篇稿子，疫情封控也正好结束，终于可以出门了，希望永远别再给「免费假期」了。
