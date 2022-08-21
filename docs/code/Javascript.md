---
article: false
title: Javascript
icon: javascript
order: 2
---

## 常用函数

```javascript
document.getElementById()
document.getElementsByClassName("v-modal")[0]
document.getElementsByTagName("body")[0].remove();   //通过 Tagname 获取元素，删除指定元素
for (var i=0;i<cars.length;i++) {document.write(cars[i] + "<br>");}   //循环语句，i++会在代码被执行后增加一个值
break; //跳出当前循环但继续函数

//js 暂停
while (true){
    //100 毫秒延时
    setTimeout(f1,100)
    //直接跳出循环和函数
    return;
}

//截取中间的字符串，A 有多少字符就需要加多少位置
str = str.substring(str.indexOf("A") + 1,str.indexOf("B"))

//取特定字符前后的字符串
var ture_tkl01 = taokouling.value.trim().split('打')[0];
//取第 4 位后的字符串 (4 代表开始位置，相当于从 5 开始截取到尾部)
var ture_tkl = ture_tkl01.substring(4);

//报错处理
function f1(){
    try{
        if (document.getElementById("pro-operation").getElementsByClassName("product-button02 disabled")[0].innerHTML.indexOf("立即申购")!=-1) {
            window.location.reload();
        }else{
            window.location.reload();
        }
    }catch(e){
        //下单
        document.getElementById("product-operation").getElementsByClassName("product-button02")[0].click();
    }
}

//js 函数为同步处理，只有 if else、setTimeour、for each 等函数才能按序运行

//setInterval 不要包含多个函数，否则 clearInterval 容易出错

//替换，不添加/g，则替换只发生一次
text.value = text.value.replace(" ", "----");
//全局替换，如果使用/\s/g，则换行符也会被替换
text.value = text.value.replace(/ /g, "----");

//载入完成后，自动或取焦点。textSour 为元素 id，需配合 jquery
window.onload = function(){
 textSour.focus();
};
//按钮点击后使用函数
$("#clearEmoji").click(function () {
}

//去除每行首尾空格，支持特殊字符，首尾的空格、制表符、特殊字符的组合都倍清除
strResult += split_result[i].replace(/(^[\t\s]*)|([\t\s]*$)/g, "") + '\n';
```

## JavaScript 对象

对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。
对象一定要用**英文冒号**来注明，否则整段代码失效。属性由逗号分隔：

```javascript
var person={firstname:"John", lastname:"Doe", id:5566};
//对象属性有两种寻址方式
name=person.lastname;
name=person["lastname"];

//对象的方法定义了一个函数，并作为对象的属性存储。对象方法通过添加 () 调用 (作为一个函数)。
<p id="对象"></p>
<script>
 var person ={
  firstname:"名",
  lastname:"姓",
  fullname:function()
  {
   return this.lastname+this.firstname
  },       //不同属性间需要加逗号隔开
  eyecolor:"blue"};
 document.getElementById("对象").innerHTML=
 person.fullname()+"眼睛颜色是"+person.eyecolor  ;
</script>
```

### 全局变量

js 的全部变量要用 `window.` 来定义。如果变量在函数内没有声明（没有使用 var），该变量为全局变量。

局部变量：在函数中通过 var 声明的变量。全局变量：在函数外通过 var 声明的变量。

没有声明就使用的变量，默认为全局变量，不论这个变量在哪被使用。

```javascript
<p id="demo"></p>
<script>
myFunction();
document.getElementById("demo").innerHTML = "我可以显示 " + carName;
function myFunction()
{
    carName = "Volvo";   //如果在这添加 var，声明变量，则变为局部变量，无法调用
}
</script>
```

### 变量类型

当您声明新变量时，可以使用关键词 "new" 来声明其类型：

```javascript
var carname = new String();
字符串;
var x = new Number();
数字;
var y = new Boolean();
布尔;
var cars = new Array();
数组;
var person = new Object();
对象;
var y = new String("John");
对象;

// 数据赋值
var length = 16; // Number 通过数字字面量赋值
var points = x * 10; // Number 通过表达式字面量赋值
var lastName = "Johnson"; // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"]; // Array  通过数组字面量赋值
var person = { firstName: "John", lastName: "Doe" }; // Object 通过对象字面量赋值
```

## 运算符

