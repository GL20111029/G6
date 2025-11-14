((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/Fishbone.en.md?type=text'],
{ "docs/manual/layout/Fishbone.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/Fishbone.en.md?watch=parent");
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
        "value": "Fishbone layout is a graphical layout specifically designed for representing hierarchical data. By simulating the shape of a fishbone, it arranges data nodes according to their hierarchy, making the hierarchical relationships of the data clearer and more intuitive. Fishbone layout is especially suitable for datasets that need to show causality, hierarchy, or classification information.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Displaying hierarchical data, such as organizational structures or classification systems",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Showing problem analysis processes, such as fault analysis or quality analysis",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Displaying decision processes, such as decision trees or factor analysis",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        {\n          id: 'Quality',\n          depth: 0,\n          children: ['Machine', 'Method', 'Material', 'Man Power', 'Measurement', 'Milieu'],\n        },\n        {\n          id: 'Machine',\n          depth: 1,\n          children: ['Mill', 'Mixer', 'Metal Lathe'],\n        },\n        {\n          id: 'Mill',\n          depth: 2,\n        },\n        {\n          id: 'Mixer',\n          depth: 2,\n        },\n        {\n          id: 'Metal Lathe',\n          depth: 2,\n          children: ['Milling'],\n        },\n        {\n          id: 'Milling',\n          depth: 3,\n        },\n        {\n          id: 'Method',\n          depth: 1,\n        },\n        {\n          id: 'Material',\n          depth: 1,\n          children: ['Masonite', 'Marscapone', 'Meat'],\n        },\n        {\n          id: 'Masonite',\n          depth: 2,\n          children: ['spearMint', 'pepperMint', 'test1'],\n        },\n        {\n          id: 'spearMint',\n          depth: 3,\n        },\n        {\n          id: 'pepperMint',\n          depth: 3,\n          children: ['test3'],\n        },\n        {\n          id: 'test3',\n          depth: 4,\n        },\n        {\n          id: 'test1',\n          depth: 3,\n          children: ['test4'],\n        },\n        {\n          id: 'test4',\n          depth: 4,\n        },\n        {\n          id: 'Marscapone',\n          depth: 2,\n          children: ['Malty', 'Minty'],\n        },\n        {\n          id: 'Malty',\n          depth: 3,\n        },\n        {\n          id: 'Minty',\n          depth: 3,\n        },\n        {\n          id: 'Meat',\n          depth: 2,\n          children: ['Mutton'],\n        },\n        {\n          id: 'Mutton',\n          depth: 3,\n        },\n        {\n          id: 'Man Power',\n          depth: 1,\n          children: ['Manager', \"Master's Student\", 'Magician', 'Miner', 'Magister', 'Massage Artist'],\n        },\n        {\n          id: 'Manager',\n          depth: 2,\n        },\n        {\n          id: \"Master's Student\",\n          depth: 2,\n        },\n        {\n          id: 'Magician',\n          depth: 2,\n        },\n        {\n          id: 'Miner',\n          depth: 2,\n        },\n        {\n          id: 'Magister',\n          depth: 2,\n          children: ['Malpractice'],\n        },\n        {\n          id: 'Malpractice',\n          depth: 3,\n        },\n        {\n          id: 'Massage Artist',\n          depth: 2,\n          children: ['Masseur', 'Masseuse'],\n        },\n        {\n          id: 'Masseur',\n          depth: 3,\n        },\n        {\n          id: 'Masseuse',\n          depth: 3,\n        },\n        {\n          id: 'Measurement',\n          depth: 1,\n          children: ['Malleability'],\n        },\n        {\n          id: 'Malleability',\n          depth: 2,\n        },\n        {\n          id: 'Milieu',\n          depth: 1,\n          children: ['Marine'],\n        },\n        {\n          id: 'Marine',\n          depth: 2,\n        },\n      ],\n      edges: [\n        {\n          source: 'Quality',\n          target: 'Machine',\n        },\n        {\n          source: 'Quality',\n          target: 'Method',\n        },\n        {\n          source: 'Quality',\n          target: 'Material',\n        },\n        {\n          source: 'Quality',\n          target: 'Man Power',\n        },\n        {\n          source: 'Quality',\n          target: 'Measurement',\n        },\n        {\n          source: 'Quality',\n          target: 'Milieu',\n        },\n        {\n          source: 'Machine',\n          target: 'Mill',\n        },\n        {\n          source: 'Machine',\n          target: 'Mixer',\n        },\n        {\n          source: 'Machine',\n          target: 'Metal Lathe',\n        },\n        {\n          source: 'Metal Lathe',\n          target: 'Milling',\n        },\n        {\n          source: 'Material',\n          target: 'Masonite',\n        },\n        {\n          source: 'Material',\n          target: 'Marscapone',\n        },\n        {\n          source: 'Material',\n          target: 'Meat',\n        },\n        {\n          source: 'Masonite',\n          target: 'spearMint',\n        },\n        {\n          source: 'Masonite',\n          target: 'pepperMint',\n        },\n        {\n          source: 'Masonite',\n          target: 'test1',\n        },\n        {\n          source: 'pepperMint',\n          target: 'test3',\n        },\n        {\n          source: 'test1',\n          target: 'test4',\n        },\n        {\n          source: 'Marscapone',\n          target: 'Malty',\n        },\n        {\n          source: 'Marscapone',\n          target: 'Minty',\n        },\n        {\n          source: 'Meat',\n          target: 'Mutton',\n        },\n        {\n          source: 'Man Power',\n          target: 'Manager',\n        },\n        {\n          source: 'Man Power',\n          target: \"Master's Student\",\n        },\n        {\n          source: 'Man Power',\n          target: 'Magician',\n        },\n        {\n          source: 'Man Power',\n          target: 'Miner',\n        },\n        {\n          source: 'Man Power',\n          target: 'Magister',\n        },\n        {\n          source: 'Man Power',\n          target: 'Massage Artist',\n        },\n        {\n          source: 'Magister',\n          target: 'Malpractice',\n        },\n        {\n          source: 'Massage Artist',\n          target: 'Masseur',\n        },\n        {\n          source: 'Massage Artist',\n          target: 'Masseuse',\n        },\n        {\n          source: 'Measurement',\n          target: 'Malleability',\n        },\n        {\n          source: 'Milieu',\n          target: 'Marine',\n        },\n      ],\n    },\n    node: {\n      type: 'rect',\n      style: {\n        size: [32, 32],\n        // fill: () => randomColor(),\n        label: false,\n        labelFill: '#262626',\n        labelFontFamily: 'Gill Sans',\n        labelMaxLines: 2,\n        labelMaxWidth: '100%',\n        labelPlacement: 'center',\n        labelText: (d) => d.id,\n        labelWordWrap: true,\n      },\n    },\n    edge: {\n      type: 'polyline',\n      style: {\n        lineWidth: 3,\n      },\n    },\n    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],\n    autoFit: 'view',\n    layout: {\n      type: 'fishbone',\n      direction: 'RL',\n      hGap: 50,\n      vGap: 50,\n      getRibSep: () => 60,\n    },\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      type: 'fishbone',\n      direction: 'RL',\n      hGap: 50,\n      vGap: 50,\n      getRibSep: 60,\n    };\n\n    const optionFolder = gui.addFolder('Fishbone Layout Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'direction', ['RL', 'LR']);\n    optionFolder.add(options, 'hGap', 20, 100, 10);\n    optionFolder.add(options, 'vGap', 20, 100, 10);\n    optionFolder.add(options, 'getRibSep', 30, 100, 10);\n\n    optionFolder.onChange(async ({ property, value }) => {\n      graph.setLayout(\n        Object.assign({}, graph.getLayout(), {\n          [property]: property === 'getRibSep' ? () => value : value,\n        }),\n      );\n      await graph.layout();\n      // 调整 direction 后部分node可能会溢出屏幕，重新执行下fitView\n      if (property === 'direction') {\n        graph.fitView();\n      }\n    });\n  },\n);\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'fishbone',\n    direction: 'LR',\n    hGap: 50,\n    vGap: 50,\n    getRibSep: () => 60,\n  },\n});\n",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Property",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Layout type",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "fishbone",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "direction",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Layout direction, ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "RL",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " (right to left, head on right), ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "LR",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " (left to right, head on left)",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "RL",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "LR",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "RL",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "hGap",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Horizontal gap",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "vGap",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Vertical gap",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "getRibSep",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Function to get rib gap",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "(node: NodeData) => number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "() => 60",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "width",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Layout width",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "height",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Layout height",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "nodeSize",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Node size",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number | [number, number] | [number, number, number] | ((node: NodeData) => number | [number, number] | [number, number, number])",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "isLayoutInvisibleNodes",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Whether invisible nodes participate in layout (effective when preLayout is true)",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "nodeFilter",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Nodes to participate in this layout",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "(node: NodeData) => boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "preLayout",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Use pre-layout, calculate layout before initializing elements (not suitable for pipeline layout)",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "The simplest configuration:",
        "paraId": 5,
        "tocIndex": 6
    },
    {
        "value": "import { Graph, treeToGraphData } from '@antv/g6';\n\nconst graph = new Graph({\n  layout: {\n    type: 'fishbone',\n  },\n  autoFit: 'view',\n  data: treeToGraphData({\n    nodes: [\n      { id: 'root', data: { label: 'Root' } },\n      { id: 'child1', data: { label: 'Child 1' } },\n      { id: 'child2', data: { label: 'Child 2' } },\n      { id: 'child3', data: { label: 'Child 3' } },\n    ],\n    edges: [\n      { id: 'e1', source: 'root', target: 'child1' },\n      { id: 'e2', source: 'root', target: 'child2' },\n      { id: 'e3', source: 'root', target: 'child3' },\n    ],\n  }),\n  edge: {\n    type: 'polyline',\n    style: {\n      lineWidth: 3,\n    },\n  },\n  behaviors: ['drag-canvas'],\n});\n",
        "paraId": 6,
        "tocIndex": 6
    },
    {
        "value": "Result:",
        "paraId": 7,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 400,\n  layout: {\n    type: 'fishbone',\n  },\n  autoFit: 'view',\n  data: {\n    nodes: [\n      {\n        id: 'Quality',\n        depth: 0,\n        children: ['Machine', 'Method', 'Material', 'Man Power', 'Measurement', 'Milieu'],\n      },\n      {\n        id: 'Machine',\n        depth: 1,\n        children: ['Mill', 'Mixer', 'Metal Lathe'],\n      },\n      {\n        id: 'Mill',\n        depth: 2,\n      },\n      {\n        id: 'Mixer',\n        depth: 2,\n      },\n      {\n        id: 'Metal Lathe',\n        depth: 2,\n        children: ['Milling'],\n      },\n      {\n        id: 'Milling',\n        depth: 3,\n      },\n      {\n        id: 'Method',\n        depth: 1,\n      },\n      {\n        id: 'Material',\n        depth: 1,\n        children: ['Masonite', 'Marscapone', 'Meat'],\n      },\n      {\n        id: 'Masonite',\n        depth: 2,\n        children: ['spearMint', 'pepperMint', 'test1'],\n      },\n      {\n        id: 'spearMint',\n        depth: 3,\n      },\n      {\n        id: 'pepperMint',\n        depth: 3,\n        children: ['test3'],\n      },\n      {\n        id: 'test3',\n        depth: 4,\n      },\n      {\n        id: 'test1',\n        depth: 3,\n        children: ['test4'],\n      },\n      {\n        id: 'test4',\n        depth: 4,\n      },\n      {\n        id: 'Marscapone',\n        depth: 2,\n        children: ['Malty', 'Minty'],\n      },\n      {\n        id: 'Malty',\n        depth: 3,\n      },\n      {\n        id: 'Minty',\n        depth: 3,\n      },\n      {\n        id: 'Meat',\n        depth: 2,\n        children: ['Mutton'],\n      },\n      {\n        id: 'Mutton',\n        depth: 3,\n      },\n      {\n        id: 'Man Power',\n        depth: 1,\n        children: ['Manager', \"Master's Student\", 'Magician', 'Miner', 'Magister', 'Massage Artist'],\n      },\n      {\n        id: 'Manager',\n        depth: 2,\n      },\n      {\n        id: \"Master's Student\",\n        depth: 2,\n      },\n      {\n        id: 'Magician',\n        depth: 2,\n      },\n      {\n        id: 'Miner',\n        depth: 2,\n      },\n      {\n        id: 'Magister',\n        depth: 2,\n        children: ['Malpractice'],\n      },\n      {\n        id: 'Malpractice',\n        depth: 3,\n      },\n      {\n        id: 'Massage Artist',\n        depth: 2,\n        children: ['Masseur', 'Masseuse'],\n      },\n      {\n        id: 'Masseur',\n        depth: 3,\n      },\n      {\n        id: 'Masseuse',\n        depth: 3,\n      },\n      {\n        id: 'Measurement',\n        depth: 1,\n        children: ['Malleability'],\n      },\n      {\n        id: 'Malleability',\n        depth: 2,\n      },\n      {\n        id: 'Milieu',\n        depth: 1,\n        children: ['Marine'],\n      },\n      {\n        id: 'Marine',\n        depth: 2,\n      },\n    ],\n    edges: [\n      {\n        source: 'Quality',\n        target: 'Machine',\n      },\n      {\n        source: 'Quality',\n        target: 'Method',\n      },\n      {\n        source: 'Quality',\n        target: 'Material',\n      },\n      {\n        source: 'Quality',\n        target: 'Man Power',\n      },\n      {\n        source: 'Quality',\n        target: 'Measurement',\n      },\n      {\n        source: 'Quality',\n        target: 'Milieu',\n      },\n      {\n        source: 'Machine',\n        target: 'Mill',\n      },\n      {\n        source: 'Machine',\n        target: 'Mixer',\n      },\n      {\n        source: 'Machine',\n        target: 'Metal Lathe',\n      },\n      {\n        source: 'Metal Lathe',\n        target: 'Milling',\n      },\n      {\n        source: 'Material',\n        target: 'Masonite',\n      },\n      {\n        source: 'Material',\n        target: 'Marscapone',\n      },\n      {\n        source: 'Material',\n        target: 'Meat',\n      },\n      {\n        source: 'Masonite',\n        target: 'spearMint',\n      },\n      {\n        source: 'Masonite',\n        target: 'pepperMint',\n      },\n      {\n        source: 'Masonite',\n        target: 'test1',\n      },\n      {\n        source: 'pepperMint',\n        target: 'test3',\n      },\n      {\n        source: 'test1',\n        target: 'test4',\n      },\n      {\n        source: 'Marscapone',\n        target: 'Malty',\n      },\n      {\n        source: 'Marscapone',\n        target: 'Minty',\n      },\n      {\n        source: 'Meat',\n        target: 'Mutton',\n      },\n      {\n        source: 'Man Power',\n        target: 'Manager',\n      },\n      {\n        source: 'Man Power',\n        target: \"Master's Student\",\n      },\n      {\n        source: 'Man Power',\n        target: 'Magician',\n      },\n      {\n        source: 'Man Power',\n        target: 'Miner',\n      },\n      {\n        source: 'Man Power',\n        target: 'Magister',\n      },\n      {\n        source: 'Man Power',\n        target: 'Massage Artist',\n      },\n      {\n        source: 'Magister',\n        target: 'Malpractice',\n      },\n      {\n        source: 'Massage Artist',\n        target: 'Masseur',\n      },\n      {\n        source: 'Massage Artist',\n        target: 'Masseuse',\n      },\n      {\n        source: 'Measurement',\n        target: 'Malleability',\n      },\n      {\n        source: 'Milieu',\n        target: 'Marine',\n      },\n    ],\n  },\n  edge: {\n    type: 'polyline',\n    style: {\n      lineWidth: 3,\n    },\n  },\n  behaviors: ['drag-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "import { Graph, treeToGraphData } from '@antv/g6';\n\nconst data = {\n  id: 'Quality',\n  children: [\n    {\n      id: 'Machine',\n      children: [{ id: 'Mill' }, { id: 'Mixer' }, { id: 'Metal Lathe', children: [{ id: 'Milling' }] }],\n    },\n    { id: 'Method' },\n    {\n      id: 'Material',\n      children: [\n        {\n          id: 'Masonite',\n          children: [\n            { id: 'spearMint' },\n            { id: 'pepperMint', children: [{ id: 'test3' }] },\n            { id: 'test1', children: [{ id: 'test4' }] },\n          ],\n        },\n        {\n          id: 'Marscapone',\n          children: [{ id: 'Malty' }, { id: 'Minty' }],\n        },\n        { id: 'Meat', children: [{ id: 'Mutton' }] },\n      ],\n    },\n    {\n      id: 'Man Power',\n      children: [\n        { id: 'Manager' },\n        { id: \"Master's Student\" },\n        { id: 'Magician' },\n        { id: 'Miner' },\n        { id: 'Magister', children: [{ id: 'Malpractice' }] },\n        {\n          id: 'Massage Artist',\n          children: [{ id: 'Masseur' }, { id: 'Masseuse' }],\n        },\n      ],\n    },\n    {\n      id: 'Measurement',\n      children: [{ id: 'Malleability' }],\n    },\n    {\n      id: 'Milieu',\n      children: [{ id: 'Marine' }],\n    },\n  ],\n};\n\nexport const layoutFishbone = async (context) => {\n  const graph = new Graph({\n    ...context,\n    container: 'container',\n    autoFit: 'view',\n    data: treeToGraphData(data),\n    node: {\n      type: 'rect',\n      style: {\n        size: [32, 32],\n        // fill: () => randomColor(),\n        label: false,\n        labelFill: '#262626',\n        labelFontFamily: 'Gill Sans',\n        labelMaxLines: 2,\n        labelMaxWidth: '100%',\n        labelPlacement: 'center',\n        labelText: (d) => d.id,\n        labelWordWrap: true,\n      },\n    },\n    edge: {\n      type: 'polyline',\n      style: {\n        lineWidth: 3,\n      },\n    },\n    layout: {\n      type: 'fishbone',\n      vGap: 48,\n      hGap: 48,\n      direction: 'RL',\n    },\n    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],\n    animation: false,\n  });\n\n  await graph.render();\n\n  layoutFishbone.form = (panel) => {\n    const config = {\n      type: 'fishbone',\n      direction: 'RL',\n    };\n\n    return [\n      panel\n        .add(config, 'direction', ['LR', 'RL'])\n        .name('Direction')\n        .onChange((value) => {\n          graph.setLayout((prev) => ({ ...prev, direction: value }));\n          graph.render();\n        }),\n    ];\n  };\n\n  return graph;\n};\n\nlayoutFishbone();\n",
        "paraId": 9,
        "tocIndex": 7
    },
    {
        "value": "Fishbone Layout",
        "paraId": 10,
        "tocIndex": 7
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
//# sourceMappingURL=docs_manual_layout_Fishbone_en_md_q_hK4X-async.js.map