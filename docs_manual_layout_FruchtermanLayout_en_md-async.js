((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/FruchtermanLayout.en.md'],
{ "docs/manual/layout/FruchtermanLayout.en.md": function (module, exports, __mako_require__){
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
                    id: "overview",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#overview",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
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
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1485
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/examples#layout-fruchterman",
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1651
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/fruchterman.ts",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1751
                        }, this),
                        $$contentTexts[6].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "use-cases",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#use-cases",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 1968
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1914
                        }, this),
                        "Use Cases",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Use-Cases",
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2372
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2241
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 2167
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 2020
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1895
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[7].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3322
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[8].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3356
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3318
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3464
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3412
                        }, this),
                        "Options",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Options",
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3864
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3733
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3659
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3514
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3395
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4828
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4862
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4897
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4932
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4967
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 4824
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4817
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5026
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5061
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[16].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 5100
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5096
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5144
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5179
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5022
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5223
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5258
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[21].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 5297
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5293
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5341
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5376
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5219
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5391
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5426
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[25].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 5465
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5461
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5509
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5544
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5387
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5559
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                    href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/types.ts#L915",
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5624
                                                }, this),
                                                $$contentTexts[30].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5594
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[31].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 5774
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5770
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5818
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5853
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5555
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5868
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5903
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[35].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 5942
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5938
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5986
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6021
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5864
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6036
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6071
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[39].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                    href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/types.ts#L69",
                                                    children: $$contentTexts[40].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6136
                                                }, this),
                                                $$contentTexts[41].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6106
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6281
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6316
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6032
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5015
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4810
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "cluster-layout",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#cluster-layout",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6426
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6367
                        }, this),
                        "Cluster Layout",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Cluster-Layout",
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6840
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6709
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6635
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6483
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6343
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[43].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7804
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[44].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7839
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[45].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7874
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7909
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[47].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7944
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 7800
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 7793
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8003
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8038
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[50].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 8077
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8073
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[51].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 8125
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8121
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8169
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7999
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8184
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[53].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[54].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8249
                                                }, this),
                                                $$contentTexts[55].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8219
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[56].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 8323
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8319
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[57].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 8371
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8367
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8415
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8180
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8430
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[59].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[60].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8495
                                                }, this),
                                                $$contentTexts[61].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8465
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[62].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 8569
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8565
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8613
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8648
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8426
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 7992
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 7786
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "example-code",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#example-code",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8754
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8697
                        }, this),
                        "Example Code",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Example-Code",
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9164
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9033
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8959
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8809
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8675
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "basic-layout",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-layout",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10189
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10132
                        }, this),
                        "Basic Layout",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Layout",
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10599
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10468
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10394
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10244
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10110
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11575
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[64].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11631
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11545
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("details", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("summary", {
                            children: $$contentTexts[65].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11707
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "javascript",
                            children: $$contentTexts[66].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11752
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11698
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "cluster-layout-1",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#cluster-layout-1",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11918
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11857
                        }, this),
                        "Cluster Layout",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Cluster-Layout",
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
                                        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12332
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12201
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12127
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11975
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11831
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13308
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[67].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13364
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13278
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("details", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("summary", {
                            children: $$contentTexts[68].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13440
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "javascript",
                            children: $$contentTexts[69].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13485
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13431
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
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
                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/FruchtermanLayout.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/FruchtermanLayout.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/FruchtermanLayout.en.md",
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
//# sourceMappingURL=docs_manual_layout_FruchtermanLayout_en_md-async.js.map