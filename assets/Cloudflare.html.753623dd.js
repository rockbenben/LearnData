import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as e,a as n,b as s,d as o,e as c,r as l}from"./app.be66724d.js";const u={},i={href:"https://developers.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},r=c(`<p>Cloudflare \u4E91\u7AEF\u4EE3\u7406\u540E\uFF0C\u80FD\u5E2E\u52A0\u901F\u56FD\u5185\u8BBF\u95EE\u56FD\u5916\u7F51\u7AD9\u7684\u901F\u5EA6\u3002\u6BD4\u5982\uFF0Cnotion \u7684\u4E2A\u4EBA\u535A\u5BA2\u7528 Cloudflare \u4EE3\u7406\uFF0C\u539F\u672C\u901F\u5EA6\u5F88\u6162\uFF0C\u4F7F\u7528 Cloudflare \u540E\u52A0\u901F\u660E\u663E\u3002</p><p>\u4F46 Cloudflare \u514D\u8D39\u8BA1\u5212\u4E0D\u652F\u6301\u5355\u72EC\u5B50\u57DF\u540D\u6258\u7BA1\uFF0C\u9700\u8981\u5B8C\u6574\u57DF\u540D\u6258\u7BA1\u3002</p><h2 id="\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> \u53CD\u5411\u4EE3\u7406</h2><p>Cloudflare Workers \u53CD\u5411\u4EE3\u7406\u4E0D\u9002\u5408 google \u548C cloudflare cdn \u7F51\u7AD9\uFF0C\u5176\u4ED6\u7F51\u7AD9\u5927\u90FD\u53EF\u4EE5\u3002</p><h3 id="\u955C\u50CF\u6574\u4E2A\u7F51\u7AD9" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u6574\u4E2A\u7F51\u7AD9" aria-hidden="true">#</a> \u955C\u50CF\u6574\u4E2A\u7F51\u7AD9</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u66FF\u6362\u6210\u4F60\u60F3\u955C\u50CF\u7684\u7AD9\u70B9</span>
<span class="token keyword">const</span> upstream <span class="token operator">=</span> <span class="token string">&quot;www.youtube.com&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C\u90A3\u4E2A\u7AD9\u70B9\u6709\u4E13\u95E8\u7684\u79FB\u52A8\u9002\u914D\u7AD9\u70B9\uFF0C\u5426\u5219\u4FDD\u6301\u548C\u4E0A\u9762\u4E00\u81F4</span>
<span class="token keyword">const</span> upstream_mobile <span class="token operator">=</span> <span class="token string">&quot;www.youtube.com&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F60\u5E0C\u671B\u7981\u6B62\u54EA\u4E9B\u56FD\u5BB6\u8BBF\u95EE</span>
<span class="token keyword">const</span> blocked_region <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;RU&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u7981\u6B62\u81EA\u8BBF\u95EE</span>
<span class="token keyword">const</span> blocked_ip_address <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u66FF\u6362\u6210\u4F60\u60F3\u955C\u50CF\u7684\u7AD9\u70B9</span>
<span class="token keyword">const</span> replace_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">$upstream</span><span class="token operator">:</span> <span class="token string">&quot;$custom_domain&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;//www.youtube.com&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//\u4EE5\u4E0B\u5185\u5BB9\u90FD\u4E0D\u7528\u52A8</span>
<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;fetch&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">fetchAndApply</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchAndApply</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> region <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;cf-ipcountry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> ip_address <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;cf-connecting-ip&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> user_agent <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;user-agent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> url_host <span class="token operator">=</span> url<span class="token punctuation">.</span>host<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>protocol <span class="token operator">==</span> <span class="token string">&quot;http:&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    url<span class="token punctuation">.</span>protocol <span class="token operator">=</span> <span class="token string">&quot;https:&quot;</span><span class="token punctuation">;</span>
    response <span class="token operator">=</span> Response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">device_status</span><span class="token punctuation">(</span>user_agent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    upstream_domain <span class="token operator">=</span> upstream<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    upstream_domain <span class="token operator">=</span> upstream_mobile<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  url<span class="token punctuation">.</span>host <span class="token operator">=</span> upstream_domain<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>blocked_region<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>region<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Access denied: WorkersProxy is not available in your region yet.&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">403</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>blocked_ip_address<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>ip_address<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Access denied: Your IP address is blocked by WorkersProxy.&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">403</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> method <span class="token operator">=</span> request<span class="token punctuation">.</span>method<span class="token punctuation">;</span>
    <span class="token keyword">let</span> request_headers <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>
    <span class="token keyword">let</span> new_request_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>

    new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Host&quot;</span><span class="token punctuation">,</span> upstream_domain<span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Referer&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> original_response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> method<span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> new_request_headers<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> original_response_clone <span class="token operator">=</span> original_response<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> original_text <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> response_headers <span class="token operator">=</span> original_response<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>
    <span class="token keyword">let</span> new_response_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>response_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> status <span class="token operator">=</span> original_response<span class="token punctuation">.</span>status<span class="token punctuation">;</span>

    new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;access-control-allow-origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;access-control-allow-credentials&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;content-security-policy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;content-security-policy-report-only&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;clear-site-data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> content_type <span class="token operator">=</span> new_response_headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;text/html&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      original_text <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span>
        original_response_clone<span class="token punctuation">,</span>
        upstream_domain<span class="token punctuation">,</span>
        url_host
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      original_text <span class="token operator">=</span> original_response_clone<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>original_text<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      status<span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> new_response_headers<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> upstream_domain<span class="token punctuation">,</span> host_name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> replace_dict<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    j <span class="token operator">=</span> replace_dict<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&quot;$upstream&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i <span class="token operator">=</span> upstream_domain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&quot;$custom_domain&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i <span class="token operator">=</span> host_name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">&quot;$upstream&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      j <span class="token operator">=</span> upstream_domain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">&quot;$custom_domain&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      j <span class="token operator">=</span> host_name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token string">&quot;g&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">device_status</span><span class="token punctuation">(</span><span class="token parameter">user_agent_info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> agents <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;Android&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;iPhone&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SymbianOS&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Windows Phone&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;iPad&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;iPod&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> v <span class="token operator">&lt;</span> agents<span class="token punctuation">.</span>length<span class="token punctuation">;</span> v<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>user_agent_info<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>agents<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u955C\u50CF\u7F51\u7AD9\u6307\u5B9A\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u7F51\u7AD9\u6307\u5B9A\u76EE\u5F55" aria-hidden="true">#</a> \u955C\u50CF\u7F51\u7AD9\u6307\u5B9A\u76EE\u5F55</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4F60\u8981\u955C\u50CF\u7684\u7F51\u7AD9\u3002</span>
<span class="token keyword">const</span> upstream <span class="token operator">=</span> <span class="token string">&quot;objectstorage.ap-seoul-1.oraclecloud.com&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u955C\u50CF\u7F51\u7AD9\u7684\u76EE\u5F55\uFF0C\u6BD4\u5982\u4F60\u60F3\u955C\u50CF\u67D0\u4E2A\u7F51\u7AD9\u7684\u4E8C\u7EA7\u76EE\u5F55\u5219\u586B\u5199\u4E8C\u7EA7\u76EE\u5F55\u7684\u76EE\u5F55\u540D\uFF0C\u955C\u50CF google \u7528\u4E0D\u5230\uFF0C\u9ED8\u8BA4\u5373\u53EF\u3002</span>
<span class="token keyword">const</span> upstream_path <span class="token operator">=</span> <span class="token string">&quot;/test/&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u955C\u50CF\u7AD9\u662F\u5426\u6709\u624B\u673A\u8BBF\u95EE\u4E13\u7528\u7F51\u5740\uFF0C\u6CA1\u6709\u5219\u586B\u4E00\u6837\u7684\u3002</span>
<span class="token keyword">const</span> upstream_mobile <span class="token operator">=</span> <span class="token string">&quot;objectstorage.ap-seoul-1.oraclecloud.com&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5C4F\u853D\u56FD\u5BB6\u548C\u5730\u533A\u3002</span>
<span class="token keyword">const</span> blocked_region <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u5C4F\u853D IP \u5730\u5740\u3002</span>
<span class="token keyword">const</span> blocked_ip_address <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u955C\u50CF\u7AD9\u662F\u5426\u5F00\u542F HTTPS.</span>
<span class="token keyword">const</span> https <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// \u6587\u672C\u66FF\u6362\u3002\u586B\u4F60\u8981\u955C\u50CF\u7684\u7F51\u7AD9</span>
<span class="token keyword">const</span> replace_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">$upstream</span><span class="token operator">:</span> <span class="token string">&quot;$custom_domain&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;//objectstorage.ap-seoul-1.oraclecloud.com&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4EE5\u4E0B\u4FDD\u6301\u9ED8\u8BA4\uFF0C\u4E0D\u8981\u52A8</span>
<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;fetch&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">fetchAndApply</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchAndApply</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> region <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;cf-ipcountry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> ip_address <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;cf-connecting-ip&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> user_agent <span class="token operator">=</span>
    <span class="token string">&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> url_hostname <span class="token operator">=</span> url<span class="token punctuation">.</span>hostname<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>https <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    url<span class="token punctuation">.</span>protocol <span class="token operator">=</span> <span class="token string">&quot;https:&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    url<span class="token punctuation">.</span>protocol <span class="token operator">=</span> <span class="token string">&quot;http:&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">device_status</span><span class="token punctuation">(</span>user_agent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> upstream_domain <span class="token operator">=</span> upstream<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> upstream_domain <span class="token operator">=</span> upstream_mobile<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  url<span class="token punctuation">.</span>host <span class="token operator">=</span> upstream_domain<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>pathname <span class="token operator">==</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    url<span class="token punctuation">.</span>pathname <span class="token operator">=</span> upstream_path<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    url<span class="token punctuation">.</span>pathname <span class="token operator">=</span> upstream_path <span class="token operator">+</span> url<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>blocked_region<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>region<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Access denied: WorkersProxy is not available in your region yet.&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">403</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>blocked_ip_address<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>ip_address<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Access denied: Your IP address is blocked by WorkersProxy.&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">403</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> method <span class="token operator">=</span> request<span class="token punctuation">.</span>method<span class="token punctuation">;</span>
    <span class="token keyword">let</span> request_headers <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>
    <span class="token keyword">let</span> new_request_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>

    new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Host&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Referer&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> original_response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> method<span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> new_request_headers<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> original_response_clone <span class="token operator">=</span> original_response<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> original_text <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> response_headers <span class="token operator">=</span> original_response<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>
    <span class="token keyword">let</span> new_response_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>response_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> status <span class="token operator">=</span> original_response<span class="token punctuation">.</span>status<span class="token punctuation">;</span>

    new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;access-control-allow-origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;access-control-allow-credentials&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;content-security-policy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;content-security-policy-report-only&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;clear-site-data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> content_type <span class="token operator">=</span> new_response_headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;text/html&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      original_text <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span>
        original_response_clone<span class="token punctuation">,</span>
        upstream_domain<span class="token punctuation">,</span>
        url_hostname
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      original_text <span class="token operator">=</span> original_response_clone<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>original_text<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      status<span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> new_response_headers<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> upstream_domain<span class="token punctuation">,</span> host_name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> replace_dict<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    j <span class="token operator">=</span> replace_dict<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&quot;$upstream&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i <span class="token operator">=</span> upstream_domain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&quot;$custom_domain&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i <span class="token operator">=</span> host_name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">&quot;$upstream&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      j <span class="token operator">=</span> upstream_domain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">&quot;$custom_domain&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      j <span class="token operator">=</span> host_name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token string">&quot;g&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">device_status</span><span class="token punctuation">(</span><span class="token parameter">user_agent_info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> agents <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;Android&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;iPhone&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SymbianOS&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Windows Phone&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;iPad&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;iPod&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> v <span class="token operator">&lt;</span> agents<span class="token punctuation">.</span>length<span class="token punctuation">;</span> v<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>user_agent_info<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>agents<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u955C\u50CF\u7F51\u7AD9\u5E26\u5BC6\u7801\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u7F51\u7AD9\u5E26\u5BC6\u7801\u8BBF\u95EE" aria-hidden="true">#</a> \u955C\u50CF\u7F51\u7AD9\u5E26\u5BC6\u7801\u8BBF\u95EE</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u66FF\u6362\u6210\u4F60\u60F3\u955C\u50CF\u7684\u7AD9\u70B9</span>
<span class="token keyword">const</span> upstream <span class="token operator">=</span> <span class="token string">&quot;google.com&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C\u90A3\u4E2A\u7AD9\u70B9\u6709\u4E13\u95E8\u7684\u79FB\u52A8\u9002\u914D\u7AD9\u70B9\uFF0C\u5426\u5219\u4FDD\u6301\u548C\u4E0A\u9762\u4E00\u81F4</span>
<span class="token keyword">const</span> upstream_mobile <span class="token operator">=</span> <span class="token string">&quot;m.google.com&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5BC6\u7801\u8BBF\u95EE</span>

<span class="token keyword">const</span> openAuth <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F60\u5E0C\u671B\u7981\u6B62\u54EA\u4E9B\u56FD\u5BB6\u8BBF\u95EE</span>
<span class="token keyword">const</span> blocked_region <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;RU&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u7981\u6B62\u81EA\u8BBF\u95EE</span>
<span class="token keyword">const</span> blocked_ip_address <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u66FF\u6362\u6210\u4F60\u60F3\u955C\u50CF\u7684\u7AD9\u70B9</span>
<span class="token keyword">const</span> replace_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">$upstream</span><span class="token operator">:</span> <span class="token string">&quot;$custom_domain&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;//google.com&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">unauthorized</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&quot;Unauthorized&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;WWW-Authenticate&quot;</span><span class="token operator">:</span> <span class="token string">&#39;Basic realm=&quot;goindex&quot;&#39;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;Access-Control-Allow-Origin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">401</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">parseBasicAuth</span><span class="token punctuation">(</span><span class="token parameter">auth</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">atob</span><span class="token punctuation">(</span>auth<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">doBasicAuth</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> auth <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>auth <span class="token operator">||</span> <span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^Basic [A-Za-z0-9._~+/-]+=*$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>auth<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">,</span> pass<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">parseBasicAuth</span><span class="token punctuation">(</span>auth<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> user <span class="token operator">===</span> username <span class="token operator">&amp;&amp;</span> pass <span class="token operator">===</span> password<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchAndApply</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// allow preflight request</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;Access-Control-Allow-Origin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;Access-Control-Allow-Headers&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;Access-Control-Allow-Methods&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GET, POST, PUT, HEAD, OPTIONS&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>openAuth <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">doBasicAuth</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">unauthorized</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> region <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;cf-ipcountry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> ip_address <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;cf-connecting-ip&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> user_agent <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;user-agent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> url_host <span class="token operator">=</span> url<span class="token punctuation">.</span>host<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>protocol <span class="token operator">==</span> <span class="token string">&quot;http:&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    url<span class="token punctuation">.</span>protocol <span class="token operator">=</span> <span class="token string">&quot;https:&quot;</span><span class="token punctuation">;</span>
    response <span class="token operator">=</span> Response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">device_status</span><span class="token punctuation">(</span>user_agent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    upstream_domain <span class="token operator">=</span> upstream<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    upstream_domain <span class="token operator">=</span> upstream_mobile<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  url<span class="token punctuation">.</span>host <span class="token operator">=</span> upstream_domain<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>blocked_region<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>region<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Access denied: WorkersProxy is not available in your region yet.&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">403</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>blocked_ip_address<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>ip_address<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Access denied: Your IP address is blocked by WorkersProxy.&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">403</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> method <span class="token operator">=</span> request<span class="token punctuation">.</span>method<span class="token punctuation">;</span>
    <span class="token keyword">let</span> request_headers <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>
    <span class="token keyword">let</span> new_request_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>

    new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Host&quot;</span><span class="token punctuation">,</span> upstream_domain<span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Referer&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> original_response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> method<span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> new_request_headers<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> original_response_clone <span class="token operator">=</span> original_response<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> original_text <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> response_headers <span class="token operator">=</span> original_response<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>
    <span class="token keyword">let</span> new_response_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>response_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> status <span class="token operator">=</span> original_response<span class="token punctuation">.</span>status<span class="token punctuation">;</span>

    new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;access-control-allow-origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;access-control-allow-credentials&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;content-security-policy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;content-security-policy-report-only&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;clear-site-data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> content_type <span class="token operator">=</span> new_response_headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;text/html&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      original_text <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span>
        original_response_clone<span class="token punctuation">,</span>
        upstream_domain<span class="token punctuation">,</span>
        url_host
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      original_text <span class="token operator">=</span> original_response_clone<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>original_text<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      status<span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> new_response_headers<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;fetch&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span>
    <span class="token function">fetchAndApply</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>stack<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> upstream_domain<span class="token punctuation">,</span> host_name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> replace_dict<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    j <span class="token operator">=</span> replace_dict<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&quot;$upstream&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i <span class="token operator">=</span> upstream_domain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&quot;$custom_domain&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i <span class="token operator">=</span> host_name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">&quot;$upstream&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      j <span class="token operator">=</span> upstream_domain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">&quot;$custom_domain&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      j <span class="token operator">=</span> host_name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token string">&quot;g&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">device_status</span><span class="token punctuation">(</span><span class="token parameter">user_agent_info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> agents <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;Android&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;iPhone&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SymbianOS&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Windows Phone&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;iPad&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;iPod&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> v <span class="token operator">&lt;</span> agents<span class="token punctuation">.</span>length<span class="token punctuation">;</span> v<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>user_agent_info<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>agents<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function k(d,v){const a=l("ExternalLinkIcon");return p(),e("div",null,[n("p",null,[s("\u5B98\u65B9\u6587\u6863\uFF1A"),n("a",i,[s("Cloudflare Docs"),o(a)])]),r])}const y=t(u,[["render",k],["__file","Cloudflare.html.vue"]]);export{y as default};
