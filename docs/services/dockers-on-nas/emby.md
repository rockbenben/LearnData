---
article: false
title: Emby：打造你的家庭媒体中心
order: 2
---

Emby 为家庭提供了一个强大的媒体服务器，但在配置过程中，记得为你的媒体库目录授权“Everyone”，以确保 Emby 能够无障碍地访问它。为此，请打开共享文件夹的权限设置，选择对应的系统用户，并确保其具有读写权限。

使用 Emby 客户端播放视频需要 Emby Premiere。一次性购买终身会员的价格为 119 美元，但在黑五期间，通常可以以 99 美元的折扣价格获得。

```yml
# https://hub.docker.com/r/linuxserver/emby
version: "2.1"
services:
  emby:
    image: lscr.io/linuxserver/emby:latest
    container_name: emby
    environment:
      - PUID=1026
      - PGID=100
      - TZ=Asia/Shanghai
    volumes:
      - /volume1/docker/emby/config:/config
      # 媒体库映射
      - /volume1/tvshows:/data/tvshows
      - /volume4/movies:/data/movies
      - /volume3/Anime:/data/anime
      - /volume4/Documentary:/data/documentary
      - /volume4/Music/MV:/data/MV
      #- /opt/vc/lib:/opt/vc/lib #optional
    ports:
      - 49172:8096
      - 49171:8920
    restart: unless-stopped
```

## 安全地从外部访问

如果你计划从外部访问 Emby，请务必启用 HTTPS。具体步骤可以参考[这里](https://www.bilibili.com/read/cv14814465/)。简单来说：

1. 确保你的家庭网络已设置了 DDNS（通常通过路由器完成）。
2. 下载与你的域名匹配的 Tomcat 证书版本。
3. 解压后，你会看到一个 pfx 文件和一个包含密码的 txt 文件。
4. 将它们都放置在 config 目录的特定路径中。
5. 接下来，在 Emby 的“服务器 > 网络”设置中，输入你的公共端口和 DDNS 域名。
6. 建议开启安全连接模式，这样可以更好地保护你的数据安全。

![](https://img.newzone.top/2023-09-15-05-32-43.png?imageMogr2/format/webp)
