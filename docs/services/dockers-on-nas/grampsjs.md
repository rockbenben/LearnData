---
article: false
title: Gramps.js：在线家谱
order: 35
---

[Gramps.js](https://github.com/gramps-project/Gramps.js) 是一款用于协作族谱编辑与展示的 Web 开源应用。它基于领开源家谱桌面应用程序 Gramps，并可与 Gramps 交互操作。不过，Gramps.js 的输入过程相对复杂，需要分别添加成员、家庭、事件、地点等元素，然后将它们组合在一起。第一次配置可能会花费一些时间，使用教程参考 [Gramps Web User guide](https://www.grampsweb.org/user-guide/)。

我打算将家里的族谱电子化，并迁移到 Gramps 上。

```yml
# https://www.grampsweb.org/Deployment/
# https://github.com/gramps-project/web/blob/main/examples/docker-compose-base/docker-compose.yml

version: "3.7"

services:
  grampsweb: &grampsweb
    image: ghcr.io/gramps-project/grampsweb:latest
    container_name: grampsweb
    restart: always
    ports:
      - "23300:5000" # host:docker
    environment:
      GRAMPSWEB_TREE: "Gramps Web" # will create a new tree if not exists
      GRAMPSWEB_CELERY_CONFIG__broker_url: "redis://grampsweb_redis:6379/0"
      GRAMPSWEB_CELERY_CONFIG__result_backend: "redis://grampsweb_redis:6379/0"
      GRAMPSWEB_RATELIMIT_STORAGE_URI: redis://grampsweb_redis:6379/1
    depends_on:
      - grampsweb_redis
    volumes:
      - /volume1/docker/grampsjs/users:/app/users # persist user database
      - /volume1/docker/grampsjs/index:/app/indexdir # persist search index
      - /volume1/docker/grampsjs/thumb_cache:/app/thumbnail_cache # persist thumbnails
      - /volume1/docker/grampsjs/cache:/app/cache # persist export and report caches
      - /volume1/docker/grampsjs/secret:/app/secret # persist flask secret
      - /volume1/docker/grampsjs/db:/root/.gramps/grampsdb # persist Gramps database
      - /volume1/docker/grampsjs/media:/app/media # persist media files
      - /volume1/docker/grampsjs/tmp:/tmp

  grampsweb_celery:
    <<: *grampsweb # YAML merge key copying the entire grampsweb service config
    ports: []
    container_name: grampsweb_celery
    depends_on:
      - grampsweb_redis
    command: celery -A gramps_webapi.celery worker --loglevel=INFO

  grampsweb_redis:
    image: redis:alpine
    container_name: grampsweb_redis
    restart: always
```
