---
article: false
title: LearnData 开源笔记
description: 演示站：你正在浏览 LearnData 模板的默认样态。Use this template 创建仓库后部署得到的就是这套站点框架，按需替换内容即可上线属于自己的知识库。
icon: fa6-solid:book-open-reader
---

> 你看到的就是 [LearnData](https://github.com/rockbenben/LearnData) 模板的演示站点。

## 这里是什么

如果你刚通过 **Use this template** 创建了仓库并部署成功，恭喜 —— 这就是你的网站首页现在的样子。所有侧边栏内容、博客文章、读书笔记都是模板自带的演示样例。

接下来要做的：

1. **替换内容**：删除 `src/_posts/` 下的示例博客、`src/reading/` 下的读书笔记示例，按 [samplepage.md](https://github.com/rockbenben/LearnData/blob/main/samplepage.md?plain=1) 的 frontmatter 规范写自己的内容
2. **改写本页**：把 `src/README.md`（也就是这页）改成你自己的网站介绍
3. **配置个人信息**：修改 `src/.vuepress/config.ts` 的 title、description、域名等

## 文档与帮助

- 📖 **完整搭建 / 配置 / 部署 / FAQ**：[LearnData GitHub README](https://github.com/rockbenben/LearnData#readme)
- 🌐 **真实使用案例**：[newzone.top](https://newzone.top) —— 博主基于本模板搭建的个人博客
- 🎯 **进阶心得**：
  - [知识管理与搜索](https://newzone.top/posts/2024-01-28-learndata-advanced.html) —— 节点搜索、Quicker 一键定位、`article` 标签、双链反思
  - [自动化脚本](https://newzone.top/posts/2026-03-05-learndata-scripts-llm-seo.html) —— SEO 审计、`llms.txt`、读书笔记侧边栏、Jules 定时维护

## 模板内容结构

模板自带的演示内容按以下结构组织（fork 后建议按需替换）：

- 置顶：日常习惯、健身、阅读
- 软件应用、Docker 服务、系统问题、代码编程
- 生活角落：说明书、生活记录和小技巧
- 博客汇总：分类、标签、时间轴

## 反馈与社区

- 🐛 [GitHub Issues](https://github.com/rockbenben/LearnData/issues)
- 💬 [Discord](https://discord.gg/PZTQfJ4GjX) · [Telegram](https://t.me/aishort_top) · [QQ 群](https://qm.qq.com/q/qvephMO8q4)
