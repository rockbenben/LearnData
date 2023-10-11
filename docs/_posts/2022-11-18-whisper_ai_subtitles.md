---
title: 找不到字幕？Whisper 让不懂外语的你也能看懂日剧
date: 2022-11-18
category:
  - 工具
tag:
  - AI
  - Whisper
  - 字幕
order: -51
---

从大学开始，我看日剧十几年了，但是日语毫无进步，只能听懂几句耳熟能详的句子，看国外电影必须靠字幕组。我曾经想过学日语，报了暑期班，但成绩被七岁的小妹妹同学吊打。这让我被自己的语言能力说服了，认为这辈子都离不开字幕组。这种情况一直持续着，直到我测试视频剪辑工具 AutoCut 时遇到了 Whisper。

Whisper 是今年 9 月被 OpenAI 开源的自动语音识别系统，除了可以用于语音识别，Whisper 还能实现多种语言的转录，并将这些语言翻译成英语。「语言识别」「转录」听起来很高级，但 transcribe（转录）指的是将语音转为文字，Whisper 会为音视频生成带时间轴的字幕文件，是**支持 99 种语言 AI 字幕工具**。

虽然与 Stable Diffusion 同样归属 AI 工具，但是 Whisper 安装非常简单。只需在终端输入两行代码，安装 Whisper 和 FFmpeg，就可以开始使用了。如你不清楚如何安装 FFmpeg，可以参考 [FFmpeg 配置步骤](https://newzone.top/posts/2022-11-03-ffmpeg_screen_recording.html#%E9%85%8D%E7%BD%AE-ffmpeg)。这部分我不多做赘述，具体可以参考 [Whisper 官方文档](https://github.com/openai/whisper)。

```bash
pip install -U openai-whisper

# on MacOS using Homebrew (https://brew.sh/)
brew install ffmpeg

# on Windows using Scoop (https://scoop.sh/)
scoop install ffmpeg
```

接下来，我会分享如何使用 Whisper 为外语视频自动生成字幕，以日本综艺节目「中森明菜デビュー 40 周年 女神の熱唱！喝采は今も」为例。

## 音视频转录

在文件所在目录下打开终端，运行 `whisper jp.mp4` 即可执行音视频转录。测试视频名原本为日语，我将其更改为「jp.mp4」，原因是我的系统中只安装了中英语言包，因此使用其他语言或**文件名中含有空格**的文件会导致出现 Invalid argument 错误，从而导致转录失败。Whisper 的媒体分析环节调用了 FFmpeg，因此支持大多数主流音视频格式。

![](https://img.newzone.top/2022-11-18-09-25-29.png "whisper 命令")

测试视频时长 90 分钟，我使用了 3080Ti 显卡进行转录，用时 10 分钟。转录过程中，不要进行游戏或直播等占显存较多的行为，否则可能会导致显存不足而无法继续转录。Whisper 对设备的要求不高，但设备的性能会影响转录时长和可使用的转录模型。如果你使用 CPU 进行转录，则需要的时间会增加 5-10 倍。

转录完成后，Whisper 将生成原生字幕文件，例如，日语视频将被转录为日语字幕，西班牙语视频将得到西班牙语字幕。

## 字幕翻译

通过 Whisper 获得原生字幕后，接着要将其翻译为中文。这一步需借助 SubtitleEdit Online，它支持免费在线翻译字幕，可使用 Google 和 Yandex 两种翻译引擎。^[[如何自动翻译字幕：6 个好用的视频字幕翻译工具](https://www.jihosoft.cn/zimu/tutorial/translate-subtitles/)]

1. 打开 [SubtitleEdit Online](https://www.nikse.dk/subtitleedit/online)，点击「Subtitle」>「Open...」，选择要导入的字幕文件。
2. 点击「Auto-translate」，选择翻译引擎，然后在弹出窗口中选择字幕要翻译的语言，并**将页面拖动到最下方**（非常重要），确定所有文字都被翻译后点击 OK 按钮。
3. 点击「Subtitle」>「Save/download...」，即可保存翻译好的字幕文件。

如果你开通了 Google Translate API，还可以使用我的[字幕翻译](https://tools.newzone.top/subtitle-translator)工具，批量将 .srt 字幕文件进行翻译。除了网页翻译和 ChatGPT API 字幕，本地端的神经机器翻译也是一个好的选择。如果你是 macOS 用户，推荐使用 [Argos Translate](https://github.com/argosopentech/argos-translate)，这是基于 OpenNMT 的开源神经机器翻译。如果你具备一定的编程能力，可以尝试 [Opus-MT](https://github.com/Helsinki-NLP/Opus-MT)。不管使用哪种方式，都是将字幕以文本方式导出，然后复制到翻译引擎中翻译，即可得到与 Google Translate 不同的翻译结果。

## Whisper 进阶命令

### task

`--task` 分为 transcribe（语音转录）和 translate。Whisper 默认使用 `--task transcribe` 模式，将语音转录为对应的语言字幕。`--task translate` 是所有语言翻译为英文，目前尚未支持翻译为其他语言。

### language

`--language` 是设置语音转录的语种，支持语种范围查看 [tokenizer.py](https://github.com/openai/whisper/blob/main/whisper/tokenizer.py)，比如指定日语 `--language Japanese`。如果你没指定语种，Whisper 会截取音频的前 30 秒来判断语种。

如果指定语种与文件中的语种并不相同，Whisper 会强制翻译，但 10 分钟以上的音视频会出现大量的重复无意义字幕。^[[For longer audio files (>10 minutes) not in English, Silero VAD (Voice Activity Detector)](https://github.com/openai/whisper/discussions/397)] 假设你把日语视频的转录语言设为汉语，前 8 分钟 Whisper 会正确转录到中文，但 8 分钟后的转录字幕会一直重复，并与实际片段无关。

### model

`--model` 指 Whisper 的转录模型，转录效果为 tiny < base < small < medium < large，默认使用 small。添加参数 `--model medium` 或 `--model large` 可以切换到更大的模型，但转录时间也会变长。如果你是对英文视频进行转录，则在模型参数上添加后缀 `.en`，能提升转录速度。

|  模型  |  大小  | 单英语模型  | 多语言模型 | 最低显存 | 转录速率 |
| :----: | :----: | :---------: | :--------: | :------: | :------: |
|  tiny  |  39 M  |  `tiny.en`  |   `tiny`   |  ~1 GB   |   ~32x   |
|  base  |  74 M  |  `base.en`  |   `base`   |  ~1 GB   |   ~16x   |
| small  | 244 M  | `small.en`  |  `small`   |  ~2 GB   |   ~6x    |
| medium | 769 M  | `medium.en` |  `medium`  |  ~5 GB   |   ~2x    |
| large  | 1550 M |     N/A     |  `large`   |  ~10 GB  |    1x    |

上方表格是 Whisper 官方提供的数据，但目前的模型实际增大了 50%-100%，要求也相应提高了。因此，该表格仅供参考。

### 辅助参数

- `--device` 指 whisper 运行算法所用的硬件，默认为 cuda 即显存，或者指定 `--device cpu` 。特别当你显存不够，又想使用较大模型时，推荐指定 CPU 转录。
- `--temperature` temperature 决定了生成模型的贪婪程度，默认为 0。如果 temperature 低，概率最高的词将远高于其他低概率，模型将可能输出最正确的文本，变化很小。如果 temperature 较高，该模型会输出概率较高的其他单词，而不是概率最高的单词，生成的文本将更加多样化，但有更高的可能性出现语法错误和生成无意义的文本。
- `--temperature_increment_on_fallback` 当解码失败时，回推时要增加的 temperature，默认为 0.2。
- `--best_of` temperature 不为零时的侯选个数，默认为 5。
- `--beam_size` temperature 为零时，number of beams in beam search，默认为 5。beam 直译是光束，但没理解具体意思，我简单理解其为侯选数。
- `--patience` 用于 beam decoding 的 patience value，as in <https://arxiv.org/abs/2204.05424>, 其默认值为 1.0，相当于 conventional beam search（default: None）默认的 simple length normalization（default: None）。
- `--length_penalty` optional token length penalty coefficient (alpha) as in <https://arxiv.org/abs/1609.08144>, 默认使用 simple length normalization (default: None)
- `--suppress_tokens` 逗号分隔的标记 ID 列表，以便在采样过程中进行抑制; 默认为 -1，这会抑制除常见标点符号外的大多数特殊字符的出现。
- `--initial_prompt` 可选的文本提示，在命令首行出现，默认为空。
- `--condition_on_previous_text` 默认为 True，为下一个窗口提供模型之前的输出作为提示；禁用可能会使不同窗口的文本不一致，但模型变得不容易陷入失败循环。
- `--fp16` 是否启用半精度 fp16 进行推理运算，默认为 True，否则为单精度 fp32，运行时间延长。
- `--threads` 指定 CPU 运算的线程数，会取代 MKL_NUM_THREADS/OMP_NUM_THREADS (默认：0)。
- `--output_format` 用于指定转录后的字幕格式，支持的格式有 txt、vtt、srt、tsv、json 和 all，可以使用 `-f` 缩写。我通常只需要 srt 格式的文件，所以我将其设置为 `-f srt`。

### 幻听参数

非英语视频的转录有时会出现幻听，即静默片段被识别出语音，或是转录结果与该片段无关。这些问题是由于语气停顿参数引起的。幻听的解决方案是引入 [VAD](https://github.com/snakers4/silero-vad)，但 VAD 对动手能力要求较高。如果你的视频转录出现了严重的幻听，建议尝试调节参数阈值。

- `--no_speech_threshold` 无声识别的阈值，默认为 0.6。当 no_speech_threshold 高于阈值且 logprob_threshold 低于预设时，该片段将被标记为静默。对于非英语长视频来说，建议将其调低，否则经常出现大段的重复识别。
- `--logprob_threshold` 转录频次的阈值，默认为 -1.0。当 logprob_threshold 低于预设时，将不对该片段进行转录。建议修改为 None 或更低的值。
- `--compression_ratio_threshold` 压缩比的阈值，默认为 2.4。当 compression_ratio_threshold 高于预设时，将不对该片段进行转录。

`--no_speech_threshold 0.5 --logprob_threshold None --compression_ratio_threshold 2.2` 是我常用的参数，你可以根据视频情况调整。在转录命令后面添加幻听参数即可。转录指令示例：`whisper jp.mp4 --language Japanese --model large-v2 -f srt --no_speech_threshold 0.5 --logprob_threshold None --compression_ratio_threshold 2.2`。需要注意的是，幻听参数并不适用于每个视频。如果你发现添加参数后的字幕内容大量重复，请将幻听参数移除或将调整幻听参数，比如 `whisper jp.mp4 --language Japanese --model large-v2 -f srt --no_speech_threshold 0.1 --logprob_threshold None --compression_ratio_threshold 1.0`。

## 转录成果

「夜のヒットスタジオ・スペシャル」：

<BiliBili bvid="BV1EP4y117bh" />

「中森明菜デビュー 40 周年 女神の熱唱！喝采は今も」：

<BiliBili bvid="BV1yG4y1x7Qy" />

上方是我用 Whisper 转录的日语视频，不过哔哩哔哩不支持站外嵌套字幕，查看字幕效果需跳转回 B 站。测试视频中 Whisper 对谈话片段识别不错，但歌曲转录与原意相差甚远。而我特别喜欢中森明菜的歌，所以在转录第二个视频后，特意花了几个小时重新比对歌词。

但视频发布后，B 站给我推送了明菜歌迷会在一周前发布的带字幕视频。原本我有些沮丧，想着白花工夫了。但我看过对方专业的字幕视频后，心情立马变好了。歌迷会版本的字幕遣词造句都非常讲究，明显是日语精通级别，而我连五十音都没背全，用 10 分钟就能做出能看懂的字幕，质量也没相差巨大，我非常满足。之后，我也可以看没字幕的生肉节目了，不用再傻等字幕组的宠幸。我甚至可以帮中文节目添加字幕，毕竟与声音相比，我们从文字中汲取信息要轻松许多。

## 其他工具

如果你的电脑配置不足，但又想翻译非英语（如日语）的长视频，可以使用 Google Colab 的免费 GPU 运行 [N46Whisper](https://colab.research.google.com/github/Ayanaminn/N46Whisper/blob/main/N46Whisper.ipynb) 来在线转录字幕。转录出的字幕可以在 N46Whisper 中使用 ChatGPT API 进行翻译，也可以通过上文的机器翻译方式进行免费翻译。需要注意的是，在处理日语长视频时可以开启 `is_vad_filter`，减少幻听的出现。

[faster-whisper](https://github.com/guillaumekln/faster-whisper) 和 [whisperX](https://github.com/m-bain/whisperX) 内置了 VAD，并拥有更快的处理速度。如果你对命令行工具不熟悉，也可以利用 [Subs AI](https://github.com/abdeladim-s/subsai)、[Buzz](https://github.com/chidiwilliams/buzz) 来进行 Whisper 转录。

不过，目前第三方套壳工具存在各种问题。如果你只是想批量转录，可以使用「whisper + 音视频绝对路径」的方式，来将多个文件按序批量转录出字幕文件。注意，命令行的最后一行需要换行，否则最后一个文件不会自动转录。

## 更多

除了用 Whisper 转录的字幕来看视频和视频剪辑外，还能将来管理音视频。@PlatyHsu 分享的 [ATP Podcast Search](https://marcoshuerta.com/dash/atp_search/) 启发了我，ATP 用 Whisper 转录给一个做了十年的英文播客做了可搜索的索引。那是否有应用在本地端用字幕管理视频文件？

![](https://img.newzone.top/2022-11-18-23-21-25.png "ATP Podcast Search 搜索界面")

这个想法在技术上实现起来不难，甚至飞书妙记已经起到类似效果，但它是在线应用，不支持上传字幕，而且仅支持原生字幕搜索。换句话说，上传日语视频，你必须用日语搜索，即使妙记提供了中文翻译查看，你也不能中文搜索。而其他的视频笔记，只有 B 站专属的站内视频笔记和只支持 YouTube 的 [ClarityNotes](http://xlrocket.com/%e7%9c%8b%e8%bf%87%e4%b8%8d%e4%bb%a3%e8%a1%a8%e5%ad%a6%e8%bf%87%ef%bc%8c%e7%8e%b0%e5%9c%a8%e8%83%bd%e8%be%b9%e7%9c%8b%e8%a7%86%e9%a2%91%ef%bc%8c%e8%be%b9%e5%81%9a%e7%ac%94%e8%ae%b0%ef%bc%8c-%e9%9d%9e/)。

总体上，还没出现能用字幕/时间戳管理视频的「全视频网站/本地视频」的笔记工具，暂时只能记录下这个想法。笔记软件们继续卷起来，把字幕文件作为数据库索引，通过关键词搜索即可定位到音视频的时间戳，绝对是杀手级功能。

## 最后

今年是 AI 工具的爆发年，多个领域都出现优质的开源工具，极大地提升了我的生活、学习和工作效率。

在遇到 Whisper 前，我用 YouTube 的实时字幕看在线视频，但它是通过语言实时转录而非整句转录，导致效果远差于 Whisper。我使用飞书妙记管理本地视频，但飞书只支持中日英语，机器翻译较死板。Whisper 解决了两者存在的问题，转录效果更好，支持语言更多。此外，Whisper 是语言直译，所以你对字幕语言有基础认知的话，可以将语言与翻译文本匹配，可以进行语音学习。更重要的是，Whisper 是本地端应用，**没有任何在线审查**。

然而，与 Whisper 完美的英语转录效果相比，其对非英语视频的转录还有很大的提升空间，期待它的后续更新，也希望字幕组都使用上 Whisper，节省字幕转录时间，加快出片速度。

本文于「[少数派首发](https://sspai.com/post/76899)」。
