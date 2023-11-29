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

迅雷已经用了 10 年，一直将它视为最快也最方便的下载工具，也一直购买迅雷会员。

但是，**迅雷已经堕落**。

- `thunder:\\` 迅雷专属链接越来越少，下载基本是磁力链接和 BT 种子；
- 迅雷会员加速不再有效，大量资源速度为 0（会员虽然还有一年多，但已经没用了）；
- 迅雷关闭旧版功能，迫使大家升级迅雷 U 享版，但升级后，发现新版迅雷会强制接收所有下载。
  > 有些小文件，我只想用浏览器直接下载，而一些不想下载的链接，也会被迅雷非常敏感地感应到，强制下载，真的特别流氓。

## 为什么选择 Aria2？

Aria2 下载功能比较全面，支持 BT 和磁力链接，性能也相当不错，**速度不比迅雷慢**。

虽然没有原生应用界面，配置也比较麻烦，但这些可以通过懒人包轻松解决。

## 真·懒人包

Aria2 真·懒人包无需配置，下载即可使用，适合不想折腾的人。

真·懒人包：<https://www.seoipo.com/software/Aria2/>

将懒人包解压到 `D:\Aria2`，点击 `AriaNg 启动器.exe` 即可开始下载。两个启动器任选其一，都集成了后端服务和前端 UI，无需启动其他程序。包内均为开源绿色软件，不涉及任何隐私和安装，AutoHotkey 插件容易被误报。

2023.11.23 更新 Aria2 1.37.0，AriaNG 1.3.6，重构启动器，并增加 bt-tracker 至 108 个，以便 BT 和磁力链接提速。

新增功能：任务开始、完成和出错时，会推送系统通知，可在 aria2.conf 的特别功能区块中设置通知的开启与关闭，此功能由 @我真的爱发明 提出。

---

如果不想使用懒人包，想了解 Aria2 背后的设置，请往下看配置步骤。

## Aria2 设置

