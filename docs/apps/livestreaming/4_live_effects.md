---
title: 直播入门攻略四 | 特效篇：美颜、变声、多开、虚拟主播
category:
  - 工具
tag:
  - 直播
order: 4
---

虽然 OBS 的功能已经非常强大，但通过第三方软件可以更简单地给我们带来美颜、变声、虚拟主播等特效。

## 美颜

推荐使用 [YY 开播](https://v.yy.com/)来实现直播美颜功能。

打开 YY 开播，调用摄像头摄像，开启美颜功能。然后，在 OBS 中调用 YY 开播，如果有绿幕，可以添加「色度值」滤镜进行视频抠图。一旦配置好，下次启动 OBS 时，软件会自动调用 YY 开播开启美颜，无需重复配置。但是，「美颜 + 直播」对电脑配置的要求较高，如果直播画面出现明显卡顿，建议关闭 YY 开播。

**使用注意**：

- 剧烈运动时，不要开美颜直播，否则容易卡顿。
- 不要开启 YY 直播中除美颜外的功能，如虚拟背景、虚拟形象等，否则直播中的画面背景无法透明化。

## 变声

直播变声可以通过硬件和软件两种方式实现。软件变声器，如 MorphVOX Pro 和神舌，对使用者的语气要求较高。我在淘宝找人进行了声音精调，但效果仍然无法仿真。店家发的语气教程也没有太多参考价值，初学者很难入门。硬件变声器的效果更加糟糕，强烈不推荐。

## 虚拟主播

如果不想录脸直播，可以配合软件使用虚拟形象直播。此类换脸软件会占用较高的 CPU，需要使用三年内的主流配置。

### Snap Camera

[Snap Camera](https://snapcamera.snapchat.com/) 是 SnapChat 的免费增强现实应用。它可以帮助你在电脑直播/录屏时实现挡脸头套、美化滤镜等特效。如果你熟悉 3D 建模，可以使用 Lens Studio 定制属于你自己的变脸特效。但需要注意的是，当你喝水、低头或脸部被遮挡时，脸部特效会失效。

![Snap Camera 效果图](https://img.newzone.top/SnapCamera.gif?imageMogr2/format/webp "Snap Camera 效果图")

如果你无法使用 Snap Camera，可以尝试 FaceRig 和 PrprLive。

### FaceRig

[FaceRig](https://store.steampowered.com/app/274920/FaceRig/)（Steam 已停售）可以通过对五官的动作捕捉，让卡通脸的表情进行同步变化，但不能对头部以下的部分进行捕捉和同步。使用时，需要打开 FaceRig 中的「切换广播」，否则 OBS 窗口会显示为黑屏。

![FaceRig 演示图](https://img.newzone.top/20210329092154.gif?imageMogr2/format/webp "FaceRig 演示图")

注意：百度搜索 FaceRig 的首个结果是**虚假官网**，价格高且无保障，不要在上面进行购买。

### PrprLive

[PrprLive](https://store.steampowered.com/app/1279610/PrprLive/) 是国内的变脸软件，基础版免费，同样在 Steam 销售，付费前先试试基础版。

## 动态素材

为了丰富直播场景，可以使用带绿幕的视频来添加动态特效，或者借助类虚拟主播技术来实现交互。例如 [Bongo Cat Mver](https://d.appinn.com/bongo-cat-mver/)，它能实时同步键盘与鼠标状态，增加直播趣味性。如果你使用的是 Bongo Cat 全键盘同步模型，建议打乱映射规则，以防止隐私泄露。

![直播间的猫咪](https://img.newzone.top/2022-06-30-08-29-40.png "直播间的猫咪")

## 摄像头多开

摄像头默认只能被一个应用调用。借助 [SplitCam](https://splitcam.com/)，你能在摄像头画面上叠加元素，使用镜像、高亮滤镜微调画面，还能让摄像头画面同步给多个应用。

例如，摄像头可以同时用于 OBS 直播和 Capture 录屏，在不同用途上可以叠加不同滤镜和特效，呈现出不同的画面。

**使用流程**：

1. 打开 SplitCam，选择默认摄像头。
2. Snap Camera、Capture 等第三方调用摄像头时，选择「SplitCam Video Driver」。

## 其他应用

### NVIDIA BROADCAST

如果你使用的是 NVIDIA 显卡，强烈推荐安装 [NVIDIA Broadcast](https://www.nvidia.cn/geforce/guides/broadcast-app-setup-guide/)。它利用 AI 的强大功能将标准网络摄像头和麦克风升级为高端智能设备，通过麦克风去噪、房间回声消除、虚拟背景、网络摄像头人像跟踪和视频降噪等 AI 功能，提高直播的视频和音频质量。通过 NVIDIA RTX GPU 上搭载的名为 Tensor Core 的专用 AI 处理器，AI 网络能够实时运行高质量的效果。

### 小葫芦弹幕助手

[小葫芦弹幕助手](https://zs.xiaohulu.com/danmu/)可实时显示网友的互动和打赏，尤其适合游戏直播。但是，由于弹幕答谢、自动定时弹幕、手动弹幕等功能已暂停，不建议新手充值会员。

如果不需要在直播界面中显示弹幕，不要安装小葫芦弹幕插件。安装后，会影响 OBS 窗口捕获功能，无法抓取基于 Electron 的应用界面，从而导致窗口捕捉黑屏。解决方法是删除 `C:\Program Files\obs-studio\obs-plugins\64bit` 目录内的 `CalabashDanmuPlugin.dll`、`CalabashWinCapture.dll`、`ObssDanmuInfo.dll`，重启 OBS 即可恢复，但下次使用弹幕助手时，这三个文件会自动安装，黑屏问题复现，只能重新删除指定文件。

小葫芦直播助手集成了 OBS 和弹幕助手的功能，但为了直播的扩展性，仍然建议从 OBS 入门。
