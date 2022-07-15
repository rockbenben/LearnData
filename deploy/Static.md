# 静态部署

## 静态托管

如果静态包没在国内静态库托管的话，用`npm i`命令将静态包下载到本地，然后部署到阿里云/七牛云上，避免网页受 UNPKG 和 jsDelivr 屏蔽影响而无法打开。

### NPM 包

- UNPKG：**有墙风险且不稳定**，支持使用`@latest`标签。

  1. 将静态文件发布为 npm 包，参考 [一分钟教你发布 npm 包](https://segmentfault.com/a/1190000023075167)。
  2. 加速：在 [npm 官方源](https://www.npmjs.com/) 中搜索包位置，然后使用前缀`https://unpkg.com/`。

- 自建 unpkg 镜像，反向代理 unpkg

- [NPM MIRROR](https://npmmirror.com/)：NPM 官方项目的镜像，不能做静态托管用途。
  - `https://registry.npmmirror.com/项目名/版本号`可以看见项目的各种信息，但看不了里面的文件。

- <s>jsDelivr（已墙）：速度最快，原本是最稳的，但域名暴雷后，经常断开，2022.06.01 彻底打不开。
  配合 Github action，更新后自动访问 jsdelivr CDN 缓存刷新链接，保持页面常新。刷新命令参考`curl https://purge.jsdelivr.net/gh/username/project/file`。
- 饿了么 CDN（已关）：国内唯一能用的 npm 镜像，2022.07.13 发现外部访问被拒绝。之前饿了么并没说支持对外，可能已经彻底取消了。
  使用饿了么 CDN 时，注意`https://npm.elemecdn.com/react@latest/`需要时间更新，具体频率未知，可固定大版本号来获取更新`https://npm.elemecdn.com/react@^18/`。</s>

### 静态资源库

- [字节 CDN](https://cdn.bytedance.com/)：国内测速表现最佳，缓存过期时间最长设置一年。
- [Staticfile CDN](https://www.staticfile.org/)：CDN 加速由七牛云提供。

### 静态页面

- Cloudflare：Pages 和 Workers 两类部署方式。
  - [Workers](deploy/Cloudflare?id=反向代理)：复制镜像网站，可直接访问，但反向代理稳定性成疑。
  - Pages：部署简单，外网速度很快，但国内速度不稳，而且 [page.dev](http://page.dev) 域名有时会被墙，需要购买便宜的一年临时域名来解决该问题。
- Netlify：国内速度慢点，图片容易卡死，但还算稳定。
- Vercel：需绑定国外手机号，经常需要换 IP。
- AWS: 邮箱注册，不过需要信用卡认证。
- 国内平台：Gitee、WuliHub、CODING，都需要实名认证。

### IPFS

IPFS 无需服务器就可建立静态网站，号称永不失效，但**国内稳定性成疑问，实用性一般**。IPFS 托管在一个网关上，并不会自动复制到所有网关。

[pinata](https://pinata.cloud/) 上传网站构建的目录文件夹，上传后，即可通过 IPFS Hash 访问。网站目录中必须有 index.html，否则网页中将显示网站目录。即使有 index.html，其他人在拥有 CID 后，可以通过 IPFS Desktop 来获取网站的完整目录。为确保私密性，建议只上传单文件。使用单文件 CID 视为单一网站，不可调用原目录中的文件。^[[How to Easily Host a Website on IPFS](https://medium.com/pinata/how-to-easily-host-a-website-on-ipfs-9d842b5d6a01)]

上传 ipfs 到 pinata 之后，cloudflare 等其他网关不一定会完全复制文件，php 无法抓取加载，所以不建议使用 cloudflare 网关。而 cloudflare 接管 pinata ipfs 域名需通过「pinata 托管 - cloudflare DNS - cloudflare SSL」，一旦 DNS 指向 <http://gateway.pinata.cloud> 等非 cloudflare ipfs 网关域名，cloudflare SSL 证书将失效。链接改为 http，pinata 会视为无效链接，拒绝访问。对于文件较少，确认过链接有效性的域名，可访问 [Cloudflare IPFS](https://www.cloudflare.com/zh-cn/distributed-web-gateway/) 页面，按说明设置 DNS，然后 输入 IPFS 域名并提交，过 30 分钟后获取 SSL 证书。

1. 添加 CNAME 记录，将你的 IPFS 域名 (xxx.example.com) 指向 cloudflare-ipfs.com
2. \_dnslink.xxx.example.com 的值为 dnslink=/ipfs/<your_ipfs_hash_here> 的域

## GitHub 同步到 VPS

我的代码、文章都部署在 GitHub 上，但国内访问 GitHub 的速度不稳定，需要增加国内访问节点。

最多人用的方法是，GitHub Action 将新文档同步到 Gitee，生成国内静态页 Gitee Pages。但 Gitee Pages 有诸多限制，免费版无法自定义域名，而且必须实名验证。

因此，我选择将文档同步到自建的国内服务器（域名已备案）。

!> 注意：文件夹不要有大写字母，否则同步时容易出错。

### 同步到 ftp

如果你有 ftp 服务器，可使用 [FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action) 将 github 代码同步到服务器上。Action 使用说明查看 [GitHub 说明](GitHub.md)。

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
      uses: SamKirkland/FTP-Deploy-Action@4.3.0
      with:
        server: ${{ secrets.ftp_host }}
        username: ${{ secrets.ftp_username }}
        password: ${{ secrets.ftp_password }}
        port: ${{ secrets.ftp_port }} # 建议更改默认的 21 端口
```

`FTPError: 530 Login authentication failed`：密钥填写错误，需将 github secrets 重新 update，并检查密码只有大小写字母和数字。先用 FileZilla 测试连接 ftp，然后进入`/www/server/pure-ftpd/etc/pureftpd.passwd`，检查是否有该 ftp 账户。

如果新建 ftp，需在云服务商的安全组和服务器上开放端口。宝塔系统加固等服务器防火墙经常会组织新建 ftp，可临时暂停。

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
