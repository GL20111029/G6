((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/further-reading/bundle.en.md?type=text'],
{ "docs/manual/further-reading/bundle.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/further-reading/bundle.en.md?watch=parent");
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
        "value": "In general, if you are using modern build tools such as Webpack, Rollup, or ESBuild, you can easily build projects that depend on ",
        "paraId": 0
    },
    {
        "value": "@antv/g6",
        "paraId": 0
    },
    {
        "value": ".",
        "paraId": 0
    },
    {
        "value": "Some build tools, such as Vite, use ESBuild as the underlying tool, so you can refer to ESBuild's configuration.",
        "paraId": 1
    },
    {
        "value": "Below are some example configurations that you can refer to when building your project. If you find that these configurations do not work properly, make sure that your build tool version is up to date.",
        "paraId": 2
    },
    {
        "value": "Make sure that ",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "webpack",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " and ",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "webpack-cli",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " are installed in your project:",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "npm install webpack webpack-cli --save-dev\n",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "Refer to the following ",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "webpack.config.js",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": " for configuration:",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.ts',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'index.js',\n  },\n  mode: 'production',\n};\n",
        "paraId": 6,
        "tocIndex": 0
    },
    {
        "value": "Run the build command:",
        "paraId": 7,
        "tocIndex": 0
    },
    {
        "value": "npx webpack\n",
        "paraId": 8,
        "tocIndex": 0
    },
    {
        "value": "The above configuration works with ",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "\"webpack\": \"^5.94.0\"",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": ", ",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "\"webpack-cli\": \"^5.1.4\"",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": ".",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "⚠️ It is strongly recommended that projects use Webpack 5. If you are using Webpack 4, follow the steps below to configure:",
        "paraId": 10
    },
    {
        "value": "Install the necessary dependencies: ",
        "paraId": 11
    },
    {
        "value": "babel-loader",
        "paraId": 11
    },
    {
        "value": " (<9), ",
        "paraId": 11
    },
    {
        "value": "@babel/preset-env",
        "paraId": 11
    },
    {
        "value": ", ",
        "paraId": 11
    },
    {
        "value": "@open-wc/webpack-import-meta-loader",
        "paraId": 11
    },
    {
        "value": "If you are using TypeScript, you also need to install ",
        "paraId": 12
    },
    {
        "value": "ts-loader",
        "paraId": 12
    },
    {
        "value": ".",
        "paraId": 12
    },
    {
        "value": "npm install babel-loader@8 @babel/preset-env @open-wc/webpack-import-meta-loader --save-dev\n",
        "paraId": 13
    },
    {
        "value": "Modify the ",
        "paraId": 14
    },
    {
        "value": "webpack.config.js",
        "paraId": 14
    },
    {
        "value": " configuration:",
        "paraId": 14
    },
    {
        "value": "module.exports = {\n  entry: './src/index.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'index.js',\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: {\n          loader: 'babel-loader',\n          options: {\n            presets: ['@babel/preset-env'],\n          },\n        },\n      },\n      {\n        test: /\\.js$/,\n        loader: '@open-wc/webpack-import-meta-loader',\n      },\n    ],\n  },\n  mode: 'production',\n};\n",
        "paraId": 15
    },
    {
        "value": "This configuration is for a standard webpack project. If you are using vue-cli, you should REMOVE the ",
        "paraId": 16
    },
    {
        "value": "mode: 'production'",
        "paraId": 16
    },
    {
        "value": " option as it is unnecessary.",
        "paraId": 16
    },
    {
        "value": "First, make sure that ",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "rollup",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": " and the necessary plugins are installed in your project:",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "@rollup/plugin-commonjs",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": ": Used to load CommonJS modules",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": "@rollup/plugin-node-resolve",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": ": Used to load Node.js modules",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": "npm install rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve --save-dev\n",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "Refer to the following ",
        "paraId": 20,
        "tocIndex": 1
    },
    {
        "value": "rollup.config.js",
        "paraId": 20,
        "tocIndex": 1
    },
    {
        "value": " for configuration:",
        "paraId": 20,
        "tocIndex": 1
    },
    {
        "value": "const commonjs = require('@rollup/plugin-commonjs');\nconst resolve = require('@rollup/plugin-node-resolve');\n\nmodule.exports = {\n  input: 'src/index.ts',\n  output: {\n    file: 'dist/index.js',\n    format: 'umd',\n    name: 'project',\n  },\n  plugins: [resolve(), commonjs()],\n};\n",
        "paraId": 21,
        "tocIndex": 1
    },
    {
        "value": "Run the build command:",
        "paraId": 22,
        "tocIndex": 1
    },
    {
        "value": "npx rollup -c\n",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "First, make sure that ",
        "paraId": 24,
        "tocIndex": 2
    },
    {
        "value": "esbuild",
        "paraId": 24,
        "tocIndex": 2
    },
    {
        "value": " is installed in your project:",
        "paraId": 24,
        "tocIndex": 2
    },
    {
        "value": "npm install esbuild --save-dev\n",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "Run the build command:",
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
//# sourceMappingURL=docs_manual_further-reading_bundle_en_md_q_hK4X-async.js.map