---
article: false
title: Vue
icon: vue
order: 2
---

## 基础知识

mounted 是生命周期函数，自动执行。

props 主要用于组件的传值，他的工作就是为了接收外面传过来的数据，与 data、el、ref 是一个级别的配置项。

按键、事件都可以加入[修饰符](https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers)，简化代码。

```JavaScript
//从 Vue 对象中将 ref, reactive, readonly, toRefs 方法解构出来
const { ref, reactive} = Vue;

// setup
setup(props, context) {
  const { h } = Vue;
  const { attrs, slots, emit } = context;
  function handleClick() {
    emit('change');
  }
  return { handleClick };
},

```

## v-model

v-model 双向绑定，可以让子组件向父组件传递参数。

```JavaScript
// 传递单个参数 count
// template
<counter v-model="count" />
// component:传递参数必须为 `modelValue`，传递方法必须为 `update:modelValue`
app.component('counter', {
  props: ['modelValue'],
  methods: {
    handleClick() {
      this.$emit('update:modelValue', this.modelValue + 3);
    },
  },
  template: `
  <div @click="handleClick">{{modelValue}}</div>
`,
});

// v-model 传递多个参数 count 和 count1
// template
<counterx v-model:count="count" v-model:count1="count1" />
// component
app.component('counterx', {
  props: ['count', 'count1'],
  methods: {
    handleClick2() {
      this.$emit('update:count', this.count + 1);
    },
    handleClick3() {
      this.$emit('update:count1', this.count1 + 10);
    },
  },
  template: `
  <div @click="handleClick2">{{count}}</div>
  <div @click="handleClick3">{{count1}}</div>
`,
});
```

## 组件命名

全局组件，建议「小写字母单词，单次间用横线间隔」；局部组件，建议「每个单次都用大写字母开头（驼峰命名）」。按这个规则命名，Vue 才能自动转换。

```JavaScript
// Vue 会自动将 Counter（局部组件）转为 counter（全局组件），将 HelloWorld（局部组件）转为 hello-world（局部组件）。
const Counter = {
  data() {
    return {
      count: 1,
    };
  },
  template: `<div @click="count += 1">{{count}}</div>`,
};

const HelloWorld = {
  template: `<div>hello world</div>`,
};

const app = Vue.createApp({
  // 引入局部组件（需放在引入之前）
  components: {
    // 手动定位
    // counter: Counter,
    // 'hello-world': HelloWorld,
    Counter,
    HelloWorld,
  },
  template: `
  <div>
    <hello-world />11111111
    <counter />222222
  </div>
`,
});
```

## CDN 使用 vue

```html
<script
  src="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/3.2.31/vue.global.min.js"
  type="application/javascript"
></script>
<div id="app">{{ message }}</div>

<script>
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: "Hello Vue!",
      };
    },
  }).mount("#app");
</script>
```

使用 `<div v-html="html"></div>` 来引入 html 元素，功能类似于 `innerHTML`，不能加载外部 HTML，实现 `<?php echo file_get_contents("https://docs.manictime.com/win-client/faq"); ?>` 类似的功能。
