((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/shape/properties.en.md?type=text'],
{ "docs/manual/element/shape/properties.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/shape/properties.en.md?watch=parent");
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
        "value": "Elements (nodes/edges) in G6 are composed of ",
        "paraId": 0
    },
    {
        "value": "one or more ",
        "paraId": 0
    },
    {
        "value": "shapes",
        "paraId": 1
    },
    {
        "value": ", mainly added via ",
        "paraId": 0
    },
    {
        "value": "upsert",
        "paraId": 0
    },
    {
        "value": " in the ",
        "paraId": 0
    },
    {
        "value": "render",
        "paraId": 0
    },
    {
        "value": " method when customizing nodes or edges. G6 supports the following shapes:",
        "paraId": 0
    },
    {
        "value": "Circle",
        "paraId": 2
    },
    {
        "value": "Ellipse",
        "paraId": 3
    },
    {
        "value": "Rect",
        "paraId": 4
    },
    {
        "value": "HTML Element",
        "paraId": 5
    },
    {
        "value": "Image",
        "paraId": 6
    },
    {
        "value": "Line",
        "paraId": 7
    },
    {
        "value": "Path",
        "paraId": 8
    },
    {
        "value": "Polygon",
        "paraId": 9
    },
    {
        "value": "Polyline",
        "paraId": 10
    },
    {
        "value": "Text",
        "paraId": 11
    },
    {
        "value": "Property",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Description",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Type",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Required",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "x",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "x coordinate",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "✓",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "y",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "y coordinate",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "✓",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "width",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Width",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "✓",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "height",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Height",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "✓",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "fill",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Fill color",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "string | Pattern | null",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "stroke",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Stroke color",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "string | Pattern | null",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "opacity",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Overall opacity",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number | string",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "fillOpacity",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Fill opacity",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number | string",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "strokeOpacity",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Stroke opacity",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number | string",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "lineWidth",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Line width",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number | string",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "lineCap",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Line cap style",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "butt",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "round",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "square",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "lineJoin",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Line join style",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "miter",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "round",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "bevel",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "lineDash",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Dash array",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number | string | (string | number)[]",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "lineDashOffset",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Dash offset",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "shadowBlur",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Shadow blur",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "shadowColor",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Shadow color",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "string",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "shadowOffsetX",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Shadow X offset",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "shadowOffsetY",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Shadow Y offset",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "cursor",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Mouse cursor, supports all ",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "CSS cursor",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "string",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "zIndex",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Render z-index",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "number",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "visibility",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Visibility",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "visible",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "hidden",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Example:",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "const shape = BaseShape.upsert(\n  // Specify the shape key, which must be unique within the same custom element type\n  'shape',\n  'circle',\n  {\n    cx: 100,\n    cy: 100,\n    r: 50,\n    fill: 'blue',\n  },\n  container,\n);\n",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": "Set or get the drawing attributes of the instance.",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "Get the value of an attribute.",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "const width = shape.attr('width');\n",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "Update a single drawing attribute.",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "Batch update drawing attributes.",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "shape.attr({\n  fill: '#999',\n  stroke: '#666',\n});\n",
        "paraId": 20,
        "tocIndex": 6
    },
    {
        "value": "Property",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "Description",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "Type",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "Required",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "cx",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "Center x coordinate",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "number | string",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "✓",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "cy",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "Center y coordinate",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "number | string",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "✓",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "cz",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "Center z coordinate",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "number | string",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "r",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "Radius",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "number | string",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "✓",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "isBillboard",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "Billboard mode (always faces camera)",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "boolean",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "isSizeAttenuation",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "Size attenuation (size changes with view)",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "boolean",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "Example:",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "BaseShape.upsert(\n  'shape',\n  'circle',\n  {\n    cx: 100,\n    cy: 100,\n    r: 50,\n    fill: 'blue',\n  },\n  container,\n);\n",
        "paraId": 23,
        "tocIndex": 8
    },
    {
        "value": "Property",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Description",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Type",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Required",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "x",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Rect x coordinate",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "number | string",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "y",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Rect y coordinate",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "number | string",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "z",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Rect z coordinate",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "number",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "width",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Rect width",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "number | string",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "✓",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "height",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Rect height",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "number | string",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "✓",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "isBillboard",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Billboard mode",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "boolean",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "isSizeAttenuation",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Size attenuation",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "boolean",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "radius",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Border radius",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "number | string | number[]",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Example:",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "BaseShape.upsert(\n  'shape',\n  'rect',\n  {\n    x: 100,\n    y: 100,\n    width: 100,\n    height: 100,\n    radius: 8,\n    fill: 'blue',\n  },\n  container,\n);\n",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "Property",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "Description",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "Type",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "Required",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "cx",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "Center x coordinate",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "number | string",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "✓",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "cy",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "Center y coordinate",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "number | string",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "✓",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "cz",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "Center z coordinate",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "number | string",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "rx",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "X-axis radius",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "number | string",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "✓",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "ry",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "Y-axis radius",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "number | string",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "✓",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "isBillboard",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "Billboard mode",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "boolean",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "isSizeAttenuation",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "Size attenuation",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "boolean",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "Example:",
        "paraId": 28,
        "tocIndex": 12
    },
    {
        "value": "BaseShape.upsert(\n  'shape',\n  'ellipse',\n  {\n    cx: 100,\n    cy: 100,\n    rx: 50,\n    ry: 80,\n    fill: 'blue',\n  },\n  container,\n);\n",
        "paraId": 29,
        "tocIndex": 12
    },
    {
        "value": "Property",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "Description",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "Type",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "Required",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "x",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "HTML x coordinate",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "number | string",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "y",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "HTML y coordinate",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "number | string",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "innerHTML",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "HTML content",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "string | HTMLElement",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "✓",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "width",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "HTML width",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "number | string",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "height",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "HTML height",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "number | string",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "Example:",
        "paraId": 31,
        "tocIndex": 14
    },
    {
        "value": "BaseShape.upsert(\n  'shape',\n  'html',\n  {\n    x: 100,\n    y: 100,\n    innerHTML: <div>content</div>,\n  },\n  container,\n);\n",
        "paraId": 32,
        "tocIndex": 14
    },
    {
        "value": "Property",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Description",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Type",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Required",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "x",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Image x coordinate",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "number | string",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "y",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Image y coordinate",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "number | string",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "z",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Image z coordinate",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "number",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "src",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Image source or HTMLImageElement",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "string | HTMLImageElement",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "✓",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "width",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Image width",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "number | string",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "height",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Image height",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "number | string",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "isBillboard",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Billboard mode",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "boolean",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "isSizeAttenuation",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Size attenuation",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "boolean",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "billboardRotation",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Billboard rotation angle",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "number",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "keepAspectRatio",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Keep original aspect ratio",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "boolean",
        "paraId": 33,
        "tocIndex": 16
    },
    {
        "value": "Example:",
        "paraId": 34,
        "tocIndex": 16
    },
    {
        "value": "BaseShape.upsert(\n  'shape',\n  'image',\n  {\n    x: 100,\n    y: 100,\n    src: 'http://',\n  },\n  container,\n);\n",
        "paraId": 35,
        "tocIndex": 16
    },
    {
        "value": "Property",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "Description",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "Type",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "Required",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "x1",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "Start x coordinate",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "number",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "✓",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "y1",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "Start y coordinate",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "number",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "✓",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "x2",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "End x coordinate",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "number",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "✓",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "y2",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "End y coordinate",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "number",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "✓",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "z1",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "Start z coordinate",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "number",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "z2",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "End z coordinate",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "number",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "isBillboard",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "Billboard mode",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "boolean",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "isSizeAttenuation",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "Size attenuation",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "boolean",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "markerStart",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "Marker at start",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "DisplayObject | null",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "markerEnd",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "Marker at end",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "DisplayObject | null",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "markerStartOffset",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "Start marker offset",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "number",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "markerEndOffset",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "End marker offset",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "number",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "Example:",
        "paraId": 37,
        "tocIndex": 18
    },
    {
        "value": "BaseShape.upsert(\n  'shape',\n  'line',\n  {\n    x1: 100,\n    y1: 100,\n    x2: 150,\n    y2: 150,\n    stroke: 'blue',\n  },\n  container,\n);\n",
        "paraId": 38,
        "tocIndex": 18
    },
    {
        "value": "Property",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "Description",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "Type",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "Required",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "d",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "Path string or array",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "string | PathArray",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "✓",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "markerStart",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "Marker at start",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "DisplayObject | null",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "markerEnd",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "Marker at end",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "DisplayObject | null",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "markerMid",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "Marker at middle",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "DisplayObject | null",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "markerStartOffset",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "Start marker offset",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "number",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "markerEndOffset",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "End marker offset",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "number",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "isBillboard",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "Billboard mode",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "boolean",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "isSizeAttenuation",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "Size attenuation",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "boolean",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "fillRule",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "Fill rule",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "nonzero",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": " | ",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "evenodd",
        "paraId": 39,
        "tocIndex": 20
    },
    {
        "value": "Example:",
        "paraId": 40,
        "tocIndex": 20
    },
    {
        "value": "BaseShape.upsert(\n  'shape',\n  'path',\n  {\n    d: 'M 0,0 L 20,10 L 20,-10 Z',\n    stroke: 'blue',\n  },\n  container,\n);\n",
        "paraId": 41,
        "tocIndex": 20
    },
    {
        "value": "Property",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "Description",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "Type",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "Required",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "points",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "Array of polygon points",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "([number, number] | [number, number, number])[]",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "✓",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "markerStart",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "Marker at start",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "DisplayObject | null",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "markerEnd",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "Marker at end",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "DisplayObject | null",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "markerMid",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "Marker at middle",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "DisplayObject | null",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "markerStartOffset",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "Start marker offset",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "number",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "markerEndOffset",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "End marker offset",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "number",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "isClosed",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "Is polygon closed",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "boolean",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "isBillboard",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "Billboard mode",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "boolean",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "isSizeAttenuation",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "Size attenuation",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "boolean",
        "paraId": 42,
        "tocIndex": 22
    },
    {
        "value": "Example:",
        "paraId": 43,
        "tocIndex": 22
    },
    {
        "value": "BaseShape.upsert(\n  'shape',\n  'polygon',\n  {\n    points: [\n      [30, 30],\n      [40, 20],\n      [30, 50],\n      [60, 100],\n    ],\n    fill: 'red',\n  },\n  container,\n);\n",
        "paraId": 44,
        "tocIndex": 22
    },
    {
        "value": "Property",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "Description",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "Type",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "Required",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "points",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "Array of polyline points",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "([number, number] | [number, number, number])[]",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "✓",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "markerStart",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "Marker at start",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "DisplayObject | null",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "markerEnd",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "Marker at end",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "DisplayObject | null",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "markerMid",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "Marker at middle",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "DisplayObject | null",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "markerStartOffset",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "Start marker offset",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "number",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "markerEndOffset",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "End marker offset",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "number",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "isBillboard",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "Billboard mode",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "boolean",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "isSizeAttenuation",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "Size attenuation",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "boolean",
        "paraId": 45,
        "tocIndex": 24
    },
    {
        "value": "Example:",
        "paraId": 46,
        "tocIndex": 24
    },
    {
        "value": "BaseShape.upsert(\n  'shape',\n  'polyline',\n  {\n    points: [\n      [30, 30],\n      [40, 20],\n      [30, 50],\n      [60, 100],\n    ],\n    fill: 'red',\n  },\n  container,\n);\n",
        "paraId": 47,
        "tocIndex": 24
    },
    {
        "value": "Property",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Description",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Type",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Required",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "x",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Text x coordinate",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "number | string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "y",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Text y coordinate",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "number | string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "z",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Text z coordinate",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "number | string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "text",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Text content",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "number | string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "✓",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "fontSize",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Font size",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "number | string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "fontFamily",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Font family",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "fontStyle",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Font style",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "normal",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "italic",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "oblique",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "fontWeight",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Font weight",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "normal",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "bold",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "bolder",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "lighter",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | number",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "fontVariant",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Font variant",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "normal",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "small-caps",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "textAlign",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Text horizontal align",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "start",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "center",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "middle",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "end",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "left",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "right",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "textBaseline",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Text baseline",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "top",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "hanging",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "middle",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "alphabetic",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "ideographic",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | `bottom'",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "textOverflow",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Text overflow",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "clip",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "ellipsis",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "lineHeight",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Line height",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "number | string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "letterSpacing",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Letter spacing",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "number | string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "maxLines",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Max lines",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "number",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "textPath",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Text path",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Path",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "textPathSide",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Text path side",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "left",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "right",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "textPathStartOffset",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Text path start offset",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "number | string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "textDecorationLine",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Text decoration line",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "textDecorationColor",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Text decoration color",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "textDecorationStyle",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Text decoration style",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "solid",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "double",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "dotted",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "dashed",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": " | ",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "wavy",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "isBillboard",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Billboard mode",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "boolean",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "billboardRotation",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Billboard rotation angle",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "number",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "isSizeAttenuation",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Size attenuation",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "boolean",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "wordWrap",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Word wrap",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "boolean",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "wordWrapWidth",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Word wrap width",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "number",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "dx",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "X offset",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "number | string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "dy",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Y offset",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "number | string",
        "paraId": 48,
        "tocIndex": 26
    },
    {
        "value": "Example:",
        "paraId": 49,
        "tocIndex": 26
    },
    {
        "value": "BaseShape.upsert(\n  'shape',\n  'text',\n  {\n    x: 100,\n    y: 100,\n    text: 'text',\n  },\n  container,\n);\n",
        "paraId": 50,
        "tocIndex": 26
    },
    {
        "value": "Display in multiply line:",
        "paraId": 51,
        "tocIndex": 26
    },
    {
        "value": "{\n  wordWrap: true,\n  wordWrapWidth: 100,\n  maxLines: 4,\n  textOverflow: 'ellipsis',\n}\n",
        "paraId": 52,
        "tocIndex": 26
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
//# sourceMappingURL=docs_manual_element_shape_properties_en_md_q_hK4X-async.js.map