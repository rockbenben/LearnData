---
title: Switch 升级记录与资源汇编
date: 2023-10-29
category:
  - 工具
tag:
  - games
order: -0.03
---

家里有一台多年前购买的港版软破大气层 Nintendo Switch，已经闲置了相当长时间。最近，我想用 Switch 来恢复运动，就重新翻出了它，但面临一些问题。

注入器、大气层以及系统版本都相当陈旧，而之前的卖家也无法联系上。因此，我不得不自行研究如何进行升级，同时寻找游戏下载渠道。闲置 Switch 系统版本停留在 10，而我的目标是将它升级到最新的版本，也就是 17。

以下是我进行升级的步骤：

## 更新注入器

首先，我需要更新注入器，我使用的是 ns-ATMOSPHERE 注入器，它看起来像一个白色的 USB 设备。由于注入器的版本低于 Hekate 4.2，所以我需要更新 payload。

1. 在 Windows 系统上安装 NS-Atmosphere Programmer。由于该应用的开发商已经跑路，我在 GBATEMP 论坛上找到两个版本，可以自行选择：[0.3 STEUP](https://www.mediafire.com/file/av2yur8zse5h016/Setup+NS-Atmosphere+programmer+v0.3.exe/file)，[0.4 Protable](https://gbatemp.net/attachments/ns-atmosphere-v0-4-rar.274028/)。^[[NS Atmosphere Software Mirror](https://gbatemp.net/threads/ns-atmosphere-software-mirror.571116/)]

2. 打开 ns-ATMOSPHERE 的 ON 按钮，双击 RST 按钮，然后使用 USB 连接到 PC 端。此时 ns-ATMOSPHERE 将亮起粉灯。如果未出现粉灯，表示未被识别，可以尝试更换 USB 端口或重新尝试之前的操作。

3. 打开下载好的 NS-Atmosphere Programmer，点击 Refresh 来识别端口，然后点击 Browse 选择需要注入的 payload bin。在这里使用的是 [hekate](https://github.com/CTCaer/hekate/releases)，从其发布页面下载最新版本的 `hekate_ctcaer_6.0.7_Nyx_1.5.6.zip`，然后解压得到 `hekate_ctcaer_6.0.7.bin`，这就是要注入的 bin。

如果有不清楚的地方，你可以观看 [NS Atmosphere Dongle Tutorial!](https://www.twitch.tv/videos/346892592) 这个视频教程，或者查看这篇更详细的[注入器更新教程](https://www.cnblogs.com/letleon/p/NS_Atmosphere_payload_Programmer_aliyundrive_backup.html)。

## 大气层&主机升级

### 固件准备

接下来，我需要准备大气层和主机的升级。我使用了 [Yuanbanba/Atmosphere](https://github.com/Yuanbanba/Atmosphere/releases) 这个整合包，其中包含了大气层的迷你版本、Tesla 插件包以及相册 NRO 软件包，非常适合懒人使用。

至于 Switch 最新的离线升级固件，我在 [Switch Firmwares](https://darthsternie.net/switch-firmwares/) 上找到了。需要注意的是，这些固件分为全球版和国行版，建议选择全球版。

### 升级流程

1. 关机后，取出后盖板上的 SD 卡，并将其连接到计算机。
2. 在 SD 卡的根目录保留可能存在的 emuMMC 和 nintendo 文件夹，其他文件全部删除。（如果你有补丁或金手指，请务必自行备份。）
3. 复制大气层文件和解压后的离线升级固件到 SD 卡的根目录。
4. 如果你有 emuMMC 文件夹，则选择启动 `虚拟（破解）系统`；如果没有，则参考 [Create an emuMMC](https://switch.homebrew.guide/emummc/emummc.html) 教程创建 emuMMC 虚拟系统。请注意，创建 emuMMC 虚拟系统将占据 SD 卡 29G 的空间，并清空和重新分区 SD 卡，创建后需重新复制大气层文件和固件。
5. 最后，进入系统后，打开「相册」，启动 daybreak 插件，然后选择安装离线固件包。随后全部选择右侧的选项并按下 A，安装完成后重启系统即完成升级。

## 进入大气层系统

1. 在关机状态下，拆下右侧手柄（红色手柄）。如果已经开机，长按电源键约 8 秒，选择关闭电源。
2. 将短接器插入右侧手柄的空槽中，确保插到底。
3. 打开注入器的开关，等到灯亮起后插入 ns 的充电口。
4. 按住音量键 `+`，然后按下电源键，稍等片刻，大气层界面将会出现，此时可以拔下盒子和短接器，然后接上右手柄。
5. 大气层系统中点击「启动」，选择第二个选项 - 虚拟（破解）系统。

## 安装游戏

### DBI

关于大气层安装游戏和 DLC 的方法，请参考 [Installation of games, DLC, updates](https://nswtl.info/switch-eng/games.html)：

1. 使用 USB 将 Switch 连接到 PC。
2. 进入「相册」，启动 DBI，按 `X` 来运行 `Run MTP Responder`。此时，PC 端将出现 Switch 设备。
3. 打开 PC 上出现的 Switch 设备，根据你想安装游戏的位置，将游戏复制到 `5: SD Card install` 或 `6: NAND install`。
4. 安装结束后，按 `B` 停止 MTP 服务器并卸载 MTP 设备，然后再按 `B` 关闭 DBI。

如果你安装的是需要网络登录的游戏，例如《Just Dance 2023》，请确保按照游戏包中提供的离线激活提示进行操作。在安装前，需将离线激活和 Mod 文件移出安装包，以避免出现 `not acceptable` 的错误提示。

DBI 是大气层增强包的内置插件。如果不使用增强包，你也可以手动安装 DBI，具体流程请参考 [DBI 安装及使用说明](https://github.com/rashevskyv/dbi/blob/main/README_ENG.md)。

### NS-USBloader

如果你不喜欢 DBI 的界面，也可以使用 Awoo Installer 通过 [NS-USBloader](https://github.com/developersu/ns-usbloader) 来安装 Switch 游戏。

然而，在安装游戏前，你需要在 NS-USBloader 的左侧，点击设置按钮，然后选择右侧的「下载并安装驱动程序」。如果不执行此步，Switch 可能会提示 USB 设备不兼容。

## 游戏资源

游戏资源可在 [SWITCH TORRENT LIBRARY](https://nswtl.info/) 上获取。这是最大且免费的游戏库，适用于 Nintendo Switch 和其他平台。在测试中，我找到了所有需要的游戏。

点击页面上的标题区域，将跳转至 Telegram Bot。向机器人发送游戏的英文名称，机器人将回复游戏的种子文件和版本说明。游戏的英文名称可以在 [3DMGAME Switch 专区](https://www.3dmgame.com/games/ns_all_1/)中查找。

如果需要金手指，可以在 DBI 游戏安装的第三步将金手指文件复制到 `1: SD Card\atmosphere\contents` 文件夹中。然后，进入相册，打开 Edizon，按下 `L` 键进入系统模块管理，开启 Tesla 插件。在需要开启金手指的游戏中，按住 `L` 键再按向下方向键，即可激活金手指菜单。金手指资源见 [Switch520](https://www.gamer520.com/jinshouzhi)。

部分游戏列表：

- 健身游戏：舞力全开（Just Dance），有氧拳击 2（Fitness Boxing 2），健身拳击：北斗神拳（Fitness Boxing - Fist of the North Star），健身环大冒险（Ring Fit Adventure），健身巡游（Fitness Circuit），Nintendo Switch Sports。
- Mario 系列：超级马里奥兄弟：惊奇（Super Mario Bros. Wonder），马里奥派对：超级巨星（Mario Party Superstars），马里奥和疯狂兔子：星耀之愿（Mario plus Rabbids - Sparks of Hope）。
- 休闲游戏：世界游戏大全 51（Clubhouse Games 51 Worldwide Classics），太鼓达人（Taiko no Tatsujin），胡闹厨房（Overcooked），大富翁 11。
- 动作冒险：双人成行（It Takes Two），荒野大镖客：救赎（Red Dead: Redemption），塞尔达传说：旷野之息（The Legend of Zelda - Breath of the Wild），女神异闻录 5（Persona 5 Royal），十三机兵防卫圈（13 Sentinels Aegis Rim），AI 梦境档案（AI The Somnium Files）。
- 格斗游戏：真人快打 1（Mortal Kombat 1），IGS 经典街机合集（IGS Classic Arcade Collection）。
- 竞技游戏：FIFA 23，NBA 2K24，曼岛 TT 赛：边缘竞速 3（TT Isle Of Man: Ride on the Edge 3）。
- 真人影视互动：春逝百年抄（The Centennial Case: a Shijima Story），十个约会（Ten Dates）。
