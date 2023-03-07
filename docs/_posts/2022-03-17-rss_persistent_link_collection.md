---
title: RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效
date: 2022-03-17
category:
  - 自动化
tag:
  - rss
order: -42
---

越来越多的网站不再提供 RSS feed，令我们无法便捷获取信息。为了避免这一情况的恶化，我选择自制 RSS，并将其汇总在本文。本文链接均为自用 RSS，链接一直有效，放心使用。

如果有兴趣自己制作 RSS，可查看文章底部教程。

## 每日热点

整理实时新闻热点，采集来自搜索引擎、微信文章、应急通知的资讯。

- **百度实时热点**：`http://newzone.top/rss.php?type=baidu`
  实时收录百度热搜内容，并显示热搜指数和简介。

  ![](https://tc.seoipo.com/2022-05-05-17-21-49.png)

- **国内应急新闻**：`http://newzone.top/rss.php?type=cneb`
  采集自[国家应急广播](http://www.cneb.gov.cn/guoneinews/)，配合 rss 阅读器过滤，及时获取当地应急通知。

  ![](https://tc.seoipo.com/2022-05-05-17-22-08.png)

- **瓦斯阅读**：`http://newzone.top/rss.php?type=wasi`
  通过瓦斯阅读，获取当天最热门的微信文章。微信图片不支持第三方显示，因此 RSS 阅读器内只显示文字内容，点击文章链接后，可阅读完整公众号文章。

  ![](https://tc.seoipo.com/2022-05-05-17-22-32.png)

## 互联网资讯

整合互联网资讯媒体，偏重于前端科技、电子硬件、手机应用。

- **36kr**：`http://newzone.top/rss.php?type=36kr`

- **虎嗅网**：`http://newzone.top/rss.php?type=huxiu`

- **艾瑞网**：`http://newzone.top/rss.php?type=iresearch`

- **爱范儿|AppSolution**：`http://newzone.top/rss.php?type=AppSolution`

## 奇思妙想

每天吸收些稀奇古怪的知识，期待引发后续的灵机一动。

- **果壳网**：`http://newzone.top/rss.php?type=guokr`

- **知乎想法热榜**：`http://newzone.top/rss.php?type=zhihu`

::: tip
最近有人疯狂获取 RSS 链接近乎于 DDoS 攻击（频繁获取内容也不会更新，不清楚为什么这么干……），已在后台屏蔽此类 IP，建议将 RSS 更新间隔设为 1 小时。如有错误识别，可以联系我解封。
:::

## 教程：自制 RSS

以上 RSS 链接均通过 RSSHub 和 Huginn 制作，下方为 RSS 制作教程。

- [RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源](https://newzone.top/posts/2017-04-22-rss_feed43_feedex.html)

- [RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）](https://newzone.top/posts/2018-10-07-huginn_scraping_any_website.html)

- [RSS 速成篇：RSSHub 捡现成的轮子](https://newzone.top/posts/2019-04-01-rsshub_noob.html)

- [RSS 速成篇 2：RSSHub 自部署](https://newzone.top/posts/2020-03-25-rsshub_on_vps.html)

- [RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS](https://newzone.top/posts/2021-10-23-nas_with_rsshub_and_huginn.html)

- [RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效](https://newzone.top/posts/2022-03-17-rss_persistent_link_collection.html)
