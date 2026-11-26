import { $ as e, $n as n, Gt as t, Ht as a, J as o, Jt as r, Kn as i, Lr as s, Ut as c, Vt as l, Z as u, cn as d, nn as f } from "./background-jobs-BQczZyOK.js";
import { Ar as m, En as h, Fr as p, Gr as g, Ir as b, Ur as v, pn as w, qr as S } from "./db-XyE5Oc5s.js";
async function _(e, n, t, a) {
	if (0 === e.length || 0 === n.length) return new Array(n.length).fill(0);
	const o = await a.rasterizePeriods(Float64Array.from(e, (e) => e.startTsSec), Float64Array.from(e, (e) => e.endTsSec), Float64Array.from(n), t);
	return Array.from(o.mask);
}
const y = new Map(t.map((e) => [e.id, e]));
function M(e) {
	return "conformant" === e;
}
const A = {
	provisional: "Provisional — constants are not yet verified against the reference implementation.",
	needs_model: "Needs a trained model artifact — cannot produce a result."
}, T = "Scientifically eligible, but this implementation is not available on the active runtime.", k = "None of your imported files has the data this method needs.";
function N(e) {
	return A[e] ?? `Not selectable — conformance state "${e}" is not validated.`;
}
const $ = /* @__PURE__ */ new Set([
	"consensus_majority_vote",
	"manual",
	"natural_language",
	"van_hees_hasib_2015"
]), x = Object.keys(m), j = [30, 60], C = /* @__PURE__ */ new Set([
	...x,
	...Object.values(d).flatMap((e) => [...e.countMetrics]),
	...t.flatMap((e) => [...e.compatibleCountMetrics])
]), O = Object.values(v).filter((e) => C.has(e)), q = new Set(x), E = r.ScoringMethodFamily, F = r.ScoringImplementationVariant, z = l;
function D(e) {
	return e.split("_").map((e) => 0 === e.length ? e : e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
}
function H(e) {
	return E[e] ?? D(e);
}
function G(e) {
	return t.filter((n) => n.family === e);
}
function R(e, n, a) {
	const o = /* @__PURE__ */ new Set(), r = [], i = n ? new Set(n.sleepAlgorithms) : null;
	for (const s of t) {
		if ("sleep_wake" !== s.kind) continue;
		const n = s.family;
		if (null === n || $.has(n)) continue;
		if (o.has(n)) continue;
		o.add(n);
		const t = G(n);
		if (t.length > 0 && t.every((e) => !M(e.conformance))) {
			const e = t.every((e) => "needs_model" === e.conformance) ? "needs_model" : "provisional";
			r.push({
				value: n,
				label: H(n),
				disabled: !0,
				reason: N(e)
			});
			continue;
		}
		if (null !== i && t.every((e) => !i.has(e.id))) {
			r.push({
				value: n,
				label: H(n),
				disabled: !0,
				reason: t.some((e) => a?.has(e.id)) ? k : T
			});
			continue;
		}
		const c = U(n);
		void 0 === e || L(c) === e ? r.push({
			value: n,
			label: H(n)
		}) : r.push({
			value: n,
			label: H(n),
			disabled: !0,
			reason: I(c)
		});
	}
	return r;
}
function U(e) {
	const n = G(e)[0]?.execution;
	return "angle_spt" === n ? "angle" : "neural_model" === n ? "neural" : "vendor_analysis" === n ? "vendor" : "counts";
}
function L(e) {
	return "angle" === e ? g.ggir_5s : g.number_60s_epochs;
}
function I(e) {
	return "angle" === e ? "Requires the GGIR 5 s raw pipeline — switch the extraction path to score this." : "Requires the 60 s counts pipeline — switch the extraction path to score this.";
}
function P(e, n, t) {
	const a = n ? new Set(n.sleepAlgorithms) : null;
	return G(e).map((e) => {
		const n = e.implementation ?? "reference", o = (r = e.implementation ?? "reference", F[r] ?? D(r));
		var r;
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
	return a[`${e}::${n}`] ?? null;
}
function Z(e, n) {
	const t = V(e, n);
	return t ? y.get(t) : void 0;
}
function J(e, n) {
	return Z(e, n)?.defaultCountMetric ?? x[0] ?? "neishabouri";
}
function W(e, n, t) {
	const a = Z(e, n), o = new Set(a?.compatibleCountMetrics ?? []), r = t ? new Set(t.countMetrics) : null, i = J(e, n);
	let s;
	s = o.size > 0 ? r ? new Set([...o].filter((e) => r.has(e))) : new Set(o) : r ? new Set(r) : /* @__PURE__ */ new Set();
	const c = new Set([...s].filter((e) => q.has(e))), l = new Set([...s].filter((e) => !q.has(e))), u = null === r || 0 === r.size, d = 0 === c.size && u;
	return O.map((e) => {
		const n = function(e) {
			return "neishabouri" === e ? "Neishabouri (amplitude counts)" : "zero_crossing" === e ? "Zero-crossing (GGIR zc)" : "pim" === e ? "PIM (proportional integrating mode)" : "zcm" === e ? "ZCM (zero-crossing mode)" : "tat" === e ? "TAT (time above threshold)" : D(e);
		}(e);
		return d ? e === i ? {
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
	return (m[e] ?? []).map((e) => ({
		value: e,
		label: B(e)
	}));
}
function B(e) {
	return "vm" === e ? "Vector magnitude" : `Axis ${e.toUpperCase()}`;
}
function Q(e, n) {
	const t = U(e);
	if ("angle" === t) return c.filter((e) => "raw" === e.lineage).map((e) => ({
		value: String(e.seconds),
		label: `${String(e.seconds)} s`
	}));
	if ("neural" === t || "vendor" === t) {
		const t = Z(e, n)?.nativeEpochSeconds ?? 60;
		return [{
			value: String(t),
			label: `${String(t)} s (native)`
		}];
	}
	const a = b(e);
	return c.filter((e) => "counts" === e.lineage).map((n) => {
		const t = {
			value: String(n.seconds),
			label: `${String(n.seconds)} s`
		};
		return j.includes(n.seconds) ? p(a, n.seconds) ? t : {
			...t,
			disabled: !0,
			reason: `${H(e)} is valid only at ${a.join(", ")} s.`
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
const Y = ee("count_cell");
function ee(n) {
	const t = e.find((e) => e.grammarId === n), a = t?.segments[0]?.literalValue;
	if (void 0 === t || void 0 === a) throw new Error(`cell id grammar ${n} has no root segment`);
	return `${a}${t.segmentSeparator}`;
}
function ne(e) {
	const n = e.trim();
	if (n.startsWith(Y)) {
		const e = u(n), t = e.scorer;
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
		const t = R(void 0, n), a = t.some((n) => n.value === e.family && !n.disabled) ? e.family : X(t, e.family), o = P(a, n), r = o.some((n) => n.value === e.implementation && !n.disabled) ? e.implementation : X(o, e.implementation);
		if ("counts" !== U(a)) {
			const n = Q(a, r), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(X(n, String(e.epochSeconds)));
			return {
				family: a,
				implementation: r,
				countMetric: e.countMetric,
				axis: e.axis,
				epochSeconds: t
			};
		}
		const i = W(a, r, n), s = i.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : X(i, J(a, r)), c = K(s), l = c.some((n) => n.value === e.axis && !n.disabled) ? e.axis : X(c, "y"), u = Q(a, r);
		return {
			family: a,
			implementation: r,
			countMetric: s,
			axis: l,
			epochSeconds: u.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(X(u, "60"))
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
			const n = Q(e.family, e.implementation), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(X(n, String(e.epochSeconds)));
			return {
				...e,
				epochSeconds: t
			};
		}
		const n = W(e.family, e.implementation), t = n.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : X(n, J(e.family, e.implementation)), a = K(t), o = a.some((n) => n.value === e.axis && !n.disabled) ? e.axis : X(a, "y"), r = Q(e.family, e.implementation), i = r.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(X(r, "60"));
		return {
			...e,
			countMetric: t,
			axis: o,
			epochSeconds: i
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
	const a = re(e), o = t.find((n) => n.id === e), r = z[e]?.inputDescription, i = r ? [r] : [
		..."raw_accel" === o?.requiredSignal ? ["raw acceleration samples"] : [],
		..."counts_axis_y" === o?.requiredSignal ? ["60 s activity counts"] : [],
		...o?.requiresTemperature ? ["a temperature channel"] : []
	];
	return i.length > 0 ? `The selected nonwear detector (${a}) needs ${i.join(" and ")}, which this file does not provide on the active runtime.` : `The selected nonwear detector (${a}) is not implemented for this file on the active runtime.`;
}
function re(e) {
	return z[e]?.uiLabel || ("study_selection" === e ? "Study selection (weighted)" : D(e));
}
ee("consensus_cell"), Object.values(S);
const ie = t.filter((e) => "nonwear" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds
})), se = new Map(ie.map((e) => [e.id, e]));
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
	return e?.nonwearAlgorithms.some((e) => "detach_mask" === l[e].storedAs) ? le(n) ? null == t || 0 === t.length ? "no_acceleration_g" : null : "no_finite_temperature" : "source_not_eligible";
}
function fe(e, n, t) {
	return null === de(e, n, t);
}
const me = ie.filter((e) => "raw_accel" === e.requiredSignal && !e.needsModel && !e.requiresTemperature).map((e) => e.id), he = {
	[S.choi_2012]: "nonwearResults",
	[S.choi_2011]: "nonwearResultsChoi2011",
	[S.detach_nonwear]: "detachNonwear",
	[S.van_hees_2023]: "vanHeesNonwear"
}, pe = Object.keys(he), ge = ie.filter((e) => "counts_axis_y" === e.requiredSignal && !e.needsModel && !e.requiresTemperature && !pe.includes(e.id)).map((e) => e.id);
function be(e, n, t) {
	if (!Oe(e, n, t)) return;
	const a = he[n];
	return a ? e[a] : e.unifiedNonwearMasks?.[n];
}
async function ve(e, n, t, a, o = s()) {
	if (!e) return null;
	const r = _e(e, n, t.source);
	if (null !== r) return { unavailable: r };
	const { timestampsSec: i, epochLenSec: c } = a;
	if (Se(e)) return { mask: await _(t.offPeriods.map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	})), i, c, o) };
	const l = n[e], u = new Array(i.length).fill(0), d = Math.min(l.length, u.length);
	for (let s = 0; s < d; s++) u[s] = 1 === l[s] ? 1 : 0;
	return { mask: u };
}
const we = new Set(Object.values(f).flat());
function Se(e) {
	return null != e && we.has(e);
}
function _e(e, n, t) {
	return e ? Se(e) ? t === e ? null : oe(e) : n[e] ? null : "counts_axis_y" === ce(e)?.requiredSignal ? function(e) {
		return `nonwear mask for ${re(e)} is missing; re-import the file`;
	}(e) : oe(e) : null;
}
async function ye(e, n, t, a, o = s()) {
	const r = [], i = [], c = [];
	for (const s of new Set(e)) {
		const e = await ve(s, n, t, a, o);
		null !== e && ("unavailable" in e ? c.push({
			detector: s,
			reason: e.unavailable
		}) : (r.push(s), i.push(e.mask)));
	}
	if (0 === r.length) return 0 === c.length ? null : { unavailable: c.map((e) => e.reason).join("; ") };
	const l = w(r), u = await o.fuseNonwearMasks(l.map((e) => Uint8Array.from(i[r.indexOf(e)])));
	return {
		weight: u.weight,
		flagged: u.flagged,
		memberFlags: u.memberFlags,
		available: r,
		memberMasks: i,
		dropped: c
	};
}
function Me(e) {
	return null !== e && "weight" in e ? e : null;
}
function Ae(e) {
	return o(e) ? "ggir" : "counts";
}
function Te(e, t = n().scoring()) {
	return "ggir" === e ? t.nonwearDetectorsGgir : t.nonwearDetectorsCounts;
}
const ke = {
	counts: i.nonwear_detectors_counts,
	ggir: i.nonwear_detectors_ggir
};
function Ne(e, n) {
	return e.filter((e) => !ke[n].includes(e.detector)).map((e) => `${re(e.detector)} left out of the nonwear weight: ${e.reason}`);
}
function $e(e, n) {
	const t = 1 === n ? "detector" : "detectors";
	return `${String(e.length)} of ${String(n)} ${t} (${e.map(re).join(", ")})`;
}
function xe(e, n) {
	const { contributors: t, ...a } = e;
	return void 0 === t ? a : {
		...a,
		contributing_detectors: t,
		agreement: $e(t, n)
	};
}
function je() {
	return n().scoring().choiAxis;
}
const Ce = [S.choi_2011, S.choi_2012];
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
		const r = e[o];
		r && (t[a] = r);
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
function Fe(e, n, t = s()) {
	return e.available && e.nonwear && e.elementSeconds === n.epochLenSec && e.nonwear.length === n.epochTimestampsSec.length ? Promise.resolve(Array.from(e.nonwear)) : _(Ee(e, n.baseTsSec), n.epochTimestampsSec, n.epochLenSec, t);
}
async function ze(e, n, t) {
	const a = {};
	if (0 === e.size || 0 === n.epochTimestampsSec.length) return a;
	const o = {};
	for (const [r, i] of e) {
		if (!i.available) continue;
		const e = await Fe(i, n, t), s = new Uint8Array(e).buffer, c = he[r];
		c ? a[c] = s : o[r] = s;
	}
	return Object.keys(o).length > 0 && (a.unifiedNonwearMasks = o), He(a);
}
async function De(e, n, t = s()) {
	if (0 === e.length || 0 === n.epochTimestampsSec.length) return {};
	let a = Float64Array.from(e);
	const o = Float64Array.from(n.epochTimestampsSec), r = "rounded_mean";
	let i;
	if (n.dstRuns?.length) {
		const s = await t.ggir5sWallClockMs(1e3 * n.baseTsSec, e.length, Array.from(n.dstRuns)), c = Array.from(s.keys()).filter((e) => Number.isFinite(s[e])), l = Float64Array.from(c, (e) => s[e] / 1e3);
		a = Float64Array.from(c, (n) => e[n]), i = await t.foldOntoGrid(l, a, o, n.epochLenSec, r);
	} else i = await t.foldUniformOntoGrid(n.baseTsSec, 5, a, o, n.epochLenSec, r);
	const c = await h(n.ggirConfigCsv, t), l = Uint8Array.from(i, (e) => 1 === e ? 1 : 0).buffer, u = he[c];
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
export { U as A, be as C, Re as D, Ee as E, V as M, _ as N, ne as O, _e as S, Te as T, He as _, me as a, xe as b, fe as c, Ne as d, ye as f, Se as g, le as h, Ge as i, re as j, L as k, $e as l, De as m, ge as n, qe as o, Me as p, ue as r, ze as s, Ce as t, de as u, ce as v, je as w, Fe as x, Ae as y };
