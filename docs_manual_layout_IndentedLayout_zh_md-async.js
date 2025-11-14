((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/IndentedLayout.zh.md'],
{ "docs/manual/layout/IndentedLayout.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
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
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NBUzRonaOYMAAAAAAAAAAABkARQnAQ",
                    width: "175",
                    alt: "Indented 缩进树布局示意图"
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1465
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
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1663
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1614
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
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2057
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1926
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1852
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1710
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1600
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3007
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3041
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3075
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3109
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3003
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
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3209
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3161
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
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3601
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3470
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3396
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3255
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3148
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[5].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 4559
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4547
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4622
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4656
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4690
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4724
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4758
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 4618
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4611
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4817
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4852
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4887
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4922
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4957
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4813
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5001
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5036
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5071
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5106
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5141
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4997
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5156
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5191
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5226
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5261
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5296
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5152
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5311
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5346
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5381
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5416
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5451
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5307
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5466
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5501
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5536
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5571
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5606
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5462
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5621
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5656
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5691
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5726
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5761
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5617
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5776
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5811
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5846
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5881
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5916
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5772
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5931
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5966
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6001
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6036
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6071
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5927
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6086
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6121
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6156
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6191
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6226
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6082
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6241
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6276
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6311
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6346
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6381
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6237
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6396
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6431
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6466
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6501
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6536
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6392
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6551
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6586
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6621
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6656
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6691
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6547
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4806
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4604
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "复杂类型说明",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#复杂类型说明",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 6785
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6734
                        }, this),
                        "复杂类型说明",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "复杂类型说明",
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
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7183
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7052
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 6978
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6834
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 6718
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[60].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8140
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8137
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[61].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8195
                                                }, this),
                                                $$contentTexts[62].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*mq6YSIKrAt0AAAAAAAAAAABkARQnAQ",
                                                    width: "110",
                                                    alt: "LR"
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8260
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8191
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[63].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8389
                                                }, this),
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*VGEnRbpvxlUAAAAAAAAAAABkARQnAQ",
                                                    width: "90",
                                                    alt: "RL"
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8454
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8385
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8582
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Vek6RqtUXNcAAAAAAAAAAABkARQnAQ",
                                                    width: "160",
                                                    alt: "H"
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8647
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8578
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8187
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8133
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[67].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8788
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8785
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8839
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8874
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[70].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                                    lang: "js",
                                                    children: $$contentTexts[71].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8939
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8909
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8835
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8781
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[72].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9022
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9019
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9073
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[74].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                                    lang: "js",
                                                    children: $$contentTexts[75].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 9138
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9108
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9069
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9015
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[76].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9221
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9218
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9272
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[78].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                                    lang: "js",
                                                    children: $$contentTexts[79].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 9337
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9307
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9268
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9214
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8129
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
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9481
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9432
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
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9875
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9744
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9670
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9528
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9418
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[80].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://g6.antv.antgroup.com/examples/layout/indented",
                                children: $$contentTexts[81].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10862
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 10833
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10821
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "子节点自动分布",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#子节点自动分布",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 11042
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10990
                        }, this),
                        "子节点自动分布",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "子节点自动分布",
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
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11442
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11311
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 11237
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11092
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10973
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Kc63QoxgLNYAAAAAAAAAAAAADmJ7AQ/original",
                    width: "300"
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12388
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[82].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12508
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "子节点右侧分布",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#子节点右侧分布",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12638
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12586
                        }, this),
                        "子节点右侧分布",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "子节点右侧分布",
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
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13038
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12907
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12833
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12688
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12569
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*3PioQ4TAMx8AAAAAAAAAAAAADmJ7AQ/original",
                    width: "300"
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 13984
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[83].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14104
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "子节点左侧分布",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#子节点左侧分布",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14234
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14182
                        }, this),
                        "子节点左侧分布",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "子节点左侧分布",
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
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14634
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14503
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14429
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14284
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14165
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*o6uzQ5nmXJkAAAAAAAAAAAAADmJ7AQ/original",
                    width: "300"
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15580
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[84].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15700
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "自定义子节点分布",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#自定义子节点分布",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 15832
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15779
                        }, this),
                        "自定义子节点分布",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "自定义子节点分布",
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
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16234
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16103
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 16029
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15883
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15761
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Kc63QoxgLNYAAAAAAAAAAAAADmJ7AQ/original",
                    width: "300"
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17180
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[85].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17300
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "首子节点不换行",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#首子节点不换行",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17430
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17378
                        }, this),
                        "首子节点不换行",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "首子节点不换行",
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
                                        fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17830
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17699
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17625
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17480
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17361
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*bC-pRrO7srwAAAAAAAAAAAAADmJ7AQ/original",
                    width: "300"
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 18776
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[86].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 18896
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/IndentedLayout.zh.md",
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
                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/IndentedLayout.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/IndentedLayout.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/IndentedLayout.zh.md",
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
//# sourceMappingURL=docs_manual_layout_IndentedLayout_zh_md-async.js.map