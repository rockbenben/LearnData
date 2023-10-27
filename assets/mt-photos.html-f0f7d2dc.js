import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as p,a as n,b as s,d as l,e as c}from"./app-21610505.js";const i={},u={href:"https://mtmt.tech/",target:"_blank",rel:"noopener noreferrer"},r=c(`<p>我之所以决定下单，是因为它能够通过网页分享特定的图片影集。这一功能大大简化了与家人分享宝宝照片/视频的过程。然而，在使用 MT Photos 的过程中，我发现视频播放可能需要切换至全屏模式才能正常播放。向开发者反馈后，对方说后续会解决这个问题。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mtphotos</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mtphotos/mt<span class="token punctuation">-</span>photos<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mtphotos
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8162<span class="token punctuation">:</span><span class="token number">8063</span>
      <span class="token punctuation">-</span> 8163<span class="token punctuation">:</span><span class="token number">8163</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/MTphotos/config<span class="token punctuation">:</span>/config
      <span class="token punctuation">-</span> /volume3/Pictures/upload<span class="token punctuation">:</span>/upload
      <span class="token punctuation">-</span> /volume3/Pictures/photos<span class="token punctuation">:</span>/photos
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
      <span class="token punctuation">-</span> SSL_NAME=xxx.newzone.top
      <span class="token punctuation">-</span> MT_SERVER_SSL_PORT=8163
      <span class="token comment">#- RAW_SUPPORT=open</span>
  <span class="token comment"># 智能识别 API 容器，用于文本识别、以文搜图、场景识别。不需要的话，可删除本部分。</span>
  <span class="token key atrule">mtphotosai</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mtphotos/mt<span class="token punctuation">-</span>photos<span class="token punctuation">-</span>ai<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mtphotosai
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8164<span class="token punctuation">:</span><span class="token number">8000</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token comment">#在 MT Photos 后台添加 API 时需要填入 API_AUTH_KEY（字符串），请自行修改。</span>
      <span class="token punctuation">-</span> API_AUTH_KEY=apikey1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(k,m){const a=t("ExternalLinkIcon");return o(),p("div",null,[n("p",null,[n("a",u,[s("MT Photos"),l(a)]),s(" 是专为 NAS 用户设计的照片管理系统。它能自动整理和分类您的照片，包括按时间、地点、人物和照片类型分类。初次使用可获得一个月的免费授权，之后需要付费 99 元购买永久使用证。MT Photos 后台每周自动检查授权状态。")]),r])}const _=e(i,[["render",d],["__file","mt-photos.html.vue"]]);export{_ as default};
