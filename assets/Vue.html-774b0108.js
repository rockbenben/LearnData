import{_ as e,Y as t,Z as i,$ as n,a0 as s,a1 as l,a2 as c,D as d}from"./framework-0d329256.js";const u={},o=n("h2",{id:"基础知识",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础知识","aria-hidden":"true"},"#"),s(" 基础知识")],-1),p=n("p",null,"mounted 是生命周期函数，自动执行。",-1),v=n("p",null,"props 主要用于组件的传值，他的工作就是为了接收外面传过来的数据，与 data、el、ref 是一个级别的配置项。",-1),r={href:"https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers",target:"_blank",rel:"noopener noreferrer"},m=c(`<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>//从 Vue 对象中将 ref, reactive, readonly, toRefs 方法解构出来
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h2><p>v-model 双向绑定，可以让子组件向父组件传递参数。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 传递单个参数 count
// template
&lt;counter v-model=&quot;count&quot; /&gt;
// component:传递参数必须为 \`modelValue\`，传递方法必须为 \`update:modelValue\`
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

// v-model 传递多个参数 count 和 count1
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件命名" tabindex="-1"><a class="header-anchor" href="#组件命名" aria-hidden="true">#</a> 组件命名</h2><p>全局组件，建议「小写字母单词，单次间用横线间隔」；局部组件，建议「每个单次都用大写字母开头（驼峰命名）」。按这个规则命名，Vue 才能自动转换。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// Vue 会自动将 Counter（局部组件）转为 counter（全局组件），将 HelloWorld（局部组件）转为 hello-world（局部组件）。
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
  // 引入局部组件（需放在引入之前）
  components: {
    // 手动定位
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cdn-使用-vue" tabindex="-1"><a class="header-anchor" href="#cdn-使用-vue" aria-hidden="true">#</a> CDN 使用 vue</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>&lt;div v-html=&quot;html&quot;&gt;&lt;/div&gt;</code> 来引入 html 元素，功能类似于 <code>innerHTML</code>，不能加载外部 HTML，实现 <code>&lt;?php echo file_get_contents(&quot;https://docs.manictime.com/win-client/faq&quot;); ?&gt;</code> 类似的功能。</p>`,10);function b(k,h){const a=d("ExternalLinkIcon");return t(),i("div",null,[o,p,v,n("p",null,[s("按键、事件都可以加入"),n("a",r,[s("修饰符"),l(a)]),s("，简化代码。")]),m])}const q=e(u,[["render",b],["__file","Vue.html.vue"]]);export{q as default};
