import { Bn as e, C as n, D as t, Fn as r, Fr as a, Gt as s, In as o, J as i, Pn as c, Qt as l, S as u, Sn as d, T as f, Vt as m, Y as p, Zt as g, b as h, dn as w, dr as y, f as v, fn as b, g as S, gr as k, hr as _, l as C, n as A, o as E, p as I, qn as O, r as z, sr as R, t as M, un as F, w as T, yt as x, zn as $ } from "./background-jobs-BCPfjgGQ.js";
import { $ as D, $n as P, Br as V, C as j, D as N, Dn as W, Et as L, Fn as Y, Fr as U, Hr as B, Ht as H, I as G, Ir as K, Kr as J, Ln as Z, Lr as X, Ot as q, Pn as Q, Pr as ee, Qr as ne, Rn as te, Rr as re, St as ae, T as se, Ur as oe, Vt as ie, Wn as ce, Wr as le, X as ue, Z as de, _t as fe, an as me, d as pe, dr as ge, ei as he, et as we, gt as ye, qt as ve, vn as be, wt as Se, xt as ke, yt as _e, zn as Ce } from "./db-D_ccV0o1.js";
import { a as Ae, i as Ee, n as Ie, o as Oe, t as ze } from "./local-ggir-hasib-variants-2ONU_Y-p.js";
import { A as Re, E as Me, M as Fe, O as Te, k as xe, y as $e } from "./local-nonwear-unified-DAJBkB8R.js";
import { a as De, g as Pe, m as Ve, o as je } from "./epoch-utils-pkRaHlkm.js";
import { z as Ne } from "./local-export-worker-DRuJMI8r.js";
import { y as We } from "./epoch-series-import-CSjcBhZB.js";
import { A as Le, M as Ye, P as Ue, k as Be, rt as He, tt as Ge, w as Ke } from "./ggir-import-D9aW-GXy.js";
var Je = class extends Error {};
async function Ze(e, n, t, r) {
	switch (e.family) {
		case "count_hasib": return async function(e, n, t) {
			const r = e.input.seriesKey, a = Ae(r), o = t.counts?.[r];
			if (!o || 0 === o.length) throw new Je(`Missing count input ${r}.`);
			if ("string" == typeof e.parameters.implementation) return Xe(e), async function(e, n, t) {
				const r = function(e) {
					const n = w(e.id);
					if (null === n || "count_cell" !== n.grammarId) return null;
					const t = n.values.method_family, r = n.values.implementation_variant;
					return void 0 === t || void 0 === r ? null : m.find((e) => e.methodFamilyId === t && e.implementationVariantId === r)?.primitiveId ?? null;
				}(e);
				if ("sadeh" === r) {
					if (!n.scoreSadeh) throw new Error("Registry Sadeh primitive (scoreSadeh) unavailable on this worker bundle.");
					const r = s.scoring_threshold, a = "number" == typeof r ? r : 0, o = "number" == typeof e.parameters.threshold ? e.parameters.threshold : a;
					return n.scoreSadeh(t, o);
				}
				if ("cole_kripke" === r) {
					if (!n.scoreColeKripke) throw new Error("Registry Cole-Kripke primitive (scoreColeKripke) unavailable on this worker bundle.");
					const r = !0 === e.parameters.useActilifeScaling;
					return n.scoreColeKripke(t, r);
				}
				throw new Error(`Unsupported provenance count scorer ${e.algorithm}.`);
			}(e, n, o);
			const i = function(e) {
				if (Ie.includes(e.algorithm)) return null;
				const n = w(e.id)?.values.method_family, t = d.find((e) => "sleep_wake" === e.kind && e.family === n), r = t?.nativeEpochSeconds;
				return !t || 30 !== r && 60 !== r ? null : {
					methodId: t.id,
					nativeEpochSeconds: r
				};
			}(e);
			if (i) return async function(e, n, t, r) {
				const a = Ae(e.input.seriesKey), s = F(a.family, a.axis, n.nativeEpochSeconds), o = r.counts?.[s];
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
			}(e, i, n, t);
			Xe(e);
			const c = (await Oe({
				backend: n,
				variants: [e.algorithm],
				anglez5s: /* @__PURE__ */ new Float64Array(),
				countSource: r,
				countEpochSeconds: a.epochSeconds,
				..."neishabouri" === a.family ? { neishabouriCounts: { [a.axis]: o } } : { zeroCrossingCountsByAxis: { [a.axis]: o } }
			}))[0];
			if (!c) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return c.result.sib;
		}(e, n, t);
		case "angle_hasib": return async function(e, n, t) {
			const r = g.angle_hasib;
			if (void 0 === r || e.algorithm !== r.algorithmValue) throw new Error(`Unsupported angle-HASIB algorithm ${e.algorithm}.`);
			if (!t.anglez5s || 0 === t.anglez5s.length) throw new Je(`Missing ${r.inputSeriesKey} input.`);
			const a = (await Oe({
				backend: n,
				variants: [e.algorithm],
				anglez5s: t.anglez5s,
				countSource: F(l, "y", 60)
			}))[0];
			if (!a) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return a.result.sib;
		}(e, n, t);
		case "lstm": return async function(e, n, t) {
			const r = "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm, a = t.lstmProbabilities?.[r];
			if (!a || 0 === a.length) throw new Je(`Missing LSTM probabilities for ${r}.`);
			const o = s.model_threshold, i = "number" == typeof e.parameters.threshold ? e.parameters.threshold : "number" == typeof o ? o : .5;
			if (!n.thresholdProbabilities) throw new Error("The probability threshold (thresholdProbabilities) is unavailable on this worker bundle.");
			return n.thresholdProbabilities(Float64Array.from(a), i);
		}(e, n, t);
		case "consensus": return async function(e, n, t) {
			const r = (Array.isArray(e.parameters.inputConfigIds) ? e.parameters.inputConfigIds.filter((e) => "string" == typeof e) : e.lineage).map((e) => {
				const t = n[e];
				if (!t) throw new Je(`Missing consensus input ${e}.`);
				return t;
			});
			if (0 === r.length) throw new Error("Consensus requires at least one input.");
			const a = r[0].length;
			for (const s of r) if (s.length !== a) throw new Error(`Consensus inputs are not aligned (${String(s.length)} vs ${String(a)} epochs).`);
			const o = "string" == typeof e.parameters.strategy ? e.parameters.strategy : s.consensus_strategy;
			return t.scoreConsensus(o, r);
		}(e, r, n);
	}
}
function Xe(e) {
	const n = w(e.id)?.values, t = n?.implementation_variant, r = V(String(n?.method_family), void 0 === t ? void 0 : String(t));
	if (!r.includes(e.epochSeconds)) throw new Error(`programming error: ${e.id} reached the runner, but ${e.algorithm} is valid only at ${r.join(", ")} s and the planner never plans it.`);
}
function qe(e) {
	return oe(e ?? null);
}
function Qe(e) {
	return ie(e).map((e) => [e.start, e.end]);
}
function en(e) {
	return H(e).map((e) => [e.start, e.end]);
}
function nn(e) {
	let n = /* @__PURE__ */ new Float64Array(0);
	for (const t of e) n = Pe(n, new Float64Array(t));
	return n;
}
function tn(e) {
	const n = new Uint8Array(e.reduce((e, n) => e + n.byteLength, 0));
	let t = 0;
	for (const r of e) n.set(new Uint8Array(r), t), t += r.byteLength;
	return n;
}
async function rn(e, n, t) {
	const r = await ce(e, n, le, R.VAN_HEES_2015, void 0, t), a = r?.sleepMarkers.find((e) => e.markerType === y.MAIN_SLEEP) ?? r?.sleepMarkers[0];
	return null != a?.onsetTimestamp && null != a.offsetTimestamp ? [a.onsetTimestamp, a.offsetTimestamp] : null;
}
async function an(e, n, t = I(), r = {}) {
	const a = t, s = r.readDay ?? ((n) => pe(e, n, a)), o = await je(e, n, a, s, r.fileRecord?.navigationFacts, r.wasmApi);
	if (!o) return null;
	const i = await s(await De(n, r.fileRecord?.navigationFacts, r.wasmApi)), c = (i ? [o, i] : [o]).filter((e) => e.timestamps.byteLength > 0), l = nn(c.map((e) => e.timestamps)), { startIndex: u, endIndex: d } = await Ne(l, n, r.wasmApi);
	if (d <= u) return null;
	const f = l.subarray(u, d), m = Array.from(f), p = Array.from(nn(c.map((e) => e.axisY)).subarray(u, d)), g = await D(f, {
		day: c[0],
		file: r.fileRecord
	}, r.wasmApi), h = await se(e, a, r.fileRecord ? { file: r.fileRecord } : void 0), w = {}, y = {}, v = {};
	for (const I of h.cellIds) {
		const e = h(I), n = ve(c, e);
		if ("stale" === n.status) {
			y[I] = n.reason;
			continue;
		}
		const t = n.outputs.filter((e) => null != e);
		if (t.length !== c.length) continue;
		const a = await Promise.all(t.map(async (e, n) => (await Ve(c[n], new Uint8Array(e), r.wasmApi))?.buffer ?? e));
		w[I] = Array.from(tn(a).subarray(u, d)), "ok" === e.status && null !== e.configHash && (v[I] = e.configHash);
	}
	const b = r.fileRecord ? Promise.resolve(r.fileRecord) : j(e, a), [S, k, _, C, A, E] = await Promise.all([
		rn(e, n, a),
		de(e, n, a),
		"activitySpan" in r ? r.activitySpan ?? null : Se(e, a),
		a.scoredVariantMasks.get([e, n]),
		b.then((t) => Be(r.sourceAnalyses ?? Le, t, "guiderWindow")?.guiderWindow({
			fileId: e,
			date: n,
			db: a
		}) ?? null),
		b
	]), O = k ? await L(k, _, r.wasmApi) : null, z = m[0] ?? 0, R = (m[m.length - 1] ?? z) + g, M = c.flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter((e) => e >= z && e < R), F = O ? {
		diaryInBedTime: ye(T = O),
		onsetTime: fe(T),
		diaryWakeTime: _e(T),
		naps: Qe(T),
		nonwear: en(T)
	} : void 0;
	var T;
	const x = "warm-v3:" + oe({
		diary: qe(F),
		actiwareRestWindow: A,
		eventMarkerTimestamps: M,
		hdczaWindow: S,
		seriesRevision: E?.seriesRevision ?? 0,
		classifierConfigHashes: Object.keys(v).length > 0 ? v : void 0
	}), $ = C?.diaryFingerprint === x, P = {};
	if (C?.masks && $) for (const [I, D] of Object.entries(C.masks)) D.byteLength === m.length && (P[I] = new Uint8Array(D));
	const V = c.flatMap((e) => e.temperature && e.temperature.byteLength > 0 ? [e.temperature] : []), N = V.length === c.length ? Array.from(nn(V).subarray(u, d)) : void 0;
	return {
		fileId: e,
		analysisDate: n,
		timestamps: m,
		activityCounts: p,
		epochLengthSeconds: g,
		hdczaWindow: S,
		...M.length > 0 ? { eventMarkerTimestamps: M } : {},
		...A ? { actiwareRestWindow: A } : {},
		classifierOutputs: w,
		...Object.keys(y).length > 0 ? { staleClassifierCells: y } : {},
		precomputedVariantMasks: P,
		diaryFingerprint: x,
		...E?.sourceContentHash ? {
			sourceContentHash: E.sourceContentHash,
			seriesRevision: E.seriesRevision ?? 0
		} : {},
		...F ? { diary: F } : {},
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
		id: b("scored_variant", {
			classifier_config_id: t.classifierConfigId,
			nonwear: r,
			period_source: t.periodSource,
			ruleset: t.ruleset,
			rescoring: t.rescoring
		}),
		configHash: oe({
			...t,
			nonwear: r
		}),
		config: t
	};
}
const cn = "cube_cell_absent", ln = new Map(d.map((e) => [e.id, e])), un = new Set(U.map((e) => e.slug)), dn = [30, 60];
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
const pn = g.angle_hasib?.configId ?? "";
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
		const e = mn(pn, () => K({
			includeFamilies: ["angle_hasib"],
			includeConsensus: !1
		}).configs);
		return e ? gn(e) : fn(cn, "the van_hees_2015 angle cell was not present in the cube plan");
	}();
	const a = r.family ?? "";
	return "sleep_wake" === r.kind && un.has(a) ? function(e, n) {
		const t = e.countMetric.trim();
		if (r = t, !Object.prototype.hasOwnProperty.call(ee, r)) return fn("unknown_count_metric", `count metric "${e.countMetric}" is not a cube count source (expected neishabouri or zero_crossing)`);
		var r;
		const a = e.axis.trim();
		if (!ee[t].includes(a)) return fn("incompatible_axis", `axis "${e.axis}" is not available for count metric "${t}"`);
		const s = e.epochSeconds;
		if (!dn.includes(s)) return fn("unsupported_epoch", `epoch length ${String(s)}s is not a count-cube epoch (expected 30 or 60)`);
		const o = s, i = b("count_cell", {
			method_family: n,
			count_family: t,
			axis: a,
			epoch_seconds: o
		}), c = mn(i, () => K({
			includeFamilies: ["count_hasib"],
			includeConsensus: !1,
			epochSeconds: [o]
		}).configs);
		return c ? gn(c) : fn(cn, `derived cube cell "${i}" was not present in the cube plan`);
	}(e, a) : fn("not_a_cube_scorer", `algorithm "${t}" has no directly scorer-addressable count/angle cube cell`);
}
function wn(e) {
	return (n) => {
		const t = me(e, n);
		return function(e) {
			const n = Te(e.currentAlgorithm), t = hn({
				...n,
				algorithm: Fe(n.family, n.implementation) ?? e.currentAlgorithm,
				sleepDetectionRule: e.sleepDetectionRule,
				placementRuleset: e.placementRuleset,
				scorerPostprocessingPreset: e.scorerPostprocessingPreset
			}), r = /* @__PURE__ */ new Set();
			if (!e.placementFromSource && t.ok && xe(Re(n.family)) === e.extractionPath && r.add(t.variant.cubeCellId), e.ggirHasibVariantsEnabled && !e.placementFromSource) {
				const n = Ae(e.ggirHasibCountSource);
				for (const t of e.ggirHasibVariants) {
					const a = U.find((e) => e.algorithm === t), s = t === ze ? "van_hees_2015" : d.find((e) => e.family === a?.slug)?.id;
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
				nonwearDetectors: 1 === a.length ? [...a] : [be],
				studyNonwearSelection: [...a],
				rulesets: [e.placementRuleset],
				rescorings: [e.scorerPostprocessingPreset],
				periodSources: "smart" === e.periodGuider ? [ne.diary, ne.hdcza] : [W(e.periodGuider, { hasDiary: !1 })?.source_a ?? ne.diary]
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
function yn(e, n, t, { day: a, eventMarkerGuider: s, actiwareRestGuider: i }) {
	if (r.includes(e) && !n) return {
		included: !1,
		reason: "no diary for this day"
	};
	if (e === ne.hdcza && a && null == a.hdczaWindow) return {
		included: !1,
		reason: "no HDCZA window stored for this day"
	};
	if (e === ne.event_marker) {
		if (!s) return {
			included: !1,
			reason: "placement core predates the event-marker guider"
		};
		if (a && !a.eventMarkerTimestamps?.length) return {
			included: !1,
			reason: "no event-marker presses for this day"
		};
	}
	if (e === ne.actiware_rest_interval) {
		if (!i) return {
			included: !1,
			reason: "placement core predates the Actiware rest-interval guider"
		};
		if (a && !a.actiwareRestWindow) return {
			included: !1,
			reason: "no Actiware rest interval for this day"
		};
	}
	const c = $(t, o[e]);
	return null === c ? { included: !0 } : {
		included: !1,
		reason: `unsatisfied source capability: ${c.map((e) => `${e}=false`).join(", ") || "no implemented input signal"}`
	};
}
function vn(e, n) {
	const t = c[e];
	for (const r of t ?? []) if (r.length > 0 && r.every((e) => n.has(e))) return {
		included: !1,
		reason: `day input unavailable: ${r.join(" or ")}`
	};
	return { included: !0 };
}
async function bn(e, n, t) {
	const r = re(e);
	if (r && B(r, n.epochLengthSeconds) !== n.epochLengthSeconds) return async function(e, n, t) {
		const r = Float64Array.from(n.timestamps), a = n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts), s = await Ge(t, {
			timestamps: r,
			axisY: a,
			vectorMagnitude: /* @__PURE__ */ new Float64Array()
		}, n.epochLengthSeconds), o = (await Ke(t, { day: s }, ["day"], x, void 0, [e])).day?.get(e);
		return o?.available && o.nonwear ? { mask: await He(t, s.timestamps, o.nonwear, r) } : {
			mask: null,
			reason: o?.reason ?? null
		};
	}(e, n, t ?? i());
	const a = {
		counts: n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts),
		epochSeconds: n.epochLengthSeconds
	};
	n.nonwearSignals?.temperature && (a.temperature = new Float64Array(n.nonwearSignals.temperature)), n.nonwearSignals?.raw && (a.raw = n.nonwearSignals.raw), null != n.nonwearSignals?.sampleRate && (a.sampleRate = n.nonwearSignals.sampleRate);
	const s = await (t ?? i()).detectNonwearUnified({
		algorithm: e,
		signals: a
	});
	if (!s.available || null == s.nonwear) return {
		mask: null,
		reason: s.reason ?? null
	};
	if (s.elementSeconds === n.epochLengthSeconds && n.epochLengthSeconds > 0 && s.nonwear.length === n.timestamps.length && n.timestamps.every((e, t) => e === n.timestamps[0] + t * n.epochLengthSeconds) && s.nonwear.every((e) => 0 === e || 1 === e)) return { mask: s.nonwear };
	const o = Me(s, n.timestamps[0] ?? 0);
	return { mask: (await (t ?? i()).rasterizePeriods(Float64Array.from(o, (e) => e.startTsSec), Float64Array.from(o, (e) => e.endTsSec), Float64Array.from(n.timestamps), n.epochLengthSeconds)).mask };
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
	return `${String(n.length)}:${oe(n)}`;
}
function Cn(e, n) {
	for (const t of n) {
		if (e.notes.length >= 12) return;
		e.notes.includes(t) || e.notes.push(t);
	}
}
async function An(e, t, { db: r = I(), signal: a, wasmApi: s, cancelOperation: o, narrowing: c } = {}) {
	const l = {
		computed: 0,
		skipped: 0,
		missingClassifier: 0,
		placementUnavailable: !1,
		notes: []
	}, d = s ?? i(), m = o ?? (() => {
		p(d);
	});
	u(a, "before the scored-variant plan");
	const g = function(e) {
		const { classifierConfigIds: n, capabilities: t, hasDiary: r = !1, includeNonwearNone: a = !0, day: s } = e, o = [], i = s ? n.filter((e) => {
			if (void 0 !== s.staleClassifierCells?.[e]) return !0;
			const n = s.classifierOutputs[e];
			return !(!n || n.length !== s.timestamps.length) || (o.push({
				axis: "classifier",
				value: e,
				reason: n ? `stored series of ${String(n.length)} epochs is not on the day's ${String(s.timestamps.length)}-epoch grid` : "no classifier output stored for this day"
			}), !1);
		}) : [...n], c = s ? function(e) {
			const n = /* @__PURE__ */ new Set(["device_wear_state_evidence_stream"]);
			return e.temperature && 0 !== e.temperature.length || n.add("temperature_epoch_stream"), n;
		}(s) : /* @__PURE__ */ new Set(), l = [];
		for (const b of t.nonwearAlgorithms) {
			if (e.nonwearDetectors && !e.nonwearDetectors.includes(b)) continue;
			const n = s ? vn(b, c) : { included: !0 };
			n.included ? l.push(b) : o.push({
				axis: "nonwear",
				value: b,
				reason: n.reason
			});
		}
		const u = [...new Set(e.studyNonwearSelection ?? [])];
		let d;
		u.length > 1 && (!e.nonwearDetectors || e.nonwearDetectors.includes("study_selection")) && (u.filter((e) => t.nonwearAlgorithms.includes(e) && (!s || vn(e, c).included)).length > 0 ? (l.push(be), d = u) : o.push({
			axis: "nonwear",
			value: be,
			reason: "none of the study's nonwear detectors can run for this day"
		}));
		const f = a ? ["none", ...l] : l, m = [], p = 2 === e.periodSources?.length && e.periodSources[0] === ne.diary && e.periodSources[1] === ne.hdcza ? [r ? ne.diary : ne.hdcza] : e.periodSources;
		for (const b of Object.values(ne)) {
			if (p && !p.includes(b)) continue;
			const n = yn(b, r, t, {
				day: s,
				eventMarkerGuider: e.eventMarkerGuider ?? !1,
				actiwareRestGuider: e.actiwareRestGuider ?? !1
			});
			n.included ? m.push(b) : o.push({
				axis: "periodSource",
				value: b,
				reason: n.reason
			});
		}
		const g = e.rulesets ?? [_.LEGACY, _.REGULARITY_V2], h = e.rescorings ?? [k.NONE, k.WEBSTER], w = {
			classifierConfigIds: [...i],
			nonwear: f,
			periodSource: m,
			ruleset: g,
			rescoring: h
		}, y = [], v = /* @__PURE__ */ new Set();
		for (const b of i) for (const e of f) for (const n of m) for (const t of g) for (const r of h) {
			const a = on({
				classifierConfigId: b,
				nonwear: e,
				periodSource: n,
				ruleset: t,
				rescoring: r
			}, d);
			v.has(a.id) || (v.add(a.id), y.push(a));
		}
		return {
			variants: y,
			axes: w,
			skipped: o,
			...d ? { studyNonwearSelection: d } : {}
		};
	}({
		classifierConfigIds: Object.keys(e.classifierOutputs),
		capabilities: t,
		hasDiary: null != e.diary,
		day: e,
		eventMarkerGuider: Boolean(e.eventMarkerTimestamps?.length),
		actiwareRestGuider: null != e.actiwareRestWindow,
		...c
	});
	if (0 === g.variants.length) return l;
	const w = g.variants.filter((n) => !e.precomputedVariantMasks[n.id]);
	if (l.skipped = g.variants.length - w.length, 0 === w.length) return l;
	const y = {};
	u(a, "before scored-variant nonwear computation");
	const v = await E(d, (n) => async function(e, n, t) {
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
	}(g), n), {
		ms: h,
		label: "scored-variant nonwear computation",
		signal: a,
		cancel: m
	});
	for (let n = 0; n < w.length; n += 2e3) {
		u(a, "before scored-variant warm computation");
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
			...g.studyNonwearSelection ? { studyNonwearDetectors: g.studyNonwearSelection } : {},
			variants: w.slice(n, n + 2e3).map((e) => ({
				id: e.id,
				...e.config
			}))
		}, s = e.sourceContentHash && void 0 !== e.seriesRevision ? JSON.stringify([
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
		]) : _n(t);
		let i = kn.get(d);
		i || (i = /* @__PURE__ */ new Map(), kn.set(d, i));
		const c = i.get(s) ?? await E(d, (e) => e.runScoredVariantBatch(t), {
			ms: 3e5,
			label: "scored-variant warm computation",
			signal: a,
			cancel: o ?? (() => {
				p(d);
			})
		});
		if (0 === Object.keys(c.masks).length && i.set(s, c), u(a, "after scored-variant warm computation"), Object.assign(y, c.masks), l.computed += Object.keys(c.masks).length, l.missingClassifier += c.missingClassifier, Cn(l, c.notes), c.placementUnavailable) {
			l.placementUnavailable = !0;
			break;
		}
	}
	if (Object.keys(y).length > 0) {
		let t;
		try {
			u(a, "before scored-variant warm persistence");
			const { controller: s, release: o } = n(a);
			t = o;
			const i = s.signal;
			if (!await E(d, (n) => G(e.fileId, e.analysisDate, y, e.diaryFingerprint, r, n, i), {
				ms: 3e5,
				label: "scored-variant warm persistence",
				signal: void 0,
				cancel: () => {
					s.abort(), m();
				}
			})) throw new Sn();
		} catch (b) {
			a?.aborted && m(), f(b, a, "scored-variant warm persistence");
			const e = b instanceof Error && "QuotaExceededError" === b.name ? "QuotaExceededError" : "Error";
			throw console.warn("[scored-variant-warm] Precomputed mask persistence failed.", e), ge("warn", "Precomputed variant mask persistence failed", { error_type: e }), new Sn(T(b));
		} finally {
			t?.();
		}
	}
	return l;
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
function On(e, n) {
	En.set(e, n);
}
function zn(e) {
	const n = new Uint8Array(e.length);
	return n.set(e), n.buffer;
}
function Rn(e) {
	const n = {}, t = [];
	for (const [r, a] of Object.entries(e ?? {})) {
		if (!a) continue;
		const e = he(r);
		if (!e) throw new Error(`sleep/wake output ${r} is not a declared AlgorithmRunKey (core.yaml)`);
		const s = zn(a);
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
function Mn(e, n, t, r, a) {
	a && 0 !== a.length && (e[X(n, t, r)] = new Float64Array(a));
}
function Fn(e, n, t, r) {
	const a = {};
	Mn(a, "neishabouri", "x", n, e.axisX), Mn(a, "neishabouri", "y", n, e.axisY), Mn(a, "neishabouri", "z", n, e.axisZ), Mn(a, "neishabouri", "vm", n, e.vectorMagnitude), Mn(a, "zero_crossing", "x", n, e.zeroCrossingX), Mn(a, "zero_crossing", "y", n, e.zeroCrossingY), Mn(a, "zero_crossing", "z", n, e.zeroCrossingZ);
	const s = e.counts30s;
	s && 30 !== n && (Mn(a, "neishabouri", "x", 30, s.axisX), Mn(a, "neishabouri", "y", 30, s.axisY), Mn(a, "neishabouri", "z", 30, s.axisZ), Mn(a, "neishabouri", "vm", 30, s.vectorMagnitude), Mn(a, "zero_crossing", "x", 30, s.zeroCrossingX), Mn(a, "zero_crossing", "y", 30, s.zeroCrossingY), Mn(a, "zero_crossing", "z", 30, s.zeroCrossingZ));
	const o = { [n]: Float64Array.from(e.timestamps) };
	return s && 30 !== n && s.timestamps.length > 0 && (o[30] = Float64Array.from(s.timestamps)), {
		counts: a,
		timestamps: o,
		...r && r.length > 0 && "unconfigured" !== t.id ? { lstmProbabilities: { [t.id]: r } } : {}
	};
}
function Tn(e) {
	return 120 !== e;
}
const xn = /* @__PURE__ */ new Map();
function $n(e, n, t, r = !1, a) {
	const s = r && 30 !== e ? [30, e] : [e], o = s.join(","), i = n ? `${o}|lstm|${t.id}|${t.label}|selected:${String(a ?? "none")}|${JSON.stringify(t.thresholdPresets ?? null)}` : `${o}|nolstm`, c = xn.get(i);
	if (c) return c;
	const l = K({
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
	return xn.set(i, l), l;
}
function Dn() {
	xn.clear();
}
const Pn = {
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
async function jn(e, n, t, r) {
	const [a, s, o, i] = await Promise.all([
		r.files.get(e),
		ue(e, r),
		r.markers.where("fileId").equals(e).toArray(),
		r.actiwareFileData.get(e)
	]);
	return "warm-v3:" + oe({
		plan: Vn(n, t),
		series: [
			a?.sourceType,
			a?.sourceContentHash,
			a?.seriesRevision ?? 0,
			a?.epochLengthSeconds,
			a?.availableDates
		],
		geometry: s.some((e) => !e.importMappingProvenance?.diaryTemporalPolicy) ? q() : null,
		diaries: s.map((e) => ({
			date: e.analysisDate,
			inBed: e.diaryInBedTime,
			onset: e.diaryOnsetTime,
			wake: e.diaryWakeTime,
			outOfBed: e.diaryOutOfBedTime,
			overlay: e.decisionOverlayJson,
			policy: e.importMappingProvenance?.diaryTemporalPolicy,
			naps: ke(e),
			nonwear: ae(e)
		})),
		hdcza: o.filter((e) => "auto_score" === e.username && e.algorithm === R.VAN_HEES_2015).map((e) => ({
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
async function Nn(n, r, s, o, i = I(), c, l, d, m = wn(a().scoring()), p) {
	const g = i;
	if (!s) return Pn;
	const w = await j(n, g);
	if (w?.sourceType && !e(w.sourceType, "local")) return Pn;
	const y = { ...Pn }, b = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set(), k = await Se(n, g).then((e) => ({
		fileRecord: w,
		activitySpan: e
	}), () => ({ fileRecord: w })), _ = m?.(k.fileRecord), C = await jn(n, s, _, g), A = /* @__PURE__ */ new Set();
	if (we(k.fileRecord) > 60) return Pn;
	let E = /* @__PURE__ */ new Map();
	const O = (e) => {
		let t = E.get(e);
		return t || (t = pe(n, e, g), E.set(e, t)), t;
	};
	let z = !1;
	const R = Z((e, t) => {
		e === n && t === g && (z = !0);
	}), M = r.length;
	let F = 0;
	o?.({
		phase: "variants",
		percent: 98,
		message: `0/${String(M)} days`
	});
	const x = () => {
		F >= M || (F += 1, o?.({
			phase: "variants",
			percent: 0 === M ? 100 : 98 + 2 * F / M,
			message: `${String(F)}/${String(M)} days`
		}));
	};
	let $ = !1;
	try {
		let e = r;
		for (let a = 0; a < 2; a++) {
			E = /* @__PURE__ */ new Map();
			for (const r of e) if ($) S.add(r), x();
			else {
				performance.now(), y.variantsComputed;
				for (const e of E.keys()) e < r && E.delete(e);
				try {
					u(c, "before scored-variant warm day load");
					const e = await t(() => an(n, r, g, {
						...k,
						readDay: O,
						wasmApi: l
					}), h, "scored-variant day load", c, d ?? (() => {}));
					if (u(c, "after scored-variant warm day load"), !e || 0 === Object.keys(e.classifierOutputs).length) {
						x();
						continue;
					}
					const a = await An(e, s, {
						db: g,
						signal: c,
						wasmApi: l,
						cancelOperation: d,
						narrowing: _
					});
					A.delete(r), y.variantsComputed += a.computed, b.has(r) || (y.variantsSkipped += a.skipped), a.placementUnavailable || 0 !== a.missingClassifier ? S.add(r) : (b.add(r), S.delete(r)), x(), a.placementUnavailable && console.warn("[local-processing] Scored-variant warm placement was unavailable.");
				} catch (P) {
					f(P, c, "scored-variant warm"), console.warn("[local-processing] Scored-variant warm failed."), T(P) && ($ = !0), P instanceof Error && "ScoredVariantPersistenceError" === P.name && A.add(r), S.add(r), x();
				}
			}
			if ($ || a > 0 || !z && 0 === S.size) break;
			e = z ? r : [...S], z = !1;
		}
	} finally {
		R(), E = /* @__PURE__ */ new Map(), y.dayCount = b.size, c?.aborted && p && await Wn(() => Promise.resolve(), n, y, p);
	}
	let D = z || A.size > 0 || Boolean(c?.aborted);
	if (!D) try {
		const e = await g.scoredVariantMasks.where("fileId").equals(n).count();
		D = !await v(g, [
			g.files,
			g.diaryEntries,
			g.markers,
			g.actiwareFileData
		], async () => !c?.aborted && await jn(n, s, _, g) === C && await g.files.update(n, { scoredVariantWarm: {
			inputs: C,
			maskDays: e,
			outcome: S.size > 0 ? "known-failures" : "complete",
			failedDays: S.size
		} }) > 0, c);
	} catch {
		D = !0, console.warn("[local-processing] Scored-variant warm stamp could not be saved.");
	}
	return y.dayFailures = D ? Math.max(S.size, M) : S.size, y;
}
async function Wn(e, n, t, r, a) {
	await e(), 0 !== t.variantsComputed && await P.recordWorkspaceBoundDurably(r, O.SYSTEM_RECALCULATION, {
		subject: "scored_variant_precompute",
		fileId: n,
		dayCount: t.dayCount,
		variantsComputed: t.variantsComputed,
		variantsSkipped: t.variantsSkipped,
		trigger: "file_processing"
	});
}
function Ln() {
	return M(C.SCORED_VARIANT_WARM);
}
function Yn(n, t = {}) {
	const r = t.db ?? I();
	return z({
		kind: C.SCORED_VARIANT_WARM,
		key: te(n),
		label: "Scoring variants",
		workspaceId: r.name,
		signal: t.signal,
		rerun: !0,
		run: (s) => async function(n, { forget: t = !1, resumeIncomplete: r = !1, retryKnownFailures: s = !0, db: o = I() }, i) {
			try {
				if (I() !== o) return;
				const c = await o.files.get(n);
				if (I() !== o || !c || "incomplete" === c.ingestState || 0 === c.availableDates.length || !c.sourceType || c.epochLengthSeconds > 60) return;
				const l = a().scoring(), { username: u, selectedStudyId: d } = l, f = e(c.sourceType, "local");
				if (!f) return;
				const m = wn(l);
				if (!t && !r) return;
				const p = await jn(n, f, m(c), o);
				if (I() !== o) return;
				if (!t && c.scoredVariantWarm?.outcome && c.scoredVariantWarm.inputs === p && (!s || "known-failures" !== c.scoredVariantWarm.outcome)) return;
				const g = c.scoredVariantWarm;
				if (!await v(o, [
					o.files,
					o.diaryEntries,
					o.markers,
					o.actiwareFileData,
					o.scoredVariantMasks
				], async () => {
					const e = await o.files.get(n);
					if (I() !== o || !e || JSON.stringify(e.scoredVariantWarm) !== JSON.stringify(g)) return !1;
					const r = await jn(n, f, m(e), o);
					if (I() !== o || r !== p) return !1;
					if (e.scoredVariantWarm && (!e.scoredVariantWarm.outcome || e.scoredVariantWarm.inputs !== p) && (await o.scoredVariantMasks.where("fileId").equals(n).delete(), I() !== o)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					if ((t || e.scoredVariantWarm) && (await o.files.where(":id").equals(n).modify((e) => {
						delete e.scoredVariantWarm;
					}), I() !== o)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					return !0;
				}, i.signal) || I() !== o) return;
				await async function(e, n, t, r, s, o, i) {
					let c = !1;
					const l = () => {
						c = !0, ge("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" });
					};
					if (I() !== s) return;
					Ce({
						fileId: e,
						done: 0,
						total: n.length
					}, s);
					const u = S(() => {
						I() !== s && a().jobs().cancel(`${s.name}:${te(e)}`);
					}), d = new AbortController(), f = () => {
						d.abort();
					};
					i.signal.addEventListener("abort", f, { once: !0 });
					try {
						const a = await Nn(e, n, t, (e) => {
							i.progress(Number.parseInt(e.message, 10), n.length, e.message);
						}, s, i.signal, A(d.signal), f, o, r);
						await Wn(() => Promise.resolve(), e, a, r, i.signal), i.signal.throwIfAborted(), a.dayFailures > 0 && (console.warn("[local-processing] Some days could not be precomputed; reimport the file to retry."), l());
					} catch {
						if (i.signal.aborted) return;
						console.warn("[local-processing] Background scored-variant warm failed."), l();
					} finally {
						i.signal.removeEventListener("abort", f), u(), Ce(c && !i.signal.aborted && I() === s ? {
							fileId: e,
							done: Y()?.done ?? 0,
							total: n.length,
							failed: !0
						} : null, s);
					}
					if (c) throw new Error("Background scored-variant warm failed.");
				}(n, c.availableDates, f, P.captureWorkspaceBinding(o, {
					username: u,
					studyId: d,
					signal: i.signal
				}), o, m, i);
			} catch {
				if (i.signal.aborted) return;
				console.warn("[local-processing] Scored-variant warm could not be scheduled."), ge("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" }), I() === o && Ce({
					fileId: n,
					done: 0,
					total: 0,
					failed: !0
				}, o);
			}
		}(n, {
			...t,
			db: r
		}, s)
	});
}
function Un(n, { retryKnownFailures: t = !1, signal: r } = {}) {
	return z({
		kind: C.VARIANT_RECOVERY,
		key: C.VARIANT_RECOVERY,
		label: "Resume scoring variants",
		workspaceId: n.name,
		signal: r,
		run: async (r) => {
			await n.projectMeta.get(Q);
			const s = (n) => null != n.id && "incomplete" !== n.ingestState && Boolean(n.sourceType && e(n.sourceType, "local")) && n.availableDates.length > 0 && !(n.epochLengthSeconds > 60), o = (await N(n)).filter(s);
			for (const e of o) {
				if (I() !== n) return;
				await Yn(e.id, {
					db: n,
					resumeIncomplete: !0,
					retryKnownFailures: t,
					signal: r.signal
				}), await r.yieldNow();
			}
			if (I() !== n || !n.isOpen()) return;
			const i = wn(a().scoring());
			await v(n, [
				n.projectMeta,
				n.files,
				n.diaryEntries,
				n.markers,
				n.actiwareFileData
			], async () => {
				const r = [], a = (await N(n)).filter(s);
				for (const s of a) {
					const a = e(s.sourceType, "local"), c = await jn(s.id, a, i(s), n), l = (await n.files.get(s.id))?.scoredVariantWarm;
					if (!l?.outcome || l.inputs !== c || I() !== n) return void await n.projectMeta.delete(Q);
					r.push([s.id, c]), "known-failures" !== l.outcome || o.find((e) => e.id === s.id)?.scoredVariantWarm?.inputs === c && !t || Ce({
						fileId: s.id,
						done: s.availableDates.length,
						total: s.availableDates.length,
						failed: !0
					}, n);
				}
				await n.projectMeta.put({
					key: Q,
					revision: Number.parseInt(oe(r), 16)
				});
			}, r.signal);
		}
	}).catch((e) => {
		if (r?.aborted || e instanceof DOMException && "AbortError" === e.name) throw e;
		throw ge("warn", "Background scored-variant warm failed", { error_type: "Error" }), Ce({
			fileId: 0,
			done: 0,
			total: 0,
			failed: !0
		}, n), /* @__PURE__ */ new Error("Stored scoring variants could not be resumed.");
	});
}
async function Bn(e, n, t, r, a) {
	const s = r ?? i(), o = await In(s, e, `cube:${String(n)}:${JSON.stringify(a)}`, (e, t) => Bn(e, n, t, s, a));
	if (o) {
		const n = {}, t = [];
		for (const r of o) for (const a of r.value.historyOutputs) {
			const s = new Uint8Array(a.results), o = s.length !== r.run.group.timestamps.length, i = o ? e.counts30s?.timestamps.length ?? 0 : e.timestamps.length, c = n[a.cubeConfig.id] ?? new ArrayBuffer(i);
			new Uint8Array(c).set(s.slice(o ? r.nativeStart : r.start, o ? r.nativeEnd : r.end), o ? r.nativeOffset : r.offset), n[a.cubeConfig.id] || t.push({
				cubeConfig: a.cubeConfig,
				results: c
			}), n[a.cubeConfig.id] = c;
		}
		return {
			algorithmResults: n,
			historyOutputs: t,
			skipped: o.reduce((e, n) => e + n.value.skipped, 0)
		};
	}
	const c = Ue(a), l = Ye(c.modelId), u = $n(n, !!t && t.length > 0 && "unconfigured" !== l.id, l, !!e.counts30s && e.counts30s.axisY.length > 0, c.threshold ?? void 0), d = await async function(e) {
		const n = e.configIds ? new Set(e.configIds) : null, t = {}, r = [];
		for (const s of e.plan.configs) if (!n || n.has(s.id)) try {
			const n = await Ze(s, e.backend, e.signals, t);
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
		backend: r ?? i(),
		signals: Fn(e, n, l, t)
	}), f = {}, m = [], p = new Map(u.configs.map((e) => [e.id, e]));
	for (const [i, g] of Object.entries(d.outputs)) {
		const e = p.get(i);
		if (!e) throw new Error(`cube output ${i} has no planned config`);
		const n = zn(g);
		f[i] = n, m.push({
			cubeConfig: e,
			results: n
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
async function Gn(e, n, t) {
	if (!n) return {};
	const r = t ?? i(), a = await In(r, e, `hasib:${JSON.stringify(n)}`, (e) => Gn(e, n, r));
	if (a) {
		const n = {};
		for (const t of a) for (const [r, a] of Object.entries(t.value)) {
			if (!a) continue;
			const s = n[r] ?? new Uint8Array(e.timestamps.length);
			s.set(a.slice(t.start, t.end), t.offset), n[r] = s;
		}
		return n;
	}
	const s = (n.variants ?? Ie).filter((e) => e !== ze);
	if (0 === s.length) return {};
	const o = n.countSource ?? "neishabouri_vm_60s";
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
	}(e, o)) return {};
	const c = Float64Array.from(e.timestamps), l = (r.medianGapSeconds ? await r.medianGapSeconds(c) : await i().medianGapSeconds(c)) ?? n.countEpochSeconds ?? 60, u = await Oe({
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
		countEpochSeconds: l,
		...void 0 !== n.configs ? { configs: n.configs } : {}
	});
	return Object.fromEntries(u.map((e) => [e.key, e.result.sib]));
}
async function Kn(e, n, t) {
	const r = t ?? i(), a = await In(r, e, `ggir:${String(n)}`, (e) => Kn(e, n, r));
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
	const s = await Oe({
		backend: t ?? i(),
		variants: ["Sadeh1994", "ColeKripke1992"],
		anglez5s: /* @__PURE__ */ new Float64Array(),
		zeroCrossingY60s: new Float64Array(e.zeroCrossingY),
		countSource: "zero_crossing_y_60s",
		countEpochSeconds: n
	}), o = Ee("sadeh_1994"), c = Ee("cole_kripke_1992"), l = s.find((e) => e.variant === o)?.result.sib, u = s.find((e) => e.variant === c)?.result.sib;
	return l && u ? {
		sadeh: l,
		ck: u
	} : null;
}
async function Jn(e, n) {
	const t = [], r = e.sadeh_1994_actilife.length, a = (e) => {
		e && e.length === r && t.push(e);
	};
	a(e.sadeh_1994_actilife), a(e.sadeh_1994_original), a(e.cole_kripke_1992_actilife), a(e.cole_kripke_1992_original), a(e.sadeh_1994_ggir), a(e.cole_kripke_1992_ggir), a(e.lstm_sleep_wake);
	for (const [s, o] of Object.entries(e.hasibVariants ?? {})) s !== J.TENSOR_MAJORITY_VOTE && s !== J.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== w(s)?.grammarId && a(o);
	for (const [s, o] of Object.entries(e.cubeOutputs ?? {})) s !== J.TENSOR_MAJORITY_VOTE && s !== J.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== w(s)?.grammarId && a(o);
	return 0 === t.length ? new Uint8Array(r) : n.scoreConsensus("majority_tie_sleep", t);
}
Z((e, n, t) => {
	Yn(e, {
		resumeIncomplete: !0,
		retryKnownFailures: !1,
		db: n,
		signal: t
	}).catch(() => {});
});
export { Dn as _resetCubePlanCacheForTest, Ln as awaitScheduledScoredVariantWarms, Un as backfillInterruptedScoredVariantWarms, $n as buildOrReuseAlgorithmOutputCubePlan, zn as cloneOutputBuffer, Jn as computeTensorConsensusForDay, Tn as cubeRunsOnGrid, Wn as finalizeAndAuditScoredVariantWarm, Yn as rewarmFileScoredVariants, Bn as runAlgorithmCubeForDay, Kn as scoreBuiltinGgirSadehColeForDay, Gn as scoreCountBasedHasibVariantsForDay, Rn as sleepWakeToPersistedOutputs, On as t, Nn as warmFileScoredVariants, Hn as withRecordingWakeThreshold };
