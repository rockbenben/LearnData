---
title: 一键安装 99 个程序，Windows 最强软件管理器
date: 2022-03-21
category:
  - 系统
tag:
  - winget
  - winstall
order: -43
---

矿难、Win11、DDR5、40 显卡接踵而至，电脑更换的高峰期即将来临。可惜我的生产力工具等不了了，不得不 49 年入国军，隔离期间装配上 i7+3080Ti 主机。硬件配置完毕后，软件安装成为新的挑战。我常用的软件超过 60 个，以往需要逐一访问官网下载最新版本并单独安装，这既耗时又费力。

我尝试过国内的软件管理器，它们支持批量下载，但安装和设置仍需逐个进行。此外，把软件系统的管理交给 360、金山或腾讯，你真的放心？相比之下，Windows 原生程序管理工具 winget 和 WebGUI winstall 使用更简单，**它们直接从官方来源下载应用，并支持一键批量静默安装，是快速部署程序的理想选择**。

## 原生程序管理-winget

[winget](https://docs.microsoft.com/zh-cn/windows/package-manager/winget/) 是 Windows 的命令行程序包管理器。在 Windows 10 和 Windows 11 上，可以用 winget 来发现、安装、升级、删除和配置应用程序。早期版本的 Windows 不支持 winget，需要在 [winget 官方网站](https://github.com/microsoft/winget-cli/releases) 下载以 `.msixbundle` 为后缀的安装程序。而在 Win11 上，则可 [通过 Microsoft Store 获取应用安装程序](https://www.microsoft.com/p/app-installer/9nblggh4nns1#activetab=pivot:overviewtab)。

安装应用安装程序后，可在命令提示符 (cmd) 中输入「winget」来运行程序命令。若要使用 PowerShell 命令，请注意修改 PowerShell 的执行策略。重要的是更改 ps1 文件的运行权限，而非 win11 自带的 ps5。以管理员权限运行 PowerShell，执行 `Set-ExecutionPolicy RemoteSigned` 命令。

### winget install appName

执行 winget install 命令，就能完成指定程序的下载、哈希验证、静默设置安装三个步骤，不需要人工干预。

![](https://img.newzone.top/2022-05-05-17-13-24.png?imageMogr2/format/webp)

### winget search appName

当未找到或不确定 appName 时，使用 winget search 可以锁定程序名称。以「飞书」为例，飞书不支持中文锁定，搜索后发现有国内版「Feishu」和海外版「Lark」两个版本，国内版使用命令 `winget install feishu`。

![](https://img.newzone.top/2022-05-05-17-13-45.png?imageMogr2/format/webp)

### winget upgrade --all

- `winget upgrade` 列出所有支持 winget 升级的程序，然后使用 `winget upgrade ID` 升级指定程序。
- `winget upgrade --all` 会静默升级所有支持 winget 的程序，适合更新强迫症患者。不过，该升级流程暂时没有筛选办法，无法单独剔除应用。
- `winget upgrade --all --include-unknown` 升级包括未知版本在内的所有应用，一般用不到，适用于强迫症患者。

![](https://img.newzone.top/2022-05-05-17-14-00.png?imageMogr2/format/webp)

### Microsoft Store 应用

Microsoft Store 不支持 winget 官方源，因此 winget 不能使用应用名称安装商店应用。

winget 安装 Microsoft Store 应用前，需要 `winget search` 命令找到应用 id 和来源。msstore 源指 Miscrosoft Store，其使用唯一标识符作为程序包的“Id”。因此，snipaste 安装命令为 `winget install 9P1WXPKB68KX -s msstore`。

![](https://img.newzone.top/2022-05-05-17-14-23.png?imageMogr2/format/webp)

安装中会要求接受协议，点 `Y` 确认即可。

![](https://img.newzone.top/2022-05-05-17-14-35.png?imageMogr2/format/webp)

## 批量部署程序-winstall

[winstall](https://winstall.app/) 是 winget install 的网页管理工具。借助 winstall，用户不懂代码，也能轻松使用 winget，一次性安装所有应用程序。

操作非常简单，winstall 页面选中程序，即可打包程序组或生成批量安装命令。

![](https://img.newzone.top/2022-05-05-17-14-50.png?imageMogr2/format/webp)

winstall 的应用搜索继承了 winget 的问题，部分国产软件不支持中文搜索，比如「坚果云」只支持英文名称「Nutstore」。希望这一问题，可以随着国内用户群增多而被解决。

![winget 搜索](https://img.newzone.top/2022-05-05-17-15-09.png?imageMogr2/format/webp)

![winstall 搜索](https://img.newzone.top/2022-05-05-17-15-37.png?imageMogr2/format/webp)

winstall 页面选好程序后，导出自动生成的批量安装命令，并在命令提示符 (cmd) 中执行，系统将自动下载并静默配置程序。注意保存批量安装命令，winstall 网站服务并不稳定，有可能你后面想用，它却无法导出命令。

![](https://img.newzone.top/2022-05-05-17-15-55.png?imageMogr2/format/webp)

## 常见问题

### 尝试更新源失败

在国内使用 winget 时，常遇到「更新源失败」的问题。下载 [winget 最新官方包](https://github.com/microsoft/winget-cli/releases) 可以有效解决这一问题。

另一个常见问题是网络连接失败，例如出现 `InternetOpenUrl() failed. 0x80072f7d : unknown error` 的提示。这通常是因为 Internet 选项中的 TLS 版本设置过低。启用 TLS 1.2 可以解决此问题，具体操作方法请参考 [解决 Windows 应用商店（Microsoft store）无法打开的问题](https://newzone.top/posts/2022-02-19-microsoft_store_fixed.html#解决方法)。

### 下载速度慢

在使用 winget 时，你可能会发现下载速度异常缓慢，例如 4M 数据需要等待十分钟。然而，这种感觉实际上是误解。慢速度通常是因为正在下载 winget 的源数据，而非软件本身。这一过程通常与网络环境无关，因此需要耐心等待。实际下载应用程序时，速度通常会快得多。

### 已解决问题

以下问题是早起版本的 bug，新测试中都解决了。

- 批量安装应用中，winstall 不定期出现崩溃，原因未知。
- winget install 不能检测当前版本软件是否安装，容易造成重复安装应用，拖慢部署时间。
- 部分应用安装后容易有 bug，比如剪映有卡顿问题，手动安装后恢复正常。

## 总结

在我的常用软件列表中有 50 个应用支持 winget 批量静默安装，剩余 10 个需手工安装，覆盖率在 80% 以上，足够满足大部分人的需求。winget 用一个命令行能静默安装上百个软件，节省了大量装机时间。对于系统重装、批量装机、快速设置新工作环境，winget 和 winstall 是必不可少的装机神器。

这篇文章主要介绍了 winget 的使用原理和方法。如果想直接上手，可以查看我的 [系统重装](https://newzone.top/windows/NewSystem.html) 过程记录。
