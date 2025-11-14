((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/edge/Polyline.zh.md'],
{ "docs/manual/element/edge/Polyline.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/elements/edges/polyline.md?watch=parent");
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
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
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
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 1465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: $$contentTexts[2].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 1505
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 1501
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: $$contentTexts[3].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 1546
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 1542
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 1497
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "在线体验",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#在线体验",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 1651
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 1602
                        }, this),
                        "在线体验",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "在线体验",
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
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 2045
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1914
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 1840
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 1698
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 1588
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 3021
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 3063
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 2991
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[5].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[6].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 3157
                        }, this),
                        $$contentTexts[7].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[8].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 3220
                        }, this),
                        $$contentTexts[9].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 3129
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "样式配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#样式配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 3350
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 3301
                        }, this),
                        "样式配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "样式配置",
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
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 3744
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 3613
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 3539
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 3397
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 3287
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[10].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/edge/base-edge",
                                children: $$contentTexts[11].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 4731
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                        lineNumber: 23,
                        columnNumber: 4702
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 4690
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 4841
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 4876
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 4911
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 4946
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 4981
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 4837
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 4830
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5040
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5075
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#point",
                                                    children: $$contentTexts[19].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 5114
                                                }, this),
                                                $$contentTexts[20].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5110
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5196
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5231
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 5036
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5246
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5281
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5316
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5351
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5386
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 5242
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5401
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5436
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#orthrouter",
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 5501
                                                }, this),
                                                $$contentTexts[30].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#shortestpathrouter",
                                                    children: $$contentTexts[31].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 5583
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5471
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5652
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 5687
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 5397
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 5029
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 4823
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "orthrouter",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#orthrouter",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 5789
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 5734
                        }, this),
                        "OrthRouter",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "OrthRouter",
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
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6195
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 6064
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 5990
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 5842
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 5714
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[33].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7159
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[34].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7194
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[35].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7229
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[36].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7264
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 7155
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 7148
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7323
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7358
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[39].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 7397
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7393
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7441
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7319
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7485
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7520
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#padding",
                                                children: $$contentTexts[43].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 7559
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7555
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[44].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 7621
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7617
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7481
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 7312
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 7141
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "shortestpathrouter",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#shortestpathrouter",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 7777
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 7714
                        }, this),
                        "ShortestPathRouter",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ShortestPathRouter",
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
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 8199
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8068
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 7994
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 7838
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 7686
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[45].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 9163
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 9198
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[47].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 9233
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[48].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 9268
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 9159
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 9152
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9327
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9392
                                                }, this),
                                                $$contentTexts[52].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9362
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[53].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9466
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9462
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9510
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9323
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9554
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9589
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#padding",
                                                children: $$contentTexts[57].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9628
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9624
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9686
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9550
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9730
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9765
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9800
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9835
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9726
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9879
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9914
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[65].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9949
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9984
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9875
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10028
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10063
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#direction",
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10102
                                                }, this),
                                                $$contentTexts[70].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10098
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10188
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10024
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10232
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10267
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#direction",
                                                    children: $$contentTexts[74].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10306
                                                }, this),
                                                $$contentTexts[75].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10302
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10392
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10228
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10436
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10471
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[79].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#direction",
                                                    children: $$contentTexts[80].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10536
                                                }, this),
                                                $$contentTexts[81].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10506
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10622
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10432
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[83].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10666
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[84].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10701
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10736
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10771
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10662
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10815
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10850
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[89].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#point",
                                                    children: $$contentTexts[90].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10915
                                                }, this),
                                                $$contentTexts[91].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#point",
                                                    children: $$contentTexts[92].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10992
                                                }, this),
                                                $$contentTexts[93].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10885
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11074
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10811
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11118
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11153
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11188
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11223
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11114
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11267
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11302
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11338
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[102].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11374
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11263
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 9316
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 9145
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "direction",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#direction",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 11504
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 11450
                        }, this),
                        "Direction",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Direction",
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
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 11908
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11777
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 11703
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 11556
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 11431
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[103].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 12854
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "point",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#point",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 12989
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 12939
                        }, this),
                        "Point",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Point",
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
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 13385
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13254
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 13180
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 13037
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 12924
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[104].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 14331
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "padding",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#padding",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 14470
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 14418
                        }, this),
                        "Padding",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Padding",
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
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 14870
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14739
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 14665
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 14520
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 14401
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[105].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 15816
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "示例",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#示例",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 15945
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 15898
                        }, this),
                        "示例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "示例",
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
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 16335
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16204
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 16130
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 15990
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 15886
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "内置折线边效果",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#内置折线边效果",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 17350
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 17298
                        }, this),
                        "内置折线边效果",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "内置折线边效果",
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
                                        fileName: "docs/manual/element/edge/Polyline.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 17750
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17619
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.zh.md",
                                lineNumber: 23,
                                columnNumber: 17545
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 17400
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 17281
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 18726
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[106].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.zh.md",
                            lineNumber: 23,
                            columnNumber: 18770
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.zh.md",
                    lineNumber: 23,
                    columnNumber: 18696
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/element/edge/Polyline.zh.md",
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
                fileName: "docs/manual/element/edge/Polyline.zh.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/element/edge/Polyline.zh.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/element/edge/Polyline.zh.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/element/edge/Polyline.zh.md",
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
//# sourceMappingURL=docs_manual_element_edge_Polyline_zh_md-async.js.map