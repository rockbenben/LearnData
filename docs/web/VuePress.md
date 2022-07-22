---
title: VuePress
order: 2
---

[VuePress](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html) 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。

如果你已经有了 docsify/Hexo 等 Markdown 架构网站，简单就能转为 VuePress。不过，VuePress 网站需要依赖包环境，生成的静态文件在本地运行会缺少组件，只推荐在服务器或其他云服务上运行。

主题使用的是 [vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/guide/)，其他主题和插件查看 [Awesome VuePress V2](https://github.com/vuepress/awesome-vuepress/blob/main/v2.md)。

## 插件

- [docsearch](https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html)：将 Algolia DocSearch 集成到 VuePress 中，为你的文档网站提供搜索功能。开源技术向博客可以申请官方支持，商业化内容需要使用自己的爬虫。
- [Iconfont 精选图标](https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87)

## 自定义主题

- [ ] 设置 meta 统计代码。config.ts 中添加全局 [head 标签](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/docs/theme/src/.vuepress/config.ts)，适合放特定标签，不适合 js 统计代码。
- [x] Giscus 评论区设置
- [x] 独立设置页面标题。未成功，所有页面都会加入默认标题。
- [x] 侧边栏显示客服图片。icon 位置直接放链接也没用。
- [x] 指定页面子标题不被目录页识别。但页面中取消 toc 的话，网页位置会出现偏移。
- [x] [修改导航栏 brand 链接](https://vuepress-theme-hope.github.io/v2/zh/cookbook/advanced/replace.html#%E6%8F%92%E6%A7%BD%E5%88%A9%E7%94%A8)，需用本地文件替代 [主题默认设置](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/theme/src/client/module/navbar/components/NavbarBrand.ts)。设置的 ts 未生效，暂时放弃。
- [x] ~~将 docs 里的 README.md 转移到主目录中，保持 github 项目页的同步。~~
- [x] ~~打开页面链接，侧边栏焦点能不能也移动过去。侧边栏标题需要能在首屏出现，才能激活焦点。~~
- [x] ~~默认主题颜色为白天，虽然不能切换，但发稿用白色就性。~~
- [x] ~~设置导航栏自动隐藏~~
- [x] ~~隐藏编辑时间和贡献者~~
- [x] ~~用 md 控制图片是，图片不能显示。这可能是因为主题默认的 lazy 加载，改用七牛云的图片属性控制尺寸。~~

## 安装配置

1. 环境配置，安装 npm、yarn、pnpm，查看 [Linux 环境部署教程](deploy/VPS#环境部署)
2. 新建文件夹，然后在该路径下运行命令 `pnpm create vuepress-theme-hope@next docs`。vuepress-theme-hope 主题的样例文件就会存储在该路径下。
3. 完成第二步，VuePress 样例已经能运行了。如果遇到报错，可以执行下拉命令，升级相关依赖包。

   ```bash
   #确保你正在使用最新的 vuepress 和 vuepress-theme-hope 版本
   pnpm add vuepress@next vuepress-theme-hope@next

   #升级当前目录的依赖以确保你的项目只包含单个版本的相关包
   pnpm i && pnpm up

   #运行在本地服务器
   yarn docs:dev
   ```

4. `docs\.vuepress` 路径下的 config.ts，navbar.ts，sidebar.ts，theme.ts 修改页面属性。设置参考 [官方案例](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress)。
   - config.ts：环境依赖包
   - sidebar.ts：侧边栏，集合所有文档的目录
   - navbar.ts：导航栏，放最常用的文档链接
   - theme.ts：对主题和插件进行设置
