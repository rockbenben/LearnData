---
article: false
title: Sun-Panel：简化导航页
order: 92
---

[Sun-Panel](https://github.com/hslr-s/sun-panel) 与 Homarr 相比，样式与功能都要简单许多。

不过 Sun-Panel 有 [浏览器书签转换工具](https://hslr-s.github.io/sun-panel-tool-page/#/)，可以将书签批量导入 Sun Panel。

## 部署代码

```yml
version: "3.2"

services:
  sun-panel:
    image: "hslr/sun-panel:latest"
    container_name: sun-panel
    volumes:
      - /volume1/docker/sun-panel/conf:/app/conf
      - /volume1/docker/sun-panel/uploads:/app/uploads
      - /volume1/docker/sun-panel/database:/app/database
    ports:
      - 7580:3002
    restart: always
```
