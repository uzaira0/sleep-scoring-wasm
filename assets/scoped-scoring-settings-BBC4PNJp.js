import { Z as e, bt as r, ct as t, it as o, lt as n, ot as i, st as s } from "./schema-Bbr1Zg5F.js";
import "./local-data-source-DPqi7r7Q.js";
import { A as a } from "./workspace-db-BEYycimi.js";
import { Zt as c, i as u, in as l } from "./store-JiWMTGuM.js";
import { G as d, U as g, W as p, d as h, f, l as m, v as _, z as w } from "./per-source-defaults-DGxXQBbZ.js";
import { x as y } from "./local-nonwear-unified-9vIGfRaW.js";
import { t as D } from "./file-sensor-location-D3poeAvf.js";
import "./scoring-recipe-CPXt67vH.js";
const S = r.night_start_hour, b = r.night_end_hour;
function P(e) {
	return Object.freeze({ ...e });
}
function v(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? {} : e;
}
function H(e) {
	return "string" == typeof e && e.trim().length > 0;
}
function j(e, r) {
	return "string" == typeof e && Object.values(r).includes(e);
}
function G(e) {
	return Array.isArray(e) && e.every((e) => j(e, a));
}
function A(e, r) {
	const t = G(e) ? e : r;
	return Object.freeze([...new Set(t)]);
}
function x(e, r) {
	return H(e) ? e : r;
}
function E(e, r, t) {
	return j(e, r) ? e : t;
}
function R(e) {
	const r = "number" == typeof e ? e : Number(e);
	return Number.isFinite(r) ? Math.min(1e3, Math.max(0, Math.trunc(r))) : 0;
}
function z(a, f, w, y) {
	const D = v(y.extraSettings), O = Object.freeze(d(y.sleepPeriodDetection)), L = null != y.sleepPeriodDetection, I = D.period_guider, T = /* @__PURE__ */ new Set(), N = (e, r) => {
		r && T.add(e);
	};
	var k;
	N("algorithm", H(y.algorithm)), N("detectionRule", j(y.detectionRule, n)), N("periodGuider", L || j(I, o)), N("sleepPeriodDetection", L), N("ruleset", j(D.placement_ruleset, i)), N("scorerPostprocessingPreset", j(D.scorer_postprocessing, s)), N("nonwearDetectorsCounts", G(D.nonwear_detectors_counts)), N("nonwearDetectorsGgir", G(D.nonwear_detectors_ggir)), N("nightStartHour", H(y.nightStartHour)), N("nightEndHour", H(y.nightEndHour)), N("sensorLocation", j(y.sensorLocation ?? D.sensor_location, t)), N("nonwearThreshold", null != (k = D.nonwear_threshold) && "" !== k && Number.isFinite("number" == typeof k ? k : Number(k)));
	const F = {
		algorithm: x(y.algorithm, e.SADEH_1994_ACTILIFE),
		detectionRule: E(y.detectionRule, n, r.sleep_detection_rule),
		periodGuider: (M = O, $ = I, g(M) ? E($, o, o.SMART) : p(M)),
		sleepPeriodDetection: O,
		ruleset: E(D.placement_ruleset, i, i.LEGACY),
		scorerPostprocessingPreset: E(D.scorer_postprocessing, s, s.NONE),
		nonwearDetectorsCounts: A(D.nonwear_detectors_counts, r.nonwear_detectors_counts),
		nonwearDetectorsGgir: A(D.nonwear_detectors_ggir, r.nonwear_detectors_ggir),
		nightStartHour: x(y.nightStartHour, S),
		nightEndHour: x(y.nightEndHour, b),
		sensorLocation: E(y.sensorLocation ?? D.sensor_location, t, t.WRIST),
		nonwearThreshold: R(D.nonwear_threshold)
	};
	var M, $;
	const K = T.size > 0 ? z(a, f, w, C) : null, W = new Set([...T].filter((e) => null === K || !function(e, r) {
		const t = (e) => JSON.stringify(Array.isArray(e) ? [...e].sort() : e);
		return t(e) === t(r);
	}(F[e], K[e])));
	return Object.freeze({
		scope: P(a),
		origin: f,
		revision: w,
		...F,
		analysisParadigm: h(D.analysis_paradigm),
		actiwareAnalysis: Object.freeze(m(D.actiware_analysis)),
		actiwareRestProposal: Object.freeze(_(D.actiware_rest_proposal)),
		choiAxis: x(D.choi_axis, r.choi_axis),
		ggirConfig: l(D),
		ggirProcessing: Object.freeze(u(D)),
		validDayCriteria: Object.freeze(c(D.valid_day_criteria)),
		placementFromSource: !1,
		declared: W
	});
}
const C = {
	algorithm: void 0,
	detectionRule: void 0,
	sleepPeriodDetection: void 0,
	extraSettings: void 0,
	nightStartHour: void 0,
	nightEndHour: void 0,
	sensorLocation: void 0
};
function O(e, r) {
	if ("local" !== e.sourceKey) throw new TypeError("Local scoring settings require a local scope.");
	const t = v(r?.extraSettings);
	return z(e, "local-indexeddb", r?.contentHash ?? null, {
		algorithm: r?.defaultAlgorithm,
		detectionRule: r?.sleepDetectionRule,
		sleepPeriodDetection: r?.sleepPeriodDetection ?? t.sleep_period_detection,
		extraSettings: t,
		nightStartHour: r?.nightStartHour,
		nightEndHour: r?.nightEndHour,
		sensorLocation: t.sensor_location
	});
}
const L = /* @__PURE__ */ new WeakMap();
function I(e, r) {
	const t = function(e) {
		return null == e ? null : "string" == typeof e ? { sourceType: e } : e;
	}(r);
	if (!t || !t.sourceType && !t.sourceProfileId) return e;
	const o = t.resolvedCapabilities?.includes("device_wear_state_evidence_stream") ?? "unknown", n = `${t.sourceType ?? ""}|${t.sourceProfileId ?? ""}|${o}|${t.ggirBundleRevision ?? ""}`;
	let i = L.get(e);
	i || (i = /* @__PURE__ */ new Map(), L.set(e, i));
	const s = i.get(n);
	if (s) return s;
	const a = function(e, r) {
		const t = f({
			algorithm: e.algorithm,
			periodGuider: e.periodGuider,
			nonwearDetectorsCounts: e.nonwearDetectorsCounts,
			nonwearDetectorsGgir: e.nonwearDetectorsGgir
		}, e.analysisParadigm, r);
		return t.algorithm === e.algorithm && t.periodGuider === e.periodGuider && t.nonwearDetectorsCounts === e.nonwearDetectorsCounts && t.nonwearDetectorsGgir === e.nonwearDetectorsGgir && t.placementFromSource === e.placementFromSource ? e : Object.freeze({
			...e,
			...t
		});
	}(e, t);
	return i.set(n, a), a;
}
function T(e, r, t) {
	return e && (n = r, (o = e.scope).sourceKey === n.sourceKey && o.workspaceId === n.workspaceId && o.actor === n.actor && o.studyId === n.studyId) ? I(e, t) : null;
	var o, n;
}
function N(e, r) {
	const t = I(e, r), o = t.algorithm;
	return {
		algorithm: o,
		choiAxis: t.choiAxis,
		hasptVariant: t.ggirProcessing.ggirHasptVariant,
		..."local-indexeddb" === t.origin ? { studySettingsRevision: t.revision } : {},
		detectionRule: t.detectionRule,
		periodGuider: t.periodGuider,
		sleepPeriodDetection: { ...t.sleepPeriodDetection },
		ruleset: t.ruleset,
		scorerPostprocessing: w(t.scorerPostprocessingPreset) ?? null,
		nonwearDetectors: "ggir" === y(o) ? t.nonwearDetectorsGgir : t.nonwearDetectorsCounts,
		sensorLocation: D(r, t.sensorLocation),
		nightStartHour: t.nightStartHour,
		nightEndHour: t.nightEndHour
	};
}
export { N as autoScoreOptionsFromSettings, O as captureLocalScoringSettings, T as scoringSettingsForScope };
