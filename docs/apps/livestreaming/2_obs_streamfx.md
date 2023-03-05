---
title: 直播入门攻略二 | StreamFX 篇：最强大的 OBS 插件
category:
  - 工具
tag:
  - OBS
  - 直播
order: 2
---

StreamFX 提供了来源镜像、模糊滤镜、着色器滤镜等多种效果，是 OBS 必装的效果插件。本文将介绍 StreamFX 的 28 种滤镜效果。

## 安装 StreamFX

在 [StreamFX 发布页](https://github.com/Xaymar/obs-StreamFX/releases)上按平台选择安装包。StreamFX for OBS 29 处于测试阶段，在升级此插件前，请按照[卸载教程](https://github.com/Xaymar/obs-StreamFX/wiki/Uninstallation)执行旧版清理。

安装成功后，StreamFX 会出现在 OBS 上方的菜单栏上。下文中，我将使用不同滤镜处理样图，并提供对比图。

![](https://tc.seoipo.com/2023-01-07-23-27-34.png "样例原图")

## 来源镜像

[来源镜像](https://github.com/Xaymar/obs-StreamFX/wiki/Source-Mirror)（Source Mirror）是一种来源，而不是滤镜。它可以克隆任何源或场景，并将其应用于当前场景。对来源镜像叠加滤镜和任意效果，都不会对原始来源造成影响。

## 3D 转换

[3D 转换](https://github.com/Xaymar/obs-StreamFX/wiki/Filter-3D-Transform)（3D Transform）可以将 2D 图片的坐标系转换为三维，从而可以自由旋转、移动和缩放，形成类似星球大战中的字幕特效。

![](https://tc.seoipo.com/2023-01-07-23-27-01.png "3D 转换")

## 模糊

[模糊](https://github.com/Xaymar/obs-StreamFX/wiki/Filter-Blur)（Blur Filter）提供五种模糊类型：Box、Box Linear、Gaussian、Gaussian Liner 和 Dual-Filtering。一般来说，建议将类型设置为「Dual Filtering（双重过滤）」，大小为 4，应用蒙版后可以选择模糊区域。与 Gaussian 类型相比，Dual Filtering 生成模糊效果最快，对配置要求也更低。

![](https://tc.seoipo.com/2023-01-08-06-49-05.png "右侧为模糊效果")

![](https://tc.seoipo.com/2023-01-06-02-51-10.png "模糊滤镜设置")

## 动态蒙版

[动态蒙版](https://github.com/Xaymar/obs-StreamFX/wiki/Filter-Dynamic-Mask)（Dynamic Mask）允许叠加任意来源或场景，并使用红色、绿色、蓝色和 alpha 通道建立画面蒙版。下图展示了使用红色通道叠加雨滴来源的效果。

![](https://tc.seoipo.com/2023-01-08-07-05-42.png "动态蒙版")

## SDF 特效

[SDF 特效](https://github.com/Xaymar/obs-StreamFX/wiki/Filter-SDF-Effects)（Shader Signed Distance Field Effects）仅对拥有透明图层的画面有效，比如被移除背景后的摄像头画面。SDF 特效会对外观轮廓进行发光处理，并占用大量显存性能。![[什么是 SDF？](https://jishuin.proginn.com/p/763bfbd5a086)] ![["SDF Effects" filter is undocumented](https://github.com/Xaymar/obs-StreamFX/issues/512)]

![](https://tc.seoipo.com/2023-01-09-18-56-14.webp "SDF 特效-外发光+变形")

## 着色器

着色器滤镜位于 `%ProgramFiles%/obs-studio/data/obs-plugins/StreamFX/examples/shaders/filter`，后缀均为 `.effect`。切换着色器文件后，需点击「刷新选项和参数」。

### 色彩滤镜

- colorize：对画面重新着色，效果与色彩校正滤镜相似。

  ![](https://tc.seoipo.com/2023-01-07-23-11-16.png "colorize")

- posterize：向上下周围放入像素值。

  ![](https://tc.seoipo.com/2023-01-07-22-46-26.png "posterize")

- smaa：将画面的轮廓线条化。

  ![](https://tc.seoipo.com/2023-01-07-22-03-18.png "smaa")

### 位移变换

- bulge_pinch：挤压滤镜，使图像的中心产生凸起或凹下的效果，可生成循环凸凹的动画。

  ![](https://tc.seoipo.com/2023-01-07-23-14-10.png "bulge_pinch 凸起效果")
  ![](https://tc.seoipo.com/2023-01-07-23-14-47.png "bulge_pinch 凹下的效果")

- displace：置换滤镜，可以产生弯曲，碎裂的图像效果。置换滤镜比较特殊的是设置完毕后，还需要选择一个图像文件作为位移图，滤镜根据位移图上的颜色值移动图像像素。

  ![](https://tc.seoipo.com/2023-01-07-23-02-59.png "displace")

- drunk：画面随机晃动

  ![](https://tc.seoipo.com/2023-01-07-22-57-18.gif "drunk")

- swirl：漩涡打旋效果，可调整旋涡位置和大小，并可呈现漩涡的正反转动态效果。

  ![](https://tc.seoipo.com/2023-01-07-22-06-45.png "swirl")

- wave：波浪滤镜是通过坐标变换来模拟水波效果，使图像呈现出水波的扭曲特效。

  ![](https://tc.seoipo.com/2023-01-07-22-12-23.png "wave")

- zigzag：使图像产生同心圆状的波纹效果。

  ![](https://tc.seoipo.com/2023-01-07-22-30-25.png "zigzag")

### 画面遮盖

- pixelation：像素化滤镜，可选择滤镜范围。

  ![](https://tc.seoipo.com/2023-01-07-22-48-41.png "pixelation")

- hexagonize：用六角形状元素重构画面，可调节蜂窝元素的大小。

  ![](https://tc.seoipo.com/2023-01-07-22-50-21.png "hexagonize")

- semiline：百叶窗栅格形滤镜，让画面像被一个关闭中的百叶窗遮盖。

  ![](https://tc.seoipo.com/2023-01-07-22-32-17.png "semiline")

- blur-gaussian：模糊滤镜效果（高斯），对硬件配置要求高。

### 增强滤镜

- vignette：晕影/虚光照，用以增强镜头感，突出拍摄主体，营造画面的意境氛围。

  ![](https://tc.seoipo.com/2023-01-07-22-10-30.png "vignette")

- rounded-rect：圆角矩形渲染

  ![](https://tc.seoipo.com/2023-01-07-22-43-07.png "rounded-rect")

- crt-curvature：将画面放置于 CRT 电视中，可调整画面曲率和四周的光晕颜色。

  ![](https://tc.seoipo.com/2023-01-07-23-09-05.png "crt-curvature")

- crt-scanlines：仿 CRT 扫描线效果。

  ![](https://tc.seoipo.com/2023-01-07-23-06-17.gif "crt-scanlines")

- repeat：将画面复制排列，例图是 3x3 复制画面。

  ![](https://tc.seoipo.com/2023-01-07-22-44-59.png "repeat")

- fxaa：快速近似抗锯齿，是一种「比较廉价」的抗锯齿技术，多用于游戏直播/录制，适用于性能不高的电脑配置。

## N 卡滤镜

本部分的滤镜需要需 NVIDIA 2060 及以上显卡，并安装 [NVIDIA Video Effects & AR SDK Redistributable](https://www.nvidia.com/en-us/geforce/broadcasting/broadcast-sdk/resources/)。这些滤镜效果均可用 NVIDIA Broadcast 实现。

- [画质提升](https://github.com/Xaymar/obs-StreamFX/wiki/Filter-Upscaling)（Upscaling）：提升画质分辨率，可以将老式摄像头提升到 4K 画质。

- [降噪](https://github.com/Xaymar/obs-StreamFX/wiki/Filter-Denoising)（Denoising Filter）：对画面进行降噪。

- [自动帧](https://github.com/Xaymar/obs-StreamFX/wiki/Filter-Auto-Framing)（Auto-Framing）：通过 NVIDIA AR 的自动追踪人脸技术，自动裁剪和放大用户、并且在用户移动时保持帧居中。

- [英伟达背景移除](https://github.com/Xaymar/obs-StreamFX/wiki/Filter-Virtual-Greenscreen)（Virtual Greenscreen）：无需绿幕也能帮你移除人像背景，移除效果略逊色于 NVIDIA Broadcast。样图是用的是漫画，如果是真人画面，移除效果会好很多。

  ![](https://tc.seoipo.com/2023-01-07-23-19-50.png "人像背景移除")
