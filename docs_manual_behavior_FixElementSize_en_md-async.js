((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/FixElementSize.en.md'],
{ "docs/manual/behavior/FixElementSize.en.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/behaviors/fix-element-size.md?watch=parent");
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
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
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
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 1485
                        }, this),
                        $$contentTexts[2].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
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
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 1629
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 1575
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
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 2033
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 1902
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 1828
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 1681
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 1556
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 2979
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[4].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                        lineNumber: 23,
                        columnNumber: 3015
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 3011
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
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 3143
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 3081
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
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 3563
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 3432
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 3358
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 3203
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 3054
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 4539
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 4581
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 4509
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "basic-usage",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-usage",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 4724
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 4668
                        }, this),
                        "Basic Usage",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Usage",
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
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 5132
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 5001
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 4927
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 4778
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 4647
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[6].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 6078
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[7].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                        lineNumber: 23,
                        columnNumber: 6113
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 6110
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[8].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 6159
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[9].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 6191
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[10].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                        lineNumber: 23,
                        columnNumber: 6262
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 6259
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[11].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 6309
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[12].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 6342
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "configuration-options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#configuration-options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 6508
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 6442
                        }, this),
                        "Configuration Options",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Configuration-Options",
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
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 6936
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 6805
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 6731
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 6572
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 6411
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7900
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7935
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7970
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 8005
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 8040
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 7896
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 7889
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8099
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8134
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8169
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[21].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                lineNumber: 23,
                                                columnNumber: 8208
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8204
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8252
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8095
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8296
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[24].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#enable",
                                                    children: $$contentTexts[25].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8361
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8331
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[26].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/api/event#event-object-properties",
                                                    children: $$contentTexts[27].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8448
                                                }, this),
                                                $$contentTexts[28].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8418
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8558
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8593
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8292
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8608
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8643
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8678
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[33].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                lineNumber: 23,
                                                columnNumber: 8717
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8713
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8761
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8604
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8776
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8811
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8846
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8881
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8916
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8772
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8931
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[39].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#node",
                                                    children: $$contentTexts[40].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8996
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8966
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#fixshapeconfig",
                                                    children: $$contentTexts[41].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9055
                                                }, this),
                                                $$contentTexts[42].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9051
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9146
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9152
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8927
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9167
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9202
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[45].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#nodedata",
                                                    children: $$contentTexts[46].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9267
                                                }, this),
                                                $$contentTexts[47].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9237
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[48].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                lineNumber: 23,
                                                columnNumber: 9368
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9364
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9412
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9163
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9427
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#node",
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9492
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9462
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#fixshapeconfig",
                                                    children: $$contentTexts[52].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9551
                                                }, this),
                                                $$contentTexts[53].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9547
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[54].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                lineNumber: 23,
                                                columnNumber: 9646
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9642
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9690
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9423
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9705
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9740
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[57].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#edgedata",
                                                    children: $$contentTexts[58].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9805
                                                }, this),
                                                $$contentTexts[59].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9775
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[60].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                lineNumber: 23,
                                                columnNumber: 9906
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9902
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9950
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9701
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9965
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[62].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#node",
                                                    children: $$contentTexts[63].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10030
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10000
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#fixshapeconfig",
                                                    children: $$contentTexts[64].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10089
                                                }, this),
                                                $$contentTexts[65].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10085
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10180
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10186
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9961
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10201
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10236
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[68].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#combodata",
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10301
                                                }, this),
                                                $$contentTexts[70].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10271
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[71].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                                lineNumber: 23,
                                                columnNumber: 10403
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10399
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10447
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10197
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 8088
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 7882
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "enable",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#enable",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 10541
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 10490
                        }, this),
                        "enable",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "enable",
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
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 10939
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10808
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 10734
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 10590
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 10474
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[72].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 11885
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[73].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[74].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 11947
                        }, this),
                        $$contentTexts[75].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[76].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 12012
                        }, this),
                        $$contentTexts[77].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[78].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 12077
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 11918
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "node",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#node",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 12183
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 12134
                        }, this),
                        "node",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "node",
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
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 12577
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 12446
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 12372
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 12230
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 12120
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[79].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 13523
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[80].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                        lineNumber: 23,
                        columnNumber: 13559
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 13556
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[81].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 13606
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "ts",
                    children: $$contentTexts[82].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 13639
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[83].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 13700
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "ts",
                    children: $$contentTexts[84].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 13733
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "fixshapeconfig",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#fixshapeconfig",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 13877
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 13818
                        }, this),
                        "FixShapeConfig",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "FixShapeConfig",
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
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 14291
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 14160
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 14086
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 13934
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 13794
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[85].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15255
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[86].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15290
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[87].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15325
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[88].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15360
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[89].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15395
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 15251
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 15244
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15454
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15489
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15524
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15559
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15594
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15450
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15638
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15673
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15708
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15743
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15778
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15634
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 15443
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 15237
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "practical-example",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#practical-example",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 15923
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 15861
                        }, this),
                        "Practical Example",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Practical-Example",
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
                                        fileName: "docs/manual/behavior/FixElementSize.en.md",
                                        lineNumber: 23,
                                        columnNumber: 16343
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                                    lineNumber: 23,
                                    columnNumber: 16212
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.en.md",
                                lineNumber: 23,
                                columnNumber: 16138
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 15983
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 15834
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 17319
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[100].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.en.md",
                            lineNumber: 23,
                            columnNumber: 17363
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.en.md",
                    lineNumber: 23,
                    columnNumber: 17289
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/behavior/FixElementSize.en.md",
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
                fileName: "docs/manual/behavior/FixElementSize.en.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/FixElementSize.en.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/FixElementSize.en.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/FixElementSize.en.md",
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
//# sourceMappingURL=docs_manual_behavior_FixElementSize_en_md-async.js.map