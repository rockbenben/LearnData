---
title: Jekyll 篇一：3 分钟搭建 Github Pages 博客
date: 2018-05-01
category:
  - 博客
tag:
  - Jekyll
  - Github
  - 建站
order: -13
---

一直都想建立自己的个人博客，重装过 N 次 WordPress，又因为种种原因而放弃。

偶然看到了 Hux 的 Jekyll 模板，被漂亮的设计给迷住了。Github Pages 默认支持 Jekyll 环境，并提供了免费空间和流量，因此开始了 Github Pages + Jekyll 之路。

### 搭建流程

1. 注册并登录 [Github](https://github.com/)。

2. 选择一个喜欢的 [Jekyll 模板](http://jekyllthemes.org/), 进入对应的 Github 主页。我选了黄玄的 [Hux Blog](https://github.com/Huxpro/huxpro.github.io)。

3. 点击 `Fork`, 将喜欢的模板复制到自己的 Github 仓库中。

   ![](http://tc.seoipo.com/20180505201522.png)

4. 点击 `Setting`, 修改 `Repository name` 为 `xxx.github.io`, `xxx` 是你的 Github 用户名。

   ![](http://tc.seoipo.com/20180505202201.png)

5. 同一页面选择「Code and automation - Pages - Build and deployment - Branch」, 将 master branch 设为 Github Pages 来源，网站运行目录默认为 `/(root)`。设置好后，点击「Save」。

   ![](http://tc.seoipo.com/2022-08-08-11-42-16.png)

6. 最后，按页面提示访问链接 `https://xxx.github.io/`，新博客搭建完毕。

   ![](http://tc.seoipo.com/20180505202859.png)
