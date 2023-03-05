---
title: Jekyll 篇二：自动部署服务器博客
date: 2018-05-03
category:
  - 博客
tag:
  - Jekyll
  - Travis CI
  - Docker
order: -15
---

Github 上搭建 Jekyll 是最方便的，空间免费、流量免费、部署简单。但 Github 属于被墙状态，将博客部署在那，速度实在太慢。在玩了几天后，我开始在服务器上直接搭建 Jekyll 博客。

服务器搭建需要人工执行 `jekyll build`, 完全背离了最开始搭建博客的初衷-**方便**。之后结合了网络上多个自动化方案，选定入门成本最低的 `Github` -> `Travis CI` -> `Docker`-> `VPS`。

## 搭建思路

- 本地提交博客 Markdown 文件 到 Github 源文件 repository
- Github 触发 Travis CI 执行自动编译
- Travis CI 编译后 push 静态文件到 Github 静态文件 repository
- Travis CI 通知 Docker 重建镜像（预计 5 分钟）
- 服务器休眠 5 分钟后，Travis CI 通知服务器
- 服务器拉取最新镜像，然后停止并删除原容器，用最新镜像重建容器

## Travis CI 基本配置

Travis CI 对于开源项目完全免费，并且能自动感知到 Github 的 commit，帮我们解决了静态文件生成问题。

先用 Github 登录 Travis CI，然后点击最右侧的头像，开启想要使用 Travis CI 的项目

