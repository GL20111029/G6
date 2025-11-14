((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/animation/animation.zh.md'],
{ "docs/manual/animation/animation.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/manual/core-concept/animation/ant-line.md?watch=parent");
__mako_require__("common/manual/core-concept/animation/breathing-circle.md?watch=parent");
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
                        id: "概述",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#概述",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 97
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
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
                                            fileName: "docs/manual/animation/animation.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 487
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 356
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 282
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 142
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        width: "150px",
                        src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*NkILT56xXp4AAAAAAAAAAAAADmJ7AQ/original"
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 1433
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[0].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 1555
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[1].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 1587
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[2].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 1619
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[3].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 1651
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[4].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[5].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 1747
                            }, this),
                            $$contentTexts[6].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[7].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 1810
                            }, this),
                            $$contentTexts[8].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 1719
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "配置动画",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#配置动画",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 1940
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 1891
                            }, this),
                            "配置动画",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "配置动画",
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
                                            fileName: "docs/manual/animation/animation.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 2334
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 2203
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 2129
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 1987
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 1877
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[9].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 3280
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "关闭全局动画",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#关闭全局动画",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 3379
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 3328
                            }, this),
                            "关闭全局动画",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "关闭全局动画",
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
                                            fileName: "docs/manual/animation/animation.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 3777
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 3646
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 3572
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 3428
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 3312
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[10].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[11].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 4752
                            }, this),
                            $$contentTexts[12].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[13].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 4817
                            }, this),
                            $$contentTexts[14].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 4723
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[15].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 4886
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "配置全局动画",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#配置全局动画",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 5022
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 4971
                            }, this),
                            "配置全局动画",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "配置全局动画",
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
                                            fileName: "docs/manual/animation/animation.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 5420
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 5289
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 5215
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 5071
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 4955
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[16].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[17].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 6395
                            }, this),
                            $$contentTexts[18].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 6366
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[19].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 6464
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "配置元素动画",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#配置元素动画",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 6600
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 6549
                            }, this),
                            "配置元素动画",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "配置元素动画",
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
                                            fileName: "docs/manual/animation/animation.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 6998
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 6867
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 6793
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 6649
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 6533
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[20].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 7944
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[21].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 7977
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[22].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 8046
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[23].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 8079
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[24].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 8148
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[25].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 8181
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "动画范式",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#动画范式",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8313
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 8264
                            }, this),
                            "动画范式",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "动画范式",
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
                                            fileName: "docs/manual/animation/animation.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8707
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 8576
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8502
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 8360
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 8250
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[26].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 9653
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/animation/animation.zh.md",
                lineNumber: 26,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "info",
                title: "提示",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[27].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/overview",
                            children: $$contentTexts[28].value
                        }, void 0, false, {
                            fileName: "docs/manual/animation/animation.zh.md",
                            lineNumber: 26,
                            columnNumber: 9755
                        }, this),
                        $$contentTexts[29].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/animation/animation.zh.md",
                    lineNumber: 26,
                    columnNumber: 9726
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/animation/animation.zh.md",
                lineNumber: 26,
                columnNumber: 9692
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/overview",
                                children: $$contentTexts[30].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 9895
                            }, this),
                            $$contentTexts[31].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 9892
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[32].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[33].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 10023
                            }, this),
                            $$contentTexts[34].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[35].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 10088
                            }, this),
                            $$contentTexts[36].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 9994
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[37].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 10157
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[38].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 10190
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "自定义动画",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#自定义动画",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 10324
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 10274
                            }, this),
                            "自定义动画",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "自定义动画",
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
                                            fileName: "docs/manual/animation/animation.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10720
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 10589
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 10515
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 10372
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 10259
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[39].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/animation/custom-animation",
                                children: $$contentTexts[40].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 11695
                            }, this),
                            $$contentTexts[41].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 11666
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "动画优先级",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#动画优先级",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 11869
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 11819
                            }, this),
                            "动画优先级",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "动画优先级",
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
                                            fileName: "docs/manual/animation/animation.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 12265
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 12134
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 12060
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 11917
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 11804
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[42].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 13211
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/animation/animation.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 13262
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/animation/animation.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 13297
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/animation/animation.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 13332
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 13258
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 13251
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[46].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13391
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[47].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13426
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[48].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13461
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 13387
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[49].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13505
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[50].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13540
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[51].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13575
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 13501
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[52].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13619
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[53].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13654
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[54].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13689
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 13615
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[55].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13733
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[56].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13768
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[57].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13803
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 13729
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[58].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13847
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[59].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13882
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[60].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13917
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 13843
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[61].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13961
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[62].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 13996
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[63].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 14031
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 13957
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[64].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 14075
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[65].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 14110
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[66].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 14145
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 14071
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[67].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 14189
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[68].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 14224
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[69].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 14259
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 14185
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[70].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 14303
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[71].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 14338
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[72].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/animation/animation.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 14373
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 14299
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 13380
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 13244
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "持续动画",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#持续动画",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 14492
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 14443
                            }, this),
                            "持续动画",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "持续动画",
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
                                            fileName: "docs/manual/animation/animation.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 14886
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/animation/animation.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 14755
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/animation/animation.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 14681
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 14539
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 14429
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[73].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 15832
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[74].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 15865
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[75].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[76].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 15963
                            }, this),
                            $$contentTexts[77].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 15934
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[78].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 16032
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[79].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 16065
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { pin: false, inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 16164
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[80].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 16220
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 16134
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[81].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[82].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 16316
                            }, this),
                            $$contentTexts[83].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[84].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 16381
                            }, this),
                            $$contentTexts[85].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[86].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 16446
                            }, this),
                            $$contentTexts[87].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 16287
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[88].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 16515
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[89].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 16548
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[90].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[91].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 16646
                            }, this),
                            $$contentTexts[92].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[93].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 16711
                            }, this),
                            $$contentTexts[94].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[95].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 16776
                            }, this),
                            $$contentTexts[96].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 16617
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[97].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 16845
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[98].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 16878
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[99].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 16947
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[100].value
                    }, void 0, false, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 16980
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { pin: false, inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 17080
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[101].value
                            }, void 0, false, {
                                fileName: "docs/manual/animation/animation.zh.md",
                                lineNumber: 26,
                                columnNumber: 17136
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/animation/animation.zh.md",
                        lineNumber: 26,
                        columnNumber: 17050
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/animation/animation.zh.md",
                lineNumber: 26,
                columnNumber: 9866
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
                fileName: "docs/manual/animation/animation.zh.md",
                lineNumber: 33,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/animation/animation.zh.md",
                lineNumber: 33,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/animation/animation.zh.md",
            lineNumber: 33,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/animation/animation.zh.md",
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
//# sourceMappingURL=docs_manual_animation_animation_zh_md-async.js.map