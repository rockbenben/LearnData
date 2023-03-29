---
title: 100% 蓝屏解决方案：以 DPC_WATCHDOG_VIOLATION 为例
date: 2020-10-25
category:
  - 系统
tag:
  - 蓝屏
star: true
order: -30
---

Windows 蓝屏的原因众多，你在网上搜到的解决方案，大多与你的情况不同，无法解决实际问题。但是，如果你找到并分析电脑上的 dmp 蓝屏日志，就会发现 Windows 已经给出了你的蓝屏原因。比如 DPC_WATCHDOG_VIOLATION 蓝屏，大多是由于硬件驱动出现问题造成的。你可以通过回退、更新或卸载驱动来修复蓝屏。接下来，我将具体介绍如何导出蓝屏日志、分析并解决蓝屏原因。

## 导出蓝屏日志

1. 安装 [WinDbg Preview](https://www.microsoft.com/zh-cn/p/windbg/9pgjgd53tn86?rtc=1&activetab=pivot:overviewtab)，这是微软官方推出的系统调试工具。
2. 启动 WinDbg Preview，软件会自动检测到最新的蓝屏日志，点击 Yes 即可载入。如果想分析其他文件，可以打开文件夹 `C:\Windows\Minidump`，导出日志 `*.dmp`。
3. 载入日志过程中，WinDbg Preview 会自动下载所需文件，无需额外操作。载入完成后，点击 `!analyze -v`，分析具体日志。

   ![](https://tc.seoipo.com/20201025223307.png?imageMogr2/format/webp)

4. 分析日志：日志前半部分可以忽略，蓝屏原因多在日志末尾几行。通过分析末尾日志，可以找出引发蓝屏的进程。注意不要强制删除未知文件。

   ![](https://tc.seoipo.com/20201025224308.png?imageMogr2/format/webp)

## 上传社区分析

有些蓝屏比较复杂，由多方面的原因造成，新手很难分析。如果你看不懂或者不想分析日志，可以将蓝屏日志完整上传到微软社区，一般几个小时就会有人回复。

1. 打开文件夹 `C:\Windows\Minidump`，导出日志 `*.dmp`。
2. 将 dmp 蓝屏日志上传至[微软社区](https://answers.microsoft.com/zh-hans/newthread?threadtype=Questions&cancelurl=/zh-hans/windows/forum&forum=windows&filter=)，会有技术人员帮助你分析蓝屏原因。由于微软社区不支持上传附件，请先将 dmp 日志上传至百度云或微云，然后将分享链接放在问题中。

## 蓝屏解决方案

分析完蓝屏日志后，我们得到了具体的蓝屏冲突进程，然后在引擎中搜索该进程名，以确定它是系统模块、驱动还是某个程序。

### 系统模块报错

`ntkrnlmp.exe`、`*.symbols.exe` 是系统模块，该报错不是蓝屏的底层原因，实际是由应用进程与系统冲突引起的蓝屏，需重新深入分析日志。不要尝试**删除系统模块**。

### 驱动冲突

`nvlddmkm.sys`、`amdkmdag.sys` 等后缀为 `*.sys` 的进程报错，多为硬件驱动错误，可通过回退驱动来解决。

1. 开始菜单上搜索并打开「设备管理器」。
2. 设备管理器上找到对应硬件，点击「回退驱动程序」。

![](https://tc.seoipo.com/2022-12-17-10-38-44.png "还原驱动")

如果无法回退驱动程序，则去硬件官网下载旧驱动或最新驱动。如果仍然出现蓝屏，可以尝试在设备管理器中卸载设备，然后重启电脑，让系统启用自带驱动。如果上述方案都没有解决问题，可以尝试更新主板 BIOS，关闭超频。

如果你不清楚报错进程与哪个硬件相关，尝试多种方法仍然无法修复，那只能用强行删除来尝试修复。但在删除前，必须**备份好相关文件及其所在路径**。如果删除后无法进入系统，则需要使用 PE 系统来还原备份文件。如果相关文件数量超过 5 个，或者不清楚如何使用 PE，则不要强制删除任何 `*.sys` 文件。

### 未知程序

如果是与系统模块、驱动无关的未知程序，可使用 [Everything](https://www.voidtools.com/zh-cn/downloads/) 搜索该进程的位置，**备份**后尝试删除该程序。如果提示文件被占用，可使用火绒或 Unlocker 来解除文件占用，但一定要先做好备份。

`MpKslDrv.sys` 通常用于恶意软件保护，对系统影响不大。如果出现该报错，可使用 Defender Control 关闭微软杀毒 Defender Antivirus Service。@yys 爱与诚 反馈，「当我关掉 defender 的时候 他自己消失了，不用我删除。当我打开 他又出现了，又删除不了」。

## 蓝屏解决集锦

如果不想分析日志，甚至找不到蓝屏日志，可以尝试以下方法，这些方法可以解决 80% 的蓝屏问题：

- 驱动类：更新显卡驱动；更新网卡驱动；重置声卡驱动；重置 SATA AHCI 驱动；
- 主板类：擦拭内存条；重置 BIOS；增加 CPU 电压；关闭超线程；
- 系统修复：管理员权限打开命令行（cmd），运行 `sfc/Scannow`，系统会自动检查损坏文件并修复；
- 终极方法：重装系统，测试期间尽量**使用默认系统驱动**。如果重装后仍然出现蓝屏，说明你新装的驱动有问题，可以卸掉有问题的驱动。

## 常见问题

### 装不了 WinDbg

少数情况安装应用报错，本地无法分析日志。此时，我们可以导出蓝屏日志，上传到[微软社区](https://answers.microsoft.com/zh-hans/newthread?threadtype=Questions&cancelurl=/zh-hans/windows/forum&forum=windows&filter=)，会有人帮助分析原因。

### 分析日志时报错

分析蓝屏日志时出错，或 WinDbg 对 minidump 蓝屏日志的访问被拒绝，这都是由于系统盘读取权限未开放所导致的。

解决办法有 3 种：

- 将 minidump 文件复制到 D 盘，然后手动导入到 WinDbg 进行分析。
- @天气控制仪：以管理员权限运行 WinDbg。
- @紫石英与灯心草：右键单击 minidump 蓝屏日志，点击「属性」>「权限」>「点击用户」>「点击继承」>「同意」。

### 找不到 minidump 文件

默认情况下，蓝屏日志保存在 `C:\Windows\Minidump` 文件夹中。如果该文件夹为空，则表明蓝屏日志尚未生成，可等待下一次蓝屏时再查看。如果多次发生蓝屏，但该文件夹仍未生成日志，可尝试在资源管理器中打开 `%SystemRoot%\Minidump`。若失败，可按以下步骤进行设置：

1. 打开「控制面板」>「系统」>「高级系统设置」>「高级」>「启动和故障恢复」>「设置」；
2. 选择「写入调试信息」>「小内存转储（256KB）」，并将「小存储目录」设置为 `%SystemRoot%\Minidump`，确定后重启计算机；
3. 再次异常关机后，可前往 `%SystemRoot%\Minidump` 提取即可。

视频说明：

<BiliBili bvid="BV1jt4y1i7C8" />
