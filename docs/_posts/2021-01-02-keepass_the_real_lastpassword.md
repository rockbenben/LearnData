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

KeePass 官网下载（Windows）：<https://keepass.info/download.html>。安卓推荐 `Keepass2Android`，iOS/Mac 推荐 `Strongbox` 或 `KeePassium`。

接着我会逐步介绍 KeePass 的配置和插件，也可以直接拖到文章底部，下载懒人包，开箱即用。

## KeePass 设置

### 选项设置

依次点击菜单栏 -「工具」-「选项」

- 外观 - 主窗口，勾选「最小化到系统托盘（而不是任务栏）」；
- 外观 - 主窗口，勾选「关闭按钮 [X] 最小化主窗口，而不是退出程序」；
- 集成 - 全局热键，全局自动输入：`Ctrl+Alt+A`；
- 集成 - 全局热键，全局自动输入（仅密码）：`Ctrl+Alt+Shift+A`。

### 自动输入规则

选中左侧的数据库，右键点击「编辑群组」-「自动输入」，替换默认规则为 `^{SPACE}{DELAY 100}{CLEARFIELD}{USERNAME}{TAB}{PASSWORD}{DELAY 100}{ENTER}^{SPACE}`。^[[Keepass 教程之二——完美的通用自动输入规则](https://blog.csdn.net/SingWarm/article/details/90669580)]

`^{SPACE}` 即 `Ctrl+Space`，该热键能关闭或启用当前输入法。关闭输入法后，默认为美式键盘输入。

`Ctrl+Space` 需在输入法编辑状态下才能生效，而密码区都禁用输入法编辑。因此，输入密码完成后，可能输入法并未重置，要按 `Ctrl+Space` 才能正常启用输入法。

### 匹配多个网址

KeePass 不能在一个条目填写多个匹配网址，但不同条目可以共享用户名、密码等字段数据，并且通过更改被引用的数据条目，所有其他条目也会同步使用更新值。^[[Field References-KeePass](https://keepass.info/help/base/fieldrefs.html)]

比如 163.com 和 youdao.com 都使用网易账户，账号密码相同，根据网址建立了 2 个条目，将 163.com 条目作为主条目，设置真实账户密码。双击进入 youdao.com 条目，依次点击 Edit Entry 界面左下角的「工具-插入字段引用-在用户名/密码字段」，选中需要引用的条目。设置好后，字段旁边会有个分享符号，表明这是引用条目，会随主条目而更新。如果你想编辑引用字段，它会显示为 `{REF:P@I:8CC19B988F0F9D499459B741753BEE5F}`，更改账户密码只能在主条目上进行编辑。

![](http://tc.seoipo.com/2022-10-18-11-41-15.png "引用字段设置步骤")

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

![AutoTypeSearch 通用设置](http://tc.seoipo.com/20191013083950.png "AutoTypeSearch 通用设置")

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

### [HIBP Offline Check](https://github.com/mihaifm/HIBPOfflineCheck)

使用 [have i been pwned?](https://haveibeenpwned.com/) 在线检查密码库，也能使用本地数据库离线检查。

### [KeePassRpc](https://github.com/kee-org/keepassrpc/releases/)

KeePassRpc 搭配浏览器插件 Kee，能实现**自动填充密码并登录**。

其他插件不能自动登录，只有 Kee 能做到该功能。使用 Kee 的自动登录功能后，少数页面会出现循环登录，需暂停 Kee 扩展来停止循环错误。

![Kee 设置](http://tc.seoipo.com/2022-05-05-14-29-32.png "Kee 设置")

### [KeePassNatMsg](https://github.com/smorks/keepassnatmsg)

浏览器插件 KeePassHttp-Connector 已不再更新，有段时间甚至不兼容新版 KeePass。

如果遇到不兼容，可使用 KeePassNatMsg 和 KeePassXC-Browser 连接浏览器，本方案不支持搜狗浏览器。

> 如果报错「proxy download error」，备份并删除文件夹 C:\Users\%Username%\AppData\Local\KeePassNatMsg，然后重新加载 Native Messaging Host。

## 常见问题

### 多账户排序

同一网址有多个账户密码时，无将其中一个账户密码默认置顶。通过插件 KeePassHttp 和 KeePassNatMsg，能按 username 或 title 对账户进行排序。

### 为什么不选 KeepassXC

KeepassXC 基于 KeePass 开发，界面更美观，应用设置更简单，并开发了专属的浏览器插件。

入门 KeepassXC 也比 KeePass 来得轻松，但 KeePass 操控和定制性更强。密码库的使用是以年为单位，比起节约一两天的时间，个人推荐使用 KeePass 原版定制你自己的密码库。

## KeePass 懒人包

2022.09.17 更新懒人包：[蓝奏云](https://wwz.lanzouy.com/iJ6yA0bve7wb)，[百度云盘](https://pan.baidu.com/s/1dm0djnDGq8SOsTPy3jByZg?pwd=nrwj) 提取码：nrwj。

KeePass 懒人包为绿色版，集成了常用插件，建立数据库即可使用 KeePass。

**建立数据库：**

1. 解压懒人包，打开程序 `KeePass.exe`。
2. 屏幕右下角托盘处，打开 KeePass。
3. 依次点击 `菜单栏 - 文件 - 新建`，建立属于你的密码数据库。

   ![KeePass 懒人包设置](http://tc.seoipo.com/KeePass_new_kdbx.gif "KeePass 懒人包设置")

懒人包集成插件：AutoTypeSearch，Entry Templates，KeePassHttp，KeePassNatMsg，KeePassRpc，KeeTrayTOTP，KPEnhancedEntryView，SourceForgeUpdateChecker，WebAutoType。
