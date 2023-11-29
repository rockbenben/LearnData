---
article: false
title: Logseq
order: 1
---

与 Obsidian 相比，[Logseq](https://logseq.com/) 罗列内容更方便。Logseq 将所有行都视为节点，因此非常轻松将所需的子节点整合在一个页面，实现关键信息聚合。Logseq 更改页面标题，会同步更改所有标签名。

另外，Logseq 的日记非常强大，也可以自动套用指定模板。^[[How to Set Up an Automated Daily Template in Logseq](https://thinkstack.club/how-to-set-up-an-automated-daily-template-in-logseq/)] 但其他笔记需要手动启用模板，修改 .env 的设置 `{:week "journals"}` 被报错。继续尝试设计周记、月报的模板。

Logseq 劣势，所有页面建立在 pages 下，但可以手动修改位置。双链笔记有个特点，只要名称不变，文档位置更改也不会影响引用。

我会把远期不安排的任务，往 later 清单中放，随时可以查看提醒，但又不需要每天重复调整时间。

## 快速使用

- `[[]]` 可快速新建页面，`All pages` 中可删除空页面
- 打开右上角的「侧边栏」，使用目录管理主页面
- 将页面中内容汇总起来，比如「心理学」标签页面显示所有心理学
- 任务时，使用 later 或 now，切换后改变状态，会记录任务持续时间。
  - 如果使用 `doing` 或者 `now` 命令，它会更显眼地出现在每天日志的下方（如红框所示），以防当天记录的东西过多，或者到了第二天生成了新的日志后被忽略。**直到你将它完成为止，它才会消失**，算是一种强提醒。
- PDF 文档的标注管理一直是个大难题，而用 Logseq 后方便许多，能将注释与标签、笔记、截图统合在一起。
- TOC Generator 插件生成目录：`{{renderer :tocgen}}`。
- `shift+左键` 将新页面打开在**右侧边栏**中。
- 忽略指定文件夹？

## query

[query](https://www.bilibili.com/video/BV1eq4y1N7Su) 能按条件精准地找到结果，并动态更新在页面中，公式参考[官方文档](https://docs.logseq.com/#/page/queries)。

首先，在文本后方添加 tag，比如

```jsx
idea 1 #idea
find #research
```

接着，使用 query 命令寻找对应结果

```jsx
* and 命令
{{query (and [[research]] [[idea]])}}
{{query (and (task now later done) [[page]])}}

* or 命令
{{query (or [[page 1]] [[page 2]])}}

* not 命令
{{query (not [[page 1]] [[page 2]])}}

* 罗列为 Later 的 task
{{query (task later)}}

* 一周内的日记，且包含关键词或标签
{{query(and (between -6d today)  "#幸福")}}
```
