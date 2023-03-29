---
title: 客厅、书房、卧室，任意收看 IPTV 直播！（上海电信）
date: 2018-06-19
category:
  - 网络
tag:
  - IPTV
order: -21
---

**回放服务器已屏蔽公网 IP 的访问，仅限 vlan85 的 B 平面专网 IP 访问，本文章已失效！**

参考：[电信公网疑似已屏蔽回放源 IP · Issue #28](https://github.com/lucifersun/China-Telecom-ShangHai-IPTV-list/issues/28)

---

电视 + 机顶盒 + IPTV 盒，家里的遥控器越来越多。为了摆脱众多的遥控器，开始使用 lucifersun 的直播源（原理上**仅限上海电信**）。

lucifersun 抓取了[上海电信 IPTV 视频回放源](https://github.com/lucifersun/China-Telecom-ShangHai-IPTV-list)。借助直播源地址，我们可以在 PC、电视、手机上直接看电视直播。

> 这个播放列表使用 IPTV 的频道 回放 功能。IPTV 直播用的是专网组播，无法直接通过 Internet 播放。
> 因为不是所有频道都支持回放，所以这个列表里的频道 必然少于 IPTV 的直播频道。
> 还有部分频道的回放地址播放错误，所以也没有收录。

lucifersun 的 IPTV 直播源比电视直播**慢 15 秒**，对普通用户来说已经足够了。

## 提取直播源列表

进入[上海电信 IPTV 视频流地址](https://htmlpreview.github.io/?https://raw.githubusercontent.com/lucifersun/China-Telecom-ShangHai-IPTV-list/master/IPTV.html)。点击「生成 txt 内容」，然后复制下方的**视频直播源列表**，保存为 tv.txt，并将 tv.txt 文本转为 **ANSI 编码**（避免节目名会出现中文乱码）。

![](https://tc.seoipo.com/20180619170944.png?imageMogr2/format/webp)

## 电视盒子直播

1. 电视盒子上安装 APP-「超级直播」。

2. 进入「超级直播」应用后，点击「设置」-「二维码扫一扫 开启更多功能」，调出隐藏管理地址 `192.168.2.203:9188`。

3. 用与电视盒子位于同一局域网的电脑或手机访问**隐藏管理地址**，点击「我」-「上次自定义 (tv.txt)」-「上传」，上传刚保存好的 tv.txt。

   ![](https://tc.seoipo.com/20180619164137.png?imageMogr2/format/webp)

4. 将「超级直播」的播放列表切换到**自定义**，直接观看导入的电视节目。

## PC 端电视直播

1. PC 端安排 [Potplayer](http://www.potplayer.org/)。

2. 复制节目 rtsp 直播源链接，打开 Potplayer , 右键单击主界面 >「打开」>「打开剪贴板」。

   ![](https://tc.seoipo.com/20180619140722.png?imageMogr2/format/webp)

这样就可以在 PC 端看电视了。

参考资料：

- [丢了你的 iptv 吧！上海电信 IPTV 直播源](http://koolshare.cn/thread-133246-1-1.html)
- [上海电信 IPTV 视频流项目主页](https://github.com/lucifersun/China-Telecom-ShangHai-IPTV-list)
- [上海电信 IPTV 视频流地址](http://htmlpreview.github.io/?https://raw.githubusercontent.com/lucifersun/China-Telecom-ShangHai-IPTV-list/master/iptvplayseek.html)
