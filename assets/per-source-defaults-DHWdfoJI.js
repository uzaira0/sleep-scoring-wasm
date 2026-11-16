import { $ as e, B as a, Ct as o, F as r, G as l, H as t, I as i, K as s, L as n, Q as _, Qt as c, R as u, Sn as d, St as p, U as v, V as m, W as C, X as b, Z as h, _t as g, an as f, at as S, cn as w, ct as y, et as B, ft as z, gt as A, ht as E, it as T, k as x, lt as R, mt as I, ot as N, pt as O, q as M, rn as j, rt as P, sn as D, st as q, tt as G, un as L, vt as F, w as U, wn as W, wt as $, y as V, z as H } from "./schema-D8rqa1Y6.js";
import { r as K, s as Y } from "./workers-CrU4fDAf.js";
import { M as J, O as Z, T as Q, f as X, h as ee, j as ae, k as oe, m as re } from "./workspace-db-tot7PUXb.js";
const le = /* @__PURE__ */ new WeakSet();
function te(e) {
	if (null !== e && "object" == typeof e && !Object.isFrozen(e)) {
		Object.freeze(e);
		for (const a of Object.values(e)) te(a);
	}
	return e;
}
function ie(e) {
	return le.add(te(e)), e;
}
function se(e) {
	if (null === e || "object" != typeof e || !le.has(e)) return null;
	const a = e, o = (r = a.id, null === E(r) ? null : r);
	var r;
	if (null === o) return null;
	const l = Object.fromEntries(Object.entries(a).filter(([e]) => !P.excludedFieldNames.includes(e)));
	return {
		cellId: o,
		implementationVersion: a.implementationVersion,
		configHash: Fe(l)
	};
}
const ne = new Map(p.map((e) => [e.id, e.conformance]));
function _e(e) {
	return ne.get(e) ?? "conformant";
}
const ce = function() {
	const e = /* @__PURE__ */ new Map();
	for (const a of p) {
		if ("sleep_wake" !== a.kind) continue;
		if (!M.includes(a.requiredSignal)) continue;
		if (B.includes(a.execution)) continue;
		const o = a.family, r = e.get(o);
		if (r) {
			if (r.conformance !== a.conformance) throw new Error(`count scorer family ${o} has conflicting conformance across variants: ${r.conformance} vs ${a.conformance}`);
		} else {
			const r = S[o];
			if (void 0 === r) throw new Error(`count scorer ${a.id} lacks a generated planner label`);
			e.set(o, {
				slug: o,
				algorithm: r.algorithmValue,
				label: r.label,
				conformance: a.conformance
			});
		}
	}
	return Array.from(e.values());
}(), ue = function() {
	const e = new Map(ce.map((e) => [e.slug, e])), a = [];
	for (const o of l) {
		const r = e.get(o.methodFamilyId);
		if (!r) throw new Error(`generated provenance contract references absent count family ${o.methodFamilyId}`);
		a.push({
			slug: r.slug,
			algorithm: r.algorithm,
			label: r.label,
			conformance: r.conformance,
			primitive: o.primitiveId,
			implementation: o.implementationVariantId,
			implementationLabel: o.label,
			scoringParameters: o.parameters
		});
	}
	return a;
}(), de = m, pe = h, ve = _, me = Object.fromEntries(e.map((e) => [e, 0])), Ce = Object.fromEntries(O.map((e) => [e.value, 0])), be = I;
function he(e, a) {
	const o = p.filter((o) => "sleep_wake" === o.kind && o.family === e && (void 0 === a || o.implementation === a)).map((e) => e.supportedEpochSeconds);
	return 0 === o.length ? [] : o.reduce((e, a) => e.filter((e) => a.includes(e)));
}
function ke(e, a) {
	return e.some((e) => e === a || e < a && a % e === 0);
}
function ge(e) {
	const a = p.find((a) => a.id === e);
	return a && (M.includes(a.requiredSignal) || "epoch_scores" === a.requiredSignal) ? a.supportedEpochSeconds : void 0;
}
function fe(e, a) {
	return a >= U || ke(e, a) ? a : U;
}
function Se(e) {
	const a = Object.entries(S).find(([, a]) => a.algorithmValue === e)?.[0];
	return void 0 === a ? [] : he(a, "hasib");
}
function we(e, a, o) {
	const { configs: r, skipped: l } = e, { label: t, supported: i } = a;
	ke(i, o.epochSeconds) ? r.push(o) : l.push({
		id: o.id,
		reason: qe("unsupported_epoch_reason", {
			cell_label: o.label,
			method_label: t,
			supported_epochs: i.join(", ")
		})
	});
}
function ye(a = {}) {
	const o = new Set(a.includeFamilies ?? e), r = a.epochSeconds ?? pe, l = new Set(a.excludeHasibAlgorithms ?? []), t = a.implementationVersion ?? ve, i = [], s = [];
	if (o.has("count_hasib")) {
		for (const e of ce) {
			if (l.has(e.slug)) {
				i.push({
					id: A("count_skip_entry", { method_family: e.slug }),
					reason: qe("skipped_method_reason", { algorithm_value: e.algorithm })
				});
				continue;
			}
			const a = he(e.slug);
			for (const o of Object.keys(de)) for (const l of de[o]) for (const n of r) we({
				configs: s,
				skipped: i
			}, {
				label: e.label,
				supported: a
			}, Re({
				family: e,
				countFamily: o,
				axis: l,
				epochSeconds: n,
				implementationVersion: t
			}));
		}
		for (const e of ue) {
			if (l.has(e.slug)) continue;
			const a = he(e.slug, e.implementation), o = `${e.label} ${e.implementationLabel}`;
			for (const l of Object.keys(de)) for (const n of de[l]) for (const _ of r) we({
				configs: s,
				skipped: i
			}, {
				label: o,
				supported: a
			}, Ie({
				variant: e,
				countFamily: l,
				axis: n,
				epochSeconds: _,
				implementationVersion: t
			}));
		}
	}
	for (const e of Object.keys(G)) o.has(e) && s.push(Ne(e, t));
	if (o.has("lstm")) for (const e of a.lstmModels ?? []) s.push(...Oe(e, t));
	(a.includeConsensus ?? !0) && o.has("consensus") && s.push(...function(e, a) {
		const o = [], r = Array.from(new Set(e.filter((e) => Me(e)).filter((e) => pe.includes(e.epochSeconds)).map((e) => e.epochSeconds))).sort((e, a) => e - a);
		for (const l of r) {
			const r = `${String(l)}s`, t = e.filter((e) => Me(e) && e.epochSeconds === l);
			if (t.length <= 1) continue;
			const { slug: i, label: s } = je(t);
			for (const e of b) o.push(xe({
				id: A("consensus_cell", {
					scope: i,
					strategy: e,
					epoch_seconds: l
				}),
				label: qe("consensus_cell_label", {
					scope_label: s,
					strategy_label: n[e] ?? e,
					suffix: r
				}),
				strategy: e,
				members: t,
				epochSeconds: l,
				implementationVersion: a
			}));
		}
		return o;
	}(s, t));
	const _ = function(e) {
		const a = /* @__PURE__ */ new Map(), o = [];
		for (const r of e) {
			const e = a.get(r.id);
			if (e !== r.configHash) {
				if (void 0 !== e) throw new Error(`cube plan holds ${r.id} under two configs (${e}, ${r.configHash})`);
				a.set(r.id, r.configHash), o.push(r);
			}
		}
		return o;
	}(s).map(ie);
	return {
		configs: _,
		skipped: i,
		warnings: De(_),
		summary: Te({
			configs: _,
			skipped: i
		})
	};
}
let Be, ze;
function Ae() {
	return Be ??= ye({
		includeFamilies: ["count_hasib", "consensus"],
		epochSeconds: [30, 60],
		includeConsensus: !0
	}), Be;
}
function Ee(e) {
	return ze ??= new Map(Ae().configs.map((e) => [e.id, e])), ze.get(e);
}
function Te(e) {
	const a = { ...me }, o = { ...Ce };
	for (const r of e.configs) a[r.family] += 1, o[r.validationStatus] += 1;
	return {
		total: e.configs.length,
		byFamily: a,
		byValidationStatus: o,
		skipped: e.skipped.length
	};
}
function xe(e) {
	const a = e.implementationVersion ?? ve, o = e.members.map((e) => e.id), l = [...e.members].sort((e, a) => e.id < a.id ? -1 : e.id > a.id ? 1 : 0).map((e) => e.configHash);
	return {
		...Pe({
			id: e.id,
			family: r,
			label: e.label,
			algorithm: `consensus:${e.strategy}`,
			outputKind: i,
			epochSeconds: e.epochSeconds,
			input: {
				family: "algorithm_outputs",
				epochSeconds: e.epochSeconds,
				seriesKey: o.join(",")
			},
			parameters: {
				strategy: e.strategy,
				inputConfigIds: o,
				inputConfigHashes: l,
				inputCount: o.length
			},
			implementationVersion: a,
			validationStatus: u,
			defaultIncluded: !0,
			exploratory: !0,
			lineage: o
		}),
		conformance: _e("consensus_majority_vote")
	};
}
function Re(e) {
	const o = be(e.countFamily, e.axis, e.epochSeconds), r = g(e.family.slug, e.countFamily, e.axis, e.epochSeconds) ? a : H;
	return {
		...Pe({
			id: A("count_cell", {
				method_family: e.family.slug,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: v,
			label: qe("count_cell_label", {
				method_label: e.family.label,
				input_label: Ge(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.family.algorithm,
			outputKind: C,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: o
			},
			parameters: {
				ws3: e.epochSeconds,
				sadehNeishabouriCap300: F(e.family.slug, e.countFamily)
			},
			implementationVersion: e.implementationVersion,
			validationStatus: r,
			defaultIncluded: !0,
			exploratory: r === H,
			lineage: [o]
		}),
		conformance: e.family.conformance
	};
}
function Ie(e) {
	const a = be(e.countFamily, e.axis, e.epochSeconds);
	return {
		...Pe({
			id: A("count_cell", {
				method_family: e.variant.slug,
				implementation_variant: e.variant.implementation,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: v,
			label: qe("count_provenance_cell_label", {
				method_label: e.variant.label,
				implementation_label: e.variant.implementationLabel,
				input_label: Ge(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.variant.algorithm,
			outputKind: C,
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
			validationStatus: s,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [a]
		}),
		conformance: e.variant.conformance
	};
}
function Ne(e, a) {
	const o = G[e];
	if (void 0 === o) throw new Error(`no generated fixed output projection for family ${e}`);
	return {
		...Pe({
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
	const o = e.thresholdPresets && e.thresholdPresets.length > 0 ? e.thresholdPresets : [q], r = _e(e.id);
	return o.map((o) => ({
		...Pe({
			id: A("model_cell", {
				model_slug: Le(e.id),
				preset_slug: Le(o.id)
			}),
			family: y,
			label: qe("model_cell_label", {
				model_label: e.label,
				preset_label: o.label
			}),
			algorithm: e.id,
			outputKind: R,
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
			validationStatus: N,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [`lstm:${e.id}`]
		}),
		conformance: r
	}));
}
function Me(e) {
	return "sleep_wake_epoch" === e.outputKind && "consensus" !== e.family && void 0 === e.parameters.implementation;
}
function je(e) {
	const a = new Set(e.map((e) => e.family));
	if (1 === a.size && a.has("count_hasib")) return {
		slug: `${v}_sleep_wake`,
		label: qe("count_consensus_scope_label", {})
	};
	const o = Array.from(new Set(e.filter((e) => e.family === y).map((e) => "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm).filter((e) => e.length > 0))).sort();
	if (a.has("lstm") && o.length > 0) {
		const e = o.map((e) => Le(e)).join("_"), r = a.has(v);
		return {
			slug: r ? `${v}_${y}_${e}_sleep_wake` : `${y}_${e}_sleep_wake`,
			label: qe(r ? "count_lstm_consensus_scope_label" : "lstm_consensus_scope_label", { model_ids: o.join(", ") })
		};
	}
	return {
		slug: "all_sleep_wake",
		label: qe("all_consensus_scope_label", {})
	};
}
function Pe(e) {
	return {
		...e,
		configHash: Fe(e)
	};
}
function De(e) {
	const a = [];
	return e.some((e) => "count_hasib" === e.family && e.epochSeconds === pe[0]) && a.push(qe("count_30_warning", {})), e.some((e) => "lstm" === e.family) || a.push(qe("no_lstm_warning", {})), a;
}
function qe(e, a) {
	const o = T[e];
	if (void 0 === o) throw new Error(`no generated planner message ${e}`);
	return Object.entries(a).reduce((e, [a, o]) => e.replace(`{${a}}`, String(o)), o);
}
function Ge(e, a, o) {
	return t[e].labelTemplate.replace("{axis}", a).replace("{axis_label}", z.axis?.[a] ?? a).replace("{epoch_seconds}", String(o));
}
function Le(e) {
	return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function Fe(e) {
	const a = Ue(e);
	let o = P.initialValue;
	for (let r = 0; r < a.length; r += 1) o ^= a.charCodeAt(r), o = Math.imul(o, P.prime) >>> 0;
	return o.toString(16).padStart(P.lowercaseHexWidth, "0");
}
function Ue(e) {
	return null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map((e) => Ue(e)).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [a]) => e.localeCompare(a)).map(([e, a]) => `${JSON.stringify(e)}:${Ue(a)}`).join(",")}}`;
}
const We = new Map(p.map((e) => [e.id, {
	id: e.id,
	conformance: e.conformance,
	needsModelArtifact: e.needsModelArtifact
}]));
function $e(e) {
	return We.get(e)?.conformance ?? null;
}
const Ve = Z, He = Ae().configs.map((e) => ({
	value: e.id,
	label: `Tensor: ${e.label}`
})), Ke = new Set(o);
function Ye(e) {
	if (!Ke.has(e.method)) throw new Error(`STANDARD_ALGORITHM_OPTIONS references '${e.method}', which is not a generated scoring-method contract id.`);
	return {
		value: e.method,
		label: e.label
	};
}
const Je = [
	{
		method: c.SADEH_1994_ACTILIFE,
		label: "Sadeh (1994) ActiLife - Recommended"
	},
	{
		method: c.SADEH_1994_ORIGINAL,
		label: "Sadeh (1994) Original"
	},
	{
		method: c.SADEH_1994_GGIR,
		label: "Sadeh (1994) GGIR / zero-crossing Y"
	},
	{
		method: c.COLE_KRIPKE_1992_ACTILIFE,
		label: "Cole-Kripke (1992) ActiLife"
	},
	{
		method: c.COLE_KRIPKE_1992_ORIGINAL,
		label: "Cole-Kripke (1992) Original"
	},
	{
		method: c.COLE_KRIPKE_1992_GGIR,
		label: "Cole-Kripke (1992) GGIR / zero-crossing Y"
	}
], Ze = [{
	method: c.LSTM_SLEEP_WAKE,
	label: "LSTM Sleep/Wake (ONNX spectral)"
}, {
	method: c.VAN_HEES_2015,
	label: "van Hees (2015)"
}], Qe = [
	{
		method: c.UCSD_SCRIPPS_2010,
		label: "UCSD / Scripps (2010)"
	},
	{
		method: c.SAZONOV_2004,
		label: "Sazonov (2004) — provisional"
	},
	{
		method: c.SYED_CNN,
		label: "Syed CNN — needs model"
	},
	{
		method: c.ACTIWARE_SLEEP_WAKE,
		label: "Actiware Sleep/Wake"
	}
].map((e) => {
	return "needs_model" !== $e((a = Ye(e)).value) ? a : {
		...a,
		disabled: !0
	};
	var a;
}), Xe = [
	...Je.map(Ye),
	{
		value: re.TENSOR_MAJORITY_VOTE,
		label: "Tensor majority vote"
	},
	...Ze.map(Ye),
	...Qe
], ea = [...Xe, ...He], aa = {
	count: "Count-based sleep/wake",
	window: "Window / HDCZA",
	neural: "Neural",
	experimental: "Experimental (provisional)",
	tensor: "Tensor variants (A/B)"
}, oa = [
	"count",
	"window",
	"neural",
	"experimental",
	"tensor"
], ra = new Map(p.map((e) => [e.id, e.execution]));
function la(e) {
	if (!Ke.has(e)) return "tensor";
	const a = ra.get(e);
	if ("neural_model" === a) return "neural";
	if ("angle_spt" === a) return "window";
	const o = $e(e);
	return "provisional" === o || "needs_model" === o ? "experimental" : "count";
}
function ta(e) {
	const a = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = la(o.value), r = a.get(e) ?? [];
		r.push(o), a.set(e, r);
	}
	return oa.flatMap((e) => {
		const o = a.get(e);
		return o ? [{
			label: aa[e],
			options: o
		}] : [];
	});
}
ta(Xe), ta(ea);
const ia = Object.fromEntries($.map((e) => [e.id, {
	onsetN: e.onsetMinConsecutiveSleep,
	offsetN: e.offsetMinConsecutiveMinutes,
	offsetState: e.offsetScanState,
	label: e.label
}])), sa = ia[L.CONSECUTIVE_ONSET3S_OFFSET5S];
function na(e) {
	return ia[e] ?? sa;
}
function _a(e) {
	return e?.markerType === j.MAIN_SLEEP;
}
function ca(e) {
	return e?.markerType === j.NAP;
}
function ua(e, a) {
	return a.isInvalidNight && !0 !== a.isInvalidNightImplicit || e.some(_a) ? j.NAP : j.MAIN_SLEEP;
}
function da(e) {
	const a = e === j.NAP ? j.NAP : j.MAIN_SLEEP;
	return [a, a === j.MAIN_SLEEP ? j.NAP : a];
}
function pa(e, a) {
	return _a(e) || _a(a) ? j.MAIN_SLEEP : j.NAP;
}
function va(e) {
	const a = [], o = [];
	for (const r of e) (_a(r) ? o : a).push(r);
	return {
		kept: a,
		cleared: o
	};
}
function ma(e, a) {
	const o = "sleep" === e ? Ve.MAX_SLEEP_PERIODS_PER_DAY : Ve.MAX_NONWEAR_PERIODS_PER_DAY;
	return a > o ? `Cannot create more than ${String(o)} ${e} periods per day.` : null;
}
async function Ca(e) {
	const { sleepMarkers: a, nonwearMarkers: o, isInvalidNight: r } = e, l = ma("sleep", a.length) ?? ma("nonwear", o.length);
	if (l) return l;
	const t = a.filter(_a).length;
	if (r && t > 0) return "An Invalid night cannot contain main sleep.";
	if (t > 1) return "A night can contain only one main sleep period.";
	if ([...a.map((e) => [e.onsetTimestamp, e.offsetTimestamp]), ...o.map((e) => [e.startTimestamp, e.endTimestamp])].some(([e, a]) => null != e && !Number.isFinite(e) || null != a && !Number.isFinite(a) || null != e && null != a && a <= e)) return "Offset must be after onset, with finite boundaries.";
	const i = a.filter((e) => null != e.onsetTimestamp && null != e.offsetTimestamp);
	return (await Promise.all(i.slice(1).map((e, a) => {
		const o = i.slice(0, a + 1);
		return K().nightIntervalOverlap(e.onsetTimestamp, e.offsetTimestamp, Float64Array.from(o, (e) => e.onsetTimestamp), Float64Array.from(o, (e) => e.offsetTimestamp), new Float64Array(o.length).fill(1));
	}))).some((e) => e.seconds.some((e) => e > 0)) ? "Sleep windows cannot overlap. Move or remove the existing window first." : null;
}
function ba(e) {
	return void 0 !== e?.ggirBundleRevision;
}
function ha(e) {
	return ba(e) ? "GGIR results retain their imported proposals; HDCZA replacement is unavailable." : null;
}
function ka(e, a, o) {
	return ba(e) && a.sleepMarkers.some(_a) && !o.sleepMarkers.some(_a);
}
function ga(e, a) {
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
$.map(({ id: e, label: a }) => ({
	value: e,
	label: a
})), w.NONE, w.WEBSTER, j.MAIN_SLEEP, j.NAP, f.SMART, f.DIARY, f.HDCZA, f.L5, f.LONGEST_BOUT, f.EVENT_MARKER, f.ACTIWARE_REST_INTERVAL, f.NONE;
const fa = "GGIR nonwear", Sa = {
	DIARY: J.diary,
	HDCZA: J.hdcza,
	L5: J.l5,
	SELECTED_SCORER_FIRST_LAST: J.selected_scorer_first_last,
	SELECTED_SCORER_LONGEST_BOUT: J.selected_scorer_longest_bout,
	QUIET_BOUT: J.quiet_bout,
	EVENT_MARKER: J.event_marker,
	ACTIWARE_REST_INTERVAL: J.actiware_rest_interval,
	NONE: J.none
}, wa = {
	USE_SOURCE_A: ae.use_source_a,
	USE_SOURCE_B: ae.use_source_b,
	INTERSECTION: ae.intersection,
	UNION: ae.union,
	SOURCE_B_BOUNDED_BY_SOURCE_A: ae.source_b_bounded_by_source_a,
	SANITY_CLAMP_SOURCE_B_TO_SOURCE_A: ae.sanity_clamp_source_b_to_source_a
}, ya = {
	sourceA: d.sleep_period_detection.source_a,
	sourceB: d.sleep_period_detection.source_b,
	fusionPolicy: d.sleep_period_detection.fusion_policy,
	mergeGapMinutes: d.sleep_period_detection.merge_gap_minutes,
	paddingMinutes: d.sleep_period_detection.padding_minutes,
	minOverlapJaccard: d.sleep_period_detection.min_overlap_jaccard,
	applyNonwearGate: d.sleep_period_detection.apply_nonwear_gate
};
function Ba(e) {
	const a = ya;
	return e.sourceA === a.sourceA && e.sourceB === a.sourceB && e.fusionPolicy === a.fusionPolicy && e.mergeGapMinutes === a.mergeGapMinutes && e.paddingMinutes === a.paddingMinutes && e.minOverlapJaccard === a.minOverlapJaccard && e.applyNonwearGate === a.applyNonwearGate;
}
const za = {
	[Sa.DIARY]: "Diary",
	[Sa.HDCZA]: "HDCZA SPT",
	[Sa.L5]: "L5 least active 5h",
	[Sa.SELECTED_SCORER_FIRST_LAST]: "Selected scorer first-last sleep",
	[Sa.SELECTED_SCORER_LONGEST_BOUT]: "Selected scorer longest sleep bout",
	[Sa.QUIET_BOUT]: "Quiet-bout least-active window",
	[Sa.EVENT_MARKER]: "Event markers (button presses)",
	[Sa.ACTIWARE_REST_INTERVAL]: "Actiware rest interval",
	[Sa.NONE]: "None"
}, Aa = Object.values(J).map((e) => ({
	value: e,
	label: za[e]
})), Ea = [
	{
		value: wa.USE_SOURCE_A,
		label: "Use source A"
	},
	{
		value: wa.USE_SOURCE_B,
		label: "Use source B"
	},
	{
		value: wa.INTERSECTION,
		label: "A intersect B"
	},
	{
		value: wa.UNION,
		label: "A union B"
	},
	{
		value: wa.SOURCE_B_BOUNDED_BY_SOURCE_A,
		label: "B bounded by A"
	},
	{
		value: wa.SANITY_CLAMP_SOURCE_B_TO_SOURCE_A,
		label: "Use B, clamp to A if mismatch"
	}
];
function Ta(e) {
	return Aa.find((a) => a.value === e)?.label ?? e;
}
function xa(e) {
	const a = Ra(e), o = a.applyNonwearGate ? "nonwear gate on" : "nonwear gate off";
	return `${Ta(a.sourceA)} + ${Ta(a.sourceB)}; ${function(e) {
		return Ea.find((a) => a.value === e)?.label ?? e;
	}(a.fusionPolicy)}; ${o}`;
}
function Ra(e) {
	const a = e ?? {};
	return {
		...ya,
		sourceA: a.sourceA ?? a.source_a ?? ya.sourceA,
		sourceB: a.sourceB ?? a.source_b ?? ya.sourceB,
		fusionPolicy: a.fusionPolicy ?? a.fusion_policy ?? ya.fusionPolicy,
		mergeGapMinutes: a.mergeGapMinutes ?? a.merge_gap_minutes ?? ya.mergeGapMinutes,
		paddingMinutes: a.paddingMinutes ?? a.padding_minutes ?? ya.paddingMinutes,
		minOverlapJaccard: a.minOverlapJaccard ?? a.min_overlap_jaccard ?? ya.minOverlapJaccard,
		applyNonwearGate: a.applyNonwearGate ?? a.apply_nonwear_gate ?? ya.applyNonwearGate
	};
}
function Ia(e) {
	const a = Ra(e);
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
function Na(e) {
	switch (e.fusionPolicy === wa.USE_SOURCE_B ? e.sourceB : e.sourceA) {
		case Sa.DIARY: return f.DIARY;
		case Sa.HDCZA: return f.HDCZA;
		case Sa.L5: return f.L5;
		case Sa.SELECTED_SCORER_FIRST_LAST:
		case Sa.SELECTED_SCORER_LONGEST_BOUT: return f.LONGEST_BOUT;
		case Sa.EVENT_MARKER: return f.EVENT_MARKER;
		case Sa.ACTIWARE_REST_INTERVAL: return f.ACTIWARE_REST_INTERVAL;
		case Sa.NONE: return f.NONE;
	}
	return f.NONE;
}
const Oa = "diary", Ma = "none";
function ja(e) {
	return e === w.WEBSTER ? { preset: e } : void 0;
}
const Pa = new Set(Object.values(c));
function Da(e) {
	if (!e) return [];
	const a = [];
	for (const [o, r] of e) null != o && "" !== o.trim() && a.push({
		onset_time: o,
		offset_time: r ?? null
	});
	return a;
}
function qa(e) {
	if (!e) return [];
	const a = [];
	for (const [o, r] of e) null != o && null != r && "" !== o.trim() && "" !== r.trim() && a.push({
		start_time: o,
		end_time: r
	});
	return a;
}
function Ga(e, a) {
	const o = (e) => ({
		source_a: e,
		source_b: "none",
		fusion_policy: "use_source_a",
		apply_nonwear_gate: !1
	});
	switch (e) {
		case f.DIARY: return;
		case f.HDCZA: return o("hdcza");
		case f.L5: return o("l5");
		case f.LONGEST_BOUT: return o("selected_scorer_longest_bout");
		case f.EVENT_MARKER: return o("event_marker");
		case f.ACTIWARE_REST_INTERVAL: return o("actiware_rest_interval");
		case f.NONE: return o("none");
		case f.SMART:
			if (a.hasDiary) return;
			return o("lstm_sleep_wake" === (r = a.algorithm) ? "selected_scorer_longest_bout" : x(r) ? "hdcza" : "l5");
		default: return;
	}
	var r;
}
function La(e, a) {
	const o = 86400, r = (e) => Math.floor((e - 43200) / o), l = r(Date.parse(`${a}T12:00:00Z`) / 1e3), t = [], i = (e ?? []).filter((e) => "rest" === e.kind);
	i.forEach((e, a) => {
		for (let l = r(e.startTimestamp); l <= r(e.endTimestamp); l++) {
			const r = l * o + 43200, i = Math.min(e.endTimestamp, r + o) - Math.max(e.startTimestamp, r);
			i > 0 && t.push({
				rest: a,
				night: l,
				overlap: i,
				start: e.startTimestamp
			});
		}
	}), t.sort((e, a) => a.overlap - e.overlap || e.start - a.start || e.night - a.night);
	const s = /* @__PURE__ */ new Set(), n = [];
	for (const u of t) {
		const { rest: e, night: a } = u;
		s.has(e) || (s.add(e), a === l && n.push(u));
	}
	const _ = (a) => Math.max(0, ...(e ?? []).filter((e) => "sleep" === e.kind && e.startTimestamp >= i[a].startTimestamp && e.endTimestamp <= i[a].endTimestamp).map((e) => e.endTimestamp - e.startTimestamp));
	n.sort((e, a) => _(a.rest) - _(e.rest) || a.overlap - e.overlap || e.start - a.start);
	const c = n[0];
	if (c) {
		const e = i[c.rest];
		return {
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		};
	}
	return null;
}
function Fa(e, a) {
	const o = La(e, a);
	if (!o) return null;
	const r = (e ?? []).filter((e) => "rest" === e.kind && null !== La([e], a)), l = (e ?? []).filter((e) => "sleep" === e.kind && e.endTimestamp > e.startTimestamp && r.some((a) => e.startTimestamp >= a.startTimestamp && e.endTimestamp <= a.endTimestamp)).sort((e, a) => a.endTimestamp - a.startTimestamp - (e.endTimestamp - e.startTimestamp) || e.startTimestamp - a.startTimestamp), t = l[0];
	return {
		rest: o,
		sleep: t ? {
			startTimestamp: t.startTimestamp,
			endTimestamp: t.endTimestamp
		} : null,
		...l.length > 1 ? { additionalSleeps: l.slice(1).sort((e, a) => e.startTimestamp - a.startTimestamp).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) } : {}
	};
}
function Ua(e) {
	const a = Number.parseInt((e ?? "").split(":")[0] ?? "", 10);
	return Number.isInteger(a) && a >= 0 && a <= 23 ? a : null;
}
function Wa(e) {
	const a = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime), o = x(e.algorithm) ? void 0 : $a(e), r = x(e.algorithm) && !a ? Sa.HDCZA : Sa.DIARY;
	return {
		...Ia(e.sleepPeriodDetection),
		...o ?? {
			source_a: r,
			source_b: Sa.NONE,
			fusion_policy: wa.USE_SOURCE_A
		}
	};
}
function $a(e) {
	if (e.sleepPeriodDetection && !Ba(Ra(e.sleepPeriodDetection))) {
		const a = Ia(e.sleepPeriodDetection);
		return {
			source_a: a.source_a,
			source_b: a.source_b,
			fusion_policy: a.fusion_policy,
			apply_nonwear_gate: a.apply_nonwear_gate
		};
	}
	const a = e.periodGuider ?? f.SMART, o = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime);
	return Ga(a, {
		algorithm: e.algorithm ?? null,
		hasDiary: o
	});
}
function Va(e) {
	const a = { ruleset: x(e.algorithm) ? D.GGIR_PART4 : e.ruleset ?? "legacy" };
	e.algorithm && Pa.has(e.algorithm) && (a.classifier = e.algorithm), null != e.epochLengthSeconds && (a.epoch_length_seconds = e.epochLengthSeconds), null != e.onsetMinConsecutiveSleep && (a.onset_min_consecutive_sleep = e.onsetMinConsecutiveSleep), null != e.offsetMinConsecutiveMinutes && (a.offset_min_consecutive_minutes = e.offsetMinConsecutiveMinutes), e.scorerPostprocessing && (a.scorer_postprocessing = e.scorerPostprocessing);
	const { nonwear_detector: o, nonwear_detectors: r } = Ja(e.nonwearDetectors, null, { alwaysNameSingle: !1 });
	if (o && (a.nonwear_detector = o), r && (a.nonwear_detectors = r), e.sleepPeriodDetection) {
		const o = Ra(e.sleepPeriodDetection);
		a.merge_gap_minutes = o.mergeGapMinutes, a.padding_minutes = o.paddingMinutes, a.min_overlap_jaccard = o.minOverlapJaccard;
	}
	const l = $a(e);
	return l && (a.detection = l), a;
}
const Ha = "study_selection", Ka = Object.values(oe);
function Ya(e) {
	const a = (e) => {
		const a = Ka.indexOf(e);
		return -1 === a ? Ka.length : a;
	};
	return [...e].sort((e, o) => a(e) - a(o));
}
function Ja(e, a, { alwaysNameSingle: o, memberFlags: r }) {
	if (!e || 0 === e.length) return {};
	if (1 === e.length) {
		const [a] = e;
		return o || a !== oe.choi_2011 ? { nonwear_detector: a } : {};
	}
	return {
		nonwear_detectors: Ya(e),
		...a ? { nonwear_weight: [...a] } : {},
		...a && r ? { nonwear_member_flags: [...r] } : {}
	};
}
function Za(e) {
	const a = {
		analysis_date: e.analysisDate ?? "",
		epoch_length_seconds: e.epochLengthSeconds ?? 60,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (a.choi_nonwear = e.choiNonwear);
	const { nonwear_weight: o, nonwear_member_flags: r } = Ja(e.nonwearDetectors, e.nonwearWeight, {
		alwaysNameSingle: !1,
		memberFlags: e.nonwearMemberFlags
	});
	o && (a.nonwear_weight = o), r && (a.nonwear_member_flags = r), e.ggirInvalid && (a.ggir_invalid = Array.from(e.ggirInvalid)), e.ggirHasptAlgo && (a.ggir_haspt_algo = e.ggirHasptAlgo), e.ggirConfigCsv && (a.ggir_config_csv = e.ggirConfigCsv), e.ggirDiaryHasBedlog && (a.ggir_diary_has_bedlog = !0), e.ggirDiaryHasSleeplog && (a.ggir_diary_has_sleeplog = !0), e.sensorNonwear && e.sensorNonwear.length > 0 && (a.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (a.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (a.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (a.diary_in_bed_time = e.diaryBedTime), null != e.diaryOutBedTime && (a.diary_out_bed_time = e.diaryOutBedTime);
	const l = Da(e.diaryNaps);
	l.length > 0 && (a.diary_naps = l);
	const t = qa(e.diaryNonwear);
	return t.length > 0 && (a.diary_nonwear = t), e.hdczaWindow && (a.hdcza_window = [e.hdczaWindow.startTimestamp, e.hdczaWindow.endTimestamp]), e.eventMarkerTimestamps && e.eventMarkerTimestamps.length > 0 && (a.event_marker_timestamps = Array.from(e.eventMarkerTimestamps)), e.actiwareRestWindow && (a.actiware_rest_window = [e.actiwareRestWindow.startTimestamp, e.actiwareRestWindow.endTimestamp]), null != e.nightStartHour && (a.night_start_hour = e.nightStartHour), null != e.nightEndHour && (a.night_end_hour = e.nightEndHour), a;
}
function Qa(e) {
	const a = {
		analysis_date: e.analysisDate,
		epoch_length_seconds: e.epochLengthSeconds,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (a.choi_nonwear = e.choiNonwear), e.nonwearWeight && (a.nonwear_weight = [...e.nonwearWeight]), e.nonwearWeight && e.nonwearMemberFlags && (a.nonwear_member_flags = [...e.nonwearMemberFlags]), e.sensorNonwear && e.sensorNonwear.length > 0 && (a.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (a.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (a.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (a.diary_in_bed_time = e.diaryBedTime);
	const o = Da(e.diaryNaps);
	o.length > 0 && (a.diary_naps = o);
	const r = qa(e.diaryNonwear);
	return r.length > 0 && (a.diary_nonwear = r), a;
}
function Xa(e) {
	return e && 0 !== e.length ? e.map(([e, a]) => [e, a]) : null;
}
function eo(e) {
	const a = [
		"timestamps",
		"activity_counts",
		"sleep_scores",
		"choi_nonwear",
		"anglez",
		"light",
		"temperature",
		"heart_rate",
		"detach_nonwear"
	], o = (a, o) => {
		const r = e.days.map((e) => e[a] ?? []), l = new Uint32Array(r.length + 1);
		for (const [e, s] of r.entries()) l[e + 1] = l[e] + s.length;
		const t = 1 === r.length ? r[0] : void 0, i = t instanceof o ? t : new o(l[r.length]);
		if (i !== t) for (const [e, s] of r.entries()) i.set(s, l[e]);
		return [i, l];
	}, r = {
		config: e.config,
		days: e.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !a.includes(e))))
	};
	return [
		JSON.stringify(r),
		...o("timestamps", Float64Array),
		...o("activity_counts", Float64Array),
		...o("sleep_scores", Uint8Array),
		...o("choi_nonwear", Uint8Array),
		...o("anglez", Float64Array),
		...o("light", Float64Array),
		...o("temperature", Float64Array),
		...o("heart_rate", Float64Array),
		...o("detach_nonwear", Uint8Array)
	];
}
function ao(e) {
	return {
		marker_type: e.marker_type,
		marker_index: e.marker_index,
		outcome: e.outcome,
		onset_timestamp: e.onset_timestamp ?? null,
		offset_timestamp: e.offset_timestamp ?? null,
		rules_applied: e.rules_applied ?? [],
		candidates_considered: e.candidates_considered ?? 0,
		notes: e.notes ?? [],
		used_diary_period: e.used_diary_period ?? null
	};
}
function oo(e, a) {
	const o = {
		onset_timestamp: e.onset_timestamp,
		offset_timestamp: e.offset_timestamp,
		marker_type: e.marker_type,
		marker_index: e.marker_index
	};
	return a && (o.placement = a), o;
}
function ro(e) {
	return {
		kind: "refused",
		reason: e
	};
}
function lo(e, a, o) {
	if (!e) return ro("The placement engine returned no result for this night.");
	const r = e.guider ?? o, l = null == e.guider ? a : {
		...a,
		source_a: e.guider
	}, t = (e.decisions ?? []).map(ao), i = (e, a) => t.find((o) => o.marker_type === e && o.marker_index === a);
	return {
		kind: "placed",
		sleep_markers: (e.sleep_markers ?? []).map((e) => oo(e, i(e.marker_type, e.marker_index))),
		nap_markers: (e.nap_markers ?? []).map((e) => oo(e, i(e.marker_type, e.marker_index))),
		notes: e.notes ?? [],
		decisions: t,
		sleep_period_detection_config: l,
		effective_detection_source_a: r,
		invalid_night: e.invalid_night ?? null,
		diary_available: e.diary_available ?? null
	};
}
const to = "Marker placement is unavailable in this build — reload while online to update the local engine.";
async function io(e, a) {
	const o = Wa(e), r = String(o.source_a);
	if (0 === e.timestamps.length) return ro("No activity data");
	const l = function(e) {
		let a;
		if ("variant" in e) {
			const { variant: r, timestamps: l, activityCounts: t, sleepScores: i, analysisDate: s, epochLengthSeconds: n, hdczaWindow: _, diary: c, onsetMinConsecutiveSleep: u, offsetMinConsecutiveMinutes: d, choiNonwear: p, nonwearDetectors: v, nonwearWeight: m, nonwearMemberFlags: C, eventMarkerTimestamps: b, actiwareRestWindow: h } = e, k = r.config.rescoring === w.WEBSTER ? ja(w.WEBSTER) : void 0;
			a = {
				timestamps: l,
				activityCounts: t,
				sleepScores: i,
				...void 0 !== p ? { choiNonwear: p } : {},
				...void 0 !== v ? { nonwearDetectors: v } : {},
				...void 0 !== m ? { nonwearWeight: m } : {},
				...void 0 !== C ? { nonwearMemberFlags: C } : {},
				ruleset: r.config.ruleset,
				...void 0 !== k ? { scorerPostprocessing: k } : {},
				analysisDate: s,
				epochLengthSeconds: n,
				hdczaWindow: _ ? {
					startTimestamp: _[0],
					endTimestamp: _[1]
				} : null,
				...b ? { eventMarkerTimestamps: b } : {},
				...h ? { actiwareRestWindow: h } : {},
				diaryBedTime: c?.diaryInBedTime ?? null,
				diaryOnsetTime: c?.onsetTime ?? null,
				diaryWakeTime: c?.diaryWakeTime ?? null,
				diaryNaps: Xa(c?.naps),
				diaryNonwear: Xa(c?.nonwear),
				...void 0 !== u ? { onsetMinConsecutiveSleep: u } : {},
				...void 0 !== d ? { offsetMinConsecutiveMinutes: d } : {},
				...(o = r.config.periodSource, o === Oa ? { periodGuider: Oa } : o === Ma ? { periodGuider: Ma } : { sleepPeriodDetection: {
					sourceA: o,
					sourceB: Sa.NONE,
					fusionPolicy: wa.USE_SOURCE_A,
					applyNonwearGate: !1
				} })
			};
		} else a = e;
		var o;
		return eo({
			config: Va(a),
			days: [Za(a), ...(a.contextDays ?? []).filter((e) => e.analysisDate !== (a.analysisDate ?? "")).map(Qa)]
		});
	}(e), t = await (e.wasmApiOverride ?? a()).placeMarkers(Y(l, l.slice(1).filter((a) => ArrayBuffer.isView(a) && ![e, ...e.contextDays ?? []].some((e) => a === e.timestamps || a === e.activityCounts || a === e.sleepScores || a === e.choiNonwear)).map((e) => e.buffer)));
	return t ? lo((e.analysisDate ? t.results.find((a) => a.analysis_date === e.analysisDate) : void 0) ?? t.results[0], o, r) : ro(to);
}
async function so(e, a) {
	const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), l = [];
	for (const [_, c] of e.entries()) {
		const e = Va(c);
		if (0 === c.timestamps.length || c.wasmApiOverride) {
			l.push(_);
			continue;
		}
		const a = JSON.stringify(e), t = "legacy" === e.ruleset && 0 === (c.contextDays?.length ?? 0) ? o : r;
		t.set(a, [...t.get(a) ?? [], _]);
	}
	const t = new Array(e.length), i = [...r.values()].flatMap((a) => {
		const o = a.map((a) => e[a]), r = function(e) {
			const a = /* @__PURE__ */ new Map();
			for (const r of e) for (const e of r.contextDays ?? []) a.has(e.analysisDate) || a.set(e.analysisDate, e);
			const o = [...a.values()].sort((e, a) => e.analysisDate.localeCompare(a.analysisDate));
			return e.every((e) => {
				const a = e.contextDays ?? [], r = o.filter((a) => a.analysisDate !== (e.analysisDate ?? ""));
				return a.length === r.length && a.every((e, a) => e === r[a]);
			}) ? o : null;
		}(o);
		return null === r ? (l.push(...a), []) : [{
			group: a,
			members: o,
			context: r
		}];
	}), s = [...l, ...[...o.values()].filter((e) => 1 === e.length).flat()];
	await Promise.all(s.map(async (o) => {
		t[o] = await io(e[o], () => a);
	}));
	const n = (e, a, o) => {
		for (const [r, l] of e.entries()) {
			const e = a[r], i = Wa(e), s = o?.results.find((a) => a.analysis_date === e.analysisDate);
			t[l] = o ? lo(s ?? o.results[r], i, String(i.source_a)) : ro(to);
		}
	};
	return await Promise.all([...[...o.values()].filter((e) => e.length > 1).map(async (o) => {
		const r = o.map((a) => e[a]), l = function(e) {
			const a = e[0];
			if (!a) throw new Error("buildNightsPlacementRequest needs at least one night.");
			return eo({
				config: Va(a),
				days: e.map(Za)
			});
		}(r);
		n(o, r, await a.placeMarkers(Y(l, l.slice(1).map((e) => e.buffer))));
	}), ...i.map(async ({ group: e, members: o, context: r }) => {
		const l = eo({
			config: Va(o[0]),
			days: [...o.map(Za), ...r.map(Qa)]
		}), t = new Set([...o, ...r].flatMap((e) => [
			e.timestamps,
			e.activityCounts,
			e.sleepScores,
			e.choiNonwear
		])), i = l.slice(1).filter((e) => ArrayBuffer.isView(e) && !t.has(e)).map((e) => e.buffer);
		n(e, o, await a.placeNights(Y([...l, o.length], i)));
	})]), t;
}
const no = {
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
}, _o = {
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
}, co = {
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
}, uo = {
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
}, po = {
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
		editedRecord: "rest_intervals",
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
		editedRecord: "rest_intervals",
		wakeThresholdFromRecording: !0
	}
}, vo = {
	"actoglance.source.actical_vendor_artifact.v1": [],
	"actoglance.source.actigraph_agd.v1": [],
	"actoglance.source.actigraph_epoched_csv.v1": [],
	"actoglance.source.actigraph_gt3x_binary.v1": ["gt3x_capsense"],
	"actoglance.source.actigraph_raw_csv.v1": [],
	"actoglance.source.activinsights_vendor_artifact.v1": [],
	"actoglance.source.activpal_vendor_artifact.v1": [],
	"actoglance.source.axivity_cwa.v1": [],
	"actoglance.source.camntech_actiwatch_awd.v1": [],
	"actoglance.source.condor_actlumus_txt.v1": [],
	"actoglance.source.condor_acttrust_txt.v1": [],
	"actoglance.source.empatica_embraceplus_avro.v1": [],
	"actoglance.source.gaitup_vendor_artifact.v1": [],
	"actoglance.source.geneactiv_bin.v1": [],
	"actoglance.source.geneactiv_epoch_csv.v1": [],
	"actoglance.source.geneactiv_raw_csv.v1": [],
	"actoglance.source.generic_consumer_wearable_table.v1": [],
	"actoglance.source.generic_epoch_csv.v1": [],
	"actoglance.source.generic_epoch_excel.v1": [],
	"actoglance.source.generic_raw_xyz_table.v1": [],
	"actoglance.source.generic_vendor_activity_table.v1": [],
	"actoglance.source.ggir_generic_epoch_csv.v1": [],
	"actoglance.source.ggir_map_csv.v1": [],
	"actoglance.source.ggir_metashort_csv.v1": [],
	"actoglance.source.ggir_rdata.v1": [],
	"actoglance.source.mims_metric_table.v1": [],
	"actoglance.source.motionwatch_vendor_artifact.v1": [],
	"actoglance.source.movisens_vendor_artifact.v1": [],
	"actoglance.source.nhanes_pax_minute.v1": [],
	"actoglance.source.nhanes_pax_raw.v1": [],
	"actoglance.source.philips_actiware_csv.v1": ["actiware_off_wrist"],
	"actoglance.source.philips_actiwatch_aw5.v1": ["actiware_off_wrist"],
	"actoglance.source.shimmer_vendor_artifact.v1": []
}, mo = {
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
}, Co = {
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
}, bo = {
	diary: [],
	hdcza: [["ggir_metric_epoch_stream"]],
	l5: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	selected_scorer_first_last: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	selected_scorer_longest_bout: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	quiet_bout: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	event_marker: [["source_event_evidence_stream"]],
	actiware_rest_interval: [],
	none: []
}, ho = ["diary"], ko = {
	count_epoch_stream_60s: "has60sCounts",
	neishabouri_count_epoch_stream_60s: "has60sCounts",
	ggir_metric_epoch_stream: "hasAnglez"
};
function go(e, a) {
	if (void 0 === a) return [];
	for (const o of a) {
		if (0 === o.length) return [];
		const a = o.flatMap((e) => ko[e] ?? []);
		if (a.length > 0 && !a.some((a) => !0 === e[a])) return [...new Set(a)];
	}
	return null;
}
function fo(e) {
	return co[e] ?? no[e];
}
function So(e, a, o) {
	const r = function(e, a) {
		const o = uo[e];
		return o ? o.capabilities[a] : _o[e]?.capabilities[a];
	}(e, a);
	return "local" === o ? "implemented" === r?.localStatus : "implemented" === r?.serverStatus;
}
function wo(e, a, o) {
	return void 0 !== a && a.every((a) => a.some((a) => So(e, a, o)));
}
function yo(e, a) {
	const o = fo(e);
	if (!o || !So(e, "source_profile_realization", a)) return;
	const r = So(e, "ggir_metric_epoch_stream", a), l = So(e, "neishabouri_count_epoch_stream_60s", a), t = So(e, "count_epoch_stream_60s", a) || l, i = So(e, "raw_acceleration_stream", a);
	return {
		sleepAlgorithms: o.sleepAlgorithms.filter((o) => function(e, a, o) {
			return function(e, a) {
				return fo(e)?.sleepAlgorithms.includes(a) ?? !1;
			}(e, a) && wo(e, mo[a], o);
		}(e, o, a)),
		nonwearAlgorithms: o.nonwearAlgorithms.filter((o) => function(e, a, o) {
			return function(e, a) {
				return fo(e)?.nonwearAlgorithms.includes(a) ?? !1;
			}(e, a) && wo(e, Co[a], o);
		}(e, o, a)),
		hasAnglez: o.hasAnglez && r,
		has60sCounts: o.has60sCounts && t,
		hasRawAccel: o.hasRawAccel && i,
		countMetrics: o.countMetrics.filter((e) => "neishabouri" === e ? l : "zero_crossing" !== e && t)
	};
}
function Bo(e, a) {
	return "boolean" === e.kind ? "boolean" == typeof a : "enum" === e.kind ? "string" == typeof a && !!e.members?.includes(a) : "number" == typeof a && Number.isFinite(a) && ("integer" !== e.kind || Number.isInteger(a)) && (void 0 === e.minimum || a >= e.minimum) && (void 0 === e.maximum || a <= e.maximum);
}
const zo = [
	"one_per_night",
	"nap_detection",
	"min_nap_minutes",
	"nap_sensitivity",
	"eventmarker_adj",
	"actogram_start_seconds",
	"sleep_onset_minutes",
	"sleep_end_minutes",
	"sleep_detection",
	"sleep_onset_epochs",
	"sleep_end_epochs",
	"wake_threshold_selection",
	"wake_threshold"
], Ao = {
	low: 20,
	medium: 40,
	high: 80
}, Eo = [
	"one_per_night",
	"nap_detection",
	"min_nap_minutes",
	"nap_sensitivity",
	"eventmarker_adj",
	"actogram_start_seconds"
], To = { eventmarker_adj: !0 }, xo = {
	one_per_night: { kind: "boolean" },
	nap_detection: { kind: "boolean" },
	min_nap_minutes: {
		kind: "integer",
		minimum: 15,
		maximum: 75
	},
	nap_sensitivity: {
		kind: "enum",
		members: [
			"high",
			"medium",
			"low"
		],
		enum: "ActiwareNapSensitivity"
	},
	eventmarker_adj: { kind: "boolean" },
	actogram_start_seconds: {
		kind: "integer",
		minimum: 0,
		maximum: 86399
	},
	sleep_onset_minutes: {
		kind: "integer",
		minimum: 1
	},
	sleep_end_minutes: {
		kind: "integer",
		minimum: 1
	},
	sleep_detection: {
		kind: "enum",
		members: ["minutes_immobile", "epochs_scored_sleep"],
		enum: "ActiwareSleepDetectionAlgorithm"
	},
	sleep_onset_epochs: {
		kind: "integer",
		minimum: 1
	},
	sleep_end_epochs: {
		kind: "integer",
		minimum: 1
	},
	wake_threshold_selection: {
		kind: "enum",
		members: [
			"low",
			"medium",
			"high",
			"auto",
			"custom"
		],
		enum: "ActiwareWakeThresholdSelection"
	},
	wake_threshold: {
		kind: "float",
		minimum: 0
	}
}, Ro = { wake_threshold: {
	field: "wake_threshold_selection",
	value: "custom"
} };
function Io(e) {
	if (null === e || "object" != typeof e || Array.isArray(e)) return {};
	const a = e, o = zo.filter((e) => function(e, a) {
		return Bo(xo[e], a);
	}(e, a[e])), r = Ro;
	return Object.fromEntries(o.filter((e) => {
		const l = r[e];
		return void 0 === l || !o.includes(l.field) || a[l.field] === l.value;
	}).map((e) => [e, a[e]]));
}
const No = {
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
}, Oo = {
	use_saved_rest_intervals: !0,
	rest_autoscore: "actiware"
};
function Mo(e) {
	const a = null === e || "object" != typeof e || Array.isArray(e) ? {} : e;
	return Object.fromEntries(Object.entries(No).map(([e, o]) => [e, Bo(o, a[e]) ? a[e] : Oo[e]]));
}
const jo = {
	actiware_analysis_settings_object: function(e) {
		return 0 === Object.keys(Io(e)).length;
	},
	actiware_rest_proposal_settings_object: function(e) {
		const a = Mo(e);
		return Object.keys(Oo).every((e) => a[e] === Oo[e]);
	}
}, Po = /* @__PURE__ */ new Set([V.GGIR_5S_UPLOAD, V.EPOCHS_5S_GGIR]);
function Do(e) {
	return Po.has(e?.sourceType);
}
function qo(e) {
	return Object.values(ee).includes(e) ? e : W.analysis_paradigm;
}
function Go(e, a) {
	const o = e?.sourceProfileId, r = o ? po[o] ?? null : null;
	return r?.paradigm === a ? r : null;
}
function Lo(e) {
	const a = e?.sourceProfileId;
	return null != a && void 0 !== po[a];
}
function Fo(e, a) {
	const o = e?.sourceProfileId;
	return null != o && po[o]?.sleepAlgorithm === a;
}
function Uo(e, a) {
	return Go(e, qo(a))?.editedRecord ?? Q.sleep_periods;
}
function Wo(e, a, o) {
	const r = Go(o, a), l = void 0 === e.nonwearDetectorsGgir ? e : {
		...e,
		nonwearDetectorsGgir: cr(e.nonwearDetectorsGgir, o)
	};
	return r ? {
		...l,
		algorithm: r.sleepAlgorithm,
		periodGuider: r.periodGuider ?? e.periodGuider,
		nonwearDetectorsCounts: Ho(e.nonwearDetectorsCounts, r.nonwearDetectors, $o(o)),
		placementFromSource: r.placementFromSource
	} : {
		...l,
		algorithm: Ko(e.algorithm, o),
		placementFromSource: !1
	};
}
function $o(e) {
	const a = e?.resolvedCapabilities, o = e?.sourceProfileId;
	return void 0 === a || null == o ? [] : (vo[o] ?? []).filter((e) => {
		const o = Co[e];
		return void 0 === o || !o.every((e) => e.some((e) => a.includes(e)));
	});
}
const Vo = /* @__PURE__ */ new WeakMap();
function Ho(e, a, o) {
	const r = `${a.join(",")}|${o.join(",")}`;
	let l = Vo.get(e);
	l || Vo.set(e, l = /* @__PURE__ */ new Map());
	const t = l.get(r);
	if (t) return t;
	const i = Object.freeze(e.filter((e) => a.includes(e) && !o.includes(e)));
	return l.set(r, i), i;
}
function Ko(e, a) {
	const o = (r = a?.sourceType, r && Po.has(r) ? c.VAN_HEES_2015 : null);
	var r;
	return null === o || x(e) ? e : o;
}
function Yo(e, a) {
	return Wo({
		algorithm: e.currentAlgorithm,
		periodGuider: e.periodGuider,
		nonwearDetectorsCounts: e.nonwearDetectorsCounts,
		...void 0 === e.nonwearDetectorsGgir ? {} : { nonwearDetectorsGgir: e.nonwearDetectorsGgir }
	}, qo(e.analysisParadigm), a);
}
function Jo(e) {
	const a = e.currentFileId;
	return {
		sourceType: e.currentFileSourceType,
		ggirBundleRevision: null == a ? void 0 : e.availableFiles.find((e) => e.id === a)?.ggirBundleRevision,
		sourceProfileId: null == a ? null : e.availableFiles.find((e) => e.id === a)?.sourceProfileId ?? null
	};
}
function Zo(e) {
	return Yo(e, Jo(e)).algorithm;
}
function Qo(e) {
	const a = e.placementFromSource ? e.periodGuider : (o = e.algorithm, Object.values(po).find((e) => e.sleepAlgorithm === o && null !== e.periodGuider)?.periodGuider ?? void 0);
	var o;
	const r = a ? Ga(a, {
		algorithm: e.algorithm,
		hasDiary: !1
	}) : void 0;
	return r ? Ra({
		...Ia(e.sleepPeriodDetection),
		...r
	}) : e.sleepPeriodDetection;
}
const Xo = zo, er = Io;
function ar(e, a) {
	const o = e[a];
	if (null == o) throw new Error(`The stored Actiware settings lack ${a}; import the file again.`);
	return o;
}
function or(e, a) {
	const o = er(a);
	if (0 === Object.keys(o).length) return e;
	const r = {
		...e,
		...o
	}, l = void 0 === o.wake_threshold_selection ? void 0 : Ao[o.wake_threshold_selection];
	return void 0 !== l && (r.wake_threshold = l), void 0 !== o.actogram_start_seconds && (r.actogram_start_hour = Math.floor(o.actogram_start_seconds / 3600)), r;
}
function rr(e, a) {
	return "nap_detection" === a ? e.nap_detection ?? !1 : "min_nap_minutes" === a ? e.min_nap_minutes ?? 40 : "nap_sensitivity" === a ? e.nap_sensitivity ?? X.high : "actogram_start_seconds" === a ? function(e) {
		return e.actogram_start_seconds ?? 3600 * ar(e, "actogram_start_hour");
	}(e) : e[a];
}
function lr(e, a) {
	return Xo.every((o) => rr(e, o) === rr(a, o));
}
function tr(e, a) {
	return Eo.some((o) => rr(e, o) !== rr(a, o));
}
function ir(e, a, o) {
	if (null == a) return a;
	const r = To, l = sr(e, a, o).map((e) => [e, r[e]]);
	return {
		...Object.fromEntries(l),
		...er(a)
	};
}
function sr(e, a, o) {
	if (null == a) return [];
	const r = er(a);
	return !o.some((e) => "rest" === e.kind) || tr(e, or(e, r)) ? Object.keys(To).filter((e) => void 0 === r[e]) : [];
}
const nr = Object.freeze([oe.ggir_saved]), _r = {
	[oe.van_hees_2013]: Object.freeze([oe.van_hees_2013]),
	[oe.van_hees_2023]: Object.freeze([oe.van_hees_2023])
};
function cr(e, a) {
	const o = ba(a);
	return !o && e.includes(oe.ggir_saved) && a?.ggirNonwearDetector ? a.ggirNonwearDetector === oe.van_hees_2013 ? _r.van_hees_2013 : _r.van_hees_2023 : o && e.some((e) => e === oe.van_hees_2023 || e === oe.van_hees_2013) ? nr : e.every((e) => e === oe.ggir_saved === o) ? e : Ho(e, o ? nr : e.filter((e) => e !== oe.ggir_saved), []);
}
export { ga as $, fo as A, Wa as B, vo as C, Fe as Ct, no as D, bo as E, Za as F, ya as G, io as H, Ya as I, Na as J, xa as K, Ua as L, Ha as M, La as N, go as O, Fa as P, ka as Q, Ja as R, Mo as S, fe as St, ho as T, ja as U, so as V, Ga as W, Ia as X, Ra as Y, fa as Z, lr as _, ge as _t, Jo as a, Ca as at, Oo as b, se as bt, Zo as c, ua as ct, Do as d, na as dt, ha as et, er as f, de as ft, tr as g, be as gt, Wo as h, Ee as ht, Qo as i, ma as it, So as j, yo as k, cr as l, da as lt, qo as m, ye as mt, ir as n, _a as nt, Uo as o, va as ot, Go as p, ce as pt, Ba as q, ar as r, ca as rt, or as s, pa as st, sr as t, ba as tt, Yo as u, Ve as ut, Fo as v, ke as vt, Co as w, jo as x, Se as xt, Lo as y, he as yt, ro as z };
