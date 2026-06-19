---
article: false
title: 静态部署
description: 静态网站部署全解析。对比主流静态资源库与Vercel等平台，提供GitHub Actions自动同步FTP、OSS实战教程，助你选择并实施高效部署策略。
icon: fa6-solid:circle-nodes
order: 1
---

一般博客、文本工具都可以通过静态部署。本文将介绍当前主流的静态部署方案，涵盖国内外 CDN、部署平台、自托管方式，以及通过 GitHub Actions 实现自动化部署的具体流程。

## 静态托管

在国内，由于某些海外 CDN（如 UNPKG、jsDelivr）存在被墙风险，建议使用国内 CDN 或将所需依赖包本地下载后再上传至国内服务器。

### 常见静态资源库

| 名称                                          | 优势                             | 状态                                     |
| --------------------------------------------- | -------------------------------- | ---------------------------------------- |
| [Staticfile CDN](https://www.staticfile.net/) | 国内维护最稳定，资源丰富         | ✅ 推荐使用                              |
| [字节 CDN](https://cdn.bytedance.com/)        | 访问速度快，缓存期长（最长一年） | ⚠️ 自 2022 年起不再更新                  |
| UNPKG                                         | 无需指定版本，自动最新           | ❌ 存在被墙风险，不推荐直接使用          |
| [NPM MIRROR](https://npmmirror.com/)          | 查询 npm 信息方便                | ❌ 不能用于 CDN 加载                     |
| GitHub 仓库资源                               | 可搭配第三方 CDN 使用            | ⚠️ jsDelivr、Statically 已无法在国内访问 |

> 建议：将所需的 npm 包通过 `npm install` 安装到本地，再上传至 OSS 或七牛云等国内云平台，实现本地构建 + 自托管部署，保证资源稳定性。

### NPM 包

- [NPM MIRROR](https://npmmirror.com/)：NPM 项目的国内镜像，不能做静态托管用途。`https://registry.npmmirror.com/项目名/版本号` 可以看见项目的各种信息，但看不了里面的文件。
- UNPKG：默认为最新版本，无需 `@latest` 标签。
  - 将静态文件发布为 npm 包，参考[一分钟教你发布 npm 包](https://segmentfault.com/a/1190000023075167)。
  - 加速 CDN：在 [npm 官方源](https://www.npmjs.com/)中搜索包位置，然后使用前缀 `https://unpkg.com/`。
- UNPKG 镜像：有资源可以用服务器自建服务，反向代理 unpkg。
  - ~~饿了么 CDN（已关）：国内唯一能用的 npm 镜像，2022.07.13 发现外部访问被拒绝。之前饿了么并没说支持对外，可能已经彻底取消了。使用饿了么 CDN 时，注意 `https://npm.elemecdn.com/react@latest/` 需要时间更新，具体频率未知，可固定大版本号来获取更新 `https://npm.elemecdn.com/react@^18/`。~~
- GitHub：基于 GitHub 公共仓库的资源托管，资源不会失效，但有时需要根据 CDN 服务商而更换域名。
  - ~~[Statically](https://statically.io/)：jsDeliver 的替代品，在中国大陆所有地区连接异常。~~
  - ~~jsDelivr（已墙）：速度最快，原本是最稳的，但域名暴雷后，经常断开，2022.06.01 彻底打不开。配合 Github action，更新后自动访问 jsdelivr CDN 缓存刷新链接，保持页面常新。刷新命令参考 `curl https://purge.jsdelivr.net/gh/username/project/file`。~~

由于第三方托管不够稳定，目前我已改为自托管部署静态资源。

## 部署平台

### 部署平台对比

| 平台            | 国内访问速度 | 特点                                  | 推荐程度 |
| --------------- | ------------ | ------------------------------------- | -------- |
| **Cloudflare**  | ❌ 慢        | 易用，支持 Git 部署，海外访问快       | ⭐⭐⭐   |
| **Netlify**     | ❌ 慢        | 国内图片加载易卡顿                    | ⭐⭐     |
| **Vercel**      | ❌ 被污染    | 国内 DNS 污染严重，建议绑定自定义域名 | ⭐⭐     |
| **Gitee Pages** | ✅ 快        | 实名认证，限制多，不支持自定义域名    | ⭐       |
| **自托管 OSS**  | ✅ 快        | 稳定，控制力强，推荐使用              | ⭐⭐⭐⭐ |

> 🚨 国内部署平台大多要求实名认证，国外平台访问受限，建议搭配国内服务器或 OSS 静态存储使用。

### 免费部署

- Cloudflare 提供了 Pages 和 Workers 两种部署方式：
  - Pages 部署简便，访问速度在海外较快，但在国内可能存在不稳定情况。同时，page.dev 域名有时可能会遭到屏蔽。为此，你可以选择购买一年期的低成本临时域名以规避此问题。若通过 Git 仓库部署页面，需根据 [Cloudflare 语言支持及工具](https://developers.cloudflare.com/pages/configuration/language-support-and-tools/)指南调整部署环境变量。例如，若使用 yarn 作为构建工具，默认版本随构建镜像而定（较新的 v3 镜像默认 Yarn 4.x），你可能需要手动设置环境变量 `YARN_VERSION`（如 `1.22.21`）。
  - [Workers](../deploy/Cloudflare.md#反向代理)：复制镜像网站，可直接访问，但反向代理稳定性成疑。
- Netlify：国内速度慢点，图片容易卡死，但还算稳定。
- Vercel：部署快，但打开越来越慢了。推荐使用 GitHub 账户登录，需绑定手机号（不支持 Voice），支持国内手机号。2022.08.26，「\*.vercel.app」域名被 DNS 污染，需要绑定自定义域名。
- 国内平台：Gitee、WuliHub、CODING，都需要实名认证。

### 收费部署

- OSS + 域名 CNAME：这方案可以避免域名备案。但目前国内各平台已经限制了这点，当通过浏览器访问 OSS 静态网页类型文件，会以附件形式进行下载。可以将 OSS 部署在香港，并绑定自定义域名。
- Azure：在 Azure Static Web Apps 的免费计划中，每月提供 100GB 的免费流量，超出后将无法访问。如果需要使用 CDN，必须升级到 Azure Static Web Apps 的标准计划，并启用企业级边缘。若想切换回免费版本，需先关闭企业级边缘，整个过程需要 48 小时。
  - 尝试将带 api Nextjs14 的项目部署到 Azure，但经常打不开，提示 `Backend Call fail`。可能是后端出问题。部署在 Vercel 上是正常的。
- AWS: 邮箱注册，不过需要信用卡认证。

## GitHub 同步到服务器

代码、文章推送到 GitHub 后，会自动生成可访问的网页，但国内访问 GitHub Pages 的速度极不稳定，为了确保网站能被正常访问，必须增加国内的访问节点。

很多人选择 Gitee Pages 作为国内节点，GitHub Actions 将新文档同步到 Gitee，生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 的限制非常多，免费版无法自定义域名，必须实名验证，更别提近期的下架风波。因此，我没选 Gitee，而是把文档同步到国内服务器（域名需备案）。

::: tip 文件夹名称请勿使用大写字母，否则在同步时容易产生错误。
:::

### 同步到 FTP

如果你有 FTP 服务器，可使用 [FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action) 将 github 代码推送到服务器上。Actions 步骤参考 [GitHub 说明](../deploy/GitHub.md)。

```bash
on: push
name: 🚀 Deploy website on push
jobs:
  web-deploy:
    name: 🎉 Deploy
    runs-on: ubuntu-latest
    steps:
    - name: 🚚 Get latest code
      uses: actions/checkout@v3

    - name: 📂 Sync files
      uses: SamKirkland/FTP-Deploy-Action@4.3.3
      with:
        server: ${{ secrets.ftp_host }}
        username: ${{ secrets.ftp_username }}
        password: ${{ secrets.ftp_password }}
        port: ${{ secrets.ftp_port }} # 建议更改默认的 21 端口
```

新建 FTP 时，需在云服务商的安全组和服务器上开放 FTP 端口，并临时暂停宝塔系统加固等安全插件（新建 FTP 容易与安全插件冲突）。

如果出现 `FTPError: 530 Login authentication failed`，则说明 FTP 密码错误或账号不存在，需用 FileZilla 测试 FTP 的有效性。确认 FTP 无效后，检查 FTP 密码是否填写正确，是否只有大小写字母和数字。如果密码错误，则在 github secrets 重新 update 密钥。如果密码正确，则进入 `/www/server/pure-ftpd/etc/pureftpd.passwd`，检查是否有该 FTP 账户。没有 FTP 账户的话，**暂停宝塔系统加固**等安全插件后，重新新建 FTP。

如果出现 `Error: Timeout (control socket)`，则说明同步服务器超时，可进入 Actions 页面点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭防火墙，测试是否 GitHub 服务器被拉黑了。

### SSH 同步

如果你有服务器的 SSH 权限，可以使用 [web-deploy](https://github.com/SamKirkland/web-deploy) 以 SSH 同步方式发布页面。但与 FTP 相比，不确定安全性、速度、时间是否会区别。我尝试连接一直报错 `Permission denied (publickey,password)`。（有可能是服务器需要非 root 用户，adduser 一直加不上。）

```bash
on: push
name: Publish Website
jobs:
  web-deploy:
    name: 🚀 Deploy Website Every Commit
    runs-on: ubuntu-latest
    steps:
    - name: 🚚 Get Latest Code
      uses: actions/checkout@v5

    - name: 📂 Sync Files
      uses: SamKirkland/web-deploy@v4
      with:
        source-path: src/.vuepress/dist/
        target-server: ${{ secrets.host }}
        remote-user: ${{ secrets.ssh_username }}
        private-ssh-key: ${{ secrets.SSH_KEY }}
        destination-path: ${{ secrets.destination_folder }}
        ssh-port: ${{ secrets.ssh_port }} # 建议更改默认的 22 端口
```

如果出现报错 `error in libcrypto`，说明 SSH 密钥错误，需要登陆服务器终端，运行以下命令。

```bash
ssh-keygen -m PEM -t rsa -b 4096
cat id_rsa.pub >> authorized_keys
cat id_rsa
```

### 同步到 oss

如果没有服务器，可以把文件部署在云运营商的云存储上。比如用 [aliyun-oss-website-action](https://github.com/marketplace/actions/aliyun-oss-website-action)，将 repo 文件 build 成网站文件，然后同步到阿里云 oss 并运行网站。

```bash
name: deploy md to oss
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    # load repo to /github/workspace
    - uses: actions/checkout@v3
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '14.x'
    # 打包文档命令
    # - run: npm install yarn@1.22.4 -g
    # - run: yarn install
    # - run: yarn docs:build #需要配合 yarn 的 package.json
    - name: aliyun-oss-website-action
      uses: fangbinwei/aliyun-oss-website-action@v1.3.0
      with:
          accessKeyId: ${{ secrets.ACCESS_KEY_ID }}
          accessKeySecret: ${{ secrets.ACCESS_KEY_SECRET }}
          bucket: learndata-notes
          # use your own endpoint
          endpoint: oss-cn-shanghai.aliyuncs.com
          # 全目录上传
          folder: .
          # 不上传的文件
          exclude: |
            .github/
            .gitattributes
```

## IPFS（不推荐）

IPFS 是去中心化存储方案，无需服务器即可部署网站，理论上永不失效。但目前**国内访问存在较大不确定性**，不推荐用于正式项目。以下仅做记录参考：

IPFS 使用步骤：

1. 打包构建后的网站文件，上传到 [Pinata](https://pinata.cloud/)
2. 获取 IPFS Hash 后，可通过网关访问
3. 建议搭配 Cloudflare IPFS 设置自定义域名与 SSL

注意：

- 网站目录中必须有 index.html，否则网页中将显示网站目录。即使有 index.html，其他人在拥有 CID 后，可以通过 IPFS Desktop 来获取网站的完整目录。为确保私密性，建议只上传单文件。使用单文件 CID 视为单一网站，不可调用原目录中的文件。^[[How to Easily Host a Website on IPFS](https://medium.com/pinata/how-to-easily-host-a-website-on-ipfs-9d842b5d6a01)]
- IPFS 托管在一个网关上，并不会自动复制到所有网关。
- 上传 IPFS 到 pinata 之后，cloudflare 等其他网关不一定会完全复制文件，php 无法抓取加载，所以不建议使用 cloudflare 网关。
- cloudflare 接管 pinata 后，IPFS 域名需通过「pinata 托管」>「cloudflare DNS」>「cloudflare SSL」。如果中途将 DNS 指向 `http://gateway.pinata.cloud` 等非 Cloudflare IPFS 网关域名，Cloudflare SSL 证书将失效。即便把链接改为非加密的 http，pinata 依然会视之为无效链接而拒绝访问。

对于文件较少且链接有效的域名，可按 [Cloudflare IPFS](https://www.cloudflare.com/zh-cn/distributed-web-gateway/) 页面说明来设置 DNS，提交 IPFS 域名 30 分钟后，即可获取 SSL 证书。

1. 添加 CNAME 记录，将你的 IPFS 域名 `xxx.example.com` 指向 `cloudflare-ipfs.com`。
2. `_dnslink.xxx.example.com` 设置为 `dnslink=/ipfs/<your_ipfs_hash_here>`。