1. 下载 [Aria2 快速设置包](https://aria2c.com/archiver/aria2.zip)或[备用链接](https://wwz.lanzouf.com/iROZE0eai3xe)，将其解压到存放文件夹，例如 `D:\Aria2`。

2. 官网下载 [Aria2 程序](https://github.com/aria2/aria2/releases)（Windows 选择 [aria2-1.37.0-win-64bit-build1.zip](https://github.com/aria2/aria2/releases/download/release-1.37.0/aria2-1.37.0-win-64bit-build1.zip)），然后解压到快速设置包的存放文件夹中，替代其中的 `aria2c.exe` 程序。

   ![](https://img.newzone.top/20191210232831.png "GitHub 官方仓库下载 Aria2")

3. 点击 `aria2.exe` 启动 aria2，系统托盘区会同步出现应用图标。

4. 参照[懒人包配置](https://wwz.lanzouf.com/iwv6f0eadq9i)修改 `aria2.conf`，更多设置参考 [aria2c 官方文档](https://aria2.github.io/manual/en/html/aria2c.html)。^[[Aria2 基础上手指南](https://zhuanlan.zhihu.com/p/30666881)]

   修改默认下载目录：

   ```conf
   # 文件的保存路径 (可使用绝对路径或相对路径), 默认：当前启动位置
   # D:\Download 是我的默认下载目录，可以改为你自己的下载路径
   dir=D:\Download
   ```

   修改服务器默认连接数：

   ```conf
   # 同一服务器连接数，添加时可指定，默认:1
   max-connection-per-server=16
   ```

   修改监听端口 6800：

   ```conf
   # RPC 监听端口，端口被占用时可以修改，默认:6800
   # 端口修改后，需要重新启动 aria2c.exe，并确保页面设置中的 RPC 地址已更改为新端口。
   rpc-listen-port=6800
   ```

   开启 BT 下列设置：

   ```conf
   enable-dht=true
   bt-enable-lpd=true
   enable-peer-exchange=true
   ```

   在文档最后一行添加 BT trackers，最新 trackers 列表从 [ngosang/trackerslist](https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt) 中获取，tracker 中用 `,` 隔开。

   ```conf
   # bt-tracker 更新，解决 Aria2 BT 下载速度慢没速度的问题
   bt-tracker=udp://tracker.opentrackr.org:1337/announce,udp://9.rarbg.com:2810/announce,udp://opentracker.i2p.rocks:6969/announce,https://opentracker.i2p.rocks:443/announce,udp://tracker1.myporn.club:9337/announce,udp://tracker1.bt.moack.co.kr:80/announce,udp://tracker.torrent.eu.org:451/announce,udp://p4p.arenabg.com:1337/announce,udp://open.stealth.si:80/announce,udp://open.demonii.com:1337/announce,udp://ipv4.tracker.harry.lu:80/announce,udp://explodie.org:6969/announce,udp://exodus.desync.com:6969/announce,https://tracker.tamersunion.org:443/announce,https://tracker.nanoha.org:443/announce,https://tracker.lilithraws.org:443/announce,https://tr.burnabyhighstar.com:443/announce,https://1337.abcvg.info:443/announce,http://tracker.mywaifu.best:6969/announce,http://bt.okmp3.ru:2710/announce
   ```

   其他设置不常用，有时间的话，你可以慢慢调整。

5. Aira2 没有原生应用界面，可以输入网址 `http://aria2c.com` 使用第三方下载界面。该页面会自动与本地的 aira2c 程序关联，实现下载管理，建议把其收藏到书签，以便日后使用。^[[aria2 懒人安装教程](https://www.appinn.com/aria2-in-windows-setup/)]

如果出现「Aria2 RPC 服务器错误」，请检查 JSON-RPC Path 是否为 `http://localhost:6800/jsonrpc`。注意，页面**链接须为 http 而非 https**。如果依然报错，则说明 aria2.conf 配置有误，建议下载 [真·懒人包](https://www.seoipo.com/software/Aria2/)。

## Aria2 进阶

### 更换 Aria2 界面

[AriaNg](https://github.com/mayswind/AriaNg) 的界面类似传统的下载软件，使用简单。

![](https://img.newzone.top/20180516104758.png "AriaNg 界面")

使用方法：下载并解压 [AriaNg](https://github.com/mayswind/AriaNg-DailyBuild/archive/master.zip)，运行目录下的 index.html，打开 Aria2 WebUI 界面，将页面链接收藏到书签以便后续使用 Aria2。

如果 AriaNg 页面出现报错，则从页面左侧选择「AriaNg 设置」>「RPC」，检查 RPC 地址，默认地址为 `localhost:6800`。

### Aira2 下载预热

Aira2 下载预热是 BT 下载前的必备步骤，否则速度容易很慢。

找一个热门影视的 BT 种子（注意是种子，不是磁力链接），然后下载并挂着做种。过几个小时后，退出 Aria2 或者等待 Aria2 会话自动保存，你会发现 dht.dat 从空文件变成有数据了，之后的 BT 下载速度就会快很多。

> 很多 BT 客户端一样，Aria2 有个 dht.dat 文件 (开启 ipv6 还有个 dht6.dat)，这玩意用于存储一种叫做 DHT Routing Table 的东西，DHT 网络由无数节点组成，你接触到一个后能通过它接触到更多的节点，Aria2 我记得是有内置的节点，但是！如果你在 Aria2 第一次运行的时候直接下载磁力链接或者冷门种子，你很可能遇到连 MetaData 都无法获取的情况，这就是因为第一次只是初始化 dht.dat 文件，你本地不存在 DHT Routing Table 的缓存，所以你无法从 DHT 网络中获取足够的数据。^[[解决 Aria2 BT 下载速度慢没速度的问题](http://www.senra.me/solutions-to-aria2-bt-metalink-download-slowly/)]

### 接管浏览器下载

如果想用 Aria2 接管浏览器的下载管理，需安装插件/扩展。

- Chrome：安装[添加到 aria2](https://chrome.google.com/webstore/detail/nimeojfecmndgolmlmjghjmbpdkhhogl) 扩展。下载包可以用[国内搬运地址](https://wwi.lanzoui.com/i4Fmeetsdaj)，或是懒人包内置文件。
  如果浏览器无法直接安装 `.crx` 格式的扩展，可以将文件解压到新文件夹「xxx」，然后在浏览器的地址栏输入 `chrome://extensions/` 开启开发者模式，点击加载已解压的扩展程序，选中刚才解压的文件夹「xxx」。
- Firefox：安装 [Aria2 Download Manager Integration](https://addons.mozilla.org/en-US/firefox/addon/aria2-integration/) 扩展，可参考下方的 Chrome 扩展设置进行配置。

安装完「添加到 aria2」扩展后，右键扩展图标，点击「选项」>「设置」，设置如下：

- 最小监视：`10` M，低于该容量将由浏览器下载。如果 Aria2 要接手所有下载，可以将最小监视设为 `0.001`。
- JSON-RPC 链接：`http://localhost:6800/jsonrpc`。

注意：「添加到 aria2」图标显示的 `en` 表示处于开启状态，`dis` 表示处于关闭状态，点击图标可以切换使用状态。

## Aria2 启动器

每次启动 Aria2 下载时，都需要执行两个文件：打开 WebUI 链接和 aria2c，这有点麻烦。因此，我使用 AutoHotkey 做了一个启动器，它可以检测 aria2c 运行状态，并一键打开下载界面，以简化 Aria 的启动过程。

下载 [Aria2 启动器](https://wwz.lanzouf.com/iqud50ebl06d)，然后将其解压到 Aria2 运行目录，例如 `D:\Aria2`。Aria2 启动器提供了两种方式，只需选择其中一种即可。

- **AriaNg 启动器**（推荐）：使用 AriaNg 本地版作为下载管理界面。在使用该启动器前，需将 [AriaNg](https://github.com/mayswind/AriaNg-DailyBuild/archive/master.zip) 解压到 Aria2 目录下，并将文件夹名改为 AriaNg，然后打开文件 index.html，该文件位于 `Aria2\AriaNg\index.html`。
- **Aria2c 启动器**：将 `https://aria2c.com` 作为默认下载界面。该设置较旧，需确保 JSON-RPC Path 为 `http://localhost:6800/jsonrpc`。
