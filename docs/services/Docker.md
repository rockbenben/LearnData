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
- 导出容器中的 mysql 数据库 `sudo docker exec <container_id> mysqldump -u root -p<your_mysql_root_password> your_database_name > <output_file>`。将 <container_id> 替换为实际的容器 ID，将 <output_file> 替换为你想要保存导出文件的路径和文件名。请将 <your_mysql_root_password> 替换为你的 MySQL root 用户密码。完成后，你将得到一个 MySQL 数据库备份文件。比如导出 Huginn 数据库，`sudo docker exec 3de3058e4468 mysqldump -u root -p<your_mysql_root_password> huginn_production > /volume1/docker/huginn/backup.sql`。

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

在 Windows 系统上，可以使用 [Docker Desktop](https://www.runoob.com/docker/windows-docker-install.html) 来管理容器，配置方法可参考 [Windows Docker 环境配置](https://newzone.top/posts/2022-09-05-stable_diffusion_ai_painting.html#docker-环境配置)。

Windows 本地磁盘被挂载到 Linux 的 mnt 目录下，因此，如果需要在 WSL 中访问 Windows 文件，需要在路径前添加 `/mnt/` 前缀，并将磁盘符号改为小写字母，将反斜杠 `\` 替换为正斜杠 `/`。例如，如果 Windows 文件位于「D:\Backup\Libraries\Desktop\stable-diffusion-webui-docker」目录下，则其在 Linux 中的路径为「/mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker」。Windows 上的 WSL 本地路径为 `\\wsl.localhost\`。

请注意：WSL 上的 Linux 环境与其他环境有所不同，须查看[在适用于 Linux 的 Windows 子系统 (WSL2) 上安装 Node.js](https://learn.microsoft.com/zh-cn/windows/dev-environment/javascript/nodejs-on-wsl)。

### 宝塔镜像

如果要在 Docker 上部署网站，推荐使用宝塔官方的集成镜像。它基于 CentOS 7.9，解决了 Docker 内部链接问题，还支持将数据库定时备份到本地。有关配置信息，请参考[宝塔面板定制 docker 镜像发布 - 集成 LN/AMP 支持](https://www.bt.cn/bbs/thread-79499-1-1.html)和 [Docker 安装宝塔环境](http://blog.huangyuqiang.cn/index.php/2022/11/02/docker%E5%AE%89%E8%A3%85%E5%AE%9D%E5%A1%94%E7%8E%AF%E5%A2%83/)。但是，该镜像不适用于 Huginn 的部署，因为 Huginn 不支持 CentOS。我曾尝试将安装命令从 apt-get 替换为 yum，但仍然无法部署。当我尝试在 Docker 中直接安装宝塔而不使用官方集成镜像时，遇到了无法启动数据库的问题。

```bash
# 按需求修改映射端口和目录，1024 以下的端口不能给普通用户用
sudo docker run -d --restart unless-stopped --name baota -p 8889:8888 -p 1033:22 -p 1044:443 -p 1081:80 -p 1889:888 -v /volume1/docker/btpanel/website_data:/www/wwwroot -v /volume1/docker/btpanel/mysql_data:/www/server/data -v /volume1/docker/btpanel/vhost:/www/server/panel/vhost btpanel/baota:lnmp
```

在站点设置中，绑定你的本地域名 home.xx.com 和内部地址 192.168.x.x，这样你就可以通过访问 home.xx.com:1081 来访问该站点。

- 默认地址 `http://192.168.x.x:8889/btpanel` 上的宝塔面板。
- 默认用户：btpanel
- 默认密码：btpaneldocker
- 镜像默认 SSH 密码：btpaneldocker

如果宝塔镜像仅用于测试环境，可以使用 `rm -f /www/server/panel/data/admin_path.pl` 命令来关闭面板入口。如果你关闭了 NAS 的 SSH 功能，宝塔面板也将停止，但不会影响已运行的网站。
