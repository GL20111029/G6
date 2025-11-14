((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/AntvDagreLayout.zh.md'],
{ "docs/manual/layout/AntvDagreLayout.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/dagrejs/dagre/wiki",
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1461
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1563
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1626
                        }, this),
                        $$contentTexts[6].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[7].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1689
                        }, this),
                        $$contentTexts[8].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/examples#layout-dagre",
                            children: $$contentTexts[9].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1752
                        }, this),
                        $$contentTexts[10].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/dagrejs/dagre/blob/master/lib/layout.js",
                            children: $$contentTexts[11].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1844
                        }, this),
                        $$contentTexts[12].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/dagrejs/dagre/wiki",
                            children: $$contentTexts[13].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1969
                        }, this),
                        $$contentTexts[14].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*2uMmRo5wYPUAAAAAAAAAAABkARQnAQ",
                    width: "350",
                    alt: "Dagre布局"
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 2077
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "配置方式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#配置方式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 2265
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 2216
                        }, this),
                        "配置方式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "配置方式",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2659
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2528
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 2454
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 2312
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 2202
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[15].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3605
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
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3727
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3679
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4119
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3988
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3914
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3773
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3666
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[16].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[17].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 5106
                            }, this),
                            $$contentTexts[18].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://github.com/dagrejs/dagre/wiki#configuring-the-layout",
                                children: $$contentTexts[19].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 5171
                            }, this),
                            $$contentTexts[20].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 5077
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5065
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i3/O1CN01OpQHBZ1HcpZuWZLS7_!!6000000000779-0-tps-1274-1234.jpg",
                    width: "400",
                    alt: "Dagre 布局配置项图解"
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5315
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5473
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5508
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5543
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5578
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5613
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 5469
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5462
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5672
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5707
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[28].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5746
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5742
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5790
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5825
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5668
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5869
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5904
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[33].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5943
                                                }, this),
                                                $$contentTexts[34].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[35].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6008
                                                }, this),
                                                $$contentTexts[36].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[37].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6073
                                                }, this),
                                                $$contentTexts[38].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6138
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5939
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[40].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6186
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6182
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6230
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5865
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6245
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6280
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[43].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6319
                                                }, this),
                                                $$contentTexts[44].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[45].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6384
                                                }, this),
                                                $$contentTexts[46].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6449
                                                }, this),
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6514
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6315
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[50].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6562
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6558
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6606
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6241
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6621
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6686
                                                }, this),
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[55].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6751
                                                }, this),
                                                $$contentTexts[56].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[57].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6816
                                                }, this),
                                                $$contentTexts[58].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[59].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6881
                                                }, this),
                                                $$contentTexts[60].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6656
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6951
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6986
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7021
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6617
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7036
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7101
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7166
                                                }, this),
                                                $$contentTexts[68].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7231
                                                }, this),
                                                $$contentTexts[70].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[71].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7296
                                                }, this),
                                                $$contentTexts[72].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7071
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7366
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7401
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7407
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7032
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7422
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[75].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[76].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7487
                                                }, this),
                                                $$contentTexts[77].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[78].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7552
                                                }, this),
                                                $$contentTexts[79].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[80].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7617
                                                }, this),
                                                $$contentTexts[81].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[82].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7682
                                                }, this),
                                                $$contentTexts[83].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7457
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[84].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7752
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7787
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7822
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7418
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7837
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[87].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[88].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7902
                                                }, this),
                                                $$contentTexts[89].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[90].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7967
                                                }, this),
                                                $$contentTexts[91].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[92].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8032
                                                }, this),
                                                $$contentTexts[93].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[94].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8097
                                                }, this),
                                                $$contentTexts[95].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7872
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8167
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8202
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8208
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7833
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8223
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[98].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[99].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8288
                                                }, this),
                                                $$contentTexts[100].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[101].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8354
                                                }, this),
                                                $$contentTexts[102].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[103].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8421
                                                }, this),
                                                $$contentTexts[104].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8258
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[105].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8497
                                                }, this),
                                                $$contentTexts[106].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[107].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8564
                                                }, this),
                                                $$contentTexts[108].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[109].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8631
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8493
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[110].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8680
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8676
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8725
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8219
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8740
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[112].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[113].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8807
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8776
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8852
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8888
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8924
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8736
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8939
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[117].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[118].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 9006
                                                }, this),
                                                $$contentTexts[119].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[120].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 9073
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8975
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[121].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9118
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9154
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9190
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8935
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[123].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9205
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9241
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9277
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9313
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9319
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9201
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9334
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9370
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9406
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9442
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9478
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9330
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9493
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9529
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9565
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9601
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9637
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9489
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9652
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9688
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9724
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9760
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9766
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9648
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9781
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[138].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[139].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 9848
                                                }, this),
                                                $$contentTexts[140].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9817
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[141].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9920
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[142].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9956
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9992
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9777
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[143].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10007
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[144].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[145].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10074
                                                }, this),
                                                $$contentTexts[146].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10043
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10146
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10182
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10188
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10003
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10203
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10239
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10275
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10311
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10317
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10199
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5661
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5455
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "align",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#align",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10409
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10359
                        }, this),
                        "align",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "align",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10805
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10674
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10600
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10457
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10344
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[151].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 11766
                            }, this),
                            $$contentTexts[152].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[153].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 11829
                            }, this),
                            $$contentTexts[154].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[155].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 11900
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 11763
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 11751
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[156].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 11957
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[157].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11999
                                }, this),
                                $$contentTexts[158].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11995
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[159].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12075
                                }, this),
                                $$contentTexts[160].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12071
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[161].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12151
                                }, this),
                                $$contentTexts[162].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12147
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[163].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12227
                                }, this),
                                $$contentTexts[164].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12223
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 11991
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "rankdir",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#rankdir",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12373
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12321
                        }, this),
                        "rankdir",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "rankdir",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12773
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12642
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12568
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12423
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12304
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[165].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 13734
                            }, this),
                            $$contentTexts[166].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[167].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 13797
                            }, this),
                            $$contentTexts[168].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[169].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 13868
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 13731
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 13719
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[170].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 13925
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[171].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13967
                                }, this),
                                $$contentTexts[172].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13963
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[173].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14043
                                }, this),
                                $$contentTexts[174].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14039
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[175].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14119
                                }, this),
                                $$contentTexts[176].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14115
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[177].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14195
                                }, this),
                                $$contentTexts[178].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14191
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 13959
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "ranker",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#ranker",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14339
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14288
                        }, this),
                        "ranker",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ranker",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14737
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14606
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14532
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14388
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14272
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[179].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15702
                                }, this),
                                $$contentTexts[180].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[181].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15769
                                }, this),
                                $$contentTexts[182].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[183].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15836
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15698
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 15695
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15683
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[184].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15898
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "ranksep",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#ranksep",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 16001
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15949
                        }, this),
                        "ranksep",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ranksep",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16401
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16270
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 16196
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 16051
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15932
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[185].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17362
                            }, this),
                            $$contentTexts[186].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[187].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17425
                            }, this),
                            $$contentTexts[188].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 17359
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17347
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[189].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17513
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[190].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17547
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "ranksepfunc",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#ranksepfunc",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17658
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17602
                        }, this),
                        "ranksepFunc",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ranksepFunc",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18066
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17935
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17861
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17712
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17581
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[191].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19027
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 19024
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19012
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[192].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19080
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[193].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19114
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "nodesep",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodesep",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 19217
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19165
                        }, this),
                        "nodesep",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "nodesep",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19617
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19486
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 19412
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19267
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19148
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[194].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 20578
                            }, this),
                            $$contentTexts[195].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[196].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 20641
                            }, this),
                            $$contentTexts[197].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 20575
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 20563
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[198].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 20729
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[199].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 20763
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "nodesepfunc",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodesepfunc",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 20874
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 20818
                        }, this),
                        "nodesepFunc",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "nodesepFunc",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21282
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21151
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 21077
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 20928
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 20797
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[200].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 22243
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 22240
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 22228
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[201].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 22296
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[202].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 22330
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "begin",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#begin",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 22429
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 22379
                        }, this),
                        "begin",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "begin",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22825
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22694
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 22620
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 22477
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 22364
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[203].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 23786
                            }, this),
                            $$contentTexts[204].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[205].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 23849
                            }, this),
                            $$contentTexts[206].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 23783
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 23771
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[207].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 23937
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "controlpoints",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#controlpoints",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 24052
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23994
                        }, this),
                        "controlPoints",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "controlPoints",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24464
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24333
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 24259
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 24108
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 23971
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[208].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 25425
                            }, this),
                            $$contentTexts[209].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[210].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 25488
                            }, this),
                            $$contentTexts[211].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 25422
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 25410
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[212].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[213].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 25606
                        }, this),
                        $$contentTexts[214].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[215].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 25673
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 25576
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "edgelabelspace",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#edgelabelspace",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 25800
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 25741
                        }, this),
                        "edgeLabelSpace",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "edgeLabelSpace",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26214
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26083
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 26009
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 25857
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 25717
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[216].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 27175
                            }, this),
                            $$contentTexts[217].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[218].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 27238
                            }, this),
                            $$contentTexts[219].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 27172
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 27160
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[220].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 27326
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[221].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 27360
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "focusnode",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#focusnode",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 27467
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 27413
                        }, this),
                        "focusNode",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "focusNode",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 27871
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27740
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 27666
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 27519
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 27394
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[222].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 28832
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 28829
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 28817
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[223].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[224].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 28915
                        }, this),
                        $$contentTexts[225].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 28885
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[226].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 28990
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[227].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 29026
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[228].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 29062
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 28986
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "nodeorder",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodeorder",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 29176
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 29122
                        }, this),
                        "nodeOrder",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "nodeOrder",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29580
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 29449
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 29375
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 29228
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 29103
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[229].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 30541
                            }, this),
                            $$contentTexts[230].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[231].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 30604
                            }, this),
                            $$contentTexts[232].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 30538
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 30526
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[233].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 30692
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[234].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 30726
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "nodesize",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodesize",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 30831
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 30778
                        }, this),
                        "nodeSize",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "nodeSize",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 31233
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 31102
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 31028
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 30882
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 30760
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[235].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 32194
                            }, this),
                            $$contentTexts[236].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[237].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 32257
                            }, this),
                            $$contentTexts[238].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 32191
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 32179
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[239].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 32345
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[240].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 32379
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "preset",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#preset",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 32480
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 32429
                        }, this),
                        "preset",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "preset",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32878
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 32747
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 32673
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 32529
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 32413
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[241].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 33839
                            }, this),
                            $$contentTexts[242].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[243].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 33902
                            }, this),
                            $$contentTexts[244].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 33836
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 33824
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[245].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 33990
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[246].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 34024
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "radial",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#radial",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 34125
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 34074
                        }, this),
                        "radial",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "radial",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34523
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 34392
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 34318
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 34174
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 34058
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[247].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 35484
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 35481
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 35469
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[248].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 35537
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "sortbycombo",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#sortbycombo",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 35648
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 35592
                        }, this),
                        "sortByCombo",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "sortByCombo",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36056
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35925
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 35851
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 35702
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 35571
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[249].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 37017
                            }, this),
                            $$contentTexts[250].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[251].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 37080
                            }, this),
                            $$contentTexts[252].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 37014
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 37002
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[253].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 37168
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[254].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 37202
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "布局适用场景",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#布局适用场景",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 37303
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 37252
                        }, this),
                        "布局适用场景",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "布局适用场景",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37701
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37570
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 37496
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 37352
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 37236
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[255].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38655
                                }, this),
                                $$contentTexts[256].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 38651
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[257].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38735
                                }, this),
                                $$contentTexts[258].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 38731
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[259].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38815
                                }, this),
                                $$contentTexts[260].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 38811
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38647
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "相关文档",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#相关文档",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 38959
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 38910
                        }, this),
                        "相关文档",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "相关文档",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39353
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39222
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 39148
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 39006
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38896
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[261].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 40311
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 40299
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://mp.weixin.qq.com/s/EdyTfFUH7fyMefNSBXI2nA",
                                children: $$contentTexts[262].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 40366
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 40362
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://www.yuque.com/antv/g6-blog/xxp5nl",
                                children: $$contentTexts[263].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 40466
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 40462
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 40358
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
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
                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/AntvDagreLayout.zh.md",
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
//# sourceMappingURL=docs_manual_layout_AntvDagreLayout_zh_md-async.js.map