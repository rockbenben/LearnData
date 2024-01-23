import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c as t,a as n,b as a,d as c,e as o}from"./app-4rBOthi_.js";const r={},p={href:"https://alist.nn.ci/zh/guide/install/docker.html",target:"_blank",rel:"noopener noreferrer"},d=o(`<p>原本我的文件保存在蓝奏云上，但免费用户有 100M 的限制，因此我将一些要分享的大文件放在 Alist，作为私人轻量网盘分享应用和文件。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">alist</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> xhofe/alist<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> alist
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/alist/data<span class="token punctuation">:</span>/opt/alist/data
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9044<span class="token punctuation">:</span><span class="token number">5244</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1026
      <span class="token punctuation">-</span> PGID=100
      <span class="token punctuation">-</span> UMASK=022
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重置密码" tabindex="-1"><a class="header-anchor" href="#重置密码" aria-hidden="true">#</a> 重置密码</h2><p>Alist 在启动时会随机生成密码。如果没有在后端看到密码，可以使用以下命令重新生成密码。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># 随机生成一个密码
sudo docker exec -it alist ./alist admin random
# 手动设置一个密码,\`NEW_PASSWORD\`是指你需要设置的密码
sudo docker exec -it alist ./alist admin set NEW_PASSWORD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加存储" tabindex="-1"><a class="header-anchor" href="#添加存储" aria-hidden="true">#</a> 添加存储</h2><p>登录后，点击左侧菜单的「存储」，添加网盘。下方提供了添加驱动所需的几个必备参数说明。</p><ul><li>「驱动」表示网盘的挂载方式，例如选择阿里云盘时，请选择「阿里云盘 Open」。</li><li>「挂载路径」相当于文件夹名称，你可以自由设置。我分享的是应用，所以挂载路径是 <code>/apps</code>。</li><li>「缓存过期时间」是存储的有效时间，默认为 30 分钟。如果你希望存储长期有效，可以将其修改为 0。</li><li>「根文件夹 ID」指的是在分享网盘中特定文件夹的标识。若要分享整个网盘，请使用 root。</li><li>「刷新令牌」是网盘的登录密钥，请按照 Alist 说明文档进行添加。</li></ul><h2 id="元信息" tabindex="-1"><a class="header-anchor" href="#元信息" aria-hidden="true">#</a> 元信息</h2><p>元信息可以为指定文件夹添加密码，防止网盘恶意访问/分享致帐号被冻结。元信息内的配置仅对<strong>访客</strong>生效。</p><ul><li>密码：访问此路径需要密码。</li><li>写入：允许访客新建目录、新文件和上传文件。</li><li>隐藏：此路径要隐藏的对象，每行一个正则表达式。</li><li>说明：进入该路径时渲染的自述文件，支持 Markdown 内容或 Markdown 链接。</li></ul>`,11);function u(v,k){const s=i("ExternalLinkIcon");return l(),t("div",null,[n("p",null,[n("a",p,[a("Alist"),c(s)]),a(" 是支持多种存储的文件列表程序，支持本地存储、阿里云盘、OneDrive、Google Drive 等。")]),d])}const b=e(r,[["render",u],["__file","alist.html.vue"]]);export{b as default};
