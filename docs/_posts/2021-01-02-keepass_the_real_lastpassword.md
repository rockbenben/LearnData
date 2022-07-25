---
title: 抛弃 Lastpass，拥抱 KeePass-免费开源的绿色密码管理软件
subtitle: 我的最后一款密码管理器
date: 2021-01-02
category:
  - 工具
tag:
  - KeePass
order: -34
---

用了 5 年的 Lastpass，但随着网站密码的增加，遇到的 bug 也越来越多。有次误操作，合并了 Lastpass 密码库，丢失了一大批密码，对云端密码库的信任度直接降为零。

之后，尝试了 1Password、Bitwarden、Enpass、Remembear 多种密码管理软件，最终选择**开源免费且自动填充超强**的 KeePass。

KeePass 的密码保存在本地的 `.kdbx` 数据库中，让你真正掌握自己的账号密码。搭配坚果云或同步盘的 KeePass，能实现密码多端同步，让手机与电脑使用同一密码库。

KeePass 官网下载（Windows）：<https://keepass.info/download.html>。安卓推荐 `Keepass2Android`，iOS 推荐 `Strongbox` 或 `KeePassium`。

以下会逐步介绍 KeePass 的配置和插件。小白可直接看文章底部，下载懒人包，开包即用。

## KeePass 设置

### 选项设置

依次点击菜单栏 -「工具」-「选项」

- 外观 - 主窗口，勾选「最小化到系统托盘（而不是任务栏）」；
- 外观 - 主窗口，勾选「关闭按钮 [X] 最小化主窗口，而不是退出程序」；
- 集成 - 全局热键，全局自动输入：`Ctrl+Alt+A`；
- 集成 - 全局热键，全局自动输入（仅密码）：`Ctrl+Alt+Shift+A`。

### 自动输入规则

选中左侧的数据库，右键点击「编辑群组」-「自动输入」，替换默认规则为 `^{SPACE}{DELAY 100}{CLEARFIELD}{USERNAME}{TAB}{PASSWORD}{DELAY 100}{ENTER}^{SPACE}`。

`^{SPACE}` 即 `Ctrl+Space`，该热键能关闭或启用当前输入法。关闭输入法后，默认为美式键盘输入。

`Ctrl+Space` 需在输入法编辑状态下才能生效，而密码区都禁用输入法编辑。因此，输入密码完成后，可能输入法并未重置，要按 `Ctrl+Space` 才能正常启用输入法。

## 必备插件

连接浏览器、密码自动输入等主要功能，KeePass 均需配置插件。下载插件并放入指定文件夹 `\Plugins`，重启 KeePass 即可使插件生效。

### [KeePassHttp](https://raw.github.com/pfn/keepasshttp/master/KeePassHttp.plgx)

KeePassHttp 需搭配浏览器插件 KeePassHttp-Connector，达到自动填充密码效果。

### [KPEnhancedEntryView](https://keepass.info/plugins.html#kpenhentryview)

KPEnhancedEntryView 增强视觉效果，为达到最佳显示效果，按以下配置：

- 在主界面中点击【显示】→【窗口布局】→【平铺】；
- 在主界面中点击【显示】→【列设置】，只选择：标题 →【确定】。大家也可以按自己要求选择。

### [AutoTypeSearch](https://keepass.info/plugins.html#atsearch)

AutoTypeSearch 提供全局框，输入热键 `Ctrl+Shift+A` 后，搜索关键词输入密码。

