import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as o,a as n,b as s,d as l,e as i}from"./app-LAQAoE18.js";const p={},r={href:"https://github.com/hectorqin/reader",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>reader 提供了书源管理、书架布局定制、强大的搜索功能、书海浏览、阅读体验的优化，支持移动端适配、换源、多种翻页方式和手势支持。用户可以自定义主题和样式，进行 WebDAV 同步，实施文字替换过滤，甚至听书功能（部分浏览器支持）。此外，它支持书籍的导入和分组，包括本地 TXT、EPUB、UMD 和 PDF 格式，以及 RSS 订阅。reader 还提供定时书架更新、并发搜书功能，以及本地书仓，同时支持 Kindle 阅读，满足多样化的阅读需求。</p><h2 id="异常监测" tabindex="-1"><a class="header-anchor" href="#异常监测" aria-hidden="true">#</a> 异常监测</h2><p>我设置了数千条书源，导致容器经常报错，几乎每隔几天就会出现提示「点击设置后端接口前缀」。这不仅使 reader 无法正常使用，还会导致 NAS 的 CPU 被疯狂占用，必须重启容器才能恢复正常。</p><p>因此，我使用 Uptime Kuma 监测 reader 后端 <code>http://localhost:8080/reader3/getUserInfo</code> 的运行状态，当异常时就触发 Docker API 执行指定容器的重启命令。值得注意的是，Uptime Kuma 在恢复时也会触发通知，意味着可能会两次重启 reader 容器。如果不希望发生多次重启，可以考虑使用 n8n 来判断状态。</p><h2 id="部署命令" tabindex="-1"><a class="header-anchor" href="#部署命令" aria-hidden="true">#</a> 部署命令</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># https://github.com/hectorqin/reader/blob/master/docker-compose.yml</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.1&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token comment"># reader 在线阅读</span>
  <span class="token comment"># 公开服务器(服务器位于日本)：[https://reader.nxnow.top](https://reader.nxnow.top) 测试账号/密码分别为 guest/guest123，也可自行创建账号添加书源，不定期删除长期未登录账号 (2 周)</span>
  <span class="token comment"># 书源集合 : [https://legado.aoaostar.com/](https://legado.aoaostar.com/) 点击打开连接，添加远程书源即可</span>
  <span class="token comment"># 公众号汇总 : [https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MzMyMDgyMA==&amp;action=getalbum&amp;album_id=2397535253763801090#wechat_redirect](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MzMyMDgyMA==&amp;action=getalbum&amp;album_id=2397535253763801090#wechat_redirect)</span>
  <span class="token comment"># 手动更新方式 : docker-compose pull &amp;&amp; docker-compose up -d</span>
  <span class="token key atrule">reader</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> hectorqin/reader
    <span class="token comment">#image: hectorqin/reader:openj9-latest #docker 镜像，arm64 架构或小内存机器优先使用此镜像。启用需删除上一行</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> reader <span class="token comment">#容器名 可自行修改</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 4396<span class="token punctuation">:</span><span class="token number">8080</span> <span class="token comment">#4396 端口映射可自行修改</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/reader/logs<span class="token punctuation">:</span>/logs <span class="token comment">#log 映射目录 /home/reader/logs 映射目录可自行修改</span>
      <span class="token punctuation">-</span> /volume1/docker/reader/storage<span class="token punctuation">:</span>/storage <span class="token comment">#数据映射目录 /home/reader/storage 映射目录可自行修改</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> SPRING_PROFILES_ACTIVE=prod
      <span class="token punctuation">-</span> READER_APP_USERLIMIT=10 <span class="token comment">#用户上限，默认 50</span>
      <span class="token punctuation">-</span> READER_APP_USERBOOKLIMIT=200 <span class="token comment">#用户书籍上限，默认 200</span>
      <span class="token punctuation">-</span> READER_APP_CACHECHAPTERCONTENT=true <span class="token comment">#开启缓存章节内容 V2.0</span>
      <span class="token comment"># READER_APP_REMOTEWEBVIEWAPI=http://readerwebview:8050 #启用 webview(若下方 readerwebview 容器不开启需注释此行</span>
      <span class="token comment"># ↓多用户模式配置↓</span>
      <span class="token comment">#- READER_APP_SECURE=true #开启登录鉴权，开启后将支持多用户模式</span>
      <span class="token comment">#- READER_APP_SECUREKEY=adminpwd  #管理员密码  建议修改</span>
      <span class="token comment">#- READER_APP_INVITECODE=registercode #注册邀请码 建议修改，如不需要可注释或删除</span>
    <span class="token comment"># 如需支持 webview 书源，打开 (占用较大，不需要可加 # 注释)</span>
    <span class="token comment">#  readerwebview:</span>
    <span class="token comment">#    image: hectorqin/remote-webview</span>
    <span class="token comment">#    container_name: readerwebview</span>
    <span class="token comment">#    restart: always</span>
    <span class="token comment">#    environment:</span>
    <span class="token comment">#      - TZ=Asia/Shanghai</span>
    <span class="token comment"># volumes:</span>
    <span class="token comment">#  reader:</span>
    <span class="token comment">#  readerwebview:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原本我在 compose 命令中添加 healthcheck，希望当容器 unhealth 时自动重启。但实现起来更加复杂，需要另外使用容器，因此改用 Uptime Kuma 方案。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># ↓健康检查：当书源较多时，可能隔几天就会出现后端崩溃，会提示「点击设置后端接口前缀」↓</span>
<span class="token comment"># ↓此时可通过健康检查重启后端，以解决此问题，如不需要可注释或删除↓</span>
<span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
  <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;wget&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;--spider&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;-S&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;http://localhost:8080/reader3/getUserInfo&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span> <span class="token comment"># 需要检查的健康状态的 URL</span>
  <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10m <span class="token comment"># 健康检查的间隔时间</span>
  <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 30s <span class="token comment"># 健康检查的超时时间</span>
  <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># 健康检查失败后的重试次数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function d(u,v){const a=t("ExternalLinkIcon");return c(),o("div",null,[n("p",null,[n("a",r,[s("reader"),l(a)]),s(" 是阅读 3 的服务器版，为阅读爱好者提供全面的功能支持。")]),m])}const h=e(p,[["render",d],["__file","reader.html.vue"]]);export{h as default};
