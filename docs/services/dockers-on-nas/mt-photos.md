---
article: false
title: MT Photos：分享家庭照片
order: 3
---

[MT Photos](https://mtmt.tech/) 是一款专为 Nas 用户设计的照片管理系统。它能自动整理和分类您的照片，包括按时间、地点、人物和照片类型分类。MT Photos 可在任何支持 Docker 的系统上运行，Windows 用户也可以直接运行服务端程序。一次性付费 99 元即可永久使用，系统将每周自动检查授权状态。其中一个突出的特点是支持通过网页分享特定的图片影集，这使得将大量宝宝照片分享给家人变得方便快捷。

```yml
version: "3"

services:
  mtphotos:
    image: mtphotos/mt-photos:latest
    container_name: mtphotos
    restart: always
    ports:
      - 8063:8063
      - 8163:8163
    volumes:
      - /volume1/docker/MTphotos/config:/config
      - /volume3/Pictures/upload:/upload
      - /volume3/Pictures/photos:/photos
    environment:
      - TZ=Asia/Shanghai
      - SSL_NAME=home.newzone.top
      - MT_SERVER_SSL_PORT=8163
```

我在使用 MT Photos 时发现，视频播放可能需要全屏模式才能正常播放，尽管其他用户反馈视频播放功能正常。
