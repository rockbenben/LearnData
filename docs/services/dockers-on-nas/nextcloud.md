---
article: false
title: Nextcloud：私有云盘
order: 22
---

[Nextcloud](https://github.com/nextcloud/docker) 是一款开源的云存储和协作平台。Nextcloud 不仅可以让你创建文件共享、在线编辑和备份等功能，还支持多用户协作、通讯录、日历等功能，可以完全替代你的 Google Drive 或 Dropbox 等云存储服务。

虽然 Nextcloud 内置了 Office 功能，但对中文支持有限，建议使用 Onlyoffice。Onlyoffice 是一个基于 Web 的办公套件，可以帮助你创建和编辑文字、电子表格和幻灯片等文档，实现文档的在线协作、版本控制和在线编辑等功能。这种集成方式将大大提高你的工作效率和协作能力。

## 公网访问 Nextcloud

若在公网中使用 Nextcloud，需在 `docker/nextcloud/data/config/config.php` 文件中的 `trusted_domains` 部分添加你的公网域名，例如 `1 => 'xxx.newzone.top'`。

即使你的反向代理域名带有端口，也请勿在 `trusted_domains` 中包含端口信息，否则可能会出现「通过不被信任的域名访问」的提示。在使用带有端口的公网域名时，站点在未登录和成功登录时可能会在跳转时省略端口信息。这时，手动添加端口信息即可正常使用。

## ONLYOFFICE

[ONLYOFFICE](https://helpcenter.onlyoffice.com/installation/docs-community-install-docker.aspx) Document Server 是一套提供在线编辑 Office 文档服务的套件。通过使用该套件及相应的 Nextcloud 插件，你可以在 Nextcloud 上进行在线编辑 Office 文档的操作，并正确识别中文内容。

完成部署后，ONLYOFFICE 会生成一段代码，将其输入到服务器即可获取秘钥。将秘钥填写到「管理设置」>「ONLYOFFICE」中。请注意，重新启动 NAS 和 Docker 容器可能会导致秘钥更换。

![](https://img.newzone.top/2023-11-11-13-51-31.png?imageMogr2/format/webp)

## Nextcloud Office 中文乱码

Nextcloud Office 无法正常显示文档中的中文，而只显示方格子。关于此问题的解决方案可在[这篇教程](https://blog.csdn.net/skydust1979/article/details/106280811)中找到。教程建议修改 `/volume1/docker/nextcloud/data/lib/public/AppFramework/Http/FileDisplayResponse.php` 文件，注释掉第 67 行，并添加以下内容。然而，我测试后发现此方法并不起作用。

```php
//$output->setOutput($this->file->getContent());
$fileContents=$this->file->getContent();
$encoding = mb_detect_encoding($fileContents . "a", "UTF-8,GB2312, GBK, WINDOWS-1252, ISO-8859-15, ISO-8859-1, ASCII", true);
if ($encoding === "") {
    $encoding = "ISO-8859-15";
}
$fileContents = iconv($encoding, "UTF-8", $fileContents);
$output->setOutput($fileContents);
```

## 部署命令

以下是集成了 ONLYOFFICE 的 Nextcloud 部署命令：

```yml
version: "2"

services:
  nextcloud_db:
    image: mariadb:10.6
    container_name: nextcloud_db
    restart: always
    command: --transaction-isolation=READ-COMMITTED --log-bin=binlog --binlog-format=ROW
    volumes:
      - /volume1/docker/nextcloud/mysql:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=nextcloud
      - MYSQL_PASSWORD=nextcloud
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud

  nextcloud_app:
    image: nextcloud
    container_name: nextcloud
    restart: always
    ports:
      - 9030:80
    links:
      - nextcloud_db
    volumes:
      - /volume1/docker/nextcloud/data:/var/www/html
      - /volume1/sync:/sync #外部存储目录
    environment:
      - MYSQL_PASSWORD=nextcloud
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
      - MYSQL_HOST=nextcloud_db

  onlyoffice:
    image: onlyoffice/documentserver
    container_name: onlyoffice
    restart: always
    ports:
      - 9031:80
    volumes:
      - /volume1/docker/nextcloud/onlyoffice/data:/var/www/onlyoffice/Data
      - /volume1/docker/nextcloud/onlyoffice/logs:/var/log/onlyoffice
```

## 外部存储

有时你的文档在其他位置，可以在应用中添加插件 External storage support，这样可以直接编辑 FTP、WebDAV、Nextcloud、SFTP、Amazone S3 或其他对象存储等外部文件。

安装插件后，进入「管理」>「外部存储」设置目录。
