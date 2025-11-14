((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/ComboCombinedLayout.zh.md'],
{ "docs/manual/layout/ComboCombinedLayout.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
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
                                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/examples#layout-combo-layout",
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1461
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/combo-combined.ts",
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1559
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
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
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1744
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1695
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
                                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2138
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2007
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1933
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1791
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1681
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3088
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3122
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3084
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
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3222
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3174
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
                                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3614
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3483
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3409
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3268
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3161
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4578
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4612
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4646
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4680
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4714
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 4574
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4567
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4773
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4808
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[13].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4847
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4843
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4891
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4926
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4769
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4970
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5005
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/types.ts#L829",
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[18].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5129
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5044
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5040
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5177
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5212
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4966
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5227
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5262
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[22].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5301
                                                }, this),
                                                $$contentTexts[23].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[24].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5366
                                                }, this),
                                                $$contentTexts[25].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[26].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5431
                                                }, this),
                                                $$contentTexts[27].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[28].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5496
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5297
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5540
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5575
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5223
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5590
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[31].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#innerlayout",
                                                    children: $$contentTexts[32].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5655
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5625
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/types.ts#L881",
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[33].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5806
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5721
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5717
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5854
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5889
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5586
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5904
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5939
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[37].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5978
                                                }, this),
                                                $$contentTexts[38].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6043
                                                }, this),
                                                $$contentTexts[40].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[41].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6108
                                                }, this),
                                                $$contentTexts[42].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5974
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6241
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6276
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5900
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6291
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[45].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#outerlayout",
                                                    children: $$contentTexts[46].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6356
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6326
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/types.ts#L866",
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6507
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6422
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6418
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6555
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6590
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6287
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6605
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6670
                                                }, this),
                                                $$contentTexts[52].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6640
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6744
                                                }, this),
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[55].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6809
                                                }, this),
                                                $$contentTexts[56].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6740
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6942
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6977
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6601
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6992
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7027
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[60].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7066
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7062
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7110
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7145
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6988
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4762
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4560
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "innerlayout",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#innerlayout",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 7249
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7193
                        }, this),
                        "innerLayout",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "innerLayout",
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
                                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7657
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7526
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 7452
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7303
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7172
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[62].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8622
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8618
                            }, this),
                            $$contentTexts[63].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[64].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8692
                            }, this),
                            $$contentTexts[65].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[66].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8761
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 8615
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8603
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[67].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/concentric.ts",
                            children: $$contentTexts[68].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8846
                        }, this),
                        $$contentTexts[69].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/layout/tree/v5/packages/layout",
                            children: $$contentTexts[70].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8987
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8817
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[71].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9091
                        }, this),
                        $$contentTexts[72].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9088
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "ts",
                    children: $$contentTexts[73].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9164
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "outerlayout",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#outerlayout",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9302
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9246
                        }, this),
                        "outerLayout",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "outerLayout",
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
                                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9710
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9579
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9505
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9356
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9225
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[74].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10675
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10671
                            }, this),
                            $$contentTexts[75].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[76].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10745
                            }, this),
                            $$contentTexts[77].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[78].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10814
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 10668
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10656
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[79].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/force/index.ts",
                            children: $$contentTexts[80].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10899
                        }, this),
                        $$contentTexts[81].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/layout/tree/v5/packages/layout",
                            children: $$contentTexts[82].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11041
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10870
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[83].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 11145
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 11142
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "ts",
                    children: $$contentTexts[84].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 11192
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "示例代码",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#示例代码",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 11316
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11267
                        }, this),
                        "示例代码",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "示例代码",
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
                                        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11710
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11579
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 11505
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11363
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 11253
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12686
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[85].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12730
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12656
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
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
                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/ComboCombinedLayout.zh.md",
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
//# sourceMappingURL=docs_manual_layout_ComboCombinedLayout_zh_md-async.js.map