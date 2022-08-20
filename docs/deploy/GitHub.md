---
article: false
title: GitHub
icon: github
order: 3
---

- [GitHub Actions 官方市场](https://github.com/marketplace?type=actions)
- [Awesome Actions](https://github.com/sdras/awesome-actions)

## GitHub Actions

GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 `main.yml`，放于 `.github\workflows` 目录下，repo 发生指定调节的改变时，Actions 会自动运行。^[[了解 GitHub Actions](https://docs.github.com/cn/actions/learn-github-actions/understanding-github-actions)]

如果 GitHub Actions 命令中有涉及密码等私密信息，则进入仓库的「setting - Secrets - Action」，添加密钥进行加密处理。比如新建密钥 PERSONAL_TOKEN，Actions 命令中使用 `${{ secrets.PERSONAL_TOKEN }}` 来指代该密钥。

### 不同仓库间复制

复制文件到目的地，文档没变化则不会执行。案例为将当前仓库 main 分支下 docs 的 README.md 文件复制到另一个仓库 rockbenben/LearnData/ 路径下，如果目标路径存在相同文件，则将覆盖。如果让 `clean: true` 生效，Actions 会将目标路径情况，然后执行复制。

```yml
- name: Copy file
uses: andstor/copycat-action@v3
with:
  personal_token: ${{ secrets.PERSONAL_TOKEN }}
  src_path: docs/README.md
  dst_path: /
  dst_owner: rockbenben
  dst_repo_name: LearnData
  dst_branch: main
  src_branch: main
  #clean: true
```

### Actions 失败重试

暂时没找到街道指定报错后，执行另一区块代码的方法。

```yml
uses: nick-fields/retry@v2
with:
  timeout_seconds: 15
  max_attempts: 3
  retry_on_exit_code: "Error: Timeout (control socket)"
  command: npm run some-typically-fast-script
```

## 常见问题

### GitHub 提交忽略文件夹

项目文件夹新建一个名为 .gitignore 的文件。

编辑 .gitignore 文件，把想要忽略的文件夹和文件写进去就好，换行分隔。比如要忽略 node_modules 文件夹，就直接在文件中输入 node_modules。
