---
title: RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效
date: 2022-03-17
category:
  - 自动化
tag:
  - rss
order: -42
---

越来越多的网站不再提供 RSS feed，这使得我们难以便捷地获取信息。为了避免这一情况的恶化，我选择了自制 RSS，并将它们输出为永久链接，以保持内容的有效性。本文链接均为自用 RSS，链接长期有效，可放心使用。

如果有兴趣自己制作 RSS，可查看文章底部教程。

## 每日热点

整理实时新闻热点，采集来自搜索引擎、微信文章、应急通知的资讯。

- **百度实时热点**：`https://rss.aishort.top/?type=baidu`
  实时收录百度热搜内容，并显示热搜指数和简介。

  ![](https://img.newzone.top/2022-05-05-17-21-49.png?imageMogr2/format/webp)

- **国内应急新闻**：`https://rss.aishort.top/?type=cneb`
  采集自[国家应急广播](http://www.cneb.gov.cn/guoneinews/)，配合 rss 阅读器过滤，及时获取当地应急通知。

  ![](https://img.newzone.top/2022-05-05-17-22-08.png?imageMogr2/format/webp)

- **瓦斯阅读**：`https://rss.aishort.top/?type=wasi`
  通过瓦斯阅读，获取当天最热门的微信文章。微信图片不支持第三方显示，因此 RSS 阅读器内只显示文字内容，点击文章链接后，可阅读完整公众号文章。

  ![](https://img.newzone.top/2022-05-05-17-22-32.png?imageMogr2/format/webp)

## 互联网资讯

整合互联网资讯媒体，偏重于前端科技、电子硬件、手机应用。

- **36kr**：`https://rss.aishort.top/?type=36kr`

- **虎嗅网**：`https://rss.aishort.top/?type=huxiu`

- **艾瑞网**：`https://rss.aishort.top/?type=iresearch`

- **爱范儿|AppSolution**：`https://rss.aishort.top/?type=AppSolution`

## 奇思妙想

每天吸收些稀奇古怪的知识，期待引发后续的灵机一动。

- **果壳网**：`https://rss.aishort.top/?type=guokr`

- **知乎想法热榜**：`https://rss.aishort.top/?type=zhihu`

## 教程：自制 RSS

以上提供的 RSS 链接都是使用 RSSHub 和 Huginn 制作的。如果你也想制作 RSS，可以参考以下教程：

- [RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源](https://newzone.top/posts/2017-04-22-rss_feed43_feedex.html)

- [RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）](https://newzone.top/posts/2018-10-07-huginn_scraping_any_website.html)

- [RSS 速成篇：RSSHub 捡现成的轮子](https://newzone.top/posts/2019-04-01-rsshub_noob.html)

- [RSS 速成篇 2：RSSHub 自部署](https://newzone.top/posts/2020-03-25-rsshub_on_vps.html)

- [RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS](https://newzone.top/posts/2021-10-23-nas_with_rsshub_and_huginn.html)

- [RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效](https://newzone.top/posts/2022-03-17-rss_persistent_link_collection.html)
