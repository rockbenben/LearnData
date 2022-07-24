import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as e}from"./app.f5b2db8d.js";const c={},o=e(`<p>Docker Compose \u662F\u4E00\u4E2A\u7528\u6765\u5B9A\u4E49\u548C\u8FD0\u884C\u590D\u6742\u5E94\u7528\u7684 Docker \u5DE5\u5177\u3002\u4E00\u4E2A\u4F7F\u7528 Docker \u5BB9\u5668\u7684\u5E94\u7528\uFF0C\u901A\u5E38\u7531\u591A\u4E2A\u5BB9\u5668\u7EC4\u6210\u3002\u4F7F\u7528 Docker Compose \u4E0D\u518D\u9700\u8981\u4F7F\u7528 shell \u811A\u672C\u6765\u542F\u52A8\u5BB9\u5668\u3002</p><p>Compose \u901A\u8FC7\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u6765\u7BA1\u7406\u591A\u4E2A Docker \u5BB9\u5668\uFF0C\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u6240\u6709\u7684\u5BB9\u5668\u901A\u8FC7 services \u6765\u5B9A\u4E49\uFF0C\u7136\u540E\u4F7F\u7528 docker-compose \u811A\u672C\u6765\u542F\u52A8\uFF0C\u505C\u6B62\u548C\u91CD\u542F\u5E94\u7528\uFF0C\u548C\u5E94\u7528\u4E2D\u7684\u670D\u52A1\u4EE5\u53CA\u6240\u6709\u4F9D\u8D56\u670D\u52A1\u7684\u5BB9\u5668\uFF0C\u975E\u5E38\u9002\u5408\u7EC4\u5408\u4F7F\u7528\u591A\u4E2A\u5BB9\u5668\u8FDB\u884C\u5F00\u53D1\u7684\u573A\u666F\u3002</p><h2 id="docker-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#docker-\u547D\u4EE4" aria-hidden="true">#</a> docker \u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u6240\u6709\u5BB9\u5668\uFF0C\u6709</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">ps</span>
<span class="token comment"># \u505C\u6B62\u5BB9\u5668\u8FD0\u884C\uFF0C\u907F\u514D\u62A5\u9519</span>
<span class="token function">sudo</span> <span class="token function">docker</span> stop <span class="token operator">&lt;</span>CONTAINER ID<span class="token operator">&gt;</span>
<span class="token comment"># \u5BFC\u51FA\u6307\u5B9A\u5BB9\u5668\uFF0C\u4FDD\u5B58\u8DEF\u5F84\u53EF\u4F7F\u7528 /volume4/Backup</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">export</span> <span class="token operator">&lt;</span>CONTAINER ID<span class="token operator">&gt;&gt;</span><span class="token operator">&lt;</span>\u4FDD\u5B58\u8DEF\u5F84<span class="token operator">&gt;</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">export</span> c867ca22741d<span class="token operator">&gt;</span>/volume4/Backup/qiandao.tar

<span class="token comment">#\u5C06\u5BB9\u566896f7f14e99ab\u7684/var/lib/mysql\u76EE\u5F55\u62F7\u8D1D\u5230\u4E3B\u673A\u7684/volume4/Backup\u76EE\u5F55\u4E2D(\u9700\u505C\u6B62\u5BB9\u5668)</span>
<span class="token function">sudo</span> <span class="token function">docker</span> stop 1d6c6b36fa6c

<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">cp</span> 1d6c6b36fa6c:/var/lib/mysql /volume4/Backup

<span class="token comment"># \u8FDB\u5165\u5BB9\u5668</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it 66f5cd1e373c /bin/bash
<span class="token builtin class-name">exit</span>

<span class="token function">sudo</span> <span class="token function">docker</span> attach 66f5cd1e373c

<span class="token comment">#\u5C06\u4E3B\u673A/volume4/Backup/mysql\u76EE\u5F55\u62F7\u8D1D\u5230\u6307\u5B9A\u5BB9\u5668\u4E2D</span>
<span class="token comment">#\u590D\u5236\u540E\uFF0Chuginn \u65E0\u6CD5\u6B63\u5E38\u542F\u52A8</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">cp</span> /volume4/Backup/mysql 66f5cd1e373c:/var/lib/

<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">diff</span> 66f5cd1e373c:/var/lib/mysql/

<span class="token comment">#huginn\u5BFC\u51FA\u6570\u636E\u5E93</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run -it -p <span class="token number">49178</span>:3000 -v /home/huginn/mysql-data:/var/lib/mysql huginn/huginn
<span class="token function">sudo</span> <span class="token function">docker</span> run -it -p <span class="token number">3000</span>:3000 -v 66f5cd1e373c:/var/lib/mysql huginn/huginn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[o];function l(t,p){return s(),a("div",null,i)}var r=n(c,[["render",l],["__file","Docker.html.vue"]]);export{r as default};
