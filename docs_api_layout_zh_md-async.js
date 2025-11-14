((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/layout.zh.md'],
{ "docs/api/layout.zh.md": function (module, exports, __mako_require__){
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
                    id: "布局概述",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#布局概述",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 101
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 52
                        }, this),
                        "布局概述",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "布局概述",
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
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 495
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 364
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 290
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/layout/overview",
                            children: $$contentTexts[0].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1444
                        }, this),
                        $$contentTexts[1].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1441
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1544
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1578
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1612
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1646
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1540
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[6].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1685
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "api-参考",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#api-参考",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1784
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1733
                        }, this),
                        "API 参考",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "API-参考",
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
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2182
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2051
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1977
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1833
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1717
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphsetlayoutlayout",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphsetlayoutlayout",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3223
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3158
                        }, this),
                        "Graph.setLayout(layout)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.setLayout(layout)",
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
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3655
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3524
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3450
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3289
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3128
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4601
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[8].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[9].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4661
                        }, this),
                        $$contentTexts[10].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[11].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4729
                        }, this),
                        $$contentTexts[12].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4633
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[13].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4798
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[14].value
                    }, void 0, false, {
                        fileName: "docs/api/layout.zh.md",
                        lineNumber: 21,
                        columnNumber: 4870
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4867
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4935
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4970
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5005
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[18].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5040
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[19].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5075
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 4931
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4924
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[20].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5134
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5169
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#layoutoptions",
                                                children: $$contentTexts[22].value
                                            }, void 0, false, {
                                                fileName: "docs/api/layout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5208
                                            }, this),
                                            $$contentTexts[23].value
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5204
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5298
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5333
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 5130
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5123
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4917
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[26].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5392
                        }, this),
                        $$contentTexts[27].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5389
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[28].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[29].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5537
                        }, this),
                        $$contentTexts[30].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5534
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[31].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5610
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[32].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5682
                        }, this),
                        $$contentTexts[33].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5679
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[34].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5755
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetlayout",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetlayout",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 5907
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5848
                        }, this),
                        "Graph.getLayout()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getLayout()",
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
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6327
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6196
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 6122
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5967
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5824
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[35].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7273
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[36].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7306
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[37].value
                    }, void 0, false, {
                        fileName: "docs/api/layout.zh.md",
                        lineNumber: 21,
                        columnNumber: 7378
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7375
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[38].value
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7433
                                }, this),
                                $$contentTexts[39].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#layoutoptions",
                                    children: $$contentTexts[40].value
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7502
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7429
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[41].value
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7570
                                }, this),
                                $$contentTexts[42].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7566
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7425
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[43].value
                    }, void 0, false, {
                        fileName: "docs/api/layout.zh.md",
                        lineNumber: 21,
                        columnNumber: 7652
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7649
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[44].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7699
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphlayoutlayoutoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphlayoutlayoutoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 7871
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7802
                        }, this),
                        "Graph.layout(layoutOptions)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.layout(layoutOptions)",
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
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8311
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8180
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8106
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7941
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7768
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[45].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9257
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[46].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9290
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[47].value
                    }, void 0, false, {
                        fileName: "docs/api/layout.zh.md",
                        lineNumber: 21,
                        columnNumber: 9362
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9359
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[48].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9427
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[49].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9462
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[50].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9497
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[51].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9532
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[52].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9567
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9423
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9416
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[53].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9626
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[54].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9661
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#layoutoptions",
                                                children: $$contentTexts[55].value
                                            }, void 0, false, {
                                                fileName: "docs/api/layout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9700
                                            }, this),
                                            $$contentTexts[56].value
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9696
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[57].value
                                    }, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9790
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9825
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9622
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9615
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9409
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[58].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[59].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9881
                        }, this),
                        $$contentTexts[60].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9852
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[61].value
                    }, void 0, false, {
                        fileName: "docs/api/layout.zh.md",
                        lineNumber: 21,
                        columnNumber: 9953
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9950
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[62].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10000
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[63].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10036
                        }, this),
                        $$contentTexts[64].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10033
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[65].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10109
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[66].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10181
                        }, this),
                        $$contentTexts[67].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10178
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[68].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10254
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[69].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10326
                        }, this),
                        $$contentTexts[70].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10323
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[71].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10399
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphstoplayout",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphstoplayout",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10553
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10493
                        }, this),
                        "Graph.stopLayout()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.stopLayout()",
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
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10975
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10844
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10770
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10614
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10468
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[72].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 11921
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[73].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 11954
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[74].value
                    }, void 0, false, {
                        fileName: "docs/api/layout.zh.md",
                        lineNumber: 21,
                        columnNumber: 12026
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12023
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[75].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[76].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12102
                        }, this),
                        $$contentTexts[77].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12073
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[78].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12174
                        }, this),
                        $$contentTexts[79].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12171
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[80].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12247
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[81].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12319
                        }, this),
                        $$contentTexts[82].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12316
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[83].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12392
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "类型定义",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#类型定义",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12524
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12475
                        }, this),
                        "类型定义",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "类型定义",
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
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12918
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12787
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12713
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12571
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12461
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "layoutoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#layoutoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 13945
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13887
                        }, this),
                        "LayoutOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "LayoutOptions",
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
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14357
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14226
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14152
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14001
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 13864
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[84].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15303
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[85].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15336
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "singlelayoutoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#singlelayoutoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 15498
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15434
                        }, this),
                        "SingleLayoutOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "SingleLayoutOptions",
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
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15922
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15791
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 15717
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15560
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15405
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[86].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 16868
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[87].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 16901
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "baselayoutoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#baselayoutoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17059
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 16997
                        }, this),
                        "BaseLayoutOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "BaseLayoutOptions",
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
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17479
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17348
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17274
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17119
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 16970
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[88].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 18425
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[89].value
                }, void 0, false, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 18458
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "builtinlayoutoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#builtinlayoutoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 18622
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 18557
                        }, this),
                        "BuiltInLayoutOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "BuiltInLayoutOptions",
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
                                        fileName: "docs/api/layout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19048
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/layout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18917
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/layout.zh.md",
                                lineNumber: 21,
                                columnNumber: 18843
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 18685
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 18527
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[90].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/layout/antv-dagre-layout",
                            children: $$contentTexts[91].value
                        }, void 0, false, {
                            fileName: "docs/api/layout.zh.md",
                            lineNumber: 21,
                            columnNumber: 20023
                        }, this),
                        $$contentTexts[92].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/layout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19994
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/api/layout.zh.md",
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
                fileName: "docs/api/layout.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/layout.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/layout.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/layout.zh.md",
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
//# sourceMappingURL=docs_api_layout_zh_md-async.js.map