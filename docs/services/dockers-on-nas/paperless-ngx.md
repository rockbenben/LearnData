---
article: false
title: Paperless-ngx：全文管理文档
order: 32
---

[Paperless-ngx](https://docs.paperless-ngx.com/) 是一个开源文档管理系统，可将您的物理文档转换为可搜索的在线档案。

Paperless-ngx 对文档执行 OCR，添加可搜索和可选择的文本，甚至可以对仅使用图像扫描的文档进行添加。支持 PDF、图片、纯文本文件、Office 文档（Word、Excel、Powerpoint 和 LibreOffice 等效项）等。

## 部署命令

```yml
# https://github.com/paperless-ngx/paperless-ngx/blob/main/docker/compose/docker-compose.portainer.yml
version: "3.4"
services:
  paperlessbroker:
    image: docker.io/library/redis:7
    container_name: paperlessbroker
    restart: unless-stopped
    volumes:
      - /volume1/docker/paperless-ngx/redisdata:/data

  paperlessdb:
    image: docker.io/library/postgres:15
    container_name: paperlessdb
    restart: unless-stopped
    volumes:
      - /volume1/docker/paperless-ngx/pgdata:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: paperless
      POSTGRES_USER: paperless
      POSTGRES_PASSWORD: paperless

  paperlesswebserver:
    image: ghcr.io/paperless-ngx/paperless-ngx:latest
    container_name: paperlesswebserver
    restart: unless-stopped
    depends_on:
      - paperlessdb
      - paperlessbroker
    ports:
      - "9035:8000"
    healthcheck:
      test:
        ["CMD", "curl", "-fs", "-S", "--max-time", "2", "http://localhost:8000"]
      interval: 30s
      timeout: 10s
      retries: 5
    volumes:
      - /volume1/docker/paperless-ngx/data:/usr/src/paperless/data
      - /volume1/docker/paperless-ngx/media:/usr/src/paperless/media
      - /volume1/docker/paperless-ngx/export:/usr/src/paperless/export
      - /volume1/docker/paperless-ngx/consume:/usr/src/paperless/consume
    environment:
      PAPERLESS_REDIS: redis://paperlessbroker:6379
      PAPERLESS_DBHOST: paperlessdb
      USERMAP_UID: 1026
      USERMAP_GID: 100
      # paperless 支持的语言（已内置英语、德语、意大利语、法语）
      # See https://packages.debian.org/search?keywords=tesseract-ocr-&searchon=names&suite=buster
      # for available languages.
      PAPERLESS_OCR_LANGUAGES: chi-sim chi-tra
      # OCR 语言
      PAPERLESS_OCR_LANGUAGE: eng+chi_sim
      PAPERLESS_SECRET_KEY: change-me
      PAPERLESS_TIME_ZONE: Asia/Shanghai
```

部署完成后，需用 ssh 终端执行命令。

```shell
sudo docker exec -it paperlesswebserver bash
python3 manage.py createsuperuser
```

依次输入 username、email、password。如果出现提示密码较弱，输入 y 继续。之后这些都可以在后台再修改。
