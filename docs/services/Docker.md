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

## Windows Docker

Windows 使用 [Docker Desktop](https://www.runoob.com/docker/windows-docker-install.html) 来管理容器，方式参考 [Windows Docker 环境配置](https://newzone.top/_posts/2022-09-05-stable_diffusion_ai_painting.html#docker-环境配置)。

WSL 本地路径为 `\\wsl.localhost\`。Windows 本地磁盘挂载在 Linux 的 mnt 目录下，因此 WSL 调用 Windows 文件需先添加 `/mnt/` 前缀，然后把磁盘符号改为小写，并将反斜扛 `\` 替换为 `/`。假设 Windows 文件位于「D:\Backup\Libraries\Desktop\stable-diffusion-webui-docker」，转换为 Linux 路径则是「/mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker」。
