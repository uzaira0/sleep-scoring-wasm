import { Cn as e, Tn as s, en as t, ln as r, un as a } from "./schema-BHdDgVmx.js";
import { M as o } from "./workspace-db-MESLoRZb.js";
import { H as n, K as i, f as c, u as l, v as p, y as u } from "./per-source-defaults-sZh2GVm_.js";
import "./preset-families-BvxPh_89.js";
const m = {
	schemaVersion: 1,
	algorithm: t.SADEH_1994_ACTILIFE,
	nonwearDetectorsCounts: [...e.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...e.nonwear_detectors_ggir],
	sleepPeriodDetection: n,
	placementRuleset: r.LEGACY,
	scorerPostprocessingPreset: a.NONE,
	analysisParadigm: c(s.analysis_paradigm),
	actiwareAnalysis: {},
	actiwareRestProposal: { ...p }
}, g = new Set(Object.values(t)), w = new Set(Object.values(o)), f = new Set(Object.values(r)), P = new Set(Object.values(a));
function y(e) {
	return "string" == typeof e && g.has(e) ? e : m.algorithm;
}
function d(e, s) {
	return Array.isArray(e) ? [...new Set(e.filter((e) => "string" == typeof e && w.has(e)))] : [...s];
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
		sleepPeriodDetection: i(s.sleepPeriodDetection),
		placementRuleset: D(s.placementRuleset),
		scorerPostprocessingPreset: h(s.scorerPostprocessingPreset),
		analysisParadigm: c(s.analysisParadigm),
		actiwareAnalysis: l(s.actiwareAnalysis),
		actiwareRestProposal: u(s.actiwareRestProposal)
	};
}
export { j as t };
