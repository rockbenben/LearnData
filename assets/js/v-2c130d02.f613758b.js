"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[7008],{9720:(e,t)=>{t.c=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}},88:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>h,data:()=>d});var o=n(3968);const p=(0,o.QD)("p",null,"有时在外面需要访问家里的文件，或直接利用家中网络设置翻墙。为此，利用路由器 OpenVPN 搭建了一条回家的路。",-1),a=(0,o.QD)("h2",{id:"内网穿透",tabindex:"-1"},[(0,o.QD)("a",{class:"header-anchor",href:"#内网穿透"},[(0,o.QD)("span",null,"内网穿透")])],-1),r=(0,o.QD)("p",null,"连接家中内网，家里必须有个固定的访问地址。我将子域名 home.xxx.com 指向家中 IP。",-1),i=(0,o.QD)("p",null,"梅林路由器进入「高级设置」→「外部网络（WAN）」→「DDNS」，将路由器指向准备好的子域名。",-1),m=(0,o.QD)("figure",null,[(0,o.QD)("img",{src:"https://img.newzone.top/20190331203233.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),(0,o.QD)("figcaption")],-1),g=(0,o.QD)("p",null,"电信分配的公网 IP 经常会更换，每次都需要重定向子域名。在路由器 koolshare - 软件中心中安装 Aliddns，帮助更新家的公网 IP。插件中输入定向子域名和阿里云的 appkey，配置就完成了。如果没有自动在阿里云解析，可以先手动解析设置。",-1),l={href:"https://newzone.top/posts/2018-06-08-Baizhuo_GP1700.html",target:"_blank",rel:"noopener noreferrer"},c=(0,o.IL)('<h2 id="openvpn-配置" tabindex="-1"><a class="header-anchor" href="#openvpn-配置"><span>OpenVPN 配置</span></a></h2><p>内网穿透完成后，开始 OpenVPN 配置。梅林路由器进入「高级设置」→「VPN」→「虚拟专用网（VPN）服务器」，开启路由器自带的 OpenVPN。</p><figure><img src="https://img.newzone.top/20190331200921.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>高级配置红色的部分有修改，特别是<strong>VPN 子网必须修改为与路由器不同的号段</strong>，如 192.168.3.0。如果使用默认子网，会无法顺利翻墙。</p><p>应用设置后，点击「一般设置」，并导出 .ovpn 文件。打开该配置文件，将远程端口改为光猫上虚拟服务器映射的端口。</p><figure><img src="https://img.newzone.top/20190331202017.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>最后，手机导入 <code>.ovpn</code> 设置文件，就可以上网回家了！</p>',7),s={},h=(0,n(9720).c)(s,[["render",function(e,t){const n=(0,o.E1)("ExternalLinkIcon");return(0,o.Wz)(),(0,o.An)("div",null,[p,a,r,i,m,g,(0,o.QD)("p",null,[(0,o.mY)("光猫设置参考"),(0,o.QD)("a",l,[(0,o.mY)("光猫改造 篇三：百卓 GP1700 进阶设置 - 端口映射"),(0,o.K2)(n)]),(0,o.mY)("。")]),c])}]]),d=JSON.parse('{"path":"/posts/2019-03-31-openvpn_back_to_home.html","title":"OpenVPN 随时随地回家的路","lang":"zh-CN","frontmatter":{"title":"OpenVPN 随时随地回家的路","date":"2019-03-31T00:00:00.000Z","category":["网络"],"tag":["OpenVPN","内网穿透"],"order":-24,"description":"有时在外面需要访问家里的文件，或直接利用家中网络设置翻墙。为此，利用路由器 OpenVPN 搭建了一条回家的路。 内网穿透 连接家中内网，家里必须有个固定的访问地址。我将子域名 home.xxx.com 指向家中 IP。 梅林路由器进入「高级设置」→「外部网络（WAN）」→「DDNS」，将路由器指向准备好的子域名。 电信分配的公网 IP 经常会更换，每...","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2019-03-31-openvpn_back_to_home.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"OpenVPN 随时随地回家的路"}],["meta",{"property":"og:description","content":"有时在外面需要访问家里的文件，或直接利用家中网络设置翻墙。为此，利用路由器 OpenVPN 搭建了一条回家的路。 内网穿透 连接家中内网，家里必须有个固定的访问地址。我将子域名 home.xxx.com 指向家中 IP。 梅林路由器进入「高级设置」→「外部网络（WAN）」→「DDNS」，将路由器指向准备好的子域名。 电信分配的公网 IP 经常会更换，每..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.newzone.top/20190331203233.png?imageMogr2/format/webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T07:06:18.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"OpenVPN 随时随地回家的路"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"OpenVPN"}],["meta",{"property":"article:tag","content":"内网穿透"}],["meta",{"property":"article:published_time","content":"2019-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-10T07:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OpenVPN 随时随地回家的路\\",\\"image\\":[\\"https://img.newzone.top/20190331203233.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/20190331200921.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/20190331202017.png?imageMogr2/format/webp\\"],\\"datePublished\\":\\"2019-03-31T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-10T07:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"内网穿透","slug":"内网穿透","link":"#内网穿透","children":[]},{"level":2,"title":"OpenVPN 配置","slug":"openvpn-配置","link":"#openvpn-配置","children":[]}],"git":{"createdTime":1658685076000,"updatedTime":1681110378000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":6}]},"readingTime":{"minutes":1.39,"words":416},"filePathRelative":"_posts/2019-03-31-openvpn_back_to_home.md","localizedDate":"2019年3月31日","excerpt":"<p>有时在外面需要访问家里的文件，或直接利用家中网络设置翻墙。为此，利用路由器 OpenVPN 搭建了一条回家的路。</p>\\n<h2>内网穿透</h2>\\n<p>连接家中内网，家里必须有个固定的访问地址。我将子域名 home.xxx.com 指向家中 IP。</p>\\n<p>梅林路由器进入「高级设置」→「外部网络（WAN）」→「DDNS」，将路由器指向准备好的子域名。</p>\\n<figure><img src=\\"https://img.newzone.top/20190331203233.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}')}}]);