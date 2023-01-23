---
article: false
title: Docker
icon: any
order: 4
---

Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。

Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来管理多个 Docker 容器，并配置应用程序需要的所有服务。在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。强烈推荐使用 Compose 搭建所有 Docker，流程参考 [NAS 上搭建 Docker](../services/NAS.html#nas-docker)。

## Docker 命令

Docker 使用查看 [Docker — 从入门到实践](https://yeasy.gitbook.io/docker_practice/introduction/what)。

- 列出所有容器：`sudo docker ps -a`。
- 停止容器运行：`sudo docker stop <CONTAINER ID/NAME>`。部分容器名有可能无法识别，最好在容器名称中添加数字。
- 删除指定容器：`sudo docker rm <CONTAINER ID/NAME>`，删除前需先停止容器。
- 清理容器（慎重）：`sudo docker system prune -a`，用于清理磁盘，删除关闭的容器、无用的数据卷和网络，以及无 tag 和没使用的镜像。
- 清理数据卷（慎重）：`sudo docker volume prune`，关闭的容器数据卷会被删除，有可能破坏有用数据，需极度谨慎。

## 定制 Docker 镜像

官方镜像很多时候不符合我们的要求，可以按[使用 docker commit 将修改后的容器保存为镜像及其使用注意事项](https://blog.csdn.net/a772304419/article/details/123199579)定制属于你自己镜像。

```bash
sudo docker commit \
    --message "基于 Ubuntu 18.04 构建的 Huginn" \
    ubuntu \
    huginnxubuntu
```

## Dockerfile 构建镜像

```bash
    build:
      context: /volume1/docker/danmuji
      dockerfile: Dockerfile
```

## 其他使用

### Windows Docker

Windows 使用 [Docker Desktop](https://www.runoob.com/docker/windows-docker-install.html) 来管理容器，方式参考 [Windows Docker 环境配置](https://newzone.top/posts/2022-09-05-stable_diffusion_ai_painting.html#docker-环境配置)。

WSL 本地路径为 `\\wsl.localhost\`。Windows 本地磁盘挂载在 Linux 的 mnt 目录下，因此 WSL 调用 Windows 文件需先添加 `/mnt/` 前缀，然后把磁盘符号改为小写，并将反斜扛 `\` 替换为 `/`。假设 Windows 文件位于「D:\Backup\Libraries\Desktop\stable-diffusion-webui-docker」，转换为 Linux 路径则是「/mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker」。

注意：WSL 上的 Linux 环境与其他不同，须查看[在适用于 Linux 的 Windows 子系统 (WSL2) 上安装 Node.js](https://learn.microsoft.com/zh-cn/windows/dev-environment/javascript/nodejs-on-wsl)。

### 宝塔镜像

如果要在 Docker 上部署网站，推荐宝塔官方的集成镜像，其基于 CentOS 7.9，解决了 Docker 内部链接问题，还可以用计划任务将数据库定时备份到本地，配置参考[宝塔面板定制 docker 镜像发布 - 集成 LN/AMP 支持](https://www.bt.cn/bbs/thread-79499-1-1.html)和 [Docker 安装宝塔环境](http://blog.huangyuqiang.cn/index.php/2022/11/02/docker%E5%AE%89%E8%A3%85%E5%AE%9D%E5%A1%94%E7%8E%AF%E5%A2%83/)。不过该镜像不适合 Huginn 部署，Huginn 不支持 CentOS，将安装命令从 apt-get 替换为 yum，依然无法部署。

测试过不用官方镜像，直接在 Docker 中安装宝塔，出现数据库不启动的问题。

如果宝塔镜像只是测试环境，可以用 `rm -f /www/server/panel/data/admin_path.pl` 关闭面板入口。
