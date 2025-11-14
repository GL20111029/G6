((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/CompactBoxLayout.zh.md'],
{ "docs/manual/layout/CompactBoxLayout.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "http://emr.cs.iit.edu/~reingold/tidier-drawings.pdf",
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1461
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/examples#layout-compact-box",
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1577
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/hierarchy/blob/master/src/compact-box.js",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1674
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*z-ESRoHTpvIAAAAAAAAAAABkARQnAQ",
                    width: "650",
                    alt: "CompactBox 紧凑树布局示例"
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1784
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
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1983
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1934
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2377
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2246
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 2172
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 2030
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1920
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[6].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3327
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[7].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3361
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3323
                }, this),
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
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3463
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3414
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3857
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3726
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3652
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3510
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3400
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[8].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4803
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
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 4924
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4876
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5316
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5185
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 5111
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4970
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4863
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6280
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6314
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6349
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6384
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6419
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 6276
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6269
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6478
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6513
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[16].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6552
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6548
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6596
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6631
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6474
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6675
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[20].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#direction",
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6740
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6710
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[22].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6804
                                                }, this),
                                                $$contentTexts[23].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[24].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6869
                                                }, this),
                                                $$contentTexts[25].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[26].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6934
                                                }, this),
                                                $$contentTexts[27].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[28].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6999
                                                }, this),
                                                $$contentTexts[29].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[30].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7064
                                                }, this),
                                                $$contentTexts[31].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[32].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7129
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6800
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[33].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7177
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7173
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7221
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6671
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7236
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[35].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[36].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7301
                                                }, this),
                                                $$contentTexts[37].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7271
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[38].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7401
                                                }, this),
                                                $$contentTexts[40].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7371
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7534
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7540
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7232
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7555
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7590
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[43].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7655
                                                }, this),
                                                $$contentTexts[45].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7625
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7788
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7794
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7551
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7809
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7844
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7909
                                                }, this),
                                                $$contentTexts[50].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7879
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8042
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8048
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7805
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8063
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8098
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[53].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[54].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8163
                                                }, this),
                                                $$contentTexts[55].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8133
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8296
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8302
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8059
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8317
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8352
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[58].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[59].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8417
                                                }, this),
                                                $$contentTexts[60].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8387
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8550
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8556
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8313
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8571
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8606
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[63].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[64].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8671
                                                }, this),
                                                $$contentTexts[65].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8641
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8804
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8810
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8567
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8825
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[67].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#radial",
                                                    children: $$contentTexts[68].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8890
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8860
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8947
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8982
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9017
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8821
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6467
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 6262
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "direction",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#direction",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9117
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9063
                        }, this),
                        "direction",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "direction",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9521
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9390
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9316
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9169
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9044
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[71].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10482
                            }, this),
                            $$contentTexts[72].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[73].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10547
                            }, this),
                            $$contentTexts[74].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[75].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10612
                            }, this),
                            $$contentTexts[76].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[77].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10677
                            }, this),
                            $$contentTexts[78].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[79].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10742
                            }, this),
                            $$contentTexts[80].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[81].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10807
                            }, this),
                            $$contentTexts[82].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[83].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10872
                            }, this),
                            $$contentTexts[84].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[85].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10941
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 10479
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10467
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[86].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10997
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11041
                                        }, this),
                                        $$contentTexts[88].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11038
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*KrAqTrFbNjMAAAAAAAAAAABkARQnAQ",
                                    width: "150",
                                    alt: "垂直布局"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11110
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11034
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11244
                                        }, this),
                                        $$contentTexts[90].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11241
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*vNmOTJ4q0uwAAAAAAAAAAABkARQnAQ",
                                    width: "150",
                                    alt: "垂直布局"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11313
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11237
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11447
                                        }, this),
                                        $$contentTexts[92].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11444
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ffD6S74MXw4AAAAAAAAAAABkARQnAQ",
                                    width: "150",
                                    alt: "水平布局"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11516
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11440
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11650
                                        }, this),
                                        $$contentTexts[94].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11647
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*vTg2SJbtj_sAAAAAAAAAAABkARQnAQ",
                                    width: "150",
                                    alt: "水平布局"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11719
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11643
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11853
                                        }, this),
                                        $$contentTexts[96].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11918
                                        }, this),
                                        $$contentTexts[98].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11850
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*0GsIQISvieYAAAAAAAAAAABkARQnAQ",
                                    width: "150",
                                    alt: "水平布局"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11987
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11846
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12121
                                        }, this),
                                        $$contentTexts[100].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12118
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*E0c8TIYRPYoAAAAAAAAAAABkARQnAQ",
                                    width: "150",
                                    alt: "垂直布局"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12191
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12114
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 11030
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getside",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getside",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12392
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12340
                        }, this),
                        "getSide",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getSide",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12792
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12661
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12587
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12442
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12323
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[101].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                    children: $$contentTexts[102].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13784
                                }, this),
                                $$contentTexts[103].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13753
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 13750
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 13738
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[104].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[105].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13966
                        }, this),
                        $$contentTexts[106].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[107].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14033
                        }, this),
                        $$contentTexts[108].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/hierarchy/blob/d786901874f59d96c47e2a5dfe17b373eefd72e3/src/layout/separate-root.js#L11",
                            children: $$contentTexts[109].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14100
                        }, this),
                        $$contentTexts[110].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 13936
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[111].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14286
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[112].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14320
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getid",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getid",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14455
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14405
                        }, this),
                        "getId",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getId",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14851
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14720
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14646
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14503
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14390
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[113].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                    children: $$contentTexts[114].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15843
                                }, this),
                                $$contentTexts[115].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15812
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 15809
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15797
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[116].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15995
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[117].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 16029
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[118].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 16063
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getwidth",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getwidth",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 16204
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 16151
                        }, this),
                        "getWidth",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getWidth",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16606
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16475
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 16401
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 16255
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 16133
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[119].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                    children: $$contentTexts[120].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17598
                                }, this),
                                $$contentTexts[121].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17567
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 17564
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17552
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[122].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17750
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[123].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17784
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[124].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17818
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getheight",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getheight",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17961
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17907
                        }, this),
                        "getHeight",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getHeight",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18365
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18234
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 18160
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 18013
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17888
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[125].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                    children: $$contentTexts[126].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19357
                                }, this),
                                $$contentTexts[127].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19326
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 19323
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19311
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[128].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19509
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[129].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19543
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[130].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19577
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "gethgap",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#gethgap",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 19716
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19664
                        }, this),
                        "getHGap",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getHGap",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20116
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19985
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 19911
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19766
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19647
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[131].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                    children: $$contentTexts[132].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21108
                                }, this),
                                $$contentTexts[133].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 21077
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 21074
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 21062
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[134].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 21260
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[135].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 21294
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[136].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 21328
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getvgap",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getvgap",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 21467
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 21415
                        }, this),
                        "getVGap",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getVGap",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21867
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21736
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 21662
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 21517
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 21398
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[137].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                    children: $$contentTexts[138].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22859
                                }, this),
                                $$contentTexts[139].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 22828
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 22825
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 22813
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[140].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 23011
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[141].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 23045
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[142].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 23079
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "radial",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#radial",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 23216
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23165
                        }, this),
                        "radial",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "radial",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23614
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23483
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 23409
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23265
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 23149
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[143].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 24575
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 24572
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 24560
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[144].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[145].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 24658
                        }, this),
                        $$contentTexts[146].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[147].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 24725
                        }, this),
                        $$contentTexts[148].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[149].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 24792
                        }, this),
                        $$contentTexts[150].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[151].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 24859
                        }, this),
                        $$contentTexts[152].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[153].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 24926
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 24628
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*E0c8TIYRPYoAAAAAAAAAAABkARQnAQ",
                    width: "200",
                    alt: "img"
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 24970
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "代码示例",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#代码示例",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 25154
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 25105
                        }, this),
                        "代码示例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "代码示例",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25548
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25417
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 25343
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 25201
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 25091
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 26524
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[154].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 26568
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 26494
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
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
                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/CompactBoxLayout.zh.md",
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
//# sourceMappingURL=docs_manual_layout_CompactBoxLayout_zh_md-async.js.map