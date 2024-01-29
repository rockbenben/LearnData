---
article: false
title: 系统重装
icon: update
order: 2
---

## 重装准备

- 备份：[必备应用](https://newzone.top/apps/Applist.html)、油猴脚本、VSCode 配置、输入法配置。
- 同步：检查 GoodSync 同步设置；核对群晖已同步到最新备份。
- 反激活已购软件，如：Eagle、MoneyWiz、妙笔。
- 更新 [原版镜像](https://www.microsoft.com/zh-cn/software-download/windows11)。

## 安装系统

系统重装维修前，在 **NTFS/exFAT** 格式的 U 盘上安装 [优启通](https://www.itsk.com/latest) 或 [微 PE 工具箱](https://www.wepe.com.cn/download.html)。Windows 10/11 镜像超过 4GB，已经不再支持 FAT32 格式的 U 盘。

使用 U 盘引导安装系统：

- 本地安装：右键 ISO 文件，选择挂载；在新出现的驱动器中，找到 setup.exe，直接运行；选择「现在安装」。
- 引导安装：采用 UEFI+GPT。如果是自定义安装清空系统盘所有分区后，一定要用 **GPT** 对系统盘分区。

## 系统配置

- 将 Documents、Desktop 转移到 D 盘。
- 环境包安装：`npm i -g npm@latest; npm i -g pnpm; npm i -g yarn; npm i -g docsify-cli`。
- 显示屏校色：屏幕换线或换主机，参数可能会变动。在颜色管理部分还原显示器设置。
- 任务栏：在任务栏底部右键单击，选择「任务栏设置」>「通知区域」>「选择哪些图标显示在任务栏上」；在同页面的「多显示器设置」中，取消「在所有显示器上显示任务栏」。
- Win11 本地账户也被提示需要登录密码，但设置密码后，无法直接开机登录。设置新密码后，点击「设置」>「账户」>「登录选项」>「密码」，可以重新设置空密码，实现自动登录。在账户中可以设置密码永不过期。
- [清理导航栏](https://zhuanlan.zhihu.com/p/25942015)
- [设置系统强制关机](https://newzone.top/posts/2017-09-02-forced_shutdown.html)，防止系统关机不成功。
- 台机的电源模式调整到最佳性能模式。

系统配置注意：

- 右键更改前先备份注册表，有几率会影响系统稳定性。
- 英语键盘删不掉：添加英语语言包，然后再删除，英语键盘也会一起删除。

## 安装应用

使用 [winstall](https://newzone.top/posts/2022-03-21-winget_the_strongest_software_manager_for_windows.html) 可以批量安装应用，但这需要你提前登录微软账户，并更改 ps1 的运行权限。如果出现`InternetOpenUrl() failed. 0x80072f7d : unknown error` 则检查 TLS 是否开启 1.2 和 1.3。（每次使用四大行网银后，基本都需要修复次）

### Mircrosoft Store

由于微软应用商店能自动更新应用，我习惯通过它安装一些无需配置的应用。这些应用包括 Windows Terminal、Windows Notepad、Windows 闹钟和时钟、Windows 扫描、Windows 相机、Windows 录音机、Snipaste、Ditto、PowerToys、One Commander、思源笔记、Discord。以下是按顺序排列的一键安装命令：

```shell
winget install 9N0DX20HK701 -s msstore  ;  winget install 9MSMLRH6LZF3 -s msstore  ;  winget install 9WZDNCRFJ3PR -s msstore  ;  winget install 9WZDNCRFJ3PV -s msstore  ;  winget install 9WZDNCRFJBBG -s msstore  ;  winget install 9WZDNCRFHWKN -s msstore  ;  winget install 9P1WXPKB68KX -s msstore  ;  winget install 9NBLGGH3ZBJQ -s msstore  ;  winget install XP89DCGQ3K6VLD -s msstore  ;  winget install 9NBLGGH4S79B -s msstore  ;  winget install 9P7HPMXP73K4 -s msstore  ;  winget install XPDC2RH70K22MN -s msstore
```

### 常规应用

以下是常用的非微软商店应用的批量安装命令：

```shell
winget install --id=Mozilla.Firefox -e  ; winget install --id=Google.Chrome -e  ; winget install --id=Brave.Brave -e  ; winget install --id=Mozilla.Thunderbird -e  ; winget install --id=Logitech.Options -e  ; winget install --id=Tencent.WeChat -e  ; winget install --id=Tencent.TIM -e  ; winget install --id=Tencent.QQ.NT -e  ; winget install --id=Telegram.TelegramDesktop -e  ; winget install --id=Microsoft.VisualStudioCode -e  ; winget install --id=Notepad++.Notepad++ -e  ; winget install --id=Notion.Notion -e  ; winget install --id=Formagrid.Airtable -e  ; winget install --id=Figma.Figma -e  ; winget install --id=ogdesign.Eagle -e  ; winget install --id=PicGo.PicGo.Beta -e  ; winget install --id=Gyan.FFmpeg -e  ; winget install --id=ByteDance.JianyingPro -e  ; winget install --id=HandBrake.HandBrake -e  ; winget install --id=Audacity.Audacity -e  ; winget install --id=Logseq.Logseq -e  ; winget install --id=Obsidian.Obsidian -e  ; winget install --id=Appest.Dida -e  ; winget install --id=SumatraPDF.SumatraPDF -e  ; winget install --id=Bandisoft.Honeyview -e  ; winget install --id=Alibaba.aDrive  -e  ; winget install --id=115.115Chrome -e  ; winget install --id=VideoLAN.VLC -e  ; winget install --id=ByteDance.JianyingPro -e  ; winget install --id=Git.Git -e; winget install --id=GitHub.GitHubDesktop -e  ; winget install --id=Hesan.He3 -e  ; winget install --id=NickeManarin.ScreenToGif -e  ; winget install --id=Valve.Steam -e  ; winget install --id=Nutstore.Nutstore -e  ; winget install --id=TominLab.WonderPen -e  ; winget install --id=OBSProject.OBSStudio -e  ; winget install --id=mgth.LittleBigMouse -e
```

对更新党来说，在后续应用管理可以搭配 `winget upgrade` 来检查是否有应用更新。也可以使用 `winget upgrade --all` 来静默升级所有支持 winget 的程序。

### 手动安装应用

- [WSL](https://learn.microsoft.com/zh-cn/windows/wsl/install#install-wsl-command) ：在管理员模式下打开 PowerShell 或 Windows 命令提示符，输入 `wsl --install` 命令。如果提示错误，则按 [旧版 WSL 的手动安装步骤](https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-1---enable-the-windows-subsystem-for-linux) 开启步骤 1 和 3 的功能。WSL 安装并重启成功后，安装 [Docker Desktop](https://docs.docker.com/get-docker/)。
- 同步设置：GoodSync 保持本地不同目录间的文件同步；Synology Drive 将本地文件备份到 NAS。
- 电脑运行 Android 手机应用， [Win11 安卓子系统](https://www.iplaysoft.com/win11-wsa.html) ( WSA ) 安装。

## 应用配置

- 绿色开机：开机脚本、Keepass、Ditto。开机脚本用 [管理员权限启动脚本](../code/AutoHotkey.html#管理员权限运行脚本)。
- 配置：RIME、Picgo、Wonderpen、Eagle。
- Everything 注册右键搜索当前路径；右键清除。
  - win+r, regedit 打开注册表，打开路径 `HKEY_CLASSES_ROOT\Directory\Background\shell`。
  - 新建项，命名随意 ( 即右键菜单显示的文字 ) -「Everything 搜索当前路径」。
  - 右键再次新建项，命名 Command，打开修改右侧默认值为 `"D: \Everything\Everything.exe" -path "."`。
- 按键更改：
  - Powertoys：将 insert 键改为 backspace。
  - Logitech.Options：将键盘的计算器改为「上一个桌面」；右键菜单改为「下一个桌面」。

### 旧资料（已弃用）

- 如果空间不足，可以把 [WSL 从 C 盘迁移至 D 盘的简单实用方法](https://dandelioncloud.cn/article/details/1569126817577791489)，但容易出现兼容性问题。
- firefox-about: config 修改原值 18 的 `ui.key.menuAccessKey` 为 0，以屏蔽 alt 防止热键冲突；选择「options」>「Network Settings」，取消勾选「DNS over HTTPS」。
- 火绒－安全设置－高级防护－导入隐私规则，增加 [腾讯屏蔽规则](https://github.com/tutugreen/Huorong-Rules/tree/main/Tencent)。
- 实时将音频转文字：管理员方式安装 [VB-CABLE](https://vb-audio.com/Cable/) ，输入输出设备都选 VB-CABLE，详细设置查看 [How to Convert Audio to Text - FREE & No Time Limits](https://www.youtube.com/watch?v=1DsrniDGOJQ)。
