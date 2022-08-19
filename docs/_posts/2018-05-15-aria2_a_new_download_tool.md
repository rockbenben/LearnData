---
title: 抛弃迅雷，Aria2 新手入门
date: 2018-05-15
category:
  - 工具
tag:
  - Aria2
  - 迅雷
star: true
order: -17
---

迅雷已经用了 10 年，一直把它看作是速度最快也最方便的下载工具，也一直买着迅雷会员。

但，**迅雷堕落了**。

- `thunder:\\` 迅雷专属链接越来越少，下载基本是磁力链接、BT 种子；
- 迅雷会员加速不再给力，大量资源速度为 0（会员虽然还有一年多，但已经没用了）；
- 迅雷关闭旧版功能逼大家升级迅雷 U 享版，但升级后，才发现新版迅雷会强制接收所有下载。
  > 有些小文件，我只想用浏览器直接下载。而一些不想下的链接，也会被迅雷非常敏感的感应到，强制下载，真的真的特别流氓。

## 为什么选择 Aria2？

Aria2 下载比较全能，支持 BT 和磁力链接，性能也相当不错，**速度不比迅雷慢**。

虽然没原生应用界面，配置也麻烦，但这些用懒人包就能轻松解决。

## 真·懒人包

Aria2 真·懒人包无需配置，下载即用，适合不想折腾的人。

真·懒人包：<https://www.seoipo.com/software/Aria2/>

将懒人包解压到 `D:\Aria2`，点击 `AriaNg 启动器.exe` 即可开始下载。两个启动器任选其一，都集成了后端服务和前端 UI，无需启动其他程序。包内均为开源绿色软件，不涉及任何隐私和安装，更没病毒，360 误报拿它没办法。

2022.07.25 更新 Aria2 1.36.0，AriaNG 1.2.4，并增加 bt-tracker 到 138，方便 BT 和磁力链接提速。

---

如果不想用懒人包而想对 Aria2 自己重新配置的话，请往下看配置步骤。

## Aria2 设置

