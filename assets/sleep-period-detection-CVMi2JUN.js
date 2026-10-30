import { i as e } from "./workers-C8Yiwkui.js";
import { $ as n, A as o, B as t, F as a, G as s, I as i, J as r, K as l, L as c, M as u, N as p, O as m, P as d, Q as f, R as _, U as h, W as S, Wt as g, X as E, Yt as b, Z as y, Zt as A, _t as v, at as O, ct as N, dt as w, en as T, et as I, gt as R, ht as C, j as M, k as L, lt as P, nn as k, nt as x, ot as U, pn as B, q as D, st as G, tt as $, ut as F, z as V } from "./schema-DyCcUf1Q.js";
import { F as K, P as H, j as W, v as Y } from "./workspace-db-n33IRPWq.js";
const J = /* @__PURE__ */ new WeakSet();
function Z(e) {
	if (null !== e && "object" == typeof e && !Object.isFrozen(e)) {
		Object.freeze(e);
		for (const n of Object.values(e)) Z(n);
	}
	return e;
}
function z(e) {
	return J.add(Z(e)), e;
}
function Q(e) {
	if (null === e || "object" != typeof e || !J.has(e)) return null;
	const n = e, o = (t = n.id, null === N(t) ? null : t);
	var t;
	if (null === o) return null;
	const a = Object.fromEntries(Object.entries(n).filter(([e]) => !E.excludedFieldNames.includes(e)));
	return {
		cellId: o,
		implementationVersion: n.implementationVersion,
		configHash: we(a)
	};
}
const X = new Map(C.map((e) => [e.id, e.conformance]));
function q(e) {
	return X.get(e) ?? "conformant";
}
const ee = function() {
	const e = /* @__PURE__ */ new Map();
	for (const n of C) {
		if ("sleep_wake" !== n.kind) continue;
		if (!t.includes(n.requiredSignal)) continue;
		if (D.includes(n.execution)) continue;
		const o = n.family, a = e.get(o);
		if (a) {
			if (a.conformance !== n.conformance) throw new Error(`count scorer family ${o} has conflicting conformance across variants: ${a.conformance} vs ${n.conformance}`);
		} else {
			const t = f[o];
			if (void 0 === t) throw new Error(`count scorer ${n.id} lacks a generated planner label`);
			e.set(o, {
				slug: o,
				algorithm: t.algorithmValue,
				label: t.label,
				conformance: n.conformance
			});
		}
	}
	return Array.from(e.values());
}(), ne = function() {
	const e = new Map(ee.map((e) => [e.slug, e])), n = [];
	for (const o of _) {
		const t = e.get(o.methodFamilyId);
		if (!t) throw new Error(`generated provenance contract references absent count family ${o.methodFamilyId}`);
		n.push({
			slug: t.slug,
			algorithm: t.algorithm,
			label: t.label,
			conformance: t.conformance,
			primitive: o.primitiveId,
			implementation: o.implementationVariantId,
			implementationLabel: o.label,
			scoringParameters: o.parameters
		});
	}
	return n;
}(), oe = d, te = S, ae = s, se = Object.fromEntries(l.map((e) => [e, 0])), ie = Object.fromEntries(U.map((e) => [e.value, 0])), re = G;
function le(e = {}) {
	const n = new Set(e.includeFamilies ?? l), t = e.epochSeconds ?? te, a = new Set(e.excludeHasibAlgorithms ?? []), s = e.implementationVersion ?? ae, i = [], c = [];
	if (n.has("count_hasib")) {
		for (const e of ee) if (a.has(e.slug)) i.push({
			id: P("count_skip_entry", { method_family: e.slug }),
			reason: ve("skipped_method_reason", { algorithm_value: e.algorithm })
		});
		else for (const n of Object.keys(oe)) for (const o of oe[n]) for (const a of t) c.push(_e({
			family: e,
			countFamily: n,
			axis: o,
			epochSeconds: a,
			implementationVersion: s
		}));
		for (const e of ne) if (!a.has(e.slug)) for (const n of Object.keys(oe)) for (const o of oe[n]) for (const a of t) c.push(he({
			variant: e,
			countFamily: n,
			axis: o,
			epochSeconds: a,
			implementationVersion: s
		}));
	}
	for (const o of Object.keys(r)) n.has(o) && c.push(Se(o, s));
	if (n.has("lstm")) for (const o of e.lstmModels ?? []) c.push(...ge(o, s));
	(e.includeConsensus ?? !0) && n.has("consensus") && c.push(...function(e, n) {
		const t = [], a = Array.from(new Set(e.filter((e) => Ee(e)).filter((e) => te.includes(e.epochSeconds)).map((e) => e.epochSeconds))).sort((e, n) => e - n);
		for (const s of a) {
			const a = `${String(s)}s`, i = e.filter((e) => Ee(e) && e.epochSeconds === s);
			if (i.length <= 1) continue;
			const { slug: r, label: l } = be(i);
			for (const e of h) t.push(fe({
				id: P("consensus_cell", {
					scope: r,
					strategy: e,
					epoch_seconds: s
				}),
				label: ve("consensus_cell_label", {
					scope_label: l,
					strategy_label: o[e] ?? e,
					suffix: a
				}),
				strategy: e,
				members: i,
				epochSeconds: s,
				implementationVersion: n
			}));
		}
		return t;
	}(c, s));
	const u = function(e) {
		const n = /* @__PURE__ */ new Map(), o = [];
		for (const t of e) {
			const e = n.get(t.id);
			if (e !== t.configHash) {
				if (void 0 !== e) throw new Error(`cube plan holds ${t.id} under two configs (${e}, ${t.configHash})`);
				n.set(t.id, t.configHash), o.push(t);
			}
		}
		return o;
	}(c).map(z);
	return {
		configs: u,
		skipped: i,
		warnings: Ae(u),
		summary: de({
			configs: u,
			skipped: i
		})
	};
}
let ce, ue;
function pe() {
	return ce ??= le({
		includeFamilies: ["count_hasib", "consensus"],
		epochSeconds: [30, 60],
		includeConsensus: !0
	}), ce;
}
function me(e) {
	return ue ??= new Map(pe().configs.map((e) => [e.id, e])), ue.get(e);
}
function de(e) {
	const n = { ...se }, o = { ...ie };
	for (const t of e.configs) n[t.family] += 1, o[t.validationStatus] += 1;
	return {
		total: e.configs.length,
		byFamily: n,
		byValidationStatus: o,
		skipped: e.skipped.length
	};
}
function fe(e) {
	const n = e.implementationVersion ?? ae, o = e.members.map((e) => e.id), t = [...e.members].sort((e, n) => e.id < n.id ? -1 : e.id > n.id ? 1 : 0).map((e) => e.configHash);
	return {
		...ye({
			id: e.id,
			family: m,
			label: e.label,
			algorithm: `consensus:${e.strategy}`,
			outputKind: L,
			epochSeconds: e.epochSeconds,
			input: {
				family: "algorithm_outputs",
				epochSeconds: e.epochSeconds,
				seriesKey: o.join(",")
			},
			parameters: {
				strategy: e.strategy,
				inputConfigIds: o,
				inputConfigHashes: t,
				inputCount: o.length
			},
			implementationVersion: n,
			validationStatus: M,
			defaultIncluded: !0,
			exploratory: !0,
			lineage: o
		}),
		conformance: q("consensus_majority_vote")
	};
}
function _e(e) {
	const n = re(e.countFamily, e.axis, e.epochSeconds), o = F(e.family.slug, e.countFamily, e.axis, e.epochSeconds) ? p : u;
	return {
		...ye({
			id: P("count_cell", {
				method_family: e.family.slug,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: i,
			label: ve("count_cell_label", {
				method_label: e.family.label,
				input_label: Oe(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.family.algorithm,
			outputKind: c,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: n
			},
			parameters: {
				ws3: e.epochSeconds,
				sadehNeishabouriCap300: w(e.family.slug, e.countFamily)
			},
			implementationVersion: e.implementationVersion,
			validationStatus: o,
			defaultIncluded: !0,
			exploratory: o === u,
			lineage: [n]
		}),
		conformance: e.family.conformance
	};
}
function he(e) {
	const n = re(e.countFamily, e.axis, e.epochSeconds);
	return {
		...ye({
			id: P("count_cell", {
				method_family: e.variant.slug,
				implementation_variant: e.variant.implementation,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: i,
			label: ve("count_provenance_cell_label", {
				method_label: e.variant.label,
				implementation_label: e.variant.implementationLabel,
				input_label: Oe(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.variant.algorithm,
			outputKind: c,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: n
			},
			parameters: {
				ws3: e.epochSeconds,
				implementation: e.variant.implementation,
				...e.variant.scoringParameters
			},
			implementationVersion: e.implementationVersion,
			validationStatus: V,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [n]
		}),
		conformance: e.variant.conformance
	};
}
function Se(e, n) {
	const o = r[e];
	if (void 0 === o) throw new Error(`no generated fixed output projection for family ${e}`);
	return {
		...ye({
			id: o.configId,
			family: o.familyId,
			label: o.label,
			algorithm: o.algorithmValue,
			outputKind: o.outputKind,
			epochSeconds: o.epochSeconds,
			input: {
				family: o.inputFamily,
				...void 0 !== o.inputAxis ? { axis: o.inputAxis } : {},
				epochSeconds: o.epochSeconds,
				seriesKey: o.inputSeriesKey
			},
			parameters: { ...o.parameters },
			implementationVersion: n,
			validationStatus: o.validationStatus,
			defaultIncluded: o.defaultIncluded,
			exploratory: o.exploratory,
			lineage: o.lineageIds
		}),
		conformance: q(o.methodBindingId)
	};
}
function ge(e, o) {
	const t = e.thresholdPresets && e.thresholdPresets.length > 0 ? e.thresholdPresets : [I], a = q(e.id);
	return t.map((t) => ({
		...ye({
			id: P("model_cell", {
				model_slug: Ne(e.id),
				preset_slug: Ne(t.id)
			}),
			family: $,
			label: ve("model_cell_label", {
				model_label: e.label,
				preset_label: t.label
			}),
			algorithm: e.id,
			outputKind: x,
			epochSeconds: e.epochSeconds,
			input: {
				family: "lstm_probability",
				epochSeconds: e.epochSeconds,
				seriesKey: `${e.id}:sleep_probability`
			},
			parameters: {
				modelId: e.id,
				thresholdPresetId: t.id,
				threshold: t.threshold
			},
			implementationVersion: o,
			validationStatus: n,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [`lstm:${e.id}`]
		}),
		conformance: a
	}));
}
function Ee(e) {
	return "sleep_wake_epoch" === e.outputKind && "consensus" !== e.family && void 0 === e.parameters.implementation;
}
function be(e) {
	const n = new Set(e.map((e) => e.family));
	if (1 === n.size && n.has("count_hasib")) return {
		slug: `${i}_sleep_wake`,
		label: ve("count_consensus_scope_label", {})
	};
	const o = Array.from(new Set(e.filter((e) => e.family === $).map((e) => "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm).filter((e) => e.length > 0))).sort();
	if (n.has("lstm") && o.length > 0) {
		const e = o.map((e) => Ne(e)).join("_"), t = n.has(i);
		return {
			slug: t ? `${i}_${$}_${e}_sleep_wake` : `${$}_${e}_sleep_wake`,
			label: ve(t ? "count_lstm_consensus_scope_label" : "lstm_consensus_scope_label", { model_ids: o.join(", ") })
		};
	}
	return {
		slug: "all_sleep_wake",
		label: ve("all_consensus_scope_label", {})
	};
}
function ye(e) {
	return {
		...e,
		configHash: we(e)
	};
}
function Ae(e) {
	const n = [];
	return e.some((e) => "count_hasib" === e.family && e.epochSeconds === te[0]) && n.push(ve("count_30_warning", {})), e.some((e) => "lstm" === e.family) || n.push(ve("no_lstm_warning", {})), n;
}
function ve(e, n) {
	const o = y[e];
	if (void 0 === o) throw new Error(`no generated planner message ${e}`);
	return Object.entries(n).reduce((e, [n, o]) => e.replace(`{${n}}`, String(o)), o);
}
function Oe(e, n, o) {
	return a[e].labelTemplate.replace("{axis}", n).replace("{axis_label}", O.axis?.[n] ?? n).replace("{epoch_seconds}", String(o));
}
function Ne(e) {
	return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function we(e) {
	const n = Te(e);
	let o = E.initialValue;
	for (let t = 0; t < n.length; t += 1) o ^= n.charCodeAt(t), o = Math.imul(o, E.prime) >>> 0;
	return o.toString(16).padStart(E.lowercaseHexWidth, "0");
}
function Te(e) {
	return null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map((e) => Te(e)).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [n]) => e.localeCompare(n)).map(([e, n]) => `${JSON.stringify(e)}:${Te(n)}`).join(",")}}`;
}
const Ie = new Map(C.map((e) => [e.id, {
	id: e.id,
	conformance: e.conformance,
	needsModelArtifact: e.needsModelArtifact
}]));
function Re(e) {
	return Ie.get(e)?.conformance ?? null;
}
const Ce = W, Me = pe().configs.map((e) => ({
	value: e.id,
	label: `Tensor: ${e.label}`
})), Le = new Set(R);
function Pe(e) {
	if (!Le.has(e.method)) throw new Error(`STANDARD_ALGORITHM_OPTIONS references '${e.method}', which is not a generated scoring-method contract id.`);
	return {
		value: e.method,
		label: e.label
	};
}
const ke = [
	{
		method: g.SADEH_1994_ACTILIFE,
		label: "Sadeh (1994) ActiLife - Recommended"
	},
	{
		method: g.SADEH_1994_ORIGINAL,
		label: "Sadeh (1994) Original"
	},
	{
		method: g.SADEH_1994_GGIR,
		label: "Sadeh (1994) GGIR / zero-crossing Y"
	},
	{
		method: g.COLE_KRIPKE_1992_ACTILIFE,
		label: "Cole-Kripke (1992) ActiLife"
	},
	{
		method: g.COLE_KRIPKE_1992_ORIGINAL,
		label: "Cole-Kripke (1992) Original"
	},
	{
		method: g.COLE_KRIPKE_1992_GGIR,
		label: "Cole-Kripke (1992) GGIR / zero-crossing Y"
	}
], xe = [{
	method: g.LSTM_SLEEP_WAKE,
	label: "LSTM Sleep/Wake (ONNX spectral)"
}, {
	method: g.VAN_HEES_2015,
	label: "van Hees (2015)"
}], Ue = [
	{
		method: g.UCSD_SCRIPPS_2010,
		label: "UCSD / Scripps (2010)"
	},
	{
		method: g.SAZONOV_2004,
		label: "Sazonov (2004) — provisional"
	},
	{
		method: g.SYED_CNN,
		label: "Syed CNN — needs model"
	},
	{
		method: g.ACTIWARE_SLEEP_WAKE,
		label: "Actiware Sleep/Wake"
	}
].map((e) => {
	return "needs_model" !== Re((n = Pe(e)).value) ? n : {
		...n,
		disabled: !0
	};
	var n;
}), Be = [
	...ke.map(Pe),
	{
		value: Y.TENSOR_MAJORITY_VOTE,
		label: "Tensor majority vote"
	},
	...xe.map(Pe),
	...Ue
], De = [...Be, ...Me], Ge = {
	count: "Count-based sleep/wake",
	window: "Window / HDCZA",
	neural: "Neural",
	experimental: "Experimental (provisional)",
	tensor: "Tensor variants (A/B)"
}, $e = [
	"count",
	"window",
	"neural",
	"experimental",
	"tensor"
], Fe = new Map(C.map((e) => [e.id, e.execution]));
function je(e) {
	if (!Le.has(e)) return "tensor";
	const n = Fe.get(e);
	if ("neural_model" === n) return "neural";
	if ("angle_spt" === n) return "window";
	const o = Re(e);
	return "provisional" === o || "needs_model" === o ? "experimental" : "count";
}
function Ve(e) {
	const n = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = je(o.value), t = n.get(e) ?? [];
		t.push(o), n.set(e, t);
	}
	return $e.flatMap((e) => {
		const o = n.get(e);
		return o ? [{
			label: Ge[e],
			options: o
		}] : [];
	});
}
Ve(Be), Ve(De);
const Ke = Object.fromEntries(v.map((e) => [e.id, {
	onsetN: e.onsetMinConsecutiveSleep,
	offsetN: e.offsetMinConsecutiveMinutes,
	offsetState: e.offsetScanState,
	label: e.label
}])), He = Ke[k.CONSECUTIVE_ONSET3S_OFFSET5S];
function We(e) {
	return Ke[e] ?? He;
}
function Ye(e) {
	return e?.markerType === b.MAIN_SLEEP;
}
function Je(e) {
	return e?.markerType === b.NAP;
}
function Ze(e, n) {
	return n.isInvalidNight && !0 !== n.isInvalidNightImplicit || e.some(Ye) ? b.NAP : b.MAIN_SLEEP;
}
function ze(e) {
	const n = e === b.NAP ? b.NAP : b.MAIN_SLEEP;
	return [n, n === b.MAIN_SLEEP ? b.NAP : n];
}
function Qe(e, n) {
	return Ye(e) || Ye(n) ? b.MAIN_SLEEP : b.NAP;
}
function Xe(e) {
	const n = [], o = [];
	for (const t of e) (Ye(t) ? o : n).push(t);
	return {
		kept: n,
		cleared: o
	};
}
function qe(e, n) {
	const o = "sleep" === e ? Ce.MAX_SLEEP_PERIODS_PER_DAY : Ce.MAX_NONWEAR_PERIODS_PER_DAY;
	return n > o ? `Cannot create more than ${String(o)} ${e} periods per day.` : null;
}
async function en(n) {
	const { sleepMarkers: o, nonwearMarkers: t, isInvalidNight: a } = n, s = qe("sleep", o.length) ?? qe("nonwear", t.length);
	if (s) return s;
	const i = o.filter(Ye).length;
	if (a && i > 0) return "An Invalid night cannot contain main sleep.";
	if (i > 1) return "A night can contain only one main sleep period.";
	if ([...o.map((e) => [e.onsetTimestamp, e.offsetTimestamp]), ...t.map((e) => [e.startTimestamp, e.endTimestamp])].some(([e, n]) => null != e && !Number.isFinite(e) || null != n && !Number.isFinite(n) || null != e && null != n && n <= e)) return "Offset must be after onset, with finite boundaries.";
	const r = o.filter((e) => null != e.onsetTimestamp && null != e.offsetTimestamp);
	return (await Promise.all(r.slice(1).map((n, o) => {
		const t = r.slice(0, o + 1);
		return e().nightIntervalOverlap(n.onsetTimestamp, n.offsetTimestamp, Float64Array.from(t, (e) => e.onsetTimestamp), Float64Array.from(t, (e) => e.offsetTimestamp), new Float64Array(t.length).fill(1));
	}))).some((e) => e.seconds.some((e) => e > 0)) ? "Sleep windows cannot overlap. Move or remove the existing window first." : null;
}
function nn(e) {
	return void 0 !== e?.ggirBundleRevision;
}
function on(e) {
	return nn(e) ? "GGIR results retain their imported proposals; HDCZA replacement is unavailable." : null;
}
function tn(e, n, o) {
	return nn(e) && n.sleepMarkers.some(Ye) && !o.sleepMarkers.some(Ye);
}
function an(e, n) {
	if (n?.isInvalidNight) return { kind: "invalid" };
	const o = n?.sleepMarkers.find(Ye);
	return o ? {
		kind: "scored",
		main: o
	} : {
		kind: n ? "naps/nonwear-only" : "unreviewed",
		window: e
	};
}
v.map(({ id: e, label: n }) => ({
	value: e,
	label: n
})), T.NONE, T.WEBSTER, b.MAIN_SLEEP, b.NAP, A.SMART, A.DIARY, A.HDCZA, A.L5, A.LONGEST_BOUT, A.EVENT_MARKER, A.ACTIWARE_REST_INTERVAL, A.NONE;
const sn = "GGIR nonwear", rn = {
	DIARY: K.diary,
	HDCZA: K.hdcza,
	L5: K.l5,
	SELECTED_SCORER_FIRST_LAST: K.selected_scorer_first_last,
	SELECTED_SCORER_LONGEST_BOUT: K.selected_scorer_longest_bout,
	QUIET_BOUT: K.quiet_bout,
	EVENT_MARKER: K.event_marker,
	ACTIWARE_REST_INTERVAL: K.actiware_rest_interval,
	NONE: K.none
}, ln = {
	USE_SOURCE_A: H.use_source_a,
	USE_SOURCE_B: H.use_source_b,
	INTERSECTION: H.intersection,
	UNION: H.union,
	SOURCE_B_BOUNDED_BY_SOURCE_A: H.source_b_bounded_by_source_a,
	SANITY_CLAMP_SOURCE_B_TO_SOURCE_A: H.sanity_clamp_source_b_to_source_a
}, cn = {
	sourceA: B.sleep_period_detection.source_a,
	sourceB: B.sleep_period_detection.source_b,
	fusionPolicy: B.sleep_period_detection.fusion_policy,
	mergeGapMinutes: B.sleep_period_detection.merge_gap_minutes,
	paddingMinutes: B.sleep_period_detection.padding_minutes,
	minOverlapJaccard: B.sleep_period_detection.min_overlap_jaccard,
	applyNonwearGate: B.sleep_period_detection.apply_nonwear_gate
};
function un(e) {
	const n = cn;
	return e.sourceA === n.sourceA && e.sourceB === n.sourceB && e.fusionPolicy === n.fusionPolicy && e.mergeGapMinutes === n.mergeGapMinutes && e.paddingMinutes === n.paddingMinutes && e.minOverlapJaccard === n.minOverlapJaccard && e.applyNonwearGate === n.applyNonwearGate;
}
const pn = {
	[rn.DIARY]: "Diary",
	[rn.HDCZA]: "HDCZA SPT",
	[rn.L5]: "L5 least active 5h",
	[rn.SELECTED_SCORER_FIRST_LAST]: "Selected scorer first-last sleep",
	[rn.SELECTED_SCORER_LONGEST_BOUT]: "Selected scorer longest sleep bout",
	[rn.QUIET_BOUT]: "Quiet-bout least-active window",
	[rn.EVENT_MARKER]: "Event markers (button presses)",
	[rn.ACTIWARE_REST_INTERVAL]: "Actiware rest interval",
	[rn.NONE]: "None"
}, mn = Object.values(K).map((e) => ({
	value: e,
	label: pn[e]
})), dn = [
	{
		value: ln.USE_SOURCE_A,
		label: "Use source A"
	},
	{
		value: ln.USE_SOURCE_B,
		label: "Use source B"
	},
	{
		value: ln.INTERSECTION,
		label: "A intersect B"
	},
	{
		value: ln.UNION,
		label: "A union B"
	},
	{
		value: ln.SOURCE_B_BOUNDED_BY_SOURCE_A,
		label: "B bounded by A"
	},
	{
		value: ln.SANITY_CLAMP_SOURCE_B_TO_SOURCE_A,
		label: "Use B, clamp to A if mismatch"
	}
];
function fn(e) {
	return mn.find((n) => n.value === e)?.label ?? e;
}
function _n(e) {
	const n = hn(e), o = n.applyNonwearGate ? "nonwear gate on" : "nonwear gate off";
	return `${fn(n.sourceA)} + ${fn(n.sourceB)}; ${function(e) {
		return dn.find((n) => n.value === e)?.label ?? e;
	}(n.fusionPolicy)}; ${o}`;
}
function hn(e) {
	const n = e ?? {};
	return {
		...cn,
		sourceA: n.sourceA ?? n.source_a ?? cn.sourceA,
		sourceB: n.sourceB ?? n.source_b ?? cn.sourceB,
		fusionPolicy: n.fusionPolicy ?? n.fusion_policy ?? cn.fusionPolicy,
		mergeGapMinutes: n.mergeGapMinutes ?? n.merge_gap_minutes ?? cn.mergeGapMinutes,
		paddingMinutes: n.paddingMinutes ?? n.padding_minutes ?? cn.paddingMinutes,
		minOverlapJaccard: n.minOverlapJaccard ?? n.min_overlap_jaccard ?? cn.minOverlapJaccard,
		applyNonwearGate: n.applyNonwearGate ?? n.apply_nonwear_gate ?? cn.applyNonwearGate
	};
}
function Sn(e) {
	const n = hn(e);
	return {
		source_a: n.sourceA,
		source_b: n.sourceB,
		fusion_policy: n.fusionPolicy,
		merge_gap_minutes: n.mergeGapMinutes,
		padding_minutes: n.paddingMinutes,
		min_overlap_jaccard: n.minOverlapJaccard,
		apply_nonwear_gate: n.applyNonwearGate
	};
}
function gn(e) {
	switch (e.fusionPolicy === ln.USE_SOURCE_B ? e.sourceB : e.sourceA) {
		case rn.DIARY: return A.DIARY;
		case rn.HDCZA: return A.HDCZA;
		case rn.L5: return A.L5;
		case rn.SELECTED_SCORER_FIRST_LAST:
		case rn.SELECTED_SCORER_LONGEST_BOUT: return A.LONGEST_BOUT;
		case rn.EVENT_MARKER: return A.EVENT_MARKER;
		case rn.ACTIWARE_REST_INTERVAL: return A.ACTIWARE_REST_INTERVAL;
		case rn.NONE: return A.NONE;
	}
	return A.NONE;
}
export { we as A, We as C, me as D, le as E, re as O, Ce as S, ee as T, en as _, un as a, Ze as b, Sn as c, an as d, on as f, qe as g, Je as h, _n as i, Q as k, sn as l, Ye as m, ln as n, gn as o, nn as p, rn as r, hn as s, cn as t, tn as u, Xe as v, oe as w, ze as x, Qe as y };
