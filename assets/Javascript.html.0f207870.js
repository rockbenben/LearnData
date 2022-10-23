import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as l,a as n,b as a,d as e,e as c,r as o}from"./app.50d009b6.js";const u={},r={href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://jkchao.github.io/typescript-book-chinese/",target:"_blank",rel:"noopener noreferrer"},p=c(`<h2 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h2><p><code>sayHi(){console.log(&quot;Hi&quot;);}</code> \u7B49\u540C\u4E8E <code>sayHi:function(){console.log(&quot;Hi&quot;);}</code>\u3002</p><p><code>let</code> \u58F0\u660E\u7684\u53D8\u91CF\u53EA\u5728 let \u547D\u4EE4\u6240\u5728\u7684\u4EE3\u7801\u5757\u5185\u6709\u6548\uFF0C\u5C24\u5176\u9002\u5408\u7528\u4E8E <code>for</code> \u5FAA\u73AF\u7684\u8BA1\u6570\u5668\u3002</p><p><code>const</code> \u58F0\u660E\u4E00\u4E2A\u53EA\u8BFB\u7684\u5E38\u91CF\uFF0C\u4E00\u65E6\u58F0\u660E\uFF0C\u5E38\u91CF\u7684\u503C\u5C31\u4E0D\u80FD\u6539\u53D8\u3002</p><p><code>=&gt;</code> \u662F\u6307\u7BAD\u5934\u51FD\u6570\uFF0C\u662F\u4E00\u79CD\u51FD\u6570\u7684\u7B80\u5199\u65B9\u5F0F\uFF0C\u8BED\u6CD5\u4E3A <code>(\u53C2\u6570)=&gt;{\u51FD\u6570\u4F53};</code>\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>x =&gt; 2x
//\u7B49\u4E8E\u4E0B\u65B9\u51FD\u6570
function (x) {
 return 2x;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u6570\u636E\u7ED3\u6784</h2><p><code>Set</code> \u7C7B\u4F3C\u4E8E\u6570\u7EC4\uFF0C\u4F46\u662F\u6210\u5458\u7684\u503C\u90FD\u662F\u552F\u4E00\u7684\uFF0C\u6CA1\u6709\u91CD\u590D\u7684\u503C\u3002\u5411 Set \u52A0\u5165\u503C\u7684\u65F6\u5019\uFF0C\u4E0D\u4F1A\u53D1\u751F\u7C7B\u578B\u8F6C\u6362\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u4F8B\u4E00
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// \u4F8B\u4E8C
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Map</code> \u7C7B\u4F3C\u4E8E\u5BF9\u8C61\uFF0C\u4E5F\u662F\u952E\u503C\u5BF9\u7684\u96C6\u5408\uFF0C\u4F46\u662F\u201C\u952E\u201D\u7684\u8303\u56F4\u4E0D\u9650\u4E8E\u5B57\u7B26\u4E32\uFF0C\u5404\u79CD\u7C7B\u578B\u7684\u503C\uFF08\u5305\u62EC\u5BF9\u8C61\uFF09\u90FD\u53EF\u4EE5\u5F53\u4F5C\u952E\u3002</p><p>Map \u7684\u952E\u5B9E\u9645\u4E0A\u662F\u8DDF\u5185\u5B58\u5730\u5740\u7ED1\u5B9A\u7684\uFF0C\u53EA\u8981\u5185\u5B58\u5730\u5740\u4E0D\u4E00\u6837\uFF0C\u5C31\u89C6\u4E3A\u4E24\u4E2A\u952E\u3002\u56E0\u6B64\u6709\u65F6\u770B\u8D77\u6765\u662F\u9488\u5BF9\u540C\u4E00\u4E2A\u952E\uFF0C\u4F46\u5B9E\u9645\u4E0A\u8FD9\u662F\u4E24\u4E2A\u4E0D\u540C\u7684\u6570\u7EC4\u5B9E\u4F8B\uFF0C\u5185\u5B58\u5730\u5740\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u56E0\u6B64 get \u65B9\u6CD5\u65E0\u6CD5\u8BFB\u53D6\u8BE5\u952E\uFF0C\u8FD4\u56DE undefined\u3002</p><h2 id="\u5E38\u7528\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u51FD\u6570" aria-hidden="true">#</a> \u5E38\u7528\u51FD\u6570</h2><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>document.getElementById()
document.getElementsByClassName(&quot;v-modal&quot;)[0]
document.getElementsByTagName(&quot;body&quot;)[0].remove();   //\u901A\u8FC7 Tagname \u83B7\u53D6\u5143\u7D20\uFF0C\u5220\u9664\u6307\u5B9A\u5143\u7D20
for (var i=0;i&lt;cars.length;i++) {document.write(cars[i] + &quot;&lt;br&gt;&quot;);}   //\u5FAA\u73AF\u8BED\u53E5\uFF0Ci++\u4F1A\u5728\u4EE3\u7801\u88AB\u6267\u884C\u540E\u589E\u52A0\u4E00\u4E2A\u503C
break; //\u8DF3\u51FA\u5F53\u524D\u5FAA\u73AF\u4F46\u7EE7\u7EED\u51FD\u6570

//js \u6682\u505C
while (true){
    //100 \u6BEB\u79D2\u5EF6\u65F6
    setTimeout(f1,100)
    //\u76F4\u63A5\u8DF3\u51FA\u5FAA\u73AF\u548C\u51FD\u6570
    return;
}

//\u622A\u53D6\u4E2D\u95F4\u7684\u5B57\u7B26\u4E32\uFF0CA \u6709\u591A\u5C11\u5B57\u7B26\u5C31\u9700\u8981\u52A0\u591A\u5C11\u4F4D\u7F6E
str = str.substring(str.indexOf(&quot;A&quot;) + 1,str.indexOf(&quot;B&quot;))

//\u53D6\u7279\u5B9A\u5B57\u7B26\u524D\u540E\u7684\u5B57\u7B26\u4E32
var ture_tkl01 = taokouling.value.trim().split(&#39;\u6253&#39;)[0];
//\u53D6\u7B2C 4 \u4F4D\u540E\u7684\u5B57\u7B26\u4E32 (4 \u4EE3\u8868\u5F00\u59CB\u4F4D\u7F6E\uFF0C\u76F8\u5F53\u4E8E\u4ECE 5 \u5F00\u59CB\u622A\u53D6\u5230\u5C3E\u90E8)
var ture_tkl = ture_tkl01.substring(4);

//\u62A5\u9519\u5904\u7406
function f1(){
    try{
        if (document.getElementById(&quot;pro-operation&quot;).getElementsByClassName(&quot;product-button02 disabled&quot;)[0].innerHTML.indexOf(&quot;\u7ACB\u5373\u7533\u8D2D&quot;)!=-1) {
            window.location.reload();
        }else{
            window.location.reload();
        }
    }catch(e){
        //\u4E0B\u5355
        document.getElementById(&quot;product-operation&quot;).getElementsByClassName(&quot;product-button02&quot;)[0].click();
    }
}

//js \u51FD\u6570\u4E3A\u540C\u6B65\u5904\u7406\uFF0C\u53EA\u6709 if else\u3001setTimeour\u3001for each \u7B49\u51FD\u6570\u624D\u80FD\u6309\u5E8F\u8FD0\u884C

//setInterval \u4E0D\u8981\u5305\u542B\u591A\u4E2A\u51FD\u6570\uFF0C\u5426\u5219 clearInterval \u5BB9\u6613\u51FA\u9519

//\u66FF\u6362\uFF0C\u4E0D\u6DFB\u52A0/g\uFF0C\u5219\u66FF\u6362\u53EA\u53D1\u751F\u4E00\u6B21
text.value = text.value.replace(&quot; &quot;, &quot;----&quot;);
//\u5168\u5C40\u66FF\u6362\uFF0C\u5982\u679C\u4F7F\u7528/\\s/g\uFF0C\u5219\u6362\u884C\u7B26\u4E5F\u4F1A\u88AB\u66FF\u6362
text.value = text.value.replace(/ /g, &quot;----&quot;);

//\u8F7D\u5165\u5B8C\u6210\u540E\uFF0C\u81EA\u52A8\u6216\u53D6\u7126\u70B9\u3002textSour \u4E3A\u5143\u7D20 id\uFF0C\u9700\u914D\u5408 jquery
window.onload = function(){
 textSour.focus();
};
//\u6309\u94AE\u70B9\u51FB\u540E\u4F7F\u7528\u51FD\u6570
$(&quot;#clearEmoji&quot;).click(function () {
}

//\u53BB\u9664\u6BCF\u884C\u9996\u5C3E\u7A7A\u683C\uFF0C\u652F\u6301\u7279\u6B8A\u5B57\u7B26\uFF0C\u9996\u5C3E\u7684\u7A7A\u683C\u3001\u5236\u8868\u7B26\u3001\u7279\u6B8A\u5B57\u7B26\u7684\u7EC4\u5408\u90FD\u500D\u6E05\u9664
strResult += split_result[i].replace(/(^[\uE600\uE601\\t\\s]*)|([\uE600\uE601\\t\\s]*$)/g, &quot;&quot;) + &#39;\\n&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#javascript-\u5BF9\u8C61" aria-hidden="true">#</a> JavaScript \u5BF9\u8C61</h2><p>\u5BF9\u8C61\u7531\u82B1\u62EC\u53F7\u5206\u9694\u3002\u5728\u62EC\u53F7\u5185\u90E8\uFF0C\u5BF9\u8C61\u7684\u5C5E\u6027\u4EE5\u540D\u79F0\u548C\u503C\u5BF9\u7684\u5F62\u5F0F (name : value) \u6765\u5B9A\u4E49\u3002 \u5BF9\u8C61\u4E00\u5B9A\u8981\u7528<strong>\u82F1\u6587\u5192\u53F7</strong>\u6765\u6CE8\u660E\uFF0C\u5426\u5219\u6574\u6BB5\u4EE3\u7801\u5931\u6548\u3002\u5C5E\u6027\u7531\u9017\u53F7\u5206\u9694\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>var person={firstname:&quot;John&quot;, lastname:&quot;Doe&quot;, id:5566};
//\u5BF9\u8C61\u5C5E\u6027\u6709\u4E24\u79CD\u5BFB\u5740\u65B9\u5F0F
name=person.lastname;
name=person[&quot;lastname&quot;];

//\u5BF9\u8C61\u7684\u65B9\u6CD5\u5B9A\u4E49\u4E86\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u4F5C\u4E3A\u5BF9\u8C61\u7684\u5C5E\u6027\u5B58\u50A8\u3002\u5BF9\u8C61\u65B9\u6CD5\u901A\u8FC7\u6DFB\u52A0 () \u8C03\u7528 (\u4F5C\u4E3A\u4E00\u4E2A\u51FD\u6570)\u3002
&lt;p id=&quot;\u5BF9\u8C61&quot;&gt;&lt;/p&gt;
&lt;script&gt;
 var person ={
  firstname:&quot;\u540D&quot;,
  lastname:&quot;\u59D3&quot;,
  fullname:function()
  {
   return this.lastname+this.firstname
  },       //\u4E0D\u540C\u5C5E\u6027\u95F4\u9700\u8981\u52A0\u9017\u53F7\u9694\u5F00
  eyecolor:&quot;blue&quot;};
 document.getElementById(&quot;\u5BF9\u8C61&quot;).innerHTML=
 person.fullname()+&quot;\u773C\u775B\u989C\u8272\u662F&quot;+person.eyecolor  ;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u5168\u5C40\u53D8\u91CF</h3><p>js \u7684\u5168\u90E8\u53D8\u91CF\u8981\u7528 <code>window.</code> \u6765\u5B9A\u4E49\u3002\u5982\u679C\u53D8\u91CF\u5728\u51FD\u6570\u5185\u6CA1\u6709\u58F0\u660E\uFF08\u6CA1\u6709\u4F7F\u7528 var\uFF09\uFF0C\u8BE5\u53D8\u91CF\u4E3A\u5168\u5C40\u53D8\u91CF\u3002</p><p>\u5C40\u90E8\u53D8\u91CF\uFF1A\u5728\u51FD\u6570\u4E2D\u901A\u8FC7 var \u58F0\u660E\u7684\u53D8\u91CF\u3002\u5168\u5C40\u53D8\u91CF\uFF1A\u5728\u51FD\u6570\u5916\u901A\u8FC7 var \u58F0\u660E\u7684\u53D8\u91CF\u3002</p><p>\u6CA1\u6709\u58F0\u660E\u5C31\u4F7F\u7528\u7684\u53D8\u91CF\uFF0C\u9ED8\u8BA4\u4E3A\u5168\u5C40\u53D8\u91CF\uFF0C\u4E0D\u8BBA\u8FD9\u4E2A\u53D8\u91CF\u5728\u54EA\u88AB\u4F7F\u7528\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;p id=&quot;demo&quot;&gt;&lt;/p&gt;
&lt;script&gt;
myFunction();
document.getElementById(&quot;demo&quot;).innerHTML = &quot;\u6211\u53EF\u4EE5\u663E\u793A &quot; + carName;
function myFunction()
{
    carName = &quot;Volvo&quot;;   //\u5982\u679C\u5728\u8FD9\u6DFB\u52A0 var\uFF0C\u58F0\u660E\u53D8\u91CF\uFF0C\u5219\u53D8\u4E3A\u5C40\u90E8\u53D8\u91CF\uFF0C\u65E0\u6CD5\u8C03\u7528
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u7C7B\u578B" aria-hidden="true">#</a> \u53D8\u91CF\u7C7B\u578B</h3><p>\u5F53\u60A8\u58F0\u660E\u65B0\u53D8\u91CF\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5173\u952E\u8BCD &quot;new&quot; \u6765\u58F0\u660E\u5176\u7C7B\u578B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>var carname = new String();
\u5B57\u7B26\u4E32;
var x = new Number();
\u6570\u5B57;
var y = new Boolean();
\u5E03\u5C14;
var cars = new Array();
\u6570\u7EC4;
var person = new Object();
\u5BF9\u8C61;
var y = new String(&quot;John&quot;);
\u5BF9\u8C61;

// \u6570\u636E\u8D4B\u503C
var length = 16; // Number \u901A\u8FC7\u6570\u5B57\u5B57\u9762\u91CF\u8D4B\u503C
var points = x * 10; // Number \u901A\u8FC7\u8868\u8FBE\u5F0F\u5B57\u9762\u91CF\u8D4B\u503C
var lastName = &quot;Johnson&quot;; // String \u901A\u8FC7\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u8D4B\u503C
var cars = [&quot;Saab&quot;, &quot;Volvo&quot;, &quot;BMW&quot;]; // Array  \u901A\u8FC7\u6570\u7EC4\u5B57\u9762\u91CF\u8D4B\u503C
var person = { firstName: &quot;John&quot;, lastName: &quot;Doe&quot; }; // Object \u901A\u8FC7\u5BF9\u8C61\u5B57\u9762\u91CF\u8D4B\u503C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26</h2><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>//\u540E\u7F6E++\u662F\u5C06\u81EA\u8EAB\u7684\u503C\u8D4B\u7ED9\u65B0\u53D8\u91CF\uFF0C\u7136\u540E\u624D\u81EA\u8EAB\u52A0 1.
//\u524D\u7F6E++\u662F\u5C06\u81EA\u8EAB\u52A0 1 \u7684\u503C\u8D4B\u503C\u7ED9\u65B0\u53D8\u91CF\uFF0C\u540C\u65F6\u81EA\u8EAB\u4E5F\u52A0 1\uFF1B
int a;
a=i++;//\u5C06 i \u7684\u503C\u8D4B\u503C\u7ED9 a\uFF0C\u5373 a=i\uFF1B\u7136\u540E\u518D\u6267\u884C i=i+1\uFF1B\u4E5F\u5C31\u662F\u3010a=i++;\u3011\u4E0E\u3010a=i; i=i+1;\u3011\u7B49\u4EF7\u3002
a=++i;//\u5C06 i+1 \u7684\u503C\u8D4B\u7ED9 a\uFF0C\u5373 a=i+1;\u7136\u540E\u518D\u6267\u884C i=i+1\uFF1B\u4E5F\u5C31\u662F\u3010a=++i;\u3011\u4E0E\u3010a=i+1;i=i+1;\u3011\u7B49\u4EF7\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u63CF\u8FF0 (x=5) \u6BD4\u8F83
// == \u7B49\u4E8E
x==8 false
x==5 true
// === \u7EDD\u5BF9\u7B49\u4E8E\uFF08\u503C\u548C\u7C7B\u578B\u5747\u76F8\u7B49\uFF09
x===&quot;5&quot; false
x===5 true
// != \u4E0D\u7B49\u4E8E
x!=8 true
// !== \u4E0D\u7EDD\u5BF9\u7B49\u4E8E\uFF08\u503C\u548C\u7C7B\u578B\u6709\u4E00\u4E2A\u4E0D\u76F8\u7B49\uFF0C\u6216\u4E24\u4E2A\u90FD\u4E0D\u76F8\u7B49\uFF09
x!==&quot;5&quot; true
x!==5 false

&amp;&amp; \u4E14
|| \u6216
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#javascript-\u5E94\u7528" aria-hidden="true">#</a> JavaScript \u5E94\u7528</h2><h3 id="\u53D6\u968F\u673A\u503C" tabindex="-1"><a class="header-anchor" href="#\u53D6\u968F\u673A\u503C" aria-hidden="true">#</a> \u53D6\u968F\u673A\u503C</h3><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>//[\u4EFB\u610F\u968F\u673A\u503C](https://www.runoob.com/w3cnote/js-random.html)
Math.floor(Math.random() * (max - min + 1) + min);

//
var arr01 = textSour.value.split(&quot;\\n&quot;);
//\u5206\u5272\u5B57\u7B26\u6570\u7EC4\uFF0C\u4E3B\u8981\u7528\u4E8E\u6DD8\u53E3\u4EE4\u7F51
var arr01 = [&quot;\u6253&quot;, &quot;\u54D2&quot;, &quot;\u8FBE&quot;];
//\u5FAA\u73AF\u8BED\u53E5\uFF0Ci++\u4F1A\u5728\u4EE3\u7801\u88AB\u6267\u884C\u540E\u589E\u52A0\u4E00\u4E2A\u503C
for (var x = 0; x &lt; arr01.length; x++) {
  //\u5B58\u5728\u5FAA\u73AF\u540E\u5206\u5272\uFF0C\u5E76\u8DF3\u51FA\u5FAA\u73AF
  if (taokouling.value.indexOf(arr01[x]) != -1) {
    ture_tkl01 = taokouling.value.trim().split(arr01[x])[0];
    break;
  }
}

// https://segmentfault.com/q/1010000006819233 //\u4E0D\u91CD\u590D\u83B7\u53D6
for (var i = 0; i &lt; rn; ++i) {
  var index = ~~(Math.random() * count) + i;
  result[i] = split_result[index];
  split_result[index] = split_result[i];
  count--;
  strResult = strResult + result[i] + &quot;\\n&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6587\u672C\u6846\u6E05\u7A7A" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u6846\u6E05\u7A7A" aria-hidden="true">#</a> \u6587\u672C\u6846\u6E05\u7A7A</h3><p>input \u6587\u672C\u6846\u83B7\u53D6\u7126\u70B9\u540E\uFF0C\u81EA\u52A8\u6E05\u7A7A\u5185\u5BB9\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>onfocus = &quot;this.value=&#39;&#39;&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5185\u90E8\u6587\u4EF6\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#\u5185\u90E8\u6587\u4EF6\u8BFB\u53D6" aria-hidden="true">#</a> \u5185\u90E8\u6587\u4EF6\u8BFB\u53D6</h3><p>\u4EE5\u4E0B\u4EE3\u7801\u7528\u4E8E\u670D\u52A1\u5668\u8BFB\u53D6\u6587\u6863\uFF0C\u672C\u5730\u65E0\u6CD5\u76F4\u63A5\u4F7F\u7528\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>$.ajax({
  url: &quot;./xx.txt&quot;,
  success: function (result) {
    var strs = result.split(&quot;\\n&quot;);
    addTableTR(strs, true);
  },
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9009\u62E9\u6846\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u6846\u72B6\u6001" aria-hidden="true">#</a> \u9009\u62E9\u6846\u72B6\u6001</h3><p>\u8C03\u7528 attr \u7ED9\u9009\u62E9\u6846 radio\u3001checkbox \u6DFB\u52A0 checked \u5C5E\u6027\u548C\u79FB\u8C03\uFF0C\u5E76\u4E0D\u80FD\u771F\u5B9E\u6539\u53D8\u4E0D\u80FD\u5355\u9009\u548C\u9009\u4E2D\u6846\u7684\u771F\u5B9E\u72B6\u6001\uFF0C\u53EF\u7528\u4E0B\u65B9\u4EE3\u7801\u6539\u53D8\u3002<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>//\u53D6\u6D88\u5BFC\u822A\u9879\u7684 checked\uFF0C\u540C\u7C7B\u540D\u79F0\u90FD\u4F1A\u53D6\u6D88 checked \u72B6\u6001
$(&quot;input[name=daoruRadio]&quot;).prop(&quot;checked&quot;, false);
//\u70B9\u51FB\u5BF9\u6620 id \u7684\u5355\u9009\u6846
$(&quot;input[id=Radio1]&quot;).prop(&quot;checked&quot;, true);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u590D\u5236\u9690\u85CF\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u9690\u85CF\u5185\u5BB9" aria-hidden="true">#</a> \u590D\u5236\u9690\u85CF\u5185\u5BB9</h3><p>clipboardjs \u53EF\u590D\u5236\u9690\u85CF\u533A\u57DF\u5185\u5BB9\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>//\u65B0\u8BBE\u5C06\u7C98\u8D34\u677F\u8BBE\u5728\u7279\u5B9A\u6309\u94AE\u4E0A\uFF0C#copyresult \u4E3A\u6309\u94AE id\uFF0C#CopyValue \u4E3A\u533A\u57DF id
var clipboard2 = new ClipboardJS(&quot;#copyresult&quot;, {
  text: function () {
    return $(&quot;#CopyValue&quot;).val();
  },
});

clipboard2.on(&quot;success&quot;, function (e) {
  toastr[&quot;success&quot;](&quot;\u590D\u5236\u6210\u529F\uFF01&quot;);
});

clipboard2.on(&quot;error&quot;, function (e) {
  toastr[&quot;error&quot;](&quot;\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u91CD\u65B0\u590D\u5236\uFF01&quot;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F15\u5165-html-\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165-html-\u9875\u9762" aria-hidden="true">#</a> \u5F15\u5165 html \u9875\u9762</h3><p>\u5229\u7528 link \u6807\u7B7E\u7684 rel=import \u5F15\u5165 html \u9875\u9762</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>import<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header.html<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u89C6\u9891\u5168\u5C4F\u5F39\u7A97" tabindex="-1"><a class="header-anchor" href="#\u89C6\u9891\u5168\u5C4F\u5F39\u7A97" aria-hidden="true">#</a> \u89C6\u9891\u5168\u5C4F\u5F39\u7A97</h3><p>\u54C1\u724C\u9996\u9875\u7ECF\u5E38\u9700\u8981\u5728\u52A8\u52A0\u8F7D\u89C6\u9891\uFF0C\u53EF\u5C06\u4E0B\u65B9\u4EE3\u7801\u653E\u5165\u9996\u9875\u6E90\u7801\u7684 body \u533A\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.staticfile.org/layer/3.5.1/theme/default/layer.min.css<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/jquery/3.6.0/jquery.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.staticfile.org/layer/3.5.1/layer.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u9875\u9762\u4E00\u6253\u5F00\u5C31\u6267\u884C\uFF0C\u653E\u5165 reay \u662F\u4E3A\u4E86 Layer \u6240\u9700\u914D\u4EF6\uFF08css\u3001\u6269\u5C55\u6A21\u5757\uFF09\u52A0\u8F7D\u5B8C\u6BD5</span>
    layer<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//iframe \u5C42 - \u591A\u5A92\u4F53</span>
      layer<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">//type \u503C\u4E3A 1 \u65F6\uFF0C\u5219\u53EF\u76F4\u63A5\u5957\u7528\u89C6\u9891</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">area</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;630px&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;360px&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">shade</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
        <span class="token literal-property property">closeBtn</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">shadeClose</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//\u89C6\u9891\u94FE\u63A5</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span>
          <span class="token string">&quot;https://iluminage-cdn.oss-cn-shanghai.aliyuncs.com/brand-video.MP4&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D2\u5165\u89C6\u9891\u4EE3\u7801</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">line-height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>0</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>controls<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">autoplay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autoplay<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">autobuffer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autobuffer<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://iluminage-cdn.oss-cn-shanghai.aliyuncs.com/brand-video.MP4<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,51),v={class:"footnotes"},m={class:"footnotes-list"},b={id:"footnote1",class:"footnote-item"},k={href:"https://www.cnblogs.com/jimloveq/p/10602060.html",target:"_blank",rel:"noopener noreferrer"},h=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1);function q(g,f){const s=o("ExternalLinkIcon");return t(),l("div",null,[n("p",null,[a("JavaScript \u662F\u4E00\u79CD\u5177\u6709\u51FD\u6570\u4F18\u5148\u7684\u8F7B\u91CF\u7EA7\uFF0C\u89E3\u91CA\u578B\u6216\u5373\u65F6\u7F16\u8BD1\u578B\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u6700\u65B0\u6807\u51C6\u662F "),n("a",r,[a("ECMAScript 6.0"),e(s)]),a("\u3002\u867D\u7136\u5B83\u662F\u4F5C\u4E3A\u5F00\u53D1 Web \u9875\u9762\u7684\u811A\u672C\u8BED\u8A00\u800C\u51FA\u540D\uFF0C\u4F46\u662F\u5B83\u4E5F\u88AB\u7528\u5230\u4E86\u5F88\u591A\u975E\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\uFF0C\u5E76\u957F\u5E74\u5C45\u4E8E\u6700\u53D7\u6B22\u8FCE\u7F16\u7A0B\u8BED\u8A00\u6392\u884C\u699C\u699C\u9996\u3002")]),n("p",null,[a("\u63A8\u8350\u5B66\u4E60\u6D41\u7A0B\uFF1AJavaScript --> ES6 --> "),n("a",d,[a("TypeScript"),e(s)]),a("\u3002")]),p,n("section",v,[n("ol",m,[n("li",b,[n("p",null,[n("a",k,[a("radio\u3001checkbox \u9009\u4E2D\u72B6\u6001\u7814\u7A76"),e(s)]),a(),h])])])])])}const S=i(u,[["render",q],["__file","Javascript.html.vue"]]);export{S as default};