```javascript
//后置++是将自身的值赋给新变量，然后才自身加 1.
//前置++是将自身加 1 的值赋值给新变量，同时自身也加 1；
int a;
a=i++;//将 i 的值赋值给 a，即 a=i；然后再执行 i=i+1；也就是【a=i++;】与【a=i; i=i+1;】等价。
a=++i;//将 i+1 的值赋给 a，即 a=i+1;然后再执行 i=i+1；也就是【a=++i;】与【a=i+1;i=i+1;】等价。
```

```javascript
// 描述 (x=5) 比较
// == 等于
x==8 false
x==5 true
// === 绝对等于（值和类型均相等）
x==="5" false
x===5 true
// != 不等于
x!=8 true
// !== 不绝对等于（值和类型有一个不相等，或两个都不相等）
x!=="5" true
x!==5 false

&& 且
|| 或
```

## JavaScript 应用

### 取随机值

```javascript
//[任意随机值](https://www.runoob.com/w3cnote/js-random.html)
Math.floor(Math.random() * (max - min + 1) + min);

//
var arr01 = textSour.value.split("\n");
//分割字符数组，主要用于淘口令网
var arr01 = ["打", "哒", "达"];
//循环语句，i++会在代码被执行后增加一个值
for (var x = 0; x < arr01.length; x++) {
  //存在循环后分割，并跳出循环
  if (taokouling.value.indexOf(arr01[x]) != -1) {
    ture_tkl01 = taokouling.value.trim().split(arr01[x])[0];
    break;
  }
}

// https://segmentfault.com/q/1010000006819233 //不重复获取
for (var i = 0; i < rn; ++i) {
  var index = ~~(Math.random() * count) + i;
  result[i] = split_result[index];
  split_result[index] = split_result[i];
  count--;
  strResult = strResult + result[i] + "\n";
}
```

### 文本框清空

input 文本框获取焦点后，自动清空内容。

```javascript
onfocus = "this.value=''";
```

### 内部文件读取

以下代码用于服务器读取文档，本地无法直接使用。

```javascript
$.ajax({
  url: "./xx.txt",
  success: function (result) {
    var strs = result.split("\n");
    addTableTR(strs, true);
  },
});
```

### 选择框状态

调用 attr 给选择框 radio、checkbox 添加 checked 属性和移调，并不能真实改变不能单选和选中框的真实状态，可用下方代码改变。^[[radio、checkbox 选中状态研究](https://www.cnblogs.com/jimloveq/p/10602060.html)]

```javascript
//取消导航项的 checked，同类名称都会取消 checked 状态
$("input[name=daoruRadio]").prop("checked", false);
//点击对映 id 的单选框
$("input[id=Radio1]").prop("checked", true);
```

### 复制隐藏内容

clipboardjs 可复制隐藏区域内容。

```javascript
//新设将粘贴板设在特定按钮上，#copyresult 为按钮 id，#CopyValue 为区域 id
var clipboard2 = new ClipboardJS("#copyresult", {
  text: function () {
    return $("#CopyValue").val();
  },
});

clipboard2.on("success", function (e) {
  toastr["success"]("复制成功！");
});

clipboard2.on("error", function (e) {
  toastr["error"]("复制失败，请手动重新复制！");
});
```

### 引入 html 页面

利用 link 标签的 rel=import 引入 html 页面

```html
<link rel="import" href="header.html" />
```

### 视频全屏弹窗

品牌首页经常需要在动加载视频，可将下方代码放入首页源码的 body 区。

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.staticfile.org/layer/3.5.1/theme/default/layer.min.css"
/>
<script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/layer/3.5.1/layer.min.js"></script>
<script type="text/javascript">
  window.onload = function () {
    //页面一打开就执行，放入 reay 是为了 Layer 所需配件（css、扩展模块）加载完毕
    layer.ready(function () {
      //iframe 层 - 多媒体
      layer.open({
        //type 值为 1 时，则可直接套用视频
        type: 2,
        title: false,
        area: ["630px", "360px"],
        shade: 0.8,
        closeBtn: 0,
        shadeClose: true,
        //视频链接
        content:
          "https://iluminage-cdn.oss-cn-shanghai.aliyuncs.com/brand-video.MP4",
      });
    });
  };
</script>
```

插入视频代码

```html
<div style="line-height:0;font-size:0">
  <video
    width="100%"
    height="100%"
    controls="controls"
    autoplay="autoplay"
    autobuffer="autobuffer"
    src="https://iluminage-cdn.oss-cn-shanghai.aliyuncs.com/brand-video.MP4"
  ></video>
</div>
```
