import { En as e, Fr as n, Gn as t, It as a, On as o, Pt as i, Tn as r, Ur as s, Y as c, jn as l, jt as u, wn as d, zn as f } from "./background-jobs-B9ASwEcR.js";
import { Dn as m, Jr as h, Kr as p, Nr as g, Rr as b, Xr as v, mn as w, zr as S } from "./db-DpHV0KLd.js";
async function _(e, n, t, a) {
	if (0 === e.length || 0 === n.length) return new Array(n.length).fill(0);
	const o = await a.rasterizePeriods(Float64Array.from(e, (e) => e.startTsSec), Float64Array.from(e, (e) => e.endTsSec), Float64Array.from(n), t);
	return Array.from(o.mask);
}
const y = new Map(o.map((e) => [e.id, e]));
function M(e) {
	return "conformant" === e;
}
const A = {
	provisional: "Provisional — constants are not yet verified against the reference implementation.",
	needs_model: "Needs a trained model artifact — cannot produce a result."
}, T = "Scientifically eligible, but this implementation is not available on the active runtime.", k = "Unavailable for this file: it does not carry the input this method needs.";
function N(e) {
	return A[e] ?? `Not selectable — conformance state "${e}" is not validated.`;
}
const x = /* @__PURE__ */ new Set([
	"consensus_majority_vote",
	"manual",
	"natural_language",
	"van_hees_hasib_2015"
]), $ = Object.keys(g), j = [30, 60], C = /* @__PURE__ */ new Set([
	...$,
	...Object.values(t).flatMap((e) => [...e.countMetrics]),
	...o.flatMap((e) => [...e.compatibleCountMetrics])
]), O = Object.values(p).filter((e) => C.has(e)), q = new Set($), z = l.ScoringMethodFamily, E = l.ScoringImplementationVariant, F = d;
function D(e) {
	return e.split("_").map((e) => 0 === e.length ? e : e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
}
function R(e) {
	return z[e] ?? D(e);
}
function H(e) {
	return o.filter((n) => n.family === e);
}
function G(e, n, t) {
	const a = /* @__PURE__ */ new Set(), i = [], r = n ? new Set(n.sleepAlgorithms) : null;
	for (const s of o) {
		if ("sleep_wake" !== s.kind) continue;
		const n = s.family;
		if (null === n || x.has(n)) continue;
		if (a.has(n)) continue;
		a.add(n);
		const o = H(n);
		if (o.length > 0 && o.every((e) => !M(e.conformance))) {
			const e = o.every((e) => "needs_model" === e.conformance) ? "needs_model" : "provisional";
			i.push({
				value: n,
				label: R(n),
				disabled: !0,
				reason: N(e)
			});
			continue;
		}
		if (null !== r && o.every((e) => !r.has(e.id))) {
			i.push({
				value: n,
				label: R(n),
				disabled: !0,
				reason: o.some((e) => t?.has(e.id)) ? k : T
			});
			continue;
		}
		const c = U(n);
		void 0 === e || P(c) === e ? i.push({
			value: n,
			label: R(n)
		}) : i.push({
			value: n,
			label: R(n),
			disabled: !0,
			reason: I(c)
		});
	}
	return i;
}
function U(e) {
	const n = H(e)[0]?.execution;
	return "angle_spt" === n ? "angle" : "neural_model" === n ? "neural" : "vendor_analysis" === n ? "vendor" : "counts";
}
function P(e) {
	return "angle" === e ? h.ggir_5s : h.number_60s_epochs;
}
function I(e) {
	return "angle" === e ? "Requires the GGIR 5 s raw pipeline — switch the extraction path to score this." : "Requires the 60 s counts pipeline — switch the extraction path to score this.";
}
function L(e, n, t) {
	const a = n ? new Set(n.sleepAlgorithms) : null;
	return H(e).map((e) => {
		const n = e.implementation ?? "reference", o = (i = e.implementation ?? "reference", E[i] ?? D(i));
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
			reason: N(e.conformance)
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
function Z(e, n) {
	return W(e, n)?.defaultCountMetric ?? $[0] ?? "neishabouri";
}
function J(e, n, t) {
	const a = W(e, n), o = new Set(a?.compatibleCountMetrics ?? []), i = t ? new Set(t.countMetrics) : null, r = Z(e, n);
	let s;
	s = o.size > 0 ? i ? new Set([...o].filter((e) => i.has(e))) : new Set(o) : i ? new Set(i) : /* @__PURE__ */ new Set();
	const c = new Set([...s].filter((e) => q.has(e))), l = new Set([...s].filter((e) => !q.has(e))), u = null === i || 0 === i.size, d = 0 === c.size && u;
	return O.map((e) => {
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
function K(e) {
	return (g[e] ?? []).map((e) => ({
		value: e,
		label: X(e)
	}));
}
function X(e) {
	return "vm" === e ? "Vector magnitude" : `Axis ${e.toUpperCase()}`;
}
function Y(n, t) {
	const a = U(n);
	if ("angle" === a) return e.filter((e) => "raw" === e.lineage).map((e) => ({
		value: String(e.seconds),
		label: `${String(e.seconds)} s`
	}));
	if ("neural" === a || "vendor" === a) {
		const e = W(n, t)?.nativeEpochSeconds ?? 60;
		return [{
			value: String(e),
			label: `${String(e)} s (native)`
		}];
	}
	const o = S(n);
	return e.filter((e) => "counts" === e.lineage).map((e) => {
		const t = {
			value: String(e.seconds),
			label: `${String(e.seconds)} s`
		};
		return j.includes(e.seconds) ? b(o, e.seconds) ? t : {
			...t,
			disabled: !0,
			reason: `${R(n)} is valid only at ${o.join(", ")} s.`
		} : {
			...t,
			disabled: !0,
			reason: "Provisional — no scorer is validated at 15 s (not a cube epoch)."
		};
	});
}
function B(e, n) {
	return e.find((e) => !e.disabled)?.value ?? e[0]?.value ?? n;
}
const Q = ee("count_cell");
function ee(e) {
	const n = a.find((n) => n.grammarId === e), t = n?.segments[0]?.literalValue;
	if (void 0 === n || void 0 === t) throw new Error(`cell id grammar ${e} has no root segment`);
	return `${t}${n.segmentSeparator}`;
}
function ne(e) {
	const n = e.trim();
	if (n.startsWith(Q)) {
		const e = i(n), t = e.scorer;
		if (void 0 !== t && ("count_hasib" === e.family || "angle_hasib" === e.family)) return te({
			family: t,
			implementation: e.provenance ?? ae(t),
			countMetric: e.countSource ?? "neishabouri",
			axis: "anglez" === e.signalAxis ? "y" : e.signalAxis ?? "y",
			epochSeconds: Number(e.epoch)
		});
		const a = n.slice(Q.length).split("__")[0] ?? "";
		if (H(a).length > 0) return console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${n}" — keeping family "${a}", defaulting its substrate dials.`), te({
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
		const t = G(void 0, n), a = t.some((n) => n.value === e.family && !n.disabled) ? e.family : B(t, e.family), o = L(a, n), i = o.some((n) => n.value === e.implementation && !n.disabled) ? e.implementation : B(o, e.implementation);
		if ("counts" !== U(a)) {
			const n = Y(a, i), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(B(n, String(e.epochSeconds)));
			return {
				family: a,
				implementation: i,
				countMetric: e.countMetric,
				axis: e.axis,
				epochSeconds: t
			};
		}
		const r = J(a, i, n), s = r.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : B(r, Z(a, i)), c = K(s), l = c.some((n) => n.value === e.axis && !n.disabled) ? e.axis : B(c, "y"), u = Y(a, i);
		return {
			family: a,
			implementation: i,
			countMetric: s,
			axis: l,
			epochSeconds: u.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(B(u, "60"))
		};
	}({
		family: G().find((e) => !e.disabled)?.value ?? "sadeh_1994",
		implementation: "",
		countMetric: "neishabouri",
		axis: "y",
		epochSeconds: 60
	});
}
function te(e) {
	return function(e) {
		if ("counts" !== U(e.family)) {
			const n = Y(e.family, e.implementation), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(B(n, String(e.epochSeconds)));
			return {
				...e,
				epochSeconds: t
			};
		}
		const n = J(e.family, e.implementation), t = n.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : B(n, Z(e.family, e.implementation)), a = K(t), o = a.some((n) => n.value === e.axis && !n.disabled) ? e.axis : B(a, "y"), i = Y(e.family, e.implementation), r = i.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(B(i, "60"));
		return {
			...e,
			countMetric: t,
			axis: o,
			epochSeconds: r
		};
	}(e);
}
function ae(e) {
	return V(e, "ggir") ? "ggir" : L(e).find((e) => !e.disabled)?.value ?? "reference";
}
function oe(e, n) {
	if (function(e, n) {
		return n?.nonwearAlgorithms.some((n) => n === e) ?? !1;
	}(e, n)) return null;
	const t = ie(e), a = o.find((n) => n.id === e), i = F[e]?.inputDescription, r = i ? [i] : [
		..."raw_accel" === a?.requiredSignal ? ["raw acceleration samples"] : [],
		..."counts_axis_y" === a?.requiredSignal ? ["60 s activity counts"] : [],
		...a?.requiresTemperature ? ["a temperature channel"] : []
	];
	return r.length > 0 ? `The selected nonwear detector (${t}) needs ${r.join(" and ")}, which this file does not provide on the active runtime.` : `The selected nonwear detector (${t}) is not implemented for this file on the active runtime.`;
}
function ie(e) {
	return F[e]?.uiLabel || ("study_selection" === e ? "Study selection (weighted)" : D(e));
}
ee("consensus_cell"), Object.values(v);
const re = o.filter((e) => "nonwear" === e.kind).map((e) => ({
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
function de(e, n, t) {
	return e?.nonwearAlgorithms.some((e) => "detach_mask" === d[e].storedAs) ? le(n) ? null == t || 0 === t.length ? "no_acceleration_g" : null : "no_finite_temperature" : "source_not_eligible";
}
function fe(e, n, t) {
	return null === de(e, n, t);
}
const me = re.filter((e) => "raw_accel" === e.requiredSignal && !e.needsModel && !e.requiresTemperature).map((e) => e.id), he = {
	[v.choi_2012]: "nonwearResults",
	[v.choi_2011]: "nonwearResultsChoi2011",
	[v.detach_nonwear]: "detachNonwear",
	[v.van_hees_2023]: "vanHeesNonwear"
}, pe = Object.keys(he), ge = re.filter((e) => "counts_axis_y" === e.requiredSignal && !e.needsModel && !e.requiresTemperature && !pe.includes(e.id)).map((e) => e.id);
function be(e, n, t) {
	if (!Oe(e, n, t)) return;
	const a = he[n];
	return a ? e[a] : e.unifiedNonwearMasks?.[n];
}
async function ve(e, n, t, a, o = c()) {
	if (!e) return null;
	const i = _e(e, n, t.source);
	if (null !== i) return { unavailable: i };
	const { timestampsSec: r, epochLenSec: s } = a;
	if (Se(e)) return { mask: await _(t.offPeriods.map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	})), r, s, o) };
	const l = n[e], u = new Array(r.length).fill(0), d = Math.min(l.length, u.length);
	for (let c = 0; c < d; c++) u[c] = 1 === l[c] ? 1 : 0;
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
async function ye(e, n, t, a, o = c()) {
	const i = [], r = [], s = [];
	for (const c of new Set(e)) {
		const e = await ve(c, n, t, a, o);
		null !== e && ("unavailable" in e ? s.push({
			detector: c,
			reason: e.unavailable
		}) : (i.push(c), r.push(e.mask)));
	}
	if (0 === i.length) return 0 === s.length ? null : { unavailable: s.map((e) => e.reason).join("; ") };
	const l = w(i), u = await o.fuseNonwearMasks(l.map((e) => Uint8Array.from(r[i.indexOf(e)])));
	return {
		weight: u.weight,
		flagged: u.flagged,
		memberFlags: u.memberFlags,
		available: i,
		memberMasks: r,
		dropped: s
	};
}
function Me(e) {
	return null !== e && "weight" in e ? e : null;
}
function Ae(e) {
	return u(e) ? "ggir" : "counts";
}
function Te(e, n = s().scoring()) {
	return "ggir" === e ? n.nonwearDetectorsGgir : n.nonwearDetectorsCounts;
}
const ke = {
	counts: n.nonwear_detectors_counts,
	ggir: n.nonwear_detectors_ggir
};
function Ne(e, n) {
	return e.filter((e) => !ke[n].includes(e.detector)).map((e) => `${ie(e.detector)} left out of the nonwear weight: ${e.reason}`);
}
function xe(e, n) {
	const t = 1 === n ? "detector" : "detectors";
	return `${String(e.length)} of ${String(n)} ${t} (${e.map(ie).join(", ")})`;
}
function $e(e, n) {
	const { contributors: t, ...a } = e;
	return void 0 === t ? a : {
		...a,
		contributing_detectors: t,
		agreement: xe(t, n)
	};
}
function je() {
	return s().scoring().choiAxis;
}
const Ce = [v.choi_2011, v.choi_2012];
function Oe(e, n, t) {
	if (!Ce.includes(n)) return !0;
	const a = e.nonwearChoiAxis;
	return void 0 === a || a === t;
}
function qe(e, n) {
	const t = {};
	for (const [a, o] of Object.entries(e.unifiedNonwearMasks ?? {})) o && (t[a] = o);
	for (const [a, o] of Object.entries(he)) {
		if (!Oe(e, a, n)) continue;
		const i = e[o];
		i && (t[a] = i);
	}
	return t;
}
function ze(e, n) {
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
function Ee(e, n, t = c()) {
	return e.available && e.nonwear && e.elementSeconds === n.epochLenSec && e.nonwear.length === n.epochTimestampsSec.length ? Promise.resolve(Array.from(e.nonwear)) : _(ze(e, n.baseTsSec), n.epochTimestampsSec, n.epochLenSec, t);
}
async function Fe(e, n, t) {
	const a = {};
	if (0 === e.size || 0 === n.epochTimestampsSec.length) return a;
	const o = {};
	for (const [i, r] of e) {
		if (!r.available) continue;
		const e = await Ee(r, n, t), s = new Uint8Array(e).buffer, c = he[i];
		c ? a[c] = s : o[i] = s;
	}
	return Object.keys(o).length > 0 && (a.unifiedNonwearMasks = o), Re(a);
}
async function De(e, n, t = c()) {
	if (0 === e.length || 0 === n.epochTimestampsSec.length) return {};
	let a = Float64Array.from(e);
	const o = Float64Array.from(n.epochTimestampsSec), i = "rounded_mean";
	let r;
	if (n.dstRuns?.length) {
		const s = await t.ggir5sWallClockMs(1e3 * n.baseTsSec, e.length, Array.from(n.dstRuns)), c = Array.from(s.keys()).filter((e) => Number.isFinite(s[e])), l = Float64Array.from(c, (e) => s[e] / 1e3);
		a = Float64Array.from(c, (n) => e[n]), r = await t.foldOntoGrid(l, a, o, n.epochLenSec, i);
	} else r = await t.foldUniformOntoGrid(n.baseTsSec, 5, a, o, n.epochLenSec, i);
	const s = await m(n.ggirConfigCsv, t), l = Uint8Array.from(r, (e) => 1 === e ? 1 : 0).buffer, u = he[s];
	return Re(u ? { [u]: l } : { unifiedNonwearMasks: { [s]: l } });
}
function Re(...e) {
	const n = {}, t = {};
	for (const a of e) {
		for (const e of Object.values(he)) {
			const t = a[e];
			void 0 === t || null === t && void 0 !== n[e] || (n[e] = t);
		}
		a.unifiedNonwearMasks && Object.assign(t, a.unifiedNonwearMasks);
	}
	return Object.keys(t).length > 0 && (n.unifiedNonwearMasks = t), t[v.van_hees_2013] && void 0 === n.vanHeesNonwear && (n.vanHeesNonwear = null), n;
}
const He = {
	path: "ggir",
	selected: [v.ggir_part2_invalid],
	available: [v.ggir_part2_invalid],
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
v.van_hees_2023, v.van_hees_2023;
export { U as A, be as C, Ge as D, ze as E, V as M, _ as N, ne as O, _e as S, Te as T, Re as _, me as a, $e as b, fe as c, Ne as d, ye as f, Se as g, le as h, He as i, ie as j, P as k, xe as l, De as m, ge as n, qe as o, Me as p, ue as r, Fe as s, Ce as t, de as u, ce as v, je as w, Ee as x, Ae as y };
