# 静态部署

## github 同步 VPS

我的代码、文章都部署在 GitHub 上，为了让国内速度快点，所以需要同时部署在国内服务器上。

常用方法是，文档同步到 GitHub 后，GitHub Action 自动同步到 Gitee，最后形成国内静态页 Gitee Pages。但 Gitee Pages 有诸多限制，要实名验证，而且免费版是无法自定义域名的。

因此，我用 GitHub Action 同步到服务器（域名已备案）上，速度会更稳定。

!> 注意：文件夹不要有大写字母，否则同步时容易出错。

### 同步 ftp

如果你有 ftp 服务器，可使用 [FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action) 将 github 代码同步到服务器上。Action 使用说明查看 [GitHub 说明](GitHub.md)。

```shell
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
      uses: SamKirkland/FTP-Deploy-Action@4.3.0
      with:
        server: 106.14.xx.xx # 域名或 ip 皆可，但必须明文
        username: myFtpUserName  # 必须明文，无法加密隐藏
        password: ${{ secrets.ftp_password }}
        port: ${{ secrets.ftp_port }} # 建议更改默认的 21 端口
```

### 同步 oss

如果你没有服务器，可以把文件部署在云运营商的 oss 上。比如阿里云，用[aliyun-oss-website-action](https://github.com/marketplace/actions/aliyun-oss-website-action) 能将 github 文件 build 上传到阿里云 oss，运行静态网站。

```shell
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

## 平台对比

* 饿了么 CDN：国内唯一能用的 npm 镜像，不过饿了么并没说支持对外，不知道合适会取消。
  `https://npm.elemecdn.com/react@latest/`需要时间更新，具体频率未知，可固定大版本号来获取更新`https://npm.elemecdn.com/react@^18/`。
  1. 将静态文件发布为 npm 包，参考 [一分钟教你发布 npm 包](https://segmentfault.com/a/1190000023075167)。
  2. 加速：在 [npm 官方源](https://www.npmjs.com/) 中搜索包位置，然后使用前缀`https://npm.elemecdn.com/`。
* [字节 CDN](https://cdn.bytedance.com/)：js、css 等静态资源库
  * 国内测速表现最佳，可以设置过期时间，最长一年。
* Cloudflare
  * Pages：部署简单，外网速度很快，但国内屏蔽了 [page.dev](http://page.dev)，可通过自定义域名解决该问题。自定义域名可以买最便宜的一年一次的临时域名。
  * [Workers](https://www.notion.so/CloudFlare-Workers-a42b27820baf433b8ee45e71bd508f4a)：复制镜像网站，可直接访问，但反向代理稳定性成疑。
* Netlify：国内速度慢点，图片容易卡死，但还算稳定。
* vercel：需绑定国外手机号，经常需要换 IP
* 国内：Gitee、wulihub、coding

* jsDelivr：速度最快，原本是最稳的，但域名暴雷后，经常打不开。2022.06.01 已经彻底不打开。

```shell
#配合 Github action，更新后自动访问 jsdelivr CDN 缓存刷新链接，保持页面常新
curl https://purge.jsdelivr.net/gh/aeovn/xMBpb-B6-Hg7uC2Odv/mjFh9xdAB5zUifXr1QZlkR88rp
curl https://purge.jsdelivr.net/gh/aeovn/N6gupybTblr73P3W-ZAu-j-B/wgLA7l2UWEdY2XJmtbuQi4
```

## IPFS

IPFS 无需服务器就可建立静态网站，号称永不失效，但**国内稳定性成疑问，实用性一般**。IPFS 托管在一个网关上，并不会自动复制到所有网关。

[pinata](https://pinata.cloud/) 上传网站构建的目录文件夹，上传后，即可通过 IPFS Hash 访问。网站目录中必须有 index.html，否则网页中将显示网站目录。即使有 index.html，其他人在拥有 CID 后，可以通过 IPFS Desktop 来获取网站的完整目录。为确保私密性，建议只上传单文件。使用单文件 CID 视为单一网站，不可调用原目录中的文件。^[[How to Easily Host a Website on IPFS](https://medium.com/pinata/how-to-easily-host-a-website-on-ipfs-9d842b5d6a01)]

上传 ipfs 到 pinata 之后，cloudflare 等其他网关不一定会完全复制文件，php 无法抓取加载，所以不建议使用 cloudflare 网关。而 cloudflare 接管 pinata ipfs 域名需通过「pinata 托管 - cloudflare DNS - cloudflare SSL」，一旦 DNS 指向 <http://gateway.pinata.cloud> 等非 cloudflare ipfs 网关域名，cloudflare SSL 证书将失效。链接改为 http，pinata 会视为无效链接，拒绝访问。对于文件较少，确认过链接有效性的域名，可访问 [Cloudflare IPFS](https://www.cloudflare.com/zh-cn/distributed-web-gateway/) 页面，按说明设置 DNS，然后 输入 IPFS 域名并提交，过 30 分钟后获取 SSL 证书。

1. 添加 CNAME 记录，将你的 IPFS 域名 (xxx.example.com) 指向 cloudflare-ipfs.com
2. _dnslink.xxx.example.com 的值为 dnslink=/ipfs/<your_ipfs_hash_here> 的域
