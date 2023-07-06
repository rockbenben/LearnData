import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as r,a as n,b as e,d as a,e as t}from"./app-36592fea.js";const c={},d=n("p",null,"LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline > Valine > giscus > Gitalk > Gitter。",-1),p=n("h2",{id:"评论插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#评论插件","aria-hidden":"true"},"#"),e(" 评论插件")],-1),u={href:"https://waline.js.org/guide/get-started.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/xCss/Valine",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/giscus/giscus",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/duninet/article/details/125280107",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"},_={href:"https://gitter.im/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://boardgame.io/documentation/#/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://itchef.github.io/regauge/#/",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"waline",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#waline","aria-hidden":"true"},"#"),e(" Waline")],-1),w=n("p",null,"Waline 支持 Akismet 反垃圾评论和免注册留言，但匿名留言会带来安全隐患。建议开启评论通知来避免出现极端情况。Waline 的评论通知支持多种方式，包括 QQ、微信、邮件等。对于评论的回复，仅支持邮件通知。",-1),S={href:"https://waline.js.org/guide/server/notification.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://waline.js.org/reference/server.html",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"*.vercel.app",-1),C=n("h3",{id:"手动部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#手动部署","aria-hidden":"true"},"#"),e(" 手动部署")],-1),q=n("p",null,"请注意，Vercel 和 LeanCloud 有额度限制。如果你的网站日访客超过一千人次，建议使用自行部署的方案。以下是我的部署步骤：",-1),E={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sql",target:"_blank",rel:"noopener noreferrer"},L=n("sup",{class:"footnote-ref"},[n("a",{href:"#footnote1"},"[1]"),n("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),j=t(`<li><p>配置必要的环境变量，可添加于 /etc/environment。配置完成后，需要重启项目让环境变量生效。并注意最后一行需保留空行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">MYSQL_DB</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
<span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
<span class="token assign-left variable">MYSQL_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>部署 Waline 服务端，使用 forever 让其持久化运行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换到站点路径</span>
<span class="token builtin class-name">cd</span> /www/wwwroot/node/waline

<span class="token comment"># 安装 waline 前端包</span>
<span class="token function">npm</span> <span class="token function">install</span> @waline/vercel <span class="token parameter variable">--save</span>

<span class="token comment"># 运行模块内的 vanilla.js 文件</span>
<span class="token function">node</span> node_modules/@waline/vercel/vanilla.js

<span class="token comment"># 使用 forever 持久化运行程序</span>
<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> forever <span class="token parameter variable">-g</span>
forever start app.js  <span class="token comment">#启动应用</span>
forever stop app.js  <span class="token comment">#关闭应用</span>
forever restartall  <span class="token comment">#重启所有应用</span>

<span class="token comment"># 持久化运行 Waline</span>
forever start /www/wwwroot/node/waline/node_modules/@waline/vercel/vanilla.js

<span class="token comment"># 版本升级并重启</span>
forever stop /www/wwwroot/node/waline/node_modules/@waline/vercel/vanilla.js
<span class="token builtin class-name">cd</span> /www/wwwroot/node/waline
<span class="token function">npm</span> update @waline/vercel
forever start /www/wwwroot/node/waline/node_modules/@waline/vercel/vanilla.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>打开网页管理后台，通过导入事先备份的 JSON 文件来还原数据。</p></li>`,3),H=t(`<p>新手可以使用宝塔面板的 Node.js 版本管理器来部署 Node.js。安装后，受限更新版本列表，然后选择要使用的 Node 版本，将其设置为命令行版本，接着配置服务器的环境变量。虽然宝塔可以管理 Node 项目，但容易出现错误。处理流程为进入「网站」&gt;「Node 项目」&gt;「添加 Node 项目」，将启动选项设置为模块内的 vanilla.js 文件，将项目端口设置为 8360，并设置绑定域名。</p><p>注意：如果你选择手动部署反向代理服务器，请务必使用 Waline 官方提供的 Nginx 配置文件，否则可能会导致<strong>无法登录后台</strong>，或是<strong>版本升级后仍然提示升级</strong>等问题。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server
<span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  listen <span class="token number">443</span> ssl http2<span class="token punctuation">;</span>
  server_name waline.newzone.top<span class="token punctuation">;</span>
  root /www/wwwroot/waline<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$server_port</span> <span class="token operator">!</span>~ <span class="token number">443</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    rewrite ^<span class="token punctuation">(</span>/.*<span class="token punctuation">)</span>$ https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># SSL setting</span>
  ssl_certificate    /www/server/panel/vhost/cert/waline/fullchain.pem<span class="token punctuation">;</span>
  ssl_certificate_key    /www/server/panel/vhost/cert/waline/privkey.pem<span class="token punctuation">;</span>
  ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3<span class="token punctuation">;</span>
  ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:<span class="token operator">!</span>MD5<span class="token punctuation">;</span>
  ssl_prefer_server_ciphers on<span class="token punctuation">;</span>
  ssl_session_cache shared:SSL:10m<span class="token punctuation">;</span>
  ssl_session_timeout 10m<span class="token punctuation">;</span>
  add_header Strict-Transport-Security <span class="token string">&quot;max-age=31536000&quot;</span><span class="token punctuation">;</span>

  <span class="token comment"># proxy to 8360</span>
  location / <span class="token punctuation">{</span>
    proxy_pass http://127.0.0.1:8360<span class="token punctuation">;</span>
    proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
    proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
    proxy_set_header X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span>
    proxy_set_header REMOTE-HOST <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    add_header X-Cache <span class="token variable">$upstream_cache_status</span><span class="token punctuation">;</span>
    <span class="token comment"># cache</span>
    add_header Cache-Control no-cache<span class="token punctuation">;</span>
    expires 12h<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入时间处理" tabindex="-1"><a class="header-anchor" href="#导入时间处理" aria-hidden="true">#</a> 导入时间处理</h2><p>如果 Waline 数据导入还原后，评论发布时间被重置为当前时间，则说明时间格式不兼容。以下以 LeanCloud 转 MySQL 为例：</p>`,5),N=n("code",null,"2023-03-24T17:27:28.121Z",-1),T={href:"https://web-platform-dzhkey.stackblitz.io",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"[{},{}……,{}]",-1),D={href:"https://www.convertjson.com/json-to-sql.htm#",target:"_blank",rel:"noopener noreferrer"},W=n("li",null,[n("p",null,[e("在 json2sql 页面中，点击按钮「Format JSON」，然后按截图勾选「Still not happy」「Enclose field names」「Backtick ("),n("code",null,"name"),e(")」，取消勾选第一个值的 key。同时，取消勾选 objectId 的「Include」，该项将不会导入数据库。")]),n("figure",null,[n("img",{src:"https://img.newzone.top/2023-03-24-16-52-57.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")])],-1),G=n("li",null,[n("p",null,"将「Schema.Table or View Name」依次设为「`wl_Comment`」「`wl_Counter`」「`wl_Users`」，取消勾选「Create Table/View」。")],-1),V=n("li",null,[n("p",null,"在 Step 3: Generate output 下点击按钮「JSON TO SQL Insert」，然后点击复制按钮。")],-1),M=n("li",null,[n("p",null,"进入 phpMyAdmin 数据库后台，选中要操作的表（如 wl_Comment），点击右侧的 SQL 按钮运行 SQL 查询，将复制的内容粘贴到此，并点击执行。若无报错，则说明数据导入正常。")],-1),Q=t(`<p>处理后时间可以正常导入，但由于 id 结构不同，旧的评论回复将失去联系。</p><h2 id="gitalk" tabindex="-1"><a class="header-anchor" href="#gitalk" aria-hidden="true">#</a> Gitalk</h2><p>Gitalk 是轻量化的评论组件，用户必须登录 github 才能评论，适合项目类使用。</p><p><code>https://github.com/settings/developers</code> 页面管理已建的应用，获取 Client ID 和 Client secrets，修改应用链接。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>将以下代码复制粘贴至 docsify 页面，即可启动 Gitalk：</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.css&quot;&gt;

&lt;script src=&quot;https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/docsify/4.12.2/plugins/gitalk.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    /* 使用下面的 Javascript 代码生成 gitalk 插件 */
    const gitalk = new Gitalk({
        clientID: &#39;2f3da234d27ed9a7c290&#39;,
        clientSecret: &#39;d64c45594858477fff0c234c3ed3947a53b0a9ac&#39;,
        repo: &#39;docsifytalk&#39;,        //仓库名称 (GitHub repo)
        owner: &#39;rockbenben&#39;,        //仓库拥有者 (GitHub repo owner)
        admin: [&#39;rockbenben&#39;],      //仓库所有者和协作者。（对此存储库具有写访问权的用户）
        // id: location.pathname,   // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gitalk 缺点：</p><ul><li>每次有新页面时，都需要登录 github 初始化评论区。</li><li>域名不能改变，Homepage URL 和 Authorization callback URL 需与你的 Gitalk 页面一致，否则页面会报错，提示初始化，无法登录 github。</li></ul><hr class="footnotes-sep">`,9),R={class:"footnotes"},$={class:"footnotes-list"},O={id:"footnote1",class:"footnote-item"},I={href:"https://waline.js.org/guide/database.html#mysql",target:"_blank",rel:"noopener noreferrer"},z=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),F={id:"footnote2",class:"footnote-item"},B={href:"https://blog.csdn.net/qq_39052513/article/details/108291272",target:"_blank",rel:"noopener noreferrer"},U=n("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function J(X,P){const s=l("ExternalLinkIcon");return o(),r("div",null,[d,p,n("ul",null,[n("li",null,[n("a",u,[e("Waline"),a(s)]),e("：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。")]),n("li",null,[n("a",v,[e("Valine"),a(s)]),e("：快速、简洁且高效的无后端评论系统，可匿名互动。")]),n("li",null,[n("a",m,[e("giscus"),a(s)]),e("：基于 github discussion，近似于论坛。查看 "),n("a",h,[e("配置方法"),a(s)]),e("。")]),n("li",null,[n("a",b,[e("Gitalk"),a(s)]),e("：基于 github commit，需配置独立库用于存储评论。")]),n("li",null,[n("a",_,[e("Gitter"),a(s)]),e("：要登录的公共聊天室。样例如："),n("a",k,[e("boardgame"),a(s)]),e("，"),n("a",f,[e("regauge"),a(s)]),e("。")])]),g,w,n("p",null,[e("Vercel 项目中选择「Overview」>「Settings」>「Environment Variables」，然后按照 "),n("a",S,[e("Waline 评论通知"),a(s)]),e("配置所需环境变量。如果需要 Webhook 等更多通知方式，则查看 "),n("a",x,[e("Waline 服务端配置"),a(s)]),e("。配置成功后，选择「Overview」>「Deployments」，进行 Redeploy，重新部署后环境变量和评论通知方会生效。目前 "),y,e(" 域名已经被 DNS 污染，会出现「无法加载评论」，国内使用建议绑定自定义域名，域名对备案暂无硬性要求。")]),C,q,n("ol",null,[n("li",null,[n("p",null,[e("新建数据库，并导入 "),n("a",E,[e("waline.sql"),a(s)]),e(" 以完成表和表结构的创建，之后在项目中配置如下环境变量。"),L])]),j]),H,n("ol",null,[n("li",null,[n("p",null,[N,e(' 这个时间戳中的格式 "T" 和 "Z" 不被 MySQL 支持，要将 "T" 替换为空格并将 "Z" 删除。我写了个'),n("a",T,[e("网页工具"),a(s)]),e("处理时间格式替换。")])]),n("li",null,[n("p",null,[e("提取数据中的 Comment、Counter 和 Users，格式为 "),A,e("，依次复制到 "),n("a",D,[e("json2sql"),a(s)]),e(" 进行操作。")])]),W,G,V,M]),Q,n("section",R,[n("ol",$,[n("li",O,[n("p",null,[n("a",I,[e("Waline 多数据库服务支持"),a(s)]),e(),z])]),n("li",F,[n("p",null,[n("a",B,[e("超 Nice 的评论组件 —— Gitalk"),a(s)]),e(),U])])])])])}const K=i(c,[["render",J],["__file","Comments.html.vue"]]);export{K as default};
