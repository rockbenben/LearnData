# Learndata 升级日志

为了更方便地维护和升级后续版本，我将定期发布 Learndata 新版本，并在此记录所有重大变更及破坏性更新。

## 1.3.9 (2025-10-12)

### ⚠️ 破坏性更新

- `docs/.vuepress/styles/config.scss` 中的 `theme-colors` 配置项更名为 `theme-color`。([43a6afc](https://github.com/rockbenben/LearnData/commit/43a6afc85c6a325419a80700c93230ae2b3e1696))
- 博客页面 `docs/blog.md` 中的 `layout` 配置由 `BlogHome` 改为 `Blog`。([a26c290](https://github.com/rockbenben/LearnData/commit/a26c29049064c244563bce1a98e895ec383b7662))

### ✂️ 默认组件调整

- 移除 `docs/.vuepress/theme.ts` 中默认启用的内部组件 `vidstack`，避免升级后在部分环境中构建失败。([ebf4319](https://github.com/rockbenben/LearnData/commit/ebf43196ec0bf8fc7a2d7254e9ad30d42fe9f366))
- 修改 `docs/.vuepress/styles/palette.scss`，优化深色模式下的调色板。([eda325c](https://github.com/rockbenben/LearnData/commit/eda325c012a9d38f2c45dbc5dd29e261cc598c4a))

### ♻️ 配置优化

- 清理 `docs/.vuepress/sidebar.ts` 中错误的 `link: ""` 配置，并优化侧边栏路径结构，提高可读性和维护性。([6dce681](https://github.com/rockbenben/LearnData/commit/6dce681aa255f12d32fd498e34ada8aa6a1bca98))

### 📦 依赖更新

- 升级部分依赖，并重构了 `package.json` 文件结构。([5b0ea87](https://github.com/rockbenben/LearnData/commit/5b0ea87c692f0a44ebeeb99d199f6561d60b904e))

## 1.3.8 (2025-03-04)

- 在 `docs/.vuepress/theme.ts` 中添加设置版权及禁用复制的说明 ([b5be1c9](https://github.com/rockbenben/LearnData/commit/b5be1c9e1ee0dde8917fd0aecb79cf27d2bccdf1))
- 更新 GitHub Action 配置 `.github/workflows/main.yml`，将 pnpm 版本从 9 调整为 10 ([0c48b3e](https://github.com/rockbenben/LearnData/commit/0c48b3eb8333dd83b6f5732ffe2f2a067bd36152))
- 常规依赖更新 `package.json` ([d111e8b](https://github.com/rockbenben/LearnData/commit/d111e8b3949a92999db047a6c4ed7c02d20127e9))

## 1.3.7 (2025-01-24)

- 主题配置 `docs/.vuepress/theme.ts`：
  - 更新 icon assets 配置：将 iconAssets 改为 plugins.icon.assets ([1cc3dc5](https://github.com/rockbenben/LearnData/commit/1cc3dc5c5a0a8b7443196e4e3f8b1034627bc4be))
  - 加密配置：对整个 encrypt 目录和指定页面加密的示例配置 ([38fc81f](https://github.com/rockbenben/LearnData/commit/38fc81f6c224f0cc2ae752d672e96c1fd15a9567))
- 常规依赖更新 `package.json` ([fae924a](https://github.com/rockbenben/LearnData/commit/fae924a740419fb2b44fe909eacd7d01522ff1ed))

## 1.3.6 (2024-12-09)

- 主题配置 `docs/.vuepress/theme.ts`：
  - 主题使用 `custom`，性能提升。
  - 插件适配：`plugins.mdEnhance`、`plugins.markdownImage`、`plugins.markdownHint` 合并为 `markdown`。
- 样式更新：
  - `docs/.vuepress/styles/palette.scss`：修改主题背景颜色
  - `docs/.vuepress/styles/config.scss`：添加多种主题颜色，用户可在导航栏自由选择主色
  - `docs/.vuepress/styles/index.scss`：移除目录自定义位置（新主题已内置该优化项）
- 依赖升级 `package.json`：
  - 搜索依赖 `vuepress-plugin-search-pro` 改名为 `@vuepress/plugin-slimsearch`
  - 常规依赖更新

## 1.3.5 (2024-09-21)

- `docs/.vuepress/theme.ts`：修改配置中的 `plugins.mdEnhance`、`plugins.markdownImage`、`plugins.markdownHint`。
- `docs/.vuepress/styles/palette.scss`：博客样式结构进行了大幅度的改版。此次改动后，可以直接替换此文件以更新样式。
- `docs/.vuepress/templateBuild.html`：修改了网页模板 `head` 部分的样式定义，以适应新的页面布局和样式需求。
- `package.json`：除了常规依赖项的升级，还新增了对 `sass-embedded` 的依赖。
