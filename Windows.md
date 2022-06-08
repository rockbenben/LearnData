# Windows 设置

## QTTabBar

QTTabBar 让你在 Windows 资源管理器中使用 Tab 多标签功能。

这款应用存在两个版本，一个是日本作者 @Quizo 的[原版 QTTabBar](http://qttabbar.wikidot.com/) （闭源，更新慢），另一个是国内反编译出的[开源 QTTabBar](https://github.com/indiff/qttabbar)。

目前两个版本都存在相同问题，菜单栏是灰色的选不了 Qttabbar,IE 管理加载项里是空的，第三方扩展也启用了。。

启用 .net framework 3.5 和工具栏显示 QTTabBar 是使用的前置条件，启用参照 <https://github.com/indiff/qttabbar/wiki/Windows11%E5%AE%89%E8%A3%85qttabbar>。

### 关于 Windows 最新补丁 KB5012643 KB5012159 导致 qttabbar 使用不了的解决方法

管理员方式运行命令提示符 dism /online /enable-feature /featurename:netfx3 /all
执行完成重启电脑
