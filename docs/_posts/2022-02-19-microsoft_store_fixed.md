---
title: Windows 应用商店 (Microsoft store) 打不开？100% 解决方法 - 兼容 Win10、Win11
date: 2022-02-19
category:
  - 系统
tag:
  - Microsoft store
order: -40
---

Microsoft store 页面无法打开，提示需要联网或刷新。多数教程将原因归咎于系统更新或 DNS 设置，但实际上是你的 **IE 设置被更改了**。

![](https://tc.seoipo.com/2022-05-05-16-48-55.png?imageMogr2/thumbnail/!40p)

特别是国内的网银用户，**每次登录建行，U 盾都会修改 Internet 选项**，从而导致 TLS 版本过低无法连接应用商店。

## 解决方法

1. 选择「开始菜单」>「搜索栏」，搜索「Internet 选项」。

   ![](https://tc.seoipo.com/2022-05-05-17-01-23.png?imageMogr2/thumbnail/!50p)

2. Internet 属性中点击「高级」。

   ![](https://tc.seoipo.com/2022-05-05-17-01-48.png?imageMogr2/thumbnail/!50p)

3. 勾选「使用 TLS 1.2」和「使用 TLS 1.3」。

   ![](https://tc.seoipo.com/2022-05-05-17-02-01.png?imageMogr2/thumbnail/!50p)

网银用户会重复出现该问题，重新执行上方步骤勾选 TLS 即可。

如果你依然无法访问，则尝试重置网络连接、DNS、缓存、应用商店设置，操作参考 [Microsoft Store 打不开，代码：0x80131500](https://answers.microsoft.com/zh-hans/windows/forum/all/microsoft/43acd62e-a11e-449c-9fa4-50931ad38565)。

## 解决流程 GIF

![win11-ie 高级设置.gif](https://tc.seoipo.com/IE_SSL_Setting_win11.webp)
