---
layout: post
title: "OneNote 2016 无法登陆问题解决"
subtitle: ""
date: 2017-07-29 15:19:00
author: "Benson"
header-img: img/post-bg-20180108.jpg
header-mask: 0.3
catalog: true
categories:
  - 系统
tags:
  - OneNote 2016
---

office 版的 OneNote 安装后无法登陆，点击下一步没反应。问题的根源出在 IE 的设置上。

![](https://pic4.zhimg.com/v2-d5945359b896ffd09d9973e9597ec06b_r.jpg)

**问题测试：** 打开 IE，访问 live.com，网页无法打开，会提示需要启动 JavaScript

![](https://pic1.zhimg.com/v2-cc00b3039f755b92f9ae511c8b7debd0_r.jpg)

问题找到了，接下来开始解决。

1. 打开 IE 设置-Internet 选项
   ![](https://pic2.zhimg.com/v2-717bf3c8b62748b62a04219435b8a75d_r.jpg)

2. 启用脚本-Java 小程序脚本和活动脚本
   ![](https://pic4.zhimg.com/v2-25697b0c27aa8780c532b7a03a78dcbf_r.jpg)

3. 打开 OneNote2016
   ![](https://pic4.zhimg.com/v2-ff20ef8aa22215cba64b879775dfdf4f_r.jpg)
