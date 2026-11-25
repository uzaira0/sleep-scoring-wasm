import { C as e, D as n, Et as t, Gn as r, Hn as s, Jn as a, Jt as o, Qt as i, S as c, T as l, Tr as u, Un as d, Wn as f, Wr as p, X as m, Y as g, Yn as h, _n as w, an as y, b as v, f as b, g as S, in as k, kn as _, l as C, n as A, nr as E, o as I, p as O, r as z, t as M, vn as x, w as R, wr as F, yn as $ } from "./background-jobs-CtACoe42.js";
import { $ as T, $r as D, $t as V, Cn as P, E as j, En as N, F as L, Fr as Y, Ft as U, Gr as W, Hr as B, In as H, Ir as J, It as G, Ln as K, Lr as X, Nn as Z, Nr as q, Pn as Q, Pr as ee, Q as ne, Qn as te, Rn as re, S as se, Sn as ae, St as oe, Tn as ie, Un as ce, Ur as le, Vr as ue, Vt as de, X as fe, Y as pe, Zr as me, bt as ge, d as he, dt as we, fn as ye, gt as ve, ht as be, pt as Se, ur as ke, ut as _e, vt as Ce, w as Ae, wn as Ee, xn as Ie, zr as Oe } from "./db-GL-XcXL6.js";
import { a as ze, i as Me, n as xe, o as Re, t as Fe } from "./local-ggir-hasib-variants-BcxdRkui.js";
import { A as $e, E as Te, M as De, O as Ve, k as Pe, y as je } from "./local-nonwear-unified-CLQBVFz9.js";
import { a as Ne, g as Le, m as Ye, o as Ue } from "./epoch-utils-Cxly8wHc.js";
import { B as We } from "./local-export-worker-BdFlLgPy.js";
import { T as Be } from "./ingest-B7tq1PwN.js";
import { D as He, F as Je, I as Ge, N as Ke, it as Xe, ot as Ze } from "./ggir-import-8_9lvide.js";
var qe = class extends Error {};
async function Qe(e, n, t, r) {
	switch (e.family) {
		case "count_hasib": return async function(e, n, t) {
			const r = e.input.seriesKey, s = ze(r), a = t.counts?.[r];
			if (!a || 0 === a.length) throw new qe(`Missing count input ${r}.`);
			if ("string" == typeof e.parameters.implementation) return en(e), async function(e, n, t) {
				const r = function(e) {
					const n = x(e.id);
					if (null === n || "count_cell" !== n.grammarId) return null;
					const t = n.values.method_family, r = n.values.implementation_variant;
					return void 0 === t || void 0 === r ? null : o.find((e) => e.methodFamilyId === t && e.implementationVariantId === r)?.primitiveId ?? null;
				}(e);
				if ("sadeh" === r) {
					if (!n.scoreSadeh) throw new Error("Registry Sadeh primitive (scoreSadeh) unavailable on this worker bundle.");
					const r = i.scoring_threshold, s = "number" == typeof r ? r : 0, a = "number" == typeof e.parameters.threshold ? e.parameters.threshold : s;
					return n.scoreSadeh(t, a);
				}
				if ("cole_kripke" === r) {
					if (!n.scoreColeKripke) throw new Error("Registry Cole-Kripke primitive (scoreColeKripke) unavailable on this worker bundle.");
					const r = !0 === e.parameters.useActilifeScaling;
					return n.scoreColeKripke(t, r);
				}
				throw new Error(`Unsupported provenance count scorer ${e.algorithm}.`);
			}(e, n, a);
			const c = function(e) {
				if (xe.includes(e.algorithm)) return null;
				const n = x(e.id)?.values.method_family, t = _.find((e) => "sleep_wake" === e.kind && e.family === n), r = t?.nativeEpochSeconds;
				return !t || 30 !== r && 60 !== r ? null : {
					methodId: t.id,
					nativeEpochSeconds: r
				};
			}(e);
			if (c) return async function(e, n, t, r) {
				const s = ze(e.input.seriesKey), a = w(s.family, s.axis, n.nativeEpochSeconds), o = r.counts?.[a];
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
			}(e, c, n, t);
			en(e);
			const l = (await Re({
				backend: n,
				variants: [e.algorithm],
				anglez5s: /* @__PURE__ */ new Float64Array(),
				countSource: r,
				countEpochSeconds: s.epochSeconds,
				..."neishabouri" === s.family ? { neishabouriCounts: { [s.axis]: a } } : { zeroCrossingCountsByAxis: { [s.axis]: a } }
			}))[0];
			if (!l) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return l.result.sib;
		}(e, n, t);
		case "angle_hasib": return async function(e, n, t) {
			const r = k.angle_hasib;
			if (void 0 === r || e.algorithm !== r.algorithmValue) throw new Error(`Unsupported angle-HASIB algorithm ${e.algorithm}.`);
			if (!t.anglez5s || 0 === t.anglez5s.length) throw new qe(`Missing ${r.inputSeriesKey} input.`);
			const s = (await Re({
				backend: n,
				variants: [e.algorithm],
				anglez5s: t.anglez5s,
				countSource: w(y, "y", 60)
			}))[0];
			if (!s) throw new Error(`HASIB ${e.algorithm} produced no output.`);
			return s.result.sib;
		}(e, n, t);
		case "lstm": return async function(e, n, t) {
			const r = "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm, s = t.lstmProbabilities?.[r];
			if (!s || 0 === s.length) throw new qe(`Missing LSTM probabilities for ${r}.`);
			const a = i.model_threshold, o = "number" == typeof e.parameters.threshold ? e.parameters.threshold : "number" == typeof a ? a : .5;
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
			const a = "string" == typeof e.parameters.strategy ? e.parameters.strategy : i.consensus_strategy;
			return t.scoreConsensus(a, r);
		}(e, r, n);
	}
}
function en(e) {
	const n = x(e.id)?.values, t = n?.implementation_variant, r = Oe(String(n?.method_family), void 0 === t ? void 0 : String(t));
	if (!r.includes(e.epochSeconds)) throw new Error(`programming error: ${e.id} reached the runner, but ${e.algorithm} is valid only at ${r.join(", ")} s and the planner never plans it.`);
}
function nn(e) {
	return B(e ?? null);
}
function tn(e) {
	return U(e).map((e) => [e.start, e.end]);
}
function rn(e) {
	return G(e).map((e) => [e.start, e.end]);
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
async function on(e, n, t = O(), r = {}) {
	const s = t, a = r.readDay ?? ((n) => he(e, n, s)), o = await Ue(e, n, s, a, r.fileRecord?.navigationFacts, r.wasmApi);
	if (!o) return null;
	const i = await a(await Ne(n, r.fileRecord?.navigationFacts, r.wasmApi)), c = (i ? [o, i] : [o]).filter((e) => e.timestamps.byteLength > 0), l = sn(c.map((e) => e.timestamps)), { startIndex: u, endIndex: d } = await We(l, n, r.wasmApi);
	if (d <= u) return null;
	const f = l.subarray(u, d), p = Array.from(f), m = Array.from(sn(c.map((e) => e.axisY)).subarray(u, d)), g = await ne(f, {
		day: c[0],
		file: r.fileRecord
	}, r.wasmApi), h = await Ae(e, s, r.fileRecord ? { file: r.fileRecord } : void 0), w = {}, y = {}, v = {};
	for (const O of h.cellIds) {
		const e = h(O), n = de(c, e);
		if ("stale" === n.status) {
			y[O] = n.reason;
			continue;
		}
		const t = n.outputs.filter((e) => null != e);
		if (t.length !== c.length) continue;
		const s = await Promise.all(t.map(async (e, n) => (await Ye(c[n], new Uint8Array(e), r.wasmApi))?.buffer ?? e));
		w[O] = Array.from(an(s).subarray(u, d)), "ok" === e.status && null !== e.configHash && (v[O] = e.configHash);
	}
	const b = r.fileRecord ? Promise.resolve(r.fileRecord) : se(e, s), [S, k, _, C, A] = await Promise.all([
		fe(e, n, s),
		"activitySpan" in r ? r.activitySpan ?? null : Ce(e, s),
		s.scoredVariantMasks.get([e, n]),
		b.then((t) => Ee(Ge, {
			fileId: e,
			file: t,
			date: n,
			db: s,
			autoScoreMarker: (t) => ce(e, n, le, t, void 0, s)
		})),
		b
	]), E = S ? await ge(S, k, r.wasmApi) : null, I = p[0] ?? 0, z = (p[p.length - 1] ?? I) + g, M = c.flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter((e) => e >= I && e < z), x = E ? {
		diaryInBedTime: _e(R = E),
		onsetTime: we(R),
		diaryWakeTime: Se(R),
		naps: tn(R),
		nonwear: rn(R)
	} : void 0;
	var R;
	const F = "warm-v3:" + B({
		diary: nn(x),
		...P(Ge, C),
		eventMarkerTimestamps: M,
		seriesRevision: A?.seriesRevision ?? 0,
		classifierConfigHashes: Object.keys(v).length > 0 ? v : void 0
	}), $ = _?.diaryFingerprint === F, T = {};
	if (_?.masks && $) for (const [O, P] of Object.entries(_.masks)) P.byteLength === p.length && (T[O] = new Uint8Array(P));
	const D = c.flatMap((e) => e.temperature && e.temperature.byteLength > 0 ? [e.temperature] : []), V = D.length === c.length ? Array.from(sn(D).subarray(u, d)) : void 0;
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
		precomputedVariantMasks: T,
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
	const t = {
		classifierConfigId: e.classifierConfigId.trim(),
		nonwear: cn(e.nonwear),
		periodSource: cn(e.periodSource),
		ruleset: cn(e.ruleset),
		rescoring: cn(e.rescoring)
	}, r = "study_selection" === t.nonwear && n?.length ? `${t.nonwear}_${[...new Set(n)].sort().join("_")}` : t.nonwear;
	return {
		id: $("scored_variant", {
			classifier_config_id: t.classifierConfigId,
			nonwear: r,
			period_source: t.periodSource,
			ruleset: t.ruleset,
			rescoring: t.rescoring
		}),
		configHash: B({
			...t,
			nonwear: r
		}),
		config: t
	};
}
const un = "cube_cell_absent", dn = new Map(_.map((e) => [e.id, e])), fn = new Set(ee.map((e) => e.slug)), pn = [30, 60];
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
const hn = k.angle_hasib?.configId ?? "";
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
		const e = gn(hn, () => Y({
			includeFamilies: ["angle_hasib"],
			includeConsensus: !1
		}).configs);
		return e ? wn(e) : mn(un, "the van_hees_2015 angle cell was not present in the cube plan");
	}();
	const s = r.family ?? "";
	return "sleep_wake" === r.kind && fn.has(s) ? function(e, n) {
		const t = e.countMetric.trim();
		if (r = t, !Object.prototype.hasOwnProperty.call(q, r)) return mn("unknown_count_metric", `count metric "${e.countMetric}" is not a cube count source (expected neishabouri or zero_crossing)`);
		var r;
		const s = e.axis.trim();
		if (!q[t].includes(s)) return mn("incompatible_axis", `axis "${e.axis}" is not available for count metric "${t}"`);
		const a = e.epochSeconds;
		if (!pn.includes(a)) return mn("unsupported_epoch", `epoch length ${String(a)}s is not a count-cube epoch (expected 30 or 60)`);
		const o = a, i = $("count_cell", {
			method_family: n,
			count_family: t,
			axis: s,
			epoch_seconds: o
		}), c = gn(i, () => Y({
			includeFamilies: ["count_hasib"],
			includeConsensus: !1,
			epochSeconds: [o]
		}).configs);
		return c ? wn(c) : mn(un, `derived cube cell "${i}" was not present in the cube plan`);
	}(e, s) : mn("not_a_cube_scorer", `algorithm "${t}" has no directly scorer-addressable count/angle cube cell`);
}
function vn(e) {
	return (n) => {
		const t = V(e, n);
		return function(e) {
			const n = Ve(e.currentAlgorithm), t = yn({
				...n,
				algorithm: De(n.family, n.implementation) ?? e.currentAlgorithm,
				sleepDetectionRule: e.sleepDetectionRule,
				placementRuleset: e.placementRuleset,
				scorerPostprocessingPreset: e.scorerPostprocessingPreset
			}), r = /* @__PURE__ */ new Set();
			if (!e.placementFromSource && t.ok && Pe($e(n.family)) === e.extractionPath && r.add(t.variant.cubeCellId), e.ggirHasibVariantsEnabled && !e.placementFromSource) {
				const n = ze(e.ggirHasibCountSource);
				for (const t of e.ggirHasibVariants) {
					const s = ee.find((e) => e.algorithm === t), a = t === Fe ? "van_hees_2015" : _.find((e) => e.family === s?.slug)?.id;
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
			const s = "ggir" === je(e.currentAlgorithm) ? e.nonwearDetectorsGgir : e.nonwearDetectorsCounts;
			return {
				classifierConfigIds: [...r],
				nonwearDetectors: 1 === s.length ? [...s] : [ye],
				studyNonwearSelection: [...s],
				rulesets: [e.placementRuleset],
				rescorings: [e.scorerPostprocessingPreset],
				periodSources: "smart" === e.periodGuider ? [me.diary, me.hdcza] : [Ie(e.periodGuider, { hasDiary: !1 })?.source_a ?? me.diary]
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
function bn(e, n, t, s) {
	if (d.includes(e) && !n) return {
		included: !1,
		reason: "no diary for this day"
	};
	const o = f[e];
	if (void 0 !== o && s && (!N(e) || !s.guiderWindows[e])) return {
		included: !1,
		reason: o
	};
	if (e === me.event_marker && s && !s.eventMarkerTimestamps?.length) return {
		included: !1,
		reason: "no event-marker presses for this day"
	};
	const i = a(t, r[e]);
	return null === i ? { included: !0 } : {
		included: !1,
		reason: `unsatisfied source capability: ${i.map((e) => `${e}=false`).join(", ") || "no implemented input signal"}`
	};
}
function Sn(e, n) {
	const t = s[e];
	for (const r of t ?? []) if (r.length > 0 && r.every((e) => n.has(e))) return {
		included: !1,
		reason: `day input unavailable: ${r.join(" or ")}`
	};
	return { included: !0 };
}
async function kn(e, n, r) {
	const s = X(e);
	if (s && ue(s, n.epochLengthSeconds) !== n.epochLengthSeconds) return async function(e, n, r) {
		const s = Float64Array.from(n.timestamps), a = n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts), o = await Xe(r, {
			timestamps: s,
			axisY: a,
			vectorMagnitude: /* @__PURE__ */ new Float64Array()
		}, n.epochLengthSeconds), i = (await He(r, { day: o }, ["day"], t, void 0, [e])).day?.get(e);
		return i?.available && i.nonwear ? { mask: await Ze(r, o.timestamps, i.nonwear, s) } : {
			mask: null,
			reason: i?.reason ?? null
		};
	}(e, n, r ?? g());
	const a = {
		counts: n.activityCounts instanceof Float64Array ? n.activityCounts : Float64Array.from(n.activityCounts),
		epochSeconds: n.epochLengthSeconds
	};
	n.nonwearSignals?.temperature && (a.temperature = new Float64Array(n.nonwearSignals.temperature)), n.nonwearSignals?.raw && (a.raw = n.nonwearSignals.raw), null != n.nonwearSignals?.sampleRate && (a.sampleRate = n.nonwearSignals.sampleRate);
	const o = await (r ?? g()).detectNonwearUnified({
		algorithm: e,
		signals: a
	});
	if (!o.available || null == o.nonwear) return {
		mask: null,
		reason: o.reason ?? null
	};
	if (o.elementSeconds === n.epochLengthSeconds && n.epochLengthSeconds > 0 && o.nonwear.length === n.timestamps.length && n.timestamps.every((e, t) => e === n.timestamps[0] + t * n.epochLengthSeconds) && o.nonwear.every((e) => 0 === e || 1 === e)) return { mask: o.nonwear };
	const i = Te(o, n.timestamps[0] ?? 0);
	return { mask: (await (r ?? g()).rasterizePeriods(Float64Array.from(i, (e) => e.startTsSec), Float64Array.from(i, (e) => e.endTsSec), Float64Array.from(n.timestamps), n.epochLengthSeconds)).mask };
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
	return `${String(n.length)}:${B(n)}`;
}
function En(e, n) {
	for (const t of n) {
		if (e.notes.length >= 12) return;
		e.notes.includes(t) || e.notes.push(t);
	}
}
async function In(n, t, { db: r = O(), signal: s, wasmApi: a, cancelOperation: o, narrowing: i } = {}) {
	const d = {
		computed: 0,
		skipped: 0,
		missingClassifier: 0,
		placementUnavailable: !1,
		notes: []
	}, f = a ?? g(), p = o ?? (() => {
		m(f);
	});
	c(s, "before the scored-variant plan");
	const h = function(e) {
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
		for (const u of t.nonwearAlgorithms) {
			if (e.nonwearDetectors && !e.nonwearDetectors.includes(u)) continue;
			const n = a ? Sn(u, c) : { included: !0 };
			n.included ? l.push(u) : o.push({
				axis: "nonwear",
				value: u,
				reason: n.reason
			});
		}
		const d = [...new Set(e.studyNonwearSelection ?? [])];
		let f;
		d.length > 1 && (!e.nonwearDetectors || e.nonwearDetectors.includes("study_selection")) && (d.filter((e) => t.nonwearAlgorithms.includes(e) && (!a || Sn(e, c).included)).length > 0 ? (l.push(ye), f = d) : o.push({
			axis: "nonwear",
			value: ye,
			reason: "none of the study's nonwear detectors can run for this day"
		}));
		const p = s ? ["none", ...l] : l, m = [], g = 2 === e.periodSources?.length && e.periodSources[0] === me.diary && e.periodSources[1] === me.hdcza ? [r ? me.diary : me.hdcza] : e.periodSources;
		for (const u of Object.values(me)) {
			if (g && !g.includes(u)) continue;
			const e = bn(u, r, t, a);
			e.included ? m.push(u) : o.push({
				axis: "periodSource",
				value: u,
				reason: e.reason
			});
		}
		const h = e.rulesets ?? [F.LEGACY, F.REGULARITY_V2], w = e.rescorings ?? [u.NONE, u.WEBSTER], y = {
			classifierConfigIds: [...i],
			nonwear: p,
			periodSource: m,
			ruleset: h,
			rescoring: w
		}, v = [], b = /* @__PURE__ */ new Set();
		for (const u of i) for (const e of p) for (const n of m) for (const t of h) for (const r of w) {
			const s = ln({
				classifierConfigId: u,
				nonwear: e,
				periodSource: n,
				ruleset: t,
				rescoring: r
			}, f);
			b.has(s.id) || (b.add(s.id), v.push(s));
		}
		return {
			variants: v,
			axes: y,
			skipped: o,
			...f ? { studyNonwearSelection: f } : {}
		};
	}({
		classifierConfigIds: Object.keys(n.classifierOutputs),
		capabilities: t,
		hasDiary: null != n.diary,
		day: n,
		...i
	});
	if (0 === h.variants.length) return d;
	const w = h.variants.filter((e) => !n.precomputedVariantMasks[e.id]);
	if (d.skipped = h.variants.length - w.length, 0 === w.length) return d;
	const y = {};
	c(s, "before scored-variant nonwear computation");
	const b = await I(f, (e) => async function(e, n, t) {
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
	}(h), e), {
		ms: v,
		label: "scored-variant nonwear computation",
		signal: s,
		cancel: p
	});
	for (let e = 0; e < w.length; e += 2e3) {
		c(s, "before scored-variant warm computation");
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
			...h.studyNonwearSelection ? { studyNonwearDetectors: h.studyNonwearSelection } : {},
			variants: w.slice(e, e + 2e3).map((e) => ({
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
			h.studyNonwearSelection
		]) : An(t);
		let i = Cn.get(f);
		i || (i = /* @__PURE__ */ new Map(), Cn.set(f, i));
		const l = i.get(a) ?? await I(f, (e) => e.runScoredVariantBatch(t), {
			ms: 3e5,
			label: "scored-variant warm computation",
			signal: s,
			cancel: o ?? (() => {
				m(f);
			})
		});
		if (0 === Object.keys(l.masks).length && i.set(a, l), c(s, "after scored-variant warm computation"), Object.assign(y, l.masks), d.computed += Object.keys(l.masks).length, d.missingClassifier += l.missingClassifier, En(d, l.notes), l.placementUnavailable) {
			d.placementUnavailable = !0;
			break;
		}
	}
	if (Object.keys(y).length > 0) {
		let t;
		try {
			c(s, "before scored-variant warm persistence");
			const { controller: a, release: o } = e(s);
			t = o;
			const i = a.signal;
			if (!await I(f, (e) => L(n.fileId, n.analysisDate, y, n.diaryFingerprint, r, e, i), {
				ms: 3e5,
				label: "scored-variant warm persistence",
				signal: void 0,
				cancel: () => {
					a.abort(), p();
				}
			})) throw new _n();
		} catch (S) {
			s?.aborted && p(), l(S, s, "scored-variant warm persistence");
			const e = S instanceof Error && "QuotaExceededError" === S.name ? "QuotaExceededError" : "Error";
			throw console.warn("[scored-variant-warm] Precomputed mask persistence failed.", e), ke("warn", "Precomputed variant mask persistence failed", { error_type: e }), new _n(R(S));
		} finally {
			t?.();
		}
	}
	return d;
}
const On = /* @__PURE__ */ new WeakMap();
async function zn(e, n, t, r) {
	const s = On.get(e)?.get(n);
	return s ? Promise.all(s.map(async (e) => {
		let n = e.run.answers.get(t);
		return n || (n = r(e.run.group, e.run.probabilities), e.run.answers.set(t, n)), {
			...e,
			value: await n
		};
	})) : null;
}
function Mn(e, n) {
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
		const e = D(r);
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
	s && 0 !== s.length && (e[J(n, t, r)] = new Float64Array(s));
}
function $n(e, n, t, r) {
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
function Tn(e) {
	return 120 !== e;
}
const Dn = /* @__PURE__ */ new Map();
function Vn(e, n, t, r = !1, s) {
	const a = r && 30 !== e ? [30, e] : [e], o = a.join(","), i = n ? `${o}|lstm|${t.id}|${t.label}|selected:${String(s ?? "none")}|${JSON.stringify(t.thresholdPresets ?? null)}` : `${o}|nolstm`, c = Dn.get(i);
	if (c) return c;
	const l = Y({
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
	return Dn.set(i, l), l;
}
function Pn() {
	Dn.clear();
}
const jn = {
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
		pe(e, r),
		ie(Ge, e, r)
	]);
	return "warm-v3:" + B({
		plan: Nn(n, t),
		series: [
			s?.sourceType,
			s?.sourceContentHash,
			s?.seriesRevision ?? 0,
			s?.epochLengthSeconds,
			s?.availableDates
		],
		geometry: a.some((e) => !e.importMappingProvenance?.diaryTemporalPolicy) ? oe() : null,
		diaries: a.map((e) => ({
			date: e.analysisDate,
			inBed: e.diaryInBedTime,
			onset: e.diaryOnsetTime,
			wake: e.diaryWakeTime,
			outOfBed: e.diaryOutOfBedTime,
			overlay: e.decisionOverlayJson,
			policy: e.importMappingProvenance?.diaryTemporalPolicy,
			naps: be(e),
			nonwear: ve(e)
		})),
		...o
	});
}
async function Yn(e, t, r, s, a = O(), o, i, u, d = vn(p().scoring()), f) {
	const m = a;
	if (!r) return jn;
	const g = await se(e, m);
	if (g?.sourceType && !h(g.sourceType, "local")) return jn;
	const w = { ...jn }, y = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set(), k = await Ce(e, m).then((e) => ({
		fileRecord: g,
		activitySpan: e
	}), () => ({ fileRecord: g })), _ = d?.(k.fileRecord), C = await Ln(e, r, _, m), A = /* @__PURE__ */ new Set();
	if (T(k.fileRecord) > 60) return jn;
	let E = /* @__PURE__ */ new Map();
	const I = (n) => {
		let t = E.get(n);
		return t || (t = he(e, n, m), E.set(n, t)), t;
	};
	let z = !1;
	const M = H((n, t) => {
		n === e && t === m && (z = !0);
	}), x = t.length;
	let F = 0;
	s?.({
		phase: "variants",
		percent: 98,
		message: `0/${String(x)} days`
	});
	const $ = () => {
		F >= x || (F += 1, s?.({
			phase: "variants",
			percent: 0 === x ? 100 : 98 + 2 * F / x,
			message: `${String(F)}/${String(x)} days`
		}));
	};
	let D = !1;
	try {
		let s = t;
		for (let a = 0; a < 2; a++) {
			E = /* @__PURE__ */ new Map();
			for (const t of s) if (D) S.add(t), $();
			else {
				performance.now(), w.variantsComputed;
				for (const e of E.keys()) e < t && E.delete(e);
				try {
					c(o, "before scored-variant warm day load");
					const s = await n(() => on(e, t, m, {
						...k,
						readDay: I,
						wasmApi: i
					}), v, "scored-variant day load", o, u ?? (() => {}));
					if (c(o, "after scored-variant warm day load"), !s || 0 === Object.keys(s.classifierOutputs).length) {
						$();
						continue;
					}
					const a = await In(s, r, {
						db: m,
						signal: o,
						wasmApi: i,
						cancelOperation: u,
						narrowing: _
					});
					A.delete(t), w.variantsComputed += a.computed, y.has(t) || (w.variantsSkipped += a.skipped), a.placementUnavailable || 0 !== a.missingClassifier ? S.add(t) : (y.add(t), S.delete(t)), $(), a.placementUnavailable && console.warn("[local-processing] Scored-variant warm placement was unavailable.");
				} catch (P) {
					l(P, o, "scored-variant warm"), console.warn("[local-processing] Scored-variant warm failed."), R(P) && (D = !0), P instanceof Error && "ScoredVariantPersistenceError" === P.name && A.add(t), S.add(t), $();
				}
			}
			if (D || a > 0 || !z && 0 === S.size) break;
			s = z ? t : [...S], z = !1;
		}
	} finally {
		M(), E = /* @__PURE__ */ new Map(), w.dayCount = y.size, o?.aborted && f && await Un(() => Promise.resolve(), e, w, f);
	}
	let V = z || A.size > 0 || Boolean(o?.aborted);
	if (!V) try {
		const n = await m.scoredVariantMasks.where("fileId").equals(e).count();
		V = !await b(m, [
			m.files,
			m.diaryEntries,
			...ae(Ge, m)
		], async () => !o?.aborted && await Ln(e, r, _, m) === C && await m.files.update(e, { scoredVariantWarm: {
			inputs: C,
			maskDays: n,
			outcome: S.size > 0 ? "known-failures" : "complete",
			failedDays: S.size
		} }) > 0, o);
	} catch {
		V = !0, console.warn("[local-processing] Scored-variant warm stamp could not be saved.");
	}
	return w.dayFailures = V ? Math.max(S.size, x) : S.size, w;
}
async function Un(e, n, t, r, s) {
	await e(), 0 !== t.variantsComputed && await te.recordWorkspaceBoundDurably(r, E.SYSTEM_RECALCULATION, {
		subject: "scored_variant_precompute",
		fileId: n,
		dayCount: t.dayCount,
		variantsComputed: t.variantsComputed,
		variantsSkipped: t.variantsSkipped,
		trigger: "file_processing"
	});
}
function Wn() {
	return M(C.SCORED_VARIANT_WARM);
}
function Bn(e, n = {}) {
	const t = n.db ?? O();
	return z({
		kind: C.SCORED_VARIANT_WARM,
		key: K(e),
		label: "Scoring variants",
		workspaceId: t.name,
		signal: n.signal,
		rerun: !0,
		run: (r) => async function(e, { forget: n = !1, resumeIncomplete: t = !1, retryKnownFailures: r = !0, db: s = O() }, a) {
			try {
				if (O() !== s) return;
				const o = await s.files.get(e);
				if (O() !== s || !o || "incomplete" === o.ingestState || 0 === o.availableDates.length || !o.sourceType || o.epochLengthSeconds > 60) return;
				const i = p().scoring(), { username: c, selectedStudyId: l } = i, u = h(o.sourceType, "local");
				if (!u) return;
				const d = vn(i);
				if (!n && !t) return;
				const f = await Ln(e, u, d(o), s);
				if (O() !== s) return;
				if (!n && o.scoredVariantWarm?.outcome && o.scoredVariantWarm.inputs === f && (!r || "known-failures" !== o.scoredVariantWarm.outcome)) return;
				const m = o.scoredVariantWarm;
				if (!await b(s, [
					s.files,
					s.diaryEntries,
					...ae(Ge, s),
					s.scoredVariantMasks
				], async () => {
					const t = await s.files.get(e);
					if (O() !== s || !t || JSON.stringify(t.scoredVariantWarm) !== JSON.stringify(m)) return !1;
					const r = await Ln(e, u, d(t), s);
					if (O() !== s || r !== f) return !1;
					if (t.scoredVariantWarm && (!t.scoredVariantWarm.outcome || t.scoredVariantWarm.inputs !== f) && (await s.scoredVariantMasks.where("fileId").equals(e).delete(), O() !== s)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					if ((n || t.scoredVariantWarm) && (await s.files.where(":id").equals(e).modify((e) => {
						delete e.scoredVariantWarm;
					}), O() !== s)) throw new DOMException("Aborted: scored-variant recovery", "AbortError");
					return !0;
				}, a.signal) || O() !== s) return;
				await async function(e, n, t, r, s, a, o) {
					let i = !1;
					const c = () => {
						i = !0, ke("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" });
					};
					if (O() !== s) return;
					re({
						fileId: e,
						done: 0,
						total: n.length
					}, s);
					const l = S(() => {
						O() !== s && p().jobs().cancel(`${s.name}:${K(e)}`);
					}), u = new AbortController(), d = () => {
						u.abort();
					};
					o.signal.addEventListener("abort", d, { once: !0 });
					try {
						const i = await Yn(e, n, t, (e) => {
							o.progress(Number.parseInt(e.message, 10), n.length, e.message);
						}, s, o.signal, A(u.signal), d, a, r);
						await Un(() => Promise.resolve(), e, i, r, o.signal), o.signal.throwIfAborted(), i.dayFailures > 0 && (console.warn("[local-processing] Some days could not be precomputed; reimport the file to retry."), c());
					} catch {
						if (o.signal.aborted) return;
						console.warn("[local-processing] Background scored-variant warm failed."), c();
					} finally {
						o.signal.removeEventListener("abort", d), l(), re(i && !o.signal.aborted && O() === s ? {
							fileId: e,
							done: Q()?.done ?? 0,
							total: n.length,
							failed: !0
						} : null, s);
					}
					if (i) throw new Error("Background scored-variant warm failed.");
				}(e, o.availableDates, u, te.captureWorkspaceBinding(s, {
					username: c,
					studyId: l,
					signal: a.signal
				}), s, d, a);
			} catch {
				if (a.signal.aborted) return;
				console.warn("[local-processing] Scored-variant warm could not be scheduled."), ke("warn", "Background scored-variant warm failed", { category: "scored-variant-warm" }), O() === s && re({
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
	return z({
		kind: C.VARIANT_RECOVERY,
		key: C.VARIANT_RECOVERY,
		label: "Resume scoring variants",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			await e.projectMeta.get(Z);
			const r = (e) => null != e.id && "incomplete" !== e.ingestState && Boolean(e.sourceType && h(e.sourceType, "local")) && e.availableDates.length > 0 && !(e.epochLengthSeconds > 60), s = (await j(e)).filter(r);
			for (const o of s) {
				if (O() !== e) return;
				await Bn(o.id, {
					db: e,
					resumeIncomplete: !0,
					retryKnownFailures: n,
					signal: t.signal
				}), await t.yieldNow();
			}
			if (O() !== e || !e.isOpen()) return;
			const a = vn(p().scoring());
			await b(e, [
				e.projectMeta,
				e.files,
				e.diaryEntries,
				...ae(Ge, e)
			], async () => {
				const t = [], o = (await j(e)).filter(r);
				for (const r of o) {
					const o = h(r.sourceType, "local"), i = await Ln(r.id, o, a(r), e), c = (await e.files.get(r.id))?.scoredVariantWarm;
					if (!c?.outcome || c.inputs !== i || O() !== e) return void await e.projectMeta.delete(Z);
					t.push([r.id, i]), "known-failures" !== c.outcome || s.find((e) => e.id === r.id)?.scoredVariantWarm?.inputs === i && !n || re({
						fileId: r.id,
						done: r.availableDates.length,
						total: r.availableDates.length,
						failed: !0
					}, e);
				}
				await e.projectMeta.put({
					key: Z,
					revision: Number.parseInt(B(t), 16)
				});
			}, t.signal);
		}
	}).catch((n) => {
		if (t?.aborted || n instanceof DOMException && "AbortError" === n.name) throw n;
		throw ke("warn", "Background scored-variant warm failed", { error_type: "Error" }), re({
			fileId: 0,
			done: 0,
			total: 0,
			failed: !0
		}, e), /* @__PURE__ */ new Error("Stored scoring variants could not be resumed.");
	});
}
async function Jn(e, n, t, r, s) {
	const a = r ?? g(), o = await zn(a, e, `cube:${String(n)}:${JSON.stringify(s)}`, (e, t) => Jn(e, n, t, a, s));
	if (o) {
		const n = {}, t = [];
		for (const r of o) for (const s of r.value.historyOutputs) {
			const a = new Uint8Array(s.results), o = a.length !== r.run.group.timestamps.length, i = o ? e.counts30s?.timestamps.length ?? 0 : e.timestamps.length, c = n[s.cubeConfig.id] ?? new ArrayBuffer(i);
			new Uint8Array(c).set(a.slice(o ? r.nativeStart : r.start, o ? r.nativeEnd : r.end), o ? r.nativeOffset : r.offset), n[s.cubeConfig.id] || t.push({
				cubeConfig: s.cubeConfig,
				results: c
			}), n[s.cubeConfig.id] = c;
		}
		return {
			algorithmResults: n,
			historyOutputs: t,
			skipped: o.reduce((e, n) => e + n.value.skipped, 0)
		};
	}
	const i = Je(s), c = Ke(i.modelId), l = Vn(n, !!t && t.length > 0 && "unconfigured" !== c.id, c, !!e.counts30s && e.counts30s.axisY.length > 0, i.threshold ?? void 0), u = await async function(e) {
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
		plan: l,
		backend: r ?? g(),
		signals: $n(e, n, c, t)
	}), d = {}, f = [], p = new Map(l.configs.map((e) => [e.id, e]));
	for (const [m, g] of Object.entries(u.outputs)) {
		const e = p.get(m);
		if (!e) throw new Error(`cube output ${m} has no planned config`);
		const n = xn(g);
		d[m] = n, f.push({
			cubeConfig: e,
			results: n
		});
	}
	return {
		algorithmResults: d,
		historyOutputs: f,
		skipped: u.skipped.filter((e) => !e.inputUnavailable).length
	};
}
function Gn(e, n) {
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
async function Kn(e, n, t) {
	if (!n) return {};
	const r = t ?? g(), s = await zn(r, e, `hasib:${JSON.stringify(n)}`, (e) => Kn(e, n, r));
	if (s) {
		const n = {};
		for (const t of s) for (const [r, s] of Object.entries(t.value)) {
			if (!s) continue;
			const a = n[r] ?? new Uint8Array(e.timestamps.length);
			a.set(s.slice(t.start, t.end), t.offset), n[r] = a;
		}
		return n;
	}
	const a = (n.variants ?? xe).filter((e) => e !== Fe);
	if (0 === a.length) return {};
	const o = n.countSource ?? "neishabouri_vm_60s";
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
	}(e, o)) return {};
	const i = Float64Array.from(e.timestamps), c = (r.medianGapSeconds ? await r.medianGapSeconds(i) : await g().medianGapSeconds(i)) ?? n.countEpochSeconds ?? 60, l = await Re({
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
		countSource: o,
		countEpochSeconds: c,
		...void 0 !== n.configs ? { configs: n.configs } : {}
	});
	return Object.fromEntries(l.map((e) => [e.key, e.result.sib]));
}
async function Xn(e, n, t) {
	const r = t ?? g(), s = await zn(r, e, `ggir:${String(n)}`, (e) => Xn(e, n, r));
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
	const a = await Re({
		backend: t ?? g(),
		variants: ["Sadeh1994", "ColeKripke1992"],
		anglez5s: /* @__PURE__ */ new Float64Array(),
		zeroCrossingY60s: new Float64Array(e.zeroCrossingY),
		countSource: "zero_crossing_y_60s",
		countEpochSeconds: n
	}), o = Me("sadeh_1994"), i = Me("cole_kripke_1992"), c = a.find((e) => e.variant === o)?.result.sib, l = a.find((e) => e.variant === i)?.result.sib;
	return c && l ? {
		sadeh: c,
		ck: l
	} : null;
}
async function Zn(e, n) {
	const t = [], r = e.sadeh_1994_actilife.length, s = (e) => {
		e && e.length === r && t.push(e);
	};
	s(e.sadeh_1994_actilife), s(e.sadeh_1994_original), s(e.cole_kripke_1992_actilife), s(e.cole_kripke_1992_original), s(e.sadeh_1994_ggir), s(e.cole_kripke_1992_ggir), s(e.lstm_sleep_wake);
	for (const [a, o] of Object.entries(e.hasibVariants ?? {})) a !== W.TENSOR_MAJORITY_VOTE && a !== W.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== x(a)?.grammarId && s(o);
	for (const [a, o] of Object.entries(e.cubeOutputs ?? {})) a !== W.TENSOR_MAJORITY_VOTE && a !== W.CONSENSUS_MAJORITY_VOTE && "consensus_cell" !== x(a)?.grammarId && s(o);
	return 0 === t.length ? new Uint8Array(r) : n.scoreConsensus("majority_tie_sleep", t);
}
H((e, n, t) => {
	Bn(e, {
		resumeIncomplete: !0,
		retryKnownFailures: !1,
		db: n,
		signal: t
	}).catch(() => {});
});
export { Pn as _resetCubePlanCacheForTest, Wn as awaitScheduledScoredVariantWarms, Hn as backfillInterruptedScoredVariantWarms, Vn as buildOrReuseAlgorithmOutputCubePlan, xn as cloneOutputBuffer, Zn as computeTensorConsensusForDay, Tn as cubeRunsOnGrid, Un as finalizeAndAuditScoredVariantWarm, Bn as rewarmFileScoredVariants, Jn as runAlgorithmCubeForDay, Xn as scoreBuiltinGgirSadehColeForDay, Kn as scoreCountBasedHasibVariantsForDay, Ln as scoredVariantFileInputs, Rn as sleepWakeToPersistedOutputs, Mn as t, Yn as warmFileScoredVariants, Gn as withRecordingWakeThreshold };
