module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/components/site-chrome.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteFooter",
    ()=>SiteFooter,
    "SiteHeader",
    ()=>SiteHeader,
    "StickyMobileCta",
    ()=>StickyMobileCta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const nav = [
    {
        href: "/services",
        label: "Services"
    },
    {
        href: "/locations",
        label: "Cities"
    },
    {
        href: `/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}`,
        label: "Commercial"
    }
];
function SiteHeader() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-surface-container-lowest px-4 lg:px-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-10 max-w-7xl mx-auto flex items-center justify-between font-mono text-[10px] font-semibold tracking-widest uppercase",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5 text-error shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-error animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-chrome.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        "24/7 dispatch"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden md:inline text-outline-variant",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden md:inline text-secondary",
                                    children: "Red Seal · Master Electricians"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-chrome.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_E164"]}`,
                            className: "text-primary shrink-0 hover:text-primary-container transition-colors",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]
                        }, void 0, false, {
                            fileName: "[project]/components/site-chrome.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site-chrome.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/site-chrome.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-surface/85 backdrop-blur-xl border-b border-white/8 px-4 lg:px-16 shadow-[0_1px_8px_rgba(0,0,0,0.4)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[4.5rem] max-w-7xl mx-auto flex items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3",
                            onClick: ()=>setOpen(false),
                            "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_NAME"]} home`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-9 h-9 rounded-lg bg-primary-container/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm",
                                    children: "CE"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold uppercase tracking-tight text-on-surface",
                                            children: "Canada Electrical"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-chrome.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[10px] text-primary tracking-widest uppercase",
                                            children: "Pros"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-chrome.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-chrome.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: `${open ? "flex" : "hidden"} xl:flex absolute xl:relative top-[7.25rem] xl:top-auto left-0 right-0 xl:left-auto xl:right-auto flex-col xl:flex-row gap-1 p-4 xl:p-0 bg-surface-container-low xl:bg-transparent border-b xl:border-0 border-white/8`,
                            "aria-label": "Main",
                            children: nav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: ()=>setOpen(false),
                                    className: `px-3 py-2 rounded-lg font-mono text-xs tracking-wide transition-colors ${pathname === item.href ? "bg-surface-container-high text-primary font-semibold" : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"}`,
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/site-chrome.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_E164"]}`,
                                    className: "hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary-container font-mono text-xs font-semibold tracking-wide shadow-[0_0_24px_-4px_rgba(245,158,11,0.25)] transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-error animate-ping"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-chrome.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        "Call now"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "xl:hidden px-3 py-2 rounded-lg bg-surface-container-high text-on-surface font-mono text-xs",
                                    "aria-label": "Menu",
                                    "aria-expanded": open,
                                    onClick: ()=>setOpen(!open),
                                    children: "Menu"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-chrome.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site-chrome.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/site-chrome.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site-chrome.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function SiteFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full bg-surface-container-lowest text-on-surface-variant mt-16 border-t border-white/6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 lg:px-16 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-on-surface font-bold uppercase text-sm mb-2",
                                    children: "Canada Electrical Pros"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed max-w-xs",
                                    children: "Licensed commercial and residential electricians—panels, EV infrastructure, lighting, and code-compliant repairs coast to coast."
                                }, void 0, false, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-chrome.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-[10px] uppercase tracking-widest text-on-surface mb-3",
                                    children: "Navigate"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services",
                                            className: "hover:text-secondary",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-chrome.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/locations",
                                            className: "hover:text-secondary",
                                            children: "Cities"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-chrome.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}`,
                                            className: "hover:text-secondary",
                                            children: "Commercial electrician"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-chrome.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-chrome.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-[10px] uppercase tracking-widest text-on-surface mb-3",
                                    children: "Credentials"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "Red Seal · ESA · CSA Z462"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-chrome.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-[10px] uppercase tracking-widest text-error mb-2",
                                    children: "24/7 dispatch"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_E164"]}`,
                                    className: "text-on-surface font-mono text-lg font-semibold hover:text-primary",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]
                                }, void 0, false, {
                                    fileName: "[project]/components/site-chrome.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-chrome.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site-chrome.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-10 pt-6 border-t border-white/6 text-xs font-mono",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_NAME"]
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site-chrome.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/site-chrome.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site-chrome.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
function StickyMobileCta() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mobile-dial",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_E164"]}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mobile-dial__pulse",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/components/site-chrome.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                "Call ",
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]
            ]
        }, void 0, true, {
            fileName: "[project]/components/site-chrome.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site-chrome.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/pages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CITY_PAGES",
    ()=>CITY_PAGES,
    "NATIONAL_PAGES",
    ()=>NATIONAL_PAGES,
    "PAGES",
    ()=>PAGES,
    "PHONE_DISPLAY",
    ()=>PHONE_DISPLAY,
    "PHONE_E164",
    ()=>PHONE_E164,
    "PILLAR_SLUG",
    ()=>PILLAR_SLUG,
    "SITE_NAME",
    ()=>SITE_NAME,
    "absoluteUrl",
    ()=>absoluteUrl,
    "cleanTitle",
    ()=>cleanTitle,
    "getPage",
    ()=>getPage,
    "locationName",
    ()=>locationName,
    "serviceBaseSlug",
    ()=>serviceBaseSlug
]);
const row = (id, title, slug, keyword, secondary, area = "Canada", priority = "Medium", kind = "city", volume)=>({
        id,
        title,
        slug,
        keyword,
        secondary: secondary ? secondary.split(/[|;]/).map((s)=>s.trim()).filter(Boolean) : [],
        area,
        priority,
        kind,
        volume
    });
