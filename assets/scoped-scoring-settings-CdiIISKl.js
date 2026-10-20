import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import { Jt as t, Kt as r, Lt as o, Ut as n, Wt as i, Yt as s, on as c, qt as a } from "./schema-DrnhCpDE.js";
import { U as u, b as l } from "./local-nonwear-unified-C_3RwQMZ.js";
import { a as d, o as g, s as p } from "./sleep-period-detection-C94kcnZY.js";
import { a as h, c as m, s as _ } from "./valid-day-criteria-DG2ecfoJ.js";
import { a as f, en as S } from "./store-B5F9spZt.js";
import "./local-data-source-D_2otkg7.js";
import { A as w } from "./local-export-worker-ByS7IIS0.js";
var y = e({
	DEFAULT_SCORING_NIGHT_END: () => H,
	DEFAULT_SCORING_NIGHT_START: () => D,
	DEFAULT_SCORING_NONWEAR_THRESHOLD: () => 0,
	autoScoreOptionsFromSettings: () => z,
	captureLocalScoringSettings: () => N,
	isSameScoringSettingsScope: () => x,
	scoringSettingsForScope: () => F
});
const D = c.night_start_hour, H = c.night_end_hour;
function P(e) {
	return Object.freeze({ ...e });
}
function A(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? {} : e;
}
function E(e) {
	return "string" == typeof e && e.trim().length > 0;
}
function b(e, t) {
	return "string" == typeof e && Object.values(t).includes(e);
}
function v(e) {
	return Array.isArray(e) && e.every((e) => b(e, n));
}
function R(e, t) {
	const r = v(e) ? e : t;
	return Object.freeze([...new Set(r)]);
}
function j(e, t) {
	return E(e) ? e : t;
}
function G(e, t, r) {
	return b(e, t) ? e : r;
}
function L(e) {
	const t = "number" == typeof e ? e : Number(e);
	return Number.isFinite(t) ? Math.min(1e3, Math.max(0, Math.trunc(t))) : 0;
}
function T(e, n, u, l) {
	const m = A(l.extraSettings), w = Object.freeze(p(l.sleepPeriodDetection)), y = null != l.sleepPeriodDetection, N = m.period_guider, x = /* @__PURE__ */ new Set(), C = (e, t) => {
		t && x.add(e);
	};
	var I;
	C("algorithm", E(l.algorithm)), C("detectionRule", b(l.detectionRule, s)), C("periodGuider", y || b(N, i)), C("sleepPeriodDetection", y), C("ruleset", b(m.placement_ruleset, r)), C("scorerPostprocessingPreset", b(m.scorer_postprocessing, a)), C("nonwearDetectorsCounts", v(m.nonwear_detectors_counts)), C("nonwearDetectorsGgir", v(m.nonwear_detectors_ggir)), C("nightStartHour", E(l.nightStartHour)), C("nightEndHour", E(l.nightEndHour)), C("sensorLocation", b(l.sensorLocation ?? m.sensor_location, t)), C("nonwearThreshold", null != (I = m.nonwear_threshold) && "" !== I && Number.isFinite("number" == typeof I ? I : Number(I)));
	const F = {
		algorithm: j(l.algorithm, o.SADEH_1994_ACTILIFE),
		detectionRule: G(l.detectionRule, s, c.sleep_detection_rule),
		periodGuider: (z = w, k = N, d(z) ? G(k, i, i.SMART) : g(z)),
		sleepPeriodDetection: w,
		ruleset: G(m.placement_ruleset, r, r.LEGACY),
		scorerPostprocessingPreset: G(m.scorer_postprocessing, a, a.NONE),
		nonwearDetectorsCounts: R(m.nonwear_detectors_counts, c.nonwear_detectors_counts),
		nonwearDetectorsGgir: R(m.nonwear_detectors_ggir, c.nonwear_detectors_ggir),
		nightStartHour: j(l.nightStartHour, D),
		nightEndHour: j(l.nightEndHour, H),
		sensorLocation: G(l.sensorLocation ?? m.sensor_location, t, t.WRIST),
		nonwearThreshold: L(m.nonwear_threshold)
	};
	var z, k;
	const M = x.size > 0 ? T(e, n, u, O) : null, U = new Set([...x].filter((e) => null === M || !function(e, t) {
		const r = (e) => JSON.stringify(Array.isArray(e) ? [...e].sort() : e);
		return r(e) === r(t);
	}(F[e], M[e])));
	return Object.freeze({
		scope: P(e),
		origin: n,
		revision: u,
		...F,
		analysisParadigm: _(m.analysis_paradigm),
		actiwareAnalysis: Object.freeze(h(m.actiware_analysis)),
		choiAxis: j(m.choi_axis, c.choi_axis),
		ggirConfig: S(m),
		ggirProcessing: Object.freeze(f(m)),
		placementFromSource: !1,
		declared: U
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
function N(e, t) {
	if ("local" !== e.sourceKey) throw new TypeError("Local scoring settings require a local scope.");
	const r = A(t?.extraSettings);
	return T(e, "local-indexeddb", t?.contentHash ?? null, {
		algorithm: t?.defaultAlgorithm,
		detectionRule: t?.sleepDetectionRule,
		sleepPeriodDetection: t?.sleepPeriodDetection ?? r.sleep_period_detection,
		extraSettings: r,
		nightStartHour: t?.nightStartHour,
		nightEndHour: t?.nightEndHour,
		sensorLocation: r.sensor_location
	});
}
function x(e, t) {
	return e.sourceKey === t.sourceKey && e.workspaceId === t.workspaceId && e.actor === t.actor && e.studyId === t.studyId;
}
const C = /* @__PURE__ */ new WeakMap();
function I(e, t) {
	const r = function(e) {
		return null == e ? null : "string" == typeof e ? { sourceType: e } : e;
	}(t);
	if (!r || !r.sourceType && !r.sourceProfileId) return e;
	const o = r.resolvedCapabilities?.includes("device_wear_state_evidence_stream") ?? "unknown", n = `${r.sourceType ?? ""}|${r.sourceProfileId ?? ""}|${o}`;
	let i = C.get(e);
	i || (i = /* @__PURE__ */ new Map(), C.set(e, i));
	const s = i.get(n);
	if (s) return s;
	const c = function(e, t) {
		const r = m({
			algorithm: e.algorithm,
			periodGuider: e.periodGuider,
			nonwearDetectorsCounts: e.nonwearDetectorsCounts
		}, e.analysisParadigm, t);
		return r.algorithm === e.algorithm && r.periodGuider === e.periodGuider && r.nonwearDetectorsCounts === e.nonwearDetectorsCounts && r.placementFromSource === e.placementFromSource ? e : Object.freeze({
			...e,
			...r
		});
	}(e, r);
	return i.set(n, c), c;
}
function F(e, t, r) {
	return e && x(e.scope, t) ? I(e, r) : null;
}
function z(e, t) {
	const r = I(e, t), o = r.algorithm;
	return {
		algorithm: o,
		choiAxis: r.choiAxis,
		hasptVariant: r.ggirProcessing.ggirHasptVariant,
		..."local-indexeddb" === r.origin ? { studySettingsRevision: r.revision } : {},
		detectionRule: r.detectionRule,
		periodGuider: r.periodGuider,
		sleepPeriodDetection: { ...r.sleepPeriodDetection },
		ruleset: r.ruleset,
		scorerPostprocessing: u(r.scorerPostprocessingPreset) ?? null,
		nonwearDetectors: "ggir" === l(o) ? r.nonwearDetectorsGgir : r.nonwearDetectorsCounts,
		sensorLocation: w(t, r.sensorLocation),
		nightStartHour: r.nightStartHour,
		nightEndHour: r.nightEndHour
	};
}
export { y as t };
