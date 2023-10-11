import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as i,a as n,b as s,d as o,e as c}from"./app-5fa87293.js";const p={},u=c(`<p>Emby 为家庭提供了一个强大的媒体服务器，但在配置过程中，记得为你的媒体库目录授权“Everyone”，以确保 Emby 能够无障碍地访问它。为此，请打开共享文件夹的权限设置，选择对应的系统用户，并确保其具有读写权限。</p><p>使用 Emby 客户端播放视频需要 Emby Premiere。一次性购买终身会员的价格为 119 美元，但在黑五期间，通常可以以 99 美元的折扣价格获得。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># https://hub.docker.com/r/linuxserver/emby</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2.1&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">emby</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> lscr.io/linuxserver/emby<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> emby
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1026
      <span class="token punctuation">-</span> PGID=100
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/emby/config<span class="token punctuation">:</span>/config
      <span class="token comment"># 媒体库映射</span>
      <span class="token punctuation">-</span> /volume1/tvshows<span class="token punctuation">:</span>/data/tvshows
      <span class="token punctuation">-</span> /volume4/movies<span class="token punctuation">:</span>/data/movies
      <span class="token punctuation">-</span> /volume3/Anime<span class="token punctuation">:</span>/data/anime
      <span class="token punctuation">-</span> /volume4/Documentary<span class="token punctuation">:</span>/data/documentary
      <span class="token punctuation">-</span> /volume4/Music/MV<span class="token punctuation">:</span>/data/MV
      <span class="token punctuation">-</span> /volume4/Music/Audio<span class="token punctuation">:</span>/data/Audio
      <span class="token comment">#- /opt/vc/lib:/opt/vc/lib #optional</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 49172<span class="token punctuation">:</span><span class="token number">8096</span>
      <span class="token punctuation">-</span> 49171<span class="token punctuation">:</span><span class="token number">8920</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安全地从外部访问" tabindex="-1"><a class="header-anchor" href="#安全地从外部访问" aria-hidden="true">#</a> 安全地从外部访问</h2>`,4),r={href:"https://www.bilibili.com/read/cv14814465/",target:"_blank",rel:"noopener noreferrer"},d=n("ol",null,[n("li",null,"确保你的家庭网络已设置了 DDNS（通常通过路由器完成）。"),n("li",null,"下载与你的域名匹配的 Tomcat 证书版本。"),n("li",null,"解压后，你会看到一个 pfx 文件和一个包含密码的 txt 文件。"),n("li",null,"将它们都放置在 config 目录的特定路径中。"),n("li",null,"接下来，在 Emby 的“服务器 > 网络”设置中，输入你的公共端口和 DDNS 域名。"),n("li",null,"建议开启安全连接模式，这样可以更好地保护你的数据安全。")],-1),m=n("figure",null,[n("img",{src:"https://img.newzone.top/2023-09-15-05-32-43.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function v(k,b){const a=t("ExternalLinkIcon");return l(),i("div",null,[u,n("p",null,[s("如果你计划从外部访问 Emby，请务必启用 HTTPS。具体步骤可以参考"),n("a",r,[s("这里"),o(a)]),s("。简单来说：")]),d,m])}const h=e(p,[["render",v],["__file","emby.html.vue"]]);export{h as default};
