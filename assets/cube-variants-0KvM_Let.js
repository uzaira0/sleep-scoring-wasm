import { Ir as e, Lr as n, Mt as t, Nn as r, Nt as s, Pn as a, Pt as o, Qn as i, V as c, Wt as l, an as u, ar as d, bt as f, cr as p, f as m, g, in as h, jr as w, l as y, ln as v, lt as b, n as S, o as k, on as _, or as C, p as A, pt as E, r as I, rn as O, rr as M, sr as z, t as x, un as R, ur as F, yt as T } from "./background-jobs-CiuHIxxN.js";
import { Ar as $, Br as P, Bt as j, Cn as D, Fn as N, Ft as V, Hn as L, Hr as Y, In as U, Ir as W, J as B, Jr as H, Ln as J, Mn as K, Mr as Z, Nn as G, Nr as X, P as q, Pr as Q, Pt as ee, Q as ne, Qt as te, Rr as re, S as se, Sn as ae, T as oe, Tn as ie, Xr as ce, Y as le, Z as ue, Zn as de, _t as fe, bn as pe, d as me, dn as ge, ft as he, ht as we, jr as ye, lt as ve, mt as be, sr as Se, ut as ke, w as _e, wn as Ce, xn as Ae, xt as Ee, yt as Ie, zr as Oe } from "./db-BDmmJMkH.js";
import { a as Me, i as ze, n as xe, o as Re, t as Fe } from "./local-ggir-hasib-variants-54YMkquh.js";
import { A as Te, E as $e, M as Pe, O as je, k as De, y as Ne } from "./local-nonwear-unified-DBmgs_Zq.js";
import { a as Ve, g as Le, m as Ye, o as Ue } from "./epoch-utils-CylMeqqf.js";
import { B as We } from "./local-export-shard-worker-DiMQm3U2.js";
import { T as Be } from "./ingest-DVHFfPrO.js";
import { D as He, F as Je, I as Ke, N as Ze, it as Ge, ot as Xe } from "./ggir-import-DrpvAXhp.js";
var qe = class extends Error {};
async function Qe(e, n, r, a) {
	switch (e.family) {
		case "count_hasib": return async function(e, n, r) {
			const a = e.input.seriesKey, o = Me(a), i = r.counts?.[a];
			if (!i || 0 === i.length) throw new qe(`Missing count input ${a}.`);
			if ("string" == typeof e.parameters.implementation) return en(e), async function(e, n, t) {
				const r = function(e) {
					const n = s(e.id);
					if (null === n || "count_cell" !== n.grammarId) return null;
					const t = n.values.method_family, r = n.values.implementation_variant;
					return void 0 === t || void 0 === r ? null : b.find((e) => e.methodFamilyId === t && e.implementationVariantId === r)?.primitiveId ?? null;
				}(e);
				if ("sadeh" === r) {
					if (!n.scoreSadeh) throw new Error("Registry Sadeh primitive (scoreSadeh) unavailable on this worker bundle.");
					const r = E.scoring_threshold, s = "number" == typeof r ? r : 0, a = "number" == typeof e.parameters.threshold ? e.parameters.threshold : s;
					return n.scoreSadeh(t, a);
				}
				if ("cole_kripke" === r) {
					if (!n.scoreColeKripke) throw new Error("Registry Cole-Kripke primitive (scoreColeKripke) unavailable on this worker bundle.");
					const r = !0 === e.parameters.useActilifeScaling;
					return n.scoreColeKripke(t, r);
				}
				throw new Error(`Unsupported provenance count scorer ${e.algorithm}.`);
			}(e, n, i);
			const c = function(e) {
				if (xe.includes(e.algorithm)) return null;
				const n = s(e.id)?.values.method_family, t = l.find((e) => "sleep_wake" === e.kind && e.family === n), r = t?.nativeEpochSeconds;
				return !t || 30 !== r && 60 !== r ? null : {
					methodId: t.id,
					nativeEpochSeconds: r
				};
			}(e);
			if (c) return async function(e, n, r, s) {
				const a = Me(e.input.seriesKey), o = t(a.family, a.axis, n.nativeEpochSeconds), i = s.counts?.[o];
				if (!i || 0 === i.length) throw new qe(`Missing native count input ${o}.`);
				if (!r.scoreEpochs || !r.foldOntoGrid) throw new Error("The typed epoch scorer (scoreEpochs) is unavailable on this worker bundle.");
				const c = await r.scoreEpochs({
					algorithm: n.methodId,
					signals: {
						counts: i,
						epochSeconds: n.nativeEpochSeconds
					}
				}), l = Be(c, i.length);
				if (!l) throw new Error(`${n.methodId}: ${c.reason ?? "the scorer returned no series"}`);
				if (e.epochSeconds === n.nativeEpochSeconds) return l;
				const u = s.timestamps?.[n.nativeEpochSeconds], d = s.timestamps?.[e.epochSeconds];
				if (!u || !d || u.length !== l.length) throw new qe(`Missing the timestamps that align ${o} with the ${String(e.epochSeconds)} s grid.`);
				const f = await r.foldOntoGrid(u, Float64Array.from(l), d, e.epochSeconds, "majority_ties_sleep");
				return Uint8Array.from(f);
			}(e, c, n, r);
			en(e);
			const u = (await Re({
				backend: n,
				variants: [e.algorithm],
				anglez5s: /* @__PURE__ */ new Float64Array(),
				countSource: a,
				countEpochSeconds: o.epochSeconds,
				..."neishabouri" === o.family ? { neishabouriCounts: { [o.axis]: i } } : { zeroCrossingCountsByAxis: { [o.axis]: i } }
			}))[0];
			if (!u) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return u.result.sib;
		}(e, n, r);
		case "angle_hasib": return async function(e, n, r) {
			const s = T.angle_hasib;
			if (void 0 === s || e.algorithm !== s.algorithmValue) throw new Error(`Unsupported angle-HASIB algorithm ${e.algorithm}.`);
			if (!r.anglez5s || 0 === r.anglez5s.length) throw new qe(`Missing ${s.inputSeriesKey} input.`);
			const a = (await Re({
				backend: n,
				variants: [e.algorithm],
				anglez5s: r.anglez5s,
				countSource: t(f, "y", 60)
			}))[0];
			if (!a) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return a.result.sib;
		}(e, n, r);
		case "lstm": return async function(e, n, t) {
			const r = "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm, s = t.lstmProbabilities?.[r];
			if (!s || 0 === s.length) throw new qe(`Missing LSTM probabilities for ${r}.`);
			const a = E.model_threshold, o = "number" == typeof e.parameters.threshold ? e.parameters.threshold : "number" == typeof a ? a : .5;
			if (!n.thresholdProbabilities) throw new Error("The probability threshold (thresholdProbabilities) is unavailable on this worker bundle.");
			return n.thresholdProbabilities(Float64Array.from(s), o);
		}(e, n, r);
		case "consensus": return async function(e, n, t) {
			const r = (Array.isArray(e.parameters.inputConfigIds) ? e.parameters.inputConfigIds.filter((e) => "string" == typeof e) : e.lineage).map((e) => {
				const t = n[e];
				if (!t) throw new qe(`Missing consensus input ${e}.`);
				return t;
			});
			if (0 === r.length) throw new Error("Consensus requires at least one input.");
			const s = r[0].length;
			for (const o of r) if (o.length !== s) throw new Error(`Consensus inputs are not aligned (${String(o.length)} vs ${String(s)} epochs).`);
			const a = "string" == typeof e.parameters.strategy ? e.parameters.strategy : E.consensus_strategy;
			return t.scoreConsensus(a, r);
		}(e, a, n);
	}
}
function en(e) {
	const n = s(e.id)?.values, t = n?.implementation_variant, r = W(String(n?.method_family), void 0 === t ? void 0 : String(t));
	if (!r.includes(e.epochSeconds)) throw new Error(`programming error: ${e.id} reached the runner, but ${e.algorithm} is valid only at ${r.join(", ")} s and the planner never plans it.`);
}
function nn(e) {
	return Oe(e ?? null);
}
function tn(e) {
	return ee(e).map((e) => [e.start, e.end]);
}
function rn(e) {
	return V(e).map((e) => [e.start, e.end]);
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
async function on(e, n, t = A(), r = {}) {
	const s = t, a = r.readDay ?? ((n) => me(e, n, s)), o = await Ue(e, n, s, a, r.fileRecord?.navigationFacts, r.wasmApi);
	if (!o) return null;
	const i = await a(await Ve(n, r.fileRecord?.navigationFacts, r.wasmApi)), c = (i ? [o, i] : [o]).filter((e) => e.timestamps.byteLength > 0), l = sn(c.map((e) => e.timestamps)), { startIndex: u, endIndex: d } = await We(l, n, r.wasmApi);
	if (d <= u) return null;
	const f = l.subarray(u, d), p = Array.from(f), m = Array.from(sn(c.map((e) => e.axisY)).subarray(u, d)), g = await ue(f, {
		day: c[0],
		file: r.fileRecord
	}, r.wasmApi), h = await _e(e, s, r.fileRecord ? { file: r.fileRecord } : void 0), w = {}, y = {}, v = {};
	for (const A of h.cellIds) {
		const e = h(A), n = j(c, e);
		if ("stale" === n.status) {
			y[A] = n.reason;
			continue;
		}
		const t = n.outputs.filter((e) => null != e);
		if (t.length !== c.length) continue;
		const s = await Promise.all(t.map(async (e, n) => (await Ye(c[n], new Uint8Array(e), r.wasmApi))?.buffer ?? e));
		w[A] = Array.from(an(s).subarray(u, d)), "ok" === e.status && null !== e.configHash && (v[A] = e.configHash);
	}
	const b = r.fileRecord ? Promise.resolve(r.fileRecord) : se(e, s), [S, k, _, C, E] = await Promise.all([
		le(e, n, s),
		"activitySpan" in r ? r.activitySpan ?? null : fe(e, s),
		s.scoredVariantMasks.get([e, n]),
		b.then((t) => D(Ke, {
			fileId: e,
			file: t,
			date: n,
			db: s,
			autoScoreMarker: (t) => L(e, n, P, t, void 0, s)
		})),
		b
	]), I = S ? await Ie(S, k, r.wasmApi) : null, O = p[0] ?? 0, M = (p[p.length - 1] ?? O) + g, z = c.flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter((e) => e >= O && e < M), x = I ? {
		diaryInBedTime: ve(R = I),
		onsetTime: ke(R),
		diaryWakeTime: he(R),
		naps: tn(R),
		nonwear: rn(R)
	} : void 0;
	var R;
	const F = "warm-v3:" + Oe({
		diary: nn(x),
		...ae(Ke, C),
		eventMarkerTimestamps: z,
		seriesRevision: E?.seriesRevision ?? 0,
		classifierConfigHashes: Object.keys(v).length > 0 ? v : void 0
	}), T = _?.diaryFingerprint === F, $ = {};
	if (_?.masks && T) for (const [A, P] of Object.entries(_.masks)) P.byteLength === p.length && ($[A] = new Uint8Array(P));
	const N = c.flatMap((e) => e.temperature && e.temperature.byteLength > 0 ? [e.temperature] : []), V = N.length === c.length ? Array.from(sn(N).subarray(u, d)) : void 0;
	return {
		fileId: e,
		analysisDate: n,
		timestamps: p,
		activityCounts: m,
		epochLengthSeconds: g,
		guiderWindows: C,
		...z.length > 0 ? { eventMarkerTimestamps: z } : {},
		classifierOutputs: w,
		...Object.keys(y).length > 0 ? { staleClassifierCells: y } : {},
		precomputedVariantMasks: $,
		diaryFingerprint: F,
		...E?.sourceContentHash ? {
			sourceContentHash: E.sourceContentHash,
			seriesRevision: E.seriesRevision ?? 0
		} : {},
		...x ? { diary: x } : {},
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
		id: o("scored_variant", {
			classifier_config_id: t.classifierConfigId,
			nonwear: r,
			period_source: t.periodSource,
			ruleset: t.ruleset,
			rescoring: t.rescoring
		}),
		configHash: Oe({
			...t,
			nonwear: r
		}),
		config: t
	};
}
const un = "cube_cell_absent", dn = new Map(l.map((e) => [e.id, e])), fn = new Set(ye.map((e) => e.slug)), pn = [30, 60];
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
const hn = T.angle_hasib?.configId ?? "";
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
	if (n.capabilities && !n.capabilities.sleepAlgorithms.includes(t)) return mn("capability_unavailable", `algorithm "${t}" is not available for the file's capabilities`);
	if ("van_hees_2015" === t) return function() {
		const e = gn(hn, () => Z({
			includeFamilies: ["angle_hasib"],
			includeConsensus: !1
		}).configs);
		return e ? wn(e) : mn(un, "the van_hees_2015 angle cell was not present in the cube plan");
	}();
	const s = r.family ?? "";
	return "sleep_wake" === r.kind && fn.has(s) ? function(e, n) {
		const t = e.countMetric.trim();
		if (r = t, !Object.prototype.hasOwnProperty.call($, r)) return mn("unknown_count_metric", `count metric "${e.countMetric}" is not a cube count source (expected neishabouri or zero_crossing)`);
		var r;
		const s = e.axis.trim();
		if (!$[t].includes(s)) return mn("incompatible_axis", `axis "${e.axis}" is not available for count metric "${t}"`);
		const a = e.epochSeconds;
		if (!pn.includes(a)) return mn("unsupported_epoch", `epoch length ${String(a)}s is not a count-cube epoch (expected 30 or 60)`);
		const i = a, c = o("count_cell", {
			method_family: n,
			count_family: t,
			axis: s,
			epoch_seconds: i
		}), l = gn(c, () => Z({
			includeFamilies: ["count_hasib"],
			includeConsensus: !1,
			epochSeconds: [i]
		}).configs);
		return l ? wn(l) : mn(un, `derived cube cell "${c}" was not present in the cube plan`);
	}(e, s) : mn("not_a_cube_scorer", `algorithm "${t}" has no directly scorer-addressable count/angle cube cell`);
}
function vn(e) {
	return (n) => {
		const t = te(e, n);
		return function(e) {
			const n = je(e.currentAlgorithm), t = yn({
				...n,
				algorithm: Pe(n.family, n.implementation) ?? e.currentAlgorithm,
				sleepDetectionRule: e.sleepDetectionRule,
				placementRuleset: e.placementRuleset,
				scorerPostprocessingPreset: e.scorerPostprocessingPreset
			}), r = /* @__PURE__ */ new Set();
			if (!e.placementFromSource && t.ok && De(Te(n.family)) === e.extractionPath && r.add(t.variant.cubeCellId), e.ggirHasibVariantsEnabled && !e.placementFromSource) {
				const n = Me(e.ggirHasibCountSource);
				for (const t of e.ggirHasibVariants) {
					const s = ye.find((e) => e.algorithm === t), a = t === Fe ? "van_hees_2015" : l.find((e) => e.family === s?.slug)?.id;
					if (!a) continue;
					const o = yn({
						algorithm: a,
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
			const s = "ggir" === Ne(e.currentAlgorithm) ? e.nonwearDetectorsGgir : e.nonwearDetectorsCounts;
			return {
				classifierConfigIds: [...r],
				nonwearDetectors: 1 === s.length ? [...s] : [ge],
				studyNonwearSelection: [...s],
				rulesets: [e.placementRuleset],
				rescorings: [e.scorerPostprocessingPreset],
				periodSources: "smart" === e.periodGuider ? [H.diary, H.hdcza] : [pe(e.periodGuider, { hasDiary: !1 })?.source_a ?? H.diary]
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
	if (h.includes(e) && !n) return {
		included: !1,
		reason: "no diary for this day"
	};
	const s = u[e];
	if (void 0 !== s && r && (!ie(e) || !r.guiderWindows[e])) return {
		included: !1,
		reason: s
	};
	if (e === H.event_marker && r && !r.eventMarkerTimestamps?.length) return {
		included: !1,
		reason: "no event-marker presses for this day"
	};
	const a = v(t, _[e]);
	return null === a ? { included: !0 } : {
		included: !1,
		reason: `unsatisfied source capability: ${a.map((e) => `${e}=false`).join(", ") || "no implemented input signal"}`
	};
}
function Sn(e, n) {
	const t = O[e];
	for (const r of t ?? []) if (r.length > 0 && r.every((e) => n.has(e))) return {
		included: !1,
		reason: `day input unavailable: ${r.join(" or ")}`
	};
	return { included: !0 };
}
async function kn(n, t, r) {
	const s = Q(n);
	if (s && re(s, t.epochLengthSeconds) !== t.epochLengthSeconds) return async function(e, n, t) {
		const r = Float64Array.from(n.timestamps), s = n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts), a = await Ge(t, {
			timestamps: r,
			axisY: s,
			vectorMagnitude: /* @__PURE__ */ new Float64Array()
		}, n.epochLengthSeconds), o = (await He(t, { day: a }, ["day"], c, void 0, [e])).day?.get(e);
		return o?.available && o.nonwear ? { mask: await Xe(t, a.timestamps, o.nonwear, r) } : {
			mask: null,
			reason: o?.reason ?? null
		};
	}(n, t, r ?? e());
	const a = {
		counts: t.activityCounts instanceof Float64Array ? t.activityCounts : Float64Array.from(t.activityCounts),
		epochSeconds: t.epochLengthSeconds
	};
	t.nonwearSignals?.temperature && (a.temperature = new Float64Array(t.nonwearSignals.temperature)), t.nonwearSignals?.raw && (a.raw = t.nonwearSignals.raw), null != t.nonwearSignals?.sampleRate && (a.sampleRate = t.nonwearSignals.sampleRate);
	const o = await (r ?? e()).detectNonwearUnified({
		algorithm: n,
		signals: a
	});
	if (!o.available || null == o.nonwear) return {
		mask: null,
		reason: o.reason ?? null
	};
	if (o.elementSeconds === t.epochLengthSeconds && t.epochLengthSeconds > 0 && o.nonwear.length === t.timestamps.length && t.timestamps.every((e, n) => e === t.timestamps[0] + n * t.epochLengthSeconds) && o.nonwear.every((e) => 0 === e || 1 === e)) return { mask: o.nonwear };
	const i = $e(o, t.timestamps[0] ?? 0);
	return { mask: (await (r ?? e()).rasterizePeriods(Float64Array.from(i, (e) => e.startTsSec), Float64Array.from(i, (e) => e.endTsSec), Float64Array.from(t.timestamps), t.epochLengthSeconds)).mask };
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
	return `${String(n.length)}:${Oe(n)}`;
}
function En(e, n) {
	for (const t of n) {
		if (e.notes.length >= 12) return;
		e.notes.includes(t) || e.notes.push(t);
	}
}
async function In(t, s, { db: o = A(), signal: i, wasmApi: c, cancelOperation: l, narrowing: u } = {}) {
	const f = {
		computed: 0,
		skipped: 0,
		missingClassifier: 0,
		placementUnavailable: !1,
		notes: []
	}, m = c ?? e(), g = l ?? (() => {
		n(m);
	});
	d(i, "before the scored-variant plan");
	const h = function(e) {
		const { classifierConfigIds: n, capabilities: t, hasDiary: s = !1, includeNonwearNone: o = !0, day: i } = e, c = [], l = i ? n.filter((e) => {
			if (void 0 !== i.staleClassifierCells?.[e]) return !0;
			const n = i.classifierOutputs[e];
			return !(!n || n.length !== i.timestamps.length) || (c.push({
				axis: "classifier",
				value: e,
				reason: n ? `stored series of ${String(n.length)} epochs is not on the day's ${String(i.timestamps.length)}-epoch grid` : "no classifier output stored for this day"
			}), !1);
		}) : [...n], u = i ? function(e) {
			const n = /* @__PURE__ */ new Set(["device_wear_state_evidence_stream"]);
			return e.temperature && 0 !== e.temperature.length || n.add("temperature_epoch_stream"), n;
		}(i) : /* @__PURE__ */ new Set(), d = [];
		for (const r of t.nonwearAlgorithms) {
			if (e.nonwearDetectors && !e.nonwearDetectors.includes(r)) continue;
			const n = i ? Sn(r, u) : { included: !0 };
			n.included ? d.push(r) : c.push({
				axis: "nonwear",
				value: r,
				reason: n.reason
			});
		}
		const f = [...new Set(e.studyNonwearSelection ?? [])];
		let p;
		f.length > 1 && (!e.nonwearDetectors || e.nonwearDetectors.includes("study_selection")) && (f.filter((e) => t.nonwearAlgorithms.includes(e) && (!i || Sn(e, u).included)).length > 0 ? (d.push(ge), p = f) : c.push({
			axis: "nonwear",
			value: ge,
			reason: "none of the study's nonwear detectors can run for this day"
		}));
		const m = o ? ["none", ...d] : d, g = [], h = 2 === e.periodSources?.length && e.periodSources[0] === H.diary && e.periodSources[1] === H.hdcza ? [s ? H.diary : H.hdcza] : e.periodSources;
		for (const r of Object.values(H)) {
			if (h && !h.includes(r)) continue;
			const e = bn(r, s, t, i);
			e.included ? g.push(r) : c.push({
				axis: "periodSource",
				value: r,
				reason: e.reason
			});
		}
		const w = e.rulesets ?? [r.LEGACY, r.REGULARITY_V2], y = e.rescorings ?? [a.NONE, a.WEBSTER], v = {
			classifierConfigIds: [...l],
			nonwear: m,
			periodSource: g,
			ruleset: w,
			rescoring: y
		}, b = [], S = /* @__PURE__ */ new Set();
		for (const r of l) for (const e of m) for (const n of g) for (const t of w) for (const s of y) {
			const a = ln({
				classifierConfigId: r,
				nonwear: e,
				periodSource: n,
				ruleset: t,
				rescoring: s
			}, p);
			S.has(a.id) || (S.add(a.id), b.push(a));
		}
		return {
			variants: b,
			axes: v,
			skipped: c,
			...p ? { studyNonwearSelection: p } : {}
		};
	}({
		classifierConfigIds: Object.keys(t.classifierOutputs),
		capabilities: s,
		hasDiary: null != t.diary,
		day: t,
		...u
	});
	if (0 === h.variants.length) return f;
	const w = h.variants.filter((e) => !t.precomputedVariantMasks[e.id]);
	if (f.skipped = h.variants.length - w.length, 0 === w.length) return f;
	const y = {};
	d(i, "before scored-variant nonwear computation");
	const v = await k(m, (e) => async function(e, n, t) {
		const r = {};
		for (const s of new Set(n)) "none" !== s && "study_selection" !== s && (r[s] = await kn(s, e, t));
		return r;
	}({
		timestamps: t.timestamps,
		activityCounts: t.activityCounts,
		epochLengthSeconds: t.epochLengthSeconds,
		...t.temperature ? { nonwearSignals: { temperature: t.temperature } } : {}
	}, function(e) {
		return [.../* @__PURE__ */ new Set([...e.axes.nonwear, ...e.studyNonwearSelection ?? []])];
	}(h), e), {
		ms: M,
		label: "scored-variant nonwear computation",
		signal: i,
		cancel: g
	});
	for (let e = 0; e < w.length; e += 2e3) {
		d(i, "before scored-variant warm computation");
		const r = {
			timestamps: t.timestamps,
			activityCounts: t.activityCounts,
			epochLengthSeconds: t.epochLengthSeconds,
			analysisDate: t.analysisDate,
			guiderWindows: t.guiderWindows,
			...t.eventMarkerTimestamps?.length ? { eventMarkerTimestamps: t.eventMarkerTimestamps } : {},
			...t.diary ? { diary: t.diary } : {},
			classifierOutputs: t.classifierOutputs,
			nonwearMasks: v,
			...h.studyNonwearSelection ? { studyNonwearDetectors: h.studyNonwearSelection } : {},
			variants: w.slice(e, e + 2e3).map((e) => ({
				id: e.id,
				...e.config
			}))
		}, s = t.sourceContentHash && void 0 !== t.seriesRevision ? JSON.stringify([
			o.name,
			t.fileId,
			t.analysisDate,
			t.sourceContentHash,
			t.seriesRevision,
			t.diaryFingerprint,
			t.epochLengthSeconds,
			t.timestamps.length,
			t.timestamps[0],
			t.timestamps.at(-1),
			r.variants,
			h.studyNonwearSelection
		]) : An(r);
		let a = Cn.get(m);
		a || (a = /* @__PURE__ */ new Map(), Cn.set(m, a));
		const c = a.get(s) ?? await k(m, (e) => e.runScoredVariantBatch(r), {
			ms: 3e5,
			label: "scored-variant warm computation",
			signal: i,
			cancel: l ?? (() => {
				n(m);
			})
		});
		if (0 === Object.keys(c.masks).length && a.set(s, c), d(i, "after scored-variant warm computation"), Object.assign(y, c.masks), f.computed += Object.keys(c.masks).length, f.missingClassifier += c.missingClassifier, En(f, c.notes), c.placementUnavailable) {
			f.placementUnavailable = !0;
			break;
		}
	}
	if (Object.keys(y).length > 0) {
		let e;
		try {
			d(i, "before scored-variant warm persistence");
			const { controller: n, release: r } = C(i);
			e = r;
			const s = n.signal;
			if (!await k(m, (e) => q(t.fileId, t.analysisDate, y, t.diaryFingerprint, o, e, s), {
				ms: 3e5,
				label: "scored-variant warm persistence",
				signal: void 0,
				cancel: () => {
					n.abort(), g();
				}
			})) throw new _n();
		} catch (b) {
			i?.aborted && g(), p(b, i, "scored-variant warm persistence");
			const e = b instanceof Error && "QuotaExceededError" === b.name ? "QuotaExceededError" : "Error";
			throw console.warn("[scored-variant-warm] Precomputed mask persistence failed.", e), Se("warn", "Precomputed variant mask persistence failed", { error_type: e }), new _n(z(b));
		} finally {
			e?.();
		}
	}
	return f;
}
const On = /* @__PURE__ */ new WeakMap();
async function Mn(e, n, t, r) {
	const s = On.get(e)?.get(n);
	return s ? Promise.all(s.map(async (e) => {
		let n = e.run.answers.get(t);
		return n || (n = r(e.run.group, e.run.probabilities), e.run.answers.set(t, n)), {
			...e,
			value: await n
		};
	})) : null;
}
function zn(e, n) {
	On.set(e, n);
}
function xn(e) {
	const n = new Uint8Array(e.length);
	return n.set(e), n.buffer;
}
function Rn(e) {
	const n = {}, t = [];
	for (const [r, s] of Object.entries(e ?? {})) {
		if (!s) continue;
		const e = ce(r);
		if (!e) throw new Error(`sleep/wake output ${r} is not a declared AlgorithmRunKey (core.yaml)`);
		const a = xn(s);
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
	s && 0 !== s.length && (e[X(n, t, r)] = new Float64Array(s));
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
const Pn = /* @__PURE__ */ new Map();
function jn(e, n, t, r = !1, s) {
	const a = r && 30 !== e ? [30, e] : [e], o = a.join(","), i = n ? `${o}|lstm|${t.id}|${t.label}|selected:${String(s ?? "none")}|${JSON.stringify(t.thresholdPresets ?? null)}` : `${o}|nolstm`, c = Pn.get(i);
	if (c) return c;
	const l = Z({
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
	return Pn.set(i, l), l;
}
function Dn() {
	Pn.clear();
}
const Nn = {
	dayCount: 0,
	variantsComputed: 0,
	variantsSkipped: 0,
	dayFailures: 0
};
function Vn(e, n) {
	return JSON.stringify({
		sourceCaps: e,
		narrowing: n ?? null
	}, (e, n) => n instanceof Set ? [...n].map(String).sort() : n);
}
async function Ln(e, n, t, r) {
	const [s, a, o] = await Promise.all([
		r.files.get(e),
		B(e, r),
		Ce(Ke, e, r)
	]);
	return "warm-v3:" + Oe({
		plan: Vn(n, t),
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
			naps: be(e),
			nonwear: we(e)
		})),
		...o
	});
}
async function Yn(e, n, t, r, s = A(), a, o, c, l = vn(i().scoring()), u) {
	const f = s;
	if (!t) return Nn;
	const g = await se(e, f);
	if (g?.sourceType && !R(g.sourceType, "local")) return Nn;
	const h = { ...Nn }, w = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), v = await fe(e, f).then((e) => ({
		fileRecord: g,
		activitySpan: e
	}), () => ({ fileRecord: g })), b = l?.(v.fileRecord), S = await Ln(e, t, b, f), k = /* @__PURE__ */ new Set();
	if (ne(v.fileRecord) > 60) return Nn;
	let _ = /* @__PURE__ */ new Map();
	const C = (n) => {
		let t = _.get(n);
		return t || (t = me(e, n, f), _.set(n, t)), t;
	};
	let E = !1;
	const I = N((n, t) => {
		n === e && t === f && (E = !0);
	}), O = n.length;
	let x = 0;
	r?.({
		phase: "variants",
		percent: 98,
		message: `0/${String(O)} days`
	});
	const T = () => {
		x >= O || (x += 1, r?.({
			phase: "variants",
			percent: 0 === O ? 100 : 98 + 2 * x / O,
			message: `${String(x)}/${String(O)} days`
		}));
	};
	let $ = !1;
	try {
		let r = n;
		for (let s = 0; s < 2; s++) {
			_ = /* @__PURE__ */ new Map();
			for (const n of r) if ($) y.add(n), T();
			else {
				performance.now(), h.variantsComputed;
				for (const e of _.keys()) e < n && _.delete(e);
				try {
					d(a, "before scored-variant warm day load");
					const r = await F(() => on(e, n, f, {
						...v,
						readDay: C,
						wasmApi: o
					}), M, "scored-variant day load", a, c ?? (() => {}));
					if (d(a, "after scored-variant warm day load"), !r || 0 === Object.keys(r.classifierOutputs).length) {
						T();
						continue;
					}
					const s = await In(r, t, {
						db: f,
						signal: a,
						wasmApi: o,
						cancelOperation: c,
						narrowing: b
					});
					k.delete(n), h.variantsComputed += s.computed, w.has(n) || (h.variantsSkipped += s.skipped), s.placementUnavailable || 0 !== s.missingClassifier ? y.add(n) : (w.add(n), y.delete(n)), T(), s.placementUnavailable && console.warn("[local-processing] Scored-variant warm placement was unavailable.");
				} catch (j) {
					p(j, a, "scored-variant warm"), console.warn("[local-processing] Scored-variant warm failed."), z(j) && ($ = !0), j instanceof Error && "ScoredVariantPersistenceError" === j.name && k.add(n), y.add(n), T();
				}
			}
			if ($ || s > 0 || !E && 0 === y.size) break;
			r = E ? n : [...y], E = !1;
		}
	} finally {
		I(), _ = /* @__PURE__ */ new Map(), h.dayCount = w.size, a?.aborted && u && await Un(() => Promise.resolve(), e, h, u);
	}
	let P = E || k.size > 0 || Boolean(a?.aborted);
	if (!P) try {
		const n = await f.scoredVariantMasks.where("fileId").equals(e).count();
		P = !await m(f, [
			f.files,
			f.diaryEntries,
			...Ae(Ke, f)
		], async () => !a?.aborted && await Ln(e, t, b, f) === S && await f.files.update(e, { scoredVariantWarm: {
			inputs: S,
			maskDays: n,
			outcome: y.size > 0 ? "known-failures" : "complete",
			failedDays: y.size
		} }) > 0, a);
	} catch {
		P = !0, console.warn("[local-processing] Scored-variant warm stamp could not be saved.");
	}
	return h.dayFailures = P ? Math.max(y.size, O) : y.size, h;
}
async function Un(e, n, t, r, s) {
	await e(), 0 !== t.variantsComputed && await de.recordWorkspaceBoundDurably(r, w.SYSTEM_RECALCULATION, {
		subject: "scored_variant_precompute",
		fileId: n,
		dayCount: t.dayCount,
		variantsComputed: t.variantsComputed,
		variantsSkipped: t.variantsSkipped,
		trigger: "file_processing"
	});
}
function Wn() {
	return x(y.SCORED_VARIANT_WARM);
}
function Bn(e, n = {}) {
	const t = n.db ?? A();
	return I({
		kind: y.SCORED_VARIANT_WARM,
		key: U(e),
		label: "Scoring variants",
		workspaceId: t.name,
		signal: n.signal,
		rerun: !0,
		run: (r) => async function(e, { forget: n = !1, resumeIncomplete: t = !1, retryKnownFailures: r = !0, db: s = A() }, a) {
			try {
				if (A() !== s) return;
				const o = await s.files.get(e);
				if (A() !== s || !o || "incomplete" === o.ingestState || 0 === o.availableDates.length || !o.sourceType || o.epochLengthSeconds > 60) return;
				const c = i().scoring(), { username: l, selectedStudyId: u } = c, d = R(o.sourceType, "local");
				if (!d) return;
				const f = vn(c);
				if (!n && !t) return;
				const p = await Ln(e, d, f(o), s);
				if (A() !== s) return;
				if (!n && o.scoredVariantWarm?.outcome && o.scoredVariantWarm.inputs === p && (!r || "known-failures" !== o.scoredVariantWarm.outcome)) return;
				const h = o.scoredVariantWarm;
				if (!await m(s, [
					s.files,
					s.diaryEntries,
					...Ae(Ke, s),
					s.scoredVariantMasks
				], async () => {
					const t = await s.files.get(e);
					if (A() !== s || !t || JSON.stringify(t.scoredVariantWarm) !== JSON.stringify(h)) return !1;
					const r = await Ln(e, d, f(t), s);
					if (A() !== s || r !== p) return !1;
					if (t.scoredVariantWarm && (!t.scoredVariantWarm.outcome || t.scoredVariantWarm.inputs !== p) && (await s.scoredVariantMasks.where("fileId").equals(e).delete(), A() !== s)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					if ((n || t.scoredVariantWarm) && (await s.files.where(":id").equals(e).modify((e) => {
						delete e.scoredVariantWarm;
					}), A() !== s)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					return !0;
				}, a.signal) || A() !== s) return;
				await async function(e, n, t, r, s, a, o) {
					let c = !1;
					const l = () => {
						c = !0, Se("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" });
					};
					if (A() !== s) return;
					J({
						fileId: e,
						done: 0,
						total: n.length
					}, s);
					const u = g(() => {
						A() !== s && i().jobs().cancel(`${s.name}:${U(e)}`);
					}), d = new AbortController(), f = () => {
						d.abort();
					};
					o.signal.addEventListener("abort", f, { once: !0 });
					try {
						const i = await Yn(e, n, t, (e) => {
							o.progress(Number.parseInt(e.message, 10), n.length, e.message);
						}, s, o.signal, S(d.signal), f, a, r);
						await Un(() => Promise.resolve(), e, i, r, o.signal), o.signal.throwIfAborted(), i.dayFailures > 0 && (console.warn("[local-processing] Some days could not be precomputed; reimport the file to retry."), l());
					} catch {
						if (o.signal.aborted) return;
						console.warn("[local-processing] Background scored-variant warm failed."), l();
					} finally {
						o.signal.removeEventListener("abort", f), u(), J(c && !o.signal.aborted && A() === s ? {
							fileId: e,
							done: G()?.done ?? 0,
							total: n.length,
							failed: !0
						} : null, s);
					}
					if (c) throw new Error("Background scored-variant warm failed.");
				}(e, o.availableDates, d, de.captureWorkspaceBinding(s, {
					username: l,
					studyId: u,
					signal: a.signal
				}), s, f, a);
			} catch {
				if (a.signal.aborted) return;
				console.warn("[local-processing] Scored-variant warm could not be scheduled."), Se("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" }), A() === s && J({
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
	return I({
		kind: y.VARIANT_RECOVERY,
		key: y.VARIANT_RECOVERY,
		label: "Resume scoring variants",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			await e.projectMeta.get(K);
			const r = (e) => null != e.id && "incomplete" !== e.ingestState && Boolean(e.sourceType && R(e.sourceType, "local")) && e.availableDates.length > 0 && !(e.epochLengthSeconds > 60), s = (await oe(e)).filter(r);
			for (const o of s) {
				if (A() !== e) return;
				await Bn(o.id, {
					db: e,
					resumeIncomplete: !0,
					retryKnownFailures: n,
					signal: t.signal
				}), await t.yieldNow();
			}
			if (A() !== e || !e.isOpen()) return;
			const a = vn(i().scoring());
			await m(e, [
				e.projectMeta,
				e.files,
				e.diaryEntries,
				...Ae(Ke, e)
			], async () => {
				const t = [], o = (await oe(e)).filter(r);
				for (const r of o) {
					const o = R(r.sourceType, "local"), i = await Ln(r.id, o, a(r), e), c = (await e.files.get(r.id))?.scoredVariantWarm;
					if (!c?.outcome || c.inputs !== i || A() !== e) return void await e.projectMeta.delete(K);
					t.push([r.id, i]), "known-failures" !== c.outcome || s.find((e) => e.id === r.id)?.scoredVariantWarm?.inputs === i && !n || J({
						fileId: r.id,
						done: r.availableDates.length,
						total: r.availableDates.length,
						failed: !0
					}, e);
				}
				await e.projectMeta.put({
					key: K,
					revision: Number.parseInt(Oe(t), 16)
				});
			}, t.signal);
		}
	}).catch((n) => {
		if (t?.aborted || n instanceof DOMException && "AbortError" === n.name) throw n;
		throw Se("warn", "Background scored-variant warm failed", { error_type: "Error" }), J({
			fileId: 0,
			done: 0,
			total: 0,
			failed: !0
		}, e), /* @__PURE__ */ new Error("Stored scoring variants could not be resumed.");
	});
}
async function Jn(n, t, r, s, a) {
	const o = s ?? e(), i = await Mn(o, n, `cube:${String(t)}:${JSON.stringify(a)}`, (e, n) => Jn(e, t, n, o, a));
	if (i) {
		const e = {}, t = [];
		for (const r of i) for (const s of r.value.historyOutputs) {
			const a = new Uint8Array(s.results), o = a.length !== r.run.group.timestamps.length, i = o ? n.counts30s?.timestamps.length ?? 0 : n.timestamps.length, c = e[s.cubeConfig.id] ?? new ArrayBuffer(i);
			new Uint8Array(c).set(a.slice(o ? r.nativeStart : r.start, o ? r.nativeEnd : r.end), o ? r.nativeOffset : r.offset), e[s.cubeConfig.id] || t.push({
				cubeConfig: s.cubeConfig,
				results: c
			}), e[s.cubeConfig.id] = c;
		}
		return {
			algorithmResults: e,
			historyOutputs: t,
			skipped: i.reduce((e, n) => e + n.value.skipped, 0)
		};
	}
	const c = Je(a), l = Ze(c.modelId), u = jn(t, !!r && r.length > 0 && "unconfigured" !== l.id, l, !!n.counts30s && n.counts30s.axisY.length > 0, c.threshold ?? void 0), d = await async function(e) {
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
		backend: s ?? e(),
		signals: Tn(n, t, l, r)
	}), f = {}, p = [], m = new Map(u.configs.map((e) => [e.id, e]));
	for (const [e, g] of Object.entries(d.outputs)) {
		const n = m.get(e);
		if (!n) throw new Error(`cube output ${e} has no planned config`);
		const t = xn(g);
		f[e] = t, p.push({
			cubeConfig: n,
			results: t
		});
	}
	return {
		algorithmResults: f,
		historyOutputs: p,
		skipped: d.skipped.filter((e) => !e.inputUnavailable).length
	};
}
function Kn(e, n) {
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
async function Zn(n, t, r) {
	if (!t) return {};
	const s = r ?? e(), a = await Mn(s, n, `hasib:${JSON.stringify(t)}`, (e) => Zn(e, t, s));
	if (a) {
		const e = {};
		for (const t of a) for (const [r, s] of Object.entries(t.value)) {
			if (!s) continue;
			const a = e[r] ?? new Uint8Array(n.timestamps.length);
			a.set(s.slice(t.start, t.end), t.offset), e[r] = a;
		}
		return e;
	}
	const o = (t.variants ?? xe).filter((e) => e !== Fe);
	if (0 === o.length) return {};
	const i = t.countSource ?? "neishabouri_vm_60s";
	if (!function(e, n) {
		const { family: t, axis: r } = Me(n);
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
	}(n, i)) return {};
	const c = Float64Array.from(n.timestamps), l = (s.medianGapSeconds ? await s.medianGapSeconds(c) : await e().medianGapSeconds(c)) ?? t.countEpochSeconds ?? 60, u = await Re({
		backend: s,
		variants: o,
		anglez5s: /* @__PURE__ */ new Float64Array(),
		neishabouriCounts: {
			...n.axisX ? { x: new Float64Array(n.axisX) } : {},
			y: new Float64Array(n.axisY),
			...n.axisZ ? { z: new Float64Array(n.axisZ) } : {},
			vm: new Float64Array(n.vectorMagnitude)
		},
		neishabouriVm60s: new Float64Array(n.vectorMagnitude),
		zeroCrossingCountsByAxis: {
			...n.zeroCrossingX && n.zeroCrossingX.length > 0 ? { x: new Float64Array(n.zeroCrossingX) } : {},
			...n.zeroCrossingY && n.zeroCrossingY.length > 0 ? { y: new Float64Array(n.zeroCrossingY) } : {},
			...n.zeroCrossingZ && n.zeroCrossingZ.length > 0 ? { z: new Float64Array(n.zeroCrossingZ) } : {}
		},
		...n.zeroCrossingY && n.zeroCrossingY.length > 0 ? { zeroCrossingY60s: new Float64Array(n.zeroCrossingY) } : {},
		countSource: i,
		countEpochSeconds: l,
		...void 0 !== t.configs ? { configs: t.configs } : {}
	});
	return Object.fromEntries(u.map((e) => [e.key, e.result.sib]));
}
async function Gn(n, t, r) {
	const s = r ?? e(), a = await Mn(s, n, `ggir:${String(t)}`, (e) => Gn(e, t, s));
	if (a) {
		if (a.some((e) => !e.value)) return null;
		const e = new Uint8Array(n.timestamps.length), t = new Uint8Array(n.timestamps.length);
		for (const n of a) e.set(n.value.sadeh.slice(n.start, n.end), n.offset), t.set(n.value.ck.slice(n.start, n.end), n.offset);
		return {
			sadeh: e,
			ck: t
		};
	}
	if (!n.zeroCrossingY || 0 === n.zeroCrossingY.length) return null;
	const o = await Re({
		backend: r ?? e(),
		variants: ["Sadeh1994", "ColeKripke1992"],
		anglez5s: /* @__PURE__ */ new Float64Array(),
		zeroCrossingY60s: new Float64Array(n.zeroCrossingY),
		countSource: "zero_crossing_y_60s",
		countEpochSeconds: t
	}), i = ze("sadeh_1994"), c = ze("cole_kripke_1992"), l = o.find((e) => e.variant === i)?.result.sib, u = o.find((e) => e.variant === c)?.result.sib;
	return l && u ? {
		sadeh: l,
		ck: u
	} : null;
}
async function Xn(e, n) {
	const t = [], r = e.sadeh_1994_actilife.length, a = (e) => {
		e && e.length === r && t.push(e);
	};
	a(e.sadeh_1994_actilife), a(e.sadeh_1994_original), a(e.cole_kripke_1992_actilife), a(e.cole_kripke_1992_original), a(e.sadeh_1994_ggir), a(e.cole_kripke_1992_ggir), a(e.lstm_sleep_wake);
	for (const [o, i] of Object.entries(e.hasibVariants ?? {})) o !== Y.TENSOR_MAJORITY_VOTE && o !== Y.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== s(o)?.grammarId && a(i);
	for (const [o, i] of Object.entries(e.cubeOutputs ?? {})) o !== Y.TENSOR_MAJORITY_VOTE && o !== Y.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== s(o)?.grammarId && a(i);
	return 0 === t.length ? new Uint8Array(r) : n.scoreConsensus("majority_tie_sleep", t);
}
N((e, n, t) => {
	Bn(e, {
		resumeIncomplete: !0,
		retryKnownFailures: !1,
		db: n,
		signal: t
	}).catch(() => {});
});
export { Dn as _resetCubePlanCacheForTest, Wn as awaitScheduledScoredVariantWarms, Hn as backfillInterruptedScoredVariantWarms, jn as buildOrReuseAlgorithmOutputCubePlan, xn as cloneOutputBuffer, Xn as computeTensorConsensusForDay, $n as cubeRunsOnGrid, Un as finalizeAndAuditScoredVariantWarm, Bn as rewarmFileScoredVariants, Jn as runAlgorithmCubeForDay, Gn as scoreBuiltinGgirSadehColeForDay, Zn as scoreCountBasedHasibVariantsForDay, Ln as scoredVariantFileInputs, Rn as sleepWakeToPersistedOutputs, zn as t, Yn as warmFileScoredVariants, Kn as withRecordingWakeThreshold };
