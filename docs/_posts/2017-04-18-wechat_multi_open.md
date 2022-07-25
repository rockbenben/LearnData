---
title: 电脑上实现微信双开，无需网页版或第三方软件
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

![](http://tc.seoipo.com/2022-05-06-04-21-30.png)

安装好后，就能与微信 PC 版一齐启动，互不干扰。

![](http://tc.seoipo.com/2022-05-06-04-21-40.png)

## 开机启动两个微信

找到系统启动文件夹，文件夹路径为：`%AppData%\Microsoft\Windows\Start Menu\Programs\Startup`。或者打开「运行」对话框，输入命令「shell:startup」，回车即可打开「启动文件夹」。

将微信 for windows 10 的快捷方式放到「启动」文件夹里。

![](http://tc.seoipo.com/2022-05-06-04-23-49.png)

三开的话，可以在 Microsoft Store 上安装 微信 (UWP) 。

如果还需要继续多开微信，可以参考 @刘舒怡 的方法：

> 只要在 2 秒内快速连续双击打开软件，就能弹出很多登录界面，你想登多少个就登多少个

另外，有人专门开发了微信/QQ 多开的补丁，需要四开以上的可以试试 [RevokeMsgPatcher](https://github.com/huiyadanli/RevokeMsgPatcher)。

但多开补丁风险未知，我只用了其中的防撤回功能，需谨慎使用多开补丁。

国内搬运地址：[RevokeMsgPatcher.v1.5.zip](https://wwz.lanzouf.com/ij0oz05ns3di)
