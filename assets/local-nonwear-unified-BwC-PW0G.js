import { I as e, P as n, St as t, j as a, wn as i, wt as o, xt as r } from "./schema-BGRflpdS.js";
import { r as s } from "./workers-B1E_CQH7.js";
import { O as c, j as l, y as u } from "./workspace-db-ZwhOL3AY.js";
import { r as d, tn as f } from "./store-D5LPiRds.js";
import { C as m, D as h, I as p, ft as g, vt as v, yt as b } from "./per-source-defaults-D5O6G9kE.js";
async function w(e, n, t, a) {
	if (0 === e.length || 0 === n.length) return new Array(n.length).fill(0);
	const i = await a.rasterizePeriods(Float64Array.from(e, (e) => e.startTsSec), Float64Array.from(e, (e) => e.endTsSec), Float64Array.from(n), t);
	return Array.from(i.mask);
}
const _ = new Map(o.map((e) => [e.id, e]));
function S(e) {
	return "conformant" === e;
}
const y = {
	provisional: "Provisional — constants are not yet verified against the reference implementation.",
	needs_model: "Needs a trained model artifact — cannot produce a result."
}, A = "Scientifically eligible, but this implementation is not available on the active runtime.", M = "Unavailable for this file: it does not carry the input this method needs.";
function k(e) {
	return y[e] ?? `Not selectable — conformance state "${e}" is not validated.`;
}
const T = /* @__PURE__ */ new Set([
	"consensus_majority_vote",
	"manual",
	"natural_language",
	"van_hees_hasib_2015"
]), C = Object.keys(g), N = [30, 60], x = /* @__PURE__ */ new Set([
	...C,
	...Object.values(h).flatMap((e) => [...e.countMetrics]),
	...o.flatMap((e) => [...e.compatibleCountMetrics])
]), j = Object.values(u).filter((e) => x.has(e)), $ = new Set(C), O = {
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
function G(e) {
	return O[e] ?? H(e);
}
function q(e) {
	return o.filter((n) => n.family === e);
}
function F(e, n, t) {
	const a = /* @__PURE__ */ new Set(), i = [], r = n ? new Set(n.sleepAlgorithms) : null;
	for (const s of o) {
		if ("sleep_wake" !== s.kind) continue;
		const n = s.family;
		if (null === n || T.has(n)) continue;
		if (a.has(n)) continue;
		a.add(n);
		const o = q(n);
		if (o.length > 0 && o.every((e) => !S(e.conformance))) {
			const e = o.every((e) => "needs_model" === e.conformance) ? "needs_model" : "provisional";
			i.push({
				value: n,
				label: G(n),
				disabled: !0,
				reason: k(e)
			});
			continue;
		}
		if (null !== r && o.every((e) => !r.has(e.id))) {
			i.push({
				value: n,
				label: G(n),
				disabled: !0,
				reason: o.some((e) => t?.has(e.id)) ? M : A
			});
			continue;
		}
		const c = R(n);
		void 0 === e || D(c) === e ? i.push({
			value: n,
			label: G(n)
		}) : i.push({
			value: n,
			label: G(n),
			disabled: !0,
			reason: z(c)
		});
	}
	return i;
}
function R(e) {
	const n = q(e)[0]?.execution;
	return "angle_spt" === n ? "angle" : "neural_model" === n ? "neural" : "vendor_analysis" === n ? "vendor" : "counts";
}
function D(e) {
	return "angle" === e ? c.ggir_5s : c.number_60s_epochs;
}
function z(e) {
	return "angle" === e ? "Requires the GGIR 5 s raw pipeline — switch the extraction path to score this." : "Requires the 60 s counts pipeline — switch the extraction path to score this.";
}
function I(e, n, t) {
	const a = n ? new Set(n.sleepAlgorithms) : null;
	return q(e).map((e) => {
		const n = e.implementation ?? "reference", i = (o = e.implementation ?? "reference", E[o] ?? H(o));
		var o;
		return S(e.conformance) ? null === a || a.has(e.id) ? {
			value: n,
			label: i
		} : {
			value: n,
			label: i,
			disabled: !0,
			reason: t?.has(e.id) ? M : A
		} : {
			value: n,
			label: i,
			disabled: !0,
			reason: k(e.conformance)
		};
	});
}
function P(e, n) {
	return r[`${e}::${n}`] ?? null;
}
function U(e, n) {
	const t = P(e, n);
	return t ? _.get(t) : void 0;
}
function L(e, n) {
	return U(e, n)?.defaultCountMetric ?? C[0] ?? "neishabouri";
}
function W(e, n, t) {
	const a = U(e, n), i = new Set(a?.compatibleCountMetrics ?? []), o = t ? new Set(t.countMetrics) : null, r = L(e, n);
	let s;
	s = i.size > 0 ? o ? new Set([...i].filter((e) => o.has(e))) : new Set(i) : o ? new Set(o) : /* @__PURE__ */ new Set();
	const c = new Set([...s].filter((e) => $.has(e))), l = new Set([...s].filter((e) => !$.has(e))), u = null === o || 0 === o.size, d = 0 === c.size && u;
	return j.map((e) => {
		const n = function(e) {
			return "neishabouri" === e ? "Neishabouri (amplitude counts)" : "zero_crossing" === e ? "Zero-crossing (GGIR zc)" : "pim" === e ? "PIM (proportional integrating mode)" : "zcm" === e ? "ZCM (zero-crossing mode)" : "tat" === e ? "TAT (time above threshold)" : H(e);
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
function B(e) {
	return (g[e] ?? []).map((e) => ({
		value: e,
		label: V(e)
	}));
}
function V(e) {
	return "vm" === e ? "Vector magnitude" : `Axis ${e.toUpperCase()}`;
}
function X(e, n) {
	const a = R(e);
	if ("angle" === a) return t.filter((e) => "raw" === e.lineage).map((e) => ({
		value: String(e.seconds),
		label: `${String(e.seconds)} s`
	}));
	if ("neural" === a || "vendor" === a) {
		const t = U(e, n)?.nativeEpochSeconds ?? 60;
		return [{
			value: String(t),
			label: `${String(t)} s (native)`
		}];
	}
	const i = b(e);
	return t.filter((e) => "counts" === e.lineage).map((n) => {
		const t = {
			value: String(n.seconds),
			label: `${String(n.seconds)} s`
		};
		return N.includes(n.seconds) ? v(i, n.seconds) ? t : {
			...t,
			disabled: !0,
			reason: `${G(e)} is valid only at ${i.join(", ")} s.`
		} : {
			...t,
			disabled: !0,
			reason: "Provisional — no scorer is validated at 15 s (not a cube epoch)."
		};
	});
}
function Z(e, n) {
	return e.find((e) => !e.disabled)?.value ?? e[0]?.value ?? n;
}
const K = J("count_cell");
function J(n) {
	const t = e.find((e) => e.grammarId === n), a = t?.segments[0]?.literalValue;
	if (void 0 === t || void 0 === a) throw new Error(`cell id grammar ${n} has no root segment`);
	return `${a}${t.segmentSeparator}`;
}
function Q(e) {
	const t = e.trim();
	if (t.startsWith(K)) {
		const e = n(t), a = e.scorer;
		if (void 0 !== a && ("count_hasib" === e.family || "angle_hasib" === e.family)) return Y({
			family: a,
			implementation: e.provenance ?? ee(a),
			countMetric: e.countSource ?? "neishabouri",
			axis: "anglez" === e.signalAxis ? "y" : e.signalAxis ?? "y",
			epochSeconds: Number(e.epoch)
		});
		const i = t.slice(K.length).split("__")[0] ?? "";
		if (q(i).length > 0) return console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${t}" — keeping family "${i}", defaulting its substrate dials.`), Y({
			family: i,
			implementation: ee(i),
			countMetric: "neishabouri",
			axis: "y",
			epochSeconds: 60
		});
		console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${t}" — falling back to the first selectable family.`);
	}
	const a = _.get(t);
	return a && null !== a.family ? Y({
		family: a.family,
		implementation: a.implementation ?? "reference",
		countMetric: a.defaultCountMetric ?? "neishabouri",
		axis: "y",
		epochSeconds: a.nativeEpochSeconds
	}) : function(e, n) {
		const t = F(void 0, n), a = t.some((n) => n.value === e.family && !n.disabled) ? e.family : Z(t, e.family), i = I(a, n), o = i.some((n) => n.value === e.implementation && !n.disabled) ? e.implementation : Z(i, e.implementation);
		if ("counts" !== R(a)) {
			const n = X(a, o), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Z(n, String(e.epochSeconds)));
			return {
				family: a,
				implementation: o,
				countMetric: e.countMetric,
				axis: e.axis,
				epochSeconds: t
			};
		}
		const r = W(a, o, n), s = r.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : Z(r, L(a, o)), c = B(s), l = c.some((n) => n.value === e.axis && !n.disabled) ? e.axis : Z(c, "y"), u = X(a, o);
		return {
			family: a,
			implementation: o,
			countMetric: s,
			axis: l,
			epochSeconds: u.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Z(u, "60"))
		};
	}({
		family: F().find((e) => !e.disabled)?.value ?? "sadeh_1994",
		implementation: "",
		countMetric: "neishabouri",
		axis: "y",
		epochSeconds: 60
	});
}
function Y(e) {
	return function(e) {
		if ("counts" !== R(e.family)) {
			const n = X(e.family, e.implementation), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Z(n, String(e.epochSeconds)));
			return {
				...e,
				epochSeconds: t
			};
		}
		const n = W(e.family, e.implementation), t = n.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : Z(n, L(e.family, e.implementation)), a = B(t), i = a.some((n) => n.value === e.axis && !n.disabled) ? e.axis : Z(a, "y"), o = X(e.family, e.implementation), r = o.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Z(o, "60"));
		return {
			...e,
			countMetric: t,
			axis: i,
			epochSeconds: r
		};
	}(e);
}
function ee(e) {
	return P(e, "ggir") ? "ggir" : I(e).find((e) => !e.disabled)?.value ?? "reference";
}
function ne(e, n) {
	if (function(e, n) {
		return n?.nonwearAlgorithms.some((n) => n === e) ?? !1;
	}(e, n)) return null;
	const t = te(e), a = o.find((n) => n.id === e), i = e === l.gt3x_capsense ? ["the GT3X CAPSENSE wear-sensor stream"] : [
		..."raw_accel" === a?.requiredSignal ? ["raw acceleration samples"] : [],
		..."counts_axis_y" === a?.requiredSignal ? ["60 s activity counts"] : [],
		...a?.requiresTemperature ? ["a temperature channel"] : []
	];
	return i.length > 0 ? `The selected nonwear detector (${t}) needs ${i.join(" and ")}, which this file does not provide on the active runtime.` : `The selected nonwear detector (${t}) is not implemented for this file on the active runtime.`;
}
function te(e) {
	return {
		[l.choi_2011]: "Choi 2011 (60 min)",
		[l.choi_2012]: "Choi 2012 (90 min)",
		[l.troiano_2008]: "Troiano 2008",
		[l.flat_activity]: "Flat activity",
		[l.gt3x_capsense]: "GT3X CAPSENSE",
		[l.actiware_off_wrist]: "Actiwatch off-wrist",
		[l.detach_nonwear]: "DETACH",
		[l.van_hees_2013]: "van Hees 2013",
		[l.van_hees_2023]: "van Hees 2023",
		[l.ggir_saved]: "GGIR nonwear (as saved by the folder)",
		[l.ggir_part2_invalid]: "GGIR invalid (Part 2)",
		[l.ahmadi_2020]: "Ahmadi 2020",
		[l.skovgaard_2023]: "Skovgaard 2023",
		study_selection: "Study selection (weighted)"
	}[e] ?? H(e);
}
J("consensus_cell"), Object.values(l);
const ae = o.filter((e) => "nonwear" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds
})), ie = new Map(ae.map((e) => [e.id, e]));
function oe(e) {
	return ie.get(e);
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
const se = {
	source_not_eligible: "DETACH nonwear was not run: this file's source type has no scientifically eligible DETACH path.",
	no_finite_temperature: "DETACH nonwear was not run: this file carries no finite temperature samples (the temperature column is absent or all-NaN).",
	no_acceleration_g: "DETACH nonwear was not run: this file carries no per-epoch acceleration in g. DETACH's acceleration threshold is 0.013 g and activity counts are not comparable to it, so no mask is produced from counts.",
	computation_failed: "DETACH nonwear failed while running for this day. Choi nonwear is intact."
};
function ce(e, n, t) {
	return e?.nonwearAlgorithms.some((e) => e === l.detach_nonwear) ? re(n) ? null == t || 0 === t.length ? "no_acceleration_g" : null : "no_finite_temperature" : "source_not_eligible";
}
function le(e, n, t) {
	return null === ce(e, n, t);
}
const ue = ae.filter((e) => "raw_accel" === e.requiredSignal && !e.needsModel && !e.requiresTemperature).map((e) => e.id), de = {
	[l.choi_2012]: "nonwearResults",
	[l.choi_2011]: "nonwearResultsChoi2011",
	[l.detach_nonwear]: "detachNonwear",
	[l.van_hees_2023]: "vanHeesNonwear"
}, fe = Object.keys(de), me = ae.filter((e) => "counts_axis_y" === e.requiredSignal && !e.needsModel && !e.requiresTemperature && !fe.includes(e.id)).map((e) => e.id);
function he(e, n, t) {
	if (!xe(e, n, t)) return;
	const a = de[n];
	return a ? e[a] : e.unifiedNonwearMasks?.[n];
}
async function pe(e, n, t, a, i = s()) {
	if (!e) return null;
	const o = be(e, n, t.source);
	if (null !== o) return { unavailable: o };
	const { timestampsSec: r, epochLenSec: c } = a;
	if (ve(e)) return { mask: await w(t.offPeriods.map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	})), r, c, i) };
	const l = n[e], u = new Array(r.length).fill(0), d = Math.min(l.length, u.length);
	for (let s = 0; s < d; s++) u[s] = 1 === l[s] ? 1 : 0;
	return { mask: u };
}
const ge = new Set(Object.values(m).flat());
function ve(e) {
	return null != e && ge.has(e);
}
function be(e, n, t) {
	return e ? ve(e) ? t === e ? null : ne(e) : n[e] ? null : "counts_axis_y" === oe(e)?.requiredSignal ? function(e) {
		return `nonwear mask for ${te(e)} is missing; re-import the file`;
	}(e) : ne(e) : null;
}
async function we(e, n, t, a, i = s()) {
	const o = [], r = [], c = [];
	for (const s of new Set(e)) {
		const e = await pe(s, n, t, a, i);
		null !== e && ("unavailable" in e ? c.push({
			detector: s,
			reason: e.unavailable
		}) : (o.push(s), r.push(e.mask)));
	}
	if (0 === o.length) return 0 === c.length ? null : { unavailable: c.map((e) => e.reason).join("; ") };
	const l = p(o), u = await i.fuseNonwearMasks(l.map((e) => Uint8Array.from(r[o.indexOf(e)])));
	return {
		weight: u.weight,
		flagged: u.flagged,
		memberFlags: u.memberFlags,
		available: o,
		memberMasks: r,
		dropped: c
	};
}
function _e(e) {
	return null !== e && "weight" in e ? e : null;
}
function Se(e) {
	return a(e) ? "ggir" : "counts";
}
function ye(e, n = d.getState()) {
	return "ggir" === e ? n.nonwearDetectorsGgir : n.nonwearDetectorsCounts;
}
const Ae = {
	counts: i.nonwear_detectors_counts,
	ggir: i.nonwear_detectors_ggir
};
function Me(e, n) {
	return e.filter((e) => !Ae[n].includes(e.detector)).map((e) => `${te(e.detector)} left out of the nonwear weight: ${e.reason}`);
}
function ke(e, n) {
	const t = 1 === n ? "detector" : "detectors";
	return `${String(e.length)} of ${String(n)} ${t} (${e.map(te).join(", ")})`;
}
function Te(e, n) {
	const { contributors: t, ...a } = e;
	return void 0 === t ? a : {
		...a,
		contributing_detectors: t,
		agreement: ke(t, n)
	};
}
function Ce() {
	return d.getState().choiAxis;
}
const Ne = [l.choi_2011, l.choi_2012];
function xe(e, n, t) {
	if (!Ne.includes(n)) return !0;
	const a = e.nonwearChoiAxis;
	return void 0 === a || a === t;
}
function je(e, n) {
	const t = {};
	for (const [a, i] of Object.entries(e.unifiedNonwearMasks ?? {})) i && (t[a] = i);
	for (const [a, i] of Object.entries(de)) {
		if (!xe(e, a, n)) continue;
		const o = e[i];
		o && (t[a] = o);
	}
	return t;
}
function $e(e, n) {
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
function Oe(e, n, t = s()) {
	return e.available && e.nonwear && e.elementSeconds === n.epochLenSec && e.nonwear.length === n.epochTimestampsSec.length ? Promise.resolve(Array.from(e.nonwear)) : w($e(e, n.baseTsSec), n.epochTimestampsSec, n.epochLenSec, t);
}
async function Ee(e, n, t) {
	const a = {};
	if (0 === e.size || 0 === n.epochTimestampsSec.length) return a;
	const i = {};
	for (const [o, r] of e) {
		if (!r.available) continue;
		const e = await Oe(r, n, t), s = new Uint8Array(e).buffer, c = de[o];
		c ? a[c] = s : i[o] = s;
	}
	return Object.keys(i).length > 0 && (a.unifiedNonwearMasks = i), Ge(a);
}
async function He(e, n, t = s()) {
	if (0 === e.length || 0 === n.epochTimestampsSec.length) return {};
	let a = Float64Array.from(e);
	const i = Float64Array.from(n.epochTimestampsSec), o = "rounded_mean";
	let r;
	if (n.dstRuns?.length) {
		const s = await t.ggir5sWallClockMs(1e3 * n.baseTsSec, e.length, Array.from(n.dstRuns)), c = Array.from(s.keys()).filter((e) => Number.isFinite(s[e])), l = Float64Array.from(c, (e) => s[e] / 1e3);
		a = Float64Array.from(c, (n) => e[n]), r = await t.foldOntoGrid(l, a, i, n.epochLenSec, o);
	} else r = await t.foldUniformOntoGrid(n.baseTsSec, 5, a, i, n.epochLenSec, o);
	const c = await f(n.ggirConfigCsv, t), l = Uint8Array.from(r, (e) => 1 === e ? 1 : 0).buffer, u = de[c];
	return Ge(u ? { [u]: l } : { unifiedNonwearMasks: { [c]: l } });
}
function Ge(...e) {
	const n = {}, t = {};
	for (const a of e) {
		for (const e of Object.values(de)) {
			const t = a[e];
			void 0 === t || null === t && void 0 !== n[e] || (n[e] = t);
		}
		a.unifiedNonwearMasks && Object.assign(t, a.unifiedNonwearMasks);
	}
	return Object.keys(t).length > 0 && (n.unifiedNonwearMasks = t), t[l.van_hees_2013] && void 0 === n.vanHeesNonwear && (n.vanHeesNonwear = null), n;
}
const qe = {
	path: "ggir",
	selected: [l.ggir_part2_invalid],
	available: [l.ggir_part2_invalid],
	dropped: []
};
function Fe(e, n) {
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
l.van_hees_2023, l.van_hees_2023;
export { Q as A, Oe as C, ye as D, Ce as E, w as F, R as M, te as N, $e as O, P, Te as S, he as T, re as _, qe as a, oe as b, je as c, ke as d, ce as f, He as g, _e as h, se as i, D as j, Fe as k, Ee as l, we as m, me as n, ae as o, Me as p, de as r, ue as s, Ne as t, le as u, ve as v, be as w, Se as x, Ge as y };
