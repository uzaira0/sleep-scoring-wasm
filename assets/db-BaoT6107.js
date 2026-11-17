import { $n as e, $t as t, Ar as n, B as a, Bn as r, Br as i, Bt as s, Cn as o, Fn as l, Fr as c, Ft as d, Gn as u, Ht as p, It as m, J as f, Jn as _, Jt as y, Kn as g, Kt as h, Lr as w, Lt as b, Mr as v, Mt as k, N as S, Nn as I, Nt as E, Pn as A, Pr as T, Pt as R, Q as D, Rt as O, Sn as M, Sr as x, Tn as C, Tt as N, Ut as F, V as L, Vt as P, Wt as j, X as G, Xn as H, Xt as $, Yn as q, Yt as B, Z as z, Zt as W, _ as V, _r as U, an as K, at as Q, br as J, bt as X, c as Y, cn as Z, d as ee, dn as te, en as ne, er as ae, et as re, f as ie, fn as se, h as oe, hr as le, in as ce, jr as de, jt as ue, kr as pe, l as me, ln as fe, lr as _e, lt as ye, m as ge, mn as he, n as we, nn as be, nr as ve, ot as ke, p as Se, pn as Ie, pr as Ee, qn as Ae, qt as Te, rn as Re, rt as De, tn as Oe, tr as Me, u as xe, un as Ce, vr as Fe, vt as Le, wn as Pe, wt as je, xr as Ge, xt as He, yr as $e, yt as qe, z as Be, zt as ze } from "./background-jobs-yM6RprLt.js";
import { i as We, n as Ve, t as Ue } from "./wal-BC--GWjY.js";
const Ke = [
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
var Qe = class extends Error {
	name = "BackupCapacityError";
	reason;
	constructor(e) {
		super(`Backup ${"source" === e ? "file" : "expanded data"} exceeds the local byte limit.`), this.reason = e;
	}
};
const Je = new Uint8Array([31, 139]);
function Xe(e) {
	let t = 0;
	for (const r of e) t += r.length;
	const n = new Uint8Array(t);
	let a = 0;
	for (const r of e) n.set(r, a), a += r.length;
	return n;
}
async function Ye(e, t) {
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
			const a = e instanceof Uint8Array ? new Blob([e]) : e, r = new Uint8Array(await a.slice(0, Je.length).arrayBuffer());
			n?.throwIfAborted();
			let i = a.stream();
			if ((s = r).length >= 2 && s[0] === Je[0] && s[1] === Je[1]) {
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
					if (c += e.byteLength, c > t) throw new Qe("expanded");
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
const Ze = {
	off: "off",
	actiware: "actiware",
	screens: "screens"
}, et = {
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
}, tt = {
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
}, at = "main_sleep", rt = "naps", it = "nonwear", st = {
	sleep_periods: "sleep_periods",
	rest_intervals: "rest_intervals"
}, ot = {
	number_60s_epochs: "60s_epochs",
	ggir_5s: "ggir_5s"
}, lt = {
	HDCZA: "HDCZA",
	HorAngle: "HorAngle",
	NotWorn: "NotWorn",
	MotionWare: "MotionWare",
	HLRB: "HLRB"
}, ct = {
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
}, dt = {
	diary: "diary",
	hdcza: "hdcza",
	l5: "l5",
	selected_scorer_first_last: "selected_scorer_first_last",
	selected_scorer_longest_bout: "selected_scorer_longest_bout",
	quiet_bout: "quiet_bout",
	event_marker: "event_marker",
	actiware_rest_interval: "actiware_rest_interval",
	none: "none"
}, ut = {
	evening_onset: "evening_onset",
	morning_offset: "morning_offset",
	daytime: "daytime"
}, pt = {
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
function mt(e) {
	const t = pt[e];
	if (void 0 === t) throw new Error(`no implementation_version for ${e}`);
	return t;
}
function ft(e) {
	return Object.hasOwn(pt, e) ? e : null;
}
const _t = "auto_score", yt = /* @__PURE__ */ new WeakSet();
function gt(e) {
	if (null !== e && "object" == typeof e && !Object.isFrozen(e)) {
		Object.freeze(e);
		for (const t of Object.values(e)) gt(t);
	}
	return e;
}
function ht(e) {
	return yt.add(gt(e)), e;
}
function wt(e) {
	if (null === e || "object" != typeof e || !yt.has(e)) return null;
	const n = e, a = (r = n.id, null === te(r) ? null : r);
	var r;
	if (null === a) return null;
	const i = Object.fromEntries(Object.entries(n).filter(([e]) => !t.excludedFieldNames.includes(e)));
	return {
		cellId: a,
		implementationVersion: n.implementationVersion,
		configHash: Zt(i)
	};
}
const bt = new Map(M.map((e) => [e.id, e.conformance]));
function vt(e) {
	return bt.get(e) ?? "conformant";
}
const kt = function() {
	const e = /* @__PURE__ */ new Map();
	for (const t of M) {
		if ("sleep_wake" !== t.kind) continue;
		if (!F.includes(t.requiredSignal)) continue;
		if ($.includes(t.execution)) continue;
		const n = t.family, a = e.get(n);
		if (a) {
			if (a.conformance !== t.conformance) throw new Error(`count scorer family ${n} has conflicting conformance across variants: ${a.conformance} vs ${t.conformance}`);
		} else {
			const a = Oe[n];
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
}(), St = function() {
	const e = new Map(kt.map((e) => [e.slug, e])), t = [];
	for (const n of P) {
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
}(), It = b, Et = Te, At = y, Tt = Object.fromEntries(B.map((e) => [e, 0])), Rt = Object.fromEntries(fe.map((e) => [e.value, 0])), Dt = Ce;
function Ot(e, t) {
	const n = M.filter((n) => "sleep_wake" === n.kind && n.family === e && (void 0 === t || n.implementation === t)).map((e) => e.supportedEpochSeconds);
	return 0 === n.length ? [] : n.reduce((e, t) => e.filter((e) => t.includes(e)));
}
function Mt(e, t) {
	return e.some((e) => e === t || e < t && t % e === 0);
}
function xt(e) {
	const t = M.find((t) => t.id === e);
	return t && (F.includes(t.requiredSignal) || "epoch_scores" === t.requiredSignal) ? t.supportedEpochSeconds : void 0;
}
function Ct(e, t) {
	return t >= qe || Mt(e, t) ? t : qe;
}
function Nt(e) {
	const t = Object.entries(Oe).find(([, t]) => t.algorithmValue === e)?.[0];
	return void 0 === t ? [] : Ot(t, "hasib");
}
function Ft(e, t, n) {
	const { configs: a, skipped: r } = e, { label: i, supported: s } = t;
	Mt(s, n.epochSeconds) ? a.push(n) : r.push({
		id: n.id,
		reason: Jt("unsupported_epoch_reason", {
			cell_label: n.label,
			method_label: i,
			supported_epochs: s.join(", ")
		})
	});
}
function Lt(e = {}) {
	const t = new Set(e.includeFamilies ?? B), n = e.epochSeconds ?? Et, a = new Set(e.excludeHasibAlgorithms ?? []), r = e.implementationVersion ?? At, i = [], s = [];
	if (t.has("count_hasib")) {
		for (const e of kt) {
			if (a.has(e.slug)) {
				i.push({
					id: se("count_skip_entry", { method_family: e.slug }),
					reason: Jt("skipped_method_reason", { algorithm_value: e.algorithm })
				});
				continue;
			}
			const t = Ot(e.slug);
			for (const a of Object.keys(It)) for (const o of It[a]) for (const l of n) Ft({
				configs: s,
				skipped: i
			}, {
				label: e.label,
				supported: t
			}, qt({
				family: e,
				countFamily: a,
				axis: o,
				epochSeconds: l,
				implementationVersion: r
			}));
		}
		for (const e of St) {
			if (a.has(e.slug)) continue;
			const t = Ot(e.slug, e.implementation), o = `${e.label} ${e.implementationLabel}`;
			for (const a of Object.keys(It)) for (const l of It[a]) for (const c of n) Ft({
				configs: s,
				skipped: i
			}, {
				label: o,
				supported: t
			}, Bt({
				variant: e,
				countFamily: a,
				axis: l,
				epochSeconds: c,
				implementationVersion: r
			}));
		}
	}
	for (const l of Object.keys(W)) t.has(l) && s.push(zt(l, r));
	if (t.has("lstm")) for (const l of e.lstmModels ?? []) s.push(...Wt(l, r));
	(e.includeConsensus ?? !0) && t.has("consensus") && s.push(...function(e, t) {
		const n = [], a = Array.from(new Set(e.filter((e) => Vt(e)).filter((e) => Et.includes(e.epochSeconds)).map((e) => e.epochSeconds))).sort((e, t) => e - t);
		for (const r of a) {
			const a = `${String(r)}s`, i = e.filter((e) => Vt(e) && e.epochSeconds === r);
			if (i.length <= 1) continue;
			const { slug: s, label: o } = Ut(i);
			for (const e of h) n.push($t({
				id: se("consensus_cell", {
					scope: s,
					strategy: e,
					epoch_seconds: r
				}),
				label: Jt("consensus_cell_label", {
					scope_label: o,
					strategy_label: E[e] ?? e,
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
	}(s).map(ht);
	return {
		configs: o,
		skipped: i,
		warnings: Qt(o),
		summary: Ht({
			configs: o,
			skipped: i
		})
	};
}
let Pt, jt;
function Gt() {
	return Pt ??= Lt({
		includeFamilies: ["count_hasib", "consensus"],
		epochSeconds: [30, 60],
		includeConsensus: !0
	}), Pt;
}
function Ht(e) {
	const t = { ...Tt }, n = { ...Rt };
	for (const a of e.configs) t[a.family] += 1, n[a.validationStatus] += 1;
	return {
		total: e.configs.length,
		byFamily: t,
		byValidationStatus: n,
		skipped: e.skipped.length
	};
}
function $t(e) {
	const t = e.implementationVersion ?? At, n = e.members.map((e) => e.id), a = [...e.members].sort((e, t) => e.id < t.id ? -1 : e.id > t.id ? 1 : 0).map((e) => e.configHash);
	return {
		...Kt({
			id: e.id,
			family: ue,
			label: e.label,
			algorithm: `consensus:${e.strategy}`,
			outputKind: k,
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
			validationStatus: R,
			defaultIncluded: !0,
			exploratory: !0,
			lineage: n
		}),
		conformance: vt("consensus_majority_vote")
	};
}
function qt(e) {
	const t = Dt(e.countFamily, e.axis, e.epochSeconds), n = Ie(e.family.slug, e.countFamily, e.axis, e.epochSeconds) ? m : d;
	return {
		...Kt({
			id: se("count_cell", {
				method_family: e.family.slug,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: ze,
			label: Jt("count_cell_label", {
				method_label: e.family.label,
				input_label: Xt(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.family.algorithm,
			outputKind: s,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: t
			},
			parameters: {
				ws3: e.epochSeconds,
				sadehNeishabouriCap300: he(e.family.slug, e.countFamily)
			},
			implementationVersion: e.implementationVersion,
			validationStatus: n,
			defaultIncluded: !0,
			exploratory: n === d,
			lineage: [t]
		}),
		conformance: e.family.conformance
	};
}
function Bt(e) {
	const t = Dt(e.countFamily, e.axis, e.epochSeconds);
	return {
		...Kt({
			id: se("count_cell", {
				method_family: e.variant.slug,
				implementation_variant: e.variant.implementation,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: ze,
			label: Jt("count_provenance_cell_label", {
				method_label: e.variant.label,
				implementation_label: e.variant.implementationLabel,
				input_label: Xt(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.variant.algorithm,
			outputKind: s,
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
			validationStatus: p,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [t]
		}),
		conformance: e.variant.conformance
	};
}
function zt(e, t) {
	const n = W[e];
	if (void 0 === n) throw new Error(`no generated fixed output projection for family ${e}`);
	return {
		...Kt({
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
		conformance: vt(n.methodBindingId)
	};
}
function Wt(e, t) {
	const n = e.thresholdPresets && e.thresholdPresets.length > 0 ? e.thresholdPresets : [Re], a = vt(e.id);
	return n.map((n) => ({
		...Kt({
			id: se("model_cell", {
				model_slug: Yt(e.id),
				preset_slug: Yt(n.id)
			}),
			family: ce,
			label: Jt("model_cell_label", {
				model_label: e.label,
				preset_label: n.label
			}),
			algorithm: e.id,
			outputKind: K,
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
			validationStatus: be,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [`lstm:${e.id}`]
		}),
		conformance: a
	}));
}
function Vt(e) {
	return "sleep_wake_epoch" === e.outputKind && "consensus" !== e.family && void 0 === e.parameters.implementation;
}
function Ut(e) {
	const t = new Set(e.map((e) => e.family));
	if (1 === t.size && t.has("count_hasib")) return {
		slug: `${ze}_sleep_wake`,
		label: Jt("count_consensus_scope_label", {})
	};
	const n = Array.from(new Set(e.filter((e) => e.family === ce).map((e) => "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm).filter((e) => e.length > 0))).sort();
	if (t.has("lstm") && n.length > 0) {
		const e = n.map((e) => Yt(e)).join("_"), a = t.has(ze);
		return {
			slug: a ? `${ze}_${ce}_${e}_sleep_wake` : `${ce}_${e}_sleep_wake`,
			label: Jt(a ? "count_lstm_consensus_scope_label" : "lstm_consensus_scope_label", { model_ids: n.join(", ") })
		};
	}
	return {
		slug: "all_sleep_wake",
		label: Jt("all_consensus_scope_label", {})
	};
}
function Kt(e) {
	return {
		...e,
		configHash: Zt(e)
	};
}
function Qt(e) {
	const t = [];
	return e.some((e) => "count_hasib" === e.family && e.epochSeconds === Et[0]) && t.push(Jt("count_30_warning", {})), e.some((e) => "lstm" === e.family) || t.push(Jt("no_lstm_warning", {})), t;
}
function Jt(e, t) {
	const n = ne[e];
	if (void 0 === n) throw new Error(`no generated planner message ${e}`);
	return Object.entries(t).reduce((e, [t, n]) => e.replace(`{${t}}`, String(n)), n);
}
function Xt(e, t, n) {
	return O[e].labelTemplate.replace("{axis}", t).replace("{axis_label}", Z.axis?.[t] ?? t).replace("{epoch_seconds}", String(n));
}
function Yt(e) {
	return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function Zt(e) {
	const n = en(e);
	let a = t.initialValue;
	for (let r = 0; r < n.length; r += 1) a ^= n.charCodeAt(r), a = Math.imul(a, t.prime) >>> 0;
	return a.toString(16).padStart(t.lowercaseHexWidth, "0");
}
function en(e) {
	return null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map((e) => en(e)).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => `${JSON.stringify(e)}:${en(t)}`).join(",")}}`;
}
const tn = new Map(M.map((e) => [e.id, {
	id: e.id,
	conformance: e.conformance,
	needsModelArtifact: e.needsModelArtifact
}]));
function nn(e) {
	return tn.get(e)?.conformance ?? null;
}
const an = 4, rn = 10, sn = Gt().configs.map((e) => ({
	value: e.id,
	label: `Tensor: ${e.label}`
})), on = new Set(o);
function ln(e) {
	if (!on.has(e)) throw new Error(`STANDARD_ALGORITHM_OPTIONS references '${e}', which is not a generated scoring-method contract id.`);
	return {
		value: e,
		label: C.AlgorithmType[e]
	};
}
const cn = [
	_e.SADEH_1994_ACTILIFE,
	_e.SADEH_1994_ORIGINAL,
	_e.SADEH_1994_GGIR,
	_e.COLE_KRIPKE_1992_ACTILIFE,
	_e.COLE_KRIPKE_1992_ORIGINAL,
	_e.COLE_KRIPKE_1992_GGIR
], dn = [_e.LSTM_SLEEP_WAKE, _e.VAN_HEES_2015], un = [
	_e.UCSD_SCRIPPS_2010,
	_e.SAZONOV_2004,
	_e.SYED_CNN,
	_e.ACTIWARE_SLEEP_WAKE
].map((e) => {
	return "needs_model" !== nn((t = ln(e)).value) ? t : {
		...t,
		disabled: !0
	};
	var t;
}), pn = [
	...cn.map(ln),
	{
		value: et.TENSOR_MAJORITY_VOTE,
		label: "Tensor majority vote"
	},
	...dn.map(ln),
	...un
], mn = [...pn, ...sn], fn = {
	count: "Count-based sleep/wake",
	window: "Window / HDCZA",
	neural: "Neural",
	experimental: "Experimental (provisional)",
	tensor: "Tensor variants (A/B)"
}, _n = [
	"count",
	"window",
	"neural",
	"experimental",
	"tensor"
], yn = new Map(M.map((e) => [e.id, e.execution]));
function gn(e) {
	if (!on.has(e)) return "tensor";
	const t = yn.get(e);
	if ("neural_model" === t) return "neural";
	if ("angle_spt" === t) return "window";
	const n = nn(e);
	return "provisional" === n || "needs_model" === n ? "experimental" : "count";
}
function hn(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = gn(n.value), a = t.get(e) ?? [];
		a.push(n), t.set(e, a);
	}
	return _n.flatMap((e) => {
		const n = t.get(e);
		return n ? [{
			label: fn[e],
			options: n
		}] : [];
	});
}
hn(pn), hn(mn);
const wn = Object.fromEntries(Pe.map((e) => [e.id, {
	onsetN: e.onsetMinConsecutiveSleep,
	offsetN: e.offsetMinConsecutiveMinutes,
	offsetState: e.offsetScanState,
	label: e.label
}])), bn = wn[$e.CONSECUTIVE_ONSET3S_OFFSET5S];
function vn(e) {
	return wn[e] ?? bn;
}
function kn(e) {
	return e?.markerType === Ee.MAIN_SLEEP;
}
function Sn(e) {
	return e?.markerType === Ee.NAP;
}
function In(e) {
	return void 0 !== e?.ggirBundleRevision;
}
function En(e) {
	return In(e) ? "GGIR results retain their imported proposals; HDCZA replacement is unavailable." : null;
}
function An(e, t, n) {
	return In(e) && t.sleepMarkers.some(kn) && !n.sleepMarkers.some(kn);
}
function Tn(e, t) {
	if (t?.isInvalidNight) return { kind: "invalid" };
	const n = t?.sleepMarkers.find(kn);
	return n ? {
		kind: "scored",
		main: n
	} : {
		kind: t ? "naps/nonwear-only" : "unreviewed",
		window: e
	};
}
Pe.map(({ id: e, label: t }) => ({
	value: e,
	label: t
})), Fe.NONE, Fe.WEBSTER, Ee.MAIN_SLEEP, Ee.NAP, [
	le.SMART,
	le.DIARY,
	le.HDCZA,
	le.L5,
	le.LONGEST_BOUT,
	le.EVENT_MARKER,
	le.ACTIWARE_REST_INTERVAL,
	le.NONE
].map((e) => ({
	value: e,
	label: C.PeriodGuiderType[e]
}));
const Rn = "GGIR nonwear", Dn = {
	DIARY: dt.diary,
	HDCZA: dt.hdcza,
	L5: dt.l5,
	SELECTED_SCORER_FIRST_LAST: dt.selected_scorer_first_last,
	SELECTED_SCORER_LONGEST_BOUT: dt.selected_scorer_longest_bout,
	QUIET_BOUT: dt.quiet_bout,
	EVENT_MARKER: dt.event_marker,
	ACTIWARE_REST_INTERVAL: dt.actiware_rest_interval,
	NONE: dt.none
}, On = "use_source_a", Mn = "use_source_b", xn = "intersection", Cn = "union", Nn = "source_b_bounded_by_source_a", Fn = "sanity_clamp_source_b_to_source_a", Ln = {
	sourceA: pe.sleep_period_detection.source_a,
	sourceB: pe.sleep_period_detection.source_b,
	fusionPolicy: pe.sleep_period_detection.fusion_policy,
	mergeGapMinutes: pe.sleep_period_detection.merge_gap_minutes,
	paddingMinutes: pe.sleep_period_detection.padding_minutes,
	minOverlapJaccard: pe.sleep_period_detection.min_overlap_jaccard,
	applyNonwearGate: pe.sleep_period_detection.apply_nonwear_gate
};
function Pn(e) {
	const t = Ln;
	return e.sourceA === t.sourceA && e.sourceB === t.sourceB && e.fusionPolicy === t.fusionPolicy && e.mergeGapMinutes === t.mergeGapMinutes && e.paddingMinutes === t.paddingMinutes && e.minOverlapJaccard === t.minOverlapJaccard && e.applyNonwearGate === t.applyNonwearGate;
}
const jn = C.SleepPeriodWindowSourceType, Gn = Object.values(dt).map((e) => ({
	value: e,
	label: jn[e]
})), Hn = [
	{
		value: On,
		label: "Use source A"
	},
	{
		value: Mn,
		label: "Use source B"
	},
	{
		value: xn,
		label: "A intersect B"
	},
	{
		value: Cn,
		label: "A union B"
	},
	{
		value: Nn,
		label: "B bounded by A"
	},
	{
		value: Fn,
		label: "Use B, clamp to A if mismatch"
	}
];
function $n(e) {
	return Gn.find((t) => t.value === e)?.label ?? e;
}
function qn(e) {
	const t = Bn(e), n = t.applyNonwearGate ? "nonwear gate on" : "nonwear gate off";
	return `${$n(t.sourceA)} + ${$n(t.sourceB)}; ${function(e) {
		return Hn.find((t) => t.value === e)?.label ?? e;
	}(t.fusionPolicy)}; ${n}`;
}
function Bn(e) {
	const t = e ?? {};
	return {
		...Ln,
		sourceA: t.sourceA ?? t.source_a ?? Ln.sourceA,
		sourceB: t.sourceB ?? t.source_b ?? Ln.sourceB,
		fusionPolicy: t.fusionPolicy ?? t.fusion_policy ?? Ln.fusionPolicy,
		mergeGapMinutes: t.mergeGapMinutes ?? t.merge_gap_minutes ?? Ln.mergeGapMinutes,
		paddingMinutes: t.paddingMinutes ?? t.padding_minutes ?? Ln.paddingMinutes,
		minOverlapJaccard: t.minOverlapJaccard ?? t.min_overlap_jaccard ?? Ln.minOverlapJaccard,
		applyNonwearGate: t.applyNonwearGate ?? t.apply_nonwear_gate ?? Ln.applyNonwearGate
	};
}
function zn(e) {
	const t = Bn(e);
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
function Wn(e) {
	switch (e.fusionPolicy === Mn ? e.sourceB : e.sourceA) {
		case Dn.DIARY: return le.DIARY;
		case Dn.HDCZA: return le.HDCZA;
		case Dn.L5: return le.L5;
		case Dn.SELECTED_SCORER_FIRST_LAST:
		case Dn.SELECTED_SCORER_LONGEST_BOUT: return le.LONGEST_BOUT;
		case Dn.EVENT_MARKER: return le.EVENT_MARKER;
		case Dn.ACTIWARE_REST_INTERVAL: return le.ACTIWARE_REST_INTERVAL;
		case Dn.NONE: return le.NONE;
	}
	return le.NONE;
}
const Vn = {
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
}, Un = Object.fromEntries(Object.entries(Vn).filter(([, e]) => null !== e.cascade).sort(([, e], [, t]) => e.cascadeOrder - t.cascadeOrder).map(([e, t]) => [e, t.cascade])), Kn = Object.entries(Vn).filter(([, e]) => "none" !== e.workspace).sort(([, e], [, t]) => e.workspaceOrder - t.workspaceOrder).map(([e]) => e), Qn = (Object.entries(Vn).filter(([, e]) => "unattached" === e.workspace).map(([e]) => e), Object.entries(Vn).filter(([, e]) => e.backup).map(([e]) => e), Kn.filter((e) => "diary" === Vn[e].aggregate), [{
	table: "actiwareFileData",
	field: "actiwareStatisticsNeedsRecompute"
}]), Jn = /* @__PURE__ */ new Set([
	"diaryEntries",
	"diaryOccurrences",
	"stagedDiaryEntries"
]);
function Xn(e, t) {
	if (Jn.has(t)) throw new Error(`The diary store ${t} is written only by db/diary.`);
	return e[t];
}
const Yn = /* @__PURE__ */ new Set([
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
]), Zn = /\{[^{}]+\}/g;
function ea(e, t, n) {
	if (null == t) return "";
	if ("object" == typeof t) throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${e}=${!0 === n?.allowReserved ? t : encodeURIComponent(t)}`;
}
function ta(e, t, n) {
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
		a.push(ea(r, t[s], n));
	}
	const i = a.join(r);
	return "label" === n.style || "matrix" === n.style ? `${r}${i}` : i;
}
function na(e, t, n) {
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
	for (const i of t) "simple" === n.style || "label" === n.style ? r.push(!0 === n.allowReserved ? i : encodeURIComponent(i)) : r.push(ea(e, i, n));
	return "label" === n.style || "matrix" === n.style ? `${a}${r.join(a)}` : r.join(a);
}
function aa(e) {
	return function(t) {
		const n = [];
		if (t && "object" == typeof t) for (const a in t) {
			const r = t[a];
			if (null != r) if (Array.isArray(r)) {
				if (0 === r.length) continue;
				n.push(na(a, r, {
					style: "form",
					explode: !0,
					...e?.array,
					allowReserved: e?.allowReserved || !1
				}));
			} else "object" != typeof r ? n.push(ea(a, r, e)) : n.push(ta(a, r, {
				style: "deepObject",
				explode: !0,
				...e?.object,
				allowReserved: e?.allowReserved || !1
			}));
		}
		return n.join("&");
	};
}
function ra(e, t) {
	let n = e;
	for (const a of e.match(Zn) ?? []) {
		let e = a.substring(1, a.length - 1), r = !1, i = "simple";
		if (e.endsWith("*") && (r = !0, e = e.substring(0, e.length - 1)), e.startsWith(".") ? (i = "label", e = e.substring(1)) : e.startsWith(";") && (i = "matrix", e = e.substring(1)), !t || void 0 === t[e] || null === t[e]) continue;
		const s = t[e];
		n = Array.isArray(s) ? n.replace(a, na(e, s, {
			style: i,
			explode: r
		})) : "object" != typeof s ? "matrix" !== i ? n.replace(a, "label" === i ? `.${encodeURIComponent(s)}` : encodeURIComponent(s)) : n.replace(a, `;${ea(e, s)}`) : n.replace(a, ta(e, s, {
			style: i,
			explode: r
		}));
	}
	return n;
}
function ia(e, t) {
	return e instanceof FormData ? e : t && "application/x-www-form-urlencoded" === (t.get instanceof Function ? t.get("Content-Type") ?? t.get("content-type") : t["Content-Type"] ?? t["content-type"]) ? new URLSearchParams(e).toString() : JSON.stringify(e);
}
function sa(...e) {
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
function oa(e) {
	return e.endsWith("/") ? e.substring(0, e.length - 1) : e;
}
function la(e) {
	const t = e.split(/[/\\]/);
	return t[t.length - 1] || e;
}
var ca = class e {
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
			name: la(t),
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
async function da(e) {
	return Be(e);
}
const ua = [
	"csv",
	"gt3x",
	"bin",
	"bz2",
	"tbz2"
], pa = "ggirImportRefusals", ma = "already-imported-different-content", fa = "local-storage", _a = "GGIR output folder", ya = "ggir-folder", ga = "import-in-progress", ha = {
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
	[fa]: {
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
	[ga]: {
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
	[ma]: {
		label: "already imported with different content and kept as it was; to replace it first use Export backup on the Workspace tab of the Files page then delete the earlier import on the Files page and import it again",
		durableRefusal: !0
	},
	[ya]: {
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
		label: `this recording epoch length cannot be stored; only ${X.join(" or ")} second epochs and shorter epochs that divide ${String(qe)} seconds can be imported`,
		durableRefusal: !1
	},
	"processing-runtime": {
		label: "processing runtime",
		durableRefusal: !1
	}
}, wa = new Map(Object.entries(ha).map(([e, { label: t }]) => [t.toLowerCase(), e])), ba = /categor(?:y|ies): ([a-z0-9; ]+?)(?: \(\d+\))?[.,]/u;
const ka = Object.keys({
	workspace: null,
	"csv-settings": "/csv-import",
	"unsupported-format": "/csv-import",
	"empty-file": null,
	"invalid-data": "/csv-import",
	[fa]: null,
	permission: null,
	"browser-memory": null,
	"time-limit": null,
	[ga]: null,
	"decoder-crash": null,
	"ggir-no-part4": null,
	"ggir-not-read": null,
	"ggir-corrected-not-available": null,
	[ma]: null,
	[ya]: null,
	"aw5-unreadable": null,
	"aw5-memory": null,
	"stale-app": null,
	"unsupported-epoch": null,
	"processing-runtime": "/settings/processing"
});
function Sa(e) {
	return ha[e].label;
}
function Ia(e) {
	return Sa(function(e) {
		if (e instanceof Error && "category" in e && "string" == typeof e.category && Object.hasOwn(ha, e.category)) return e.category;
		const t = function(e) {
			try {
				return e instanceof Error ? e.message : "string" == typeof e ? e : "";
			} catch {
				return "";
			}
		}(e).toLowerCase();
		if (Object.hasOwn(ha, t)) return t;
		const n = wa.get(t) ?? wa.get(ba.exec(t)?.[1] ?? "");
		return void 0 !== n ? n : t.includes("timed out during") ? "time-limit" : /failed to fetch dynamically imported module|error loading dynamically imported module|importing a module script failed/u.test(t) ? "stale-app" : t.includes("already being imported") ? "import-in-progress" : t.startsWith("wasm panic in ") ? "decoder-crash" : /workspace|scope changed|no longer active/u.test(t) ? "workspace" : /csv settings|column-mapped|column mapping|mapping .*required|settings .*incomplete|review data settings/u.test(t) ? "csv-settings" : /unsupported|not supported|unimplemented source-profile|unknown file (?:type|format)/u.test(t) ? "unsupported-format" : /out of memory|allocation failed|invalid array length|exceeds the v1 limit|too large (?:to process|for in-browser memory)/u.test(t) || /\bunreachable\b/u.test(t) && !t.startsWith("wasm panic in ") ? "browser-memory" : /empty|no data rows|did not contain any .*epochs/u.test(t) ? "empty-file" : /quota|indexeddb|dexie|database|storage|persist|saving|disk/u.test(t) ? "local-storage" : /permission|denied|unauthori[sz]ed|not allowed/u.test(t) ? "permission" : /parse|csv|row|column|timestamp|header|date|\btime\b|corrupt|invalid|malformed|decompress|archive|rdata/u.test(t) ? "invalid-data" : "processing-runtime";
	}(e));
}
const Ea = [
	"parse",
	"score",
	"nonwear",
	"save",
	"variants"
], Aa = {
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
function Ta(e, t) {
	if (null === t) return -1;
	const [n, a] = Aa[e];
	return n + Math.max(0, Math.min(1, t)) * (a - n);
}
function Ra(e, t) {
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
Object.keys(Aa);
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
].join("|")})\\b`), Object.values(c.errnames);
const Da = new Set(Object.values(q));
function Oa(e) {
	return Da.has(u(e));
}
function Ma(e, t) {
	return `${e}:${t}`;
}
function xa(e, t) {
	return {
		id: Ma(e.sessionId, e.sequence),
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
const Ca = [], Na = /* @__PURE__ */ new Set([
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
]), Fa = /* @__PURE__ */ new Set([
	"error_type",
	"has_context",
	"file_id"
]), La = /* @__PURE__ */ new Set([
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
function Pa(e, t, n) {
	const a = function(e) {
		if (!e) return;
		const t = {};
		for (const [n, a] of Object.entries(e)) Fa.has(n) && ("has_context" === n && "boolean" == typeof a && (t[n] = a), "file_id" === n && Number.isSafeInteger(a) && (t[n] = a), "error_type" === n && "string" == typeof a && (t[n] = La.has(a) ? a : "Error"));
		return Object.keys(t).length > 0 ? t : void 0;
	}(n);
	Ca.push({
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		level: e,
		message: Na.has(t) ? t : "Diagnostic event",
		...a ? { context: a } : {}
	}), Ca.length > 500 && Ca.splice(0, Ca.length - 500);
}
function ja(e) {
	return { error_type: e instanceof Error ? e.name : typeof e };
}
var Ga = class extends Error {
	name = "GgirResultsBundleError";
	category = ya;
	folderName;
	fileName;
	constructor(e, t, n) {
		super(e), this.folderName = t, this.fileName = n;
	}
};
const Ha = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), qa = /* @__PURE__ */ new WeakMap();
function Ba(e, t) {
	const n = new File([], e);
	return qa.set(n, t instanceof Ga ? t : new Ga(t ? "The GGIR output folder could not be read. Check folder access and open it again." : "The GGIR output folder is empty or contains no supported activity files.", e)), n;
}
function za(e) {
	return Ha.get(e);
}
function Wa(e, t) {
	$a.set(e, t);
}
function Va(e) {
	const t = $a.get(e);
	if (t) return t;
	const n = e.webkitRelativePath;
	return "string" == typeof n && n ? n : e.name;
}
function Ua(e, t) {
	return /\.csv$/iu.test(e.name) && Va(e) !== e.name ? new Ga("This CSV table could not be read as activity data. GGIR imports require the whole output folder containing meta/ and config.csv.", void 0, e.name) : t instanceof Error ? t : new Error(t);
}
function Ka(e, t = !1) {
	const n = e.replace(/\\/gu, "/");
	return !/(^|\/)(?:\._[^/]*|__MACOSX)(?:\/|$)/iu.test(n) && (t || !/(^|\/)(?:ms5\.outraw|sib\.reports|sleep\.qc)(?:\/|$)/iu.test(n));
}
function Qa(e) {
	const t = e.replace(/\\/g, "/").split("/").filter(Boolean), n = t.indexOf("meta");
	return n >= 0 && n < t.length - 1 ? t.slice(0, n).join("/") : null;
}
function Ja(e) {
	return t = Za(e), /\.(rdata|rda)$/iu.test(t) ? Qa(e) : null;
	var t;
}
function Xa(e) {
	const t = e.map((e) => e.replace(/\\/gu, "/")).filter((e) => Ka(e, !0)), n = new Set(t.map(Ja).filter((e) => null !== e)), a = /* @__PURE__ */ new Map();
	for (const r of t) {
		const e = Qa(r);
		if (null === e || !n.has(e)) continue;
		const t = a.get(e) ?? [];
		t.push(r.slice(e ? e.length + 1 : 0)), a.set(e, t);
	}
	for (const [r, i] of a) {
		const e = r ? Za(r) : void 0, n = [...new Set(i.filter((e) => e.split("/").length > 2).map((e) => e.split("/")[1] ?? "").filter(Boolean))].sort().map((e) => `meta/${e}`).join(", ") || "no part folders", a = r ? `${r}/` : "";
		if (!t.some((e) => e.startsWith(a) && "config.csv" === e.slice(a.length).toLowerCase())) throw new Ga(`The GGIR output has no config.csv (found ${n}). GGIR writes config.csv next to meta/; add it to the folder and import again.`, e);
		for (const t of [
			"basic",
			"ms2.out",
			"ms3.out",
			"ms4.out",
			"ms5.out"
		]) {
			const n = `meta/${t}/`, a = i.filter((e) => e.startsWith(n)).map((e) => e.slice(n.length)).find((e) => e.includes("/"))?.split("/")[0];
			if (a) throw new Ga(`meta/${t} contains a folder ${a}/ instead of ${"basic" === t ? "meta_*.RData" : "*.RData"} files: move its files up one level, as GGIR writes them.`, e);
		}
		if (!i.some((e) => /^meta\/basic\/meta_[^/]+\.(?:rdata|rda)$/iu.test(e))) throw new Ga(`meta/basic ${i.some((e) => e.startsWith("meta/basic/")) ? "contains no meta_*.RData files" : "is missing"} (found ${n}). Part 1 files (meta_*.RData) are needed.`, e);
	}
}
function Ya(e) {
	return {
		...e.desiredTz ? { desiredtz: e.desiredTz } : {},
		...e.configTz ? { configtz: e.configTz } : {},
		..."boolean" == typeof e.imputeTimegaps ? { imputeTimegaps: e.imputeTimegaps } : {}
	};
}
function Za(e) {
	const t = e.replace(/\\/g, "/").split("/");
	return t[t.length - 1] ?? e;
}
const er = /^part2_(?:daysummary|summary)\.csv$/u, tr = /^(?:part4_summary_sleep_cleaned|part5_personsummary_.+)\.csv$/u;
function nr() {
	return Ke;
}
Ke.join(" · ");
const ar = [
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
function rr(e) {
	return void 0 !== (t = e, qa.get(t)) || function(e, t = nr()) {
		const n = e.toLowerCase();
		return Ka(e) && t.some((e) => n.endsWith(e));
	}(e.name, nr());
	var t;
}
function ir(e) {
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
(ar[0]?.items ?? []).join(", "), ar.slice(1).map((e) => e.label).join(" and ");
const sr = [
	".csv",
	".gt3x",
	".bin",
	".rdata",
	".rda",
	".zip",
	".tar.bz2",
	".tbz2"
];
function or(e) {
	const t = document.createElement("input");
	t.type = "file", t.accept = nr().join(","), e && (t.multiple = !0);
	const n = ir(t);
	return t.click(), n.then((e) => "cancelled" in e ? null : e.files);
}
function lr() {
	const e = document.createElement("input");
	e.type = "file", e.setAttribute("webkitdirectory", "");
	const t = ir(e);
	return e.click(), t.then((e) => {
		if ("cancelled" in e) return null;
		const { files: t } = e;
		try {
			Xa(t.map(Va));
		} catch (n) {
			if (!(n instanceof Ga)) throw n;
			return [Ba(n.folderName ?? "GGIR output folder", n)];
		}
		return t.filter((e) => rr(e) && Ka(Va(e)));
	});
}
const cr = 1e5, dr = `The folder was not read: it holds folders nested more than ${String(32)} deep or more than ${cr.toLocaleString("en-US")} entries (a folder link that points back into its own folder does this). Pick the GGIR output folder itself.`;
async function ur(e, t = e.name, n) {
	try {
		const a = [], r = await pr(e, t, a, n);
		return Xa(a), r.length ? r : [Ba(e.name, !1)];
	} catch (a) {
		return [Ba(e.name, !(a instanceof Ga) || a)];
	}
}
async function pr(e, t, n, a) {
	if (!Ka(t)) return [];
	if (t.split("/").length > 32) throw new Ga(dr);
	const r = [], i = "function" == typeof e.values ? e.values() : e;
	for await (const s of i) {
		const e = s, i = t ? `${t}/${e.name}` : e.name;
		if (n.push("directory" === e.kind ? `${i}/` : i), n.length > cr) throw new Ga(dr);
		if (a?.(n.length), Ka(i)) {
			if ("file" === e.kind && "function" == typeof e.getFile && rr(e)) {
				const t = await e.getFile();
				Wa(t, i), r.push(t);
				continue;
			}
			"directory" === e.kind && r.push(...await pr(e, i, n, a));
		}
	}
	return r;
}
function mr(e) {
	return e.isFile ? {
		kind: "file",
		name: e.name,
		getFile: () => new Promise((t, n) => e.file(t, n))
	} : {
		kind: "directory",
		name: e.name,
		values: () => fr(e.createReader())
	};
}
async function* fr(e) {
	const t = await new Promise((t, n) => e.readEntries(t, n));
	t.length && (yield* t.map(mr), yield* fr(e));
}
const _r = "auto-update is unavailable on the web platform";
let yr = null;
let gr = null;
function hr() {
	return gr || (gr = globalThis.isTauri ? {
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
						extensions: ua
					}]
				});
				if (null == n) return null;
				const a = Array.isArray(n) ? n : [n], r = [];
				for (const i of a) r.push(await ca.fromPath(i));
				return r.length > 0 ? r : null;
			}(e),
			pickFolder: () => async function() {
				const { open: e } = await import("./dist-js-DtyocxnK.js"), { invoke: t } = await import("./core-B0WeKh9d.js"), n = await e({
					directory: !0,
					multiple: !1
				});
				if ("string" != typeof n) return null;
				const a = await t("list_supported_files", { dir: n }), r = [];
				for (const i of a) r.push(await ca.fromPath(i));
				return r.length > 0 ? r : null;
			}(),
			saveBlob: (e, t, n) => async function(e, t, n) {
				const { save: a } = await import("./dist-js-DtyocxnK.js"), { invoke: r } = await import("./core-B0WeKh9d.js");
				n?.throwIfAborted();
				const i = await G(a({ defaultPath: t }), n);
				if (n?.throwIfAborted(), !i) return null;
				const s = new Uint8Array(await G(e.arrayBuffer(), n)), o = Array.from(s);
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
						sources: await Promise.all(n.paths.map((e) => ca.fromPath(e)))
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
					groupHash: await da(e),
					username: t
				});
			}(e, t),
			computeGroupHash: (e) => da(e)
		},
		updater: {
			check: () => async function() {
				const { check: e } = await import("./dist-js-D7-Ut_gj.js"), t = await e();
				return t?.available ? (yr = t, {
					version: t.version,
					currentVersion: t.currentVersion,
					...t.body ? { body: t.body } : {},
					...t.date ? { date: t.date } : {}
				}) : (yr = null, null);
			}(),
			downloadAndInstall: (e) => async function(e) {
				if (!yr) throw new Error("No pending update. Call checkForUpdate() first.");
				const t = yr;
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
				}), yr = null;
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
								...Object.fromEntries(nr().filter((e) => !sr.includes(e)).map((e) => [`application/x-${e.slice(1)}`, [e]]))
							}
						}],
						multiple: e
					}), n = [];
					for (const e of t) n.push(await e.getFile());
					return n.length > 0 ? n : null;
				} catch (t) {
					return t instanceof DOMException && "AbortError" === t.name ? null : (console.warn("[web-dialogs] showOpenFilePicker failed, falling back to <input>:", t instanceof Error ? t.message : t), or(e));
				}
				return or(e);
			}(e),
			pickFolder: (e) => async function(e) {
				if ("showDirectoryPicker" in window) try {
					const t = await window.showDirectoryPicker();
					return await ur(t, t.name, e);
				} catch (t) {
					return t instanceof DOMException && "AbortError" === t.name ? null : (console.warn("[web-dialogs] showDirectoryPicker failed, falling back to <input>:", t instanceof Error ? t.message : t), lr());
				}
				return lr();
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
						const t = await e.handle?.catch(() => null) ?? (e.legacy ? mr(e.legacy) : null);
						return "directory" === t?.kind ? ur(t) : t?.getFile ? [await t.getFile().catch(() => Ba(t.name, !0))] : e.file ? [e.file] : [Ba(e.legacy?.name ?? "GGIR output folder", !0)];
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
			downloadAndInstall: () => Promise.reject(/* @__PURE__ */ new Error(_r)),
			relaunch: () => Promise.reject(/* @__PURE__ */ new Error(_r))
		}
	}), gr;
}
var wr = class extends TypeError {
	constructor() {
		super("Workspace is local-only — server API calls are disabled"), this.name = "LocalOnlyWorkspaceError";
	}
};
async function br(e) {
	if (!(e instanceof Response)) return e;
	if (!(e.headers.get("content-type") ?? "").startsWith("application/json")) return e;
	const t = Ae(await e.clone().text());
	if (null === t) return e;
	const n = new Headers(e.headers);
	return n.delete("content-length"), new Response(t, {
		status: e.status,
		statusText: e.statusText,
		headers: n
	});
}
function vr(e = {}) {
	return new Promise((t) => {
		t(function(e) {
			const t = !0 === e.preserveRequestIdentity;
			if (function() {
				if (hr().capabilities.tauri) return !1;
				const e = w().workspaces.activeId();
				if (!e) return !1;
				const t = w().workspaces.workspace(e);
				return void 0 === t || "" === t.serverUrl;
			}()) throw new wr();
			const n = V.basePath, { sitePassword: a, username: r, selectedStudyId: i } = w().scoring(), s = { onRequest: ({ request: e }) => (a && !e.headers.has("X-Site-Password") && e.headers.set("X-Site-Password", a), t || e.headers.has("X-Username") || e.headers.set("X-Username", r || "anonymous"), t || e.headers.has("X-Study-Id") || null == i || e.headers.set("X-Study-Id", String(i)), e) }, o = function(e) {
				let { baseUrl: t = "", Request: n = globalThis.Request, fetch: a = globalThis.fetch, querySerializer: r, bodySerializer: i, pathSerializer: s, headers: o, requestInitExt: l, ...c } = { ...e };
				l = "object" == typeof process && Number.parseInt(process?.versions?.node?.substring(0, 2)) >= 18 && process.versions.undici ? l : void 0, t = oa(t);
				const d = [];
				async function u(e, u) {
					const { baseUrl: p, fetch: m = a, Request: f = n, headers: _, params: y = {}, parseAs: g = "json", querySerializer: h, bodySerializer: w = i ?? ia, pathSerializer: b, body: v, middleware: k = [], ...S } = u || {};
					let I = t;
					p && (I = oa(p) ?? t);
					let E = "function" == typeof r ? r : aa(r);
					h && (E = "function" == typeof h ? h : aa({
						..."object" == typeof r ? r : {},
						...h
					}));
					const A = b || s || ra, T = void 0 === v ? void 0 : w(v, sa(o, _, y.header)), R = sa(void 0 === T || T instanceof FormData ? {} : { "Content-Type": "application/json" }, o, _, y.header), D = [...d, ...k], O = {
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
				fetch: (e) => fetch(e).then(br)
			});
			return o.use(s), o;
		}(e));
	});
}
function kr(e) {
	return void 0 === e ? "null" : null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map(kr).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${JSON.stringify(e)}:${kr(t)}`).join(",")}}`;
}
async function Sr(e, t) {
	const n = void 0 === t.studyId ? {} : { study_id: t.studyId };
	return Be(kr({
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
async function Ir(e) {
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
		if (await Sr(d, void 0 !== e && e === r && void 0 !== l.restoredSourceFileId && l.restoredSourceFileId !== l.fileId ? {
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
function Er() {
	const e = globalThis.__APP_VERSION__;
	return "string" == typeof e && e.length > 0 ? e : "dev";
}
function Ar(e) {
	const t = `[AuditLog] ${e}`;
	console.error(t);
}
function Tr(e, t, n) {
	if (0 === t.length) return;
	const a = n ?? {}, r = t.filter((e) => !(e in a));
	r.length > 0 && Ar(`"${e}" payload is missing declared key(s): ${r.join(", ")}`);
}
function Rr(e) {
	return {
		...e,
		appVersion: Er()
	};
}
async function Dr(e, t, n) {
	if (!("walLog" in e) || void 0 === e.walLog) return void await ee(e, [e.auditLog], async () => Mr(e, t), n);
	const a = c.currentTransaction;
	a?.db === e && "readwrite" === a.mode && a.storeNames.includes(e.auditLog.name) && a.storeNames.includes(e.walLog.name) ? await Mr(e, t) : await We([e.auditLog], async () => Mr(e, t), e, n);
}
const Or = /* @__PURE__ */ new WeakMap();
async function Mr(e, t) {
	const n = (await e.auditLog.orderBy("id").last())?.eventHash ?? null, a = Sr(n, t), r = c.currentTransaction ? await c.waitFor(a) : await a, i = {
		...t,
		...null !== n ? { previousHash: n } : {},
		eventHash: r
	}, s = await e.auditLog.add({ ...i });
	c.currentTransaction?.storeNames.includes("walLog") && await async function(e, t) {
		const { fileId: n, username: a, ...r } = t;
		await Ue({
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
function xr(e) {
	return "workspace" !== _[e.action]?.anchor || 0 === e.fileId ? e : {
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
function Cr(e, t) {
	return e.action === t.action && e.fileId === t.fileId && e.analysisDate === t.analysisDate && e.username === t.username && e.studyId === t.studyId && e.clientTimestamp === t.clientTimestamp && kr(e.payload ?? null) === kr(t.payload ?? null);
}
function Nr(e) {
	const t = void 0 === e.studyId ? "legacy-undefined" : null === e.studyId ? "default-null" : `study-${String(e.studyId)}`;
	return JSON.stringify([
		t,
		e.username,
		e.fileId,
		e.analysisDate
	]);
}
function Fr(e) {
	const t = xr(e);
	return JSON.stringify([Nr(t), Ma(t.sessionId, t.sequence)]);
}
function Lr(e, t) {
	const n = /* @__PURE__ */ new Set();
	for (const a of t) for (const t of e.get(a) ?? []) n.add(t);
	return [...n];
}
function Pr(e) {
	return !!function(e) {
		return Yn.has(e);
	}(e) && (Ar(`"${e}" records a scorer-night edit; only the marker owner records it`), !0);
}
const jr = new class {
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
			sessionId: ke(),
			sequence: 0
		}, this.contextByDb.set(e, t)), t;
	}
	resolveTarget(e) {
		let t = e;
		if (!t) try {
			t = Se();
		} catch {
			return null;
		}
		return {
			db: t,
			context: this.contextForDb(t)
		};
	}
	isNoOpRevisit(e, t) {
		if (t.action === q.SESSION_END) return 0 === e.context.sequence;
		let n = Or.get(e.db);
		n || (n = /* @__PURE__ */ new Map(), Or.set(e.db, n));
		const a = JSON.stringify([t.fileId, t.analysisDate]);
		if (t.action !== q.SESSION_START) return n.delete(a), !1;
		const r = JSON.stringify([t.username, t.studyId ?? null]), i = kr(t.payload ?? null), s = n.get(a);
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
			sessionId: ke(),
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
		e === i.fileId && t === i.analysisDate && s === i.username && o === i.studyId || (i.sessionId = ke(), i.sequence = 0), i.fileId = e, i.analysisDate = t, i.username = s, i.studyId = o, this.flushToServer();
	}
	currentSessionId() {
		return this.resolveTarget()?.context.sessionId ?? null;
	}
	newSession() {
		this.flushToServer();
		const e = this.resolveTarget();
		e && (e.context.sessionId = ke(), e.context.sequence = 0);
	}
	record(e, t) {
		const n = _[e];
		n ? Pr(e) || ("file" !== n.anchor ? (Tr(e, n.localPayloadKeys, t), "workspace" !== n.anchor ? this.log(e, t) : this.logWorkspaceEvent(e, t)) : Ar(`"${e}" is anchored to an explicit file/date; use recordFileEvent()`)) : Ar(`unknown audit action "${e}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordAppEvent(e, t) {
		this.record(e, t);
	}
	recordSessionBound(e, { fileId: t, analysisDate: n, action: a, payload: r }) {
		Pr(a) || this.recordSessionAnchored(e, {
			fileId: t,
			analysisDate: n,
			action: a,
			...void 0 !== r ? { payload: r } : {}
		});
	}
	recordNightEdit(e, t) {
		if (e) return void this.recordSessionAnchored(e, t);
		const n = _[t.action];
		n ? (Tr(t.action, n.localPayloadKeys, t.payload), this.log(t.action, t.payload)) : Ar(`unknown audit action "${t.action}"; not in AUDIT_EVENT_CONTRACT`);
	}
	appendNightEditsInTransaction(e) {
		const t = /* @__PURE__ */ new Map(), n = c.currentTransaction, a = () => {
			for (const [e, { from: n, to: a, sessionId: r }] of t) e.sessionId === r && e.sequence === a && (e.sequence = n);
		};
		n?.on("abort", a), n?.on("error", a);
		const r = e.map(({ binding: e, input: n }) => {
			const a = _[n.action];
			if (!a || "session" !== a.anchor) return Ar(`"${n.action}" is not a session-anchored audit action`), null;
			Tr(n.action, a.localPayloadKeys, n.payload);
			const r = this.targetForBinding(e);
			if (!r) return Ar("night edit received an invalid audit workspace binding"), null;
			const { context: i } = r, s = {
				fileId: n.fileId,
				analysisDate: n.analysisDate,
				username: i.username ?? "unknown",
				...void 0 !== i.studyId ? { studyId: i.studyId } : {},
				action: n.action,
				clientTimestamp: Date.now() / 1e3,
				sessionId: i.sessionId,
				sequence: i.sequence,
				payload: Rr(n.payload)
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
		return r.reduce((e, t) => t ? e.then(() => Dr(t.db, t.record)) : e, c.Promise.resolve()).then(() => r.map((e) => e ? Ma(e.record.sessionId, e.record.sequence) : null));
	}
	recordSessionAnchored(e, { fileId: t, analysisDate: n, action: a, payload: r }) {
		const i = _[a];
		i ? "session" === i.anchor ? (Tr(a, i.localPayloadKeys, r), this.logFileEvent({
			fileId: t,
			analysisDate: n,
			action: a,
			...void 0 !== r ? { payload: r } : {}
		}, e)) : Ar(`"${a}" is anchored to "${i.anchor}"; use its matching audit entry point`) : Ar(`unknown audit action "${a}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordWorkspaceDurably(e, t, n, a) {
		const r = this.resolveTarget(n);
		return r ? this.recordWorkspaceTargetDurably(r, e, t) : Promise.resolve(!1);
	}
	recordWorkspaceBoundDurably(e, t, n, a) {
		const r = this.targetForBinding(e);
		return r ? this.recordWorkspaceTargetDurably(r, t, n, e) : (Ar("workspace event received an invalid audit workspace binding"), Promise.resolve(!1));
	}
	recordWorkspaceTargetDurably(e, t, n, a) {
		const r = _[t];
		return r ? "workspace" !== r.anchor ? (Ar(`"${t}" is anchored to "${r.anchor}"; use record() or recordFileEvent()`), Promise.resolve(!1)) : (Tr(t, r.localPayloadKeys, n), this.persistBoundRecordDurably(e, this.workspaceEventRecord(e, t, n), a)) : (Ar(`unknown audit action "${t}"; not in AUDIT_EVENT_CONTRACT`), Promise.resolve(!1));
	}
	recordFileEvent({ fileId: e, analysisDate: t, action: n, payload: a }, r) {
		const i = _[n];
		i ? "file" === i.anchor ? (Tr(n, i.localPayloadKeys, a), this.logFileEvent({
			fileId: e,
			analysisDate: t,
			action: n,
			...void 0 !== a ? { payload: a } : {}
		}, r)) : Ar(`"${n}" is anchored to "${i.anchor}"; use record() so it lands where the contract says`) : Ar(`unknown audit action "${n}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordFileEventDurably(e, t) {
		const { action: n, payload: a } = e, r = _[n];
		if (!r) return Ar(`unknown audit action "${n}"; not in AUDIT_EVENT_CONTRACT`), Promise.resolve(!1);
		if ("file" !== r.anchor) return Ar(`"${n}" is anchored to "${r.anchor}"; use record() so it lands where the contract says`), Promise.resolve(!1);
		Tr(n, r.localPayloadKeys, a);
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
			payload: Rr(t)
		}), this.drainQueue(n.db));
	}
	logWorkspaceEvent(e, t) {
		const n = this.resolveTarget();
		n && (this.enqueueWorkspaceEvent(n, e, t), this.drainQueue(n.db));
	}
	hasSettledMutationAudit(e) {
		const t = e ? this.settledMutationAudits.get(e) : void 0;
		let n = c.currentTransaction;
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
		return c.currentTransaction?.db === e.db && c.currentTransaction.storeNames.includes(e.db.auditLog.name) ? !this.hasSettledMutationAudit(n) && this.hasPendingWritesForDb(e.db) ? Promise.resolve(!1) : (e.context.sequence++, Mr(e.db, t).then(() => !0)) : (n && this.settledMutationAudits.delete(n), this.enqueueBoundRecord(e, t), new Promise((n) => {
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
			payload: Rr({
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
		if (!n) return t && Ar("file event received an invalid audit workspace binding"), null;
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
			payload: Rr(r)
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
		if (t && c.currentTransaction?.db === e) {
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
					if (oe(a.name)) throw new Error("Captured audit workspace was deleted.");
					if (!await c.exists(a.name)) throw new Error("Captured audit workspace no longer exists.");
					ge() && Se() === a || (n = new re(a.name), await n.open(), a = n);
				}
				await Dr(a, e), this.writeQueue.shift(), this.dbAffinityByRecord.delete(e), this.resolveDurability(e, !0), this.retryCount = 0;
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
		this.onlineWatchArmed || (this.onlineWatchArmed = !0, w().capabilities.onServerAvailable(() => {
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
		else if (this.watchServerAvailability(), w().capabilities.serverAvailable()) {
			this.isFlushing = !0;
			try {
				let e;
				try {
					e = Se();
				} catch {
					return;
				}
				const t = await vr({ preserveRequestIdentity: !0 }), n = this.replicationStateFor(e);
				for (let a = 0; a < 20; a++) {
					const a = await e.auditLog.orderBy("id").limit(500).toArray();
					if (0 === a.length) return;
					const r = /* @__PURE__ */ new Map();
					for (const e of a) {
						if (!Oa(e.action) || this.isQuarantined(n, e)) continue;
						const t = xr(e), a = Nr(t);
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
					if (s.length > 0 && await ee(e, [e.auditLog], async () => {
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
		return e.quarantinedEventKeys.has(Fr(t));
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
			n.transient || (n.conflicted ? (t.quarantinedEventKeys.add(Fr(o)), w().sync.recordAuditQuarantine(), console.error(422 === n.status ? "[AuditLog] Server refused an audit event as a contract violation; retained locally and skipped in later batches" : "[AuditLog] Server refused an audit event as a conflicting identity; retained locally and skipped in later batches")) : s.push(...n.acknowledgedLocalIds));
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
				if (!Oa(e.action)) {
					console.warn("[AuditLog] Retaining event with an unknown action locally");
					continue;
				}
				const t = Number.isFinite(e.clientTimestamp) && e.clientTimestamp > 0 ? e.clientTimestamp : Date.now() / 1e3;
				t !== e.clientTimestamp && console.warn("[AuditLog] Invalid audit timestamp replaced before replication");
				const n = Ma(e.sessionId, e.sequence), a = l.get(n);
				if (a) {
					if (!Cr(a, e)) {
						console.error("[AuditLog] Two local audit rows share one identity with different content; retaining the divergent row");
						continue;
					}
					console.warn("[AuditLog] Collapsing a duplicated audit identity before replication"), null != e.id && o.get(n)?.push(e.id);
				} else l.set(n, e), o.set(n, null != e.id ? [e.id] : []), s.push(xa(e, t));
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
				acknowledgedLocalIds: Lr(o, c.data.acknowledged_event_ids ?? []),
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
function Gr(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function Hr(e) {
	return {
		...e,
		edited: !0
	};
}
function $r(e, t, n, a) {
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
		const t = e === Ee.NAP ? Ee.NAP : Ee.MAIN_SLEEP;
		return [t, t === Ee.MAIN_SLEEP ? Ee.NAP : t];
	}(r.markerType), c = Hr({
		...r,
		offsetTimestamp: a,
		markerType: o
	}), d = Hr({
		...r,
		onsetTimestamp: n,
		markerType: l
	}), u = [...e];
	return u.splice(t, 1, c, d), {
		ok: !0,
		markers: Gr(u),
		newIndex: t + 1
	};
}
function qr(e, t, n) {
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
		return kn(e) || kn(t) ? Ee.MAIN_SLEEP : Ee.NAP;
	}(a, i), m = Math.min(t, r), f = Hr({
		...p !== Ee.MAIN_SLEEP || kn(a) ? a : i,
		onsetTimestamp: d,
		offsetTimestamp: u,
		markerType: p
	}), _ = e.filter((e, n) => n !== t && n !== r);
	return _.splice(m, 0, f), {
		ok: !0,
		markers: Gr(_),
		mergedIndex: m
	};
}
function Br(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function zr(e) {
	return "boolean" == typeof e ? e : null;
}
function Wr(e) {
	return "string" == typeof e ? e : null;
}
function Vr(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function Ur(e, t) {
	return !(e.length > 0) && t;
}
function Kr(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
function Qr(e) {
	const t = function(e) {
		return Array.isArray(e) ? e : null;
	}(e);
	return null === t ? null : t.every(Kr) ? t : null;
}
function Jr(e) {
	const t = Qr(e);
	return null === t ? null : t;
}
function Xr(e) {
	const t = Qr(e);
	return null === t ? null : t;
}
function Yr(e) {
	return e.filter((e) => e.markerType === Ee.MAIN_SLEEP).length;
}
function Zr(e) {
	return e.every((e, t) => e.markerIndex === t + 1);
}
const ei = {
	main_sleep_on_invalid_night: ({ after: e }) => e.isInvalidNight && Yr(e.sleepMarkers) > 0,
	multiple_main_sleep: ({ after: e }) => Yr(e.sleepMarkers) > 1,
	first_marker_not_main_sleep: ({ after: e }) => !e.isInvalidNight && e.sleepMarkers.length > 0 && 0 === Yr(e.sleepMarkers),
	marker_index_noncontiguous: ({ after: e }) => !Zr(e.sleepMarkers) || !Zr(e.nonwearMarkers),
	boundaries_disordered: ({ after: e }) => e.sleepMarkers.some((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && e.onsetTimestamp >= e.offsetTimestamp) || e.nonwearMarkers.some((e) => null != e.startTimestamp && null != e.endTimestamp && e.startTimestamp >= e.endTimestamp),
	nonwear_flag_with_markers: ({ after: e }) => e.explicitNoNonwear && e.nonwearMarkers.length > 0,
	manual_nonwear_in_sleep: ({ payload: e }) => !0 === e.manualNonwearInSleep,
	marker_limit_exceeded: ({ after: e }) => e.sleepMarkers.length > an || e.nonwearMarkers.length > rn,
	split_not_strictly_inside: ({ before: e, payload: t }) => {
		const n = Br(t.periodIndex), a = Br(t.at);
		return null !== n && null !== a && !$r(e.sleepMarkers, n, a, Br(t.firstOffset) ?? a).ok;
	},
	merge_no_neighbor: ({ before: e, payload: t }) => {
		const n = Br(t.periodIndex), a = Wr(t.direction);
		return null !== n && ("prev" === a || "next" === a) && !qr(e.sleepMarkers, n, a).ok;
	},
	mutation_on_read_only_view: ({ context: e }) => !0 === e.readOnlyView,
	undo_beyond_history: ({ context: e }) => void 0 !== e.undoDepth && e.undoDepth <= 0,
	redo_beyond_history: ({ context: e }) => void 0 !== e.redoDepth && e.redoDepth <= 0
};
function ti(e, t) {
	const n = _[e]?.guards ?? [], a = [];
	for (const r of n) {
		const e = ei[r], n = H[r];
		e && n && e(t) && a.push({
			guard: r,
			severity: n.severity
		});
	}
	return a;
}
function ni(e, t) {
	const { isInvalidNightImplicit: n, ...a } = e, r = zr(t.isInvalidNight) ?? e.isInvalidNight;
	return {
		...a,
		isInvalidNight: r,
		...r && !0 === zr(t.isInvalidNightImplicit) ? { isInvalidNightImplicit: !0 } : {}
	};
}
function ai(e, t) {
	const n = t.stateAfter;
	if (null === n || "object" != typeof n) return {
		state: e,
		reconstructed: !1
	};
	const a = n, r = Jr(a.sleepMarkers), i = Xr(a.nonwearMarkers);
	return null === r || null === i ? {
		state: e,
		reconstructed: !1
	} : { state: {
		...ni(e, a),
		sleepMarkers: r,
		nonwearMarkers: i,
		explicitNoNonwear: zr(a.explicitNoNonwear) ?? e.explicitNoNonwear,
		needsConsensus: zr(a.needsConsensus) ?? e.needsConsensus,
		notes: Wr(a.notes) ?? e.notes
	} };
}
const ri = {
	marker_placed: (e, t) => {
		if ("nonwear" === Wr(t.category)) {
			const n = Br(t.startTimestamp), a = Br(t.endTimestamp);
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
		const n = Br(t.onsetTimestamp), a = Br(t.offsetTimestamp);
		if (null === n || null === a) return {
			state: e,
			reconstructed: !1
		};
		const r = Wr(t.markerType) ?? (i = e.sleepMarkers, (s = e).isInvalidNight && !0 !== s.isInvalidNightImplicit || i.some(kn) ? Ee.NAP : Ee.MAIN_SLEEP);
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
		const a = n, r = Jr(a.sleepMarkers), i = Xr(a.nonwearMarkers);
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
		const n = Br(t.periodIndex), a = t.updates;
		if (null === n || null === a || "object" != typeof a) return {
			state: e,
			reconstructed: !1
		};
		const r = a;
		if ("nonwear" === Wr(t.category)) {
			const t = e.nonwearMarkers.map((e, t) => t === n ? {
				...e,
				...r
			} : e);
			return { state: {
				...e,
				nonwearMarkers: t,
				explicitNoNonwear: Ur(t, e.explicitNoNonwear)
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
		const n = Br(t.periodIndex);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : "nonwear" === Wr(t.category) ? { state: {
			...e,
			nonwearMarkers: Vr(e.nonwearMarkers.filter((e, t) => t !== n))
		} } : { state: {
			...e,
			sleepMarkers: Vr(e.sleepMarkers.filter((e, t) => t !== n))
		} };
	},
	markers_cleared: (e) => ({ state: {
		...e,
		sleepMarkers: [],
		nonwearMarkers: []
	} }),
	sleep_period_split: (e, t) => {
		const n = Br(t.periodIndex), a = Br(t.at);
		if (null === n || null === a) return {
			state: e,
			reconstructed: !1
		};
		const r = $r(e.sleepMarkers, n, a, Br(t.firstOffset) ?? a);
		return r.ok && r.markers ? { state: {
			...e,
			sleepMarkers: r.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	sleep_period_merged: (e, t) => {
		const n = Br(t.periodIndex), a = Wr(t.direction);
		if (null === n || "prev" !== a && "next" !== a) return {
			state: e,
			reconstructed: !1
		};
		const r = qr(e.sleepMarkers, n, a);
		return r.ok && r.markers ? { state: {
			...e,
			sleepMarkers: r.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	session_start: (e, t) => {
		const n = Jr(t.sleepMarkers), a = Xr(t.nonwearMarkers);
		return null === n || null === a ? {
			state: e,
			reconstructed: !1
		} : {
			state: {
				...ni(e, t),
				sleepMarkers: n,
				nonwearMarkers: a,
				explicitNoNonwear: zr(t.explicitNoNonwear) ?? e.explicitNoNonwear,
				needsConsensus: zr(t.needsConsensus) ?? e.needsConsensus,
				notes: Wr(t.notes) ?? e.notes
			},
			reconstructed: void 0 !== t.notes
		};
	},
	markers_saved: (e, t, n) => {
		const a = Br(t.sleepCount), r = Br(t.nonwearCount);
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
	undo: ai,
	redo: ai,
	auto_score_applied: (e, t) => {
		const n = Jr(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: n
		} };
	},
	auto_nonwear_applied: (e, t) => {
		const n = Xr(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			nonwearMarkers: n,
			explicitNoNonwear: Ur(n, e.explicitNoNonwear)
		} };
	},
	consensus_toggled: (e, t) => {
		const n = zr(t.value);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			needsConsensus: n
		} };
	},
	invalid_night_toggled: (e, t) => {
		const n = zr(t.value);
		if (null === n) return {
			state: e,
			reconstructed: !1
		};
		const { isInvalidNightImplicit: a, ...r } = e;
		if (!n) return { state: {
			...r,
			isInvalidNight: !1
		} };
		const i = Vr(e.sleepMarkers.filter((e) => e.markerType !== Ee.MAIN_SLEEP)), s = !0 === zr(t.implicit);
		return { state: {
			...r,
			isInvalidNight: !0,
			...s ? { isInvalidNightImplicit: !0 } : {},
			sleepMarkers: i
		} };
	},
	no_nonwear_toggled: (e, t) => {
		const n = zr(t.value);
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
		const n = Wr(t.after);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			notes: n
		} };
	},
	candidate_copied: ai
};
function ii(e, t, n = {}) {
	const a = g(t), r = a.payload ?? {}, i = ri[a.action], s = i ? i(e, r, a) : { state: e }, o = s.state;
	return {
		state: o,
		violations: ti(a.action, {
			before: e,
			after: o,
			event: a,
			payload: r,
			context: n
		}),
		reconstructed: s.reconstructed ?? !0
	};
}
function si(e) {
	return "object" != typeof e || null === e ? null : "string" == typeof e.action ? g(e) : null;
}
function oi(e, t) {
	if ("markers_saved" !== e.action) return !1;
	const n = e.payload ?? {}, a = Br(n.sleepCount), r = Br(n.nonwearCount);
	return null !== a && null !== r && (a !== t.sleepMarkers.length || r !== t.nonwearMarkers.length);
}
function li(e) {
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
		const e = si(r), i = e ? ii(n, e) : {
			state: n,
			violations: [],
			reconstructed: !1
		};
		n = i.state, null !== e && !0 === _[e.action]?.stateKeyframe && i.reconstructed ? a = "exact" : i.reconstructed || "exact" !== a || (a = "divergent"), "exact" === a && null !== e && oi(e, n) && (a = "divergent"), t.push({
			state: n,
			basis: a,
			violations: i.violations
		});
	}
	return t;
}
function ci(e) {
	const t = [
		`${String(e.sleepMarkers.length)} sleep`,
		`${String(e.nonwearMarkers.length)} nonwear`,
		`invalid-night:${String(e.isInvalidNight)}`
	];
	return e.explicitNoNonwear && t.push("no-nonwear"), e.needsConsensus && t.push("needs-consensus"), e.notes.length > 0 && t.push(`notes ${String(e.notes.length)}ch`), t.join(", ");
}
function di(e) {
	return {
		sleep: e.sleepMarkers.map((e) => ({
			onset: e.onsetTimestamp,
			offset: e.offsetTimestamp,
			main: kn(e)
		})),
		nonwear: (e.nonwearMarkers ?? []).map((e) => ({
			start: e.startTimestamp,
			end: e.endTimestamp
		})),
		isInvalidNight: e.isInvalidNight ?? !1
	};
}
async function ui(e, t = f()) {
	if (0 === e.length) return [];
	const n = await t.settleManualNonwearNights(e.map(di));
	if (n.length !== e.length) throw new Error(`The manual-nonwear night rule answered ${String(n.length)} settle(s) for ${String(e.length)} night(s).`);
	return n;
}
function pi(e, t) {
	return 0 === t.removed.length ? e : t.kept.map((t, n) => ({
		...e[t],
		markerIndex: n + 1
	}));
}
async function mi(e, t) {
	const n = li(e), a = e.flatMap((e, t) => {
		const a = e.payload, r = n[t]?.state;
		return "session_start" === e.action && null != a && "boolean" != typeof a.manualNonwearInSleep && void 0 !== r && Array.isArray(a.sleepMarkers) && Array.isArray(a.nonwearMarkers) && a.sleepMarkers.length === r.sleepMarkers.length && a.nonwearMarkers.length === r.nonwearMarkers.length ? [t] : [];
	});
	if (0 === a.length) return n;
	const r = await async function(e, t) {
		return (await ui(e, t)).map((e) => e.removed.length > 0);
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
	}), li(i);
}
function fi(e) {
	return null === e ? J : e;
}
function _i(e) {
	return null == e ? Ge : e;
}
function yi(e) {
	return "__legacy_dr__" === e ? null : e;
}
function gi(e) {
	return {
		...e,
		algorithm: (t = e.algorithm, "__legacy__" === t ? null : t),
		detectionRule: yi(e.detectionRule)
	};
	var t;
}
function hi(e) {
	const t = (e) => Array.isArray(e) ? e.map(t) : e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, n]) => [e, t(n)])) : e;
	return JSON.stringify(t(e));
}
function wi(e, { date: t, username: n }, a, r) {
	const i = e.filter((e) => e.date === t && e.username === n);
	if (void 0 !== a) {
		const e = fi(a), t = _i(r), n = (e, t) => i.find((n) => n.algorithm === e && n.detectionRule === t);
		return n(e, t) ?? ("__legacy_dr__" !== t ? n(e, "__legacy_dr__") : void 0) ?? (null !== a ? n("__legacy__", "__legacy_dr__") : void 0);
	}
	return i.reduce((e, t) => !e || (t.id ?? 0) < (e.id ?? 0) ? t : e, void 0);
}
function bi(e, t, n, a) {
	return a.transaction("r", a.markers, async () => wi(await a.markers.where("[fileId+date+username]").equals([
		e.fileId,
		e.date,
		e.username
	]).toArray(), e, t, n));
}
async function vi(e, t, n, a, r, i = Se()) {
	const s = await bi({
		fileId: e,
		date: t,
		username: n
	}, a, r, i);
	return s ? gi(s) : void 0;
}
const ki = [
	"manualNonwearInSleep",
	"periodMetrics",
	"syncStatus"
];
function Si(e, t, n) {
	const a = Object.fromEntries(ki.filter((e) => e in t).map((e) => [e, t[e]]));
	return n.markers.update(e, a);
}
async function Ii(e, t = Se(), n, a) {
	const r = t;
	await ee(r, [r.markers], async () => {
		if (n) {
			const t = await r.markers.get(e);
			if (!t || hi(gi(t)) !== hi(n)) return;
		}
		await Si(e, { syncStatus: "conflict" }, r);
	}, a);
}
function Ei(e) {
	return `${me.SCORED_VARIANT_WARM}:${String(e)}`;
}
function Ai(e = w().jobs().jobs) {
	if (!ge()) return null;
	const t = Object.values(e).reverse().find((e) => Y(e) && e.workspaceId === Se().name && e.kind === me.SCORED_VARIANT_WARM && e.status !== xe.DONE && e.status !== xe.CANCELLED);
	return t ? {
		fileId: Number(t.key.split(":").at(-1)),
		done: t.done,
		total: t.total,
		...t.status === xe.FAILED ? { failed: !0 } : {}
	} : null;
}
function Ti(e, t) {
	if (!ge() || t && Se() !== t) return;
	const n = (t ?? Se()).name, a = w().jobs();
	if (!e) return;
	const r = Ei(e.fileId), i = `${n}:${r}`;
	a.jobs[i] && !e.failed || a.update(i, {
		id: i,
		workspaceId: n,
		key: r,
		kind: me.SCORED_VARIANT_WARM,
		label: "Scoring variants",
		controller: a.jobs[i]?.controller ?? new AbortController(),
		done: e.done,
		total: e.total,
		status: e.failed ? xe.FAILED : xe.RUNNING
	});
}
const Ri = /* @__PURE__ */ new Set(), Di = /* @__PURE__ */ new WeakMap();
function Oi(e) {
	return Ri.add(e), () => Ri.delete(e);
}
const Mi = /* @__PURE__ */ new Set();
function xi(e, t) {
	for (const n of Mi) n(e, t);
}
const Ci = "scored-variant-warm-backfill-v1", Ni = `placement-results-backfill-v${String(2)}`, Fi = "placement-results-backfill-generation-v1", Li = /* @__PURE__ */ new Set();
function Pi(e, t, n) {
	const a = n ? Di.get(n) : void 0;
	if (a?.db !== t) for (const r of Li) r([e], t);
	else a.files.add(e);
}
const ji = /* @__PURE__ */ new WeakMap();
async function Gi(e, t = Se(), n) {
	let a = c.currentTransaction;
	for (; a?.parent;) a = a.parent;
	if (await ie(t, [t.projectMeta], async () => {
		const e = await t.projectMeta.get(Fi);
		await t.projectMeta.put({
			key: Fi,
			revision: (e?.revision ?? 0) + 1
		}), await t.projectMeta.delete(Ni);
	}, n), !a || a.db !== t) {
		for (const a of new Set(e)) Pi(a, t, n);
		return;
	}
	let r = ji.get(a);
	if (!r) {
		r = /* @__PURE__ */ new Set(), ji.set(a, r);
		const e = r;
		a.idbtrans.addEventListener("complete", () => {
			for (const a of e) Pi(a, t, n);
		}, { once: !0 });
	}
	for (const i of e) r.add(i);
}
var Hi = "argument,value,context\ndatadir,,not applicable\ndo.report,\"c(2,4,5,6)\",not applicable\nf0,1,not applicable\nf1,542,not applicable\nmode,\"c(1,2,3,4,5,6)\",not applicable\noutputdir,,not applicable\nrawaccfiles_formats,csv,not applicable\nstudyname,,not applicable\nGGIRread_version,could not extract version,not applicable\nGGIRversion,3.0.0,not applicable\nR_version,R version 4.4.3 (2025-02-28),not applicable\nqwindow,\"c(0,24)\",params_247\nqlevels,\"c(0.958333333333333,0.979166666666667,0.993055555555556)\",params_247\nqwindow_dateformat,%d-%m-%Y,params_247\nilevels,c(),params_247\nIVIS_windowsize_minutes,60,params_247\nIVIS_epochsize_seconds,c(),params_247\nIVIS.activity.metric,2,params_247\nIVIS_acc_threshold,20,params_247\nqM5L5,c(),params_247\nMX.ig.min.dur,10,params_247\nM5L5res,10,params_247\nwinhr,\"c(5,10)\",params_247\niglevels,\"c(0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1025,1050,1075,1100,1125,1150,1175,1200,1225,1250,1275,1300,1325,1350,1375,1400,1425,1450,1475,1500,1525,1550,1575,1600,1625,1650,1675,1700,1725,1750,1775,1800,1825,1850,1875,1900,1925,1950,1975,2000,2025,2050,2075,2100,2125,2150,2175,2200,2225,2250,2275,2300,2325,2350,2375,2400,2425,2450,2475,2500,2525,2550,2575,2600,2625,2650,2675,2700,2725,2750,2775,2800,2825,2850,2875,2900,2925,2950,2975,3000,3025,3050,3075,3100,3125,3150,3175,3200,3225,3250,3275,3300,3325,3350,3375,3400,3425,3450,3475,3500,3525,3550,3575,3600,3625,3650,3675,3700,3725,3750,3775,3800,3825,3850,3875,3900,3925,3950,3975,4000,8000)\",params_247\nLUXthresholds,\"c(0,100,500,1000,3000,5000,10000)\",params_247\nLUX_cal_constant,c(),params_247\nLUX_cal_exponent,c(),params_247\nLUX_day_segments,c(),params_247\nwindow.summary.size,10,params_247\nL5M5window,\"c(0,24)\",params_247\ncosinor,TRUE,params_247\nincludedaycrit,1,params_cleaning\nndayswindow,7,params_cleaning\nstrategy,1,params_cleaning\nmaxdur,0,params_cleaning\nhrs.del.start,0,params_cleaning\nhrs.del.end,0,params_cleaning\nincludedaycrit.part5,0.083333333,params_cleaning\nexcludefirstlast.part5,FALSE,params_cleaning\nTimeSegments2ZeroFile,c(),params_cleaning\ndo.imp,TRUE,params_cleaning\ndata_cleaning_file,c(),params_cleaning\nminimum_MM_length.part5,23,params_cleaning\nexcludefirstlast,FALSE,params_cleaning\nincludenightcrit,1,params_cleaning\nexcludefirst.part4,FALSE,params_cleaning\nexcludelast.part4,FALSE,params_cleaning\nmax_calendar_days,0,params_cleaning\nnonWearEdgeCorrection,TRUE,params_cleaning\nnonwear_approach,2023,params_cleaning\nsegmentWEARcrit.part5,0.5,params_cleaning\nsegmentDAYSPTcrit.part5,\"c(0.9,0)\",params_cleaning\noverwrite,FALSE,params_general\nacc.metric,ENMO,params_general\nmaxNcores,c(),params_general\nprint.filename,FALSE,params_general\ndo.parallel,TRUE,params_general\nwindowsizes,\"c(5,900,3600)\",params_general\ndesiredtz,EST,params_general\nconfigtz,c(),params_general\nidloc,1,params_general\ndayborder,0,params_general\npart5_agg2_60seconds,FALSE,params_general\nsensor.location,wrist,params_general\nexpand_tail_max_hours,c(),params_general\nrecordingEndSleepHour,c(),params_general\ndataFormat,raw,params_general\nmaxRecordingInterval,c(),params_general\nextEpochData_timeformat,%d-%m-%Y %H:%M:%S,params_general\ndo.anglex,FALSE,params_metrics\ndo.angley,FALSE,params_metrics\ndo.anglez,TRUE,params_metrics\ndo.zcx,FALSE,params_metrics\ndo.zcy,FALSE,params_metrics\ndo.zcz,FALSE,params_metrics\ndo.enmo,TRUE,params_metrics\ndo.lfenmo,FALSE,params_metrics\ndo.en,FALSE,params_metrics\ndo.mad,FALSE,params_metrics\ndo.enmoa,FALSE,params_metrics\ndo.roll_med_acc_x,FALSE,params_metrics\ndo.roll_med_acc_y,FALSE,params_metrics\ndo.roll_med_acc_z,FALSE,params_metrics\ndo.dev_roll_med_acc_x,FALSE,params_metrics\ndo.dev_roll_med_acc_y,FALSE,params_metrics\ndo.dev_roll_med_acc_z,FALSE,params_metrics\ndo.bfen,FALSE,params_metrics\ndo.hfen,FALSE,params_metrics\ndo.hfenplus,FALSE,params_metrics\ndo.lfen,FALSE,params_metrics\ndo.lfx,FALSE,params_metrics\ndo.lfy,FALSE,params_metrics\ndo.lfz,FALSE,params_metrics\ndo.hfx,FALSE,params_metrics\ndo.hfy,FALSE,params_metrics\ndo.hfz,FALSE,params_metrics\ndo.bfx,FALSE,params_metrics\ndo.bfy,FALSE,params_metrics\ndo.bfz,FALSE,params_metrics\ndo.brondcounts,FALSE,params_metrics\ndo.neishabouricounts,FALSE,params_metrics\nhb,15,params_metrics\nlb,0.2,params_metrics\nn,4,params_metrics\nzc.lb,0.25,params_metrics\nzc.hb,3,params_metrics\nzc.sb,0.01,params_metrics\nzc.order,2,params_metrics\nzc.scale,1,params_metrics\nactilife_LFE,FALSE,params_metrics\nepochvalues2csv,FALSE,params_output\nsave_ms5rawlevels,TRUE,params_output\nsave_ms5raw_format,csv,params_output\nsave_ms5raw_without_invalid,TRUE,params_output\nstorefolderstructure,FALSE,params_output\ntimewindow,WW,params_output\nviewingwindow,1,params_output\ndofirstpage,TRUE,params_output\nvisualreport,TRUE,params_output\nweek_weekend_aggregate.part5,FALSE,params_output\ndo.part3.pdf,TRUE,params_output\noutliers.only,TRUE,params_output\ncriterror,4,params_output\ndo.visual,TRUE,params_output\ndo.sibreport,FALSE,params_output\ndo.part2.pdf,TRUE,params_output\nsep_reports,\",\",params_output\nsep_config,\",\",params_output\nvisualreport_without_invalid,FALSE,params_output\nmvpathreshold,100,params_phyact\nboutcriter,0.8,params_phyact\nmvpadur,\"c(1,5,10)\",params_phyact\nboutcriter.in,0.9,params_phyact\nboutcriter.lig,0.8,params_phyact\nboutcriter.mvpa,0.8,params_phyact\nthreshold.lig,30,params_phyact\nthreshold.mod,100,params_phyact\nthreshold.vig,400,params_phyact\nboutdur.mvpa,\"c(1,5,10)\",params_phyact\nboutdur.in,\"c(1,10,30)\",params_phyact\nboutdur.lig,\"c(1,10,30)\",params_phyact\nfrag.metrics,all,params_phyact\nchunksize,1,params_rawdata\nspherecrit,0.3,params_rawdata\nminloadcrit,72,params_rawdata\nprintsummary,FALSE,params_rawdata\ndo.cal,TRUE,params_rawdata\nbackup.cal.coef,retrieve,params_rawdata\ndynrange,c(),params_rawdata\nminimumFileSizeMB,2,params_rawdata\nrmc.dec,.,params_rawdata\nrmc.firstrow.acc,c(),params_rawdata\nrmc.firstrow.header,c(),params_rawdata\nrmc.header.length,c(),params_rawdata\nrmc.col.acc,\"c(1,2,3)\",params_rawdata\nrmc.col.temp,c(),params_rawdata\nrmc.col.time,c(),params_rawdata\nrmc.unit.acc,g,params_rawdata\nrmc.unit.temp,C,params_rawdata\nrmc.unit.time,POSIX,params_rawdata\nrmc.format.time,%Y-%m-%d %H:%M:%OS,params_rawdata\nrmc.bitrate,c(),params_rawdata\nrmc.dynamic_range,c(),params_rawdata\nrmc.unsignedbit,TRUE,params_rawdata\nrmc.origin,1/1/1970,params_rawdata\nrmc.desiredtz,c(),params_rawdata\nrmc.configtz,c(),params_rawdata\nrmc.sf,c(),params_rawdata\nrmc.headername.sf,c(),params_rawdata\nrmc.headername.sn,c(),params_rawdata\nrmc.headername.recordingid,c(),params_rawdata\nrmc.header.structure,c(),params_rawdata\nrmc.check4timegaps,FALSE,params_rawdata\nrmc.noise,13,params_rawdata\nrmc.col.wear,c(),params_rawdata\nrmc.doresample,FALSE,params_rawdata\ninterpolationType,1,params_rawdata\nimputeTimegaps,TRUE,params_rawdata\nfrequency_tol,0.1,params_rawdata\nrmc.scalefactor.acc,1,params_rawdata\nanglethreshold,5,params_sleep\ntimethreshold,5,params_sleep\nignorenonwear,TRUE,params_sleep\nconstrain2range,TRUE,params_sleep\nHASPT.algo,HDCZA,params_sleep\nHASIB.algo,vanHees2015,params_sleep\nSadeh_axis,,params_sleep\nlongitudinal_axis,c(),params_sleep\nHASPT.ignore.invalid,FALSE,params_sleep\nloglocation,c(),params_sleep\ncolid,1,params_sleep\ncoln1,2,params_sleep\nnnights,c(),params_sleep\nrelyonguider,FALSE,params_sleep\ndef.noc.sleep,1,params_sleep\nsleeplogsep,c(),params_sleep\nsleepwindowType,SPT,params_sleep\npossible_nap_window,\"c(9,18)\",params_sleep\npossible_nap_dur,\"c(15,240)\",params_sleep\n";
const $i = "sleep-scoring:core-answer:", qi = /* @__PURE__ */ new Map();
let Bi = null;
function zi(e) {
	if (Bi) return Bi;
	const t = [];
	Bi = t;
	try {
		const n = globalThis.localStorage, a = Array.from({ length: n.length }, (e, t) => n.key(t) ?? "");
		for (const r of a) r.startsWith($i) && (r.startsWith(`${$i}${e}:`) ? t.push(r) : n.removeItem(r));
	} catch {}
	return t;
}
function Wi(e, t, n) {
	const a = "b05e0b3895dd238fa3094b3136d5da82b793dc358cb6fb4feadbc0b8e174faee";
	zi(a);
	const r = `${$i}${a}:${e}:${t}`;
	let i = qi.get(r);
	if (!i && (i = (async () => {
		try {
			const e = globalThis.localStorage?.getItem(r);
			if (e) return JSON.parse(e);
		} catch {}
		const e = await n();
		try {
			globalThis.localStorage?.setItem(r, JSON.stringify(e)), function(e, t) {
				const n = zi(e);
				for (n.includes(t) || n.push(t); n.length > 1e3;) {
					const e = n.shift();
					try {
						e && globalThis.localStorage?.removeItem(e);
					} catch {}
				}
			}(a, r);
		} catch {}
		return e;
	})(), i.catch(() => qi.delete(r)), qi.set(r, i), qi.size > 1e3)) {
		const e = qi.keys().next();
		e.done || qi.delete(e.value);
	}
	return i;
}
const Vi = Object.freeze({
	name: "default ELEMENT",
	sha256: L(Hi),
	csvText: Hi
});
function Ui(e) {
	const t = e?.ggir_config;
	if (t && "object" == typeof t) {
		const e = t;
		if ("string" == typeof e.name && "string" == typeof e.csvText && "string" == typeof e.sha256 && L(e.csvText) === e.sha256) return e;
	}
	return Vi;
}
function Ki(e, t) {
	const n = /^"?Sadeh_axis"?,\s*"?([XYZ])"?,/m.exec(e)?.[1] ?? "Y";
	return t?.[{
		X: 0,
		Y: 1,
		Z: 2
	}[n]];
}
function Qi(e, t, n) {
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
const Ji = {
	[ct.van_hees_2013]: "2013",
	[ct.van_hees_2023]: "2023"
};
async function Xi(e, t) {
	return Wi("ggir-part2-nonwear", L(e ?? ""), async () => (await t.ggirAppConfigSummary(e, !0)).applied.nonwearApproach === Ji.van_hees_2013 ? ct.van_hees_2013 : ct.van_hees_2023);
}
function Yi(e) {
	return Object.hasOwn(A, e);
}
async function Zi(e, t) {
	const n = Object.entries(e), a = await Promise.all(n.map(([, e]) => e.windowForNight(t))), r = {};
	return n.forEach(([e], t) => {
		const n = a[t];
		n && Yi(e) && (r[e] = n);
	}), r;
}
function es(e, t) {
	return Object.entries(e).reduce((e, [n, a]) => ({
		...e,
		...a.fingerprint((Yi(n) ? t[n] : void 0) ?? null)
	}), {});
}
async function ts(e, t, n) {
	return (await Promise.all(Object.values(e).map((e) => e.stampInput(t, n)))).reduce((e, t) => ({
		...e,
		...t
	}), {});
}
function ns(e, t) {
	return Object.values(e).flatMap((e) => e.tables(t));
}
const as = "diary", rs = "none", is = new Set(Object.values(_e));
function ss(e) {
	if (!e) return [];
	const t = [];
	for (const [n, a] of e) null != n && "" !== n.trim() && t.push({
		onset_time: n,
		offset_time: a ?? null
	});
	return t;
}
function os(e) {
	if (!e) return [];
	const t = [];
	for (const [n, a] of e) null != n && null != a && "" !== n.trim() && "" !== a.trim() && t.push({
		start_time: n,
		end_time: a
	});
	return t;
}
function ls(e, t) {
	const n = (e) => ({
		source_a: e,
		source_b: "none",
		fusion_policy: "use_source_a",
		apply_nonwear_gate: !1
	});
	switch (e) {
		case le.DIARY: return;
		case le.HDCZA: return n("hdcza");
		case le.L5: return n("l5");
		case le.LONGEST_BOUT: return n("selected_scorer_longest_bout");
		case le.EVENT_MARKER: return n("event_marker");
		case le.ACTIWARE_REST_INTERVAL: return n("actiware_rest_interval");
		case le.NONE: return n("none");
		case le.SMART:
			if (t.hasDiary) return;
			return n("lstm_sleep_wake" === (a = t.algorithm) ? "selected_scorer_longest_bout" : N(a) ? "hdcza" : "l5");
		default: return;
	}
	var a;
}
function cs(e) {
	const t = Number.parseInt((e ?? "").split(":")[0] ?? "", 10);
	return Number.isInteger(t) && t >= 0 && t <= 23 ? t : null;
}
function ds(e) {
	const t = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime), n = N(e.algorithm) ? void 0 : us(e), a = N(e.algorithm) && !t ? Dn.HDCZA : Dn.DIARY;
	return {
		...zn(e.sleepPeriodDetection),
		...n ?? {
			source_a: a,
			source_b: Dn.NONE,
			fusion_policy: On
		}
	};
}
function us(e) {
	if (e.sleepPeriodDetection && !Pn(Bn(e.sleepPeriodDetection))) {
		const t = zn(e.sleepPeriodDetection);
		return {
			source_a: t.source_a,
			source_b: t.source_b,
			fusion_policy: t.fusion_policy,
			apply_nonwear_gate: t.apply_nonwear_gate
		};
	}
	const t = e.periodGuider ?? le.SMART, n = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime);
	return ls(t, {
		algorithm: e.algorithm ?? null,
		hasDiary: n
	});
}
function ps(e) {
	const t = { ruleset: N(e.algorithm) ? U.GGIR_PART4 : e.ruleset ?? "legacy" };
	e.algorithm && is.has(e.algorithm) && (t.classifier = e.algorithm), null != e.epochLengthSeconds && (t.epoch_length_seconds = e.epochLengthSeconds), null != e.onsetMinConsecutiveSleep && (t.onset_min_consecutive_sleep = e.onsetMinConsecutiveSleep), null != e.offsetMinConsecutiveMinutes && (t.offset_min_consecutive_minutes = e.offsetMinConsecutiveMinutes), e.scorerPostprocessing && (t.scorer_postprocessing = e.scorerPostprocessing);
	const { nonwear_detector: n, nonwear_detectors: a } = ys(e.nonwearDetectors, null, { alwaysNameSingle: !1 });
	if (n && (t.nonwear_detector = n), a && (t.nonwear_detectors = a), e.sleepPeriodDetection) {
		const n = Bn(e.sleepPeriodDetection);
		t.merge_gap_minutes = n.mergeGapMinutes, t.padding_minutes = n.paddingMinutes, t.min_overlap_jaccard = n.minOverlapJaccard;
	}
	const r = us(e);
	return r && (t.detection = r), t;
}
const ms = "study_selection", fs = Object.values(ct);
function _s(e) {
	const t = (e) => {
		const t = fs.indexOf(e);
		return -1 === t ? fs.length : t;
	};
	return [...e].sort((e, n) => t(e) - t(n));
}
function ys(e, t, { alwaysNameSingle: n, memberFlags: a }) {
	if (!e || 0 === e.length) return {};
	if (1 === e.length) {
		const [t] = e;
		return n || t !== ct.choi_2011 ? { nonwear_detector: t } : {};
	}
	return {
		nonwear_detectors: _s(e),
		...t ? { nonwear_weight: [...t] } : {},
		...t && a ? { nonwear_member_flags: [...a] } : {}
	};
}
function gs(e) {
	const t = {
		analysis_date: e.analysisDate ?? "",
		epoch_length_seconds: e.epochLengthSeconds ?? He,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (t.choi_nonwear = e.choiNonwear);
	const { nonwear_weight: n, nonwear_member_flags: a } = ys(e.nonwearDetectors, e.nonwearWeight, {
		alwaysNameSingle: !1,
		memberFlags: e.nonwearMemberFlags
	});
	n && (t.nonwear_weight = n), a && (t.nonwear_member_flags = a), e.ggirInvalid && (t.ggir_invalid = Array.from(e.ggirInvalid)), e.ggirHasptAlgo && (t.ggir_haspt_algo = e.ggirHasptAlgo), e.ggirConfigCsv && (t.ggir_config_csv = e.ggirConfigCsv), e.ggirDiaryHasBedlog && (t.ggir_diary_has_bedlog = !0), e.ggirDiaryHasSleeplog && (t.ggir_diary_has_sleeplog = !0), e.sensorNonwear && e.sensorNonwear.length > 0 && (t.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (t.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (t.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (t.diary_in_bed_time = e.diaryBedTime), null != e.diaryOutBedTime && (t.diary_out_bed_time = e.diaryOutBedTime);
	const r = ss(e.diaryNaps);
	r.length > 0 && (t.diary_naps = r);
	const i = os(e.diaryNonwear);
	i.length > 0 && (t.diary_nonwear = i);
	for (const [s, o] of Object.entries(e.guiderWindows ?? {})) o && Yi(s) && (t[A[s]] = [o.startTimestamp, o.endTimestamp]);
	return e.eventMarkerTimestamps && e.eventMarkerTimestamps.length > 0 && (t.event_marker_timestamps = Array.from(e.eventMarkerTimestamps)), null != e.nightStartHour && (t.night_start_hour = e.nightStartHour), null != e.nightEndHour && (t.night_end_hour = e.nightEndHour), t;
}
function hs(e) {
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
	const n = ss(e.diaryNaps);
	n.length > 0 && (t.diary_naps = n);
	const a = os(e.diaryNonwear);
	return a.length > 0 && (t.diary_nonwear = a), t;
}
function ws(e) {
	return e && 0 !== e.length ? e.map(([e, t]) => [e, t]) : null;
}
function bs(e) {
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
function vs(e) {
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
function ks(e, t) {
	const n = {
		onset_timestamp: e.onset_timestamp,
		offset_timestamp: e.offset_timestamp,
		marker_type: e.marker_type,
		marker_index: e.marker_index
	};
	return t && (n.placement = t), n;
}
function Ss(e) {
	return {
		kind: "refused",
		reason: e
	};
}
function Is(e, t, n) {
	if (!e) return Ss("The placement engine returned no result for this night.");
	const a = e.guider ?? n, r = null == e.guider ? t : {
		...t,
		source_a: e.guider
	}, i = (e.decisions ?? []).map(vs), s = (e, t) => i.find((n) => n.marker_type === e && n.marker_index === t);
	return {
		kind: "placed",
		sleep_markers: (e.sleep_markers ?? []).map((e) => ks(e, s(e.marker_type, e.marker_index))),
		nap_markers: (e.nap_markers ?? []).map((e) => ks(e, s(e.marker_type, e.marker_index))),
		notes: e.notes ?? [],
		decisions: i,
		sleep_period_detection_config: r,
		effective_detection_source_a: a,
		invalid_night: e.invalid_night ?? null,
		diary_available: e.diary_available ?? null
	};
}
const Es = "Marker placement is unavailable in this build — reload while online to update the local engine.";
async function As(e, t) {
	const n = ds(e), a = String(n.source_a);
	if (0 === e.timestamps.length) return Ss("No activity data");
	const r = function(e) {
		let t;
		if ("variant" in e) {
			const { variant: r, timestamps: i, activityCounts: s, sleepScores: o, analysisDate: l, epochLengthSeconds: c, guiderWindows: d, diary: u, onsetMinConsecutiveSleep: p, offsetMinConsecutiveMinutes: m, choiNonwear: f, nonwearDetectors: _, nonwearWeight: y, nonwearMemberFlags: g, eventMarkerTimestamps: h } = e, w = r.config.rescoring === Fe.WEBSTER && (a = Fe.WEBSTER) === Fe.WEBSTER ? { preset: a } : void 0;
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
				diaryNaps: ws(u?.naps),
				diaryNonwear: ws(u?.nonwear),
				...void 0 !== p ? { onsetMinConsecutiveSleep: p } : {},
				...void 0 !== m ? { offsetMinConsecutiveMinutes: m } : {},
				...(n = r.config.periodSource, n === as ? { periodGuider: as } : n === rs ? { periodGuider: rs } : { sleepPeriodDetection: {
					sourceA: n,
					sourceB: Dn.NONE,
					fusionPolicy: On,
					applyNonwearGate: !1
				} })
			};
		} else t = e;
		var n, a;
		return bs({
			config: ps(t),
			days: [gs(t), ...(t.contextDays ?? []).filter((e) => e.analysisDate !== (t.analysisDate ?? "")).map(hs)]
		});
	}(e), s = await (e.wasmApiOverride ?? t()).placeMarkers(i(r, r.slice(1).filter((t) => ArrayBuffer.isView(t) && ![e, ...e.contextDays ?? []].some((e) => t === e.timestamps || t === e.activityCounts || t === e.sleepScores || t === e.choiNonwear)).map((e) => e.buffer)));
	return s ? Is((e.analysisDate ? s.results.find((t) => t.analysis_date === e.analysisDate) : void 0) ?? s.results[0], n, a) : Ss(Es);
}
async function Ts(e, t) {
	const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), r = [];
	for (const [i, d] of e.entries()) {
		const e = ps(d);
		if (0 === d.timestamps.length || d.wasmApiOverride) {
			r.push(i);
			continue;
		}
		const t = JSON.stringify(e), s = "legacy" === e.ruleset && 0 === (d.contextDays?.length ?? 0) ? n : a;
		s.set(t, [...s.get(t) ?? [], i]);
	}
	const s = new Array(e.length), o = [...a.values()].flatMap((t) => {
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
	}), l = [...r, ...[...n.values()].filter((e) => 1 === e.length).flat()];
	await Promise.all(l.map(async (n) => {
		s[n] = await As(e[n], () => t);
	}));
	const c = (e, t, n) => {
		for (const [a, r] of e.entries()) {
			const e = t[a], i = ds(e), o = n?.results.find((t) => t.analysis_date === e.analysisDate);
			s[r] = n ? Is(o ?? n.results[a], i, String(i.source_a)) : Ss(Es);
		}
	};
	return await Promise.all([...[...n.values()].filter((e) => e.length > 1).map(async (n) => {
		const a = n.map((t) => e[t]), r = function(e) {
			const t = e[0];
			if (!t) throw new Error("buildNightsPlacementRequest needs at least one night.");
			return bs({
				config: ps(t),
				days: e.map(gs)
			});
		}(a);
		c(n, a, await t.placeMarkers(i(r, r.slice(1).map((e) => e.buffer))));
	}), ...o.map(async ({ group: e, members: n, context: a }) => {
		const r = bs({
			config: ps(n[0]),
			days: [...n.map(gs), ...a.map(hs)]
		}), s = new Set([...n, ...a].flatMap((e) => [
			e.timestamps,
			e.activityCounts,
			e.sleepScores,
			e.choiNonwear
		])), o = r.slice(1).filter((e) => ArrayBuffer.isView(e) && !s.has(e)).map((e) => e.buffer);
		c(e, n, await t.placeNights(i([...r, n.length], o)));
	})]), s;
}
function Rs(e, t) {
	return "boolean" === e.kind ? "boolean" == typeof t : "enum" === e.kind ? "string" == typeof t && !!e.members?.includes(t) : "number" == typeof t && Number.isFinite(t) && ("integer" !== e.kind || Number.isInteger(t)) && (void 0 === e.minimum || t >= e.minimum) && (void 0 === e.maximum || t <= e.maximum);
}
const Ds = [
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
], Os = {
	low: 20,
	medium: 40,
	high: 80
}, Ms = [
	"one_per_night",
	"nap_detection",
	"min_nap_minutes",
	"nap_sensitivity",
	"eventmarker_adj",
	"actogram_start_seconds"
], xs = { eventmarker_adj: !0 }, Cs = {
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
}, Ns = { wake_threshold: {
	field: "wake_threshold_selection",
	value: "custom"
} };
function Fs(e) {
	if (null === e || "object" != typeof e || Array.isArray(e)) return {};
	const t = e, n = Ds.filter((e) => function(e, t) {
		return Rs(Cs[e], t);
	}(e, t[e])), a = Ns;
	return Object.fromEntries(n.filter((e) => {
		const r = a[e];
		return void 0 === r || !n.includes(r.field) || t[r.field] === r.value;
	}).map((e) => [e, t[e]]));
}
const Ls = {
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
}, Ps = {
	use_saved_rest_intervals: !0,
	rest_autoscore: "actiware"
};
function js(e) {
	const t = null === e || "object" != typeof e || Array.isArray(e) ? {} : e;
	return Object.fromEntries(Object.entries(Ls).map(([e, n]) => [e, Rs(n, t[e]) ? t[e] : Ps[e]]));
}
const Gs = {
	actiware_analysis_settings_object: function(e) {
		return 0 === Object.keys(Fs(e)).length;
	},
	actiware_rest_proposal_settings_object: function(e) {
		const t = js(e);
		return Object.keys(Ps).every((e) => t[e] === Ps[e]);
	}
};
function Hs(e) {
	return "five_s" === Le(e?.sourceType)?.epochFamily;
}
function $s(e) {
	return Object.values(tt).includes(e) ? e : de.analysis_paradigm;
}
function qs(e, t) {
	const n = e?.sourceProfileId, a = n ? r[n] ?? null : null;
	return a?.paradigm === t ? a : null;
}
function Bs(e) {
	const t = e?.sourceProfileId;
	return null != t && void 0 !== r[t];
}
function zs(e, t) {
	const n = e?.sourceProfileId;
	return null != n && r[n]?.sleepAlgorithm === t;
}
function Ws(e, t) {
	return qs(e, $s(t))?.editedRecord ?? st.sleep_periods;
}
function Vs(e, t, n) {
	const a = qs(n, t), r = void 0 === e.nonwearDetectorsGgir ? e : {
		...e,
		nonwearDetectorsGgir: uo(e.nonwearDetectorsGgir, n)
	};
	return a ? {
		...r,
		algorithm: a.sleepAlgorithm,
		periodGuider: a.periodGuider ?? e.periodGuider,
		nonwearDetectorsCounts: Qs(e.nonwearDetectorsCounts, a.nonwearDetectors, Us(n)),
		placementFromSource: a.placementFromSource
	} : {
		...r,
		algorithm: Js(e.algorithm, n),
		placementFromSource: !1
	};
}
function Us(e) {
	const t = e?.resolvedCapabilities, n = e?.sourceProfileId;
	return void 0 === t || null == n ? [] : (I[n] ?? []).filter((e) => {
		const n = l[e];
		return void 0 === n || !n.every((e) => e.some((e) => t.includes(e)));
	});
}
const Ks = /* @__PURE__ */ new WeakMap();
function Qs(e, t, n) {
	const a = `${t.join(",")}|${n.join(",")}`;
	let r = Ks.get(e);
	r || Ks.set(e, r = /* @__PURE__ */ new Map());
	const i = r.get(a);
	if (i) return i;
	const s = Object.freeze(e.filter((e) => t.includes(e) && !n.includes(e)));
	return r.set(a, s), s;
}
function Js(e, t) {
	const n = (a = t?.sourceType, Le(a)?.defaultSleepAlgorithm ?? null);
	var a;
	return null === n || N(e) ? e : n;
}
function Xs(e, t) {
	return Vs({
		algorithm: e.currentAlgorithm,
		periodGuider: e.periodGuider,
		nonwearDetectorsCounts: e.nonwearDetectorsCounts,
		...void 0 === e.nonwearDetectorsGgir ? {} : { nonwearDetectorsGgir: e.nonwearDetectorsGgir }
	}, $s(e.analysisParadigm), t);
}
function Ys(e) {
	const t = e.placementFromSource ? e.periodGuider : (n = e.algorithm, Object.values(r).find((e) => e.sleepAlgorithm === n && null !== e.periodGuider)?.periodGuider ?? void 0);
	var n;
	const a = t ? ls(t, {
		algorithm: e.algorithm,
		hasDiary: !1
	}) : void 0;
	return a ? Bn({
		...zn(e.sleepPeriodDetection),
		...a
	}) : e.sleepPeriodDetection;
}
const Zs = Ds, eo = Fs;
function to(e, t) {
	const n = e[t];
	if (null == n) throw new Error(`The stored Actiware settings lack ${t}; import the file again.`);
	return n;
}
function no(e, t) {
	const n = eo(t);
	if (0 === Object.keys(n).length) return e;
	const a = {
		...e,
		...n
	}, r = void 0 === n.wake_threshold_selection ? void 0 : Os[n.wake_threshold_selection];
	return void 0 !== r && (a.wake_threshold = r), void 0 !== n.actogram_start_seconds && (a.actogram_start_hour = Math.floor(n.actogram_start_seconds / 3600)), a;
}
function ao(e, t) {
	return "nap_detection" === t ? e.nap_detection ?? !1 : "min_nap_minutes" === t ? e.min_nap_minutes ?? 40 : "nap_sensitivity" === t ? e.nap_sensitivity ?? "high" : "actogram_start_seconds" === t ? function(e) {
		return e.actogram_start_seconds ?? 3600 * to(e, "actogram_start_hour");
	}(e) : e[t];
}
function ro(e, t) {
	return Zs.every((n) => ao(e, n) === ao(t, n));
}
function io(e, t) {
	return Ms.some((n) => ao(e, n) !== ao(t, n));
}
function so(e, t, n) {
	if (null == t) return t;
	const a = xs, r = oo(e, t, n).map((e) => [e, a[e]]);
	return {
		...Object.fromEntries(r),
		...eo(t)
	};
}
function oo(e, t, n) {
	if (null == t) return [];
	const a = eo(t);
	return !n.some((e) => "rest" === e.kind) || io(e, no(e, a)) ? Object.keys(xs).filter((e) => void 0 === a[e]) : [];
}
const lo = Object.freeze([ct.ggir_saved]), co = {
	[ct.van_hees_2013]: Object.freeze([ct.van_hees_2013]),
	[ct.van_hees_2023]: Object.freeze([ct.van_hees_2023])
};
function uo(e, t) {
	const n = In(t);
	return !n && e.includes(ct.ggir_saved) && t?.ggirNonwearDetector ? t.ggirNonwearDetector === ct.van_hees_2013 ? co.van_hees_2013 : co.van_hees_2023 : n && e.some((e) => e === ct.van_hees_2023 || e === ct.van_hees_2013) ? lo : e.every((e) => e === ct.ggir_saved === n) ? e : Qs(e, n ? lo : e.filter((e) => e !== ct.ggir_saved), []);
}
const po = "Scores were computed with different settings, so this night can't be auto-scored. Manual scoring still works.";
function mo(e) {
	return j.some((t) => e.startsWith(t));
}
function fo(e, t) {
	const n = "string" == typeof t ? t : "recordedCellId" in t ? t.recordedCellId : t.id, a = e.map((e) => (e?.algorithmResults)?.[n]);
	if (!mo(n)) return {
		status: "ok",
		outputs: a,
		configHash: null
	};
	let r = null, i = "string" != typeof t && "recordedCellId" in t;
	if ("string" == typeof t) {
		const e = (s = n, jt ??= new Map(Gt().configs.map((e) => [e.id, e])), jt.get(s));
		r = e?.configHash ?? null, i = void 0 === e;
	} else if (!("recordedCellId" in t)) {
		const e = wt(t);
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
function _o(e) {
	const t = {};
	for (const n of Object.keys(e.algorithmResults ?? {})) t[n] = !0;
	return {
		...void 0 === e.date ? {} : { date: e.date },
		algorithmResults: t,
		algorithmResultHashes: e.algorithmResultHashes
	};
}
function yo(e) {
	return e || "";
}
function go(e, t) {
	return wo(ho(e), t);
}
function ho(e) {
	return [...e].filter((e) => void 0 !== e).map(_o).sort((e, t) => (e.date ?? "").localeCompare(t.date ?? ""));
}
function wo(e, t) {
	const n = yo(t) || e.map((e) => Object.keys(e.algorithmResults)[0]).find((e) => void 0 !== e) || null;
	return null === n ? {
		key: n,
		status: "ok",
		configHash: null
	} : (() => {
		const t = fo(e, n);
		return "stale" === t.status ? {
			key: n,
			status: "stale",
			reason: po
		} : {
			key: n,
			status: "ok",
			configHash: t.configHash
		};
	})();
}
const bo = go([]);
function vo(e) {
	const t = ho(e), n = /* @__PURE__ */ new Map(), a = [...new Set(t.flatMap((e) => Object.keys(e.algorithmResults)))].filter(mo);
	return Object.assign((e) => {
		const a = yo(e);
		let r = n.get(a);
		return r || (r = wo(t, e), n.set(a, r)), r;
	}, { cellIds: a });
}
function ko(e, t) {
	if ("stale" === t.status) return {
		status: "stale",
		reason: t.reason
	};
	if (null === t.key) return {
		status: "ok",
		key: null,
		outputs: e.map(() => {})
	};
	const n = fo(e, t.key);
	return "stale" === n.status || null !== n.configHash && null !== t.configHash && n.configHash !== t.configHash ? {
		status: "stale",
		reason: po
	} : {
		status: "ok",
		key: t.key,
		outputs: n.outputs
	};
}
function So(e) {
	const t = {
		algorithmResults: e?.algorithmResults ?? {},
		algorithmResultHashes: e?.algorithmResultHashes
	};
	return Object.keys(t.algorithmResults).flatMap((e) => {
		const n = fo([t], mo(e) ? { recordedCellId: e } : e), a = "ok" === n.status ? n.outputs[0] : void 0;
		return void 0 === a ? [] : [[e, a]];
	});
}
function Io(e, t) {
	const n = {};
	for (const [a, r] of Object.entries(e ?? {})) {
		const e = t(r, a);
		void 0 !== e && (n[a] = e);
	}
	return n;
}
function Eo(e) {
	const t = {}, n = {};
	for (const { cubeConfig: a, results: r } of e ?? []) {
		const e = wt(a);
		if (null === e) throw new Error(`Refused a cube output for ${a.id}: not a planned config`);
		t[e.cellId] = r.slice(0), n[e.cellId] = e.configHash;
	}
	return {
		algorithmResults: t,
		algorithmResultHashes: n
	};
}
function Ao(e) {
	const t = "string" == typeof e.algoKey ? ft(e.algoKey) : null;
	if (null !== t) return {
		algoKey: t,
		algoVersion: mt(t),
		paramsHash: ""
	};
	const n = wt(e.cubeConfig);
	return null === n ? null : {
		algoKey: n.cellId,
		algoVersion: n.implementationVersion,
		paramsHash: n.configHash
	};
}
function To(e) {
	const t = e?.timestamps, n = t ? new Float64Array(t) : /* @__PURE__ */ new Float64Array(0), a = 0 === n.length ? e?.ggirTimestamps : void 0, r = Boolean(a?.byteLength), i = r ? e?.ggirSib : void 0;
	return {
		timestamps: r ? new Float64Array(a) : n,
		epochSec: r ? 5 : null,
		sleepScores: i?.byteLength ? new Uint8Array(i) : null,
		ggir: r
	};
}
function Ro(e) {
	return null != e && "" !== e;
}
function Do(e) {
	return Ro(e.start) || Ro(e.end);
}
function Oo(e) {
	return Ro(e.start) || Ro(e.end);
}
function Mo(e) {
	return Array.isArray(e.naps) ? e.naps.map((e) => ({
		start: e.start ?? null,
		end: e.end ?? null
	})).filter(Do) : [
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
	].filter(Do);
}
function xo(e) {
	return Array.isArray(e.nonwearWindows) ? e.nonwearWindows.map((e) => ({
		start: e.start ?? null,
		end: e.end ?? null,
		reason: e.reason ?? null
	})).filter(Oo) : [
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
	].filter(Oo);
}
const Co = Object.freeze({
	dayStartHour: 12,
	morningOffsetPadHours: 6
});
var No = class {
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
		const t = e.map(([, e]) => e), n = await (this.#n ? this.#n.timeSemantics(t) : ((e) => f().timeSemantics(e))(t));
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
	resolveInstant(e, t, n, a = Co) {
		return this.answer({
			op: "resolveInstant",
			clock: e,
			baseDate: t,
			role: n,
			geometry: a
		});
	}
	resolveSpan(e, t, n, a, r = Co) {
		return this.answer({
			op: "resolveSpan",
			start: e,
			end: t,
			baseDate: n,
			role: a,
			geometry: r
		});
	}
	analysisDayOf(e, t = Co.dayStartHour) {
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
	attributeEpisode(e, t, n = Co.dayStartHour) {
		return this.answer({
			op: "attributeEpisode",
			role: e,
			seed: t,
			dayStartHour: n
		});
	}
	window(e, t, n = Co.dayStartHour) {
		return this.answer({
			op: "window",
			kind: e,
			analysisDate: t,
			dayStartHour: n
		});
	}
	nightDatesInSpan(e, t, n, a = Co.dayStartHour) {
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
	dstTransitionOnNight(e, t, n = Co.dayStartHour) {
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
async function Fo(e, t = new No()) {
	for (let n = 0; n < 16; n += 1) {
		const n = e(t);
		if (!await t.fillAnswers()) return n;
	}
	throw new Error(`time semantics did not settle within ${String(16)} passes`);
}
async function Lo(e, t, n, a = Co.dayStartHour, r) {
	return await Fo((r) => r.nightDatesInSpan(e, t, n, a), new No(r)) ?? [];
}
function Po() {
	return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
const jo = async (e, t, n) => await Fo((n) => n.zoneOffsetsInYear(e, t), new No(n)) ?? [], Go = (e, t, n = Co.dayStartHour, a) => Fo((a) => a.dstTransitionOnNight(e, t, n), new No(a)), Ho = [
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
], $o = {
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
}, qo = {
	ampm_search_gap_max_hours: 18,
	ampm_search_gap_min_hours: 2,
	ampm_search_window_margin_hours: 2
}, Bo = /[^\p{L}\p{N}]+/gu;
function zo(e) {
	return e.normalize("NFKC").trim().toLowerCase().replace(Bo, "_").replace(/^_+|_+$/g, "");
}
function Wo(e) {
	return e ? e.includes("") ? e.split("").map((e) => e.trim()).filter(Boolean) : e.trim().length > 0 ? [e.trim()] : [] : [];
}
function Vo(e, t) {
	const n = new Map(t.map((e) => [e.key, e.label])), a = /* @__PURE__ */ new Map();
	for (const [r, i] of Object.entries(e)) {
		const e = Wo(i), t = n.get(r);
		if (t) for (const n of e) {
			const e = zo(n);
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
function Uo(e, t, n) {
	if (void 0 === n) return [];
	const a = new Map(t.map((e) => [e.key, e.label])), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
	for (const s of n) {
		const e = s.trim(), t = zo(e);
		if (0 === t.length) continue;
		const n = r.get(t);
		n ? i.set(t, n) : r.set(t, e);
	}
	return Object.entries(e).map(([e, t]) => {
		const n = Wo(t), r = a.get(e);
		return r && 0 !== n.length ? n.map((e) => {
			const t = zo(e), n = i.get(t);
			return n ? {
				key: `duplicate_header:${t}`,
				message: `Mapped column "${n}" for ${r} appears more than once in the current preview. Rename duplicate columns before importing.`
			} : null;
		}).filter((e) => null !== e) : [];
	}).flat();
}
function Ko(e, t, n) {
	if (void 0 === n) return [];
	const a = new Map(t.map((e) => [e.key, e.label])), r = new Set(n.map(zo));
	return Object.entries(e).map(([e, t]) => {
		const n = Wo(t), i = a.get(e);
		return i && 0 !== n.length ? n.map((t) => {
			const n = zo(t);
			return 0 === n.length || r.has(n) ? null : {
				key: `missing_column:${e}`,
				message: `Mapped column "${t}" for ${i} is not in the current preview.`
			};
		}).filter((e) => null !== e) : [];
	}).flat();
}
Ho.find((e) => "in_home_dlmo" === e.key).key;
function Jo(e) {
	if (!e) return 1;
	if (/^(1|one|first|a)$/.test(e)) return 1;
	if (/^(2|two|second|b)$/.test(e)) return 2;
	if (/^(3|three|third|c)$/.test(e)) return 3;
	const t = Number.parseInt(e, 10);
	return Number.isFinite(t) && t > 0 ? t : null;
}
Ho.map((e) => e.key);
const Xo = [
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
function Yo(e) {
	return "morning_offset" === e.temporalRole ? "sleep_date_chronology" : "sleep_date_same_day";
}
function Zo(e) {
	const t = function(e) {
		const t = zo(e), n = /^nap_?([0-9]+|one|two|three|first|second|third|a|b|c)?_?(start|end|from|until|begin|begins|stop|stops|onset|offset)(?:_?(datetime|date_time|date|time))?$/.exec(t) ?? /^nap_?(start|end|from|until|begin|begins|stop|stops|onset|offset)(?:_?(datetime|date_time|date|time))?_?([0-9]+|one|two|three|first|second|third|a|b|c)$/.exec(t);
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
			].includes(n[1] ?? ""), t = e ? n[1] : n[2], a = Jo(e ? n[3] : n[1]);
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
		].includes(a[1] ?? ""), i = r ? a[1] : a[2], s = Jo(r ? a[3] : a[1]);
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
	return "nap" === t?.family ? rt : "nonwear" === t?.family ? it : at;
}
(function(e, t = Xo) {
	const n = {};
	for (const a of t) {
		const t = e[Zo(a)];
		n[a.key] = "night_date" === t || "period_start_day" === t ? Yo(a) : "explicit_only";
	}
	return {
		dateRules: n,
		pendingGroups: Object.keys(e).filter((t) => "ask_per_night" === e[t]).sort()
	};
})(Object.freeze({
	[at]: pe.diary_main_sleep_date_rule,
	[rt]: pe.diary_nap_date_rule,
	[it]: pe.diary_nonwear_date_rule
})).dateRules, pe.diary_day_boundary_hour, pe.diary_dst_fold_policy, pe.diary_dst_gap_policy, new Set(Xo.flatMap((e) => [
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
const el = /* @__PURE__ */ new Map(), tl = /* @__PURE__ */ new Set();
let nl = 0;
function al(e, t) {
	const n = t?.diaryTemporalPolicy;
	var a, r;
	void 0 !== n && Number.isFinite(e) && (r = n, (void 0 === (a = el.get(e)) || a.dayBoundaryHour !== r.dayBoundaryHour || a.mainSleepDateRule !== r.mainSleepDateRule || a.napDateRule !== r.napDateRule || a.nonwearDateRule !== r.nonwearDateRule || a.dstFoldPolicy !== r.dstFoldPolicy || a.dstGapPolicy !== r.dstGapPolicy) && (el.set(e, n), function() {
		nl += 1;
		for (const e of tl) e();
	}()));
}
function rl(e) {
	return (null == e ? void 0 : el.get(e)) ?? function() {
		const e = w().scoring(), t = e;
		for (const a of v) {
			if (!a.startsWith("diary_")) continue;
			const e = n[a].storeKeys.zustand;
			if (!e || null !== T(a, t[e])) throw new Error("The persisted study configuration has an incomplete diary temporal policy.");
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
function il(e) {
	return {
		dayStartHour: rl(e).dayBoundaryHour,
		morningOffsetPadHours: Co.morningOffsetPadHours
	};
}
function sl(e) {
	return Mo(e).map((e) => [e.start, e.end]);
}
function ol(e) {
	return xo(e).map((e) => [e.start, e.end]);
}
function ll(e, t) {
	return null == e ? null : t.wireClock(e);
}
const cl = /* @__PURE__ */ new WeakMap();
function dl(e, t) {
	cl.get(t)?.delete(e);
}
async function ul(e, t, n) {
	const a = t ?? Se(), [r, i] = await Promise.all([Wc(e, a), n ?? Oc(e, a).then((e) => e?.seriesRevision ?? 0)]);
	if (0 === r.length) return null;
	const s = `${i}|${r.length}|${r[0]}|${r[r.length - 1]}`;
	let o = cl.get(a);
	const l = o?.get(e);
	if (l && l.dateKey === s) return l.promise;
	o || (o = /* @__PURE__ */ new Map(), cl.set(a, o));
	const c = o, d = async function(e, t, n) {
		const [a, r] = await Promise.all([$c(e, t[0], n), $c(e, t[t.length - 1], n)]);
		if (!a || !r) return null;
		const i = To(a).timestamps, s = To(r).timestamps;
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
function pl(e, t, n) {
	if (al(e.fileId, e.importMappingProvenance), null === t) return e;
	const a = {
		diaryInBedTime: e.diaryInBedTime ?? null,
		diaryOnsetTime: e.diaryOnsetTime ?? null,
		diaryWakeTime: e.diaryWakeTime ?? null
	}, { ampm_search_gap_min_hours: r, ampm_search_gap_max_hours: i, ampm_search_window_margin_hours: s } = qo, o = n.correctDiaryAmPm({
		inBed: a.diaryInBedTime,
		onset: a.diaryOnsetTime,
		wake: a.diaryWakeTime,
		onsetAnchor: $o.onset.map(({ tsField: e }) => a[e]).find(Boolean) ?? null,
		baseDate: e.analysisDate,
		spanMs: [t.start, t.end],
		geometry: il(e.fileId),
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
function ml(e, t, n) {
	return Fo((n) => pl(e, t, n), new No(n));
}
function fl(e, t, n) {
	return Fo((n) => e.map((e) => pl(e, t, n)), new No(n));
}
const _l = {
	diary_in_bed_time: (e) => e.diaryInBedTime,
	diary_onset_time: (e) => e.diaryOnsetTime,
	diary_wake_time: (e) => e.diaryWakeTime,
	diary_out_of_bed_time: (e) => e.diaryOutOfBedTime
};
function yl(e, t) {
	if (!e) return null;
	const n = e.decisionOverlayJson?.[t];
	if ("string" == typeof n && "" !== n) return n;
	const a = e.ampmCorrectionsJson?.[t];
	if ("string" == typeof a && "" !== a) return a;
	const r = _l[t](e);
	return "string" == typeof r && "" !== r ? r : null;
}
async function gl(e, t, n = f()) {
	const a = [
		"diary_in_bed_time",
		"diary_out_of_bed_time",
		"diary_onset_time",
		"diary_wake_time"
	], r = [...e].flatMap((e) => a.map((t) => null === yl(e, t) ? 0 : 1));
	return Wi("ggirDiaryLogShape", `${t ?? ""}:${r.join("")}`, () => n.ggirDiaryLogShape(Uint8Array.from(r), t));
}
function hl(e, t) {
	for (const n of $o[e]) {
		const e = yl(t, n.dbColumn);
		if (null !== e) return e;
	}
	return null;
}
function wl(e) {
	return hl("onset", e);
}
function bl(e) {
	return hl("wake", e);
}
function vl(e) {
	return hl("in_bed", e);
}
function kl(e) {
	return hl("out_bed", e);
}
const Sl = [
	"diaryEntries",
	"stagedDiaryEntries",
	"diaryOccurrences"
];
var Il = class {
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
		const e = Object.fromEntries(Sl.map((e) => {
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
S.TIMESTAMP_MS, S.AXIS_X, S.AXIS_Y, S.AXIS_Z, S.VECTOR_MAGNITUDE, S.TEMPERATURE;
const El = Uint8Array.of(83, 67, 68, 49);
function Al(e) {
	const t = JSON.stringify({
		v: "v6",
		choiAxis: e.choiAxis,
		extras: e.extras ?? {}
	});
	let n = 2166136261;
	for (let a = 0; a < t.length; a++) n ^= t.charCodeAt(a), n = Math.imul(n, 16777619) >>> 0;
	return n.toString(16).padStart(8, "0");
}
let Tl = null;
async function Rl(e = !1) {
	return (await (Tl || (Tl = "undefined" != typeof navigator && navigator.storage?.getDirectory ? navigator.storage.getDirectory() : Promise.reject(/* @__PURE__ */ new Error("OPFS is not available in this browser"))), Tl)).getDirectoryHandle("scored", { create: e });
}
function Dl(e, t) {
	return `${e}__${t}.arrow`;
}
function Ol() {
	return "undefined" != typeof navigator && !!navigator.storage?.getDirectory;
}
function Ml(e, t) {
	if (e.length === t) return e;
	const n = new Uint8Array(t);
	return n.set(e.subarray(0, t)), n;
}
async function xl(e, t, n) {
	if (!Ol()) return;
	const a = Al(t), r = await (await (await Rl(!0)).getFileHandle(Dl(e, a), { create: !0 })).createWritable();
	try {
		const e = await async function(e) {
			const t = new TextEncoder(), n = [], a = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4));
			a.setUint32(0, e.size, !0), n.push(new Uint8Array(a.buffer));
			for (const [r, i] of e) {
				const e = t.encode(r), a = i.sadeh_actilife.length;
				let s = 0;
				i.detach_nonwear && (s |= 1), i.sadeh_ggir && (s |= 2), i.ck_ggir && (s |= 4), i.nonwear_choi_2011 && (s |= 8), i.lstm_sleep_wake && (s |= 16);
				const o = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(7));
				o.setUint16(0, e.length, !0), o.setUint32(2, a, !0), o.setUint8(6, s), n.push(new Uint8Array(o.buffer), e), n.push(Ml(i.sadeh_actilife, a), Ml(i.sadeh_original, a), Ml(i.ck_actilife, a), Ml(i.ck_original, a), Ml(i.consensus_majority_vote, a), Ml(i.nonwear, a)), i.detach_nonwear && n.push(Ml(i.detach_nonwear, a)), i.sadeh_ggir && n.push(Ml(i.sadeh_ggir, a)), i.ck_ggir && n.push(Ml(i.ck_ggir, a)), i.nonwear_choi_2011 && n.push(Ml(i.nonwear_choi_2011, a)), i.lstm_sleep_wake && n.push(Ml(i.lstm_sleep_wake, a));
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
			}(El, Xe(n));
		}(n);
		await r.write(e);
	} finally {
		await r.close();
	}
}
async function Cl(e, t) {
	if (!Ol()) return null;
	const n = Al(t);
	let a, r;
	try {
		a = await Rl(!1);
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	try {
		r = await a.getFileHandle(Dl(e, n), { create: !1 });
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	const i = await r.getFile(), s = new Uint8Array(await i.arrayBuffer());
	try {
		return await async function(e) {
			const t = await Ye(El, e), n = new DataView(t.buffer, t.byteOffset, t.byteLength), a = new TextDecoder();
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
		return console.warn("[opfs-scored] cache decode failed; deleting the corrupt entry:", o instanceof Error ? o.message : o), await a.removeEntry(Dl(e, n)).catch((e) => {
			console.warn("[opfs-scored] failed to delete the corrupt cache entry:", e instanceof Error ? e.message : e);
		}), null;
	}
}
function Nl(e) {
	const t = Date.parse(e.lastModifiedAt);
	return Number.isFinite(t) ? t : Number.NEGATIVE_INFINITY;
}
function Fl(e, t) {
	if (!e) return t;
	const n = Nl(e), a = Nl(t);
	return a !== n ? a > n ? t : e : (t.id ?? 0) > (e.id ?? 0) ? t : e;
}
function Ll(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.date), a = n.username === _t;
		e && "auto_score" !== e.username && a || t.set(n.date, "auto_score" !== e?.username || a ? Fl(e, n) : n);
	}
	return t;
}
function Pl(e, t, n = !1) {
	const a = /* @__PURE__ */ new Map();
	for (const r of e) r.username !== t || n && !ye(r) || a.set(r.date, Fl(a.get(r.date), r));
	return a;
}
function jl(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		let e = t.get(n.date);
		e || t.set(n.date, e = /* @__PURE__ */ new Map()), e.set(n.username, Fl(e.get(n.username), n));
	}
	return t;
}
function Gl(e) {
	const t = [];
	for (const n of e) if ("auto_score" !== n.username) for (const e of n.nonwearMarkers) null != e.startTimestamp && null != e.endTimestamp && t.push({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	});
	return t;
}
function Hl(e) {
	const t = /* @__PURE__ */ new Date(1e3 * e);
	return `${String(t.getUTCHours()).padStart(2, "0")}:${String(t.getUTCMinutes()).padStart(2, "0")}`;
}
function $l(e) {
	return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " ");
}
function ql(e) {
	return `${String(e.getFullYear()).padStart(4, "0")}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
const Bl = 86400, zl = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * Bl * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), Wl = (e) => e < 10 ? `0${String(e)}` : String(e);
function Vl(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / Bl), n = e - t * Bl;
	return `${zl(t)} ${Wl(Math.floor(n / 3600))}:${Wl(Math.floor(n / 60) % 60)}:${Wl(n % 60)}`;
}
let Ul = !1, Kl = !1;
async function Ql() {
	const e = navigator.storage;
	if (!e?.persisted) return !1;
	try {
		return await e.persisted();
	} catch {
		return !1;
	}
}
function Jl(e) {
	if (!e || "object" != typeof e) return !1;
	const t = e;
	return "QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name || 22 === t.code || 1014 === t.code || !("string" != typeof t.message || !/quota/i.test(t.message)) || (t.inner ? Jl(t.inner) : !!t.cause && Jl(t.cause));
}
const Xl = [];
function Yl(e) {
	return e ? e instanceof ArrayBuffer ? new Float64Array(e, 0, Math.floor(e.byteLength / Float64Array.BYTES_PER_ELEMENT)) : e : Xl;
}
const Zl = /* @__PURE__ */ new WeakMap();
function ec(e, t) {
	"number" == typeof t && t > 0 && Zl.set(e, t);
}
function tc(e, t) {
	const n = (e?.epochResolutions?.find((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId))?.epochLengthSeconds ?? t?.epochLengthSeconds ?? void 0;
	return "number" == typeof n && n > 0 ? n : void 0;
}
const nc = je("epoch_5s");
async function ac(e, t, n) {
	return tc(t.day, t.file) ?? await sc(e, He, n);
}
function rc(e) {
	return tc(e.day, e.file) ?? He;
}
function ic(e) {
	return tc(void 0, e) ?? He;
}
async function sc(e, t, n) {
	const a = Yl(e), r = function(e) {
		return Zl.get(Yl(e));
	}(a);
	return void 0 !== r ? r : a.length < 2 ? t : await (n ?? f()).medianGapSeconds(Float64Array.from(a)) ?? t;
}
function oc(e) {
	if (!("diarySourceSha256" in e) || void 0 === e.diarySourceSha256) return {};
	if ("string" != typeof e.diarySourceSha256 || !/^[a-f0-9]{64}$/u.test(e.diarySourceSha256)) throw new Error("Diary source identity must be a SHA-256 digest.");
	return { diarySourceSha256: e.diarySourceSha256 };
}
function lc(e) {
	return {
		...oc(e),
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
async function cc(e, t, n = Se()) {
	const a = await n.diaryEntries.where("[fileId+analysisDate]").equals([e, t]).first();
	return a ? lc(a) : null;
}
async function dc(e, t = Se()) {
	return (await t.diaryEntries.where("fileId").equals(e).toArray()).map(lc);
}
const uc = 12e4;
var pc = class extends Error {
	category = ma;
	constructor() {
		super("A completed import already uses this filename for different content. Rename the selected file and try again, or delete the completed import in Data Settings first."), this.name = "FileIngestFilenameConflictError";
	}
}, mc = class extends Error {
	category = ma;
	constructor() {
		super("A recording already in this workspace was offered again, changed. It was not imported, and nothing was overwritten: the file and its scoring are as they were. To use the changed recording, export your work first, then delete the file and import it again."), this.name = "FileIngestRecordingRevisedError";
	}
}, fc = class extends Error {
	category = ga;
	constructor() {
		super("This file is already being imported in another tab. Wait for that import to finish, then try again."), this.name = "FileIngestInProgressError";
	}
}, _c = class extends Error {
	category = ga;
	constructor() {
		super("This import no longer owns its incomplete local record. Retry the import."), this.name = "FileIngestOwnershipLostError";
	}
};
const yc = Object.keys(Un), gc = yc.filter((e) => !Jn.has(e));
function hc(e) {
	return [e.files, ...yc.map((t) => e[t])];
}
async function wc(e, t, n = !1) {
	dl(t, e);
	const a = await async function(e, t) {
		const n = new Il("file_cascade"), a = await e.diaryEntries.where("fileId").equals(t).toArray(), r = await e.diaryOccurrences.where("fileId").equals(t).toArray(), i = await e.stagedDiaryEntries.where("attachedFileId").equals(t).toArray();
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
	}(e, t), r = await Promise.all(gc.filter((e) => !n || "walLog" !== e).map(async (n) => {
		const a = Xn(e, n).where(Un[n]).equals(t);
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
async function bc(e, t) {
	return {
		...await wc(e, t),
		files: await e.files.where(":id").equals(t).delete()
	};
}
async function vc(e, t, n = Se(), a = Date.now()) {
	(function(e, t) {
		if (0 === e.length || 0 === t.length) throw new Error("Local ingest identity is invalid.");
	})(e.sourceContentHash, t), async function() {
		if (Ul) {
			if (await Ql()) return !0;
			Ul = !1, Kl = !1;
		}
		if (Kl) return await Ql();
		const e = navigator.storage;
		if (!e?.persist) return Kl = !0, !1;
		try {
			const t = await e.persist();
			return Kl = !0, Ul = !!t, !!t;
		} catch {
			return !1;
		}
	}().catch(() => {});
	const r = n;
	return We([...hc(r), r.studySettings], async () => {
		const n = await r.files.where("sourceContentHash").equals(e.sourceContentHash).toArray(), i = n.find(De);
		if (null != i?.id) return await rd(i, r), {
			kind: "already_complete",
			record: i
		};
		const s = e.aw5RecordingKey ? await r.files.where("aw5RecordingKey").equals(e.aw5RecordingKey).toArray() : [];
		if (s.some(De)) throw new mc();
		const o = await r.files.where("filename").equals(e.filename).first();
		if (o && De(o)) throw new pc();
		const l = /* @__PURE__ */ new Map();
		for (const e of [
			...n,
			...s,
			...o ? [o] : []
		]) null != e.id && "incomplete" === e.ingestState && l.set(e.id, e);
		const c = [...l.values()].find((e) => e.ingestAttemptId === t);
		if (null != c?.id) return await r.files.update(c.id, { ingestLeaseExpiresAt: a + uc }), {
			kind: "started",
			guard: {
				fileId: c.id,
				attemptId: t
			},
			recovered: !1
		};
		if ([...l.values()].find((e) => (e.ingestLeaseExpiresAt ?? 0) > a)) throw new fc();
		for (const e of l.values()) null != e.id && (await Ue({
			op: "file_delete",
			fileId: e.id,
			payload: { kind: "incomplete_ingest_recovery" }
		}), await bc(r, e.id));
		const d = await r.files.add({
			...e,
			ingestState: "incomplete",
			ingestAttemptId: t,
			ingestLeaseExpiresAt: a + uc
		});
		return await Ue({
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
async function kc(e, t = Se(), n = Date.now()) {
	const a = t;
	await a.transaction("rw", a.files, async () => {
		const t = await a.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new _c();
		await a.files.update(e.fileId, { ingestLeaseExpiresAt: n + uc });
	});
}
async function Sc(e, t = Se(), n) {
	const a = t;
	return We([a.files, a.studySettings], async () => {
		const t = await a.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new _c();
		const r = e.fileId;
		return await a.files.where(":id").equals(r).modify((e) => {
			e.ingestState = "complete", delete e.ingestAttemptId, delete e.ingestLeaseExpiresAt;
		}), await Ue({
			op: "file_put",
			fileId: r,
			payload: { kind: "incomplete_ingest_finalize" }
		}), await rd(t, a), await Gi([r], a, n), r;
	}, a, n);
}
async function Ic(e, t = Se()) {
	const n = t;
	return We(hc(n), async () => {
		const t = await n.files.get(e.fileId);
		return t ? "incomplete" === t.ingestState && t.ingestAttemptId === e.attemptId && (await Ue({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_rollback" }
		}), await bc(n, e.fileId), !0) : (a = await wc(n, e.fileId), Object.values(a).reduce((e, t) => e + t, 0) > 0 && (await Ue({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_orphan_cleanup" }
		}), !0));
		var a;
	}, n);
}
async function Ec(e, t) {
	const n = [], a = await sc(e.timestamps, null, t) ?? (e.timestamps.byteLength > 0 ? e.epochResolutions?.find((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId)?.epochLengthSeconds : null) ?? null;
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
		for (const [n, a] of So(e)) {
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
async function Ac(t = Se(), n) {
	let a = await (n?.participantKeys ? t.files.where(D).anyOf([...new Set(n.participantKeys.flatMap((e) => [ve(e), ...ae({ filename: e })]))]).distinct().filter((e) => "local" === e.source) : n?.onlyFileIds ? t.files.where(":id").anyOf([...n.onlyFileIds]).filter((e) => "local" === e.source) : t.files.where("source").equals("local")).toArray();
	if (n?.participantKeys) {
		const r = [...new Set(a.map(e).filter((e) => !n.participantKeys.includes(e)))];
		r.length && (a = [...a.filter((t) => !r.includes(e(t))), ...await t.files.where(z).anyOf(r).filter((e) => "local" === e.source).toArray()]);
	}
	return (!0 === n?.includeIncomplete ? a : a.filter(De)).map((e) => {
		const t = e.participantId ?? Me(e.filename) ?? void 0;
		return {
			...e,
			availableDates: [...new Set(e.availableDates)],
			...void 0 === t ? {} : { participantId: t }
		};
	});
}
async function Tc(e, t = Se()) {
	return t.files.where("filename").equals(e).first();
}
async function Rc(e, t = Se()) {
	if (e) return (await t.files.where("sourceContentHash").equals(e).toArray()).find(De);
}
async function Dc(e, t = Se(), n) {
	if (e) return (await t.files.where("fileHash").equals(e).toArray()).find((e) => De(e) && (void 0 === n || e.sourceContentHash === n));
}
async function Oc(e, t = Se()) {
	return t.files.get(e);
}
async function Mc(e, t, n = f()) {
	const a = await n.shiftDate(e, t);
	if (void 0 === a) throw new RangeError(`Not a calendar date: ${e}`);
	return a;
}
async function xc(e, t = Se(), n) {
	const [a] = await Nc([e], t, void 0, n);
	return a;
}
async function Cc(e, t = f()) {
	let n = e.epochResolutions;
	if (n) {
		if (void 0 !== e.algorithmResults && n.some((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId && 60 !== e.epochLengthSeconds && 60 % e.epochLengthSeconds == 0)) {
			const a = await Ec(e, t);
			n = [...n.filter((e) => !e.derivedData), ...a.filter((e) => e.derivedData)];
		}
	} else n = await Ec(e, t);
	return {
		epochResolutions: n,
		previousDate: await Mc(e.date, -1, t)
	};
}
async function Nc(e, t = Se(), n, a) {
	const r = t, i = new Set(e.map((e) => e.fileId));
	for (const d of i) dl(d, r);
	const s = we(a), o = n ?? await Promise.all(e.map((e) => Cc(e, s))), l = await Promise.all(e.map(async (e, t) => {
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
			].every((t) => !e[t]?.byteLength || n.data[t].length === a) && So(e).every(([e, t]) => {
				if (!t.byteLength) return !0;
				const r = fo([{ algorithmResults: n.algorithmResults }], { recordedCellId: e });
				return "ok" === r.status && r.outputs[0]?.length === a;
			}) && (!e.nonwearResults?.byteLength || n.nonwearResults?.length === a);
		}(e, r)) {
			const t = await Ec(e, s);
			r = [...r.filter((e) => "counts_60s" !== e.resolutionId), ...t.filter((e) => e.derivedData)];
		}
		return {
			activityDay: {
				...a,
				epochResolutions: r
			},
			previousDate: o[t].previousDate
		};
	})), c = await ee(r, [
		r.activityDays,
		r.scoredVariantMasks,
		r.files
	], async () => {
		await Gc(r, [...i]);
		const e = [];
		for (const { activityDay: t, previousDate: n } of l) await r.scoredVariantMasks.bulkDelete([[t.fileId, t.date], [t.fileId, n]]), await r.activityDays.where("[fileId+date]").equals([t.fileId, t.date]).delete(), e.push(await r.activityDays.add(t));
		return e;
	}, a);
	for (const d of i) dl(d, r);
	return c;
}
async function Fc(e, t, n, a = Se(), r) {
	await ie(a, [a.files], () => a.files.where(":id").equals(e).modify((e) => {
		const a = new Set(e.circadianSignalDates ?? []);
		for (const n of t) a.delete(n);
		for (const t of n) a.add(t);
		e.circadianSignalDates = [...a].sort();
	}), r);
}
async function Lc(e, t, n, a = Se(), r) {
	const i = a;
	await ee(i, [
		i.activityDays,
		i.physicalActivityFileSummaries,
		i.files
	], async () => {
		await i.activityDays.where("[fileId+date]").equals([e, t]).modify((e) => {
			Object.assign(e, n), delete e.displayNonwear;
		}), await i.physicalActivityFileSummaries.where("fileId").equals(e).delete(), await Hc(i, [e]), await i.files.where(":id").equals(e).modify((e) => {
			e.nonwearBandGeneration = (e.nonwearBandGeneration ?? 0) + 1, e.navigationFacts && delete e.navigationFacts.bands;
		});
	}, r);
}
async function Pc(e, t, n = Se(), a, r = we(a)) {
	const i = n, s = [...t.keys()], o = await c.waitFor(Promise.all(s.map((e) => Mc(e, -1, r))));
	dl(e, i), await ee(i, [
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
		await Gc(i, [e]);
	}, a), dl(e, i);
}
async function jc(e, t, n, a, r = Se(), i) {
	const s = r;
	await s.transaction("rw", s.files, s.activityDays, async () => {
		const r = await s.files.get(e);
		r && (r.seriesRevision ?? 0) === a.seriesRevision && (r.nonwearBandGeneration ?? 0) === a.nonwearBandGeneration && (i?.throwIfAborted(), await s.activityDays.where("[fileId+date]").equals([e, t]).modify({ displayNonwear: n }));
	});
}
async function Gc(e, t) {
	await e.files.where(":id").anyOf(t).modify((e) => {
		e.seriesRevision = (e.seriesRevision ?? 0) + 1;
	});
}
async function Hc(e, t) {
	await e.files.where(":id").anyOf(t).modify((e) => {
		e.exportInputRevision = (e.exportInputRevision ?? 0) + 1;
	});
}
async function $c(e, t, n = Se(), a) {
	return a ? (await td(e, n, a)).get(t) : n.activityDays.where("[fileId+date]").equals([e, t]).first();
}
const qc = /* @__PURE__ */ new WeakMap();
function Bc(e, t = Se(), n) {
	const a = t;
	return (n ? Promise.resolve(n.file) : a.files.get(e)).then((t) => {
		const n = t?.seriesRevision ?? 0;
		let r = qc.get(a);
		r || qc.set(a, r = /* @__PURE__ */ new Map());
		const i = r.get(e);
		if (i?.revision === n) return i.verdicts;
		const s = [], o = Q(a.activityDays.where("fileId").equals(e), (e) => {
			s.push(_o(e));
		}).then(() => vo(s)), l = {
			revision: n,
			verdicts: o
		};
		return r.set(e, l), o.catch(() => {
			r.get(e) === l && r.delete(e);
		}), o;
	});
}
async function zc(e, t, n, a, r = Se(), i, s) {
	const o = r, l = await G(async function(e, t = f()) {
		const n = Mc(e, 1, t);
		return c.currentTransaction ? c.waitFor(n) : n;
	}(t, i), s);
	return s?.throwIfAborted(), !!await async function(e, t, n, a = Se()) {
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
async function Wc(e, t = Se()) {
	return (await t.activityDays.where("[fileId+date]").between([e, ""], [e, "￿"], !0, !0).keys()).map((e) => e[1]);
}
function Vc(e, t = !1) {
	const n = t ? e?.filter(ye) : void 0;
	let a;
	for (const r of n?.length ? n : e ?? []) a = Fl(a, r);
	return a;
}
async function Uc(e, t = Se()) {
	return t.markerProvenance.bulkGet([...e]);
}
async function Kc(e, t, n = Se(), a = !1) {
	return Pl(await Qc(e, t, n), t, a);
}
async function Qc(e, t, n) {
	const a = n.markers.where("[fileId+date+username]"), r = await a.between([e, c.minKey], [e, c.maxKey]).uniqueKeys();
	return (await a.anyOf(r.filter((e) => e[2] === t)).toArray()).map(gi);
}
async function Jc(e, t = Se()) {
	return (await t.markers.where("fileId").equals(e).toArray()).map(gi);
}
async function Xc(e, t = Se()) {
	return Gl(await Jc(e, t));
}
async function Yc(e, t = Se(), n) {
	const [a, r] = await Promise.all([od(e, t), n ? Gl(n) : Xc(e, t)]);
	return [...a.map((e) => ({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	})), ...r];
}
async function Zc(e, t, n = Se()) {
	return function(e, t) {
		const n = /* @__PURE__ */ new Map();
		for (const a of e) {
			if (a.username !== t) continue;
			const e = n.get(a.date);
			e ? e.push(a) : n.set(a.date, [a]);
		}
		return n;
	}(await Qc(e, t, n), t);
}
function ed(e) {
	return e({});
}
function td(e, t = Se(), n) {
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
var nd = class extends Error {
	category = fa;
	constructor() {
		super("Stored GGIR import refusals could not be read; the existing records were kept."), this.name = "GgirImportRefusalsStorageError";
	}
};
function ad(e) {
	if (!e || "object" != typeof e || !("ggirImportRefusals" in e)) return [];
	const t = e[pa];
	if (Array.isArray(t)) {
		const e = t.filter((e) => null != e && "object" == typeof e && "filename" in e && "string" == typeof e.filename && "reason" in e && "string" == typeof e.reason && "category" in e && ka.includes(e.category));
		if (e.length === t.length) return [...new Map(e.map((e) => {
			const t = "ggir-folder" === e.category ? {
				...e,
				filename: _a
			} : e;
			return [JSON.stringify([t.filename, t.category]), t];
		})).values()];
	}
	throw new nd();
}
function rd(e, t) {
	return async function(e, t = Se(), n) {
		(e.length || void 0 !== n) && await async function(e, t, n) {
			await We([t.studySettings], async () => {
				const a = await t.studySettings.where("key").equals("study").first();
				if (void 0 !== n.importedFilenames && !ad(a).some((e) => n.importedFilenames?.includes(e.filename))) return;
				const r = "existing" === n.coreSettings && a ? {
					sleepDetectionRule: a.sleepDetectionRule,
					nightStartHour: a.nightStartHour,
					nightEndHour: a.nightEndHour,
					defaultAlgorithm: a.defaultAlgorithm,
					...void 0 === a.sleepPeriodDetection ? {} : { sleepPeriodDetection: a.sleepPeriodDetection }
				} : e, { [x]: i, ...s } = a?.extraSettings ?? {}, o = {
					...r,
					sleepDetectionRule: (u = r.sleepDetectionRule, Object.values($e).includes(u) ? u : pe.sleep_detection_rule),
					extraSettings: "merge" === n.extraSettings ? {
						...s,
						...e.extraSettings
					} : e.extraSettings
				}, l = await c.waitFor(Be(JSON.stringify(o))), d = {
					key: "study",
					...o,
					...n.refusals ? { [pa]: ad({ [pa]: [...ad(a), ...n.refusals] }).filter((e) => !n.importedFilenames?.includes(e.filename)) } : {},
					contentHash: l,
					lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
				};
				var u;
				await Ue({
					op: "settings_put",
					payload: {
						settings: o,
						contentHash: l,
						prevContentHash: a?.contentHash,
						...n.refusals ? { [pa]: ad(d) } : {},
						lastModifiedAt: d.lastModifiedAt
					}
				}), await async function(e, t, n) {
					t?.id ? await e.studySettings.update(t.id, n) : await e.studySettings.add(n);
				}(t, a, d);
			}, t);
		}({
			sleepDetectionRule: pe.sleep_detection_rule,
			nightStartHour: pe.night_start_hour,
			nightEndHour: pe.night_end_hour,
			defaultAlgorithm: pe.default_algorithm,
			extraSettings: {}
		}, t, {
			coreSettings: "existing",
			extraSettings: "merge",
			refusals: e,
			...void 0 === n ? {} : { importedFilenames: n }
		});
	}([], t, "string" == typeof e ? [e] : [e.filename, ...In(e) ? [_a] : []]);
}
async function id(e = Se()) {
	return e.studySettings.where("key").equals("study").first();
}
async function sd(e, t, n = Se(), a) {
	if (!t.size) return;
	const r = [...t];
	await We([n.sensorNonwear], async () => {
		await Ve(r.map(([t, n]) => ({
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
async function od(e, t = Se()) {
	return t.sensorNonwear.where("fileId").equals(e).toArray();
}
async function ld(e, t, n, a = Se()) {
	return (await od(e, a)).filter((e) => e.startTimestamp <= n && e.endTimestamp >= t).sort((e, t) => e.startTimestamp - t.startTimestamp);
}
function cd(e) {
	const t = {
		fileId: e.fileId,
		date: e.date,
		appVersion: e.appVersion,
		results: e.results,
		...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {}
	}, n = Ao(e);
	if (null !== n) return {
		...t,
		...n
	};
	throw new Error(`Refused an algorithm run for ${String(e.algoKey ?? e.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
}
async function dd(e, t = Se(), n) {
	return await async function(e, t, n) {
		const r = t, i = await c.waitFor(a(e.results));
		return We([r.algorithmRuns], async () => {
			const t = await r.algorithmRuns.where("[fileId+date+algoKey+algoVersion+paramsHash]").equals([
				e.fileId,
				e.date,
				e.algoKey,
				e.algoVersion,
				e.paramsHash
			]).first();
			if (t?.id) return await Ue({
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
			const n = {
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
			}, a = await r.algorithmRuns.add(n);
			return await Ue({
				op: "algorithm_run_put",
				fileId: e.fileId,
				payload: {
					kind: "insert",
					id: a,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					appVersion: e.appVersion,
					contentHash: i,
					byteLength: e.results.byteLength
				}
			}), {
				id: a,
				inserted: !0,
				contentHash: i
			};
		}, r, n);
	}(cd(e), t, n);
}
async function ud(e, t, n) {
	return await async function(e, t, n) {
		if (0 === e.length) return [];
		const r = t ?? Se(), i = Promise.all(e.map((e) => a(e.results))), s = await (c.currentTransaction ? c.waitFor(i) : i);
		return We([r.algorithmRuns], async () => {
			const t = (e) => [
				e.fileId,
				e.date,
				e.algoKey,
				e.algoVersion,
				e.paramsHash
			], n = /* @__PURE__ */ new Map(), a = await r.algorithmRuns.where("[fileId+date+algoKey+algoVersion+paramsHash]").anyOf(e.map(t)).toArray();
			for (const e of a) {
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
			}] : []), d = await r.algorithmRuns.bulkAdd(c, { allKeys: !0 }), u = /* @__PURE__ */ new Map();
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
			return await Ve(e.map((e, t) => ({
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
		}, r, n);
	}(e.map(cd), t, n);
}
async function pd(e, t, n, a = Se()) {
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
function md(e, t, n) {
	return 0 === e.fileId && e.payload?.openFileId === t && e.payload?.openAnalysisDate === n;
}
async function fd(e, t, n = Se()) {
	return (await n.auditLog.where("[fileId+analysisDate+username]").between([
		0,
		"",
		""
	], [
		0,
		"￿",
		"￿"
	], !0, !0).toArray()).filter((n) => md(n, e, t)).sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
}
async function _d() {
	return Se().auditLog.orderBy("id").toArray();
}
async function yd(e, t = Se()) {
	return t.dailyGgirSummaries.where("[fileId+analysisDate]").between([e, ""], [e, "￿"]).toArray();
}
async function gd(e, t) {
	const n = await Se().dailyGgirSummaries.where("[fileId+analysisDate]").equals([e, t]).first();
	return n ? [n] : [];
}
async function hd(e, t = Se(), n) {
	const a = t, r = a.dailyGgirSummaries, i = Array.isArray(e) ? e : [e];
	0 !== i.length && await ee(a, [r, a.files], () => async function(e, t) {
		const n = e.dailyGgirSummaries, a = /* @__PURE__ */ new Map();
		for (const i of t) a.set(`${i.fileId}::${i.analysisDate}`, i);
		const r = await Promise.all([...a.values()].map(async (e) => {
			const t = await n.where("[fileId+analysisDate]").equals([e.fileId, e.analysisDate]).first();
			return null != t?.id ? {
				...e,
				id: t.id
			} : e;
		}));
		await n.bulkPut(r), await Hc(e, [...new Set(t.map((e) => e.fileId))]);
	}(a, i), n);
}
export { ic as $, mi as $n, ot as $r, to as $t, ld as A, ts as An, Rn as Ar, Vo as At, dd as B, xi as Bn, Lt as Br, Mo as Bt, Jc as C, ds as Cn, Xn as Cr, ul as Ct, id as D, ns as Dn, Wn as Dr, il as Dt, Ac as E, ls as En, Pn as Er, fl as Et, zc as F, Ui as Fn, kn as Fr, Po as Ft, Nc as G, Si as Gn, Nt as Gr, Eo as Gt, kc as H, Ei as Hn, xt as Hr, To as Ht, Pc as I, Wi as In, Sn as Ir, Go as It, ed as J, vi as Jn, _t as Jr, vo as Jt, sd as K, fi as Kn, Ct as Kr, ko as Kt, Lc as L, Gi as Ln, vn as Lr, Lo as Lt, md as M, Xi as Mn, Tn as Mr, Ko as Mt, yd as N, Qi as Nn, En as Nr, Co as Nt, Uc as O, es as On, Bn as Or, al as Ot, Fc as P, Ki as Pn, In as Pr, No as Pt, ac as Q, gi as Qn, st as Qr, so as Qt, Vc as R, Ci as Rn, It as Rr, Fo as Rt, Oc as S, Ss as Sn, Ia as Sr, gl as St, ad as T, As as Tn, qn as Tr, ml as Tt, Ic as U, Ti as Un, Mt as Ur, Ao as Ut, ud as V, Oi as Vn, Dt as Vr, xo as Vt, xc as W, Ii as Wn, Ot as Wr, bo as Wt, cc as X, wi as Xn, et as Xr, Io as Xt, dc as Y, bi as Yn, Ze as Yr, yo as Yt, nc as Z, hi as Zn, nt as Zr, oo as Zt, Wc as _, ms as _n, Ea as _r, kl as _t, vc as a, mt as ai, Hs as an, kr as ar, Hl as at, Yc as b, cs as bn, Sa as br, sl as bt, Sc as c, $s as cn, er as cr, ql as ct, $c as d, ro as dn, Ua as dr, jl as dt, lt as ei, Ys as en, ui as er, sc as et, td as f, zs as fn, za as fr, Fl as ft, pd as g, js as gn, ma as gr, wl as gt, Kc as h, Gs as hn, Pa as hr, vl as ht, Cc as i, ft as ii, Xs as in, Er as ir, Jl as it, fd as j, Yi as jn, An as jr, zo as jt, od as k, Zi as kn, zn as kr, Uo as kt, Rc as l, Vs as ln, tr as lr, Ll as lt, Zc as m, Ps as mn, ja as mr, xl as mt, pc as n, dt as ni, no as nn, ci as nr, tc as nt, Hc as o, Xe as oi, eo as on, Ir as or, $l as ot, _d as p, Bs as pn, Ya as pr, Cl as pt, jc as q, _i as qn, Zt as qr, go as qt, _c as r, ut as ri, uo as rn, jr as rr, rc as rt, rd as s, qs as sn, hr as sr, Vl as st, uc as t, ct as ti, Ws as tn, pi as tr, ec as tt, Dc as u, io as un, Ga as ur, Pl as ut, Xc as v, gs as vn, pa as vr, bl as vt, Bc as w, Ts as wn, Qn as wr, ll as wt, Tc as x, ys as xn, Ta as xr, ol as xt, gd as y, _s as yn, Ra as yr, yl as yt, hd as z, Ai as zn, kt as zr, jo as zt };
