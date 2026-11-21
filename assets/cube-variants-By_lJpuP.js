import { An as e, At as n, Mr as t, Nr as r, Or as s, R as a, Vt as o, Yn as i, _t as c, ar as l, en as u, er as d, f, g as p, gt as m, ir as g, jn as h, jt as w, kt as y, l as v, n as b, nn as S, nr as k, o as _, on as C, ot as A, p as E, r as O, rn as I, rr as z, sn as M, sr as R, t as x, tn as F, ut as T } from "./background-jobs-XKgiZRrI.js";
import { $r as $, Bn as j, Cn as V, Dn as D, En as P, Fn as N, Fr as L, Gn as Y, Gr as U, Hr as W, In as B, Ir as H, J as G, Lr as J, Lt as K, Nr as Z, On as X, P as q, Pr as Q, Q as ee, Rn as ne, Rt as te, S as re, St as se, T as ae, Tn as oe, Ur as ie, Ut as ce, Vr as le, Y as ue, Z as de, Zr as fe, _t as pe, bt as me, d as ge, er as he, ft as we, ht as ye, mn as ve, pt as be, tn as Se, ur as ke, vt as _e, w as Ce, wn as Ae, wt as Ee, zn as Oe, zr as Ie } from "./db-5ieqyMTc.js";
import { a as ze, i as Me, n as Re, o as xe, t as Fe } from "./local-ggir-hasib-variants-CgUDVCFF.js";
import { A as Te, E as $e, M as je, O as Ve, k as De, y as Pe } from "./local-nonwear-unified-qM9YQyQW.js";
import { a as Ne, g as Le, m as Ye, o as Ue } from "./epoch-utils-BGU9d2_6.js";
import { B as We } from "./local-export-shard-worker-SpuZhuag.js";
import { T as Be } from "./ingest-C27A4S5W.js";
import { A as He, M as Ge, N as Je, rt as Ke, tt as Ze, w as Xe } from "./ggir-import-DWwaCyXx.js";
var qe = class extends Error {};
async function Qe(e, t, r, s) {
	switch (e.family) {
		case "count_hasib": return async function(e, t, r) {
			const s = e.input.seriesKey, a = ze(s), i = r.counts?.[s];
			if (!i || 0 === i.length) throw new qe(`Missing count input ${s}.`);
			if ("string" == typeof e.parameters.implementation) return en(e), async function(e, t, r) {
				const s = function(e) {
					const t = n(e.id);
					if (null === t || "count_cell" !== t.grammarId) return null;
					const r = t.values.method_family, s = t.values.implementation_variant;
					return void 0 === r || void 0 === s ? null : A.find((e) => e.methodFamilyId === r && e.implementationVariantId === s)?.primitiveId ?? null;
				}(e);
				if ("sadeh" === s) {
					if (!t.scoreSadeh) throw new Error("Registry Sadeh primitive (scoreSadeh) unavailable on this worker bundle.");
					const n = T.scoring_threshold, s = "number" == typeof n ? n : 0, a = "number" == typeof e.parameters.threshold ? e.parameters.threshold : s;
					return t.scoreSadeh(r, a);
				}
				if ("cole_kripke" === s) {
					if (!t.scoreColeKripke) throw new Error("Registry Cole-Kripke primitive (scoreColeKripke) unavailable on this worker bundle.");
					const n = !0 === e.parameters.useActilifeScaling;
					return t.scoreColeKripke(r, n);
				}
				throw new Error(`Unsupported provenance count scorer ${e.algorithm}.`);
			}(e, t, i);
			const c = function(e) {
				if (Re.includes(e.algorithm)) return null;
				const t = n(e.id)?.values.method_family, r = o.find((e) => "sleep_wake" === e.kind && e.family === t), s = r?.nativeEpochSeconds;
				return !r || 30 !== s && 60 !== s ? null : {
					methodId: r.id,
					nativeEpochSeconds: s
				};
			}(e);
			if (c) return async function(e, n, t, r) {
				const s = ze(e.input.seriesKey), a = y(s.family, s.axis, n.nativeEpochSeconds), o = r.counts?.[a];
				if (!o || 0 === o.length) throw new qe(`Missing native count input ${a}.`);
				if (!t.scoreEpochs || !t.foldOntoGrid) throw new Error("The typed epoch scorer (scoreEpochs) is unavailable on this worker bundle.");
				const i = await t.scoreEpochs({
					algorithm: n.methodId,
					signals: {
						counts: o,
						epochSeconds: n.nativeEpochSeconds
					}
				}), c = Be(i, o.length);
				if (!c) throw new Error(`${n.methodId}: ${i.reason ?? "the scorer returned no series"}`);
				if (e.epochSeconds === n.nativeEpochSeconds) return c;
				const l = r.timestamps?.[n.nativeEpochSeconds], u = r.timestamps?.[e.epochSeconds];
				if (!l || !u || l.length !== c.length) throw new qe(`Missing the timestamps that align ${a} with the ${String(e.epochSeconds)} s grid.`);
				const d = await t.foldOntoGrid(l, Float64Array.from(c), u, e.epochSeconds, "majority_ties_sleep");
				return Uint8Array.from(d);
			}(e, c, t, r);
			en(e);
			const l = (await xe({
				backend: t,
				variants: [e.algorithm],
				anglez5s: /* @__PURE__ */ new Float64Array(),
				countSource: s,
				countEpochSeconds: a.epochSeconds,
				..."neishabouri" === a.family ? { neishabouriCounts: { [a.axis]: i } } : { zeroCrossingCountsByAxis: { [a.axis]: i } }
			}))[0];
			if (!l) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return l.result.sib;
		}(e, t, r);
		case "angle_hasib": return async function(e, n, t) {
			const r = m.angle_hasib;
			if (void 0 === r || e.algorithm !== r.algorithmValue) throw new Error(`Unsupported angle-HASIB algorithm ${e.algorithm}.`);
			if (!t.anglez5s || 0 === t.anglez5s.length) throw new qe(`Missing ${r.inputSeriesKey} input.`);
			const s = (await xe({
				backend: n,
				variants: [e.algorithm],
				anglez5s: t.anglez5s,
				countSource: y(c, "y", 60)
			}))[0];
			if (!s) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return s.result.sib;
		}(e, t, r);
		case "lstm": return async function(e, n, t) {
			const r = "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm, s = t.lstmProbabilities?.[r];
			if (!s || 0 === s.length) throw new qe(`Missing LSTM probabilities for ${r}.`);
			const a = T.model_threshold, o = "number" == typeof e.parameters.threshold ? e.parameters.threshold : "number" == typeof a ? a : .5;
			if (!n.thresholdProbabilities) throw new Error("The probability threshold (thresholdProbabilities) is unavailable on this worker bundle.");
			return n.thresholdProbabilities(Float64Array.from(s), o);
		}(e, t, r);
		case "consensus": return async function(e, n, t) {
			const r = (Array.isArray(e.parameters.inputConfigIds) ? e.parameters.inputConfigIds.filter((e) => "string" == typeof e) : e.lineage).map((e) => {
				const t = n[e];
				if (!t) throw new qe(`Missing consensus input ${e}.`);
				return t;
			});
			if (0 === r.length) throw new Error("Consensus requires at least one input.");
			const s = r[0].length;
			for (const o of r) if (o.length !== s) throw new Error(`Consensus inputs are not aligned (${String(o.length)} vs ${String(s)} epochs).`);
			const a = "string" == typeof e.parameters.strategy ? e.parameters.strategy : T.consensus_strategy;
			return t.scoreConsensus(a, r);
		}(e, s, t);
	}
}
function en(e) {
	const t = n(e.id)?.values, r = t?.implementation_variant, s = Ie(String(t?.method_family), void 0 === r ? void 0 : String(r));
	if (!s.includes(e.epochSeconds)) throw new Error(`programming error: ${e.id} reached the runner, but ${e.algorithm} is valid only at ${s.join(", ")} s and the planner never plans it.`);
}
function nn(e) {
	return W(e ?? null);
}
function tn(e) {
	return K(e).map((e) => [e.start, e.end]);
}
function rn(e) {
	return te(e).map((e) => [e.start, e.end]);
}
function sn(e) {
	let n = /* @__PURE__ */ new Float64Array(0);
	for (const t of e) n = Le(n, new Float64Array(t));
	return n;
}
function an(e) {
	const n = new Uint8Array(e.reduce((e, n) => e + n.byteLength, 0));
	let t = 0;
	for (const r of e) n.set(new Uint8Array(r), t), t += r.byteLength;
	return n;
}
async function on(e, n, t = E(), r = {}) {
	const s = t, a = r.readDay ?? ((n) => ge(e, n, s)), o = await Ue(e, n, s, a, r.fileRecord?.navigationFacts, r.wasmApi);
	if (!o) return null;
	const i = await a(await Ne(n, r.fileRecord?.navigationFacts, r.wasmApi)), c = (i ? [o, i] : [o]).filter((e) => e.timestamps.byteLength > 0), l = sn(c.map((e) => e.timestamps)), { startIndex: u, endIndex: d } = await We(l, n, r.wasmApi);
	if (d <= u) return null;
	const f = l.subarray(u, d), p = Array.from(f), m = Array.from(sn(c.map((e) => e.axisY)).subarray(u, d)), g = await de(f, {
		day: c[0],
		file: r.fileRecord
	}, r.wasmApi), h = await Ce(e, s, r.fileRecord ? { file: r.fileRecord } : void 0), w = {}, y = {}, v = {};
	for (const E of h.cellIds) {
		const e = h(E), n = ce(c, e);
		if ("stale" === n.status) {
			y[E] = n.reason;
			continue;
		}
		const t = n.outputs.filter((e) => null != e);
		if (t.length !== c.length) continue;
		const s = await Promise.all(t.map(async (e, n) => (await Ye(c[n], new Uint8Array(e), r.wasmApi))?.buffer ?? e));
		w[E] = Array.from(an(s).subarray(u, d)), "ok" === e.status && null !== e.configHash && (v[E] = e.configHash);
	}
	const b = r.fileRecord ? Promise.resolve(r.fileRecord) : re(e, s), [S, k, _, C, A] = await Promise.all([
		ue(e, n, s),
		"activitySpan" in r ? r.activitySpan ?? null : me(e, s),
		s.scoredVariantMasks.get([e, n]),
		b.then((t) => P(Je, {
			fileId: e,
			file: t,
			date: n,
			db: s,
			autoScoreMarker: (t) => Y(e, n, ie, t, void 0, s)
		})),
		b
	]), O = S ? await se(S, k, r.wasmApi) : null, I = p[0] ?? 0, z = (p[p.length - 1] ?? I) + g, M = c.flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter((e) => e >= I && e < z), R = O ? {
		diaryInBedTime: we(x = O),
		onsetTime: be(x),
		diaryWakeTime: ye(x),
		naps: tn(x),
		nonwear: rn(x)
	} : void 0;
	var x;
	const F = "warm-v3:" + W({
		diary: nn(R),
		...oe(Je, C),
		eventMarkerTimestamps: M,
		seriesRevision: A?.seriesRevision ?? 0,
		classifierConfigHashes: Object.keys(v).length > 0 ? v : void 0
	}), T = _?.diaryFingerprint === F, $ = {};
	if (_?.masks && T) for (const [E, D] of Object.entries(_.masks)) D.byteLength === p.length && ($[E] = new Uint8Array(D));
	const j = c.flatMap((e) => e.temperature && e.temperature.byteLength > 0 ? [e.temperature] : []), V = j.length === c.length ? Array.from(sn(j).subarray(u, d)) : void 0;
	return {
		fileId: e,
		analysisDate: n,
		timestamps: p,
		activityCounts: m,
		epochLengthSeconds: g,
		guiderWindows: C,
		...M.length > 0 ? { eventMarkerTimestamps: M } : {},
		classifierOutputs: w,
		...Object.keys(y).length > 0 ? { staleClassifierCells: y } : {},
		precomputedVariantMasks: $,
		diaryFingerprint: F,
		...A?.sourceContentHash ? {
			sourceContentHash: A.sourceContentHash,
			seriesRevision: A.seriesRevision ?? 0
		} : {},
		...R ? { diary: R } : {},
		...V ? { temperature: V } : {}
	};
}
function cn(e) {
	const n = (e ?? "").trim();
	return "" === n ? "none" : n;
}
function ln(e, n) {
	const t = {
		classifierConfigId: e.classifierConfigId.trim(),
		nonwear: cn(e.nonwear),
		periodSource: cn(e.periodSource),
		ruleset: cn(e.ruleset),
		rescoring: cn(e.rescoring)
	}, r = "study_selection" === t.nonwear && n?.length ? `${t.nonwear}_${[...new Set(n)].sort().join("_")}` : t.nonwear;
	return {
		id: w("scored_variant", {
			classifier_config_id: t.classifierConfigId,
			nonwear: r,
			period_source: t.periodSource,
			ruleset: t.ruleset,
			rescoring: t.rescoring
		}),
		configHash: W({
			...t,
			nonwear: r
		}),
		config: t
	};
}
const un = "cube_cell_absent", dn = new Map(o.map((e) => [e.id, e])), fn = new Set(Q.map((e) => e.slug)), pn = [30, 60];
function mn(e, n) {
	return {
		ok: !1,
		code: e,
		reason: n
	};
}
function gn(e, n) {
	return n().find((n) => n.id === e);
}
const hn = m.angle_hasib?.configId ?? "";
function wn(e) {
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
function yn(e, n = {}) {
	const t = e.algorithm.trim(), r = dn.get(t);
	if (!r) return mn("unknown_algorithm", `algorithm "${e.algorithm}" is not a known AlgorithmType`);
	if (n.capabilities && !n.capabilities.sleepAlgorithms.includes(t)) return mn("capability_unavailable", `algorithm "${t}" is not available for this file's capabilities`);
	if ("van_hees_2015" === t) return function() {
		const e = gn(hn, () => L({
			includeFamilies: ["angle_hasib"],
			includeConsensus: !1
		}).configs);
		return e ? wn(e) : mn(un, "the van_hees_2015 angle cell was not present in the cube plan");
	}();
	const s = r.family ?? "";
	return "sleep_wake" === r.kind && fn.has(s) ? function(e, n) {
		const t = e.countMetric.trim();
		if (r = t, !Object.prototype.hasOwnProperty.call(Z, r)) return mn("unknown_count_metric", `count metric "${e.countMetric}" is not a cube count source (expected neishabouri or zero_crossing)`);
		var r;
		const s = e.axis.trim();
		if (!Z[t].includes(s)) return mn("incompatible_axis", `axis "${e.axis}" is not available for count metric "${t}"`);
		const a = e.epochSeconds;
		if (!pn.includes(a)) return mn("unsupported_epoch", `epoch length ${String(a)}s is not a count-cube epoch (expected 30 or 60)`);
		const o = a, i = w("count_cell", {
			method_family: n,
			count_family: t,
			axis: s,
			epoch_seconds: o
		}), c = gn(i, () => L({
			includeFamilies: ["count_hasib"],
			includeConsensus: !1,
			epochSeconds: [o]
		}).configs);
		return c ? wn(c) : mn(un, `derived cube cell "${i}" was not present in the cube plan`);
	}(e, s) : mn("not_a_cube_scorer", `algorithm "${t}" has no directly scorer-addressable count/angle cube cell`);
}
function vn(e) {
	return (n) => {
		const t = Se(e, n);
		return function(e) {
			const n = Ve(e.currentAlgorithm), t = yn({
				...n,
				algorithm: je(n.family, n.implementation) ?? e.currentAlgorithm,
				sleepDetectionRule: e.sleepDetectionRule,
				placementRuleset: e.placementRuleset,
				scorerPostprocessingPreset: e.scorerPostprocessingPreset
			}), r = /* @__PURE__ */ new Set();
			if (!e.placementFromSource && t.ok && De(Te(n.family)) === e.extractionPath && r.add(t.variant.cubeCellId), e.ggirHasibVariantsEnabled && !e.placementFromSource) {
				const n = ze(e.ggirHasibCountSource);
				for (const t of e.ggirHasibVariants) {
					const s = Q.find((e) => e.algorithm === t), a = t === Fe ? "van_hees_2015" : o.find((e) => e.family === s?.slug)?.id;
					if (!a) continue;
					const i = yn({
						algorithm: a,
						countMetric: n.family,
						axis: n.axis,
						epochSeconds: e.ggirHasibCountEpochSeconds,
						sleepDetectionRule: e.sleepDetectionRule,
						placementRuleset: e.placementRuleset,
						scorerPostprocessingPreset: e.scorerPostprocessingPreset
					});
					i.ok && r.add(i.variant.cubeCellId);
				}
			}
			const s = "ggir" === Pe(e.currentAlgorithm) ? e.nonwearDetectorsGgir : e.nonwearDetectorsCounts;
			return {
				classifierConfigIds: [...r],
				nonwearDetectors: 1 === s.length ? [...s] : [ve],
				studyNonwearSelection: [...s],
				rulesets: [e.placementRuleset],
				rescorings: [e.scorerPostprocessingPreset],
				periodSources: "smart" === e.periodGuider ? [fe.diary, fe.hdcza] : [V(e.periodGuider, { hasDiary: !1 })?.source_a ?? fe.diary]
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
function bn(e, n, t, r) {
	if (F.includes(e) && !n) return {
		included: !1,
		reason: "no diary for this day"
	};
	const s = S[e];
	if (void 0 !== s && r && (!X(e) || !r.guiderWindows[e])) return {
		included: !1,
		reason: s
	};
	if (e === fe.event_marker && r && !r.eventMarkerTimestamps?.length) return {
		included: !1,
		reason: "no event-marker presses for this day"
	};
	const a = C(t, I[e]);
	return null === a ? { included: !0 } : {
		included: !1,
		reason: `unsatisfied source capability: ${a.map((e) => `${e}=false`).join(", ") || "no implemented input signal"}`
	};
}
function Sn(e, n) {
	const t = u[e];
	for (const r of t ?? []) if (r.length > 0 && r.every((e) => n.has(e))) return {
		included: !1,
		reason: `day input unavailable: ${r.join(" or ")}`
	};
	return { included: !0 };
}
async function kn(e, n, r) {
	const s = J(e);
	if (s && le(s, n.epochLengthSeconds) !== n.epochLengthSeconds) return async function(e, n, t) {
		const r = Float64Array.from(n.timestamps), s = n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts), o = await Ze(t, {
			timestamps: r,
			axisY: s,
			vectorMagnitude: /* @__PURE__ */ new Float64Array()
		}, n.epochLengthSeconds), i = (await Xe(t, { day: o }, ["day"], a, void 0, [e])).day?.get(e);
		return i?.available && i.nonwear ? { mask: await Ke(t, o.timestamps, i.nonwear, r) } : {
			mask: null,
			reason: i?.reason ?? null
		};
	}(e, n, r ?? t());
	const o = {
		counts: n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts),
		epochSeconds: n.epochLengthSeconds
	};
	n.nonwearSignals?.temperature && (o.temperature = new Float64Array(n.nonwearSignals.temperature)), n.nonwearSignals?.raw && (o.raw = n.nonwearSignals.raw), null != n.nonwearSignals?.sampleRate && (o.sampleRate = n.nonwearSignals.sampleRate);
	const i = await (r ?? t()).detectNonwearUnified({
		algorithm: e,
		signals: o
	});
	if (!i.available || null == i.nonwear) return {
		mask: null,
		reason: i.reason ?? null
	};
	if (i.elementSeconds === n.epochLengthSeconds && n.epochLengthSeconds > 0 && i.nonwear.length === n.timestamps.length && n.timestamps.every((e, t) => e === n.timestamps[0] + t * n.epochLengthSeconds) && i.nonwear.every((e) => 0 === e || 1 === e)) return { mask: i.nonwear };
	const c = $e(i, n.timestamps[0] ?? 0);
	return { mask: (await (r ?? t()).rasterizePeriods(Float64Array.from(c, (e) => e.startTsSec), Float64Array.from(c, (e) => e.endTsSec), Float64Array.from(n.timestamps), n.epochLengthSeconds)).mask };
}
var _n = class extends Error {
	workerLost;
	constructor(e = !1) {
		super("Precomputed variant masks could not be saved."), this.name = "ScoredVariantPersistenceError", this.workerLost = e;
	}
};
const Cn = /* @__PURE__ */ new WeakMap();
function An(e) {
	const n = JSON.stringify(e, (e, n) => n instanceof Uint8Array ? Array.from(n) : n);
	return `${String(n.length)}:${W(n)}`;
}
function En(e, n) {
	for (const t of n) {
		if (e.notes.length >= 12) return;
		e.notes.includes(t) || e.notes.push(t);
	}
}
async function On(n, s, { db: a = E(), signal: o, wasmApi: i, cancelOperation: c, narrowing: u } = {}) {
	const f = {
		computed: 0,
		skipped: 0,
		missingClassifier: 0,
		placementUnavailable: !1,
		notes: []
	}, p = i ?? t(), m = c ?? (() => {
		r(p);
	});
	k(o, "before the scored-variant plan");
	const w = function(n) {
		const { classifierConfigIds: t, capabilities: r, hasDiary: s = !1, includeNonwearNone: a = !0, day: o } = n, i = [], c = o ? t.filter((e) => {
			if (void 0 !== o.staleClassifierCells?.[e]) return !0;
			const n = o.classifierOutputs[e];
			return !(!n || n.length !== o.timestamps.length) || (i.push({
				axis: "classifier",
				value: e,
				reason: n ? `stored series of ${String(n.length)} epochs is not on the day's ${String(o.timestamps.length)}-epoch grid` : "no classifier output stored for this day"
			}), !1);
		}) : [...t], l = o ? function(e) {
			const n = /* @__PURE__ */ new Set(["device_wear_state_evidence_stream"]);
			return e.temperature && 0 !== e.temperature.length || n.add("temperature_epoch_stream"), n;
		}(o) : /* @__PURE__ */ new Set(), u = [];
		for (const e of r.nonwearAlgorithms) {
			if (n.nonwearDetectors && !n.nonwearDetectors.includes(e)) continue;
			const t = o ? Sn(e, l) : { included: !0 };
			t.included ? u.push(e) : i.push({
				axis: "nonwear",
				value: e,
				reason: t.reason
			});
		}
		const d = [...new Set(n.studyNonwearSelection ?? [])];
		let f;
		d.length > 1 && (!n.nonwearDetectors || n.nonwearDetectors.includes("study_selection")) && (d.filter((e) => r.nonwearAlgorithms.includes(e) && (!o || Sn(e, l).included)).length > 0 ? (u.push(ve), f = d) : i.push({
			axis: "nonwear",
			value: ve,
			reason: "none of the study's nonwear detectors can run for this day"
		}));
		const p = a ? ["none", ...u] : u, m = [], g = 2 === n.periodSources?.length && n.periodSources[0] === fe.diary && n.periodSources[1] === fe.hdcza ? [s ? fe.diary : fe.hdcza] : n.periodSources;
		for (const e of Object.values(fe)) {
			if (g && !g.includes(e)) continue;
			const n = bn(e, s, r, o);
			n.included ? m.push(e) : i.push({
				axis: "periodSource",
				value: e,
				reason: n.reason
			});
		}
		const w = n.rulesets ?? [e.LEGACY, e.REGULARITY_V2], y = n.rescorings ?? [h.NONE, h.WEBSTER], v = {
			classifierConfigIds: [...c],
			nonwear: p,
			periodSource: m,
			ruleset: w,
			rescoring: y
		}, b = [], S = /* @__PURE__ */ new Set();
		for (const e of c) for (const n of p) for (const t of m) for (const r of w) for (const s of y) {
			const a = ln({
				classifierConfigId: e,
				nonwear: n,
				periodSource: t,
				ruleset: r,
				rescoring: s
			}, f);
			S.has(a.id) || (S.add(a.id), b.push(a));
		}
		return {
			variants: b,
			axes: v,
			skipped: i,
			...f ? { studyNonwearSelection: f } : {}
		};
	}({
		classifierConfigIds: Object.keys(n.classifierOutputs),
		capabilities: s,
		hasDiary: null != n.diary,
		day: n,
		...u
	});
	if (0 === w.variants.length) return f;
	const y = w.variants.filter((e) => !n.precomputedVariantMasks[e.id]);
	if (f.skipped = w.variants.length - y.length, 0 === y.length) return f;
	const v = {};
	k(o, "before scored-variant nonwear computation");
	const b = await _(p, (e) => async function(e, n, t) {
		const r = {};
		for (const s of new Set(n)) "none" !== s && "study_selection" !== s && (r[s] = await kn(s, e, t));
		return r;
	}({
		timestamps: n.timestamps,
		activityCounts: n.activityCounts,
		epochLengthSeconds: n.epochLengthSeconds,
		...n.temperature ? { nonwearSignals: { temperature: n.temperature } } : {}
	}, function(e) {
		return [.../* @__PURE__ */ new Set([...e.axes.nonwear, ...e.studyNonwearSelection ?? []])];
	}(w), e), {
		ms: d,
		label: "scored-variant nonwear computation",
		signal: o,
		cancel: m
	});
	for (let e = 0; e < y.length; e += 2e3) {
		k(o, "before scored-variant warm computation");
		const t = {
			timestamps: n.timestamps,
			activityCounts: n.activityCounts,
			epochLengthSeconds: n.epochLengthSeconds,
			analysisDate: n.analysisDate,
			guiderWindows: n.guiderWindows,
			...n.eventMarkerTimestamps?.length ? { eventMarkerTimestamps: n.eventMarkerTimestamps } : {},
			...n.diary ? { diary: n.diary } : {},
			classifierOutputs: n.classifierOutputs,
			nonwearMasks: b,
			...w.studyNonwearSelection ? { studyNonwearDetectors: w.studyNonwearSelection } : {},
			variants: y.slice(e, e + 2e3).map((e) => ({
				id: e.id,
				...e.config
			}))
		}, s = n.sourceContentHash && void 0 !== n.seriesRevision ? JSON.stringify([
			a.name,
			n.fileId,
			n.analysisDate,
			n.sourceContentHash,
			n.seriesRevision,
			n.diaryFingerprint,
			n.epochLengthSeconds,
			n.timestamps.length,
			n.timestamps[0],
			n.timestamps.at(-1),
			t.variants,
			w.studyNonwearSelection
		]) : An(t);
		let i = Cn.get(p);
		i || (i = /* @__PURE__ */ new Map(), Cn.set(p, i));
		const l = i.get(s) ?? await _(p, (e) => e.runScoredVariantBatch(t), {
			ms: 3e5,
			label: "scored-variant warm computation",
			signal: o,
			cancel: c ?? (() => {
				r(p);
			})
		});
		if (0 === Object.keys(l.masks).length && i.set(s, l), k(o, "after scored-variant warm computation"), Object.assign(v, l.masks), f.computed += Object.keys(l.masks).length, f.missingClassifier += l.missingClassifier, En(f, l.notes), l.placementUnavailable) {
			f.placementUnavailable = !0;
			break;
		}
	}
	if (Object.keys(v).length > 0) {
		let e;
		try {
			k(o, "before scored-variant warm persistence");
			const { controller: t, release: r } = z(o);
			e = r;
			const s = t.signal;
			if (!await _(p, (e) => q(n.fileId, n.analysisDate, v, n.diaryFingerprint, a, e, s), {
				ms: 3e5,
				label: "scored-variant warm persistence",
				signal: void 0,
				cancel: () => {
					t.abort(), m();
				}
			})) throw new _n();
		} catch (S) {
			o?.aborted && m(), l(S, o, "scored-variant warm persistence");
			const e = S instanceof Error && "QuotaExceededError" === S.name ? "QuotaExceededError" : "Error";
			throw console.warn("[scored-variant-warm] Precomputed mask persistence failed.", e), ke("warn", "Precomputed variant mask persistence failed", { error_type: e }), new _n(g(S));
		} finally {
			e?.();
		}
	}
	return f;
}
const In = /* @__PURE__ */ new WeakMap();
async function zn(e, n, t, r) {
	const s = In.get(e)?.get(n);
	return s ? Promise.all(s.map(async (e) => {
		let n = e.run.answers.get(t);
		return n || (n = r(e.run.group, e.run.probabilities), e.run.answers.set(t, n)), {
			...e,
			value: await n
		};
	})) : null;
}
function Mn(e, n) {
	In.set(e, n);
}
function Rn(e) {
	const n = new Uint8Array(e.length);
	return n.set(e), n.buffer;
}
function xn(e) {
	const n = {}, t = [];
	for (const [r, s] of Object.entries(e ?? {})) {
		if (!s) continue;
		const e = $(r);
		if (!e) throw new Error(`sleep/wake output ${r} is not a declared AlgorithmRunKey (core.yaml)`);
		const a = Rn(s);
		n[e] = a, t.push({
			algoKey: e,
			results: a
		});
	}
	return {
		algorithmResults: n,
		historyOutputs: t
	};
}
function Fn(e, n, t, r, s) {
	s && 0 !== s.length && (e[H(n, t, r)] = new Float64Array(s));
}
function Tn(e, n, t, r) {
	const s = {};
	Fn(s, "neishabouri", "x", n, e.axisX), Fn(s, "neishabouri", "y", n, e.axisY), Fn(s, "neishabouri", "z", n, e.axisZ), Fn(s, "neishabouri", "vm", n, e.vectorMagnitude), Fn(s, "zero_crossing", "x", n, e.zeroCrossingX), Fn(s, "zero_crossing", "y", n, e.zeroCrossingY), Fn(s, "zero_crossing", "z", n, e.zeroCrossingZ);
	const a = e.counts30s;
	a && 30 !== n && (Fn(s, "neishabouri", "x", 30, a.axisX), Fn(s, "neishabouri", "y", 30, a.axisY), Fn(s, "neishabouri", "z", 30, a.axisZ), Fn(s, "neishabouri", "vm", 30, a.vectorMagnitude), Fn(s, "zero_crossing", "x", 30, a.zeroCrossingX), Fn(s, "zero_crossing", "y", 30, a.zeroCrossingY), Fn(s, "zero_crossing", "z", 30, a.zeroCrossingZ));
	const o = { [n]: Float64Array.from(e.timestamps) };
	return a && 30 !== n && a.timestamps.length > 0 && (o[30] = Float64Array.from(a.timestamps)), {
		counts: s,
		timestamps: o,
		...r && r.length > 0 && "unconfigured" !== t.id ? { lstmProbabilities: { [t.id]: r } } : {}
	};
}
function $n(e) {
	return 120 !== e;
}
const jn = /* @__PURE__ */ new Map();
function Vn(e, n, t, r = !1, s) {
	const a = r && 30 !== e ? [30, e] : [e], o = a.join(","), i = n ? `${o}|lstm|${t.id}|${t.label}|selected:${String(s ?? "none")}|${JSON.stringify(t.thresholdPresets ?? null)}` : `${o}|nolstm`, c = jn.get(i);
	if (c) return c;
	const l = L({
		includeFamilies: n ? [
			"count_hasib",
			"lstm",
			"consensus"
		] : ["count_hasib", "consensus"],
		epochSeconds: a,
		includeConsensus: !0,
		...n ? { lstmModels: [{
			id: t.id,
			label: t.label,
			epochSeconds: e,
			thresholdPresets: null == s ? t.thresholdPresets : [{
				id: "selected",
				label: "Saved study threshold",
				threshold: s
			}, ...t.thresholdPresets.filter((e) => "selected" !== e.id)]
		}] } : {}
	});
	return jn.set(i, l), l;
}
function Dn() {
	jn.clear();
}
const Pn = {
	dayCount: 0,
	variantsComputed: 0,
	variantsSkipped: 0,
	dayFailures: 0
};
function Nn(e, n) {
	return JSON.stringify({
		sourceCaps: e,
		narrowing: n ?? null
	}, (e, n) => n instanceof Set ? [...n].map(String).sort() : n);
}
async function Ln(e, n, t, r) {
	const [s, a, o] = await Promise.all([
		r.files.get(e),
		G(e, r),
		D(Je, e, r)
	]);
	return "warm-v3:" + W({
		plan: Nn(n, t),
		series: [
			s?.sourceType,
			s?.sourceContentHash,
			s?.seriesRevision ?? 0,
			s?.epochLengthSeconds,
			s?.availableDates
		],
		geometry: a.some((e) => !e.importMappingProvenance?.diaryTemporalPolicy) ? Ee() : null,
		diaries: a.map((e) => ({
			date: e.analysisDate,
			inBed: e.diaryInBedTime,
			onset: e.diaryOnsetTime,
			wake: e.diaryWakeTime,
			outOfBed: e.diaryOutOfBedTime,
			overlay: e.decisionOverlayJson,
			policy: e.importMappingProvenance?.diaryTemporalPolicy,
			naps: pe(e),
			nonwear: _e(e)
		})),
		...o
	});
}
async function Yn(e, n, t, r, s = E(), a, o, c, u = vn(i().scoring()), p) {
	const m = s;
	if (!t) return Pn;
	const h = await re(e, m);
	if (h?.sourceType && !M(h.sourceType, "local")) return Pn;
	const w = { ...Pn }, y = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), b = await me(e, m).then((e) => ({
		fileRecord: h,
		activitySpan: e
	}), () => ({ fileRecord: h })), S = u?.(b.fileRecord), _ = await Ln(e, t, S, m), C = /* @__PURE__ */ new Set();
	if (ee(b.fileRecord) > 60) return Pn;
	let A = /* @__PURE__ */ new Map();
	const O = (n) => {
		let t = A.get(n);
		return t || (t = ge(e, n, m), A.set(n, t)), t;
	};
	let I = !1;
	const z = ne((n, t) => {
		n === e && t === m && (I = !0);
	}), x = n.length;
	let F = 0;
	r?.({
		phase: "variants",
		percent: 98,
		message: `0/${String(x)} days`
	});
	const T = () => {
		F >= x || (F += 1, r?.({
			phase: "variants",
			percent: 0 === x ? 100 : 98 + 2 * F / x,
			message: `${String(F)}/${String(x)} days`
		}));
	};
	let $ = !1;
	try {
		let r = n;
		for (let s = 0; s < 2; s++) {
			A = /* @__PURE__ */ new Map();
			for (const n of r) if ($) v.add(n), T();
			else {
				performance.now(), w.variantsComputed;
				for (const e of A.keys()) e < n && A.delete(e);
				try {
					k(a, "before scored-variant warm day load");
					const r = await R(() => on(e, n, m, {
						...b,
						readDay: O,
						wasmApi: o
					}), d, "scored-variant day load", a, c ?? (() => {}));
					if (k(a, "after scored-variant warm day load"), !r || 0 === Object.keys(r.classifierOutputs).length) {
						T();
						continue;
					}
					const s = await On(r, t, {
						db: m,
						signal: a,
						wasmApi: o,
						cancelOperation: c,
						narrowing: S
					});
					C.delete(n), w.variantsComputed += s.computed, y.has(n) || (w.variantsSkipped += s.skipped), s.placementUnavailable || 0 !== s.missingClassifier ? v.add(n) : (y.add(n), v.delete(n)), T(), s.placementUnavailable && console.warn("[local-processing] Scored-variant warm placement was unavailable.");
				} catch (V) {
					l(V, a, "scored-variant warm"), console.warn("[local-processing] Scored-variant warm failed."), g(V) && ($ = !0), V instanceof Error && "ScoredVariantPersistenceError" === V.name && C.add(n), v.add(n), T();
				}
			}
			if ($ || s > 0 || !I && 0 === v.size) break;
			r = I ? n : [...v], I = !1;
		}
	} finally {
		z(), A = /* @__PURE__ */ new Map(), w.dayCount = y.size, a?.aborted && p && await Un(() => Promise.resolve(), e, w, p);
	}
	let j = I || C.size > 0 || Boolean(a?.aborted);
	if (!j) try {
		const n = await m.scoredVariantMasks.where("fileId").equals(e).count();
		j = !await f(m, [
			m.files,
			m.diaryEntries,
			...Ae(Je, m)
		], async () => !a?.aborted && await Ln(e, t, S, m) === _ && await m.files.update(e, { scoredVariantWarm: {
			inputs: _,
			maskDays: n,
			outcome: v.size > 0 ? "known-failures" : "complete",
			failedDays: v.size
		} }) > 0, a);
	} catch {
		j = !0, console.warn("[local-processing] Scored-variant warm stamp could not be saved.");
	}
	return w.dayFailures = j ? Math.max(v.size, x) : v.size, w;
}
async function Un(e, n, t, r, a) {
	await e(), 0 !== t.variantsComputed && await he.recordWorkspaceBoundDurably(r, s.SYSTEM_RECALCULATION, {
		subject: "scored_variant_precompute",
		fileId: n,
		dayCount: t.dayCount,
		variantsComputed: t.variantsComputed,
		variantsSkipped: t.variantsSkipped,
		trigger: "file_processing"
	});
}
function Wn() {
	return x(v.SCORED_VARIANT_WARM);
}
function Bn(e, n = {}) {
	const t = n.db ?? E();
	return O({
		kind: v.SCORED_VARIANT_WARM,
		key: Oe(e),
		label: "Scoring variants",
		workspaceId: t.name,
		signal: n.signal,
		rerun: !0,
		run: (r) => async function(e, { forget: n = !1, resumeIncomplete: t = !1, retryKnownFailures: r = !0, db: s = E() }, a) {
			try {
				if (E() !== s) return;
				const o = await s.files.get(e);
				if (E() !== s || !o || "incomplete" === o.ingestState || 0 === o.availableDates.length || !o.sourceType || o.epochLengthSeconds > 60) return;
				const c = i().scoring(), { username: l, selectedStudyId: u } = c, d = M(o.sourceType, "local");
				if (!d) return;
				const m = vn(c);
				if (!n && !t) return;
				const g = await Ln(e, d, m(o), s);
				if (E() !== s) return;
				if (!n && o.scoredVariantWarm?.outcome && o.scoredVariantWarm.inputs === g && (!r || "known-failures" !== o.scoredVariantWarm.outcome)) return;
				const h = o.scoredVariantWarm;
				if (!await f(s, [
					s.files,
					s.diaryEntries,
					...Ae(Je, s),
					s.scoredVariantMasks
				], async () => {
					const t = await s.files.get(e);
					if (E() !== s || !t || JSON.stringify(t.scoredVariantWarm) !== JSON.stringify(h)) return !1;
					const r = await Ln(e, d, m(t), s);
					if (E() !== s || r !== g) return !1;
					if (t.scoredVariantWarm && (!t.scoredVariantWarm.outcome || t.scoredVariantWarm.inputs !== g) && (await s.scoredVariantMasks.where("fileId").equals(e).delete(), E() !== s)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					if ((n || t.scoredVariantWarm) && (await s.files.where(":id").equals(e).modify((e) => {
						delete e.scoredVariantWarm;
					}), E() !== s)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					return !0;
				}, a.signal) || E() !== s) return;
				await async function(e, n, t, r, s, a, o) {
					let c = !1;
					const l = () => {
						c = !0, ke("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" });
					};
					if (E() !== s) return;
					j({
						fileId: e,
						done: 0,
						total: n.length
					}, s);
					const u = p(() => {
						E() !== s && i().jobs().cancel(`${s.name}:${Oe(e)}`);
					}), d = new AbortController(), f = () => {
						d.abort();
					};
					o.signal.addEventListener("abort", f, { once: !0 });
					try {
						const i = await Yn(e, n, t, (e) => {
							o.progress(Number.parseInt(e.message, 10), n.length, e.message);
						}, s, o.signal, b(d.signal), f, a, r);
						await Un(() => Promise.resolve(), e, i, r, o.signal), o.signal.throwIfAborted(), i.dayFailures > 0 && (console.warn("[local-processing] Some days could not be precomputed; reimport the file to retry."), l());
					} catch {
						if (o.signal.aborted) return;
						console.warn("[local-processing] Background scored-variant warm failed."), l();
					} finally {
						o.signal.removeEventListener("abort", f), u(), j(c && !o.signal.aborted && E() === s ? {
							fileId: e,
							done: B()?.done ?? 0,
							total: n.length,
							failed: !0
						} : null, s);
					}
					if (c) throw new Error("Background scored-variant warm failed.");
				}(e, o.availableDates, d, he.captureWorkspaceBinding(s, {
					username: l,
					studyId: u,
					signal: a.signal
				}), s, m, a);
			} catch {
				if (a.signal.aborted) return;
				console.warn("[local-processing] Scored-variant warm could not be scheduled."), ke("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" }), E() === s && j({
					fileId: e,
					done: 0,
					total: 0,
					failed: !0
				}, s);
			}
		}(e, {
			...n,
			db: t
		}, r)
	});
}
function Hn(e, { retryKnownFailures: n = !1, signal: t } = {}) {
	return O({
		kind: v.VARIANT_RECOVERY,
		key: v.VARIANT_RECOVERY,
		label: "Resume scoring variants",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			await e.projectMeta.get(N);
			const r = (e) => null != e.id && "incomplete" !== e.ingestState && Boolean(e.sourceType && M(e.sourceType, "local")) && e.availableDates.length > 0 && !(e.epochLengthSeconds > 60), s = (await ae(e)).filter(r);
			for (const o of s) {
				if (E() !== e) return;
				await Bn(o.id, {
					db: e,
					resumeIncomplete: !0,
					retryKnownFailures: n,
					signal: t.signal
				}), await t.yieldNow();
			}
			if (E() !== e || !e.isOpen()) return;
			const a = vn(i().scoring());
			await f(e, [
				e.projectMeta,
				e.files,
				e.diaryEntries,
				...Ae(Je, e)
			], async () => {
				const t = [], o = (await ae(e)).filter(r);
				for (const r of o) {
					const o = M(r.sourceType, "local"), i = await Ln(r.id, o, a(r), e), c = (await e.files.get(r.id))?.scoredVariantWarm;
					if (!c?.outcome || c.inputs !== i || E() !== e) return void await e.projectMeta.delete(N);
					t.push([r.id, i]), "known-failures" !== c.outcome || s.find((e) => e.id === r.id)?.scoredVariantWarm?.inputs === i && !n || j({
						fileId: r.id,
						done: r.availableDates.length,
						total: r.availableDates.length,
						failed: !0
					}, e);
				}
				await e.projectMeta.put({
					key: N,
					revision: Number.parseInt(W(t), 16)
				});
			}, t.signal);
		}
	}).catch((n) => {
		if (t?.aborted || n instanceof DOMException && "AbortError" === n.name) throw n;
		throw ke("warn", "Background scored-variant warm failed", { error_type: "Error" }), j({
			fileId: 0,
			done: 0,
			total: 0,
			failed: !0
		}, e), /* @__PURE__ */ new Error("Stored scoring variants could not be resumed.");
	});
}
async function Gn(e, n, r, s, a) {
	const o = s ?? t(), i = await zn(o, e, `cube:${String(n)}:${JSON.stringify(a)}`, (e, t) => Gn(e, n, t, o, a));
	if (i) {
		const n = {}, t = [];
		for (const r of i) for (const s of r.value.historyOutputs) {
			const a = new Uint8Array(s.results), o = a.length !== r.run.group.timestamps.length, i = o ? e.counts30s?.timestamps.length ?? 0 : e.timestamps.length, c = n[s.cubeConfig.id] ?? new ArrayBuffer(i);
			new Uint8Array(c).set(a.slice(o ? r.nativeStart : r.start, o ? r.nativeEnd : r.end), o ? r.nativeOffset : r.offset), n[s.cubeConfig.id] || t.push({
				cubeConfig: s.cubeConfig,
				results: c
			}), n[s.cubeConfig.id] = c;
		}
		return {
			algorithmResults: n,
			historyOutputs: t,
			skipped: i.reduce((e, n) => e + n.value.skipped, 0)
		};
	}
	const c = Ge(a), l = He(c.modelId), u = Vn(n, !!r && r.length > 0 && "unconfigured" !== l.id, l, !!e.counts30s && e.counts30s.axisY.length > 0, c.threshold ?? void 0), d = await async function(e) {
		const n = e.configIds ? new Set(e.configIds) : null, t = {}, r = [];
		for (const a of e.plan.configs) if (!n || n.has(a.id)) try {
			const n = await Qe(a, e.backend, e.signals, t);
			n && (t[a.id] = n);
		} catch (s) {
			r.push({
				configId: a.id,
				reason: s instanceof Error ? s.message : String(s),
				...s instanceof qe ? { inputUnavailable: !0 } : {}
			});
		}
		return {
			outputs: t,
			skipped: r
		};
	}({
		plan: u,
		backend: s ?? t(),
		signals: Tn(e, n, l, r)
	}), f = {}, p = [], m = new Map(u.configs.map((e) => [e.id, e]));
	for (const [t, g] of Object.entries(d.outputs)) {
		const e = m.get(t);
		if (!e) throw new Error(`cube output ${t} has no planned config`);
		const n = Rn(g);
		f[t] = n, p.push({
			cubeConfig: e,
			results: n
		});
	}
	return {
		algorithmResults: f,
		historyOutputs: p,
		skipped: d.skipped.filter((e) => !e.inputUnavailable).length
	};
}
function Jn(e, n) {
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
async function Kn(e, n, r) {
	if (!n) return {};
	const s = r ?? t(), a = await zn(s, e, `hasib:${JSON.stringify(n)}`, (e) => Kn(e, n, s));
	if (a) {
		const n = {};
		for (const t of a) for (const [r, s] of Object.entries(t.value)) {
			if (!s) continue;
			const a = n[r] ?? new Uint8Array(e.timestamps.length);
			a.set(s.slice(t.start, t.end), t.offset), n[r] = a;
		}
		return n;
	}
	const o = (n.variants ?? Re).filter((e) => e !== Fe);
	if (0 === o.length) return {};
	const i = n.countSource ?? "neishabouri_vm_60s";
	if (!function(e, n) {
		const { family: t, axis: r } = ze(n);
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
	const c = Float64Array.from(e.timestamps), l = (s.medianGapSeconds ? await s.medianGapSeconds(c) : await t().medianGapSeconds(c)) ?? n.countEpochSeconds ?? 60, u = await xe({
		backend: s,
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
		...void 0 !== n.configs ? { configs: n.configs } : {}
	});
	return Object.fromEntries(u.map((e) => [e.key, e.result.sib]));
}
async function Zn(e, n, r) {
	const s = r ?? t(), a = await zn(s, e, `ggir:${String(n)}`, (e) => Zn(e, n, s));
	if (a) {
		if (a.some((e) => !e.value)) return null;
		const n = new Uint8Array(e.timestamps.length), t = new Uint8Array(e.timestamps.length);
		for (const e of a) n.set(e.value.sadeh.slice(e.start, e.end), e.offset), t.set(e.value.ck.slice(e.start, e.end), e.offset);
		return {
			sadeh: n,
			ck: t
		};
	}
	if (!e.zeroCrossingY || 0 === e.zeroCrossingY.length) return null;
	const o = await xe({
		backend: r ?? t(),
		variants: ["Sadeh1994", "ColeKripke1992"],
		anglez5s: /* @__PURE__ */ new Float64Array(),
		zeroCrossingY60s: new Float64Array(e.zeroCrossingY),
		countSource: "zero_crossing_y_60s",
		countEpochSeconds: n
	}), i = Me("sadeh_1994"), c = Me("cole_kripke_1992"), l = o.find((e) => e.variant === i)?.result.sib, u = o.find((e) => e.variant === c)?.result.sib;
	return l && u ? {
		sadeh: l,
		ck: u
	} : null;
}
async function Xn(e, t) {
	const r = [], s = e.sadeh_1994_actilife.length, a = (e) => {
		e && e.length === s && r.push(e);
	};
	a(e.sadeh_1994_actilife), a(e.sadeh_1994_original), a(e.cole_kripke_1992_actilife), a(e.cole_kripke_1992_original), a(e.sadeh_1994_ggir), a(e.cole_kripke_1992_ggir), a(e.lstm_sleep_wake);
	for (const [o, i] of Object.entries(e.hasibVariants ?? {})) o !== U.TENSOR_MAJORITY_VOTE && o !== U.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== n(o)?.grammarId && a(i);
	for (const [o, i] of Object.entries(e.cubeOutputs ?? {})) o !== U.TENSOR_MAJORITY_VOTE && o !== U.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== n(o)?.grammarId && a(i);
	return 0 === r.length ? new Uint8Array(s) : t.scoreConsensus("majority_tie_sleep", r);
}
ne((e, n, t) => {
	Bn(e, {
		resumeIncomplete: !0,
		retryKnownFailures: !1,
		db: n,
		signal: t
	}).catch(() => {});
});
export { Dn as _resetCubePlanCacheForTest, Wn as awaitScheduledScoredVariantWarms, Hn as backfillInterruptedScoredVariantWarms, Vn as buildOrReuseAlgorithmOutputCubePlan, Rn as cloneOutputBuffer, Xn as computeTensorConsensusForDay, $n as cubeRunsOnGrid, Un as finalizeAndAuditScoredVariantWarm, Bn as rewarmFileScoredVariants, Gn as runAlgorithmCubeForDay, Zn as scoreBuiltinGgirSadehColeForDay, Kn as scoreCountBasedHasibVariantsForDay, Ln as scoredVariantFileInputs, xn as sleepWakeToPersistedOutputs, Mn as t, Yn as warmFileScoredVariants, Jn as withRecordingWakeThreshold };
