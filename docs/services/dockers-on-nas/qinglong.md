---
article: false
title: 青龙面板：定时任务管理
order: 81
---

[青龙面板](https://github.com/whyour/qinglong) 是支持 Python3、JavaScript、Shell、Typescript 的定时任务管理平台，但现在多被用于京东薅羊毛，比如领京东、价保。安装好 Docker 后的配置流程参考 [青龙面板应用——安装依赖拉取仓库运行京东脚本（保姆级图文）](https://blog.csdn.net/u011027547/article/details/130703685)。

```yml
# https://github.com/whyour/qinglong/blob/develop/docker/docker-compose.yml
version: '2'
services:
  web:
    # alpine 基础镜像版本
    image: whyour/qinglong:latest
    container_name: qinglong
    # debian-slim 基础镜像版本
    # image: whyour/qinglong:debian  
    volumes:
      - /volume1/docker/qinglong/data:/ql/data
    ports:
      - "5700:5700"
    environment:
      # 部署路径非必须，以斜杠开头和结尾，比如 /test/
      QlBaseUrl: '/'
    restart: unless-stopped
```

配置注意：

- 在运行脚本之前，请确保已安装所有必要的依赖。
- 定期运行：`0 0 7 * * ?` 表示每天 7 点触发。其中第一个数字代表秒，第二个数字代表分钟，第三个数字代表小时，第四个数字代表每月的日期，第五个数字代表月份，第六个数字代表每周的星期几。这些数字之间使用空格分隔。要表示不限制的时间段，可以使用 `*` 号，要表示定期运行的时间段，可以使用 `?` 替代，要表示间隔运行的时间段，可以使用 `*/数字` 替代。如果需要在同一个时间位上设置多个选项，可以使用逗号 `,` 连接，如果需要设置一个时间段，可以使用短划线 `-` 连接。对于每天的运行，可以在日期位或星期位使用 `?`。

## 京东 COOKIES

1. 在无痕模式下打开 [https://m.jd.com/](https://m.jd.com/) 网站，并登录账户。
2. 使用浏览器的开发者工具（F12）进入调试模式，选择 "network"（网络）。
3. 点击页面右上方的「直接访问」，开发者工具中出现 log.gif 开头的记录。点击它，选择「Headers」>「Request headers」，复制出其中的 Cookie 内容。
4. 在复制出的 Cookies 中查找 `pt_key=XXX;pt_pin=xxx;` 字段，并将其保存为变量 `JD_COOKIE`。如果找不到 log.gif 或 getinfo 的记录，则可尝试随意添加一个商品到购物车。

![](https://img.newzone.top/2023-11-26-06-31-20.png?imageMogr2/format/webp)
