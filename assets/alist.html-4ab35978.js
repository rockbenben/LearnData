const e=JSON.parse(`{"key":"v-ab2761f6","path":"/services/dockers-on-nas/alist.html","title":"Alist - 聚合网盘","lang":"zh-CN","frontmatter":{"article":false,"title":"Alist - 聚合网盘","order":12,"description":"Alist 是支持多种存储的文件列表程序，支持本地存储、阿里云盘、OneDrive、Google Drive 等。 原本我的文件保存在蓝奏云上，但免费用户有 100M 的限制，因此我将一些要分享的大文件放在 Alist，作为私人轻量网盘分享应用和文件。 version: '3.3' services: alist: image: xhofe/alist:latest container_name: alist volumes: - /volume1/docker/alist/data:/opt/alist/data ports: - 9044:5244 environment: - PUID=1026 - PGID=100 - UMASK=022 - TZ=Asia/Shanghai restart: always","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/alist.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Alist - 聚合网盘"}],["meta",{"property":"og:description","content":"Alist 是支持多种存储的文件列表程序，支持本地存储、阿里云盘、OneDrive、Google Drive 等。 原本我的文件保存在蓝奏云上，但免费用户有 100M 的限制，因此我将一些要分享的大文件放在 Alist，作为私人轻量网盘分享应用和文件。 version: '3.3' services: alist: image: xhofe/alist:latest container_name: alist volumes: - /volume1/docker/alist/data:/opt/alist/data ports: - 9044:5244 environment: - PUID=1026 - PGID=100 - UMASK=022 - TZ=Asia/Shanghai restart: always"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-29T03:13:46.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2023-11-29T03:13:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Alist - 聚合网盘\\",\\"description\\":\\"Alist 是支持多种存储的文件列表程序，支持本地存储、阿里云盘、OneDrive、Google Drive 等。 原本我的文件保存在蓝奏云上，但免费用户有 100M 的限制，因此我将一些要分享的大文件放在 Alist，作为私人轻量网盘分享应用和文件。 version: '3.3' services: alist: image: xhofe/alist:latest container_name: alist volumes: - /volume1/docker/alist/data:/opt/alist/data ports: - 9044:5244 environment: - PUID=1026 - PGID=100 - UMASK=022 - TZ=Asia/Shanghai restart: always\\"}"]]},"headers":[{"level":2,"title":"重置密码","slug":"重置密码","link":"#重置密码","children":[]},{"level":2,"title":"添加存储","slug":"添加存储","link":"#添加存储","children":[]},{"level":2,"title":"元信息","slug":"元信息","link":"#元信息","children":[]}],"git":{"createdTime":1701223097000,"updatedTime":1701227626000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":2}]},"readingTime":{"minutes":1.76,"words":528},"filePathRelative":"services/dockers-on-nas/alist.md","localizedDate":"2023年11月29日","excerpt":"<p><a href=\\"https://alist.nn.ci/zh/guide/install/docker.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Alist</a> 是支持多种存储的文件列表程序，支持本地存储、阿里云盘、OneDrive、Google Drive 等。</p>\\n<p>原本我的文件保存在蓝奏云上，但免费用户有 100M 的限制，因此我将一些要分享的大文件放在 Alist，作为私人轻量网盘分享应用和文件。</p>\\n<div class=\\"language-yaml line-numbers-mode\\" data-ext=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token key atrule\\">version</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'3.3'</span>\\n<span class=\\"token key atrule\\">services</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">alist</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">image</span><span class=\\"token punctuation\\">:</span> xhofe/alist<span class=\\"token punctuation\\">:</span>latest\\n    <span class=\\"token key atrule\\">container_name</span><span class=\\"token punctuation\\">:</span> alist\\n    <span class=\\"token key atrule\\">volumes</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> /volume1/docker/alist/data<span class=\\"token punctuation\\">:</span>/opt/alist/data\\n    <span class=\\"token key atrule\\">ports</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> 9044<span class=\\"token punctuation\\">:</span><span class=\\"token number\\">5244</span>\\n    <span class=\\"token key atrule\\">environment</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> PUID=1026\\n      <span class=\\"token punctuation\\">-</span> PGID=100\\n      <span class=\\"token punctuation\\">-</span> UMASK=022\\n      <span class=\\"token punctuation\\">-</span> TZ=Asia/Shanghai\\n    <span class=\\"token key atrule\\">restart</span><span class=\\"token punctuation\\">:</span> always\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
