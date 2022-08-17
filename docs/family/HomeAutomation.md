---
article: false
title: 智能家居
icon: home
order: 3.1
---

智能家居是家庭自动化最基础的一部分。之前一直偷懒直接用米家，但当我想把传感器与电脑联接起时，就开始了研究 Home Assistant 和 Node-RED。

## Home Assistant

Home Assistant 是开源的家庭自动化平台，可自定义集中管理各品牌的智能家居设备。

Home Assistant 原生支持的米家设备较少，需要使用 hacs 下的集成 Xiaomi Miot Auto。默认 Docker 容器不带 hacs，需要手动部署。

1. 下载 [hacs](https://github.com/hacs/integration/releases/)，将其解压到 Home Assistant 配置的 config\custom_components\hacs 文件夹下。
2. 重启 Home Assistant 容器后，在集成中搜索 hacs，安装时按要求提供 github 账户授权。
3. 进入「HACS - 集成 - 浏览并下载存储库」，下载 Xiaomi Miot Auto 并重启 Home Assistant 容器。^[[从零开始，基于群晖轻松玩转开源 homeassistant 智能家居前期搭建](https://baijiahao.baidu.com/s?id=1721932088542289661)]

Home Assistant 虽然一直被吹得很厉害，但即时性的传感器可能不能及时触发，使用时需要注意这点。

> 对于人体传感器、门磁、无线开关类设备，它们的状态通常为瞬时状态 (即：事件)，部分型号支持获取最后一次事件触发的时间，且默认轮询时长为 15 秒，对于无法获取最后触发事件的设备，即使修改轮询时间到 1 秒，也可能无法获取正确的状态。因此此类设备通过本插件集成后不太推荐用于触发实时自动化，仅适合作为如几分钟无人移动关灯这类自动化的条件。如果需要实时更新状态，推荐使用 [多模网关](https://home.miot-spec.com/s/lumi.gateway.mgl03) 配合 [XiaomiGateway3](https://github.com/AlexxIT/XiaomiGateway3) 集成。^[[为什么设备状态会有延迟？如何减小延迟？](https://github.com/al-one/hass-xiaomi-miot/issues/100#issuecomment-909031222)]

## Node-RED

[Node-RED](https://github.com/node-red/node-red) 是本地版的 IFTTT，能与 Home Assistant 打通，实现本地化的互联。新手推荐 [node-red 的入门教程集合](https://bbs.iobroker.cn/t/topic/1165)。

1. 部署 Node-RED 时，Node-RED 对存储文件夹的读写权限要求较高，Docker 部署的话需修改 data 的文件夹权限，为避免麻烦，我给了最高权限 `chmod 777 /volume1/docker/nodered/data`。
2. Node-RED 上安装 [node-red-contrib-home-assistant-websocket](https://zachowj.github.io/node-red-contrib-home-assistant-websocket/guide/#prerequisites)。
   - 设置 - 节点管理 - 控制板 - 安装，点击右侧刷新按钮，加载节点目录，第一次加载要比较长时间，不用关闭网页。
   - 搜索并安装「node-red-contrib-home-assistant-websocket」。
3. 进入「Home Assistant - HACS - 集成 - 浏览并下载存储库」，下载 Node-RED Companion。
4. 进入「Home Assistant - 配置 - 设备与服务 -集成」，添加集成 Node-RED Companion，然后重启 Home Assistant 容器。
5. 进入 nodered 页面，配置 [home assistant websocket](https://zachowj.github.io/node-red-contrib-home-assistant-websocket/guide/#configuration)，点击右上角的部署。^[[树莓派 HomeAssistant 系列（四）NodeRed 安装配置](https://zhuanlan.zhihu.com/p/456741817)]

### 常用节点

- inject: 定时启动，周期性触发执行。
- call service：改变智能设备状态，比如开灯。
  - Domain：触发方式
  - Service：触发命令
  - Device：设备与服务
  - Entity：设备执行模块

## 智能硬件

### Zigbee2MQTT

[Zigbee2MQTT](https://www.youtube.com/watch?v=R_CikjR7tiw) 是开源的智能网关，支持大部分的智能设备。其辐射范围更大，能同时联接 200 个设备，它的插网线版更稳定不易掉线。

不过，我的设备都是米家系，暂时用不到开源网关，等买了其他品牌的设备，再考虑 Zigbee2MQTT。

### 智趣盒子

[智趣盒子](https://item.taobao.com/item.htm?id=635639747170) 集成了 Home Assistant 和 Node-RED 的 Docker，Home Assistant 能部署 Addons、supervisor，能直接插开源网关。

> 盒子基于 arm 的 linux 的 debian 系统上运行 docker，在 docker 的基础上构建了 supervisor 版本，跟 homeassistant 开发官方的 hassos 的最大差异就是打开了 root 的权限，可以在底层进行操作。这些比较适合国内的使用环境（网络改善，装第三方工具等）.

不过与 NAS 相比，智趣这类硬件盒子同样是 Docker 容器，除了能直连网关和想象中的简便攻略，并没什么其他优势。

### 其他硬件

- [远程键盘控制器](https://item.taobao.com/item.htm?id=631865647089)：基于易微联的第三方产品，手机通过 APP 远程控制电脑按键，不过只能按一个按键或者连续 6 个的自定义键值。不确定是否支持 HA。
- [MQTT 转 usb 虚拟键盘鼠标注入器](https://item.taobao.com/item.htm?id=675107124036)：通过 wifi 来控制，店家不清楚 HA。
