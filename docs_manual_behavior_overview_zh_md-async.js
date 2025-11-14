((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/overview.zh.md'],
{ "docs/manual/behavior/overview.zh.md": function (module, exports, __mako_require__){
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
                        id: "什么是交互",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#什么是交互",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 103
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 53
                            }, this),
                            "什么是交互",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "什么是交互",
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
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 499
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 368
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 294
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 151
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        width: "200px",
                        src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*sa3jRqp83K4AAAAAAAAAAAAADmJ7AQ/original"
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 1445
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[0].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[1].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1595
                            }, this),
                            $$contentTexts[2].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 1567
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "g6-50-交互系统变化",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#g6-50-交互系统变化",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1745
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1688
                            }, this),
                            "G6 5.0 交互系统变化",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "G6-5.0-交互系统变化",
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
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2157
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2026
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1952
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1801
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 1666
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[3].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[4].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 3131
                            }, this),
                            $$contentTexts[5].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 3103
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        highlightLines: [
                            4
                        ],
                        children: $$contentTexts[6].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 3198
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "内置交互",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#内置交互",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3350
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 3301
                            }, this),
                            "内置交互",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "内置交互",
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
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 3744
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3613
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3539
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 3397
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 3287
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[7].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[8].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 4718
                            }, this),
                            $$contentTexts[9].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 4690
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4807
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4842
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4877
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4912
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4803
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 4796
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[14].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4971
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5006
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5012
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5018
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4967
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5033
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/drag-canvas",
                                                    children: $$contentTexts[15].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5043
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5039
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[16].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5125
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5121
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[17].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5169
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5029
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5213
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/zoom-canvas",
                                                    children: $$contentTexts[18].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5223
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5219
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[19].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5305
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5301
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[20].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5349
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5209
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5393
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/scroll-canvas",
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5403
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5399
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[22].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5487
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5483
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[23].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5531
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5389
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5575
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/optimize-viewport-transform",
                                                    children: $$contentTexts[24].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5585
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5581
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[25].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5683
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5679
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[26].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5727
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5571
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[27].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5771
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5806
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5812
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5818
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5767
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5833
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/click-select",
                                                    children: $$contentTexts[28].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5843
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5839
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5926
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5922
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[30].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5970
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5829
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6014
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/brush-select",
                                                    children: $$contentTexts[31].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6024
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6020
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[32].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6107
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6103
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[33].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6151
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6010
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6195
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/lasso-select",
                                                    children: $$contentTexts[34].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6205
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6201
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[35].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6288
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6284
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[36].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6332
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6191
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[37].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6376
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6411
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6417
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6423
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6372
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6438
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/create-edge",
                                                    children: $$contentTexts[38].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6448
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6444
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6530
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6526
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[40].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6574
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6434
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6618
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/drag-element",
                                                    children: $$contentTexts[41].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6628
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6624
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[42].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6711
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6707
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[43].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6755
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6614
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6799
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/drag-element-force",
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6809
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6805
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[45].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6898
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6894
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[46].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6942
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6795
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[47].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6986
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7021
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7027
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7033
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6982
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7048
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/collapse-expand",
                                                    children: $$contentTexts[48].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7058
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7054
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7144
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7140
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[50].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7188
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7044
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7232
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/focus-element",
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7242
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7238
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[52].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7326
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7322
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[53].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7370
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7228
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7414
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/hover-activate",
                                                    children: $$contentTexts[54].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7424
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7420
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[55].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7509
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7505
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[56].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7553
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7410
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[57].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7597
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7632
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7638
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7644
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7593
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7659
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/fix-element-size",
                                                    children: $$contentTexts[58].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7669
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7665
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[59].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7756
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7752
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[60].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7800
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7655
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7844
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/behavior/auto-adapt-label",
                                                    children: $$contentTexts[61].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7854
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7850
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[62].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7941
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7937
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[63].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7985
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7840
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 4960
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 4789
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[64].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/behavior/drag-canvas",
                                children: $$contentTexts[65].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 8070
                            }, this),
                            $$contentTexts[66].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 8041
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/behavior/overview.zh.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "交互兼容性",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[67].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[68].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 8248
                        }, this),
                        $$contentTexts[69].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[70].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 8313
                        }, this),
                        $$contentTexts[71].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[72].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 8378
                        }, this),
                        $$contentTexts[73].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 8219
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/behavior/overview.zh.md",
                lineNumber: 21,
                columnNumber: 8179
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "自定义交互",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#自定义交互",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8550
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 8500
                            }, this),
                            "自定义交互",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "自定义交互",
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
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8946
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8815
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8741
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 8598
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 8485
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[74].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 9892
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[75].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 9929
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[76].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 9964
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 9925
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[77].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[78].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 10033
                            }, this),
                            $$contentTexts[79].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/behavior/custom-behavior",
                                children: $$contentTexts[80].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 10102
                            }, this),
                            $$contentTexts[81].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 10004
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "配置和使用",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#配置和使用",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10274
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 10224
                            }, this),
                            "配置和使用",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "配置和使用",
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
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10670
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10539
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10465
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 10322
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 10209
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
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11679
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11630
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
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12073
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11942
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11868
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11726
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 11616
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[82].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[83].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 13048
                            }, this),
                            $$contentTexts[84].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 13019
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[85].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 13117
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "配置交互参数",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#配置交互参数",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13253
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 13202
                            }, this),
                            "配置交互参数",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "配置交互参数",
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
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13651
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13520
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13446
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 13302
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 13186
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[86].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[87].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 14626
                            }, this),
                            $$contentTexts[88].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 14597
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[89].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 14695
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "动态更新交互",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#动态更新交互",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14831
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 14780
                            }, this),
                            "动态更新交互",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "动态更新交互",
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
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15229
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15098
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15024
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 14880
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 14764
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[90].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 16175
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[91].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/behavior#graphsetbehaviorsbehaviors",
                                children: $$contentTexts[92].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 16237
                            }, this),
                            $$contentTexts[93].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 16208
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[94].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 16352
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[95].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/behavior#graphupdatebehaviorbehavior",
                                children: $$contentTexts[96].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 16450
                            }, this),
                            $$contentTexts[97].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 16421
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[98].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 16566
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/behavior/overview.zh.md",
                lineNumber: 21,
                columnNumber: 8459
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "注意",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[99].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[100].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 16707
                        }, this),
                        $$contentTexts[101].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[102].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 16774
                        }, this),
                        $$contentTexts[103].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 16678
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/behavior/overview.zh.md",
                lineNumber: 21,
                columnNumber: 16641
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "卸载交互",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#卸载交互",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16946
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 16897
                            }, this),
                            "卸载交互",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "卸载交互",
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
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17340
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17209
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17135
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 16993
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 16883
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[104].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/behavior#graphsetbehaviorsbehaviors",
                                children: $$contentTexts[105].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 18316
                            }, this),
                            $$contentTexts[106].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 18286
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[107].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 18433
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[108].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/behavior",
                                children: $$contentTexts[109].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 18533
                            }, this),
                            $$contentTexts[110].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 18503
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "交互与事件",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#交互与事件",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18688
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 18638
                            }, this),
                            "交互与事件",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "交互与事件",
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
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19084
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18953
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18879
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 18736
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 18623
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[111].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 20030
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "事件监听示例",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#事件监听示例",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20131
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 20080
                            }, this),
                            "事件监听示例",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "事件监听示例",
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
                                            fileName: "docs/manual/behavior/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20529
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20398
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20324
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 20180
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 20064
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[112].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 21475
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[113].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/event",
                                children: $$contentTexts[114].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 21575
                            }, this),
                            $$contentTexts[115].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 21545
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/behavior/overview.zh.md",
                lineNumber: 21,
                columnNumber: 16857
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
                fileName: "docs/manual/behavior/overview.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/overview.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/overview.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/overview.zh.md",
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
//# sourceMappingURL=docs_manual_behavior_overview_zh_md-async.js.map