---
article: false
title: Tachidesk：漫画聚合阅读器
order: 8
---

[Tachidesk](https://github.com/Suwayomi/docker-tachidesk) 是一个免费的开源漫画阅读器，支持在各种客户端上部署，可以方便地订阅并聚合漫画源。为了实现统一的漫画阅读体验和浏览管理，建议将 Tachidesk-Server 部署在 NAS 上，并通过网页端访问以进行漫画阅读，以获得类似应用的操作习惯。

开源的漫画阅读应用，通过安装扩展插件，可以方便地订阅并聚合漫画源。使用前，需进入 Extensions，点右上角的 Enabled Languages 按钮，设置为中文源，然后会在页面底部发现中文漫画源。安装源后，进入 Souces 中点击进入对应源。

如果你仅使用 Android 设备，可以选择使用开源漫画阅读器 [Tachiyomi](https://github.com/tachiyomiorg/tachiyomi)。如果你需要访问一些老旧漫画作品，还可以考虑使用 [Cimoc](https://github.com/Haleydu/Cimoc)。

```yml
version: '3.7'
services:
  tachidesk-docker:
    image: ghcr.io/suwayomi/tachidesk:latest
    container_name: tachidesk-docker
    environment:
      - TZ=Asia/Shanghai # Use TZ database name from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
      - DEBUG=false
      - BIND_IP=0.0.0.0
      - BIND_PORT=4567
      - SOCKS_PROXY_ENABLED=false
      - DOWNLOAD_AS_CBZ=true
      #- MAX_PARALLEL_UPDATE=3
      #- BASIC_AUTH_ENABLED=true
      #- BASIC_AUTH_USERNAME=manga
      #- BASIC_AUTH_PASSWORD=hello123
    volumes:
      - /volume1/docker/tachidesk:/home/suwayomi/.local/share/Tachidesk
    ports:
      - "4567:4567"
    restart: on-failure:3
```

你可以将本地的漫画资源导入到路径 `/volume1/docker/tachidesk/local`。请注意，导入的漫画需要按文件夹分类，并确保图片按文件名排序。

点击左侧的 `Extensions` 按钮，点右上角的 `Enabled Languages` 选项，将其设置为中文源，然后会在页面底部发现中文漫画源。安装好漫画源扩展后，点击左侧的 `Sources` 按钮，然后选择不同来源的 `BROWSE`，即可浏览对应源的在线漫画。在线漫画会下载到 `/volume1/docker/tachidesk/downloads` 目录。安装各类在线漫画源扩展，以便进行在线搜索、阅读和下载漫画。
