---
article: false
title: n8n：工作流自动化
order: 81
---

[n8n](https://github.com/n8n-io/n8n) 是一款功能强大的工作流程自动化工具，可以自行托管，并允许用户添加自定义函数、逻辑和应用程序。n8n 社区提供了丰富的第三方 API 节点，方便用户连接和使用主流的海外服务。

对于初学者，建议先跟随教程 [基于 n8n 的开源自动化：以滴答清单同步 Notion 为例](https://sspai.com/prime/story/automation-n8n) 来熟悉 n8n 的基本操作和广泛应用。更多关于 n8n 的使用案例和详细介绍，可以参考 [使用自动化工作流聚合信息摄入和输出](https://reorx.com/blog/sharing-my-footprints-automation/)。

## 部署 n8n

1. 在桌面终端运行 `git clone https://github.com/n8n-io/n8n.git` 命令，下载 n8n 的仓库文件，并将其复制到 NAS。
2. 切换路径 `cd /volume3/storage/n8n/docker/compose/withPostgres`。
3. 运行 `sudo docker-compose up -d` 命令进行部署。

在初次部署时，你可能会遇到 `for n8n Container "5a6edd16e779" is unhealthy.` 的提示，这时只需忽略该提示，再次运行 `sudo docker-compose up -d` 命令即可解决问题。如果在更新 git 仓库文件后重新部署时遇到提示无需更新的情况，你可以先删除容器，然后重新部署。

下面是部署 n8n 的 Docker 配置文件：

```yml
# https://github.com/n8n-io/n8n/tree/master/docker/compose/withPostgres
# https://docs.n8n.io/hosting/installation/server-setups/docker-compose/#5-create-docker-compose-file
version: "3.8"

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
      test:
        [
          "CMD-SHELL",
          "pg_isready -h localhost -U ${POSTGRES_USER} -d ${POSTGRES_DB}",
        ]
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

在上述文件中，`/volume1/docker/n8n` 被指定为 n8n 的配置目录，你需要确保 n8n 有该路径的读写权限，否则项目可能会在启动时报错。

## 环境变量

在当前目录的 `.env` 文件中，可以更改 PostgreSQL 的默认数据库名称、用户和密码。

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

## 节点介绍

### HTTP Request

[HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) 节点允许你使用 REST API 发出 HTTP 请求，从任何应用程序或服务中查询数据。

在使用过程中，如果遇到网页端连接不稳定的问题，可以在节点设置中的 On Error 选项选择 Continue，并在 Options 中添加超时选项，例如 Timeout 10000 ms。

### IF

[IF](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if/) 节点允许你根据比较操作有条件地分割工作流。注意，布尔值的 true 和 false 需要使用双重花括号 `{{}}` 包围。

![](https://img.newzone.top/2023-12-12-22-43-08.png?imageMogr2/format/webp?imageMogr2/format/webp/thumbnail/400x)

### Github Trigger

Github Trigger 节点可以通过在 Github 上设置 Webhook 来获得推送通知。

如果遇到 `Workflow could not be activated: A webhook with the identical URL probably exists already. Please delete it manually on Github!` 的错误提示，通常是因为在仓库中存在多个相同的 Webhook 地址。你可以进入 repo 仓库，选择 `Settings > Code and automation > Webhooks`，手动删除重复的 Webhook 地址来解决这个问题。

## 使用 Tips

### 变量路径

对于一些复杂的输入变量，你可以直接使用 n8n 自带的工具来复制路径。在 INPUT 区域选择 JSON，点击要选择的参数，然后点击 INPUT 右上角的复制按钮，选择 `Copy Parameter Path`。

![](https://img.newzone.top/2023-12-14-12-37-36.png?imageMogr2/format/webp)

## 其他操作记录

### Discord OAuth2

在 [Discord Applications](https://discord.com/developers/applications) 中新建应用，然后在 OAuth2 > General > Redirects 中添加回调地址。

接着，将 CLIENT ID 和 CLIENT SECRET 添加到 n8n 中即可。

- [Where can I find my User/Server/Message ID?](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

通过上述步骤，你可以灵活地使用 n8n 来构建自动化工作流，实现数据的聚合、管理和分析。希望这些信息能够帮助你高效地使用 n8n，使你的工作和生活更加自动化和便捷。如果你在使用过程中遇到任何问题或有更多的经验分享，请在评论区留言，我们可以一起讨论和解决。
