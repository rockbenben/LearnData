# Docker

## NAS 执行 docker

Docker Compose 是一个用来定义和运行复杂应用的 Docker 工具。一个使用 Docker 容器的应用，通常由多个容器组成。使用 Docker Compose 不再需要使用 shell 脚本来启动容器。

Compose 通过一个配置文件来管理多个 Docker 容器，在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。

推荐用 `docker-compose.yml` 来执行命令，安装后镜像会出现在 NAS Docker 中。

使用参考 [TTRSS docker-compose](http://ttrss.henry.wang/zh/#%E9%80%9A%E8%BF%87-docker-compose-%E9%83%A8%E7%BD%B2)。

1. 打开`控制面板`-`终端机和 SNMP`，启动 SSH 功能。
2. putty 连接群晖 SSH，进入`docker-compose.yml`所在路径，比如 `cd /volume3/storage`。
3. 通过终端在同目录下运行`sudo docker-compose up -d`后等待部署完成。
4. 关闭 SSH 功能。

Huginn 经常卡主，重新执行部署命令。

注意非 root 用户需在命令前添加`sudo`，否则会提示`Permission denied`。

```bash
sudo docker pull huginn/huginn
docker pull wangqiru/ttrss:latest
# docker pull wangqiru/mercury-parser-api:latest
# docker pull wangqiru/opencc-api-server:latest
docker-compose up -d # 如果您没有使用 docker-compose，我确信您知道该怎么做。
```

### 测试结果

- 升级镜像，不影响数据库
- 群晖导出只是导出镜像 + 配置，并不包括当前的配置。
- 更新镜像需要删除并重新创建容器（需要手动备份数据库文件），不删除重新创建容器则依然使用创建时的版本，或手动更新代码！
- 待测试：默认使用的是内置数据库，因此当群晖更新镜像，**数据会否丢失。**

## docker 命令

```bash
# 列出所有容器，有
sudo docker ps
# 停止容器运行，避免报错
sudo docker stop <CONTAINER ID>
# 导出指定容器，保存路径可使用 /volume4/Backup
sudo docker export <CONTAINER ID>><保存路径>
sudo docker export c867ca22741d>/volume4/Backup/qiandao.tar

#将容器96f7f14e99ab的/var/lib/mysql目录拷贝到主机的/volume4/Backup目录中(需停止容器)
sudo docker stop 1d6c6b36fa6c

sudo docker cp 1d6c6b36fa6c:/var/lib/mysql /volume4/Backup

# 进入容器
sudo docker exec -it 66f5cd1e373c /bin/bash
exit

sudo docker attach 66f5cd1e373c

#将主机/volume4/Backup/mysql目录拷贝到指定容器中
#复制后，huginn 无法正常启动
sudo docker cp /volume4/Backup/mysql 66f5cd1e373c:/var/lib/

sudo docker diff 66f5cd1e373c:/var/lib/mysql/

#huginn导出数据库
sudo docker run -it -p 49178:3000 -v /home/huginn/mysql-data:/var/lib/mysql huginn/huginn
sudo docker run -it -p 3000:3000 -v 66f5cd1e373c:/var/lib/mysql huginn/huginn
```
