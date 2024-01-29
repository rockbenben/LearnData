---
article: false
title: 反向代理：Nginx Proxy Manager
order: 101
---

反向代理，作为一种高效的后端工具，其主要功能是拦截所有传入的网络请求，并将它们统一转发到相应的服务器。通过反向代理，你可以轻松地通过不同的域名访问特定的 Docker 服务，而不需要记住复杂的端口号。

更重要的是，反向代理能够为你的链接提供 HTTPS 加密。未加密的 HTTP 链接如同裸奔在网络世界，容易被窥探和劫持。通过反向代理，所有传入的流量都被加密，极大地提升了数据传输的安全性，有效防止了流量被识别和篡改的风险。

常见的反向代理工具包括 Nginx Proxy Manager、nginxWebUI、Caddy 和 Lucky。

## Nginx Proxy Manager

[Nginx Proxy Manager](https://github.com/jlesage/docker-nginx-proxy-manager) 是一款集成了图形用户界面的反向代理工具。它的 SSL 证书有效期长达三个月，并可自动续期。由于国内家用宽带不支持 80 和 443 端口，因此这里未采用 Nginx Proxy Manager 官方容器，也不建议使用 Caddy。如果你对 Nginx Proxy Manager 不熟悉，也可以尝试国内开发的[nginxWebUI](https://www.nginxwebui.cn/product.html)，它同样提供了图形化配置、SSL 证书申请和自动续签等功能。

```yml
version: "3.8"
services:
  app:
    image: "jlesage/nginx-proxy-manager:latest"
    container_name: nginx-proxy-manager
    restart: unless-stopped
    ports:
      - "9001:8080"
      - "9002:8181"
      - "9003:4443"
    volumes:
      - /volume1/docker/nginx-proxy-manager/config:/config
```

要访问后台管理界面，请前往 `localhost:9002`。默认登录账户为 `admin@example.com`，密码为 `changeme`。系统将提示你在首次登录时更改这些凭证。^[[NAS 原来这么有用 篇 143：一个端口访问 NAS 所有服务，使用二级域名定义你的每一项服务](https://post.smzdm.com/p/az6989nn/)]

启用反向代理后，只需在路由器上开放 `9003` 端口（自己定），便可实现流量转发，无需在公网上开放其他端口。你可以通过 CNAME 将定制域名 `xxx.newzone.top` 解析到家庭 DDNS 域名 `yyy.newzone.top`。这样设置后，通过访问 `xxx.newzone.top:9003`，你便能够直接访问指定服务，并享受到自动部署的 SSL 加密带来的安全保障。若需切换至其他服务，只需更改域名的 `xxx` 部分即可。

## Caddy

[Caddy](https://caddyserver.com/) 的配置更加简便，但需注意，Caddy v2 默认采用 http-01 方式申请 HTTPS 证书，这要求你的域名能够通过公网的 80/443 端口进行所有权验证。在国内环境下，你可能需要手动配置证书。你可以通过 Certbot 免费申请证书，或选择在阿里云、腾讯云等平台申请一年有效期的免费证书。

```yml
version: "3.9"

services:
  caddy:
    image: caddy:latest
    container_name: caddy
    restart: unless-stopped
    ports:
      - "9080:80"
      - "9443:443"
      - "9443:443/udp"
    volumes:
      - /volume1/docker/caddy/Caddyfile:/etc/caddy/Caddyfile
      - /volume1/docker/caddy/site:/srv
      - /volume1/docker/caddy/caddy_data:/data
      - /volume1/docker/caddy/caddy_config:/config

volumes:
  caddy_data:
  caddy_config:
```
