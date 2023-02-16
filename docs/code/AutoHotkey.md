---
article: false
title: AutoHotkey
icon: linter
order: 4
---

AutoHotkey 是 Windows 平台下开源的热键脚本语言。AHK 学习门槛不高，初期可以通过脚本录制来完成，我通过 AHK 热键启动、定时判断、改键盘等多种自动化操作，推荐学习制作你的专属自动化脚本。

- [AutoHotkey 中文说明](https://wyagd001.github.io/v2/docs)：[按键 Key 名列表](https://wyagd001.github.io/v2/docs/KeyList.htm)，[AHK 环境变量](https://wyagd001.github.io/v2/docs/Variables.htm#BuiltIn)。
- 脚本录制/功能编辑：[Pulover's Macro Creator](https://www.macrocreator.com/download/)，[AutoHotkey 語法產生器 (線上網站)](https://github.com/papple23g/ahkcompiler)。

| 符号 | 作用                                                                             |
| ---- | -------------------------------------------------------------------------------- |
| #    | Win 键                                                                           |
| !    | Alt 键                                                                           |
| ^    | Ctrl 键                                                                          |
| +    | Shift 键                                                                         |
| `    | 转义字符，参考[转义序列](https://wyagd001.github.io/v2/docs/misc/EscapeChar.htm) |
| ;    | 代表注释内容，不影响函数                                                         |
| ::   | (两个英文冒号)，代表分隔                                                         |

**注意事项**：

- AHK 中**不区分大小写**，即 run 和 RUN 没有区别。
- 非热键情况，添加 `return`，脚本全部停止。
- 脚本需考虑，你是想要在**全局**还是**局部**中激活动作。

## 常用方法

### 托盘图标

自定义图标可使用 ico 或 png，不支持 svg 格式。

托盘图标设置命令为 `Menu, Tray, Icon, %A_WorkingDir%\dock_panel.png`。`%A_WorkingDir%` 代表脚本所在目录。

如果是设置 exe 程序图标，则使用 [Ahk2Exe](https://github.com/AutoHotkey/Ahk2Exe/releases) 工具手动转换。

### 执行 PowerShell

系统级别的操作可以通过 [PowerShell](https://learn.microsoft.com/zh-cn/powershell/scripting/learn/ps101/01-getting-started) 来实现。

```shell
# Run, powershell.exe -NoExit -Command &{命令}, 目录
Run, powershell.exe -NoExit -Command &{npm version patch}, D:\Backup
```

## 问题

### 激发热键后按键未释放

`Send, ^!+w` 指代热键 `Ctrl+Alt+Shift+W`，有时辅助热键未正确释放，会导致激发热键后输入有问题。

函数结尾加一行 `Send, {Ctrl up}{Alt up}{Shift up}` 即可解决该问题。

### 隐藏在托盘程序无法监测

`WinExist` 只能查看签订程序，对于后台或托盘程序，可以用 Process 命令来检查是否存在指定程序的 PID。

```autohotkey
;晚上8点停止录屏，并精简视频
if (A_Hour == 20 && Stop_Record ==0){ ;如果小时等于20点
    Stop_Record:=1 ;设置停止录屏变量为1
    Process, Exist, bdcam.exe ;监测隐藏程序
    NewPID := ErrorLevel  ; 由于 ErrorLevel 会经常发生改变, 所以要立即保存这个值.
    if NewPID { ;如果存在录屏工具，则继续
        Send, ^+!{F8} ;晚上8点后，停止录屏
        Sleep, 1000 ;等待5分钟
        ;重命名文件
        FileMove, D:\Backup\Libraries\Desktop\%A_YYYY%-%A_MM%-%A_DD% *-*-*-*.mp4, D:\Backup\Libraries\Desktop\%A_YYYY%-%A_MM%-%A_DD%.mp4
        Sleep, 1000
        ;桌面打开终端，执行 dvr-scan 命令
        Run, PowerShell.exe -NoExit -Command &{dvr-scan -i %A_YYYY%-%A_MM%-%A_DD%.mp4 -o %A_YYYY%-%A_MM%-%A_DD%_Scanned.avi}, D:\Backup\Libraries\Desktop
    }
}
```

### 命令中的按键未执行

如果 AutoHotkey 脚本中模拟了按键，窗口中却并未执行，则尝试用管理员权限执行脚本。

低权限的窗口/进程不能发送消息到高权限窗口。比如 Quicker 窗口的权限高，普通启动的 AutoHotkey 脚本无法对 Quicker 输入模拟键，需要管理员权限。

### 管理员权限运行脚本

对于可执行文件，命令 `Run *RunAs` 相当于右键菜单的「以管理员权限运行」命令。

右键单击脚本的快捷方式，选择「属性」>「高级」，勾选「用管理员身份运行」，只能用于手动开启，开机启动会忽略带管理器的启动项。

如果**管理员密码为空**，则参考 [Win10 添加开机启动项管理员权限运行如何设置](http://www.ujiaoshou.com/xtjc/155215500.html)，在系统的任务计划程序添加管理员自启动。如果想避免启动报错，建议将启动触发器从「开机」改成「登录」，增加延迟 1 分钟，勾选「最高管理员权限」。设置后，脚本中的打开命令都将使用管理员权限执行。

如果**管理员有设密码**，则可使用下列命令，用管理员权限打开脚本。

```autohotkey
RunAs, Administrator, PassWD
Run, %A_ScriptDir%\1.ahk
RunAs  ; 恢复为普通权限
```

## 常用函数

### 命令：run, msgbox, send

```autohotkey
;run 运行程序或者文档或其他
!n::run notepad ;便捷呼出程序，「notepad」是「运行」对话框中的命令之一，所以不用完整路径
Run, %A_WorkingDir%\xx.lnk ;启用当前目录中的文件
Run, chrome.exe https://newzone.top/ ;指定浏览器打开链接。
Run, %A_ProgramFiles%\Some Application\App.exe, %A_ProgramFiles%\Some Application ;有些程序需要在它们自己的目录下运行。

;Msgbox：显示带两个按钮的对话框 (是 和 否) 对话框中可加内容
Msgbox，你好吗？ ;显示「你好吗？」的对话框
;Send：在当前窗口输入文本内容
send how are you？ ;在当前窗口输入 how are you？
```

### 局部变量：IFwinactive

注意：同样**不区分大小写**。比如 ifwinactive 等等。

```autohotkey
;#IFwinactive（指定窗口）（热键或热字串）
#IFwinactive 新建文本文档.txt - 记事本 ; 在*新建文本文档.txt - 记事本*这个指定窗口下，窗口标题的前半段符合即可
#q:: ;按下 win 键和 q 键
run Notepad ;激活打开记事本这个动作
return
```

## 热键、热字串

### 热键：(按键 1)(按键 2)

当按下特定的按键，或者按键顺序，或者按键组合时，激活某个或者某系列动作。

```autohotkey
#q:: ;按下 win 键和 q 键时激活运行记事本这个动作。
run Notepad ;run 为 AHK 中一个命令，相当于 C 语言中的关键字或者说是函数。还有 msgbox 等等。
return ;return 为返回值，在存在多个热键时需使用，不然热键中会起冲突。

q&n:: ;按下 q 和 n，自定义按键：(按键 1)&(按键 2)&...&(按键 n)，用来连接任何两个或多个按键组合成一个新的按键。
run notepad ;激活打开记事本这个动作。
return
```

### 热字串：(被替换内容)::(替换内容)

扩展或者说自动替换文本，当然也可以映射任何脚本动作。

自动替换：

```autohotkey
::hay::how are you? ;当输入 hay 时自动替换为 how are you？
::nh::你好 ;当输入 nh 时自动替换为你好
::/mail::gmail@gmail.com ;键入/mail 后，再加空格、或 tab、或回车，就可以触发缩写
::/fk::轩先生这会子肯定在忙，请骚后。thx。祝君：天天开心，日日欣悦。
```

热字串映射脚本：

```autohotkey
::np::
run Notepad ;当输入 np 加空格时激活运行记事本这个动作。
return
::nh::
send 你好。 ;在当前窗口输入你好。
return
::h:: 欢迎光临！ ;只要输入 h，然后回车/TAB/空格就自动把 h 替换为欢迎光临！
:*:w::欢迎你再次光临！     ;自动替换，不需要输入空格来触发替换
::hehe::                 ;替换支持换行文字，需要用括号？
(
老兄！
好久不见！
)
```

键入热字串后，再加**空格**、或 **tab**、或**回车**，就可以触发缩写。

## AHK 使用样例

### 神速激活/打开/隐藏程序

`Win+C`激活 Chrome 状态切换：Chrome 没打开时 --> 打开；打开没激活状态时候 --> 激活；打开处在激活状态时候 --> 隐藏。^[[Win 下最爱效率利器:AutoHotKey](https://segmentfault.com/a/1190000004611125)]

```autohotkey
#c::
IfWinNotExist ahk_class Chrome_WidgetWin_1
{
    Run "C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe"
    WinActivate
}
Else IfWinNotActive ahk_class Chrome_WidgetWin_1
{
    WinActivate
}
Else
{
    WinMinimize
}
Return
```

### 一键运行/关闭脚本的循环

按 F2 一键运行/关闭脚本的循环，空格可暂停/继续脚本。

```autohotkey
#maxThreadsPerHotkey, 2 ;让热键能同时有运行/关闭作用，否则键击会被忽略
;setKeyDelay, 50, 50 ;键击默认休眠
;setMouseDelay, 50 ;键击默认休眠
stop:=0

;F2一键运行/关闭脚本的循环
$f2::
    stop:=!stop
    while (stop=1)
    {
        ;激活 excel 窗口「工作簿」获取数值，然后激活 chrome 窗口执行命令，完成后进入循环。
        WinActivate, 工作簿
        Sleep, 333
        Send, {Down}
        Sleep, 100
        Send, {Control Down}{c}{Control Up}
        Sleep, 100
        WinActivate, 捧场 - Google Chrome
        Sleep, 333
        Send, {Control Down}{v}{Control Up}
        Sleep, 100
        Send, {Enter}
        Sleep, 100
    }
return
;如果需要暂停，可在脚本后加这段代码，按 空格键 就暂停，再按空格键继续运行。
;space::pause
```

### 监测进程是否运行

监测应用是否有运行，如果没运行则执行启动热键。

```autohotkey
Process, Exist, PicGo.exe
NewPID := ErrorLevel  ; 由于 ErrorLevel 会经常发生改变，所以要立即保存值。
if not NewPID
{
    run C:\\Program Files\\PicGo\\PicGo.exe
    sleep 3000
    Send, {Shift Down}{Control Down}{p}{Control Up}{Shift Up}
} else {
    Send, {Shift Down}{Control Down}{p}{Control Up}{Shift Up}
}
return
```

### 输入法状态影响字符输出

在脚本中，调用函数`SendText()`输出文字，不受输入法状态。

```autohotkey
;;;;;;;新版独立小程序，可以避免输入法状态影响中文或英文字符的热键输出;;;;;;;
;来源链接：<https://segmentfault.com/a/1190000017029464>
SendText(var_string){
    local
    SendInput {text}%var_string%
    return
}
```

### 大写键改为 Enter

```autohotkey
;replace CapsLock to LeftEnter; CapsLock = Alt CapsLock
$CapsLock::Enter
LAlt & Capslock::SetCapsLockState, % GetKeyState("CapsLock", "T") ? "Off" : "On"
!u::Send ^c !{tab} ^v
```
