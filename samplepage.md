---
# 文章标题
title: 页面配置样例：Frontmatter 模板规范
# 页面图标，默认为 [Fontawesome 图标](https://fontawesome.com/search?m=free&o=r)
# 假设希望设定图标为 <i class="fa-solid fa-hashtag"></i>，则是 icon: fa-solid fa-hashtag
icon: fa-solid fa-hashtag
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
# 是否为长文章，会被放置于博客页
article: false

# 不希望页面被侧边栏收录时
index: false
# 禁用指定页面的侧边栏
sidebar: false
# 右侧目录栏会自动地显示由当前页面的标题 (headers) 组成的链接，默认提取 h2 和 h3。设置成 0 将会禁用标题 (headers) 链接。
headerDepth: 2

# 设置作者
author: LearnData
# 设置写作时间
date: 2022-09-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 页面配置
  - 使用指南
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true

# 你可以自定义页脚
footer: 这是测试显示的页脚
# 你可以自定义版权信息
copyright: 无版权
---

页面内容，支持 Markdown 和 HTML 语言。

## 基础模板

```yaml
---
title: 文章标题
description: （非必须）文章简要描述，用于SEO优化和摘要显示
shortTitle: 短标题
date: YYYY-MM-DD
category:
  - 分类1
tag:
  - 标签1
  - 标签2
order: -1
icon: fa6-solid:图标名称
isOriginal: true # 原创文章标志
---
```

## 页面模板

```yaml
---
title: 页面标题
description: 页面简要描述，用于SEO优化和摘要显示
article: false
icon: fa6-solid:图标名称
order: -1
---
```

## 字段说明

### 必需字段

- `title`：页面内容的主标题

### 条件必需字段

- `isOriginal`：位于 `src/_posts` 路径下的文章必须添加 `isOriginal: true`
- `shortTitle`：当 `title` 字符长度超过50时，必须提供 `shortTitle`

### 推荐字段

- `description`：页面内容的简要描述，用于搜索引擎优化和摘要显示
- `date`：文章发布日期
- `category`：文章分类
- `tag`：文章标签
- `order`：侧边栏排序（数字越小越靠前）
- `icon`：页面图标

### 可选字段

- `author`：作者信息
- `sticky`：文章置顶
- `star`：文章收藏
- `footer`：自定义页脚
- `copyright`：版权信息
