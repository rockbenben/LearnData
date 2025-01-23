# Learndata 升级日志

为了便于后续版本的维护与升级，我会定期发布 Learndata 的新版本，并在此记录所有破坏性更新及其他重要改动。

## 1.3.7 (2025-01-24)

- 主题配置 `docs/.vuepress/theme.ts`：
  - 更新 icon assets 配置：将 iconAssets 改为 plugins.icon.assets ([1cc3dc5](https://github.com/rockbenben/LearnData/commit/1cc3dc5c5a0a8b7443196e4e3f8b1034627bc4be))
  - 加密配置：对整个 encrypt 目录和指定页面加密的示例配置 ([38fc81f](https://github.com/rockbenben/LearnData/commit/38fc81f6c224f0cc2ae752d672e96c1fd15a9567))
- 常规依赖升级 `package.json` ([fae924a](https://github.com/rockbenben/LearnData/commit/fae924a740419fb2b44fe909eacd7d01522ff1ed))

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
  - 常规依赖升级

## 1.3.5 (2024-09-21)

- `docs/.vuepress/theme.ts`：修改配置中的 `plugins.mdEnhance`、`plugins.markdownImage`、`plugins.markdownHint`。
- `docs/.vuepress/styles/palette.scss`：博客样式结构进行了大幅度的改版。此次改动后，可以直接替换此文件以更新样式。
- `docs/.vuepress/templateBuild.html`：修改了网页模板 `head` 部分的样式定义，以适应新的页面布局和样式需求。
- `package.json`：除了常规依赖项的升级，还新增了对 `sass-embedded` 的依赖。
