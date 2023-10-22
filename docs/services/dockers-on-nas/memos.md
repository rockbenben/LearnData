---
article: false
title: Memos：碎片化记录
order: 5
---

[Memos](https://github.com/usememos/memos) 可视为开源版的 flomo，其界面及功能非常相似，适用于碎片化记录和灵感捕捉，同时支持小范围的分享，适用于个人微博记录。Memos 能以时间线形式回顾你选择的日期的记录，并允许通过 Telegram 机器人输入内容。此外，你还可以选择将数据保存在第三方云存储中。

```yml
version: "3.0"
services:
  memos:
    image: neosmemo/memos:latest
    container_name: memos
    volumes:
      - /volume1/docker/memos:/var/opt/memos
    ports:
      - 5230:5230
```

如果你使用 Obsidian，还可以考虑使用其插件 [Obsidian-Memos](https://github.com/Quorafind/Obsidian-Memos)，它与 Memos 功能类似，但笔记将保存在 Obsidian 中。你还可以使用 Memos Sync 插件将 memos 记录同步至 Obsidian。

flomo 支持将所有笔记导出，并允许通过微信输入内容。flomo Pro 每日会随机选取 12 条符合条件的内容，让你过往的记录发挥更大的价值。

然而，对于我个人而言，flomo 和 Memos 更适合碎片化记录，无需频繁回顾。除了记录心情类日记之外，有价值的信息可以以知识点的形式保存在思源笔记中，然后通过思源笔记的间隔重复闪卡功能来加强记忆。
