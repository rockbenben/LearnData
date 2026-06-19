/*!
 * Live2D Widget
 * https://github.com/stevenjoezhang/live2d-widget
 */

// 本文件所在目录 = 代码资源目录（带版本号，内容不可变可长期缓存）。
// 升级看板娘时：把新代码放进新版本目录（如 v20260720/），只需改 templateBuild.html 里
// 引用 autoload.js 的目录名这一处，下面的路径会自动跟随。模型 live2d_api 在上一级、固定不动。
const _self = document.currentScript.src;
const live2d_path = new URL("./", _self).href; // 代码目录（本目录）
const api_path = new URL("../live2d_api/", _self).href; // 模型目录（固定，不随版本变）

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag;

    if (type === "css") {
      tag = document.createElement("link");
      tag.rel = "stylesheet";
      tag.href = url;
    } else if (type === "js") {
      tag = document.createElement("script");
      // 1.0 起 waifu-tips.js 是 ES Module（内部用 import() 动态加载 cubism2/cubism5）
      tag.type = "module";
      tag.src = url;
    }
    if (tag) {
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
      document.head.appendChild(tag);
    }
  });
}

(async () => {
  // 手机上不显示看板娘（保持升级前的行为）
  if (screen.width < 768) return;

  // 避免模型贴图资源跨域问题
  const OriginalImage = window.Image;
  window.Image = function (...args) {
    const img = new OriginalImage(...args);
    img.crossOrigin = "anonymous";
    return img;
  };
  window.Image.prototype = OriginalImage.prototype;

  // 加载 waifu.css 和 waifu-tips.js（与本文件同目录）
  await Promise.all([loadExternalResource(live2d_path + "waifu.css", "css"), loadExternalResource(live2d_path + "waifu-tips.js", "js")]);

  // 配置选项的具体用法见 README.md
  initWidget({
    waifuPath: live2d_path + "waifu-tips.json",
    // 模型走本站自托管的静态目录（fghrsh/live2d_api 结构），固定路径、不随代码版本变
    cdnPath: api_path,
    // Cubism 2 Core（自托管，加载老的 .moc 模型）
    cubism2Path: live2d_path + "live2d.min.js",
    // Cubism 5 Core（仅在加载 .moc3 模型时才会用到，目前本站模型均为 Cubism 2）
    cubism5Path: "https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js",
    // 默认看板娘模型 id（对应 live2d_api/model_list.json 的索引）
    // 4 = ShizukuTalk 组；配合 waifu-tips.js 的材质补丁(=1) → shizuku-pajama
    modelId: 4,
    tools: ["hitokoto", "asteroids", "switch-model", "switch-texture", "photo", "info", "quit"],
    logLevel: "warn",
    drag: false,
  });
})();

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
