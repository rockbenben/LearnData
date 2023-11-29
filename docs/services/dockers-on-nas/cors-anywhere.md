---
article: false
title: CORS Anywhere：解锁跨域限制
order: 100
---

[CORS Anywhere](https://github.com/Rob--W/cors-anywhere) 是一个基于 NodeJS 的代理服务，专门用于向跨源请求中注入 CORS（跨源资源共享）头部。为了了解其背后的逻辑，需要首先理解浏览器的同源策略：当你的前端 JavaScript 代码企图从一个域访问另外一个域的内容时，浏览器默认会阻拦这样的请求，除非目的域有合适的 CORS 头部标识。但有了 CORS Anywhere，这些浏览器的安全限制就可以轻松绕过。

如果你想自行部署，可以选择自建镜像。我也提供了一个预先配置好的容器版本，可在 Docker Hub 上找到 [rockben/cors-anywhere](https://hub.docker.com/r/rockben/cors-anywhere)。

下面是一个 Docker 部署的示例配置：

```yml
version: '3'

services:
  cors-anywhere:
    image: rockben/cors-anywhere:0.4.4
    container_name: cors-anywhere
    ports:
      - "49152:8080"
    restart: unless-stopped
```

## 使用示例

若想在 JavaScript 中利用 CORS Anywhere，以下是一个简单的调用示例：

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
  }
});
```

## 构建自定义 Docker 镜像

以下为提供的 Dockerfile 允许你依据自己的需求构建专属 CORS Anywhere 镜像。

```dockerfile
# 使用 Alpine 为基础镜像，该镜像体积较小
FROM node:14-alpine as builder

WORKDIR /app

# 克隆 CORS Anywhere 的代码
RUN apk add --no-cache git && \
    git clone https://github.com/Rob--W/cors-anywhere.git . && \
    npm install

# 使用多阶段构建
FROM node:14-alpine

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

在 Dockerfile 所在目录下，仅需执行以下几条命令，即可完成 cors-anywhere 的运行部署：

```bash
# 构建 Docker 镜像
sudo docker build -t cors-anywhere .

# 运行 Docker 容器
sudo docker run -d --name cors-anywhere -p 49152:8080 cors-anywhere
```
