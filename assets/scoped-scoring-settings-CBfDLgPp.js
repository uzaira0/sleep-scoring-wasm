import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { $t as t, Wt as r, Zt as o, en as n, nn as i, pn as s, tn as a } from "./schema-pjCtvTl3.js";
import "./local-data-source-JzDPSUga.js";
import { j as c } from "./workspace-db-BGLMk_xQ.js";
import { $t as u, a as l } from "./store-BKMHiWc9.js";
import { a as d, o as g, s as p } from "./sleep-period-detection-fRVpitfd.js";
import { K as h, x as m } from "./local-nonwear-unified-BaLzJ0A4.js";
import { d as f, f as _, l as w, v as S } from "./valid-day-criteria-DA1LBKOr.js";
import { t as y } from "./file-sensor-location-D3poeAvf.js";
var D = e({
	DEFAULT_SCORING_NIGHT_END: () => P,
	DEFAULT_SCORING_NIGHT_START: () => H,
	DEFAULT_SCORING_NONWEAR_THRESHOLD: () => 0,
	autoScoreOptionsFromSettings: () => M,
	captureLocalScoringSettings: () => x,
	isSameScoringSettingsScope: () => C,
	scoringSettingsForScope: () => z
});
const H = s.night_start_hour, P = s.night_end_hour;
function v(e) {
	return Object.freeze({ ...e });
}
function G(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? {} : e;
}
function b(e) {
	return "string" == typeof e && e.trim().length > 0;
}
function j(e, t) {
	return "string" == typeof e && Object.values(t).includes(e);
}
function A(e) {
	return Array.isArray(e) && e.every((e) => j(e, c));
}
function E(e, t) {
	const r = A(e) ? e : t;
	return Object.freeze([...new Set(r)]);
}
function R(e, t) {
	return b(e) ? e : t;
}
function O(e, t, r) {
	return j(e, t) ? e : r;
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
	I("algorithm", b(m.algorithm)), I("detectionRule", j(m.detectionRule, i)), I("periodGuider", D || j(x, o)), I("sleepPeriodDetection", D), I("ruleset", j(_.placement_ruleset, t)), I("scorerPostprocessingPreset", j(_.scorer_postprocessing, n)), I("nonwearDetectorsCounts", A(_.nonwear_detectors_counts)), I("nonwearDetectorsGgir", A(_.nonwear_detectors_ggir)), I("nightStartHour", b(m.nightStartHour)), I("nightEndHour", b(m.nightEndHour)), I("sensorLocation", j(m.sensorLocation ?? _.sensor_location, a)), I("nonwearThreshold", null != (F = _.nonwear_threshold) && "" !== F && Number.isFinite("number" == typeof F ? F : Number(F)));
	const z = {
		algorithm: R(m.algorithm, r.SADEH_1994_ACTILIFE),
		detectionRule: O(m.detectionRule, i, s.sleep_detection_rule),
		periodGuider: (M = y, $ = x, d(M) ? O($, o, o.SMART) : g(M)),
		sleepPeriodDetection: y,
		ruleset: O(_.placement_ruleset, t, t.LEGACY),
		scorerPostprocessingPreset: O(_.scorer_postprocessing, n, n.NONE),
		nonwearDetectorsCounts: E(_.nonwear_detectors_counts, s.nonwear_detectors_counts),
		nonwearDetectorsGgir: E(_.nonwear_detectors_ggir, s.nonwear_detectors_ggir),
		nightStartHour: R(m.nightStartHour, H),
		nightEndHour: R(m.nightEndHour, P),
		sensorLocation: O(m.sensorLocation ?? _.sensor_location, a, a.WRIST),
		nonwearThreshold: T(_.nonwear_threshold)
	};
	var M, $;
	const k = C.size > 0 ? L(e, c, h, N) : null, K = new Set([...C].filter((e) => null === k || !function(e, t) {
		const r = (e) => JSON.stringify(Array.isArray(e) ? [...e].sort() : e);
		return r(e) === r(t);
	}(z[e], k[e])));
	return Object.freeze({
		scope: v(e),
		origin: c,
		revision: h,
		...z,
		analysisParadigm: f(_.analysis_paradigm),
		actiwareAnalysis: Object.freeze(w(_.actiware_analysis)),
		actiwareRestProposal: Object.freeze(S(_.actiware_rest_proposal)),
		choiAxis: R(_.choi_axis, s.choi_axis),
		ggirConfig: u(_),
		ggirProcessing: Object.freeze(l(_)),
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
function M(e, t) {
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
