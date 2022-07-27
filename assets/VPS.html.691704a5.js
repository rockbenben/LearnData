import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as l,a as n,b as a,e as s,d as t,r as c}from"./app.6ff90b22.js";const p={},r=n("h2",{id:"\u73AF\u5883\u90E8\u7F72",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u73AF\u5883\u90E8\u7F72","aria-hidden":"true"},"#"),s(" \u73AF\u5883\u90E8\u7F72")],-1),d=n("p",null,"\u90E8\u7F72\u5E94\u7528\u524D\uFF0C\u5FC5\u987B\u8981\u4E3A\u670D\u52A1\u5668\u914D\u7F6E\u597D\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u4EE5\u4FBF\u8282\u7701\u90E8\u7F72\u65F6\u95F4\u3002",-1),u=n("p",null,"\u4E3B\u6D41\u7684\u524D\u7AEF\u5305\u7BA1\u7406\u5DE5\u5177\u6709 npm\u3001yarn\u3001pnpm\u3001\u4EE5\u53CA\u56FD\u5185\u7684\u955C\u50CF cnpm\u3001tyarn \u7B49\uFF0C\u8FD9\u4E9B\u5305\u7BA1\u7406\u5668\u90FD\u662F\u57FA\u4E8E nodejs\u3002",-1),m=n("h3",{id:"\u5305\u7BA1\u7406\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5305\u7BA1\u7406\u5B89\u88C5","aria-hidden":"true"},"#"),s(" \u5305\u7BA1\u7406\u5B89\u88C5")],-1),h=s("npm\uFF1A"),v={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},_=s("Node.js"),b=s(" \u96C6\u6210\u4E86 npm \u5B89\u88C5\u3002"),k=n("li",null,[s("yarn\uFF1A"),n("code",null,"npm i yarn -g"),s("\uFF0C\u5168\u5C40\u5B89\u88C5\u3002")],-1),f=n("li",null,[s("pnpm\uFF1A"),n("code",null,"npm install pnpm -g"),s("\uFF0C\u5168\u5C40\u5B89\u88C5\u3002")],-1),g=t(`<h3 id="\u6E90\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7BA1\u7406" aria-hidden="true">#</a> \u6E90\u7BA1\u7406</h3><p>\u6E90\u7BA1\u7406\u7684\u547D\u4EE4\u7C7B\u4F3C\uFF0C\u628A npm \u6362\u4E3A yarn \u6216 pnpm \u5C31\u80FD\u66F4\u6539\u5BF9\u5E94\u5305\u7BA1\u7406\u5DE5\u5177\u7684\u8BBE\u7F6E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770B\u6E90</span>
<span class="token function">npm</span> config get registry
<span class="token comment">#\u66F4\u6362\u56FD\u5185\u6E90</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
<span class="token comment">#\u6362\u56DE\u9ED8\u8BA4\u6E90</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u90E8\u7F72\u5305" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u5305" aria-hidden="true">#</a> \u90E8\u7F72\u5305</h3><p>npm\u3001yarn \u548C pnpm \u7684\u5305\u5B89\u88C5\u53CA\u7BA1\u7406\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5168\u5C40\u5B89\u88C5</span>
<span class="token function">npm</span> i \u5305 -g
<span class="token function">yarn</span> global <span class="token function">add</span> \u5305
<span class="token function">pnpm</span> <span class="token function">add</span> \u5305 -g

<span class="token comment">#\u79FB\u9664\u5168\u5C40\u5305</span>
<span class="token function">pnpm</span> remove \u5305 --global
<span class="token comment">#\u66F4\u65B0\u5168\u5C40\u5305</span>
<span class="token function">pnpm</span> upgrade \u5305 --global

<span class="token comment">#\u5347\u7EA7\u5F53\u524D\u76EE\u5F55\u7684\u4F9D\u8D56\u4EE5\u786E\u4FDD\u4F60\u7684\u9879\u76EE\u53EA\u5305\u542B\u5355\u4E2A\u7248\u672C\u7684\u76F8\u5173\u5305</span>
<span class="token comment">#\u672C\u65B9\u6CD5\u80FD\u89E3\u51B3\u5927\u90E8\u5206\u7684\u90E8\u7F72\u62A5\u9519</span>
<span class="token function">npm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> update
<span class="token function">yarn</span> <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> upgrade
<span class="token function">pnpm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),x={id:"\u7F51\u7AD9\u91CD\u5B9A\u5411",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#\u7F51\u7AD9\u91CD\u5B9A\u5411","aria-hidden":"true"},"#",-1),y=s(),V={href:"https://www.jb51.net/article/146957.htm",target:"_blank",rel:"noopener noreferrer"},j=s("\u7F51\u7AD9\u91CD\u5B9A\u5411"),q=t(`<p>\u66F4\u6539\u914D\u7F6E\u540E\uFF0C\u9700\u8981 nginx \u91CD\u8F7D\u914D\u7F6E\u540E\u751F\u6548</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u9690\u6027\u94FE\u63A5\u8DF3\u8F6C</span>
location /xx1 <span class="token punctuation">{</span>proxy_pass <span class="token operator">&lt;</span>https://xxx.com/<span class="token punctuation">;</span><span class="token operator">&gt;</span><span class="token punctuation">}</span>

<span class="token comment">#404 \u524D\uFF0C\u5C06\u65E7\u6587\u7AE0\u94FE\u63A5\u683C\u5F0F\u8F6C\u4E3A\u65B0\u7684\uFF0C\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84</span>
location ^~ /p<span class="token punctuation">{</span>
    rewrite ^/p/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$  https://newzone.top/_posts/<span class="token variable">$1</span>.html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># huginn \u8BBE\u7F6E\u4E2D location \u6DFB\u52A0 301 \u5B9A\u5411\uFF0C\u517C\u5BB9\u8001\u8DEF\u5F84\u94FE\u63A5</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token variable">$request_uri</span> <span class="token operator">=</span> <span class="token string">&quot;/users/1/web_requests/21/guoke.xml&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
rewrite ^ http://xxx.com/users/1/web_requests/19/guoke.xml permanent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">#\u53EA\u5339\u914D\u4E3B\u9875\uFF0C\u5C06\u4E3B\u9875\u8DF3\u8F6C\u4E3A\u5176\u4E2D\u4E00\u4E2A\u5B50\u9875\u9762</span>
location <span class="token operator">=</span> / <span class="token punctuation">{</span>
 rewrite https://xxx.com/ permanent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F51\u7AD9\u5B57\u4F53" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7AD9\u5B57\u4F53" aria-hidden="true">#</a> \u7F51\u7AD9\u5B57\u4F53</h2><p>\u7F51\u7AD9\u4E3A\u4E86\u63D0\u9AD8\u8BBF\u95EE\u901F\u5EA6\u5E76\u4FDD\u6301\u8BBE\u8BA1\u7684\u4E00\u81F4\u6027\uFF0C\u901A\u5E38\u4F1A\u9009\u9ED8\u8BA4\u5B57\u4F53\u3002\u8FD9\u5BFC\u81F4\u7F51\u7AD9\u8BBE\u8BA1\u96BE\u4EE5\u7A81\u51FA\u91CD\u70B9\u3002\u9488\u5BF9\u8FD9\u70B9\uFF0C\u6211\u901A\u5E38\u4F1A\u4FEE\u6539\u7F51\u7AD9\u7684\u5BFC\u822A\u680F\u5B57\u4F53\uFF0C\u5C06\u5176\u4ECE\u9ED8\u8BA4\u5B57\u4F53\u6539\u4E3A <code>\u601D\u6E90\u9ED1\u4F53-\u7C97</code>\u3002</p>`,4),N=s("\u8FDB\u5165 "),B={href:"https://www.iconfont.cn/webfont",target:"_blank",rel:"noopener noreferrer"},E=s("iconfont\u2011webfont"),S=s("\uFF0C\u8F93\u5165\u5BFC\u822A\u680F\u5185\u6240\u6709\u6587\u5B57\uFF0C\u5E76\u8BBE\u7F6E\u6240\u9700\u5B57\u4F53\u3002"),$=n("li",null,"\u70B9\u51FB\u300C\u751F\u6210\u5B57\u4F53\u300D\u540E\uFF0C\u5728\u9009\u4E2D\u5B57\u4F53\u7684\u4E0B\u65B9\uFF0C\u70B9\u51FB\u300C\u672C\u5730\u4E0B\u8F7D\u300D\u3002",-1),I=n("li",null,"\u5C06\u5B57\u4F53\u5305\u4E0A\u4F20\u5230\u670D\u52A1\u5668\uFF0C\u4FEE\u6539\u65B0\u5B57\u4F53\u7684\u4F4D\u7F6E\u53C2\u6570\u3002",-1),L=n("li",null,[s("\u5728\u5BFC\u822A\u680F\u7684 "),n("code",null,"class"),s(" \u5C5E\u6027\u4E2D\u6DFB\u52A0 "),n("code",null,"web-font"),s("\u3002")],-1),P=n("h2",{id:"\u7C73\u62D3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7C73\u62D3","aria-hidden":"true"},"#"),s(" \u7C73\u62D3")],-1),z=s("\u540E\u53F0\u5FD8\u8BB0\u5BC6\u7801\uFF0C\u4F7F\u7528 "),C={href:"https://www.metinfo.cn/download/54.html",target:"_blank",rel:"noopener noreferrer"},M=s("Metinfo \u7C73\u62D3\u91CD\u7F6E\u5DE5\u5177"),T=s("\u3002"),A=n("li",null,"metinfo \u65B0\u7248\u9759\u6001\u9875\u4F1A\u5220\u9664 index.html\uFF0C\u540E\u7EED\u90FD\u6539\u7528 index.php\u3002",-1);function D(F,G){const e=c("ExternalLinkIcon");return o(),l("div",null,[r,d,u,m,n("ul",null,[n("li",null,[h,n("a",v,[_,a(e)]),b]),k,f]),g,n("h2",x,[w,y,n("a",V,[j,a(e)])]),q,n("ol",null,[n("li",null,[N,n("a",B,[E,a(e)]),S]),$,I,L]),P,n("ul",null,[n("li",null,[z,n("a",C,[M,a(e)]),T]),A])])}var K=i(p,[["render",D],["__file","VPS.html.vue"]]);export{K as default};