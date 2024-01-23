import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c,a as n,b as s,d as e,e as i}from"./app-4rBOthi_.js";const r={},p={href:"https://github.com/soulteary/docker-flare",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,[n("strong",null,"优势"),s("：")],-1),u=n("li",null,"支持本地搜索书签。",-1),m={href:"https://tools.newzone.top/data-parser/flare",target:"_blank",rel:"noopener noreferrer"},v=i(`<p><strong>问题</strong>：无法打开 <code>chrome://extensions/</code> 等非标准链接。</p><h2 id="部署代码" tabindex="-1"><a class="header-anchor" href="#部署代码" aria-hidden="true">#</a> 部署代码</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.6&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">flare</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> flare
    <span class="token key atrule">image</span><span class="token punctuation">:</span> soulteary/flare
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token comment"># 默认无需添加任何参数，如有特殊需求</span>
    <span class="token comment"># 可阅读文档 https://github.com/soulteary/docker-flare/blob/main/docs/advanced-startup.md</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> flare
    <span class="token comment"># 启用账号登陆模式</span>
    <span class="token comment"># command: flare --nologin=0</span>
    <span class="token comment"># environment:</span>
      <span class="token comment"># 如需开启用户登陆模式，需要先设置 \`nologin\` 启动参数为 \`0\`</span>
      <span class="token comment"># 如开启 \`nologin\`，未设置 FLARE_USER，则默认用户为 \`flare\`</span>
      <span class="token comment"># - FLARE_USER=flare</span>
      <span class="token comment"># 指定你自己的账号密码，如未设置 \`FLARE_USER\`，则会默认生成密码并展示在应用启动日志中</span>
      <span class="token comment"># - FLARE_PASS=your_password</span>
      <span class="token comment"># 是否开启“使用向导”，访问 \`/guide\`</span>
      <span class="token comment"># - FLARE_GUIDE=1</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 7570<span class="token punctuation">:</span><span class="token number">5005</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/flare/app<span class="token punctuation">:</span>/app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(b,_){const a=t("ExternalLinkIcon");return o(),c("div",null,[n("p",null,[s("本地导航很多，但大多加载就得 2-3 秒，而 "),n("a",p,[s("Flare"),e(a)]),s(" 只需要 0.2 秒。")]),d,n("ul",null,[u,n("li",null,[s("有类似于 excel 的链接编辑器。如果你需要批量导入，也可以用我写的 "),n("a",m,[s("Flare 书签解析工具"),e(a)]),s("。")])]),v])}const g=l(r,[["render",k],["__file","flare.html.vue"]]);export{g as default};
