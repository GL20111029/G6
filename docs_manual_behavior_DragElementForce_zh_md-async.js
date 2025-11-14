((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/DragElementForce.zh.md'],
{ "docs/manual/behavior/DragElementForce.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
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
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 1461
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 1524
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 1587
                        }, this),
                        $$contentTexts[6].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    alt: "力导向拖拽元素效果图",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*I5uDQZWTzMsAAAAAAAAAAAAADmJ7AQ/original"
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 1658
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "基本用法",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基本用法",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 1846
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 1797
                        }, this),
                        "基本用法",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基本用法",
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
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2240
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2109
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 2035
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 1893
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 1783
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 3186
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[8].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                        lineNumber: 21,
                        columnNumber: 3221
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 3218
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[9].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 3267
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[10].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 3299
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[11].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                        lineNumber: 21,
                        columnNumber: 3371
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 3368
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[12].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 3418
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[13].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 3451
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
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 3581
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 3533
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
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3973
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3842
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 3768
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 3627
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 3520
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4937
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4972
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5007
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5042
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[18].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5077
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 4933
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 4926
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5136
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[20].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5201
                                                }, this),
                                                $$contentTexts[22].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5171
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5271
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[24].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5310
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5306
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5354
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5132
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5398
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5433
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5468
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5503
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5538
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5394
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5553
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[31].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5618
                                                }, this),
                                                $$contentTexts[32].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5650
                                                }, this),
                                                $$contentTexts[33].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5588
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5687
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5722
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5757
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5549
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5772
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5807
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5842
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[39].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5881
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5877
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5925
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5768
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5940
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5975
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6010
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[43].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6049
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6045
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6093
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5936
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6108
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[45].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6173
                                                }, this),
                                                $$contentTexts[46].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6205
                                                }, this),
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6270
                                                }, this),
                                                $$contentTexts[49].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[50].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6302
                                                }, this),
                                                $$contentTexts[51].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6367
                                                }, this),
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6399
                                                }, this),
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6464
                                                }, this),
                                                $$contentTexts[55].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[56].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6496
                                                }, this),
                                                $$contentTexts[57].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6561
                                                }, this),
                                                $$contentTexts[58].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[59].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6593
                                                }, this),
                                                $$contentTexts[60].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6658
                                                }, this),
                                                $$contentTexts[61].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[62].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6690
                                                }, this),
                                                $$contentTexts[63].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[64].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6755
                                                }, this),
                                                $$contentTexts[65].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6143
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6825
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6831
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6837
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6104
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[66].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6856
                                                }, this),
                                                $$contentTexts[67].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[68].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6921
                                                }, this),
                                                $$contentTexts[69].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[70].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6986
                                                }, this),
                                                $$contentTexts[71].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[72].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7051
                                                }, this),
                                                $$contentTexts[73].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[74].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7116
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6852
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[75].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7164
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7160
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7208
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7214
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7220
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6848
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7235
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[77].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[78].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7300
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7270
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7357
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[80].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7392
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7427
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7231
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 5125
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 4919
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "cursor",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#cursor",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 7521
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 7470
                        }, this),
                        "cursor",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "cursor",
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
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7919
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7788
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 7714
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 7570
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 7454
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[81].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 8868
                        }, this),
                        $$contentTexts[82].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 8865
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[83].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8945
                                }, this),
                                $$contentTexts[84].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 8941
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[85].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9019
                                }, this),
                                $$contentTexts[86].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9015
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[87].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9093
                                }, this),
                                $$contentTexts[88].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9089
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 8937
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[89].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[90].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9197
                        }, this),
                        $$contentTexts[91].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[92].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9262
                        }, this),
                        $$contentTexts[93].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[94].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9327
                        }, this),
                        $$contentTexts[95].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[96].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9392
                        }, this),
                        $$contentTexts[97].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[98].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9457
                        }, this),
                        $$contentTexts[99].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[100].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9522
                        }, this),
                        $$contentTexts[101].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[102].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9589
                        }, this),
                        $$contentTexts[103].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[104].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9656
                        }, this),
                        $$contentTexts[105].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[106].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9723
                        }, this),
                        $$contentTexts[107].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[108].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9790
                        }, this),
                        $$contentTexts[109].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[110].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9857
                        }, this),
                        $$contentTexts[111].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[112].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9924
                        }, this),
                        $$contentTexts[113].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[114].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 9991
                        }, this),
                        $$contentTexts[115].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[116].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10058
                        }, this),
                        $$contentTexts[117].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[118].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10125
                        }, this),
                        $$contentTexts[119].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[120].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10192
                        }, this),
                        $$contentTexts[121].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[122].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10259
                        }, this),
                        $$contentTexts[123].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[124].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10326
                        }, this),
                        $$contentTexts[125].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[126].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10393
                        }, this),
                        $$contentTexts[127].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[128].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10460
                        }, this),
                        $$contentTexts[129].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[130].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10527
                        }, this),
                        $$contentTexts[131].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[132].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10594
                        }, this),
                        $$contentTexts[133].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[134].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10661
                        }, this),
                        $$contentTexts[135].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[136].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10728
                        }, this),
                        $$contentTexts[137].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[138].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10795
                        }, this),
                        $$contentTexts[139].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[140].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10862
                        }, this),
                        $$contentTexts[141].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[142].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10929
                        }, this),
                        $$contentTexts[143].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[144].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 10996
                        }, this),
                        $$contentTexts[145].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[146].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 11063
                        }, this),
                        $$contentTexts[147].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[148].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 11130
                        }, this),
                        $$contentTexts[149].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[150].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 11197
                        }, this),
                        $$contentTexts[151].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[152].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 11264
                        }, this),
                        $$contentTexts[153].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[154].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 11331
                        }, this),
                        $$contentTexts[155].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[156].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 11398
                        }, this),
                        $$contentTexts[157].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[158].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 11465
                        }, this),
                        $$contentTexts[159].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[160].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 11532
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 9168
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[161].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 11576
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[162].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 11610
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "常见问题",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#常见问题",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 11735
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 11686
                        }, this),
                        "常见问题",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "常见问题",
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
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12129
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11998
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 11924
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 11782
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 11672
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "1-dragelementforce-和-dragelement-有什么区别",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#1-dragelementforce-和-dragelement-有什么区别",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 13206
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 13123
                        }, this),
                        "1. DragElementForce 和 DragElement 有什么区别？",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "1.-DragElementForce-和-DragElement-有什么区别？",
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
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13672
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13541
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 13467
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 13289
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 13075
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[163].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14626
                                }, this),
                                $$contentTexts[164].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[165].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14693
                                }, this),
                                $$contentTexts[166].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[167].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14760
                                }, this),
                                $$contentTexts[168].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 14622
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[169].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14836
                                }, this),
                                $$contentTexts[170].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 14832
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 14618
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "实际案例",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#实际案例",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 14976
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 14927
                        }, this),
                        "实际案例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "实际案例",
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
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15370
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15239
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 15165
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 15023
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 14913
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "网格效果",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#网格效果",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 16379
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 16330
                        }, this),
                        "网格效果",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "网格效果",
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
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16773
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16642
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 16568
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 16426
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 16316
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 17749
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[171].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 17793
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 17719
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "固定被拖拽的节点",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#固定被拖拽的节点",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 17932
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 17879
                        }, this),
                        "固定被拖拽的节点",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "固定被拖拽的节点",
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
                                        fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18334
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18203
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                                lineNumber: 21,
                                columnNumber: 18129
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 17983
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 17861
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 19310
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[172].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.zh.md",
                            lineNumber: 21,
                            columnNumber: 19354
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.zh.md",
                    lineNumber: 21,
                    columnNumber: 19280
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/behavior/DragElementForce.zh.md",
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
                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/DragElementForce.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/DragElementForce.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/DragElementForce.zh.md",
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
//# sourceMappingURL=docs_manual_behavior_DragElementForce_zh_md-async.js.map