---
article: false
title: SRS Stack：直播推流
order: 83
---

SRS 是一个免费开源的实时视频服务器应用，通过 [SRS Stack](https://github.com/ossrs/srs-stack) 能够轻松在多平台上进行简单高效的直播同步推流部署。

在我的日常工作和学习中，我通常会开启直播，但如果推送多路流，会对上传带宽造成较大压力。通过使用 SRS Stack，这个问题得到了解决。

目前，我将电脑上的 OBS 推流到 NAS 上的 SRS Stack，然后在 NAS 上进行多平台统一转播。这样一来，我能够节省上行带宽，同时避免客户端推送多路流。然而，需要注意的是，SRS Stack 目前仅支持最多同时进行三个平台的转播。如果你需要更多平台，可以运行多个实例。

```yml
version: "3"
services:
  srs-stack:
    image: registry.cn-hangzhou.aliyuncs.com/ossrs/srs-stack:5
    container_name: srs-stack
    volumes:
      - /volume1/docker/srs-stack/data:/data
    ports:
      - 23322:2022
      - 23323:2443
      - 1935:1935
      - 8000:8000/udp
      - 10080:10080/udp
    restart: always
```
