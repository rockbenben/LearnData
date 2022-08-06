---
article: false
title: GitHub
icon: github
order: 3
---

## GitHub Actions

[GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)，将 GitHub Action 命令保存为`main.yml`，放于`.github\workflows`目录下。

repo 的 setting-Security-Action，添加 Action 所需要的密钥。

## 常见问题

### GitHub 提交忽略文件夹

项目文件夹新建一个名为 .gitignore 的文件。

编辑 .gitignore 文件，把想要忽略的文件夹和文件写进去就好，换行分隔。比如要忽略 node_modules 文件夹，就直接在文件中输入 node_modules。
