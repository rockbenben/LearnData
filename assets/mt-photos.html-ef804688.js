import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as p,a as n,b as s,d as c,e as l}from"./app-1856a9f0.js";const i={},u={href:"https://mtmt.tech/",target:"_blank",rel:"noopener noreferrer"},r=l(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mtphotos</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mtphotos/mt<span class="token punctuation">-</span>photos<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mtphotos
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8063<span class="token punctuation">:</span><span class="token number">8063</span>
      <span class="token punctuation">-</span> 8163<span class="token punctuation">:</span><span class="token number">8163</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/MTphotos/config<span class="token punctuation">:</span>/config
      <span class="token punctuation">-</span> /volume3/Pictures/upload<span class="token punctuation">:</span>/upload
      <span class="token punctuation">-</span> /volume3/Pictures/photos<span class="token punctuation">:</span>/photos
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
      <span class="token punctuation">-</span> SSL_NAME=xxx.newzone.top
      <span class="token punctuation">-</span> MT_SERVER_SSL_PORT=8163
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我在使用 MT Photos 时发现，视频播放可能需要全屏模式才能正常播放。开发者说后续会解决这个问题。</p>`,2);function d(k,m){const a=t("ExternalLinkIcon");return o(),p("div",null,[n("p",null,[n("a",u,[s("MT Photos"),c(a)]),s(" 是一款专为 Nas 用户设计的照片管理系统。它能自动整理和分类您的照片，包括按时间、地点、人物和照片类型分类。MT Photos 可在任何支持 Docker 的系统上运行，Windows 用户也可以直接运行服务端程序。一次性付费 99 元即可永久使用，系统将每周自动检查授权状态。其中一个突出的特点是支持通过网页分享特定的图片影集，这使得将大量宝宝照片分享给家人变得方便快捷。")]),r])}const _=e(i,[["render",d],["__file","mt-photos.html.vue"]]);export{_ as default};
