import { At as e, Bt as a, Cn as o, Dn as l, Gt as r, Ht as i, Jt as t, Kt as s, On as _, Pt as n, Qt as c, Sn as u, St as d, Ut as p, Vt as v, Wt as m, Xt as C, Yt as b, Z as k, Zt as h, _n as g, an as S, bn as z, bt as B, cn as w, dn as y, fn as A, in as E, it as x, kn as I, ln as R, lt as j, mn as O, nn as N, nt as M, on as T, pn as P, qt as q, rn as D, st as G, tn as L, un as F, vn as U, xn as $, y as V, yn as K } from "./schema-CuSEBD8u.js";
import { r as H } from "./workers-BSP07cYu.js";
import { A as W, M as Y, N as J, _ as Z, f as Q, g as X, h as ee, k as ae, m as oe } from "./workspace-db-DC1JGCSh.js";
const le = /* @__PURE__ */ new WeakSet();
function re(e) {
	if (null !== e && "object" == typeof e && !Object.isFrozen(e)) {
		Object.freeze(e);
		for (const a of Object.values(e)) re(a);
	}
	return e;
}
function ie(e) {
	return le.add(re(e)), e;
}
function te(e) {
	if (null === e || "object" != typeof e || !le.has(e)) return null;
	const a = e, o = (l = a.id, null === z(l) ? null : l);
	var l;
	if (null === o) return null;
	const r = Object.fromEntries(Object.entries(a).filter(([e]) => !w.excludedFieldNames.includes(e)));
	return {
		cellId: o,
		implementationVersion: a.implementationVersion,
		configHash: Le(r)
	};
}
const se = new Map(l.map((e) => [e.id, e.conformance]));
function _e(e) {
	return se.get(e) ?? "conformant";
}
const ne = function() {
	const e = /* @__PURE__ */ new Map();
	for (const a of l) {
		if ("sleep_wake" !== a.kind) continue;
		if (!c.includes(a.requiredSignal)) continue;
		if (S.includes(a.execution)) continue;
		const o = a.family, l = e.get(o);
		if (l) {
			if (l.conformance !== a.conformance) throw new Error(`count scorer family ${o} has conflicting conformance across variants: ${l.conformance} vs ${a.conformance}`);
		} else {
			const l = F[o];
			if (void 0 === l) throw new Error(`count scorer ${a.id} lacks a generated planner label`);
			e.set(o, {
				slug: o,
				algorithm: l.algorithmValue,
				label: l.label,
				conformance: a.conformance
			});
		}
	}
	return Array.from(e.values());
}(), ce = function() {
	const e = new Map(ne.map((e) => [e.slug, e])), a = [];
	for (const o of C) {
		const l = e.get(o.methodFamilyId);
		if (!l) throw new Error(`generated provenance contract references absent count family ${o.methodFamilyId}`);
		a.push({
			slug: l.slug,
			algorithm: l.algorithm,
			label: l.label,
			conformance: l.conformance,
			primitive: o.primitiveId,
			implementation: o.implementationVariantId,
			implementationLabel: o.label,
			scoringParameters: o.parameters
		});
	}
	return a;
}(), ue = s, de = N, pe = D, ve = Object.fromEntries(E.map((e) => [e, 0])), me = Object.fromEntries(U.map((e) => [e.value, 0])), Ce = K;
function be(e, a) {
	const o = l.filter((o) => "sleep_wake" === o.kind && o.family === e && (void 0 === a || o.implementation === a)).map((e) => e.supportedEpochSeconds);
	return 0 === o.length ? [] : o.reduce((e, a) => e.filter((e) => a.includes(e)));
}
function ke(e, a) {
	return e.some((e) => e === a || e < a && a % e === 0);
}
function he(e) {
	const a = l.find((a) => a.id === e);
	return a && (c.includes(a.requiredSignal) || "epoch_scores" === a.requiredSignal) ? a.supportedEpochSeconds : void 0;
}
function fe(a, o) {
	return o >= e || ke(a, o) ? o : e;
}
function ge(e) {
	const a = Object.entries(F).find(([, a]) => a.algorithmValue === e)?.[0];
	return void 0 === a ? [] : be(a, "hasib");
}
function Se(e, a, o) {
	const { configs: l, skipped: r } = e, { label: i, supported: t } = a;
	ke(t, o.epochSeconds) ? l.push(o) : r.push({
		id: o.id,
		reason: qe("unsupported_epoch_reason", {
			cell_label: o.label,
			method_label: i,
			supported_epochs: t.join(", ")
		})
	});
}
function ze(e = {}) {
	const a = new Set(e.includeFamilies ?? E), o = e.epochSeconds ?? de, l = new Set(e.excludeHasibAlgorithms ?? []), r = e.implementationVersion ?? pe, t = [], s = [];
	if (a.has("count_hasib")) {
		for (const e of ne) {
			if (l.has(e.slug)) {
				t.push({
					id: $("count_skip_entry", { method_family: e.slug }),
					reason: qe("skipped_method_reason", { algorithm_value: e.algorithm })
				});
				continue;
			}
			const a = be(e.slug);
			for (const l of Object.keys(ue)) for (const i of ue[l]) for (const _ of o) Se({
				configs: s,
				skipped: t
			}, {
				label: e.label,
				supported: a
			}, Ie({
				family: e,
				countFamily: l,
				axis: i,
				epochSeconds: _,
				implementationVersion: r
			}));
		}
		for (const e of ce) {
			if (l.has(e.slug)) continue;
			const a = be(e.slug, e.implementation), i = `${e.label} ${e.implementationLabel}`;
			for (const l of Object.keys(ue)) for (const _ of ue[l]) for (const n of o) Se({
				configs: s,
				skipped: t
			}, {
				label: i,
				supported: a
			}, Re({
				variant: e,
				countFamily: l,
				axis: _,
				epochSeconds: n,
				implementationVersion: r
			}));
		}
	}
	for (const i of Object.keys(T)) a.has(i) && s.push(je(i, r));
	if (a.has("lstm")) for (const i of e.lstmModels ?? []) s.push(...Oe(i, r));
	(e.includeConsensus ?? !0) && a.has("consensus") && s.push(...function(e, a) {
		const o = [], l = Array.from(new Set(e.filter((e) => Ne(e)).filter((e) => de.includes(e.epochSeconds)).map((e) => e.epochSeconds))).sort((e, a) => e - a);
		for (const r of l) {
			const l = `${String(r)}s`, t = e.filter((e) => Ne(e) && e.epochSeconds === r);
			if (t.length <= 1) continue;
			const { slug: s, label: _ } = Me(t);
			for (const e of L) o.push(xe({
				id: $("consensus_cell", {
					scope: s,
					strategy: e,
					epoch_seconds: r
				}),
				label: qe("consensus_cell_label", {
					scope_label: _,
					strategy_label: i[e] ?? e,
					suffix: l
				}),
				strategy: e,
				members: t,
				epochSeconds: r,
				implementationVersion: a
			}));
		}
		return o;
	}(s, r));
	const _ = function(e) {
		const a = /* @__PURE__ */ new Map(), o = [];
		for (const l of e) {
			const e = a.get(l.id);
			if (e !== l.configHash) {
				if (void 0 !== e) throw new Error(`cube plan holds ${l.id} under two configs (${e}, ${l.configHash})`);
				a.set(l.id, l.configHash), o.push(l);
			}
		}
		return o;
	}(s).map(ie);
	return {
		configs: _,
		skipped: t,
		warnings: Pe(_),
		summary: Ee({
			configs: _,
			skipped: t
		})
	};
}
let Be, we;
function ye() {
	return Be ??= ze({
		includeFamilies: ["count_hasib", "consensus"],
		epochSeconds: [30, 60],
		includeConsensus: !0
	}), Be;
}
function Ae(e) {
	return we ??= new Map(ye().configs.map((e) => [e.id, e])), we.get(e);
}
function Ee(e) {
	const a = { ...ve }, o = { ...me };
	for (const l of e.configs) a[l.family] += 1, o[l.validationStatus] += 1;
	return {
		total: e.configs.length,
		byFamily: a,
		byValidationStatus: o,
		skipped: e.skipped.length
	};
}
function xe(e) {
	const o = e.implementationVersion ?? pe, l = e.members.map((e) => e.id), r = [...e.members].sort((e, a) => e.id < a.id ? -1 : e.id > a.id ? 1 : 0).map((e) => e.configHash);
	return {
		...Te({
			id: e.id,
			family: a,
			label: e.label,
			algorithm: `consensus:${e.strategy}`,
			outputKind: v,
			epochSeconds: e.epochSeconds,
			input: {
				family: "algorithm_outputs",
				epochSeconds: e.epochSeconds,
				seriesKey: l.join(",")
			},
			parameters: {
				strategy: e.strategy,
				inputConfigIds: l,
				inputConfigHashes: r,
				inputCount: l.length
			},
			implementationVersion: o,
			validationStatus: p,
			defaultIncluded: !0,
			exploratory: !0,
			lineage: l
		}),
		conformance: _e("consensus_majority_vote")
	};
}
function Ie(e) {
	const a = Ce(e.countFamily, e.axis, e.epochSeconds), l = u(e.family.slug, e.countFamily, e.axis, e.epochSeconds) ? r : m;
	return {
		...Te({
			id: $("count_cell", {
				method_family: e.family.slug,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: t,
			label: qe("count_cell_label", {
				method_label: e.family.label,
				input_label: De(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.family.algorithm,
			outputKind: b,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: a
			},
			parameters: {
				ws3: e.epochSeconds,
				sadehNeishabouriCap300: o(e.family.slug, e.countFamily)
			},
			implementationVersion: e.implementationVersion,
			validationStatus: l,
			defaultIncluded: !0,
			exploratory: l === m,
			lineage: [a]
		}),
		conformance: e.family.conformance
	};
}
function Re(e) {
	const a = Ce(e.countFamily, e.axis, e.epochSeconds);
	return {
		...Te({
			id: $("count_cell", {
				method_family: e.variant.slug,
				implementation_variant: e.variant.implementation,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: t,
			label: qe("count_provenance_cell_label", {
				method_label: e.variant.label,
				implementation_label: e.variant.implementationLabel,
				input_label: De(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.variant.algorithm,
			outputKind: b,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: a
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
			lineage: [a]
		}),
		conformance: e.variant.conformance
	};
}
function je(e, a) {
	const o = T[e];
	if (void 0 === o) throw new Error(`no generated fixed output projection for family ${e}`);
	return {
		...Te({
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
			implementationVersion: a,
			validationStatus: o.validationStatus,
			defaultIncluded: o.defaultIncluded,
			exploratory: o.exploratory,
			lineage: o.lineageIds
		}),
		conformance: _e(o.methodBindingId)
	};
}
function Oe(e, a) {
	const o = e.thresholdPresets && e.thresholdPresets.length > 0 ? e.thresholdPresets : [A], l = _e(e.id);
	return o.map((o) => ({
		...Te({
			id: $("model_cell", {
				model_slug: Ge(e.id),
				preset_slug: Ge(o.id)
			}),
			family: P,
			label: qe("model_cell_label", {
				model_label: e.label,
				preset_label: o.label
			}),
			algorithm: e.id,
			outputKind: O,
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
			implementationVersion: a,
			validationStatus: y,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [`lstm:${e.id}`]
		}),
		conformance: l
	}));
}
function Ne(e) {
	return "sleep_wake_epoch" === e.outputKind && "consensus" !== e.family && void 0 === e.parameters.implementation;
}
function Me(e) {
	const a = new Set(e.map((e) => e.family));
	if (1 === a.size && a.has("count_hasib")) return {
		slug: `${t}_sleep_wake`,
		label: qe("count_consensus_scope_label", {})
	};
	const o = Array.from(new Set(e.filter((e) => e.family === P).map((e) => "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm).filter((e) => e.length > 0))).sort();
	if (a.has("lstm") && o.length > 0) {
		const e = o.map((e) => Ge(e)).join("_"), l = a.has(t);
		return {
			slug: l ? `${t}_${P}_${e}_sleep_wake` : `${P}_${e}_sleep_wake`,
			label: qe(l ? "count_lstm_consensus_scope_label" : "lstm_consensus_scope_label", { model_ids: o.join(", ") })
		};
	}
	return {
		slug: "all_sleep_wake",
		label: qe("all_consensus_scope_label", {})
	};
}
function Te(e) {
	return {
		...e,
		configHash: Le(e)
	};
}
function Pe(e) {
	const a = [];
	return e.some((e) => "count_hasib" === e.family && e.epochSeconds === de[0]) && a.push(qe("count_30_warning", {})), e.some((e) => "lstm" === e.family) || a.push(qe("no_lstm_warning", {})), a;
}
function qe(e, a) {
	const o = R[e];
	if (void 0 === o) throw new Error(`no generated planner message ${e}`);
	return Object.entries(a).reduce((e, [a, o]) => e.replace(`{${a}}`, String(o)), o);
}
function De(e, a, o) {
	return q[e].labelTemplate.replace("{axis}", a).replace("{axis_label}", g.axis?.[a] ?? a).replace("{epoch_seconds}", String(o));
}
function Ge(e) {
	return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function Le(e) {
	const a = Fe(e);
	let o = w.initialValue;
	for (let l = 0; l < a.length; l += 1) o ^= a.charCodeAt(l), o = Math.imul(o, w.prime) >>> 0;
	return o.toString(16).padStart(w.lowercaseHexWidth, "0");
}
function Fe(e) {
	return null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map((e) => Fe(e)).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [a]) => e.localeCompare(a)).map(([e, a]) => `${JSON.stringify(e)}:${Fe(a)}`).join(",")}}`;
}
const Ue = new Map(l.map((e) => [e.id, {
	id: e.id,
	conformance: e.conformance,
	needsModelArtifact: e.needsModelArtifact
}]));
function $e(e) {
	return Ue.get(e)?.conformance ?? null;
}
const Ve = ae, Ke = ye().configs.map((e) => ({
	value: e.id,
	label: `Tensor: ${e.label}`
})), He = new Set(_);
function We(e) {
	if (!He.has(e.method)) throw new Error(`STANDARD_ALGORITHM_OPTIONS references '${e.method}', which is not a generated scoring-method contract id.`);
	return {
		value: e.method,
		label: e.label
	};
}
const Ye = [
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
], Je = [{
	method: k.LSTM_SLEEP_WAKE,
	label: "LSTM Sleep/Wake (ONNX spectral)"
}, {
	method: k.VAN_HEES_2015,
	label: "van Hees (2015)"
}], Ze = [
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
	return "needs_model" !== $e((a = We(e)).value) ? a : {
		...a,
		disabled: !0
	};
	var a;
}), Qe = [
	...Ye.map(We),
	{
		value: X.TENSOR_MAJORITY_VOTE,
		label: "Tensor majority vote"
	},
	...Je.map(We),
	...Ze
], Xe = [...Qe, ...Ke], ea = {
	count: "Count-based sleep/wake",
	window: "Window / HDCZA",
	neural: "Neural",
	experimental: "Experimental (provisional)",
	tensor: "Tensor variants (A/B)"
}, aa = [
	"count",
	"window",
	"neural",
	"experimental",
	"tensor"
], oa = new Map(l.map((e) => [e.id, e.execution]));
function la(e) {
	if (!He.has(e)) return "tensor";
	const a = oa.get(e);
	if ("neural_model" === a) return "neural";
	if ("angle_spt" === a) return "window";
	const o = $e(e);
	return "provisional" === o || "needs_model" === o ? "experimental" : "count";
}
function ra(e) {
	const a = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = la(o.value), l = a.get(e) ?? [];
		l.push(o), a.set(e, l);
	}
	return aa.flatMap((e) => {
		const o = a.get(e);
		return o ? [{
			label: ea[e],
			options: o
		}] : [];
	});
}
ra(Qe), ra(Xe);
const ia = Object.fromEntries(I.map((e) => [e.id, {
	onsetN: e.onsetMinConsecutiveSleep,
	offsetN: e.offsetMinConsecutiveMinutes,
	offsetState: e.offsetScanState,
	label: e.label
}])), ta = ia[j.CONSECUTIVE_ONSET3S_OFFSET5S];
function sa(e) {
	return ia[e] ?? ta;
}
function _a(e) {
	return e?.markerType === M.MAIN_SLEEP;
}
function na(e) {
	return e?.markerType === M.NAP;
}
function ca(e, a) {
	return a.isInvalidNight && !0 !== a.isInvalidNightImplicit || e.some(_a) ? M.NAP : M.MAIN_SLEEP;
}
function ua(e) {
	const a = e === M.NAP ? M.NAP : M.MAIN_SLEEP;
	return [a, a === M.MAIN_SLEEP ? M.NAP : a];
}
function da(e, a) {
	return _a(e) || _a(a) ? M.MAIN_SLEEP : M.NAP;
}
function pa(e) {
	const a = [], o = [];
	for (const l of e) (_a(l) ? o : a).push(l);
	return {
		kept: a,
		cleared: o
	};
}
function va(e, a) {
	const o = "sleep" === e ? Ve.MAX_SLEEP_PERIODS_PER_DAY : Ve.MAX_NONWEAR_PERIODS_PER_DAY;
	return a > o ? `Cannot create more than ${String(o)} ${e} periods per day.` : null;
}
async function ma(e) {
	const { sleepMarkers: a, nonwearMarkers: o, isInvalidNight: l } = e, r = va("sleep", a.length) ?? va("nonwear", o.length);
	if (r) return r;
	const i = a.filter(_a).length;
	if (l && i > 0) return "An Invalid night cannot contain main sleep.";
	if (i > 1) return "A night can contain only one main sleep period.";
	if ([...a.map((e) => [e.onsetTimestamp, e.offsetTimestamp]), ...o.map((e) => [e.startTimestamp, e.endTimestamp])].some(([e, a]) => null != e && !Number.isFinite(e) || null != a && !Number.isFinite(a) || null != e && null != a && a <= e)) return "Offset must be after onset, with finite boundaries.";
	const t = a.filter((e) => null != e.onsetTimestamp && null != e.offsetTimestamp);
	return (await Promise.all(t.slice(1).map((e, a) => {
		const o = t.slice(0, a + 1);
		return H().nightIntervalOverlap(e.onsetTimestamp, e.offsetTimestamp, Float64Array.from(o, (e) => e.onsetTimestamp), Float64Array.from(o, (e) => e.offsetTimestamp), new Float64Array(o.length).fill(1));
	}))).some((e) => e.seconds.some((e) => e > 0)) ? "Sleep windows cannot overlap. Move or remove the existing window first." : null;
}
function Ca(e) {
	return void 0 !== e?.ggirBundleRevision;
}
function ba(e) {
	return Ca(e) ? "GGIR results retain their imported proposals; HDCZA replacement is unavailable." : null;
}
function ka(e, a, o) {
	return Ca(e) && a.sleepMarkers.some(_a) && !o.sleepMarkers.some(_a);
}
function ha(e, a) {
	if (a?.isInvalidNight) return { kind: "invalid" };
	const o = a?.sleepMarkers.find(_a);
	return o ? {
		kind: "scored",
		main: o
	} : {
		kind: a ? "naps/nonwear-only" : "unreviewed",
		window: e
	};
}
I.map(({ id: e, label: a }) => ({
	value: e,
	label: a
})), G.NONE, G.WEBSTER, M.MAIN_SLEEP, M.NAP, x.SMART, x.DIARY, x.HDCZA, x.L5, x.LONGEST_BOUT, x.EVENT_MARKER, x.ACTIWARE_REST_INTERVAL, x.NONE;
const fa = "GGIR nonwear", ga = {
	DIARY: J.diary,
	HDCZA: J.hdcza,
	L5: J.l5,
	SELECTED_SCORER_FIRST_LAST: J.selected_scorer_first_last,
	SELECTED_SCORER_LONGEST_BOUT: J.selected_scorer_longest_bout,
	QUIET_BOUT: J.quiet_bout,
	EVENT_MARKER: J.event_marker,
	ACTIWARE_REST_INTERVAL: J.actiware_rest_interval,
	NONE: J.none
}, Sa = {
	USE_SOURCE_A: Y.use_source_a,
	USE_SOURCE_B: Y.use_source_b,
	INTERSECTION: Y.intersection,
	UNION: Y.union,
	SOURCE_B_BOUNDED_BY_SOURCE_A: Y.source_b_bounded_by_source_a,
	SANITY_CLAMP_SOURCE_B_TO_SOURCE_A: Y.sanity_clamp_source_b_to_source_a
}, za = {
	sourceA: B.sleep_period_detection.source_a,
	sourceB: B.sleep_period_detection.source_b,
	fusionPolicy: B.sleep_period_detection.fusion_policy,
	mergeGapMinutes: B.sleep_period_detection.merge_gap_minutes,
	paddingMinutes: B.sleep_period_detection.padding_minutes,
	minOverlapJaccard: B.sleep_period_detection.min_overlap_jaccard,
	applyNonwearGate: B.sleep_period_detection.apply_nonwear_gate
};
function Ba(e) {
	const a = za;
	return e.sourceA === a.sourceA && e.sourceB === a.sourceB && e.fusionPolicy === a.fusionPolicy && e.mergeGapMinutes === a.mergeGapMinutes && e.paddingMinutes === a.paddingMinutes && e.minOverlapJaccard === a.minOverlapJaccard && e.applyNonwearGate === a.applyNonwearGate;
}
const wa = {
	[ga.DIARY]: "Diary",
	[ga.HDCZA]: "HDCZA SPT",
	[ga.L5]: "L5 least active 5h",
	[ga.SELECTED_SCORER_FIRST_LAST]: "Selected scorer first-last sleep",
	[ga.SELECTED_SCORER_LONGEST_BOUT]: "Selected scorer longest sleep bout",
	[ga.QUIET_BOUT]: "Quiet-bout least-active window",
	[ga.EVENT_MARKER]: "Event markers (button presses)",
	[ga.ACTIWARE_REST_INTERVAL]: "Actiware rest interval",
	[ga.NONE]: "None"
}, ya = Object.values(J).map((e) => ({
	value: e,
	label: wa[e]
})), Aa = [
	{
		value: Sa.USE_SOURCE_A,
		label: "Use source A"
	},
	{
		value: Sa.USE_SOURCE_B,
		label: "Use source B"
	},
	{
		value: Sa.INTERSECTION,
		label: "A intersect B"
	},
	{
		value: Sa.UNION,
		label: "A union B"
	},
	{
		value: Sa.SOURCE_B_BOUNDED_BY_SOURCE_A,
		label: "B bounded by A"
	},
	{
		value: Sa.SANITY_CLAMP_SOURCE_B_TO_SOURCE_A,
		label: "Use B, clamp to A if mismatch"
	}
];
function Ea(e) {
	return ya.find((a) => a.value === e)?.label ?? e;
}
function xa(e) {
	const a = Ia(e), o = a.applyNonwearGate ? "nonwear gate on" : "nonwear gate off";
	return `${Ea(a.sourceA)} + ${Ea(a.sourceB)}; ${function(e) {
		return Aa.find((a) => a.value === e)?.label ?? e;
	}(a.fusionPolicy)}; ${o}`;
}
function Ia(e) {
	const a = e ?? {};
	return {
		...za,
		sourceA: a.sourceA ?? a.source_a ?? za.sourceA,
		sourceB: a.sourceB ?? a.source_b ?? za.sourceB,
		fusionPolicy: a.fusionPolicy ?? a.fusion_policy ?? za.fusionPolicy,
		mergeGapMinutes: a.mergeGapMinutes ?? a.merge_gap_minutes ?? za.mergeGapMinutes,
		paddingMinutes: a.paddingMinutes ?? a.padding_minutes ?? za.paddingMinutes,
		minOverlapJaccard: a.minOverlapJaccard ?? a.min_overlap_jaccard ?? za.minOverlapJaccard,
		applyNonwearGate: a.applyNonwearGate ?? a.apply_nonwear_gate ?? za.applyNonwearGate
	};
}
function Ra(e) {
	const a = Ia(e);
	return {
		source_a: a.sourceA,
		source_b: a.sourceB,
		fusion_policy: a.fusionPolicy,
		merge_gap_minutes: a.mergeGapMinutes,
		padding_minutes: a.paddingMinutes,
		min_overlap_jaccard: a.minOverlapJaccard,
		apply_nonwear_gate: a.applyNonwearGate
	};
}
function ja(e) {
	switch (e.fusionPolicy === Sa.USE_SOURCE_B ? e.sourceB : e.sourceA) {
		case ga.DIARY: return x.DIARY;
		case ga.HDCZA: return x.HDCZA;
		case ga.L5: return x.L5;
		case ga.SELECTED_SCORER_FIRST_LAST:
		case ga.SELECTED_SCORER_LONGEST_BOUT: return x.LONGEST_BOUT;
		case ga.EVENT_MARKER: return x.EVENT_MARKER;
		case ga.ACTIWARE_REST_INTERVAL: return x.ACTIWARE_REST_INTERVAL;
		case ga.NONE: return x.NONE;
	}
	return x.NONE;
}
const Oa = {
	actigraph_epoched_csv: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	actigraph_raw_csv: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"sadeh_1994_ggir",
			"cole_kripke_1992_ggir",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"van_hees_2015",
			"van_hees_hasib_2015"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"detach_nonwear"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	actlumus_txt: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: [
			"pim",
			"zcm",
			"tat"
		]
	},
	acttrust_txt: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: [
			"pim",
			"zcm",
			"tat"
		]
	},
	geneactiv_bin: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"sadeh_1994_ggir",
			"cole_kripke_1992_ggir",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"van_hees_2015",
			"van_hees_hasib_2015"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"detach_nonwear",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	geneactiv_raw_csv: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"sadeh_1994_ggir",
			"cole_kripke_1992_ggir",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"van_hees_2015",
			"van_hees_hasib_2015"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"detach_nonwear",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	gt3x_binary: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"sadeh_1994_ggir",
			"cole_kripke_1992_ggir",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"van_hees_2015",
			"van_hees_hasib_2015"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020",
			"gt3x_capsense"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	}
}, Na = {
	actigraph_epoched_csv: {
		sourceProfileId: "actoglance.source.actigraph_epoched_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable", "provenance_receipt_unavailable"]
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable", "provenance_receipt_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	},
	actigraph_raw_csv: {
		sourceProfileId: "actoglance.source.actigraph_raw_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			mims_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["raw_signal_retained"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	actlumus_txt: {
		sourceProfileId: "actoglance.source.condor_actlumus_txt.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			melanopic_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			spectral_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	acttrust_txt: {
		sourceProfileId: "actoglance.source.condor_acttrust_txt.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	geneactiv_bin: {
		sourceProfileId: "actoglance.source.geneactiv_bin.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable", "server_output_materialization_unavailable"]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			daily_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable"]
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			mims_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["method_binding_unavailable", "runtime_proof_missing"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable", "server_output_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_event_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			temperature_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	},
	geneactiv_raw_csv: {
		sourceProfileId: "actoglance.source.geneactiv_raw_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable", "server_output_materialization_unavailable"]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			daily_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"method_binding_unavailable",
					"runtime_proof_missing",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			mims_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["raw_signal_retained"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable", "server_output_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"method_binding_unavailable",
					"runtime_proof_missing",
					"server_output_materialization_unavailable"
				]
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_event_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			temperature_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			}
		}
	},
	gt3x_binary: {
		sourceProfileId: "actoglance.source.actigraph_gt3x_binary.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			daily_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			device_wear_state_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			mims_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable", "runtime_proof_missing"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable", "runtime_proof_missing"]
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	}
}, Ma = {
	"actoglance.source.actical_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.actigraph_agd.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.activinsights_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.activpal_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.axivity_cwa.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.camntech_actiwatch_awd.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.empatica_embraceplus_avro.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: []
	},
	"actoglance.source.gaitup_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.geneactiv_epoch_csv.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !0,
		countMetrics: []
	},
	"actoglance.source.generic_consumer_wearable_table.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.generic_epoch_csv.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.generic_epoch_excel.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.generic_raw_xyz_table.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	"actoglance.source.generic_vendor_activity_table.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.ggir_generic_epoch_csv.v1": {
		sleepAlgorithms: ["van_hees_2015", "van_hees_hasib_2015"],
		nonwearAlgorithms: [
			"ggir_saved",
			"van_hees_2013",
			"van_hees_2023"
		],
		hasAnglez: !0,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.ggir_map_csv.v1": {
		sleepAlgorithms: ["van_hees_2015", "van_hees_hasib_2015"],
		nonwearAlgorithms: [],
		hasAnglez: !0,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.ggir_metashort_csv.v1": {
		sleepAlgorithms: ["van_hees_2015", "van_hees_hasib_2015"],
		nonwearAlgorithms: [
			"ggir_saved",
			"van_hees_2013",
			"van_hees_2023"
		],
		hasAnglez: !0,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.ggir_rdata.v1": {
		sleepAlgorithms: ["van_hees_2015", "van_hees_hasib_2015"],
		nonwearAlgorithms: [
			"ggir_saved",
			"van_hees_2013",
			"van_hees_2023"
		],
		hasAnglez: !0,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.mims_metric_table.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.motionwatch_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.movisens_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.nhanes_pax_minute.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.nhanes_pax_raw.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	"actoglance.source.philips_actiware_csv.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"actiware_sleep_wake"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"actiware_off_wrist"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.philips_actiwatch_aw5.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"actiware_sleep_wake"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"actiware_off_wrist"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.shimmer_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	}
}, Ta = {
	"actoglance.source.actical_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.actical_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.actigraph_agd.v1": {
		sourceProfileId: "actoglance.source.actigraph_agd.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"output_eligibility_unresolved",
					"server_source_profile_adapter_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"output_eligibility_unresolved",
					"server_source_profile_adapter_unavailable"
				]
			}
		}
	},
	"actoglance.source.activinsights_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.activinsights_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.activpal_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.activpal_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.axivity_cwa.v1": {
		sourceProfileId: "actoglance.source.axivity_cwa.v1",
		capabilities: {
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"unclassified_source_semantics",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"unclassified_source_semantics",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"unclassified_source_semantics",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.camntech_actiwatch_awd.v1": {
		sourceProfileId: "actoglance.source.camntech_actiwatch_awd.v1",
		capabilities: {
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.empatica_embraceplus_avro.v1": {
		sourceProfileId: "actoglance.source.empatica_embraceplus_avro.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			mims_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	"actoglance.source.gaitup_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.gaitup_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.geneactiv_epoch_csv.v1": {
		sourceProfileId: "actoglance.source.geneactiv_epoch_csv.v1",
		capabilities: {
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.generic_consumer_wearable_table.v1": {
		sourceProfileId: "actoglance.source.generic_consumer_wearable_table.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.generic_epoch_csv.v1": {
		sourceProfileId: "actoglance.source.generic_epoch_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	"actoglance.source.generic_epoch_excel.v1": {
		sourceProfileId: "actoglance.source.generic_epoch_excel.v1",
		capabilities: {
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	"actoglance.source.generic_raw_xyz_table.v1": {
		sourceProfileId: "actoglance.source.generic_raw_xyz_table.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			mims_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.generic_vendor_activity_table.v1": {
		sourceProfileId: "actoglance.source.generic_vendor_activity_table.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["explicit_source_mapping_required", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"parser_realization_unavailable",
					"output_eligibility_unresolved",
					"server_source_profile_adapter_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["explicit_source_mapping_required", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"parser_realization_unavailable",
					"output_eligibility_unresolved",
					"server_source_profile_adapter_unavailable"
				]
			}
		}
	},
	"actoglance.source.ggir_generic_epoch_csv.v1": {
		sourceProfileId: "actoglance.source.ggir_generic_epoch_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			daily_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_period_time_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.ggir_map_csv.v1": {
		sourceProfileId: "actoglance.source.ggir_map_csv.v1",
		capabilities: {
			daily_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_period_time_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.ggir_metashort_csv.v1": {
		sourceProfileId: "actoglance.source.ggir_metashort_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			daily_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_period_time_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	},
	"actoglance.source.ggir_rdata.v1": {
		sourceProfileId: "actoglance.source.ggir_rdata.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			daily_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["parser_realization_partial", "server_output_materialization_unavailable"]
			}
		}
	},
	"actoglance.source.mims_metric_table.v1": {
		sourceProfileId: "actoglance.source.mims_metric_table.v1",
		capabilities: {
			mims_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.motionwatch_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.motionwatch_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.movisens_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.movisens_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.nhanes_pax_minute.v1": {
		sourceProfileId: "actoglance.source.nhanes_pax_minute.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.nhanes_pax_raw.v1": {
		sourceProfileId: "actoglance.source.nhanes_pax_raw.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			mims_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.philips_actiware_csv.v1": {
		sourceProfileId: "actoglance.source.philips_actiware_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			broadband_light_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			device_wear_state_evidence_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_event_evidence_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	},
	"actoglance.source.philips_actiwatch_aw5.v1": {
		sourceProfileId: "actoglance.source.philips_actiwatch_aw5.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			broadband_light_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			device_wear_state_evidence_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			sleep_wake_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			source_event_evidence_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			}
		}
	},
	"actoglance.source.shimmer_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.shimmer_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	}
}, Pa = {
	"actoglance.source.philips_actiware_csv.v1": {
		paradigm: "actiware",
		sleepAlgorithm: "actiware_sleep_wake",
		periodGuider: "actiware_rest_interval",
		nonwearDetectors: [
			"actiware_off_wrist",
			"choi_2011",
			"choi_2012"
		],
		placementFromSource: !0,
		wakeThresholdFromRecording: !0
	},
	"actoglance.source.philips_actiwatch_aw5.v1": {
		paradigm: "actiware",
		sleepAlgorithm: "actiware_sleep_wake",
		periodGuider: "actiware_rest_interval",
		nonwearDetectors: [
			"actiware_off_wrist",
			"choi_2011",
			"choi_2012"
		],
		placementFromSource: !0,
		wakeThresholdFromRecording: !0
	}
}, qa = {
	actiware_sleep_wake: [["sleep_analysis_window_stream"], ["sleep_wake_epoch_stream"]],
	cole_kripke_1992_actilife: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	cole_kripke_1992_ggir: [["sleep_analysis_window_stream"], ["neishabouri_count_epoch_stream_60s"]],
	cole_kripke_1992_original: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	consensus_majority_vote: [["sleep_analysis_window_stream"]],
	galland_2012: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	oakley_1997: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	sadeh_1994_actilife: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	sadeh_1994_ggir: [["sleep_analysis_window_stream"], ["neishabouri_count_epoch_stream_60s"]],
	sadeh_1994_original: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	sazonov_2004: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	ucsd_scripps_2010: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	van_hees_2015: [
		["sleep_analysis_window_stream"],
		["ggir_metric_epoch_stream"],
		["sleep_period_time_window_stream"]
	],
	van_hees_hasib_2015: [
		["sleep_analysis_window_stream"],
		["ggir_metric_epoch_stream"],
		["sleep_in_bed_epoch_stream"]
	]
}, Da = {
	actiware_off_wrist: [["device_wear_state_evidence_stream"]],
	ahmadi_2020: [["algorithmic_nonwear_evidence_stream"], []],
	choi_2011: [["algorithmic_nonwear_evidence_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	choi_2012: [["algorithmic_nonwear_evidence_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	detach_nonwear: [
		["algorithmic_nonwear_evidence_stream"],
		[],
		["temperature_epoch_stream"]
	],
	ggir_saved: [["algorithmic_nonwear_evidence_stream"]],
	gt3x_capsense: [["device_wear_state_evidence_stream"]],
	troiano_2008: [["algorithmic_nonwear_evidence_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	van_hees_2013: [["algorithmic_nonwear_evidence_stream"], []],
	van_hees_2023: [["algorithmic_nonwear_evidence_stream"], []]
}, Ga = {
	diary: [],
	hdcza: [["ggir_metric_epoch_stream"]],
	l5: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	selected_scorer_first_last: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	selected_scorer_longest_bout: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	quiet_bout: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	event_marker: [["source_event_evidence_stream"]],
	actiware_rest_interval: [],
	none: []
}, La = ["diary"], Fa = {
	count_epoch_stream_60s: "has60sCounts",
	neishabouri_count_epoch_stream_60s: "has60sCounts",
	ggir_metric_epoch_stream: "hasAnglez"
};
function Ua(e, a) {
	if (void 0 === a) return [];
	for (const o of a) {
		if (0 === o.length) return [];
		const a = o.flatMap((e) => Fa[e] ?? []);
		if (a.length > 0 && !a.some((a) => !0 === e[a])) return [...new Set(a)];
	}
	return null;
}
function $a(e) {
	return Ma[e] ?? Oa[e];
}
function Va(e, a, o) {
	const l = function(e, a) {
		const o = Ta[e];
		return o ? o.capabilities[a] : Na[e]?.capabilities[a];
	}(e, a);
	return "local" === o ? "implemented" === l?.localStatus : "implemented" === l?.serverStatus;
}
function Ka(e, a, o) {
	return void 0 !== a && a.every((a) => a.some((a) => Va(e, a, o)));
}
function Ha(e, a) {
	const o = $a(e);
	if (!o || !Va(e, "source_profile_realization", a)) return;
	const l = Va(e, "ggir_metric_epoch_stream", a), r = Va(e, "neishabouri_count_epoch_stream_60s", a), i = Va(e, "count_epoch_stream_60s", a) || r, t = Va(e, "raw_acceleration_stream", a);
	return {
		sleepAlgorithms: o.sleepAlgorithms.filter((o) => function(e, a, o) {
			return function(e, a) {
				return $a(e)?.sleepAlgorithms.includes(a) ?? !1;
			}(e, a) && Ka(e, qa[a], o);
		}(e, o, a)),
		nonwearAlgorithms: o.nonwearAlgorithms.filter((o) => function(e, a, o) {
			return function(e, a) {
				return $a(e)?.nonwearAlgorithms.includes(a) ?? !1;
			}(e, a) && Ka(e, Da[a], o);
		}(e, o, a)),
		hasAnglez: o.hasAnglez && l,
		has60sCounts: o.has60sCounts && i,
		hasRawAccel: o.hasRawAccel && t,
		countMetrics: o.countMetrics.filter((e) => "neishabouri" === e ? r : "zero_crossing" !== e && i)
	};
}
function Wa(e, a) {
	return "boolean" === e.kind ? "boolean" == typeof a : "enum" === e.kind ? "string" == typeof a && !!e.members?.includes(a) : "number" == typeof a && Number.isFinite(a) && ("integer" !== e.kind || Number.isInteger(a)) && (void 0 === e.minimum || a >= e.minimum) && (void 0 === e.maximum || a <= e.maximum);
}
const Ya = { eventmarker_adj: !0 }, Ja = {
	use_saved_rest_intervals: { kind: "boolean" },
	rest_autoscore: {
		kind: "enum",
		members: [
			"off",
			"actiware",
			"screens"
		],
		enum: "ActiwareRestAutoscore"
	}
}, Za = {
	use_saved_rest_intervals: !0,
	rest_autoscore: "actiware"
};
function Qa(e) {
	const a = null === e || "object" != typeof e || Array.isArray(e) ? {} : e;
	return Object.fromEntries(Object.entries(Ja).map(([e, o]) => [e, Wa(o, a[e]) ? a[e] : Za[e]]));
}
const Xa = /* @__PURE__ */ new Set([V.GGIR_5S_UPLOAD, V.EPOCHS_5S_GGIR]);
function eo(e) {
	return !Xa.has(e?.sourceType);
}
function ao(e) {
	return Object.values(Z).includes(e) ? e : d.analysis_paradigm;
}
function oo(e, a) {
	const o = e?.sourceProfileId, l = o ? Pa[o] ?? null : null;
	return l?.paradigm === a ? l : null;
}
function lo(e) {
	const a = e?.sourceProfileId;
	return null != a && void 0 !== Pa[a];
}
function ro(e, a) {
	return function(e, a) {
		return null !== oo(e, a);
	}(e, ao(a)) && eo(e);
}
function io(e, a, o) {
	const l = oo(o, a), r = void 0 === e.nonwearDetectorsGgir ? e : {
		...e,
		nonwearDetectorsGgir: yo(e.nonwearDetectorsGgir, o)
	};
	if (!l) return {
		...r,
		algorithm: _o(e.algorithm, o),
		placementFromSource: !1
	};
	const i = void 0 !== o?.resolvedCapabilities && !o.resolvedCapabilities.includes("device_wear_state_evidence_stream");
	return {
		...r,
		algorithm: l.sleepAlgorithm,
		periodGuider: l.periodGuider ?? e.periodGuider,
		nonwearDetectorsCounts: so(e.nonwearDetectorsCounts, l.nonwearDetectors, i),
		placementFromSource: l.placementFromSource
	};
}
const to = /* @__PURE__ */ new WeakMap();
function so(e, a, o) {
	const l = `${a.join(",")}|${String(o)}`;
	let r = to.get(e);
	r || to.set(e, r = /* @__PURE__ */ new Map());
	const i = r.get(l);
	if (i) return i;
	const t = Object.freeze(e.filter((e) => a.includes(e) && !(o && "actiware_off_wrist" === e)));
	return r.set(l, t), t;
}
function _o(e, a) {
	const o = (l = a?.sourceType, l && Xa.has(l) ? k.VAN_HEES_2015 : null);
	var l;
	return null === o || n(e) ? e : o;
}
function no(e, a) {
	return io({
		algorithm: e.currentAlgorithm,
		periodGuider: e.periodGuider,
		nonwearDetectorsCounts: e.nonwearDetectorsCounts,
		...void 0 === e.nonwearDetectorsGgir ? {} : { nonwearDetectorsGgir: e.nonwearDetectorsGgir }
	}, ao(e.analysisParadigm), a);
}
function co(e) {
	const a = e.currentFileId;
	return {
		sourceType: e.currentFileSourceType,
		ggirBundleRevision: null == a ? void 0 : e.availableFiles.find((e) => e.id === a)?.ggirBundleRevision,
		sourceProfileId: null == a ? null : e.availableFiles.find((e) => e.id === a)?.sourceProfileId ?? null
	};
}
function uo(e) {
	return no(e, co(e)).algorithm;
}
const po = {
	one_per_night: (e) => "boolean" == typeof e,
	nap_detection: (e) => "boolean" == typeof e,
	min_nap_minutes: (e) => Number.isInteger(e) && e >= 15 && e <= 75,
	nap_sensitivity: (e) => Object.values(Q).includes(e),
	eventmarker_adj: (e) => "boolean" == typeof e,
	actogram_start_seconds: (e) => Number.isInteger(e) && e >= 0 && e < 86400,
	sleep_onset_minutes: (e) => Number.isInteger(e) && e >= 1,
	sleep_end_minutes: (e) => Number.isInteger(e) && e >= 1,
	sleep_detection: (e) => Object.values(oe).includes(e),
	sleep_onset_epochs: (e) => Number.isInteger(e) && e >= 1,
	sleep_end_epochs: (e) => Number.isInteger(e) && e >= 1,
	wake_threshold_selection: (e) => Object.values(ee).includes(e),
	wake_threshold: (e) => "number" == typeof e && Number.isFinite(e) && e >= 0
}, vo = Object.keys(po), mo = [
	"one_per_night",
	"nap_detection",
	"min_nap_minutes",
	"nap_sensitivity",
	"eventmarker_adj",
	"actogram_start_seconds"
];
function Co(e) {
	if (null == e || "object" != typeof e || Array.isArray(e)) return {};
	const a = e, o = {};
	for (const r of vo) void 0 !== a[r] && po[r](a[r]) && (o[r] = a[r]);
	const l = o.wake_threshold_selection;
	return void 0 !== l && l !== ee.custom && delete o.wake_threshold, o;
}
const bo = {
	[ee.low]: 20,
	[ee.medium]: 40,
	[ee.high]: 80
};
function ko(e, a) {
	const o = Co(a);
	if (0 === Object.keys(o).length) return e;
	const l = {
		...e,
		...o
	}, r = void 0 === o.wake_threshold_selection ? void 0 : bo[o.wake_threshold_selection];
	return void 0 !== r && (l.wake_threshold = r), void 0 !== o.actogram_start_seconds && (l.actogram_start_hour = Math.floor(o.actogram_start_seconds / 3600)), l;
}
function ho(e, a) {
	return "nap_detection" === a ? e.nap_detection ?? !1 : "min_nap_minutes" === a ? e.min_nap_minutes ?? 40 : "nap_sensitivity" === a ? e.nap_sensitivity ?? Q.high : "actogram_start_seconds" === a ? function(e) {
		return e.actogram_start_seconds ?? 3600 * function(e, a) {
			const o = e[a];
			if (null == o) throw new Error(`The stored Actiware settings lack ${a}; import the file again.`);
			return o;
		}(e, "actogram_start_hour");
	}(e) : e[a];
}
function fo(e, a) {
	return vo.every((o) => ho(e, o) === ho(a, o));
}
function go(e, a) {
	return mo.some((o) => ho(e, o) !== ho(a, o));
}
function So(e, a, o) {
	if (null == a) return a;
	const l = Ya, r = zo(e, a, o).map((e) => [e, l[e]]);
	return {
		...Object.fromEntries(r),
		...Co(a)
	};
}
function zo(e, a, o) {
	if (null == a) return [];
	const l = Co(a);
	return !o.some((e) => "rest" === e.kind) || go(e, ko(e, l)) ? Object.keys(Ya).filter((e) => void 0 === l[e]) : [];
}
const Bo = Object.freeze([W.ggir_saved]), wo = {
	[W.van_hees_2013]: Object.freeze([W.van_hees_2013]),
	[W.van_hees_2023]: Object.freeze([W.van_hees_2023])
};
function yo(e, a) {
	const o = Ca(a);
	return !o && e.includes(W.ggir_saved) && a?.ggirNonwearDetector ? a.ggirNonwearDetector === W.van_hees_2013 ? wo.van_hees_2013 : wo.van_hees_2023 : o && e.some((e) => e === W.van_hees_2023 || e === W.van_hees_2013) ? Bo : e.every((e) => e === W.ggir_saved === o) ? e : so(e, o ? Bo : e.filter((e) => e !== W.ggir_saved), !1);
}
export { Ae as $, xa as A, _a as B, Ua as C, za as D, Va as E, fa as F, da as G, va as H, ka as I, Ve as J, ca as K, ha as L, ja as M, Ia as N, Sa as O, Ra as P, ze as Q, ba as R, Oa as S, $a as T, ma as U, na as V, pa as W, ue as X, sa as Y, ne as Z, Za as _, ko as a, ge as at, La as b, no as c, ao as d, Ce as et, io as f, lo as g, eo as h, co as i, te as it, Ba as j, ga as k, Co as l, fo as m, So as n, ke as nt, uo as o, fe as ot, go as p, ua as q, ro as r, be as rt, yo as s, Le as st, zo as t, he as tt, oo as u, Qa as v, Ha as w, Ga as x, Da as y, Ca as z };
