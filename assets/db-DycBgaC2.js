import { $n as e, $t as t, An as a, At as n, B as r, Bn as i, Br as s, Bt as o, Cr as l, Ct as c, Dn as d, Dr as u, Er as p, Et as m, Fr as f, Gn as _, Gr as y, Gt as g, Hr as h, Ht as w, Ir as b, It as v, J as k, Jt as S, Kt as I, Lr as E, Lt as A, N as T, On as R, Pr as D, Q as O, Qn as M, Qt as x, Rn as C, Rt as N, Sr as F, Tr as L, Tt as P, Ut as j, V as G, Vt as H, Wt as $, X as q, Xn as z, Yt as B, Z as W, Zn as V, Zt as U, _ as K, _n as Q, an as J, ar as X, at as Y, br as Z, c as ee, cn as te, d as ae, en as ne, er as re, et as ie, f as se, gn as oe, h as le, hn as ce, in as ue, ir as pe, kn as me, kt as fe, l as _e, ln as ye, m as ge, mn as he, mr as we, mt as be, n as ve, nn as ke, on as Se, or as Ie, ot as Ee, p as Ae, pn as Te, qt as Re, rt as De, sn as Oe, sr as Me, st as xe, tn as Ce, tr as Ne, u as Fe, un as Le, vn as Pe, vr as je, wr as Ge, wt as He, yn as $e, z as qe, zn as ze, zr as Be, zt as We } from "./background-jobs-BxZgJi0P.js";
import { i as Ve, n as Ue, t as Ke } from "./wal-DLx4hxas.js";
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
	const a = new Uint8Array(t);
	let n = 0;
	for (const r of e) a.set(r, n), n += r.length;
	return a;
}
async function Ze(e, t) {
	if (!function(e, t) {
		if (t.length < e.length + 1) return !1;
		for (let a = 0; a < e.length; a++) if (t[a] !== e[a]) return !1;
		return !0;
	}(e, t)) throw new Error("opfs-codec: unrecognised cache frame (wrong magic)");
	const a = t[e.length] ?? 0, n = t.subarray(e.length + 1);
	return 1 & a ? async function(e, t = 536870912, a) {
		const n = [];
		let r = 0;
		for await (const o of async function* (e, t, a) {
			a?.throwIfAborted();
			const n = e instanceof Uint8Array ? new Blob([e]) : e, r = new Uint8Array(await n.slice(0, Xe.length).arrayBuffer());
			a?.throwIfAborted();
			let i = n.stream();
			if ((s = r).length >= 2 && s[0] === Xe[0] && s[1] === Xe[1]) {
				if ("undefined" == typeof DecompressionStream) throw new Error("gzip payload received but DecompressionStream is unavailable in this environment");
				i = i.pipeThrough(new DecompressionStream("gzip"));
			}
			var s;
			const o = i.getReader(), l = () => {
				o.cancel(a?.reason).catch(() => {});
			};
			a?.addEventListener("abort", l, { once: !0 });
			let c = 0, d = !1;
			try {
				for (;;) {
					const { value: e, done: n } = await o.read();
					if (a?.throwIfAborted(), n) return void (d = !0);
					if (c += e.byteLength, c > t) throw new Je("expanded");
					yield e;
				}
			} finally {
				a?.removeEventListener("abort", l), d || a?.aborted || o.cancel().catch(() => {}), o.releaseLock();
			}
		}(e, t, a)) n.push(o), r += o.byteLength;
		if (1 === n.length) return n[0];
		const i = new Uint8Array(r);
		let s = 0;
		for (const o of n) i.set(o, s), s += o.byteLength;
		return i;
	}(n) : n.slice();
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
}, at = {
	configured_scoring: "configured_scoring",
	actiware: "actiware"
}, nt = {
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
	const t = e, a = (n = t.id, null === oe(n) ? null : n);
	var n;
	if (null === a) return null;
	const r = Object.fromEntries(Object.entries(t).filter(([e]) => !ue.excludedFieldNames.includes(e)));
	return {
		cellId: a,
		implementationVersion: t.implementationVersion,
		configHash: ea(r)
	};
}
const vt = new Map(d.map((e) => [e.id, e.conformance]));
function kt(e) {
	return vt.get(e) ?? "conformant";
}
const St = function() {
	const e = /* @__PURE__ */ new Map();
	for (const t of d) {
		if ("sleep_wake" !== t.kind) continue;
		if (!S.includes(t.requiredSignal)) continue;
		if (Ce.includes(t.execution)) continue;
		const a = t.family, n = e.get(a);
		if (n) {
			if (n.conformance !== t.conformance) throw new Error(`count scorer family ${a} has conflicting conformance across variants: ${n.conformance} vs ${t.conformance}`);
		} else {
			const n = Se[a];
			if (void 0 === n) throw new Error(`count scorer ${t.id} lacks a generated planner label`);
			e.set(a, {
				slug: a,
				algorithm: n.algorithmValue,
				label: n.label,
				conformance: t.conformance
			});
		}
	}
	return Array.from(e.values());
}(), It = function() {
	const e = new Map(St.map((e) => [e.slug, e])), t = [];
	for (const a of I) {
		const n = e.get(a.methodFamilyId);
		if (!n) throw new Error(`generated provenance contract references absent count family ${a.methodFamilyId}`);
		t.push({
			slug: n.slug,
			algorithm: n.algorithm,
			label: n.label,
			conformance: n.conformance,
			primitive: a.primitiveId,
			implementation: a.implementationVariantId,
			implementationLabel: a.label,
			scoringParameters: a.parameters
		});
	}
	return t;
}(), Et = w, At = x, Tt = t, Rt = Object.fromEntries(ne.map((e) => [e, 0])), Dt = Object.fromEntries(he.map((e) => [e.value, 0])), Ot = ce;
function Mt(e, t) {
	const a = d.filter((a) => "sleep_wake" === a.kind && a.family === e && (void 0 === t || a.implementation === t)).map((e) => e.supportedEpochSeconds);
	return 0 === a.length ? [] : a.reduce((e, t) => e.filter((e) => t.includes(e)));
}
function xt(e, t) {
	return e.some((e) => e === t || e < t && t % e === 0);
}
function Ct(e) {
	const t = d.find((t) => t.id === e);
	return t && (S.includes(t.requiredSignal) || "epoch_scores" === t.requiredSignal) ? t.supportedEpochSeconds : void 0;
}
function Nt(e, t) {
	return t >= He || xt(e, t) ? t : He;
}
function Ft(e) {
	const t = Object.entries(Se).find(([, t]) => t.algorithmValue === e)?.[0];
	return void 0 === t ? [] : Mt(t, "hasib");
}
function Lt(e, t, a) {
	const { configs: n, skipped: r } = e, { label: i, supported: s } = t;
	xt(s, a.epochSeconds) ? n.push(a) : r.push({
		id: a.id,
		reason: Xt("unsupported_epoch_reason", {
			cell_label: a.label,
			method_label: i,
			supported_epochs: s.join(", ")
		})
	});
}
function Pt(e = {}) {
	const t = new Set(e.includeFamilies ?? ne), a = e.epochSeconds ?? At, n = new Set(e.excludeHasibAlgorithms ?? []), r = e.implementationVersion ?? Tt, i = [], s = [];
	if (t.has("count_hasib")) {
		for (const e of St) {
			if (n.has(e.slug)) {
				i.push({
					id: Q("count_skip_entry", { method_family: e.slug }),
					reason: Xt("skipped_method_reason", { algorithm_value: e.algorithm })
				});
				continue;
			}
			const t = Mt(e.slug);
			for (const n of Object.keys(Et)) for (const o of Et[n]) for (const l of a) Lt({
				configs: s,
				skipped: i
			}, {
				label: e.label,
				supported: t
			}, zt({
				family: e,
				countFamily: n,
				axis: o,
				epochSeconds: l,
				implementationVersion: r
			}));
		}
		for (const e of It) {
			if (n.has(e.slug)) continue;
			const t = Mt(e.slug, e.implementation), o = `${e.label} ${e.implementationLabel}`;
			for (const n of Object.keys(Et)) for (const l of Et[n]) for (const c of a) Lt({
				configs: s,
				skipped: i
			}, {
				label: o,
				supported: t
			}, Bt({
				variant: e,
				countFamily: n,
				axis: l,
				epochSeconds: c,
				implementationVersion: r
			}));
		}
	}
	for (const l of Object.keys(ke)) t.has(l) && s.push(Wt(l, r));
	if (t.has("lstm")) for (const l of e.lstmModels ?? []) s.push(...Vt(l, r));
	(e.includeConsensus ?? !0) && t.has("consensus") && s.push(...function(e, t) {
		const a = [], n = Array.from(new Set(e.filter((e) => Ut(e)).filter((e) => At.includes(e.epochSeconds)).map((e) => e.epochSeconds))).sort((e, t) => e - t);
		for (const r of n) {
			const n = `${String(r)}s`, i = e.filter((e) => Ut(e) && e.epochSeconds === r);
			if (i.length <= 1) continue;
			const { slug: s, label: o } = Kt(i);
			for (const e of U) a.push(qt({
				id: Q("consensus_cell", {
					scope: s,
					strategy: e,
					epoch_seconds: r
				}),
				label: Xt("consensus_cell_label", {
					scope_label: o,
					strategy_label: N[e] ?? e,
					suffix: n
				}),
				strategy: e,
				members: i,
				epochSeconds: r,
				implementationVersion: t
			}));
		}
		return a;
	}(s, r));
	const o = function(e) {
		const t = /* @__PURE__ */ new Map(), a = [];
		for (const n of e) {
			const e = t.get(n.id);
			if (e !== n.configHash) {
				if (void 0 !== e) throw new Error(`cube plan holds ${n.id} under two configs (${e}, ${n.configHash})`);
				t.set(n.id, n.configHash), a.push(n);
			}
		}
		return a;
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
	const t = { ...Rt }, a = { ...Dt };
	for (const n of e.configs) t[n.family] += 1, a[n.validationStatus] += 1;
	return {
		total: e.configs.length,
		byFamily: t,
		byValidationStatus: a,
		skipped: e.skipped.length
	};
}
function qt(e) {
	const t = e.implementationVersion ?? Tt, a = e.members.map((e) => e.id), n = [...e.members].sort((e, t) => e.id < t.id ? -1 : e.id > t.id ? 1 : 0).map((e) => e.configHash);
	return {
		...Qt({
			id: e.id,
			family: v,
			label: e.label,
			algorithm: `consensus:${e.strategy}`,
			outputKind: A,
			epochSeconds: e.epochSeconds,
			input: {
				family: "algorithm_outputs",
				epochSeconds: e.epochSeconds,
				seriesKey: a.join(",")
			},
			parameters: {
				strategy: e.strategy,
				inputConfigIds: a,
				inputConfigHashes: n,
				inputCount: a.length
			},
			implementationVersion: t,
			validationStatus: We,
			defaultIncluded: !0,
			exploratory: !0,
			lineage: a
		}),
		conformance: kt("consensus_majority_vote")
	};
}
function zt(e) {
	const t = Ot(e.countFamily, e.axis, e.epochSeconds), a = Pe(e.family.slug, e.countFamily, e.axis, e.epochSeconds) ? H : o;
	return {
		...Qt({
			id: Q("count_cell", {
				method_family: e.family.slug,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: $,
			label: Xt("count_cell_label", {
				method_label: e.family.label,
				input_label: Yt(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.family.algorithm,
			outputKind: g,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: t
			},
			parameters: {
				ws3: e.epochSeconds,
				sadehNeishabouriCap300: $e(e.family.slug, e.countFamily)
			},
			implementationVersion: e.implementationVersion,
			validationStatus: a,
			defaultIncluded: !0,
			exploratory: a === o,
			lineage: [t]
		}),
		conformance: e.family.conformance
	};
}
function Bt(e) {
	const t = Ot(e.countFamily, e.axis, e.epochSeconds);
	return {
		...Qt({
			id: Q("count_cell", {
				method_family: e.variant.slug,
				implementation_variant: e.variant.implementation,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: $,
			label: Xt("count_provenance_cell_label", {
				method_label: e.variant.label,
				implementation_label: e.variant.implementationLabel,
				input_label: Yt(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.variant.algorithm,
			outputKind: g,
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
			validationStatus: Re,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [t]
		}),
		conformance: e.variant.conformance
	};
}
function Wt(e, t) {
	const a = ke[e];
	if (void 0 === a) throw new Error(`no generated fixed output projection for family ${e}`);
	return {
		...Qt({
			id: a.configId,
			family: a.familyId,
			label: a.label,
			algorithm: a.algorithmValue,
			outputKind: a.outputKind,
			epochSeconds: a.epochSeconds,
			input: {
				family: a.inputFamily,
				...void 0 !== a.inputAxis ? { axis: a.inputAxis } : {},
				epochSeconds: a.epochSeconds,
				seriesKey: a.inputSeriesKey
			},
			parameters: { ...a.parameters },
			implementationVersion: t,
			validationStatus: a.validationStatus,
			defaultIncluded: a.defaultIncluded,
			exploratory: a.exploratory,
			lineage: a.lineageIds
		}),
		conformance: kt(a.methodBindingId)
	};
}
function Vt(e, t) {
	const a = e.thresholdPresets && e.thresholdPresets.length > 0 ? e.thresholdPresets : [te], n = kt(e.id);
	return a.map((a) => ({
		...Qt({
			id: Q("model_cell", {
				model_slug: Zt(e.id),
				preset_slug: Zt(a.id)
			}),
			family: ye,
			label: Xt("model_cell_label", {
				model_label: e.label,
				preset_label: a.label
			}),
			algorithm: e.id,
			outputKind: Le,
			epochSeconds: e.epochSeconds,
			input: {
				family: "lstm_probability",
				epochSeconds: e.epochSeconds,
				seriesKey: `${e.id}:sleep_probability`
			},
			parameters: {
				modelId: e.id,
				thresholdPresetId: a.id,
				threshold: a.threshold
			},
			implementationVersion: t,
			validationStatus: Oe,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [`lstm:${e.id}`]
		}),
		conformance: n
	}));
}
function Ut(e) {
	return "sleep_wake_epoch" === e.outputKind && "consensus" !== e.family && void 0 === e.parameters.implementation;
}
function Kt(e) {
	const t = new Set(e.map((e) => e.family));
	if (1 === t.size && t.has("count_hasib")) return {
		slug: `${$}_sleep_wake`,
		label: Xt("count_consensus_scope_label", {})
	};
	const a = Array.from(new Set(e.filter((e) => e.family === ye).map((e) => "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm).filter((e) => e.length > 0))).sort();
	if (t.has("lstm") && a.length > 0) {
		const e = a.map((e) => Zt(e)).join("_"), n = t.has($);
		return {
			slug: n ? `${$}_${ye}_${e}_sleep_wake` : `${ye}_${e}_sleep_wake`,
			label: Xt(n ? "count_lstm_consensus_scope_label" : "lstm_consensus_scope_label", { model_ids: a.join(", ") })
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
		configHash: ea(e)
	};
}
function Jt(e) {
	const t = [];
	return e.some((e) => "count_hasib" === e.family && e.epochSeconds === At[0]) && t.push(Xt("count_30_warning", {})), e.some((e) => "lstm" === e.family) || t.push(Xt("no_lstm_warning", {})), t;
}
function Xt(e, t) {
	const a = J[e];
	if (void 0 === a) throw new Error(`no generated planner message ${e}`);
	return Object.entries(t).reduce((e, [t, a]) => e.replace(`{${t}}`, String(a)), a);
}
function Yt(e, t, a) {
	return j[e].labelTemplate.replace("{axis}", t).replace("{axis_label}", Te.axis?.[t] ?? t).replace("{epoch_seconds}", String(a));
}
function Zt(e) {
	return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function ea(e) {
	const t = ta(e);
	let a = ue.initialValue;
	for (let n = 0; n < t.length; n += 1) a ^= t.charCodeAt(n), a = Math.imul(a, ue.prime) >>> 0;
	return a.toString(16).padStart(ue.lowercaseHexWidth, "0");
}
function ta(e) {
	return null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map((e) => ta(e)).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => `${JSON.stringify(e)}:${ta(t)}`).join(",")}}`;
}
const aa = new Map(d.map((e) => [e.id, {
	id: e.id,
	conformance: e.conformance,
	needsModelArtifact: e.needsModelArtifact
}]));
function na(e) {
	return aa.get(e)?.conformance ?? null;
}
const ra = 4, ia = 10, sa = Ht().configs.map((e) => ({
	value: e.id,
	label: `Tensor: ${e.label}`
})), oa = new Set(R);
function la(e) {
	if (!oa.has(e)) throw new Error(`STANDARD_ALGORITHM_OPTIONS references '${e}', which is not a generated scoring-method contract id.`);
	return {
		value: e,
		label: a.AlgorithmType[e]
	};
}
const ca = [
	we.SADEH_1994_ACTILIFE,
	we.SADEH_1994_ORIGINAL,
	we.SADEH_1994_GGIR,
	we.COLE_KRIPKE_1992_ACTILIFE,
	we.COLE_KRIPKE_1992_ORIGINAL,
	we.COLE_KRIPKE_1992_GGIR
], da = [we.LSTM_SLEEP_WAKE, we.VAN_HEES_2015], ua = [
	we.UCSD_SCRIPPS_2010,
	we.SAZONOV_2004,
	we.SYED_CNN,
	we.ACTIWARE_SLEEP_WAKE
].map((e) => {
	return "needs_model" !== na((t = la(e)).value) ? t : {
		...t,
		disabled: !0
	};
	var t;
}), pa = [
	...ca.map(la),
	{
		value: tt.TENSOR_MAJORITY_VOTE,
		label: "Tensor majority vote"
	},
	...da.map(la),
	...ua
], ma = [...pa, ...sa], fa = {
	count: "Count-based sleep/wake",
	window: "Window / HDCZA",
	neural: "Neural",
	experimental: "Experimental (provisional)",
	tensor: "Tensor variants (A/B)"
}, _a = [
	"count",
	"window",
	"neural",
	"experimental",
	"tensor"
], ya = new Map(d.map((e) => [e.id, e.execution]));
function ga(e) {
	if (!oa.has(e)) return "tensor";
	const t = ya.get(e);
	if ("neural_model" === t) return "neural";
	if ("angle_spt" === t) return "window";
	const a = na(e);
	return "provisional" === a || "needs_model" === a ? "experimental" : "count";
}
function ha(e) {
	const t = /* @__PURE__ */ new Map();
	for (const a of e) {
		const e = ga(a.value), n = t.get(e) ?? [];
		n.push(a), t.set(e, n);
	}
	return _a.flatMap((e) => {
		const a = t.get(e);
		return a ? [{
			label: fa[e],
			options: a
		}] : [];
	});
}
ha(pa), ha(ma);
const wa = Object.fromEntries(me.map((e) => [e.id, {
	onsetN: e.onsetMinConsecutiveSleep,
	offsetN: e.offsetMinConsecutiveMinutes,
	offsetState: e.offsetScanState,
	label: e.label
}])), ba = wa[Ge.CONSECUTIVE_ONSET3S_OFFSET5S];
function va(e) {
	return wa[e] ?? ba;
}
function ka(e) {
	return e?.markerType === je.MAIN_SLEEP;
}
function Sa(e) {
	return e?.markerType === je.NAP;
}
function Ia(e) {
	return void 0 !== e?.ggirBundleRevision;
}
function Ea(e) {
	return Ia(e) ? "GGIR results retain their imported proposals; HDCZA replacement is unavailable." : null;
}
function Aa(e, t, a) {
	return Ia(e) && t.sleepMarkers.some(ka) && !a.sleepMarkers.some(ka);
}
function Ta(e, t) {
	if (t?.isInvalidNight) return { kind: "invalid" };
	const a = t?.sleepMarkers.find(ka);
	return a ? {
		kind: "scored",
		main: a
	} : {
		kind: t ? "naps/nonwear-only" : "unreviewed",
		window: e
	};
}
me.map(({ id: e, label: t }) => ({
	value: e,
	label: t
})), l.NONE, l.WEBSTER, je.MAIN_SLEEP, je.NAP, [
	Z.SMART,
	Z.DIARY,
	Z.HDCZA,
	Z.L5,
	Z.LONGEST_BOUT,
	Z.EVENT_MARKER,
	Z.ACTIWARE_REST_INTERVAL,
	Z.NONE
].map((e) => ({
	value: e,
	label: a.PeriodGuiderType[e]
}));
const Ra = "GGIR nonwear", Da = {
	DIARY: ut.diary,
	HDCZA: ut.hdcza,
	L5: ut.l5,
	SELECTED_SCORER_FIRST_LAST: ut.selected_scorer_first_last,
	SELECTED_SCORER_LONGEST_BOUT: ut.selected_scorer_longest_bout,
	QUIET_BOUT: ut.quiet_bout,
	EVENT_MARKER: ut.event_marker,
	ACTIWARE_REST_INTERVAL: ut.actiware_rest_interval,
	NONE: ut.none
}, Oa = "use_source_a", Ma = "use_source_b", xa = "intersection", Ca = "union", Na = "source_b_bounded_by_source_a", Fa = "sanity_clamp_source_b_to_source_a", La = {
	sourceA: D.sleep_period_detection.source_a,
	sourceB: D.sleep_period_detection.source_b,
	fusionPolicy: D.sleep_period_detection.fusion_policy,
	mergeGapMinutes: D.sleep_period_detection.merge_gap_minutes,
	paddingMinutes: D.sleep_period_detection.padding_minutes,
	minOverlapJaccard: D.sleep_period_detection.min_overlap_jaccard,
	applyNonwearGate: D.sleep_period_detection.apply_nonwear_gate
};
function Pa(e) {
	const t = La;
	return e.sourceA === t.sourceA && e.sourceB === t.sourceB && e.fusionPolicy === t.fusionPolicy && e.mergeGapMinutes === t.mergeGapMinutes && e.paddingMinutes === t.paddingMinutes && e.minOverlapJaccard === t.minOverlapJaccard && e.applyNonwearGate === t.applyNonwearGate;
}
const ja = a.SleepPeriodWindowSourceType, Ga = Object.values(ut).map((e) => ({
	value: e,
	label: ja[e]
})), Ha = [
	{
		value: Oa,
		label: "Use source A"
	},
	{
		value: Ma,
		label: "Use source B"
	},
	{
		value: xa,
		label: "A intersect B"
	},
	{
		value: Ca,
		label: "A union B"
	},
	{
		value: Na,
		label: "B bounded by A"
	},
	{
		value: Fa,
		label: "Use B, clamp to A if mismatch"
	}
];
function $a(e) {
	return Ga.find((t) => t.value === e)?.label ?? e;
}
function qa(e) {
	const t = za(e), a = t.applyNonwearGate ? "nonwear gate on" : "nonwear gate off";
	return `${$a(t.sourceA)} + ${$a(t.sourceB)}; ${function(e) {
		return Ha.find((t) => t.value === e)?.label ?? e;
	}(t.fusionPolicy)}; ${a}`;
}
function za(e) {
	const t = e ?? {};
	return {
		...La,
		sourceA: t.sourceA ?? t.source_a ?? La.sourceA,
		sourceB: t.sourceB ?? t.source_b ?? La.sourceB,
		fusionPolicy: t.fusionPolicy ?? t.fusion_policy ?? La.fusionPolicy,
		mergeGapMinutes: t.mergeGapMinutes ?? t.merge_gap_minutes ?? La.mergeGapMinutes,
		paddingMinutes: t.paddingMinutes ?? t.padding_minutes ?? La.paddingMinutes,
		minOverlapJaccard: t.minOverlapJaccard ?? t.min_overlap_jaccard ?? La.minOverlapJaccard,
		applyNonwearGate: t.applyNonwearGate ?? t.apply_nonwear_gate ?? La.applyNonwearGate
	};
}
function Ba(e) {
	const t = za(e);
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
function Wa(e) {
	switch (e.fusionPolicy === Ma ? e.sourceB : e.sourceA) {
		case Da.DIARY: return Z.DIARY;
		case Da.HDCZA: return Z.HDCZA;
		case Da.L5: return Z.L5;
		case Da.SELECTED_SCORER_FIRST_LAST:
		case Da.SELECTED_SCORER_LONGEST_BOUT: return Z.LONGEST_BOUT;
		case Da.EVENT_MARKER: return Z.EVENT_MARKER;
		case Da.ACTIWARE_REST_INTERVAL: return Z.ACTIWARE_REST_INTERVAL;
		case Da.NONE: return Z.NONE;
	}
	return Z.NONE;
}
const Va = {
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
}, Ua = Object.fromEntries(Object.entries(Va).filter(([, e]) => null !== e.cascade).sort(([, e], [, t]) => e.cascadeOrder - t.cascadeOrder).map(([e, t]) => [e, t.cascade])), Ka = Object.entries(Va).filter(([, e]) => "none" !== e.workspace).sort(([, e], [, t]) => e.workspaceOrder - t.workspaceOrder).map(([e]) => e), Qa = (Object.entries(Va).filter(([, e]) => "unattached" === e.workspace).map(([e]) => e), Object.entries(Va).filter(([, e]) => e.backup).map(([e]) => e), Ka.filter((e) => "diary" === Va[e].aggregate), [{
	table: "actiwareFileData",
	field: "actiwareStatisticsNeedsRecompute"
}]), Ja = /* @__PURE__ */ new Set([
	"diaryEntries",
	"diaryOccurrences",
	"stagedDiaryEntries"
]);
function Xa(e, t) {
	if (Ja.has(t)) throw new Error(`The diary store ${t} is written only by db/diary.`);
	return e[t];
}
const Ya = /* @__PURE__ */ new Set([
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
]), Za = /\{[^{}]+\}/g;
function en(e, t, a) {
	if (null == t) return "";
	if ("object" == typeof t) throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${e}=${!0 === a?.allowReserved ? t : encodeURIComponent(t)}`;
}
function tn(e, t, a) {
	if (!t || "object" != typeof t) return "";
	const n = [], r = {
		simple: ",",
		label: ".",
		matrix: ";"
	}[a.style] || "&";
	if ("deepObject" !== a.style && !1 === a.explode) {
		for (const e in t) n.push(e, !0 === a.allowReserved ? t[e] : encodeURIComponent(t[e]));
		const r = n.join(",");
		switch (a.style) {
			case "form": return `${e}=${r}`;
			case "label": return `.${r}`;
			case "matrix": return `;${e}=${r}`;
			default: return r;
		}
	}
	for (const s in t) {
		const r = "deepObject" === a.style ? `${e}[${s}]` : s;
		n.push(en(r, t[s], a));
	}
	const i = n.join(r);
	return "label" === a.style || "matrix" === a.style ? `${r}${i}` : i;
}
function an(e, t, a) {
	if (!Array.isArray(t)) return "";
	if (!1 === a.explode) {
		const n = {
			form: ",",
			spaceDelimited: "%20",
			pipeDelimited: "|"
		}[a.style] || ",", r = (!0 === a.allowReserved ? t : t.map((e) => encodeURIComponent(e))).join(n);
		switch (a.style) {
			case "simple": return r;
			case "label": return `.${r}`;
			case "matrix": return `;${e}=${r}`;
			default: return `${e}=${r}`;
		}
	}
	const n = {
		simple: ",",
		label: ".",
		matrix: ";"
	}[a.style] || "&", r = [];
	for (const i of t) "simple" === a.style || "label" === a.style ? r.push(!0 === a.allowReserved ? i : encodeURIComponent(i)) : r.push(en(e, i, a));
	return "label" === a.style || "matrix" === a.style ? `${n}${r.join(n)}` : r.join(n);
}
function nn(e) {
	return function(t) {
		const a = [];
		if (t && "object" == typeof t) for (const n in t) {
			const r = t[n];
			if (null != r) if (Array.isArray(r)) {
				if (0 === r.length) continue;
				a.push(an(n, r, {
					style: "form",
					explode: !0,
					...e?.array,
					allowReserved: e?.allowReserved || !1
				}));
			} else "object" != typeof r ? a.push(en(n, r, e)) : a.push(tn(n, r, {
				style: "deepObject",
				explode: !0,
				...e?.object,
				allowReserved: e?.allowReserved || !1
			}));
		}
		return a.join("&");
	};
}
function rn(e, t) {
	let a = e;
	for (const n of e.match(Za) ?? []) {
		let e = n.substring(1, n.length - 1), r = !1, i = "simple";
		if (e.endsWith("*") && (r = !0, e = e.substring(0, e.length - 1)), e.startsWith(".") ? (i = "label", e = e.substring(1)) : e.startsWith(";") && (i = "matrix", e = e.substring(1)), !t || void 0 === t[e] || null === t[e]) continue;
		const s = t[e];
		a = Array.isArray(s) ? a.replace(n, an(e, s, {
			style: i,
			explode: r
		})) : "object" != typeof s ? "matrix" !== i ? a.replace(n, "label" === i ? `.${encodeURIComponent(s)}` : encodeURIComponent(s)) : a.replace(n, `;${en(e, s)}`) : a.replace(n, tn(e, s, {
			style: i,
			explode: r
		}));
	}
	return a;
}
function sn(e, t) {
	return e instanceof FormData ? e : t && "application/x-www-form-urlencoded" === (t.get instanceof Function ? t.get("Content-Type") ?? t.get("content-type") : t["Content-Type"] ?? t["content-type"]) ? new URLSearchParams(e).toString() : JSON.stringify(e);
}
function on(...e) {
	const t = new Headers();
	for (const a of e) {
		if (!a || "object" != typeof a) continue;
		const e = a instanceof Headers ? a.entries() : Object.entries(a);
		for (const [a, n] of e) if (null === n) t.delete(a);
		else if (Array.isArray(n)) for (const e of n) t.append(a, e);
		else void 0 !== n && t.set(a, n);
	}
	return t;
}
function ln(e) {
	return e.endsWith("/") ? e.substring(0, e.length - 1) : e;
}
function cn(e) {
	const t = e.split(/[/\\]/);
	return t[t.length - 1] || e;
}
var dn = class e {
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
		const { stat: a } = await import("./dist-js-CMqw3VI6.js"), n = await a(t), r = n.mtime ? n.mtime.getTime() : 0;
		return new e({
			path: t,
			name: cn(t),
			fileSize: n.size,
			lastModified: r
		});
	}
	get size() {
		return this.end - this.start;
	}
	slice(t, a) {
		const { start: n, end: r } = function(e, t, a) {
			const n = (t, a) => void 0 === t ? a : t < 0 ? Math.max(e + t, 0) : Math.min(t, e), r = n(t, 0), i = n(a, e);
			return {
				start: r,
				end: Math.max(r, i)
			};
		}(this.size, t, a);
		return new e({
			path: this.path,
			name: this.name,
			fileSize: this.fileSize,
			lastModified: this.lastModified,
			start: this.start + n,
			end: this.start + r
		});
	}
	async arrayBuffer() {
		const e = this.size;
		if (e <= 0) return /* @__PURE__ */ new ArrayBuffer(0);
		const { open: t, SeekMode: a } = await import("./dist-js-CMqw3VI6.js"), n = await t(this.path, { read: !0 });
		try {
			await n.seek(this.start, a.Start);
			const t = new Uint8Array(e);
			let r = 0;
			for (; r < e;) {
				const e = await n.read(t.subarray(r));
				if (null === e || 0 === e) break;
				r += e;
			}
			return r === e ? t.buffer : t.buffer.slice(0, r);
		} finally {
			await n.close();
		}
	}
	async text() {
		const e = await this.arrayBuffer();
		return new TextDecoder().decode(e);
	}
};
async function un(e) {
	return qe(e);
}
const pn = [
	"csv",
	"gt3x",
	"bin",
	"bz2",
	"tbz2"
], mn = "ggirImportRefusals", fn = "already-imported-different-content", _n = "local-storage", yn = "GGIR output folder", gn = "ggir-folder", hn = "import-in-progress", wn = {
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
	[_n]: {
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
	[hn]: {
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
	[fn]: {
		label: "already imported with different content and kept as it was; to replace it first use Export backup on the Workspace tab of the Files page then delete the earlier import on the Files page and import it again",
		durableRefusal: !0
	},
	[gn]: {
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
		label: `this recording epoch length cannot be stored; only ${P.join(" or ")} second epochs and shorter epochs that divide ${String(He)} seconds can be imported`,
		durableRefusal: !1
	},
	"processing-runtime": {
		label: "processing runtime",
		durableRefusal: !1
	}
}, bn = new Map(Object.entries(wn).map(([e, { label: t }]) => [t.toLowerCase(), e])), vn = /categor(?:y|ies): ([a-z0-9; ]+?)(?: \(\d+\))?[.,]/u;
const Sn = Object.keys({
	workspace: null,
	"csv-settings": "/csv-import",
	"unsupported-format": "/csv-import",
	"empty-file": null,
	"invalid-data": "/csv-import",
	[_n]: null,
	permission: null,
	"browser-memory": null,
	"time-limit": null,
	[hn]: null,
	"decoder-crash": null,
	"ggir-no-part4": null,
	"ggir-not-read": null,
	"ggir-corrected-not-available": null,
	[fn]: null,
	[gn]: null,
	"aw5-unreadable": null,
	"aw5-memory": null,
	"stale-app": null,
	"unsupported-epoch": null,
	"processing-runtime": "/settings/processing"
});
function In(e) {
	return wn[e].label;
}
function En(e) {
	return In(function(e) {
		if (e instanceof Error && "category" in e && "string" == typeof e.category && Object.hasOwn(wn, e.category)) return e.category;
		const t = function(e) {
			try {
				return e instanceof Error ? e.message : "string" == typeof e ? e : "";
			} catch {
				return "";
			}
		}(e).toLowerCase();
		if (Object.hasOwn(wn, t)) return t;
		const a = bn.get(t) ?? bn.get(vn.exec(t)?.[1] ?? "");
		return void 0 !== a ? a : t.includes("timed out during") ? "time-limit" : /failed to fetch dynamically imported module|error loading dynamically imported module|importing a module script failed/u.test(t) ? "stale-app" : t.includes("already being imported") ? "import-in-progress" : t.startsWith("wasm panic in ") ? "decoder-crash" : /workspace|scope changed|no longer active/u.test(t) ? "workspace" : /csv settings|column-mapped|column mapping|mapping .*required|settings .*incomplete|review data settings/u.test(t) ? "csv-settings" : /unsupported|not supported|unimplemented source-profile|unknown file (?:type|format)/u.test(t) ? "unsupported-format" : /out of memory|allocation failed|invalid array length|exceeds the v1 limit|too large (?:to process|for in-browser memory)/u.test(t) || /\bunreachable\b/u.test(t) && !t.startsWith("wasm panic in ") ? "browser-memory" : /empty|no data rows|did not contain any .*epochs/u.test(t) ? "empty-file" : /quota|indexeddb|dexie|database|storage|persist|saving|disk/u.test(t) ? "local-storage" : /permission|denied|unauthori[sz]ed|not allowed/u.test(t) ? "permission" : /parse|csv|row|column|timestamp|header|date|\btime\b|corrupt|invalid|malformed|decompress|archive|rdata/u.test(t) ? "invalid-data" : "processing-runtime";
	}(e));
}
const An = [
	"parse",
	"score",
	"nonwear",
	"save",
	"variants"
], Tn = {
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
function Rn(e, t) {
	if (null === t) return -1;
	const [a, n] = Tn[e];
	return a + Math.max(0, Math.min(1, t)) * (n - a);
}
function Dn(e, t) {
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
Object.keys(Tn);
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
].join("|")})\\b`), Object.values(s.errnames);
const On = new Set(Object.values(re));
function Mn(e) {
	return On.has(z(e));
}
function xn(e, t) {
	return `${e}:${t}`;
}
function Cn(e, t) {
	return {
		id: xn(e.sessionId, e.sequence),
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
const Nn = [], Fn = /* @__PURE__ */ new Set([
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
]), Ln = /* @__PURE__ */ new Set([
	"error_type",
	"has_context",
	"file_id"
]), Pn = /* @__PURE__ */ new Set([
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
function jn(e, t, a) {
	const n = function(e) {
		if (!e) return;
		const t = {};
		for (const [a, n] of Object.entries(e)) Ln.has(a) && ("has_context" === a && "boolean" == typeof n && (t[a] = n), "file_id" === a && Number.isSafeInteger(n) && (t[a] = n), "error_type" === a && "string" == typeof n && (t[a] = Pn.has(n) ? n : "Error"));
		return Object.keys(t).length > 0 ? t : void 0;
	}(a);
	Nn.push({
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		level: e,
		message: Fn.has(t) ? t : "Diagnostic event",
		...n ? { context: n } : {}
	}), Nn.length > 500 && Nn.splice(0, Nn.length - 500);
}
function Gn(e) {
	return { error_type: e instanceof Error ? e.name : typeof e };
}
var Hn = class extends Error {
	name = "GgirResultsBundleError";
	category = gn;
	folderName;
	fileName;
	constructor(e, t, a) {
		super(e), this.folderName = t, this.fileName = a;
	}
};
const $n = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap();
function Bn(e, t) {
	const a = new File([], e);
	return zn.set(a, t instanceof Hn ? t : new Hn(t ? "The GGIR output folder could not be read. Check folder access and open it again." : "The GGIR output folder is empty or contains no supported activity files.", e)), a;
}
function Wn(e) {
	return $n.get(e);
}
function Vn(e, t) {
	qn.set(e, t);
}
function Un(e) {
	const t = qn.get(e);
	if (t) return t;
	const a = e.webkitRelativePath;
	return "string" == typeof a && a ? a : e.name;
}
function Kn(e, t) {
	return /\.csv$/iu.test(e.name) && Un(e) !== e.name ? new Hn("This CSV table could not be read as activity data. GGIR imports require the whole output folder containing meta/ and config.csv.", void 0, e.name) : t instanceof Error ? t : new Error(t);
}
function Qn(e, t = !1) {
	const a = e.replace(/\\/gu, "/");
	return !/(^|\/)(?:\._[^/]*|__MACOSX)(?:\/|$)/iu.test(a) && (t || !/(^|\/)(?:ms5\.outraw|sib\.reports|sleep\.qc)(?:\/|$)/iu.test(a));
}
function Jn(e) {
	const t = e.replace(/\\/g, "/").split("/").filter(Boolean), a = t.indexOf("meta");
	return a >= 0 && a < t.length - 1 ? t.slice(0, a).join("/") : null;
}
function Xn(e) {
	return t = er(e), /\.(rdata|rda)$/iu.test(t) ? Jn(e) : null;
	var t;
}
function Yn(e) {
	const t = e.map((e) => e.replace(/\\/gu, "/")).filter((e) => Qn(e, !0)), a = new Set(t.map(Xn).filter((e) => null !== e)), n = /* @__PURE__ */ new Map();
	for (const r of t) {
		const e = Jn(r);
		if (null === e || !a.has(e)) continue;
		const t = n.get(e) ?? [];
		t.push(r.slice(e ? e.length + 1 : 0)), n.set(e, t);
	}
	for (const [r, i] of n) {
		const e = r ? er(r) : void 0, a = [...new Set(i.filter((e) => e.split("/").length > 2).map((e) => e.split("/")[1] ?? "").filter(Boolean))].sort().map((e) => `meta/${e}`).join(", ") || "no part folders", n = r ? `${r}/` : "";
		if (!t.some((e) => e.startsWith(n) && "config.csv" === e.slice(n.length).toLowerCase())) throw new Hn(`The GGIR output has no config.csv (found ${a}). GGIR writes config.csv next to meta/; add it to the folder and import again.`, e);
		for (const t of [
			"basic",
			"ms2.out",
			"ms3.out",
			"ms4.out",
			"ms5.out"
		]) {
			const a = `meta/${t}/`, n = i.filter((e) => e.startsWith(a)).map((e) => e.slice(a.length)).find((e) => e.includes("/"))?.split("/")[0];
			if (n) throw new Hn(`meta/${t} contains a folder ${n}/ instead of ${"basic" === t ? "meta_*.RData" : "*.RData"} files: move its files up one level, as GGIR writes them.`, e);
		}
		if (!i.some((e) => /^meta\/basic\/meta_[^/]+\.(?:rdata|rda)$/iu.test(e))) throw new Hn(`meta/basic ${i.some((e) => e.startsWith("meta/basic/")) ? "contains no meta_*.RData files" : "is missing"} (found ${a}). Part 1 files (meta_*.RData) are needed.`, e);
	}
}
function Zn(e) {
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
const tr = /^part2_(?:daysummary|summary)\.csv$/u, ar = /^(?:part4_summary_sleep_cleaned|part5_personsummary_.+)\.csv$/u;
function nr() {
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
	return void 0 !== (t = e, zn.get(t)) || function(e, t = nr()) {
		const a = e.toLowerCase();
		return Qn(e) && t.some((e) => a.endsWith(e));
	}(e.name, nr());
	var t;
}
function sr(e) {
	return new Promise((t) => {
		let a = !1;
		const n = (e) => {
			a || (a = !0, window.removeEventListener("focus", r), t(e));
		};
		e.addEventListener("change", () => {
			const t = Array.from(e.files ?? []);
			n({ files: t });
		}), e.addEventListener("cancel", () => n({ cancelled: !0 }));
		const r = () => {
			setTimeout(() => {
				a || 0 !== (e.files?.length ?? 0) || n({ cancelled: !0 });
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
	t.type = "file", t.accept = nr().join(","), e && (t.multiple = !0);
	const a = sr(t);
	return t.click(), a.then((e) => "cancelled" in e ? null : e.files);
}
function cr() {
	const e = document.createElement("input");
	e.type = "file", e.setAttribute("webkitdirectory", "");
	const t = sr(e);
	return e.click(), t.then((e) => {
		if ("cancelled" in e) return null;
		const { files: t } = e;
		try {
			Yn(t.map(Un));
		} catch (a) {
			if (!(a instanceof Hn)) throw a;
			return [Bn(a.folderName ?? "GGIR output folder", a)];
		}
		return t.filter((e) => ir(e) && Qn(Un(e)));
	});
}
const dr = 1e5, ur = `The folder was not read: it holds folders nested more than ${String(32)} deep or more than ${dr.toLocaleString("en-US")} entries (a folder link that points back into its own folder does this). Pick the GGIR output folder itself.`;
async function pr(e, t = e.name, a) {
	try {
		const n = [], r = await mr(e, t, n, a);
		return Yn(n), r.length ? r : [Bn(e.name, !1)];
	} catch (n) {
		return [Bn(e.name, !(n instanceof Hn) || n)];
	}
}
async function mr(e, t, a, n) {
	if (!Qn(t)) return [];
	if (t.split("/").length > 32) throw new Hn(ur);
	const r = [], i = "function" == typeof e.values ? e.values() : e;
	for await (const s of i) {
		const e = s, i = t ? `${t}/${e.name}` : e.name;
		if (a.push("directory" === e.kind ? `${i}/` : i), a.length > dr) throw new Hn(ur);
		if (n?.(a.length), Qn(i)) {
			if ("file" === e.kind && "function" == typeof e.getFile && ir(e)) {
				const t = await e.getFile();
				Vn(t, i), r.push(t);
				continue;
			}
			"directory" === e.kind && r.push(...await mr(e, i, a, n));
		}
	}
	return r;
}
function fr(e) {
	return e.isFile ? {
		kind: "file",
		name: e.name,
		getFile: () => new Promise((t, a) => e.file(t, a))
	} : {
		kind: "directory",
		name: e.name,
		values: () => _r(e.createReader())
	};
}
async function* _r(e) {
	const t = await new Promise((t, a) => e.readEntries(t, a));
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
				const { open: t } = await import("./dist-js-DtyocxnK.js"), a = await t({
					multiple: e,
					directory: !1,
					filters: [{
						name: "Activity Files",
						extensions: pn
					}]
				});
				if (null == a) return null;
				const n = Array.isArray(a) ? a : [a], r = [];
				for (const i of n) r.push(await dn.fromPath(i));
				return r.length > 0 ? r : null;
			}(e),
			pickFolder: () => async function() {
				const { open: e } = await import("./dist-js-DtyocxnK.js"), { invoke: t } = await import("./core-B0WeKh9d.js"), a = await e({
					directory: !0,
					multiple: !1
				});
				if ("string" != typeof a) return null;
				const n = await t("list_supported_files", { dir: a }), r = [];
				for (const i of n) r.push(await dn.fromPath(i));
				return r.length > 0 ? r : null;
			}(),
			saveBlob: (e, t, a) => async function(e, t, a) {
				const { save: n } = await import("./dist-js-DtyocxnK.js"), { invoke: r } = await import("./core-B0WeKh9d.js");
				a?.throwIfAborted();
				const i = await q(n({ defaultPath: t }), a);
				if (a?.throwIfAborted(), !i) return null;
				const s = new Uint8Array(await q(e.arrayBuffer(), a)), o = Array.from(s);
				return a?.throwIfAborted(), await r("save_file_atomic", {
					path: i,
					bytes: o
				}), i;
			}(e, t, a)
		},
		fileDrop: { subscribe: (e) => function(e) {
			let t = null, a = !1;
			return (async () => {
				const { getCurrentWindow: n } = await import("./window-uHC0_7hY.js"), r = await n().onDragDropEvent(async (t) => {
					const a = t.payload;
					"enter" === a.type ? e({ phase: "enter" }) : "over" === a.type ? e({ phase: "over" }) : "leave" === a.type ? e({ phase: "leave" }) : "drop" === a.type && e({
						phase: "drop",
						sources: await Promise.all(a.paths.map((e) => dn.fromPath(e)))
					});
				});
				a ? r() : t = r;
			})(), () => {
				a = !0, t?.();
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
						const { invoke: a } = await import("./core-B0WeKh9d.js");
						let n = await a("plugin:notification|is_permission_granted");
						n || (n = "granted" === await a("plugin:notification|request_permission")), n && await a("plugin:notification|notify", { options: t ? {
							title: e,
							body: t
						} : { title: e } });
					}(e, t);
				} catch (a) {
					console.warn("[platform] notify failed:", a);
				}
			},
			setProgress: async (e) => {
				try {
					await async function(e) {
						const { getCurrentWindow: t, ProgressBarStatus: a } = await import("./window-uHC0_7hY.js"), n = t();
						if (null === e) await n.setProgressBar({ status: a.None });
						else {
							const t = Math.max(0, Math.min(100, Math.round(100 * e)));
							await n.setProgressBar({
								status: a.Normal,
								progress: t
							});
						}
					}(e);
				} catch (t) {
					console.warn("[platform] setProgress failed:", t);
				}
			},
			onCloseRequested: (e) => function(e) {
				let t = null, a = !1;
				return (async () => {
					const { getCurrentWindow: n } = await import("./window-uHC0_7hY.js"), r = await n().onCloseRequested(async (t) => {
						await e() || t.preventDefault();
					});
					a ? r() : t = r;
				})(), () => {
					a = !0, t?.();
				};
			}(e),
			onMenuAction: (e) => function(e) {
				let t = null, a = !1;
				return (async () => {
					const { listen: n } = await import("./event-BInfzwX-.js"), r = await n("menu-action", (t) => e(t.payload));
					a ? r() : t = r;
				})(), () => {
					a = !0, t?.();
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
				const { invoke: a } = await import("./core-B0WeKh9d.js");
				await a("set_group_config", {
					groupHash: await un(e),
					username: t
				});
			}(e, t),
			computeGroupHash: (e) => un(e)
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
				let a = 0;
				await t.downloadAndInstall((t) => {
					if (e) switch (t.event) {
						case "Started":
							a = t.data.contentLength ?? 0, e({
								chunkSize: 0,
								total: a
							});
							break;
						case "Progress":
							e({
								chunkSize: t.data.chunkLength ?? 0,
								total: a
							});
							break;
						case "Finished": e({
							chunkSize: 0,
							total: a
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
								...Object.fromEntries(nr().filter((e) => !or.includes(e)).map((e) => [`application/x-${e.slice(1)}`, [e]]))
							}
						}],
						multiple: e
					}), a = [];
					for (const e of t) a.push(await e.getFile());
					return a.length > 0 ? a : null;
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
			saveBlob: (e, t, a) => (a?.throwIfAborted(), function(e, t) {
				const a = URL.createObjectURL(e), n = document.createElement("a");
				n.href = a, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n), setTimeout(() => URL.revokeObjectURL(a), 1e3);
			}(e, t), Promise.resolve(null))
		},
		fileDrop: { subscribe: (e, t) => {
			const a = t ?? window, n = (e) => Array.from(e.dataTransfer?.types ?? []).includes("Files"), r = (e) => Array.from(e.dataTransfer?.items ?? []).filter((e) => "file" === e.kind).map((e) => {
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
				const a = t;
				n(a) && (a.preventDefault(), e({
					phase: "enter",
					items: r(a)
				}));
			}, s = (t) => {
				const a = t;
				n(a) && (a.preventDefault(), e({
					phase: "over",
					items: r(a)
				}));
			}, o = (t) => {
				n(t) && e({ phase: "leave" });
			}, l = (t) => {
				const a = t;
				n(a) && (a.preventDefault(), a.dataTransfer && async function(e) {
					const t = Array.from(e.items ?? []).filter((e) => "file" === e.kind).map((e) => {
						const t = e, a = e.webkitGetAsEntry?.(), n = e.getAsFile?.();
						return {
							handle: t.getAsFileSystemHandle?.(),
							legacy: a,
							file: n
						};
					});
					return t.length ? (await Promise.all(t.map(async (e) => {
						const t = await e.handle?.catch(() => null) ?? (e.legacy ? fr(e.legacy) : null);
						return "directory" === t?.kind ? pr(t) : t?.getFile ? [await t.getFile().catch(() => Bn(t.name, !0))] : e.file ? [e.file] : [Bn(e.legacy?.name ?? "GGIR output folder", !0)];
					}))).flat() : Array.from(e.files);
				}(a.dataTransfer).then((t) => e({
					phase: "drop",
					sources: t
				})));
			};
			return a.addEventListener("dragenter", i), a.addEventListener("dragover", s), a.addEventListener("dragleave", o), a.addEventListener("drop", l), () => {
				a.removeEventListener("dragenter", i), a.removeEventListener("dragover", s), a.removeEventListener("dragleave", o), a.removeEventListener("drop", l);
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
			computeGroupHash: (e) => qe(e)
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
	const t = M(await e.clone().text());
	if (null === t) return e;
	const a = new Headers(e.headers);
	return a.delete("content-length"), new Response(t, {
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
				const e = h().workspaces.activeId();
				if (!e) return !1;
				const t = h().workspaces.workspace(e);
				return void 0 === t || "" === t.serverUrl;
			}()) throw new br();
			const a = K.basePath, { sitePassword: n, username: r, selectedStudyId: i } = h().scoring(), s = { onRequest: ({ request: e }) => (n && !e.headers.has("X-Site-Password") && e.headers.set("X-Site-Password", n), t || e.headers.has("X-Username") || e.headers.set("X-Username", r || "anonymous"), t || e.headers.has("X-Study-Id") || null == i || e.headers.set("X-Study-Id", String(i)), e) }, o = function(e) {
				let { baseUrl: t = "", Request: a = globalThis.Request, fetch: n = globalThis.fetch, querySerializer: r, bodySerializer: i, pathSerializer: s, headers: o, requestInitExt: l, ...c } = { ...e };
				l = "object" == typeof process && Number.parseInt(process?.versions?.node?.substring(0, 2)) >= 18 && process.versions.undici ? l : void 0, t = ln(t);
				const d = [];
				async function u(e, u) {
					const { baseUrl: p, fetch: m = n, Request: f = a, headers: _, params: y = {}, parseAs: g = "json", querySerializer: h, bodySerializer: w = i ?? sn, pathSerializer: b, body: v, middleware: k = [], ...S } = u || {};
					let I = t;
					p && (I = ln(p) ?? t);
					let E = "function" == typeof r ? r : nn(r);
					h && (E = "function" == typeof h ? h : nn({
						..."object" == typeof r ? r : {},
						...h
					}));
					const A = b || s || rn, T = void 0 === v ? void 0 : w(v, on(o, _, y.header)), R = on(void 0 === T || T instanceof FormData ? {} : { "Content-Type": "application/json" }, o, _, y.header), D = [...d, ...k], O = {
						redirect: "follow",
						...c,
						...S,
						body: T,
						headers: R
					};
					let M, x, C, N = new f(function(e, t) {
						let a = `${t.baseUrl}${e}`;
						t.params?.path && (a = t.pathSerializer(a, t.params.path));
						let n = t.querySerializer(t.params.query ?? {});
						return n.startsWith("?") && (n = n.substring(1)), n && (a += `?${n}`), a;
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
							const a = await t.onRequest({
								request: N,
								schemaPath: e,
								params: y,
								options: x,
								id: M
							});
							if (a) {
								if (!(a instanceof f)) {
									if (a instanceof Response) {
										C = a;
										break;
									}
									throw new Error("onRequest: must return new Request() or Response() when modifying the request");
								}
								N = a;
							}
						}
					}
					if (!C) {
						try {
							C = await m(N, l);
						} catch (P) {
							let t = P;
							if (D.length) for (let a = D.length - 1; a >= 0; a--) {
								const n = D[a];
								if (n && "object" == typeof n && "function" == typeof n.onError) {
									const a = await n.onError({
										request: N,
										error: t,
										schemaPath: e,
										params: y,
										options: x,
										id: M
									});
									if (a) {
										if (a instanceof Response) {
											t = void 0, C = a;
											break;
										}
										if (a instanceof Error) {
											t = a;
											continue;
										}
										throw new Error("onError: must return new Response() or instance of Error");
									}
								}
							}
							if (t) throw t;
						}
						if (D.length) for (let t = D.length - 1; t >= 0; t--) {
							const a = D[t];
							if (a && "object" == typeof a && "function" == typeof a.onResponse) {
								const t = await a.onResponse({
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
					request: (e, t, a) => u(t, {
						...a,
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
				baseUrl: a,
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
	const a = void 0 === t.studyId ? {} : { study_id: t.studyId };
	return qe(Sr({
		previous_hash: e ?? "",
		file_id: t.fileId,
		analysis_date: t.analysisDate,
		username: t.username,
		...a,
		action: t.action,
		client_timestamp: t.clientTimestamp,
		session_id: t.sessionId,
		sequence: t.sequence,
		payload: t.payload ?? null
	}));
}
async function Er(e) {
	const t = e.filter((e) => null != e.eventHash), a = function(e) {
		const t = /* @__PURE__ */ new Map();
		for (const [a, n] of e.entries()) {
			if ("audit_chain_reanchored" !== n.action) continue;
			const e = n.payload;
			if (void 0 === e) continue;
			const r = e.restoreId;
			if ("string" != typeof r || t.has(r)) continue;
			const i = e.firstRestoredHash;
			t.set(r, {
				index: a,
				firstRestoredHash: "string" == typeof i ? i : null
			});
		}
		return t;
	}(t);
	let n, r, i = null, s = 0;
	for (const [o, l] of t.entries()) {
		const e = l.restoredFromBackup, t = void 0 !== e && e !== n;
		if (void 0 !== e && t && o > 0) {
			const t = a.get(e);
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
		i = l.eventHash ?? null, n = l.restoredFromBackup;
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
function Rr(e, t, a) {
	if (0 === t.length) return;
	const n = a ?? {}, r = t.filter((e) => !(e in n));
	r.length > 0 && Tr(`"${e}" payload is missing declared key(s): ${r.join(", ")}`);
}
function Dr(e) {
	return {
		...e,
		appVersion: Ar()
	};
}
async function Or(e, t, a) {
	if (!("walLog" in e) || void 0 === e.walLog) return void await ae(e, [e.auditLog], async () => xr(e, t), a);
	const n = s.currentTransaction;
	n?.db === e && "readwrite" === n.mode && n.storeNames.includes(e.auditLog.name) && n.storeNames.includes(e.walLog.name) ? await xr(e, t) : await Ve([e.auditLog], async () => xr(e, t), e, a);
}
const Mr = /* @__PURE__ */ new WeakMap();
async function xr(e, t) {
	const a = (await e.auditLog.orderBy("id").last())?.eventHash ?? null, n = Ir(a, t), r = s.currentTransaction ? await s.waitFor(n) : await n, i = {
		...t,
		...null !== a ? { previousHash: a } : {},
		eventHash: r
	}, o = await e.auditLog.add({ ...i });
	s.currentTransaction?.storeNames.includes("walLog") && await async function(e, t) {
		const { fileId: a, username: n, ...r } = t;
		await Ke({
			op: "audit_append",
			fileId: a,
			username: n,
			payload: {
				auditLogId: e,
				...Object.fromEntries(Object.entries(r).filter(([, e]) => void 0 !== e))
			}
		});
	}(o, i);
}
function Cr(t) {
	return "workspace" !== e[t.action]?.anchor || 0 === t.fileId ? t : {
		...t,
		fileId: 0,
		payload: {
			...t.payload,
			workspaceScoped: !0,
			openFileId: t.fileId,
			openAnalysisDate: t.analysisDate
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
	return JSON.stringify([Fr(t), xn(t.sessionId, t.sequence)]);
}
function Pr(e, t) {
	const a = /* @__PURE__ */ new Set();
	for (const n of t) for (const t of e.get(n) ?? []) a.add(t);
	return [...a];
}
function jr(e) {
	return !!function(e) {
		return Ya.has(e);
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
			sessionId: Ee(),
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
		if (t.action === re.SESSION_END) return 0 === e.context.sequence;
		let a = Mr.get(e.db);
		a || (a = /* @__PURE__ */ new Map(), Mr.set(e.db, a));
		const n = JSON.stringify([t.fileId, t.analysisDate]);
		if (t.action !== re.SESSION_START) return a.delete(n), !1;
		const r = JSON.stringify([t.username, t.studyId ?? null]), i = Sr(t.payload ?? null), s = a.get(n);
		return s?.actor === r && s.payload === i || (a.set(n, {
			actor: r,
			payload: i
		}), !1);
	}
	enqueueBoundRecord(e, t) {
		this.isNoOpRevisit(e, t) || (this.writeQueue.push(t), this.dbAffinityByRecord.set(t, e), e.context.sequence++);
	}
	captureWorkspaceBinding(e, t, a) {
		const n = this.resolveTarget(e);
		if (!n) throw new Error("Cannot capture audit context without an open workspace database");
		const { context: r } = n, i = void 0 !== a && r.fileId === a.fileId && r.analysisDate === a.analysisDate && r.username === t.username && r.studyId === t.studyId, s = Object.freeze({});
		return this.stateByBinding.set(s, {
			db: n.db,
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
			sessionId: Ee(),
			sequence: 0
		}, {
			db: t.db,
			context: t.own
		}) : null;
	}
	setContext(e, t, a, n) {
		const r = this.resolveTarget();
		if (!r) return;
		const { context: i } = r, s = void 0 === a ? i.username : a, o = void 0 === n ? i.studyId : n;
		e === i.fileId && t === i.analysisDate && s === i.username && o === i.studyId || (i.sessionId = Ee(), i.sequence = 0), i.fileId = e, i.analysisDate = t, i.username = s, i.studyId = o, this.flushToServer();
	}
	currentSessionId() {
		return this.resolveTarget()?.context.sessionId ?? null;
	}
	newSession() {
		this.flushToServer();
		const e = this.resolveTarget();
		e && (e.context.sessionId = Ee(), e.context.sequence = 0);
	}
	record(t, a) {
		const n = e[t];
		n ? jr(t) || ("file" !== n.anchor ? (Rr(t, n.localPayloadKeys, a), "workspace" !== n.anchor ? this.log(t, a) : this.logWorkspaceEvent(t, a)) : Tr(`"${t}" is anchored to an explicit file/date; use recordFileEvent()`)) : Tr(`unknown audit action "${t}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordAppEvent(e, t) {
		this.record(e, t);
	}
	recordSessionBound(e, { fileId: t, analysisDate: a, action: n, payload: r }) {
		jr(n) || this.recordSessionAnchored(e, {
			fileId: t,
			analysisDate: a,
			action: n,
			...void 0 !== r ? { payload: r } : {}
		});
	}
	recordNightEdit(t, a) {
		if (t) return void this.recordSessionAnchored(t, a);
		const n = e[a.action];
		n ? (Rr(a.action, n.localPayloadKeys, a.payload), this.log(a.action, a.payload)) : Tr(`unknown audit action "${a.action}"; not in AUDIT_EVENT_CONTRACT`);
	}
	appendNightEditsInTransaction(t) {
		const a = /* @__PURE__ */ new Map(), n = s.currentTransaction, r = () => {
			for (const [e, { from: t, to: n, sessionId: r }] of a) e.sessionId === r && e.sequence === n && (e.sequence = t);
		};
		n?.on("abort", r), n?.on("error", r);
		const i = t.map(({ binding: t, input: n }) => {
			const r = e[n.action];
			if (!r || "session" !== r.anchor) return Tr(`"${n.action}" is not a session-anchored audit action`), null;
			Rr(n.action, r.localPayloadKeys, n.payload);
			const i = this.targetForBinding(t);
			if (!i) return Tr("night edit received an invalid audit workspace binding"), null;
			const { context: s } = i, o = {
				fileId: n.fileId,
				analysisDate: n.analysisDate,
				username: s.username ?? "unknown",
				...void 0 !== s.studyId ? { studyId: s.studyId } : {},
				action: n.action,
				clientTimestamp: Date.now() / 1e3,
				sessionId: s.sessionId,
				sequence: s.sequence,
				payload: Dr(n.payload)
			};
			return this.isNoOpRevisit(i, o) ? null : (s.sequence += 1, a.set(s, {
				from: a.get(s)?.from ?? o.sequence,
				to: s.sequence,
				sessionId: s.sessionId
			}), {
				db: i.db,
				record: o
			});
		});
		return i.reduce((e, t) => t ? e.then(() => Or(t.db, t.record)) : e, s.Promise.resolve()).then(() => i.map((e) => e ? xn(e.record.sessionId, e.record.sequence) : null));
	}
	recordSessionAnchored(t, { fileId: a, analysisDate: n, action: r, payload: i }) {
		const s = e[r];
		s ? "session" === s.anchor ? (Rr(r, s.localPayloadKeys, i), this.logFileEvent({
			fileId: a,
			analysisDate: n,
			action: r,
			...void 0 !== i ? { payload: i } : {}
		}, t)) : Tr(`"${r}" is anchored to "${s.anchor}"; use its matching audit entry point`) : Tr(`unknown audit action "${r}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordWorkspaceDurably(e, t, a, n) {
		const r = this.resolveTarget(a);
		return r ? this.recordWorkspaceTargetDurably(r, e, t) : Promise.resolve(!1);
	}
	recordWorkspaceBoundDurably(e, t, a, n) {
		const r = this.targetForBinding(e);
		return r ? this.recordWorkspaceTargetDurably(r, t, a, e) : (Tr("workspace event received an invalid audit workspace binding"), Promise.resolve(!1));
	}
	recordWorkspaceTargetDurably(t, a, n, r) {
		const i = e[a];
		return i ? "workspace" !== i.anchor ? (Tr(`"${a}" is anchored to "${i.anchor}"; use record() or recordFileEvent()`), Promise.resolve(!1)) : (Rr(a, i.localPayloadKeys, n), this.persistBoundRecordDurably(t, this.workspaceEventRecord(t, a, n), r)) : (Tr(`unknown audit action "${a}"; not in AUDIT_EVENT_CONTRACT`), Promise.resolve(!1));
	}
	recordFileEvent({ fileId: t, analysisDate: a, action: n, payload: r }, i) {
		const s = e[n];
		s ? "file" === s.anchor ? (Rr(n, s.localPayloadKeys, r), this.logFileEvent({
			fileId: t,
			analysisDate: a,
			action: n,
			...void 0 !== r ? { payload: r } : {}
		}, i)) : Tr(`"${n}" is anchored to "${s.anchor}"; use record() so it lands where the contract says`) : Tr(`unknown audit action "${n}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordFileEventDurably(t, a) {
		const { action: n, payload: r } = t, i = e[n];
		if (!i) return Tr(`unknown audit action "${n}"; not in AUDIT_EVENT_CONTRACT`), Promise.resolve(!1);
		if ("file" !== i.anchor) return Tr(`"${n}" is anchored to "${i.anchor}"; use record() so it lands where the contract says`), Promise.resolve(!1);
		Rr(n, i.localPayloadKeys, r);
		const s = a ? this.targetForBinding(a) : this.resolveTarget();
		return s ? this.persistBoundRecordDurably(s, this.fileEventRecord(s, t), a) : Promise.resolve(!1);
	}
	log(e, t) {
		const a = this.resolveTarget();
		if (!a) return;
		const { context: n } = a;
		null != n.fileId && null != n.analysisDate && (this.enqueueBoundRecord(a, {
			fileId: n.fileId,
			analysisDate: n.analysisDate,
			username: n.username ?? "unknown",
			...void 0 !== n.studyId ? { studyId: n.studyId } : {},
			action: e,
			clientTimestamp: Date.now() / 1e3,
			sessionId: n.sessionId,
			sequence: n.sequence,
			payload: Dr(t)
		}), this.drainQueue(a.db));
	}
	logWorkspaceEvent(e, t) {
		const a = this.resolveTarget();
		a && (this.enqueueWorkspaceEvent(a, e, t), this.drainQueue(a.db));
	}
	hasSettledMutationAudit(e) {
		const t = e ? this.settledMutationAudits.get(e) : void 0;
		let a = s.currentTransaction;
		for (; a?.parent;) a = a.parent;
		if (!e || !t || !a) return !1;
		if (null === t.transaction) {
			t.transaction = a;
			const n = () => {
				this.settledMutationAudits.get(e) === t && this.settledMutationAudits.delete(e);
			};
			a.on("complete", n), a.on("abort", n);
		}
		return t.transaction === a;
	}
	persistBoundRecordDurably(e, t, a) {
		return s.currentTransaction?.db === e.db && s.currentTransaction.storeNames.includes(e.db.auditLog.name) ? !this.hasSettledMutationAudit(a) && this.hasPendingWritesForDb(e.db) ? Promise.resolve(!1) : (e.context.sequence++, xr(e.db, t).then(() => !0)) : (a && this.settledMutationAudits.delete(a), this.enqueueBoundRecord(e, t), new Promise((a) => {
			this.durabilityWaiters.set(t, a), this.drainQueue(e.db).catch(() => {
				this.resolveDurability(t, !1);
			});
		}));
	}
	enqueueWorkspaceEvent(e, t, a) {
		const n = this.workspaceEventRecord(e, t, a);
		return this.enqueueBoundRecord(e, n), n;
	}
	workspaceEventRecord(e, t, a) {
		const { context: n } = e, r = null != n.fileId && null != n.analysisDate;
		return {
			fileId: 0,
			analysisDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			username: n.username ?? "unknown",
			...void 0 !== n.studyId ? { studyId: n.studyId } : {},
			action: t,
			clientTimestamp: Date.now() / 1e3,
			sessionId: n.sessionId,
			sequence: n.sequence,
			payload: Dr({
				...a,
				workspaceScoped: !0,
				...r ? {
					openFileId: n.fileId,
					openAnalysisDate: n.analysisDate
				} : {}
			})
		};
	}
	logFileEvent(e, t) {
		const a = t ? this.targetForBinding(t) : this.resolveTarget();
		if (!a) return t && Tr("file event received an invalid audit workspace binding"), null;
		const n = this.fileEventRecord(a, e);
		return this.enqueueBoundRecord(a, n), this.drainQueue(a.db), n;
	}
	fileEventRecord(e, { fileId: t, analysisDate: a, action: n, payload: r }) {
		const { context: i } = e;
		return {
			fileId: t,
			analysisDate: a,
			username: i.username ?? "unknown",
			...void 0 !== i.studyId ? { studyId: i.studyId } : {},
			action: n,
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
		const a = this.durabilityWaiters.get(e);
		a && (this.durabilityWaiters.delete(e), a(t));
	}
	async settleWrites(e) {
		for (; this.writeQueue.length > 0;) {
			const t = this.writeQueue.length;
			if (await this.drainQueue(e), this.writeQueue.length >= t) return;
		}
	}
	hasPendingWritesForDb(e) {
		return this.writeQueue.some((t) => {
			const a = this.dbAffinityByRecord.get(t);
			return a?.db === e || a?.db.name === e.name;
		});
	}
	async settleWritesForDb(e, t) {
		if (t && this.stateByBinding.get(t)?.db !== e) return !1;
		if (t && s.currentTransaction?.db === e) {
			if (this.hasSettledMutationAudit(t)) return !0;
			if (this.hasPendingWritesForDb(e)) return !1;
		} else if (await this.settleWrites(e), this.hasPendingWritesForDb(e)) return !1;
		return t && this.settledMutationAudits.set(t, { transaction: null }), !0;
	}
	async settleWritesForReload() {
		return await this.settleWrites(), 0 === this.writeQueue.length;
	}
	drainQueue(e) {
		for (const a of this.writeQueue) {
			const t = this.dbAffinityByRecord.get(a);
			e && t?.db.name === e.name && this.dbAffinityByRecord.set(a, {
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
			let a, n = t.db;
			try {
				if (n.isOpen && !n.isOpen()) {
					if (le(n.name)) throw new Error("Captured audit workspace was deleted.");
					if (!await s.exists(n.name)) throw new Error("Captured audit workspace no longer exists.");
					ge() && Ae() === n || (a = new ie(n.name), await a.open(), n = a);
				}
				await Or(n, e), this.writeQueue.shift(), this.dbAffinityByRecord.delete(e), this.resolveDurability(e, !0), this.retryCount = 0;
			} catch {
				this.resolveDurability(e, !1), this.retryCount++, console.warn("[AuditLog] IndexedDB write failed; retaining event for retry");
				break;
			} finally {
				a?.close();
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
		this.onlineWatchArmed || (this.onlineWatchArmed = !0, h().capabilities.onServerAvailable(() => {
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
		else if (this.watchServerAvailability(), h().capabilities.serverAvailable()) {
			this.isFlushing = !0;
			try {
				let e;
				try {
					e = Ae();
				} catch {
					return;
				}
				const t = await kr({ preserveRequestIdentity: !0 }), a = this.replicationStateFor(e);
				for (let n = 0; n < 20; n++) {
					const n = await e.auditLog.orderBy("id").limit(500).toArray();
					if (0 === n.length) return;
					const r = /* @__PURE__ */ new Map();
					for (const e of n) {
						if (!Mn(e.action) || this.isQuarantined(a, e)) continue;
						const t = Cr(e), n = Fr(t);
						let i = r.get(n);
						i || (i = [], r.set(n, i)), i.push(t);
					}
					const i = /* @__PURE__ */ new Set();
					for (const [e, o] of r) {
						const n = o[0];
						if (!n) continue;
						const r = await this.sendGroup(t, a, {
							key: e,
							fileId: n.fileId,
							analysisDate: n.analysisDate,
							username: n.username,
							studyId: n.studyId,
							events: o
						});
						for (const e of r) i.add(e);
					}
					const s = [];
					for (const e of n) {
						if (null == e.id || !i.has(e.id)) break;
						s.push(e.id);
					}
					if (s.length > 0 && await ae(e, [e.auditLog], async () => {
						await e.auditLog.bulkDelete(s);
					}), 0 === s.length) return;
					if (n.length < 500) return;
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
	async sendGroup(e, t, { key: a, ...n }) {
		const r = await this.sendBatch(e, n);
		if (r.transient) return r.acknowledgedLocalIds;
		if (!r.conflicted) return t.conflictStrikes.delete(a), r.acknowledgedLocalIds;
		const i = (t.conflictStrikes.get(a) ?? 0) + 1;
		if (t.conflictStrikes.set(a, i), i < 3) return r.acknowledgedLocalIds;
		t.conflictStrikes.delete(a);
		const s = [];
		for (const o of n.events) {
			let a = {
				acknowledgedLocalIds: [],
				conflicted: !1,
				transient: !1,
				status: 0
			};
			for (let t = 0; t < 3 && (a = await this.sendBatch(e, {
				...n,
				events: [o]
			}), a.transient); t++);
			a.transient || (a.conflicted ? (t.quarantinedEventKeys.add(Lr(o)), h().sync.recordAuditQuarantine(), console.error(422 === a.status ? "[AuditLog] Server refused an audit event as a contract violation; retained locally and skipped in later batches" : "[AuditLog] Server refused an audit event as a conflicting identity; retained locally and skipped in later batches")) : s.push(...a.acknowledgedLocalIds));
		}
		return s;
	}
	async sendBatch(e, { fileId: t, analysisDate: a, username: n, studyId: r, events: i }) {
		if (0 === i.length) return {
			acknowledgedLocalIds: [],
			conflicted: !1,
			transient: !1,
			status: 0
		};
		try {
			const s = [], o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
			for (const e of i) {
				if (!Mn(e.action)) {
					console.warn("[AuditLog] Retaining event with an unknown action locally");
					continue;
				}
				const t = Number.isFinite(e.clientTimestamp) && e.clientTimestamp > 0 ? e.clientTimestamp : Date.now() / 1e3;
				t !== e.clientTimestamp && console.warn("[AuditLog] Invalid audit timestamp replaced before replication");
				const a = xn(e.sessionId, e.sequence), n = l.get(a);
				if (n) {
					if (!Nr(n, e)) {
						console.error("[AuditLog] Two local audit rows share one identity with different content; retaining the divergent row");
						continue;
					}
					console.warn("[AuditLog] Collapsing a duplicated audit identity before replication"), null != e.id && o.get(a)?.push(e.id);
				} else l.set(a, e), o.set(a, null != e.id ? [e.id] : []), s.push(Cn(e, t));
			}
			if (0 === s.length) return {
				acknowledgedLocalIds: [],
				conflicted: !1,
				transient: !1,
				status: 0
			};
			const c = await e.POST("/api/v1/audit/log", {
				headers: {
					"X-Username": n || "anonymous",
					..."number" == typeof r ? { "X-Study-Id": String(r) } : {}
				},
				body: {
					file_id: t,
					analysis_date: a,
					events: s
				}
			});
			if (c.error) {
				const { status: e } = c.response;
				console.warn(`[AuditLog] Retaining unacknowledged batch (HTTP ${e})`);
				const t = function(e, t) {
					if (409 !== e) return !1;
					const a = t?.detail;
					return "string" == typeof a && a.includes("Audit append conflicted; retry the unchanged batch");
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
function qr(e, t, a, n) {
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
	if (!(n > i && n <= a && a < s)) return {
		ok: !1,
		reason: "not-strictly-inside"
	};
	const [o, l] = function(e) {
		const t = e === je.NAP ? je.NAP : je.MAIN_SLEEP;
		return [t, t === je.MAIN_SLEEP ? je.NAP : t];
	}(r.markerType), c = $r({
		...r,
		offsetTimestamp: n,
		markerType: o
	}), d = $r({
		...r,
		onsetTimestamp: a,
		markerType: l
	}), u = [...e];
	return u.splice(t, 1, c, d), {
		ok: !0,
		markers: Hr(u),
		newIndex: t + 1
	};
}
function zr(e, t, a) {
	const n = e[t];
	if (!n) return {
		ok: !1,
		reason: "out-of-range"
	};
	const r = "next" === a ? t + 1 : t - 1, i = e[r];
	if (!i) return {
		ok: !1,
		reason: "no-neighbor"
	};
	const s = n.onsetTimestamp, o = n.offsetTimestamp, l = i.onsetTimestamp, c = i.offsetTimestamp;
	if (null == s || null == o || null == l || null == c) return {
		ok: !1,
		reason: "no-boundaries"
	};
	const d = Math.min(s, l), u = Math.max(o, c), p = function(e, t) {
		return ka(e) || ka(t) ? je.MAIN_SLEEP : je.NAP;
	}(n, i), m = Math.min(t, r), f = $r({
		...p !== je.MAIN_SLEEP || ka(n) ? n : i,
		onsetTimestamp: d,
		offsetTimestamp: u,
		markerType: p
	}), _ = e.filter((e, a) => a !== t && a !== r);
	return _.splice(m, 0, f), {
		ok: !0,
		markers: Hr(_),
		mergedIndex: m
	};
}
function Br(e) {
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
	return e.filter((e) => e.markerType === je.MAIN_SLEEP).length;
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
	marker_limit_exceeded: ({ after: e }) => e.sleepMarkers.length > ra || e.nonwearMarkers.length > ia,
	split_not_strictly_inside: ({ before: e, payload: t }) => {
		const a = Br(t.periodIndex), n = Br(t.at);
		return null !== a && null !== n && !qr(e.sleepMarkers, a, n, Br(t.firstOffset) ?? n).ok;
	},
	merge_no_neighbor: ({ before: e, payload: t }) => {
		const a = Br(t.periodIndex), n = Vr(t.direction);
		return null !== a && ("prev" === n || "next" === n) && !zr(e.sleepMarkers, a, n).ok;
	},
	mutation_on_read_only_view: ({ context: e }) => !0 === e.readOnlyView,
	undo_beyond_history: ({ context: e }) => void 0 !== e.undoDepth && e.undoDepth <= 0,
	redo_beyond_history: ({ context: e }) => void 0 !== e.redoDepth && e.redoDepth <= 0
};
function ai(t, a) {
	const n = e[t]?.guards ?? [], r = [];
	for (const e of n) {
		const t = ti[e], n = Ne[e];
		t && n && t(a) && r.push({
			guard: e,
			severity: n.severity
		});
	}
	return r;
}
function ni(e, t) {
	const { isInvalidNightImplicit: a, ...n } = e, r = Wr(t.isInvalidNight) ?? e.isInvalidNight;
	return {
		...n,
		isInvalidNight: r,
		...r && !0 === Wr(t.isInvalidNightImplicit) ? { isInvalidNightImplicit: !0 } : {}
	};
}
function ri(e, t) {
	const a = t.stateAfter;
	if (null === a || "object" != typeof a) return {
		state: e,
		reconstructed: !1
	};
	const n = a, r = Xr(n.sleepMarkers), i = Yr(n.nonwearMarkers);
	return null === r || null === i ? {
		state: e,
		reconstructed: !1
	} : { state: {
		...ni(e, n),
		sleepMarkers: r,
		nonwearMarkers: i,
		explicitNoNonwear: Wr(n.explicitNoNonwear) ?? e.explicitNoNonwear,
		needsConsensus: Wr(n.needsConsensus) ?? e.needsConsensus,
		notes: Vr(n.notes) ?? e.notes
	} };
}
const ii = {
	marker_placed: (e, t) => {
		if ("nonwear" === Vr(t.category)) {
			const a = Br(t.startTimestamp), n = Br(t.endTimestamp);
			if (null === a || null === n) return {
				state: e,
				reconstructed: !1
			};
			const r = [...e.nonwearMarkers, {
				startTimestamp: a,
				endTimestamp: n,
				markerIndex: e.nonwearMarkers.length + 1
			}];
			return { state: {
				...e,
				nonwearMarkers: r,
				explicitNoNonwear: !1
			} };
		}
		const a = Br(t.onsetTimestamp), n = Br(t.offsetTimestamp);
		if (null === a || null === n) return {
			state: e,
			reconstructed: !1
		};
		const r = Vr(t.markerType) ?? (i = e.sleepMarkers, (s = e).isInvalidNight && !0 !== s.isInvalidNightImplicit || i.some(ka) ? je.NAP : je.MAIN_SLEEP);
		var i, s;
		const o = [...e.sleepMarkers, {
			onsetTimestamp: a,
			offsetTimestamp: n,
			markerIndex: e.sleepMarkers.length + 1,
			markerType: r
		}];
		return { state: {
			...e,
			sleepMarkers: o
		} };
	},
	marker_moved: (e, t) => {
		const a = t.after;
		if (null === a || "object" != typeof a) return {
			state: e,
			reconstructed: !1
		};
		const n = a, r = Xr(n.sleepMarkers), i = Yr(n.nonwearMarkers);
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
		const a = Br(t.periodIndex), n = t.updates;
		if (null === a || null === n || "object" != typeof n) return {
			state: e,
			reconstructed: !1
		};
		const r = n;
		if ("nonwear" === Vr(t.category)) {
			const t = e.nonwearMarkers.map((e, t) => t === a ? {
				...e,
				...r
			} : e);
			return { state: {
				...e,
				nonwearMarkers: t,
				explicitNoNonwear: Kr(t, e.explicitNoNonwear)
			} };
		}
		const i = e.sleepMarkers.map((e, t) => t === a ? {
			...e,
			...r
		} : e);
		return { state: {
			...e,
			sleepMarkers: i
		} };
	},
	marker_deleted: (e, t) => {
		const a = Br(t.periodIndex);
		return null === a ? {
			state: e,
			reconstructed: !1
		} : "nonwear" === Vr(t.category) ? { state: {
			...e,
			nonwearMarkers: Ur(e.nonwearMarkers.filter((e, t) => t !== a))
		} } : { state: {
			...e,
			sleepMarkers: Ur(e.sleepMarkers.filter((e, t) => t !== a))
		} };
	},
	markers_cleared: (e) => ({ state: {
		...e,
		sleepMarkers: [],
		nonwearMarkers: []
	} }),
	sleep_period_split: (e, t) => {
		const a = Br(t.periodIndex), n = Br(t.at);
		if (null === a || null === n) return {
			state: e,
			reconstructed: !1
		};
		const r = qr(e.sleepMarkers, a, n, Br(t.firstOffset) ?? n);
		return r.ok && r.markers ? { state: {
			...e,
			sleepMarkers: r.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	sleep_period_merged: (e, t) => {
		const a = Br(t.periodIndex), n = Vr(t.direction);
		if (null === a || "prev" !== n && "next" !== n) return {
			state: e,
			reconstructed: !1
		};
		const r = zr(e.sleepMarkers, a, n);
		return r.ok && r.markers ? { state: {
			...e,
			sleepMarkers: r.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	session_start: (e, t) => {
		const a = Xr(t.sleepMarkers), n = Yr(t.nonwearMarkers);
		return null === a || null === n ? {
			state: e,
			reconstructed: !1
		} : {
			state: {
				...ni(e, t),
				sleepMarkers: a,
				nonwearMarkers: n,
				explicitNoNonwear: Wr(t.explicitNoNonwear) ?? e.explicitNoNonwear,
				needsConsensus: Wr(t.needsConsensus) ?? e.needsConsensus,
				notes: Vr(t.notes) ?? e.notes
			},
			reconstructed: void 0 !== t.notes
		};
	},
	markers_saved: (e, t, a) => {
		const n = Br(t.sleepCount), r = Br(t.nonwearCount);
		return null === n || null === r ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			saved: {
				at: a.clientTimestamp ?? null,
				sleepCount: n,
				nonwearCount: r
			}
		} };
	},
	undo: ri,
	redo: ri,
	auto_score_applied: (e, t) => {
		const a = Xr(t.markers);
		return null === a ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: a
		} };
	},
	auto_nonwear_applied: (e, t) => {
		const a = Yr(t.markers);
		return null === a ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			nonwearMarkers: a,
			explicitNoNonwear: Kr(a, e.explicitNoNonwear)
		} };
	},
	consensus_toggled: (e, t) => {
		const a = Wr(t.value);
		return null === a ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			needsConsensus: a
		} };
	},
	invalid_night_toggled: (e, t) => {
		const a = Wr(t.value);
		if (null === a) return {
			state: e,
			reconstructed: !1
		};
		const { isInvalidNightImplicit: n, ...r } = e;
		if (!a) return { state: {
			...r,
			isInvalidNight: !1
		} };
		const i = Ur(e.sleepMarkers.filter((e) => e.markerType !== je.MAIN_SLEEP)), s = !0 === Wr(t.implicit);
		return { state: {
			...r,
			isInvalidNight: !0,
			...s ? { isInvalidNightImplicit: !0 } : {},
			sleepMarkers: i
		} };
	},
	no_nonwear_toggled: (e, t) => {
		const a = Wr(t.value);
		return null === a ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			explicitNoNonwear: a,
			nonwearMarkers: a ? [] : e.nonwearMarkers
		} };
	},
	notes_changed: (e, t) => {
		const a = Vr(t.after);
		return null === a ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			notes: a
		} };
	},
	candidate_copied: ri
};
function si(e, t, a = {}) {
	const n = V(t), r = n.payload ?? {}, i = ii[n.action], s = i ? i(e, r, n) : { state: e }, o = s.state;
	return {
		state: o,
		violations: ai(n.action, {
			before: e,
			after: o,
			event: n,
			payload: r,
			context: a
		}),
		reconstructed: s.reconstructed ?? !0
	};
}
function oi(e) {
	return "object" != typeof e || null === e ? null : "string" == typeof e.action ? V(e) : null;
}
function li(e, t) {
	if ("markers_saved" !== e.action) return !1;
	const a = e.payload ?? {}, n = Br(a.sleepCount), r = Br(a.nonwearCount);
	return null !== n && null !== r && (n !== t.sleepMarkers.length || r !== t.nonwearMarkers.length);
}
function ci(t) {
	if (!Array.isArray(t)) return [];
	const a = [];
	let n = {
		sleepMarkers: [],
		nonwearMarkers: [],
		isInvalidNight: !1,
		explicitNoNonwear: !1,
		needsConsensus: !1,
		notes: "",
		saved: null
	}, r = "unanchored";
	for (const i of t) {
		const t = oi(i), s = t ? si(n, t) : {
			state: n,
			violations: [],
			reconstructed: !1
		};
		n = s.state, null !== t && !0 === e[t.action]?.stateKeyframe && s.reconstructed ? r = "exact" : s.reconstructed || "exact" !== r || (r = "divergent"), "exact" === r && null !== t && li(t, n) && (r = "divergent"), a.push({
			state: n,
			basis: r,
			violations: s.violations
		});
	}
	return a;
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
			main: ka(e)
		})),
		nonwear: (e.nonwearMarkers ?? []).map((e) => ({
			start: e.startTimestamp,
			end: e.endTimestamp
		})),
		isInvalidNight: e.isInvalidNight ?? !1
	};
}
async function pi(e, t = k()) {
	if (0 === e.length) return [];
	const a = await t.settleManualNonwearNights(e.map(ui));
	if (a.length !== e.length) throw new Error(`The manual-nonwear night rule answered ${String(a.length)} settle(s) for ${String(e.length)} night(s).`);
	return a;
}
function mi(e, t) {
	return 0 === t.removed.length ? e : t.kept.map((t, a) => ({
		...e[t],
		markerIndex: a + 1
	}));
}
async function fi(e, t) {
	const a = ci(e), n = e.flatMap((e, t) => {
		const n = e.payload, r = a[t]?.state;
		return "session_start" === e.action && null != n && "boolean" != typeof n.manualNonwearInSleep && void 0 !== r && Array.isArray(n.sleepMarkers) && Array.isArray(n.nonwearMarkers) && n.sleepMarkers.length === r.sleepMarkers.length && n.nonwearMarkers.length === r.nonwearMarkers.length ? [t] : [];
	});
	if (0 === n.length) return a;
	const r = await async function(e, t) {
		return (await pi(e, t)).map((e) => e.removed.length > 0);
	}(n.map((e) => a[e].state), t), i = [...e];
	return n.forEach((t, a) => {
		const n = e[t];
		i[t] = {
			...n,
			payload: {
				...n.payload,
				manualNonwearInSleep: !0 === r[a]
			}
		};
	}), ci(i);
}
function _i(e) {
	return null === e ? L : e;
}
function yi(e) {
	return null == e ? p : e;
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
	const t = (e) => Array.isArray(e) ? e.map(t) : e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, a]) => [e, t(a)])) : e;
	return JSON.stringify(t(e));
}
function bi(e, { date: t, username: a }, n, r) {
	const i = e.filter((e) => e.date === t && e.username === a);
	if (void 0 !== n) {
		const e = _i(n), t = yi(r), a = (e, t) => i.find((a) => a.algorithm === e && a.detectionRule === t);
		return a(e, t) ?? ("__legacy_dr__" !== t ? a(e, "__legacy_dr__") : void 0) ?? (null !== n ? a("__legacy__", "__legacy_dr__") : void 0);
	}
	return i.reduce((e, t) => !e || (t.id ?? 0) < (e.id ?? 0) ? t : e, void 0);
}
function vi(e, t, a, n) {
	return n.transaction("r", n.markers, async () => bi(await n.markers.where("[fileId+date+username]").equals([
		e.fileId,
		e.date,
		e.username
	]).toArray(), e, t, a));
}
async function ki(e, t, a, n, r, i = Ae()) {
	const s = await vi({
		fileId: e,
		date: t,
		username: a
	}, n, r, i);
	return s ? hi(s) : void 0;
}
const Si = [
	"manualNonwearInSleep",
	"periodMetrics",
	"syncStatus"
];
function Ii(e, t, a) {
	const n = Object.fromEntries(Si.filter((e) => e in t).map((e) => [e, t[e]]));
	return a.markers.update(e, n);
}
async function Ei(e, t = Ae(), a, n) {
	const r = t;
	await ae(r, [r.markers], async () => {
		if (a) {
			const t = await r.markers.get(e);
			if (!t || wi(hi(t)) !== wi(a)) return;
		}
		await Ii(e, { syncStatus: "conflict" }, r);
	}, n);
}
function Ai(e) {
	return `${_e.SCORED_VARIANT_WARM}:${String(e)}`;
}
function Ti(e = h().jobs().jobs) {
	if (!ge()) return null;
	const t = Object.values(e).reverse().find((e) => ee(e) && e.workspaceId === Ae().name && e.kind === _e.SCORED_VARIANT_WARM && e.status !== Fe.DONE && e.status !== Fe.CANCELLED);
	return t ? {
		fileId: Number(t.key.split(":").at(-1)),
		done: t.done,
		total: t.total,
		...t.status === Fe.FAILED ? { failed: !0 } : {}
	} : null;
}
function Ri(e, t) {
	if (!ge() || t && Ae() !== t) return;
	const a = (t ?? Ae()).name, n = h().jobs();
	if (!e) return;
	const r = Ai(e.fileId), i = `${a}:${r}`;
	n.jobs[i] && !e.failed || n.update(i, {
		id: i,
		workspaceId: a,
		key: r,
		kind: _e.SCORED_VARIANT_WARM,
		label: "Scoring variants",
		controller: n.jobs[i]?.controller ?? new AbortController(),
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
	for (const a of xi) a(e, t);
}
const Ni = "scored-variant-warm-backfill-v1", Fi = `placement-results-backfill-v${String(2)}`, Li = "placement-results-backfill-generation-v1", Pi = /* @__PURE__ */ new Set();
function ji(e, t, a) {
	const n = a ? Oi.get(a) : void 0;
	if (n?.db !== t) for (const r of Pi) r([e], t);
	else n.files.add(e);
}
const Gi = /* @__PURE__ */ new WeakMap();
async function Hi(e, t = Ae(), a) {
	let n = s.currentTransaction;
	for (; n?.parent;) n = n.parent;
	if (await se(t, [t.projectMeta], async () => {
		const e = await t.projectMeta.get(Li);
		await t.projectMeta.put({
			key: Li,
			revision: (e?.revision ?? 0) + 1
		}), await t.projectMeta.delete(Fi);
	}, a), !n || n.db !== t) {
		for (const n of new Set(e)) ji(n, t, a);
		return;
	}
	let r = Gi.get(n);
	if (!r) {
		r = /* @__PURE__ */ new Set(), Gi.set(n, r);
		const e = r;
		n.idbtrans.addEventListener("complete", () => {
			for (const n of e) ji(n, t, a);
		}, { once: !0 });
	}
	for (const i of e) r.add(i);
}
var $i = "argument,value,context\ndatadir,,not applicable\ndo.report,\"c(2,4,5,6)\",not applicable\nf0,1,not applicable\nf1,542,not applicable\nmode,\"c(1,2,3,4,5,6)\",not applicable\noutputdir,,not applicable\nrawaccfiles_formats,csv,not applicable\nstudyname,,not applicable\nGGIRread_version,could not extract version,not applicable\nGGIRversion,3.0.0,not applicable\nR_version,R version 4.4.3 (2025-02-28),not applicable\nqwindow,\"c(0,24)\",params_247\nqlevels,\"c(0.958333333333333,0.979166666666667,0.993055555555556)\",params_247\nqwindow_dateformat,%d-%m-%Y,params_247\nilevels,c(),params_247\nIVIS_windowsize_minutes,60,params_247\nIVIS_epochsize_seconds,c(),params_247\nIVIS.activity.metric,2,params_247\nIVIS_acc_threshold,20,params_247\nqM5L5,c(),params_247\nMX.ig.min.dur,10,params_247\nM5L5res,10,params_247\nwinhr,\"c(5,10)\",params_247\niglevels,\"c(0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1025,1050,1075,1100,1125,1150,1175,1200,1225,1250,1275,1300,1325,1350,1375,1400,1425,1450,1475,1500,1525,1550,1575,1600,1625,1650,1675,1700,1725,1750,1775,1800,1825,1850,1875,1900,1925,1950,1975,2000,2025,2050,2075,2100,2125,2150,2175,2200,2225,2250,2275,2300,2325,2350,2375,2400,2425,2450,2475,2500,2525,2550,2575,2600,2625,2650,2675,2700,2725,2750,2775,2800,2825,2850,2875,2900,2925,2950,2975,3000,3025,3050,3075,3100,3125,3150,3175,3200,3225,3250,3275,3300,3325,3350,3375,3400,3425,3450,3475,3500,3525,3550,3575,3600,3625,3650,3675,3700,3725,3750,3775,3800,3825,3850,3875,3900,3925,3950,3975,4000,8000)\",params_247\nLUXthresholds,\"c(0,100,500,1000,3000,5000,10000)\",params_247\nLUX_cal_constant,c(),params_247\nLUX_cal_exponent,c(),params_247\nLUX_day_segments,c(),params_247\nwindow.summary.size,10,params_247\nL5M5window,\"c(0,24)\",params_247\ncosinor,TRUE,params_247\nincludedaycrit,1,params_cleaning\nndayswindow,7,params_cleaning\nstrategy,1,params_cleaning\nmaxdur,0,params_cleaning\nhrs.del.start,0,params_cleaning\nhrs.del.end,0,params_cleaning\nincludedaycrit.part5,0.083333333,params_cleaning\nexcludefirstlast.part5,FALSE,params_cleaning\nTimeSegments2ZeroFile,c(),params_cleaning\ndo.imp,TRUE,params_cleaning\ndata_cleaning_file,c(),params_cleaning\nminimum_MM_length.part5,23,params_cleaning\nexcludefirstlast,FALSE,params_cleaning\nincludenightcrit,1,params_cleaning\nexcludefirst.part4,FALSE,params_cleaning\nexcludelast.part4,FALSE,params_cleaning\nmax_calendar_days,0,params_cleaning\nnonWearEdgeCorrection,TRUE,params_cleaning\nnonwear_approach,2023,params_cleaning\nsegmentWEARcrit.part5,0.5,params_cleaning\nsegmentDAYSPTcrit.part5,\"c(0.9,0)\",params_cleaning\noverwrite,FALSE,params_general\nacc.metric,ENMO,params_general\nmaxNcores,c(),params_general\nprint.filename,FALSE,params_general\ndo.parallel,TRUE,params_general\nwindowsizes,\"c(5,900,3600)\",params_general\ndesiredtz,EST,params_general\nconfigtz,c(),params_general\nidloc,1,params_general\ndayborder,0,params_general\npart5_agg2_60seconds,FALSE,params_general\nsensor.location,wrist,params_general\nexpand_tail_max_hours,c(),params_general\nrecordingEndSleepHour,c(),params_general\ndataFormat,raw,params_general\nmaxRecordingInterval,c(),params_general\nextEpochData_timeformat,%d-%m-%Y %H:%M:%S,params_general\ndo.anglex,FALSE,params_metrics\ndo.angley,FALSE,params_metrics\ndo.anglez,TRUE,params_metrics\ndo.zcx,FALSE,params_metrics\ndo.zcy,FALSE,params_metrics\ndo.zcz,FALSE,params_metrics\ndo.enmo,TRUE,params_metrics\ndo.lfenmo,FALSE,params_metrics\ndo.en,FALSE,params_metrics\ndo.mad,FALSE,params_metrics\ndo.enmoa,FALSE,params_metrics\ndo.roll_med_acc_x,FALSE,params_metrics\ndo.roll_med_acc_y,FALSE,params_metrics\ndo.roll_med_acc_z,FALSE,params_metrics\ndo.dev_roll_med_acc_x,FALSE,params_metrics\ndo.dev_roll_med_acc_y,FALSE,params_metrics\ndo.dev_roll_med_acc_z,FALSE,params_metrics\ndo.bfen,FALSE,params_metrics\ndo.hfen,FALSE,params_metrics\ndo.hfenplus,FALSE,params_metrics\ndo.lfen,FALSE,params_metrics\ndo.lfx,FALSE,params_metrics\ndo.lfy,FALSE,params_metrics\ndo.lfz,FALSE,params_metrics\ndo.hfx,FALSE,params_metrics\ndo.hfy,FALSE,params_metrics\ndo.hfz,FALSE,params_metrics\ndo.bfx,FALSE,params_metrics\ndo.bfy,FALSE,params_metrics\ndo.bfz,FALSE,params_metrics\ndo.brondcounts,FALSE,params_metrics\ndo.neishabouricounts,FALSE,params_metrics\nhb,15,params_metrics\nlb,0.2,params_metrics\nn,4,params_metrics\nzc.lb,0.25,params_metrics\nzc.hb,3,params_metrics\nzc.sb,0.01,params_metrics\nzc.order,2,params_metrics\nzc.scale,1,params_metrics\nactilife_LFE,FALSE,params_metrics\nepochvalues2csv,FALSE,params_output\nsave_ms5rawlevels,TRUE,params_output\nsave_ms5raw_format,csv,params_output\nsave_ms5raw_without_invalid,TRUE,params_output\nstorefolderstructure,FALSE,params_output\ntimewindow,WW,params_output\nviewingwindow,1,params_output\ndofirstpage,TRUE,params_output\nvisualreport,TRUE,params_output\nweek_weekend_aggregate.part5,FALSE,params_output\ndo.part3.pdf,TRUE,params_output\noutliers.only,TRUE,params_output\ncriterror,4,params_output\ndo.visual,TRUE,params_output\ndo.sibreport,FALSE,params_output\ndo.part2.pdf,TRUE,params_output\nsep_reports,\",\",params_output\nsep_config,\",\",params_output\nvisualreport_without_invalid,FALSE,params_output\nmvpathreshold,100,params_phyact\nboutcriter,0.8,params_phyact\nmvpadur,\"c(1,5,10)\",params_phyact\nboutcriter.in,0.9,params_phyact\nboutcriter.lig,0.8,params_phyact\nboutcriter.mvpa,0.8,params_phyact\nthreshold.lig,30,params_phyact\nthreshold.mod,100,params_phyact\nthreshold.vig,400,params_phyact\nboutdur.mvpa,\"c(1,5,10)\",params_phyact\nboutdur.in,\"c(1,10,30)\",params_phyact\nboutdur.lig,\"c(1,10,30)\",params_phyact\nfrag.metrics,all,params_phyact\nchunksize,1,params_rawdata\nspherecrit,0.3,params_rawdata\nminloadcrit,72,params_rawdata\nprintsummary,FALSE,params_rawdata\ndo.cal,TRUE,params_rawdata\nbackup.cal.coef,retrieve,params_rawdata\ndynrange,c(),params_rawdata\nminimumFileSizeMB,2,params_rawdata\nrmc.dec,.,params_rawdata\nrmc.firstrow.acc,c(),params_rawdata\nrmc.firstrow.header,c(),params_rawdata\nrmc.header.length,c(),params_rawdata\nrmc.col.acc,\"c(1,2,3)\",params_rawdata\nrmc.col.temp,c(),params_rawdata\nrmc.col.time,c(),params_rawdata\nrmc.unit.acc,g,params_rawdata\nrmc.unit.temp,C,params_rawdata\nrmc.unit.time,POSIX,params_rawdata\nrmc.format.time,%Y-%m-%d %H:%M:%OS,params_rawdata\nrmc.bitrate,c(),params_rawdata\nrmc.dynamic_range,c(),params_rawdata\nrmc.unsignedbit,TRUE,params_rawdata\nrmc.origin,1/1/1970,params_rawdata\nrmc.desiredtz,c(),params_rawdata\nrmc.configtz,c(),params_rawdata\nrmc.sf,c(),params_rawdata\nrmc.headername.sf,c(),params_rawdata\nrmc.headername.sn,c(),params_rawdata\nrmc.headername.recordingid,c(),params_rawdata\nrmc.header.structure,c(),params_rawdata\nrmc.check4timegaps,FALSE,params_rawdata\nrmc.noise,13,params_rawdata\nrmc.col.wear,c(),params_rawdata\nrmc.doresample,FALSE,params_rawdata\ninterpolationType,1,params_rawdata\nimputeTimegaps,TRUE,params_rawdata\nfrequency_tol,0.1,params_rawdata\nrmc.scalefactor.acc,1,params_rawdata\nanglethreshold,5,params_sleep\ntimethreshold,5,params_sleep\nignorenonwear,TRUE,params_sleep\nconstrain2range,TRUE,params_sleep\nHASPT.algo,HDCZA,params_sleep\nHASIB.algo,vanHees2015,params_sleep\nSadeh_axis,,params_sleep\nlongitudinal_axis,c(),params_sleep\nHASPT.ignore.invalid,FALSE,params_sleep\nloglocation,c(),params_sleep\ncolid,1,params_sleep\ncoln1,2,params_sleep\nnnights,c(),params_sleep\nrelyonguider,FALSE,params_sleep\ndef.noc.sleep,1,params_sleep\nsleeplogsep,c(),params_sleep\nsleepwindowType,SPT,params_sleep\npossible_nap_window,\"c(9,18)\",params_sleep\npossible_nap_dur,\"c(15,240)\",params_sleep\n";
const qi = "sleep-scoring:core-answer:", zi = /* @__PURE__ */ new Map();
let Bi = null;
function Wi(e) {
	if (Bi) return Bi;
	const t = [];
	Bi = t;
	try {
		const a = globalThis.localStorage, n = Array.from({ length: a.length }, (e, t) => a.key(t) ?? "");
		for (const r of n) r.startsWith(qi) && (r.startsWith(`${qi}${e}:`) ? t.push(r) : a.removeItem(r));
	} catch {}
	return t;
}
function Vi(e, t, a) {
	const n = "626a6b7093970a44903c3253832801d724d48908c049316cf165502db459372b";
	Wi(n);
	const r = `${qi}${n}:${e}:${t}`;
	let i = zi.get(r);
	if (!i && (i = (async () => {
		try {
			const e = globalThis.localStorage?.getItem(r);
			if (e) return JSON.parse(e);
		} catch {}
		const e = await a();
		try {
			globalThis.localStorage?.setItem(r, JSON.stringify(e)), function(e, t) {
				const a = Wi(e);
				for (a.includes(t) || a.push(t); a.length > 1e3;) {
					const e = a.shift();
					try {
						e && globalThis.localStorage?.removeItem(e);
					} catch {}
				}
			}(n, r);
		} catch {}
		return e;
	})(), i.catch(() => zi.delete(r)), zi.set(r, i), zi.size > 1e3)) {
		const e = zi.keys().next();
		e.done || zi.delete(e.value);
	}
	return i;
}
const Ui = Object.freeze({
	name: "default ELEMENT",
	sha256: G($i),
	csvText: $i
});
function Ki(e) {
	const t = e?.ggir_config;
	if (t && "object" == typeof t) {
		const e = t;
		if ("string" == typeof e.name && "string" == typeof e.csvText && "string" == typeof e.sha256 && G(e.csvText) === e.sha256) return e;
	}
	return Ui;
}
function Qi(e, t) {
	const a = /^"?Sadeh_axis"?,\s*"?([XYZ])"?,/m.exec(e)?.[1] ?? "Y";
	return t?.[{
		X: 0,
		Y: 1,
		Z: 2
	}[a]];
}
function Ji(e, t, a) {
	if (!a || 3 !== a.length || a.some((e) => e.length !== t.length)) return {};
	const n = /* @__PURE__ */ new Map();
	for (let i = 0; i < t.length; i++) n.set(t[i] / 1e3, i);
	const r = a.map((t) => Float64Array.from(e, (e) => t[n.get(e) ?? -1] ?? 0).buffer);
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
	return Vi("ggir-part2-nonwear", G(e ?? ""), async () => (await t.ggirAppConfigSummary(e, !0)).applied.nonwearApproach === Xi.van_hees_2013 ? dt.van_hees_2013 : dt.van_hees_2023);
}
function Zi(e) {
	return Object.hasOwn(ze, e);
}
async function es(e, t) {
	const a = Object.entries(e), n = await Promise.all(a.map(([, e]) => e.windowForNight(t))), r = {};
	return a.forEach(([e], t) => {
		const a = n[t];
		a && Zi(e) && (r[e] = a);
	}), r;
}
function ts(e, t) {
	return Object.entries(e).reduce((e, [a, n]) => ({
		...e,
		...n.fingerprint((Zi(a) ? t[a] : void 0) ?? null)
	}), {});
}
async function as(e, t, a) {
	return (await Promise.all(Object.values(e).map((e) => e.stampInput(t, a)))).reduce((e, t) => ({
		...e,
		...t
	}), {});
}
function ns(e, t) {
	return Object.values(e).flatMap((e) => e.tables(t));
}
const rs = "diary", is = "none", ss = new Set(Object.values(we));
function os(e) {
	if (!e) return [];
	const t = [];
	for (const [a, n] of e) null != a && "" !== a.trim() && t.push({
		onset_time: a,
		offset_time: n ?? null
	});
	return t;
}
function ls(e) {
	if (!e) return [];
	const t = [];
	for (const [a, n] of e) null != a && null != n && "" !== a.trim() && "" !== n.trim() && t.push({
		start_time: a,
		end_time: n
	});
	return t;
}
function cs(e, t) {
	const a = (e) => ({
		source_a: e,
		source_b: "none",
		fusion_policy: "use_source_a",
		apply_nonwear_gate: !1
	});
	switch (e) {
		case Z.DIARY: return;
		case Z.HDCZA: return a("hdcza");
		case Z.L5: return a("l5");
		case Z.LONGEST_BOUT: return a("selected_scorer_longest_bout");
		case Z.EVENT_MARKER: return a("event_marker");
		case Z.ACTIWARE_REST_INTERVAL: return a("actiware_rest_interval");
		case Z.NONE: return a("none");
		case Z.SMART:
			if (t.hasDiary) return;
			return a("lstm_sleep_wake" === (r = t.algorithm) ? "selected_scorer_longest_bout" : n(r) ? "hdcza" : "l5");
		default: return;
	}
	var r;
}
function ds(e) {
	const t = Number.parseInt((e ?? "").split(":")[0] ?? "", 10);
	return Number.isInteger(t) && t >= 0 && t <= 23 ? t : null;
}
function us(e) {
	const t = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime), a = n(e.algorithm) ? void 0 : ps(e), r = n(e.algorithm) && !t ? Da.HDCZA : Da.DIARY;
	return {
		...Ba(e.sleepPeriodDetection),
		...a ?? {
			source_a: r,
			source_b: Da.NONE,
			fusion_policy: Oa
		}
	};
}
function ps(e) {
	if (e.sleepPeriodDetection && !Pa(za(e.sleepPeriodDetection))) {
		const t = Ba(e.sleepPeriodDetection);
		return {
			source_a: t.source_a,
			source_b: t.source_b,
			fusion_policy: t.fusion_policy,
			apply_nonwear_gate: t.apply_nonwear_gate
		};
	}
	const t = e.periodGuider ?? Z.SMART, a = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime);
	return cs(t, {
		algorithm: e.algorithm ?? null,
		hasDiary: a
	});
}
function ms(e) {
	const t = { ruleset: n(e.algorithm) ? F.GGIR_PART4 : e.ruleset ?? "legacy" };
	e.algorithm && ss.has(e.algorithm) && (t.classifier = e.algorithm), null != e.epochLengthSeconds && (t.epoch_length_seconds = e.epochLengthSeconds), null != e.onsetMinConsecutiveSleep && (t.onset_min_consecutive_sleep = e.onsetMinConsecutiveSleep), null != e.offsetMinConsecutiveMinutes && (t.offset_min_consecutive_minutes = e.offsetMinConsecutiveMinutes), e.scorerPostprocessing && (t.scorer_postprocessing = e.scorerPostprocessing);
	const { nonwear_detector: a, nonwear_detectors: r } = gs(e.nonwearDetectors, null, { alwaysNameSingle: !1 });
	if (a && (t.nonwear_detector = a), r && (t.nonwear_detectors = r), e.sleepPeriodDetection) {
		const a = za(e.sleepPeriodDetection);
		t.merge_gap_minutes = a.mergeGapMinutes, t.padding_minutes = a.paddingMinutes, t.min_overlap_jaccard = a.minOverlapJaccard;
	}
	const i = ps(e);
	return i && (t.detection = i), t;
}
const fs = "study_selection", _s = Object.values(dt);
function ys(e) {
	const t = (e) => {
		const t = _s.indexOf(e);
		return -1 === t ? _s.length : t;
	};
	return [...e].sort((e, a) => t(e) - t(a));
}
function gs(e, t, { alwaysNameSingle: a, memberFlags: n }) {
	if (!e || 0 === e.length) return {};
	if (1 === e.length) {
		const [t] = e;
		return a || t !== dt.choi_2011 ? { nonwear_detector: t } : {};
	}
	return {
		nonwear_detectors: ys(e),
		...t ? { nonwear_weight: [...t] } : {},
		...t && n ? { nonwear_member_flags: [...n] } : {}
	};
}
function hs(e) {
	const t = {
		analysis_date: e.analysisDate ?? "",
		epoch_length_seconds: e.epochLengthSeconds ?? m,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (t.choi_nonwear = e.choiNonwear);
	const { nonwear_weight: a, nonwear_member_flags: n } = gs(e.nonwearDetectors, e.nonwearWeight, {
		alwaysNameSingle: !1,
		memberFlags: e.nonwearMemberFlags
	});
	a && (t.nonwear_weight = a), n && (t.nonwear_member_flags = n), e.ggirInvalid && (t.ggir_invalid = Array.from(e.ggirInvalid)), e.ggirHasptAlgo && (t.ggir_haspt_algo = e.ggirHasptAlgo), e.ggirConfigCsv && (t.ggir_config_csv = e.ggirConfigCsv), e.ggirDiaryHasBedlog && (t.ggir_diary_has_bedlog = !0), e.ggirDiaryHasSleeplog && (t.ggir_diary_has_sleeplog = !0), e.sensorNonwear && e.sensorNonwear.length > 0 && (t.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (t.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (t.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (t.diary_in_bed_time = e.diaryBedTime), null != e.diaryOutBedTime && (t.diary_out_bed_time = e.diaryOutBedTime);
	const r = os(e.diaryNaps);
	r.length > 0 && (t.diary_naps = r);
	const i = ls(e.diaryNonwear);
	i.length > 0 && (t.diary_nonwear = i);
	for (const [s, o] of Object.entries(e.guiderWindows ?? {})) o && Zi(s) && (t[ze[s]] = [o.startTimestamp, o.endTimestamp]);
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
	const a = os(e.diaryNaps);
	a.length > 0 && (t.diary_naps = a);
	const n = ls(e.diaryNonwear);
	return n.length > 0 && (t.diary_nonwear = n), t;
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
	], a = (t, a) => {
		const n = e.days.map((e) => e[t] ?? []), r = new Uint32Array(n.length + 1);
		for (const [e, o] of n.entries()) r[e + 1] = r[e] + o.length;
		const i = 1 === n.length ? n[0] : void 0, s = i instanceof a ? i : new a(r[n.length]);
		if (s !== i) for (const [e, o] of n.entries()) s.set(o, r[e]);
		return [s, r];
	}, n = {
		config: e.config,
		days: e.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !t.includes(e))))
	};
	return [
		JSON.stringify(n),
		...a("timestamps", Float64Array),
		...a("activity_counts", Float64Array),
		...a("sleep_scores", Uint8Array),
		...a("choi_nonwear", Uint8Array),
		...a("anglez", Float64Array),
		...a("light", Float64Array),
		...a("temperature", Float64Array),
		...a("heart_rate", Float64Array),
		...a("detach_nonwear", Uint8Array)
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
	const a = {
		onset_timestamp: e.onset_timestamp,
		offset_timestamp: e.offset_timestamp,
		marker_type: e.marker_type,
		marker_index: e.marker_index
	};
	return t && (a.placement = t), a;
}
function Is(e) {
	return {
		kind: "refused",
		reason: e
	};
}
function Es(e, t, a) {
	if (!e) return Is("The placement engine returned no result for this night.");
	const n = e.guider ?? a, r = null == e.guider ? t : {
		...t,
		source_a: e.guider
	}, i = (e.decisions ?? []).map(ks), s = (e, t) => i.find((a) => a.marker_type === e && a.marker_index === t);
	return {
		kind: "placed",
		sleep_markers: (e.sleep_markers ?? []).map((e) => Ss(e, s(e.marker_type, e.marker_index))),
		nap_markers: (e.nap_markers ?? []).map((e) => Ss(e, s(e.marker_type, e.marker_index))),
		notes: e.notes ?? [],
		decisions: i,
		sleep_period_detection_config: r,
		effective_detection_source_a: n,
		invalid_night: e.invalid_night ?? null,
		diary_available: e.diary_available ?? null
	};
}
const As = "Marker placement is unavailable in this build — reload while online to update the local engine.";
async function Ts(e, t) {
	const a = us(e), n = String(a.source_a);
	if (0 === e.timestamps.length) return Is("No activity data");
	const r = function(e) {
		let t;
		if ("variant" in e) {
			const { variant: r, timestamps: i, activityCounts: s, sleepScores: o, analysisDate: c, epochLengthSeconds: d, guiderWindows: u, diary: p, onsetMinConsecutiveSleep: m, offsetMinConsecutiveMinutes: f, choiNonwear: _, nonwearDetectors: y, nonwearWeight: g, nonwearMemberFlags: h, eventMarkerTimestamps: w } = e, b = r.config.rescoring === l.WEBSTER && (n = l.WEBSTER) === l.WEBSTER ? { preset: n } : void 0;
			t = {
				timestamps: i,
				activityCounts: s,
				sleepScores: o,
				...void 0 !== _ ? { choiNonwear: _ } : {},
				...void 0 !== y ? { nonwearDetectors: y } : {},
				...void 0 !== g ? { nonwearWeight: g } : {},
				...void 0 !== h ? { nonwearMemberFlags: h } : {},
				ruleset: r.config.ruleset,
				...void 0 !== b ? { scorerPostprocessing: b } : {},
				analysisDate: c,
				epochLengthSeconds: d,
				...u ? { guiderWindows: u } : {},
				...w ? { eventMarkerTimestamps: w } : {},
				diaryBedTime: p?.diaryInBedTime ?? null,
				diaryOnsetTime: p?.onsetTime ?? null,
				diaryWakeTime: p?.diaryWakeTime ?? null,
				diaryNaps: bs(p?.naps),
				diaryNonwear: bs(p?.nonwear),
				...void 0 !== m ? { onsetMinConsecutiveSleep: m } : {},
				...void 0 !== f ? { offsetMinConsecutiveMinutes: f } : {},
				...(a = r.config.periodSource, a === rs ? { periodGuider: rs } : a === is ? { periodGuider: is } : { sleepPeriodDetection: {
					sourceA: a,
					sourceB: Da.NONE,
					fusionPolicy: Oa,
					applyNonwearGate: !1
				} })
			};
		} else t = e;
		var a, n;
		return vs({
			config: ms(t),
			days: [hs(t), ...(t.contextDays ?? []).filter((e) => e.analysisDate !== (t.analysisDate ?? "")).map(ws)]
		});
	}(e), i = await (e.wasmApiOverride ?? t()).placeMarkers(y(r, r.slice(1).filter((t) => ArrayBuffer.isView(t) && ![e, ...e.contextDays ?? []].some((e) => t === e.timestamps || t === e.activityCounts || t === e.sleepScores || t === e.choiNonwear)).map((e) => e.buffer)));
	return i ? Es((e.analysisDate ? i.results.find((t) => t.analysis_date === e.analysisDate) : void 0) ?? i.results[0], a, n) : Is(As);
}
async function Rs(e, t) {
	const a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = [];
	for (const [c, d] of e.entries()) {
		const e = ms(d);
		if (0 === d.timestamps.length || d.wasmApiOverride) {
			r.push(c);
			continue;
		}
		const t = JSON.stringify(e), i = "legacy" === e.ruleset && 0 === (d.contextDays?.length ?? 0) ? a : n;
		i.set(t, [...i.get(t) ?? [], c]);
	}
	const i = new Array(e.length), s = [...n.values()].flatMap((t) => {
		const a = t.map((t) => e[t]), n = function(e) {
			const t = /* @__PURE__ */ new Map();
			for (const n of e) for (const e of n.contextDays ?? []) t.has(e.analysisDate) || t.set(e.analysisDate, e);
			const a = [...t.values()].sort((e, t) => e.analysisDate.localeCompare(t.analysisDate));
			return e.every((e) => {
				const t = e.contextDays ?? [], n = a.filter((t) => t.analysisDate !== (e.analysisDate ?? ""));
				return t.length === n.length && t.every((e, t) => e === n[t]);
			}) ? a : null;
		}(a);
		return null === n ? (r.push(...t), []) : [{
			group: t,
			members: a,
			context: n
		}];
	}), o = [...r, ...[...a.values()].filter((e) => 1 === e.length).flat()];
	await Promise.all(o.map(async (a) => {
		i[a] = await Ts(e[a], () => t);
	}));
	const l = (e, t, a) => {
		for (const [n, r] of e.entries()) {
			const e = t[n], s = us(e), o = a?.results.find((t) => t.analysis_date === e.analysisDate);
			i[r] = a ? Es(o ?? a.results[n], s, String(s.source_a)) : Is(As);
		}
	};
	return await Promise.all([...[...a.values()].filter((e) => e.length > 1).map(async (a) => {
		const n = a.map((t) => e[t]), r = function(e) {
			const t = e[0];
			if (!t) throw new Error("buildNightsPlacementRequest needs at least one night.");
			return vs({
				config: ms(t),
				days: e.map(hs)
			});
		}(n);
		l(a, n, await t.placeMarkers(y(r, r.slice(1).map((e) => e.buffer))));
	}), ...s.map(async ({ group: e, members: a, context: n }) => {
		const r = vs({
			config: ms(a[0]),
			days: [...a.map(hs), ...n.map(ws)]
		}), i = new Set([...a, ...n].flatMap((e) => [
			e.timestamps,
			e.activityCounts,
			e.sleepScores,
			e.choiNonwear
		])), s = r.slice(1).filter((e) => ArrayBuffer.isView(e) && !i.has(e)).map((e) => e.buffer);
		l(e, a, await t.placeNights(y([...r, a.length], s)));
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
	const t = e, a = Os.filter((e) => function(e, t) {
		return Ds(Ns[e], t);
	}(e, t[e])), n = Fs;
	return Object.fromEntries(a.filter((e) => {
		const r = n[e];
		return void 0 === r || !a.includes(r.field) || t[r.field] === r.value;
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
	return Object.fromEntries(Object.entries(Ps).map(([e, a]) => [e, Ds(a, t[e]) ? t[e] : js[e]]));
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
	return "five_s" === c(e?.sourceType)?.epochFamily;
}
function qs(e) {
	return Object.values(at).includes(e) ? e : b.analysis_paradigm;
}
function zs(e, t) {
	const a = e?.sourceProfileId, n = a ? _[a] ?? null : null;
	return n?.paradigm === t ? n : null;
}
function Bs(e) {
	const t = e?.sourceProfileId;
	return null != t && void 0 !== _[t];
}
function Ws(e, t) {
	const a = e?.sourceProfileId;
	return null != a && _[a]?.sleepAlgorithm === t;
}
function Vs(e, t) {
	return zs(e, qs(t))?.editedRecord ?? ot.sleep_periods;
}
function Us(e, t, a) {
	const n = zs(a, t), r = void 0 === e.nonwearDetectorsGgir ? e : {
		...e,
		nonwearDetectorsGgir: po(e.nonwearDetectorsGgir, a)
	};
	return n ? {
		...r,
		algorithm: n.sleepAlgorithm,
		periodGuider: n.periodGuider ?? e.periodGuider,
		nonwearDetectorsCounts: Js(e.nonwearDetectorsCounts, n.nonwearDetectors, Ks(a)),
		placementFromSource: n.placementFromSource
	} : {
		...r,
		algorithm: Xs(e.algorithm, a),
		placementFromSource: !1
	};
}
function Ks(e) {
	const t = e?.resolvedCapabilities, a = e?.sourceProfileId;
	return void 0 === t || null == a ? [] : (C[a] ?? []).filter((e) => {
		const a = i[e];
		return void 0 === a || !a.every((e) => e.some((e) => t.includes(e)));
	});
}
const Qs = /* @__PURE__ */ new WeakMap();
function Js(e, t, a) {
	const n = `${t.join(",")}|${a.join(",")}`;
	let r = Qs.get(e);
	r || Qs.set(e, r = /* @__PURE__ */ new Map());
	const i = r.get(n);
	if (i) return i;
	const s = Object.freeze(e.filter((e) => t.includes(e) && !a.includes(e)));
	return r.set(n, s), s;
}
function Xs(e, t) {
	const a = (r = t?.sourceType, c(r)?.defaultSleepAlgorithm ?? null);
	var r;
	return null === a || n(e) ? e : a;
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
	const t = e.placementFromSource ? e.periodGuider : (a = e.algorithm, Object.values(_).find((e) => e.sleepAlgorithm === a && null !== e.periodGuider)?.periodGuider ?? void 0);
	var a;
	const n = t ? cs(t, {
		algorithm: e.algorithm,
		hasDiary: !1
	}) : void 0;
	return n ? za({
		...Ba(e.sleepPeriodDetection),
		...n
	}) : e.sleepPeriodDetection;
}
const eo = Os, to = Ls;
function ao(e, t) {
	const a = e[t];
	if (null == a) throw new Error(`The stored Actiware settings lack ${t}; import the file again.`);
	return a;
}
function no(e, t) {
	const a = to(t);
	if (0 === Object.keys(a).length) return e;
	const n = {
		...e,
		...a
	}, r = void 0 === a.wake_threshold_selection ? void 0 : Ms[a.wake_threshold_selection];
	return void 0 !== r && (n.wake_threshold = r), void 0 !== a.actogram_start_seconds && (n.actogram_start_hour = Math.floor(a.actogram_start_seconds / 3600)), n;
}
function ro(e, t) {
	return "nap_detection" === t ? e.nap_detection ?? !1 : "min_nap_minutes" === t ? e.min_nap_minutes ?? 40 : "nap_sensitivity" === t ? e.nap_sensitivity ?? "high" : "actogram_start_seconds" === t ? function(e) {
		return e.actogram_start_seconds ?? 3600 * ao(e, "actogram_start_hour");
	}(e) : e[t];
}
function io(e, t) {
	return eo.every((a) => ro(e, a) === ro(t, a));
}
function so(e, t) {
	return xs.some((a) => ro(e, a) !== ro(t, a));
}
function oo(e, t, a) {
	if (null == t) return t;
	const n = Cs, r = lo(e, t, a).map((e) => [e, n[e]]);
	return {
		...Object.fromEntries(r),
		...to(t)
	};
}
function lo(e, t, a) {
	if (null == t) return [];
	const n = to(t);
	return !a.some((e) => "rest" === e.kind) || so(e, no(e, n)) ? Object.keys(Cs).filter((e) => void 0 === n[e]) : [];
}
const co = Object.freeze([dt.ggir_saved]), uo = {
	[dt.van_hees_2013]: Object.freeze([dt.van_hees_2013]),
	[dt.van_hees_2023]: Object.freeze([dt.van_hees_2023])
};
function po(e, t) {
	const a = Ia(t);
	return !a && e.includes(dt.ggir_saved) && t?.ggirNonwearDetector ? t.ggirNonwearDetector === dt.van_hees_2013 ? uo.van_hees_2013 : uo.van_hees_2023 : a && e.some((e) => e === dt.van_hees_2023 || e === dt.van_hees_2013) ? co : e.every((e) => e === dt.ggir_saved === a) ? e : Js(e, a ? co : e.filter((e) => e !== dt.ggir_saved), []);
}
const mo = "Scores were computed with different settings, so this night can't be auto-scored. Manual scoring still works.";
function fo(e) {
	return B.some((t) => e.startsWith(t));
}
function _o(e, t) {
	const a = "string" == typeof t ? t : "recordedCellId" in t ? t.recordedCellId : t.id, n = e.map((e) => (e?.algorithmResults)?.[a]);
	if (!fo(a)) return {
		status: "ok",
		outputs: n,
		configHash: null
	};
	let r = null, i = "string" != typeof t && "recordedCellId" in t;
	if ("string" == typeof t) {
		const e = (s = a, Gt ??= new Map(Ht().configs.map((e) => [e.id, e])), Gt.get(s));
		r = e?.configHash ?? null, i = void 0 === e;
	} else if (!("recordedCellId" in t)) {
		const e = bt(t);
		if (null === e) throw new Error(`Refused a cube output read for ${a}: not a planned config`);
		r = e.configHash;
	}
	var s;
	let o = null;
	for (const [l, c] of e.entries()) {
		if (void 0 === n[l] || void 0 === c?.algorithmResultHashes) continue;
		const e = c.algorithmResultHashes[a];
		if (void 0 === e) return {
			status: "stale",
			reason: `${a} was stored without its config`
		};
		if (!i && e !== r) return {
			status: "stale",
			reason: `${a} was stored under another config`
		};
		if (null !== o && e !== o) return {
			status: "stale",
			reason: `${a} was stored under two configs`
		};
		o = e;
	}
	return {
		status: "ok",
		outputs: n,
		configHash: o
	};
}
function yo(e) {
	const t = {};
	for (const a of Object.keys(e.algorithmResults ?? {})) t[a] = !0;
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
	const a = go(t) || e.map((e) => Object.keys(e.algorithmResults)[0]).find((e) => void 0 !== e) || null;
	return null === a ? {
		key: a,
		status: "ok",
		configHash: null
	} : (() => {
		const t = _o(e, a);
		return "stale" === t.status ? {
			key: a,
			status: "stale",
			reason: mo
		} : {
			key: a,
			status: "ok",
			configHash: t.configHash
		};
	})();
}
const vo = ho([]);
function ko(e) {
	const t = wo(e), a = /* @__PURE__ */ new Map(), n = [...new Set(t.flatMap((e) => Object.keys(e.algorithmResults)))].filter(fo);
	return Object.assign((e) => {
		const n = go(e);
		let r = a.get(n);
		return r || (r = bo(t, e), a.set(n, r)), r;
	}, { cellIds: n });
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
	const a = _o(e, t.key);
	return "stale" === a.status || null !== a.configHash && null !== t.configHash && a.configHash !== t.configHash ? {
		status: "stale",
		reason: mo
	} : {
		status: "ok",
		key: t.key,
		outputs: a.outputs
	};
}
function Io(e) {
	const t = {
		algorithmResults: e?.algorithmResults ?? {},
		algorithmResultHashes: e?.algorithmResultHashes
	};
	return Object.keys(t.algorithmResults).flatMap((e) => {
		const a = _o([t], fo(e) ? { recordedCellId: e } : e), n = "ok" === a.status ? a.outputs[0] : void 0;
		return void 0 === n ? [] : [[e, n]];
	});
}
function Eo(e, t) {
	const a = {};
	for (const [n, r] of Object.entries(e ?? {})) {
		const e = t(r, n);
		void 0 !== e && (a[n] = e);
	}
	return a;
}
function Ao(e) {
	const t = {}, a = {};
	for (const { cubeConfig: n, results: r } of e ?? []) {
		const e = bt(n);
		if (null === e) throw new Error(`Refused a cube output for ${n.id}: not a planned config`);
		t[e.cellId] = r.slice(0), a[e.cellId] = e.configHash;
	}
	return {
		algorithmResults: t,
		algorithmResultHashes: a
	};
}
function To(e) {
	const t = "string" == typeof e.algoKey ? _t(e.algoKey) : null;
	if (null !== t) return {
		algoKey: t,
		algoVersion: ft(t),
		paramsHash: ""
	};
	const a = bt(e.cubeConfig);
	return null === a ? null : {
		algoKey: a.cellId,
		algoVersion: a.implementationVersion,
		paramsHash: a.configHash
	};
}
function Ro(e) {
	const t = e?.timestamps, a = t ? new Float64Array(t) : /* @__PURE__ */ new Float64Array(0), n = 0 === a.length ? e?.ggirTimestamps : void 0, r = Boolean(n?.byteLength), i = r ? e?.ggirSib : void 0;
	return {
		timestamps: r ? new Float64Array(n) : a,
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
	#a;
	constructor(e) {
		this.#a = e;
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
		const t = e.map(([, e]) => e), a = await (this.#a ? this.#a.timeSemantics(t) : ((e) => k().timeSemantics(e))(t));
		return e.forEach(([e, t], n) => {
			const r = a[n];
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
	resolveInstant(e, t, a, n = No) {
		return this.answer({
			op: "resolveInstant",
			clock: e,
			baseDate: t,
			role: a,
			geometry: n
		});
	}
	resolveSpan(e, t, a, n, r = No) {
		return this.answer({
			op: "resolveSpan",
			start: e,
			end: t,
			baseDate: a,
			role: n,
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
	attributeEpisode(e, t, a = No.dayStartHour) {
		return this.answer({
			op: "attributeEpisode",
			role: e,
			seed: t,
			dayStartHour: a
		});
	}
	window(e, t, a = No.dayStartHour) {
		return this.answer({
			op: "window",
			kind: e,
			analysisDate: t,
			dayStartHour: a
		});
	}
	nightDatesInSpan(e, t, a, n = No.dayStartHour) {
		return this.answer({
			op: "nightDatesInSpan",
			dates: [...e],
			start: t,
			end: a,
			dayStartHour: n
		});
	}
	classifyLocalClock(e, t, a) {
		return this.answer({
			op: "classifyLocalClock",
			date: e,
			clock: t,
			zone: a
		});
	}
	zoneOffsetsInYear(e, t) {
		return this.answer({
			op: "zoneOffsetsInYear",
			zone: e,
			year: t
		});
	}
	dstTransitionOnNight(e, t, a = No.dayStartHour) {
		return this.answer({
			op: "dstTransitionOnNight",
			zone: e ?? null,
			analysisDate: t,
			dayStartHour: a
		});
	}
	applyDstPolicy(e, t, a, n) {
		return this.answer({
			op: "applyDstPolicy",
			classification: e,
			clock: t,
			foldPolicy: a,
			gapPolicy: n
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
	markedTimeInBedMinutes(e, t, a) {
		return this.answer({
			op: "markedTimeInBedMinutes",
			onset: e,
			offset: t,
			epochSeconds: a
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
	resolveEditedTime(e, t, a, n, r) {
		return this.answer({
			op: "resolveEditedTime",
			time: e,
			currentDate: t,
			reference: a,
			otherBoundary: n,
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
	for (let a = 0; a < 16; a += 1) {
		const a = e(t);
		if (!await t.fillAnswers()) return a;
	}
	throw new Error(`time semantics did not settle within ${String(16)} passes`);
}
async function Po(e, t, a, n = No.dayStartHour, r) {
	return await Lo((r) => r.nightDatesInSpan(e, t, a, n), new Fo(r)) ?? [];
}
function jo() {
	return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
const Go = async (e, t, a) => await Lo((a) => a.zoneOffsetsInYear(e, t), new Fo(a)) ?? [], Ho = (e, t, a = No.dayStartHour, n) => Lo((n) => n.dstTransitionOnNight(e, t, a), new Fo(n)), $o = [
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
}, zo = {
	ampm_search_gap_max_hours: 18,
	ampm_search_gap_min_hours: 2,
	ampm_search_window_margin_hours: 2
}, Bo = /[^\p{L}\p{N}]+/gu;
function Wo(e) {
	return e.normalize("NFKC").trim().toLowerCase().replace(Bo, "_").replace(/^_+|_+$/g, "");
}
function Vo(e) {
	return e ? e.includes("") ? e.split("").map((e) => e.trim()).filter(Boolean) : e.trim().length > 0 ? [e.trim()] : [] : [];
}
function Uo(e, t) {
	const a = new Map(t.map((e) => [e.key, e.label])), n = /* @__PURE__ */ new Map();
	for (const [r, i] of Object.entries(e)) {
		const e = Vo(i), t = a.get(r);
		if (t) for (const a of e) {
			const e = Wo(a);
			if (0 === e.length) continue;
			const r = n.get(e);
			r ? r.labels.push(t) : n.set(e, {
				value: a,
				labels: [t]
			});
		}
	}
	return [...n.entries()].filter(([, e]) => e.labels.length > 1).map(([e, t]) => ({
		key: `duplicate_column:${e}`,
		message: `Column "${t.value}" is mapped to ${t.labels.join(" and ")}. Use each source column once.`
	}));
}
function Ko(e, t, a) {
	if (void 0 === a) return [];
	const n = new Map(t.map((e) => [e.key, e.label])), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
	for (const s of a) {
		const e = s.trim(), t = Wo(e);
		if (0 === t.length) continue;
		const a = r.get(t);
		a ? i.set(t, a) : r.set(t, e);
	}
	return Object.entries(e).map(([e, t]) => {
		const a = Vo(t), r = n.get(e);
		return r && 0 !== a.length ? a.map((e) => {
			const t = Wo(e), a = i.get(t);
			return a ? {
				key: `duplicate_header:${t}`,
				message: `Mapped column "${a}" for ${r} appears more than once in the current preview. Rename duplicate columns before importing.`
			} : null;
		}).filter((e) => null !== e) : [];
	}).flat();
}
function Qo(e, t, a) {
	if (void 0 === a) return [];
	const n = new Map(t.map((e) => [e.key, e.label])), r = new Set(a.map(Wo));
	return Object.entries(e).map(([e, t]) => {
		const a = Vo(t), i = n.get(e);
		return i && 0 !== a.length ? a.map((t) => {
			const a = Wo(t);
			return 0 === a.length || r.has(a) ? null : {
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
		const t = Wo(e), a = /^nap_?([0-9]+|one|two|three|first|second|third|a|b|c)?_?(start|end|from|until|begin|begins|stop|stops|onset|offset)(?:_?(datetime|date_time|date|time))?$/.exec(t) ?? /^nap_?(start|end|from|until|begin|begins|stop|stops|onset|offset)(?:_?(datetime|date_time|date|time))?_?([0-9]+|one|two|three|first|second|third|a|b|c)$/.exec(t);
		if (a) {
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
			].includes(a[1] ?? ""), t = e ? a[1] : a[2], n = Xo(e ? a[3] : a[1]);
			if (null === n || n > 50) return null;
			const r = [
				"start",
				"from",
				"begin",
				"begins",
				"onset",
				"time"
			].includes(t ?? "") ? "start" : "end", i = e ? a[2] : a[3], s = "datetime" === i || "date_time" === i ? "datetime" : "date" === i ? "date" : "time";
			return {
				family: "nap",
				index: n,
				role: r,
				evidence: s,
				fieldKey: `nap_${String(n)}_${r}${"time" === s ? "" : `_${s}`}`
			};
		}
		const n = /^(?:nonwear|nw|offbody|device_removed)_?([0-9]+|one|two|three|first|second|third|a|b|c)?_?(start|end|from|until|reason|context)(?:_?(datetime|date_time|date|time))?$/.exec(t) ?? /^(?:nonwear|nw|offbody|device_removed)_?(start|end|from|until|reason|context)(?:_?(datetime|date_time|date|time))?_?([0-9]+|one|two|three|first|second|third|a|b|c)$/.exec(t);
		if (!n) return null;
		const r = [
			"start",
			"end",
			"from",
			"until",
			"reason",
			"context"
		].includes(n[1] ?? ""), i = r ? n[1] : n[2], s = Xo(r ? n[3] : n[1]);
		if (null === s || s > 50) return null;
		const o = ["start", "from"].includes(i ?? "") ? "start" : ["end", "until"].includes(i ?? "") ? "end" : "reason", l = r ? n[2] : n[3], c = "reason" === o ? "value" : "datetime" === l || "date_time" === l ? "datetime" : "date" === l ? "date" : "time";
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
	const a = {};
	for (const n of t) {
		const t = e[el(n)];
		a[n.key] = "night_date" === t || "period_start_day" === t ? Zo(n) : "explicit_only";
	}
	return {
		dateRules: a,
		pendingGroups: Object.keys(e).filter((t) => "ask_per_night" === e[t]).sort()
	};
})(Object.freeze({
	[rt]: D.diary_main_sleep_date_rule,
	[it]: D.diary_nap_date_rule,
	[st]: D.diary_nonwear_date_rule
})).dateRules, D.diary_day_boundary_hour, D.diary_dst_fold_policy, D.diary_dst_gap_policy, new Set(Yo.flatMap((e) => [
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
const tl = /* @__PURE__ */ new Map(), al = /* @__PURE__ */ new Set();
let nl = 0;
function rl(e, t) {
	const a = t?.diaryTemporalPolicy;
	var n, r;
	void 0 !== a && Number.isFinite(e) && (r = a, (void 0 === (n = tl.get(e)) || n.dayBoundaryHour !== r.dayBoundaryHour || n.mainSleepDateRule !== r.mainSleepDateRule || n.napDateRule !== r.napDateRule || n.nonwearDateRule !== r.nonwearDateRule || n.dstFoldPolicy !== r.dstFoldPolicy || n.dstGapPolicy !== r.dstGapPolicy) && (tl.set(e, a), function() {
		nl += 1;
		for (const e of al) e();
	}()));
}
function il(e) {
	return (null == e ? void 0 : tl.get(e)) ?? function() {
		const e = h().scoring(), t = e;
		for (const a of E) {
			if (!a.startsWith("diary_")) continue;
			const e = f[a].storeKeys.zustand;
			if (!e || null !== Be(a, t[e])) throw new Error("The persisted study configuration has an incomplete diary temporal policy.");
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
async function pl(e, t, a) {
	const n = t ?? Ae(), [r, i] = await Promise.all([Fc(e, n), a ?? bc(e, n).then((e) => e?.seriesRevision ?? 0)]);
	if (0 === r.length) return null;
	const s = `${i}|${r.length}|${r[0]}|${r[r.length - 1]}`;
	let o = dl.get(n);
	const l = o?.get(e);
	if (l && l.dateKey === s) return l.promise;
	o || (o = /* @__PURE__ */ new Map(), dl.set(n, o));
	const c = o, d = async function(e, t, a) {
		const [n, r] = await Promise.all([Mc(e, t[0], a), Mc(e, t[t.length - 1], a)]);
		if (!n || !r) return null;
		const i = Ro(n).timestamps, s = Ro(r).timestamps;
		return 0 === i.length || 0 === s.length ? null : {
			start: 1e3 * i[0],
			end: 1e3 * s[s.length - 1]
		};
	}(e, r, n).catch((t) => {
		throw c.get(e)?.promise === d && c.delete(e), t;
	});
	return o.set(e, {
		dateKey: s,
		promise: d
	}), d;
}
function ml(e, t, a) {
	if (rl(e.fileId, e.importMappingProvenance), null === t) return e;
	const n = {
		diaryInBedTime: e.diaryInBedTime ?? null,
		diaryOnsetTime: e.diaryOnsetTime ?? null,
		diaryWakeTime: e.diaryWakeTime ?? null
	}, { ampm_search_gap_min_hours: r, ampm_search_gap_max_hours: i, ampm_search_window_margin_hours: s } = zo, o = a.correctDiaryAmPm({
		inBed: n.diaryInBedTime,
		onset: n.diaryOnsetTime,
		wake: n.diaryWakeTime,
		onsetAnchor: qo.onset.map(({ tsField: e }) => n[e]).find(Boolean) ?? null,
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
function fl(e, t, a) {
	return Lo((a) => ml(e, t, a), new Fo(a));
}
function _l(e, t, a) {
	return Lo((a) => e.map((e) => ml(e, t, a)), new Fo(a));
}
const yl = {
	diary_in_bed_time: (e) => e.diaryInBedTime,
	diary_onset_time: (e) => e.diaryOnsetTime,
	diary_wake_time: (e) => e.diaryWakeTime,
	diary_out_of_bed_time: (e) => e.diaryOutOfBedTime
};
function gl(e, t) {
	if (!e) return null;
	const a = e.decisionOverlayJson?.[t];
	if ("string" == typeof a && "" !== a) return a;
	const n = e.ampmCorrectionsJson?.[t];
	if ("string" == typeof n && "" !== n) return n;
	const r = yl[t](e);
	return "string" == typeof r && "" !== r ? r : null;
}
async function hl(e, t, a = k()) {
	const n = [
		"diary_in_bed_time",
		"diary_out_of_bed_time",
		"diary_onset_time",
		"diary_wake_time"
	], r = [...e].flatMap((e) => n.map((t) => null === gl(e, t) ? 0 : 1));
	return Vi("ggirDiaryLogShape", `${t ?? ""}:${r.join("")}`, () => a.ggirDiaryLogShape(Uint8Array.from(r), t));
}
function wl(e, t) {
	for (const a of qo[e]) {
		const e = gl(t, a.dbColumn);
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
	row(e, t, a) {
		this.rows.push({
			store: e,
			change: t,
			...a
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
T.TIMESTAMP_MS, T.AXIS_X, T.AXIS_Y, T.AXIS_Z, T.VECTOR_MAGNITUDE, T.TEMPERATURE;
const Al = Uint8Array.of(83, 67, 68, 49);
function Tl(e) {
	const t = JSON.stringify({
		v: "v6",
		choiAxis: e.choiAxis,
		extras: e.extras ?? {}
	});
	let a = 2166136261;
	for (let n = 0; n < t.length; n++) a ^= t.charCodeAt(n), a = Math.imul(a, 16777619) >>> 0;
	return a.toString(16).padStart(8, "0");
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
	const a = new Uint8Array(t);
	return a.set(e.subarray(0, t)), a;
}
async function Cl(e, t, a) {
	if (!Ml()) return;
	const n = Tl(t), r = await (await (await Dl(!0)).getFileHandle(Ol(e, n), { create: !0 })).createWritable();
	try {
		const e = await async function(e) {
			const t = new TextEncoder(), a = [], n = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4));
			n.setUint32(0, e.size, !0), a.push(new Uint8Array(n.buffer));
			for (const [r, i] of e) {
				const e = t.encode(r), n = i.sadeh_actilife.length;
				let s = 0;
				i.detach_nonwear && (s |= 1), i.sadeh_ggir && (s |= 2), i.ck_ggir && (s |= 4), i.nonwear_choi_2011 && (s |= 8), i.lstm_sleep_wake && (s |= 16);
				const o = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(7));
				o.setUint16(0, e.length, !0), o.setUint32(2, n, !0), o.setUint8(6, s), a.push(new Uint8Array(o.buffer), e), a.push(xl(i.sadeh_actilife, n), xl(i.sadeh_original, n), xl(i.ck_actilife, n), xl(i.ck_original, n), xl(i.consensus_majority_vote, n), xl(i.nonwear, n)), i.detach_nonwear && a.push(xl(i.detach_nonwear, n)), i.sadeh_ggir && a.push(xl(i.sadeh_ggir, n)), i.ck_ggir && a.push(xl(i.ck_ggir, n)), i.nonwear_choi_2011 && a.push(xl(i.nonwear_choi_2011, n)), i.lstm_sleep_wake && a.push(xl(i.lstm_sleep_wake, n));
			}
			return async function(e, t) {
				let a = t, n = 0;
				"undefined" != typeof CompressionStream && (a = await async function(e) {
					if ("undefined" == typeof CompressionStream) return e;
					const t = new Blob([new Uint8Array(e)]).stream().pipeThrough(new CompressionStream("gzip")), a = await new Response(t).arrayBuffer();
					return new Uint8Array(a);
				}(t), n |= 1);
				const r = new Uint8Array(e.length + 1 + a.length);
				return r.set(e, 0), r[e.length] = n, r.set(a, e.length + 1), r;
			}(Al, Ye(a));
		}(a);
		await r.write(e);
	} finally {
		await r.close();
	}
}
async function Nl(e, t) {
	if (!Ml()) return null;
	const a = Tl(t);
	let n, r;
	try {
		n = await Dl(!1);
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	try {
		r = await n.getFileHandle(Ol(e, a), { create: !1 });
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	const i = await r.getFile(), s = new Uint8Array(await i.arrayBuffer());
	try {
		return await async function(e) {
			const t = await Ze(Al, e), a = new DataView(t.buffer, t.byteOffset, t.byteLength), n = new TextDecoder();
			let r = 0;
			const i = a.getUint32(r, !0);
			r += 4;
			const s = /* @__PURE__ */ new Map();
			for (let o = 0; o < i; o++) {
				const e = a.getUint16(r, !0);
				r += 2;
				const i = a.getUint32(r, !0);
				r += 4;
				const o = a.getUint8(r);
				r += 1;
				const l = n.decode(t.subarray(r, r + e));
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
		return console.warn("[opfs-scored] cache decode failed; deleting the corrupt entry:", o instanceof Error ? o.message : o), await n.removeEntry(Ol(e, a)).catch((e) => {
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
	const a = Fl(e), n = Fl(t);
	return n !== a ? n > a ? t : e : (t.id ?? 0) > (e.id ?? 0) ? t : e;
}
function Pl(e) {
	const t = /* @__PURE__ */ new Map();
	for (const a of e) {
		const e = t.get(a.date), n = a.username === yt;
		e && "auto_score" !== e.username && n || t.set(a.date, "auto_score" !== e?.username || n ? Ll(e, a) : a);
	}
	return t;
}
function jl(e, t, a = !1) {
	const n = /* @__PURE__ */ new Map();
	for (const r of e) r.username !== t || a && !be(r) || n.set(r.date, Ll(n.get(r.date), r));
	return n;
}
function Gl(e) {
	const t = /* @__PURE__ */ new Map();
	for (const a of e) {
		let e = t.get(a.date);
		e || t.set(a.date, e = /* @__PURE__ */ new Map()), e.set(a.username, Ll(e.get(a.username), a));
	}
	return t;
}
function Hl(e) {
	const t = [];
	for (const a of e) if ("auto_score" !== a.username) for (const e of a.nonwearMarkers) null != e.startTimestamp && null != e.endTimestamp && t.push({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	});
	return t;
}
const $l = [];
function ql(e) {
	return e ? e instanceof ArrayBuffer ? new Float64Array(e, 0, Math.floor(e.byteLength / Float64Array.BYTES_PER_ELEMENT)) : e : $l;
}
const zl = /* @__PURE__ */ new WeakMap();
function Bl(e, t) {
	"number" == typeof t && t > 0 && zl.set(e, t);
}
function Wl(e, t) {
	const a = (e?.epochResolutions?.find((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId))?.epochLengthSeconds ?? t?.epochLengthSeconds ?? void 0;
	return "number" == typeof a && a > 0 ? a : void 0;
}
const Vl = fe("epoch_5s");
async function Ul(e, t, a) {
	return Wl(t.day, t.file) ?? await Jl(e, m, a);
}
function Kl(e) {
	return Wl(e.day, e.file) ?? m;
}
function Ql(e) {
	return Wl(void 0, e) ?? m;
}
async function Jl(e, t, a) {
	const n = ql(e), r = function(e) {
		return zl.get(ql(e));
	}(n);
	return void 0 !== r ? r : n.length < 2 ? t : await (a ?? k()).medianGapSeconds(Float64Array.from(n)) ?? t;
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
async function Zl(e, t, a = Ae()) {
	const n = await a.diaryEntries.where("[fileId+analysisDate]").equals([e, t]).first();
	return n ? Yl(n) : null;
}
async function ec(e, t = Ae()) {
	return (await t.diaryEntries.where("fileId").equals(e).toArray()).map(Yl);
}
const tc = 12e4;
var ac = class extends Error {
	category = fn;
	constructor() {
		super("A completed import already uses this filename for different content. Rename the selected file and try again, or delete the completed import in Data Settings first."), this.name = "FileIngestFilenameConflictError";
	}
}, nc = class extends Error {
	category = fn;
	constructor() {
		super("A recording already in this workspace was offered again, changed. It was not imported, and nothing was overwritten: the file and its scoring are as they were. To use the changed recording, export your work first, then delete the file and import it again."), this.name = "FileIngestRecordingRevisedError";
	}
}, rc = class extends Error {
	category = hn;
	constructor() {
		super("This file is already being imported in another tab. Wait for that import to finish, then try again."), this.name = "FileIngestInProgressError";
	}
}, ic = class extends Error {
	category = hn;
	constructor() {
		super("This import no longer owns its incomplete local record. Retry the import."), this.name = "FileIngestOwnershipLostError";
	}
};
const sc = Object.keys(Ua), oc = sc.filter((e) => !Ja.has(e));
function lc(e) {
	return [e.files, ...sc.map((t) => e[t])];
}
async function cc(e, t, a = !1) {
	ul(t, e);
	const n = await async function(e, t) {
		const a = new El("file_cascade"), n = await e.diaryEntries.where("fileId").equals(t).toArray(), r = await e.diaryOccurrences.where("fileId").equals(t).toArray(), i = await e.stagedDiaryEntries.where("attachedFileId").equals(t).toArray();
		await e.diaryEntries.bulkDelete(n.map((e) => e.id)), await e.diaryOccurrences.bulkDelete(r.map((e) => e.recordSha256)), await e.stagedDiaryEntries.bulkDelete(i.map((e) => e.id));
		for (const s of n) a.row("diaryEntries", "deleted", {
			fileId: t,
			sourceKey: s.sourceKey ?? null,
			analysisDate: s.analysisDate,
			rowId: s.id
		});
		for (const s of r) a.row("diaryOccurrences", "deleted", {
			fileId: t,
			sourceKey: s.sourceKey,
			analysisDate: s.analysisDate
		});
		for (const s of i) a.row("stagedDiaryEntries", "deleted", {
			fileId: t,
			sourceKey: s.sourceKey,
			analysisDate: s.analysisDate,
			rowId: s.id
		});
		return {
			counts: {
				diaryEntries: n.length,
				diaryOccurrences: r.length,
				stagedDiaryEntries: i.length
			},
			receipt: a.build()
		};
	}(e, t), r = await Promise.all(oc.filter((e) => !a || "walLog" !== e).map(async (a) => {
		const n = Xa(e, a).where(Ua[a]).equals(t);
		if ("walLog" === a) return [a, await n.filter((e) => "audit_append" !== e.op).delete()];
		if ("markers" !== a) return [a, await n.delete()];
		const r = function(e) {
			return e.reduce((e, t) => e + (t.sleepMarkers?.length ?? 0) + (t.nonwearMarkers?.length ?? 0), 0);
		}(await e.markers.where("fileId").equals(t).toArray());
		return await n.delete(), [a, r];
	})), i = {
		...Object.fromEntries(r),
		...n.counts,
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
async function uc(e, t, a = Ae(), n = Date.now()) {
	(function(e, t) {
		if (0 === e.length || 0 === t.length) throw new Error("Local ingest identity is invalid.");
	})(e.sourceContentHash, t), xe().catch(() => {});
	const r = a;
	return Ve([...lc(r), r.studySettings], async () => {
		const a = await r.files.where("sourceContentHash").equals(e.sourceContentHash).toArray(), i = a.find(De);
		if (null != i?.id) return await Kc(i, r), {
			kind: "already_complete",
			record: i
		};
		const s = e.aw5RecordingKey ? await r.files.where("aw5RecordingKey").equals(e.aw5RecordingKey).toArray() : [];
		if (s.some(De)) throw new nc();
		const o = await r.files.where("filename").equals(e.filename).first();
		if (o && De(o)) throw new ac();
		const l = /* @__PURE__ */ new Map();
		for (const e of [
			...a,
			...s,
			...o ? [o] : []
		]) null != e.id && "incomplete" === e.ingestState && l.set(e.id, e);
		const c = [...l.values()].find((e) => e.ingestAttemptId === t);
		if (null != c?.id) return await r.files.update(c.id, { ingestLeaseExpiresAt: n + tc }), {
			kind: "started",
			guard: {
				fileId: c.id,
				attemptId: t
			},
			recovered: !1
		};
		if ([...l.values()].find((e) => (e.ingestLeaseExpiresAt ?? 0) > n)) throw new rc();
		for (const e of l.values()) null != e.id && (await Ke({
			op: "file_delete",
			fileId: e.id,
			payload: { kind: "incomplete_ingest_recovery" }
		}), await dc(r, e.id));
		const d = await r.files.add({
			...e,
			ingestState: "incomplete",
			ingestAttemptId: t,
			ingestLeaseExpiresAt: n + tc
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
async function pc(e, t = Ae(), a = Date.now()) {
	const n = t;
	await n.transaction("rw", n.files, async () => {
		const t = await n.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new ic();
		await n.files.update(e.fileId, { ingestLeaseExpiresAt: a + tc });
	});
}
async function mc(e, t = Ae(), a) {
	const n = t;
	return Ve([n.files, n.studySettings], async () => {
		const t = await n.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new ic();
		const r = e.fileId;
		return await n.files.where(":id").equals(r).modify((e) => {
			e.ingestState = "complete", delete e.ingestAttemptId, delete e.ingestLeaseExpiresAt;
		}), await Ke({
			op: "file_put",
			fileId: r,
			payload: { kind: "incomplete_ingest_finalize" }
		}), await Kc(t, n), await Hi([r], n, a), r;
	}, n, a);
}
async function fc(e, t = Ae()) {
	const a = t;
	return Ve(lc(a), async () => {
		const t = await a.files.get(e.fileId);
		return t ? "incomplete" === t.ingestState && t.ingestAttemptId === e.attemptId && (await Ke({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_rollback" }
		}), await dc(a, e.fileId), !0) : (n = await cc(a, e.fileId), Object.values(n).reduce((e, t) => e + t, 0) > 0 && (await Ke({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_orphan_cleanup" }
		}), !0));
		var n;
	}, a);
}
async function _c(e, t) {
	const a = [], n = await Jl(e.timestamps, null, t) ?? (e.timestamps.byteLength > 0 ? e.epochResolutions?.find((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId)?.epochLengthSeconds : null) ?? null;
	if (null !== n && new Float64Array(e.timestamps).length > 0 && a.push({
		resolutionId: `counts_${n}s`,
		epochLengthSeconds: n,
		category: "count_sleep_wake",
		sourceType: 60 === n ? "epochs_60s" : "actigraph_epoched_csv",
		derivedFromResolutionId: null,
		aggregationMethod: null,
		backingFields: "counts"
	}), null !== n && n > 0 && 60 !== n && 60 % n == 0) {
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
			epoch_seconds: n,
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
		for (const [a, n] of Io(e)) {
			const e = Array.from(new Uint8Array(n));
			e.length !== d || d === c ? o[a] = (await t.aggregateEpochSeries({
				target_seconds: 60,
				series: u,
				event_markers: [],
				sleep_scores: e
			})).sleep_scores : o[a] = e;
		}
		const p = (e) => l.series.channels.find((t) => t.name === e)?.counts ?? [];
		a.push({
			resolutionId: "counts_60s",
			epochLengthSeconds: 60,
			category: "count_sleep_wake",
			sourceType: "epochs_60s",
			derivedFromResolutionId: `counts_${String(n)}s`,
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
	return e.ggirTimestamps && new Float64Array(e.ggirTimestamps).length > 0 && a.push({
		resolutionId: "ggir_5s",
		epochLengthSeconds: 5,
		category: "ggir_sleep_period",
		sourceType: "epochs_5s_ggir",
		derivedFromResolutionId: null,
		aggregationMethod: "ggir_epoch_metrics",
		backingFields: "ggir"
	}), e.lstmTimestamps30s && new Float64Array(e.lstmTimestamps30s).length > 0 && a.push({
		resolutionId: "lstm_30s",
		epochLengthSeconds: 30,
		category: "lstm_sleep_wake",
		sourceType: null,
		derivedFromResolutionId: null,
		aggregationMethod: "model_window",
		backingFields: "lstm"
	}), a;
}
async function yc(e = Ae(), t) {
	let a = await (t?.participantKeys ? e.files.where(O).anyOf([...new Set(t.participantKeys.flatMap((e) => [Me(e), ...X({ filename: e })]))]).distinct().filter((e) => "local" === e.source) : t?.onlyFileIds ? e.files.where(":id").anyOf([...t.onlyFileIds]).filter((e) => "local" === e.source) : e.files.where("source").equals("local")).toArray();
	if (t?.participantKeys) {
		const n = [...new Set(a.map(pe).filter((e) => !t.participantKeys.includes(e)))];
		n.length && (a = [...a.filter((e) => !n.includes(pe(e))), ...await e.files.where(W).anyOf(n).filter((e) => "local" === e.source).toArray()]);
	}
	return (!0 === t?.includeIncomplete ? a : a.filter(De)).map((e) => {
		const t = e.participantId ?? Ie(e.filename) ?? void 0;
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
	if (e) return (await t.files.where("sourceContentHash").equals(e).toArray()).find(De);
}
async function wc(e, t = Ae(), a) {
	if (e) return (await t.files.where("fileHash").equals(e).toArray()).find((e) => De(e) && (void 0 === a || e.sourceContentHash === a));
}
async function bc(e, t = Ae()) {
	return t.files.get(e);
}
async function vc(e, t, a = k()) {
	const n = await a.shiftDate(e, t);
	if (void 0 === n) throw new RangeError(`Not a calendar date: ${e}`);
	return n;
}
async function kc(e, t = Ae(), a) {
	const [n] = await Ic([e], t, void 0, a);
	return n;
}
async function Sc(e, t = k()) {
	let a = e.epochResolutions;
	if (a) {
		if (void 0 !== e.algorithmResults && a.some((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId && 60 !== e.epochLengthSeconds && 60 % e.epochLengthSeconds == 0)) {
			const n = await _c(e, t);
			a = [...a.filter((e) => !e.derivedData), ...n.filter((e) => e.derivedData)];
		}
	} else a = await _c(e, t);
	return {
		epochResolutions: a,
		previousDate: await vc(e.date, -1, t)
	};
}
async function Ic(e, t = Ae(), a, n) {
	const r = t, i = new Set(e.map((e) => e.fileId));
	for (const d of i) ul(d, r);
	const s = ve(n), o = a ?? await Promise.all(e.map((e) => Sc(e, s))), l = await Promise.all(e.map(async (e, t) => {
		const { displayNonwear: a, ...n } = e;
		let r = o[t].epochResolutions;
		if (r.some((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId && 60 !== e.epochLengthSeconds && 60 % e.epochLengthSeconds == 0) && !function(e, t) {
			const a = t.find((e) => "counts_60s" === e.resolutionId)?.derivedData, n = a?.data.timestamps.length ?? 0;
			return !(!a || 0 === n) && [
				"axisX",
				"axisY",
				"axisZ",
				"vectorMagnitude",
				"temperature",
				"eventMarkers"
			].every((t) => !e[t]?.byteLength || a.data[t].length === n) && Io(e).every(([e, t]) => {
				if (!t.byteLength) return !0;
				const r = _o([{ algorithmResults: a.algorithmResults }], { recordedCellId: e });
				return "ok" === r.status && r.outputs[0]?.length === n;
			}) && (!e.nonwearResults?.byteLength || a.nonwearResults?.length === n);
		}(e, r)) {
			const t = await _c(e, s);
			r = [...r.filter((e) => "counts_60s" !== e.resolutionId), ...t.filter((e) => e.derivedData)];
		}
		return {
			activityDay: {
				...n,
				epochResolutions: r
			},
			previousDate: o[t].previousDate
		};
	})), c = await ae(r, [
		r.activityDays,
		r.scoredVariantMasks,
		r.files
	], async () => {
		await Dc(r, [...i]);
		const e = [];
		for (const { activityDay: t, previousDate: a } of l) await r.scoredVariantMasks.bulkDelete([[t.fileId, t.date], [t.fileId, a]]), await r.activityDays.where("[fileId+date]").equals([t.fileId, t.date]).delete(), e.push(await r.activityDays.add(t));
		return e;
	}, n);
	for (const d of i) ul(d, r);
	return c;
}
async function Ec(e, t, a, n = Ae(), r) {
	await se(n, [n.files], () => n.files.where(":id").equals(e).modify((e) => {
		const n = new Set(e.circadianSignalDates ?? []);
		for (const a of t) n.delete(a);
		for (const t of a) n.add(t);
		e.circadianSignalDates = [...n].sort();
	}), r);
}
async function Ac(e, t, a, n = Ae(), r) {
	const i = n;
	await ae(i, [
		i.activityDays,
		i.physicalActivityFileSummaries,
		i.files
	], async () => {
		await i.activityDays.where("[fileId+date]").equals([e, t]).modify((e) => {
			Object.assign(e, a), delete e.displayNonwear;
		}), await i.physicalActivityFileSummaries.where("fileId").equals(e).delete(), await Oc(i, [e]), await i.files.where(":id").equals(e).modify((e) => {
			e.nonwearBandGeneration = (e.nonwearBandGeneration ?? 0) + 1, e.navigationFacts && delete e.navigationFacts.bands;
		});
	}, r);
}
async function Tc(e, t, a = Ae(), n, r = ve(n)) {
	const i = a, o = [...t.keys()], l = await s.waitFor(Promise.all(o.map((e) => vc(e, -1, r))));
	ul(e, i), await ae(i, [
		i.activityDays,
		i.scoredVariantMasks,
		i.files
	], async () => {
		for (const [a, n] of o.entries()) {
			const r = t.get(n), s = new Set(Object.entries(r).flatMap(([e, t]) => void 0 === t ? [e] : []));
			await i.activityDays.where("[fileId+date]").equals([e, n]).modify((e, t) => {
				t.value = Object.fromEntries(Object.entries({
					...e,
					...r
				}).filter(([e]) => !s.has(e)));
			}), await i.scoredVariantMasks.bulkDelete([[e, n], [e, l[a]]]);
		}
		await Dc(i, [e]);
	}, n), ul(e, i);
}
async function Rc(e, t, a, n, r = Ae(), i) {
	const s = r;
	await s.transaction("rw", s.files, s.activityDays, async () => {
		const r = await s.files.get(e);
		r && (r.seriesRevision ?? 0) === n.seriesRevision && (r.nonwearBandGeneration ?? 0) === n.nonwearBandGeneration && (i?.throwIfAborted(), await s.activityDays.where("[fileId+date]").equals([e, t]).modify({ displayNonwear: a }));
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
async function Mc(e, t, a = Ae(), n) {
	return n ? (await Wc(e, a, n)).get(t) : a.activityDays.where("[fileId+date]").equals([e, t]).first();
}
const xc = /* @__PURE__ */ new WeakMap();
function Cc(e, t = Ae(), a) {
	const n = t;
	return (a ? Promise.resolve(a.file) : n.files.get(e)).then((t) => {
		const a = t?.seriesRevision ?? 0;
		let r = xc.get(n);
		r || xc.set(n, r = /* @__PURE__ */ new Map());
		const i = r.get(e);
		if (i?.revision === a) return i.verdicts;
		const s = [], o = Y(n.activityDays.where("fileId").equals(e), (e) => {
			s.push(yo(e));
		}).then(() => ko(s)), l = {
			revision: a,
			verdicts: o
		};
		return r.set(e, l), o.catch(() => {
			r.get(e) === l && r.delete(e);
		}), o;
	});
}
async function Nc(e, t, a, n, r = Ae(), i, o) {
	const l = r, c = await q(async function(e, t = k()) {
		const a = vc(e, 1, t);
		return s.currentTransaction ? s.waitFor(a) : a;
	}(t, i), o);
	return o?.throwIfAborted(), !!await async function(e, t, a, n = Ae()) {
		return (await Promise.all([t, a].map((t) => n.activityDays.where("[fileId+date]").equals([e, t]).count()))).some((e) => e > 0);
	}(e, t, c, l) && se(l, [l.scoredVariantMasks], async () => {
		const r = await l.scoredVariantMasks.get([e, t]), i = void 0 !== n && null != r && r.diaryFingerprint !== n && (null != r.diaryFingerprint || n.startsWith("guider-v2:") || n.startsWith("warm-v3:"));
		return !(i || 0 !== Object.keys(a).length || void 0 !== n && null == r?.diaryFingerprint) || (await l.scoredVariantMasks.put({
			fileId: e,
			date: t,
			masks: i ? { ...a } : {
				...r?.masks,
				...a
			},
			...void 0 !== r?.diaryFingerprint ? { diaryFingerprint: r.diaryFingerprint } : {},
			...void 0 !== n ? { diaryFingerprint: n } : {}
		}), !0);
	}, o);
}
async function Fc(e, t = Ae()) {
	return (await t.activityDays.where("[fileId+date]").between([e, ""], [e, "￿"], !0, !0).keys()).map((e) => e[1]);
}
function Lc(e, t = !1) {
	const a = t ? e?.filter(be) : void 0;
	let n;
	for (const r of a?.length ? a : e ?? []) n = Ll(n, r);
	return n;
}
async function Pc(e, t = Ae()) {
	return t.markerProvenance.bulkGet([...e]);
}
async function jc(e, t, a = Ae(), n = !1) {
	return jl(await Gc(e, t, a), t, n);
}
async function Gc(e, t, a) {
	const n = a.markers.where("[fileId+date+username]"), r = await n.between([e, s.minKey], [e, s.maxKey]).uniqueKeys();
	return (await n.anyOf(r.filter((e) => e[2] === t)).toArray()).map(hi);
}
async function Hc(e, t = Ae()) {
	return (await t.markers.where("fileId").equals(e).toArray()).map(hi);
}
async function $c(e, t = Ae()) {
	return Hl(await Hc(e, t));
}
async function qc(e, t = Ae(), a) {
	const [n, r] = await Promise.all([Xc(e, t), a ? Hl(a) : $c(e, t)]);
	return [...n.map((e) => ({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	})), ...r];
}
async function zc(e, t, a = Ae()) {
	return function(e, t) {
		const a = /* @__PURE__ */ new Map();
		for (const n of e) {
			if (n.username !== t) continue;
			const e = a.get(n.date);
			e ? e.push(n) : a.set(n.date, [n]);
		}
		return a;
	}(await Gc(e, t, a), t);
}
function Bc(e) {
	return e({});
}
function Wc(e, t = Ae(), a) {
	return t.transaction("r", a ? [t.files, t.activityDays] : [t.activityDays], async () => {
		const n = a ? await t.files.get(e) : void 0, r = n ? n.seriesRevision ?? 0 : null;
		if (a?.days && a.db === t && a.fileId === e && a.revision === r) return a.days;
		const i = await t.activityDays.where("fileId").equals(e).primaryKeys(), s = await t.activityDays.bulkGet(i), o = /* @__PURE__ */ new Map();
		for (const e of s) e && o.set(e.date, e);
		return a && Object.assign(a, {
			db: t,
			fileId: e,
			revision: r,
			days: o
		}), o;
	});
}
var Vc = class extends Error {
	category = _n;
	constructor() {
		super("Stored GGIR import refusals could not be read; the existing records were kept."), this.name = "GgirImportRefusalsStorageError";
	}
};
function Uc(e) {
	if (!e || "object" != typeof e || !("ggirImportRefusals" in e)) return [];
	const t = e[mn];
	if (Array.isArray(t)) {
		const e = t.filter((e) => null != e && "object" == typeof e && "filename" in e && "string" == typeof e.filename && "reason" in e && "string" == typeof e.reason && "category" in e && Sn.includes(e.category));
		if (e.length === t.length) return [...new Map(e.map((e) => {
			const t = "ggir-folder" === e.category ? {
				...e,
				filename: yn
			} : e;
			return [JSON.stringify([t.filename, t.category]), t];
		})).values()];
	}
	throw new Vc();
}
function Kc(e, t) {
	return async function(e, t = Ae(), a) {
		(e.length || void 0 !== a) && await async function(e, t, a) {
			await Ve([t.studySettings], async () => {
				const n = await t.studySettings.where("key").equals("study").first();
				if (void 0 !== a.importedFilenames && !Uc(n).some((e) => a.importedFilenames?.includes(e.filename))) return;
				const r = "existing" === a.coreSettings && n ? {
					sleepDetectionRule: n.sleepDetectionRule,
					nightStartHour: n.nightStartHour,
					nightEndHour: n.nightEndHour,
					defaultAlgorithm: n.defaultAlgorithm,
					...void 0 === n.sleepPeriodDetection ? {} : { sleepPeriodDetection: n.sleepPeriodDetection }
				} : e, { [u]: i, ...o } = n?.extraSettings ?? {}, l = {
					...r,
					sleepDetectionRule: (p = r.sleepDetectionRule, Object.values(Ge).includes(p) ? p : D.sleep_detection_rule),
					extraSettings: "merge" === a.extraSettings ? {
						...o,
						...e.extraSettings
					} : e.extraSettings
				}, c = await s.waitFor(qe(JSON.stringify(l))), d = {
					key: "study",
					...l,
					...a.refusals ? { [mn]: Uc({ [mn]: [...Uc(n), ...a.refusals] }).filter((e) => !a.importedFilenames?.includes(e.filename)) } : {},
					contentHash: c,
					lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
				};
				var p;
				await Ke({
					op: "settings_put",
					payload: {
						settings: l,
						contentHash: c,
						prevContentHash: n?.contentHash,
						...a.refusals ? { [mn]: Uc(d) } : {},
						lastModifiedAt: d.lastModifiedAt
					}
				}), await async function(e, t, a) {
					t?.id ? await e.studySettings.update(t.id, a) : await e.studySettings.add(a);
				}(t, n, d);
			}, t);
		}({
			sleepDetectionRule: D.sleep_detection_rule,
			nightStartHour: D.night_start_hour,
			nightEndHour: D.night_end_hour,
			defaultAlgorithm: D.default_algorithm,
			extraSettings: {}
		}, t, {
			coreSettings: "existing",
			extraSettings: "merge",
			refusals: e,
			...void 0 === a ? {} : { importedFilenames: a }
		});
	}([], t, "string" == typeof e ? [e] : [e.filename, ...Ia(e) ? [yn] : []]);
}
async function Qc(e = Ae()) {
	return e.studySettings.where("key").equals("study").first();
}
async function Jc(e, t, a = Ae(), n) {
	if (!t.size) return;
	const r = [...t];
	await Ve([a.sensorNonwear], async () => {
		await Ue(r.map(([t, a]) => ({
			op: "sensor_nonwear_put",
			fileId: e,
			payload: {
				analysisDate: t,
				periods: a
			}
		}))), await async function(e, t, a) {
			await e.sensorNonwear.where("[fileId+analysisDate]").anyOf(a.map(([e]) => [t, e])).delete(), await e.sensorNonwear.bulkAdd(a.flatMap(([e, a]) => a.map((a, n) => ({
				...a,
				fileId: t,
				analysisDate: e,
				periodIndex: n
			}))));
		}(a, e, r);
	}, a, n);
}
async function Xc(e, t = Ae()) {
	return t.sensorNonwear.where("fileId").equals(e).toArray();
}
async function Yc(e, t, a, n = Ae()) {
	return (await Xc(e, n)).filter((e) => e.startTimestamp <= a && e.endTimestamp >= t).sort((e, t) => e.startTimestamp - t.startTimestamp);
}
function Zc(e) {
	const t = {
		fileId: e.fileId,
		date: e.date,
		appVersion: e.appVersion,
		results: e.results,
		...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {}
	}, a = To(e);
	if (null !== a) return {
		...t,
		...a
	};
	throw new Error(`Refused an algorithm run for ${String(e.algoKey ?? e.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
}
async function ed(e, t = Ae(), a) {
	return await async function(e, t, a) {
		const n = t, i = await s.waitFor(r(e.results));
		return Ve([n.algorithmRuns], async () => {
			const t = await n.algorithmRuns.where("[fileId+date+algoKey+algoVersion+paramsHash]").equals([
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
					contentHash: i
				}
			}), {
				id: t.id,
				inserted: !1,
				contentHash: i
			};
			const a = {
				fileId: e.fileId,
				date: e.date,
				algoKey: e.algoKey,
				algoVersion: e.algoVersion,
				paramsHash: e.paramsHash,
				appVersion: e.appVersion,
				...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {},
				results: e.results,
				contentHash: i,
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			}, r = await n.algorithmRuns.add(a);
			return await Ke({
				op: "algorithm_run_put",
				fileId: e.fileId,
				payload: {
					kind: "insert",
					id: r,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					appVersion: e.appVersion,
					contentHash: i,
					byteLength: e.results.byteLength
				}
			}), {
				id: r,
				inserted: !0,
				contentHash: i
			};
		}, n, a);
	}(Zc(e), t, a);
}
async function td(e, t, a) {
	return await async function(e, t, a) {
		if (0 === e.length) return [];
		const n = t ?? Ae(), i = Promise.all(e.map((e) => r(e.results))), o = await (s.currentTransaction ? s.waitFor(i) : i);
		return Ve([n.algorithmRuns], async () => {
			const t = (e) => [
				e.fileId,
				e.date,
				e.algoKey,
				e.algoVersion,
				e.paramsHash
			], a = /* @__PURE__ */ new Map(), r = await n.algorithmRuns.where("[fileId+date+algoKey+algoVersion+paramsHash]").anyOf(e.map(t)).toArray();
			for (const e of r) {
				const n = JSON.stringify(t(e));
				null == e.id || a.has(n) || a.set(n, e.id);
			}
			const i = /* @__PURE__ */ new Map(), s = e.map((e, n) => {
				const r = JSON.stringify(t(e)), s = a.get(r);
				if (void 0 !== s) return { existingId: s };
				const o = i.get(r);
				return void 0 !== o ? { sameAs: o } : (i.set(r, n), { insert: !0 });
			}), l = (/* @__PURE__ */ new Date()).toISOString(), c = e.flatMap((e, t) => "insert" in s[t] ? [{
				fileId: e.fileId,
				date: e.date,
				algoKey: e.algoKey,
				algoVersion: e.algoVersion,
				paramsHash: e.paramsHash,
				appVersion: e.appVersion,
				...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {},
				results: e.results,
				contentHash: o[t],
				createdAt: e.createdAt ?? l
			}] : []), d = await n.algorithmRuns.bulkAdd(c, { allKeys: !0 }), u = /* @__PURE__ */ new Map();
			let p = 0;
			s.forEach((e, t) => {
				"insert" in e && u.set(t, d[p++]);
			});
			const m = s.map((e, t) => "insert" in e ? {
				id: u.get(t),
				inserted: !0,
				contentHash: o[t]
			} : {
				id: "existingId" in e ? e.existingId : u.get(e.sameAs),
				inserted: !1,
				contentHash: o[t]
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
					contentHash: o[t],
					byteLength: e.results.byteLength
				} : {
					kind: "dedup_hit",
					existingId: m[t].id,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					contentHash: o[t]
				}
			}))), m;
		}, n, a);
	}(e.map(Zc), t, a);
}
async function ad(e, t, a, n = Ae()) {
	const r = n.auditLog;
	return a ? r.where("[fileId+analysisDate+username]").equals([
		e,
		t,
		a
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
function nd(e, t, a) {
	return 0 === e.fileId && e.payload?.openFileId === t && e.payload?.openAnalysisDate === a;
}
async function rd(e, t, a = Ae()) {
	return (await a.auditLog.where("[fileId+analysisDate+username]").between([
		0,
		"",
		""
	], [
		0,
		"￿",
		"￿"
	], !0, !0).toArray()).filter((a) => nd(a, e, t)).sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
}
async function id() {
	return Ae().auditLog.orderBy("id").toArray();
}
async function sd(e, t = Ae()) {
	return t.dailyGgirSummaries.where("[fileId+analysisDate]").between([e, ""], [e, "￿"]).toArray();
}
async function od(e, t) {
	const a = await Ae().dailyGgirSummaries.where("[fileId+analysisDate]").equals([e, t]).first();
	return a ? [a] : [];
}
async function ld(e, t = Ae(), a) {
	const n = t, r = n.dailyGgirSummaries, i = Array.isArray(e) ? e : [e];
	0 !== i.length && await ae(n, [r, n.files], () => async function(e, t) {
		const a = e.dailyGgirSummaries, n = /* @__PURE__ */ new Map();
		for (const i of t) n.set(`${i.fileId}::${i.analysisDate}`, i);
		const r = await Promise.all([...n.values()].map(async (e) => {
			const t = await a.where("[fileId+analysisDate]").equals([e.fileId, e.analysisDate]).first();
			return null != t?.id ? {
				...e,
				id: t.id
			} : e;
		}));
		await a.bulkPut(r), await Oc(e, [...new Set(t.map((e) => e.fileId))]);
	}(n, i), a);
}
export { Ql as $, Ar as $n, _t as $r, Ys as $t, Yc as A, Ki as An, ka as Ar, jo as At, ed as B, Ii as Bn, Ft as Br, Ao as Bt, Hc as C, ts as Cn, za as Cr, rl as Ct, Qc as D, Yi as Dn, Ta as Dr, Qo as Dt, yc as E, Zi as En, Aa as Er, Wo as Et, Nc as F, Ci as Fn, Pt as Fr, xo as Ft, Ic as G, bi as Gn, tt as Gr, Eo as Gt, pc as H, yi as Hn, ea as Hr, ho as Ht, Tc as I, Mi as In, Ot as Ir, Co as It, Bc as J, fi as Jn, lt as Jr, ao as Jt, Jc as K, wi as Kn, nt as Kr, lo as Kt, Ac as L, Ai as Ln, Ct as Lr, Ro as Lt, nd as M, Hi as Mn, va as Mr, Po as Mt, sd as N, Ni as Nn, Et as Nr, Lo as Nt, Pc as O, Ji as On, Ea as Or, No as Ot, Ec as P, Ti as Pn, St as Pr, Go as Pt, Ul as Q, Gr as Qn, pt as Qr, po as Qt, Lc as R, Ri as Rn, xt as Rr, To as Rt, bc as S, ns as Sn, Wa as Sr, sl as St, Uc as T, as as Tn, Ra as Tr, Uo as Tt, fc as U, ki as Un, yt as Ur, ko as Ut, td as V, _i as Vn, Nt as Vr, So as Vt, kc as W, vi as Wn, et as Wr, go as Wt, Zl as X, mi as Xn, dt as Xr, Vs as Xt, ec as Y, pi as Yn, ct as Yr, Zs as Yt, Vl as Z, di as Zn, ut as Zr, no as Zt, Fc as _, Is as _n, En as _r, hl as _t, uc as a, so as an, Hn as ar, jl as at, qc as b, Ts as bn, qa as br, fl as bt, mc as c, Bs as cn, Zn as cr, Nl as ct, Mc as d, Gs as dn, fn as dr, bl as dt, ft as ei, $s as en, Sr as er, Jl as et, Wc as f, fs as fn, An as fr, Sl as ft, ad as g, gs as gn, Rn as gr, ll as gt, jc as h, ds as hn, In as hr, ol as ht, Sc as i, Us as in, ar as ir, Pl as it, rd as j, Vi as jn, Sa as jr, Ho as jt, Xc as k, Qi as kn, Ia as kr, Fo as kt, hc as l, js as ln, Gn as lr, Cl as lt, zc as m, ys as mn, Dn as mr, gl as mt, ac as n, zs as nn, wr as nr, Wl as nt, Oc as o, io as on, Kn as or, Gl as ot, id as p, hs as pn, mn as pr, vl as pt, Rc as q, hi as qn, ot as qr, oo as qt, ic as r, qs as rn, tr as rr, Kl as rt, Kc as s, Ws as sn, Wn as sr, Ll as st, tc as t, Ye as ti, to as tn, Er as tr, Bl as tt, wc as u, Hs as un, jn as ur, kl as ut, $c as v, us as vn, Xa as vr, pl as vt, Cc as w, es as wn, Ba as wr, Ko as wt, gc as x, cs as xn, Pa as xr, _l as xt, od as y, Rs as yn, Qa as yr, cl as yt, ld as z, Ei as zn, Mt as zr, vo as zt };
