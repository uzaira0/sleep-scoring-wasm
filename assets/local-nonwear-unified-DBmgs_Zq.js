import { Bt as e, Gn as n, Ht as t, Ir as a, Q as o, Qn as i, Vt as r, Wt as s, X as c, q as l, qt as u, sn as d, tn as f } from "./background-jobs-CiuHIxxN.js";
import { Ar as m, En as h, Fr as p, Gr as g, Ir as b, Ur as v, pn as w, qr as S } from "./db-BDmmJMkH.js";
async function _(e, n, t, a) {
	if (0 === e.length || 0 === n.length) return new Array(n.length).fill(0);
	const o = await a.rasterizePeriods(Float64Array.from(e, (e) => e.startTsSec), Float64Array.from(e, (e) => e.endTsSec), Float64Array.from(n), t);
	return Array.from(o.mask);
}
const y = new Map(s.map((e) => [e.id, e]));
function M(e) {
	return "conformant" === e;
}
const A = {
	provisional: "Provisional — constants are not yet verified against the reference implementation.",
	needs_model: "Needs a trained model artifact — cannot produce a result."
}, T = "Scientifically eligible, but this implementation is not available on the active runtime.", k = "Unavailable for this file: it does not carry the input this method needs.";
function x(e) {
	return A[e] ?? `Not selectable — conformance state "${e}" is not validated.`;
}
const N = /* @__PURE__ */ new Set([
	"consensus_majority_vote",
	"manual",
	"natural_language",
	"van_hees_hasib_2015"
]), $ = Object.keys(m), j = [30, 60], C = /* @__PURE__ */ new Set([
	...$,
	...Object.values(d).flatMap((e) => [...e.countMetrics]),
	...s.flatMap((e) => [...e.compatibleCountMetrics])
]), q = Object.values(v).filter((e) => C.has(e)), O = new Set($), E = u.ScoringMethodFamily, F = u.ScoringImplementationVariant, z = e;
function D(e) {
	return e.split("_").map((e) => 0 === e.length ? e : e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
}
function H(e) {
	return E[e] ?? D(e);
}
function G(e) {
	return s.filter((n) => n.family === e);
}
function R(e, n, t) {
	const a = /* @__PURE__ */ new Set(), o = [], i = n ? new Set(n.sleepAlgorithms) : null;
	for (const r of s) {
		if ("sleep_wake" !== r.kind) continue;
		const n = r.family;
		if (null === n || N.has(n)) continue;
		if (a.has(n)) continue;
		a.add(n);
		const s = G(n);
		if (s.length > 0 && s.every((e) => !M(e.conformance))) {
			const e = s.every((e) => "needs_model" === e.conformance) ? "needs_model" : "provisional";
			o.push({
				value: n,
				label: H(n),
				disabled: !0,
				reason: x(e)
			});
			continue;
		}
		if (null !== i && s.every((e) => !i.has(e.id))) {
			o.push({
				value: n,
				label: H(n),
				disabled: !0,
				reason: s.some((e) => t?.has(e.id)) ? k : T
			});
			continue;
		}
		const c = U(n);
		void 0 === e || I(c) === e ? o.push({
			value: n,
			label: H(n)
		}) : o.push({
			value: n,
			label: H(n),
			disabled: !0,
			reason: L(c)
		});
	}
	return o;
}
function U(e) {
	const n = G(e)[0]?.execution;
	return "angle_spt" === n ? "angle" : "neural_model" === n ? "neural" : "vendor_analysis" === n ? "vendor" : "counts";
}
function I(e) {
	return "angle" === e ? g.ggir_5s : g.number_60s_epochs;
}
function L(e) {
	return "angle" === e ? "Requires the GGIR 5 s raw pipeline — switch the extraction path to score this." : "Requires the 60 s counts pipeline — switch the extraction path to score this.";
}
function P(e, n, t) {
	const a = n ? new Set(n.sleepAlgorithms) : null;
	return G(e).map((e) => {
		const n = e.implementation ?? "reference", o = (i = e.implementation ?? "reference", F[i] ?? D(i));
		var i;
		return M(e.conformance) ? null === a || a.has(e.id) ? {
			value: n,
			label: o
		} : {
			value: n,
			label: o,
			disabled: !0,
			reason: t?.has(e.id) ? k : T
		} : {
			value: n,
			label: o,
			disabled: !0,
			reason: x(e.conformance)
		};
	});
}
function V(e, n) {
	return r[`${e}::${n}`] ?? null;
}
function W(e, n) {
	const t = V(e, n);
	return t ? y.get(t) : void 0;
}
function Q(e, n) {
	return W(e, n)?.defaultCountMetric ?? $[0] ?? "neishabouri";
}
function Z(e, n, t) {
	const a = W(e, n), o = new Set(a?.compatibleCountMetrics ?? []), i = t ? new Set(t.countMetrics) : null, r = Q(e, n);
	let s;
	s = o.size > 0 ? i ? new Set([...o].filter((e) => i.has(e))) : new Set(o) : i ? new Set(i) : /* @__PURE__ */ new Set();
	const c = new Set([...s].filter((e) => O.has(e))), l = new Set([...s].filter((e) => !O.has(e))), u = null === i || 0 === i.size, d = 0 === c.size && u;
	return q.map((e) => {
		const n = function(e) {
			return "neishabouri" === e ? "Neishabouri (amplitude counts)" : "zero_crossing" === e ? "Zero-crossing (GGIR zc)" : "pim" === e ? "PIM (proportional integrating mode)" : "zcm" === e ? "ZCM (zero-crossing mode)" : "tat" === e ? "TAT (time above threshold)" : D(e);
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
			reason: l.has(e) ? "Recorded by this device, but not yet scoreable as a variant — its count-substrate cube cell is pending." : o.size > 0 && !o.has(e) ? "Not a validated substrate for this scorer." : "This device does not record these counts."
		};
	});
}
function B(e) {
	return (m[e] ?? []).map((e) => ({
		value: e,
		label: X(e)
	}));
}
function X(e) {
	return "vm" === e ? "Vector magnitude" : `Axis ${e.toUpperCase()}`;
}
function J(e, n) {
	const a = U(e);
	if ("angle" === a) return t.filter((e) => "raw" === e.lineage).map((e) => ({
		value: String(e.seconds),
		label: `${String(e.seconds)} s`
	}));
	if ("neural" === a || "vendor" === a) {
		const t = W(e, n)?.nativeEpochSeconds ?? 60;
		return [{
			value: String(t),
			label: `${String(t)} s (native)`
		}];
	}
	const o = b(e);
	return t.filter((e) => "counts" === e.lineage).map((n) => {
		const t = {
			value: String(n.seconds),
			label: `${String(n.seconds)} s`
		};
		return j.includes(n.seconds) ? p(o, n.seconds) ? t : {
			...t,
			disabled: !0,
			reason: `${H(e)} is valid only at ${o.join(", ")} s.`
		} : {
			...t,
			disabled: !0,
			reason: "Provisional — no scorer is validated at 15 s (not a cube epoch)."
		};
	});
}
function K(e, n) {
	return e.find((e) => !e.disabled)?.value ?? e[0]?.value ?? n;
}
const Y = ee("count_cell");
function ee(e) {
	const n = o.find((n) => n.grammarId === e), t = n?.segments[0]?.literalValue;
	if (void 0 === n || void 0 === t) throw new Error(`cell id grammar ${e} has no root segment`);
	return `${t}${n.segmentSeparator}`;
}
function ne(e) {
	const n = e.trim();
	if (n.startsWith(Y)) {
		const e = c(n), t = e.scorer;
		if (void 0 !== t && ("count_hasib" === e.family || "angle_hasib" === e.family)) return te({
			family: t,
			implementation: e.provenance ?? ae(t),
			countMetric: e.countSource ?? "neishabouri",
			axis: "anglez" === e.signalAxis ? "y" : e.signalAxis ?? "y",
			epochSeconds: Number(e.epoch)
		});
		const a = n.slice(Y.length).split("__")[0] ?? "";
		if (G(a).length > 0) return console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${n}" — keeping family "${a}", defaulting its substrate dials.`), te({
			family: a,
			implementation: ae(a),
			countMetric: "neishabouri",
			axis: "y",
			epochSeconds: 60
		});
		console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${n}" — falling back to the first selectable family.`);
	}
	const t = y.get(n);
	return t && null !== t.family ? te({
		family: t.family,
		implementation: t.implementation ?? "reference",
		countMetric: t.defaultCountMetric ?? "neishabouri",
		axis: "y",
		epochSeconds: t.nativeEpochSeconds
	}) : function(e, n) {
		const t = R(void 0, n), a = t.some((n) => n.value === e.family && !n.disabled) ? e.family : K(t, e.family), o = P(a, n), i = o.some((n) => n.value === e.implementation && !n.disabled) ? e.implementation : K(o, e.implementation);
		if ("counts" !== U(a)) {
			const n = J(a, i), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(K(n, String(e.epochSeconds)));
			return {
				family: a,
				implementation: i,
				countMetric: e.countMetric,
				axis: e.axis,
				epochSeconds: t
			};
		}
		const r = Z(a, i, n), s = r.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : K(r, Q(a, i)), c = B(s), l = c.some((n) => n.value === e.axis && !n.disabled) ? e.axis : K(c, "y"), u = J(a, i);
		return {
			family: a,
			implementation: i,
			countMetric: s,
			axis: l,
			epochSeconds: u.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(K(u, "60"))
		};
	}({
		family: R().find((e) => !e.disabled)?.value ?? "sadeh_1994",
		implementation: "",
		countMetric: "neishabouri",
		axis: "y",
		epochSeconds: 60
	});
}
function te(e) {
	return function(e) {
		if ("counts" !== U(e.family)) {
			const n = J(e.family, e.implementation), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(K(n, String(e.epochSeconds)));
			return {
				...e,
				epochSeconds: t
			};
		}
		const n = Z(e.family, e.implementation), t = n.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : K(n, Q(e.family, e.implementation)), a = B(t), o = a.some((n) => n.value === e.axis && !n.disabled) ? e.axis : K(a, "y"), i = J(e.family, e.implementation), r = i.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(K(i, "60"));
		return {
			...e,
			countMetric: t,
			axis: o,
			epochSeconds: r
		};
	}(e);
}
function ae(e) {
	return V(e, "ggir") ? "ggir" : P(e).find((e) => !e.disabled)?.value ?? "reference";
}
function oe(e, n) {
	if (function(e, n) {
		return n?.nonwearAlgorithms.some((n) => n === e) ?? !1;
	}(e, n)) return null;
	const t = ie(e), a = s.find((n) => n.id === e), o = z[e]?.inputDescription, i = o ? [o] : [
		..."raw_accel" === a?.requiredSignal ? ["raw acceleration samples"] : [],
		..."counts_axis_y" === a?.requiredSignal ? ["60 s activity counts"] : [],
		...a?.requiresTemperature ? ["a temperature channel"] : []
	];
	return i.length > 0 ? `The selected nonwear detector (${t}) needs ${i.join(" and ")}, which this file does not provide on the active runtime.` : `The selected nonwear detector (${t}) is not implemented for this file on the active runtime.`;
}
function ie(e) {
	return z[e]?.uiLabel || ("study_selection" === e ? "Study selection (weighted)" : D(e));
}
ee("consensus_cell"), Object.values(S);
const re = s.filter((e) => "nonwear" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds
})), se = new Map(re.map((e) => [e.id, e]));
function ce(e) {
	return se.get(e);
}
function le(e) {
	if (null == e) return !1;
	const n = e.length;
	for (let t = 0; t < n; t++) {
		const n = e[t];
		if (void 0 !== n && Number.isFinite(n)) return !0;
	}
	return !1;
}
const ue = {
	source_not_eligible: "DETACH nonwear was not run: the file's source type has no scientifically eligible DETACH path.",
	no_finite_temperature: "DETACH nonwear was not run: this file carries no finite temperature samples (the temperature column is absent or all-NaN).",
	no_acceleration_g: "DETACH nonwear was not run: this file carries no per-epoch acceleration in g. DETACH's acceleration threshold is 0.013 g and activity counts are not comparable to it, so no mask is produced from counts.",
	computation_failed: "DETACH nonwear failed while running for this day. Choi nonwear is intact."
};
function de(n, t, a) {
	return n?.nonwearAlgorithms.some((n) => "detach_mask" === e[n].storedAs) ? le(t) ? null == a || 0 === a.length ? "no_acceleration_g" : null : "no_finite_temperature" : "source_not_eligible";
}
function fe(e, n, t) {
	return null === de(e, n, t);
}
const me = re.filter((e) => "raw_accel" === e.requiredSignal && !e.needsModel && !e.requiresTemperature).map((e) => e.id), he = {
	[S.choi_2012]: "nonwearResults",
	[S.choi_2011]: "nonwearResultsChoi2011",
	[S.detach_nonwear]: "detachNonwear",
	[S.van_hees_2023]: "vanHeesNonwear"
}, pe = Object.keys(he), ge = re.filter((e) => "counts_axis_y" === e.requiredSignal && !e.needsModel && !e.requiresTemperature && !pe.includes(e.id)).map((e) => e.id);
function be(e, n, t) {
	if (!qe(e, n, t)) return;
	const a = he[n];
	return a ? e[a] : e.unifiedNonwearMasks?.[n];
}
async function ve(e, n, t, o, i = a()) {
	if (!e) return null;
	const r = _e(e, n, t.source);
	if (null !== r) return { unavailable: r };
	const { timestampsSec: s, epochLenSec: c } = o;
	if (Se(e)) return { mask: await _(t.offPeriods.map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	})), s, c, i) };
	const l = n[e], u = new Array(s.length).fill(0), d = Math.min(l.length, u.length);
	for (let a = 0; a < d; a++) u[a] = 1 === l[a] ? 1 : 0;
	return { mask: u };
}
const we = new Set(Object.values(f).flat());
function Se(e) {
	return null != e && we.has(e);
}
function _e(e, n, t) {
	return e ? Se(e) ? t === e ? null : oe(e) : n[e] ? null : "counts_axis_y" === ce(e)?.requiredSignal ? function(e) {
		return `nonwear mask for ${ie(e)} is missing; re-import the file`;
	}(e) : oe(e) : null;
}
async function ye(e, n, t, o, i = a()) {
	const r = [], s = [], c = [];
	for (const a of new Set(e)) {
		const e = await ve(a, n, t, o, i);
		null !== e && ("unavailable" in e ? c.push({
			detector: a,
			reason: e.unavailable
		}) : (r.push(a), s.push(e.mask)));
	}
	if (0 === r.length) return 0 === c.length ? null : { unavailable: c.map((e) => e.reason).join("; ") };
	const l = w(r), u = await i.fuseNonwearMasks(l.map((e) => Uint8Array.from(s[r.indexOf(e)])));
	return {
		weight: u.weight,
		flagged: u.flagged,
		memberFlags: u.memberFlags,
		available: r,
		memberMasks: s,
		dropped: c
	};
}
function Me(e) {
	return null !== e && "weight" in e ? e : null;
}
function Ae(e) {
	return l(e) ? "ggir" : "counts";
}
function Te(e, n = i().scoring()) {
	return "ggir" === e ? n.nonwearDetectorsGgir : n.nonwearDetectorsCounts;
}
const ke = {
	counts: n.nonwear_detectors_counts,
	ggir: n.nonwear_detectors_ggir
};
function xe(e, n) {
	return e.filter((e) => !ke[n].includes(e.detector)).map((e) => `${ie(e.detector)} left out of the nonwear weight: ${e.reason}`);
}
function Ne(e, n) {
	const t = 1 === n ? "detector" : "detectors";
	return `${String(e.length)} of ${String(n)} ${t} (${e.map(ie).join(", ")})`;
}
function $e(e, n) {
	const { contributors: t, ...a } = e;
	return void 0 === t ? a : {
		...a,
		contributing_detectors: t,
		agreement: Ne(t, n)
	};
}
function je() {
	return i().scoring().choiAxis;
}
const Ce = [S.choi_2011, S.choi_2012];
function qe(e, n, t) {
	if (!Ce.includes(n)) return !0;
	const a = e.nonwearChoiAxis;
	return void 0 === a || a === t;
}
function Oe(e, n) {
	const t = {};
	for (const [a, o] of Object.entries(e.unifiedNonwearMasks ?? {})) o && (t[a] = o);
	for (const [a, o] of Object.entries(he)) {
		if (!qe(e, a, n)) continue;
		const i = e[o];
		i && (t[a] = i);
	}
	return t;
}
function Ee(e, n) {
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
function Fe(e, n, t = a()) {
	return e.available && e.nonwear && e.elementSeconds === n.epochLenSec && e.nonwear.length === n.epochTimestampsSec.length ? Promise.resolve(Array.from(e.nonwear)) : _(Ee(e, n.baseTsSec), n.epochTimestampsSec, n.epochLenSec, t);
}
async function ze(e, n, t) {
	const a = {};
	if (0 === e.size || 0 === n.epochTimestampsSec.length) return a;
	const o = {};
	for (const [i, r] of e) {
		if (!r.available) continue;
		const e = await Fe(r, n, t), s = new Uint8Array(e).buffer, c = he[i];
		c ? a[c] = s : o[i] = s;
	}
	return Object.keys(o).length > 0 && (a.unifiedNonwearMasks = o), He(a);
}
async function De(e, n, t = a()) {
	if (0 === e.length || 0 === n.epochTimestampsSec.length) return {};
	let o = Float64Array.from(e);
	const i = Float64Array.from(n.epochTimestampsSec), r = "rounded_mean";
	let s;
	if (n.dstRuns?.length) {
		const a = await t.ggir5sWallClockMs(1e3 * n.baseTsSec, e.length, Array.from(n.dstRuns)), c = Array.from(a.keys()).filter((e) => Number.isFinite(a[e])), l = Float64Array.from(c, (e) => a[e] / 1e3);
		o = Float64Array.from(c, (n) => e[n]), s = await t.foldOntoGrid(l, o, i, n.epochLenSec, r);
	} else s = await t.foldUniformOntoGrid(n.baseTsSec, 5, o, i, n.epochLenSec, r);
	const c = await h(n.ggirConfigCsv, t), l = Uint8Array.from(s, (e) => 1 === e ? 1 : 0).buffer, u = he[c];
	return He(u ? { [u]: l } : { unifiedNonwearMasks: { [c]: l } });
}
function He(...e) {
	const n = {}, t = {};
	for (const a of e) {
		for (const e of Object.values(he)) {
			const t = a[e];
			void 0 === t || null === t && void 0 !== n[e] || (n[e] = t);
		}
		a.unifiedNonwearMasks && Object.assign(t, a.unifiedNonwearMasks);
	}
	return Object.keys(t).length > 0 && (n.unifiedNonwearMasks = t), t[S.van_hees_2013] && void 0 === n.vanHeesNonwear && (n.vanHeesNonwear = null), n;
}
const Ge = {
	path: "ggir",
	selected: [S.ggir_part2_invalid],
	available: [S.ggir_part2_invalid],
	dropped: []
};
function Re(e, n) {
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
S.van_hees_2023, S.van_hees_2023;
export { U as A, be as C, Re as D, Ee as E, V as M, _ as N, ne as O, _e as S, Te as T, He as _, me as a, $e as b, fe as c, xe as d, ye as f, Se as g, le as h, Ge as i, ie as j, I as k, Ne as l, De as m, ge as n, Oe as o, Me as p, ue as r, ze as s, Ce as t, de as u, ce as v, je as w, Fe as x, Ae as y };
