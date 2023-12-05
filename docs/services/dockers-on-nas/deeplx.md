---
article: false
title: DeepLX - 免费翻译接口
order: 13
---

[DeepLX](https://github.com/OwO-Network/DeepLX/) 是基于 DeepL 的免费翻译服务，可以将 DeepL Free API 转换为本地 API，以供第三方程序使用。

```yml
version: '3'

services:
  deeplx:
    image: ghcr.io/owo-network/deeplx:latest
    container_name: deeplx
    restart: always
    ports:
      - "32770:1188"
    # environment:
      # 如果设置了 TOKEN，则每个请求都需要包含 Authorization 标头。
      # - TOKEN=helloworld
      # 如果设置了 AUTHKEY，在 429 响应（请求过多/过快）后，会使用官方的 AuthKey 进行请求。如果同时使用多个 authKey，需要用逗号分隔。
      # - AUTHKEY=xxxxxxx:fx
```

如果你注册了 DeepL 的免费接口，建议设置 AUTHKEY 以加快翻译速度。
