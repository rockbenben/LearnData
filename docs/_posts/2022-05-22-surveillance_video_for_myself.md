---
title: 疫情封控两个月后，我对自己开始 24 小时的自我监控录像
date: 2022-05-22
category:
  - 头脑驿站
tag:
  - 录屏
  - 自我管理
order: -46
---

疫情封控两个月后，人变得愈发懒散，每天的成果只有吃饭睡觉。为了摆脱这种状态，我决定在书房对自己进行 24 小时的监控录像，督促自己提升效率。

自我监控方案有两点需求：首先，软硬件必须在本地操作、储存，绝对不能联网；其次工作中途经常离开书房，回放时能跳过无人片段。

**寻找监控工具**：

- 视频剪辑软件：自动识别长时间静止的画面，删除或加速相关视频帧。
- 录屏软件：带移动侦测功能，检测到人则开启录像，无人则自动暂停，无需联网就能使用。
- 播放软件：自动跳过超过 10s 的静止画面。
- 直连电脑的摄像机：不联网，不用 SD 卡将视频直接存储在电脑上。虽然萤石、小米有移动侦测功能，但视频需上传云端，风险过大。

找了许久，始终找不到合适的工具。监控摄像头和行车记录仪能跳过静止画面，但这类工具都不能直连电脑，且限制很多，不方便后期回放剪辑。

最后靠着少数派群友 @chen 的推荐，尝试 DVR-Scan，补完了自我监控方案。

## 自我监控方案

