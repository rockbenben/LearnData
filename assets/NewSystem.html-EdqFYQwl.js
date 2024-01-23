import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as r,c as i,a,b as n,d as s,w as c,e as o}from"./app-SDWFivZR.js";const u={},k=a("h2",{id:"重装准备",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#重装准备","aria-hidden":"true"},"#"),n(" 重装准备")],-1),d={href:"https://newzone.top/apps/Applist.html",target:"_blank",rel:"noopener noreferrer"},m=a("li",null,"同步：检查 GoodSync 同步设置；核对群晖已同步到最新备份。",-1),h=a("li",null,"反激活已购软件，如：Eagle、MoneyWiz、妙笔。",-1),b={href:"https://www.microsoft.com/zh-cn/software-download/windows11",target:"_blank",rel:"noopener noreferrer"},_=a("h2",{id:"安装系统",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#安装系统","aria-hidden":"true"},"#"),n(" 安装系统")],-1),f=a("strong",null,"NTFS/exFAT",-1),g={href:"https://www.itsk.com/latest",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.wepe.com.cn/download.html",target:"_blank",rel:"noopener noreferrer"},v=a("p",null,"使用 U 盘引导安装系统：",-1),S=a("ul",null,[a("li",null,"本地安装：右键 ISO 文件，选择挂载；在新出现的驱动器中，找到 setup.exe，直接运行；选择「现在安装」。"),a("li",null,[n("引导安装：采用 UEFI+GPT。如果是自定义安装清空系统盘所有分区后，一定要用 "),a("strong",null,"GPT"),n(" 对系统盘分区。")])],-1),D=a("h2",{id:"系统配置",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#系统配置","aria-hidden":"true"},"#"),n(" 系统配置")],-1),N=a("li",null,"将 Documents、Desktop 转移到 D 盘。",-1),E=a("li",null,[n("环境包安装："),a("code",null,"npm i -g npm@latest; npm i -g pnpm; npm i -g yarn; npm i -g docsify-cli"),n("。")],-1),x=a("li",null,"显示屏校色：屏幕换线或换主机，参数可能会变动。在颜色管理部分还原显示器设置。",-1),L=a("li",null,"任务栏：在任务栏底部右键单击，选择「任务栏设置」>「通知区域」>「选择哪些图标显示在任务栏上」；在同页面的「多显示器设置」中，取消「在所有显示器上显示任务栏」。",-1),y=a("li",null,"Win11 本地账户也被提示需要登录密码，但设置密码后，无法直接开机登录。设置新密码后，点击「设置」>「账户」>「登录选项」>「密码」，可以重新设置空密码，实现自动登录。在账户中可以设置密码永不过期。",-1),B={href:"https://zhuanlan.zhihu.com/p/25942015",target:"_blank",rel:"noopener noreferrer"},C={href:"https://newzone.top/posts/2017-09-02-forced_shutdown.html",target:"_blank",rel:"noopener noreferrer"},T=a("li",null,"台机的电源模式调整到最佳性能模式。",-1),W=a("p",null,"系统配置注意：",-1),P=a("ul",null,[a("li",null,"右键更改前先备份注册表，有几率会影响系统稳定性。"),a("li",null,"英语键盘删不掉：添加英语语言包，然后再删除，英语键盘也会一起删除。")],-1),A=a("h2",{id:"安装应用",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#安装应用","aria-hidden":"true"},"#"),n(" 安装应用")],-1),G={href:"https://newzone.top/posts/2022-03-21-winget_the_strongest_software_manager_for_windows.html",target:"_blank",rel:"noopener noreferrer"},F=a("code",null,"InternetOpenUrl() failed. 0x80072f7d : unknown error",-1),H=o(`<h3 id="mircrosoft-store" tabindex="-1"><a class="header-anchor" href="#mircrosoft-store" aria-hidden="true">#</a> Mircrosoft Store</h3><p>由于微软应用商店能自动更新应用，我习惯通过它安装一些无需配置的应用。这些应用包括 Windows Terminal、Windows Notepad、Windows 闹钟和时钟、Windows 扫描、Windows 相机、Windows 录音机、Snipaste、Ditto、PowerToys、One Commander、思源笔记、Discord。以下是按顺序排列的一键安装命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>winget <span class="token function">install</span> 9N0DX20HK701 <span class="token parameter variable">-s</span> msstore  <span class="token punctuation">;</span>  winget <span class="token function">install</span> 9MSMLRH6LZF3 <span class="token parameter variable">-s</span> msstore  <span class="token punctuation">;</span>  winget <span class="token function">install</span> 9WZDNCRFJ3PR <span class="token parameter variable">-s</span> msstore  <span class="token punctuation">;</span>  winget <span class="token function">install</span> 9WZDNCRFJ3PV <span class="token parameter variable">-s</span> msstore  <span class="token punctuation">;</span>  winget <span class="token function">install</span> 9WZDNCRFJBBG <span class="token parameter variable">-s</span> msstore  <span class="token punctuation">;</span>  winget <span class="token function">install</span> 9WZDNCRFHWKN <span class="token parameter variable">-s</span> msstore  <span class="token punctuation">;</span>  winget <span class="token function">install</span> 9P1WXPKB68KX <span class="token parameter variable">-s</span> msstore  <span class="token punctuation">;</span>  winget <span class="token function">install</span> 9NBLGGH3ZBJQ <span class="token parameter variable">-s</span> msstore  <span class="token punctuation">;</span>  winget <span class="token function">install</span> XP89DCGQ3K6VLD <span class="token parameter variable">-s</span> msstore  <span class="token punctuation">;</span>  winget <span class="token function">install</span> 9NBLGGH4S79B <span class="token parameter variable">-s</span> msstore  <span class="token punctuation">;</span>  winget <span class="token function">install</span> 9P7HPMXP73K4 <span class="token parameter variable">-s</span> msstore  <span class="token punctuation">;</span>  winget <span class="token function">install</span> XPDC2RH70K22MN <span class="token parameter variable">-s</span> msstore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="常规应用" tabindex="-1"><a class="header-anchor" href="#常规应用" aria-hidden="true">#</a> 常规应用</h3><p>以下是常用的非微软商店应用的批量安装命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Mozilla.Firefox <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Google.Chrome <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Brave.Brave <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Mozilla.Thunderbird <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Logitech.Options <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Tencent.WeChat <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Tencent.TIM <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Tencent.QQ.NT <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Telegram.TelegramDesktop <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Microsoft.VisualStudioCode <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Notepad++.Notepad++ <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Notion.Notion <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Formagrid.Airtable <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Figma.Figma <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>ogdesign.Eagle <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>PicGo.PicGo.Beta <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Logseq.Logseq <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Obsidian.Obsidian <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Appest.Dida <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>SumatraPDF.SumatraPDF <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Bandisoft.Honeyview <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Alibaba.aDrive  <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span><span class="token number">115</span>.115Chrome <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>VideoLAN.VLC <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>ByteDance.JianyingPro <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Git.Git -e<span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>GitHub.GitHubDesktop <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Hesan.He3 <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>NickeManarin.ScreenToGif <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Valve.Steam <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>Nutstore.Nutstore <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>TominLab.WonderPen <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>OBSProject.OBSStudio <span class="token parameter variable">-e</span>  <span class="token punctuation">;</span> winget <span class="token function">install</span> <span class="token parameter variable">--id</span><span class="token operator">=</span>mgth.LittleBigMouse <span class="token parameter variable">-e</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对更新党来说，在后续应用管理可以搭配 <code>winget upgrade</code> 来检查是否有应用更新。也可以使用 <code>winget upgrade --all</code> 来静默升级所有支持 winget 的程序。</p><h3 id="手动安装应用" tabindex="-1"><a class="header-anchor" href="#手动安装应用" aria-hidden="true">#</a> 手动安装应用</h3>`,8),M={href:"https://learn.microsoft.com/zh-cn/windows/wsl/install#install-wsl-command",target:"_blank",rel:"noopener noreferrer"},R=a("code",null,"wsl --install",-1),V={href:"https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-1---enable-the-windows-subsystem-for-linux",target:"_blank",rel:"noopener noreferrer"},O={href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"},z=a("li",null,"同步设置：GoodSync 保持本地不同目录间的文件同步；Synology Drive 将本地文件备份到 NAS。",-1),K={href:"https://www.iplaysoft.com/win11-wsa.html",target:"_blank",rel:"noopener noreferrer"},I=a("h2",{id:"应用配置",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#应用配置","aria-hidden":"true"},"#"),n(" 应用配置")],-1),q=o("<li>配置：RIME、Picgo、Wonderpen、Eagle。</li><li>Everything 注册右键搜索当前路径；右键清除。 <ul><li>win+r, regedit 打开注册表，打开路径 <code>HKEY_CLASSES_ROOT\\Directory\\Background\\shell</code>。</li><li>新建项，命名随意 ( 即右键菜单显示的文字 ) -「Everything 搜索当前路径」。</li><li>右键再次新建项，命名 Command，打开修改右侧默认值为 <code>&quot;D: \\Everything\\Everything.exe&quot; -path &quot;.&quot;</code>。</li></ul></li><li>按键更改： <ul><li>Powertoys：将 insert 键改为 backspace。</li><li>Logitech.Options：将键盘的计算器改为「上一个桌面」；右键菜单改为「下一个桌面」。</li></ul></li>",3),J=a("h3",{id:"旧资料-已弃用",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#旧资料-已弃用","aria-hidden":"true"},"#"),n(" 旧资料（已弃用）")],-1),X={href:"https://dandelioncloud.cn/article/details/1569126817577791489",target:"_blank",rel:"noopener noreferrer"},Z=a("li",null,[n("firefox-about: config 修改原值 18 的 "),a("code",null,"ui.key.menuAccessKey"),n(" 为 0，以屏蔽 alt 防止热键冲突；选择「options」>「Network Settings」，取消勾选「DNS over HTTPS」。")],-1),Q={href:"https://github.com/tutugreen/Huorong-Rules/tree/main/Tencent",target:"_blank",rel:"noopener noreferrer"},U={href:"https://vb-audio.com/Cable/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.youtube.com/watch?v=1DsrniDGOJQ",target:"_blank",rel:"noopener noreferrer"};function Y($,aa){const e=t("ExternalLinkIcon"),p=t("RouterLink");return r(),i("div",null,[k,a("ul",null,[a("li",null,[n("备份："),a("a",d,[n("必备应用"),s(e)]),n("、油猴脚本、VSCode 配置、输入法配置。")]),m,h,a("li",null,[n("更新 "),a("a",b,[n("原版镜像"),s(e)]),n("。")])]),_,a("p",null,[n("系统重装维修前，在 "),f,n(" 格式的 U 盘上安装 "),a("a",g,[n("优启通"),s(e)]),n(" 或 "),a("a",w,[n("微 PE 工具箱"),s(e)]),n("。Windows 10/11 镜像超过 4GB，已经不再支持 FAT32 格式的 U 盘。")]),v,S,D,a("ul",null,[N,E,x,L,y,a("li",null,[a("a",B,[n("清理导航栏"),s(e)])]),a("li",null,[a("a",C,[n("设置系统强制关机"),s(e)]),n("，防止系统关机不成功。")]),T]),W,P,A,a("p",null,[n("使用 "),a("a",G,[n("winstall"),s(e)]),n(" 可以批量安装应用，但这需要你提前登录微软账户，并更改 ps1 的运行权限。如果出现"),F,n(" 则检查 TLS 是否开启 1.2 和 1.3。（每次使用四大行网银后，基本都需要修复次）")]),H,a("ul",null,[a("li",null,[a("a",M,[n("WSL"),s(e)]),n(" ：在管理员模式下打开 PowerShell 或 Windows 命令提示符，输入 "),R,n(" 命令。如果提示错误，则按 "),a("a",V,[n("旧版 WSL 的手动安装步骤"),s(e)]),n(" 开启步骤 1 和 3 的功能。WSL 安装并重启成功后，安装 "),a("a",O,[n("Docker Desktop"),s(e)]),n("。")]),z,a("li",null,[n("电脑运行 Android 手机应用， "),a("a",K,[n("Win11 安卓子系统"),s(e)]),n(" ( WSA ) 安装。")])]),I,a("ul",null,[a("li",null,[n("绿色开机：开机脚本、Keepass、Ditto。开机脚本用 "),s(p,{to:"/code/AutoHotkey.html#%E7%AE%A1%E7%90%86%E5%91%98%E6%9D%83%E9%99%90%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC"},{default:c(()=>[n("管理员权限启动脚本")]),_:1}),n("。")]),q]),J,a("ul",null,[a("li",null,[n("如果空间不足，可以把 "),a("a",X,[n("WSL 从 C 盘迁移至 D 盘的简单实用方法"),s(e)]),n("，但容易出现兼容性问题。")]),Z,a("li",null,[n("火绒－安全设置－高级防护－导入隐私规则，增加 "),a("a",Q,[n("腾讯屏蔽规则"),s(e)]),n("。")]),a("li",null,[n("实时将音频转文字：管理员方式安装 "),a("a",U,[n("VB-CABLE"),s(e)]),n(" ，输入输出设备都选 VB-CABLE，详细设置查看 "),a("a",j,[n("How to Convert Audio to Text - FREE & No Time Limits"),s(e)]),n("。")])])])}const ea=l(u,[["render",Y],["__file","NewSystem.html.vue"]]);export{ea as default};
