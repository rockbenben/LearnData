---
title: 抛弃迅雷，Aria2 新手入门
date: 2018-05-15
category:
  - 工具
tag:
  - Aria2
  - 迅雷
order: -17
---

迅雷已经用了 10 年，一直把它看作是速度最快也最方便的下载工具。迅雷会员也是我必续的服务。

但，**迅雷堕落了**。

- `thunder:\\` 迅雷专属链接越来越少，基本都是磁力、BT 的天下
- 迅雷会员加速不再给力，大量资源速度为 0。会员虽然还有一年多，但几乎没用了
- 迅雷功能更新倒逼客户升级，而升到迅雷 U 享版后，迅雷提高自身权限，强制接收所有下载

> 有些小文件，我只想用浏览器直接下载。而一些不想下的链接，也会被迅雷非常敏感的感应到，强制下载，真的真的特别流氓。

## 为什么选择 Aria2？

- 优点：比较全能，HTTP 下载和 BT 下载都有，性能也相当不错，**速度不比迅雷慢**。
- 缺点：无 UI，需要自备；配置麻烦，上手较难。

真·懒人包：<https://www.seoipo.com/software/Aria2/>

Aria2 真·懒人包无需配置，下载即用，适合不想折腾的人。

将懒人包解压到 D:\Aria2，启动 AriaNg 启动器.exe 即可。两个启动器任选其一，都集成了后端服务和前端 UI，无需启动其他程序。包内均为开源软件，不涉及任何信息，也没病毒，360 误报拿它没办法。

每天上千个下载了，软件包持续更新，别忘了点赞、收藏～

2022.04.18 更新 aria2 1.36.0；更新 AriaNG 1.2.3，增加 bt-tracker 到 117，方便 BT 和磁力链接提速。

---

有时间又希望重新配置的话，可以往下查看具体配置过程。

## Aria2 快速配置

