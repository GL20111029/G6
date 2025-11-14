((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/custom-layout.en.md'],
{ "docs/manual/layout/custom-layout.en.md": function (module, exports, __mako_require__){
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
__mako_require__("common/manual/custom-extension/layout/non-iterative-layout.md?watch=parent");
__mako_require__("common/manual/custom-extension/layout/iterative-layout.md?watch=parent");
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
                        id: "overview",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#overview",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/custom-layout.en.md",
                                    lineNumber: 26,
                                    columnNumber: 109
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
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
                                            fileName: "docs/manual/layout/custom-layout.en.md",
                                            lineNumber: 26,
                                            columnNumber: 511
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/custom-layout.en.md",
                                        lineNumber: 26,
                                        columnNumber: 380
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/custom-layout.en.md",
                                    lineNumber: 26,
                                    columnNumber: 306
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 160
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[0].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 1457
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "implement-layout",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#implement-layout",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/custom-layout.en.md",
                                    lineNumber: 26,
                                    columnNumber: 1576
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 1515
                            }, this),
                            "Implement Layout",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Implement-Layout",
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
                                            fileName: "docs/manual/layout/custom-layout.en.md",
                                            lineNumber: 26,
                                            columnNumber: 1994
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/custom-layout.en.md",
                                        lineNumber: 26,
                                        columnNumber: 1863
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/custom-layout.en.md",
                                    lineNumber: 26,
                                    columnNumber: 1789
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 1635
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 1489
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "non-iterative-layout",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#non-iterative-layout",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/custom-layout.en.md",
                                    lineNumber: 26,
                                    columnNumber: 3035
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 2970
                            }, this),
                            "Non-Iterative Layout",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Non-Iterative-Layout",
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
                                            fileName: "docs/manual/layout/custom-layout.en.md",
                                            lineNumber: 26,
                                            columnNumber: 3461
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/custom-layout.en.md",
                                        lineNumber: 26,
                                        columnNumber: 3330
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/custom-layout.en.md",
                                    lineNumber: 26,
                                    columnNumber: 3256
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 3098
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 2940
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[1].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[2].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 4435
                            }, this),
                            $$contentTexts[3].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[4].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 4498
                            }, this),
                            $$contentTexts[5].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 4407
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[6].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 4565
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[7].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 4633
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { pin: false, inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 4695
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[8].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 4751
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 4665
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/layout/custom-layout.en.md",
                lineNumber: 26,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "info",
                title: "info",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[9].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[10].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/custom-layout.en.md",
                            lineNumber: 26,
                            columnNumber: 4887
                        }, this),
                        $$contentTexts[11].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/custom-layout.en.md",
                    lineNumber: 26,
                    columnNumber: 4859
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/layout/custom-layout.en.md",
                lineNumber: 26,
                columnNumber: 4823
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "iterative-layout",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#iterative-layout",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/custom-layout.en.md",
                                    lineNumber: 26,
                                    columnNumber: 5081
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 5020
                            }, this),
                            "Iterative Layout",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Iterative-Layout",
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
                                            fileName: "docs/manual/layout/custom-layout.en.md",
                                            lineNumber: 26,
                                            columnNumber: 5499
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/custom-layout.en.md",
                                        lineNumber: 26,
                                        columnNumber: 5368
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/custom-layout.en.md",
                                    lineNumber: 26,
                                    columnNumber: 5294
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 5140
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 4994
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[12].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[13].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 6474
                            }, this),
                            $$contentTexts[14].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[15].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 6539
                            }, this),
                            $$contentTexts[16].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[17].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 6604
                            }, this),
                            $$contentTexts[18].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[19].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 6669
                            }, this),
                            $$contentTexts[20].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[21].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 6734
                            }, this),
                            $$contentTexts[22].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[23].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 6799
                            }, this),
                            $$contentTexts[24].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 6445
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[25].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[26].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 6897
                            }, this),
                            $$contentTexts[27].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 6868
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[28].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 6966
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[29].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 7035
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[30].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 7068
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[31].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 7137
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { pin: false, inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 7200
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[32].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 7256
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 7170
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "register-layout",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#register-layout",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/custom-layout.en.md",
                                    lineNumber: 26,
                                    columnNumber: 7408
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 7348
                            }, this),
                            "Register Layout",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Register-Layout",
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
                                            fileName: "docs/manual/layout/custom-layout.en.md",
                                            lineNumber: 26,
                                            columnNumber: 7824
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/custom-layout.en.md",
                                        lineNumber: 26,
                                        columnNumber: 7693
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/custom-layout.en.md",
                                    lineNumber: 26,
                                    columnNumber: 7619
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 7466
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 7323
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[33].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[34].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 8799
                            }, this),
                            $$contentTexts[35].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/core-concept/layout#register-layout",
                                children: $$contentTexts[36].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 8864
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 8770
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "configure-layout",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#configure-layout",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/custom-layout.en.md",
                                    lineNumber: 26,
                                    columnNumber: 9046
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 8985
                            }, this),
                            "Configure Layout",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Configure-Layout",
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
                                            fileName: "docs/manual/layout/custom-layout.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9464
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/custom-layout.en.md",
                                        lineNumber: 26,
                                        columnNumber: 9333
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/custom-layout.en.md",
                                    lineNumber: 26,
                                    columnNumber: 9259
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 9105
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 8959
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[37].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[38].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 10439
                            }, this),
                            $$contentTexts[39].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/core-concept/layout#configure-layout",
                                children: $$contentTexts[40].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/custom-layout.en.md",
                                lineNumber: 26,
                                columnNumber: 10504
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/custom-layout.en.md",
                        lineNumber: 26,
                        columnNumber: 10410
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/layout/custom-layout.en.md",
                lineNumber: 26,
                columnNumber: 4968
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
                fileName: "docs/manual/layout/custom-layout.en.md",
                lineNumber: 33,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/custom-layout.en.md",
                lineNumber: 33,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/custom-layout.en.md",
            lineNumber: 33,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/custom-layout.en.md",
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
//# sourceMappingURL=docs_manual_layout_custom-layout_en_md-async.js.map