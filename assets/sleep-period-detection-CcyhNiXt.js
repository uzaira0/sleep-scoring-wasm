import { i as e } from "./workers-DwjGhrCr.js";
import { $ as n, $t as o, A as t, D as a, F as s, G as i, H as r, I as l, Jt as c, K as u, L as m, M as p, N as d, O as f, P as _, Q as h, R as S, U as g, Ut as E, W as b, X as y, Xt as A, Y as v, Z as O, at as w, ct as T, et as I, fn as R, gt as C, ht as M, it as L, j as P, k, lt as x, mt as U, ot as D, q as B, st as G, tn as $, tt as F, ut as j, z as V } from "./schema-C65z93SA.js";
import { F as K, P as H, j as W, v as Y } from "./workspace-db-jv0UAB1p.js";
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
function X(e) {
	if (null === e || "object" != typeof e || !J.has(e)) return null;
	const n = e, o = (t = n.id, null === G(t) ? null : t);
	var t;
	if (null === o) return null;
	const a = Object.fromEntries(Object.entries(n).filter(([e]) => !v.excludedFieldNames.includes(e)));
	return {
		cellId: o,
		implementationVersion: n.implementationVersion,
		configHash: we(a)
	};
}
const Q = new Map(U.map((e) => [e.id, e.conformance]));
function q(e) {
	return Q.get(e) ?? "conformant";
}
const ee = function() {
	const e = /* @__PURE__ */ new Map();
	for (const n of U) {
		if ("sleep_wake" !== n.kind) continue;
		if (!V.includes(n.requiredSignal)) continue;
		if (u.includes(n.execution)) continue;
		const o = n.family, t = e.get(o);
		if (t) {
			if (t.conformance !== n.conformance) throw new Error(`count scorer family ${o} has conflicting conformance across variants: ${t.conformance} vs ${n.conformance}`);
		} else {
			const t = O[o];
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
	for (const o of m) {
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
}(), oe = d, te = g, ae = b, se = Object.fromEntries(i.map((e) => [e, 0])), ie = Object.fromEntries(w.map((e) => [e.value, 0])), re = D;
function le(e = {}) {
	const n = new Set(e.includeFamilies ?? i), o = e.epochSeconds ?? te, t = new Set(e.excludeHasibAlgorithms ?? []), a = e.implementationVersion ?? ae, s = [], l = [];
	if (n.has("count_hasib")) {
		for (const e of ee) if (t.has(e.slug)) s.push({
			id: T("count_skip_entry", { method_family: e.slug }),
			reason: ve("skipped_method_reason", { algorithm_value: e.algorithm })
		});
		else for (const n of Object.keys(oe)) for (const t of oe[n]) for (const s of o) l.push(_e({
			family: e,
			countFamily: n,
			axis: t,
			epochSeconds: s,
			implementationVersion: a
		}));
		for (const e of ne) if (!t.has(e.slug)) for (const n of Object.keys(oe)) for (const t of oe[n]) for (const s of o) l.push(he({
			variant: e,
			countFamily: n,
			axis: t,
			epochSeconds: s,
			implementationVersion: a
		}));
	}
	for (const i of Object.keys(B)) n.has(i) && l.push(Se(i, a));
	if (n.has("lstm")) for (const i of e.lstmModels ?? []) l.push(...ge(i, a));
	(e.includeConsensus ?? !0) && n.has("consensus") && l.push(...function(e, n) {
		const o = [], t = Array.from(new Set(e.filter((e) => Ee(e)).filter((e) => te.includes(e.epochSeconds)).map((e) => e.epochSeconds))).sort((e, n) => e - n);
		for (const a of t) {
			const t = `${String(a)}s`, s = e.filter((e) => Ee(e) && e.epochSeconds === a);
			if (s.length <= 1) continue;
			const { slug: i, label: l } = be(s);
			for (const e of r) o.push(fe({
				id: T("consensus_cell", {
					scope: i,
					strategy: e,
					epoch_seconds: a
				}),
				label: ve("consensus_cell_label", {
					scope_label: l,
					strategy_label: k[e] ?? e,
					suffix: t
				}),
				strategy: e,
				members: s,
				epochSeconds: a,
				implementationVersion: n
			}));
		}
		return o;
	}(l, a));
	const c = function(e) {
		const n = /* @__PURE__ */ new Map(), o = [];
		for (const t of e) {
			const e = n.get(t.id);
			if (e !== t.configHash) {
				if (void 0 !== e) throw new Error(`cube plan holds ${t.id} under two configs (${e}, ${t.configHash})`);
				n.set(t.id, t.configHash), o.push(t);
			}
		}
		return o;
	}(l).map(z);
	return {
		configs: c,
		skipped: s,
		warnings: Ae(c),
		summary: de({
			configs: c,
			skipped: s
		})
	};
}
let ce, ue;
function me() {
	return ce ??= le({
		includeFamilies: ["count_hasib", "consensus"],
		epochSeconds: [30, 60],
		includeConsensus: !0
	}), ce;
}
function pe(e) {
	return ue ??= new Map(me().configs.map((e) => [e.id, e])), ue.get(e);
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
	const n = e.implementationVersion ?? ae, o = e.members.map((e) => e.id), s = [...e.members].sort((e, n) => e.id < n.id ? -1 : e.id > n.id ? 1 : 0).map((e) => e.configHash);
	return {
		...ye({
			id: e.id,
			family: a,
			label: e.label,
			algorithm: `consensus:${e.strategy}`,
			outputKind: f,
			epochSeconds: e.epochSeconds,
			input: {
				family: "algorithm_outputs",
				epochSeconds: e.epochSeconds,
				seriesKey: o.join(",")
			},
			parameters: {
				strategy: e.strategy,
				inputConfigIds: o,
				inputConfigHashes: s,
				inputCount: o.length
			},
			implementationVersion: n,
			validationStatus: t,
			defaultIncluded: !0,
			exploratory: !0,
			lineage: o
		}),
		conformance: q("consensus_majority_vote")
	};
}
function _e(e) {
	const n = re(e.countFamily, e.axis, e.epochSeconds), o = x(e.family.slug, e.countFamily, e.axis, e.epochSeconds) ? p : P;
	return {
		...ye({
			id: T("count_cell", {
				method_family: e.family.slug,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: s,
			label: ve("count_cell_label", {
				method_label: e.family.label,
				input_label: Oe(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.family.algorithm,
			outputKind: l,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: n
			},
			parameters: {
				ws3: e.epochSeconds,
				sadehNeishabouriCap300: j(e.family.slug, e.countFamily)
			},
			implementationVersion: e.implementationVersion,
			validationStatus: o,
			defaultIncluded: !0,
			exploratory: o === P,
			lineage: [n]
		}),
		conformance: e.family.conformance
	};
}
function he(e) {
	const n = re(e.countFamily, e.axis, e.epochSeconds);
	return {
		...ye({
			id: T("count_cell", {
				method_family: e.variant.slug,
				implementation_variant: e.variant.implementation,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: s,
			label: ve("count_provenance_cell_label", {
				method_label: e.variant.label,
				implementation_label: e.variant.implementationLabel,
				input_label: Oe(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.variant.algorithm,
			outputKind: l,
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
			validationStatus: S,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [n]
		}),
		conformance: e.variant.conformance
	};
}
function Se(e, n) {
	const o = B[e];
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
	const t = e.thresholdPresets && e.thresholdPresets.length > 0 ? e.thresholdPresets : [n], a = q(e.id);
	return t.map((n) => ({
		...ye({
			id: T("model_cell", {
				model_slug: Ne(e.id),
				preset_slug: Ne(n.id)
			}),
			family: I,
			label: ve("model_cell_label", {
				model_label: e.label,
				preset_label: n.label
			}),
			algorithm: e.id,
			outputKind: F,
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
			implementationVersion: o,
			validationStatus: h,
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
		slug: `${s}_sleep_wake`,
		label: ve("count_consensus_scope_label", {})
	};
	const o = Array.from(new Set(e.filter((e) => e.family === I).map((e) => "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm).filter((e) => e.length > 0))).sort();
	if (n.has("lstm") && o.length > 0) {
		const e = o.map((e) => Ne(e)).join("_"), t = n.has(s);
		return {
			slug: t ? `${s}_${I}_${e}_sleep_wake` : `${I}_${e}_sleep_wake`,
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
	return _[e].labelTemplate.replace("{axis}", n).replace("{axis_label}", L.axis?.[n] ?? n).replace("{epoch_seconds}", String(o));
}
function Ne(e) {
	return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function we(e) {
	const n = Te(e);
	let o = v.initialValue;
	for (let t = 0; t < n.length; t += 1) o ^= n.charCodeAt(t), o = Math.imul(o, v.prime) >>> 0;
	return o.toString(16).padStart(v.lowercaseHexWidth, "0");
}
function Te(e) {
	return null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map((e) => Te(e)).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [n]) => e.localeCompare(n)).map(([e, n]) => `${JSON.stringify(e)}:${Te(n)}`).join(",")}}`;
}
const Ie = new Map(U.map((e) => [e.id, {
	id: e.id,
	conformance: e.conformance,
	needsModelArtifact: e.needsModelArtifact
}]));
function Re(e) {
	return Ie.get(e)?.conformance ?? null;
}
const Ce = W, Me = me().configs.map((e) => ({
	value: e.id,
	label: `Tensor: ${e.label}`
})), Le = new Set(M);
function Pe(e) {
	if (!Le.has(e.method)) throw new Error(`STANDARD_ALGORITHM_OPTIONS references '${e.method}', which is not a generated scoring-method contract id.`);
	return {
		value: e.method,
		label: e.label
	};
}
const ke = [
	{
		method: E.SADEH_1994_ACTILIFE,
		label: "Sadeh (1994) ActiLife - Recommended"
	},
	{
		method: E.SADEH_1994_ORIGINAL,
		label: "Sadeh (1994) Original"
	},
	{
		method: E.SADEH_1994_GGIR,
		label: "Sadeh (1994) GGIR / zero-crossing Y"
	},
	{
		method: E.COLE_KRIPKE_1992_ACTILIFE,
		label: "Cole-Kripke (1992) ActiLife"
	},
	{
		method: E.COLE_KRIPKE_1992_ORIGINAL,
		label: "Cole-Kripke (1992) Original"
	},
	{
		method: E.COLE_KRIPKE_1992_GGIR,
		label: "Cole-Kripke (1992) GGIR / zero-crossing Y"
	}
], xe = [{
	method: E.LSTM_SLEEP_WAKE,
	label: "LSTM Sleep/Wake (ONNX spectral)"
}, {
	method: E.VAN_HEES_2015,
	label: "van Hees (2015)"
}], Ue = [
	{
		method: E.UCSD_SCRIPPS_2010,
		label: "UCSD / Scripps (2010)"
	},
	{
		method: E.SAZONOV_2004,
		label: "Sazonov (2004) — provisional"
	},
	{
		method: E.SYED_CNN,
		label: "Syed CNN — needs model"
	},
	{
		method: E.ACTIWARE_SLEEP_WAKE,
		label: "Actiware Sleep/Wake"
	}
].map((e) => {
	return "needs_model" !== Re((n = Pe(e)).value) ? n : {
		...n,
		disabled: !0
	};
	var n;
}), De = [
	...ke.map(Pe),
	{
		value: Y.TENSOR_MAJORITY_VOTE,
		label: "Tensor majority vote"
	},
	...xe.map(Pe),
	...Ue
], Be = [...De, ...Me], Ge = {
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
], Fe = new Map(U.map((e) => [e.id, e.execution]));
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
Ve(De), Ve(Be);
const Ke = Object.fromEntries(C.map((e) => [e.id, {
	onsetN: e.onsetMinConsecutiveSleep,
	offsetN: e.offsetMinConsecutiveMinutes,
	offsetState: e.offsetScanState,
	label: e.label
}])), He = Ke[$.CONSECUTIVE_ONSET3S_OFFSET5S];
function We(e) {
	return Ke[e] ?? He;
}
function Ye(e) {
	return e?.markerType === c.MAIN_SLEEP;
}
function Je(e) {
	return e?.markerType === c.NAP;
}
function Ze(e, n) {
	return n.isInvalidNight && !0 !== n.isInvalidNightImplicit || e.some(Ye) ? c.NAP : c.MAIN_SLEEP;
}
function ze(e) {
	const n = e === c.NAP ? c.NAP : c.MAIN_SLEEP;
	return [n, n === c.MAIN_SLEEP ? c.NAP : n];
}
function Xe(e, n) {
	return Ye(e) || Ye(n) ? c.MAIN_SLEEP : c.NAP;
}
function Qe(e) {
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
C.map(({ id: e, label: n }) => ({
	value: e,
	label: n
})), o.NONE, o.WEBSTER, c.MAIN_SLEEP, c.NAP, A.SMART, A.DIARY, A.HDCZA, A.L5, A.LONGEST_BOUT, A.EVENT_MARKER, A.ACTIWARE_REST_INTERVAL, A.NONE;
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
	sourceA: R.sleep_period_detection.source_a,
	sourceB: R.sleep_period_detection.source_b,
	fusionPolicy: R.sleep_period_detection.fusion_policy,
	mergeGapMinutes: R.sleep_period_detection.merge_gap_minutes,
	paddingMinutes: R.sleep_period_detection.padding_minutes,
	minOverlapJaccard: R.sleep_period_detection.min_overlap_jaccard,
	applyNonwearGate: R.sleep_period_detection.apply_nonwear_gate
};
function un(e) {
	const n = cn;
	return e.sourceA === n.sourceA && e.sourceB === n.sourceB && e.fusionPolicy === n.fusionPolicy && e.mergeGapMinutes === n.mergeGapMinutes && e.paddingMinutes === n.paddingMinutes && e.minOverlapJaccard === n.minOverlapJaccard && e.applyNonwearGate === n.applyNonwearGate;
}
const mn = {
	[rn.DIARY]: "Diary",
	[rn.HDCZA]: "HDCZA SPT",
	[rn.L5]: "L5 least active 5h",
	[rn.SELECTED_SCORER_FIRST_LAST]: "Selected scorer first-last sleep",
	[rn.SELECTED_SCORER_LONGEST_BOUT]: "Selected scorer longest sleep bout",
	[rn.QUIET_BOUT]: "Quiet-bout least-active window",
	[rn.EVENT_MARKER]: "Event markers (button presses)",
	[rn.ACTIWARE_REST_INTERVAL]: "Actiware rest interval",
	[rn.NONE]: "None"
}, pn = Object.values(K).map((e) => ({
	value: e,
	label: mn[e]
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
	return pn.find((n) => n.value === e)?.label ?? e;
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
export { we as A, We as C, pe as D, le as E, re as O, Ce as S, ee as T, en as _, un as a, Ze as b, Sn as c, an as d, on as f, qe as g, Je as h, _n as i, X as k, sn as l, Ye as m, ln as n, gn as o, nn as p, rn as r, hn as s, cn as t, tn as u, Qe as v, oe as w, ze as x, Xe as y };
