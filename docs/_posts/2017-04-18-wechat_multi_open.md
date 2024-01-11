---
title: 跳过第三方软件，一步到位实现微信双开的秘密
date: 2017-04-18
category:
  - 工具
tag:
  - 微信
order: -1
---

由于工作需要，我经常在电脑上同时登录多个微信账号。然而，微信规定一个客户端仅能登录一个账号，这导致我不得不同时使用 PC 端和网页版，显著降低了操作效率。随着「微信 For Windows」和「微信 UWP」版本的停用，我们曾依赖的多客户端策略变得几乎无效了。如果你之前安装了旧版的微信 UWP，好好珍惜吧。

要在不使用第三方软件的情况下实现微信的多开，现在只能依赖微信自身的一个小漏洞。通过快速双击微信图标，可以实现多开。

## 双击多开

要开启多个微信，只需**按住回车键，同时左键点击微信图标**，点击次数决定了开启的微信数量。这个小技巧是@刘舒怡分享的：

> 只要在 2 秒内快速连续双击打开软件，就能弹出很多登录界面，你想登多少个就登多少个

如果你不喜欢手动点击，可以使用以下脚本，保存为 `start_wechat.bat` 文件。这个脚本将启动三个微信，你可以根据需要复制更多的 start 行。

```shell
@echo off
start "WeChat" "C:\Program Files\Tencent\WeChat\WeChat.exe"
start "WeChat" "C:\Program Files\Tencent\WeChat\WeChat.exe"
start "WeChat" "C:\Program Files\Tencent\WeChat\WeChat.exe"
```

有开发者为微信和 QQ 制作了多开补丁 [RevokeMsgPatcher](https://github.com/huiyadanli/RevokeMsgPatcher)，可以从国内链接下载：[RevokeMsgPatcher.v1.6.zip](https://wwva.lanzouq.com/irUIX187hz3c)。使用这个补丁后，每次点击应用图标都会打开新的登录窗口，这取决于个人需求。我更喜欢直接通过 `.bat` 脚本来实现多开。

## 开机多开微信

如果你希望电脑开机时自动多开微信，可以把上述脚本的快捷方式放入 Windows 的开机「启动」文件夹。通常这个文件夹路径为 `%AppData%\Microsoft\Windows\Start Menu\Programs\Startup`。或者，打开「运行」对话框，输入 `shell:startup`，回车即可。

![开机多开微信](https://img.newzone.top/2022-05-06-04-23-49.png?imageMogr2/format/webp)

## 多客户端（已失效）

> 从 2024 年开始，「微信 For Windows」和「微信 UWP」均已下架，新版的微信 Store 版也无法与微信 PC 版同时安装。因此，这一方案仅供记录，已不再有效。

打开「运行」对话框，输入并启动「应用商店」或「Microsoft Store」，搜索并安装「微信 For Windows」「微信 UWP」。

![安装微信客户端](https://img.newzone.top/2022-05-06-04-21-30.png?imageMogr2/format/webp)

安装后，你可以同时启动微信 PC 版和这两个版本，互不干扰。如果你希望开机时自动启动这两个微信，可以把它们的快捷方式放在开机启动文件夹内。

![多客户端微信](https://img.newzone.top/2022-05-06-04-21-40.png?imageMogr2/format/webp)

## 总结

应用多开似乎越来越不受欢迎，比如新版 QQ 已经移除了多账户登录选项。但实际上，用户是怎样想的呢？这又有谁在乎呢？
