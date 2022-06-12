# 域名服务商

我分为两块，Cloudflare 和阿里云。

个人博客一开始用 Cloudflare 代理 notion 域名。

原本速度很慢的话，使用 Cloudflare 速度还可以

- DNS 迁移是在域名管理商处修改。比如我的域名是在阿里云购买，只把 DNS 迁移到 Cloudflare，再次迁移 DNS 的话，需要回到阿里云。
- 如果阿里云的安全验证一直被卡住，可以换个浏览器，比如 Firefox。
- 子域名可以使用 [NS 记录](https://help.aliyun.com/document_detail/29725.html?#h2-ns-7)，托管到其他域名服务商

阿里云修改域名 DNS 服务器 FAQ：<https://help.aliyun.com/document_detail/121648.html>
