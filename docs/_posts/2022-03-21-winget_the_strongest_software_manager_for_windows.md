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

矿难、WIN11、DDR5、40 代显卡纷至沓来，更换电脑的高峰期马上来临。可惜我的生产力工具等不了，只能 49 年入国军，隔离期间装配上 i7+3080Ti 主机。硬件配好了，软件又成了个大问题。常用软件超过 60 个，之前每个软件，都去对应官网寻找最新版，然后单独进行设置安装，需要耗费大量的时间精力。

曾经一度尝试过国内的软件管理器，能批量下载软件，但依旧免不了单独安装设置。另外，让 360、金山、腾讯来管理你的软件系统，你真的放心？相较而言，Windows 原生程序管理工具 winget 和 WebGUI winstall 使用更简单，**应用均为官方来源下载，一键批量静默安装应用，是快速部署程序的绝佳方案**。

## 原生程序管理-winget

[winget](https://docs.microsoft.com/zh-cn/windows/package-manager/winget/) 是 Windows 程序包管理器的命令行工具。在 Windows 10 和 Windows 11 计算机上，使用 winget 命令行工具来发现、安装、升级、删除和配置应用程序。早期版本的 Windows 不支持 winget，需在 [winget 官方](https://github.com/microsoft/winget-cli/releases)或[国内搬运](https://wwz.lanzouf.com/ixZL701smc4d) 下载后缀为 `.msixbundle` 的应用安装程序。

安装应用安装程序后，可以通过在命令提示符 (cmd) 下键入「winget」来运行程序命令。

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

安装中会要求接受协议，点 Y 确认即可。

![](https://img.newzone.top/2022-05-05-17-14-35.png?imageMogr2/format/webp)

## 批量部署程序-winstall

[winstall](https://winstall.app/) 是 winget install 的网页管理工具。借助 winstall，用户不懂代码，也能轻松使用 winget，一次性安装所有应用程序。

操作非常简单，winstall 页面选中程序，即可打包程序组或生成批量安装命令。

![](https://img.newzone.top/2022-05-05-17-14-50.png?imageMogr2/format/webp)

winstall 的应用搜索继承了 winget 的问题，部分国产软件不支持中文搜索，比如「坚果云」只支持英文名称「Nutstore」。希望这一问题，可以随着国内用户群增多而被解决。

![winget 搜索](https://img.newzone.top/2022-05-05-17-15-09.png?imageMogr2/format/webp)

![winstall 搜索](https://img.newzone.top/2022-05-05-17-15-37.png?imageMogr2/format/webp)

winstall 页面选好程序后，导出自动生成的批量安装命令，并在命令提示符 (cmd) 中执行，系统将自动下载并静默配置程序。

![](https://img.newzone.top/2022-05-05-17-15-55.png?imageMogr2/format/webp)

## 常见问题

### 尝试更新源时失败

国内使用 winget 容易出现问题「尝试更新源时失败」，下载 [winget 官方最新包](https://github.com/microsoft/winget-cli/releases)可解决问题。

另一个可能是 Internet 选项的 TLS 版本设置过低，开启 TLS 1.2 即可恢复，具体操作查看 [Windows 应用商店 (Microsoft store) 打不开？](https://newzone.top/posts/2022-02-19-microsoft_store_fixed.html#解决方法)。

### 其他问题

- 批量安装应用中，winstall 不定期出现崩溃，原因未知。
- winget install 不能检测当前版本软件是否安装，容易造成重复安装应用，拖慢部署时间。
- 部分应用安装后容易有 bug，比如剪映有卡顿问题，手动安装后恢复正常。

## 总结

在我的常用软件列表中有 50 个应用支持 winget 批量静默安装，剩余 10 个需手工安装，覆盖率在 80% 以上，足够满足大部分人的需求。

winget 用一个命令行能静默安装上百个软件，节省了大量装机时间。对于系统重装、批量装机、快速设置新工作环境，winget 和 winstall 是必不可少的装机神器。
