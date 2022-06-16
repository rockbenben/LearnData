# WordPress 主题修改

WordPress 禁用文章修订及自动保存功能，需修改 WordPress 配置文件 wp-config php。

```php
/** 禁用文章修订功能 */
define('WP_POST_REVISIONS', false);
/** 禁用自动保存功能 */
define('AUTOSAVE_INTERVAL', false);
```

数据库删除先前产生的修订记录：`DELETE FROM wp_posts WHERE post_type = "revision";`。

进入`外观－主题编辑器`，修改主题相关设置。

```bash
#主题页脚－删除主题说明
Design by <a href="https://www.xxx.cn" target="_blank"><strong>xx</strong></a>

#timthumb.php，添加图床、cdn等设置
将域名添加到主题根目录timthumb.php文件的第130行下面
```
