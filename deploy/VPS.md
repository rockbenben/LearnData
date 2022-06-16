# VPS/网站修改

## [网站重定向](https://www.jb51.net/article/146957.htm)

更改配置后，需要 nginx 重载配置后生效

```bash
#隐性链接跳转
location /xx1 {proxy_pass <https://xxx.com/;>}

# huginn 设置中 location 添加 301 定向，兼容老路径链接
if ( $request_uri = "/users/1/web_requests/21/guoke.xml" ) {
rewrite ^ http://xxx.com/users/1/web_requests/19/guoke.xml permanent;
}

#只匹配主页，将主页跳转为其中一个子页面
location = / {
 rewrite https://xxx.com/ permanent;
}
```

## 网站字体

网站为了提高访问速度并保持设计的一致性，通常会选默认字体。这导致网站设计难以突出重点。针对这点，我通常会修改网站的导航栏字体，将其从默认字体改为`思源黑体-粗`。

1. 进入 [iconfont‑webfont](https://www.iconfont.cn/webfont)，输入导航栏内所有文字，并设置所需字体。
2. 点击「生成字体」后，在选中字体的下方，点击「本地下载」。
3. 将字体包上传到服务器，修改新字体的位置参数。
4. 在导航栏的`class`属性中添加`web-font`。

## 米拓

- 后台忘记密码，使用 [Metinfo 米拓重置工具](https://www.metinfo.cn/download/54.html)。
- metinfo 新版静态页会删除 index.html，后续都改用 index.php。
