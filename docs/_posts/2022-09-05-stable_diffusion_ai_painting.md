---
title: 零基础入门 Stable Diffusion - 无需显卡把 AI 绘画引擎搬进家用电脑
date: 2022-09-05
category:
  - 工具
tag:
  - AI
  - Docker
  - Stable Diffusion
order: -49
---

我从小特别羡慕会画画的伙伴。他们能够将心中的想法画出来，而我最高水平的肖像画是丁老头。但在接触 Stable Diffusion 之后，我感觉自己脱胎换骨，给自己贴上了「会画画」的新标签。

![](https://tc.seoipo.com/2022-09-04-11-53-20.png "丁老头进化旅程")

Stable Diffusion 是一个「文本到图像」的人工智能模型，也是唯一一款开源且能部署在家用电脑（对硬件要求不高）上的 AI 绘图工具。使用 Stable Diffusion，你可以在拥有 6GB 显存显卡，16GB 内存或只依赖 CPU 的电脑上生成图像，并且仅需几秒钟的时间，无需进行预处理或后处理。

想要体验 AI 绘图，你可以使用在线工具 [Hugging Face](https://huggingface.co/spaces/stabilityai/stable-diffusion)、[DreamStudio](https://beta.dreamstudio.ai/) 或[百度文心](https://wenxin.baidu.com/moduleApi/ernieVilg)。但相对于本地部署来说，Hugging Face 需要排队，生成一张图约 5 分钟；DreamStudio 可以免费生成 200 张图片，之后需要缴费；百度文心能用中文生成图片，但仍处于 beta 阶段，未正式商用。此外，这些在线工具的图片调整功能比较有限，无法批量生成图片，只适用于测试和体验。

如果你需要生成大量的 AI 图片，可以通过 Docker Desktop 将 [Stable Diffusion WebUI Docker](https://github.com/AbdBarho/stable-diffusion-webui-docker) 部署到家用电脑上，从而实现免费的 AI 文字绘画，并摆脱在线工具的限制。对于 Mac 用户，推荐选择 Stable Diffusion 的 invoke 分支，如果在部署过程中出现错误，你可以参考 [InvokeAI 文档](https://github.com/invoke-ai/InvokeAI/blob/main/docs/installation/INSTALL_MAC.md#doesnt-work-anymore)进行排查。对于 M1/M2 Mac 用户，推荐使用更简便的 [CHARL-E](https://www.charl-e.com/) 或 [DiffusionBee](https://sspai.com/post/75682)。

![](https://tc.seoipo.com/2022-09-05-16-22-45.png "Stable Diffusion 部署流程")

以 Windows 平台为例，本文将依次介绍 Docker 环境配置、Stable Diffusion 安装及基本使用方法。

## Docker 环境配置

本方案基于 Docker 配置，Docker 实质上是在运行的 Linux 系统中创建了一个隔离的文件环境。因此，Docker 必须部署在基于 Linux 内核的系统上。^[[Windows Docker 安装](https://www.runoob.com/docker/windows-docker-install.html)] 对于 Mac 用户，无需特别配置即可使用。而对于 Windows 用户，若想部署 Docker，则需要安装一个虚拟 Linux 环境，**配置 WSL 或启用 Hyper-V 二选一**。我推荐使用 Windows 子系统 WSL，它需要占用系统盘 30G 的空间。

### 安装 WSL

在管理员 PowerShell 输入命令 `wsl --install`，之后终端会默认安装 Ubuntu。系统下载时间较长，注意别关机。^[[使用 WSL 在 Windows 上安装 Linux](https://docs.microsoft.com/zh-cn/windows/wsl/install#install-wsl-command)] 安装 Ubuntu 完成后，按提示设置 Ubuntu 账户和密码。

### 启用 Hyper-V

以管理员身份打开 PowerShell 控制台，输入命令 `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All`。^[[在 Windows 10 上安装 Hyper-V](https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v#enable-hyper-v-using-powershell)] 重启电脑后，将开启 Hyper-V。

### Linux 路径（Windows）

配置 WebUI Docker 要进入 Linux 环境，因此 Windows 用户需要将其路径转换为 Linux 路径。而 Mac 和 Linux 用户则可以忽略此步骤。

假设容器位于 `D:\Desktop\stable-diffusion-webui-docker`：

1. 把磁盘符号改为小写，转换为 `d:\Desktop\stable-diffusion-webui-docker`
2. 添加 `/mnt/` 前缀，转换为 `/mnt/d:\Desktop\stable-diffusion-webui-docker`。因为 Windows 本地磁盘是挂载在 Linux 的 mnt 目录下的。
3. 将反斜扛 `\` 替换为 `/`。最终得到 Linux 路径 `/mnt/d:/Desktop/stable-diffusion-webui-docker`。

## 配置 Stable Diffusion

### 安装 Docker Desktop

按平台选 [Docker Desktop](https://docs.docker.com/get-docker/) 版本，安装后点击左侧的 Add Extensions，推荐安装 Disk usage 扩展，这将便于管理 Docker 的存储空间。

### 下载 WebUI Docker

下载 [Stable Diffusion WebUI Docker 配置包](https://github.com/AbdBarho/stable-diffusion-webui-docker/releases/)或[阿里云盘聚合版](https://www.aliyundrive.com/s/EKmK7MGrHdn)（定期更新），然后将其解压到指定路径。聚合版包括相关依赖和模型，因此文件较大。如果需要更新 Stable Diffusion WebUI Docker，你可以按照上述步骤重新构建容器。

### 分支介绍

目前，Stable Diffusion 有 sygil、auto、auto-cpu 和 invoke 四个分支。如果需要更换分支，可以修改镜像构建命令 `docker compose --profile [ui] up --build` 中的 `[ui]`，将其替换为所需的镜像名即可。原先的 `hlky` 分支已经更名为 `sygil`，`lstein` 分支更名为 `invoke`。

- **sygil**：界面直观，最高分辨率为 1024x1024，镜像构建命令为 `docker compose --profile sygil up --build`。
- **auto**（推荐）：设置模块最丰富，显示绘画过程，支持随机插入艺术家、参数读取和否定描述，最高分辨率为 2048x2048（高分辨率对显存要求更高），镜像构建命令为 `docker compose --profile auto up --build`。默认使用 6GB 以上的显存，如果你的显卡内存较低，则将配置中的 `--medvram` 改为 `--lowvram`。A 卡用户注意修改[显卡设置](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-AMD-GPUs#running-inside-docker)。
- **auto-cpu**：唯一不依赖显卡的分支。如果没有符合要求的显卡，可以使用 CPU 模式，内存配置需满足 16G 以上，构建镜像的命令为 `docker compose --profile auto-cpu up --build`。
- **invoke**：cli 端非常成熟，WebUI 端参数较少，能自动读取图片记录，适合无进阶需求的新手和 Mac 用户使用，镜像构建命令为 `docker compose --profile invoke up --build`。

### 构建 Stable Diffusion

在启动 Docker Desktop 后，打开 WSL（Ubuntu）或 Mac 终端，输入路径切换命令 `cd /mnt/d/Desktop/stable-diffusion-webui-docker`（路径为 Stable Diffusion WebUI Docker 解压文件目录）。接着，输入以下的部署命令：

```shell
# 自动下载采样模型和依赖包
docker compose --profile download up --build
# 上方命令需要 20 分钟或更长，完成后执行镜像构建命令

docker compose --profile sygil up --build
# auto 是功能最多的分支，可以选择 auto | auto-cpu | invoke | sygil | sygil-sl
```

![](https://tc.seoipo.com/2022-09-04-18-32-31.png)

等待构建完成后，在终端中会提示访问 `http://localhost:7860/`，你就可以在本地电脑上用 AI 生成图片了。^[[Setup Stable Diffusion WebUI Docker](https://github.com/AbdBarho/stable-diffusion-webui-docker/wiki/Setup)]

## 使用说明

以下示例以 sygil 分支为例，其他分支的主题界面略有不同，但在功能上并没有根本性的差异。

### 启动 Stable Diffusion

1. 打开 Docker Desktop。
2. 在 Containers 中选中分支容器，点击启动。
3. 浏览器中访问 `http://localhost:7860/`。

![](https://tc.seoipo.com/2022-09-04-17-06-27.png "Docker Desktop 界面")

### Text-to-Image

Text-to-Image 是 Stable Diffusion 依据文字描述来生成图像的方法。对于崇尚空间结构的画作类型，如风景、创意画等，推荐使用竖图或横图。对于人像类画作，推荐使用 1:1 的方形图像，否则可能会出现多个人脸叠加的情况。生成的图片分辨率受到一定限制，你可以使用 Upscale 对结果图片进行放大处理。

![](https://tc.seoipo.com/2022-09-05-08-28-23.png "Text-to-Image 界面")

默认情况下使用的是 Simple 简单模式。如果你想要使用更多的功能，你可以点击右侧的 Advanced 按钮，进入进阶选项。在进阶选项中，你可以使用场景矩阵、面部修复和分辨率放大等多种高级功能。

### Image-to-Image

Image-to-Image 是依据文字描述和输入源图来生成相关图像。如果输入源图是 Text-to-Image、素描或结构画，该模式可充分填充图像细节。而如果输入源图是细节充分的照片，生成的结果与原图差异较大。此外，你还可以限定区域来生成图像，这非常适合进行图像修改。

![](https://tc.seoipo.com/2022-09-04-15-39-00.png "Image-to-Image 界面")

CLIP interrogator 会根据图像来生成文字描述。Denoising Strength 指与原图的差异度，建议设置在 0.75-0.9 之间。若要魔改图片，可将 Denoising Strength 设为 0.5 或以下。下图中的 Denoising Strength 只有 0.44，整体图片结构及要素未变，但结果如何，你看到了。

![](https://tc.seoipo.com/2022-09-04-15-40-26.png "超级魔改图片")

Image-to-Image 还可以用来移除、替换或修复图像，甚至可以将源图作为结果图的一部分，利用 Stable Diffusion 扩展绘画。

### Image Lab

Image Lab 有批量修正面孔和放大图片分辨率的功能。

Fix Faces 是通过 GFPGAN 模型来改善图片中的面孔，Effect strength 滑块可以控制效果的强度。但实际效果别报太高期许，下图右侧开启了 Fix Faces，只能说勉强有了五官。

![](https://tc.seoipo.com/2022-09-04-15-47-14.png "A woman flying in the air laughing")

Upscale 可以通过 RealESRGAN、GoBIG、Latent Diffusion Super Resolution 和 GoLatent 四种模型来放大图片分辨率。其中，RealESRGAN 有普通和卡通两种模式，你可以根据需要进行选择。放大图片主要消耗 CPU 和内存资源。

## 参数解释

### Classifier Free Guidance

Classifier Free Guidance (CFG) 的默认值为 7。数字越小，创作自由度越高，模型与 Prompt 相关性越低。CFG 参数不影响所需的 VRAM 或生成时间。

- CFG 2-6：虽然有创意，但可能不符合提示。
- CFG 7-10：这些提示适用于大多数情况，既富有创意又具有指导性。
- CFG 10-15：当你确信 Prompt 足够好、足够具体时可以使用。
- CFG 16-20：除非提示非常详细，否则不建议使用。这可能会影响连贯性和质量。

### Step

Step（采样步长/精度）的默认值为 50。Stable Diffusion 通过充满噪音的画布开始创建图像，并逐步去噪以达到最终输出。Step 参数控制这些去噪步骤的数量。通常情况下，越高越好。对于初学者来说，建议使用默认值。Step 参数不影响所需的 VRAM，但 Step 数值的变化会与生成图像的时间成正比。

### Seed

Seed（种子）的默认值为 -1，代表随机值。Seed 是控制初始噪声的数字，在其他参数固定的情况下，每次生成的图像都会不同，这就是种子的作用。如果你保持提示、种子和所有其他参数不变，你可以得到相同的结果。如果一个 Seed 生成了高质量图片，保存该 Seed 并将其应用到其他图片上，以保持高质量。

### Sampler

Sampling method/Diffusion Sampler（扩散采样器）是用来在生成图像过程中对图像进行去噪的方法。由于不同的扩散采样器在计算图像下一步的方式不同，因此它们需要不同的持续时间和步骤来生成可用的图像。建议初学者使用 DDIM，因为它速度快，通常只需要 10 步就能生成好的图像，因此可以很容易和快速地进行试验和改进。

## 文字描述图像

Stable Diffusion 通过英文文字内容来描述场景或物体，以此来决定生成的图像中会出现什么。文字描述是决定图像生成质量的关键因素。^[[Stable Diffusion Prompt Book - OpenArt](https://openart.ai/promptbook)]

样例：`A beautiful painting {画作种类} of a singular lighthouse, shining its light across a tumultuous sea of blood {画面描述} by greg rutkowski and thomas kinkade {画家/画风}, Trending on artstation {参考平台}, yellow color scheme {配色}`。^[[外网爆火的 4 款「你说我画」自动作画工具，我们测了下，有 1 款的确超强](https://www.ifanr.com/app/1484403)]

### 常规描述

1. 输入图像的对象、主体，比如一只熊猫、一个持剑的战士，**不要描述动作、情绪和事件**；^[[最时髦的 AI 画画，一文包教包会](https://www.guokr.com/article/462587/)]
2. **图像种类**：一幅画（a painting of + raw prompt）还是一张照片（a photograph of + raw prompt），或者 Watercolor（水彩）、Oil Paint（油画）、Comic（漫画）、Digital Art（数码艺术）、Illustration（插画）、realistic painting（写实画）、photorealistic（写实照片）、Portrait photogram（肖像照）、Low Poly（低面建模）、3D Item Rende（三维渲染）、sculpture (雕塑) 等等，图像种类可以叠加。
3. **画家/画风**：建议混合多个画家的风格，比如 `Studio Ghibli, Van Gogh, Monet`，或描述风格种类，比如 `very coherent symmetrical artwork`，将作品结构设为「连贯且对称」。
4. **色调**：yellow color scheme 指整个画面的主色调为黄色。
5. **参考平台**：Trending on ArtStation，也可以替换为「Facebook」「Pixiv」「Pixbay」等。
   ![](https://tc.seoipo.com/2022-09-16-22-33-26.png "相同参数下，不同平台生成的图片")

### 特征描述

除画面主体外，可以用其他具象物体和形容词来填充画面细节。描述词要具体，讲出你要的物体和它的特征。

- 次要元素：物体不要太多，两到三个就好。若要特别强调某个元素，可以加很多括号或者惊叹号，比如 `beautiful forest background, desert!!, (((sunset)))` 中会优先体现「desert」和「sunset」元素。
- 人物特征：`detailed gorgeous face, delicate features, elegant, Googly Eyes, Bone, big tits, silver hair, olive skin, Mini smile`；
- 特定润色：`insanely detailed and intricate, gorgeous, surrealism, smooth, sharp focus, Painting, Digital Art, Concept Art, Illustration, Artstation, in a symbolic and meaningful style, 8K`；
- 光线描述：`Natural Lighting, Studio lighting, Cinematic Lighting, Crepuscular Rays, X-Ray, Backlight`，或逼真光照 `Unreal Engine`；
- 镜头视角：`Cinematic, Magazine, Golden Hour, F/22, Depth of Field, Side-View`，虚化背景 `Bokeh`；
- 画面质量：`professional, award winning, breathtaking, groundbreaking, superb, outstanding`；
- 其他描述：细节和纹理、物体占据画面的大小、年代、渲染 / 建模工具等，比如 Vivid Colors（艳丽色彩）。

### prompt 权重

假设你在提示词中使用了 `mountain`，生成的图像很可能会有树。但如果你想要生成没有树的山的图像，可以使用 `mountain | tree:-10`。其中 `tree:-10` 表示对于树的权重非常负，因此生成的图像中不会出现树。通过权重词，我们还能生成更复杂的图像，例如 `A planet in space:10 | bursting with color red, blue, and purple:4 | aliens:-10 | 4K, high quality`。^[[Learn Prompting: Weighted Terms](https://learnprompting.org/docs/Images/weighted_terms)]

Prompt 中的词语顺序代表其权重，越靠前权重越大。如若某物未出现在图像中，可以将该名词放在首位。

### 否定提示

auto/auto-cpu 分支中可以设置 Negative prompt（否定提示），以避免画面中出现指定元素。

- 修正畸形：`disfigured, deformed hands, blurry, grainy, broken, cross-eyed, undead, photoshopped, overexposed, underexposed, lowres, bad anatomy, bad hands, extra digits, fewer digits, bad digit, bad ears, bad eyes, bad face, cropped: -5`。
- 避免裸体：`nudity, bare breasts`。
- 避免黑白照：`black and white,monochrome`。

### prompt 参考

除画面主体描述外，其他要素并非必须。如果你只是简单尝试，输入主体「apples」即可。

如果你不知道生成什么图像，可以使用 [promptoMANIA](https://promptomania.com/stable-diffusion-prompt-builder/) 、[WEIRD WONDERFUL AI ART](https://weirdwonderfulai.art/resources/disco-diffusion-modifiers/) 按提示组合描述，或参考 AI 图库 [PromptHero](https://prompthero.com/) 和 [OpenArt](https://openart.ai/) 上其他人分享的成品图和描述文案，比如

> goddess close-up portrait skull with mohawk, ram skull, skeleton, thorax, x-ray, backbone, jellyfish phoenix head, nautilus, orchid, skull, betta fish, bioluminiscent creatures, intricate artwork by Tooth Wu and wlop and beeple, highly detailed, digital painting, Trending on artstation, very coherent symmetrical artwork, concept art, smooth, sharp focus, illustration, 8k

## Prompt matrix

Prompt matrix 是 sygil 分支的功能，可以按不同条件组合生成多张相关但不同的画面，适合用于制作视频素材。^[[stable-diffusion Prompt matrix](https://github.com/sygil/stable-diffusion#prompt-matrix)] 此时，批次数量的设置会被忽略。如果你对将图像转化为视频有兴趣，可以尝试使用 [Deforum Stable Diffusion Local Version](https://github.com/HelixNGC7293/DeforumStableDiffusionLocal)。

<BiliBili bvid="BV1YP411V7vV" />

上方视频的调教词为 `A mecha robot in World War II in realistic style|Shoot with another mecha robot|Bombed by planes|Missile drop|broken|Repaired|cinematic lighting`。`|` 符号后的场景条件将进行排列组合，视频样例有 6 个场景条件生成 64 张图。

另外，我们可以指定场景条件位置，比如 `@(moba|rpg|rts) character (2d|3d) model` 表示 `(moba|rpg|rts 三选一) character (2d|3d 二选一) model`，也就是会生成 3\*2 张图片。开头的 `@` 是触发指定场景条件位置的符号，不能省略。

## Textual Inversion

Textual Inversion（文本倒置）是 auto/auto-cpu 分支提供的功能，可以个人定制单词在模型中的含义。比如大众模型中医生多是白人男性，而我们可以输入 5 张亚洲女性照片并将其与 doctor 关联，经过 Textual Inversion 处理后的模型生成的医生形象将以亚洲女性为主。^[[Textual Inversion](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Textual-Inversion)]

Textual Inversion 定制流程：

1. Preprocess images：设置源图目录和输出目录。
2. Create embedding（新建嵌入）：建立模型属性。
3. 待续。

## 常见问题

### Docker Desktop failed

未正常安装/关闭 Docker 容器时，可能会报错 `Docker Desktop failed to start/stop`。

先删除 `%AppData%` 路径下的 Docker 文件夹，然后在 PowerShell 中输入下方命令，关闭 WSL 和 docker-desktop。最后，手动重启 Docker Desktop。

```shell
wsl --shutdown
wsl -l -v
wsl --unregister docker-desktop
wsl -l -v
```

### Docker Desktop cannot start

`Hardware assisted virtualization and data execution protection must be enabled in the BIOS` 报错说明电脑没开启虚拟化。

在开机的时候多按几次 `F2` 或 `DEL` 进入 BIOS，然后设置中开启「Intel Virtual Technology」，AMD 则是将「SVM Support」设置为设置为「Enable」的状态；最后点击「F10」保存退出即可。

### docker 命令失败

`The command 'docker' could not be found` 说明当前命令行确实 Docker 环境缺失，检查 Docker Desktop 是否启动。

### exited with code 137

`exited with code 137` 通常意味着内存不足，超出内存导致进程被关闭。建议硬件配置最低为 16G 内存，尤其是使用 auto-cpu 模式时。

### 端口访问被拒

Docker 容器原本运行正常，端口访问突然被拒绝了，显示 `Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:7860 -> 0.0.0.0:0: listen tcp 0.0.0.0:7860: bind: An attempt was made to access a socket in a way forbidden by its access permissions`。

在 Powershell 中输入 `netsh int ipv4 show excludedportrange protocol=tcp` 检查是否处于被排除端口范围，然后输入 `reg add HKLM\SYSTEM\CurrentControlSet\Services\hns\State /v EnableExcludedPortRange /d 0 /f` 开启端口。操作完成后，重启电脑即可解封端口。^[[Windows 端口访问被拒](https://github.com/docker/for-win/issues/3171#issuecomment-572571882)]

### FileNotFoundError

再次架构容器时报错 `FileNotFoundError: [Errno 2] No such file or directory: '/models/model.ckpt'`，这是架构位置错误导致的。此时，我们需要检查是否通过 WSL 输入的架构命令，并且 Stable Diffusion WebUI Docker 解压路径是否配置正确。

### 采样模型

采样模型是 AI 绘画的核心。2022.09.10 已支持自动下载采样模型，下方列表仅做参考。

- [Stable Diffusion v1.4 (4GB)](https://www.googleapis.com/storage/v1/b/aai-blog-files/o/sd-v1-4.ckpt?alt=media), 将压缩包文件重命名为 `model.ckpt`。
- (可选) [GFPGANv1.4.pth (340MB)](https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.4.pth)。
- (可选) [RealESRGAN_x4plus.pth (64MB)](https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth) 和 [RealESRGAN_x4plus_anime_6B.pth (18MB)](https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth)。
- (可选) [LDSR (2GB)](https://heibox.uni-heidelberg.de/f/578df07c8fc04ffbadf3/?dl=1) 和 [LDSR 配置](https://heibox.uni-heidelberg.de/f/31a76b13ea27482981b4/?dl=1)，分别重命名为 `LDSR.ckpt` 和 `LDSR.yaml`。

## 最后

尽管 Stable Diffusion 目前还不能作为生产力工具，但它使设计变得更加简单，也为普通人开启了 AI 绘画的可能性。建议你亲自体验，实际部署一下，让自己拥有更多的可能性。

本文于「[少数派首发](https://sspai.com/post/75544)」。
