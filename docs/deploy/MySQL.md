---
article: false
title: 数据库管理
icon: mysql
order: 3
---

我的数据库是通过 MySQL 和 phpMyAdmin 进行管理的。本页面将记录遇到的日常问题及其解决办法。

## 本地 MySQL 使用

在 Windows 平台上，你需要首先安装 [MySQL Server](https://downloads.mysql.com/archives/installer/)，然后使用数据库软件进行连接。如果你正在使用本地数据库并且没有将 MySQL Server 设为自动启动，那么每次开机后都需要手动启动它。启动步骤如下：右键点击菜单栏最左侧，依次选择「计算机管理」>「服务和应用程序」>「服务」>「MYSQL57」，然后双击以启动。

## 数据库恢复

数据库备份是至关重要的工作，一旦数据丢失，恢复起来会非常困难。如果你只想恢复特定的数据库，可以复制数据库的字段内容。在 phpMyAdmin 中，选择你需要的数据库，点击 "SQL"，然后将你的 SQL 代码粘贴到执行窗口，最后点击 "Go" 按钮以运行代码。字段的分隔通常以 `-- Table structure for table xxx` 开始。

如果出现错误 `#1217 - Cannot delete or update a parent row: a foreign key constraint fails`，这意味着你尝试删除或更新表中的记录，但是这个记录在另一个表中作为外键被引用。如果确实需要进行恢复，可以使用以下命令暂时关闭 MySQL 的外键约束检查：

```sql
-- 禁用外键约束检查
SET FOREIGN_KEY_CHECKS=0;

-- 执行您的操作...

-- 启用外键约束检查
SET FOREIGN_KEY_CHECKS=1;

```

## 数据库启动失败或损坏

1. 在 MySQL 配置文件中，找到 `mysqld` 行并添加 `innodb_force_recovery=4`。这个值可以在 0-6 之间调整，数值越大对数据库的损害就越大。在成功启动 MySQL 后，备份所有数据库和管理密码，并将它们下载到本地。
2. 在宝塔面板的「数据库」选项中删除所有数据库，然后卸载并重新安装 MySQL。
3. 重新导入数据库。
