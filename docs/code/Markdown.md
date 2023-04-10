---
article: false
title: Markdown
icon: markdown
order: 5
---

Markdown 是一种轻量级标记语言，易读易写，并对于图片、图表、数学式都有支持，目前许多网站与应用都支持了 Markdown。

Markdown 入门：[Markdown 基本撰写和格式语法](https://docs.github.com/cn/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#styling-text)，[Markdown 转 HTML 语法介绍](https://theme-hope.vuejs.press/zh/cookbook/markdown/)

## 图片尺寸

md 格式调整图片尺寸，在不同编辑器中显示效果不同，不一定会生效。使用 html 格式调整图片尺寸能确保成功率。

```markdown
<!-- 按页面宽度的 60% 来缩小 -->
<img src="" width="60%">

<!-- md 图片设置，有时不能被识别 -->

![同时设置宽度和高度](https://files.mdnice.com/logo.png =150x150)
![只设置宽度，推荐使用百分比](https://files.mdnice.com/logo.png =40%x)

<!-- 指针移动到图片时，显示图片说明 -->

![name](https://docsify.js.org/_media/icon.svg "图片说明")
```

七牛云图床提供[图片流量优化压缩策略](https://developer.qiniu.com/dora/kb/1627/flow-optimization-compression-of-images)，可用于调整图片的分辨率、大小和格式，具体参数请参考[七牛云图片高级处理](https://developer.qiniu.com/dora/8255/the-zoom)。此外，我还会定期使用 PP 鸭对图床中的图片进行重新压缩。

```html
<!-- 按图片尺寸的 60% 等比缩小 -->
?imageMogr2/thumbnail/!60p

<!-- 指定图片宽度 -->
?imageMogr2/thumbnail/500x

<!-- 指定宽度，调整质量，改变格式 -->
?imageMogr2/thumbnail/500x/strip/quality/50/format/webp
```

## 资料引用

文章中加 `^[引用内容]` 会在底部自动添加引用资料。如果想添加链接标题，则为 `^[[标题](链接)]`。

如果同一引用要在多个地方使用，则需要手动编号。

```markdown
这是一条引用 [^1]
这是一条引用 [^2]
这是一条引用 [^1]
这是一条引用 [^3]
[^1]:链接
[^2]:[标题](链接)
[^3]:<br>![图片描述](图片链接)
```

## 代码块自动换行

自动换行需要 css 支持，暂不能自动启用。

## 整段删除线

`~~` 只支持对本行内容添加删除线。

如果要对大段内容添加删除线，可以用 HTML 标签 `<s>` 和 `</s>`，被该标签包围的内容会全部添加删除线。VuePress 暂不支持该代码，会将标签识别为不完整而报错。
