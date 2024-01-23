---
article: false
title: VS Code
order: 3
---

利用各种插件，VS Code 不仅能够提高编程效率，还极大改善写作体验。尽管现在的 VS Code 配备了配置同步功能，但我在最近一次重装电脑系统后却遭遇了一个意外：VS Code 配置然全部消失了。这个意外促使我撰写这篇文章，作为备忘录。因此，为了避免类似情况的发生，我建议在重新安装系统之前，还是要手动备份你的配置文件，以确保安全。

## 写作辅助

- **AutoCorrect**：这个插件是写作纠错的佼佼者，特别是在处理中英文混排时的空格问题，但它尚未支持中英标点符号的自动转换。
- **Pangu-Markdown**：对于想在 Markdown 文档中为超链接和文本之间自动添加空格的用户来说，这个插件是个不错的选择。它也能够在中英文字符之间添加空格，从而优化 Markdown 文档的排版。但 Pangu-Markdown 需要手动唤起命令面板，并应用 `Pangu Format` 来格式化文本。

## Markdown 增强

- **Markdown All in One**：提供了全面的 Markdown 支持，使写作变得更加高效。
- **Markdown Preview Enhanced**：这个插件提供了 Markdown 文件的增强预览功能。
- **markdownlint**：用于 Markdown 语法的检查和修正。通过自定义设置，例如在配置文件中添加 `"markdownlint.config": { "MD034": false }`，可以关闭某些可能与其他项目（如 docusaurus3）冲突的特性。
- **Word Count CJK**：中英文字符计数工具。

## 界面美化

- **Blockman**：能够突出显示代码中的嵌套块，增强代码的可读性。如果插件会报错 `Error:invalid syntax`，则在设置中搜索 `N25`，关闭 `Blockman:N25 Analyze Tags`。^[[Bug: commented RegExp throws invalid syntax error](https://github.com/leodevbro/vscode-blockman/issues/43)]
- **Color Highlight**：将 CSS 颜色代码直观地显示为相应的颜色。
- **indent-rainbow**：通过使用四种不同颜色交替显示，对文本前的缩进进行可视化处理。
- **Prettier**：使用定制规则重新格式化代码，以实现一致的代码风格。建议开启文件保存时自动格式化文本的功能。
- **Image Preview**：提供文件内的图片预览功能，支持 CSS 和 SVG 格式。
- **vscode-icons**：根据文件类型显示相应的图标，使文件浏览更直观。
- **File Nesting Updater**：利用 VS Code 的文件嵌套功能，使文件树结构更加整洁。

## 代码补全

- **Auto Rename Tag**：在重命名一个标签时，自动重命名 HTML 标签的开始和结束标签。避免只修改了开始标签，而忘记修改结束标签。该扩展适用于 HTML、XML、PHP 和 JavaScript。
- **Auto Close Tag**：自动输入标签的闭合，提高编码效率。
- **Code Spell Checker**：在 VSCode 中检查代码拼写错误，支持变量、函数和注释等。它还允许用户添加自定义词汇，适应特定项目的需求。
- **Path Intellisense**：自动补全文件路径，尤其在导入文件时，能够快速提示并完成文件名的输入。
