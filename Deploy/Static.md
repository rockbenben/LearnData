# 静态部署

笔记类用 md 编辑，然后同步到 GitHub，接着用 GitHub Action 同步到 Gitee，最后形成国内静态页 Gitee page。

不过这个方案会有一些问题，就是 gitee page 免费版是无法自定义域名的。

那是否我能够把 GitHub Action 同步到？我的服务器上面，而不是说给 page。这样子是不是？而且反应速度也更快。

这方法确实是比较好，所以我现在要要找的是，呃，能够用。嘿。GitHub，action 同步到服务器里面的方法 OK 好。

aliyun-oss-website-action：<https://github.com/marketplace/actions/aliyun-oss-website-action>

目录中需含`CNAME`，否则 SSL 链接容易 404 报错，显示「There isn't a GitHub Pages site here.」

但我常用的是 docsify，但打开页面经常出现 404。

> CDN 默认是有缓存的，如果文件更新，访问的可能不是最新的文件。•我设置了 routerMode 为 history，使用 CDN 访问非首页，再次刷新会找不到文件。•如果开启了 relativePath: true，文件可以找到，但是侧栏上边的标题点击又有点问题。

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
* 国内：gitee、wulihub、coding

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
