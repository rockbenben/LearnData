---
title: RSS 速成篇 2：RSSHub 自部署
date: 2020-03-25
category:
  - 自动化
tag:
  - rss
  - RSSHub
order: -28
---

RSSHub 使用非常简单，但随着使用者增多，微博、知乎加大了反爬限制。目前大量源都无法直接使用，只能自建 RSSHub 来解决稳定性。部署前，准备好**域名和服务器**。

新手使用 RSSHub 部署教程报错较多，本篇将使用宝塔 PM2 管理器进行部署。

## 部署步骤

1. 将 RSSHub 代码下载到根目录 root，执行命令 `git clone https://github.com/DIYgod/RSSHub.git`。
2. 安装宝塔面板，查看[官方安装教程](https://www.bt.cn/bbs/thread-19376-1-1.html)。
3. 登陆宝塔面板，点击「软件商店」-「运行环境」，安装**PM2 管理器**。

   ![](https://img.newzone.top/20200325120705.png?imageMogr2/format/webp)

4. 点击 PM2 管理器右侧的设置，按图中红字添加项目路径，启动文件名称为 `lib`。

   ![](https://img.newzone.top/20200325121639.png?imageMogr2/format/webp)

5. 添加后，点击项目中的「映射」，输入指定域名，如 `rsshub.xxx.com`，服务器的 1200 端口将指向该域名。映射域名需解析到服务器 IP。

   ![](https://img.newzone.top/20200325121921.png?imageMogr2/format/webp)

程序运行时，如果遇到报错，可以直接用命令运行 pm2，如 `pm2 start /root/RSSHub/lib/index.js --name rsshub`。

## 使用步骤

1. 打开 [RSSHub 接口指南](https://docs.rsshub.app/)，搜索需要订阅的网站。RSSHub 支持国内大部分的主流网站。

2. 根据 [bilibili 番剧路由](https://docs.rsshub.app/social-media.html#bilibili)的文档，将生成源 `https://rsshub.app/bilibili/bangumi/media/9192` 其中的域名 `https://rsshub.app` 替换为你自部署的域名，如 `http://rsshub.xxx.com/bilibili/bangumi/media/9192`。

另外 RSSHub 支持很多实用的参数，比如内容过滤、全文输出等。全文输出参数为 `mode=fulltext`，应用举例：果壳科学人全文输出 `https://rsshub.xxx.com/guokr/scientific?mode=fulltext`。其他可以在[通用参数](https://docs.rsshub.app/parameter.html)官方文档了解具体使用方法。

## RSSHub VS. Huginn

- RSSHub：使用简单，使用现成的抓取规则，适用于国内主流网站；但无法抓取对小众网站，必须 RSSHub 官方定制订阅源。
- Huginn：适用于所有网站，可设定抓取频率、内容结构、js 结果、输出样式等；但部署、配置复杂，入门门槛高，需要针对网站单独定制抓取规则。

## RSS 合集

汇总的 RSS 永久订阅 feeds，均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。

- [RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源](https://newzone.top/posts/2017-04-22-rss_feed43_feedex.html)

- [RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）](https://newzone.top/posts/2018-10-07-huginn_scraping_any_website.html)

- [RSS 速成篇：RSSHub 捡现成的轮子](https://newzone.top/posts/2019-04-01-rsshub_noob.html)

- [RSS 速成篇 2：RSSHub 自部署](https://newzone.top/posts/2020-03-25-rsshub_on_vps.html)

- [RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS](https://newzone.top/posts/2021-10-23-nas_with_rsshub_and_huginn.html)

- [RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效](https://newzone.top/posts/2022-03-17-rss_persistent_link_collection.html)
