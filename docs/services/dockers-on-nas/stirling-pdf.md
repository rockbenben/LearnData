---
article: false
title: Stirling-PDF：开源 PDF 处理工具
order: 31
---

[Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) 是开源的 PDF 文档工具箱，允许你对 PDF 文件执行各种操作，如拆分合并、转换、重新组织、添加图像、旋转、压缩等数十种功能，足够日常使用。

![](https://img.newzone.top/2024-01-16-02-15-55.png?imageMogr2/format/webp)

## 部署命令

```yml
version: '3.3'
services:
  stirling-pdf:
    image: frooodle/s-pdf:latest
    ports:
      - '7581:8080'
    volumes:
      #- /location/of/trainingData:/usr/share/tesseract-ocr/5/tessdata #Required for extra OCR languages
      - /volume1/docker/s-pdf/configs:/configs
      #- /location/of/customFiles:/customFiles/
      #- /location/of/logs:/logs/
    environment:
      - DOCKER_ENABLE_SECURITY=false
```