const PILLAR_SLUG = "commercial-electrician";
const PAGES = [
    row(1, "Commercial Electrician Canada | Call Now", "commercial-electrician", "commercial electrician", "commercial electrician near me; commercial electrical services; commercial electrical contractors; commercial electrical company", "Canada (National)", "Top Priority", "national", 1100),
    row(2, "Commercial Electrical Installation Canada | Call Now", "commercial-electrical-installation", "commercial electrical installation", "", "Canada (National)", "Medium", "national", 50),
    row(3, "Commercial Electrical Repairs Canada | Call Now", "commercial-electrical-repairs", "commercial electrical repairs", "", "Canada (National)", "Medium", "national", 50),
    row(4, "EV Charger Installation Canada | Call Now", "ev-charger-installation", "ev charger installation", "level 2 charger installation", "Canada (National)", "Top Priority", "national", 1700),
    row(5, "Home EV Charger Installation Canada | Call Now", "home-ev-charger-installation", "home ev charger installation", "", "Canada (National)", "High", "national", 150),
    row(6, "Commercial EV Charger Installation Canada | Call Now", "commercial-ev-charger-installation", "commercial ev charger installation", "", "Canada (National)", "High", "national", 150),
    row(7, "Commercial Lighting Installation Canada | Call Now", "commercial-lighting-installation", "commercial lighting installation", "", "Canada (National)", "High", "national", 90),
    row(8, "Emergency Lighting Installation Canada | Call Now", "emergency-lighting-installation", "emergency lighting installation", "", "Canada (National)", "Medium", "national", 60),
    row(9, "Pot Light Installation Canada | Call Now", "pot-light-installation", "pot light installation", "recessed lighting installation", "Canada (National)", "Top Priority", "national", 400),
    row(10, "Landscape Lighting Installation Canada | Call Now", "landscape-lighting-installation", "landscape lighting installation", "outdoor lighting installation", "Canada (National)", "Top Priority", "national", 350),
    row(11, "Residential Electrician Canada | Call Now", "residential-electrician", "residential electrician near me", "home electrician; residential electrical contractors", "Canada (National)", "Top Priority", "national", 1300),
    row(12, "Home Electrical Repair Canada | Call Now", "home-electrical-repair", "home electrical repair", "", "Canada (National)", "Top Priority", "national", 300),
    row(13, "Home Electrical Wiring Canada | Call Now", "home-electrical-wiring", "home electrical wiring", "", "Canada (National)", "High", "national", 150),
    row(14, "Hot Tub Electrical Installation Canada | Call Now", "hot-tub-electrical-installation", "hot tub electrical installation", "", "Canada (National)", "Top Priority", "national", 200),
    row(15, "Knob and Tube Wiring Replacement Canada | Call Now", "knob-and-tube-wiring-replacement", "knob and tube wiring replacement", "", "Canada (National)", "High", "national", 100),
    row(16, "Electrical Panel Upgrade Canada | Call Now", "electrical-panel-upgrade", "electrical panel upgrade", "", "Canada (National)", "Top Priority", "national", 1000),
    row(17, "200 Amp Panel Upgrade Canada | Call Now", "200-amp-panel-upgrade", "200 amp panel upgrade", "", "Canada (National)", "High", "national", 100),
    row(18, "Electrical Panel Replacement Canada | Call Now", "electrical-panel-replacement", "electrical panel replacement", "", "Canada (National)", "Top Priority", "national", 250),
    row(19, "Electrical Panel Repair Canada | Call Now", "electrical-panel-repair", "electrical panel repair", "", "Canada (National)", "High", "national", 100),
    row(20, "Fuse Box Replacement Canada | Call Now", "fuse-box-replacement", "fuse box replacement", "", "Canada (National)", "Medium", "national", 50),
    row(21, "Circuit Breaker Repair Canada | Call Now", "circuit-breaker-repair", "circuit breaker repair", "", "Canada (National)", "High", "national", 100),
    row(22, "Circuit Breaker Replacement Canada | Call Now", "circuit-breaker-replacement", "circuit breaker replacement", "", "Canada (National)", "High", "national", 90),
    row(23, "Electrical Outlet Installation Canada | Call Now", "electrical-outlet-installation", "electrical outlet installation", "", "Canada (National)", "Top Priority", "national", 200),
    row(24, "Electrical Outlet Repair Canada | Call Now", "electrical-outlet-repair", "electrical outlet repair", "", "Canada (National)", "Medium", "national", 30),
    row(25, "Commercial Electrician Calgary | Call Now", "commercial-electrician-calgary", "commercial electrician", "", "Calgary", "Medium", "city"),
    row(26, "Commercial Electrical Installation Calgary | Call Now", "commercial-electrical-installation-calgary", "commercial electrical installation", "", "Calgary", "Medium", "city"),
    row(27, "Commercial Electrical Repairs Calgary | Call Now", "commercial-electrical-repairs-calgary", "commercial electrical repairs", "", "Calgary", "Medium", "city"),
    row(28, "EV Charger Installation Calgary | Call Now", "ev-charger-installation-calgary", "ev charger installation", "", "Calgary", "Medium", "city"),
    row(29, "Home EV Charger Installation Calgary | Call Now", "home-ev-charger-installation-calgary", "home ev charger installation", "", "Calgary", "Medium", "city"),
    row(30, "Commercial EV Charger Installation Calgary | Call Now", "commercial-ev-charger-installation-calgary", "commercial ev charger installation", "", "Calgary", "Medium", "city"),
    row(31, "Commercial Lighting Installation Calgary | Call Now", "commercial-lighting-installation-calgary", "commercial lighting installation", "", "Calgary", "Medium", "city"),
    row(32, "Emergency Lighting Installation Calgary | Call Now", "emergency-lighting-installation-calgary", "emergency lighting installation", "", "Calgary", "Medium", "city"),
    row(33, "Pot Light Installation Calgary | Call Now", "pot-light-installation-calgary", "pot light installation", "", "Calgary", "Medium", "city"),
    row(34, "Landscape Lighting Installation Calgary | Call Now", "landscape-lighting-installation-calgary", "landscape lighting installation", "", "Calgary", "Medium", "city"),
    row(35, "Residential Electrician Calgary | Call Now", "residential-electrician-calgary", "residential electrician near me", "", "Calgary", "Medium", "city"),
    row(36, "Home Electrical Repair Calgary | Call Now", "home-electrical-repair-calgary", "home electrical repair", "", "Calgary", "Medium", "city"),
    row(37, "Home Electrical Wiring Calgary | Call Now", "home-electrical-wiring-calgary", "home electrical wiring", "", "Calgary", "Medium", "city"),
    row(38, "Hot Tub Electrical Installation Calgary | Call Now", "hot-tub-electrical-installation-calgary", "hot tub electrical installation", "", "Calgary", "Medium", "city"),
    row(39, "Knob and Tube Wiring Replacement Calgary | Call Now", "knob-and-tube-wiring-replacement-calgary", "knob and tube wiring replacement", "", "Calgary", "Medium", "city"),
    row(40, "Electrical Panel Upgrade Calgary | Call Now", "electrical-panel-upgrade-calgary", "electrical panel upgrade", "", "Calgary", "Medium", "city"),
    row(41, "200 Amp Panel Upgrade Calgary | Call Now", "200-amp-panel-upgrade-calgary", "200 amp panel upgrade", "", "Calgary", "Medium", "city"),
    row(42, "Electrical Panel Replacement Calgary | Call Now", "electrical-panel-replacement-calgary", "electrical panel replacement", "", "Calgary", "Medium", "city"),
    row(43, "Electrical Panel Repair Calgary | Call Now", "electrical-panel-repair-calgary", "electrical panel repair", "", "Calgary", "Medium", "city"),
    row(44, "Fuse Box Replacement Calgary | Call Now", "fuse-box-replacement-calgary", "fuse box replacement", "", "Calgary", "Medium", "city"),
    row(45, "Circuit Breaker Repair Calgary | Call Now", "circuit-breaker-repair-calgary", "circuit breaker repair", "", "Calgary", "Medium", "city"),
    row(46, "Circuit Breaker Replacement Calgary | Call Now", "circuit-breaker-replacement-calgary", "circuit breaker replacement", "", "Calgary", "Medium", "city"),
    row(47, "Electrical Outlet Installation Calgary | Call Now", "electrical-outlet-installation-calgary", "electrical outlet installation", "", "Calgary", "Medium", "city"),
    row(48, "Electrical Outlet Repair Calgary | Call Now", "electrical-outlet-repair-calgary", "electrical outlet repair", "", "Calgary", "Medium", "city"),
    row(49, "Commercial Electrician Winnipeg | Call Now", "commercial-electrician-winnipeg", "commercial electrician", "", "Winnipeg", "Medium", "city"),
    row(50, "Commercial Electrical Installation Winnipeg | Call Now", "commercial-electrical-installation-winnipeg", "commercial electrical installation", "", "Winnipeg", "Medium", "city"),
    row(51, "Commercial Electrical Repairs Winnipeg | Call Now", "commercial-electrical-repairs-winnipeg", "commercial electrical repairs", "", "Winnipeg", "Medium", "city"),
    row(52, "EV Charger Installation Winnipeg | Call Now", "ev-charger-installation-winnipeg", "ev charger installation", "", "Winnipeg", "Medium", "city"),
    row(53, "Home EV Charger Installation Winnipeg | Call Now", "home-ev-charger-installation-winnipeg", "home ev charger installation", "", "Winnipeg", "Medium", "city"),
    row(54, "Commercial EV Charger Installation Winnipeg | Call Now", "commercial-ev-charger-installation-winnipeg", "commercial ev charger installation", "", "Winnipeg", "Medium", "city"),
    row(55, "Commercial Lighting Installation Winnipeg | Call Now", "commercial-lighting-installation-winnipeg", "commercial lighting installation", "", "Winnipeg", "Medium", "city"),
    row(56, "Emergency Lighting Installation Winnipeg | Call Now", "emergency-lighting-installation-winnipeg", "emergency lighting installation", "", "Winnipeg", "Medium", "city"),
    row(57, "Pot Light Installation Winnipeg | Call Now", "pot-light-installation-winnipeg", "pot light installation", "", "Winnipeg", "Medium", "city"),
    row(58, "Landscape Lighting Installation Winnipeg | Call Now", "landscape-lighting-installation-winnipeg", "landscape lighting installation", "", "Winnipeg", "Medium", "city"),
    row(59, "Residential Electrician Winnipeg | Call Now", "residential-electrician-winnipeg", "residential electrician near me", "", "Winnipeg", "Medium", "city"),
    row(60, "Home Electrical Repair Winnipeg | Call Now", "home-electrical-repair-winnipeg", "home electrical repair", "", "Winnipeg", "Medium", "city"),
    row(61, "Home Electrical Wiring Winnipeg | Call Now", "home-electrical-wiring-winnipeg", "home electrical wiring", "", "Winnipeg", "Medium", "city"),
    row(62, "Hot Tub Electrical Installation Winnipeg | Call Now", "hot-tub-electrical-installation-winnipeg", "hot tub electrical installation", "", "Winnipeg", "Medium", "city"),
    row(63, "Knob and Tube Wiring Replacement Winnipeg | Call Now", "knob-and-tube-wiring-replacement-winnipeg", "knob and tube wiring replacement", "", "Winnipeg", "Medium", "city"),
    row(64, "Electrical Panel Upgrade Winnipeg | Call Now", "electrical-panel-upgrade-winnipeg", "electrical panel upgrade", "", "Winnipeg", "Medium", "city"),
    row(65, "200 Amp Panel Upgrade Winnipeg | Call Now", "200-amp-panel-upgrade-winnipeg", "200 amp panel upgrade", "", "Winnipeg", "Medium", "city"),
    row(66, "Electrical Panel Replacement Winnipeg | Call Now", "electrical-panel-replacement-winnipeg", "electrical panel replacement", "", "Winnipeg", "Medium", "city"),
    row(67, "Electrical Panel Repair Winnipeg | Call Now", "electrical-panel-repair-winnipeg", "electrical panel repair", "", "Winnipeg", "Medium", "city"),
    row(68, "Fuse Box Replacement Winnipeg | Call Now", "fuse-box-replacement-winnipeg", "fuse box replacement", "", "Winnipeg", "Medium", "city"),
    row(69, "Circuit Breaker Repair Winnipeg | Call Now", "circuit-breaker-repair-winnipeg", "circuit breaker repair", "", "Winnipeg", "Medium", "city"),
    row(70, "Circuit Breaker Replacement Winnipeg | Call Now", "circuit-breaker-replacement-winnipeg", "circuit breaker replacement", "", "Winnipeg", "Medium", "city"),
    row(71, "Electrical Outlet Installation Winnipeg | Call Now", "electrical-outlet-installation-winnipeg", "electrical outlet installation", "", "Winnipeg", "Medium", "city"),
    row(72, "Electrical Outlet Repair Winnipeg | Call Now", "electrical-outlet-repair-winnipeg", "electrical outlet repair", "", "Winnipeg", "Medium", "city"),
    row(73, "Commercial Electrician Edmonton | Call Now", "commercial-electrician-edmonton", "commercial electrician", "", "Edmonton", "Medium", "city"),
    row(74, "Commercial Electrical Installation Edmonton | Call Now", "commercial-electrical-installation-edmonton", "commercial electrical installation", "", "Edmonton", "Medium", "city"),
    row(75, "Commercial Electrical Repairs Edmonton | Call Now", "commercial-electrical-repairs-edmonton", "commercial electrical repairs", "", "Edmonton", "Medium", "city"),
    row(76, "EV Charger Installation Edmonton | Call Now", "ev-charger-installation-edmonton", "ev charger installation", "", "Edmonton", "Medium", "city"),
    row(77, "Home EV Charger Installation Edmonton | Call Now", "home-ev-charger-installation-edmonton", "home ev charger installation", "", "Edmonton", "Medium", "city"),
    row(78, "Commercial EV Charger Installation Edmonton | Call Now", "commercial-ev-charger-installation-edmonton", "commercial ev charger installation", "", "Edmonton", "Medium", "city"),
    row(79, "Commercial Lighting Installation Edmonton | Call Now", "commercial-lighting-installation-edmonton", "commercial lighting installation", "", "Edmonton", "Medium", "city"),
    row(80, "Emergency Lighting Installation Edmonton | Call Now", "emergency-lighting-installation-edmonton", "emergency lighting installation", "", "Edmonton", "Medium", "city"),
    row(81, "Pot Light Installation Edmonton | Call Now", "pot-light-installation-edmonton", "pot light installation", "", "Edmonton", "Medium", "city"),
    row(82, "Landscape Lighting Installation Edmonton | Call Now", "landscape-lighting-installation-edmonton", "landscape lighting installation", "", "Edmonton", "Medium", "city"),
    row(83, "Residential Electrician Edmonton | Call Now", "residential-electrician-edmonton", "residential electrician near me", "", "Edmonton", "Medium", "city"),
    row(84, "Home Electrical Repair Edmonton | Call Now", "home-electrical-repair-edmonton", "home electrical repair", "", "Edmonton", "Medium", "city"),
    row(85, "Home Electrical Wiring Edmonton | Call Now", "home-electrical-wiring-edmonton", "home electrical wiring", "", "Edmonton", "Medium", "city"),
    row(86, "Hot Tub Electrical Installation Edmonton | Call Now", "hot-tub-electrical-installation-edmonton", "hot tub electrical installation", "", "Edmonton", "Medium", "city"),
    row(87, "Knob and Tube Wiring Replacement Edmonton | Call Now", "knob-and-tube-wiring-replacement-edmonton", "knob and tube wiring replacement", "", "Edmonton", "Medium", "city"),
    row(88, "Electrical Panel Upgrade Edmonton | Call Now", "electrical-panel-upgrade-edmonton", "electrical panel upgrade", "", "Edmonton", "Medium", "city"),
    row(89, "200 Amp Panel Upgrade Edmonton | Call Now", "200-amp-panel-upgrade-edmonton", "200 amp panel upgrade", "", "Edmonton", "Medium", "city"),
    row(90, "Electrical Panel Replacement Edmonton | Call Now", "electrical-panel-replacement-edmonton", "electrical panel replacement", "", "Edmonton", "Medium", "city"),
    row(91, "Electrical Panel Repair Edmonton | Call Now", "electrical-panel-repair-edmonton", "electrical panel repair", "", "Edmonton", "Medium", "city"),
    row(92, "Fuse Box Replacement Edmonton | Call Now", "fuse-box-replacement-edmonton", "fuse box replacement", "", "Edmonton", "Medium", "city"),
    row(93, "Circuit Breaker Repair Edmonton | Call Now", "circuit-breaker-repair-edmonton", "circuit breaker repair", "", "Edmonton", "Medium", "city"),
    row(94, "Circuit Breaker Replacement Edmonton | Call Now", "circuit-breaker-replacement-edmonton", "circuit breaker replacement", "", "Edmonton", "Medium", "city"),
    row(95, "Electrical Outlet Installation Edmonton | Call Now", "electrical-outlet-installation-edmonton", "electrical outlet installation", "", "Edmonton", "Medium", "city"),
    row(96, "Electrical Outlet Repair Edmonton | Call Now", "electrical-outlet-repair-edmonton", "electrical outlet repair", "", "Edmonton", "Medium", "city"),
    row(97, "Commercial Electrician Ottawa | Call Now", "commercial-electrician-ottawa", "commercial electrician", "", "Ottawa", "Medium", "city"),
    row(98, "Commercial Electrical Installation Ottawa | Call Now", "commercial-electrical-installation-ottawa", "commercial electrical installation", "", "Ottawa", "Medium", "city"),
    row(99, "Commercial Electrical Repairs Ottawa | Call Now", "commercial-electrical-repairs-ottawa", "commercial electrical repairs", "", "Ottawa", "Medium", "city"),
    row(100, "EV Charger Installation Ottawa | Call Now", "ev-charger-installation-ottawa", "ev charger installation", "", "Ottawa", "Medium", "city"),
    row(101, "Home EV Charger Installation Ottawa | Call Now", "home-ev-charger-installation-ottawa", "home ev charger installation", "", "Ottawa", "Medium", "city"),
    row(102, "Commercial EV Charger Installation Ottawa | Call Now", "commercial-ev-charger-installation-ottawa", "commercial ev charger installation", "", "Ottawa", "Medium", "city"),
    row(103, "Commercial Lighting Installation Ottawa | Call Now", "commercial-lighting-installation-ottawa", "commercial lighting installation", "", "Ottawa", "Medium", "city"),
    row(104, "Emergency Lighting Installation Ottawa | Call Now", "emergency-lighting-installation-ottawa", "emergency lighting installation", "", "Ottawa", "Medium", "city"),
    row(105, "Pot Light Installation Ottawa | Call Now", "pot-light-installation-ottawa", "pot light installation", "", "Ottawa", "Medium", "city"),
    row(106, "Landscape Lighting Installation Ottawa | Call Now", "landscape-lighting-installation-ottawa", "landscape lighting installation", "", "Ottawa", "Medium", "city"),
    row(107, "Residential Electrician Ottawa | Call Now", "residential-electrician-ottawa", "residential electrician near me", "", "Ottawa", "Medium", "city"),
    row(108, "Home Electrical Repair Ottawa | Call Now", "home-electrical-repair-ottawa", "home electrical repair", "", "Ottawa", "Medium", "city"),
    row(109, "Home Electrical Wiring Ottawa | Call Now", "home-electrical-wiring-ottawa", "home electrical wiring", "", "Ottawa", "Medium", "city"),
    row(110, "Hot Tub Electrical Installation Ottawa | Call Now", "hot-tub-electrical-installation-ottawa", "hot tub electrical installation", "", "Ottawa", "Medium", "city"),
    row(111, "Knob and Tube Wiring Replacement Ottawa | Call Now", "knob-and-tube-wiring-replacement-ottawa", "knob and tube wiring replacement", "", "Ottawa", "Medium", "city"),
    row(112, "Electrical Panel Upgrade Ottawa | Call Now", "electrical-panel-upgrade-ottawa", "electrical panel upgrade", "", "Ottawa", "Medium", "city"),
    row(113, "200 Amp Panel Upgrade Ottawa | Call Now", "200-amp-panel-upgrade-ottawa", "200 amp panel upgrade", "", "Ottawa", "Medium", "city"),
    row(114, "Electrical Panel Replacement Ottawa | Call Now", "electrical-panel-replacement-ottawa", "electrical panel replacement", "", "Ottawa", "Medium", "city"),
    row(115, "Electrical Panel Repair Ottawa | Call Now", "electrical-panel-repair-ottawa", "electrical panel repair", "", "Ottawa", "Medium", "city"),
    row(116, "Fuse Box Replacement Ottawa | Call Now", "fuse-box-replacement-ottawa", "fuse box replacement", "", "Ottawa", "Medium", "city"),
    row(117, "Circuit Breaker Repair Ottawa | Call Now", "circuit-breaker-repair-ottawa", "circuit breaker repair", "", "Ottawa", "Medium", "city"),
    row(118, "Circuit Breaker Replacement Ottawa | Call Now", "circuit-breaker-replacement-ottawa", "circuit breaker replacement", "", "Ottawa", "Medium", "city"),
    row(119, "Electrical Outlet Installation Ottawa | Call Now", "electrical-outlet-installation-ottawa", "electrical outlet installation", "", "Ottawa", "Medium", "city"),
    row(120, "Electrical Outlet Repair Ottawa | Call Now", "electrical-outlet-repair-ottawa", "electrical outlet repair", "", "Ottawa", "Medium", "city"),
    row(121, "Commercial Electrician Montreal | Call Now", "commercial-electrician-montreal", "commercial electrician", "", "Montreal", "Medium", "city"),
    row(122, "Commercial Electrical Installation Montreal | Call Now", "commercial-electrical-installation-montreal", "commercial electrical installation", "", "Montreal", "Medium", "city"),
    row(123, "Commercial Electrical Repairs Montreal | Call Now", "commercial-electrical-repairs-montreal", "commercial electrical repairs", "", "Montreal", "Medium", "city"),
    row(124, "EV Charger Installation Montreal | Call Now", "ev-charger-installation-montreal", "ev charger installation", "", "Montreal", "Medium", "city"),
    row(125, "Home EV Charger Installation Montreal | Call Now", "home-ev-charger-installation-montreal", "home ev charger installation", "", "Montreal", "Medium", "city"),
    row(126, "Commercial EV Charger Installation Montreal | Call Now", "commercial-ev-charger-installation-montreal", "commercial ev charger installation", "", "Montreal", "Medium", "city"),
    row(127, "Commercial Lighting Installation Montreal | Call Now", "commercial-lighting-installation-montreal", "commercial lighting installation", "", "Montreal", "Medium", "city"),
    row(128, "Emergency Lighting Installation Montreal | Call Now", "emergency-lighting-installation-montreal", "emergency lighting installation", "", "Montreal", "Medium", "city"),
    row(129, "Pot Light Installation Montreal | Call Now", "pot-light-installation-montreal", "pot light installation", "", "Montreal", "Medium", "city"),
    row(130, "Landscape Lighting Installation Montreal | Call Now", "landscape-lighting-installation-montreal", "landscape lighting installation", "", "Montreal", "Medium", "city"),
    row(131, "Residential Electrician Montreal | Call Now", "residential-electrician-montreal", "residential electrician near me", "", "Montreal", "Medium", "city"),
    row(132, "Home Electrical Repair Montreal | Call Now", "home-electrical-repair-montreal", "home electrical repair", "", "Montreal", "Medium", "city"),
    row(133, "Home Electrical Wiring Montreal | Call Now", "home-electrical-wiring-montreal", "home electrical wiring", "", "Montreal", "Medium", "city"),
    row(134, "Hot Tub Electrical Installation Montreal | Call Now", "hot-tub-electrical-installation-montreal", "hot tub electrical installation", "", "Montreal", "Medium", "city"),
    row(135, "Knob and Tube Wiring Replacement Montreal | Call Now", "knob-and-tube-wiring-replacement-montreal", "knob and tube wiring replacement", "", "Montreal", "Medium", "city"),
    row(136, "Electrical Panel Upgrade Montreal | Call Now", "electrical-panel-upgrade-montreal", "electrical panel upgrade", "", "Montreal", "Medium", "city"),
    row(137, "200 Amp Panel Upgrade Montreal | Call Now", "200-amp-panel-upgrade-montreal", "200 amp panel upgrade", "", "Montreal", "Medium", "city"),
    row(138, "Electrical Panel Replacement Montreal | Call Now", "electrical-panel-replacement-montreal", "electrical panel replacement", "", "Montreal", "Medium", "city"),
    row(139, "Electrical Panel Repair Montreal | Call Now", "electrical-panel-repair-montreal", "electrical panel repair", "", "Montreal", "Medium", "city"),
    row(140, "Fuse Box Replacement Montreal | Call Now", "fuse-box-replacement-montreal", "fuse box replacement", "", "Montreal", "Medium", "city"),
    row(141, "Circuit Breaker Repair Montreal | Call Now", "circuit-breaker-repair-montreal", "circuit breaker repair", "", "Montreal", "Medium", "city"),
    row(142, "Circuit Breaker Replacement Montreal | Call Now", "circuit-breaker-replacement-montreal", "circuit breaker replacement", "", "Montreal", "Medium", "city"),
    row(143, "Electrical Outlet Installation Montreal | Call Now", "electrical-outlet-installation-montreal", "electrical outlet installation", "", "Montreal", "Medium", "city"),
    row(144, "Electrical Outlet Repair Montreal | Call Now", "electrical-outlet-repair-montreal", "electrical outlet repair", "", "Montreal", "Medium", "city"),
    row(145, "Commercial Electrician Laval | Call Now", "commercial-electrician-laval", "commercial electrician", "", "Laval", "Medium", "city"),
    row(146, "Commercial Electrical Installation Laval | Call Now", "commercial-electrical-installation-laval", "commercial electrical installation", "", "Laval", "Medium", "city"),
    row(147, "Commercial Electrical Repairs Laval | Call Now", "commercial-electrical-repairs-laval", "commercial electrical repairs", "", "Laval", "Medium", "city"),
    row(148, "EV Charger Installation Laval | Call Now", "ev-charger-installation-laval", "ev charger installation", "", "Laval", "Medium", "city"),
    row(149, "Home EV Charger Installation Laval | Call Now", "home-ev-charger-installation-laval", "home ev charger installation", "", "Laval", "Medium", "city"),
    row(150, "Commercial EV Charger Installation Laval | Call Now", "commercial-ev-charger-installation-laval", "commercial ev charger installation", "", "Laval", "Medium", "city"),
    row(151, "Commercial Lighting Installation Laval | Call Now", "commercial-lighting-installation-laval", "commercial lighting installation", "", "Laval", "Medium", "city"),
    row(152, "Emergency Lighting Installation Laval | Call Now", "emergency-lighting-installation-laval", "emergency lighting installation", "", "Laval", "Medium", "city"),
    row(153, "Pot Light Installation Laval | Call Now", "pot-light-installation-laval", "pot light installation", "", "Laval", "Medium", "city"),
    row(154, "Landscape Lighting Installation Laval | Call Now", "landscape-lighting-installation-laval", "landscape lighting installation", "", "Laval", "Medium", "city"),
    row(155, "Residential Electrician Laval | Call Now", "residential-electrician-laval", "residential electrician near me", "", "Laval", "Medium", "city"),
    row(156, "Home Electrical Repair Laval | Call Now", "home-electrical-repair-laval", "home electrical repair", "", "Laval", "Medium", "city"),
    row(157, "Home Electrical Wiring Laval | Call Now", "home-electrical-wiring-laval", "home electrical wiring", "", "Laval", "Medium", "city"),
    row(158, "Hot Tub Electrical Installation Laval | Call Now", "hot-tub-electrical-installation-laval", "hot tub electrical installation", "", "Laval", "Medium", "city"),
    row(159, "Knob and Tube Wiring Replacement Laval | Call Now", "knob-and-tube-wiring-replacement-laval", "knob and tube wiring replacement", "", "Laval", "Medium", "city"),
    row(160, "Electrical Panel Upgrade Laval | Call Now", "electrical-panel-upgrade-laval", "electrical panel upgrade", "", "Laval", "Medium", "city"),
    row(161, "200 Amp Panel Upgrade Laval | Call Now", "200-amp-panel-upgrade-laval", "200 amp panel upgrade", "", "Laval", "Medium", "city"),
    row(162, "Electrical Panel Replacement Laval | Call Now", "electrical-panel-replacement-laval", "electrical panel replacement", "", "Laval", "Medium", "city"),
    row(163, "Electrical Panel Repair Laval | Call Now", "electrical-panel-repair-laval", "electrical panel repair", "", "Laval", "Medium", "city"),
    row(164, "Fuse Box Replacement Laval | Call Now", "fuse-box-replacement-laval", "fuse box replacement", "", "Laval", "Medium", "city"),
    row(165, "Circuit Breaker Repair Laval | Call Now", "circuit-breaker-repair-laval", "circuit breaker repair", "", "Laval", "Medium", "city"),
    row(166, "Circuit Breaker Replacement Laval | Call Now", "circuit-breaker-replacement-laval", "circuit breaker replacement", "", "Laval", "Medium", "city"),
    row(167, "Electrical Outlet Installation Laval | Call Now", "electrical-outlet-installation-laval", "electrical outlet installation", "", "Laval", "Medium", "city"),
    row(168, "Electrical Outlet Repair Laval | Call Now", "electrical-outlet-repair-laval", "electrical outlet repair", "", "Laval", "Medium", "city"),
    row(169, "Commercial Electrician Hamilton | Call Now", "commercial-electrician-hamilton", "commercial electrician", "", "Hamilton", "Medium", "city"),
    row(170, "Commercial Electrical Installation Hamilton | Call Now", "commercial-electrical-installation-hamilton", "commercial electrical installation", "", "Hamilton", "Medium", "city"),
    row(171, "Commercial Electrical Repairs Hamilton | Call Now", "commercial-electrical-repairs-hamilton", "commercial electrical repairs", "", "Hamilton", "Medium", "city"),
    row(172, "EV Charger Installation Hamilton | Call Now", "ev-charger-installation-hamilton", "ev charger installation", "", "Hamilton", "Medium", "city"),
    row(173, "Home EV Charger Installation Hamilton | Call Now", "home-ev-charger-installation-hamilton", "home ev charger installation", "", "Hamilton", "Medium", "city"),
    row(174, "Commercial EV Charger Installation Hamilton | Call Now", "commercial-ev-charger-installation-hamilton", "commercial ev charger installation", "", "Hamilton", "Medium", "city"),
    row(175, "Commercial Lighting Installation Hamilton | Call Now", "commercial-lighting-installation-hamilton", "commercial lighting installation", "", "Hamilton", "Medium", "city"),
    row(176, "Emergency Lighting Installation Hamilton | Call Now", "emergency-lighting-installation-hamilton", "emergency lighting installation", "", "Hamilton", "Medium", "city"),
    row(177, "Pot Light Installation Hamilton | Call Now", "pot-light-installation-hamilton", "pot light installation", "", "Hamilton", "Medium", "city"),
    row(178, "Landscape Lighting Installation Hamilton | Call Now", "landscape-lighting-installation-hamilton", "landscape lighting installation", "", "Hamilton", "Medium", "city"),
    row(179, "Residential Electrician Hamilton | Call Now", "residential-electrician-hamilton", "residential electrician near me", "", "Hamilton", "Medium", "city"),
    row(180, "Home Electrical Repair Hamilton | Call Now", "home-electrical-repair-hamilton", "home electrical repair", "", "Hamilton", "Medium", "city"),
    row(181, "Home Electrical Wiring Hamilton | Call Now", "home-electrical-wiring-hamilton", "home electrical wiring", "", "Hamilton", "Medium", "city"),
    row(182, "Hot Tub Electrical Installation Hamilton | Call Now", "hot-tub-electrical-installation-hamilton", "hot tub electrical installation", "", "Hamilton", "Medium", "city"),
    row(183, "Knob and Tube Wiring Replacement Hamilton | Call Now", "knob-and-tube-wiring-replacement-hamilton", "knob and tube wiring replacement", "", "Hamilton", "Medium", "city"),
    row(184, "Electrical Panel Upgrade Hamilton | Call Now", "electrical-panel-upgrade-hamilton", "electrical panel upgrade", "", "Hamilton", "Medium", "city"),
    row(185, "200 Amp Panel Upgrade Hamilton | Call Now", "200-amp-panel-upgrade-hamilton", "200 amp panel upgrade", "", "Hamilton", "Medium", "city"),
    row(186, "Electrical Panel Replacement Hamilton | Call Now", "electrical-panel-replacement-hamilton", "electrical panel replacement", "", "Hamilton", "Medium", "city"),
    row(187, "Electrical Panel Repair Hamilton | Call Now", "electrical-panel-repair-hamilton", "electrical panel repair", "", "Hamilton", "Medium", "city"),
    row(188, "Fuse Box Replacement Hamilton | Call Now", "fuse-box-replacement-hamilton", "fuse box replacement", "", "Hamilton", "Medium", "city"),
    row(189, "Circuit Breaker Repair Hamilton | Call Now", "circuit-breaker-repair-hamilton", "circuit breaker repair", "", "Hamilton", "Medium", "city"),
    row(190, "Circuit Breaker Replacement Hamilton | Call Now", "circuit-breaker-replacement-hamilton", "circuit breaker replacement", "", "Hamilton", "Medium", "city"),
    row(191, "Electrical Outlet Installation Hamilton | Call Now", "electrical-outlet-installation-hamilton", "electrical outlet installation", "", "Hamilton", "Medium", "city"),
    row(192, "Electrical Outlet Repair Hamilton | Call Now", "electrical-outlet-repair-hamilton", "electrical outlet repair", "", "Hamilton", "Medium", "city"),
    row(193, "Commercial Electrician St Catharines | Call Now", "commercial-electrician-st-catharines", "commercial electrician", "", "St Catharines", "Medium", "city"),
    row(194, "Commercial Electrical Installation St Catharines | Call Now", "commercial-electrical-installation-st-catharines", "commercial electrical installation", "", "St Catharines", "Medium", "city"),
    row(195, "Commercial Electrical Repairs St Catharines | Call Now", "commercial-electrical-repairs-st-catharines", "commercial electrical repairs", "", "St Catharines", "Medium", "city"),
    row(196, "EV Charger Installation St Catharines | Call Now", "ev-charger-installation-st-catharines", "ev charger installation", "", "St Catharines", "Medium", "city"),
    row(197, "Home EV Charger Installation St Catharines | Call Now", "home-ev-charger-installation-st-catharines", "home ev charger installation", "", "St Catharines", "Medium", "city"),
    row(198, "Commercial EV Charger Installation St Catharines | Call Now", "commercial-ev-charger-installation-st-catharines", "commercial ev charger installation", "", "St Catharines", "Medium", "city"),
    row(199, "Commercial Lighting Installation St Catharines | Call Now", "commercial-lighting-installation-st-catharines", "commercial lighting installation", "", "St Catharines", "Medium", "city"),
    row(200, "Emergency Lighting Installation St Catharines | Call Now", "emergency-lighting-installation-st-catharines", "emergency lighting installation", "", "St Catharines", "Medium", "city"),
    row(201, "Pot Light Installation St Catharines | Call Now", "pot-light-installation-st-catharines", "pot light installation", "", "St Catharines", "Medium", "city"),
    row(202, "Landscape Lighting Installation St Catharines | Call Now", "landscape-lighting-installation-st-catharines", "landscape lighting installation", "", "St Catharines", "Medium", "city"),
    row(203, "Residential Electrician St Catharines | Call Now", "residential-electrician-st-catharines", "residential electrician near me", "", "St Catharines", "Medium", "city"),
    row(204, "Home Electrical Repair St Catharines | Call Now", "home-electrical-repair-st-catharines", "home electrical repair", "", "St Catharines", "Medium", "city"),
    row(205, "Home Electrical Wiring St Catharines | Call Now", "home-electrical-wiring-st-catharines", "home electrical wiring", "", "St Catharines", "Medium", "city"),
    row(206, "Hot Tub Electrical Installation St Catharines | Call Now", "hot-tub-electrical-installation-st-catharines", "hot tub electrical installation", "", "St Catharines", "Medium", "city"),
    row(207, "Knob and Tube Wiring Replacement St Catharines | Call Now", "knob-and-tube-wiring-replacement-st-catharines", "knob and tube wiring replacement", "", "St Catharines", "Medium", "city"),
    row(208, "Electrical Panel Upgrade St Catharines | Call Now", "electrical-panel-upgrade-st-catharines", "electrical panel upgrade", "", "St Catharines", "Medium", "city"),
    row(209, "200 Amp Panel Upgrade St Catharines | Call Now", "200-amp-panel-upgrade-st-catharines", "200 amp panel upgrade", "", "St Catharines", "Medium", "city"),
    row(210, "Electrical Panel Replacement St Catharines | Call Now", "electrical-panel-replacement-st-catharines", "electrical panel replacement", "", "St Catharines", "Medium", "city"),
    row(211, "Electrical Panel Repair St Catharines | Call Now", "electrical-panel-repair-st-catharines", "electrical panel repair", "", "St Catharines", "Medium", "city"),
    row(212, "Fuse Box Replacement St Catharines | Call Now", "fuse-box-replacement-st-catharines", "fuse box replacement", "", "St Catharines", "Medium", "city"),
    row(213, "Circuit Breaker Repair St Catharines | Call Now", "circuit-breaker-repair-st-catharines", "circuit breaker repair", "", "St Catharines", "Medium", "city"),
    row(214, "Circuit Breaker Replacement St Catharines | Call Now", "circuit-breaker-replacement-st-catharines", "circuit breaker replacement", "", "St Catharines", "Medium", "city"),
    row(215, "Electrical Outlet Installation St Catharines | Call Now", "electrical-outlet-installation-st-catharines", "electrical outlet installation", "", "St Catharines", "Medium", "city"),
    row(216, "Electrical Outlet Repair St Catharines | Call Now", "electrical-outlet-repair-st-catharines", "electrical outlet repair", "", "St Catharines", "Medium", "city"),
    row(217, "Commercial Electrician Markham | Call Now", "commercial-electrician-markham", "commercial electrician", "", "Markham", "Medium", "city"),
    row(218, "Commercial Electrical Installation Markham | Call Now", "commercial-electrical-installation-markham", "commercial electrical installation", "", "Markham", "Medium", "city"),
    row(219, "Commercial Electrical Repairs Markham | Call Now", "commercial-electrical-repairs-markham", "commercial electrical repairs", "", "Markham", "Medium", "city"),
    row(220, "EV Charger Installation Markham | Call Now", "ev-charger-installation-markham", "ev charger installation", "", "Markham", "Medium", "city"),
    row(221, "Home EV Charger Installation Markham | Call Now", "home-ev-charger-installation-markham", "home ev charger installation", "", "Markham", "Medium", "city"),
    row(222, "Commercial EV Charger Installation Markham | Call Now", "commercial-ev-charger-installation-markham", "commercial ev charger installation", "", "Markham", "Medium", "city"),
    row(223, "Commercial Lighting Installation Markham | Call Now", "commercial-lighting-installation-markham", "commercial lighting installation", "", "Markham", "Medium", "city"),
    row(224, "Emergency Lighting Installation Markham | Call Now", "emergency-lighting-installation-markham", "emergency lighting installation", "", "Markham", "Medium", "city"),
    row(225, "Pot Light Installation Markham | Call Now", "pot-light-installation-markham", "pot light installation", "", "Markham", "Medium", "city"),
    row(226, "Landscape Lighting Installation Markham | Call Now", "landscape-lighting-installation-markham", "landscape lighting installation", "", "Markham", "Medium", "city"),
    row(227, "Residential Electrician Markham | Call Now", "residential-electrician-markham", "residential electrician near me", "", "Markham", "Medium", "city"),
    row(228, "Home Electrical Repair Markham | Call Now", "home-electrical-repair-markham", "home electrical repair", "", "Markham", "Medium", "city"),
    row(229, "Home Electrical Wiring Markham | Call Now", "home-electrical-wiring-markham", "home electrical wiring", "", "Markham", "Medium", "city"),
    row(230, "Hot Tub Electrical Installation Markham | Call Now", "hot-tub-electrical-installation-markham", "hot tub electrical installation", "", "Markham", "Medium", "city"),
    row(231, "Knob and Tube Wiring Replacement Markham | Call Now", "knob-and-tube-wiring-replacement-markham", "knob and tube wiring replacement", "", "Markham", "Medium", "city"),
    row(232, "Electrical Panel Upgrade Markham | Call Now", "electrical-panel-upgrade-markham", "electrical panel upgrade", "", "Markham", "Medium", "city"),
    row(233, "200 Amp Panel Upgrade Markham | Call Now", "200-amp-panel-upgrade-markham", "200 amp panel upgrade", "", "Markham", "Medium", "city"),
    row(234, "Electrical Panel Replacement Markham | Call Now", "electrical-panel-replacement-markham", "electrical panel replacement", "", "Markham", "Medium", "city"),
    row(235, "Electrical Panel Repair Markham | Call Now", "electrical-panel-repair-markham", "electrical panel repair", "", "Markham", "Medium", "city"),
    row(236, "Fuse Box Replacement Markham | Call Now", "fuse-box-replacement-markham", "fuse box replacement", "", "Markham", "Medium", "city"),
    row(237, "Circuit Breaker Repair Markham | Call Now", "circuit-breaker-repair-markham", "circuit breaker repair", "", "Markham", "Medium", "city"),
    row(238, "Circuit Breaker Replacement Markham | Call Now", "circuit-breaker-replacement-markham", "circuit breaker replacement", "", "Markham", "Medium", "city"),
    row(239, "Electrical Outlet Installation Markham | Call Now", "electrical-outlet-installation-markham", "electrical outlet installation", "", "Markham", "Medium", "city"),
    row(240, "Electrical Outlet Repair Markham | Call Now", "electrical-outlet-repair-markham", "electrical outlet repair", "", "Markham", "Medium", "city"),
    row(241, "Commercial Electrician North York | Call Now", "commercial-electrician-north-york", "commercial electrician", "", "North York", "Medium", "city"),
    row(242, "Commercial Electrical Installation North York | Call Now", "commercial-electrical-installation-north-york", "commercial electrical installation", "", "North York", "Medium", "city"),
    row(243, "Commercial Electrical Repairs North York | Call Now", "commercial-electrical-repairs-north-york", "commercial electrical repairs", "", "North York", "Medium", "city"),
    row(244, "EV Charger Installation North York | Call Now", "ev-charger-installation-north-york", "ev charger installation", "", "North York", "Medium", "city"),
    row(245, "Home EV Charger Installation North York | Call Now", "home-ev-charger-installation-north-york", "home ev charger installation", "", "North York", "Medium", "city"),
    row(246, "Commercial EV Charger Installation North York | Call Now", "commercial-ev-charger-installation-north-york", "commercial ev charger installation", "", "North York", "Medium", "city"),
    row(247, "Commercial Lighting Installation North York | Call Now", "commercial-lighting-installation-north-york", "commercial lighting installation", "", "North York", "Medium", "city"),
    row(248, "Emergency Lighting Installation North York | Call Now", "emergency-lighting-installation-north-york", "emergency lighting installation", "", "North York", "Medium", "city"),
    row(249, "Pot Light Installation North York | Call Now", "pot-light-installation-north-york", "pot light installation", "", "North York", "Medium", "city"),
    row(250, "Landscape Lighting Installation North York | Call Now", "landscape-lighting-installation-north-york", "landscape lighting installation", "", "North York", "Medium", "city"),
    row(251, "Residential Electrician North York | Call Now", "residential-electrician-north-york", "residential electrician near me", "", "North York", "Medium", "city"),
    row(252, "Home Electrical Repair North York | Call Now", "home-electrical-repair-north-york", "home electrical repair", "", "North York", "Medium", "city"),
    row(253, "Home Electrical Wiring North York | Call Now", "home-electrical-wiring-north-york", "home electrical wiring", "", "North York", "Medium", "city"),
    row(254, "Hot Tub Electrical Installation North York | Call Now", "hot-tub-electrical-installation-north-york", "hot tub electrical installation", "", "North York", "Medium", "city"),
    row(255, "Knob and Tube Wiring Replacement North York | Call Now", "knob-and-tube-wiring-replacement-north-york", "knob and tube wiring replacement", "", "North York", "Medium", "city"),
    row(256, "Electrical Panel Upgrade North York | Call Now", "electrical-panel-upgrade-north-york", "electrical panel upgrade", "", "North York", "Medium", "city"),
    row(257, "200 Amp Panel Upgrade North York | Call Now", "200-amp-panel-upgrade-north-york", "200 amp panel upgrade", "", "North York", "Medium", "city"),
    row(258, "Electrical Panel Replacement North York | Call Now", "electrical-panel-replacement-north-york", "electrical panel replacement", "", "North York", "Medium", "city"),
    row(259, "Electrical Panel Repair North York | Call Now", "electrical-panel-repair-north-york", "electrical panel repair", "", "North York", "Medium", "city"),
    row(260, "Fuse Box Replacement North York | Call Now", "fuse-box-replacement-north-york", "fuse box replacement", "", "North York", "Medium", "city"),
    row(261, "Circuit Breaker Repair North York | Call Now", "circuit-breaker-repair-north-york", "circuit breaker repair", "", "North York", "Medium", "city"),
    row(262, "Circuit Breaker Replacement North York | Call Now", "circuit-breaker-replacement-north-york", "circuit breaker replacement", "", "North York", "Medium", "city"),
    row(263, "Electrical Outlet Installation North York | Call Now", "electrical-outlet-installation-north-york", "electrical outlet installation", "", "North York", "Medium", "city"),
    row(264, "Electrical Outlet Repair North York | Call Now", "electrical-outlet-repair-north-york", "electrical outlet repair", "", "North York", "Medium", "city"),
    row(265, "Commercial Electrician London Ontario | Call Now", "commercial-electrician-london-ontario", "commercial electrician", "", "London Ontario", "Medium", "city"),
    row(266, "Commercial Electrical Installation London Ontario | Call Now", "commercial-electrical-installation-london-ontario", "commercial electrical installation", "", "London Ontario", "Medium", "city"),
    row(267, "Commercial Electrical Repairs London Ontario | Call Now", "commercial-electrical-repairs-london-ontario", "commercial electrical repairs", "", "London Ontario", "Medium", "city"),
    row(268, "EV Charger Installation London Ontario | Call Now", "ev-charger-installation-london-ontario", "ev charger installation", "", "London Ontario", "Medium", "city"),
    row(269, "Home EV Charger Installation London Ontario | Call Now", "home-ev-charger-installation-london-ontario", "home ev charger installation", "", "London Ontario", "Medium", "city"),
    row(270, "Commercial EV Charger Installation London Ontario | Call Now", "commercial-ev-charger-installation-london-ontario", "commercial ev charger installation", "", "London Ontario", "Medium", "city"),
    row(271, "Commercial Lighting Installation London Ontario | Call Now", "commercial-lighting-installation-london-ontario", "commercial lighting installation", "", "London Ontario", "Medium", "city"),
    row(272, "Emergency Lighting Installation London Ontario | Call Now", "emergency-lighting-installation-london-ontario", "emergency lighting installation", "", "London Ontario", "Medium", "city"),
    row(273, "Pot Light Installation London Ontario | Call Now", "pot-light-installation-london-ontario", "pot light installation", "", "London Ontario", "Medium", "city"),
    row(274, "Landscape Lighting Installation London Ontario | Call Now", "landscape-lighting-installation-london-ontario", "landscape lighting installation", "", "London Ontario", "Medium", "city"),
    row(275, "Residential Electrician London Ontario | Call Now", "residential-electrician-london-ontario", "residential electrician near me", "", "London Ontario", "Medium", "city"),
    row(276, "Home Electrical Repair London Ontario | Call Now", "home-electrical-repair-london-ontario", "home electrical repair", "", "London Ontario", "Medium", "city"),
    row(277, "Home Electrical Wiring London Ontario | Call Now", "home-electrical-wiring-london-ontario", "home electrical wiring", "", "London Ontario", "Medium", "city"),
    row(278, "Hot Tub Electrical Installation London Ontario | Call Now", "hot-tub-electrical-installation-london-ontario", "hot tub electrical installation", "", "London Ontario", "Medium", "city"),
    row(279, "Knob and Tube Wiring Replacement London Ontario | Call Now", "knob-and-tube-wiring-replacement-london-ontario", "knob and tube wiring replacement", "", "London Ontario", "Medium", "city"),
    row(280, "Electrical Panel Upgrade London Ontario | Call Now", "electrical-panel-upgrade-london-ontario", "electrical panel upgrade", "", "London Ontario", "Medium", "city"),
    row(281, "200 Amp Panel Upgrade London Ontario | Call Now", "200-amp-panel-upgrade-london-ontario", "200 amp panel upgrade", "", "London Ontario", "Medium", "city"),
    row(282, "Electrical Panel Replacement London Ontario | Call Now", "electrical-panel-replacement-london-ontario", "electrical panel replacement", "", "London Ontario", "Medium", "city"),
    row(283, "Electrical Panel Repair London Ontario | Call Now", "electrical-panel-repair-london-ontario", "electrical panel repair", "", "London Ontario", "Medium", "city"),
    row(284, "Fuse Box Replacement London Ontario | Call Now", "fuse-box-replacement-london-ontario", "fuse box replacement", "", "London Ontario", "Medium", "city"),
    row(285, "Circuit Breaker Repair London Ontario | Call Now", "circuit-breaker-repair-london-ontario", "circuit breaker repair", "", "London Ontario", "Medium", "city"),
    row(286, "Circuit Breaker Replacement London Ontario | Call Now", "circuit-breaker-replacement-london-ontario", "circuit breaker replacement", "", "London Ontario", "Medium", "city"),
    row(287, "Electrical Outlet Installation London Ontario | Call Now", "electrical-outlet-installation-london-ontario", "electrical outlet installation", "", "London Ontario", "Medium", "city"),
    row(288, "Electrical Outlet Repair London Ontario | Call Now", "electrical-outlet-repair-london-ontario", "electrical outlet repair", "", "London Ontario", "Medium", "city"),
    row(289, "Commercial Electrician Surrey BC | Call Now", "commercial-electrician-surrey-bc", "commercial electrician", "", "Surrey BC", "Medium", "city"),
    row(290, "Commercial Electrical Installation Surrey BC | Call Now", "commercial-electrical-installation-surrey-bc", "commercial electrical installation", "", "Surrey BC", "Medium", "city"),
    row(291, "Commercial Electrical Repairs Surrey BC | Call Now", "commercial-electrical-repairs-surrey-bc", "commercial electrical repairs", "", "Surrey BC", "Medium", "city"),
    row(292, "EV Charger Installation Surrey BC | Call Now", "ev-charger-installation-surrey-bc", "ev charger installation", "", "Surrey BC", "Medium", "city"),
    row(293, "Home EV Charger Installation Surrey BC | Call Now", "home-ev-charger-installation-surrey-bc", "home ev charger installation", "", "Surrey BC", "Medium", "city"),
    row(294, "Commercial EV Charger Installation Surrey BC | Call Now", "commercial-ev-charger-installation-surrey-bc", "commercial ev charger installation", "", "Surrey BC", "Medium", "city"),
    row(295, "Commercial Lighting Installation Surrey BC | Call Now", "commercial-lighting-installation-surrey-bc", "commercial lighting installation", "", "Surrey BC", "Medium", "city"),
    row(296, "Emergency Lighting Installation Surrey BC | Call Now", "emergency-lighting-installation-surrey-bc", "emergency lighting installation", "", "Surrey BC", "Medium", "city"),
    row(297, "Pot Light Installation Surrey BC | Call Now", "pot-light-installation-surrey-bc", "pot light installation", "", "Surrey BC", "Medium", "city"),
    row(298, "Landscape Lighting Installation Surrey BC | Call Now", "landscape-lighting-installation-surrey-bc", "landscape lighting installation", "", "Surrey BC", "Medium", "city"),
    row(299, "Residential Electrician Surrey BC | Call Now", "residential-electrician-surrey-bc", "residential electrician near me", "", "Surrey BC", "Medium", "city"),
    row(300, "Home Electrical Repair Surrey BC | Call Now", "home-electrical-repair-surrey-bc", "home electrical repair", "", "Surrey BC", "Medium", "city"),
    row(301, "Home Electrical Wiring Surrey BC | Call Now", "home-electrical-wiring-surrey-bc", "home electrical wiring", "", "Surrey BC", "Medium", "city"),
    row(302, "Hot Tub Electrical Installation Surrey BC | Call Now", "hot-tub-electrical-installation-surrey-bc", "hot tub electrical installation", "", "Surrey BC", "Medium", "city"),
    row(303, "Knob and Tube Wiring Replacement Surrey BC | Call Now", "knob-and-tube-wiring-replacement-surrey-bc", "knob and tube wiring replacement", "", "Surrey BC", "Medium", "city"),
    row(304, "Electrical Panel Upgrade Surrey BC | Call Now", "electrical-panel-upgrade-surrey-bc", "electrical panel upgrade", "", "Surrey BC", "Medium", "city"),
    row(305, "200 Amp Panel Upgrade Surrey BC | Call Now", "200-amp-panel-upgrade-surrey-bc", "200 amp panel upgrade", "", "Surrey BC", "Medium", "city"),
    row(306, "Electrical Panel Replacement Surrey BC | Call Now", "electrical-panel-replacement-surrey-bc", "electrical panel replacement", "", "Surrey BC", "Medium", "city"),
    row(307, "Electrical Panel Repair Surrey BC | Call Now", "electrical-panel-repair-surrey-bc", "electrical panel repair", "", "Surrey BC", "Medium", "city"),
    row(308, "Fuse Box Replacement Surrey BC | Call Now", "fuse-box-replacement-surrey-bc", "fuse box replacement", "", "Surrey BC", "Medium", "city"),
    row(309, "Circuit Breaker Repair Surrey BC | Call Now", "circuit-breaker-repair-surrey-bc", "circuit breaker repair", "", "Surrey BC", "Medium", "city"),
    row(310, "Circuit Breaker Replacement Surrey BC | Call Now", "circuit-breaker-replacement-surrey-bc", "circuit breaker replacement", "", "Surrey BC", "Medium", "city"),
    row(311, "Electrical Outlet Installation Surrey BC | Call Now", "electrical-outlet-installation-surrey-bc", "electrical outlet installation", "", "Surrey BC", "Medium", "city"),
    row(312, "Electrical Outlet Repair Surrey BC | Call Now", "electrical-outlet-repair-surrey-bc", "electrical outlet repair", "", "Surrey BC", "Medium", "city"),
    row(313, "Commercial Electrician Mississauga | Call Now", "commercial-electrician-mississauga", "commercial electrician", "", "Mississauga", "Medium", "city"),
    row(314, "Commercial Electrical Installation Mississauga | Call Now", "commercial-electrical-installation-mississauga", "commercial electrical installation", "", "Mississauga", "Medium", "city"),
    row(315, "Commercial Electrical Repairs Mississauga | Call Now", "commercial-electrical-repairs-mississauga", "commercial electrical repairs", "", "Mississauga", "Medium", "city"),
    row(316, "EV Charger Installation Mississauga | Call Now", "ev-charger-installation-mississauga", "ev charger installation", "", "Mississauga", "Medium", "city"),
    row(317, "Home EV Charger Installation Mississauga | Call Now", "home-ev-charger-installation-mississauga", "home ev charger installation", "", "Mississauga", "Medium", "city"),
    row(318, "Commercial EV Charger Installation Mississauga | Call Now", "commercial-ev-charger-installation-mississauga", "commercial ev charger installation", "", "Mississauga", "Medium", "city"),
    row(319, "Commercial Lighting Installation Mississauga | Call Now", "commercial-lighting-installation-mississauga", "commercial lighting installation", "", "Mississauga", "Medium", "city"),
    row(320, "Emergency Lighting Installation Mississauga | Call Now", "emergency-lighting-installation-mississauga", "emergency lighting installation", "", "Mississauga", "Medium", "city"),
    row(321, "Pot Light Installation Mississauga | Call Now", "pot-light-installation-mississauga", "pot light installation", "", "Mississauga", "Medium", "city"),
    row(322, "Landscape Lighting Installation Mississauga | Call Now", "landscape-lighting-installation-mississauga", "landscape lighting installation", "", "Mississauga", "Medium", "city"),
    row(323, "Residential Electrician Mississauga | Call Now", "residential-electrician-mississauga", "residential electrician near me", "", "Mississauga", "Medium", "city"),
    row(324, "Home Electrical Repair Mississauga | Call Now", "home-electrical-repair-mississauga", "home electrical repair", "", "Mississauga", "Medium", "city"),
    row(325, "Home Electrical Wiring Mississauga | Call Now", "home-electrical-wiring-mississauga", "home electrical wiring", "", "Mississauga", "Medium", "city"),
    row(326, "Hot Tub Electrical Installation Mississauga | Call Now", "hot-tub-electrical-installation-mississauga", "hot tub electrical installation", "", "Mississauga", "Medium", "city"),
    row(327, "Knob and Tube Wiring Replacement Mississauga | Call Now", "knob-and-tube-wiring-replacement-mississauga", "knob and tube wiring replacement", "", "Mississauga", "Medium", "city"),
    row(328, "Electrical Panel Upgrade Mississauga | Call Now", "electrical-panel-upgrade-mississauga", "electrical panel upgrade", "", "Mississauga", "Medium", "city"),
    row(329, "200 Amp Panel Upgrade Mississauga | Call Now", "200-amp-panel-upgrade-mississauga", "200 amp panel upgrade", "", "Mississauga", "Medium", "city"),
    row(330, "Electrical Panel Replacement Mississauga | Call Now", "electrical-panel-replacement-mississauga", "electrical panel replacement", "", "Mississauga", "Medium", "city"),
    row(331, "Electrical Panel Repair Mississauga | Call Now", "electrical-panel-repair-mississauga", "electrical panel repair", "", "Mississauga", "Medium", "city"),
    row(332, "Fuse Box Replacement Mississauga | Call Now", "fuse-box-replacement-mississauga", "fuse box replacement", "", "Mississauga", "Medium", "city"),
    row(333, "Circuit Breaker Repair Mississauga | Call Now", "circuit-breaker-repair-mississauga", "circuit breaker repair", "", "Mississauga", "Medium", "city"),
    row(334, "Circuit Breaker Replacement Mississauga | Call Now", "circuit-breaker-replacement-mississauga", "circuit breaker replacement", "", "Mississauga", "Medium", "city"),
    row(335, "Electrical Outlet Installation Mississauga | Call Now", "electrical-outlet-installation-mississauga", "electrical outlet installation", "", "Mississauga", "Medium", "city"),
    row(336, "Electrical Outlet Repair Mississauga | Call Now", "electrical-outlet-repair-mississauga", "electrical outlet repair", "", "Mississauga", "Medium", "city"),
    row(337, "Commercial Electrician Toronto | Call Now", "commercial-electrician-toronto", "commercial electrician", "", "Toronto", "Medium", "city"),
    row(338, "Commercial Electrical Installation Toronto | Call Now", "commercial-electrical-installation-toronto", "commercial electrical installation", "", "Toronto", "Medium", "city"),
    row(339, "Commercial Electrical Repairs Toronto | Call Now", "commercial-electrical-repairs-toronto", "commercial electrical repairs", "", "Toronto", "Medium", "city"),
    row(340, "EV Charger Installation Toronto | Call Now", "ev-charger-installation-toronto", "ev charger installation", "", "Toronto", "Medium", "city"),
    row(341, "Home EV Charger Installation Toronto | Call Now", "home-ev-charger-installation-toronto", "home ev charger installation", "", "Toronto", "Medium", "city"),
    row(342, "Commercial EV Charger Installation Toronto | Call Now", "commercial-ev-charger-installation-toronto", "commercial ev charger installation", "", "Toronto", "Medium", "city"),
    row(343, "Commercial Lighting Installation Toronto | Call Now", "commercial-lighting-installation-toronto", "commercial lighting installation", "", "Toronto", "Medium", "city"),
    row(344, "Emergency Lighting Installation Toronto | Call Now", "emergency-lighting-installation-toronto", "emergency lighting installation", "", "Toronto", "Medium", "city"),
    row(345, "Pot Light Installation Toronto | Call Now", "pot-light-installation-toronto", "pot light installation", "", "Toronto", "Medium", "city"),
    row(346, "Landscape Lighting Installation Toronto | Call Now", "landscape-lighting-installation-toronto", "landscape lighting installation", "", "Toronto", "Medium", "city"),
    row(347, "Residential Electrician Toronto | Call Now", "residential-electrician-toronto", "residential electrician near me", "", "Toronto", "Medium", "city"),
    row(348, "Home Electrical Repair Toronto | Call Now", "home-electrical-repair-toronto", "home electrical repair", "", "Toronto", "Medium", "city"),
    row(349, "Home Electrical Wiring Toronto | Call Now", "home-electrical-wiring-toronto", "home electrical wiring", "", "Toronto", "Medium", "city"),
    row(350, "Hot Tub Electrical Installation Toronto | Call Now", "hot-tub-electrical-installation-toronto", "hot tub electrical installation", "", "Toronto", "Medium", "city"),
    row(351, "Knob and Tube Wiring Replacement Toronto | Call Now", "knob-and-tube-wiring-replacement-toronto", "knob and tube wiring replacement", "", "Toronto", "Medium", "city"),
    row(352, "Electrical Panel Upgrade Toronto | Call Now", "electrical-panel-upgrade-toronto", "electrical panel upgrade", "", "Toronto", "Medium", "city"),
    row(353, "200 Amp Panel Upgrade Toronto | Call Now", "200-amp-panel-upgrade-toronto", "200 amp panel upgrade", "", "Toronto", "Medium", "city"),
    row(354, "Electrical Panel Replacement Toronto | Call Now", "electrical-panel-replacement-toronto", "electrical panel replacement", "", "Toronto", "Medium", "city"),
    row(355, "Electrical Panel Repair Toronto | Call Now", "electrical-panel-repair-toronto", "electrical panel repair", "", "Toronto", "Medium", "city"),
    row(356, "Fuse Box Replacement Toronto | Call Now", "fuse-box-replacement-toronto", "fuse box replacement", "", "Toronto", "Medium", "city"),
    row(357, "Circuit Breaker Repair Toronto | Call Now", "circuit-breaker-repair-toronto", "circuit breaker repair", "", "Toronto", "Medium", "city"),
    row(358, "Circuit Breaker Replacement Toronto | Call Now", "circuit-breaker-replacement-toronto", "circuit breaker replacement", "", "Toronto", "Medium", "city"),
    row(359, "Electrical Outlet Installation Toronto | Call Now", "electrical-outlet-installation-toronto", "electrical outlet installation", "", "Toronto", "Medium", "city"),
    row(360, "Electrical Outlet Repair Toronto | Call Now", "electrical-outlet-repair-toronto", "electrical outlet repair", "", "Toronto", "Medium", "city"),
    row(361, "Commercial Electrician Halifax | Call Now", "commercial-electrician-halifax", "commercial electrician", "", "Halifax", "Medium", "city"),
    row(362, "Commercial Electrical Installation Halifax | Call Now", "commercial-electrical-installation-halifax", "commercial electrical installation", "", "Halifax", "Medium", "city"),
    row(363, "Commercial Electrical Repairs Halifax | Call Now", "commercial-electrical-repairs-halifax", "commercial electrical repairs", "", "Halifax", "Medium", "city"),
    row(364, "EV Charger Installation Halifax | Call Now", "ev-charger-installation-halifax", "ev charger installation", "", "Halifax", "Medium", "city"),
    row(365, "Home EV Charger Installation Halifax | Call Now", "home-ev-charger-installation-halifax", "home ev charger installation", "", "Halifax", "Medium", "city"),
    row(366, "Commercial EV Charger Installation Halifax | Call Now", "commercial-ev-charger-installation-halifax", "commercial ev charger installation", "", "Halifax", "Medium", "city"),
    row(367, "Commercial Lighting Installation Halifax | Call Now", "commercial-lighting-installation-halifax", "commercial lighting installation", "", "Halifax", "Medium", "city"),
    row(368, "Emergency Lighting Installation Halifax | Call Now", "emergency-lighting-installation-halifax", "emergency lighting installation", "", "Halifax", "Medium", "city"),
    row(369, "Pot Light Installation Halifax | Call Now", "pot-light-installation-halifax", "pot light installation", "", "Halifax", "Medium", "city"),
    row(370, "Landscape Lighting Installation Halifax | Call Now", "landscape-lighting-installation-halifax", "landscape lighting installation", "", "Halifax", "Medium", "city"),
    row(371, "Residential Electrician Halifax | Call Now", "residential-electrician-halifax", "residential electrician near me", "", "Halifax", "Medium", "city"),
    row(372, "Home Electrical Repair Halifax | Call Now", "home-electrical-repair-halifax", "home electrical repair", "", "Halifax", "Medium", "city"),
    row(373, "Home Electrical Wiring Halifax | Call Now", "home-electrical-wiring-halifax", "home electrical wiring", "", "Halifax", "Medium", "city"),
    row(374, "Hot Tub Electrical Installation Halifax | Call Now", "hot-tub-electrical-installation-halifax", "hot tub electrical installation", "", "Halifax", "Medium", "city"),
    row(375, "Knob and Tube Wiring Replacement Halifax | Call Now", "knob-and-tube-wiring-replacement-halifax", "knob and tube wiring replacement", "", "Halifax", "Medium", "city"),
    row(376, "Electrical Panel Upgrade Halifax | Call Now", "electrical-panel-upgrade-halifax", "electrical panel upgrade", "", "Halifax", "Medium", "city"),
    row(377, "200 Amp Panel Upgrade Halifax | Call Now", "200-amp-panel-upgrade-halifax", "200 amp panel upgrade", "", "Halifax", "Medium", "city"),
    row(378, "Electrical Panel Replacement Halifax | Call Now", "electrical-panel-replacement-halifax", "electrical panel replacement", "", "Halifax", "Medium", "city"),
    row(379, "Electrical Panel Repair Halifax | Call Now", "electrical-panel-repair-halifax", "electrical panel repair", "", "Halifax", "Medium", "city"),
    row(380, "Fuse Box Replacement Halifax | Call Now", "fuse-box-replacement-halifax", "fuse box replacement", "", "Halifax", "Medium", "city"),
    row(381, "Circuit Breaker Repair Halifax | Call Now", "circuit-breaker-repair-halifax", "circuit breaker repair", "", "Halifax", "Medium", "city"),
    row(382, "Circuit Breaker Replacement Halifax | Call Now", "circuit-breaker-replacement-halifax", "circuit breaker replacement", "", "Halifax", "Medium", "city"),
    row(383, "Electrical Outlet Installation Halifax | Call Now", "electrical-outlet-installation-halifax", "electrical outlet installation", "", "Halifax", "Medium", "city"),
    row(384, "Electrical Outlet Repair Halifax | Call Now", "electrical-outlet-repair-halifax", "electrical outlet repair", "", "Halifax", "Medium", "city"),
    row(385, "Commercial Electrician Regina | Call Now", "commercial-electrician-regina", "commercial electrician", "", "Regina", "Medium", "city"),
    row(386, "Commercial Electrical Installation Regina | Call Now", "commercial-electrical-installation-regina", "commercial electrical installation", "", "Regina", "Medium", "city"),
    row(387, "Commercial Electrical Repairs Regina | Call Now", "commercial-electrical-repairs-regina", "commercial electrical repairs", "", "Regina", "Medium", "city"),
    row(388, "EV Charger Installation Regina | Call Now", "ev-charger-installation-regina", "ev charger installation", "", "Regina", "Medium", "city"),
    row(389, "Home EV Charger Installation Regina | Call Now", "home-ev-charger-installation-regina", "home ev charger installation", "", "Regina", "Medium", "city"),
    row(390, "Commercial EV Charger Installation Regina | Call Now", "commercial-ev-charger-installation-regina", "commercial ev charger installation", "", "Regina", "Medium", "city"),
    row(391, "Commercial Lighting Installation Regina | Call Now", "commercial-lighting-installation-regina", "commercial lighting installation", "", "Regina", "Medium", "city"),
    row(392, "Emergency Lighting Installation Regina | Call Now", "emergency-lighting-installation-regina", "emergency lighting installation", "", "Regina", "Medium", "city"),
    row(393, "Pot Light Installation Regina | Call Now", "pot-light-installation-regina", "pot light installation", "", "Regina", "Medium", "city"),
    row(394, "Landscape Lighting Installation Regina | Call Now", "landscape-lighting-installation-regina", "landscape lighting installation", "", "Regina", "Medium", "city"),
    row(395, "Residential Electrician Regina | Call Now", "residential-electrician-regina", "residential electrician near me", "", "Regina", "Medium", "city"),
    row(396, "Home Electrical Repair Regina | Call Now", "home-electrical-repair-regina", "home electrical repair", "", "Regina", "Medium", "city"),
    row(397, "Home Electrical Wiring Regina | Call Now", "home-electrical-wiring-regina", "home electrical wiring", "", "Regina", "Medium", "city"),
    row(398, "Hot Tub Electrical Installation Regina | Call Now", "hot-tub-electrical-installation-regina", "hot tub electrical installation", "", "Regina", "Medium", "city"),
    row(399, "Knob and Tube Wiring Replacement Regina | Call Now", "knob-and-tube-wiring-replacement-regina", "knob and tube wiring replacement", "", "Regina", "Medium", "city"),
    row(400, "Electrical Panel Upgrade Regina | Call Now", "electrical-panel-upgrade-regina", "electrical panel upgrade", "", "Regina", "Medium", "city"),
    row(401, "200 Amp Panel Upgrade Regina | Call Now", "200-amp-panel-upgrade-regina", "200 amp panel upgrade", "", "Regina", "Medium", "city"),
    row(402, "Electrical Panel Replacement Regina | Call Now", "electrical-panel-replacement-regina", "electrical panel replacement", "", "Regina", "Medium", "city"),
    row(403, "Electrical Panel Repair Regina | Call Now", "electrical-panel-repair-regina", "electrical panel repair", "", "Regina", "Medium", "city"),
    row(404, "Fuse Box Replacement Regina | Call Now", "fuse-box-replacement-regina", "fuse box replacement", "", "Regina", "Medium", "city"),
    row(405, "Circuit Breaker Repair Regina | Call Now", "circuit-breaker-repair-regina", "circuit breaker repair", "", "Regina", "Medium", "city"),
    row(406, "Circuit Breaker Replacement Regina | Call Now", "circuit-breaker-replacement-regina", "circuit breaker replacement", "", "Regina", "Medium", "city"),
    row(407, "Electrical Outlet Installation Regina | Call Now", "electrical-outlet-installation-regina", "electrical outlet installation", "", "Regina", "Medium", "city"),
    row(408, "Electrical Outlet Repair Regina | Call Now", "electrical-outlet-repair-regina", "electrical outlet repair", "", "Regina", "Medium", "city"),
    row(409, "Commercial Electrician Vancouver | Call Now", "commercial-electrician-vancouver", "commercial electrician", "", "Vancouver", "Medium", "city"),
    row(410, "Commercial Electrical Installation Vancouver | Call Now", "commercial-electrical-installation-vancouver", "commercial electrical installation", "", "Vancouver", "Medium", "city"),
    row(411, "Commercial Electrical Repairs Vancouver | Call Now", "commercial-electrical-repairs-vancouver", "commercial electrical repairs", "", "Vancouver", "Medium", "city"),
    row(412, "EV Charger Installation Vancouver | Call Now", "ev-charger-installation-vancouver", "ev charger installation", "", "Vancouver", "Medium", "city"),
    row(413, "Home EV Charger Installation Vancouver | Call Now", "home-ev-charger-installation-vancouver", "home ev charger installation", "", "Vancouver", "Medium", "city"),
    row(414, "Commercial EV Charger Installation Vancouver | Call Now", "commercial-ev-charger-installation-vancouver", "commercial ev charger installation", "", "Vancouver", "Medium", "city"),
    row(415, "Commercial Lighting Installation Vancouver | Call Now", "commercial-lighting-installation-vancouver", "commercial lighting installation", "", "Vancouver", "Medium", "city"),
    row(416, "Emergency Lighting Installation Vancouver | Call Now", "emergency-lighting-installation-vancouver", "emergency lighting installation", "", "Vancouver", "Medium", "city"),
    row(417, "Pot Light Installation Vancouver | Call Now", "pot-light-installation-vancouver", "pot light installation", "", "Vancouver", "Medium", "city"),
    row(418, "Landscape Lighting Installation Vancouver | Call Now", "landscape-lighting-installation-vancouver", "landscape lighting installation", "", "Vancouver", "Medium", "city"),
    row(419, "Residential Electrician Vancouver | Call Now", "residential-electrician-vancouver", "residential electrician near me", "", "Vancouver", "Medium", "city"),
    row(420, "Home Electrical Repair Vancouver | Call Now", "home-electrical-repair-vancouver", "home electrical repair", "", "Vancouver", "Medium", "city"),
    row(421, "Home Electrical Wiring Vancouver | Call Now", "home-electrical-wiring-vancouver", "home electrical wiring", "", "Vancouver", "Medium", "city"),
    row(422, "Hot Tub Electrical Installation Vancouver | Call Now", "hot-tub-electrical-installation-vancouver", "hot tub electrical installation", "", "Vancouver", "Medium", "city"),
    row(423, "Knob and Tube Wiring Replacement Vancouver | Call Now", "knob-and-tube-wiring-replacement-vancouver", "knob and tube wiring replacement", "", "Vancouver", "Medium", "city"),
    row(424, "Electrical Panel Upgrade Vancouver | Call Now", "electrical-panel-upgrade-vancouver", "electrical panel upgrade", "", "Vancouver", "Medium", "city"),
    row(425, "200 Amp Panel Upgrade Vancouver | Call Now", "200-amp-panel-upgrade-vancouver", "200 amp panel upgrade", "", "Vancouver", "Medium", "city"),
    row(426, "Electrical Panel Replacement Vancouver | Call Now", "electrical-panel-replacement-vancouver", "electrical panel replacement", "", "Vancouver", "Medium", "city"),
    row(427, "Electrical Panel Repair Vancouver | Call Now", "electrical-panel-repair-vancouver", "electrical panel repair", "", "Vancouver", "Medium", "city"),
    row(428, "Fuse Box Replacement Vancouver | Call Now", "fuse-box-replacement-vancouver", "fuse box replacement", "", "Vancouver", "Medium", "city"),
    row(429, "Circuit Breaker Repair Vancouver | Call Now", "circuit-breaker-repair-vancouver", "circuit breaker repair", "", "Vancouver", "Medium", "city"),
    row(430, "Circuit Breaker Replacement Vancouver | Call Now", "circuit-breaker-replacement-vancouver", "circuit breaker replacement", "", "Vancouver", "Medium", "city"),
    row(431, "Electrical Outlet Installation Vancouver | Call Now", "electrical-outlet-installation-vancouver", "electrical outlet installation", "", "Vancouver", "Medium", "city"),
    row(432, "Electrical Outlet Repair Vancouver | Call Now", "electrical-outlet-repair-vancouver", "electrical outlet repair", "", "Vancouver", "Medium", "city"),
    row(433, "Commercial Electrician Vaughan | Call Now", "commercial-electrician-vaughan", "commercial electrician", "", "Vaughan", "Medium", "city"),
    row(434, "Commercial Electrical Installation Vaughan | Call Now", "commercial-electrical-installation-vaughan", "commercial electrical installation", "", "Vaughan", "Medium", "city"),
    row(435, "Commercial Electrical Repairs Vaughan | Call Now", "commercial-electrical-repairs-vaughan", "commercial electrical repairs", "", "Vaughan", "Medium", "city"),
    row(436, "EV Charger Installation Vaughan | Call Now", "ev-charger-installation-vaughan", "ev charger installation", "", "Vaughan", "Medium", "city"),
    row(437, "Home EV Charger Installation Vaughan | Call Now", "home-ev-charger-installation-vaughan", "home ev charger installation", "", "Vaughan", "Medium", "city"),
    row(438, "Commercial EV Charger Installation Vaughan | Call Now", "commercial-ev-charger-installation-vaughan", "commercial ev charger installation", "", "Vaughan", "Medium", "city"),
    row(439, "Commercial Lighting Installation Vaughan | Call Now", "commercial-lighting-installation-vaughan", "commercial lighting installation", "", "Vaughan", "Medium", "city"),
    row(440, "Emergency Lighting Installation Vaughan | Call Now", "emergency-lighting-installation-vaughan", "emergency lighting installation", "", "Vaughan", "Medium", "city"),
    row(441, "Pot Light Installation Vaughan | Call Now", "pot-light-installation-vaughan", "pot light installation", "", "Vaughan", "Medium", "city"),
    row(442, "Landscape Lighting Installation Vaughan | Call Now", "landscape-lighting-installation-vaughan", "landscape lighting installation", "", "Vaughan", "Medium", "city"),
    row(443, "Residential Electrician Vaughan | Call Now", "residential-electrician-vaughan", "residential electrician near me", "", "Vaughan", "Medium", "city"),
    row(444, "Home Electrical Repair Vaughan | Call Now", "home-electrical-repair-vaughan", "home electrical repair", "", "Vaughan", "Medium", "city"),
    row(445, "Home Electrical Wiring Vaughan | Call Now", "home-electrical-wiring-vaughan", "home electrical wiring", "", "Vaughan", "Medium", "city"),
    row(446, "Hot Tub Electrical Installation Vaughan | Call Now", "hot-tub-electrical-installation-vaughan", "hot tub electrical installation", "", "Vaughan", "Medium", "city"),
    row(447, "Knob and Tube Wiring Replacement Vaughan | Call Now", "knob-and-tube-wiring-replacement-vaughan", "knob and tube wiring replacement", "", "Vaughan", "Medium", "city"),
    row(448, "Electrical Panel Upgrade Vaughan | Call Now", "electrical-panel-upgrade-vaughan", "electrical panel upgrade", "", "Vaughan", "Medium", "city"),
    row(449, "200 Amp Panel Upgrade Vaughan | Call Now", "200-amp-panel-upgrade-vaughan", "200 amp panel upgrade", "", "Vaughan", "Medium", "city"),
    row(450, "Electrical Panel Replacement Vaughan | Call Now", "electrical-panel-replacement-vaughan", "electrical panel replacement", "", "Vaughan", "Medium", "city"),
    row(451, "Electrical Panel Repair Vaughan | Call Now", "electrical-panel-repair-vaughan", "electrical panel repair", "", "Vaughan", "Medium", "city"),
    row(452, "Fuse Box Replacement Vaughan | Call Now", "fuse-box-replacement-vaughan", "fuse box replacement", "", "Vaughan", "Medium", "city"),
    row(453, "Circuit Breaker Repair Vaughan | Call Now", "circuit-breaker-repair-vaughan", "circuit breaker repair", "", "Vaughan", "Medium", "city"),
    row(454, "Circuit Breaker Replacement Vaughan | Call Now", "circuit-breaker-replacement-vaughan", "circuit breaker replacement", "", "Vaughan", "Medium", "city"),
    row(455, "Electrical Outlet Installation Vaughan | Call Now", "electrical-outlet-installation-vaughan", "electrical outlet installation", "", "Vaughan", "Medium", "city"),
    row(456, "Electrical Outlet Repair Vaughan | Call Now", "electrical-outlet-repair-vaughan", "electrical outlet repair", "", "Vaughan", "Medium", "city"),
    row(457, "Commercial Electrician Etobicoke | Call Now", "commercial-electrician-etobicoke", "commercial electrician", "", "Etobicoke", "Medium", "city"),
    row(458, "Commercial Electrical Installation Etobicoke | Call Now", "commercial-electrical-installation-etobicoke", "commercial electrical installation", "", "Etobicoke", "Medium", "city"),
    row(459, "Commercial Electrical Repairs Etobicoke | Call Now", "commercial-electrical-repairs-etobicoke", "commercial electrical repairs", "", "Etobicoke", "Medium", "city"),
    row(460, "EV Charger Installation Etobicoke | Call Now", "ev-charger-installation-etobicoke", "ev charger installation", "", "Etobicoke", "Medium", "city"),
    row(461, "Home EV Charger Installation Etobicoke | Call Now", "home-ev-charger-installation-etobicoke", "home ev charger installation", "", "Etobicoke", "Medium", "city"),
    row(462, "Commercial EV Charger Installation Etobicoke | Call Now", "commercial-ev-charger-installation-etobicoke", "commercial ev charger installation", "", "Etobicoke", "Medium", "city"),
    row(463, "Commercial Lighting Installation Etobicoke | Call Now", "commercial-lighting-installation-etobicoke", "commercial lighting installation", "", "Etobicoke", "Medium", "city"),
    row(464, "Emergency Lighting Installation Etobicoke | Call Now", "emergency-lighting-installation-etobicoke", "emergency lighting installation", "", "Etobicoke", "Medium", "city"),
    row(465, "Pot Light Installation Etobicoke | Call Now", "pot-light-installation-etobicoke", "pot light installation", "", "Etobicoke", "Medium", "city"),
    row(466, "Landscape Lighting Installation Etobicoke | Call Now", "landscape-lighting-installation-etobicoke", "landscape lighting installation", "", "Etobicoke", "Medium", "city"),
    row(467, "Residential Electrician Etobicoke | Call Now", "residential-electrician-etobicoke", "residential electrician near me", "", "Etobicoke", "Medium", "city"),
    row(468, "Home Electrical Repair Etobicoke | Call Now", "home-electrical-repair-etobicoke", "home electrical repair", "", "Etobicoke", "Medium", "city"),
    row(469, "Home Electrical Wiring Etobicoke | Call Now", "home-electrical-wiring-etobicoke", "home electrical wiring", "", "Etobicoke", "Medium", "city"),
    row(470, "Hot Tub Electrical Installation Etobicoke | Call Now", "hot-tub-electrical-installation-etobicoke", "hot tub electrical installation", "", "Etobicoke", "Medium", "city"),
    row(471, "Knob and Tube Wiring Replacement Etobicoke | Call Now", "knob-and-tube-wiring-replacement-etobicoke", "knob and tube wiring replacement", "", "Etobicoke", "Medium", "city"),
    row(472, "Electrical Panel Upgrade Etobicoke | Call Now", "electrical-panel-upgrade-etobicoke", "electrical panel upgrade", "", "Etobicoke", "Medium", "city"),
    row(473, "200 Amp Panel Upgrade Etobicoke | Call Now", "200-amp-panel-upgrade-etobicoke", "200 amp panel upgrade", "", "Etobicoke", "Medium", "city"),
    row(474, "Electrical Panel Replacement Etobicoke | Call Now", "electrical-panel-replacement-etobicoke", "electrical panel replacement", "", "Etobicoke", "Medium", "city"),
    row(475, "Electrical Panel Repair Etobicoke | Call Now", "electrical-panel-repair-etobicoke", "electrical panel repair", "", "Etobicoke", "Medium", "city"),
    row(476, "Fuse Box Replacement Etobicoke | Call Now", "fuse-box-replacement-etobicoke", "fuse box replacement", "", "Etobicoke", "Medium", "city"),
    row(477, "Circuit Breaker Repair Etobicoke | Call Now", "circuit-breaker-repair-etobicoke", "circuit breaker repair", "", "Etobicoke", "Medium", "city"),
    row(478, "Circuit Breaker Replacement Etobicoke | Call Now", "circuit-breaker-replacement-etobicoke", "circuit breaker replacement", "", "Etobicoke", "Medium", "city"),
    row(479, "Electrical Outlet Installation Etobicoke | Call Now", "electrical-outlet-installation-etobicoke", "electrical outlet installation", "", "Etobicoke", "Medium", "city"),
    row(480, "Electrical Outlet Repair Etobicoke | Call Now", "electrical-outlet-repair-etobicoke", "electrical outlet repair", "", "Etobicoke", "Medium", "city"),
    row(481, "Commercial Electrician Barrie | Call Now", "commercial-electrician-barrie", "commercial electrician", "", "Barrie", "Medium", "city"),
    row(482, "Commercial Electrical Installation Barrie | Call Now", "commercial-electrical-installation-barrie", "commercial electrical installation", "", "Barrie", "Medium", "city"),
    row(483, "Commercial Electrical Repairs Barrie | Call Now", "commercial-electrical-repairs-barrie", "commercial electrical repairs", "", "Barrie", "Medium", "city"),
    row(484, "EV Charger Installation Barrie | Call Now", "ev-charger-installation-barrie", "ev charger installation", "", "Barrie", "Medium", "city"),
    row(485, "Home EV Charger Installation Barrie | Call Now", "home-ev-charger-installation-barrie", "home ev charger installation", "", "Barrie", "Medium", "city"),
    row(486, "Commercial EV Charger Installation Barrie | Call Now", "commercial-ev-charger-installation-barrie", "commercial ev charger installation", "", "Barrie", "Medium", "city"),
    row(487, "Commercial Lighting Installation Barrie | Call Now", "commercial-lighting-installation-barrie", "commercial lighting installation", "", "Barrie", "Medium", "city"),
    row(488, "Emergency Lighting Installation Barrie | Call Now", "emergency-lighting-installation-barrie", "emergency lighting installation", "", "Barrie", "Medium", "city"),
    row(489, "Pot Light Installation Barrie | Call Now", "pot-light-installation-barrie", "pot light installation", "", "Barrie", "Medium", "city"),
    row(490, "Landscape Lighting Installation Barrie | Call Now", "landscape-lighting-installation-barrie", "landscape lighting installation", "", "Barrie", "Medium", "city"),
    row(491, "Residential Electrician Barrie | Call Now", "residential-electrician-barrie", "residential electrician near me", "", "Barrie", "Medium", "city"),
    row(492, "Home Electrical Repair Barrie | Call Now", "home-electrical-repair-barrie", "home electrical repair", "", "Barrie", "Medium", "city"),
    row(493, "Home Electrical Wiring Barrie | Call Now", "home-electrical-wiring-barrie", "home electrical wiring", "", "Barrie", "Medium", "city"),
    row(494, "Hot Tub Electrical Installation Barrie | Call Now", "hot-tub-electrical-installation-barrie", "hot tub electrical installation", "", "Barrie", "Medium", "city"),
    row(495, "Knob and Tube Wiring Replacement Barrie | Call Now", "knob-and-tube-wiring-replacement-barrie", "knob and tube wiring replacement", "", "Barrie", "Medium", "city"),
    row(496, "Electrical Panel Upgrade Barrie | Call Now", "electrical-panel-upgrade-barrie", "electrical panel upgrade", "", "Barrie", "Medium", "city"),
    row(497, "200 Amp Panel Upgrade Barrie | Call Now", "200-amp-panel-upgrade-barrie", "200 amp panel upgrade", "", "Barrie", "Medium", "city"),
    row(498, "Electrical Panel Replacement Barrie | Call Now", "electrical-panel-replacement-barrie", "electrical panel replacement", "", "Barrie", "Medium", "city"),
    row(499, "Electrical Panel Repair Barrie | Call Now", "electrical-panel-repair-barrie", "electrical panel repair", "", "Barrie", "Medium", "city"),
    row(500, "Fuse Box Replacement Barrie | Call Now", "fuse-box-replacement-barrie", "fuse box replacement", "", "Barrie", "Medium", "city"),
    row(501, "Circuit Breaker Repair Barrie | Call Now", "circuit-breaker-repair-barrie", "circuit breaker repair", "", "Barrie", "Medium", "city"),
    row(502, "Circuit Breaker Replacement Barrie | Call Now", "circuit-breaker-replacement-barrie", "circuit breaker replacement", "", "Barrie", "Medium", "city"),
    row(503, "Electrical Outlet Installation Barrie | Call Now", "electrical-outlet-installation-barrie", "electrical outlet installation", "", "Barrie", "Medium", "city"),
    row(504, "Electrical Outlet Repair Barrie | Call Now", "electrical-outlet-repair-barrie", "electrical outlet repair", "", "Barrie", "Medium", "city"),
    row(505, "Commercial Electrician Woodbridge | Call Now", "commercial-electrician-woodbridge", "commercial electrician", "", "Woodbridge", "Medium", "city"),
    row(506, "Commercial Electrical Installation Woodbridge | Call Now", "commercial-electrical-installation-woodbridge", "commercial electrical installation", "", "Woodbridge", "Medium", "city"),
    row(507, "Commercial Electrical Repairs Woodbridge | Call Now", "commercial-electrical-repairs-woodbridge", "commercial electrical repairs", "", "Woodbridge", "Medium", "city"),
    row(508, "EV Charger Installation Woodbridge | Call Now", "ev-charger-installation-woodbridge", "ev charger installation", "", "Woodbridge", "Medium", "city"),
    row(509, "Home EV Charger Installation Woodbridge | Call Now", "home-ev-charger-installation-woodbridge", "home ev charger installation", "", "Woodbridge", "Medium", "city"),
    row(510, "Commercial EV Charger Installation Woodbridge | Call Now", "commercial-ev-charger-installation-woodbridge", "commercial ev charger installation", "", "Woodbridge", "Medium", "city"),
    row(511, "Commercial Lighting Installation Woodbridge | Call Now", "commercial-lighting-installation-woodbridge", "commercial lighting installation", "", "Woodbridge", "Medium", "city"),
    row(512, "Emergency Lighting Installation Woodbridge | Call Now", "emergency-lighting-installation-woodbridge", "emergency lighting installation", "", "Woodbridge", "Medium", "city"),
    row(513, "Pot Light Installation Woodbridge | Call Now", "pot-light-installation-woodbridge", "pot light installation", "", "Woodbridge", "Medium", "city"),
    row(514, "Landscape Lighting Installation Woodbridge | Call Now", "landscape-lighting-installation-woodbridge", "landscape lighting installation", "", "Woodbridge", "Medium", "city"),
    row(515, "Residential Electrician Woodbridge | Call Now", "residential-electrician-woodbridge", "residential electrician near me", "", "Woodbridge", "Medium", "city"),
    row(516, "Home Electrical Repair Woodbridge | Call Now", "home-electrical-repair-woodbridge", "home electrical repair", "", "Woodbridge", "Medium", "city"),
    row(517, "Home Electrical Wiring Woodbridge | Call Now", "home-electrical-wiring-woodbridge", "home electrical wiring", "", "Woodbridge", "Medium", "city"),
    row(518, "Hot Tub Electrical Installation Woodbridge | Call Now", "hot-tub-electrical-installation-woodbridge", "hot tub electrical installation", "", "Woodbridge", "Medium", "city"),
    row(519, "Knob and Tube Wiring Replacement Woodbridge | Call Now", "knob-and-tube-wiring-replacement-woodbridge", "knob and tube wiring replacement", "", "Woodbridge", "Medium", "city"),
    row(520, "Electrical Panel Upgrade Woodbridge | Call Now", "electrical-panel-upgrade-woodbridge", "electrical panel upgrade", "", "Woodbridge", "Medium", "city"),
    row(521, "200 Amp Panel Upgrade Woodbridge | Call Now", "200-amp-panel-upgrade-woodbridge", "200 amp panel upgrade", "", "Woodbridge", "Medium", "city"),
    row(522, "Electrical Panel Replacement Woodbridge | Call Now", "electrical-panel-replacement-woodbridge", "electrical panel replacement", "", "Woodbridge", "Medium", "city"),
    row(523, "Electrical Panel Repair Woodbridge | Call Now", "electrical-panel-repair-woodbridge", "electrical panel repair", "", "Woodbridge", "Medium", "city"),
    row(524, "Fuse Box Replacement Woodbridge | Call Now", "fuse-box-replacement-woodbridge", "fuse box replacement", "", "Woodbridge", "Medium", "city"),
    row(525, "Circuit Breaker Repair Woodbridge | Call Now", "circuit-breaker-repair-woodbridge", "circuit breaker repair", "", "Woodbridge", "Medium", "city"),
    row(526, "Circuit Breaker Replacement Woodbridge | Call Now", "circuit-breaker-replacement-woodbridge", "circuit breaker replacement", "", "Woodbridge", "Medium", "city"),
    row(527, "Electrical Outlet Installation Woodbridge | Call Now", "electrical-outlet-installation-woodbridge", "electrical outlet installation", "", "Woodbridge", "Medium", "city"),
    row(528, "Electrical Outlet Repair Woodbridge | Call Now", "electrical-outlet-repair-woodbridge", "electrical outlet repair", "", "Woodbridge", "Medium", "city"),
    row(529, "Commercial Electrician Thornhill | Call Now", "commercial-electrician-thornhill", "commercial electrician", "", "Thornhill", "Medium", "city"),
    row(530, "Commercial Electrical Installation Thornhill | Call Now", "commercial-electrical-installation-thornhill", "commercial electrical installation", "", "Thornhill", "Medium", "city"),
    row(531, "Commercial Electrical Repairs Thornhill | Call Now", "commercial-electrical-repairs-thornhill", "commercial electrical repairs", "", "Thornhill", "Medium", "city"),
    row(532, "EV Charger Installation Thornhill | Call Now", "ev-charger-installation-thornhill", "ev charger installation", "", "Thornhill", "Medium", "city"),
    row(533, "Home EV Charger Installation Thornhill | Call Now", "home-ev-charger-installation-thornhill", "home ev charger installation", "", "Thornhill", "Medium", "city"),
    row(534, "Commercial EV Charger Installation Thornhill | Call Now", "commercial-ev-charger-installation-thornhill", "commercial ev charger installation", "", "Thornhill", "Medium", "city"),
    row(535, "Commercial Lighting Installation Thornhill | Call Now", "commercial-lighting-installation-thornhill", "commercial lighting installation", "", "Thornhill", "Medium", "city"),
    row(536, "Emergency Lighting Installation Thornhill | Call Now", "emergency-lighting-installation-thornhill", "emergency lighting installation", "", "Thornhill", "Medium", "city"),
    row(537, "Pot Light Installation Thornhill | Call Now", "pot-light-installation-thornhill", "pot light installation", "", "Thornhill", "Medium", "city"),
    row(538, "Landscape Lighting Installation Thornhill | Call Now", "landscape-lighting-installation-thornhill", "landscape lighting installation", "", "Thornhill", "Medium", "city"),
    row(539, "Residential Electrician Thornhill | Call Now", "residential-electrician-thornhill", "residential electrician near me", "", "Thornhill", "Medium", "city"),
    row(540, "Home Electrical Repair Thornhill | Call Now", "home-electrical-repair-thornhill", "home electrical repair", "", "Thornhill", "Medium", "city"),
    row(541, "Home Electrical Wiring Thornhill | Call Now", "home-electrical-wiring-thornhill", "home electrical wiring", "", "Thornhill", "Medium", "city"),
    row(542, "Hot Tub Electrical Installation Thornhill | Call Now", "hot-tub-electrical-installation-thornhill", "hot tub electrical installation", "", "Thornhill", "Medium", "city"),
    row(543, "Knob and Tube Wiring Replacement Thornhill | Call Now", "knob-and-tube-wiring-replacement-thornhill", "knob and tube wiring replacement", "", "Thornhill", "Medium", "city"),
    row(544, "Electrical Panel Upgrade Thornhill | Call Now", "electrical-panel-upgrade-thornhill", "electrical panel upgrade", "", "Thornhill", "Medium", "city"),
    row(545, "200 Amp Panel Upgrade Thornhill | Call Now", "200-amp-panel-upgrade-thornhill", "200 amp panel upgrade", "", "Thornhill", "Medium", "city"),
    row(546, "Electrical Panel Replacement Thornhill | Call Now", "electrical-panel-replacement-thornhill", "electrical panel replacement", "", "Thornhill", "Medium", "city"),
    row(547, "Electrical Panel Repair Thornhill | Call Now", "electrical-panel-repair-thornhill", "electrical panel repair", "", "Thornhill", "Medium", "city"),
    row(548, "Fuse Box Replacement Thornhill | Call Now", "fuse-box-replacement-thornhill", "fuse box replacement", "", "Thornhill", "Medium", "city"),
    row(549, "Circuit Breaker Repair Thornhill | Call Now", "circuit-breaker-repair-thornhill", "circuit breaker repair", "", "Thornhill", "Medium", "city"),
    row(550, "Circuit Breaker Replacement Thornhill | Call Now", "circuit-breaker-replacement-thornhill", "circuit breaker replacement", "", "Thornhill", "Medium", "city"),
    row(551, "Electrical Outlet Installation Thornhill | Call Now", "electrical-outlet-installation-thornhill", "electrical outlet installation", "", "Thornhill", "Medium", "city"),
    row(552, "Electrical Outlet Repair Thornhill | Call Now", "electrical-outlet-repair-thornhill", "electrical outlet repair", "", "Thornhill", "Medium", "city"),
    row(553, "Commercial Electrician Abbotsford | Call Now", "commercial-electrician-abbotsford", "commercial electrician", "", "Abbotsford", "Medium", "city"),
    row(554, "Commercial Electrical Installation Abbotsford | Call Now", "commercial-electrical-installation-abbotsford", "commercial electrical installation", "", "Abbotsford", "Medium", "city"),
    row(555, "Commercial Electrical Repairs Abbotsford | Call Now", "commercial-electrical-repairs-abbotsford", "commercial electrical repairs", "", "Abbotsford", "Medium", "city"),
    row(556, "EV Charger Installation Abbotsford | Call Now", "ev-charger-installation-abbotsford", "ev charger installation", "", "Abbotsford", "Medium", "city"),
    row(557, "Home EV Charger Installation Abbotsford | Call Now", "home-ev-charger-installation-abbotsford", "home ev charger installation", "", "Abbotsford", "Medium", "city"),
    row(558, "Commercial EV Charger Installation Abbotsford | Call Now", "commercial-ev-charger-installation-abbotsford", "commercial ev charger installation", "", "Abbotsford", "Medium", "city"),
    row(559, "Commercial Lighting Installation Abbotsford | Call Now", "commercial-lighting-installation-abbotsford", "commercial lighting installation", "", "Abbotsford", "Medium", "city"),
    row(560, "Emergency Lighting Installation Abbotsford | Call Now", "emergency-lighting-installation-abbotsford", "emergency lighting installation", "", "Abbotsford", "Medium", "city"),
    row(561, "Pot Light Installation Abbotsford | Call Now", "pot-light-installation-abbotsford", "pot light installation", "", "Abbotsford", "Medium", "city"),
    row(562, "Landscape Lighting Installation Abbotsford | Call Now", "landscape-lighting-installation-abbotsford", "landscape lighting installation", "", "Abbotsford", "Medium", "city"),
    row(563, "Residential Electrician Abbotsford | Call Now", "residential-electrician-abbotsford", "residential electrician near me", "", "Abbotsford", "Medium", "city"),
    row(564, "Home Electrical Repair Abbotsford | Call Now", "home-electrical-repair-abbotsford", "home electrical repair", "", "Abbotsford", "Medium", "city"),
    row(565, "Home Electrical Wiring Abbotsford | Call Now", "home-electrical-wiring-abbotsford", "home electrical wiring", "", "Abbotsford", "Medium", "city"),
    row(566, "Hot Tub Electrical Installation Abbotsford | Call Now", "hot-tub-electrical-installation-abbotsford", "hot tub electrical installation", "", "Abbotsford", "Medium", "city"),
    row(567, "Knob and Tube Wiring Replacement Abbotsford | Call Now", "knob-and-tube-wiring-replacement-abbotsford", "knob and tube wiring replacement", "", "Abbotsford", "Medium", "city"),
    row(568, "Electrical Panel Upgrade Abbotsford | Call Now", "electrical-panel-upgrade-abbotsford", "electrical panel upgrade", "", "Abbotsford", "Medium", "city"),
    row(569, "200 Amp Panel Upgrade Abbotsford | Call Now", "200-amp-panel-upgrade-abbotsford", "200 amp panel upgrade", "", "Abbotsford", "Medium", "city"),
    row(570, "Electrical Panel Replacement Abbotsford | Call Now", "electrical-panel-replacement-abbotsford", "electrical panel replacement", "", "Abbotsford", "Medium", "city"),
    row(571, "Electrical Panel Repair Abbotsford | Call Now", "electrical-panel-repair-abbotsford", "electrical panel repair", "", "Abbotsford", "Medium", "city"),
    row(572, "Fuse Box Replacement Abbotsford | Call Now", "fuse-box-replacement-abbotsford", "fuse box replacement", "", "Abbotsford", "Medium", "city"),
    row(573, "Circuit Breaker Repair Abbotsford | Call Now", "circuit-breaker-repair-abbotsford", "circuit breaker repair", "", "Abbotsford", "Medium", "city"),
    row(574, "Circuit Breaker Replacement Abbotsford | Call Now", "circuit-breaker-replacement-abbotsford", "circuit breaker replacement", "", "Abbotsford", "Medium", "city"),
    row(575, "Electrical Outlet Installation Abbotsford | Call Now", "electrical-outlet-installation-abbotsford", "electrical outlet installation", "", "Abbotsford", "Medium", "city"),
    row(576, "Electrical Outlet Repair Abbotsford | Call Now", "electrical-outlet-repair-abbotsford", "electrical outlet repair", "", "Abbotsford", "Medium", "city")
];
const NATIONAL_PAGES = PAGES.filter((p)=>p.kind === "national");
const CITY_PAGES = PAGES.filter((p)=>p.kind === "city");
const PHONE_DISPLAY_DEFAULT = "1-800-POWER-CA";
const PHONE_E164_DEFAULT = "+18007693722";
function isPlaceholderPhone(value) {
    return !value || /x{2,}/i.test(value) || value.includes("XXX");
}
const PHONE_DISPLAY = isPlaceholderPhone(process.env.NEXT_PUBLIC_PHONE_DISPLAY) ? PHONE_DISPLAY_DEFAULT : process.env.NEXT_PUBLIC_PHONE_DISPLAY;
const PHONE_E164 = isPlaceholderPhone(process.env.NEXT_PUBLIC_PHONE_E164) ? PHONE_E164_DEFAULT : process.env.NEXT_PUBLIC_PHONE_E164;
const SITE_NAME = "Canada Electrical Pros";
function getPage(slug) {
    return PAGES.find((p)=>p.slug === slug);
}
function cleanTitle(title) {
    return title.split("|")[0].trim();
}
function locationName(page) {
    if (page.area.startsWith("Canada")) return "Canada";
    return page.area.split(",")[0].trim();
}
function serviceBaseSlug(slug) {
    const ordered = [
        ...NATIONAL_PAGES
    ].sort((a, b)=>b.slug.length - a.slug.length);
    for (const p of ordered){
        if (slug === p.slug || slug.startsWith(`${p.slug}-`)) return p.slug;
    }
    return slug;
}
function absoluteUrl(path = "") {
    const root = process.env.NEXT_PUBLIC_SITE_URL || "https://canadaelectricalpros.com";
    return `${root.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1bdgm1f8kfi7i._.js.map