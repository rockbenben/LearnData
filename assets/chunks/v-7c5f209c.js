"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8186],{8523:(e,n,s)=>{s.r(n),s.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-7c5f209c","path":"/deploy/Static.html","title":"静态部署","lang":"zh-CN","frontmatter":{"article":false,"title":"静态部署","order":1,"summary":"静态托管 如果国内静态资源库没有你要的静态包，推荐用 npm i 命令将静态包下载到本地，并部署到阿里云/七牛云的国内服务器上，避免网页受 UNPKG 和 jsDelivr 屏蔽影响而出现偏差。 NPM 包 UNPKG：有墙风险且不稳定，默认为最新版本，无需 @latest 标签。; 将静态文件发布为 npm 包，参考 一分钟教你发布 npm 包。; 加速：","head":[["meta",{"property":"og:url","content":"https://newzone.top/deploy/Static.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"静态部署"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T04:16:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-27T04:16:37.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"静态托管","slug":"静态托管","children":[{"level":3,"title":"NPM 包","slug":"npm-包","children":[]},{"level":3,"title":"静态资源库","slug":"静态资源库","children":[]},{"level":3,"title":"静态页面","slug":"静态页面","children":[]},{"level":3,"title":"IPFS","slug":"ipfs","children":[]}]},{"level":2,"title":"GitHub 同步到 VPS","slug":"github-同步到-vps","children":[{"level":3,"title":"同步到 FTP","slug":"同步到-ftp","children":[]},{"level":3,"title":"同步到 oss","slug":"同步到-oss","children":[]}]}],"git":{"createdTime":1658895397000,"updatedTime":1658895397000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":5.21,"words":1564},"filePathRelative":"deploy/Static.md","localizedDate":"2022年7月27日"}')},9243:(e,n,s)=>{s.r(n),s.d(n,{default:()=>_e});var l=s(8e3);const a=(0,l._)("h2",{id:"静态托管",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#静态托管","aria-hidden":"true"},"#"),(0,l.Uk)(" 静态托管")],-1),t=(0,l._)("p",null,[(0,l.Uk)("如果国内静态资源库没有你要的静态包，推荐用 "),(0,l._)("code",null,"npm i"),(0,l.Uk)(" 命令将静态包下载到本地，并部署到阿里云/七牛云的国内服务器上，避免网页受 UNPKG 和 jsDelivr 屏蔽影响而出现偏差。")],-1),i=(0,l._)("h3",{id:"npm-包",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#npm-包","aria-hidden":"true"},"#"),(0,l.Uk)(" NPM 包")],-1),r=(0,l._)("p",null,[(0,l.Uk)("UNPKG："),(0,l._)("strong",null,"有墙风险且不稳定"),(0,l.Uk)("，默认为最新版本，无需 "),(0,l._)("code",null,"@latest"),(0,l.Uk)(" 标签。")],-1),o=(0,l.Uk)("将静态文件发布为 npm 包，参考 "),c={href:"https://segmentfault.com/a/1190000023075167",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("一分钟教你发布 npm 包"),p=(0,l.Uk)("。"),u=(0,l.Uk)("加速：在 "),m={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},v=(0,l.Uk)("npm 官方源"),h=(0,l.Uk)(" 中搜索包位置，然后使用前缀 "),b=(0,l._)("code",null,"https://unpkg.com/",-1),k=(0,l.Uk)("。"),f=(0,l._)("li",null,[(0,l._)("p",null,"自建 unpkg 镜像，反向代理 unpkg")],-1),_={href:"https://npmmirror.com/",target:"_blank",rel:"noopener noreferrer"},g=(0,l.Uk)("NPM MIRROR"),U=(0,l.Uk)("：NPM 项目的国内镜像镜像，不能做静态托管用途。"),y=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("code",null,"https://registry.npmmirror.com/项目名/版本号"),(0,l.Uk)(" 可以看见项目的各种信息，但看不了里面的文件。")])],-1),P=(0,l.uE)("<li><p><s>jsDelivr（已墙）：速度最快，原本是最稳的，但域名暴雷后，经常断开，2022.06.01 彻底打不开。</s></p><p><s>配合 Github action，更新后自动访问 jsdelivr CDN 缓存刷新链接，保持页面常新。刷新命令参考 <code>curl https://purge.jsdelivr.net/gh/username/project/file</code>。</s></p></li><li><p><s>饿了么 CDN（已关）：国内唯一能用的 npm 镜像，2022.07.13 发现外部访问被拒绝。之前饿了么并没说支持对外，可能已经彻底取消了。</s></p><p><s>使用饿了么 CDN 时，注意 <code>https://npm.elemecdn.com/react@latest/</code> 需要时间更新，具体频率未知，可固定大版本号来获取更新 <code>https://npm.elemecdn.com/react@^18/</code>。</s></p></li>",2),w=(0,l._)("h3",{id:"静态资源库",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#静态资源库","aria-hidden":"true"},"#"),(0,l.Uk)(" 静态资源库")],-1),S={href:"https://cdn.bytedance.com/",target:"_blank",rel:"noopener noreferrer"},F=(0,l.Uk)("字节 CDN"),D=(0,l.Uk)("：国内测速表现最佳，缓存过期时间最长设置一年。"),N={href:"https://www.staticfile.org/",target:"_blank",rel:"noopener noreferrer"},x=(0,l.Uk)("Staticfile CDN"),C=(0,l.Uk)("：CDN 加速由七牛云提供。"),T=(0,l._)("h3",{id:"静态页面",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#静态页面","aria-hidden":"true"},"#"),(0,l.Uk)(" 静态页面")],-1),E=(0,l.Uk)("Cloudflare：Pages 和 Workers 两类部署方式。 "),G=(0,l.Uk)("Workers"),I=(0,l.Uk)("：复制镜像网站，可直接访问，但反向代理稳定性成疑。"),W=(0,l._)("li",null,"Pages：部署简单，外网速度很快，但国内速度不稳，而且 page.dev 域名有时会被墙，可购买便宜的临时域名（一年）来解决该问题。",-1),j=(0,l._)("li",null,"Netlify：国内速度慢点，图片容易卡死，但还算稳定。",-1),H=(0,l._)("li",null,"Vercel：需绑定国外手机号，经常需要换 IP。",-1),A=(0,l._)("li",null,"AWS: 邮箱注册，不过需要信用卡认证。",-1),K=(0,l._)("li",null,"国内平台：Gitee、WuliHub、CODING，都需要实名认证。",-1),L=(0,l._)("h3",{id:"ipfs",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#ipfs","aria-hidden":"true"},"#"),(0,l.Uk)(" IPFS")],-1),M=(0,l._)("p",null,[(0,l.Uk)("IPFS 无需服务器就可建立静态网站，号称永不失效，但"),(0,l._)("strong",null,"国内稳定性成疑问，实用性一般"),(0,l.Uk)("。IPFS 托管在一个网关上，并不会自动复制到所有网关。")],-1),q={href:"https://pinata.cloud/",target:"_blank",rel:"noopener noreferrer"},R=(0,l.Uk)("pinata"),$=(0,l.Uk)(" 上传网站构建的目录文件夹，上传后，即可通过 IPFS Hash 访问。网站目录中必须有 index.html，否则网页中将显示网站目录。即使有 index.html，其他人在拥有 CID 后，可以通过 IPFS Desktop 来获取网站的完整目录。为确保私密性，建议只上传单文件。使用单文件 CID 视为单一网站，不可调用原目录中的文件。"),z=(0,l._)("sup",{class:"footnote-ref"},[(0,l._)("a",{href:"#footnote1"},"[1]"),(0,l._)("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),Z=(0,l._)("p",null,"上传 ipfs 到 pinata 之后，cloudflare 等其他网关不一定会完全复制文件，php 无法抓取加载，所以不建议使用 cloudflare 网关。",-1),O=(0,l._)("p",null,[(0,l.Uk)("cloudflare 接管 pinata 后，ipfs 域名需通过「pinata 托管 - cloudflare DNS - cloudflare SSL」。如果中途将 DNS 指向 "),(0,l._)("code",null,"http://gateway.pinata.cloud"),(0,l.Uk)(" 等非 cloudflare ipfs 网关域名，cloudflare SSL 证书将失效。即便把链接改为非加密的 http，pinata 依然会视之为无效链接而拒绝访问。")],-1),V=(0,l.Uk)("对于文件较少且链接有效的域名，可按 "),B={href:"https://www.cloudflare.com/zh-cn/distributed-web-gateway/",target:"_blank",rel:"noopener noreferrer"},Y=(0,l.Uk)("Cloudflare IPFS"),J=(0,l.Uk)(" 页面说明来设置 DNS，提交 IPFS 域名 30 分钟后，即可获取 SSL 证书。"),Q=(0,l.uE)('<ol><li>添加 CNAME 记录，将你的 IPFS 域名 (xxx.example.com) 指向 <code>cloudflare-ipfs.com</code>。</li><li><code>_dnslink.xxx.example.com</code> 设置为 <code>dnslink=/ipfs/&lt;your_ipfs_hash_here&gt;</code>。</li></ol><h2 id="github-同步到-vps" tabindex="-1"><a class="header-anchor" href="#github-同步到-vps" aria-hidden="true">#</a> GitHub 同步到 VPS</h2><p>我的代码、文章都部署在 GitHub 上，但国内访问 GitHub 的速度不稳定，需要增加国内访问节点。</p><p>最多人用的方法是，GitHub Action 将新文档同步到 Gitee，生成国内静态页 Gitee Pages。但 Gitee Pages 有诸多限制，免费版无法自定义域名，而且必须实名验证。</p><p>因此，我选择将文档同步到自建的国内服务器（域名已备案）。</p><p>!&gt; 注意：文件夹不要有大写字母，否则同步时容易出错。</p><h3 id="同步到-ftp" tabindex="-1"><a class="header-anchor" href="#同步到-ftp" aria-hidden="true">#</a> 同步到 FTP</h3>',7),X=(0,l.Uk)("如果你有 FTP 服务器，可使用 "),ee={href:"https://github.com/SamKirkland/FTP-Deploy-Action",target:"_blank",rel:"noopener noreferrer"},ne=(0,l.Uk)("FTP-Deploy-Action"),se=(0,l.Uk)(" 将 github 代码推送到服务器上。Action 步骤参考 "),le=(0,l.Uk)("GitHub 说明"),ae=(0,l.Uk)("。"),te=(0,l.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>on: push\nname: 🚀 Deploy website on push\njobs:\n  web-deploy:\n    name: 🎉 Deploy\n    runs-on: ubuntu-latest\n    steps:\n    - name: 🚚 Get latest code\n      uses: actions/checkout@v3\n\n    - name: 📂 Sync files\n      uses: SamKirkland/FTP-Deploy-Action@4.3.0\n      with:\n        server: <span class="token variable">${{ secrets.ftp_host }</span><span class="token punctuation">}</span>\n        username: <span class="token variable">${{ secrets.ftp_username }</span><span class="token punctuation">}</span>\n        password: <span class="token variable">${{ secrets.ftp_password }</span><span class="token punctuation">}</span>\n        port: <span class="token variable">${{ secrets.ftp_port }</span><span class="token punctuation">}</span> <span class="token comment"># 建议更改默认的 21 端口</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 FTP 时，需在云服务商的安全组和服务器上开放 FTP 端口，并<strong>暂停宝塔系统加固</strong>等安全插件。</p><p>如果出现 <code>FTPError: 530 Login authentication failed</code>，则说明 FTP 密码错误或账号不存在，用 FileZilla 测试 FTP 的有效性。</p><p>确认 FTP 无效后，检查 FTP 密码是否填写正确，是否只有大小写字母和数字。如果密码错误，则在 github secrets 重新 update 密钥。</p><p>如果密码正确，则进入 <code>/www/server/pure-ftpd/etc/pureftpd.passwd</code>，检查是否有该 FTP 账户。没有账户的话，<strong>暂停宝塔系统加固</strong>等安全插件后，重新新建 FTP。</p><p>使用注意：初次同步时，只会上传文件，不涉及同路径下的其他文件。但之后同步，会扫描目标目录下的文件，<strong>不同的文件都会被删除</strong>。</p><h3 id="同步到-oss" tabindex="-1"><a class="header-anchor" href="#同步到-oss" aria-hidden="true">#</a> 同步到 oss</h3>',7),ie=(0,l.Uk)("如果没有服务器，可以把文件部署在云运营商的云存储上。比如用 "),re={href:"https://github.com/marketplace/actions/aliyun-oss-website-action",target:"_blank",rel:"noopener noreferrer"},oe=(0,l.Uk)("aliyun-oss-website-action"),ce=(0,l.Uk)("，将 repo 文件 build 成网站文件，然后同步到阿里云 oss 并运行网站。"),de=(0,l.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>name: deploy md to oss\non:\n  push:\n    branches: <span class="token punctuation">[</span> <span class="token string">&quot;main&quot;</span> <span class="token punctuation">]</span>\n  pull_request:\n    branches: <span class="token punctuation">[</span> <span class="token string">&quot;main&quot;</span> <span class="token punctuation">]</span>\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    <span class="token comment"># load repo to /github/workspace</span>\n    - uses: actions/checkout@v3\n    - name: Use Node.js\n      uses: actions/setup-node@v3\n      with:\n        node-version: <span class="token string">&#39;14.x&#39;</span>\n    <span class="token comment"># 打包文档命令</span>\n    <span class="token comment"># - run: npm install yarn@1.22.4 -g</span>\n    <span class="token comment"># - run: yarn install</span>\n    <span class="token comment"># - run: yarn docs:build #需要配合 yarn 的 package.json</span>\n    - name: aliyun-oss-website-action\n      uses: fangbinwei/aliyun-oss-website-action@v1.3.0\n      with:\n          accessKeyId: <span class="token variable">${{ secrets.ACCESS_KEY_ID }</span><span class="token punctuation">}</span>\n          accessKeySecret: <span class="token variable">${{ secrets.ACCESS_KEY_SECRET }</span><span class="token punctuation">}</span>\n          bucket: learndata-notes\n          <span class="token comment"># use your own endpoint</span>\n          endpoint: oss-cn-shanghai.aliyuncs.com\n          <span class="token comment"># 全目录上传</span>\n          folder: <span class="token builtin class-name">.</span>\n          <span class="token comment"># 不上传的文件</span>\n          exclude: <span class="token operator">|</span>\n            .github/\n            .gitattributes\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">',2),pe={class:"footnotes"},ue={class:"footnotes-list"},me={id:"footnote1",class:"footnote-item"},ve={href:"https://medium.com/pinata/how-to-easily-host-a-website-on-ipfs-9d842b5d6a01",target:"_blank",rel:"noopener noreferrer"},he=(0,l.Uk)("How to Easily Host a Website on IPFS"),be=(0,l.Uk)(),ke=(0,l._)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),fe={},_e=(0,s(1935).Z)(fe,[["render",function(e,n){const s=(0,l.up)("ExternalLinkIcon"),fe=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)("div",null,[a,t,i,(0,l._)("ul",null,[(0,l._)("li",null,[r,(0,l._)("ul",null,[(0,l._)("li",null,[o,(0,l._)("a",c,[d,(0,l.Wm)(s)]),p]),(0,l._)("li",null,[u,(0,l._)("a",m,[v,(0,l.Wm)(s)]),h,b,k])])]),f,(0,l._)("li",null,[(0,l._)("p",null,[(0,l._)("a",_,[g,(0,l.Wm)(s)]),U]),y]),P]),w,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",S,[F,(0,l.Wm)(s)]),D]),(0,l._)("li",null,[(0,l._)("a",N,[x,(0,l.Wm)(s)]),C])]),T,(0,l._)("ul",null,[(0,l._)("li",null,[E,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(fe,{to:"/deploy/Cloudflare.html#%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86"},{default:(0,l.w5)((()=>[G])),_:1}),I]),W])]),j,H,A,K]),L,M,(0,l._)("p",null,[(0,l._)("a",q,[R,(0,l.Wm)(s)]),$,z]),Z,O,(0,l._)("p",null,[V,(0,l._)("a",B,[Y,(0,l.Wm)(s)]),J]),Q,(0,l._)("p",null,[X,(0,l._)("a",ee,[ne,(0,l.Wm)(s)]),se,(0,l.Wm)(fe,{to:"/deploy/GitHub.html"},{default:(0,l.w5)((()=>[le])),_:1}),ae]),te,(0,l._)("p",null,[ie,(0,l._)("a",re,[oe,(0,l.Wm)(s)]),ce]),de,(0,l._)("section",pe,[(0,l._)("ol",ue,[(0,l._)("li",me,[(0,l._)("p",null,[(0,l._)("a",ve,[he,(0,l.Wm)(s)]),be,ke])])])])])}]])},1935:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,l]of n)s[e]=l;return s}}}]);