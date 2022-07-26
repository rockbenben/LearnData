---
title: 光猫改造 篇二：光猫 + 路由器，实现端口映射
date: 2017-10-18 22:00:00
category:
  - 网络
tag:
  - 光猫
order: -8
---

光猫默认没有管理权限，需要先获得光猫的超管密码，参考 [光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2）](https://newzone.top/_posts/2017-10-18-Light_cat_E8-C-EPON_admin.html)。

**光猫端口映射步骤：**

1. 登陆光猫管理地址 192.168.1.1，应用 → 高级 NAT 设置 →DMZ 设置，启用 DMZ 主机绑定路由器地址（路由器 WAN 口 IP 地址-192.168.1.X)

   ![](https://pic2.zhimg.com/v2-658d5433201b79da169a520f4b19d495_r.jpg)

2. 登陆路由器管理地址 192.168.X.X。这里已梅林 AC5300 为图例。

   ![](https://pic4.zhimg.com/v2-32825a6d3d75f4bfe5668f1b0d6c6683_r.jpg)

3. 在路由器设置选项中找到“端口转发”，按要求设置端口。我这是 eMule TCP 和 UDP 转发，设置完成后，变成 High ID。

   ![](https://pic2.zhimg.com/v2-8f3eb2c42fd5d1a98f1345c6a5855e99_r.jpg)

   ![](https://pic2.zhimg.com/v2-b4f5179278da52409f4a04ce7d139f99_r.jpg)
