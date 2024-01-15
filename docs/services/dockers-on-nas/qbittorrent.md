---
article: false
title: qBittorrent：种子&磁力下载
order: 5
---

[qBittorrent](https://registry.hub.docker.com/r/linuxserver/qbittorrent/) 是一款开源免费的种子和磁力链接下载工具。

## 使用问题

### 无法登录

为了解决登录和密码问题，请先停止容器，并将 `config/qBittorrent/qBittorrent.conf` 文件中的 `WebUI\AuthSubnetWhitelist` 设置为 `0.0.0.0/0`，这样即可无需密码登录 qBittorrent WebUI。

### PT 下载

对于 PT 下载，请关闭 `BitTorrent - DHT` 和其他隐私选项。

### 为什么下载没速度？

- NAS 中的下载路径须添加 Everyone 权限。
- 检查监听端口是否有修改。
- 配置是否使用了默认的 6881 端口。请修改所有默认端口，以避免可能的错误。

## 部署代码

部署后，进入「选项」>「连接」，将监听端口改为 49156。有关其他设置，请参考[群晖使用 qbittorrent](https://blog.csdn.net/weixin_45120915/article/details/114691473)。

```yml
# https://hub.docker.com/r/linuxserver/qbittorrent  注意将下载目录授权到 Everyone
version: "2.1"
services:
  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1026
      - PGID=100
      - TZ=Asia/Shanghai
      - WEBUI_PORT=49155
    volumes:
      - /volume1/docker/qbittorrent/config:/config
      - /volume2/Backup/downloads:/downloads
    ports:
      - 49155:49155
      - 49156:49156
      - 49156:49156/udp
    restart: unless-stopped
```