![AutoTypeSearch 通用设置](http://tc.seoipo.com/20191013083950.png)

### [KP Entry Templates](https://github.com/mitchcapper/KPEntryTemplates)

配置方法：

1. 点击 KeePass 主界面的【文件】→【数据库设置】→【高级】，在【模板记录组】中选择一个群组 →【确定】；
2. 返回主界面，点击步骤 1 中选择的群组，按 Ctrl+I 键（或点击上方工具栏的钥匙图标）添加记录；
3. 点击【自动输入】，勾选【双通道自动输入混淆】（**以后用模板添加记录时就不需要再勾选，一劳永逸**）；
4. 点击最左边的【Template】→【Init As Template】；
5. 配置所需模板 →【确定】。

### [KPSourceForgeUpdateChecker](https://sourceforge.net/projects/kpsfupdatechecker/reviews)

KeePass 菜单栏 - 帮助 - 检查更新，检查从 SourceForge 上的插件更新信息。

## 可选插件

### [KeeTrayTOTP](https://github.com/victor-rds/KeeTrayTOTP/releases/)

如果你有更高安全要求，KeeTrayTOTP 能增加二次动态验证，使用参考 [使用 KeePass 管理两步验证](https://www.cnblogs.com/tielemao/p/9613839.html)。

### [WebAutoType](https://keepass.info/plugins.html#webautotype)

WebAutoType 是很多人的推荐插件，启动密码热键后会自动匹配当前网址、标题。这对于已经有大量密码的人来说，并不实用，可不安装。

### [Yet Another Favicon Downloader](https://keepass.info/plugins.html#yafd)

该插件能自动匹配下载网站图标，但会大幅增加数据库的大小。不在意界面美观度的话，无需安装 Yet Another Favicon Downloader。

### [KeePassRpc](https://github.com/kee-org/keepassrpc/releases/)

KeePassRpc 搭配浏览器插件 Kee，能实现**自动填充密码并登录**。

其他插件不能自动登录，只有 Kee 能做到该功能。使用 Kee 的自动登录功能后，少数页面会出现循环登录，需暂停 Kee 扩展来停止循环错误。

![Kee 设置](http://tc.seoipo.com/2022-05-05-14-29-32.png)

### [KeePassNatMsg](https://github.com/smorks/keepassnatmsg)

浏览器插件 KeePassHttp-Connector 已不再更新，有段时间甚至不兼容新版 KeePass。

如果遇到不兼容，可使用 KeePassNatMsg 和 KeePassXC-Browser 连接浏览器，本方案不支持搜狗浏览器。

> 如果报错「proxy download error」，备份并删除文件夹 C:\Users\%Username%\AppData\Local\KeePassNatMsg，然后重新加载 Native Messaging Host

## 常见问题

- 同一密码能不能同时匹配多个网站？

  不能，但可以在「高级 - 标记」上添加多个表格，用英文的逗号隔开。标记在全局匹配中可用于搜索。

- 同一网站有多个账户密码，如何将其中一个账户密码前置？

  无法默认选择指定账户，但可通过插件 keepasshttp、keepassnatmsg，按 username 或 title 对账户进行排序。

- Keepassxc 有官方浏览器插件，界面也比 KeePass 美观，为什么不推荐使用？

  Keepassxc 是 KeePass 的衍生版。虽然 KeePass 配置比 Keepassxc 复杂，但操控性更强。长期使用，个人推荐 Keepass 原版。

## KeePass 懒人包

懒人包下载：<https://wwz.lanzouf.com/i8m0804lxp7g>

KeePass 懒人包为绿色版，集成了常用插件，建立数据库即可使用 KeePass。

**建立数据库：**

1. 解压懒人包，打开程序 `KeePass.exe`。
2. 屏幕右下角托盘处，打开 KeePass。
3. 依次点击 `菜单栏 - 文件 - 新建`，建立属于你的密码数据库。

   ![KeePass 懒人包设置](http://tc.seoipo.com/KeePass_new_kdbx.gif)

懒人包集成插件：AutoTypeSearch，Entry Templates，KeePassHttp，KeePassNatMsg，KeePassRpc，KeeTrayTOTP，KPEnhancedEntryView，SourceForgeUpdateChecker，WebAutoType。

**参考资料：**

- [Keepass 教程之二——完美的通用自动输入规则](https://blog.csdn.net/SingWarm/article/details/90669580)
- [使用 KeePass 管理两步验证](https://www.cnblogs.com/tielemao/p/9613839.html)
