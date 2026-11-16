import { E as e, Z as n, _t as r, an as a, en as s, gt as i, it as o, ln as c, q as l, rt as u, sn as d, un as m, vt as p, wt as f } from "./schema-MMK46mR-.js";
import { i as g, r as h } from "./workers-B1E_CQH7.js";
import { l as w } from "./legacy-invalid-night-zjKZRSNb.js";
import { I as y, P as v, at as b, ct as S, g as k, i as _, it as A, t as C } from "./workspace-db-YhWSrcvp.js";
import { _ as E, f as R, h as I, m as M, n as O, p as T, r as z, s as x, t as F, u as j } from "./background-jobs-Dz-LteaG.js";
import { B as $, F as N, M as V, P as D, l as W } from "./local-data-source-63fZkIbT.js";
import { a as P } from "./project-revision-CUz5eq5n.js";
import { At as L, Bt as Y, Et as U, Ft as B, Gt as G, Lt as H, Nt as K, Ot as Z, P as J, Tt as X, Vt as q, W as Q, _ as ee, dt as te, ft as ne, ht as re, j as ae, jt as se, k as ie, pt as oe, r as ce } from "./store-CGm5oa9P.js";
import { A as le, F as ue, I as de, N as me, O as pe, P as fe, Y as ge } from "./night-session-registry-Ds5SlWLP.js";
import { Ct as he, E as we, M as ye, O as ve, St as be, T as Se, W as ke, _t as _e, ft as Ae, gt as Ce, k as Ee, mt as Re, pt as Ie, u as Me, w as Oe, yt as Te } from "./per-source-defaults-CxbMEjO8.js";
import { t as ze } from "./audit-log-BT8eFzV0.js";
import { a as xe, i as Fe, n as je, o as $e, t as Ne } from "./local-ggir-hasib-variants-FTtpy3iZ.js";
import { A as Ve, M as De, O as We, P as Pe, j as Le, x as Ye } from "./local-nonwear-unified-BZU1ydsO.js";
import { r as Ue } from "./diagnostic-log-DgP2mz8K.js";
import { a as Be, g as Ge, m as He, o as Ke } from "./epoch-utils-DekHoAIG.js";
import { C as Ze } from "./local-export-worker-_QiDE5PV.js";
import { v as Je } from "./epoch-series-import-LTGNeyW2.js";
import { i as Xe, n as qe } from "./lstm-model-manager-Dy2CTQ-d.js";
var Qe = class extends Error {};
async function et(e, t, a, s) {
	switch (e.family) {
		case "count_hasib": return async function(e, t, a) {
			const s = e.input.seriesKey, o = xe(s), c = a.counts?.[s];
			if (!c || 0 === c.length) throw new Qe(`Missing count input ${s}.`);
			if ("string" == typeof e.parameters.implementation) return tt(e), async function(e, t, a) {
				const s = function(e) {
					const t = r(e.id);
					if (null === t || "count_cell" !== t.grammarId) return null;
					const n = t.values.method_family, a = t.values.implementation_variant;
					return void 0 === n || void 0 === a ? null : l.find((e) => e.methodFamilyId === n && e.implementationVariantId === a)?.primitiveId ?? null;
				}(e);
				if ("sadeh" === s) {
					if (!t.scoreSadeh) throw new Error("Registry Sadeh primitive (scoreSadeh) unavailable on this worker bundle.");
					const r = n.scoring_threshold, s = "number" == typeof r ? r : 0, i = "number" == typeof e.parameters.threshold ? e.parameters.threshold : s;
					return t.scoreSadeh(a, i);
				}
				if ("cole_kripke" === s) {
					if (!t.scoreColeKripke) throw new Error("Registry Cole-Kripke primitive (scoreColeKripke) unavailable on this worker bundle.");
					const n = !0 === e.parameters.useActilifeScaling;
					return t.scoreColeKripke(a, n);
				}
				throw new Error(`Unsupported provenance count scorer ${e.algorithm}.`);
			}(e, t, c);
			const u = function(e) {
				if (je.includes(e.algorithm)) return null;
				const t = r(e.id)?.values.method_family, n = f.find((e) => "sleep_wake" === e.kind && e.family === t), a = n?.nativeEpochSeconds;
				return !n || 30 !== a && 60 !== a ? null : {
					methodId: n.id,
					nativeEpochSeconds: a
				};
			}(e);
			if (u) return async function(e, t, n, r) {
				const a = xe(e.input.seriesKey), s = i(a.family, a.axis, t.nativeEpochSeconds), o = r.counts?.[s];
				if (!o || 0 === o.length) throw new Qe(`Missing native count input ${s}.`);
				if (!n.scoreEpochs || !n.foldOntoGrid) throw new Error("The typed epoch scorer (scoreEpochs) is unavailable on this worker bundle.");
				const c = await n.scoreEpochs({
					algorithm: t.methodId,
					signals: {
						counts: o,
						epochSeconds: t.nativeEpochSeconds
					}
				}), l = Je(c, o.length);
				if (!l) throw new Error(`${t.methodId}: ${c.reason ?? "the scorer returned no series"}`);
				if (e.epochSeconds === t.nativeEpochSeconds) return l;
				const u = r.timestamps?.[t.nativeEpochSeconds], d = r.timestamps?.[e.epochSeconds];
				if (!u || !d || u.length !== l.length) throw new Qe(`Missing the timestamps that align ${s} with the ${String(e.epochSeconds)} s grid.`);
				const m = await n.foldOntoGrid(u, Float64Array.from(l), d, e.epochSeconds, "majority_ties_sleep");
				return Uint8Array.from(m);
			}(e, u, t, a);
			tt(e);
			const d = (await $e({
				backend: t,
				variants: [e.algorithm],
				anglez5s: /* @__PURE__ */ new Float64Array(),
				countSource: s,
				countEpochSeconds: o.epochSeconds,
				..."neishabouri" === o.family ? { neishabouriCounts: { [o.axis]: c } } : { zeroCrossingCountsByAxis: { [o.axis]: c } }
			}))[0];
			if (!d) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return d.result.sib;
		}(e, t, a);
		case "angle_hasib": return async function(e, t, n) {
			const r = u.angle_hasib;
			if (void 0 === r || e.algorithm !== r.algorithmValue) throw new Error(`Unsupported angle-HASIB algorithm ${e.algorithm}.`);
			if (!n.anglez5s || 0 === n.anglez5s.length) throw new Qe(`Missing ${r.inputSeriesKey} input.`);
			const a = (await $e({
				backend: t,
				variants: [e.algorithm],
				anglez5s: n.anglez5s,
				countSource: i(o, "y", 60)
			}))[0];
			if (!a) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return a.result.sib;
		}(e, t, a);
		case "lstm": return async function(e, t, r) {
			const a = "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm, s = r.lstmProbabilities?.[a];
			if (!s || 0 === s.length) throw new Qe(`Missing LSTM probabilities for ${a}.`);
			const i = n.model_threshold, o = "number" == typeof e.parameters.threshold ? e.parameters.threshold : "number" == typeof i ? i : .5;
			if (!t.thresholdProbabilities) throw new Error("The probability threshold (thresholdProbabilities) is unavailable on this worker bundle.");
			return t.thresholdProbabilities(Float64Array.from(s), o);
		}(e, t, a);
		case "consensus": return async function(e, t, r) {
			const a = (Array.isArray(e.parameters.inputConfigIds) ? e.parameters.inputConfigIds.filter((e) => "string" == typeof e) : e.lineage).map((e) => {
				const n = t[e];
				if (!n) throw new Qe(`Missing consensus input ${e}.`);
				return n;
			});
			if (0 === a.length) throw new Error("Consensus requires at least one input.");
			const s = a[0].length;
			for (const n of a) if (n.length !== s) throw new Error(`Consensus inputs are not aligned (${String(n.length)} vs ${String(s)} epochs).`);
			const i = "string" == typeof e.parameters.strategy ? e.parameters.strategy : n.consensus_strategy;
			return r.scoreConsensus(i, a);
		}(e, s, t);
	}
}
function tt(e) {
	const t = r(e.id)?.values, n = t?.implementation_variant, a = Te(String(t?.method_family), void 0 === n ? void 0 : String(n));
	if (!a.includes(e.epochSeconds)) throw new Error(`programming error: ${e.id} reached the runner, but ${e.algorithm} is valid only at ${a.join(", ")} s and the planner never plans it.`);
}
function nt(e) {
	return he(e ?? null);
}
function rt(e) {
	return Y(e).map((e) => [e.start, e.end]);
}
function at(e) {
	return q(e).map((e) => [e.start, e.end]);
}
function st(e) {
	let t = /* @__PURE__ */ new Float64Array(0);
	for (const n of e) t = Ge(t, new Float64Array(n));
	return t;
}
function it(e) {
	const t = new Uint8Array(e.reduce((e, t) => e + t.byteLength, 0));
	let n = 0;
	for (const r of e) t.set(new Uint8Array(r), n), n += r.byteLength;
	return t;
}
async function ot(e, t, n) {
	const r = await de(e, t, ge, s.VAN_HEES_2015, void 0, n), i = r?.sleepMarkers.find((e) => e.markerType === a.MAIN_SLEEP) ?? r?.sleepMarkers[0];
	return null != i?.onsetTimestamp && null != i.offsetTimestamp ? [i.onsetTimestamp, i.offsetTimestamp] : null;
}
async function ct(e, t, n = C(), r = {}) {
	const a = n, s = r.readDay ?? ((t) => ee(e, t, a)), i = await Ke(e, t, a, s, r.fileRecord?.navigationFacts, r.wasmApi);
	if (!i) return null;
	const o = await s(await Be(t, r.fileRecord?.navigationFacts, r.wasmApi)), c = (o ? [i, o] : [i]).filter((e) => e.timestamps.byteLength > 0), l = st(c.map((e) => e.timestamps)), { startIndex: u, endIndex: d } = await Ze(l, t, r.wasmApi);
	if (d <= u) return null;
	const m = l.subarray(u, d), p = Array.from(m), f = Array.from(st(c.map((e) => e.axisY)).subarray(u, d)), g = re(c[0], r.fileRecord) ?? await oe(m, 60, r.wasmApi), h = await ae(e, a, r.fileRecord ? { file: r.fileRecord } : void 0), w = {}, y = {}, v = {};
	for (const C of h.cellIds) {
		const e = h(C), t = G(c, e);
		if ("stale" === t.status) {
			y[C] = t.reason;
			continue;
		}
		const n = t.outputs.filter((e) => null != e);
		if (n.length !== c.length) continue;
		const a = await Promise.all(n.map(async (e, t) => (await He(c[t], new Uint8Array(e), r.wasmApi))?.buffer ?? e));
		w[C] = Array.from(it(a).subarray(u, d)), "ok" === e.status && null !== e.configHash && (v[C] = e.configHash);
	}
	const [b, S, k, _, A, E] = await Promise.all([
		ot(e, t, a),
		ne(e, t, a),
		"activitySpan" in r ? r.activitySpan ?? null : K(e, a),
		a.scoredVariantMasks.get([e, t]),
		N.find((e) => e.guiderWindow)?.guiderWindow?.({
			fileId: e,
			date: t,
			db: a
		}) ?? null,
		r.fileRecord ?? ie(e, a)
	]), R = S ? await B(S, k, r.wasmApi) : null, I = p[0] ?? 0, M = (p[p.length - 1] ?? I) + g, O = c.flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter((e) => e >= I && e < M), T = R ? {
		diaryInBedTime: X(z = R),
		onsetTime: U(z),
		diaryWakeTime: Z(z),
		naps: rt(z),
		nonwear: at(z)
	} : void 0;
	var z;
	const x = "warm-v3:" + he({
		diary: nt(T),
		actiwareRestWindow: A,
		eventMarkerTimestamps: O,
		hdczaWindow: b,
		seriesRevision: E?.seriesRevision ?? 0,
		classifierConfigHashes: Object.keys(v).length > 0 ? v : void 0
	}), F = _?.diaryFingerprint === x, j = {};
	if (_?.masks && F) for (const [C, N] of Object.entries(_.masks)) N.byteLength === p.length && (j[C] = new Uint8Array(N));
	const $ = c.flatMap((e) => e.temperature && e.temperature.byteLength > 0 ? [e.temperature] : []), V = $.length === c.length ? Array.from(st($).subarray(u, d)) : void 0;
	return {
		fileId: e,
		analysisDate: t,
		timestamps: p,
		activityCounts: f,
		epochLengthSeconds: g,
		hdczaWindow: b,
		...O.length > 0 ? { eventMarkerTimestamps: O } : {},
		...A ? { actiwareRestWindow: A } : {},
		classifierOutputs: w,
		...Object.keys(y).length > 0 ? { staleClassifierCells: y } : {},
		precomputedVariantMasks: j,
		diaryFingerprint: x,
		...E?.sourceContentHash ? {
			sourceContentHash: E.sourceContentHash,
			seriesRevision: E.seriesRevision ?? 0
		} : {},
		...T ? { diary: T } : {},
		...V ? { temperature: V } : {}
	};
}
function lt() {
	const e = Date.UTC(2024, 0, 1, 12) / 1e3, t = Array.from({ length: 1440 }, (t, n) => e + 60 * n);
	return {
		timestamps: t,
		activityCounts: t.map(() => 0),
		sleepScores: t.map(() => 1),
		analysisDate: "2024-01-01",
		periodGuider: d.EVENT_MARKER,
		eventMarkerTimestamps: [e + 37800, e + 66600]
	};
}
S();
const ut = {
	[d.EVENT_MARKER]: {
		reason: "Needs an actours core with the event-marker guider (next pin).",
		note: "Event-marker source:",
		night: lt
	},
	[d.ACTIWARE_REST_INTERVAL]: {
		reason: "Needs an actours core with the Actiware rest-interval guider (next pin).",
		note: "Actiware rest-interval source:",
		night: () => {
			const e = Date.UTC(2024, 0, 1, 12) / 1e3;
			return {
				...lt(),
				periodGuider: d.ACTIWARE_REST_INTERVAL,
				actiwareRestWindow: {
					startTimestamp: e + 37800,
					endTimestamp: e + 66600
				}
			};
		}
	}
}, dt = /* @__PURE__ */ new WeakMap();
function mt(e, t = {}) {
	const n = t.wasmApi ?? h();
	let r = dt.get(n);
	r || (r = /* @__PURE__ */ new Map(), dt.set(n, r));
	const a = t.signal ? void 0 : r.get(e);
	if (a) return a;
	const s = ut[e], i = x(n, (e) => $({
		...s.night(),
		wasmApiOverride: e
	}), {
		ms: j,
		label: "scored-variant guider probe",
		signal: t.signal,
		cancel: t.cancelOperation ?? (() => {
			g(n);
		})
	}).then((e) => "placed" === e.kind && e.notes.some((e) => e.startsWith(s.note))).catch((n) => {
		if (r.delete(e), I(n, t.signal, "scored-variant guider probe"), M(n)) throw n;
		return !1;
	});
	return t.signal || r.set(e, i), i;
}
function pt(e = {}) {
	return mt(d.EVENT_MARKER, e);
}
function ft(e) {
	const t = (e ?? "").trim();
	return "" === t ? "none" : t;
}
function gt(e, t) {
	const n = {
		classifierConfigId: e.classifierConfigId.trim(),
		nonwear: ft(e.nonwear),
		periodSource: ft(e.periodSource),
		ruleset: ft(e.ruleset),
		rescoring: ft(e.rescoring)
	}, r = "study_selection" === n.nonwear && t?.length ? `${n.nonwear}_${[...new Set(t)].sort().join("_")}` : n.nonwear;
	return {
		id: p("scored_variant", {
			classifier_config_id: n.classifierConfigId,
			nonwear: r,
			period_source: n.periodSource,
			ruleset: n.ruleset,
			rescoring: n.rescoring
		}),
		configHash: he({
			...n,
			nonwear: r
		}),
		config: n
	};
}
const ht = "cube_cell_absent", wt = new Map(f.map((e) => [e.id, e])), yt = new Set(Ie.map((e) => e.slug)), vt = [30, 60];
function bt(e, t) {
	return {
		ok: !1,
		code: e,
		reason: t
	};
}
function St(e, t) {
	return t().find((t) => t.id === e);
}
const kt = u.angle_hasib?.configId ?? "";
function _t(e) {
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
function At(e, t = {}) {
	const n = e.algorithm.trim(), r = wt.get(n);
	if (!r) return bt("unknown_algorithm", `algorithm "${e.algorithm}" is not a known AlgorithmType`);
	if (t.capabilities && !t.capabilities.sleepAlgorithms.includes(n)) return bt("capability_unavailable", `algorithm "${n}" is not available for this file's capabilities`);
	if ("van_hees_2015" === n) return function() {
		const e = St(kt, () => Re({
			includeFamilies: ["angle_hasib"],
			includeConsensus: !1
		}).configs);
		return e ? _t(e) : bt(ht, "the van_hees_2015 angle cell was not present in the cube plan");
	}();
	const a = r.family ?? "";
	return "sleep_wake" === r.kind && yt.has(a) ? function(e, t) {
		const n = e.countMetric.trim();
		if (r = n, !Object.prototype.hasOwnProperty.call(Ae, r)) return bt("unknown_count_metric", `count metric "${e.countMetric}" is not a cube count source (expected neishabouri or zero_crossing)`);
		var r;
		const a = e.axis.trim();
		if (!Ae[n].includes(a)) return bt("incompatible_axis", `axis "${e.axis}" is not available for count metric "${n}"`);
		const s = e.epochSeconds;
		if (!vt.includes(s)) return bt("unsupported_epoch", `epoch length ${String(s)}s is not a count-cube epoch (expected 30 or 60)`);
		const i = s, o = p("count_cell", {
			method_family: t,
			count_family: n,
			axis: a,
			epoch_seconds: i
		}), c = St(o, () => Re({
			includeFamilies: ["count_hasib"],
			includeConsensus: !1,
			epochSeconds: [i]
		}).configs);
		return c ? _t(c) : bt(ht, `derived cube cell "${o}" was not present in the cube plan`);
	}(e, a) : bt("not_a_cube_scorer", `algorithm "${n}" has no directly scorer-addressable count/angle cube cell`);
}
function Ct(e) {
	return (t) => {
		const n = Me(e, t);
		return function(e) {
			const t = Ve(e.currentAlgorithm), n = At({
				...t,
				algorithm: Pe(t.family, t.implementation) ?? e.currentAlgorithm,
				sleepDetectionRule: e.sleepDetectionRule,
				placementRuleset: e.placementRuleset,
				scorerPostprocessingPreset: e.scorerPostprocessingPreset
			}), r = /* @__PURE__ */ new Set();
			if (!e.placementFromSource && n.ok && Le(De(t.family)) === e.extractionPath && r.add(n.variant.cubeCellId), e.ggirHasibVariantsEnabled && !e.placementFromSource) {
				const t = xe(e.ggirHasibCountSource);
				for (const n of e.ggirHasibVariants) {
					const a = Ie.find((e) => e.algorithm === n), s = n === Ne ? "van_hees_2015" : f.find((e) => e.family === a?.slug)?.id;
					if (!s) continue;
					const i = At({
						algorithm: s,
						countMetric: t.family,
						axis: t.axis,
						epochSeconds: e.ggirHasibCountEpochSeconds,
						sleepDetectionRule: e.sleepDetectionRule,
						placementRuleset: e.placementRuleset,
						scorerPostprocessingPreset: e.scorerPostprocessingPreset
					});
					i.ok && r.add(i.variant.cubeCellId);
				}
			}
			const a = "ggir" === Ye(e.currentAlgorithm) ? e.nonwearDetectorsGgir : e.nonwearDetectorsCounts;
			return {
				classifierConfigIds: [...r],
				nonwearDetectors: 1 === a.length ? [...a] : [ye],
				studyNonwearSelection: [...a],
				rulesets: [e.placementRuleset],
				rescorings: [e.scorerPostprocessingPreset],
				periodSources: "smart" === e.periodGuider ? [v.diary, v.hdcza] : [ke(e.periodGuider, { hasDiary: !1 })?.source_a ?? v.diary]
			};
		}({
			...e,
			currentAlgorithm: n.algorithm,
			periodGuider: n.periodGuider,
			nonwearDetectorsCounts: [...n.nonwearDetectorsCounts],
			placementFromSource: n.placementFromSource
		});
	};
}
function Et(e, t, n, { day: r, eventMarkerGuider: a, actiwareRestGuider: s }) {
	if (Se.includes(e) && !t) return {
		included: !1,
		reason: "no diary for this day"
	};
	if (e === v.hdcza && r && null == r.hdczaWindow) return {
		included: !1,
		reason: "no HDCZA window stored for this day"
	};
	if (e === v.event_marker) {
		if (!a) return {
			included: !1,
			reason: "placement core predates the event-marker guider"
		};
		if (r && !r.eventMarkerTimestamps?.length) return {
			included: !1,
			reason: "no event-marker presses for this day"
		};
	}
	if (e === v.actiware_rest_interval) {
		if (!s) return {
			included: !1,
			reason: "placement core predates the Actiware rest-interval guider"
		};
		if (r && !r.actiwareRestWindow) return {
			included: !1,
			reason: "no Actiware rest interval for this day"
		};
	}
	const i = ve(n, we[e]);
	return null === i ? { included: !0 } : {
		included: !1,
		reason: `unsatisfied source capability: ${i.map((e) => `${e}=false`).join(", ") || "no implemented input signal"}`
	};
}
function Rt(e, t) {
	const n = Oe[e];
	for (const r of n ?? []) if (r.length > 0 && r.every((e) => t.has(e))) return {
		included: !1,
		reason: `day input unavailable: ${r.join(" or ")}`
	};
	return { included: !0 };
}
async function It(t, n, r) {
	const a = _e(t);
	if (a && be(a, n.epochLengthSeconds) !== n.epochLengthSeconds) return async function(t, n, r) {
		const a = Float64Array.from(n.timestamps), s = n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts), i = await V(r, {
			timestamps: a,
			axisY: s,
			vectorMagnitude: /* @__PURE__ */ new Float64Array()
		}, n.epochLengthSeconds), o = (await W(r, { day: i }, ["day"], e, void 0, [t])).day?.get(t);
		return o?.available && o.nonwear ? { mask: await D(r, i.timestamps, o.nonwear, a) } : {
			mask: null,
			reason: o?.reason ?? null
		};
	}(t, n, r ?? h());
	const s = {
		counts: n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts),
		epochSeconds: n.epochLengthSeconds
	};
	n.nonwearSignals?.temperature && (s.temperature = new Float64Array(n.nonwearSignals.temperature)), n.nonwearSignals?.raw && (s.raw = n.nonwearSignals.raw), null != n.nonwearSignals?.sampleRate && (s.sampleRate = n.nonwearSignals.sampleRate);
	const i = await (r ?? h()).detectNonwearUnified({
		algorithm: t,
		signals: s
	});
	if (!i.available || null == i.nonwear) return {
		mask: null,
		reason: i.reason ?? null
	};
	if (i.elementSeconds === n.epochLengthSeconds && n.epochLengthSeconds > 0 && i.nonwear.length === n.timestamps.length && n.timestamps.every((e, t) => e === n.timestamps[0] + t * n.epochLengthSeconds) && i.nonwear.every((e) => 0 === e || 1 === e)) return { mask: i.nonwear };
	const o = We(i, n.timestamps[0] ?? 0);
	return { mask: (await (r ?? h()).rasterizePeriods(Float64Array.from(o, (e) => e.startTsSec), Float64Array.from(o, (e) => e.endTsSec), Float64Array.from(n.timestamps), n.epochLengthSeconds)).mask };
}
var Mt = class extends Error {
	workerLost;
	constructor(e = !1) {
		super("Precomputed variant masks could not be saved."), this.name = "ScoredVariantPersistenceError", this.workerLost = e;
	}
};
const Ot = /* @__PURE__ */ new WeakMap();
function Tt(e) {
	const t = JSON.stringify(e, (e, t) => t instanceof Uint8Array ? Array.from(t) : t);
	return `${String(t.length)}:${he(t)}`;
}
function zt(e, t) {
	for (const n of t) {
		if (e.notes.length >= 12) return;
		e.notes.includes(n) || e.notes.push(n);
	}
}
async function xt(e, t, { db: n = C(), signal: r, wasmApi: a, cancelOperation: s, narrowing: i } = {}) {
	const o = {
		computed: 0,
		skipped: 0,
		missingClassifier: 0,
		placementUnavailable: !1,
		notes: []
	}, l = a ?? h(), u = s ?? (() => {
		g(l);
	}), p = {
		wasmApi: l,
		signal: r,
		cancelOperation: u
	};
	R(r, "before scored-variant guider probes");
	const f = function(e) {
		const { classifierConfigIds: t, capabilities: n, hasDiary: r = !1, includeNonwearNone: a = !0, day: s } = e, i = [], o = s ? t.filter((e) => {
			if (void 0 !== s.staleClassifierCells?.[e]) return !0;
			const t = s.classifierOutputs[e];
			return !(!t || t.length !== s.timestamps.length) || (i.push({
				axis: "classifier",
				value: e,
				reason: t ? `stored series of ${String(t.length)} epochs is not on the day's ${String(s.timestamps.length)}-epoch grid` : "no classifier output stored for this day"
			}), !1);
		}) : [...t], l = s ? function(e) {
			const t = /* @__PURE__ */ new Set(["device_wear_state_evidence_stream"]);
			return e.temperature && 0 !== e.temperature.length || t.add("temperature_epoch_stream"), t;
		}(s) : /* @__PURE__ */ new Set(), u = [];
		for (const c of n.nonwearAlgorithms) {
			if (e.nonwearDetectors && !e.nonwearDetectors.includes(c)) continue;
			const t = s ? Rt(c, l) : { included: !0 };
			t.included ? u.push(c) : i.push({
				axis: "nonwear",
				value: c,
				reason: t.reason
			});
		}
		const d = [...new Set(e.studyNonwearSelection ?? [])];
		let p;
		d.length > 1 && (!e.nonwearDetectors || e.nonwearDetectors.includes("study_selection")) && (d.filter((e) => n.nonwearAlgorithms.includes(e) && (!s || Rt(e, l).included)).length > 0 ? (u.push(ye), p = d) : i.push({
			axis: "nonwear",
			value: ye,
			reason: "none of the study's nonwear detectors can run for this day"
		}));
		const f = a ? ["none", ...u] : u, g = [], h = 2 === e.periodSources?.length && e.periodSources[0] === v.diary && e.periodSources[1] === v.hdcza ? [r ? v.diary : v.hdcza] : e.periodSources;
		for (const c of Object.values(v)) {
			if (h && !h.includes(c)) continue;
			const t = Et(c, r, n, {
				day: s,
				eventMarkerGuider: e.eventMarkerGuider ?? !1,
				actiwareRestGuider: e.actiwareRestGuider ?? !1
			});
			t.included ? g.push(c) : i.push({
				axis: "periodSource",
				value: c,
				reason: t.reason
			});
		}
		const w = e.rulesets ?? [c.LEGACY, c.REGULARITY_V2], y = e.rescorings ?? [m.NONE, m.WEBSTER], b = {
			classifierConfigIds: [...o],
			nonwear: f,
			periodSource: g,
			ruleset: w,
			rescoring: y
		}, S = [], k = /* @__PURE__ */ new Set();
		for (const c of o) for (const e of f) for (const t of g) for (const n of w) for (const r of y) {
			const a = gt({
				classifierConfigId: c,
				nonwear: e,
				periodSource: t,
				ruleset: n,
				rescoring: r
			}, p);
			k.has(a.id) || (k.add(a.id), S.push(a));
		}
		return {
			variants: S,
			axes: b,
			skipped: i,
			...p ? { studyNonwearSelection: p } : {}
		};
	}({
		classifierConfigIds: Object.keys(e.classifierOutputs),
		capabilities: t,
		hasDiary: null != e.diary,
		day: e,
		eventMarkerGuider: !!e.eventMarkerTimestamps?.length && await pt(p),
		actiwareRestGuider: !!e.actiwareRestWindow && await mt(d.ACTIWARE_REST_INTERVAL, p),
		...i
	});
	if (0 === f.variants.length) return o;
	const w = f.variants.filter((t) => !e.precomputedVariantMasks[t.id]);
	if (o.skipped = f.variants.length - w.length, 0 === w.length) return o;
	const y = {};
	R(r, "before scored-variant nonwear computation");
	const b = await x(l, (t) => async function(e, t, n) {
		const r = {};
		for (const a of new Set(t)) "none" !== a && "study_selection" !== a && (r[a] = await It(a, e, n));
		return r;
	}({
		timestamps: e.timestamps,
		activityCounts: e.activityCounts,
		epochLengthSeconds: e.epochLengthSeconds,
		...e.temperature ? { nonwearSignals: { temperature: e.temperature } } : {}
	}, function(e) {
		return [.../* @__PURE__ */ new Set([...e.axes.nonwear, ...e.studyNonwearSelection ?? []])];
	}(f), t), {
		ms: j,
		label: "scored-variant nonwear computation",
		signal: r,
		cancel: u
	});
	for (let c = 0; c < w.length; c += 2e3) {
		R(r, "before scored-variant warm computation");
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
			nonwearMasks: b,
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
		]) : Tt(t);
		let i = Ot.get(l);
		i || (i = /* @__PURE__ */ new Map(), Ot.set(l, i));
		const u = i.get(a) ?? await x(l, (e) => e.runScoredVariantBatch(t), {
			ms: 3e5,
			label: "scored-variant warm computation",
			signal: r,
			cancel: s ?? (() => {
				g(l);
			})
		});
		if (0 === Object.keys(u.masks).length && i.set(a, u), R(r, "after scored-variant warm computation"), Object.assign(y, u.masks), o.computed += Object.keys(u.masks).length, o.missingClassifier += u.missingClassifier, zt(o, u.notes), u.placementUnavailable) {
			o.placementUnavailable = !0;
			break;
		}
	}
	if (Object.keys(y).length > 0) {
		let t;
		try {
			R(r, "before scored-variant warm persistence");
			const { controller: a, release: s } = T(r);
			t = s;
			const i = a.signal;
			if (!await x(l, (t) => Q(e.fileId, e.analysisDate, y, e.diaryFingerprint, n, t, i), {
				ms: 3e5,
				label: "scored-variant warm persistence",
				signal: void 0,
				cancel: () => {
					a.abort(), u();
				}
			})) throw new Mt();
		} catch (S) {
			r?.aborted && u(), I(S, r, "scored-variant warm persistence");
			const e = S instanceof Error && "QuotaExceededError" === S.name ? "QuotaExceededError" : "Error";
			throw console.warn("[scored-variant-warm] Precomputed mask persistence failed.", e), Ue("warn", "Precomputed variant mask persistence failed", { error_type: e }), new Mt(M(S));
		} finally {
			t?.();
		}
	}
	return o;
}
const Ft = /* @__PURE__ */ new WeakMap();
async function jt(e, t, n, r) {
	const a = Ft.get(e)?.get(t);
	return a ? Promise.all(a.map(async (e) => {
		let t = e.run.answers.get(n);
		return t || (t = r(e.run.group, e.run.probabilities), e.run.answers.set(n, t)), {
			...e,
			value: await t
		};
	})) : null;
}
function $t(e, t) {
	Ft.set(e, t);
}
function Nt(e) {
	const t = new Uint8Array(e.length);
	return t.set(e), t.buffer;
}
function Vt(e) {
	const t = {}, n = [];
	for (const [r, a] of Object.entries(e ?? {})) {
		if (!a) continue;
		const e = y(r);
		if (!e) throw new Error(`sleep/wake output ${r} is not a declared AlgorithmRunKey (core.yaml)`);
		const s = Nt(a);
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
function Dt(e, t, n, r, a) {
	a && 0 !== a.length && (e[Ce(t, n, r)] = new Float64Array(a));
}
function Wt(e, t, n, r) {
	const a = {};
	Dt(a, "neishabouri", "x", t, e.axisX), Dt(a, "neishabouri", "y", t, e.axisY), Dt(a, "neishabouri", "z", t, e.axisZ), Dt(a, "neishabouri", "vm", t, e.vectorMagnitude), Dt(a, "zero_crossing", "x", t, e.zeroCrossingX), Dt(a, "zero_crossing", "y", t, e.zeroCrossingY), Dt(a, "zero_crossing", "z", t, e.zeroCrossingZ);
	const s = e.counts30s;
	s && 30 !== t && (Dt(a, "neishabouri", "x", 30, s.axisX), Dt(a, "neishabouri", "y", 30, s.axisY), Dt(a, "neishabouri", "z", 30, s.axisZ), Dt(a, "neishabouri", "vm", 30, s.vectorMagnitude), Dt(a, "zero_crossing", "x", 30, s.zeroCrossingX), Dt(a, "zero_crossing", "y", 30, s.zeroCrossingY), Dt(a, "zero_crossing", "z", 30, s.zeroCrossingZ));
	const i = { [t]: Float64Array.from(e.timestamps) };
	return s && 30 !== t && s.timestamps.length > 0 && (i[30] = Float64Array.from(s.timestamps)), {
		counts: a,
		timestamps: i,
		...r && r.length > 0 && "unconfigured" !== n.id ? { lstmProbabilities: { [n.id]: r } } : {}
	};
}
function Pt(e) {
	return 120 !== e;
}
const Lt = /* @__PURE__ */ new Map();
function Yt(e, t, n, r = !1, a) {
	const s = r && 30 !== e ? [30, e] : [e], i = s.join(","), o = t ? `${i}|lstm|${n.id}|${n.label}|selected:${String(a ?? "none")}|${JSON.stringify(n.thresholdPresets ?? null)}` : `${i}|nolstm`, c = Lt.get(o);
	if (c) return c;
	const l = Re({
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
	return Lt.set(o, l), l;
}
function Ut() {
	Lt.clear();
}
const Bt = {
	dayCount: 0,
	variantsComputed: 0,
	variantsSkipped: 0,
	dayFailures: 0
};
function Gt(e, t) {
	return JSON.stringify({
		sourceCaps: e,
		narrowing: t ?? null
	}, (e, t) => t instanceof Set ? [...t].map(String).sort() : t);
}
async function Ht(e, t, n, r) {
	const [a, i, o, c] = await Promise.all([
		r.files.get(e),
		te(e, r),
		r.markers.where("fileId").equals(e).toArray(),
		r.actiwareFileData.get(e)
	]);
	return "warm-v3:" + he({
		plan: Gt(t, n),
		series: [
			a?.sourceType,
			a?.sourceContentHash,
			a?.seriesRevision ?? 0,
			a?.epochLengthSeconds,
			a?.availableDates
		],
		geometry: i.some((e) => !e.importMappingProvenance?.diaryTemporalPolicy) ? H() : null,
		diaries: i.map((e) => ({
			date: e.analysisDate,
			inBed: e.diaryInBedTime,
			onset: e.diaryOnsetTime,
			wake: e.diaryWakeTime,
			outOfBed: e.diaryOutOfBedTime,
			overlay: e.decisionOverlayJson,
			policy: e.importMappingProvenance?.diaryTemporalPolicy,
			naps: L(e),
			nonwear: se(e)
		})),
		hdcza: o.filter((e) => "auto_score" === e.username && e.algorithm === s.VAN_HEES_2015).map((e) => ({
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
async function Kt(e, t, n, r, a = C(), s, i, o, c = Ct(ce.getState()), l) {
	const u = a;
	if (!n) return Bt;
	const d = await ie(e, u);
	if (d?.sourceType && !Ee(d.sourceType, "local")) return Bt;
	const m = { ...Bt }, p = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), g = await K(e, u).then((e) => ({
		fileRecord: d,
		activitySpan: e
	}), () => ({ fileRecord: d })), h = c?.(g.fileRecord), w = await Ht(e, n, h, u), y = /* @__PURE__ */ new Set();
	if ((g.fileRecord?.epochLengthSeconds ?? 60) > 60) return Bt;
	let v = /* @__PURE__ */ new Map();
	const b = (t) => {
		let n = v.get(t);
		return n || (n = ee(e, t, u), v.set(t, n)), n;
	};
	let S = !1;
	const k = me((t, n) => {
		t === e && n === u && (S = !0);
	}), _ = t.length;
	let A = 0;
	r?.({
		phase: "variants",
		percent: 98,
		message: `0/${String(_)} days`
	});
	const O = () => {
		A >= _ || (A += 1, r?.({
			phase: "variants",
			percent: 0 === _ ? 100 : 98 + 2 * A / _,
			message: `${String(A)}/${String(_)} days`
		}));
	};
	let T = !1;
	try {
		let r = t;
		for (let a = 0; a < 2; a++) {
			v = /* @__PURE__ */ new Map();
			for (const t of r) if (T) f.add(t), O();
			else {
				performance.now(), m.variantsComputed;
				for (const e of v.keys()) e < t && v.delete(e);
				try {
					R(s, "before scored-variant warm day load");
					const r = await E(() => ct(e, t, u, {
						...g,
						readDay: b,
						wasmApi: i
					}), j, "scored-variant day load", s, o ?? (() => {}));
					if (R(s, "after scored-variant warm day load"), !r || 0 === Object.keys(r.classifierOutputs).length) {
						O();
						continue;
					}
					const a = await xt(r, n, {
						db: u,
						signal: s,
						wasmApi: i,
						cancelOperation: o,
						narrowing: h
					});
					y.delete(t), m.variantsComputed += a.computed, p.has(t) || (m.variantsSkipped += a.skipped), a.placementUnavailable || 0 !== a.missingClassifier ? f.add(t) : (p.add(t), f.delete(t)), O(), a.placementUnavailable && console.warn("[local-processing] Scored-variant warm placement was unavailable.");
				} catch (x) {
					I(x, s, "scored-variant warm"), console.warn("[local-processing] Scored-variant warm failed."), M(x) && (T = !0), x instanceof Error && "ScoredVariantPersistenceError" === x.name && y.add(t), f.add(t), O();
				}
			}
			if (T || a > 0 || !S && 0 === f.size) break;
			r = S ? t : [...f], S = !1;
		}
	} finally {
		k(), v = /* @__PURE__ */ new Map(), m.dayCount = p.size, s?.aborted && l && await Zt(() => Promise.resolve(), e, m, l);
	}
	let z = S || y.size > 0 || Boolean(s?.aborted);
	if (!z) try {
		const t = await u.scoredVariantMasks.where("fileId").equals(e).count();
		z = !await P(u, [
			u.files,
			u.diaryEntries,
			u.markers,
			u.actiwareFileData
		], async () => !s?.aborted && await Ht(e, n, h, u) === w && await u.files.update(e, { scoredVariantWarm: {
			inputs: w,
			maskDays: t,
			outcome: f.size > 0 ? "known-failures" : "complete",
			failedDays: f.size
		} }) > 0, s);
	} catch {
		z = !0, console.warn("[local-processing] Scored-variant warm stamp could not be saved.");
	}
	return m.dayFailures = z ? Math.max(f.size, _) : f.size, m;
}
async function Zt(e, t, n, r, a) {
	await e(), 0 !== n.variantsComputed && await ze.recordWorkspaceBoundDurably(r, w.SYSTEM_RECALCULATION, {
		subject: "scored_variant_precompute",
		fileId: t,
		dayCount: n.dayCount,
		variantsComputed: n.variantsComputed,
		variantsSkipped: n.variantsSkipped,
		trigger: "file_processing"
	});
}
function Jt() {
	return F(b.SCORED_VARIANT_WARM);
}
function Xt(e, t = {}) {
	const n = t.db ?? C();
	return z({
		kind: b.SCORED_VARIANT_WARM,
		key: fe(e),
		label: "Scoring variants",
		workspaceId: n.name,
		signal: t.signal,
		rerun: !0,
		run: (r) => async function(e, { forget: t = !1, resumeIncomplete: n = !1, retryKnownFailures: r = !0, db: a = C() }, s) {
			try {
				if (C() !== a) return;
				const i = await a.files.get(e);
				if (C() !== a || !i || "incomplete" === i.ingestState || 0 === i.availableDates.length || !i.sourceType || i.epochLengthSeconds > 60) return;
				const o = ce.getState(), { username: c, selectedStudyId: l } = o, u = Ee(i.sourceType, "local");
				if (!u) return;
				const d = Ct(o);
				if (!t && !n) return;
				const m = await Ht(e, u, d(i), a);
				if (C() !== a) return;
				if (!t && i.scoredVariantWarm?.outcome && i.scoredVariantWarm.inputs === m && (!r || "known-failures" !== i.scoredVariantWarm.outcome)) return;
				const p = i.scoredVariantWarm;
				if (!await P(a, [
					a.files,
					a.diaryEntries,
					a.markers,
					a.actiwareFileData,
					a.scoredVariantMasks
				], async () => {
					const n = await a.files.get(e);
					if (C() !== a || !n || JSON.stringify(n.scoredVariantWarm) !== JSON.stringify(p)) return !1;
					const r = await Ht(e, u, d(n), a);
					if (C() !== a || r !== m) return !1;
					if (n.scoredVariantWarm && (!n.scoredVariantWarm.outcome || n.scoredVariantWarm.inputs !== m) && (await a.scoredVariantMasks.where("fileId").equals(e).delete(), C() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					if ((t || n.scoredVariantWarm) && (await a.files.where(":id").equals(e).modify((e) => {
						delete e.scoredVariantWarm;
					}), C() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					return !0;
				}, s.signal) || C() !== a) return;
				await async function(e, t, n, r, a, s, i) {
					let o = !1;
					const c = () => {
						o = !0, Ue("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" });
					};
					if (C() !== a) return;
					ue({
						fileId: e,
						done: 0,
						total: t.length
					}, a);
					const l = _(() => {
						C() !== a && A.getState().cancel(`${a.name}:${fe(e)}`);
					}), u = new AbortController(), d = () => {
						u.abort();
					};
					i.signal.addEventListener("abort", d, { once: !0 });
					try {
						const o = await Kt(e, t, n, (e) => {
							i.progress(Number.parseInt(e.message, 10), t.length, e.message);
						}, a, i.signal, O(u.signal), d, s, r);
						await Zt(() => Promise.resolve(), e, o, r, i.signal), i.signal.throwIfAborted(), o.dayFailures > 0 && (console.warn("[local-processing] Some days could not be precomputed; reimport the file to retry."), c());
					} catch {
						if (i.signal.aborted) return;
						console.warn("[local-processing] Background scored-variant warm failed."), c();
					} finally {
						i.signal.removeEventListener("abort", d), l(), ue(o && !i.signal.aborted && C() === a ? {
							fileId: e,
							done: le()?.done ?? 0,
							total: t.length,
							failed: !0
						} : null, a);
					}
					if (o) throw new Error("Background scored-variant warm failed.");
				}(e, i.availableDates, u, ze.captureWorkspaceBinding(a, {
					username: c,
					studyId: l,
					signal: s.signal
				}), a, d, s);
			} catch {
				if (s.signal.aborted) return;
				console.warn("[local-processing] Scored-variant warm could not be scheduled."), Ue("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" }), C() === a && ue({
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
function qt(e, { retryKnownFailures: t = !1, signal: n } = {}) {
	return z({
		kind: b.VARIANT_RECOVERY,
		key: b.VARIANT_RECOVERY,
		label: "Resume scoring variants",
		workspaceId: e.name,
		signal: n,
		run: async (n) => {
			await e.projectMeta.get(pe);
			const r = (e) => null != e.id && "incomplete" !== e.ingestState && Boolean(e.sourceType && Ee(e.sourceType, "local")) && e.availableDates.length > 0 && !(e.epochLengthSeconds > 60), a = (await J(e)).filter(r);
			for (const i of a) {
				if (C() !== e) return;
				await Xt(i.id, {
					db: e,
					resumeIncomplete: !0,
					retryKnownFailures: t,
					signal: n.signal
				}), await n.yieldNow();
			}
			if (C() !== e || !e.isOpen()) return;
			const s = Ct(ce.getState());
			await P(e, [
				e.projectMeta,
				e.files,
				e.diaryEntries,
				e.markers,
				e.actiwareFileData
			], async () => {
				const n = [], i = (await J(e)).filter(r);
				for (const r of i) {
					const i = Ee(r.sourceType, "local"), o = await Ht(r.id, i, s(r), e), c = (await e.files.get(r.id))?.scoredVariantWarm;
					if (!c?.outcome || c.inputs !== o || C() !== e) return void await e.projectMeta.delete(pe);
					n.push([r.id, o]), "known-failures" !== c.outcome || a.find((e) => e.id === r.id)?.scoredVariantWarm?.inputs === o && !t || ue({
						fileId: r.id,
						done: r.availableDates.length,
						total: r.availableDates.length,
						failed: !0
					}, e);
				}
				await e.projectMeta.put({
					key: pe,
					revision: Number.parseInt(he(n), 16)
				});
			}, n.signal);
		}
	}).catch((t) => {
		if (n?.aborted || t instanceof DOMException && "AbortError" === t.name) throw t;
		throw Ue("warn", "Background scored-variant warm failed", { error_type: "Error" }), ue({
			fileId: 0,
			done: 0,
			total: 0,
			failed: !0
		}, e), /* @__PURE__ */ new Error("Stored scoring variants could not be resumed.");
	});
}
async function Qt(e, t, n, r, a) {
	const s = r ?? h(), i = await jt(s, e, `cube:${String(t)}:${JSON.stringify(a)}`, (e, n) => Qt(e, t, n, s, a));
	if (i) {
		const t = {}, n = [];
		for (const r of i) for (const a of r.value.historyOutputs) {
			const s = new Uint8Array(a.results), i = s.length !== r.run.group.timestamps.length, o = i ? e.counts30s?.timestamps.length ?? 0 : e.timestamps.length, c = t[a.cubeConfig.id] ?? new ArrayBuffer(o);
			new Uint8Array(c).set(s.slice(i ? r.nativeStart : r.start, i ? r.nativeEnd : r.end), i ? r.nativeOffset : r.offset), t[a.cubeConfig.id] || n.push({
				cubeConfig: a.cubeConfig,
				results: c
			}), t[a.cubeConfig.id] = c;
		}
		return {
			algorithmResults: t,
			historyOutputs: n,
			skipped: i.reduce((e, t) => e + t.value.skipped, 0)
		};
	}
	const o = Xe(a), c = qe(o.modelId), l = Yt(t, !!n && n.length > 0 && "unconfigured" !== c.id, c, !!e.counts30s && e.counts30s.axisY.length > 0, o.threshold ?? void 0), u = await async function(e) {
		const t = e.configIds ? new Set(e.configIds) : null, n = {}, r = [];
		for (const s of e.plan.configs) if (!t || t.has(s.id)) try {
			const t = await et(s, e.backend, e.signals, n);
			t && (n[s.id] = t);
		} catch (a) {
			r.push({
				configId: s.id,
				reason: a instanceof Error ? a.message : String(a),
				...a instanceof Qe ? { inputUnavailable: !0 } : {}
			});
		}
		return {
			outputs: n,
			skipped: r
		};
	}({
		plan: l,
		backend: r ?? h(),
		signals: Wt(e, t, c, n)
	}), d = {}, m = [], p = new Map(l.configs.map((e) => [e.id, e]));
	for (const [f, g] of Object.entries(u.outputs)) {
		const e = p.get(f);
		if (!e) throw new Error(`cube output ${f} has no planned config`);
		const t = Nt(g);
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
function en(e, t) {
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
async function tn(e, t, n) {
	if (!t) return {};
	const r = n ?? h(), a = await jt(r, e, `hasib:${JSON.stringify(t)}`, (e) => tn(e, t, r));
	if (a) {
		const t = {};
		for (const n of a) for (const [r, a] of Object.entries(n.value)) {
			if (!a) continue;
			const s = t[r] ?? new Uint8Array(e.timestamps.length);
			s.set(a.slice(n.start, n.end), n.offset), t[r] = s;
		}
		return t;
	}
	const s = (t.variants ?? je).filter((e) => e !== Ne);
	if (0 === s.length) return {};
	const i = t.countSource ?? "neishabouri_vm_60s";
	if (!function(e, t) {
		const { family: n, axis: r } = xe(t);
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
	}(e, i)) return {};
	const o = Float64Array.from(e.timestamps), c = (r.medianGapSeconds ? await r.medianGapSeconds(o) : await h().medianGapSeconds(o)) ?? t.countEpochSeconds ?? 60, l = await $e({
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
		countSource: i,
		countEpochSeconds: c,
		...void 0 !== t.configs ? { configs: t.configs } : {}
	});
	return Object.fromEntries(l.map((e) => [e.key, e.result.sib]));
}
async function nn(e, t, n) {
	const r = n ?? h(), a = await jt(r, e, `ggir:${String(t)}`, (e) => nn(e, t, r));
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
	const s = await $e({
		backend: n ?? h(),
		variants: ["Sadeh1994", "ColeKripke1992"],
		anglez5s: /* @__PURE__ */ new Float64Array(),
		zeroCrossingY60s: new Float64Array(e.zeroCrossingY),
		countSource: "zero_crossing_y_60s",
		countEpochSeconds: t
	}), i = Fe("sadeh_1994"), o = Fe("cole_kripke_1992"), c = s.find((e) => e.variant === i)?.result.sib, l = s.find((e) => e.variant === o)?.result.sib;
	return c && l ? {
		sadeh: c,
		ck: l
	} : null;
}
async function rn(e, t) {
	const n = [], a = e.sadeh_1994_actilife.length, s = (e) => {
		e && e.length === a && n.push(e);
	};
	s(e.sadeh_1994_actilife), s(e.sadeh_1994_original), s(e.cole_kripke_1992_actilife), s(e.cole_kripke_1992_original), s(e.sadeh_1994_ggir), s(e.cole_kripke_1992_ggir), s(e.lstm_sleep_wake);
	for (const [i, o] of Object.entries(e.hasibVariants ?? {})) i !== k.TENSOR_MAJORITY_VOTE && i !== k.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== r(i)?.grammarId && s(o);
	for (const [i, o] of Object.entries(e.cubeOutputs ?? {})) i !== k.TENSOR_MAJORITY_VOTE && i !== k.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== r(i)?.grammarId && s(o);
	return 0 === n.length ? new Uint8Array(a) : t.scoreConsensus("majority_tie_sleep", n);
}
me((e, t, n) => {
	Xt(e, {
		resumeIncomplete: !0,
		retryKnownFailures: !1,
		db: t,
		signal: n
	}).catch(() => {});
});
export { Ut as _resetCubePlanCacheForTest, Jt as awaitScheduledScoredVariantWarms, qt as backfillInterruptedScoredVariantWarms, Yt as buildOrReuseAlgorithmOutputCubePlan, Nt as cloneOutputBuffer, rn as computeTensorConsensusForDay, Pt as cubeRunsOnGrid, Zt as finalizeAndAuditScoredVariantWarm, Xt as rewarmFileScoredVariants, Qt as runAlgorithmCubeForDay, nn as scoreBuiltinGgirSadehColeForDay, tn as scoreCountBasedHasibVariantsForDay, Vt as sleepWakeToPersistedOutputs, $t as t, Kt as warmFileScoredVariants, en as withRecordingWakeThreshold };
