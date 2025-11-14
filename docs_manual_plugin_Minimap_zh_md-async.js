((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Minimap.zh.md'],
{ "docs/manual/plugin/Minimap.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/plugins/minimap.md?watch=parent");
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
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
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
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 1468
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/node/overview",
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 1535
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/node/custom-node",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 1633
                        }, this),
                        $$contentTexts[6].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
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
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 1801
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 1752
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
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 2195
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 2064
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 1990
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 1848
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 1738
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 3141
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[8].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 3177
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[9].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 3211
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 3173
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "基本用法",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基本用法",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 3313
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 3264
                        }, this),
                        "基本用法",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基本用法",
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
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 3707
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 3576
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 3502
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 3360
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 3250
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[10].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 4653
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[11].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 4686
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
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 4810
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 4761
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
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 5204
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 5073
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 4999
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 4857
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 4747
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[12].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 6150
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 6213
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[13].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 6255
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 6183
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
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 6383
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 6335
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
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6775
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 6644
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 6570
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 6429
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 6322
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7739
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7774
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7809
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7844
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[18].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7879
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 7735
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 7728
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7938
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7973
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8008
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[22].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 8047
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8043
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8091
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7934
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8135
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8170
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8205
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8240
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8275
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8131
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8290
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8325
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8360
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8395
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8401
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8286
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8416
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8451
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8486
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8521
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8527
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8412
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8542
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8577
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8612
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8647
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8653
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8538
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8668
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8738
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8773
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8808
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8664
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8823
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8858
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[43].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8923
                                                }, this),
                                                $$contentTexts[45].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[46].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8988
                                                }, this),
                                                $$contentTexts[47].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[48].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9053
                                                }, this),
                                                $$contentTexts[49].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8893
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9123
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9129
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8819
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9144
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9179
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9214
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9249
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9255
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9140
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9270
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9305
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9340
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9375
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9410
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9266
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9425
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9460
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[59].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[60].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9525
                                                }, this),
                                                $$contentTexts[61].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[62].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9590
                                                }, this),
                                                $$contentTexts[63].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[64].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9655
                                                }, this),
                                                $$contentTexts[65].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[66].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9720
                                                }, this),
                                                $$contentTexts[67].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[68].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9785
                                                }, this),
                                                $$contentTexts[69].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[70].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9850
                                                }, this),
                                                $$contentTexts[71].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[72].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9915
                                                }, this),
                                                $$contentTexts[73].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[74].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9980
                                                }, this),
                                                $$contentTexts[75].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[76].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10045
                                                }, this),
                                                $$contentTexts[77].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[78].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10110
                                                }, this),
                                                $$contentTexts[79].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[80].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10175
                                                }, this),
                                                $$contentTexts[81].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[82].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10240
                                                }, this),
                                                $$contentTexts[83].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[84].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10305
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9495
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[85].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 10353
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10349
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10397
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9421
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10412
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10482
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10517
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10523
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10408
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10538
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10573
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[91].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10612
                                                }, this),
                                                $$contentTexts[92].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[93].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10677
                                                }, this),
                                                $$contentTexts[94].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[95].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10742
                                                }, this),
                                                $$contentTexts[96].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[97].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10807
                                                }, this),
                                                $$contentTexts[98].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10608
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[99].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 10881
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10877
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10925
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10534
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10940
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10976
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[102].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11012
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[103].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11048
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11084
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10936
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 7927
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 7721
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "containerstyle",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#containerstyle",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 11194
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 11135
                        }, this),
                        "containerStyle",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "containerStyle",
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
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 11608
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11477
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 11403
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 11251
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 11111
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[104].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 12554
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[105].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 12588
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[106].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12640
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[107].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12676
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[108].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12712
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[109].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12748
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[110].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12784
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 12636
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 12629
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12844
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12880
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12916
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[114].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 12956
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12952
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13001
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 12840
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13046
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13082
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[118].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13118
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[119].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 13158
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13154
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[120].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13203
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13042
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[121].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13248
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13284
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[123].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13320
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13356
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13392
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13244
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13407
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13443
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13479
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13515
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13551
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13403
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13566
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13602
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13638
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13674
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13710
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13562
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13725
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13761
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13797
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13833
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13869
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13721
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13884
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13920
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13956
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13992
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14028
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13880
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 12833
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 12622
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "maskstyle",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#maskstyle",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 14128
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 14074
                        }, this),
                        "maskStyle",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "maskStyle",
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
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 14532
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14401
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 14327
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 14180
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 14055
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[141].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 15478
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[142].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 15512
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[143].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15564
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[144].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15600
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[145].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15636
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[146].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15672
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[147].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15708
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 15560
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 15553
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15768
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15804
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[151].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 15880
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15876
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15925
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15764
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15970
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16006
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16042
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[156].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 16082
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16078
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16127
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15966
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16172
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16208
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[160].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16244
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[161].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16280
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16316
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16168
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16361
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16397
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16433
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16469
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16505
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16357
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16550
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16586
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16622
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16658
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16694
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16546
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16739
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16775
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[175].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16811
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16847
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16883
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16735
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16928
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16964
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17000
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17036
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Minimap.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17072
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16924
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 15757
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 15546
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "position",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#position",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 17200
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 17147
                        }, this),
                        "position",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "position",
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
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 17602
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17471
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 17397
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 17251
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 17129
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[183].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 18548
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[184].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 18586
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[185].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[186].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18653
                                }, this),
                                $$contentTexts[187].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[188].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18720
                                }, this),
                                $$contentTexts[189].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[190].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18787
                                }, this),
                                $$contentTexts[191].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[192].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18854
                                }, this),
                                $$contentTexts[193].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[194].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18921
                                }, this),
                                $$contentTexts[195].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[196].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18988
                                }, this),
                                $$contentTexts[197].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[198].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19055
                                }, this),
                                $$contentTexts[199].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[200].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19122
                                }, this),
                                $$contentTexts[201].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[202].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19189
                                }, this),
                                $$contentTexts[203].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[204].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19256
                                }, this),
                                $$contentTexts[205].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[206].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19323
                                }, this),
                                $$contentTexts[207].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[208].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19390
                                }, this),
                                $$contentTexts[209].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[210].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19457
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 18622
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 18582
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[211].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 19507
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[212].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 19569
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 19633
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[213].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 19689
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 19603
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "size",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#size",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 19820
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 19771
                        }, this),
                        "size",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "size",
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
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 20214
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 20083
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 20009
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 19867
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 19757
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[214].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 21160
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[215].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 21194
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[216].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 21256
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 21320
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[217].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 21376
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 21290
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
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 21507
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 21458
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
                                        fileName: "docs/manual/plugin/Minimap.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 21901
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Minimap.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 21770
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Minimap.zh.md",
                                lineNumber: 23,
                                columnNumber: 21696
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 21554
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 21444
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 22877
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[218].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Minimap.zh.md",
                            lineNumber: 23,
                            columnNumber: 22921
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Minimap.zh.md",
                    lineNumber: 23,
                    columnNumber: 22847
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/plugin/Minimap.zh.md",
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
                fileName: "docs/manual/plugin/Minimap.zh.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/plugin/Minimap.zh.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/plugin/Minimap.zh.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/plugin/Minimap.zh.md",
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
//# sourceMappingURL=docs_manual_plugin_Minimap_zh_md-async.js.map