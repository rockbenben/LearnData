---
title: 直播入门攻略五 | 平台篇：主流直播平台介绍
category:
  - 工具
tag:
  - 直播
order: 5
---

主流直播平台有淘宝、京东、抖音、快手、视频号、哔哩哔哩、小红书、微博直播、斗鱼、虎牙和 YouTube。接下来，我将逐一介绍如何使用 PC 端的 OBS 在这些平台上进行直播。

## 淘宝直播

1. 下载[淘宝直播客户端](https://market.m.taobao.com/app/mtb/live-portal/download/index.html)，打开后点击「我要开播」，进入直播间界面。

   ![](https://img.newzone.top/2022-06-29-22-23-26.png "淘宝直播设置")

2. 在左侧点击「添加元素」>「摄像头」，选择「OBS-Camera」，即可同步 OBS 直播画面。淘宝直播客户端也是基于 OBS，但不支持推流直播，只能通过虚拟摄像头同步画面。

除了客户端，还可以通过[直播中控台](https://liveplatform.taobao.com/restful/index/home/)来设置淘宝直播间。

## 抖音直播

1. 下载[直播伴侣电脑端](https://www.douyin.com/falcon/webcast_openpc/pages/streamingtool_download/index.html)，它可以适配西瓜视频、抖音、抖音火山版的直播。
2. 在左侧点击「添加元素」>「采集」，选择「OBS-Camera」(摄像头较多时，可下滑选择)，设置采集自定义音频设备为「OBS-Audio」，声音改为单声道。

   ![](https://img.newzone.top/2022-06-29-23-59-02.png "抖音直播设置")

以上为抖音新手的电脑直播步骤，如果你的抖音粉丝在一万以上，可以使用 [OBS 模式推流](http://streamingtool.douyin.com/docs/guide/96319/)。

## 快手直播

快手直播无需 PC 客户端，可在[快手云直播](https://studio.kuaishou.com/profile)页面配置直播间，支持 OBS 模式推流直播。若直播断流超过 2 分钟或直播超过 7 天，则会自动下播。

## 视频号直播

要使用电脑直播视频号，需要先完成[视频号认证](https://channels.weixin.qq.com/platform/live/apply)。

视频号认证最重要的一环是**有效关注数 1000 人以上**，可疑和外挂用户都不包含在有效人数内。达到 1000 有效粉丝后，就可以在视频号助手网页端发起直播推流了。

## B 站直播

哔哩哔哩可以在[直播姬客户端](https://link.bilibili.com/p/eden/download#/web)或[B 站直播间网页端](https://link.bilibili.com/p/center/index#/my-room/start-live)上进行在线直播。直播封面必须包含图像，不支持纯文本封面。

如果你主做 B 站直播，可以试试哔哩哔哩直播机器人[神奇弹幕](https://github.com/iwxyi/Bilibili-MagicalDanmaku)，它集成了弹幕姬、答谢姬、点歌姬、回复姬和工作流 (workflow)，支持弹幕聊天、观众互动、自动点歌、数据统计、私信处理等功能。这个应用看起来很有趣，我还没有使用过。

## 知乎直播

在[知乎推流直播](https://www.zhihu.com/creator/streaming/push)页面开启直播后，就可以使用知乎的电脑直播。

知乎直播注意：

- 推流直播不能与第三方连接谈话；手机直播不支持绿幕抠图。
- 当你在电脑直播时，用手机进入知乎客户端，会提示「是否继续直播」，选择「继续」可进入直播界面与观众互动，选「忽略」则停止直播。
- 如果直播时间超过一个月，小葫芦直播码会失效，无法继续使用小葫芦直播助手和弹幕助手。

## 小红书直播

小红书使用[直播助手](http://www.xiaohongshu.com/zhibo/robs)来设置推流，可以查看[官方文档](ttps://fe-video-qc.xhscdn.com/fe-platform/f03ae58e50e6d53580fa16a58e9dffbbbabbb5f0.pdf) 了解开播步骤。

当我登录直播助手时，提示「暂无直播权限，请联系运营及客服开通」，但手机却可以直播，这说明提示中的直播权限专指电脑端直播。因此，我在应用中提交了问题，但一直未收到客服回复。

## 微博直播

微博直播需先完成实名认证，然后在[微博管理中心](https://weibo.com/manage/frame?furl=https%3A%2F%2Fweibo.com%2Fl%2Fwblive%2Fadmin%2Fhome%2Fauthentication)创建直播。详细的开播步骤，可以参考官方的[微博 PC 开播教程](https://weibo.com/l/wblive/act/k2mw80kz3kw0)。

## Youtube 直播

如果您在过去 90 天内没有进行 YouTube 直播，平台会要求验证您的频道。首次启用直播功能可能需要最长等待 24 小时。

1. 打开 [YouTube 直播控制室](http://youtube.com/livestreaming)。
2. 点击直播标签页或为新直播安排时间。
3. 从直播控制室复制直播网址和直播码，然后将其粘贴到编码器中。
