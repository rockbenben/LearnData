---
article: false
title: HTML
icon: html
order: 1
---

HTTPS 网页中，js、css、gif 等文件都必须要使用 https，否则会加载报错，图片可以不使用 https。

## 基础知识

### 相对路径

```javascript
/ 根目录（electron 不适用）
./ 当前目录（可省略不写）
../ 父级目录（返回到上一级目录）
../../ 祖父级目录（返回两级目录）
```

### 反义、转义字符

一些字符在 HTML 中拥有特殊的含义，如果我们希望浏览器正确地显示这些字符，我们必须在 HTML 源码中插入字符实体。

| 显示结果 | 描述   | 实体名称 | 实体编号 |
| -------- | ------ | -------- | -------- |
|          | 空格   | \&nbsp;  | \&#160;  |
| <        | 小于号 | \&lt;    | \&#60;   |
| >        | 大于号 | \&gt;    | \&#62;   |
| &        | 和号   | \&amp;   | \&#38;   |
| "        | 引号   | \&quot;  | \&#34;   |
| '        | 撇号   | \&apos;  | \&#39;   |

## JavaScript 插件

- [font-awesome](https://fontawesome.com/)：图标字体。
- [Layui](https://layuion.com/)：开源模块化前端 UI 组件库。
- [toastr.js](https://github.com/CodeSeven/toastr)：通知提示。
- [popper.js](https://popper.js.org/)：一个轻量级的库用于管理工具提示和弹窗效果。
- [Day.js](https://dayjs.gitee.io/docs/zh-CN/get-set/get-set)：时间输入转换，支持时间戳，格式化时间、过去时间展示、解决因时区变更。
- [list.js](https://github.com/javve/list.js)：实时搜索页面，并直接显示结果页面。为列表、表格或其他任何 HTMLL 标签增加了搜索，排序，过滤器和灵活性等元素。网页中会自动会大段空格压缩为一个空格，不用特意替换。
- [watermark.js](https://github.com/saucxs/watermark-dom)：网页文字水印。
- [codemirror](https://codemirror.net/)：代码编辑器，为 textarea 加行号。^[[开源 JavaScript 插件和库](https://www.cnblogs.com/zhnaglei/p/6697638.html)]

### 功能加强

- [clipboard.js](https://clipboardjs.com/)：复制到剪贴板方式，无需 Flash。
- [FileSaver.js](https://github.com/eligrey/FileSaver.js)：导出为本地文件，需手动指定路径。
- [filepond](https://github.com/pqina/filepond)：一个 JavaScript 文件上传库，可以上传拖入的任何内容，具有体积小、上传快、方便的文件管理等特点。
- [timecat.js](https://github.com/oct16/TimeCat)：一款 JS 的网页录屏工具。参考了游戏录像的原理而实现的渲染引擎，生成的录像文件只有传统视频的百分之一！还可以在录制语音的同时自动生成字幕，导出的视频文件可以跨端播放。

### 小游戏代码

- [emoji-minesweeper](https://github.com/muan/emoji-minesweeper)：Emoji 符号的扫雷游戏。代码很简短，游戏创意很酷。寥寥 300+ 行代码实现该游戏，简短易于初学者学习。
- [HueJumper2k](https://github.com/KilledByAPixel/HueJumper2k)：JS 实现的 2KB 大小的 3D 赛车游戏。
- [battle-city](https://github.com/shinima/battle-city)：基于 React 的经典坦克大战。
- [react-tetris](https://github.com/chvin/react-tetris)：逼真的俄罗斯方块。

## CSS 样式

CSS 样式：[You-need-to-know-css](https://lhammer.cn/You-need-to-know-css/#/zh-cn/)

### 图片

图片增加属性，自动扩展宽高。

```html
<img src="<https://tc.seoipo.com/xxx.png>" style="width:50%; height:50%;" />
<img src="<https://tc.seoipo.com/xxx.png>" width="100" height="100" />

<!-- bootstrap 下自动控制图片大小 -->
<img src="<https://tc.seoipo.com/xxx.png>" class="img-fluid" />
```

图片链接为空时，去除图片所占区域，并防止出现空边框。

```html
<style type="text/css">
  img[src=""],
  img:not([src]) {
    opacity: 0;
    width: 0;
    height: 0;
  }
</style>
```

当图床图片无法显示时，尝试屏蔽自己网站的 referrer，在源码中添加：`<meta name="referrer" content="no-referrer" />`。

### 纯色背景

body 铺满页面，添加纯色背景。

```html
<style>
  body {
    background-color: #222b3a;
  }
  html,
  body {
    height: 100%;
  }
</style>
```

或使用 bootstrap 的样式`class="bg-light"`。

### 鼠标经过变色

鼠标经过重链接，则该区域变色。

```css
.tg td a:hover {
  background: #f29901;
  display: block;
}
```

### 隐藏元素

隐藏网页元素

```bash
# 将元素的显示设为无，元素在网页中不占任何的位置。
style="display:none;"
# 将元素隐藏，但是元素在网页中的位置还是被占着。
style="visibility:hidden;"

# 显示隐藏元素
$('#hidden_sort').show();
# 继续隐藏#hidden_sort
$('#hidden_sort').hide();

<div id="hidden_alert" style="display:none;" class="col-12 alert alert-primary" role="alert">标题数过大</div>
# 当无法使用，继续隐藏#hidden_sort
document.getElementById('hidden_alert').style.display="none";
document.getElementById('hidden_alert').style.display="block";

# 显示 div span 的文本内容
hidden_alert.textContent="标题数超过，请减少标题数或取消勾选「避重」";
```

### 高亮

对选择文章进行着色高亮。

```html
<a style="color: #FF0000;">xxx</a>
```

## 页面布局

### 自适应布局

自适应布局以 Bootstrap 为主，具体说明参考 [Bootstrap 文档](https://getbootstrap.com/docs/5.1/utilities/spacing/)。

```css
# 分别为距离上下左右，
class="mt-5 mb-5 ms-4 me-4"

# 修改间距
style="margin-top:-15px;margin-bottom:-15px"

# 图片自动拉伸宽度
style="background-size:contain|cover;width:100%;height:auto;"

# 视频将宽度设置大些，然后让其自动缩放
width="2400px"
```

### 客户端自适应

判断设备是移动还是 PC，然后显示不同样式内容。

```html
<script>
  window.onload = function () {
    browserRedirect();
  };
  function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (
      bIsIpad ||
      bIsIphoneOs ||
      bIsMidp ||
      bIsUc7 ||
      bIsUc ||
      bIsAndroid ||
      bIsCE ||
      bIsWM
    ) {
      //移动端页面
      $("#mobile").show();
      $("#pc").hide();
    } else {
      //pc 端页面
      $("#mobile").hide();
      $("#pc").show();
    }
  }
</script>
<div id="pc" style="display: none;">
  <img
    src="../upload/202108/1629972325344278.png"
    title=""
    data-width="1920"
    data-height="1080"
  />
</div>
<div id="mobile" style="text-align:center;display: none;">
  <img
    src="http://iluminage-cdn.oss-cn-shanghai.aliyuncs.com/upload/202108/1628149761.png"
  />
</div>
```

### 本地压缩 HTML

[html-minifier](https://github.com/kangax/html-minifier) 能在本地批量压缩 HTML、CSS 和 JavaScript 源码。

```shell
# 全局安装 html-minifier
npm install html-minifier -g
# 终端中执行压缩命令，默认压缩 input 下所有文件，压缩选项参照 http://kangax.github.io/html-minifier/
html-minifier --collapse-boolean-attributes --collapse-whitespace --decode-entities --no-html5 --minify-css true --minify-js true --process-conditional-comments --process-scripts text/html --remove-attribute-quotes --remove-comments --remove-empty-attributes --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-style-link-type-attributes --remove-tag-whitespace --sort-attributes --sort-class-name --trim-custom-fragments --use-short-doctype --input-dir D:\Backup\raw --output-dir D:\Backup\1
```
