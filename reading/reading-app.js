// === 主题切换 ===
function toggleReadingTheme() {
  const html = document.documentElement;
  const cur = html.getAttribute("data-theme") || "light";
  const next = cur === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("reading-theme", next);
  updateThemeIcon();
}
// 按钮图标随主题切换：light 下显月（提示"切到 dark"），dark 下显日
function updateThemeIcon() {
  const btn = document.querySelector(".theme-toggle");
  if (!btn) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  btn.innerHTML = isDark
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
  const label = isDark ? "切换到日间" : "切换到夜间";
  btn.setAttribute("aria-label", label);
  btn.setAttribute("title", label);
}
// DOM 就绪后初始化一次（与 head 脚本初始化的 data-theme 同步）
document.addEventListener("DOMContentLoaded", updateThemeIcon);

// === Drawer 触发 ===
// sidebar drawer 触发：必须 stopImmediatePropagation，因为 docsify 会给所有 .sidebar-toggle
// 按钮再注册一个 click 监听器，桌面缩窄时它会 remove('close')，把我们刚 toggle 上的状态立刻抹掉
function toggleSidebar(e) {
  e?.stopImmediatePropagation();
  const narrow = window.matchMedia("(max-width: 1180px)").matches;
  // 窄屏互斥：开侧栏抽屉前先关 TOC 抽屉，避免两个 overlay 叠在一起
  // （宽屏 body.close 语义是"折叠侧栏"、与 TOC 无关，故仅窄屏处理）
  if (narrow && !document.body.classList.contains("close")) closeDrawer("toc");
  const open = document.body.classList.toggle("close");
  syncAria(".sidebar-toggle", open);
  // 仅窄屏 drawer 模式才管焦点；宽屏 body.close 是"折叠侧栏"，没必要 trap
  if (narrow) {
    if (open) trapFocusIn(document.querySelector("aside.sidebar"));
    else releaseFocus();
  }
}
function toggleTocDrawer(e) {
  e?.stopPropagation();
  // 互斥：开 TOC 抽屉前先关侧栏抽屉（TOC 抽屉仅窄屏出现）
  if (window.matchMedia("(max-width: 1180px)").matches && !document.body.classList.contains("toc-open")) closeDrawer("sidebar");
  const open = document.body.classList.toggle("toc-open");
  syncAria(".toc-toggle", open);
  if (open) trapFocusIn(document.querySelector("section.content > nav.page_toc, section.content > .page_toc"));
  else releaseFocus();
}
function syncAria(selector, open) {
  document.querySelectorAll(selector).forEach((btn) => {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// === 焦点管理 ===
// drawer 打开时把焦点移到 drawer 内首个可聚焦元素，关闭时还回触发按钮
let lastFocusedBeforeDrawer = null;
function trapFocusIn(container) {
  if (!container) return;
  lastFocusedBeforeDrawer = document.activeElement;
  const first = container.querySelector('a, button, input, [tabindex]:not([tabindex="-1"])');
  first?.focus();
}
function releaseFocus() {
  lastFocusedBeforeDrawer?.focus?.();
  lastFocusedBeforeDrawer = null;
}

// === 键盘 ===
// Tab 在 drawer 内循环（仅窄屏 trap）+ Escape 关 drawer
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDrawer("toc");
    closeDrawer("sidebar");
    return;
  }
  if (e.key !== "Tab") return;
  if (!window.matchMedia("(max-width: 1180px)").matches) return;
  const body = document.body;
  const drawer = body.classList.contains("close")
    ? document.querySelector("aside.sidebar")
    : body.classList.contains("toc-open")
    ? document.querySelector("section.content > nav.page_toc, section.content > .page_toc")
    : null;
  if (!drawer) return;
  const focusables = [...drawer.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])')];
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

// === 跨断点状态清理 ===
// body.close 在宽/窄屏语义相反，用户跨越断点时残留态会自动展/收 drawer，反直觉
window.matchMedia("(min-width: 1181px)").addEventListener("change", () => {
  document.body.classList.remove("close", "toc-open");
  syncAria(".sidebar-toggle", false);
  syncAria(".toc-toggle", false);
  releaseFocus();
});

// === 回到顶部 ===
function scrollToTop(e) {
  e?.preventDefault();
  // 窄屏 body.close 是"drawer 唤起"，body 会被锁滚动，必须先关 drawer 再滚（否则视觉无动作）。
  // 宽屏 body.close 是"用户折叠侧栏"——点回顶部不应连带把折叠状态打回，所以不动它。
  if (window.matchMedia("(max-width: 1180px)").matches) {
    closeDrawer("toc");
    closeDrawer("sidebar");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// 懒缓存按钮 ref，避免每个 scroll event 都查 DOM
let backToTopBtn = null;
window.addEventListener(
  "scroll",
  () => {
    backToTopBtn ??= document.querySelector(".back-to-top");
    backToTopBtn?.classList.toggle("visible", window.scrollY > 600);
  },
  { passive: true }
);

// === Drawer 自动关闭 ===
// 点链接 / 点遮罩或 drawer 外区域 / 按 ESC 都收起
// 注意：必须 releaseFocus()，否则焦点滞留在已隐藏 drawer 内部，键盘用户失去定位
function closeDrawer(name) {
  const cls = name === "toc" ? "toc-open" : "close";
  const sel = name === "toc" ? ".toc-toggle" : ".sidebar-toggle";
  if (document.body.classList.contains(cls)) {
    document.body.classList.remove(cls);
    syncAria(sel, false);
    releaseFocus();
  }
}
document.addEventListener("click", (e) => {
  const body = document.body;
  const tocOpen = body.classList.contains("toc-open");
  const sideOpen = body.classList.contains("close");
  if (!tocOpen && !sideOpen) return;
  // 点 TOC 链接：跳完关 TOC
  if (tocOpen && e.target.closest('nav.page_toc a, .page_toc a, [class*="page_toc"] a')) {
    closeDrawer("toc");
    return;
  }
  // 点 sidebar 链接：docsify 默认会处理，但路由切换时也兜底关一下
  if (sideOpen && e.target.closest("aside.sidebar a")) {
    closeDrawer("sidebar");
  }
  // 点 drawer / 触发按钮以外（含遮罩 ::after）：关
  const inToc = e.target.closest('nav.page_toc, .page_toc, [class*="page_toc"], .toc-toggle');
  const inSide = e.target.closest("aside.sidebar, .sidebar-toggle");
  if (tocOpen && !inToc) closeDrawer("toc");
  if (sideOpen && !inSide) closeDrawer("sidebar");
});

// === 网站运行时间 ===
// footer #sitetime 元素由 docsify plugin 异步注入；setInterval 等到它出现
(() => {
  const startTime = Date.UTC(2022, 7, 23, 22, 22, 22);
  const MS = { s: 1000, m: 60000, h: 3600000, d: 86400000, y: 31536000000 };
  const updateSiteTime = () => {
    const diff = Date.now() - startTime;
    const y = Math.floor(diff / MS.y);
    const d = Math.floor((diff % MS.y) / MS.d);
    const h = Math.floor((diff % MS.d) / MS.h);
    const m = Math.floor((diff % MS.h) / MS.m);
    const s = Math.floor((diff % MS.m) / MS.s);
    const el = document.getElementById("sitetime");
    if (el) el.textContent = y > 0 ? `已运行 ${y} 年 ${d} 天 ${h} 小时 ${m} 分 ${s} 秒` : `已运行 ${d} 天 ${h} 小时 ${m} 分 ${s} 秒`;
  };
  updateSiteTime();
  setInterval(updateSiteTime, 1000);
})();
