---
article: false
title: NAS
icon: process
order: 1
---

NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点：

- 选择「控制面板」>「文件服务」>「SMB」>「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。
- 选择「控制面板」>「任务计划」>「新增」>「计划的任务」>「用户定义的脚本」，给 NAS 建立定时任务脚本。
- SSD 缓存对家用的 NAS 性能提升不大，没必要加。
- DS/Transmission 套件：用于 PT 下载 (禁用 DHT，半小时停止做种)。
- Synology Drive Server 套件：电脑文件备份。
- Hyper Backup：本地多硬盘备份，防止一个硬盘丢失后重要文件损坏，比如 docker 容器的本地配置文件夹。
- 群晖系统分布在所有硬盘，拔出一个不影响使用。但应用会有影响？

## NAS Docker

NAS Docker 建议指定本地端口，否则重启容器会让端口发生改变，重启不会不影响 docker 配置。升级容器镜像，不影响内部数据库。群晖的「Docker 导出」只会导出安装镜像和配置，但不包括容器内部使用的数据库，用处不大。

**Docker 容器安装**：

推荐用 `docker-compose.yml` 安装 Docker，镜像会自动同步到 NAS 的容器列表中。docker-compose 使用参考 [TTRSS docker-compose](http://ttrss.henry.wang/zh/#%E9%80%9A%E8%BF%87-docker-compose-%E9%83%A8%E7%BD%B2)。

1. 选择「控制面板」>「终端机和 SNMP」，启动 SSH 功能。
2. putty 连接群晖 SSH，进入 `docker-compose.yml` 所在路径，比如 `cd /volume3/storage`。
3. 通过终端在同目录下运行 `sudo docker-compose up -d` 后等待部署完成。
4. 关闭 SSH 功能。

注意：root 用户需在命令前添加 `sudo`，否则会提示 `Permission denied`。

## Docker 容器

### 常用

- [qbittorrent](https://registry.hub.docker.com/r/linuxserver/qbittorrent/)：需修改所有默认端口，否则容易报错。PT 下载关闭 `BitTorrent - DHT` 和其他隐私选项，半小时停止做种，将下载文件添加 Everyone 权限，其他设置参考[群晖使用 qbittorrent](https://blog.csdn.net/weixin_45120915/article/details/114691473)。
- [PhotoPrism](https://docs.photoprism.app/)：基于 ai 私有化部署的个人相册。如果部署时出错，则尝试删除数据库文件夹下的内容。地点标记功能非常强大，类似本地版 Google Photos。
- [qiandao](https://github.com/AragonSnow/qiandao)：自动签到开源框架，需搭配浏览器扩展 [get-cookies](https://github.com/ckx000/get-cookies) 使用，可导出配置。
- [watchtower](https://containrrr.dev/watchtower/)：监控并更新 Docker 容器。
  - 监控指定名称的镜像：`docker run -d --name watchtower -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --cleanup --run-once nginx redis`。本案例只更新名为「nginx」和「redis」的容器，其他容器将被忽略。
  - 指定容器的 compose 命令中添加 lable `com.centurylinklabs.watchtower.enable=false`，可禁止该容器的监控和更新。

### 资讯

- RSSHub：无需保存数据，pubData 为 GMT 时区，普通用户无法更改，Docker Timezone 设置也不会有改变。
- Huginn：定期备份抓取脚本，数据库保存在本地。
- Tiny Tiny RSS：定期备份订阅源和设置，自动更新，可配置全文插件 [mercury-parser-api](https://registry.hub.docker.com/r/wangqiru/mercury-parser-api)。
- [Check 酱](https://github.com/easychen/checkchan-dist)：监测网页内容变化，并发送异动到微信。亦支持 http status、json 和 rss 监测。配合自架云端，关电脑后也能运行。同类工具有 [changedetection.io](https://github.com/dgtlmoon/changedetection.io)。

### 娱乐

- [AList](https://github.com/alist-org/alist)：开源的网盘管理工具，还支持对象存储，本地存储，FTP 等等。
- [LANraragi](https://github.com/Difegue/LANraragi)：免费开源的漫画管理器，支持 zip/rar/targz/lzma/7z/xz/cbz/cbr/pdf 多种格式，可从网页和 [第三方客户端](https://github.com/Difegue/LANraragi/blob/32cc991e8c5bae3bbd57d163278048c50159ae9f/tools/Documentation/advanced-usage/external-readers.md) 浏览。
- [Tachiyomi](https://github.com/Suwayomi/docker-tachidesk)：开源的漫画阅读应用，通过安装扩展插件，可以方便地订阅并聚合漫画源。使用前，需进入 Extensions，点右上角的 Enabled Languages 按钮，设置为中文源，然后会在页面底部发现中文漫画源。安装源后，进入 Souces 中点击进入对应源。
- [reader](https://github.com/hectorqin/reader)：阅读 3 的服务器版，摆脱客户端，网页版即可查看。自定义替换进入文章页面左侧的「设置」-「过滤规则管理」。
- [Tale Book](https://github.com/talebook/talebook)：基于 Calibre 的简单的个人图书管理系统，支持在线阅读，但阅读体验不强且 Bug 较多，个人更喜欢直接用 PC 端查看。
- [Bilibili_Danmuji](https://github.com/zzcabc/Docker_Buildx_Danmuji)：B 站直播礼物答谢、定时广告、关注感谢，自动回复工具，房管工具，自动打卡，Bilibili 直播弹幕姬 (使用 websocket 协议)，java 版 B 站弹幕姬。部署 Docker 时需更新 jdr release 文件。

### 自动化

- [n8n](https://blog.csdn.net/alex_yangchuansheng/article/details/122295193)：开源 IFTTT 工具，偏重于云服务。
- [Node-RED](../family/HomeAutomation.html#node-red)：开源流处理，类似本地版的 IFTTT。
- [Home Assistant](https://www.home-assistant.io/)：开源家庭自动化平台，可自定义集中管理各品牌的智能家居设备。米家设备需使用 hacs 下的集成 [Xiaomi Miot Auto](../family/HomeAutomation.html#home-assistant)。
- [Monica](https://github.com/monicahq/monica)：Monica 允许人们记录所有关于朋友和家人的重要事情。喜欢和他们一起的活动。你最后一次打电话给某人的时候，你们谈了些什么。它会帮助你记住他们孩子的名字和年龄。它还能提醒你打电话给一个很久没联系的人。Monica 的容器设置查看 [Monica Docker](https://github.com/monicahq/docker)。
- [supermanito/Helloworld](https://supermanito.github.io/Helloworld/#/)：京东签到等脚本，功能很强大，没怎么研究。
- [ubuntu-desktop-lxde-vnc](https://registry.hub.docker.com/r/dorowu/ubuntu-desktop-lxde-vnc)：能在 Docker 上运行的 Ubuntu 桌面版，适合挂载要长期运行的程序。测试 OBS 时，对内存要求不高，但 CPU 直冲 100%，fps 只有 7。

### 待了解

- [兰空图床](https://github.com/lsky-org/lsky-pro)：图床已经部署在七牛云，用 Picgo 上传，没感觉有必要用它。
- [AutoBangumi](https://github.com/EstrellaXD/Auto_Bangumi)：自动追番器，用以替代自我审查的 Bilibili。
- [nas-tools](https://github.com/jxxghp/nas-tools/wiki/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B)：号称能自动整理文件，但测试识别中很容易出错，暂不考虑。
- Emby、Plex：流媒体方案，暂不考虑。
- Clash：代理服务器。

## 影视整理

下载文件后，用 tinyMediaManager 重命名并下载 NFO 和影视封面，最后放置于分类文件夹。

[tinyMediaManager](https://www.tinymediamanager.org/download/) v4 免费版足够个人使用，v3 作偶尔补充使用，搜索首选语言改为「大陆简体」更精准。^[[群晖 NAS 使用 Emby+tMM 打造全平台观影畅爽体验（附下载地址）](https://post.smzdm.com/p/a0d67m2z/)]

```bash
# 电视节目重命名规则
季文件夹名：Season ${seasonNr}
剧集档案名：${showTitle} - S${seasonNr2}E${episodeNr2} - ${title}

# 当只有一季时，则更改重命名规则
季文件夹名：为空时，会自动调用默认值
剧集档案名：${showTitle} - E${episodeNr2}

# 多季，有标题时
剧集档案名：${showTitle} - E${episodeNr2} - ${title}
```

## NAS 硬盘

插入新硬盘，新建储存空间，使用 Btrfs 或 Basic 格式。SHR 是群晖的智能 RAID 格式，不适用于硬盘容量不同的情况。

| 硬盘   | 容量 | 到期时间（5 年） |
| ------ | ---- | ---------------- |
| 硬盘 1 | 10T  | 2025-06-18       |
| 硬盘 2 | 4T   | 2023-01-24       |
| 硬盘 3 | 14T  | 2027-02-11       |
| 硬盘 4 | 8T   | 2026-01-06       |
| 冷备份 | 2T   | 2014-10          |

换下的机械硬盘做冷备份，存储照片等长期数据。

硬盘临期后，用大容量硬盘替换。选择「存储池」>「更改 RAID 类型」，无损转换 basic 到 Raid1。不过，不同容量硬盘组 RAID，只能以最小磁盘容量计使用空间。

更换硬盘后，注意将数据连同文件夹用 file station 复制过去 (按住 Shift 选中所有你要的文件点右键 移动到...)，关机卸载旧盘。如果该硬盘涉及套件位置，注意检查设置。^[[如何把群晖 NAS 上的套件搬到另外个硬盘上](https://www.bigzhang.com/3264.html)]

共享文件迁移：选择「控制面板」>「共享文件夹」，把你的共享文件夹位置修改到新储存空间。^[[群晖 NAS 跨存储空间移动共享文件夹 (NAS 新增磁盘)](https://blog.csdn.net/hilaryfrank/article/details/109722319)]
