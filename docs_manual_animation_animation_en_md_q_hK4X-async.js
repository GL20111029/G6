((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/animation/animation.en.md?type=text'],
{ "docs/manual/animation/animation.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/animation/animation.en.md?watch=parent");
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
        "value": "Animation refers to the state changes of elements over a period of time, such as the position, size, and color of nodes. In G6, animations are often used to enhance user experience and improve the coherence and smoothness of the graph update process.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "G6 provides a set of animation paradigms to describe element animations and has built-in some common animation effects. Users can achieve different animation effects by configuring animation parameters.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "The implementation of an animation paradigm is as follows:",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "[\n  {\n    fields: ['x', 'y'],\n  },\n];\n",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "The aforementioned animation paradigm indicates that when the ",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "x",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": " and ",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "y",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": " attributes of an element change, an animation will be executed.",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "In G6, animation configuration is divided into global configuration and local configuration. Global configuration is mainly used to set whether animations are enabled globally, the duration of animations, and other parameters. Local configuration is primarily used to set the animation effects for elements.",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "To disable global animations, you can pass the ",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "animation",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": " option when instantiating the ",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Graph",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ":",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "{\n  animation: false,\n}\n",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "If you want to enable animations and also configure the default duration for the animations, you can pass the ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "animation",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": " option:",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "{\n  animation: {\n    duration: 500,\n  },\n}\n",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "For individual elements, you can configure animations at different stages. For example, if you want an element to have a fade-in and fade-out effect when it enters and exits, you can configure it as follows:",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "{\n  node: {\n    animation: {\n      enter: 'fade',\n      exit: 'fade'\n    }\n  }\n}\n",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "If you want to update the position of an element with a translation transition, you can configure it as follows:",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "{\n  node: {\n    animation: {\n      update: 'translate',\n    }\n  }\n}\n",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "If you wish to disable animations for an element, you can configure it as follows:",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "{\n  node: {\n    animation: false,\n  }\n}\n",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "The animation configuration mentioned in the previous section actually used the built-in animation paradigm. This section introduces how to customize the animation paradigm.",
        "paraId": 16,
        "tocIndex": 5
    },
    {
        "value": "Before writing an animation paradigm, it is necessary to understand the compositional structure of an element. For details, please refer to the ",
        "paraId": 17
    },
    {
        "value": "Element",
        "paraId": 18
    },
    {
        "value": " section.",
        "paraId": 17
    },
    {
        "value": "The ",
        "paraId": 19
    },
    {
        "value": "Element",
        "paraId": 20
    },
    {
        "value": " section mentioned that elements in G6 are composed of one or more atomic graphics. Therefore, the animation of an element is essentially a combination of these atomic shape animations.",
        "paraId": 19
    },
    {
        "value": "Thus, the animation paradigm is an array that describes the animation effects of each atomic shape within the element. For the element itself, it is also a special composite shape and thus has basic shape attributes such as ",
        "paraId": 21
    },
    {
        "value": "x",
        "paraId": 21
    },
    {
        "value": ", ",
        "paraId": 21
    },
    {
        "value": "y",
        "paraId": 21
    },
    {
        "value": ", etc.",
        "paraId": 21
    },
    {
        "value": "Therefore, you can directly write an animation paradigm for the element itself:",
        "paraId": 22
    },
    {
        "value": "[\n  {\n    fields: ['x', 'y'],\n  },\n];\n",
        "paraId": 23
    },
    {
        "value": "If the built-in animations do not meet your requirements, you can create custom animations. For details, please refer to ",
        "paraId": 24,
        "tocIndex": 6
    },
    {
        "value": "Custom Animation",
        "paraId": 25,
        "tocIndex": 6
    },
    {
        "value": ".",
        "paraId": 24,
        "tocIndex": 6
    },
    {
        "value": "Animation priority refers to the precedence between global animation configuration and element-specific animation configuration. It can be summarized as follows:",
        "paraId": 26,
        "tocIndex": 7
    },
    {
        "value": "Global Animation Config",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "Local Animation Config",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "Whether to Execute Animation",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ true",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ true",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ Execute animation with default configuration",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ true",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "❌ false",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "❌ Won't execute animation",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ true",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ Custom Animation",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ Execute animation with local animation configuration",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "❌ false",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ true",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "❌ Won't execute animation",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "❌ false",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "❌ false",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "❌ Won't execute animation",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "❌ false",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ Custom Animation",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "❌ Won't execute animation",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ Custom Animation",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ true",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ Execute animation with global animation configuration",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ Custom Animation",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ Custom Animation",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ Execute animation, local animation configuration overrides the global animation configuration",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "✅ Custom Animation",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "❌ false",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "❌ Won't execute animation",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "If you want elements to have persistent animations, such as the undulating effect of nodes or the ant line effect of edges, this can be achieved by customizing the elements. Below is an implementation of an edge with an Ant Line animation provided:",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "import { Line } from '@antv/g6';\n\nclass AntLine extends Line {\n  onCreate() {\n    this.shapeMap.key.animate([{ lineDashOffset: -20 }, { lineDashOffset: 0 }], {\n      duration: 500,\n      iterations: Infinity,\n    });\n  }\n}\n",
        "paraId": 29,
        "tocIndex": 8
    },
    {
        "value": "The ",
        "paraId": 30,
        "tocIndex": 8
    },
    {
        "value": "onCreate",
        "paraId": 30,
        "tocIndex": 8
    },
    {
        "value": " is a lifecycle hook used to execute animations when an element is created.",
        "paraId": 30,
        "tocIndex": 8
    },
    {
        "value": "Configure the edge style in the options as follows:",
        "paraId": 31,
        "tocIndex": 8
    },
    {
        "value": "{\n  edge: {\n    type: 'ant-line',\n    style:{\n      lineDash: [10, 10]\n    }\n  }\n}\n",
        "paraId": 32,
        "tocIndex": 8
    },
    {
        "value": "import { register, Line, Graph } from '@antv/g6';\n\nclass AntLine extends Line {\n  onCreate() {\n    this.shapeMap.key.animate([{ lineDashOffset: 20 }, { lineDashOffset: 0 }], {\n      duration: 500,\n      iterations: Infinity,\n    });\n  }\n}\n\nregister('edge', 'ant-line', AntLine);\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 50,\n  data: {\n    nodes: [\n      { id: 'node-1', style: { x: 25, y: 25 } },\n      { id: 'node-2', style: { x: 175, y: 25 } },\n    ],\n    edges: [{ source: 'node-1', target: 'node-2', style: { lineDash: [10, 10] } }],\n  },\n  edge: {\n    type: 'ant-line',\n  },\n});\n\ngraph.render();\n",
        "paraId": 33,
        "tocIndex": 8
    },
    {
        "value": "The ",
        "paraId": 34,
        "tocIndex": 8
    },
    {
        "value": "lineDash",
        "paraId": 34,
        "tocIndex": 8
    },
    {
        "value": " is an array for ",
        "paraId": 34,
        "tocIndex": 8
    },
    {
        "value": "lineDashOffset",
        "paraId": 34,
        "tocIndex": 8
    },
    {
        "value": ", and the AntLine effect is achieved by continuously varying the ",
        "paraId": 34,
        "tocIndex": 8
    },
    {
        "value": "lineDashOffset",
        "paraId": 34,
        "tocIndex": 8
    },
    {
        "value": ".",
        "paraId": 34,
        "tocIndex": 8
    },
    {
        "value": "Similarly, you can also create a breathing effect for nodes:",
        "paraId": 35,
        "tocIndex": 8
    },
    {
        "value": "import { Circle } from '@antv/g6';\n\nclass BreathingCircle extends Circle {\n  onCreate() {}\n}\n",
        "paraId": 36,
        "tocIndex": 8
    },
    {
        "value": "The ",
        "paraId": 37,
        "tocIndex": 8
    },
    {
        "value": "lineDashOffset",
        "paraId": 37,
        "tocIndex": 8
    },
    {
        "value": " is the offset for ",
        "paraId": 37,
        "tocIndex": 8
    },
    {
        "value": "lineDash",
        "paraId": 37,
        "tocIndex": 8
    },
    {
        "value": ", and the AntLine effect is achieved by continuously varying the ",
        "paraId": 37,
        "tocIndex": 8
    },
    {
        "value": "lineDashOffset",
        "paraId": 37,
        "tocIndex": 8
    },
    {
        "value": ".",
        "paraId": 37,
        "tocIndex": 8
    },
    {
        "value": "Similarly, you can also create a breathing effect for nodes:",
        "paraId": 38,
        "tocIndex": 8
    },
    {
        "value": "import { Circle } from '@antv/g6';\n\nclass BreathingCircle extends Circle {\n  onCreate() {\n    this.shapeMap.halo.animate([{ lineWidth: 5 }, { lineWidth: 10 }], {\n      duration: 1000,\n      iterations: Infinity,\n      direction: 'alternate',\n    });\n  }\n}\n",
        "paraId": 39,
        "tocIndex": 8
    },
    {
        "value": "Node Style Configuration:",
        "paraId": 40,
        "tocIndex": 8
    },
    {
        "value": "{\n  node: {\n    type: 'breathing-circle',\n    style: {\n      halo: true,\n      haloLineWidth: 5,\n    },\n  },\n}\n",
        "paraId": 41,
        "tocIndex": 8
    },
    {
        "value": "import { register, Circle, Graph } from '@antv/g6';\n\nclass BreathingCircle extends Circle {\n  onCreate() {\n    this.shapeMap.halo.animate([{ lineWidth: 5 }, { lineWidth: 10 }], {\n      duration: 1000,\n      iterations: Infinity,\n      direction: 'alternate',\n    });\n  }\n}\n\nregister('node', 'breathing-circle', BreathingCircle);\n\nconst graph = new Graph({\n  container: 'container',\n  width: 50,\n  height: 50,\n  data: {\n    nodes: [{ id: 'node-1', style: { x: 25, y: 25 } }],\n  },\n  node: {\n    type: 'breathing-circle',\n    style: {\n      halo: true,\n      haloLineWidth: 5,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 42,
        "tocIndex": 8
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
//# sourceMappingURL=docs_manual_animation_animation_en_md_q_hK4X-async.js.map