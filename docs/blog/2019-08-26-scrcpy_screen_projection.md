---
layout: post
title: "scrcpy - 手机无线投屏到电脑"
subtitle: ""
date: 2019-08-26
author: "Benson"
header-img: img/post-bg-20180108.jpg
header-mask: 0.3
catalog: true
categories:
  - 工具
tags:
  - scrcpy
  - 投屏
---

**scrcpy** 是免费开源的投屏软件，支持将安卓手机屏幕投放在 Windows、macOS、GNU/Linux 上，并可直接借助鼠标在投屏窗口中进行交互和录制。

项目地址：<https://github.com/Genymobile/scrcpy>

Windows 下载：[`scrcpy-win64-v1.24.zip`](https://github.com/Genymobile/scrcpy/releases/download/v1.24/scrcpy-win64-v1.24.zip)

2022.04.29 更新 scrcpy 1.24，国内搬运链接：<https://wwz.lanzouf.com/iezWX03>

电脑端完成配置后，我们还需要在手机端开启 `开发者选项` 及 `USB 调试`。然后使用数据线将手机和电脑连接并允许 USB 调试，即可双击解压得到的 **scrcpy.exe** 文件进行有线投屏了。

## 无线投屏 (WIN 10/11)

- 确保 PC 和手机处于同一局域网中
- 打开 PowerShell (~ cmd)，依次操作并输入代码

```bash
# a.将代码目录定位到 scrcpy 文件夹。
cd D:\Libraries\Desktop\scrcpy-win64-v1.24
# WIN11 在 scrcpy 文件夹中右键「在终端中打开」，将自动定位。
​
# b.在手机端开启「开发者选项」及「USB 调试」，然后使用数据线将手机和电脑连接并允许 USB 调试，开启手机端口
# 如果本行显示 no device 或未启动 adb，需检查「USB 调试」是否开启，或更换数据线。
# 此外，一些手机需选择「文件传输」模式方能使用 adb。
.\adb tcpip 5555
​
# c.拔出手机数据线，开始无线投屏。(192.168.2.15 为手机端的 WIFI 局域网 ip，需更改)
.\adb connect 192.168.2.15:5555
​
# d.启动 scrcpy.exe
.\scrcpy

# 如有报错或延迟较大，可启动低分辨率投屏
.\scrcpy -m 1024
# 连接多个设备，报错提示`failed to get feature set: more than one device/emulator`，则指定连接 tcpip 设备
.\scrcpy -e -m 1024
# 简化操作：合并步骤 c 和 d，保持屏幕常亮，使用 1024 分辨率
.\scrcpy --tcpip=192.168.2.15 -w -m 1024
```

![](http://tc.seoipo.com/20190829093407.png)

### 屏幕录制

打开 PowerShell (~ cmd)，依次操作并输入代码

```bash
# 将代码目录定位到 scrcpy 文件夹
cd D:\Libraries\Desktop\scrcpy-win64-v1.24
​
# 开始录制，录屏文件会以命令指定的文件名自动保存在当前文件夹内。
.\scrcpy -r filename.mp4
​
# 关闭投屏窗口后，自动停止录屏并将视频保存在相应目录
```

### 解决投屏模糊

如果屏幕设置了缩放比例，投屏界面会模糊。右键 **scrcpy.exe**，属性 - 兼容性 - 更改高 DPI 设置 - 勾选替代高 DPI 缩放行为，应用后，该问题可解决。

![](http://tc.seoipo.com/20190829095640.png)

### 常见问题

- 报错检查：下面三步可解决 90% 的错误。

  - 核对有线连接步骤，开启 USB 调试－连接手机与电脑－启动 scrcpy；
  - 检查手机的「本机 IP」是否正确；
  - 更换数据线。

- `ERROR: Exception on thread Thread[main,5,main]` 此项错误多为手机不兼容 scrcpy 默认分辨率设置。解决方位为，按下方修改 scrcpy 启动代码，使用较低的分辨率。

```bash
# 三项设置，任选其一
.\scrcpy -m 1920
.\scrcpy -m 1024
.\scrcpy -m 800
```

更多问题报错，解决方法参考 [官方 FAQ](https://github.com/Genymobile/scrcpy/blob/master/FAQ.md)。
