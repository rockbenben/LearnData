import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as l,a as n,b as s,d as i,e as c}from"./app-ww3g6lB1.js";const p={},r={href:"https://github.com/Frooodle/Stirling-PDF",target:"_blank",rel:"noopener noreferrer"},u=c(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">stirling-pdf</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> frooodle/s<span class="token punctuation">-</span>pdf<span class="token punctuation">:</span>latest
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;8080:8080&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /location/of/trainingData<span class="token punctuation">:</span>/usr/share/tesseract<span class="token punctuation">-</span>ocr/4.00/tessdata <span class="token comment">#Required for extra OCR languages</span>
      <span class="token punctuation">-</span> /location/of/extraConfigs<span class="token punctuation">:</span>/configs 
      <span class="token comment"># - /location/of/customFiles:/customFiles/</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> DOCKER_ENABLE_SECURITY=false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(k,m){const a=t("ExternalLinkIcon");return o(),l("div",null,[n("p",null,[n("a",r,[s("Stirling-PDF"),i(a)]),s(" 基于 Web 的 PDF 文档开源工具箱，允许您对 PDF 文件执行各种操作，例如拆分合并、转换、重新组织、添加图像、旋转、压缩等。")]),u])}const _=e(p,[["render",d],["__file","stirling-pdf.html.vue"]]);export{_ as default};
