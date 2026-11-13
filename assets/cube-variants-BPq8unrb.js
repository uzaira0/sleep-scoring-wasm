import { At as e, On as n, Sn as r, Z as a, Zt as s, bn as o, cn as i, it as c, nt as l, ot as u, sn as d, st as m, tn as p, xn as f } from "./schema-Bbr1Zg5F.js";
import { i as g, r as h } from "./workers-BSP07cYu.js";
import { H as w, L as y, M as v, P as b, l as S } from "./local-data-source-DPqi7r7Q.js";
import { F as k, G as _, J as A, N as C, W as E, g as R, i as I, t as M } from "./workspace-db-BEYycimi.js";
import { l as O } from "./legacy-invalid-night-zjKZRSNb.js";
import { d as T, f as z, g as x, l as F, m as j, n as $, o as D, p as N, t as V } from "./background-jobs-DGv04HlX.js";
import { C as P, f as W, p as L, x as U } from "./nonwear-display-slots-BhrTaGYg.js";
import { a as Y } from "./project-revision-C5TJ0HPW.js";
import { At as B, Bt as G, Et as H, Ft as K, Gt as J, Lt as Z, N as X, Nt as q, Ot as Q, Tt as ee, U as te, Vt as ne, _ as re, en as ae, ht as se, j as oe, jt as ie, k as ce, lt as le, pt as ue, r as de, ut as me } from "./store-JiWMTGuM.js";
import { A as pe, E as fe, M as ge, U as he, j as we, k as ye, w as ve } from "./night-session-registry-hkFY8FDC.js";
import { B as be, C as Se, D as ke, O as _e, b as Ae, c as Ce, ct as Ee, ft as Re, ht as Ie, lt as Me, pt as Oe, ut as Te, vt as ze, w as xe, x as Fe, y as je, yt as $e } from "./per-source-defaults-DGxXQBbZ.js";
import { t as De } from "./audit-log-DX_8V0K_.js";
import { C as Ne, S as Ve, b as Pe, w as We, x as Le } from "./ggir-results-import-B_zAUkw4.js";
import { A as Ue, M as Ye, O as Be, P as Ge, j as He, x as Ke } from "./local-nonwear-unified-9vIGfRaW.js";
import { E as Je } from "./local-export-shard-worker-BTR6svpv.js";
import { i as Ze, n as Xe } from "./lstm-model-manager-DU8iC5fp.js";
var qe = class extends Error {};
async function Qe(e, t, r, a) {
	switch (e.family) {
		case "count_hasib": return async function(e, t, r) {
			const a = e.input.seriesKey, i = Ne(a), c = r.counts?.[a];
			if (!c || 0 === c.length) throw new qe(`Missing count input ${a}.`);
			if ("string" == typeof e.parameters.implementation) return et(e), async function(e, t, n) {
				const r = function(e) {
					const t = f(e.id);
					if (null === t || "count_cell" !== t.grammarId) return null;
					const n = t.values.method_family, r = t.values.implementation_variant;
					return void 0 === n || void 0 === r ? null : s.find((e) => e.methodFamilyId === n && e.implementationVariantId === r)?.primitiveId ?? null;
				}(e);
				if ("sadeh" === r) {
					if (!t.scoreSadeh) throw new Error("Registry Sadeh primitive (scoreSadeh) unavailable on this worker bundle.");
					const r = p.scoring_threshold, a = "number" == typeof r ? r : 0, s = "number" == typeof e.parameters.threshold ? e.parameters.threshold : a;
					return t.scoreSadeh(n, s);
				}
				if ("cole_kripke" === r) {
					if (!t.scoreColeKripke) throw new Error("Registry Cole-Kripke primitive (scoreColeKripke) unavailable on this worker bundle.");
					const r = !0 === e.parameters.useActilifeScaling;
					return t.scoreColeKripke(n, r);
				}
				throw new Error(`Unsupported provenance count scorer ${e.algorithm}.`);
			}(e, t, c);
			const l = function(e) {
				if (Le.includes(e.algorithm)) return null;
				const t = f(e.id)?.values.method_family, r = n.find((e) => "sleep_wake" === e.kind && e.family === t), a = r?.nativeEpochSeconds;
				return !r || 30 !== a && 60 !== a ? null : {
					methodId: r.id,
					nativeEpochSeconds: a
				};
			}(e);
			if (l) return async function(e, t, n, r) {
				const a = Ne(e.input.seriesKey), s = o(a.family, a.axis, t.nativeEpochSeconds), i = r.counts?.[s];
				if (!i || 0 === i.length) throw new qe(`Missing native count input ${s}.`);
				if (!n.scoreEpochs || !n.foldOntoGrid) throw new Error("The typed epoch scorer (scoreEpochs) is unavailable on this worker bundle.");
				const c = await n.scoreEpochs({
					algorithm: t.methodId,
					signals: {
						counts: i,
						epochSeconds: t.nativeEpochSeconds
					}
				}), l = y(c, i.length);
				if (!l) throw new Error(`${t.methodId}: ${c.reason ?? "the scorer returned no series"}`);
				if (e.epochSeconds === t.nativeEpochSeconds) return l;
				const u = r.timestamps?.[t.nativeEpochSeconds], d = r.timestamps?.[e.epochSeconds];
				if (!u || !d || u.length !== l.length) throw new qe(`Missing the timestamps that align ${s} with the ${String(e.epochSeconds)} s grid.`);
				const m = await n.foldOntoGrid(u, Float64Array.from(l), d, e.epochSeconds, "majority_ties_sleep");
				return Uint8Array.from(m);
			}(e, l, t, r);
			et(e);
			const u = (await We({
				backend: t,
				variants: [e.algorithm],
				anglez5s: /* @__PURE__ */ new Float64Array(),
				countSource: a,
				countEpochSeconds: i.epochSeconds,
				..."neishabouri" === i.family ? { neishabouriCounts: { [i.axis]: c } } : { zeroCrossingCountsByAxis: { [i.axis]: c } }
			}))[0];
			if (!u) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return u.result.sib;
		}(e, t, r);
		case "angle_hasib": return async function(e, t, n) {
			const r = d.angle_hasib;
			if (void 0 === r || e.algorithm !== r.algorithmValue) throw new Error(`Unsupported angle-HASIB algorithm ${e.algorithm}.`);
			if (!n.anglez5s || 0 === n.anglez5s.length) throw new qe(`Missing ${r.inputSeriesKey} input.`);
			const a = (await We({
				backend: t,
				variants: [e.algorithm],
				anglez5s: n.anglez5s,
				countSource: o(i, "y", 60)
			}))[0];
			if (!a) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return a.result.sib;
		}(e, t, r);
		case "lstm": return async function(e, t, n) {
			const r = "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm, a = n.lstmProbabilities?.[r];
			if (!a || 0 === a.length) throw new qe(`Missing LSTM probabilities for ${r}.`);
			const s = p.model_threshold, o = "number" == typeof e.parameters.threshold ? e.parameters.threshold : "number" == typeof s ? s : .5;
			if (!t.thresholdProbabilities) throw new Error("The probability threshold (thresholdProbabilities) is unavailable on this worker bundle.");
			return t.thresholdProbabilities(Float64Array.from(a), o);
		}(e, t, r);
		case "consensus": return async function(e, t, n) {
			const r = (Array.isArray(e.parameters.inputConfigIds) ? e.parameters.inputConfigIds.filter((e) => "string" == typeof e) : e.lineage).map((e) => {
				const n = t[e];
				if (!n) throw new qe(`Missing consensus input ${e}.`);
				return n;
			});
			if (0 === r.length) throw new Error("Consensus requires at least one input.");
			const a = r[0].length;
			for (const o of r) if (o.length !== a) throw new Error(`Consensus inputs are not aligned (${String(o.length)} vs ${String(a)} epochs).`);
			const s = "string" == typeof e.parameters.strategy ? e.parameters.strategy : p.consensus_strategy;
			return n.scoreConsensus(s, r);
		}(e, a, t);
	}
}
function et(e) {
	const t = f(e.id)?.values, n = t?.implementation_variant, r = Ie(String(t?.method_family), void 0 === n ? void 0 : String(n));
	if (!r.includes(e.epochSeconds)) throw new Error(`programming error: ${e.id} reached the runner, but ${e.algorithm} is valid only at ${r.join(", ")} s and the planner never plans it.`);
}
function tt(e) {
	return $e(e ?? null);
}
function nt(e) {
	return G(e).map((e) => [e.start, e.end]);
}
function rt(e) {
	return ne(e).map((e) => [e.start, e.end]);
}
function at(e) {
	let t = /* @__PURE__ */ new Float64Array(0);
	for (const n of e) t = P(t, new Float64Array(n));
	return t;
}
function st(e) {
	const t = new Uint8Array(e.reduce((e, t) => e + t.byteLength, 0));
	let n = 0;
	for (const r of e) t.set(new Uint8Array(r), n), n += r.byteLength;
	return t;
}
async function ot(e, t, n) {
	const r = await ge(e, t, he, a.VAN_HEES_2015, void 0, n), s = r?.sleepMarkers.find((e) => e.markerType === l.MAIN_SLEEP) ?? r?.sleepMarkers[0];
	return null != s?.onsetTimestamp && null != s.offsetTimestamp ? [s.onsetTimestamp, s.offsetTimestamp] : null;
}
async function it(e, t, n = M(), r = {}) {
	const a = n, s = r.readDay ?? ((t) => re(e, t, a)), o = await L(e, t, a, s, r.fileRecord?.navigationFacts, r.wasmApi);
	if (!o) return null;
	const i = await s(await W(t, r.fileRecord?.navigationFacts, r.wasmApi)), c = (i ? [o, i] : [o]).filter((e) => e.timestamps.byteLength > 0), l = at(c.map((e) => e.timestamps)), { startIndex: u, endIndex: d } = await Je(l, t, r.wasmApi);
	if (d <= u) return null;
	const m = l.subarray(u, d), p = Array.from(m), f = Array.from(at(c.map((e) => e.axisY)).subarray(u, d)), g = se(c[0], r.fileRecord) ?? await ue(m, 60, r.wasmApi), h = await oe(e, a, r.fileRecord ? { file: r.fileRecord } : void 0), w = {}, y = {}, v = {};
	for (const M of h.cellIds) {
		const e = h(M), t = J(c, e);
		if ("stale" === t.status) {
			y[M] = t.reason;
			continue;
		}
		const n = t.outputs.filter((e) => null != e);
		if (n.length !== c.length) continue;
		const a = await Promise.all(n.map(async (e, t) => (await U(c[t], new Uint8Array(e), r.wasmApi))?.buffer ?? e));
		w[M] = Array.from(st(a).subarray(u, d)), "ok" === e.status && null !== e.configHash && (v[M] = e.configHash);
	}
	const [b, S, k, _, A, C] = await Promise.all([
		ot(e, t, a),
		me(e, t, a),
		"activitySpan" in r ? r.activitySpan ?? null : q(e, a),
		a.scoredVariantMasks.get([e, t]),
		a.actiwareFileData.get(e),
		r.fileRecord ?? ce(e, a)
	]), E = _e(A?.actiwareIntervals, t), R = S ? await K(S, k, r.wasmApi) : null, I = p[0] ?? 0, O = (p[p.length - 1] ?? I) + g, T = c.flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter((e) => e >= I && e < O), z = R ? {
		diaryInBedTime: ee(x = R),
		onsetTime: H(x),
		diaryWakeTime: Q(x),
		naps: nt(x),
		nonwear: rt(x)
	} : void 0;
	var x;
	const F = "warm-v3:" + $e({
		diary: tt(z),
		actiwareRestWindow: E,
		eventMarkerTimestamps: T,
		hdczaWindow: b,
		seriesRevision: C?.seriesRevision ?? 0,
		classifierConfigHashes: Object.keys(v).length > 0 ? v : void 0
	}), j = _?.diaryFingerprint === F, $ = {};
	if (_?.masks && j) for (const [M, V] of Object.entries(_.masks)) V.byteLength === p.length && ($[M] = new Uint8Array(V));
	const D = c.flatMap((e) => e.temperature && e.temperature.byteLength > 0 ? [e.temperature] : []), N = D.length === c.length ? Array.from(at(D).subarray(u, d)) : void 0;
	return {
		fileId: e,
		analysisDate: t,
		timestamps: p,
		activityCounts: f,
		epochLengthSeconds: g,
		hdczaWindow: b,
		...T.length > 0 ? { eventMarkerTimestamps: T } : {},
		...E ? { actiwareRestWindow: E } : {},
		classifierOutputs: w,
		...Object.keys(y).length > 0 ? { staleClassifierCells: y } : {},
		precomputedVariantMasks: $,
		diaryFingerprint: F,
		...C?.sourceContentHash ? {
			sourceContentHash: C.sourceContentHash,
			seriesRevision: C.seriesRevision ?? 0
		} : {},
		...z ? { diary: z } : {},
		...N ? { temperature: N } : {}
	};
}
function ct() {
	const e = Date.UTC(2024, 0, 1, 12) / 1e3, t = Array.from({ length: 1440 }, (t, n) => e + 60 * n);
	return {
		timestamps: t,
		activityCounts: t.map(() => 0),
		sleepScores: t.map(() => 1),
		analysisDate: "2024-01-01",
		periodGuider: c.EVENT_MARKER,
		eventMarkerTimestamps: [e + 37800, e + 66600]
	};
}
A();
const lt = {
	[c.EVENT_MARKER]: {
		reason: "Needs an actours core with the event-marker guider (next pin).",
		note: "Event-marker source:",
		night: ct
	},
	[c.ACTIWARE_REST_INTERVAL]: {
		reason: "Needs an actours core with the Actiware rest-interval guider (next pin).",
		note: "Actiware rest-interval source:",
		night: () => {
			const e = Date.UTC(2024, 0, 1, 12) / 1e3;
			return {
				...ct(),
				periodGuider: c.ACTIWARE_REST_INTERVAL,
				actiwareRestWindow: {
					startTimestamp: e + 37800,
					endTimestamp: e + 66600
				}
			};
		}
	}
}, ut = /* @__PURE__ */ new WeakMap();
function dt(e, t = {}) {
	const n = t.wasmApi ?? h();
	let r = ut.get(n);
	r || (r = /* @__PURE__ */ new Map(), ut.set(n, r));
	const a = t.signal ? void 0 : r.get(e);
	if (a) return a;
	const s = lt[e], o = D(n, (e) => w({
		...s.night(),
		wasmApiOverride: e
	}), {
		ms: F,
		label: "scored-variant guider probe",
		signal: t.signal,
		cancel: t.cancelOperation ?? (() => {
			g(n);
		})
	}).then((e) => "placed" === e.kind && e.notes.some((e) => e.startsWith(s.note))).catch((n) => {
		if (r.delete(e), j(n, t.signal, "scored-variant guider probe"), N(n)) throw n;
		return !1;
	});
	return t.signal || r.set(e, o), o;
}
function mt(e = {}) {
	return dt(c.EVENT_MARKER, e);
}
function pt(e) {
	const t = (e ?? "").trim();
	return "" === t ? "none" : t;
}
function ft(e, t) {
	const n = {
		classifierConfigId: e.classifierConfigId.trim(),
		nonwear: pt(e.nonwear),
		periodSource: pt(e.periodSource),
		ruleset: pt(e.ruleset),
		rescoring: pt(e.rescoring)
	}, a = "study_selection" === n.nonwear && t?.length ? `${n.nonwear}_${[...new Set(t)].sort().join("_")}` : n.nonwear;
	return {
		id: r("scored_variant", {
			classifier_config_id: n.classifierConfigId,
			nonwear: a,
			period_source: n.periodSource,
			ruleset: n.ruleset,
			rescoring: n.rescoring
		}),
		configHash: $e({
			...n,
			nonwear: a
		}),
		config: n
	};
}
const gt = "cube_cell_absent", ht = new Map(n.map((e) => [e.id, e])), wt = new Set(Me.map((e) => e.slug)), yt = [30, 60];
function vt(e, t) {
	return {
		ok: !1,
		code: e,
		reason: t
	};
}
function bt(e, t) {
	return t().find((t) => t.id === e);
}
const St = d.angle_hasib?.configId ?? "";
function kt(e) {
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
function _t(e, t = {}) {
	const n = e.algorithm.trim(), a = ht.get(n);
	if (!a) return vt("unknown_algorithm", `algorithm "${e.algorithm}" is not a known AlgorithmType`);
	if (t.capabilities && !t.capabilities.sleepAlgorithms.includes(n)) return vt("capability_unavailable", `algorithm "${n}" is not available for this file's capabilities`);
	if ("van_hees_2015" === n) return function() {
		const e = bt(St, () => Te({
			includeFamilies: ["angle_hasib"],
			includeConsensus: !1
		}).configs);
		return e ? kt(e) : vt(gt, "the van_hees_2015 angle cell was not present in the cube plan");
	}();
	const s = a.family ?? "";
	return "sleep_wake" === a.kind && wt.has(s) ? function(e, t) {
		const n = e.countMetric.trim();
		if (a = n, !Object.prototype.hasOwnProperty.call(Ee, a)) return vt("unknown_count_metric", `count metric "${e.countMetric}" is not a cube count source (expected neishabouri or zero_crossing)`);
		var a;
		const s = e.axis.trim();
		if (!Ee[n].includes(s)) return vt("incompatible_axis", `axis "${e.axis}" is not available for count metric "${n}"`);
		const o = e.epochSeconds;
		if (!yt.includes(o)) return vt("unsupported_epoch", `epoch length ${String(o)}s is not a count-cube epoch (expected 30 or 60)`);
		const i = o, c = r("count_cell", {
			method_family: t,
			count_family: n,
			axis: s,
			epoch_seconds: i
		}), l = bt(c, () => Te({
			includeFamilies: ["count_hasib"],
			includeConsensus: !1,
			epochSeconds: [i]
		}).configs);
		return l ? kt(l) : vt(gt, `derived cube cell "${c}" was not present in the cube plan`);
	}(e, s) : vt("not_a_cube_scorer", `algorithm "${n}" has no directly scorer-addressable count/angle cube cell`);
}
function At(e) {
	return (t) => {
		const r = Ce(e, t);
		return function(e) {
			const t = Ue(e.currentAlgorithm), r = _t({
				...t,
				algorithm: Ge(t.family, t.implementation) ?? e.currentAlgorithm,
				sleepDetectionRule: e.sleepDetectionRule,
				placementRuleset: e.placementRuleset,
				scorerPostprocessingPreset: e.scorerPostprocessingPreset
			}), a = /* @__PURE__ */ new Set();
			if (!e.placementFromSource && r.ok && He(Ye(t.family)) === e.extractionPath && a.add(r.variant.cubeCellId), e.ggirHasibVariantsEnabled && !e.placementFromSource) {
				const t = Ne(e.ggirHasibCountSource);
				for (const r of e.ggirHasibVariants) {
					const s = Me.find((e) => e.algorithm === r), o = r === Pe ? "van_hees_2015" : n.find((e) => e.family === s?.slug)?.id;
					if (!o) continue;
					const i = _t({
						algorithm: o,
						countMetric: t.family,
						axis: t.axis,
						epochSeconds: e.ggirHasibCountEpochSeconds,
						sleepDetectionRule: e.sleepDetectionRule,
						placementRuleset: e.placementRuleset,
						scorerPostprocessingPreset: e.scorerPostprocessingPreset
					});
					i.ok && a.add(i.variant.cubeCellId);
				}
			}
			const s = "ggir" === Ke(e.currentAlgorithm) ? e.nonwearDetectorsGgir : e.nonwearDetectorsCounts;
			return {
				classifierConfigIds: [...a],
				nonwearDetectors: 1 === s.length ? [...s] : [ke],
				studyNonwearSelection: [...s],
				rulesets: [e.placementRuleset],
				rescorings: [e.scorerPostprocessingPreset],
				periodSources: "smart" === e.periodGuider ? [C.diary, C.hdcza] : [be(e.periodGuider, { hasDiary: !1 })?.source_a ?? C.diary]
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
function Ct(e, t, n, { day: r, eventMarkerGuider: a, actiwareRestGuider: s }) {
	if (Ae.includes(e) && !t) return {
		included: !1,
		reason: "no diary for this day"
	};
	if (e === C.hdcza && r && null == r.hdczaWindow) return {
		included: !1,
		reason: "no HDCZA window stored for this day"
	};
	if (e === C.event_marker) {
		if (!a) return {
			included: !1,
			reason: "placement core predates the event-marker guider"
		};
		if (r && !r.eventMarkerTimestamps?.length) return {
			included: !1,
			reason: "no event-marker presses for this day"
		};
	}
	if (e === C.actiware_rest_interval) {
		if (!s) return {
			included: !1,
			reason: "placement core predates the Actiware rest-interval guider"
		};
		if (r && !r.actiwareRestWindow) return {
			included: !1,
			reason: "no Actiware rest interval for this day"
		};
	}
	const o = Se(n, Fe[e]);
	return null === o ? { included: !0 } : {
		included: !1,
		reason: `unsatisfied source capability: ${o.map((e) => `${e}=false`).join(", ") || "no implemented input signal"}`
	};
}
function Et(e, t) {
	const n = je[e];
	for (const r of n ?? []) if (r.length > 0 && r.every((e) => t.has(e))) return {
		included: !1,
		reason: `day input unavailable: ${r.join(" or ")}`
	};
	return { included: !0 };
}
async function Rt(t, n, r) {
	const a = Oe(t);
	if (a && ze(a, n.epochLengthSeconds) !== n.epochLengthSeconds) return async function(t, n, r) {
		const a = Float64Array.from(n.timestamps), s = n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts), o = await v(r, {
			timestamps: a,
			axisY: s,
			vectorMagnitude: /* @__PURE__ */ new Float64Array()
		}, n.epochLengthSeconds), i = (await S(r, { day: o }, ["day"], e, void 0, [t])).day?.get(t);
		return i?.available && i.nonwear ? { mask: await b(r, o.timestamps, i.nonwear, a) } : {
			mask: null,
			reason: i?.reason ?? null
		};
	}(t, n, r ?? h());
	const s = {
		counts: n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts),
		epochSeconds: n.epochLengthSeconds
	};
	n.nonwearSignals?.temperature && (s.temperature = new Float64Array(n.nonwearSignals.temperature)), n.nonwearSignals?.raw && (s.raw = n.nonwearSignals.raw), null != n.nonwearSignals?.sampleRate && (s.sampleRate = n.nonwearSignals.sampleRate);
	const o = await (r ?? h()).detectNonwearUnified({
		algorithm: t,
		signals: s
	});
	if (!o.available || null == o.nonwear) return {
		mask: null,
		reason: o.reason ?? null
	};
	if (o.elementSeconds === n.epochLengthSeconds && n.epochLengthSeconds > 0 && o.nonwear.length === n.timestamps.length && n.timestamps.every((e, t) => e === n.timestamps[0] + t * n.epochLengthSeconds) && o.nonwear.every((e) => 0 === e || 1 === e)) return { mask: o.nonwear };
	const i = Be(o, n.timestamps[0] ?? 0);
	return { mask: (await (r ?? h()).rasterizePeriods(Float64Array.from(i, (e) => e.startTsSec), Float64Array.from(i, (e) => e.endTsSec), Float64Array.from(n.timestamps), n.epochLengthSeconds)).mask };
}
var It = class extends Error {
	workerLost;
	constructor(e = !1) {
		super("Precomputed variant masks could not be saved."), this.name = "ScoredVariantPersistenceError", this.workerLost = e;
	}
};
const Mt = /* @__PURE__ */ new WeakMap();
function Ot(e) {
	const t = JSON.stringify(e, (e, t) => t instanceof Uint8Array ? Array.from(t) : t);
	return `${String(t.length)}:${$e(t)}`;
}
function Tt(e, t) {
	for (const n of t) {
		if (e.notes.length >= 12) return;
		e.notes.includes(n) || e.notes.push(n);
	}
}
async function zt(e, t, { db: n = M(), signal: r, wasmApi: a, cancelOperation: s, narrowing: o } = {}) {
	const i = {
		computed: 0,
		skipped: 0,
		missingClassifier: 0,
		placementUnavailable: !1,
		notes: []
	}, l = a ?? h(), d = s ?? (() => {
		g(l);
	}), p = {
		wasmApi: l,
		signal: r,
		cancelOperation: d
	};
	T(r, "before scored-variant guider probes");
	const f = function(e) {
		const { classifierConfigIds: t, capabilities: n, hasDiary: r = !1, includeNonwearNone: a = !0, day: s } = e, o = [], i = s ? t.filter((e) => {
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
		for (const u of n.nonwearAlgorithms) {
			if (e.nonwearDetectors && !e.nonwearDetectors.includes(u)) continue;
			const t = s ? Et(u, c) : { included: !0 };
			t.included ? l.push(u) : o.push({
				axis: "nonwear",
				value: u,
				reason: t.reason
			});
		}
		const d = [...new Set(e.studyNonwearSelection ?? [])];
		let p;
		d.length > 1 && (!e.nonwearDetectors || e.nonwearDetectors.includes("study_selection")) && (d.filter((e) => n.nonwearAlgorithms.includes(e) && (!s || Et(e, c).included)).length > 0 ? (l.push(ke), p = d) : o.push({
			axis: "nonwear",
			value: ke,
			reason: "none of the study's nonwear detectors can run for this day"
		}));
		const f = a ? ["none", ...l] : l, g = [], h = 2 === e.periodSources?.length && e.periodSources[0] === C.diary && e.periodSources[1] === C.hdcza ? [r ? C.diary : C.hdcza] : e.periodSources;
		for (const u of Object.values(C)) {
			if (h && !h.includes(u)) continue;
			const t = Ct(u, r, n, {
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
		const w = e.rulesets ?? [u.LEGACY, u.REGULARITY_V2], y = e.rescorings ?? [m.NONE, m.WEBSTER], v = {
			classifierConfigIds: [...i],
			nonwear: f,
			periodSource: g,
			ruleset: w,
			rescoring: y
		}, b = [], S = /* @__PURE__ */ new Set();
		for (const u of i) for (const e of f) for (const t of g) for (const n of w) for (const r of y) {
			const a = ft({
				classifierConfigId: u,
				nonwear: e,
				periodSource: t,
				ruleset: n,
				rescoring: r
			}, p);
			S.has(a.id) || (S.add(a.id), b.push(a));
		}
		return {
			variants: b,
			axes: v,
			skipped: o,
			...p ? { studyNonwearSelection: p } : {}
		};
	}({
		classifierConfigIds: Object.keys(e.classifierOutputs),
		capabilities: t,
		hasDiary: null != e.diary,
		day: e,
		eventMarkerGuider: !!e.eventMarkerTimestamps?.length && await mt(p),
		actiwareRestGuider: !!e.actiwareRestWindow && await dt(c.ACTIWARE_REST_INTERVAL, p),
		...o
	});
	if (0 === f.variants.length) return i;
	const w = f.variants.filter((t) => !e.precomputedVariantMasks[t.id]);
	if (i.skipped = f.variants.length - w.length, 0 === w.length) return i;
	const y = {};
	T(r, "before scored-variant nonwear computation");
	const v = await D(l, (t) => async function(e, t, n) {
		const r = {};
		for (const a of new Set(t)) "none" !== a && "study_selection" !== a && (r[a] = await Rt(a, e, n));
		return r;
	}({
		timestamps: e.timestamps,
		activityCounts: e.activityCounts,
		epochLengthSeconds: e.epochLengthSeconds,
		...e.temperature ? { nonwearSignals: { temperature: e.temperature } } : {}
	}, function(e) {
		return [.../* @__PURE__ */ new Set([...e.axes.nonwear, ...e.studyNonwearSelection ?? []])];
	}(f), t), {
		ms: F,
		label: "scored-variant nonwear computation",
		signal: r,
		cancel: d
	});
	for (let c = 0; c < w.length; c += 2e3) {
		T(r, "before scored-variant warm computation");
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
			...f.studyNonwearSelection ? { studyNonwearDetectors: f.studyNonwearSelection } : {},
			variants: w.slice(c, c + 2e3).map((e) => ({
				id: e.id,
				...e.config
			}))
		}, a = e.sourceContentHash && void 0 !== e.seriesRevision ? JSON.stringify([
			n.name,
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
			f.studyNonwearSelection
		]) : Ot(t);
		let o = Mt.get(l);
		o || (o = /* @__PURE__ */ new Map(), Mt.set(l, o));
		const u = o.get(a) ?? await D(l, (e) => e.runScoredVariantBatch(t), {
			ms: 3e5,
			label: "scored-variant warm computation",
			signal: r,
			cancel: s ?? (() => {
				g(l);
			})
		});
		if (0 === Object.keys(u.masks).length && o.set(a, u), T(r, "after scored-variant warm computation"), Object.assign(y, u.masks), i.computed += Object.keys(u.masks).length, i.missingClassifier += u.missingClassifier, Tt(i, u.notes), u.placementUnavailable) {
			i.placementUnavailable = !0;
			break;
		}
	}
	if (Object.keys(y).length > 0) {
		let t;
		try {
			T(r, "before scored-variant warm persistence");
			const { controller: a, release: s } = z(r);
			t = s;
			const o = a.signal;
			if (!await D(l, (t) => te(e.fileId, e.analysisDate, y, e.diaryFingerprint, n, t, o), {
				ms: 3e5,
				label: "scored-variant warm persistence",
				signal: void 0,
				cancel: () => {
					a.abort(), d();
				}
			})) throw new It();
		} catch (b) {
			r?.aborted && d(), j(b, r, "scored-variant warm persistence");
			const e = b instanceof Error && "QuotaExceededError" === b.name ? "QuotaExceededError" : "Error";
			throw console.warn("[scored-variant-warm] Precomputed mask persistence failed.", e), ae("warn", "Precomputed variant mask persistence failed", { error_type: e }), new It(N(b));
		} finally {
			t?.();
		}
	}
	return i;
}
const xt = /* @__PURE__ */ new WeakMap();
async function Ft(e, t, n, r) {
	const a = xt.get(e)?.get(t);
	return a ? Promise.all(a.map(async (e) => {
		let t = e.run.answers.get(n);
		return t || (t = r(e.run.group, e.run.probabilities), e.run.answers.set(n, t)), {
			...e,
			value: await t
		};
	})) : null;
}
function jt(e, t) {
	xt.set(e, t);
}
function $t(e) {
	const t = new Uint8Array(e.length);
	return t.set(e), t.buffer;
}
function Dt(e) {
	const t = {}, n = [];
	for (const [r, a] of Object.entries(e ?? {})) {
		if (!a) continue;
		const e = k(r);
		if (!e) throw new Error(`sleep/wake output ${r} is not a declared AlgorithmRunKey (core.yaml)`);
		const s = $t(a);
		t[e] = s, n.push({
			algoKey: e,
			results: s
		});
	}
	return {
		algorithmResults: t,
		historyOutputs: n
	};
}
function Nt(e, t, n, r, a) {
	a && 0 !== a.length && (e[Re(t, n, r)] = new Float64Array(a));
}
function Vt(e, t, n, r) {
	const a = {};
	Nt(a, "neishabouri", "x", t, e.axisX), Nt(a, "neishabouri", "y", t, e.axisY), Nt(a, "neishabouri", "z", t, e.axisZ), Nt(a, "neishabouri", "vm", t, e.vectorMagnitude), Nt(a, "zero_crossing", "x", t, e.zeroCrossingX), Nt(a, "zero_crossing", "y", t, e.zeroCrossingY), Nt(a, "zero_crossing", "z", t, e.zeroCrossingZ);
	const s = e.counts30s;
	s && 30 !== t && (Nt(a, "neishabouri", "x", 30, s.axisX), Nt(a, "neishabouri", "y", 30, s.axisY), Nt(a, "neishabouri", "z", 30, s.axisZ), Nt(a, "neishabouri", "vm", 30, s.vectorMagnitude), Nt(a, "zero_crossing", "x", 30, s.zeroCrossingX), Nt(a, "zero_crossing", "y", 30, s.zeroCrossingY), Nt(a, "zero_crossing", "z", 30, s.zeroCrossingZ));
	const o = { [t]: Float64Array.from(e.timestamps) };
	return s && 30 !== t && s.timestamps.length > 0 && (o[30] = Float64Array.from(s.timestamps)), {
		counts: a,
		timestamps: o,
		...r && r.length > 0 && "unconfigured" !== n.id ? { lstmProbabilities: { [n.id]: r } } : {}
	};
}
function Pt(e) {
	return 120 !== e;
}
const Wt = /* @__PURE__ */ new Map();
function Lt(e, t, n, r = !1, a) {
	const s = r && 30 !== e ? [30, e] : [e], o = s.join(","), i = t ? `${o}|lstm|${n.id}|${n.label}|selected:${String(a ?? "none")}|${JSON.stringify(n.thresholdPresets ?? null)}` : `${o}|nolstm`, c = Wt.get(i);
	if (c) return c;
	const l = Te({
		includeFamilies: t ? [
			"count_hasib",
			"lstm",
			"consensus"
		] : ["count_hasib", "consensus"],
		epochSeconds: s,
		includeConsensus: !0,
		...t ? { lstmModels: [{
			id: n.id,
			label: n.label,
			epochSeconds: e,
			thresholdPresets: null == a ? n.thresholdPresets : [{
				id: "selected",
				label: "Saved study threshold",
				threshold: a
			}, ...n.thresholdPresets.filter((e) => "selected" !== e.id)]
		}] } : {}
	});
	return Wt.set(i, l), l;
}
const Ut = {
	dayCount: 0,
	variantsComputed: 0,
	variantsSkipped: 0,
	dayFailures: 0
};
function Yt(e, t) {
	return JSON.stringify({
		sourceCaps: e,
		narrowing: t ?? null
	}, (e, t) => t instanceof Set ? [...t].map(String).sort() : t);
}
async function Bt(e, t, n, r) {
	const [s, o, i, c] = await Promise.all([
		r.files.get(e),
		le(e, r),
		r.markers.where("fileId").equals(e).toArray(),
		r.actiwareFileData.get(e)
	]);
	return "warm-v3:" + $e({
		plan: Yt(t, n),
		series: [
			s?.sourceType,
			s?.sourceContentHash,
			s?.seriesRevision ?? 0,
			s?.epochLengthSeconds,
			s?.availableDates
		],
		geometry: o.some((e) => !e.importMappingProvenance?.diaryTemporalPolicy) ? Z() : null,
		diaries: o.map((e) => ({
			date: e.analysisDate,
			inBed: e.diaryInBedTime,
			onset: e.diaryOnsetTime,
			wake: e.diaryWakeTime,
			outOfBed: e.diaryOutOfBedTime,
			overlay: e.decisionOverlayJson,
			policy: e.importMappingProvenance?.diaryTemporalPolicy,
			naps: B(e),
			nonwear: ie(e)
		})),
		hdcza: i.filter((e) => "auto_score" === e.username && e.algorithm === a.VAN_HEES_2015).map((e) => ({
			date: e.date,
			windows: e.sleepMarkers.map((e) => [
				e.markerType,
				e.onsetTimestamp,
				e.offsetTimestamp
			])
		})),
		rest: c?.actiwareIntervals
	});
}
async function Gt(e, t, n, r, a = M(), s, o, i, c = At(de.getState()), l) {
	const u = a;
	if (!n) return Ut;
	const d = await ce(e, u);
	if (d?.sourceType && !xe(d.sourceType, "local")) return Ut;
	const m = { ...Ut }, p = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), g = await q(e, u).then((e) => ({
		fileRecord: d,
		activitySpan: e
	}), () => ({ fileRecord: d })), h = c?.(g.fileRecord), w = await Bt(e, n, h, u), y = /* @__PURE__ */ new Set();
	if ((g.fileRecord?.epochLengthSeconds ?? 60) > 60) return Ut;
	let v = /* @__PURE__ */ new Map();
	const b = (t) => {
		let n = v.get(t);
		return n || (n = re(e, t, u), v.set(t, n)), n;
	};
	let S = !1;
	const k = ye((t, n) => {
		t === e && n === u && (S = !0);
	}), _ = t.length;
	let A = 0;
	r?.({
		phase: "variants",
		percent: 98,
		message: `0/${String(_)} days`
	});
	const C = () => {
		A >= _ || (A += 1, r?.({
			phase: "variants",
			percent: 0 === _ ? 100 : 98 + 2 * A / _,
			message: `${String(A)}/${String(_)} days`
		}));
	};
	let E = !1;
	try {
		let r = t;
		for (let a = 0; a < 2; a++) {
			v = /* @__PURE__ */ new Map();
			for (const t of r) if (E) f.add(t), C();
			else {
				performance.now(), m.variantsComputed;
				for (const e of v.keys()) e < t && v.delete(e);
				try {
					T(s, "before scored-variant warm day load");
					const r = await x(() => it(e, t, u, {
						...g,
						readDay: b,
						wasmApi: o
					}), F, "scored-variant day load", s, i ?? (() => {}));
					if (T(s, "after scored-variant warm day load"), !r || 0 === Object.keys(r.classifierOutputs).length) {
						C();
						continue;
					}
					const a = await zt(r, n, {
						db: u,
						signal: s,
						wasmApi: o,
						cancelOperation: i,
						narrowing: h
					});
					y.delete(t), m.variantsComputed += a.computed, p.has(t) || (m.variantsSkipped += a.skipped), a.placementUnavailable || 0 !== a.missingClassifier ? f.add(t) : (p.add(t), f.delete(t)), C(), a.placementUnavailable && console.warn("[local-processing] Scored-variant warm placement was unavailable.");
				} catch (I) {
					j(I, s, "scored-variant warm"), console.warn("[local-processing] Scored-variant warm failed."), N(I) && (E = !0), I instanceof Error && "ScoredVariantPersistenceError" === I.name && y.add(t), f.add(t), C();
				}
			}
			if (E || a > 0 || !S && 0 === f.size) break;
			r = S ? t : [...f], S = !1;
		}
	} finally {
		k(), v = /* @__PURE__ */ new Map(), m.dayCount = p.size, s?.aborted && l && await Ht(() => Promise.resolve(), e, m, l);
	}
	let R = S || y.size > 0 || Boolean(s?.aborted);
	if (!R) try {
		const t = await u.scoredVariantMasks.where("fileId").equals(e).count();
		R = !await Y(u, [
			u.files,
			u.diaryEntries,
			u.markers,
			u.actiwareFileData
		], async () => !s?.aborted && await Bt(e, n, h, u) === w && await u.files.update(e, { scoredVariantWarm: {
			inputs: w,
			maskDays: t,
			outcome: f.size > 0 ? "known-failures" : "complete",
			failedDays: f.size
		} }) > 0, s);
	} catch {
		R = !0, console.warn("[local-processing] Scored-variant warm stamp could not be saved.");
	}
	return m.dayFailures = R ? Math.max(f.size, _) : f.size, m;
}
async function Ht(e, t, n, r, a) {
	await e(), 0 !== n.variantsComputed && await De.recordWorkspaceBoundDurably(r, O.SYSTEM_RECALCULATION, {
		subject: "scored_variant_precompute",
		fileId: t,
		dayCount: n.dayCount,
		variantsComputed: n.variantsComputed,
		variantsSkipped: n.variantsSkipped,
		trigger: "file_processing"
	});
}
function Kt(e, t = {}) {
	const n = t.db ?? M();
	return $({
		kind: _.SCORED_VARIANT_WARM,
		key: pe(e),
		label: "Scoring variants",
		workspaceId: n.name,
		signal: t.signal,
		rerun: !0,
		run: (r) => async function(e, { forget: t = !1, resumeIncomplete: n = !1, retryKnownFailures: r = !0, db: a = M() }, s) {
			try {
				if (M() !== a) return;
				const o = await a.files.get(e);
				if (M() !== a || !o || "incomplete" === o.ingestState || 0 === o.availableDates.length || !o.sourceType || o.epochLengthSeconds > 60) return;
				const i = de.getState(), { username: c, selectedStudyId: l } = i, u = xe(o.sourceType, "local");
				if (!u) return;
				const d = At(i);
				if (!t && !n) return;
				const m = await Bt(e, u, d(o), a);
				if (M() !== a) return;
				if (!t && o.scoredVariantWarm?.outcome && o.scoredVariantWarm.inputs === m && (!r || "known-failures" !== o.scoredVariantWarm.outcome)) return;
				const p = o.scoredVariantWarm;
				if (!await Y(a, [
					a.files,
					a.diaryEntries,
					a.markers,
					a.actiwareFileData,
					a.scoredVariantMasks
				], async () => {
					const n = await a.files.get(e);
					if (M() !== a || !n || JSON.stringify(n.scoredVariantWarm) !== JSON.stringify(p)) return !1;
					const r = await Bt(e, u, d(n), a);
					if (M() !== a || r !== m) return !1;
					if (n.scoredVariantWarm && (!n.scoredVariantWarm.outcome || n.scoredVariantWarm.inputs !== m) && (await a.scoredVariantMasks.where("fileId").equals(e).delete(), M() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					if ((t || n.scoredVariantWarm) && (await a.files.where(":id").equals(e).modify((e) => {
						delete e.scoredVariantWarm;
					}), M() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					return !0;
				}, s.signal) || M() !== a) return;
				await async function(e, t, n, r, a, s, o) {
					let i = !1;
					const c = () => {
						i = !0, ae("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" });
					};
					if (M() !== a) return;
					we({
						fileId: e,
						done: 0,
						total: t.length
					}, a);
					const l = I(() => {
						M() !== a && E.getState().cancel(`${a.name}:${pe(e)}`);
					}), u = new AbortController(), d = () => {
						u.abort();
					};
					o.signal.addEventListener("abort", d, { once: !0 });
					try {
						const i = await Gt(e, t, n, (e) => {
							o.progress(Number.parseInt(e.message, 10), t.length, e.message);
						}, a, o.signal, V(u.signal), d, s, r);
						await Ht(() => Promise.resolve(), e, i, r, o.signal), o.signal.throwIfAborted(), i.dayFailures > 0 && (console.warn("[local-processing] Some days could not be precomputed; reimport the file to retry."), c());
					} catch {
						if (o.signal.aborted) return;
						console.warn("[local-processing] Background scored-variant warm failed."), c();
					} finally {
						o.signal.removeEventListener("abort", d), l(), we(i && !o.signal.aborted && M() === a ? {
							fileId: e,
							done: fe()?.done ?? 0,
							total: t.length,
							failed: !0
						} : null, a);
					}
					if (i) throw new Error("Background scored-variant warm failed.");
				}(e, o.availableDates, u, De.captureWorkspaceBinding(a, {
					username: c,
					studyId: l,
					signal: s.signal
				}), a, d, s);
			} catch {
				if (s.signal.aborted) return;
				console.warn("[local-processing] Scored-variant warm could not be scheduled."), ae("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" }), M() === a && we({
					fileId: e,
					done: 0,
					total: 0,
					failed: !0
				}, a);
			}
		}(e, {
			...t,
			db: n
		}, r)
	});
}
function Jt(e, { retryKnownFailures: t = !1, signal: n } = {}) {
	return $({
		kind: _.VARIANT_RECOVERY,
		key: _.VARIANT_RECOVERY,
		label: "Resume scoring variants",
		workspaceId: e.name,
		signal: n,
		run: async (n) => {
			await e.projectMeta.get(ve);
			const r = (e) => null != e.id && "incomplete" !== e.ingestState && Boolean(e.sourceType && xe(e.sourceType, "local")) && e.availableDates.length > 0 && !(e.epochLengthSeconds > 60), a = (await X(e)).filter(r);
			for (const o of a) {
				if (M() !== e) return;
				await Kt(o.id, {
					db: e,
					resumeIncomplete: !0,
					retryKnownFailures: t,
					signal: n.signal
				}), await n.yieldNow();
			}
			if (M() !== e || !e.isOpen()) return;
			const s = At(de.getState());
			await Y(e, [
				e.projectMeta,
				e.files,
				e.diaryEntries,
				e.markers,
				e.actiwareFileData
			], async () => {
				const n = [], o = (await X(e)).filter(r);
				for (const r of o) {
					const o = xe(r.sourceType, "local"), i = await Bt(r.id, o, s(r), e), c = (await e.files.get(r.id))?.scoredVariantWarm;
					if (!c?.outcome || c.inputs !== i || M() !== e) return void await e.projectMeta.delete(ve);
					n.push([r.id, i]), "known-failures" !== c.outcome || a.find((e) => e.id === r.id)?.scoredVariantWarm?.inputs === i && !t || we({
						fileId: r.id,
						done: r.availableDates.length,
						total: r.availableDates.length,
						failed: !0
					}, e);
				}
				await e.projectMeta.put({
					key: ve,
					revision: Number.parseInt($e(n), 16)
				});
			}, n.signal);
		}
	}).catch((t) => {
		if (n?.aborted || t instanceof DOMException && "AbortError" === t.name) throw t;
		throw ae("warn", "Background scored-variant warm failed", { error_type: "Error" }), we({
			fileId: 0,
			done: 0,
			total: 0,
			failed: !0
		}, e), /* @__PURE__ */ new Error("Stored scoring variants could not be resumed.");
	});
}
async function Zt(e, t, n, r, a) {
	const s = r ?? h(), o = await Ft(s, e, `cube:${String(t)}:${JSON.stringify(a)}`, (e, n) => Zt(e, t, n, s, a));
	if (o) {
		const t = {}, n = [];
		for (const r of o) for (const a of r.value.historyOutputs) {
			const s = new Uint8Array(a.results), o = s.length !== r.run.group.timestamps.length, i = o ? e.counts30s?.timestamps.length ?? 0 : e.timestamps.length, c = t[a.cubeConfig.id] ?? new ArrayBuffer(i);
			new Uint8Array(c).set(s.slice(o ? r.nativeStart : r.start, o ? r.nativeEnd : r.end), o ? r.nativeOffset : r.offset), t[a.cubeConfig.id] || n.push({
				cubeConfig: a.cubeConfig,
				results: c
			}), t[a.cubeConfig.id] = c;
		}
		return {
			algorithmResults: t,
			historyOutputs: n,
			skipped: o.reduce((e, t) => e + t.value.skipped, 0)
		};
	}
	const i = Ze(a), c = Xe(i.modelId), l = Lt(t, !!n && n.length > 0 && "unconfigured" !== c.id, c, !!e.counts30s && e.counts30s.axisY.length > 0, i.threshold ?? void 0), u = await async function(e) {
		const t = e.configIds ? new Set(e.configIds) : null, n = {}, r = [];
		for (const s of e.plan.configs) if (!t || t.has(s.id)) try {
			const t = await Qe(s, e.backend, e.signals, n);
			t && (n[s.id] = t);
		} catch (a) {
			r.push({
				configId: s.id,
				reason: a instanceof Error ? a.message : String(a),
				...a instanceof qe ? { inputUnavailable: !0 } : {}
			});
		}
		return {
			outputs: n,
			skipped: r
		};
	}({
		plan: l,
		backend: r ?? h(),
		signals: Vt(e, t, c, n)
	}), d = {}, m = [], p = new Map(l.configs.map((e) => [e.id, e]));
	for (const [f, g] of Object.entries(u.outputs)) {
		const e = p.get(f);
		if (!e) throw new Error(`cube output ${f} has no planned config`);
		const t = $t(g);
		d[f] = t, m.push({
			cubeConfig: e,
			results: t
		});
	}
	return {
		algorithmResults: d,
		historyOutputs: m,
		skipped: u.skipped.filter((e) => !e.inputUnavailable).length
	};
}
function Xt(e, t) {
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
async function qt(e, t, n) {
	if (!t) return {};
	const r = n ?? h(), a = await Ft(r, e, `hasib:${JSON.stringify(t)}`, (e) => qt(e, t, r));
	if (a) {
		const t = {};
		for (const n of a) for (const [r, a] of Object.entries(n.value)) {
			if (!a) continue;
			const s = t[r] ?? new Uint8Array(e.timestamps.length);
			s.set(a.slice(n.start, n.end), n.offset), t[r] = s;
		}
		return t;
	}
	const s = (t.variants ?? Le).filter((e) => e !== Pe);
	if (0 === s.length) return {};
	const o = t.countSource ?? "neishabouri_vm_60s";
	if (!function(e, t) {
		const { family: n, axis: r } = Ne(t);
		return (("neishabouri" === n ? {
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
	}(e, o)) return {};
	const i = Float64Array.from(e.timestamps), c = (r.medianGapSeconds ? await r.medianGapSeconds(i) : await h().medianGapSeconds(i)) ?? t.countEpochSeconds ?? 60, l = await We({
		backend: r,
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
async function Qt(e, t, n) {
	const r = n ?? h(), a = await Ft(r, e, `ggir:${String(t)}`, (e) => Qt(e, t, r));
	if (a) {
		if (a.some((e) => !e.value)) return null;
		const t = new Uint8Array(e.timestamps.length), n = new Uint8Array(e.timestamps.length);
		for (const e of a) t.set(e.value.sadeh.slice(e.start, e.end), e.offset), n.set(e.value.ck.slice(e.start, e.end), e.offset);
		return {
			sadeh: t,
			ck: n
		};
	}
	if (!e.zeroCrossingY || 0 === e.zeroCrossingY.length) return null;
	const s = await We({
		backend: n ?? h(),
		variants: ["Sadeh1994", "ColeKripke1992"],
		anglez5s: /* @__PURE__ */ new Float64Array(),
		zeroCrossingY60s: new Float64Array(e.zeroCrossingY),
		countSource: "zero_crossing_y_60s",
		countEpochSeconds: t
	}), o = Ve("sadeh_1994"), i = Ve("cole_kripke_1992"), c = s.find((e) => e.variant === o)?.result.sib, l = s.find((e) => e.variant === i)?.result.sib;
	return c && l ? {
		sadeh: c,
		ck: l
	} : null;
}
async function en(e, t) {
	const n = [], r = e.sadeh_1994_actilife.length, a = (e) => {
		e && e.length === r && n.push(e);
	};
	a(e.sadeh_1994_actilife), a(e.sadeh_1994_original), a(e.cole_kripke_1992_actilife), a(e.cole_kripke_1992_original), a(e.sadeh_1994_ggir), a(e.cole_kripke_1992_ggir), a(e.lstm_sleep_wake);
	for (const [s, o] of Object.entries(e.hasibVariants ?? {})) s !== R.TENSOR_MAJORITY_VOTE && s !== R.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== f(s)?.grammarId && a(o);
	for (const [s, o] of Object.entries(e.cubeOutputs ?? {})) s !== R.TENSOR_MAJORITY_VOTE && s !== R.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== f(s)?.grammarId && a(o);
	return 0 === n.length ? new Uint8Array(r) : t.scoreConsensus("majority_tie_sleep", n);
}
ye((e, t, n) => {
	Kt(e, {
		resumeIncomplete: !0,
		retryKnownFailures: !1,
		db: t,
		signal: n
	}).catch(() => {});
});
export { Jt as backfillInterruptedScoredVariantWarms, Lt as buildOrReuseAlgorithmOutputCubePlan, en as computeTensorConsensusForDay, Pt as cubeRunsOnGrid, Ht as finalizeAndAuditScoredVariantWarm, Kt as rewarmFileScoredVariants, Zt as runAlgorithmCubeForDay, Qt as scoreBuiltinGgirSadehColeForDay, qt as scoreCountBasedHasibVariantsForDay, Dt as sleepWakeToPersistedOutputs, jt as t, Gt as warmFileScoredVariants, Xt as withRecordingWakeThreshold };
