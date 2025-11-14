((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/transform/overview.zh.md'],
{ "docs/manual/transform/overview.zh.md": function (module, exports, __mako_require__){
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
                        id: "什么是数据处理",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#什么是数据处理",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 107
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 55
                            }, this),
                            "什么是数据处理",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "什么是数据处理",
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
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 507
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 376
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 302
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 157
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[0].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[1].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1481
                            }, this),
                            $$contentTexts[2].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: [
                                    $$contentTexts[3].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[4].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1577
                                    }, this),
                                    $$contentTexts[5].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1544
                            }, this),
                            $$contentTexts[6].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: [
                                    $$contentTexts[7].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1707
                                    }, this),
                                    $$contentTexts[9].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1674
                            }, this),
                            $$contentTexts[10].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 1453
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "实现原理",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#实现原理",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1872
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1823
                            }, this),
                            "实现原理",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "实现原理",
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
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2266
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2135
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2061
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1919
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 1809
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "基类",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#基类",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3271
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 3224
                            }, this),
                            "基类",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "基类",
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
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 3661
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3530
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3456
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 3316
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 3212
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[11].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/transforms/base-transform.ts",
                                children: $$contentTexts[12].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 4636
                            }, this),
                            $$contentTexts[13].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[14].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 4784
                            }, this),
                            $$contentTexts[15].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[16].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 4849
                            }, this),
                            $$contentTexts[17].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 4607
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[18].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 4918
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[19].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 4987
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5031
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5028
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                        lang: "typescript",
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5078
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 5024
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5159
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5156
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5206
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5239
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 5152
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 5020
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "执行时机",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#执行时机",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5345
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 5296
                            }, this),
                            "执行时机",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "执行时机",
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
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5739
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5608
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5534
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 5392
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 5282
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6696
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6693
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: $$contentTexts[26].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6743
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                    width: "300px",
                                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Pb3kRI2yHo8AAAAAAAAAAAAAemJ7AQ/original"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6776
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[27].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6901
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6898
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6982
                                                }, this),
                                                $$contentTexts[30].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[31].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7047
                                                }, this),
                                                $$contentTexts[32].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[33].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7112
                                                }, this),
                                                $$contentTexts[34].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[35].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7177
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6952
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[36].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[37].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7251
                                                }, this),
                                                $$contentTexts[38].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7316
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7221
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[40].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[41].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7390
                                                }, this),
                                                $$contentTexts[42].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[43].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7455
                                                }, this),
                                                $$contentTexts[44].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[45].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7520
                                                }, this),
                                                $$contentTexts[46].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7585
                                                }, this),
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7650
                                                }, this),
                                                $$contentTexts[50].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7360
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7720
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6948
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 6689
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 6685
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/transform/overview.zh.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "info",
                title: "提示",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[52].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 7810
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[53].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7851
                                    }, this),
                                    $$contentTexts[54].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[55].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7920
                                    }, this),
                                    $$contentTexts[56].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[57].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7985
                                    }, this),
                                    $$contentTexts[58].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/runtime/element.ts",
                                        children: $$contentTexts[59].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8050
                                    }, this),
                                    $$contentTexts[60].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[61].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8188
                                    }, this),
                                    $$contentTexts[62].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[63].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8253
                                    }, this),
                                    $$contentTexts[64].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[65].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8318
                                    }, this),
                                    $$contentTexts[66].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[67].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8383
                                    }, this),
                                    $$contentTexts[68].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 7847
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[69].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8457
                                    }, this),
                                    $$contentTexts[70].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 8453
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 7843
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/transform/overview.zh.md",
                lineNumber: 21,
                columnNumber: 7776
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[71].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8582
                                }, this),
                                $$contentTexts[72].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 8578
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 8574
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "内置数据处理",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#内置数据处理",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8728
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 8677
                            }, this),
                            "内置数据处理",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "内置数据处理",
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
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9126
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8995
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8921
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 8777
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 8661
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[73].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 10080
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 10076
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 10072
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[74].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/transform/map-node-size",
                                children: $$contentTexts[75].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 10162
                            }, this),
                            $$contentTexts[76].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 10133
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10286
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10321
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10356
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[80].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10391
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10282
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 10275
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/transform/map-node-size",
                                                    children: $$contentTexts[81].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10454
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10450
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[82].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10539
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10535
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[83].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10583
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[84].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10618
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10446
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/transform/place-radial-labels",
                                                    children: $$contentTexts[85].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10666
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10662
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[86].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10757
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10753
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[87].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10801
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[88].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10836
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10658
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/transform/process-parallel-edges",
                                                    children: $$contentTexts[89].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10884
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10880
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[90].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10978
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10974
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[91].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11022
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[92].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11057
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10876
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 10439
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 10268
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[93].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11121
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 11117
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 11113
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[94].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 11174
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11225
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11260
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11295
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11330
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11221
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11214
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                    href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/transforms/arrange-draw-order.ts",
                                                    children: $$contentTexts[99].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 11393
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11389
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[100].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 11528
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11524
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[101].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11573
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[102].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11609
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11385
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                    href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/transforms/collapse-expand-combo.ts",
                                                    children: $$contentTexts[103].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 11658
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11654
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[104].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 11797
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11793
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[105].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                        fileName: "docs/manual/transform/overview.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 11873
                                                    }, this),
                                                    $$contentTexts[106].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11842
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[107].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11911
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11650
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                    href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/transforms/collapse-expand-node.ts",
                                                    children: $$contentTexts[108].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 11960
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 11956
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[109].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 12098
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12094
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[110].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12143
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[111].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12179
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11952
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                    href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/transforms/get-edge-actual-ends.ts",
                                                    children: $$contentTexts[112].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 12228
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12224
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[113].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 12366
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12362
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[114].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[115].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/overview.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 12442
                                                    }, this),
                                                    $$contentTexts[116].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[117].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/overview.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 12509
                                                    }, this),
                                                    $$contentTexts[118].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12411
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[119].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12581
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12220
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                    href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/transforms/update-related-edge.ts",
                                                    children: $$contentTexts[120].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 12630
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12626
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[121].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 12767
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12763
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[122].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12812
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[123].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12848
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12622
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11378
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 11207
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/transform/overview.zh.md",
                lineNumber: 21,
                columnNumber: 8548
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "注意",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[124].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86",
                            children: $$contentTexts[125].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 12978
                        }, this),
                        $$contentTexts[126].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 12948
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/transform/overview.zh.md",
                lineNumber: 21,
                columnNumber: 12911
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
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
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13220
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 13171
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
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13614
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13483
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13409
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 13267
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 13157
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "基本配置",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#基本配置",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14623
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 14574
                            }, this),
                            "基本配置",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "基本配置",
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
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15017
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14886
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14812
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 14670
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 14560
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[127].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[128].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 15993
                            }, this),
                            $$contentTexts[129].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 15963
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[130].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 16064
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "配置数据处理参数",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#配置数据处理参数",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16205
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 16152
                            }, this),
                            "配置数据处理参数",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "配置数据处理参数",
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
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16607
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16476
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16402
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 16256
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 16134
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[131].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[132].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 17583
                            }, this),
                            $$contentTexts[133].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 17553
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[134].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 17654
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "动态更新数据处理",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#动态更新数据处理",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17795
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 17742
                            }, this),
                            "动态更新数据处理",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "动态更新数据处理",
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
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18197
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18066
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17992
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 17846
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 17724
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[135].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19143
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[136].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/api/transform#graphsettransformstransforms",
                                    children: $$contentTexts[137].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19212
                                }, this),
                                $$contentTexts[138].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 19181
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19177
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[139].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19338
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[140].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/api/transform#graphupdatetransformtransform",
                                    children: $$contentTexts[141].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19443
                                }, this),
                                $$contentTexts[142].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 19412
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19408
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[143].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19570
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/transform/overview.zh.md",
                lineNumber: 21,
                columnNumber: 13131
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "注意",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[144].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[145].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 19713
                        }, this),
                        $$contentTexts[146].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[147].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 19780
                        }, this),
                        $$contentTexts[148].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 19683
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/transform/overview.zh.md",
                lineNumber: 21,
                columnNumber: 19646
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "卸载数据处理",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#卸载数据处理",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19956
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 19905
                            }, this),
                            "卸载数据处理",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "卸载数据处理",
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
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20354
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20223
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20149
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 20005
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19889
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[149].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/transform#graphsettransformstransforms",
                                children: $$contentTexts[150].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 21330
                            }, this),
                            $$contentTexts[151].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 21300
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[152].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 21450
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "自定义数据处理",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#自定义数据处理",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21589
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 21537
                            }, this),
                            "自定义数据处理",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "自定义数据处理",
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
                                            fileName: "docs/manual/transform/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21989
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21858
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21784
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 21639
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 21520
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[153].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 22935
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[154].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 22973
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[155].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 23009
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 22969
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[156].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/transform/custom-transform",
                                children: $$contentTexts[157].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 23080
                            }, this),
                            $$contentTexts[158].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 23050
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[159].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 23191
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/transform/overview.zh.md",
                lineNumber: 21,
                columnNumber: 19863
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
                fileName: "docs/manual/transform/overview.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/transform/overview.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/transform/overview.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/transform/overview.zh.md",
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
//# sourceMappingURL=docs_manual_transform_overview_zh_md-async.js.map