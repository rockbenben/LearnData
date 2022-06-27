# Windows

## Windows 快捷键

| 快捷键             | 功能                                   |
| ------------------ | -------------------------------------- |
| Win 键 + 数字键    | 启动任务栏的快捷方式                   |
| Win 键 + D         | 显示桌面，再点击一次后恢复             |
| Win 键 + E         | 快速启动文件资源管理器                 |
| Win 键 + Tab       | 查看当前桌面打开的窗口和所有桌面       |
| Win + Ctrl + D     | 创建新的虚拟桌面，新桌面里没有打开窗口 |
| Win + Ctrl + 左/右 | 切换虚拟桌面                           |
| Win + I            | 系统设置                               |
| Win 键 + 向上键    | 最大化窗口 (传统桌面)                  |
| Win 键 + 向下键    | 最小化窗口 (传统桌面)                  |
| Win 键 + 向左键    | 将窗口最大化到屏幕的左侧 (传统桌面)    |
| Win 键 + 向右键    | 将窗口最大化到屏幕的右侧 (传统桌面)    |
| Ctrl+W             | 关闭标签页                             |
| Alt+F4             | 关闭当前程序窗口                       |

## 网页转桌面应用

### Chrome App

使用 Chrome 浏览器来给我们的网页生成一个「桌面应用」。

1. 用 Chrome 浏览器打开想要转换为「桌面客户端」的网页，将登录后正常使用状态的网页 URL 收藏到书签栏。
2. 打开 Chrome App 页面：`chrome://apps`，将刚刚收藏的标签页项目拖拽到下面的空白处，在应用图标上右键，勾选「在窗口中打开」，然后点击创建快捷方式。

图标转换： [ConvertICO](https://convertico.com/) 将 png 图片转化为 ico 文件，从而自定义图标。

### [Nativefier](https://github.com/jiahaog/nativefier/)

利用开源的 Nativefier 能将网页转制成为一个 **可安装的** 桌面应用，支持 macOS 10.9+ / Windows / Linux 系统。其原理就是将网页利用 Electron 技术将网页内容封装起来，成为一个可执行、可安装的应用程序。

然而这样的方式需要一些比较复杂的安装配置。由于 Nativefier 是 `Node.js` 编写的，所以不仅需要安装 `Node.js` 环境，还要安装 `npm` 包管理器，才可以通过 `npm install nativefier -g` 安装 Nativefier。安装之后 Nativefier 也只有命令行的交互方式，没有图形化界面。

### [Web2Desk](https://desktop.appmaker.xyz/)

Web2Desk 让我们可以直接输入网页链接、应用名称和应用图标，然后经过其在服务器上面的构建，直接给我们提供 Windows、macOS 和 Linux 的原生安装程序的下载。

但测试中，用 Web2Desk 转换滴答清单 Web, 无法记录登陆状态，实用性较低。

## 网址快捷方式

鼠标右键-新建 - 快捷方式，插入浏览器路径，然后空格并输入要打开的网址链接，比如 `"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" https://newzone.top/`。

如果需要一次打开多个网址，则在参数后继续添加「空格 链接」。
