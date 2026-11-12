import { Z as e, bt as r, ct as t, it as o, lt as n, ot as i, st as s } from "./schema-CuSEBD8u.js";
import "./local-data-source-CGbZmf1D.js";
import { A as a } from "./workspace-db-DC1JGCSh.js";
import { i as c, rn as u } from "./store-D44nsaQj.js";
import { M as l, N as d, d as g, f as p, j as h, l as f, v as m } from "./per-source-defaults-BCxPLiaZ.js";
import { K as w, x as _ } from "./local-nonwear-unified-b6rWRkUf.js";
import { t as y } from "./file-sensor-location-D3poeAvf.js";
const D = r.night_start_hour, S = r.night_end_hour;
function P(e) {
	return Object.freeze({ ...e });
}
function b(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? {} : e;
}
function H(e) {
	return "string" == typeof e && e.trim().length > 0;
}
function v(e, r) {
	return "string" == typeof e && Object.values(r).includes(e);
}
function j(e) {
	return Array.isArray(e) && e.every((e) => v(e, a));
}
function A(e, r) {
	const t = j(e) ? e : r;
	return Object.freeze([...new Set(t)]);
}
function G(e, r) {
	return H(e) ? e : r;
}
function x(e, r, t) {
	return v(e, r) ? e : t;
}
function E(e) {
	const r = "number" == typeof e ? e : Number(e);
	return Number.isFinite(r) ? Math.min(1e3, Math.max(0, Math.trunc(r))) : 0;
}
function R(a, p, w, _) {
	const y = b(_.extraSettings), L = Object.freeze(d(_.sleepPeriodDetection)), O = null != _.sleepPeriodDetection, z = y.period_guider, I = /* @__PURE__ */ new Set(), T = (e, r) => {
		r && I.add(e);
	};
	var N;
	T("algorithm", H(_.algorithm)), T("detectionRule", v(_.detectionRule, n)), T("periodGuider", O || v(z, o)), T("sleepPeriodDetection", O), T("ruleset", v(y.placement_ruleset, i)), T("scorerPostprocessingPreset", v(y.scorer_postprocessing, s)), T("nonwearDetectorsCounts", j(y.nonwear_detectors_counts)), T("nonwearDetectorsGgir", j(y.nonwear_detectors_ggir)), T("nightStartHour", H(_.nightStartHour)), T("nightEndHour", H(_.nightEndHour)), T("sensorLocation", v(_.sensorLocation ?? y.sensor_location, t)), T("nonwearThreshold", null != (N = y.nonwear_threshold) && "" !== N && Number.isFinite("number" == typeof N ? N : Number(N)));
	const M = {
		algorithm: G(_.algorithm, e.SADEH_1994_ACTILIFE),
		detectionRule: x(_.detectionRule, n, r.sleep_detection_rule),
		periodGuider: (k = L, F = z, h(k) ? x(F, o, o.SMART) : l(k)),
		sleepPeriodDetection: L,
		ruleset: x(y.placement_ruleset, i, i.LEGACY),
		scorerPostprocessingPreset: x(y.scorer_postprocessing, s, s.NONE),
		nonwearDetectorsCounts: A(y.nonwear_detectors_counts, r.nonwear_detectors_counts),
		nonwearDetectorsGgir: A(y.nonwear_detectors_ggir, r.nonwear_detectors_ggir),
		nightStartHour: G(_.nightStartHour, D),
		nightEndHour: G(_.nightEndHour, S),
		sensorLocation: x(_.sensorLocation ?? y.sensor_location, t, t.WRIST),
		nonwearThreshold: E(y.nonwear_threshold)
	};
	var k, F;
	const K = I.size > 0 ? R(a, p, w, C) : null, $ = new Set([...I].filter((e) => null === K || !function(e, r) {
		const t = (e) => JSON.stringify(Array.isArray(e) ? [...e].sort() : e);
		return t(e) === t(r);
	}(M[e], K[e])));
	return Object.freeze({
		scope: P(a),
		origin: p,
		revision: w,
		...M,
		analysisParadigm: g(y.analysis_paradigm),
		actiwareAnalysis: Object.freeze(f(y.actiware_analysis)),
		actiwareRestProposal: Object.freeze(m(y.actiware_rest_proposal)),
		choiAxis: G(y.choi_axis, r.choi_axis),
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
		const t = p({
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
		scorerPostprocessing: w(t.scorerPostprocessingPreset) ?? null,
		nonwearDetectors: "ggir" === _(o) ? t.nonwearDetectorsGgir : t.nonwearDetectorsCounts,
		sensorLocation: y(r, t.sensorLocation),
		nightStartHour: t.nightStartHour,
		nightEndHour: t.nightEndHour
	};
}
export { T as autoScoreOptionsFromSettings, L as captureLocalScoringSettings, I as scoringSettingsForScope };
