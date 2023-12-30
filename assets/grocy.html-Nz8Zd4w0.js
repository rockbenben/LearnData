import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c,a as n,b as s,d as i,e as l}from"./app-hIMIqkOU.js";const p={},r={href:"https://grocy.info/",target:"_blank",rel:"noopener noreferrer"},u=l(`<p>Grocy Docker 端默认的账户密码是 <code>admin</code>。要将界面语言设置为中文，只需点击右上角的菜单，然后选择「User settings」，接着在语言选项中选择中文。</p><p>如果你想在移动设备上扫描物品的条形码，可以按照以下步骤操作：点击右上角的菜单，选择「管理 API 秘钥」，然后点击「添加」和「生成 API 秘钥」。接下来，点击生成的秘钥旁边的第二个按钮，使用移动客户端扫描显示在页面上的二维码。然而，个人认为在家庭使用中，扫码功能可能并不是必需的。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># https://hub.docker.com/r/linuxserver/grocy</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2.1&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">grocy</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> lscr.io/linuxserver/grocy<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> grocy
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1026
      <span class="token punctuation">-</span> PGID=100
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/grocy/config<span class="token punctuation">:</span>/config
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9020<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function d(k,v){const a=t("ExternalLinkIcon");return o(),c("div",null,[n("p",null,[n("a",r,[s("Grocy"),i(a)]),s(" 是一款自助式杂货和家庭管理解决方案，可用于记录物品信息并根据个性化需求进行管理。此外，它还支持手机端的条形码扫描功能，方便您清理家庭杂物，避免使用过期物品。Grocy 支持各种客户端，包括 iOS、Android、Windows，并且还提供 Home Assistant 插件支持。")]),u])}const b=e(p,[["render",d],["__file","grocy.html.vue"]]);export{b as default};
