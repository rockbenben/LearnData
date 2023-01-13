---
title: 光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2)
date: 2017-10-18 18:28:00
category:
  - 网络
tag:
  - 光猫
order: -7
---

## 为什么要获得光猫超级密码？

它可以用于端口映射（eMule high ID）和桥接模式（路由器掌控拨号，但不兼容固定电话）。网上关于光猫超级密码的获取攻略大多是在 2012-14 年发布的，现在已经不能使用了。

## 破解测试环境

运营商：上海电信
光猫型号：贝尔 E8-C-EPON
硬件版本：RG201O-CA_V1A2
软件版本：E201OCAA2V11S

## 光猫超级密码破解

1. 地址栏输入 `192.168.1.1`，用户名：<光猫背面>，密码：<光猫背面>，登录管理界面。

   ![](https://pic1.zhimg.com/v2-9e43bc86b9095f3f6c2cfa4bd58dcd68_r.jpg)

2. 在浏览器地址栏输入 `192.168.1.1/backupsettings.txt`，将 `backupsettings.txt` 文件导出并备份在电脑上。如果无法打开，请改为输入 `192.168.1.1/backupsettings.conf`，并做好备份。

3. 打开下载的 `backupsettings.txt` 或 `backupsettings.conf` 文件，搜索 `TeleComAccount`，两个 password 之间就是超级密码。超级账号是 `telecomadmin`。

   ![](https://pic3.zhimg.com/v2-ee441dd18cc8e5f6303fdaef82b6d476_r.jpg)

4. 输入地址 `192.168.1.1`，用刚获取的超级密码登录，然后可以进行端口映射和设备桥接。

   ![](https://pic1.zhimg.com/v2-31d6bb6b90be541c186a360fe2dd323c_r.jpg)

如果新安装的光猫无法获取超级密码，可以使用运营商的官方应用进行映射。
