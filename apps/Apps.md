# 应用笔记

## 小工具

> 收集稀奇古怪的小工具

- [Animated Drawings – 自动将绘画转换为动画](https://www.appinn.com/animated-drawings/)

## Obisidian

[Obsidian 新手系列之你不可不知的插件](https://sspai.com/post/67619)

## TheBrain

TheBrain 可以把知识无限扩充，都连接在一起。但将工作流导图放入 TheBrain 后发现并不合适，比较适合更细化的内容？

- [善用佳软张玉新老师 · TheBrain ≠ 思维导图——运用 TheBrain 的三个阶段](https://www.bilibili.com/video/BV19a411578T)

## Visual Studio Code

`Ctrl + .` 修复 markdown 语法错误。

### 修改快捷键

1. 文件——首选项——键盘快捷方式，进入键盘快捷方式界面，可以修改或解绑快捷键。

2. 如果你想重置回默认设置，同样也可以右键——重置键绑定，即可回到默认设置。

### picgo 图床

文件-首选项 - 键盘快捷方式，修改 picgo 快捷方式。

1. 剪贴板图片上传：`ctrlOrCmd+alt+q`
2. 打开文件管理器上传：`ctrlOrCmd+alt+e`
3. 打开输入框输入路径上传：`ctrlOrCmd+alt+x`

自定义设置使用 picgo-electron 的配置`C:\Users\Benson\AppData\Roaming\picgo\data.json`。

## Eagle 素材管理

Eagle 优势之一是去重，我素材库过 T，文件几十万个，无法一个个清楚，但导入 Eagle 就可以去掉重复素材。

Eagle 导入流程：搜索文件夹中的 ZIP/RAR 文件，确认全部解压。

## Zinc

[Zinc](https://github.com/zinclabs/zinc) 是一个进行全文索引的搜索引擎。它是 Elasticsearch 的轻量级替代品，运行在不到 100 MB 的 RAM 中。它使用 bluge 作为底层索引库。

原本想对 Windows 本地盘进行搜索，但应该只支持 json 处理过后的索引库，不能对本地硬盘进行索引。

### Zinc 初次启动

1. 系统属性-高级 - 环境变量 - 用户变量，新建变量`ZINC_FIRST_ADMIN_USER`和`ZINC_FIRST_ADMIN_PASSWORD`。这是后面要用到的账户密码，可自由设置，但密码需要包含大小写字母，

2. 在应用目录下打开终端，执行命令：

```bash
mkdir data
.\zinc.exe
```

成功执行后，打开 <http://localhost:4080/>，就能看到图形化界面了。

### 全文索引-Bluge

启动 Zinc，但需要有 Bluge 索引数据库，才能进行全文搜索。

[Bluge](https://github.com/blugelabs/bluge) 是基于 GO 的索引/搜索库，使用简单，有如基于磁盘和内存的索引功能。

**常见错误**
如果启动过程中出现错误：
ZINC_FIRST_ADMIN_USER and ZINC_FIRST_ADMIN_PASSWORD must be set on first start. You should also change the credentials after first login.
可能是没有配置好环境变量，或是没有以管理员身份运行终端（win+X，A）所导致的。

参考资料：

- [搜索引擎漫谈以及 Zinc 简介](https://blog.csdn.net/zhangxin09/article/details/125080763)
