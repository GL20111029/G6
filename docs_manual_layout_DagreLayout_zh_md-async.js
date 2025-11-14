((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/DagreLayout.zh.md'],
{ "docs/manual/layout/DagreLayout.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
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
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/examples#layout-dagre",
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1461
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/dagrejs/dagre/blob/master/lib/layout.js",
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1552
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/dagrejs/dagre/wiki",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1675
                        }, this),
                        $$contentTexts[6].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*2uMmRo5wYPUAAAAAAAAAAABkARQnAQ",
                    width: "350",
                    alt: "Dagre布局"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1781
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
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1969
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1920
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
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2363
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2232
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 2158
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 2016
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1906
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3309
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
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3430
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3382
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
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3822
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3691
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3617
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3476
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3369
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[8].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://github.com/dagrejs/dagre/wiki#configuring-the-layout",
                                children: $$contentTexts[9].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 4808
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 4780
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4768
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i3/O1CN01OpQHBZ1HcpZuWZLS7_!!6000000000779-0-tps-1274-1234.jpg",
                    width: "400",
                    alt: "Dagre 布局配置项图解"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4925
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5083
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5118
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5153
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5188
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5223
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 5079
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5072
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5282
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5317
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[17].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5356
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5352
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5400
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5435
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5278
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5479
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5514
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[22].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5553
                                                }, this),
                                                $$contentTexts[23].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[24].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5618
                                                }, this),
                                                $$contentTexts[25].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[26].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5683
                                                }, this),
                                                $$contentTexts[27].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[28].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5748
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5549
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[29].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5796
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5792
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5840
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5475
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5855
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5890
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[32].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5929
                                                }, this),
                                                $$contentTexts[33].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[34].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5994
                                                }, this),
                                                $$contentTexts[35].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[36].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6059
                                                }, this),
                                                $$contentTexts[37].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[38].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6124
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5925
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[39].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6172
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6168
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6216
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5851
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6231
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[41].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[42].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6296
                                                }, this),
                                                $$contentTexts[43].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6361
                                                }, this),
                                                $$contentTexts[45].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[46].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6426
                                                }, this),
                                                $$contentTexts[47].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[48].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6491
                                                }, this),
                                                $$contentTexts[49].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6266
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6561
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6596
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6631
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6227
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6646
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[53].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[54].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6711
                                                }, this),
                                                $$contentTexts[55].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[56].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6776
                                                }, this),
                                                $$contentTexts[57].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[58].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6841
                                                }, this),
                                                $$contentTexts[59].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[60].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6906
                                                }, this),
                                                $$contentTexts[61].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6681
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6976
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7011
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7046
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6642
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7061
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[65].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[66].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7126
                                                }, this),
                                                $$contentTexts[67].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[68].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7191
                                                }, this),
                                                $$contentTexts[69].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[70].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7256
                                                }, this),
                                                $$contentTexts[71].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7096
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[72].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7330
                                                }, this),
                                                $$contentTexts[73].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[74].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7395
                                                }, this),
                                                $$contentTexts[75].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[76].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7460
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7326
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[77].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7508
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7504
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7552
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7057
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7567
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[79].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[80].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7632
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7602
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[81].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7676
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7711
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7717
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7563
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7732
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[83].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7767
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[84].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7802
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7837
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7872
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7728
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5271
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5065
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "rankdir",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#rankdir",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 7968
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7916
                        }, this),
                        "rankdir",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "rankdir",
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
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8368
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8237
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8163
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8018
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7899
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[86].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9329
                            }, this),
                            $$contentTexts[87].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[88].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9394
                            }, this),
                            $$contentTexts[89].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[90].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9459
                            }, this),
                            $$contentTexts[91].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[92].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9524
                            }, this),
                            $$contentTexts[93].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[94].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9589
                            }, this),
                            $$contentTexts[95].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[96].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9658
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 9326
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9314
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[97].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9714
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[98].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9755
                            }, this),
                            $$contentTexts[99].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 9751
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9747
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i3/O1CN01ulI3Se1DeQUfhQ29v_!!6000000000241-0-tps-1092-1218.jpg",
                    width: "170",
                    alt: "：从上到下布局"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9830
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[100].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9972
                            }, this),
                            $$contentTexts[101].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 9968
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9964
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i1/O1CN01IfytBS1EOE6NXVprx_!!6000000000341-0-tps-1004-1236.jpg",
                    width: "170",
                    alt: "从下到上布局"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10049
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[102].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10190
                            }, this),
                            $$contentTexts[103].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 10186
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10182
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i2/O1CN01tpEdMJ1MsTBKpoP6r_!!6000000001490-0-tps-1452-786.jpg",
                    width: "170",
                    alt: "从左到右布局"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10267
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[104].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10407
                            }, this),
                            $$contentTexts[105].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 10403
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10399
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i4/O1CN01Lw8JHC27j71xd0wl9_!!6000000007832-0-tps-1460-848.jpg",
                    width: "170",
                    alt: "水平布局"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10484
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "align",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#align",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10679
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10629
                        }, this),
                        "align",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "align",
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
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11075
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10944
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10870
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10727
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10614
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[106].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12036
                            }, this),
                            $$contentTexts[107].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[108].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12103
                            }, this),
                            $$contentTexts[109].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[110].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12170
                            }, this),
                            $$contentTexts[111].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[112].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12237
                            }, this),
                            $$contentTexts[113].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[114].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12304
                            }, this),
                            $$contentTexts[115].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[116].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12375
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 12033
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12021
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[117].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12432
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[118].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12474
                                }, this),
                                $$contentTexts[119].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12470
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[120].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12550
                                }, this),
                                $$contentTexts[121].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12546
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[122].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12626
                                }, this),
                                $$contentTexts[123].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12622
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[124].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12702
                                }, this),
                                $$contentTexts[125].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12698
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12466
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "nodesep",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodesep",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12848
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12796
                        }, this),
                        "nodesep",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "nodesep",
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
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13248
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13117
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 13043
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12898
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12779
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[126].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[127].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14236
                            }, this),
                            $$contentTexts[128].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 14206
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14194
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[129].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[130].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14354
                        }, this),
                        $$contentTexts[131].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[132].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14421
                        }, this),
                        $$contentTexts[133].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[134].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14488
                        }, this),
                        $$contentTexts[135].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[136].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14555
                        }, this),
                        $$contentTexts[137].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14324
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "ranksep",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#ranksep",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14695
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14643
                        }, this),
                        "ranksep",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ranksep",
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
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15095
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14964
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14890
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14745
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14626
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[138].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[139].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 16083
                            }, this),
                            $$contentTexts[140].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 16053
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 16041
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[141].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[142].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 16201
                        }, this),
                        $$contentTexts[143].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[144].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 16268
                        }, this),
                        $$contentTexts[145].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[146].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 16335
                        }, this),
                        $$contentTexts[147].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[148].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 16402
                        }, this),
                        $$contentTexts[149].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 16171
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "ranker",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#ranker",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 16540
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 16489
                        }, this),
                        "ranker",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ranker",
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
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16938
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16807
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 16733
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 16589
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 16473
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[150].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17899
                            }, this),
                            $$contentTexts[151].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[152].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17966
                            }, this),
                            $$contentTexts[153].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[154].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 18033
                            }, this),
                            $$contentTexts[155].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[156].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 18100
                            }, this),
                            $$contentTexts[157].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[158].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 18171
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 17896
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17884
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[159].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 18228
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[160].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18270
                                }, this),
                                $$contentTexts[161].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 18266
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[162].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18346
                                }, this),
                                $$contentTexts[163].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[164].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18413
                                }, this),
                                $$contentTexts[165].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 18342
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[166].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18489
                                }, this),
                                $$contentTexts[167].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    href: "https://www.graphviz.org/documentation/TSE93.pdf",
                                    children: $$contentTexts[168].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18556
                                }, this),
                                $$contentTexts[169].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 18485
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 18262
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "nodesize",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodesize",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 18754
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 18701
                        }, this),
                        "nodeSize",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "nodeSize",
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
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19156
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19025
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 18951
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 18805
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 18683
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[170].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 20114
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 20102
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[171].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[172].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 20191
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 20161
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[173].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 20235
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "controlpoints",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#controlpoints",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 20378
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 20320
                        }, this),
                        "controlPoints",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "controlPoints",
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
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20790
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20659
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 20585
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 20434
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 20297
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[174].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[175].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 21778
                            }, this),
                            $$contentTexts[176].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 21748
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 21736
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[177].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 21866
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "布局适用场景",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#布局适用场景",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 21967
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 21916
                        }, this),
                        "布局适用场景",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "布局适用场景",
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
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22365
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22234
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 22160
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 22016
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 21900
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[178].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23319
                                }, this),
                                $$contentTexts[179].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23315
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[180].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23399
                                }, this),
                                $$contentTexts[181].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23395
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[182].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23479
                                }, this),
                                $$contentTexts[183].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23475
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 23311
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "相关文档",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#相关文档",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 23623
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23574
                        }, this),
                        "相关文档",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "相关文档",
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
                                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24017
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23886
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 23812
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23670
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 23560
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[184].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/DagreLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 24975
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 24963
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://mp.weixin.qq.com/s/EdyTfFUH7fyMefNSBXI2nA",
                                children: $$contentTexts[185].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 25030
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 25026
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://www.yuque.com/antv/g6-blog/xxp5nl",
                                children: $$contentTexts[186].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 25130
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 25126
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 25022
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/DagreLayout.zh.md",
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
                fileName: "docs/manual/layout/DagreLayout.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/DagreLayout.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/DagreLayout.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/DagreLayout.zh.md",
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
//# sourceMappingURL=docs_manual_layout_DagreLayout_zh_md-async.js.map