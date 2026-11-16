import { Qt as e, Sn as s, cn as t, sn as r, wn as a } from "./schema-D8rqa1Y6.js";
import { k as o } from "./workspace-db-tot7PUXb.js";
import { G as n, S as i, Y as c, b as l, f as p, m as u } from "./per-source-defaults-DHWdfoJI.js";
import "./preset-families-BdJvQTVw.js";
const m = {
	schemaVersion: 1,
	algorithm: e.SADEH_1994_ACTILIFE,
	nonwearDetectorsCounts: [...s.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...s.nonwear_detectors_ggir],
	sleepPeriodDetection: n,
	placementRuleset: r.LEGACY,
	scorerPostprocessingPreset: t.NONE,
	analysisParadigm: u(a.analysis_paradigm),
	actiwareAnalysis: {},
	actiwareRestProposal: { ...l }
}, w = new Set(Object.values(e)), g = new Set(Object.values(o)), f = new Set(Object.values(r)), P = new Set(Object.values(t));
function y(e) {
	return "string" == typeof e && w.has(e) ? e : m.algorithm;
}
function d(e, s) {
	return Array.isArray(e) ? [...new Set(e.filter((e) => "string" == typeof e && g.has(e)))] : [...s];
}
function D(e) {
	return "string" == typeof e && f.has(e) ? e : m.placementRuleset;
}
function h(e) {
	return "string" == typeof e && P.has(e) ? e : m.scorerPostprocessingPreset;
}
function j(e) {
	const s = "object" == typeof e && null !== e ? e : {};
	return {
		schemaVersion: 1,
		algorithm: y(s.algorithm),
		nonwearDetectorsCounts: d(s.nonwearDetectorsCounts, m.nonwearDetectorsCounts),
		nonwearDetectorsGgir: d(s.nonwearDetectorsGgir, m.nonwearDetectorsGgir),
		sleepPeriodDetection: c(s.sleepPeriodDetection),
		placementRuleset: D(s.placementRuleset),
		scorerPostprocessingPreset: h(s.scorerPostprocessingPreset),
		analysisParadigm: u(s.analysisParadigm),
		actiwareAnalysis: p(s.actiwareAnalysis),
		actiwareRestProposal: i(s.actiwareRestProposal)
	};
}
export { j as t };
