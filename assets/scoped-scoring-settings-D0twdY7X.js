import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { Gt as t, Jt as r, Rt as o, Xt as n, Yt as i, qt as s, sn as c } from "./schema-CR2XP9Ya.js";
import "./local-data-source-DogApmo3.js";
import { j as a } from "./workspace-db-ogWQfUX1.js";
import { a as u, o as l, s as d } from "./sleep-period-detection-sU39gOLg.js";
import { a as g, tn as p } from "./store-CYvH9l-K.js";
import { G as h, x as m } from "./local-nonwear-unified-CgpPYMrE.js";
import { c as f, l as _, o as w } from "./valid-day-criteria-CeSChein.js";
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
const D = c.night_start_hour, H = c.night_end_hour;
function G(e) {
	return Object.freeze({ ...e });
}
function P(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? {} : e;
}
function v(e) {
	return "string" == typeof e && e.trim().length > 0;
}
function A(e, t) {
	return "string" == typeof e && Object.values(t).includes(e);
}
function E(e) {
	return Array.isArray(e) && e.every((e) => A(e, a));
}
function R(e, t) {
	const r = E(e) ? e : t;
	return Object.freeze([...new Set(r)]);
}
function b(e, t) {
	return v(e) ? e : t;
}
function j(e, t, r) {
	return A(e, t) ? e : r;
}
function T(e) {
	const t = "number" == typeof e ? e : Number(e);
	return Number.isFinite(t) ? Math.min(1e3, Math.max(0, Math.trunc(t))) : 0;
}
function L(e, a, h, m) {
	const _ = P(m.extraSettings), S = Object.freeze(d(m.sleepPeriodDetection)), y = null != m.sleepPeriodDetection, N = _.period_guider, x = /* @__PURE__ */ new Set(), C = (e, t) => {
		t && x.add(e);
	};
	var I;
	C("algorithm", v(m.algorithm)), C("detectionRule", A(m.detectionRule, n)), C("periodGuider", y || A(N, t)), C("sleepPeriodDetection", y), C("ruleset", A(_.placement_ruleset, s)), C("scorerPostprocessingPreset", A(_.scorer_postprocessing, r)), C("nonwearDetectorsCounts", E(_.nonwear_detectors_counts)), C("nonwearDetectorsGgir", E(_.nonwear_detectors_ggir)), C("nightStartHour", v(m.nightStartHour)), C("nightEndHour", v(m.nightEndHour)), C("sensorLocation", A(m.sensorLocation ?? _.sensor_location, i)), C("nonwearThreshold", null != (I = _.nonwear_threshold) && "" !== I && Number.isFinite("number" == typeof I ? I : Number(I)));
	const F = {
		algorithm: b(m.algorithm, o.SADEH_1994_ACTILIFE),
		detectionRule: j(m.detectionRule, n, c.sleep_detection_rule),
		periodGuider: (z = S, k = N, u(z) ? j(k, t, t.SMART) : l(z)),
		sleepPeriodDetection: S,
		ruleset: j(_.placement_ruleset, s, s.LEGACY),
		scorerPostprocessingPreset: j(_.scorer_postprocessing, r, r.NONE),
		nonwearDetectorsCounts: R(_.nonwear_detectors_counts, c.nonwear_detectors_counts),
		nonwearDetectorsGgir: R(_.nonwear_detectors_ggir, c.nonwear_detectors_ggir),
		nightStartHour: b(m.nightStartHour, D),
		nightEndHour: b(m.nightEndHour, H),
		sensorLocation: j(m.sensorLocation ?? _.sensor_location, i, i.WRIST),
		nonwearThreshold: T(_.nonwear_threshold)
	};
	var z, k;
	const M = x.size > 0 ? L(e, a, h, O) : null, $ = new Set([...x].filter((e) => null === M || !function(e, t) {
		const r = (e) => JSON.stringify(Array.isArray(e) ? [...e].sort() : e);
		return r(e) === r(t);
	}(F[e], M[e])));
	return Object.freeze({
		scope: G(e),
		origin: a,
		revision: h,
		...F,
		analysisParadigm: f(_.analysis_paradigm),
		actiwareAnalysis: Object.freeze(w(_.actiware_analysis)),
		choiAxis: b(_.choi_axis, c.choi_axis),
		ggirConfig: p(_),
		ggirProcessing: Object.freeze(g(_)),
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
