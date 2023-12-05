import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as l,c as o,a as n,b as e,d as c,e as p}from"./app-j_BNNnD0.js";const i={},r={href:"https://github.com/OwO-Network/DeepLX/",target:"_blank",rel:"noopener noreferrer"},u=p(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">deeplx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/owo<span class="token punctuation">-</span>network/deeplx<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> deeplx
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;32770:1188&quot;</span>
    <span class="token comment"># environment:</span>
      <span class="token comment"># 如果设置了 TOKEN，则每个请求都需要包含 Authorization 标头。</span>
      <span class="token comment"># - TOKEN=helloworld</span>
      <span class="token comment"># 如果设置了 AUTHKEY，在 429 响应（请求过多/过快）后，会使用官方的 AuthKey 进行请求。如果同时使用多个 authKey，需要用逗号分隔。</span>
      <span class="token comment"># - AUTHKEY=xxxxxxx:fx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你注册了 DeepL 的免费接口，建议设置 AUTHKEY 以加快翻译速度。</p>`,2);function d(m,k){const s=t("ExternalLinkIcon");return l(),o("div",null,[n("p",null,[n("a",r,[e("DeepLX"),c(s)]),e(" 是基于 DeepL 的免费翻译服务，可以将 DeepL Free API 转换为本地 API，以供第三方程序使用。")]),u])}const _=a(i,[["render",d],["__file","deeplx.html.vue"]]);export{_ as default};
