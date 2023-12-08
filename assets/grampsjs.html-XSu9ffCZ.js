import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as o,a as n,b as s,d as e,e as l}from"./app-fLXE89NS.js";const i={},r={href:"https://github.com/gramps-project/Gramps.js",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.grampsweb.org/user-guide/",target:"_blank",rel:"noopener noreferrer"},m=l(`<p>我打算将家里的族谱电子化，并迁移到 Gramps 上。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># https://www.grampsweb.org/Deployment/</span>
<span class="token comment"># https://github.com/gramps-project/web/blob/main/examples/docker-compose-base/docker-compose.yml</span>

<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.7&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">grampsweb</span><span class="token punctuation">:</span> <span class="token important">&amp;grampsweb</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/gramps<span class="token punctuation">-</span>project/grampsweb<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> grampsweb
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;23300:5000&quot;</span>  <span class="token comment"># host:docker</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">GRAMPSWEB_TREE</span><span class="token punctuation">:</span> <span class="token string">&quot;Gramps Web&quot;</span>  <span class="token comment"># will create a new tree if not exists</span>
      <span class="token key atrule">GRAMPSWEB_CELERY_CONFIG__broker_url</span><span class="token punctuation">:</span> <span class="token string">&quot;redis://grampsweb_redis:6379/0&quot;</span>
      <span class="token key atrule">GRAMPSWEB_CELERY_CONFIG__result_backend</span><span class="token punctuation">:</span> <span class="token string">&quot;redis://grampsweb_redis:6379/0&quot;</span>
      <span class="token key atrule">GRAMPSWEB_RATELIMIT_STORAGE_URI</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>//grampsweb_redis<span class="token punctuation">:</span>6379/1
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> grampsweb_redis
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/grampsjs/users<span class="token punctuation">:</span>/app/users  <span class="token comment"># persist user database</span>
      <span class="token punctuation">-</span> /volume1/docker/grampsjs/index<span class="token punctuation">:</span>/app/indexdir  <span class="token comment"># persist search index</span>
      <span class="token punctuation">-</span> /volume1/docker/grampsjs/thumb_cache<span class="token punctuation">:</span>/app/thumbnail_cache  <span class="token comment"># persist thumbnails</span>
      <span class="token punctuation">-</span> /volume1/docker/grampsjs/cache<span class="token punctuation">:</span>/app/cache  <span class="token comment"># persist export and report caches</span>
      <span class="token punctuation">-</span> /volume1/docker/grampsjs/secret<span class="token punctuation">:</span>/app/secret  <span class="token comment"># persist flask secret</span>
      <span class="token punctuation">-</span> /volume1/docker/grampsjs/db<span class="token punctuation">:</span>/root/.gramps/grampsdb  <span class="token comment"># persist Gramps database</span>
      <span class="token punctuation">-</span> /volume1/docker/grampsjs/media<span class="token punctuation">:</span>/app/media  <span class="token comment"># persist media files</span>
      <span class="token punctuation">-</span> /volume1/docker/grampsjs/tmp<span class="token punctuation">:</span>/tmp

  <span class="token key atrule">grampsweb_celery</span><span class="token punctuation">:</span>
    <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*grampsweb</span>  <span class="token comment"># YAML merge key copying the entire grampsweb service config</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> grampsweb_celery
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> grampsweb_redis
    <span class="token key atrule">command</span><span class="token punctuation">:</span> celery <span class="token punctuation">-</span>A gramps_webapi.celery worker <span class="token punctuation">-</span><span class="token punctuation">-</span>loglevel=INFO

  <span class="token key atrule">grampsweb_redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>alpine
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> grampsweb_redis
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(k,v){const a=p("ExternalLinkIcon");return c(),o("div",null,[n("p",null,[n("a",r,[s("Gramps.js"),e(a)]),s(" 是一款用于协作族谱编辑与展示的 Web 开源应用。它基于领开源家谱桌面应用程序 Gramps，并可与 Gramps 交互操作。不过，Gramps.js 的输入过程相对复杂，需要分别添加成员、家庭、事件、地点等元素，然后将它们组合在一起。第一次配置可能会花费一些时间，使用教程参考 "),n("a",u,[s("Gramps Web User guide"),e(a)]),s("。")]),m])}const _=t(i,[["render",d],["__file","grampsjs.html.vue"]]);export{_ as default};
