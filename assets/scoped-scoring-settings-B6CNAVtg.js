import { Yt as e, an as r, in as t, nn as o, on as n, sn as i, vn as s } from "./schema-B_tCLPTi.js";
import "./local-data-source-cNqRZhf9.js";
import { M as a } from "./workspace-db-C0mqPCjA.js";
import { a as c, rn as u } from "./store-DM814ES4.js";
import { a as l, o as d, s as g } from "./sleep-period-detection-DACRcT22.js";
import { K as p, x as h } from "./local-nonwear-unified-BxFayBM2.js";
import { f, p as m, u as w, y as _ } from "./valid-day-criteria-BvWW5KT6.js";
import { t as y } from "./file-sensor-location-D3poeAvf.js";
const D = s.night_start_hour, S = s.night_end_hour;
function P(e) {
	return Object.freeze({ ...e });
}
function b(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? {} : e;
}
function v(e) {
	return "string" == typeof e && e.trim().length > 0;
}
function H(e, r) {
	return "string" == typeof e && Object.values(r).includes(e);
}
function j(e) {
	return Array.isArray(e) && e.every((e) => H(e, a));
}
function G(e, r) {
	const t = j(e) ? e : r;
	return Object.freeze([...new Set(t)]);
}
function A(e, r) {
	return v(e) ? e : r;
}
function x(e, r, t) {
	return H(e, r) ? e : t;
}
function E(e) {
	const r = "number" == typeof e ? e : Number(e);
	return Number.isFinite(r) ? Math.min(1e3, Math.max(0, Math.trunc(r))) : 0;
}
function R(a, p, h, m) {
	const y = b(m.extraSettings), L = Object.freeze(g(m.sleepPeriodDetection)), O = null != m.sleepPeriodDetection, z = y.period_guider, I = /* @__PURE__ */ new Set(), T = (e, r) => {
		r && I.add(e);
	};
	var M;
	T("algorithm", v(m.algorithm)), T("detectionRule", H(m.detectionRule, i)), T("periodGuider", O || H(z, o)), T("sleepPeriodDetection", O), T("ruleset", H(y.placement_ruleset, t)), T("scorerPostprocessingPreset", H(y.scorer_postprocessing, r)), T("nonwearDetectorsCounts", j(y.nonwear_detectors_counts)), T("nonwearDetectorsGgir", j(y.nonwear_detectors_ggir)), T("nightStartHour", v(m.nightStartHour)), T("nightEndHour", v(m.nightEndHour)), T("sensorLocation", H(m.sensorLocation ?? y.sensor_location, n)), T("nonwearThreshold", null != (M = y.nonwear_threshold) && "" !== M && Number.isFinite("number" == typeof M ? M : Number(M)));
	const N = {
		algorithm: A(m.algorithm, e.SADEH_1994_ACTILIFE),
		detectionRule: x(m.detectionRule, i, s.sleep_detection_rule),
		periodGuider: (k = L, F = z, l(k) ? x(F, o, o.SMART) : d(k)),
		sleepPeriodDetection: L,
		ruleset: x(y.placement_ruleset, t, t.LEGACY),
		scorerPostprocessingPreset: x(y.scorer_postprocessing, r, r.NONE),
		nonwearDetectorsCounts: G(y.nonwear_detectors_counts, s.nonwear_detectors_counts),
		nonwearDetectorsGgir: G(y.nonwear_detectors_ggir, s.nonwear_detectors_ggir),
		nightStartHour: A(m.nightStartHour, D),
		nightEndHour: A(m.nightEndHour, S),
		sensorLocation: x(m.sensorLocation ?? y.sensor_location, n, n.WRIST),
		nonwearThreshold: E(y.nonwear_threshold)
	};
	var k, F;
	const K = I.size > 0 ? R(a, p, h, C) : null, $ = new Set([...I].filter((e) => null === K || !function(e, r) {
		const t = (e) => JSON.stringify(Array.isArray(e) ? [...e].sort() : e);
		return t(e) === t(r);
	}(N[e], K[e])));
	return Object.freeze({
		scope: P(a),
		origin: p,
		revision: h,
		...N,
		analysisParadigm: f(y.analysis_paradigm),
		actiwareAnalysis: Object.freeze(w(y.actiware_analysis)),
		actiwareRestProposal: Object.freeze(_(y.actiware_rest_proposal)),
		choiAxis: A(y.choi_axis, s.choi_axis),
		ggirConfig: u(y),
		ggirProcessing: Object.freeze(c(y)),
		placementFromSource: !1,
		declared: $
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
function L(e, r) {
	if ("local" !== e.sourceKey) throw new TypeError("Local scoring settings require a local scope.");
	const t = b(r?.extraSettings);
	return R(e, "local-indexeddb", r?.contentHash ?? null, {
		algorithm: r?.defaultAlgorithm,
		detectionRule: r?.sleepDetectionRule,
		sleepPeriodDetection: r?.sleepPeriodDetection ?? t.sleep_period_detection,
		extraSettings: t,
		nightStartHour: r?.nightStartHour,
		nightEndHour: r?.nightEndHour,
		sensorLocation: t.sensor_location
	});
}
const O = /* @__PURE__ */ new WeakMap();
function z(e, r) {
	const t = function(e) {
		return null == e ? null : "string" == typeof e ? { sourceType: e } : e;
	}(r);
	if (!t || !t.sourceType && !t.sourceProfileId) return e;
	const o = t.resolvedCapabilities?.includes("device_wear_state_evidence_stream") ?? "unknown", n = `${t.sourceType ?? ""}|${t.sourceProfileId ?? ""}|${o}|${t.ggirBundleRevision ?? ""}`;
	let i = O.get(e);
	i || (i = /* @__PURE__ */ new Map(), O.set(e, i));
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
function I(e, r, t) {
	return e && (n = r, (o = e.scope).sourceKey === n.sourceKey && o.workspaceId === n.workspaceId && o.actor === n.actor && o.studyId === n.studyId) ? z(e, t) : null;
	var o, n;
}
function T(e, r) {
	const t = z(e, r), o = t.algorithm;
	return {
		algorithm: o,
		choiAxis: t.choiAxis,
		hasptVariant: t.ggirProcessing.ggirHasptVariant,
		..."local-indexeddb" === t.origin ? { studySettingsRevision: t.revision } : {},
		detectionRule: t.detectionRule,
		periodGuider: t.periodGuider,
		sleepPeriodDetection: { ...t.sleepPeriodDetection },
		ruleset: t.ruleset,
		scorerPostprocessing: p(t.scorerPostprocessingPreset) ?? null,
		nonwearDetectors: "ggir" === h(o) ? t.nonwearDetectorsGgir : t.nonwearDetectorsCounts,
		sensorLocation: y(r, t.sensorLocation),
		nightStartHour: t.nightStartHour,
		nightEndHour: t.nightEndHour
	};
}
export { T as autoScoreOptionsFromSettings, L as captureLocalScoringSettings, I as scoringSettingsForScope };
