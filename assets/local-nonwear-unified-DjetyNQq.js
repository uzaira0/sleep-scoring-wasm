import { An as e, At as n, Cn as t, Dn as a, Ft as o, Hr as i, J as r, Nt as s, Pr as c, Rn as l, Tn as u, Wn as d, wn as f } from "./background-jobs-BxZgJi0P.js";
import { Dn as m, Jr as h, Kr as p, Nr as g, Rr as b, Xr as v, mn as w, zr as S } from "./db-DycBgaC2.js";
async function _(e, n, t, a) {
	if (0 === e.length || 0 === n.length) return new Array(n.length).fill(0);
	const o = await a.rasterizePeriods(Float64Array.from(e, (e) => e.startTsSec), Float64Array.from(e, (e) => e.endTsSec), Float64Array.from(n), t);
	return Array.from(o.mask);
}
const y = new Map(a.map((e) => [e.id, e]));
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
	...Object.values(d).flatMap((e) => [...e.countMetrics]),
	...a.flatMap((e) => [...e.compatibleCountMetrics])
]), O = Object.values(p).filter((e) => C.has(e)), q = new Set($), F = e.ScoringMethodFamily, z = e.ScoringImplementationVariant, D = t;
function E(e) {
	return e.split("_").map((e) => 0 === e.length ? e : e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
}
function R(e) {
	return F[e] ?? E(e);
}
function H(e) {
	return a.filter((n) => n.family === e);
}
function G(e, n, t) {
	const o = /* @__PURE__ */ new Set(), i = [], r = n ? new Set(n.sleepAlgorithms) : null;
	for (const s of a) {
		if ("sleep_wake" !== s.kind) continue;
		const n = s.family;
		if (null === n || x.has(n)) continue;
		if (o.has(n)) continue;
		o.add(n);
		const a = H(n);
		if (a.length > 0 && a.every((e) => !M(e.conformance))) {
			const e = a.every((e) => "needs_model" === e.conformance) ? "needs_model" : "provisional";
			i.push({
				value: n,
				label: R(n),
				disabled: !0,
				reason: N(e)
			});
			continue;
		}
		if (null !== r && a.every((e) => !r.has(e.id))) {
			i.push({
				value: n,
				label: R(n),
				disabled: !0,
				reason: a.some((e) => t?.has(e.id)) ? k : T
			});
			continue;
		}
		const c = P(n);
		void 0 === e || U(c) === e ? i.push({
			value: n,
			label: R(n)
		}) : i.push({
			value: n,
			label: R(n),
			disabled: !0,
			reason: L(c)
		});
	}
	return i;
}
function P(e) {
	const n = H(e)[0]?.execution;
	return "angle_spt" === n ? "angle" : "neural_model" === n ? "neural" : "vendor_analysis" === n ? "vendor" : "counts";
}
function U(e) {
	return "angle" === e ? h.ggir_5s : h.number_60s_epochs;
}
function L(e) {
	return "angle" === e ? "Requires the GGIR 5 s raw pipeline — switch the extraction path to score this." : "Requires the 60 s counts pipeline — switch the extraction path to score this.";
}
function I(e, n, t) {
	const a = n ? new Set(n.sleepAlgorithms) : null;
	return H(e).map((e) => {
		const n = e.implementation ?? "reference", o = (i = e.implementation ?? "reference", z[i] ?? E(i));
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
	return f[`${e}::${n}`] ?? null;
}
function W(e, n) {
	const t = V(e, n);
	return t ? y.get(t) : void 0;
}
function J(e, n) {
	return W(e, n)?.defaultCountMetric ?? $[0] ?? "neishabouri";
}
function Z(e, n, t) {
	const a = W(e, n), o = new Set(a?.compatibleCountMetrics ?? []), i = t ? new Set(t.countMetrics) : null, r = J(e, n);
	let s;
	s = o.size > 0 ? i ? new Set([...o].filter((e) => i.has(e))) : new Set(o) : i ? new Set(i) : /* @__PURE__ */ new Set();
	const c = new Set([...s].filter((e) => q.has(e))), l = new Set([...s].filter((e) => !q.has(e))), u = null === i || 0 === i.size, d = 0 === c.size && u;
	return O.map((e) => {
		const n = function(e) {
			return "neishabouri" === e ? "Neishabouri (amplitude counts)" : "zero_crossing" === e ? "Zero-crossing (GGIR zc)" : "pim" === e ? "PIM (proportional integrating mode)" : "zcm" === e ? "ZCM (zero-crossing mode)" : "tat" === e ? "TAT (time above threshold)" : E(e);
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
function B(e, n) {
	const t = P(e);
	if ("angle" === t) return u.filter((e) => "raw" === e.lineage).map((e) => ({
		value: String(e.seconds),
		label: `${String(e.seconds)} s`
	}));
	if ("neural" === t || "vendor" === t) {
		const t = W(e, n)?.nativeEpochSeconds ?? 60;
		return [{
			value: String(t),
			label: `${String(t)} s (native)`
		}];
	}
	const a = S(e);
	return u.filter((e) => "counts" === e.lineage).map((n) => {
		const t = {
			value: String(n.seconds),
			label: `${String(n.seconds)} s`
		};
		return j.includes(n.seconds) ? b(a, n.seconds) ? t : {
			...t,
			disabled: !0,
			reason: `${R(e)} is valid only at ${a.join(", ")} s.`
		} : {
			...t,
			disabled: !0,
			reason: "Provisional — no scorer is validated at 15 s (not a cube epoch)."
		};
	});
}
function Q(e, n) {
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
		const e = s(n), t = e.scorer;
		if (void 0 !== t && ("count_hasib" === e.family || "angle_hasib" === e.family)) return te({
			family: t,
			implementation: e.provenance ?? ae(t),
			countMetric: e.countSource ?? "neishabouri",
			axis: "anglez" === e.signalAxis ? "y" : e.signalAxis ?? "y",
			epochSeconds: Number(e.epoch)
		});
		const a = n.slice(Y.length).split("__")[0] ?? "";
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
		const t = G(void 0, n), a = t.some((n) => n.value === e.family && !n.disabled) ? e.family : Q(t, e.family), o = I(a, n), i = o.some((n) => n.value === e.implementation && !n.disabled) ? e.implementation : Q(o, e.implementation);
		if ("counts" !== P(a)) {
			const n = B(a, i), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Q(n, String(e.epochSeconds)));
			return {
				family: a,
				implementation: i,
				countMetric: e.countMetric,
				axis: e.axis,
				epochSeconds: t
			};
		}
		const r = Z(a, i, n), s = r.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : Q(r, J(a, i)), c = K(s), l = c.some((n) => n.value === e.axis && !n.disabled) ? e.axis : Q(c, "y"), u = B(a, i);
		return {
			family: a,
			implementation: i,
			countMetric: s,
			axis: l,
			epochSeconds: u.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Q(u, "60"))
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
		if ("counts" !== P(e.family)) {
			const n = B(e.family, e.implementation), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Q(n, String(e.epochSeconds)));
			return {
				...e,
				epochSeconds: t
			};
		}
		const n = Z(e.family, e.implementation), t = n.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : Q(n, J(e.family, e.implementation)), a = K(t), o = a.some((n) => n.value === e.axis && !n.disabled) ? e.axis : Q(a, "y"), i = B(e.family, e.implementation), r = i.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Q(i, "60"));
		return {
			...e,
			countMetric: t,
			axis: o,
			epochSeconds: r
		};
	}(e);
}
function ae(e) {
	return V(e, "ggir") ? "ggir" : I(e).find((e) => !e.disabled)?.value ?? "reference";
}
function oe(e, n) {
	if (function(e, n) {
		return n?.nonwearAlgorithms.some((n) => n === e) ?? !1;
	}(e, n)) return null;
	const t = ie(e), o = a.find((n) => n.id === e), i = D[e]?.inputDescription, r = i ? [i] : [
		..."raw_accel" === o?.requiredSignal ? ["raw acceleration samples"] : [],
		..."counts_axis_y" === o?.requiredSignal ? ["60 s activity counts"] : [],
		...o?.requiresTemperature ? ["a temperature channel"] : []
	];
	return r.length > 0 ? `The selected nonwear detector (${t}) needs ${r.join(" and ")}, which this file does not provide on the active runtime.` : `The selected nonwear detector (${t}) is not implemented for this file on the active runtime.`;
}
function ie(e) {
	return D[e]?.uiLabel || ("study_selection" === e ? "Study selection (weighted)" : E(e));
}
ee("consensus_cell"), Object.values(v);
const re = a.filter((e) => "nonwear" === e.kind).map((e) => ({
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
	source_not_eligible: "DETACH nonwear was not run: this file's source type has no scientifically eligible DETACH path.",
	no_finite_temperature: "DETACH nonwear was not run: this file carries no finite temperature samples (the temperature column is absent or all-NaN).",
	no_acceleration_g: "DETACH nonwear was not run: this file carries no per-epoch acceleration in g. DETACH's acceleration threshold is 0.013 g and activity counts are not comparable to it, so no mask is produced from counts.",
	computation_failed: "DETACH nonwear failed while running for this day. Choi nonwear is intact."
};
function de(e, n, a) {
	return e?.nonwearAlgorithms.some((e) => "detach_mask" === t[e].storedAs) ? le(n) ? null == a || 0 === a.length ? "no_acceleration_g" : null : "no_finite_temperature" : "source_not_eligible";
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
async function ve(e, n, t, a, o = r()) {
	if (!e) return null;
	const i = _e(e, n, t.source);
	if (null !== i) return { unavailable: i };
	const { timestampsSec: s, epochLenSec: c } = a;
	if (Se(e)) return { mask: await _(t.offPeriods.map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	})), s, c, o) };
	const l = n[e], u = new Array(s.length).fill(0), d = Math.min(l.length, u.length);
	for (let r = 0; r < d; r++) u[r] = 1 === l[r] ? 1 : 0;
	return { mask: u };
}
const we = new Set(Object.values(l).flat());
function Se(e) {
	return null != e && we.has(e);
}
function _e(e, n, t) {
	return e ? Se(e) ? t === e ? null : oe(e) : n[e] ? null : "counts_axis_y" === ce(e)?.requiredSignal ? function(e) {
		return `nonwear mask for ${ie(e)} is missing; re-import the file`;
	}(e) : oe(e) : null;
}
async function ye(e, n, t, a, o = r()) {
	const i = [], s = [], c = [];
	for (const r of new Set(e)) {
		const e = await ve(r, n, t, a, o);
		null !== e && ("unavailable" in e ? c.push({
			detector: r,
			reason: e.unavailable
		}) : (i.push(r), s.push(e.mask)));
	}
	if (0 === i.length) return 0 === c.length ? null : { unavailable: c.map((e) => e.reason).join("; ") };
	const l = w(i), u = await o.fuseNonwearMasks(l.map((e) => Uint8Array.from(s[i.indexOf(e)])));
	return {
		weight: u.weight,
		flagged: u.flagged,
		memberFlags: u.memberFlags,
		available: i,
		memberMasks: s,
		dropped: c
	};
}
function Me(e) {
	return null !== e && "weight" in e ? e : null;
}
function Ae(e) {
	return n(e) ? "ggir" : "counts";
}
function Te(e, n = i().scoring()) {
	return "ggir" === e ? n.nonwearDetectorsGgir : n.nonwearDetectorsCounts;
}
const ke = {
	counts: c.nonwear_detectors_counts,
	ggir: c.nonwear_detectors_ggir
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
	return i().scoring().choiAxis;
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
function Fe(e, n) {
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
function ze(e, n, t = r()) {
	return e.available && e.nonwear && e.elementSeconds === n.epochLenSec && e.nonwear.length === n.epochTimestampsSec.length ? Promise.resolve(Array.from(e.nonwear)) : _(Fe(e, n.baseTsSec), n.epochTimestampsSec, n.epochLenSec, t);
}
async function De(e, n, t) {
	const a = {};
	if (0 === e.size || 0 === n.epochTimestampsSec.length) return a;
	const o = {};
	for (const [i, r] of e) {
		if (!r.available) continue;
		const e = await ze(r, n, t), s = new Uint8Array(e).buffer, c = he[i];
		c ? a[c] = s : o[i] = s;
	}
	return Object.keys(o).length > 0 && (a.unifiedNonwearMasks = o), Re(a);
}
async function Ee(e, n, t = r()) {
	if (0 === e.length || 0 === n.epochTimestampsSec.length) return {};
	let a = Float64Array.from(e);
	const o = Float64Array.from(n.epochTimestampsSec), i = "rounded_mean";
	let s;
	if (n.dstRuns?.length) {
		const r = await t.ggir5sWallClockMs(1e3 * n.baseTsSec, e.length, Array.from(n.dstRuns)), c = Array.from(r.keys()).filter((e) => Number.isFinite(r[e])), l = Float64Array.from(c, (e) => r[e] / 1e3);
		a = Float64Array.from(c, (n) => e[n]), s = await t.foldOntoGrid(l, a, o, n.epochLenSec, i);
	} else s = await t.foldUniformOntoGrid(n.baseTsSec, 5, a, o, n.epochLenSec, i);
	const c = await m(n.ggirConfigCsv, t), l = Uint8Array.from(s, (e) => 1 === e ? 1 : 0).buffer, u = he[c];
	return Re(u ? { [u]: l } : { unifiedNonwearMasks: { [c]: l } });
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
export { P as A, be as C, Ge as D, Fe as E, V as M, _ as N, ne as O, _e as S, Te as T, Re as _, me as a, $e as b, fe as c, Ne as d, ye as f, Se as g, le as h, He as i, ie as j, U as k, xe as l, Ee as m, ge as n, qe as o, Me as p, ue as r, De as s, Ce as t, de as u, ce as v, je as w, ze as x, Ae as y };
