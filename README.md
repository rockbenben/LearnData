<div align="center">
  <h1>📚 LearnData 开源笔记</h1>
  <p><strong>开源工具、效率方法、心理学探索的自我提升笔记</strong></p>

  <p>
    <a href="https://newzone.top"><img src="https://img.shields.io/badge/📖_在线阅读-newzone.top-blue?style=for-the-badge" alt="在线阅读"></a>
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

## 🚀 快速开始

1. 点击 [Use this template](https://github.com/rockbenben/LearnData/generate) 创建你的仓库
2. 启用 GitHub Actions 的读写权限 (`Settings > Actions > General`)
3. 重新运行 workflow 以部署页面
4. 在 `Settings > Pages` 中设置 `gh-pages` 分支为源

**详细教程请访问：[LearnData 完整文档](https://newzone.top/)**

## 🎯 核心功能

| 功能             | 说明                                            |
| ---------------- | ----------------------------------------------- |
| 📝 VuePress 驱动 | 基于 Vue 的静态站点生成器，Markdown 编写        |
| 🎨 主题美化      | vuepress-theme-hope 提供丰富组件和样式          |
| 📂 专题化结构    | 长文拆分为系列手册，方便查阅和学习              |
| 📖 读书笔记      | docsify 独立托管，与主站分离，独立搜索          |
| 🔍 全文搜索      | 支持 Algolia DocSearch 或本地搜索               |
| 💬 评论系统      | 集成 Waline 评论和阅读统计                      |
| 🤖 看板娘        | Live2D Widget 增加趣味性                        |
| 🚀 自动部署      | GitHub Actions 一键部署到 GitHub Pages / Vercel |

## 📁 项目结构

```
src/
├── .vuepress/          # 网站配置（config.ts, theme.ts, navbar.ts, sidebar.ts）
├── _posts/             # 博客文章
├── reading/            # 📖 读书笔记（docsify 独立托管，独立搜索）
└── [自定义目录]/        # 你的笔记内容
```

## 📚 相关资源

- **完整文档**：[newzone.top](https://newzone.top/)
- **进阶技巧**：[知识管理与搜索](https://newzone.top/posts/2024-01-28-learndata-advanced.html) · [自动化脚本](https://newzone.top/posts/2026-03-05-learndata-scripts-llm-seo.html)
- **问题反馈**：[GitHub Issues](https://github.com/rockbenben/LearnData/issues)
- **交流社区**：[Discord](https://discord.gg/PZTQfJ4GjX) · [Telegram](https://t.me/aishort_top) · [QQ 群](https://qm.qq.com/q/qvephMO8q4)

## 🆙 版本升级

升级时，仅需更新项目根目录文件（除 `src` 外），并比对 `src/.vuepress/config.ts` 和 `theme.ts` 的变更。

详见 [CHANGELOG.md](./CHANGELOG.md)

## 📄 License

[MIT](./LICENSE) © rockbenben
