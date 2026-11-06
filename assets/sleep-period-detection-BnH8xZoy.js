import { $ as e, A as n, B as o, F as t, G as a, H as s, I as i, J as r, K as l, L as c, M as u, N as p, P as m, Q as d, Qt as f, R as _, V as h, X as S, Y as g, _t as b, an as y, ct as A, dt as v, en as N, et as O, ft as w, gn as T, it as I, j as R, lt as C, nt as M, pt as L, q as P, qt as k, rn as x, rt as B, st as D, tt as U, ut as G, vt as $, yt as V, z as F } from "./schema-B0CR2EpS.js";
import { r as j } from "./workers-D4og5Jak.js";
import { M as K, N as H, g as Y, k as W } from "./workspace-db-CwhwLMaR.js";
const J = /* @__PURE__ */ new WeakSet();
function z(e) {
	if (null !== e && "object" == typeof e && !Object.isFrozen(e)) {
		Object.freeze(e);
		for (const n of Object.values(e)) z(n);
	}
	return e;
}
function Z(e) {
	return J.add(z(e)), e;
}
function Q(e) {
	if (null === e || "object" != typeof e || !J.has(e)) return null;
	const n = e, o = (t = n.id, null === G(t) ? null : t);
	var t;
	if (null === o) return null;
	const a = Object.fromEntries(Object.entries(n).filter(([e]) => !d.excludedFieldNames.includes(e)));
	return {
		cellId: o,
		implementationVersion: n.implementationVersion,
		configHash: we(a)
	};
}
const q = new Map(b.map((e) => [e.id, e.conformance]));
function X(e) {
	return q.get(e) ?? "conformant";
}
const ee = function() {
	const e = /* @__PURE__ */ new Map();
	for (const n of b) {
		if ("sleep_wake" !== n.kind) continue;
		if (!s.includes(n.requiredSignal)) continue;
		if (g.includes(n.execution)) continue;
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
}(), oe = i, te = l, ae = P, se = Object.fromEntries(r.map((e) => [e, 0])), ie = Object.fromEntries(A.map((e) => [e.value, 0])), re = C;
function le(e = {}) {
	const n = new Set(e.includeFamilies ?? r), o = e.epochSeconds ?? te, t = new Set(e.excludeHasibAlgorithms ?? []), s = e.implementationVersion ?? ae, i = [], l = [];
	if (n.has("count_hasib")) {
		for (const e of ee) if (t.has(e.slug)) i.push({
			id: v("count_skip_entry", { method_family: e.slug }),
			reason: ve("skipped_method_reason", { algorithm_value: e.algorithm })
		});
		else for (const n of Object.keys(oe)) for (const t of oe[n]) for (const a of o) l.push(_e({
			family: e,
			countFamily: n,
			axis: t,
			epochSeconds: a,
			implementationVersion: s
		}));
		for (const e of ne) if (!t.has(e.slug)) for (const n of Object.keys(oe)) for (const t of oe[n]) for (const a of o) l.push(he({
			variant: e,
			countFamily: n,
			axis: t,
			epochSeconds: a,
			implementationVersion: s
		}));
	}
	for (const a of Object.keys(S)) n.has(a) && l.push(Se(a, s));
	if (n.has("lstm")) for (const a of e.lstmModels ?? []) l.push(...ge(a, s));
	(e.includeConsensus ?? !0) && n.has("consensus") && l.push(...function(e, n) {
		const o = [], t = Array.from(new Set(e.filter((e) => Ee(e)).filter((e) => te.includes(e.epochSeconds)).map((e) => e.epochSeconds))).sort((e, n) => e - n);
		for (const s of t) {
			const t = `${String(s)}s`, i = e.filter((e) => Ee(e) && e.epochSeconds === s);
			if (i.length <= 1) continue;
			const { slug: r, label: l } = be(i);
			for (const e of a) o.push(fe({
				id: v("consensus_cell", {
					scope: r,
					strategy: e,
					epoch_seconds: s
				}),
				label: ve("consensus_cell_label", {
					scope_label: l,
					strategy_label: u[e] ?? e,
					suffix: t
				}),
				strategy: e,
				members: i,
				epochSeconds: s,
				implementationVersion: n
			}));
		}
		return o;
	}(l, s));
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
	}(l).map(Z);
	return {
		configs: c,
		skipped: i,
		warnings: Ae(c),
		summary: de({
			configs: c,
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
	const o = e.implementationVersion ?? ae, t = e.members.map((e) => e.id), a = [...e.members].sort((e, n) => e.id < n.id ? -1 : e.id > n.id ? 1 : 0).map((e) => e.configHash);
	return {
		...ye({
			id: e.id,
			family: n,
			label: e.label,
			algorithm: `consensus:${e.strategy}`,
			outputKind: R,
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
			validationStatus: p,
			defaultIncluded: !0,
			exploratory: !0,
			lineage: t
		}),
		conformance: X("consensus_majority_vote")
	};
}
function _e(e) {
	const n = re(e.countFamily, e.axis, e.epochSeconds), o = w(e.family.slug, e.countFamily, e.axis, e.epochSeconds) ? t : m;
	return {
		...ye({
			id: v("count_cell", {
				method_family: e.family.slug,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: _,
			label: ve("count_cell_label", {
				method_label: e.family.label,
				input_label: Ne(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.family.algorithm,
			outputKind: F,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: n
			},
			parameters: {
				ws3: e.epochSeconds,
				sadehNeishabouriCap300: L(e.family.slug, e.countFamily)
			},
			implementationVersion: e.implementationVersion,
			validationStatus: o,
			defaultIncluded: !0,
			exploratory: o === m,
			lineage: [n]
		}),
		conformance: e.family.conformance
	};
}
function he(e) {
	const n = re(e.countFamily, e.axis, e.epochSeconds);
	return {
		...ye({
			id: v("count_cell", {
				method_family: e.variant.slug,
				implementation_variant: e.variant.implementation,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: _,
			label: ve("count_provenance_cell_label", {
				method_label: e.variant.label,
				implementation_label: e.variant.implementationLabel,
				input_label: Ne(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.variant.algorithm,
			outputKind: F,
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
			validationStatus: h,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [n]
		}),
		conformance: e.variant.conformance
	};
}
function Se(e, n) {
	const o = S[e];
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
		conformance: X(o.methodBindingId)
	};
}
function ge(e, n) {
	const o = e.thresholdPresets && e.thresholdPresets.length > 0 ? e.thresholdPresets : [M], t = X(e.id);
	return o.map((o) => ({
		...ye({
			id: v("model_cell", {
				model_slug: Oe(e.id),
				preset_slug: Oe(o.id)
			}),
			family: B,
			label: ve("model_cell_label", {
				model_label: e.label,
				preset_label: o.label
			}),
			algorithm: e.id,
			outputKind: I,
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
			validationStatus: U,
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
function be(e) {
	const n = new Set(e.map((e) => e.family));
	if (1 === n.size && n.has("count_hasib")) return {
		slug: `${_}_sleep_wake`,
		label: ve("count_consensus_scope_label", {})
	};
	const o = Array.from(new Set(e.filter((e) => e.family === B).map((e) => "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm).filter((e) => e.length > 0))).sort();
	if (n.has("lstm") && o.length > 0) {
		const e = o.map((e) => Oe(e)).join("_"), t = n.has(_);
		return {
			slug: t ? `${_}_${B}_${e}_sleep_wake` : `${B}_${e}_sleep_wake`,
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
function ve(n, o) {
	const t = e[n];
	if (void 0 === t) throw new Error(`no generated planner message ${n}`);
	return Object.entries(o).reduce((e, [n, o]) => e.replace(`{${n}}`, String(o)), t);
}
function Ne(e, n, o) {
	return c[e].labelTemplate.replace("{axis}", n).replace("{axis_label}", D.axis?.[n] ?? n).replace("{epoch_seconds}", String(o));
}
function Oe(e) {
	return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function we(e) {
	const n = Te(e);
	let o = d.initialValue;
	for (let t = 0; t < n.length; t += 1) o ^= n.charCodeAt(t), o = Math.imul(o, d.prime) >>> 0;
	return o.toString(16).padStart(d.lowercaseHexWidth, "0");
}
function Te(e) {
	return null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map((e) => Te(e)).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [n]) => e.localeCompare(n)).map(([e, n]) => `${JSON.stringify(e)}:${Te(n)}`).join(",")}}`;
}
const Ie = new Map(b.map((e) => [e.id, {
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
})), Le = new Set($);
function Pe(e) {
	if (!Le.has(e.method)) throw new Error(`STANDARD_ALGORITHM_OPTIONS references '${e.method}', which is not a generated scoring-method contract id.`);
	return {
		value: e.method,
		label: e.label
	};
}
const ke = [
	{
		method: k.SADEH_1994_ACTILIFE,
		label: "Sadeh (1994) ActiLife - Recommended"
	},
	{
		method: k.SADEH_1994_ORIGINAL,
		label: "Sadeh (1994) Original"
	},
	{
		method: k.SADEH_1994_GGIR,
		label: "Sadeh (1994) GGIR / zero-crossing Y"
	},
	{
		method: k.COLE_KRIPKE_1992_ACTILIFE,
		label: "Cole-Kripke (1992) ActiLife"
	},
	{
		method: k.COLE_KRIPKE_1992_ORIGINAL,
		label: "Cole-Kripke (1992) Original"
	},
	{
		method: k.COLE_KRIPKE_1992_GGIR,
		label: "Cole-Kripke (1992) GGIR / zero-crossing Y"
	}
], xe = [{
	method: k.LSTM_SLEEP_WAKE,
	label: "LSTM Sleep/Wake (ONNX spectral)"
}, {
	method: k.VAN_HEES_2015,
	label: "van Hees (2015)"
}], Be = [
	{
		method: k.UCSD_SCRIPPS_2010,
		label: "UCSD / Scripps (2010)"
	},
	{
		method: k.SAZONOV_2004,
		label: "Sazonov (2004) — provisional"
	},
	{
		method: k.SYED_CNN,
		label: "Syed CNN — needs model"
	},
	{
		method: k.ACTIWARE_SLEEP_WAKE,
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
	...Be
], Ue = [...De, ...Me], Ge = {
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
], Ve = new Map(b.map((e) => [e.id, e.execution]));
function Fe(e) {
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
		const e = Fe(o.value), t = n.get(e) ?? [];
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
je(De), je(Ue);
const Ke = Object.fromEntries(V.map((e) => [e.id, {
	onsetN: e.onsetMinConsecutiveSleep,
	offsetN: e.offsetMinConsecutiveMinutes,
	offsetState: e.offsetScanState,
	label: e.label
}])), He = Ke[y.CONSECUTIVE_ONSET3S_OFFSET5S];
function Ye(e) {
	return Ke[e] ?? He;
}
function We(e) {
	return e?.markerType === f.MAIN_SLEEP;
}
function Je(e) {
	return e?.markerType === f.NAP;
}
function ze(e, n) {
	return n.isInvalidNight && !0 !== n.isInvalidNightImplicit || e.some(We) ? f.NAP : f.MAIN_SLEEP;
}
function Ze(e) {
	const n = e === f.NAP ? f.NAP : f.MAIN_SLEEP;
	return [n, n === f.MAIN_SLEEP ? f.NAP : n];
}
function Qe(e, n) {
	return We(e) || We(n) ? f.MAIN_SLEEP : f.NAP;
}
function qe(e) {
	const n = [], o = [];
	for (const t of e) (We(t) ? o : n).push(t);
	return {
		kept: n,
		cleared: o
	};
}
function Xe(e, n) {
	const o = "sleep" === e ? Ce.MAX_SLEEP_PERIODS_PER_DAY : Ce.MAX_NONWEAR_PERIODS_PER_DAY;
	return n > o ? `Cannot create more than ${String(o)} ${e} periods per day.` : null;
}
async function en(e) {
	const { sleepMarkers: n, nonwearMarkers: o, isInvalidNight: t } = e, a = Xe("sleep", n.length) ?? Xe("nonwear", o.length);
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
V.map(({ id: e, label: n }) => ({
	value: e,
	label: n
})), x.NONE, x.WEBSTER, f.MAIN_SLEEP, f.NAP, N.SMART, N.DIARY, N.HDCZA, N.L5, N.LONGEST_BOUT, N.EVENT_MARKER, N.ACTIWARE_REST_INTERVAL, N.NONE;
const sn = "GGIR nonwear", rn = {
	DIARY: H.diary,
	HDCZA: H.hdcza,
	L5: H.l5,
	SELECTED_SCORER_FIRST_LAST: H.selected_scorer_first_last,
	SELECTED_SCORER_LONGEST_BOUT: H.selected_scorer_longest_bout,
	QUIET_BOUT: H.quiet_bout,
	EVENT_MARKER: H.event_marker,
	ACTIWARE_REST_INTERVAL: H.actiware_rest_interval,
	NONE: H.none
}, ln = {
	USE_SOURCE_A: K.use_source_a,
	USE_SOURCE_B: K.use_source_b,
	INTERSECTION: K.intersection,
	UNION: K.union,
	SOURCE_B_BOUNDED_BY_SOURCE_A: K.source_b_bounded_by_source_a,
	SANITY_CLAMP_SOURCE_B_TO_SOURCE_A: K.sanity_clamp_source_b_to_source_a
}, cn = {
	sourceA: T.sleep_period_detection.source_a,
	sourceB: T.sleep_period_detection.source_b,
	fusionPolicy: T.sleep_period_detection.fusion_policy,
	mergeGapMinutes: T.sleep_period_detection.merge_gap_minutes,
	paddingMinutes: T.sleep_period_detection.padding_minutes,
	minOverlapJaccard: T.sleep_period_detection.min_overlap_jaccard,
	applyNonwearGate: T.sleep_period_detection.apply_nonwear_gate
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
}, mn = Object.values(H).map((e) => ({
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
		case rn.DIARY: return N.DIARY;
		case rn.HDCZA: return N.HDCZA;
		case rn.L5: return N.L5;
		case rn.SELECTED_SCORER_FIRST_LAST:
		case rn.SELECTED_SCORER_LONGEST_BOUT: return N.LONGEST_BOUT;
		case rn.EVENT_MARKER: return N.EVENT_MARKER;
		case rn.ACTIWARE_REST_INTERVAL: return N.ACTIWARE_REST_INTERVAL;
		case rn.NONE: return N.NONE;
	}
	return N.NONE;
}
export { we as A, Ye as C, me as D, le as E, re as O, Ce as S, ee as T, en as _, un as a, ze as b, Sn as c, an as d, on as f, Xe as g, Je as h, _n as i, Q as k, sn as l, We as m, ln as n, gn as o, nn as p, rn as r, hn as s, cn as t, tn as u, qe as v, oe as w, Ze as x, Qe as y };
