---
article: false
title: 常见问题
order: 4
---

## 无法切换中英文

按键示例、无法切换中英文，大部分原因都与输入法无关，而是硬件出了问题。

- 监测方法：安装并启动 autohotkey.exe，然后点击 view - Key history and script info。窗口会显示最近的按键历史，当发现一个键在疯狂重复时，很有可能就是出问题的按键。
- 修复方法：键盘上重复按下该按键，看看是否能修复。不行的话，拔下键盘 USB，单独使用软键盘，测试按键是否正常。如果软键盘正常，键盘配件又无法修复，就只能换一个了。

## WPS 没有宏

- 让 wps 支持 vba 宏，安排 [WPS VBA 模块 V7.1 版本](https://www.jyrd.com/media/6490.html)；`选项 - 信任中心 - 启用宏` 后自动添加为受信任的文档，或添加主要文件夹为信任位置。
- 开启聚光灯效果：视图 - 阅读模式，每个文件需要单独开启，文件保存后自动开启。

## Chrome 开发工具

网页重定向时，无法在开发工具中看到重定向时打开的网页。

点击 `F12-Settings-Throttling`，增加浏览器的网络延时，来查看跳转路径。到达中转页面时，可在开发工具中将网络改为 Offiline，网页将停止加载。

- Preserve log：不在网页刷新或重定向后，清楚加载日志
- Disbale cache：不使用网页缓存
- Online：定制本地与服务端的网络环境，下载速度、上传速度、延时

## 无法安装应用

应用安装时提示「您的安全设置不允许将此应用程序安装到您的计算机上」，可修改注册表来修改设置。

新建记事本并输入下方代码，修改记事本的后缀名为.reg，然后右键以管理员身份运行，合并到注册表就可以了。

```bash
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\.NETFramework\\Security\\TrustManager\\PromptingLevel]
"MyComputer"="Enabled"
"LocalIntranet"="Enabled"
"Internet"="Enabled"
"TrustedSites"="Enabled"
"UntrustedSites"="Disabled"
```

参考资料：

- [win10 安全警告 您的安全设置不允许将此应用程序安装到您的计算机上](https://zhidao.baidu.com/question/2058641536827425507.html)
- [Unable to Install ClickOnce Application due to Security Settings](https://superuser.com/questions/1252575/unable-to-install-clickonce-application-due-to-security-settings-windows-10)
