import { Cn as e, I as n, P as t, St as a, j as i, wt as r, xt as o } from "./schema-DEVpUo98.js";
import { r as s } from "./workers-DmTzGLlL.js";
import { M as c, k as l, x as u } from "./workspace-db-n_HVAtxY.js";
import { r as d, rn as f } from "./store-DN0rdLR0.js";
import { C as m, N as h, gt as p, ht as g, lt as v } from "./per-source-defaults-CJytpFGg.js";
async function b(e, n, t, a) {
	if (0 === e.length || 0 === n.length) return new Array(n.length).fill(0);
	const i = await a.rasterizePeriods(Float64Array.from(e, (e) => e.startTsSec), Float64Array.from(e, (e) => e.endTsSec), Float64Array.from(n), t);
	return Array.from(i.mask);
}
const _ = new Map(r.map((e) => [e.id, e]));
function w(e) {
	return "conformant" === e;
}
const S = {
	provisional: "Provisional — constants are not yet verified against the reference implementation.",
	needs_model: "Needs a trained model artifact — cannot produce a result."
}, y = "Scientifically eligible, but this implementation is not available on the active runtime.", A = "Unavailable for this file: it does not carry the input this method needs.";
function M(e) {
	return S[e] ?? `Not selectable — conformance state "${e}" is not validated.`;
}
const k = /* @__PURE__ */ new Set([
	"consensus_majority_vote",
	"manual",
	"natural_language",
	"van_hees_hasib_2015"
]), T = Object.keys(v), x = [30, 60], C = /* @__PURE__ */ new Set([
	...T,
	...Object.values(m).flatMap((e) => [...e.countMetrics]),
	...r.flatMap((e) => [...e.compatibleCountMetrics])
]), N = Object.values(u).filter((e) => C.has(e)), $ = new Set(T), j = {
	cole_kripke_1992: "Cole-Kripke (1992)",
	ucsd_scripps_2010: "UCSD / Scripps (2010)",
	van_hees_2015: "van Hees (2015)",
	van_hees_hasib_2015: "van Hees HASIB (2015)",
	lstm_sleep_wake: "LSTM Sleep/Wake",
	actiware_sleep_wake: "Actiware Sleep/Wake",
	syed_cnn: "Syed CNN"
}, E = {
	original: "Original",
	actilife: "ActiLife",
	ggir: "GGIR",
	hasib: "HASIB",
	reference: "Reference",
	actiware: "Actiware"
};
function H(e) {
	return e.split("_").map((e) => 0 === e.length ? e : e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
}
function O(e) {
	return j[e] ?? H(e);
}
function G(e) {
	return r.filter((n) => n.family === e);
}
function q(e, n, t) {
	const a = /* @__PURE__ */ new Set(), i = [], o = n ? new Set(n.sleepAlgorithms) : null;
	for (const s of r) {
		if ("sleep_wake" !== s.kind) continue;
		const n = s.family;
		if (null === n || k.has(n)) continue;
		if (a.has(n)) continue;
		a.add(n);
		const r = G(n);
		if (r.length > 0 && r.every((e) => !w(e.conformance))) {
			const e = r.every((e) => "needs_model" === e.conformance) ? "needs_model" : "provisional";
			i.push({
				value: n,
				label: O(n),
				disabled: !0,
				reason: M(e)
			});
			continue;
		}
		if (null !== o && r.every((e) => !o.has(e.id))) {
			i.push({
				value: n,
				label: O(n),
				disabled: !0,
				reason: r.some((e) => t?.has(e.id)) ? A : y
			});
			continue;
		}
		const c = F(n);
		void 0 === e || R(c) === e ? i.push({
			value: n,
			label: O(n)
		}) : i.push({
			value: n,
			label: O(n),
			disabled: !0,
			reason: z(c)
		});
	}
	return i;
}
function F(e) {
	const n = G(e)[0]?.execution;
	return "angle_spt" === n ? "angle" : "neural_model" === n ? "neural" : "vendor_analysis" === n ? "vendor" : "counts";
}
function R(e) {
	return "angle" === e ? l.ggir_5s : l.number_60s_epochs;
}
function z(e) {
	return "angle" === e ? "Requires the GGIR 5 s raw pipeline — switch the extraction path to score this." : "Requires the 60 s counts pipeline — switch the extraction path to score this.";
}
function D(e, n, t) {
	const a = n ? new Set(n.sleepAlgorithms) : null;
	return G(e).map((e) => {
		const n = e.implementation ?? "reference", i = (r = e.implementation ?? "reference", E[r] ?? H(r));
		var r;
		return w(e.conformance) ? null === a || a.has(e.id) ? {
			value: n,
			label: i
		} : {
			value: n,
			label: i,
			disabled: !0,
			reason: t?.has(e.id) ? A : y
		} : {
			value: n,
			label: i,
			disabled: !0,
			reason: M(e.conformance)
		};
	});
}
function P(e, n) {
	return o[`${e}::${n}`] ?? null;
}
function I(e, n) {
	const t = P(e, n);
	return t ? _.get(t) : void 0;
}
function U(e, n) {
	return I(e, n)?.defaultCountMetric ?? T[0] ?? "neishabouri";
}
function L(e, n, t) {
	const a = I(e, n), i = new Set(a?.compatibleCountMetrics ?? []), r = t ? new Set(t.countMetrics) : null, o = U(e, n);
	let s;
	s = i.size > 0 ? r ? new Set([...i].filter((e) => r.has(e))) : new Set(i) : r ? new Set(r) : /* @__PURE__ */ new Set();
	const c = new Set([...s].filter((e) => $.has(e))), l = new Set([...s].filter((e) => !$.has(e))), u = null === r || 0 === r.size, d = 0 === c.size && u;
	return N.map((e) => {
		const n = function(e) {
			return "neishabouri" === e ? "Neishabouri (amplitude counts)" : "zero_crossing" === e ? "Zero-crossing (GGIR zc)" : "pim" === e ? "PIM (proportional integrating mode)" : "zcm" === e ? "ZCM (zero-crossing mode)" : "tat" === e ? "TAT (time above threshold)" : H(e);
		}(e);
		return d ? e === o ? {
			value: e,
			label: n
		} : {
			value: e,
			label: n,
			disabled: !0,
			reason: "Source-native counts — this scorer declares no selectable substrate."
		} : c.has(e) ? {
			value: e,
			label: n
		} : {
			value: e,
			label: n,
			disabled: !0,
			reason: l.has(e) ? "Recorded by this device, but not yet scoreable as a variant — its count-substrate cube cell is pending." : i.size > 0 && !i.has(e) ? "Not a validated substrate for this scorer." : "This device does not record these counts."
		};
	});
}
function W(e) {
	return (v[e] ?? []).map((e) => ({
		value: e,
		label: B(e)
	}));
}
function B(e) {
	return "vm" === e ? "Vector magnitude" : `Axis ${e.toUpperCase()}`;
}
function V(e, n) {
	const t = F(e);
	if ("angle" === t) return a.filter((e) => "raw" === e.lineage).map((e) => ({
		value: String(e.seconds),
		label: `${String(e.seconds)} s`
	}));
	if ("neural" === t || "vendor" === t) {
		const t = I(e, n)?.nativeEpochSeconds ?? 60;
		return [{
			value: String(t),
			label: `${String(t)} s (native)`
		}];
	}
	const i = p(e);
	return a.filter((e) => "counts" === e.lineage).map((n) => {
		const t = {
			value: String(n.seconds),
			label: `${String(n.seconds)} s`
		};
		return x.includes(n.seconds) ? g(i, n.seconds) ? t : {
			...t,
			disabled: !0,
			reason: `${O(e)} is valid only at ${i.join(", ")} s.`
		} : {
			...t,
			disabled: !0,
			reason: "Provisional — no scorer is validated at 15 s (not a cube epoch)."
		};
	});
}
function X(e, n) {
	return e.find((e) => !e.disabled)?.value ?? e[0]?.value ?? n;
}
const Z = K("count_cell");
function K(e) {
	const t = n.find((n) => n.grammarId === e), a = t?.segments[0]?.literalValue;
	if (void 0 === t || void 0 === a) throw new Error(`cell id grammar ${e} has no root segment`);
	return `${a}${t.segmentSeparator}`;
}
function J(e) {
	const n = e.trim();
	if (n.startsWith(Z)) {
		const e = t(n), a = e.scorer;
		if (void 0 !== a && ("count_hasib" === e.family || "angle_hasib" === e.family)) return Q({
			family: a,
			implementation: e.provenance ?? Y(a),
			countMetric: e.countSource ?? "neishabouri",
			axis: "anglez" === e.signalAxis ? "y" : e.signalAxis ?? "y",
			epochSeconds: Number(e.epoch)
		});
		const i = n.slice(Z.length).split("__")[0] ?? "";
		if (G(i).length > 0) return console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${n}" — keeping family "${i}", defaulting its substrate dials.`), Q({
			family: i,
			implementation: Y(i),
			countMetric: "neishabouri",
			axis: "y",
			epochSeconds: 60
		});
		console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${n}" — falling back to the first selectable family.`);
	}
	const a = _.get(n);
	return a && null !== a.family ? Q({
		family: a.family,
		implementation: a.implementation ?? "reference",
		countMetric: a.defaultCountMetric ?? "neishabouri",
		axis: "y",
		epochSeconds: a.nativeEpochSeconds
	}) : function(e, n) {
		const t = q(void 0, n), a = t.some((n) => n.value === e.family && !n.disabled) ? e.family : X(t, e.family), i = D(a, n), r = i.some((n) => n.value === e.implementation && !n.disabled) ? e.implementation : X(i, e.implementation);
		if ("counts" !== F(a)) {
			const n = V(a, r), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(X(n, String(e.epochSeconds)));
			return {
				family: a,
				implementation: r,
				countMetric: e.countMetric,
				axis: e.axis,
				epochSeconds: t
			};
		}
		const o = L(a, r, n), s = o.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : X(o, U(a, r)), c = W(s), l = c.some((n) => n.value === e.axis && !n.disabled) ? e.axis : X(c, "y"), u = V(a, r);
		return {
			family: a,
			implementation: r,
			countMetric: s,
			axis: l,
			epochSeconds: u.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(X(u, "60"))
		};
	}({
		family: q().find((e) => !e.disabled)?.value ?? "sadeh_1994",
		implementation: "",
		countMetric: "neishabouri",
		axis: "y",
		epochSeconds: 60
	});
}
function Q(e) {
	return function(e) {
		if ("counts" !== F(e.family)) {
			const n = V(e.family, e.implementation), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(X(n, String(e.epochSeconds)));
			return {
				...e,
				epochSeconds: t
			};
		}
		const n = L(e.family, e.implementation), t = n.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : X(n, U(e.family, e.implementation)), a = W(t), i = a.some((n) => n.value === e.axis && !n.disabled) ? e.axis : X(a, "y"), r = V(e.family, e.implementation), o = r.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(X(r, "60"));
		return {
			...e,
			countMetric: t,
			axis: i,
			epochSeconds: o
		};
	}(e);
}
function Y(e) {
	return P(e, "ggir") ? "ggir" : D(e).find((e) => !e.disabled)?.value ?? "reference";
}
function ee(e, n) {
	if (function(e, n) {
		return n?.nonwearAlgorithms.some((n) => n === e) ?? !1;
	}(e, n)) return null;
	const t = ne(e), a = r.find((n) => n.id === e), i = e === c.gt3x_capsense ? ["the GT3X CAPSENSE wear-sensor stream"] : [
		..."raw_accel" === a?.requiredSignal ? ["raw acceleration samples"] : [],
		..."counts_axis_y" === a?.requiredSignal ? ["60 s activity counts"] : [],
		...a?.requiresTemperature ? ["a temperature channel"] : []
	];
	return i.length > 0 ? `The selected nonwear detector (${t}) needs ${i.join(" and ")}, which this file does not provide on the active runtime.` : `The selected nonwear detector (${t}) is not implemented for this file on the active runtime.`;
}
function ne(e) {
	return {
		[c.choi_2011]: "Choi 2011 (60 min)",
		[c.choi_2012]: "Choi 2012 (90 min)",
		[c.troiano_2008]: "Troiano 2008",
		[c.flat_activity]: "Flat activity",
		[c.gt3x_capsense]: "GT3X CAPSENSE",
		[c.actiware_off_wrist]: "Actiwatch off-wrist",
		[c.detach_nonwear]: "DETACH",
		[c.van_hees_2013]: "van Hees 2013",
		[c.van_hees_2023]: "van Hees 2023",
		[c.ggir_saved]: "GGIR nonwear (as saved by the folder)",
		[c.ggir_part2_invalid]: "GGIR invalid (Part 2)",
		[c.ahmadi_2020]: "Ahmadi 2020",
		[c.skovgaard_2023]: "Skovgaard 2023",
		study_selection: "Study selection (weighted)"
	}[e] ?? H(e);
}
K("consensus_cell"), Object.values(c);
const te = r.filter((e) => "nonwear" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds
})), ae = new Map(te.map((e) => [e.id, e]));
function ie(e) {
	return ae.get(e);
}
function re(e) {
	if (null == e) return !1;
	const n = e.length;
	for (let t = 0; t < n; t++) {
		const n = e[t];
		if (void 0 !== n && Number.isFinite(n)) return !0;
	}
	return !1;
}
const oe = {
	source_not_eligible: "DETACH nonwear was not run: this file's source type has no scientifically eligible DETACH path.",
	no_finite_temperature: "DETACH nonwear was not run: this file carries no finite temperature samples (the temperature column is absent or all-NaN).",
	no_acceleration_g: "DETACH nonwear was not run: this file carries no per-epoch acceleration in g. DETACH's acceleration threshold is 0.013 g and activity counts are not comparable to it, so no mask is produced from counts.",
	computation_failed: "DETACH nonwear failed while running for this day. Choi nonwear is intact."
};
function se(e, n, t) {
	return e?.nonwearAlgorithms.some((e) => e === c.detach_nonwear) ? re(n) ? null == t || 0 === t.length ? "no_acceleration_g" : null : "no_finite_temperature" : "source_not_eligible";
}
function ce(e, n, t) {
	return null === se(e, n, t);
}
const le = te.filter((e) => "raw_accel" === e.requiredSignal && !e.needsModel && !e.requiresTemperature).map((e) => e.id), ue = {
	[c.choi_2012]: "nonwearResults",
	[c.choi_2011]: "nonwearResultsChoi2011",
	[c.detach_nonwear]: "detachNonwear",
	[c.van_hees_2023]: "vanHeesNonwear"
}, de = Object.keys(ue), fe = te.filter((e) => "counts_axis_y" === e.requiredSignal && !e.needsModel && !e.requiresTemperature && !de.includes(e.id)).map((e) => e.id);
function me(e, n, t) {
	if (!xe(e, n, t)) return;
	const a = ue[n];
	return a ? e[a] : e.unifiedNonwearMasks?.[n];
}
async function he(e, n, t, a, i = s()) {
	if (!e) return null;
	const r = ge(e, n, t.source);
	if (null !== r) return { unavailable: r };
	const { timestampsSec: o, epochLenSec: c } = a;
	if (pe(e)) return { mask: await b(t.offPeriods.map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	})), o, c, i) };
	const l = n[e], u = new Array(o.length).fill(0), d = Math.min(l.length, u.length);
	for (let s = 0; s < d; s++) u[s] = 1 === l[s] ? 1 : 0;
	return { mask: u };
}
function pe(e) {
	return e === c.gt3x_capsense || e === c.actiware_off_wrist;
}
function ge(e, n, t) {
	return e ? pe(e) ? t === e ? null : ee(e) : n[e] ? null : "counts_axis_y" === ie(e)?.requiredSignal ? function(e) {
		return `nonwear mask for ${ne(e)} is missing; re-import the file`;
	}(e) : ee(e) : null;
}
async function ve(e, n, t, a, i = s()) {
	const r = [], o = [], c = [];
	for (const s of new Set(e)) {
		const e = await he(s, n, t, a, i);
		null !== e && ("unavailable" in e ? c.push({
			detector: s,
			reason: e.unavailable
		}) : (r.push(s), o.push(e.mask)));
	}
	if (0 === r.length) return 0 === c.length ? null : { unavailable: c.map((e) => e.reason).join("; ") };
	const l = h(r), u = await i.fuseNonwearMasks(l.map((e) => Uint8Array.from(o[r.indexOf(e)])));
	return {
		weight: u.weight,
		flagged: u.flagged,
		memberFlags: u.memberFlags,
		available: r,
		memberMasks: o,
		dropped: c
	};
}
function be(e) {
	return null !== e && "weight" in e ? e : null;
}
function _e(e) {
	return i(e) ? "ggir" : "counts";
}
function we(e, n = d.getState()) {
	return "ggir" === e ? n.nonwearDetectorsGgir : n.nonwearDetectorsCounts;
}
const Se = {
	counts: e.nonwear_detectors_counts,
	ggir: e.nonwear_detectors_ggir
};
function ye(e, n) {
	return e.filter((e) => !Se[n].includes(e.detector)).map((e) => `${ne(e.detector)} left out of the nonwear weight: ${e.reason}`);
}
function Ae(e, n) {
	const t = 1 === n ? "detector" : "detectors";
	return `${String(e.length)} of ${String(n)} ${t} (${e.map(ne).join(", ")})`;
}
function Me(e, n) {
	const { contributors: t, ...a } = e;
	return void 0 === t ? a : {
		...a,
		contributing_detectors: t,
		agreement: Ae(t, n)
	};
}
function ke() {
	return d.getState().choiAxis;
}
const Te = [c.choi_2011, c.choi_2012];
function xe(e, n, t) {
	if (!Te.includes(n)) return !0;
	const a = e.nonwearChoiAxis;
	return void 0 === a || a === t;
}
function Ce(e, n) {
	const t = {};
	for (const [a, i] of Object.entries(e.unifiedNonwearMasks ?? {})) i && (t[a] = i);
	for (const [a, i] of Object.entries(ue)) {
		if (!xe(e, a, n)) continue;
		const r = e[i];
		r && (t[a] = r);
	}
	return t;
}
function Ne(e, n) {
	if (!e.available || !e.nonwear) return [];
	const t = e.elementSeconds;
	return function(e) {
		const n = [];
		let t = null;
		for (let a = 0; a < e.length; a++) e[a] ? t ??= a : null !== t && (n.push({
			start: t,
			end: a - 1
		}), t = null);
		return null !== t && n.push({
			start: t,
			end: e.length - 1
		}), n;
	}(e.nonwear).map((e) => ({
		startTsSec: n + e.start * t,
		endTsSec: n + (e.end + 1) * t
	}));
}
function $e(e, n, t = s()) {
	return e.available && e.nonwear && e.elementSeconds === n.epochLenSec && e.nonwear.length === n.epochTimestampsSec.length ? Promise.resolve(Array.from(e.nonwear)) : b(Ne(e, n.baseTsSec), n.epochTimestampsSec, n.epochLenSec, t);
}
async function je(e, n, t) {
	const a = {};
	if (0 === e.size || 0 === n.epochTimestampsSec.length) return a;
	const i = {};
	for (const [r, o] of e) {
		if (!o.available) continue;
		const e = await $e(o, n, t), s = new Uint8Array(e).buffer, c = ue[r];
		c ? a[c] = s : i[r] = s;
	}
	return Object.keys(i).length > 0 && (a.unifiedNonwearMasks = i), He(a);
}
async function Ee(e, n, t = s()) {
	if (0 === e.length || 0 === n.epochTimestampsSec.length) return {};
	let a = Float64Array.from(e);
	const i = Float64Array.from(n.epochTimestampsSec), r = "rounded_mean";
	let o;
	if (n.dstRuns?.length) {
		const s = await t.ggir5sWallClockMs(1e3 * n.baseTsSec, e.length, Array.from(n.dstRuns)), c = Array.from(s.keys()).filter((e) => Number.isFinite(s[e])), l = Float64Array.from(c, (e) => s[e] / 1e3);
		a = Float64Array.from(c, (n) => e[n]), o = await t.foldOntoGrid(l, a, i, n.epochLenSec, r);
	} else o = await t.foldUniformOntoGrid(n.baseTsSec, 5, a, i, n.epochLenSec, r);
	const c = await f(n.ggirConfigCsv, t), l = Uint8Array.from(o, (e) => 1 === e ? 1 : 0).buffer, u = ue[c];
	return He(u ? { [u]: l } : { unifiedNonwearMasks: { [c]: l } });
}
function He(...e) {
	const n = {}, t = {};
	for (const a of e) {
		for (const e of Object.values(ue)) {
			const t = a[e];
			void 0 === t || null === t && void 0 !== n[e] || (n[e] = t);
		}
		a.unifiedNonwearMasks && Object.assign(t, a.unifiedNonwearMasks);
	}
	return Object.keys(t).length > 0 && (n.unifiedNonwearMasks = t), t[c.van_hees_2013] && void 0 === n.vanHeesNonwear && (n.vanHeesNonwear = null), n;
}
const Oe = {
	path: "ggir",
	selected: [c.ggir_part2_invalid],
	available: [c.ggir_part2_invalid],
	dropped: []
};
function Ge(e, n) {
	return 0 === n.selected.length ? e : {
		...e ?? {},
		nonwear_detectors: [...n.selected],
		nonwear_path: n.path,
		...n.available ? { nonwear_detectors_available: [...n.available] } : {},
		...n.dropped ? { nonwear_detectors_dropped: n.dropped.map(({ detector: e, reason: n }) => ({
			detector: e,
			reason: n
		})) } : {}
	};
}
c.van_hees_2023, c.van_hees_2023;
export { J as A, $e as C, we as D, ke as E, b as F, F as M, ne as N, Ne as O, P, Me as S, me as T, re as _, Oe as a, ie as b, Ce as c, Ae as d, se as f, Ee as g, be as h, oe as i, R as j, Ge as k, je as l, ve as m, fe as n, te as o, ye as p, ue as r, le as s, Te as t, ce as u, pe as v, ge as w, _e as x, He as y };
