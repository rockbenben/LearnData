import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as p,a as n,b as s,d as i,e as o}from"./app-ydivXyiN.js";const l={},u={href:"https://github.com/syncthing/syncthing",target:"_blank",rel:"noopener noreferrer"},r=o(`<p>Syncthing 与百度网盘、坚果云等第三方网盘的最大不同在于，它实现了多设备间的实时同步。百度网盘同步仅支持 PC 端，无法在手机端同步，只能在需要查看文件时手动点击下载；而坚果云在手机端即使设置了离线收藏，下载的文件也存储在内部空间，其他应用无法访问。相比之下，Syncthing 默认将文件夹同步到本地，而非按需下载。如果你不希望将文件托管到第三方，或者需要在多个设备之间同步文件，Syncthing 是个不错的选择。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">syncthing</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> syncthing/syncthing
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> syncthing
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>syncthing
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1026
      <span class="token punctuation">-</span> PGID=100
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/syncthing/appdata<span class="token punctuation">:</span>/var/syncthing
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9040<span class="token punctuation">:</span><span class="token number">8384</span> <span class="token comment"># Web UI</span>
      <span class="token punctuation">-</span> 22000<span class="token punctuation">:</span>22000/tcp <span class="token comment"># TCP file transfers</span>
      <span class="token punctuation">-</span> 22000<span class="token punctuation">:</span>22000/udp <span class="token comment"># QUIC file transfers</span>
      <span class="token punctuation">-</span> 21027<span class="token punctuation">:</span>21027/udp <span class="token comment"># Receive local discovery broadcasts</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于我对文件实时同步的需求较小，也不需要版本控制，目前并未使用 Syncthing。相反，我将本地文件按天同步到 NAS，并随后在 Nextcloud 上进行在线文档编辑。</p>`,3);function d(k,m){const a=t("ExternalLinkIcon");return c(),p("div",null,[n("p",null,[n("a",u,[s("Syncthing"),i(a)]),s(" 是一款开源免费的跨平台文件同步工具，基于 P2P 技术实现多设备之间的文件同步。需要注意的是，Syncthing 和微力同步都不能使本地两个文件夹同步。我之前使用免费提供的 GoodSync 来同步同一设备上的文件。")]),r])}const h=e(l,[["render",d],["__file","syncthing.html.vue"]]);export{h as default};
