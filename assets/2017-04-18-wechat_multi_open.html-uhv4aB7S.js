import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as i,c,a,b as e,d as o,e as n}from"./app-Gs_rGsV4.js";const d={},p=n(`<p>由于工作需要，我经常在电脑上同时登录多个微信账号。然而，微信规定一个客户端仅能登录一个账号，这导致我不得不同时使用 PC 端和网页版，显著降低了操作效率。随着「微信 For Windows」和「微信 UWP」版本的停用，我们曾依赖的多客户端策略变得几乎无效了。如果你之前安装了旧版的微信 UWP，好好珍惜吧。</p><p>要在不使用第三方软件的情况下实现微信的多开，现在只能依赖微信自身的一个小漏洞。通过快速双击微信图标，可以实现多开。</p><h2 id="双击多开" tabindex="-1"><a class="header-anchor" href="#双击多开" aria-hidden="true">#</a> 双击多开</h2><p>要开启多个微信，只需<strong>按住回车键，同时左键点击微信图标</strong>，点击次数决定了开启的微信数量。这个小技巧是@刘舒怡分享的：</p><blockquote><p>只要在 2 秒内快速连续双击打开软件，就能弹出很多登录界面，你想登多少个就登多少个</p></blockquote><p>如果你不喜欢手动点击，可以使用以下脚本，保存为 <code>start_wechat.bat</code> 文件。这个脚本将启动三个微信，你可以根据需要复制更多的 start 行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@echo off
start <span class="token string">&quot;WeChat&quot;</span> <span class="token string">&quot;C:\\Program Files\\Tencent\\WeChat\\WeChat.exe&quot;</span>
start <span class="token string">&quot;WeChat&quot;</span> <span class="token string">&quot;C:\\Program Files\\Tencent\\WeChat\\WeChat.exe&quot;</span>
start <span class="token string">&quot;WeChat&quot;</span> <span class="token string">&quot;C:\\Program Files\\Tencent\\WeChat\\WeChat.exe&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l={href:"https://github.com/huiyadanli/RevokeMsgPatcher",target:"_blank",rel:"noopener noreferrer"},h={href:"https://wwva.lanzouq.com/irUIX187hz3c",target:"_blank",rel:"noopener noreferrer"},g=a("code",null,".bat",-1),u=n('<h2 id="开机多开微信" tabindex="-1"><a class="header-anchor" href="#开机多开微信" aria-hidden="true">#</a> 开机多开微信</h2><p>如果你希望电脑开机时自动多开微信，可以把上述脚本的快捷方式放入 Windows 的开机「启动」文件夹。通常这个文件夹路径为 <code>%AppData%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup</code>。或者，打开「运行」对话框，输入 <code>shell:startup</code>，回车即可。</p><figure><img src="https://img.newzone.top/2022-05-06-04-23-49.png?imageMogr2/format/webp" alt="开机多开微信" tabindex="0" loading="lazy"><figcaption>开机多开微信</figcaption></figure><h2 id="多客户端-已失效" tabindex="-1"><a class="header-anchor" href="#多客户端-已失效" aria-hidden="true">#</a> 多客户端（已失效）</h2><blockquote><p>从 2024 年开始，「微信 For Windows」和「微信 UWP」均已下架，新版的微信 Store 版也无法与微信 PC 版同时安装。因此，这一方案仅供记录，已不再有效。</p></blockquote><p>打开「运行」对话框，输入并启动「应用商店」或「Microsoft Store」，搜索并安装「微信 For Windows」「微信 UWP」。</p><figure><img src="https://img.newzone.top/2022-05-06-04-21-30.png?imageMogr2/format/webp" alt="安装微信客户端" tabindex="0" loading="lazy"><figcaption>安装微信客户端</figcaption></figure><p>安装后，你可以同时启动微信 PC 版和这两个版本，互不干扰。如果你希望开机时自动启动这两个微信，可以把它们的快捷方式放在开机启动文件夹内。</p><figure><img src="https://img.newzone.top/2022-05-06-04-21-40.png?imageMogr2/format/webp" alt="多客户端微信" tabindex="0" loading="lazy"><figcaption>多客户端微信</figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>应用多开似乎越来越不受欢迎，比如新版 QQ 已经移除了多账户登录选项。但实际上，用户是怎样想的呢？这又有谁在乎呢？</p>',11);function m(f,_){const t=s("ExternalLinkIcon");return i(),c("div",null,[p,a("p",null,[e("有开发者为微信和 QQ 制作了多开补丁 "),a("a",l,[e("RevokeMsgPatcher"),o(t)]),e("，可以从国内链接下载："),a("a",h,[e("RevokeMsgPatcher.v1.6.zip"),o(t)]),e("。使用这个补丁后，每次点击应用图标都会打开新的登录窗口，这取决于个人需求。我更喜欢直接通过 "),g,e(" 脚本来实现多开。")]),u])}const k=r(d,[["render",m],["__file","2017-04-18-wechat_multi_open.html.vue"]]);export{k as default};
