((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/overview.zh.md'],
{ "docs/manual/element/node/overview.zh.md": function (module, exports, __mako_require__){
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
                        id: "什么是节点",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#什么是节点",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 103
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 53
                            }, this),
                            "什么是节点",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "什么是节点",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 499
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 368
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 294
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 151
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[0].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 1445
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[1].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 1477
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "节点体系",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#节点体系",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1572
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1523
                            }, this),
                            "节点体系",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "节点体系",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1966
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1835
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1761
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1619
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 1509
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[2].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[3].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 2940
                            }, this),
                            $$contentTexts[4].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 2912
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "内置节点",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#内置节点",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3074
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 3025
                            }, this),
                            "内置节点",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "内置节点",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 3468
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3337
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3263
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 3121
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 3011
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[5].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[6].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 4442
                            }, this),
                            $$contentTexts[7].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 4414
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        width: "300",
                        src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*TZt2S7Z0d-8AAAAAAAAAAAAADmJ7AQ/original"
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 4513
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[8].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4651
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[9].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4685
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4719
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4647
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 4640
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[11].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4778
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[12].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4817
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4813
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[13].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4861
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4774
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[14].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4905
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[15].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4944
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4940
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[16].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4988
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4901
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[17].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5032
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[18].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5071
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5067
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[19].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5115
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5028
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[20].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5159
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5198
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5194
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[22].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5242
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5155
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[23].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5286
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[24].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5325
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5321
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[25].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5369
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5282
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[26].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5413
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[27].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5452
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5448
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[28].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5496
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5409
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[29].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5540
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[30].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5579
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5575
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[31].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5623
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5536
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[32].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5667
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[33].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5706
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5702
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[34].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5750
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5663
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[35].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5794
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[36].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5833
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5829
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[37].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5877
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5790
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[38].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5921
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5960
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5956
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[40].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6004
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5917
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 4767
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 4633
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "3d-节点",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#3d-节点",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6125
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 6075
                            }, this),
                            "3D 节点",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "3D-节点",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6521
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6390
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6316
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 6173
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 6060
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        width: "200",
                        src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ShNXTp0u3vkAAAAAAAAAAAAADmJ7AQ/original"
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 7467
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[41].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 7590
                            }, this),
                            $$contentTexts[42].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 7587
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[43].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7667
                                    }, this),
                                    $$contentTexts[44].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 7663
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[45].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7741
                                    }, this),
                                    $$contentTexts[46].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 7737
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[47].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7815
                                    }, this),
                                    $$contentTexts[48].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 7811
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[49].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7889
                                    }, this),
                                    $$contentTexts[50].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 7885
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[51].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7963
                                    }, this),
                                    $$contentTexts[52].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 7959
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[53].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8037
                                    }, this),
                                    $$contentTexts[54].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 8033
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[55].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8111
                                    }, this),
                                    $$contentTexts[56].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 8107
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 7659
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "react-节点",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#react-节点",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8257
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 8204
                            }, this),
                            "React 节点",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "React-节点",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8659
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8528
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8454
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 8308
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 8186
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        width: "350",
                        src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7jypQbkp00wAAAAAAAAAAAAADmJ7AQ/original"
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 9605
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[57].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 9728
                            }, this),
                            $$contentTexts[58].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/node/react-node",
                                children: $$contentTexts[59].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 9793
                            }, this),
                            $$contentTexts[60].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 9725
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "自定义节点",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#自定义节点",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9964
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 9914
                            }, this),
                            "自定义节点",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "自定义节点",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10360
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10229
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10155
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 10012
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 9899
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[61].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 11306
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[62].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11343
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[63].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11378
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 11339
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[64].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[65].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11447
                            }, this),
                            $$contentTexts[66].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/node/custom-node",
                                children: $$contentTexts[67].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11516
                            }, this),
                            $$contentTexts[68].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 11418
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "数据结构",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#数据结构",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11686
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11637
                            }, this),
                            "数据结构",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "数据结构",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12080
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11949
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11875
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11733
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 11623
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[69].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[70].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 13055
                            }, this),
                            $$contentTexts[71].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 13026
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13142
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13177
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13212
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13247
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13282
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13138
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 13131
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[77].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13341
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[78].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13376
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[79].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13411
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[80].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13446
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[81].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13481
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13337
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[82].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13525
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[83].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13560
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[84].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13595
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[85].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13630
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13665
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13521
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[86].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13680
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[87].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13715
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[88].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13750
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[89].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13785
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13820
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13676
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[90].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13835
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[91].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13870
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[92].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13905
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[93].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13940
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13975
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13831
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[94].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13990
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[95].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14025
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[96].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14060
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[97].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14095
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14130
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13986
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[98].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14145
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[99].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14180
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[100].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14215
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[101].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14251
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14287
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14141
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[102].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14302
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[103].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14338
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[104].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14374
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[105].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14410
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/element/node/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14446
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14298
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 13330
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 13124
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[106].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 14476
                            }, this),
                            $$contentTexts[107].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 14473
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "json",
                        children: $$contentTexts[108].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 14547
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "配置方法",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#配置方法",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14674
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 14625
                            }, this),
                            "配置方法",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "配置方法",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15068
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14937
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14863
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 14721
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 14611
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[109].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 16014
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[110].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[111].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16083
                                    }, this),
                                    $$contentTexts[112].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 16052
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[113].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 16155
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[114].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 16191
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 16048
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[115].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 16232
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "使用-graphsetnode",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#使用-graphsetnode",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16351
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 16291
                            }, this),
                            "使用 ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[116].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 16397
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "使用-",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16783
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16652
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16578
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 16437
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 16266
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[117].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[118].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 17759
                            }, this),
                            $$contentTexts[119].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 17729
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[120].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[121].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 17860
                            }, this),
                            $$contentTexts[122].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 17830
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[123].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 17931
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "实例化图时全局配置",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#实例化图时全局配置",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18066
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 18012
                            }, this),
                            "实例化图时全局配置",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "实例化图时全局配置",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18470
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18339
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18265
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 18118
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 17993
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[124].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[125].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 19446
                            }, this),
                            $$contentTexts[126].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19416
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[127].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19517
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "在数据中动态配置",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#在数据中动态配置",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19650
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 19597
                            }, this),
                            "在数据中动态配置",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "在数据中动态配置",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20052
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19921
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19847
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 19701
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19579
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[128].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 20998
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[129].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 21032
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "调整优先级",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#调整优先级",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21167
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 21117
                            }, this),
                            "调整优先级",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "调整优先级",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21563
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21432
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21358
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 21215
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 21102
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[130].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 22509
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[131].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 22543
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "动态更新节点",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#动态更新节点",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22672
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 22621
                            }, this),
                            "动态更新节点",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "动态更新节点",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23070
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22939
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22865
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 22721
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 22605
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[132].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 24016
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[133].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 24050
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/element/node/overview.zh.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "注意",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[134].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 24163
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/element/node/overview.zh.md",
                lineNumber: 21,
                columnNumber: 24126
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[135].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/element",
                                children: $$contentTexts[136].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 24265
                            }, this),
                            $$contentTexts[137].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 24235
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "节点状态",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#节点状态",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24417
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 24368
                            }, this),
                            "节点状态",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "节点状态",
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
                                            fileName: "docs/manual/element/node/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24811
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24680
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24606
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 24464
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 24354
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[138].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 25757
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[139].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 25791
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[140].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/state",
                                children: $$contentTexts[141].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 25891
                            }, this),
                            $$contentTexts[142].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 25861
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/element/node/overview.zh.md",
                lineNumber: 21,
                columnNumber: 24209
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
                fileName: "docs/manual/element/node/overview.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/element/node/overview.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/element/node/overview.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/element/node/overview.zh.md",
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
//# sourceMappingURL=docs_manual_element_node_overview_zh_md-async.js.map