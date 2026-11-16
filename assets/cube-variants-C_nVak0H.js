import { G as e, Qt as n, St as r, Y as a, an as s, cn as o, gt as i, ht as c, mt as l, nt as u, rn as d, sn as m, tt as p, w as f } from "./schema-D8rqa1Y6.js";
import { i as g, r as h } from "./workers-CrU4fDAf.js";
import { M as w, P as y, i as v, m as b, nt as S, ot as k, rt as _, t as A } from "./workspace-db-tot7PUXb.js";
import { l as C } from "./legacy-invalid-night-zjKZRSNb.js";
import { _ as E, f as R, h as M, m as I, n as T, p as O, r as z, s as x, t as F, u as $ } from "./background-jobs-B2uo95VO.js";
import { B as j, F as D, M as N, P as V, l as W } from "./local-data-source-peqeOJrj.js";
import { a as P } from "./project-revision-CRZNLUWr.js";
import { At as L, Bt as Y, Dt as U, It as B, Mt as G, N as H, Pt as K, Tt as J, U as Z, Wt as X, _ as q, dt as Q, ft as ee, j as te, k as ne, kt as re, mt as ae, r as se, ut as oe, wt as ie, zt as ce } from "./store-StTfKmbj.js";
import { D as le, F as ue, J as de, M as me, N as pe, P as fe, k as ge } from "./night-session-registry-Blk6S0Kz.js";
import { Ct as he, E as we, M as ye, O as ve, St as be, T as Se, W as ke, _t as _e, ft as Ae, gt as Ce, k as Ee, mt as Re, pt as Me, u as Ie, w as Te, yt as Oe } from "./per-source-defaults-DHWdfoJI.js";
import { t as ze } from "./audit-log-RFivnbbI.js";
import { a as xe, i as Fe, n as $e, o as je, t as De } from "./local-ggir-hasib-variants-TGeoq31A.js";
import { A as Ne, M as Ve, O as We, P as Pe, j as Le, x as Ye } from "./local-nonwear-unified-DbYlb1Ol.js";
import { r as Ue } from "./diagnostic-log-D1tZZeTx.js";
import { a as Be, g as Ge, m as He, o as Ke } from "./epoch-utils-CzLU8tdl.js";
import { C as Je } from "./local-export-shard-worker-Bn9FW-T0.js";
import { v as Ze } from "./epoch-series-import-By49SGm_.js";
import { i as Xe, n as qe } from "./lstm-model-manager-BiQaI-4L.js";
var Qe = class extends Error {};
async function et(t, n, s, o) {
	switch (t.family) {
		case "count_hasib": return async function(t, n, s) {
			const o = t.input.seriesKey, i = xe(o), u = s.counts?.[o];
			if (!u || 0 === u.length) throw new Qe(`Missing count input ${o}.`);
			if ("string" == typeof t.parameters.implementation) return tt(t), async function(t, n, r) {
				const s = function(t) {
					const n = c(t.id);
					if (null === n || "count_cell" !== n.grammarId) return null;
					const r = n.values.method_family, a = n.values.implementation_variant;
					return void 0 === r || void 0 === a ? null : e.find((e) => e.methodFamilyId === r && e.implementationVariantId === a)?.primitiveId ?? null;
				}(t);
				if ("sadeh" === s) {
					if (!n.scoreSadeh) throw new Error("Registry Sadeh primitive (scoreSadeh) unavailable on this worker bundle.");
					const e = a.scoring_threshold, s = "number" == typeof e ? e : 0, o = "number" == typeof t.parameters.threshold ? t.parameters.threshold : s;
					return n.scoreSadeh(r, o);
				}
				if ("cole_kripke" === s) {
					if (!n.scoreColeKripke) throw new Error("Registry Cole-Kripke primitive (scoreColeKripke) unavailable on this worker bundle.");
					const e = !0 === t.parameters.useActilifeScaling;
					return n.scoreColeKripke(r, e);
				}
				throw new Error(`Unsupported provenance count scorer ${t.algorithm}.`);
			}(t, n, u);
			const d = function(e) {
				if ($e.includes(e.algorithm)) return null;
				const t = c(e.id)?.values.method_family, n = r.find((e) => "sleep_wake" === e.kind && e.family === t), a = n?.nativeEpochSeconds;
				return !n || 30 !== a && 60 !== a ? null : {
					methodId: n.id,
					nativeEpochSeconds: a
				};
			}(t);
			if (d) return async function(e, t, n, r) {
				const a = xe(e.input.seriesKey), s = l(a.family, a.axis, t.nativeEpochSeconds), o = r.counts?.[s];
				if (!o || 0 === o.length) throw new Qe(`Missing native count input ${s}.`);
				if (!n.scoreEpochs || !n.foldOntoGrid) throw new Error("The typed epoch scorer (scoreEpochs) is unavailable on this worker bundle.");
				const i = await n.scoreEpochs({
					algorithm: t.methodId,
					signals: {
						counts: o,
						epochSeconds: t.nativeEpochSeconds
					}
				}), c = Ze(i, o.length);
				if (!c) throw new Error(`${t.methodId}: ${i.reason ?? "the scorer returned no series"}`);
				if (e.epochSeconds === t.nativeEpochSeconds) return c;
				const u = r.timestamps?.[t.nativeEpochSeconds], d = r.timestamps?.[e.epochSeconds];
				if (!u || !d || u.length !== c.length) throw new Qe(`Missing the timestamps that align ${s} with the ${String(e.epochSeconds)} s grid.`);
				const m = await n.foldOntoGrid(u, Float64Array.from(c), d, e.epochSeconds, "majority_ties_sleep");
				return Uint8Array.from(m);
			}(t, d, n, s);
			tt(t);
			const m = (await je({
				backend: n,
				variants: [t.algorithm],
				anglez5s: /* @__PURE__ */ new Float64Array(),
				countSource: o,
				countEpochSeconds: i.epochSeconds,
				..."neishabouri" === i.family ? { neishabouriCounts: { [i.axis]: u } } : { zeroCrossingCountsByAxis: { [i.axis]: u } }
			}))[0];
			if (!m) throw new Error(`HASIB ${t.algorithm} produced no output.`);
			return m.result.sib;
		}(t, n, s);
		case "angle_hasib": return async function(e, t, n) {
			const r = p.angle_hasib;
			if (void 0 === r || e.algorithm !== r.algorithmValue) throw new Error(`Unsupported angle-HASIB algorithm ${e.algorithm}.`);
			if (!n.anglez5s || 0 === n.anglez5s.length) throw new Qe(`Missing ${r.inputSeriesKey} input.`);
			const a = (await je({
				backend: t,
				variants: [e.algorithm],
				anglez5s: n.anglez5s,
				countSource: l(u, "y", 60)
			}))[0];
			if (!a) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return a.result.sib;
		}(t, n, s);
		case "lstm": return async function(e, t, n) {
			const r = "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm, s = n.lstmProbabilities?.[r];
			if (!s || 0 === s.length) throw new Qe(`Missing LSTM probabilities for ${r}.`);
			const o = a.model_threshold, i = "number" == typeof e.parameters.threshold ? e.parameters.threshold : "number" == typeof o ? o : .5;
			if (!t.thresholdProbabilities) throw new Error("The probability threshold (thresholdProbabilities) is unavailable on this worker bundle.");
			return t.thresholdProbabilities(Float64Array.from(s), i);
		}(t, n, s);
		case "consensus": return async function(e, t, n) {
			const r = (Array.isArray(e.parameters.inputConfigIds) ? e.parameters.inputConfigIds.filter((e) => "string" == typeof e) : e.lineage).map((e) => {
				const n = t[e];
				if (!n) throw new Qe(`Missing consensus input ${e}.`);
				return n;
			});
			if (0 === r.length) throw new Error("Consensus requires at least one input.");
			const s = r[0].length;
			for (const a of r) if (a.length !== s) throw new Error(`Consensus inputs are not aligned (${String(a.length)} vs ${String(s)} epochs).`);
			const o = "string" == typeof e.parameters.strategy ? e.parameters.strategy : a.consensus_strategy;
			return n.scoreConsensus(o, r);
		}(t, o, n);
	}
}
function tt(e) {
	const t = c(e.id)?.values, n = t?.implementation_variant, r = Oe(String(t?.method_family), void 0 === n ? void 0 : String(n));
	if (!r.includes(e.epochSeconds)) throw new Error(`programming error: ${e.id} reached the runner, but ${e.algorithm} is valid only at ${r.join(", ")} s and the planner never plans it.`);
}
function nt(e) {
	return he(e ?? null);
}
function rt(e) {
	return ce(e).map((e) => [e.start, e.end]);
}
function at(e) {
	return Y(e).map((e) => [e.start, e.end]);
}
function st(e) {
	let t = /* @__PURE__ */ new Float64Array(0);
	for (const n of e) t = Ge(t, new Float64Array(n));
	return t;
}
function ot(e) {
	const t = new Uint8Array(e.reduce((e, t) => e + t.byteLength, 0));
	let n = 0;
	for (const r of e) t.set(new Uint8Array(r), n), n += r.byteLength;
	return t;
}
async function it(e, t, r) {
	const a = await ue(e, t, de, n.VAN_HEES_2015, void 0, r), s = a?.sleepMarkers.find((e) => e.markerType === d.MAIN_SLEEP) ?? a?.sleepMarkers[0];
	return null != s?.onsetTimestamp && null != s.offsetTimestamp ? [s.onsetTimestamp, s.offsetTimestamp] : null;
}
async function ct(e, t, n = A(), r = {}) {
	const a = n, s = r.readDay ?? ((t) => q(e, t, a)), o = await Ke(e, t, a, s, r.fileRecord?.navigationFacts, r.wasmApi);
	if (!o) return null;
	const i = await s(await Be(t, r.fileRecord?.navigationFacts, r.wasmApi)), c = (i ? [o, i] : [o]).filter((e) => e.timestamps.byteLength > 0), l = st(c.map((e) => e.timestamps)), { startIndex: u, endIndex: d } = await Je(l, t, r.wasmApi);
	if (d <= u) return null;
	const m = l.subarray(u, d), p = Array.from(m), f = Array.from(st(c.map((e) => e.axisY)).subarray(u, d)), g = ae(c[0], r.fileRecord) ?? await ee(m, 60, r.wasmApi), h = await te(e, a, r.fileRecord ? { file: r.fileRecord } : void 0), w = {}, y = {}, v = {};
	for (const A of h.cellIds) {
		const e = h(A), t = X(c, e);
		if ("stale" === t.status) {
			y[A] = t.reason;
			continue;
		}
		const n = t.outputs.filter((e) => null != e);
		if (n.length !== c.length) continue;
		const a = await Promise.all(n.map(async (e, t) => (await He(c[t], new Uint8Array(e), r.wasmApi))?.buffer ?? e));
		w[A] = Array.from(ot(a).subarray(u, d)), "ok" === e.status && null !== e.configHash && (v[A] = e.configHash);
	}
	const [b, S, k, _, C, E] = await Promise.all([
		it(e, t, a),
		Q(e, t, a),
		"activitySpan" in r ? r.activitySpan ?? null : G(e, a),
		a.scoredVariantMasks.get([e, t]),
		D.find((e) => e.guiderWindow)?.guiderWindow?.({
			fileId: e,
			date: t,
			db: a
		}) ?? null,
		r.fileRecord ?? ne(e, a)
	]), R = S ? await K(S, k, r.wasmApi) : null, M = p[0] ?? 0, I = (p[p.length - 1] ?? M) + g, T = c.flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter((e) => e >= M && e < I), O = R ? {
		diaryInBedTime: ie(z = R),
		onsetTime: J(z),
		diaryWakeTime: U(z),
		naps: rt(z),
		nonwear: at(z)
	} : void 0;
	var z;
	const x = "warm-v3:" + he({
		diary: nt(O),
		actiwareRestWindow: C,
		eventMarkerTimestamps: T,
		hdczaWindow: b,
		seriesRevision: E?.seriesRevision ?? 0,
		classifierConfigHashes: Object.keys(v).length > 0 ? v : void 0
	}), F = _?.diaryFingerprint === x, $ = {};
	if (_?.masks && F) for (const [A, D] of Object.entries(_.masks)) D.byteLength === p.length && ($[A] = new Uint8Array(D));
	const j = c.flatMap((e) => e.temperature && e.temperature.byteLength > 0 ? [e.temperature] : []), N = j.length === c.length ? Array.from(st(j).subarray(u, d)) : void 0;
	return {
		fileId: e,
		analysisDate: t,
		timestamps: p,
		activityCounts: f,
		epochLengthSeconds: g,
		hdczaWindow: b,
		...T.length > 0 ? { eventMarkerTimestamps: T } : {},
		...C ? { actiwareRestWindow: C } : {},
		classifierOutputs: w,
		...Object.keys(y).length > 0 ? { staleClassifierCells: y } : {},
		precomputedVariantMasks: $,
		diaryFingerprint: x,
		...E?.sourceContentHash ? {
			sourceContentHash: E.sourceContentHash,
			seriesRevision: E.seriesRevision ?? 0
		} : {},
		...O ? { diary: O } : {},
		...N ? { temperature: N } : {}
	};
}
function lt() {
	const e = Date.UTC(2024, 0, 1, 12) / 1e3, t = Array.from({ length: 1440 }, (t, n) => e + 60 * n);
	return {
		timestamps: t,
		activityCounts: t.map(() => 0),
		sleepScores: t.map(() => 1),
		analysisDate: "2024-01-01",
		periodGuider: s.EVENT_MARKER,
		eventMarkerTimestamps: [e + 37800, e + 66600]
	};
}
k();
const ut = {
	[s.EVENT_MARKER]: {
		reason: "Needs an actours core with the event-marker guider (next pin).",
		note: "Event-marker source:",
		night: lt
	},
	[s.ACTIWARE_REST_INTERVAL]: {
		reason: "Needs an actours core with the Actiware rest-interval guider (next pin).",
		note: "Actiware rest-interval source:",
		night: () => {
			const e = Date.UTC(2024, 0, 1, 12) / 1e3;
			return {
				...lt(),
				periodGuider: s.ACTIWARE_REST_INTERVAL,
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
	const s = ut[e], o = x(n, (e) => j({
		...s.night(),
		wasmApiOverride: e
	}), {
		ms: $,
		label: "scored-variant guider probe",
		signal: t.signal,
		cancel: t.cancelOperation ?? (() => {
			g(n);
		})
	}).then((e) => "placed" === e.kind && e.notes.some((e) => e.startsWith(s.note))).catch((n) => {
		if (r.delete(e), M(n, t.signal, "scored-variant guider probe"), I(n)) throw n;
		return !1;
	});
	return t.signal || r.set(e, o), o;
}
function pt(e = {}) {
	return mt(s.EVENT_MARKER, e);
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
		id: i("scored_variant", {
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
const ht = "cube_cell_absent", wt = new Map(r.map((e) => [e.id, e])), yt = new Set(Me.map((e) => e.slug)), vt = [30, 60];
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
const kt = p.angle_hasib?.configId ?? "";
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
		const o = s, c = i("count_cell", {
			method_family: t,
			count_family: n,
			axis: a,
			epoch_seconds: o
		}), l = St(c, () => Re({
			includeFamilies: ["count_hasib"],
			includeConsensus: !1,
			epochSeconds: [o]
		}).configs);
		return l ? _t(l) : bt(ht, `derived cube cell "${c}" was not present in the cube plan`);
	}(e, a) : bt("not_a_cube_scorer", `algorithm "${n}" has no directly scorer-addressable count/angle cube cell`);
}
function Ct(e) {
	return (t) => {
		const n = Ie(e, t);
		return function(e) {
			const t = Ne(e.currentAlgorithm), n = At({
				...t,
				algorithm: Pe(t.family, t.implementation) ?? e.currentAlgorithm,
				sleepDetectionRule: e.sleepDetectionRule,
				placementRuleset: e.placementRuleset,
				scorerPostprocessingPreset: e.scorerPostprocessingPreset
			}), a = /* @__PURE__ */ new Set();
			if (!e.placementFromSource && n.ok && Le(Ve(t.family)) === e.extractionPath && a.add(n.variant.cubeCellId), e.ggirHasibVariantsEnabled && !e.placementFromSource) {
				const t = xe(e.ggirHasibCountSource);
				for (const n of e.ggirHasibVariants) {
					const s = Me.find((e) => e.algorithm === n), o = n === De ? "van_hees_2015" : r.find((e) => e.family === s?.slug)?.id;
					if (!o) continue;
					const i = At({
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
			const s = "ggir" === Ye(e.currentAlgorithm) ? e.nonwearDetectorsGgir : e.nonwearDetectorsCounts;
			return {
				classifierConfigIds: [...a],
				nonwearDetectors: 1 === s.length ? [...s] : [ye],
				studyNonwearSelection: [...s],
				rulesets: [e.placementRuleset],
				rescorings: [e.scorerPostprocessingPreset],
				periodSources: "smart" === e.periodGuider ? [w.diary, w.hdcza] : [ke(e.periodGuider, { hasDiary: !1 })?.source_a ?? w.diary]
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
	if (e === w.hdcza && r && null == r.hdczaWindow) return {
		included: !1,
		reason: "no HDCZA window stored for this day"
	};
	if (e === w.event_marker) {
		if (!a) return {
			included: !1,
			reason: "placement core predates the event-marker guider"
		};
		if (r && !r.eventMarkerTimestamps?.length) return {
			included: !1,
			reason: "no event-marker presses for this day"
		};
	}
	if (e === w.actiware_rest_interval) {
		if (!s) return {
			included: !1,
			reason: "placement core predates the Actiware rest-interval guider"
		};
		if (r && !r.actiwareRestWindow) return {
			included: !1,
			reason: "no Actiware rest interval for this day"
		};
	}
	const o = ve(n, we[e]);
	return null === o ? { included: !0 } : {
		included: !1,
		reason: `unsatisfied source capability: ${o.map((e) => `${e}=false`).join(", ") || "no implemented input signal"}`
	};
}
function Rt(e, t) {
	const n = Te[e];
	for (const r of n ?? []) if (r.length > 0 && r.every((e) => t.has(e))) return {
		included: !1,
		reason: `day input unavailable: ${r.join(" or ")}`
	};
	return { included: !0 };
}
async function Mt(e, t, n) {
	const r = _e(e);
	if (r && be(r, t.epochLengthSeconds) !== t.epochLengthSeconds) return async function(e, t, n) {
		const r = Float64Array.from(t.timestamps), a = t.activityCounts instanceof Float64Array ? t.activityCounts : Float64Array.from(t.activityCounts), s = await N(n, {
			timestamps: r,
			axisY: a,
			vectorMagnitude: /* @__PURE__ */ new Float64Array()
		}, t.epochLengthSeconds), o = (await W(n, { day: s }, ["day"], f, void 0, [e])).day?.get(e);
		return o?.available && o.nonwear ? { mask: await V(n, s.timestamps, o.nonwear, r) } : {
			mask: null,
			reason: o?.reason ?? null
		};
	}(e, t, n ?? h());
	const a = {
		counts: t.activityCounts instanceof Float64Array ? t.activityCounts : Float64Array.from(t.activityCounts),
		epochSeconds: t.epochLengthSeconds
	};
	t.nonwearSignals?.temperature && (a.temperature = new Float64Array(t.nonwearSignals.temperature)), t.nonwearSignals?.raw && (a.raw = t.nonwearSignals.raw), null != t.nonwearSignals?.sampleRate && (a.sampleRate = t.nonwearSignals.sampleRate);
	const s = await (n ?? h()).detectNonwearUnified({
		algorithm: e,
		signals: a
	});
	if (!s.available || null == s.nonwear) return {
		mask: null,
		reason: s.reason ?? null
	};
	if (s.elementSeconds === t.epochLengthSeconds && t.epochLengthSeconds > 0 && s.nonwear.length === t.timestamps.length && t.timestamps.every((e, n) => e === t.timestamps[0] + n * t.epochLengthSeconds) && s.nonwear.every((e) => 0 === e || 1 === e)) return { mask: s.nonwear };
	const o = We(s, t.timestamps[0] ?? 0);
	return { mask: (await (n ?? h()).rasterizePeriods(Float64Array.from(o, (e) => e.startTsSec), Float64Array.from(o, (e) => e.endTsSec), Float64Array.from(t.timestamps), t.epochLengthSeconds)).mask };
}
var It = class extends Error {
	workerLost;
	constructor(e = !1) {
		super("Precomputed variant masks could not be saved."), this.name = "ScoredVariantPersistenceError", this.workerLost = e;
	}
};
const Tt = /* @__PURE__ */ new WeakMap();
function Ot(e) {
	const t = JSON.stringify(e, (e, t) => t instanceof Uint8Array ? Array.from(t) : t);
	return `${String(t.length)}:${he(t)}`;
}
function zt(e, t) {
	for (const n of t) {
		if (e.notes.length >= 12) return;
		e.notes.includes(n) || e.notes.push(n);
	}
}
async function xt(e, t, { db: n = A(), signal: r, wasmApi: a, cancelOperation: i, narrowing: c } = {}) {
	const l = {
		computed: 0,
		skipped: 0,
		missingClassifier: 0,
		placementUnavailable: !1,
		notes: []
	}, u = a ?? h(), d = i ?? (() => {
		g(u);
	}), p = {
		wasmApi: u,
		signal: r,
		cancelOperation: d
	};
	R(r, "before scored-variant guider probes");
	const f = function(e) {
		const { classifierConfigIds: t, capabilities: n, hasDiary: r = !1, includeNonwearNone: a = !0, day: s } = e, i = [], c = s ? t.filter((e) => {
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
		for (const o of n.nonwearAlgorithms) {
			if (e.nonwearDetectors && !e.nonwearDetectors.includes(o)) continue;
			const t = s ? Rt(o, l) : { included: !0 };
			t.included ? u.push(o) : i.push({
				axis: "nonwear",
				value: o,
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
		const f = a ? ["none", ...u] : u, g = [], h = 2 === e.periodSources?.length && e.periodSources[0] === w.diary && e.periodSources[1] === w.hdcza ? [r ? w.diary : w.hdcza] : e.periodSources;
		for (const o of Object.values(w)) {
			if (h && !h.includes(o)) continue;
			const t = Et(o, r, n, {
				day: s,
				eventMarkerGuider: e.eventMarkerGuider ?? !1,
				actiwareRestGuider: e.actiwareRestGuider ?? !1
			});
			t.included ? g.push(o) : i.push({
				axis: "periodSource",
				value: o,
				reason: t.reason
			});
		}
		const y = e.rulesets ?? [m.LEGACY, m.REGULARITY_V2], v = e.rescorings ?? [o.NONE, o.WEBSTER], b = {
			classifierConfigIds: [...c],
			nonwear: f,
			periodSource: g,
			ruleset: y,
			rescoring: v
		}, S = [], k = /* @__PURE__ */ new Set();
		for (const o of c) for (const e of f) for (const t of g) for (const n of y) for (const r of v) {
			const a = gt({
				classifierConfigId: o,
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
		actiwareRestGuider: !!e.actiwareRestWindow && await mt(s.ACTIWARE_REST_INTERVAL, p),
		...c
	});
	if (0 === f.variants.length) return l;
	const y = f.variants.filter((t) => !e.precomputedVariantMasks[t.id]);
	if (l.skipped = f.variants.length - y.length, 0 === y.length) return l;
	const v = {};
	R(r, "before scored-variant nonwear computation");
	const b = await x(u, (t) => async function(e, t, n) {
		const r = {};
		for (const a of new Set(t)) "none" !== a && "study_selection" !== a && (r[a] = await Mt(a, e, n));
		return r;
	}({
		timestamps: e.timestamps,
		activityCounts: e.activityCounts,
		epochLengthSeconds: e.epochLengthSeconds,
		...e.temperature ? { nonwearSignals: { temperature: e.temperature } } : {}
	}, function(e) {
		return [.../* @__PURE__ */ new Set([...e.axes.nonwear, ...e.studyNonwearSelection ?? []])];
	}(f), t), {
		ms: $,
		label: "scored-variant nonwear computation",
		signal: r,
		cancel: d
	});
	for (let s = 0; s < y.length; s += 2e3) {
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
			variants: y.slice(s, s + 2e3).map((e) => ({
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
		let o = Tt.get(u);
		o || (o = /* @__PURE__ */ new Map(), Tt.set(u, o));
		const c = o.get(a) ?? await x(u, (e) => e.runScoredVariantBatch(t), {
			ms: 3e5,
			label: "scored-variant warm computation",
			signal: r,
			cancel: i ?? (() => {
				g(u);
			})
		});
		if (0 === Object.keys(c.masks).length && o.set(a, c), R(r, "after scored-variant warm computation"), Object.assign(v, c.masks), l.computed += Object.keys(c.masks).length, l.missingClassifier += c.missingClassifier, zt(l, c.notes), c.placementUnavailable) {
			l.placementUnavailable = !0;
			break;
		}
	}
	if (Object.keys(v).length > 0) {
		let t;
		try {
			R(r, "before scored-variant warm persistence");
			const { controller: a, release: s } = O(r);
			t = s;
			const o = a.signal;
			if (!await x(u, (t) => Z(e.fileId, e.analysisDate, v, e.diaryFingerprint, n, t, o), {
				ms: 3e5,
				label: "scored-variant warm persistence",
				signal: void 0,
				cancel: () => {
					a.abort(), d();
				}
			})) throw new It();
		} catch (S) {
			r?.aborted && d(), M(S, r, "scored-variant warm persistence");
			const e = S instanceof Error && "QuotaExceededError" === S.name ? "QuotaExceededError" : "Error";
			throw console.warn("[scored-variant-warm] Precomputed mask persistence failed.", e), Ue("warn", "Precomputed variant mask persistence failed", { error_type: e }), new It(I(S));
		} finally {
			t?.();
		}
	}
	return l;
}
const Ft = /* @__PURE__ */ new WeakMap();
async function $t(e, t, n, r) {
	const a = Ft.get(e)?.get(t);
	return a ? Promise.all(a.map(async (e) => {
		let t = e.run.answers.get(n);
		return t || (t = r(e.run.group, e.run.probabilities), e.run.answers.set(n, t)), {
			...e,
			value: await t
		};
	})) : null;
}
function jt(e, t) {
	Ft.set(e, t);
}
function Dt(e) {
	const t = new Uint8Array(e.length);
	return t.set(e), t.buffer;
}
function Nt(e) {
	const t = {}, n = [];
	for (const [r, a] of Object.entries(e ?? {})) {
		if (!a) continue;
		const e = y(r);
		if (!e) throw new Error(`sleep/wake output ${r} is not a declared AlgorithmRunKey (core.yaml)`);
		const s = Dt(a);
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
function Vt(e, t, n, r, a) {
	a && 0 !== a.length && (e[Ce(t, n, r)] = new Float64Array(a));
}
function Wt(e, t, n, r) {
	const a = {};
	Vt(a, "neishabouri", "x", t, e.axisX), Vt(a, "neishabouri", "y", t, e.axisY), Vt(a, "neishabouri", "z", t, e.axisZ), Vt(a, "neishabouri", "vm", t, e.vectorMagnitude), Vt(a, "zero_crossing", "x", t, e.zeroCrossingX), Vt(a, "zero_crossing", "y", t, e.zeroCrossingY), Vt(a, "zero_crossing", "z", t, e.zeroCrossingZ);
	const s = e.counts30s;
	s && 30 !== t && (Vt(a, "neishabouri", "x", 30, s.axisX), Vt(a, "neishabouri", "y", 30, s.axisY), Vt(a, "neishabouri", "z", 30, s.axisZ), Vt(a, "neishabouri", "vm", 30, s.vectorMagnitude), Vt(a, "zero_crossing", "x", 30, s.zeroCrossingX), Vt(a, "zero_crossing", "y", 30, s.zeroCrossingY), Vt(a, "zero_crossing", "z", 30, s.zeroCrossingZ));
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
const Lt = /* @__PURE__ */ new Map();
function Yt(e, t, n, r = !1, a) {
	const s = r && 30 !== e ? [30, e] : [e], o = s.join(","), i = t ? `${o}|lstm|${n.id}|${n.label}|selected:${String(a ?? "none")}|${JSON.stringify(n.thresholdPresets ?? null)}` : `${o}|nolstm`, c = Lt.get(i);
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
	return Lt.set(i, l), l;
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
async function Ht(e, t, r, a) {
	const [s, o, i, c] = await Promise.all([
		a.files.get(e),
		oe(e, a),
		a.markers.where("fileId").equals(e).toArray(),
		a.actiwareFileData.get(e)
	]);
	return "warm-v3:" + he({
		plan: Gt(t, r),
		series: [
			s?.sourceType,
			s?.sourceContentHash,
			s?.seriesRevision ?? 0,
			s?.epochLengthSeconds,
			s?.availableDates
		],
		geometry: o.some((e) => !e.importMappingProvenance?.diaryTemporalPolicy) ? B() : null,
		diaries: o.map((e) => ({
			date: e.analysisDate,
			inBed: e.diaryInBedTime,
			onset: e.diaryOnsetTime,
			wake: e.diaryWakeTime,
			outOfBed: e.diaryOutOfBedTime,
			overlay: e.decisionOverlayJson,
			policy: e.importMappingProvenance?.diaryTemporalPolicy,
			naps: re(e),
			nonwear: L(e)
		})),
		hdcza: i.filter((e) => "auto_score" === e.username && e.algorithm === n.VAN_HEES_2015).map((e) => ({
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
async function Kt(e, t, n, r, a = A(), s, o, i, c = Ct(se.getState()), l) {
	const u = a;
	if (!n) return Bt;
	const d = await ne(e, u);
	if (d?.sourceType && !Ee(d.sourceType, "local")) return Bt;
	const m = { ...Bt }, p = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), g = await G(e, u).then((e) => ({
		fileRecord: d,
		activitySpan: e
	}), () => ({ fileRecord: d })), h = c?.(g.fileRecord), w = await Ht(e, n, h, u), y = /* @__PURE__ */ new Set();
	if ((g.fileRecord?.epochLengthSeconds ?? 60) > 60) return Bt;
	let v = /* @__PURE__ */ new Map();
	const b = (t) => {
		let n = v.get(t);
		return n || (n = q(e, t, u), v.set(t, n)), n;
	};
	let S = !1;
	const k = me((t, n) => {
		t === e && n === u && (S = !0);
	}), _ = t.length;
	let C = 0;
	r?.({
		phase: "variants",
		percent: 98,
		message: `0/${String(_)} days`
	});
	const T = () => {
		C >= _ || (C += 1, r?.({
			phase: "variants",
			percent: 0 === _ ? 100 : 98 + 2 * C / _,
			message: `${String(C)}/${String(_)} days`
		}));
	};
	let O = !1;
	try {
		let r = t;
		for (let a = 0; a < 2; a++) {
			v = /* @__PURE__ */ new Map();
			for (const t of r) if (O) f.add(t), T();
			else {
				performance.now(), m.variantsComputed;
				for (const e of v.keys()) e < t && v.delete(e);
				try {
					R(s, "before scored-variant warm day load");
					const r = await E(() => ct(e, t, u, {
						...g,
						readDay: b,
						wasmApi: o
					}), $, "scored-variant day load", s, i ?? (() => {}));
					if (R(s, "after scored-variant warm day load"), !r || 0 === Object.keys(r.classifierOutputs).length) {
						T();
						continue;
					}
					const a = await xt(r, n, {
						db: u,
						signal: s,
						wasmApi: o,
						cancelOperation: i,
						narrowing: h
					});
					y.delete(t), m.variantsComputed += a.computed, p.has(t) || (m.variantsSkipped += a.skipped), a.placementUnavailable || 0 !== a.missingClassifier ? f.add(t) : (p.add(t), f.delete(t)), T(), a.placementUnavailable && console.warn("[local-processing] Scored-variant warm placement was unavailable.");
				} catch (x) {
					M(x, s, "scored-variant warm"), console.warn("[local-processing] Scored-variant warm failed."), I(x) && (O = !0), x instanceof Error && "ScoredVariantPersistenceError" === x.name && y.add(t), f.add(t), T();
				}
			}
			if (O || a > 0 || !S && 0 === f.size) break;
			r = S ? t : [...f], S = !1;
		}
	} finally {
		k(), v = /* @__PURE__ */ new Map(), m.dayCount = p.size, s?.aborted && l && await Jt(() => Promise.resolve(), e, m, l);
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
async function Jt(e, t, n, r, a) {
	await e(), 0 !== n.variantsComputed && await ze.recordWorkspaceBoundDurably(r, C.SYSTEM_RECALCULATION, {
		subject: "scored_variant_precompute",
		fileId: t,
		dayCount: n.dayCount,
		variantsComputed: n.variantsComputed,
		variantsSkipped: n.variantsSkipped,
		trigger: "file_processing"
	});
}
function Zt() {
	return F(_.SCORED_VARIANT_WARM);
}
function Xt(e, t = {}) {
	const n = t.db ?? A();
	return z({
		kind: _.SCORED_VARIANT_WARM,
		key: pe(e),
		label: "Scoring variants",
		workspaceId: n.name,
		signal: t.signal,
		rerun: !0,
		run: (r) => async function(e, { forget: t = !1, resumeIncomplete: n = !1, retryKnownFailures: r = !0, db: a = A() }, s) {
			try {
				if (A() !== a) return;
				const o = await a.files.get(e);
				if (A() !== a || !o || "incomplete" === o.ingestState || 0 === o.availableDates.length || !o.sourceType || o.epochLengthSeconds > 60) return;
				const i = se.getState(), { username: c, selectedStudyId: l } = i, u = Ee(o.sourceType, "local");
				if (!u) return;
				const d = Ct(i);
				if (!t && !n) return;
				const m = await Ht(e, u, d(o), a);
				if (A() !== a) return;
				if (!t && o.scoredVariantWarm?.outcome && o.scoredVariantWarm.inputs === m && (!r || "known-failures" !== o.scoredVariantWarm.outcome)) return;
				const p = o.scoredVariantWarm;
				if (!await P(a, [
					a.files,
					a.diaryEntries,
					a.markers,
					a.actiwareFileData,
					a.scoredVariantMasks
				], async () => {
					const n = await a.files.get(e);
					if (A() !== a || !n || JSON.stringify(n.scoredVariantWarm) !== JSON.stringify(p)) return !1;
					const r = await Ht(e, u, d(n), a);
					if (A() !== a || r !== m) return !1;
					if (n.scoredVariantWarm && (!n.scoredVariantWarm.outcome || n.scoredVariantWarm.inputs !== m) && (await a.scoredVariantMasks.where("fileId").equals(e).delete(), A() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					if ((t || n.scoredVariantWarm) && (await a.files.where(":id").equals(e).modify((e) => {
						delete e.scoredVariantWarm;
					}), A() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					return !0;
				}, s.signal) || A() !== a) return;
				await async function(e, t, n, r, a, s, o) {
					let i = !1;
					const c = () => {
						i = !0, Ue("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" });
					};
					if (A() !== a) return;
					fe({
						fileId: e,
						done: 0,
						total: t.length
					}, a);
					const l = v(() => {
						A() !== a && S.getState().cancel(`${a.name}:${pe(e)}`);
					}), u = new AbortController(), d = () => {
						u.abort();
					};
					o.signal.addEventListener("abort", d, { once: !0 });
					try {
						const i = await Kt(e, t, n, (e) => {
							o.progress(Number.parseInt(e.message, 10), t.length, e.message);
						}, a, o.signal, T(u.signal), d, s, r);
						await Jt(() => Promise.resolve(), e, i, r, o.signal), o.signal.throwIfAborted(), i.dayFailures > 0 && (console.warn("[local-processing] Some days could not be precomputed; reimport the file to retry."), c());
					} catch {
						if (o.signal.aborted) return;
						console.warn("[local-processing] Background scored-variant warm failed."), c();
					} finally {
						o.signal.removeEventListener("abort", d), l(), fe(i && !o.signal.aborted && A() === a ? {
							fileId: e,
							done: ge()?.done ?? 0,
							total: t.length,
							failed: !0
						} : null, a);
					}
					if (i) throw new Error("Background scored-variant warm failed.");
				}(e, o.availableDates, u, ze.captureWorkspaceBinding(a, {
					username: c,
					studyId: l,
					signal: s.signal
				}), a, d, s);
			} catch {
				if (s.signal.aborted) return;
				console.warn("[local-processing] Scored-variant warm could not be scheduled."), Ue("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" }), A() === a && fe({
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
		kind: _.VARIANT_RECOVERY,
		key: _.VARIANT_RECOVERY,
		label: "Resume scoring variants",
		workspaceId: e.name,
		signal: n,
		run: async (n) => {
			await e.projectMeta.get(le);
			const r = (e) => null != e.id && "incomplete" !== e.ingestState && Boolean(e.sourceType && Ee(e.sourceType, "local")) && e.availableDates.length > 0 && !(e.epochLengthSeconds > 60), a = (await H(e)).filter(r);
			for (const o of a) {
				if (A() !== e) return;
				await Xt(o.id, {
					db: e,
					resumeIncomplete: !0,
					retryKnownFailures: t,
					signal: n.signal
				}), await n.yieldNow();
			}
			if (A() !== e || !e.isOpen()) return;
			const s = Ct(se.getState());
			await P(e, [
				e.projectMeta,
				e.files,
				e.diaryEntries,
				e.markers,
				e.actiwareFileData
			], async () => {
				const n = [], o = (await H(e)).filter(r);
				for (const r of o) {
					const o = Ee(r.sourceType, "local"), i = await Ht(r.id, o, s(r), e), c = (await e.files.get(r.id))?.scoredVariantWarm;
					if (!c?.outcome || c.inputs !== i || A() !== e) return void await e.projectMeta.delete(le);
					n.push([r.id, i]), "known-failures" !== c.outcome || a.find((e) => e.id === r.id)?.scoredVariantWarm?.inputs === i && !t || fe({
						fileId: r.id,
						done: r.availableDates.length,
						total: r.availableDates.length,
						failed: !0
					}, e);
				}
				await e.projectMeta.put({
					key: le,
					revision: Number.parseInt(he(n), 16)
				});
			}, n.signal);
		}
	}).catch((t) => {
		if (n?.aborted || t instanceof DOMException && "AbortError" === t.name) throw t;
		throw Ue("warn", "Background scored-variant warm failed", { error_type: "Error" }), fe({
			fileId: 0,
			done: 0,
			total: 0,
			failed: !0
		}, e), /* @__PURE__ */ new Error("Stored scoring variants could not be resumed.");
	});
}
async function Qt(e, t, n, r, a) {
	const s = r ?? h(), o = await $t(s, e, `cube:${String(t)}:${JSON.stringify(a)}`, (e, n) => Qt(e, t, n, s, a));
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
	const i = Xe(a), c = qe(i.modelId), l = Yt(t, !!n && n.length > 0 && "unconfigured" !== c.id, c, !!e.counts30s && e.counts30s.axisY.length > 0, i.threshold ?? void 0), u = await async function(e) {
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
		const t = Dt(g);
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
	const r = n ?? h(), a = await $t(r, e, `hasib:${JSON.stringify(t)}`, (e) => tn(e, t, r));
	if (a) {
		const t = {};
		for (const n of a) for (const [r, a] of Object.entries(n.value)) {
			if (!a) continue;
			const s = t[r] ?? new Uint8Array(e.timestamps.length);
			s.set(a.slice(n.start, n.end), n.offset), t[r] = s;
		}
		return t;
	}
	const s = (t.variants ?? $e).filter((e) => e !== De);
	if (0 === s.length) return {};
	const o = t.countSource ?? "neishabouri_vm_60s";
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
	}(e, o)) return {};
	const i = Float64Array.from(e.timestamps), c = (r.medianGapSeconds ? await r.medianGapSeconds(i) : await h().medianGapSeconds(i)) ?? t.countEpochSeconds ?? 60, l = await je({
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
async function nn(e, t, n) {
	const r = n ?? h(), a = await $t(r, e, `ggir:${String(t)}`, (e) => nn(e, t, r));
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
	const s = await je({
		backend: n ?? h(),
		variants: ["Sadeh1994", "ColeKripke1992"],
		anglez5s: /* @__PURE__ */ new Float64Array(),
		zeroCrossingY60s: new Float64Array(e.zeroCrossingY),
		countSource: "zero_crossing_y_60s",
		countEpochSeconds: t
	}), o = Fe("sadeh_1994"), i = Fe("cole_kripke_1992"), c = s.find((e) => e.variant === o)?.result.sib, l = s.find((e) => e.variant === i)?.result.sib;
	return c && l ? {
		sadeh: c,
		ck: l
	} : null;
}
async function rn(e, t) {
	const n = [], r = e.sadeh_1994_actilife.length, a = (e) => {
		e && e.length === r && n.push(e);
	};
	a(e.sadeh_1994_actilife), a(e.sadeh_1994_original), a(e.cole_kripke_1992_actilife), a(e.cole_kripke_1992_original), a(e.sadeh_1994_ggir), a(e.cole_kripke_1992_ggir), a(e.lstm_sleep_wake);
	for (const [s, o] of Object.entries(e.hasibVariants ?? {})) s !== b.TENSOR_MAJORITY_VOTE && s !== b.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== c(s)?.grammarId && a(o);
	for (const [s, o] of Object.entries(e.cubeOutputs ?? {})) s !== b.TENSOR_MAJORITY_VOTE && s !== b.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== c(s)?.grammarId && a(o);
	return 0 === n.length ? new Uint8Array(r) : t.scoreConsensus("majority_tie_sleep", n);
}
me((e, t, n) => {
	Xt(e, {
		resumeIncomplete: !0,
		retryKnownFailures: !1,
		db: t,
		signal: n
	}).catch(() => {});
});
export { Ut as _resetCubePlanCacheForTest, Zt as awaitScheduledScoredVariantWarms, qt as backfillInterruptedScoredVariantWarms, Yt as buildOrReuseAlgorithmOutputCubePlan, Dt as cloneOutputBuffer, rn as computeTensorConsensusForDay, Pt as cubeRunsOnGrid, Jt as finalizeAndAuditScoredVariantWarm, Xt as rewarmFileScoredVariants, Qt as runAlgorithmCubeForDay, nn as scoreBuiltinGgirSadehColeForDay, tn as scoreCountBasedHasibVariantsForDay, Nt as sleepWakeToPersistedOutputs, jt as t, Kt as warmFileScoredVariants, en as withRecordingWakeThreshold };
