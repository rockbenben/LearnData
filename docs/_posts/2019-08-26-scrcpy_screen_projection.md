---
title: scrcpy - 手机无线投屏到电脑
date: 2019-08-26
category:
  - 工具
tag:
  - scrcpy
  - 投屏
star: true
order: -26
---

[scrcpy](https://github.com/Genymobile/scrcpy) 是免费开源的投屏软件，支持将安卓手机屏幕投放在 Windows、macOS、GNU/Linux 上，并可直接借助鼠标在投屏窗口中进行交互和录制。

市面上主流的多屏协同软件都是基于 scrcpy 开发，套层皮，bug 几乎没改，推荐直接使用官方的 scrcpy。

本文以 Window 投屏为例，兼容 Win10 和 Win11。scrcpy 官方下载 [scrcpy-win64-v1.24.zip](https://github.com/Genymobile/scrcpy/releases/download/v1.24/scrcpy-win64-v1.24.zip)，或使用国内搬运链接：<https://wwz.lanzouf.com/iezWX03zx4de>。

## 有线投屏

1. 下载并解压 scrcpy。
2. 手机端开启 `开发者选项` 及 `USB 调试`。开发者选项默认情况下处于隐藏状态，转到`设置 - 关于手机`，然后点按版本号七次，返回上一屏幕，在底部可以找到开发者选项。
3. 用数据线将手机和电脑连接起来，此时手机上弹出授权提示，点击 `允许 USB 调试`。
4. 双击解压得到的 **scrcpy.exe** 文件，就能进行有线投屏了。

## 无线投屏

无线投屏的前提是，**电脑与手机处于同一局域网**。

有线投屏的 1-3 步同样适用于无线投屏，完成后打开 PowerShell (~ cmd)，依次操作并输入代码。

```PowerShell
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

## 屏幕录制

如果想在投屏的同时，对手机屏幕进行录制，则输入按下方命令操作。

```PowerShell
# 将代码目录定位到 scrcpy 文件夹
cd D:\Libraries\Desktop\scrcpy-win64-v1.24
​
# 开始录制，录屏文件会以命令指定的文件名自动保存在当前文件夹内。
.\scrcpy -r filename.mp4
​
# 关闭投屏窗口后，自动停止录屏并将视频保存在相应目录
```

## 常见问题

### 错误检查

遇到报错时，检查下方三种情况，可以解决 90% 的错误。

- 更换数据线；
- 检查手机的「本机 IP」是否正确；
- 核对有线连接步骤，`开启 USB 调试－连接手机与电脑－启动 scrcpy`。

### ERROR: Exception on thread

报错 `ERROR: Exception on thread Thread[main,5,main]`，多为手机不兼容 scrcpy 默认分辨率设置。解决方位为，按下方修改 scrcpy 启动代码，使用较低的分辨率。

```PowerShell
# 三项设置，任选其一
.\scrcpy -m 1920
.\scrcpy -m 1024
.\scrcpy -m 800
```

### 投屏模糊

如果屏幕设置了缩放比例，投屏界面会模糊。右键 **scrcpy.exe**，`属性 - 兼容性 - 更改高 DPI 设置`，然后勾选「替代高 DPI 缩放行为」，应用后投屏恢复正常。

![](http://tc.seoipo.com/20190829095640.png)

更多问题报错的解决方法，查看 [官方 FAQ](https://github.com/Genymobile/scrcpy/blob/master/FAQ.md)。
