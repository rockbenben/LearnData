# Learndata 升级日志

为了便于后续版本的维护与升级，我会定期发布 Learndata 的新版本，并在此记录所有破坏性更新及其他重要改动。

## 1.3.5

- `docs\.vuepress\theme.ts`：修改配置中的  `plugins.mdEnhance`、`plugins.markdownImage`、`plugins.markdownHint`。
- `docs\.vuepress\styles\palette.scss`：博客样式结构进行了大幅度的改版。此次改动后，可以直接替换此文件以更新样式。
- `docs\.vuepress\templateBuild.html`：修改了网页模板 `head` 部分的样式定义，以适应新的页面布局和样式需求。
- `package.json`：除了常规依赖项的升级，还新增了对 `sass-embedded` 的依赖。
