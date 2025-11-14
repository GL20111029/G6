((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/viewport.en.md?type=text'],
{ "docs/api/viewport.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/viewport.en.md?watch=parent");
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
        "value": "G6 provides a series of viewport operation APIs to control the zooming, panning, and rotating of the canvas. These operations help users better view and interact with graphical content. Through viewport operations, you can achieve the following functions:",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Zoom the canvas to view details or the global view",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Pan the canvas to view different areas",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Rotate the canvas to get different perspectives",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Automatically fit content to the viewport",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Viewport operations in G6 are mainly divided into the following categories:",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Zoom Operations",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": ": such as ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "zoomTo",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": ", ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "zoomBy",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Pan Operations",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": ": such as ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "translateTo",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": ", ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "translateBy",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Rotate Operations",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": ": such as ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "rotateTo",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": ", ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "rotateBy",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Fit Operations",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": ": such as ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "fitView",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": ", ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "fitCenter",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Viewport Information Retrieval",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": ": such as ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "getZoom",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": ", ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "getPosition",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Zoom the canvas to a specified scale (absolute zoom).",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "zoomTo(zoom: number, animation?: ViewportAnimationEffectTiming, origin?: Point): Promise<void>;\n",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Parameters",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Parameter",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "zoom",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Target zoom scale (1 = original size, >1 zoom in, <1 zoom out)",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "animation",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Animation configuration",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "origin",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Zoom center point (viewport coordinates)",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Point",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Example",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "// Zoom in to 2x\ngraph.zoomTo(2);\n\n// Zoom out to 0.5x with animation\ngraph.zoomTo(0.5, {\n  duration: 500,\n  easing: 'ease',\n});\n\n// Zoom in with the viewport center as the origin\ngraph.zoomTo(1.5, false, graph.getCanvasCenter());\n",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "Zoom based on the current zoom scale (relative zoom).",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "zoomBy(ratio: number, animation?: ViewportAnimationEffectTiming, origin?: Point): Promise<void>;\n",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Parameter",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "ratio",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "Zoom ratio (>1 zoom in, <1 zoom out)",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "animation",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "Animation configuration",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "origin",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "Zoom center point (viewport coordinates)",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "Point",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "Example",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "// Zoom in by 1.2x based on the current scale\ngraph.zoomBy(1.2);\n\n// Zoom out to 0.8x based on the current scale with animation\ngraph.zoomBy(0.8, {\n  duration: 300,\n});\n",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "Pan the graph to a specified position (absolute pan).",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "translateTo(position: Point, animation?: ViewportAnimationEffectTiming): Promise<void>;\n",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "Parameters",
        "paraId": 22,
        "tocIndex": 5
    },
    {
        "value": "Parameter",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "Description",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "Type",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "Default",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "Required",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "position",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "Target position coordinates",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "Point",
        "paraId": 24,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "✓",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "animation",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "Animation configuration",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 25,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "Example",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "// Pan to a specified position\ngraph.translateTo([100, 100]);\n\n// Pan with animation\ngraph.translateTo([200, 200], {\n  duration: 1000,\n  easing: 'ease-in-out',\n});\n",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "Pan the graph by a specified distance relative to the current position (relative pan).",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "translateBy(offset: Point, animation?: ViewportAnimationEffectTiming): Promise<void>;\n",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": "Parameters",
        "paraId": 30,
        "tocIndex": 6
    },
    {
        "value": "Parameter",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "Description",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "Type",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "Default",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "Required",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "offset",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "Pan offset",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "Point",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "✓",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "animation",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "Animation configuration",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "Example",
        "paraId": 34,
        "tocIndex": 6
    },
    {
        "value": "// Pan right by 100 pixels and down by 50 pixels\ngraph.translateBy([100, 50]);\n\n// Relative pan with animation\ngraph.translateBy([-50, -50], {\n  duration: 500,\n});\n",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "Rotate the canvas to a specified angle (absolute rotation).",
        "paraId": 36,
        "tocIndex": 7
    },
    {
        "value": "rotateTo(angle: number, animation?: ViewportAnimationEffectTiming, origin?: Point): Promise<void>;\n",
        "paraId": 37,
        "tocIndex": 7
    },
    {
        "value": "Parameters",
        "paraId": 38,
        "tocIndex": 7
    },
    {
        "value": "Parameter",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "Description",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "Type",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "Default",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "Required",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "angle",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "Target rotation angle (radians)",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "✓",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "animation",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "Animation configuration",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 40,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "origin",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "Rotation center point (viewport coordinates)",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "Point",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "Example",
        "paraId": 42,
        "tocIndex": 7
    },
    {
        "value": "// Rotate to 45 degrees\ngraph.rotateTo(Math.PI / 4);\n\n// Rotate to 90 degrees with animation\ngraph.rotateTo(Math.PI / 2, {\n  duration: 1000,\n});\n",
        "paraId": 43,
        "tocIndex": 7
    },
    {
        "value": "Rotate based on the current angle (relative rotation).",
        "paraId": 44,
        "tocIndex": 8
    },
    {
        "value": "rotateBy(angle: number, animation?: ViewportAnimationEffectTiming, origin?: Point): Promise<void>;\n",
        "paraId": 45,
        "tocIndex": 8
    },
    {
        "value": "Parameters",
        "paraId": 46,
        "tocIndex": 8
    },
    {
        "value": "Parameter",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Description",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Type",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Default",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Required",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "angle",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Rotation angle increment (radians)",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "number",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "-",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "✓",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "animation",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Animation configuration",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": "-",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "origin",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Rotation center point (viewport coordinates)",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Point",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "-",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Example",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": "// Rotate clockwise by 30 degrees relative to the current angle\ngraph.rotateBy(Math.PI / 6);\n\n// Relative rotation with animation\ngraph.rotateBy(-Math.PI / 4, {\n  duration: 500,\n  easing: 'ease-out',\n});\n",
        "paraId": 51,
        "tocIndex": 8
    },
    {
        "value": "Scale the graph to fit the appropriate size and pan to the center of the viewport.",
        "paraId": 52,
        "tocIndex": 9
    },
    {
        "value": "fitView(options?: FitViewOptions, animation?: ViewportAnimationEffectTiming): Promise<void>;\n",
        "paraId": 53,
        "tocIndex": 9
    },
    {
        "value": "Parameters",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "Parameter",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": "Description",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": "Type",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": "Default",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": "Required",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": "options",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": "Fit options",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": "FitViewOptions",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": "animation",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": "Animation configuration",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 56,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": "FitViewOptions Type Description",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "Property",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": "Type",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": "Default",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": "Description",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": "when",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": "'overflow' | 'always'",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": "'overflow'",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": "Fit timing: only when overflow or always",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": "direction",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": "'x' | 'y' | 'both'",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": "'both'",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": "Fit direction: x-axis, y-axis, or both directions",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": "Example",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "// Basic usage\ngraph.fitView();\n\n// Configure fit options\ngraph.fitView(\n  {\n    when: 'always', // Always fit\n    direction: 'both', // Fit in both directions\n  },\n  {\n    duration: 1000, // With animation\n  },\n);\n\n// Fit in the x direction only when content overflows\ngraph.fitView({\n  when: 'overflow',\n  direction: 'x',\n});\n",
        "paraId": 60,
        "tocIndex": 9
    },
    {
        "value": "Pan the graph to the center of the viewport.",
        "paraId": 61,
        "tocIndex": 10
    },
    {
        "value": "fitCenter(animation?: ViewportAnimationEffectTiming): Promise<void>;\n",
        "paraId": 62,
        "tocIndex": 10
    },
    {
        "value": "Parameters",
        "paraId": 63,
        "tocIndex": 10
    },
    {
        "value": "Parameter",
        "paraId": 64,
        "tocIndex": 10
    },
    {
        "value": "Description",
        "paraId": 64,
        "tocIndex": 10
    },
    {
        "value": "Type",
        "paraId": 64,
        "tocIndex": 10
    },
    {
        "value": "Default",
        "paraId": 64,
        "tocIndex": 10
    },
    {
        "value": "Required",
        "paraId": 64,
        "tocIndex": 10
    },
    {
        "value": "animation",
        "paraId": 64,
        "tocIndex": 10
    },
    {
        "value": "Animation configuration",
        "paraId": 64,
        "tocIndex": 10
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 65,
        "tocIndex": 10
    },
    {
        "value": "-",
        "paraId": 64,
        "tocIndex": 10
    },
    {
        "value": "Example",
        "paraId": 66,
        "tocIndex": 10
    },
    {
        "value": "// Center the graph\ngraph.fitCenter();\n\n// Center with animation\ngraph.fitCenter({\n  duration: 500,\n  easing: 'ease-in',\n});\n",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "Get the current zoom scale.",
        "paraId": 68,
        "tocIndex": 11
    },
    {
        "value": "getZoom(): number;\n",
        "paraId": 69,
        "tocIndex": 11
    },
    {
        "value": "Example",
        "paraId": 70,
        "tocIndex": 11
    },
    {
        "value": "const currentZoom = graph.getZoom();\nconsole.log('Current zoom scale:', currentZoom);\n",
        "paraId": 71,
        "tocIndex": 11
    },
    {
        "value": "Get the position of the graph (position of the canvas origin in the viewport coordinate system).",
        "paraId": 72,
        "tocIndex": 12
    },
    {
        "value": "getPosition(): Point;\n",
        "paraId": 73,
        "tocIndex": 12
    },
    {
        "value": "Example",
        "paraId": 74,
        "tocIndex": 12
    },
    {
        "value": "const position = graph.getPosition();\nconsole.log('Current position:', position);\n",
        "paraId": 75,
        "tocIndex": 12
    },
    {
        "value": "Get the current rotation angle.",
        "paraId": 76,
        "tocIndex": 13
    },
    {
        "value": "getRotation(): number;\n",
        "paraId": 77,
        "tocIndex": 13
    },
    {
        "value": "Example",
        "paraId": 78,
        "tocIndex": 13
    },
    {
        "value": "const rotation = graph.getRotation();\nconsole.log('Current rotation angle (radians):', rotation);\nconsole.log('Current rotation angle (degrees):', (rotation * 180) / Math.PI);\n",
        "paraId": 79,
        "tocIndex": 13
    },
    {
        "value": "Get the viewport coordinates of the viewport center.",
        "paraId": 80,
        "tocIndex": 14
    },
    {
        "value": "getCanvasCenter(): Point;\n",
        "paraId": 81,
        "tocIndex": 14
    },
    {
        "value": "Example",
        "paraId": 82,
        "tocIndex": 14
    },
    {
        "value": "const center = graph.getCanvasCenter();\nconsole.log('Viewport center coordinates:', center);\n",
        "paraId": 83,
        "tocIndex": 14
    },
    {
        "value": "Get the canvas coordinates of the viewport center.",
        "paraId": 84,
        "tocIndex": 15
    },
    {
        "value": "getViewportCenter(): Point;\n",
        "paraId": 85,
        "tocIndex": 15
    },
    {
        "value": "Example",
        "paraId": 86,
        "tocIndex": 15
    },
    {
        "value": "const viewportCenter = graph.getViewportCenter();\nconsole.log('Canvas coordinates of the viewport center:', viewportCenter);\n",
        "paraId": 87,
        "tocIndex": 15
    },
    {
        "value": "Set the zoom range of the current graph.",
        "paraId": 88,
        "tocIndex": 16
    },
    {
        "value": "setZoomRange(zoomRange: [number, number]): void;\n",
        "paraId": 89,
        "tocIndex": 16
    },
    {
        "value": "Parameters",
        "paraId": 90,
        "tocIndex": 16
    },
    {
        "value": "Parameter",
        "paraId": 91,
        "tocIndex": 16
    },
    {
        "value": "Description",
        "paraId": 91,
        "tocIndex": 16
    },
    {
        "value": "Type",
        "paraId": 91,
        "tocIndex": 16
    },
    {
        "value": "Default",
        "paraId": 91,
        "tocIndex": 16
    },
    {
        "value": "Required",
        "paraId": 91,
        "tocIndex": 16
    },
    {
        "value": "zoomRange",
        "paraId": 91,
        "tocIndex": 16
    },
    {
        "value": "Zoom range",
        "paraId": 91,
        "tocIndex": 16
    },
    {
        "value": "[number, number] | undefined",
        "paraId": 91,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 91,
        "tocIndex": 16
    },
    {
        "value": "✓",
        "paraId": 91,
        "tocIndex": 16
    },
    {
        "value": "Example",
        "paraId": 92,
        "tocIndex": 16
    },
    {
        "value": "// Limit the zoom range between 0.5x and 2x\ngraph.setZoomRange([0.5, 2]);\n\n// Remove zoom restrictions\ngraph.setZoomRange(undefined);\n",
        "paraId": 93,
        "tocIndex": 16
    },
    {
        "value": "Get the zoom range of the current graph.",
        "paraId": 94,
        "tocIndex": 17
    },
    {
        "value": "getZoomRange(): GraphOptions['zoomRange'];\n",
        "paraId": 95,
        "tocIndex": 17
    },
    {
        "value": "Example",
        "paraId": 96,
        "tocIndex": 17
    },
    {
        "value": "const range = graph.getZoomRange();\nconsole.log('Current zoom range:', range);\n",
        "paraId": 97,
        "tocIndex": 17
    },
    {
        "value": "Resize the canvas to the size of the graph container.",
        "paraId": 98,
        "tocIndex": 18
    },
    {
        "value": "resize(): void;\n",
        "paraId": 99,
        "tocIndex": 18
    },
    {
        "value": "Resize the canvas to the specified width and height.",
        "paraId": 100,
        "tocIndex": 19
    },
    {
        "value": "resize(width: number, height: number): void;\n",
        "paraId": 101,
        "tocIndex": 19
    },
    {
        "value": "Parameters",
        "paraId": 102,
        "tocIndex": 19
    },
    {
        "value": "Parameter",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "Description",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "Type",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "Default",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "Required",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "width",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "Target width",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "number",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "-",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "✓",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "height",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "Target height",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "number",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "-",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "✓",
        "paraId": 103,
        "tocIndex": 19
    },
    {
        "value": "Example",
        "paraId": 104,
        "tocIndex": 19
    },
    {
        "value": "// Set the canvas size to 800x600\ngraph.resize(800, 600);\n",
        "paraId": 105,
        "tocIndex": 19
    },
    {
        "value": "Viewport animation configuration type.",
        "paraId": 106,
        "tocIndex": 21
    },
    {
        "value": "type ViewportAnimationEffectTiming =\n  | boolean // Whether to enable animation\n  | {\n      easing?: string; // Easing function\n      duration?: number; // Animation duration (ms)\n    };\n",
        "paraId": 107,
        "tocIndex": 21
    },
    {
        "value": "Coordinate point type.",
        "paraId": 108,
        "tocIndex": 22
    },
    {
        "value": "type Point = [number, number] | [number, number, number] | Float32Array;\n",
        "paraId": 109,
        "tocIndex": 22
    },
    {
        "value": "View fit options.",
        "paraId": 110,
        "tocIndex": 23
    },
    {
        "value": "interface FitViewOptions {\n  when?: 'overflow' | 'always'; // Fit timing\n  direction?: 'x' | 'y' | 'both'; // Fit direction\n}\n",
        "paraId": 111,
        "tocIndex": 23
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
//# sourceMappingURL=docs_api_viewport_en_md_q_hK4X-async.js.map