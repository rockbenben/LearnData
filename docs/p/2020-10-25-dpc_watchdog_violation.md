---
title: 真·DPC_WATCHDOG_VIOLATION 蓝屏解决方案
date: 2020-10-25
category:
  - 系统
tag:
  - 蓝屏
order: -30
---

DPC_WATCHDOG_VIOLATION 多为硬件驱动出现问题。当驱动大规模报错时，厂家会更新并推送解决方法。所以，不要继续尝试其他人的解决方案，你的问题是独一无二的。分析 dmp 日志才是能百分百解决蓝屏的方法。

## 分析 dmg 日志

1. 安装 [WinDbg Preview](https://www.microsoft.com/zh-cn/p/windbg/9pgjgd53tn86?rtc=1&activetab=pivot:overviewtab)，这是微软官方推出的 Debug 工具。
2. 启动 WinDbg Preview，软件会自动检测到最新 dmp 日志，点击 Yes 即可载入。如果想分析其他文件，打开文件夹 `C:\Windows\Minidump`，导出日志 `xxx.dmp`。
3. 载入日志过程中，WinDbg Preview 会自动下载所需文件，不需要管。载入完成后，点击 `!analyze -v`，分析具体日志。
   ![](http://tc.seoipo.com/20201025223307.png)

4. 分析日志：日志上方的都是套话，可以忽略。直接看日志最下方几行，找出引发蓝屏的进程，并删除该程序。如果冲突进程为驱动，无法强删，可以把驱动还原为上一版驱动或系统自带驱动。
   ![](http://tc.seoipo.com/20201025224308.png)

有些蓝屏较复杂，由多方原因造成，新手很难直接分析。建议将蓝屏日志完整上传到微软社区分析，小白方案中有具体步骤。

## 小白修复蓝屏

不想分析日志，也简单。

1. 打开文件夹 `C:\Windows\Minidump`，导出日志 `xxx.dmp`。
2. 将 dmp 日志上传至[微软社区](https://answers.microsoft.com/zh-hans/newthread?threadtype=Questions&cancelurl=/zh-hans/windows/forum&forum=windows&filter=)，会有技术人员帮你分析蓝屏原因。微软社区无法上传附件，需先将 dmp 日志上传至百度云或微云，再将分享链接放在问题里。

## 常见问题

### 无法安装 WinDbg Preview 应用

少数情况安装应用报错，本地无法分析日志，导出日志上传到微软社区。

### 打开蓝屏日志被拒绝

WinDbg Preview 对 minidump 蓝屏日志的访问被拒绝，这是由于系统盘读取权限未开放。

将 minidump 文件复制到 D 盘，然后手动导入分析即可正常解析日志。

### 找不到 minidump 文件

尝试打开 `%SystemRoot%\Minidump`，失败后按下列步骤修改：

1. 打开控制面板>>系统>>高级系统设置>>高级>>启动和故障恢复>>设置；
2. 写入调试信息>>选择「小内存转储（256KB）」，路径选择 `%SystemRoot%\Minidump`，确定并重启您的计算机；
3. 再次异常关机后，前往 `%SystemRoot%\Minidump` 提取即可。

### 蓝屏原因分析汇总

评论区很多重复问蓝屏原因的，这里会定期更新出现比较多的蓝屏原因

- 系统性模块报错：ntkrnlmp.exe、xxx.symbols.exe。日志尾部仅有系统模块报错，实际是由应用进程与系统冲突引起的蓝屏，需深入分析日志。
- 驱动冲突：nvlddmkm、amdkmdag。N 卡、A 卡或硬件进程报错，建议先回退到旧驱动。这样不会对电脑产生很大影响。如果驱动不对，可重新安装。驱动无法回退，则去官网下载旧驱动，或尝试最新驱动，或卸载为系统默认驱动。驱动若不行，则尝试更新主板 BIOS，关闭超频。
- 未知报错：xxx.sys。尝试多种方法，依然无法修复，则可用最后一步 - 强行删除。但删除前，必须备份好文件和位置。如果删除后进入不了系统，需使用 PE 系统还原备份文件。如不清楚如何使用 PE，不要删除任何 xxx.sys 文件。

## 蓝屏解决集锦

如果无蓝屏日志，不能确定蓝屏原因，尝试下列方法，可以解决 80% 的蓝屏。

- 驱动类：更新显卡驱动；更新网卡驱动；重置声卡驱动；重置 SATA AHCI 驱动；
- 主板类：擦拭内存条；重置 BIOS；增加 CPU 电压；关闭超线程；
- 终极方法：重装系统，测试期间尽量使用默认系统驱动。
