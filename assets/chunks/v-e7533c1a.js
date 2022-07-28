"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6176],{5780:(e,i,t)=>{t.r(i),t.d(i,{data:()=>l});const l=JSON.parse('{"key":"v-e7533c1a","path":"/_posts/2020-10-25-dpc_watchdog_violation.html","title":"真·DPC_WATCHDOG_VIOLATION 蓝屏解决方案","lang":"zh-CN","frontmatter":{"title":"真·DPC_WATCHDOG_VIOLATION 蓝屏解决方案","date":"2020-10-25T00:00:00.000Z","category":["系统"],"tag":["蓝屏"],"star":true,"order":-30,"summary":"DPCWATCHDOGVIOLATION 蓝屏原因，多为硬件驱动问题。可是只有驱动出现大规模报错，厂家才会更新并推送解决方法。因此，你在网上搜到的解决方案，大多是过时的，不能解决你的问题。蓝屏原因千奇百怪，分析 dmp 蓝屏日志才是能百分百解决蓝屏的办法。 分析 dmg 日志 1. 安装 WinDbg Preview，这是微软官方推出的系统 Debug 工具","head":[["meta",{"property":"og:url","content":"https://newzone.top/_posts/2020-10-25-dpc_watchdog_violation.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"真·DPC_WATCHDOG_VIOLATION 蓝屏解决方案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-28T05:54:26.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"蓝屏"}],["meta",{"property":"article:published_time","content":"2020-10-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-28T05:54:26.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"分析 dmg 日志","slug":"分析-dmg-日志","children":[]},{"level":2,"title":"小白修复蓝屏","slug":"小白修复蓝屏","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","children":[{"level":3,"title":"装不了 WinDbg","slug":"装不了-windbg","children":[]},{"level":3,"title":"分析日志时报错","slug":"分析日志时报错","children":[]},{"level":3,"title":"找不到 minidump 文件","slug":"找不到-minidump-文件","children":[]},{"level":3,"title":"蓝屏原因分析汇总","slug":"蓝屏原因分析汇总","children":[]}]},{"level":2,"title":"蓝屏解决集锦","slug":"蓝屏解决集锦","children":[]}],"git":{"createdTime":1658685076000,"updatedTime":1658987666000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":5}]},"readingTime":{"minutes":4.21,"words":1262},"filePathRelative":"_posts/2020-10-25-dpc_watchdog_violation.md","localizedDate":"2020年10月25日"}')},6857:(e,i,t)=>{t.r(i),t.d(i,{default:()=>T});var l=t(8e3);const n=(0,l._)("p",null,"DPC_WATCHDOG_VIOLATION 蓝屏原因，多为硬件驱动问题。可是只有驱动出现大规模报错，厂家才会更新并推送解决方法。因此，你在网上搜到的解决方案，大多是过时的，不能解决你的问题。蓝屏原因千奇百怪，分析 dmp 蓝屏日志才是能百分百解决蓝屏的办法。",-1),r=(0,l._)("h2",{id:"分析-dmg-日志",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#分析-dmg-日志","aria-hidden":"true"},"#"),(0,l.Uk)(" 分析 dmg 日志")],-1),a=(0,l.Uk)("安装 "),d={href:"https://www.microsoft.com/zh-cn/p/windbg/9pgjgd53tn86?rtc=1&activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"},o=(0,l.Uk)("WinDbg Preview"),p=(0,l.Uk)("，这是微软官方推出的系统 Debug 工具。"),c=(0,l.uE)('<li><p>启动 WinDbg Preview，软件会自动检测到最新 dmp 日志，点击 Yes 即可载入。如果想分析其他文件，打开文件夹 <code>C:\\Windows\\Minidump</code>，导出日志 <code>xxx.dmp</code>。</p></li><li><p>载入日志过程中，WinDbg Preview 会自动下载所需文件，不需要管。载入完成后，点击 <code>!analyze -v</code>，分析具体日志。</p><p><img src="http://tc.seoipo.com/20201025223307.png" alt="" loading="lazy"></p></li><li><p>分析日志：日志上方的都是套话，可以忽略。直接看日志最下方几行，找出引发蓝屏的进程，并删除该程序。如果冲突进程为驱动，无法强删，可以把驱动还原为上一版驱动或系统自带驱动。</p><p><img src="http://tc.seoipo.com/20201025224308.png" alt="" loading="lazy"></p></li>',3),s=(0,l._)("p",null,"有些蓝屏较复杂，由多方原因造成，新手很难直接分析。建议将蓝屏日志完整上传到微软社区分析，小白方案中有具体步骤。",-1),m=(0,l._)("h2",{id:"小白修复蓝屏",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#小白修复蓝屏","aria-hidden":"true"},"#"),(0,l.Uk)(" 小白修复蓝屏")],-1),h=(0,l._)("p",null,"不想分析日志，也简单。",-1),u=(0,l._)("li",null,[(0,l.Uk)("打开文件夹 "),(0,l._)("code",null,"C:\\Windows\\Minidump"),(0,l.Uk)("，导出日志 "),(0,l._)("code",null,"xxx.dmp"),(0,l.Uk)("。")],-1),g=(0,l.Uk)("将 dmp 日志上传至 "),_={href:"https://answers.microsoft.com/zh-hans/newthread?threadtype=Questions&cancelurl=/zh-hans/windows/forum&forum=windows&filter=",target:"_blank",rel:"noopener noreferrer"},b=(0,l.Uk)("微软社区"),w=(0,l.Uk)("，会有技术人员帮你分析蓝屏原因。微软社区无法上传附件，需先将 dmp 日志上传至百度云或微云，再将分享链接放在问题里。"),f=(0,l._)("h2",{id:"常见问题",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#常见问题","aria-hidden":"true"},"#"),(0,l.Uk)(" 常见问题")],-1),k=(0,l._)("h3",{id:"装不了-windbg",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#装不了-windbg","aria-hidden":"true"},"#"),(0,l.Uk)(" 装不了 WinDbg")],-1),v=(0,l.Uk)("少数情况安装应用报错，本地无法分析日志。此时，我们可以导出蓝屏日志，上传到 "),x={href:"https://answers.microsoft.com/zh-hans/newthread?threadtype=Questions&cancelurl=/zh-hans/windows/forum&forum=windows&filter=",target:"_blank",rel:"noopener noreferrer"},y=(0,l.Uk)("微软社区"),D=(0,l.Uk)("，会有人帮助分析原因。"),C=(0,l.uE)('<h3 id="分析日志时报错" tabindex="-1"><a class="header-anchor" href="#分析日志时报错" aria-hidden="true">#</a> 分析日志时报错</h3><p>分析蓝屏时报错，或 WinDbg 对 minidump 蓝屏日志的访问被拒绝，这都是由于系统盘读取权限未开放所导致的。</p><p>解决办法有 3 种：</p><ul><li>将 minidump 文件复制到 D 盘，然后手动导入到 WinDbg 进行分析。</li><li>@天气控制仪：以管理员权限运行 WinDbg。</li><li>@紫石英与灯心草：右键点击 minidump 蓝屏日志，然后依次选<code>属性 - 权限 - 点击用户 - 点击继承 - 同意</code>。</li></ul><h3 id="找不到-minidump-文件" tabindex="-1"><a class="header-anchor" href="#找不到-minidump-文件" aria-hidden="true">#</a> 找不到 minidump 文件</h3><p>蓝屏日志默认保存在 <code>C:\\Windows\\Minidump</code>。</p><p>如果该文件夹为空，说明蓝屏日志未生成，等下次蓝屏再查看。如果多次蓝屏，该文件夹下还是没有日志，则尝试在资源管理器中打开 <code>%SystemRoot%\\Minidump</code>，失败后按下列步骤设置：</p><ol><li>打开控制面板&gt;&gt;系统&gt;&gt;高级系统设置&gt;&gt;高级&gt;&gt;启动和故障恢复&gt;&gt;设置；</li><li>写入调试信息&gt;&gt;选择「小内存转储（256KB）」，路径选择 <code>%SystemRoot%\\Minidump</code>，确定并重启您的计算机；</li><li>再次异常关机后，前往 <code>%SystemRoot%\\Minidump</code> 提取即可。</li></ol><h3 id="蓝屏原因分析汇总" tabindex="-1"><a class="header-anchor" href="#蓝屏原因分析汇总" aria-hidden="true">#</a> 蓝屏原因分析汇总</h3><p>评论区大部分很多重复问蓝屏原因的，这里汇总了常见的蓝屏原因分析。</p><ul><li>系统性模块报错：ntkrnlmp.exe、xxx.symbols.exe。日志尾部仅有系统模块报错，实际是由应用进程与系统冲突引起的蓝屏，需深入分析日志。</li><li>驱动冲突：nvlddmkm、amdkmdag。N 卡、A 卡或硬件进程报错，建议先回退到旧驱动。这样不会对电脑产生很大影响。如果驱动不对，可重新安装。驱动无法回退，则去官网下载旧驱动，或尝试最新驱动，或卸载为系统默认驱动。驱动若不行，则尝试更新主板 BIOS，关闭超频。</li><li>未知报错：xxx.sys。尝试多种方法，依然无法修复，则可用最后一步 - 强行删除。但删除前，必须备份好文件和位置。如果删除后进入不了系统，需使用 PE 系统还原备份文件。如不清楚如何使用 PE，不要删除任何 xxx.sys 文件。</li></ul><h2 id="蓝屏解决集锦" tabindex="-1"><a class="header-anchor" href="#蓝屏解决集锦" aria-hidden="true">#</a> 蓝屏解决集锦</h2><p>如果不想分析日志，甚至找不到找不到蓝屏日志，可以尝试下列方法，测试解决了 80% 的蓝屏。</p><ul><li>驱动类：更新显卡驱动；更新网卡驱动；重置声卡驱动；重置 SATA AHCI 驱动；</li><li>主板类：擦拭内存条；重置 BIOS；增加 CPU 电压；关闭超线程；</li><li>终极方法：重装系统，测试期间<strong>尽量使用默认系统驱动</strong>。重装又蓝屏的话，说明你新装的驱动有问题，卸掉有问题的驱动。</li></ul><p>视频说明：</p>',15),W=(0,l._)("iframe",{height:"400",width:"100%",src:"//player.bilibili.com/player.html?aid=627539890&bvid=BV1jt4y1i7C8&cid=249655764&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ",-1),O={},T=(0,t(1935).Z)(O,[["render",function(e,i){const t=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[n,r,(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[a,(0,l._)("a",d,[o,(0,l.Wm)(t)]),p])]),c]),s,m,h,(0,l._)("ol",null,[u,(0,l._)("li",null,[g,(0,l._)("a",_,[b,(0,l.Wm)(t)]),w])]),f,k,(0,l._)("p",null,[v,(0,l._)("a",x,[y,(0,l.Wm)(t)]),D]),C,W])}]])},1935:(e,i)=>{i.Z=(e,i)=>{const t=e.__vccOpts||e;for(const[e,l]of i)t[e]=l;return t}}}]);