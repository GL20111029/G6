((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/ConcentricLayout.en.md'],
{ "docs/manual/layout/ConcentricLayout.en.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
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
                                        fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/examples#layout-concentric",
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1485
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/circular.ts",
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1584
                        }, this),
                        $$contentTexts[4].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "usage-scenarios",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#usage-scenarios",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 1810
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1750
                        }, this),
                        "Usage Scenarios",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Usage-Scenarios",
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
                                        fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2226
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2095
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 2021
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1868
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1725
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3176
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[6].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3210
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3172
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
                                fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3318
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3266
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
                                        fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3718
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3587
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3513
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3368
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3249
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4682
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4716
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4750
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4784
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4819
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 4678
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4671
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4878
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4913
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[14].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 4952
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4948
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4996
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5031
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4874
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5075
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5110
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5145
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5180
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5215
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5071
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5230
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5265
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5300
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5335
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5370
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5226
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5385
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5420
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5455
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5490
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5525
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5381
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5540
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5575
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5610
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5645
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5680
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5536
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5695
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5730
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5765
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5800
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5835
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5691
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5850
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5885
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5920
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[40].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 5959
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5955
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6003
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5846
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6018
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6053
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6088
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6123
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6158
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6014
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6173
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6208
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6243
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6278
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6313
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6169
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6328
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6363
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6398
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6433
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6468
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6324
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6483
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6518
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6553
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6588
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6623
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6479
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6638
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6673
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6708
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6743
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6778
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6634
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6793
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[62].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                                    children: $$contentTexts[63].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6858
                                                }, this),
                                                $$contentTexts[64].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6828
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[65].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6924
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6959
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6994
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6789
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4867
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4664
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
                                fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 7100
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 7043
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
                                        fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7510
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7379
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ConcentricLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 7305
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 7155
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 7021
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8486
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[67].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8530
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8456
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/ConcentricLayout.en.md",
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
                fileName: "docs/manual/layout/ConcentricLayout.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/ConcentricLayout.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/ConcentricLayout.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/ConcentricLayout.en.md",
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
//# sourceMappingURL=docs_manual_layout_ConcentricLayout_en_md-async.js.map