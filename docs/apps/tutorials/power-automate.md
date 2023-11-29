---
article: false
title: Power Automate
order: 3
---

[Power Automate](https://sspai.com/series/273/list) 自动化应用，分为桌面流和[云端流](https://make.powerautomate.com/)，上手比 Quikcer 复杂，网页自动化弱于 UI. Vision RPA，适合在 Window 不同应用间切换的自动化流。**对于免费用户来说，Power Automate 都得手动执行流，个人账户与组织账户无明显区别。** 自动化操作也可以使用 Logi Options+ 的 Smart Actions。

Automa 因为有可视化界面，所以最近很多，但在我看来它的功能太弱。

**桌面流**本身并没有触发器，因此只能手动执行。付费的组织账户可以自动执行桌面流，比如：云端流调用桌面流，[通过 URL 运行桌面流](https://docs.microsoft.com/zh-cn/power-automate/desktop-flows/run-pad-flow#run-desktop-flows-via-url)。Power Automate 安装有商店版和 [exe 应用](https://learn.microsoft.com/en-us/power-automate/desktop-flows/install)两种方式，各自有些 Bug。

**云端流**可以自动、即时或通过计划触发自动化。登录云端流时，一开始要求用工作账户登录，但后来我开通了 [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software)，就可以用个人账户，暂不清楚是否有因果关系。^[[注册免费 Teams 经典](https://support.microsoft.com/zh-cn/office/%E6%B3%A8%E5%86%8C%E5%85%8D%E8%B4%B9teams%E7%BB%8F%E5%85%B8-70aaf044-b872-4c32-ac47-362ab29ebbb1)]

与个人账户相比，组织账户仅仅多了一些按钮和试用提示，并没有明显区别。简单来说，组织账户有付费的权利，其他功能都相同。

### 使用技巧

- 遇到捕获了元素但执行时却报错的情况，可以尝试自带的记录器。它比手动选择元素要死板，钉死了要点击的元素，但能确保执行成功率。

- 使用「循环」和「等待」实现半自动执行工作流。如果某些条件并不清晰，可通过第三方网页来设置条件，如特殊网页设置的特殊文本。^[[Power Automate Desktop 免费 RPA 实现定时启动或按照频率运行自动化流的三种办法](https://www.bilibili.com/video/BV1ki4y1S7AZ/?vd_source=9ab57d83a938c90a4fc9691b299cb2af)]

### 报错重置

如果遇到程序自身的报错，点击「设置」>「应用」>「应用和功能」中找到 Power Automate Desktop 应用，并点击「重置」后试试看。

### 创建 Microsoft 组织账户

微软的众多服务都需要组织账户，个人账号经常被拒绝登录。而创建微软组织账户最简单的方法是注册为[微软合作伙伴](https://partner.microsoft.com/zh-cn/)。

1. [加入 Microsoft 合作伙伴网络](https://partner.microsoft.com/zh-cn/membership)。
2. 进入后会问「你希望如何与 Microsoft 合作」，安全起见我选择「合作伙伴」，进入下一页后点「创作工作账户」。
3. 账户信息除手机和备用邮件外可以随便填，通过手机验证码后，点「继续」，然后等几分钟，就会收到注册成功通知，你也成为有组织的人了。

如果你有 Azure 账户，可以直接在 Azure 中[为组织创建新的租户](https://docs.microsoft.com/zh-cn/azure/active-directory/fundamentals/active-directory-access-create-new-tenant#create-a-new-tenant-for-your-organization)。

### 管理组织用户

若要给其他人多添加几个账号，则可以通过 [Azure](https://portal.azure.com/) 来管理。

进入「管理 Azure Active Directory」>「用户」，添加和管理组织用户。
