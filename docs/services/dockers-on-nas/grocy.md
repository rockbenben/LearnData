---
article: false
title: Grocy：家庭杂货管理
order: 7
---

[Grocy](https://grocy.info/) 是一款自助式杂货和家庭管理解决方案，可用于记录物品信息并根据个性化需求进行管理。此外，它还支持手机端的条形码扫描功能，方便您清理家庭杂物，避免使用过期物品。Grocy 支持各种客户端，包括 iOS、Android、Windows，并且还提供 Home Assistant 插件支持。

Grocy Docker 端默认的账户密码是 `admin`。要将界面语言设置为中文，只需点击右上角的菜单，然后选择「User settings」，接着在语言选项中选择中文。

如果你想在移动设备上扫描物品的条形码，可以按照以下步骤操作：点击右上角的菜单，选择「管理 API 秘钥」，然后点击「添加」和「生成 API 秘钥」。接下来，点击生成的秘钥旁边的第二个按钮，使用移动客户端扫描显示在页面上的二维码。然而，个人认为在家庭使用中，扫码功能可能并不是必需的。

```yml
# https://hub.docker.com/r/linuxserver/grocy
version: "2.1"
services:
  grocy:
    image: lscr.io/linuxserver/grocy:latest
    container_name: grocy
    environment:
      - PUID=1026
      - PGID=100
      - TZ=Asia/Shanghai
    volumes:
      - /volume1/docker/grocy/config:/config
    ports:
      - 9020:80
    restart: unless-stopped
```
