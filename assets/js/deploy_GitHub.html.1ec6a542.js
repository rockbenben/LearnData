"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[4493],{6733:(s,i)=>{i.A=(s,i)=>{const e=s.__vccOpts||s;for(const[s,a]of i)e[s]=a;return e}},971:(s,i,e)=>{e.r(i),e.d(i,{comp:()=>t,data:()=>l});var a=e(4691);const n={},t=(0,e(6733).A)(n,[["render",function(s,i){return(0,a.uX)(),(0,a.CE)("div",null,i[0]||(i[0]=[(0,a.Fv)('<h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions"><span>GitHub Actions</span></a></h2><p>GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 <code>main.yml</code>，放于 <code>.github\\workflows</code> 目录下，repo 发生指定调节的改变时，Actions 会自动运行。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><ul><li><a href="https://github.com/marketplace?type=actions" target="_blank" rel="noopener noreferrer">GitHub Actions 官方市场</a></li><li><a href="https://github.com/sdras/awesome-actions" target="_blank" rel="noopener noreferrer">Awesome Actions</a></li></ul><p>如果 GitHub Actions 命令中有涉及密码等私密信息，则进入项目仓库的「Settings」&gt;「Secrets and variables」&gt;「Actions」，添加密钥进行加密处理。比如新建密钥 PERSONAL_TOKEN，Actions 命令中使用 <code>${{ secrets.PERSONAL_TOKEN }}</code> 来指代该密钥。</p><h3 id="dependabot" tabindex="-1"><a class="header-anchor" href="#dependabot"><span>Dependabot</span></a></h3><p>Dependabot 是 GitHub 提供的官方自动化工具，可监视项目中使用的依赖项中的漏洞，并确保这些依赖项保持最新。你可以使用<a href="https://docs.github.com/zh/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions#common-dependabot-automations" target="_blank" rel="noopener noreferrer">常用 Dependabot 自动化</a> 中的 GitHub Actions 命令，使 Dependabot 自动完成依赖的标记、批准拉取请求以及合并操作。如果仍有疑问，可以参考 tools-by-ai 中的 <a href="https://github.com/rockbenben/tools-by-ai/tree/main/.github" target="_blank" rel="noopener noreferrer">.github</a> 配置。</p><p>完成上述配置后，Actions 可能会报错 <code>failed to create review: GraphQL: GitHub Actions is not permitted</code>。这是由于 Actions 权限未开启的原因。我们需要继续进行以下设置：</p><ol><li>进入项目仓库的「Settings」。</li><li>选择「General」&gt;「Pull Requests」，勾选 <code>Allow auto-merge</code>，以赋予 Actions 合并操作权限。</li><li>在同一界面，选择「Code and automation」&gt;「Actions」&gt;「General」&gt;「Workflow permissions」，选中 <code>Read and write permissions</code>，并勾选 <code>Allow GitHub Actions to create and approve pull requests</code>，然后点击保存。这样可以授予 Actions 批准拉取请求的权限。</li></ol><p>注意：GitHub Free 账户只支持在公共仓库中使用自动标记、批准拉取请求以及合并操作。</p><h3 id="不同仓库间复制" tabindex="-1"><a class="header-anchor" href="#不同仓库间复制"><span>不同仓库间复制</span></a></h3><p>复制文件到目的地，文档没变化则不会执行。案例为将当前仓库 main 分支下 docs 的 README.md 文件复制到另一个仓库 rockbenben/LearnData/ 路径下，如果目标路径存在相同文件，则将覆盖。如果让 <code>clean: true</code> 生效，Actions 会将目标路径情况，然后执行复制。</p><p>此动作需按 <a href="https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-token" target="_blank" rel="noopener noreferrer">Creating a personal access token</a> 建立<a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">个人访问令牌</a>，勾选权限「repo Full control of private repositories」，然后将该 token 值其保存在项目仓库的 Action 密钥。</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Copy file</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">andstor/copycat-action@v3</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    personal_token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">${{ secrets.PERSONAL_TOKEN }}</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    src_path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">docs/README.md</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    dst_path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    dst_owner</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">rockbenben</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    dst_repo_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">LearnData</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    dst_branch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">main</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    src_branch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">main</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #clean: true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="actions-失败重试" tabindex="-1"><a class="header-anchor" href="#actions-失败重试"><span>Actions 失败重试</span></a></h3><p>在 job 和 step 中使用 if 语句，只有满足条件时才执行具体的 job 或 step。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 任务状态检查函数</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">success</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() # 当上一步执行成功时返回 true</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">always</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() # 总是返回 true</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cancelled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() # 当 workflow 被取消时返回 true</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">failure</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() # 当上一步执行失败时返回 true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>first_step 会总是执行，second_step 需要上一步 first_step 执行成功才会执行，third_step 只有上一步 second_step 执行失败才执行。当 third_step 与 second_step 命令相同时，就可以达到失败重试的效果了。</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jobs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  first_job</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">My first job</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    runs-on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ubuntu-latest</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    steps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">first_step</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">always()</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">second_step</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">success()</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">third_step</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">failure()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uses-版本号" tabindex="-1"><a class="header-anchor" href="#uses-版本号"><span>uses 版本号</span></a></h3><p><code>uses: SamKirkland/FTP-Deploy-Action@4.3.1</code>：uses 会指定此步骤运行 SamKirkland/FTP-Deploy-Action 存储库中的 4.3.1 版本。</p><p>但有时 Actions 的版本不会这么快更新，又必须使用最新版，可以将版本号改为 branch name，比如 <code>uses: SamKirkland/FTP-Deploy-Action@master</code>。</p><h2 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit"><span>Git Commit</span></a></h2><p>标准化的 Commit message 可以提供清晰、易读的历史记录，使我们更容易理解每个提交的目的和内容，这有助于追踪和审查代码变更。通过 <a href="https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli" target="_blank" rel="noopener noreferrer">conventional-changelog-cli</a> 可以自动生成 CHANGELOG.md。建议都按照 <a href="https://www.conventionalcommits.org/zh-hans/" target="_blank" rel="noopener noreferrer">Conventional Commits</a> 的规范来进行提交。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;type&gt;[optional scope]: &lt;description&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[optional body]</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[optional footer(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>Type</span></a></h3><p>Type 用于说明 git commit 的类别，只允许使用下面的标识。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><ul><li>feat: 新特性或功能（feature）</li><li>fix: 修复 bug</li><li>docs: 文档更新（documentation）</li><li>style: 代码风格或者组件样式更新（不影响代码运行的变动）</li><li>refactor: 代码重构，不引入新功能和缺陷修复</li><li>perf: 优化相关，比如提升性能、体验</li><li>test: 增加测试</li><li>chore: 构建过程或辅助工具的变动</li><li>revert: 回滚到上一个版本</li></ul><h3 id="scope" tabindex="-1"><a class="header-anchor" href="#scope"><span>Scope</span></a></h3><p>Scope 用于说明 commit 影响的范围，比如 Controller、DAO、View 等等，视项目不同而不同。如果其中包含了多个 scope，可以使用 <code>*</code> 代替。</p><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer"><span>Footer</span></a></h3><p>如果当前代码与上一个版本不兼容，则 Footer 部分以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法。<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></p><p>如果当前 commit 针对某个 issue，那么可以在 Footer 部分使用 <code>Closes #265</code> 关闭这个 issue。也可以在任意位置输入 <code>#265</code>，将 commit 与对应问题相关联。</p><h2 id="pull-requests" tabindex="-1"><a class="header-anchor" href="#pull-requests"><span>Pull Requests</span></a></h2><p>在 GitHub 中，有三种常见的 Pull Request（PR）合并方式：Create a merge commit（创建合并提交），Squash and merge（压缩合并）和 Rebase and merge（变基合并）。</p><p>一般情况下，推荐使用 Squash and merge。在项目仓库的「Settings」中，选择「General」&gt;「Pull Requests」，取消勾选 <code>Allow merge commits</code> 和 <code>Allow rebase merging</code>，即可默认显示 Squash and merge。</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="github-忽略指定文件" tabindex="-1"><a class="header-anchor" href="#github-忽略指定文件"><span>GitHub 忽略指定文件</span></a></h3><p>项目路径新建一个命名为 .gitignore 的文件，将想要忽略的文件夹和文件写入 .gitignore 文件，换行分隔。</p><p>比如要忽略 node_modules 文件夹，就直接在文件中输入 node_modules。</p><h3 id="添加-github-源作为依赖" tabindex="-1"><a class="header-anchor" href="#添加-github-源作为依赖"><span>添加 Github 源作为依赖</span></a></h3><p>一般情况下，依赖包会使用 npm 进行管理。但有时开发者可能并不会立即更新到 npm 上，这时我们可以选择使用 GitHub 源作为备用方案。</p><p>另外，在国内服务器连接不上 GitHub 的情况下，可以先使用 npm 安装依赖包，然后手动替换 node_modules 目录中对应的源为下载好的文件。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> strapi-google-auth</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/arjusmoon860/strapi-google-auth.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p><a href="https://docs.github.com/cn/actions/learn-github-actions/understanding-github-actions" target="_blank" rel="noopener noreferrer">了解 GitHub Actions</a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p><a href="https://blog.csdn.net/Ber_Bai/article/details/120310024" target="_blank" rel="noopener noreferrer">最全总结，GitHub Action 自动化部署</a> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li><li id="footnote3" class="footnote-item"><p><a href="https://www.jianshu.com/p/6433679cd10f" target="_blank" rel="noopener noreferrer">Git Commit 规范</a> <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p></li><li id="footnote4" class="footnote-item"><p><a href="http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html" target="_blank" rel="noopener noreferrer">Commit message 和 Change log 编写指南</a> <a href="#footnote-ref4" class="footnote-backref">↩︎</a></p></li></ol></section>',45)]))}]]),l=JSON.parse('{"path":"/deploy/GitHub.html","title":"GitHub","lang":"zh-CN","frontmatter":{"article":false,"title":"GitHub","icon":"fa6-brands:github","order":4,"description":"GitHub Actions GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 main.yml，放于 .github\\\\workflows 目录下，repo ...","head":[["meta",{"property":"og:url","content":"https://newzone.top/deploy/GitHub.html"}],["meta",{"property":"og:site_name","content":"LearnData 开源笔记"}],["meta",{"property":"og:title","content":"GitHub"}],["meta",{"property":"og:description","content":"GitHub Actions GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 main.yml，放于 .github\\\\workflows 目录下，repo ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-18T07:06:22.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-18T07:06:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"GitHub\\",\\"description\\":\\"GitHub Actions GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 main.yml，放于 .github\\\\\\\\workflows 目录下，repo ...\\"}"]]},"headers":[{"level":2,"title":"GitHub Actions","slug":"github-actions","link":"#github-actions","children":[{"level":3,"title":"Dependabot","slug":"dependabot","link":"#dependabot","children":[]},{"level":3,"title":"不同仓库间复制","slug":"不同仓库间复制","link":"#不同仓库间复制","children":[]},{"level":3,"title":"Actions 失败重试","slug":"actions-失败重试","link":"#actions-失败重试","children":[]},{"level":3,"title":"uses 版本号","slug":"uses-版本号","link":"#uses-版本号","children":[]}]},{"level":2,"title":"Git Commit","slug":"git-commit","link":"#git-commit","children":[{"level":3,"title":"Type","slug":"type","link":"#type","children":[]},{"level":3,"title":"Scope","slug":"scope","link":"#scope","children":[]},{"level":3,"title":"Footer","slug":"footer","link":"#footer","children":[]}]},{"level":2,"title":"Pull Requests","slug":"pull-requests","link":"#pull-requests","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"GitHub 忽略指定文件","slug":"github-忽略指定文件","link":"#github-忽略指定文件","children":[]},{"level":3,"title":"添加 Github 源作为依赖","slug":"添加-github-源作为依赖","link":"#添加-github-源作为依赖","children":[]}]}],"git":{"createdTime":1658511538000,"updatedTime":1723964782000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":23}]},"readingTime":{"minutes":5.17,"words":1550},"filePathRelative":"deploy/GitHub.md","localizedDate":"2022年7月22日","excerpt":"<h2>GitHub Actions</h2>\\n<p>GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 <code>main.yml</code>，放于 <code>.github\\\\workflows</code> 目录下，repo 发生指定调节的改变时，Actions 会自动运行。<sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup></p>","autoDesc":true}')}}]);