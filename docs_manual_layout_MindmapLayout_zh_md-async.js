((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/MindmapLayout.zh.md'],
{ "docs/manual/layout/MindmapLayout.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
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
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1461
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/examples#layout-mindmap",
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1528
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/hierarchy/blob/master/src/mindmap.js",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1621
                        }, this),
                        $$contentTexts[6].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*J1l5RofvbP0AAAAAAAAAAABkARQnAQ",
                    width: "350",
                    alt: "img"
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1752
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
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1936
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1887
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
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2330
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2199
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 2125
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1983
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1873
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3276
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
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3397
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3349
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
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3789
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3658
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3584
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3443
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3336
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i4/O1CN014J5e691gxm5GSrwD2_!!6000000004209-0-tps-1163-832.jpg",
                    width: "400",
                    alt: "脑图树配置项图解"
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4735
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4887
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4921
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4955
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4990
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5025
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 4883
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4876
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5084
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5119
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[15].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5158
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5154
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5202
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5237
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5080
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5281
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[19].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#direction",
                                                    children: $$contentTexts[20].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5346
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5316
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5410
                                                }, this),
                                                $$contentTexts[22].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[23].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5475
                                                }, this),
                                                $$contentTexts[24].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[25].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5540
                                                }, this),
                                                $$contentTexts[26].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[27].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5605
                                                }, this),
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5670
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5406
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[30].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5718
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5714
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5762
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5277
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5777
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5812
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5847
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5882
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5888
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5773
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5932
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5967
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6002
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6037
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6043
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5928
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6087
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6122
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6157
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6192
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6198
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6083
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6213
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6248
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6283
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6318
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6324
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6209
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6339
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[46].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6404
                                                }, this),
                                                $$contentTexts[48].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6374
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6474
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6509
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6515
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6335
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5073
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4869
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "direction",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#direction",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 6615
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6561
                        }, this),
                        "direction",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "direction",
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
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7019
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6888
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 6814
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6667
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 6542
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[50].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 7980
                            }, this),
                            $$contentTexts[51].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[52].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8045
                            }, this),
                            $$contentTexts[53].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[54].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8110
                            }, this),
                            $$contentTexts[55].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[56].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8175
                            }, this),
                            $$contentTexts[57].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[58].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8240
                            }, this),
                            $$contentTexts[59].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[60].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8305
                            }, this),
                            $$contentTexts[61].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[62].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8374
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 7977
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7965
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[63].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8430
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[64].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8471
                            }, this),
                            $$contentTexts[65].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[66].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8536
                            }, this),
                            $$contentTexts[67].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 8467
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8463
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*J1l5RofvbP0AAAAAAAAAAABkARQnAQ",
                    width: "170",
                    alt: "水平布局"
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8611
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[68].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8741
                            }, this),
                            $$contentTexts[69].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 8737
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8733
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i2/O1CN01SWsfai28ZmZu2ehyh_!!6000000007947-0-tps-1390-1254.jpg",
                    width: "150",
                    alt: "竖直布局"
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8816
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[70].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8955
                            }, this),
                            $$contentTexts[71].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 8951
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8947
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i1/O1CN01DFh7iu26fcORrjGfT_!!6000000007689-0-tps-1396-1254.jpg",
                    width: "150",
                    alt: "竖直布局"
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9030
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[72].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9169
                            }, this),
                            $$contentTexts[73].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 9165
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9161
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i2/O1CN01zppRLx1Igmbtv4EyJ_!!6000000000923-0-tps-1388-1282.jpg",
                    width: "150",
                    alt: "竖直布局"
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9244
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getwidth",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getwidth",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9446
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9393
                        }, this),
                        "getWidth",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getWidth",
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
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9848
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9717
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9643
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9497
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9375
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[74].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10809
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 10806
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10794
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[75].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10861
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[76].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10894
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[77].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10927
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getheight",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getheight",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 11069
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11015
                        }, this),
                        "getHeight",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getHeight",
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
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11473
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11342
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 11268
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11121
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10996
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[78].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12434
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 12431
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12419
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[79].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12486
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[80].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12519
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[81].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12552
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "gethgap",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#gethgap",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12690
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12638
                        }, this),
                        "getHGap",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getHGap",
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
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13090
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12959
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12885
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12740
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12621
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[82].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14051
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 14048
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14036
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[83].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14103
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[84].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14136
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[85].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14169
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getvgap",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getvgap",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14307
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14255
                        }, this),
                        "getVGap",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getVGap",
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
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14707
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14576
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14502
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14357
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14238
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[86].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15668
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 15665
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15653
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[87].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15720
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[88].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15753
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[89].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15786
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getside",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getside",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 15924
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15872
                        }, this),
                        "getSide",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getSide",
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
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16324
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16193
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 16119
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15974
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15855
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[90].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17285
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 17282
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17270
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[91].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[92].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17366
                        }, this),
                        $$contentTexts[93].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[94].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17431
                        }, this),
                        $$contentTexts[95].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/hierarchy/blob/d786901874f59d96c47e2a5dfe17b373eefd72e3/src/layout/separate-root.js#L11",
                            children: $$contentTexts[96].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17496
                        }, this),
                        $$contentTexts[97].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17337
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[98].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17680
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[99].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17713
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "布局适用场景",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#布局适用场景",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17849
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17798
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
                                        fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18247
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18116
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 18042
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17898
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17782
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[100].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[101].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19228
                                }, this),
                                $$contentTexts[102].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19197
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[103].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19300
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19193
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/MindmapLayout.zh.md",
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
                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/MindmapLayout.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/MindmapLayout.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/MindmapLayout.zh.md",
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
//# sourceMappingURL=docs_manual_layout_MindmapLayout_zh_md-async.js.map