import { C as e, D as n, Fn as t, Gt as r, Hn as s, In as a, J as o, Ln as i, Lr as c, Qt as l, Rn as u, S as d, Sn as f, T as p, Vn as m, Vt as g, Y as h, Yn as w, Zt as y, _r as v, b, dn as S, f as k, fn as _, g as C, l as A, n as E, o as O, p as I, r as z, t as M, un as R, vr as x, w as F, yt as T } from "./background-jobs-DUPAIf6B.js";
import { $, An as V, Br as D, Bt as j, Ct as P, Dn as N, Dt as L, E as Y, En as U, F as W, Hn as B, Hr as H, Jn as J, Jr as K, Kr as G, Kt as X, On as Z, Q as q, Rn as Q, Rr as ee, S as ne, Tt as te, Un as re, Vn as se, Vr as ae, Vt as oe, Wr as ie, X as ce, Xr as le, Y as ue, _n as de, bt as fe, d as pe, gt as me, hr as ge, ht as he, ii as we, in as ye, jn as ve, kn as be, ni as Se, qr as ke, rr as _e, vt as Ce, w as Ae, xt as Ee, zn as Oe, zr as Ie } from "./db-BYjE9wuK.js";
import { a as ze, i as Me, n as Re, o as xe, t as Fe } from "./local-ggir-hasib-variants-D3DaYJUe.js";
import { A as Te, E as $e, M as Ve, O as De, k as je, y as Pe } from "./local-nonwear-unified-BkYef4aY.js";
import { a as Ne, g as Le, m as Ye, o as Ue } from "./epoch-utils-BNU9Vmn8.js";
import { B as We } from "./local-export-worker-Bfbe3q0w.js";
import { T as Be } from "./ingest-YC6Wl-9X.js";
import { A as He, M as Je, N as Ke, rt as Ge, tt as Xe, w as Ze } from "./ggir-import-CLfM4H3g.js";
var qe = class extends Error {};
async function Qe(e, n, t, s) {
	switch (e.family) {
		case "count_hasib": return async function(e, n, t) {
			const s = e.input.seriesKey, a = ze(s), o = t.counts?.[s];
			if (!o || 0 === o.length) throw new qe(`Missing count input ${s}.`);
			if ("string" == typeof e.parameters.implementation) return en(e), async function(e, n, t) {
				const s = function(e) {
					const n = S(e.id);
					if (null === n || "count_cell" !== n.grammarId) return null;
					const t = n.values.method_family, r = n.values.implementation_variant;
					return void 0 === t || void 0 === r ? null : g.find((e) => e.methodFamilyId === t && e.implementationVariantId === r)?.primitiveId ?? null;
				}(e);
				if ("sadeh" === s) {
					if (!n.scoreSadeh) throw new Error("Registry Sadeh primitive (scoreSadeh) unavailable on this worker bundle.");
					const s = r.scoring_threshold, a = "number" == typeof s ? s : 0, o = "number" == typeof e.parameters.threshold ? e.parameters.threshold : a;
					return n.scoreSadeh(t, o);
				}
				if ("cole_kripke" === s) {
					if (!n.scoreColeKripke) throw new Error("Registry Cole-Kripke primitive (scoreColeKripke) unavailable on this worker bundle.");
					const r = !0 === e.parameters.useActilifeScaling;
					return n.scoreColeKripke(t, r);
				}
				throw new Error(`Unsupported provenance count scorer ${e.algorithm}.`);
			}(e, n, o);
			const i = function(e) {
				if (Re.includes(e.algorithm)) return null;
				const n = S(e.id)?.values.method_family, t = f.find((e) => "sleep_wake" === e.kind && e.family === n), r = t?.nativeEpochSeconds;
				return !t || 30 !== r && 60 !== r ? null : {
					methodId: t.id,
					nativeEpochSeconds: r
				};
			}(e);
			if (i) return async function(e, n, t, r) {
				const s = ze(e.input.seriesKey), a = R(s.family, s.axis, n.nativeEpochSeconds), o = r.counts?.[a];
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
			}(e, i, n, t);
			en(e);
			const c = (await xe({
				backend: n,
				variants: [e.algorithm],
				anglez5s: /* @__PURE__ */ new Float64Array(),
				countSource: s,
				countEpochSeconds: a.epochSeconds,
				..."neishabouri" === a.family ? { neishabouriCounts: { [a.axis]: o } } : { zeroCrossingCountsByAxis: { [a.axis]: o } }
			}))[0];
			if (!c) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return c.result.sib;
		}(e, n, t);
		case "angle_hasib": return async function(e, n, t) {
			const r = y.angle_hasib;
			if (void 0 === r || e.algorithm !== r.algorithmValue) throw new Error(`Unsupported angle-HASIB algorithm ${e.algorithm}.`);
			if (!t.anglez5s || 0 === t.anglez5s.length) throw new qe(`Missing ${r.inputSeriesKey} input.`);
			const s = (await xe({
				backend: n,
				variants: [e.algorithm],
				anglez5s: t.anglez5s,
				countSource: R(l, "y", 60)
			}))[0];
			if (!s) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return s.result.sib;
		}(e, n, t);
		case "lstm": return async function(e, n, t) {
			const s = "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm, a = t.lstmProbabilities?.[s];
			if (!a || 0 === a.length) throw new qe(`Missing LSTM probabilities for ${s}.`);
			const o = r.model_threshold, i = "number" == typeof e.parameters.threshold ? e.parameters.threshold : "number" == typeof o ? o : .5;
			if (!n.thresholdProbabilities) throw new Error("The probability threshold (thresholdProbabilities) is unavailable on this worker bundle.");
			return n.thresholdProbabilities(Float64Array.from(a), i);
		}(e, n, t);
		case "consensus": return async function(e, n, t) {
			const s = (Array.isArray(e.parameters.inputConfigIds) ? e.parameters.inputConfigIds.filter((e) => "string" == typeof e) : e.lineage).map((e) => {
				const t = n[e];
				if (!t) throw new qe(`Missing consensus input ${e}.`);
				return t;
			});
			if (0 === s.length) throw new Error("Consensus requires at least one input.");
			const a = s[0].length;
			for (const r of s) if (r.length !== a) throw new Error(`Consensus inputs are not aligned (${String(r.length)} vs ${String(a)} epochs).`);
			const o = "string" == typeof e.parameters.strategy ? e.parameters.strategy : r.consensus_strategy;
			return t.scoreConsensus(o, s);
		}(e, s, n);
	}
}
function en(e) {
	const n = S(e.id)?.values, t = n?.implementation_variant, r = ie(String(n?.method_family), void 0 === t ? void 0 : String(t));
	if (!r.includes(e.epochSeconds)) throw new Error(`programming error: ${e.id} reached the runner, but ${e.algorithm} is valid only at ${r.join(", ")} s and the planner never plans it.`);
}
function nn(e) {
	return ke(e ?? null);
}
function tn(e) {
	return j(e).map((e) => [e.start, e.end]);
}
function rn(e) {
	return oe(e).map((e) => [e.start, e.end]);
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
	const s = t, a = r.readDay ?? ((n) => pe(e, n, s)), o = await Ue(e, n, s, a, r.fileRecord?.navigationFacts, r.wasmApi);
	if (!o) return null;
	const i = await a(await Ne(n, r.fileRecord?.navigationFacts, r.wasmApi)), c = (i ? [o, i] : [o]).filter((e) => e.timestamps.byteLength > 0), l = sn(c.map((e) => e.timestamps)), { startIndex: u, endIndex: d } = await We(l, n, r.wasmApi);
	if (d <= u) return null;
	const f = l.subarray(u, d), p = Array.from(f), m = Array.from(sn(c.map((e) => e.axisY)).subarray(u, d)), g = await q(f, {
		day: c[0],
		file: r.fileRecord
	}, r.wasmApi), h = await Ae(e, s, r.fileRecord ? { file: r.fileRecord } : void 0), w = {}, y = {}, v = {};
	for (const I of h.cellIds) {
		const e = h(I), n = X(c, e);
		if ("stale" === n.status) {
			y[I] = n.reason;
			continue;
		}
		const t = n.outputs.filter((e) => null != e);
		if (t.length !== c.length) continue;
		const s = await Promise.all(t.map(async (e, n) => (await Ye(c[n], new Uint8Array(e), r.wasmApi))?.buffer ?? e));
		w[I] = Array.from(an(s).subarray(u, d)), "ok" === e.status && null !== e.configHash && (v[I] = e.configHash);
	}
	const b = r.fileRecord ? Promise.resolve(r.fileRecord) : ne(e, s), [S, k, _, C, A] = await Promise.all([
		ce(e, n, s),
		"activitySpan" in r ? r.activitySpan ?? null : P(e, s),
		s.scoredVariantMasks.get([e, n]),
		b.then((t) => be(Ke, {
			fileId: e,
			file: t,
			date: n,
			db: s,
			autoScoreMarker: (t) => J(e, n, K, t, void 0, s)
		})),
		b
	]), E = S ? await te(S, k, r.wasmApi) : null, O = p[0] ?? 0, z = (p[p.length - 1] ?? O) + g, M = c.flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter((e) => e >= O && e < z), R = E ? {
		diaryInBedTime: he(x = E),
		onsetTime: me(x),
		diaryWakeTime: Ce(x),
		naps: tn(x),
		nonwear: rn(x)
	} : void 0;
	var x;
	const F = "warm-v3:" + ke({
		diary: nn(R),
		...Z(Ke, C),
		eventMarkerTimestamps: M,
		seriesRevision: A?.seriesRevision ?? 0,
		classifierConfigHashes: Object.keys(v).length > 0 ? v : void 0
	}), T = _?.diaryFingerprint === F, $ = {};
	if (_?.masks && T) for (const [I, j] of Object.entries(_.masks)) j.byteLength === p.length && ($[I] = new Uint8Array(j));
	const V = c.flatMap((e) => e.temperature && e.temperature.byteLength > 0 ? [e.temperature] : []), D = V.length === c.length ? Array.from(sn(V).subarray(u, d)) : void 0;
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
		...D ? { temperature: D } : {}
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
		id: _("scored_variant", {
			classifier_config_id: t.classifierConfigId,
			nonwear: r,
			period_source: t.periodSource,
			ruleset: t.ruleset,
			rescoring: t.rescoring
		}),
		configHash: ke({
			...t,
			nonwear: r
		}),
		config: t
	};
}
const un = "cube_cell_absent", dn = new Map(f.map((e) => [e.id, e])), fn = new Set(Ie.map((e) => e.slug)), pn = [30, 60];
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
const hn = y.angle_hasib?.configId ?? "";
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
		const e = gn(hn, () => D({
			includeFamilies: ["angle_hasib"],
			includeConsensus: !1
		}).configs);
		return e ? wn(e) : mn(un, "the van_hees_2015 angle cell was not present in the cube plan");
	}();
	const s = r.family ?? "";
	return "sleep_wake" === r.kind && fn.has(s) ? function(e, n) {
		const t = e.countMetric.trim();
		if (r = t, !Object.prototype.hasOwnProperty.call(ee, r)) return mn("unknown_count_metric", `count metric "${e.countMetric}" is not a cube count source (expected neishabouri or zero_crossing)`);
		var r;
		const s = e.axis.trim();
		if (!ee[t].includes(s)) return mn("incompatible_axis", `axis "${e.axis}" is not available for count metric "${t}"`);
		const a = e.epochSeconds;
		if (!pn.includes(a)) return mn("unsupported_epoch", `epoch length ${String(a)}s is not a count-cube epoch (expected 30 or 60)`);
		const o = a, i = _("count_cell", {
			method_family: n,
			count_family: t,
			axis: s,
			epoch_seconds: o
		}), c = gn(i, () => D({
			includeFamilies: ["count_hasib"],
			includeConsensus: !1,
			epochSeconds: [o]
		}).configs);
		return c ? wn(c) : mn(un, `derived cube cell "${i}" was not present in the cube plan`);
	}(e, s) : mn("not_a_cube_scorer", `algorithm "${t}" has no directly scorer-addressable count/angle cube cell`);
}
function vn(e) {
	return (n) => {
		const t = ye(e, n);
		return function(e) {
			const n = De(e.currentAlgorithm), t = yn({
				...n,
				algorithm: Ve(n.family, n.implementation) ?? e.currentAlgorithm,
				sleepDetectionRule: e.sleepDetectionRule,
				placementRuleset: e.placementRuleset,
				scorerPostprocessingPreset: e.scorerPostprocessingPreset
			}), r = /* @__PURE__ */ new Set();
			if (!e.placementFromSource && t.ok && je(Te(n.family)) === e.extractionPath && r.add(t.variant.cubeCellId), e.ggirHasibVariantsEnabled && !e.placementFromSource) {
				const n = ze(e.ggirHasibCountSource);
				for (const t of e.ggirHasibVariants) {
					const s = Ie.find((e) => e.algorithm === t), a = t === Fe ? "van_hees_2015" : f.find((e) => e.family === s?.slug)?.id;
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
			const s = "ggir" === Pe(e.currentAlgorithm) ? e.nonwearDetectorsGgir : e.nonwearDetectorsCounts;
			return {
				classifierConfigIds: [...r],
				nonwearDetectors: 1 === s.length ? [...s] : [de],
				studyNonwearSelection: [...s],
				rulesets: [e.placementRuleset],
				rescorings: [e.scorerPostprocessingPreset],
				periodSources: "smart" === e.periodGuider ? [Se.diary, Se.hdcza] : [U(e.periodGuider, { hasDiary: !1 })?.source_a ?? Se.diary]
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
	if (a.includes(e) && !n) return {
		included: !1,
		reason: "no diary for this day"
	};
	const s = i[e];
	if (void 0 !== s && r && (!ve(e) || !r.guiderWindows[e])) return {
		included: !1,
		reason: s
	};
	if (e === Se.event_marker && r && !r.eventMarkerTimestamps?.length) return {
		included: !1,
		reason: "no event-marker presses for this day"
	};
	const o = m(t, u[e]);
	return null === o ? { included: !0 } : {
		included: !1,
		reason: `unsatisfied source capability: ${o.map((e) => `${e}=false`).join(", ") || "no implemented input signal"}`
	};
}
function Sn(e, n) {
	const r = t[e];
	for (const t of r ?? []) if (t.length > 0 && t.every((e) => n.has(e))) return {
		included: !1,
		reason: `day input unavailable: ${t.join(" or ")}`
	};
	return { included: !0 };
}
async function kn(e, n, t) {
	const r = H(e);
	if (r && G(r, n.epochLengthSeconds) !== n.epochLengthSeconds) return async function(e, n, t) {
		const r = Float64Array.from(n.timestamps), s = n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts), a = await Xe(t, {
			timestamps: r,
			axisY: s,
			vectorMagnitude: /* @__PURE__ */ new Float64Array()
		}, n.epochLengthSeconds), o = (await Ze(t, { day: a }, ["day"], T, void 0, [e])).day?.get(e);
		return o?.available && o.nonwear ? { mask: await Ge(t, a.timestamps, o.nonwear, r) } : {
			mask: null,
			reason: o?.reason ?? null
		};
	}(e, n, t ?? o());
	const s = {
		counts: n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts),
		epochSeconds: n.epochLengthSeconds
	};
	n.nonwearSignals?.temperature && (s.temperature = new Float64Array(n.nonwearSignals.temperature)), n.nonwearSignals?.raw && (s.raw = n.nonwearSignals.raw), null != n.nonwearSignals?.sampleRate && (s.sampleRate = n.nonwearSignals.sampleRate);
	const a = await (t ?? o()).detectNonwearUnified({
		algorithm: e,
		signals: s
	});
	if (!a.available || null == a.nonwear) return {
		mask: null,
		reason: a.reason ?? null
	};
	if (a.elementSeconds === n.epochLengthSeconds && n.epochLengthSeconds > 0 && a.nonwear.length === n.timestamps.length && n.timestamps.every((e, t) => e === n.timestamps[0] + t * n.epochLengthSeconds) && a.nonwear.every((e) => 0 === e || 1 === e)) return { mask: a.nonwear };
	const i = $e(a, n.timestamps[0] ?? 0);
	return { mask: (await (t ?? o()).rasterizePeriods(Float64Array.from(i, (e) => e.startTsSec), Float64Array.from(i, (e) => e.endTsSec), Float64Array.from(n.timestamps), n.epochLengthSeconds)).mask };
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
	return `${String(n.length)}:${ke(n)}`;
}
function En(e, n) {
	for (const t of n) {
		if (e.notes.length >= 12) return;
		e.notes.includes(t) || e.notes.push(t);
	}
}
async function On(n, t, { db: r = I(), signal: s, wasmApi: a, cancelOperation: i, narrowing: c } = {}) {
	const l = {
		computed: 0,
		skipped: 0,
		missingClassifier: 0,
		placementUnavailable: !1,
		notes: []
	}, u = a ?? o(), f = i ?? (() => {
		h(u);
	});
	d(s, "before the scored-variant plan");
	const m = function(e) {
		const { classifierConfigIds: n, capabilities: t, hasDiary: r = !1, includeNonwearNone: s = !0, day: a } = e, o = [], i = a ? n.filter((e) => {
			if (void 0 !== a.staleClassifierCells?.[e]) return !0;
			const n = a.classifierOutputs[e];
			return !(!n || n.length !== a.timestamps.length) || (o.push({
				axis: "classifier",
				value: e,
				reason: n ? `stored series of ${String(n.length)} epochs is not on the day's ${String(a.timestamps.length)}-epoch grid` : "no classifier output stored for this day"
			}), !1);
		}) : [...n], c = a ? function(e) {
			const n = /* @__PURE__ */ new Set(["device_wear_state_evidence_stream"]);
			return e.temperature && 0 !== e.temperature.length || n.add("temperature_epoch_stream"), n;
		}(a) : /* @__PURE__ */ new Set(), l = [];
		for (const v of t.nonwearAlgorithms) {
			if (e.nonwearDetectors && !e.nonwearDetectors.includes(v)) continue;
			const n = a ? Sn(v, c) : { included: !0 };
			n.included ? l.push(v) : o.push({
				axis: "nonwear",
				value: v,
				reason: n.reason
			});
		}
		const u = [...new Set(e.studyNonwearSelection ?? [])];
		let d;
		u.length > 1 && (!e.nonwearDetectors || e.nonwearDetectors.includes("study_selection")) && (u.filter((e) => t.nonwearAlgorithms.includes(e) && (!a || Sn(e, c).included)).length > 0 ? (l.push(de), d = u) : o.push({
			axis: "nonwear",
			value: de,
			reason: "none of the study's nonwear detectors can run for this day"
		}));
		const f = s ? ["none", ...l] : l, p = [], m = 2 === e.periodSources?.length && e.periodSources[0] === Se.diary && e.periodSources[1] === Se.hdcza ? [r ? Se.diary : Se.hdcza] : e.periodSources;
		for (const v of Object.values(Se)) {
			if (m && !m.includes(v)) continue;
			const e = bn(v, r, t, a);
			e.included ? p.push(v) : o.push({
				axis: "periodSource",
				value: v,
				reason: e.reason
			});
		}
		const g = e.rulesets ?? [v.LEGACY, v.REGULARITY_V2], h = e.rescorings ?? [x.NONE, x.WEBSTER], w = {
			classifierConfigIds: [...i],
			nonwear: f,
			periodSource: p,
			ruleset: g,
			rescoring: h
		}, y = [], b = /* @__PURE__ */ new Set();
		for (const v of i) for (const e of f) for (const n of p) for (const t of g) for (const r of h) {
			const s = ln({
				classifierConfigId: v,
				nonwear: e,
				periodSource: n,
				ruleset: t,
				rescoring: r
			}, d);
			b.has(s.id) || (b.add(s.id), y.push(s));
		}
		return {
			variants: y,
			axes: w,
			skipped: o,
			...d ? { studyNonwearSelection: d } : {}
		};
	}({
		classifierConfigIds: Object.keys(n.classifierOutputs),
		capabilities: t,
		hasDiary: null != n.diary,
		day: n,
		...c
	});
	if (0 === m.variants.length) return l;
	const g = m.variants.filter((e) => !n.precomputedVariantMasks[e.id]);
	if (l.skipped = m.variants.length - g.length, 0 === g.length) return l;
	const w = {};
	d(s, "before scored-variant nonwear computation");
	const y = await O(u, (e) => async function(e, n, t) {
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
	}(m), e), {
		ms: b,
		label: "scored-variant nonwear computation",
		signal: s,
		cancel: f
	});
	for (let e = 0; e < g.length; e += 2e3) {
		d(s, "before scored-variant warm computation");
		const t = {
			timestamps: n.timestamps,
			activityCounts: n.activityCounts,
			epochLengthSeconds: n.epochLengthSeconds,
			analysisDate: n.analysisDate,
			guiderWindows: n.guiderWindows,
			...n.eventMarkerTimestamps?.length ? { eventMarkerTimestamps: n.eventMarkerTimestamps } : {},
			...n.diary ? { diary: n.diary } : {},
			classifierOutputs: n.classifierOutputs,
			nonwearMasks: y,
			...m.studyNonwearSelection ? { studyNonwearDetectors: m.studyNonwearSelection } : {},
			variants: g.slice(e, e + 2e3).map((e) => ({
				id: e.id,
				...e.config
			}))
		}, a = n.sourceContentHash && void 0 !== n.seriesRevision ? JSON.stringify([
			r.name,
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
			m.studyNonwearSelection
		]) : An(t);
		let o = Cn.get(u);
		o || (o = /* @__PURE__ */ new Map(), Cn.set(u, o));
		const c = o.get(a) ?? await O(u, (e) => e.runScoredVariantBatch(t), {
			ms: 3e5,
			label: "scored-variant warm computation",
			signal: s,
			cancel: i ?? (() => {
				h(u);
			})
		});
		if (0 === Object.keys(c.masks).length && o.set(a, c), d(s, "after scored-variant warm computation"), Object.assign(w, c.masks), l.computed += Object.keys(c.masks).length, l.missingClassifier += c.missingClassifier, En(l, c.notes), c.placementUnavailable) {
			l.placementUnavailable = !0;
			break;
		}
	}
	if (Object.keys(w).length > 0) {
		let t;
		try {
			d(s, "before scored-variant warm persistence");
			const { controller: a, release: o } = e(s);
			t = o;
			const i = a.signal;
			if (!await O(u, (e) => W(n.fileId, n.analysisDate, w, n.diaryFingerprint, r, e, i), {
				ms: 3e5,
				label: "scored-variant warm persistence",
				signal: void 0,
				cancel: () => {
					a.abort(), f();
				}
			})) throw new _n();
		} catch (S) {
			s?.aborted && f(), p(S, s, "scored-variant warm persistence");
			const e = S instanceof Error && "QuotaExceededError" === S.name ? "QuotaExceededError" : "Error";
			throw console.warn("[scored-variant-warm] Precomputed mask persistence failed.", e), ge("warn", "Precomputed variant mask persistence failed", { error_type: e }), new _n(F(S));
		} finally {
			t?.();
		}
	}
	return l;
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
		const e = we(r);
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
	s && 0 !== s.length && (e[ae(n, t, r)] = new Float64Array(s));
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
const Vn = /* @__PURE__ */ new Map();
function Dn(e, n, t, r = !1, s) {
	const a = r && 30 !== e ? [30, e] : [e], o = a.join(","), i = n ? `${o}|lstm|${t.id}|${t.label}|selected:${String(s ?? "none")}|${JSON.stringify(t.thresholdPresets ?? null)}` : `${o}|nolstm`, c = Vn.get(i);
	if (c) return c;
	const l = D({
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
	return Vn.set(i, l), l;
}
function jn() {
	Vn.clear();
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
		ue(e, r),
		V(Ke, e, r)
	]);
	return "warm-v3:" + ke({
		plan: Nn(n, t),
		series: [
			s?.sourceType,
			s?.sourceContentHash,
			s?.seriesRevision ?? 0,
			s?.epochLengthSeconds,
			s?.availableDates
		],
		geometry: a.some((e) => !e.importMappingProvenance?.diaryTemporalPolicy) ? L() : null,
		diaries: a.map((e) => ({
			date: e.analysisDate,
			inBed: e.diaryInBedTime,
			onset: e.diaryOnsetTime,
			wake: e.diaryWakeTime,
			outOfBed: e.diaryOutOfBedTime,
			overlay: e.decisionOverlayJson,
			policy: e.importMappingProvenance?.diaryTemporalPolicy,
			naps: fe(e),
			nonwear: Ee(e)
		})),
		...o
	});
}
async function Yn(e, t, r, a, o = I(), i, l, u, f = vn(c().scoring()), m) {
	const g = o;
	if (!r) return Pn;
	const h = await ne(e, g);
	if (h?.sourceType && !s(h.sourceType, "local")) return Pn;
	const w = { ...Pn }, y = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), S = await P(e, g).then((e) => ({
		fileRecord: h,
		activitySpan: e
	}), () => ({ fileRecord: h })), _ = f?.(S.fileRecord), C = await Ln(e, r, _, g), A = /* @__PURE__ */ new Set();
	if ($(S.fileRecord) > 60) return Pn;
	let E = /* @__PURE__ */ new Map();
	const O = (n) => {
		let t = E.get(n);
		return t || (t = pe(e, n, g), E.set(n, t)), t;
	};
	let z = !1;
	const M = se((n, t) => {
		n === e && t === g && (z = !0);
	}), R = t.length;
	let x = 0;
	a?.({
		phase: "variants",
		percent: 98,
		message: `0/${String(R)} days`
	});
	const T = () => {
		x >= R || (x += 1, a?.({
			phase: "variants",
			percent: 0 === R ? 100 : 98 + 2 * x / R,
			message: `${String(x)}/${String(R)} days`
		}));
	};
	let V = !1;
	try {
		let s = t;
		for (let a = 0; a < 2; a++) {
			E = /* @__PURE__ */ new Map();
			for (const t of s) if (V) v.add(t), T();
			else {
				performance.now(), w.variantsComputed;
				for (const e of E.keys()) e < t && E.delete(e);
				try {
					d(i, "before scored-variant warm day load");
					const s = await n(() => on(e, t, g, {
						...S,
						readDay: O,
						wasmApi: l
					}), b, "scored-variant day load", i, u ?? (() => {}));
					if (d(i, "after scored-variant warm day load"), !s || 0 === Object.keys(s.classifierOutputs).length) {
						T();
						continue;
					}
					const a = await On(s, r, {
						db: g,
						signal: i,
						wasmApi: l,
						cancelOperation: u,
						narrowing: _
					});
					A.delete(t), w.variantsComputed += a.computed, y.has(t) || (w.variantsSkipped += a.skipped), a.placementUnavailable || 0 !== a.missingClassifier ? v.add(t) : (y.add(t), v.delete(t)), T(), a.placementUnavailable && console.warn("[local-processing] Scored-variant warm placement was unavailable.");
				} catch (j) {
					p(j, i, "scored-variant warm"), console.warn("[local-processing] Scored-variant warm failed."), F(j) && (V = !0), j instanceof Error && "ScoredVariantPersistenceError" === j.name && A.add(t), v.add(t), T();
				}
			}
			if (V || a > 0 || !z && 0 === v.size) break;
			s = z ? t : [...v], z = !1;
		}
	} finally {
		M(), E = /* @__PURE__ */ new Map(), w.dayCount = y.size, i?.aborted && m && await Un(() => Promise.resolve(), e, w, m);
	}
	let D = z || A.size > 0 || Boolean(i?.aborted);
	if (!D) try {
		const n = await g.scoredVariantMasks.where("fileId").equals(e).count();
		D = !await k(g, [
			g.files,
			g.diaryEntries,
			...N(Ke, g)
		], async () => !i?.aborted && await Ln(e, r, _, g) === C && await g.files.update(e, { scoredVariantWarm: {
			inputs: C,
			maskDays: n,
			outcome: v.size > 0 ? "known-failures" : "complete",
			failedDays: v.size
		} }) > 0, i);
	} catch {
		D = !0, console.warn("[local-processing] Scored-variant warm stamp could not be saved.");
	}
	return w.dayFailures = D ? Math.max(v.size, R) : v.size, w;
}
async function Un(e, n, t, r, s) {
	await e(), 0 !== t.variantsComputed && await _e.recordWorkspaceBoundDurably(r, w.SYSTEM_RECALCULATION, {
		subject: "scored_variant_precompute",
		fileId: n,
		dayCount: t.dayCount,
		variantsComputed: t.variantsComputed,
		variantsSkipped: t.variantsSkipped,
		trigger: "file_processing"
	});
}
function Wn() {
	return M(A.SCORED_VARIANT_WARM);
}
function Bn(e, n = {}) {
	const t = n.db ?? I();
	return z({
		kind: A.SCORED_VARIANT_WARM,
		key: B(e),
		label: "Scoring variants",
		workspaceId: t.name,
		signal: n.signal,
		rerun: !0,
		run: (r) => async function(e, { forget: n = !1, resumeIncomplete: t = !1, retryKnownFailures: r = !0, db: a = I() }, o) {
			try {
				if (I() !== a) return;
				const i = await a.files.get(e);
				if (I() !== a || !i || "incomplete" === i.ingestState || 0 === i.availableDates.length || !i.sourceType || i.epochLengthSeconds > 60) return;
				const l = c().scoring(), { username: u, selectedStudyId: d } = l, f = s(i.sourceType, "local");
				if (!f) return;
				const p = vn(l);
				if (!n && !t) return;
				const m = await Ln(e, f, p(i), a);
				if (I() !== a) return;
				if (!n && i.scoredVariantWarm?.outcome && i.scoredVariantWarm.inputs === m && (!r || "known-failures" !== i.scoredVariantWarm.outcome)) return;
				const g = i.scoredVariantWarm;
				if (!await k(a, [
					a.files,
					a.diaryEntries,
					...N(Ke, a),
					a.scoredVariantMasks
				], async () => {
					const t = await a.files.get(e);
					if (I() !== a || !t || JSON.stringify(t.scoredVariantWarm) !== JSON.stringify(g)) return !1;
					const r = await Ln(e, f, p(t), a);
					if (I() !== a || r !== m) return !1;
					if (t.scoredVariantWarm && (!t.scoredVariantWarm.outcome || t.scoredVariantWarm.inputs !== m) && (await a.scoredVariantMasks.where("fileId").equals(e).delete(), I() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					if ((n || t.scoredVariantWarm) && (await a.files.where(":id").equals(e).modify((e) => {
						delete e.scoredVariantWarm;
					}), I() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					return !0;
				}, o.signal) || I() !== a) return;
				await async function(e, n, t, r, s, a, o) {
					let i = !1;
					const l = () => {
						i = !0, ge("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" });
					};
					if (I() !== s) return;
					re({
						fileId: e,
						done: 0,
						total: n.length
					}, s);
					const u = C(() => {
						I() !== s && c().jobs().cancel(`${s.name}:${B(e)}`);
					}), d = new AbortController(), f = () => {
						d.abort();
					};
					o.signal.addEventListener("abort", f, { once: !0 });
					try {
						const i = await Yn(e, n, t, (e) => {
							o.progress(Number.parseInt(e.message, 10), n.length, e.message);
						}, s, o.signal, E(d.signal), f, a, r);
						await Un(() => Promise.resolve(), e, i, r, o.signal), o.signal.throwIfAborted(), i.dayFailures > 0 && (console.warn("[local-processing] Some days could not be precomputed; reimport the file to retry."), l());
					} catch {
						if (o.signal.aborted) return;
						console.warn("[local-processing] Background scored-variant warm failed."), l();
					} finally {
						o.signal.removeEventListener("abort", f), u(), re(i && !o.signal.aborted && I() === s ? {
							fileId: e,
							done: Oe()?.done ?? 0,
							total: n.length,
							failed: !0
						} : null, s);
					}
					if (i) throw new Error("Background scored-variant warm failed.");
				}(e, i.availableDates, f, _e.captureWorkspaceBinding(a, {
					username: u,
					studyId: d,
					signal: o.signal
				}), a, p, o);
			} catch {
				if (o.signal.aborted) return;
				console.warn("[local-processing] Scored-variant warm could not be scheduled."), ge("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" }), I() === a && re({
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
function Hn(e, { retryKnownFailures: n = !1, signal: t } = {}) {
	return z({
		kind: A.VARIANT_RECOVERY,
		key: A.VARIANT_RECOVERY,
		label: "Resume scoring variants",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			await e.projectMeta.get(Q);
			const r = (e) => null != e.id && "incomplete" !== e.ingestState && Boolean(e.sourceType && s(e.sourceType, "local")) && e.availableDates.length > 0 && !(e.epochLengthSeconds > 60), a = (await Y(e)).filter(r);
			for (const s of a) {
				if (I() !== e) return;
				await Bn(s.id, {
					db: e,
					resumeIncomplete: !0,
					retryKnownFailures: n,
					signal: t.signal
				}), await t.yieldNow();
			}
			if (I() !== e || !e.isOpen()) return;
			const o = vn(c().scoring());
			await k(e, [
				e.projectMeta,
				e.files,
				e.diaryEntries,
				...N(Ke, e)
			], async () => {
				const t = [], i = (await Y(e)).filter(r);
				for (const r of i) {
					const i = s(r.sourceType, "local"), c = await Ln(r.id, i, o(r), e), l = (await e.files.get(r.id))?.scoredVariantWarm;
					if (!l?.outcome || l.inputs !== c || I() !== e) return void await e.projectMeta.delete(Q);
					t.push([r.id, c]), "known-failures" !== l.outcome || a.find((e) => e.id === r.id)?.scoredVariantWarm?.inputs === c && !n || re({
						fileId: r.id,
						done: r.availableDates.length,
						total: r.availableDates.length,
						failed: !0
					}, e);
				}
				await e.projectMeta.put({
					key: Q,
					revision: Number.parseInt(ke(t), 16)
				});
			}, t.signal);
		}
	}).catch((n) => {
		if (t?.aborted || n instanceof DOMException && "AbortError" === n.name) throw n;
		throw ge("warn", "Background scored-variant warm failed", { error_type: "Error" }), re({
			fileId: 0,
			done: 0,
			total: 0,
			failed: !0
		}, e), /* @__PURE__ */ new Error("Stored scoring variants could not be resumed.");
	});
}
async function Jn(e, n, t, r, s) {
	const a = r ?? o(), i = await zn(a, e, `cube:${String(n)}:${JSON.stringify(s)}`, (e, t) => Jn(e, n, t, a, s));
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
	const c = Je(s), l = He(c.modelId), u = Dn(n, !!t && t.length > 0 && "unconfigured" !== l.id, l, !!e.counts30s && e.counts30s.axisY.length > 0, c.threshold ?? void 0), d = await async function(e) {
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
		backend: r ?? o(),
		signals: Tn(e, n, l, t)
	}), f = {}, p = [], m = new Map(u.configs.map((e) => [e.id, e]));
	for (const [o, g] of Object.entries(d.outputs)) {
		const e = m.get(o);
		if (!e) throw new Error(`cube output ${o} has no planned config`);
		const n = Rn(g);
		f[o] = n, p.push({
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
	const r = t ?? o(), s = await zn(r, e, `hasib:${JSON.stringify(n)}`, (e) => Gn(e, n, r));
	if (s) {
		const n = {};
		for (const t of s) for (const [r, s] of Object.entries(t.value)) {
			if (!s) continue;
			const a = n[r] ?? new Uint8Array(e.timestamps.length);
			a.set(s.slice(t.start, t.end), t.offset), n[r] = a;
		}
		return n;
	}
	const a = (n.variants ?? Re).filter((e) => e !== Fe);
	if (0 === a.length) return {};
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
	const c = Float64Array.from(e.timestamps), l = (r.medianGapSeconds ? await r.medianGapSeconds(c) : await o().medianGapSeconds(c)) ?? n.countEpochSeconds ?? 60, u = await xe({
		backend: r,
		variants: a,
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
async function Xn(e, n, t) {
	const r = t ?? o(), s = await zn(r, e, `ggir:${String(n)}`, (e) => Xn(e, n, r));
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
	const a = await xe({
		backend: t ?? o(),
		variants: ["Sadeh1994", "ColeKripke1992"],
		anglez5s: /* @__PURE__ */ new Float64Array(),
		zeroCrossingY60s: new Float64Array(e.zeroCrossingY),
		countSource: "zero_crossing_y_60s",
		countEpochSeconds: n
	}), i = Me("sadeh_1994"), c = Me("cole_kripke_1992"), l = a.find((e) => e.variant === i)?.result.sib, u = a.find((e) => e.variant === c)?.result.sib;
	return l && u ? {
		sadeh: l,
		ck: u
	} : null;
}
async function Zn(e, n) {
	const t = [], r = e.sadeh_1994_actilife.length, s = (e) => {
		e && e.length === r && t.push(e);
	};
	s(e.sadeh_1994_actilife), s(e.sadeh_1994_original), s(e.cole_kripke_1992_actilife), s(e.cole_kripke_1992_original), s(e.sadeh_1994_ggir), s(e.cole_kripke_1992_ggir), s(e.lstm_sleep_wake);
	for (const [a, o] of Object.entries(e.hasibVariants ?? {})) a !== le.TENSOR_MAJORITY_VOTE && a !== le.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== S(a)?.grammarId && s(o);
	for (const [a, o] of Object.entries(e.cubeOutputs ?? {})) a !== le.TENSOR_MAJORITY_VOTE && a !== le.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== S(a)?.grammarId && s(o);
	return 0 === t.length ? new Uint8Array(r) : n.scoreConsensus("majority_tie_sleep", t);
}
se((e, n, t) => {
	Bn(e, {
		resumeIncomplete: !0,
		retryKnownFailures: !1,
		db: n,
		signal: t
	}).catch(() => {});
});
export { jn as _resetCubePlanCacheForTest, Wn as awaitScheduledScoredVariantWarms, Hn as backfillInterruptedScoredVariantWarms, Dn as buildOrReuseAlgorithmOutputCubePlan, Rn as cloneOutputBuffer, Zn as computeTensorConsensusForDay, $n as cubeRunsOnGrid, Un as finalizeAndAuditScoredVariantWarm, Bn as rewarmFileScoredVariants, Jn as runAlgorithmCubeForDay, Xn as scoreBuiltinGgirSadehColeForDay, Gn as scoreCountBasedHasibVariantsForDay, Ln as scoredVariantFileInputs, xn as sleepWakeToPersistedOutputs, Mn as t, Yn as warmFileScoredVariants, Kn as withRecordingWakeThreshold };
