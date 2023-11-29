---
article: false
title: Syncthing - 私人同步盘
order: 10
---

[Syncthing](https://github.com/syncthing/syncthing) 是一款开源免费的跨平台文件同步工具，基于 P2P 技术实现多设备之间的文件同步。需要注意的是，Syncthing 和微力同步都不能使本地两个文件夹同步。我之前使用免费提供的 GoodSync 来同步同一设备上的文件。

Syncthing 与百度网盘、坚果云等第三方网盘的最大不同在于，它实现了多设备间的实时同步。百度网盘同步仅支持 PC 端，无法在手机端同步，只能在需要查看文件时手动点击下载；而坚果云在手机端即使设置了离线收藏，下载的文件也存储在内部空间，其他应用无法访问。相比之下，Syncthing 默认将文件夹同步到本地，而非按需下载。如果你不希望将文件托管到第三方，或者需要在多个设备之间同步文件，Syncthing 是个不错的选择。

```yml
version: "3"
services:
  syncthing:
    image: syncthing/syncthing
    container_name: syncthing
    hostname: my-syncthing
    environment:
      - PUID=1026
      - PGID=100
    volumes:
      - /volume1/docker/syncthing/appdata:/var/syncthing
    ports:
      - 9040:8384 # Web UI
      - 22000:22000/tcp # TCP file transfers
      - 22000:22000/udp # QUIC file transfers
      - 21027:21027/udp # Receive local discovery broadcasts
    restart: unless-stopped
```

由于我对文件实时同步的需求较小，也不需要版本控制，目前并未使用 Syncthing。相反，我将本地文件按天同步到 NAS，并随后在 Nextcloud 上进行在线文档编辑。
