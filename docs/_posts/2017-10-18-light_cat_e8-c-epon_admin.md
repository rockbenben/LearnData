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

*端口映射 (eMule high ID)、桥接模式（路由器掌控拨号，不能兼容固定电话）。*网上关于光猫超级密码的获取攻略都在 2012-14 年，已经无法使用了。

### 测试环境

运营商：上海电信
设备：贝尔 E8-C-EPON
硬件版本：RG201O-CA_V1A2
软件版本：E201OCAA2V11S

## 光猫超级密码破解步骤

1. 地址栏输入 `192.168.1.1`，用户名：光猫背面，密码：光猫背面，登陆管理界面。

   ![](https://pic1.zhimg.com/v2-9e43bc86b9095f3f6c2cfa4bd58dcd68_r.jpg)

2. 浏览器地址栏输入 `192.168.1.1/backupsettings.txt`，将 `backupsettings.txt` 文件导出并备份在电脑上。
   如果打不开上面的地址，改为输入 `192.168.1.1/backupsettings.conf`，并做好备份。

3. 打开下载好的文档 `backupsettings.txt` 或 `backupsettings.conf`，搜索 `TeleComAccount`，两个 password 间就是超级密码。超级账号是 telecomadmin。

   ![](https://pic3.zhimg.com/v2-ee441dd18cc8e5f6303fdaef82b6d476_r.jpg)

4. 地址栏输入 `192.168.1.1`，用刚获取的超级密码登陆，然后开始端口映射和设备桥接了。

   ![](https://pic1.zhimg.com/v2-31d6bb6b90be541c186a360fe2dd323c_r.jpg)

新装光猫无法获取超级密码的话，可直接使用运营商 app 进行映射。
