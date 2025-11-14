((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/element.zh.md'],
{ "docs/api/element.zh.md": function (module, exports, __mako_require__){
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
                    id: "元素操作概述",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#元素操作概述",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 105
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 54
                        }, this),
                        "元素操作概述",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "元素操作概述",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 503
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 372
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 298
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 154
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/overview",
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 1477
                        }, this),
                        $$contentTexts[2].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 1449
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[3].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1582
                                }, this),
                                $$contentTexts[4].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 1578
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[5].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1658
                                }, this),
                                $$contentTexts[6].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 1654
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[7].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1734
                                }, this),
                                $$contentTexts[8].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 1730
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[9].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1810
                                }, this),
                                $$contentTexts[10].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 1806
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[11].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1887
                                }, this),
                                $$contentTexts[12].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 1883
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 1574
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[13].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 1966
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
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 2066
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 2015
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2464
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2333
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 2259
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 2115
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 1999
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetelementpositionid",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetelementpositionid",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 3515
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 3445
                        }, this),
                        "Graph.getElementPosition(id)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getElementPosition(id)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3957
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3826
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 3752
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 3586
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 3410
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[14].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 4903
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[15].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 4936
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[16].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 5008
                        }, this),
                        $$contentTexts[17].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 5005
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[18].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5099
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[19].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5134
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[20].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5169
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5204
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5239
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 5095
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 5088
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5298
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5333
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5368
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[26].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5403
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[27].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5438
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 5294
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 5287
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 5081
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[28].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 5497
                        }, this),
                        $$contentTexts[29].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 5494
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[30].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5578
                                }, this),
                                $$contentTexts[31].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 5574
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[32].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5656
                                }, this),
                                $$contentTexts[33].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 5652
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 5570
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[34].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 5738
                        }, this),
                        $$contentTexts[35].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 5735
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[36].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 5811
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetelementrenderboundsid",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetelementrenderboundsid",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 5993
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 5919
                        }, this),
                        "Graph.getElementRenderBounds(id)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getElementRenderBounds(id)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6443
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6312
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 6238
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 6068
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 5880
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[37].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 7389
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[38].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 7422
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[39].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 7494
                        }, this),
                        $$contentTexts[40].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 7491
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[41].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7585
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[42].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7620
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[43].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7655
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[44].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7690
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[45].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7725
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 7581
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 7574
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7784
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[47].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7819
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[48].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7854
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[49].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7889
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[50].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7924
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 7780
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 7773
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 7567
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[51].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 7983
                        }, this),
                        $$contentTexts[52].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 7980
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[53].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8064
                                }, this),
                                $$contentTexts[54].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#aabb",
                                    children: $$contentTexts[55].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8133
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 8060
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[56].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8192
                                }, this),
                                $$contentTexts[57].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 8188
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 8056
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetelementrenderstyleid",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetelementrenderstyleid",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 8382
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 8309
                        }, this),
                        "Graph.getElementRenderStyle(id)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getElementRenderStyle(id)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8830
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8699
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 8625
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 8456
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 8271
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[58].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 9776
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[59].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 9809
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[60].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 9881
                        }, this),
                        $$contentTexts[61].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 9878
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[62].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9972
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[63].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10007
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[64].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10042
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[65].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10077
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[66].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10112
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 9968
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 9961
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[67].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10171
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[68].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10206
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[69].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10241
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[70].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10276
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[71].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10311
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 10167
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 10160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 9954
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[72].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 10370
                        }, this),
                        $$contentTexts[73].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 10367
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[74].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10451
                                }, this),
                                $$contentTexts[75].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 10447
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[76].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10529
                                }, this),
                                $$contentTexts[77].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 10525
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 10443
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetelementstateid",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetelementstateid",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 10707
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 10640
                        }, this),
                        "Graph.getElementState(id)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getElementState(id)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11143
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11012
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 10938
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 10775
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 10608
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[78].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 12089
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[79].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 12122
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[80].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 12194
                        }, this),
                        $$contentTexts[81].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 12191
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[82].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12285
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[83].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12320
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[84].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12355
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[85].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12390
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[86].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12425
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 12281
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 12274
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[87].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12484
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[88].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12519
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[89].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12554
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[90].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12589
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[91].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12624
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 12480
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 12473
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 12267
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[92].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 12683
                        }, this),
                        $$contentTexts[93].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 12680
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[94].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12764
                                }, this),
                                $$contentTexts[95].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#state",
                                    children: $$contentTexts[96].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12833
                                }, this),
                                $$contentTexts[97].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 12760
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[98].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12919
                                }, this),
                                $$contentTexts[99].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 12915
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 12756
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetelementtypeid",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetelementtypeid",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 13095
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 13029
                        }, this),
                        "Graph.getElementType(id)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getElementType(id)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13529
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13398
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 13324
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 13162
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 12998
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[100].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 14475
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[101].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 14509
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[102].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 14582
                        }, this),
                        $$contentTexts[103].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 14579
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[104].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14675
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[105].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14711
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[106].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14747
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[107].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14783
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[108].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14819
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 14671
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 14664
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[109].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14879
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[110].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14915
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[111].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14951
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[112].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14987
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[113].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15023
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 14875
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 14868
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 14657
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[114].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 15083
                        }, this),
                        $$contentTexts[115].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 15080
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[116].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15166
                                }, this),
                                $$contentTexts[117].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 15162
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[118].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15246
                                }, this),
                                $$contentTexts[119].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 15242
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 15158
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetelementvisibilityid",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetelementvisibilityid",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 15436
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 15364
                        }, this),
                        "Graph.getElementVisibility(id)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getElementVisibility(id)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15882
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15751
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 15677
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 15509
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 15327
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[120].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 16828
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[121].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 16862
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[122].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 16935
                        }, this),
                        $$contentTexts[123].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 16932
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[124].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17028
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[125].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17064
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[126].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17100
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[127].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17136
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[128].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17172
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 17024
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 17017
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[129].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17232
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[130].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17268
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[131].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17304
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[132].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17340
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[133].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17376
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 17228
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 17221
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 17010
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[134].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 17436
                        }, this),
                        $$contentTexts[135].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 17433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[136].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17519
                                }, this),
                                $$contentTexts[137].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 17515
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[138].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17599
                                }, this),
                                $$contentTexts[139].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 17595
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 17511
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetelementzindexid",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetelementzindexid",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 17781
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 17713
                        }, this),
                        "Graph.getElementZIndex(id)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getElementZIndex(id)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18219
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18088
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 18014
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 17850
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 17680
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[140].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 19165
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[141].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 19199
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[142].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 19272
                        }, this),
                        $$contentTexts[143].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 19269
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[144].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19365
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[145].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19401
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[146].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19437
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[147].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19473
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[148].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19509
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 19361
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 19354
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[149].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19569
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[150].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19605
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[151].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19641
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[152].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19677
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[153].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19713
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 19565
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 19558
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 19347
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[154].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 19773
                        }, this),
                        $$contentTexts[155].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 19770
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[156].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19856
                                }, this),
                                $$contentTexts[157].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 19852
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[158].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19936
                                }, this),
                                $$contentTexts[159].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 19932
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 19848
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphsetelementstateid-state-options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphsetelementstateid-state-options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 20144
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 20063
                        }, this),
                        "Graph.setElementState(id, state, options)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.setElementState(id,-state,-options)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20612
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20481
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 20407
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 20228
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 20017
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[160].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 21558
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[161].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 21592
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[162].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 21665
                        }, this),
                        $$contentTexts[163].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 21662
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[164].value
                    }, void 0, false, {
                        fileName: "docs/api/element.zh.md",
                        lineNumber: 21,
                        columnNumber: 21743
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 21740
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[165].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21809
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[166].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21845
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[167].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21881
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[168].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21917
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[169].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21953
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 21805
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 21798
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22013
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22049
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22085
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22121
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22157
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22009
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[175].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22202
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22238
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#state",
                                                    children: $$contentTexts[177].value
                                                }, void 0, false, {
                                                    fileName: "docs/api/element.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22278
                                                }, this),
                                                $$contentTexts[178].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22362
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22398
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22198
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22443
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22479
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[183].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22515
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22551
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22587
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22439
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 22002
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 21791
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[185].value
                    }, void 0, false, {
                        fileName: "docs/api/element.zh.md",
                        lineNumber: 21,
                        columnNumber: 22617
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 22614
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[186].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22683
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[187].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22719
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[188].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22755
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[189].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22791
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[190].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22827
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 22679
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 22672
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22887
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22923
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[193].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#state",
                                                    children: $$contentTexts[194].value
                                                }, void 0, false, {
                                                    fileName: "docs/api/element.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22990
                                                }, this),
                                                $$contentTexts[195].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22959
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[196].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23074
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[197].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23110
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22883
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23155
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[199].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23191
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23227
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23263
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23299
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23151
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 22876
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 22665
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[202].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 23329
                        }, this),
                        $$contentTexts[203].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 23326
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[204].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23412
                                }, this),
                                $$contentTexts[205].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 23408
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[206].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23492
                                }, this),
                                $$contentTexts[207].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 23488
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 23404
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[208].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 23576
                        }, this),
                        $$contentTexts[209].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 23573
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[210].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 23651
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphsetelementvisibilityid-visibility-animation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphsetelementvisibilityid-visibility-animation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 23872
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 23779
                        }, this),
                        "Graph.setElementVisibility(id, visibility, animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.setElementVisibility(id,-visibility,-animation)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24364
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24233
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 24159
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 23968
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 23721
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[211].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 25310
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[212].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 25344
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[213].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 25417
                        }, this),
                        $$contentTexts[214].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 25414
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[215].value
                    }, void 0, false, {
                        fileName: "docs/api/element.zh.md",
                        lineNumber: 21,
                        columnNumber: 25495
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 25492
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[216].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25561
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[217].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25597
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[218].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25633
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[219].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25669
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[220].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25705
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 25557
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 25550
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[221].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25765
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[222].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25801
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[223].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25837
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[224].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25873
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[225].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25909
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25761
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[226].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25954
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[227].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25990
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[228].value
                                                }, void 0, false, {
                                                    fileName: "docs/api/element.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26030
                                                }, this),
                                                $$contentTexts[229].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[230].value
                                                }, void 0, false, {
                                                    fileName: "docs/api/element.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26097
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26026
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[231].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26142
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[232].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26178
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25950
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[233].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26223
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[234].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26259
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[235].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26295
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[236].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26331
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26367
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26219
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 25754
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 25543
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[237].value
                    }, void 0, false, {
                        fileName: "docs/api/element.zh.md",
                        lineNumber: 21,
                        columnNumber: 26397
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 26394
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[238].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26463
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[239].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26499
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[240].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26535
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[241].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26571
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[242].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26607
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 26459
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 26452
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[243].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26667
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[244].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[245].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[246].value
                                                }, void 0, false, {
                                                    fileName: "docs/api/element.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26770
                                                }, this),
                                                $$contentTexts[247].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[248].value
                                                }, void 0, false, {
                                                    fileName: "docs/api/element.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26837
                                                }, this),
                                                $$contentTexts[249].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26739
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[250].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26909
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[251].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26945
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26663
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[252].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26990
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[253].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27026
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[254].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27062
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[255].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27098
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27134
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26986
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 26656
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 26445
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[256].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 27164
                        }, this),
                        $$contentTexts[257].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 27161
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[258].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27247
                                }, this),
                                $$contentTexts[259].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 27243
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[260].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27327
                                }, this),
                                $$contentTexts[261].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 27323
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 27239
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[262].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 27411
                        }, this),
                        $$contentTexts[263].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 27408
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[264].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 27486
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphsetelementzindexid-zindex",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphsetelementzindexid-zindex",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 27671
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 27596
                        }, this),
                        "Graph.setElementZIndex(id, zIndex)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.setElementZIndex(id,-zIndex)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 28125
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27994
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 27920
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 27748
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 27556
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[265].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 29071
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[266].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 29105
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[267].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 29178
                        }, this),
                        $$contentTexts[268].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 29175
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[269].value
                    }, void 0, false, {
                        fileName: "docs/api/element.zh.md",
                        lineNumber: 21,
                        columnNumber: 29256
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 29253
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[270].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29322
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[271].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29358
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[272].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29394
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[273].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29430
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[274].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29466
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 29318
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 29311
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[275].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29526
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[276].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29562
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[277].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29598
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[278].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29634
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[279].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29670
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 29522
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[280].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29715
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[281].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29751
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[282].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29787
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[283].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29823
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[284].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29859
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 29711
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 29515
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 29304
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[285].value
                    }, void 0, false, {
                        fileName: "docs/api/element.zh.md",
                        lineNumber: 21,
                        columnNumber: 29919
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 29916
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[286].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29985
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[287].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30021
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[288].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30057
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[289].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30093
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[290].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30129
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 29981
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 29974
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[291].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30189
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[292].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30225
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[293].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30261
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[294].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30297
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[295].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30333
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 30185
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 30178
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 29967
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[296].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 30393
                        }, this),
                        $$contentTexts[297].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 30390
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[298].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 30476
                                }, this),
                                $$contentTexts[299].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 30472
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[300].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 30556
                                }, this),
                                $$contentTexts[301].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 30552
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 30468
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[302].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 30640
                        }, this),
                        $$contentTexts[303].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 30637
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[304].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 30715
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphsetnodenode",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphsetnodenode",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 30872
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 30811
                        }, this),
                        "Graph.setNode(node)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.setNode(node)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 31296
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 31165
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 31091
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 30934
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 30785
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[305].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[306].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 32272
                        }, this),
                        $$contentTexts[307].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 32242
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[308].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 32343
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[309].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 32416
                        }, this),
                        $$contentTexts[310].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 32413
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[311].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32509
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[312].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32545
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[313].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32581
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[314].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32617
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[315].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32653
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 32505
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 32498
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[316].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32713
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[317].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32749
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                            to: "/manual/element/node/overview",
                                            children: $$contentTexts[318].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 32789
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32785
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[319].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32869
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[320].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32905
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 32709
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 32702
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 32491
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[321].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 32965
                        }, this),
                        $$contentTexts[322].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 32962
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[323].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 33040
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphsetedgeedge",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphsetedgeedge",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 33197
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 33136
                        }, this),
                        "Graph.setEdge(edge)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.setEdge(edge)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 33621
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 33490
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 33416
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 33259
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 33110
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[324].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[325].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 34597
                        }, this),
                        $$contentTexts[326].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 34567
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[327].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 34668
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[328].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 34741
                        }, this),
                        $$contentTexts[329].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 34738
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[330].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34834
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[331].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34870
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[332].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34906
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[333].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34942
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[334].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34978
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 34830
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 34823
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[335].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35038
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[336].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35074
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                            to: "/manual/element/edge/overview",
                                            children: $$contentTexts[337].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35114
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35110
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[338].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35194
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[339].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35230
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 35034
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 35027
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 34816
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphsetcombocombo",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphsetcombocombo",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 35378
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 35315
                        }, this),
                        "Graph.setCombo(combo)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.setCombo(combo)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35806
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35675
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 35601
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 35442
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 35287
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[340].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[341].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 36782
                        }, this),
                        $$contentTexts[342].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 36752
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[343].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 36853
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[344].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 36926
                        }, this),
                        $$contentTexts[345].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 36923
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[346].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37019
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[347].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37055
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[348].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37091
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[349].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37127
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[350].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37163
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 37015
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 37008
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[351].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37223
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[352].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37259
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                            to: "/manual/element/combo/overview",
                                            children: $$contentTexts[353].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37299
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37295
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[354].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37380
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[355].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37416
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 37219
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 37212
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 37001
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphcollapseelementid-options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphcollapseelementid-options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 37588
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 37513
                        }, this),
                        "Graph.collapseElement(id, options)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.collapseElement(id,-options)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38042
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37911
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 37837
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 37665
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 37473
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[356].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 38988
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[357].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 39022
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[358].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 39095
                        }, this),
                        $$contentTexts[359].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 39092
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[360].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39188
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[361].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39224
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[362].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39260
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[363].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39296
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[364].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39332
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 39184
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 39177
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[365].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39392
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[366].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39428
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[367].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39464
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[368].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39500
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[369].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39536
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39388
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[370].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39581
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[371].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39617
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[372].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#collapseexpandnodeoptions",
                                                    children: $$contentTexts[373].value
                                                }, void 0, false, {
                                                    fileName: "docs/api/element.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39684
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39653
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[374].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39761
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39797
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39577
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 39381
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 39170
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[375].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 39827
                        }, this),
                        $$contentTexts[376].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 39824
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[377].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39910
                                }, this),
                                $$contentTexts[378].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 39906
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[379].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39990
                                }, this),
                                $$contentTexts[380].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 39986
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 39902
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[381].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 40074
                        }, this),
                        $$contentTexts[382].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 40071
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[383].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 40149
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphexpandelementid-options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphexpandelementid-options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 40330
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 40257
                        }, this),
                        "Graph.expandElement(id, options)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.expandElement(id,-options)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 40780
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 40649
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 40575
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 40405
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 40219
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[384].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 41726
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[385].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 41760
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[386].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 41833
                        }, this),
                        $$contentTexts[387].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 41830
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[388].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41926
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[389].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41962
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[390].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41998
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[391].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 42034
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[392].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 42070
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 41922
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 41915
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[393].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42130
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[394].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42166
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[395].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42202
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[396].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42238
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[397].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42274
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42126
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[398].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42319
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[399].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[400].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#collapseexpandnodeoptions",
                                                    children: $$contentTexts[401].value
                                                }, void 0, false, {
                                                    fileName: "docs/api/element.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42422
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42391
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[402].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42499
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42535
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42315
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 42119
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 41908
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[403].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 42565
                        }, this),
                        $$contentTexts[404].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 42562
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[405].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42648
                                }, this),
                                $$contentTexts[406].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 42644
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[407].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42728
                                }, this),
                                $$contentTexts[408].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 42724
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 42640
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[409].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 42812
                        }, this),
                        $$contentTexts[410].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 42809
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[411].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 42887
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphfrontelementid",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphfrontelementid",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 43050
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 42986
                        }, this),
                        "Graph.frontElement(id)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.frontElement(id)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 43480
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43349
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 43275
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 43115
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 42957
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[412].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 44426
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[413].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 44460
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[414].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 44533
                        }, this),
                        $$contentTexts[415].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 44530
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[416].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44626
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[417].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44662
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[418].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44698
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[419].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44734
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[420].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44770
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 44622
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 44615
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[421].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44830
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[422].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44866
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[423].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44902
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[424].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44938
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[425].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44974
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 44826
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 44819
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 44608
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[426].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 45034
                        }, this),
                        $$contentTexts[427].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 45031
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[428].value
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 45117
                            }, this),
                            $$contentTexts[429].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/api/element.zh.md",
                        lineNumber: 21,
                        columnNumber: 45113
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 45109
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[430].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 45201
                        }, this),
                        $$contentTexts[431].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 45198
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[432].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 45276
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphshowelementid-animation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphshowelementid-animation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 45457
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 45384
                        }, this),
                        "Graph.showElement(id, animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.showElement(id,-animation)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 45907
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 45776
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 45702
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 45532
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 45346
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[433].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 46853
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[434].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 46887
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[435].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 46960
                        }, this),
                        $$contentTexts[436].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 46957
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[437].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 47053
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[438].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 47089
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[439].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 47125
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[440].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 47161
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[441].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 47197
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 47049
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 47042
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[442].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47257
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[443].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47293
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[444].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47329
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[445].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47365
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[446].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47401
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47253
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[447].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47446
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[448].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47482
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[449].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47518
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[450].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47554
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47590
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47442
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 47246
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 47035
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[451].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 47620
                        }, this),
                        $$contentTexts[452].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 47617
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[453].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47703
                                }, this),
                                $$contentTexts[454].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 47699
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[455].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47783
                                }, this),
                                $$contentTexts[456].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 47779
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 47695
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[457].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 47867
                        }, this),
                        $$contentTexts[458].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 47864
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[459].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 47942
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphhideelementid-animation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphhideelementid-animation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 48123
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 48050
                        }, this),
                        "Graph.hideElement(id, animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.hideElement(id,-animation)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 48573
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48442
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 48368
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 48198
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 48012
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[460].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 49519
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[461].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 49553
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[462].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 49626
                        }, this),
                        $$contentTexts[463].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 49623
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[464].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 49719
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[465].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 49755
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[466].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 49791
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[467].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 49827
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[468].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 49863
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 49715
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 49708
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[469].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49923
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[470].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49959
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[471].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49995
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[472].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50031
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[473].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50067
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 49919
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[474].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50112
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[475].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50148
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[476].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50184
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[477].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50220
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50256
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50108
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 49912
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 49701
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[478].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 50286
                        }, this),
                        $$contentTexts[479].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 50283
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[480].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50369
                                }, this),
                                $$contentTexts[481].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 50365
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[482].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50449
                                }, this),
                                $$contentTexts[483].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 50445
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 50361
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[484].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 50533
                        }, this),
                        $$contentTexts[485].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 50530
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[486].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 50608
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphtranslateelementbyid-offset-animation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphtranslateelementbyid-offset-animation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 50817
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 50730
                        }, this),
                        "Graph.translateElementBy(id, offset, animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.translateElementBy(id,-offset,-animation)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 51297
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51166
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 51092
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 50907
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 50678
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[487].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 52243
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[488].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 52277
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[489].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 52350
                        }, this),
                        $$contentTexts[490].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 52347
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[491].value
                    }, void 0, false, {
                        fileName: "docs/api/element.zh.md",
                        lineNumber: 21,
                        columnNumber: 52428
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 52425
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[492].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 52494
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[493].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 52530
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[494].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 52566
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[495].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 52602
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[496].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 52638
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 52490
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 52483
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[497].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52698
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[498].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52734
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[499].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52770
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[500].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52806
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[501].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52842
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 52694
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[502].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52887
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[503].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52923
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[504].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52959
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[505].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52995
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[506].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53031
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 52883
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[507].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53076
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[508].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53112
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[509].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53148
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[510].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53184
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53220
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53072
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 52687
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 52476
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[511].value
                    }, void 0, false, {
                        fileName: "docs/api/element.zh.md",
                        lineNumber: 21,
                        columnNumber: 53250
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 53247
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[512].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53316
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[513].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53352
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[514].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53388
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[515].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53424
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[516].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53460
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 53312
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 53305
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[517].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53520
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[518].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53556
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[519].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53592
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[520].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53628
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[521].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53664
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53516
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[522].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53709
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[523].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53745
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[524].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53781
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[525].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53817
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53853
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53705
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 53509
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 53298
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[526].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 53883
                        }, this),
                        $$contentTexts[527].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 53880
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[528].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53966
                                }, this),
                                $$contentTexts[529].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 53962
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[530].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54046
                                }, this),
                                $$contentTexts[531].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 54042
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 53958
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[532].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 54130
                        }, this),
                        $$contentTexts[533].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 54127
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[534].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 54205
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphtranslateelementtoid-position-animation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphtranslateelementtoid-position-animation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 54418
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 54329
                        }, this),
                        "Graph.translateElementTo(id, position, animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.translateElementTo(id,-position,-animation)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 54902
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54771
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 54697
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 54510
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 54275
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[535].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 55848
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[536].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 55882
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[537].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 55955
                        }, this),
                        $$contentTexts[538].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 55952
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[539].value
                    }, void 0, false, {
                        fileName: "docs/api/element.zh.md",
                        lineNumber: 21,
                        columnNumber: 56033
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 56030
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[540].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56099
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[541].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56135
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[542].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56171
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[543].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56207
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[544].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56243
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 56095
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 56088
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[545].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56303
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[546].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56339
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[547].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56375
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[548].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56411
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[549].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56447
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 56299
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[550].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56492
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[551].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56528
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[552].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56564
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[553].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56600
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[554].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56636
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 56488
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[555].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56681
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[556].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56717
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[557].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56753
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[558].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56789
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56825
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 56677
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 56292
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 56081
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[559].value
                    }, void 0, false, {
                        fileName: "docs/api/element.zh.md",
                        lineNumber: 21,
                        columnNumber: 56855
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 56852
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[560].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56921
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[561].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56957
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[562].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56993
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[563].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 57029
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[564].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 57065
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 56917
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 56910
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[565].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57125
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[566].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57161
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[567].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57197
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[568].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57233
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[569].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57269
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57121
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[570].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57314
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[571].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57350
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[572].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57386
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[573].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57422
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57458
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57310
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 57114
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 56903
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[574].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 57488
                        }, this),
                        $$contentTexts[575].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 57485
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[576].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57571
                                }, this),
                                $$contentTexts[577].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 57567
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[578].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57651
                                }, this),
                                $$contentTexts[579].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 57647
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 57563
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[580].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 57735
                        }, this),
                        $$contentTexts[581].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 57732
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[582].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 57810
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphfocuselementid-animation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphfocuselementid-animation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 57993
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 57919
                        }, this),
                        "Graph.focusElement(id, animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.focusElement(id,-animation)",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 58445
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58314
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 58240
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 58069
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 57880
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[583].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 59391
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[584].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 59425
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[585].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 59498
                        }, this),
                        $$contentTexts[586].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 59495
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[587].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 59591
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[588].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 59627
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[589].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 59663
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[590].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 59699
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[591].value
                                    }, void 0, false, {
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 59735
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 59587
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 59580
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[592].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59795
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[593].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59831
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[594].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59867
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[595].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59903
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[596].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59939
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 59791
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[597].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59984
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[598].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60020
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[599].value
                                            }, void 0, false, {
                                                fileName: "docs/api/element.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 60060
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60056
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[600].value
                                        }, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60141
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/element.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60177
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 59980
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 59784
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 59573
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[601].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 60207
                        }, this),
                        $$contentTexts[602].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 60204
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[603].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 60290
                                }, this),
                                $$contentTexts[604].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 60286
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[605].value
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 60370
                                }, this),
                                $$contentTexts[606].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 60366
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 60282
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[607].value
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 60454
                        }, this),
                        $$contentTexts[608].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 60451
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[609].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 60529
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
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 60662
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 60613
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 61056
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 60925
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 60851
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 60709
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 60599
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "collapseexpandnodeoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#collapseexpandnodeoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 62107
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 62037
                        }, this),
                        "CollapseExpandNodeOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "CollapseExpandNodeOptions",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62543
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 62412
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 62338
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 62175
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 62002
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[610].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 63489
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[611].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 63523
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "viewportanimationeffecttiming",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#viewportanimationeffecttiming",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 63706
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 63632
                        }, this),
                        "ViewportAnimationEffectTiming",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ViewportAnimationEffectTiming",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 64150
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 64019
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 63945
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 63778
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 63593
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[612].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 65096
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[613].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 65130
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "aabb",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#aabb",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 65263
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 65214
                        }, this),
                        "AABB",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "AABB",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 65657
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65526
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 65452
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 65310
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 65200
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[614].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 66603
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[615].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 66637
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "state",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#state",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 66772
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 66722
                        }, this),
                        "State",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "State",
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
                                        fileName: "docs/api/element.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 67168
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/element.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67037
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/element.zh.md",
                                lineNumber: 21,
                                columnNumber: 66963
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/element.zh.md",
                            lineNumber: 21,
                            columnNumber: 66820
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 66707
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[616].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 68114
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[617].value
                }, void 0, false, {
                    fileName: "docs/api/element.zh.md",
                    lineNumber: 21,
                    columnNumber: 68148
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/api/element.zh.md",
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
                fileName: "docs/api/element.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/element.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/element.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/element.zh.md",
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
//# sourceMappingURL=docs_api_element_zh_md-async.js.map