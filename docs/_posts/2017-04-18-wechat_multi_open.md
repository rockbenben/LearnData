---
title: 跳过第三方软件，一步到位实现微信双开的秘密
date: 2017-04-18
category:
  - 工具
tag:
  - 微信
order: -1
---

由于工作原因，有时候我们需要在电脑上登录多个微信。但微信限制一个客户端只能登陆一个账号，PC 端 + 网页版就成了通用方案，操作效率下降许多。

其实我们还有更好的办法。在微信 PC 版之余，同时安装微信 For Windows，就能实现客户端双开！

## 微信 For Windows 安装

打开「运行」对话框，输入并启动「应用商店」或「Microsoft Store」，搜索并安装 `微信 For Windows`。

![](https://img.newzone.top/2022-05-06-04-21-30.png?imageMogr2/format/webp)

安装好后，就能与微信 PC 版一齐启动，互不干扰。

![](https://img.newzone.top/2022-05-06-04-21-40.png?imageMogr2/format/webp)

## 开机启动两个微信

找到系统启动文件夹，文件夹路径为：`%AppData%\Microsoft\Windows\Start Menu\Programs\Startup`。或者打开「运行」对话框，输入命令「shell:startup」，回车即可打开「启动文件夹」。

将微信 for windows 10 的快捷方式放到「启动」文件夹里。

![](https://img.newzone.top/2022-05-06-04-23-49.png?imageMogr2/format/webp)

## 其他方法

如果还需要继续多开微信，可以**按住回车键，然后左键点击微信图标**，需要开启几个就点击几次。

也可以尝试 @刘舒怡 提到的办法：

> 只要在 2 秒内快速连续双击打开软件，就能弹出很多登录界面，你想登多少个就登多少个

此外，已有开发者专门为微信和 QQ 制作了多开补丁。若需同时打开四个或更多窗口，可以试用 [RevokeMsgPatcher](https://github.com/huiyadanli/RevokeMsgPatcher)，国内下载链接：[RevokeMsgPatcher.v1.6.zip](https://wwva.lanzouq.com/irUIX187hz3c)。

然而，使用多开补丁存在一定风险。我仅尝试过其中的防撤回功能，建议在使用多开补丁时务必小心。
