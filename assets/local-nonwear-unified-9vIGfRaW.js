import { Bt as e, En as n, Ft as t, On as a, Rt as i, Tn as o, bt as r } from "./schema-Bbr1Zg5F.js";
import { r as s } from "./workers-BSP07cYu.js";
import { A as c, D as l, y as u } from "./workspace-db-BEYycimi.js";
import { r as d, tn as f } from "./store-JiWMTGuM.js";
import { M as m, S as h, ct as p, ht as g, mt as v } from "./per-source-defaults-DGxXQBbZ.js";
async function b(e, n, t, a) {
	if (0 === e.length || 0 === n.length) return new Array(n.length).fill(0);
	const i = await a.rasterizePeriods(Float64Array.from(e, (e) => e.startTsSec), Float64Array.from(e, (e) => e.endTsSec), Float64Array.from(n), t);
	return Array.from(i.mask);
}
const _ = new Map(a.map((e) => [e.id, e]));
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
const T = /* @__PURE__ */ new Set([
	"consensus_majority_vote",
	"manual",
	"natural_language",
	"van_hees_hasib_2015"
]), k = Object.keys(p), N = [30, 60], x = /* @__PURE__ */ new Set([
	...k,
	...Object.values(h).flatMap((e) => [...e.countMetrics]),
	...a.flatMap((e) => [...e.compatibleCountMetrics])
]), C = Object.values(u).filter((e) => x.has(e)), $ = new Set(k), j = {
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
function O(e) {
	return e.split("_").map((e) => 0 === e.length ? e : e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
}
function H(e) {
	return j[e] ?? O(e);
}
function G(e) {
	return a.filter((n) => n.family === e);
}
function q(e, n, t) {
	const i = /* @__PURE__ */ new Set(), o = [], r = n ? new Set(n.sleepAlgorithms) : null;
	for (const s of a) {
		if ("sleep_wake" !== s.kind) continue;
		const n = s.family;
		if (null === n || T.has(n)) continue;
		if (i.has(n)) continue;
		i.add(n);
		const a = G(n);
		if (a.length > 0 && a.every((e) => !w(e.conformance))) {
			const e = a.every((e) => "needs_model" === e.conformance) ? "needs_model" : "provisional";
			o.push({
				value: n,
				label: H(n),
				disabled: !0,
				reason: M(e)
			});
			continue;
		}
		if (null !== r && a.every((e) => !r.has(e.id))) {
			o.push({
				value: n,
				label: H(n),
				disabled: !0,
				reason: a.some((e) => t?.has(e.id)) ? A : y
			});
			continue;
		}
		const c = F(n);
		void 0 === e || R(c) === e ? o.push({
			value: n,
			label: H(n)
		}) : o.push({
			value: n,
			label: H(n),
			disabled: !0,
			reason: D(c)
		});
	}
	return o;
}
function F(e) {
	const n = G(e)[0]?.execution;
	return "angle_spt" === n ? "angle" : "neural_model" === n ? "neural" : "vendor_analysis" === n ? "vendor" : "counts";
}
function R(e) {
	return "angle" === e ? l.ggir_5s : l.number_60s_epochs;
}
function D(e) {
	return "angle" === e ? "Requires the GGIR 5 s raw pipeline — switch the extraction path to score this." : "Requires the 60 s counts pipeline — switch the extraction path to score this.";
}
function z(e, n, t) {
	const a = n ? new Set(n.sleepAlgorithms) : null;
	return G(e).map((e) => {
		const n = e.implementation ?? "reference", i = (o = e.implementation ?? "reference", E[o] ?? O(o));
		var o;
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
	return I(e, n)?.defaultCountMetric ?? k[0] ?? "neishabouri";
}
function L(e, n, t) {
	const a = I(e, n), i = new Set(a?.compatibleCountMetrics ?? []), o = t ? new Set(t.countMetrics) : null, r = U(e, n);
	let s;
	s = i.size > 0 ? o ? new Set([...i].filter((e) => o.has(e))) : new Set(i) : o ? new Set(o) : /* @__PURE__ */ new Set();
	const c = new Set([...s].filter((e) => $.has(e))), l = new Set([...s].filter((e) => !$.has(e))), u = null === o || 0 === o.size, d = 0 === c.size && u;
	return C.map((e) => {
		const n = function(e) {
			return "neishabouri" === e ? "Neishabouri (amplitude counts)" : "zero_crossing" === e ? "Zero-crossing (GGIR zc)" : "pim" === e ? "PIM (proportional integrating mode)" : "zcm" === e ? "ZCM (zero-crossing mode)" : "tat" === e ? "TAT (time above threshold)" : O(e);
		}(e);
		return d ? e === r ? {
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
	return (p[e] ?? []).map((e) => ({
		value: e,
		label: B(e)
	}));
}
function B(e) {
	return "vm" === e ? "Vector magnitude" : `Axis ${e.toUpperCase()}`;
}
function V(e, t) {
	const a = F(e);
	if ("angle" === a) return n.filter((e) => "raw" === e.lineage).map((e) => ({
		value: String(e.seconds),
		label: `${String(e.seconds)} s`
	}));
	if ("neural" === a || "vendor" === a) {
		const n = I(e, t)?.nativeEpochSeconds ?? 60;
		return [{
			value: String(n),
			label: `${String(n)} s (native)`
		}];
	}
	const i = g(e);
	return n.filter((e) => "counts" === e.lineage).map((n) => {
		const t = {
			value: String(n.seconds),
			label: `${String(n.seconds)} s`
		};
		return N.includes(n.seconds) ? v(i, n.seconds) ? t : {
			...t,
			disabled: !0,
			reason: `${H(e)} is valid only at ${i.join(", ")} s.`
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
function K(n) {
	const t = e.find((e) => e.grammarId === n), a = t?.segments[0]?.literalValue;
	if (void 0 === t || void 0 === a) throw new Error(`cell id grammar ${n} has no root segment`);
	return `${a}${t.segmentSeparator}`;
}
function J(e) {
	const n = e.trim();
	if (n.startsWith(Z)) {
		const e = i(n), t = e.scorer;
		if (void 0 !== t && ("count_hasib" === e.family || "angle_hasib" === e.family)) return Q({
			family: t,
			implementation: e.provenance ?? Y(t),
			countMetric: e.countSource ?? "neishabouri",
			axis: "anglez" === e.signalAxis ? "y" : e.signalAxis ?? "y",
			epochSeconds: Number(e.epoch)
		});
		const a = n.slice(Z.length).split("__")[0] ?? "";
		if (G(a).length > 0) return console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${n}" — keeping family "${a}", defaulting its substrate dials.`), Q({
			family: a,
			implementation: Y(a),
			countMetric: "neishabouri",
			axis: "y",
			epochSeconds: 60
		});
		console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${n}" — falling back to the first selectable family.`);
	}
	const t = _.get(n);
	return t && null !== t.family ? Q({
		family: t.family,
		implementation: t.implementation ?? "reference",
		countMetric: t.defaultCountMetric ?? "neishabouri",
		axis: "y",
		epochSeconds: t.nativeEpochSeconds
	}) : function(e, n) {
		const t = q(void 0, n), a = t.some((n) => n.value === e.family && !n.disabled) ? e.family : X(t, e.family), i = z(a, n), o = i.some((n) => n.value === e.implementation && !n.disabled) ? e.implementation : X(i, e.implementation);
		if ("counts" !== F(a)) {
			const n = V(a, o), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(X(n, String(e.epochSeconds)));
			return {
				family: a,
				implementation: o,
				countMetric: e.countMetric,
				axis: e.axis,
				epochSeconds: t
			};
		}
		const r = L(a, o, n), s = r.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : X(r, U(a, o)), c = W(s), l = c.some((n) => n.value === e.axis && !n.disabled) ? e.axis : X(c, "y"), u = V(a, o);
		return {
			family: a,
			implementation: o,
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
		const n = L(e.family, e.implementation), t = n.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : X(n, U(e.family, e.implementation)), a = W(t), i = a.some((n) => n.value === e.axis && !n.disabled) ? e.axis : X(a, "y"), o = V(e.family, e.implementation), r = o.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(X(o, "60"));
		return {
			...e,
			countMetric: t,
			axis: i,
			epochSeconds: r
		};
	}(e);
}
function Y(e) {
	return P(e, "ggir") ? "ggir" : z(e).find((e) => !e.disabled)?.value ?? "reference";
}
function ee(e, n) {
	if (function(e, n) {
		return n?.nonwearAlgorithms.some((n) => n === e) ?? !1;
	}(e, n)) return null;
	const t = ne(e), i = a.find((n) => n.id === e), o = e === c.gt3x_capsense ? ["the GT3X CAPSENSE wear-sensor stream"] : [
		..."raw_accel" === i?.requiredSignal ? ["raw acceleration samples"] : [],
		..."counts_axis_y" === i?.requiredSignal ? ["60 s activity counts"] : [],
		...i?.requiresTemperature ? ["a temperature channel"] : []
	];
	return o.length > 0 ? `The selected nonwear detector (${t}) needs ${o.join(" and ")}, which this file does not provide on the active runtime.` : `The selected nonwear detector (${t}) is not implemented for this file on the active runtime.`;
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
	}[e] ?? O(e);
}
K("consensus_cell"), Object.values(c);
const te = a.filter((e) => "nonwear" === e.kind).map((e) => ({
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
function oe(e) {
	if (null == e) return !1;
	const n = e.length;
	for (let t = 0; t < n; t++) {
		const n = e[t];
		if (void 0 !== n && Number.isFinite(n)) return !0;
	}
	return !1;
}
const re = {
	source_not_eligible: "DETACH nonwear was not run: this file's source type has no scientifically eligible DETACH path.",
	no_finite_temperature: "DETACH nonwear was not run: this file carries no finite temperature samples (the temperature column is absent or all-NaN).",
	no_acceleration_g: "DETACH nonwear was not run: this file carries no per-epoch acceleration in g. DETACH's acceleration threshold is 0.013 g and activity counts are not comparable to it, so no mask is produced from counts.",
	computation_failed: "DETACH nonwear failed while running for this day. Choi nonwear is intact."
};
function se(e, n, t) {
	return e?.nonwearAlgorithms.some((e) => e === c.detach_nonwear) ? oe(n) ? null == t || 0 === t.length ? "no_acceleration_g" : null : "no_finite_temperature" : "source_not_eligible";
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
	if (!Ne(e, n, t)) return;
	const a = ue[n];
	return a ? e[a] : e.unifiedNonwearMasks?.[n];
}
async function he(e, n, t, a, i = s()) {
	if (!e) return null;
	const o = ge(e, n, t.source);
	if (null !== o) return { unavailable: o };
	const { timestampsSec: r, epochLenSec: c } = a;
	if (pe(e)) return { mask: await b(t.offPeriods.map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	})), r, c, i) };
	const l = n[e], u = new Array(r.length).fill(0), d = Math.min(l.length, u.length);
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
	const o = [], r = [], c = [];
	for (const s of new Set(e)) {
		const e = await he(s, n, t, a, i);
		null !== e && ("unavailable" in e ? c.push({
			detector: s,
			reason: e.unavailable
		}) : (o.push(s), r.push(e.mask)));
	}
	if (0 === o.length) return 0 === c.length ? null : { unavailable: c.map((e) => e.reason).join("; ") };
	const l = m(o), u = await i.fuseNonwearMasks(l.map((e) => Uint8Array.from(r[o.indexOf(e)])));
	return {
		weight: u.weight,
		flagged: u.flagged,
		memberFlags: u.memberFlags,
		available: o,
		memberMasks: r,
		dropped: c
	};
}
function be(e) {
	return null !== e && "weight" in e ? e : null;
}
function _e(e) {
	return t(e) ? "ggir" : "counts";
}
function we(e, n = d.getState()) {
	return "ggir" === e ? n.nonwearDetectorsGgir : n.nonwearDetectorsCounts;
}
const Se = {
	counts: r.nonwear_detectors_counts,
	ggir: r.nonwear_detectors_ggir
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
function Te() {
	return d.getState().choiAxis;
}
const ke = [c.choi_2011, c.choi_2012];
function Ne(e, n, t) {
	if (!ke.includes(n)) return !0;
	const a = e.nonwearChoiAxis;
	return void 0 === a || a === t;
}
function xe(e, n) {
	const t = {};
	for (const [a, i] of Object.entries(e.unifiedNonwearMasks ?? {})) i && (t[a] = i);
	for (const [a, i] of Object.entries(ue)) {
		if (!Ne(e, a, n)) continue;
		const o = e[i];
		o && (t[a] = o);
	}
	return t;
}
function Ce(e, n) {
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
	return e.available && e.nonwear && e.elementSeconds === n.epochLenSec && e.nonwear.length === n.epochTimestampsSec.length ? Promise.resolve(Array.from(e.nonwear)) : b(Ce(e, n.baseTsSec), n.epochTimestampsSec, n.epochLenSec, t);
}
async function je(e, n, t) {
	const a = {};
	if (0 === e.size || 0 === n.epochTimestampsSec.length) return a;
	const i = {};
	for (const [o, r] of e) {
		if (!r.available) continue;
		const e = await $e(r, n, t), s = new Uint8Array(e).buffer, c = ue[o];
		c ? a[c] = s : i[o] = s;
	}
	return Object.keys(i).length > 0 && (a.unifiedNonwearMasks = i), Oe(a);
}
async function Ee(e, n, t = s()) {
	if (0 === e.length || 0 === n.epochTimestampsSec.length) return {};
	let a = Float64Array.from(e);
	const i = Float64Array.from(n.epochTimestampsSec), o = "rounded_mean";
	let r;
	if (n.dstRuns?.length) {
		const s = await t.ggir5sWallClockMs(1e3 * n.baseTsSec, e.length, Array.from(n.dstRuns)), c = Array.from(s.keys()).filter((e) => Number.isFinite(s[e])), l = Float64Array.from(c, (e) => s[e] / 1e3);
		a = Float64Array.from(c, (n) => e[n]), r = await t.foldOntoGrid(l, a, i, n.epochLenSec, o);
	} else r = await t.foldUniformOntoGrid(n.baseTsSec, 5, a, i, n.epochLenSec, o);
	const c = await f(n.ggirConfigCsv, t), l = Uint8Array.from(r, (e) => 1 === e ? 1 : 0).buffer, u = ue[c];
	return Oe(u ? { [u]: l } : { unifiedNonwearMasks: { [c]: l } });
}
function Oe(...e) {
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
const He = {
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
export { J as A, $e as C, we as D, Te as E, b as F, F as M, ne as N, Ce as O, P, Me as S, me as T, oe as _, He as a, ie as b, xe as c, Ae as d, se as f, Ee as g, be as h, re as i, R as j, Ge as k, je as l, ve as m, fe as n, te as o, ye as p, ue as r, le as s, ke as t, ce as u, pe as v, ge as w, _e as x, Oe as y };
