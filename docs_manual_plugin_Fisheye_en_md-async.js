((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Fisheye.en.md'],
{ "docs/manual/plugin/Fisheye.en.md": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("../../node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("../../node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-dev-runtime.js");
var _index = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/API/index.js"));
var _index1 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/Badge/index.js"));
var _index2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/CodeGroup/index.js"));
var _index3 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/Container/index.js"));
var _index4 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/Previewer/index.js"));
var _index5 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/SourceCode/index.js"));
var _index6 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/Table/index.js"));
var _index7 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/Tree/index.js"));
var _index8 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/@antv+dumi-theme-antv@0.8.0-beta.12_@algolia+client-search@5.42.0_@babel+core@7.28.5_@e_ea539378146e0670f62daf9de481569e/node_modules/@antv/dumi-theme-antv/dist/builtins/Playground/index.js"));
var _dumi = __mako_require__(".dumi/tmp/dumi/exports.ts");
__mako_require__("common/api/plugins/fisheye.md?watch=parent");
var _loading = /*#__PURE__*/ _interop_require_default._(__mako_require__(".dumi/tmp/dumi/theme/loading.tsx"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("../../node_modules/.pnpm/react@19.2.0/node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function DumiMarkdownInner() {
    _s();
    const { texts: $$contentTexts } = (0, _dumi.useRouteMeta)();
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
            className: "markdown",
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "overview",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#overview",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 56
                        }, this),
                        "Overview",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Overview",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "use-cases",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#use-cases",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 1562
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 1508
                        }, this),
                        "Use Cases",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Use-Cases",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 1966
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 1835
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 1761
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 1614
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 1489
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 2916
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 2950
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 2912
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "basic-usage",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-usage",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 3066
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 3010
                        }, this),
                        "Basic Usage",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Usage",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 3474
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 3343
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 3269
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 3120
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 2989
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 4420
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[4].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 4452
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "online-experience",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#online-experience",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 4601
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 4539
                        }, this),
                        "Online Experience",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Online-Experience",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 5021
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 4890
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 4816
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 4661
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 4512
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 5997
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 6039
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 5967
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "configuration-options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#configuration-options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 6202
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 6136
                        }, this),
                        "Configuration Options",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Configuration-Options",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 6630
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 6499
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 6425
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 6266
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 6105
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7594
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7628
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7662
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7696
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7730
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 7590
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 7583
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7789
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7824
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7859
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[14].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                                lineNumber: 23,
                                                columnNumber: 7898
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7894
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7942
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 7785
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7986
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8021
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8056
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8091
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8126
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 7982
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8141
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[21].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8206
                                                }, this),
                                                $$contentTexts[22].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[23].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8238
                                                }, this),
                                                $$contentTexts[24].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8303
                                                }, this),
                                                $$contentTexts[25].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[26].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8335
                                                }, this),
                                                $$contentTexts[27].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8400
                                                }, this),
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8432
                                                }, this),
                                                $$contentTexts[30].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8176
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[31].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8506
                                                }, this),
                                                $$contentTexts[32].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[33].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8571
                                                }, this),
                                                $$contentTexts[34].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[35].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8636
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8502
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[36].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                                lineNumber: 23,
                                                columnNumber: 8684
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8680
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8728
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8137
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8743
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8778
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8813
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8848
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8883
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8739
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8898
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8933
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8968
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9003
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9038
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8894
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9053
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9088
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9123
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9158
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9193
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9049
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9208
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9243
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9278
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9313
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9348
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9204
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9363
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9398
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9433
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9468
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9503
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9359
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9518
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9553
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9588
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9623
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9658
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9514
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9673
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[62].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9738
                                                }, this),
                                                $$contentTexts[63].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[64].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9770
                                                }, this),
                                                $$contentTexts[65].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9835
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9867
                                                }, this),
                                                $$contentTexts[68].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9708
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9941
                                                }, this),
                                                $$contentTexts[70].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[71].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10006
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9937
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10050
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10085
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9669
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10100
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[74].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10165
                                                }, this),
                                                $$contentTexts[75].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[76].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10197
                                                }, this),
                                                $$contentTexts[77].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10262
                                                }, this),
                                                $$contentTexts[78].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[79].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10294
                                                }, this),
                                                $$contentTexts[80].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10135
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[81].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10368
                                                }, this),
                                                $$contentTexts[82].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[83].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10433
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10364
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[84].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10477
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10512
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10096
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10527
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10562
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10597
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10632
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10667
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10523
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10682
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[90].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#style",
                                                    children: $$contentTexts[91].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10747
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10717
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10803
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10838
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10873
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10678
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10888
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10923
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/manual/element/node/base-node#style",
                                                    children: $$contentTexts[96].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10962
                                                }, this),
                                                $$contentTexts[97].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[98].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11072
                                                }, this),
                                                $$contentTexts[99].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/manual/element/node/base-node#style",
                                                    children: $$contentTexts[100].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11203
                                                }, this),
                                                $$contentTexts[101].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10958
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[102].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                                lineNumber: 23,
                                                columnNumber: 11324
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11320
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11369
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10884
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[103].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11384
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[104].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11420
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[105].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11456
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11492
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11528
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 11380
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 7778
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 7576
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 11620
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 11570
                        }, this),
                        "style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "style",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 12016
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 11885
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 11811
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 11668
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 11555
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[107].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 12962
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[108].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 13014
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[109].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 13050
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[110].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 13086
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[111].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 13122
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 13010
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 13003
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13182
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13218
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13254
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[115].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                                lineNumber: 23,
                                                columnNumber: 13294
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13290
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 13178
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13348
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13384
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[118].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13420
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[119].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                                lineNumber: 23,
                                                columnNumber: 13460
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13456
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 13344
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[120].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13514
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[121].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13550
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13586
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[123].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13622
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 13510
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13667
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13739
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13775
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 13663
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13820
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13856
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13892
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13928
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 13816
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 13973
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14009
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14045
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14081
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 13969
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14126
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14162
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[138].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14202
                                                }, this),
                                                $$contentTexts[139].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[140].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14269
                                                }, this),
                                                $$contentTexts[141].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[142].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14336
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14198
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[143].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14381
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 14122
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14426
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[145].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14462
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[146].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14502
                                                }, this),
                                                $$contentTexts[147].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[148].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14569
                                                }, this),
                                                $$contentTexts[149].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[150].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14636
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14498
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14681
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 14422
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14726
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14762
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14798
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14834
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 14722
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14879
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14915
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14951
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 14987
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 14875
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[160].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15032
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[161].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15068
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15104
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15140
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15028
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15185
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15221
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15257
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15293
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15181
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 13171
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 12996
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[168].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/manual/element/node/base-node#style",
                            children: $$contentTexts[169].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 15380
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 15350
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "zoom-control",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#zoom-control",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 15548
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 15491
                        }, this),
                        "Zoom Control",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Zoom-Control",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15958
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15827
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 15753
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 15603
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 15469
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[170].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 16907
                        }, this),
                        $$contentTexts[171].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[172].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 16974
                        }, this),
                        $$contentTexts[173].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 16904
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[174].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 17045
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[175].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[176].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 17137
                        }, this),
                        $$contentTexts[177].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[178].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 17204
                        }, this),
                        $$contentTexts[179].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[180].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 17271
                        }, this),
                        $$contentTexts[181].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[182].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 17338
                        }, this),
                        $$contentTexts[183].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[184].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 17405
                        }, this),
                        $$contentTexts[185].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[186].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 17472
                        }, this),
                        $$contentTexts[187].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[188].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 17539
                        }, this),
                        $$contentTexts[189].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[190].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 17606
                        }, this),
                        $$contentTexts[191].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[192].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 17673
                        }, this),
                        $$contentTexts[193].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[194].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 17740
                        }, this),
                        $$contentTexts[195].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[196].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 17807
                        }, this),
                        $$contentTexts[197].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 17107
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "code-examples",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#code-examples",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 17959
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 17901
                        }, this),
                        "Code Examples",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Code-Examples",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 18371
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18240
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 18166
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 18015
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 17878
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "basic-usage-1",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-usage-1",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 19398
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 19340
                        }, this),
                        "Basic Usage",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Usage",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 19806
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19675
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 19601
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 19452
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 19317
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[198].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 20752
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[199].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 20786
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "custom-styles",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#custom-styles",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 20929
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 20871
                        }, this),
                        "Custom Styles",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Custom-Styles",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 21341
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 21210
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 21136
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 20985
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 20848
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[200].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 22287
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[201].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 22321
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[202].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 22383
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 22447
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[203].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 22503
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 22417
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "practical-examples",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#practical-examples",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 22662
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 22599
                        }, this),
                        "Practical Examples",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Practical-Examples",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.en.md",
                                        lineNumber: 23,
                                        columnNumber: 23084
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.en.md",
                                    lineNumber: 23,
                                    columnNumber: 22953
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.en.md",
                                lineNumber: 23,
                                columnNumber: 22879
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 22723
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 22571
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 24060
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[204].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.en.md",
                            lineNumber: 23,
                            columnNumber: 24104
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.en.md",
                    lineNumber: 23,
                    columnNumber: 24030
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/plugin/Fisheye.en.md",
            lineNumber: 23,
            columnNumber: 12
        }, this)
    }, void 0, false);
}
_s(DumiMarkdownInner, "EsmAA1S45Kg2SXhnbajAzasObB8=", false, function() {
    return [
        _dumi.useRouteMeta
    ];
});
_c = DumiMarkdownInner;
// export named function for fastRefresh
// ref: https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#edits-always-lead-to-full-reload
function DumiMarkdownContent() {
    // wrap suspense for catch async meta data
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.DumiPage, {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_react.Suspense, {
            fallback: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_loading.default, {}, void 0, false, {
                fileName: "docs/manual/plugin/Fisheye.en.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/plugin/Fisheye.en.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/plugin/Fisheye.en.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/plugin/Fisheye.en.md",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c1 = DumiMarkdownContent;
var _default = DumiMarkdownContent;
var _c;
var _c1;
$RefreshReg$(_c, "DumiMarkdownInner");
$RefreshReg$(_c1, "DumiMarkdownContent");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
 }]);
//# sourceMappingURL=docs_manual_plugin_Fisheye_en_md-async.js.map