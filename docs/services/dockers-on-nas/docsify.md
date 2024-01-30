---
article: false
title: Docsify：私密文件服务器
order: 103
---

在日常工作中，我需要管理大量以 Markdown 格式编写的笔记和文档。这些资料往往包含敏感信息，不适合公开分享，但我又希望能有一个方便的方式来查看和管理这些文档。Docsify 是一个轻量级的文档网站生成器，支持将 Markdown 文件即时转换为网页格式，非常适合作为个人或团队的文档查看工具。

起初，我通过一个 ahk 脚本在开机时执行 `Run, PowerShell.exe -NoExit -Command &{docsify serve --port 3030}, D:\web\marketing` 命令来启动 Docsify 服务。虽然这种方法能够工作，但启动和维护过程相对繁琐。为了提高效率并实现更好的部署方式，我转向了 Docker 技术，并构建了一个名为 [docsify-docker](https://github.com/rockbenben/docsify-docker) 的项目。这个项目不仅简化了部署流程，还能自动检测 docsify-cli 的更新，确保文档服务器始终保持最新状态。

以下是通过 Docker 部署 Docsify 的命令，这可以让你轻松地在任何支持 Docker 的环境中部署自己的私密文件服务器：

```yml
version: "3.8"

services:
  docsify:
    container_name: docsify-server
    image: rockben/docsify-server
    volumes:
      - /volume1/docker/docsify/docs:/docs
    ports:
      - "3310:3000"
    restart: unless-stopped
```

这个 Docker 配置文件定义了一个服务 `docsify`：

- `volumes` 映射了本地的文档目录到容器内，使得容器可以访问并展示这些 Markdown 文件。
- `ports` 将容器的 3000 端口映射到本地的 3310 端口，你可以通过访问本地的 3310 端口来查看文档。

通过以上步骤，我们可以轻松地利用 Docsify 和 Docker 构建一个私密且高效的文件服务器。这不仅简化了我们的工作流程，还提高了文档管理的安全性和便捷性。无论是个人笔记、团队协作文件还是企业内部资料，利用这种方法，你都能享受到快速、安全且易于管理的文档服务。现在，尝试动手实践，为你的文档管理带来一场革新吧！

如果你在部署或使用过程中遇到任何问题，欢迎在评论区留言交流，我们可以一起探讨解决方案。
