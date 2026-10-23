import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import { Jt as t, Kt as r, Lt as o, Ut as n, Wt as i, Yt as s, on as c, qt as a } from "./schema-CYmiFjVW.js";
import "./local-data-source-B5-YQGE9.js";
import { a as u, o as l, s as d } from "./sleep-period-detection-CMDjTrts.js";
import { U as g, b as p } from "./local-nonwear-unified-BeW-PETB.js";
import { a as h, c as m, s as _ } from "./valid-day-criteria-BvCKhd-p.js";
import { $t as f, a as S } from "./store-DoL1akY8.js";
import { I as w } from "./local-export-worker-Da4k1lUL.js";
var y = e({
	DEFAULT_SCORING_NIGHT_END: () => H,
	DEFAULT_SCORING_NIGHT_START: () => D,
	DEFAULT_SCORING_NONWEAR_THRESHOLD: () => 0,
	autoScoreOptionsFromSettings: () => z,
	captureLocalScoringSettings: () => I,
	isSameScoringSettingsScope: () => N,
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
function j(e, t) {
	const r = v(e) ? e : t;
	return Object.freeze([...new Set(r)]);
}
function R(e, t) {
	return E(e) ? e : t;
}
function G(e, t, r) {
	return b(e, t) ? e : r;
}
function L(e) {
	const t = "number" == typeof e ? e : Number(e);
	return Number.isFinite(t) ? Math.min(1e3, Math.max(0, Math.trunc(t))) : 0;
}
function T(e, n, g, p) {
	const m = A(p.extraSettings), w = Object.freeze(d(p.sleepPeriodDetection)), y = null != p.sleepPeriodDetection, I = m.period_guider, N = /* @__PURE__ */ new Set(), x = (e, t) => {
		t && N.add(e);
	};
	var C;
	x("algorithm", E(p.algorithm)), x("detectionRule", b(p.detectionRule, s)), x("periodGuider", y || b(I, i)), x("sleepPeriodDetection", y), x("ruleset", b(m.placement_ruleset, r)), x("scorerPostprocessingPreset", b(m.scorer_postprocessing, a)), x("nonwearDetectorsCounts", v(m.nonwear_detectors_counts)), x("nonwearDetectorsGgir", v(m.nonwear_detectors_ggir)), x("nightStartHour", E(p.nightStartHour)), x("nightEndHour", E(p.nightEndHour)), x("sensorLocation", b(p.sensorLocation ?? m.sensor_location, t)), x("nonwearThreshold", null != (C = m.nonwear_threshold) && "" !== C && Number.isFinite("number" == typeof C ? C : Number(C)));
	const F = {
		algorithm: R(p.algorithm, o.SADEH_1994_ACTILIFE),
		detectionRule: G(p.detectionRule, s, c.sleep_detection_rule),
		periodGuider: (z = w, k = I, u(z) ? G(k, i, i.SMART) : l(z)),
		sleepPeriodDetection: w,
		ruleset: G(m.placement_ruleset, r, r.LEGACY),
		scorerPostprocessingPreset: G(m.scorer_postprocessing, a, a.NONE),
		nonwearDetectorsCounts: j(m.nonwear_detectors_counts, c.nonwear_detectors_counts),
		nonwearDetectorsGgir: j(m.nonwear_detectors_ggir, c.nonwear_detectors_ggir),
		nightStartHour: R(p.nightStartHour, D),
		nightEndHour: R(p.nightEndHour, H),
		sensorLocation: G(p.sensorLocation ?? m.sensor_location, t, t.WRIST),
		nonwearThreshold: L(m.nonwear_threshold)
	};
	var z, k;
	const M = N.size > 0 ? T(e, n, g, O) : null, U = new Set([...N].filter((e) => null === M || !function(e, t) {
		const r = (e) => JSON.stringify(Array.isArray(e) ? [...e].sort() : e);
		return r(e) === r(t);
	}(F[e], M[e])));
	return Object.freeze({
		scope: P(e),
		origin: n,
		revision: g,
		...F,
		analysisParadigm: _(m.analysis_paradigm),
		actiwareAnalysis: Object.freeze(h(m.actiware_analysis)),
		choiAxis: R(m.choi_axis, c.choi_axis),
		ggirConfig: f(m),
		ggirProcessing: Object.freeze(S(m)),
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
function I(e, t) {
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
function N(e, t) {
	return e.sourceKey === t.sourceKey && e.workspaceId === t.workspaceId && e.actor === t.actor && e.studyId === t.studyId;
}
const x = /* @__PURE__ */ new WeakMap();
function C(e, t) {
	const r = function(e) {
		return null == e ? null : "string" == typeof e ? { sourceType: e } : e;
	}(t);
	if (!r || !r.sourceType && !r.sourceProfileId) return e;
	const o = r.resolvedCapabilities?.includes("device_wear_state_evidence_stream") ?? "unknown", n = `${r.sourceType ?? ""}|${r.sourceProfileId ?? ""}|${o}`;
	let i = x.get(e);
	i || (i = /* @__PURE__ */ new Map(), x.set(e, i));
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
	return e && N(e.scope, t) ? C(e, r) : null;
}
function z(e, t) {
	const r = C(e, t), o = r.algorithm;
	return {
		algorithm: o,
		choiAxis: r.choiAxis,
		hasptVariant: r.ggirProcessing.ggirHasptVariant,
		..."local-indexeddb" === r.origin ? { studySettingsRevision: r.revision } : {},
		detectionRule: r.detectionRule,
		periodGuider: r.periodGuider,
		sleepPeriodDetection: { ...r.sleepPeriodDetection },
		ruleset: r.ruleset,
		scorerPostprocessing: g(r.scorerPostprocessingPreset) ?? null,
		nonwearDetectors: "ggir" === p(o) ? r.nonwearDetectorsGgir : r.nonwearDetectorsCounts,
		sensorLocation: w(t, r.sensorLocation),
		nightStartHour: r.nightStartHour,
		nightEndHour: r.nightEndHour
	};
}
export { y as t };
