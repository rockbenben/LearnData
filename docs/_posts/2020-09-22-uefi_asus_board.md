---
title: 「硬盘布局不受 UEFI 固件支持」－华硕主板解决方案
date: 2020-09-22
category:
  - 系统
tag:
  - 主板
order: -30
---

电脑用了 5 年，Win10 系统更新时突然提示「硬盘布局不受 UEFI 固件支持」。

**解决办法**：

电脑重启，按 F2 或 DEL 进入 BIOS。

选择高级模式，`启动－CSM－启动设备控制`，设置为「仅 Legecy OPROM」。

![](https://pic4.zhimg.com/v2-8a26bd62460f662caad3dba696c54efb_r.jpg)

设置完成后，Windows 系统就可以正常更新了。

这是华硕主板的解决方案，其他主板的顺序或许不同，但原理是一致的，都是将启动模式修改为「Only Legecy」。
