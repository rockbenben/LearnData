---
article: false
title: 反向代理：Nginx Proxy Manager、caddy
order: 99
---

反向代理：Nginx Proxy Manager、caddy、lucky。

## Nginx Proxy Manager

[Nginx Proxy Manager](https://github.com/jlesage/docker-nginx-proxy-manager) 具备图形用户界面，其证书有效期为 3 个月，到期时会自动续期。由于国内家用宽带不支持 80 和 443 端口，因此这里未采用 Nginx Proxy Manager 官方容器，也不推荐使用 caddy 作为反向代理。

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

后台管理界面，请前往 `localhost:9002`。初始登录账户为 `admin@example.com`，密码为 `changeme`。首次登录时，系统会提示你修改默认账户和密码。^[[NAS 原来这么有用 篇 143：一个端口访问 NAS 所有服务，使用二级域名定义你的每一项服务](https://post.smzdm.com/p/az6989nn/)]

## caddy

[caddy](https://caddyserver.com/) 的配置更加简便，但需要注意的是，Caddy v2 在默认情况下使用 http-01 方式进行 HTTPS 证书申请，这要求你能够通过公网访问域名的 80/443 端口，以进行所有权验证。因此，在国内的情况下，你可能需要手动指定证书。你可以选择通过 Certbot 免费申请证书，或者在阿里云、腾讯云等平台免费申请一年有效的证书。

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
