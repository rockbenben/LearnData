# Learndata 升级日志

为了更方便地维护和升级后续版本，我将定期发布 Learndata 新版本，并在此记录所有重大变更及破坏性更新。

## 1.5.0 (2026-06-19)

以视觉改版为主、并完成 pnpm 11 迁移的版本：主站与读书笔记独立站统一切换到「极简东方」主题，看板娘（live2d）目录结构重构，依赖与构建配置同步到 pnpm 11 标准。

### ⚠️ 破坏性更新 / 升级必读

- **必须使用 pnpm 11，且仓库根需有 `pnpm-workspace.yaml`。** pnpm 10+ 默认拦截依赖的安装构建脚本，pnpm 11 又只从 `pnpm-workspace.yaml` 读取授权（不再读 `package.json` 的 `pnpm.onlyBuiltDependencies`，也不读 `.npmrc`）。本版本新增 `pnpm-workspace.yaml`，用 `allowBuilds` 批准 `esbuild`、`@parcel/watcher`：

  ```yaml
  allowBuilds:
    "@parcel/watcher": true
    esbuild: true
  ```

  缺少该文件、或仍沿用 pnpm 10 的旧写法，`pnpm install` 会因 `ERR_PNPM_IGNORED_BUILDS` 失败（exit 1），连带 `pnpm docs:build` 和 CI 一起挂。随之移除了 `package.json` 里已失效的 `pnpm.onlyBuiltDependencies`，以及与 pnpm 默认值重复的 `.npmrc`。

- **看板娘 live2d 路径变更**：资源迁移到 `live2d-widget/v20260619/`，`templateBuild.html` 的引用改为 `/live2d-widget/v20260619/autoload.js`。自定义过 `templateBuild.html` 的用户合并时务必保留新路径，否则看板娘会 404 失效。

- **Google 分析默认关闭**：`config.ts` 中的 GA 插件默认注释、并移除硬编码统计 ID，避免误统计到他人账号。需启用时取消该插件与顶部 `import` 的注释、填回自己的 GA4 ID。

### ✨ 新增功能

- **极简东方主题**：朱砂红主色 + 宣纸暖白（亮）/ 暖墨黑（暗）配色，Noto Serif/Sans SC 正文 + JetBrains Mono 代码字体，shiki `vitesse` 暖色代码高亮，面包屑默认开启，favicon 改用朱砂色 `logo.svg`；读书笔记独立站同步该主题。
- **FAQ 结构化数据插件** `src/.vuepress/plugins/faq-schema.ts`：在文章 frontmatter 写 `faq` 字段即自动生成 `FAQPage` JSON-LD，利于搜索 / AI 引擎引用。
- **GEO 审计**：新增 `scripts/geo-audit.js` 与 npm script `geo:audit`，并增强 `scripts/seo-audit.js`。

### 📦 依赖与构建

- 升级 `vuepress` / `vuepress-theme-hope` 至 `rc.30` / `rc.107`，`sass-embedded` 1.100 等；`pnpm-lock.yaml` 清理 webpack 构建器的残留依赖树。
- **`vue` 收敛为单一 3.5.38**：vuepress rc.30 要求 `vue ^3.5.34`，3.5.38 为该范围内最新；已 dedupe 消除原先的重复解析 / 版本错配。请勿把 vue 钉到更低版本，跟随该范围即可。
- **pnpm 10 → 11**（CI 与本地一致）；依赖的构建脚本授权迁移到 `pnpm-workspace.yaml` 的 `allowBuilds`。
- 脚本健壮性修正：`llms-txt` 描述截断改用显示宽度（中文按 2 计）、`geo-audit` 统计口径、目录遍历对坏软链做容错。
- 读书笔记：运行时间统计修正（改用 `Date.now()` 直接相减，修掉原先多算约一个月的问题），侧栏与 TOC 抽屉改为互斥（开一个自动关另一个）。

### ⬆️ 升级说明（从 1.4.0 升级）

```bash
# 1) 确保 pnpm 为 11（旧版先升级：npm i -g pnpm@11，或用 corepack）
pnpm -v

# 2) 拉取、安装、构建
git pull origin main
pnpm install        # 读取 pnpm-workspace.yaml 的 allowBuilds，自动批准 esbuild/@parcel/watcher 构建
pnpm docs:build
```

