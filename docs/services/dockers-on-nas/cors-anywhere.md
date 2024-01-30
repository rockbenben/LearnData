---
article: false
title: CORS Anywhere：解锁跨域限制
order: 201
---

[CORS Anywhere](https://github.com/Rob--W/cors-anywhere) 是一个基于 NodeJS 的代理服务，它通过向跨源请求中注入 CORS（跨源资源共享）头部，实现了跨域访问的功能。这个服务的存在是基于浏览器的同源策略：通常，浏览器会阻止前端 JavaScript 代码从一个域访问另一个域的内容，除非被访问的域设置了合适的 CORS 头部。借助 CORS Anywhere，这些浏览器的安全限制就可以被轻松绕过。

若你想要自行部署 CORS Anywhere，可以自建镜像，或者使用我提供的预先配置好的 Docker 镜像 [rockben/cors-anywhere](https://hub.docker.com/r/rockben/cors-anywhere)。

以下是使用 Docker 部署 CORS Anywhere 的示例配置：

```yml
version: "3"

services:
  cors-anywhere:
    image: rockben/cors-anywhere
    container_name: cors-anywhere
    ports:
      - "49152:8080"
    restart: unless-stopped
```

## 使用示例

在 JavaScript 中利用 CORS Anywhere 的过程非常直接。以下是一个简单的调用示例：

```javascript
var corsAnywhereUrl = "http://192.168.2.3:49152/";
var targetUrl = "http://example.com/";
$.ajax({
  type: "get",
  // 使用 CORS Anywhere URL 前缀和目标 URL
  url: corsAnywhereUrl + targetUrl,
  success: function (data) {
    // 展示从资源获取的数据
    $("#rawid").val(data);
  },
});
```

## 构建自定义 Docker 镜像

你还可以通过提供的 Dockerfile 根据自己的需求构建一个专属的 CORS Anywhere 镜像。

```dockerfile
# 使用 Alpine 为基础镜像，该镜像体积较小
FROM node:lts-alpine as builder

WORKDIR /app

# 克隆 CORS Anywhere 的代码，并清理 git 以及其它不必要的文件
RUN apk add --no-cache git && \
    git clone https://github.com/Rob--W/cors-anywhere.git . && \
    npm install && \
    apk del git && \
    npm cache clean --force && \
    rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

# 使用多阶段构建
FROM node:lts-alpine

WORKDIR /app

# 从上一个阶段拷贝构建好的 node_modules 目录和必要的文件
COPY --from=builder /app/node_modules ./node_modules/
COPY --from=builder /app/lib/ ./lib/
COPY --from=builder /app/server.js ./server.js

# 设置服务运行的端口
EXPOSE 8080

# 启动服务
CMD ["node", "server.js"]
```

在 Dockerfile 所在的目录下，执行以下命令即可构建并运行 cors-anywhere：

```bash
# 构建 Docker 镜像
sudo docker build -t cors-anywhere .

# 运行 Docker 容器
sudo docker run -d --name cors-anywhere -p 49152:8080 cors-anywhere
```

通过上述步骤，你可以快速部署并开始使用 CORS Anywhere，轻松解锁跨域访问的限制，使前端开发更加灵活和便捷。如果你在部署或使用过程中遇到任何问题，欢迎在评论区留言交流，我们可以一起探讨解决方案。
