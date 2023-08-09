---
article: false
title: 云计算服务
icon: class
order: 2
---

## CDN

国内服务器带宽限制较高，高带宽按量付费，随着访客数量的增加，费用也会急剧上升。而固定流量宽带，网站打开速度明显变慢。为减少服务器的带宽压力，可将静态文件、图片放在 CDN 上托管，而非服务器上。

### 静态文件

静态文件原本使用公开资源库，但国外库有被不稳定，国内又有时碰上服务崩溃，访问速度慢。最终还是选择自建部署 oss.newzone.top。

### 图床

自建图床的成本并不高，只需续费域名就能确保图片的长期保存。我目前使用七牛云配合 Picgo 来搭建图床，每月费用大约十几元。

曾经尝试过将第三方图床作为临时图床，但仅三天后，图片就全部失效了，导致了大量图片的丢失。这次经历让我深刻认识到，即使是临时需求，也不应依赖第三方图床。

### 全站加速

使用 CDN 全站加速，能实现用户就近访问，不过也存在些问题。

- 一个 CDN 只能为一个域名加速，加速的域名即为目标域名。
- CDN 服务商可能要求使用其自有 DNS，比如阿里云。
- 如果加速区域选择「全球（不包含中国内地）」。国内用户会访问国外 CDN 节点，而非国内的源站服务器。
- 迁移阿里云 DNS 时，注意关闭**静态协议跟随回源，否则会网站重复调整**。

## 第三方服务

### Vercel

Vercel 是一家提供开发、预览和部署网页前端的云平台服务商。它主要用于前端项目，不原生支持 PHP 和 node 项目，每月提供 100G 免费流量。

如果你的项目超出流量，可以参考 [How do I use a Cloudflare domain with Vercel?](https://vercel.com/guides/using-cloudflare-with-vercel)，使用 CloudFlare 进行代理，但需注意检查是否出现过多重定向。在国内可能定位到被屏蔽的 CloudFlare 节点，从而导致有时无法访问。Vercel 现已支持国内电话认证。如流量超出不多，可切换账户部署。

### fly.io

Fly.io 是一家提供容器化部署的服务商，能根据流量动态调整资源。由于国内无法部署 Google Auth，因此我将认证服务放在 Fly.io 上，使用了两台 shared-cpu-1x@512MB 的机器，每月账单 1.5 刀。但不清楚是不是配置不够，fly.io 的机器很容易报错。

```shell
# 初次构建
fly launch
# 部署，官方建议开两台机器
flyctl deploy

# 将机器内存改为 512
fly scale memory 512
# 控制机器数量，默认为 2
fly scale count 2
# 无法连接docker，则使用
fly wireguard websockets enable
```

### CloudFlare Tunnel

CloudFlare Tunnel 可作为 NAS 的轻量级扩展，一个 Tunnel 能将多个服务托管到不同的子域名。具体部署流程，请参考 [CloudFlare Tunnel 免费内网穿透的简明教程](https://sspai.com/post/79278)。需注意，该服务与宝塔的官方 Docker 镜像存在冲突，因此不要同时使用。

目前，我已通过 CloudFlare Tunnel 部署了 RSS 订阅源、GoogleAuth、PodCast 等服务。

```shell
# 本地 Dockerfile 架构镜像
sudo docker build -t strapiauth .
sudo docker run -d -p 1337:1337 --name strapiauth strapiauth

# tunnel
sudo docker run --name cloudflaretunnel cloudflare/cloudflared:latest tunnel --no-autoupdate run --token 
```

### 腾讯云境外

腾讯云香港已无轻量服务器供应，但可购买新加坡、日本的服务器。价格实惠，2 核 2G，30M 宽带，每月 33 元。但国内连接速度较慢，仅适合境外用户。
