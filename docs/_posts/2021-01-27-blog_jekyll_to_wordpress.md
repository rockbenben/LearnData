---
title: Jekyll 博客迁移－从 Markdown 到 WordPress
date: 2021-01-27
category:
  - 博客
tag:
  - Jekyll
  - WordPress
order: -35
---

2005 年开始在 MSN space 写博客，期间配合 Google Sidewiki(短命) 记录感想。六年后，MSN space 关闭，旧博客被动转移到 WordPress 托管，暂停使用博客。

2018 年偶尔接触到 Jekyll，被其简洁的界面和便捷性打动，博客复活。本地用 Markdown 编辑排版，同步 github 发布，博客方向则从感想记录转移到知识输出。

Jekyll 用着太舒服，不知不觉就过了三年。但随着文章越来越多，修改也愈加困难，甚至逐渐习惯只更新专栏，而将博客仅作初版发布。Jekyll 已经失去了知识记录参考的初衷，决定将博客从 Jekyll 迁移到 WordPress，文章的初次排版编辑依旧使用 Markdown。

![](https://img.newzone.top/20210128124408.png?imageMogr2/thumbnail/500x)

## 迁移步骤

这里迁移的是 Jekyll 的 [Hux blog 模板](https://github.com/Huxpro/huxpro.github.io)，Hexo 或其他 Jekyll 博客可以参照微调。

1. 复制博客主目录下的 feed.xml 文件，重命名为「feed-wp.xml」。如果目录内不存在 feed.xml，可尝试 rss.xml 或 atom.xml。

2. 修改 feed-wp.xml 文件中的 `for post in site.posts limit:100 %`，该项为 rss 最低生成量，我们导出所有文章，因此将该值修改为 100。

3. 参照下方内容，按 WordPress 所需 rss 格式修改 feed-wp.xml 文件的 `item` 部分，并在文件顶部的 `<rss>` 元素内添加 `xmlns:content="http://purl.org/rss/1.0/modules/content/"`，避免 xml 格式报错。

   ```xml
   <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" >
     <item>
       <title>标题</title>
       <pubDate>发布日期</pubDate>
       <content:encoded>内容</content:encoded>
       <category>标签/目录 (该项将全部转为目录)</category>
     </item>
   </rss>
   ```

4. 登录 WordPress 后台，工具－导入－安装并启用插件 **FeedWordPress** 。自带 RSS 导入器许久不更新，极易报错，不推荐。

5. 后台－Syndication－添加 rss 源，比如添加源 `xxx.com/feed-wp.xml`，其中 `xxx.com` 指你的博客网址。

   ![](https://img.newzone.top/20210128120956.gif)

参考资料：

- [有没有办法把 Markdown 写的博客迁移到 wordpress？](https://www.v2ex.com/t/73385)

- [WordPress 从 RSS 导入文章](https://www.yiyult.com/201903155699.html)

- [有关 WordPress 的 Rss 导入指南](https://www.cnblogs.com/u0mo5/p/4100927.html)

- [How to create <content:encoded> in RSS](https://stackoverflow.com/questions/33212592/how-to-create-contentencoded-in-rss)
