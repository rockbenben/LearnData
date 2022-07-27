"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7657],{5449:(e,r,a)=>{a.r(r),a.d(r,{data:()=>n});const n=JSON.parse('{"key":"v-93c460f8","path":"/_posts/2018-05-15-aria2_a_new_download_tool.html","title":"抛弃迅雷，Aria2 新手入门","lang":"zh-CN","frontmatter":{"title":"抛弃迅雷，Aria2 新手入门","date":"2018-05-15T00:00:00.000Z","category":["工具"],"tag":["Aria2","迅雷"],"star":true,"order":-17,"summary":"迅雷已经用了 10 年，一直把它看作是速度最快也最方便的下载工具，迅雷会员也是我必续的服务。 但，迅雷堕落了。 thunder:\\\\\\\\ 迅雷专属链接越来越少，下载基本是磁力链接、BT 种子；; 迅雷会员加速不再给力，大量资源速度为 0（会员虽然还有一年多，但已经没用了）；; 迅雷关闭旧版功能逼大家升级迅雷 U 享版，但升级后，才发现新版迅雷会强制接收所有下载。","head":[["meta",{"property":"og:url","content":"https://newzone.top/_posts/2018-05-15-aria2_a_new_download_tool.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"抛弃迅雷，Aria2 新手入门"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T04:16:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Aria2"}],["meta",{"property":"article:tag","content":"迅雷"}],["meta",{"property":"article:published_time","content":"2018-05-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-27T04:16:37.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"为什么选择 Aria2？","slug":"为什么选择-aria2","children":[]},{"level":2,"title":"真·懒人包","slug":"真·懒人包","children":[]},{"level":2,"title":"Aria2 设置","slug":"aria2-设置","children":[]},{"level":2,"title":"Aria2 进阶","slug":"aria2-进阶","children":[{"level":3,"title":"更换 Aria2 界面","slug":"更换-aria2-界面","children":[]},{"level":3,"title":"Aira2 下载预热","slug":"aira2-下载预热","children":[]},{"level":3,"title":"接管浏览器下载","slug":"接管浏览器下载","children":[]}]},{"level":2,"title":"Aria2 启动器","slug":"aria2-启动器","children":[]}],"git":{"createdTime":1658895397000,"updatedTime":1658895397000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":5.78,"words":1735},"filePathRelative":"_posts/2018-05-15-aria2_a_new_download_tool.md","localizedDate":"2018年5月15日"}')},6854:(e,r,a)=>{a.r(r),a.d(r,{default:()=>Le});var n=a(8e3);const t=(0,n.uE)('<p>迅雷已经用了 10 年，一直把它看作是速度最快也最方便的下载工具，迅雷会员也是我必续的服务。</p><p>但，<strong>迅雷堕落了</strong>。</p><ul><li><code>thunder:\\\\</code> 迅雷专属链接越来越少，下载基本是磁力链接、BT 种子；</li><li>迅雷会员加速不再给力，大量资源速度为 0（会员虽然还有一年多，但已经没用了）；</li><li>迅雷关闭旧版功能逼大家升级迅雷 U 享版，但升级后，才发现新版迅雷会强制接收所有下载。 <blockquote><p>有些小文件，我只想用浏览器直接下载。而一些不想下的链接，也会被迅雷非常敏感的感应到，强制下载，真的真的特别流氓。</p></blockquote></li></ul><h2 id="为什么选择-aria2" tabindex="-1"><a class="header-anchor" href="#为什么选择-aria2" aria-hidden="true">#</a> 为什么选择 Aria2？</h2><p>Aria2 下载比较全能，支持 BT 和磁力链接，性能也相当不错，<strong>速度不比迅雷慢</strong>。</p><p>虽然没原生应用界面，配置也麻烦，但这些用懒人包就能轻松解决。</p><h2 id="真·懒人包" tabindex="-1"><a class="header-anchor" href="#真·懒人包" aria-hidden="true">#</a> 真·懒人包</h2><p>Aria2 真·懒人包无需配置，下载即用，适合不想折腾的人。</p>',8),o=(0,n.Uk)("真·懒人包："),l={href:"https://www.seoipo.com/software/Aria2/",target:"_blank",rel:"noopener noreferrer"},i=(0,n.Uk)("https://www.seoipo.com/software/Aria2/"),c=(0,n._)("p",null,[(0,n.Uk)("将懒人包解压到 "),(0,n._)("code",null,"D:\\Aria2"),(0,n.Uk)("，点击 "),(0,n._)("code",null,"AriaNg 启动器.exe"),(0,n.Uk)(" 即可开始下载。两个启动器任选其一，都集成了后端服务和前端 UI，无需启动其他程序。包内均为开源软件，不涉及任何信息，也没病毒，360 误报拿它没办法。")],-1),s=(0,n._)("p",null,"2022.07.25 更新 Aria2 1.36.0，AriaNG 1.2.4，并增加 bt-tracker 到 138，方便 BT 和磁力链接提速。",-1),d=(0,n._)("hr",null,null,-1),p=(0,n._)("p",null,"如果你不想用懒人包，想对 Aria2 自己重新配置的话，可以往下查看配置过程。",-1),u=(0,n._)("h2",{id:"aria2-设置",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#aria2-设置","aria-hidden":"true"},"#"),(0,n.Uk)(" Aria2 设置")],-1),h=(0,n.Uk)("下载 "),m={href:"http://aria2c.com/archiver/aria2.zip",target:"_blank",rel:"noopener noreferrer"},_=(0,n.Uk)("Aria2 快速设置包"),k=(0,n.Uk)("。"),g=(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Uk)("把快速设置包解压到常用的存放目录，比如 "),(0,n._)("code",null,"D:\\Aria2"),(0,n.Uk)("。")])],-1),f=(0,n.Uk)("官网下载 "),b={href:"https://github.com/aria2/aria2/releases",target:"_blank",rel:"noopener noreferrer"},w=(0,n.Uk)("Aria2 程序"),A=(0,n.Uk)(", Win10 系统选择 "),U={href:"https://github.com/aria2/aria2/releases/download/release-1.36.0/aria2-1.36.0-win-64bit-build1.zip",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("aria2-1.36.0-win-64bit-build1.zip"),x=(0,n.Uk)("，然后解压到快速设置包目录中，替代其中的 "),y=(0,n._)("code",null,"aria2c.exe",-1),T=(0,n.Uk)(" 程序。"),W=(0,n._)("p",null,[(0,n._)("img",{src:"http://tc.seoipo.com/20191210232831.png",alt:"",loading:"lazy"})],-1),z=(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Uk)("点击 "),(0,n._)("code",null,"aria2.exe"),(0,n.Uk)(" , 启动 aria2，该程序会在任务栏中植入图标。")])],-1),D=(0,n.Uk)("修改 "),N=(0,n._)("code",null,"aria2.conf",-1),B=(0,n.Uk)("，更多设置参考 "),C={href:"http://aria2c.com/usage.html",target:"_blank",rel:"noopener noreferrer"},Z=(0,n.Uk)("Aria2 & YAAW 使用说明"),q=(0,n.Uk)("。"),E=(0,n.uE)('<p>修改默认下载目录：</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># 文件的保存路径 (可使用绝对路径或相对路径), 默认：当前启动位置\ndir=D:\\Download  #D:\\Download 是我的默认下载目录\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改服务器默认连接数：</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># 同一服务器连接数，添加时可指定，默认:1\nmax-connection-per-server=16\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>开启 BT 下列设置：</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>enable-dht=true\nbt-enable-lpd=true\nenable-peer-exchange=true\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6),R=(0,n.Uk)("在最后添加 BT trackers，配置列表时重新获取 "),j={href:"https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt",target:"_blank",rel:"noopener noreferrer"},O=(0,n.Uk)("最新 trackers 列表"),P=(0,n.Uk)(", tracker 中用 "),H=(0,n._)("code",null,",",-1),I=(0,n.Uk)(" 隔开。"),F=(0,n.uE)('<div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># bt-tracker 更新，解决 Aria2 BT 下载速度慢没速度的问题\nbt-tracker=udp://tracker.opentrackr.org:1337/announce,udp://9.rarbg.com:2810/announce,udp://tracker.openbittorrent.com:6969/announce,http://tracker.openbittorrent.com:80/announce,https://opentracker.i2p.rocks:443/announce,udp://tracker.torrent.eu.org:451/announce,udp://open.stealth.si:80/announce,udp://exodus.desync.com:6969/announce,udp://tracker.tiny-vps.com:6969/announce,udp://tracker.pomf.se:80/announce,udp://tracker.moeking.me:6969/announce,udp://tracker.lelux.fi:6969/announce,udp://tracker.dler.org:6969/announce,udp://tracker.altrosky.nl:6969/announce,udp://open.demonii.com:1337/announce,udp://explodie.org:6969/announce,udp://bt1.archive.org:6969/announce,udp://bt.oiyo.tk:6969/announce,udp://6ahddutb1ucc3cp.ru:6969/announce,https://tracker.nanoha.org:443/announce\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其他设置不大常用，有时间的话，你可以慢慢调整。</p>',2),J=(0,n._)("li",null,[(0,n._)("p",null,"开始下载"),(0,n._)("p",null,[(0,n.Uk)("Aira2 没有原生软件界面，除了代码执行下载，普通用户输入网址 "),(0,n._)("code",null,"aria2c.com"),(0,n.Uk)(" 就能启动下载界面。")]),(0,n._)("p",null,"网页会自动与本地的 aira2 程序连接，实现下载管理。建议把该网址放到书签中，方便使用。")],-1),L=(0,n._)("p",null,"如果出现 Aria2 RPC 服务器错误，说明 aria2.conf 配置出错，可以直接使用「真·懒人包」，或使用设置好的「aria2.conf」文件覆盖原文件。",-1),M=(0,n.Uk)("真·懒人包："),S={href:"https://www.seoipo.com/software/Aria2/",target:"_blank",rel:"noopener noreferrer"},G=(0,n.Uk)("https://www.seoipo.com/software/Aria2/"),Y=(0,n.Uk)("aria2.conf 配置下载："),K={href:"https://wwz.lanzouf.com/iZczz08epqwb",target:"_blank",rel:"noopener noreferrer"},Q=(0,n.Uk)("https://wwz.lanzouf.com/iZczz08epqwb"),V=(0,n._)("h2",{id:"aria2-进阶",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#aria2-进阶","aria-hidden":"true"},"#"),(0,n.Uk)(" Aria2 进阶")],-1),X=(0,n._)("h3",{id:"更换-aria2-界面",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#更换-aria2-界面","aria-hidden":"true"},"#"),(0,n.Uk)(" 更换 Aria2 界面")],-1),$={href:"https://github.com/mayswind/AriaNg",target:"_blank",rel:"noopener noreferrer"},ee=(0,n.Uk)("AriaNg"),re=(0,n.Uk)(" 和传统下载软件界面类似，使用简单。"),ae=(0,n._)("p",null,[(0,n._)("img",{src:"http://tc.seoipo.com/20180516104758.png",alt:"",loading:"lazy"})],-1),ne=(0,n.Uk)("使用方法："),te={href:"https://github.com/mayswind/AriaNg-DailyBuild/archive/master.zip",target:"_blank",rel:"noopener noreferrer"},oe=(0,n.Uk)("下载 AriaNg"),le=(0,n.Uk)("，解压后直接运行 index.html 就可打开 WebUI 界面，可以收藏到书签，方便使用。"),ie=(0,n.uE)('<p>如果报错的话，进入 <code>AriaNg 设置-RPC</code>，检查 RPC 地址是否正确，默认为 <code>localhost:6800</code>。</p><h3 id="aira2-下载预热" tabindex="-1"><a class="header-anchor" href="#aira2-下载预热" aria-hidden="true">#</a> Aira2 下载预热</h3><p>Aira2 下载预热是 BT 下载前的必备步骤，否则速度容易很慢。</p><p>找个热门 BT 种子 (千万建议是种子，而不是磁力链接)，然后下一波，挂着做种。过几个小时后退出 Aria2，或者等 Aria2 会话自动保存，你会发现 dht.dat 从空文件变成有数据了，这时下载速度就会正常很多。</p><blockquote><p>很多 BT 客户端一样，Aria2 有个 dht.dat 文件 (开启 ipv6 还有个 dht6.dat)，这玩意用于存储一种叫做 DHT Routing Table 的东西，DHT 网络由无数节点组成，你接触到一个后能通过它接触到更多的节点，Aria2 我记得是有内置的节点，但是！如果你在 Aria2 第一次运行的时候直接下载磁力链接或者冷门种子，你很可能遇到连 MetaData 都无法获取的情况，这就是因为第一次只是初始化 dht.dat 文件，你本地不存在 DHT Routing Table 的缓存，所以你无法从 DHT 网络中获取足够的数据。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p></blockquote><h3 id="接管浏览器下载" tabindex="-1"><a class="header-anchor" href="#接管浏览器下载" aria-hidden="true">#</a> 接管浏览器下载</h3>',6),ce=(0,n.Uk)("浏览器安装 "),se={href:"https://chrome.google.com/webstore/detail/nimeojfecmndgolmlmjghjmbpdkhhogl",target:"_blank",rel:"noopener noreferrer"},de=(0,n.Uk)("添加到 aria2"),pe=(0,n.Uk)("，用 Aria2 接管浏览器的下载管理。"),ue=(0,n._)("code",null,"添加到 aria2",-1),he=(0,n.Uk)(" 扩展的国内搬运地址："),me={href:"https://wwi.lanzoui.com/i4Fmeetsdaj",target:"_blank",rel:"noopener noreferrer"},_e=(0,n.Uk)("https://wwi.lanzoui.com/i4Fmeetsdaj"),ke=(0,n.uE)('<p>有的浏览器无法直接安装 <code>.crx</code> 格式的扩展，需将文件解压到新文件夹 xxx，然后在浏览器地址栏输入 <code>chrome://extensions/</code> 开启开发者模式，点击加载已解压的扩展程序，选中刚才解压的文件夹 xxx。</p><p>扩展安装好后，右键扩展图标，点击<code>选项-设置</code>，设置如下：</p><ul><li>最小监视：10 M</li><li>JSON-RPC 链接：<code>http://localhost:6800/jsonrpc</code></li></ul><h2 id="aria2-启动器" tabindex="-1"><a class="header-anchor" href="#aria2-启动器" aria-hidden="true">#</a> Aria2 启动器</h2><p>Aria2 启动需要分别打开下载界面和 exe 应用文件，比较麻烦。我用 ahk 做了个启动器，可以检测 exe 应用运行状态并一键打开下载界面。</p>',5),ge=(0,n.Uk)("启动器下载："),fe={href:"https://wwi.lanzoui.com/inbO5entf3e",target:"_blank",rel:"noopener noreferrer"},be=(0,n.Uk)("https://wwi.lanzoui.com/inbO5entf3e"),we=(0,n.uE)("<p>将启动器到 Aria2 运行目录，如 <code>D:\\Aria2</code>。</p><ul><li><strong>Aria2c 启动器</strong>：使用 <code>http://aria2c.com/</code> 作为默认下载界面，不需要多余设置。</li><li><strong>AriaNg 启动器</strong>：使用 AriaNg 作为下载界面，需将 AriaNg 解压到 Aria2 运行目录，如 <code>D:\\Aria2\\AriaNg</code>。</li></ul><p>参考资料：</p>",3),Ae={href:"https://www.appinn.com/aria2-in-windows-setup/",target:"_blank",rel:"noopener noreferrer"},Ue=(0,n.Uk)("aria2 懒人安装教程"),ve={href:"http://blog.sina.com.cn/s/blog_6bf2cd8a0102x3w2.html",target:"_blank",rel:"noopener noreferrer"},xe=(0,n.Uk)("Aria2+WebUI，迅雷倒下之后的代替品"),ye={href:"https://github.com/ngosang/trackerslist",target:"_blank",rel:"noopener noreferrer"},Te=(0,n.Uk)("BT trackers 更新项目"),We={href:"https://zhuanlan.zhihu.com/p/30666881",target:"_blank",rel:"noopener noreferrer"},ze=(0,n.Uk)("Aria2 基础上手指南"),De={href:"http://www.senra.me/solutions-to-aria2-bt-metalink-download-slowly/",target:"_blank",rel:"noopener noreferrer"},Ne=(0,n.Uk)("解决 Aria2 BT 下载速度慢没速度的问题"),Be={href:"https://github.com/binux/yaaw",target:"_blank",rel:"noopener noreferrer"},Ce=(0,n.Uk)("yaaw (国人开发的 Aria2 web-ui)"),Ze={href:"https://github.com/ngosang/trackerslist",target:"_blank",rel:"noopener noreferrer"},qe=(0,n.Uk)("bt-trackerlist 官方更新地址"),Ee=(0,n._)("hr",{class:"footnotes-sep"},null,-1),Re={class:"footnotes"},je={class:"footnotes-list"},Oe={id:"footnote1",class:"footnote-item"},Pe={href:"http://www.senra.me/solutions-to-aria2-bt-metalink-download-slowly/",target:"_blank",rel:"noopener noreferrer"},He=(0,n.Uk)("解决 Aria2 BT 下载速度慢没速度的问题"),Ie=(0,n.Uk)(),Fe=(0,n._)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),Je={},Le=(0,a(1935).Z)(Je,[["render",function(e,r){const a=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[t,(0,n._)("p",null,[o,(0,n._)("a",l,[i,(0,n.Wm)(a)])]),c,s,d,p,u,(0,n._)("ol",null,[(0,n._)("li",null,[(0,n._)("p",null,[h,(0,n._)("a",m,[_,(0,n.Wm)(a)]),k])]),g,(0,n._)("li",null,[(0,n._)("p",null,[f,(0,n._)("a",b,[w,(0,n.Wm)(a)]),A,(0,n._)("a",U,[v,(0,n.Wm)(a)]),x,y,T]),W]),z,(0,n._)("li",null,[(0,n._)("p",null,[D,N,B,(0,n._)("a",C,[Z,(0,n.Wm)(a)]),q]),E,(0,n._)("p",null,[R,(0,n._)("a",j,[O,(0,n.Wm)(a)]),P,H,I]),F]),J]),L,(0,n._)("p",null,[M,(0,n._)("a",S,[G,(0,n.Wm)(a)])]),(0,n._)("p",null,[Y,(0,n._)("a",K,[Q,(0,n.Wm)(a)])]),V,X,(0,n._)("p",null,[(0,n._)("a",$,[ee,(0,n.Wm)(a)]),re]),ae,(0,n._)("p",null,[ne,(0,n._)("a",te,[oe,(0,n.Wm)(a)]),le]),ie,(0,n._)("p",null,[ce,(0,n._)("a",se,[de,(0,n.Wm)(a)]),pe]),(0,n._)("p",null,[ue,he,(0,n._)("a",me,[_e,(0,n.Wm)(a)])]),ke,(0,n._)("p",null,[ge,(0,n._)("a",fe,[be,(0,n.Wm)(a)])]),we,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",Ae,[Ue,(0,n.Wm)(a)])]),(0,n._)("li",null,[(0,n._)("a",ve,[xe,(0,n.Wm)(a)])]),(0,n._)("li",null,[(0,n._)("a",ye,[Te,(0,n.Wm)(a)])]),(0,n._)("li",null,[(0,n._)("a",We,[ze,(0,n.Wm)(a)])]),(0,n._)("li",null,[(0,n._)("a",De,[Ne,(0,n.Wm)(a)])]),(0,n._)("li",null,[(0,n._)("a",Be,[Ce,(0,n.Wm)(a)])]),(0,n._)("li",null,[(0,n._)("a",Ze,[qe,(0,n.Wm)(a)])])]),Ee,(0,n._)("section",Re,[(0,n._)("ol",je,[(0,n._)("li",Oe,[(0,n._)("p",null,[(0,n._)("a",Pe,[He,(0,n.Wm)(a)]),Ie,Fe])])])])])}]])},1935:(e,r)=>{r.Z=(e,r)=>{const a=e.__vccOpts||e;for(const[e,n]of r)a[e]=n;return a}}}]);