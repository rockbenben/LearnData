---
title: office 2016 安装程序报错解决办法
date: 2017-07-28 11:02:00
category:
  - 系统
tag:
  - office
order: -3
---

重新安装 Office 系统或更改安装组件时，经常提示：「找不到有效的安装源」，但实际这些文件都能在安装包内找到。这是由于注册表和组件而导致的报错，**「找不到有效的安装源」并不是真实原因**，解决方法查看下方。

![](https://pic3.zhimg.com/v2-85bd2a49a47ee6d0c8eade7b3c249516_r.jpg)

## 解决方法

1. 打开 regedit.exe，在注册表中找到路径 `计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\Delivery\SourceEngine\Downloads\{90160000-00BA-0804-1000-0000000FF1CE}-C\Sources\PROPLUS16(RG)-6186D162`。

2. 修改 Path 数据，改为安装包位置，比如 `F:\5.软件资源\系统重装\SW_DVD5_Office_Professional_Plus_2016_64Bit_ChnSimp_MLF_X20-42426\groove.zh-cn`。

   ![](https://pic3.zhimg.com/v2-650ede86dd191a8f0a1cd6e9b815377a_r.jpg)

3. 在 C 盘建立安装组件：

   - 把安装包路径 `\groove.zh-cn\` 下的文件复制到 `C:\MSOCache\All Users\{90160000-00BA-0804-1000-0000000FF1CE}-C` 目录下 (如果没有这个目录就自己建立)。
   - 把安装包路径 `\proplus.ww\` 下的文件复制到 `C:\MSOCache\All Users\{90160000-0011-0000-1000-0000000FF1CE}-C`。

4. 将需要的程序文件放入 MSOCache 路径
   MSOCache 其它的目录下内容同样根据注册表的内容把它指示的光盘中的安装文件复制到相应的目录下。如果没有那个目录就要自己建立，类似的目录一共有 12 个。
   如果不想全装可以只选择需要的软件，下面以 Onenote 和 Access 为例。

   - **Onenote** 把安装包路径 `\onenote.zh-cn\` 下的文件复制到 `C:\MSOCache\All Users\{90160000-00A1-0804-1000-0000000FF1CE}-CC`。
   - **Access** 把安装包路径 `\access.zh-cn\` 下的文件复制到 `C:\MSOCache\All Users\{90160000-0015-0804-1000-0000000FF1CE}-C`。

5. 最后进入安装包运行 setup.exe 安装正常。

Office 组件报错大都是由于 MSOCache 目录被删，建议安装 Office 后不要删除该目录。使用优化工具时，要注意保留 MSOCache 目录及其下的文件。
