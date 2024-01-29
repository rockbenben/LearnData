---
article: false
title: GitLab：私有化版本控制
order: 103
---

Git 是版本控制的最佳方法。我的博客和开源软件都是部署在 GitHub 上，但有些含有私钥的代码不希望部署在外网，因此选择使用 GitLab 镜像私有化部署到本地。

[GitLab](https://docs.gitlab.com/ee/install/docker.html) 功能与 GitHub 类似，提供了集成/持续部署（CI/CD）和项目管理工具，适合用于源代码管理和版本控制。

## 部署命令

GitLab 会占用 4G 内存，初始化部署时间较长，最好等半小时在连接。你可以在服务器上使用 `sudo docker logs -f gitlab` 来跟踪部署进度。

部署好后，在服务器上运行 `sudo docker exec -it gitlab grep 'Password:' /etc/gitlab/initial_root_password` 获取 root 用户的初始随机密码。如果无法用获得的密码登录，可能是因为你的初始化部署有问题，需清空配置文件夹，然后重新部署。

```yml
version: '3.6'
services:
  web:
    image: 'gitlab/gitlab-ce:latest'
    container_name: 'gitlab'
    restart: always
    hostname: 'gitlab'
    environment:
      TZ: 'Asia/Shanghai'
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://192.168.2.3:49140'
        gitlab_rails['gitlab_shell_ssh_port'] = 49142
    ports:
      - '49140:49140'
      - '49142:22'
    volumes:
      - /volume1/docker/GitLab/config:/etc/gitlab
      - /volume1/docker/GitLab/logs:/var/log/gitlab
      - /volume1/docker/GitLab/data:/var/opt/gitlab
    shm_size: '256m'
```

## 初始配置

SourceTree、GitHub Desktop 均支持管理 GitLab 项目，操作类似。注意，如果本地已经建好了项目，先不要在 GitLab 网页上建立任何数据，直接上传就好，否则容易报错。

以下是命令行的初始配置步骤：

1. **在 GitLab 上创建新仓库**：
   - 登录到您的 GitLab 实例。
   - 创建一个新的仓库（Project）。在仓库创建页面上，填写必要的信息，例如仓库名称、描述等。

2. **在本地初始化 Git 仓库**：
   - 打开终端或命令提示符。
   - 导航到您的项目文件夹：`cd 路径到您的项目文件夹`
   - 初始化 Git 仓库：`git init`
   - 添加文件到仓库：`git add .` （这会添加所有文件，如果只想添加特定文件，可以用`git add 文件名`）

3. **配置 Git 仓库**：
   - 设置您的用户信息（如果之前没有设置的话）：
     - `git config --global user.name "您的名字"`
     - `git config --global user.email "您的邮箱"`
   - 提交您的更改：`git commit -m "首次提交"`

4. **将本地仓库关联到 GitLab**：
   - 获取您在 GitLab 上创建的仓库的 URL。这通常是`http://您的NAS地址/用户名/仓库名.git`。
   - 在终端中关联 GitLab 仓库：`git remote add origin 仓库URL`

5. **上传代码到 GitLab**：
   - 推送代码到 GitLab：`git push -u origin master`（或者如果您使用的是 main 分支，就是`git push -u origin main`）
   - 初始推送会提示你输入账户密码。

6. **后续更新**：
   - 以后当您进行了更多的更改并想要上传这些更改时，您只需要运行`git add .`，`git commit -m "更新信息"`和`git push`。

## 常用功能

比较提交：先进入项目并选择“提交”。接着选择需要比较的提交版本，并点击右侧的“浏览文件”。然后点击顶部的“比较”按钮，接着点击中间的“交换”按钮，再点击“比较”。这样便可将所选提交版本与当前版本进行比较，查看整体修改内容。此功能适用于同一文件多次修改的情况，方便直接查看经过多次修改后，版本的整体变更情况。
