"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[4102],{81122:(n,a,e)=>{e.r(a),e.d(a,{default:()=>h});var t=e(64304);const s=(0,t._)("h2",{id:"双链笔记",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#双链笔记"},[(0,t._)("span",null,"双链笔记")])],-1),i=(0,t._)("p",null,"@KurokoZ 个人认为双链笔记的核心不是一个单纯跳转的链接，而是在于“引用”和思路的延续性。举几个场景： 一、待办清单和随笔记 待办清单是一个时序化的任务 list，一个任务可能来自一次会议记录、老板临时的发言、一个产品调研 等等，每一个任务背后的原始文档可以很复杂，但任务本身可以记录的很简洁，特别是多线程的任务处理，这样的溯源非常有用，最近同时跟 4 个项目，深有体会；Obsidian 的 MD 语法支持很美观的待办清单，很舒服。 二、书籍之间的联系 很多书中，作者会推荐其他的书，那么就可以在记录读书笔记的时候，直接创建对这些推荐书的引用（得益于 obsidian 的基于引用自动创建文件，而不是只能引用现有文档），又或者一个作者有很多著作、有博客、有公众号，那么就可以给这个作者建一个单独的文档作为主页，其他著作的笔记、博客的摘录都是单独的文档，形成完整体系。 三、跨软件，非 URL 的场景 我的大量 PDF 文档管理在 DEVONThink，obsidian 的链接语法支持直接引用到 DEVONThink 中的文档，需要是可直接通过 OB 激活 DT 快速打开目标文档",-1),o={href:"https://sspai.com/post/67619",target:"_blank",rel:"noopener noreferrer"},l={href:"https://sspai.com/post/72385",target:"_blank",rel:"noopener noreferrer"},r=(0,t.uE)('<p>暂时放弃 Obisidian，虽然能按条件罗列页面，但没有 Logseq 方便。<strong>如果后续要继续用，则尝试将日记分为 3 份，然后用 Dataview 整合在一起，在上面进行修改</strong>。</p><p>Obsidian 更习惯记录，日常 Task 由滴答管理，中期且不急的任务则由 Trello 管理。自带的看板功能需要建立笔记，不如 Trello 方便。</p><p>Day Planer 有 sm18 的 Plan 功能。</p><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件"><span>插件</span></a></h2><p>部分插件不能自动更新，需要手动下载插件文件，然后粘贴到 <code>.obsidian/plugins</code> 对应文件夹内。</p><h3 id="dataview" tabindex="-1"><a class="header-anchor" href="#dataview"><span>Dataview</span></a></h3>',6),p={href:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/",target:"_blank",rel:"noopener noreferrer"},d=(0,t.uE)('<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># journals 文本下所有</span>\ndv.list<span class="token punctuation">(</span>dv.pages<span class="token punctuation">(</span><span class="token string">&#39;&quot;journals&quot;&#39;</span><span class="token punctuation">)</span>.file.lists.text<span class="token punctuation">)</span>\n\n\n<span class="token comment"># 指定区域不为空</span>\n.where<span class="token punctuation">(</span>t <span class="token operator">=</span><span class="token operator">&gt;</span> t<span class="token operator">!=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>\n\n<span class="token comment"># 包含指定文字</span>\n.where<span class="token punctuation">(</span>t <span class="token operator">=</span><span class="token operator">&gt;</span> t.includes<span class="token punctuation">(</span><span class="token string">&quot;Logseq&quot;</span><span class="token punctuation">))</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="obsidian-query-language" tabindex="-1"><a class="header-anchor" href="#obsidian-query-language"><span>Obsidian Query Language</span></a></h3>',2),u={href:"https://github.com/jplattel/obsidian-query-language",target:"_blank",rel:"noopener noreferrer"},c=(0,t.uE)('<p>但整合出的是链接，并非如 Logseq 一样显示文件内容。想想有没办法，显示文件内容。</p><p>下列代码会抓取，journals 文件夹中包含「今日工作」或「xxxxxxx」的文件。</p><div class="language-oql line-numbers-mode" data-ext="oql" data-title="oql"><pre class="language-oql"><code>name: &#39;OR combination list of results&#39;\nquery: { $and: [{ &quot;path&quot;: &quot;&#39;journals/&quot;}, { $or: [{ &quot;content&quot;: &quot;&#39;今日工作&quot; }, { &quot;content&quot;: &quot;&#39;xxxxxxx&quot; }] }]}\ntemplate: &quot;list&quot;\nbadge: true\ndebug: true\nsort: &quot;title&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="easy-typing" tabindex="-1"><a class="header-anchor" href="#easy-typing"><span>Easy Typing</span></a></h3><p>Easy Typing 是一个 Obsidian 的书写体验增强插件，自动格式化书写，比如自动在中英文之间添加空格，英文首字母大写，标点与文本间智能空格。</p><p>不过双拼容易出错，需要开启「行模式」。</p>',6),b={},h=(0,e(86683).Z)(b,[["render",function(n,a){const e=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[s,i,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",o,[(0,t.Uk)("Obsidian 新手系列之你不可不知的插件"),(0,t.Wm)(e)])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",l,[(0,t.Uk)("每日笔记、日程管理、工作复盘——这是我钻研出的 Obsidian 八般武艺"),(0,t.Wm)(e)])])])]),r,(0,t._)("p",null,[(0,t._)("a",p,[(0,t.Uk)("Dataview"),(0,t.Wm)(e)]),(0,t.Uk)(" 功能更强大，不过用法也复杂许多。")]),d,(0,t._)("p",null,[(0,t._)("a",u,[(0,t.Uk)("Obsidian Query Language"),(0,t.Wm)(e)]),(0,t.Uk)(" 能使用 Query 语言，将符合条件的文件整合到一页。")]),c])}]])},86683:(n,a)=>{a.Z=(n,a)=>{const e=n.__vccOpts||n;for(const[n,t]of a)e[n]=t;return e}},33715:(n,a,e)=>{e.r(a),e.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-11fae300","path":"/apps/tutorials/obsidian.html","title":"Obsidian","lang":"zh-CN","frontmatter":{"article":false,"title":"Obsidian","order":2,"description":"双链笔记 @KurokoZ 个人认为双链笔记的核心不是一个单纯跳转的链接，而是在于“引用”和思路的延续性。举几个场景： 一、待办清单和随笔记 待办清单是一个时序化的任务 list，一个任务可能来自一次会议记录、老板临时的发言、一个产品调研 等等，每一个任务背后的原始文档可以很复杂，但任务本身可以记录的很简洁，特别是多线程的任务处理，这样的溯源非常有用，最近同时跟 4 个项目，深有体会；Obsidian 的 MD 语法支持很美观的待办清单，很舒服。 二、书籍之间的联系 很多书中，作者会推荐其他的书，那么就可以在记录读书笔记的时候，直接创建对这些推荐书的引用（得益于 obsidian 的基于引用自动创建文件，而不是只能引用现有文档），又或者一个作者有很多著作、有博客、有公众号，那么就可以给这个作者建一个单独的文档作为主页，其他著作的笔记、博客的摘录都是单独的文档，形成完整体系。 三、跨软件，非 URL 的场景 我的大量 PDF 文档管理在 DEVONThink，obsidian 的链接语法支持直接引用到 DEVONThink 中的文档，需要是可直接通过 OB 激活 DT 快速打开目标文档","head":[["meta",{"property":"og:url","content":"https://newzone.top/apps/tutorials/obsidian.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Obsidian"}],["meta",{"property":"og:description","content":"双链笔记 @KurokoZ 个人认为双链笔记的核心不是一个单纯跳转的链接，而是在于“引用”和思路的延续性。举几个场景： 一、待办清单和随笔记 待办清单是一个时序化的任务 list，一个任务可能来自一次会议记录、老板临时的发言、一个产品调研 等等，每一个任务背后的原始文档可以很复杂，但任务本身可以记录的很简洁，特别是多线程的任务处理，这样的溯源非常有用，最近同时跟 4 个项目，深有体会；Obsidian 的 MD 语法支持很美观的待办清单，很舒服。 二、书籍之间的联系 很多书中，作者会推荐其他的书，那么就可以在记录读书笔记的时候，直接创建对这些推荐书的引用（得益于 obsidian 的基于引用自动创建文件，而不是只能引用现有文档），又或者一个作者有很多著作、有博客、有公众号，那么就可以给这个作者建一个单独的文档作为主页，其他著作的笔记、博客的摘录都是单独的文档，形成完整体系。 三、跨软件，非 URL 的场景 我的大量 PDF 文档管理在 DEVONThink，obsidian 的链接语法支持直接引用到 DEVONThink 中的文档，需要是可直接通过 OB 激活 DT 快速打开目标文档"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-29T01:58:17.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2023-11-29T01:58:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Obsidian\\",\\"description\\":\\"双链笔记 @KurokoZ 个人认为双链笔记的核心不是一个单纯跳转的链接，而是在于“引用”和思路的延续性。举几个场景： 一、待办清单和随笔记 待办清单是一个时序化的任务 list，一个任务可能来自一次会议记录、老板临时的发言、一个产品调研 等等，每一个任务背后的原始文档可以很复杂，但任务本身可以记录的很简洁，特别是多线程的任务处理，这样的溯源非常有用，最近同时跟 4 个项目，深有体会；Obsidian 的 MD 语法支持很美观的待办清单，很舒服。 二、书籍之间的联系 很多书中，作者会推荐其他的书，那么就可以在记录读书笔记的时候，直接创建对这些推荐书的引用（得益于 obsidian 的基于引用自动创建文件，而不是只能引用现有文档），又或者一个作者有很多著作、有博客、有公众号，那么就可以给这个作者建一个单独的文档作为主页，其他著作的笔记、博客的摘录都是单独的文档，形成完整体系。 三、跨软件，非 URL 的场景 我的大量 PDF 文档管理在 DEVONThink，obsidian 的链接语法支持直接引用到 DEVONThink 中的文档，需要是可直接通过 OB 激活 DT 快速打开目标文档\\"}"]]},"headers":[{"level":2,"title":"双链笔记","slug":"双链笔记","link":"#双链笔记","children":[]},{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[{"level":3,"title":"Dataview","slug":"dataview","link":"#dataview","children":[]},{"level":3,"title":"Obsidian Query Language","slug":"obsidian-query-language","link":"#obsidian-query-language","children":[]},{"level":3,"title":"Easy Typing","slug":"easy-typing","link":"#easy-typing","children":[]}]}],"git":{"createdTime":1701223097000,"updatedTime":1701223097000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":2.66,"words":798},"filePathRelative":"apps/tutorials/obsidian.md","localizedDate":"2023年11月29日","excerpt":"<h2>双链笔记</h2>\\n<p>@KurokoZ 个人认为双链笔记的核心不是一个单纯跳转的链接，而是在于“引用”和思路的延续性。举几个场景：\\n一、待办清单和随笔记\\n待办清单是一个时序化的任务 list，一个任务可能来自一次会议记录、老板临时的发言、一个产品调研 等等，每一个任务背后的原始文档可以很复杂，但任务本身可以记录的很简洁，特别是多线程的任务处理，这样的溯源非常有用，最近同时跟 4 个项目，深有体会；Obsidian 的 MD 语法支持很美观的待办清单，很舒服。\\n二、书籍之间的联系\\n很多书中，作者会推荐其他的书，那么就可以在记录读书笔记的时候，直接创建对这些推荐书的引用（得益于 obsidian 的基于引用自动创建文件，而不是只能引用现有文档），又或者一个作者有很多著作、有博客、有公众号，那么就可以给这个作者建一个单独的文档作为主页，其他著作的笔记、博客的摘录都是单独的文档，形成完整体系。\\n三、跨软件，非 URL 的场景\\n我的大量 PDF 文档管理在 DEVONThink，obsidian 的链接语法支持直接引用到 DEVONThink 中的文档，需要是可直接通过 OB 激活 DT 快速打开目标文档</p>","autoDesc":true}')}}]);