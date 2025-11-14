((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/plugin.zh.md'],
{ "docs/api/plugin.zh.md": function (module, exports, __mako_require__){
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
                    id: "插件概述",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#插件概述",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 101
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 52
                        }, this),
                        "插件概述",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "插件概述",
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
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 495
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 364
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 290
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/plugin/overview",
                            children: $$contentTexts[0].value
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 1444
                        }, this),
                        $$contentTexts[1].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 1441
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[2].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 1540
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
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 1639
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 1588
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
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2037
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1906
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 1832
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 1688
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 1572
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetplugininstancekey",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetplugininstancekey",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 3088
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 3018
                        }, this),
                        "Graph.getPluginInstance(key)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getPluginInstance(key)",
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
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3530
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3399
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 3325
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 3159
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 2983
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 4476
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[4].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 4508
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[5].value
                    }, void 0, false, {
                        fileName: "docs/api/plugin.zh.md",
                        lineNumber: 21,
                        columnNumber: 4579
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 4576
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4643
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4677
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4711
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4745
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4779
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 4639
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 4632
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4838
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4873
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4908
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4943
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4978
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 4834
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 4827
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 4625
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[16].value
                    }, void 0, false, {
                        fileName: "docs/api/plugin.zh.md",
                        lineNumber: 21,
                        columnNumber: 5037
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 5034
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[17].value
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5092
                                }, this),
                                $$contentTexts[18].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 5088
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[19].value
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5170
                                }, this),
                                $$contentTexts[20].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 5166
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 5084
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[21].value
                    }, void 0, false, {
                        fileName: "docs/api/plugin.zh.md",
                        lineNumber: 21,
                        columnNumber: 5252
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 5249
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[22].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[23].value
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 5328
                        }, this),
                        $$contentTexts[24].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[25].value
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 5393
                        }, this),
                        $$contentTexts[26].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 5299
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[27].value
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 5465
                        }, this),
                        $$contentTexts[28].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 5462
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[29].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 5538
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetplugins",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetplugins",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 5692
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 5632
                        }, this),
                        "Graph.getPlugins()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getPlugins()",
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
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6114
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5983
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 5909
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 5753
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 5607
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[30].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 7060
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[31].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 7093
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[32].value
                    }, void 0, false, {
                        fileName: "docs/api/plugin.zh.md",
                        lineNumber: 21,
                        columnNumber: 7165
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 7162
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[33].value
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7220
                                }, this),
                                $$contentTexts[34].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#pluginoptions",
                                    children: $$contentTexts[35].value
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7289
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 7216
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[36].value
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7357
                                }, this),
                                $$contentTexts[37].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 7353
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 7212
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[38].value
                    }, void 0, false, {
                        fileName: "docs/api/plugin.zh.md",
                        lineNumber: 21,
                        columnNumber: 7439
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 7436
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[39].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 7486
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphsetpluginsplugins",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphsetpluginsplugins",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 7654
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 7587
                        }, this),
                        "Graph.setPlugins(plugins)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.setPlugins(plugins)",
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
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8090
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7959
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 7885
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 7722
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 7555
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[40].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 9036
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[41].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 9069
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[42].value
                    }, void 0, false, {
                        fileName: "docs/api/plugin.zh.md",
                        lineNumber: 21,
                        columnNumber: 9141
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 9138
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[43].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9206
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[44].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9241
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[45].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9276
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9311
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[47].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9346
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 9202
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 9195
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[48].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9405
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[49].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9440
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#pluginoptions",
                                                children: $$contentTexts[50].value
                                            }, void 0, false, {
                                                fileName: "docs/api/plugin.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9479
                                            }, this),
                                            $$contentTexts[51].value
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9475
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[52].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9569
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[53].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9604
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 9401
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 9394
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 9188
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[54].value
                    }, void 0, false, {
                        fileName: "docs/api/plugin.zh.md",
                        lineNumber: 21,
                        columnNumber: 9663
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 9660
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[55].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 9710
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[56].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 9743
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[57].value
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 9815
                        }, this),
                        $$contentTexts[58].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 9812
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[59].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 9888
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[60].value
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 9960
                        }, this),
                        $$contentTexts[61].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 9957
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[62].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 10033
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphupdatepluginplugin",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphupdatepluginplugin",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 10203
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 10135
                        }, this),
                        "Graph.updatePlugin(plugin)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.updatePlugin(plugin)",
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
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10641
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10510
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 10436
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 10272
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 10102
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[63].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[64].value
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 11616
                        }, this),
                        $$contentTexts[65].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 11587
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[66].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 11685
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[67].value
                    }, void 0, false, {
                        fileName: "docs/api/plugin.zh.md",
                        lineNumber: 21,
                        columnNumber: 11757
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 11754
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[68].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11822
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[69].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11857
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[70].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11892
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[71].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11927
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[72].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11962
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 11818
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 11811
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[73].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12021
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[74].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12056
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                            to: "#updatepluginoption",
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/api/plugin.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12095
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12091
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[76].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12164
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[77].value
                                    }, void 0, false, {
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12199
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 12017
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 12010
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 11804
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[78].value
                    }, void 0, false, {
                        fileName: "docs/api/plugin.zh.md",
                        lineNumber: 21,
                        columnNumber: 12258
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 12255
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[79].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[80].value
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 12334
                        }, this),
                        $$contentTexts[81].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 12305
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[82].value
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 12406
                        }, this),
                        $$contentTexts[83].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 12403
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[84].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 12479
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
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 12611
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 12562
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
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13005
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12874
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 12800
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 12658
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 12548
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "pluginoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#pluginoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 14032
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 13974
                        }, this),
                        "PluginOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "PluginOptions",
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
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14444
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14313
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 14239
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 14088
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 13951
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[85].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 15390
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[86].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 15423
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "custompluginoption",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#custompluginoption",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 15583
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 15520
                        }, this),
                        "CustomPluginOption",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "CustomPluginOption",
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
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16005
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15874
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 15800
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 15644
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 15492
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[87].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 16951
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[88].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 16984
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "updatepluginoption",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#updatepluginoption",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 17144
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 17081
                        }, this),
                        "UpdatePluginOption",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "UpdatePluginOption",
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
                                        fileName: "docs/api/plugin.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17566
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/plugin.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17435
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/plugin.zh.md",
                                lineNumber: 21,
                                columnNumber: 17361
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/plugin.zh.md",
                            lineNumber: 21,
                            columnNumber: 17205
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 17053
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[89].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 18512
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[90].value
                }, void 0, false, {
                    fileName: "docs/api/plugin.zh.md",
                    lineNumber: 21,
                    columnNumber: 18545
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/api/plugin.zh.md",
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
                fileName: "docs/api/plugin.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/plugin.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/plugin.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/plugin.zh.md",
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
//# sourceMappingURL=docs_api_plugin_zh_md-async.js.map