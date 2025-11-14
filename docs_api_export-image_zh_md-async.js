((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/export-image.zh.md'],
{ "docs/api/export-image.zh.md": function (module, exports, __mako_require__){
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
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "图片导出概述",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#图片导出概述",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/api/export-image.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 105
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/export-image.zh.md",
                                lineNumber: 21,
                                columnNumber: 54
                            }, this),
                            "图片导出概述",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "图片导出概述",
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
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 503
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/api/export-image.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 372
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/export-image.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 298
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/export-image.zh.md",
                                lineNumber: 21,
                                columnNumber: 154
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[0].value
                    }, void 0, false, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 1449
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
                                    fileName: "docs/api/export-image.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1548
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/export-image.zh.md",
                                lineNumber: 21,
                                columnNumber: 1497
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
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1946
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/api/export-image.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1815
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/export-image.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1741
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/export-image.zh.md",
                                lineNumber: 21,
                                columnNumber: 1597
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 1481
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "graphtodataurloptions",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#graphtodataurloptions",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/api/export-image.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2989
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/export-image.zh.md",
                                lineNumber: 21,
                                columnNumber: 2923
                            }, this),
                            "Graph.toDataURL(options)",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Graph.toDataURL(options)",
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
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 3423
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/api/export-image.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3292
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/export-image.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3218
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/export-image.zh.md",
                                lineNumber: 21,
                                columnNumber: 3056
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 2892
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[1].value
                    }, void 0, false, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 4369
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[2].value
                    }, void 0, false, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 4401
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/api/export-image.zh.md",
                            lineNumber: 21,
                            columnNumber: 4472
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 4469
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[4].value
                                        }, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4536
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[5].value
                                        }, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4570
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[6].value
                                        }, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4604
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[7].value
                                        }, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4638
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[8].value
                                        }, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4672
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/export-image.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4532
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/export-image.zh.md",
                                lineNumber: 21,
                                columnNumber: 4525
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[9].value
                                        }, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4730
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4764
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4799
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4834
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4869
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/export-image.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4726
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/export-image.zh.md",
                                lineNumber: 21,
                                columnNumber: 4719
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 4518
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[13].value
                        }, void 0, false, {
                            fileName: "docs/api/export-image.zh.md",
                            lineNumber: 21,
                            columnNumber: 4899
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 4896
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[14].value
                    }, void 0, false, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 4946
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[15].value
                        }, void 0, false, {
                            fileName: "docs/api/export-image.zh.md",
                            lineNumber: 21,
                            columnNumber: 4982
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 4979
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5047
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5082
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5117
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5152
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/export-image.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5043
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/export-image.zh.md",
                                lineNumber: 21,
                                columnNumber: 5036
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[20].value
                                            }, void 0, false, {
                                                fileName: "docs/api/export-image.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5211
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[21].value
                                            }, void 0, false, {
                                                fileName: "docs/api/export-image.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5246
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[22].value
                                            }, void 0, false, {
                                                fileName: "docs/api/export-image.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5281
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[23].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                        fileName: "docs/api/export-image.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 5346
                                                    }, this),
                                                    $$contentTexts[24].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                        fileName: "docs/api/export-image.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 5378
                                                    }, this),
                                                    $$contentTexts[25].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/api/export-image.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5316
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/api/export-image.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5207
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[26].value
                                            }, void 0, false, {
                                                fileName: "docs/api/export-image.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5424
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[27].value
                                            }, void 0, false, {
                                                fileName: "docs/api/export-image.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5459
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[28].value
                                            }, void 0, false, {
                                                fileName: "docs/api/export-image.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5494
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[29].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                        fileName: "docs/api/export-image.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 5559
                                                    }, this),
                                                    $$contentTexts[30].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                        fileName: "docs/api/export-image.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 5591
                                                    }, this),
                                                    $$contentTexts[31].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                        fileName: "docs/api/export-image.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 5623
                                                    }, this),
                                                    $$contentTexts[32].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/api/export-image.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5529
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/api/export-image.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5420
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[33].value
                                            }, void 0, false, {
                                                fileName: "docs/api/export-image.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5669
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[34].value
                                            }, void 0, false, {
                                                fileName: "docs/api/export-image.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5704
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[35].value
                                            }, void 0, false, {
                                                fileName: "docs/api/export-image.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5739
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[36].value
                                            }, void 0, false, {
                                                fileName: "docs/api/export-image.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5774
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/api/export-image.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5665
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/export-image.zh.md",
                                lineNumber: 21,
                                columnNumber: 5200
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 5029
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "下载图片",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#下载图片",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/api/export-image.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5893
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/export-image.zh.md",
                                lineNumber: 21,
                                columnNumber: 5844
                            }, this),
                            "下载图片",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "下载图片",
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
                                            fileName: "docs/api/export-image.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6287
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/api/export-image.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6156
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/export-image.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6082
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/export-image.zh.md",
                                lineNumber: 21,
                                columnNumber: 5940
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 5830
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[37].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "#graphtodataurloptions",
                                children: $$contentTexts[38].value
                            }, void 0, false, {
                                fileName: "docs/api/export-image.zh.md",
                                lineNumber: 21,
                                columnNumber: 7262
                            }, this),
                            $$contentTexts[39].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 7233
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[40].value
                    }, void 0, false, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 7359
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                        fileName: "docs/api/export-image.zh.md",
                        lineNumber: 21,
                        columnNumber: 7428
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/api/export-image.zh.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "注意",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[41].value
                }, void 0, false, {
                    fileName: "docs/api/export-image.zh.md",
                    lineNumber: 21,
                    columnNumber: 7477
                }, this)
            }, void 0, false, {
                fileName: "docs/api/export-image.zh.md",
                lineNumber: 21,
                columnNumber: 7440
            }, this)
        ]
    }, void 0, true);
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
                fileName: "docs/api/export-image.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/export-image.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/export-image.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/export-image.zh.md",
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
//# sourceMappingURL=docs_api_export-image_zh_md-async.js.map