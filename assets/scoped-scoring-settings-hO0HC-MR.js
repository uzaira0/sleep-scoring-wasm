import { dn as e, en as r, fn as t, ln as o, sn as n, un as i, wn as s } from "./schema-MMK46mR-.js";
import { j as a } from "./workspace-db-YhWSrcvp.js";
import "./local-data-source-63fZkIbT.js";
import { Zt as c, i as u, nn as l } from "./store-CGm5oa9P.js";
import { J as d, S as g, U as p, Y as h, f, h as m, m as w, q as _ } from "./per-source-defaults-CxbMEjO8.js";
import { x as y } from "./local-nonwear-unified-BZU1ydsO.js";
import { t as D } from "./file-sensor-location-D3poeAvf.js";
import "./scoring-recipe-Bj-pitth.js";
const S = s.night_start_hour, P = s.night_end_hour;
function b(e) {
	return Object.freeze({ ...e });
}
function j(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? {} : e;
}
function H(e) {
	return "string" == typeof e && e.trim().length > 0;
}
function v(e, r) {
	return "string" == typeof e && Object.values(r).includes(e);
}
function G(e) {
	return Array.isArray(e) && e.every((e) => v(e, a));
}
function A(e, r) {
	const t = G(e) ? e : r;
	return Object.freeze([...new Set(t)]);
}
function E(e, r) {
	return H(e) ? e : r;
}
function x(e, r, t) {
	return v(e, r) ? e : t;
}
function R(e) {
	const r = "number" == typeof e ? e : Number(e);
	return Number.isFinite(r) ? Math.min(1e3, Math.max(0, Math.trunc(r))) : 0;
}
function C(a, p, m, y) {
	const D = j(y.extraSettings), L = Object.freeze(h(y.sleepPeriodDetection)), z = null != y.sleepPeriodDetection, I = D.period_guider, T = /* @__PURE__ */ new Set(), N = (e, r) => {
		r && T.add(e);
	};
	var F;
	N("algorithm", H(y.algorithm)), N("detectionRule", v(y.detectionRule, t)), N("periodGuider", z || v(I, n)), N("sleepPeriodDetection", z), N("ruleset", v(D.placement_ruleset, o)), N("scorerPostprocessingPreset", v(D.scorer_postprocessing, i)), N("nonwearDetectorsCounts", G(D.nonwear_detectors_counts)), N("nonwearDetectorsGgir", G(D.nonwear_detectors_ggir)), N("nightStartHour", H(y.nightStartHour)), N("nightEndHour", H(y.nightEndHour)), N("sensorLocation", v(y.sensorLocation ?? D.sensor_location, e)), N("nonwearThreshold", null != (F = D.nonwear_threshold) && "" !== F && Number.isFinite("number" == typeof F ? F : Number(F)));
	const M = {
		algorithm: E(y.algorithm, r.SADEH_1994_ACTILIFE),
		detectionRule: x(y.detectionRule, t, s.sleep_detection_rule),
		periodGuider: (k = L, $ = I, _(k) ? x($, n, n.SMART) : d(k)),
		sleepPeriodDetection: L,
		ruleset: x(D.placement_ruleset, o, o.LEGACY),
		scorerPostprocessingPreset: x(D.scorer_postprocessing, i, i.NONE),
		nonwearDetectorsCounts: A(D.nonwear_detectors_counts, s.nonwear_detectors_counts),
		nonwearDetectorsGgir: A(D.nonwear_detectors_ggir, s.nonwear_detectors_ggir),
		nightStartHour: E(y.nightStartHour, S),
		nightEndHour: E(y.nightEndHour, P),
		sensorLocation: x(y.sensorLocation ?? D.sensor_location, e, e.WRIST),
		nonwearThreshold: R(D.nonwear_threshold)
	};
	var k, $;
	const K = T.size > 0 ? C(a, p, m, O) : null, q = new Set([...T].filter((e) => null === K || !function(e, r) {
		const t = (e) => JSON.stringify(Array.isArray(e) ? [...e].sort() : e);
		return t(e) === t(r);
	}(M[e], K[e])));
	return Object.freeze({
		scope: b(a),
		origin: p,
		revision: m,
		...M,
		analysisParadigm: w(D.analysis_paradigm),
		actiwareAnalysis: Object.freeze(f(D.actiware_analysis)),
		actiwareRestProposal: Object.freeze(g(D.actiware_rest_proposal)),
		choiAxis: E(D.choi_axis, s.choi_axis),
		ggirConfig: l(D),
		ggirProcessing: Object.freeze(u(D)),
		validDayCriteria: Object.freeze(c(D.valid_day_criteria)),
		placementFromSource: !1,
		declared: q
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
function L(e, r) {
	if ("local" !== e.sourceKey) throw new TypeError("Local scoring settings require a local scope.");
	const t = j(r?.extraSettings);
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
const z = /* @__PURE__ */ new WeakMap();
function I(e, r) {
	const t = function(e) {
		return null == e ? null : "string" == typeof e ? { sourceType: e } : e;
	}(r);
	if (!t || !t.sourceType && !t.sourceProfileId) return e;
	const o = t.resolvedCapabilities?.join(",") ?? "unknown", n = `${t.sourceType ?? ""}|${t.sourceProfileId ?? ""}|${o}|${t.ggirBundleRevision ?? ""}`;
	let i = z.get(e);
	i || (i = /* @__PURE__ */ new Map(), z.set(e, i));
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
function N(e, r) {
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
		scorerPostprocessing: p(t.scorerPostprocessingPreset) ?? null,
		nonwearDetectors: "ggir" === y(o) ? t.nonwearDetectorsGgir : t.nonwearDetectorsCounts,
		sensorLocation: D(r, t.sensorLocation),
		nightStartHour: t.nightStartHour,
		nightEndHour: t.nightEndHour
	};
}
export { N as autoScoreOptionsFromSettings, L as captureLocalScoringSettings, T as scoringSettingsForScope };
