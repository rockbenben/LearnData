---
title: RSS 入门篇：Feed43&FeedEx-为静态网页定制 RSS 源
date: 2017-04-22 12:54:00
category:
  - 自动化
tag:
  - rss
  - Feed43
  - FeedEx
order: -2
---

迷上 IFTTT 后急需 RSS 来监测网页，找到免费的 FEED43。网上有很多教程，但对新手都不够友好，就重新整理了一份。

**► 开始烧制属于自己的 feed**

## 1. 进入网页

[FEED43](http://www.feed43.com/) 无需注册，点击 Create your own feed 直接使用。

![](https://pic1.zhimg.com/v2-b5da0b08f632376fad3925a779e373b4_r.jpg)

## 2. 选定 RSS 网页

将目标网址添入 Step1. Specify source page address (URL)，将输入的源代码复制到 txt 文档中（方便之后写抓取规则）

![](https://pic1.zhimg.com/v2-1b687a5b1c325ba6d04fbdcc13b95668_r.jpg)

如果 Page Source 显示为乱码，Encoding 可设为 **UTF-8** 。

## 3. 定制 RSS 抓取规则

Global Search Pattern 是选择你要搜索的范围。可以不填，这样会搜索整个页面，一般新手都选择整个页面，即空白。Item (repeatable) Search Pattern 这部分最重要，是我们要抓取的内容。

![](https://pic1.zhimg.com/v2-b1fa90c59739bddc0c27134cd36ba6bc_r.jpg)

仔细查看 Step1 中的源代码，找到区需要抓取的部分，输入到 Item (repeatable) Search Pattern。

测试网址：`http://news.163.com/special/0001386F/rank_whole.html`。

需要抓取的源代码：

```html
<tr>
  <td class="red">
    <span>2</span
    ><a href="更时尚更运动 车展实拍解析红旗 H5"
      >更时尚更运动 车展实拍解析红旗 H5</a
    >
  </td>
  <td class="cBlue">11211615</td>
</tr>
```

![](https://pic2.zhimg.com/v2-cf6dbf2c09189f7517ec63abdc80c50d_r.jpg)

**抓取规则**：

```html
<tr>
  {*}
  <td class="{*}"><span>{*}</span><a href="{%}">{%}</a></td>
  {*}
  <td class="cBlue">{*}</td>
  {*}
</tr>
```

点击 Extract，进行抓取。

![](https://pic4.zhimg.com/v2-e9486741a6229ab258a95147f584571b_r.jpg)

## 4. 整理 rss 输入格式

Define output format，一般情况下前面三个会已经写好，后三个就将前面得出的 item 里面的元素填入即可，我这里{%1}对应的是链接所以填入 Link，{%2}对于标题就填入 Title。

![](https://pic1.zhimg.com/v2-b4614f5c46090f2eb762aac87d604350_r.jpg)

然后点击 preview，完成制作，同时出现预览。

![](https://pic2.zhimg.com/v2-498bf1f1c0b14da172498b58f59e39b9_r.jpg)

如果注册了 FEED43 的账号，可以修改 rss 地址，但不能改为中文，否则会 rss 出错。

## 5. 获取 RSS 地址

点击 Feed URL 可得 rss 地址，我这里是 [https://www.feed43.com/dianji.xml](https://www.feed43.com/dianji.xml)

![](https://pic1.zhimg.com/v2-f3b00e876d8df136f7d354b4fc22f900_r.jpg)

在 RSS reader 中展示为

![](https://pic4.zhimg.com/v2-6d8f503ff3da16eb985ca1d3ae2de98f_r.jpg)

## 6. 全文抓取

feed43 导出的条目必须点击链接才能看到内容。在 rss 展示全文，需要通过 FeedEx 再转一次。注意：feed43 免费用户过多，**需在浏览器中打开一次才能得到真实链接** (一般为 `http://node2.feed43.com`)，FeedEx 需使用真实链接，一般 3 分钟内转换好。

FeedEx：[https://feedex.net/](https://feedex.net/)

![](https://pic4.zhimg.com/v2-8e3701adffa1d6fb4ea10dda2704988b_r.jpg)

feeds43 免费版每 6 小时抓取一次，显示最新的 20 条内容。

如果网页源更新较频繁的话，可使用 RSSHub 和 Huginn。

## RSS 合集

汇总的 RSS 永久订阅 feeds，均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。

- [RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源](https://newzone.top/_posts/2017-04-22-rss_feed43_feedex.html)

- [RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）](https://newzone.top/_posts/2018-10-07-huginn_scraping_any_website.html)

- [RSS 速成篇：RSSHub 捡现成的轮子](https://newzone.top/_posts/2019-04-01-rsshub_noob.html)

- [RSS 速成篇 2：RSSHub 自部署](https://newzone.top/_posts/2020-03-25-rsshub_on_vps.html)

- [RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS](https://newzone.top/_posts/2021-10-23-nas_with_rsshub_and_huginn.html)

- [RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效](https://newzone.top/_posts/2022-03-17-rss_persistent_link_collection.html)

**参考资料**：

- [FEED43 – 为没有 Feed 的网页生成 RSS 格式订阅源 [教程]](http://www.appinn.com/feed43/)

- [喜欢的网站，没有 rss 怎么办，自己做！！用 FEED43 自己烧制喜欢网页 rss 教程 -- 小佑 (其实内附双教程)](https://www.douban.com/note/199431341/)
