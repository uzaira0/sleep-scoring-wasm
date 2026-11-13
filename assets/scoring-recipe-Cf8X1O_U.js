import { St as e, Z as s, bt as t, ot as r, st as a } from "./schema-a6j21oPg.js";
import { A as o } from "./workspace-db-7YlMflhU.js";
import { G as n, V as i, _ as c, d as l, l as p, v as u } from "./per-source-defaults-C4SAjL4R.js";
import "./preset-families-aBh0q7Kz.js";
const m = {
	schemaVersion: 1,
	algorithm: s.SADEH_1994_ACTILIFE,
	nonwearDetectorsCounts: [...t.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...t.nonwear_detectors_ggir],
	sleepPeriodDetection: i,
	placementRuleset: r.LEGACY,
	scorerPostprocessingPreset: a.NONE,
	analysisParadigm: l(e.analysis_paradigm),
	actiwareAnalysis: {},
	actiwareRestProposal: { ...c }
}, g = new Set(Object.values(s)), w = new Set(Object.values(o)), P = new Set(Object.values(r)), f = new Set(Object.values(a));
function y(e) {
	return "string" == typeof e && g.has(e) ? e : m.algorithm;
}
function d(e, s) {
	return Array.isArray(e) ? [...new Set(e.filter((e) => "string" == typeof e && w.has(e)))] : [...s];
}
function D(e) {
	return "string" == typeof e && P.has(e) ? e : m.placementRuleset;
}
function h(e) {
	return "string" == typeof e && f.has(e) ? e : m.scorerPostprocessingPreset;
}
function j(e) {
	const s = "object" == typeof e && null !== e ? e : {};
	return {
		schemaVersion: 1,
		algorithm: y(s.algorithm),
		nonwearDetectorsCounts: d(s.nonwearDetectorsCounts, m.nonwearDetectorsCounts),
		nonwearDetectorsGgir: d(s.nonwearDetectorsGgir, m.nonwearDetectorsGgir),
		sleepPeriodDetection: n(s.sleepPeriodDetection),
		placementRuleset: D(s.placementRuleset),
		scorerPostprocessingPreset: h(s.scorerPostprocessingPreset),
		analysisParadigm: l(s.analysisParadigm),
		actiwareAnalysis: p(s.actiwareAnalysis),
		actiwareRestProposal: u(s.actiwareRestProposal)
	};
}
export { j as t };
