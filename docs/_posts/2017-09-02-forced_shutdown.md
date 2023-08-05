---
title: 电脑关机了，第二天一看确又开着的？让系统正常关机！
date: 2017-09-02 00:38:00
category:
  - 系统
tag:
  - 关机
order: -5
---

晚上明明按下电脑的关机键，第二天早上却发现电脑开了一晚上？这是因为后台和 GUI 应用程序在阻止或取消关机，使得系统无法正常关机。为解决此问题，可以按照以下方法授予系统自动关机权限。

## 手工操作

1. 点击「开始菜单」，搜索「Regedit」，进入注册表编辑器。
2. 打开窗口后，向注册表上方菜单输入路径 `计算机\HKEY_CURRENT_USER\Control Panel\Desktop`。
3. 在右侧窗格中找到 `AutoEndTasks` 键值。若不存在，则新建一个名为 `AutoEndTasks` 的「字符串值」，并将键值的数值设为 `1`。AutoEndTasks 表示自动结束失去响应的程序任务。`0` 表示 false（默认值），而 `1` 表示 true，电脑会自动结束失去响应的程序。

   ![](https://pic3.zhimg.com/v2-c643b9737b35f9dd9a8382c5653e3d3e_r.jpg)

4. 查找或创建 `WaitToKillAppTimeout` 字符串值，并设定其数值为 2000。2000 以毫秒计，表示在程序失去响应后，系统将等待 2 秒后自动结束相应程序。

按照以上步骤操作，即可设置电脑默认为强制关机。

## 通过脚本修改

如果你不愿手动修改注册表，可以选择以下三种脚本之一进行操作。

### 注册表脚本修改

复制下列命令并粘贴至文本编辑器（如记事本）中，保存文件，扩展名为 `.reg`，如 settings.reg。双击该文件即可将修改应用到注册表中。（脚本由 @daxixi 提供）

```reg
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Control Panel\Desktop]
"AutoEndTasks"="1"
"WaitToKillAppTimeout"="2000"
```

### cmd 修改

以管理员权限运行 cmd（命令提示符），输入以下命令：

```cmd
reg add "HKEY_CURRENT_USER\Control Panel\Desktop" /v AutoEndTasks /t REG_SZ /d 1 /f

reg add "HKEY_CURRENT_USER\Control Panel\Desktop" /v WaitToKillAppTimeout /t REG_SZ /d 2000 /f
```

### PowerShell 修改

以管理员权限运行 PowerShell，输入以下命令：

```powershell
cmd /c reg add "HKEY_CURRENT_USER\Control Panel\Desktop" /v AutoEndTasks /t REG_SZ /d 1 /f

cmd /c reg add "HKEY_CURRENT_USER\Control Panel\Desktop" /v WaitToKillAppTimeout /t REG_SZ /d 2000 /f
```

——————————

网上流行一种通过修改「gpedit.msc」达到快速关机的方法，但实际测试结果表明，这种方法并**不能实现强制关机**。以下为这种方法的操作流程记录，仅供参考：

1. 点击桌面左下角“windows”图标，选择“运行”选项；
2. 进入运行窗口，输入“gpedit.msc”命令，按下回车键确定；
3. 打开本地组策略编辑器界面，依次展开“计算机配置——管理模板——系统——关机选项”文件夹；鼠标右击右侧“关闭会阻止或取消关机的应用程序的自动终止功能”选项，接着选择“编辑”功能；将弹出窗口选项更改成“已启用”，然后点击“应用——确定”按钮。

   ![](https://pic4.zhimg.com/v2-4b736585b25509b036935a2f9c37d843_r.jpg)

   但开启后，提示程序没有响应，无法关机。

   ![](https://pic4.zhimg.com/v2-46fafee0cb6e212e793fc80268ab0917_r.jpg)

修改“gpedit.msc”虽然可以撤销程序阻止关机的权限，但它并没有赋予关机进程对程序的关闭权限，因此并不能达到强制关机的效果。
