((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/edge/Polyline.en.md'],
{ "docs/manual/element/edge/Polyline.en.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/elements/edges/polyline.md?watch=parent");
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
                    id: "overview",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#overview",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 56
                        }, this),
                        "Overview",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Overview",
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
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 1489
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: $$contentTexts[2].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 1529
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 1525
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: $$contentTexts[3].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 1570
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 1566
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 1521
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "online-experience",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#online-experience",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 1701
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 1639
                        }, this),
                        "Online Experience",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Online-Experience",
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
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 2121
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 1990
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 1916
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 1761
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 1612
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 3097
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 3139
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 3067
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[5].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[6].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 3233
                        }, this),
                        $$contentTexts[7].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[8].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 3296
                        }, this),
                        $$contentTexts[9].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 3205
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "style-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#style-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 3456
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 3392
                        }, this),
                        "Style Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Style-Configuration",
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
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 3880
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 3749
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 3675
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 3518
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 3363
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[10].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/element/edge/base-edge",
                                children: $$contentTexts[11].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 4867
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/Polyline.en.md",
                        lineNumber: 23,
                        columnNumber: 4838
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 4826
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 4980
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 5015
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 5050
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 5085
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 5120
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 4976
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 4969
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5179
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5214
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#point",
                                                    children: $$contentTexts[19].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 5253
                                                }, this),
                                                $$contentTexts[20].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5249
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5335
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5370
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 5175
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5385
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5420
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5455
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5490
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5525
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 5381
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5540
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5575
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#orthrouter",
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 5640
                                                }, this),
                                                $$contentTexts[30].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#shortestpathrouter",
                                                    children: $$contentTexts[31].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 5722
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5610
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5791
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 5826
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 5536
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 5168
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 4962
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "orthrouter",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#orthrouter",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 5928
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 5873
                        }, this),
                        "OrthRouter",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "OrthRouter",
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
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 6334
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 6203
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 6129
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 5981
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 5853
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[33].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7298
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[34].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7333
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[35].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7368
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[36].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7403
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 7294
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 7287
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7462
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7497
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[39].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                                lineNumber: 23,
                                                columnNumber: 7536
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7532
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7580
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 7458
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7624
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7659
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#padding",
                                                children: $$contentTexts[43].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                                lineNumber: 23,
                                                columnNumber: 7698
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7694
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[44].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                                lineNumber: 23,
                                                columnNumber: 7760
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7756
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 7620
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 7451
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 7280
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "shortestpathrouter",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#shortestpathrouter",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 7916
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 7853
                        }, this),
                        "ShortestPathRouter",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ShortestPathRouter",
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
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 8338
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8207
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 8133
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 7977
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 7825
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[45].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 9302
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 9337
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[47].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 9372
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[48].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 9407
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 9298
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 9291
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9466
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9531
                                                }, this),
                                                $$contentTexts[52].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9501
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[53].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                                lineNumber: 23,
                                                columnNumber: 9605
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9601
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9649
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9462
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9693
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9728
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#padding",
                                                children: $$contentTexts[57].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                                lineNumber: 23,
                                                columnNumber: 9767
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9763
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9825
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9689
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9869
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9904
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9939
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9974
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9865
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10018
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10053
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[65].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10088
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10123
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10014
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10167
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10202
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#direction",
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10241
                                                }, this),
                                                $$contentTexts[70].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10237
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10327
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10163
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10371
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10406
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#direction",
                                                    children: $$contentTexts[74].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10445
                                                }, this),
                                                $$contentTexts[75].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10441
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10531
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10367
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10575
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10610
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[79].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#direction",
                                                    children: $$contentTexts[80].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10675
                                                }, this),
                                                $$contentTexts[81].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10645
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10761
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10571
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[83].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10805
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[84].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10875
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10910
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10801
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10954
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10989
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[89].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#point",
                                                    children: $$contentTexts[90].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11054
                                                }, this),
                                                $$contentTexts[91].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#point",
                                                    children: $$contentTexts[92].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11131
                                                }, this),
                                                $$contentTexts[93].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11024
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11213
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10950
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11257
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11292
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11327
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11362
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 11253
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11406
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11441
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11477
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[102].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/Polyline.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11513
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 11402
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 9455
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 9284
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "direction",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#direction",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 11643
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 11589
                        }, this),
                        "Direction",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Direction",
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
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 12047
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 11916
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 11842
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 11695
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 11570
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[103].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 12993
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "point",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#point",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 13128
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 13078
                        }, this),
                        "Point",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Point",
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
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 13524
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 13393
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 13319
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 13176
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 13063
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[104].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 14470
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "padding",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#padding",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 14609
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 14557
                        }, this),
                        "Padding",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Padding",
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
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15009
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 14878
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 14804
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 14659
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 14540
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[105].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 15955
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "example",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#example",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 16094
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 16042
                        }, this),
                        "Example",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Example",
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
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 16494
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 16363
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 16289
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 16144
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 16025
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "built-in-polyline-edge-effect",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#built-in-polyline-edge-effect",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 17553
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 17479
                        }, this),
                        "Built-in Polyline Edge Effect",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Built-in-Polyline-Edge-Effect",
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
                                        fileName: "docs/manual/element/edge/Polyline.en.md",
                                        lineNumber: 23,
                                        columnNumber: 17997
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/Polyline.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17866
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/Polyline.en.md",
                                lineNumber: 23,
                                columnNumber: 17792
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 17625
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 17440
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 18973
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[106].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/Polyline.en.md",
                            lineNumber: 23,
                            columnNumber: 19017
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/Polyline.en.md",
                    lineNumber: 23,
                    columnNumber: 18943
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/element/edge/Polyline.en.md",
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
                fileName: "docs/manual/element/edge/Polyline.en.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/element/edge/Polyline.en.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/element/edge/Polyline.en.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/element/edge/Polyline.en.md",
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
//# sourceMappingURL=docs_manual_element_edge_Polyline_en_md-async.js.map