---
article: false
title: GitHub
icon: github
order: 3
---

## GitHub Actions

GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 `main.yml`，放于 `.github\workflows` 目录下，repo 发生指定调节的改变时，Actions 会自动运行。^[[了解 GitHub Actions](https://docs.github.com/cn/actions/learn-github-actions/understanding-github-actions)]

- [GitHub Actions 官方市场](https://github.com/marketplace?type=actions)
- [Awesome Actions](https://github.com/sdras/awesome-actions)

如果 GitHub Actions 命令中有涉及密码等私密信息，则进入项目仓库的「Settings」>「Secrets and variables」>「Actions」，添加密钥进行加密处理。比如新建密钥 PERSONAL_TOKEN，Actions 命令中使用 `${{ secrets.PERSONAL_TOKEN }}` 来指代该密钥。

### 不同仓库间复制

复制文件到目的地，文档没变化则不会执行。案例为将当前仓库 main 分支下 docs 的 README.md 文件复制到另一个仓库 rockbenben/LearnData/ 路径下，如果目标路径存在相同文件，则将覆盖。如果让 `clean: true` 生效，Actions 会将目标路径情况，然后执行复制。

此动作需按 [Creating a personal access token](https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-token) 建立[个人访问令牌](https://github.com/settings/tokens)，勾选权限「repo Full control of private repositories」，然后将该 token 值其保存在项目仓库的 Action 密钥。

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

在 job 和 step 中使用 if 语句，只有满足条件时才执行具体的 job 或 step。^[[最全总结，GitHub Action 自动化部署](https://blog.csdn.net/Ber_Bai/article/details/120310024)]

```bash
# 任务状态检查函数
success() # 当上一步执行成功时返回 true
always() # 总是返回 true
cancelled() # 当 workflow 被取消时返回 true
failure() # 当上一步执行失败时返回 true
```

first_step 会总是执行，second_step 需要上一步 first_step 执行成功才会执行，third_step 只有上一步 second_step 执行失败才执行。当 third_step 与 second_step 命令相同时，就可以达到失败重试的效果了。

```yml
jobs:
  first_job:
    name: My first job
    runs-on: ubuntu-latest
    steps:
      - name: first_step
        if: always()

      - name: second_step
        if: success()

      - name: third_step
        if: failure()
```

### uses 版本号

`uses: SamKirkland/FTP-Deploy-Action@4.3.1`：uses 会指定此步骤运行 SamKirkland/FTP-Deploy-Action 存储库中的 4.3.1 版本。

但有时 Actions 的版本不会这么快更新，又必须使用最新版，可以将版本号改为 branch name，比如 `uses: SamKirkland/FTP-Deploy-Action@master`。

## Git Commit

Commit message 远比你想象中的重要，它可以帮助你自动生成 Change log。在我最初的项目中，每次提交都写 update，这导致很难回溯，我也不知道更新了什么。建议新手全部按照 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 的规范来进行提交。

```shell
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Type

Type 用于说明 git commit 的类别，只允许使用下面的标识。^[[Git Commit 规范](https://www.jianshu.com/p/6433679cd10f)]

- feat: 新特性或功能（feature）
- fix: 修复 bug
- docs: 文档更新（documentation）
- style: 代码风格或者组件样式更新（不影响代码运行的变动）
- refactor: 代码重构，不引入新功能和缺陷修复
- perf: 优化相关，比如提升性能、体验
- test: 增加测试
- chore: 构建过程或辅助工具的变动
- revert: 回滚到上一个版本

### Scope

Scope 用于说明 commit 影响的范围，比如 Controller、DAO、View 等等，视项目不同而不同。如果其中包含了多个 scope，可以使用 `*` 代替。

### Footer

如果当前代码与上一个版本不兼容，则 Footer 部分以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法。^[[Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)]

如果当前 commit 针对某个 issue，那么可以在 Footer 部分使用 `Closes #265` 关闭这个 issue。也可以在任意位置输入 `#265`，将 commit 与对应问题相关联。

## 常见问题

### GitHub 忽略指定文件

项目路径新建一个命名为 .gitignore 的文件，将想要忽略的文件夹和文件写入 .gitignore 文件，换行分隔。

比如要忽略 node_modules 文件夹，就直接在文件中输入 node_modules。
