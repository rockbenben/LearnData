"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[7476],{9720:(e,n)=>{n.c=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}},2336:(e,n,s)=>{s.r(n),s.d(n,{comp:()=>b,data:()=>k});var a=s(3968);const t={href:"http://ttrss.henry.wang/zh/",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/levito/tt-rss-feedly-theme",target:"_blank",rel:"noopener noreferrer"},o={href:"https://tt-rss.org/wiki/FAQ",target:"_blank",rel:"noopener noreferrer"},l=(0,a.QD)("li",null,"定期备份：选择「偏好设置」>「订阅源」导出订阅源和 tt-rss 设置。",-1),i={href:"https://gitlab.tt-rss.org/tt-rss/tt-rss-android/-/releases",target:"_blank",rel:"noopener noreferrer"},p=(0,a.QD)("h2",{id:"手动部署",tabindex:"-1"},[(0,a.QD)("a",{class:"header-anchor",href:"#手动部署"},[(0,a.QD)("span",null,"手动部署")])],-1),c=(0,a.QD)("p",null,"虽然 Tiny Tiny RSS 官方建议使用 Docker 部署，但手动部署也很简单，选择适合自己的方式即可。",-1),d=(0,a.QD)("ol",null,[(0,a.QD)("li",null,[(0,a.mY)("进入指定目录 "),(0,a.QD)("code",null,"cd /www/wwwroot/"),(0,a.mY)("。")]),(0,a.QD)("li",null,[(0,a.mY)("新建 rss 目录，并下载最新 tt-rss "),(0,a.QD)("code",null,"git clone https://git.tt-rss.org/fox/tt-rss.git rss"),(0,a.mY)("。")]),(0,a.QD)("li",null,"打开 rss 链接，页面会出现指定要求，如：提升文件权限，删除禁用函数 passthru，安装 php 扩展-fileinfo。配置好后，重新加载 php 配置。")],-1),m={href:"https://tt-rss.org/wiki/UpdatingFeeds",target:"_blank",rel:"noopener noreferrer"},u=(0,a.QD)("code",null,"lock/update_daemon.lock",-1),S=(0,a.QD)("code",null,"update_daemon.stamp",-1),h={href:"https://www.cnblogs.com/imyalost/p/9801426.html",target:"_blank",rel:"noopener noreferrer"},w=(0,a.IL)('<ul><li>指定 PHP 版本来运行：<code>/www/server/php/74/bin/php /www/wwwroot/rss/update.php --daemon</code>。</li><li>不指定版本运行：<code>php /www/wwwroot/rss/update.php --daemon</code>。</li></ul><p>服务器使用定时任务更新 TTRSS：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-e</span> <span class="token comment">#进入 Cpanel 面板添加定时任务</span>\n*/15 * * * * /usr/bin/php /www/wwwroot/rss/update.php <span class="token parameter variable">--feeds</span> <span class="token parameter variable">--quiet</span> <span class="token comment">#只安装了一个php</span>\n*/15 * * * * /www/server/php/74/bin/php /www/wwwroot/rss/update.php <span class="token parameter variable">--feeds</span> <span class="token parameter variable">--quiet</span> <span class="token comment">#安装了多个php</span>\n<span class="token comment"># 同时按下ctrl+c退出编辑模式，按下shift+: 输入wq 退出 crontab</span>\n*/15 * * * *表示每隔15分钟更新一次，你可以自己改成其它的。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器或 nginx 重启后，TTRss 会出现文件夹权限丢失，需重新设置权限。建议将此步骤设为定期任务自动执行。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /www/wwwroot/rss/cache/images\n<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /www/wwwroot/rss/cache/upload\n<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /www/wwwroot/rss/cache/export\n<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /www/wwwroot/rss/feed-icons\n<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /www/wwwroot/rss/lock\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>升级 Tiny Tiny RSS：进行 TTRSS 目录后执行升级命令 <code>git pull origin master</code>。无法升级时重命名 TTRSS 路径，全新下载后没问题再删除。数据库没变化就没事，主题重新安装。</p><h2 id="重置密码" tabindex="-1"><a class="header-anchor" href="#重置密码"><span>重置密码</span></a></h2><p>如果在 Docker 容器中忘记了 ttrss 的登录密码，可使用 SSH 终端并输入以下命令，将 admin 账户的密码重置为 <code>password</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> ttrss_postgres psql <span class="token parameter variable">-U</span> postgres <span class="token parameter variable">-d</span> ttrss <span class="token parameter variable">-c</span> <span class="token string">&quot;UPDATE ttrss_users SET pwd_hash = &#39;SHA1:5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8&#39;, salt = &#39;&#39;, otp_enabled = false WHERE login = &#39;admin&#39;;&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请确保替换 <code>ttrss_postgres</code> 为 ttrss 数据库容器的实际名称，而 <code>admin</code> 则为欲重置密码的账户名称。</p>',10),T={},b=(0,s(9720).c)(T,[["render",function(e,n){const s=(0,a.E1)("ExternalLinkIcon"),T=(0,a.E1)("RouteLink");return(0,a.Wz)(),(0,a.An)("div",null,[(0,a.QD)("p",null,[(0,a.mY)("Tiny Tiny RSS 推荐用 "),(0,a.QD)("a",t,[(0,a.mY)("Awesome TTRSS"),(0,a.K2)(s)]),(0,a.mY)(" 的 Docker 镜像，搭建步骤参考 "),(0,a.K2)(T,{to:"/services/NAS.html#nas-docker"},{default:(0,a.Ql)((()=>[(0,a.mY)("NAS 上搭建 Docker")])),_:1}),(0,a.mY)("。Awesome TTRSS 镜像不含插件「no_title_counters」，这使 TTRSS 网页标题会显示未读 RSS 数量。")]),(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.mY)("主题："),(0,a.QD)("a",r,[(0,a.mY)("feedly-sepia.css"),(0,a.K2)(s)])]),(0,a.QD)("li",null,[(0,a.mY)("常见问题："),(0,a.QD)("a",o,[(0,a.mY)("Tiny Tiny RSS – FAQ"),(0,a.K2)(s)])]),l,(0,a.QD)("li",null,[(0,a.mY)("移动端："),(0,a.QD)("a",i,[(0,a.mY)("Tiny Tiny RSS for Android"),(0,a.K2)(s)]),(0,a.mY)("。由于 Google Play 的验证折腾，作者已经放弃在 Play 上更新本应用，改为通过 CI/CD 自动构建并取消了应用收费。")])]),p,c,d,(0,a.QD)("p",null,[(0,a.mY)("部署完成后，需要让 TTRSS 定期更新 RSS，步骤参考 "),(0,a.QD)("a",m,[(0,a.mY)("Tiny Tiny RSS – Updating Feeds"),(0,a.K2)(s)]),(0,a.mY)("。如果遇到提示 daemon 未启动，可删除 "),u,(0,a.mY)("和"),S,(0,a.mY)("。")]),(0,a.QD)("p",null,[(0,a.mY)("阿里云"),(0,a.QD)("a",h,[(0,a.mY)("用非 root 账户登录远程 vnc"),(0,a.K2)(s)]),(0,a.mY)("，然后启动 RSS 更新 (默认 2 分钟)。远程 vnc 黑屏时，点左上角「发送远程命令」，点击菜单栏或「关机后重新启动」后不再黑屏。不用直接重启，否则报错。")]),w])}]]),k=JSON.parse('{"path":"/services/TTRSS.html","title":"Tiny Tiny RSS","lang":"zh-CN","frontmatter":{"article":false,"title":"Tiny Tiny RSS","icon":"rss","order":4,"description":"Tiny Tiny RSS 推荐用 Awesome TTRSS 的 Docker 镜像，搭建步骤参考 。Awesome TTRSS 镜像不含插件「no_title_counters」，这使 TTRSS 网页标题会显示未读 RSS 数量。 主题：feedly-sepia.css 常见问题：Tiny Tiny RSS – FAQ 定期备份：选择「偏好设置」...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/TTRSS.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Tiny Tiny RSS"}],["meta",{"property":"og:description","content":"Tiny Tiny RSS 推荐用 Awesome TTRSS 的 Docker 镜像，搭建步骤参考 。Awesome TTRSS 镜像不含插件「no_title_counters」，这使 TTRSS 网页标题会显示未读 RSS 数量。 主题：feedly-sepia.css 常见问题：Tiny Tiny RSS – FAQ 定期备份：选择「偏好设置」..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-29T01:58:17.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2023-11-29T01:58:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Tiny Tiny RSS\\",\\"description\\":\\"Tiny Tiny RSS 推荐用 Awesome TTRSS 的 Docker 镜像，搭建步骤参考 。Awesome TTRSS 镜像不含插件「no_title_counters」，这使 TTRSS 网页标题会显示未读 RSS 数量。 主题：feedly-sepia.css 常见问题：Tiny Tiny RSS – FAQ 定期备份：选择「偏好设置」...\\"}"]]},"headers":[{"level":2,"title":"手动部署","slug":"手动部署","link":"#手动部署","children":[]},{"level":2,"title":"重置密码","slug":"重置密码","link":"#重置密码","children":[]}],"git":{"createdTime":1658511538000,"updatedTime":1701223097000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":9}]},"readingTime":{"minutes":2.4,"words":721},"filePathRelative":"services/TTRSS.md","localizedDate":"2022年7月22日","excerpt":"<p>Tiny Tiny RSS 推荐用 <a href=\\"http://ttrss.henry.wang/zh/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Awesome TTRSS</a> 的 Docker 镜像，搭建步骤参考 <a href=\\"/services/NAS.html#nas-docker\\" target=\\"_blank\\">NAS 上搭建 Docker</a>。Awesome TTRSS 镜像不含插件「no_title_counters」，这使 TTRSS 网页标题会显示未读 RSS 数量。</p>\\n<ul>\\n<li>主题：<a href=\\"https://github.com/levito/tt-rss-feedly-theme\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">feedly-sepia.css</a></li>\\n<li>常见问题：<a href=\\"https://tt-rss.org/wiki/FAQ\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Tiny Tiny RSS – FAQ</a></li>\\n<li>定期备份：选择「偏好设置」&gt;「订阅源」导出订阅源和 tt-rss 设置。</li>\\n<li>移动端：<a href=\\"https://gitlab.tt-rss.org/tt-rss/tt-rss-android/-/releases\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Tiny Tiny RSS for Android</a>。由于 Google Play 的验证折腾，作者已经放弃在 Play 上更新本应用，改为通过 CI/CD 自动构建并取消了应用收费。</li>\\n</ul>","autoDesc":true}')}}]);