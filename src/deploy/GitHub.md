---
article: false
title: GitHub
description: 想全面掌握GitHub高级玩法？本指南深入讲解Actions自动化工作流，从Secrets管理到Dependabot。更有Git Commit规范、分支管理及常见问题解决方案，助你成为GitHub高手。
icon: fa6-brands:github
order: 4
---

## GitHub Actions

[GitHub Actions](https://docs.github.com/zh/actions/about-github-actions/understanding-github-actions) 是一个持续集成和持续交付（CI/CD）平台，能够自动化执行构建、测试和部署流程。通过定义工作流（workflow），你可以针对每个拉取请求（Pull Request）进行构建和测试，或在代码合并后自动将应用部署到生产环境中。

要开始使用 GitHub Actions，可以将配置文件保存为 `main.yml`，并将其放在仓库的 `.github/workflows/` 目录下。当仓库发生指定条件的变化时，GitHub Actions 会自动执行该工作流。

以下是一些有用的资源：

- [GitHub Actions 官方市场](https://github.com/marketplace?type=actions)：可以查找和集成各种现成的 Actions。
- [Awesome Actions](https://github.com/sdras/awesome-actions)：一个收集了优秀 Actions 的开源项目。

### Secret 和 Access token

#### Secret

在工作流中使用敏感信息（如 API 密钥或密码）时，可以通过 Secret 功能对其进行加密。Secret 被存储在 GitHub 仓库中，并在工作流中通过 `${{ secrets.<secret_name> }}` 进行调用。以下是添加 Secret 的步骤：

1. 进入仓库的「Settings」>「Secrets and variables」>「Actions」。
2. 点击 `New repository secret`，为你的密钥命名并保存。例如，如果密钥名称是 `PERSONAL_TOKEN`，你可以在工作流中使用 `${{ secrets.PERSONAL_TOKEN }}` 来调用该密钥。

在同一页面，你还会看到 **Variable** 选项。与 Secret 不同，Variable 适用于那些不涉及敏感信息的数据（如用户名等）。在工作流中，你可以通过 `${{ vars.<variable_name> }}` 来引用 Variable。例如，如果你需要存储 Docker Hub 用户名，可以创建一个名为 `DOCKERHUB_USERNAME` 的 Variable，并在工作流中通过 `${{ vars.DOCKERHUB_USERNAME }}` 来调用。

#### Access token

Access token 用于为 GitHub Actions 提供更高权限的访问，如操作仓库、推送代码或发布容器。要生成 Personal Access Token (classic)，请按以下步骤操作：

1. 打开 GitHub 个人设置，依次选择「Settings」>「Developer settings」>「Personal access tokens」>「Tokens (classic)」。
2. 点击 `Generate new token (classic)` 并选择所需权限。例如，部署到 GitHub 容器（`ghcr.io`）时，需要授予 `repo` 和 `write:packages` 权限。
3. 将生成的 Access token 添加到仓库的 Secret 中，名称为 `GHCR_PAT`，然后在工作流中使用 `${{ secrets.GHCR_PAT }}`。

### Dependabot

Dependabot 是 GitHub 提供的官方自动化工具，可监视项目中使用的依赖项中的漏洞，并确保这些依赖项保持最新。你可以使用[常用 Dependabot 自动化](https://docs.github.com/zh/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions#common-dependabot-automations) 中的 GitHub Actions 命令，使 Dependabot 自动完成依赖的标记、批准拉取请求以及合并操作。如果仍有疑问，可以参考 tools-by-ai 中的 [.github](https://github.com/rockbenben/tools-by-ai/tree/main/.github) 配置。

完成上述配置后，Actions 可能会报错 `failed to create review: GraphQL: GitHub Actions is not permitted`。这是由于 Actions 权限未开启的原因。我们需要继续进行以下设置：

1. 进入项目仓库的「Settings」。
2. 选择「General」>「Pull Requests」，勾选 `Allow auto-merge`，以赋予 Actions 合并操作权限。
3. 在同一界面，选择「Code and automation」>「Actions」>「General」>「Workflow permissions」，选中 `Read and write permissions`，并勾选 `Allow GitHub Actions to create and approve pull requests`，然后点击保存。这样可以授予 Actions 批准拉取请求的权限。

注意：GitHub Free 账户只支持在公共仓库中使用自动标记、批准拉取请求以及合并操作。

### 不同仓库间复制

复制文件到目的地，文档没变化则不会执行。案例为将当前仓库 main 分支下 docs 的 README.md 文件复制到另一个仓库 rockbenben/LearnData/ 路径下，如果目标路径存在相同文件，则将覆盖。如果让 `clean: true` 生效，Actions 会将目标路径清空，然后执行复制。

此动作需按 [Creating a personal access token](https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-token) 建立[个人访问令牌](https://github.com/settings/tokens)，勾选权限「repo Full control of private repositories」，然后将该 token 值保存在项目仓库的 Action 密钥中。

```yml
- name: Copy file
  uses: andstor/copycat-action@v3
  with:
    personal_token: ${{ secrets.PERSONAL_TOKEN }}
    src_path: src/README.md
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

`uses: SamKirkland/FTP-Deploy-Action@4.3.5`：uses 会指定此步骤运行 SamKirkland/FTP-Deploy-Action 存储库中的 4.3.5 版本。

但有时 Actions 的版本不会这么快更新，又必须使用最新版，可以将版本号改为 branch name，比如 `uses: SamKirkland/FTP-Deploy-Action@master`。

## Git Commit

标准化的 Commit message 可以提供清晰、易读的历史记录，使我们更容易理解每个提交的目的和内容，这有助于追踪和审查代码变更。通过 [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli) 可以自动生成 CHANGELOG.md。建议都按照 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 的规范来进行提交。

```bash
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

## 分支管理

### Cherry-Pick

Cherry-Pick 是一个允许开发者将一个分支上的特定提交（commit）精确地应用到另一个分支上的操作。这个名称来源于挑选樱桃的比喻 —— 就像从树上精选最好的樱桃一样。

想象你在开发网站的新登录功能（`feature-login`分支）时，修复了一个严重的安全漏洞。你希望这个修复立即在主分支（`main`）生效，而不是等待整个登录功能完成。这时，Cherry-Pick 就派上用场了。它允许你将 `feature-login` 分支上的这个特定修复提交"摘取"并应用到 `main` 分支。通过 Cherry-Pick，你可以快速应对紧急情况，保持主分支的稳定性，同时避免在不同分支上重复相同的工作。

### Pull Requests

在 GitHub 中，有三种常见的 Pull Request（PR）合并方式：Create a merge commit（创建合并提交），Squash and merge（压缩合并）和 Rebase and merge（变基合并）。

一般情况下，推荐使用 Squash and merge。在项目仓库的「Settings」中，选择「General」>「Pull Requests」，取消勾选 `Allow merge commits` 和 `Allow rebase merging`，即可默认显示 Squash and merge。

## 常见问题

### GitHub 忽略指定文件

项目路径新建一个命名为 .gitignore 的文件，将想要忽略的文件夹和文件写入 .gitignore 文件，换行分隔。

比如要忽略 node_modules 文件夹，就直接在文件中输入 node_modules。

### 添加 Github 源作为依赖

一般情况下，依赖包会使用 npm 进行管理。但有时开发者可能并不会立即更新到 npm 上，这时我们可以选择使用 GitHub 源作为备用方案。

另外，在国内服务器连接不上 GitHub 的情况下，可以先使用 npm 安装依赖包，然后手动替换 node_modules 目录中对应的源为下载好的文件。

```bash
yarn add strapi-google-auth
yarn add https://github.com/arjusmoon860/strapi-google-auth.git
```

### GitHub Docker 容器无法推送

在 Docker 对国内 IP 做限制后，GitHub Container Registry (GHCR) 成为一个不错的替代方案。但在推送镜像到 GHCR 时，可能会遇到如下报错：

```bash
failed to push ghcr.io/rockbenben/img-prompt:2.3.0: denied: permission_denied: write_package
```

出现该错误的原因通常是容器仓库权限设置不当。要正常推送镜像，需要进入目标容器的 **Package settings**，在 **Manage Actions access** 中：

1. 将对应的代码仓库添加到容器的访问列表；
2. 并赋予其 **读写（Write）权限**；
3. 保存设置后，即可重新推送。

### 重复提交标签名的错误

本地开发时，容易错误创建了一些标签。当重复提交时就会报错。只需查看并删除指定标签，然后按之前步骤重新提交即可。

```bash
# 1. 查看本地标签
git tag

# 2. 删除指定标签
git tag -d 1.0.4
```
