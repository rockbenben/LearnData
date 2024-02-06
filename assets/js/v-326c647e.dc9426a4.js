"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5648],{9720:(n,a)=>{a.c=(n,a)=>{const e=n.__vccOpts||n;for(const[n,s]of a)e[n]=s;return e}},1496:(n,a,e)=>{e.r(a),e.d(a,{comp:()=>r,data:()=>u});var s=e(3968);const t={href:"https://github.com/hslr-s/sun-panel",target:"_blank",rel:"noopener noreferrer"},l={href:"https://hslr-s.github.io/sun-panel-tool-page/#/",target:"_blank",rel:"noopener noreferrer"},p=(0,s.IL)('<h2 id="部署代码" tabindex="-1"><a class="header-anchor" href="#部署代码"><span>部署代码</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.2&quot;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">sun-panel</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;hslr/sun-panel:latest&quot;</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> sun<span class="token punctuation">-</span>panel\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/sun<span class="token punctuation">-</span>panel/conf<span class="token punctuation">:</span>/app/conf\n      <span class="token punctuation">-</span> /volume1/docker/sun<span class="token punctuation">-</span>panel/uploads<span class="token punctuation">:</span>/app/uploads\n      <span class="token punctuation">-</span> /volume1/docker/sun<span class="token punctuation">-</span>panel/database<span class="token punctuation">:</span>/app/database\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 7580<span class="token punctuation">:</span><span class="token number">3002</span>\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),o={},r=(0,e(9720).c)(o,[["render",function(n,a){const e=(0,s.E1)("ExternalLinkIcon");return(0,s.Wz)(),(0,s.An)("div",null,[(0,s.QD)("p",null,[(0,s.QD)("a",t,[(0,s.mY)("Sun-Panel"),(0,s.K2)(e)]),(0,s.mY)(" 与 Homarr 相比，样式与功能都要简单许多。")]),(0,s.QD)("p",null,[(0,s.mY)("不过 Sun-Panel 有 "),(0,s.QD)("a",l,[(0,s.mY)("浏览器书签转换工具"),(0,s.K2)(e)]),(0,s.mY)("，可以将书签批量导入 Sun Panel。")]),p])}]]),u=JSON.parse('{"path":"/services/dockers-on-nas/sun-panel.html","title":"Sun-Panel：简化导航页","lang":"zh-CN","frontmatter":{"article":false,"title":"Sun-Panel：简化导航页","order":92,"description":"Sun-Panel 与 Homarr 相比，样式与功能都要简单许多。 不过 Sun-Panel 有 浏览器书签转换工具，可以将书签批量导入 Sun Panel。 部署代码 ","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/sun-panel.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Sun-Panel：简化导航页"}],["meta",{"property":"og:description","content":"Sun-Panel 与 Homarr 相比，样式与功能都要简单许多。 不过 Sun-Panel 有 浏览器书签转换工具，可以将书签批量导入 Sun Panel。 部署代码 "}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-15T19:15:29.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-01-15T19:15:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Sun-Panel：简化导航页\\",\\"description\\":\\"Sun-Panel 与 Homarr 相比，样式与功能都要简单许多。 不过 Sun-Panel 有 浏览器书签转换工具，可以将书签批量导入 Sun Panel。 部署代码 \\"}"]]},"headers":[{"level":2,"title":"部署代码","slug":"部署代码","link":"#部署代码","children":[]}],"git":{"createdTime":1705346129000,"updatedTime":1705346129000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":0.32,"words":97},"filePathRelative":"services/dockers-on-nas/sun-panel.md","localizedDate":"2024年1月15日","excerpt":"<p><a href=\\"https://github.com/hslr-s/sun-panel\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Sun-Panel</a> 与 Homarr 相比，样式与功能都要简单许多。</p>\\n<p>不过 Sun-Panel 有 <a href=\\"https://hslr-s.github.io/sun-panel-tool-page/#/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">浏览器书签转换工具</a>，可以将书签批量导入 Sun Panel。</p>\\n<h2>部署代码</h2>","autoDesc":true}')}}]);