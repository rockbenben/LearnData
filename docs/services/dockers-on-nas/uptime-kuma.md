---
article: false
title: Uptime Kuma：轻量运维监控
order: 80
---

[Uptime Kuma](https://github.com/louislam/uptime-kuma) 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。如果您只需检查特定关键词是否存在于网页中，使用 Uptime Kuma 就足够了。

```yml
version: '3.8'

services:
  uptime-kuma:
    image: louislam/uptime-kuma:1
    container_name: uptime-kuma
    volumes:
      - /volume1/docker/uptime-kuma/data:/app/data
      # 用于 Docker 容器监控
      - /var/run/docker.sock:/var/run/docker.sock
    ports:
      - "3001:3001"  # <Host Port>:<Container Port>
    restart: always
```
