"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[339],{8384:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s=JSON.parse('{"key":"v-0195f17e","path":"/code/Markdown.html","title":"Markdown","lang":"zh-CN","frontmatter":{"article":false,"title":"Markdown","icon":null,"order":5,"summary":"Markdown 基本撰写和格式语法; Markdown 转 HTML 语法介绍; 图片尺寸 使用 html 或 md 格式调整图片尺寸。但 md 格式在不同编辑器中显示效果不同，不一定会生效。 七牛云图床：使用 七牛云接口 改变图片分辨率、大小、格式，具体参数看 七牛云图片高级处理。 资料引用 文章中加 ^引用内容] 会在底部自动添加引用资料。如果想添加链","head":[["meta",{"property":"og:url","content":"https://newzone.top/code/Markdown.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"Markdown"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T04:02:22.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-27T04:02:22.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"图片尺寸","slug":"图片尺寸","children":[]},{"level":2,"title":"资料引用","slug":"资料引用","children":[]},{"level":2,"title":"代码块自动换行","slug":"代码块自动换行","children":[]},{"level":2,"title":"整段删除线","slug":"整段删除线","children":[]}],"git":{"createdTime":1658894542000,"updatedTime":1658894542000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":1.5,"words":451},"filePathRelative":"code/Markdown.md","localizedDate":"2022年7月27日"}')},9082:(n,e,a)=>{a.r(e),a.d(e,{default:()=>b});var s=a(8e3);const t={href:"https://docs.github.com/cn/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#styling-text",target:"_blank",rel:"noopener noreferrer"},l=(0,s.Uk)("Markdown 基本撰写和格式语法"),i={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},o=(0,s.Uk)("Markdown 转 HTML 语法介绍"),r=(0,s.uE)('<h2 id="图片尺寸" tabindex="-1"><a class="header-anchor" href="#图片尺寸" aria-hidden="true">#</a> 图片尺寸</h2><p>使用 html 或 md 格式调整图片尺寸。但 md 格式在不同编辑器中显示效果不同，不一定会生效。</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>\n<span class="token comment">&lt;!-- 按页面宽度的 60% 来缩小 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">_src_</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">_width_</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60%<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- md 图片设置 --&gt;</span>\n![同时设置宽度和高度](https://files.mdnice.com/logo.png =150x150)\n![只设置宽度，推荐使用百分比](https://files.mdnice.com/logo.png =40%x)\n\n<span class="token comment">&lt;!-- docsify 方法 --&gt;</span>\n<span class="token url"><span class="token operator">!</span>[<span class="token content">logo</span>](<span class="token url">https://docsify.js.org/_media/icon.svg</span> <span class="token string">&quot;:size=10%&quot;</span>)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),d=(0,s.Uk)("七牛云图床：使用 "),c={href:"https://developer.qiniu.com/dora/kb/1627/flow-optimization-compression-of-images",target:"_blank",rel:"noopener noreferrer"},p=(0,s.Uk)("七牛云接口"),u=(0,s.Uk)(" 改变图片分辨率、大小、格式，具体参数看 "),m={href:"https://developer.qiniu.com/dora/8255/the-zoom",target:"_blank",rel:"noopener noreferrer"},g=(0,s.Uk)("七牛云图片高级处理"),h=(0,s.Uk)("。"),v=(0,s.uE)('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- 按图片尺寸的 60% 等比缩小 --&gt;</span>\n?imageMogr2/thumbnail/!60p\n\n<span class="token comment">&lt;!-- 指定宽度，调整质量，改变格式 --&gt;</span>\n?imageMogr2/thumbnail/500x/strip/quality/50/format/webp\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料引用" tabindex="-1"><a class="header-anchor" href="#资料引用" aria-hidden="true">#</a> 资料引用</h2><p>文章中加 <code>^[引用内容]</code> 会在底部自动添加引用资料。如果想添加链接标题，则为 <code>^[[标题](链接)]</code>。</p><p>如果同一引用要在多个地方使用，则需要手动编号。</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>这是一条引用 [^1]\n这是一条引用 [^2]\n这是一条引用 [^1]\n这是一条引用 [^3]\n[^1]:链接\n[^2]:<span class="token url">[<span class="token content">标题</span>](<span class="token url">链接</span>)</span>\n[^3]:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span><span class="token url"><span class="token operator">!</span>[<span class="token content">图片描述</span>](<span class="token url">图片链接</span>)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码块自动换行" tabindex="-1"><a class="header-anchor" href="#代码块自动换行" aria-hidden="true">#</a> 代码块自动换行</h2><p>自动换行需要 css 支持，暂不能自动启用。</p><h2 id="整段删除线" tabindex="-1"><a class="header-anchor" href="#整段删除线" aria-hidden="true">#</a> 整段删除线</h2><p><code>~~</code> 只支持对本行内容添加删除线。</p><p>如果要对大段内容添加删除线，可以用 HTML 标签 <code>&lt;s&gt;</code> 和 <code>&lt;/s&gt;</code>，被该标签包围的内容会全部添加删除线。VuePress 暂不支持该代码，会将标签识别为不完整而报错。</p>',10),k={},b=(0,a(1935).Z)(k,[["render",function(n,e){const a=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",t,[l,(0,s.Wm)(a)])]),(0,s._)("li",null,[(0,s._)("a",i,[o,(0,s.Wm)(a)])])]),r,(0,s._)("p",null,[d,(0,s._)("a",c,[p,(0,s.Wm)(a)]),u,(0,s._)("a",m,[g,(0,s.Wm)(a)]),h]),v])}]])},1935:(n,e)=>{e.Z=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}}}]);