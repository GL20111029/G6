((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/further-reading/iconfont.zh.md?type=text'],
{ "docs/manual/further-reading/iconfont.zh.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("../../node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js"));
__mako_require__("docs/manual/further-reading/iconfont.zh.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "为什么使用 iconfont？ 兼容性好、种类多、多色等。在此不做过多介绍，请直接移步 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "阿里巴巴-iconfont 平台",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "首先，你需要从 ",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "iconfont",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": " 网站下载所需的图标字体。创建一个项目并选择所需的图标，然后下载生成的图标文件。",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "下载完成后，将包含图标字体文件的目录（通常包括 ",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": ".eot",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "、",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": ".woff",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "、",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": ".ttf",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": " 和 ",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": ".svg",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": " 文件，以及 ",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "iconfont.css",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": " 样式文件）放入你的项目中。",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "引入方式可自行选择，下面为在 HTML 中引入的例子：",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "<head>\n  <style>\n    @import 'path-to-iconfont/iconfont.css';\n  </style>\n</head>\n",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "{\n  node: {\n    style: {\n      iconFontFamily: 'iconfont', // 对应 iconfont.css 中的 `font-family` 属性值\n      iconText: '\\ue7f1', // 对应 iconfont.css 中的 `content` 属性值，注意加 `u`\n      iconFill: '#7863FF'\n    }\n  }\n}\n",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "getIcon()",
        "paraId": 6
    },
    {
        "value": "为了更方便地获取图标，可以创建一个工具函数 ",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "getIcon",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "。该函数会从图标文件 ",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "iconfont.json",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": " 中读取图标信息并返回相应的 Unicode 字符。这里注意，手动拼接 unicode 是不行的（",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "\\\\u${icon.unicode}",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "）。详细参考 ",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "MDN String.fromCodePoint",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "。",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "首先，确保你有一个 ",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "iconfont.json",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": " 文件，包含图标的详细信息。",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "import fonts from 'path-to-iconfont/iconfont.json';\n\nconst icons = fonts.glyphs.map((icon) => {\n  return {\n    name: icon.font_class,\n    unicode: String.fromCodePoint(icon.unicode_decimal), // `\\\\u${icon.unicode}`,\n  };\n});\n\nconst getIcon = (type: string) => {\n  const matchIcon = icons.find((icon) => {\n    return icon.name === type;\n  }) || { unicode: '', name: 'default' };\n  return matchIcon.unicode;\n};\n",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "在项目中使用：",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "{\n  node: {\n    style: {\n      iconFontFamily: \"iconfont\",\n      iconText: getIcon('logo')\n    }\n  }\n}\n",
        "paraId": 11,
        "tocIndex": 5
    }
];
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
//# sourceMappingURL=docs_manual_further-reading_iconfont_zh_md_q_hK4X-async.js.map