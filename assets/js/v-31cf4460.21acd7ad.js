"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[2291],{26663:(n,e,t)=>{t.r(e),t.d(e,{default:()=>c});var a=t(64304);const s={href:"https://registry.hub.docker.com/r/linuxserver/qbittorrent/",target:"_blank",rel:"noopener noreferrer"},r=(0,a.uE)('<h2 id="使用问题" tabindex="-1"><a class="header-anchor" href="#使用问题"><span>使用问题</span></a></h2><h3 id="无法登录" tabindex="-1"><a class="header-anchor" href="#无法登录"><span>无法登录</span></a></h3><p>为了解决登录和密码问题，请先停止容器，并将 <code>config/qBittorrent/qBittorrent.conf</code> 文件中的 <code>WebUI\\AuthSubnetWhitelist</code> 设置为 <code>0.0.0.0/0</code>，这样即可无需密码登录 qBittorrent WebUI。</p><h3 id="pt-下载" tabindex="-1"><a class="header-anchor" href="#pt-下载"><span>PT 下载</span></a></h3><p>对于 PT 下载，请关闭 <code>BitTorrent - DHT</code> 和其他隐私选项。</p><h3 id="为什么下载没速度" tabindex="-1"><a class="header-anchor" href="#为什么下载没速度"><span>为什么下载没速度？</span></a></h3><ul><li>NAS 中的下载路径须添加 Everyone 权限。</li><li>检查监听端口是否有修改。</li><li>配置是否使用了默认的 6881 端口。请修改所有默认端口，以避免可能的错误。</li></ul><h2 id="部署代码" tabindex="-1"><a class="header-anchor" href="#部署代码"><span>部署代码</span></a></h2>',8),i={href:"https://blog.csdn.net/weixin_45120915/article/details/114691473",target:"_blank",rel:"noopener noreferrer"},o=(0,a.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># https://hub.docker.com/r/linuxserver/qbittorrent  注意将下载目录授权到 Everyone</span>\n<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2.1&quot;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">qbittorrent</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> lscr.io/linuxserver/qbittorrent<span class="token punctuation">:</span>latest\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> qbittorrent\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> PUID=1026\n      <span class="token punctuation">-</span> PGID=100\n      <span class="token punctuation">-</span> TZ=Asia/Shanghai\n      <span class="token punctuation">-</span> WEBUI_PORT=49155\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/qbittorrent/config<span class="token punctuation">:</span>/config\n      <span class="token punctuation">-</span> /volume2/Backup/downloads<span class="token punctuation">:</span>/downloads\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 49155<span class="token punctuation">:</span><span class="token number">49155</span>\n      <span class="token punctuation">-</span> 49156<span class="token punctuation">:</span><span class="token number">49156</span>\n      <span class="token punctuation">-</span> 49156<span class="token punctuation">:</span>49156/udp\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),l={},c=(0,t(86683).Z)(l,[["render",function(n,e){const t=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",null,[(0,a._)("a",s,[(0,a.Uk)("qBittorrent"),(0,a.Wm)(t)]),(0,a.Uk)(" 是一款开源免费的种子和磁力链接下载工具。")]),r,(0,a._)("p",null,[(0,a.Uk)("部署后，进入「选项」>「连接」，将监听端口改为 49156。有关其他设置，请参考"),(0,a._)("a",i,[(0,a.Uk)("群晖使用 qbittorrent"),(0,a.Wm)(t)]),(0,a.Uk)("。")]),o])}]])},86683:(n,e)=>{e.Z=(n,e)=>{const t=n.__vccOpts||n;for(const[n,a]of e)t[n]=a;return t}},2150:(n,e,t)=>{t.r(e),t.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-31cf4460","path":"/services/dockers-on-nas/qbittorrent.html","title":"qBittorrent：种子&磁力下载","lang":"zh-CN","frontmatter":{"article":false,"title":"qBittorrent：种子&磁力下载","order":5,"description":"qBittorrent 是一款开源免费的种子和磁力链接下载工具。 使用问题 无法登录 为了解决登录和密码问题，请先停止容器，并将 config/qBittorrent/qBittorrent.conf 文件中的 WebUI\\\\AuthSubnetWhitelist 设置为 0.0.0.0/0，这样即可无需密码登录 qBittorrent WebUI。","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/qbittorrent.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"qBittorrent：种子&磁力下载"}],["meta",{"property":"og:description","content":"qBittorrent 是一款开源免费的种子和磁力链接下载工具。 使用问题 无法登录 为了解决登录和密码问题，请先停止容器，并将 config/qBittorrent/qBittorrent.conf 文件中的 WebUI\\\\AuthSubnetWhitelist 设置为 0.0.0.0/0，这样即可无需密码登录 qBittorrent WebUI。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-15T19:15:29.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-01-15T19:15:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"qBittorrent：种子&磁力下载\\",\\"description\\":\\"qBittorrent 是一款开源免费的种子和磁力链接下载工具。 使用问题 无法登录 为了解决登录和密码问题，请先停止容器，并将 config/qBittorrent/qBittorrent.conf 文件中的 WebUI\\\\\\\\AuthSubnetWhitelist 设置为 0.0.0.0/0，这样即可无需密码登录 qBittorrent WebUI。\\"}"]]},"headers":[{"level":2,"title":"使用问题","slug":"使用问题","link":"#使用问题","children":[{"level":3,"title":"无法登录","slug":"无法登录","link":"#无法登录","children":[]},{"level":3,"title":"PT 下载","slug":"pt-下载","link":"#pt-下载","children":[]},{"level":3,"title":"为什么下载没速度？","slug":"为什么下载没速度","link":"#为什么下载没速度","children":[]}]},{"level":2,"title":"部署代码","slug":"部署代码","link":"#部署代码","children":[]}],"git":{"createdTime":1702968675000,"updatedTime":1705346129000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":2}]},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"services/dockers-on-nas/qbittorrent.md","localizedDate":"2023年12月19日","excerpt":"<p><a href=\\"https://registry.hub.docker.com/r/linuxserver/qbittorrent/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">qBittorrent</a> 是一款开源免费的种子和磁力链接下载工具。</p>\\n<h2>使用问题</h2>\\n<h3>无法登录</h3>\\n<p>为了解决登录和密码问题，请先停止容器，并将 <code>config/qBittorrent/qBittorrent.conf</code> 文件中的 <code>WebUI\\\\AuthSubnetWhitelist</code> 设置为 <code>0.0.0.0/0</code>，这样即可无需密码登录 qBittorrent WebUI。</p>","autoDesc":true}')}}]);