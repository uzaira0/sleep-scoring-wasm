import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { $t as t, Wt as r, Zt as o, en as n, nn as i, pn as s, tn as c } from "./schema-C_b4aWdD.js";
import "./local-data-source-W07GKCwi.js";
import { M as a } from "./workspace-db-38_2RzO4.js";
import { a as u, en as l } from "./store-m6cKhgSO.js";
import { a as d, o as g, s as p } from "./sleep-period-detection-DcUVSLmD.js";
import { G as h, x as m } from "./local-nonwear-unified-CQQTMzTm.js";
import { f, p as _, u as w } from "./valid-day-criteria-CsOqBoav.js";
import { t as S } from "./file-sensor-location-D3poeAvf.js";
var y = e({
	DEFAULT_SCORING_NIGHT_END: () => H,
	DEFAULT_SCORING_NIGHT_START: () => D,
	DEFAULT_SCORING_NONWEAR_THRESHOLD: () => 0,
	autoScoreOptionsFromSettings: () => z,
	captureLocalScoringSettings: () => N,
	isSameScoringSettingsScope: () => x,
	scoringSettingsForScope: () => F
});
const D = s.night_start_hour, H = s.night_end_hour;
function G(e) {
	return Object.freeze({ ...e });
}
function P(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? {} : e;
}
function b(e) {
	return "string" == typeof e && e.trim().length > 0;
}
function v(e, t) {
	return "string" == typeof e && Object.values(t).includes(e);
}
function A(e) {
	return Array.isArray(e) && e.every((e) => v(e, a));
}
function E(e, t) {
	const r = A(e) ? e : t;
	return Object.freeze([...new Set(r)]);
}
function R(e, t) {
	return b(e) ? e : t;
}
function j(e, t, r) {
	return v(e, t) ? e : r;
}
function T(e) {
	const t = "number" == typeof e ? e : Number(e);
	return Number.isFinite(t) ? Math.min(1e3, Math.max(0, Math.trunc(t))) : 0;
}
function L(e, a, h, m) {
	const _ = P(m.extraSettings), S = Object.freeze(p(m.sleepPeriodDetection)), y = null != m.sleepPeriodDetection, N = _.period_guider, x = /* @__PURE__ */ new Set(), C = (e, t) => {
		t && x.add(e);
	};
	var I;
	C("algorithm", b(m.algorithm)), C("detectionRule", v(m.detectionRule, i)), C("periodGuider", y || v(N, o)), C("sleepPeriodDetection", y), C("ruleset", v(_.placement_ruleset, t)), C("scorerPostprocessingPreset", v(_.scorer_postprocessing, n)), C("nonwearDetectorsCounts", A(_.nonwear_detectors_counts)), C("nonwearDetectorsGgir", A(_.nonwear_detectors_ggir)), C("nightStartHour", b(m.nightStartHour)), C("nightEndHour", b(m.nightEndHour)), C("sensorLocation", v(m.sensorLocation ?? _.sensor_location, c)), C("nonwearThreshold", null != (I = _.nonwear_threshold) && "" !== I && Number.isFinite("number" == typeof I ? I : Number(I)));
	const F = {
		algorithm: R(m.algorithm, r.SADEH_1994_ACTILIFE),
		detectionRule: j(m.detectionRule, i, s.sleep_detection_rule),
		periodGuider: (z = S, M = N, d(z) ? j(M, o, o.SMART) : g(z)),
		sleepPeriodDetection: S,
		ruleset: j(_.placement_ruleset, t, t.LEGACY),
		scorerPostprocessingPreset: j(_.scorer_postprocessing, n, n.NONE),
		nonwearDetectorsCounts: E(_.nonwear_detectors_counts, s.nonwear_detectors_counts),
		nonwearDetectorsGgir: E(_.nonwear_detectors_ggir, s.nonwear_detectors_ggir),
		nightStartHour: R(m.nightStartHour, D),
		nightEndHour: R(m.nightEndHour, H),
		sensorLocation: j(m.sensorLocation ?? _.sensor_location, c, c.WRIST),
		nonwearThreshold: T(_.nonwear_threshold)
	};
	var z, M;
	const k = x.size > 0 ? L(e, a, h, O) : null, $ = new Set([...x].filter((e) => null === k || !function(e, t) {
		const r = (e) => JSON.stringify(Array.isArray(e) ? [...e].sort() : e);
		return r(e) === r(t);
	}(F[e], k[e])));
	return Object.freeze({
		scope: G(e),
		origin: a,
		revision: h,
		...F,
		analysisParadigm: f(_.analysis_paradigm),
		actiwareAnalysis: Object.freeze(w(_.actiware_analysis)),
		choiAxis: R(_.choi_axis, s.choi_axis),
		ggirConfig: l(_),
		ggirProcessing: Object.freeze(u(_)),
		placementFromSource: !1,
		declared: $
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
	const r = P(t?.extraSettings);
	return L(e, "local-indexeddb", t?.contentHash ?? null, {
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
	const o = r.resolvedCapabilities?.includes("device_wear_state_evidence_stream") ?? "unknown", n = `${r.sourceType ?? ""}|${r.sourceProfileId ?? ""}|${o}|${r.ggirBundleRevision ?? ""}`;
	let i = C.get(e);
	i || (i = /* @__PURE__ */ new Map(), C.set(e, i));
	const s = i.get(n);
	if (s) return s;
	const c = function(e, t) {
		const r = _({
			algorithm: e.algorithm,
			periodGuider: e.periodGuider,
			nonwearDetectorsCounts: e.nonwearDetectorsCounts,
			nonwearDetectorsGgir: e.nonwearDetectorsGgir
		}, e.analysisParadigm, t);
		return r.algorithm === e.algorithm && r.periodGuider === e.periodGuider && r.nonwearDetectorsCounts === e.nonwearDetectorsCounts && r.nonwearDetectorsGgir === e.nonwearDetectorsGgir && r.placementFromSource === e.placementFromSource ? e : Object.freeze({
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
		scorerPostprocessing: h(r.scorerPostprocessingPreset) ?? null,
		nonwearDetectors: "ggir" === m(o) ? r.nonwearDetectorsGgir : r.nonwearDetectorsCounts,
		sensorLocation: S(t, r.sensorLocation),
		nightStartHour: r.nightStartHour,
		nightEndHour: r.nightEndHour
	};
}
export { y as t };
