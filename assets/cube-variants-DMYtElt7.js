import { $t as e, Ar as n, At as t, Er as r, On as a, Qn as s, R as o, Vt as i, _t as c, an as l, ar as u, bn as d, en as f, er as m, f as p, g, gt as h, in as w, jr as y, jt as v, kn as b, kt as S, l as k, n as _, nr as C, o as A, ot as E, p as I, qn as M, r as O, rr as R, t as z, tn as T, tr as x, ut as F, wn as $ } from "./background-jobs-CPaTeltP.js";
import { $ as D, Ar as V, C as j, Ct as P, E as N, F as W, Fn as L, Fr as Y, In as U, Lr as B, Mn as H, Mr as G, Nr as K, Pn as J, Q as X, Rr as Z, Rt as q, T as Q, Tt as ee, Vn as ne, Vr as te, Wt as re, X as ae, Xn as se, Y as oe, Yr as ie, d as ce, gt as le, hn as ue, jn as de, jr as fe, kr as me, mt as pe, nn as ge, or as he, pt as we, qr as ye, vt as ve, wn as be, xt as Se, yt as ke, zr as _e, zt as Ce } from "./db-DGizvZzX.js";
import { a as Ae, i as Ee, n as Ie, o as Me, t as Oe } from "./local-ggir-hasib-variants-COlfVs-O.js";
import { A as Re, E as ze, M as Te, O as xe, k as Fe, y as $e } from "./local-nonwear-unified-DWWAm6ze.js";
import { a as De, g as Ve, m as je, o as Pe } from "./epoch-utils-Cj4dIHgK.js";
import { z as Ne } from "./local-export-shard-worker-Okf1DPvY.js";
import { y as We } from "./epoch-series-import-DiJ-G1_4.js";
import { A as Le, M as Ye, P as Ue, k as Be, rt as He, tt as Ge, w as Ke } from "./ggir-import-DwL2Ybg_.js";
var Je = class extends Error {};
async function Xe(e, n, r, a) {
	switch (e.family) {
		case "count_hasib": return async function(e, n, r) {
			const a = e.input.seriesKey, s = Ae(a), o = r.counts?.[a];
			if (!o || 0 === o.length) throw new Je(`Missing count input ${a}.`);
			if ("string" == typeof e.parameters.implementation) return Ze(e), async function(e, n, r) {
				const a = function(e) {
					const n = t(e.id);
					if (null === n || "count_cell" !== n.grammarId) return null;
					const r = n.values.method_family, a = n.values.implementation_variant;
					return void 0 === r || void 0 === a ? null : E.find((e) => e.methodFamilyId === r && e.implementationVariantId === a)?.primitiveId ?? null;
				}(e);
				if ("sadeh" === a) {
					if (!n.scoreSadeh) throw new Error("Registry Sadeh primitive (scoreSadeh) unavailable on this worker bundle.");
					const t = F.scoring_threshold, a = "number" == typeof t ? t : 0, s = "number" == typeof e.parameters.threshold ? e.parameters.threshold : a;
					return n.scoreSadeh(r, s);
				}
				if ("cole_kripke" === a) {
					if (!n.scoreColeKripke) throw new Error("Registry Cole-Kripke primitive (scoreColeKripke) unavailable on this worker bundle.");
					const t = !0 === e.parameters.useActilifeScaling;
					return n.scoreColeKripke(r, t);
				}
				throw new Error(`Unsupported provenance count scorer ${e.algorithm}.`);
			}(e, n, o);
			const c = function(e) {
				if (Ie.includes(e.algorithm)) return null;
				const n = t(e.id)?.values.method_family, r = i.find((e) => "sleep_wake" === e.kind && e.family === n), a = r?.nativeEpochSeconds;
				return !r || 30 !== a && 60 !== a ? null : {
					methodId: r.id,
					nativeEpochSeconds: a
				};
			}(e);
			if (c) return async function(e, n, t, r) {
				const a = Ae(e.input.seriesKey), s = S(a.family, a.axis, n.nativeEpochSeconds), o = r.counts?.[s];
				if (!o || 0 === o.length) throw new Je(`Missing native count input ${s}.`);
				if (!t.scoreEpochs || !t.foldOntoGrid) throw new Error("The typed epoch scorer (scoreEpochs) is unavailable on this worker bundle.");
				const i = await t.scoreEpochs({
					algorithm: n.methodId,
					signals: {
						counts: o,
						epochSeconds: n.nativeEpochSeconds
					}
				}), c = We(i, o.length);
				if (!c) throw new Error(`${n.methodId}: ${i.reason ?? "the scorer returned no series"}`);
				if (e.epochSeconds === n.nativeEpochSeconds) return c;
				const l = r.timestamps?.[n.nativeEpochSeconds], u = r.timestamps?.[e.epochSeconds];
				if (!l || !u || l.length !== c.length) throw new Je(`Missing the timestamps that align ${s} with the ${String(e.epochSeconds)} s grid.`);
				const d = await t.foldOntoGrid(l, Float64Array.from(c), u, e.epochSeconds, "majority_ties_sleep");
				return Uint8Array.from(d);
			}(e, c, n, r);
			Ze(e);
			const l = (await Me({
				backend: n,
				variants: [e.algorithm],
				anglez5s: /* @__PURE__ */ new Float64Array(),
				countSource: a,
				countEpochSeconds: s.epochSeconds,
				..."neishabouri" === s.family ? { neishabouriCounts: { [s.axis]: o } } : { zeroCrossingCountsByAxis: { [s.axis]: o } }
			}))[0];
			if (!l) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return l.result.sib;
		}(e, n, r);
		case "angle_hasib": return async function(e, n, t) {
			const r = h.angle_hasib;
			if (void 0 === r || e.algorithm !== r.algorithmValue) throw new Error(`Unsupported angle-HASIB algorithm ${e.algorithm}.`);
			if (!t.anglez5s || 0 === t.anglez5s.length) throw new Je(`Missing ${r.inputSeriesKey} input.`);
			const a = (await Me({
				backend: n,
				variants: [e.algorithm],
				anglez5s: t.anglez5s,
				countSource: S(c, "y", 60)
			}))[0];
			if (!a) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return a.result.sib;
		}(e, n, r);
		case "lstm": return async function(e, n, t) {
			const r = "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm, a = t.lstmProbabilities?.[r];
			if (!a || 0 === a.length) throw new Je(`Missing LSTM probabilities for ${r}.`);
			const s = F.model_threshold, o = "number" == typeof e.parameters.threshold ? e.parameters.threshold : "number" == typeof s ? s : .5;
			if (!n.thresholdProbabilities) throw new Error("The probability threshold (thresholdProbabilities) is unavailable on this worker bundle.");
			return n.thresholdProbabilities(Float64Array.from(a), o);
		}(e, n, r);
		case "consensus": return async function(e, n, t) {
			const r = (Array.isArray(e.parameters.inputConfigIds) ? e.parameters.inputConfigIds.filter((e) => "string" == typeof e) : e.lineage).map((e) => {
				const t = n[e];
				if (!t) throw new Je(`Missing consensus input ${e}.`);
				return t;
			});
			if (0 === r.length) throw new Error("Consensus requires at least one input.");
			const a = r[0].length;
			for (const o of r) if (o.length !== a) throw new Error(`Consensus inputs are not aligned (${String(o.length)} vs ${String(a)} epochs).`);
			const s = "string" == typeof e.parameters.strategy ? e.parameters.strategy : F.consensus_strategy;
			return t.scoreConsensus(s, r);
		}(e, a, n);
	}
}
function Ze(e) {
	const n = t(e.id)?.values, r = n?.implementation_variant, a = Y(String(n?.method_family), void 0 === r ? void 0 : String(r));
	if (!a.includes(e.epochSeconds)) throw new Error(`programming error: ${e.id} reached the runner, but ${e.algorithm} is valid only at ${a.join(", ")} s and the planner never plans it.`);
}
function qe(e) {
	return Z(e ?? null);
}
function Qe(e) {
	return q(e).map((e) => [e.start, e.end]);
}
function en(e) {
	return Ce(e).map((e) => [e.start, e.end]);
}
function nn(e) {
	let n = /* @__PURE__ */ new Float64Array(0);
	for (const t of e) n = Ve(n, new Float64Array(t));
	return n;
}
function tn(e) {
	const n = new Uint8Array(e.reduce((e, n) => e + n.byteLength, 0));
	let t = 0;
	for (const r of e) n.set(new Uint8Array(r), t), t += r.byteLength;
	return n;
}
async function rn(e, n, t) {
	const r = await ne(e, n, _e, d.VAN_HEES_2015, void 0, t), a = r?.sleepMarkers.find((e) => e.markerType === $.MAIN_SLEEP) ?? r?.sleepMarkers[0];
	return null != a?.onsetTimestamp && null != a.offsetTimestamp ? [a.onsetTimestamp, a.offsetTimestamp] : null;
}
async function an(e, n, t = I(), r = {}) {
	const a = t, s = r.readDay ?? ((n) => ce(e, n, a)), o = await Pe(e, n, a, s, r.fileRecord?.navigationFacts, r.wasmApi);
	if (!o) return null;
	const i = await s(await De(n, r.fileRecord?.navigationFacts, r.wasmApi)), c = (i ? [o, i] : [o]).filter((e) => e.timestamps.byteLength > 0), l = nn(c.map((e) => e.timestamps)), { startIndex: u, endIndex: d } = await Ne(l, n, r.wasmApi);
	if (d <= u) return null;
	const f = l.subarray(u, d), m = Array.from(f), p = Array.from(nn(c.map((e) => e.axisY)).subarray(u, d)), g = await X(f, {
		day: c[0],
		file: r.fileRecord
	}, r.wasmApi), h = await Q(e, a, r.fileRecord ? { file: r.fileRecord } : void 0), w = {}, y = {}, v = {};
	for (const I of h.cellIds) {
		const e = h(I), n = re(c, e);
		if ("stale" === n.status) {
			y[I] = n.reason;
			continue;
		}
		const t = n.outputs.filter((e) => null != e);
		if (t.length !== c.length) continue;
		const a = await Promise.all(t.map(async (e, n) => (await je(c[n], new Uint8Array(e), r.wasmApi))?.buffer ?? e));
		w[I] = Array.from(tn(a).subarray(u, d)), "ok" === e.status && null !== e.configHash && (v[I] = e.configHash);
	}
	const b = r.fileRecord ? Promise.resolve(r.fileRecord) : j(e, a), [S, k, _, C, A, E] = await Promise.all([
		rn(e, n, a),
		ae(e, n, a),
		"activitySpan" in r ? r.activitySpan ?? null : Se(e, a),
		a.scoredVariantMasks.get([e, n]),
		b.then((t) => Be(r.sourceAnalyses ?? Le, t, "guiderWindow")?.guiderWindow({
			fileId: e,
			date: n,
			db: a
		}) ?? null),
		b
	]), M = k ? await P(k, _, r.wasmApi) : null, O = m[0] ?? 0, R = (m[m.length - 1] ?? O) + g, z = c.flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter((e) => e >= O && e < R), T = M ? {
		diaryInBedTime: we(x = M),
		onsetTime: pe(x),
		diaryWakeTime: le(x),
		naps: Qe(x),
		nonwear: en(x)
	} : void 0;
	var x;
	const F = "warm-v3:" + Z({
		diary: qe(T),
		actiwareRestWindow: A,
		eventMarkerTimestamps: z,
		hdczaWindow: S,
		seriesRevision: E?.seriesRevision ?? 0,
		classifierConfigHashes: Object.keys(v).length > 0 ? v : void 0
	}), $ = C?.diaryFingerprint === F, D = {};
	if (C?.masks && $) for (const [I, j] of Object.entries(C.masks)) j.byteLength === m.length && (D[I] = new Uint8Array(j));
	const V = c.flatMap((e) => e.temperature && e.temperature.byteLength > 0 ? [e.temperature] : []), N = V.length === c.length ? Array.from(nn(V).subarray(u, d)) : void 0;
	return {
		fileId: e,
		analysisDate: n,
		timestamps: m,
		activityCounts: p,
		epochLengthSeconds: g,
		hdczaWindow: S,
		...z.length > 0 ? { eventMarkerTimestamps: z } : {},
		...A ? { actiwareRestWindow: A } : {},
		classifierOutputs: w,
		...Object.keys(y).length > 0 ? { staleClassifierCells: y } : {},
		precomputedVariantMasks: D,
		diaryFingerprint: F,
		...E?.sourceContentHash ? {
			sourceContentHash: E.sourceContentHash,
			seriesRevision: E.seriesRevision ?? 0
		} : {},
		...T ? { diary: T } : {},
		...N ? { temperature: N } : {}
	};
}
function sn(e) {
	const n = (e ?? "").trim();
	return "" === n ? "none" : n;
}
function on(e, n) {
	const t = {
		classifierConfigId: e.classifierConfigId.trim(),
		nonwear: sn(e.nonwear),
		periodSource: sn(e.periodSource),
		ruleset: sn(e.ruleset),
		rescoring: sn(e.rescoring)
	}, r = "study_selection" === t.nonwear && n?.length ? `${t.nonwear}_${[...new Set(n)].sort().join("_")}` : t.nonwear;
	return {
		id: v("scored_variant", {
			classifier_config_id: t.classifierConfigId,
			nonwear: r,
			period_source: t.periodSource,
			ruleset: t.ruleset,
			rescoring: t.rescoring
		}),
		configHash: Z({
			...t,
			nonwear: r
		}),
		config: t
	};
}
const cn = "cube_cell_absent", ln = new Map(i.map((e) => [e.id, e])), un = new Set(V.map((e) => e.slug)), dn = [30, 60];
function fn(e, n) {
	return {
		ok: !1,
		code: e,
		reason: n
	};
}
function mn(e, n) {
	return n().find((n) => n.id === e);
}
const pn = h.angle_hasib?.configId ?? "";
function gn(e) {
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
function hn(e, n = {}) {
	const t = e.algorithm.trim(), r = ln.get(t);
	if (!r) return fn("unknown_algorithm", `algorithm "${e.algorithm}" is not a known AlgorithmType`);
	if (n.capabilities && !n.capabilities.sleepAlgorithms.includes(t)) return fn("capability_unavailable", `algorithm "${t}" is not available for this file's capabilities`);
	if ("van_hees_2015" === t) return function() {
		const e = mn(pn, () => fe({
			includeFamilies: ["angle_hasib"],
			includeConsensus: !1
		}).configs);
		return e ? gn(e) : fn(cn, "the van_hees_2015 angle cell was not present in the cube plan");
	}();
	const a = r.family ?? "";
	return "sleep_wake" === r.kind && un.has(a) ? function(e, n) {
		const t = e.countMetric.trim();
		if (r = t, !Object.prototype.hasOwnProperty.call(me, r)) return fn("unknown_count_metric", `count metric "${e.countMetric}" is not a cube count source (expected neishabouri or zero_crossing)`);
		var r;
		const a = e.axis.trim();
		if (!me[t].includes(a)) return fn("incompatible_axis", `axis "${e.axis}" is not available for count metric "${t}"`);
		const s = e.epochSeconds;
		if (!dn.includes(s)) return fn("unsupported_epoch", `epoch length ${String(s)}s is not a count-cube epoch (expected 30 or 60)`);
		const o = s, i = v("count_cell", {
			method_family: n,
			count_family: t,
			axis: a,
			epoch_seconds: o
		}), c = mn(i, () => fe({
			includeFamilies: ["count_hasib"],
			includeConsensus: !1,
			epochSeconds: [o]
		}).configs);
		return c ? gn(c) : fn(cn, `derived cube cell "${i}" was not present in the cube plan`);
	}(e, a) : fn("not_a_cube_scorer", `algorithm "${t}" has no directly scorer-addressable count/angle cube cell`);
}
function wn(e) {
	return (n) => {
		const t = ge(e, n);
		return function(e) {
			const n = xe(e.currentAlgorithm), t = hn({
				...n,
				algorithm: Te(n.family, n.implementation) ?? e.currentAlgorithm,
				sleepDetectionRule: e.sleepDetectionRule,
				placementRuleset: e.placementRuleset,
				scorerPostprocessingPreset: e.scorerPostprocessingPreset
			}), r = /* @__PURE__ */ new Set();
			if (!e.placementFromSource && t.ok && Fe(Re(n.family)) === e.extractionPath && r.add(t.variant.cubeCellId), e.ggirHasibVariantsEnabled && !e.placementFromSource) {
				const n = Ae(e.ggirHasibCountSource);
				for (const t of e.ggirHasibVariants) {
					const a = V.find((e) => e.algorithm === t), s = t === Oe ? "van_hees_2015" : i.find((e) => e.family === a?.slug)?.id;
					if (!s) continue;
					const o = hn({
						algorithm: s,
						countMetric: n.family,
						axis: n.axis,
						epochSeconds: e.ggirHasibCountEpochSeconds,
						sleepDetectionRule: e.sleepDetectionRule,
						placementRuleset: e.placementRuleset,
						scorerPostprocessingPreset: e.scorerPostprocessingPreset
					});
					o.ok && r.add(o.variant.cubeCellId);
				}
			}
			const a = "ggir" === $e(e.currentAlgorithm) ? e.nonwearDetectorsGgir : e.nonwearDetectorsCounts;
			return {
				classifierConfigIds: [...r],
				nonwearDetectors: 1 === a.length ? [...a] : [ue],
				studyNonwearSelection: [...a],
				rulesets: [e.placementRuleset],
				rescorings: [e.scorerPostprocessingPreset],
				periodSources: "smart" === e.periodGuider ? [ye.diary, ye.hdcza] : [be(e.periodGuider, { hasDiary: !1 })?.source_a ?? ye.diary]
			};
		}({
			...e,
			currentAlgorithm: t.algorithm,
			periodGuider: t.periodGuider,
			nonwearDetectorsCounts: [...t.nonwearDetectorsCounts],
			placementFromSource: t.placementFromSource
		});
	};
}
function yn(e, n, t, { day: r, eventMarkerGuider: a, actiwareRestGuider: s }) {
	if (f.includes(e) && !n) return {
		included: !1,
		reason: "no diary for this day"
	};
	if (e === ye.hdcza && r && null == r.hdczaWindow) return {
		included: !1,
		reason: "no HDCZA window stored for this day"
	};
	if (e === ye.event_marker) {
		if (!a) return {
			included: !1,
			reason: "placement core predates the event-marker guider"
		};
		if (r && !r.eventMarkerTimestamps?.length) return {
			included: !1,
			reason: "no event-marker presses for this day"
		};
	}
	if (e === ye.actiware_rest_interval) {
		if (!s) return {
			included: !1,
			reason: "placement core predates the Actiware rest-interval guider"
		};
		if (r && !r.actiwareRestWindow) return {
			included: !1,
			reason: "no Actiware rest interval for this day"
		};
	}
	const o = w(t, T[e]);
	return null === o ? { included: !0 } : {
		included: !1,
		reason: `unsatisfied source capability: ${o.map((e) => `${e}=false`).join(", ") || "no implemented input signal"}`
	};
}
function vn(n, t) {
	const r = e[n];
	for (const e of r ?? []) if (e.length > 0 && e.every((e) => t.has(e))) return {
		included: !1,
		reason: `day input unavailable: ${e.join(" or ")}`
	};
	return { included: !0 };
}
async function bn(e, t, r) {
	const a = K(e);
	if (a && B(a, t.epochLengthSeconds) !== t.epochLengthSeconds) return async function(e, n, t) {
		const r = Float64Array.from(n.timestamps), a = n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts), s = await Ge(t, {
			timestamps: r,
			axisY: a,
			vectorMagnitude: /* @__PURE__ */ new Float64Array()
		}, n.epochLengthSeconds), i = (await Ke(t, { day: s }, ["day"], o, void 0, [e])).day?.get(e);
		return i?.available && i.nonwear ? { mask: await He(t, s.timestamps, i.nonwear, r) } : {
			mask: null,
			reason: i?.reason ?? null
		};
	}(e, t, r ?? n());
	const s = {
		counts: t.activityCounts instanceof Float64Array ? t.activityCounts : Float64Array.from(t.activityCounts),
		epochSeconds: t.epochLengthSeconds
	};
	t.nonwearSignals?.temperature && (s.temperature = new Float64Array(t.nonwearSignals.temperature)), t.nonwearSignals?.raw && (s.raw = t.nonwearSignals.raw), null != t.nonwearSignals?.sampleRate && (s.sampleRate = t.nonwearSignals.sampleRate);
	const i = await (r ?? n()).detectNonwearUnified({
		algorithm: e,
		signals: s
	});
	if (!i.available || null == i.nonwear) return {
		mask: null,
		reason: i.reason ?? null
	};
	if (i.elementSeconds === t.epochLengthSeconds && t.epochLengthSeconds > 0 && i.nonwear.length === t.timestamps.length && t.timestamps.every((e, n) => e === t.timestamps[0] + n * t.epochLengthSeconds) && i.nonwear.every((e) => 0 === e || 1 === e)) return { mask: i.nonwear };
	const c = ze(i, t.timestamps[0] ?? 0);
	return { mask: (await (r ?? n()).rasterizePeriods(Float64Array.from(c, (e) => e.startTsSec), Float64Array.from(c, (e) => e.endTsSec), Float64Array.from(t.timestamps), t.epochLengthSeconds)).mask };
}
var Sn = class extends Error {
	workerLost;
	constructor(e = !1) {
		super("Precomputed variant masks could not be saved."), this.name = "ScoredVariantPersistenceError", this.workerLost = e;
	}
};
const kn = /* @__PURE__ */ new WeakMap();
function _n(e) {
	const n = JSON.stringify(e, (e, n) => n instanceof Uint8Array ? Array.from(n) : n);
	return `${String(n.length)}:${Z(n)}`;
}
function Cn(e, n) {
	for (const t of n) {
		if (e.notes.length >= 12) return;
		e.notes.includes(t) || e.notes.push(t);
	}
}
async function An(e, t, { db: r = I(), signal: o, wasmApi: i, cancelOperation: c, narrowing: l } = {}) {
	const u = {
		computed: 0,
		skipped: 0,
		missingClassifier: 0,
		placementUnavailable: !1,
		notes: []
	}, d = i ?? n(), f = c ?? (() => {
		y(d);
	});
	m(o, "before the scored-variant plan");
	const p = function(e) {
		const { classifierConfigIds: n, capabilities: t, hasDiary: r = !1, includeNonwearNone: s = !0, day: o } = e, i = [], c = o ? n.filter((e) => {
			if (void 0 !== o.staleClassifierCells?.[e]) return !0;
			const n = o.classifierOutputs[e];
			return !(!n || n.length !== o.timestamps.length) || (i.push({
				axis: "classifier",
				value: e,
				reason: n ? `stored series of ${String(n.length)} epochs is not on the day's ${String(o.timestamps.length)}-epoch grid` : "no classifier output stored for this day"
			}), !1);
		}) : [...n], l = o ? function(e) {
			const n = /* @__PURE__ */ new Set(["device_wear_state_evidence_stream"]);
			return e.temperature && 0 !== e.temperature.length || n.add("temperature_epoch_stream"), n;
		}(o) : /* @__PURE__ */ new Set(), u = [];
		for (const a of t.nonwearAlgorithms) {
			if (e.nonwearDetectors && !e.nonwearDetectors.includes(a)) continue;
			const n = o ? vn(a, l) : { included: !0 };
			n.included ? u.push(a) : i.push({
				axis: "nonwear",
				value: a,
				reason: n.reason
			});
		}
		const d = [...new Set(e.studyNonwearSelection ?? [])];
		let f;
		d.length > 1 && (!e.nonwearDetectors || e.nonwearDetectors.includes("study_selection")) && (d.filter((e) => t.nonwearAlgorithms.includes(e) && (!o || vn(e, l).included)).length > 0 ? (u.push(ue), f = d) : i.push({
			axis: "nonwear",
			value: ue,
			reason: "none of the study's nonwear detectors can run for this day"
		}));
		const m = s ? ["none", ...u] : u, p = [], g = 2 === e.periodSources?.length && e.periodSources[0] === ye.diary && e.periodSources[1] === ye.hdcza ? [r ? ye.diary : ye.hdcza] : e.periodSources;
		for (const a of Object.values(ye)) {
			if (g && !g.includes(a)) continue;
			const n = yn(a, r, t, {
				day: o,
				eventMarkerGuider: e.eventMarkerGuider ?? !1,
				actiwareRestGuider: e.actiwareRestGuider ?? !1
			});
			n.included ? p.push(a) : i.push({
				axis: "periodSource",
				value: a,
				reason: n.reason
			});
		}
		const h = e.rulesets ?? [a.LEGACY, a.REGULARITY_V2], w = e.rescorings ?? [b.NONE, b.WEBSTER], y = {
			classifierConfigIds: [...c],
			nonwear: m,
			periodSource: p,
			ruleset: h,
			rescoring: w
		}, v = [], S = /* @__PURE__ */ new Set();
		for (const a of c) for (const e of m) for (const n of p) for (const t of h) for (const r of w) {
			const s = on({
				classifierConfigId: a,
				nonwear: e,
				periodSource: n,
				ruleset: t,
				rescoring: r
			}, f);
			S.has(s.id) || (S.add(s.id), v.push(s));
		}
		return {
			variants: v,
			axes: y,
			skipped: i,
			...f ? { studyNonwearSelection: f } : {}
		};
	}({
		classifierConfigIds: Object.keys(e.classifierOutputs),
		capabilities: t,
		hasDiary: null != e.diary,
		day: e,
		eventMarkerGuider: Boolean(e.eventMarkerTimestamps?.length),
		actiwareRestGuider: null != e.actiwareRestWindow,
		...l
	});
	if (0 === p.variants.length) return u;
	const g = p.variants.filter((n) => !e.precomputedVariantMasks[n.id]);
	if (u.skipped = p.variants.length - g.length, 0 === g.length) return u;
	const h = {};
	m(o, "before scored-variant nonwear computation");
	const w = await A(d, (n) => async function(e, n, t) {
		const r = {};
		for (const a of new Set(n)) "none" !== a && "study_selection" !== a && (r[a] = await bn(a, e, t));
		return r;
	}({
		timestamps: e.timestamps,
		activityCounts: e.activityCounts,
		epochLengthSeconds: e.epochLengthSeconds,
		...e.temperature ? { nonwearSignals: { temperature: e.temperature } } : {}
	}, function(e) {
		return [.../* @__PURE__ */ new Set([...e.axes.nonwear, ...e.studyNonwearSelection ?? []])];
	}(p), n), {
		ms: s,
		label: "scored-variant nonwear computation",
		signal: o,
		cancel: f
	});
	for (let n = 0; n < g.length; n += 2e3) {
		m(o, "before scored-variant warm computation");
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
			nonwearMasks: w,
			...p.studyNonwearSelection ? { studyNonwearDetectors: p.studyNonwearSelection } : {},
			variants: g.slice(n, n + 2e3).map((e) => ({
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
			p.studyNonwearSelection
		]) : _n(t);
		let s = kn.get(d);
		s || (s = /* @__PURE__ */ new Map(), kn.set(d, s));
		const i = s.get(a) ?? await A(d, (e) => e.runScoredVariantBatch(t), {
			ms: 3e5,
			label: "scored-variant warm computation",
			signal: o,
			cancel: c ?? (() => {
				y(d);
			})
		});
		if (0 === Object.keys(i.masks).length && s.set(a, i), m(o, "after scored-variant warm computation"), Object.assign(h, i.masks), u.computed += Object.keys(i.masks).length, u.missingClassifier += i.missingClassifier, Cn(u, i.notes), i.placementUnavailable) {
			u.placementUnavailable = !0;
			break;
		}
	}
	if (Object.keys(h).length > 0) {
		let n;
		try {
			m(o, "before scored-variant warm persistence");
			const { controller: t, release: a } = x(o);
			n = a;
			const s = t.signal;
			if (!await A(d, (n) => W(e.fileId, e.analysisDate, h, e.diaryFingerprint, r, n, s), {
				ms: 3e5,
				label: "scored-variant warm persistence",
				signal: void 0,
				cancel: () => {
					t.abort(), f();
				}
			})) throw new Sn();
		} catch (v) {
			o?.aborted && f(), R(v, o, "scored-variant warm persistence");
			const e = v instanceof Error && "QuotaExceededError" === v.name ? "QuotaExceededError" : "Error";
			throw console.warn("[scored-variant-warm] Precomputed mask persistence failed.", e), he("warn", "Precomputed variant mask persistence failed", { error_type: e }), new Sn(C(v));
		} finally {
			n?.();
		}
	}
	return u;
}
const En = /* @__PURE__ */ new WeakMap();
async function In(e, n, t, r) {
	const a = En.get(e)?.get(n);
	return a ? Promise.all(a.map(async (e) => {
		let n = e.run.answers.get(t);
		return n || (n = r(e.run.group, e.run.probabilities), e.run.answers.set(t, n)), {
			...e,
			value: await n
		};
	})) : null;
}
function Mn(e, n) {
	En.set(e, n);
}
function On(e) {
	const n = new Uint8Array(e.length);
	return n.set(e), n.buffer;
}
function Rn(e) {
	const n = {}, t = [];
	for (const [r, a] of Object.entries(e ?? {})) {
		if (!a) continue;
		const e = ie(r);
		if (!e) throw new Error(`sleep/wake output ${r} is not a declared AlgorithmRunKey (core.yaml)`);
		const s = On(a);
		n[e] = s, t.push({
			algoKey: e,
			results: s
		});
	}
	return {
		algorithmResults: n,
		historyOutputs: t
	};
}
function zn(e, n, t, r, a) {
	a && 0 !== a.length && (e[G(n, t, r)] = new Float64Array(a));
}
function Tn(e, n, t, r) {
	const a = {};
	zn(a, "neishabouri", "x", n, e.axisX), zn(a, "neishabouri", "y", n, e.axisY), zn(a, "neishabouri", "z", n, e.axisZ), zn(a, "neishabouri", "vm", n, e.vectorMagnitude), zn(a, "zero_crossing", "x", n, e.zeroCrossingX), zn(a, "zero_crossing", "y", n, e.zeroCrossingY), zn(a, "zero_crossing", "z", n, e.zeroCrossingZ);
	const s = e.counts30s;
	s && 30 !== n && (zn(a, "neishabouri", "x", 30, s.axisX), zn(a, "neishabouri", "y", 30, s.axisY), zn(a, "neishabouri", "z", 30, s.axisZ), zn(a, "neishabouri", "vm", 30, s.vectorMagnitude), zn(a, "zero_crossing", "x", 30, s.zeroCrossingX), zn(a, "zero_crossing", "y", 30, s.zeroCrossingY), zn(a, "zero_crossing", "z", 30, s.zeroCrossingZ));
	const o = { [n]: Float64Array.from(e.timestamps) };
	return s && 30 !== n && s.timestamps.length > 0 && (o[30] = Float64Array.from(s.timestamps)), {
		counts: a,
		timestamps: o,
		...r && r.length > 0 && "unconfigured" !== t.id ? { lstmProbabilities: { [t.id]: r } } : {}
	};
}
function xn(e) {
	return 120 !== e;
}
const Fn = /* @__PURE__ */ new Map();
function $n(e, n, t, r = !1, a) {
	const s = r && 30 !== e ? [30, e] : [e], o = s.join(","), i = n ? `${o}|lstm|${t.id}|${t.label}|selected:${String(a ?? "none")}|${JSON.stringify(t.thresholdPresets ?? null)}` : `${o}|nolstm`, c = Fn.get(i);
	if (c) return c;
	const l = fe({
		includeFamilies: n ? [
			"count_hasib",
			"lstm",
			"consensus"
		] : ["count_hasib", "consensus"],
		epochSeconds: s,
		includeConsensus: !0,
		...n ? { lstmModels: [{
			id: t.id,
			label: t.label,
			epochSeconds: e,
			thresholdPresets: null == a ? t.thresholdPresets : [{
				id: "selected",
				label: "Saved study threshold",
				threshold: a
			}, ...t.thresholdPresets.filter((e) => "selected" !== e.id)]
		}] } : {}
	});
	return Fn.set(i, l), l;
}
function Dn() {
	Fn.clear();
}
const Vn = {
	dayCount: 0,
	variantsComputed: 0,
	variantsSkipped: 0,
	dayFailures: 0
};
function jn(e, n) {
	return JSON.stringify({
		sourceCaps: e,
		narrowing: n ?? null
	}, (e, n) => n instanceof Set ? [...n].map(String).sort() : n);
}
async function Pn(e, n, t, r) {
	const [a, s, o, i] = await Promise.all([
		r.files.get(e),
		oe(e, r),
		r.markers.where("fileId").equals(e).toArray(),
		r.actiwareFileData.get(e)
	]);
	return "warm-v3:" + Z({
		plan: jn(n, t),
		series: [
			a?.sourceType,
			a?.sourceContentHash,
			a?.seriesRevision ?? 0,
			a?.epochLengthSeconds,
			a?.availableDates
		],
		geometry: s.some((e) => !e.importMappingProvenance?.diaryTemporalPolicy) ? ee() : null,
		diaries: s.map((e) => ({
			date: e.analysisDate,
			inBed: e.diaryInBedTime,
			onset: e.diaryOnsetTime,
			wake: e.diaryWakeTime,
			outOfBed: e.diaryOutOfBedTime,
			overlay: e.decisionOverlayJson,
			policy: e.importMappingProvenance?.diaryTemporalPolicy,
			naps: ve(e),
			nonwear: ke(e)
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
async function Nn(e, n, t, r, a = I(), o, i, c, d = wn(M().scoring()), f) {
	const g = a;
	if (!t) return Vn;
	const h = await j(e, g);
	if (h?.sourceType && !l(h.sourceType, "local")) return Vn;
	const w = { ...Vn }, y = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), b = await Se(e, g).then((e) => ({
		fileRecord: h,
		activitySpan: e
	}), () => ({ fileRecord: h })), S = d?.(b.fileRecord), k = await Pn(e, t, S, g), _ = /* @__PURE__ */ new Set();
	if (D(b.fileRecord) > 60) return Vn;
	let A = /* @__PURE__ */ new Map();
	const E = (n) => {
		let t = A.get(n);
		return t || (t = ce(e, n, g), A.set(n, t)), t;
	};
	let O = !1;
	const z = J((n, t) => {
		n === e && t === g && (O = !0);
	}), T = n.length;
	let x = 0;
	r?.({
		phase: "variants",
		percent: 98,
		message: `0/${String(T)} days`
	});
	const F = () => {
		x >= T || (x += 1, r?.({
			phase: "variants",
			percent: 0 === T ? 100 : 98 + 2 * x / T,
			message: `${String(x)}/${String(T)} days`
		}));
	};
	let $ = !1;
	try {
		let r = n;
		for (let a = 0; a < 2; a++) {
			A = /* @__PURE__ */ new Map();
			for (const n of r) if ($) v.add(n), F();
			else {
				performance.now(), w.variantsComputed;
				for (const e of A.keys()) e < n && A.delete(e);
				try {
					m(o, "before scored-variant warm day load");
					const r = await u(() => an(e, n, g, {
						...b,
						readDay: E,
						wasmApi: i
					}), s, "scored-variant day load", o, c ?? (() => {}));
					if (m(o, "after scored-variant warm day load"), !r || 0 === Object.keys(r.classifierOutputs).length) {
						F();
						continue;
					}
					const a = await An(r, t, {
						db: g,
						signal: o,
						wasmApi: i,
						cancelOperation: c,
						narrowing: S
					});
					_.delete(n), w.variantsComputed += a.computed, y.has(n) || (w.variantsSkipped += a.skipped), a.placementUnavailable || 0 !== a.missingClassifier ? v.add(n) : (y.add(n), v.delete(n)), F(), a.placementUnavailable && console.warn("[local-processing] Scored-variant warm placement was unavailable.");
				} catch (P) {
					R(P, o, "scored-variant warm"), console.warn("[local-processing] Scored-variant warm failed."), C(P) && ($ = !0), P instanceof Error && "ScoredVariantPersistenceError" === P.name && _.add(n), v.add(n), F();
				}
			}
			if ($ || a > 0 || !O && 0 === v.size) break;
			r = O ? n : [...v], O = !1;
		}
	} finally {
		z(), A = /* @__PURE__ */ new Map(), w.dayCount = y.size, o?.aborted && f && await Wn(() => Promise.resolve(), e, w, f);
	}
	let V = O || _.size > 0 || Boolean(o?.aborted);
	if (!V) try {
		const n = await g.scoredVariantMasks.where("fileId").equals(e).count();
		V = !await p(g, [
			g.files,
			g.diaryEntries,
			g.markers,
			g.actiwareFileData
		], async () => !o?.aborted && await Pn(e, t, S, g) === k && await g.files.update(e, { scoredVariantWarm: {
			inputs: k,
			maskDays: n,
			outcome: v.size > 0 ? "known-failures" : "complete",
			failedDays: v.size
		} }) > 0, o);
	} catch {
		V = !0, console.warn("[local-processing] Scored-variant warm stamp could not be saved.");
	}
	return w.dayFailures = V ? Math.max(v.size, T) : v.size, w;
}
async function Wn(e, n, t, a, s) {
	await e(), 0 !== t.variantsComputed && await se.recordWorkspaceBoundDurably(a, r.SYSTEM_RECALCULATION, {
		subject: "scored_variant_precompute",
		fileId: n,
		dayCount: t.dayCount,
		variantsComputed: t.variantsComputed,
		variantsSkipped: t.variantsSkipped,
		trigger: "file_processing"
	});
}
function Ln() {
	return z(k.SCORED_VARIANT_WARM);
}
function Yn(e, n = {}) {
	const t = n.db ?? I();
	return O({
		kind: k.SCORED_VARIANT_WARM,
		key: L(e),
		label: "Scoring variants",
		workspaceId: t.name,
		signal: n.signal,
		rerun: !0,
		run: (r) => async function(e, { forget: n = !1, resumeIncomplete: t = !1, retryKnownFailures: r = !0, db: a = I() }, s) {
			try {
				if (I() !== a) return;
				const o = await a.files.get(e);
				if (I() !== a || !o || "incomplete" === o.ingestState || 0 === o.availableDates.length || !o.sourceType || o.epochLengthSeconds > 60) return;
				const i = M().scoring(), { username: c, selectedStudyId: u } = i, d = l(o.sourceType, "local");
				if (!d) return;
				const f = wn(i);
				if (!n && !t) return;
				const m = await Pn(e, d, f(o), a);
				if (I() !== a) return;
				if (!n && o.scoredVariantWarm?.outcome && o.scoredVariantWarm.inputs === m && (!r || "known-failures" !== o.scoredVariantWarm.outcome)) return;
				const h = o.scoredVariantWarm;
				if (!await p(a, [
					a.files,
					a.diaryEntries,
					a.markers,
					a.actiwareFileData,
					a.scoredVariantMasks
				], async () => {
					const t = await a.files.get(e);
					if (I() !== a || !t || JSON.stringify(t.scoredVariantWarm) !== JSON.stringify(h)) return !1;
					const r = await Pn(e, d, f(t), a);
					if (I() !== a || r !== m) return !1;
					if (t.scoredVariantWarm && (!t.scoredVariantWarm.outcome || t.scoredVariantWarm.inputs !== m) && (await a.scoredVariantMasks.where("fileId").equals(e).delete(), I() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					if ((n || t.scoredVariantWarm) && (await a.files.where(":id").equals(e).modify((e) => {
						delete e.scoredVariantWarm;
					}), I() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					return !0;
				}, s.signal) || I() !== a) return;
				await async function(e, n, t, r, a, s, o) {
					let i = !1;
					const c = () => {
						i = !0, he("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" });
					};
					if (I() !== a) return;
					U({
						fileId: e,
						done: 0,
						total: n.length
					}, a);
					const l = g(() => {
						I() !== a && M().jobs().cancel(`${a.name}:${L(e)}`);
					}), u = new AbortController(), d = () => {
						u.abort();
					};
					o.signal.addEventListener("abort", d, { once: !0 });
					try {
						const i = await Nn(e, n, t, (e) => {
							o.progress(Number.parseInt(e.message, 10), n.length, e.message);
						}, a, o.signal, _(u.signal), d, s, r);
						await Wn(() => Promise.resolve(), e, i, r, o.signal), o.signal.throwIfAborted(), i.dayFailures > 0 && (console.warn("[local-processing] Some days could not be precomputed; reimport the file to retry."), c());
					} catch {
						if (o.signal.aborted) return;
						console.warn("[local-processing] Background scored-variant warm failed."), c();
					} finally {
						o.signal.removeEventListener("abort", d), l(), U(i && !o.signal.aborted && I() === a ? {
							fileId: e,
							done: H()?.done ?? 0,
							total: n.length,
							failed: !0
						} : null, a);
					}
					if (i) throw new Error("Background scored-variant warm failed.");
				}(e, o.availableDates, d, se.captureWorkspaceBinding(a, {
					username: c,
					studyId: u,
					signal: s.signal
				}), a, f, s);
			} catch {
				if (s.signal.aborted) return;
				console.warn("[local-processing] Scored-variant warm could not be scheduled."), he("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" }), I() === a && U({
					fileId: e,
					done: 0,
					total: 0,
					failed: !0
				}, a);
			}
		}(e, {
			...n,
			db: t
		}, r)
	});
}
function Un(e, { retryKnownFailures: n = !1, signal: t } = {}) {
	return O({
		kind: k.VARIANT_RECOVERY,
		key: k.VARIANT_RECOVERY,
		label: "Resume scoring variants",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			await e.projectMeta.get(de);
			const r = (e) => null != e.id && "incomplete" !== e.ingestState && Boolean(e.sourceType && l(e.sourceType, "local")) && e.availableDates.length > 0 && !(e.epochLengthSeconds > 60), a = (await N(e)).filter(r);
			for (const o of a) {
				if (I() !== e) return;
				await Yn(o.id, {
					db: e,
					resumeIncomplete: !0,
					retryKnownFailures: n,
					signal: t.signal
				}), await t.yieldNow();
			}
			if (I() !== e || !e.isOpen()) return;
			const s = wn(M().scoring());
			await p(e, [
				e.projectMeta,
				e.files,
				e.diaryEntries,
				e.markers,
				e.actiwareFileData
			], async () => {
				const t = [], o = (await N(e)).filter(r);
				for (const r of o) {
					const o = l(r.sourceType, "local"), i = await Pn(r.id, o, s(r), e), c = (await e.files.get(r.id))?.scoredVariantWarm;
					if (!c?.outcome || c.inputs !== i || I() !== e) return void await e.projectMeta.delete(de);
					t.push([r.id, i]), "known-failures" !== c.outcome || a.find((e) => e.id === r.id)?.scoredVariantWarm?.inputs === i && !n || U({
						fileId: r.id,
						done: r.availableDates.length,
						total: r.availableDates.length,
						failed: !0
					}, e);
				}
				await e.projectMeta.put({
					key: de,
					revision: Number.parseInt(Z(t), 16)
				});
			}, t.signal);
		}
	}).catch((n) => {
		if (t?.aborted || n instanceof DOMException && "AbortError" === n.name) throw n;
		throw he("warn", "Background scored-variant warm failed", { error_type: "Error" }), U({
			fileId: 0,
			done: 0,
			total: 0,
			failed: !0
		}, e), /* @__PURE__ */ new Error("Stored scoring variants could not be resumed.");
	});
}
async function Bn(e, t, r, a, s) {
	const o = a ?? n(), i = await In(o, e, `cube:${String(t)}:${JSON.stringify(s)}`, (e, n) => Bn(e, t, n, o, s));
	if (i) {
		const n = {}, t = [];
		for (const r of i) for (const a of r.value.historyOutputs) {
			const s = new Uint8Array(a.results), o = s.length !== r.run.group.timestamps.length, i = o ? e.counts30s?.timestamps.length ?? 0 : e.timestamps.length, c = n[a.cubeConfig.id] ?? new ArrayBuffer(i);
			new Uint8Array(c).set(s.slice(o ? r.nativeStart : r.start, o ? r.nativeEnd : r.end), o ? r.nativeOffset : r.offset), n[a.cubeConfig.id] || t.push({
				cubeConfig: a.cubeConfig,
				results: c
			}), n[a.cubeConfig.id] = c;
		}
		return {
			algorithmResults: n,
			historyOutputs: t,
			skipped: i.reduce((e, n) => e + n.value.skipped, 0)
		};
	}
	const c = Ue(s), l = Ye(c.modelId), u = $n(t, !!r && r.length > 0 && "unconfigured" !== l.id, l, !!e.counts30s && e.counts30s.axisY.length > 0, c.threshold ?? void 0), d = await async function(e) {
		const n = e.configIds ? new Set(e.configIds) : null, t = {}, r = [];
		for (const s of e.plan.configs) if (!n || n.has(s.id)) try {
			const n = await Xe(s, e.backend, e.signals, t);
			n && (t[s.id] = n);
		} catch (a) {
			r.push({
				configId: s.id,
				reason: a instanceof Error ? a.message : String(a),
				...a instanceof Je ? { inputUnavailable: !0 } : {}
			});
		}
		return {
			outputs: t,
			skipped: r
		};
	}({
		plan: u,
		backend: a ?? n(),
		signals: Tn(e, t, l, r)
	}), f = {}, m = [], p = new Map(u.configs.map((e) => [e.id, e]));
	for (const [n, g] of Object.entries(d.outputs)) {
		const e = p.get(n);
		if (!e) throw new Error(`cube output ${n} has no planned config`);
		const t = On(g);
		f[n] = t, m.push({
			cubeConfig: e,
			results: t
		});
	}
	return {
		algorithmResults: f,
		historyOutputs: m,
		skipped: d.skipped.filter((e) => !e.inputUnavailable).length
	};
}
function Hn(e, n) {
	return e && null != n ? {
		...e,
		configs: {
			...e.configs,
			Oakley1997: {
				...e.configs?.Oakley1997,
				oakleyThreshold: n
			}
		}
	} : e;
}
async function Gn(e, t, r) {
	if (!t) return {};
	const a = r ?? n(), s = await In(a, e, `hasib:${JSON.stringify(t)}`, (e) => Gn(e, t, a));
	if (s) {
		const n = {};
		for (const t of s) for (const [r, a] of Object.entries(t.value)) {
			if (!a) continue;
			const s = n[r] ?? new Uint8Array(e.timestamps.length);
			s.set(a.slice(t.start, t.end), t.offset), n[r] = s;
		}
		return n;
	}
	const o = (t.variants ?? Ie).filter((e) => e !== Oe);
	if (0 === o.length) return {};
	const i = t.countSource ?? "neishabouri_vm_60s";
	if (!function(e, n) {
		const { family: t, axis: r } = Ae(n);
		return (("neishabouri" === t ? {
			x: e.axisX,
			y: e.axisY,
			z: e.axisZ,
			vm: e.vectorMagnitude
		}[r] : {
			x: e.zeroCrossingX,
			y: e.zeroCrossingY,
			z: e.zeroCrossingZ,
			vm: void 0
		}[r])?.length ?? 0) > 0;
	}(e, i)) return {};
	const c = Float64Array.from(e.timestamps), l = (a.medianGapSeconds ? await a.medianGapSeconds(c) : await n().medianGapSeconds(c)) ?? t.countEpochSeconds ?? 60, u = await Me({
		backend: a,
		variants: o,
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
		countSource: i,
		countEpochSeconds: l,
		...void 0 !== t.configs ? { configs: t.configs } : {}
	});
	return Object.fromEntries(u.map((e) => [e.key, e.result.sib]));
}
async function Kn(e, t, r) {
	const a = r ?? n(), s = await In(a, e, `ggir:${String(t)}`, (e) => Kn(e, t, a));
	if (s) {
		if (s.some((e) => !e.value)) return null;
		const n = new Uint8Array(e.timestamps.length), t = new Uint8Array(e.timestamps.length);
		for (const e of s) n.set(e.value.sadeh.slice(e.start, e.end), e.offset), t.set(e.value.ck.slice(e.start, e.end), e.offset);
		return {
			sadeh: n,
			ck: t
		};
	}
	if (!e.zeroCrossingY || 0 === e.zeroCrossingY.length) return null;
	const o = await Me({
		backend: r ?? n(),
		variants: ["Sadeh1994", "ColeKripke1992"],
		anglez5s: /* @__PURE__ */ new Float64Array(),
		zeroCrossingY60s: new Float64Array(e.zeroCrossingY),
		countSource: "zero_crossing_y_60s",
		countEpochSeconds: t
	}), i = Ee("sadeh_1994"), c = Ee("cole_kripke_1992"), l = o.find((e) => e.variant === i)?.result.sib, u = o.find((e) => e.variant === c)?.result.sib;
	return l && u ? {
		sadeh: l,
		ck: u
	} : null;
}
async function Jn(e, n) {
	const r = [], a = e.sadeh_1994_actilife.length, s = (e) => {
		e && e.length === a && r.push(e);
	};
	s(e.sadeh_1994_actilife), s(e.sadeh_1994_original), s(e.cole_kripke_1992_actilife), s(e.cole_kripke_1992_original), s(e.sadeh_1994_ggir), s(e.cole_kripke_1992_ggir), s(e.lstm_sleep_wake);
	for (const [o, i] of Object.entries(e.hasibVariants ?? {})) o !== te.TENSOR_MAJORITY_VOTE && o !== te.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== t(o)?.grammarId && s(i);
	for (const [o, i] of Object.entries(e.cubeOutputs ?? {})) o !== te.TENSOR_MAJORITY_VOTE && o !== te.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== t(o)?.grammarId && s(i);
	return 0 === r.length ? new Uint8Array(a) : n.scoreConsensus("majority_tie_sleep", r);
}
J((e, n, t) => {
	Yn(e, {
		resumeIncomplete: !0,
		retryKnownFailures: !1,
		db: n,
		signal: t
	}).catch(() => {});
});
export { Dn as _resetCubePlanCacheForTest, Ln as awaitScheduledScoredVariantWarms, Un as backfillInterruptedScoredVariantWarms, $n as buildOrReuseAlgorithmOutputCubePlan, On as cloneOutputBuffer, Jn as computeTensorConsensusForDay, xn as cubeRunsOnGrid, Wn as finalizeAndAuditScoredVariantWarm, Yn as rewarmFileScoredVariants, Bn as runAlgorithmCubeForDay, Kn as scoreBuiltinGgirSadehColeForDay, Gn as scoreCountBasedHasibVariantsForDay, Rn as sleepWakeToPersistedOutputs, Mn as t, Nn as warmFileScoredVariants, Hn as withRecordingWakeThreshold };
