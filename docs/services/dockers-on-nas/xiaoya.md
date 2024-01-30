---
article: false
title: 小雅 alist：影视资源合集
order: 2
---

小雅 Alist 是一款基于阿里云盘的解决方案，提供了一个整合了丰富影音资源的平台，大大简化了用户寻找和管理资源的过程。通过 [xiaoyaliu/alist](https://hub.docker.com/r/xiaoyaliu/alist) Docker 镜像，你可以快速部署小雅 Alist 服务。具体的配置步骤和方法，可以参考 [xiaoya docker 配置指南](https://xiaoyaliu.notion.site/xiaoya-docker-69404af849504fa5bcf9f2dd5ecaa75f)。

在使用小雅 Alist 过程中，需要注意的一个关键点是定期更新 mytoken。你可以通过访问 <https://aliyuntoken.vercel.app/> 并使用阿里云盘 app 扫描网页上的二维码，轻松地获取最新的 token。

## 结合 Emby 使用

如果你已经在使用 Emby 作为个人媒体服务器，那么可以通过小雅将其丰富的影音内容集成到你的 Emby 服务器中，从而提升你的播放体验。详细的操作步骤和方法，请参阅 [《如何使用 EMBY 展示小雅内容》教程](https://xiaoyaliu.notion.site/d353c9ceb15444d7b8e21ce6097ed739?v=145044ac8252470a9feef094ff1db520)。

这种方法允许你将小雅的资源库与 Emby 紧密整合，利用 strm 文件将它们连接起来，并通过同步软件保持它们的内容同步。但是，在使用这种方法时，需要注意元数据可能会占用高达 160G 的空间，并且下载元数据的过程可能会对你现有的 Emby 数据造成影响。因此，在执行以下命令之前，请确保进行了配置备份。

```shell
# 一键下载元数据（不需进入docker），媒体库目录与小雅配置目录
bash -c "$(curl http://docker.xiaoya.pro/update_metainfo.sh)" -s /volume1/docker/emby /volume1/docker/xiaoya
```

## 无法下载问题

虽然小雅 Alist 提供了便捷的在线播放功能，但有时你可能更希望将资源下载到本地，尤其是在遇到播放问题时。

我尝试将资源保存到我的阿里云盘，但未能成功。即使我通过 `show_my_ali.txt` 文件在小雅 Alist 中成功显示了我的云盘内容，移动和复制操作仍然失败，错误提示为 `Request failed with status code 403`。目前，对于这个问题，我只能通过下载单个文件作为临时解决方案。

## 部署代码

```yml
version: "3.3"

services:
  xiaoya:
    image: xiaoyaliu/alist:latest
    container_name: xiaoya
    volumes:
      - /volume1/docker/xiaoya:/data
    ports:
      - 6789:80
    environment:
      - PUID=1026
      - PGID=100
      - TZ=Asia/Shanghai
    restart: always
```

通过上述的配置和步骤，你可以方便地集成和管理来自阿里云盘的丰富资源，并通过 Emby 享受高质量的播放体验。同时，也请留意资源管理和下载的相关问题，并根据实际情况进行调整和优化。希望你能通过小雅 Alist 和 Emby 打造出一个既私密又高效的个人影音库。

如果你在部署或使用过程中遇到任何问题，欢迎在评论区留言交流，我们可以一起探讨解决方案。
