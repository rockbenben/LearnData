# 录屏应用

- 相机：Windows 自带应用，录制方便，但不能调节输出选项。
- [FlashBack Express](https://www.flashbackrecorder.com/zh/express/)：能调节帧率，镜像，虚化背景，但免费版只支持 2 小时内的录制。
- [Bandicam](https://www.bandicam.cn/)：录制时能抑制噪音，同步录制扬声器音频，自由调节编码、帧率，但免费版只支持录制 10 分钟且有水印，输出文件名自定义规则极少。
- [Mirillis Action!](https://mirillis.com/zh/products/action.html)：高帧率录制游戏，自动分割视频，自定义叠加元素，但输入帧率不能自由调整，最低只能 15 帧，试用期 30 天。
- [oCam](https://ohsoft.net/eng/ocam/intro.php?cate=1002)：打着免费招牌但有弹窗广告，且录制视频偏大。
- [ShareX](https://getsharex.com/)：免费开源强大的截图软件，也具备录屏功能，能调节编码和帧率，但只能单一录屏或录像。
- [Capture](https://github.com/MathewSachin/Captura/releases/tag/v8.0.0)：免费开源，使用前需手动[配置 ffmpeg](https://blog.csdn.net/dglx_/article/details/122389601)，自定义叠加元素，但项目已停止更新。推荐录制配置为`FPS:10, Quality:30%`。
- [OBS](https://obsproject.com/)：免费开源直播软件，也可以录制视频，操作性极强，但我工作时同时在多路推流直播，无法同时录制摄像头。
- [VLC](https://www.videolan.org/vlc/)：免费开源视频软件，能调节输出视频的编码、帧率、格式，几乎全能，相同环节下输出视频最小，但操作麻烦，只能单一录屏或录像，暂停录制容易有 bug。

录屏最稳定的是 VLC，但它无法同时录制屏幕和摄像头，需要一个虚拟摄像头将主桌面和摄像头放在同一画面，然后进行转录。

## Capture

Windows 偶尔录屏推荐 Capture。其实 capture 就是 ffmpeg 录屏的 gui 版。虽然版本没更新，但功能不影响。

但每天录屏不适合用 Capture，经常莫名其妙的报错，重启大概率恢复正常。

Capture 配置：

1. 下载最新版 [ffmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/tag/latest)，Windows 环境选择`ffmpeg-master-latest-win64-gpl.zip`，解压到`D:\Backup\Libraries\Documents\ffmpeg`，设定全局变量。GPL 版本包含所有依赖项。
2. 进行录屏设置，有多种选择，如`-vcodec libx264 -crf 30 -pix_fmt yuv420p -preset ultrafast`或`-c:v libx265 -x265-params crf=10:psy-rd=1`。
  `-vcodec`、`-codec:v`和`-c:v`，含义相同，都是用于设置视频编解码器。^[[libx265 编码说明](https://ffmpeg.org/ffmpeg-codecs.html#libx265)]
3. PixelFormat 默认 yuv420p，Preset 设为 ultrafast，避免报错。^[[x265 的 preset 与编码速度、视频画质以及比特率的关联](https://magiclen.org/x265-preset/)]
