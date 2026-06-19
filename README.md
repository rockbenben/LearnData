<div align="center">
  <h1>📚 LearnData 开源笔记</h1>
  <p><strong>开源工具、效率方法、心理学探索的自我提升笔记</strong></p>

  <p>
    <a href="https://newzone.top"><img src="https://img.shields.io/badge/🌐_使用案例-newzone.top-blue?style=for-the-badge" alt="使用案例"></a>
    <a href="https://discord.gg/PZTQfJ4GjX"><img src="https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&label=Discord&logo=discord&style=for-the-badge" alt="Discord"></a>
  </p>

  <p>
    <img src="https://img.shields.io/github/stars/rockbenben/LearnData?style=social" alt="GitHub Stars">
    <img src="https://img.shields.io/github/forks/rockbenben/LearnData?style=social" alt="GitHub Forks">
    <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License"></a>
  </p>

  <p>
    <a href="https://t.me/aishort_top">📢 Telegram</a> ·
    <a href="https://qm.qq.com/q/qvephMO8q4">💬 QQ 群</a> ·
    <a href="https://github.com/rockbenben/LearnData/issues">🐛 反馈</a>
  </p>
</div>

---

## ✨ 为什么选择 LearnData？

曾经，我用 Notion、Obsidian、飞书等工具管理笔记，结果资料分散、难以分享。

**笔记里的知识并不属于你，只有经过消化、应用，才会成为我们的财富。**

LearnData 基于 VuePress + vuepress-theme-hope 构建，将笔记与文章聚合成可分享的知识库。

<table>
  <tr>
    <td align="center"><img src="https://img.newzone.top/2022-08-22-19-28-25.png?imageMogr2/format/webp/thumbnail/500x" alt="知识库示意图"><br><em>笔记 + 文章 = 知识库</em></td>
    <td align="center"><img src="https://img.newzone.top/2022-08-24-19-14-59.png?imageMogr2/format/webp/thumbnail/500x" alt="自动化发布"><br><em>笔记/博客自动化发布</em></td>
  </tr>
</table>

## 🎯 核心功能

| 功能             | 说明                                            |
| ---------------- | ----------------------------------------------- |
| 📝 VuePress 驱动 | 基于 Vue 的静态站点生成器，Markdown 编写        |
| 🎨 极简东方主题  | 朱砂 + 宣纸 / 暖墨黑配色，shiki vitesse 代码高亮（基于 vuepress-theme-hope）|
| 📂 专题化结构    | 长文拆分为系列手册，方便查阅和学习              |
| 📖 读书笔记      | docsify 独立托管，与主站分离，独立搜索          |
| 🔍 全文搜索      | 默认本地搜索（slimsearch），可选 Algolia DocSearch |
| 🔎 SEO / GEO     | frontmatter SEO 审计脚本 + FAQ 结构化数据（FAQPage JSON-LD）|
| 💬 评论系统      | 主站 Giscus，读书笔记 Waline，含阅读统计        |
| 🤖 看板娘        | Live2D Widget 增加趣味性                        |
| 🚀 自动部署      | GitHub Actions 一键部署到 GitHub Pages / Vercel |

## 🚀 快速开始（TL;DR）

