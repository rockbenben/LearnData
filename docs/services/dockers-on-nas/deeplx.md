---
article: false
title: DeepLX - 免费翻译接口
order: 102
---

[DeepLX](https://github.com/OwO-Network/DeepLX/) 提供了一个基于 DeepL 的免费翻译服务。它可以将 DeepL Free API 转换为本地 API，使得第三方程序能够方便地使用 DeepL 提供的翻译功能。

以下是通过 Docker 部署 DeepLX 的配置文件，简单易懂，你可以快速启动你的翻译服务：

```yml
version: "3"

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

如果你已经注册了 DeepL 的免费接口，建议设置 AUTHKEY。这样，一旦遇到请求频率过快的情况，DeepLX 会自动使用官方的 AuthKey 进行请求，从而加快翻译速度，提高效率。
