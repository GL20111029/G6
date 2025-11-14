((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/further-reading/3d.zh.md'],
{ "docs/manual/further-reading/3d.zh.md": function (module, exports, __mako_require__){
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
                    id: "安装依赖",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#安装依赖",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/further-reading/3d.zh.md",
                                lineNumber: 21,
                                columnNumber: 101
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 52
                        }, this),
                        "安装依赖",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "安装依赖",
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
                                        fileName: "docs/manual/further-reading/3d.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 495
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/further-reading/3d.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 364
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/further-reading/3d.zh.md",
                                lineNumber: 21,
                                columnNumber: 290
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 1441
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "bash",
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 1473
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[2].value
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 1535
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[3].value
                    }, void 0, false, {
                        fileName: "docs/manual/further-reading/3d.zh.md",
                        lineNumber: 21,
                        columnNumber: 1571
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 1567
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[4].value
                    }, void 0, false, {
                        fileName: "docs/manual/further-reading/3d.zh.md",
                        lineNumber: 21,
                        columnNumber: 1613
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 1610
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 1663
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[6].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 1697
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[7].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 1731
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[8].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 1765
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[9].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 1799
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[10].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 1833
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[11].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 1868
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 1659
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[12].value
                    }, void 0, false, {
                        fileName: "docs/manual/further-reading/3d.zh.md",
                        lineNumber: 21,
                        columnNumber: 1911
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 1908
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[13].value
                    }, void 0, false, {
                        fileName: "docs/manual/further-reading/3d.zh.md",
                        lineNumber: 21,
                        columnNumber: 1962
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 1958
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[14].value
                    }, void 0, false, {
                        fileName: "docs/manual/further-reading/3d.zh.md",
                        lineNumber: 21,
                        columnNumber: 2005
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 2002
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[15].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 2056
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[16].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 2091
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[17].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 2126
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[18].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 2161
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 2052
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[19].value
                    }, void 0, false, {
                        fileName: "docs/manual/further-reading/3d.zh.md",
                        lineNumber: 21,
                        columnNumber: 2204
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 2201
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[20].value
                    }, void 0, false, {
                        fileName: "docs/manual/further-reading/3d.zh.md",
                        lineNumber: 21,
                        columnNumber: 2255
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 2251
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "注册扩展",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#注册扩展",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/further-reading/3d.zh.md",
                                lineNumber: 21,
                                columnNumber: 2358
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 2309
                        }, this),
                        "注册扩展",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "注册扩展",
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
                                        fileName: "docs/manual/further-reading/3d.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2752
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/further-reading/3d.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2621
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/further-reading/3d.zh.md",
                                lineNumber: 21,
                                columnNumber: 2547
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 2405
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 2295
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[21].value
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 3698
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[22].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 3735
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[23].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 3770
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[24].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 3805
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[25].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 3840
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 3731
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[26].value
                    }, void 0, false, {
                        fileName: "docs/manual/further-reading/3d.zh.md",
                        lineNumber: 21,
                        columnNumber: 3892
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 3880
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[27].value
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 3938
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "ts",
                    children: $$contentTexts[28].value
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 3971
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "创建-3d-图",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#创建-3d-图",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/further-reading/3d.zh.md",
                                lineNumber: 21,
                                columnNumber: 4101
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 4049
                        }, this),
                        "创建 3D 图",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "创建-3D-图",
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
                                        fileName: "docs/manual/further-reading/3d.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4501
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/further-reading/3d.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4370
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/further-reading/3d.zh.md",
                                lineNumber: 21,
                                columnNumber: 4296
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 4151
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 4032
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[29].value
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 5447
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "ts",
                    children: $$contentTexts[30].value
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 5480
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[31].value
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 5541
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/examples/feature/default/#lite-solar-system",
                                children: $$contentTexts[32].value
                            }, void 0, false, {
                                fileName: "docs/manual/further-reading/3d.zh.md",
                                lineNumber: 21,
                                columnNumber: 5582
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 5578
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/examples/layout/force-directed/#3d-force",
                                children: $$contentTexts[33].value
                            }, void 0, false, {
                                fileName: "docs/manual/further-reading/3d.zh.md",
                                lineNumber: 21,
                                columnNumber: 5680
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 5676
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 5574
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "其他",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#其他",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/further-reading/3d.zh.md",
                                lineNumber: 21,
                                columnNumber: 5835
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 5788
                        }, this),
                        "其他",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "其他",
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
                                        fileName: "docs/manual/further-reading/3d.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6225
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/further-reading/3d.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6094
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/further-reading/3d.zh.md",
                                lineNumber: 21,
                                columnNumber: 6020
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 5880
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 5776
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[34].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 7174
                        }, this),
                        $$contentTexts[35].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[36].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 7239
                        }, this),
                        $$contentTexts[37].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/plugins/camera-setting.ts",
                            children: $$contentTexts[38].value
                        }, void 0, false, {
                            fileName: "docs/manual/further-reading/3d.zh.md",
                            lineNumber: 21,
                            columnNumber: 7304
                        }, this),
                        $$contentTexts[39].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 7171
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[40].value
                }, void 0, false, {
                    fileName: "docs/manual/further-reading/3d.zh.md",
                    lineNumber: 21,
                    columnNumber: 7453
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/further-reading/3d.zh.md",
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
                fileName: "docs/manual/further-reading/3d.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/further-reading/3d.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/further-reading/3d.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/further-reading/3d.zh.md",
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
//# sourceMappingURL=docs_manual_further-reading_3d_zh_md-async.js.map