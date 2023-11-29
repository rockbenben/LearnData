---
article: false
index: false
title: NAS 应用集合
icon: process
---

网络附加存储（NAS）日益重要，它提供了一个平台，可以部署各种 Docker 服务，进而完成个人的自动化工作流程。[awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted)可查看多种自部署服务。而使用 `docker-compose.yml` 文件进行 Docker 部署无疑是其中最为便捷的方法。具体如何使用 docker-compose，可以参考 [TTRSS docker-compose 的教程](http://ttrss.henry.wang/zh/#%E9%80%9A%E8%BF%87-docker-compose-%E9%83%A8%E7%BD%B2)。

操作步骤如下：

1. 打开「控制面板」，选择「终端机和 SNMP」，并开启 SSH 功能。
2. 使用 putty 或其他 SSH 客户端连接到群晖，并导航到 `docker-compose.yml` 文件的所在目录，例如：`cd /volume3/storage`。
3. 在该目录下，执行 `sudo docker-compose up -d` 并稍等片刻以完成部署过程。
4. 为了系统安全，完成操作后不要忘记关闭 SSH 功能。

注意：root 用户需在命令前添加 `sudo`，否则可能遇到 `Permission denied` 的提示。另外，可以使用 `sudo -i` 来直接获得 root 权限。

## 部署问题

### 路径对照

虽然你可以轻易地采用我所分享的 compose 设置进行安装，但对于 volumes 部分，你需要重点关注本地存储的路径选择。拿 emby 作例，电视剧路径配置可以为 `/volume1/tvshows:/data/tvshows`。

在这里，`/data/tvshows` 是 Docker 的固定内部路径，不能修改。而 `/volume1/tvshows` 则是你可以根据实际情况自由定义的本地路径。

### 用户与组身份

UID 和 GID 分别代表用户身份和组身份标识。在启动 Docker 容器时，默认情况下，容器进程是以 root 用户（UID 0）运行。然而，从安全的角度出发，非 root 的运行模式会更加安全，因为这可以在容器受到攻击时，降低攻击者获取主机高权限的风险。在常规的设置中，UID 和 GID 通常被设置为 1000。但例如在群晖系统中，第一个用户的 UID 实际为 1026，而 GID 则为 100。

值得注意的是，当外部系统的用户标识与 NAS 上的 UID/GID 存在不匹配的情况时，可能会出现权限不一致的问题，进而影响到文件的正常访问权限。

### 文件夹访问权限

对于如 Emby 这类依赖外部存储资源的 Docker 服务，文件夹的访问权限是不可或缺的。一个直接的解决方案是将文件夹的权限设置为“所有人”（Everyone）。然而，这样的做法在安全性上存在隐患。一旦有人获得 Docker 的操作权限，相关文件夹很可能会被擅自更改，这只能作为一个短期的权宜之计。

下图以 Emby 服务中的电视节目存储路径 `/volume1/tvshows` 为实例，为了确保正常运行，我们可以临时为该文件夹授权“所有人”权限，但建议后续寻求更安全的权限管理策略。

![](https://img.newzone.top/2023-09-16-08-42-22.png?imageMogr2/format/webp)

<!-- markdownlint-disable MD033 -->

<div class="catalog-display-container">
  <AutoCatalog base='/services/dockers-on-nas/' />
</div>

<!-- markdownlint-enable MD033 -->