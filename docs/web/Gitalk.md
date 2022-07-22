---
title: Gitalk
order: 3
---

Gitalk 是轻量化的评论组件，用户必须登录 github 才能评论，适合项目类使用。

初次设置时，需要登录 github 初始化评论区。

Homepage URL 和 Authorization callback URL 需与你的 Gitalk 页面一致，比如：<http://localhost:3000/#/>。否则页面会报错，提示初始化，无法登录 github。

<https://github.com/settings/developers> 页面管理已建的应用，获取 Client ID 和 Client secrets，修改应用链接。

将以下代码放入 docsify 页面中，即可启动 Gitalk：

```HTML
<link rel="stylesheet" href="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.css">

<script src="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/docsify/4.12.2/plugins/gitalk.min.js"></script>
<script src="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.js"></script>
<script>
    /* 使用下面的 Javascript 代码生成 gitalk 插件 */
    const gitalk = new Gitalk({
        clientID: '2f3da234d27ed9a7c290',
        clientSecret: 'd64c45594858477fff0c234c3ed3947a53b0a9ac',
        repo: 'docsifytalk',        //仓库名称 (GitHub repo)
        owner: 'rockbenben',        //仓库拥有者 (GitHub repo owner)
        admin: ['rockbenben'],      //仓库所有者和协作者。（对此存储库具有写访问权的用户）
        // id: location.pathname,   // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    })
</script>
```

参考资料：

- [超 Nice 的评论组件 —— Gitalk](https://blog.csdn.net/qq_39052513/article/details/108291272)
