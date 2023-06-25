---
title: 小狼毫 3 分钟入门及进阶指南
date: 2020-11-27
category:
  - 工具
tag:
  - 小狼毫
  - 输入法
order: -32
---

常年使用搜狗输入法，备份时发现搜狗词库高达 27 万条，其中 99% 的内容是垃圾词条，即使偶尔输入过一次的内容也被输入法记录。更可怕的是，词库无法从云端删除，只要你输入过一次，搜狗就永远记住了。这哪里是输入法，根本是个**键盘记录器**。

之后，我尝试了各种输入法：百度、讯飞、手心等依旧是键盘记录器；影子输入法开源但不稳定；谷歌拼音停止更新；微软拼音词库收录慢且难以转移；只有小狼毫开源、稳定，而且又能多设备同步词库。

Rime 小狼毫输入法下载：[官方渠道](https://github.com/rime/weasel/releases/download/0.15.0/weasel-0.15.0.0-installer.exe)，[国内搬运](https://wwva.lanzoum.com/iTAcP0ynxmfi)。

## 基础设置

安装小狼毫时，不要修改用户文件夹位置，否则后续输入法定制容易出错。安装完成后，右键单击任务栏的小狼毫图标，点击「输入法设定」，勾选输入法（推荐「朙月拼音·简化字」），点击「中」，选择皮肤后即可使用小狼毫输入法。^[[30 分钟搞定 自由输入法 RIME 简明配置指南](https://www.jianshu.com/p/296bba666604)]^[[Rime 输入法—鼠须管 (Squirrel) 词库添加及配置](https://www.jianshu.com/p/cffc0ea094a7)]

小狼毫不推荐使用[四叶草](https://github.com/fkxxyz/rime-cloverpinyin)等集成方案，建议参考 [Squirrel 鼠须管配置](https://github.com/ssnhd/rime)和[小狼毫 \[rime_win\]\[眀月拼音\] 简单配置方法](https://blog.csdn.net/qq_42204675/article/details/86422450) 以「朙月拼音·简化字」为基础定制自己的输入法，最大限度提升输入法效率。小狼毫的魅力在于可自定义，让输入法按你的想法输出，定制流程参考下面的进阶指南。

## 扩充词库

扩充词库包含英文联想、网络流行语、成语、俗语等，能提高输出效率。热门词库有 [BetterRime 词库](https://github.com/Chernfalin/better-rime-dict)、[SuperRime 拓展词库](https://github.com/Chernfalin/SuperRimeDict)、[自定义短语](https://gist.github.com/lotem/5440677)和 [Rime 擴充詞庫](https://github.com/rime-aca/dictionaries)。

从容量上来说，SuperRime 词库 > BetterRime 词库 > Rime 擴充詞庫，但词库越大错误收录也越多，建议按实际需求选择词库。

词库解压后，修改 `luna_pinyin.extended.dict.yaml`，选择词库范围。`mysymbols.yaml` 对全角和半角符号都做了优化，有其他需求可以自行修改。

## 双拼方案

为了提高输出效率，我使用的是小鹤双拼方案。[小狼毫官方配置库](https://github.com/rime/rime-double-pinyin)收录了自然码双拼、智能 ABC 双拼、小鹤双拼、MSPY 双拼和拼音加加双拼。

配置时，将官方配置库中的 [double_pinyin_flypy.schema.yaml](https://github.com/rime/rime-double-pinyin/blob/master/double_pinyin_flypy.schema.yaml) 下载到小狼毫的用户文件夹。然后，右键单击任务栏小狼毫图标，选「输入法设定」，只勾选一个「小鹤双拼」。默认方案为繁体，可使用按键 F5 (部分版本是 F4)，将配置默认为简体。如果你不想翻页找字，可以参考由 @functoreality 提供的[双拼加辅助码方案](https://github.com/functoreality/rime-flypy-zrmfast)。

双拼的自定义短语可参考[小狼毫自定义短语-Rime-双拼](https://blog.csdn.net/neninee/article/details/83692270)。如果设定后无法使用简体输入，可将 `double_pinyin_flypy.schema.yaml` 中的 filters 模块剪贴到 translators 模块上方。

双拼不会显示当前输出字母，可参考[使用双拼时如何同时显示按下的键以及双拼对应的拼音](https://github.com/rime/rime-double-pinyin/issues/6#issuecomment-754367706)。在 double_pinyin_flypy.schema.yaml 文件中，找到下方的代码行，然后换行加入 `- 'xform/^(.*)$/\U$1\E\t | $1/'`。这是同时显示拼音的核心代码，配置后的双拼会显示为 `{原始输出}|{对应拼音}`。

```yaml
translator:
  dictionary: luna_pinyin
  prism: double_pinyin_flypy
  preedit_format:
```

## 进阶指南

在进阶前，需要进入小狼毫的默认用户文档位置，新建 YAML 文档来存储输入法设置修改。如果使用「朙月拼音·简化字」输入法方案，则新建「luna_pinyin_simp.custom.yaml」。`%APPDATA%\Rime` 是小狼毫默认的用户文档位置。如果安装时修改了用户文档位置，右键单击任务栏小狼毫图标，选择「用户文件夹」，即可进入用户文档。^[[小狼毫 RIME 输入法配置](https://www.dazhuanlan.com/2019/10/06/5d995d43e4432/)]

Rime 的官方文档非常详细，涵盖几乎所有的进阶需求，比如[定制指南](https://github.com/rime/home/wiki/CustomizationGuide)、[文件配置说明](https://github.com/rime/home/wiki/RimeWithSchemata#rime-%E4%B8%AD%E7%9A%84%E6%95%B8%E6%93%9A%E6%96%87%E4%BB%B6%E5%88%86%E4%BD%88%E5%8F%8A%E4%BD%9C%E7%94%A8)、[emoji 集成](https://github.com/rime/rime-emoji) 和 [模糊音设置](https://github.com/rime/home/wiki/CustomizationGuide#%E6%A8%A1%E7%B3%8A%E9%9F%B3)。

如果要在多个设备上[同步用户资料](https://github.com/rime/home/wiki/UserGuide#%E5%90%8C%E6%AD%A5%E7%94%A8%E6%88%B6%E8%B3%87%E6%96%99)，请打开用户文件夹中的 `installation.yaml`，将其中的设备名称 `installation_id` 从长字符串修改为方便识别的名称，并在 `installation.yaml` 文本末尾添加用户资料同步位置 `sync_dir: 'D:\Sync\RIME'`，路径中不能出现中文。

打字习惯会保存在 `<词典名>.userdb.txt` 或 `<词典名>.userdb.kct.snapshot` 中。要还原个人输入习惯，则点击「用户词典管理」>「导入文本码表」来恢复词频记录。

小狼毫主版本已多年未更新，可以用 rime 核心库 [librime](https://github.com/rime/librime/releases) 替换小狼毫程序文件夹中的 rime.dll 来更新输入法。如果输入法中使用了 `Rime.lua` 的动态输出功能，可能会与核心库发生冲突，不要更换 rime.dll。

## 常见问题

### 开机后不能输出中文

有时开机后，不能正常输出中文，这是由于 `WeaselServer.exe` 未正常启动的原因。

此时，我们可以打开程序文件夹中的 `WeaselServer.exe` 来解决问题。该程序默认位置为 `C:\Program Files (x86)\Rime\weasel-0.14.3\WeaselServer.exe`。不要将 `WeaselServer.exe` 放入开启启动程序，会导致程序报错。

如果不想手动启动 `WeaselServer.exe`，可以使用 [WeaselServerAutostart](https://github.com/rockbenben/rime-WeaselServer) 脚本工具。首先把脚本放置于小狼毫「程序文件夹」内，然后将脚本的快捷方式移动至开机启动目录 `%AppData%\Microsoft\Windows\Start Menu\Programs\Startup`。当开机时，如果检测到小狼毫未正常启动，脚本会自动启动对应程序。WeaselServerAutostart 脚本国内下载：<https://wwx.lanzoux.com/if3znkka01g>。

### 输入法报错

将用户文件夹设置为同步文件夹后，出现提示「有错误，请查看日志%TEMP%\rime.weasel.\*.INFO」。这是由于用户文件夹设置为同步文件夹后导致的进程冲突。日志中有提示「另一个程序正在使用此文件，进程无法访问」。

遇到报错后，关闭任务管理器中的 `WeaselServer.exe` 进程，然后重新执行小狼毫算法服务。

### 切换输入法状态

小狼毫只支持按键切换中英文，支持的按键是 Caps_Lock, Shift_L, Shift_R, Control_L, control_R，配置参考[使用 Control 鍵切換中西文](https://gist.github.com/lotem/2981316)，修改 default.custom.yaml。

虽然小狼毫不能组合键切换，但可以使用 Windows 键盘切换设置组合键。设置中选择「时间和语言」>「输入」>「高级键盘设置」>「语言栏选项」>「高级键设置」，Ctrl+Space 是 Windows 默认的中文输入法/非输入法切换的快捷键。

### 输入法候选框闪烁

中文输入法的候选框闪烁，无法显示候选词。排除键盘硬件问题，可以尝试拔除或更换键盘，以确认问题是否复现。Word 2016 下候选框闪烁可以参考 [issue 228](https://github.com/rime/weasel/issues/228)。

### 删除错误「上屏」的词

有时打错几次的字会出现在预选词的前排，影响了输入法的习惯词典。要删除这些错误的「上屏」词，只需将选字光标移到错词上，然后按下 Shift+Delete 或 Control+Delete 即可。

### 符号直接上屏

小狼毫给字符提供了多个候选，比如 / 默认有 `"、", "/", "／", "÷"` 四个候选词。若要按 / 键直接输出「、」，则按下方代码修改 luna_pinyin.schema.yaml 中的 punctuator 区块。^[[一例、定製標點符號](https://github.com/rime/home/wiki/CustomizationGuide#%E4%B8%80%E4%BE%8B%E5%AE%9A%E8%A3%BD%E6%A8%99%E9%BB%9E%E7%AC%A6%E8%99%9F)]

```yaml
punctuator:
  import_preset: default
  full_shape:
    "/": "、"
  half_shape:
    "/": "、"
```

### 指定程序中默认输入法

如果想在特定程序中默认使用英文输入法，可以在 `.\weasel.custom.yaml` 中加入下列代码。

```yaml
patch:
  app_options/windowsterminal.exe: # 程序名字全用小寫字母
    ascii_mode: true
  app_options/powershell.exe:
    ascii_mode: true
  app_options/code.exe:
    ascii_mode: true
  app_options/putty.exe:
    ascii_mode: true
  app_options/listary.exe:
    ascii_mode: true
```

### 不能输出 emoji

根据官方文档的教程设置了 emoji，但无法输出符号。经过多种方案的测试，目前输出特殊字符最稳定的是 [Squirrel 鼠须管配置](https://github.com/ssnhd/rime)，Windows 用户可以参考它来调整自己的输入法。

### 无法触发词库的特殊符号

SuperRime 词库自带的标点及特殊表情设置有问题，需要在输入法设置文件夹 `luna_pinyin_simp.custom.yaml` 中植入触发标点及特殊表情的代码。

```yaml
patch:
  "punctuator/import_preset": mysymbols
  "recognizer/patterns/punct": "^/([a-z]+|[0-9])$"
```
