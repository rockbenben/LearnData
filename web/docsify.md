# docsify

[docsify](https://docsify.js.org/#/zh-cn/) 是一个神奇的文档网站生成器，可以快速帮你将 md 文档生成为网站。

> CDN 默认是有缓存的，如果文件更新，访问的可能不是最新的文件。•我设置了 routerMode 为 history，使用 CDN 访问非首页，再次刷新会找不到文件。•如果开启了 relativePath: true，文件可以找到，但是侧栏上边的标题点击又有点问题。

如果 SSL 链接 404 报错，显示「There isn't a GitHub Pages site here」，则目录中加入`CNAME`文件。

## [用法](https://github.com/docsifyjs/docsify-cli)

`<path>` 默认为当前路径，可使用子文件夹指定路径，如`./docs`或`docs`。`[]`为可省略命令区，无实际作用，输出时需要去除。

### Serve 启动

如果你想在电脑上查看 docsify 页面，可执行 serve 架构命令，在本地主机上运行服务。

```shell
docsify serve <path> [--open false] [--port 3000]
```

默认本地端口为 3000，也可以指定端口。

### 生成侧边栏

```shell
docsify generate <path> [--sidebar _sidebar.md]
```

遍历指定目录及其子目录的所有 markdown 文件，并生成全路径的 \_sidebar.md。

`<path>` 不能省略，需指定子文件夹路径。
