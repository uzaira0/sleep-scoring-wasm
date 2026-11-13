import { Cn as e, dn as r, en as t, fn as o, ln as n, sn as i, un as s } from "./schema-DEVpUo98.js";
import "./local-data-source-DZZoA7_-.js";
import { M as a } from "./workspace-db-n_HVAtxY.js";
import { $t as c, i as u, on as l } from "./store-DN0rdLR0.js";
import { B as d, G as g, K as p, W as h, f, p as m, u as _, y as w } from "./per-source-defaults-CJytpFGg.js";
import { x as y } from "./local-nonwear-unified-Bs7SoZSf.js";
import { t as D } from "./file-sensor-location-D3poeAvf.js";
import "./scoring-recipe-Mk0kgnkr.js";
const S = e.night_start_hour, P = e.night_end_hour;
function b(e) {
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
function C(a, d, m, y) {
	const D = v(y.extraSettings), z = Object.freeze(p(y.sleepPeriodDetection)), L = null != y.sleepPeriodDetection, I = D.period_guider, T = /* @__PURE__ */ new Set(), M = (e, r) => {
		r && T.add(e);
	};
	var N;
	M("algorithm", H(y.algorithm)), M("detectionRule", j(y.detectionRule, o)), M("periodGuider", L || j(I, i)), M("sleepPeriodDetection", L), M("ruleset", j(D.placement_ruleset, n)), M("scorerPostprocessingPreset", j(D.scorer_postprocessing, s)), M("nonwearDetectorsCounts", G(D.nonwear_detectors_counts)), M("nonwearDetectorsGgir", G(D.nonwear_detectors_ggir)), M("nightStartHour", H(y.nightStartHour)), M("nightEndHour", H(y.nightEndHour)), M("sensorLocation", j(y.sensorLocation ?? D.sensor_location, r)), M("nonwearThreshold", null != (N = D.nonwear_threshold) && "" !== N && Number.isFinite("number" == typeof N ? N : Number(N)));
	const k = {
		algorithm: x(y.algorithm, t.SADEH_1994_ACTILIFE),
		detectionRule: E(y.detectionRule, o, e.sleep_detection_rule),
		periodGuider: (F = z, $ = I, h(F) ? E($, i, i.SMART) : g(F)),
		sleepPeriodDetection: z,
		ruleset: E(D.placement_ruleset, n, n.LEGACY),
		scorerPostprocessingPreset: E(D.scorer_postprocessing, s, s.NONE),
		nonwearDetectorsCounts: A(D.nonwear_detectors_counts, e.nonwear_detectors_counts),
		nonwearDetectorsGgir: A(D.nonwear_detectors_ggir, e.nonwear_detectors_ggir),
		nightStartHour: x(y.nightStartHour, S),
		nightEndHour: x(y.nightEndHour, P),
		sensorLocation: E(y.sensorLocation ?? D.sensor_location, r, r.WRIST),
		nonwearThreshold: R(D.nonwear_threshold)
	};
	var F, $;
	const K = T.size > 0 ? C(a, d, m, O) : null, W = new Set([...T].filter((e) => null === K || !function(e, r) {
		const t = (e) => JSON.stringify(Array.isArray(e) ? [...e].sort() : e);
		return t(e) === t(r);
	}(k[e], K[e])));
	return Object.freeze({
		scope: b(a),
		origin: d,
		revision: m,
		...k,
		analysisParadigm: f(D.analysis_paradigm),
		actiwareAnalysis: Object.freeze(_(D.actiware_analysis)),
		actiwareRestProposal: Object.freeze(w(D.actiware_rest_proposal)),
		choiAxis: x(D.choi_axis, e.choi_axis),
		ggirConfig: l(D),
		ggirProcessing: Object.freeze(u(D)),
		validDayCriteria: Object.freeze(c(D.valid_day_criteria)),
		placementFromSource: !1,
		declared: W
	});
}
const O = {
	algorithm: void 0,
	detectionRule: void 0,
	sleepPeriodDetection: void 0,
	extraSettings: void 0,
	nightStartHour: void 0,
	nightEndHour: void 0,
	sensorLocation: void 0
};
function z(e, r) {
	if ("local" !== e.sourceKey) throw new TypeError("Local scoring settings require a local scope.");
	const t = v(r?.extraSettings);
	return C(e, "local-indexeddb", r?.contentHash ?? null, {
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
		const t = m({
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
function M(e, r) {
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
		scorerPostprocessing: d(t.scorerPostprocessingPreset) ?? null,
		nonwearDetectors: "ggir" === y(o) ? t.nonwearDetectorsGgir : t.nonwearDetectorsCounts,
		sensorLocation: D(r, t.sensorLocation),
		nightStartHour: t.nightStartHour,
		nightEndHour: t.nightEndHour
	};
}
export { M as autoScoreOptionsFromSettings, z as captureLocalScoringSettings, T as scoringSettingsForScope };
