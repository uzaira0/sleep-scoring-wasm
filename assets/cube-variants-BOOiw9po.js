import { $t as e, Ct as t, E as n, K as a, X as s, _t as o, cn as i, gt as c, ht as l, in as u, ln as d, nt as m, on as p, rt as f } from "./schema-BhIoHe9M.js";
import { i as g, r as h } from "./workers-DmTzGLlL.js";
import { l as w } from "./legacy-invalid-night-zjKZRSNb.js";
import { H as y, L as v, M as b, P as S, l as k } from "./local-data-source-ABkTdWMs.js";
import { F as _, K as A, L as C, X as E, i as R, q as I, t as T, v as M } from "./workspace-db-B23VU-DP.js";
import { d as O, f as z, g as x, l as F, m as $, n as j, o as D, p as N, t as V } from "./background-jobs-BuvVRgh1.js";
import { C as P, f as W, p as L, x as U } from "./nonwear-display-slots-BFsz5AaU.js";
import { a as Y } from "./project-revision-BjsdF3mV.js";
import { At as H, Dt as B, Ft as G, Ht as K, Lt as J, Mt as X, Nt as Z, Ot as q, P as Q, Ut as ee, W as te, _ as ne, _t as re, dt as ae, ft as se, ht as oe, j as ie, k as ce, qt as le, r as ue, tn as de, zt as me } from "./store-B8Nrfol3.js";
import { A as pe, D as fe, M as ge, N as he, T as we, W as ye, j as ve } from "./night-session-registry-IIptBbXj.js";
import { $ as be, Q as Se, S as ke, T as _e, Z as Ae, b as Ce, ct as Ee, it as Re, l as Ie, nt as Te, st as Me, tt as Oe, w as ze, x as xe } from "./per-source-defaults-aJZ8Uk6V.js";
import { t as Fe } from "./audit-log-D2qIxr9k.js";
import { C as $e, E as je, S as De, T as Ne, w as Ve } from "./ggir-results-import-DhqbPZWT.js";
import { A as Pe, F as We, I as Le, M as Ue, O as Ye, P as He, j as Be, q as Ge, x as Ke } from "./local-nonwear-unified-M0U_VgvH.js";
import { E as Je } from "./local-export-worker-DjsNNmt7.js";
import { i as Xe, n as Ze } from "./lstm-model-manager-UbskUhvF.js";
var qe = class extends Error {};
async function Qe(e, n, r, o) {
	switch (e.family) {
		case "count_hasib": return async function(e, n, r) {
			const o = e.input.seriesKey, i = Ne(o), u = r.counts?.[o];
			if (!u || 0 === u.length) throw new qe(`Missing count input ${o}.`);
			if ("string" == typeof e.parameters.implementation) return et(e), async function(e, t, n) {
				const r = function(e) {
					const t = c(e.id);
					if (null === t || "count_cell" !== t.grammarId) return null;
					const n = t.values.method_family, r = t.values.implementation_variant;
					return void 0 === n || void 0 === r ? null : a.find((e) => e.methodFamilyId === n && e.implementationVariantId === r)?.primitiveId ?? null;
				}(e);
				if ("sadeh" === r) {
					if (!t.scoreSadeh) throw new Error("Registry Sadeh primitive (scoreSadeh) unavailable on this worker bundle.");
					const r = s.scoring_threshold, a = "number" == typeof r ? r : 0, o = "number" == typeof e.parameters.threshold ? e.parameters.threshold : a;
					return t.scoreSadeh(n, o);
				}
				if ("cole_kripke" === r) {
					if (!t.scoreColeKripke) throw new Error("Registry Cole-Kripke primitive (scoreColeKripke) unavailable on this worker bundle.");
					const r = !0 === e.parameters.useActilifeScaling;
					return t.scoreColeKripke(n, r);
				}
				throw new Error(`Unsupported provenance count scorer ${e.algorithm}.`);
			}(e, n, u);
			const d = function(e) {
				if ($e.includes(e.algorithm)) return null;
				const n = c(e.id)?.values.method_family, r = t.find((e) => "sleep_wake" === e.kind && e.family === n), a = r?.nativeEpochSeconds;
				return !r || 30 !== a && 60 !== a ? null : {
					methodId: r.id,
					nativeEpochSeconds: a
				};
			}(e);
			if (d) return async function(e, t, n, r) {
				const a = Ne(e.input.seriesKey), s = l(a.family, a.axis, t.nativeEpochSeconds), o = r.counts?.[s];
				if (!o || 0 === o.length) throw new qe(`Missing native count input ${s}.`);
				if (!n.scoreEpochs || !n.foldOntoGrid) throw new Error("The typed epoch scorer (scoreEpochs) is unavailable on this worker bundle.");
				const i = await n.scoreEpochs({
					algorithm: t.methodId,
					signals: {
						counts: o,
						epochSeconds: t.nativeEpochSeconds
					}
				}), c = v(i, o.length);
				if (!c) throw new Error(`${t.methodId}: ${i.reason ?? "the scorer returned no series"}`);
				if (e.epochSeconds === t.nativeEpochSeconds) return c;
				const u = r.timestamps?.[t.nativeEpochSeconds], d = r.timestamps?.[e.epochSeconds];
				if (!u || !d || u.length !== c.length) throw new qe(`Missing the timestamps that align ${s} with the ${String(e.epochSeconds)} s grid.`);
				const m = await n.foldOntoGrid(u, Float64Array.from(c), d, e.epochSeconds, "majority_ties_sleep");
				return Uint8Array.from(m);
			}(e, d, n, r);
			et(e);
			const m = (await je({
				backend: n,
				variants: [e.algorithm],
				anglez5s: /* @__PURE__ */ new Float64Array(),
				countSource: o,
				countEpochSeconds: i.epochSeconds,
				..."neishabouri" === i.family ? { neishabouriCounts: { [i.axis]: u } } : { zeroCrossingCountsByAxis: { [i.axis]: u } }
			}))[0];
			if (!m) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return m.result.sib;
		}(e, n, r);
		case "angle_hasib": return async function(e, t, n) {
			const r = m.angle_hasib;
			if (void 0 === r || e.algorithm !== r.algorithmValue) throw new Error(`Unsupported angle-HASIB algorithm ${e.algorithm}.`);
			if (!n.anglez5s || 0 === n.anglez5s.length) throw new qe(`Missing ${r.inputSeriesKey} input.`);
			const a = (await je({
				backend: t,
				variants: [e.algorithm],
				anglez5s: n.anglez5s,
				countSource: l(f, "y", 60)
			}))[0];
			if (!a) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return a.result.sib;
		}(e, n, r);
		case "lstm": return async function(e, t, n) {
			const r = "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm, a = n.lstmProbabilities?.[r];
			if (!a || 0 === a.length) throw new qe(`Missing LSTM probabilities for ${r}.`);
			const o = s.model_threshold, i = "number" == typeof e.parameters.threshold ? e.parameters.threshold : "number" == typeof o ? o : .5;
			if (!t.thresholdProbabilities) throw new Error("The probability threshold (thresholdProbabilities) is unavailable on this worker bundle.");
			return t.thresholdProbabilities(Float64Array.from(a), i);
		}(e, n, r);
		case "consensus": return async function(e, t, n) {
			const r = (Array.isArray(e.parameters.inputConfigIds) ? e.parameters.inputConfigIds.filter((e) => "string" == typeof e) : e.lineage).map((e) => {
				const n = t[e];
				if (!n) throw new qe(`Missing consensus input ${e}.`);
				return n;
			});
			if (0 === r.length) throw new Error("Consensus requires at least one input.");
			const a = r[0].length;
			for (const s of r) if (s.length !== a) throw new Error(`Consensus inputs are not aligned (${String(s.length)} vs ${String(a)} epochs).`);
			const o = "string" == typeof e.parameters.strategy ? e.parameters.strategy : s.consensus_strategy;
			return n.scoreConsensus(o, r);
		}(e, o, n);
	}
}
function et(e) {
	const t = c(e.id)?.values, n = t?.implementation_variant, r = Re(String(t?.method_family), void 0 === n ? void 0 : String(n));
	if (!r.includes(e.epochSeconds)) throw new Error(`programming error: ${e.id} reached the runner, but ${e.algorithm} is valid only at ${r.join(", ")} s and the planner never plans it.`);
}
function tt(e) {
	return Ee(e ?? null);
}
function nt(e) {
	return K(e).map((e) => [e.start, e.end]);
}
function rt(e) {
	return ee(e).map((e) => [e.start, e.end]);
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
async function ot(t, n, r) {
	const a = await he(t, n, ye, e.VAN_HEES_2015, void 0, r), s = a?.sleepMarkers.find((e) => e.markerType === u.MAIN_SLEEP) ?? a?.sleepMarkers[0];
	return null != s?.onsetTimestamp && null != s.offsetTimestamp ? [s.onsetTimestamp, s.offsetTimestamp] : null;
}
async function it(e, t, n = T(), r = {}) {
	const a = n, s = r.readDay ?? ((t) => ne(e, t, a)), o = await L(e, t, a, s, r.fileRecord?.navigationFacts, r.wasmApi);
	if (!o) return null;
	const i = await s(await W(t, r.fileRecord?.navigationFacts, r.wasmApi)), c = (i ? [o, i] : [o]).filter((e) => e.timestamps.byteLength > 0), l = at(c.map((e) => e.timestamps)), { startIndex: u, endIndex: d } = await Je(l, t, r.wasmApi);
	if (d <= u) return null;
	const m = l.subarray(u, d), p = Array.from(m), f = Array.from(at(c.map((e) => e.axisY)).subarray(u, d)), g = re(c[0], r.fileRecord) ?? await oe(m, 60, r.wasmApi), h = await ie(e, a, r.fileRecord ? { file: r.fileRecord } : void 0), w = {}, y = {}, v = {};
	for (const T of h.cellIds) {
		const e = h(T), t = le(c, e);
		if ("stale" === t.status) {
			y[T] = t.reason;
			continue;
		}
		const n = t.outputs.filter((e) => null != e);
		if (n.length !== c.length) continue;
		const a = await Promise.all(n.map(async (e, t) => (await U(c[t], new Uint8Array(e), r.wasmApi))?.buffer ?? e));
		w[T] = Array.from(st(a).subarray(u, d)), "ok" === e.status && null !== e.configHash && (v[T] = e.configHash);
	}
	const [b, S, k, _, A, C] = await Promise.all([
		ot(e, t, a),
		se(e, t, a),
		"activitySpan" in r ? r.activitySpan ?? null : G(e, a),
		a.scoredVariantMasks.get([e, t]),
		a.actiwareFileData.get(e),
		r.fileRecord ?? ce(e, a)
	]), E = Le(A?.actiwareIntervals, t), R = S ? await J(S, k, r.wasmApi) : null, I = p[0] ?? 0, M = (p[p.length - 1] ?? I) + g, O = c.flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter((e) => e >= I && e < M), z = R ? {
		diaryInBedTime: B(x = R),
		onsetTime: q(x),
		diaryWakeTime: H(x),
		naps: nt(x),
		nonwear: rt(x)
	} : void 0;
	var x;
	const F = "warm-v3:" + Ee({
		diary: tt(z),
		actiwareRestWindow: E,
		eventMarkerTimestamps: O,
		hdczaWindow: b,
		seriesRevision: C?.seriesRevision ?? 0,
		classifierConfigHashes: Object.keys(v).length > 0 ? v : void 0
	}), $ = _?.diaryFingerprint === F, j = {};
	if (_?.masks && $) for (const [T, V] of Object.entries(_.masks)) V.byteLength === p.length && (j[T] = new Uint8Array(V));
	const D = c.flatMap((e) => e.temperature && e.temperature.byteLength > 0 ? [e.temperature] : []), N = D.length === c.length ? Array.from(at(D).subarray(u, d)) : void 0;
	return {
		fileId: e,
		analysisDate: t,
		timestamps: p,
		activityCounts: f,
		epochLengthSeconds: g,
		hdczaWindow: b,
		...O.length > 0 ? { eventMarkerTimestamps: O } : {},
		...E ? { actiwareRestWindow: E } : {},
		classifierOutputs: w,
		...Object.keys(y).length > 0 ? { staleClassifierCells: y } : {},
		precomputedVariantMasks: j,
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
		periodGuider: p.EVENT_MARKER,
		eventMarkerTimestamps: [e + 37800, e + 66600]
	};
}
E();
const lt = {
	[p.EVENT_MARKER]: {
		reason: "Needs an actours core with the event-marker guider (next pin).",
		note: "Event-marker source:",
		night: ct
	},
	[p.ACTIWARE_REST_INTERVAL]: {
		reason: "Needs an actours core with the Actiware rest-interval guider (next pin).",
		note: "Actiware rest-interval source:",
		night: () => {
			const e = Date.UTC(2024, 0, 1, 12) / 1e3;
			return {
				...ct(),
				periodGuider: p.ACTIWARE_REST_INTERVAL,
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
	const s = lt[e], o = D(n, (e) => y({
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
		if (r.delete(e), $(n, t.signal, "scored-variant guider probe"), N(n)) throw n;
		return !1;
	});
	return t.signal || r.set(e, o), o;
}
function mt(e = {}) {
	return dt(p.EVENT_MARKER, e);
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
	}, r = "study_selection" === n.nonwear && t?.length ? `${n.nonwear}_${[...new Set(t)].sort().join("_")}` : n.nonwear;
	return {
		id: o("scored_variant", {
			classifier_config_id: n.classifierConfigId,
			nonwear: r,
			period_source: n.periodSource,
			ruleset: n.ruleset,
			rescoring: n.rescoring
		}),
		configHash: Ee({
			...n,
			nonwear: r
		}),
		config: n
	};
}
const gt = "cube_cell_absent", ht = new Map(t.map((e) => [e.id, e])), wt = new Set(Se.map((e) => e.slug)), yt = [30, 60];
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
const St = m.angle_hasib?.configId ?? "";
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
	const n = e.algorithm.trim(), r = ht.get(n);
	if (!r) return vt("unknown_algorithm", `algorithm "${e.algorithm}" is not a known AlgorithmType`);
	if (t.capabilities && !t.capabilities.sleepAlgorithms.includes(n)) return vt("capability_unavailable", `algorithm "${n}" is not available for this file's capabilities`);
	if ("van_hees_2015" === n) return function() {
		const e = bt(St, () => be({
			includeFamilies: ["angle_hasib"],
			includeConsensus: !1
		}).configs);
		return e ? kt(e) : vt(gt, "the van_hees_2015 angle cell was not present in the cube plan");
	}();
	const a = r.family ?? "";
	return "sleep_wake" === r.kind && wt.has(a) ? function(e, t) {
		const n = e.countMetric.trim();
		if (r = n, !Object.prototype.hasOwnProperty.call(Ae, r)) return vt("unknown_count_metric", `count metric "${e.countMetric}" is not a cube count source (expected neishabouri or zero_crossing)`);
		var r;
		const a = e.axis.trim();
		if (!Ae[n].includes(a)) return vt("incompatible_axis", `axis "${e.axis}" is not available for count metric "${n}"`);
		const s = e.epochSeconds;
		if (!yt.includes(s)) return vt("unsupported_epoch", `epoch length ${String(s)}s is not a count-cube epoch (expected 30 or 60)`);
		const i = s, c = o("count_cell", {
			method_family: t,
			count_family: n,
			axis: a,
			epoch_seconds: i
		}), l = bt(c, () => be({
			includeFamilies: ["count_hasib"],
			includeConsensus: !1,
			epochSeconds: [i]
		}).configs);
		return l ? kt(l) : vt(gt, `derived cube cell "${c}" was not present in the cube plan`);
	}(e, a) : vt("not_a_cube_scorer", `algorithm "${n}" has no directly scorer-addressable count/angle cube cell`);
}
function At(e) {
	return (n) => {
		const r = Ie(e, n);
		return function(e) {
			const n = Pe(e.currentAlgorithm), r = _t({
				...n,
				algorithm: He(n.family, n.implementation) ?? e.currentAlgorithm,
				sleepDetectionRule: e.sleepDetectionRule,
				placementRuleset: e.placementRuleset,
				scorerPostprocessingPreset: e.scorerPostprocessingPreset
			}), a = /* @__PURE__ */ new Set();
			if (!e.placementFromSource && r.ok && Be(Ue(n.family)) === e.extractionPath && a.add(r.variant.cubeCellId), e.ggirHasibVariantsEnabled && !e.placementFromSource) {
				const n = Ne(e.ggirHasibCountSource);
				for (const r of e.ggirHasibVariants) {
					const s = Se.find((e) => e.algorithm === r), o = r === De ? "van_hees_2015" : t.find((e) => e.family === s?.slug)?.id;
					if (!o) continue;
					const i = _t({
						algorithm: o,
						countMetric: n.family,
						axis: n.axis,
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
				nonwearDetectors: 1 === s.length ? [...s] : [We],
				studyNonwearSelection: [...s],
				rulesets: [e.placementRuleset],
				rescorings: [e.scorerPostprocessingPreset],
				periodSources: "smart" === e.periodGuider ? [_.diary, _.hdcza] : [Ge(e.periodGuider, { hasDiary: !1 })?.source_a ?? _.diary]
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
	if (xe.includes(e) && !t) return {
		included: !1,
		reason: "no diary for this day"
	};
	if (e === _.hdcza && r && null == r.hdczaWindow) return {
		included: !1,
		reason: "no HDCZA window stored for this day"
	};
	if (e === _.event_marker) {
		if (!a) return {
			included: !1,
			reason: "placement core predates the event-marker guider"
		};
		if (r && !r.eventMarkerTimestamps?.length) return {
			included: !1,
			reason: "no event-marker presses for this day"
		};
	}
	if (e === _.actiware_rest_interval) {
		if (!s) return {
			included: !1,
			reason: "placement core predates the Actiware rest-interval guider"
		};
		if (r && !r.actiwareRestWindow) return {
			included: !1,
			reason: "no Actiware rest interval for this day"
		};
	}
	const o = ze(n, ke[e]);
	return null === o ? { included: !0 } : {
		included: !1,
		reason: `unsatisfied source capability: ${o.map((e) => `${e}=false`).join(", ") || "no implemented input signal"}`
	};
}
function Et(e, t) {
	const n = Ce[e];
	for (const r of n ?? []) if (r.length > 0 && r.every((e) => t.has(e))) return {
		included: !1,
		reason: `day input unavailable: ${r.join(" or ")}`
	};
	return { included: !0 };
}
async function Rt(e, t, r) {
	const a = Te(e);
	if (a && Me(a, t.epochLengthSeconds) !== t.epochLengthSeconds) return async function(e, t, r) {
		const a = Float64Array.from(t.timestamps), s = t.activityCounts instanceof Float64Array ? t.activityCounts : Float64Array.from(t.activityCounts), o = await b(r, {
			timestamps: a,
			axisY: s,
			vectorMagnitude: /* @__PURE__ */ new Float64Array()
		}, t.epochLengthSeconds), i = (await k(r, { day: o }, ["day"], n, void 0, [e])).day?.get(e);
		return i?.available && i.nonwear ? { mask: await S(r, o.timestamps, i.nonwear, a) } : {
			mask: null,
			reason: i?.reason ?? null
		};
	}(e, t, r ?? h());
	const s = {
		counts: t.activityCounts instanceof Float64Array ? t.activityCounts : Float64Array.from(t.activityCounts),
		epochSeconds: t.epochLengthSeconds
	};
	t.nonwearSignals?.temperature && (s.temperature = new Float64Array(t.nonwearSignals.temperature)), t.nonwearSignals?.raw && (s.raw = t.nonwearSignals.raw), null != t.nonwearSignals?.sampleRate && (s.sampleRate = t.nonwearSignals.sampleRate);
	const o = await (r ?? h()).detectNonwearUnified({
		algorithm: e,
		signals: s
	});
	if (!o.available || null == o.nonwear) return {
		mask: null,
		reason: o.reason ?? null
	};
	if (o.elementSeconds === t.epochLengthSeconds && t.epochLengthSeconds > 0 && o.nonwear.length === t.timestamps.length && t.timestamps.every((e, n) => e === t.timestamps[0] + n * t.epochLengthSeconds) && o.nonwear.every((e) => 0 === e || 1 === e)) return { mask: o.nonwear };
	const i = Ye(o, t.timestamps[0] ?? 0);
	return { mask: (await (r ?? h()).rasterizePeriods(Float64Array.from(i, (e) => e.startTsSec), Float64Array.from(i, (e) => e.endTsSec), Float64Array.from(t.timestamps), t.epochLengthSeconds)).mask };
}
var It = class extends Error {
	workerLost;
	constructor(e = !1) {
		super("Precomputed variant masks could not be saved."), this.name = "ScoredVariantPersistenceError", this.workerLost = e;
	}
};
const Tt = /* @__PURE__ */ new WeakMap();
function Mt(e) {
	const t = JSON.stringify(e, (e, t) => t instanceof Uint8Array ? Array.from(t) : t);
	return `${String(t.length)}:${Ee(t)}`;
}
function Ot(e, t) {
	for (const n of t) {
		if (e.notes.length >= 12) return;
		e.notes.includes(n) || e.notes.push(n);
	}
}
async function zt(e, t, { db: n = T(), signal: r, wasmApi: a, cancelOperation: s, narrowing: o } = {}) {
	const c = {
		computed: 0,
		skipped: 0,
		missingClassifier: 0,
		placementUnavailable: !1,
		notes: []
	}, l = a ?? h(), u = s ?? (() => {
		g(l);
	}), m = {
		wasmApi: l,
		signal: r,
		cancelOperation: u
	};
	O(r, "before scored-variant guider probes");
	const f = function(e) {
		const { classifierConfigIds: t, capabilities: n, hasDiary: r = !1, includeNonwearNone: a = !0, day: s } = e, o = [], c = s ? t.filter((e) => {
			if (void 0 !== s.staleClassifierCells?.[e]) return !0;
			const t = s.classifierOutputs[e];
			return !(!t || t.length !== s.timestamps.length) || (o.push({
				axis: "classifier",
				value: e,
				reason: t ? `stored series of ${String(t.length)} epochs is not on the day's ${String(s.timestamps.length)}-epoch grid` : "no classifier output stored for this day"
			}), !1);
		}) : [...t], l = s ? function(e) {
			const t = /* @__PURE__ */ new Set(["device_wear_state_evidence_stream"]);
			return e.temperature && 0 !== e.temperature.length || t.add("temperature_epoch_stream"), t;
		}(s) : /* @__PURE__ */ new Set(), u = [];
		for (const i of n.nonwearAlgorithms) {
			if (e.nonwearDetectors && !e.nonwearDetectors.includes(i)) continue;
			const t = s ? Et(i, l) : { included: !0 };
			t.included ? u.push(i) : o.push({
				axis: "nonwear",
				value: i,
				reason: t.reason
			});
		}
		const m = [...new Set(e.studyNonwearSelection ?? [])];
		let p;
		m.length > 1 && (!e.nonwearDetectors || e.nonwearDetectors.includes("study_selection")) && (m.filter((e) => n.nonwearAlgorithms.includes(e) && (!s || Et(e, l).included)).length > 0 ? (u.push(We), p = m) : o.push({
			axis: "nonwear",
			value: We,
			reason: "none of the study's nonwear detectors can run for this day"
		}));
		const f = a ? ["none", ...u] : u, g = [], h = 2 === e.periodSources?.length && e.periodSources[0] === _.diary && e.periodSources[1] === _.hdcza ? [r ? _.diary : _.hdcza] : e.periodSources;
		for (const i of Object.values(_)) {
			if (h && !h.includes(i)) continue;
			const t = Ct(i, r, n, {
				day: s,
				eventMarkerGuider: e.eventMarkerGuider ?? !1,
				actiwareRestGuider: e.actiwareRestGuider ?? !1
			});
			t.included ? g.push(i) : o.push({
				axis: "periodSource",
				value: i,
				reason: t.reason
			});
		}
		const w = e.rulesets ?? [i.LEGACY, i.REGULARITY_V2], y = e.rescorings ?? [d.NONE, d.WEBSTER], v = {
			classifierConfigIds: [...c],
			nonwear: f,
			periodSource: g,
			ruleset: w,
			rescoring: y
		}, b = [], S = /* @__PURE__ */ new Set();
		for (const i of c) for (const e of f) for (const t of g) for (const n of w) for (const r of y) {
			const a = ft({
				classifierConfigId: i,
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
		eventMarkerGuider: !!e.eventMarkerTimestamps?.length && await mt(m),
		actiwareRestGuider: !!e.actiwareRestWindow && await dt(p.ACTIWARE_REST_INTERVAL, m),
		...o
	});
	if (0 === f.variants.length) return c;
	const w = f.variants.filter((t) => !e.precomputedVariantMasks[t.id]);
	if (c.skipped = f.variants.length - w.length, 0 === w.length) return c;
	const y = {};
	O(r, "before scored-variant nonwear computation");
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
		cancel: u
	});
	for (let i = 0; i < w.length; i += 2e3) {
		O(r, "before scored-variant warm computation");
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
			variants: w.slice(i, i + 2e3).map((e) => ({
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
		]) : Mt(t);
		let o = Tt.get(l);
		o || (o = /* @__PURE__ */ new Map(), Tt.set(l, o));
		const u = o.get(a) ?? await D(l, (e) => e.runScoredVariantBatch(t), {
			ms: 3e5,
			label: "scored-variant warm computation",
			signal: r,
			cancel: s ?? (() => {
				g(l);
			})
		});
		if (0 === Object.keys(u.masks).length && o.set(a, u), O(r, "after scored-variant warm computation"), Object.assign(y, u.masks), c.computed += Object.keys(u.masks).length, c.missingClassifier += u.missingClassifier, Ot(c, u.notes), u.placementUnavailable) {
			c.placementUnavailable = !0;
			break;
		}
	}
	if (Object.keys(y).length > 0) {
		let t;
		try {
			O(r, "before scored-variant warm persistence");
			const { controller: a, release: s } = z(r);
			t = s;
			const o = a.signal;
			if (!await D(l, (t) => te(e.fileId, e.analysisDate, y, e.diaryFingerprint, n, t, o), {
				ms: 3e5,
				label: "scored-variant warm persistence",
				signal: void 0,
				cancel: () => {
					a.abort(), u();
				}
			})) throw new It();
		} catch (b) {
			r?.aborted && u(), $(b, r, "scored-variant warm persistence");
			const e = b instanceof Error && "QuotaExceededError" === b.name ? "QuotaExceededError" : "Error";
			throw console.warn("[scored-variant-warm] Precomputed mask persistence failed.", e), de("warn", "Precomputed variant mask persistence failed", { error_type: e }), new It(N(b));
		} finally {
			t?.();
		}
	}
	return c;
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
function $t(e, t) {
	xt.set(e, t);
}
function jt(e) {
	const t = new Uint8Array(e.length);
	return t.set(e), t.buffer;
}
function Dt(e) {
	const t = {}, n = [];
	for (const [r, a] of Object.entries(e ?? {})) {
		if (!a) continue;
		const e = C(r);
		if (!e) throw new Error(`sleep/wake output ${r} is not a declared AlgorithmRunKey (core.yaml)`);
		const s = jt(a);
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
	a && 0 !== a.length && (e[Oe(t, n, r)] = new Float64Array(a));
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
	const l = be({
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
async function Ht(t, n, r, a) {
	const [s, o, i, c] = await Promise.all([
		a.files.get(t),
		ae(t, a),
		a.markers.where("fileId").equals(t).toArray(),
		a.actiwareFileData.get(t)
	]);
	return "warm-v3:" + Ee({
		plan: Yt(n, r),
		series: [
			s?.sourceType,
			s?.sourceContentHash,
			s?.seriesRevision ?? 0,
			s?.epochLengthSeconds,
			s?.availableDates
		],
		geometry: o.some((e) => !e.importMappingProvenance?.diaryTemporalPolicy) ? me() : null,
		diaries: o.map((e) => ({
			date: e.analysisDate,
			inBed: e.diaryInBedTime,
			onset: e.diaryOnsetTime,
			wake: e.diaryWakeTime,
			outOfBed: e.diaryOutOfBedTime,
			overlay: e.decisionOverlayJson,
			policy: e.importMappingProvenance?.diaryTemporalPolicy,
			naps: X(e),
			nonwear: Z(e)
		})),
		hdcza: i.filter((t) => "auto_score" === t.username && t.algorithm === e.VAN_HEES_2015).map((e) => ({
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
async function Bt(e, t, n, r, a = T(), s, o, i, c = At(ue.getState()), l) {
	const u = a;
	if (!n) return Ut;
	const d = await ce(e, u);
	if (d?.sourceType && !_e(d.sourceType, "local")) return Ut;
	const m = { ...Ut }, p = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), g = await G(e, u).then((e) => ({
		fileRecord: d,
		activitySpan: e
	}), () => ({ fileRecord: d })), h = c?.(g.fileRecord), w = await Ht(e, n, h, u), y = /* @__PURE__ */ new Set();
	if ((g.fileRecord?.epochLengthSeconds ?? 60) > 60) return Ut;
	let v = /* @__PURE__ */ new Map();
	const b = (t) => {
		let n = v.get(t);
		return n || (n = ne(e, t, u), v.set(t, n)), n;
	};
	let S = !1;
	const k = pe((t, n) => {
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
					O(s, "before scored-variant warm day load");
					const r = await x(() => it(e, t, u, {
						...g,
						readDay: b,
						wasmApi: o
					}), F, "scored-variant day load", s, i ?? (() => {}));
					if (O(s, "after scored-variant warm day load"), !r || 0 === Object.keys(r.classifierOutputs).length) {
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
					$(I, s, "scored-variant warm"), console.warn("[local-processing] Scored-variant warm failed."), N(I) && (E = !0), I instanceof Error && "ScoredVariantPersistenceError" === I.name && y.add(t), f.add(t), C();
				}
			}
			if (E || a > 0 || !S && 0 === f.size) break;
			r = S ? t : [...f], S = !1;
		}
	} finally {
		k(), v = /* @__PURE__ */ new Map(), m.dayCount = p.size, s?.aborted && l && await Gt(() => Promise.resolve(), e, m, l);
	}
	let R = S || y.size > 0 || Boolean(s?.aborted);
	if (!R) try {
		const t = await u.scoredVariantMasks.where("fileId").equals(e).count();
		R = !await Y(u, [
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
		R = !0, console.warn("[local-processing] Scored-variant warm stamp could not be saved.");
	}
	return m.dayFailures = R ? Math.max(f.size, _) : f.size, m;
}
async function Gt(e, t, n, r, a) {
	await e(), 0 !== n.variantsComputed && await Fe.recordWorkspaceBoundDurably(r, w.SYSTEM_RECALCULATION, {
		subject: "scored_variant_precompute",
		fileId: t,
		dayCount: n.dayCount,
		variantsComputed: n.variantsComputed,
		variantsSkipped: n.variantsSkipped,
		trigger: "file_processing"
	});
}
function Kt(e, t = {}) {
	const n = t.db ?? T();
	return j({
		kind: I.SCORED_VARIANT_WARM,
		key: ve(e),
		label: "Scoring variants",
		workspaceId: n.name,
		signal: t.signal,
		rerun: !0,
		run: (r) => async function(e, { forget: t = !1, resumeIncomplete: n = !1, retryKnownFailures: r = !0, db: a = T() }, s) {
			try {
				if (T() !== a) return;
				const o = await a.files.get(e);
				if (T() !== a || !o || "incomplete" === o.ingestState || 0 === o.availableDates.length || !o.sourceType || o.epochLengthSeconds > 60) return;
				const i = ue.getState(), { username: c, selectedStudyId: l } = i, u = _e(o.sourceType, "local");
				if (!u) return;
				const d = At(i);
				if (!t && !n) return;
				const m = await Ht(e, u, d(o), a);
				if (T() !== a) return;
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
					if (T() !== a || !n || JSON.stringify(n.scoredVariantWarm) !== JSON.stringify(p)) return !1;
					const r = await Ht(e, u, d(n), a);
					if (T() !== a || r !== m) return !1;
					if (n.scoredVariantWarm && (!n.scoredVariantWarm.outcome || n.scoredVariantWarm.inputs !== m) && (await a.scoredVariantMasks.where("fileId").equals(e).delete(), T() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					if ((t || n.scoredVariantWarm) && (await a.files.where(":id").equals(e).modify((e) => {
						delete e.scoredVariantWarm;
					}), T() !== a)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					return !0;
				}, s.signal) || T() !== a) return;
				await async function(e, t, n, r, a, s, o) {
					let i = !1;
					const c = () => {
						i = !0, de("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" });
					};
					if (T() !== a) return;
					ge({
						fileId: e,
						done: 0,
						total: t.length
					}, a);
					const l = R(() => {
						T() !== a && A.getState().cancel(`${a.name}:${ve(e)}`);
					}), u = new AbortController(), d = () => {
						u.abort();
					};
					o.signal.addEventListener("abort", d, { once: !0 });
					try {
						const i = await Bt(e, t, n, (e) => {
							o.progress(Number.parseInt(e.message, 10), t.length, e.message);
						}, a, o.signal, V(u.signal), d, s, r);
						await Gt(() => Promise.resolve(), e, i, r, o.signal), o.signal.throwIfAborted(), i.dayFailures > 0 && (console.warn("[local-processing] Some days could not be precomputed; reimport the file to retry."), c());
					} catch {
						if (o.signal.aborted) return;
						console.warn("[local-processing] Background scored-variant warm failed."), c();
					} finally {
						o.signal.removeEventListener("abort", d), l(), ge(i && !o.signal.aborted && T() === a ? {
							fileId: e,
							done: fe()?.done ?? 0,
							total: t.length,
							failed: !0
						} : null, a);
					}
					if (i) throw new Error("Background scored-variant warm failed.");
				}(e, o.availableDates, u, Fe.captureWorkspaceBinding(a, {
					username: c,
					studyId: l,
					signal: s.signal
				}), a, d, s);
			} catch {
				if (s.signal.aborted) return;
				console.warn("[local-processing] Scored-variant warm could not be scheduled."), de("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" }), T() === a && ge({
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
	return j({
		kind: I.VARIANT_RECOVERY,
		key: I.VARIANT_RECOVERY,
		label: "Resume scoring variants",
		workspaceId: e.name,
		signal: n,
		run: async (n) => {
			await e.projectMeta.get(we);
			const r = (e) => null != e.id && "incomplete" !== e.ingestState && Boolean(e.sourceType && _e(e.sourceType, "local")) && e.availableDates.length > 0 && !(e.epochLengthSeconds > 60), a = (await Q(e)).filter(r);
			for (const o of a) {
				if (T() !== e) return;
				await Kt(o.id, {
					db: e,
					resumeIncomplete: !0,
					retryKnownFailures: t,
					signal: n.signal
				}), await n.yieldNow();
			}
			if (T() !== e || !e.isOpen()) return;
			const s = At(ue.getState());
			await Y(e, [
				e.projectMeta,
				e.files,
				e.diaryEntries,
				e.markers,
				e.actiwareFileData
			], async () => {
				const n = [], o = (await Q(e)).filter(r);
				for (const r of o) {
					const o = _e(r.sourceType, "local"), i = await Ht(r.id, o, s(r), e), c = (await e.files.get(r.id))?.scoredVariantWarm;
					if (!c?.outcome || c.inputs !== i || T() !== e) return void await e.projectMeta.delete(we);
					n.push([r.id, i]), "known-failures" !== c.outcome || a.find((e) => e.id === r.id)?.scoredVariantWarm?.inputs === i && !t || ge({
						fileId: r.id,
						done: r.availableDates.length,
						total: r.availableDates.length,
						failed: !0
					}, e);
				}
				await e.projectMeta.put({
					key: we,
					revision: Number.parseInt(Ee(n), 16)
				});
			}, n.signal);
		}
	}).catch((t) => {
		if (n?.aborted || t instanceof DOMException && "AbortError" === t.name) throw t;
		throw de("warn", "Background scored-variant warm failed", { error_type: "Error" }), ge({
			fileId: 0,
			done: 0,
			total: 0,
			failed: !0
		}, e), /* @__PURE__ */ new Error("Stored scoring variants could not be resumed.");
	});
}
async function Xt(e, t, n, r, a) {
	const s = r ?? h(), o = await Ft(s, e, `cube:${String(t)}:${JSON.stringify(a)}`, (e, n) => Xt(e, t, n, s, a));
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
	const i = Xe(a), c = Ze(i.modelId), l = Lt(t, !!n && n.length > 0 && "unconfigured" !== c.id, c, !!e.counts30s && e.counts30s.axisY.length > 0, i.threshold ?? void 0), u = await async function(e) {
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
		const t = jt(g);
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
function Zt(e, t) {
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
	const s = (t.variants ?? $e).filter((e) => e !== De);
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
	const s = await je({
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
	for (const [s, o] of Object.entries(e.hasibVariants ?? {})) s !== M.TENSOR_MAJORITY_VOTE && s !== M.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== c(s)?.grammarId && a(o);
	for (const [s, o] of Object.entries(e.cubeOutputs ?? {})) s !== M.TENSOR_MAJORITY_VOTE && s !== M.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== c(s)?.grammarId && a(o);
	return 0 === n.length ? new Uint8Array(r) : t.scoreConsensus("majority_tie_sleep", n);
}
pe((e, t, n) => {
	Kt(e, {
		resumeIncomplete: !0,
		retryKnownFailures: !1,
		db: t,
		signal: n
	}).catch(() => {});
});
export { Jt as backfillInterruptedScoredVariantWarms, Lt as buildOrReuseAlgorithmOutputCubePlan, en as computeTensorConsensusForDay, Pt as cubeRunsOnGrid, Gt as finalizeAndAuditScoredVariantWarm, Kt as rewarmFileScoredVariants, Xt as runAlgorithmCubeForDay, Qt as scoreBuiltinGgirSadehColeForDay, qt as scoreCountBasedHasibVariantsForDay, Dt as sleepWakeToPersistedOutputs, $t as t, Bt as warmFileScoredVariants, Zt as withRecordingWakeThreshold };
