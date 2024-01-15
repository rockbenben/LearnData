---
article: false
title: Uptime Kuma：轻量运维监控
order: 82
---

[Uptime Kuma](https://github.com/louislam/uptime-kuma) 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。对于检查特定关键词是否存在于网页中等轻量级监控是足够了。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。

虽然 Uptime Kuma 不能执行后续的自动化，但可以通过 webhook 触发其他操作。

## 部署命令

```yml
version: "3.8"

services:
  uptime-kuma:
    image: louislam/uptime-kuma:1
    container_name: uptime-kuma
    volumes:
      - /volume1/docker/uptime-kuma/data:/app/data
      # 用于 Docker 容器监控
      - /var/run/docker.sock:/var/run/docker.sock
    ports:
      - "3001:3001" # <Host Port>:<Container Port>
    restart: always
```
