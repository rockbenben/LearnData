---
article: false
title: Navidrome：开源音乐服务器
order: 1
---

Navidrome 为开源自托管音乐服务器，提供音频流媒体服务。

鉴于 Roon 的定价较高且 Emby 和 Plex 主要针对视频，Navidrome 成为了一个免费的选择。它支持广泛的音频格式，如 MP3、FLAC、AAC 和 OGG 等，并能有效地为多个用户管理其音乐库，确保每位用户的体验互不冲突。

想要了解其他安装方法，你可以查看 [Navidrome 的官方教程](https://www.navidrome.org/docs/installation/docker/)。

```yml
version: "3"
services:
  navidrome:
    image: deluan/navidrome:latest
    container_name: navidrome
    #user: 1000:1000 # should be owner of volumes #群晖应该是 1026:100 # 使用 `id 用户名` 可以查看代码
    ports:
      - "4533:4533"
    restart: unless-stopped
    environment:
      # Optional: put your config options customization here. Examples:
      ND_SCANSCHEDULE: 1h
      ND_LOGLEVEL: info  
      ND_SESSIONTIMEOUT: 24h
      ND_BASEURL: ""
    volumes:
      - "/volume1/docker/navidrome/data:/data"
      - "/volume4/Music/Audio:/music:ro"
```

不过，Navidrome 并不提供歌词下载功能。如果你需要下载内置的歌词，可以通过 [MusicTag](https://www.cnblogs.com/vinlxc/p/11347744.html) 实现。

对于播放器的选择，推荐使用国产的 [音流](https://aqzscn.cn/archives/stream-music-versions) 播放器。它当前正处于内测阶段，支持 iOS 和 Android 平台，能够显示下载的内置歌词。

然而，Navidrome 也有其局限性：它不支持显示多行歌词，搜索功能以专辑为单位，这使得直接搜索特定歌曲可能不会总是准确。另外，Windows 客户端不支持显示歌词功能。因此，我转向使用 Emby 来管理 PC 端音乐。然而，Emby 流媒体播放时偶尔会断播，与之对比，Navidrome 在音乐流播放方面更稳定，并且更适合用于移动端 API。