1. 下载 [Aria2 快速设置包](http://aria2c.com/archiver/aria2.zip)。

2. 把快速设置包解压到常用的存放目录，比如 `D:\Aria2`。

3. 官网下载 [Aria2 程序](https://github.com/aria2/aria2/releases), Win10 系统选择 [aria2-1.36.0-win-64bit-build1.zip](https://github.com/aria2/aria2/releases/download/release-1.36.0/aria2-1.36.0-win-64bit-build1.zip)，然后解压到快速设置包目录中，替代其中的 `aria2c.exe` 程序。

   ![](http://tc.seoipo.com/20191210232831.png)

4. 点击 `aria2.exe` , 启动 aria2，该程序会在任务栏中植入图标。

5. 修改 `aria2.conf`，更多设置参考 [Aria2 & YAAW 使用说明](http://aria2c.com/usage.html)。^[[Aria2 基础上手指南](https://zhuanlan.zhihu.com/p/30666881)]

   修改默认下载目录：

   ```conf
   # 文件的保存路径 (可使用绝对路径或相对路径), 默认：当前启动位置
   dir=D:\Download  #D:\Download 是我的默认下载目录
   ```

   修改服务器默认连接数：

   ```conf
   # 同一服务器连接数，添加时可指定，默认:1
   max-connection-per-server=16
   ```

   开启 BT 下列设置：

   ```conf
   enable-dht=true
   bt-enable-lpd=true
   enable-peer-exchange=true
   ```

   在最后添加 BT trackers，配置列表时重新获取 [最新 trackers 列表](https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt), tracker 中用 `,` 隔开。

   ```conf
   # bt-tracker 更新，解决 Aria2 BT 下载速度慢没速度的问题
   bt-tracker=udp://tracker.opentrackr.org:1337/announce,udp://9.rarbg.com:2810/announce,udp://tracker.openbittorrent.com:6969/announce,http://tracker.openbittorrent.com:80/announce,https://opentracker.i2p.rocks:443/announce,udp://tracker.torrent.eu.org:451/announce,udp://open.stealth.si:80/announce,udp://exodus.desync.com:6969/announce,udp://tracker.tiny-vps.com:6969/announce,udp://tracker.pomf.se:80/announce,udp://tracker.moeking.me:6969/announce,udp://tracker.lelux.fi:6969/announce,udp://tracker.dler.org:6969/announce,udp://tracker.altrosky.nl:6969/announce,udp://open.demonii.com:1337/announce,udp://explodie.org:6969/announce,udp://bt1.archive.org:6969/announce,udp://bt.oiyo.tk:6969/announce,udp://6ahddutb1ucc3cp.ru:6969/announce,https://tracker.nanoha.org:443/announce
   ```

   其他设置不大常用，有时间的话，你可以慢慢调整。

6. 开始下载

   Aira2 没有原生软件界面，除了代码执行下载，普通用户输入网址 `aria2c.com` 就能启动下载界面。^[[aria2 懒人安装教程](https://www.appinn.com/aria2-in-windows-setup/)]

   网页会自动与本地的 aira2 程序连接，实现下载管理。建议把该网址放到书签中，方便使用。

如果出现 Aria2 RPC 服务器错误，说明 aria2.conf 配置出错，可以直接使用「真·懒人包」，或使用设置好的「aria2.conf」文件覆盖原文件。

真·懒人包：<https://www.seoipo.com/software/Aria2/>

aria2.conf 配置下载：<https://wwz.lanzouf.com/iZczz08epqwb>

## Aria2 进阶

### 更换 Aria2 界面

[AriaNg](https://github.com/mayswind/AriaNg) 和传统下载软件界面类似，使用简单。

![](http://tc.seoipo.com/20180516104758.png)

使用方法：[下载 AriaNg](https://github.com/mayswind/AriaNg-DailyBuild/archive/master.zip)，解压后直接运行 index.html 就可打开 WebUI 界面，可以收藏到书签，方便使用。

如果报错的话，进入 `AriaNg 设置-RPC`，检查 RPC 地址是否正确，默认为 `localhost:6800`。

### Aira2 下载预热

Aira2 下载预热是 BT 下载前的必备步骤，否则速度容易很慢。

找个热门影视的 BT 种子 (千万建议是种子，而不是磁力链接)，然后下一波，挂着做种。过几个小时后退出 Aria2，或者等 Aria2 会话自动保存，你会发现 dht.dat 从空文件变成有数据了，这时下载速度就会正常很多。

> 很多 BT 客户端一样，Aria2 有个 dht.dat 文件 (开启 ipv6 还有个 dht6.dat)，这玩意用于存储一种叫做 DHT Routing Table 的东西，DHT 网络由无数节点组成，你接触到一个后能通过它接触到更多的节点，Aria2 我记得是有内置的节点，但是！如果你在 Aria2 第一次运行的时候直接下载磁力链接或者冷门种子，你很可能遇到连 MetaData 都无法获取的情况，这就是因为第一次只是初始化 dht.dat 文件，你本地不存在 DHT Routing Table 的缓存，所以你无法从 DHT 网络中获取足够的数据。^[[解决 Aria2 BT 下载速度慢没速度的问题](http://www.senra.me/solutions-to-aria2-bt-metalink-download-slowly/)]

### 接管浏览器下载

浏览器安装 [添加到 aria2](https://chrome.google.com/webstore/detail/nimeojfecmndgolmlmjghjmbpdkhhogl)，用 Aria2 接管浏览器的下载管理。

`添加到 aria2` 扩展的国内搬运地址：<https://wwi.lanzoui.com/i4Fmeetsdaj>

有的浏览器无法直接安装 `.crx` 格式的扩展，需将文件解压到新文件夹 xxx，然后在浏览器地址栏输入 `chrome://extensions/` 开启开发者模式，点击加载已解压的扩展程序，选中刚才解压的文件夹 xxx。

扩展安装好后，右键扩展图标，点击`选项-设置`，设置如下：

- 最小监视：10 M
- JSON-RPC 链接：`http://localhost:6800/jsonrpc`

## Aria2 启动器

Aria2 启动需要分别打开下载界面和 exe 应用文件，比较麻烦。我用 ahk 做了个启动器，可以检测 exe 应用运行状态并一键打开下载界面。

启动器下载：<https://wwi.lanzoui.com/inbO5entf3e>

将启动器到 Aria2 运行目录，如 `D:\Aria2`。

- **Aria2c 启动器**：使用 `http://aria2c.com/` 作为默认下载界面，不需要多余设置。
- **AriaNg 启动器**：使用 AriaNg 作为下载界面，需将 AriaNg 解压到 Aria2 运行目录，如 `D:\Aria2\AriaNg`。
