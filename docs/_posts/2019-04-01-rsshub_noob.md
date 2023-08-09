---
title: RSS 速成篇：RSSHub 捡现成的轮子
date: 2019-04-01
category:
  - 自动化
tag:
  - rss
  - RSSHub
order: -25
---

RSS 使用中曾介绍了 feed43 和 Huginn，但这些工具要么需要学习，要么需要硬件。相较之下，RSSHub 拥有成熟的配置，可供直接使用。

**RSSHub** 是一个开源项目，可将微博、知乎、豆瓣、bilibili、Youtube 等主流网站转化为 RSS。只需访问 [RSSHub 官网](https://docs.rsshub.app/)，便可定期获取主流媒体的 RSS 项目更新。

![](https://img.newzone.top/20190331012441.png?imageMogr2/format/webp)

## bilibili 番剧抓取示例

1. 打开 [RSSHub bilibili 专区](https://docs.rsshub.app/social-media.html#bilibili)，在此可根据番剧、UP 主等定制 RSS。

   ![](https://img.newzone.top/20190406131343.png?imageMogr2/format/webp)

2. 准备抓取番剧《盾之勇者成名录》的更新，番剧主页链接为 `https://www.bilibili.com/bangumi/media/md4316482/`，mediaid 为 `4316482`。

3. 按照路由参数，修改 RSS 链接 `https://rsshub.app/bilibili/bangumi/media/4316482`，然后在 RSS 阅读器中打开。

   ![](https://img.newzone.top/20190406134022.png?imageMogr2/format/webp)

附注：虽然 RSSHub 使用非常简单，但由于现已过于流行，微博、知乎等已开始反爬限制。若动手能力强，建议按下方教程自行部署或选择 Huginn。

## RSS 合集

汇总的 RSS 永久订阅 feeds，均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。

- [RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源](https://newzone.top/posts/2017-04-22-rss_feed43_feedex.html)

- [RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）](https://newzone.top/posts/2018-10-07-huginn_scraping_any_website.html)

- [RSS 速成篇：RSSHub 捡现成的轮子](https://newzone.top/posts/2019-04-01-rsshub_noob.html)

- [RSS 速成篇 2：RSSHub 自部署](https://newzone.top/posts/2020-03-25-rsshub_on_vps.html)

- [RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS](https://newzone.top/posts/2021-10-23-nas_with_rsshub_and_huginn.html)

- [RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效](https://newzone.top/posts/2022-03-17-rss_persistent_link_collection.html)
