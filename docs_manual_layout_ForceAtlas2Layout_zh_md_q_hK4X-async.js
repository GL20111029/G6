((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/ForceAtlas2Layout.zh.md?type=text'],
{ "docs/manual/layout/ForceAtlas2Layout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/ForceAtlas2Layout.zh.md?watch=parent");
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
        "value": "ForceAtlas2 是一种基于力导向的布局算法，它通过模拟物理系统中的力来优化节点位置。该布局特别适用于大规模网络数据的可视化，能够有效地展示节点之间的关系和聚类结构。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "社交网络分析：展示用户之间的关系网络，通过节点度数反映用户影响力",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "知识图谱：展示概念之间的关联关系，通过聚类效果发现知识领域",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "系统架构图：展示系统组件之间的依赖关系，通过 hub 模式突出核心组件",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'Myriel' },\n        { id: 'Napoleon' },\n        { id: 'Mlle.Baptistine' },\n        { id: 'Mme.Magloire' },\n        { id: 'CountessdeLo' },\n        { id: 'Geborand' },\n        { id: 'Champtercier' },\n        { id: 'Cravatte' },\n        { id: 'Count' },\n        { id: 'OldMan' },\n        { id: 'Labarre' },\n        { id: 'Valjean' },\n        { id: 'Marguerite' },\n        { id: 'Mme.deR' },\n        { id: 'Isabeau' },\n        { id: 'Gervais' },\n        { id: 'Tholomyes' },\n        { id: 'Listolier' },\n        { id: 'Fameuil' },\n        { id: 'Blacheville' },\n        { id: 'Favourite' },\n        { id: 'Dahlia' },\n        { id: 'Zephine' },\n        { id: 'Fantine' },\n        { id: 'Mme.Thenardier' },\n        { id: 'Thenardier' },\n        { id: 'Cosette' },\n        { id: 'Javert' },\n        { id: 'Fauchelevent' },\n        { id: 'Bamatabois' },\n        { id: 'Perpetue' },\n        { id: 'Simplice' },\n        { id: 'Scaufflaire' },\n        { id: 'Woman1' },\n        { id: 'Judge' },\n        { id: 'Champmathieu' },\n        { id: 'Brevet' },\n        { id: 'Chenildieu' },\n        { id: 'Cochepaille' },\n        { id: 'Pontmercy' },\n        { id: 'Boulatruelle' },\n        { id: 'Eponine' },\n        { id: 'Anzelma' },\n        { id: 'Woman2' },\n        { id: 'MotherInnocent' },\n        { id: 'Gribier' },\n        { id: 'Jondrette' },\n        { id: 'Mme.Burgon' },\n        { id: 'Gavroche' },\n        { id: 'Gillenormand' },\n        { id: 'Magnon' },\n        { id: 'Mlle.Gillenormand' },\n        { id: 'Mme.Pontmercy' },\n        { id: 'Mlle.Vaubois' },\n        { id: 'Lt.Gillenormand' },\n        { id: 'Marius' },\n        { id: 'BaronessT' },\n        { id: 'Mabeuf' },\n        { id: 'Enjolras' },\n        { id: 'Combeferre' },\n        { id: 'Prouvaire' },\n        { id: 'Feuilly' },\n        { id: 'Courfeyrac' },\n        { id: 'Bahorel' },\n        { id: 'Bossuet' },\n        { id: 'Joly' },\n        { id: 'Grantaire' },\n        { id: 'MotherPlutarch' },\n        { id: 'Gueulemer' },\n        { id: 'Babet' },\n        { id: 'Claquesous' },\n        { id: 'Montparnasse' },\n        { id: 'Toussaint' },\n        { id: 'Child1' },\n        { id: 'Child2' },\n        { id: 'Brujon' },\n        { id: 'Mme.Hucheloup' },\n      ],\n      edges: [\n        { source: 'Napoleon', target: 'Myriel', value: 1 },\n        { source: 'Mlle.Baptistine', target: 'Myriel', value: 8 },\n        { source: 'Mme.Magloire', target: 'Myriel', value: 10 },\n        { source: 'Mme.Magloire', target: 'Mlle.Baptistine', value: 6 },\n        { source: 'CountessdeLo', target: 'Myriel', value: 1 },\n        { source: 'Geborand', target: 'Myriel', value: 1 },\n        { source: 'Champtercier', target: 'Myriel', value: 1 },\n        { source: 'Cravatte', target: 'Myriel', value: 1 },\n        { source: 'Count', target: 'Myriel', value: 2 },\n        { source: 'OldMan', target: 'Myriel', value: 1 },\n        { source: 'Valjean', target: 'Labarre', value: 1 },\n        { source: 'Valjean', target: 'Mme.Magloire', value: 3 },\n        { source: 'Valjean', target: 'Mlle.Baptistine', value: 3 },\n        { source: 'Valjean', target: 'Myriel', value: 5 },\n        { source: 'Marguerite', target: 'Valjean', value: 1 },\n        { source: 'Mme.deR', target: 'Valjean', value: 1 },\n        { source: 'Isabeau', target: 'Valjean', value: 1 },\n        { source: 'Gervais', target: 'Valjean', value: 1 },\n        { source: 'Listolier', target: 'Tholomyes', value: 4 },\n        { source: 'Fameuil', target: 'Tholomyes', value: 4 },\n        { source: 'Fameuil', target: 'Listolier', value: 4 },\n        { source: 'Blacheville', target: 'Tholomyes', value: 4 },\n        { source: 'Blacheville', target: 'Listolier', value: 4 },\n        { source: 'Blacheville', target: 'Fameuil', value: 4 },\n        { source: 'Favourite', target: 'Tholomyes', value: 3 },\n        { source: 'Favourite', target: 'Listolier', value: 3 },\n        { source: 'Favourite', target: 'Fameuil', value: 3 },\n        { source: 'Favourite', target: 'Blacheville', value: 4 },\n        { source: 'Dahlia', target: 'Tholomyes', value: 3 },\n        { source: 'Dahlia', target: 'Listolier', value: 3 },\n        { source: 'Dahlia', target: 'Fameuil', value: 3 },\n        { source: 'Dahlia', target: 'Blacheville', value: 3 },\n        { source: 'Dahlia', target: 'Favourite', value: 5 },\n        { source: 'Zephine', target: 'Tholomyes', value: 3 },\n        { source: 'Zephine', target: 'Listolier', value: 3 },\n        { source: 'Zephine', target: 'Fameuil', value: 3 },\n        { source: 'Zephine', target: 'Blacheville', value: 3 },\n        { source: 'Zephine', target: 'Favourite', value: 4 },\n        { source: 'Zephine', target: 'Dahlia', value: 4 },\n        { source: 'Fantine', target: 'Tholomyes', value: 3 },\n        { source: 'Fantine', target: 'Listolier', value: 3 },\n        { source: 'Fantine', target: 'Fameuil', value: 3 },\n        { source: 'Fantine', target: 'Blacheville', value: 3 },\n        { source: 'Fantine', target: 'Favourite', value: 4 },\n        { source: 'Fantine', target: 'Dahlia', value: 4 },\n        { source: 'Fantine', target: 'Zephine', value: 4 },\n        { source: 'Fantine', target: 'Marguerite', value: 2 },\n        { source: 'Fantine', target: 'Valjean', value: 9 },\n        { source: 'Mme.Thenardier', target: 'Fantine', value: 2 },\n        { source: 'Mme.Thenardier', target: 'Valjean', value: 7 },\n        { source: 'Thenardier', target: 'Mme.Thenardier', value: 13 },\n        { source: 'Thenardier', target: 'Fantine', value: 1 },\n        { source: 'Thenardier', target: 'Valjean', value: 12 },\n        { source: 'Cosette', target: 'Mme.Thenardier', value: 4 },\n        { source: 'Cosette', target: 'Valjean', value: 31 },\n        { source: 'Cosette', target: 'Tholomyes', value: 1 },\n        { source: 'Cosette', target: 'Thenardier', value: 1 },\n        { source: 'Javert', target: 'Valjean', value: 17 },\n        { source: 'Javert', target: 'Fantine', value: 5 },\n        { source: 'Javert', target: 'Thenardier', value: 5 },\n        { source: 'Javert', target: 'Mme.Thenardier', value: 1 },\n        { source: 'Javert', target: 'Cosette', value: 1 },\n        { source: 'Fauchelevent', target: 'Valjean', value: 8 },\n        { source: 'Fauchelevent', target: 'Javert', value: 1 },\n        { source: 'Bamatabois', target: 'Fantine', value: 1 },\n        { source: 'Bamatabois', target: 'Javert', value: 1 },\n        { source: 'Bamatabois', target: 'Valjean', value: 2 },\n        { source: 'Perpetue', target: 'Fantine', value: 1 },\n        { source: 'Simplice', target: 'Perpetue', value: 2 },\n        { source: 'Simplice', target: 'Valjean', value: 3 },\n        { source: 'Simplice', target: 'Fantine', value: 2 },\n        { source: 'Simplice', target: 'Javert', value: 1 },\n        { source: 'Scaufflaire', target: 'Valjean', value: 1 },\n        { source: 'Woman1', target: 'Valjean', value: 2 },\n        { source: 'Woman1', target: 'Javert', value: 1 },\n        { source: 'Judge', target: 'Valjean', value: 3 },\n        { source: 'Judge', target: 'Bamatabois', value: 2 },\n        { source: 'Champmathieu', target: 'Valjean', value: 3 },\n        { source: 'Champmathieu', target: 'Judge', value: 3 },\n        { source: 'Champmathieu', target: 'Bamatabois', value: 2 },\n        { source: 'Brevet', target: 'Judge', value: 2 },\n        { source: 'Brevet', target: 'Champmathieu', value: 2 },\n        { source: 'Brevet', target: 'Valjean', value: 2 },\n        { source: 'Brevet', target: 'Bamatabois', value: 1 },\n        { source: 'Chenildieu', target: 'Judge', value: 2 },\n        { source: 'Chenildieu', target: 'Champmathieu', value: 2 },\n        { source: 'Chenildieu', target: 'Brevet', value: 2 },\n        { source: 'Chenildieu', target: 'Valjean', value: 2 },\n        { source: 'Chenildieu', target: 'Bamatabois', value: 1 },\n        { source: 'Cochepaille', target: 'Judge', value: 2 },\n        { source: 'Cochepaille', target: 'Champmathieu', value: 2 },\n        { source: 'Cochepaille', target: 'Brevet', value: 2 },\n        { source: 'Cochepaille', target: 'Chenildieu', value: 2 },\n        { source: 'Cochepaille', target: 'Valjean', value: 2 },\n        { source: 'Cochepaille', target: 'Bamatabois', value: 1 },\n        { source: 'Pontmercy', target: 'Thenardier', value: 1 },\n        { source: 'Boulatruelle', target: 'Thenardier', value: 1 },\n        { source: 'Eponine', target: 'Mme.Thenardier', value: 5 },\n        { source: 'Eponine', target: 'Thenardier', value: 1 },\n        { source: 'Anzelma', target: 'Eponine', value: 1 },\n        { source: 'Anzelma', target: 'Thenardier', value: 1 },\n        { source: 'Anzelma', target: 'Mme.Thenardier', value: 1 },\n        { source: 'Woman2', target: 'Valjean', value: 3 },\n        { source: 'Woman2', target: 'Cosette', value: 1 },\n        { source: 'Woman2', target: 'Javert', value: 1 },\n        { source: 'MotherInnocent', target: 'Fauchelevent', value: 3 },\n        { source: 'MotherInnocent', target: 'Valjean', value: 1 },\n        { source: 'Gribier', target: 'Fauchelevent', value: 2 },\n        { source: 'Mme.Burgon', target: 'Jondrette', value: 1 },\n        { source: 'Jondrette', target: 'Mme.Burgon', value: 2 },\n        { source: 'Jondrette', target: 'Valjean', value: 1 },\n        { source: 'Gavroche', target: 'Mme.Burgon', value: 2 },\n        { source: 'Gavroche', target: 'Thenardier', value: 1 },\n        { source: 'Gavroche', target: 'Javert', value: 1 },\n        { source: 'Gavroche', target: 'Valjean', value: 2 },\n        { source: 'Gillenormand', target: 'Cosette', value: 3 },\n        { source: 'Gillenormand', target: 'Valjean', value: 2 },\n        { source: 'Magnon', target: 'Gillenormand', value: 1 },\n        { source: 'Magnon', target: 'Mme.Thenardier', value: 1 },\n        { source: 'Mlle.Gillenormand', target: 'Gillenormand', value: 9 },\n        { source: 'Mlle.Gillenormand', target: 'Cosette', value: 2 },\n        { source: 'Mlle.Gillenormand', target: 'Valjean', value: 2 },\n        { source: 'Mme.Pontmercy', target: 'Mlle.Gillenormand', value: 1 },\n        { source: 'Mme.Pontmercy', target: 'Pontmercy', value: 1 },\n        { source: 'Mlle.Vaubois', target: 'Mlle.Gillenormand', value: 1 },\n        { source: 'Lt.Gillenormand', target: 'Mlle.Gillenormand', value: 2 },\n        { source: 'Lt.Gillenormand', target: 'Gillenormand', value: 1 },\n        { source: 'Lt.Gillenormand', target: 'Cosette', value: 1 },\n        { source: 'Marius', target: 'Mlle.Gillenormand', value: 6 },\n        { source: 'Marius', target: 'Gillenormand', value: 12 },\n        { source: 'Marius', target: 'Pontmercy', value: 1 },\n        { source: 'Marius', target: 'Lt.Gillenormand', value: 1 },\n        { source: 'Marius', target: 'Cosette', value: 21 },\n        { source: 'Marius', target: 'Valjean', value: 19 },\n        { source: 'Marius', target: 'Tholomyes', value: 1 },\n        { source: 'Marius', target: 'Thenardier', value: 2 },\n        { source: 'Marius', target: 'Eponine', value: 5 },\n        { source: 'Marius', target: 'Gavroche', value: 4 },\n        { source: 'BaronessT', target: 'Gillenormand', value: 1 },\n        { source: 'BaronessT', target: 'Marius', value: 1 },\n        { source: 'Mabeuf', target: 'Marius', value: 1 },\n        { source: 'Mabeuf', target: 'Eponine', value: 1 },\n        { source: 'Mabeuf', target: 'Gavroche', value: 1 },\n        { source: 'Enjolras', target: 'Marius', value: 7 },\n        { source: 'Enjolras', target: 'Gavroche', value: 7 },\n        { source: 'Enjolras', target: 'Javert', value: 6 },\n        { source: 'Enjolras', target: 'Mabeuf', value: 1 },\n        { source: 'Enjolras', target: 'Valjean', value: 4 },\n        { source: 'Combeferre', target: 'Enjolras', value: 15 },\n        { source: 'Combeferre', target: 'Marius', value: 5 },\n        { source: 'Combeferre', target: 'Gavroche', value: 6 },\n        { source: 'Combeferre', target: 'Mabeuf', value: 2 },\n        { source: 'Prouvaire', target: 'Gavroche', value: 1 },\n        { source: 'Prouvaire', target: 'Enjolras', value: 4 },\n        { source: 'Prouvaire', target: 'Combeferre', value: 2 },\n        { source: 'Feuilly', target: 'Gavroche', value: 2 },\n        { source: 'Feuilly', target: 'Enjolras', value: 6 },\n        { source: 'Feuilly', target: 'Prouvaire', value: 2 },\n        { source: 'Feuilly', target: 'Combeferre', value: 5 },\n        { source: 'Feuilly', target: 'Mabeuf', value: 1 },\n        { source: 'Feuilly', target: 'Marius', value: 1 },\n        { source: 'Courfeyrac', target: 'Marius', value: 9 },\n        { source: 'Courfeyrac', target: 'Enjolras', value: 17 },\n        { source: 'Courfeyrac', target: 'Combeferre', value: 13 },\n        { source: 'Courfeyrac', target: 'Gavroche', value: 7 },\n        { source: 'Courfeyrac', target: 'Mabeuf', value: 2 },\n        { source: 'Courfeyrac', target: 'Eponine', value: 1 },\n        { source: 'Courfeyrac', target: 'Feuilly', value: 6 },\n        { source: 'Courfeyrac', target: 'Prouvaire', value: 3 },\n        { source: 'Bahorel', target: 'Combeferre', value: 5 },\n        { source: 'Bahorel', target: 'Gavroche', value: 5 },\n        { source: 'Bahorel', target: 'Courfeyrac', value: 6 },\n        { source: 'Bahorel', target: 'Mabeuf', value: 2 },\n        { source: 'Bahorel', target: 'Enjolras', value: 4 },\n        { source: 'Bahorel', target: 'Feuilly', value: 3 },\n        { source: 'Bahorel', target: 'Prouvaire', value: 2 },\n        { source: 'Bahorel', target: 'Marius', value: 1 },\n        { source: 'Bossuet', target: 'Marius', value: 5 },\n        { source: 'Bossuet', target: 'Courfeyrac', value: 12 },\n        { source: 'Bossuet', target: 'Gavroche', value: 5 },\n        { source: 'Bossuet', target: 'Bahorel', value: 4 },\n        { source: 'Bossuet', target: 'Enjolras', value: 10 },\n        { source: 'Bossuet', target: 'Feuilly', value: 6 },\n        { source: 'Bossuet', target: 'Prouvaire', value: 2 },\n        { source: 'Bossuet', target: 'Combeferre', value: 9 },\n        { source: 'Bossuet', target: 'Mabeuf', value: 1 },\n        { source: 'Bossuet', target: 'Valjean', value: 1 },\n        { source: 'Joly', target: 'Bahorel', value: 5 },\n        { source: 'Joly', target: 'Bossuet', value: 7 },\n        { source: 'Joly', target: 'Gavroche', value: 3 },\n        { source: 'Joly', target: 'Courfeyrac', value: 5 },\n        { source: 'Joly', target: 'Enjolras', value: 5 },\n        { source: 'Joly', target: 'Feuilly', value: 5 },\n        { source: 'Joly', target: 'Prouvaire', value: 2 },\n        { source: 'Joly', target: 'Combeferre', value: 5 },\n        { source: 'Joly', target: 'Mabeuf', value: 1 },\n        { source: 'Joly', target: 'Marius', value: 2 },\n        { source: 'Grantaire', target: 'Bossuet', value: 3 },\n        { source: 'Grantaire', target: 'Enjolras', value: 3 },\n        { source: 'Grantaire', target: 'Combeferre', value: 1 },\n        { source: 'Grantaire', target: 'Courfeyrac', value: 2 },\n        { source: 'Grantaire', target: 'Joly', value: 2 },\n        { source: 'Grantaire', target: 'Gavroche', value: 1 },\n        { source: 'Grantaire', target: 'Bahorel', value: 1 },\n        { source: 'Grantaire', target: 'Feuilly', value: 1 },\n        { source: 'Grantaire', target: 'Prouvaire', value: 1 },\n        { source: 'MotherPlutarch', target: 'Mabeuf', value: 3 },\n        { source: 'Gueulemer', target: 'Thenardier', value: 5 },\n        { source: 'Gueulemer', target: 'Valjean', value: 1 },\n        { source: 'Gueulemer', target: 'Mme.Thenardier', value: 1 },\n        { source: 'Gueulemer', target: 'Javert', value: 1 },\n        { source: 'Gueulemer', target: 'Gavroche', value: 1 },\n        { source: 'Gueulemer', target: 'Eponine', value: 1 },\n        { source: 'Babet', target: 'Thenardier', value: 6 },\n        { source: 'Babet', target: 'Gueulemer', value: 6 },\n        { source: 'Babet', target: 'Valjean', value: 1 },\n        { source: 'Babet', target: 'Mme.Thenardier', value: 1 },\n        { source: 'Babet', target: 'Javert', value: 2 },\n        { source: 'Babet', target: 'Gavroche', value: 1 },\n        { source: 'Babet', target: 'Eponine', value: 1 },\n        { source: 'Claquesous', target: 'Thenardier', value: 4 },\n        { source: 'Claquesous', target: 'Babet', value: 4 },\n        { source: 'Claquesous', target: 'Gueulemer', value: 4 },\n        { source: 'Claquesous', target: 'Valjean', value: 1 },\n        { source: 'Claquesous', target: 'Mme.Thenardier', value: 1 },\n        { source: 'Claquesous', target: 'Javert', value: 1 },\n        { source: 'Claquesous', target: 'Eponine', value: 1 },\n        { source: 'Claquesous', target: 'Enjolras', value: 1 },\n        { source: 'Montparnasse', target: 'Javert', value: 1 },\n        { source: 'Montparnasse', target: 'Babet', value: 2 },\n        { source: 'Montparnasse', target: 'Gueulemer', value: 2 },\n        { source: 'Montparnasse', target: 'Claquesous', value: 2 },\n        { source: 'Montparnasse', target: 'Valjean', value: 1 },\n        { source: 'Montparnasse', target: 'Gavroche', value: 1 },\n        { source: 'Montparnasse', target: 'Eponine', value: 1 },\n        { source: 'Montparnasse', target: 'Thenardier', value: 1 },\n        { source: 'Toussaint', target: 'Cosette', value: 2 },\n        { source: 'Toussaint', target: 'Javert', value: 1 },\n        { source: 'Toussaint', target: 'Valjean', value: 1 },\n        { source: 'Child1', target: 'Gavroche', value: 2 },\n        { source: 'Child2', target: 'Gavroche', value: 2 },\n        { source: 'Child2', target: 'Child1', value: 3 },\n        { source: 'Brujon', target: 'Babet', value: 3 },\n        { source: 'Brujon', target: 'Gueulemer', value: 3 },\n        { source: 'Brujon', target: 'Thenardier', value: 3 },\n        { source: 'Brujon', target: 'Gavroche', value: 1 },\n        { source: 'Brujon', target: 'Eponine', value: 1 },\n        { source: 'Brujon', target: 'Claquesous', value: 1 },\n        { source: 'Brujon', target: 'Montparnasse', value: 1 },\n        { source: 'Mme.Hucheloup', target: 'Bossuet', value: 1 },\n        { source: 'Mme.Hucheloup', target: 'Joly', value: 1 },\n        { source: 'Mme.Hucheloup', target: 'Grantaire', value: 1 },\n        { source: 'Mme.Hucheloup', target: 'Bahorel', value: 1 },\n        { source: 'Mme.Hucheloup', target: 'Courfeyrac', value: 1 },\n        { source: 'Mme.Hucheloup', target: 'Gavroche', value: 1 },\n        { source: 'Mme.Hucheloup', target: 'Enjolras', value: 1 },\n      ],\n    },\n    autoFit: 'view',\n    layout: {\n      type: 'force-atlas2',\n      preventOverlap: true,\n      kr: 20,\n      center: [250, 250],\n      ks: 0.1,\n      ksmax: 10,\n      tao: 0.1,\n      mode: 'normal',\n    },\n    behaviors: ['zoom-canvas', 'drag-canvas', 'drag-element'],\n    autoResize: true,\n    zoomRange: [0.1, 5],\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      type: 'force-atlas2',\n      preventOverlap: true,\n      kr: 20,\n      ks: 0.1,\n      ksmax: 10,\n      tao: 0.1,\n      mode: 'normal',\n      kg: 1,\n      barnesHut: false,\n      dissuadeHubs: false,\n      prune: false,\n    };\n\n    const optionFolder = gui.addFolder('ForceAtlas2 Layout Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'preventOverlap');\n    optionFolder.add(options, 'kr', 1, 100, 1);\n    optionFolder.add(options, 'ks', 0.01, 1, 0.01);\n    optionFolder.add(options, 'ksmax', 1, 20, 1);\n    optionFolder.add(options, 'tao', 0.01, 1, 0.01);\n    optionFolder.add(options, 'kg', 0, 10, 0.1);\n    optionFolder.add(options, 'barnesHut');\n    optionFolder.add(options, 'dissuadeHubs');\n    optionFolder.add(options, 'prune');\n    optionFolder.add(options, 'mode', ['normal', 'linlog']);\n\n    optionFolder.onChange(async ({ property, value }) => {\n      graph.setLayout(\n        Object.assign({}, graph.getLayout(), {\n          [property]: value,\n        }),\n      );\n      await graph.layout();\n    });\n  },\n);\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'force-atlas2',\n    preventOverlap: true,\n    kr: 20,\n    center: [250, 250],\n  },\n});\n",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "布局类型，必须为 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "force-atlas2",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "force-atlas2",
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
        "value": "barnesHut",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "是否开启四叉树加速，开启后可以提升大规模图的布局性能，但可能会影响布局质量。默认情况下为 undefined，当节点数量大于 250 时它将会被激活。设置为 false 则不会自动被激活",
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
        "value": "dissuadeHubs",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "是否开启 hub 模式。若为 true，相比与出度大的节点，入度大的节点将会有更高的优先级被放置在中心位置",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "height",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "布局高度，默认使用容器高度",
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
        "value": "kg",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "重力系数，",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "kg",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 越大，布局越聚集在中心",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "1",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "kr",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "斥力系数，可用于调整布局的紧凑程度。kr 越大，布局越松散",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "5",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "ks",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "控制迭代过程中，节点移动的速度",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "0.1",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "ksmax",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "迭代过程中，最大的节点移动的速度上限",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "mode",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "聚类模式，",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "linlog",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 模式下，聚类将更加紧凑",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "normal",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "linlog",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "normal",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "nodeSize",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "节点大小（直径）。当开启 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "preventOverlap",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 时，用于计算节点之间的斥力。如果不设置，则使用节点数据中的 data.size 属性",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Size | ((node?: Node) => Size)",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "onTick",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "每一次迭代的回调函数",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "(data: LayoutMapping) => void",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "preventOverlap",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "是否防止节点重叠。开启后，布局会考虑节点大小，避免节点重叠。节点大小通过 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "nodeSize",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 配置指定，如果没有设置 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "nodeSize",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "，则通过节点数据中的 data.size 属性指定",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "prune",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "是否开启自动剪枝模式。默认情况下为 undefined，当节点数量大于 100 时它将会被激活。注意，剪枝能够提高收敛速度，但可能会降低图的布局质量。设置为 false 则不会自动被激活",
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
        "value": "tao",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "迭代接近收敛时停止震荡的容忍度",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "0.1",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "width",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "布局宽度，默认使用容器宽度",
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
        "value": "center",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "布局中心点，用于指定重力的中心，格式为 [x, y]。每个节点都会受到一个指向该中心点的重力，重力大小由 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "kg",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 参数控制。如果不设置，则使用画布中心点",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "[number, number]",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  layout: {\n    type: 'force-atlas2',\n    preventOverlap: true,\n    kr: 20,\n  },\n  autoFit: 'view',\n  data: {\n    nodes: [\n      { id: 'node1' },\n      { id: 'node2' },\n      { id: 'node3' },\n      { id: 'node4' },\n      { id: 'node5' },\n      { id: 'node6' },\n      { id: 'node7' },\n      { id: 'node8' },\n      { id: 'node9' },\n      { id: 'node10' },\n      { id: 'node11' },\n      { id: 'node12' },\n      { id: 'node13' },\n      { id: 'node14' },\n      { id: 'node15' },\n    ],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node2', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node4', target: 'node5' },\n      { source: 'node5', target: 'node6' },\n      { source: 'node6', target: 'node7' },\n      { source: 'node7', target: 'node8' },\n      { source: 'node8', target: 'node9' },\n      { source: 'node9', target: 'node10' },\n      { source: 'node10', target: 'node11' },\n      { source: 'node11', target: 'node12' },\n      { source: 'node12', target: 'node13' },\n      { source: 'node13', target: 'node14' },\n      { source: 'node14', target: 'node15' },\n      { source: 'node15', target: 'node1' },\n      { source: 'node1', target: 'node8' },\n      { source: 'node2', target: 'node9' },\n      { source: 'node3', target: 'node10' },\n      { source: 'node4', target: 'node11' },\n      { source: 'node5', target: 'node12' },\n      { source: 'node6', target: 'node13' },\n      { source: 'node7', target: 'node14' },\n    ],\n  },\n  behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],\n});\n",
        "paraId": 5,
        "tocIndex": 6
    },
    {
        "value": "效果如下：",
        "paraId": 6,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 300,\n  layout: {\n    type: 'force-atlas2',\n    preventOverlap: true,\n    kr: 20,\n  },\n  data: {\n    nodes: [\n      { id: 'node1' },\n      { id: 'node2' },\n      { id: 'node3' },\n      { id: 'node4' },\n      { id: 'node5' },\n      { id: 'node6' },\n      { id: 'node7' },\n      { id: 'node8' },\n      { id: 'node9' },\n      { id: 'node10' },\n      { id: 'node11' },\n      { id: 'node12' },\n      { id: 'node13' },\n      { id: 'node14' },\n      { id: 'node15' },\n    ],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node2', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node4', target: 'node5' },\n      { source: 'node5', target: 'node6' },\n      { source: 'node6', target: 'node7' },\n      { source: 'node7', target: 'node8' },\n      { source: 'node8', target: 'node9' },\n      { source: 'node9', target: 'node10' },\n      { source: 'node10', target: 'node11' },\n      { source: 'node11', target: 'node12' },\n      { source: 'node12', target: 'node13' },\n      { source: 'node13', target: 'node14' },\n      { source: 'node14', target: 'node15' },\n      { source: 'node15', target: 'node1' },\n      { source: 'node1', target: 'node8' },\n      { source: 'node2', target: 'node9' },\n      { source: 'node3', target: 'node10' },\n      { source: 'node4', target: 'node11' },\n      { source: 'node5', target: 'node12' },\n      { source: 'node6', target: 'node13' },\n      { source: 'node7', target: 'node14' },\n    ],\n  },\n  behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 7,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nfetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const graph = new Graph({\n      container: 'container',\n      data,\n      autoFit: 'view',\n      layout: {\n        type: 'force-atlas2',\n        preventOverlap: true,\n        kr: 20,\n        center: [250, 250],\n      },\n      behaviors: ['zoom-canvas', 'drag-canvas'],\n      autoResize: true,\n      zoomRange: [0.1, 5],\n    });\n\n    graph.render();\n  });\n",
        "paraId": 8,
        "tocIndex": 7
    },
    {
        "value": "ForceAtlas2布局",
        "paraId": 9,
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
//# sourceMappingURL=docs_manual_layout_ForceAtlas2Layout_zh_md_q_hK4X-async.js.map