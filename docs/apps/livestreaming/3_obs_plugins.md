---
title: 直播入门攻略三 | 插件篇：OBS 进阶插件
category:
  - 工具
tag:
  - OBS
  - 直播
order: 3
---

OBS 与其他直播/录制应用最大的区别在于 OBS 社区，它给 OBS 带来了强大的扩展性。下文中我会介绍除 StreamFX 外的 15 款流行插件。（本文未完成，待填充）

## 插件安装与卸载

OBS 插件的安装模式有 Install（注册配置）和 Protable（便携）两种。便携模式的插件配置可以复制到其他电脑上使用。

若要卸载 Windows 下的 OBS 便携模式插件，可以进入 `%ProgramFiles%\obs-studio\data\obs-plugins` 和 `%ProgramFiles%\obs-studio\obs-plugins\64bit`，搜索插件名，然后删除相关文件。

## Move

[Move](https://obsproject.com/forum/resources/move.913/)：原名 Move transition，用来记录来源的位置和尺寸变化，生成元素移动的动画效果。比如，视频演讲时，将摄像头位置从屏幕中央移动到右下，并放大摄像头。

## Transition Table

[Transition Table](https://obsproject.com/forum/resources/transition-table.1174/)：转场特效，设定不同场景间的动态切换效果。如果没有使用本场景，不同插件切换是特别生硬的直切，但现在可以使用延时、从左到右等切换滤镜。

## 自动切换场景

[Advanced Scene Switcher](https://obsproject.com/forum/resources/advanced-scene-switcher.395/)：使用「宏」来自动完成各种任务，按条件切换场景、来源。比如，电脑闲置 10 分钟后，让摄像头来源变为不可见。

## Scene as Transition

[Scene as Transition](https://obsproject.com/forum/resources/scene-as-transition.1704/)：使用场景作为过渡。

## Source Clone

[Source Clone](https://obsproject.com/forum/resources/source-clone.1632/)：将源添加到 OBS，以便您克隆源以允许与原始源不同的过滤器。

## Aitum Vertical

[Aitum Vertical](https://obsproject.com/forum/resources/aitum-vertical.1715/)：将直播垂直化。

## 多平台直播

[multi-rtmp](https://github.com/sorayuki/obs-multi-rtmp) 使得 OBS 支持多地址推流，以为着同时在多个平台上进行直播。

开启多地址推流前，你需要点击控制按钮「开始直播」，然后再点「停止直播」。

## StreamUP OBS Plugin

[StreamUP OBS Plugin](https://streamup.tips/plugin)：用于检查 OBS 插件的更新。该插件的注册和下载过程较为繁琐，需进行两次注册。升级后的下载包是绿色版，你只需将其解压至默认路径 `C:\Program Files\obs-studio` 即可。

## 滤镜插件

## Composite Blur

[Composite Blur](https://obsproject.com/forum/resources/composite-blur.1780/)：全面的模糊插件，比 streamfx 更加强大。推荐模糊方式选择「Dual Filtering（双重过滤）」或是「Pixelate（像素化）」。

## Pixel Art

[Pixel Art](https://obsproject.com/forum/resources/pixel-art.1789/)：为来源添加像素化的滤镜，非常适合复古风格。

## Gradient Source

[Gradient Source](https://obsproject.com/forum/resources/gradient-source.1172/)：渐变色来源蒙版。

## 声音滤镜

声音滤镜通过软件方法使声音更专业。建议配置如下：^[[Make Any Mic Sound Expensive In OBS | Mic Settings & Filters (2023)](https://www.youtube.com/watch?v=G1VzeT9t24Y)]

- 增益（Gain）：如果麦克风音量已最大但讲话声未达黄色区末端，则用增益加强效果。
- 噪音抑制（Noise Suppression）：优先选择 N 卡效果，如无，使用内置效果。
- 扩展效果（Expander）：降低低音量部分的音量，用于减少噪声或其他不希望的低音量声音。
- 压缩器（Compressor）：降低高音量部分的音量，有助于控制音频中的峰值，使整体声音更加均衡和一致。
- 限幅（Limiter）：限制音频信号的最大音量，确保它不会超过设定的阈值。这通常用于防止音频削峰或失真，尤其是在音量非常高的情况下。默认阈值是 -6dB。
- [Own3d Pro plugin for OBS](https://api.own3d.pro/v1/downloads/obs-plugin/windows/latest?qt_version=6)：调整声音的高中低频，改变音色。
- [Audio Monitor](https://obsproject.com/forum/resources/audio-monitor.1186/)：将来源声音输出给指定设备播放，方便单独调节音量，能让主播与观众听到不同的音频效果。

## 其他

- [Scene Collection Manager](https://obsproject.com/forum/resources/scene-collection-manager.1434/)：自动备份场景，防止误操作。
- [Scene Tree](https://obsproject.com/forum/resources/scene-tree-folder-plugin-for-obs-studio.1500/)：将场景组织到文件夹结构中。
- [Source Copy](https://obsproject.com/forum/resources/source-copy.1261/)：更方便地复制、保存场景设置。
- [Source Dock](https://obsproject.com/forum/resources/source-dock.1317/)：为单独场景或来源建立控制栏，使用小窗口预览场景。
- [Downstream Keyer](https://obsproject.com/forum/resources/downstream-keyer.1254/)：切换场景时，置顶指定场景。

- [Multi Source Effect](https://github.com/norihiro/obs-multisource-effect)：滤镜效果
- [Teleport](https://github.com/fzwoch/obs-teleport)：NDI 替代品，局域网设备推流到直播。
- [spectralizer](https://github.com/univrsal/spectralizer)：音频频谱，用滤镜「图像掩码」的「混合图层」给频谱遮罩滤镜。
- [NDI](https://obsproject.com/forum/resources/obs-ndi-newtek-ndi%E2%84%A2-integration-into-obs-studio.528/): 局域网视频无线传输技术 NDI 插件。
- [scrab](https://obsproject.com/forum/resources/scrab.845/)：屏幕截图。添加了一个可配置的热键快速选择一个屏幕区域，并添加它作为一个图像源到当前场景。有人反馈 OBS 28 后有 bug，暂未修复。
- [Lower thirds in HTML/CSS](https://obsproject.com/forum/resources/lower-thirds-in-html-css.928/)：文字运动特效，适合展示 logo 和标题。
- [Input Overlay](https://obsproject.com/forum/resources/input-overlay.552/)：同步显示键盘、鼠标和游戏板上的输入。

## 美化插件

第三方的直播美化插件提供了时钟、榜单、弹幕、游戏等互动来源，用于美化直播间，新手可参考使用。美化插件免费版一般足够用了，比如 [咩播](https://yun.miebo.cn/)、[智播](http://zbmate.com/)。

如果你使用的是 NVIDIA 显卡，推荐安装 [NVIDIA Broadcast](https://www.nvidia.com/en-us/geforce/broadcasting/broadcast-sdk/resources/)。你还需要分别下载 Audio Effects 和 Video Effects。这样可以确保在 OBS 中直接使用各种效果滤镜，比如降噪和去背景等功能。此外，在 Windows 设置的「系统 > 显示 > 显卡 > 默认图形设置」中，务必关闭「硬件加速 GPU 计划」选项。如果不关闭，OBS 将无法显示 NVIDIA 的音效滤镜。原因是硬件加速 GPU 和 NVIDIA 音效滤镜同时启用可能会导致 OBS 崩溃。

## 弃用插件

以下插件已弃用，仅作记录：

- [Virtual Cam Filter](https://obsproject.com/forum/resources/virtual-cam-filter.1142/)：能让来源单独输出虚拟摄像头，OBS 28 已内置此功能。
- [obs-websocket](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/)：远程控制插件，OBS 28 已内置此功能。
- [Animated captions](https://obsproject.com/forum/resources/animated-captions-with-obs-controller-and-a-preview-function.1407/)：自定义弹幕功能，无漂浮弹幕，适用较少，仅用于 OBS 27。
- [OBS Shaderfilter](https://obsproject.com/forum/threads/shaderfilter-went-away.155555/#post-571174)：文字图片特效滤镜。此插件已被从社区删除，下载使用 [GitHub 备份](https://github.com/Oncorporation/obs-shaderfilter/releases/)，其功能已被 StreamFX 取代。
- [Asynchronous Source Duplication](https://obsproject.com/forum/resources/asynchronous-source-duplication.1483/)：复制来源可以同时展示在多个场景，复制源会有延迟。其功能已被 StreamFX 的来源镜像取代。

## 更多

如果你在上文中没有找到你需要的功能功能，可以访问 [OBS 插件库](https://obsproject.com/forum/resources/categories/obs-studio-plugins.6/)进行搜索。
