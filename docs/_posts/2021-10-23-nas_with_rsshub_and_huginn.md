---
title: RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS
date: 2021-10-23
category:
  - 自动化
tag:
  - nas
  - rss
order: -38
---

作为一个重度 RSS 用户，我获取的 90% 的新闻和信息都来自于 RSS 源。我使用 RSSHub 来生成主流媒体的 RSS，使用 Huginn 来定制个性化的 RSS，同时使用 TinyTinyRSS 来过滤并阅读 RSS。这些服务帮助我将阅读时间**从原来的 3 个小时减少到 1 个小时**。

这些服务最初托管在一台配置较低的 1 核 1G 服务器上。然而，由于配置过低，服务器频繁重启，维护成本不断上升。后来，我尝试了一些配置较高的国外服务器，例如 2 核 4G 低端服务器，但遇到了严重的超售和性能不稳定的问题。总的来说，购买国外的低端服务器（特别是**俄罗斯服务器**）就是把钱扔进水里。

因此，相较于升级高配服务器或者使用不靠谱的国外 VPS，NAS 成为了一个高性价比的选择。当然，这也面临着许多问题，我们需要一步步地去解决。

## 事前准备

- NAS
- 域名 (子域名既可)
- 带动态 DNS 的路由器 (推荐 openwrt 软路由)

## Docker 镜像安装

