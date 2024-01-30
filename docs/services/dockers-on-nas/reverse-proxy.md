---
article: false
title: 反向代理：Nginx Proxy Manager
order: 101
---

反向代理作为一种重要的网络服务，能有效地将所有传入的网络请求统一转发到相应的后端服务器。通过这种方式，我们不仅能通过不同的域名方便地访问各个 Docker 服务，而且还能避免记忆复杂的端口号，极大地简化了网络管理。

更为关键的是，反向代理为我们的网络连接提供了 HTTPS 加密，这是数据安全传输的重要保障。未加密的 HTTP 连接像是在网络世界中无防备地暴露，极易受到窥探和劫持。通过配置反向代理，所有的传入流量都将被加密处理，有效防止数据被识别和篡改的风险。

市面上常见的反向代理工具有多种，包括 Nginx Proxy Manager、nginxWebUI、Caddy 和 Lucky 等。

## Nginx Proxy Manager

[Nginx Proxy Manager](https://github.com/jlesage/docker-nginx-proxy-manager) 提供了一个的图形界面，方便用户管理反向代理和 SSL 证书。它的 SSL 证书有效期长达三个月，并支持自动续期。由于国内家用宽带常常不支持开放 80 和 443 端口，所以这里推荐使用一个修改版的 Nginx Proxy Manager 而非官方容器，同时也不建议使用 Caddy。如果你对 Nginx Proxy Manager 还不够熟悉，也可以尝试使用国内开发的 [nginxWebUI](https://www.nginxwebui.cn/product.html)，它也提供了图形化配置、SSL 证书申请和自动续签等功能。

下面是通过 Docker 部署 Nginx Proxy Manager 的配置文件：

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

要访问管理后台，请前往 `localhost:9002`。默认的登录账户是 `admin@example.com`，密码是 `changeme`。系统会在你首次登录时提示你更改这些凭证。

部署了反向代理后，只需要在路由器上开放 `9003` 端口（或你自定义的其他端口），就可以实现流量的转发，无需在公网上开放其他端口。你可以通过 CNAME 记录，将自定义域名 `xxx.newzone.top` 解析到你的家庭 DDNS 域名 `yyy.newzone.top`。这样，通过访问 `xxx.newzone.top:9003`，你就能直接访问指定的服务，并享受到自动部署的 SSL 加密带来的安全保护。若需要切换至其他服务，只需更改域名 `xxx.newzone.top` 中的 `xxx` 部分即可。

## Caddy

[Caddy](https://caddyserver.com/) 提供了更为简便的配置方法。但要注意，Caddy v2 默认使用 http-01 方式申请 HTTPS 证书，这要求你的域名能够通过公网的 80/443 端口进行所有权验证。在国内环境下，你可能需要手动配置证书。可以选择通过 Certbot 免费申请证书，或在阿里云、腾讯云等平台申请有效期为一年的免费证书。

以下是通过 Docker 部署 Caddy 的配置文件：

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

通过上述配置，无论是 Nginx Proxy Manager 还是 Caddy，你都可以轻松地部署和管理你的反向代理服务。这将为你的网络环境提供更高的数据安全性和便捷的访问管理。希望这些信息能帮助你更好地利用反向代理技术，为你的网络环境带来显著的改善。如果你在部署或使用过程中遇到任何问题，欢迎在评论区留言交流，我们可以一起探讨解决方案。
