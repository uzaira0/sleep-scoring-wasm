import { $ as e, $n as t, $t as n, An as a, At as r, B as i, Bn as s, Br as o, Bt as l, Cr as c, Dr as d, Dt as u, Er as p, Et as m, Fr as f, Gt as _, Ht as y, Ir as g, Jt as h, Kn as w, Kr as b, Kt as v, Lr as k, Lt as S, N as I, On as E, Or as A, Q as T, Qn as R, Qt as D, Rr as O, Rt as M, Tr as x, Tt as C, Ur as N, Ut as F, V as L, Vn as P, Vr as j, Vt as G, Wt as H, Xt as $, Y as q, Yt as B, Z as z, Zn as W, _ as V, _n as U, an as K, ar as Q, bn as J, c as X, cn as Y, cr as Z, ct as ee, d as te, dn as ne, en as ae, er as re, f as ie, gn as se, h as le, hn as ce, hr as de, ht as ue, it as pe, jn as me, jt as fe, kn as _e, l as ye, ln as ge, m as he, mn as we, n as be, nn as ve, nr as ke, on as Se, or as Ie, ot as Ee, p as Ae, qt as Te, rn as Re, sn as De, sr as Oe, st as Me, tn as xe, tr as Ce, tt as Ne, u as Fe, un as Le, vn as Pe, wr as je, wt as Ge, xr as He, yn as $e, yr as qe, z as Be, zn as ze, zt as We } from "./background-jobs-CXps6j4v.js";
import { i as Ve, n as Ue, t as Ke } from "./wal-Dfu9rgTj.js";
const Qe = [
	".csv",
	".gt3x",
	".bin",
	".rdata",
	".rda",
	".tar.bz2",
	".tbz2",
	".zip",
	".aw5"
];
Object.values({
	CAPACITY: "capacity",
	INTEGRITY: "integrity",
	VERIFICATION: "verification",
	OTHER: "other"
});
var Je = class extends Error {
	name = "BackupCapacityError";
	reason;
	constructor(e) {
		super(`Backup ${"source" === e ? "file" : "expanded data"} exceeds the local byte limit.`), this.reason = e;
	}
};
const Xe = new Uint8Array([31, 139]);
function Ye(e) {
	let t = 0;
	for (const r of e) t += r.length;
	const n = new Uint8Array(t);
	let a = 0;
	for (const r of e) n.set(r, a), a += r.length;
	return n;
}
async function Ze(e, t) {
	if (!function(e, t) {
		if (t.length < e.length + 1) return !1;
		for (let n = 0; n < e.length; n++) if (t[n] !== e[n]) return !1;
		return !0;
	}(e, t)) throw new Error("opfs-codec: unrecognised cache frame (wrong magic)");
	const n = t[e.length] ?? 0, a = t.subarray(e.length + 1);
	return 1 & n ? async function(e, t = 536870912, n) {
		const a = [];
		let r = 0;
		for await (const o of async function* (e, t, n) {
			n?.throwIfAborted();
			const a = e instanceof Uint8Array ? new Blob([e]) : e, r = new Uint8Array(await a.slice(0, Xe.length).arrayBuffer());
			n?.throwIfAborted();
			let i = a.stream();
			if ((s = r).length >= 2 && s[0] === Xe[0] && s[1] === Xe[1]) {
				if ("undefined" == typeof DecompressionStream) throw new Error("gzip payload received but DecompressionStream is unavailable in this environment");
				i = i.pipeThrough(new DecompressionStream("gzip"));
			}
			var s;
			const o = i.getReader(), l = () => {
				o.cancel(n?.reason).catch(() => {});
			};
			n?.addEventListener("abort", l, { once: !0 });
			let c = 0, d = !1;
			try {
				for (;;) {
					const { value: e, done: a } = await o.read();
					if (n?.throwIfAborted(), a) return void (d = !0);
					if (c += e.byteLength, c > t) throw new Je("expanded");
					yield e;
				}
			} finally {
				n?.removeEventListener("abort", l), d || n?.aborted || o.cancel().catch(() => {}), o.releaseLock();
			}
		}(e, t, n)) a.push(o), r += o.byteLength;
		if (1 === a.length) return a[0];
		const i = new Uint8Array(r);
		let s = 0;
		for (const o of a) i.set(o, s), s += o.byteLength;
		return i;
	}(a) : a.slice();
}
const et = {
	off: "off",
	actiware: "actiware",
	screens: "screens"
}, tt = {
	SADEH_1994_ACTILIFE: "sadeh_1994_actilife",
	SADEH_1994_ORIGINAL: "sadeh_1994_original",
	SADEH_1994_GGIR: "sadeh_1994_ggir",
	COLE_KRIPKE_1992_ACTILIFE: "cole_kripke_1992_actilife",
	COLE_KRIPKE_1992_ORIGINAL: "cole_kripke_1992_original",
	COLE_KRIPKE_1992_GGIR: "cole_kripke_1992_ggir",
	TENSOR_MAJORITY_VOTE: "tensor_majority_vote",
	CONSENSUS_MAJORITY_VOTE: "consensus_majority_vote",
	LSTM_SLEEP_WAKE: "lstm_sleep_wake",
	GGIR_HASIB_VAN_HEES_2015: "ggir_hasib_van_hees_2015",
	GGIR_HASIB_SADEH_1994: "ggir_hasib_sadeh_1994",
	GGIR_HASIB_GALLAND_2012: "ggir_hasib_galland_2012",
	GGIR_HASIB_COLE_KRIPKE_1992: "ggir_hasib_cole_kripke_1992",
	GGIR_HASIB_OAKLEY_1997: "ggir_hasib_oakley_1997",
	GGIR_HASIB_NOT_WORN: "ggir_hasib_not_worn",
	CHOI_2011_NONWEAR: "choi_2011_nonwear",
	DETACH_NONWEAR: "detach_nonwear",
	UCSD_SCRIPPS_2010: "ucsd_scripps_2010",
	SAZONOV_2004: "sazonov_2004",
	PRESCHOOL_FREE_LIVING_RF_3_5: "preschool_free_living_rf_3_5"
}, nt = {
	configured_scoring: "configured_scoring",
	actiware: "actiware"
}, at = {
	pim: "pim",
	zcm: "zcm",
	tat: "tat",
	neishabouri: "neishabouri",
	zero_crossing: "zero_crossing",
	mad: "mad",
	hfen: "hfen"
}, rt = "main_sleep", it = "naps", st = "nonwear", ot = {
	sleep_periods: "sleep_periods",
	rest_intervals: "rest_intervals"
}, lt = {
	number_60s_epochs: "60s_epochs",
	ggir_5s: "ggir_5s"
}, ct = {
	HDCZA: "HDCZA",
	HorAngle: "HorAngle",
	NotWorn: "NotWorn",
	MotionWare: "MotionWare",
	HLRB: "HLRB"
}, dt = {
	choi_2011: "choi_2011",
	flat_activity: "flat_activity",
	gt3x_capsense: "gt3x_capsense",
	actiware_off_wrist: "actiware_off_wrist",
	detach_nonwear: "detach_nonwear",
	van_hees_2013: "van_hees_2013",
	van_hees_2023: "van_hees_2023",
	ggir_saved: "ggir_saved",
	ggir_part2_invalid: "ggir_part2_invalid",
	choi_2012: "choi_2012",
	troiano_2008: "troiano_2008",
	ahmadi_2020: "ahmadi_2020",
	skovgaard_2023: "skovgaard_2023"
}, ut = {
	diary: "diary",
	hdcza: "hdcza",
	l5: "l5",
	selected_scorer_first_last: "selected_scorer_first_last",
	selected_scorer_longest_bout: "selected_scorer_longest_bout",
	quiet_bout: "quiet_bout",
	event_marker: "event_marker",
	actiware_rest_interval: "actiware_rest_interval",
	none: "none"
}, pt = {
	evening_onset: "evening_onset",
	morning_offset: "morning_offset",
	daytime: "daytime"
}, mt = {
	sadeh_1994_actilife: "1",
	sadeh_1994_original: "1",
	sadeh_1994_ggir: "1",
	cole_kripke_1992_actilife: "1",
	cole_kripke_1992_original: "2",
	cole_kripke_1992_ggir: "1",
	tensor_majority_vote: "1",
	consensus_majority_vote: "1",
	lstm_sleep_wake: "1",
	ggir_hasib_van_hees_2015: "1",
	ggir_hasib_sadeh_1994: "1",
	ggir_hasib_galland_2012: "1",
	ggir_hasib_cole_kripke_1992: "1",
	ggir_hasib_oakley_1997: "1",
	ggir_hasib_not_worn: "1",
	choi_2011_nonwear: "1",
	detach_nonwear: "1",
	ucsd_scripps_2010: "1",
	sazonov_2004: "1",
	preschool_free_living_rf_3_5: "1"
};
function ft(e) {
	const t = mt[e];
	if (void 0 === t) throw new Error(`no implementation_version for ${e}`);
	return t;
}
function _t(e) {
	return Object.hasOwn(mt, e) ? e : null;
}
const yt = "auto_score", gt = /* @__PURE__ */ new WeakSet();
function ht(e) {
	if (null !== e && "object" == typeof e && !Object.isFrozen(e)) {
		Object.freeze(e);
		for (const t of Object.values(e)) ht(t);
	}
	return e;
}
function wt(e) {
	return gt.add(ht(e)), e;
}
function bt(e) {
	if (null === e || "object" != typeof e || !gt.has(e)) return null;
	const t = e, n = (a = t.id, null === U(a) ? null : a);
	var a;
	if (null === n) return null;
	const r = Object.fromEntries(Object.entries(t).filter(([e]) => !K.excludedFieldNames.includes(e)));
	return {
		cellId: n,
		implementationVersion: t.implementationVersion,
		configHash: en(r)
	};
}
const vt = new Map(E.map((e) => [e.id, e.conformance]));
function kt(e) {
	return vt.get(e) ?? "conformant";
}
const St = function() {
	const e = /* @__PURE__ */ new Map();
	for (const t of E) {
		if ("sleep_wake" !== t.kind) continue;
		if (!B.includes(t.requiredSignal)) continue;
		if (ve.includes(t.execution)) continue;
		const n = t.family, a = e.get(n);
		if (a) {
			if (a.conformance !== t.conformance) throw new Error(`count scorer family ${n} has conflicting conformance across variants: ${a.conformance} vs ${t.conformance}`);
		} else {
			const a = De[n];
			if (void 0 === a) throw new Error(`count scorer ${t.id} lacks a generated planner label`);
			e.set(n, {
				slug: n,
				algorithm: a.algorithmValue,
				label: a.label,
				conformance: t.conformance
			});
		}
	}
	return Array.from(e.values());
}(), It = function() {
	const e = new Map(St.map((e) => [e.slug, e])), t = [];
	for (const n of Te) {
		const a = e.get(n.methodFamilyId);
		if (!a) throw new Error(`generated provenance contract references absent count family ${n.methodFamilyId}`);
		t.push({
			slug: a.slug,
			algorithm: a.algorithm,
			label: a.label,
			conformance: a.conformance,
			primitive: n.primitiveId,
			implementation: n.implementationVariantId,
			implementationLabel: n.label,
			scoringParameters: n.parameters
		});
	}
	return t;
}(), Et = F, At = n, Tt = ae, Rt = Object.fromEntries(xe.map((e) => [e, 0])), Dt = Object.fromEntries(ce.map((e) => [e.value, 0])), Ot = se;
function Mt(e, t) {
	const n = E.filter((n) => "sleep_wake" === n.kind && n.family === e && (void 0 === t || n.implementation === t)).map((e) => e.supportedEpochSeconds);
	return 0 === n.length ? [] : n.reduce((e, t) => e.filter((e) => t.includes(e)));
}
function xt(e, t) {
	return e.some((e) => e === t || e < t && t % e === 0);
}
function Ct(e) {
	const t = E.find((t) => t.id === e);
	return t && (B.includes(t.requiredSignal) || "epoch_scores" === t.requiredSignal) ? t.supportedEpochSeconds : void 0;
}
function Nt(e, t) {
	return t >= C || xt(e, t) ? t : C;
}
function Ft(e) {
	const t = Object.entries(De).find(([, t]) => t.algorithmValue === e)?.[0];
	return void 0 === t ? [] : Mt(t, "hasib");
}
function Lt(e, t, n) {
	const { configs: a, skipped: r } = e, { label: i, supported: s } = t;
	xt(s, n.epochSeconds) ? a.push(n) : r.push({
		id: n.id,
		reason: Xt("unsupported_epoch_reason", {
			cell_label: n.label,
			method_label: i,
			supported_epochs: s.join(", ")
		})
	});
}
function Pt(e = {}) {
	const t = new Set(e.includeFamilies ?? xe), n = e.epochSeconds ?? At, a = new Set(e.excludeHasibAlgorithms ?? []), r = e.implementationVersion ?? Tt, i = [], s = [];
	if (t.has("count_hasib")) {
		for (const e of St) {
			if (a.has(e.slug)) {
				i.push({
					id: Pe("count_skip_entry", { method_family: e.slug }),
					reason: Xt("skipped_method_reason", { algorithm_value: e.algorithm })
				});
				continue;
			}
			const t = Mt(e.slug);
			for (const a of Object.keys(Et)) for (const o of Et[a]) for (const l of n) Lt({
				configs: s,
				skipped: i
			}, {
				label: e.label,
				supported: t
			}, Bt({
				family: e,
				countFamily: a,
				axis: o,
				epochSeconds: l,
				implementationVersion: r
			}));
		}
		for (const e of It) {
			if (a.has(e.slug)) continue;
			const t = Mt(e.slug, e.implementation), o = `${e.label} ${e.implementationLabel}`;
			for (const a of Object.keys(Et)) for (const l of Et[a]) for (const c of n) Lt({
				configs: s,
				skipped: i
			}, {
				label: o,
				supported: t
			}, zt({
				variant: e,
				countFamily: a,
				axis: l,
				epochSeconds: c,
				implementationVersion: r
			}));
		}
	}
	for (const l of Object.keys(Re)) t.has(l) && s.push(Wt(l, r));
	if (t.has("lstm")) for (const l of e.lstmModels ?? []) s.push(...Vt(l, r));
	(e.includeConsensus ?? !0) && t.has("consensus") && s.push(...function(e, t) {
		const n = [], a = Array.from(new Set(e.filter((e) => Ut(e)).filter((e) => At.includes(e.epochSeconds)).map((e) => e.epochSeconds))).sort((e, t) => e - t);
		for (const r of a) {
			const a = `${String(r)}s`, i = e.filter((e) => Ut(e) && e.epochSeconds === r);
			if (i.length <= 1) continue;
			const { slug: s, label: o } = Kt(i);
			for (const e of D) n.push(qt({
				id: Pe("consensus_cell", {
					scope: s,
					strategy: e,
					epoch_seconds: r
				}),
				label: Xt("consensus_cell_label", {
					scope_label: o,
					strategy_label: We[e] ?? e,
					suffix: a
				}),
				strategy: e,
				members: i,
				epochSeconds: r,
				implementationVersion: t
			}));
		}
		return n;
	}(s, r));
	const o = function(e) {
		const t = /* @__PURE__ */ new Map(), n = [];
		for (const a of e) {
			const e = t.get(a.id);
			if (e !== a.configHash) {
				if (void 0 !== e) throw new Error(`cube plan holds ${a.id} under two configs (${e}, ${a.configHash})`);
				t.set(a.id, a.configHash), n.push(a);
			}
		}
		return n;
	}(s).map(wt);
	return {
		configs: o,
		skipped: i,
		warnings: Jt(o),
		summary: $t({
			configs: o,
			skipped: i
		})
	};
}
let jt, Gt;
function Ht() {
	return jt ??= Pt({
		includeFamilies: ["count_hasib", "consensus"],
		epochSeconds: [30, 60],
		includeConsensus: !0
	}), jt;
}
function $t(e) {
	const t = { ...Rt }, n = { ...Dt };
	for (const a of e.configs) t[a.family] += 1, n[a.validationStatus] += 1;
	return {
		total: e.configs.length,
		byFamily: t,
		byValidationStatus: n,
		skipped: e.skipped.length
	};
}
function qt(e) {
	const t = e.implementationVersion ?? Tt, n = e.members.map((e) => e.id), a = [...e.members].sort((e, t) => e.id < t.id ? -1 : e.id > t.id ? 1 : 0).map((e) => e.configHash);
	return {
		...Qt({
			id: e.id,
			family: S,
			label: e.label,
			algorithm: `consensus:${e.strategy}`,
			outputKind: M,
			epochSeconds: e.epochSeconds,
			input: {
				family: "algorithm_outputs",
				epochSeconds: e.epochSeconds,
				seriesKey: n.join(",")
			},
			parameters: {
				strategy: e.strategy,
				inputConfigIds: n,
				inputConfigHashes: a,
				inputCount: n.length
			},
			implementationVersion: t,
			validationStatus: l,
			defaultIncluded: !0,
			exploratory: !0,
			lineage: n
		}),
		conformance: kt("consensus_majority_vote")
	};
}
function Bt(e) {
	const t = Ot(e.countFamily, e.axis, e.epochSeconds), n = $e(e.family.slug, e.countFamily, e.axis, e.epochSeconds) ? y : G;
	return {
		...Qt({
			id: Pe("count_cell", {
				method_family: e.family.slug,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: _,
			label: Xt("count_cell_label", {
				method_label: e.family.label,
				input_label: Yt(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.family.algorithm,
			outputKind: v,
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
			exploratory: n === G,
			lineage: [t]
		}),
		conformance: e.family.conformance
	};
}
function zt(e) {
	const t = Ot(e.countFamily, e.axis, e.epochSeconds);
	return {
		...Qt({
			id: Pe("count_cell", {
				method_family: e.variant.slug,
				implementation_variant: e.variant.implementation,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: _,
			label: Xt("count_provenance_cell_label", {
				method_label: e.variant.label,
				implementation_label: e.variant.implementationLabel,
				input_label: Yt(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.variant.algorithm,
			outputKind: v,
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
			validationStatus: h,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [t]
		}),
		conformance: e.variant.conformance
	};
}
function Wt(e, t) {
	const n = Re[e];
	if (void 0 === n) throw new Error(`no generated fixed output projection for family ${e}`);
	return {
		...Qt({
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
		conformance: kt(n.methodBindingId)
	};
}
function Vt(e, t) {
	const n = e.thresholdPresets && e.thresholdPresets.length > 0 ? e.thresholdPresets : [ge], a = kt(e.id);
	return n.map((n) => ({
		...Qt({
			id: Pe("model_cell", {
				model_slug: Zt(e.id),
				preset_slug: Zt(n.id)
			}),
			family: Le,
			label: Xt("model_cell_label", {
				model_label: e.label,
				preset_label: n.label
			}),
			algorithm: e.id,
			outputKind: ne,
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
			validationStatus: Y,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [`lstm:${e.id}`]
		}),
		conformance: a
	}));
}
function Ut(e) {
	return "sleep_wake_epoch" === e.outputKind && "consensus" !== e.family && void 0 === e.parameters.implementation;
}
function Kt(e) {
	const t = new Set(e.map((e) => e.family));
	if (1 === t.size && t.has("count_hasib")) return {
		slug: `${_}_sleep_wake`,
		label: Xt("count_consensus_scope_label", {})
	};
	const n = Array.from(new Set(e.filter((e) => e.family === Le).map((e) => "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm).filter((e) => e.length > 0))).sort();
	if (t.has("lstm") && n.length > 0) {
		const e = n.map((e) => Zt(e)).join("_"), a = t.has(_);
		return {
			slug: a ? `${_}_${Le}_${e}_sleep_wake` : `${Le}_${e}_sleep_wake`,
			label: Xt(a ? "count_lstm_consensus_scope_label" : "lstm_consensus_scope_label", { model_ids: n.join(", ") })
		};
	}
	return {
		slug: "all_sleep_wake",
		label: Xt("all_consensus_scope_label", {})
	};
}
function Qt(e) {
	return {
		...e,
		configHash: en(e)
	};
}
function Jt(e) {
	const t = [];
	return e.some((e) => "count_hasib" === e.family && e.epochSeconds === At[0]) && t.push(Xt("count_30_warning", {})), e.some((e) => "lstm" === e.family) || t.push(Xt("no_lstm_warning", {})), t;
}
function Xt(e, t) {
	const n = Se[e];
	if (void 0 === n) throw new Error(`no generated planner message ${e}`);
	return Object.entries(t).reduce((e, [t, n]) => e.replace(`{${t}}`, String(n)), n);
}
function Yt(e, t, n) {
	return H[e].labelTemplate.replace("{axis}", t).replace("{axis_label}", we.axis?.[t] ?? t).replace("{epoch_seconds}", String(n));
}
function Zt(e) {
	return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function en(e) {
	const t = tn(e);
	let n = K.initialValue;
	for (let a = 0; a < t.length; a += 1) n ^= t.charCodeAt(a), n = Math.imul(n, K.prime) >>> 0;
	return n.toString(16).padStart(K.lowercaseHexWidth, "0");
}
function tn(e) {
	return null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map((e) => tn(e)).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => `${JSON.stringify(e)}:${tn(t)}`).join(",")}}`;
}
const nn = new Map(E.map((e) => [e.id, {
	id: e.id,
	conformance: e.conformance,
	needsModelArtifact: e.needsModelArtifact
}]));
function an(e) {
	return nn.get(e)?.conformance ?? null;
}
const rn = 4, sn = 10, on = Ht().configs.map((e) => ({
	value: e.id,
	label: `Tensor: ${e.label}`
})), ln = new Set(_e);
function cn(e) {
	if (!ln.has(e)) throw new Error(`STANDARD_ALGORITHM_OPTIONS references '${e}', which is not a generated scoring-method contract id.`);
	return {
		value: e,
		label: me.AlgorithmType[e]
	};
}
const dn = [
	de.SADEH_1994_ACTILIFE,
	de.SADEH_1994_ORIGINAL,
	de.SADEH_1994_GGIR,
	de.COLE_KRIPKE_1992_ACTILIFE,
	de.COLE_KRIPKE_1992_ORIGINAL,
	de.COLE_KRIPKE_1992_GGIR
], un = [de.LSTM_SLEEP_WAKE, de.VAN_HEES_2015], pn = [
	de.UCSD_SCRIPPS_2010,
	de.SAZONOV_2004,
	de.SYED_CNN,
	de.ACTIWARE_SLEEP_WAKE
].map((e) => {
	return "needs_model" !== an((t = cn(e)).value) ? t : {
		...t,
		disabled: !0
	};
	var t;
}), mn = [
	...dn.map(cn),
	{
		value: tt.TENSOR_MAJORITY_VOTE,
		label: "Tensor majority vote"
	},
	...un.map(cn),
	...pn
], fn = [...mn, ...on], _n = {
	count: "Count-based sleep/wake",
	window: "Window / HDCZA",
	neural: "Neural",
	experimental: "Experimental (provisional)",
	tensor: "Tensor variants (A/B)"
}, yn = [
	"count",
	"window",
	"neural",
	"experimental",
	"tensor"
], gn = new Map(E.map((e) => [e.id, e.execution]));
function hn(e) {
	if (!ln.has(e)) return "tensor";
	const t = gn.get(e);
	if ("neural_model" === t) return "neural";
	if ("angle_spt" === t) return "window";
	const n = an(e);
	return "provisional" === n || "needs_model" === n ? "experimental" : "count";
}
function wn(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = hn(n.value), a = t.get(e) ?? [];
		a.push(n), t.set(e, a);
	}
	return yn.flatMap((e) => {
		const n = t.get(e);
		return n ? [{
			label: _n[e],
			options: n
		}] : [];
	});
}
wn(mn), wn(fn);
const bn = Object.fromEntries(a.map((e) => [e.id, {
	onsetN: e.onsetMinConsecutiveSleep,
	offsetN: e.offsetMinConsecutiveMinutes,
	offsetState: e.offsetScanState,
	label: e.label
}])), vn = bn[x.CONSECUTIVE_ONSET3S_OFFSET5S];
function kn(e) {
	return bn[e] ?? vn;
}
function Sn(e) {
	return e?.markerType === qe.MAIN_SLEEP;
}
function In(e) {
	return e?.markerType === qe.NAP;
}
function En(e) {
	return void 0 !== e?.ggirBundleRevision;
}
function An(e) {
	return En(e) ? "GGIR results retain their imported proposals; HDCZA replacement is unavailable." : null;
}
function Tn(e, t, n) {
	return En(e) && t.sleepMarkers.some(Sn) && !n.sleepMarkers.some(Sn);
}
function Rn(e, t) {
	if (t?.isInvalidNight) return { kind: "invalid" };
	const n = t?.sleepMarkers.find(Sn);
	return n ? {
		kind: "scored",
		main: n
	} : {
		kind: t ? "naps/nonwear-only" : "unreviewed",
		window: e
	};
}
a.map(({ id: e, label: t }) => ({
	value: e,
	label: t
})), je.NONE, je.WEBSTER, qe.MAIN_SLEEP, qe.NAP, [
	He.SMART,
	He.DIARY,
	He.HDCZA,
	He.L5,
	He.LONGEST_BOUT,
	He.EVENT_MARKER,
	He.ACTIWARE_REST_INTERVAL,
	He.NONE
].map((e) => ({
	value: e,
	label: me.PeriodGuiderType[e]
}));
const Dn = "GGIR nonwear", On = {
	DIARY: ut.diary,
	HDCZA: ut.hdcza,
	L5: ut.l5,
	SELECTED_SCORER_FIRST_LAST: ut.selected_scorer_first_last,
	SELECTED_SCORER_LONGEST_BOUT: ut.selected_scorer_longest_bout,
	QUIET_BOUT: ut.quiet_bout,
	EVENT_MARKER: ut.event_marker,
	ACTIWARE_REST_INTERVAL: ut.actiware_rest_interval,
	NONE: ut.none
}, Mn = "use_source_a", xn = "use_source_b", Cn = "intersection", Nn = "union", Fn = "source_b_bounded_by_source_a", Ln = "sanity_clamp_source_b_to_source_a", Pn = {
	sourceA: f.sleep_period_detection.source_a,
	sourceB: f.sleep_period_detection.source_b,
	fusionPolicy: f.sleep_period_detection.fusion_policy,
	mergeGapMinutes: f.sleep_period_detection.merge_gap_minutes,
	paddingMinutes: f.sleep_period_detection.padding_minutes,
	minOverlapJaccard: f.sleep_period_detection.min_overlap_jaccard,
	applyNonwearGate: f.sleep_period_detection.apply_nonwear_gate
};
function jn(e) {
	const t = Pn;
	return e.sourceA === t.sourceA && e.sourceB === t.sourceB && e.fusionPolicy === t.fusionPolicy && e.mergeGapMinutes === t.mergeGapMinutes && e.paddingMinutes === t.paddingMinutes && e.minOverlapJaccard === t.minOverlapJaccard && e.applyNonwearGate === t.applyNonwearGate;
}
const Gn = me.SleepPeriodWindowSourceType, Hn = Object.values(ut).map((e) => ({
	value: e,
	label: Gn[e]
})), $n = [
	{
		value: Mn,
		label: "Use source A"
	},
	{
		value: xn,
		label: "Use source B"
	},
	{
		value: Cn,
		label: "A intersect B"
	},
	{
		value: Nn,
		label: "A union B"
	},
	{
		value: Fn,
		label: "B bounded by A"
	},
	{
		value: Ln,
		label: "Use B, clamp to A if mismatch"
	}
];
function qn(e) {
	return Hn.find((t) => t.value === e)?.label ?? e;
}
function Bn(e) {
	const t = zn(e), n = t.applyNonwearGate ? "nonwear gate on" : "nonwear gate off";
	return `${qn(t.sourceA)} + ${qn(t.sourceB)}; ${function(e) {
		return $n.find((t) => t.value === e)?.label ?? e;
	}(t.fusionPolicy)}; ${n}`;
}
function zn(e) {
	const t = e ?? {};
	return {
		...Pn,
		sourceA: t.sourceA ?? t.source_a ?? Pn.sourceA,
		sourceB: t.sourceB ?? t.source_b ?? Pn.sourceB,
		fusionPolicy: t.fusionPolicy ?? t.fusion_policy ?? Pn.fusionPolicy,
		mergeGapMinutes: t.mergeGapMinutes ?? t.merge_gap_minutes ?? Pn.mergeGapMinutes,
		paddingMinutes: t.paddingMinutes ?? t.padding_minutes ?? Pn.paddingMinutes,
		minOverlapJaccard: t.minOverlapJaccard ?? t.min_overlap_jaccard ?? Pn.minOverlapJaccard,
		applyNonwearGate: t.applyNonwearGate ?? t.apply_nonwear_gate ?? Pn.applyNonwearGate
	};
}
function Wn(e) {
	const t = zn(e);
	return {
		source_a: t.sourceA,
		source_b: t.sourceB,
		fusion_policy: t.fusionPolicy,
		merge_gap_minutes: t.mergeGapMinutes,
		padding_minutes: t.paddingMinutes,
		min_overlap_jaccard: t.minOverlapJaccard,
		apply_nonwear_gate: t.applyNonwearGate
	};
}
function Vn(e) {
	switch (e.fusionPolicy === xn ? e.sourceB : e.sourceA) {
		case On.DIARY: return He.DIARY;
		case On.HDCZA: return He.HDCZA;
		case On.L5: return He.L5;
		case On.SELECTED_SCORER_FIRST_LAST:
		case On.SELECTED_SCORER_LONGEST_BOUT: return He.LONGEST_BOUT;
		case On.EVENT_MARKER: return He.EVENT_MARKER;
		case On.ACTIWARE_REST_INTERVAL: return He.ACTIWARE_REST_INTERVAL;
		case On.NONE: return He.NONE;
	}
	return He.NONE;
}
const Un = {
	files: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "none",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: null
	},
	activityDays: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 1,
		workspaceOrder: null
	},
	scoredVariantMasks: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 2,
		workspaceOrder: null
	},
	markers: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 3,
		workspaceOrder: null
	},
	studySettings: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: 4
	},
	sensorNonwear: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 4,
		workspaceOrder: null
	},
	diaryEntries: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "diary",
		cascadeOrder: 5,
		workspaceOrder: null
	},
	stagedDiaryEntries: {
		class: "canonical",
		backup: !0,
		cascade: "attachedFileId",
		workspace: "unattached",
		aggregate: "diary",
		cascadeOrder: 7,
		workspaceOrder: 7
	},
	auditLog: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "none",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: null
	},
	scoringSessions: {
		class: "operational",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 8,
		workspaceOrder: null
	},
	walLog: {
		class: "operational",
		backup: !0,
		cascade: "fileId",
		workspace: "all",
		aggregate: "file",
		cascadeOrder: 20,
		workspaceOrder: 9
	},
	algorithmRuns: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 9,
		workspaceOrder: null
	},
	dailyGgirSummaries: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 12,
		workspaceOrder: null
	},
	viewLogs: {
		class: "operational",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: 6
	},
	localExecutions: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 10,
		workspaceOrder: null
	},
	complexityEvidence: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 11,
		workspaceOrder: null
	},
	projectMeta: {
		class: "operational",
		backup: !1,
		cascade: null,
		workspace: "none",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: null
	},
	diaryBindingDirty: {
		class: "operational",
		backup: !1,
		cascade: null,
		workspace: "none",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: null
	},
	presetFamilies: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: 5
	},
	diaryOccurrences: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "unattached",
		aggregate: "diary",
		cascadeOrder: 6,
		workspaceOrder: 8
	},
	diaryDecisionLogs: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: 3
	},
	diaryImportSessions: {
		class: "operational",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: 1
	},
	diaryImportSessionBytes: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: 2
	},
	ggirResultsBundles: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 13,
		workspaceOrder: null
	},
	ggirResultsBlobs: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 21,
		workspaceOrder: null
	},
	ggirCorrectedValues: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 22,
		workspaceOrder: null
	},
	ggirScorerReviews: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 14,
		workspaceOrder: null
	},
	actiwareStatisticsInputs: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 15,
		workspaceOrder: null
	},
	physicalActivityFileSummaries: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 16,
		workspaceOrder: null
	},
	markerProvenance: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 17,
		workspaceOrder: null
	},
	actiwareFileData: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 18,
		workspaceOrder: null
	},
	placementResults: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 19,
		workspaceOrder: null
	}
}, Kn = Object.fromEntries(Object.entries(Un).filter(([, e]) => null !== e.cascade).sort(([, e], [, t]) => e.cascadeOrder - t.cascadeOrder).map(([e, t]) => [e, t.cascade])), Qn = Object.entries(Un).filter(([, e]) => "none" !== e.workspace).sort(([, e], [, t]) => e.workspaceOrder - t.workspaceOrder).map(([e]) => e), Jn = (Object.entries(Un).filter(([, e]) => "unattached" === e.workspace).map(([e]) => e), Object.entries(Un).filter(([, e]) => e.backup).map(([e]) => e), Qn.filter((e) => "diary" === Un[e].aggregate), [{
	table: "actiwareFileData",
	field: "actiwareStatisticsNeedsRecompute"
}]), Xn = /* @__PURE__ */ new Set([
	"diaryEntries",
	"diaryOccurrences",
	"stagedDiaryEntries"
]);
function Yn(e, t) {
	if (Xn.has(t)) throw new Error(`The diary store ${t} is written only by db/diary.`);
	return e[t];
}
const Zn = /* @__PURE__ */ new Set([
	"auto_nonwear_applied",
	"auto_score_applied",
	"candidate_copied",
	"consensus_toggled",
	"marker_adjusted",
	"marker_deleted",
	"marker_moved",
	"marker_placed",
	"markers_cleared",
	"markers_saved",
	"no_nonwear_toggled",
	"invalid_night_toggled",
	"notes_changed",
	"redo",
	"sleep_period_merged",
	"sleep_period_split",
	"undo"
]), ea = /\{[^{}]+\}/g;
function ta(e, t, n) {
	if (null == t) return "";
	if ("object" == typeof t) throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${e}=${!0 === n?.allowReserved ? t : encodeURIComponent(t)}`;
}
function na(e, t, n) {
	if (!t || "object" != typeof t) return "";
	const a = [], r = {
		simple: ",",
		label: ".",
		matrix: ";"
	}[n.style] || "&";
	if ("deepObject" !== n.style && !1 === n.explode) {
		for (const e in t) a.push(e, !0 === n.allowReserved ? t[e] : encodeURIComponent(t[e]));
		const r = a.join(",");
		switch (n.style) {
			case "form": return `${e}=${r}`;
			case "label": return `.${r}`;
			case "matrix": return `;${e}=${r}`;
			default: return r;
		}
	}
	for (const s in t) {
		const r = "deepObject" === n.style ? `${e}[${s}]` : s;
		a.push(ta(r, t[s], n));
	}
	const i = a.join(r);
	return "label" === n.style || "matrix" === n.style ? `${r}${i}` : i;
}
function aa(e, t, n) {
	if (!Array.isArray(t)) return "";
	if (!1 === n.explode) {
		const a = {
			form: ",",
			spaceDelimited: "%20",
			pipeDelimited: "|"
		}[n.style] || ",", r = (!0 === n.allowReserved ? t : t.map((e) => encodeURIComponent(e))).join(a);
		switch (n.style) {
			case "simple": return r;
			case "label": return `.${r}`;
			case "matrix": return `;${e}=${r}`;
			default: return `${e}=${r}`;
		}
	}
	const a = {
		simple: ",",
		label: ".",
		matrix: ";"
	}[n.style] || "&", r = [];
	for (const i of t) "simple" === n.style || "label" === n.style ? r.push(!0 === n.allowReserved ? i : encodeURIComponent(i)) : r.push(ta(e, i, n));
	return "label" === n.style || "matrix" === n.style ? `${a}${r.join(a)}` : r.join(a);
}
function ra(e) {
	return function(t) {
		const n = [];
		if (t && "object" == typeof t) for (const a in t) {
			const r = t[a];
			if (null != r) if (Array.isArray(r)) {
				if (0 === r.length) continue;
				n.push(aa(a, r, {
					style: "form",
					explode: !0,
					...e?.array,
					allowReserved: e?.allowReserved || !1
				}));
			} else "object" != typeof r ? n.push(ta(a, r, e)) : n.push(na(a, r, {
				style: "deepObject",
				explode: !0,
				...e?.object,
				allowReserved: e?.allowReserved || !1
			}));
		}
		return n.join("&");
	};
}
function ia(e, t) {
	let n = e;
	for (const a of e.match(ea) ?? []) {
		let e = a.substring(1, a.length - 1), r = !1, i = "simple";
		if (e.endsWith("*") && (r = !0, e = e.substring(0, e.length - 1)), e.startsWith(".") ? (i = "label", e = e.substring(1)) : e.startsWith(";") && (i = "matrix", e = e.substring(1)), !t || void 0 === t[e] || null === t[e]) continue;
		const s = t[e];
		n = Array.isArray(s) ? n.replace(a, aa(e, s, {
			style: i,
			explode: r
		})) : "object" != typeof s ? "matrix" !== i ? n.replace(a, "label" === i ? `.${encodeURIComponent(s)}` : encodeURIComponent(s)) : n.replace(a, `;${ta(e, s)}`) : n.replace(a, na(e, s, {
			style: i,
			explode: r
		}));
	}
	return n;
}
function sa(e, t) {
	return e instanceof FormData ? e : t && "application/x-www-form-urlencoded" === (t.get instanceof Function ? t.get("Content-Type") ?? t.get("content-type") : t["Content-Type"] ?? t["content-type"]) ? new URLSearchParams(e).toString() : JSON.stringify(e);
}
function oa(...e) {
	const t = new Headers();
	for (const n of e) {
		if (!n || "object" != typeof n) continue;
		const e = n instanceof Headers ? n.entries() : Object.entries(n);
		for (const [n, a] of e) if (null === a) t.delete(n);
		else if (Array.isArray(a)) for (const e of a) t.append(n, e);
		else void 0 !== a && t.set(n, a);
	}
	return t;
}
function la(e) {
	return e.endsWith("/") ? e.substring(0, e.length - 1) : e;
}
function ca(e) {
	const t = e.split(/[/\\]/);
	return t[t.length - 1] || e;
}
var da = class e {
	path;
	name;
	lastModified;
	fileSize;
	start;
	end;
	constructor(e) {
		this.path = e.path, this.name = e.name, this.fileSize = e.fileSize, this.lastModified = e.lastModified, this.start = e.start ?? 0, this.end = e.end ?? e.fileSize;
	}
	static async fromPath(t) {
		const { stat: n } = await import("./dist-js-CMqw3VI6.js"), a = await n(t), r = a.mtime ? a.mtime.getTime() : 0;
		return new e({
			path: t,
			name: ca(t),
			fileSize: a.size,
			lastModified: r
		});
	}
	get size() {
		return this.end - this.start;
	}
	slice(t, n) {
		const { start: a, end: r } = function(e, t, n) {
			const a = (t, n) => void 0 === t ? n : t < 0 ? Math.max(e + t, 0) : Math.min(t, e), r = a(t, 0), i = a(n, e);
			return {
				start: r,
				end: Math.max(r, i)
			};
		}(this.size, t, n);
		return new e({
			path: this.path,
			name: this.name,
			fileSize: this.fileSize,
			lastModified: this.lastModified,
			start: this.start + a,
			end: this.start + r
		});
	}
	async arrayBuffer() {
		const e = this.size;
		if (e <= 0) return /* @__PURE__ */ new ArrayBuffer(0);
		const { open: t, SeekMode: n } = await import("./dist-js-CMqw3VI6.js"), a = await t(this.path, { read: !0 });
		try {
			await a.seek(this.start, n.Start);
			const t = new Uint8Array(e);
			let r = 0;
			for (; r < e;) {
				const e = await a.read(t.subarray(r));
				if (null === e || 0 === e) break;
				r += e;
			}
			return r === e ? t.buffer : t.buffer.slice(0, r);
		} finally {
			await a.close();
		}
	}
	async text() {
		const e = await this.arrayBuffer();
		return new TextDecoder().decode(e);
	}
};
async function ua(e) {
	return Be(e);
}
const pa = [
	"csv",
	"gt3x",
	"bin",
	"bz2",
	"tbz2"
], ma = "ggirImportRefusals", fa = "already-imported-different-content", _a = "local-storage", ya = "GGIR output folder", ga = "ggir-folder", ha = "import-in-progress", wa = {
	workspace: {
		label: "workspace changed",
		durableRefusal: !1
	},
	"csv-settings": {
		label: "CSV settings",
		durableRefusal: !1
	},
	"unsupported-format": {
		label: "unsupported file format",
		durableRefusal: !1
	},
	"empty-file": {
		label: "empty file",
		durableRefusal: !1
	},
	"invalid-data": {
		label: "invalid file data",
		durableRefusal: !1
	},
	[_a]: {
		label: "local storage",
		durableRefusal: !1
	},
	permission: {
		label: "permission",
		durableRefusal: !1
	},
	"browser-memory": {
		label: "browser memory",
		durableRefusal: !1
	},
	"time-limit": {
		label: "too large or slow for this browser",
		durableRefusal: !1
	},
	[ha]: {
		label: "earlier import still holds this file; try again in about 2 minutes",
		durableRefusal: !1
	},
	"decoder-crash": {
		label: "the decoder crashed on this file",
		durableRefusal: !1
	},
	"ggir-no-part4": {
		label: "GGIR made no Part 4 for this recording and an earlier version of the app refused it; import the folder again",
		durableRefusal: !0
	},
	"ggir-not-read": {
		label: "a GGIR file this recording needs could not be read; the receipt names it",
		durableRefusal: !0
	},
	"ggir-corrected-not-available": {
		label: "refused by an earlier version of the app; import the folder again",
		durableRefusal: !0
	},
	[fa]: {
		label: "already imported with different content and kept as it was; to replace it first use Export backup on the Workspace tab of the Files page then delete the earlier import on the Files page and import it again",
		durableRefusal: !0
	},
	[ga]: {
		label: "GGIR output folder cannot be imported; select the whole folder containing GGIR configuration and milestones",
		durableRefusal: !0
	},
	"aw5-unreadable": {
		label: "the Actiwatch database could not be read in this browser; the file is damaged or is not an Actiware database",
		durableRefusal: !1
	},
	"aw5-memory": {
		label: "the Actiwatch database could not be read in this browser; it ran out of memory; close other tabs or import fewer databases at once",
		durableRefusal: !1
	},
	"stale-app": {
		label: "this tab could not load part of the app because a newer version was installed in another tab; reload the page and try again",
		durableRefusal: !1
	},
	"unsupported-epoch": {
		label: `this recording epoch length cannot be stored; only ${m.join(" or ")} second epochs and shorter epochs that divide ${String(C)} seconds can be imported`,
		durableRefusal: !1
	},
	"processing-runtime": {
		label: "processing runtime",
		durableRefusal: !1
	}
}, ba = new Map(Object.entries(wa).map(([e, { label: t }]) => [t.toLowerCase(), e])), va = /categor(?:y|ies): ([a-z0-9; ]+?)(?: \(\d+\))?[.,]/u;
const Sa = Object.keys({
	workspace: null,
	"csv-settings": "/csv-import",
	"unsupported-format": "/csv-import",
	"empty-file": null,
	"invalid-data": "/csv-import",
	[_a]: null,
	permission: null,
	"browser-memory": null,
	"time-limit": null,
	[ha]: null,
	"decoder-crash": null,
	"ggir-no-part4": null,
	"ggir-not-read": null,
	"ggir-corrected-not-available": null,
	[fa]: null,
	[ga]: null,
	"aw5-unreadable": null,
	"aw5-memory": null,
	"stale-app": null,
	"unsupported-epoch": null,
	"processing-runtime": "/settings/processing"
});
function Ia(e) {
	return wa[e].label;
}
function Ea(e) {
	return Ia(function(e) {
		if (e instanceof Error && "category" in e && "string" == typeof e.category && Object.hasOwn(wa, e.category)) return e.category;
		const t = function(e) {
			try {
				return e instanceof Error ? e.message : "string" == typeof e ? e : "";
			} catch {
				return "";
			}
		}(e).toLowerCase();
		if (Object.hasOwn(wa, t)) return t;
		const n = ba.get(t) ?? ba.get(va.exec(t)?.[1] ?? "");
		return void 0 !== n ? n : t.includes("timed out during") ? "time-limit" : /failed to fetch dynamically imported module|error loading dynamically imported module|importing a module script failed/u.test(t) ? "stale-app" : t.includes("already being imported") ? "import-in-progress" : t.startsWith("wasm panic in ") ? "decoder-crash" : /workspace|scope changed|no longer active/u.test(t) ? "workspace" : /csv settings|column-mapped|column mapping|mapping .*required|settings .*incomplete|review data settings/u.test(t) ? "csv-settings" : /unsupported|not supported|unimplemented source-profile|unknown file (?:type|format)/u.test(t) ? "unsupported-format" : /out of memory|allocation failed|invalid array length|exceeds the v1 limit|too large (?:to process|for in-browser memory)/u.test(t) || /\bunreachable\b/u.test(t) && !t.startsWith("wasm panic in ") ? "browser-memory" : /empty|no data rows|did not contain any .*epochs/u.test(t) ? "empty-file" : /quota|indexeddb|dexie|database|storage|persist|saving|disk/u.test(t) ? "local-storage" : /permission|denied|unauthori[sz]ed|not allowed/u.test(t) ? "permission" : /parse|csv|row|column|timestamp|header|date|\btime\b|corrupt|invalid|malformed|decompress|archive|rdata/u.test(t) ? "invalid-data" : "processing-runtime";
	}(e));
}
const Aa = [
	"parse",
	"score",
	"nonwear",
	"save",
	"variants"
], Ta = {
	reading: [0, 30],
	parsing: [0, 45],
	epoching: [30, 50],
	scoring: [55, 72],
	nonwear: [72, 82],
	ggir: [82, 85],
	storing: [85, 98],
	variants: [98, 100],
	complete: [100, 100]
};
function Ra(e, t) {
	if (null === t) return -1;
	const [n, a] = Ta[e];
	return n + Math.max(0, Math.min(1, t)) * (a - n);
}
function Da(e, t) {
	return "gt3x" === e || "geneactiv_bin" === e || "nhanes" === e || t ? [
		"read",
		"parse",
		"epochs",
		"counts",
		"score",
		"nonwear",
		"ggir",
		"save",
		"variants"
	] : [
		"read",
		"parse",
		"score",
		"nonwear",
		"save",
		"variants"
	];
}
Object.keys(Ta);
new RegExp(`\\b(?:${[
	"AggregateError",
	"EvalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError",
	"RuntimeError",
	"CompileError",
	"LinkError",
	"QuotaExceededError",
	"Error"
].join("|")})\\b`), Object.values(j.errnames);
const Oa = new Set(Object.values(Ce));
function Ma(e) {
	return Oa.has(W(e));
}
function xa(e, t) {
	return `${e}:${t}`;
}
function Ca(e, t) {
	return {
		id: xa(e.sessionId, e.sequence),
		source: `/files/${String(e.fileId)}/${e.analysisDate}`,
		specversion: "1.0",
		type: e.action,
		time: (/* @__PURE__ */ new Date(1e3 * t)).toISOString(),
		subject: `file/${String(e.fileId)}/date/${e.analysisDate}`,
		datacontenttype: "application/json",
		data: {
			extra: e.payload ?? null,
			session_id: e.sessionId,
			sequence: e.sequence
		}
	};
}
const Na = [], Fa = /* @__PURE__ */ new Set([
	"Precomputed variant mask persistence failed",
	"Actiware statistics recalculation failed",
	"Auto-nonwear consensus ballot invalidation failed",
	"Background scored-variant warm failed",
	"Date navigation save failed",
	"Derive HASIB sib from stored anglez failed",
	"GGIR results recompute failed",
	"GGIR review recovery failed",
	"GGIR review settle before export failed",
	"GGIR night review read failed",
	"GGIR night clocks failed",
	"GGIR window placement failed",
	"GGIR night proposal failed",
	"GGIR circadian coverage store failed",
	"GGIR epoch analysis failed",
	"GGIR daily summary store failed",
	"GGIR activity day store failed",
	"MIMS activity day store failed",
	"GGIR results marker store failed",
	"GGIR corrected values cache write failed",
	"GGIR corrected values failed",
	"GGIR person summary recompute failed",
	"Local activity day unpack failed",
	"Nonwear queue prefill failed",
	"Nonwear queue retry failed",
	"Persisted store hydration failed",
	"Persisted store remove failed",
	"Persisted store write failed",
	"Query invalidation failed",
	"Rest interval write failed",
	"Rest proposal after the diary write failed",
	"Night save failed",
	"Night re-read failed",
	"Auto sleep failed",
	"Strict local algorithm requested without cached score",
	"Audit log entry has unparseable CloudEvent time",
	"Browser runtime error",
	"Unhandled promise rejection",
	"GGIR milestone could not be read",
	"Pre-migration snapshot not taken",
	"Pre-migration snapshot removed unread",
	"Pre-migration snapshot removed: it could not be rewritten"
]), La = /* @__PURE__ */ new Set([
	"error_type",
	"has_context",
	"file_id"
]), Pa = /* @__PURE__ */ new Set([
	"AggregateError",
	"Error",
	"EvalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError",
	"RuntimeError",
	"CompileError",
	"LinkError",
	"QuotaExceededError",
	"object",
	"string",
	"number",
	"boolean",
	"undefined"
]);
function ja(e, t, n) {
	const a = function(e) {
		if (!e) return;
		const t = {};
		for (const [n, a] of Object.entries(e)) La.has(n) && ("has_context" === n && "boolean" == typeof a && (t[n] = a), "file_id" === n && Number.isSafeInteger(a) && (t[n] = a), "error_type" === n && "string" == typeof a && (t[n] = Pa.has(a) ? a : "Error"));
		return Object.keys(t).length > 0 ? t : void 0;
	}(n);
	Na.push({
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		level: e,
		message: Fa.has(t) ? t : "Diagnostic event",
		...a ? { context: a } : {}
	}), Na.length > 500 && Na.splice(0, Na.length - 500);
}
function Ga(e) {
	return { error_type: e instanceof Error ? e.name : typeof e };
}
var Ha = class extends Error {
	name = "GgirResultsBundleError";
	category = ga;
	folderName;
	fileName;
	constructor(e, t, n) {
		super(e), this.folderName = t, this.fileName = n;
	}
};
const $a = /* @__PURE__ */ new WeakMap(), qa = /* @__PURE__ */ new WeakMap(), Ba = /* @__PURE__ */ new WeakMap();
function za(e, t) {
	const n = new File([], e);
	return Ba.set(n, t instanceof Ha ? t : new Ha(t ? "The GGIR output folder could not be read. Check folder access and open it again." : "The GGIR output folder is empty or contains no supported activity files.", e)), n;
}
function Wa(e) {
	return $a.get(e);
}
function Va(e, t) {
	qa.set(e, t);
}
function Ua(e) {
	const t = qa.get(e);
	if (t) return t;
	const n = e.webkitRelativePath;
	return "string" == typeof n && n ? n : e.name;
}
function Ka(e, t) {
	return /\.csv$/iu.test(e.name) && Ua(e) !== e.name ? new Ha("This CSV table could not be read as activity data. GGIR imports require the whole output folder containing meta/ and config.csv.", void 0, e.name) : t instanceof Error ? t : new Error(t);
}
function Qa(e, t = !1) {
	const n = e.replace(/\\/gu, "/");
	return !/(^|\/)(?:\._[^/]*|__MACOSX)(?:\/|$)/iu.test(n) && (t || !/(^|\/)(?:ms5\.outraw|sib\.reports|sleep\.qc)(?:\/|$)/iu.test(n));
}
function Ja(e) {
	const t = e.replace(/\\/g, "/").split("/").filter(Boolean), n = t.indexOf("meta");
	return n >= 0 && n < t.length - 1 ? t.slice(0, n).join("/") : null;
}
function Xa(e) {
	return t = er(e), /\.(rdata|rda)$/iu.test(t) ? Ja(e) : null;
	var t;
}
function Ya(e) {
	const t = e.map((e) => e.replace(/\\/gu, "/")).filter((e) => Qa(e, !0)), n = new Set(t.map(Xa).filter((e) => null !== e)), a = /* @__PURE__ */ new Map();
	for (const r of t) {
		const e = Ja(r);
		if (null === e || !n.has(e)) continue;
		const t = a.get(e) ?? [];
		t.push(r.slice(e ? e.length + 1 : 0)), a.set(e, t);
	}
	for (const [r, i] of a) {
		const e = r ? er(r) : void 0, n = [...new Set(i.filter((e) => e.split("/").length > 2).map((e) => e.split("/")[1] ?? "").filter(Boolean))].sort().map((e) => `meta/${e}`).join(", ") || "no part folders", a = r ? `${r}/` : "";
		if (!t.some((e) => e.startsWith(a) && "config.csv" === e.slice(a.length).toLowerCase())) throw new Ha(`The GGIR output has no config.csv (found ${n}). GGIR writes config.csv next to meta/; add it to the folder and import again.`, e);
		for (const t of [
			"basic",
			"ms2.out",
			"ms3.out",
			"ms4.out",
			"ms5.out"
		]) {
			const n = `meta/${t}/`, a = i.filter((e) => e.startsWith(n)).map((e) => e.slice(n.length)).find((e) => e.includes("/"))?.split("/")[0];
			if (a) throw new Ha(`meta/${t} contains a folder ${a}/ instead of ${"basic" === t ? "meta_*.RData" : "*.RData"} files: move its files up one level, as GGIR writes them.`, e);
		}
		if (!i.some((e) => /^meta\/basic\/meta_[^/]+\.(?:rdata|rda)$/iu.test(e))) throw new Ha(`meta/basic ${i.some((e) => e.startsWith("meta/basic/")) ? "contains no meta_*.RData files" : "is missing"} (found ${n}). Part 1 files (meta_*.RData) are needed.`, e);
	}
}
function Za(e) {
	return {
		...e.desiredTz ? { desiredtz: e.desiredTz } : {},
		...e.configTz ? { configtz: e.configTz } : {},
		..."boolean" == typeof e.imputeTimegaps ? { imputeTimegaps: e.imputeTimegaps } : {}
	};
}
function er(e) {
	const t = e.replace(/\\/g, "/").split("/");
	return t[t.length - 1] ?? e;
}
const tr = /^part2_(?:daysummary|summary)\.csv$/u, nr = /^(?:part4_summary_sleep_cleaned|part5_personsummary_.+)\.csv$/u;
function ar() {
	return Qe;
}
Qe.join(" · ");
const rr = [
	{
		key: "native_raw",
		label: "Native raw / archive",
		modeLabel: "Local parser",
		items: [
			"ActiGraph CSV / GT3X",
			"GENEActiv raw CSV / BIN",
			"NHANES PAX80 archives"
		]
	},
	{
		key: "mapped_vendor_csv",
		label: "Mapped vendor CSV",
		modeLabel: "Column map",
		items: [
			"ActLumus CSV",
			"ActTrust CSV",
			"Axivity",
			"ActivPAL",
			"Actical",
			"Philips Actiwatch / Spectrum CSV",
			"MotionWatch",
			"Activinsights",
			"Movisens",
			"Shimmer",
			"GaitUp",
			"Consumer wearables",
			"Other vendor epoch CSV"
		]
	},
	{
		key: "derived_sidecars",
		label: "Derived CSV imports",
		modeLabel: "Mapped or injected",
		items: [
			"GGIR meta RData",
			"GGIR output folder or .zip (Parts 1–5 + config.csv)",
			"GGIR 60s epoch CSV",
			"GGIR Part 5 day summaries",
			"MIMS metric columns"
		]
	},
	{
		key: "server_native_light",
		label: "Server-native light",
		modeLabel: "Server parser",
		items: [
			"Condor ActLumus TXT",
			"Condor ActTrust TXT",
			"CamNtech Actiwatch AWD"
		]
	}
].filter((e) => "Server parser" !== e.modeLabel);
function ir(e) {
	return void 0 !== (t = e, Ba.get(t)) || function(e, t = ar()) {
		const n = e.toLowerCase();
		return Qa(e) && t.some((e) => n.endsWith(e));
	}(e.name, ar());
	var t;
}
function sr(e) {
	return new Promise((t) => {
		let n = !1;
		const a = (e) => {
			n || (n = !0, window.removeEventListener("focus", r), t(e));
		};
		e.addEventListener("change", () => {
			const t = Array.from(e.files ?? []);
			a({ files: t });
		}), e.addEventListener("cancel", () => a({ cancelled: !0 }));
		const r = () => {
			setTimeout(() => {
				n || 0 !== (e.files?.length ?? 0) || a({ cancelled: !0 });
			}, 200);
		};
		window.addEventListener("focus", r);
	});
}
(rr[0]?.items ?? []).join(", "), rr.slice(1).map((e) => e.label).join(" and ");
const or = [
	".csv",
	".gt3x",
	".bin",
	".rdata",
	".rda",
	".zip",
	".tar.bz2",
	".tbz2"
];
function lr(e) {
	const t = document.createElement("input");
	t.type = "file", t.accept = ar().join(","), e && (t.multiple = !0);
	const n = sr(t);
	return t.click(), n.then((e) => "cancelled" in e ? null : e.files);
}
function cr() {
	const e = document.createElement("input");
	e.type = "file", e.setAttribute("webkitdirectory", "");
	const t = sr(e);
	return e.click(), t.then((e) => {
		if ("cancelled" in e) return null;
		const { files: t } = e;
		try {
			Ya(t.map(Ua));
		} catch (n) {
			if (!(n instanceof Ha)) throw n;
			return [za(n.folderName ?? "GGIR output folder", n)];
		}
		return t.filter((e) => ir(e) && Qa(Ua(e)));
	});
}
const dr = 1e5, ur = `The folder was not read: it holds folders nested more than ${String(32)} deep or more than ${dr.toLocaleString("en-US")} entries (a folder link that points back into its own folder does this). Pick the GGIR output folder itself.`;
async function pr(e, t = e.name, n) {
	try {
		const a = [], r = await mr(e, t, a, n);
		return Ya(a), r.length ? r : [za(e.name, !1)];
	} catch (a) {
		return [za(e.name, !(a instanceof Ha) || a)];
	}
}
async function mr(e, t, n, a) {
	if (!Qa(t)) return [];
	if (t.split("/").length > 32) throw new Ha(ur);
	const r = [], i = "function" == typeof e.values ? e.values() : e;
	for await (const s of i) {
		const e = s, i = t ? `${t}/${e.name}` : e.name;
		if (n.push("directory" === e.kind ? `${i}/` : i), n.length > dr) throw new Ha(ur);
		if (a?.(n.length), Qa(i)) {
			if ("file" === e.kind && "function" == typeof e.getFile && ir(e)) {
				const t = await e.getFile();
				Va(t, i), r.push(t);
				continue;
			}
			"directory" === e.kind && r.push(...await mr(e, i, n, a));
		}
	}
	return r;
}
function fr(e) {
	return e.isFile ? {
		kind: "file",
		name: e.name,
		getFile: () => new Promise((t, n) => e.file(t, n))
	} : {
		kind: "directory",
		name: e.name,
		values: () => _r(e.createReader())
	};
}
async function* _r(e) {
	const t = await new Promise((t, n) => e.readEntries(t, n));
	t.length && (yield* t.map(fr), yield* _r(e));
}
const yr = "auto-update is unavailable on the web platform";
let gr = null;
let hr = null;
function wr() {
	return hr || (hr = globalThis.isTauri ? {
		kind: "tauri",
		routerKind: "hash",
		capabilities: {
			tauri: !0,
			autoUpdate: "true" === {
				BASE_URL: "/sleep-scoring-wasm/",
				DEV: !1,
				MODE: "production",
				PROD: !0,
				SSR: !1,
				VITE_BASE_PATH: "/sleep-scoring-wasm/",
				VITE_FORCE_LOCAL_MODE: "true"
			}.VITE_ENABLE_TAURI_UPDATER
		},
		files: {
			pickFiles: (e) => async function(e) {
				const { open: t } = await import("./dist-js-DtyocxnK.js"), n = await t({
					multiple: e,
					directory: !1,
					filters: [{
						name: "Activity Files",
						extensions: pa
					}]
				});
				if (null == n) return null;
				const a = Array.isArray(n) ? n : [n], r = [];
				for (const i of a) r.push(await da.fromPath(i));
				return r.length > 0 ? r : null;
			}(e),
			pickFolder: () => async function() {
				const { open: e } = await import("./dist-js-DtyocxnK.js"), { invoke: t } = await import("./core-B0WeKh9d.js"), n = await e({
					directory: !0,
					multiple: !1
				});
				if ("string" != typeof n) return null;
				const a = await t("list_supported_files", { dir: n }), r = [];
				for (const i of a) r.push(await da.fromPath(i));
				return r.length > 0 ? r : null;
			}(),
			saveBlob: (e, t, n) => async function(e, t, n) {
				const { save: a } = await import("./dist-js-DtyocxnK.js"), { invoke: r } = await import("./core-B0WeKh9d.js");
				n?.throwIfAborted();
				const i = await z(a({ defaultPath: t }), n);
				if (n?.throwIfAborted(), !i) return null;
				const s = new Uint8Array(await z(e.arrayBuffer(), n)), o = Array.from(s);
				return n?.throwIfAborted(), await r("save_file_atomic", {
					path: i,
					bytes: o
				}), i;
			}(e, t, n)
		},
		fileDrop: { subscribe: (e) => function(e) {
			let t = null, n = !1;
			return (async () => {
				const { getCurrentWindow: a } = await import("./window-uHC0_7hY.js"), r = await a().onDragDropEvent(async (t) => {
					const n = t.payload;
					"enter" === n.type ? e({ phase: "enter" }) : "over" === n.type ? e({ phase: "over" }) : "leave" === n.type ? e({ phase: "leave" }) : "drop" === n.type && e({
						phase: "drop",
						sources: await Promise.all(n.paths.map((e) => da.fromPath(e)))
					});
				});
				n ? r() : t = r;
			})(), () => {
				n = !0, t?.();
			};
		}(e) },
		shell: {
			revealInFolder: async (e) => {
				try {
					await async function(e) {
						const { invoke: t } = await import("./core-B0WeKh9d.js");
						await t("plugin:opener|reveal_item_in_dir", { path: e });
					}(e);
				} catch (t) {
					console.warn("[platform] revealInFolder failed:", t);
				}
			},
			notify: async ({ title: e, body: t }) => {
				try {
					await async function(e, t) {
						const { invoke: n } = await import("./core-B0WeKh9d.js");
						let a = await n("plugin:notification|is_permission_granted");
						a || (a = "granted" === await n("plugin:notification|request_permission")), a && await n("plugin:notification|notify", { options: t ? {
							title: e,
							body: t
						} : { title: e } });
					}(e, t);
				} catch (n) {
					console.warn("[platform] notify failed:", n);
				}
			},
			setProgress: async (e) => {
				try {
					await async function(e) {
						const { getCurrentWindow: t, ProgressBarStatus: n } = await import("./window-uHC0_7hY.js"), a = t();
						if (null === e) await a.setProgressBar({ status: n.None });
						else {
							const t = Math.max(0, Math.min(100, Math.round(100 * e)));
							await a.setProgressBar({
								status: n.Normal,
								progress: t
							});
						}
					}(e);
				} catch (t) {
					console.warn("[platform] setProgress failed:", t);
				}
			},
			onCloseRequested: (e) => function(e) {
				let t = null, n = !1;
				return (async () => {
					const { getCurrentWindow: a } = await import("./window-uHC0_7hY.js"), r = await a().onCloseRequested(async (t) => {
						await e() || t.preventDefault();
					});
					n ? r() : t = r;
				})(), () => {
					n = !0, t?.();
				};
			}(e),
			onMenuAction: (e) => function(e) {
				let t = null, n = !1;
				return (async () => {
					const { listen: a } = await import("./event-BInfzwX-.js"), r = await a("menu-action", (t) => e(t.payload));
					n ? r() : t = r;
				})(), () => {
					n = !0, t?.();
				};
			}(e)
		},
		workspace: {
			switchWorkspace: (e) => async function(e) {
				const { invoke: t } = await import("./core-B0WeKh9d.js");
				await t("switch_workspace", { workspaceId: e });
			}(e),
			deleteWorkspace: (e) => async function(e) {
				const { invoke: t } = await import("./core-B0WeKh9d.js");
				await t("delete_workspace_db", { workspaceId: e });
			}(e),
			saveMarkers: (e) => async function(e) {
				const { invoke: t } = await import("./core-B0WeKh9d.js");
				await t("save_markers_to_sqlite", e);
			}(e),
			configurePeerGroup: (e, t) => async function(e, t) {
				const { invoke: n } = await import("./core-B0WeKh9d.js");
				await n("set_group_config", {
					groupHash: await ua(e),
					username: t
				});
			}(e, t),
			computeGroupHash: (e) => ua(e)
		},
		updater: {
			check: () => async function() {
				const { check: e } = await import("./dist-js-D7-Ut_gj.js"), t = await e();
				return t?.available ? (gr = t, {
					version: t.version,
					currentVersion: t.currentVersion,
					...t.body ? { body: t.body } : {},
					...t.date ? { date: t.date } : {}
				}) : (gr = null, null);
			}(),
			downloadAndInstall: (e) => async function(e) {
				if (!gr) throw new Error("No pending update. Call checkForUpdate() first.");
				const t = gr;
				let n = 0;
				await t.downloadAndInstall((t) => {
					if (e) switch (t.event) {
						case "Started":
							n = t.data.contentLength ?? 0, e({
								chunkSize: 0,
								total: n
							});
							break;
						case "Progress":
							e({
								chunkSize: t.data.chunkLength ?? 0,
								total: n
							});
							break;
						case "Finished": e({
							chunkSize: 0,
							total: n
						});
					}
				}), gr = null;
			}(e),
			relaunch: () => async function() {
				const { relaunch: e } = await import("./dist-js-Hcq9KDqU.js");
				if (!e) throw new Error("Relaunch API is unavailable");
				await e();
			}()
		}
	} : {
		kind: "web",
		routerKind: "browser",
		capabilities: {
			tauri: !1,
			autoUpdate: !1
		},
		files: {
			pickFiles: (e) => async function(e) {
				if ("showOpenFilePicker" in window) try {
					const t = await window.showOpenFilePicker({
						types: [{
							description: "Activity Files",
							accept: {
								"text/csv": [".csv"],
								"application/octet-stream": [
									".gt3x",
									".bin",
									".rdata",
									".rda"
								],
								"application/zip": [".gt3x", ".zip"],
								"application/x-bzip2": [".tar.bz2", ".tbz2"],
								...Object.fromEntries(ar().filter((e) => !or.includes(e)).map((e) => [`application/x-${e.slice(1)}`, [e]]))
							}
						}],
						multiple: e
					}), n = [];
					for (const e of t) n.push(await e.getFile());
					return n.length > 0 ? n : null;
				} catch (t) {
					return t instanceof DOMException && "AbortError" === t.name ? null : (console.warn("[web-dialogs] showOpenFilePicker failed, falling back to <input>:", t instanceof Error ? t.message : t), lr(e));
				}
				return lr(e);
			}(e),
			pickFolder: (e) => async function(e) {
				if ("showDirectoryPicker" in window) try {
					const t = await window.showDirectoryPicker();
					return await pr(t, t.name, e);
				} catch (t) {
					return t instanceof DOMException && "AbortError" === t.name ? null : (console.warn("[web-dialogs] showDirectoryPicker failed, falling back to <input>:", t instanceof Error ? t.message : t), cr());
				}
				return cr();
			}(e),
			saveBlob: (e, t, n) => (n?.throwIfAborted(), function(e, t) {
				const n = URL.createObjectURL(e), a = document.createElement("a");
				a.href = n, a.download = t, document.body.appendChild(a), a.click(), document.body.removeChild(a), setTimeout(() => URL.revokeObjectURL(n), 1e3);
			}(e, t), Promise.resolve(null))
		},
		fileDrop: { subscribe: (e, t) => {
			const n = t ?? window, a = (e) => Array.from(e.dataTransfer?.types ?? []).includes("Files"), r = (e) => Array.from(e.dataTransfer?.items ?? []).filter((e) => "file" === e.kind).map((e) => {
				const t = e.getAsFile?.();
				return e.webkitGetAsEntry?.()?.isDirectory ? {
					name: t?.name,
					type: e.type,
					directory: !0
				} : t ? {
					name: t.name,
					type: e.type
				} : { type: e.type };
			}), i = (t) => {
				const n = t;
				a(n) && (n.preventDefault(), e({
					phase: "enter",
					items: r(n)
				}));
			}, s = (t) => {
				const n = t;
				a(n) && (n.preventDefault(), e({
					phase: "over",
					items: r(n)
				}));
			}, o = (t) => {
				a(t) && e({ phase: "leave" });
			}, l = (t) => {
				const n = t;
				a(n) && (n.preventDefault(), n.dataTransfer && async function(e) {
					const t = Array.from(e.items ?? []).filter((e) => "file" === e.kind).map((e) => {
						const t = e, n = e.webkitGetAsEntry?.(), a = e.getAsFile?.();
						return {
							handle: t.getAsFileSystemHandle?.(),
							legacy: n,
							file: a
						};
					});
					return t.length ? (await Promise.all(t.map(async (e) => {
						const t = await e.handle?.catch(() => null) ?? (e.legacy ? fr(e.legacy) : null);
						return "directory" === t?.kind ? pr(t) : t?.getFile ? [await t.getFile().catch(() => za(t.name, !0))] : e.file ? [e.file] : [za(e.legacy?.name ?? "GGIR output folder", !0)];
					}))).flat() : Array.from(e.files);
				}(n.dataTransfer).then((t) => e({
					phase: "drop",
					sources: t
				})));
			};
			return n.addEventListener("dragenter", i), n.addEventListener("dragover", s), n.addEventListener("dragleave", o), n.addEventListener("drop", l), () => {
				n.removeEventListener("dragenter", i), n.removeEventListener("dragover", s), n.removeEventListener("dragleave", o), n.removeEventListener("drop", l);
			};
		} },
		shell: {
			revealInFolder: () => Promise.resolve(),
			notify: ({ title: e, body: t }) => ("undefined" != typeof Notification && "granted" === Notification.permission && new Notification(e, t ? { body: t } : void 0), Promise.resolve()),
			setProgress: () => Promise.resolve(),
			onCloseRequested: (e) => {
				const t = (t) => {
					!1 === e() && (t.preventDefault(), Reflect.set(t, "returnValue", ""));
				};
				return window.addEventListener("beforeunload", t), () => window.removeEventListener("beforeunload", t);
			},
			onMenuAction: () => () => {}
		},
		workspace: {
			switchWorkspace: () => Promise.resolve(),
			deleteWorkspace: () => Promise.resolve(),
			saveMarkers: () => Promise.resolve(),
			configurePeerGroup: () => Promise.resolve(),
			computeGroupHash: (e) => Be(e)
		},
		updater: {
			check: () => Promise.resolve(null),
			downloadAndInstall: () => Promise.reject(/* @__PURE__ */ new Error(yr)),
			relaunch: () => Promise.reject(/* @__PURE__ */ new Error(yr))
		}
	}), hr;
}
var br = class extends TypeError {
	constructor() {
		super("Workspace is local-only — server API calls are disabled"), this.name = "LocalOnlyWorkspaceError";
	}
};
async function vr(e) {
	if (!(e instanceof Response)) return e;
	if (!(e.headers.get("content-type") ?? "").startsWith("application/json")) return e;
	const n = t(await e.clone().text());
	if (null === n) return e;
	const a = new Headers(e.headers);
	return a.delete("content-length"), new Response(n, {
		status: e.status,
		statusText: e.statusText,
		headers: a
	});
}
function kr(e = {}) {
	return new Promise((t) => {
		t(function(e) {
			const t = !0 === e.preserveRequestIdentity;
			if (function() {
				if (wr().capabilities.tauri) return !1;
				const e = N().workspaces.activeId();
				if (!e) return !1;
				const t = N().workspaces.workspace(e);
				return void 0 === t || "" === t.serverUrl;
			}()) throw new br();
			const n = V.basePath, { sitePassword: a, username: r, selectedStudyId: i } = N().scoring(), s = { onRequest: ({ request: e }) => (a && !e.headers.has("X-Site-Password") && e.headers.set("X-Site-Password", a), t || e.headers.has("X-Username") || e.headers.set("X-Username", r || "anonymous"), t || e.headers.has("X-Study-Id") || null == i || e.headers.set("X-Study-Id", String(i)), e) }, o = function(e) {
				let { baseUrl: t = "", Request: n = globalThis.Request, fetch: a = globalThis.fetch, querySerializer: r, bodySerializer: i, pathSerializer: s, headers: o, requestInitExt: l, ...c } = { ...e };
				l = "object" == typeof process && Number.parseInt(process?.versions?.node?.substring(0, 2)) >= 18 && process.versions.undici ? l : void 0, t = la(t);
				const d = [];
				async function u(e, u) {
					const { baseUrl: p, fetch: m = a, Request: f = n, headers: _, params: y = {}, parseAs: g = "json", querySerializer: h, bodySerializer: w = i ?? sa, pathSerializer: b, body: v, middleware: k = [], ...S } = u || {};
					let I = t;
					p && (I = la(p) ?? t);
					let E = "function" == typeof r ? r : ra(r);
					h && (E = "function" == typeof h ? h : ra({
						..."object" == typeof r ? r : {},
						...h
					}));
					const A = b || s || ia, T = void 0 === v ? void 0 : w(v, oa(o, _, y.header)), R = oa(void 0 === T || T instanceof FormData ? {} : { "Content-Type": "application/json" }, o, _, y.header), D = [...d, ...k], O = {
						redirect: "follow",
						...c,
						...S,
						body: T,
						headers: R
					};
					let M, x, C, N = new f(function(e, t) {
						let n = `${t.baseUrl}${e}`;
						t.params?.path && (n = t.pathSerializer(n, t.params.path));
						let a = t.querySerializer(t.params.query ?? {});
						return a.startsWith("?") && (a = a.substring(1)), a && (n += `?${a}`), n;
					}(e, {
						baseUrl: I,
						params: y,
						querySerializer: E,
						pathSerializer: A
					}), O);
					for (const t in S) t in N || (N[t] = S[t]);
					if (D.length) {
						M = Math.random().toString(36).slice(2, 11), x = Object.freeze({
							baseUrl: I,
							fetch: m,
							parseAs: g,
							querySerializer: E,
							bodySerializer: w,
							pathSerializer: A
						});
						for (const t of D) if (t && "object" == typeof t && "function" == typeof t.onRequest) {
							const n = await t.onRequest({
								request: N,
								schemaPath: e,
								params: y,
								options: x,
								id: M
							});
							if (n) {
								if (!(n instanceof f)) {
									if (n instanceof Response) {
										C = n;
										break;
									}
									throw new Error("onRequest: must return new Request() or Response() when modifying the request");
								}
								N = n;
							}
						}
					}
					if (!C) {
						try {
							C = await m(N, l);
						} catch (P) {
							let t = P;
							if (D.length) for (let n = D.length - 1; n >= 0; n--) {
								const a = D[n];
								if (a && "object" == typeof a && "function" == typeof a.onError) {
									const n = await a.onError({
										request: N,
										error: t,
										schemaPath: e,
										params: y,
										options: x,
										id: M
									});
									if (n) {
										if (n instanceof Response) {
											t = void 0, C = n;
											break;
										}
										if (n instanceof Error) {
											t = n;
											continue;
										}
										throw new Error("onError: must return new Response() or instance of Error");
									}
								}
							}
							if (t) throw t;
						}
						if (D.length) for (let t = D.length - 1; t >= 0; t--) {
							const n = D[t];
							if (n && "object" == typeof n && "function" == typeof n.onResponse) {
								const t = await n.onResponse({
									request: N,
									response: C,
									schemaPath: e,
									params: y,
									options: x,
									id: M
								});
								if (t) {
									if (!(t instanceof Response)) throw new Error("onResponse: must return new Response() when modifying the response");
									C = t;
								}
							}
						}
					}
					const F = C.headers.get("Content-Length");
					if (204 === C.status || "HEAD" === N.method || "0" === F && !C.headers.get("Transfer-Encoding")?.includes("chunked")) return C.ok ? {
						data: void 0,
						response: C
					} : {
						error: void 0,
						response: C
					};
					if (C.ok) {
						const e = async () => {
							if ("stream" === g) return C.body;
							if ("json" === g && !F) {
								const e = await C.text();
								return e ? JSON.parse(e) : void 0;
							}
							return await C[g]();
						};
						return {
							data: await e(),
							response: C
						};
					}
					let L = await C.text();
					try {
						L = JSON.parse(L);
					} catch {}
					return {
						error: L,
						response: C
					};
				}
				return {
					request: (e, t, n) => u(t, {
						...n,
						method: e.toUpperCase()
					}),
					GET: (e, t) => u(e, {
						...t,
						method: "GET"
					}),
					PUT: (e, t) => u(e, {
						...t,
						method: "PUT"
					}),
					POST: (e, t) => u(e, {
						...t,
						method: "POST"
					}),
					DELETE: (e, t) => u(e, {
						...t,
						method: "DELETE"
					}),
					OPTIONS: (e, t) => u(e, {
						...t,
						method: "OPTIONS"
					}),
					HEAD: (e, t) => u(e, {
						...t,
						method: "HEAD"
					}),
					PATCH: (e, t) => u(e, {
						...t,
						method: "PATCH"
					}),
					TRACE: (e, t) => u(e, {
						...t,
						method: "TRACE"
					}),
					use(...e) {
						for (const t of e) if (t) {
							if ("object" != typeof t || !("onRequest" in t || "onResponse" in t || "onError" in t)) throw new Error("Middleware must be an object with one of `onRequest()`, `onResponse() or `onError()`");
							d.push(t);
						}
					},
					eject(...e) {
						for (const t of e) {
							const e = d.indexOf(t);
							-1 !== e && d.splice(e, 1);
						}
					}
				};
			}({
				baseUrl: n,
				fetch: (e) => fetch(e).then(vr)
			});
			return o.use(s), o;
		}(e));
	});
}
function Sr(e) {
	return void 0 === e ? "null" : null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map(Sr).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${JSON.stringify(e)}:${Sr(t)}`).join(",")}}`;
}
async function Ir(e, t) {
	const n = void 0 === t.studyId ? {} : { study_id: t.studyId };
	return Be(Sr({
		previous_hash: e ?? "",
		file_id: t.fileId,
		analysis_date: t.analysisDate,
		username: t.username,
		...n,
		action: t.action,
		client_timestamp: t.clientTimestamp,
		session_id: t.sessionId,
		sequence: t.sequence,
		payload: t.payload ?? null
	}));
}
async function Er(e) {
	const t = e.filter((e) => null != e.eventHash), n = function(e) {
		const t = /* @__PURE__ */ new Map();
		for (const [n, a] of e.entries()) {
			if ("audit_chain_reanchored" !== a.action) continue;
			const e = a.payload;
			if (void 0 === e) continue;
			const r = e.restoreId;
			if ("string" != typeof r || t.has(r)) continue;
			const i = e.firstRestoredHash;
			t.set(r, {
				index: n,
				firstRestoredHash: "string" == typeof i ? i : null
			});
		}
		return t;
	}(t);
	let a, r, i = null, s = 0;
	for (const [o, l] of t.entries()) {
		const e = l.restoredFromBackup, t = void 0 !== e && e !== a;
		if (void 0 !== e && t && o > 0) {
			const t = n.get(e);
			if (!(void 0 !== t && t.index < o) || null !== t.firstRestoredHash && t.firstRestoredHash !== l.eventHash) return {
				verified: !1,
				rows_checked: o,
				broken_at: l.id ?? null,
				reanchored_segments: s
			};
		}
		t && s++, void 0 === e ? r = void 0 : t && (r = e);
		const c = 0 === o || t, d = c ? l.previousHash ?? null : i;
		if (!c && l.previousHash !== (i ?? void 0)) return {
			verified: !1,
			rows_checked: o,
			broken_at: l.id ?? null,
			reanchored_segments: s
		};
		if (await Ir(d, void 0 !== e && e === r && void 0 !== l.restoredSourceFileId && l.restoredSourceFileId !== l.fileId ? {
			...l,
			fileId: l.restoredSourceFileId
		} : l) !== l.eventHash) return {
			verified: !1,
			rows_checked: o,
			broken_at: l.id ?? null,
			reanchored_segments: s
		};
		i = l.eventHash ?? null, a = l.restoredFromBackup;
	}
	return {
		verified: !0,
		rows_checked: t.length,
		broken_at: null,
		reanchored_segments: s
	};
}
function Ar() {
	const e = globalThis.__APP_VERSION__;
	return "string" == typeof e && e.length > 0 ? e : "dev";
}
function Tr(e) {
	const t = `[AuditLog] ${e}`;
	console.error(t);
}
function Rr(e, t, n) {
	if (0 === t.length) return;
	const a = n ?? {}, r = t.filter((e) => !(e in a));
	r.length > 0 && Tr(`"${e}" payload is missing declared key(s): ${r.join(", ")}`);
}
function Dr(e) {
	return {
		...e,
		appVersion: Ar()
	};
}
async function Or(e, t, n) {
	if (!("walLog" in e) || void 0 === e.walLog) return void await te(e, [e.auditLog], async () => xr(e, t), n);
	const a = j.currentTransaction;
	a?.db === e && "readwrite" === a.mode && a.storeNames.includes(e.auditLog.name) && a.storeNames.includes(e.walLog.name) ? await xr(e, t) : await Ve([e.auditLog], async () => xr(e, t), e, n);
}
const Mr = /* @__PURE__ */ new WeakMap();
async function xr(e, t) {
	const n = (await e.auditLog.orderBy("id").last())?.eventHash ?? null, a = Ir(n, t), r = j.currentTransaction ? await j.waitFor(a) : await a, i = {
		...t,
		...null !== n ? { previousHash: n } : {},
		eventHash: r
	}, s = await e.auditLog.add({ ...i });
	j.currentTransaction?.storeNames.includes("walLog") && await async function(e, t) {
		const { fileId: n, username: a, ...r } = t;
		await Ke({
			op: "audit_append",
			fileId: n,
			username: a,
			payload: {
				auditLogId: e,
				...Object.fromEntries(Object.entries(r).filter(([, e]) => void 0 !== e))
			}
		});
	}(s, i);
}
function Cr(e) {
	return "workspace" !== re[e.action]?.anchor || 0 === e.fileId ? e : {
		...e,
		fileId: 0,
		payload: {
			...e.payload,
			workspaceScoped: !0,
			openFileId: e.fileId,
			openAnalysisDate: e.analysisDate
		}
	};
}
function Nr(e, t) {
	return e.action === t.action && e.fileId === t.fileId && e.analysisDate === t.analysisDate && e.username === t.username && e.studyId === t.studyId && e.clientTimestamp === t.clientTimestamp && Sr(e.payload ?? null) === Sr(t.payload ?? null);
}
function Fr(e) {
	const t = void 0 === e.studyId ? "legacy-undefined" : null === e.studyId ? "default-null" : `study-${String(e.studyId)}`;
	return JSON.stringify([
		t,
		e.username,
		e.fileId,
		e.analysisDate
	]);
}
function Lr(e) {
	const t = Cr(e);
	return JSON.stringify([Fr(t), xa(t.sessionId, t.sequence)]);
}
function Pr(e, t) {
	const n = /* @__PURE__ */ new Set();
	for (const a of t) for (const t of e.get(a) ?? []) n.add(t);
	return [...n];
}
function jr(e) {
	return !!function(e) {
		return Zn.has(e);
	}(e) && (Tr(`"${e}" records a scorer-night edit; only the marker owner records it`), !0);
}
const Gr = new class {
	contextByDb = /* @__PURE__ */ new WeakMap();
	stateByBinding = /* @__PURE__ */ new WeakMap();
	settledMutationAudits = /* @__PURE__ */ new WeakMap();
	flushTimer = null;
	isFlushing = !1;
	flushRequested = !1;
	drainInFlight = null;
	startReplication() {
		window.addEventListener("visibilitychange", () => {
			"hidden" === document.visibilityState && this.flushToServer();
		}), setTimeout(() => {
			this.flushToServer();
		}, 3e3);
	}
	contextForDb(e) {
		let t = this.contextByDb.get(e);
		return t || (t = {
			fileId: null,
			analysisDate: null,
			username: null,
			studyId: void 0,
			sessionId: Me(),
			sequence: 0
		}, this.contextByDb.set(e, t)), t;
	}
	resolveTarget(e) {
		let t = e;
		if (!t) try {
			t = Ae();
		} catch {
			return null;
		}
		return {
			db: t,
			context: this.contextForDb(t)
		};
	}
	isNoOpRevisit(e, t) {
		if (t.action === Ce.SESSION_END) return 0 === e.context.sequence;
		let n = Mr.get(e.db);
		n || (n = /* @__PURE__ */ new Map(), Mr.set(e.db, n));
		const a = JSON.stringify([t.fileId, t.analysisDate]);
		if (t.action !== Ce.SESSION_START) return n.delete(a), !1;
		const r = JSON.stringify([t.username, t.studyId ?? null]), i = Sr(t.payload ?? null), s = n.get(a);
		return s?.actor === r && s.payload === i || (n.set(a, {
			actor: r,
			payload: i
		}), !1);
	}
	enqueueBoundRecord(e, t) {
		this.isNoOpRevisit(e, t) || (this.writeQueue.push(t), this.dbAffinityByRecord.set(t, e), e.context.sequence++);
	}
	captureWorkspaceBinding(e, t, n) {
		const a = this.resolveTarget(e);
		if (!a) throw new Error("Cannot capture audit context without an open workspace database");
		const { context: r } = a, i = void 0 !== n && r.fileId === n.fileId && r.analysisDate === n.analysisDate && r.username === t.username && r.studyId === t.studyId, s = Object.freeze({});
		return this.stateByBinding.set(s, {
			db: a.db,
			actor: t,
			capturedFileId: r.fileId,
			capturedAnalysisDate: r.analysisDate,
			ambient: i ? r : null,
			ambientSessionId: i ? r.sessionId : null,
			own: null
		}), s;
	}
	targetForBinding(e) {
		const t = this.stateByBinding.get(e);
		return t ? t.ambient && t.ambient.sessionId === t.ambientSessionId ? {
			db: t.db,
			context: t.ambient
		} : (t.ambient = null, t.ambientSessionId = null, t.own ??= {
			fileId: t.capturedFileId,
			analysisDate: t.capturedAnalysisDate,
			username: t.actor.username,
			studyId: t.actor.studyId,
			sessionId: Me(),
			sequence: 0
		}, {
			db: t.db,
			context: t.own
		}) : null;
	}
	setContext(e, t, n, a) {
		const r = this.resolveTarget();
		if (!r) return;
		const { context: i } = r, s = void 0 === n ? i.username : n, o = void 0 === a ? i.studyId : a;
		e === i.fileId && t === i.analysisDate && s === i.username && o === i.studyId || (i.sessionId = Me(), i.sequence = 0), i.fileId = e, i.analysisDate = t, i.username = s, i.studyId = o, this.flushToServer();
	}
	currentSessionId() {
		return this.resolveTarget()?.context.sessionId ?? null;
	}
	newSession() {
		this.flushToServer();
		const e = this.resolveTarget();
		e && (e.context.sessionId = Me(), e.context.sequence = 0);
	}
	record(e, t) {
		const n = re[e];
		n ? jr(e) || ("file" !== n.anchor ? (Rr(e, n.localPayloadKeys, t), "workspace" !== n.anchor ? this.log(e, t) : this.logWorkspaceEvent(e, t)) : Tr(`"${e}" is anchored to an explicit file/date; use recordFileEvent()`)) : Tr(`unknown audit action "${e}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordAppEvent(e, t) {
		this.record(e, t);
	}
	recordSessionBound(e, { fileId: t, analysisDate: n, action: a, payload: r }) {
		jr(a) || this.recordSessionAnchored(e, {
			fileId: t,
			analysisDate: n,
			action: a,
			...void 0 !== r ? { payload: r } : {}
		});
	}
	recordNightEdit(e, t) {
		if (e) return void this.recordSessionAnchored(e, t);
		const n = re[t.action];
		n ? (Rr(t.action, n.localPayloadKeys, t.payload), this.log(t.action, t.payload)) : Tr(`unknown audit action "${t.action}"; not in AUDIT_EVENT_CONTRACT`);
	}
	appendNightEditsInTransaction(e) {
		const t = /* @__PURE__ */ new Map(), n = j.currentTransaction, a = () => {
			for (const [e, { from: n, to: a, sessionId: r }] of t) e.sessionId === r && e.sequence === a && (e.sequence = n);
		};
		n?.on("abort", a), n?.on("error", a);
		const r = e.map(({ binding: e, input: n }) => {
			const a = re[n.action];
			if (!a || "session" !== a.anchor) return Tr(`"${n.action}" is not a session-anchored audit action`), null;
			Rr(n.action, a.localPayloadKeys, n.payload);
			const r = this.targetForBinding(e);
			if (!r) return Tr("night edit received an invalid audit workspace binding"), null;
			const { context: i } = r, s = {
				fileId: n.fileId,
				analysisDate: n.analysisDate,
				username: i.username ?? "unknown",
				...void 0 !== i.studyId ? { studyId: i.studyId } : {},
				action: n.action,
				clientTimestamp: Date.now() / 1e3,
				sessionId: i.sessionId,
				sequence: i.sequence,
				payload: Dr(n.payload)
			};
			return this.isNoOpRevisit(r, s) ? null : (i.sequence += 1, t.set(i, {
				from: t.get(i)?.from ?? s.sequence,
				to: i.sequence,
				sessionId: i.sessionId
			}), {
				db: r.db,
				record: s
			});
		});
		return r.reduce((e, t) => t ? e.then(() => Or(t.db, t.record)) : e, j.Promise.resolve()).then(() => r.map((e) => e ? xa(e.record.sessionId, e.record.sequence) : null));
	}
	recordSessionAnchored(e, { fileId: t, analysisDate: n, action: a, payload: r }) {
		const i = re[a];
		i ? "session" === i.anchor ? (Rr(a, i.localPayloadKeys, r), this.logFileEvent({
			fileId: t,
			analysisDate: n,
			action: a,
			...void 0 !== r ? { payload: r } : {}
		}, e)) : Tr(`"${a}" is anchored to "${i.anchor}"; use its matching audit entry point`) : Tr(`unknown audit action "${a}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordWorkspaceDurably(e, t, n, a) {
		const r = this.resolveTarget(n);
		return r ? this.recordWorkspaceTargetDurably(r, e, t) : Promise.resolve(!1);
	}
	recordWorkspaceBoundDurably(e, t, n, a) {
		const r = this.targetForBinding(e);
		return r ? this.recordWorkspaceTargetDurably(r, t, n, e) : (Tr("workspace event received an invalid audit workspace binding"), Promise.resolve(!1));
	}
	recordWorkspaceTargetDurably(e, t, n, a) {
		const r = re[t];
		return r ? "workspace" !== r.anchor ? (Tr(`"${t}" is anchored to "${r.anchor}"; use record() or recordFileEvent()`), Promise.resolve(!1)) : (Rr(t, r.localPayloadKeys, n), this.persistBoundRecordDurably(e, this.workspaceEventRecord(e, t, n), a)) : (Tr(`unknown audit action "${t}"; not in AUDIT_EVENT_CONTRACT`), Promise.resolve(!1));
	}
	recordFileEvent({ fileId: e, analysisDate: t, action: n, payload: a }, r) {
		const i = re[n];
		i ? "file" === i.anchor ? (Rr(n, i.localPayloadKeys, a), this.logFileEvent({
			fileId: e,
			analysisDate: t,
			action: n,
			...void 0 !== a ? { payload: a } : {}
		}, r)) : Tr(`"${n}" is anchored to "${i.anchor}"; use record() so it lands where the contract says`) : Tr(`unknown audit action "${n}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordFileEventDurably(e, t) {
		const { action: n, payload: a } = e, r = re[n];
		if (!r) return Tr(`unknown audit action "${n}"; not in AUDIT_EVENT_CONTRACT`), Promise.resolve(!1);
		if ("file" !== r.anchor) return Tr(`"${n}" is anchored to "${r.anchor}"; use record() so it lands where the contract says`), Promise.resolve(!1);
		Rr(n, r.localPayloadKeys, a);
		const i = t ? this.targetForBinding(t) : this.resolveTarget();
		return i ? this.persistBoundRecordDurably(i, this.fileEventRecord(i, e), t) : Promise.resolve(!1);
	}
	log(e, t) {
		const n = this.resolveTarget();
		if (!n) return;
		const { context: a } = n;
		null != a.fileId && null != a.analysisDate && (this.enqueueBoundRecord(n, {
			fileId: a.fileId,
			analysisDate: a.analysisDate,
			username: a.username ?? "unknown",
			...void 0 !== a.studyId ? { studyId: a.studyId } : {},
			action: e,
			clientTimestamp: Date.now() / 1e3,
			sessionId: a.sessionId,
			sequence: a.sequence,
			payload: Dr(t)
		}), this.drainQueue(n.db));
	}
	logWorkspaceEvent(e, t) {
		const n = this.resolveTarget();
		n && (this.enqueueWorkspaceEvent(n, e, t), this.drainQueue(n.db));
	}
	hasSettledMutationAudit(e) {
		const t = e ? this.settledMutationAudits.get(e) : void 0;
		let n = j.currentTransaction;
		for (; n?.parent;) n = n.parent;
		if (!e || !t || !n) return !1;
		if (null === t.transaction) {
			t.transaction = n;
			const a = () => {
				this.settledMutationAudits.get(e) === t && this.settledMutationAudits.delete(e);
			};
			n.on("complete", a), n.on("abort", a);
		}
		return t.transaction === n;
	}
	persistBoundRecordDurably(e, t, n) {
		return j.currentTransaction?.db === e.db && j.currentTransaction.storeNames.includes(e.db.auditLog.name) ? !this.hasSettledMutationAudit(n) && this.hasPendingWritesForDb(e.db) ? Promise.resolve(!1) : (e.context.sequence++, xr(e.db, t).then(() => !0)) : (n && this.settledMutationAudits.delete(n), this.enqueueBoundRecord(e, t), new Promise((n) => {
			this.durabilityWaiters.set(t, n), this.drainQueue(e.db).catch(() => {
				this.resolveDurability(t, !1);
			});
		}));
	}
	enqueueWorkspaceEvent(e, t, n) {
		const a = this.workspaceEventRecord(e, t, n);
		return this.enqueueBoundRecord(e, a), a;
	}
	workspaceEventRecord(e, t, n) {
		const { context: a } = e, r = null != a.fileId && null != a.analysisDate;
		return {
			fileId: 0,
			analysisDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			username: a.username ?? "unknown",
			...void 0 !== a.studyId ? { studyId: a.studyId } : {},
			action: t,
			clientTimestamp: Date.now() / 1e3,
			sessionId: a.sessionId,
			sequence: a.sequence,
			payload: Dr({
				...n,
				workspaceScoped: !0,
				...r ? {
					openFileId: a.fileId,
					openAnalysisDate: a.analysisDate
				} : {}
			})
		};
	}
	logFileEvent(e, t) {
		const n = t ? this.targetForBinding(t) : this.resolveTarget();
		if (!n) return t && Tr("file event received an invalid audit workspace binding"), null;
		const a = this.fileEventRecord(n, e);
		return this.enqueueBoundRecord(n, a), this.drainQueue(n.db), a;
	}
	fileEventRecord(e, { fileId: t, analysisDate: n, action: a, payload: r }) {
		const { context: i } = e;
		return {
			fileId: t,
			analysisDate: n,
			username: i.username ?? "unknown",
			...void 0 !== i.studyId ? { studyId: i.studyId } : {},
			action: a,
			clientTimestamp: Date.now() / 1e3,
			sessionId: i.sessionId,
			sequence: i.sequence,
			payload: Dr(r)
		};
	}
	writeQueue = [];
	dbAffinityByRecord = /* @__PURE__ */ new WeakMap();
	durabilityWaiters = /* @__PURE__ */ new Map();
	retryTimer = null;
	retryCount = 0;
	resolveDurability(e, t) {
		const n = this.durabilityWaiters.get(e);
		n && (this.durabilityWaiters.delete(e), n(t));
	}
	async settleWrites(e) {
		for (; this.writeQueue.length > 0;) {
			const t = this.writeQueue.length;
			if (await this.drainQueue(e), this.writeQueue.length >= t) return;
		}
	}
	hasPendingWritesForDb(e) {
		return this.writeQueue.some((t) => {
			const n = this.dbAffinityByRecord.get(t);
			return n?.db === e || n?.db.name === e.name;
		});
	}
	async settleWritesForDb(e, t) {
		if (t && this.stateByBinding.get(t)?.db !== e) return !1;
		if (t && j.currentTransaction?.db === e) {
			if (this.hasSettledMutationAudit(t)) return !0;
			if (this.hasPendingWritesForDb(e)) return !1;
		} else if (await this.settleWrites(e), this.hasPendingWritesForDb(e)) return !1;
		return t && this.settledMutationAudits.set(t, { transaction: null }), !0;
	}
	async settleWritesForReload() {
		return await this.settleWrites(), 0 === this.writeQueue.length;
	}
	drainQueue(e) {
		for (const n of this.writeQueue) {
			const t = this.dbAffinityByRecord.get(n);
			e && t?.db.name === e.name && this.dbAffinityByRecord.set(n, {
				...t,
				db: e
			});
		}
		if (this.drainInFlight) return this.drainInFlight;
		const t = this.runDrain().finally(() => {
			this.drainInFlight = null, this.writeQueue.length > 0 && null == this.retryTimer && this.drainQueue();
		});
		return this.drainInFlight = t, t;
	}
	async runDrain() {
		for (; this.writeQueue.length > 0;) {
			const e = this.writeQueue[0];
			if (!e) break;
			const t = this.dbAffinityByRecord.get(e);
			if (!t) {
				this.retryCount++;
				break;
			}
			let n, a = t.db;
			try {
				if (a.isOpen && !a.isOpen()) {
					if (le(a.name)) throw new Error("Captured audit workspace was deleted.");
					if (!await j.exists(a.name)) throw new Error("Captured audit workspace no longer exists.");
					he() && Ae() === a || (n = new Ne(a.name), await n.open(), a = n);
				}
				await Or(a, e), this.writeQueue.shift(), this.dbAffinityByRecord.delete(e), this.resolveDurability(e, !0), this.retryCount = 0;
			} catch {
				this.resolveDurability(e, !1), this.retryCount++, console.warn("[AuditLog] IndexedDB write failed; retaining event for retry");
				break;
			} finally {
				n?.close();
			}
		}
		this.writeQueue.length > 0 && null == this.retryTimer && (this.retryTimer = setTimeout(() => {
			this.retryTimer = null, this.drainQueue();
		}, Math.min(1e3 * 2 ** Math.min(this.retryCount, 5), 3e4)));
		for (const e of this.writeQueue) this.resolveDurability(e, !1);
		0 === this.retryCount && this.scheduleFlush();
	}
	onlineWatchArmed = !1;
	watchServerAvailability() {
		this.onlineWatchArmed || (this.onlineWatchArmed = !0, N().capabilities.onServerAvailable(() => {
			this.flushToServer();
		}));
	}
	scheduleFlush() {
		null == this.flushTimer && (this.flushTimer = setTimeout(() => {
			this.flushTimer = null, this.flushToServer();
		}, 1e4));
	}
	async flushToServer() {
		if (this.isFlushing) this.flushRequested = !0;
		else if (this.watchServerAvailability(), N().capabilities.serverAvailable()) {
			this.isFlushing = !0;
			try {
				let e;
				try {
					e = Ae();
				} catch {
					return;
				}
				const t = await kr({ preserveRequestIdentity: !0 }), n = this.replicationStateFor(e);
				for (let a = 0; a < 20; a++) {
					const a = await e.auditLog.orderBy("id").limit(500).toArray();
					if (0 === a.length) return;
					const r = /* @__PURE__ */ new Map();
					for (const e of a) {
						if (!Ma(e.action) || this.isQuarantined(n, e)) continue;
						const t = Cr(e), a = Fr(t);
						let i = r.get(a);
						i || (i = [], r.set(a, i)), i.push(t);
					}
					const i = /* @__PURE__ */ new Set();
					for (const [e, o] of r) {
						const a = o[0];
						if (!a) continue;
						const r = await this.sendGroup(t, n, {
							key: e,
							fileId: a.fileId,
							analysisDate: a.analysisDate,
							username: a.username,
							studyId: a.studyId,
							events: o
						});
						for (const e of r) i.add(e);
					}
					const s = [];
					for (const e of a) {
						if (null == e.id || !i.has(e.id)) break;
						s.push(e.id);
					}
					if (s.length > 0 && await te(e, [e.auditLog], async () => {
						await e.auditLog.bulkDelete(s);
					}), 0 === s.length) return;
					if (a.length < 500) return;
				}
			} catch {
				console.warn("[AuditLog] Flush failed; retaining unacknowledged events");
			} finally {
				this.isFlushing = !1;
				const e = this.flushRequested;
				this.flushRequested = !1, e && this.flushToServer();
			}
		}
	}
	replicationStateByDb = /* @__PURE__ */ new WeakMap();
	replicationStateFor(e) {
		let t = this.replicationStateByDb.get(e);
		return t || (t = {
			quarantinedEventKeys: /* @__PURE__ */ new Set(),
			conflictStrikes: /* @__PURE__ */ new Map()
		}, this.replicationStateByDb.set(e, t)), t;
	}
	isQuarantined(e, t) {
		return e.quarantinedEventKeys.has(Lr(t));
	}
	async sendGroup(e, t, { key: n, ...a }) {
		const r = await this.sendBatch(e, a);
		if (r.transient) return r.acknowledgedLocalIds;
		if (!r.conflicted) return t.conflictStrikes.delete(n), r.acknowledgedLocalIds;
		const i = (t.conflictStrikes.get(n) ?? 0) + 1;
		if (t.conflictStrikes.set(n, i), i < 3) return r.acknowledgedLocalIds;
		t.conflictStrikes.delete(n);
		const s = [];
		for (const o of a.events) {
			let n = {
				acknowledgedLocalIds: [],
				conflicted: !1,
				transient: !1,
				status: 0
			};
			for (let t = 0; t < 3 && (n = await this.sendBatch(e, {
				...a,
				events: [o]
			}), n.transient); t++);
			n.transient || (n.conflicted ? (t.quarantinedEventKeys.add(Lr(o)), N().sync.recordAuditQuarantine(), console.error(422 === n.status ? "[AuditLog] Server refused an audit event as a contract violation; retained locally and skipped in later batches" : "[AuditLog] Server refused an audit event as a conflicting identity; retained locally and skipped in later batches")) : s.push(...n.acknowledgedLocalIds));
		}
		return s;
	}
	async sendBatch(e, { fileId: t, analysisDate: n, username: a, studyId: r, events: i }) {
		if (0 === i.length) return {
			acknowledgedLocalIds: [],
			conflicted: !1,
			transient: !1,
			status: 0
		};
		try {
			const s = [], o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
			for (const e of i) {
				if (!Ma(e.action)) {
					console.warn("[AuditLog] Retaining event with an unknown action locally");
					continue;
				}
				const t = Number.isFinite(e.clientTimestamp) && e.clientTimestamp > 0 ? e.clientTimestamp : Date.now() / 1e3;
				t !== e.clientTimestamp && console.warn("[AuditLog] Invalid audit timestamp replaced before replication");
				const n = xa(e.sessionId, e.sequence), a = l.get(n);
				if (a) {
					if (!Nr(a, e)) {
						console.error("[AuditLog] Two local audit rows share one identity with different content; retaining the divergent row");
						continue;
					}
					console.warn("[AuditLog] Collapsing a duplicated audit identity before replication"), null != e.id && o.get(n)?.push(e.id);
				} else l.set(n, e), o.set(n, null != e.id ? [e.id] : []), s.push(Ca(e, t));
			}
			if (0 === s.length) return {
				acknowledgedLocalIds: [],
				conflicted: !1,
				transient: !1,
				status: 0
			};
			const c = await e.POST("/api/v1/audit/log", {
				headers: {
					"X-Username": a || "anonymous",
					..."number" == typeof r ? { "X-Study-Id": String(r) } : {}
				},
				body: {
					file_id: t,
					analysis_date: n,
					events: s
				}
			});
			if (c.error) {
				const { status: e } = c.response;
				console.warn(`[AuditLog] Retaining unacknowledged batch (HTTP ${e})`);
				const t = function(e, t) {
					if (409 !== e) return !1;
					const n = t?.detail;
					return "string" == typeof n && n.includes("Audit append conflicted; retry the unchanged batch");
				}(e, c.error);
				return {
					acknowledgedLocalIds: [],
					conflicted: !t && (409 === e || 422 === e),
					transient: t,
					status: e
				};
			}
			return {
				acknowledgedLocalIds: Pr(o, c.data.acknowledged_event_ids ?? []),
				conflicted: !1,
				transient: !1,
				status: c.response.status
			};
		} catch (s) {
			return console.warn("[AuditLog] Server send failed; retaining unacknowledged batch"), {
				acknowledgedLocalIds: [],
				conflicted: !1,
				transient: !1,
				status: 0
			};
		}
	}
}();
function Hr(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function $r(e) {
	return {
		...e,
		edited: !0
	};
}
function qr(e, t, n, a) {
	const r = e[t];
	if (!r) return {
		ok: !1,
		reason: "out-of-range"
	};
	const { onsetTimestamp: i, offsetTimestamp: s } = r;
	if (null == i || null == s) return {
		ok: !1,
		reason: "no-boundaries"
	};
	if (!(a > i && a <= n && n < s)) return {
		ok: !1,
		reason: "not-strictly-inside"
	};
	const [o, l] = function(e) {
		const t = e === qe.NAP ? qe.NAP : qe.MAIN_SLEEP;
		return [t, t === qe.MAIN_SLEEP ? qe.NAP : t];
	}(r.markerType), c = $r({
		...r,
		offsetTimestamp: a,
		markerType: o
	}), d = $r({
		...r,
		onsetTimestamp: n,
		markerType: l
	}), u = [...e];
	return u.splice(t, 1, c, d), {
		ok: !0,
		markers: Hr(u),
		newIndex: t + 1
	};
}
function Br(e, t, n) {
	const a = e[t];
	if (!a) return {
		ok: !1,
		reason: "out-of-range"
	};
	const r = "next" === n ? t + 1 : t - 1, i = e[r];
	if (!i) return {
		ok: !1,
		reason: "no-neighbor"
	};
	const s = a.onsetTimestamp, o = a.offsetTimestamp, l = i.onsetTimestamp, c = i.offsetTimestamp;
	if (null == s || null == o || null == l || null == c) return {
		ok: !1,
		reason: "no-boundaries"
	};
	const d = Math.min(s, l), u = Math.max(o, c), p = function(e, t) {
		return Sn(e) || Sn(t) ? qe.MAIN_SLEEP : qe.NAP;
	}(a, i), m = Math.min(t, r), f = $r({
		...p !== qe.MAIN_SLEEP || Sn(a) ? a : i,
		onsetTimestamp: d,
		offsetTimestamp: u,
		markerType: p
	}), _ = e.filter((e, n) => n !== t && n !== r);
	return _.splice(m, 0, f), {
		ok: !0,
		markers: Hr(_),
		mergedIndex: m
	};
}
function zr(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function Wr(e) {
	return "boolean" == typeof e ? e : null;
}
function Vr(e) {
	return "string" == typeof e ? e : null;
}
function Ur(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function Kr(e, t) {
	return !(e.length > 0) && t;
}
function Qr(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
function Jr(e) {
	const t = function(e) {
		return Array.isArray(e) ? e : null;
	}(e);
	return null === t ? null : t.every(Qr) ? t : null;
}
function Xr(e) {
	const t = Jr(e);
	return null === t ? null : t;
}
function Yr(e) {
	const t = Jr(e);
	return null === t ? null : t;
}
function Zr(e) {
	return e.filter((e) => e.markerType === qe.MAIN_SLEEP).length;
}
function ei(e) {
	return e.every((e, t) => e.markerIndex === t + 1);
}
const ti = {
	main_sleep_on_invalid_night: ({ after: e }) => e.isInvalidNight && Zr(e.sleepMarkers) > 0,
	multiple_main_sleep: ({ after: e }) => Zr(e.sleepMarkers) > 1,
	first_marker_not_main_sleep: ({ after: e }) => !e.isInvalidNight && e.sleepMarkers.length > 0 && 0 === Zr(e.sleepMarkers),
	marker_index_noncontiguous: ({ after: e }) => !ei(e.sleepMarkers) || !ei(e.nonwearMarkers),
	boundaries_disordered: ({ after: e }) => e.sleepMarkers.some((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && e.onsetTimestamp >= e.offsetTimestamp) || e.nonwearMarkers.some((e) => null != e.startTimestamp && null != e.endTimestamp && e.startTimestamp >= e.endTimestamp),
	nonwear_flag_with_markers: ({ after: e }) => e.explicitNoNonwear && e.nonwearMarkers.length > 0,
	manual_nonwear_in_sleep: ({ payload: e }) => !0 === e.manualNonwearInSleep,
	marker_limit_exceeded: ({ after: e }) => e.sleepMarkers.length > rn || e.nonwearMarkers.length > sn,
	split_not_strictly_inside: ({ before: e, payload: t }) => {
		const n = zr(t.periodIndex), a = zr(t.at);
		return null !== n && null !== a && !qr(e.sleepMarkers, n, a, zr(t.firstOffset) ?? a).ok;
	},
	merge_no_neighbor: ({ before: e, payload: t }) => {
		const n = zr(t.periodIndex), a = Vr(t.direction);
		return null !== n && ("prev" === a || "next" === a) && !Br(e.sleepMarkers, n, a).ok;
	},
	mutation_on_read_only_view: ({ context: e }) => !0 === e.readOnlyView,
	undo_beyond_history: ({ context: e }) => void 0 !== e.undoDepth && e.undoDepth <= 0,
	redo_beyond_history: ({ context: e }) => void 0 !== e.redoDepth && e.redoDepth <= 0
};
function ni(e, t) {
	const n = re[e]?.guards ?? [], a = [];
	for (const r of n) {
		const e = ti[r], n = ke[r];
		e && n && e(t) && a.push({
			guard: r,
			severity: n.severity
		});
	}
	return a;
}
function ai(e, t) {
	const { isInvalidNightImplicit: n, ...a } = e, r = Wr(t.isInvalidNight) ?? e.isInvalidNight;
	return {
		...a,
		isInvalidNight: r,
		...r && !0 === Wr(t.isInvalidNightImplicit) ? { isInvalidNightImplicit: !0 } : {}
	};
}
function ri(e, t) {
	const n = t.stateAfter;
	if (null === n || "object" != typeof n) return {
		state: e,
		reconstructed: !1
	};
	const a = n, r = Xr(a.sleepMarkers), i = Yr(a.nonwearMarkers);
	return null === r || null === i ? {
		state: e,
		reconstructed: !1
	} : { state: {
		...ai(e, a),
		sleepMarkers: r,
		nonwearMarkers: i,
		explicitNoNonwear: Wr(a.explicitNoNonwear) ?? e.explicitNoNonwear,
		needsConsensus: Wr(a.needsConsensus) ?? e.needsConsensus,
		notes: Vr(a.notes) ?? e.notes
	} };
}
const ii = {
	marker_placed: (e, t) => {
		if ("nonwear" === Vr(t.category)) {
			const n = zr(t.startTimestamp), a = zr(t.endTimestamp);
			if (null === n || null === a) return {
				state: e,
				reconstructed: !1
			};
			const r = [...e.nonwearMarkers, {
				startTimestamp: n,
				endTimestamp: a,
				markerIndex: e.nonwearMarkers.length + 1
			}];
			return { state: {
				...e,
				nonwearMarkers: r,
				explicitNoNonwear: !1
			} };
		}
		const n = zr(t.onsetTimestamp), a = zr(t.offsetTimestamp);
		if (null === n || null === a) return {
			state: e,
			reconstructed: !1
		};
		const r = Vr(t.markerType) ?? (i = e.sleepMarkers, (s = e).isInvalidNight && !0 !== s.isInvalidNightImplicit || i.some(Sn) ? qe.NAP : qe.MAIN_SLEEP);
		var i, s;
		const o = [...e.sleepMarkers, {
			onsetTimestamp: n,
			offsetTimestamp: a,
			markerIndex: e.sleepMarkers.length + 1,
			markerType: r
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
		const a = n, r = Xr(a.sleepMarkers), i = Yr(a.nonwearMarkers);
		return null === r || null === i ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: r,
			nonwearMarkers: i
		} };
	},
	marker_adjusted: (e, t) => {
		const n = zr(t.periodIndex), a = t.updates;
		if (null === n || null === a || "object" != typeof a) return {
			state: e,
			reconstructed: !1
		};
		const r = a;
		if ("nonwear" === Vr(t.category)) {
			const t = e.nonwearMarkers.map((e, t) => t === n ? {
				...e,
				...r
			} : e);
			return { state: {
				...e,
				nonwearMarkers: t,
				explicitNoNonwear: Kr(t, e.explicitNoNonwear)
			} };
		}
		const i = e.sleepMarkers.map((e, t) => t === n ? {
			...e,
			...r
		} : e);
		return { state: {
			...e,
			sleepMarkers: i
		} };
	},
	marker_deleted: (e, t) => {
		const n = zr(t.periodIndex);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : "nonwear" === Vr(t.category) ? { state: {
			...e,
			nonwearMarkers: Ur(e.nonwearMarkers.filter((e, t) => t !== n))
		} } : { state: {
			...e,
			sleepMarkers: Ur(e.sleepMarkers.filter((e, t) => t !== n))
		} };
	},
	markers_cleared: (e) => ({ state: {
		...e,
		sleepMarkers: [],
		nonwearMarkers: []
	} }),
	sleep_period_split: (e, t) => {
		const n = zr(t.periodIndex), a = zr(t.at);
		if (null === n || null === a) return {
			state: e,
			reconstructed: !1
		};
		const r = qr(e.sleepMarkers, n, a, zr(t.firstOffset) ?? a);
		return r.ok && r.markers ? { state: {
			...e,
			sleepMarkers: r.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	sleep_period_merged: (e, t) => {
		const n = zr(t.periodIndex), a = Vr(t.direction);
		if (null === n || "prev" !== a && "next" !== a) return {
			state: e,
			reconstructed: !1
		};
		const r = Br(e.sleepMarkers, n, a);
		return r.ok && r.markers ? { state: {
			...e,
			sleepMarkers: r.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	session_start: (e, t) => {
		const n = Xr(t.sleepMarkers), a = Yr(t.nonwearMarkers);
		return null === n || null === a ? {
			state: e,
			reconstructed: !1
		} : {
			state: {
				...ai(e, t),
				sleepMarkers: n,
				nonwearMarkers: a,
				explicitNoNonwear: Wr(t.explicitNoNonwear) ?? e.explicitNoNonwear,
				needsConsensus: Wr(t.needsConsensus) ?? e.needsConsensus,
				notes: Vr(t.notes) ?? e.notes
			},
			reconstructed: void 0 !== t.notes
		};
	},
	markers_saved: (e, t, n) => {
		const a = zr(t.sleepCount), r = zr(t.nonwearCount);
		return null === a || null === r ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			saved: {
				at: n.clientTimestamp ?? null,
				sleepCount: a,
				nonwearCount: r
			}
		} };
	},
	undo: ri,
	redo: ri,
	auto_score_applied: (e, t) => {
		const n = Xr(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: n
		} };
	},
	auto_nonwear_applied: (e, t) => {
		const n = Yr(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			nonwearMarkers: n,
			explicitNoNonwear: Kr(n, e.explicitNoNonwear)
		} };
	},
	consensus_toggled: (e, t) => {
		const n = Wr(t.value);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			needsConsensus: n
		} };
	},
	invalid_night_toggled: (e, t) => {
		const n = Wr(t.value);
		if (null === n) return {
			state: e,
			reconstructed: !1
		};
		const { isInvalidNightImplicit: a, ...r } = e;
		if (!n) return { state: {
			...r,
			isInvalidNight: !1
		} };
		const i = Ur(e.sleepMarkers.filter((e) => e.markerType !== qe.MAIN_SLEEP)), s = !0 === Wr(t.implicit);
		return { state: {
			...r,
			isInvalidNight: !0,
			...s ? { isInvalidNightImplicit: !0 } : {},
			sleepMarkers: i
		} };
	},
	no_nonwear_toggled: (e, t) => {
		const n = Wr(t.value);
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
		const n = Vr(t.after);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			notes: n
		} };
	},
	candidate_copied: ri
};
function si(e, t, n = {}) {
	const a = R(t), r = a.payload ?? {}, i = ii[a.action], s = i ? i(e, r, a) : { state: e }, o = s.state;
	return {
		state: o,
		violations: ni(a.action, {
			before: e,
			after: o,
			event: a,
			payload: r,
			context: n
		}),
		reconstructed: s.reconstructed ?? !0
	};
}
function oi(e) {
	return "object" != typeof e || null === e ? null : "string" == typeof e.action ? R(e) : null;
}
function li(e, t) {
	if ("markers_saved" !== e.action) return !1;
	const n = e.payload ?? {}, a = zr(n.sleepCount), r = zr(n.nonwearCount);
	return null !== a && null !== r && (a !== t.sleepMarkers.length || r !== t.nonwearMarkers.length);
}
function ci(e) {
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
	}, a = "unanchored";
	for (const r of e) {
		const e = oi(r), i = e ? si(n, e) : {
			state: n,
			violations: [],
			reconstructed: !1
		};
		n = i.state, null !== e && !0 === re[e.action]?.stateKeyframe && i.reconstructed ? a = "exact" : i.reconstructed || "exact" !== a || (a = "divergent"), "exact" === a && null !== e && li(e, n) && (a = "divergent"), t.push({
			state: n,
			basis: a,
			violations: i.violations
		});
	}
	return t;
}
function di(e) {
	const t = [
		`${String(e.sleepMarkers.length)} sleep`,
		`${String(e.nonwearMarkers.length)} nonwear`,
		`invalid-night:${String(e.isInvalidNight)}`
	];
	return e.explicitNoNonwear && t.push("no-nonwear"), e.needsConsensus && t.push("needs-consensus"), e.notes.length > 0 && t.push(`notes ${String(e.notes.length)}ch`), t.join(", ");
}
function ui(e) {
	return {
		sleep: e.sleepMarkers.map((e) => ({
			onset: e.onsetTimestamp,
			offset: e.offsetTimestamp,
			main: Sn(e)
		})),
		nonwear: (e.nonwearMarkers ?? []).map((e) => ({
			start: e.startTimestamp,
			end: e.endTimestamp
		})),
		isInvalidNight: e.isInvalidNight ?? !1
	};
}
async function pi(e, t = q()) {
	if (0 === e.length) return [];
	const n = await t.settleManualNonwearNights(e.map(ui));
	if (n.length !== e.length) throw new Error(`The manual-nonwear night rule answered ${String(n.length)} settle(s) for ${String(e.length)} night(s).`);
	return n;
}
function mi(e, t) {
	return 0 === t.removed.length ? e : t.kept.map((t, n) => ({
		...e[t],
		markerIndex: n + 1
	}));
}
async function fi(e, t) {
	const n = ci(e), a = e.flatMap((e, t) => {
		const a = e.payload, r = n[t]?.state;
		return "session_start" === e.action && null != a && "boolean" != typeof a.manualNonwearInSleep && void 0 !== r && Array.isArray(a.sleepMarkers) && Array.isArray(a.nonwearMarkers) && a.sleepMarkers.length === r.sleepMarkers.length && a.nonwearMarkers.length === r.nonwearMarkers.length ? [t] : [];
	});
	if (0 === a.length) return n;
	const r = await async function(e, t) {
		return (await pi(e, t)).map((e) => e.removed.length > 0);
	}(a.map((e) => n[e].state), t), i = [...e];
	return a.forEach((t, n) => {
		const a = e[t];
		i[t] = {
			...a,
			payload: {
				...a.payload,
				manualNonwearInSleep: !0 === r[n]
			}
		};
	}), ci(i);
}
function _i(e) {
	return null === e ? p : e;
}
function yi(e) {
	return null == e ? d : e;
}
function gi(e) {
	return "__legacy_dr__" === e ? null : e;
}
function hi(e) {
	return {
		...e,
		algorithm: (t = e.algorithm, "__legacy__" === t ? null : t),
		detectionRule: gi(e.detectionRule)
	};
	var t;
}
function wi(e) {
	const t = (e) => Array.isArray(e) ? e.map(t) : e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, n]) => [e, t(n)])) : e;
	return JSON.stringify(t(e));
}
function bi(e, { date: t, username: n }, a, r) {
	const i = e.filter((e) => e.date === t && e.username === n);
	if (void 0 !== a) {
		const e = _i(a), t = yi(r), n = (e, t) => i.find((n) => n.algorithm === e && n.detectionRule === t);
		return n(e, t) ?? ("__legacy_dr__" !== t ? n(e, "__legacy_dr__") : void 0) ?? (null !== a ? n("__legacy__", "__legacy_dr__") : void 0);
	}
	return i.reduce((e, t) => !e || (t.id ?? 0) < (e.id ?? 0) ? t : e, void 0);
}
function vi(e, t, n, a) {
	return a.transaction("r", a.markers, async () => bi(await a.markers.where("[fileId+date+username]").equals([
		e.fileId,
		e.date,
		e.username
	]).toArray(), e, t, n));
}
async function ki(e, t, n, a, r, i = Ae()) {
	const s = await vi({
		fileId: e,
		date: t,
		username: n
	}, a, r, i);
	return s ? hi(s) : void 0;
}
const Si = [
	"manualNonwearInSleep",
	"periodMetrics",
	"syncStatus"
];
function Ii(e, t, n) {
	const a = Object.fromEntries(Si.filter((e) => e in t).map((e) => [e, t[e]]));
	return n.markers.update(e, a);
}
async function Ei(e, t = Ae(), n, a) {
	const r = t;
	await te(r, [r.markers], async () => {
		if (n) {
			const t = await r.markers.get(e);
			if (!t || wi(hi(t)) !== wi(n)) return;
		}
		await Ii(e, { syncStatus: "conflict" }, r);
	}, a);
}
function Ai(e) {
	return `${ye.SCORED_VARIANT_WARM}:${String(e)}`;
}
function Ti(e = N().jobs().jobs) {
	if (!he()) return null;
	const t = Object.values(e).reverse().find((e) => X(e) && e.workspaceId === Ae().name && e.kind === ye.SCORED_VARIANT_WARM && e.status !== Fe.DONE && e.status !== Fe.CANCELLED);
	return t ? {
		fileId: Number(t.key.split(":").at(-1)),
		done: t.done,
		total: t.total,
		...t.status === Fe.FAILED ? { failed: !0 } : {}
	} : null;
}
function Ri(e, t) {
	if (!he() || t && Ae() !== t) return;
	const n = (t ?? Ae()).name, a = N().jobs();
	if (!e) return;
	const r = Ai(e.fileId), i = `${n}:${r}`;
	a.jobs[i] && !e.failed || a.update(i, {
		id: i,
		workspaceId: n,
		key: r,
		kind: ye.SCORED_VARIANT_WARM,
		label: "Scoring variants",
		controller: a.jobs[i]?.controller ?? new AbortController(),
		done: e.done,
		total: e.total,
		status: e.failed ? Fe.FAILED : Fe.RUNNING
	});
}
const Di = /* @__PURE__ */ new Set(), Oi = /* @__PURE__ */ new WeakMap();
function Mi(e) {
	return Di.add(e), () => Di.delete(e);
}
const xi = /* @__PURE__ */ new Set();
function Ci(e, t) {
	for (const n of xi) n(e, t);
}
const Ni = "scored-variant-warm-backfill-v1", Fi = `placement-results-backfill-v${String(2)}`, Li = "placement-results-backfill-generation-v1", Pi = /* @__PURE__ */ new Set();
function ji(e, t, n) {
	const a = n ? Oi.get(n) : void 0;
	if (a?.db !== t) for (const r of Pi) r([e], t);
	else a.files.add(e);
}
const Gi = /* @__PURE__ */ new WeakMap();
async function Hi(e, t = Ae(), n) {
	let a = j.currentTransaction;
	for (; a?.parent;) a = a.parent;
	if (await ie(t, [t.projectMeta], async () => {
		const e = await t.projectMeta.get(Li);
		await t.projectMeta.put({
			key: Li,
			revision: (e?.revision ?? 0) + 1
		}), await t.projectMeta.delete(Fi);
	}, n), !a || a.db !== t) {
		for (const a of new Set(e)) ji(a, t, n);
		return;
	}
	let r = Gi.get(a);
	if (!r) {
		r = /* @__PURE__ */ new Set(), Gi.set(a, r);
		const e = r;
		a.idbtrans.addEventListener("complete", () => {
			for (const a of e) ji(a, t, n);
		}, { once: !0 });
	}
	for (const i of e) r.add(i);
}
var $i = "argument,value,context\ndatadir,,not applicable\ndo.report,\"c(2,4,5,6)\",not applicable\nf0,1,not applicable\nf1,542,not applicable\nmode,\"c(1,2,3,4,5,6)\",not applicable\noutputdir,,not applicable\nrawaccfiles_formats,csv,not applicable\nstudyname,,not applicable\nGGIRread_version,could not extract version,not applicable\nGGIRversion,3.0.0,not applicable\nR_version,R version 4.4.3 (2025-02-28),not applicable\nqwindow,\"c(0,24)\",params_247\nqlevels,\"c(0.958333333333333,0.979166666666667,0.993055555555556)\",params_247\nqwindow_dateformat,%d-%m-%Y,params_247\nilevels,c(),params_247\nIVIS_windowsize_minutes,60,params_247\nIVIS_epochsize_seconds,c(),params_247\nIVIS.activity.metric,2,params_247\nIVIS_acc_threshold,20,params_247\nqM5L5,c(),params_247\nMX.ig.min.dur,10,params_247\nM5L5res,10,params_247\nwinhr,\"c(5,10)\",params_247\niglevels,\"c(0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1025,1050,1075,1100,1125,1150,1175,1200,1225,1250,1275,1300,1325,1350,1375,1400,1425,1450,1475,1500,1525,1550,1575,1600,1625,1650,1675,1700,1725,1750,1775,1800,1825,1850,1875,1900,1925,1950,1975,2000,2025,2050,2075,2100,2125,2150,2175,2200,2225,2250,2275,2300,2325,2350,2375,2400,2425,2450,2475,2500,2525,2550,2575,2600,2625,2650,2675,2700,2725,2750,2775,2800,2825,2850,2875,2900,2925,2950,2975,3000,3025,3050,3075,3100,3125,3150,3175,3200,3225,3250,3275,3300,3325,3350,3375,3400,3425,3450,3475,3500,3525,3550,3575,3600,3625,3650,3675,3700,3725,3750,3775,3800,3825,3850,3875,3900,3925,3950,3975,4000,8000)\",params_247\nLUXthresholds,\"c(0,100,500,1000,3000,5000,10000)\",params_247\nLUX_cal_constant,c(),params_247\nLUX_cal_exponent,c(),params_247\nLUX_day_segments,c(),params_247\nwindow.summary.size,10,params_247\nL5M5window,\"c(0,24)\",params_247\ncosinor,TRUE,params_247\nincludedaycrit,1,params_cleaning\nndayswindow,7,params_cleaning\nstrategy,1,params_cleaning\nmaxdur,0,params_cleaning\nhrs.del.start,0,params_cleaning\nhrs.del.end,0,params_cleaning\nincludedaycrit.part5,0.083333333,params_cleaning\nexcludefirstlast.part5,FALSE,params_cleaning\nTimeSegments2ZeroFile,c(),params_cleaning\ndo.imp,TRUE,params_cleaning\ndata_cleaning_file,c(),params_cleaning\nminimum_MM_length.part5,23,params_cleaning\nexcludefirstlast,FALSE,params_cleaning\nincludenightcrit,1,params_cleaning\nexcludefirst.part4,FALSE,params_cleaning\nexcludelast.part4,FALSE,params_cleaning\nmax_calendar_days,0,params_cleaning\nnonWearEdgeCorrection,TRUE,params_cleaning\nnonwear_approach,2023,params_cleaning\nsegmentWEARcrit.part5,0.5,params_cleaning\nsegmentDAYSPTcrit.part5,\"c(0.9,0)\",params_cleaning\noverwrite,FALSE,params_general\nacc.metric,ENMO,params_general\nmaxNcores,c(),params_general\nprint.filename,FALSE,params_general\ndo.parallel,TRUE,params_general\nwindowsizes,\"c(5,900,3600)\",params_general\ndesiredtz,EST,params_general\nconfigtz,c(),params_general\nidloc,1,params_general\ndayborder,0,params_general\npart5_agg2_60seconds,FALSE,params_general\nsensor.location,wrist,params_general\nexpand_tail_max_hours,c(),params_general\nrecordingEndSleepHour,c(),params_general\ndataFormat,raw,params_general\nmaxRecordingInterval,c(),params_general\nextEpochData_timeformat,%d-%m-%Y %H:%M:%S,params_general\ndo.anglex,FALSE,params_metrics\ndo.angley,FALSE,params_metrics\ndo.anglez,TRUE,params_metrics\ndo.zcx,FALSE,params_metrics\ndo.zcy,FALSE,params_metrics\ndo.zcz,FALSE,params_metrics\ndo.enmo,TRUE,params_metrics\ndo.lfenmo,FALSE,params_metrics\ndo.en,FALSE,params_metrics\ndo.mad,FALSE,params_metrics\ndo.enmoa,FALSE,params_metrics\ndo.roll_med_acc_x,FALSE,params_metrics\ndo.roll_med_acc_y,FALSE,params_metrics\ndo.roll_med_acc_z,FALSE,params_metrics\ndo.dev_roll_med_acc_x,FALSE,params_metrics\ndo.dev_roll_med_acc_y,FALSE,params_metrics\ndo.dev_roll_med_acc_z,FALSE,params_metrics\ndo.bfen,FALSE,params_metrics\ndo.hfen,FALSE,params_metrics\ndo.hfenplus,FALSE,params_metrics\ndo.lfen,FALSE,params_metrics\ndo.lfx,FALSE,params_metrics\ndo.lfy,FALSE,params_metrics\ndo.lfz,FALSE,params_metrics\ndo.hfx,FALSE,params_metrics\ndo.hfy,FALSE,params_metrics\ndo.hfz,FALSE,params_metrics\ndo.bfx,FALSE,params_metrics\ndo.bfy,FALSE,params_metrics\ndo.bfz,FALSE,params_metrics\ndo.brondcounts,FALSE,params_metrics\ndo.neishabouricounts,FALSE,params_metrics\nhb,15,params_metrics\nlb,0.2,params_metrics\nn,4,params_metrics\nzc.lb,0.25,params_metrics\nzc.hb,3,params_metrics\nzc.sb,0.01,params_metrics\nzc.order,2,params_metrics\nzc.scale,1,params_metrics\nactilife_LFE,FALSE,params_metrics\nepochvalues2csv,FALSE,params_output\nsave_ms5rawlevels,TRUE,params_output\nsave_ms5raw_format,csv,params_output\nsave_ms5raw_without_invalid,TRUE,params_output\nstorefolderstructure,FALSE,params_output\ntimewindow,WW,params_output\nviewingwindow,1,params_output\ndofirstpage,TRUE,params_output\nvisualreport,TRUE,params_output\nweek_weekend_aggregate.part5,FALSE,params_output\ndo.part3.pdf,TRUE,params_output\noutliers.only,TRUE,params_output\ncriterror,4,params_output\ndo.visual,TRUE,params_output\ndo.sibreport,FALSE,params_output\ndo.part2.pdf,TRUE,params_output\nsep_reports,\",\",params_output\nsep_config,\",\",params_output\nvisualreport_without_invalid,FALSE,params_output\nmvpathreshold,100,params_phyact\nboutcriter,0.8,params_phyact\nmvpadur,\"c(1,5,10)\",params_phyact\nboutcriter.in,0.9,params_phyact\nboutcriter.lig,0.8,params_phyact\nboutcriter.mvpa,0.8,params_phyact\nthreshold.lig,30,params_phyact\nthreshold.mod,100,params_phyact\nthreshold.vig,400,params_phyact\nboutdur.mvpa,\"c(1,5,10)\",params_phyact\nboutdur.in,\"c(1,10,30)\",params_phyact\nboutdur.lig,\"c(1,10,30)\",params_phyact\nfrag.metrics,all,params_phyact\nchunksize,1,params_rawdata\nspherecrit,0.3,params_rawdata\nminloadcrit,72,params_rawdata\nprintsummary,FALSE,params_rawdata\ndo.cal,TRUE,params_rawdata\nbackup.cal.coef,retrieve,params_rawdata\ndynrange,c(),params_rawdata\nminimumFileSizeMB,2,params_rawdata\nrmc.dec,.,params_rawdata\nrmc.firstrow.acc,c(),params_rawdata\nrmc.firstrow.header,c(),params_rawdata\nrmc.header.length,c(),params_rawdata\nrmc.col.acc,\"c(1,2,3)\",params_rawdata\nrmc.col.temp,c(),params_rawdata\nrmc.col.time,c(),params_rawdata\nrmc.unit.acc,g,params_rawdata\nrmc.unit.temp,C,params_rawdata\nrmc.unit.time,POSIX,params_rawdata\nrmc.format.time,%Y-%m-%d %H:%M:%OS,params_rawdata\nrmc.bitrate,c(),params_rawdata\nrmc.dynamic_range,c(),params_rawdata\nrmc.unsignedbit,TRUE,params_rawdata\nrmc.origin,1/1/1970,params_rawdata\nrmc.desiredtz,c(),params_rawdata\nrmc.configtz,c(),params_rawdata\nrmc.sf,c(),params_rawdata\nrmc.headername.sf,c(),params_rawdata\nrmc.headername.sn,c(),params_rawdata\nrmc.headername.recordingid,c(),params_rawdata\nrmc.header.structure,c(),params_rawdata\nrmc.check4timegaps,FALSE,params_rawdata\nrmc.noise,13,params_rawdata\nrmc.col.wear,c(),params_rawdata\nrmc.doresample,FALSE,params_rawdata\ninterpolationType,1,params_rawdata\nimputeTimegaps,TRUE,params_rawdata\nfrequency_tol,0.1,params_rawdata\nrmc.scalefactor.acc,1,params_rawdata\nanglethreshold,5,params_sleep\ntimethreshold,5,params_sleep\nignorenonwear,TRUE,params_sleep\nconstrain2range,TRUE,params_sleep\nHASPT.algo,HDCZA,params_sleep\nHASIB.algo,vanHees2015,params_sleep\nSadeh_axis,,params_sleep\nlongitudinal_axis,c(),params_sleep\nHASPT.ignore.invalid,FALSE,params_sleep\nloglocation,c(),params_sleep\ncolid,1,params_sleep\ncoln1,2,params_sleep\nnnights,c(),params_sleep\nrelyonguider,FALSE,params_sleep\ndef.noc.sleep,1,params_sleep\nsleeplogsep,c(),params_sleep\nsleepwindowType,SPT,params_sleep\npossible_nap_window,\"c(9,18)\",params_sleep\npossible_nap_dur,\"c(15,240)\",params_sleep\n";
const qi = "sleep-scoring:core-answer:", Bi = /* @__PURE__ */ new Map();
let zi = null;
function Wi(e) {
	if (zi) return zi;
	const t = [];
	zi = t;
	try {
		const n = globalThis.localStorage, a = Array.from({ length: n.length }, (e, t) => n.key(t) ?? "");
		for (const r of a) r.startsWith(qi) && (r.startsWith(`${qi}${e}:`) ? t.push(r) : n.removeItem(r));
	} catch {}
	return t;
}
function Vi(e, t, n) {
	const a = "626a6b7093970a44903c3253832801d724d48908c049316cf165502db459372b";
	Wi(a);
	const r = `${qi}${a}:${e}:${t}`;
	let i = Bi.get(r);
	if (!i && (i = (async () => {
		try {
			const e = globalThis.localStorage?.getItem(r);
			if (e) return JSON.parse(e);
		} catch {}
		const e = await n();
		try {
			globalThis.localStorage?.setItem(r, JSON.stringify(e)), function(e, t) {
				const n = Wi(e);
				for (n.includes(t) || n.push(t); n.length > 1e3;) {
					const e = n.shift();
					try {
						e && globalThis.localStorage?.removeItem(e);
					} catch {}
				}
			}(a, r);
		} catch {}
		return e;
	})(), i.catch(() => Bi.delete(r)), Bi.set(r, i), Bi.size > 1e3)) {
		const e = Bi.keys().next();
		e.done || Bi.delete(e.value);
	}
	return i;
}
const Ui = Object.freeze({
	name: "default ELEMENT",
	sha256: L($i),
	csvText: $i
});
function Ki(e) {
	const t = e?.ggir_config;
	if (t && "object" == typeof t) {
		const e = t;
		if ("string" == typeof e.name && "string" == typeof e.csvText && "string" == typeof e.sha256 && L(e.csvText) === e.sha256) return e;
	}
	return Ui;
}
function Qi(e, t) {
	const n = /^"?Sadeh_axis"?,\s*"?([XYZ])"?,/m.exec(e)?.[1] ?? "Y";
	return t?.[{
		X: 0,
		Y: 1,
		Z: 2
	}[n]];
}
function Ji(e, t, n) {
	if (!n || 3 !== n.length || n.some((e) => e.length !== t.length)) return {};
	const a = /* @__PURE__ */ new Map();
	for (let i = 0; i < t.length; i++) a.set(t[i] / 1e3, i);
	const r = n.map((t) => Float64Array.from(e, (e) => t[a.get(e) ?? -1] ?? 0).buffer);
	return {
		ggirZcx5s: r[0],
		ggirZcy5s: r[1],
		ggirZcz5s: r[2]
	};
}
const Xi = {
	[dt.van_hees_2013]: "2013",
	[dt.van_hees_2023]: "2023"
};
async function Yi(e, t) {
	return Vi("ggir-part2-nonwear", L(e ?? ""), async () => (await t.ggirAppConfigSummary(e, !0)).applied.nonwearApproach === Xi.van_hees_2013 ? dt.van_hees_2013 : dt.van_hees_2023);
}
function Zi(e) {
	return Object.hasOwn(s, e);
}
async function es(e, t) {
	const n = Object.entries(e), a = await Promise.all(n.map(([, e]) => e.windowForNight(t))), r = {};
	return n.forEach(([e], t) => {
		const n = a[t];
		n && Zi(e) && (r[e] = n);
	}), r;
}
function ts(e, t) {
	return Object.entries(e).reduce((e, [n, a]) => ({
		...e,
		...a.fingerprint((Zi(n) ? t[n] : void 0) ?? null)
	}), {});
}
async function ns(e, t, n) {
	return (await Promise.all(Object.values(e).map((e) => e.stampInput(t, n)))).reduce((e, t) => ({
		...e,
		...t
	}), {});
}
function as(e, t) {
	return Object.values(e).flatMap((e) => e.tables(t));
}
const rs = "diary", is = "none", ss = new Set(Object.values(de));
function os(e) {
	if (!e) return [];
	const t = [];
	for (const [n, a] of e) null != n && "" !== n.trim() && t.push({
		onset_time: n,
		offset_time: a ?? null
	});
	return t;
}
function ls(e) {
	if (!e) return [];
	const t = [];
	for (const [n, a] of e) null != n && null != a && "" !== n.trim() && "" !== a.trim() && t.push({
		start_time: n,
		end_time: a
	});
	return t;
}
function cs(e, t) {
	const n = (e) => ({
		source_a: e,
		source_b: "none",
		fusion_policy: "use_source_a",
		apply_nonwear_gate: !1
	});
	switch (e) {
		case He.DIARY: return;
		case He.HDCZA: return n("hdcza");
		case He.L5: return n("l5");
		case He.LONGEST_BOUT: return n("selected_scorer_longest_bout");
		case He.EVENT_MARKER: return n("event_marker");
		case He.ACTIWARE_REST_INTERVAL: return n("actiware_rest_interval");
		case He.NONE: return n("none");
		case He.SMART:
			if (t.hasDiary) return;
			return n("lstm_sleep_wake" === (a = t.algorithm) ? "selected_scorer_longest_bout" : fe(a) ? "hdcza" : "l5");
		default: return;
	}
	var a;
}
function ds(e) {
	const t = Number.parseInt((e ?? "").split(":")[0] ?? "", 10);
	return Number.isInteger(t) && t >= 0 && t <= 23 ? t : null;
}
function us(e) {
	const t = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime), n = fe(e.algorithm) ? void 0 : ps(e), a = fe(e.algorithm) && !t ? On.HDCZA : On.DIARY;
	return {
		...Wn(e.sleepPeriodDetection),
		...n ?? {
			source_a: a,
			source_b: On.NONE,
			fusion_policy: Mn
		}
	};
}
function ps(e) {
	if (e.sleepPeriodDetection && !jn(zn(e.sleepPeriodDetection))) {
		const t = Wn(e.sleepPeriodDetection);
		return {
			source_a: t.source_a,
			source_b: t.source_b,
			fusion_policy: t.fusion_policy,
			apply_nonwear_gate: t.apply_nonwear_gate
		};
	}
	const t = e.periodGuider ?? He.SMART, n = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime);
	return cs(t, {
		algorithm: e.algorithm ?? null,
		hasDiary: n
	});
}
function ms(e) {
	const t = { ruleset: fe(e.algorithm) ? c.GGIR_PART4 : e.ruleset ?? "legacy" };
	e.algorithm && ss.has(e.algorithm) && (t.classifier = e.algorithm), null != e.epochLengthSeconds && (t.epoch_length_seconds = e.epochLengthSeconds), null != e.onsetMinConsecutiveSleep && (t.onset_min_consecutive_sleep = e.onsetMinConsecutiveSleep), null != e.offsetMinConsecutiveMinutes && (t.offset_min_consecutive_minutes = e.offsetMinConsecutiveMinutes), e.scorerPostprocessing && (t.scorer_postprocessing = e.scorerPostprocessing);
	const { nonwear_detector: n, nonwear_detectors: a } = gs(e.nonwearDetectors, null, { alwaysNameSingle: !1 });
	if (n && (t.nonwear_detector = n), a && (t.nonwear_detectors = a), e.sleepPeriodDetection) {
		const n = zn(e.sleepPeriodDetection);
		t.merge_gap_minutes = n.mergeGapMinutes, t.padding_minutes = n.paddingMinutes, t.min_overlap_jaccard = n.minOverlapJaccard;
	}
	const r = ps(e);
	return r && (t.detection = r), t;
}
const fs = "study_selection", _s = Object.values(dt);
function ys(e) {
	const t = (e) => {
		const t = _s.indexOf(e);
		return -1 === t ? _s.length : t;
	};
	return [...e].sort((e, n) => t(e) - t(n));
}
function gs(e, t, { alwaysNameSingle: n, memberFlags: a }) {
	if (!e || 0 === e.length) return {};
	if (1 === e.length) {
		const [t] = e;
		return n || t !== dt.choi_2011 ? { nonwear_detector: t } : {};
	}
	return {
		nonwear_detectors: ys(e),
		...t ? { nonwear_weight: [...t] } : {},
		...t && a ? { nonwear_member_flags: [...a] } : {}
	};
}
function hs(e) {
	const t = {
		analysis_date: e.analysisDate ?? "",
		epoch_length_seconds: e.epochLengthSeconds ?? u,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (t.choi_nonwear = e.choiNonwear);
	const { nonwear_weight: n, nonwear_member_flags: a } = gs(e.nonwearDetectors, e.nonwearWeight, {
		alwaysNameSingle: !1,
		memberFlags: e.nonwearMemberFlags
	});
	n && (t.nonwear_weight = n), a && (t.nonwear_member_flags = a), e.ggirInvalid && (t.ggir_invalid = Array.from(e.ggirInvalid)), e.ggirHasptAlgo && (t.ggir_haspt_algo = e.ggirHasptAlgo), e.ggirConfigCsv && (t.ggir_config_csv = e.ggirConfigCsv), e.ggirDiaryHasBedlog && (t.ggir_diary_has_bedlog = !0), e.ggirDiaryHasSleeplog && (t.ggir_diary_has_sleeplog = !0), e.sensorNonwear && e.sensorNonwear.length > 0 && (t.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (t.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (t.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (t.diary_in_bed_time = e.diaryBedTime), null != e.diaryOutBedTime && (t.diary_out_bed_time = e.diaryOutBedTime);
	const r = os(e.diaryNaps);
	r.length > 0 && (t.diary_naps = r);
	const i = ls(e.diaryNonwear);
	i.length > 0 && (t.diary_nonwear = i);
	for (const [o, l] of Object.entries(e.guiderWindows ?? {})) l && Zi(o) && (t[s[o]] = [l.startTimestamp, l.endTimestamp]);
	return e.eventMarkerTimestamps && e.eventMarkerTimestamps.length > 0 && (t.event_marker_timestamps = Array.from(e.eventMarkerTimestamps)), null != e.nightStartHour && (t.night_start_hour = e.nightStartHour), null != e.nightEndHour && (t.night_end_hour = e.nightEndHour), t;
}
function ws(e) {
	const t = {
		analysis_date: e.analysisDate,
		epoch_length_seconds: e.epochLengthSeconds,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (t.choi_nonwear = e.choiNonwear), e.nonwearWeight && (t.nonwear_weight = [...e.nonwearWeight]), e.nonwearWeight && e.nonwearMemberFlags && (t.nonwear_member_flags = [...e.nonwearMemberFlags]), e.sensorNonwear && e.sensorNonwear.length > 0 && (t.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (t.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (t.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (t.diary_in_bed_time = e.diaryBedTime);
	const n = os(e.diaryNaps);
	n.length > 0 && (t.diary_naps = n);
	const a = ls(e.diaryNonwear);
	return a.length > 0 && (t.diary_nonwear = a), t;
}
function bs(e) {
	return e && 0 !== e.length ? e.map(([e, t]) => [e, t]) : null;
}
function vs(e) {
	const t = [
		"timestamps",
		"activity_counts",
		"sleep_scores",
		"choi_nonwear",
		"anglez",
		"light",
		"temperature",
		"heart_rate",
		"detach_nonwear"
	], n = (t, n) => {
		const a = e.days.map((e) => e[t] ?? []), r = new Uint32Array(a.length + 1);
		for (const [e, o] of a.entries()) r[e + 1] = r[e] + o.length;
		const i = 1 === a.length ? a[0] : void 0, s = i instanceof n ? i : new n(r[a.length]);
		if (s !== i) for (const [e, o] of a.entries()) s.set(o, r[e]);
		return [s, r];
	}, a = {
		config: e.config,
		days: e.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !t.includes(e))))
	};
	return [
		JSON.stringify(a),
		...n("timestamps", Float64Array),
		...n("activity_counts", Float64Array),
		...n("sleep_scores", Uint8Array),
		...n("choi_nonwear", Uint8Array),
		...n("anglez", Float64Array),
		...n("light", Float64Array),
		...n("temperature", Float64Array),
		...n("heart_rate", Float64Array),
		...n("detach_nonwear", Uint8Array)
	];
}
function ks(e) {
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
function Ss(e, t) {
	const n = {
		onset_timestamp: e.onset_timestamp,
		offset_timestamp: e.offset_timestamp,
		marker_type: e.marker_type,
		marker_index: e.marker_index
	};
	return t && (n.placement = t), n;
}
function Is(e) {
	return {
		kind: "refused",
		reason: e
	};
}
function Es(e, t, n) {
	if (!e) return Is("The placement engine returned no result for this night.");
	const a = e.guider ?? n, r = null == e.guider ? t : {
		...t,
		source_a: e.guider
	}, i = (e.decisions ?? []).map(ks), s = (e, t) => i.find((n) => n.marker_type === e && n.marker_index === t);
	return {
		kind: "placed",
		sleep_markers: (e.sleep_markers ?? []).map((e) => Ss(e, s(e.marker_type, e.marker_index))),
		nap_markers: (e.nap_markers ?? []).map((e) => Ss(e, s(e.marker_type, e.marker_index))),
		notes: e.notes ?? [],
		decisions: i,
		sleep_period_detection_config: r,
		effective_detection_source_a: a,
		invalid_night: e.invalid_night ?? null,
		diary_available: e.diary_available ?? null
	};
}
const As = "Marker placement is unavailable in this build — reload while online to update the local engine.";
async function Ts(e, t) {
	const n = us(e), a = String(n.source_a);
	if (0 === e.timestamps.length) return Is("No activity data");
	const r = function(e) {
		let t;
		if ("variant" in e) {
			const { variant: r, timestamps: i, activityCounts: s, sleepScores: o, analysisDate: l, epochLengthSeconds: c, guiderWindows: d, diary: u, onsetMinConsecutiveSleep: p, offsetMinConsecutiveMinutes: m, choiNonwear: f, nonwearDetectors: _, nonwearWeight: y, nonwearMemberFlags: g, eventMarkerTimestamps: h } = e, w = r.config.rescoring === je.WEBSTER && (a = je.WEBSTER) === je.WEBSTER ? { preset: a } : void 0;
			t = {
				timestamps: i,
				activityCounts: s,
				sleepScores: o,
				...void 0 !== f ? { choiNonwear: f } : {},
				...void 0 !== _ ? { nonwearDetectors: _ } : {},
				...void 0 !== y ? { nonwearWeight: y } : {},
				...void 0 !== g ? { nonwearMemberFlags: g } : {},
				ruleset: r.config.ruleset,
				...void 0 !== w ? { scorerPostprocessing: w } : {},
				analysisDate: l,
				epochLengthSeconds: c,
				...d ? { guiderWindows: d } : {},
				...h ? { eventMarkerTimestamps: h } : {},
				diaryBedTime: u?.diaryInBedTime ?? null,
				diaryOnsetTime: u?.onsetTime ?? null,
				diaryWakeTime: u?.diaryWakeTime ?? null,
				diaryNaps: bs(u?.naps),
				diaryNonwear: bs(u?.nonwear),
				...void 0 !== p ? { onsetMinConsecutiveSleep: p } : {},
				...void 0 !== m ? { offsetMinConsecutiveMinutes: m } : {},
				...(n = r.config.periodSource, n === rs ? { periodGuider: rs } : n === is ? { periodGuider: is } : { sleepPeriodDetection: {
					sourceA: n,
					sourceB: On.NONE,
					fusionPolicy: Mn,
					applyNonwearGate: !1
				} })
			};
		} else t = e;
		var n, a;
		return vs({
			config: ms(t),
			days: [hs(t), ...(t.contextDays ?? []).filter((e) => e.analysisDate !== (t.analysisDate ?? "")).map(ws)]
		});
	}(e), i = await (e.wasmApiOverride ?? t()).placeMarkers(b(r, r.slice(1).filter((t) => ArrayBuffer.isView(t) && ![e, ...e.contextDays ?? []].some((e) => t === e.timestamps || t === e.activityCounts || t === e.sleepScores || t === e.choiNonwear)).map((e) => e.buffer)));
	return i ? Es((e.analysisDate ? i.results.find((t) => t.analysis_date === e.analysisDate) : void 0) ?? i.results[0], n, a) : Is(As);
}
async function Rs(e, t) {
	const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), r = [];
	for (const [c, d] of e.entries()) {
		const e = ms(d);
		if (0 === d.timestamps.length || d.wasmApiOverride) {
			r.push(c);
			continue;
		}
		const t = JSON.stringify(e), i = "legacy" === e.ruleset && 0 === (d.contextDays?.length ?? 0) ? n : a;
		i.set(t, [...i.get(t) ?? [], c]);
	}
	const i = new Array(e.length), s = [...a.values()].flatMap((t) => {
		const n = t.map((t) => e[t]), a = function(e) {
			const t = /* @__PURE__ */ new Map();
			for (const a of e) for (const e of a.contextDays ?? []) t.has(e.analysisDate) || t.set(e.analysisDate, e);
			const n = [...t.values()].sort((e, t) => e.analysisDate.localeCompare(t.analysisDate));
			return e.every((e) => {
				const t = e.contextDays ?? [], a = n.filter((t) => t.analysisDate !== (e.analysisDate ?? ""));
				return t.length === a.length && t.every((e, t) => e === a[t]);
			}) ? n : null;
		}(n);
		return null === a ? (r.push(...t), []) : [{
			group: t,
			members: n,
			context: a
		}];
	}), o = [...r, ...[...n.values()].filter((e) => 1 === e.length).flat()];
	await Promise.all(o.map(async (n) => {
		i[n] = await Ts(e[n], () => t);
	}));
	const l = (e, t, n) => {
		for (const [a, r] of e.entries()) {
			const e = t[a], s = us(e), o = n?.results.find((t) => t.analysis_date === e.analysisDate);
			i[r] = n ? Es(o ?? n.results[a], s, String(s.source_a)) : Is(As);
		}
	};
	return await Promise.all([...[...n.values()].filter((e) => e.length > 1).map(async (n) => {
		const a = n.map((t) => e[t]), r = function(e) {
			const t = e[0];
			if (!t) throw new Error("buildNightsPlacementRequest needs at least one night.");
			return vs({
				config: ms(t),
				days: e.map(hs)
			});
		}(a);
		l(n, a, await t.placeMarkers(b(r, r.slice(1).map((e) => e.buffer))));
	}), ...s.map(async ({ group: e, members: n, context: a }) => {
		const r = vs({
			config: ms(n[0]),
			days: [...n.map(hs), ...a.map(ws)]
		}), i = new Set([...n, ...a].flatMap((e) => [
			e.timestamps,
			e.activityCounts,
			e.sleepScores,
			e.choiNonwear
		])), s = r.slice(1).filter((e) => ArrayBuffer.isView(e) && !i.has(e)).map((e) => e.buffer);
		l(e, n, await t.placeNights(b([...r, n.length], s)));
	})]), i;
}
function Ds(e, t) {
	return "boolean" === e.kind ? "boolean" == typeof t : "enum" === e.kind ? "string" == typeof t && !!e.members?.includes(t) : "number" == typeof t && Number.isFinite(t) && ("integer" !== e.kind || Number.isInteger(t)) && (void 0 === e.minimum || t >= e.minimum) && (void 0 === e.maximum || t <= e.maximum);
}
const Os = [
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
], Ms = {
	low: 20,
	medium: 40,
	high: 80
}, xs = [
	"one_per_night",
	"nap_detection",
	"min_nap_minutes",
	"nap_sensitivity",
	"eventmarker_adj",
	"actogram_start_seconds"
], Cs = { eventmarker_adj: !0 }, Ns = {
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
}, Fs = { wake_threshold: {
	field: "wake_threshold_selection",
	value: "custom"
} };
function Ls(e) {
	if (null === e || "object" != typeof e || Array.isArray(e)) return {};
	const t = e, n = Os.filter((e) => function(e, t) {
		return Ds(Ns[e], t);
	}(e, t[e])), a = Fs;
	return Object.fromEntries(n.filter((e) => {
		const r = a[e];
		return void 0 === r || !n.includes(r.field) || t[r.field] === r.value;
	}).map((e) => [e, t[e]]));
}
const Ps = {
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
}, js = {
	use_saved_rest_intervals: !0,
	rest_autoscore: "actiware"
};
function Gs(e) {
	const t = null === e || "object" != typeof e || Array.isArray(e) ? {} : e;
	return Object.fromEntries(Object.entries(Ps).map(([e, n]) => [e, Ds(n, t[e]) ? t[e] : js[e]]));
}
const Hs = {
	actiware_analysis_settings_object: function(e) {
		return 0 === Object.keys(Ls(e)).length;
	},
	actiware_rest_proposal_settings_object: function(e) {
		const t = Gs(e);
		return Object.keys(js).every((e) => t[e] === js[e]);
	}
};
function $s(e) {
	return "five_s" === Ge(e?.sourceType)?.epochFamily;
}
function qs(e) {
	return Object.values(nt).includes(e) ? e : k.analysis_paradigm;
}
function Bs(e, t) {
	const n = e?.sourceProfileId, a = n ? w[n] ?? null : null;
	return a?.paradigm === t ? a : null;
}
function zs(e) {
	const t = e?.sourceProfileId;
	return null != t && void 0 !== w[t];
}
function Ws(e, t) {
	const n = e?.sourceProfileId;
	return null != n && w[n]?.sleepAlgorithm === t;
}
function Vs(e, t) {
	return Bs(e, qs(t))?.editedRecord ?? ot.sleep_periods;
}
function Us(e, t, n) {
	const a = Bs(n, t), r = void 0 === e.nonwearDetectorsGgir ? e : {
		...e,
		nonwearDetectorsGgir: po(e.nonwearDetectorsGgir, n)
	};
	return a ? {
		...r,
		algorithm: a.sleepAlgorithm,
		periodGuider: a.periodGuider ?? e.periodGuider,
		nonwearDetectorsCounts: Js(e.nonwearDetectorsCounts, a.nonwearDetectors, Ks(n)),
		placementFromSource: a.placementFromSource
	} : {
		...r,
		algorithm: Xs(e.algorithm, n),
		placementFromSource: !1
	};
}
function Ks(e) {
	const t = e?.resolvedCapabilities, n = e?.sourceProfileId;
	return void 0 === t || null == n ? [] : (ze[n] ?? []).filter((e) => {
		const n = P[e];
		return void 0 === n || !n.every((e) => e.some((e) => t.includes(e)));
	});
}
const Qs = /* @__PURE__ */ new WeakMap();
function Js(e, t, n) {
	const a = `${t.join(",")}|${n.join(",")}`;
	let r = Qs.get(e);
	r || Qs.set(e, r = /* @__PURE__ */ new Map());
	const i = r.get(a);
	if (i) return i;
	const s = Object.freeze(e.filter((e) => t.includes(e) && !n.includes(e)));
	return r.set(a, s), s;
}
function Xs(e, t) {
	const n = (a = t?.sourceType, Ge(a)?.defaultSleepAlgorithm ?? null);
	var a;
	return null === n || fe(e) ? e : n;
}
function Ys(e, t) {
	return Us({
		algorithm: e.currentAlgorithm,
		periodGuider: e.periodGuider,
		nonwearDetectorsCounts: e.nonwearDetectorsCounts,
		...void 0 === e.nonwearDetectorsGgir ? {} : { nonwearDetectorsGgir: e.nonwearDetectorsGgir }
	}, qs(e.analysisParadigm), t);
}
function Zs(e) {
	const t = e.placementFromSource ? e.periodGuider : (n = e.algorithm, Object.values(w).find((e) => e.sleepAlgorithm === n && null !== e.periodGuider)?.periodGuider ?? void 0);
	var n;
	const a = t ? cs(t, {
		algorithm: e.algorithm,
		hasDiary: !1
	}) : void 0;
	return a ? zn({
		...Wn(e.sleepPeriodDetection),
		...a
	}) : e.sleepPeriodDetection;
}
const eo = Os, to = Ls;
function no(e, t) {
	const n = e[t];
	if (null == n) throw new Error(`The stored Actiware settings lack ${t}; import the file again.`);
	return n;
}
function ao(e, t) {
	const n = to(t);
	if (0 === Object.keys(n).length) return e;
	const a = {
		...e,
		...n
	}, r = void 0 === n.wake_threshold_selection ? void 0 : Ms[n.wake_threshold_selection];
	return void 0 !== r && (a.wake_threshold = r), void 0 !== n.actogram_start_seconds && (a.actogram_start_hour = Math.floor(n.actogram_start_seconds / 3600)), a;
}
function ro(e, t) {
	return "nap_detection" === t ? e.nap_detection ?? !1 : "min_nap_minutes" === t ? e.min_nap_minutes ?? 40 : "nap_sensitivity" === t ? e.nap_sensitivity ?? "high" : "actogram_start_seconds" === t ? function(e) {
		return e.actogram_start_seconds ?? 3600 * no(e, "actogram_start_hour");
	}(e) : e[t];
}
function io(e, t) {
	return eo.every((n) => ro(e, n) === ro(t, n));
}
function so(e, t) {
	return xs.some((n) => ro(e, n) !== ro(t, n));
}
function oo(e, t, n) {
	if (null == t) return t;
	const a = Cs, r = lo(e, t, n).map((e) => [e, a[e]]);
	return {
		...Object.fromEntries(r),
		...to(t)
	};
}
function lo(e, t, n) {
	if (null == t) return [];
	const a = to(t);
	return !n.some((e) => "rest" === e.kind) || so(e, ao(e, a)) ? Object.keys(Cs).filter((e) => void 0 === a[e]) : [];
}
const co = Object.freeze([dt.ggir_saved]), uo = {
	[dt.van_hees_2013]: Object.freeze([dt.van_hees_2013]),
	[dt.van_hees_2023]: Object.freeze([dt.van_hees_2023])
};
function po(e, t) {
	const n = En(t);
	return !n && e.includes(dt.ggir_saved) && t?.ggirNonwearDetector ? t.ggirNonwearDetector === dt.van_hees_2013 ? uo.van_hees_2013 : uo.van_hees_2023 : n && e.some((e) => e === dt.van_hees_2023 || e === dt.van_hees_2013) ? co : e.every((e) => e === dt.ggir_saved === n) ? e : Js(e, n ? co : e.filter((e) => e !== dt.ggir_saved), []);
}
const mo = "Scores were computed with different settings, so this night can't be auto-scored. Manual scoring still works.";
function fo(e) {
	return $.some((t) => e.startsWith(t));
}
function _o(e, t) {
	const n = "string" == typeof t ? t : "recordedCellId" in t ? t.recordedCellId : t.id, a = e.map((e) => (e?.algorithmResults)?.[n]);
	if (!fo(n)) return {
		status: "ok",
		outputs: a,
		configHash: null
	};
	let r = null, i = "string" != typeof t && "recordedCellId" in t;
	if ("string" == typeof t) {
		const e = (s = n, Gt ??= new Map(Ht().configs.map((e) => [e.id, e])), Gt.get(s));
		r = e?.configHash ?? null, i = void 0 === e;
	} else if (!("recordedCellId" in t)) {
		const e = bt(t);
		if (null === e) throw new Error(`Refused a cube output read for ${n}: not a planned config`);
		r = e.configHash;
	}
	var s;
	let o = null;
	for (const [l, c] of e.entries()) {
		if (void 0 === a[l] || void 0 === c?.algorithmResultHashes) continue;
		const e = c.algorithmResultHashes[n];
		if (void 0 === e) return {
			status: "stale",
			reason: `${n} was stored without its config`
		};
		if (!i && e !== r) return {
			status: "stale",
			reason: `${n} was stored under another config`
		};
		if (null !== o && e !== o) return {
			status: "stale",
			reason: `${n} was stored under two configs`
		};
		o = e;
	}
	return {
		status: "ok",
		outputs: a,
		configHash: o
	};
}
function yo(e) {
	const t = {};
	for (const n of Object.keys(e.algorithmResults ?? {})) t[n] = !0;
	return {
		...void 0 === e.date ? {} : { date: e.date },
		algorithmResults: t,
		algorithmResultHashes: e.algorithmResultHashes
	};
}
function go(e) {
	return e || "";
}
function ho(e, t) {
	return bo(wo(e), t);
}
function wo(e) {
	return [...e].filter((e) => void 0 !== e).map(yo).sort((e, t) => (e.date ?? "").localeCompare(t.date ?? ""));
}
function bo(e, t) {
	const n = go(t) || e.map((e) => Object.keys(e.algorithmResults)[0]).find((e) => void 0 !== e) || null;
	return null === n ? {
		key: n,
		status: "ok",
		configHash: null
	} : (() => {
		const t = _o(e, n);
		return "stale" === t.status ? {
			key: n,
			status: "stale",
			reason: mo
		} : {
			key: n,
			status: "ok",
			configHash: t.configHash
		};
	})();
}
const vo = ho([]);
function ko(e) {
	const t = wo(e), n = /* @__PURE__ */ new Map(), a = [...new Set(t.flatMap((e) => Object.keys(e.algorithmResults)))].filter(fo);
	return Object.assign((e) => {
		const a = go(e);
		let r = n.get(a);
		return r || (r = bo(t, e), n.set(a, r)), r;
	}, { cellIds: a });
}
function So(e, t) {
	if ("stale" === t.status) return {
		status: "stale",
		reason: t.reason
	};
	if (null === t.key) return {
		status: "ok",
		key: null,
		outputs: e.map(() => {})
	};
	const n = _o(e, t.key);
	return "stale" === n.status || null !== n.configHash && null !== t.configHash && n.configHash !== t.configHash ? {
		status: "stale",
		reason: mo
	} : {
		status: "ok",
		key: t.key,
		outputs: n.outputs
	};
}
function Io(e) {
	const t = {
		algorithmResults: e?.algorithmResults ?? {},
		algorithmResultHashes: e?.algorithmResultHashes
	};
	return Object.keys(t.algorithmResults).flatMap((e) => {
		const n = _o([t], fo(e) ? { recordedCellId: e } : e), a = "ok" === n.status ? n.outputs[0] : void 0;
		return void 0 === a ? [] : [[e, a]];
	});
}
function Eo(e, t) {
	const n = {};
	for (const [a, r] of Object.entries(e ?? {})) {
		const e = t(r, a);
		void 0 !== e && (n[a] = e);
	}
	return n;
}
function Ao(e) {
	const t = {}, n = {};
	for (const { cubeConfig: a, results: r } of e ?? []) {
		const e = bt(a);
		if (null === e) throw new Error(`Refused a cube output for ${a.id}: not a planned config`);
		t[e.cellId] = r.slice(0), n[e.cellId] = e.configHash;
	}
	return {
		algorithmResults: t,
		algorithmResultHashes: n
	};
}
function To(e) {
	const t = "string" == typeof e.algoKey ? _t(e.algoKey) : null;
	if (null !== t) return {
		algoKey: t,
		algoVersion: ft(t),
		paramsHash: ""
	};
	const n = bt(e.cubeConfig);
	return null === n ? null : {
		algoKey: n.cellId,
		algoVersion: n.implementationVersion,
		paramsHash: n.configHash
	};
}
function Ro(e) {
	const t = e?.timestamps, n = t ? new Float64Array(t) : /* @__PURE__ */ new Float64Array(0), a = 0 === n.length ? e?.ggirTimestamps : void 0, r = Boolean(a?.byteLength), i = r ? e?.ggirSib : void 0;
	return {
		timestamps: r ? new Float64Array(a) : n,
		epochSec: r ? 5 : null,
		sleepScores: i?.byteLength ? new Uint8Array(i) : null,
		ggir: r
	};
}
function Do(e) {
	return null != e && "" !== e;
}
function Oo(e) {
	return Do(e.start) || Do(e.end);
}
function Mo(e) {
	return Do(e.start) || Do(e.end);
}
function xo(e) {
	return Array.isArray(e.naps) ? e.naps.map((e) => ({
		start: e.start ?? null,
		end: e.end ?? null
	})).filter(Oo) : [
		{
			start: e.nap1Start ?? null,
			end: e.nap1End ?? null
		},
		{
			start: e.nap2Start ?? null,
			end: e.nap2End ?? null
		},
		{
			start: e.nap3Start ?? null,
			end: e.nap3End ?? null
		}
	].filter(Oo);
}
function Co(e) {
	return Array.isArray(e.nonwearWindows) ? e.nonwearWindows.map((e) => ({
		start: e.start ?? null,
		end: e.end ?? null,
		reason: e.reason ?? null
	})).filter(Mo) : [
		{
			start: e.nonwear1Start ?? null,
			end: e.nonwear1End ?? null,
			reason: e.nonwear1Reason ?? null
		},
		{
			start: e.nonwear2Start ?? null,
			end: e.nonwear2End ?? null,
			reason: e.nonwear2Reason ?? null
		},
		{
			start: e.nonwear3Start ?? null,
			end: e.nonwear3End ?? null,
			reason: e.nonwear3Reason ?? null
		}
	].filter(Mo);
}
const No = Object.freeze({
	dayStartHour: 12,
	morningOffsetPadHours: 6
});
var Fo = class {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n;
	constructor(e) {
		this.#n = e;
	}
	answer(e) {
		const t = JSON.stringify(e);
		return this.#e.has(t) ? this.#e.get(t) : (this.#t.set(t, e), null);
	}
	get settled() {
		return 0 === this.#t.size;
	}
	async fillAnswers() {
		if (0 === this.#t.size) return !1;
		const e = [...this.#t];
		this.#t.clear();
		const t = e.map(([, e]) => e), n = await (this.#n ? this.#n.timeSemantics(t) : ((e) => q().timeSemantics(e))(t));
		return e.forEach(([e, t], a) => {
			const r = n[a];
			if (r && r.op !== t.op) throw new Error(`time semantics answered ${r.op} to ${t.op}`);
			this.#e.set(e, r?.value ?? null);
		}), !0;
	}
	parseClock(e) {
		return this.answer({
			op: "parseClock",
			clock: e
		});
	}
	wireClock(e) {
		return this.answer({
			op: "wireClock",
			clock: e
		});
	}
	resolveInstant(e, t, n, a = No) {
		return this.answer({
			op: "resolveInstant",
			clock: e,
			baseDate: t,
			role: n,
			geometry: a
		});
	}
	resolveSpan(e, t, n, a, r = No) {
		return this.answer({
			op: "resolveSpan",
			start: e,
			end: t,
			baseDate: n,
			role: a,
			geometry: r
		});
	}
	analysisDayOf(e, t = No.dayStartHour) {
		return this.answer({
			op: "analysisDayOf",
			instant: e,
			dayStartHour: t
		});
	}
	calendarDayOf(e) {
		return this.answer({
			op: "calendarDayOf",
			instant: e
		});
	}
	attributeEpisode(e, t, n = No.dayStartHour) {
		return this.answer({
			op: "attributeEpisode",
			role: e,
			seed: t,
			dayStartHour: n
		});
	}
	window(e, t, n = No.dayStartHour) {
		return this.answer({
			op: "window",
			kind: e,
			analysisDate: t,
			dayStartHour: n
		});
	}
	nightDatesInSpan(e, t, n, a = No.dayStartHour) {
		return this.answer({
			op: "nightDatesInSpan",
			dates: [...e],
			start: t,
			end: n,
			dayStartHour: a
		});
	}
	classifyLocalClock(e, t, n) {
		return this.answer({
			op: "classifyLocalClock",
			date: e,
			clock: t,
			zone: n
		});
	}
	zoneOffsetsInYear(e, t) {
		return this.answer({
			op: "zoneOffsetsInYear",
			zone: e,
			year: t
		});
	}
	dstTransitionOnNight(e, t, n = No.dayStartHour) {
		return this.answer({
			op: "dstTransitionOnNight",
			zone: e ?? null,
			analysisDate: t,
			dayStartHour: n
		});
	}
	applyDstPolicy(e, t, n, a) {
		return this.answer({
			op: "applyDstPolicy",
			classification: e,
			clock: t,
			foldPolicy: n,
			gapPolicy: a
		});
	}
	flipAmPm(e) {
		return this.answer({
			op: "flipAmPm",
			clock: e
		});
	}
	correctDiaryAmPm(e) {
		return this.answer({
			op: "correctDiaryAmPm",
			...e
		});
	}
	normaliseHhMm(e) {
		return this.answer({
			op: "normaliseHhMm",
			value: e
		});
	}
	decimalHoursExample(e) {
		return this.answer({
			op: "decimalHoursExample",
			cells: [...e]
		});
	}
	hhmmToMinutes(e) {
		return this.answer({
			op: "hhmmToMinutes",
			value: e
		});
	}
	parseDurationMinutes(e, t) {
		return this.answer({
			op: "parseDurationMinutes",
			value: e,
			unit: t
		});
	}
	parseDiaryDate(e, t) {
		return this.answer({
			op: "parseDiaryDate",
			value: e,
			dateOrder: t ?? null
		});
	}
	parseDiaryDateTime(e, t) {
		return this.answer({
			op: "parseDiaryDateTime",
			value: e,
			dateOrder: t ?? null
		});
	}
	diaryDateSpellings() {
		return this.answer({ op: "diaryDateSpellings" });
	}
	diaryDateUnreadReason(e, t) {
		return this.answer({
			op: "diaryDateUnreadReason",
			value: e,
			dateOrder: t ?? null
		});
	}
	temporalEvidence(e) {
		return this.answer({
			op: "temporalEvidence",
			...e
		});
	}
	timeAsleep(e, t) {
		return this.answer({
			op: "timeAsleep",
			onset: e,
			offset: t
		});
	}
	markedTimeInBedMinutes(e, t, n) {
		return this.answer({
			op: "markedTimeInBedMinutes",
			onset: e,
			offset: t,
			epochSeconds: n
		});
	}
	pairedDurationMinutes(e, t) {
		return this.answer({
			op: "pairedDurationMinutes",
			sleepMs: e,
			wakeMs: t
		});
	}
	decisionNightCounts(e) {
		return this.answer({
			op: "decisionNightCounts",
			...e
		});
	}
	diaryClockOrdering(e, t) {
		return this.answer({
			op: "diaryClockOrdering",
			clocks: e,
			ceilings: t
		});
	}
	nightWindowIssue(e, t) {
		return this.answer({
			op: "nightWindowIssue",
			start: e,
			end: t
		});
	}
	resolveEditedTime(e, t, n, a, r) {
		return this.answer({
			op: "resolveEditedTime",
			time: e,
			currentDate: t,
			reference: n,
			otherBoundary: a,
			field: r
		});
	}
	recordingFacts(e) {
		return this.answer({
			op: "recordingFacts",
			text: e
		});
	}
};
async function Lo(e, t = new Fo()) {
	for (let n = 0; n < 16; n += 1) {
		const n = e(t);
		if (!await t.fillAnswers()) return n;
	}
	throw new Error(`time semantics did not settle within ${String(16)} passes`);
}
async function Po(e, t, n, a = No.dayStartHour, r) {
	return await Lo((r) => r.nightDatesInSpan(e, t, n, a), new Fo(r)) ?? [];
}
function jo() {
	return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
const Go = async (e, t, n) => await Lo((n) => n.zoneOffsetsInYear(e, t), new Fo(n)) ?? [], Ho = (e, t, n = No.dayStartHour, a) => Lo((a) => a.dstTransitionOnNight(e, t, n), new Fo(a)), $o = [
	{
		aliases: [
			"file",
			"file_id",
			"file_name",
			"filename",
			"id",
			"participant",
			"participant_id",
			"participantid",
			"pid",
			"record_id",
			"studyid",
			"subj_id",
			"subject",
			"subject_id"
		],
		allowMultiple: !1,
		dataType: "str",
		description: "Unique participant identifier.",
		key: "filename",
		label: "ID",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "string",
		ontologySlot: "participant_id",
		required: !0,
		uiGroup: "Identity",
		valueKind: "identifier"
	},
	{
		aliases: [
			"analysis_date",
			"completion_date",
			"diary_entry_date",
			"entry_date",
			"form_date",
			"startdate",
			"survey_date"
		],
		allowMultiple: !1,
		dataType: "date",
		description: "Date the diary was filled out (distinct from sleep date).",
		key: "analysis_date",
		label: "Diary date",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "date",
		ontologySlot: "diary_entry_date",
		required: !1,
		uiGroup: "Dates",
		valueKind: "date_field"
	},
	{
		aliases: [
			"date",
			"date_of_last_night",
			"diary_date",
			"diary_sleep_date",
			"night_date",
			"recording_date",
			"sleep_date"
		],
		allowMultiple: !1,
		dataType: "date",
		description: "Date of the sleep period being reported (distinct from entry date).",
		key: "sleep_date",
		label: "Sleep date",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "date",
		ontologySlot: "diary_sleep_date",
		required: !1,
		uiGroup: "Dates",
		valueKind: "date_field"
	},
	{
		aliases: [
			"awakening_date",
			"diary_offset_date",
			"end_date",
			"get_up_date",
			"getup_date",
			"morning_date",
			"offset_date",
			"wake_date"
		],
		allowMultiple: !1,
		dataType: "date",
		description: "Date of the wake/morning end of the sleep period (distinct from diary_sleep_date, the evening start). OBSERVED when the diary supplies an explicit wake / get-up date column; otherwise DERIVED from diary_sleep_date plus the overnight rule (sleep_date + 1 when the night records a morning wake). Several temporal axioms (11, 21, 22) compare against it, so a value — observed or derived — must always be present for them to be evaluable. The derivation is recorded in diary_offset_date_provenance.",
		key: "wake_date",
		label: "Wake date",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "date",
		ontologySlot: "diary_offset_date",
		provenanceClass: "interpretation_derived",
		required: !1,
		uiGroup: "Dates",
		valueKind: "date_field"
	},
	{
		aliases: [
			"bed_date",
			"date_got_into_bed",
			"in_bed_date"
		],
		allowMultiple: !1,
		dataType: "date",
		description: "Date of the sleep period being reported (distinct from entry date).",
		key: "bed_date",
		label: "In bed date",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "date",
		ontologySlot: "diary_sleep_date",
		required: !1,
		uiGroup: "Main Sleep",
		valueKind: "date_field"
	},
	{
		aliases: [
			"bed_time",
			"bedstart",
			"bedtime",
			"diary_in_bed_time",
			"in_bed_time",
			"in_bed_time_auto",
			"inbed_hour",
			"inbed_time",
			"time_to_bed",
			"tobed"
		],
		allowMultiple: !1,
		computability: "non_computable",
		dataType: "time",
		description: "CSD Q1: What time did you get into bed?",
		instrumentItem: "Q1",
		key: "diary_in_bed_time",
		label: "In bed time",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "UnzonedDiaryTime",
		ontologySlot: "diary_in_bed_time",
		provenanceClass: "source_reported",
		required: !1,
		temporalChain: "main_sleep",
		temporalOrder: 1,
		temporalRole: "evening_onset",
		uiGroup: "Main Sleep",
		valueKind: "temporal_point"
	},
	{
		aliases: [
			"bed_date_time",
			"bed_datetime",
			"bedstart_date_time",
			"bedstart_datetime",
			"bedtime_date_time",
			"bedtime_datetime",
			"diary_in_bed_date_time",
			"diary_in_bed_datetime",
			"in_bed_date_time",
			"in_bed_datetime",
			"in_bed_time_auto_date_time",
			"in_bed_time_auto_datetime",
			"inbed_date_time",
			"inbed_datetime",
			"inbed_hour_date_time",
			"inbed_hour_datetime",
			"time_to_bed_date_time",
			"time_to_bed_datetime",
			"tobed_date_time",
			"tobed_datetime"
		],
		allowMultiple: !1,
		computability: "non_computable",
		dataType: "datetime",
		description: "CSD Q1: What time did you get into bed?",
		instrumentItem: "Q1",
		key: "bed_datetime",
		label: "In bed datetime",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "UnzonedDiaryTime",
		ontologySlot: "diary_in_bed_time",
		provenanceClass: "source_reported",
		required: !1,
		temporalChain: "main_sleep",
		temporalOrder: 1,
		temporalRole: "evening_onset",
		uiGroup: "Main Sleep",
		valueKind: "datetime"
	},
	{
		aliases: [
			"date_fell_asleep",
			"onset_date",
			"sleep_onset_date"
		],
		allowMultiple: !1,
		dataType: "date",
		description: "Date of the sleep period being reported (distinct from entry date).",
		key: "sleep_onset_date",
		label: "Sleep onset date",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "date",
		ontologySlot: "diary_sleep_date",
		required: !1,
		uiGroup: "Main Sleep",
		valueKind: "date_field"
	},
	{
		aliases: [
			"asleep_time",
			"diary_sleep_onset_time",
			"fell_asleep",
			"lights_out",
			"lightsout",
			"onset_time",
			"sleep_onset",
			"sleep_onset_time",
			"sleep_onset_time_auto",
			"sleep_start",
			"time_fell_asleep"
		],
		allowMultiple: !1,
		computability: "computable",
		computedFrom: "diary_try_to_sleep_time + diary_sleep_onset_latency_minutes",
		dataType: "time",
		description: "Actual sleep onset = try_to_sleep + SOL. Computable from try_to_sleep_time + sleep_onset_latency, or reported directly.",
		key: "diary_onset_time",
		label: "Sleep onset time",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "UnzonedDiaryTime",
		ontologySlot: "diary_sleep_onset_time",
		required: !1,
		temporalChain: "main_sleep",
		temporalOrder: 3,
		temporalRole: "evening_onset",
		uiGroup: "Main Sleep",
		valueKind: "temporal_point"
	},
	{
		aliases: [
			"asleep_date_time",
			"asleep_datetime",
			"diary_sleep_onset_date_time",
			"diary_sleep_onset_datetime",
			"fell_asleep_date_time",
			"fell_asleep_datetime",
			"lights_out_date_time",
			"lights_out_datetime",
			"lightsout_date_time",
			"lightsout_datetime",
			"onset_date_time",
			"onset_datetime",
			"sleep_onset_date_time",
			"sleep_onset_datetime",
			"sleep_onset_time_auto_date_time",
			"sleep_onset_time_auto_datetime",
			"sleep_start_date_time",
			"sleep_start_datetime",
			"time_fell_asleep_date_time",
			"time_fell_asleep_datetime"
		],
		allowMultiple: !1,
		computability: "computable",
		computedFrom: "diary_try_to_sleep_time + diary_sleep_onset_latency_minutes",
		dataType: "datetime",
		description: "Actual sleep onset = try_to_sleep + SOL. Computable from try_to_sleep_time + sleep_onset_latency, or reported directly.",
		key: "sleep_onset_datetime",
		label: "Sleep onset datetime",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "UnzonedDiaryTime",
		ontologySlot: "diary_sleep_onset_time",
		required: !1,
		temporalChain: "main_sleep",
		temporalOrder: 3,
		temporalRole: "evening_onset",
		uiGroup: "Main Sleep",
		valueKind: "datetime"
	},
	{
		aliases: [
			"diary_wake_time",
			"sleep_offset_time",
			"sleep_offset_time_auto",
			"time_woke",
			"wake_time",
			"waketime"
		],
		allowMultiple: !1,
		computability: "non_computable",
		dataType: "time",
		description: "CSD Q6: Final awakening time. This IS the diary sleep offset. NOT 'time I decided to get up' — that is diary_out_of_bed_time.",
		instrumentItem: "Q6",
		key: "diary_wake_time",
		label: "Sleep offset time",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "UnzonedDiaryTime",
		ontologySlot: "diary_wake_time",
		provenanceClass: "source_reported",
		required: !1,
		temporalChain: "main_sleep",
		temporalOrder: 4,
		temporalRole: "morning_offset",
		uiGroup: "Main Sleep",
		valueKind: "temporal_point"
	},
	{
		aliases: [
			"diary_wake_date_time",
			"diary_wake_datetime",
			"sleep_offset_date_time",
			"sleep_offset_datetime",
			"sleep_offset_time_auto_date_time",
			"sleep_offset_time_auto_datetime",
			"time_woke_date_time",
			"time_woke_datetime",
			"wake_date_time",
			"wake_datetime",
			"waketime_date_time",
			"waketime_datetime"
		],
		allowMultiple: !1,
		computability: "non_computable",
		dataType: "datetime",
		description: "CSD Q6: Final awakening time. This IS the diary sleep offset. NOT 'time I decided to get up' — that is diary_out_of_bed_time.",
		instrumentItem: "Q6",
		key: "wake_datetime",
		label: "Sleep offset datetime",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "UnzonedDiaryTime",
		ontologySlot: "diary_wake_time",
		provenanceClass: "source_reported",
		required: !1,
		temporalChain: "main_sleep",
		temporalOrder: 4,
		temporalRole: "morning_offset",
		uiGroup: "Main Sleep",
		valueKind: "datetime"
	},
	{
		aliases: [
			"get_up_date",
			"got_up_date",
			"out_of_bed_date",
			"rise_date"
		],
		allowMultiple: !1,
		dataType: "date",
		description: "Date of the wake/morning end of the sleep period (distinct from diary_sleep_date, the evening start). OBSERVED when the diary supplies an explicit wake / get-up date column; otherwise DERIVED from diary_sleep_date plus the overnight rule (sleep_date + 1 when the night records a morning wake). Several temporal axioms (11, 21, 22) compare against it, so a value — observed or derived — must always be present for them to be evaluable. The derivation is recorded in diary_offset_date_provenance.",
		key: "out_of_bed_date",
		label: "Out of bed date",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "date",
		ontologySlot: "diary_offset_date",
		provenanceClass: "interpretation_derived",
		required: !1,
		uiGroup: "Main Sleep",
		valueKind: "date_field"
	},
	{
		aliases: [
			"diary_out_of_bed_time",
			"got_up",
			"gotup",
			"out_of_bed",
			"out_of_bed_time",
			"rise_time"
		],
		allowMultiple: !1,
		computability: "non_computable",
		dataType: "time",
		description: "CSD Q7: What time did you get out of bed?",
		instrumentItem: "Q7",
		key: "diary_out_of_bed_time",
		label: "Out of bed time",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "UnzonedDiaryTime",
		ontologySlot: "diary_out_of_bed_time",
		provenanceClass: "source_reported",
		required: !1,
		temporalChain: "main_sleep",
		temporalOrder: 5,
		temporalRole: "morning_offset",
		uiGroup: "Main Sleep",
		valueKind: "temporal_point"
	},
	{
		aliases: [
			"diary_out_of_bed_date_time",
			"diary_out_of_bed_datetime",
			"got_up_date_time",
			"got_up_datetime",
			"gotup_date_time",
			"gotup_datetime",
			"out_of_bed_date_time",
			"out_of_bed_datetime",
			"rise_date_time",
			"rise_datetime"
		],
		allowMultiple: !1,
		computability: "non_computable",
		dataType: "datetime",
		description: "CSD Q7: What time did you get out of bed?",
		instrumentItem: "Q7",
		key: "out_of_bed_datetime",
		label: "Out of bed datetime",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "UnzonedDiaryTime",
		ontologySlot: "diary_out_of_bed_time",
		provenanceClass: "source_reported",
		required: !1,
		temporalChain: "main_sleep",
		temporalOrder: 5,
		temporalRole: "morning_offset",
		uiGroup: "Main Sleep",
		valueKind: "datetime"
	},
	{
		aliases: [
			"diary_sleep_quality",
			"quality",
			"quality_rating",
			"sleep_qual",
			"sleep_quality",
			"slp_quality"
		],
		allowMultiple: !1,
		computability: "non_computable",
		dataType: "enum",
		description: "CSD Q8: How would you rate your sleep quality?",
		instrumentItem: "Q8",
		key: "sleep_quality",
		label: "Sleep quality",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "SleepQualityScale",
		ontologySlot: "diary_sleep_quality",
		provenanceClass: "source_reported",
		required: !1,
		uiGroup: "Sleep Quality",
		valueKind: "categorical"
	},
	{
		aliases: [
			"diary_in_home_dlmo",
			"in_home_dlmo",
			"visit_day"
		],
		allowMultiple: !1,
		computability: "non_computable",
		dataType: "str",
		description: "Visit indicator for this diary date. SCREENS scheduled visits are emitted as Visit N in visit order; the visit type is unknown.",
		key: "in_home_dlmo",
		label: "In Home/DLMO",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "string",
		ontologySlot: "diary_in_home_dlmo",
		provenanceClass: "source_reported",
		required: !1,
		uiGroup: "Questionnaire / Context",
		valueKind: "free_text"
	},
	{
		acceptedUnits: [
			"min",
			"minute",
			"minutes",
			"m",
			"h",
			"hr",
			"hrs",
			"hour",
			"hours",
			"s",
			"sec",
			"secs",
			"second",
			"seconds",
			"HH:MM"
		],
		aliases: [
			"diary_sleep_onset_latency_minutes",
			"onset_latency_minutes",
			"sleep_latency",
			"sleep_onset_latency",
			"sleep_onset_latency_minutes",
			"sol",
			"sol_minutes",
			"time_to_fall_asleep"
		],
		allowMultiple: !1,
		canonicalUnit: "min",
		computability: "non_computable",
		dataType: "float",
		description: "CSD Q3: How long did it take to fall asleep? (minutes)",
		instrumentItem: "Q3",
		key: "time_to_fall_asleep_minutes",
		label: "Sleep latency",
		maximumValue: 480,
		minimumValue: 0,
		multivalued: !1,
		nullSemantics: [
			"legitimate_zero",
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "float",
		ontologySlot: "diary_sleep_onset_latency_minutes",
		provenanceClass: "source_reported",
		required: !1,
		uiGroup: "Fragmentation",
		unitSystem: "UCUM",
		valueKind: "duration"
	},
	{
		acceptedUnits: [
			"min",
			"minute",
			"minutes",
			"m",
			"h",
			"hr",
			"hrs",
			"hour",
			"hours",
			"s",
			"sec",
			"secs",
			"second",
			"seconds",
			"HH:MM"
		],
		aliases: [
			"diary_sleep_onset_latency_minutes_unit",
			"duration_unit",
			"onset_latency_minutes_unit",
			"sleep_onset_latency_minutes_unit",
			"sleep_onset_latency_unit",
			"sol_minutes_unit",
			"sol_unit",
			"unit"
		],
		allowMultiple: !1,
		canonicalUnit: "min",
		computability: "non_computable",
		dataType: "str",
		description: "CSD Q3: How long did it take to fall asleep? (minutes)",
		instrumentItem: "Q3",
		key: "sleep_latency_unit",
		label: "Sleep latency unit",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "float",
		ontologySlot: "diary_sleep_onset_latency_minutes",
		provenanceClass: "source_reported",
		required: !1,
		uiGroup: "Fragmentation",
		unitForSlot: "diary_sleep_onset_latency_minutes",
		unitSystem: "UCUM",
		valueKind: "unit"
	},
	{
		aliases: [
			"awakenings",
			"diary_number_of_awakenings",
			"nocturnal_awakenings",
			"num_awakenings",
			"number_awakenings",
			"number_of_awakenings",
			"nwak",
			"wake_episodes",
			"waso_count"
		],
		allowMultiple: !1,
		computability: "non_computable",
		dataType: "int",
		description: "CSD Q4: How many times did you wake up?",
		instrumentItem: "Q4",
		key: "number_of_awakenings",
		label: "Awakenings",
		maximumValue: 50,
		minimumValue: 0,
		multivalued: !1,
		nullSemantics: [
			"legitimate_zero",
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "integer",
		ontologySlot: "diary_number_of_awakenings",
		provenanceClass: "source_reported",
		required: !1,
		uiGroup: "Fragmentation",
		valueKind: "count"
	},
	{
		aliases: [
			"comments",
			"diary_comments",
			"diary_notes",
			"free_text",
			"notes",
			"remarks"
		],
		allowMultiple: !1,
		dataType: "str",
		description: "CSD Q9: Additional comments.",
		key: "notes",
		label: "Notes",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "string",
		ontologySlot: "diary_notes",
		required: !1,
		uiGroup: "Questionnaire / Context",
		valueKind: "free_text"
	},
	{
		aliases: [
			"study_timezone",
			"study_tz",
			"time_zone",
			"timezone",
			"tz"
		],
		allowMultiple: !1,
		dataType: "str",
		description: "Study-level IANA timezone name (e.g., America/Chicago). Applied to all entries unless overridden by entry_timezone. Must be a valid IANA identifier — abbreviations (EST, PST) are ambiguous and must be resolved to IANA form during mapping.",
		key: "timezone",
		label: "Diary default timezone",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "string",
		ontologySlot: "timezone",
		required: !1,
		uiGroup: "Dates",
		valueKind: "timezone"
	},
	{
		aliases: [
			"entry_timezone",
			"entry_tz",
			"local_timezone",
			"local_tz",
			"participant_timezone"
		],
		allowMultiple: !1,
		dataType: "str",
		description: "Source-reported per-entry IANA timezone. When absent, mapping may use the DiaryEntryDataset timezone only under the declared source timezone policy; otherwise the canonical clocks remain unzoned and no instant is inferred.",
		key: "entry_timezone",
		label: "Per-entry timezone override",
		multivalued: !1,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "diary_entry",
		ontologyRange: "IanaTimezoneName",
		ontologySlot: "entry_timezone",
		required: !1,
		uiGroup: "Dates",
		valueKind: "timezone"
	},
	{
		aliases: [
			"diary_nap_episodes",
			"episode_end_time",
			"episode_start_date",
			"episode_start_time",
			"nap_date",
			"nap_end_time",
			"nap_episodes",
			"nap_start_time"
		],
		allowMultiple: !0,
		dataType: "date,object,time",
		description: "Maps any source columns that belong to this ontology category. The backend groups repeated episodes by captured index and role.",
		key: "nap_episode_columns",
		label: "Nap episode columns",
		multivalued: !0,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "sleep_episode",
		ontologyRange: "DiaryNapEpisode,date,time",
		ontologySlot: null,
		required: !1,
		uiGroup: "Episodes",
		valueKind: "date_field,repeat_group,temporal_point"
	},
	{
		aliases: [
			"diary_nonwear_episodes",
			"episode_end_time",
			"episode_start_time",
			"nonwear_end_time",
			"nonwear_episodes",
			"nonwear_reason",
			"nonwear_start_time"
		],
		allowMultiple: !0,
		dataType: "enum,object,time",
		description: "Maps any source columns that belong to this ontology category. The backend groups repeated episodes by captured index and role.",
		key: "nonwear_episode_columns",
		label: "Nonwear episode columns",
		multivalued: !0,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "nonwear_episode",
		ontologyRange: "DiaryNonwearEpisode,NonwearReason,time",
		ontologySlot: null,
		required: !1,
		uiGroup: "Episodes",
		valueKind: "categorical,repeat_group,temporal_point"
	},
	{
		aliases: [
			"diary_dozing_episodes",
			"dozing_end_time",
			"dozing_episodes",
			"dozing_start_time",
			"episode_end_time",
			"episode_start_time"
		],
		allowMultiple: !0,
		dataType: "object,time",
		description: "Maps any source columns that belong to this ontology category. The backend groups repeated episodes by captured index and role.",
		key: "dozing_episode_columns",
		label: "Dozing episode columns",
		multivalued: !0,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "dozing_episode",
		ontologyRange: "DiaryAccidentalDozingEpisode,time",
		ontologySlot: null,
		required: !1,
		uiGroup: "Episodes",
		valueKind: "repeat_group,temporal_point"
	},
	{
		aliases: [
			"alcohol",
			"alcohol_consumed",
			"alcohol_intake",
			"alcohol_last_time",
			"bed_partner",
			"caffeine",
			"caffeine_consumed",
			"caffeine_intake",
			"caffeine_last_time",
			"coffee",
			"completion_method",
			"cycle_day",
			"data_entry_mode",
			"daytime_nap",
			"diary_alcohol_intake",
			"diary_alcohol_last_time",
			"diary_bed_partner",
			"diary_caffeine_intake",
			"diary_caffeine_last_time",
			"diary_dlmo_time",
			"diary_entry_agent",
			"diary_exercise",
			"diary_is_invalid_night",
			"diary_is_no_sleep",
			"diary_is_workday",
			"diary_medication_start_date",
			"diary_menstrual_day",
			"diary_nap_occurred",
			"diary_room_sharing",
			"diary_schema_version",
			"diary_screen_time_before_bed",
			"diary_sleep_medication_name",
			"diary_wake_reason",
			"did_not_sleep",
			"dlmo_time",
			"drinking",
			"electronics",
			"entry_agent",
			"entry_method",
			"exercise",
			"exercised",
			"had_alcohol",
			"had_caffeine",
			"input_method",
			"is_invalid_night",
			"is_no_sleep",
			"is_workday",
			"med_start_date",
			"medication_start",
			"medication_start_date",
			"menstrual_day",
			"nap",
			"nap_occurred",
			"nap_today",
			"napped",
			"no_sleep",
			"nosleep",
			"period_day",
			"physical_activity",
			"response_mode",
			"room_sharing",
			"rx_start_date",
			"schema_version",
			"screen_minutes",
			"screen_time",
			"screen_time_before_bed",
			"screentime",
			"sleep_medication_name",
			"sleepless_night",
			"took_nap",
			"wake_reason",
			"weekday",
			"work_day",
			"workday",
			"workout"
		],
		allowMultiple: !0,
		canonicalUnit: "min",
		dataType: "bool,date,enum,float,int,str,time",
		description: "Maps any source columns that belong to this ontology category. The backend groups repeated episodes by captured index and role.",
		key: "questionnaire_context_columns",
		label: "Questionnaire / context columns",
		multivalued: !0,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "questionnaire_context",
		ontologyRange: "BedPartner,EntryAgent,EntryMethod,UnzonedDiaryTime,WakeReason,boolean,date,float,integer,string",
		ontologySlot: null,
		required: !1,
		uiGroup: "Questionnaire / Context",
		unitSystem: "UCUM",
		valueKind: "boolean,categorical,count,date_field,duration,free_text,temporal_point"
	},
	{
		aliases: [
			"age",
			"age_at_enrollment",
			"age_years",
			"biological_sex",
			"comorbidities",
			"comorbidity_codes",
			"conditions",
			"data_entry_system",
			"data_system",
			"diagnoses",
			"diagnosis",
			"diary_frequency",
			"diary_language",
			"entry_cadence",
			"entry_system",
			"expected_entry_frequency",
			"gender",
			"icd_codes",
			"instrument_language",
			"is_proxy_report",
			"lang",
			"language",
			"lat",
			"latitude",
			"lng",
			"lon",
			"longitude",
			"participant_age",
			"participant_sex",
			"platform",
			"population_type",
			"schedule_frequency",
			"schedule_type",
			"sex",
			"site_latitude",
			"site_longitude",
			"study_language",
			"study_site_latitude",
			"study_site_longitude",
			"subject_age",
			"survey_platform",
			"typical_bedtime",
			"typical_wake_time"
		],
		allowMultiple: !0,
		dataType: "bool,enum,float,int,str,time",
		description: "Maps any source columns that belong to this ontology category. The backend groups repeated episodes by captured index and role.",
		key: "participant_metadata_columns",
		label: "Participant / dataset metadata columns",
		multivalued: !0,
		nullSemantics: [
			"participant_skipped",
			"participant_uncertain",
			"system_artifact"
		],
		ontologyCategory: "participant_dataset_metadata",
		ontologyRange: "BiologicalSex,DataEntrySystem,EntryFrequency,ScheduleType,boolean,float,integer,string,time",
		ontologySlot: null,
		required: !1,
		uiGroup: "Participant / Dataset",
		valueKind: "boolean,categorical,count,free_text,numeric,temporal_point"
	}
], qo = {
	in_bed: [{
		dbColumn: "diary_in_bed_time",
		slot: "diary_in_bed_time",
		tsField: "diaryInBedTime"
	}, {
		dbColumn: "diary_onset_time",
		slot: "diary_sleep_onset_time",
		tsField: "diaryOnsetTime"
	}],
	onset: [{
		dbColumn: "diary_onset_time",
		slot: "diary_sleep_onset_time",
		tsField: "diaryOnsetTime"
	}, {
		dbColumn: "diary_in_bed_time",
		slot: "diary_in_bed_time",
		tsField: "diaryInBedTime"
	}],
	out_bed: [{
		dbColumn: "diary_out_of_bed_time",
		slot: "diary_out_of_bed_time",
		tsField: "diaryOutOfBedTime"
	}, {
		dbColumn: "diary_wake_time",
		slot: "diary_wake_time",
		tsField: "diaryWakeTime"
	}],
	wake: [{
		dbColumn: "diary_wake_time",
		slot: "diary_wake_time",
		tsField: "diaryWakeTime"
	}, {
		dbColumn: "diary_out_of_bed_time",
		slot: "diary_out_of_bed_time",
		tsField: "diaryOutOfBedTime"
	}]
}, Bo = {
	ampm_search_gap_max_hours: 18,
	ampm_search_gap_min_hours: 2,
	ampm_search_window_margin_hours: 2
}, zo = /[^\p{L}\p{N}]+/gu;
function Wo(e) {
	return e.normalize("NFKC").trim().toLowerCase().replace(zo, "_").replace(/^_+|_+$/g, "");
}
function Vo(e) {
	return e ? e.includes("") ? e.split("").map((e) => e.trim()).filter(Boolean) : e.trim().length > 0 ? [e.trim()] : [] : [];
}
function Uo(e, t) {
	const n = new Map(t.map((e) => [e.key, e.label])), a = /* @__PURE__ */ new Map();
	for (const [r, i] of Object.entries(e)) {
		const e = Vo(i), t = n.get(r);
		if (t) for (const n of e) {
			const e = Wo(n);
			if (0 === e.length) continue;
			const r = a.get(e);
			r ? r.labels.push(t) : a.set(e, {
				value: n,
				labels: [t]
			});
		}
	}
	return [...a.entries()].filter(([, e]) => e.labels.length > 1).map(([e, t]) => ({
		key: `duplicate_column:${e}`,
		message: `Column "${t.value}" is mapped to ${t.labels.join(" and ")}. Use each source column once.`
	}));
}
function Ko(e, t, n) {
	if (void 0 === n) return [];
	const a = new Map(t.map((e) => [e.key, e.label])), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
	for (const s of n) {
		const e = s.trim(), t = Wo(e);
		if (0 === t.length) continue;
		const n = r.get(t);
		n ? i.set(t, n) : r.set(t, e);
	}
	return Object.entries(e).map(([e, t]) => {
		const n = Vo(t), r = a.get(e);
		return r && 0 !== n.length ? n.map((e) => {
			const t = Wo(e), n = i.get(t);
			return n ? {
				key: `duplicate_header:${t}`,
				message: `Mapped column "${n}" for ${r} appears more than once in the current preview. Rename duplicate columns before importing.`
			} : null;
		}).filter((e) => null !== e) : [];
	}).flat();
}
function Qo(e, t, n) {
	if (void 0 === n) return [];
	const a = new Map(t.map((e) => [e.key, e.label])), r = new Set(n.map(Wo));
	return Object.entries(e).map(([e, t]) => {
		const n = Vo(t), i = a.get(e);
		return i && 0 !== n.length ? n.map((t) => {
			const n = Wo(t);
			return 0 === n.length || r.has(n) ? null : {
				key: `missing_column:${e}`,
				message: `Mapped column "${t}" for ${i} is not in the current preview.`
			};
		}).filter((e) => null !== e) : [];
	}).flat();
}
$o.find((e) => "in_home_dlmo" === e.key).key;
function Xo(e) {
	if (!e) return 1;
	if (/^(1|one|first|a)$/.test(e)) return 1;
	if (/^(2|two|second|b)$/.test(e)) return 2;
	if (/^(3|three|third|c)$/.test(e)) return 3;
	const t = Number.parseInt(e, 10);
	return Number.isFinite(t) && t > 0 ? t : null;
}
$o.map((e) => e.key);
const Yo = [
	{
		date_target_key: "bed_date",
		datetime_target_key: "bed_datetime",
		key: "in_bed",
		label: "In bed",
		required: !1,
		temporal_role: "evening_onset",
		time_target_key: "diary_in_bed_time"
	},
	{
		date_target_key: "sleep_onset_date",
		datetime_target_key: "sleep_onset_datetime",
		key: "sleep_onset",
		label: "Sleep onset",
		required: !0,
		temporal_role: "evening_onset",
		time_target_key: "diary_onset_time"
	},
	{
		date_target_key: "wake_date",
		datetime_target_key: "wake_datetime",
		key: "sleep_offset",
		label: "Sleep offset",
		required: !0,
		temporal_role: "morning_offset",
		time_target_key: "diary_wake_time"
	},
	{
		date_target_key: "out_of_bed_date",
		datetime_target_key: "out_of_bed_datetime",
		key: "out_of_bed",
		label: "Out of bed",
		required: !1,
		temporal_role: "morning_offset",
		time_target_key: "diary_out_of_bed_time"
	}
].map((e) => ({
	key: e.key,
	label: e.label,
	dateTargetKey: e.date_target_key,
	timeTargetKey: e.time_target_key,
	datetimeTargetKey: e.datetime_target_key,
	required: e.required,
	temporalRole: e.temporal_role
}));
function Zo(e) {
	return "morning_offset" === e.temporalRole ? "sleep_date_chronology" : "sleep_date_same_day";
}
function el(e) {
	const t = function(e) {
		const t = Wo(e), n = /^nap_?([0-9]+|one|two|three|first|second|third|a|b|c)?_?(start|end|from|until|begin|begins|stop|stops|onset|offset)(?:_?(datetime|date_time|date|time))?$/.exec(t) ?? /^nap_?(start|end|from|until|begin|begins|stop|stops|onset|offset)(?:_?(datetime|date_time|date|time))?_?([0-9]+|one|two|three|first|second|third|a|b|c)$/.exec(t);
		if (n) {
			const e = [
				"start",
				"end",
				"from",
				"until",
				"begin",
				"begins",
				"stop",
				"stops",
				"onset",
				"offset",
				"time"
			].includes(n[1] ?? ""), t = e ? n[1] : n[2], a = Xo(e ? n[3] : n[1]);
			if (null === a || a > 50) return null;
			const r = [
				"start",
				"from",
				"begin",
				"begins",
				"onset",
				"time"
			].includes(t ?? "") ? "start" : "end", i = e ? n[2] : n[3], s = "datetime" === i || "date_time" === i ? "datetime" : "date" === i ? "date" : "time";
			return {
				family: "nap",
				index: a,
				role: r,
				evidence: s,
				fieldKey: `nap_${String(a)}_${r}${"time" === s ? "" : `_${s}`}`
			};
		}
		const a = /^(?:nonwear|nw|offbody|device_removed)_?([0-9]+|one|two|three|first|second|third|a|b|c)?_?(start|end|from|until|reason|context)(?:_?(datetime|date_time|date|time))?$/.exec(t) ?? /^(?:nonwear|nw|offbody|device_removed)_?(start|end|from|until|reason|context)(?:_?(datetime|date_time|date|time))?_?([0-9]+|one|two|three|first|second|third|a|b|c)$/.exec(t);
		if (!a) return null;
		const r = [
			"start",
			"end",
			"from",
			"until",
			"reason",
			"context"
		].includes(a[1] ?? ""), i = r ? a[1] : a[2], s = Xo(r ? a[3] : a[1]);
		if (null === s || s > 50) return null;
		const o = ["start", "from"].includes(i ?? "") ? "start" : ["end", "until"].includes(i ?? "") ? "end" : "reason", l = r ? a[2] : a[3], c = "reason" === o ? "value" : "datetime" === l || "date_time" === l ? "datetime" : "date" === l ? "date" : "time";
		return {
			family: "nonwear",
			index: s,
			role: o,
			evidence: c,
			fieldKey: `nonwear_${String(s)}_${o}${"time" === c || "value" === c ? "" : `_${c}`}`
		};
	}(e.key);
	return "nap" === t?.family ? it : "nonwear" === t?.family ? st : rt;
}
(function(e, t = Yo) {
	const n = {};
	for (const a of t) {
		const t = e[el(a)];
		n[a.key] = "night_date" === t || "period_start_day" === t ? Zo(a) : "explicit_only";
	}
	return {
		dateRules: n,
		pendingGroups: Object.keys(e).filter((t) => "ask_per_night" === e[t]).sort()
	};
})(Object.freeze({
	[rt]: f.diary_main_sleep_date_rule,
	[it]: f.diary_nap_date_rule,
	[st]: f.diary_nonwear_date_rule
})).dateRules, f.diary_day_boundary_hour, f.diary_dst_fold_policy, f.diary_dst_gap_policy, new Set(Yo.flatMap((e) => [
	e.dateTargetKey,
	e.timeTargetKey,
	e.datetimeTargetKey
])), Object.freeze({
	date: null,
	time: null,
	datetimeDate: null,
	datetimeTime: null,
	datetimeZone: null,
	resolvedDate: null,
	resolvedTime: null,
	status: "incomplete"
}), Object.freeze({
	in_bed: "diaryInBedTime",
	sleep_onset: "diaryOnsetTime",
	sleep_offset: "diaryWakeTime",
	out_of_bed: "diaryOutOfBedTime"
});
const tl = /* @__PURE__ */ new Map(), nl = /* @__PURE__ */ new Set();
let al = 0;
function rl(e, t) {
	const n = t?.diaryTemporalPolicy;
	var a, r;
	void 0 !== n && Number.isFinite(e) && (r = n, (void 0 === (a = tl.get(e)) || a.dayBoundaryHour !== r.dayBoundaryHour || a.mainSleepDateRule !== r.mainSleepDateRule || a.napDateRule !== r.napDateRule || a.nonwearDateRule !== r.nonwearDateRule || a.dstFoldPolicy !== r.dstFoldPolicy || a.dstGapPolicy !== r.dstGapPolicy) && (tl.set(e, n), function() {
		al += 1;
		for (const e of nl) e();
	}()));
}
function il(e) {
	return (null == e ? void 0 : tl.get(e)) ?? function() {
		const e = N().scoring(), t = e;
		for (const n of O) {
			if (!n.startsWith("diary_")) continue;
			const e = g[n].storeKeys.zustand;
			if (!e || null !== o(n, t[e])) throw new Error("The persisted study configuration has an incomplete diary temporal policy.");
		}
		return {
			dayBoundaryHour: e.diaryDayBoundaryHour,
			mainSleepDateRule: e.diaryMainSleepDateRule,
			napDateRule: e.diaryNapDateRule,
			nonwearDateRule: e.diaryNonwearDateRule,
			dstFoldPolicy: e.diaryDstFoldPolicy,
			dstGapPolicy: e.diaryDstGapPolicy
		};
	}();
}
function sl(e) {
	return {
		dayStartHour: il(e).dayBoundaryHour,
		morningOffsetPadHours: No.morningOffsetPadHours
	};
}
function ol(e) {
	return xo(e).map((e) => [e.start, e.end]);
}
function ll(e) {
	return Co(e).map((e) => [e.start, e.end]);
}
function cl(e, t) {
	return null == e ? null : t.wireClock(e);
}
const dl = /* @__PURE__ */ new WeakMap();
function ul(e, t) {
	dl.get(t)?.delete(e);
}
async function pl(e, t, n) {
	const a = t ?? Ae(), [r, i] = await Promise.all([Fc(e, a), n ?? bc(e, a).then((e) => e?.seriesRevision ?? 0)]);
	if (0 === r.length) return null;
	const s = `${i}|${r.length}|${r[0]}|${r[r.length - 1]}`;
	let o = dl.get(a);
	const l = o?.get(e);
	if (l && l.dateKey === s) return l.promise;
	o || (o = /* @__PURE__ */ new Map(), dl.set(a, o));
	const c = o, d = async function(e, t, n) {
		const [a, r] = await Promise.all([Mc(e, t[0], n), Mc(e, t[t.length - 1], n)]);
		if (!a || !r) return null;
		const i = Ro(a).timestamps, s = Ro(r).timestamps;
		return 0 === i.length || 0 === s.length ? null : {
			start: 1e3 * i[0],
			end: 1e3 * s[s.length - 1]
		};
	}(e, r, a).catch((t) => {
		throw c.get(e)?.promise === d && c.delete(e), t;
	});
	return o.set(e, {
		dateKey: s,
		promise: d
	}), d;
}
function ml(e, t, n) {
	if (rl(e.fileId, e.importMappingProvenance), null === t) return e;
	const a = {
		diaryInBedTime: e.diaryInBedTime ?? null,
		diaryOnsetTime: e.diaryOnsetTime ?? null,
		diaryWakeTime: e.diaryWakeTime ?? null
	}, { ampm_search_gap_min_hours: r, ampm_search_gap_max_hours: i, ampm_search_window_margin_hours: s } = Bo, o = n.correctDiaryAmPm({
		inBed: a.diaryInBedTime,
		onset: a.diaryOnsetTime,
		wake: a.diaryWakeTime,
		onsetAnchor: qo.onset.map(({ tsField: e }) => a[e]).find(Boolean) ?? null,
		baseDate: e.analysisDate,
		spanMs: [t.start, t.end],
		geometry: sl(e.fileId),
		bounds: {
			gapMinHours: r,
			gapMaxHours: i,
			marginHours: s
		}
	});
	return null === o ? e : o.overlaps ? {
		...e,
		ampmCorrectionsJson: Object.keys(o.corrections).length > 0 ? o.corrections : null,
		ampmCorrectionNote: o.note
	} : {
		...e,
		ampmCorrectionsJson: null,
		ampmCorrectionNote: null
	};
}
function fl(e, t, n) {
	return Lo((n) => ml(e, t, n), new Fo(n));
}
function _l(e, t, n) {
	return Lo((n) => e.map((e) => ml(e, t, n)), new Fo(n));
}
const yl = {
	diary_in_bed_time: (e) => e.diaryInBedTime,
	diary_onset_time: (e) => e.diaryOnsetTime,
	diary_wake_time: (e) => e.diaryWakeTime,
	diary_out_of_bed_time: (e) => e.diaryOutOfBedTime
};
function gl(e, t) {
	if (!e) return null;
	const n = e.decisionOverlayJson?.[t];
	if ("string" == typeof n && "" !== n) return n;
	const a = e.ampmCorrectionsJson?.[t];
	if ("string" == typeof a && "" !== a) return a;
	const r = yl[t](e);
	return "string" == typeof r && "" !== r ? r : null;
}
async function hl(e, t, n = q()) {
	const a = [
		"diary_in_bed_time",
		"diary_out_of_bed_time",
		"diary_onset_time",
		"diary_wake_time"
	], r = [...e].flatMap((e) => a.map((t) => null === gl(e, t) ? 0 : 1));
	return Vi("ggirDiaryLogShape", `${t ?? ""}:${r.join("")}`, () => n.ggirDiaryLogShape(Uint8Array.from(r), t));
}
function wl(e, t) {
	for (const n of qo[e]) {
		const e = gl(t, n.dbColumn);
		if (null !== e) return e;
	}
	return null;
}
function bl(e) {
	return wl("onset", e);
}
function vl(e) {
	return wl("wake", e);
}
function kl(e) {
	return wl("in_bed", e);
}
function Sl(e) {
	return wl("out_bed", e);
}
const Il = [
	"diaryEntries",
	"stagedDiaryEntries",
	"diaryOccurrences"
];
var El = class {
	rows = [];
	rejected = [];
	operation;
	constructor(e) {
		this.operation = e;
	}
	row(e, t, n) {
		this.rows.push({
			store: e,
			change: t,
			...n
		});
	}
	reject(e) {
		this.rejected.push(e);
	}
	build() {
		const e = Object.fromEntries(Il.map((e) => {
			const t = this.rows.filter((t) => t.store === e);
			return [e, {
				added: t.filter((e) => "added" === e.change).length,
				replaced: t.filter((e) => "replaced" === e.change).length,
				deleted: t.filter((e) => "deleted" === e.change).length
			}];
		}));
		return {
			operation: this.operation,
			rows: [...this.rows],
			counts: e,
			rejected: [...this.rejected]
		};
	}
};
I.TIMESTAMP_MS, I.AXIS_X, I.AXIS_Y, I.AXIS_Z, I.VECTOR_MAGNITUDE, I.TEMPERATURE;
const Al = Uint8Array.of(83, 67, 68, 49);
function Tl(e) {
	const t = JSON.stringify({
		v: "v6",
		choiAxis: e.choiAxis,
		extras: e.extras ?? {}
	});
	let n = 2166136261;
	for (let a = 0; a < t.length; a++) n ^= t.charCodeAt(a), n = Math.imul(n, 16777619) >>> 0;
	return n.toString(16).padStart(8, "0");
}
let Rl = null;
async function Dl(e = !1) {
	return (await (Rl || (Rl = "undefined" != typeof navigator && navigator.storage?.getDirectory ? navigator.storage.getDirectory() : Promise.reject(/* @__PURE__ */ new Error("OPFS is not available in this browser"))), Rl)).getDirectoryHandle("scored", { create: e });
}
function Ol(e, t) {
	return `${e}__${t}.arrow`;
}
function Ml() {
	return "undefined" != typeof navigator && !!navigator.storage?.getDirectory;
}
function xl(e, t) {
	if (e.length === t) return e;
	const n = new Uint8Array(t);
	return n.set(e.subarray(0, t)), n;
}
async function Cl(e, t, n) {
	if (!Ml()) return;
	const a = Tl(t), r = await (await (await Dl(!0)).getFileHandle(Ol(e, a), { create: !0 })).createWritable();
	try {
		const e = await async function(e) {
			const t = new TextEncoder(), n = [], a = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4));
			a.setUint32(0, e.size, !0), n.push(new Uint8Array(a.buffer));
			for (const [r, i] of e) {
				const e = t.encode(r), a = i.sadeh_actilife.length;
				let s = 0;
				i.detach_nonwear && (s |= 1), i.sadeh_ggir && (s |= 2), i.ck_ggir && (s |= 4), i.nonwear_choi_2011 && (s |= 8), i.lstm_sleep_wake && (s |= 16);
				const o = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(7));
				o.setUint16(0, e.length, !0), o.setUint32(2, a, !0), o.setUint8(6, s), n.push(new Uint8Array(o.buffer), e), n.push(xl(i.sadeh_actilife, a), xl(i.sadeh_original, a), xl(i.ck_actilife, a), xl(i.ck_original, a), xl(i.consensus_majority_vote, a), xl(i.nonwear, a)), i.detach_nonwear && n.push(xl(i.detach_nonwear, a)), i.sadeh_ggir && n.push(xl(i.sadeh_ggir, a)), i.ck_ggir && n.push(xl(i.ck_ggir, a)), i.nonwear_choi_2011 && n.push(xl(i.nonwear_choi_2011, a)), i.lstm_sleep_wake && n.push(xl(i.lstm_sleep_wake, a));
			}
			return async function(e, t) {
				let n = t, a = 0;
				"undefined" != typeof CompressionStream && (n = await async function(e) {
					if ("undefined" == typeof CompressionStream) return e;
					const t = new Blob([new Uint8Array(e)]).stream().pipeThrough(new CompressionStream("gzip")), n = await new Response(t).arrayBuffer();
					return new Uint8Array(n);
				}(t), a |= 1);
				const r = new Uint8Array(e.length + 1 + n.length);
				return r.set(e, 0), r[e.length] = a, r.set(n, e.length + 1), r;
			}(Al, Ye(n));
		}(n);
		await r.write(e);
	} finally {
		await r.close();
	}
}
async function Nl(e, t) {
	if (!Ml()) return null;
	const n = Tl(t);
	let a, r;
	try {
		a = await Dl(!1);
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	try {
		r = await a.getFileHandle(Ol(e, n), { create: !1 });
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	const i = await r.getFile(), s = new Uint8Array(await i.arrayBuffer());
	try {
		return await async function(e) {
			const t = await Ze(Al, e), n = new DataView(t.buffer, t.byteOffset, t.byteLength), a = new TextDecoder();
			let r = 0;
			const i = n.getUint32(r, !0);
			r += 4;
			const s = /* @__PURE__ */ new Map();
			for (let o = 0; o < i; o++) {
				const e = n.getUint16(r, !0);
				r += 2;
				const i = n.getUint32(r, !0);
				r += 4;
				const o = n.getUint8(r);
				r += 1;
				const l = a.decode(t.subarray(r, r + e));
				r += e;
				const c = () => {
					const e = t.slice(r, r + i);
					return r += i, e;
				}, d = c(), u = c(), p = c(), m = c(), f = c(), _ = c(), y = 1 & o ? c() : null, g = 2 & o ? c() : null, h = 4 & o ? c() : null, w = 8 & o ? c() : null, b = 16 & o ? c() : null;
				s.set(l, {
					sadeh_actilife: d,
					sadeh_original: u,
					ck_actilife: p,
					ck_original: m,
					consensus_majority_vote: f,
					nonwear: _,
					detach_nonwear: y,
					sadeh_ggir: g,
					ck_ggir: h,
					nonwear_choi_2011: w,
					lstm_sleep_wake: b
				});
			}
			return s;
		}(s);
	} catch (o) {
		return console.warn("[opfs-scored] cache decode failed; deleting the corrupt entry:", o instanceof Error ? o.message : o), await a.removeEntry(Ol(e, n)).catch((e) => {
			console.warn("[opfs-scored] failed to delete the corrupt cache entry:", e instanceof Error ? e.message : e);
		}), null;
	}
}
function Fl(e) {
	const t = Date.parse(e.lastModifiedAt);
	return Number.isFinite(t) ? t : Number.NEGATIVE_INFINITY;
}
function Ll(e, t) {
	if (!e) return t;
	const n = Fl(e), a = Fl(t);
	return a !== n ? a > n ? t : e : (t.id ?? 0) > (e.id ?? 0) ? t : e;
}
function Pl(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.date), a = n.username === yt;
		e && "auto_score" !== e.username && a || t.set(n.date, "auto_score" !== e?.username || a ? Ll(e, n) : n);
	}
	return t;
}
function jl(e, t, n = !1) {
	const a = /* @__PURE__ */ new Map();
	for (const r of e) r.username !== t || n && !ue(r) || a.set(r.date, Ll(a.get(r.date), r));
	return a;
}
function Gl(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		let e = t.get(n.date);
		e || t.set(n.date, e = /* @__PURE__ */ new Map()), e.set(n.username, Ll(e.get(n.username), n));
	}
	return t;
}
function Hl(e) {
	const t = [];
	for (const n of e) if ("auto_score" !== n.username) for (const e of n.nonwearMarkers) null != e.startTimestamp && null != e.endTimestamp && t.push({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	});
	return t;
}
const $l = [];
function ql(e) {
	return e ? e instanceof ArrayBuffer ? new Float64Array(e, 0, Math.floor(e.byteLength / Float64Array.BYTES_PER_ELEMENT)) : e : $l;
}
const Bl = /* @__PURE__ */ new WeakMap();
function zl(e, t) {
	"number" == typeof t && t > 0 && Bl.set(e, t);
}
function Wl(e, t) {
	const n = (e?.epochResolutions?.find((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId))?.epochLengthSeconds ?? t?.epochLengthSeconds ?? void 0;
	return "number" == typeof n && n > 0 ? n : void 0;
}
const Vl = r("epoch_5s");
async function Ul(e, t, n) {
	return Wl(t.day, t.file) ?? await Jl(e, u, n);
}
function Kl(e) {
	return Wl(e.day, e.file) ?? u;
}
function Ql(e) {
	return Wl(void 0, e) ?? u;
}
async function Jl(e, t, n) {
	const a = ql(e), r = function(e) {
		return Bl.get(ql(e));
	}(a);
	return void 0 !== r ? r : a.length < 2 ? t : await (n ?? q()).medianGapSeconds(Float64Array.from(a)) ?? t;
}
function Xl(e) {
	if (!("diarySourceSha256" in e) || void 0 === e.diarySourceSha256) return {};
	if ("string" != typeof e.diarySourceSha256 || !/^[a-f0-9]{64}$/u.test(e.diarySourceSha256)) throw new Error("Diary source identity must be a SHA-256 digest.");
	return { diarySourceSha256: e.diarySourceSha256 };
}
function Yl(e) {
	return {
		...Xl(e),
		...void 0 === e.sourceKey ? {} : { sourceKey: e.sourceKey },
		fileId: e.fileId,
		analysisDate: e.analysisDate,
		timezone: e.timezone ?? null,
		entryTimezone: e.entryTimezone ?? null,
		...void 0 !== e.importMappingProvenance ? { importMappingProvenance: e.importMappingProvenance } : {},
		...void 0 !== e.temporalEvidence ? { temporalEvidence: e.temporalEvidence } : {},
		...void 0 !== e.customFields ? { customFields: e.customFields } : {},
		...void 0 !== e.mappedSourceValues ? { mappedSourceValues: e.mappedSourceValues } : {},
		...void 0 !== e.instrumentMappingProvenance ? { instrumentMappingProvenance: e.instrumentMappingProvenance } : {},
		...void 0 !== e.instrumentValues ? { instrumentValues: e.instrumentValues } : {},
		...void 0 !== e.replicationProfileIdentity ? { replicationProfileIdentity: e.replicationProfileIdentity } : {},
		...void 0 !== e.replicationProfileTransport ? { replicationProfileTransport: e.replicationProfileTransport } : {},
		...void 0 !== e.decisionOverlayJson ? { decisionOverlayJson: e.decisionOverlayJson } : {},
		diaryInBedTime: e.diaryInBedTime ?? null,
		diaryWakeTime: e.diaryWakeTime ?? null,
		diaryOnsetTime: e.diaryOnsetTime ?? null,
		diaryOutOfBedTime: e.diaryOutOfBedTime ?? null,
		sleepQuality: e.sleepQuality ?? null,
		inHomeDlmo: e.inHomeDlmo ?? null,
		timeToFallAsleepMinutes: e.timeToFallAsleepMinutes ?? null,
		numberOfAwakenings: e.numberOfAwakenings ?? null,
		notes: e.notes ?? null,
		...null != e.naps ? { naps: e.naps } : {},
		...null != e.nonwearWindows ? { nonwearWindows: e.nonwearWindows } : {},
		nap1Start: e.nap1Start ?? null,
		nap1End: e.nap1End ?? null,
		nap2Start: e.nap2Start ?? null,
		nap2End: e.nap2End ?? null,
		nap3Start: e.nap3Start ?? null,
		nap3End: e.nap3End ?? null,
		nonwear1Start: e.nonwear1Start ?? null,
		nonwear1End: e.nonwear1End ?? null,
		nonwear1Reason: e.nonwear1Reason ?? null,
		nonwear2Start: e.nonwear2Start ?? null,
		nonwear2End: e.nonwear2End ?? null,
		nonwear2Reason: e.nonwear2Reason ?? null,
		nonwear3Start: e.nonwear3Start ?? null,
		nonwear3End: e.nonwear3End ?? null,
		nonwear3Reason: e.nonwear3Reason ?? null
	};
}
async function Zl(e, t, n = Ae()) {
	const a = await n.diaryEntries.where("[fileId+analysisDate]").equals([e, t]).first();
	return a ? Yl(a) : null;
}
async function ec(e, t = Ae()) {
	return (await t.diaryEntries.where("fileId").equals(e).toArray()).map(Yl);
}
const tc = 12e4;
var nc = class extends Error {
	category = fa;
	constructor() {
		super("A completed import already uses this filename for different content. Rename the selected file and try again, or delete the completed import in Data Settings first."), this.name = "FileIngestFilenameConflictError";
	}
}, ac = class extends Error {
	category = fa;
	constructor() {
		super("A recording already in this workspace was offered again, changed. It was not imported, and nothing was overwritten: the file and its scoring are as they were. To use the changed recording, export your work first, then delete the file and import it again."), this.name = "FileIngestRecordingRevisedError";
	}
}, rc = class extends Error {
	category = ha;
	constructor() {
		super("This file is already being imported in another tab. Wait for that import to finish, then try again."), this.name = "FileIngestInProgressError";
	}
}, ic = class extends Error {
	category = ha;
	constructor() {
		super("This import no longer owns its incomplete local record. Retry the import."), this.name = "FileIngestOwnershipLostError";
	}
};
const sc = Object.keys(Kn), oc = sc.filter((e) => !Xn.has(e));
function lc(e) {
	return [e.files, ...sc.map((t) => e[t])];
}
async function cc(e, t, n = !1) {
	ul(t, e);
	const a = await async function(e, t) {
		const n = new El("file_cascade"), a = await e.diaryEntries.where("fileId").equals(t).toArray(), r = await e.diaryOccurrences.where("fileId").equals(t).toArray(), i = await e.stagedDiaryEntries.where("attachedFileId").equals(t).toArray();
		await e.diaryEntries.bulkDelete(a.map((e) => e.id)), await e.diaryOccurrences.bulkDelete(r.map((e) => e.recordSha256)), await e.stagedDiaryEntries.bulkDelete(i.map((e) => e.id));
		for (const s of a) n.row("diaryEntries", "deleted", {
			fileId: t,
			sourceKey: s.sourceKey ?? null,
			analysisDate: s.analysisDate,
			rowId: s.id
		});
		for (const s of r) n.row("diaryOccurrences", "deleted", {
			fileId: t,
			sourceKey: s.sourceKey,
			analysisDate: s.analysisDate
		});
		for (const s of i) n.row("stagedDiaryEntries", "deleted", {
			fileId: t,
			sourceKey: s.sourceKey,
			analysisDate: s.analysisDate,
			rowId: s.id
		});
		return {
			counts: {
				diaryEntries: a.length,
				diaryOccurrences: r.length,
				stagedDiaryEntries: i.length
			},
			receipt: n.build()
		};
	}(e, t), r = await Promise.all(oc.filter((e) => !n || "walLog" !== e).map(async (n) => {
		const a = Yn(e, n).where(Kn[n]).equals(t);
		if ("walLog" === n) return [n, await a.filter((e) => "audit_append" !== e.op).delete()];
		if ("markers" !== n) return [n, await a.delete()];
		const r = function(e) {
			return e.reduce((e, t) => e + (t.sleepMarkers?.length ?? 0) + (t.nonwearMarkers?.length ?? 0), 0);
		}(await e.markers.where("fileId").equals(t).toArray());
		return await a.delete(), [n, r];
	})), i = {
		...Object.fromEntries(r),
		...a.counts,
		files: 0
	};
	return i.ggirResultsBundles > 0 && await e.files.update(t, { ggirBundleRevision: crypto.randomUUID() }), i;
}
async function dc(e, t) {
	return {
		...await cc(e, t),
		files: await e.files.where(":id").equals(t).delete()
	};
}
async function uc(e, t, n = Ae(), a = Date.now()) {
	(function(e, t) {
		if (0 === e.length || 0 === t.length) throw new Error("Local ingest identity is invalid.");
	})(e.sourceContentHash, t), ee().catch(() => {});
	const r = n;
	return Ve([...lc(r), r.studySettings], async () => {
		const n = await r.files.where("sourceContentHash").equals(e.sourceContentHash).toArray(), i = n.find(pe);
		if (null != i?.id) return await Kc(i, r), {
			kind: "already_complete",
			record: i
		};
		const s = e.aw5RecordingKey ? await r.files.where("aw5RecordingKey").equals(e.aw5RecordingKey).toArray() : [];
		if (s.some(pe)) throw new ac();
		const o = await r.files.where("filename").equals(e.filename).first();
		if (o && pe(o)) throw new nc();
		const l = /* @__PURE__ */ new Map();
		for (const e of [
			...n,
			...s,
			...o ? [o] : []
		]) null != e.id && "incomplete" === e.ingestState && l.set(e.id, e);
		const c = [...l.values()].find((e) => e.ingestAttemptId === t);
		if (null != c?.id) return await r.files.update(c.id, { ingestLeaseExpiresAt: a + tc }), {
			kind: "started",
			guard: {
				fileId: c.id,
				attemptId: t
			},
			recovered: !1
		};
		if ([...l.values()].find((e) => (e.ingestLeaseExpiresAt ?? 0) > a)) throw new rc();
		for (const e of l.values()) null != e.id && (await Ke({
			op: "file_delete",
			fileId: e.id,
			payload: { kind: "incomplete_ingest_recovery" }
		}), await dc(r, e.id));
		const d = await r.files.add({
			...e,
			ingestState: "incomplete",
			ingestAttemptId: t,
			ingestLeaseExpiresAt: a + tc
		});
		return await Ke({
			op: "file_put",
			fileId: d,
			payload: { kind: "incomplete_ingest_begin" }
		}), {
			kind: "started",
			guard: {
				fileId: d,
				attemptId: t
			},
			recovered: l.size > 0
		};
	}, r);
}
async function pc(e, t = Ae(), n = Date.now()) {
	const a = t;
	await a.transaction("rw", a.files, async () => {
		const t = await a.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new ic();
		await a.files.update(e.fileId, { ingestLeaseExpiresAt: n + tc });
	});
}
async function mc(e, t = Ae(), n) {
	const a = t;
	return Ve([a.files, a.studySettings], async () => {
		const t = await a.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new ic();
		const r = e.fileId;
		return await a.files.where(":id").equals(r).modify((e) => {
			e.ingestState = "complete", delete e.ingestAttemptId, delete e.ingestLeaseExpiresAt;
		}), await Ke({
			op: "file_put",
			fileId: r,
			payload: { kind: "incomplete_ingest_finalize" }
		}), await Kc(t, a), await Hi([r], a, n), r;
	}, a, n);
}
async function fc(e, t = Ae()) {
	const n = t;
	return Ve(lc(n), async () => {
		const t = await n.files.get(e.fileId);
		return t ? "incomplete" === t.ingestState && t.ingestAttemptId === e.attemptId && (await Ke({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_rollback" }
		}), await dc(n, e.fileId), !0) : (a = await cc(n, e.fileId), Object.values(a).reduce((e, t) => e + t, 0) > 0 && (await Ke({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_orphan_cleanup" }
		}), !0));
		var a;
	}, n);
}
async function _c(e, t) {
	const n = [], a = await Jl(e.timestamps, null, t) ?? (e.timestamps.byteLength > 0 ? e.epochResolutions?.find((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId)?.epochLengthSeconds : null) ?? null;
	if (null !== a && new Float64Array(e.timestamps).length > 0 && n.push({
		resolutionId: `counts_${a}s`,
		epochLengthSeconds: a,
		category: "count_sleep_wake",
		sourceType: 60 === a ? "epochs_60s" : "actigraph_epoched_csv",
		derivedFromResolutionId: null,
		aggregationMethod: null,
		backingFields: "counts"
	}), null !== a && a > 0 && 60 !== a && 60 % a == 0) {
		const r = [
			{
				name: "axis_x",
				counts: e.axisX ? Array.from(new Float64Array(e.axisX)) : []
			},
			{
				name: "axis_y",
				counts: e.axisY ? Array.from(new Float64Array(e.axisY)) : []
			},
			{
				name: "axis_z",
				counts: e.axisZ ? Array.from(new Float64Array(e.axisZ)) : []
			},
			{
				name: "vector_magnitude",
				counts: e.vectorMagnitude ? Array.from(new Float64Array(e.vectorMagnitude)) : []
			}
		].filter(({ counts: e }) => e.length > 0), i = {
			timestamps_ms: Array.from(new Float64Array(e.timestamps), (e) => 1e3 * e),
			epoch_seconds: a,
			channels: r,
			light: [],
			light_channels: [],
			temperature: e.temperature ? Array.from(new Float64Array(e.temperature)) : [],
			off_wear: e.nonwearResults ? Array.from(new Uint8Array(e.nonwearResults), Boolean) : [],
			device: "browser",
			primary: "vector_magnitude"
		}, s = e.eventMarkers ? Array.from(new Uint8Array(e.eventMarkers), Boolean) : [], o = {}, l = await t.aggregateEpochSeries({
			target_seconds: 60,
			series: i,
			event_markers: s,
			sleep_scores: []
		}), c = i.timestamps_ms.length, d = l.series.timestamps_ms.length, u = {
			...i,
			channels: [],
			temperature: [],
			off_wear: []
		};
		for (const [n, a] of Io(e)) {
			const e = Array.from(new Uint8Array(a));
			e.length !== d || d === c ? o[n] = (await t.aggregateEpochSeries({
				target_seconds: 60,
				series: u,
				event_markers: [],
				sleep_scores: e
			})).sleep_scores : o[n] = e;
		}
		const p = (e) => l.series.channels.find((t) => t.name === e)?.counts ?? [];
		n.push({
			resolutionId: "counts_60s",
			epochLengthSeconds: 60,
			category: "count_sleep_wake",
			sourceType: "epochs_60s",
			derivedFromResolutionId: `counts_${String(a)}s`,
			aggregationMethod: "sum_counts",
			backingFields: "counts",
			derivedData: {
				data: {
					timestamps: l.series.timestamps_ms.map((e) => e / 1e3),
					axisX: p("axis_x"),
					axisY: p("axis_y"),
					axisZ: p("axis_z"),
					vectorMagnitude: p("vector_magnitude"),
					temperature: l.series.temperature,
					eventMarkers: l.event_markers.map(Number),
					lux: [],
					melanopicLux: [],
					ggirTimestamps: [],
					ggirEnmo: [],
					ggirAnglez: [],
					ggirSib: []
				},
				algorithmResults: o,
				nonwearResults: e.nonwearResults ? l.series.off_wear.map(Number) : null
			}
		});
	}
	return e.ggirTimestamps && new Float64Array(e.ggirTimestamps).length > 0 && n.push({
		resolutionId: "ggir_5s",
		epochLengthSeconds: 5,
		category: "ggir_sleep_period",
		sourceType: "epochs_5s_ggir",
		derivedFromResolutionId: null,
		aggregationMethod: "ggir_epoch_metrics",
		backingFields: "ggir"
	}), e.lstmTimestamps30s && new Float64Array(e.lstmTimestamps30s).length > 0 && n.push({
		resolutionId: "lstm_30s",
		epochLengthSeconds: 30,
		category: "lstm_sleep_wake",
		sourceType: null,
		derivedFromResolutionId: null,
		aggregationMethod: "model_window",
		backingFields: "lstm"
	}), n;
}
async function yc(t = Ae(), n) {
	let a = await (n?.participantKeys ? t.files.where(e).anyOf([...new Set(n.participantKeys.flatMap((e) => [Z(e), ...Ie({ filename: e })]))]).distinct().filter((e) => "local" === e.source) : n?.onlyFileIds ? t.files.where(":id").anyOf([...n.onlyFileIds]).filter((e) => "local" === e.source) : t.files.where("source").equals("local")).toArray();
	if (n?.participantKeys) {
		const e = [...new Set(a.map(Q).filter((e) => !n.participantKeys.includes(e)))];
		e.length && (a = [...a.filter((t) => !e.includes(Q(t))), ...await t.files.where(T).anyOf(e).filter((e) => "local" === e.source).toArray()]);
	}
	return (!0 === n?.includeIncomplete ? a : a.filter(pe)).map((e) => {
		const t = e.participantId ?? Oe(e.filename) ?? void 0;
		return {
			...e,
			availableDates: [...new Set(e.availableDates)],
			...void 0 === t ? {} : { participantId: t }
		};
	});
}
async function gc(e, t = Ae()) {
	return t.files.where("filename").equals(e).first();
}
async function hc(e, t = Ae()) {
	if (e) return (await t.files.where("sourceContentHash").equals(e).toArray()).find(pe);
}
async function wc(e, t = Ae(), n) {
	if (e) return (await t.files.where("fileHash").equals(e).toArray()).find((e) => pe(e) && (void 0 === n || e.sourceContentHash === n));
}
async function bc(e, t = Ae()) {
	return t.files.get(e);
}
async function vc(e, t, n = q()) {
	const a = await n.shiftDate(e, t);
	if (void 0 === a) throw new RangeError(`Not a calendar date: ${e}`);
	return a;
}
async function kc(e, t = Ae(), n) {
	const [a] = await Ic([e], t, void 0, n);
	return a;
}
async function Sc(e, t = q()) {
	let n = e.epochResolutions;
	if (n) {
		if (void 0 !== e.algorithmResults && n.some((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId && 60 !== e.epochLengthSeconds && 60 % e.epochLengthSeconds == 0)) {
			const a = await _c(e, t);
			n = [...n.filter((e) => !e.derivedData), ...a.filter((e) => e.derivedData)];
		}
	} else n = await _c(e, t);
	return {
		epochResolutions: n,
		previousDate: await vc(e.date, -1, t)
	};
}
async function Ic(e, t = Ae(), n, a) {
	const r = t, i = new Set(e.map((e) => e.fileId));
	for (const d of i) ul(d, r);
	const s = be(a), o = n ?? await Promise.all(e.map((e) => Sc(e, s))), l = await Promise.all(e.map(async (e, t) => {
		const { displayNonwear: n, ...a } = e;
		let r = o[t].epochResolutions;
		if (r.some((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId && 60 !== e.epochLengthSeconds && 60 % e.epochLengthSeconds == 0) && !function(e, t) {
			const n = t.find((e) => "counts_60s" === e.resolutionId)?.derivedData, a = n?.data.timestamps.length ?? 0;
			return !(!n || 0 === a) && [
				"axisX",
				"axisY",
				"axisZ",
				"vectorMagnitude",
				"temperature",
				"eventMarkers"
			].every((t) => !e[t]?.byteLength || n.data[t].length === a) && Io(e).every(([e, t]) => {
				if (!t.byteLength) return !0;
				const r = _o([{ algorithmResults: n.algorithmResults }], { recordedCellId: e });
				return "ok" === r.status && r.outputs[0]?.length === a;
			}) && (!e.nonwearResults?.byteLength || n.nonwearResults?.length === a);
		}(e, r)) {
			const t = await _c(e, s);
			r = [...r.filter((e) => "counts_60s" !== e.resolutionId), ...t.filter((e) => e.derivedData)];
		}
		return {
			activityDay: {
				...a,
				epochResolutions: r
			},
			previousDate: o[t].previousDate
		};
	})), c = await te(r, [
		r.activityDays,
		r.scoredVariantMasks,
		r.files
	], async () => {
		await Dc(r, [...i]);
		const e = [];
		for (const { activityDay: t, previousDate: n } of l) await r.scoredVariantMasks.bulkDelete([[t.fileId, t.date], [t.fileId, n]]), await r.activityDays.where("[fileId+date]").equals([t.fileId, t.date]).delete(), e.push(await r.activityDays.add(t));
		return e;
	}, a);
	for (const d of i) ul(d, r);
	return c;
}
async function Ec(e, t, n, a = Ae(), r) {
	await ie(a, [a.files], () => a.files.where(":id").equals(e).modify((e) => {
		const a = new Set(e.circadianSignalDates ?? []);
		for (const n of t) a.delete(n);
		for (const t of n) a.add(t);
		e.circadianSignalDates = [...a].sort();
	}), r);
}
async function Ac(e, t, n, a = Ae(), r) {
	const i = a;
	await te(i, [
		i.activityDays,
		i.physicalActivityFileSummaries,
		i.files
	], async () => {
		await i.activityDays.where("[fileId+date]").equals([e, t]).modify((e) => {
			Object.assign(e, n), delete e.displayNonwear;
		}), await i.physicalActivityFileSummaries.where("fileId").equals(e).delete(), await Oc(i, [e]), await i.files.where(":id").equals(e).modify((e) => {
			e.nonwearBandGeneration = (e.nonwearBandGeneration ?? 0) + 1, e.navigationFacts && delete e.navigationFacts.bands;
		});
	}, r);
}
async function Tc(e, t, n = Ae(), a, r = be(a)) {
	const i = n, s = [...t.keys()], o = await j.waitFor(Promise.all(s.map((e) => vc(e, -1, r))));
	ul(e, i), await te(i, [
		i.activityDays,
		i.scoredVariantMasks,
		i.files
	], async () => {
		for (const [n, a] of s.entries()) {
			const r = t.get(a), s = new Set(Object.entries(r).flatMap(([e, t]) => void 0 === t ? [e] : []));
			await i.activityDays.where("[fileId+date]").equals([e, a]).modify((e, t) => {
				t.value = Object.fromEntries(Object.entries({
					...e,
					...r
				}).filter(([e]) => !s.has(e)));
			}), await i.scoredVariantMasks.bulkDelete([[e, a], [e, o[n]]]);
		}
		await Dc(i, [e]);
	}, a), ul(e, i);
}
async function Rc(e, t, n, a, r = Ae(), i) {
	const s = r;
	await s.transaction("rw", s.files, s.activityDays, async () => {
		const r = await s.files.get(e);
		r && (r.seriesRevision ?? 0) === a.seriesRevision && (r.nonwearBandGeneration ?? 0) === a.nonwearBandGeneration && (i?.throwIfAborted(), await s.activityDays.where("[fileId+date]").equals([e, t]).modify({ displayNonwear: n }));
	});
}
async function Dc(e, t) {
	await e.files.where(":id").anyOf(t).modify((e) => {
		e.seriesRevision = (e.seriesRevision ?? 0) + 1;
	});
}
async function Oc(e, t) {
	await e.files.where(":id").anyOf(t).modify((e) => {
		e.exportInputRevision = (e.exportInputRevision ?? 0) + 1;
	});
}
async function Mc(e, t, n = Ae(), a) {
	return a ? (await Wc(e, n, a)).get(t) : n.activityDays.where("[fileId+date]").equals([e, t]).first();
}
const xc = /* @__PURE__ */ new WeakMap();
function Cc(e, t = Ae(), n) {
	const a = t;
	return (n ? Promise.resolve(n.file) : a.files.get(e)).then((t) => {
		const n = t?.seriesRevision ?? 0;
		let r = xc.get(a);
		r || xc.set(a, r = /* @__PURE__ */ new Map());
		const i = r.get(e);
		if (i?.revision === n) return i.verdicts;
		const s = [], o = Ee(a.activityDays.where("fileId").equals(e), (e) => {
			s.push(yo(e));
		}).then(() => ko(s)), l = {
			revision: n,
			verdicts: o
		};
		return r.set(e, l), o.catch(() => {
			r.get(e) === l && r.delete(e);
		}), o;
	});
}
async function Nc(e, t, n, a, r = Ae(), i, s) {
	const o = r, l = await z(async function(e, t = q()) {
		const n = vc(e, 1, t);
		return j.currentTransaction ? j.waitFor(n) : n;
	}(t, i), s);
	return s?.throwIfAborted(), !!await async function(e, t, n, a = Ae()) {
		return (await Promise.all([t, n].map((t) => a.activityDays.where("[fileId+date]").equals([e, t]).count()))).some((e) => e > 0);
	}(e, t, l, o) && ie(o, [o.scoredVariantMasks], async () => {
		const r = await o.scoredVariantMasks.get([e, t]), i = void 0 !== a && null != r && r.diaryFingerprint !== a && (null != r.diaryFingerprint || a.startsWith("guider-v2:") || a.startsWith("warm-v3:"));
		return !(i || 0 !== Object.keys(n).length || void 0 !== a && null == r?.diaryFingerprint) || (await o.scoredVariantMasks.put({
			fileId: e,
			date: t,
			masks: i ? { ...n } : {
				...r?.masks,
				...n
			},
			...void 0 !== r?.diaryFingerprint ? { diaryFingerprint: r.diaryFingerprint } : {},
			...void 0 !== a ? { diaryFingerprint: a } : {}
		}), !0);
	}, s);
}
async function Fc(e, t = Ae()) {
	return (await t.activityDays.where("[fileId+date]").between([e, ""], [e, "￿"], !0, !0).keys()).map((e) => e[1]);
}
function Lc(e, t = !1) {
	const n = t ? e?.filter(ue) : void 0;
	let a;
	for (const r of n?.length ? n : e ?? []) a = Ll(a, r);
	return a;
}
async function Pc(e, t = Ae()) {
	return t.markerProvenance.bulkGet([...e]);
}
async function jc(e, t, n = Ae(), a = !1) {
	return jl(await Gc(e, t, n), t, a);
}
async function Gc(e, t, n) {
	const a = n.markers.where("[fileId+date+username]"), r = await a.between([e, j.minKey], [e, j.maxKey]).uniqueKeys();
	return (await a.anyOf(r.filter((e) => e[2] === t)).toArray()).map(hi);
}
async function Hc(e, t = Ae()) {
	return (await t.markers.where("fileId").equals(e).toArray()).map(hi);
}
async function $c(e, t = Ae()) {
	return Hl(await Hc(e, t));
}
async function qc(e, t = Ae(), n) {
	const [a, r] = await Promise.all([Xc(e, t), n ? Hl(n) : $c(e, t)]);
	return [...a.map((e) => ({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	})), ...r];
}
async function Bc(e, t, n = Ae()) {
	return function(e, t) {
		const n = /* @__PURE__ */ new Map();
		for (const a of e) {
			if (a.username !== t) continue;
			const e = n.get(a.date);
			e ? e.push(a) : n.set(a.date, [a]);
		}
		return n;
	}(await Gc(e, t, n), t);
}
function zc(e) {
	return e({});
}
function Wc(e, t = Ae(), n) {
	return t.transaction("r", n ? [t.files, t.activityDays] : [t.activityDays], async () => {
		const a = n ? await t.files.get(e) : void 0, r = a ? a.seriesRevision ?? 0 : null;
		if (n?.days && n.db === t && n.fileId === e && n.revision === r) return n.days;
		const i = await t.activityDays.where("fileId").equals(e).primaryKeys(), s = await t.activityDays.bulkGet(i), o = /* @__PURE__ */ new Map();
		for (const e of s) e && o.set(e.date, e);
		return n && Object.assign(n, {
			db: t,
			fileId: e,
			revision: r,
			days: o
		}), o;
	});
}
var Vc = class extends Error {
	category = _a;
	constructor() {
		super("Stored GGIR import refusals could not be read; the existing records were kept."), this.name = "GgirImportRefusalsStorageError";
	}
};
function Uc(e) {
	if (!e || "object" != typeof e || !("ggirImportRefusals" in e)) return [];
	const t = e[ma];
	if (Array.isArray(t)) {
		const e = t.filter((e) => null != e && "object" == typeof e && "filename" in e && "string" == typeof e.filename && "reason" in e && "string" == typeof e.reason && "category" in e && Sa.includes(e.category));
		if (e.length === t.length) return [...new Map(e.map((e) => {
			const t = "ggir-folder" === e.category ? {
				...e,
				filename: ya
			} : e;
			return [JSON.stringify([t.filename, t.category]), t];
		})).values()];
	}
	throw new Vc();
}
function Kc(e, t) {
	return async function(e, t = Ae(), n) {
		(e.length || void 0 !== n) && await async function(e, t, n) {
			await Ve([t.studySettings], async () => {
				const a = await t.studySettings.where("key").equals("study").first();
				if (void 0 !== n.importedFilenames && !Uc(a).some((e) => n.importedFilenames?.includes(e.filename))) return;
				const r = "existing" === n.coreSettings && a ? {
					sleepDetectionRule: a.sleepDetectionRule,
					nightStartHour: a.nightStartHour,
					nightEndHour: a.nightEndHour,
					defaultAlgorithm: a.defaultAlgorithm,
					...void 0 === a.sleepPeriodDetection ? {} : { sleepPeriodDetection: a.sleepPeriodDetection }
				} : e, { [A]: i, ...s } = a?.extraSettings ?? {}, o = {
					...r,
					sleepDetectionRule: (d = r.sleepDetectionRule, Object.values(x).includes(d) ? d : f.sleep_detection_rule),
					extraSettings: "merge" === n.extraSettings ? {
						...s,
						...e.extraSettings
					} : e.extraSettings
				}, l = await j.waitFor(Be(JSON.stringify(o))), c = {
					key: "study",
					...o,
					...n.refusals ? { [ma]: Uc({ [ma]: [...Uc(a), ...n.refusals] }).filter((e) => !n.importedFilenames?.includes(e.filename)) } : {},
					contentHash: l,
					lastModifiedAt: a?.contentHash === l ? a.lastModifiedAt : a || "existing" !== n.coreSettings ? (/* @__PURE__ */ new Date()).toISOString() : (/* @__PURE__ */ new Date(0)).toISOString()
				};
				var d;
				await Ke({
					op: "settings_put",
					payload: {
						settings: o,
						contentHash: l,
						prevContentHash: a?.contentHash,
						...n.refusals ? { [ma]: Uc(c) } : {},
						lastModifiedAt: c.lastModifiedAt
					}
				}), await async function(e, t, n) {
					t?.id ? await e.studySettings.update(t.id, n) : await e.studySettings.add(n);
				}(t, a, c);
			}, t);
		}({
			sleepDetectionRule: f.sleep_detection_rule,
			nightStartHour: f.night_start_hour,
			nightEndHour: f.night_end_hour,
			defaultAlgorithm: f.default_algorithm,
			extraSettings: {}
		}, t, {
			coreSettings: "existing",
			extraSettings: "merge",
			refusals: e,
			...void 0 === n ? {} : { importedFilenames: n }
		});
	}([], t, "string" == typeof e ? [e] : [e.filename, ...En(e) ? [ya] : []]);
}
async function Qc(e = Ae()) {
	return e.studySettings.where("key").equals("study").first();
}
async function Jc(e, t, n = Ae(), a) {
	if (!t.size) return;
	const r = [...t];
	await Ve([n.sensorNonwear], async () => {
		await Ue(r.map(([t, n]) => ({
			op: "sensor_nonwear_put",
			fileId: e,
			payload: {
				analysisDate: t,
				periods: n
			}
		}))), await async function(e, t, n) {
			await e.sensorNonwear.where("[fileId+analysisDate]").anyOf(n.map(([e]) => [t, e])).delete(), await e.sensorNonwear.bulkAdd(n.flatMap(([e, n]) => n.map((n, a) => ({
				...n,
				fileId: t,
				analysisDate: e,
				periodIndex: a
			}))));
		}(n, e, r);
	}, n, a);
}
async function Xc(e, t = Ae()) {
	return t.sensorNonwear.where("fileId").equals(e).toArray();
}
async function Yc(e, t, n, a = Ae()) {
	return (await Xc(e, a)).filter((e) => e.startTimestamp <= n && e.endTimestamp >= t).sort((e, t) => e.startTimestamp - t.startTimestamp);
}
function Zc(e) {
	const t = {
		fileId: e.fileId,
		date: e.date,
		appVersion: e.appVersion,
		results: e.results,
		...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {}
	}, n = To(e);
	if (null !== n) return {
		...t,
		...n
	};
	throw new Error(`Refused an algorithm run for ${String(e.algoKey ?? e.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
}
async function ed(e, t = Ae(), n) {
	return await async function(e, t, n) {
		const a = t, r = await j.waitFor(i(e.results));
		return Ve([a.algorithmRuns], async () => {
			const t = await a.algorithmRuns.where("[fileId+date+algoKey+algoVersion+paramsHash]").equals([
				e.fileId,
				e.date,
				e.algoKey,
				e.algoVersion,
				e.paramsHash
			]).first();
			if (t?.id) return await Ke({
				op: "algorithm_run_put",
				fileId: e.fileId,
				payload: {
					kind: "dedup_hit",
					existingId: t.id,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					contentHash: r
				}
			}), {
				id: t.id,
				inserted: !1,
				contentHash: r
			};
			const n = {
				fileId: e.fileId,
				date: e.date,
				algoKey: e.algoKey,
				algoVersion: e.algoVersion,
				paramsHash: e.paramsHash,
				appVersion: e.appVersion,
				...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {},
				results: e.results,
				contentHash: r,
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			}, i = await a.algorithmRuns.add(n);
			return await Ke({
				op: "algorithm_run_put",
				fileId: e.fileId,
				payload: {
					kind: "insert",
					id: i,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					appVersion: e.appVersion,
					contentHash: r,
					byteLength: e.results.byteLength
				}
			}), {
				id: i,
				inserted: !0,
				contentHash: r
			};
		}, a, n);
	}(Zc(e), t, n);
}
async function td(e, t, n) {
	return await async function(e, t, n) {
		if (0 === e.length) return [];
		const a = t ?? Ae(), r = Promise.all(e.map((e) => i(e.results))), s = await (j.currentTransaction ? j.waitFor(r) : r);
		return Ve([a.algorithmRuns], async () => {
			const t = (e) => [
				e.fileId,
				e.date,
				e.algoKey,
				e.algoVersion,
				e.paramsHash
			], n = /* @__PURE__ */ new Map(), r = await a.algorithmRuns.where("[fileId+date+algoKey+algoVersion+paramsHash]").anyOf(e.map(t)).toArray();
			for (const e of r) {
				const a = JSON.stringify(t(e));
				null == e.id || n.has(a) || n.set(a, e.id);
			}
			const i = /* @__PURE__ */ new Map(), o = e.map((e, a) => {
				const r = JSON.stringify(t(e)), s = n.get(r);
				if (void 0 !== s) return { existingId: s };
				const o = i.get(r);
				return void 0 !== o ? { sameAs: o } : (i.set(r, a), { insert: !0 });
			}), l = (/* @__PURE__ */ new Date()).toISOString(), c = e.flatMap((e, t) => "insert" in o[t] ? [{
				fileId: e.fileId,
				date: e.date,
				algoKey: e.algoKey,
				algoVersion: e.algoVersion,
				paramsHash: e.paramsHash,
				appVersion: e.appVersion,
				...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {},
				results: e.results,
				contentHash: s[t],
				createdAt: e.createdAt ?? l
			}] : []), d = await a.algorithmRuns.bulkAdd(c, { allKeys: !0 }), u = /* @__PURE__ */ new Map();
			let p = 0;
			o.forEach((e, t) => {
				"insert" in e && u.set(t, d[p++]);
			});
			const m = o.map((e, t) => "insert" in e ? {
				id: u.get(t),
				inserted: !0,
				contentHash: s[t]
			} : {
				id: "existingId" in e ? e.existingId : u.get(e.sameAs),
				inserted: !1,
				contentHash: s[t]
			});
			return await Ue(e.map((e, t) => ({
				op: "algorithm_run_put",
				fileId: e.fileId,
				payload: m[t].inserted ? {
					kind: "insert",
					id: m[t].id,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					appVersion: e.appVersion,
					contentHash: s[t],
					byteLength: e.results.byteLength
				} : {
					kind: "dedup_hit",
					existingId: m[t].id,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					contentHash: s[t]
				}
			}))), m;
		}, a, n);
	}(e.map(Zc), t, n);
}
async function nd(e, t, n, a = Ae()) {
	const r = a.auditLog;
	return n ? r.where("[fileId+analysisDate+username]").equals([
		e,
		t,
		n
	]).sortBy("id") : r.where("[fileId+analysisDate+username]").between([
		e,
		t,
		""
	], [
		e,
		t,
		"￿"
	], !0, !0).sortBy("id");
}
function ad(e, t, n) {
	return 0 === e.fileId && e.payload?.openFileId === t && e.payload?.openAnalysisDate === n;
}
async function rd(e, t, n = Ae()) {
	return (await n.auditLog.where("[fileId+analysisDate+username]").between([
		0,
		"",
		""
	], [
		0,
		"￿",
		"￿"
	], !0, !0).toArray()).filter((n) => ad(n, e, t)).sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
}
async function id() {
	return Ae().auditLog.orderBy("id").toArray();
}
async function sd(e, t = Ae()) {
	return t.dailyGgirSummaries.where("[fileId+analysisDate]").between([e, ""], [e, "￿"]).toArray();
}
async function od(e, t) {
	const n = await Ae().dailyGgirSummaries.where("[fileId+analysisDate]").equals([e, t]).first();
	return n ? [n] : [];
}
async function ld(e, t = Ae(), n) {
	const a = t, r = a.dailyGgirSummaries, i = Array.isArray(e) ? e : [e];
	0 !== i.length && await te(a, [r, a.files], () => async function(e, t) {
		const n = e.dailyGgirSummaries, a = /* @__PURE__ */ new Map();
		for (const i of t) a.set(`${i.fileId}::${i.analysisDate}`, i);
		const r = await Promise.all([...a.values()].map(async (e) => {
			const t = await n.where("[fileId+analysisDate]").equals([e.fileId, e.analysisDate]).first();
			return null != t?.id ? {
				...e,
				id: t.id
			} : e;
		}));
		await n.bulkPut(r), await Oc(e, [...new Set(t.map((e) => e.fileId))]);
	}(a, i), n);
}
export { Ql as $, Ar as $n, _t as $r, Ys as $t, Yc as A, Ki as An, Sn as Ar, jo as At, ed as B, Ii as Bn, Ft as Br, Ao as Bt, Hc as C, ts as Cn, zn as Cr, rl as Ct, Qc as D, Yi as Dn, Rn as Dr, Qo as Dt, yc as E, Zi as En, Tn as Er, Wo as Et, Nc as F, Ci as Fn, Pt as Fr, xo as Ft, Ic as G, bi as Gn, tt as Gr, Eo as Gt, pc as H, yi as Hn, en as Hr, ho as Ht, Tc as I, Mi as In, Ot as Ir, Co as It, zc as J, fi as Jn, lt as Jr, no as Jt, Jc as K, wi as Kn, at as Kr, lo as Kt, Ac as L, Ai as Ln, Ct as Lr, Ro as Lt, ad as M, Hi as Mn, kn as Mr, Po as Mt, sd as N, Ni as Nn, Et as Nr, Lo as Nt, Pc as O, Ji as On, An as Or, No as Ot, Ec as P, Ti as Pn, St as Pr, Go as Pt, Ul as Q, Gr as Qn, pt as Qr, po as Qt, Lc as R, Ri as Rn, xt as Rr, To as Rt, bc as S, as as Sn, Vn as Sr, sl as St, Uc as T, ns as Tn, Dn as Tr, Uo as Tt, fc as U, ki as Un, yt as Ur, ko as Ut, td as V, _i as Vn, Nt as Vr, So as Vt, kc as W, vi as Wn, et as Wr, go as Wt, Zl as X, mi as Xn, dt as Xr, Vs as Xt, ec as Y, pi as Yn, ct as Yr, Zs as Yt, Vl as Z, di as Zn, ut as Zr, ao as Zt, Fc as _, Is as _n, Ea as _r, hl as _t, uc as a, so as an, Ha as ar, jl as at, qc as b, Ts as bn, Bn as br, fl as bt, mc as c, zs as cn, Za as cr, Nl as ct, Mc as d, Gs as dn, fa as dr, bl as dt, ft as ei, $s as en, Sr as er, Jl as et, Wc as f, fs as fn, Aa as fr, Sl as ft, nd as g, gs as gn, Ra as gr, ll as gt, jc as h, ds as hn, Ia as hr, ol as ht, Sc as i, Us as in, nr as ir, Pl as it, rd as j, Vi as jn, In as jr, Ho as jt, Xc as k, Qi as kn, En as kr, Fo as kt, hc as l, js as ln, Ga as lr, Cl as lt, Bc as m, ys as mn, Da as mr, gl as mt, nc as n, Bs as nn, wr as nr, Wl as nt, Oc as o, io as on, Ka as or, Gl as ot, id as p, hs as pn, ma as pr, vl as pt, Rc as q, hi as qn, ot as qr, oo as qt, ic as r, qs as rn, tr as rr, Kl as rt, Kc as s, Ws as sn, Wa as sr, Ll as st, tc as t, Ye as ti, to as tn, Er as tr, zl as tt, wc as u, Hs as un, ja as ur, kl as ut, $c as v, us as vn, Yn as vr, pl as vt, Cc as w, es as wn, Wn as wr, Ko as wt, gc as x, cs as xn, jn as xr, _l as xt, od as y, Rs as yn, Jn as yr, cl as yt, ld as z, Ei as zn, Mt as zr, vo as zt };
