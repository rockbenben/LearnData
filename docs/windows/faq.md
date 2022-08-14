---
article: false
title: Windows
icon: windows
order: 1
---

Windows 遇到不懂的问题，可以在 [Microsoft 支持社区](https://answers.microsoft.com/zh-hans/) 提问，回复比较快。

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

## 网址快捷方式

鼠标右键-新建 - 快捷方式，插入浏览器路径，然后空格并输入要打开的网址链接，比如 `"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" https://newzone.top/`。

如果需要一次打开多个网址，则在参数后继续添加「空格 链接」。

## Chrome 开发工具

网页重定向时，无法在开发工具中看到重定向时打开的网页。

点击 `F12-Settings-Throttling`，增加浏览器的网络延时，来查看跳转路径。到达中转页面时，可在开发工具中将网络改为 Offiline，网页将停止加载。

- Preserve log：不在网页刷新或重定向后，清楚加载日志
- Disbale cache：不使用网页缓存
- Online：定制本地与服务端的网络环境，下载速度、上传速度、延时。

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

## 常见问题

### 无法切换中英文

按键示例、无法切换中英文，大部分原因都与输入法无关，而是硬件出了问题。

- 监测方法：安装并启动 autohotkey.exe，然后点击 view - Key history and script info。窗口会显示最近的按键历史，当发现一个键在疯狂重复时，很有可能就是出问题的按键。
- 修复方法：键盘上重复按下该按键，看看是否能修复。不行的话，拔下键盘 USB，单独使用软键盘，测试按键是否正常。如果软键盘正常，键盘配件又无法修复，就只能换一个了。

### 使用中，禁止系统自动更新重启

Win11 注册表中进入 `计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU`，新建 DWORD（32 位）值，重命名为「NoAutoRebootWithLoggedOnUsers」，键值改为 1。

Win10 没找到类似注册表，直接关闭自动更新。

### WPS 没有宏

- 让 wps 支持 vba 宏，安排 [WPS VBA 模块 V7.1 版本](https://www.jyrd.com/media/6490.html)；`选项 - 信任中心 - 启用宏` 后自动添加为受信任的文档，或添加主要文件夹为信任位置。
- 开启聚光灯效果：视图 - 阅读模式，每个文件需要单独开启，文件保存后自动开启。

### Microsoft Store 应用快捷方式

Microsoft Store 安装的应用没有固定位置，一更新就会换位置，无法建立快捷方式。虽然这些应用能被设为开机启动，但经常启动不成功。

右键 Microsoft Store 应用，将其固定在任务栏。通过 `Win 键 + 数字键`的来启动应用。比如应用在任务栏的第 7 位，则使用热键 `Win + 7`。

### 无法安装应用

安装应用却被提示「您的安全设置不允许将此应用程序安装到您的计算机上」时，新建记事本并输入下方代码，修改记事本的后缀名为.reg，然后右键以管理员身份运行，合并到注册表就可以了。^[[Unable to Install ClickOnce Application due to Security Settings](https://superuser.com/questions/1252575/unable-to-install-clickonce-application-due-to-security-settings-windows-10)]

```bash
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\.NETFramework\\Security\\TrustManager\\PromptingLevel]
"MyComputer"="Enabled"
"LocalIntranet"="Enabled"
"Internet"="Enabled"
"TrustedSites"="Enabled"
"UntrustedSites"="Disabled"
```
