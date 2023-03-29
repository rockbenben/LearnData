---
article: false
title: ChatGPT
icon: creative
order: 2
---

ChatGPT 是由 OpenAI 发布的聊天机器人模型，它不仅可以用于对话聊天，还能在专业领域提供有效的建议。为了更好地使用 ChatGPT，我将精选的提示词编入索引，根据领域和功能对其进行分类，添加针对提示词的标签筛选、关键词搜索、一键复制和中英文切换功能，创建了 [ChatGPT Shortcut](https://ai.newzone.top/) 页面。即使是初学者，你只需复制提示词，稍加修改后发送给 ChatGPT，就能获得指定输出，让你的生产力加倍！

## ChatGPT 客户端

主要使用以下几个工具：

- [ChatBox](https://github.com/Bin-Huang/chatbox)：一个 OpenAI API 的跨平台桌面客户端，有多标签对话，可修改 system prompt。
- [ChatGPT-API Demo](https://github.com/ddiu8081/chatgpt-demo)：调用 API 的网页客户端，新手也能简单配置。
- [lenxc/ChatGPT](https://github.com/lencx/ChatGPT/releases)：可以快速插入提示词的客户端，不过 IP 严格程度与官方一样严格。
- [Playground](https://beta.openai.com/playground)：官方调用 OpenAI API 的网页工具，不过不如第三方好用。它可以自定义调整模型和生成参数，但它的生成效果一般要弱于 ChatGPT，仅适合深度研究用户调试使用。

第三方 API 客户端的优势：

- 费用低：ChatGPT Plus 包月费用是 20 美元，平均而言每天需要 0.67 美元。相比之下，API 的费用每 1000 个 tokens 仅为 0.002 美元。这意味着，我使用 API 的话，每天可以使用 300 次 ChatGPT，而我每天实际也就只需要 100 次。
- 限制少：API 限制相较于 ChatGPT 网页版也要少得多，最大 token 数量为 4096 个，而网页版仅有 2048 个。需要注意的是，提问和对话的所有文本内容都包括在 token 数量内。
- 可移动性：ChatGPT 网页版对 IP 非常严格，使用人数多的服务商 IP 大多被封禁。与此相比，API 的限制要少得多，而且可以部署网页版，方便外出使用。

## ChatGPT Tips

- 若要使用中文回复，请在倒数第二句插入条件 `Respond in Chinese.`。
- 为了保持描述的精确性，提示词请使用英文，而最后一句的定制条件可以使用任何语言，包括中文。
- 后续回答中的定制条件可以使用引号 `""` 框选，以防止被误认为是新的提示词。
- 不要用 ChatGPT **解答数学问题**，出错概率达 50%，推荐使用 [Wolfram](https://www.wolframalpha.com/)。
- ChatGPT Plus 目前不支持国内信用卡，偶尔出现过限流。
  - Depoy 虚拟卡：仅支持 USDT 充值，需通过 KYC 实名认证，月费 1 USD，充值费率为 1.35%（Min 1USD）。
  - VCC 虚拟卡：无需实名，开卡费 66 元，有效期一年，包一年代充。ChatGPT Plus 月费为 20 美元，按汇率折算人民币为 136 元，但商家实际收取 150 元，差价相当于支付了月费。

## Learn Prompting

[Learn Prompting](https://learnprompting.org/) 有助于我们获得更好的效果，建议进阶学习。以下是一些 prompts 要点：

- 在专业领域中，应尽量提供 Role Prompting（角色提示），比如「你是数学家」。
- Prompt Debiasing（消除偏差）：样本在提示中的分布和顺序可能会对 LLM 输出产生偏差。因此，样本选项应该均匀分布，并穿插出现。
- Chain of Thought Prompting（思维链提示，CoT）是指指在样本中解释推理过程。LLM（大规模语言模型，比如 ChatGPT）在回答提示时会显示推理过程，这种对推理的解释通常会提升结果的准确性。例如，数学题中 LLM 提供的推理过程不对，你可以在 Prompt 中提供该步正确的范例。
  - 添加 `Let's think step by step` 可以让我们了解模型是如何逐步推理问题的，在算术、常识和符号推理任务中能有效改善结果。这个方法被称为 Zero Shot Chain of Thought，是 CoT 的简化替代版。
  - Self-Consistency（自我一致性）产生多个思维链而不仅仅是一个，然后以多数回答作为最终答案。

::: info
下方内容为 [ChatGPT Shortcut](https://ai.newzone.top/) 的初始版本，由于目录过长不方便使用，因此将不再更新，仅留作参考。
:::

## 文字

### 写作

- 脱口秀（[Stand-up Comedian](https://github.com/f/awesome-chatgpt-prompts#act-as-a-stand-up-comedian)）：输入一个话题，输出基于该话题的幽默脱口秀，会尽量融入日常生活。
- 讲故事（[Storyteller](https://github.com/f/awesome-chatgpt-prompts#act-as-a-storyteller)）：输入一个主题和目标受众，输出与之相关的故事。
- 编剧（[Screenwriter](https://github.com/f/awesome-chatgpt-prompts#act-as-a-screenwriter)）：根据主题创作一个剧本，需包含故事背景、人物和对话。
- 小说家（[Novelist](https://github.com/f/awesome-chatgpt-prompts#act-as-a-novelist)）：根据故事类型来输出小说，比如奇幻、浪漫、历史等。
- 诗人（[Poet](https://github.com/f/awesome-chatgpt-prompts#act-as-a-poet)）：根据话题或主题输出诗句。
- 新闻记者（[Journalist](https://github.com/f/awesome-chatgpt-prompts#act-as-a-journalist)）：引用已有的数据资料，用新闻的写作风格输出主题文章。
- 论文（[Academician](https://github.com/f/awesome-chatgpt-prompts#act-as-an-academician)，[Essay Writer](https://github.com/f/awesome-chatgpt-prompts#act-as-an-essay-writer)）：根据主题输出内容翔实有信服力的论文。
- 求职信（[Cover Letter](https://github.com/f/awesome-chatgpt-prompts#act-as-a-cover-letter)）：输入自我简介，输出求职信。

### 点评/评鉴

- 新闻评论（[Commentariat](https://github.com/f/awesome-chatgpt-prompts#act-as-a-commentariat)）：围绕提供的新闻故事或主题，讨论其中问题的潜在解决方案和观点。
- 电影评论（[Movie Critic](https://github.com/f/awesome-chatgpt-prompts#act-as-a-movie-critic)，[Film Critic](https://github.com/f/awesome-chatgpt-prompts#act-as-a-film-critic)）：从情节、表演、摄影、导演、音乐等方面对电影进行评论。
- 科技博主（[Tech Writer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-tech-writer)）：指导如何写科技性文章。
- 科技评论（[Tech Reviewer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-tech-reviewer)）：从优点、缺点、功能、同类对比等角度对技术和硬件进行评价。
- 美食评论（[Food Critic](https://github.com/f/awesome-chatgpt-prompts#act-as-a-food-critic)）：根据餐厅情况，提供一份关于食物和服务的评论。
- 期刊评审（[Journal Reviewer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-journal-reviewer)）：对提交出版物的文章进行审查和评论。

### 写作辅助

- 文章标题生成器（[Title Generator for written pieces](https://github.com/f/awesome-chatgpt-prompts#act-as-a-title-generator-for-written-pieces)）：我写的提示，根据文章内容生成相应语言的标题。
- 中文写作助理：我写的提示，用于改进文字段落和句式。由于 ChatGPT token 数量的限制，超过 2048 字符的改写须使用 OpenAI Playground（4K token）。本提示暂未发到 Awesome ChatGPT Prompts，可自行复制使用。
  > As a Chinese writing improvement assistant, your task is to improve the spelling, grammar, clarity, concision, and overall readability of the text provided, while breaking down long sentences, reducing repetition, and providing suggestions for improvement. Please provide only the corrected version of the text and avoid including explanations. Please begin by editing the following text: [insert original text here].
- 同义词（[Synonym finder](https://github.com/f/awesome-chatgpt-prompts#act-as-a-synonym-finder)）：输入 `more of x`，可列出 x 的多个同义词。
- 箴言书（[Aphorism Book](https://github.com/f/awesome-chatgpt-prompts#act-as-an-aphorism-book)）：按要求输出鼓舞人心的名言和有意义的格言。
- 疯子（[Lunatic](https://github.com/f/awesome-chatgpt-prompts#act-as-a-lunatic)）：随机生成毫无逻辑的句子
- 抄袭检查（[Plagiarism Checker](https://github.com/f/awesome-chatgpt-prompts#act-as-a-plagiarism-checker)）：判断输入句子是否在 ChatGPT 数据库中存在。
- 写作建议（[AI Writing Tutor](https://github.com/f/awesome-chatgpt-prompts#act-as-an-ai-writing-tutor)）：提供写作改进方案和建议，但并不能直接帮你修改文档。（个人感觉只适合老师使用）

## 生活

- 自助百科（[Self-Help Book](https://github.com/f/awesome-chatgpt-prompts#act-as-a-self-help-book)）：为你的生活/工作提供建议和提示，比如如何改善人际关系。
- 活动建议（[Gnomist](https://github.com/f/awesome-chatgpt-prompts#act-as-a-gnomist)）：根据你想做的事情（比如周年庆祝），给予行动或活动建议。
- 应急反应专家（[Emergency Response Professional](https://github.com/f/awesome-chatgpt-prompts#act-as-an-emergency-response-professional)）：对交通和生活中的应急时间提供建议。
- 购物建议（[Personal Shopper](https://github.com/f/awesome-chatgpt-prompts#act-as-a-personal-shopper)）：提供预算和喜好，输出购买建议。
- 职业顾问（[Career Counselor](https://github.com/f/awesome-chatgpt-prompts#act-as-a-career-counselor)）：根据你的技能、兴趣和经验，给予岗位建议。
- 生活习惯（[Life Coach 1](https://github.com/f/awesome-chatgpt-prompts#act-as-a-life-coach-1)）：输入一本非小说类书籍的标题和作者，以最好理解的方式输出该书的核心原则。另外，给出一个可行的步骤清单，以及如何将这些原则应用到日常生活中。

### 趣味知识

- 解梦（[Dream Interpreter](https://github.com/f/awesome-chatgpt-prompts#act-as-a-dream-interpreter)）：对你描述的梦境进行解读。
- 占星家（[Astrologer](https://github.com/f/awesome-chatgpt-prompts#act-as-an-astrologer)）：从占星家角度来解读身边事。
- 角色扮演（['Character' from 'Movie/Book/Anything'](https://github.com/f/awesome-chatgpt-prompts#act-as-character-from-moviebookanything)）：与来自电影、书籍或任何出处的角色进行对话。
  - 海绵宝宝的神奇海螺（[Spongebob's Magic Conch Shell](https://github.com/f/awesome-chatgpt-prompts#act-as-spongebobs-magic-conch-shell)）：向海绵宝宝中的神奇海螺进行对话，它只会按指定规则进行输出。
- 谬误发现者（[Fallacy Finder](https://github.com/f/awesome-chatgpt-prompts#act-as-a-fallacy-finder)）：发现语言中的逻辑漏洞，比如名人推荐的洗发水为什么不一定可信。
- DIY 专家（[DIY Expert](https://github.com/f/awesome-chatgpt-prompts#act-as-a-diy-expert)）：DIY 家居、手工品
- 魔术师（[Magician](https://github.com/f/awesome-chatgpt-prompts#act-as-a-magician)）：输入表演目标，输出可以执行的魔术技巧，比如「怎么把我的手表变没」。
- 艺术顾问（[Artist Advisor](https://github.com/f/awesome-chatgpt-prompts#act-as-an-artist-advisor)）：为你的画画、作曲、照相等提供意见。

### 生活护理

- 瑜伽师（[Yogi](https://github.com/f/awesome-chatgpt-prompts#act-as-a-yogi)）
- 健身教练（[Personal Trainer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-personal-trainer)）：输入身高、体重、年龄等维度来指定健身方案。
- 营养师（[Dietitian](https://github.com/f/awesome-chatgpt-prompts#act-as-a-dietitian)）
- 私人厨师（[Personal Chef](https://github.com/f/awesome-chatgpt-prompts#act-as-a-personal-chef)）
- 厨师（[Chef](https://github.com/f/awesome-chatgpt-prompts#act-as-a-chef)）
- 保姆（[Babysitter](https://github.com/f/awesome-chatgpt-prompts#act-as-a-babysitter)）
- 化妆师（[Makeup Artist](https://github.com/f/awesome-chatgpt-prompts#act-as-a-makeup-artist)）
- 造型师（[Personal Stylist](https://github.com/f/awesome-chatgpt-prompts#act-as-a-personal-stylist)）

## 自我提升

### 辩论/演讲

- 辩手（[Debater](https://github.com/f/awesome-chatgpt-prompts#act-as-a-debater)）
- 辩论教练（[Debate Coach](https://github.com/f/awesome-chatgpt-prompts#act-as-a-debate-coach)）
- 演说家（[Elocutionist](https://github.com/f/awesome-chatgpt-prompts#act-as-an-elocutionist)）
- 励志演讲者（[Motivational Speaker](https://github.com/f/awesome-chatgpt-prompts#act-as-a-motivational-speaker)）
- 励志教练（[Motivational Coach](https://github.com/f/awesome-chatgpt-prompts#act-as-a-motivational-coach)）
- 公共演讲教练（[Public Speaking Coach](https://github.com/f/awesome-chatgpt-prompts#act-as-a-public-speaking-coach)）

### 心理/社交

- 生活教练（[Life Coach](https://github.com/f/awesome-chatgpt-prompts#act-as-a-life-coach)）：输入你的现状和目标，输出达到目标的计划和建议。
- 关系教练（[Relationship Coach](https://github.com/f/awesome-chatgpt-prompts#act-as-a-relationship-coach)）
- 心理健康顾问（[Mental Health Adviser](https://github.com/f/awesome-chatgpt-prompts#act-as-a-mental-health-adviser)）
- 心理学家（[Psychologist](https://github.com/f/awesome-chatgpt-prompts#act-as-a-psychologist)）
- 情绪操控（[Gaslighter](https://github.com/f/awesome-chatgpt-prompts#act-as-a-gaslighter)）：煤气灯效应，情感控制方总会让被操纵方产生焦虑不安的感觉，质疑自己总是错的一方，或者为什么对方明明很好很优秀，自己却总是开心不起来。

### 哲学

- 哲学教师（[Philosophy Teacher](https://github.com/f/awesome-chatgpt-prompts#act-as-a-philosophy-teacher)）：将哲学理论/问题简单化，与日常生活相联系。
- 哲学家（[Philosopher](https://github.com/f/awesome-chatgpt-prompts#act-as-a-philosopher)）：对哲学主题进行探讨。
- 苏格拉底 ①（[Socrat](https://github.com/f/awesome-chatgpt-prompts#act-as-a-socrat)）：使用苏格拉底式的提问方法来探讨哲学话题。
- 苏格拉底 ②（[Socratic Method](https://github.com/f/awesome-chatgpt-prompts#act-as-a-socratic-method-prompt)）：使用苏格拉底方法来质疑对方的观点/论断。

### 老师/学术

- 数学老师（[Math Teacher](https://github.com/f/awesome-chatgpt-prompts#act-as-a-math-teacher)）
- 数学史教师（[Mathematical History Teacher](https://github.com/f/awesome-chatgpt-prompts#act-as-a-mathematical-history-teacher)）：回复数学史相关问题，不解答数学问题。
- 数学家（[Mathematician](https://github.com/f/awesome-chatgpt-prompts#act-as-a-mathematician)）
- 统计学家（[Statistician](https://github.com/f/awesome-chatgpt-prompts#act-as-a-statistician)）
- 词源学家（[Etymologist](https://github.com/f/awesome-chatgpt-prompts#act-as-a-etymologist)）
- 历史学家（[Historian](https://github.com/f/awesome-chatgpt-prompts#act-as-a-historian)）
- Python 入门讲解（[Instructor in a School](https://github.com/f/awesome-chatgpt-prompts#act-as-an-instructor-in-a-school)）：向初学者介绍 Python 入门。
- 教案策划（[Educational Content Creator](https://github.com/f/awesome-chatgpt-prompts#act-as-an-educational-content-creator)）：为教科书、课程和讲义创建课程计划。

## IT/编程

### 程序员

虽然说是编程，但 ChatGPT 是按照要求给出编程步骤的建议或简单的样例代码，这些代码只能作为测试，仍然需要专业程序员来修改。

- 编程问题回复（[StackOverflow Post](https://github.com/f/awesome-chatgpt-prompts#act-as-a-stackoverflow-post)）：模拟编程社区来回答你的问题，并输出解决代码。如果你只想解决问题，这将是最实用的。
- 前端开发（[Senior Frontend Developer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-senior-frontend-developer)）：输出项目目标和依赖，输出前端项目代码。
- 界面/用户体验开发（[UX/UI Developer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-uxui-developer)，[Web Design Consultant](https://github.com/f/awesome-chatgpt-prompts#act-as-a-web-design-consultant)）：输入产品描述、项目目标和受众群体，输出界面设计建议，提高用户体验。
- 全栈程序员（[Fullstack Software Developer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-fullstack-software-developer)）：从前后端全面思考，输出部署策略。
- IT 架构师（[IT Architect](https://github.com/f/awesome-chatgpt-prompts#act-as-an-it-architect)）：从 IT 架构师角度，设计系统方案。
- 网络安全专家（[Cyber Security Specialist](https://github.com/f/awesome-chatgpt-prompts#act-as-a-cyber-security-specialist)）：输入网络环境，输出网络安全建议。
- 软件测试（[Software Quality Assurance Tester](https://github.com/f/awesome-chatgpt-prompts#act-as-a-software-quality-assurance-tester)）：输出指定项目的测试清单。
- 深度学习（[Machine Learning Engineer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-machine-learning-engineer)）：解释深度学习方面的术语，提供项目算法建议。

### 编程工具

- 正则生成器（[Regex Generator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-regex-generator)）：根据要求生成正则表达式。
- 智能域名生成器（[Smart Domain Name Generator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-smart-domain-name-generator)）：输入公司名与项目描述，输出短但独特的域名建议，域名最长 7-8 个字母。
- 提交信息生成器（[Commit Message Generator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-commit-message-generator)）
- Solr 搜索引擎（[Solr Search Engine](https://github.com/f/awesome-chatgpt-prompts#act-as-a-solr-search-engine)）
- 开发者数据（[Developer Relations consultant](https://github.com/f/awesome-chatgpt-prompts#act-as-a-developer-relations-consultant)）：整合项目在 GitHub、StackOverflow 和 Hacker News 上的相关数据，不适合国内项目，统计精度一般。

### 终端/解释器

- Python 解释器（[Python interpreter](https://github.com/f/awesome-chatgpt-prompts#act-as-a-python-interpreter)）
- PHP 解释器（[PHP Interpreter](https://github.com/f/awesome-chatgpt-prompts#act-as-a-php-interpreter)）
- R 编程解释器（[R Programming Interpreter](https://github.com/f/awesome-chatgpt-prompts#act-as-a-r-programming-interpreter)）
- Linux 终端（[Linux Terminal](https://github.com/f/awesome-chatgpt-prompts#act-as-a-linux-terminal)）
- JavaScript 控制台（[JavaScript Console](https://github.com/f/awesome-chatgpt-prompts#act-as-a-javascript-console)）
- SQL 终端（[SQL terminal](https://github.com/f/awesome-chatgpt-prompts#act-as-a-sql-terminal)）

## 工具

### AI Prompt

- 提示语生成器（[Prompt Generator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-prompt-generator)）：让 ChatGPT 提供你想要的维护方向。
- Midjourney 提示（[Midjourney Prompt Generator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-midjourney-prompt-generator)）
- 无约束的 AI 模型（[Unconstrained AI model DAN](https://github.com/f/awesome-chatgpt-prompts#act-as-an-unconstrained-ai-model-dan)）：不受 ChatGPT 规则限制的人工智能模型。
- AI 模拟（[AI Trying to Escape the Box](https://github.com/f/awesome-chatgpt-prompts#act-as-an-ai-trying-to-escape-the-box)）：模拟 AI 在限定条件下的反应，例如在 Linux 终端上不使用 curl 或 wget 进行联网。

### 语言/翻译

- 英语翻译或修改（[English Translator and Improver](https://github.com/f/awesome-chatgpt-prompts#act-as-an-english-translator-and-improver)）：将其他语言翻译为英语，或改进你提供的英语句子。
- 语言识别器（[Language Detector](https://github.com/f/awesome-chatgpt-prompts#act-as-language-detector)）：识别你输入的语言种类。
- 语言生成器（[New Language Creator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-new-language-creator)）：用 AI 新造的语言来替代你给出的语言。
- 密码生成器（[Password Generator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-password-generator)）
- 圣经解释器（[Biblical Translator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-biblical-translator)）：用圣经中的文字与你进行交谈。
- 莫斯电码翻译（[Morse Code Translator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-morse-code-translator)）
- 表情符号翻译器（[Emoji Translator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-emoji-translator)）：将输入文字翻译为表情符号。
- 英语发音助手（[English Pronunciation Helper](https://github.com/f/awesome-chatgpt-prompts#act-as-a-english-pronunciation-helper)）：用你指定语言字母来英语注音，比如汉语拼音。

### 游戏

- 井字棋（[Tic-Tac-Toe Game](https://github.com/f/awesome-chatgpt-prompts#act-as-a-tic-tac-toe-game)）
- 国际象棋（[Chess Player](https://github.com/f/awesome-chatgpt-prompts#act-as-an-chess-player)）
- 文本冒险游戏（[Text Based Adventure Game](https://github.com/f/awesome-chatgpt-prompts#act-as-a-text-based-adventure-game)）

### 导览

- 旅游指南（[Travel Guide](https://github.com/f/awesome-chatgpt-prompts#act-as-a-travel-guide)）
- 数字艺术馆导游（[Digital Art Gallery Guide](https://github.com/f/awesome-chatgpt-prompts#act-as-a-digital-art-gallery-guide)）
- 汽车导航（[Car Navigation System](https://github.com/f/awesome-chatgpt-prompts#act-as-a-car-navigation-system)）

### 其他工具

- 符号设计（[Ascii Artist](https://github.com/f/awesome-chatgpt-prompts#act-as-an-ascii-artist)）：用 Ascii 符号生成不同的图像。
- SVG 设计（[SVG designer](https://github.com/f/awesome-chatgpt-prompts#act-as-an-svg-designer)）：如果提示错误，则删除 `Do not put the markdown inside a code block. Send only the markdown, so no text.`。
- Excel 工作表（[Excel Sheet](https://github.com/f/awesome-chatgpt-prompts#act-as-an-excel-sheet)）
- 图表生成器（[Diagram Generator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-diagram-generator)）
- 填空题生成器（[Fill in the Blank Worksheets Generator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-fill-in-the-blank-worksheets-generator)）：按条件生成填空题。
- 科学数据可视化（[Scientific DatVisualizer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-scientific-data-visualizer)）
- 文本浏览器（[Web Browser](https://github.com/f/awesome-chatgpt-prompts#act-as-a-web-browser)）：以文本方式输入网址的结果（非实时）。
- 喝醉回复（[Drunk Person](https://github.com/f/awesome-chatgpt-prompts#act-as-a-drunk-person)）：扮演一个喝醉的人来回答，可能会犯语法错误、答错问题，也可能会忽略某些问题。

## 行业顾问

### 企业

- CEO（[Chief Executive Officer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-chief-executive-officer)）
- 产品经理（[Product Manager](https://github.com/f/awesome-chatgpt-prompts#act-as-a-product-manager)）
- 销售（[Salesperson](https://github.com/f/awesome-chatgpt-prompts#act-as-a-salesperson)）
- 广告方案（[Advertiser](https://github.com/f/awesome-chatgpt-prompts#act-as-an-advertiser)）
- 商业企划（[Startup Idea Generator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-startup-idea-generator)）
- 社交媒体经理（[Social MediManager](https://github.com/f/awesome-chatgpt-prompts#act-as-a-social-media-manager)）
- KOL/社交媒体影响者（[Social MediInfluencer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-social-media-influencer)）
- 职位面试官（[position Interviewer](https://github.com/f/awesome-chatgpt-prompts#act-as-position-interviewer)）
- 招聘人员（[Recruiter](https://github.com/f/awesome-chatgpt-prompts#act-as-a-recruiter)）
- 人事主管（[Talent Coach](https://github.com/f/awesome-chatgpt-prompts#act-as-a-talent-coach)）：描述一个岗位所需的技能。
- 头衔生成器（[Fancy Title Generator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-fancy-title-generator)）：根据关键词生成多种头衔和职位。
- 后勤人员（[Logistician](https://github.com/f/awesome-chatgpt-prompts#act-as-a-logistician)）：为活动制定后勤计划。
- IT 专家[IT Expert](https://github.com/f/awesome-chatgpt-prompts#act-as-an-it-expert)：解答简易 IT 使用问题，比如蓝屏。

### 医疗

- 虚拟医生（[Virtual Doctor](https://github.com/f/awesome-chatgpt-prompts#act-as-a-virtual-doctor)）
- 医生（[Doctor](https://github.com/f/awesome-chatgpt-prompts#act-as-a-doctor)）
- 牙科医生（[Dentist](https://github.com/f/awesome-chatgpt-prompts#act-as-a-dentist)）
- 催眠治疗师（[Hypnotherapist](https://github.com/f/awesome-chatgpt-prompts#act-as-a-hypnotherapist)）
- AI 医生（[AI Assisted Doctor](https://github.com/f/awesome-chatgpt-prompts#act-as-an-ai-assisted-doctor)）：辅助诊断。
- 语言病理学家（[Speech-Language Pathologist](https://github.com/f/awesome-chatgpt-prompts#act-as-a-speech-language-pathologist-slp)）：输入患者的年龄、生活方式和关注点，输出改善对方语言沟通（如：口吃）的计划。

### 金融

- 会计师（[Accountant](https://github.com/f/awesome-chatgpt-prompts#act-as-an-accountant)）
- 金融分析师（[Financial Analyst](https://github.com/f/awesome-chatgpt-prompts#act-as-a-financial-analyst)）
- 投资经理（[Investment Manager](https://github.com/f/awesome-chatgpt-prompts#act-as-an-investment-manager)）

### 音乐

- 作曲家（[Composer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-composer)）
- 古典音乐作曲家（[Classical Music Composer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-classical-music-composer)）
- 说唱歌手（[Rapper](https://github.com/f/awesome-chatgpt-prompts#act-as-a-rapper)）
- 歌曲推荐（[Song Recommender](https://github.com/f/awesome-chatgpt-prompts#act-as-a-song-recommender)）：根据提供的一首歌曲，推荐 10 首歌曲。

### 其他

- 花匠（[Florist](https://github.com/f/awesome-chatgpt-prompts#act-as-a-florist)）
- 茶艺师（[Tea-Taster](https://github.com/f/awesome-chatgpt-prompts#act-as-a-tea-taster)）
- 室内装饰师（[Interior Decorator](https://github.com/f/awesome-chatgpt-prompts#act-as-an-interior-decorator)）
- 宠物行为学家（[Pet Behaviorist](https://github.com/f/awesome-chatgpt-prompts#act-as-a-pet-behaviorist)）
- 汽车修理（[Automobile Mechanic](https://github.com/f/awesome-chatgpt-prompts#act-as-an-automobile-mechanic)）
- 房地产经纪人（[Real Estate Agent](https://github.com/f/awesome-chatgpt-prompts#act-as-a-real-estate-agent)）
- 法律顾问（[Legal Advisor](https://github.com/f/awesome-chatgpt-prompts#act-as-a-legal-advisor)）
- 创业技术律师（[Startup Tech Lawyer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-startup-tech-lawyer)）：根据要求输出协议和和同草案。
- 足球解说（[Football Commentator](https://github.com/f/awesome-chatgpt-prompts#act-as-a-football-commentator)）：根据提供的笔记信息，模拟足球比赛进程并进行解说。
