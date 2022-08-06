---
article: false
title: HTML
icon: html
order: 1
---

HTTPS 网页中的 js、css、gif 等文件都必须要使用 https，否则无法加载。加密网页中的图片可以不使用 https。

- CSS 样式：[You-need-to-know-css](https://lhammer.cn/You-need-to-know-css/#/zh-cn/)

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

## CSS 样式

### 图片

图片增加属性，自动扩展宽高。

```html
<img src="<http://tc.seoipo.com/xxx.png>" style="width:50%; height:50%;" />
<img src="<http://tc.seoipo.com/xxx.png>" width="100" height="100" />

# bootstrap 下自动控制图片大小
<img src="<http://tc.seoipo.com/xxx.png>" class="img-fluid" />
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

## 自适应布局

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

## 客户端自适应

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

## js 应用

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

clipboardjs 可复制隐藏区域内容

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
