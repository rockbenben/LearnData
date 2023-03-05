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

[scrcpy](https://github.com/Genymobile/scrcpy) 是一款免费开源的投屏软件，可以将安卓手机屏幕投放在 Windows、macOS、GNU/Linux 上，并可以直接使用鼠标在投屏窗口中进行交互和录制。

市面上主流的多屏协同软件大多都是基于 scrcpy 开发的套壳产品，而且 bug 也没有得到修复，因此建议直接使用官方的 scrcpy。

本文以 Windows 投屏为例，可以前往官方站点下载 [scrcpy-win64-v1.25.zip](https://github.com/Genymobile/scrcpy/releases/download/v1.25/scrcpy-win64-v1.25.zip)，或者使用[国内搬运链接](https://wwva.lanzoue.com/iHnRJ0jm0uhe)。

## 有线投屏

1. 下载并解压 scrcpy。
2. 手机端开启 `开发者选项` 和 `USB 调试`。开发者选项默认处于隐藏状态，手机上选择「设置」>「关于手机」，然后点击版本号七次，返回上一屏幕，即可在底部找到开发者选项。
3. 使用数据线将手机和电脑连接，此时手机上会弹出授权提示，点击「允许 USB 调试」。
4. 双击解压得到的 scrcpy.exe 文件，即可进行有线投屏。

## 无线投屏

无线投屏的前提是，电脑和手机处于**同一局域网**中。

有线投屏中的前三步也适用于无线投屏，完成这些步骤后，打开 PowerShell（~ cmd），依次输入操作命令。

```shell
# a.将命令目录切换到 scrcpy 文件夹。如果使用的是 Windows 11，在 scrcpy 文件夹中右键点击「在终端中打开」，会自动切换到当前路径。
cd D:\Libraries\Desktop\scrcpy-win64-v1.25
​
# b.在手机端开启「开发者选项」和「USB 调试」，然后使用数据线将手机和电脑连接，并允许 USB 调试，开启手机端口。
.\adb tcpip 5555

# 如果本行显示 no device 或未启动 adb，需检查「USB 调试」是否开启，或更换数据线。
# 此外，一些手机需选择「文件传输」模式方能使用 adb。
​
# c.拔出手机数据线，开始无线投屏。(192.168.2.20 为手机端的 WIFI 局域网 ip，需更改)
.\adb connect 192.168.2.20:5555
​
# d.启动 scrcpy.exe
.\scrcpy

# 如果出现错误或延迟较大，可以指定低分辨率投屏。
.\scrcpy -m 1024
# 连接多个设备会出现报错 `failed to get feature set: more than one device/emulator`，此时需要指定连接 tcpip 设备。
.\scrcpy -e -m 1024
# 简化操作：合并步骤 c 和 d，保持屏幕常亮，指定 1024 分辨率。
.\scrcpy --tcpip=192.168.2.20 -w -m 1024
```

![](https://tc.seoipo.com/20190829093407.png "scrcpy 命令行截图")

## 屏幕录制

如果想在投屏的同时，对手机屏幕进行录制，可以输入下方命令进行操作。

```shell
# 将命令目录切换到 scrcpy 文件夹。
cd D:\Libraries\Desktop\scrcpy-win64-v1.25
​
# 开始录制，录屏文件会自动保存在当前文件夹内，文件名为指定的文件名。
.\scrcpy -r filename.mp4
​
# 关闭投屏窗口后，自动停止录屏并将视频保存在相应的目录中。
```

## 常见问题

### 错误检查

遇到报错时，检查下列三种情况，可以解决 90% 的错误：

- 更换数据线；
- 检查手机的「本机 IP」是否正确；
- 核对有线连接步骤，选择「开启 USB 调试」>「连接手机与电脑」>「启动 scrcpy」。

### ERROR: Exception on thread

报错 `ERROR: Exception on thread Thread[main,5,main]`，通常是因为手机不兼容 scrcpy 默认的分辨率设置。解决方法是，修改 scrcpy 启动代码，使用较低的分辨率。

```shell
# 三个分辨率设置，任选其一。
.\scrcpy -m 1920
.\scrcpy -m 1024
.\scrcpy -m 800
```

### 华为不能投屏

华为/荣耀设备切换为无线投屏时，拔掉数据线，系统会关闭 USB 调试，导致投屏终止。

解决方案来自 @残荷听雨：「进工程模式，把 usb 调成开发模式，先打开“在充电模式下允许 ADB 调试”，再打开 usb 调试。这样操作后，再拔掉数据线，它就不会自动关闭 usb 调试了。副作用是，“在充电模式下允许 ADB 调试”会自动常开，在网吧等公共区域，仅用数据线充电时就需要手动关掉 usb 调试，防止被黑。」

### 投屏模糊

如果屏幕设置了缩放比例，投屏界面会变得模糊。右键单击 scrcpy.exe，点击「属性」>「兼容性」>「更改高 DPI 设置」，然后勾选「替代高 DPI 缩放行为」，应用该设置后投屏恢复正常。

![](https://tc.seoipo.com/20190829095640.png "解决 scrcpy 投屏模糊")

更多问题报错的解决方法，可以查看 [scrcpy FAQ](https://github.com/Genymobile/scrcpy/blob/master/FAQ.md)。
