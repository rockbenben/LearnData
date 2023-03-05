---
title: 不想学 Python，零基础也能用的自动化工具-UI.Vision RPA
date: 2022-04-21
category:
  - 自动化
tag:
  - 浏览器插件
  - UI.Vision
  - RPA
order: -45
---

> 无需懂编程代码，只需安装浏览器插件，3 分钟速成爬虫攻略。

Python 被认为是次时代必学语言，也就成为贩卖知识焦虑最好的标靶，各大平台隔三差五就想让我们买课程。

但普通人真的有必要学 Python 吗？量化交易、人工智能、数据分析，你用得到哪个？

当然，程序员、金融等相关从业者学 Python 无可厚非。可是，请不要推荐小白学 Python，90% 的人学了只是浪费时间。花 3 个月编程，也不一定能解决我们的基础功能需求。

请把你的时间花在更重要的事情上，克服知识焦虑。**学一百种热门语言，不如熟练掌握一个好的工具。**

![](https://tc.seoipo.com/2022-05-05-14-45-43.png)

以下内容只适合不想学 Python，不懂编程，又想使用自动化和爬虫的小白，高手可以关闭页面了。

UI.Vision RPA 是一款开源的全平台自动化工具，**无需懂编程**，即可完成**网页和桌面自动化操作**，包括文件上传、表单填写、内容抓取、定时截图、爬虫抓取等。

## 安装 UI.Vision

UI.Vision RPA 的主体是浏览器插件，只需去应用商店即可完成安装。

- Chrome 插件：<https://chrome.google.com/webstore/detail/uivision-rpa/gcbalfbdmfieckjlnblleoemohcganoc>
- Firefox 插件：<https://addons.mozilla.org/zh-CN/firefox/addon/rpa/>
- Edge 插件：<https://microsoftedge.microsoft.com/addons/detail/uivision-rpa-%E6%B5%8F%E8%A7%88%E5%99%A8%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7/goapmjinbaeomoemgdcnnhoedopjnddd>

## 零门槛入门

UI.Vision RPA 的运行脚本叫做「宏」。界面很简单，左侧是宏的范例库和本地文件，右侧是宏的运行和反馈区。

![UI.Vision 应用界面](https://tc.seoipo.com/2022-04-21-16-52-29.png)

打开 UI.Vision 插件，点击右上角按钮「Record」，插件会把你的操作录制为宏脚本。

执行时，选中左侧保存的宏，然后点击右上角的按钮「Play Macro」，即可回放指定宏。点击「Play Loop」，则可让宏循环运行。

![自动化运行 GIF](https://tc.seoipo.com/2022-04-21-20-25-31.gif)

## 第一次使用

以范例库中的 DemoAutofill 为例，这是网页自动填充在线表格的宏，点击右上方的「Step」按钮逐步运行宏。有进阶需求的话，把范例一个个拆解学习，了解命令的使用方式。

- 前 1-3 步使用「store」命令，对宏进行基本设置，如运行速度、超时等待、页面最长载入时间。点击命令右侧的「info for this command」可查看当前命令的官方文档。

- 第 4 步使用「open」命令，打开指定网址。

- 第 5-8 步使用「click」命令，依次点击指定按钮。

  ![UI.Vision 点击命令](https://tc.seoipo.com/2022-04-21-17-15-59.png)

- 第 9 步使用「pause」命令，延时 500 毫秒。

- 第 10 步使用「captureScreenshot」命令，对可见网页部分截图，记录运行步骤。

- 第 11 步使用「clickAndWait」命令，单击指定按钮后等待页面加载。

- 第 12-13 步使用「type」命令，在指定区域输出指定文字。

- 第 14 步使用「captureScreenshot」命令，对可见网页部分截图，记录运行步骤。

  第 15 步使用「pause」命令，延时 1000 毫秒。

  第 16 步使用「clickAndWait」命令，单击指定按钮后等待页面加载。

  第 17 步使用「captureScreenshot」命令，对可见网页部分截图，记录运行步骤。

- 第 18 步使用「echo」命令，调用浏览器通知模块，弹出指定提示。

- 第 19 步使用「comment」命令，注释当前步骤，无实际作用。

  第 20 步使用「open」命令，打开指定网址。

- 最后一步使用「assertTitle」命令，获取网站的标题，并检查是否与指定文本相符合，判断宏是否运行成功。

## 不同变量重复运行

用不同的变量文本进行重复的网页操作，需要使用 UI.Vision 的 [csvRead](https://ui.vision/rpa/docs/selenium-ide/csvread) 命令。下面以「依次打开不同链接」为例。

1. 点击 UI.Vision 右下角的「CSV」>「Import CSV」，用 CSV 文件导入批量处理内容。
2. 使用「csvReadArray」命令，Target 输入文件名「1.csv」，Value 输入分组名「link」。
3. 使用「executeScript」命令，Target 输入计算脚本 `return ${!LOOP} - 1;`，Value 输入自定义变量名 `num`。数组序号以 0 开始而循环序号 `${!LOOP}` 以 1 起始，所以数组序号为 `${!LOOP}-1`。
4. 使用「open」命令，Target 输入变量参数 `${link[${num}]}`，`${link[x]}` 指 link 数组中序号为 x 的成员。
5. 使用「pause」命令，Target 输入延时时间，单位为毫秒。
6. 点击右上角「Play Macro」旁边的下拉按钮，然后点击「Play Loop」，有多少行文本需要处理，就循环多少次。

## 常见问题

### 录制脚本无法使用

如果脚本中使用了热键，这是无法被录制的，需要你手工添加 `XType` 命令。

如果脚本点击不成功，可以将对映步骤的 `Click` 命令改为 `XClick`。

### 浏览器外使用 RPA

1. 地址栏输入 `chrome://extensions/`，找到扩展 UI.Vision RPA，点击按钮「详情」，启用「允许访问文件网址」。
2. 右键单击指定脚本，点击「Create autorun HTML」，将自动输出两个 html 文件。
3. 点击与脚本同名的 html 即可启动脚本。

### 本地运行自动化报错

本地运行自动化文件，报错 `No tab with id`。

这是自动化内存泄漏造成的报错，需要手动点击右上角的「Play Macro」按钮执行命令。
如果你不想手动执行，可以用编辑器打开与脚本同名的 html 文件，找到 `href="ui.vision.html?direct=1`，在这后面加入参数 `&continueInLastUsedTab=0`。

## 总结

UI.Vision RPA 操作简单，定制脚本宏只需录制和完善两步。

- 录制：手动操作一次并录制宏，该环节基本能完成 80% 的功能转换。
- 完善：补充或修改部分命令宏，多为延时、截图等不被录制的简单命令。

除 UI.Vision RPA 外，iMacros 和 Selenium IDE 也是热门的全平台自动化工具，都依托于浏览器插件。

这类自动化工具不用花大量时间学习，直接帮你解决问题，但并不能完全取代 Python 等编程语言。如果你依然有进阶需求，那努力去学编程吧，否则请先学会用工具。

**参考资料**：

- [UI.Vision RPA 浏览器自动化工具：表单填写、网页内容抓取、网页操作录制](https://www.appinn.com/ui-vision-rpa/)
- [UI.Vision 命令官方文档](https://ui.vision/rpa/docs/selenium-ide)
- [白话 UI.Vision Kantu 插件](https://github.com/LoveOctocat/UI.Vision-Kantu-ZH)
