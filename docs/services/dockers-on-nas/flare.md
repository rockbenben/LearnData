---
article: false
title: Flare：快速导航页
order: 93
---

本地导航很多，但大多加载就得 2-3 秒，而 [Flare](https://github.com/soulteary/docker-flare) 只需要 0.2 秒。

**优势**：

- 支持本地搜索书签。
- 有类似于 excel 的链接编辑器。如果你需要批量导入，也可以用我写的 [Flare 书签解析工具](https://tools.newzone.top/data-parser/flare)。

**问题**：无法打开 `chrome://extensions/` 等非标准链接。

## 部署代码

```yml
version: '3.6'

services:
  flare:
    container_name: flare
    image: soulteary/flare
    restart: always
    # 默认无需添加任何参数，如有特殊需求
    # 可阅读文档 https://github.com/soulteary/docker-flare/blob/main/docs/advanced-startup.md
    command: flare
    # 启用账号登陆模式
    # command: flare --nologin=0
    # environment:
      # 如需开启用户登陆模式，需要先设置 `nologin` 启动参数为 `0`
      # 如开启 `nologin`，未设置 FLARE_USER，则默认用户为 `flare`
      # - FLARE_USER=flare
      # 指定你自己的账号密码，如未设置 `FLARE_USER`，则会默认生成密码并展示在应用启动日志中
      # - FLARE_PASS=your_password
      # 是否开启“使用向导”，访问 `/guide`
      # - FLARE_GUIDE=1
    ports:
      - 7570:5005
    volumes:
      - /volume1/docker/flare/app:/app
```
