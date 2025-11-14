((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/transform/MapNodeSize.zh.md'],
{ "common/api/transforms/map-node-size-centrality.md?watch=parent": function (module, exports, __mako_require__){

},
"common/api/transforms/map-node-size-scale.md?watch=parent": function (module, exports, __mako_require__){

},
"docs/manual/transform/MapNodeSize.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/transforms/map-node-size-centrality.md?watch=parent");
__mako_require__("common/api/transforms/map-node-size-scale.md?watch=parent");
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
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
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
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
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
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 1528
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
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
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 1922
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 1791
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 1717
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 1575
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 1465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 2868
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[2].value
                }, void 0, false, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 2900
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[3].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 2943
                                    }, this),
                                    $$contentTexts[4].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 2940
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 2936
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[5].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 3026
                                    }, this),
                                    $$contentTexts[6].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 3023
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 3019
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 3109
                                    }, this),
                                    $$contentTexts[8].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 3106
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 3102
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 2932
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
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 3251
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 3203
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
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 3643
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 3512
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 3438
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 3297
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 3190
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 4607
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 4641
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 4676
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 4711
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 4746
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 4603
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 4596
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 4805
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 4840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 4875
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 4910
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 4945
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 4801
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 4989
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[20].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#centrality",
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 5054
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5024
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#nodecentralityoptions",
                                                    children: $$contentTexts[22].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 5119
                                                }, this),
                                                $$contentTexts[23].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E5%9B%BE%E6%95%B0%E6%8D%AEgraphdata",
                                                    children: $$contentTexts[24].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 5212
                                                }, this),
                                                $$contentTexts[25].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5115
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[26].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 5341
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5337
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5385
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 4985
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5400
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5435
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5470
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5540
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 5396
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5555
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5590
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5625
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5660
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5695
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 5551
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5710
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5745
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5780
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5815
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5850
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 5706
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5865
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[40].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#scale",
                                                    children: $$contentTexts[41].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 5930
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5900
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[42].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 5990
                                                }, this),
                                                $$contentTexts[43].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 6055
                                                }, this),
                                                $$contentTexts[45].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[46].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 6120
                                                }, this),
                                                $$contentTexts[47].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[48].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 6185
                                                }, this),
                                                $$contentTexts[49].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5986
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[50].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 6259
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 6255
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 6303
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 5861
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 4794
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 4589
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "centrality",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#centrality",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 6405
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 6350
                        }, this),
                        "centrality",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "centrality",
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
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 6811
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 6680
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 6606
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 6458
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 6330
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[51].value
                }, void 0, false, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 7757
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[52].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 7798
                                }, this),
                                $$contentTexts[53].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 7794
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[54].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 7872
                                }, this),
                                $$contentTexts[55].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 7868
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[56].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 7946
                                }, this),
                                $$contentTexts[57].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 7942
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[58].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8020
                                }, this),
                                $$contentTexts[59].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 8016
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[60].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8094
                                }, this),
                                $$contentTexts[61].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 8090
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[62].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[63].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8194
                                }, this),
                                $$contentTexts[64].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[65].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8259
                                }, this),
                                $$contentTexts[66].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[67].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8324
                                }, this),
                                $$contentTexts[68].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 8164
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 7790
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[69].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                        lineNumber: 26,
                        columnNumber: 8402
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 8399
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    highlightLines: [
                        6,
                        7,
                        8,
                        9
                    ],
                    children: $$contentTexts[70].value
                }, void 0, false, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 8449
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[71].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[72].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 8577
                        }, this),
                        $$contentTexts[73].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 8548
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 8676
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[74].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 8718
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 8646
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "nodecentralityoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodecentralityoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 8882
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 8816
                        }, this),
                        "NodeCentralityOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "NodeCentralityOptions",
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
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 9310
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 9179
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 9105
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 8946
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 8785
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[75].value
                }, void 0, false, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 10256
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[76].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 10328
                        }, this),
                        $$contentTexts[77].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[78].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 10393
                        }, this),
                        $$contentTexts[79].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[80].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 10458
                        }, this),
                        $$contentTexts[81].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[82].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 10523
                        }, this),
                        $$contentTexts[83].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 10325
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[84].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 10595
                        }, this),
                        $$contentTexts[85].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 10592
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[86].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 10667
                        }, this),
                        $$contentTexts[87].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 10664
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[88].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 10739
                        }, this),
                        $$contentTexts[89].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 10736
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[90].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 10811
                        }, this),
                        $$contentTexts[91].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 10808
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "scale",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#scale",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 10945
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 10895
                        }, this),
                        "scale",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "scale",
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
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 11341
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 11210
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 11136
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 10993
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 10880
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[92].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 12295
                                }, this),
                                $$contentTexts[93].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 12291
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[94].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 12369
                                }, this),
                                $$contentTexts[95].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 12365
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[96].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 12443
                                }, this),
                                $$contentTexts[97].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 12439
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[98].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 12517
                                }, this),
                                $$contentTexts[99].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 12513
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[100].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[101].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 12618
                                }, this),
                                $$contentTexts[102].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[103].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 12685
                                }, this),
                                $$contentTexts[104].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[105].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 12752
                                }, this),
                                $$contentTexts[106].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[107].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 12819
                                }, this),
                                $$contentTexts[108].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 12587
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 12287
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[109].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                        lineNumber: 26,
                        columnNumber: 12899
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 12896
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    highlightLines: [
                        9
                    ],
                    children: $$contentTexts[110].value
                }, void 0, false, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 12947
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[111].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[112].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 13068
                        }, this),
                        $$contentTexts[113].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[114].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 13135
                        }, this),
                        $$contentTexts[115].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 13038
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 13236
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[116].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 13278
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 13206
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
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 13409
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 13360
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
                                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 13803
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 13672
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                                lineNumber: 26,
                                columnNumber: 13598
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 13456
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 13346
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/examples/feature/default/#unicorns-investors",
                            children: $$contentTexts[117].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/MapNodeSize.zh.md",
                            lineNumber: 26,
                            columnNumber: 14757
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/transform/MapNodeSize.zh.md",
                        lineNumber: 26,
                        columnNumber: 14753
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/transform/MapNodeSize.zh.md",
                    lineNumber: 26,
                    columnNumber: 14749
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/transform/MapNodeSize.zh.md",
            lineNumber: 26,
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
                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                lineNumber: 33,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/transform/MapNodeSize.zh.md",
                lineNumber: 33,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/transform/MapNodeSize.zh.md",
            lineNumber: 33,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/transform/MapNodeSize.zh.md",
        lineNumber: 33,
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
//# sourceMappingURL=docs_manual_transform_MapNodeSize_zh_md-async.js.map