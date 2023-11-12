---
article: false
title: MT Photos：分享家庭照片
order: 3
---

[MT Photos](https://mtmt.tech/) 是专为 NAS 用户设计的照片管理系统。它能自动整理和分类您的照片，包括按时间、地点、人物和照片类型分类。初次使用可获得一个月的免费授权，之后需要付费 99 元购买永久使用证。MT Photos 后台每周自动检查授权状态。

我选择购买的原因是因为它允许通过网页分享特定的照片集。这个功能大大简化了与家人分享宝宝照片和视频的过程。然而，在使用 MT Photos 时，我发现网页端的视频播放经常出现问题，有些视频可以通过切换至全屏模式来播放，而有些视频只显示 1 秒然后无法继续播放。我向开发者反馈了这个问题，对方表示将在后续解决，但没有给出具体的时间表。目前，我只能让家人安装应用来解决视频播放的问题。

```yml
version: "3"

services:
  mtphotos:
    image: mtphotos/mt-photos:latest
    container_name: mtphotos
    restart: always
    ports:
      - 8162:8063
      - 8163:8163
    volumes:
      - /volume1/docker/MTphotos/config:/config
      - /volume3/Pictures/upload:/upload
      - /volume3/Pictures/photos:/photos
    environment:
      - TZ=Asia/Shanghai
      # 是否启用内部 SSL
      #- SSL_NAME=xxx.newzone.top
      #- MT_SERVER_SSL_PORT=8163
      #- RAW_SUPPORT=open
  # 智能识别 API 容器，用于文本识别、以文搜图、场景识别。不需要的话，可删除本部分。
  mtphotosai:
    image: mtphotos/mt-photos-ai:latest
    container_name: mtphotosai
    restart: always
    ports:
      - 8164:8000
    environment:
      #在 MT Photos 后台添加 API 时需要填入 API_AUTH_KEY（字符串），请自行修改。
      - API_AUTH_KEY=apikey1
```
