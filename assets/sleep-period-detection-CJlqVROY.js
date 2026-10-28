import { i as e } from "./workers-BHTWDuMW.js";
import { A as n, B as o, Bt as t, D as a, E as s, F as i, Gt as r, H as l, I as c, J as u, K as p, M as m, N as d, O as f, P as _, Q as h, Qt as S, T as E, U as g, V as b, W as y, X as A, Xt as O, Y as N, Z as v, at as w, dt as T, ft as R, it as I, j as C, k as M, ln as L, nt as k, ot as x, pt as B, q as D, qt as U, rt as G, st as V, tt as $, w as F, z as j } from "./schema-CIHT_OGt.js";
import { M as K, N as H, g as W, k as Y } from "./workspace-db-G2NWfsPg.js";
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
	const n = e, o = (t = n.id, null === I(t) ? null : t);
	var t;
	if (null === o) return null;
	const a = Object.fromEntries(Object.entries(n).filter(([e]) => !p.excludedFieldNames.includes(e)));
	return {
		cellId: o,
		implementationVersion: n.implementationVersion,
		configHash: we(a)
	};
}
const X = new Map(T.map((e) => [e.id, e.conformance]));
function q(e) {
	return X.get(e) ?? "conformant";
}
const ee = function() {
	const e = /* @__PURE__ */ new Map();
	for (const n of T) {
		if ("sleep_wake" !== n.kind) continue;
		if (!c.includes(n.requiredSignal)) continue;
		if (g.includes(n.execution)) continue;
		const o = n.family, t = e.get(o);
		if (t) {
			if (t.conformance !== n.conformance) throw new Error(`count scorer family ${o} has conflicting conformance across variants: ${t.conformance} vs ${n.conformance}`);
		} else {
			const t = u[o];
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
}(), oe = n, te = o, ae = b, se = Object.fromEntries(l.map((e) => [e, 0])), ie = Object.fromEntries(k.map((e) => [e.value, 0])), re = G;
function le(e = {}) {
	const n = new Set(e.includeFamilies ?? l), o = e.epochSeconds ?? te, t = new Set(e.excludeHasibAlgorithms ?? []), a = e.implementationVersion ?? ae, i = [], r = [];
	if (n.has("count_hasib")) {
		for (const e of ee) if (t.has(e.slug)) i.push({
			id: w("count_skip_entry", { method_family: e.slug }),
			reason: Oe("skipped_method_reason", { algorithm_value: e.algorithm })
		});
		else for (const n of Object.keys(oe)) for (const t of oe[n]) for (const s of o) r.push(_e({
			family: e,
			countFamily: n,
			axis: t,
			epochSeconds: s,
			implementationVersion: a
		}));
		for (const e of ne) if (!t.has(e.slug)) for (const n of Object.keys(oe)) for (const t of oe[n]) for (const s of o) r.push(he({
			variant: e,
			countFamily: n,
			axis: t,
			epochSeconds: s,
			implementationVersion: a
		}));
	}
	for (const s of Object.keys(y)) n.has(s) && r.push(Se(s, a));
	if (n.has("lstm")) for (const s of e.lstmModels ?? []) r.push(...Ee(s, a));
	(e.includeConsensus ?? !0) && n.has("consensus") && r.push(...function(e, n) {
		const o = [], t = Array.from(new Set(e.filter((e) => ge(e)).filter((e) => te.includes(e.epochSeconds)).map((e) => e.epochSeconds))).sort((e, n) => e - n);
		for (const a of t) {
			const t = `${String(a)}s`, i = e.filter((e) => ge(e) && e.epochSeconds === a);
			if (i.length <= 1) continue;
			const { slug: r, label: l } = be(i);
			for (const e of j) o.push(fe({
				id: w("consensus_cell", {
					scope: r,
					strategy: e,
					epoch_seconds: a
				}),
				label: Oe("consensus_cell_label", {
					scope_label: l,
					strategy_label: s[e] ?? e,
					suffix: t
				}),
				strategy: e,
				members: i,
				epochSeconds: a,
				implementationVersion: n
			}));
		}
		return o;
	}(r, a));
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
	}(r).map(z);
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
	const n = e.implementationVersion ?? ae, o = e.members.map((e) => e.id), t = [...e.members].sort((e, n) => e.id < n.id ? -1 : e.id > n.id ? 1 : 0).map((e) => e.configHash);
	return {
		...ye({
			id: e.id,
			family: F,
			label: e.label,
			algorithm: `consensus:${e.strategy}`,
			outputKind: E,
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
			validationStatus: a,
			defaultIncluded: !0,
			exploratory: !0,
			lineage: o
		}),
		conformance: q("consensus_majority_vote")
	};
}
function _e(e) {
	const n = re(e.countFamily, e.axis, e.epochSeconds), o = x(e.family.slug, e.countFamily, e.axis, e.epochSeconds) ? M : f;
	return {
		...ye({
			id: w("count_cell", {
				method_family: e.family.slug,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: m,
			label: Oe("count_cell_label", {
				method_label: e.family.label,
				input_label: Ne(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.family.algorithm,
			outputKind: d,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: n
			},
			parameters: {
				ws3: e.epochSeconds,
				sadehNeishabouriCap300: V(e.family.slug, e.countFamily)
			},
			implementationVersion: e.implementationVersion,
			validationStatus: o,
			defaultIncluded: !0,
			exploratory: o === f,
			lineage: [n]
		}),
		conformance: e.family.conformance
	};
}
function he(e) {
	const n = re(e.countFamily, e.axis, e.epochSeconds);
	return {
		...ye({
			id: w("count_cell", {
				method_family: e.variant.slug,
				implementation_variant: e.variant.implementation,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: m,
			label: Oe("count_provenance_cell_label", {
				method_label: e.variant.label,
				implementation_label: e.variant.implementationLabel,
				input_label: Ne(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.variant.algorithm,
			outputKind: d,
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
			validationStatus: i,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [n]
		}),
		conformance: e.variant.conformance
	};
}
function Se(e, n) {
	const o = y[e];
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
function Ee(e, n) {
	const o = e.thresholdPresets && e.thresholdPresets.length > 0 ? e.thresholdPresets : [A], t = q(e.id);
	return o.map((o) => ({
		...ye({
			id: w("model_cell", {
				model_slug: ve(e.id),
				preset_slug: ve(o.id)
			}),
			family: v,
			label: Oe("model_cell_label", {
				model_label: e.label,
				preset_label: o.label
			}),
			algorithm: e.id,
			outputKind: h,
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
			validationStatus: N,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [`lstm:${e.id}`]
		}),
		conformance: t
	}));
}
function ge(e) {
	return "sleep_wake_epoch" === e.outputKind && "consensus" !== e.family && void 0 === e.parameters.implementation;
}
function be(e) {
	const n = new Set(e.map((e) => e.family));
	if (1 === n.size && n.has("count_hasib")) return {
		slug: `${m}_sleep_wake`,
		label: Oe("count_consensus_scope_label", {})
	};
	const o = Array.from(new Set(e.filter((e) => e.family === v).map((e) => "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm).filter((e) => e.length > 0))).sort();
	if (n.has("lstm") && o.length > 0) {
		const e = o.map((e) => ve(e)).join("_"), t = n.has(m);
		return {
			slug: t ? `${m}_${v}_${e}_sleep_wake` : `${v}_${e}_sleep_wake`,
			label: Oe(t ? "count_lstm_consensus_scope_label" : "lstm_consensus_scope_label", { model_ids: o.join(", ") })
		};
	}
	return {
		slug: "all_sleep_wake",
		label: Oe("all_consensus_scope_label", {})
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
	return e.some((e) => "count_hasib" === e.family && e.epochSeconds === te[0]) && n.push(Oe("count_30_warning", {})), e.some((e) => "lstm" === e.family) || n.push(Oe("no_lstm_warning", {})), n;
}
function Oe(e, n) {
	const o = D[e];
	if (void 0 === o) throw new Error(`no generated planner message ${e}`);
	return Object.entries(n).reduce((e, [n, o]) => e.replace(`{${n}}`, String(o)), o);
}
function Ne(e, n, o) {
	return C[e].labelTemplate.replace("{axis}", n).replace("{axis_label}", $.axis?.[n] ?? n).replace("{epoch_seconds}", String(o));
}
function ve(e) {
	return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function we(e) {
	const n = Te(e);
	let o = p.initialValue;
	for (let t = 0; t < n.length; t += 1) o ^= n.charCodeAt(t), o = Math.imul(o, p.prime) >>> 0;
	return o.toString(16).padStart(p.lowercaseHexWidth, "0");
}
function Te(e) {
	return null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map((e) => Te(e)).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [n]) => e.localeCompare(n)).map(([e, n]) => `${JSON.stringify(e)}:${Te(n)}`).join(",")}}`;
}
const Re = new Map(T.map((e) => [e.id, {
	id: e.id,
	conformance: e.conformance,
	needsModelArtifact: e.needsModelArtifact
}]));
function Ie(e) {
	return Re.get(e)?.conformance ?? null;
}
const Ce = Y, Me = pe().configs.map((e) => ({
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
		method: t.SADEH_1994_ACTILIFE,
		label: "Sadeh (1994) ActiLife - Recommended"
	},
	{
		method: t.SADEH_1994_ORIGINAL,
		label: "Sadeh (1994) Original"
	},
	{
		method: t.SADEH_1994_GGIR,
		label: "Sadeh (1994) GGIR / zero-crossing Y"
	},
	{
		method: t.COLE_KRIPKE_1992_ACTILIFE,
		label: "Cole-Kripke (1992) ActiLife"
	},
	{
		method: t.COLE_KRIPKE_1992_ORIGINAL,
		label: "Cole-Kripke (1992) Original"
	},
	{
		method: t.COLE_KRIPKE_1992_GGIR,
		label: "Cole-Kripke (1992) GGIR / zero-crossing Y"
	}
], xe = [{
	method: t.LSTM_SLEEP_WAKE,
	label: "LSTM Sleep/Wake (ONNX spectral)"
}, {
	method: t.VAN_HEES_2015,
	label: "van Hees (2015)"
}], Be = [
	{
		method: t.UCSD_SCRIPPS_2010,
		label: "UCSD / Scripps (2010)"
	},
	{
		method: t.SAZONOV_2004,
		label: "Sazonov (2004) — provisional"
	},
	{
		method: t.SYED_CNN,
		label: "Syed CNN — needs model"
	},
	{
		method: t.ACTIWARE_SLEEP_WAKE,
		label: "Actiware Sleep/Wake"
	}
].map((e) => {
	return "needs_model" !== Ie((n = Pe(e)).value) ? n : {
		...n,
		disabled: !0
	};
	var n;
}), De = [
	...ke.map(Pe),
	{
		value: W.TENSOR_MAJORITY_VOTE,
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
}, Ve = [
	"count",
	"window",
	"neural",
	"experimental",
	"tensor"
], $e = new Map(T.map((e) => [e.id, e.execution]));
function Fe(e) {
	if (!Le.has(e)) return "tensor";
	const n = $e.get(e);
	if ("neural_model" === n) return "neural";
	if ("angle_spt" === n) return "window";
	const o = Ie(e);
	return "provisional" === o || "needs_model" === o ? "experimental" : "count";
}
function je(e) {
	const n = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = Fe(o.value), t = n.get(e) ?? [];
		t.push(o), n.set(e, t);
	}
	return Ve.flatMap((e) => {
		const o = n.get(e);
		return o ? [{
			label: Ge[e],
			options: o
		}] : [];
	});
}
je(De), je(Ue);
const Ke = Object.fromEntries(B.map((e) => [e.id, {
	onsetN: e.onsetMinConsecutiveSleep,
	offsetN: e.offsetMinConsecutiveMinutes,
	offsetState: e.offsetScanState,
	label: e.label
}])), He = Ke[S.CONSECUTIVE_ONSET3S_OFFSET5S];
function We(e) {
	return Ke[e] ?? He;
}
function Ye(e) {
	return e?.markerType === r.MAIN_SLEEP;
}
function Je(e) {
	return e?.markerType === r.NAP;
}
function Ze(e, n) {
	return n || e.some(Ye) ? r.NAP : r.MAIN_SLEEP;
}
function ze(e) {
	const n = e === r.NAP ? r.NAP : r.MAIN_SLEEP;
	return [n, n === r.MAIN_SLEEP ? r.NAP : n];
}
function Qe(e, n) {
	return Ye(e) || Ye(n) ? r.MAIN_SLEEP : r.NAP;
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
B.map(({ id: e, label: n }) => ({
	value: e,
	label: n
})), O.NONE, O.WEBSTER, r.MAIN_SLEEP, r.NAP, U.SMART, U.DIARY, U.HDCZA, U.L5, U.LONGEST_BOUT, U.EVENT_MARKER, U.ACTIWARE_REST_INTERVAL, U.NONE;
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
	sourceA: L.sleep_period_detection.source_a,
	sourceB: L.sleep_period_detection.source_b,
	fusionPolicy: L.sleep_period_detection.fusion_policy,
	mergeGapMinutes: L.sleep_period_detection.merge_gap_minutes,
	paddingMinutes: L.sleep_period_detection.padding_minutes,
	minOverlapJaccard: L.sleep_period_detection.min_overlap_jaccard,
	applyNonwearGate: L.sleep_period_detection.apply_nonwear_gate
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
function En(e) {
	switch (e.fusionPolicy === ln.USE_SOURCE_B ? e.sourceB : e.sourceA) {
		case rn.DIARY: return U.DIARY;
		case rn.HDCZA: return U.HDCZA;
		case rn.L5: return U.L5;
		case rn.SELECTED_SCORER_FIRST_LAST:
		case rn.SELECTED_SCORER_LONGEST_BOUT: return U.LONGEST_BOUT;
		case rn.EVENT_MARKER: return U.EVENT_MARKER;
		case rn.ACTIWARE_REST_INTERVAL: return U.ACTIWARE_REST_INTERVAL;
		case rn.NONE: return U.NONE;
	}
	return U.NONE;
}
export { we as A, We as C, me as D, le as E, re as O, Ce as S, ee as T, en as _, un as a, Ze as b, Sn as c, an as d, on as f, qe as g, Je as h, _n as i, Q as k, sn as l, Ye as m, ln as n, En as o, nn as p, rn as r, hn as s, cn as t, tn as u, Xe as v, oe as w, ze as x, Qe as y };
