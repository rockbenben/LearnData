---
article: false
title: 评论插件
icon: comment
order: 3
---

LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline > Valine > giscus > Gitalk > Gitter。

## 评论插件

- [Waline](https://waline.js.org/guide/get-started.html)：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。
- [Valine](https://github.com/xCss/Valine)：快速、简洁且高效的无后端评论系统，可匿名互动。
- [giscus](https://github.com/giscus/giscus)：基于 github discussion，近似于论坛。查看 [配置方法](https://blog.csdn.net/duninet/article/details/125280107)。
- [Gitalk](https://github.com/gitalk/gitalk)：基于 github commit，需配置独立库用于存储评论。
- [Gitter](https://gitter.im/)：要登录的公共聊天室。样例如：[boardgame](https://boardgame.io/documentation/#/)，[regauge](https://itchef.github.io/regauge/#/)。

## Waline

Waline 支持 Akismet 反垃圾评论和免注册留言，但匿名留言会带来安全隐患。建议开启评论通知来避免出现极端情况。Waline 的评论通知支持多种方式，包括 QQ、微信、邮件等。对于评论的回复，仅支持邮件通知。

Vercel 项目中选择「Overview」>「Settings」>「Environment Variables」，然后按照 [Waline 评论通知](https://waline.js.org/guide/server/notification.html)配置所需环境变量。如果需要 Webhook 等更多通知方式，则查看 [Waline 服务端配置](https://waline.js.org/reference/server.html)。配置成功后，选择「Overview」>「Deployments」，进行 Redeploy，重新部署后环境变量和评论通知方会生效。目前 `*.vercel.app` 域名已经被 DNS 污染，会出现「无法加载评论」，国内使用建议绑定自定义域名，域名对备案暂无硬性要求。

### 手动部署

请注意，Vercel 和 LeanCloud 有额度限制。如果你的网站日访客超过一千人次，建议使用自行部署的方案。以下是我的部署步骤：

1. 新建数据库，并导入 [waline.sql](https://github.com/walinejs/waline/blob/main/assets/waline.sql) 以完成表和表结构的创建，之后在项目中配置如下环境变量。^[[Waline 多数据库服务支持](https://waline.js.org/guide/database.html#mysql)]

2. 配置必要的环境变量，可添加于 /etc/environment。配置完成后，需要重启项目让环境变量生效。并注意最后一行需保留空行。

   ```shell
   MYSQL_DB=""
   MYSQL_USER=""
   MYSQL_PASSWORD=""
   ```

3. 部署 Waline 服务端，使用 forever 让其持久化运行。

   ```shell
   # 切换到站点路径
   cd /www/wwwroot/node/waline

   # 安装 waline 前端包
   npm install @waline/vercel --save

   # 运行模块内的 vanilla.js 文件
   node node_modules/@waline/vercel/vanilla.js

   # 使用 forever 持久化运行程序
   sudo npm install forever -g
   forever start app.js  #启动应用
   forever stop app.js  #关闭应用
   forever restartall  #重启所有应用

   # 持久化运行 Waline
   forever start /www/wwwroot/node/waline/node_modules/@waline/vercel/vanilla.js

   # 版本升级并重启
   forever stop /www/wwwroot/node/waline/node_modules/@waline/vercel/vanilla.js
   cd /www/wwwroot/node/waline
   npm update @waline/vercel
   forever start /www/wwwroot/node/waline/node_modules/@waline/vercel/vanilla.js
   ```

4. 打开网页管理后台，通过导入事先备份的 JSON 文件来还原数据。

新手可以使用宝塔面板的 Node.js 版本管理器来部署 Node.js。安装后，受限更新版本列表，然后选择要使用的 Node 版本，将其设置为命令行版本，接着配置服务器的环境变量。虽然宝塔可以管理 Node 项目，但容易出现错误。处理流程为进入「网站」>「Node 项目」>「添加 Node 项目」，将启动选项设置为模块内的 vanilla.js 文件，将项目端口设置为 8360，并设置绑定域名。

注意：如果你选择手动部署反向代理服务器，请务必使用 Waline 官方提供的 Nginx 配置文件，否则可能会导致**无法登录后台**，或是**版本升级后仍然提示升级**等问题。如果仍然有问题，请检查是否使用 SSH 直连服务器，而非宝塔自带网页终端。宝塔网页终端执行的命令有几率出错，一定要使用正常的 SSH 链接。

```shell
server
{
  listen 80;
  listen 443 ssl http2;
  server_name waline.newzone.top;
  root /www/wwwroot/waline;
  if ($server_port !~ 443){
    rewrite ^(/.*)$ https://$host$1 permanent;
  }

  # SSL setting
  ssl_certificate    /www/server/panel/vhost/cert/waline/fullchain.pem;
  ssl_certificate_key    /www/server/panel/vhost/cert/waline/privkey.pem;
  ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
  ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
  ssl_prefer_server_ciphers on;
  ssl_session_cache shared:SSL:10m;
  ssl_session_timeout 10m;
  add_header Strict-Transport-Security "max-age=31536000";

  # proxy to 8360
  location / {
    proxy_pass http://127.0.0.1:8360;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header REMOTE-HOST $remote_addr;
    add_header X-Cache $upstream_cache_status;
    # cache
    add_header Cache-Control no-cache;
    expires 12h;
  }
}
```

## 导入时间处理

如果 Waline 数据导入还原后，评论发布时间被重置为当前时间，则说明时间格式不兼容。以下以 LeanCloud 转 MySQL 为例：

1. `2023-03-24T17:27:28.121Z` 这个时间戳中的格式 "T" 和 "Z" 不被 MySQL 支持，要将 "T" 替换为空格并将 "Z" 删除。我写了个[网页工具](https://web-platform-dzhkey.stackblitz.io)处理时间格式替换。
2. 提取数据中的 Comment、Counter 和 Users，格式为 `[{},{}……,{}]`，依次复制到 [json2sql](https://www.convertjson.com/json-to-sql.htm#) 进行操作。
3. 在 json2sql 页面中，点击按钮「Format JSON」，然后按截图勾选「Still not happy」「Enclose field names」「Backtick (`name`)」，取消勾选第一个值的 key。同时，取消勾选 objectId 的「Include」，该项将不会导入数据库。

   ![](https://img.newzone.top/2023-03-24-16-52-57.png?imageMogr2/format/webp)

4. 将「Schema.Table or View Name」依次设为「\`wl_Comment\`」「\`wl_Counter\`」「\`wl_Users\`」，取消勾选「Create Table/View」。
5. 在 Step 3: Generate output 下点击按钮「JSON TO SQL Insert」，然后点击复制按钮。
6. 进入 phpMyAdmin 数据库后台，选中要操作的表（如 wl_Comment），点击右侧的 SQL 按钮运行 SQL 查询，将复制的内容粘贴到此，并点击执行。若无报错，则说明数据导入正常。

处理后时间可以正常导入，但由于 id 结构不同，旧的评论回复将失去联系。

## Gitalk

Gitalk 是轻量化的评论组件，用户必须登录 github 才能评论，适合项目类使用。

`https://github.com/settings/developers` 页面管理已建的应用，获取 Client ID 和 Client secrets，修改应用链接。^[[超 Nice 的评论组件 —— Gitalk](https://blog.csdn.net/qq_39052513/article/details/108291272)]

将以下代码复制粘贴至 docsify 页面，即可启动 Gitalk：

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

Gitalk 缺点：

- 每次有新页面时，都需要登录 github 初始化评论区。
- 域名不能改变，Homepage URL 和 Authorization callback URL 需与你的 Gitalk 页面一致，否则页面会报错，提示初始化，无法登录 github。
