---
article: false
title: Stirling-PDF
order: 9
---

[Stirling-PDF](https://github.com/Frooodle/Stirling-PDF) 基于 Web 的 PDF 文档开源工具箱，允许您对 PDF 文件执行各种操作，例如拆分合并、转换、重新组织、添加图像、旋转、压缩等。

```yml
version: '3.3'
services:
  stirling-pdf:
    image: frooodle/s-pdf:latest
    ports:
      - '8080:8080'
    volumes:
      - /location/of/trainingData:/usr/share/tesseract-ocr/4.00/tessdata #Required for extra OCR languages
      - /location/of/extraConfigs:/configs 
      # - /location/of/customFiles:/customFiles/
    environment:
      - DOCKER_ENABLE_SECURITY=false
```
