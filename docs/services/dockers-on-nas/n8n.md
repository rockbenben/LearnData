---
article: false
title: n8n - 工作流自动化
order: 15
---

[n8n](https://github.com/n8n-io/n8n) 是一款可扩展的工作流程自动化工具。n8n 可用于自行托管，并允许你添加自定义函数、逻辑和应用程序。社区有多种第三方 API 节点，可连接主流海外服务。

对于初学者，建议按照[基于 n8n 的开源自动化：以滴答清单同步 Notion 为例](https://sspai.com/prime/story/automation-n8n) 教程进行操作，以熟悉 n8n 的广泛应用。有关使用案例的更多信息，请参阅[使用自动化工作流聚合信息摄入和输出](https://reorx.com/blog/sharing-my-footprints-automation/)。

## 部署 n8n

1. 执行 `git clone https://github.com/n8n-io/n8n.git` 命令下载 n8n 仓库文件。
2. 切换路径 `cd /volume3/storage/n8n/docker/compose/withPostgres`。
3. 运行 `sudo docker-compose up -d` 命令进行部署。

初次部署时，可能会出现 `for n8n Container "5a6edd16e779" is unhealthy.` 的提示。请忽略该提示，然后再次运行 `sudo docker-compose up -d` 命令即可解决问题。如果你更新了 git 仓库文件，重新部署时可能会提示无需更新。在这种情况下，你可以首先删除容器，然后重新部署。

```yml
# https://github.com/n8n-io/n8n/tree/master/docker/compose/withPostgres
# https://docs.n8n.io/hosting/installation/server-setups/docker-compose/#5-create-docker-compose-file
version: '3.8'

services:
  n8n-postgres:
    image: postgres:11
    container_name: n8n-postgres
    restart: always
    environment:
      - POSTGRES_USER
      - POSTGRES_PASSWORD
      - POSTGRES_DB
      - POSTGRES_NON_ROOT_USER
      - POSTGRES_NON_ROOT_PASSWORD
    volumes:
      - /volume1/docker/n8n/db:/var/lib/postgresql/data
      - ./init-data.sh:/docker-entrypoint-initdb.d/init-data.sh
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -h localhost -U ${POSTGRES_USER} -d ${POSTGRES_DB}']
      interval: 5s
      timeout: 5s
      retries: 10

  n8n:
    image: docker.n8n.io/n8nio/n8n
    container_name: n8n
    restart: always
    environment:
      - N8N_HOST=${N8N_HOST}
      - NODE_ENV=production
      - N8N_EDITOR_BASE_URL=${N8N_EDITOR_BASE_URL}
      - VUE_APP_URL_BASE_API=${N8N_EDITOR_BASE_URL}
      - WEBHOOK_URL=${N8N_EDITOR_BASE_URL}
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=n8n-postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=${POSTGRES_DB}
      - DB_POSTGRESDB_USER=${POSTGRES_NON_ROOT_USER}
      - DB_POSTGRESDB_PASSWORD=${POSTGRES_NON_ROOT_PASSWORD}
      - TZ=Asia/Shanghai
    ports:
      - 5720:5678
    links:
      - n8n-postgres
    volumes:
      - /volume1/docker/n8n/storage:/home/node/.n8n
    depends_on:
      n8n-postgres:
        condition: service_healthy
```

上述文件中，我将 `/volume1/docker/n8n` 指定为 n8n 的设置目录，需要将该路径的读写权限授予 n8n，否则项目启动时可能会报错。

## 环境变量

PostgreSQL 的默认数据库名称、用户和密码可以在当前目录的 `.env` 文件中更改。

```env
N8N_HOST=localnas.com
N8N_EDITOR_BASE_URL=http://localnas.com:5720/

POSTGRES_USER=changeUser
POSTGRES_PASSWORD=changePassword
POSTGRES_DB=n8n

POSTGRES_NON_ROOT_USER=changeUser
POSTGRES_NON_ROOT_PASSWORD=changePassword
```

`N8N_HOST` 和 `N8N_EDITOR_BASE_URL` 用于第三方 API 的回调访问。如果你启用了外网调用 n8n 的访问权限，建议开启 Two-factor authentication (2FA)，以防止 API 信息泄露。不建议将 `N8N_HOST` 设为内部域名，否则在后续设置中可能会出现 `Bad Request: bad webhook: An HTTPS URL must be provided for webhook` 错误。

## 其他操作记录

### Discord OAuth2

在 [Discord Applications](https://discord.com/developers/applications) 新建任意名称的应用，然后在 OAuth2>General > Redirects 中添加回调地址。

然后将 CLIENT ID 和 CLIENT SECRET 添加到 n8n 即可。

- [Where can I find my User/Server/Message ID?](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
