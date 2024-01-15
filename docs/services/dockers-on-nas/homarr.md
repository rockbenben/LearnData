---
article: false
title: Homarr：本地导航
order: 91
---

[Homarr](https://github.com/ajnart/homarr) 可以作为网站书签导航页工具，也可以集成各类状态仪表板，让你可以在一个方便的位置访问和控制一切。

比如 NAS 中内网和外网地址链接不同，你可以设置两套系统。

问题：

- 无法直接添加 `chrome://extensions/` 等非标准链接。
- 图标会远程调用 Github 图库，速度会慢些。

## 部署代码

```yml
version: '3'
services:
  homarr:
    container_name: homarr
    image: ghcr.io/ajnart/homarr:latest
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock # Optional, only if you want docker integration
      - /volume1/docker/homarr/configs:/app/data/configs
      - /volume1/docker/homarr/icons:/app/public/icons
      - /volume1/docker/homarr/data:/data
    ports:
      - '7575:7575'
```
