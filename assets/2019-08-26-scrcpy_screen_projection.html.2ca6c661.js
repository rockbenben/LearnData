import{ad as c,C as a,D as s,B as n,O as e,J as r,ae as d,Q as l}from"./app.5674d10f.js";import"./vendor.b1b0a289.js";const o={},t={href:"https://github.com/Genymobile/scrcpy",target:"_blank",rel:"noopener noreferrer"},p=n("p",null,"市面上主流的多屏协同软件都是基于 scrcpy 开发，套层皮，bug 几乎没改，推荐直接使用官方的 scrcpy。",-1),v={href:"https://github.com/Genymobile/scrcpy/releases/download/v1.24/scrcpy-win64-v1.24.zip",target:"_blank",rel:"noopener noreferrer"},h={href:"https://wwz.lanzouf.com/iezWX03zx4de",target:"_blank",rel:"noopener noreferrer"},m=d(`<h2 id="有线投屏" tabindex="-1"><a class="header-anchor" href="#有线投屏" aria-hidden="true">#</a> 有线投屏</h2><ol><li>下载并解压 scrcpy。</li><li>手机端开启 <code>开发者选项</code> 及 <code>USB 调试</code>。开发者选项默认情况下处于隐藏状态，转到<code>设置 - 关于手机</code>，然后点按版本号七次，返回上一屏幕，在底部可以找到开发者选项。</li><li>用数据线将手机和电脑连接起来，此时手机上弹出授权提示，点击 <code>允许 USB 调试</code>。</li><li>双击解压得到的 <strong>scrcpy.exe</strong> 文件，就能进行有线投屏了。</li></ol><h2 id="无线投屏" tabindex="-1"><a class="header-anchor" href="#无线投屏" aria-hidden="true">#</a> 无线投屏</h2><p>无线投屏的前提是，<strong>电脑与手机处于同一局域网</strong>。</p><p>有线投屏的 1-3 步同样适用于无线投屏，完成后打开 PowerShell (~ cmd)，依次操作并输入代码。</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code># a.将代码目录切换到 scrcpy 文件夹。
cd D:\\Libraries\\Desktop\\scrcpy-win64-v1.24
# Win11 在 scrcpy 文件夹中右键「在终端中打开」，会自动切换到当前路径。
​
# b.在手机端开启「开发者选项」及「USB 调试」，然后使用数据线将手机和电脑连接并允许 USB 调试，开启手机端口
# 如果本行显示 no device 或未启动 adb，需检查「USB 调试」是否开启，或更换数据线。
# 此外，一些手机需选择「文件传输」模式方能使用 adb。
.\\adb tcpip 5555
​
# c.拔出手机数据线，开始无线投屏。(192.168.2.20 为手机端的 WIFI 局域网 ip，需更改)
.\\adb connect 192.168.2.20:5555
​
# d.启动 scrcpy.exe
.\\scrcpy

# 如有报错或延迟较大，可启动低分辨率投屏
.\\scrcpy -m 1024
# 连接多个设备，报错提示\`failed to get feature set: more than one device/emulator\`，则指定连接 tcpip 设备
.\\scrcpy -e -m 1024
# 简化操作：合并步骤 c 和 d，保持屏幕常亮，使用 1024 分辨率
.\\scrcpy --tcpip=192.168.2.20 -w -m 1024
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tc.seoipo.com/20190829093407.png" alt="" loading="lazy"></p><h2 id="屏幕录制" tabindex="-1"><a class="header-anchor" href="#屏幕录制" aria-hidden="true">#</a> 屏幕录制</h2><p>如果想在投屏的同时，对手机屏幕进行录制，则输入按下方命令操作。</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code># 将代码目录定位到 scrcpy 文件夹
cd D:\\Libraries\\Desktop\\scrcpy-win64-v1.24
​
# 开始录制，录屏文件会以命令指定的文件名自动保存在当前文件夹内。
.\\scrcpy -r filename.mp4
​
# 关闭投屏窗口后，自动停止录屏并将视频保存在相应目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="错误检查" tabindex="-1"><a class="header-anchor" href="#错误检查" aria-hidden="true">#</a> 错误检查</h3><p>遇到报错时，检查下方三种情况，可以解决 90% 的错误。</p><ul><li>更换数据线；</li><li>检查手机的「本机 IP」是否正确；</li><li>核对有线连接步骤，<code>开启 USB 调试－连接手机与电脑－启动 scrcpy</code>。</li></ul><h3 id="error-exception-on-thread" tabindex="-1"><a class="header-anchor" href="#error-exception-on-thread" aria-hidden="true">#</a> ERROR: Exception on thread</h3><p>报错 <code>ERROR: Exception on thread Thread[main,5,main]</code>，多为手机不兼容 scrcpy 默认分辨率设置。解决方位为，按下方修改 scrcpy 启动代码，使用较低的分辨率。</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code># 三项设置，任选其一
.\\scrcpy -m 1920
.\\scrcpy -m 1024
.\\scrcpy -m 800
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="投屏模糊" tabindex="-1"><a class="header-anchor" href="#投屏模糊" aria-hidden="true">#</a> 投屏模糊</h3><p>如果屏幕设置了缩放比例，投屏界面会模糊。右键 <strong>scrcpy.exe</strong>，<code>属性 - 兼容性 - 更改高 DPI 设置</code>，然后勾选「替代高 DPI 缩放行为」，应用后投屏恢复正常。</p><p><img src="http://tc.seoipo.com/20190829095640.png" alt="" loading="lazy"></p>`,20),u={href:"https://github.com/Genymobile/scrcpy/blob/master/FAQ.md",target:"_blank",rel:"noopener noreferrer"};function b(y,_){const i=l("ExternalLinkIcon");return a(),s("div",null,[n("p",null,[n("a",t,[e("scrcpy"),r(i)]),e(" 是免费开源的投屏软件，支持将安卓手机屏幕投放在 Windows、macOS、GNU/Linux 上，并可直接借助鼠标在投屏窗口中进行交互和录制。")]),p,n("p",null,[e("本文以 Window 投屏为例，兼容 Win10 和 Win11。scrcpy 官方下载 "),n("a",v,[e("scrcpy-win64-v1.24.zip"),r(i)]),e("，或使用国内搬运链接："),n("a",h,[e("https://wwz.lanzouf.com/iezWX03zx4de"),r(i)]),e("。")]),m,n("p",null,[e("更多问题报错的解决方法，查看 "),n("a",u,[e("官方 FAQ"),r(i)]),e("。")])])}const x=c(o,[["render",b],["__file","2019-08-26-scrcpy_screen_projection.html.vue"]]);export{x as default};
