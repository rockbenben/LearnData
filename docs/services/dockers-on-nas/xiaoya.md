---
article: false
title: 小雅 alist：影视资源合集
order: 18
---

[xiaoyaliu/alist](https://hub.docker.com/r/xiaoyaliu/alist) 是一个基于阿里云盘的 alist 方案，集成了众多影音资源，免去了自行搜索的麻烦。具体配置可参考[xiaoya docker 配置指南](https://xiaoyaliu.notion.site/xiaoya-docker-69404af849504fa5bcf9f2dd5ecaa75f)。

请注意，使用阿里云盘时可能需要定期更新 mytoken。只需访问网址 https://aliyuntoken.vercel.app/ ，并使用阿里云盘 app 扫描二维码即可获取。

## Emby + 小雅

若你正在使用 Emby，可以浏览[《如何使用 EMBY 展示小雅内容》教程](https://xiaoyaliu.notion.site/d353c9ceb15444d7b8e21ce6097ed739?v=145044ac8252470a9feef094ff1db520)，以增强播放体验的稳定性。

此方法可以将小雅的内容与 Emby 整合，把小雅当作资源库，Emby 则作为展示平台。它们通过 strm 文件相连，并通过同步软件保持内容同步。但请留意，元数据占用的空间可达 160G，请确保有充足的储存空间。下载元数据可能会影响你现有的 Emby 数据，最好在操作前进行配置备份。

```shell
# 一键下载元数据（不需进入docker），媒体库目录与小雅配置目录
bash -c "$(curl http://docker.xiaoya.pro/update_metainfo.sh)" -s /volume1/docker/emby /volume1/docker/xiaoya
```

## 无法下载问题

在线播放时偶尔会出现问题，因此我考虑将资源下载到本地。但尝试将其保存到我的阿里云盘并未成功。

我通过 `show_my_ali.txt` 文件在阿雅 alist 中显示了我的云盘内容，但之后的移动和复制操作均失败，显示错误`Request failed with status code 403`。

目前，我只能通过单个文件进行下载。

## 部署代码

```yml
version: "3.3"

services:
  xiaoya:
    image: xiaoyaliu/alist:latest
    container_name: xiaoya
    volumes:
      - /volume1/docker/xiaoya:/data
    ports:
      - 6789:80
    environment:
      - PUID=1026
      - PGID=100
      - TZ=Asia/Shanghai
    restart: always
```
