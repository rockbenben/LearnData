---
article: false
title: Alist - 聚合网盘
order: 12
---

[Alist](https://alist.nn.ci/zh/guide/install/docker.html) 是支持多种存储的文件列表程序，支持本地存储、阿里云盘、OneDrive、Google Drive 等。

原本我的文件保存在蓝奏云上，但免费用户有 100M 的限制，因此我将一些要分享的大文件放在 Alist，作为私人轻量网盘分享应用和文件。

```yml
version: '3.3'
services:
  alist:
    image: xhofe/alist:latest
    container_name: alist
    volumes:
      - /volume1/docker/alist/data:/opt/alist/data
    ports:
      - 9044:5244
    environment:
      - PUID=1026
      - PGID=100
      - UMASK=022
      - TZ=Asia/Shanghai
    restart: always
```

## 重置密码

Alist 在启动时会随机生成密码。如果没有在后端看到密码，可以使用以下命令重新生成密码。

```Shell
# 随机生成一个密码
sudo docker exec -it alist ./alist admin random
# 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码
sudo docker exec -it alist ./alist admin set NEW_PASSWORD
```

## 添加存储

登录后，点击左侧菜单的「存储」，添加网盘。下方提供了添加驱动所需的几个必备参数说明。

- 「驱动」表示网盘的挂载方式，例如选择阿里云盘时，请选择「阿里云盘 Open」。
- 「挂载路径」相当于文件夹名称，你可以自由设置。我分享的是应用，所以挂载路径是 `/apps`。
- 「缓存过期时间」是存储的有效时间，默认为 30 分钟。如果你希望存储长期有效，可以将其修改为 0。
- 「根文件夹 ID」指的是在分享网盘中特定文件夹的标识。若要分享整个网盘，请使用 root。
- 「刷新令牌」是网盘的登录密钥，请按照 Alist 说明文档进行添加。

## 元信息

元信息可以为指定文件夹添加密码，防止网盘恶意访问/分享致帐号被冻结。元信息内的配置仅对**访客**生效。

- 密码：访问此路径需要密码。
- 写入：允许访客新建目录、新文件和上传文件。
- 隐藏：此路径要隐藏的对象，每行一个正则表达式。
- 说明：进入该路径时渲染的自述文件，支持 Markdown 内容或 Markdown 链接。
