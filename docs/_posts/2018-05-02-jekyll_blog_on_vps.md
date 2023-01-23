---
title: Jekyll 扩展篇：服务器搭建 Jekyll 博客
date: 2018-05-02
category:
  - 博客
tag:
  - Jekyll
  - 建站
order: -14
---

Github 墙得太厉害，就想在服务器上自建 Jekyll 环境，用上 Travis CI 和 Docker 后才发现完全没必要。。

Jekyll 环境官方[安装指南](https://www.jekyll.com.cn/docs/quickstart/)：

1. 使用 RVM 安装 Ruby (rvm -> ruby -> gem 网上大量教程就不赘述了)

2. 安装 jekyll：`gem install jekyll`。

3. 进入 jekyll 网站，执行命令行 `jekyll build`，生成 Jekyll 静态网页。

4. 网站的执行目录需要指定在 `_site`，这是 Jekyll 生成的静态页面目录。之后每次更新博客，都需要进入服务器执行一次 `jekyll build`，重新生成静态页面。

愿意折腾的话，可以使用 Travis CI 和 Docker 完成全自动化更新。
