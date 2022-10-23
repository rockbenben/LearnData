import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,a as n,b as s,d as l,e as c,r as d}from"./app.50d009b6.js";const o={},u=n("h2",{id:"\u57FA\u7840\u77E5\u8BC6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u7840\u77E5\u8BC6","aria-hidden":"true"},"#"),s(" \u57FA\u7840\u77E5\u8BC6")],-1),p=n("p",null,"mounted \u662F\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u81EA\u52A8\u6267\u884C\u3002",-1),v=n("p",null,"props \u4E3B\u8981\u7528\u4E8E\u7EC4\u4EF6\u7684\u4F20\u503C\uFF0C\u4ED6\u7684\u5DE5\u4F5C\u5C31\u662F\u4E3A\u4E86\u63A5\u6536\u5916\u9762\u4F20\u8FC7\u6765\u7684\u6570\u636E\uFF0C\u4E0E data\u3001el\u3001ref \u662F\u4E00\u4E2A\u7EA7\u522B\u7684\u914D\u7F6E\u9879\u3002",-1),r={href:"https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers",target:"_blank",rel:"noopener noreferrer"},m=c(`<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>//\u4ECE Vue \u5BF9\u8C61\u4E2D\u5C06 ref, reactive, readonly, toRefs \u65B9\u6CD5\u89E3\u6784\u51FA\u6765
const { ref, reactive} = Vue;

// setup
setup(props, context) {
  const { h } = Vue;
  const { attrs, slots, emit } = context;
  function handleClick() {
    emit(&#39;change&#39;);
  }
  return { handleClick };
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h2><p>v-model \u53CC\u5411\u7ED1\u5B9A\uFF0C\u53EF\u4EE5\u8BA9\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u9012\u53C2\u6570\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u4F20\u9012\u5355\u4E2A\u53C2\u6570 count
// template
&lt;counter v-model=&quot;count&quot; /&gt;
// component:\u4F20\u9012\u53C2\u6570\u5FC5\u987B\u4E3A \`modelValue\`\uFF0C\u4F20\u9012\u65B9\u6CD5\u5FC5\u987B\u4E3A \`update:modelValue\`
app.component(&#39;counter&#39;, {
  props: [&#39;modelValue&#39;],
  methods: {
    handleClick() {
      this.$emit(&#39;update:modelValue&#39;, this.modelValue + 3);
    },
  },
  template: \`
  &lt;div @click=&quot;handleClick&quot;&gt;{{modelValue}}&lt;/div&gt;
\`,
});

// v-model \u4F20\u9012\u591A\u4E2A\u53C2\u6570 count \u548C count1
// template
&lt;counterx v-model:count=&quot;count&quot; v-model:count1=&quot;count1&quot; /&gt;
// component
app.component(&#39;counterx&#39;, {
  props: [&#39;count&#39;, &#39;count1&#39;],
  methods: {
    handleClick2() {
      this.$emit(&#39;update:count&#39;, this.count + 1);
    },
    handleClick3() {
      this.$emit(&#39;update:count1&#39;, this.count1 + 10);
    },
  },
  template: \`
  &lt;div @click=&quot;handleClick2&quot;&gt;{{count}}&lt;/div&gt;
  &lt;div @click=&quot;handleClick3&quot;&gt;{{count1}}&lt;/div&gt;
\`,
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u4EF6\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u547D\u540D" aria-hidden="true">#</a> \u7EC4\u4EF6\u547D\u540D</h2><p>\u5168\u5C40\u7EC4\u4EF6\uFF0C\u5EFA\u8BAE\u300C\u5C0F\u5199\u5B57\u6BCD\u5355\u8BCD\uFF0C\u5355\u6B21\u95F4\u7528\u6A2A\u7EBF\u95F4\u9694\u300D\uFF1B\u5C40\u90E8\u7EC4\u4EF6\uFF0C\u5EFA\u8BAE\u300C\u6BCF\u4E2A\u5355\u6B21\u90FD\u7528\u5927\u5199\u5B57\u6BCD\u5F00\u5934\uFF08\u9A7C\u5CF0\u547D\u540D\uFF09\u300D\u3002\u6309\u8FD9\u4E2A\u89C4\u5219\u547D\u540D\uFF0CVue \u624D\u80FD\u81EA\u52A8\u8F6C\u6362\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// Vue \u4F1A\u81EA\u52A8\u5C06 Counter\uFF08\u5C40\u90E8\u7EC4\u4EF6\uFF09\u8F6C\u4E3A counter\uFF08\u5168\u5C40\u7EC4\u4EF6\uFF09\uFF0C\u5C06 HelloWorld\uFF08\u5C40\u90E8\u7EC4\u4EF6\uFF09\u8F6C\u4E3A hello-world\uFF08\u5C40\u90E8\u7EC4\u4EF6\uFF09\u3002
const Counter = {
  data() {
    return {
      count: 1,
    };
  },
  template: \`&lt;div @click=&quot;count += 1&quot;&gt;{{count}}&lt;/div&gt;\`,
};

const HelloWorld = {
  template: \`&lt;div&gt;hello world&lt;/div&gt;\`,
};

const app = Vue.createApp({
  // \u5F15\u5165\u5C40\u90E8\u7EC4\u4EF6\uFF08\u9700\u653E\u5728\u5F15\u5165\u4E4B\u524D\uFF09
  components: {
    // \u624B\u52A8\u5B9A\u4F4D
    // counter: Counter,
    // &#39;hello-world&#39;: HelloWorld,
    Counter,
    HelloWorld,
  },
  template: \`
  &lt;div&gt;
    &lt;hello-world /&gt;11111111
    &lt;counter /&gt;222222
  &lt;/div&gt;
\`,
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cdn-\u4F7F\u7528-vue" tabindex="-1"><a class="header-anchor" href="#cdn-\u4F7F\u7528-vue" aria-hidden="true">#</a> CDN \u4F7F\u7528 vue</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/3.2.31/vue.global.min.js<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application/javascript<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>

  <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Hello Vue!&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 <code>&lt;div v-html=&quot;html&quot;&gt;&lt;/div&gt;</code> \u6765\u5F15\u5165 html \u5143\u7D20\uFF0C\u529F\u80FD\u7C7B\u4F3C\u4E8E <code>innerHTML</code>\uFF0C\u4E0D\u80FD\u52A0\u8F7D\u5916\u90E8 HTML\uFF0C\u5B9E\u73B0 <code>&lt;?php echo file_get_contents(&quot;https://docs.manictime.com/win-client/faq&quot;); ?&gt;</code> \u7C7B\u4F3C\u7684\u529F\u80FD\u3002</p>`,10);function b(k,h){const e=d("ExternalLinkIcon");return i(),t("div",null,[u,p,v,n("p",null,[s("\u6309\u952E\u3001\u4E8B\u4EF6\u90FD\u53EF\u4EE5\u52A0\u5165 "),n("a",r,[s("\u4FEE\u9970\u7B26"),l(e)]),s("\uFF0C\u7B80\u5316\u4EE3\u7801\u3002")]),m])}const _=a(o,[["render",b],["__file","Vue.html.vue"]]);export{_ as default};
