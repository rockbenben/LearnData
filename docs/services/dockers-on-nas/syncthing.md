---
article: false
title: Syncthing - 私人同步盘
order: 10
---

[Syncthing](https://github.com/syncthing/syncthing) 是一款开源免费跨平台的文件同步工具，是基于 P2P 技术实现多设备间的文件同步。注意：Syncthing、微力同步都不能让本地两个文件夹同步。我用之前免费送的 GoodSync 来进行同一设备文件的同步。

Syncthing 与百度网盘、坚果云等第三方网盘最大的不同在于，它实现了多设备间的实时同步。百度网盘同步只支持 PC 端，在手机端无法同步，只能在需要看的时候手动点击下载，没有自动化；坚果云在手机端即使设置了离线收藏，下载的文件也在内部空间，其他应用无法访问。

如果你不希望将文件托管到第三方，或是需要将文件实时同步到多个设备，则可以需要 Syncthing。

```yml
version: "3"
services:
  syncthing:
    image: syncthing/syncthing
    container_name: syncthing
    hostname: my-syncthing
    environment:
      - PUID=1000
      - PGID=1000
    volumes:
      - /wherever/st-sync:/var/syncthing
    ports:
      - 8384:8384 # Web UI
      - 22000:22000/tcp # TCP file transfers
      - 22000:22000/udp # QUIC file transfers
      - 21027:21027/udp # Receive local discovery broadcasts
    restart: unless-stopped
```
