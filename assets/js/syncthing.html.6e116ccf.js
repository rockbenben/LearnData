"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[139],{3671:(n,s)=>{s.A=(n,s)=>{const t=n.__vccOpts||n;for(const[n,a]of s)t[n]=a;return t}},5266:(n,s,t)=>{t.r(s),t.d(s,{comp:()=>p,data:()=>o});var a=t(7847);const e={href:"https://github.com/syncthing/syncthing",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Fv)('<p>Syncthing 与百度网盘、坚果云等第三方网盘的最大不同在于，它实现了多设备间的实时同步。百度网盘同步仅支持 PC 端，无法在手机端同步，只能在需要查看文件时手动点击下载；而坚果云在手机端即使设置了离线收藏，下载的文件也存储在内部空间，其他应用无法访问。相比之下，Syncthing 默认将文件夹同步到本地，而非按需下载。如果你不希望将文件托管到第三方，或者需要在多个设备之间同步文件，Syncthing 是个不错的选择。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">syncthing</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> syncthing/syncthing\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> syncthing\n    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>syncthing\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> PUID=1026\n      <span class="token punctuation">-</span> PGID=100\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/syncthing/appdata<span class="token punctuation">:</span>/var/syncthing\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 9040<span class="token punctuation">:</span><span class="token number">8384</span> <span class="token comment"># Web UI</span>\n      <span class="token punctuation">-</span> 22000<span class="token punctuation">:</span>22000/tcp <span class="token comment"># TCP file transfers</span>\n      <span class="token punctuation">-</span> 22000<span class="token punctuation">:</span>22000/udp <span class="token comment"># QUIC file transfers</span>\n      <span class="token punctuation">-</span> 21027<span class="token punctuation">:</span>21027/udp <span class="token comment"># Receive local discovery broadcasts</span>\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于我对文件实时同步的需求较小，也不需要版本控制，目前并未使用 Syncthing。相反，我将本地文件按天同步到 NAS，并随后在 Nextcloud 上进行在线文档编辑。</p>',3),i={},p=(0,t(3671).A)(i,[["render",function(n,s){const t=(0,a.g2)("ExternalLinkIcon");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("p",null,[(0,a.Lk)("a",e,[(0,a.eW)("Syncthing"),(0,a.bF)(t)]),(0,a.eW)(" 是一款开源免费的跨平台文件同步工具，基于 P2P 技术实现多设备之间的文件同步。需要注意的是，Syncthing 和微力同步都不能使本地两个文件夹同步。我之前使用免费提供的 GoodSync 来同步同一设备上的文件。")]),c])}]]),o=JSON.parse('{"path":"/services/dockers-on-nas/syncthing.html","title":"Syncthing：私人同步盘","lang":"zh-CN","frontmatter":{"article":false,"title":"Syncthing：私人同步盘","order":21,"description":"Syncthing 是一款开源免费的跨平台文件同步工具，基于 P2P 技术实现多设备之间的文件同步。需要注意的是，Syncthing 和微力同步都不能使本地两个文件夹同步。我之前使用免费提供的 GoodSync 来同步同一设备上的文件。 Syncthing 与百度网盘、坚果云等第三方网盘的最大不同在于，它实现了多设备间的实时同步。百度网盘同步仅支持 P...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/syncthing.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Syncthing：私人同步盘"}],["meta",{"property":"og:description","content":"Syncthing 是一款开源免费的跨平台文件同步工具，基于 P2P 技术实现多设备之间的文件同步。需要注意的是，Syncthing 和微力同步都不能使本地两个文件夹同步。我之前使用免费提供的 GoodSync 来同步同一设备上的文件。 Syncthing 与百度网盘、坚果云等第三方网盘的最大不同在于，它实现了多设备间的实时同步。百度网盘同步仅支持 P..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-15T19:15:29.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-01-15T19:15:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Syncthing：私人同步盘\\",\\"description\\":\\"Syncthing 是一款开源免费的跨平台文件同步工具，基于 P2P 技术实现多设备之间的文件同步。需要注意的是，Syncthing 和微力同步都不能使本地两个文件夹同步。我之前使用免费提供的 GoodSync 来同步同一设备上的文件。 Syncthing 与百度网盘、坚果云等第三方网盘的最大不同在于，它实现了多设备间的实时同步。百度网盘同步仅支持 P...\\"}"]]},"headers":[],"git":{"createdTime":1699754870000,"updatedTime":1705346129000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":3}]},"readingTime":{"minutes":1.22,"words":365},"filePathRelative":"services/dockers-on-nas/syncthing.md","localizedDate":"2023年11月12日","excerpt":"<p><a href=\\"https://github.com/syncthing/syncthing\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Syncthing</a> 是一款开源免费的跨平台文件同步工具，基于 P2P 技术实现多设备之间的文件同步。需要注意的是，Syncthing 和微力同步都不能使本地两个文件夹同步。我之前使用免费提供的 GoodSync 来同步同一设备上的文件。</p>\\n<p>Syncthing 与百度网盘、坚果云等第三方网盘的最大不同在于，它实现了多设备间的实时同步。百度网盘同步仅支持 PC 端，无法在手机端同步，只能在需要查看文件时手动点击下载；而坚果云在手机端即使设置了离线收藏，下载的文件也存储在内部空间，其他应用无法访问。相比之下，Syncthing 默认将文件夹同步到本地，而非按需下载。如果你不希望将文件托管到第三方，或者需要在多个设备之间同步文件，Syncthing 是个不错的选择。</p>","autoDesc":true}')}}]);