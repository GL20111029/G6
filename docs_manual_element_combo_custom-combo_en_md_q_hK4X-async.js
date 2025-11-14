((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/combo/custom-combo.en.md?type=text'],
{ "docs/manual/element/combo/custom-combo.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/combo/custom-combo.en.md?watch=parent");
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
        "value": "G6 provides two types of ",
        "paraId": 0
    },
    {
        "value": "built-in combos",
        "paraId": 1
    },
    {
        "value": ": circular combos and rectangular combos. However, in complex business scenarios, you may need to create custom combos with specific styles, interactive effects, or behavior logic.",
        "paraId": 0
    },
    {
        "value": "In G6, a complete combo typically consists of the following parts:",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "key",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": ": The main graphic of the combo, representing the main shape of the combo, such as a circle, rectangle, etc.",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "label",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": ": Text label, usually used to display the name or description of the combo.",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "halo",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": ": A graphic that displays a halo effect around the main graphic.",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "Combos differ from ordinary nodes and have the following characteristics:",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Containment",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": ": Combos can contain nodes and other combos, forming a hierarchical structure.",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Two States",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": ": Expanded and Collapsed states.",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Adaptive Size",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": ": Automatically adjusts size based on internal elements.",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Drag Behavior",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": ": Supports overall dragging and dragging elements in/out.",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Choose the Right Way",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "There are two ways to create custom combos:",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Recommended",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "This is the most common way, and you can choose to inherit one of the following types:",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "BaseCombo",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " - The most basic combo class, providing core functionality for combos.",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Circle",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " - Circular combo.",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Rect",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " - Rectangular combo.",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Why choose this way?",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "📌 ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Less Code",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": ": Reuse existing combo properties and methods, focusing only on new features.",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "📌 ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Fast Development",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": ": Suitable for most project needs, quickly achieving business goals.",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "📌 ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Easy Maintenance",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": ": Clear code structure and clear inheritance relationships.",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "If you choose to inherit from existing combo types (recommended), you can jump directly to ",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Create Your First Custom Combo in Three Steps",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": " to start practicing. Most users will choose this approach!",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Advanced Usage",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "If existing combo types do not meet your needs, you can create combos from scratch based on the underlying graphics system of G.",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "Why choose this way?",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "📌 ",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "Maximum Freedom",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": ": Full control over every detail of the combo, achieving any complex effect.",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "📌 ",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "Special Needs",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": ": Highly customized scenarios that existing combo types cannot meet.",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "📌 ",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "Performance Optimization",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": ": Performance optimization for specific scenarios.",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "Developing custom combos from scratch requires handling all details yourself, including graphic drawing, event response, state changes, expand/collapse logic, etc., which is quite challenging. You can directly refer to the ",
        "paraId": 19
    },
    {
        "value": "source code",
        "paraId": 19
    },
    {
        "value": " for implementation.",
        "paraId": 19
    },
    {
        "value": "Let's start by inheriting ",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "BaseCombo",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": " to implement a custom hexagon combo:",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "import { Graph, register, BaseCombo, ExtensionCategory } from '@antv/g6';\n\n// Define the path for the collapsed state button\nconst collapse = (x, y, r) => {\n  return [\n    ['M', x - r, y],\n    ['a', r, r, 0, 1, 0, r * 2, 0],\n    ['a', r, r, 0, 1, 0, -r * 2, 0],\n    ['M', x - r + 4, y],\n    ['L', x + r - 4, y],\n  ];\n};\n\n// Define the path for the expanded state button\nconst expand = (x, y, r) => {\n  return [\n    ['M', x - r, y],\n    ['a', r, r, 0, 1, 0, r * 2, 0],\n    ['a', r, r, 0, 1, 0, -r * 2, 0],\n    ['M', x - r + 4, y],\n    ['L', x - r + 2 * r - 4, y],\n    ['M', x - r + r, y - r + 4],\n    ['L', x, y + r - 4],\n  ];\n};\n\nclass HexagonCombo extends BaseCombo {\n  // Get the path of the hexagon\n  getKeyPath(attributes) {\n    const [width, height] = this.getKeySize(attributes);\n    const padding = 10;\n    const size = Math.min(width, height) + padding;\n\n    // Calculate the vertices of the hexagon\n    const points = [];\n    for (let i = 0; i < 6; i++) {\n      const angle = (Math.PI / 3) * i;\n      const x = (size / 2) * Math.cos(angle);\n      const y = (size / 2) * Math.sin(angle);\n      points.push([x, y]);\n    }\n\n    // Construct the SVG path\n    const path = [['M', points[0][0], points[0][1]]];\n    for (let i = 1; i < 6; i++) {\n      path.push(['L', points[i][0], points[i][1]]);\n    }\n    path.push(['Z']);\n\n    return path;\n  }\n\n  // Get the style of the main graphic\n  getKeyStyle(attributes) {\n    const style = super.getKeyStyle(attributes);\n\n    return {\n      ...style,\n      d: this.getKeyPath(attributes),\n      fill: attributes.collapsed ? '#FF9900' : '#F04864',\n      fillOpacity: attributes.collapsed ? 0.5 : 0.2,\n      stroke: '#54BECC',\n      lineWidth: 2,\n    };\n  }\n\n  // Draw the main graphic\n  drawKeyShape(attributes, container) {\n    return this.upsert('key', 'path', this.getKeyStyle(attributes), container);\n  }\n\n  // Draw the expand/collapse button, using paths for finer control\n  drawCollapseButton(attributes) {\n    const { collapsed } = attributes;\n    const [width] = this.getKeySize(attributes);\n    const btnR = 8;\n    const x = width / 2 + btnR;\n    const d = collapsed ? expand(x, 0, btnR) : collapse(x, 0, btnR);\n\n    // Create the clickable area and button graphic\n    const hitArea = this.upsert('hit-area', 'circle', { cx: x, r: 8, fill: '#fff', cursor: 'pointer' }, this);\n    this.upsert('button', 'path', { stroke: '#54BECC', d, cursor: 'pointer', lineWidth: 1.4 }, hitArea);\n  }\n\n  // Override the render method to add more custom graphics\n  render(attributes, container) {\n    super.render(attributes, container);\n    this.drawCollapseButton(attributes, container);\n  }\n\n  // Use lifecycle hooks to add event listeners\n  onCreate() {\n    this.shapeMap['hit-area'].addEventListener('click', () => {\n      const id = this.id;\n      const collapsed = !this.attributes.collapsed;\n      const { graph } = this.context;\n      if (collapsed) graph.collapseElement(id);\n      else graph.expandElement(id);\n    });\n  }\n}\n\n// Register the custom combo\nregister(ExtensionCategory.COMBO, 'hexagon-combo', HexagonCombo);\n\n// Create a graph instance and use the custom combo\nconst graph = new Graph({\n  container: 'container',\n  height: 250,\n  data: {\n    nodes: [\n      { id: 'node1', combo: 'combo1', style: { x: 100, y: 100 } },\n      { id: 'node2', combo: 'combo1', style: { x: 150, y: 150 } },\n      { id: 'node3', combo: 'combo2', style: { x: 300, y: 100 } },\n      { id: 'node4', combo: 'combo2', style: { x: 350, y: 150 } },\n    ],\n    combos: [\n      { id: 'combo1', data: { label: 'Hexagon 1' } },\n      { id: 'combo2', data: { label: 'Hexagon 2' }, style: { collapsed: true } },\n    ],\n  },\n  node: {\n    style: {\n      fill: '#91d5ff',\n      stroke: '#1890ff',\n      lineWidth: 1,\n    },\n  },\n  combo: {\n    type: 'hexagon-combo',\n    style: {\n      padding: 20,\n      showCollapseButton: true,\n      labelText: (d) => d.data?.label,\n      labelPlacement: 'top',\n    },\n  },\n  behaviors: ['drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "import { BaseCombo } from '@antv/g6';\nimport type { BaseComboStyleProps } from '@antv/g6';\n\n// Define button path generation functions\nconst collapse = (x, y, r) => {\n  return [\n    ['M', x - r, y],\n    ['a', r, r, 0, 1, 0, r * 2, 0],\n    ['a', r, r, 0, 1, 0, -r * 2, 0],\n    ['M', x - r + 4, y],\n    ['L', x + r - 4, y],\n  ];\n};\n\nconst expand = (x, y, r) => {\n  return [\n    ['M', x - r, y],\n    ['a', r, r, 0, 1, 0, r * 2, 0],\n    ['a', r, r, 0, 1, 0, -r * 2, 0],\n    ['M', x - r + 4, y],\n    ['L', x - r + 2 * r - 4, y],\n    ['M', x - r + r, y - r + 4],\n    ['L', x, y + r - 4],\n  ];\n};\n\nclass HexagonCombo extends BaseCombo {\n  // Get the path of the hexagon\n  protected getKeyPath(attributes: Required<BaseComboStyleProps>) {\n    const [width, height] = this.getKeySize(attributes);\n    const padding = 10;\n    const size = Math.min(width, height) + padding;\n\n    // Calculate the vertices of the hexagon\n    const points = [];\n    for (let i = 0; i < 6; i++) {\n      const angle = (Math.PI / 3) * i;\n      const x = (size / 2) * Math.cos(angle);\n      const y = (size / 2) * Math.sin(angle);\n      points.push([x, y]);\n    }\n\n    // Construct the SVG path\n    const path = [['M', points[0][0], points[0][1]]];\n    for (let i = 1; i < 6; i++) {\n      path.push(['L', points[i][0], points[i][1]]);\n    }\n    path.push(['Z']);\n\n    return path;\n  }\n\n  // Get the style of the main graphic, directly using path data\n  protected getKeyStyle(attributes: Required<BaseComboStyleProps>) {\n    const style = super.getKeyStyle(attributes);\n\n    return {\n      ...style,\n      d: this.getKeyPath(attributes),\n      fill: attributes.collapsed ? '#FF9900' : '#F04864',\n      fillOpacity: attributes.collapsed ? 0.5 : 0.2,\n      stroke: '#54BECC',\n      lineWidth: 2,\n    };\n  }\n\n  // Draw the main graphic, using path type to directly pass in style objects\n  protected drawKeyShape(attributes: Required<BaseComboStyleProps>, container: Group) {\n    return this.upsert('key', 'path', this.getKeyStyle(attributes), container);\n  }\n\n  // Draw the collapse/expand button, using SVG paths for finer control\n  protected drawCollapseButton(attributes: Required<BaseComboStyleProps>) {\n    const { collapsed } = attributes;\n    const [width] = this.getKeySize(attributes);\n    const btnR = 8;\n    const x = width / 2 + btnR;\n    const d = collapsed ? expand(x, 0, btnR) : collapse(x, 0, btnR);\n\n    // Create the clickable area and button graphic\n    const hitArea = this.upsert('hit-area', 'circle', { cx: x, r: 8, fill: '#fff', cursor: 'pointer' }, this);\n    this.upsert('button', 'path', { stroke: '#54BECC', d, cursor: 'pointer', lineWidth: 1.4 }, hitArea);\n  }\n\n  // Use lifecycle hook methods to bind events\n  onCreate() {\n    this.shapeMap['hit-area'].addEventListener('click', () => {\n      const id = this.id;\n      const collapsed = !this.attributes.collapsed;\n      const { graph } = this.context;\n      if (collapsed) graph.collapseElement(id);\n      else graph.expandElement(id);\n    });\n  }\n}\n",
        "paraId": 22,
        "tocIndex": 6
    },
    {
        "value": "import { ExtensionCategory } from '@antv/g6';\n\nregister(ExtensionCategory.COMBO, 'hexagon-combo', HexagonCombo);\n",
        "paraId": 23,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // ...other configurations\n  combo: {\n    type: 'hexagon-combo', // Use the name registered\n    style: {\n      padding: 20,\n      showCollapseButton: true,\n      labelText: (d) => d.data?.label,\n      labelPlacement: 'top',\n    },\n  },\n  // Since we implemented the collapse/expand feature ourselves, only drag behavior is needed here\n  behaviors: ['drag-element'],\n});\n",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "🎉 Congratulations! You have created your first custom combo.",
        "paraId": 25,
        "tocIndex": 8
    },
    {
        "value": "Although Combos inherit from ",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "BaseNode",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": ", there are some key differences:",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "Adaptive Size",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": ": Combos automatically calculate the appropriate size based on internal elements.",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "Expand/Collapse States",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": ": Combos have two display states and need to handle state transitions.",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "Hierarchical Structure",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": ": Combos can be nested, forming hierarchical relationships.",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "Internal Element Management",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": ": Combos need to manage the nodes and sub-combos they contain.",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "G6's Combos are drawn using atomic graphic units provided by the ",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "G Graphics System",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": ". For an introduction to atomic graphics, please refer to the ",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "Element - Shape (Optional)",
        "paraId": 29,
        "tocIndex": 11
    },
    {
        "value": " documentation.",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "All these graphics can be dynamically created or updated using ",
        "paraId": 30,
        "tocIndex": 11
    },
    {
        "value": "upsert()",
        "paraId": 30,
        "tocIndex": 11
    },
    {
        "value": " and automatically manage graphic states and lifecycles.",
        "paraId": 30,
        "tocIndex": 11
    },
    {
        "value": "Before customizing Combos, you need to understand some important properties and methods in the G6 element base class:",
        "paraId": 31,
        "tocIndex": 12
    },
    {
        "value": "Property",
        "paraId": 32,
        "tocIndex": 13
    },
    {
        "value": "Type",
        "paraId": 32,
        "tocIndex": 13
    },
    {
        "value": "Description",
        "paraId": 32,
        "tocIndex": 13
    },
    {
        "value": "shapeMap",
        "paraId": 32,
        "tocIndex": 13
    },
    {
        "value": "Record<string, DisplayObject>",
        "paraId": 32,
        "tocIndex": 13
    },
    {
        "value": "Mapping table of all graphics under the current element",
        "paraId": 32,
        "tocIndex": 13
    },
    {
        "value": "animateMap",
        "paraId": 32,
        "tocIndex": 13
    },
    {
        "value": "Record<string, IAnimation>",
        "paraId": 32,
        "tocIndex": 13
    },
    {
        "value": "Mapping table of all animations under the current element",
        "paraId": 32,
        "tocIndex": 13
    },
    {
        "value": "upsert(name, Ctor, style, container, hooks)",
        "paraId": 33
    },
    {
        "value": "When creating custom Combos, you will frequently use the ",
        "paraId": 34,
        "tocIndex": 15
    },
    {
        "value": "upsert",
        "paraId": 34,
        "tocIndex": 15
    },
    {
        "value": " method. It is short for \"update or insert\" and is responsible for adding or updating graphics in the element:",
        "paraId": 34,
        "tocIndex": 15
    },
    {
        "value": "upsert(key: string, Ctor: { new (...args: any[]): DisplayObject }, style: Record<string, any>, container: DisplayObject);\n",
        "paraId": 35,
        "tocIndex": 15
    },
    {
        "value": "Parameter",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "Type",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "Description",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "key",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "string",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "Key of the graphic, corresponding to the key in ",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "shapeMap",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": ". Built-in keys include ",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "'key'",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": ", ",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "'label'",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": ", ",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "'halo'",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": ", ",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "'icon'",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": ", ",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "'port'",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": ", ",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "'badge'",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": " Keys should not use special symbols, and will be converted to camel case to call ",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "getXxxStyle",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": " and ",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "drawXxxShape",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": " methods (see ",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "Element Conventions",
        "paraId": 37,
        "tocIndex": 15
    },
    {
        "value": ")",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "Ctor",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "{ new (...args: any[]): DisplayObject }",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "Graphic class",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "style",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "Record<string, any>",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "Graphic style",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "container",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "DisplayObject",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "Container to mount the graphic",
        "paraId": 36,
        "tocIndex": 15
    },
    {
        "value": "For example, insert a fixed-position purple circle:",
        "paraId": 38,
        "tocIndex": 15
    },
    {
        "value": "this.upsert(\n  'element-key', // Unique identifier of the element\n  'circle', // Graphic type, such as 'rect', 'circle', etc.\n  { x: 100, y: 100, fill: '#a975f3' }, // Style configuration object\n  container, // Parent container\n);\n",
        "paraId": 39,
        "tocIndex": 15
    },
    {
        "value": "Why use ",
        "paraId": 40,
        "tocIndex": 15
    },
    {
        "value": "upsert",
        "paraId": 40,
        "tocIndex": 15
    },
    {
        "value": " instead of directly creating graphics with ",
        "paraId": 40,
        "tocIndex": 15
    },
    {
        "value": "container.appendChild()",
        "paraId": 40,
        "tocIndex": 15
    },
    {
        "value": "? Because:",
        "paraId": 40,
        "tocIndex": 15
    },
    {
        "value": "Better Performance",
        "paraId": 41,
        "tocIndex": 15
    },
    {
        "value": ": When state changes or data updates, it intelligently reuses existing graphics instead of deleting and recreating them, greatly improving rendering performance.",
        "paraId": 41,
        "tocIndex": 15
    },
    {
        "value": "Simpler Code",
        "paraId": 41,
        "tocIndex": 15
    },
    {
        "value": ": No need to manually check if elements exist.",
        "paraId": 41,
        "tocIndex": 15
    },
    {
        "value": "Easy Management",
        "paraId": 41,
        "tocIndex": 15
    },
    {
        "value": ": All graphics created through ",
        "paraId": 41,
        "tocIndex": 15
    },
    {
        "value": "upsert",
        "paraId": 41,
        "tocIndex": 15
    },
    {
        "value": " are recorded in the node's ",
        "paraId": 41,
        "tocIndex": 15
    },
    {
        "value": "shapeMap",
        "paraId": 41,
        "tocIndex": 15
    },
    {
        "value": ", and you can easily access them with ",
        "paraId": 41,
        "tocIndex": 15
    },
    {
        "value": "this.getShape(key)",
        "paraId": 41,
        "tocIndex": 15
    },
    {
        "value": ".",
        "paraId": 41,
        "tocIndex": 15
    },
    {
        "value": "render(attributes, container)",
        "paraId": 33
    },
    {
        "value": "Every custom combo class must implement the ",
        "paraId": 42,
        "tocIndex": 16
    },
    {
        "value": "render(attributes, container)",
        "paraId": 42,
        "tocIndex": 16
    },
    {
        "value": " method, which defines how the combo is \"drawn\". You can use various atomic graphics here to create the structure you want.",
        "paraId": 42,
        "tocIndex": 16
    },
    {
        "value": "render(style: Record<string, any>, container: Group): void;\n",
        "paraId": 43,
        "tocIndex": 16
    },
    {
        "value": "Parameter",
        "paraId": 44,
        "tocIndex": 16
    },
    {
        "value": "Type",
        "paraId": 44,
        "tocIndex": 16
    },
    {
        "value": "Description",
        "paraId": 44,
        "tocIndex": 16
    },
    {
        "value": "style",
        "paraId": 44,
        "tocIndex": 16
    },
    {
        "value": "Record<string, any>",
        "paraId": 44,
        "tocIndex": 16
    },
    {
        "value": "Element style",
        "paraId": 44,
        "tocIndex": 16
    },
    {
        "value": "container",
        "paraId": 44,
        "tocIndex": 16
    },
    {
        "value": "Group",
        "paraId": 44,
        "tocIndex": 16
    },
    {
        "value": "Container",
        "paraId": 44,
        "tocIndex": 16
    },
    {
        "value": "getShape(name)",
        "paraId": 33
    },
    {
        "value": "Sometimes, you need to modify the properties of a sub-graphic after creation or have interactions between sub-graphics. In this case, the ",
        "paraId": 45,
        "tocIndex": 17
    },
    {
        "value": "getShape",
        "paraId": 45,
        "tocIndex": 17
    },
    {
        "value": " method can help you access any graphics previously created with ",
        "paraId": 45,
        "tocIndex": 17
    },
    {
        "value": "upsert",
        "paraId": 45,
        "tocIndex": 17
    },
    {
        "value": ":",
        "paraId": 45,
        "tocIndex": 17
    },
    {
        "value": "⚠️ Note",
        "paraId": 46,
        "tocIndex": 17
    },
    {
        "value": ": The order of graphics is important. If graphic B depends on the position of graphic A, make sure A is created first.",
        "paraId": 46,
        "tocIndex": 17
    },
    {
        "value": "Use Convention Properties",
        "paraId": 47,
        "tocIndex": 18
    },
    {
        "value": "The convention properties in combos include:",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "Use ",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "this.getKeySize(attributes)",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": " to get the size of the combo, considering the collapsed state and sub-elements.",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Use ",
        "paraId": 50,
        "tocIndex": 18
    },
    {
        "value": "this.getContentBBox(attributes)",
        "paraId": 50,
        "tocIndex": 18
    },
    {
        "value": " to get the bounding box of the content area.",
        "paraId": 50,
        "tocIndex": 18
    },
    {
        "value": "Use ",
        "paraId": 51,
        "tocIndex": 18
    },
    {
        "value": "this.getComboPosition(attributes)",
        "paraId": 51,
        "tocIndex": 18
    },
    {
        "value": " to get the current position of the combo, based on state and sub-elements.",
        "paraId": 51,
        "tocIndex": 18
    },
    {
        "value": "Use ",
        "paraId": 52,
        "tocIndex": 18
    },
    {
        "value": "getXxxStyle",
        "paraId": 52,
        "tocIndex": 18
    },
    {
        "value": " and ",
        "paraId": 52,
        "tocIndex": 18
    },
    {
        "value": "drawXxxShape",
        "paraId": 52,
        "tocIndex": 18
    },
    {
        "value": " Pairing for Graphic Drawing",
        "paraId": 52,
        "tocIndex": 18
    },
    {
        "value": "getXxxStyle",
        "paraId": 53,
        "tocIndex": 18
    },
    {
        "value": " is used to get the graphic style, and ",
        "paraId": 53,
        "tocIndex": 18
    },
    {
        "value": "drawXxxShape",
        "paraId": 53,
        "tocIndex": 18
    },
    {
        "value": " is used to draw the graphic. Graphics created this way support automatic animation execution.",
        "paraId": 53,
        "tocIndex": 18
    },
    {
        "value": "Xxx",
        "paraId": 54,
        "tocIndex": 18
    },
    {
        "value": " is the camel case form of the key passed to the ",
        "paraId": 54,
        "tocIndex": 18
    },
    {
        "value": "upsert",
        "paraId": 55,
        "tocIndex": 18
    },
    {
        "value": " method.",
        "paraId": 54,
        "tocIndex": 18
    },
    {
        "value": "Access Graph Context via ",
        "paraId": 56,
        "tocIndex": 18
    },
    {
        "value": "this.context",
        "paraId": 56,
        "tocIndex": 18
    },
    {
        "value": "The following lifecycle hook functions are provided, and you can override these methods in custom combos to execute specific logic at key moments:",
        "paraId": 57,
        "tocIndex": 19
    },
    {
        "value": "Hook Function",
        "paraId": 58,
        "tocIndex": 19
    },
    {
        "value": "Trigger Timing",
        "paraId": 58,
        "tocIndex": 19
    },
    {
        "value": "Typical Use Cases",
        "paraId": 58,
        "tocIndex": 19
    },
    {
        "value": "onCreate",
        "paraId": 58,
        "tocIndex": 19
    },
    {
        "value": "After the combo is created and the entrance animation is completed",
        "paraId": 58,
        "tocIndex": 19
    },
    {
        "value": "Bind interactive events, initialize combo state, add external listeners",
        "paraId": 58,
        "tocIndex": 19
    },
    {
        "value": "onUpdate",
        "paraId": 58,
        "tocIndex": 19
    },
    {
        "value": "After the combo is updated and the update animation is completed",
        "paraId": 58,
        "tocIndex": 19
    },
    {
        "value": "Update dependent data, adjust related elements, trigger linkage effects",
        "paraId": 58,
        "tocIndex": 19
    },
    {
        "value": "onDestroy",
        "paraId": 58,
        "tocIndex": 19
    },
    {
        "value": "After the combo is destroyed and the exit animation is completed",
        "paraId": 58,
        "tocIndex": 19
    },
    {
        "value": "Clean up resources, remove external listeners, execute destruction notifications",
        "paraId": 58,
        "tocIndex": 19
    },
    {
        "value": "One of the most powerful aspects of G6 element design is the ability to separate ",
        "paraId": 59,
        "tocIndex": 20
    },
    {
        "value": "\"state response\"",
        "paraId": 59,
        "tocIndex": 20
    },
    {
        "value": " from ",
        "paraId": 59,
        "tocIndex": 20
    },
    {
        "value": "\"drawing logic\"",
        "paraId": 59,
        "tocIndex": 20
    },
    {
        "value": ".",
        "paraId": 59,
        "tocIndex": 20
    },
    {
        "value": "You can define styles for each state in the combo configuration:",
        "paraId": 60,
        "tocIndex": 20
    },
    {
        "value": "combo: {\n  type: 'custom-combo',\n  style: {\n    fill: '#f0f2f5',\n    stroke: '#d9d9d9'\n  },\n  state: {\n    selected: {\n      stroke: '#1890ff',\n      lineWidth: 2,\n      shadowColor: 'rgba(24,144,255,0.2)',\n      shadowBlur: 15,\n    },\n    hover: {\n      fill: '#e6f7ff',\n    },\n  },\n}\n",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "Method to switch states:",
        "paraId": 62,
        "tocIndex": 20
    },
    {
        "value": "graph.setElementState(comboId, ['selected']);\n",
        "paraId": 63,
        "tocIndex": 20
    },
    {
        "value": "This state will be passed into the ",
        "paraId": 64,
        "tocIndex": 20
    },
    {
        "value": "render()",
        "paraId": 64,
        "tocIndex": 20
    },
    {
        "value": " method's ",
        "paraId": 64,
        "tocIndex": 20
    },
    {
        "value": "attributes",
        "paraId": 64,
        "tocIndex": 20
    },
    {
        "value": " and automatically applied to the graphics as a result of the internal system merging.",
        "paraId": 64,
        "tocIndex": 20
    },
    {
        "value": "You can also customize rendering logic based on the state:",
        "paraId": 65,
        "tocIndex": 20
    },
    {
        "value": "protected getKeyStyle(attributes: Required<BaseComboStyleProps>) {\n  const style = super.getKeyStyle(attributes);\n\n  // Adjust style based on state\n  if (attributes.states?.includes('selected')) {\n    return {\n      ...style,\n      stroke: '#1890ff',\n      lineWidth: 2,\n      shadowColor: 'rgba(24,144,255,0.2)',\n      shadowBlur: 15,\n    };\n  }\n\n  return style;\n}\n",
        "paraId": 66,
        "tocIndex": 20
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
//# sourceMappingURL=docs_manual_element_combo_custom-combo_en_md_q_hK4X-async.js.map