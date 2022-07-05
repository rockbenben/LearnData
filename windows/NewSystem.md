# 系统重装

[微 PE 工具箱](http://www.wepe.com.cn/) **选择 U 盘格式为 exFAT**。因为 Windows 10 自带了对 exFAT 格式的支持，而且 Windows 10 的镜像已经超过了 4GB，无法放入 FAT32 格式的 U 盘中。

在 PE 系统中，右键 ISO 文件，选择挂载；在新出现的驱动器中，找到 setup.exe，直接运行；选择「现在安装」，然后就是正常的系统安装流程了。

1. [必备应用](/apps/README.md) 备份；备份油猴脚本、输入法；备份 UMP 版微信聊天记录`C:\Users\Benson\AppData\Local\Packages\TencentWeChatLimited.forWindows10_sdtnhv12zgd7a\LocalCache\Roaming\Tencent\WeChatAppStore`；更新[原版镜像](https://www.microsoft.com/zh-cn/software-download/windows11)。
2. 移除软件激活状态（Eagle & 妙笔 & MoneyWiz）
3. 使用 U 盘引导安装系统，采用 UEFI+GPT（自定义安装，清空 C 盘所有分区，一定要用 **GPT** 对系统盘分区）。
4. 安装群晖备份，Documents、Desktop 转移到 NAS 备份文件夹； [清理导航栏](https://zhuanlan.zhihu.com/p/25942015)。
5. 任务栏图标显示：在任务栏底部右键单击，选择「任务栏设置」-「通知区域 - 选择哪些图标显示在任务栏上」。在同页面的「多显示器设置」中，关闭`在所有显示器上显示任务栏` 。
6. [winstall](https://winstall.app/packs/dEj1kM6HT) 安装软件；Mircrosoft Store 安装：Snipaste、微信 For Windows
7. 配置：Eagle、RIME、Picgo、wonderpen；绿色开机：Keepass、Ditto、RunAny、天若 OCR；WPS 安装宏；~~禁用 Media Next 按键；~~火绒－安全设置－高级防护－导入隐私规则，同时增加[腾讯屏蔽规则](https://github.com/tutugreen/Huorong-Rules/tree/main/Tencent)。
8. firefox-about:config 修改原值 18 的`ui.key.menuAccessKey`为 0，以屏蔽 alt 键防止热键冲突；关闭 options - Network Settings - DNS over HTTPS
9. [设置系统强制关机](https://zhuanlan.zhihu.com/p/28990682)，防止系统关机不成功。
10. Everything 注册右键搜索当前路径；右键清除

    1. win+r，regedit 打开注册表，打开路径`HKEY_CLASSES_ROOT\Directory\Background\shell`。
    2. 新建项，命名随意（即右键菜单显示的文字）-「Everything 搜索当前路径」。
    3. 右键再次新建项，命名 Command，打开修改右侧默认值为`"D:\Everything\Everything.exe" -path "."`。

11. 调整显示屏参数：屏幕换线或换主机，参数可能会变动。
    - 左侧：自定义颜色，红 70 绿 75 蓝 50；亮度 66，对比 75
    - 右侧 0020：自定义颜色，红 70 绿 75 蓝 50；亮度 50，对比 80
12. 键盘键修改
    - Powertoys：insert 改为 backspace
    - Option：计算器改为「上一个桌面」；右键菜单改为「下一个桌面」
13. 常见问题
    - 自动登录，无法删 PIN 码：改用本地账户登录
    - 任务栏隐藏：取消「在所有显示器上显示任务栏」
    - 英语键盘删不掉：添加英语语言包，然后再删除，英语键盘也会一起删除。
    - 将电脑调整到高性能/卓越模式。
    - 右键更改前先备份注册表，有几率会影响系统稳定性。
    - [开机用管理员权限启动脚本](code/AutoHotKey?id=管理员权限运行脚本)
