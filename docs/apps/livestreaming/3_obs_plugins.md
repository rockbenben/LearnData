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

## 多平台直播：multi-rtmp

[multi-rtmp](https://github.com/sorayuki/obs-multi-rtmp) 使得 OBS 支持多地址推流，以为着同时在多个平台上进行直播。

开启多地址推流前，你需要点击控制按钮「开始直播」，然后再点「停止直播」。

## 自动切换场景

[Advanced Scene Switcher](https://obsproject.com/forum/resources/advanced-scene-switcher.395/)：使用「宏」来自动完成各种任务，按条件切换场景、来源。比如，电脑闲置 10 分钟后，让摄像头来源变为不可见。

## Move transition

[Move transition](https://obsproject.com/forum/resources/move-transition.913/)：记录来源的位置变化，生成元素移动的动画效果。比如，视频演讲时，将摄像头位置从屏幕右下移动到中央。

## Transition Table

[Transition Table](https://obsproject.com/forum/resources/transition-table.1174/)：场景切换效果，设定不同场景间的切换规则。

## Source Dock

[Source Dock](https://obsproject.com/forum/resources/source-dock.1317/)：为单独场景或来源建立控制栏，使用小窗口预览场景。

## Source Copy

[Source Copy](https://obsproject.com/forum/resources/source-copy.1261/)：更方便地复制、保存场景设置。

## 其他

- [Scene Collection Manager](https://obsproject.com/forum/resources/scene-collection-manager.1434/)：自动备份场景，防止误操作。
- [Audio Monitor](https://obsproject.com/forum/resources/audio-monitor.1186/)：将来源声音输出给指定设备播放，方便单独调节音量，能让主播与观众听到不同的音频效果。
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

## 弃用插件

以下插件已弃用，仅作记录：

- [Virtual Cam Filter](https://obsproject.com/forum/resources/virtual-cam-filter.1142/)：能让来源单独输出虚拟摄像头，OBS 28 已内置此功能。
- [obs-websocket](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/)：远程控制插件，OBS 28 已内置此功能。
- [Animated captions](https://obsproject.com/forum/resources/animated-captions-with-obs-controller-and-a-preview-function.1407/)：自定义弹幕功能，无漂浮弹幕，适用较少，仅用于 OBS 27。
- [OBS Shaderfilter](https://obsproject.com/forum/threads/shaderfilter-went-away.155555/#post-571174)：文字图片特效滤镜。此插件已被从社区删除，下载使用 [GitHub 备份](https://github.com/Oncorporation/obs-shaderfilter/releases/)，其功能已被 StreamFX 取代。
- [Asynchronous Source Duplication](https://obsproject.com/forum/resources/asynchronous-source-duplication.1483/)：复制来源可以同时展示在多个场景，复制源会有延迟。其功能已被 StreamFX 的来源镜像取代。

## 更多

如果你在上文中没有找到你需要的功能功能，可以访问 [OBS 插件库](https://obsproject.com/forum/resources/categories/obs-studio-plugins.6/)进行搜索。
