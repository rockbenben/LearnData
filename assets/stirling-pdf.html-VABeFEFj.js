import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as o,a as n,b as s,d as l,e as c}from"./app-58XkRDmA.js";const p={},r={href:"https://github.com/Stirling-Tools/Stirling-PDF",target:"_blank",rel:"noopener noreferrer"},u=c(`<figure><img src="https://img.newzone.top/2024-01-16-02-15-55.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="部署命令" tabindex="-1"><a class="header-anchor" href="#部署命令" aria-hidden="true">#</a> 部署命令</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">stirling-pdf</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> frooodle/s<span class="token punctuation">-</span>pdf<span class="token punctuation">:</span>latest
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;7581:8080&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token comment">#- /location/of/trainingData:/usr/share/tesseract-ocr/5/tessdata #Required for extra OCR languages</span>
      <span class="token punctuation">-</span> /volume1/docker/s<span class="token punctuation">-</span>pdf/configs<span class="token punctuation">:</span>/configs
      <span class="token comment">#- /location/of/customFiles:/customFiles/</span>
      <span class="token comment">#- /location/of/logs:/logs/</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> DOCKER_ENABLE_SECURITY=false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function d(m,k){const a=t("ExternalLinkIcon");return i(),o("div",null,[n("p",null,[n("a",r,[s("Stirling-PDF"),l(a)]),s(" 是开源的 PDF 文档工具箱，允许你对 PDF 文件执行各种操作，如拆分合并、转换、重新组织、添加图像、旋转、压缩等数十种功能，足够日常使用。")]),u])}const f=e(p,[["render",d],["__file","stirling-pdf.html.vue"]]);export{f as default};
