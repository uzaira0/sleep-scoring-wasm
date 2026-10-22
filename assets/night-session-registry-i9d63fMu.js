import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import { i as t } from "./workers-DK49faf9.js";
import { A as n, B as r, D as a, E as o, F as s, H as i, Ht as l, I as c, J as d, K as u, Lt as p, M as m, N as f, O as g, P as h, Q as w, T as k, U as y, V as v, W as _, Wt as S, X as I, Xt as N, Y as b, Yt as M, Z as x, Zt as A, at as E, d as C, dt as T, ft as P, it as O, j as R, k as D, l as j, mn as H, nt as L, ot as F, p as V, pt as K, q as W, qt as G, rt as U, st as J, tt as q, v as B, w as z, z as Y } from "./schema-B_evdEdj.js";
import { c as X, r as Z, u as Q } from "./legacy-invalid-night-BxvRkrkV.js";
import { H as ee, O as te, U as ne, V as re, a as ae, h as oe, n as se, o as ie, t as le } from "./workspace-db-nrwH3Dt2.js";
import { a as ce, o as de } from "./content-hash-BtD8CeUH.js";
import { a as ue, i as pe } from "./project-revision-DBLYmsAG.js";
import { c as me, i as fe } from "./sleep-period-detection-al43tTI-.js";
import { t as ge } from "./audit-log-DNmoXXGB.js";
import { t as he } from "./audit-hash-rfcCP1yx.js";
import { i as we, t as ke } from "./wal-CE_GUfzE.js";
const ye = "auto_score";
function ve(e, t) {
	return {
		sleepPeriodDetectionConfig: me(e),
		sleepPeriodDetectionSummary: t ?? fe(e)
	};
}
function _e(e) {
	return {
		algorithm: e.algorithm,
		...ve(e.sleepPeriodDetection, e.sleepPeriodDetectionSummary),
		sleepCount: e.sleepCount,
		napCount: e.napCount,
		markers: e.markers
	};
}
function Se(e) {
	return e?.markerType === l.MAIN_SLEEP;
}
function Ie(e) {
	return e?.markerType === l.NAP;
}
function Ne(e, t) {
	return t || e.length > 0 ? l.NAP : l.MAIN_SLEEP;
}
function be(e) {
	const t = [], n = [];
	for (const r of e) (Se(r) ? n : t).push(r);
	return {
		kept: t,
		cleared: n
	};
}
const Me = /* @__PURE__ */ new WeakSet();
function xe(e) {
	if (null !== e && "object" == typeof e && !Object.isFrozen(e)) {
		Object.freeze(e);
		for (const t of Object.values(e)) xe(t);
	}
	return e;
}
function Ae(e) {
	return Me.add(xe(e)), e;
}
function Ee(e) {
	if (null === e || "object" != typeof e || !Me.has(e)) return null;
	const t = e, n = (r = t.id, null === O(r) ? null : r);
	var r;
	if (null === n) return null;
	const a = Object.fromEntries(Object.entries(t).filter(([e]) => !u.excludedFieldNames.includes(e)));
	return {
		cellId: n,
		implementationVersion: t.implementationVersion,
		configHash: at(a)
	};
}
const Ce = new Map(T.map((e) => [e.id, e.conformance]));
function Te(e) {
	return Ce.get(e) ?? "conformant";
}
const Pe = function() {
	const e = /* @__PURE__ */ new Map();
	for (const t of T) {
		if ("sleep_wake" !== t.kind) continue;
		if (!c.includes(t.requiredSignal)) continue;
		if (y.includes(t.execution)) continue;
		const n = t.family, r = e.get(n);
		if (r) {
			if (r.conformance !== t.conformance) throw new Error(`count scorer family ${n} has conflicting conformance across variants: ${r.conformance} vs ${t.conformance}`);
		} else {
			const r = d[n];
			if (void 0 === r) throw new Error(`count scorer ${t.id} lacks a generated planner label`);
			e.set(n, {
				slug: n,
				algorithm: r.algorithmValue,
				label: r.label,
				conformance: t.conformance
			});
		}
	}
	return Array.from(e.values());
}(), Oe = function() {
	const e = new Map(Pe.map((e) => [e.slug, e])), t = [];
	for (const n of h) {
		const r = e.get(n.methodFamilyId);
		if (!r) throw new Error(`generated provenance contract references absent count family ${n.methodFamilyId}`);
		t.push({
			slug: r.slug,
			algorithm: r.algorithm,
			label: r.label,
			conformance: r.conformance,
			primitive: n.primitiveId,
			implementation: n.implementationVariantId,
			implementationLabel: n.label,
			scoringParameters: n.parameters
		});
	}
	return t;
}(), Re = n, De = r, je = v, $e = Object.fromEntries(i.map((e) => [e, 0])), He = Object.fromEntries(L.map((e) => [e.value, 0])), Le = U;
function Fe(e = {}) {
	const t = new Set(e.includeFamilies ?? i), n = e.epochSeconds ?? De, r = new Set(e.excludeHasibAlgorithms ?? []), a = e.implementationVersion ?? je, s = [], l = [];
	if (t.has("count_hasib")) {
		for (const e of Pe) if (r.has(e.slug)) s.push({
			id: E("count_skip_entry", { method_family: e.slug }),
			reason: tt("skipped_method_reason", { algorithm_value: e.algorithm })
		});
		else for (const t of Object.keys(Re)) for (const r of Re[t]) for (const o of n) l.push(qe({
			family: e,
			countFamily: t,
			axis: r,
			epochSeconds: o,
			implementationVersion: a
		}));
		for (const e of Oe) if (!r.has(e.slug)) for (const t of Object.keys(Re)) for (const r of Re[t]) for (const o of n) l.push(Be({
			variant: e,
			countFamily: t,
			axis: r,
			epochSeconds: o,
			implementationVersion: a
		}));
	}
	for (const o of Object.keys(_)) t.has(o) && l.push(ze(o, a));
	if (t.has("lstm")) for (const o of e.lstmModels ?? []) l.push(...Ye(o, a));
	(e.includeConsensus ?? !0) && t.has("consensus") && l.push(...function(e, t) {
		const n = [], r = Array.from(new Set(e.filter((e) => Xe(e)).filter((e) => De.includes(e.epochSeconds)).map((e) => e.epochSeconds))).sort((e, t) => e - t);
		for (const a of r) {
			const r = `${String(a)}s`, s = e.filter((e) => Xe(e) && e.epochSeconds === a);
			if (s.length <= 1) continue;
			const { slug: i, label: l } = Ze(s);
			for (const e of Y) n.push(Je({
				id: E("consensus_cell", {
					scope: i,
					strategy: e,
					epoch_seconds: a
				}),
				label: tt("consensus_cell_label", {
					scope_label: l,
					strategy_label: o[e] ?? e,
					suffix: r
				}),
				strategy: e,
				members: s,
				epochSeconds: a,
				implementationVersion: t
			}));
		}
		return n;
	}(l, a));
	const c = function(e) {
		const t = /* @__PURE__ */ new Map(), n = [];
		for (const r of e) {
			const e = t.get(r.id);
			if (e !== r.configHash) {
				if (void 0 !== e) throw new Error(`cube plan holds ${r.id} under two configs (${e}, ${r.configHash})`);
				t.set(r.id, r.configHash), n.push(r);
			}
		}
		return n;
	}(l).map(Ae);
	return {
		configs: c,
		skipped: s,
		warnings: et(c),
		summary: Ue({
			configs: c,
			skipped: s
		})
	};
}
let Ve, Ke;
function We() {
	return Ve ??= Fe({
		includeFamilies: ["count_hasib", "consensus"],
		epochSeconds: [30, 60],
		includeConsensus: !0
	}), Ve;
}
function Ge(e) {
	return Ke ??= new Map(We().configs.map((e) => [e.id, e])), Ke.get(e);
}
function Ue(e) {
	const t = { ...$e }, n = { ...He };
	for (const r of e.configs) t[r.family] += 1, n[r.validationStatus] += 1;
	return {
		total: e.configs.length,
		byFamily: t,
		byValidationStatus: n,
		skipped: e.skipped.length
	};
}
function Je(e) {
	const t = e.implementationVersion ?? je, n = e.members.map((e) => e.id), r = [...e.members].sort((e, t) => e.id < t.id ? -1 : e.id > t.id ? 1 : 0).map((e) => e.configHash);
	return {
		...Qe({
			id: e.id,
			family: z,
			label: e.label,
			algorithm: `consensus:${e.strategy}`,
			outputKind: k,
			epochSeconds: e.epochSeconds,
			input: {
				family: "algorithm_outputs",
				epochSeconds: e.epochSeconds,
				seriesKey: n.join(",")
			},
			parameters: {
				strategy: e.strategy,
				inputConfigIds: n,
				inputConfigHashes: r,
				inputCount: n.length
			},
			implementationVersion: t,
			validationStatus: a,
			defaultIncluded: !0,
			exploratory: !0,
			lineage: n
		}),
		conformance: Te("consensus_majority_vote")
	};
}
function qe(e) {
	const t = Le(e.countFamily, e.axis, e.epochSeconds), n = F(e.family.slug, e.countFamily, e.axis, e.epochSeconds) ? D : g;
	return {
		...Qe({
			id: E("count_cell", {
				method_family: e.family.slug,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: m,
			label: tt("count_cell_label", {
				method_label: e.family.label,
				input_label: nt(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.family.algorithm,
			outputKind: f,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: t
			},
			parameters: {
				ws3: e.epochSeconds,
				sadehNeishabouriCap300: J(e.family.slug, e.countFamily)
			},
			implementationVersion: e.implementationVersion,
			validationStatus: n,
			defaultIncluded: !0,
			exploratory: n === g,
			lineage: [t]
		}),
		conformance: e.family.conformance
	};
}
function Be(e) {
	const t = Le(e.countFamily, e.axis, e.epochSeconds);
	return {
		...Qe({
			id: E("count_cell", {
				method_family: e.variant.slug,
				implementation_variant: e.variant.implementation,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: m,
			label: tt("count_provenance_cell_label", {
				method_label: e.variant.label,
				implementation_label: e.variant.implementationLabel,
				input_label: nt(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.variant.algorithm,
			outputKind: f,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: t
			},
			parameters: {
				ws3: e.epochSeconds,
				implementation: e.variant.implementation,
				...e.variant.scoringParameters
			},
			implementationVersion: e.implementationVersion,
			validationStatus: s,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [t]
		}),
		conformance: e.variant.conformance
	};
}
function ze(e, t) {
	const n = _[e];
	if (void 0 === n) throw new Error(`no generated fixed output projection for family ${e}`);
	return {
		...Qe({
			id: n.configId,
			family: n.familyId,
			label: n.label,
			algorithm: n.algorithmValue,
			outputKind: n.outputKind,
			epochSeconds: n.epochSeconds,
			input: {
				family: n.inputFamily,
				...void 0 !== n.inputAxis ? { axis: n.inputAxis } : {},
				epochSeconds: n.epochSeconds,
				seriesKey: n.inputSeriesKey
			},
			parameters: { ...n.parameters },
			implementationVersion: t,
			validationStatus: n.validationStatus,
			defaultIncluded: n.defaultIncluded,
			exploratory: n.exploratory,
			lineage: n.lineageIds
		}),
		conformance: Te(n.methodBindingId)
	};
}
function Ye(e, t) {
	const n = e.thresholdPresets && e.thresholdPresets.length > 0 ? e.thresholdPresets : [I], r = Te(e.id);
	return n.map((n) => ({
		...Qe({
			id: E("model_cell", {
				model_slug: rt(e.id),
				preset_slug: rt(n.id)
			}),
			family: x,
			label: tt("model_cell_label", {
				model_label: e.label,
				preset_label: n.label
			}),
			algorithm: e.id,
			outputKind: w,
			epochSeconds: e.epochSeconds,
			input: {
				family: "lstm_probability",
				epochSeconds: e.epochSeconds,
				seriesKey: `${e.id}:sleep_probability`
			},
			parameters: {
				modelId: e.id,
				thresholdPresetId: n.id,
				threshold: n.threshold
			},
			implementationVersion: t,
			validationStatus: b,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [`lstm:${e.id}`]
		}),
		conformance: r
	}));
}
function Xe(e) {
	return "sleep_wake_epoch" === e.outputKind && "consensus" !== e.family && void 0 === e.parameters.implementation;
}
function Ze(e) {
	const t = new Set(e.map((e) => e.family));
	if (1 === t.size && t.has("count_hasib")) return {
		slug: `${m}_sleep_wake`,
		label: tt("count_consensus_scope_label", {})
	};
	const n = Array.from(new Set(e.filter((e) => e.family === x).map((e) => "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm).filter((e) => e.length > 0))).sort();
	if (t.has("lstm") && n.length > 0) {
		const e = n.map((e) => rt(e)).join("_"), r = t.has(m);
		return {
			slug: r ? `${m}_${x}_${e}_sleep_wake` : `${x}_${e}_sleep_wake`,
			label: tt(r ? "count_lstm_consensus_scope_label" : "lstm_consensus_scope_label", { model_ids: n.join(", ") })
		};
	}
	return {
		slug: "all_sleep_wake",
		label: tt("all_consensus_scope_label", {})
	};
}
function Qe(e) {
	return {
		...e,
		configHash: at(e)
	};
}
function et(e) {
	const t = [];
	return e.some((e) => "count_hasib" === e.family && e.epochSeconds === De[0]) && t.push(tt("count_30_warning", {})), e.some((e) => "lstm" === e.family) || t.push(tt("no_lstm_warning", {})), t;
}
function tt(e, t) {
	const n = W[e];
	if (void 0 === n) throw new Error(`no generated planner message ${e}`);
	return Object.entries(t).reduce((e, [t, n]) => e.replace(`{${t}}`, String(n)), n);
}
function nt(e, t, n) {
	return R[e].labelTemplate.replace("{axis}", t).replace("{axis_label}", q.axis?.[t] ?? t).replace("{epoch_seconds}", String(n));
}
function rt(e) {
	return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function at(e) {
	const t = ot(e);
	let n = u.initialValue;
	for (let r = 0; r < t.length; r += 1) n ^= t.charCodeAt(r), n = Math.imul(n, u.prime) >>> 0;
	return n.toString(16).padStart(u.lowercaseHexWidth, "0");
}
function ot(e) {
	return null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map((e) => ot(e)).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => `${JSON.stringify(e)}:${ot(t)}`).join(",")}}`;
}
const st = new Map(T.map((e) => [e.id, {
	id: e.id,
	conformance: e.conformance,
	needsModelArtifact: e.needsModelArtifact
}]));
function it(e) {
	return st.get(e)?.conformance ?? null;
}
const lt = te, ct = We().configs.map((e) => ({
	value: e.id,
	label: `Tensor: ${e.label}`
})), dt = new Set(P);
function ut(e) {
	if (!dt.has(e.method)) throw new Error(`STANDARD_ALGORITHM_OPTIONS references '${e.method}', which is not a generated scoring-method contract id.`);
	return {
		value: e.method,
		label: e.label
	};
}
const pt = [
	{
		method: p.SADEH_1994_ACTILIFE,
		label: "Sadeh (1994) ActiLife - Recommended"
	},
	{
		method: p.SADEH_1994_ORIGINAL,
		label: "Sadeh (1994) Original"
	},
	{
		method: p.SADEH_1994_GGIR,
		label: "Sadeh (1994) GGIR / zero-crossing Y"
	},
	{
		method: p.COLE_KRIPKE_1992_ACTILIFE,
		label: "Cole-Kripke (1992) ActiLife"
	},
	{
		method: p.COLE_KRIPKE_1992_ORIGINAL,
		label: "Cole-Kripke (1992) Original"
	},
	{
		method: p.COLE_KRIPKE_1992_GGIR,
		label: "Cole-Kripke (1992) GGIR / zero-crossing Y"
	}
], mt = [{
	method: p.LSTM_SLEEP_WAKE,
	label: "LSTM Sleep/Wake (ONNX spectral)"
}, {
	method: p.VAN_HEES_2015,
	label: "van Hees (2015)"
}], ft = [
	{
		method: p.UCSD_SCRIPPS_2010,
		label: "UCSD / Scripps (2010)"
	},
	{
		method: p.SAZONOV_2004,
		label: "Sazonov (2004) — provisional"
	},
	{
		method: p.SYED_CNN,
		label: "Syed CNN — needs model"
	},
	{
		method: p.ACTIWARE_SLEEP_WAKE,
		label: "Actiware Sleep/Wake"
	}
].map((e) => {
	return "needs_model" !== it((t = ut(e)).value) ? t : {
		...t,
		disabled: !0
	};
	var t;
}), gt = [
	...pt.map(ut),
	{
		value: oe.TENSOR_MAJORITY_VOTE,
		label: "Tensor majority vote"
	},
	...mt.map(ut),
	...ft
], ht = [...gt, ...ct], wt = {
	count: "Count-based sleep/wake",
	window: "Window / HDCZA",
	neural: "Neural",
	experimental: "Experimental (provisional)",
	tensor: "Tensor variants (A/B)"
}, kt = [
	"count",
	"window",
	"neural",
	"experimental",
	"tensor"
], yt = new Map(T.map((e) => [e.id, e.execution]));
function vt(e) {
	if (!dt.has(e)) return "tensor";
	const t = yt.get(e);
	if ("neural_model" === t) return "neural";
	if ("angle_spt" === t) return "window";
	const n = it(e);
	return "provisional" === n || "needs_model" === n ? "experimental" : "count";
}
function _t(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = vt(n.value), r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	return kt.flatMap((e) => {
		const n = t.get(e);
		return n ? [{
			label: wt[e],
			options: n
		}] : [];
	});
}
_t(gt), _t(ht);
const St = Object.fromEntries(K.map((e) => [e.id, {
	onsetN: e.onsetMinConsecutiveSleep,
	offsetN: e.offsetMinConsecutiveMinutes,
	offsetState: e.offsetScanState,
	label: e.label
}])), It = St[M.CONSECUTIVE_ONSET3S_OFFSET5S];
function Nt(e) {
	return St[e] ?? It;
}
function bt(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function Mt(e) {
	return {
		...e,
		edited: !0
	};
}
function xt(e, t, n, r) {
	const a = e[t];
	if (!a) return {
		ok: !1,
		reason: "out-of-range"
	};
	const { onsetTimestamp: o, offsetTimestamp: s } = a;
	if (null == o || null == s) return {
		ok: !1,
		reason: "no-boundaries"
	};
	if (!(r > o && r <= n && n < s)) return {
		ok: !1,
		reason: "not-strictly-inside"
	};
	const [i, c] = function(e) {
		const t = e === l.NAP ? l.NAP : l.MAIN_SLEEP;
		return [t, t === l.MAIN_SLEEP ? l.NAP : t];
	}(a.markerType), d = Mt({
		...a,
		offsetTimestamp: r,
		markerType: i
	}), u = Mt({
		...a,
		onsetTimestamp: n,
		markerType: c
	}), p = [...e];
	return p.splice(t, 1, d, u), {
		ok: !0,
		markers: bt(p),
		newIndex: t + 1
	};
}
function At(e, t, n) {
	const r = e[t];
	if (!r) return {
		ok: !1,
		reason: "out-of-range"
	};
	const a = "next" === n ? t + 1 : t - 1, o = e[a];
	if (!o) return {
		ok: !1,
		reason: "no-neighbor"
	};
	const s = r.onsetTimestamp, i = r.offsetTimestamp, c = o.onsetTimestamp, d = o.offsetTimestamp;
	if (null == s || null == i || null == c || null == d) return {
		ok: !1,
		reason: "no-boundaries"
	};
	const u = Math.min(s, c), p = Math.max(i, d), m = function(e, t) {
		return Se(e) || Se(t) ? l.MAIN_SLEEP : l.NAP;
	}(r, o), f = Math.min(t, a), g = Mt({
		...m !== l.MAIN_SLEEP || Se(r) ? r : o,
		onsetTimestamp: u,
		offsetTimestamp: p,
		markerType: m
	}), h = e.filter((e, n) => n !== t && n !== a);
	return h.splice(f, 0, g), {
		ok: !0,
		markers: bt(h),
		mergedIndex: f
	};
}
function Et(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function Ct(e) {
	return "boolean" == typeof e ? e : null;
}
function Tt(e) {
	return "string" == typeof e ? e : null;
}
function Pt(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function Ot(e, t) {
	return !(e.length > 0) && t;
}
function Rt(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
function Dt(e) {
	const t = function(e) {
		return Array.isArray(e) ? e : null;
	}(e);
	return null === t ? null : t.every(Rt) ? t : null;
}
function jt(e) {
	const t = Dt(e);
	return null === t ? null : t;
}
function $t(e) {
	const t = Dt(e);
	return null === t ? null : t;
}
function Ht(e) {
	return e.filter((e) => e.markerType === l.MAIN_SLEEP).length;
}
function Lt(e) {
	return e.every((e, t) => e.markerIndex === t + 1);
}
K.map(({ id: e, label: t }) => ({
	value: e,
	label: t
})), G.NONE, G.WEBSTER, l.MAIN_SLEEP, l.NAP, S.SMART, S.DIARY, S.HDCZA, S.L5, S.LONGEST_BOUT, S.EVENT_MARKER, S.ACTIWARE_REST_INTERVAL, S.NONE;
const Ft = {
	main_sleep_on_invalid_night: ({ after: e }) => e.isInvalidNight && Ht(e.sleepMarkers) > 0,
	multiple_main_sleep: ({ after: e }) => Ht(e.sleepMarkers) > 1,
	first_marker_not_main_sleep: ({ after: e }) => !e.isInvalidNight && e.sleepMarkers.length > 0 && 0 === Ht(e.sleepMarkers),
	marker_index_noncontiguous: ({ after: e }) => !Lt(e.sleepMarkers) || !Lt(e.nonwearMarkers),
	boundaries_disordered: ({ after: e }) => e.sleepMarkers.some((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && e.onsetTimestamp >= e.offsetTimestamp) || e.nonwearMarkers.some((e) => null != e.startTimestamp && null != e.endTimestamp && e.startTimestamp >= e.endTimestamp),
	nonwear_flag_with_markers: ({ after: e }) => e.explicitNoNonwear && e.nonwearMarkers.length > 0,
	manual_nonwear_in_sleep: ({ payload: e }) => !0 === e.manualNonwearInSleep,
	marker_limit_exceeded: ({ after: e }) => e.sleepMarkers.length > lt.MAX_SLEEP_PERIODS_PER_DAY || e.nonwearMarkers.length > lt.MAX_NONWEAR_PERIODS_PER_DAY,
	split_not_strictly_inside: ({ before: e, payload: t }) => {
		const n = Et(t.periodIndex), r = Et(t.at);
		return null !== n && null !== r && !xt(e.sleepMarkers, n, r, Et(t.firstOffset) ?? r).ok;
	},
	merge_no_neighbor: ({ before: e, payload: t }) => {
		const n = Et(t.periodIndex), r = Tt(t.direction);
		return null !== n && ("prev" === r || "next" === r) && !At(e.sleepMarkers, n, r).ok;
	},
	mutation_on_read_only_view: ({ context: e }) => !0 === e.readOnlyView,
	undo_beyond_history: ({ context: e }) => void 0 !== e.undoDepth && e.undoDepth <= 0,
	redo_beyond_history: ({ context: e }) => void 0 !== e.redoDepth && e.redoDepth <= 0
};
function Vt(e, t) {
	const n = X[e]?.guards ?? [], r = [];
	for (const a of n) {
		const e = Ft[a], n = Q[a];
		e && n && e(t) && r.push({
			guard: a,
			severity: n.severity
		});
	}
	return r;
}
function Kt(e, t) {
	const n = t.stateAfter;
	if (null === n || "object" != typeof n) return {
		state: e,
		reconstructed: !1
	};
	const r = n, a = jt(r.sleepMarkers), o = $t(r.nonwearMarkers);
	return null === a || null === o ? {
		state: e,
		reconstructed: !1
	} : { state: {
		...e,
		sleepMarkers: a,
		nonwearMarkers: o,
		isInvalidNight: Ct(r.isInvalidNight) ?? e.isInvalidNight,
		explicitNoNonwear: Ct(r.explicitNoNonwear) ?? e.explicitNoNonwear,
		needsConsensus: Ct(r.needsConsensus) ?? e.needsConsensus,
		notes: Tt(r.notes) ?? e.notes
	} };
}
const Wt = {
	marker_placed: (e, t) => {
		if ("nonwear" === Tt(t.category)) {
			const n = Et(t.startTimestamp), r = Et(t.endTimestamp);
			if (null === n || null === r) return {
				state: e,
				reconstructed: !1
			};
			const a = [...e.nonwearMarkers, {
				startTimestamp: n,
				endTimestamp: r,
				markerIndex: e.nonwearMarkers.length + 1
			}];
			return { state: {
				...e,
				nonwearMarkers: a,
				explicitNoNonwear: !1
			} };
		}
		const n = Et(t.onsetTimestamp), r = Et(t.offsetTimestamp);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = Tt(t.markerType) ?? Ne(e.sleepMarkers, e.isInvalidNight), o = [...e.sleepMarkers, {
			onsetTimestamp: n,
			offsetTimestamp: r,
			markerIndex: e.sleepMarkers.length + 1,
			markerType: a
		}];
		return { state: {
			...e,
			sleepMarkers: o
		} };
	},
	marker_moved: (e, t) => {
		const n = t.after;
		if (null === n || "object" != typeof n) return {
			state: e,
			reconstructed: !1
		};
		const r = n, a = jt(r.sleepMarkers), o = $t(r.nonwearMarkers);
		return null === a || null === o ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: a,
			nonwearMarkers: o
		} };
	},
	marker_adjusted: (e, t) => {
		const n = Et(t.periodIndex), r = t.updates;
		if (null === n || null === r || "object" != typeof r) return {
			state: e,
			reconstructed: !1
		};
		const a = r;
		if ("nonwear" === Tt(t.category)) {
			const t = e.nonwearMarkers.map((e, t) => t === n ? {
				...e,
				...a
			} : e);
			return { state: {
				...e,
				nonwearMarkers: t,
				explicitNoNonwear: Ot(t, e.explicitNoNonwear)
			} };
		}
		const o = e.sleepMarkers.map((e, t) => t === n ? {
			...e,
			...a
		} : e);
		return { state: {
			...e,
			sleepMarkers: o
		} };
	},
	marker_deleted: (e, t) => {
		const n = Et(t.periodIndex);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : "nonwear" === Tt(t.category) ? { state: {
			...e,
			nonwearMarkers: Pt(e.nonwearMarkers.filter((e, t) => t !== n))
		} } : { state: {
			...e,
			sleepMarkers: Pt(e.sleepMarkers.filter((e, t) => t !== n))
		} };
	},
	markers_cleared: (e) => ({ state: {
		...e,
		sleepMarkers: [],
		nonwearMarkers: []
	} }),
	sleep_period_split: (e, t) => {
		const n = Et(t.periodIndex), r = Et(t.at);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = xt(e.sleepMarkers, n, r, Et(t.firstOffset) ?? r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	sleep_period_merged: (e, t) => {
		const n = Et(t.periodIndex), r = Tt(t.direction);
		if (null === n || "prev" !== r && "next" !== r) return {
			state: e,
			reconstructed: !1
		};
		const a = At(e.sleepMarkers, n, r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	session_start: (e, t) => {
		const n = jt(t.sleepMarkers), r = $t(t.nonwearMarkers);
		return null === n || null === r ? {
			state: e,
			reconstructed: !1
		} : {
			state: {
				...e,
				sleepMarkers: n,
				nonwearMarkers: r,
				isInvalidNight: Ct(t.isInvalidNight) ?? e.isInvalidNight,
				explicitNoNonwear: Ct(t.explicitNoNonwear) ?? e.explicitNoNonwear,
				needsConsensus: Ct(t.needsConsensus) ?? e.needsConsensus,
				notes: Tt(t.notes) ?? e.notes
			},
			reconstructed: void 0 !== t.notes
		};
	},
	markers_saved: (e, t, n) => {
		const r = Et(t.sleepCount), a = Et(t.nonwearCount);
		return null === r || null === a ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			saved: {
				at: n.clientTimestamp ?? null,
				sleepCount: r,
				nonwearCount: a
			}
		} };
	},
	undo: Kt,
	redo: Kt,
	auto_score_applied: (e, t) => {
		const n = jt(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: n
		} };
	},
	auto_nonwear_applied: (e, t) => {
		const n = $t(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			nonwearMarkers: n,
			explicitNoNonwear: Ot(n, e.explicitNoNonwear)
		} };
	},
	consensus_toggled: (e, t) => {
		const n = Ct(t.value);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			needsConsensus: n
		} };
	},
	invalid_night_toggled: (e, t) => {
		const n = Ct(t.value);
		if (null === n) return {
			state: e,
			reconstructed: !1
		};
		if (!n) return { state: {
			...e,
			isInvalidNight: !1
		} };
		const r = Pt(e.sleepMarkers.filter((e) => e.markerType !== l.MAIN_SLEEP));
		return { state: {
			...e,
			isInvalidNight: !0,
			sleepMarkers: r
		} };
	},
	no_nonwear_toggled: (e, t) => {
		const n = Ct(t.value);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			explicitNoNonwear: n,
			nonwearMarkers: n ? [] : e.nonwearMarkers
		} };
	},
	notes_changed: (e, t) => {
		const n = Tt(t.after);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			notes: n
		} };
	},
	candidate_copied: Kt
};
function Gt(e, t, n = {}) {
	const r = Z(t), a = r.payload ?? {}, o = Wt[r.action], s = o ? o(e, a, r) : { state: e }, i = s.state;
	return {
		state: i,
		violations: Vt(r.action, {
			before: e,
			after: i,
			event: r,
			payload: a,
			context: n
		}),
		reconstructed: s.reconstructed ?? !0
	};
}
function Ut(e) {
	return "object" != typeof e || null === e ? null : "string" == typeof e.action ? Z(e) : null;
}
function Jt(e, t) {
	if ("markers_saved" !== e.action) return !1;
	const n = e.payload ?? {}, r = Et(n.sleepCount), a = Et(n.nonwearCount);
	return null !== r && null !== a && (r !== t.sleepMarkers.length || a !== t.nonwearMarkers.length);
}
function qt(e) {
	if (!Array.isArray(e)) return [];
	const t = [];
	let n = {
		sleepMarkers: [],
		nonwearMarkers: [],
		isInvalidNight: !1,
		explicitNoNonwear: !1,
		needsConsensus: !1,
		notes: "",
		saved: null
	}, r = "unanchored";
	for (const a of e) {
		const e = Ut(a), o = e ? Gt(n, e) : {
			state: n,
			violations: [],
			reconstructed: !1
		};
		n = o.state, null !== e && !0 === X[e.action]?.stateKeyframe && o.reconstructed ? r = "exact" : o.reconstructed || "exact" !== r || (r = "divergent"), "exact" === r && null !== e && Jt(e, n) && (r = "divergent"), t.push({
			state: n,
			basis: r,
			violations: o.violations
		});
	}
	return t;
}
function Bt(e) {
	const t = [
		`${String(e.sleepMarkers.length)} sleep`,
		`${String(e.nonwearMarkers.length)} nonwear`,
		`invalid-night:${String(e.isInvalidNight)}`
	];
	return e.explicitNoNonwear && t.push("no-nonwear"), e.needsConsensus && t.push("needs-consensus"), e.notes.length > 0 && t.push(`notes ${String(e.notes.length)}ch`), t.join(", ");
}
function zt(e) {
	return {
		sleep: e.sleepMarkers.map((e) => ({
			onset: e.onsetTimestamp,
			offset: e.offsetTimestamp,
			main: Se(e)
		})),
		nonwear: (e.nonwearMarkers ?? []).map((e) => ({
			start: e.startTimestamp,
			end: e.endTimestamp
		})),
		isInvalidNight: e.isInvalidNight ?? !1
	};
}
async function Yt(e, n = t()) {
	if (0 === e.length) return [];
	const r = await n.settleManualNonwearNights(e.map(zt));
	if (r.length !== e.length) throw new Error(`The manual-nonwear night rule answered ${String(r.length)} settle(s) for ${String(e.length)} night(s).`);
	return r;
}
function Xt(e, t) {
	return 0 === t.removed.length ? e : t.kept.map((t, n) => ({
		...e[t],
		markerIndex: n + 1
	}));
}
async function Zt(e, t) {
	const n = qt(e), r = e.flatMap((e, t) => {
		const r = e.payload, a = n[t]?.state;
		return "session_start" === e.action && null != r && "boolean" != typeof r.manualNonwearInSleep && void 0 !== a && Array.isArray(r.sleepMarkers) && Array.isArray(r.nonwearMarkers) && r.sleepMarkers.length === a.sleepMarkers.length && r.nonwearMarkers.length === a.nonwearMarkers.length ? [t] : [];
	});
	if (0 === r.length) return n;
	const a = await async function(e, t) {
		return (await Yt(e, t)).map((e) => e.removed.length > 0);
	}(r.map((e) => n[e].state), t), o = [...e];
	return r.forEach((t, n) => {
		const r = e[t];
		o[t] = {
			...r,
			payload: {
				...r.payload,
				manualNonwearInSleep: !0 === a[n]
			}
		};
	}), qt(o);
}
function Qt(e) {
	return null === e ? N : e;
}
function en(e) {
	return null == e ? A : e;
}
function tn(e) {
	return "__legacy_dr__" === e ? null : e;
}
function nn(e) {
	return {
		...e,
		algorithm: (t = e.algorithm, "__legacy__" === t ? null : t),
		detectionRule: tn(e.detectionRule)
	};
	var t;
}
function rn(e) {
	const t = (e) => Array.isArray(e) ? e.map(t) : e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, n]) => [e, t(n)])) : e;
	return JSON.stringify(t(e));
}
function an(e, { date: t, username: n }, r, a) {
	const o = e.filter((e) => e.date === t && e.username === n);
	if (void 0 !== r) {
		const e = Qt(r), t = en(a), n = (e, t) => o.find((n) => n.algorithm === e && n.detectionRule === t);
		return n(e, t) ?? ("__legacy_dr__" !== t ? n(e, "__legacy_dr__") : void 0) ?? (null !== r ? n("__legacy__", "__legacy_dr__") : void 0);
	}
	return o.reduce((e, t) => !e || (t.id ?? 0) < (e.id ?? 0) ? t : e, void 0);
}
function on(e, t, n, r) {
	return r.transaction("r", r.markers, async () => an(await r.markers.where("[fileId+date+username]").equals([
		e.fileId,
		e.date,
		e.username
	]).toArray(), e, t, n));
}
async function sn(e, t, n, r, a, o = le()) {
	const s = await on({
		fileId: e,
		date: t,
		username: n
	}, r, a, o);
	return s ? nn(s) : void 0;
}
const ln = [
	"manualNonwearInSleep",
	"periodMetrics",
	"syncStatus"
];
function cn(e, t, n) {
	const r = Object.fromEntries(ln.filter((e) => e in t).map((e) => [e, t[e]]));
	return n.markers.update(e, r);
}
async function dn(e, t = le(), n, r) {
	const a = t;
	await pe(a, [a.markers], async () => {
		if (n) {
			const t = await a.markers.get(e);
			if (!t || rn(nn(t)) !== rn(n)) return;
		}
		await cn(e, { syncStatus: "conflict" }, a);
	}, r);
}
function un(e) {
	return `${ee.SCORED_VARIANT_WARM}:${String(e)}`;
}
function pn(e = re.getState().jobs) {
	if (!se()) return null;
	const t = Object.values(e).reverse().find((e) => e.workspaceId === le().name && e.kind === ee.SCORED_VARIANT_WARM && e.status !== ne.DONE && e.status !== ne.CANCELLED);
	return t ? {
		fileId: Number(t.key.split(":").at(-1)),
		done: t.done,
		total: t.total,
		...t.status === ne.FAILED ? { failed: !0 } : {}
	} : null;
}
function mn(e, t) {
	if (!se() || t && le() !== t) return;
	const n = (t ?? le()).name, r = re.getState();
	if (!e) return;
	const a = un(e.fileId), o = `${n}:${a}`;
	r.jobs[o] && !e.failed || r.update(o, {
		id: o,
		workspaceId: n,
		key: a,
		kind: ee.SCORED_VARIANT_WARM,
		label: "Scoring variants",
		controller: r.jobs[o]?.controller ?? new AbortController(),
		done: e.done,
		total: e.total,
		status: e.failed ? ne.FAILED : ne.RUNNING
	});
}
const fn = /* @__PURE__ */ new Set(), gn = /* @__PURE__ */ new WeakMap();
async function hn(e, t) {
	const n = gn.get(e) ?? {
		depth: 0,
		files: /* @__PURE__ */ new Set()
	};
	gn.set(e, n), n.depth++;
	try {
		return await t();
	} finally {
		if (0 === --n.depth) {
			gn.delete(e);
			for (const t of n.files) kn(t, e);
		}
	}
}
const wn = /* @__PURE__ */ new WeakMap();
function kn(e, t) {
	const n = gn.get(t);
	if (n) n.files.add(e);
	else for (const r of fn) r(e, t);
}
function yn(e) {
	return fn.add(e), () => fn.delete(e);
}
const vn = /* @__PURE__ */ new Set();
function _n(e, t) {
	for (const n of vn) n(e, t);
}
const Sn = "scored-variant-warm-backfill-v1", In = `placement-results-backfill-v${String(2)}`, Nn = "placement-results-backfill-generation-v1", bn = /* @__PURE__ */ new Set();
function Mn(e, t, n) {
	const r = n ? wn.get(n) : void 0;
	if (r?.db !== t) for (const a of bn) a([e], t);
	else r.files.add(e);
}
const xn = /* @__PURE__ */ new WeakMap();
async function An(e, t = le(), n) {
	let r = H.currentTransaction;
	for (; r?.parent;) r = r.parent;
	if (await ue(t, [t.projectMeta], async () => {
		const e = await t.projectMeta.get(Nn);
		await t.projectMeta.put({
			key: Nn,
			revision: (e?.revision ?? 0) + 1
		}), await t.projectMeta.delete(In);
	}, n), !r || r.db !== t) {
		for (const r of new Set(e)) Mn(r, t, n);
		return;
	}
	let a = xn.get(r);
	if (!a) {
		a = /* @__PURE__ */ new Set(), xn.set(r, a);
		const e = a;
		r.idbtrans.addEventListener("complete", () => {
			for (const r of e) Mn(r, t, n);
		}, { once: !0 });
	}
	for (const o of e) a.add(o);
}
var En = class extends Error {
	constructor() {
		super("The recording was deleted; this night was not saved."), this.name = "RecordingDeletedError";
	}
}, Cn = class extends Error {
	constructor() {
		super("Markers changed during rescore or in another tab. Retry keeps the night on screen; reopening the night shows the stored one."), this.name = "NightConflictError";
	}
};
function Tn(e) {
	return {
		contentHash: e?.contentHash ?? null,
		needsConsensus: e?.needsConsensus ?? !1
	};
}
function Pn(e, t) {
	const n = Tn(e);
	return n.contentHash === t.contentHash && n.needsConsensus === t.needsConsensus;
}
const On = (e, t) => JSON.stringify([e, t]), Rn = /* @__PURE__ */ new Map();
function Dn(e, t) {
	const n = ((e) => On(e.store, e.fileId) + JSON.stringify([
		e.actor,
		e.date,
		Qt(e.algorithm),
		en(e.detectionRule)
	]))(e);
	return function(e, t, n) {
		const r = e.length > 0 ? Promise.all(e).then(n) : n(), a = r.then(() => {}, () => {});
		for (const o of t) Rn.set(o, a), a.then(() => {
			Rn.get(o) === a && Rn.delete(o);
		});
		return r;
	}([Rn.get(n), Rn.get((r = e.store, a = e.fileId, `${On(r, a)}*`))].filter((e) => void 0 !== e), [n], t);
	var r, a;
}
function jn(e, t) {
	return e?.name ?? `${t?.sourceKey ?? "server"}:${t?.workspaceId ?? ""}`;
}
function $n(e) {
	Hn(e.binding, e, e);
}
function Hn(e, t, n) {
	ge.recordNightEdit(e, {
		fileId: t.fileId,
		analysisDate: t.date,
		action: n.action,
		...void 0 === n.payload ? {} : { payload: n.payload }
	});
}
function Ln(e) {
	return e && (0 !== (e.sleepMarkers?.length ?? 0) || 0 !== (e.nonwearMarkers?.length ?? 0) || e.isInvalidNight || e.explicitNoNonwear || e.needsConsensus || e.notes) ? function(e) {
		const t = (e) => Number(e.onsetTimestamp ?? e.startTimestamp ?? 0), n = (e, n) => Number(e.markerIndex ?? 0) - Number(n.markerIndex ?? 0) || t(e) - t(n), r = (e) => Array.isArray(e) ? (e.every((e) => null !== e && "object" == typeof e && !Array.isArray(e)) ? [...e].sort(n) : e).map(r) : null === e || "object" != typeof e ? e : Object.fromEntries(Object.keys(e).sort().map((t) => [t, r(e[t])]));
		return JSON.stringify(r(e));
	}([
		e.sleepMarkers ?? [],
		e.nonwearMarkers ?? [],
		e.isInvalidNight ?? !1,
		e.explicitNoNonwear ?? !1,
		e.notes ?? "",
		e.needsConsensus ?? !1
	]) : null;
}
const Fn = (e, t) => {
	if (!e.changed) return null;
	if (null === e.committed) return {
		action: "markers_cleared",
		payload: {
			sleepCount: e.previous?.sleepMarkers?.length ?? 0,
			nonwearCount: e.previous?.nonwearMarkers?.length ?? 0
		}
	};
	const n = e.committed;
	return {
		action: "markers_saved",
		payload: (r = {
			sleepCount: n.sleepMarkers.length,
			nonwearCount: n.nonwearMarkers?.length ?? 0,
			notes: n.notes || null,
			isInvalidNight: n.isInvalidNight,
			explicitNoNonwear: n.explicitNoNonwear ?? !1,
			sleepPeriodDetection: t?.sleepPeriodDetection ?? n.sleepPeriodDetectionConfig ?? null
		}, {
			sleepCount: r.sleepCount,
			nonwearCount: r.nonwearCount,
			notes: r.notes,
			isInvalidNight: r.isInvalidNight,
			explicitNoNonwear: r.explicitNoNonwear,
			...ve(r.sleepPeriodDetection, r.sleepPeriodDetectionSummary)
		})
	};
	var r;
};
function Vn(e, t) {
	if (null === t) return H.Promise.resolve();
	const n = t.binding;
	if (!n) throw new Error("A local night write requires the audit binding captured at its act.");
	const r = (t) => ({
		fileId: e.fileId,
		analysisDate: e.date,
		action: t.action,
		...void 0 === t.payload ? {} : { payload: t.payload }
	}), a = Fn(e, t);
	return ge.appendNightEditsInTransaction([
		...(t?.carried ?? []).map((e) => ({
			binding: e.binding ?? n,
			input: r(e)
		})),
		...(t?.events?.(e.committed) ?? []).map((e) => ({
			binding: n,
			input: r(e)
		})),
		...a ? [{
			binding: n,
			input: r(a)
		}] : []
	]).then(() => {});
}
function Kn(e, t, n) {
	return we([
		e.markers,
		e.scoringSessions,
		e.markerProvenance,
		e.actiwareFileData,
		e.auditLog,
		e.files
	], t, e, n);
}
function Wn(e) {
	if (Array.isArray(e)) return e.map(Wn);
	if (e && "object" == typeof e) {
		const t = {};
		for (const [n, r] of Object.entries(e)) null != r && (t[n] = Wn(r));
		return t;
	}
	return e;
}
const Gn = (e, t) => ({
	store: jn(e),
	actor: t.username,
	fileId: t.fileId,
	date: t.date,
	algorithm: t.algorithm,
	detectionRule: t.detectionRule
});
function Un(e, t, n, r) {
	return Dn(Gn(t, e), async () => {
		const a = await sn(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), o = await n(a ? nn(a) : null);
		if (!o) return null;
		null !== r && await ge.settleWrites();
		const s = "save" === o.kind ? await qn(o.input, t, r) : await async function(e, t, n, r) {
			const { fileId: a, date: o, username: s, algorithm: i, detectionRule: l, expected: c } = e;
			let d = !1;
			const u = await Kn(t, async () => {
				if (void 0 === await t.files.get(a)) throw new En();
				const u = await on(e, i, l, t);
				if (void 0 !== c && !Pn(u, c)) return u?.id && await dn(u.id, t, u), d = !0, {
					fileId: a,
					date: o,
					username: s,
					previous: null,
					committed: null,
					changed: !1
				};
				if (!u) {
					const e = {
						fileId: a,
						date: o,
						username: s,
						previous: null,
						committed: null,
						changed: !1
					};
					return await Vn(e, n), e;
				}
				const p = [u];
				await ke({
					op: "markers_delete",
					fileId: a,
					username: s,
					payload: {
						kind: "night_unscored",
						date: o,
						prevContentHash: p[0]?.contentHash
					}
				});
				const m = new Set(p.flatMap((e) => void 0 === e.id ? [] : [e.id]));
				await t.markers.bulkDelete([...m]);
				const f = await t.markerProvenance.get(a);
				f && await t.markerProvenance.put({
					fileId: a,
					rows: f.rows.filter((e) => !m.has(e.id))
				}), p.some((e) => "auto_score" === e.username || C({
					...e,
					id: e.id
				}).nonwearDecided) && await An([a], t, r);
				const g = p[0] ? nn(p[0]) : null, h = {
					fileId: a,
					date: o,
					username: s,
					previous: g,
					committed: null,
					changed: null !== Ln(g)
				};
				return await Vn(h, n), h;
			}, r);
			if (d) throw new Cn();
			if (null !== u.previous && "auto_score" !== s) {
				const { scheduleGgirRecompute: e } = await import("./local-export-worker-Ddxw2_rB.js").then((e) => e.m);
				e(a, s, t, r);
			}
			return u;
		}({
			...e,
			expected: o.expected
		}, t, r, o.signal ?? e.signal);
		return {
			record: s.committed,
			changed: s.changed
		};
	});
}
function Jn(e, t, n) {
	return Dn(Gn(t, {
		fileId: e.fileId,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm ?? null,
		detectionRule: e.detectionRule ?? null
	}), async () => {
		null !== n && await ge.settleWrites();
		const r = await qn(e, t, n);
		return {
			record: r.committed,
			changed: r.changed
		};
	});
}
async function qn(e, t, n) {
	const { fileId: r, date: a, username: o, sleepMarkers: s, nonwearMarkers: i, isInvalidNight: c, notes: d, explicitNoNonwear: u, needsConsensus: p, algorithm: m = null, scoringContext: f, detectionRule: g = null, periodGuider: h = null, sleepPeriodDetectionConfig: w = null, algorithmVersion: k = null } = e, y = null !== m ? await H.waitFor(async function(e) {
		let t;
		if (e.extraParams) try {
			t = JSON.parse(e.extraParams);
		} catch {
			t = e.extraParams;
		}
		const n = Wn({
			algorithm: e.algorithm,
			detector: e.detector,
			guider: e.guider,
			sleep_period_detection_config: e.sleepPeriodDetectionConfig,
			scorer_version: e.scorerVersion,
			extra_params: t
		});
		return de(rn(n));
	}({
		algorithm: m,
		detector: g,
		guider: h,
		sleepPeriodDetectionConfig: w,
		scorerVersion: k
	})) : null, v = f ?? (null !== m && null !== y ? {
		appVersion: "local",
		algorithmVersions: { [m]: k ?? "1" },
		paramsHash: y,
		stampedAt: (/* @__PURE__ */ new Date()).toISOString()
	} : void 0), _ = null !== m && null !== y ? await H.waitFor(de(rn(Wn({
		fileId: r,
		date: a,
		username: o,
		algorithm: m,
		scorerVersion: k,
		detector: g,
		guider: h,
		sleepPeriodDetection: w,
		params: null,
		parameterSetHash: y
	})))) : null, S = Qt(m), I = en(g), N = e.restoredFromBackup;
	let b = !1;
	const M = await Kn(t, async (f) => {
		if (void 0 === await t.files.get(r)) throw new En();
		const M = await on({
			fileId: r,
			date: a,
			username: o
		}, m, g, t), x = M?.algorithm === S && M.detectionRule === I ? M : void 0, A = M ? nn(M) : void 0;
		if (N && x && x.lastModifiedAt >= N.lastModifiedAt) return {
			fileId: r,
			date: a,
			username: o,
			previous: A ?? null,
			committed: nn(x),
			changed: !1
		};
		if (void 0 !== e.expected) {
			if (!Pn(A, e.expected)) return M?.id && await dn(M.id, t, M), b = !0, {
				fileId: r,
				date: a,
				username: o,
				previous: A ?? null,
				committed: A ?? null,
				changed: !1
			};
			if (!0 !== e.guardHashOnly && A?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
		}
		const E = N ? x : A, T = i ?? E?.nonwearMarkers ?? [], P = c ?? E?.isInvalidNight ?? !1, O = u ?? E?.explicitNoNonwear ?? !1, R = p ?? E?.needsConsensus ?? !1, D = 0 === s.length || 0 === T.length ? null : (await H.waitFor(Yt([{
			sleepMarkers: s,
			nonwearMarkers: T,
			isInvalidNight: P
		}])))[0] ?? null, $ = D ? Xt(s, D) : s, L = P || (D?.invalidates ?? !1);
		if (L && $.some((e) => e.markerType === l.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
		const F = await H.waitFor(ce({
			sleepMarkers: $,
			nonwearMarkers: T,
			isInvalidNight: L,
			explicitNoNonwear: O,
			notes: d
		})), V = null !== m ? await async function(e, t, n) {
			const { fileId: r, date: a, username: o, algorithm: s } = t, i = e.table("scoringSessions"), l = await i.where("[fileId+date+username+algorithm]").equals([
				r,
				a,
				o,
				s
			]).first();
			if (l) return await i.update(l.sessionId, {
				scorerVersion: n.scorerVersion ?? null,
				detector: n.detector ?? null,
				guider: n.guider ?? null,
				sleepPeriodDetection: n.sleepPeriodDetectionConfig ?? null,
				params: n.params ?? null,
				parameterSetHash: n.parameterSetHash,
				contentHash: n.contentHash,
				lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
			}), l.sessionId;
			const c = j(), d = (/* @__PURE__ */ new Date()).toISOString();
			return await i.add({
				sessionId: c,
				fileId: r,
				date: a,
				username: o,
				algorithm: s,
				scorerVersion: n.scorerVersion ?? null,
				detector: n.detector ?? null,
				guider: n.guider ?? null,
				sleepPeriodDetection: n.sleepPeriodDetectionConfig ?? null,
				params: n.params ?? null,
				parameterSetHash: n.parameterSetHash,
				startedAt: d,
				syncStatus: "pending",
				contentHash: n.contentHash,
				lastModifiedAt: d
			}), c;
		}(f, {
			fileId: r,
			date: a,
			username: o,
			algorithm: m
		}, {
			scorerVersion: k,
			detector: g,
			guider: h,
			sleepPeriodDetectionConfig: w,
			params: null,
			parameterSetHash: y,
			contentHash: _
		}) : null, K = {
			fileId: r,
			date: a,
			username: o,
			algorithm: S,
			detectionRule: I,
			periodGuider: h,
			sleepPeriodDetectionConfig: w,
			algorithmVersion: k,
			scoringSessionId: V,
			manualNonwearInSleep: !1,
			sleepMarkers: $,
			nonwearMarkers: T,
			isInvalidNight: L,
			explicitNoNonwear: O,
			needsConsensus: R,
			notes: d,
			contentHash: F,
			syncStatus: "pending",
			lastModifiedAt: N?.lastModifiedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
			...void 0 !== v ? { scoringContext: v } : {},
			...void 0 !== N ? { restoredFromBackup: N.restoreId } : {}
		}, W = {
			fileId: r,
			date: a,
			username: o,
			previous: A ?? null,
			committed: K,
			changed: Ln(A) !== Ln(K)
		};
		await Vn(W, n), x && JSON.stringify(x.sleepMarkers) === JSON.stringify($) || await t.actiwareFileData.where("fileId").equals(r).modify({ actiwareStatisticsNeedsRecompute: !0 }), await ke({
			op: "markers_put",
			fileId: r,
			username: o,
			...void 0 !== N ? { restoredFromBackup: N.restoreId } : {},
			payload: {
				date: a,
				sleepMarkers: $,
				nonwearMarkers: T,
				isInvalidNight: L,
				explicitNoNonwear: O,
				notes: d,
				needsConsensus: R,
				sleepPeriodDetectionConfig: w,
				contentHash: F,
				prevContentHash: x?.contentHash
			}
		});
		const G = N ? x : M, U = G?.id ? await (async (e) => (await t.markers.update(e, (e) => {
			Object.assign(e, K), void 0 === N && delete e.restoredFromBackup;
		}), e))(G.id) : await t.markers.add(K), J = await t.markerProvenance.get(r), q = C({
			...K,
			id: U
		}), B = J?.rows.find((e) => e.id === U);
		return ("auto_score" === q.username || q.nonwearDecided !== (B?.nonwearDecided ?? !1) || q.nonwearDecided && q.nonwearSpans !== B?.nonwearSpans) && await An([r], t, e.signal), await t.markerProvenance.put({
			fileId: r,
			rows: [...(J?.rows ?? []).filter((e) => e.id !== U), q]
		}), W;
	}, e.signal);
	if (b) throw new Cn();
	return M;
}
async function Bn(e, t, n) {
	return { changed: (await Un(e, t, () => Promise.resolve({
		kind: "unscore",
		expected: e.expected
	}), n)).changed };
}
function zn(e, t, n) {
	return cn(e, { periodMetrics: t }, n);
}
const Yn = Symbol("marker-id");
function Xn(e) {
	const t = e;
	return t[Yn] ??= j();
}
function Zn(e, t, n = !1) {
	return {
		...t ?? structuredClone(e),
		[Yn]: n ? j() : Xn(e)
	};
}
function Qn(e, t) {
	const n = (e) => he(Object.fromEntries(Object.entries(e).filter(([e]) => "markerIndex" !== e))), r = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = n(o), t = r.get(e) ?? [];
		t.push(o), r.set(e, t);
	}
	const a = /* @__PURE__ */ new Map();
	return t.map((e) => {
		const t = n(e), o = a.get(t) ?? 0;
		return a.set(t, o + 1), void 0 !== e[Yn] ? e : {
			...e,
			[Yn]: r.get(t)?.[o]?.[Yn] ?? j()
		};
	});
}
function er(e, t) {
	return {
		...t,
		...void 0 !== t.sleepMarkers && t.sleepMarkers !== e.sleepMarkers ? { sleepMarkers: Qn(e.sleepMarkers, t.sleepMarkers) } : {},
		...void 0 !== t.nonwearMarkers && t.nonwearMarkers !== e.nonwearMarkers ? { nonwearMarkers: Qn(e.nonwearMarkers, t.nonwearMarkers) } : {}
	};
}
function tr() {
	const e = ae();
	return e && ie.getState().getWorkspace(e), function(e) {
		try {
			return localStorage.getItem(e);
		} catch {
			return null;
		}
	}("__e2eLocalMode"), "local";
}
let nr = null;
function rr(e, t, n) {
	return !nr || nr.scope.workspaceId === n.workspaceId && nr.scope.actor === n.actor && nr.scope.studyId === n.studyId && nr.scope.sourceKey === n.sourceKey || (nr = null), null !== nr && nr.fileId === e && nr.date === t ? nr : null;
}
function ar(e) {
	const t = /* @__PURE__ */ new Date(1e3 * e);
	return `${String(t.getUTCHours()).padStart(2, "0")}:${String(t.getUTCMinutes()).padStart(2, "0")}`;
}
function or(e) {
	return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " ");
}
var sr = e({
	bindShown: () => Rr,
	buildNightData: () => fr,
	ensureOpened: () => Hr,
	fileSessionsSettled: () => zr,
	flushCurrentNight: () => Vr,
	flushSession: () => Kr,
	isHeldOutbox: () => mr,
	leavesNightUnscored: () => gr,
	newNightContext: () => dr,
	nightSessions: () => Gr,
	nightShown: () => wr,
	nightTokenBrand: () => ir,
	outboxKey: () => Pr,
	sameNight: () => Or,
	sessionToken: () => jr,
	setNightScopeChanging: () => pr,
	withoutUntouchedProposal: () => hr
});
const ir = Symbol("night-session"), lr = Object.keys({
	markerHistory: !0,
	markerHistoryIndex: !0,
	selectedPeriodIndex: !0,
	_editGeneration: !0,
	lastSavedAt: !0,
	saveReceipt: !0,
	proposalNight: !0,
	acceptingProposal: !0,
	markerMode: !0,
	creationMode: !0,
	pendingOnsetTimestamp: !0,
	placementRejected: !0,
	nightRuleReceipt: !0,
	_isDragTransaction: !0,
	_dragSnapshotForAudit: !0,
	_dataRange: !0,
	_viewWindow: !0
});
function cr(e) {
	return Object.fromEntries(lr.map((t) => [t, e[t]]));
}
function dr(e, t = e.getState()) {
	return {
		...t,
		...cr(e.getInitialState()),
		...Cr(),
		isDirty: !1,
		isSaving: !1,
		saveError: null,
		nightLoading: !0
	};
}
let ur = 0;
function pr(e) {
	ur += e ? 1 : -1;
}
function mr(e) {
	return br === e.key;
}
function fr(e) {
	return {
		sleepMarkers: e.sleepMarkers.map((e) => Zn(e, {
			onsetTimestamp: e.onsetTimestamp,
			offsetTimestamp: e.offsetTimestamp,
			markerIndex: e.markerIndex,
			markerType: e.markerType,
			...e.source ? { source: e.source } : {},
			...!0 === e.edited ? { edited: !0 } : {},
			...e.placement ? { placement: e.placement } : {},
			...e.settingsHash ? { settingsHash: e.settingsHash } : {},
			...e.scoredUnderAlgorithm ? { scoredUnderAlgorithm: e.scoredUnderAlgorithm } : {},
			...e.sourceRecordReference ? { sourceRecordReference: e.sourceRecordReference } : {}
		})),
		nonwearMarkers: e.nonwearMarkers.map((e) => Zn(e, {
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp,
			markerIndex: e.markerIndex,
			...e.provenance ? { provenance: e.provenance } : {},
			...e.detector ? { detector: e.detector } : {}
		})),
		isInvalidNight: e.isInvalidNight,
		explicitNoNonwear: e.explicitNoNonwear,
		notes: e.notes || "",
		needsConsensus: e.needsConsensus
	};
}
function gr(e, t, n, r) {
	return !(!e || e.fileId !== t || e.date !== n) && !(r.isInvalidNight || r.explicitNoNonwear || r.needsConsensus || r.notes) && !((r.nonwearMarkers?.length ?? 0) > 0) && (0 === r.sleepMarkers.length || V(e, t, n, r.sleepMarkers));
}
function hr(e, t, n, r) {
	return V(e, t, n, r.sleepMarkers) ? {
		...r,
		sleepMarkers: []
	} : r;
}
function wr(e, t) {
	const n = t.availableDates[t.currentDateIndex];
	if (null === t.currentFileId || !n) return !1;
	const r = function(e) {
		const { username: t, selectedStudyId: n } = e;
		return {
			sourceKey: tr(),
			workspaceId: ae(),
			actor: t || "anonymous",
			studyId: n
		};
	}(t), a = t.nightLoading ? null : rr(t.currentFileId, n, r);
	return Or(e, {
		...e,
		scope: r,
		db: "local" === r.sourceKey && se() ? le() : null,
		fileId: t.currentFileId,
		date: n,
		algorithm: a ? a.algorithm : e.algorithm,
		detectionRule: a ? a.detectionRule : e.detectionRule
	});
}
function kr(e, t, n) {
	return {
		binding: e.db ? ge.captureWorkspaceBinding(e.db, {
			username: e.scope.actor,
			studyId: e.scope.studyId
		}, {
			fileId: e.fileId,
			analysisDate: e.date
		}) : null,
		events: (e) => (t ?? []).flatMap((t) => {
			const n = t.payload(e);
			return null === n ? [] : [{
				action: t.action,
				payload: n
			}];
		}),
		...e.settings?.sleepPeriodDetection ? { sleepPeriodDetection: e.settings.sleepPeriodDetection } : {},
		carried: n
	};
}
function yr(e, t, n) {
	const r = n.proposalNight ?? (n.acceptingProposal !== t ? n.acceptingProposal : null), a = hr(r, e.fileId, e.date, fr(n));
	return void 0 !== e.dataSource?.unscoreNight && gr(r, e.fileId, e.date, a) ? { kind: "unscore" } : {
		kind: "save",
		data: a
	};
}
async function vr(e, t, n, r) {
	const a = e.dataSource;
	if (!a) throw new Error("The night has no storage adapter; open its session before writing.");
	const o = e.db ?? void 0;
	let s;
	if ("unscore" === t.kind) s = await a.unscoreNight(e.fileId, e.date, e.scope.actor, e.algorithm, e.detectionRule, t.expected, o, n);
	else {
		let i = "save" === t.kind ? t.data : null;
		const l = "prepared" === t.kind ? async (n) => {
			const a = await t.prepare(n);
			i = a?.data ?? null, r.push(...a?.edits ?? []);
			const o = a?.settings ?? e.settings;
			return a ? {
				data: a.data,
				settings: {
					...o,
					expected: o?.expected ?? Tn(n),
					guardHashOnly: !0
				}
			} : null;
		} : i;
		"save" === t.kind && r.push(...t.edits ?? []);
		const c = "save" === t.kind ? t.settings ?? e.settings : e.settings, d = await a.saveMarkers(e.fileId, e.date, e.scope.actor, l, e.algorithm, e.detectionRule, c, o, n), u = i;
		if (!u) return {
			status: "dropped",
			reason: "The operation made no marker changes."
		};
		s = d ?? {
			isInvalidNight: !1,
			explicitNoNonwear: !1,
			needsConsensus: !1,
			...u
		};
	}
	return "local" !== e.scope.sourceKey && function(e, t, n) {
		(function(e, t) {
			for (const r of t?.carried ?? []) Hn(null, e, r);
			for (const r of t?.events?.(e.committed) ?? []) Hn(null, e, r);
			const n = Fn(e, t);
			n && Hn(null, e, n);
		})({
			...e,
			previous: null,
			committed: t,
			changed: null !== t
		}, n);
	}({
		fileId: e.fileId,
		date: e.date,
		username: e.scope.actor
	}, s, n), function(e, t) {
		e.dataSource?.onMarkersChanged(e.fileId, e.date, e.scope.actor, e.queryClient, t, e.algorithm, e.detectionRule, e.scope.workspaceId, e.scope.studyId, e.db ?? void 0);
	}(e, s), {
		status: "committed",
		night: s
	};
}
const _r = 3, Sr = /* @__PURE__ */ new Map(), Ir = /* @__PURE__ */ new WeakMap();
let Nr = 0, br = null, Mr = 0;
const xr = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakSet(), Er = /* @__PURE__ */ new WeakMap(), Cr = () => ({
	sleepMarkers: [],
	nonwearMarkers: [],
	isInvalidNight: !1,
	explicitNoNonwear: !1,
	needsConsensus: !1,
	notes: ""
});
function Tr(e) {
	return {
		sleepMarkers: e.sleepMarkers,
		nonwearMarkers: e.nonwearMarkers ?? [],
		isInvalidNight: e.isInvalidNight ?? !1,
		explicitNoNonwear: e.explicitNoNonwear ?? !1,
		needsConsensus: e.needsConsensus ?? !1,
		notes: e.notes
	};
}
function Pr(e) {
	return e.db && !Ir.has(e.db) && Ir.set(e.db, Nr += 1), JSON.stringify([
		e.db ? Ir.get(e.db) : 0,
		e.scope.sourceKey,
		e.scope.workspaceId,
		e.scope.actor,
		e.scope.studyId,
		e.fileId,
		e.date,
		e.algorithm,
		e.detectionRule
	]);
}
function Or(e, t) {
	return null !== e && null !== t && Pr(e) === Pr(t);
}
function Rr(e) {
	if (B(e.currentFileSourceType)) return null;
	return null;
}
function Dr(e) {
	const t = Rr(e);
	return t ? Sr.get(Pr(t)) ?? null : null;
}
function jr(e, t, n = e.binding) {
	const r = {
		[ir]: !0,
		generation: e.generation,
		fileId: n.fileId,
		date: n.date,
		identity: n,
		context: t
	};
	return xr.set(r, e), br === e.key && Mr === e.generation && wr(n, e.store.getState()) && !e.store.getState().nightLoading && Ar.add(r), r;
}
function $r(e, t) {
	if (void 0 !== t && (e.context = er(e.context, {
		...e.context,
		lastSavedAt: Date.now(),
		saveReceipt: {
			fileId: e.binding.fileId,
			date: e.binding.date,
			text: t
		}
	})), Dr(e.store.getState()) !== e) return;
	const n = e.log[0]?.failure;
	e.store.setState({
		isDirty: e.log.some((e) => null !== e.failure || null != e.prepared?.mutation) || e.drags.size > 0,
		isSaving: null !== e.runner && !n,
		saveError: n?.message ?? null,
		lastSavedAt: e.context.lastSavedAt,
		saveReceipt: e.context.saveReceipt
	});
}
async function Hr(e, t = e.binding) {
	var n;
	e.opened || (await (n = {
		fileId: t.fileId,
		date: t.date,
		actor: t.scope.actor,
		store: jn(t.db, t.scope),
		algorithm: t.algorithm,
		detectionRule: t.detectionRule
	}, Dn(n, () => Promise.resolve())), function(e, t) {
		const n = e.context, r = t ? Tr(t) : Cr(), a = Tn(t), o = void 0 !== e.saved && JSON.stringify(Tn(e.saved)) === JSON.stringify(a) && (null !== a.contentHash || he(e.saved ? Tr(e.saved) : null) === he(t ? r : null));
		void 0 === e.saved || o || (e.context = er(n, dr(e.store, n))), e.saved = t, e.view = er(n, {
			...r,
			...o ? {
				sleepMarkers: n.sleepMarkers,
				nonwearMarkers: n.nonwearMarkers
			} : {}
		});
		const s = e.context, i = !r.isInvalidNight && 0 === r.sleepMarkers.length && V(s.proposalNight, e.binding.fileId, e.binding.date, s.sleepMarkers);
		e.context = er(s, {
			...s,
			...e.view,
			sleepMarkers: i ? s.sleepMarkers : e.view.sleepMarkers,
			proposalNight: i ? s.proposalNight : null
		}), e.opened = !0;
	}(e, await t.dataSource.loadMarkers(t.fileId, t.date, t.scope.actor, t.algorithm, t.detectionRule, t.db ?? void 0)), function(e, t) {
		if (!mr(e) || !e.shownOpen?.()) return;
		if (!e.opened) return void $r(e);
		const n = e.store, r = n.getState(), a = jr(e, r, t);
		if (e.identify?.(), o = {
			scope: t.scope,
			db: t.db,
			fileId: t.fileId,
			date: t.date,
			algorithm: t.algorithm,
			detectionRule: t.detectionRule,
			options: t.settings
		}, nr = o, !Gr.owns(a, r)) return;
		var o;
		const s = e.view, i = e.context;
		r.showStoredNight(a, t.fileId, t.date, {
			...s,
			sleepMarkers: i.sleepMarkers,
			view: cr(i)
		}), e.context = er(e.context, n.getState()), $r(e);
	}(e, t));
}
function Lr(e, t, n = e.binding) {
	if (void 0 === e.saved) throw new Error("The night has not opened; no write has a baseline.");
	const r = Tn(e.saved);
	if ("unscore" === t.kind) return {
		...t,
		expected: r
	};
	const a = t.settings ?? n.settings ?? {};
	return {
		...t,
		settings: {
			...a,
			expected: r,
			guardHashOnly: !0
		}
	};
}
function Fr(e) {
	if (e.runner || !e.log.length || e.log[0].failure) return;
	let t;
	e.runner = new Promise((e) => {
		t = e;
	}), (async () => {
		for (; e.log.length && !e.log[0].failure;) {
			const t = e.log[0], r = jr(e, t.token.context, t.token.identity);
			Er.set(r, {
				slot: t,
				run: (e) => e()
			}), $r(e);
			try {
				if (t.prepared ??= await t.prepare(r), t.failure) throw t.prepared = null, t.failure;
				Er.delete(r);
				const n = t.prepared;
				let a;
				if (n.refusal) a = {
					status: "dropped",
					reason: n.refusal
				};
				else if (n.mutation) {
					if (!t.audit) throw new Error("An internal read cannot write a night.");
					const r = [...n.carried];
					a = await vr(t.token.identity, Lr(e, n.mutation, t.token.identity), {
						...t.audit,
						carried: r
					}, r);
				} else a = {
					status: "committed",
					night: e.saved ?? null
				};
				const o = e.saved ?? null;
				"committed" === a.status && n.mutation && (e.saved = a.night, n.accepting && (e.context = er(e.context, {
					...e.context,
					acceptingProposal: null
				}), e.store.getState().settleProposalAcceptance(n.accepting, !0))), e.log.shift(), "committed" !== a.status || !Gr.holds(t.token, e.store.getState()) && Ar.has(t.token) || t.options.onCommitted?.(a.night), t.settle(a), $r(e, "committed" === a.status && n.mutation && a.night ? Br(o, a.night, e.binding.date, n.undone) : void 0);
			} catch (n) {
				Er.delete(r), t.failure = n instanceof Error ? n : new Error(String(n)), t.prepared?.mutation || (t.prepared = null), t.settle({
					status: "dropped",
					reason: `${t.failure.message} Return to the Sleep page and use Retry.`
				}), t.failure instanceof Cn || t.failure instanceof En || !(t.retries < _r) || (t.retries += 1, t.retryTimer = setTimeout(() => {
					t.retryTimer = null, t.failure = null, Fr(e);
				}, 2 ** t.retries * 1e3)), $r(e);
			}
		}
		e.runner = null, $r(e), t();
	})();
}
async function Vr(e) {
	const t = Dr(e.getState());
	return !t || Kr(t);
}
async function Kr(e) {
	return Fr(e), await Wr(e), 0 === e.log.length;
}
async function Wr(e) {
	for (; e.runner;) await e.runner;
}
const Gr = {
	executor: (e) => Er.get(e)?.run ?? null,
	fail: (e, t) => {
		const n = Er.get(e)?.slot;
		n && (n.failure = t instanceof Error ? t : new Error(String(t)));
	},
	holds: (e, t = xr.get(e)?.store.getState() ?? e.context) => !t.nightLoading && Gr.owns(e, t),
	owns: (e, t = xr.get(e)?.store.getState() ?? e.context) => {
		const n = xr.get(e);
		return void 0 !== n && n.opened && br === n.key && Mr === e.generation && n.generation === e.generation && wr(n.binding, t);
	},
	night: (e) => xr.get(e)?.view ?? null,
	context: (e) => xr.get(e)?.context ?? e.context,
	updateContext: (e, t) => {
		const n = xr.get(e);
		n && (n.context = er(n.context ?? t, t));
	},
	write: (e, t, n, r) => {
		const a = xr.get(e), o = Er.get(e);
		if (!a || !o) throw new Error("A night write requires its proposal's executor.");
		a.view = er(a.context ?? e.context, t), r && (a.context = er(a.context ?? r, {
			...r,
			...a.view
		})), o.slot.carried.push(...n);
	},
	enqueue: (e, t, n = !1, r) => {
		const a = xr.get(e);
		if (!a) return Promise.reject(/* @__PURE__ */ new Error("The edit has no owning night session."));
		const o = r ?? a.store;
		let s;
		return function(e, t, n, r = {}) {
			let a;
			const o = new Promise((e) => {
				a = e;
			}), s = [], i = {
				sequence: ++e.sequence,
				token: t,
				prepare: n,
				options: r,
				settled: o,
				settle: a,
				audit: r.readOnly ? null : kr(t.identity, r.acts, s),
				prepared: null,
				failure: null,
				carried: s,
				retries: 0,
				retryTimer: null
			};
			return e.log.push(i), Fr(e), $r(e), i;
		}(a, e, async (r) => {
			await Hr(a, e.identity);
			const i = Gr.context(r)._editGeneration;
			return s = await t(r), n || Gr.context(r)._editGeneration === i ? {
				mutation: null,
				accepting: null,
				carried: [],
				undone: !1
			} : function(e, t, n = e.store) {
				const r = Gr.holds(t, n.getState()), a = r ? n.getState() : e.context, o = r ? a.acceptingProposal : null;
				return {
					mutation: r ? yr(t.identity, o, a) : {
						kind: "save",
						data: e.view
					},
					accepting: o,
					carried: r ? n.takeShownEdits(t.identity) : Er.get(t).slot.carried,
					undone: a.markerHistoryIndex < a.markerHistory.length - 1
				};
			}(a, r, o);
		}).settled.then((e) => ("dropped" !== e.status || "boolean" != typeof s) && s);
	},
	waiting: (e) => e ? (xr.get(e)?.log.length ?? 0) > 0 : [...Sr.values()].some((e) => e.log.length > 0),
	setDragging: (e, t) => {
		const n = xr.get(e);
		t ? n?.drags.add(e) : n?.drags.delete(e);
	},
	scopeChanging: () => ur > 0,
	hasUnsavedWork: () => [...Sr.values()].some((e) => e.log.length > 0 || e.drags.size > 0),
	settled: async () => {
		await Promise.all([...Sr.values()].map(Wr));
	}
}, Ur = (e) => null === e ? "--:--" : ar(e);
function Jr(e) {
	return [...e.sleepMarkers.map((e) => ({
		start: e.onsetTimestamp,
		end: e.offsetTimestamp,
		label: e.markerType === l.NAP ? "nap" : "main sleep",
		startName: "onset",
		endName: "offset"
	})), ...(e.nonwearMarkers ?? []).map((e) => ({
		start: e.startTimestamp,
		end: e.endTimestamp,
		label: "nonwear",
		startName: "start",
		endName: "end"
	}))];
}
function qr(e, t, n) {
	if (t === n || null === t || null === n) return null;
	const r = Math.abs(n - t);
	return `moved ${e} ${r >= 60 ? `${String(Math.round(r / 60))} min` : `${String(r)} s`} ${n < t ? "earlier" : "later"}`;
}
function Br(e, t, n, r) {
	const a = e ? Jr(e) : [], o = Jr(t), s = (e, t) => e.label === t.label && e.start === t.start && e.end === t.end, i = a.filter((e) => !o.some((t) => s(t, e))), l = o.filter((e) => !a.some((t) => s(e, t))), c = [];
	for (const u of i) {
		const e = l.findIndex((e) => e.label === u.label);
		if (-1 === e) {
			c.push(`deleted ${u.label} ${Ur(u.start)}–${Ur(u.end)}`);
			continue;
		}
		const [t] = l.splice(e, 1);
		if (!t) continue;
		const n = [qr(u.startName, u.start, t.start), qr(u.endName, u.end, t.end)].filter((e) => null !== e);
		c.push(n.length > 0 ? n.join(" and ") : `changed ${u.label}`);
	}
	for (const u of l) c.push(`${r ? "restored" : "saved"} ${u.label} ${Ur(u.start)}–${Ur(u.end)}`);
	(e?.isInvalidNight ?? !1) !== t.isInvalidNight && c.push(t.isInvalidNight ? "marked invalid night" : "cleared invalid night"), (e?.explicitNoNonwear ?? !1) !== (t.explicitNoNonwear ?? !1) && c.push(t.explicitNoNonwear ? "confirmed no nonwear" : "cleared no-nonwear"), (e?.needsConsensus ?? !1) !== t.needsConsensus && c.push(t.needsConsensus ? "flagged for consensus" : "unflagged for consensus"), (e?.notes ?? "") !== t.notes && c.push("saved note");
	const d = c.length > 0 ? c.join("; ") : "nothing changed";
	return r ? `Undid — ${d} on ${n}` : `${d.charAt(0).toUpperCase()}${d.slice(1)} on ${n}`;
}
async function zr(e, t, n) {
	await Promise.all([...Sr.values()].filter((r) => r.binding.db === e && r.binding.fileId === t && (!n || r.binding.date === n.date && r.binding.scope.actor === n.username)).map(Wr));
}
export { Zt as A, Pe as B, _n as C, sn as D, mn as E, At as F, at as G, Ge as H, xt as I, be as J, Se as K, lt as L, Xt as M, Vt as N, an as O, Bt as P, Nt as R, kn as S, un as T, Le as U, Fe as V, Ee as W, _e as X, Ne as Y, ye as Z, Un as _, sr as a, hn as b, or as c, er as d, zn as f, Bn as g, Jn as h, Gr as i, Yt as j, nn as k, Zn as l, $n as m, zr as n, Or as o, Tn as p, Ie as q, Vr as r, ar as s, Rr as t, Xn as u, An as v, yn as w, pn as x, Sn as y, Re as z };