1. 下载 [Windows 设置懒人包](http://aria2c.com/archiver/aria2.zip)

2. 把懒人包解压到常用的存放目录，我放在 `D:\Aria2`。

3. 官网下载 [Aria2 程序](https://github.com/aria2/aria2/releases), Win10 系统选择 [aria2-1.35.0-win-64bit-build1.zip](https://github.com/aria2/aria2/releases/download/release-1.35.0/aria2-1.35.0-win-64bit-build1.zip)，然后解压到懒人包目录中，替代懒人包的 `aria2c.exe` 程序。
   ![](http://tc.seoipo.com/20191210232831.png)

4. 点击 `aria2.exe` , 启动 aria2，该程序会在任务栏中植入图标。

5. 修改`aria2.conf`，更多设置参考 [Aria2 & YAAW 使用说明](http://aria2c.com/usage.html)。

修改默认下载目录：

```bash
# 文件的保存路径 (可使用绝对路径或相对路径), 默认：当前启动位置
dir=D:\Download  #D:\Download 是我的默认下载目录
```

修改服务器默认连接数：

```bash
# 同一服务器连接数，添加时可指定，默认:1
max-connection-per-server=16
```

开启 BT 下列设置：

```bash
enable-dht=true
bt-enable-lpd=true
enable-peer-exchange=true
```

在最后添加 BT trackers，配置列表时重新获取 [最新 trackers](https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt), tracker 中用「,」隔开。

```bash
# bt-tracker 更新，解决 Aria2 BT 下载速度慢没速度的问题
bt-tracker=udp://tracker.coppersurfer.tk:6969/announce,udp://tracker.leechers-paradise.org:6969/announce,udp://tracker.opentrackr.org:1337/announce,udp://p4p.arenabg.com:1337/announce,udp://9.rarbg.to:2710/announce,udp://9.rarbg.me:2710/announce,udp://tracker.openbittorrent.com:80/announce,udp://exodus.desync.com:6969/announce,udp://tracker.tiny-vps.com:6969/announce,udp://retracker.lanta-net.ru:2710/announce,udp://open.stealth.si:80/announce,udp://tracker.moeking.me:6969/announce,udp://denis.stalker.upeer.me:6969/announce,udp://tracker.torrent.eu.org:451/announce,udp://tracker.cyberia.is:6969/announce,udp://open.demonii.si:1337/announce,udp://ipv4.tracker.harry.lu:80/announce,udp://explodie.org:6969/announce,udp://xxxtor.com:2710/announce,udp://valakas.rollo.dnsabr.com:2710/announce
```

还有很多设置，有时间可以逐个修改。

注意：

- Aira2 没有软件界面，程序员可以用代码执行任务，但普通用户怎样添加下载任务呢？
- 打开浏览器，输入网址 `aria2c.com` 就可以打开操作界面了。可以把这个网址放到书签中，方便使用。

## Aria2 进阶

### 更换 Aria2 界面

AriaNg：<https://github.com/mayswind/AriaNg>

AriaNg 和传统下载软件界面类似，中文版界面，使用无压力，如果报错的话，记得修改服务器地址：

![](http://tc.seoipo.com/20180516104758.png)

使用方法：[下载 zip 包](https://github.com/mayswind/AriaNg-DailyBuild/archive/master.zip)，解压后直接运行 index.html 就可打开 WebUI 界面，可以收藏到书签，方便使用。

### Aira2 下载预热

找个热门种子 (千万建议是种子，而不是磁力链接)，然后下一波，挂着做种，过几个小时后退出 Aria2，或者等 Aria2 会话自动保存，你会发现 dht.dat 从空文件变成有数据了，这时候你下载就会正常很多。

> 很多 BT 客户端一样，Aria2 有个 dht.dat 文件 (开启 ipv6 还有个 dht6.dat)，这玩意用于存储一种叫做 DHT Routing Table 的东西，DHT 网络由无数节点组成，你接触到一个后能通过它接触到更多的节点，Aria2 我记得是有内置的节点，但是！如果你在 Aria2 第一次运行的时候直接下载磁力链接或者冷门种子，你很可能遇到连 MetaData 都无法获取的情况，这就是因为第一次只是初始化 dht.dat 文件，你本地不存在 DHT Routing Table 的缓存，所以你无法从 DHT 网络中获取足够的数据。

### 接管浏览器下载

浏览器安装插件 - [添加到 aria2](https://chrome.google.com/webstore/detail/nimeojfecmndgolmlmjghjmbpdkhhogl)，用 Aria2 接管 chrome 的下载。
国内搬运地址：<https://wwi.lanzoui.com/i4Fmeetsdaj>

chrome 新版目前无法直接安装 crx，国内搬运需将文件解压到新文件夹 xxx。在地址栏输入 chrome://extensions/打开开发者模式的开关，点击加载已解压的扩展程序，选中刚才解压的文件夹 xxx。

## Aria2 启动器

Aria2 启动需要分别打开下载界面和 exe 应用文件，比较麻烦。我用 ahk 做了个启动器，可以检测 exe 应用运行状态并一键打开下载界面。
启动器下载：<https://wwi.lanzoui.com/inbO5entf3e>

将启动器到 Aria2 运行目录，如 `D:\Aria2`。

**Aria2c 启动器**：使用 `http://aria2c.com/` 作为默认下载界面，不需要多余设置。
**AriaNg 启动器**：使用 AriaNg 作为下载界面，需将 AriaNg 解压到 Aria2 运行目录，如 `D:\Aria2\AriaNg`。

参考资料：

- [aria2 懒人安装教程](https://www.appinn.com/aria2-in-windows-setup/)
- [Aria2+WebUI，迅雷倒下之后的代替品](http://blog.sina.com.cn/s/blog_6bf2cd8a0102x3w2.html)
- [BT trackers 更新项目](https://github.com/ngosang/trackerslist)
- [Aria2 基础上手指南](https://zhuanlan.zhihu.com/p/30666881)
- [解决 Aria2 BT 下载速度慢没速度的问题](http://www.senra.me/solutions-to-aria2-bt-metalink-download-slowly/)
- [yaaw (国人开发的 Aria2 web-ui)](https://github.com/binux/yaaw)
- [bt-trackerlist 官方更新地址](https://github.com/ngosang/trackerslist)
