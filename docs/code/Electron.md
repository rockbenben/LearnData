---
article: false
title: Electron
icon: layout
order: 7
---

[Electron](https://www.electronjs.org/) 是使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序框架。Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序。

按[环境部署教程](../deploy/VPS.html#环境部署)，部署 npm 和 yarn，然后部署 electron 环境。

```bash
# 部署 electron，electron-builder
npm i -d electron@latest #更新最新版 Electron，不能全局安装，否则 electron-builder 找不到
yarn add electron-builder --dev #部署 electron-builder

set-ExecutionPolicy RemoteSigned #若 yarn 命令报错，则管理员运行此命令

# 全局安装时，去除^，手动指定 package.json 中的 electron 版本，然后运行下方打包命令
# 将打包命令加入 package.json，直接使用打包命令
yarn postinstall
yarn dist
```

## 使用问题

- electron cdn 需要连接网络，必须用本地环境安装。
- Electron 定位的 location 为 窗口链接，而非网页链接。
- [跨域 CORS 配置](https://imf.ms/web/2022/07/05/my-first-web-hybird-project-experience/#%E8%B7%A8%E5%9F%9F-cors-%E9%85%8D%E7%BD%AE)：有的应用需要访问的是本地 Web Server，与服务端接口在不同域

### nsis 配置

```json
"nsis": {
  "oneClick": false, // 是否一键安装
  "allowElevation": true, // 允许请求提升。如果为 false，则用户必须使用提升的权限重新启动安装程序。
  "allowToChangeInstallationDirectory": true, // 允许修改安装目录
  "installerIcon": "./build/icons/aaa.ico",// 安装图标
  "uninstallerIcon": "./build/icons/bbb.ico",//卸载图标
  "installerHeaderIcon": "./build/icons/aaa.ico", // 安装时头部图标
  "createDesktopShortcut": true, // 创建桌面图标
  "createStartMenuShortcut": true,// 创建开始菜单图标
  "shortcutName": "xxxx", // 图标名称
  "include": "build/script/installer.nsh", // 包含的自定义 nsis 脚本 这个对于构建需求严格得安装过程相当有用。
  "script" : "build/script/installer.nsh" // NSIS 脚本的路径，用于自定义安装程序。默认为 build / installer.nsi
},
```

### 打包报错

执行打包命令后，提示 `cannot unpack electron zip file, will be re-downloaded`。

手动下载对应版本 electron，然后将压缩包放置于 `C:\Users\用户名\AppData\Local\electron\Cache`。

### 跨系统打包

electron 不允许跨系统打包，所以 Mac 打包需要在 iOS 环境，Linux 打包需在 Linux 环境。

Win11 可允许内建子系统，管理员身份运行 Powershell，输入 bash 即可进入 Linux 子系统。也可以直接打开在 Microsoft store 中下载的 Ubuntu 进入子系统，初次进入 Linux 子系统需要设置 Linux 的用户名及密码。

更多命令参考：

```bash
#安排装更新软件源，安装 node 和 npm 环境
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm

sudo npm install npm@latest -g #升级 npm
sudo npm install -g n #安装用于安装 nodejs 的模块 n
sudo n stable #通过 n 模块安装指定的 nodejs
```
