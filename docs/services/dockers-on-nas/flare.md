---
article: false
title: Flare：快速导航页
order: 93
---

在众多本地导航工具中，[Flare](https://github.com/soulteary/docker-flare) 以其极速的加载时间和强大的功能脱颖而出。相较于其他需要 2-3 秒的加载时间，Flare 只需短短 0.2 秒即可完成加载，大幅提升了效率。

**优势**：

- **本地搜索书签**：Flare 支持高效的本地书签搜索功能，帮助用户迅速找到所需的信息。
- **批量导入书签**：这一功能使得链接的编辑和管理变得异常简便。如果你需要进行批量导入，可以使用我写的 [Flare 书签解析工具](https://tools.newzone.top/data-parser/flare)。

**存在的问题**：Flare 无法打开 `chrome://extensions/` 等非标准格式的链接。

## 部署代码

使用以下的 Docker 配置文件，你可以轻松部署 Flare，享受快速而强大的本地导航体验。

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
