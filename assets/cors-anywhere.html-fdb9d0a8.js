import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as s,b as n,d as e,e as i}from"./app-4f3fa857.js";const l={},r={href:"https://github.com/Rob--W/cors-anywhere",target:"_blank",rel:"noopener noreferrer"},u={href:"https://hub.docker.com/r/rockben/cors-anywhere",target:"_blank",rel:"noopener noreferrer"},d=i(`<p>下面是一个 Docker 部署的示例配置：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">cors-anywhere</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> rockben/cors<span class="token punctuation">-</span>anywhere<span class="token punctuation">:</span>0.4.4
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> cors<span class="token punctuation">-</span>anywhere
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8186:8080&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2><p>若想在 JavaScript 中利用 CORS Anywhere，以下是一个简单的调用示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> corsAnywhereUrl <span class="token operator">=</span> <span class="token string">&quot;http://192.168.2.3:8086/&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> targetUrl <span class="token operator">=</span> <span class="token string">&quot;http://example.com/&quot;</span><span class="token punctuation">;</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用 CORS Anywhere URL 前缀和目标 URL</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> corsAnywhereUrl <span class="token operator">+</span> targetUrl<span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 展示从资源获取的数据</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#rawid&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建自定义-docker-镜像" tabindex="-1"><a class="header-anchor" href="#构建自定义-docker-镜像" aria-hidden="true">#</a> 构建自定义 Docker 镜像</h2><p>以下为提供的 Dockerfile 允许你依据自己的需求构建专属 CORS Anywhere 镜像。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 使用 Alpine 为基础镜像，该镜像体积较小</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:14-alpine <span class="token keyword">as</span> builder</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># 克隆 CORS Anywhere 的代码</span>
<span class="token instruction"><span class="token keyword">RUN</span> apk add --no-cache git &amp;&amp; <span class="token operator">\\</span>
    git clone https://github.com/Rob--W/cors-anywhere.git . &amp;&amp; <span class="token operator">\\</span>
    npm install</span>

<span class="token comment"># 使用多阶段构建</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:14-alpine</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># 从上一个阶段拷贝构建好的 node_modules 目录和必要的文件</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/node_modules ./node_modules/</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/lib/ ./lib/</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/server.js ./server.js</span>

<span class="token comment"># 设置服务运行的端口</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>

<span class="token comment"># 启动服务</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;node&quot;</span>, <span class="token string">&quot;server.js&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Dockerfile 所在目录下，仅需执行以下几条命令，即可完成 cors-anywhere 的运行部署：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 构建 Docker 镜像</span>
<span class="token function">sudo</span> <span class="token function">docker</span> build <span class="token parameter variable">-t</span> cors-anywhere <span class="token builtin class-name">.</span>

<span class="token comment"># 运行 Docker 容器</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> cors-anywhere <span class="token parameter variable">-p</span> <span class="token number">8086</span>:8080 cors-anywhere
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function k(v,m){const a=p("ExternalLinkIcon");return o(),c("div",null,[s("p",null,[s("a",r,[n("CORS Anywhere"),e(a)]),n(" 是一个基于 NodeJS 的代理服务，专门用于向跨源请求中注入 CORS（跨源资源共享）头部。为了了解其背后的逻辑，需要首先理解浏览器的同源策略：当你的前端 JavaScript 代码企图从一个域访问另外一个域的内容时，浏览器默认会阻拦这样的请求，除非目的域有合适的 CORS 头部标识。但有了 CORS Anywhere，这些浏览器的安全限制就可以轻松绕过。")]),s("p",null,[n("如果你想自行部署，可以选择自建镜像。我也提供了一个预先配置好的容器版本，可在 Docker Hub 上找到 "),s("a",u,[n("rockben/cors-anywhere"),e(a)]),n("。")]),d])}const y=t(l,[["render",k],["__file","cors-anywhere.html.vue"]]);export{y as default};
