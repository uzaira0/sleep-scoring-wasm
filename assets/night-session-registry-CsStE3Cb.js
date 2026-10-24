import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import { i as t } from "./workers-p3B9jYXf.js";
import { A as n, B as r, D as a, E as o, F as s, Gt as i, H as l, I as c, J as u, Jt as d, K as p, M as m, N as f, O as g, P as h, Q as w, Qt as k, Rt as y, T as v, U as _, Ut as S, V as I, W as N, X as b, Xt as M, Y as x, Z as A, Zt as E, at as T, d as C, dt as R, ft as P, hn as O, it as D, j, k as $, l as H, nt as L, ot as V, p as K, pt as W, q as G, rt as U, st as J, tt as B, v as q, w as z, z as Y } from "./schema-B_gLylrK.js";
import { c as X, r as Z, u as Q } from "./legacy-invalid-night-BxvRkrkV.js";
import { A as ee, G as te, U as ne, W as re, _ as ae, a as oe, n as se, o as ie, t as le } from "./workspace-db-Df2TUNS4.js";
import { a as ce, o as ue } from "./content-hash-BtD8CeUH.js";
import { a as de, i as pe } from "./project-revision-Cu3Cq-_K.js";
import { c as me, i as fe } from "./sleep-period-detection-DdbFqpqI.js";
import { t as ge } from "./audit-log-BBuIaYr5.js";
import { t as he } from "./audit-hash-rfcCP1yx.js";
import { i as we, t as ke } from "./wal-utAK0eSD.js";
const ye = "auto_score", ve = /* @__PURE__ */ new WeakSet();
function _e(e) {
	if (null !== e && "object" == typeof e && !Object.isFrozen(e)) {
		Object.freeze(e);
		for (const t of Object.values(e)) _e(t);
	}
	return e;
}
function Se(e) {
	return ve.add(_e(e)), e;
}
function Ie(e) {
	if (null === e || "object" != typeof e || !ve.has(e)) return null;
	const t = e, n = (r = t.id, null === D(r) ? null : r);
	var r;
	if (null === n) return null;
	const a = Object.fromEntries(Object.entries(t).filter(([e]) => !p.excludedFieldNames.includes(e)));
	return {
		cellId: n,
		implementationVersion: t.implementationVersion,
		configHash: Ze(a)
	};
}
const Ne = new Map(R.map((e) => [e.id, e.conformance]));
function be(e) {
	return Ne.get(e) ?? "conformant";
}
const Me = function() {
	const e = /* @__PURE__ */ new Map();
	for (const t of R) {
		if ("sleep_wake" !== t.kind) continue;
		if (!c.includes(t.requiredSignal)) continue;
		if (_.includes(t.execution)) continue;
		const n = t.family, r = e.get(n);
		if (r) {
			if (r.conformance !== t.conformance) throw new Error(`count scorer family ${n} has conflicting conformance across variants: ${r.conformance} vs ${t.conformance}`);
		} else {
			const r = u[n];
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
}(), xe = function() {
	const e = new Map(Me.map((e) => [e.slug, e])), t = [];
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
}(), Ae = n, Ee = r, Te = I, Ce = Object.fromEntries(l.map((e) => [e, 0])), Re = Object.fromEntries(L.map((e) => [e.value, 0])), Pe = U;
function Oe(e = {}) {
	const t = new Set(e.includeFamilies ?? l), n = e.epochSeconds ?? Ee, r = new Set(e.excludeHasibAlgorithms ?? []), a = e.implementationVersion ?? Te, s = [], i = [];
	if (t.has("count_hasib")) {
		for (const e of Me) if (r.has(e.slug)) s.push({
			id: T("count_skip_entry", { method_family: e.slug }),
			reason: ze("skipped_method_reason", { algorithm_value: e.algorithm })
		});
		else for (const t of Object.keys(Ae)) for (const r of Ae[t]) for (const o of n) i.push(Ve({
			family: e,
			countFamily: t,
			axis: r,
			epochSeconds: o,
			implementationVersion: a
		}));
		for (const e of xe) if (!r.has(e.slug)) for (const t of Object.keys(Ae)) for (const r of Ae[t]) for (const o of n) i.push(Ke({
			variant: e,
			countFamily: t,
			axis: r,
			epochSeconds: o,
			implementationVersion: a
		}));
	}
	for (const o of Object.keys(N)) t.has(o) && i.push(We(o, a));
	if (t.has("lstm")) for (const o of e.lstmModels ?? []) i.push(...Ge(o, a));
	(e.includeConsensus ?? !0) && t.has("consensus") && i.push(...function(e, t) {
		const n = [], r = Array.from(new Set(e.filter((e) => Ue(e)).filter((e) => Ee.includes(e.epochSeconds)).map((e) => e.epochSeconds))).sort((e, t) => e - t);
		for (const a of r) {
			const r = `${String(a)}s`, s = e.filter((e) => Ue(e) && e.epochSeconds === a);
			if (s.length <= 1) continue;
			const { slug: i, label: l } = Je(s);
			for (const e of Y) n.push(Le({
				id: T("consensus_cell", {
					scope: i,
					strategy: e,
					epoch_seconds: a
				}),
				label: ze("consensus_cell_label", {
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
	}(i, a));
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
	}(i).map(Se);
	return {
		configs: c,
		skipped: s,
		warnings: qe(c),
		summary: Fe({
			configs: c,
			skipped: s
		})
	};
}
let De, je;
function $e() {
	return De ??= Oe({
		includeFamilies: ["count_hasib", "consensus"],
		epochSeconds: [30, 60],
		includeConsensus: !0
	}), De;
}
function He(e) {
	return je ??= new Map($e().configs.map((e) => [e.id, e])), je.get(e);
}
function Fe(e) {
	const t = { ...Ce }, n = { ...Re };
	for (const r of e.configs) t[r.family] += 1, n[r.validationStatus] += 1;
	return {
		total: e.configs.length,
		byFamily: t,
		byValidationStatus: n,
		skipped: e.skipped.length
	};
}
function Le(e) {
	const t = e.implementationVersion ?? Te, n = e.members.map((e) => e.id), r = [...e.members].sort((e, t) => e.id < t.id ? -1 : e.id > t.id ? 1 : 0).map((e) => e.configHash);
	return {
		...Be({
			id: e.id,
			family: z,
			label: e.label,
			algorithm: `consensus:${e.strategy}`,
			outputKind: v,
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
		conformance: be("consensus_majority_vote")
	};
}
function Ve(e) {
	const t = Pe(e.countFamily, e.axis, e.epochSeconds), n = V(e.family.slug, e.countFamily, e.axis, e.epochSeconds) ? $ : g;
	return {
		...Be({
			id: T("count_cell", {
				method_family: e.family.slug,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: m,
			label: ze("count_cell_label", {
				method_label: e.family.label,
				input_label: Ye(e.countFamily, e.axis, e.epochSeconds)
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
function Ke(e) {
	const t = Pe(e.countFamily, e.axis, e.epochSeconds);
	return {
		...Be({
			id: T("count_cell", {
				method_family: e.variant.slug,
				implementation_variant: e.variant.implementation,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: m,
			label: ze("count_provenance_cell_label", {
				method_label: e.variant.label,
				implementation_label: e.variant.implementationLabel,
				input_label: Ye(e.countFamily, e.axis, e.epochSeconds)
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
function We(e, t) {
	const n = N[e];
	if (void 0 === n) throw new Error(`no generated fixed output projection for family ${e}`);
	return {
		...Be({
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
		conformance: be(n.methodBindingId)
	};
}
function Ge(e, t) {
	const n = e.thresholdPresets && e.thresholdPresets.length > 0 ? e.thresholdPresets : [b], r = be(e.id);
	return n.map((n) => ({
		...Be({
			id: T("model_cell", {
				model_slug: Xe(e.id),
				preset_slug: Xe(n.id)
			}),
			family: A,
			label: ze("model_cell_label", {
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
			validationStatus: x,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [`lstm:${e.id}`]
		}),
		conformance: r
	}));
}
function Ue(e) {
	return "sleep_wake_epoch" === e.outputKind && "consensus" !== e.family && void 0 === e.parameters.implementation;
}
function Je(e) {
	const t = new Set(e.map((e) => e.family));
	if (1 === t.size && t.has("count_hasib")) return {
		slug: `${m}_sleep_wake`,
		label: ze("count_consensus_scope_label", {})
	};
	const n = Array.from(new Set(e.filter((e) => e.family === A).map((e) => "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm).filter((e) => e.length > 0))).sort();
	if (t.has("lstm") && n.length > 0) {
		const e = n.map((e) => Xe(e)).join("_"), r = t.has(m);
		return {
			slug: r ? `${m}_${A}_${e}_sleep_wake` : `${A}_${e}_sleep_wake`,
			label: ze(r ? "count_lstm_consensus_scope_label" : "lstm_consensus_scope_label", { model_ids: n.join(", ") })
		};
	}
	return {
		slug: "all_sleep_wake",
		label: ze("all_consensus_scope_label", {})
	};
}
function Be(e) {
	return {
		...e,
		configHash: Ze(e)
	};
}
function qe(e) {
	const t = [];
	return e.some((e) => "count_hasib" === e.family && e.epochSeconds === Ee[0]) && t.push(ze("count_30_warning", {})), e.some((e) => "lstm" === e.family) || t.push(ze("no_lstm_warning", {})), t;
}
function ze(e, t) {
	const n = G[e];
	if (void 0 === n) throw new Error(`no generated planner message ${e}`);
	return Object.entries(t).reduce((e, [t, n]) => e.replace(`{${t}}`, String(n)), n);
}
function Ye(e, t, n) {
	return j[e].labelTemplate.replace("{axis}", t).replace("{axis_label}", B.axis?.[t] ?? t).replace("{epoch_seconds}", String(n));
}
function Xe(e) {
	return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function Ze(e) {
	const t = Qe(e);
	let n = p.initialValue;
	for (let r = 0; r < t.length; r += 1) n ^= t.charCodeAt(r), n = Math.imul(n, p.prime) >>> 0;
	return n.toString(16).padStart(p.lowercaseHexWidth, "0");
}
function Qe(e) {
	return null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map((e) => Qe(e)).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => `${JSON.stringify(e)}:${Qe(t)}`).join(",")}}`;
}
const et = new Map(R.map((e) => [e.id, {
	id: e.id,
	conformance: e.conformance,
	needsModelArtifact: e.needsModelArtifact
}]));
function tt(e) {
	return et.get(e)?.conformance ?? null;
}
const nt = ee, rt = $e().configs.map((e) => ({
	value: e.id,
	label: `Tensor: ${e.label}`
})), at = new Set(P);
function ot(e) {
	if (!at.has(e.method)) throw new Error(`STANDARD_ALGORITHM_OPTIONS references '${e.method}', which is not a generated scoring-method contract id.`);
	return {
		value: e.method,
		label: e.label
	};
}
const st = [
	{
		method: y.SADEH_1994_ACTILIFE,
		label: "Sadeh (1994) ActiLife - Recommended"
	},
	{
		method: y.SADEH_1994_ORIGINAL,
		label: "Sadeh (1994) Original"
	},
	{
		method: y.SADEH_1994_GGIR,
		label: "Sadeh (1994) GGIR / zero-crossing Y"
	},
	{
		method: y.COLE_KRIPKE_1992_ACTILIFE,
		label: "Cole-Kripke (1992) ActiLife"
	},
	{
		method: y.COLE_KRIPKE_1992_ORIGINAL,
		label: "Cole-Kripke (1992) Original"
	},
	{
		method: y.COLE_KRIPKE_1992_GGIR,
		label: "Cole-Kripke (1992) GGIR / zero-crossing Y"
	}
], it = [{
	method: y.LSTM_SLEEP_WAKE,
	label: "LSTM Sleep/Wake (ONNX spectral)"
}, {
	method: y.VAN_HEES_2015,
	label: "van Hees (2015)"
}], lt = [
	{
		method: y.UCSD_SCRIPPS_2010,
		label: "UCSD / Scripps (2010)"
	},
	{
		method: y.SAZONOV_2004,
		label: "Sazonov (2004) — provisional"
	},
	{
		method: y.SYED_CNN,
		label: "Syed CNN — needs model"
	},
	{
		method: y.ACTIWARE_SLEEP_WAKE,
		label: "Actiware Sleep/Wake"
	}
].map((e) => {
	return "needs_model" !== tt((t = ot(e)).value) ? t : {
		...t,
		disabled: !0
	};
	var t;
}), ct = [
	...st.map(ot),
	{
		value: ae.TENSOR_MAJORITY_VOTE,
		label: "Tensor majority vote"
	},
	...it.map(ot),
	...lt
], ut = [...ct, ...rt], dt = {
	count: "Count-based sleep/wake",
	window: "Window / HDCZA",
	neural: "Neural",
	experimental: "Experimental (provisional)",
	tensor: "Tensor variants (A/B)"
}, pt = [
	"count",
	"window",
	"neural",
	"experimental",
	"tensor"
], mt = new Map(R.map((e) => [e.id, e.execution]));
function ft(e) {
	if (!at.has(e)) return "tensor";
	const t = mt.get(e);
	if ("neural_model" === t) return "neural";
	if ("angle_spt" === t) return "window";
	const n = tt(e);
	return "provisional" === n || "needs_model" === n ? "experimental" : "count";
}
function gt(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = ft(n.value), r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	return pt.flatMap((e) => {
		const n = t.get(e);
		return n ? [{
			label: dt[e],
			options: n
		}] : [];
	});
}
gt(ct), gt(ut);
const ht = Object.fromEntries(W.map((e) => [e.id, {
	onsetN: e.onsetMinConsecutiveSleep,
	offsetN: e.offsetMinConsecutiveMinutes,
	offsetState: e.offsetScanState,
	label: e.label
}])), wt = ht[M.CONSECUTIVE_ONSET3S_OFFSET5S];
function kt(e) {
	return ht[e] ?? wt;
}
function yt(e) {
	return e?.markerType === S.MAIN_SLEEP;
}
function vt(e) {
	return e?.markerType === S.NAP;
}
function _t(e, t) {
	return t || e.some(yt) ? S.NAP : S.MAIN_SLEEP;
}
function St(e) {
	const t = [], n = [];
	for (const r of e) (yt(r) ? n : t).push(r);
	return {
		kept: t,
		cleared: n
	};
}
function It(e, t) {
	const n = "sleep" === e ? nt.MAX_SLEEP_PERIODS_PER_DAY : nt.MAX_NONWEAR_PERIODS_PER_DAY;
	return t > n ? `Cannot create more than ${String(n)} ${e} periods per day.` : null;
}
async function Nt(e) {
	const { sleepMarkers: n, nonwearMarkers: r, isInvalidNight: a } = e, o = It("sleep", n.length) ?? It("nonwear", r.length);
	if (o) return o;
	const s = n.filter(yt).length;
	if (a && s > 0) return "An Invalid night cannot contain main sleep.";
	if (s > 1) return "A night can contain only one main sleep period.";
	if ([...n.map((e) => [e.onsetTimestamp, e.offsetTimestamp]), ...r.map((e) => [e.startTimestamp, e.endTimestamp])].some(([e, t]) => null != e && !Number.isFinite(e) || null != t && !Number.isFinite(t) || null != e && null != t && t <= e)) return "Offset must be after onset, with finite boundaries.";
	const i = n.filter((e) => null != e.onsetTimestamp && null != e.offsetTimestamp);
	return (await Promise.all(i.slice(1).map((e, n) => {
		const r = i.slice(0, n + 1);
		return t().nightIntervalOverlap(e.onsetTimestamp, e.offsetTimestamp, Float64Array.from(r, (e) => e.onsetTimestamp), Float64Array.from(r, (e) => e.offsetTimestamp), new Float64Array(r.length).fill(1));
	}))).some((e) => e.seconds.some((e) => e > 0)) ? "Sleep windows cannot overlap. Move or remove the existing window first." : null;
}
function bt(e) {
	return void 0 !== e?.ggirBundleRevision;
}
function Mt(e, t, n) {
	return bt(e) && t.sleepMarkers.some(yt) && !n.sleepMarkers.some(yt);
}
function xt(e, t) {
	if (t?.isInvalidNight) return { kind: "invalid" };
	const n = t?.sleepMarkers.find(yt);
	return n ? {
		kind: "scored",
		main: n
	} : {
		kind: t ? "naps/nonwear-only" : "unreviewed",
		window: e
	};
}
function At(e, t) {
	return {
		sleepPeriodDetectionConfig: me(e),
		sleepPeriodDetectionSummary: t ?? fe(e)
	};
}
function Et(e) {
	return {
		algorithm: e.algorithm,
		...At(e.sleepPeriodDetection, e.sleepPeriodDetectionSummary),
		sleepCount: e.sleepCount,
		napCount: e.napCount,
		markers: e.markers
	};
}
function Tt(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function Ct(e) {
	return {
		...e,
		edited: !0
	};
}
function Rt(e, t, n, r) {
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
	const [i, l] = function(e) {
		const t = e === S.NAP ? S.NAP : S.MAIN_SLEEP;
		return [t, t === S.MAIN_SLEEP ? S.NAP : t];
	}(a.markerType), c = Ct({
		...a,
		offsetTimestamp: r,
		markerType: i
	}), u = Ct({
		...a,
		onsetTimestamp: n,
		markerType: l
	}), d = [...e];
	return d.splice(t, 1, c, u), {
		ok: !0,
		markers: Tt(d),
		newIndex: t + 1
	};
}
function Pt(e, t, n) {
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
	const s = r.onsetTimestamp, i = r.offsetTimestamp, l = o.onsetTimestamp, c = o.offsetTimestamp;
	if (null == s || null == i || null == l || null == c) return {
		ok: !1,
		reason: "no-boundaries"
	};
	const u = Math.min(s, l), d = Math.max(i, c), p = function(e, t) {
		return yt(e) || yt(t) ? S.MAIN_SLEEP : S.NAP;
	}(r, o), m = Math.min(t, a), f = Ct({
		...p !== S.MAIN_SLEEP || yt(r) ? r : o,
		onsetTimestamp: u,
		offsetTimestamp: d,
		markerType: p
	}), g = e.filter((e, n) => n !== t && n !== a);
	return g.splice(m, 0, f), {
		ok: !0,
		markers: Tt(g),
		mergedIndex: m
	};
}
function Ot(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function Dt(e) {
	return "boolean" == typeof e ? e : null;
}
function jt(e) {
	return "string" == typeof e ? e : null;
}
function $t(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function Ht(e, t) {
	return !(e.length > 0) && t;
}
function Ft(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
function Lt(e) {
	const t = function(e) {
		return Array.isArray(e) ? e : null;
	}(e);
	return null === t ? null : t.every(Ft) ? t : null;
}
function Vt(e) {
	const t = Lt(e);
	return null === t ? null : t;
}
function Kt(e) {
	const t = Lt(e);
	return null === t ? null : t;
}
function Wt(e) {
	return e.filter((e) => e.markerType === S.MAIN_SLEEP).length;
}
function Gt(e) {
	return e.every((e, t) => e.markerIndex === t + 1);
}
W.map(({ id: e, label: t }) => ({
	value: e,
	label: t
})), d.NONE, d.WEBSTER, S.MAIN_SLEEP, S.NAP, i.SMART, i.DIARY, i.HDCZA, i.L5, i.LONGEST_BOUT, i.EVENT_MARKER, i.ACTIWARE_REST_INTERVAL, i.NONE;
const Ut = {
	main_sleep_on_invalid_night: ({ after: e }) => e.isInvalidNight && Wt(e.sleepMarkers) > 0,
	multiple_main_sleep: ({ after: e }) => Wt(e.sleepMarkers) > 1,
	first_marker_not_main_sleep: ({ after: e }) => !e.isInvalidNight && e.sleepMarkers.length > 0 && 0 === Wt(e.sleepMarkers),
	marker_index_noncontiguous: ({ after: e }) => !Gt(e.sleepMarkers) || !Gt(e.nonwearMarkers),
	boundaries_disordered: ({ after: e }) => e.sleepMarkers.some((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && e.onsetTimestamp >= e.offsetTimestamp) || e.nonwearMarkers.some((e) => null != e.startTimestamp && null != e.endTimestamp && e.startTimestamp >= e.endTimestamp),
	nonwear_flag_with_markers: ({ after: e }) => e.explicitNoNonwear && e.nonwearMarkers.length > 0,
	manual_nonwear_in_sleep: ({ payload: e }) => !0 === e.manualNonwearInSleep,
	marker_limit_exceeded: ({ after: e }) => e.sleepMarkers.length > nt.MAX_SLEEP_PERIODS_PER_DAY || e.nonwearMarkers.length > nt.MAX_NONWEAR_PERIODS_PER_DAY,
	split_not_strictly_inside: ({ before: e, payload: t }) => {
		const n = Ot(t.periodIndex), r = Ot(t.at);
		return null !== n && null !== r && !Rt(e.sleepMarkers, n, r, Ot(t.firstOffset) ?? r).ok;
	},
	merge_no_neighbor: ({ before: e, payload: t }) => {
		const n = Ot(t.periodIndex), r = jt(t.direction);
		return null !== n && ("prev" === r || "next" === r) && !Pt(e.sleepMarkers, n, r).ok;
	},
	mutation_on_read_only_view: ({ context: e }) => !0 === e.readOnlyView,
	undo_beyond_history: ({ context: e }) => void 0 !== e.undoDepth && e.undoDepth <= 0,
	redo_beyond_history: ({ context: e }) => void 0 !== e.redoDepth && e.redoDepth <= 0
};
function Jt(e, t) {
	const n = X[e]?.guards ?? [], r = [];
	for (const a of n) {
		const e = Ut[a], n = Q[a];
		e && n && e(t) && r.push({
			guard: a,
			severity: n.severity
		});
	}
	return r;
}
function Bt(e, t) {
	const n = t.stateAfter;
	if (null === n || "object" != typeof n) return {
		state: e,
		reconstructed: !1
	};
	const r = n, a = Vt(r.sleepMarkers), o = Kt(r.nonwearMarkers);
	return null === a || null === o ? {
		state: e,
		reconstructed: !1
	} : { state: {
		...e,
		sleepMarkers: a,
		nonwearMarkers: o,
		isInvalidNight: Dt(r.isInvalidNight) ?? e.isInvalidNight,
		explicitNoNonwear: Dt(r.explicitNoNonwear) ?? e.explicitNoNonwear,
		needsConsensus: Dt(r.needsConsensus) ?? e.needsConsensus,
		notes: jt(r.notes) ?? e.notes
	} };
}
const qt = {
	marker_placed: (e, t) => {
		if ("nonwear" === jt(t.category)) {
			const n = Ot(t.startTimestamp), r = Ot(t.endTimestamp);
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
		const n = Ot(t.onsetTimestamp), r = Ot(t.offsetTimestamp);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = jt(t.markerType) ?? _t(e.sleepMarkers, e.isInvalidNight), o = [...e.sleepMarkers, {
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
		const r = n, a = Vt(r.sleepMarkers), o = Kt(r.nonwearMarkers);
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
		const n = Ot(t.periodIndex), r = t.updates;
		if (null === n || null === r || "object" != typeof r) return {
			state: e,
			reconstructed: !1
		};
		const a = r;
		if ("nonwear" === jt(t.category)) {
			const t = e.nonwearMarkers.map((e, t) => t === n ? {
				...e,
				...a
			} : e);
			return { state: {
				...e,
				nonwearMarkers: t,
				explicitNoNonwear: Ht(t, e.explicitNoNonwear)
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
		const n = Ot(t.periodIndex);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : "nonwear" === jt(t.category) ? { state: {
			...e,
			nonwearMarkers: $t(e.nonwearMarkers.filter((e, t) => t !== n))
		} } : { state: {
			...e,
			sleepMarkers: $t(e.sleepMarkers.filter((e, t) => t !== n))
		} };
	},
	markers_cleared: (e) => ({ state: {
		...e,
		sleepMarkers: [],
		nonwearMarkers: []
	} }),
	sleep_period_split: (e, t) => {
		const n = Ot(t.periodIndex), r = Ot(t.at);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = Rt(e.sleepMarkers, n, r, Ot(t.firstOffset) ?? r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	sleep_period_merged: (e, t) => {
		const n = Ot(t.periodIndex), r = jt(t.direction);
		if (null === n || "prev" !== r && "next" !== r) return {
			state: e,
			reconstructed: !1
		};
		const a = Pt(e.sleepMarkers, n, r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	session_start: (e, t) => {
		const n = Vt(t.sleepMarkers), r = Kt(t.nonwearMarkers);
		return null === n || null === r ? {
			state: e,
			reconstructed: !1
		} : {
			state: {
				...e,
				sleepMarkers: n,
				nonwearMarkers: r,
				isInvalidNight: Dt(t.isInvalidNight) ?? e.isInvalidNight,
				explicitNoNonwear: Dt(t.explicitNoNonwear) ?? e.explicitNoNonwear,
				needsConsensus: Dt(t.needsConsensus) ?? e.needsConsensus,
				notes: jt(t.notes) ?? e.notes
			},
			reconstructed: void 0 !== t.notes
		};
	},
	markers_saved: (e, t, n) => {
		const r = Ot(t.sleepCount), a = Ot(t.nonwearCount);
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
	undo: Bt,
	redo: Bt,
	auto_score_applied: (e, t) => {
		const n = Vt(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: n
		} };
	},
	auto_nonwear_applied: (e, t) => {
		const n = Kt(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			nonwearMarkers: n,
			explicitNoNonwear: Ht(n, e.explicitNoNonwear)
		} };
	},
	consensus_toggled: (e, t) => {
		const n = Dt(t.value);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			needsConsensus: n
		} };
	},
	invalid_night_toggled: (e, t) => {
		const n = Dt(t.value);
		if (null === n) return {
			state: e,
			reconstructed: !1
		};
		if (!n) return { state: {
			...e,
			isInvalidNight: !1
		} };
		const r = $t(e.sleepMarkers.filter((e) => e.markerType !== S.MAIN_SLEEP));
		return { state: {
			...e,
			isInvalidNight: !0,
			sleepMarkers: r
		} };
	},
	no_nonwear_toggled: (e, t) => {
		const n = Dt(t.value);
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
		const n = jt(t.after);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			notes: n
		} };
	},
	candidate_copied: Bt
};
function zt(e, t, n = {}) {
	const r = Z(t), a = r.payload ?? {}, o = qt[r.action], s = o ? o(e, a, r) : { state: e }, i = s.state;
	return {
		state: i,
		violations: Jt(r.action, {
			before: e,
			after: i,
			event: r,
			payload: a,
			context: n
		}),
		reconstructed: s.reconstructed ?? !0
	};
}
function Yt(e) {
	return "object" != typeof e || null === e ? null : "string" == typeof e.action ? Z(e) : null;
}
function Xt(e, t) {
	if ("markers_saved" !== e.action) return !1;
	const n = e.payload ?? {}, r = Ot(n.sleepCount), a = Ot(n.nonwearCount);
	return null !== r && null !== a && (r !== t.sleepMarkers.length || a !== t.nonwearMarkers.length);
}
function Zt(e) {
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
		const e = Yt(a), o = e ? zt(n, e) : {
			state: n,
			violations: [],
			reconstructed: !1
		};
		n = o.state, null !== e && !0 === X[e.action]?.stateKeyframe && o.reconstructed ? r = "exact" : o.reconstructed || "exact" !== r || (r = "divergent"), "exact" === r && null !== e && Xt(e, n) && (r = "divergent"), t.push({
			state: n,
			basis: r,
			violations: o.violations
		});
	}
	return t;
}
function Qt(e) {
	const t = [
		`${String(e.sleepMarkers.length)} sleep`,
		`${String(e.nonwearMarkers.length)} nonwear`,
		`invalid-night:${String(e.isInvalidNight)}`
	];
	return e.explicitNoNonwear && t.push("no-nonwear"), e.needsConsensus && t.push("needs-consensus"), e.notes.length > 0 && t.push(`notes ${String(e.notes.length)}ch`), t.join(", ");
}
function en(e) {
	return {
		sleep: e.sleepMarkers.map((e) => ({
			onset: e.onsetTimestamp,
			offset: e.offsetTimestamp,
			main: yt(e)
		})),
		nonwear: (e.nonwearMarkers ?? []).map((e) => ({
			start: e.startTimestamp,
			end: e.endTimestamp
		})),
		isInvalidNight: e.isInvalidNight ?? !1
	};
}
async function tn(e, n = t()) {
	if (0 === e.length) return [];
	const r = await n.settleManualNonwearNights(e.map(en));
	if (r.length !== e.length) throw new Error(`The manual-nonwear night rule answered ${String(r.length)} settle(s) for ${String(e.length)} night(s).`);
	return r;
}
function nn(e, t) {
	return 0 === t.removed.length ? e : t.kept.map((t, n) => ({
		...e[t],
		markerIndex: n + 1
	}));
}
async function rn(e, t) {
	const n = Zt(e), r = e.flatMap((e, t) => {
		const r = e.payload, a = n[t]?.state;
		return "session_start" === e.action && null != r && "boolean" != typeof r.manualNonwearInSleep && void 0 !== a && Array.isArray(r.sleepMarkers) && Array.isArray(r.nonwearMarkers) && r.sleepMarkers.length === a.sleepMarkers.length && r.nonwearMarkers.length === a.nonwearMarkers.length ? [t] : [];
	});
	if (0 === r.length) return n;
	const a = await async function(e, t) {
		return (await tn(e, t)).map((e) => e.removed.length > 0);
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
	}), Zt(o);
}
function an(e) {
	return null === e ? E : e;
}
function on(e) {
	return null == e ? k : e;
}
function sn(e) {
	return "__legacy_dr__" === e ? null : e;
}
function ln(e) {
	return {
		...e,
		algorithm: (t = e.algorithm, "__legacy__" === t ? null : t),
		detectionRule: sn(e.detectionRule)
	};
	var t;
}
function cn(e) {
	const t = (e) => Array.isArray(e) ? e.map(t) : e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, n]) => [e, t(n)])) : e;
	return JSON.stringify(t(e));
}
function un(e, { date: t, username: n }, r, a) {
	const o = e.filter((e) => e.date === t && e.username === n);
	if (void 0 !== r) {
		const e = an(r), t = on(a), n = (e, t) => o.find((n) => n.algorithm === e && n.detectionRule === t);
		return n(e, t) ?? ("__legacy_dr__" !== t ? n(e, "__legacy_dr__") : void 0) ?? (null !== r ? n("__legacy__", "__legacy_dr__") : void 0);
	}
	return o.reduce((e, t) => !e || (t.id ?? 0) < (e.id ?? 0) ? t : e, void 0);
}
function dn(e, t, n, r) {
	return r.transaction("r", r.markers, async () => un(await r.markers.where("[fileId+date+username]").equals([
		e.fileId,
		e.date,
		e.username
	]).toArray(), e, t, n));
}
async function pn(e, t, n, r, a, o = le()) {
	const s = await dn({
		fileId: e,
		date: t,
		username: n
	}, r, a, o);
	return s ? ln(s) : void 0;
}
const mn = [
	"manualNonwearInSleep",
	"periodMetrics",
	"syncStatus"
];
function fn(e, t, n) {
	const r = Object.fromEntries(mn.filter((e) => e in t).map((e) => [e, t[e]]));
	return n.markers.update(e, r);
}
async function gn(e, t = le(), n, r) {
	const a = t;
	await pe(a, [a.markers], async () => {
		if (n) {
			const t = await a.markers.get(e);
			if (!t || cn(ln(t)) !== cn(n)) return;
		}
		await fn(e, { syncStatus: "conflict" }, a);
	}, r);
}
function hn(e) {
	return `${re.SCORED_VARIANT_WARM}:${String(e)}`;
}
function wn(e = ne.getState().jobs) {
	if (!se()) return null;
	const t = Object.values(e).reverse().find((e) => e.workspaceId === le().name && e.kind === re.SCORED_VARIANT_WARM && e.status !== te.DONE && e.status !== te.CANCELLED);
	return t ? {
		fileId: Number(t.key.split(":").at(-1)),
		done: t.done,
		total: t.total,
		...t.status === te.FAILED ? { failed: !0 } : {}
	} : null;
}
function kn(e, t) {
	if (!se() || t && le() !== t) return;
	const n = (t ?? le()).name, r = ne.getState();
	if (!e) return;
	const a = hn(e.fileId), o = `${n}:${a}`;
	r.jobs[o] && !e.failed || r.update(o, {
		id: o,
		workspaceId: n,
		key: a,
		kind: re.SCORED_VARIANT_WARM,
		label: "Scoring variants",
		controller: r.jobs[o]?.controller ?? new AbortController(),
		done: e.done,
		total: e.total,
		status: e.failed ? te.FAILED : te.RUNNING
	});
}
const yn = /* @__PURE__ */ new Set(), vn = /* @__PURE__ */ new WeakMap();
async function _n(e, t) {
	const n = vn.get(e) ?? {
		depth: 0,
		files: /* @__PURE__ */ new Set()
	};
	vn.set(e, n), n.depth++;
	try {
		return await t();
	} finally {
		if (0 === --n.depth) {
			vn.delete(e);
			for (const t of n.files) In(t, e);
		}
	}
}
const Sn = /* @__PURE__ */ new WeakMap();
function In(e, t) {
	const n = vn.get(t);
	if (n) n.files.add(e);
	else for (const r of yn) r(e, t);
}
function Nn(e) {
	return yn.add(e), () => yn.delete(e);
}
const bn = /* @__PURE__ */ new Set();
function Mn(e, t) {
	for (const n of bn) n(e, t);
}
const xn = "scored-variant-warm-backfill-v1", An = `placement-results-backfill-v${String(2)}`, En = "placement-results-backfill-generation-v1", Tn = /* @__PURE__ */ new Set();
function Cn(e, t, n) {
	const r = n ? Sn.get(n) : void 0;
	if (r?.db !== t) for (const a of Tn) a([e], t);
	else r.files.add(e);
}
const Rn = /* @__PURE__ */ new WeakMap();
async function Pn(e, t = le(), n) {
	let r = O.currentTransaction;
	for (; r?.parent;) r = r.parent;
	if (await de(t, [t.projectMeta], async () => {
		const e = await t.projectMeta.get(En);
		await t.projectMeta.put({
			key: En,
			revision: (e?.revision ?? 0) + 1
		}), await t.projectMeta.delete(An);
	}, n), !r || r.db !== t) {
		for (const r of new Set(e)) Cn(r, t, n);
		return;
	}
	let a = Rn.get(r);
	if (!a) {
		a = /* @__PURE__ */ new Set(), Rn.set(r, a);
		const e = a;
		r.idbtrans.addEventListener("complete", () => {
			for (const r of e) Cn(r, t, n);
		}, { once: !0 });
	}
	for (const o of e) a.add(o);
}
var On = class extends Error {
	constructor() {
		super("The recording was deleted; this night was not saved."), this.name = "RecordingDeletedError";
	}
}, Dn = class extends Error {
	constructor() {
		super("Markers changed during rescore or in another tab. Retry keeps the night on screen; reopening the night shows the stored one."), this.name = "NightConflictError";
	}
};
function jn(e) {
	return {
		contentHash: e?.contentHash ?? null,
		needsConsensus: e?.needsConsensus ?? !1
	};
}
function $n(e, t) {
	const n = jn(e);
	return n.contentHash === t.contentHash && n.needsConsensus === t.needsConsensus;
}
const Hn = (e, t) => JSON.stringify([e, t]), Fn = /* @__PURE__ */ new Map();
function Ln(e, t) {
	const n = ((e) => Hn(e.store, e.fileId) + JSON.stringify([
		e.actor,
		e.date,
		an(e.algorithm),
		on(e.detectionRule)
	]))(e);
	return function(e, t, n) {
		const r = e.length > 0 ? Promise.all(e).then(n) : n(), a = r.then(() => {}, () => {});
		for (const o of t) Fn.set(o, a), a.then(() => {
			Fn.get(o) === a && Fn.delete(o);
		});
		return r;
	}([Fn.get(n), Fn.get((r = e.store, a = e.fileId, `${Hn(r, a)}*`))].filter((e) => void 0 !== e), [n], t);
	var r, a;
}
function Vn(e, t) {
	return e?.name ?? `${t?.sourceKey ?? "server"}:${t?.workspaceId ?? ""}`;
}
function Kn(e) {
	Wn(e.binding, e, e);
}
function Wn(e, t, n) {
	ge.recordNightEdit(e, {
		fileId: t.fileId,
		analysisDate: t.date,
		action: n.action,
		...void 0 === n.payload ? {} : { payload: n.payload }
	});
}
function Gn(e) {
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
const Un = (e, t) => {
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
			...At(r.sleepPeriodDetection, r.sleepPeriodDetectionSummary)
		})
	};
	var r;
};
function Jn(e, t) {
	if (null === t) return O.Promise.resolve();
	const n = t.binding;
	if (!n) throw new Error("A local night write requires the audit binding captured at its act.");
	const r = (t) => ({
		fileId: e.fileId,
		analysisDate: e.date,
		action: t.action,
		...void 0 === t.payload ? {} : { payload: t.payload }
	}), a = Un(e, t);
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
function Bn(e, t, n) {
	return we([
		e.markers,
		e.scoringSessions,
		e.markerProvenance,
		e.actiwareFileData,
		e.auditLog,
		e.files
	], t, e, n);
}
function qn(e) {
	if (Array.isArray(e)) return e.map(qn);
	if (e && "object" == typeof e) {
		const t = {};
		for (const [n, r] of Object.entries(e)) null != r && (t[n] = qn(r));
		return t;
	}
	return e;
}
const zn = (e, t) => ({
	store: Vn(e),
	actor: t.username,
	fileId: t.fileId,
	date: t.date,
	algorithm: t.algorithm,
	detectionRule: t.detectionRule
});
function Yn(e, t, n, r) {
	return Ln(zn(t, e), async () => {
		const a = await pn(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), o = await n(a ? ln(a) : null);
		if (!o) return null;
		null !== r && await ge.settleWrites();
		const s = "save" === o.kind ? await Zn(o.input, t, r) : await async function(e, t, n, r) {
			const { fileId: a, date: o, username: s, algorithm: i, detectionRule: l, expected: c } = e;
			let u = !1;
			const d = await Bn(t, async () => {
				if (void 0 === await t.files.get(a)) throw new On();
				const d = await dn(e, i, l, t);
				if (void 0 !== c && !$n(d, c)) return d?.id && await gn(d.id, t, d), u = !0, {
					fileId: a,
					date: o,
					username: s,
					previous: null,
					committed: null,
					changed: !1
				};
				if (!d) {
					const e = {
						fileId: a,
						date: o,
						username: s,
						previous: null,
						committed: null,
						changed: !1
					};
					return await Jn(e, n), e;
				}
				const p = ln(d), m = [d];
				await ke({
					op: "markers_delete",
					fileId: a,
					username: s,
					payload: {
						kind: "night_unscored",
						date: o,
						prevContentHash: m[0]?.contentHash
					}
				});
				const f = new Set(m.flatMap((e) => void 0 === e.id ? [] : [e.id]));
				await t.markers.bulkDelete([...f]);
				const g = await t.markerProvenance.get(a);
				g && await t.markerProvenance.put({
					fileId: a,
					rows: g.rows.filter((e) => !f.has(e.id))
				}), m.some((e) => "auto_score" === e.username || C({
					...e,
					id: e.id
				}).nonwearDecided) && await Pn([a], t, r);
				const h = {
					fileId: a,
					date: o,
					username: s,
					previous: p,
					committed: null,
					changed: null !== Gn(p)
				};
				return await Jn(h, n), h;
			}, r);
			if (u) throw new Dn();
			if (null !== d.previous && "auto_score" !== s) {
				const { scheduleGgirRecompute: e } = await import("./local-export-worker-YOMtrw9B.js").then((e) => e.t);
				e(a, s, t, r);
			}
			return d;
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
function Xn(e, t, n) {
	return Ln(zn(t, {
		fileId: e.fileId,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm ?? null,
		detectionRule: e.detectionRule ?? null
	}), async () => {
		null !== n && await ge.settleWrites();
		const r = await Zn(e, t, n);
		return {
			record: r.committed,
			changed: r.changed
		};
	});
}
async function Zn(e, t, n) {
	const { fileId: r, date: a, username: o, sleepMarkers: s, nonwearMarkers: i, isInvalidNight: l, notes: c, explicitNoNonwear: u, needsConsensus: d, algorithm: p = null, scoringContext: m, detectionRule: f = null, periodGuider: g = null, sleepPeriodDetectionConfig: h = null, algorithmVersion: w = null } = e, k = null !== p ? await O.waitFor(async function(e) {
		let t;
		if (e.extraParams) try {
			t = JSON.parse(e.extraParams);
		} catch {
			t = e.extraParams;
		}
		const n = qn({
			algorithm: e.algorithm,
			detector: e.detector,
			guider: e.guider,
			sleep_period_detection_config: e.sleepPeriodDetectionConfig,
			scorer_version: e.scorerVersion,
			extra_params: t
		});
		return ue(cn(n));
	}({
		algorithm: p,
		detector: f,
		guider: g,
		sleepPeriodDetectionConfig: h,
		scorerVersion: w
	})) : null, y = m ?? (null !== p && null !== k ? {
		appVersion: "local",
		algorithmVersions: { [p]: w ?? "1" },
		paramsHash: k,
		stampedAt: (/* @__PURE__ */ new Date()).toISOString()
	} : void 0), v = null !== p && null !== k ? await O.waitFor(ue(cn(qn({
		fileId: r,
		date: a,
		username: o,
		algorithm: p,
		scorerVersion: w,
		detector: f,
		guider: g,
		sleepPeriodDetection: h,
		params: null,
		parameterSetHash: k
	})))) : null, _ = an(p), I = on(f), N = e.restoredFromBackup;
	let b = !1;
	const M = await Bn(t, async (m) => {
		const M = await t.files.get(r);
		if (void 0 === M) throw new On();
		const x = await dn({
			fileId: r,
			date: a,
			username: o
		}, p, f, t), A = x?.algorithm === _ && x.detectionRule === I ? x : void 0, E = x ? ln(x) : void 0;
		if (N && A && A.lastModifiedAt >= N.lastModifiedAt) return {
			fileId: r,
			date: a,
			username: o,
			previous: E ?? null,
			committed: ln(A),
			changed: !1
		};
		if (void 0 !== e.expected) {
			if (!$n(E, e.expected)) return x?.id && await gn(x.id, t, x), b = !0, {
				fileId: r,
				date: a,
				username: o,
				previous: E ?? null,
				committed: E ?? null,
				changed: !1
			};
			if (!0 !== e.guardHashOnly && E?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
		}
		const T = N ? A : E, R = i ?? T?.nonwearMarkers ?? [], P = (l ?? T?.isInvalidNight ?? !1) || void 0 === N && Mt(M, E ?? { sleepMarkers: [] }, { sleepMarkers: s }), D = u ?? T?.explicitNoNonwear ?? !1, j = d ?? T?.needsConsensus ?? !1, $ = 0 === s.length || 0 === R.length ? null : (await O.waitFor(tn([{
			sleepMarkers: s,
			nonwearMarkers: R,
			isInvalidNight: P
		}])))[0] ?? null, F = $ ? nn(s, $) : s, L = P || ($?.invalidates ?? !1);
		if (L && F.some((e) => e.markerType === S.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
		const V = await O.waitFor(ce({
			sleepMarkers: F,
			nonwearMarkers: R,
			isInvalidNight: L,
			explicitNoNonwear: D,
			notes: c
		})), K = null !== p ? await async function(e, t, n) {
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
			const c = H(), u = (/* @__PURE__ */ new Date()).toISOString();
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
				startedAt: u,
				syncStatus: "pending",
				contentHash: n.contentHash,
				lastModifiedAt: u
			}), c;
		}(m, {
			fileId: r,
			date: a,
			username: o,
			algorithm: p
		}, {
			scorerVersion: w,
			detector: f,
			guider: g,
			sleepPeriodDetectionConfig: h,
			params: null,
			parameterSetHash: k,
			contentHash: v
		}) : null, W = {
			fileId: r,
			date: a,
			username: o,
			algorithm: _,
			detectionRule: I,
			periodGuider: g,
			sleepPeriodDetectionConfig: h,
			algorithmVersion: w,
			scoringSessionId: K,
			manualNonwearInSleep: !1,
			sleepMarkers: F,
			nonwearMarkers: R,
			isInvalidNight: L,
			explicitNoNonwear: D,
			needsConsensus: j,
			notes: c,
			contentHash: V,
			syncStatus: "pending",
			lastModifiedAt: N?.lastModifiedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
			...void 0 !== y ? { scoringContext: y } : {},
			...void 0 !== N ? { restoredFromBackup: N.restoreId } : {}
		}, G = {
			fileId: r,
			date: a,
			username: o,
			previous: E ?? null,
			committed: W,
			changed: Gn(E) !== Gn(W)
		};
		await Jn(G, n), A && JSON.stringify(A.sleepMarkers) === JSON.stringify(F) || await t.actiwareFileData.where("fileId").equals(r).modify({ actiwareStatisticsNeedsRecompute: !0 }), await ke({
			op: "markers_put",
			fileId: r,
			username: o,
			...void 0 !== N ? { restoredFromBackup: N.restoreId } : {},
			payload: {
				date: a,
				sleepMarkers: F,
				nonwearMarkers: R,
				isInvalidNight: L,
				explicitNoNonwear: D,
				notes: c,
				needsConsensus: j,
				sleepPeriodDetectionConfig: h,
				contentHash: V,
				prevContentHash: A?.contentHash
			}
		});
		const U = N ? A : x, J = U?.id ? await (async (e) => (await t.markers.update(e, (e) => {
			Object.assign(e, W), void 0 === N && delete e.restoredFromBackup;
		}), e))(U.id) : await t.markers.add(W), B = await t.markerProvenance.get(r), q = C({
			...W,
			id: J
		}), z = B?.rows.find((e) => e.id === J);
		return ("auto_score" === q.username || q.nonwearDecided !== (z?.nonwearDecided ?? !1) || q.nonwearDecided && q.nonwearSpans !== z?.nonwearSpans) && await Pn([r], t, e.signal), await t.markerProvenance.put({
			fileId: r,
			rows: [...(B?.rows ?? []).filter((e) => e.id !== J), q]
		}), G;
	}, e.signal);
	if (b) throw new Dn();
	return M;
}
async function Qn(e, t, n) {
	return { changed: (await Yn(e, t, () => Promise.resolve({
		kind: "unscore",
		expected: e.expected
	}), n)).changed };
}
function er(e, t, n) {
	return fn(e, { periodMetrics: t }, n);
}
const tr = Symbol("marker-id");
function nr(e) {
	const t = e;
	return t[tr] ??= H();
}
function rr(e, t, n = !1) {
	return {
		...t ?? structuredClone(e),
		[tr]: n ? H() : nr(e)
	};
}
function ar(e, t) {
	const n = (e) => he(Object.fromEntries(Object.entries(e).filter(([e]) => "markerIndex" !== e))), r = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = n(o), t = r.get(e) ?? [];
		t.push(o), r.set(e, t);
	}
	const a = /* @__PURE__ */ new Map();
	return t.map((e) => {
		const t = n(e), o = a.get(t) ?? 0;
		return a.set(t, o + 1), void 0 !== e[tr] ? e : {
			...e,
			[tr]: r.get(t)?.[o]?.[tr] ?? H()
		};
	});
}
function or(e, t) {
	return {
		...t,
		...void 0 !== t.sleepMarkers && t.sleepMarkers !== e.sleepMarkers ? { sleepMarkers: ar(e.sleepMarkers, t.sleepMarkers) } : {},
		...void 0 !== t.nonwearMarkers && t.nonwearMarkers !== e.nonwearMarkers ? { nonwearMarkers: ar(e.nonwearMarkers, t.nonwearMarkers) } : {}
	};
}
function sr() {
	const e = oe();
	return e && ie.getState().getWorkspace(e), function(e) {
		try {
			return localStorage.getItem(e);
		} catch {
			return null;
		}
	}("__e2eLocalMode"), "local";
}
let ir = null;
function lr(e, t, n) {
	return !ir || ir.scope.workspaceId === n.workspaceId && ir.scope.actor === n.actor && ir.scope.studyId === n.studyId && ir.scope.sourceKey === n.sourceKey || (ir = null), null !== ir && ir.fileId === e && ir.date === t ? ir : null;
}
function cr(e) {
	const t = /* @__PURE__ */ new Date(1e3 * e);
	return `${String(t.getUTCHours()).padStart(2, "0")}:${String(t.getUTCMinutes()).padStart(2, "0")}`;
}
function ur(e) {
	return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " ");
}
var dr = e({
	bindShown: () => Lr,
	buildNightData: () => yr,
	ensureOpened: () => Gr,
	fileSessionsSettled: () => ta,
	flushCurrentNight: () => Br,
	flushSession: () => qr,
	isHeldOutbox: () => kr,
	leavesNightUnscored: () => vr,
	newNightContext: () => gr,
	nightSessions: () => Yr,
	nightShown: () => Sr,
	nightTokenBrand: () => pr,
	outboxKey: () => Hr,
	sameNight: () => Fr,
	sessionToken: () => Kr,
	setNightScopeChanging: () => wr,
	withoutUntouchedProposal: () => _r
});
const pr = Symbol("night-session"), mr = Object.keys({
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
	placementRejectionReason: !0,
	nightRuleReceipt: !0,
	_isDragTransaction: !0,
	_dragSnapshotForAudit: !0,
	_dataRange: !0,
	_viewWindow: !0
});
function fr(e) {
	return Object.fromEntries(mr.map((t) => [t, e[t]]));
}
function gr(e, t = e.getState()) {
	return {
		...t,
		...fr(e.getInitialState()),
		...jr(),
		isDirty: !1,
		isSaving: !1,
		saveError: null,
		nightLoading: !0
	};
}
let hr = 0;
function wr(e) {
	hr += e ? 1 : -1;
}
function kr(e) {
	return Cr === e.key;
}
function yr(e) {
	return {
		sleepMarkers: e.sleepMarkers.map((e) => rr(e, {
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
		nonwearMarkers: e.nonwearMarkers.map((e) => rr(e, {
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
function vr(e, t, n, r) {
	return !(!e || e.fileId !== t || e.date !== n || r.isInvalidNight || r.explicitNoNonwear || r.needsConsensus || r.notes || (r.nonwearMarkers?.length ?? 0) > 0 || 0 !== _r(e, t, n, r).sleepMarkers.length);
}
function _r(e, t, n, r) {
	return K(e, t, n, r.sleepMarkers) ? {
		...r,
		sleepMarkers: e?.authoredSleepMarkers ?? []
	} : r;
}
function Sr(e, t) {
	const n = t.availableDates[t.currentDateIndex];
	if (null === t.currentFileId || !n) return !1;
	const r = function(e) {
		const { username: t, selectedStudyId: n } = e;
		return {
			sourceKey: sr(),
			workspaceId: oe(),
			actor: t || "anonymous",
			studyId: n
		};
	}(t), a = t.nightLoading ? null : lr(t.currentFileId, n, r);
	return Fr(e, {
		...e,
		scope: r,
		db: "local" === r.sourceKey && se() ? le() : null,
		fileId: t.currentFileId,
		date: n,
		algorithm: a ? a.algorithm : e.algorithm,
		detectionRule: a ? a.detectionRule : e.detectionRule
	});
}
function Ir(e, t, n) {
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
function Nr(e, t = e.proposalNight ?? e.acceptingProposal) {
	return _r(t, e.currentFileId ?? -1, e.availableDates[e.currentDateIndex] ?? "", yr(e));
}
function br(e, t, n) {
	const r = n.proposalNight ?? (n.acceptingProposal !== t ? n.acceptingProposal : null), a = Nr(n, r);
	return void 0 !== e.dataSource?.unscoreNight && vr(r, e.fileId, e.date, a) ? { kind: "unscore" } : {
		kind: "save",
		data: a
	};
}
async function Mr(e, t, n, r) {
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
					expected: o?.expected ?? jn(n),
					guardHashOnly: !0
				}
			} : null;
		} : i;
		"save" === t.kind && r.push(...t.edits ?? []);
		const c = "save" === t.kind ? t.settings ?? e.settings : e.settings, u = await a.saveMarkers(e.fileId, e.date, e.scope.actor, l, e.algorithm, e.detectionRule, c, o, n), d = i;
		if (!d) return {
			status: "dropped",
			reason: "The operation made no marker changes."
		};
		s = u ?? {
			isInvalidNight: !1,
			explicitNoNonwear: !1,
			needsConsensus: !1,
			...d
		};
	}
	return "local" !== e.scope.sourceKey && function(e, t, n) {
		(function(e, t) {
			for (const r of t?.carried ?? []) Wn(null, e, r);
			for (const r of t?.events?.(e.committed) ?? []) Wn(null, e, r);
			const n = Un(e, t);
			n && Wn(null, e, n);
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
const xr = 3, Ar = /* @__PURE__ */ new Map(), Er = /* @__PURE__ */ new WeakMap();
let Tr = 0, Cr = null, Rr = 0;
const Pr = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakSet(), Dr = /* @__PURE__ */ new WeakMap(), jr = () => ({
	sleepMarkers: [],
	nonwearMarkers: [],
	isInvalidNight: !1,
	explicitNoNonwear: !1,
	needsConsensus: !1,
	notes: ""
});
function $r(e) {
	return {
		sleepMarkers: e.sleepMarkers,
		nonwearMarkers: e.nonwearMarkers ?? [],
		isInvalidNight: e.isInvalidNight ?? !1,
		explicitNoNonwear: e.explicitNoNonwear ?? !1,
		needsConsensus: e.needsConsensus ?? !1,
		notes: e.notes
	};
}
function Hr(e) {
	return e.db && !Er.has(e.db) && Er.set(e.db, Tr += 1), JSON.stringify([
		e.db ? Er.get(e.db) : 0,
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
function Fr(e, t) {
	return null !== e && null !== t && Hr(e) === Hr(t);
}
function Lr(e) {
	if (q(e.currentFileSourceType)) return null;
	return null;
}
function Vr(e) {
	const t = Lr(e);
	return t ? Ar.get(Hr(t)) ?? null : null;
}
function Kr(e, t, n = e.binding) {
	const r = {
		[pr]: !0,
		generation: e.generation,
		fileId: n.fileId,
		date: n.date,
		identity: n,
		context: t
	};
	return Pr.set(r, e), Cr === e.key && Rr === e.generation && Sr(n, e.store.getState()) && !e.store.getState().nightLoading && Or.add(r), r;
}
function Wr(e, t) {
	if (void 0 !== t && (e.context = or(e.context, {
		...e.context,
		lastSavedAt: Date.now(),
		saveReceipt: {
			fileId: e.binding.fileId,
			date: e.binding.date,
			text: t
		}
	})), Vr(e.store.getState()) !== e) return;
	const n = e.log[0]?.failure;
	e.store.setState({
		isDirty: e.log.some((e) => null !== e.failure || null != e.prepared?.mutation) || e.drags.size > 0,
		isSaving: null !== e.runner && !n,
		saveError: n?.message ?? null,
		canDiscardNightChanges: n instanceof Dn || n instanceof On,
		placementRejected: e.context.placementRejected,
		placementRejectionReason: e.context.placementRejectionReason,
		lastSavedAt: e.context.lastSavedAt,
		saveReceipt: e.context.saveReceipt
	});
}
async function Gr(e, t = e.binding) {
	var n;
	e.opened || (await (n = {
		fileId: t.fileId,
		date: t.date,
		actor: t.scope.actor,
		store: Vn(t.db, t.scope),
		algorithm: t.algorithm,
		detectionRule: t.detectionRule
	}, Ln(n, () => Promise.resolve())), function(e, t) {
		const n = e.context, r = t ? $r(t) : jr(), a = jn(t), o = void 0 !== e.saved && JSON.stringify(jn(e.saved)) === JSON.stringify(a) && (null !== a.contentHash || he(e.saved ? $r(e.saved) : null) === he(t ? r : null));
		void 0 === e.saved || o || (e.context = or(n, gr(e.store, n))), e.saved = t, e.view = or(n, {
			...r,
			...o ? {
				sleepMarkers: n.sleepMarkers,
				nonwearMarkers: n.nonwearMarkers
			} : {}
		});
		const s = e.context, i = !r.isInvalidNight && he(r.sleepMarkers) === he(s.proposalNight?.authoredSleepMarkers ?? []) && K(s.proposalNight, e.binding.fileId, e.binding.date, s.sleepMarkers);
		e.context = or(s, {
			...s,
			...e.view,
			sleepMarkers: i ? s.sleepMarkers : e.view.sleepMarkers,
			proposalNight: i ? s.proposalNight : null
		}), e.opened = !0;
	}(e, await t.dataSource.loadMarkers(t.fileId, t.date, t.scope.actor, t.algorithm, t.detectionRule, t.db ?? void 0)), function(e, t) {
		if (!kr(e) || !e.shownOpen?.()) return;
		if (!e.opened) return void Wr(e);
		const n = e.store, r = n.getState(), a = Kr(e, r, t);
		if (e.identify?.(), o = {
			scope: t.scope,
			db: t.db,
			fileId: t.fileId,
			date: t.date,
			algorithm: t.algorithm,
			detectionRule: t.detectionRule,
			options: t.settings
		}, ir = o, !Yr.owns(a, r)) return;
		var o;
		const s = e.view, i = e.context;
		r.showStoredNight(a, t.fileId, t.date, {
			...s,
			sleepMarkers: i.sleepMarkers,
			view: fr(i)
		}), e.context = or(e.context, n.getState()), Wr(e);
	}(e, t));
}
function Ur(e, t, n = e.binding) {
	if (void 0 === e.saved) throw new Error("The night has not opened; no write has a baseline.");
	const r = jn(e.saved);
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
function Jr(e) {
	if (e.runner || e.recovering || !e.log.length || e.log[0].failure) return;
	let t;
	e.runner = new Promise((e) => {
		t = e;
	}), (async () => {
		for (; e.log.length && !e.log[0].failure;) {
			const t = e.log[0], r = Kr(e, t.token.context, t.token.identity);
			Dr.set(r, {
				slot: t,
				run: (e) => e()
			}), Wr(e);
			try {
				if (t.prepared ??= await t.prepare(r), t.failure) throw t.prepared = null, t.failure;
				Dr.delete(r);
				const n = t.prepared;
				let a;
				if (n.refusal) a = {
					status: "dropped",
					reason: n.refusal
				};
				else if (n.mutation) {
					if (!t.audit) throw new Error("An internal read cannot write a night.");
					const r = [...n.carried];
					a = await Mr(t.token.identity, Ur(e, n.mutation, t.token.identity), {
						...t.audit,
						carried: r
					}, r);
				} else a = {
					status: "committed",
					night: e.saved ?? null
				};
				const o = e.saved ?? null;
				"committed" === a.status && n.mutation && (e.saved = a.night, n.accepting && (e.context = or(e.context, {
					...e.context,
					acceptingProposal: null
				}), e.store.getState().settleProposalAcceptance(n.accepting, !0))), e.log.shift(), "committed" !== a.status || !Yr.holds(t.token, e.store.getState()) && Or.has(t.token) || t.options.onCommitted?.(a.night), t.settle(a), Wr(e, "committed" === a.status && n.mutation && a.night ? ea(o, a.night, e.binding.date, n.undone) : void 0);
			} catch (n) {
				Dr.delete(r), t.failure = n instanceof Error ? n : new Error(String(n)), t.prepared?.mutation || (t.prepared = null), t.settle({
					status: "dropped",
					reason: `${t.failure.message} Return to the Sleep page and use Retry.`
				}), t.failure instanceof Dn || t.failure instanceof On || !(t.retries < xr) || (t.retries += 1, t.retryTimer = setTimeout(() => {
					t.retryTimer = null, t.failure = null, Jr(e);
				}, 2 ** t.retries * 1e3)), Wr(e);
			}
		}
		e.runner = null, Wr(e), t();
	})();
}
async function Br(e) {
	const t = Vr(e.getState());
	return !t || qr(t);
}
async function qr(e) {
	return Jr(e), await zr(e), 0 === e.log.length;
}
async function zr(e) {
	for (; e.runner;) await e.runner;
}
const Yr = {
	executor: (e) => Dr.get(e)?.run ?? null,
	fail: (e, t) => {
		const n = Dr.get(e)?.slot;
		n && (n.failure = t instanceof Error ? t : new Error(String(t)));
	},
	holds: (e, t = Pr.get(e)?.store.getState() ?? e.context) => !t.nightLoading && Yr.owns(e, t),
	owns: (e, t = Pr.get(e)?.store.getState() ?? e.context) => {
		const n = Pr.get(e);
		return void 0 !== n && n.opened && Cr === n.key && Rr === e.generation && n.generation === e.generation && Sr(n.binding, t);
	},
	night: (e) => Pr.get(e)?.view ?? null,
	context: (e) => Pr.get(e)?.context ?? e.context,
	updateContext: (e, t) => {
		const n = Pr.get(e);
		n && (n.context = or(n.context ?? t, t));
	},
	write: (e, t, n, r) => {
		const a = Pr.get(e), o = Dr.get(e);
		if (!a || !o) throw new Error("A night write requires its proposal's executor.");
		a.view = or(a.context ?? e.context, t), r && (a.context = or(a.context ?? r, {
			...r,
			...a.view
		})), o.slot.carried.push(...n);
	},
	enqueue: (e, t, n = !1, r) => {
		const a = Pr.get(e);
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
				audit: r.readOnly ? null : Ir(t.identity, r.acts, s),
				baseline: null,
				prepared: null,
				failure: null,
				carried: s,
				retries: 0,
				retryTimer: null
			};
			return e.log.push(i), Jr(e), Wr(e), i;
		}(a, e, async (r) => {
			await Gr(a, e.identity);
			const i = Yr.context(r);
			Dr.get(r).slot.baseline ??= $r(Nr(i));
			const l = i._editGeneration;
			return s = await t(r), n || Yr.context(r)._editGeneration === l ? {
				mutation: null,
				accepting: null,
				carried: [],
				undone: !1
			} : function(e, t, n = e.store) {
				const r = Yr.holds(t, n.getState()), a = r ? n.getState() : e.context, o = r ? a.acceptingProposal : null;
				return {
					mutation: r ? br(t.identity, o, a) : {
						kind: "save",
						data: e.view
					},
					accepting: o,
					carried: r ? n.takeShownEdits(t.identity) : Dr.get(t).slot.carried,
					undone: a.markerHistoryIndex < a.markerHistory.length - 1
				};
			}(a, r, o);
		}).settled.then((e) => ("dropped" !== e.status || "boolean" != typeof s) && s);
	},
	waiting: (e) => e ? (Pr.get(e)?.log.length ?? 0) > 0 : [...Ar.values()].some((e) => e.log.length > 0),
	setDragging: (e, t) => {
		const n = Pr.get(e);
		t ? n?.drags.add(e) : n?.drags.delete(e);
	},
	scopeChanging: () => hr > 0,
	hasUnsavedWork: () => [...Ar.values()].some((e) => e.log.length > 0 || e.drags.size > 0),
	settled: async () => {
		await Promise.all([...Ar.values()].map(zr));
	}
}, Xr = (e) => null === e ? "--:--" : cr(e);
function Zr(e) {
	return [...e.sleepMarkers.map((e) => ({
		start: e.onsetTimestamp,
		end: e.offsetTimestamp,
		label: e.markerType === S.NAP ? "nap" : "main sleep",
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
function Qr(e, t, n) {
	if (t === n || null === t || null === n) return null;
	const r = Math.abs(n - t);
	return `moved ${e} ${r >= 60 ? `${String(Math.round(r / 60))} min` : `${String(r)} s`} ${n < t ? "earlier" : "later"}`;
}
function ea(e, t, n, r) {
	const a = e ? Zr(e) : [], o = Zr(t), s = (e, t) => e.label === t.label && e.start === t.start && e.end === t.end, i = a.filter((e) => !o.some((t) => s(t, e))), l = o.filter((e) => !a.some((t) => s(e, t))), c = [];
	for (const d of i) {
		const e = l.findIndex((e) => e.label === d.label);
		if (-1 === e) {
			c.push(`deleted ${d.label} ${Xr(d.start)}–${Xr(d.end)}`);
			continue;
		}
		const [t] = l.splice(e, 1);
		if (!t) continue;
		const n = [Qr(d.startName, d.start, t.start), Qr(d.endName, d.end, t.end)].filter((e) => null !== e);
		c.push(n.length > 0 ? n.join(" and ") : `changed ${d.label}`);
	}
	for (const d of l) c.push(`${r ? "restored" : "saved"} ${d.label} ${Xr(d.start)}–${Xr(d.end)}`);
	(e?.isInvalidNight ?? !1) !== t.isInvalidNight && c.push(t.isInvalidNight ? "marked invalid night" : "cleared invalid night"), (e?.explicitNoNonwear ?? !1) !== (t.explicitNoNonwear ?? !1) && c.push(t.explicitNoNonwear ? "confirmed no nonwear" : "cleared no-nonwear"), (e?.needsConsensus ?? !1) !== t.needsConsensus && c.push(t.needsConsensus ? "flagged for consensus" : "unflagged for consensus"), (e?.notes ?? "") !== t.notes && c.push("saved note");
	const u = c.length > 0 ? c.join("; ") : "nothing changed";
	return r ? `Undid — ${u} on ${n}` : `${u.charAt(0).toUpperCase()}${u.slice(1)} on ${n}`;
}
async function ta(e, t, n) {
	await Promise.all([...Ar.values()].filter((r) => r.binding.db === e && r.binding.fileId === t && (!n || r.binding.date === n.date && r.binding.scope.actor === n.username)).map(zr));
}
export { He as $, un as A, Mt as B, wn as C, hn as D, Nn as E, Jt as F, It as G, bt as H, Qt as I, _t as J, Nt as K, Pt as L, rn as M, tn as N, kn as O, nn as P, Oe as Q, Rt as R, _n as S, Mn as T, yt as U, xt as V, vt as W, Ae as X, kt as Y, Me as Z, Xn as _, Yr as a, Pn as b, _r as c, rr as d, Pe as et, nr as f, Kn as g, jn as h, vr as i, ln as j, pn as k, cr as l, er as m, ta as n, Ze as nt, dr as o, or as p, St as q, Br as r, ye as rt, Fr as s, Lr as t, Ie as tt, ur as u, Qn as v, In as w, xn as x, Yn as y, Et as z };
