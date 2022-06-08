# 静态部署

笔记类用 md 编辑，然后同步到 GitHub，接着用 GitHub Action 同步到 Gitee，最后形成国内静态页 Gitee page。

不过这个方案会有一些问题，就是 gitee page 免费版是无法自定义域名的。

那是否我能够把 GitHub Action 同步到？我的服务器上面，而不是说给 page。这样子是不是？而且反应速度也更快。

这方法确实是比较好，所以我现在要要找的是，呃，能够用。嘿。GitHub，action 同步到服务器里面的方法 OK 好。

aliyun-oss-website-action：https://github.com/marketplace/actions/aliyun-oss-website-action

