import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as p,a as n,b as s,d as i,e as o}from"./app-7eca03b5.js";const l={},u={href:"https://github.com/syncthing/syncthing",target:"_blank",rel:"noopener noreferrer"},r=o(`<p>Syncthing 与百度网盘、坚果云等第三方网盘最大的不同在于，它实现了多设备间的实时同步。百度网盘同步只支持 PC 端，在手机端无法同步，只能在需要看的时候手动点击下载，没有自动化；坚果云在手机端即使设置了离线收藏，下载的文件也在内部空间，其他应用无法访问。</p><p>如果你不希望将文件托管到第三方，或是需要将文件实时同步到多个设备，则可以需要 Syncthing。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">syncthing</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> syncthing/syncthing
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> syncthing
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>syncthing
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /wherever/st<span class="token punctuation">-</span>sync<span class="token punctuation">:</span>/var/syncthing
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8384<span class="token punctuation">:</span><span class="token number">8384</span> <span class="token comment"># Web UI</span>
      <span class="token punctuation">-</span> 22000<span class="token punctuation">:</span>22000/tcp <span class="token comment"># TCP file transfers</span>
      <span class="token punctuation">-</span> 22000<span class="token punctuation">:</span>22000/udp <span class="token comment"># QUIC file transfers</span>
      <span class="token punctuation">-</span> 21027<span class="token punctuation">:</span>21027/udp <span class="token comment"># Receive local discovery broadcasts</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function d(k,m){const a=t("ExternalLinkIcon");return c(),p("div",null,[n("p",null,[n("a",u,[s("Syncthing"),i(a)]),s(" 是一款开源免费跨平台的文件同步工具，是基于 P2P 技术实现多设备间的文件同步。注意：Syncthing、微力同步都不能让本地两个文件夹同步。我用之前免费送的 GoodSync 来进行同一设备文件的同步。")]),r])}const b=e(l,[["render",d],["__file","syncthing.html.vue"]]);export{b as default};
