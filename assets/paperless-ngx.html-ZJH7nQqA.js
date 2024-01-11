import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as t,c as l,a as n,b as s,d as c,e as o}from"./app-Gs_rGsV4.js";const i={},u={href:"https://docs.paperless-ngx.com/",target:"_blank",rel:"noopener noreferrer"},r=o(`<p>Paperless-ngx 对文档执行 OCR，添加可搜索和可选择的文本，甚至可以对仅使用图像扫描的文档进行添加。支持 PDF、图片、纯文本文件、Office 文档（Word、Excel、Powerpoint 和 LibreOffice 等效项）等。</p><h2 id="部署命令" tabindex="-1"><a class="header-anchor" href="#部署命令" aria-hidden="true">#</a> 部署命令</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># https://github.com/paperless-ngx/paperless-ngx/blob/main/docker/compose/docker-compose.portainer.yml</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.4&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">paperlessbroker</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.io/library/redis<span class="token punctuation">:</span><span class="token number">7</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> paperlessbroker
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/paperless<span class="token punctuation">-</span>ngx/redisdata<span class="token punctuation">:</span>/data

  <span class="token key atrule">paperlessdb</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.io/library/postgres<span class="token punctuation">:</span><span class="token number">15</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> paperlessdb
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/paperless<span class="token punctuation">-</span>ngx/pgdata<span class="token punctuation">:</span>/var/lib/postgresql/data
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">POSTGRES_DB</span><span class="token punctuation">:</span> paperless
      <span class="token key atrule">POSTGRES_USER</span><span class="token punctuation">:</span> paperless
      <span class="token key atrule">POSTGRES_PASSWORD</span><span class="token punctuation">:</span> paperless

  <span class="token key atrule">paperlesswebserver</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/paperless<span class="token punctuation">-</span>ngx/paperless<span class="token punctuation">-</span>ngx<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> paperlesswebserver
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> paperlessdb
      <span class="token punctuation">-</span> paperlessbroker
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9035:8000&quot;</span>
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span>
        <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-fs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-S&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;--max-time&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:8000&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 30s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/paperless<span class="token punctuation">-</span>ngx/data<span class="token punctuation">:</span>/usr/src/paperless/data
      <span class="token punctuation">-</span> /volume1/docker/paperless<span class="token punctuation">-</span>ngx/media<span class="token punctuation">:</span>/usr/src/paperless/media
      <span class="token punctuation">-</span> /volume1/docker/paperless<span class="token punctuation">-</span>ngx/export<span class="token punctuation">:</span>/usr/src/paperless/export
      <span class="token punctuation">-</span> /volume1/docker/paperless<span class="token punctuation">-</span>ngx/consume<span class="token punctuation">:</span>/usr/src/paperless/consume
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">PAPERLESS_REDIS</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>//paperlessbroker<span class="token punctuation">:</span><span class="token number">6379</span>
      <span class="token key atrule">PAPERLESS_DBHOST</span><span class="token punctuation">:</span> paperlessdb
      <span class="token key atrule">USERMAP_UID</span><span class="token punctuation">:</span> <span class="token number">1026</span>
      <span class="token key atrule">USERMAP_GID</span><span class="token punctuation">:</span> <span class="token number">100</span>
      <span class="token comment"># paperless 支持的语言（已内置英语、德语、意大利语、法语）</span>
      <span class="token comment"># See https://packages.debian.org/search?keywords=tesseract-ocr-&amp;searchon=names&amp;suite=buster</span>
      <span class="token comment"># for available languages.</span>
      <span class="token key atrule">PAPERLESS_OCR_LANGUAGES</span><span class="token punctuation">:</span> chi<span class="token punctuation">-</span>sim chi<span class="token punctuation">-</span>tra
      <span class="token comment"># OCR 语言</span>
      <span class="token key atrule">PAPERLESS_OCR_LANGUAGE</span><span class="token punctuation">:</span> eng+chi_sim
      <span class="token key atrule">PAPERLESS_SECRET_KEY</span><span class="token punctuation">:</span> change<span class="token punctuation">-</span>me
      <span class="token key atrule">PAPERLESS_TIME_ZONE</span><span class="token punctuation">:</span> Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署完成后，需用 ssh 终端执行命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> paperlesswebserver <span class="token function">bash</span>
python3 manage.py createsuperuser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>依次输入 username、email、password。如果出现提示密码较弱，输入 y 继续。之后这些都可以在后台再修改。</p>`,6);function k(d,v){const a=p("ExternalLinkIcon");return t(),l("div",null,[n("p",null,[n("a",u,[s("Paperless-ngx"),c(a)]),s(" 是一个开源文档管理系统，可将您的物理文档转换为可搜索的在线档案。")]),r])}const g=e(i,[["render",k],["__file","paperless-ngx.html.vue"]]);export{g as default};
