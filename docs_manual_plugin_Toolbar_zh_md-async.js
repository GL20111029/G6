((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Toolbar.zh.md'],
{ "docs/manual/plugin/Toolbar.zh.md": function (module, exports, __mako_require__){
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
                    id: "概述",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#概述",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 50
                        }, this),
                        "概述",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "概述",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "使用场景",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#使用场景",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 1528
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 1479
                        }, this),
                        "使用场景",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "使用场景",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1922
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1791
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 1717
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 1575
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 1465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 2868
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[2].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                        lineNumber: 21,
                        columnNumber: 2904
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 2900
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "基本用法",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基本用法",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 3006
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 2957
                        }, this),
                        "基本用法",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基本用法",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3400
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3269
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 3195
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 3053
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 2943
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 4346
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[4].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 4378
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "配置项",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#配置项",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 4499
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 4451
                        }, this),
                        "配置项",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "配置项",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4891
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4760
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 4686
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 4545
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 4438
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[5].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5855
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5889
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5923
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5957
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5991
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 5851
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 5844
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6049
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6084
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6119
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[13].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6158
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6154
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6202
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6045
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6246
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6281
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6316
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6351
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6386
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6242
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6401
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6436
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6471
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6506
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6541
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6397
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6556
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[24].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#position",
                                                    children: $$contentTexts[25].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6621
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6591
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6680
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[27].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6719
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6715
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6763
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6552
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6778
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[29].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#style-%E5%B1%9E%E6%80%A7",
                                                    children: $$contentTexts[30].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6843
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6813
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                href: "https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration",
                                                children: $$contentTexts[31].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6922
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6918
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7036
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7071
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6774
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7086
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7121
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[35].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#toolbaritem",
                                                    children: $$contentTexts[36].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7186
                                                }, this),
                                                $$contentTexts[37].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#toolbaritem",
                                                    children: $$contentTexts[38].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7269
                                                }, this),
                                                $$contentTexts[39].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7156
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7357
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7392
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7082
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7436
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7471
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7506
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7541
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7576
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7432
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 6038
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 5837
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "position",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#position",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 7674
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 7621
                        }, this),
                        "position",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "position",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8076
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7945
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 7871
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 7725
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 7603
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[46].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 9025
                        }, this),
                        $$contentTexts[47].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 9022
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[48].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9102
                                }, this),
                                $$contentTexts[49].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 9098
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[50].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9176
                                }, this),
                                $$contentTexts[51].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 9172
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[52].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9250
                                }, this),
                                $$contentTexts[53].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 9246
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[54].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9324
                                }, this),
                                $$contentTexts[55].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 9320
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[56].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9398
                                }, this),
                                $$contentTexts[57].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 9394
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[58].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9472
                                }, this),
                                $$contentTexts[59].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 9468
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[60].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9546
                                }, this),
                                $$contentTexts[61].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 9542
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[62].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9620
                                }, this),
                                $$contentTexts[63].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 9616
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 9094
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "style-属性",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#style-属性",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 9766
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 9713
                        }, this),
                        "style 属性",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "style-属性",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10168
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10037
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 9963
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 9817
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 9695
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[64].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11132
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[65].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11167
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[66].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11202
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[67].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11237
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 11128
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 11121
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11296
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11331
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11366
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[71].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11405
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11401
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11292
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11458
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11493
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11528
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[75].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11567
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11563
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11454
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11620
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11655
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11690
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[79].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11729
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11725
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11616
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[80].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11782
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[81].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11817
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11852
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[83].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11891
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11887
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11778
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[84].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11944
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11979
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12014
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[87].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12053
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12049
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11940
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12106
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12141
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12176
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12211
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12102
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12255
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12290
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12325
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[95].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12364
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12360
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12251
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12417
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12452
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12487
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[99].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12526
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12522
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12413
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 11285
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 11114
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "toolbaritem",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#toolbaritem",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 12668
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 12612
                        }, this),
                        "ToolbarItem",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ToolbarItem",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13076
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12945
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 12871
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 12722
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 12591
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[100].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 14022
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[101].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14074
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[102].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14110
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[103].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14146
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[104].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14182
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 14070
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 14063
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[105].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14242
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[106].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#%E5%86%85%E7%BD%AE%E5%9B%BE%E6%A0%87",
                                                    children: $$contentTexts[107].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14309
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14278
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[108].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14401
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14397
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14446
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14238
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14491
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14527
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[112].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14567
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14563
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14612
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14487
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 14231
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 14056
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "内置图标",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#内置图标",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 14732
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 14683
                        }, this),
                        "内置图标",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "内置图标",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15126
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14995
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 14921
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 14779
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 14669
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[114].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 16072
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[115].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16114
                                }, this),
                                $$contentTexts[116].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 16110
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[117].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16190
                                }, this),
                                $$contentTexts[118].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 16186
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[119].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16266
                                }, this),
                                $$contentTexts[120].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 16262
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[121].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16342
                                }, this),
                                $$contentTexts[122].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 16338
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[123].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16418
                                }, this),
                                $$contentTexts[124].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 16414
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[125].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16494
                                }, this),
                                $$contentTexts[126].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 16490
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[127].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16570
                                }, this),
                                $$contentTexts[128].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 16566
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[129].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16646
                                }, this),
                                $$contentTexts[130].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 16642
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[131].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16722
                                }, this),
                                $$contentTexts[132].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 16718
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[133].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16798
                                }, this),
                                $$contentTexts[134].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 16794
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[135].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16874
                                }, this),
                                $$contentTexts[136].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 16870
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 16106
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "自定义图标",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#自定义图标",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 17016
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 16966
                        }, this),
                        "自定义图标",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "自定义图标",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17412
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17281
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 17207
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 17064
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 16951
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[137].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 18358
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[138].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 18392
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[139].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[140].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 18496
                            }, this),
                            $$contentTexts[141].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                        lineNumber: 21,
                        columnNumber: 18466
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 18454
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "代码示例",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#代码示例",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 18643
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 18594
                        }, this),
                        "代码示例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "代码示例",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19037
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18906
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 18832
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 18690
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 18580
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "基础工具栏",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基础工具栏",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 20048
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 19998
                        }, this),
                        "基础工具栏",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基础工具栏",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20444
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20313
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 20239
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 20096
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 19983
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[142].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 21390
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "自定义样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#自定义样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 21517
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 21467
                        }, this),
                        "自定义样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "自定义样式",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21913
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21782
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 21708
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 21565
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 21452
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[143].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 22859
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: $$contentTexts[144].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 22933
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[145].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22975
                                        }, this),
                                        $$contentTexts[146].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22971
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23051
                                        }, this),
                                        $$contentTexts[148].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23047
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23127
                                        }, this),
                                        $$contentTexts[150].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23194
                                        }, this),
                                        $$contentTexts[152].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23261
                                        }, this),
                                        $$contentTexts[154].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23123
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23337
                                        }, this),
                                        $$contentTexts[156].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23333
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23413
                                        }, this),
                                        $$contentTexts[158].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23409
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23489
                                        }, this),
                                        $$contentTexts[160].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23485
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[161].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23565
                                        }, this),
                                        $$contentTexts[162].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23561
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23641
                                        }, this),
                                        $$contentTexts[164].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23708
                                        }, this),
                                        $$contentTexts[166].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23637
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23784
                                        }, this),
                                        $$contentTexts[168].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23780
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23860
                                        }, this),
                                        $$contentTexts[170].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23856
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 22967
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 22921
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[171].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[172].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 23980
                        }, this),
                        $$contentTexts[173].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[174].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 24047
                        }, this),
                        $$contentTexts[175].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 23950
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "异步加载工具栏项",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#异步加载工具栏项",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 24189
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 24136
                        }, this),
                        "异步加载工具栏项",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "异步加载工具栏项",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24591
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24460
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 24386
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 24240
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 24118
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[176].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 25537
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "常见问题",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#常见问题",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 25662
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 25613
                        }, this),
                        "常见问题",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "常见问题",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26056
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25925
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 25851
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 25709
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 25599
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "1-工具栏图标不显示",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#1-工具栏图标不显示",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 27077
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 27022
                        }, this),
                        "1. 工具栏图标不显示？",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "1.-工具栏图标不显示？",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 27487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 27282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 27132
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 27002
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[177].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 28437
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[178].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 28473
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 28433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "2-如何结合其他插件使用",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#2-如何结合其他插件使用",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 28593
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 28536
                        }, this),
                        "2. 如何结合其他插件使用？",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "2.-如何结合其他插件使用？",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29007
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 28876
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 28802
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 28650
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 28514
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[179].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 29953
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[180].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 29987
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "3-如何动态更新工具栏",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#3-如何动态更新工具栏",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 30126
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 30070
                        }, this),
                        "3. 如何动态更新工具栏？",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "3.-如何动态更新工具栏？",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30538
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 30407
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 30333
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 30182
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 30049
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[181].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[182].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 31514
                        }, this),
                        $$contentTexts[183].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 31484
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[184].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 31585
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "实际案例",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#实际案例",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 31710
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 31661
                        }, this),
                        "实际案例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "实际案例",
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
                                        fileName: "docs/manual/plugin/Toolbar.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32104
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 31973
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.zh.md",
                                lineNumber: 21,
                                columnNumber: 31899
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 31757
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 31647
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 33080
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[185].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.zh.md",
                            lineNumber: 21,
                            columnNumber: 33124
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.zh.md",
                    lineNumber: 21,
                    columnNumber: 33050
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/plugin/Toolbar.zh.md",
            lineNumber: 21,
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
                fileName: "docs/manual/plugin/Toolbar.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/plugin/Toolbar.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/plugin/Toolbar.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/plugin/Toolbar.zh.md",
        lineNumber: 28,
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
//# sourceMappingURL=docs_manual_plugin_Toolbar_zh_md-async.js.map