1. 点击 [Use this template](https://github.com/rockbenben/LearnData/generate) 创建你的仓库
2. 启用 GitHub Actions 的读写权限 (`Settings > Actions > General`)
3. 重新运行 workflow 触发部署
4. 在 `Settings > Pages` 中设置 `gh-pages` 分支为源

详细图文步骤、配置项、部署方式与常见错误处理见下面各节。

---

## 🍥 详细搭建步骤

按以下六步完成 LearnData 的初次搭建。整个流程不需要本地环境，全部在 GitHub 网页上完成。

### 1. 用模板创建你的仓库

访问 [LearnData 项目页面](https://github.com/rockbenben/LearnData)，点击页面右上角的「Use this template」按钮，在弹出的页面中选择「Create a new repository」以创建一个基于此模板的新仓库。

![](https://img.newzone.top/2022-08-10-19-32-05.png?imageMogr2/format/webp)

![](https://img.newzone.top/2022-08-10-19-34-13.png?imageMogr2/thumbnail/500x)

### 2. 开放 Workflow 写权限

进入你的项目仓库，点击「Settings」>「Actions」>「General」，找到页面底部的 `Workflow permissions` 设置。选中 `Read and write permissions` 选项，点击保存。这一步确保 GitHub Page 在部署时能正确访问和修改你的仓库内容，避免因权限不足导致部署失败（报错 `failed with exit code 128`）。

![](https://img.newzone.top/2023-03-14-04-02-16.png?imageMogr2/format/webp)

### 3. 触发首次部署

进入菜单栏顶部的「Actions」页签，选择最新的 workflow。在页面右上方点击「Re-run jobs」>「Re-run all jobs」，触发 GitHub 重新生成并部署网页。如果设置无误，GitHub 会自动创建一个名为 `gh-pages` 的分支，并在其中部署你的页面。

![](https://img.newzone.top/2023-03-14-04-04-52.gif?imageMogr2/format/webp)

### 4. 修改仓库名为用户主页

返回「Settings」页面，修改 `Repository name` 为 `你的用户名.github.io`。例如，如果你的仓库链接是 `https://github.com/xxx/LearnData`，那么 `xxx` 就是你的 GitHub 用户名。若该名称已被其他项目使用，系统会显示红色错误提示。

此时，你可以选择任意其他名称，例如 `LearnData`，部署页面路径将变为 `你的用户名.github.io/LearnData`。如果页面样式显示不正常，可能需要设置子域名，参考 [常见问题 - 网页显示异常](#网页显示异常)。

![](https://img.newzone.top/20180505202201.png?imageMogr2/format/webp)

### 5. 设置 Pages 构建分支

在「Settings」>「Pages」>「Build and deployment」>「Branch」中，将 `gh-pages` 分支设置为 GitHub Pages 的源。大部分情况下，网站运行目录保持默认的 `/(root)` 即可。完成设置后，点击「Save」保存。

如果在此步骤中未找到 `gh-pages` 分支，请回到第三步重新触发一次 workflow。

![](https://img.newzone.top/2022-08-10-19-39-15.png?imageMogr2/format/webp)

### 6. 访问站点

设置完成后，稍等几分钟再刷新页面，你将看到一个新的访问链接提示：`https://你的用户名.github.io/`。此时你的个人知识库已经成功搭建。

### 本地运行

如需在本地预览或修改：

1. 安装 Node 与 **pnpm 11**（参考 [VPS 环境部署](https://newzone.top/deploy/vps/#环境部署)）。仓库根的 `pnpm-workspace.yaml` 已用 `allowBuilds` 批准 `esbuild` / `@parcel/watcher` 的构建脚本，pnpm 11 必需（否则 `pnpm i` 会报 `ERR_PNPM_IGNORED_BUILDS`）
2. 在项目目录下运行 `pnpm i` 安装依赖
3. 运行 `pnpm docs:dev`，访问 `http://localhost:8080/`

---

## 🔣 配置 LearnData

### 文档结构

文章和页面的配置可参考主目录下的 [samplepage.md](https://github.com/rockbenben/LearnData/blob/main/samplepage.md?plain=1)。其中 `order` 参数表示侧边栏的顺序，数字越小越靠前，支持非整数和负数。

我个人的偏好是：非干货短文 `order` 设在 -0.01 到 -0.99；干货长文设在 -1 到负无穷。每次新增文章在上一篇基础上递减 `order` 值。这种设置使我能随时记录低于 1000 字的短文，不影响干货文章的置顶排序。

`src` 目录结构：

```bash
src
|── .vuepress               # 网站配置
│   ├── config.ts           # 网站环境依赖和网站属性
│   ├── sidebar.ts          # 侧边栏
│   ├── navbar.ts           # 导航栏
│   ├── theme.ts            # 主题和插件
│   └── templateBuild.html  # 网页模板，网站关键词和统计
|── _posts                  # 博客文章目录
├── _temp                   # 草稿箱
├── reading                 # 读书笔记
├── encrypt                 # 加密目录（可指定其他目录）
├── anyname                 # 自定义笔记
├── blog.md                 # 博客页面
└── intro.md                # 博主个人介绍
```

`src/.vuepress` 路径下是网站的配置文件，已添加详细注释。可参考 [vuepress-theme-hope 配置案例](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress) 调整。在 `src/.vuepress/sidebar.ts` 中修改文件夹路径，后台会自动抓取路径下的 md 文件生成侧边栏。`src/.vuepress/theme.ts` 包含[评论插件](https://newzone.top/web/Comments.html)的相关配置。

注意事项：

- LearnData 默认采用**本地全文搜索**（`@vuepress/plugin-slimsearch`）。如需改用 Algolia DocSearch，在 `src/.vuepress/theme.ts` 的 plugins 中取消 `docsearch` 区块的注释并填入配置（与本地搜索二选一）
- `src/_temp` 文件夹默认不同步到 GitHub，可手动在本地建立 `_temp` 文件夹存放草稿
- 自 VuePress 2 的 beta.54 版本起，文件夹名前缀 `_` 在生成链接时会被省略（如文章路径 `/_posts/` 编译为 `/posts/`）

### 看板娘

LearnData 集成了看板娘 [Live2D Widget](https://github.com/stevenjoezhang/live2d-widget)，支持随机对话、切换人物服饰和打飞机游戏。如不需要，可删除 `src/.vuepress/public/live2d-widget` 文件夹。

如果网站部署在子页面（例如 `https://xxx.github.io/yyy`），需要将子页面路径 `yyy` 加入到以下两个文件：

- 将 `src/.vuepress/public/live2d-widget/autoload.js` 第三行的 `const live2d_path = "/live2d-widget/"` 修改为 `const live2d_path = "/yyy/live2d-widget/"`
- 将 `src/.vuepress/templateBuild.html` 中看板娘区块的 `<script src="/live2d-widget/autoload.js">` 修改为 `<script src="/yyy/live2d-widget/autoload.js">`

如需调整模型，参照 `src/.vuepress/public/live2d-widget` 目录下的 README。若在服务器上自建 [live2d api](https://github.com/fghrsh/live2d_api)，请添加跨域配置避免仅显示文本而无图片。或使用 CDN：把 `cdnPath: live2d_path + "live2d_api/"` 改为 `cdnPath: "https://live2d-api.aishort.top/"`。

### 读书笔记

读书笔记中常含大量原文引用，与 LearnData 精简化的初衷不符。我们用 Docsify 构建读书笔记，与 LearnData 主站互不干扰，形成两个独立的搜索系统。

- **读书目录**：读书笔记存放在 `src/reading` 下。该路径不会被转换为 HTML，而是自动复制到静态站点下，完成 Docsify 页面构建和独立搜索索引
- **修改链接域名**：Docsify 不支持相对链接。在 `src/.vuepress/sidebar.ts` 中将 `{ text: "读书笔记", icon: "read", link: "https://newzone.top/reading/" }` 的 `newzone.top` 替换为你自己的域名
- **移除阅读统计**：如未部署 Waline 或不需要评论功能，可移除 `src/reading/index.html` 中的 Waline 配置代码块：

  ```javascript
  waline: {
     serverURL: "https://waline.newzone.top",
     ...
  }
  ```

### 本地图片引用

为避免在生成静态页面时出现 `Rollup failed to resolve import` 错误，本地图片必须保存在 `src/.vuepress/public` 路径下。

如果图片名称为 `1.png`，保存在 `src/.vuepress/public/imgs` 路径下，则可以使用以下链接引用：`/imgs/1.png` 或使用 Markdown 图片链接：`![](/imgs/1.png)`。本方法也适用于将附件部署到网站上。

---

## 🖥️ 网站部署

GitHub 部署后，由于国内访问速度不稳定，建议增加国内访问节点。

很多人选择 Gitee Pages 作为国内节点，但 Gitee Pages 限制较多（必须实名认证、免费版无法自定义域名、有下架风险）。我没选择 Gitee，而是同步到国内服务器（域名需备案）或 Vercel（国外服务可能断网）。

### 同步到自有服务器

如果项目搭建好后出现红色错误，可能是 GitHub Actions 同步到服务器时发生错误。进入仓库的「Setting」>「Secrets and variables」>「Action」，添加 `FTP_HOST`、`FTP_PORT`、`FTP_USERNAME`、`FTP_PASSWORD` 密钥。文件变更时，GitHub Actions 会自动推送到服务器 FTP。

也可参考 [GitHub 同步到 OSS](https://newzone.top/deploy/Static.html#同步到-oss) 部署到云存储。

### 部署到 Vercel

Vercel 速度比 GitHub Pages 快，但 `*.vercel.app` 域名已受 DNS 污染影响，国内用户需绑定自定义域名。

部署步骤：

1. 点击 [![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frockbenben%2FLearnData%2Ftree%2Fgh-pages) 或将 `https://vercel.com/new/clone?repository-url=https://github.com/rockbenben/LearnData/tree/gh-pages` 中的 `rockbenben/LearnData` 改为 `你的用户名/仓库名`。建议使用 GitHub 账户登录。

2. 输入 Vercel 项目名称，默认 private，点击 `Create`。

   ![](https://img.newzone.top/2022-08-24-17-24-16.png?imageMogr2/format/webp "创建 Vercel 项目")

3. Vercel 会基于 LearnData 模板新建并初始化仓库。几十秒后部署成功，点击 `Go to Dashboard` 跳转到控制台。

   ![](https://img.newzone.top/2022-08-24-17-21-58.png?imageMogr2/format/webp "Vercel 部署成功")

4. 当前 Vercel 页面仅用于演示，不会随项目自动更新。依次选择「Project Settings」>「Git」>「Connected Git Repository」，点击「Disconnect」，然后点击 GitHub 图标，选择第一步中的「你的用户名/仓库名」，点击 `Connect`。

   ![](https://img.newzone.top/2024-08-22-14-05-07.png?imageMogr2/format/webp "移除演示项目")

   ![](https://img.newzone.top/2024-08-22-14-07-13.png?imageMogr2/format/webp "链接同步项目")

5. 在「Production Branch」中将分支名从 `main` 改为 `gh-pages`。保存后页面随项目同步更新。

   ![](https://img.newzone.top/2024-08-22-14-09-31.png?imageMogr2/format/webp "切换 Vercel 分支")

如部署遇错，请检查 Vercel 项目的 `Node.js Version` 是否设置为 `20.x`。

---

## 🤔 常见问题

### 网页显示异常

如果你的网站仅显示文本而不正常加载样式和脚本，可能是网站路径设置错误。这通常发生在将仓库作为子路径部署时，例如 `https://xxx.github.io/LearnData/`。

![](https://img.newzone.top/2023-03-14-06-11-10.png?imageMogr2/format/webp)

解决步骤：

1. 在你的项目中打开 `src/.vuepress/config.ts`
2. 将 `base` 配置项改为你的子路径 `/LearnData/`：

   ```typescript
   export default defineUserConfig({
     base: "/LearnData/",
     // 其他配置...
   });
   ```

3. 提交并推送更改，等待 GitHub Actions 自动重新部署
4. 部署后，刷新网站应能正常显示

如果你的网站部署在根路径（如 `https://xxx.github.io/`），`base` 应保留默认值 `/`。

### 同步服务器常见错误

GitHub Actions 自动部署到服务器时常见错误：

- **`Error: Input required and not supplied: server`** —— 服务器参数未配置。检查 `.github/workflows/main.yml` 的相关配置。如不需要同步到服务器，可直接删除 `Sync files` 区块
- **`FTPError: 530 Login authentication failed`** —— FTP 登录认证失败，账号/密码错误。建议用 FileZilla 等客户端测试账号有效性
- **`Error: Timeout (control socket)`** —— 服务器连接超时。可在 GitHub Actions 页面点「Re-run all jobs」重试。多次失败时检查服务器防火墙、GitHub IP 是否被屏蔽
- **`Error: Can't open data connection in passive mode: connect ETIMEDOUT ***:39005`** —— FTP 被动模式连接失败，常见原因：
  1. **防火墙未开放被动端口范围**（如 39000–40000）
  2. **返回了错误的 IP 地址**：FTP 服务器返回内网 IP。可在配置文件（如 `pure-ftpd.conf`）取消注释 `ForcePassiveIP`，设置为公网 IP
  3. **连接空闲超时**：FTP 会话超过 `MaxIdleTime`（默认 15 分钟）被断开，可调高该参数
  4. **连接数限制**：CI/CD 短时间内多次连接触发保护，可调高 `MaxClientsPerIP` 和 `PerUserMaxConnections`（如设为 50），重启 FTP 服务

### Get counter failed with 403

`Get counter failed with 403` 错误仅在本地 `pnpm docs:dev` 时使用**非 localhost 域名**会发生，静态构建过程中不出现。这是 Waline 评论插件引起的。在 `src/.vuepress/theme.ts` 的 plugins 部分删除 Waline 配置即可。

![](https://img.newzone.top/2024-02-23-21-07-05.png?imageMogr2/format/webp)

### ERR_MODULE_NOT_FOUND

如出现 `Error [ERR_MODULE_NOT_FOUND]: Cannot find module` 报错，可能是第三方插件或 `package.json` 依赖未正确配置。可使用最新版本的 `package.json` 和 `pnpm-lock.yaml` 覆盖本地设置，或删除主目录下的 `.npmrc` 文件。

---

## 📁 项目结构

```
src/
├── .vuepress/          # 网站配置（config.ts, theme.ts, navbar.ts, sidebar.ts）
├── _posts/             # 博客文章
├── reading/            # 📖 读书笔记（docsify 独立托管，独立搜索）
└── [自定义目录]/        # 你的笔记内容
```

## 📚 相关资源

- **真实使用案例**：[newzone.top](https://newzone.top/) —— 博主基于本模板搭建的博客
- **进阶心得**：[知识管理与搜索](https://newzone.top/posts/2024-01-28-learndata-advanced.html) · [自动化脚本](https://newzone.top/posts/2026-03-05-learndata-scripts-llm-seo.html)
- **问题反馈**：[GitHub Issues](https://github.com/rockbenben/LearnData/issues)
- **交流社区**：[Discord](https://discord.gg/PZTQfJ4GjX) · [Telegram](https://t.me/aishort_top) · [QQ 群](https://qm.qq.com/q/qvephMO8q4)

## 🆙 版本升级

升级时仅需更新项目根目录文件（除 `src` 外），并比对 `src/.vuepress/config.ts` 和 `theme.ts` 的变更。

详见 [CHANGELOG.md](./CHANGELOG.md)

## 📄 License

[MIT](./LICENSE) © rockbenben