![](https://tc.seoipo.com/20180504135244.png)

点击设置按钮，进入项目设置

![](https://tc.seoipo.com/20180504135541.png)

## 静态文件更新

Travis CI push 静态文件到 Github 通过 Github 的 token 实现授权，push 代码如下

```bash
after_success:
  - git clone https://github.com/rockbenben/rockbenben.github.io.git
  - cd rockbenben.github.io && rm -rf * && cp -r ../_site/* .
  - git config user.name "rockbenben"
  - git config user.email "qingwhat@gmail.com"
  - git add --all .
  - git commit -m "Travis CI Auto Builder"
  - git push --force https://$DEPLOY_TOKEN@github.com/rockbenben/blog.git master
```

`$DEPLOY_TOKEN` 是从 Github 授权得到的，「setting」>「Developer settings」>「Personal access tokens」>「Generate new token」, 然后给于相应权限即可，`admin:public_key, admin:repo_hook, repo`。

![](https://tc.seoipo.com/20180504153729.png)

进入 Travis 的 repo 项目，「More options」>「Settings」>「Environment Variables」, 新建一个变量`DEPLOY_TOKEN`，把 Github 的授权 token 保存在里面。

![](https://tc.seoipo.com/20180504154229.png)

Travis CI 提供了存放加密文件的方式，参考 [官方文档](https://docs.travis-ci.com/user/encrypting-files/)。

## Dockerfiles 设置

在 Github 中新建一个 repository，可以命名为 `dockerfiles`, 专门用来存储 Docker 镜像的设置文件。在 `dockerfiles` 新建文件夹 `jekyll` ，并在 `jekyll` 中新建文件 `Dockerfile`, 放入以下代码：

```bash
FROM nginx:1.13.9-alpine

LABEL maintainer="Benson <qingwhat@gmail.com>"

ARG TZ='Asia/Shanghai'

ENV TZ ${TZ}

RUN apk upgrade --update \
    && apk add bash git \
    && rm -rf /usr/share/nginx/html \
    && git clone https://github.com/rockbenben/blog.git /usr/share/nginx/html \
    && ln -sf /usr/share/zoneinfo/${TZ} /etc/localtime \
    && echo ${TZ} > /etc/timezone \
    && rm -rf /var/cache/apk/*

# ADD entrypoint.sh /entrypoint.sh #容易报错
# ADD flush /usr/local/bin/flush #容易报错

WORKDIR /usr/share/nginx/html

# CMD ["/entrypoint.sh"] #容易报错
```

将 Travis CI 生成的静态文件推送到 Github，博客的 docker 化部署，采用 nginx + 静态文件 方式

样例 Dockerfile: <https://github.com/mritd/dockerfile/tree/master/mritd>

## Docker 镜像设置

注册并登录 [Docker Hub](https://hub.docker.com)，点击 「Create」>「Create Automated Build」>「Create Auto-build Github」, 选择之前新建的 `dockerfiles` repository。

建立 Automated Build 镜像后，进入 `Build Seeting`, 点击 Trigger，建立第一个 Docker 镜像。

![](https://tc.seoipo.com/20180504161016.png)

然后在「Building Settings」>「Build Triggers」>「Activate Triggers」，复制 Trigger URL。

![](https://tc.seoipo.com/20180504161245.png)

然后在服务器上执行下列代码，拉取并**启动 Docker 镜像**。

```bash
docker pull rockben/jekyll
docker stop jekyll_blog
docker rm jekyll_blog
docker run --name=jekyll_blog -d -p 39100:80 --privileged=true rockben/jekyll:latest
```

--name=jekyll_blog 中的 `jekyll_blog` 是对容器的命名，方便后续操作。

-d 让容器在后台运行。

-p 映射端口：80 是容器内对应的端口，39100 是主机端口，也就是最终用户访问的端口，本端口可以自由选择。

--privileged=true 关闭安全权限，否则你容器操作文件夹没有权限。

--`rockben/jekyll:latest` 是容器名称，可省略 `:latest`。

运行容器后，访问 `seoipo.com:39100` 就可以看到镜像网页。如果每次用端口访问，可以在域名 DNS 中设置显性 URL，将二级域名 `blog.seoipo.com` 指向 `seoipo.com:39100`

### Docker 扩展阅读

**Docker 命令符**：

```bash
docker ps // 查看所有正在运行容器
docker stop containerId // containerId 是容器的 ID

docker ps -a // 查看所有容器
docker ps -a -q // 查看所有容器 ID

docker stop $(docker ps -a -q) //  stop 停止所有容器
docker rm $(docker ps -a -q) //   remove 删除所有容器
```

**`docker run` 进阶设置**

```bash
docker run --name=jekyll_blog -d -p 39100:80 -v /www/wwwroot/jekyll:/jekyll --privileged=true rockben/jekyll:latest /bin/bash
```

-v 挂载目录/root/software 本地目录 /software 容器目录，在创建前容器是没有 software 目录的，docker 容器会自己创建
--`/bin/bash` 这是 CMD 命令行，可不填

## SSH 免密码登录

Travis 不能利用用户名和密码登陆，我们只有利用**SSH 免密登陆**服务器，更新并重启 Docker 容器。

**1、生成公钥/私钥对**

```bash
cd ~/.ssh  # 切换 .ssh 目录，目录的第一个字符如果是 `.` 表示改文件夹是隐藏文件夹
mkdir ~/.ssh  #如果 .ssh 文件夹不存在，可以执行指令自行创建。如果 .ssh 文件已经存在，该命令会指出 .ssh 目录：/root/.ssh
ssh-keygen -t rsa     # 生成 RSA 密钥对，后面所有的直接以默认就行，passphase 一定要为空
```

**2、将生成的公钥添加为受信列表**

```bash
cd ~/.ssh  # 切换.ssh 目录
cat id_rsa.pub >> authorized_keys #将公钥内容输出到 authorized_keys 中
```

**3、在.ssh 目录下新增配置文件 config**

```bash
cd ~/.ssh  # 切换 .ssh 目录
vim config  #新建并打开目录
```

点击 `i` 进入编辑状态，输入下列代码。完毕后，点击 `Esc` 退出编辑状况，然后输入 `:wq!` 强制保存后离开文件

```bash
Host test
HostName 99.99.99.99(你的服务器 ip)
#登陆的用户名
User travis
IdentitiesOnly yes
#登陆使用的密钥
IdentityFile ~/.ssh/id_rsa
```

**4、在 Linux 服务器安装 Travis 客户端**（rvm -> ruby -> gem ->Travis）

`gem install travis`

**5、服务器创建空白`.travis.yml`文件**

```bash
mkdir /home/travis #新建 travis 文件夹
touch /home/travis/.travis.yml #在 travis 文件夹里创建空白 .travis.yml 文件
```

**6、服务器登录 Travis，添加加密的私钥至代码仓库**

```bash
cd /home/travis  #进入 .travis.yml 所在文件夹
travis login     #用 GitHub 账户登陆 travis

#登陆成功后解密私钥，--add 参数会把加密的私钥解密命令插入到.travis.yml，Travis 解密时要用到的
#-r 之后是 Github 源文件目录
travis encrypt-file ~/.ssh/id_rsa --add -r rockbenben/rockbenben.github.io

#保存加密后的私钥 id_rsa.enc，上传到 Github 源文件 repository 中

#.travis.yml 中也自动添加了解密命令
cat /home/travis/.travis.yml  #打开服务器的 .travis.yml 文件并保存
before_install:
- openssl aes-256-cbc -K $encrypted_****_key -iv $encrypted_****_iv
  -in id_rsa.enc -out ~/.ssh/id_rsa -d
```

**成功加密后，会提示**

```bash
Make sure to add id_rsa.enc to the git repository.
Make sure not to add ~/.ssh/id_rsa to the git repository.
Commit all changes to your .travis.yml.
```

- **将新生成的 `id_rsa.enc` 文件上传到 Github 源文件 repository 中**

- 将 `.travis.yml` 中的 `openssl aes-256-cbc -K $encrypted_5c280379e96c_key -iv $encrypted_5c280379e96c_iv -in id_rsa.enc -out ~/.ssh/id_rsa -d` 放入最终的 `.travis.yml` 文件中。

  ![](https://tc.seoipo.com/20180504184508.png)

## travis.yml 配置

当项目内存在 `.travis.yml` 文件时，Travis CI 会按照其定义完成自动 build 过程，所以开启了上述配置以后还要在 Github 的 Jekyll 源文件项目下创建 `.travis.yml` 配置文件。

![](https://tc.seoipo.com/20180504141827.png)

`.travis.yml` 配置文件内容样例如下：

```bash
language: ruby
rvm:
- 2.3.3

before_script:
- openssl aes-256-cbc -K $encrypted_5c280379e96c_key -iv $encrypted_5c280379e96c_iv
  -in id_rsa.enc -out ~/.ssh/id_rsa -d      #本句是服务器上的 Travis 自动生成的，但默认生成的命令可能会在/前面带转义符\，我们不需要这些转义符，手动删掉所有的转义符，否则可能在后面引发莫名的错误。
- chmod 600 ~/.ssh/id_rsa
- echo -e "Host 106.15.190.249\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config #106.15.190.249 是服务器 IP，修改成你自己的就行

# Assume bundler is being used, therefore
# the `install` step will run `bundle install` by default.
install:
- gem install jekyll
- gem install jekyll-paginate

script: jekyll build #&& htmlproofer ./_site #指定目录容易报错

after_success:
  - git clone https://github.com/rockbenben/rockbenben.github.io.git
  - cd rockbenben.github.io && rm -rf * && cp -r ../_site/* .
  - git config user.name "rockbenben"
  - git config user.email "qingwhat@gmail.com"
  - git add --all .
  - git commit -m "Travis CI Auto Builder"
  - git push --force https://$DEPLOY_TOKEN@github.com/rockbenben/blog.git master
  # Trigger all tags/branchs for this automated build.
  - curl -X POST https://registry.hub.docker.com/u/rockben/jekyll/trigger/9b1e9527-0cf1-4756-8332-50f8dff37747/ #本句的链接是 hub.docker.com 自动生成，进入 docker 项目后，Building Settings - Build Triggers - Activate Triggers ，复制 Trigger URL
  - sleep 5m #超过 10 分钟，tavis 将失去响应。此处是在等待 docker 镜像更新
  - ssh root@106.15.190.249 -p 27378 -o StrictHostKeyChecking=no "docker pull rockben/jekyll && docker stop jekyll_blog && docker rm jekyll_blog && docker run --name=jekyll_blog -d -p 39100:80 --privileged=true rockben/jekyll:latest"  #ssh 连接后，重启 docker 容器，jekyll_blog 为之前设定的容器名。
  # -p 27378 是我自设的服务器端口，默认是 22
  # - ssh root@106.15.190.249 -p 27378 -o StrictHostKeyChecking=no "/www/wwwroot/jekyll_build.sh" #执行 jekyll 重建脚本
  #- ssh root@106.15.190.249 -o StrictHostKeyChecking=no 'cd ~/blog-front && git pull && npm install && npm run build'   #使用 ssh 连接服务器，git pull?

# branch whitelist, only for Github Pages
branchs:
  only:
  - master  #指定只有检测到 master 分支有变动时才执行任务

env:
  global:
  - NOKOGIRI_USE_SYSTEM_LIBRARIES=true # speeds up installation of html-proofer

addons:
  ssh_known_hosts:
  - 106.15.190.249 #受信主机，你的 Linux 服务器 ip

sudo: false # route your build to the container-based infrastructure for a faster build
```

具体 .travis.yml 配置，请参考 [官方文档](https://docs.travis-ci.com/)。

参考资料&引用：

- [Jekyll 模板 hux blog](https://github.com/Huxpro/huxpro.github.io)

- [一点都不高大上，手把手教你使用 Travis CI 实现持续部署](https://zhuanlan.zhihu.com/p/25066056)

- [Jekyll + Travis CI 自动化部署博客](https://mritd.me/2017/02/25/jekyll-blog-+-travis-ci-auto-deploy/)

- [Travis-CI 自动化测试并部署至自己的 CentOS 服务器](https://juejin.im/post/5a9e1a5751882555712bd8e1)

- [Travis CI 系列：自动化部署博客](https://segmentfault.com/a/1190000011218410)

- [SSH 免密登录远程服务器](https://juejin.im/post/5a2941ad6fb9a045030ffc95)

- [SSH 公钥登录原理](http://www.cnblogs.com/scofi/p/6617394.html)

- [如何将 dockerhub 与 github 关联](https://blog.csdn.net/yinweitao12/article/details/73165914)

- [docker 启动，端口映射，挂载本地目录](http://www.cnblogs.com/YasinXiao/p/7736075.html)

- [Docker — 从入门到实践](https://yeasy.gitbooks.io/docker_practice/)
