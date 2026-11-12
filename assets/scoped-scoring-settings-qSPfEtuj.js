import { $t as e, Sn as r, cn as t, dn as o, ln as n, on as i, un as s } from "./schema-BhIoHe9M.js";
import "./local-data-source-ABkTdWMs.js";
import { M as a } from "./workspace-db-B23VU-DP.js";
import { an as c, i as u } from "./store-B8Nrfol3.js";
import { M as l, N as d, P as g, f as p, p as h, u as f, y as m } from "./per-source-defaults-aJZ8Uk6V.js";
import { K as w, x as _ } from "./local-nonwear-unified-M0U_VgvH.js";
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
function G(e, r) {
	const t = j(e) ? e : r;
	return Object.freeze([...new Set(t)]);
}
function A(e, r) {
	return H(e) ? e : r;
}
function x(e, r, t) {
	return v(e, r) ? e : t;
}
function E(e) {
	const r = "number" == typeof e ? e : Number(e);
	return Number.isFinite(r) ? Math.min(1e3, Math.max(0, Math.trunc(r))) : 0;
}
function R(a, h, w, _) {
	const y = b(_.extraSettings), L = Object.freeze(g(_.sleepPeriodDetection)), O = null != _.sleepPeriodDetection, z = y.period_guider, I = /* @__PURE__ */ new Set(), T = (e, r) => {
		r && I.add(e);
	};
	var M;
	T("algorithm", H(_.algorithm)), T("detectionRule", v(_.detectionRule, o)), T("periodGuider", O || v(z, i)), T("sleepPeriodDetection", O), T("ruleset", v(y.placement_ruleset, t)), T("scorerPostprocessingPreset", v(y.scorer_postprocessing, n)), T("nonwearDetectorsCounts", j(y.nonwear_detectors_counts)), T("nonwearDetectorsGgir", j(y.nonwear_detectors_ggir)), T("nightStartHour", H(_.nightStartHour)), T("nightEndHour", H(_.nightEndHour)), T("sensorLocation", v(_.sensorLocation ?? y.sensor_location, s)), T("nonwearThreshold", null != (M = y.nonwear_threshold) && "" !== M && Number.isFinite("number" == typeof M ? M : Number(M)));
	const N = {
		algorithm: A(_.algorithm, e.SADEH_1994_ACTILIFE),
		detectionRule: x(_.detectionRule, o, r.sleep_detection_rule),
		periodGuider: (k = L, F = z, l(k) ? x(F, i, i.SMART) : d(k)),
		sleepPeriodDetection: L,
		ruleset: x(y.placement_ruleset, t, t.LEGACY),
		scorerPostprocessingPreset: x(y.scorer_postprocessing, n, n.NONE),
		nonwearDetectorsCounts: G(y.nonwear_detectors_counts, r.nonwear_detectors_counts),
		nonwearDetectorsGgir: G(y.nonwear_detectors_ggir, r.nonwear_detectors_ggir),
		nightStartHour: A(_.nightStartHour, D),
		nightEndHour: A(_.nightEndHour, S),
		sensorLocation: x(_.sensorLocation ?? y.sensor_location, s, s.WRIST),
		nonwearThreshold: E(y.nonwear_threshold)
	};
	var k, F;
	const $ = I.size > 0 ? R(a, h, w, C) : null, K = new Set([...I].filter((e) => null === $ || !function(e, r) {
		const t = (e) => JSON.stringify(Array.isArray(e) ? [...e].sort() : e);
		return t(e) === t(r);
	}(N[e], $[e])));
	return Object.freeze({
		scope: P(a),
		origin: h,
		revision: w,
		...N,
		analysisParadigm: p(y.analysis_paradigm),
		actiwareAnalysis: Object.freeze(f(y.actiware_analysis)),
		actiwareRestProposal: Object.freeze(m(y.actiware_rest_proposal)),
		choiAxis: A(y.choi_axis, r.choi_axis),
		ggirConfig: c(y),
		ggirProcessing: Object.freeze(u(y)),
		placementFromSource: !1,
		declared: K
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
		const t = h({
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
