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

作为重度 RSS 用户，90% 的讯息来自 rss。RSSHub 生成主流媒体 rss，Huginn 定制个性化 rss，TinyTinyRSS 过滤 rss，这帮我**从 3 小时的阅读时间节省到只需 1 小时**。

这些服务原本托管在 1 核 1G 的低配服务器上，不过配置过低，频繁重启，维护成本持续上升。接着尝试了国外 2 核 4G 的低端服务器，超售严重，性能极度不稳定。买国外的低端服务器 (特别是**俄罗斯服务器**)，就是把钱丢水里了。

比起花钱升级和不靠谱的国外 VPS，NAS 成为一个高性价比的选择。当然，面临的问题并不少，我们一步步去解决。

## 事前准备

- NAS
- 域名 (子域名既可)
- 带动态 DNS 的路由器 (推荐 openwrt 软路由)

## Docker 镜像安装

1. NAS 管理后台－套件中心－搜索并安装「Docker」，然后在 Docker 容器中安装所需服务。
2. Docker－注册表，搜索对应镜像，选中最高星的项目，点击下载。

   ![](http://tc.seoipo.com/2022-05-05-14-40-43.png)

3. 镜像下载完成后，进入「映像」，选中刚下载好的镜像，点击启动。

   ![](http://tc.seoipo.com/2022-05-05-14-41-01.png)

4. 高级设置－端口设置，将本地端口从自动改为一个固定的端口，方便后期做端口映射。避免 NAS 重启后，本地端口发生变化。

   ![](http://tc.seoipo.com/2022-05-05-14-41-15.png)

## 域名绑定

1. **关闭光猫路由**：电话联系宽带运营商，要求关闭光猫的路由功能。少数运营商默认不提供公网 IP，也可以在这环节，让运营商给你分配公网 IP。碰到死板的客服，会找你开通理由，不要正面回答。

2. 家用宽带多为动态 ip，且无对外 80 接口。使用动态 DNS 插件，可让域名时刻绑定家用宽带 ip，达到固定链接打开 NAS 服务。

3. **动态 DNS(DDNS) 设置**，以下以 openwrt+cloudflare 为例。

   - cloudflare 动态 DNS 配置 ([教程](https://p3terx.com/archives/openwrt-cloudflare-ddns.html))：系统－软件包，搜索「cloudflare」，安装 ddns-scripts_cloudflare.com-v4，然后重启路由器。
   - 服务－动态 DNS，cloudflare 登录密码为 [cloudflare API](https://dash.cloudflare.com/profile/api-tokens) 中的 Glodbal API Key。阿里云用户可在 RAM 访问控制中创建专门的 AccessKey。

     ![](http://tc.seoipo.com/2022-05-05-14-41-31.png)

4. 如果没有宽带为内网，不能提供公网 ip，可借助花生壳等内网穿透工具达到类似效果。

## RSS 转码

运营商禁用了家用宽带的 80 和 443 端口。这导致 NAS 的服务链接无法隐藏端口，如 `home.xxx.com:34567`。同时，主流 RSS 阅读器大多不支持配置端口链接，这导致在**NAS 上部署的 rss 源无法直接被读取**。特别是我常用的 Tiny Tiny RSS，订阅 NAS rss 源的 bug 超多，无法获取带端口的 rss 链接，也无法获取使用 https 的 rss 源。

为了顺利获取 NAS 的 rss 源，我用 php 做了条转录链接，参考样例：`http://xxx.com/rss.php?type=yyy`。这个 php 文件聚合了所有的 rss 源，用链接参数作区分。虽然 php 转录需要部署在另一台服务器，但比起节省高配服务器的费用，还是值得的。对了，php 转录链接不吃配置，如果你已经有了一台，可以像我一样直接部署在工作服务器上。

```php
## 网站目录新建 rss.php 文件，然后放入如下代码
## yyy 为链接参数，方便区分不同 rss 源，qqq 为内部 rss 源路径
## 注意：如果链接参数 yyy 中有中文，可用 UrlEncode 编码，避免 rss 阅读器报错。
<?php
    if($_GET['type']=="yyy"){
        echo file_get_contents("http://home.xxx.com:34567/qqq");
    }elseif($_GET['type']=="zzz"){
        echo file_get_contents("http://home.xxx.com:34567/wwww");
    }
?>
```

如果没有服务器，也不愿继续折腾，可以试试其他阅读器。测试 theoldreader 直接获取带端口的 rss 源。

## 总结

NAS 替代服务器后，Huginn 不再定期崩溃，抓取也不再卡壳，也不需要总惦记给服务器续费。硬件配置也从 1 核 1G 跃升到 4 核 8G，这套流程跑了一年，基本没 bug，可以放心使用。

这篇也是 RSS 系列的完结篇，从 2017 年 4 月的《RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源》开始，零零散散地写了 4 年半，终于把坑都填起来了。

RSS 系列的初衷是，2017 年算法推送的愈加泛滥，定制化 rss 变成刚需，想着把定制化 rss 过程中的所得记录下来。没想到文章发布后收到很多人的支持，发觉并不是 rss 在没落，而是缺少 rss 的布道者。如果你也对 rss 感兴趣，希望也可以记录自己平常的疑问和所得。这会帮助你更好的整理知识，也能帮助越来越多的人了解 rss，掌握这项高效的信息获取方式。

我坚信**rss 是最适合普通人的信息获取方式**，这可能有些反潮流，但这就是我内心的想法。

## RSS 合集

汇总的 RSS 永久订阅 feeds，均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。

- [RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源](https://newzone.top/_posts/2017-04-22-rss_feed43_feedex.html)

- [RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）](https://newzone.top/_posts/2018-10-07-huginn_scraping_any_website.html)

- [RSS 速成篇：RSSHub 捡现成的轮子](https://newzone.top/_posts/2019-04-01-rsshub_noob.html)

- [RSS 速成篇 2：RSSHub 自部署](https://newzone.top/_posts/2020-03-25-rsshub_on_vps.html)

- [RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS](https://newzone.top/_posts/2021-10-23-nas_with_rsshub_and_huginn.html)

- [RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效](https://newzone.top/_posts/2022-03-17-rss_persistent_link_collection.html)
