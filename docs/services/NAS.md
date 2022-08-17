---
article: false
title: NAS
icon: process
order: 1
---

- `控制面板－文件服务－SMB－高级设置`，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。
- `控制面板－任务计划 - 新增 - 计划的任务 - 用户定义的脚本`，给 NAS 建立定时任务脚本。
- SSD 缓存对家用的 NAS 性能提升不大，没必要加。
- 群晖系统分布在所有硬盘，拔出一个不影响使用。但应用会有影响？

## NAS Docker

NAS 上推荐用 `docker-compose.yml` 安装 Docker，镜像会自动同步到群晖的 Docker 列表中。

docker-compose 使用参考 [TTRSS docker-compose](http://ttrss.henry.wang/zh/#%E9%80%9A%E8%BF%87-docker-compose-%E9%83%A8%E7%BD%B2)。

1. 打开 `控制面板`-`终端机和 SNMP`，启动 SSH 功能。
2. putty 连接群晖 SSH，进入 `docker-compose.yml` 所在路径，比如 `cd /volume3/storage`。
3. 通过终端在同目录下运行 `sudo docker-compose up -d` 后等待部署完成。
4. 关闭 SSH 功能。

注意：

- 非 root 用户需在命令前添加 `sudo`，否则会提示 `Permission denied`。
- 升级镜像，不影响内部数据库。
- 「群晖导出」会导出安装镜像和配置，但不包括使用的数据库。

## 套件配置

- DS/Transmission：用于 PT 下载 (禁用 DHT，半小时停止做种)。
- Synology Drive Server：电脑文件备份。
- Docker：指定本地端口否则重启会变，重启不影响 docker 配置。
  - RSSHub：无需保存数据，pubData 为 GMT 时区，普通用户无法更改，Docker Timezone 设置也不会有改变。
  - Huginn：定期备份抓取脚本，数据库保存在本地。
  - Tiny Tiny RSS：定期备份订阅源和设置，自动更新。
    - [mercury-parser-api](https://registry.hub.docker.com/r/wangqiru/mercury-parser-api)：全文插件
  - [qiandao](https://github.com/AragonSnow/qiandao)：自动签到开源框架，需搭配浏览器扩展 [get-cookies](https://github.com/ckx000/get-cookies) 使用，可导出配置。
  - [watchtower](https://containrrr.dev/watchtower/)：监控并更新 Docker 容器。
    - 监控指定名称的镜像：`docker run -d --name watchtower -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --cleanup --run-once nginx redis`。本案例只更新名为“nginx”和“redis”的容器，其他容器将被忽略。
    - 指定容器的 compose 命令中添加 lable `com.centurylinklabs.watchtower.enable=false`，可禁止该容器的监控和更新。
  - [Check 酱](https://github.com/easychen/checkchan-dist)：监测网页内容变化，并发送异动到微信。亦支持 http status、json 和 rss 监测。配合自架云端，关电脑后也能运行。
  - [Home Assistant](https://www.home-assistant.io/)：开源家庭自动化平台，可自定义集中管理各品牌的智能家居设备。米家设备需使用 hacs 下的集成 [Xiaomi Miot Auto](../family/HomeAutomation.html#home-assistant)。
  - [Node-RED](../family/HomeAutomation.html#node-red)：开源流处理，类似本地版的 IFTTT。
  - 待了解
    - [n8n](https://blog.csdn.net/alex_yangchuansheng/article/details/122295193)：开源 IFTTT 工具，偏重于云服务。
    - [AutoBangumi](https://github.com/EstrellaXD/Auto_Bangumi)：自动追番器，用以替代自我审查的 Bilibili。
    - [nas-tools](https://github.com/jxxghp/nas-tools/wiki/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B)：号称能自动整理文件，但测试识别中很容易出错，暂不考虑。
      - qbittorrent：Linux 版本提示出错。
    - Emby、Plex：流媒体方案，暂不考虑。
    - HomeAssistant：开源智能家居平台
    - Clash：代理服务器

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

硬盘临期后，用大容量硬盘替换。考虑进入 `存储池 - 更改 RAID 类型`，无损转换 basic 到 Raid1。不过，不同容量硬盘组 RAID，只能以最小磁盘容量计使用空间。

更换硬盘后，注意将数据连同文件夹用 file station 复制过去 (按住 Shift 选中所有你要的文件点右键 移动到...)，关机卸载旧盘。如果该硬盘涉及套件位置，注意检查设置。^[[如何把群晖 NAS 上的套件搬到另外个硬盘上](https://www.bigzhang.com/3264.html)]

共享文件迁移：进入 `控制面板-共享文件夹`，把你的共享文件夹位置修改到新储存空间。^[[群晖 NAS 跨存储空间移动共享文件夹 (NAS 新增磁盘)](https://blog.csdn.net/hilaryfrank/article/details/109722319)]
