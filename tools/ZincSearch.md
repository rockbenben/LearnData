# Zinc

[Zinc](https://github.com/zinclabs/zinc) 是一个进行全文索引的搜索引擎。它是 Elasticsearch 的轻量级替代品，运行在不到 100 MB 的 RAM 中。它使用 bluge 作为底层索引库。

原本想对 Windows 本地盘进行搜索，但应该只支持 json 处理过后的索引库，不能对本地硬盘进行索引。

## Zinc 初次启动

1. 系统属性-高级 - 环境变量 - 用户变量，新建变量`ZINC_FIRST_ADMIN_USER`和`ZINC_FIRST_ADMIN_PASSWORD`。这是后面要用到的账户密码，可自由设置，但密码需要包含大小写字母，

2. 在应用目录下打开终端，执行命令：

```shell
mkdir data
.\zinc.exe
```

成功执行后，打开 <http://localhost:4080/>，就能看到图形化界面了。

## 全文索引-Bluge

启动 Zinc，但需要有 Bluge 索引数据库，才能进行全文搜索。

[Bluge](https://github.com/blugelabs/bluge) 是基于 GO 的索引/搜索库，使用简单，有如基于磁盘和内存的索引功能。

**常见错误**
如果启动过程中出现错误：
ZINC_FIRST_ADMIN_USER and ZINC_FIRST_ADMIN_PASSWORD must be set on first start. You should also change the credentials after first login.
可能是没有配置好环境变量，或是没有以管理员身份运行终端（win+X，A）所导致的。

参考资料：

- [搜索引擎漫谈以及 Zinc 简介](https://blog.csdn.net/zhangxin09/article/details/125080763)
