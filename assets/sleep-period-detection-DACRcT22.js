import { B as e, F as n, H as o, I as t, J as a, L as s, M as i, N as r, P as l, Q as c, R as u, U as p, V as m, W as d, X as f, Y as _, Yt as h, Z as S, an as g, at as E, bt as b, dt as y, en as A, et as v, ft as N, ht as O, it as w, lt as T, mt as I, nn as R, nt as C, ot as M, pt as L, q as P, rt as x, sn as k, tt as U, ut as B, vn as D, xt as G, yt as V, z as $ } from "./schema-B_tCLPTi.js";
import { r as j } from "./workers-ChOvAmOP.js";
import { F as K, P as H, j as Y, v as W } from "./workspace-db-C0mqPCjA.js";
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
	const a = Object.fromEntries(Object.entries(n).filter(([e]) => !v.excludedFieldNames.includes(e)));
	return {
		cellId: o,
		implementationVersion: n.implementationVersion,
		configHash: we(a)
	};
}
const X = new Map(V.map((e) => [e.id, e.conformance]));
function q(e) {
	return X.get(e) ?? "conformant";
}
const ee = function() {
	const e = /* @__PURE__ */ new Map();
	for (const n of V) {
		if ("sleep_wake" !== n.kind) continue;
		if (!d.includes(n.requiredSignal)) continue;
		if (S.includes(n.execution)) continue;
		const o = n.family, t = e.get(o);
		if (t) {
			if (t.conformance !== n.conformance) throw new Error(`count scorer family ${o} has conflicting conformance across variants: ${t.conformance} vs ${n.conformance}`);
		} else {
			const t = C[o];
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
	for (const t of o) {
		const o = e.get(t.methodFamilyId);
		if (!o) throw new Error(`generated provenance contract references absent count family ${t.methodFamilyId}`);
		n.push({
			slug: o.slug,
			algorithm: o.algorithm,
			label: o.label,
			conformance: o.conformance,
			primitive: t.primitiveId,
			implementation: t.implementationVariantId,
			implementationLabel: t.label,
			scoringParameters: t.parameters
		});
	}
	return n;
}(), oe = u, te = a, ae = _, se = Object.fromEntries(f.map((e) => [e, 0])), ie = Object.fromEntries(B.map((e) => [e.value, 0])), re = y;
function le(e = {}) {
	const n = new Set(e.includeFamilies ?? f), o = e.epochSeconds ?? te, t = new Set(e.excludeHasibAlgorithms ?? []), a = e.implementationVersion ?? ae, s = [], i = [];
	if (n.has("count_hasib")) {
		for (const e of ee) if (t.has(e.slug)) s.push({
			id: L("count_skip_entry", { method_family: e.slug }),
			reason: ve("skipped_method_reason", { algorithm_value: e.algorithm })
		});
		else for (const n of Object.keys(oe)) for (const t of oe[n]) for (const s of o) i.push(_e({
			family: e,
			countFamily: n,
			axis: t,
			epochSeconds: s,
			implementationVersion: a
		}));
		for (const e of ne) if (!t.has(e.slug)) for (const n of Object.keys(oe)) for (const t of oe[n]) for (const s of o) i.push(he({
			variant: e,
			countFamily: n,
			axis: t,
			epochSeconds: s,
			implementationVersion: a
		}));
	}
	for (const l of Object.keys(c)) n.has(l) && i.push(Se(l, a));
	if (n.has("lstm")) for (const l of e.lstmModels ?? []) i.push(...ge(l, a));
	(e.includeConsensus ?? !0) && n.has("consensus") && i.push(...function(e, n) {
		const o = [], t = Array.from(new Set(e.filter((e) => Ee(e)).filter((e) => te.includes(e.epochSeconds)).map((e) => e.epochSeconds))).sort((e, n) => e - n);
		for (const a of t) {
			const t = `${String(a)}s`, s = e.filter((e) => Ee(e) && e.epochSeconds === a);
			if (s.length <= 1) continue;
			const { slug: i, label: r } = be(s);
			for (const e of P) o.push(fe({
				id: L("consensus_cell", {
					scope: i,
					strategy: e,
					epoch_seconds: a
				}),
				label: ve("consensus_cell_label", {
					scope_label: r,
					strategy_label: l[e] ?? e,
					suffix: t
				}),
				strategy: e,
				members: s,
				epochSeconds: a,
				implementationVersion: n
			}));
		}
		return o;
	}(i, a));
	const r = function(e) {
		const n = /* @__PURE__ */ new Map(), o = [];
		for (const t of e) {
			const e = n.get(t.id);
			if (e !== t.configHash) {
				if (void 0 !== e) throw new Error(`cube plan holds ${t.id} under two configs (${e}, ${t.configHash})`);
				n.set(t.id, t.configHash), o.push(t);
			}
		}
		return o;
	}(i).map(z);
	return {
		configs: r,
		skipped: s,
		warnings: Ae(r),
		summary: de({
			configs: r,
			skipped: s
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
	const o = e.implementationVersion ?? ae, t = e.members.map((e) => e.id), a = [...e.members].sort((e, n) => e.id < n.id ? -1 : e.id > n.id ? 1 : 0).map((e) => e.configHash);
	return {
		...ye({
			id: e.id,
			family: i,
			label: e.label,
			algorithm: `consensus:${e.strategy}`,
			outputKind: r,
			epochSeconds: e.epochSeconds,
			input: {
				family: "algorithm_outputs",
				epochSeconds: e.epochSeconds,
				seriesKey: t.join(",")
			},
			parameters: {
				strategy: e.strategy,
				inputConfigIds: t,
				inputConfigHashes: a,
				inputCount: t.length
			},
			implementationVersion: o,
			validationStatus: n,
			defaultIncluded: !0,
			exploratory: !0,
			lineage: t
		}),
		conformance: q("consensus_majority_vote")
	};
}
function _e(n) {
	const o = re(n.countFamily, n.axis, n.epochSeconds), a = I(n.family.slug, n.countFamily, n.axis, n.epochSeconds) ? s : t;
	return {
		...ye({
			id: L("count_cell", {
				method_family: n.family.slug,
				count_family: n.countFamily,
				axis: n.axis,
				epoch_seconds: n.epochSeconds
			}),
			family: e,
			label: ve("count_cell_label", {
				method_label: n.family.label,
				input_label: Ne(n.countFamily, n.axis, n.epochSeconds)
			}),
			algorithm: n.family.algorithm,
			outputKind: m,
			epochSeconds: n.epochSeconds,
			input: {
				family: n.countFamily,
				axis: n.axis,
				epochSeconds: n.epochSeconds,
				seriesKey: o
			},
			parameters: {
				ws3: n.epochSeconds,
				sadehNeishabouriCap300: O(n.family.slug, n.countFamily)
			},
			implementationVersion: n.implementationVersion,
			validationStatus: a,
			defaultIncluded: !0,
			exploratory: a === t,
			lineage: [o]
		}),
		conformance: n.family.conformance
	};
}
function he(n) {
	const o = re(n.countFamily, n.axis, n.epochSeconds);
	return {
		...ye({
			id: L("count_cell", {
				method_family: n.variant.slug,
				implementation_variant: n.variant.implementation,
				count_family: n.countFamily,
				axis: n.axis,
				epoch_seconds: n.epochSeconds
			}),
			family: e,
			label: ve("count_provenance_cell_label", {
				method_label: n.variant.label,
				implementation_label: n.variant.implementationLabel,
				input_label: Ne(n.countFamily, n.axis, n.epochSeconds)
			}),
			algorithm: n.variant.algorithm,
			outputKind: m,
			epochSeconds: n.epochSeconds,
			input: {
				family: n.countFamily,
				axis: n.axis,
				epochSeconds: n.epochSeconds,
				seriesKey: o
			},
			parameters: {
				ws3: n.epochSeconds,
				implementation: n.variant.implementation,
				...n.variant.scoringParameters
			},
			implementationVersion: n.implementationVersion,
			validationStatus: p,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [o]
		}),
		conformance: n.variant.conformance
	};
}
function Se(e, n) {
	const o = c[e];
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
function ge(e, n) {
	const o = e.thresholdPresets && e.thresholdPresets.length > 0 ? e.thresholdPresets : [w], t = q(e.id);
	return o.map((o) => ({
		...ye({
			id: L("model_cell", {
				model_slug: Oe(e.id),
				preset_slug: Oe(o.id)
			}),
			family: E,
			label: ve("model_cell_label", {
				model_label: e.label,
				preset_label: o.label
			}),
			algorithm: e.id,
			outputKind: M,
			epochSeconds: e.epochSeconds,
			input: {
				family: "lstm_probability",
				epochSeconds: e.epochSeconds,
				seriesKey: `${e.id}:sleep_probability`
			},
			parameters: {
				modelId: e.id,
				thresholdPresetId: o.id,
				threshold: o.threshold
			},
			implementationVersion: n,
			validationStatus: x,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [`lstm:${e.id}`]
		}),
		conformance: t
	}));
}
function Ee(e) {
	return "sleep_wake_epoch" === e.outputKind && "consensus" !== e.family && void 0 === e.parameters.implementation;
}
function be(n) {
	const o = new Set(n.map((e) => e.family));
	if (1 === o.size && o.has("count_hasib")) return {
		slug: `${e}_sleep_wake`,
		label: ve("count_consensus_scope_label", {})
	};
	const t = Array.from(new Set(n.filter((e) => e.family === E).map((e) => "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm).filter((e) => e.length > 0))).sort();
	if (o.has("lstm") && t.length > 0) {
		const n = t.map((e) => Oe(e)).join("_"), a = o.has(e);
		return {
			slug: a ? `${e}_${E}_${n}_sleep_wake` : `${E}_${n}_sleep_wake`,
			label: ve(a ? "count_lstm_consensus_scope_label" : "lstm_consensus_scope_label", { model_ids: t.join(", ") })
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
	const o = U[e];
	if (void 0 === o) throw new Error(`no generated planner message ${e}`);
	return Object.entries(n).reduce((e, [n, o]) => e.replace(`{${n}}`, String(o)), o);
}
function Ne(e, n, o) {
	return $[e].labelTemplate.replace("{axis}", n).replace("{axis_label}", T.axis?.[n] ?? n).replace("{epoch_seconds}", String(o));
}
function Oe(e) {
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
const Ie = new Map(V.map((e) => [e.id, {
	id: e.id,
	conformance: e.conformance,
	needsModelArtifact: e.needsModelArtifact
}]));
function Re(e) {
	return Ie.get(e)?.conformance ?? null;
}
const Ce = Y, Me = pe().configs.map((e) => ({
	value: e.id,
	label: `Tensor: ${e.label}`
})), Le = new Set(b);
function Pe(e) {
	if (!Le.has(e.method)) throw new Error(`STANDARD_ALGORITHM_OPTIONS references '${e.method}', which is not a generated scoring-method contract id.`);
	return {
		value: e.method,
		label: e.label
	};
}
const xe = [
	{
		method: h.SADEH_1994_ACTILIFE,
		label: "Sadeh (1994) ActiLife - Recommended"
	},
	{
		method: h.SADEH_1994_ORIGINAL,
		label: "Sadeh (1994) Original"
	},
	{
		method: h.SADEH_1994_GGIR,
		label: "Sadeh (1994) GGIR / zero-crossing Y"
	},
	{
		method: h.COLE_KRIPKE_1992_ACTILIFE,
		label: "Cole-Kripke (1992) ActiLife"
	},
	{
		method: h.COLE_KRIPKE_1992_ORIGINAL,
		label: "Cole-Kripke (1992) Original"
	},
	{
		method: h.COLE_KRIPKE_1992_GGIR,
		label: "Cole-Kripke (1992) GGIR / zero-crossing Y"
	}
], ke = [{
	method: h.LSTM_SLEEP_WAKE,
	label: "LSTM Sleep/Wake (ONNX spectral)"
}, {
	method: h.VAN_HEES_2015,
	label: "van Hees (2015)"
}], Ue = [
	{
		method: h.UCSD_SCRIPPS_2010,
		label: "UCSD / Scripps (2010)"
	},
	{
		method: h.SAZONOV_2004,
		label: "Sazonov (2004) — provisional"
	},
	{
		method: h.SYED_CNN,
		label: "Syed CNN — needs model"
	},
	{
		method: h.ACTIWARE_SLEEP_WAKE,
		label: "Actiware Sleep/Wake"
	}
].map((e) => {
	return "needs_model" !== Re((n = Pe(e)).value) ? n : {
		...n,
		disabled: !0
	};
	var n;
}), Be = [
	...xe.map(Pe),
	{
		value: W.TENSOR_MAJORITY_VOTE,
		label: "Tensor majority vote"
	},
	...ke.map(Pe),
	...Ue
], De = [...Be, ...Me], Ge = {
	count: "Count-based sleep/wake",
	window: "Window / HDCZA",
	neural: "Neural",
	experimental: "Experimental (provisional)",
	tensor: "Tensor variants (A/B)"
}, Fe = [
	"count",
	"window",
	"neural",
	"experimental",
	"tensor"
], Ve = new Map(V.map((e) => [e.id, e.execution]));
function $e(e) {
	if (!Le.has(e)) return "tensor";
	const n = Ve.get(e);
	if ("neural_model" === n) return "neural";
	if ("angle_spt" === n) return "window";
	const o = Re(e);
	return "provisional" === o || "needs_model" === o ? "experimental" : "count";
}
function je(e) {
	const n = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = $e(o.value), t = n.get(e) ?? [];
		t.push(o), n.set(e, t);
	}
	return Fe.flatMap((e) => {
		const o = n.get(e);
		return o ? [{
			label: Ge[e],
			options: o
		}] : [];
	});
}
je(Be), je(De);
const Ke = Object.fromEntries(G.map((e) => [e.id, {
	onsetN: e.onsetMinConsecutiveSleep,
	offsetN: e.offsetMinConsecutiveMinutes,
	offsetState: e.offsetScanState,
	label: e.label
}])), He = Ke[k.CONSECUTIVE_ONSET3S_OFFSET5S];
function Ye(e) {
	return Ke[e] ?? He;
}
function We(e) {
	return e?.markerType === A.MAIN_SLEEP;
}
function Je(e) {
	return e?.markerType === A.NAP;
}
function Ze(e, n) {
	return n.isInvalidNight && !0 !== n.isInvalidNightImplicit || e.some(We) ? A.NAP : A.MAIN_SLEEP;
}
function ze(e) {
	const n = e === A.NAP ? A.NAP : A.MAIN_SLEEP;
	return [n, n === A.MAIN_SLEEP ? A.NAP : n];
}
function Qe(e, n) {
	return We(e) || We(n) ? A.MAIN_SLEEP : A.NAP;
}
function Xe(e) {
	const n = [], o = [];
	for (const t of e) (We(t) ? o : n).push(t);
	return {
		kept: n,
		cleared: o
	};
}
function qe(e, n) {
	const o = "sleep" === e ? Ce.MAX_SLEEP_PERIODS_PER_DAY : Ce.MAX_NONWEAR_PERIODS_PER_DAY;
	return n > o ? `Cannot create more than ${String(o)} ${e} periods per day.` : null;
}
async function en(e) {
	const { sleepMarkers: n, nonwearMarkers: o, isInvalidNight: t } = e, a = qe("sleep", n.length) ?? qe("nonwear", o.length);
	if (a) return a;
	const s = n.filter(We).length;
	if (t && s > 0) return "An Invalid night cannot contain main sleep.";
	if (s > 1) return "A night can contain only one main sleep period.";
	if ([...n.map((e) => [e.onsetTimestamp, e.offsetTimestamp]), ...o.map((e) => [e.startTimestamp, e.endTimestamp])].some(([e, n]) => null != e && !Number.isFinite(e) || null != n && !Number.isFinite(n) || null != e && null != n && n <= e)) return "Offset must be after onset, with finite boundaries.";
	const i = n.filter((e) => null != e.onsetTimestamp && null != e.offsetTimestamp);
	return (await Promise.all(i.slice(1).map((e, n) => {
		const o = i.slice(0, n + 1);
		return j().nightIntervalOverlap(e.onsetTimestamp, e.offsetTimestamp, Float64Array.from(o, (e) => e.onsetTimestamp), Float64Array.from(o, (e) => e.offsetTimestamp), new Float64Array(o.length).fill(1));
	}))).some((e) => e.seconds.some((e) => e > 0)) ? "Sleep windows cannot overlap. Move or remove the existing window first." : null;
}
function nn(e) {
	return void 0 !== e?.ggirBundleRevision;
}
function on(e) {
	return nn(e) ? "GGIR results retain their imported proposals; HDCZA replacement is unavailable." : null;
}
function tn(e, n, o) {
	return nn(e) && n.sleepMarkers.some(We) && !o.sleepMarkers.some(We);
}
function an(e, n) {
	if (n?.isInvalidNight) return { kind: "invalid" };
	const o = n?.sleepMarkers.find(We);
	return o ? {
		kind: "scored",
		main: o
	} : {
		kind: n ? "naps/nonwear-only" : "unreviewed",
		window: e
	};
}
G.map(({ id: e, label: n }) => ({
	value: e,
	label: n
})), g.NONE, g.WEBSTER, A.MAIN_SLEEP, A.NAP, R.SMART, R.DIARY, R.HDCZA, R.L5, R.LONGEST_BOUT, R.EVENT_MARKER, R.ACTIWARE_REST_INTERVAL, R.NONE;
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
	sourceA: D.sleep_period_detection.source_a,
	sourceB: D.sleep_period_detection.source_b,
	fusionPolicy: D.sleep_period_detection.fusion_policy,
	mergeGapMinutes: D.sleep_period_detection.merge_gap_minutes,
	paddingMinutes: D.sleep_period_detection.padding_minutes,
	minOverlapJaccard: D.sleep_period_detection.min_overlap_jaccard,
	applyNonwearGate: D.sleep_period_detection.apply_nonwear_gate
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
		case rn.DIARY: return R.DIARY;
		case rn.HDCZA: return R.HDCZA;
		case rn.L5: return R.L5;
		case rn.SELECTED_SCORER_FIRST_LAST:
		case rn.SELECTED_SCORER_LONGEST_BOUT: return R.LONGEST_BOUT;
		case rn.EVENT_MARKER: return R.EVENT_MARKER;
		case rn.ACTIWARE_REST_INTERVAL: return R.ACTIWARE_REST_INTERVAL;
		case rn.NONE: return R.NONE;
	}
	return R.NONE;
}
export { we as A, Ye as C, me as D, le as E, re as O, Ce as S, ee as T, en as _, un as a, Ze as b, Sn as c, an as d, on as f, qe as g, Je as h, _n as i, Q as k, sn as l, We as m, ln as n, gn as o, nn as p, rn as r, hn as s, cn as t, tn as u, Xe as v, oe as w, ze as x, Qe as y };
