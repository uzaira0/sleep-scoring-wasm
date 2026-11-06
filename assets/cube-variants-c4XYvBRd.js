import { B as t, Qt as r, W as n, X as a, Z as s, _t as o, dt as i, en as c, lt as l, nn as u, qt as d, rn as p, ut as m } from "./schema-B0CR2EpS.js";
import { i as f, r as g } from "./workers-D4og5Jak.js";
import { p as h, v as w } from "./local-data-source-Vom-dl1p.js";
import { F as y, G as v, J as b, N as S, W as k, g as _, i as A, t as C } from "./workspace-db-CwhwLMaR.js";
import { l as E } from "./legacy-invalid-night-zjKZRSNb.js";
import { d as R, f as I, g as T, l as M, m as O, n as z, o as x, p as F, t as j } from "./background-jobs-BvDFFUGv.js";
import { C as $, m as D, p as N } from "./nonwear-display-slots-3gROIlhe.js";
import { a as V } from "./project-revision-D6MjEMMu.js";
import { A as W, At as P, Bt as L, Dt as Y, It as U, M as B, Mt as G, P as H, Pt as K, Tt as J, W as Z, Wt as X, Zt as q, i as Q, kt as ee, lt as te, pt as re, ut as ne, v as ae, wt as se, zt as oe } from "./store-DvfXJTpe.js";
import { A as ie, C as ce, H as le, O as ue, T as de, j as pe, k as me } from "./night-session-registry-pVArsQh2.js";
import { A as fe, E as ge, O as he, T as we, w as ye } from "./sleep-period-detection-BnH8xZoy.js";
import { t as ve } from "./audit-log-mBb24FKg.js";
import { C as be, S as Se, b as ke, w as _e, x as Ae } from "./ggir-results-import-DD2olz8s.js";
import { A as Ce, F as Ee, I as Re, M as Ie, O as Te, P as Me, j as Oe, q as ze, x as xe } from "./local-nonwear-unified-DPuDqwyk.js";
import { A as Fe, F as je, M as $e, P as De, c as Ne, j as Ve } from "./valid-day-criteria-CIJnTk0q.js";
import { E as We } from "./local-export-shard-worker-CRWHMs-Y.js";
import { i as Pe, n as Le } from "./lstm-model-manager-BenKZ4vQ.js";
var Ye = class extends Error {};
async function Ue(e, r, i, c) {
	switch (e.family) {
		case "count_hasib": return async function(e, r, a) {
			const s = e.input.seriesKey, i = be(s), c = a.counts?.[s];
			if (!c || 0 === c.length) throw new Ye(`Missing count input ${s}.`);
			if ("string" == typeof e.parameters.implementation) return async function(e, r, a) {
				const s = function(e) {
					const r = m(e.id);
					if (null === r || "count_cell" !== r.grammarId) return null;
					const n = r.values.method_family, a = r.values.implementation_variant;
					return void 0 === n || void 0 === a ? null : t.find((e) => e.methodFamilyId === n && e.implementationVariantId === a)?.primitiveId ?? null;
				}(e);
				if ("sadeh" === s) {
					if (!r.scoreSadeh) throw new Error("Registry Sadeh primitive (scoreSadeh) unavailable on this worker bundle.");
					const t = n.scoring_threshold, s = "number" == typeof t ? t : 0, o = "number" == typeof e.parameters.threshold ? e.parameters.threshold : s;
					return r.scoreSadeh(a, o);
				}
				if ("cole_kripke" === s) {
					if (!r.scoreColeKripke) throw new Error("Registry Cole-Kripke primitive (scoreColeKripke) unavailable on this worker bundle.");
					const t = !0 === e.parameters.useActilifeScaling;
					return r.scoreColeKripke(a, t);
				}
				throw new Error(`Unsupported provenance count scorer ${e.algorithm}.`);
			}(e, r, c);
			const u = function(e) {
				if (Ae.includes(e.algorithm)) return null;
				const t = m(e.id)?.values.method_family, r = o.find((e) => "sleep_wake" === e.kind && e.family === t), n = r?.nativeEpochSeconds;
				return !r || 30 !== n && 60 !== n ? null : {
					methodId: r.id,
					nativeEpochSeconds: n
				};
			}(e);
			if (u) return async function(e, t, r, n) {
				const a = be(e.input.seriesKey), s = l(a.family, a.axis, t.nativeEpochSeconds), o = n.counts?.[s];
				if (!o || 0 === o.length) throw new Ye(`Missing native count input ${s}.`);
				if (!r.scoreEpochs || !r.foldOntoGrid) throw new Error("The typed epoch scorer (scoreEpochs) is unavailable on this worker bundle.");
				const i = await r.scoreEpochs({
					algorithm: t.methodId,
					signals: {
						counts: o,
						epochSeconds: t.nativeEpochSeconds
					}
				}), c = h(i, o.length);
				if (!c) throw new Error(`${t.methodId}: ${i.reason ?? "the scorer returned no series"}`);
				if (e.epochSeconds === t.nativeEpochSeconds) return c;
				const u = n.timestamps?.[t.nativeEpochSeconds], d = n.timestamps?.[e.epochSeconds];
				if (!u || !d || u.length !== c.length) throw new Ye(`Missing the timestamps that align ${s} with the ${String(e.epochSeconds)} s grid.`);
				const p = await r.foldOntoGrid(u, Float64Array.from(c), d, e.epochSeconds, "majority_ties_sleep");
				return Uint8Array.from(p);
			}(e, u, r, a);
			const d = (await _e({
				backend: r,
				variants: [e.algorithm],
				anglez5s: /* @__PURE__ */ new Float64Array(),
				countSource: s,
				countEpochSeconds: i.epochSeconds,
				..."neishabouri" === i.family ? { neishabouriCounts: { [i.axis]: c } } : { zeroCrossingCountsByAxis: { [i.axis]: c } }
			}))[0];
			if (!d) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return d.result.sib;
		}(e, r, i);
		case "angle_hasib": return async function(e, t, r) {
			const n = a.angle_hasib;
			if (void 0 === n || e.algorithm !== n.algorithmValue) throw new Error(`Unsupported angle-HASIB algorithm ${e.algorithm}.`);
			if (!r.anglez5s || 0 === r.anglez5s.length) throw new Ye(`Missing ${n.inputSeriesKey} input.`);
			const o = (await _e({
				backend: t,
				variants: [e.algorithm],
				anglez5s: r.anglez5s,
				countSource: l(s, "y", 60)
			}))[0];
			if (!o) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return o.result.sib;
		}(e, r, i);
		case "lstm": return async function(e, t, r) {
			const a = "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm, s = r.lstmProbabilities?.[a];
			if (!s || 0 === s.length) throw new Ye(`Missing LSTM probabilities for ${a}.`);
			const o = n.model_threshold, i = "number" == typeof e.parameters.threshold ? e.parameters.threshold : "number" == typeof o ? o : .5;
			if (!t.thresholdProbabilities) throw new Error("The probability threshold (thresholdProbabilities) is unavailable on this worker bundle.");
			return t.thresholdProbabilities(Float64Array.from(s), i);
		}(e, r, i);
		case "consensus": return async function(e, t, r) {
			const a = (Array.isArray(e.parameters.inputConfigIds) ? e.parameters.inputConfigIds.filter((e) => "string" == typeof e) : e.lineage).map((e) => {
				const r = t[e];
				if (!r) throw new Ye(`Missing consensus input ${e}.`);
				return r;
			});
			if (0 === a.length) throw new Error("Consensus requires at least one input.");
			const s = a[0].length;
			for (const n of a) if (n.length !== s) throw new Error(`Consensus inputs are not aligned (${String(n.length)} vs ${String(s)} epochs).`);
			const o = "string" == typeof e.parameters.strategy ? e.parameters.strategy : n.consensus_strategy;
			return r.scoreConsensus(o, a);
		}(e, c, r);
	}
}
function Be(e) {
	return fe(e ?? null);
}
function Ge(e) {
	return oe(e).map((e) => [e.start, e.end]);
}
function He(e) {
	return L(e).map((e) => [e.start, e.end]);
}
function Ke(e) {
	let t = /* @__PURE__ */ new Float64Array(0);
	for (const r of e) t = $(t, new Float64Array(r));
	return t;
}
function Je(e) {
	const t = new Uint8Array(e.reduce((e, t) => e + t.byteLength, 0));
	let r = 0;
	for (const n of e) t.set(new Uint8Array(n), r), r += n.byteLength;
	return t;
}
async function Ze(e, t, n) {
	const a = await pe(e, t, le, d.VAN_HEES_2015, void 0, n), s = a?.sleepMarkers.find((e) => e.markerType === r.MAIN_SLEEP) ?? a?.sleepMarkers[0];
	return null != s?.onsetTimestamp && null != s.offsetTimestamp ? [s.onsetTimestamp, s.offsetTimestamp] : null;
}
async function Xe(e, t, r = C(), n = {}) {
	const a = r, s = n.readDay ?? ((t) => ae(e, t, a)), o = await D(e, t, a, s, n.fileRecord?.navigationFacts, n.wasmApi);
	if (!o) return null;
	const i = await s(await N(t, n.fileRecord?.navigationFacts, n.wasmApi)), c = (i ? [o, i] : [o]).filter((e) => e.timestamps.byteLength > 0), l = Ke(c.map((e) => e.timestamps)), { startIndex: u, endIndex: d } = await We(l, t, n.wasmApi);
	if (d <= u) return null;
	const p = l.subarray(u, d), m = Array.from(p), f = Array.from(Ke(c.map((e) => e.axisY)).subarray(u, d)), g = await re(p, 60, n.wasmApi), h = await B(e, a, n.fileRecord ? { file: n.fileRecord } : void 0), w = {}, y = {}, v = {};
	for (const C of h.cellIds) {
		const e = h(C), t = X(c, e);
		if ("stale" === t.status) {
			y[C] = t.reason;
			continue;
		}
		const r = t.outputs.filter((e) => null != e);
		r.length === c.length && (w[C] = Array.from(Je(r).subarray(u, d)), "ok" === e.status && null !== e.configHash && (v[C] = e.configHash));
	}
	const [b, S, k, _, A, E] = await Promise.all([
		Ze(e, t, a),
		ne(e, t, a),
		"activitySpan" in n ? n.activitySpan ?? null : G(e, a),
		a.scoredVariantMasks.get([e, t]),
		a.actiwareFileData.get(e),
		n.fileRecord ?? W(e, a)
	]), R = Re(A?.actiwareIntervals, t), I = S ? await K(S, k, n.wasmApi) : null, T = m[0] ?? 0, M = (m[m.length - 1] ?? T) + g, O = c.flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter((e) => e >= T && e < M), z = I ? {
		diaryInBedTime: se(x = I),
		onsetTime: J(x),
		diaryWakeTime: Y(x),
		naps: Ge(x),
		nonwear: He(x)
	} : void 0;
	var x;
	const F = "warm-v3:" + fe({
		diary: Be(z),
		actiwareRestWindow: R,
		eventMarkerTimestamps: O,
		hdczaWindow: b,
		seriesRevision: E?.seriesRevision ?? 0,
		classifierConfigHashes: Object.keys(v).length > 0 ? v : void 0
	}), j = _?.diaryFingerprint === F, $ = {};
	if (_?.masks && j) for (const [C, D] of Object.entries(_.masks)) D.byteLength === m.length && ($[C] = new Uint8Array(D));
	const V = c.flatMap((e) => e.temperature && e.temperature.byteLength > 0 ? [e.temperature] : []), P = V.length === c.length ? Array.from(Ke(V).subarray(u, d)) : void 0;
	return {
		fileId: e,
		analysisDate: t,
		timestamps: m,
		activityCounts: f,
		epochLengthSeconds: g,
		hdczaWindow: b,
		...O.length > 0 ? { eventMarkerTimestamps: O } : {},
		...R ? { actiwareRestWindow: R } : {},
		classifierOutputs: w,
		...Object.keys(y).length > 0 ? { staleClassifierCells: y } : {},
		precomputedVariantMasks: $,
		diaryFingerprint: F,
		...E?.sourceContentHash ? {
			sourceContentHash: E.sourceContentHash,
			seriesRevision: E.seriesRevision ?? 0
		} : {},
		...z ? { diary: z } : {},
		...P ? { temperature: P } : {}
	};
}
function qe() {
	const e = Date.UTC(2024, 0, 1, 12) / 1e3, t = Array.from({ length: 1440 }, (t, r) => e + 60 * r);
	return {
		timestamps: t,
		activityCounts: t.map(() => 0),
		sleepScores: t.map(() => 1),
		analysisDate: "2024-01-01",
		periodGuider: c.EVENT_MARKER,
		eventMarkerTimestamps: [e + 37800, e + 66600]
	};
}
b();
const Qe = {
	[c.EVENT_MARKER]: {
		reason: "Needs an actours core with the event-marker guider (next pin).",
		note: "Event-marker source:",
		night: qe
	},
	[c.ACTIWARE_REST_INTERVAL]: {
		reason: "Needs an actours core with the Actiware rest-interval guider (next pin).",
		note: "Actiware rest-interval source:",
		night: () => {
			const e = Date.UTC(2024, 0, 1, 12) / 1e3;
			return {
				...qe(),
				periodGuider: c.ACTIWARE_REST_INTERVAL,
				actiwareRestWindow: {
					startTimestamp: e + 37800,
					endTimestamp: e + 66600
				}
			};
		}
	}
}, et = /* @__PURE__ */ new WeakMap();
function tt(e, t = {}) {
	const r = t.wasmApi ?? g();
	let n = et.get(r);
	n || (n = /* @__PURE__ */ new Map(), et.set(r, n));
	const a = t.signal ? void 0 : n.get(e);
	if (a) return a;
	const s = Qe[e], o = x(r, (e) => w({
		...s.night(),
		wasmApiOverride: e
	}), {
		ms: M,
		label: "scored-variant guider probe",
		signal: t.signal,
		cancel: t.cancelOperation ?? (() => {
			f(r);
		})
	}).then((e) => "placed" === e.kind && e.notes.some((e) => e.startsWith(s.note))).catch((r) => {
		if (n.delete(e), O(r, t.signal, "scored-variant guider probe"), F(r)) throw r;
		return !1;
	});
	return t.signal || n.set(e, o), o;
}
function rt(e = {}) {
	return tt(c.EVENT_MARKER, e);
}
function nt(e) {
	const t = (e ?? "").trim();
	return "" === t ? "none" : t;
}
function at(e, t) {
	const r = {
		classifierConfigId: e.classifierConfigId.trim(),
		nonwear: nt(e.nonwear),
		periodSource: nt(e.periodSource),
		ruleset: nt(e.ruleset),
		rescoring: nt(e.rescoring)
	}, n = "study_selection" === r.nonwear && t?.length ? `${r.nonwear}_${[...new Set(t)].sort().join("_")}` : r.nonwear;
	return {
		id: i("scored_variant", {
			classifier_config_id: r.classifierConfigId,
			nonwear: n,
			period_source: r.periodSource,
			ruleset: r.ruleset,
			rescoring: r.rescoring
		}),
		configHash: fe({
			...r,
			nonwear: n
		}),
		config: r
	};
}
const st = "cube_cell_absent", ot = new Map(o.map((e) => [e.id, e])), it = new Set(we.map((e) => e.slug)), ct = [30, 60];
function lt(e, t) {
	return {
		ok: !1,
		code: e,
		reason: t
	};
}
function ut(e, t) {
	return t().find((t) => t.id === e);
}
const dt = a.angle_hasib?.configId ?? "";
function pt(e) {
	return {
		ok: !0,
		variant: {
			cubeCellId: e.id,
			configHash: e.configHash,
			family: e.family,
			epochSeconds: e.epochSeconds,
			conformance: e.conformance
		}
	};
}
function mt(e, t = {}) {
	const r = e.algorithm.trim(), n = ot.get(r);
	if (!n) return lt("unknown_algorithm", `algorithm "${e.algorithm}" is not a known AlgorithmType`);
	if (t.capabilities && !t.capabilities.sleepAlgorithms.includes(r)) return lt("capability_unavailable", `algorithm "${r}" is not available for this file's capabilities`);
	if ("van_hees_2015" === r) return function() {
		const e = ut(dt, () => ge({
			includeFamilies: ["angle_hasib"],
			includeConsensus: !1
		}).configs);
		return e ? pt(e) : lt(st, "the van_hees_2015 angle cell was not present in the cube plan");
	}();
	const a = n.family ?? "";
	return "sleep_wake" === n.kind && it.has(a) ? function(e, t) {
		const r = e.countMetric.trim();
		if (n = r, !Object.prototype.hasOwnProperty.call(ye, n)) return lt("unknown_count_metric", `count metric "${e.countMetric}" is not a cube count source (expected neishabouri or zero_crossing)`);
		var n;
		const a = e.axis.trim();
		if (!ye[r].includes(a)) return lt("incompatible_axis", `axis "${e.axis}" is not available for count metric "${r}"`);
		const s = e.epochSeconds;
		if (!ct.includes(s)) return lt("unsupported_epoch", `epoch length ${String(s)}s is not a count-cube epoch (expected 30 or 60)`);
		const o = s, c = i("count_cell", {
			method_family: t,
			count_family: r,
			axis: a,
			epoch_seconds: o
		}), l = ut(c, () => ge({
			includeFamilies: ["count_hasib"],
			includeConsensus: !1,
			epochSeconds: [o]
		}).configs);
		return l ? pt(l) : lt(st, `derived cube cell "${c}" was not present in the cube plan`);
	}(e, a) : lt("not_a_cube_scorer", `algorithm "${r}" has no directly scorer-addressable count/angle cube cell`);
}
function ft(e) {
	return (t) => {
		const r = Ne(e, t);
		return function(e) {
			const t = Ce(e.currentAlgorithm), r = mt({
				...t,
				algorithm: Me(t.family, t.implementation) ?? e.currentAlgorithm,
				sleepDetectionRule: e.sleepDetectionRule,
				placementRuleset: e.placementRuleset,
				scorerPostprocessingPreset: e.scorerPostprocessingPreset
			}), n = /* @__PURE__ */ new Set();
			if (!e.placementFromSource && r.ok && Oe(Ie(t.family)) === e.extractionPath && n.add(r.variant.cubeCellId), e.ggirHasibVariantsEnabled && !e.placementFromSource) {
				const t = be(e.ggirHasibCountSource);
				for (const r of e.ggirHasibVariants) {
					const a = we.find((e) => e.algorithm === r), s = r === ke ? "van_hees_2015" : o.find((e) => e.family === a?.slug)?.id;
					if (!s) continue;
					const i = mt({
						algorithm: s,
						countMetric: t.family,
						axis: t.axis,
						epochSeconds: e.ggirHasibCountEpochSeconds,
						sleepDetectionRule: e.sleepDetectionRule,
						placementRuleset: e.placementRuleset,
						scorerPostprocessingPreset: e.scorerPostprocessingPreset
					});
					i.ok && n.add(i.variant.cubeCellId);
				}
			}
			const a = "ggir" === xe(e.currentAlgorithm) ? e.nonwearDetectorsGgir : e.nonwearDetectorsCounts;
			return {
				classifierConfigIds: [...n],
				nonwearDetectors: 1 === a.length ? [...a] : [Ee],
				studyNonwearSelection: [...a],
				rulesets: [e.placementRuleset],
				rescorings: [e.scorerPostprocessingPreset],
				periodSources: "smart" === e.periodGuider ? [S.diary, S.hdcza] : [ze(e.periodGuider, { hasDiary: !1 })?.source_a ?? S.diary]
			};
		}({
			...e,
			currentAlgorithm: r.algorithm,
			periodGuider: r.periodGuider,
			nonwearDetectorsCounts: [...r.nonwearDetectorsCounts],
			placementFromSource: r.placementFromSource
		});
	};
}
function gt(e, t, r, { day: n, eventMarkerGuider: a, actiwareRestGuider: s }) {
	if (Ve.includes(e) && !t) return {
		included: !1,
		reason: "no diary for this day"
	};
	if (e === S.hdcza && n && null == n.hdczaWindow) return {
		included: !1,
		reason: "no HDCZA window stored for this day"
	};
	if (e === S.event_marker) {
		if (!a) return {
			included: !1,
			reason: "placement core predates the event-marker guider"
		};
		if (n && !n.eventMarkerTimestamps?.length) return {
			included: !1,
			reason: "no event-marker presses for this day"
		};
	}
	if (e === S.actiware_rest_interval) {
		if (!s) return {
			included: !1,
			reason: "placement core predates the Actiware rest-interval guider"
		};
		if (n && !n.actiwareRestWindow) return {
			included: !1,
			reason: "no Actiware rest interval for this day"
		};
	}
	const o = De(r, $e[e]);
	return null === o ? { included: !0 } : {
		included: !1,
		reason: `unsatisfied source capability: ${o.map((e) => `${e}=false`).join(", ") || "no implemented input signal"}`
	};
}
function ht(e, t) {
	const r = Fe[e];
	for (const n of r ?? []) if (n.length > 0 && n.every((e) => t.has(e))) return {
		included: !1,
		reason: `day input unavailable: ${n.join(" or ")}`
	};
	return { included: !0 };
}
async function wt(e, t, r) {
	const n = {
		counts: t.activityCounts instanceof Float64Array ? t.activityCounts : Float64Array.from(t.activityCounts),
		epochSeconds: t.epochLengthSeconds
	};
	t.nonwearSignals?.temperature && (n.temperature = new Float64Array(t.nonwearSignals.temperature)), t.nonwearSignals?.raw && (n.raw = t.nonwearSignals.raw), null != t.nonwearSignals?.sampleRate && (n.sampleRate = t.nonwearSignals.sampleRate);
	const a = await (r ?? g()).detectNonwearUnified({
		algorithm: e,
		signals: n
	});
	if (!a.available || null == a.nonwear) return {
		mask: null,
		reason: a.reason ?? null
	};
	if (a.elementSeconds === t.epochLengthSeconds && t.epochLengthSeconds > 0 && a.nonwear.length === t.timestamps.length && t.timestamps.every((e, r) => e === t.timestamps[0] + r * t.epochLengthSeconds) && a.nonwear.every((e) => 0 === e || 1 === e)) return { mask: a.nonwear };
	const s = Te(a, t.timestamps[0] ?? 0);
	return { mask: (await (r ?? g()).rasterizePeriods(Float64Array.from(s, (e) => e.startTsSec), Float64Array.from(s, (e) => e.endTsSec), Float64Array.from(t.timestamps), t.epochLengthSeconds)).mask };
}
var yt = class extends Error {
	workerLost;
	constructor(e = !1) {
		super("Precomputed variant masks could not be saved."), this.name = "ScoredVariantPersistenceError", this.workerLost = e;
	}
};
const vt = /* @__PURE__ */ new WeakMap();
function bt(e) {
	const t = JSON.stringify(e, (e, t) => t instanceof Uint8Array ? Array.from(t) : t);
	return `${String(t.length)}:${fe(t)}`;
}
function St(e, t) {
	for (const r of t) {
		if (e.notes.length >= 12) return;
		e.notes.includes(r) || e.notes.push(r);
	}
}
async function kt(e, t, { db: r = C(), signal: n, wasmApi: a, cancelOperation: s, narrowing: o } = {}) {
	const i = {
		computed: 0,
		skipped: 0,
		missingClassifier: 0,
		placementUnavailable: !1,
		notes: []
	}, l = a ?? g(), d = s ?? (() => {
		f(l);
	}), m = {
		wasmApi: l,
		signal: n,
		cancelOperation: d
	};
	R(n, "before scored-variant guider probes");
	const h = function(e) {
		const { classifierConfigIds: t, capabilities: r, hasDiary: n = !1, includeNonwearNone: a = !0, day: s } = e, o = [], i = s ? t.filter((e) => {
			if (void 0 !== s.staleClassifierCells?.[e]) return !0;
			const t = s.classifierOutputs[e];
			return !(!t || t.length !== s.timestamps.length) || (o.push({
				axis: "classifier",
				value: e,
				reason: t ? `stored series of ${String(t.length)} epochs is not on the day's ${String(s.timestamps.length)}-epoch grid` : "no classifier output stored for this day"
			}), !1);
		}) : [...t], c = s ? function(e) {
			const t = /* @__PURE__ */ new Set(["device_wear_state_evidence_stream"]);
			return e.temperature && 0 !== e.temperature.length || t.add("temperature_epoch_stream"), t;
		}(s) : /* @__PURE__ */ new Set(), l = [];
		for (const u of r.nonwearAlgorithms) {
			if (e.nonwearDetectors && !e.nonwearDetectors.includes(u)) continue;
			const t = s ? ht(u, c) : { included: !0 };
			t.included ? l.push(u) : o.push({
				axis: "nonwear",
				value: u,
				reason: t.reason
			});
		}
		const d = [...new Set(e.studyNonwearSelection ?? [])];
		let m;
		d.length > 1 && (!e.nonwearDetectors || e.nonwearDetectors.includes("study_selection")) && (d.filter((e) => r.nonwearAlgorithms.includes(e) && (!s || ht(e, c).included)).length > 0 ? (l.push(Ee), m = d) : o.push({
			axis: "nonwear",
			value: Ee,
			reason: "none of the study's nonwear detectors can run for this day"
		}));
		const f = a ? ["none", ...l] : l, g = [], h = 2 === e.periodSources?.length && e.periodSources[0] === S.diary && e.periodSources[1] === S.hdcza ? [n ? S.diary : S.hdcza] : e.periodSources;
		for (const u of Object.values(S)) {
			if (h && !h.includes(u)) continue;
			const t = gt(u, n, r, {
				day: s,
				eventMarkerGuider: e.eventMarkerGuider ?? !1,
				actiwareRestGuider: e.actiwareRestGuider ?? !1
			});
			t.included ? g.push(u) : o.push({
				axis: "periodSource",
				value: u,
				reason: t.reason
			});
		}
		const w = e.rulesets ?? [u.LEGACY, u.REGULARITY_V2], y = e.rescorings ?? [p.NONE, p.WEBSTER], v = {
			classifierConfigIds: [...i],
			nonwear: f,
			periodSource: g,
			ruleset: w,
			rescoring: y
		}, b = [], k = /* @__PURE__ */ new Set();
		for (const u of i) for (const e of f) for (const t of g) for (const r of w) for (const n of y) {
			const a = at({
				classifierConfigId: u,
				nonwear: e,
				periodSource: t,
				ruleset: r,
				rescoring: n
			}, m);
			k.has(a.id) || (k.add(a.id), b.push(a));
		}
		return {
			variants: b,
			axes: v,
			skipped: o,
			...m ? { studyNonwearSelection: m } : {}
		};
	}({
		classifierConfigIds: Object.keys(e.classifierOutputs),
		capabilities: t,
		hasDiary: null != e.diary,
		day: e,
		eventMarkerGuider: !!e.eventMarkerTimestamps?.length && await rt(m),
		actiwareRestGuider: !!e.actiwareRestWindow && await tt(c.ACTIWARE_REST_INTERVAL, m),
		...o
	});
	if (0 === h.variants.length) return i;
	const w = h.variants.filter((t) => !e.precomputedVariantMasks[t.id]);
	if (i.skipped = h.variants.length - w.length, 0 === w.length) return i;
	const y = {};
	R(n, "before scored-variant nonwear computation");
	const v = await x(l, (t) => async function(e, t, r) {
		const n = {};
		for (const a of new Set(t)) "none" !== a && "study_selection" !== a && (n[a] = await wt(a, e, r));
		return n;
	}({
		timestamps: e.timestamps,
		activityCounts: e.activityCounts,
		epochLengthSeconds: e.epochLengthSeconds,
		...e.temperature ? { nonwearSignals: { temperature: e.temperature } } : {}
	}, function(e) {
		return [.../* @__PURE__ */ new Set([...e.axes.nonwear, ...e.studyNonwearSelection ?? []])];
	}(h), t), {
		ms: M,
		label: "scored-variant nonwear computation",
		signal: n,
		cancel: d
	});
	for (let c = 0; c < w.length; c += 2e3) {
		R(n, "before scored-variant warm computation");
		const t = {
			timestamps: e.timestamps,
			activityCounts: e.activityCounts,
			epochLengthSeconds: e.epochLengthSeconds,
			analysisDate: e.analysisDate,
			hdczaWindow: e.hdczaWindow,
			...e.actiwareRestWindow ? { actiwareRestWindow: e.actiwareRestWindow } : {},
			...e.eventMarkerTimestamps?.length ? { eventMarkerTimestamps: e.eventMarkerTimestamps } : {},
			...e.diary ? { diary: e.diary } : {},
			classifierOutputs: e.classifierOutputs,
			nonwearMasks: v,
			...h.studyNonwearSelection ? { studyNonwearDetectors: h.studyNonwearSelection } : {},
			variants: w.slice(c, c + 2e3).map((e) => ({
				id: e.id,
				...e.config
			}))
		}, a = e.sourceContentHash && void 0 !== e.seriesRevision ? JSON.stringify([
			r.name,
			e.fileId,
			e.analysisDate,
			e.sourceContentHash,
			e.seriesRevision,
			e.diaryFingerprint,
			e.epochLengthSeconds,
			e.timestamps.length,
			e.timestamps[0],
			e.timestamps.at(-1),
			t.variants,
			h.studyNonwearSelection
		]) : bt(t);
		let o = vt.get(l);
		o || (o = /* @__PURE__ */ new Map(), vt.set(l, o));
		const u = o.get(a) ?? await x(l, (e) => e.runScoredVariantBatch(t), {
			ms: 3e5,
			label: "scored-variant warm computation",
			signal: n,
			cancel: s ?? (() => {
				f(l);
			})
		});
		if (0 === Object.keys(u.masks).length && o.set(a, u), R(n, "after scored-variant warm computation"), Object.assign(y, u.masks), i.computed += Object.keys(u.masks).length, i.missingClassifier += u.missingClassifier, St(i, u.notes), u.placementUnavailable) {
			i.placementUnavailable = !0;
			break;
		}
	}
	if (Object.keys(y).length > 0) {
		let t;
		try {
			R(n, "before scored-variant warm persistence");
			const { controller: a, release: s } = I(n);
			t = s;
			const o = a.signal;
			if (!await x(l, (t) => Z(e.fileId, e.analysisDate, y, e.diaryFingerprint, r, t, o), {
				ms: 3e5,
				label: "scored-variant warm persistence",
				signal: void 0,
				cancel: () => {
					a.abort(), d();
				}
			})) throw new yt();
		} catch (b) {
			n?.aborted && d(), O(b, n, "scored-variant warm persistence");
			const e = b instanceof Error && "QuotaExceededError" === b.name ? "QuotaExceededError" : "Error";
			throw console.warn("[scored-variant-warm] Precomputed mask persistence failed.", e), q("warn", "Precomputed variant mask persistence failed", { error_type: e }), new yt(F(b));
		} finally {
			t?.();
		}
	}
	return i;
}
const _t = /* @__PURE__ */ new WeakMap();
async function At(e, t, r, n) {
	const a = _t.get(e)?.get(t);
	return a ? Promise.all(a.map(async (e) => {
		let t = e.run.answers.get(r);
		return t || (t = n(e.run.group, e.run.probabilities), e.run.answers.set(r, t)), {
			...e,
			value: await t
		};
	})) : null;
}
function Ct(e, t) {
	_t.set(e, t);
}
function Et(e) {
	const t = new Uint8Array(e.length);
	return t.set(e), t.buffer;
}
function Rt(e) {
	const t = {}, r = [];
	for (const [n, a] of Object.entries(e ?? {})) {
		if (!a) continue;
		const e = y(n);
		if (!e) throw new Error(`sleep/wake output ${n} is not a declared AlgorithmRunKey (core.yaml)`);
		const s = Et(a);
		t[e] = s, r.push({
			algoKey: e,
			results: s
		});
	}
	return {
		algorithmResults: t,
		historyOutputs: r
	};
}
function It(e, t, r, n, a) {
	a && 0 !== a.length && (e[he(t, r, n)] = new Float64Array(a));
}
function Tt(e, t, r, n) {
	const a = {};
	It(a, "neishabouri", "x", t, e.axisX), It(a, "neishabouri", "y", t, e.axisY), It(a, "neishabouri", "z", t, e.axisZ), It(a, "neishabouri", "vm", t, e.vectorMagnitude), It(a, "zero_crossing", "x", t, e.zeroCrossingX), It(a, "zero_crossing", "y", t, e.zeroCrossingY), It(a, "zero_crossing", "z", t, e.zeroCrossingZ);
	const s = e.counts30s;
	s && 30 !== t && (It(a, "neishabouri", "x", 30, s.axisX), It(a, "neishabouri", "y", 30, s.axisY), It(a, "neishabouri", "z", 30, s.axisZ), It(a, "neishabouri", "vm", 30, s.vectorMagnitude), It(a, "zero_crossing", "x", 30, s.zeroCrossingX), It(a, "zero_crossing", "y", 30, s.zeroCrossingY), It(a, "zero_crossing", "z", 30, s.zeroCrossingZ));
	const o = { [t]: Float64Array.from(e.timestamps) };
	return s && 30 !== t && s.timestamps.length > 0 && (o[30] = Float64Array.from(s.timestamps)), {
		counts: a,
		timestamps: o,
		...n && n.length > 0 && "unconfigured" !== r.id ? { lstmProbabilities: { [r.id]: n } } : {}
	};
}
const Mt = /* @__PURE__ */ new Map();
function Ot(e, t, r, n = !1, a) {
	const s = n && 30 !== e ? [30, e] : [e], o = s.join(","), i = t ? `${o}|lstm|${r.id}|${r.label}|selected:${String(a ?? "none")}|${JSON.stringify(r.thresholdPresets ?? null)}` : `${o}|nolstm`, c = Mt.get(i);
	if (c) return c;
	const l = ge({
		includeFamilies: t ? [
			"count_hasib",
			"lstm",
			"consensus"
		] : ["count_hasib", "consensus"],
		epochSeconds: s,
		includeConsensus: !0,
		...t ? { lstmModels: [{
			id: r.id,
			label: r.label,
			epochSeconds: e,
			thresholdPresets: null == a ? r.thresholdPresets : [{
				id: "selected",
				label: "Saved study threshold",
				threshold: a
			}, ...r.thresholdPresets.filter((e) => "selected" !== e.id)]
		}] } : {}
	});
	return Mt.set(i, l), l;
}
const zt = {
	dayCount: 0,
	variantsComputed: 0,
	variantsSkipped: 0,
	dayFailures: 0
};
function xt(e, t) {
	return JSON.stringify({
		sourceCaps: e,
		narrowing: t ?? null
	}, (e, t) => t instanceof Set ? [...t].map(String).sort() : t);
}
async function Ft(e, t, r, n) {
	const [a, s, o, i] = await Promise.all([
		n.files.get(e),
		te(e, n),
		n.markers.where("fileId").equals(e).toArray(),
		n.actiwareFileData.get(e)
	]);
	return "warm-v3:" + fe({
		plan: xt(t, r),
		series: [
			a?.sourceType,
			a?.sourceContentHash,
			a?.seriesRevision ?? 0,
			a?.epochLengthSeconds,
			a?.availableDates
		],
		geometry: s.some((e) => !e.importMappingProvenance?.diaryTemporalPolicy) ? U() : null,
		diaries: s.map((e) => ({
			date: e.analysisDate,
			inBed: e.diaryInBedTime,
			onset: e.diaryOnsetTime,
			wake: e.diaryWakeTime,
			outOfBed: e.diaryOutOfBedTime,
			overlay: e.decisionOverlayJson,
			policy: e.importMappingProvenance?.diaryTemporalPolicy,
			naps: ee(e),
			nonwear: P(e)
		})),
		hdcza: o.filter((e) => "auto_score" === e.username && e.algorithm === d.VAN_HEES_2015).map((e) => ({
			date: e.date,
			windows: e.sleepMarkers.map((e) => [
				e.markerType,
				e.onsetTimestamp,
				e.offsetTimestamp
			])
		})),
		rest: i?.actiwareIntervals
	});
}
async function jt(e, t, r, n, a = C(), s, o, i, c = ft(Q.getState()), l) {
	const u = a;
	if (!r) return zt;
	const d = await W(e, u);
	if (d?.sourceType && !je(d.sourceType, "local")) return zt;
	const p = { ...zt }, m = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), g = await G(e, u).then((e) => ({
		fileRecord: d,
		activitySpan: e
	}), () => ({ fileRecord: d })), h = c?.(g.fileRecord), w = await Ft(e, r, h, u), y = /* @__PURE__ */ new Set();
	if ((g.fileRecord?.epochLengthSeconds ?? 60) > 60) return zt;
	let v = /* @__PURE__ */ new Map();
	const b = (t) => {
		let r = v.get(t);
		return r || (r = ae(e, t, u), v.set(t, r)), r;
	};
	let S = !1;
	const k = ue((t, r) => {
		t === e && r === u && (S = !0);
	}), _ = t.length;
	let A = 0;
	n?.({
		phase: "variants",
		percent: 98,
		message: `0/${String(_)} days`
	});
	const E = () => {
		A >= _ || (A += 1, n?.({
			phase: "variants",
			percent: 0 === _ ? 100 : 98 + 2 * A / _,
			message: `${String(A)}/${String(_)} days`
		}));
	};
	let I = !1;
	try {
		let n = t;
		for (let a = 0; a < 2; a++) {
			v = /* @__PURE__ */ new Map();
			for (const t of n) if (I) f.add(t), E();
			else {
				performance.now(), p.variantsComputed;
				for (const e of v.keys()) e < t && v.delete(e);
				try {
					R(s, "before scored-variant warm day load");
					const n = await T(() => Xe(e, t, u, {
						...g,
						readDay: b,
						wasmApi: o
					}), M, "scored-variant day load", s, i ?? (() => {}));
					if (R(s, "after scored-variant warm day load"), !n || 0 === Object.keys(n.classifierOutputs).length) {
						E();
						continue;
					}
					const a = await kt(n, r, {
						db: u,
						signal: s,
						wasmApi: o,
						cancelOperation: i,
						narrowing: h
					});
					y.delete(t), p.variantsComputed += a.computed, m.has(t) || (p.variantsSkipped += a.skipped), a.placementUnavailable || 0 !== a.missingClassifier ? f.add(t) : (m.add(t), f.delete(t)), E(), a.placementUnavailable && console.warn("[local-processing] Scored-variant warm placement was unavailable.");
				} catch (x) {
					O(x, s, "scored-variant warm"), console.warn("[local-processing] Scored-variant warm failed."), F(x) && (I = !0), x instanceof Error && "ScoredVariantPersistenceError" === x.name && y.add(t), f.add(t), E();
				}
			}
			if (I || a > 0 || !S && 0 === f.size) break;
			n = S ? t : [...f], S = !1;
		}
	} finally {
		k(), v = /* @__PURE__ */ new Map(), p.dayCount = m.size, s?.aborted && l && await $t(() => Promise.resolve(), e, p, l);
	}
	let z = S || y.size > 0 || Boolean(s?.aborted);
	if (!z) try {
		const t = await u.scoredVariantMasks.where("fileId").equals(e).count();
		z = !await V(u, [
			u.files,
			u.diaryEntries,
			u.markers,
			u.actiwareFileData
		], async () => !s?.aborted && await Ft(e, r, h, u) === w && await u.files.update(e, { scoredVariantWarm: {
			inputs: w,
			maskDays: t,
			outcome: f.size > 0 ? "known-failures" : "complete",
			failedDays: f.size
		} }) > 0, s);
	} catch {
		z = !0, console.warn("[local-processing] Scored-variant warm stamp could not be saved.");
	}
	return p.dayFailures = z ? Math.max(f.size, _) : f.size, p;
}
async function $t(e, t, r, n, a) {
	await e(), 0 !== r.variantsComputed && await ve.recordWorkspaceBoundDurably(n, E.SYSTEM_RECALCULATION, {
		subject: "scored_variant_precompute",
		fileId: t,
		dayCount: r.dayCount,
		variantsComputed: r.variantsComputed,
		variantsSkipped: r.variantsSkipped,
		trigger: "file_processing"
	});
}
function Dt(e, t = {}) {
	const r = t.db ?? C();
	return z({
		kind: v.SCORED_VARIANT_WARM,
		key: me(e),
		label: "Scoring variants",
		workspaceId: r.name,
		signal: t.signal,
		rerun: !0,
		run: (n) => async function(e, { forget: t = !1, resumeIncomplete: r = !1, retryKnownFailures: n = !0, db: a = C() }, s) {
			try {
				if (C() !== a) return;
				const o = await a.files.get(e);
				if (C() !== a || !o || "incomplete" === o.ingestState || 0 === o.availableDates.length || !o.sourceType || o.epochLengthSeconds > 60) return;
				const i = Q.getState(), { username: c, selectedStudyId: l } = i, u = je(o.sourceType, "local");
				if (!u) return;
				const d = ft(i);
				if (!t && !r) return;
				const p = await Ft(e, u, d(o), a);
				if (C() !== a) return;
				if (!t && o.scoredVariantWarm?.outcome && o.scoredVariantWarm.inputs === p && (!n || "known-failures" !== o.scoredVariantWarm.outcome)) return;
				const m = o.scoredVariantWarm;
				if (!await V(a, [
					a.files,
					a.diaryEntries,
					a.markers,
					a.actiwareFileData,
					a.scoredVariantMasks
				], async () => {
					const r = await a.files.get(e);
					if (C() !== a || !r || JSON.stringify(r.scoredVariantWarm) !== JSON.stringify(m)) return !1;
					const n = await Ft(e, u, d(r), a);
					if (C() !== a || n !== p) return !1;
					if (r.scoredVariantWarm && (!r.scoredVariantWarm.outcome || r.scoredVariantWarm.inputs !== p) && (await a.scoredVariantMasks.where("fileId").equals(e).delete(), C() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					if ((t || r.scoredVariantWarm) && (await a.files.where(":id").equals(e).modify((e) => {
						delete e.scoredVariantWarm;
					}), C() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					return !0;
				}, s.signal) || C() !== a) return;
				await async function(e, t, r, n, a, s, o) {
					let i = !1;
					const c = () => {
						i = !0, q("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" });
					};
					if (C() !== a) return;
					ie({
						fileId: e,
						done: 0,
						total: t.length
					}, a);
					const l = A(() => {
						C() !== a && k.getState().cancel(`${a.name}:${me(e)}`);
					}), u = new AbortController(), d = () => {
						u.abort();
					};
					o.signal.addEventListener("abort", d, { once: !0 });
					try {
						const i = await jt(e, t, r, (e) => {
							o.progress(Number.parseInt(e.message, 10), t.length, e.message);
						}, a, o.signal, j(u.signal), d, s, n);
						await $t(() => Promise.resolve(), e, i, n, o.signal), o.signal.throwIfAborted(), i.dayFailures > 0 && (console.warn("[local-processing] Some days could not be precomputed; reimport the file to retry."), c());
					} catch {
						if (o.signal.aborted) return;
						console.warn("[local-processing] Background scored-variant warm failed."), c();
					} finally {
						o.signal.removeEventListener("abort", d), l(), ie(i && !o.signal.aborted && C() === a ? {
							fileId: e,
							done: de()?.done ?? 0,
							total: t.length,
							failed: !0
						} : null, a);
					}
					if (i) throw new Error("Background scored-variant warm failed.");
				}(e, o.availableDates, u, ve.captureWorkspaceBinding(a, {
					username: c,
					studyId: l,
					signal: s.signal
				}), a, d, s);
			} catch {
				if (s.signal.aborted) return;
				console.warn("[local-processing] Scored-variant warm could not be scheduled."), q("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" }), C() === a && ie({
					fileId: e,
					done: 0,
					total: 0,
					failed: !0
				}, a);
			}
		}(e, {
			...t,
			db: r
		}, n)
	});
}
function Nt(e, { retryKnownFailures: t = !1, signal: r } = {}) {
	return z({
		kind: v.VARIANT_RECOVERY,
		key: v.VARIANT_RECOVERY,
		label: "Resume scoring variants",
		workspaceId: e.name,
		signal: r,
		run: async (r) => {
			await e.projectMeta.get(ce);
			const n = (e) => null != e.id && "incomplete" !== e.ingestState && Boolean(e.sourceType && je(e.sourceType, "local")) && e.availableDates.length > 0 && !(e.epochLengthSeconds > 60), a = (await H(e)).filter(n);
			for (const o of a) {
				if (C() !== e) return;
				await Dt(o.id, {
					db: e,
					resumeIncomplete: !0,
					retryKnownFailures: t,
					signal: r.signal
				}), await r.yieldNow();
			}
			if (C() !== e || !e.isOpen()) return;
			const s = ft(Q.getState());
			await V(e, [
				e.projectMeta,
				e.files,
				e.diaryEntries,
				e.markers,
				e.actiwareFileData
			], async () => {
				const r = [], o = (await H(e)).filter(n);
				for (const n of o) {
					const o = je(n.sourceType, "local"), i = await Ft(n.id, o, s(n), e), c = (await e.files.get(n.id))?.scoredVariantWarm;
					if (!c?.outcome || c.inputs !== i || C() !== e) return void await e.projectMeta.delete(ce);
					r.push([n.id, i]), "known-failures" !== c.outcome || a.find((e) => e.id === n.id)?.scoredVariantWarm?.inputs === i && !t || ie({
						fileId: n.id,
						done: n.availableDates.length,
						total: n.availableDates.length,
						failed: !0
					}, e);
				}
				await e.projectMeta.put({
					key: ce,
					revision: Number.parseInt(fe(r), 16)
				});
			}, r.signal);
		}
	}).catch((t) => {
		if (r?.aborted || t instanceof DOMException && "AbortError" === t.name) throw t;
		throw q("warn", "Background scored-variant warm failed", { error_type: "Error" }), ie({
			fileId: 0,
			done: 0,
			total: 0,
			failed: !0
		}, e), /* @__PURE__ */ new Error("Stored scoring variants could not be resumed.");
	});
}
async function Vt(e, t, r, n, a) {
	const s = n ?? g(), o = await At(s, e, `cube:${String(t)}:${JSON.stringify(a)}`, (e, r) => Vt(e, t, r, s, a));
	if (o) {
		const t = {}, r = [];
		for (const n of o) for (const a of n.value.historyOutputs) {
			const s = new Uint8Array(a.results), o = s.length !== n.run.group.timestamps.length, i = o ? e.counts30s?.timestamps.length ?? 0 : e.timestamps.length, c = t[a.cubeConfig.id] ?? new ArrayBuffer(i);
			new Uint8Array(c).set(s.slice(o ? n.nativeStart : n.start, o ? n.nativeEnd : n.end), o ? n.nativeOffset : n.offset), t[a.cubeConfig.id] || r.push({
				cubeConfig: a.cubeConfig,
				results: c
			}), t[a.cubeConfig.id] = c;
		}
		return {
			algorithmResults: t,
			historyOutputs: r,
			skipped: o.reduce((e, t) => e + t.value.skipped, 0)
		};
	}
	const i = Pe(a), c = Le(i.modelId), l = Ot(t, !!r && r.length > 0 && "unconfigured" !== c.id, c, !!e.counts30s && e.counts30s.axisY.length > 0, i.threshold ?? void 0), u = await async function(e) {
		const t = e.configIds ? new Set(e.configIds) : null, r = {}, n = [];
		for (const s of e.plan.configs) if (!t || t.has(s.id)) try {
			const t = await Ue(s, e.backend, e.signals, r);
			t && (r[s.id] = t);
		} catch (a) {
			n.push({
				configId: s.id,
				reason: a instanceof Error ? a.message : String(a),
				...a instanceof Ye ? { inputUnavailable: !0 } : {}
			});
		}
		return {
			outputs: r,
			skipped: n
		};
	}({
		plan: l,
		backend: n ?? g(),
		signals: Tt(e, t, c, r)
	}), d = {}, p = [], m = new Map(l.configs.map((e) => [e.id, e]));
	for (const [f, g] of Object.entries(u.outputs)) {
		const e = m.get(f);
		if (!e) throw new Error(`cube output ${f} has no planned config`);
		const t = Et(g);
		d[f] = t, p.push({
			cubeConfig: e,
			results: t
		});
	}
	return {
		algorithmResults: d,
		historyOutputs: p,
		skipped: u.skipped.filter((e) => !e.inputUnavailable).length
	};
}
function Wt(e, t) {
	return e && null != t ? {
		...e,
		configs: {
			...e.configs,
			Oakley1997: {
				...e.configs?.Oakley1997,
				oakleyThreshold: t
			}
		}
	} : e;
}
async function Pt(e, t, r) {
	if (!t) return {};
	const n = r ?? g(), a = await At(n, e, `hasib:${JSON.stringify(t)}`, (e) => Pt(e, t, n));
	if (a) {
		const t = {};
		for (const r of a) for (const [n, a] of Object.entries(r.value)) {
			if (!a) continue;
			const s = t[n] ?? new Uint8Array(e.timestamps.length);
			s.set(a.slice(r.start, r.end), r.offset), t[n] = s;
		}
		return t;
	}
	const s = (t.variants ?? Ae).filter((e) => e !== ke);
	if (0 === s.length) return {};
	const o = t.countSource ?? "neishabouri_vm_60s";
	if (!function(e, t) {
		const { family: r, axis: n } = be(t);
		return (("neishabouri" === r ? {
			x: e.axisX,
			y: e.axisY,
			z: e.axisZ,
			vm: e.vectorMagnitude
		}[n] : {
			x: e.zeroCrossingX,
			y: e.zeroCrossingY,
			z: e.zeroCrossingZ,
			vm: void 0
		}[n])?.length ?? 0) > 0;
	}(e, o)) return {};
	const i = Float64Array.from(e.timestamps), c = (n.medianGapSeconds ? await n.medianGapSeconds(i) : await g().medianGapSeconds(i)) ?? t.countEpochSeconds ?? 60, l = await _e({
		backend: n,
		variants: s,
		anglez5s: /* @__PURE__ */ new Float64Array(),
		neishabouriCounts: {
			...e.axisX ? { x: new Float64Array(e.axisX) } : {},
			y: new Float64Array(e.axisY),
			...e.axisZ ? { z: new Float64Array(e.axisZ) } : {},
			vm: new Float64Array(e.vectorMagnitude)
		},
		neishabouriVm60s: new Float64Array(e.vectorMagnitude),
		zeroCrossingCountsByAxis: {
			...e.zeroCrossingX && e.zeroCrossingX.length > 0 ? { x: new Float64Array(e.zeroCrossingX) } : {},
			...e.zeroCrossingY && e.zeroCrossingY.length > 0 ? { y: new Float64Array(e.zeroCrossingY) } : {},
			...e.zeroCrossingZ && e.zeroCrossingZ.length > 0 ? { z: new Float64Array(e.zeroCrossingZ) } : {}
		},
		...e.zeroCrossingY && e.zeroCrossingY.length > 0 ? { zeroCrossingY60s: new Float64Array(e.zeroCrossingY) } : {},
		countSource: o,
		countEpochSeconds: c,
		...void 0 !== t.configs ? { configs: t.configs } : {}
	});
	return Object.fromEntries(l.map((e) => [e.key, e.result.sib]));
}
async function Lt(e, t, r) {
	const n = r ?? g(), a = await At(n, e, `ggir:${String(t)}`, (e) => Lt(e, t, n));
	if (a) {
		if (a.some((e) => !e.value)) return null;
		const t = new Uint8Array(e.timestamps.length), r = new Uint8Array(e.timestamps.length);
		for (const e of a) t.set(e.value.sadeh.slice(e.start, e.end), e.offset), r.set(e.value.ck.slice(e.start, e.end), e.offset);
		return {
			sadeh: t,
			ck: r
		};
	}
	if (!e.zeroCrossingY || 0 === e.zeroCrossingY.length) return null;
	const s = await _e({
		backend: r ?? g(),
		variants: ["Sadeh1994", "ColeKripke1992"],
		anglez5s: /* @__PURE__ */ new Float64Array(),
		zeroCrossingY60s: new Float64Array(e.zeroCrossingY),
		countSource: "zero_crossing_y_60s",
		countEpochSeconds: t
	}), o = Se("sadeh_1994"), i = Se("cole_kripke_1992"), c = s.find((e) => e.variant === o)?.result.sib, l = s.find((e) => e.variant === i)?.result.sib;
	return c && l ? {
		sadeh: c,
		ck: l
	} : null;
}
async function Yt(e, t) {
	const r = [], n = e.sadeh_1994_actilife.length, a = (e) => {
		e && e.length === n && r.push(e);
	};
	a(e.sadeh_1994_actilife), a(e.sadeh_1994_original), a(e.cole_kripke_1992_actilife), a(e.cole_kripke_1992_original), a(e.sadeh_1994_ggir), a(e.cole_kripke_1992_ggir), a(e.lstm_sleep_wake);
	for (const [s, o] of Object.entries(e.hasibVariants ?? {})) s !== _.TENSOR_MAJORITY_VOTE && s !== _.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== m(s)?.grammarId && a(o);
	for (const [s, o] of Object.entries(e.cubeOutputs ?? {})) s !== _.TENSOR_MAJORITY_VOTE && s !== _.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== m(s)?.grammarId && a(o);
	return 0 === r.length ? new Uint8Array(n) : t.scoreConsensus("majority_tie_sleep", r);
}
ue((e, t, r) => {
	Dt(e, {
		resumeIncomplete: !0,
		retryKnownFailures: !1,
		db: t,
		signal: r
	}).catch(() => {});
});
export { Nt as backfillInterruptedScoredVariantWarms, Ot as buildOrReuseAlgorithmOutputCubePlan, Yt as computeTensorConsensusForDay, $t as finalizeAndAuditScoredVariantWarm, Dt as rewarmFileScoredVariants, Vt as runAlgorithmCubeForDay, Lt as scoreBuiltinGgirSadehColeForDay, Pt as scoreCountBasedHasibVariantsForDay, Rt as sleepWakeToPersistedOutputs, Ct as t, jt as warmFileScoredVariants, Wt as withRecordingWakeThreshold };
