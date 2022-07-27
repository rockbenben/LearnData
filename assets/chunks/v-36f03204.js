"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9862],{1635:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-36f03204","path":"/_posts/2022-03-21-winget_the_strongest_software_manager_for_windows.html","title":"一键安装 99 个程序，Windows 最强软件管理器","lang":"zh-CN","frontmatter":{"title":"一键安装 99 个程序，Windows 最强软件管理器","date":"2022-03-21T00:00:00.000Z","category":["系统"],"tag":["winget","winstall"],"order":-43,"summary":"矿难、WIN11、DDR5、40 代显卡纷至沓来，更换电脑的高峰期马上来临。可惜我的生产力工具等不了，只能 49 年入国军，隔离期间装配上 i7+3080Ti 主机。 硬件配好了，软件又成了个大问题。常用软件超过 60 个，之前每个软件，都去对应官网寻找最新版，然后单独进行设置安装，需要耗费大量的时间精力。 曾经一度尝试过国内的软件管理器，能批量下载软件，但","head":[["meta",{"property":"og:url","content":"https://newzone.top/_posts/2022-03-21-winget_the_strongest_software_manager_for_windows.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"一键安装 99 个程序，Windows 最强软件管理器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T04:02:22.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"winget"}],["meta",{"property":"article:tag","content":"winstall"}],["meta",{"property":"article:published_time","content":"2022-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-27T04:02:22.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"原生程序管理-winget","slug":"原生程序管理-winget","children":[{"level":3,"title":"winget 主要命令","slug":"winget-主要命令","children":[]},{"level":3,"title":"安装 Microsoft Store 应用","slug":"安装-microsoft-store-应用","children":[]}]},{"level":2,"title":"批量部署程序-winstall","slug":"批量部署程序-winstall","children":[]},{"level":2,"title":"存在 bug","slug":"存在-bug","children":[]},{"level":2,"title":"总结","slug":"总结","children":[]}],"git":{"createdTime":1658894542000,"updatedTime":1658894542000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":4.01,"words":1202},"filePathRelative":"_posts/2022-03-21-winget_the_strongest_software_manager_for_windows.md","localizedDate":"2022年3月21日"}')},5550:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var a=n(8e3);const i=(0,a._)("p",null,"矿难、WIN11、DDR5、40 代显卡纷至沓来，更换电脑的高峰期马上来临。可惜我的生产力工具等不了，只能 49 年入国军，隔离期间装配上 i7+3080Ti 主机。",-1),l=(0,a._)("p",null,"硬件配好了，软件又成了个大问题。常用软件超过 60 个，之前每个软件，都去对应官网寻找最新版，然后单独进行设置安装，需要耗费大量的时间精力。",-1),r=(0,a._)("p",null,"曾经一度尝试过国内的软件管理器，能批量下载软件，但依旧免不了单独安装设置。另外，让 360、金山、腾讯来管理你的软件系统，你真的放心？",-1),o=(0,a._)("p",null,[(0,a.Uk)("相较而言，Windows 原生程序管理工具 winget 和 WebGUI winstall 使用更简单，"),(0,a._)("strong",null,"应用均为官方来源下载，一键批量静默安装应用，是快速部署程序的绝佳方案"),(0,a.Uk)("。")],-1),s=(0,a._)("h2",{id:"原生程序管理-winget",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#原生程序管理-winget","aria-hidden":"true"},"#"),(0,a.Uk)(" 原生程序管理-winget")],-1),p={href:"https://docs.microsoft.com/zh-cn/windows/package-manager/winget/",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("winget"),c=(0,a.Uk)(" 是 Windows 程序包管理器的命令行工具。在 Windows 10 和 Windows 11 计算机上，使用 winget 命令行工具来发现、安装、升级、删除和配置应用程序。"),d=(0,a.Uk)("早期版本的 Windows 不支持 winget，需在 "),h={href:"https://github.com/microsoft/winget-cli/releases",target:"_blank",rel:"noopener noreferrer"},w=(0,a.Uk)("winget 官方链接"),m=(0,a.Uk)(" 下载后缀为 "),u=(0,a._)("code",null,".msixbundle",-1),_=(0,a.Uk)(" 的应用安装程序。"),f=(0,a.Uk)("国内搬运地址："),k={href:"https://wwz.lanzouf.com/ixZL701smc4d",target:"_blank",rel:"noopener noreferrer"},b=(0,a.Uk)("https://wwz.lanzouf.com/ixZL701smc4d"),y=(0,a.uE)('<h3 id="winget-主要命令" tabindex="-1"><a class="header-anchor" href="#winget-主要命令" aria-hidden="true">#</a> winget 主要命令</h3><p>安装应用安装程序后，可以通过在命令提示符 (cmd) 下键入「winget」来运行程序命令。</p><h4 id="winget-install-appname" tabindex="-1"><a class="header-anchor" href="#winget-install-appname" aria-hidden="true">#</a> winget install appName</h4><p>执行 winget install 命令，就能完成指定程序的下载、哈希验证、静默设置安装三个步骤，不需要人工干预。</p><p><img src="http://tc.seoipo.com/2022-05-05-17-13-24.png" alt="" loading="lazy"></p><h4 id="winget-search-appname" tabindex="-1"><a class="header-anchor" href="#winget-search-appname" aria-hidden="true">#</a> winget search appName</h4><p>当未找到或不确定 appName 时，使用 winget search 可以锁定程序名称。以「飞书」为例，飞书不支持中文锁定，搜索后发现有国内版「Feishu」和海外版「Lark」两个版本，国内版使用命令 <code>winget install feishu</code>。</p><p><img src="http://tc.seoipo.com/2022-05-05-17-13-45.png" alt="" loading="lazy"></p><h4 id="winget-upgrade-all" tabindex="-1"><a class="header-anchor" href="#winget-upgrade-all" aria-hidden="true">#</a> winget upgrade --all</h4><p><code>winget upgrade --all</code> 会静默升级所有支持 winget 的程序，适合更新强迫症患者。不过，该升级流程暂时没有筛选办法，无法单独剔除应用。</p><p><img src="http://tc.seoipo.com/2022-05-05-17-14-00.png" alt="" loading="lazy"></p><p><code>winget upgrade --all --include-unknown</code> 升级包括未知版本在内的所有应用，一般用不到，适用于强迫症患者。</p><h3 id="安装-microsoft-store-应用" tabindex="-1"><a class="header-anchor" href="#安装-microsoft-store-应用" aria-hidden="true">#</a> 安装 Microsoft Store 应用</h3><p>Microsoft Store 不支持 winget 官方源，因此 winget 不能使用应用名称安装商店应用。winget 安装 Microsoft Store 应用前**，**需要 <code>winget search</code> 命令找到应用 id 和来源。</p><p>msstore 源指 Miscrosoft Store，其使用唯一标识符作为程序包的“Id”。因此，snipaste 安装命令为 <code>winget install 9P1WXPKB68KX -s msstore</code>。</p><p><img src="http://tc.seoipo.com/2022-05-05-17-14-23.png" alt="" loading="lazy"></p><p>安装中会要求接受协议，点 Y 确认即可。</p><p><img src="http://tc.seoipo.com/2022-05-05-17-14-35.png" alt="" loading="lazy"></p><h2 id="批量部署程序-winstall" tabindex="-1"><a class="header-anchor" href="#批量部署程序-winstall" aria-hidden="true">#</a> 批量部署程序-winstall</h2>',19),z={href:"https://winstall.app/",target:"_blank",rel:"noopener noreferrer"},U=(0,a.Uk)("winstall"),W=(0,a.Uk)(" 是 winget install 的网页管理工具。借助 winstall，用户不懂代码，也能轻松使用 winget，一次性安装所有应用程序。"),x=(0,a.uE)('<p>操作非常简单，winstall 页面选中程序，即可打包程序组或生成批量安装命令。</p><p><img src="http://tc.seoipo.com/2022-05-05-17-14-50.png" alt="" loading="lazy"></p><p>winstall 的应用搜索继承了 winget 的问题，部分国产软件不支持中文搜索，比如「坚果云」只支持英文名称「Nutstore」。希望这一问题，可以随着国内用户群增多而被解决。</p><p><img src="http://tc.seoipo.com/2022-05-05-17-15-09.png" alt="winget 搜索" loading="lazy"></p><p><img src="http://tc.seoipo.com/2022-05-05-17-15-37.png" alt="winstall 搜索" loading="lazy"></p><p>winstall 页面选好程序后，导出自动生成的批量安装命令，并在命令提示符 (cmd) 中执行，系统将自动下载并静默配置程序。</p><p><img src="http://tc.seoipo.com/2022-05-05-17-15-55.png" alt="" loading="lazy"></p><h2 id="存在-bug" tabindex="-1"><a class="header-anchor" href="#存在-bug" aria-hidden="true">#</a> 存在 bug</h2>',8),v=(0,a.Uk)("国内使用 winget 容易出现问题「尝试更新源时失败」，下载 "),N={href:"https://github.com/microsoft/winget-cli/releases",target:"_blank",rel:"noopener noreferrer"},T=(0,a.Uk)("winget 官方最新包"),Z=(0,a.Uk)(" 可解决问题。"),D=(0,a._)("li",null,"批量安装应用中，winstall 不定期出现崩溃，不确定原因。",-1),S=(0,a._)("li",null,"winget install 不能检测当前版本软件是否安装，容易造成重复安装应用，拖慢部署时间。",-1),I=(0,a._)("li",null,"部分应用安装后容易有 bug，比如剪映有卡顿问题，手动安装后恢复正常。",-1),L=(0,a._)("h2",{id:"总结",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),(0,a.Uk)(" 总结")],-1),M=(0,a._)("p",null,"常用软件中，有 50 个程序支持 winget 批量静默安装，剩余 10 个程序需手工安装。常用软件覆盖率在 80% 以上，足够满足大部分人的需求。",-1),C=(0,a._)("p",null,"winget 是过于强大的程序安装工具，一个命令行能静默安装上百个软件，节省了大量装机时间。对于系统重装、批量装机、快速设置新工作环境，winget 和 winstall 是必不可少的装机神器。",-1),E={},P=(0,n(1935).Z)(E,[["render",function(e,t){const n=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[i,l,r,o,s,(0,a._)("p",null,[(0,a._)("a",p,[g,(0,a.Wm)(n)]),c]),(0,a._)("p",null,[d,(0,a._)("a",h,[w,(0,a.Wm)(n)]),m,u,_]),(0,a._)("p",null,[f,(0,a._)("a",k,[b,(0,a.Wm)(n)])]),y,(0,a._)("p",null,[(0,a._)("a",z,[U,(0,a.Wm)(n)]),W]),x,(0,a._)("ul",null,[(0,a._)("li",null,[v,(0,a._)("a",N,[T,(0,a.Wm)(n)]),Z]),D,S,I]),L,M,C])}]])},1935:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}}}]);