---
article: false
title: 系统重装
icon: update
order: 2
---

## 重装准备

- 备份 [必备应用](https://newzone.top/apps/Applist.html) ，VSCode 配置、油猴脚本、输入法配置，UMP 版微信聊天记录 `C: \Users\Benson\AppData\Local\Packages\TencentWeChatLimited.forWindows10_sdtnhv12zgd7a\LocalCache\Roaming\Tencent\WeChatAppStore`。
- 核对群晖已同步到最新备份。
- 反激活已购软件，如：Eagle、MoneyWiz、妙笔。
- 更新 [原版镜像](https://www.microsoft.com/zh-cn/software-download/windows11)。

## 安装系统

系统重装维修前，在 **NTFS/exFAT** 格式的 U 盘上安装 [优启通](https://www.itsk.com/thread-428078-1-1.html) 或 [微 PE 工具箱](https://www.wepe.com.cn/)。Windows 10/11 镜像超过 4GB，已经不再支持 FAT32 格式的 U 盘。

使用 U 盘引导安装系统：

- 本地安装：右键 ISO 文件，选择挂载；在新出现的驱动器中，找到 setup.exe，直接运行；选择「现在安装」。
- 引导安装：采用 UEFI+GPT。如果是自定义安装清空系统盘所有分区后，一定要用 **GPT** 对系统盘分区。

## 系统配置

- 台机的电源模式调整到最佳性能模式。
- 将 Documents、Desktop 转移到 D 盘。
- 显示屏校色：屏幕换线或换主机，参数可能会变动。在颜色管理部分还原显示器设置。
- 任务栏：在任务栏底部右键单击，选择「任务栏设置」>「通知区域」>「选择哪些图标显示在任务栏上」；在同页面的「多显示器设置」中，取消「在所有显示器上显示任务栏」。
- [清理导航栏](https://zhuanlan.zhihu.com/p/25942015)
- [设置系统强制关机](https://newzone.top/posts/2017-09-02-forced_shutdown.html)，防止系统关机不成功。
- Everything 注册右键搜索当前路径；右键清除。
- win+r, regedit 打开注册表，打开路径 `HKEY_CLASSES_ROOT\Directory\Background\shell`。
- 新建项，命名随意 ( 即右键菜单显示的文字 ) -「Everything 搜索当前路径」。
- 右键再次新建项，命名 Command，打开修改右侧默认值为 `"D: \Everything\Everything.exe" -path "."`。

## 安装应用

使用 [winstall](https://newzone.top/posts/2022-03-21-winget_the_strongest_software_manager_for_windows.html) 批量安装应用，这需要你提前登录微软账户，并更改 ps1 的运行权限。

### Mircrosoft Store

微软应用商店里能自动更新应用，因此我有一些应用是通过它来安装。Snipaste、Ditto、PowerToys、One Commander、思源笔记、微信 For Windows，下方为依照前后顺序的一键安装命令：

```shell
winget install 9P1WXPKB68KX -s msstore  ;  winget install 9NBLGGH3ZBJQ -s msstore  ;  winget install XP89DCGQ3K6VLD -s msstore  ;  winget install 9NBLGGH4S79B -s msstore  ;  winget install 9P7HPMXP73K4 -s msstore
```

### 普通应用

以下为常用安装包应用的批量安装代码：

```shell
winget install --id=Mozilla.Firefox -e  ; winget install --id=Google.Chrome -e  ; winget install --id=Brave.Brave -e  ; winget install --id=Logitech.Options -e  ; winget install --id=Microsoft.WindowsTerminal -e  ; winget install --id=Tencent.WeChat -e  ; winget install --id=Tencent.TIM -e  ; winget install --id=Tencent.QQ.NT -e  ; winget install --id=Discord.Discord -e  ; winget install --id=Telegram.TelegramDesktop -e  ; winget install --id=Microsoft.VisualStudioCode -e  ; winget install --id=Notepad++.Notepad++ -e  ; winget install --id=Notion.Notion -e  ; winget install --id=Formagrid.Airtable -e  ; winget install --id=Figma.Figma -e  ; winget install --id=ogdesign.Eagle -e  ; winget install --id=PicGo.PicGo.Beta -e  ; winget install --id=Logseq.Logseq -e  ; winget install --id=Obsidian.Obsidian -e  ; winget install --id=Appest.Dida -e  ; winget install --id=Bandisoft.Honeyview -e  ; winget install --id=Alibaba.aDrive  -e  ; winget install --id=115.115Chrome -e  ; winget install --id=VideoLAN.VLC -e  ; winget install --id=ByteDance.JianyingPro -e  ; winget install --id=GitHub.GitHubDesktop -e  ; winget install --id=NickeManarin.ScreenToGif -e  ; winget install --id=Valve.Steam -e  ; winget install --id=Nutstore.Nutstore -e  ; winget install --id=TominLab.WonderPen -e  ; winget install --id=OBSProject.OBSStudio -e
```

### 手动安装应用

- [WSL](https://learn.microsoft.com/zh-cn/windows/wsl/install#install-wsl-command) ：在管理员模式下打开 PowerShell 或 Windows 命令提示符，输入 `wsl --install` 命令。如果提示错误，则按 [旧版 WSL 的手动安装步骤](https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-1---enable-the-windows-subsystem-for-linux) 开启步骤 1 和 3 的功能。WSL 安装并重启成功后，安装 [Docker Desktop](https://docs.docker.com/get-docker/)。
- Synology Drive：设置 NAS 本地备份；
- 电脑运行 Android 手机应用， [Win11 安卓子系统](https://www.iplaysoft.com/win11-wsa.html) ( WSA ) 安装；

## 应用配置

- 绿色开机：开机脚本、Keepass、Ditto。开机脚本用 [管理员权限启动脚本](../code/AutoHotkey.html#管理员权限运行脚本)。
- 配置：RIME、Picgo、Wonderpen、Eagle。
- firefox-about: config 修改原值 18 的 `ui.key.menuAccessKey` 为 0，以屏蔽 alt 防止热键冲突；选择「options」>「Network Settings」，取消勾选「DNS over HTTPS」。
- 火绒－安全设置－高级防护－导入隐私规则，增加 [腾讯屏蔽规则](https://github.com/tutugreen/Huorong-Rules/tree/main/Tencent)。
- 按键更改：
- Powertoys：将 insert 键改为 backspace。
- Logitech.Options：将键盘的计算器改为「上一个桌面」；右键菜单改为「下一个桌面」。

## 常见问题

- Win11 本地账户也被提示需要登录密码，但设置密码后，无法直接开机登录。设置新密码后，点击「设置」>「账户」>「登录选项」>「密码」，可以重新设置空密码，实现自动登录。在账户中可以设置密码永不过期。
- 英语键盘删不掉：添加英语语言包，然后再删除，英语键盘也会一起删除。
- 右键更改前先备份注册表，有几率会影响系统稳定性。
- [WSL 从 C 盘迁移至 D 盘的简单实用方法](https://dandelioncloud.cn/article/details/1569126817577791489)
- 实时将音频转文字：管理员方式安装 [VB-CABLE](https://vb-audio.com/Cable/) ，输入输出设备都选 VB-CABLE，详细设置查看 [How to Convert Audio to Text - FREE & No Time Limits](https://www.youtube.com/watch?v=1DsrniDGOJQ)。
