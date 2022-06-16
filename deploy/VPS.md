# VPS 服务器

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
