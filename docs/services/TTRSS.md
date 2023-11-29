---
article: false
title: Tiny Tiny RSS
icon: rss
order: 4
---

Tiny Tiny RSS 推荐用 [Awesome TTRSS](http://ttrss.henry.wang/zh/) 的 Docker 镜像，搭建步骤参考 [NAS 上搭建 Docker](../services/NAS.html#nas-docker)。Awesome TTRSS 镜像不含插件「no_title_counters」，这使 TTRSS 网页标题会显示未读 RSS 数量。

- 主题：[feedly-sepia.css](https://github.com/levito/tt-rss-feedly-theme)
- 常见问题：[Tiny Tiny RSS – FAQ](https://tt-rss.org/wiki/FAQ)
- 定期备份：选择「偏好设置」>「订阅源」导出订阅源和 tt-rss 设置。
- 移动端：[Tiny Tiny RSS for Android](https://gitlab.tt-rss.org/tt-rss/tt-rss-android/-/releases)。由于 Google Play 的验证折腾，作者已经放弃在 Play 上更新本应用，改为通过 CI/CD 自动构建并取消了应用收费。

## 手动部署

虽然 Tiny Tiny RSS 官方建议使用 Docker 部署，但手动部署也很简单，选择适合自己的方式即可。

1. 进入指定目录 `cd /www/wwwroot/`。
2. 新建 rss 目录，并下载最新 tt-rss `git clone https://git.tt-rss.org/fox/tt-rss.git rss`。
3. 打开 rss 链接，页面会出现指定要求，如：提升文件权限，删除禁用函数 passthru，安装 php 扩展-fileinfo。配置好后，重新加载 php 配置。

部署完成后，需要让 TTRSS 定期更新 RSS，步骤参考 [Tiny Tiny RSS – Updating Feeds](https://tt-rss.org/wiki/UpdatingFeeds)。如果遇到提示 daemon 未启动，可删除 `lock/update_daemon.lock`和`update_daemon.stamp`。

阿里云[用非 root 账户登录远程 vnc](https://www.cnblogs.com/imyalost/p/9801426.html)，然后启动 RSS 更新 (默认 2 分钟)。远程 vnc 黑屏时，点左上角「发送远程命令」，点击菜单栏或「关机后重新启动」后不再黑屏。不用直接重启，否则报错。

- 指定 PHP 版本来运行：`/www/server/php/74/bin/php /www/wwwroot/rss/update.php --daemon`。
- 不指定版本运行：`php /www/wwwroot/rss/update.php --daemon`。

服务器使用定时任务更新 TTRSS：

```bash
crontab -e #进入 Cpanel 面板添加定时任务
*/15 * * * * /usr/bin/php /www/wwwroot/rss/update.php --feeds --quiet #只安装了一个php
*/15 * * * * /www/server/php/74/bin/php /www/wwwroot/rss/update.php --feeds --quiet #安装了多个php
# 同时按下ctrl+c退出编辑模式，按下shift+: 输入wq 退出 crontab
*/15 * * * *表示每隔15分钟更新一次，你可以自己改成其它的。
```

服务器或 nginx 重启后，TTRss 会出现文件夹权限丢失，需重新设置权限。建议将此步骤设为定期任务自动执行。

```bash
chmod -R 777 /www/wwwroot/rss/cache/images
chmod -R 777 /www/wwwroot/rss/cache/upload
chmod -R 777 /www/wwwroot/rss/cache/export
chmod -R 777 /www/wwwroot/rss/feed-icons
chmod -R 777 /www/wwwroot/rss/lock
```

升级 Tiny Tiny RSS：进行 TTRSS 目录后执行升级命令 `git pull origin master`。无法升级时重命名 TTRSS 路径，全新下载后没问题再删除。数据库没变化就没事，主题重新安装。

## 重置密码

如果在 Docker 容器中忘记了 ttrss 的登录密码，可使用 SSH 终端并输入以下命令，将 admin 账户的密码重置为 `password`。

```bash
sudo docker exec -it ttrss_postgres psql -U postgres -d ttrss -c "UPDATE ttrss_users SET pwd_hash = 'SHA1:5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', salt = '', otp_enabled = false WHERE login = 'admin';"
```

请确保替换 `ttrss_postgres` 为 ttrss 数据库容器的实际名称，而 `admin` 则为欲重置密码的账户名称。