1. NAS 管理后台 > 套件中心 > 搜索并安装「Docker」，随后在 Docker 容器中安装所需服务。
2. 在 Docker 注册表中搜索对应的镜像，选中有最多星的项目，然后点击下载。

   ![](https://img.newzone.top/2022-05-05-14-40-43.png?imageMogr2/format/webp)

3. 镜像下载完成后，进入「映像」，选中刚下载好的镜像，点击启动。

   ![](https://img.newzone.top/2022-05-05-14-41-01.png?imageMogr2/format/webp)

4. 在高级设置中的端口设置，将本地端口从自动改为一个固定的端口，这样以后就可以方便地进行端口映射，避免 NAS 重启后本地端口发生变化。

   ![](https://img.newzone.top/2022-05-05-14-41-15.png?imageMogr2/format/webp)

## 域名绑定

1. **关闭光猫路由**：通过电话联系宽带运营商，要求关闭光猫的路由功能。对于那些默认不提供公网 IP 的运营商，也可以在这个环节让运营商给你分配一个公网 IP。如果碰到死板的客服，找你要开通理由，不要正面回答。

2. 家用宽带通常使用动态 IP，且无法提供对外的 80 接口。可以使用动态 DNS 插件来实现域名与家庭宽带 IP 的实时绑定，以达到固定链接打开 NAS 服务的效果。

3. **动态 DNS(DDNS) 设置**，以下以 OpenWrt+Cloudflare 为例。

   - Cloudflare 动态 DNS 配置 ([教程](https://p3terx.com/archives/openwrt-cloudflare-ddns.html))：进入系统 - 软件包，搜索「cloudflare」，安装 `ddns-scripts_cloudflare.com-v4`，然后重启路由器。
   - 进入服务 - 动态 DNS，Cloudflare 登录密码为 [Cloudflare API](https://dash.cloudflare.com/profile/api-tokens) 中的 Global API Key。如果你的域名托管在阿里云上，可以在 [RAM 访问控制](https://ram.console.aliyun.com/users) 中创建拥有 AliyunDNSFullAccess 权限的 AccessKey。动态 DNS 的用户名和密码分别可以使用 AccessKey ID 和 AccessKey Secret。

   ![](https://img.newzone.top/2022-05-05-14-41-31.png?imageMogr2/format/webp)

如果你使用的是内网宽带，无法提供公网 IP，可以使用花生壳等内网穿透工具来达到类似的效果。

## RSS 转码

由于国内运营商禁用了家庭宽带的 80 和 443 端口，使得无法隐藏 NAS 服务端口，只能采用 `home.xxx.com:34567` 这样的链接。同时，绝大多数主流 RSS 阅读器都无法支持带有端口号的 RSS 源配置，即便通过 DNS 设置域名隐式跳转，端口链接依然会被识别。这一问题使得部署在 NAS 上的 RSS 源无法直接被读取。例如，在使用 Tiny Tiny RSS 订阅 NAS 的 RSS 源时，常会出现报错，无法准确读取带有端口或 HTTPS 的 RSS 源。

为了顺利读取 NAS 的 RSS 源内容，我使用 PHP 制作了一个转录链接 `https://rss.aishort.top/?type=yyy`。该 PHP 文件整合了所有 RSS 源，并通过链接参数进行区分。通过 PHP 将 NAS 上的 Huginn 和 RSSHub 的 RSS 内容聚合到服务器，PHP 根据链接参数获取并输出对应的 XML，从而实现与各类阅读器的兼容。而且 PHP 具有私密性，不会泄漏 NAS 域名和端口；输出链接可替换，方便后续更新维护。

虽然需要在另一台服务器上部署 PHP 转录，但与购买用于抓取 RSS 所需的高配服务器相比，这一方案的性价比更高。如果你已有服务器，可按照我的方式直接部署。

```php
## 网站目录新建 rss.php 文件，然后放入如下代码
## yyy 代表链接参数，方便区分不同 rss 源，qqq 代表内部 rss 源路径
## 注意：如果链接参数 yyy 参数中有中文，可用 UrlEncode 编码，避免 rss 阅读器报错。
<?php
    if($_GET['type']=="yyy"){
        echo file_get_contents("http://home.xxx.com:34567/qqq");
    }elseif($_GET['type']=="zzz"){
        echo file_get_contents("http://home.xxx.com:34567/wwww");
    }
?>
```

如果你没有服务器或不愿意再折腾，也可以尝试其他的 RSS 阅读器。例如，The Old Reader 支持使用带有端口的 RSS 源。

## 总结

使用 NAS 替代服务器后，Huginn 不再定期崩溃，抓取也不再卡壳，也不需要总惦记给服务器续费。硬件配置也从 1 核 1G 跃升到 4 核 8G。这套流程跑了一年，基本上没有出现什么问题，可以放心使用。

这篇文章也是 RSS 系列的完结篇。从 2017 年 4 月的《RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源》开始，零零散散地写了 4 年半，终于把坑都填起来了。

RSS 系列的初衷是为了减少算法推送泛滥而造成的信息过载。来自 Google 的分析师 Gary Illyes 曾表示：「互联网上大约 60% 的内容是重复的。」比如你搜索一项内容，打开前 10 个网页，可能内容完全一样。

RSS (Really Simple Syndication) 的中文含义是「简易信息聚合」，能按你个人所需定制信息聚合，让你脱离算法的掌控，把时间花在你真正需要的信息上。而 RSS 这个对抗信息过载的极佳工具却从 Google Reader 退役后，被很多人认为已经衰弱消亡。实际上 RSS 只是从主流社会中退出，变为少数人的高效信息获取方式。

RSS 定制的系列文章原本只是记录个人心得，我没想到文章发布后收到很多人的支持，才发觉并不是 RSS 在没落，而是缺少布道者。多数人希望了解 RSS，但之前的教程门槛较高，大厂如 Google 也关闭了 RSS 项目，导致新手入门变得更加困难。因此，我持续简化 RSS 教程，希望能让大家更轻松入门 RSS。如果你也对 RSS 感兴趣，希望把你遇到的疑问和所得都记录下来，帮助越来越多的人了解 RSS，掌握这项高效的信息获取方式。

我坚信 **RSS 是最适合普通人的信息获取方式**。这可能有些反潮流，但我内心对此深信不疑，也希望越来越多的人能认识到 RSS，开始使用这项只被少数人使用的高效信息获取方式。

## RSS 合集

汇总的 RSS 永久订阅源都是通过 RSSHub 和 Huginn 制作的。如果你有兴趣自己制作 RSS，可以参考以下教程。

- [RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源](https://newzone.top/posts/2017-04-22-rss_feed43_feedex.html)

- [RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）](https://newzone.top/posts/2018-10-07-huginn_scraping_any_website.html)

- [RSS 速成篇：RSSHub 捡现成的轮子](https://newzone.top/posts/2019-04-01-rsshub_noob.html)

- [RSS 速成篇 2：RSSHub 自部署](https://newzone.top/posts/2020-03-25-rsshub_on_vps.html)

- [RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS](https://newzone.top/posts/2021-10-23-nas_with_rsshub_and_huginn.html)

- [RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效](https://newzone.top/posts/2022-03-17-rss_persistent_link_collection.html)
