---
article: false
title: 录屏应用
icon: fullscreen
order: 4
---

录屏主流应用：

- 相机：Windows 自带应用，录制方便，但不能调节输出选项。
- [FlashBack Express](https://www.flashbackrecorder.com/zh/express/)：能调节帧率，镜像，虚化背景，但免费版只支持 2 小时内的录制。
- [Bandicam](https://www.bandicam.cn/)：录制时能抑制噪音，同步录制扬声器音频，自由调节编码、帧率，但免费版只支持录制 10 分钟且有水印，输出文件名自定义规则极少。
- [Mirillis Action!](https://mirillis.com/zh/products/action.html)：高帧率录制游戏，自动分割视频，自定义叠加元素，但输入帧率不能自由调整，最低只能 15 帧，试用期 30 天。
- [oCam](https://ohsoft.net/eng/ocam/intro.php?cate=1002)：打着免费招牌但有弹窗广告，且录制视频偏大。
- [ShareX](https://getsharex.com/)：免费开源强大的截图软件，也具备录屏功能，能调节编码和帧率，但只能单一录屏或录像。
- [Capture](https://github.com/MathewSachin/Captura/releases/tag/v8.0.0)：免费开源，使用前需手动 [配置 FFmpeg](https://blog.csdn.net/dglx_/article/details/122389601)，自定义叠加元素，但项目已停止更新。推荐录制配置为 `FPS:10, Quality:30%`。
- [OBS](https://obsproject.com/)：免费开源直播软件，也可以录制视频，操作性极强，但我工作时同时在多路推流直播，无法同时录制摄像头。
- [VLC](https://www.videolan.org/vlc/)：免费开源视频软件，能调节输出视频的编码、帧率、格式，但操作麻烦，只能单一录屏或录像，暂停录制容易有 bug。

## FFmpeg

很多录屏、视频处理软件都是基于 FFmpeg，手边没合适工具的话，则使用命令行来进行录制。按 `q` 停止录制。

1. 下载最新版 [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/tag/latest)，Windows 环境选择 `ffmpeg-master-latest-win64-gpl.zip`，GPL 版本包含所有依赖项，然后将其解压到任意文件夹，我这放在 `D:\Backup\Libraries\Documents\ffmpeg`，设定全局变量。
2. 查看可用的视频和音频设备：`ffmpeg -list_devices true -f dshow -i dummy`。^[[ffmpeg 录屏命令](https://blog.csdn.net/m0_60352504/article/details/126762161)]
3. `ffmpeg -f gdigrab -r 20/1001 -draw_mouse 1 -offset_x 0 -offset_y 0 -video_size 2560x1440 -i desktop -s 1280x640 output.mp4`

   - `-f gdigrab` 使用 Fmpeg 内置屏幕录制命令 [gdigrab](https://ffmpeg.org/ffmpeg-all.html#gdigrab) 录制视频，录制对象可为全屏、指定范围和指定程序。
   - `-r 20/1001` 帧率为 0.02，每 50 秒录制 1 帧
   - `-draw_mouse 1` 录制时显示鼠标
   - `-offset_x 0 -offset_y 0 -video_size 2560x1440` 为起始坐标和选定录制范围
   - `-s 1280x720` 是用 scale 方法，让最终视频设为 720p。
   - `-i desktop` 为输入设备，指代桌面。
   - `out.mp4` 为输出视频的名字与格式

4. gdigrab 不支持音频录制，也不支持直接调用摄像头，此时可使用开源的 [screen-capture-recorder-to-video-windows-free](https://github.com/rdp/screen-capture-recorder-to-video-windows-free)。比如用其录制摄像头 `ffmpeg -f dshow -r 20/1001 -i video="SplitCam Video Driver" output.mp4`，此处的 video 名称是在第二步中可用的视频和音频设备列表中找到的。

5. 将摄像头画面录制到桌面画面的上方，则为 `ffmpeg -f gdigrab -r 1 -draw_mouse 1 -offset_x 0 -offset_y 0 -video_size 2560x1440 -i desktop -s 1280x720 -b:v 0 -crf 32 output.mp4 -f dshow -r 1 -i video="SplitCam Video Driver" -filter_complex "overlay=W-w-1:H-h-1" -y`。^[[FFmpeg 中 overlay 滤镜用法 - 水印及画中画](https://www.cnblogs.com/leisure_chn/p/10434209.html)] ^[[ffmpeg 调整缩放裁剪视频的基础知识 (转)](https://blog.csdn.net/guanyijun123/article/details/121270650)]

   - `-c:v libx264` 是用于设置视频编解码器，一般可不填使用默认，`-c:a` 为音频编码。^[[libx265 编码说明](https://ffmpeg.org/ffmpeg-codecs.html#libx265)]
   - `-b:v 0 -crf 32` 是将视频比特率设置为最小，同时使用恒定质量，CRF 的范围可以从 0（最佳质量）到 63（最小文件大小）。
   - `overlay=W-w-1:H-h-1` 指浮层放在右下角，距离边缘 1px。
   - `-y` 遇到选项时，默认执行 yes 命令。

如果画面偏移，尝试勾选 ffmpeg.exe 的高 DPI 缩放替代。

当前错误：

- SplitCam Video Driver 场景尺寸有问题，导致摄像头被切割了。
- V380 FHD Camera 无法识别，下次重启后试试。`ffmpeg -f gdigrab -r 1 -draw_mouse 1 -offset_x 0 -offset_y 0 -video_size 2560x1440 -i desktop -s 1280x720 -b:v 0 -crf 32 output.mp4 -f dshow -r 1 -i video="V380 FHD Camera" -filter_complex "overlay=W-w-1:H-h-1" -y`。

FFmpeg 其他常用命令：

- 进行录屏设置，有多种选择，如 `-vcodec libx264 -crf 30 -pix_fmt yuv420p -preset ultrafast` 或 `-c:v libx265 -x265-params crf=10:psy-rd=1`。
- PixelFormat 默认 yuv420p，Preset 设为 ultrafast，避免报错。^[[x265 的 preset 与编码速度、视频画质以及比特率的关联](https://magiclen.org/x265-preset/)]
- `-filter:v "setpts=0.1*PTS"` 减少视频抽样，但不是视频加速，对于低帧率的视频影响很小。^[[FFmpeg 音视频倍速控制](https://blog.csdn.net/zhying719/article/details/123059209)]
- 命令行工具 https://ffmpeg.guide/

## Capture

Windows 偶尔录屏推荐 Capture。其实 capture 就是 FFmpeg 录屏的 gui 版。虽然版本没更新，但功能不影响。使用前按上方步骤设置全局变量即可。

但每天录屏不适合用 Capture，经常莫名其妙的报错，重启大概率恢复正常。

## Bandicam

Bandicam 支持定时录制计划，但录制的开始和结束都必须由该计划执行，否则录制计划将不会执行。

我使用了 Bandicam 的开机录制功能，因此无法使用定时录制计划，需借助 Windows 的任务计划程序来定时录制停止，操作参考[官方文档](https://www.bandicam.cn/support/tips/timer-recording/)。

Bandicam 录屏时，ManicTime 4 会一直记录为活跃状态，需要使用新版 ManicTime。