- 若 `pnpm install` 报 `ERR_PNPM_IGNORED_BUILDS`：确认 ① `pnpm -v` 是 11；② 仓库根存在 `pnpm-workspace.yaml`（含 `allowBuilds`）。仍异常可 `rm -rf node_modules && pnpm install` 干净重装。
- 主题字体经 `fonts.googleapis.cn`（国内镜像）加载，离线 / 纯内网部署会回退到系统字体，介意者可自托管字体。
- 升级后请逐一确认：① 看板娘正常显示；② 已填回自己的 Google 分析 ID；③ 自定义样式按需合并。
- 说明：Dependabot 的部分**安全更新**可能对 `markdown-it` / `vite` / `esbuild` 报红——这些是 vuepress 锁定的传递依赖，要等 vuepress 升级后才能修复，属已知现象、不影响构建与部署。

## 1.4.0 (2026-03-05)

重大架构升级版本：构建系统由 webpack 迁移到 Vite，`docs` 目录重命名为 `src`。

### ⚠️ 破坏性更新

- `docs` 目录重命名为 `src`：解决 Vercel 等平台默认构建命令的路径冲突，符合现代项目结构约定。`git pull` 会自动处理重命名，已有文章与配置随之移动，路由路径不变。合并冲突时保留你的自定义值，但 `config.ts` 的 bundler 需改用 `viteBundler()`，`templateBuild` 路径需由 `./docs/` 改为 `./src/`。([c3a9480](https://github.com/rockbenben/LearnData/commit/c3a948044), [e420e28](https://github.com/rockbenben/LearnData/commit/e420e2886))

### ✨ 新增功能

- 构建系统由 webpack 迁移到 Vite：开发服务器启动提速 10 倍以上（ESM 按需编译），HMR 即时响应，content hash 仅在内容变化时更新文件名，Rollup 生产构建输出更优。([6d51d79](https://github.com/rockbenben/LearnData/commit/6d51d798b))
- 自动化脚本：`scripts/seo-audit.js`（扫描 frontmatter SEO 问题）、`scripts/llms-txt.js`（生成 llms.txt，构建后自动运行）、`scripts/reading-sidebar.js`（生成 docsify 读书笔记侧边栏）；新增 npm scripts `seo:audit`、`reading:sidebar`。([dd54235d](https://github.com/rockbenben/LearnData/commit/dd54235d4), [42c2a7e](https://github.com/rockbenben/LearnData/commit/42c2a7e21))
- 读书笔记升级：Waline 评论系统 v2 → v3，运行时间统计改为 ES6 模块化，改进阅读量统计集成，增强 SEO meta description，禁用默认 docsify 搜索（避免与 slimsearch 冲突）。([c12dd01](https://github.com/rockbenben/LearnData/commit/c12dd012a))

### 📦 依赖与 CI

- 构建工具由 `@vuepress/bundler-webpack` 切换到 `@vuepress/bundler-vite`，移除 `mathjax-full` / `sass-loader` / `vidstack`，新增 `@mathjax/src` / `gray-matter`。依赖与 GitHub Actions 均随代码更新，`git pull` 后重装即可。

### ⬆️ 升级说明

```bash
git pull origin main
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm docs:build
```

## 1.3.9 (2025-10-12)

配置项更名、移除默认 `vidstack` 组件，并优化侧边栏与深色调色板。

### ⚠️ 破坏性更新

- `docs/.vuepress/styles/config.scss` 中的 `theme-colors` 更名为 `theme-color`。([43a6afc](https://github.com/rockbenben/LearnData/commit/43a6afc85c6a325419a80700c93230ae2b3e1696))
- 博客页面 `docs/blog.md` 中的 `layout` 由 `BlogHome` 改为 `Blog`。([a26c290](https://github.com/rockbenben/LearnData/commit/a26c29049064c244563bce1a98e895ec383b7662))
- 移除 `docs/.vuepress/theme.ts` 中默认启用的内部组件 `vidstack`，避免升级后在部分环境构建失败。([ebf4319](https://github.com/rockbenben/LearnData/commit/ebf43196ec0bf8fc7a2d7254e9ad30d42fe9f366))

### ♻️ 优化与配置

- `docs/.vuepress/styles/palette.scss`：优化深色模式下的调色板。([eda325c](https://github.com/rockbenben/LearnData/commit/eda325c012a9d38f2c45dbc5dd29e261cc598c4a))
- 清理 `docs/.vuepress/sidebar.ts` 中错误的 `link: ""` 配置，并优化侧边栏路径结构。([6dce681](https://github.com/rockbenben/LearnData/commit/6dce681aa255f12d32fd498e34ada8aa6a1bca98))

### 📦 依赖与 CI

- 升级部分依赖，并重构 `package.json` 文件结构。([5b0ea87](https://github.com/rockbenben/LearnData/commit/5b0ea87c692f0a44ebeeb99d199f6561d60b904e))

## 1.3.8 (2025-03-04)

主题说明补充与 pnpm 升级。

### ♻️ 优化与配置

- `docs/.vuepress/theme.ts`：新增设置版权及禁用复制的说明。([b5be1c9](https://github.com/rockbenben/LearnData/commit/b5be1c9e1ee0dde8917fd0aecb79cf27d2bccdf1))

### 📦 依赖与 CI

- GitHub Actions `.github/workflows/main.yml`：pnpm 版本由 9 调整为 10。([0c48b3e](https://github.com/rockbenben/LearnData/commit/0c48b3eb8333dd83b6f5732ffe2f2a067bd36152))
- 常规依赖更新 `package.json`。([d111e8b](https://github.com/rockbenben/LearnData/commit/d111e8b3949a92999db047a6c4ed7c02d20127e9))

## 1.3.7 (2025-01-24)

主题图标与加密配置调整。

### ♻️ 优化与配置

- `docs/.vuepress/theme.ts`：icon assets 配置由 `iconAssets` 改为 `plugins.icon.assets`。([1cc3dc5](https://github.com/rockbenben/LearnData/commit/1cc3dc5c5a0a8b7443196e4e3f8b1034627bc4be))
- `docs/.vuepress/theme.ts`：新增对整个 encrypt 目录及指定页面加密的示例配置。([38fc81f](https://github.com/rockbenben/LearnData/commit/38fc81f6c224f0cc2ae752d672e96c1fd15a9567))

### 📦 依赖与 CI

- 常规依赖更新 `package.json`。([fae924a](https://github.com/rockbenben/LearnData/commit/fae924a740419fb2b44fe909eacd7d01522ff1ed))

## 1.3.6 (2024-12-09)

主题改用 `custom` 提升性能，插件配置合并，新增可切换主题色。

### ✨ 新增功能

- `docs/.vuepress/styles/config.scss`：新增多种主题颜色，用户可在导航栏自由选择主色。

### ♻️ 优化与配置

- `docs/.vuepress/theme.ts`：主题改用 `custom`，性能提升；`plugins.mdEnhance`、`plugins.markdownImage`、`plugins.markdownHint` 合并为 `markdown`。
- `docs/.vuepress/styles/palette.scss`：修改主题背景颜色。
- `docs/.vuepress/styles/index.scss`：移除目录自定义位置（新主题已内置该优化项）。

### 📦 依赖与 CI

- 搜索依赖 `vuepress-plugin-search-pro` 改名为 `@vuepress/plugin-slimsearch`；常规依赖更新。

## 1.3.5 (2024-09-21)

博客样式结构大幅改版，模板与插件配置调整。

### ♻️ 优化与配置

- `docs/.vuepress/theme.ts`：调整 `plugins.mdEnhance`、`plugins.markdownImage`、`plugins.markdownHint` 配置。
- `docs/.vuepress/styles/palette.scss`：博客样式结构大幅改版，此后可直接替换此文件以更新样式。
- `docs/.vuepress/templateBuild.html`：调整网页模板 `head` 部分的样式定义，以适应新的页面布局。

### 📦 依赖与 CI

- 常规依赖升级，并新增对 `sass-embedded` 的依赖。
