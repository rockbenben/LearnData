---
title: koolproxy 无法下载 https 证书？
date: 2018-06-10
category:
  - 网络
tag:
  - koolproxy
order: -20
---

::: warning
KoolProxy 已经很长时间没有更新了，视频广告规则经常过期。有人反馈本文已失效。
:::

koolproxy 是可以运行在路由器上的广告屏蔽软件，跟其他最大的区别就是支持 https , 能有效屏蔽最新的视频应用广告（播个 10 分钟视频，广告 60 秒。。。）

为了屏蔽 https 广告，koolproxy 需要在每台设备上安装 https 证书。但我访问证书地址 110.110.110.110 时，却被提示无法访问。

这是我们需要进入路由器后台，对证书地址进行操作。

进入路由器后台，一般设置-Tools-Run Cmd ,运行命令 `iptables -t nat -I PREROUTING -d 110.110.110.110 -p tcp --dport 80 -j REDIRECT --to 3000`。重启后，该命令失效。

![](https://tc.seoipo.com/20180610143928.png?imageMogr2/format/webp)

运行命令后，就可以下载 https 证书，之后的设置参考 [Merlin 版 Koolproxy3.1.x 使用教程](http://koolshare.cn/thread-80430-1-1.html)。

保存 Koolproxy 设置后，一定要**重启路由**，否则可能部分屏蔽设置未成功生效。

**参考资料：**

- [koolproxy 项目地址](https://github.com/koolproxy/merlin-koolproxy)
- [失效链接](http://koolshare.cn/thread-81712-1-1.html)
