import { En as e, en as s, ln as t, un as r, wn as a } from "./schema-MMK46mR-.js";
import { j as o } from "./workspace-db-YhWSrcvp.js";
import { G as n, S as i, Y as c, b as l, f as p, m as u } from "./per-source-defaults-CxbMEjO8.js";
import "./preset-families-HrBVMIi7.js";
const m = {
	schemaVersion: 1,
	algorithm: s.SADEH_1994_ACTILIFE,
	nonwearDetectorsCounts: [...a.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...a.nonwear_detectors_ggir],
	sleepPeriodDetection: n,
	placementRuleset: t.LEGACY,
	scorerPostprocessingPreset: r.NONE,
	analysisParadigm: u(e.analysis_paradigm),
	actiwareAnalysis: {},
	actiwareRestProposal: { ...l }
}, w = new Set(Object.values(s)), g = new Set(Object.values(o)), f = new Set(Object.values(t)), P = new Set(Object.values(r));
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
