import { Qt as e, Sn as r, an as t, cn as o, ln as n, sn as i, un as s } from "./schema-B6UkEiVJ.js";
import { k as a } from "./workspace-db-DU4CzwX1.js";
import "./local-data-source-kXsqXoes.js";
import { Xt as c, i as u, rn as l } from "./store-BrZppDwj.js";
import { J as d, S as g, U as p, Y as h, f, h as m, m as w, q as _ } from "./per-source-defaults-BIydRzBy.js";
import { x as y } from "./local-nonwear-unified-QTOZtx7w.js";
import { t as D } from "./file-sensor-location-D3poeAvf.js";
import "./scoring-recipe-BeQ3_rrF.js";
const S = r.night_start_hour, P = r.night_end_hour;
function b(e) {
	return Object.freeze({ ...e });
}
function H(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? {} : e;
}
function j(e) {
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
function x(e, r) {
	return j(e) ? e : r;
}
function E(e, r, t) {
	return v(e, r) ? e : t;
}
function R(e) {
	const r = "number" == typeof e ? e : Number(e);
	return Number.isFinite(r) ? Math.min(1e3, Math.max(0, Math.trunc(r))) : 0;
}
function C(a, p, m, y) {
	const D = H(y.extraSettings), L = Object.freeze(h(y.sleepPeriodDetection)), z = null != y.sleepPeriodDetection, I = D.period_guider, T = /* @__PURE__ */ new Set(), k = (e, r) => {
		r && T.add(e);
	};
	var N;
	k("algorithm", j(y.algorithm)), k("detectionRule", v(y.detectionRule, s)), k("periodGuider", z || v(I, t)), k("sleepPeriodDetection", z), k("ruleset", v(D.placement_ruleset, i)), k("scorerPostprocessingPreset", v(D.scorer_postprocessing, o)), k("nonwearDetectorsCounts", G(D.nonwear_detectors_counts)), k("nonwearDetectorsGgir", G(D.nonwear_detectors_ggir)), k("nightStartHour", j(y.nightStartHour)), k("nightEndHour", j(y.nightEndHour)), k("sensorLocation", v(y.sensorLocation ?? D.sensor_location, n)), k("nonwearThreshold", null != (N = D.nonwear_threshold) && "" !== N && Number.isFinite("number" == typeof N ? N : Number(N)));
	const F = {
		algorithm: x(y.algorithm, e.SADEH_1994_ACTILIFE),
		detectionRule: E(y.detectionRule, s, r.sleep_detection_rule),
		periodGuider: (M = L, $ = I, _(M) ? E($, t, t.SMART) : d(M)),
		sleepPeriodDetection: L,
		ruleset: E(D.placement_ruleset, i, i.LEGACY),
		scorerPostprocessingPreset: E(D.scorer_postprocessing, o, o.NONE),
		nonwearDetectorsCounts: A(D.nonwear_detectors_counts, r.nonwear_detectors_counts),
		nonwearDetectorsGgir: A(D.nonwear_detectors_ggir, r.nonwear_detectors_ggir),
		nightStartHour: x(y.nightStartHour, S),
		nightEndHour: x(y.nightEndHour, P),
		sensorLocation: E(y.sensorLocation ?? D.sensor_location, n, n.WRIST),
		nonwearThreshold: R(D.nonwear_threshold)
	};
	var M, $;
	const q = T.size > 0 ? C(a, p, m, O) : null, K = new Set([...T].filter((e) => null === q || !function(e, r) {
		const t = (e) => JSON.stringify(Array.isArray(e) ? [...e].sort() : e);
		return t(e) === t(r);
	}(F[e], q[e])));
	return Object.freeze({
		scope: b(a),
		origin: p,
		revision: m,
		...F,
		analysisParadigm: w(D.analysis_paradigm),
		actiwareAnalysis: Object.freeze(f(D.actiware_analysis)),
		actiwareRestProposal: Object.freeze(g(D.actiware_rest_proposal)),
		choiAxis: x(D.choi_axis, r.choi_axis),
		ggirConfig: l(D),
		ggirProcessing: Object.freeze(u(D)),
		validDayCriteria: Object.freeze(c(D.valid_day_criteria)),
		placementFromSource: !1,
		declared: K
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
	const t = H(r?.extraSettings);
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
function k(e, r) {
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
export { k as autoScoreOptionsFromSettings, L as captureLocalScoringSettings, T as scoringSettingsForScope };
