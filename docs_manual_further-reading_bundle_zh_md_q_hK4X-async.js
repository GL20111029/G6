((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/further-reading/bundle.zh.md?type=text'],
{ "docs/manual/further-reading/bundle.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/further-reading/bundle.zh.md?watch=parent");
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
        "value": "通常情况下，如果你使用的现代构建工具，如 Webpack、Rollup 或 ESBuild，你可以很容易地构建依赖于 ",
        "paraId": 0
    },
    {
        "value": "@antv/g6",
        "paraId": 0
    },
    {
        "value": " 的项目。",
        "paraId": 0
    },
    {
        "value": "一些构建工具例如 Vite，其底层是使用 ESBuild，因此你可以参考 ESBuild 的配置。",
        "paraId": 1
    },
    {
        "value": "下面是一些示例配置，你可以参考这些配置来构建你的项目。如果你发现这些配置无法正常工作，请确保你的构建工具版本较新。",
        "paraId": 2
    },
    {
        "value": "确保你的项目中已经安装了 ",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "webpack",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " 和 ",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "webpack-cli",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "：",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "npm install webpack webpack-cli --save-dev\n",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "参考下面的 ",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "webpack.config.js",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": " 进行配置：",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.ts',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'index.js',\n  },\n  mode: 'production',\n};\n",
        "paraId": 6,
        "tocIndex": 0
    },
    {
        "value": "执行构建命令：",
        "paraId": 7,
        "tocIndex": 0
    },
    {
        "value": "npx webpack\n",
        "paraId": 8,
        "tocIndex": 0
    },
    {
        "value": "上述配置在：\"webpack\": \"^5.94.0\"，\"webpack-cli\": \"^5.1.4\" 可以正常工作。",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "⚠️ 强烈建议项目使用 Webpack 5，如果你使用的是 Webpack 4，按以下步骤配置：",
        "paraId": 10
    },
    {
        "value": "安装相关依赖：babel-loader(<9)、@babel/preset-env、@open-wc/webpack-import-meta-loader",
        "paraId": 11
    },
    {
        "value": "如果你使用的 typescript，还需要安装 ts-loader",
        "paraId": 12
    },
    {
        "value": "npm install babel-loader@8 @babel/preset-env @open-wc/webpack-import-meta-loader --save-dev\n",
        "paraId": 13
    },
    {
        "value": "修改 ",
        "paraId": 14
    },
    {
        "value": "webpack.config.js",
        "paraId": 14
    },
    {
        "value": " 配置：",
        "paraId": 14
    },
    {
        "value": "module.exports = {\n  entry: './src/index.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'index.js',\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: {\n          loader: 'babel-loader',\n          options: {\n            presets: ['@babel/preset-env'],\n          },\n        },\n      },\n      {\n        test: /\\.js$/,\n        loader: '@open-wc/webpack-import-meta-loader',\n      },\n    ],\n  },\n  mode: 'production',\n};\n",
        "paraId": 15
    },
    {
        "value": "如果你使用的是 vue-cli，请移除 mode: 'production' 配置，否则可能会影响开发模式下的构建性能。",
        "paraId": 16
    },
    {
        "value": "首先，确保你的项目中已经安装了 ",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "rollup",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": " 及必要的插件：",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "@rollup/plugin-commonjs",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": "：用于加载 CommonJS 模块",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": "@rollup/plugin-node-resolve",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": "：用于加载 Node.js 模块",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": "npm install rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve --save-dev\n",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "参考下面的 ",
        "paraId": 20,
        "tocIndex": 1
    },
    {
        "value": "rollup.config.js",
        "paraId": 20,
        "tocIndex": 1
    },
    {
        "value": " 进行配置：",
        "paraId": 20,
        "tocIndex": 1
    },
    {
        "value": "const commonjs = require('@rollup/plugin-commonjs');\nconst resolve = require('@rollup/plugin-node-resolve');\n\nmodule.exports = {\n  input: 'src/index.ts',\n  output: {\n    file: 'dist/index.js',\n    format: 'umd',\n    name: 'project',\n  },\n  plugins: [resolve(), commonjs()],\n};\n",
        "paraId": 21,
        "tocIndex": 1
    },
    {
        "value": "执行构建命令：",
        "paraId": 22,
        "tocIndex": 1
    },
    {
        "value": "npx rollup -c\n",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "首先，确保你的项目中已经安装了 ",
        "paraId": 24,
        "tocIndex": 2
    },
    {
        "value": "esbuild",
        "paraId": 24,
        "tocIndex": 2
    },
    {
        "value": "：",
        "paraId": 24,
        "tocIndex": 2
    },
    {
        "value": "npm install esbuild --save-dev\n",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "执行构建命令：",
        "paraId": 26,
        "tocIndex": 2
    },
    {
        "value": "npx esbuild src/index.ts --bundle --outfile=dist/index.js\n",
        "paraId": 27,
        "tocIndex": 2
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
//# sourceMappingURL=docs_manual_further-reading_bundle_zh_md_q_hK4X-async.js.map