1. **晨间唤醒**：起床后，用手机单独录一句话。这句话在前一天准备好，包括日期、当日目标，也可以引入美好的回忆、憧憬的未来、向往的地方、喜欢的艺术 (音乐、名画、诗句)。
   晨间唤醒参考了[积极心理学](https://www.xuetangx.com/course/THU07111001088/)，收集积极情绪材料，给自己创造美好的情绪。
2. **录制视频**：用 VLC 和摄像头录制视频，按计划开始工作学习。
3. **过滤视频**：晚上 11 点，DVR-Scan 过滤静止视频片段，记录录制时长和处理后的视频时长。
   ![视频时长记录表格](https://tc.seoipo.com/2022-05-22-10-05-04.png)
4. **视频回放**：100x 倍速回放工作视频，检查工作效率和成果。如果需要听声音，则使用 PotPlayer 播放降噪，剪辑出要使用的片段。原始视频和过滤视频保存一月，定期清理。
5. **当日回顾**：记录 3 件好事，总结好事发生的原因。
   这可以是日常生活中常见的小事，比如读到一本好书、吃到一道好菜、听到一个亲友的好消息、在公交车上有人为你让座、孩子今天会走路了，等等。

接下来，将详述自我监控方案的准备、流程及遇到的问题。

## 监控准备

自我监控方案的硬件需要摄像头、电脑，软件则使用 VLC、DVR-Scan、PotPlayer。

摄像头预算一百左右就行，之前买过上千的罗技摄像头，画质并未有明显区别。

收音设备使用的是摄像头自带的麦克风。之所以不用桌面的声卡外接话筒，是因为容易有回音，杂音更重。

## 录制视频：VLC

摄像头录像方案较少，大多是录屏软件的附带功能，我尝试了以下 9 种：

- 相机：Windows 自带应用，录制方便，但输出选项少，限制多。
- [FlashBack Express](https://www.flashbackrecorder.com/zh/express/)：能调节帧率，镜像，虚化背景，但免费版只支持 2 小时内的录制。
- [Bandicam](https://www.bandicam.cn/)：录制时能降噪，内录扬声器音频，自由调节编码、帧率，但免费版只支持录制 10 分钟且有水印，输出文件名自定义规则极少。Bandicam 支持定时录制计划，但录制的开始和结束都必须由该计划执行，否则录制计划将不会执行。比如使用 Bandicam 的开机录制后，定时录制计划就会失效，需借助 Windows 的任务计划程序来定时录制停止，操作参考 [Bandicam 官方文档](https://www.bandicam.cn/support/tips/timer-recording/)。
- [Mirillis Action!](https://mirillis.com/zh/products/action.html)：高帧率录制游戏，自动分割视频，自定义叠加元素，但输入帧率不能自由调整，最低只能 15 帧，试用期 30 天。
- [oCam](https://ohsoft.net/eng/ocam/intro.php?cate=1002)：打着免费招牌但有弹窗广告，且录制视频偏大。
- [ShareX](https://getsharex.com/)：免费开源强大的截图软件，也具备录屏功能，能调节编码和帧率，但只能单一录屏或录像。
- [Capture](https://github.com/MathewSachin/Captura/releases/tag/v8.0.0)：免费开源，使用前需手动 [配置 FFmpeg](https://blog.csdn.net/dglx_/article/details/122389601)，自定义叠加元素，但项目已停止更新。测试时，Capture 经常莫名其妙的报错，重启大概率恢复正常，只能偶尔用用，不能用于工作环境。
- [OBS](https://obsproject.com/)：免费开源直播软件，也可以录制视频，操作性极强，但输出限制多，也难以在直播的同时进行桌面录制。
- [VLC](https://www.videolan.org/vlc/)：免费开源视频软件，能调节输出视频的编码、帧率、格式，但操作麻烦，只能单一录屏或录像，暂停录制容易有 bug。

Bandicam、Mirillis Action！录制时，电脑无法进入睡眠，ManicTime 也不能检测到你的离开状态。

监控方案的单次录制时间在 12 小时以上，需要调低帧率以控制视频大小，选择了 VLC 作为录制软件。如果你要同时录屏和录像，可以使用 OBS、Capture 或 oCam。

**录制过程：**

1. 打开 VLC 的 Media -> Open Capture Device，将 `Video device name` 和 `Audio device name` 选为摄像头，然后点击底部 `Play` 按钮旁边的下拉菜单，选中 `Convert`。

   ![](https://tc.seoipo.com/2022-05-21-22-09-08.png)

2. Settings -> Profile 中选择视频输出方案，推荐选择 `Video - H.264 + MP3 (MP4)`，接着点击旁边的扳手按钮，修改输出方案。

   ![](https://tc.seoipo.com/2022-05-21-22-11-09.png)

3. Profile edition -> Video codec -> Encoding parameters，依次调整视频的编码、比特率、画面质量、帧率，编码建议使用 H-264，码率推荐 10 fps。

   ![](https://tc.seoipo.com/2022-05-21-22-12-32.png)

4. Destination file 设置输出路径和视频名称。

## 剪辑视频：DVR-Scan

过滤视频的静态画面，是监控方案中的核心环节。开始我考虑用 QuickCut 过滤，但它是通过声音来判断视频是否静止（与飞书妙记的「跳过空白片段」原理类似），监控视频中大部分时间是没声音的，不适合用 QuickCut 剪辑。

群里 @chen 推荐了 [DVR-Scan](https://github.com/Breakthrough/DVR-Scan)，能从画面判断是否需要过滤。

> DVR-Scan 是一个跨平台命令行（CLI）应用程序，可以自动检测视频文件中的运动事件（例如安全摄像头镜头）。除了定位每个运动事件的时间和持续时间外，DVR 扫描还将每个运动事件的片段保存到一个新的单独的视频剪辑中。DVR-Scan 免费开源软件（FOSS）是用 Python 编写的，并且基于 Numpy 和 OpenCV，而且可以扩展和黑客入侵。

DVR-Scan 操作很简单，视频目录内右键单击「在终端打开」，执行默认输出命令即可得到过滤后的视频。12 小时的视频，处理用时二十分钟，会占用大量 CPU。有点要注意，DVR-Scan 有个限制，只能导出为`.avi`视频。

```bash
#默认输出命令，不含音频
dvr-scan -i some_video.mp4 -o some_video_motion_only.avi

#将含音轨的输出视频放于 output 文件夹，但输出会被分为多个视频
dvr-scan -i some_video.mp4 -d output -m ffmpeg
#如果只想获取单个输出视频，则使用视频合并命令。（默认终端为 Windows cmd(管理员)，其他终端查看 https://trac.ffmpeg.org/wiki/Concatenate#demuxer）
dvr-scan -i some_video.mp4 -d output -m ffmpeg && (for %i in (output/*.mp4) do @echo file '%i') > output/mylist.txt && ffmpeg -f concat -i output/mylist.txt -c copy output_combine.mp4 -y

# -t 是 DVR-Scan 的动作检测敏感度，默认为 0.15，越低则越敏感
#下列命令将敏感度调为 0.5，最大程度的删除静止画面帧
dvr-scan -t 0.5 -i some_video.mp4 -o some_video_motion_only.avi

# -b 是 DVR-Scan 的算法，默认为 MOG，追求速度则使用 CNT
#最快速度的删除静止画面帧，但会牺牲准确率，有更多的静止画面帧被留存
dvr-scan -b CNT -i some_video.mp4 -o some_video_motion_only.avi
```

DVR-Scan 不同命令的测试效果如下：

| 命令          | 耗时（s） | 输出视频（mins） |
| ------------- | --------- | ---------------- |
| 默认          | 124       | 07:15            |
| -t 0.5        | 125       | 06:52            |
| -b CNT        | 107       | 10:05            |
| -t 0.5 -b CNT | 104       | 08:39            |

另外，DVR-Scan 可以使用 `-roi` 命令，指定监测区域，只对该区域的动作进行监测。

DVR-Scan 进阶命令查看[官方文档](https://dvr-scan.readthedocs.io/en/latest/guide/examples/)。

## 播放降噪：PotPlayer

桌面录音容易有较大的噪音，重新处理的话需要大量时间，因此我将降噪环节放在视频播放器中处理。

- **开启降噪**：风噪等一系列噪声会消失，但是带过降噪耳机的都知道，开启降噪会有一种很糊的感觉，这时视频的声音就会变得无比无比的糊。
- **开启语音增强**：语音增强会在很糊的声音中明显听到人的声音，但是还是略显不足，还是有点杂，而且声音特别大。
- **关闭规格化**：这时声音就不会那么大，也不会过于杂了，这时的声音已经相比处理前干净多了。
- **开启超高音**：打开均衡器，选择「超高音」方案。

  ![PotPlayer 播放降噪设置](https://tc.seoipo.com/2022-05-19-10-47-18.png)

设置完成后，播放时 PotPlayer 会自动对视频进行降噪，无需额外花时间处理视频。

## 总结

自我监控分为 5 步，「晨间唤醒：计划」>「录制视频：VLC」>「过滤视频：DVR-Scan」>「视频回放：PotPlayer」>「当日回顾」。搭配脚本，每天开机自动开始录制视频，然后在晚上九点停止录制，并过滤当天视频的静止帧。

经过一段时间的自我监控，我对自己的活动有了更清晰的认知，从而更方便地进行行为控制和修正。此外，由于视频存储在本地，不向第三方开放，所以可以安心地做自己。在每日回顾中，勇敢地面对自己的缺点和错误，积极地进行调整。

**参考资料：**

- [How can I detect motion in a long, mostly dull video?](https://askubuntu.com/questions/422341/how-can-i-detect-motion-in-a-long-mostly-dull-video/423028#423028)
- [如何设置 potplayer 播放器把人声凸显出来并降噪？](https://blog.csdn.net/NeiHan2020/article/details/118368739)
- [网课：积极心理学](https://www.xuetangx.com/course/THU07111001088/)
