import { $n as e, Fn as n, Ft as t, Gt as r, H as s, Lr as a, Mr as o, Nt as i, Pn as c, Pt as l, Rr as u, an as d, bt as f, cr as p, dn as m, dr as g, f as h, g as w, in as y, ir as v, l as b, lr as S, mt as k, n as _, o as C, on as A, or as E, p as I, r as O, sn as M, sr as z, t as x, un as R, ut as F, xt as T } from "./background-jobs-CkfFAB3h.js";
import { Ar as $, Br as P, Bt as j, Cn as D, Fn as N, Ft as V, Hn as L, Hr as Y, In as U, Ir as W, J as B, Jr as H, Ln as J, Mn as K, Mr as G, Nn as Z, Nr as X, P as q, Pr as Q, Pt as ee, Q as ne, Qt as te, Rr as re, S as se, Sn as ae, T as oe, Tn as ie, Xr as ce, Y as le, Z as ue, Zn as de, _t as fe, bn as pe, d as me, dn as ge, ft as he, ht as we, jr as ye, lt as ve, mt as be, sr as Se, ut as ke, w as _e, wn as Ce, xn as Ae, xt as Ee, yt as Ie, zr as Oe } from "./db-BOSZ3ZCP.js";
import { a as Me, i as ze, n as xe, o as Re, t as Fe } from "./local-ggir-hasib-variants-Q992OWet.js";
import { A as Te, E as $e, M as Pe, O as je, k as De, y as Ne } from "./local-nonwear-unified-C8cWY_VJ.js";
import { a as Ve, g as Le, m as Ye, o as Ue } from "./epoch-utils-C_YLPNox.js";
import { B as We } from "./local-export-shard-worker-Cgy9R1ac.js";
import { T as Be } from "./ingest-Cry8fLMg.js";
import { D as He, F as Je, I as Ke, N as Ge, it as Ze, ot as Xe } from "./ggir-import-BTcMftmE.js";
var qe = class extends Error {};
async function Qe(e, n, t, s) {
	switch (e.family) {
		case "count_hasib": return async function(e, n, t) {
			const s = e.input.seriesKey, a = Me(s), o = t.counts?.[s];
			if (!o || 0 === o.length) throw new qe(`Missing count input ${s}.`);
			if ("string" == typeof e.parameters.implementation) return en(e), async function(e, n, t) {
				const r = function(e) {
					const n = l(e.id);
					if (null === n || "count_cell" !== n.grammarId) return null;
					const t = n.values.method_family, r = n.values.implementation_variant;
					return void 0 === t || void 0 === r ? null : F.find((e) => e.methodFamilyId === t && e.implementationVariantId === r)?.primitiveId ?? null;
				}(e);
				if ("sadeh" === r) {
					if (!n.scoreSadeh) throw new Error("Registry Sadeh primitive (scoreSadeh) unavailable on this worker bundle.");
					const r = k.scoring_threshold, s = "number" == typeof r ? r : 0, a = "number" == typeof e.parameters.threshold ? e.parameters.threshold : s;
					return n.scoreSadeh(t, a);
				}
				if ("cole_kripke" === r) {
					if (!n.scoreColeKripke) throw new Error("Registry Cole-Kripke primitive (scoreColeKripke) unavailable on this worker bundle.");
					const r = !0 === e.parameters.useActilifeScaling;
					return n.scoreColeKripke(t, r);
				}
				throw new Error(`Unsupported provenance count scorer ${e.algorithm}.`);
			}(e, n, o);
			const c = function(e) {
				if (xe.includes(e.algorithm)) return null;
				const n = l(e.id)?.values.method_family, t = r.find((e) => "sleep_wake" === e.kind && e.family === n), s = t?.nativeEpochSeconds;
				return !t || 30 !== s && 60 !== s ? null : {
					methodId: t.id,
					nativeEpochSeconds: s
				};
			}(e);
			if (c) return async function(e, n, t, r) {
				const s = Me(e.input.seriesKey), a = i(s.family, s.axis, n.nativeEpochSeconds), o = r.counts?.[a];
				if (!o || 0 === o.length) throw new qe(`Missing native count input ${a}.`);
				if (!t.scoreEpochs || !t.foldOntoGrid) throw new Error("The typed epoch scorer (scoreEpochs) is unavailable on this worker bundle.");
				const c = await t.scoreEpochs({
					algorithm: n.methodId,
					signals: {
						counts: o,
						epochSeconds: n.nativeEpochSeconds
					}
				}), l = Be(c, o.length);
				if (!l) throw new Error(`${n.methodId}: ${c.reason ?? "the scorer returned no series"}`);
				if (e.epochSeconds === n.nativeEpochSeconds) return l;
				const u = r.timestamps?.[n.nativeEpochSeconds], d = r.timestamps?.[e.epochSeconds];
				if (!u || !d || u.length !== l.length) throw new qe(`Missing the timestamps that align ${a} with the ${String(e.epochSeconds)} s grid.`);
				const f = await t.foldOntoGrid(u, Float64Array.from(l), d, e.epochSeconds, "majority_ties_sleep");
				return Uint8Array.from(f);
			}(e, c, n, t);
			en(e);
			const u = (await Re({
				backend: n,
				variants: [e.algorithm],
				anglez5s: /* @__PURE__ */ new Float64Array(),
				countSource: s,
				countEpochSeconds: a.epochSeconds,
				..."neishabouri" === a.family ? { neishabouriCounts: { [a.axis]: o } } : { zeroCrossingCountsByAxis: { [a.axis]: o } }
			}))[0];
			if (!u) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return u.result.sib;
		}(e, n, t);
		case "angle_hasib": return async function(e, n, t) {
			const r = f.angle_hasib;
			if (void 0 === r || e.algorithm !== r.algorithmValue) throw new Error(`Unsupported angle-HASIB algorithm ${e.algorithm}.`);
			if (!t.anglez5s || 0 === t.anglez5s.length) throw new qe(`Missing ${r.inputSeriesKey} input.`);
			const s = (await Re({
				backend: n,
				variants: [e.algorithm],
				anglez5s: t.anglez5s,
				countSource: i(T, "y", 60)
			}))[0];
			if (!s) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return s.result.sib;
		}(e, n, t);
		case "lstm": return async function(e, n, t) {
			const r = "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm, s = t.lstmProbabilities?.[r];
			if (!s || 0 === s.length) throw new qe(`Missing LSTM probabilities for ${r}.`);
			const a = k.model_threshold, o = "number" == typeof e.parameters.threshold ? e.parameters.threshold : "number" == typeof a ? a : .5;
			if (!n.thresholdProbabilities) throw new Error("The probability threshold (thresholdProbabilities) is unavailable on this worker bundle.");
			return n.thresholdProbabilities(Float64Array.from(s), o);
		}(e, n, t);
		case "consensus": return async function(e, n, t) {
			const r = (Array.isArray(e.parameters.inputConfigIds) ? e.parameters.inputConfigIds.filter((e) => "string" == typeof e) : e.lineage).map((e) => {
				const t = n[e];
				if (!t) throw new qe(`Missing consensus input ${e}.`);
				return t;
			});
			if (0 === r.length) throw new Error("Consensus requires at least one input.");
			const s = r[0].length;
			for (const o of r) if (o.length !== s) throw new Error(`Consensus inputs are not aligned (${String(o.length)} vs ${String(s)} epochs).`);
			const a = "string" == typeof e.parameters.strategy ? e.parameters.strategy : k.consensus_strategy;
			return t.scoreConsensus(a, r);
		}(e, s, n);
	}
}
function en(e) {
	const n = l(e.id)?.values, t = n?.implementation_variant, r = W(String(n?.method_family), void 0 === t ? void 0 : String(t));
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
async function on(e, n, t = I(), r = {}) {
	const s = t, a = r.readDay ?? ((n) => me(e, n, s)), o = await Ue(e, n, s, a, r.fileRecord?.navigationFacts, r.wasmApi);
	if (!o) return null;
	const i = await a(await Ve(n, r.fileRecord?.navigationFacts, r.wasmApi)), c = (i ? [o, i] : [o]).filter((e) => e.timestamps.byteLength > 0), l = sn(c.map((e) => e.timestamps)), { startIndex: u, endIndex: d } = await We(l, n, r.wasmApi);
	if (d <= u) return null;
	const f = l.subarray(u, d), p = Array.from(f), m = Array.from(sn(c.map((e) => e.axisY)).subarray(u, d)), g = await ue(f, {
		day: c[0],
		file: r.fileRecord
	}, r.wasmApi), h = await _e(e, s, r.fileRecord ? { file: r.fileRecord } : void 0), w = {}, y = {}, v = {};
	for (const I of h.cellIds) {
		const e = h(I), n = j(c, e);
		if ("stale" === n.status) {
			y[I] = n.reason;
			continue;
		}
		const t = n.outputs.filter((e) => null != e);
		if (t.length !== c.length) continue;
		const s = await Promise.all(t.map(async (e, n) => (await Ye(c[n], new Uint8Array(e), r.wasmApi))?.buffer ?? e));
		w[I] = Array.from(an(s).subarray(u, d)), "ok" === e.status && null !== e.configHash && (v[I] = e.configHash);
	}
	const b = r.fileRecord ? Promise.resolve(r.fileRecord) : se(e, s), [S, k, _, C, A] = await Promise.all([
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
	]), E = S ? await Ie(S, k, r.wasmApi) : null, O = p[0] ?? 0, M = (p[p.length - 1] ?? O) + g, z = c.flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter((e) => e >= O && e < M), x = E ? {
		diaryInBedTime: ve(R = E),
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
		seriesRevision: A?.seriesRevision ?? 0,
		classifierConfigHashes: Object.keys(v).length > 0 ? v : void 0
	}), T = _?.diaryFingerprint === F, $ = {};
	if (_?.masks && T) for (const [I, P] of Object.entries(_.masks)) P.byteLength === p.length && ($[I] = new Uint8Array(P));
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
		...A?.sourceContentHash ? {
			sourceContentHash: A.sourceContentHash,
			seriesRevision: A.seriesRevision ?? 0
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
	const r = {
		classifierConfigId: e.classifierConfigId.trim(),
		nonwear: cn(e.nonwear),
		periodSource: cn(e.periodSource),
		ruleset: cn(e.ruleset),
		rescoring: cn(e.rescoring)
	}, s = "study_selection" === r.nonwear && n?.length ? `${r.nonwear}_${[...new Set(n)].sort().join("_")}` : r.nonwear;
	return {
		id: t("scored_variant", {
			classifier_config_id: r.classifierConfigId,
			nonwear: s,
			period_source: r.periodSource,
			ruleset: r.ruleset,
			rescoring: r.rescoring
		}),
		configHash: Oe({
			...r,
			nonwear: s
		}),
		config: r
	};
}
const un = "cube_cell_absent", dn = new Map(r.map((e) => [e.id, e])), fn = new Set(ye.map((e) => e.slug)), pn = [30, 60];
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
const hn = f.angle_hasib?.configId ?? "";
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
	const r = e.algorithm.trim(), s = dn.get(r);
	if (!s) return mn("unknown_algorithm", `algorithm "${e.algorithm}" is not a known AlgorithmType`);
	if (n.capabilities && !n.capabilities.sleepAlgorithms.includes(r)) return mn("capability_unavailable", `algorithm "${r}" is not available for the file's capabilities`);
	if ("van_hees_2015" === r) return function() {
		const e = gn(hn, () => G({
			includeFamilies: ["angle_hasib"],
			includeConsensus: !1
		}).configs);
		return e ? wn(e) : mn(un, "the van_hees_2015 angle cell was not present in the cube plan");
	}();
	const a = s.family ?? "";
	return "sleep_wake" === s.kind && fn.has(a) ? function(e, n) {
		const r = e.countMetric.trim();
		if (s = r, !Object.prototype.hasOwnProperty.call($, s)) return mn("unknown_count_metric", `count metric "${e.countMetric}" is not a cube count source (expected neishabouri or zero_crossing)`);
		var s;
		const a = e.axis.trim();
		if (!$[r].includes(a)) return mn("incompatible_axis", `axis "${e.axis}" is not available for count metric "${r}"`);
		const o = e.epochSeconds;
		if (!pn.includes(o)) return mn("unsupported_epoch", `epoch length ${String(o)}s is not a count-cube epoch (expected 30 or 60)`);
		const i = o, c = t("count_cell", {
			method_family: n,
			count_family: r,
			axis: a,
			epoch_seconds: i
		}), l = gn(c, () => G({
			includeFamilies: ["count_hasib"],
			includeConsensus: !1,
			epochSeconds: [i]
		}).configs);
		return l ? wn(l) : mn(un, `derived cube cell "${c}" was not present in the cube plan`);
	}(e, a) : mn("not_a_cube_scorer", `algorithm "${r}" has no directly scorer-addressable count/angle cube cell`);
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
			}), s = /* @__PURE__ */ new Set();
			if (!e.placementFromSource && t.ok && De(Te(n.family)) === e.extractionPath && s.add(t.variant.cubeCellId), e.ggirHasibVariantsEnabled && !e.placementFromSource) {
				const n = Me(e.ggirHasibCountSource);
				for (const t of e.ggirHasibVariants) {
					const a = ye.find((e) => e.algorithm === t), o = t === Fe ? "van_hees_2015" : r.find((e) => e.family === a?.slug)?.id;
					if (!o) continue;
					const i = yn({
						algorithm: o,
						countMetric: n.family,
						axis: n.axis,
						epochSeconds: e.ggirHasibCountEpochSeconds,
						sleepDetectionRule: e.sleepDetectionRule,
						placementRuleset: e.placementRuleset,
						scorerPostprocessingPreset: e.scorerPostprocessingPreset
					});
					i.ok && s.add(i.variant.cubeCellId);
				}
			}
			const a = "ggir" === Ne(e.currentAlgorithm) ? e.nonwearDetectorsGgir : e.nonwearDetectorsCounts;
			return {
				classifierConfigIds: [...s],
				nonwearDetectors: 1 === a.length ? [...a] : [ge],
				studyNonwearSelection: [...a],
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
	if (d.includes(e) && !n) return {
		included: !1,
		reason: "no diary for this day"
	};
	const s = A[e];
	if (void 0 !== s && r && (!ie(e) || !r.guiderWindows[e])) return {
		included: !1,
		reason: s
	};
	if (e === H.event_marker && r && !r.eventMarkerTimestamps?.length) return {
		included: !1,
		reason: "no event-marker presses for this day"
	};
	const a = R(t, M[e]);
	return null === a ? { included: !0 } : {
		included: !1,
		reason: `unsatisfied source capability: ${a.map((e) => `${e}=false`).join(", ") || "no implemented input signal"}`
	};
}
function Sn(e, n) {
	const t = y[e];
	for (const r of t ?? []) if (r.length > 0 && r.every((e) => n.has(e))) return {
		included: !1,
		reason: `day input unavailable: ${r.join(" or ")}`
	};
	return { included: !0 };
}
async function kn(e, n, t) {
	const r = Q(e);
	if (r && re(r, n.epochLengthSeconds) !== n.epochLengthSeconds) return async function(e, n, t) {
		const r = Float64Array.from(n.timestamps), a = n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts), o = await Ze(t, {
			timestamps: r,
			axisY: a,
			vectorMagnitude: /* @__PURE__ */ new Float64Array()
		}, n.epochLengthSeconds), i = (await He(t, { day: o }, ["day"], s, void 0, [e])).day?.get(e);
		return i?.available && i.nonwear ? { mask: await Xe(t, o.timestamps, i.nonwear, r) } : {
			mask: null,
			reason: i?.reason ?? null
		};
	}(e, n, t ?? a());
	const o = {
		counts: n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts),
		epochSeconds: n.epochLengthSeconds
	};
	n.nonwearSignals?.temperature && (o.temperature = new Float64Array(n.nonwearSignals.temperature)), n.nonwearSignals?.raw && (o.raw = n.nonwearSignals.raw), null != n.nonwearSignals?.sampleRate && (o.sampleRate = n.nonwearSignals.sampleRate);
	const i = await (t ?? a()).detectNonwearUnified({
		algorithm: e,
		signals: o
	});
	if (!i.available || null == i.nonwear) return {
		mask: null,
		reason: i.reason ?? null
	};
	if (i.elementSeconds === n.epochLengthSeconds && n.epochLengthSeconds > 0 && i.nonwear.length === n.timestamps.length && n.timestamps.every((e, t) => e === n.timestamps[0] + t * n.epochLengthSeconds) && i.nonwear.every((e) => 0 === e || 1 === e)) return { mask: i.nonwear };
	const c = $e(i, n.timestamps[0] ?? 0);
	return { mask: (await (t ?? a()).rasterizePeriods(Float64Array.from(c, (e) => e.startTsSec), Float64Array.from(c, (e) => e.endTsSec), Float64Array.from(n.timestamps), n.epochLengthSeconds)).mask };
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
async function In(e, t, { db: r = I(), signal: s, wasmApi: o, cancelOperation: i, narrowing: l } = {}) {
	const d = {
		computed: 0,
		skipped: 0,
		missingClassifier: 0,
		placementUnavailable: !1,
		notes: []
	}, f = o ?? a(), m = i ?? (() => {
		u(f);
	});
	E(s, "before the scored-variant plan");
	const g = function(e) {
		const { classifierConfigIds: t, capabilities: r, hasDiary: s = !1, includeNonwearNone: a = !0, day: o } = e, i = [], l = o ? t.filter((e) => {
			if (void 0 !== o.staleClassifierCells?.[e]) return !0;
			const n = o.classifierOutputs[e];
			return !(!n || n.length !== o.timestamps.length) || (i.push({
				axis: "classifier",
				value: e,
				reason: n ? `stored series of ${String(n.length)} epochs is not on the day's ${String(o.timestamps.length)}-epoch grid` : "no classifier output stored for this day"
			}), !1);
		}) : [...t], u = o ? function(e) {
			const n = /* @__PURE__ */ new Set(["device_wear_state_evidence_stream"]);
			return e.temperature && 0 !== e.temperature.length || n.add("temperature_epoch_stream"), n;
		}(o) : /* @__PURE__ */ new Set(), d = [];
		for (const n of r.nonwearAlgorithms) {
			if (e.nonwearDetectors && !e.nonwearDetectors.includes(n)) continue;
			const t = o ? Sn(n, u) : { included: !0 };
			t.included ? d.push(n) : i.push({
				axis: "nonwear",
				value: n,
				reason: t.reason
			});
		}
		const f = [...new Set(e.studyNonwearSelection ?? [])];
		let p;
		f.length > 1 && (!e.nonwearDetectors || e.nonwearDetectors.includes("study_selection")) && (f.filter((e) => r.nonwearAlgorithms.includes(e) && (!o || Sn(e, u).included)).length > 0 ? (d.push(ge), p = f) : i.push({
			axis: "nonwear",
			value: ge,
			reason: "none of the study's nonwear detectors can run for this day"
		}));
		const m = a ? ["none", ...d] : d, g = [], h = 2 === e.periodSources?.length && e.periodSources[0] === H.diary && e.periodSources[1] === H.hdcza ? [s ? H.diary : H.hdcza] : e.periodSources;
		for (const n of Object.values(H)) {
			if (h && !h.includes(n)) continue;
			const e = bn(n, s, r, o);
			e.included ? g.push(n) : i.push({
				axis: "periodSource",
				value: n,
				reason: e.reason
			});
		}
		const w = e.rulesets ?? [c.LEGACY, c.REGULARITY_V2], y = e.rescorings ?? [n.NONE, n.WEBSTER], v = {
			classifierConfigIds: [...l],
			nonwear: m,
			periodSource: g,
			ruleset: w,
			rescoring: y
		}, b = [], S = /* @__PURE__ */ new Set();
		for (const n of l) for (const e of m) for (const t of g) for (const r of w) for (const s of y) {
			const a = ln({
				classifierConfigId: n,
				nonwear: e,
				periodSource: t,
				ruleset: r,
				rescoring: s
			}, p);
			S.has(a.id) || (S.add(a.id), b.push(a));
		}
		return {
			variants: b,
			axes: v,
			skipped: i,
			...p ? { studyNonwearSelection: p } : {}
		};
	}({
		classifierConfigIds: Object.keys(e.classifierOutputs),
		capabilities: t,
		hasDiary: null != e.diary,
		day: e,
		...l
	});
	if (0 === g.variants.length) return d;
	const h = g.variants.filter((n) => !e.precomputedVariantMasks[n.id]);
	if (d.skipped = g.variants.length - h.length, 0 === h.length) return d;
	const w = {};
	E(s, "before scored-variant nonwear computation");
	const y = await C(f, (n) => async function(e, n, t) {
		const r = {};
		for (const s of new Set(n)) "none" !== s && "study_selection" !== s && (r[s] = await kn(s, e, t));
		return r;
	}({
		timestamps: e.timestamps,
		activityCounts: e.activityCounts,
		epochLengthSeconds: e.epochLengthSeconds,
		...e.temperature ? { nonwearSignals: { temperature: e.temperature } } : {}
	}, function(e) {
		return [.../* @__PURE__ */ new Set([...e.axes.nonwear, ...e.studyNonwearSelection ?? []])];
	}(g), n), {
		ms: v,
		label: "scored-variant nonwear computation",
		signal: s,
		cancel: m
	});
	for (let n = 0; n < h.length; n += 2e3) {
		E(s, "before scored-variant warm computation");
		const t = {
			timestamps: e.timestamps,
			activityCounts: e.activityCounts,
			epochLengthSeconds: e.epochLengthSeconds,
			analysisDate: e.analysisDate,
			guiderWindows: e.guiderWindows,
			...e.eventMarkerTimestamps?.length ? { eventMarkerTimestamps: e.eventMarkerTimestamps } : {},
			...e.diary ? { diary: e.diary } : {},
			classifierOutputs: e.classifierOutputs,
			nonwearMasks: y,
			...g.studyNonwearSelection ? { studyNonwearDetectors: g.studyNonwearSelection } : {},
			variants: h.slice(n, n + 2e3).map((e) => ({
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
			g.studyNonwearSelection
		]) : An(t);
		let o = Cn.get(f);
		o || (o = /* @__PURE__ */ new Map(), Cn.set(f, o));
		const c = o.get(a) ?? await C(f, (e) => e.runScoredVariantBatch(t), {
			ms: 3e5,
			label: "scored-variant warm computation",
			signal: s,
			cancel: i ?? (() => {
				u(f);
			})
		});
		if (0 === Object.keys(c.masks).length && o.set(a, c), E(s, "after scored-variant warm computation"), Object.assign(w, c.masks), d.computed += Object.keys(c.masks).length, d.missingClassifier += c.missingClassifier, En(d, c.notes), c.placementUnavailable) {
			d.placementUnavailable = !0;
			break;
		}
	}
	if (Object.keys(w).length > 0) {
		let n;
		try {
			E(s, "before scored-variant warm persistence");
			const { controller: t, release: a } = z(s);
			n = a;
			const o = t.signal;
			if (!await C(f, (n) => q(e.fileId, e.analysisDate, w, e.diaryFingerprint, r, n, o), {
				ms: 3e5,
				label: "scored-variant warm persistence",
				signal: void 0,
				cancel: () => {
					t.abort(), m();
				}
			})) throw new _n();
		} catch (b) {
			s?.aborted && m(), S(b, s, "scored-variant warm persistence");
			const e = b instanceof Error && "QuotaExceededError" === b.name ? "QuotaExceededError" : "Error";
			throw console.warn("[scored-variant-warm] Precomputed mask persistence failed.", e), Se("warn", "Precomputed variant mask persistence failed", { error_type: e }), new _n(p(b));
		} finally {
			n?.();
		}
	}
	return d;
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
	const l = G({
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
async function Yn(n, t, r, s, a = I(), o, i, c, l = vn(e().scoring()), u) {
	const d = a;
	if (!r) return Nn;
	const f = await se(n, d);
	if (f?.sourceType && !m(f.sourceType, "local")) return Nn;
	const w = { ...Nn }, y = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set(), k = await fe(n, d).then((e) => ({
		fileRecord: f,
		activitySpan: e
	}), () => ({ fileRecord: f })), _ = l?.(k.fileRecord), C = await Ln(n, r, _, d), A = /* @__PURE__ */ new Set();
	if (ne(k.fileRecord) > 60) return Nn;
	let O = /* @__PURE__ */ new Map();
	const M = (e) => {
		let t = O.get(e);
		return t || (t = me(n, e, d), O.set(e, t)), t;
	};
	let z = !1;
	const x = N((e, t) => {
		e === n && t === d && (z = !0);
	}), R = t.length;
	let F = 0;
	s?.({
		phase: "variants",
		percent: 98,
		message: `0/${String(R)} days`
	});
	const T = () => {
		F >= R || (F += 1, s?.({
			phase: "variants",
			percent: 0 === R ? 100 : 98 + 2 * F / R,
			message: `${String(F)}/${String(R)} days`
		}));
	};
	let $ = !1;
	try {
		let e = t;
		for (let s = 0; s < 2; s++) {
			O = /* @__PURE__ */ new Map();
			for (const t of e) if ($) b.add(t), T();
			else {
				performance.now(), w.variantsComputed;
				for (const e of O.keys()) e < t && O.delete(e);
				try {
					E(o, "before scored-variant warm day load");
					const e = await g(() => on(n, t, d, {
						...k,
						readDay: M,
						wasmApi: i
					}), v, "scored-variant day load", o, c ?? (() => {}));
					if (E(o, "after scored-variant warm day load"), !e || 0 === Object.keys(e.classifierOutputs).length) {
						T();
						continue;
					}
					const s = await In(e, r, {
						db: d,
						signal: o,
						wasmApi: i,
						cancelOperation: c,
						narrowing: _
					});
					A.delete(t), w.variantsComputed += s.computed, y.has(t) || (w.variantsSkipped += s.skipped), s.placementUnavailable || 0 !== s.missingClassifier ? b.add(t) : (y.add(t), b.delete(t)), T(), s.placementUnavailable && console.warn("[local-processing] Scored-variant warm placement was unavailable.");
				} catch (j) {
					S(j, o, "scored-variant warm"), console.warn("[local-processing] Scored-variant warm failed."), p(j) && ($ = !0), j instanceof Error && "ScoredVariantPersistenceError" === j.name && A.add(t), b.add(t), T();
				}
			}
			if ($ || s > 0 || !z && 0 === b.size) break;
			e = z ? t : [...b], z = !1;
		}
	} finally {
		x(), O = /* @__PURE__ */ new Map(), w.dayCount = y.size, o?.aborted && u && await Un(() => Promise.resolve(), n, w, u);
	}
	let P = z || A.size > 0 || Boolean(o?.aborted);
	if (!P) try {
		const e = await d.scoredVariantMasks.where("fileId").equals(n).count();
		P = !await h(d, [
			d.files,
			d.diaryEntries,
			...Ae(Ke, d)
		], async () => !o?.aborted && await Ln(n, r, _, d) === C && await d.files.update(n, { scoredVariantWarm: {
			inputs: C,
			maskDays: e,
			outcome: b.size > 0 ? "known-failures" : "complete",
			failedDays: b.size
		} }) > 0, o);
	} catch {
		P = !0, console.warn("[local-processing] Scored-variant warm stamp could not be saved.");
	}
	return w.dayFailures = P ? Math.max(b.size, R) : b.size, w;
}
async function Un(e, n, t, r, s) {
	await e(), 0 !== t.variantsComputed && await de.recordWorkspaceBoundDurably(r, o.SYSTEM_RECALCULATION, {
		subject: "scored_variant_precompute",
		fileId: n,
		dayCount: t.dayCount,
		variantsComputed: t.variantsComputed,
		variantsSkipped: t.variantsSkipped,
		trigger: "file_processing"
	});
}
function Wn() {
	return x(b.SCORED_VARIANT_WARM);
}
function Bn(n, t = {}) {
	const r = t.db ?? I();
	return O({
		kind: b.SCORED_VARIANT_WARM,
		key: U(n),
		label: "Scoring variants",
		workspaceId: r.name,
		signal: t.signal,
		rerun: !0,
		run: (s) => async function(n, { forget: t = !1, resumeIncomplete: r = !1, retryKnownFailures: s = !0, db: a = I() }, o) {
			try {
				if (I() !== a) return;
				const i = await a.files.get(n);
				if (I() !== a || !i || "incomplete" === i.ingestState || 0 === i.availableDates.length || !i.sourceType || i.epochLengthSeconds > 60) return;
				const c = e().scoring(), { username: l, selectedStudyId: u } = c, d = m(i.sourceType, "local");
				if (!d) return;
				const f = vn(c);
				if (!t && !r) return;
				const p = await Ln(n, d, f(i), a);
				if (I() !== a) return;
				if (!t && i.scoredVariantWarm?.outcome && i.scoredVariantWarm.inputs === p && (!s || "known-failures" !== i.scoredVariantWarm.outcome)) return;
				const g = i.scoredVariantWarm;
				if (!await h(a, [
					a.files,
					a.diaryEntries,
					...Ae(Ke, a),
					a.scoredVariantMasks
				], async () => {
					const e = await a.files.get(n);
					if (I() !== a || !e || JSON.stringify(e.scoredVariantWarm) !== JSON.stringify(g)) return !1;
					const r = await Ln(n, d, f(e), a);
					if (I() !== a || r !== p) return !1;
					if (e.scoredVariantWarm && (!e.scoredVariantWarm.outcome || e.scoredVariantWarm.inputs !== p) && (await a.scoredVariantMasks.where("fileId").equals(n).delete(), I() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					if ((t || e.scoredVariantWarm) && (await a.files.where(":id").equals(n).modify((e) => {
						delete e.scoredVariantWarm;
					}), I() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					return !0;
				}, o.signal) || I() !== a) return;
				await async function(n, t, r, s, a, o, i) {
					let c = !1;
					const l = () => {
						c = !0, Se("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" });
					};
					if (I() !== a) return;
					J({
						fileId: n,
						done: 0,
						total: t.length
					}, a);
					const u = w(() => {
						I() !== a && e().jobs().cancel(`${a.name}:${U(n)}`);
					}), d = new AbortController(), f = () => {
						d.abort();
					};
					i.signal.addEventListener("abort", f, { once: !0 });
					try {
						const e = await Yn(n, t, r, (e) => {
							i.progress(Number.parseInt(e.message, 10), t.length, e.message);
						}, a, i.signal, _(d.signal), f, o, s);
						await Un(() => Promise.resolve(), n, e, s, i.signal), i.signal.throwIfAborted(), e.dayFailures > 0 && (console.warn("[local-processing] Some days could not be precomputed; reimport the file to retry."), l());
					} catch {
						if (i.signal.aborted) return;
						console.warn("[local-processing] Background scored-variant warm failed."), l();
					} finally {
						i.signal.removeEventListener("abort", f), u(), J(c && !i.signal.aborted && I() === a ? {
							fileId: n,
							done: Z()?.done ?? 0,
							total: t.length,
							failed: !0
						} : null, a);
					}
					if (c) throw new Error("Background scored-variant warm failed.");
				}(n, i.availableDates, d, de.captureWorkspaceBinding(a, {
					username: l,
					studyId: u,
					signal: o.signal
				}), a, f, o);
			} catch {
				if (o.signal.aborted) return;
				console.warn("[local-processing] Scored-variant warm could not be scheduled."), Se("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" }), I() === a && J({
					fileId: n,
					done: 0,
					total: 0,
					failed: !0
				}, a);
			}
		}(n, {
			...t,
			db: r
		}, s)
	});
}
function Hn(n, { retryKnownFailures: t = !1, signal: r } = {}) {
	return O({
		kind: b.VARIANT_RECOVERY,
		key: b.VARIANT_RECOVERY,
		label: "Resume scoring variants",
		workspaceId: n.name,
		signal: r,
		run: async (r) => {
			await n.projectMeta.get(K);
			const s = (e) => null != e.id && "incomplete" !== e.ingestState && Boolean(e.sourceType && m(e.sourceType, "local")) && e.availableDates.length > 0 && !(e.epochLengthSeconds > 60), a = (await oe(n)).filter(s);
			for (const e of a) {
				if (I() !== n) return;
				await Bn(e.id, {
					db: n,
					resumeIncomplete: !0,
					retryKnownFailures: t,
					signal: r.signal
				}), await r.yieldNow();
			}
			if (I() !== n || !n.isOpen()) return;
			const o = vn(e().scoring());
			await h(n, [
				n.projectMeta,
				n.files,
				n.diaryEntries,
				...Ae(Ke, n)
			], async () => {
				const e = [], r = (await oe(n)).filter(s);
				for (const s of r) {
					const r = m(s.sourceType, "local"), i = await Ln(s.id, r, o(s), n), c = (await n.files.get(s.id))?.scoredVariantWarm;
					if (!c?.outcome || c.inputs !== i || I() !== n) return void await n.projectMeta.delete(K);
					e.push([s.id, i]), "known-failures" !== c.outcome || a.find((e) => e.id === s.id)?.scoredVariantWarm?.inputs === i && !t || J({
						fileId: s.id,
						done: s.availableDates.length,
						total: s.availableDates.length,
						failed: !0
					}, n);
				}
				await n.projectMeta.put({
					key: K,
					revision: Number.parseInt(Oe(e), 16)
				});
			}, r.signal);
		}
	}).catch((e) => {
		if (r?.aborted || e instanceof DOMException && "AbortError" === e.name) throw e;
		throw Se("warn", "Background scored-variant warm failed", { error_type: "Error" }), J({
			fileId: 0,
			done: 0,
			total: 0,
			failed: !0
		}, n), /* @__PURE__ */ new Error("Stored scoring variants could not be resumed.");
	});
}
async function Jn(e, n, t, r, s) {
	const o = r ?? a(), i = await Mn(o, e, `cube:${String(n)}:${JSON.stringify(s)}`, (e, t) => Jn(e, n, t, o, s));
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
	const c = Je(s), l = Ge(c.modelId), u = jn(n, !!t && t.length > 0 && "unconfigured" !== l.id, l, !!e.counts30s && e.counts30s.axisY.length > 0, c.threshold ?? void 0), d = await async function(e) {
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
		backend: r ?? a(),
		signals: Tn(e, n, l, t)
	}), f = {}, p = [], m = new Map(u.configs.map((e) => [e.id, e]));
	for (const [a, g] of Object.entries(d.outputs)) {
		const e = m.get(a);
		if (!e) throw new Error(`cube output ${a} has no planned config`);
		const n = xn(g);
		f[a] = n, p.push({
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
async function Gn(e, n, t) {
	if (!n) return {};
	const r = t ?? a(), s = await Mn(r, e, `hasib:${JSON.stringify(n)}`, (e) => Gn(e, n, r));
	if (s) {
		const n = {};
		for (const t of s) for (const [r, s] of Object.entries(t.value)) {
			if (!s) continue;
			const a = n[r] ?? new Uint8Array(e.timestamps.length);
			a.set(s.slice(t.start, t.end), t.offset), n[r] = a;
		}
		return n;
	}
	const o = (n.variants ?? xe).filter((e) => e !== Fe);
	if (0 === o.length) return {};
	const i = n.countSource ?? "neishabouri_vm_60s";
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
	}(e, i)) return {};
	const c = Float64Array.from(e.timestamps), l = (r.medianGapSeconds ? await r.medianGapSeconds(c) : await a().medianGapSeconds(c)) ?? n.countEpochSeconds ?? 60, u = await Re({
		backend: r,
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
async function Zn(e, n, t) {
	const r = t ?? a(), s = await Mn(r, e, `ggir:${String(n)}`, (e) => Zn(e, n, r));
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
	const o = await Re({
		backend: t ?? a(),
		variants: ["Sadeh1994", "ColeKripke1992"],
		anglez5s: /* @__PURE__ */ new Float64Array(),
		zeroCrossingY60s: new Float64Array(e.zeroCrossingY),
		countSource: "zero_crossing_y_60s",
		countEpochSeconds: n
	}), i = ze("sadeh_1994"), c = ze("cole_kripke_1992"), l = o.find((e) => e.variant === i)?.result.sib, u = o.find((e) => e.variant === c)?.result.sib;
	return l && u ? {
		sadeh: l,
		ck: u
	} : null;
}
async function Xn(e, n) {
	const t = [], r = e.sadeh_1994_actilife.length, s = (e) => {
		e && e.length === r && t.push(e);
	};
	s(e.sadeh_1994_actilife), s(e.sadeh_1994_original), s(e.cole_kripke_1992_actilife), s(e.cole_kripke_1992_original), s(e.sadeh_1994_ggir), s(e.cole_kripke_1992_ggir), s(e.lstm_sleep_wake);
	for (const [a, o] of Object.entries(e.hasibVariants ?? {})) a !== Y.TENSOR_MAJORITY_VOTE && a !== Y.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== l(a)?.grammarId && s(o);
	for (const [a, o] of Object.entries(e.cubeOutputs ?? {})) a !== Y.TENSOR_MAJORITY_VOTE && a !== Y.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== l(a)?.grammarId && s(o);
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
export { Dn as _resetCubePlanCacheForTest, Wn as awaitScheduledScoredVariantWarms, Hn as backfillInterruptedScoredVariantWarms, jn as buildOrReuseAlgorithmOutputCubePlan, xn as cloneOutputBuffer, Xn as computeTensorConsensusForDay, $n as cubeRunsOnGrid, Un as finalizeAndAuditScoredVariantWarm, Bn as rewarmFileScoredVariants, Jn as runAlgorithmCubeForDay, Zn as scoreBuiltinGgirSadehColeForDay, Gn as scoreCountBasedHasibVariantsForDay, Ln as scoredVariantFileInputs, Rn as sleepWakeToPersistedOutputs, zn as t, Yn as warmFileScoredVariants, Kn as withRecordingWakeThreshold };
