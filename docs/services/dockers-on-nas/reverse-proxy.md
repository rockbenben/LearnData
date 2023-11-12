---
article: false
title: 反向代理：Nginx Proxy Manager
order: 99
---

反向代理是一种方便的后端工具，其作用是拦截所有传入请求并进行统一的转发管理。在 Docker 容器管理领域，使用反向代理可以让你摆脱繁琐的端口号记忆，只需通过不同的域名即可访问特定的 Docker 服务。常见的反向代理工具包括 Nginx Proxy Manager、nginxWebUI、Caddy 和 Lucky。

## Nginx Proxy Manager

[Nginx Proxy Manager](https://github.com/jlesage/docker-nginx-proxy-manager) 具备图形用户界面，其 SSL 证书有效期为 3 个月，到期时会自动续期。由于国内家用宽带不支持 80 和 443 端口，因此这里未采用 Nginx Proxy Manager 官方容器，同时由于端口原因也不建议使用 Caddy。如果你对 Nginx Proxy Manager 不熟悉，也可以尝试国内开发的[nginxWebUI](https://www.nginxwebui.cn/product.html)，它同样集成了图形化配置、SSL 证书申请、自动续签 SSL 证书等功能。

```yml
version: '3.8'
services:
  app:
    image: 'jlesage/nginx-proxy-manager:latest'
    container_name: nginx-proxy-manager
    restart: unless-stopped
    ports:
      - '9001:8080'
      - '9002:8181'
      - '9003:4443'
    volumes:
      - /volume1/docker/nginx-proxy-manager/config:/config
```

要访问后台管理界面，请前往 `localhost:9002`。初始登录账户为 `admin@example.com`，密码为 `changeme`。初次登录时，系统会提示你修改默认账户和密码。^[[NAS 原来这么有用 篇 143：一个端口访问 NAS 所有服务，使用二级域名定义你的每一项服务](https://post.smzdm.com/p/az6989nn/)]

反向代理启用后，路由器只需要开放 9003 端口即可实现流量转发，避免了我们在公网上开放不必要的端口。接下来，通过 CNAME 方式将你定制的域名 xxx.newzone.top 解析到你家中的 DDNS 域名 yyy.newzone.top。完成设置后，访问 xxx.newzone.top:9003 即可访问指定服务，并享受自动 SSL 部署的便利。在需要切换到其他服务时，只需更改 xxx 部分的服务名即可。

## Caddy

[Caddy](https://caddyserver.com/) 的配置更加简便，但需要注意的是，Caddy v2 在默认情况下使用 http-01 方式进行 HTTPS 证书申请，这要求你能够通过公网访问域名的 80/443 端口，以进行所有权验证。因此，在国内的情况下，你可能需要手动指定证书。你可以选择通过 Certbot 免费申请证书，或者在阿里云、腾讯云等平台免费申请一年有效的证书。

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
