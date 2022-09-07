---
title: 零基础入门 Stable Diffusion - 无需天价显卡就能用的 AI 绘画工具
date: 2022-09-05
category:
  - 工具
tag:
  - AI
  - Docker
  - Stable Diffusion
order: -49
---

我从小特别羡慕会画画的伙伴，他们能绘出心中所想，而本人水平最高的肖像画是丁老头。接触 Stable Diffusion 后，我脱胎换骨，给自己贴上了「会画画」的新标签。

![](http://tc.seoipo.com/2022-09-04-11-53-20.png "丁老头进化旅程")

Stable Diffusion 是以文本生成图像的 AI 工具，也是唯一一款能部署在家用电脑上的 AI 绘图工具，**可以在 RTX 2060 显卡等 6GB 显存显卡下运行**，并在几秒钟内生成图像，无需预处理和后处理。当然，如果只是想体验 Stable Diffusion，也可以使用在线工具 [Hugging Face](https://huggingface.co/spaces/stabilityai/stable-diffusion) 和 [DreamStudio](https://beta.dreamstudio.ai/)。与本地部署相比，Hugging Face 需排队，生成一张图约 5 分钟；DreamStudio 可免费生成 200 张图片，之后需要缴费。更重要的是，这类在线工具对图片的调教功能偏弱，无法批量生成图片，只能用于测试体验。

如果想大批量使用，可以像我一样，使用 Docker Desktop 将 [Stable Diffusion WebUI Docker](https://github.com/AbdBarho/stable-diffusion-webui-docker) 部署在 Windows 系统，从而利用电脑显卡免费实现 AI 文字绘画，不再被在线工具所限制。Mac 同样适用于该方法，并可省略下方的环境配置步骤。

![](http://tc.seoipo.com/2022-09-05-16-22-45.png "Stable Diffusion 部署流程")

本文以 Windows 平台为例，下面会依次介绍环境配置，Stable Diffusion 安装和基本使用方法。

## Docker 环境配置

本方案基于 Docker 配置，而 Docker 实质上是在已经运行的 Linux 下制造了一个隔离的文件环境，它必须部署在 Linux 内核的系统上。^[[Windows Docker 安装](https://www.runoob.com/docker/windows-docker-install.html)] 因此，Mac 不用特别配置，而 Windows 系统想部署 Docker 就必须需要安装一个虚拟 Linux 环境，**配置 WSL 或是启用 Hyper-V**。下面我会介绍各自的启用方式，**二选一即可**，推荐使用 WSL。

### 安装 WSL

在管理员 PowerShell 输入命令 `wsl --install`，之后终端会默认安装 Ubuntu。系统下载时间较长，注意别关机。^[[使用 WSL 在 Windows 上安装 Linux](https://docs.microsoft.com/zh-cn/windows/wsl/install#install-wsl-command)] 安装 Ubuntu 完成后，按提示设置 Ubuntu 账户和密码。

### 启用 Hyper-V

以管理员身份打开 PowerShell 控制台，输入命令 `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All`。^[[在 Windows 10 上安装 Hyper-V](https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v#enable-hyper-v-using-powershell)] 重启电脑后，将开启 Hyper-V。

## 配置 Stable Diffusion

按系统选择 [Docker Desktop](https://docs.docker.com/get-docker/) 版本，安装后点击左侧的 Add Extensions，推荐使用 Disk usage 扩展，便于管理 Docker 存储空间。

![](http://tc.seoipo.com/2022-09-04-17-06-27.png "Docker Desktop 界面")

然后，将 [Stable Diffusion WebUI Docker](https://github.com/AbdBarho/stable-diffusion-webui-docker/releases/) 下载并解压到本地硬盘。接着，选择采样模型并下载依赖文件，将其放于 Stable Diffusion WebUI Docker 解压目录中的 model 文件夹。^[[Setup Stable Diffusion WebUI Docker](https://github.com/AbdBarho/stable-diffusion-webui-docker#setup)] 或者，使用阿里云盘下载 [聚合版](https://www.aliyundrive.com/s/EKmK7MGrHdn)。

- [Stable Diffusion v1.4 (4GB)](https://www.googleapis.com/storage/v1/b/aai-blog-files/o/sd-v1-4.ckpt?alt=media), 将压缩包文件重命名为 `model.ckpt`。
- (可选) [GFPGANv1.3.pth (333MB)](https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.3.pth)。
- (可选) [RealESRGAN_x4plus.pth (64MB)](https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth) 和 [RealESRGAN_x4plus_anime_6B.pth (18MB)](https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth)。
- (可选) [LDSR (2GB)](https://heibox.uni-heidelberg.de/f/578df07c8fc04ffbadf3/?dl=1) 和 [LDSR 配置](https://heibox.uni-heidelberg.de/f/31a76b13ea27482981b4/?dl=1)，分别重命名为 `LDSR.ckpt` 和 `LDSR.yaml`。

将采样模型整理好后，结构如下：

```yaml
models/
├── model.ckpt
├── GFPGANv1.3.pth
├── RealESRGAN_x4plus.pth
├── RealESRGAN_x4plus_anime_6B.pth
├── LDSR.ckpt
└── LDSR.yaml
```

## 启动 Stable Diffusion

配置好 Stable Diffusion WebUI Docker，就可以进入 Linux 环境启动 Docker 容器。不过在此之前，我们需拥有 Stable Diffusion 的 Linux/Mac 路径。

Windows 本地磁盘挂载在 Linux 的 mnt 目录下，因此 Windows 的 Linux 路径需先添加 `/mnt/` 前缀，然后把磁盘符号改为小写，并将反斜扛 `\` 替换为 `/`。假设容器位于「D:\Backup\Libraries\Desktop\stable-diffusion-webui-docker」，转换为 Linux 路径则是「/mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker」。（Mac 可忽略本段，直接使用自身路径。）

接着，启动 Docker Desktop，打开 WSL Ubuntu 或 Mac 终端输入命令 `cd /mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker`，进入 Stable Diffusion WebUI Docker 解压路径。随后，执行首次容器构建命令 `docker compose build`，第一次构建容器需要 10 分钟左右。

然后，执行容器再次构建命令 `docker compose up --build`，把采样模型与 Stable Diffusion 打包进同一容器。构建完成后，命令行提示 `Running on local URL: http://localhost:7860/`。浏览器打开 `http://localhost:7860/`，你就可以在本地 AI 生成图片了。

![](http://tc.seoipo.com/2022-09-04-18-32-31.png)

下一次使用时，你只需打开 Docker Desktop 就会启动 Stable Diffusion。如果要更新 Stable Diffusion，使用新版 [配置文件](https://github.com/AbdBarho/stable-diffusion-webui-docker/releases/)，按上方步骤重新构建容器即可。

## 界面说明

### Text-to-Image

Text-to-Image 是 Stable Diffusion 依据文字描述来生成图像。

![](http://tc.seoipo.com/2022-09-05-08-28-23.png "Text-to-Image 界面")

默认使用 Simple 简单模式，点击右侧按钮 Advanced，可查看进阶选项，使用进阶的场景矩阵、面孔修复和分辨率放大等多种功能。

### Image-to-Image

Image-to-Image 依据文字描述和输入源图，生成相关的图像。该模式若以素描、结构画为来源图，可充分填充图像细节；若以细节充分的照片为来源图，则会输出差异较大的结果。

![](http://tc.seoipo.com/2022-09-04-15-39-00.png "Image-to-Image 界面")

Denoising Strength 指与原图的差异度，建议在 0.75-0.9，魔改图片可以设为 0.5 以下。下图中的 Denoising Strength 只有 0.44，整体图片结构与要素没变，但结果如何你看到了。

![](http://tc.seoipo.com/2022-09-04-15-40-26.png "超级魔改图片")

### Image Lab

Image Lab 能批量修正面孔和放大图片分辨率。

Fix Faces 是通过 GFPGAN 模型来改善图片中的面孔，Effect strength 滑块可以控制效果的强度。但实际效果别报太高期许，下图右侧开启了 Fix Faces，只能说勉强有了五官。

![](http://tc.seoipo.com/2022-09-04-15-47-14.png "A woman flying in the air laughing")

Upscale 放大分辨率功能有 RealESRGAN，GoBIG，Latent Diffusion Super Resolution 和 GoLatent 四种模型，其中的 RealESRGAN 有普通与卡通两种模式，可按需选择。Upscale 图片主要消耗 CPU 与内存资源。

## 使用说明

### 文字描述图像

Stable Diffusion 的核心功能是以文字内容描绘一个场景或事物，从而决定你的画面中将出现什么。因此，文字描绘是决定图像生成质量的关键因素。接下来，我会以官方文档案例为例，解构描述文字的要素和标准。^[[外网爆火的 4 款「你说我画」自动作画工具，我们测了下，有 1 款的确超强](https://www.ifanr.com/app/1484403)]

样例：`A beautiful painting (画作种类) of a singular lighthouse, shining its light across a tumultuous sea of blood (画面描述) by greg rutkowski and thomas kinkade (画家/画风), Trending on artstation (参考平台), yellow color scheme (配色)`。

- 画作种类：ink painting（水墨画），oil painting（油画），comic（漫画），illustration（插画），realistic painting（写实风）等等。
- 参考平台：Trending on artstation，也可以替换为「Facebook」「Pixiv」「Pixbay」等等。
- 画家/画风：成图更接近哪位画家的风格，此处可以输入不止一位画家。比如「Van Gogh:3」and「Monet:2」，即作品三分像梵高，两分像莫奈。
- 配色：yellow color scheme 指整个画面的主色调为黄色。

除画面描述外，其他要素并非必须。如果你只是简单尝试，甚至可以只输入「apples」。

### Prompt matrix

Prompt matrix 是按不同条件组合生成多张相关但不同的画面，可以用于制作视频素材。^[[stable-diffusion Prompt matrix](https://github.com/hlky/stable-diffusion#prompt-matrix)] 此时，批次数量的设置会被忽略。

<iframe height=400 width=100% src="//player.bilibili.com/player.html?bvid=BV1YP411V7vV&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

Prompt matrix 官方样例为 `a busy city street in a modern city|illustration|cinematic lighting`，`|` 符合后的场景条件将进行排列组合，样例有 2 个场景条件生成 4 张图。

另外，我们可以指定场景条件位置，比如 `@(moba|rpg|rts) character (2d|3d) model` 表示 `(moba|rpg|rts 三选一) character (2d|3d 二选一) model`，也就是会生成 3\*2 张图片。开头的 `@` 是触发指定场景条件位置的符号，不能省略。

### 更换 WebUI 主题

目前有默认、AUTOMATIC1111 和 lstein 三种 WebUI。如果要更换 WebUI 主题，则需在执行二次构建命令前，切换目录。比如：

```bash
cd AUTOMATIC1111
docker compose up --build
```

## 常见问题

### Docker Desktop failed

未正常关闭 Docker 容器时，下次启动可能会报错 `Docker Desktop failed to stop` 。在 PowerShell 中输入关闭 WSL 和 docker-desktop 命令，可以修复该问题。

```PowerShell
wsl --shutdown
wsl -l -v
wsl --unregister docker-desktop
wsl -l -v
```

### docker 命令失败

`The command 'docker' could not be found` 说明当前命令行确实 Docker 环境缺失，检查 Docker Desktop 是否启动。

### 端口访问被拒

Docker 容器原本运行正常，端口访问突然被拒绝了，显示 `Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:7860 -> 0.0.0.0:0: listen tcp 0.0.0.0:7860: bind: An attempt was made to access a socket in a way forbidden by its access permissions`。

在 Powershell 中输入 `netsh int ipv4 show excludedportrange protocol=tcp` 检查是否处于被排除端口范围，然后输入 `reg add HKLM\SYSTEM\CurrentControlSet\Services\hns\State /v EnableExcludedPortRange /d 0 /f` 开启端口。操作完成后，重启电脑即可解封端口。^[[Windows 端口访问被拒](https://github.com/docker/for-win/issues/3171#issuecomment-572571882)]

### FileNotFoundError

再次架构容器时报错 `FileNotFoundError: [Errno 2] No such file or directory: '/models/model.ckpt'`，这是架构位置错误导致的。此时，我们需要检查是否通过 WSL 输入的架构命令，并且 Stable Diffusion WebUI Docker 解压路径是否配置正确。

### Mac 报错

没在 Mac 上测试过，如果出现报错，将主题切换到 lstein，然后参考文档 [macOS Instructions](https://github.com/lstein/stable-diffusion/blob/main/README-Mac-MPS.md#macos-instructions)。

## 最后

Stable Diffusion 还不能作为生产力工具，但它让设计变得简单，也让更多普通人打开了 AI 绘画的可能性。推荐大家实际部署玩下，让自己拥有更多的可能。

本文于「[少数派首发](https://sspai.com/post/75544)」。
