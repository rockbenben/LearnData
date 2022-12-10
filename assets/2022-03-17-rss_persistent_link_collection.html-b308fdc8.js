import{ae as s,G as l,H as r,F as e,S as t,N as o,af as p,V as i}from"./framework-6dc769b2.js";const a={},h=e("p",null,"越来越多的网站不再提供 RSS feed，令我们无法便捷获取信息。为了避免这一情况的恶化，我选择自制 RSS，并将其汇总在本文。本文链接均为自用 RSS，链接一直有效，放心使用。",-1),c=e("p",null,"如果有兴趣自己制作 RSS，可查看文章底部教程。",-1),_=e("h2",{id:"每日热点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#每日热点","aria-hidden":"true"},"#"),t(" 每日热点")],-1),d=e("p",null,"整理实时新闻热点，采集来自搜索引擎、微信文章、应急通知的资讯。",-1),u=e("li",null,[e("p",null,[e("strong",null,"百度实时热点"),t("："),e("code",null,"http://newzone.top/rss.php?type=baidu"),t(" 实时收录百度热搜内容，并显示热搜指数和简介。")]),e("figure",null,[e("img",{src:"http://tc.seoipo.com/2022-05-05-17-21-49.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")])],-1),S=e("strong",null,"国内应急新闻",-1),g=e("code",null,"http://newzone.top/rss.php?type=cneb",-1),f={href:"http://www.cneb.gov.cn/guoneinews/",target:"_blank",rel:"noopener noreferrer"},b=e("figure",null,[e("img",{src:"http://tc.seoipo.com/2022-05-05-17-22-08.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),R=e("li",null,[e("p",null,[e("strong",null,"瓦斯阅读"),t("："),e("code",null,"http://newzone.top/rss.php?type=wasi"),t(" 通过瓦斯阅读，获取当天最热门的微信文章。微信图片不支持第三方显示，因此 RSS 阅读器内只显示文字内容，点击文章链接后，可阅读完整公众号文章。")]),e("figure",null,[e("img",{src:"http://tc.seoipo.com/2022-05-05-17-22-32.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")])],-1),m=p('<h2 id="互联网资讯" tabindex="-1"><a class="header-anchor" href="#互联网资讯" aria-hidden="true">#</a> 互联网资讯</h2><p>整合互联网资讯媒体，偏重于前端科技、电子硬件、手机应用。</p><ul><li><p><strong>36kr</strong>：<code>http://newzone.top/rss.php?type=36kr</code></p></li><li><p><strong>虎嗅网</strong>：<code>http://newzone.top/rss.php?type=huxiu</code></p></li><li><p><strong>艾瑞网</strong>：<code>http://newzone.top/rss.php?type=iresearch</code></p></li><li><p><strong>爱范儿|AppSolution</strong>：<code>http://newzone.top/rss.php?type=AppSolution</code></p></li><li><p><strong>效率火箭</strong>：<code>http://newzone.top/rss.php?type=xlrocket</code></p></li></ul><h2 id="奇思妙想" tabindex="-1"><a class="header-anchor" href="#奇思妙想" aria-hidden="true">#</a> 奇思妙想</h2><p>每天吸收些稀奇古怪的知识，期待引发后续的灵机一动。</p><ul><li><p><strong>果壳网</strong>：<code>http://newzone.top/rss.php?type=guokr</code></p></li><li><p><strong>知乎想法热榜</strong>：<code>http://newzone.top/rss.php?type=zhihu</code></p></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>最近有人疯狂获取 RSS 链接近乎于 DDoS 攻击（频繁获取内容也不会更新，不清楚为什么这么干……），已在后台屏蔽此类 IP，建议将 RSS 更新间隔设为 1 小时。如有错误识别，可以联系我解封。</p></div><h2 id="教程-自制-rss" tabindex="-1"><a class="header-anchor" href="#教程-自制-rss" aria-hidden="true">#</a> 教程：自制 RSS</h2><p>以上 RSS 链接均通过 RSSHub 和 Huginn 制作，下方为 RSS 制作教程。</p>',9),w={href:"https://newzone.top/_posts/2017-04-22-rss_feed43_feedex.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://newzone.top/_posts/2018-10-07-huginn_scraping_any_website.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://newzone.top/_posts/2019-04-01-rsshub_noob.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://newzone.top/_posts/2020-03-25-rsshub_on_vps.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://newzone.top/_posts/2021-10-23-nas_with_rsshub_and_huginn.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://newzone.top/_posts/2022-03-17-rss_persistent_link_collection.html",target:"_blank",rel:"noopener noreferrer"};function v(E,N){const n=i("ExternalLinkIcon");return l(),r("div",null,[h,c,_,d,e("ul",null,[u,e("li",null,[e("p",null,[S,t("："),g,t(" 采集自"),e("a",f,[t("国家应急广播"),o(n)]),t("，配合 rss 阅读器过滤，及时获取当地应急通知。")]),b]),R]),m,e("ul",null,[e("li",null,[e("p",null,[e("a",w,[t("RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源"),o(n)])])]),e("li",null,[e("p",null,[e("a",z,[t("RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）"),o(n)])])]),e("li",null,[e("p",null,[e("a",k,[t("RSS 速成篇：RSSHub 捡现成的轮子"),o(n)])])]),e("li",null,[e("p",null,[e("a",x,[t("RSS 速成篇 2：RSSHub 自部署"),o(n)])])]),e("li",null,[e("p",null,[e("a",y,[t("RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS"),o(n)])])]),e("li",null,[e("p",null,[e("a",H,[t("RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效"),o(n)])])])])])}const A=s(a,[["render",v],["__file","2022-03-17-rss_persistent_link_collection.html.vue"]]);export{A as default};
