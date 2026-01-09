// live2d_path 参数建议使用绝对路径
//const live2d_path = "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";
const live2d_path = "/live2d-widget/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]).then(() => {
		// 配置选项的具体用法见 README.md
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			// apiPath: "https://live2d.fghrsh.net/api/",
			// cdnPath: "https://live2d-api.aishort.top/",
			// apiPath 和 cdnPath 二选一。API 部署复杂，不过性能更佳，能设定模型，切换衣服方便。
			// 在这里，我们默认使用本地 cdn。如果你选择自建 api，需注释掉 cdnPath。如果需要第三方的 cdnpath，可考虑使用 Vercel + Cloudflare。
			cdnPath: live2d_path + "live2d_api/",
			tools: ["hitokoto", "asteroids", "switch-model", "switch-texture", "photo", "info", "quit"]
		});
	});
}
// initWidget 第一个参数为 waifu-tips.json 的路径，第二个参数为 API 地址
// API 后端可自行搭建，参考 https://github.com/fghrsh/live2d_api
// 初始化看板娘会自动加载指定目录下的 waifu-tips.json

console.log(`
  く__,.ヘヽ。       /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  i  L_ ﾊ ヽ！i
        ﾚ ﾍ 7 ｲ｀ﾄ   ﾚ'ｧ - ﾄ､! ハ |   |
          !,/7 '0'     ´0i ソ |    |
          |。从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_7_/ﾚ'ヽ,  ﾊ。 |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  i：ﾍ！   ＼  |
              k ヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀T´', ＼ ｀'7'ｰr'
              ﾚ'ヽ L__|___i,___，ンﾚ | ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);
