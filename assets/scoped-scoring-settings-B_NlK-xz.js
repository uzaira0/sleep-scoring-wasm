import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { $t as t, Wt as r, Zt as o, en as n, nn as i, pn as s, tn as a } from "./schema-CoLJBY5o.js";
import "./local-data-source-CH8av8Pa.js";
import { N as c } from "./workspace-db-mwmkj659.js";
import { a as u, tn as l } from "./store-CMG-u5eb.js";
import { a as d, o as g, s as p } from "./sleep-period-detection-CKwWvPPT.js";
import { K as h, x as m } from "./local-nonwear-unified-wCw73Ihu.js";
import { f, p as _, u as w, y as S } from "./valid-day-criteria-wd9cIZwC.js";
import { t as y } from "./file-sensor-location-D3poeAvf.js";
var D = e({
	DEFAULT_SCORING_NIGHT_END: () => P,
	DEFAULT_SCORING_NIGHT_START: () => H,
	DEFAULT_SCORING_NONWEAR_THRESHOLD: () => 0,
	autoScoreOptionsFromSettings: () => k,
	captureLocalScoringSettings: () => x,
	isSameScoringSettingsScope: () => C,
	scoringSettingsForScope: () => z
});
const H = s.night_start_hour, P = s.night_end_hour;
function b(e) {
	return Object.freeze({ ...e });
}
function G(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? {} : e;
}
function v(e) {
	return "string" == typeof e && e.trim().length > 0;
}
function A(e, t) {
	return "string" == typeof e && Object.values(t).includes(e);
}
function E(e) {
	return Array.isArray(e) && e.every((e) => A(e, c));
}
function R(e, t) {
	const r = E(e) ? e : t;
	return Object.freeze([...new Set(r)]);
}
function j(e, t) {
	return v(e) ? e : t;
}
function O(e, t, r) {
	return A(e, t) ? e : r;
}
function T(e) {
	const t = "number" == typeof e ? e : Number(e);
	return Number.isFinite(t) ? Math.min(1e3, Math.max(0, Math.trunc(t))) : 0;
}
function L(e, c, h, m) {
	const _ = G(m.extraSettings), y = Object.freeze(p(m.sleepPeriodDetection)), D = null != m.sleepPeriodDetection, x = _.period_guider, C = /* @__PURE__ */ new Set(), I = (e, t) => {
		t && C.add(e);
	};
	var F;
	I("algorithm", v(m.algorithm)), I("detectionRule", A(m.detectionRule, i)), I("periodGuider", D || A(x, o)), I("sleepPeriodDetection", D), I("ruleset", A(_.placement_ruleset, t)), I("scorerPostprocessingPreset", A(_.scorer_postprocessing, n)), I("nonwearDetectorsCounts", E(_.nonwear_detectors_counts)), I("nonwearDetectorsGgir", E(_.nonwear_detectors_ggir)), I("nightStartHour", v(m.nightStartHour)), I("nightEndHour", v(m.nightEndHour)), I("sensorLocation", A(m.sensorLocation ?? _.sensor_location, a)), I("nonwearThreshold", null != (F = _.nonwear_threshold) && "" !== F && Number.isFinite("number" == typeof F ? F : Number(F)));
	const z = {
		algorithm: j(m.algorithm, r.SADEH_1994_ACTILIFE),
		detectionRule: O(m.detectionRule, i, s.sleep_detection_rule),
		periodGuider: (k = y, M = x, d(k) ? O(M, o, o.SMART) : g(k)),
		sleepPeriodDetection: y,
		ruleset: O(_.placement_ruleset, t, t.LEGACY),
		scorerPostprocessingPreset: O(_.scorer_postprocessing, n, n.NONE),
		nonwearDetectorsCounts: R(_.nonwear_detectors_counts, s.nonwear_detectors_counts),
		nonwearDetectorsGgir: R(_.nonwear_detectors_ggir, s.nonwear_detectors_ggir),
		nightStartHour: j(m.nightStartHour, H),
		nightEndHour: j(m.nightEndHour, P),
		sensorLocation: O(m.sensorLocation ?? _.sensor_location, a, a.WRIST),
		nonwearThreshold: T(_.nonwear_threshold)
	};
	var k, M;
	const $ = C.size > 0 ? L(e, c, h, N) : null, K = new Set([...C].filter((e) => null === $ || !function(e, t) {
		const r = (e) => JSON.stringify(Array.isArray(e) ? [...e].sort() : e);
		return r(e) === r(t);
	}(z[e], $[e])));
	return Object.freeze({
		scope: b(e),
		origin: c,
		revision: h,
		...z,
		analysisParadigm: f(_.analysis_paradigm),
		actiwareAnalysis: Object.freeze(w(_.actiware_analysis)),
		actiwareRestProposal: Object.freeze(S(_.actiware_rest_proposal)),
		choiAxis: j(_.choi_axis, s.choi_axis),
		ggirConfig: l(_),
		ggirProcessing: Object.freeze(u(_)),
		placementFromSource: !1,
		declared: K
	});
}
const N = {
	algorithm: void 0,
	detectionRule: void 0,
	sleepPeriodDetection: void 0,
	extraSettings: void 0,
	nightStartHour: void 0,
	nightEndHour: void 0,
	sensorLocation: void 0
};
function x(e, t) {
	if ("local" !== e.sourceKey) throw new TypeError("Local scoring settings require a local scope.");
	const r = G(t?.extraSettings);
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
function C(e, t) {
	return e.sourceKey === t.sourceKey && e.workspaceId === t.workspaceId && e.actor === t.actor && e.studyId === t.studyId;
}
const I = /* @__PURE__ */ new WeakMap();
function F(e, t) {
	const r = function(e) {
		return null == e ? null : "string" == typeof e ? { sourceType: e } : e;
	}(t);
	if (!r || !r.sourceType && !r.sourceProfileId) return e;
	const o = r.resolvedCapabilities?.includes("device_wear_state_evidence_stream") ?? "unknown", n = `${r.sourceType ?? ""}|${r.sourceProfileId ?? ""}|${o}|${r.ggirBundleRevision ?? ""}`;
	let i = I.get(e);
	i || (i = /* @__PURE__ */ new Map(), I.set(e, i));
	const s = i.get(n);
	if (s) return s;
	const a = function(e, t) {
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
	return i.set(n, a), a;
}
function z(e, t, r) {
	return e && C(e.scope, t) ? F(e, r) : null;
}
function k(e, t) {
	const r = F(e, t), o = r.algorithm;
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
		sensorLocation: y(t, r.sensorLocation),
		nightStartHour: r.nightStartHour,
		nightEndHour: r.nightEndHour
	};
}
export { D as t };
