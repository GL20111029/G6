((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/FruchtermanLayout.zh.md'],
{ "docs/manual/layout/FruchtermanLayout.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://www.mathe2.uni-bayreuth.de/axel/papers/reingold:graph_drawing_by_force_directed_placement.pdf",
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1461
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/examples#layout-fruchterman",
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1627
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/fruchterman.ts",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1724
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
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
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1906
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1857
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2300
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2169
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 2095
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1953
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1843
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[6].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3250
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[7].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3284
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3246
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
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3384
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3336
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3776
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3645
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3571
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3430
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3323
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4740
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4774
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4808
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4843
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4878
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 4736
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4729
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4937
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4972
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[15].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5011
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5007
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5055
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5090
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4933
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5134
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5169
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[20].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5208
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5204
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5252
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5287
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5130
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5302
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5337
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[24].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5376
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5372
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5420
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5455
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5298
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5470
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[27].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                    href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/types.ts#L915",
                                                    children: $$contentTexts[28].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5535
                                                }, this),
                                                $$contentTexts[29].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[30].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5685
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5681
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5729
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5764
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5466
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5779
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5814
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[34].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5853
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5849
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5897
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5932
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5775
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5947
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5982
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[38].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                    href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/types.ts#L69",
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6047
                                                }, this),
                                                $$contentTexts[40].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6017
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6192
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6227
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5943
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4926
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4722
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "聚类布局",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#聚类布局",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 6317
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6268
                        }, this),
                        "聚类布局",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "聚类布局",
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6711
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6580
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 6506
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6364
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 6254
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[42].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7675
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[43].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7710
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[44].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7745
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[45].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7780
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7815
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 7671
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7664
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7874
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7909
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[49].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7948
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7944
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[50].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7996
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7992
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8040
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7870
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8055
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8120
                                                }, this),
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[55].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8185
                                                }, this),
                                                $$contentTexts[56].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[57].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8250
                                                }, this),
                                                $$contentTexts[58].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8090
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[59].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8324
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8320
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[60].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8372
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8368
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8416
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8051
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8431
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[62].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[63].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8496
                                                }, this),
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8561
                                                }, this),
                                                $$contentTexts[66].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8466
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[67].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8635
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8631
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8679
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8714
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8427
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7863
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7657
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
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8804
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8755
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9198
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9067
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8993
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8851
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8741
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "基本布局",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基本布局",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10207
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10158
                        }, this),
                        "基本布局",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基本布局",
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10601
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10470
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10396
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10254
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10144
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11577
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[69].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11633
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 11547
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("details", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("summary", {
                            children: $$contentTexts[70].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11709
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "javascript",
                            children: $$contentTexts[71].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11754
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 11700
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "聚类布局-1",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#聚类布局-1",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 11900
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11849
                        }, this),
                        "聚类布局",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "聚类布局",
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12294
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12163
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12089
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11947
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 11833
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13270
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[72].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13326
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 13240
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("details", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("summary", {
                            children: $$contentTexts[73].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13402
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "javascript",
                            children: $$contentTexts[74].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13447
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 13393
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
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
                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/FruchtermanLayout.zh.md",
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
//# sourceMappingURL=docs_manual_layout_FruchtermanLayout_zh_md-async.js.map