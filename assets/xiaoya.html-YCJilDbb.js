import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as i,c as l,a as n,b as a,d as e,e as c}from"./app-bjTY2Ehh.js";const p={},r={href:"https://hub.docker.com/r/xiaoyaliu/alist",target:"_blank",rel:"noopener noreferrer"},d={href:"https://xiaoyaliu.notion.site/xiaoya-docker-69404af849504fa5bcf9f2dd5ecaa75f",target:"_blank",rel:"noopener noreferrer"},u=n("p",null,"请注意，使用阿里云盘时可能需要定期更新 mytoken。只需访问网址 https://aliyuntoken.vercel.app/ ，并使用阿里云盘 app 扫描二维码即可获取。",-1),k=n("h2",{id:"emby-小雅",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#emby-小雅","aria-hidden":"true"},"#"),a(" Emby + 小雅")],-1),m={href:"https://xiaoyaliu.notion.site/d353c9ceb15444d7b8e21ce6097ed739?v=145044ac8252470a9feef094ff1db520",target:"_blank",rel:"noopener noreferrer"},v=c(`<p>此方法可以将小雅的内容与 Emby 整合，把小雅当作资源库，Emby 则作为展示平台。它们通过 strm 文件相连，并通过同步软件保持内容同步。但请留意，元数据占用的空间可达 160G，请确保有充足的储存空间。下载元数据可能会影响你现有的 Emby 数据，最好在操作前进行配置备份。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 一键下载元数据（不需进入docker），媒体库目录与小雅配置目录</span>
<span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> http://docker.xiaoya.pro/update_metainfo.sh<span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-s</span> /volume1/docker/emby /volume1/docker/xiaoya
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="无法下载问题" tabindex="-1"><a class="header-anchor" href="#无法下载问题" aria-hidden="true">#</a> 无法下载问题</h2><p>在线播放时偶尔会出现问题，因此我考虑将资源下载到本地。但尝试将其保存到我的阿里云盘并未成功。</p><p>我通过 <code>show_my_ali.txt</code> 文件在阿雅 alist 中显示了我的云盘内容，但之后的移动和复制操作均失败，显示错误<code>Request failed with status code 403</code>。</p><p>目前，我只能通过单个文件进行下载。</p><h2 id="部署代码" tabindex="-1"><a class="header-anchor" href="#部署代码" aria-hidden="true">#</a> 部署代码</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.3&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">xiaoya</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> xiaoyaliu/alist<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> xiaoya
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/xiaoya<span class="token punctuation">:</span>/data
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6789<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1026
      <span class="token punctuation">-</span> PGID=100
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function b(h,y){const s=o("ExternalLinkIcon");return i(),l("div",null,[n("p",null,[n("a",r,[a("xiaoyaliu/alist"),e(s)]),a(" 是一个基于阿里云盘的 alist 方案，集成了众多影音资源，免去了自行搜索的麻烦。具体配置可参考"),n("a",d,[a("xiaoya docker 配置指南"),e(s)]),a("。")]),u,k,n("p",null,[a("若你正在使用 Emby，可以浏览"),n("a",m,[a("《如何使用 EMBY 展示小雅内容》教程"),e(s)]),a("，以增强播放体验的稳定性。")]),v])}const x=t(p,[["render",b],["__file","xiaoya.html.vue"]]);export{x as default};
