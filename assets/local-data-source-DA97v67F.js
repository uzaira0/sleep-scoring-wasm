import { C as e, Cn as t, Ct as n, E as i, Fn as a, Mn as r, Rt as o, S as l, _ as c, an as u, cn as d, en as p, h as f, in as m, k as h, ln as g, sn as y, wt as w } from "./schema-BHdDgVmx.js";
import { i as _, n as v, r as b, s as k } from "./workers-DmTzGLlL.js";
import { l as S, r as I } from "./legacy-invalid-night-zjKZRSNb.js";
import { A, I as x, K as $, L as N, M as T, R as z, X as M, et as D, q as R, r as E, s as C, t as F } from "./workspace-db-MESLoRZb.js";
import { o as O } from "./content-hash-D4_ZE65l.js";
import { _ as P, d as j, l as B, m as Z, n as q, o as G, t as U } from "./background-jobs-DEvUJdJD.js";
import { a as H, o as J, t as L } from "./raw-pass-pool-C2qtsXn3.js";
import { C as W, P as V, S as K, T as Y, a as X, b as Q, c as ee, d as te, f as ne, g as ie, h as ae, i as se, l as re, m as oe, n as le, p as ce, s as ue, t as de, u as pe, v as fe, w as me, y as he } from "./nonwear-display-slots-B482bvPl.js";
import { a as ge } from "./project-revision-dp76cOtH.js";
import { A as ye, At as we, B as _e, Bt as ve, C as be, D as ke, Dt as Se, E as Ie, F as Ae, Ft as xe, Gt as $e, Ht as Ne, I as Te, It as ze, Jt as Me, K as De, L as Re, Lt as Ee, M as Ce, Mt as Fe, Nt as Oe, Ot as Pe, P as je, Pt as Be, R as Ze, Rt as qe, T as Ge, V as Ue, Wt as He, Xt as Je, _ as Le, _t as We, a as Ve, an as Ke, b as Ye, bt as Xe, d as Qe, dt as et, ft as tt, gt as nt, ht as it, j as at, jt as st, k as rt, kt as ot, nn as lt, nt as ct, on as ut, r as dt, rt as pt, sn as ft, tn as mt, v as ht, w as gt, xt as yt, y as wt, yt as _t, z as vt, zt as bt } from "./store-Ws1lFj33.js";
import { A as kt, B as St, C as It, F as At, I as xt, N as $t, P as Nt, S as Tt, U as zt, W as Mt, _ as Dt, b as Rt, d as Et, k as Ct, w as Ft, x as Ot } from "./night-session-registry-ByzRGVV_.js";
import { A as Pt, E as jt, F as Bt, G as Zt, I as qt, K as Gt, L as Ut, N as Ht, P as Jt, Q as Lt, R as Wt, W as Vt, Z as Kt, c as Yt, ct as Xt, g as Qt, i as en, j as tn, k as nn, l as an, mt as sn, q as rn, yt as on, z as ln } from "./per-source-defaults-sZh2GVm_.js";
import { t as cn } from "./audit-log-Cn9vPjEI.js";
import { r as un } from "./audit-hash-B_VayGEe.js";
import { i as dn, t as pn } from "./wal-D0tMCgoe.js";
import { x as fn } from "./ggir-results-import-DXQWdK-M.js";
import { C as mn, D as hn, E as gn, S as yn, T as wn, b as _n, c as vn, d as bn, h as kn, k as Sn, l as In, m as An, n as xn, p as $n, s as Nn, t as Tn, v as zn, w as Mn, x as Dn } from "./local-nonwear-unified-Czq-0way.js";
import { f as Rn } from "./physical-activity-cutpoint-presets-C2Egk9G9.js";
import { _ as En, f as Cn, g as Fn, p as On } from "./diary-local-import-contract-fQgt3inx.js";
import { n as Pn, s as jn, t as Bn } from "./csv-column-mapping-BSSY09yh.js";
import { A as Zn, D as qn, E as Gn, O as Un, _ as Hn, c as Jn, d as Ln, f as Wn, h as Vn, k as Kn, l as Yn, m as Xn, o as Qn, p as ei, s as ti, u as ni } from "./local-export-worker-BcfT00U8.js";
import "./api-errors-Dk4Kc-Jn.js";
import { i as ii, r as ai } from "./night-session-Da3pLkP9.js";
const si = "Review Data Settings > CSV Settings before opening this file.";
function ri(e) {
	return `Column-mapped CSV mapping could not be applied: ${e.map((e) => e.message).join(" ")} ${si}`;
}
const oi = {
	[d.RULE_1_INCLUDE_ACTIVITY]: "Included mid-sleep wake activity (continuous sleep follows)",
	[d.RULE_2_SMALL_PERIODS]: "Evaluated a small sleep period near onset",
	[d.RULE_3_EXTEND_BEFORE_DIARY]: "Extended onset backward through sleep preceding the diary marker",
	[d.RULE_4_NAP_VARIATION]: "Marked a long continuous block as a nap",
	[d.RULE_5_CHOI_SPIKE]: "Tolerated Choi-only nonwear (activity spike present in period)",
	[d.RULE_6_EQUIDISTANT]: "Chose between multiple candidate boundaries",
	[d.RULE_7_CROSS_DAY_NONWEAR]: "Applied cross-day diary nonwear pattern",
	[d.RULE_8_ONSET_BEFORE_INBED]: "Clamped onset to diary in-bed time (onset reported before in-bed)",
	[d.RULE_9_NAP_REGULARITY]: "Placed nap from this child's cross-day nap regularity (no diary nap logged)",
	[d.RULE_10_REGULARITY_OVERRIDE]: "Re-centered the sleep window on this child's cross-day sleep regularity",
	[d.RULE_11_RELIABILITY_FALLBACK]: "Diary unreliable for this night — anchored to accelerometry instead"
};
function li(e) {
	const t = e.replace(/^rule_\d+_/, "").replace(/_/g, " ").trim();
	return 0 === t.length ? e : t.charAt(0).toUpperCase() + t.slice(1);
}
function ci(e) {
	return ln(e, b);
}
async function ui(e) {
	return ut((await Ae(e))?.extraSettings);
}
async function di(e, t = b()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
async function pi(e, t = Rn, n) {
	const i = await U(n).validWearDays(Float64Array.from(e), t);
	return Array.from(i, (e) => 0 !== e);
}
async function fi(e, t = Rn, n) {
	return U(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
}
Object.fromEntries(Object.values(d).map((e) => [e, oi[e] ?? li(e)]));
const mi = w.filter((e) => "sleep_wake" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds,
	supportedEpochSeconds: e.supportedEpochSeconds
})), hi = new Map(mi.map((e) => [e.id, e]));
function gi(e) {
	return hi.get(e);
}
const yi = [
	"sadeh_1994_original",
	"sadeh_1994_actilife",
	"sadeh_1994_ggir",
	"cole_kripke_1992_original",
	"cole_kripke_1992_actilife",
	"cole_kripke_1992_ggir",
	"oakley_1997",
	"galland_2012",
	"natural_language",
	"lstm_sleep_wake",
	"manual"
];
(function(e) {
	const t = new Set(mi.map((e) => e.id)), n = e.filter((e) => !t.has(e));
	if (n.length > 0) throw new Error(`LEGACY_COVERED_SLEEP_WAKE_IDS contains ids that are not sleep/wake method contracts (LinkML drift?): ${n.join(", ")}`);
})(yi);
const wi = new Set(yi), _i = mi.filter((e) => !(e.needsModel || wi.has(e.id) || "counts_axis_y" !== e.requiredSignal && "consensus_majority_vote" !== e.id)).map((e) => e.id);
for (const $d of _i) if (!N($d)) throw new Error(`unified sleep/wake method ${$d} is not a declared AlgorithmRunKey (core.yaml)`);
function vi(e) {
	return {
		sleepWake: null,
		conformance: "needs_30s_epoch",
		available: !1,
		reason: `${e}: 30 s-native scorer is not run on the 60 s grid (feeding it 60 s counts would miscalibrate it); its native scoring is the exploratory 30 s cube surface.`,
		elementSeconds: 30
	};
}
function bi(e, t) {
	const n = gi(e);
	return 30 !== n?.nativeEpochSeconds || n.supportedEpochSeconds.includes(t) ? { kind: "score60s" } : {
		kind: "gate_needs_30s_epoch",
		response: vi(e)
	};
}
function ki(e) {
	const { counts: t } = e, n = {
		algorithm: e.algorithm,
		signals: {
			counts: t instanceof Float64Array ? t : Float64Array.from(t),
			epochSeconds: e.epochSeconds
		}
	};
	return e.postprocessing && (n.postprocessing = e.postprocessing), e.config && (n.config = e.config), n;
}
function Si(e, t) {
	if (!e.available || !e.sleepWake) return null;
	if (t > 0 && e.sleepWake.length !== t) return null;
	const n = new Uint8Array(e.sleepWake.length);
	for (let i = 0; i < e.sleepWake.length; i++) n[i] = e.sleepWake[i] ? 1 : 0;
	return n;
}
function Ii(e, t) {
	const n = {};
	for (const [i, a] of e) {
		const e = Si(a, t);
		e && (n[i] = e);
	}
	return n;
}
const Ai = [
	["axis_x", "axisX"],
	["axis_y", "axisY"],
	["axis_z", "axisZ"],
	["vector_magnitude", "vectorMagnitude"],
	["choi_axis", "choiAxis"]
];
async function xi(e, t, n) {
	const a = Ai.filter(([, e]) => (t[e]?.length ?? 0) > 0), { series: s } = await e.aggregateEpochSeries({
		target_seconds: i,
		series: {
			timestamps_ms: Array.from(t.timestamps, (e) => 1e3 * e),
			epoch_seconds: n,
			channels: a.map(([e, n]) => ({
				name: e,
				counts: Array.from(t[n])
			})),
			light: [],
			light_channels: [],
			temperature: [],
			off_wear: [],
			device: "browser",
			primary: "vector_magnitude"
		}
	}), r = (e) => Float64Array.from(s.channels.find((t) => t.name === e)?.counts ?? []), o = {
		timestamps: Float64Array.from(s.timestamps_ms, (e) => e / 1e3),
		axisY: r("axis_y"),
		vectorMagnitude: r("vector_magnitude")
	};
	for (const [i, l] of a) "axisY" !== l && "vectorMagnitude" !== l && (o[l] = r(i));
	return o;
}
async function $i(e, t, n, i) {
	const a = n.flatMap((e) => t[e] ? [[e, t[e]]] : []), s = await Promise.all(a.map(([, t]) => xi(e, t, i)));
	return Object.fromEntries(a.map(([e], t) => [e, s[t]]));
}
async function Ni(e, t, n, a) {
	return 0 === t.length ? new Uint8Array(a.length) : e.projectLabelsOntoGrid(t, n, i, a);
}
async function Ti(e, t, n) {
	return Array.from(await e.roundCountStorage(Float64Array.from(t), n));
}
async function zi(e, t) {
	const { dates: n, day: i } = await e.utcDayIndex(Float64Array.from(t)), a = new Map(n.map((e) => [e, []]));
	return i.forEach((e, t) => {
		const i = n[e];
		void 0 !== i && a.get(i)?.push(t);
	}), a;
}
function Mi(e, t, n) {
	return t.map((t) => e[t] ?? n);
}
function Di(e) {
	const t = new Float64Array(e.reduce((e, t) => e + t.length, 0));
	let n = 0;
	for (const i of e) t.set(i, n), n += i.length;
	return t;
}
function Ri(e, t, n) {
	return Float64Array.from(t, (t) => e[t] ?? n);
}
async function Ei(e, t, n, i) {
	return Float64Array.from(await e.uniformTimestamps(t, 1e3 * n, i), (e) => e / 1e3);
}
async function Ci(e, t, n, i) {
	if (!Number.isFinite(t) || 0 === n.length || !Number.isFinite(i) || i <= 0) return /* @__PURE__ */ new Map();
	const a = await zi(e, await Ei(e, t, i, n.length));
	return new Map(Array.from(a, ([e, t]) => [e, Uint8Array.from(Mi(n, t, 0))]));
}
async function Fi(e, t, n, i, a = {}) {
	const s = /* @__PURE__ */ new Map();
	if (0 === t.length) return s;
	if (n.length !== t.length || i.length !== t.length) return console.warn("[local-processing] The 5 s GGIR timestamp grid does not match its ENMO/anglez series; skipping the GGIR day split rather than fabricating zeros."), s;
	const r = void 0 !== a.sib && a.sib.length === t.length, o = void 0 !== a.anglex && a.anglex.length === t.length, l = void 0 !== a.angley && a.angley.length === t.length, c = void 0 !== a.nonwear && a.nonwear.length === t.length, u = void 0 !== a.invalid && a.invalid.length === t.length, d = void 0 !== a.mimsUnit && a.mimsUnit.length === t.length, p = void 0 !== a.mimsUnitX && a.mimsUnitX.length === t.length, f = void 0 !== a.mimsUnitY && a.mimsUnitY.length === t.length, m = void 0 !== a.mimsUnitZ && a.mimsUnitZ.length === t.length, h = (e, t) => t.map((t) => (e[t] ?? 0) > 0 ? 1 : 0), g = Float64Array.from(t, (e) => e / 1e3);
	for (const [y, w] of await zi(e, g)) s.set(y, {
		timestamps: Mi(g, w, 0),
		enmo: Mi(n, w, 0),
		anglez: Mi(i, w, 0),
		...o ? { anglex: Mi(a.anglex, w, 0) } : {},
		...l ? { angley: Mi(a.angley, w, 0) } : {},
		...r ? { sib: Mi(a.sib, w, 0) } : {},
		...c ? { nonwear: h(a.nonwear, w) } : {},
		...u ? { invalid: h(a.invalid, w) } : {},
		...d ? { mimsUnit: Mi(a.mimsUnit, w, NaN) } : {},
		...p ? { mimsUnitX: Mi(a.mimsUnitX, w, NaN) } : {},
		...f ? { mimsUnitY: Mi(a.mimsUnitY, w, NaN) } : {},
		...m ? { mimsUnitZ: Mi(a.mimsUnitZ, w, NaN) } : {}
	});
	return s;
}
async function Oi(e, t, n, i, a, s) {
	const r = /* @__PURE__ */ new Map();
	if (0 === t.length || !Number.isFinite(n)) return r;
	for (const [o, l] of Object.entries(i)) r.set(o, await e.foldUniformOntoGrid(n / 1e3, 30, t, Float64Array.from(l.timestamps), a, s));
	return r;
}
async function Pi(e, t, n, i, a) {
	const s = await Oi(e, Float64Array.from(t), n, i, a, "majority_ties_sleep");
	return new Map(Array.from(s, ([e, t]) => [e, Uint8Array.from(t)]));
}
async function ji(e, t, n, i, a) {
	const s = await Oi(e, Float64Array.from(t), n, i, a, "mean");
	return new Map(Array.from(s, ([e, t]) => [e, Float32Array.from(t)]));
}
async function Bi(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	if (!t || 0 === t.length || null === n || !Number.isFinite(n)) return i;
	const a = await Ei(e, n, 30, t.length);
	for (const [s, r] of await zi(e, a)) i.set(s, {
		timestamps: Mi(a, r, 0),
		scores: r.map((e) => t[e] ? 1 : 0)
	});
	return i;
}
async function Zi(e, t, n, i, a) {
	const s = await e.foldOntoGrid(Float64Array.from(t), Float64Array.from(n), Float64Array.from(i), 1e3 * a, "finite_mean");
	return Array.from(s);
}
async function qi(e, t, n, i, a, s, r, o, l, c, u, d) {
	return async function(e, t, n, i, a, s, r, o, l, c, u, d) {
		const p = {}, f = null != a, m = null != s && s.length > 0, h = null != r && r.length > 0, g = null != o && o.length > 0, y = null != l?.unit && l.unit.length === t.length, w = null != l?.unitX && l.unitX.length === t.length, _ = null != l?.unitY && l.unitY.length === t.length, v = null != l?.unitZ && l.unitZ.length === t.length, b = null != u && u.length === t.length, k = null != c && c.length === t.length, S = null != d && d.length === t.length;
		for (const [I, A] of await zi(e, t)) p[I] = {
			timestamps: Ri(t, A, 0),
			axisY: Ri(n, A, 0),
			vectorMagnitude: Ri(i, A, 0),
			...h ? { axisX: Ri(r, A, 0) } : {},
			...g ? { axisZ: Ri(o, A, 0) } : {},
			...f ? { choiAxis: Ri(a, A, 0) } : {},
			...m ? { temperature: Ri(s, A, NaN) } : {},
			...y ? { mimsUnit: Ri(l?.unit ?? [], A, NaN) } : {},
			...w ? { mimsUnitX: Ri(l?.unitX ?? [], A, NaN) } : {},
			..._ ? { mimsUnitY: Ri(l?.unitY ?? [], A, NaN) } : {},
			...v ? { mimsUnitZ: Ri(l?.unitZ ?? [], A, NaN) } : {},
			...b ? { zeroCrossingX: Ri(u, A, NaN) } : {},
			...k ? { zeroCrossingY: Ri(c, A, NaN) } : {},
			...S ? { zeroCrossingZ: Ri(d, A, NaN) } : {}
		};
		return p;
	}(e, t, await Ti(e, n, 0), await Ti(e, i, 2), void 0 !== r ? await Ti(e, r, 0) : void 0, o, await Ti(e, a, 0), await Ti(e, s, 0), l, c, u, d);
}
function Gi(e, t) {
	return 30 !== t && (jt(e)?.hasRawAccel ?? !1);
}
async function Ui(e) {
	if (e.timestampsMs) {
		const t = 1e3 / e.sampleRate, n = e.timestampsMs[0] !== e.firstTsMs, i = e.timestampsMs.some((n, i) => Math.abs(n - e.firstTsMs - i * t) > .5 * t);
		if (n || i) return console.warn("[local-processing] Native 30-second counts were skipped because raw preparation changed the sample timeline."), null;
	}
	const t = e.cancelOperation ?? (() => {
		_(e.wasmApi);
	}), n = await G(e.wasmApi, (t) => t.neishabouriCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: B,
		label: `neishabouriCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}), i = await G(e.wasmApi, (t) => t.zeroCrossingCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: B,
		label: `zeroCrossingCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}).catch((t) => (Z(t, e.signal, `zeroCrossingCounts 30s (${e.label})`), console.warn("[local-processing] The optional 30-second zero-crossing pass failed."), null));
	return {
		timestampsSec: await Ei(e.wasmApi, e.firstTsMs, 30, n.y.length),
		neishabouri: n,
		zeroCrossing: i
	};
}
async function Hi(e, t, n) {
	const i = n.zeroCrossing, a = await qi(e, n.timestampsSec, n.neishabouri.y, n.neishabouri.vm, n.neishabouri.x, n.neishabouri.z, void 0, void 0, void 0, i ? await Ti(e, i.zcy, 0) : void 0, i ? await Ti(e, i.zcx, 0) : void 0, i ? await Ti(e, i.zcz, 0) : void 0);
	for (const [s, r] of Object.entries(a)) {
		const e = t[s];
		e && (e.counts30s = {
			timestamps: r.timestamps,
			axisY: r.axisY,
			vectorMagnitude: r.vectorMagnitude,
			...r.axisX ? { axisX: r.axisX } : {},
			...r.axisZ ? { axisZ: r.axisZ } : {},
			...r.zeroCrossingX ? { zeroCrossingX: r.zeroCrossingX } : {},
			...r.zeroCrossingY ? { zeroCrossingY: r.zeroCrossingY } : {},
			...r.zeroCrossingZ ? { zeroCrossingZ: r.zeroCrossingZ } : {}
		});
	}
}
const Ji = "Recording crossed a timezone boundary (a 1 h jump in the device clock). Recording times are kept as the device's wall-clock time; no timezone or daylight-saving shift is applied, so local-time metrics around the jump may be off.";
async function Li(e, t) {
	return await e.detectHourClockJumpMs(Float64Array.from(t)) ? Ji : null;
}
async function Wi(e, t, n = 60) {
	(await e.irregularInternalDays(Float64Array.from(t), n)).forEach(() => {
		console.warn("[local-processing] A possible DST transition or partial internal day was detected; review the in-app import warning.");
	});
}
async function Vi(e, t, n) {
	const a = [...e], s = n && n.storedEpochSeconds < i ? n : void 0, r = s ? await Promise.all(a.map(([, e]) => async function(e, t, n) {
		const { series: a } = await e.aggregateEpochSeries({
			target_seconds: i,
			series: {
				timestamps_ms: Array.from(t, (e) => 1e3 * e),
				epoch_seconds: n,
				channels: [],
				light: [],
				light_channels: [],
				temperature: [],
				off_wear: [],
				device: "browser",
				primary: "vector_magnitude"
			}
		});
		return Float64Array.from(a.timestamps_ms, (e) => e / 1e3);
	}(s.core, e.timestamps, s.storedEpochSeconds))) : a.map(([, e]) => e.timestamps), o = [];
	let l = Number.POSITIVE_INFINITY, c = Number.NEGATIVE_INFINITY;
	for (const [i, [u]] of a.entries()) {
		const e = r[i];
		s && 0 === e.length || (o.push(u), 0 !== e.length && (l = Math.min(l, e[0] ?? l), c = Math.max(c, e[e.length - 1] ?? c)));
	}
	return o.sort(), Number.isFinite(l) && Number.isFinite(c) ? Fn(o, l, c, void 0, t) : o;
}
function Ki(e, t) {
	if (0 === e.length) return [];
	const n = [0];
	for (let i = 1; i < e.length; i++) Math.abs(e[i] - e[i - 1] - t) > .001 && n.push(i);
	return n.map((t, i) => ({
		start: t,
		end: n[i + 1] ?? e.length
	}));
}
async function Yi(e, t, n, i = Nn, a = () => {
	_(e);
}) {
	const s = /* @__PURE__ */ new Map(), r = Math.min(t.x.length, t.y.length, t.z.length);
	if (0 === r || t.sampleRate <= 0) return s;
	const o = i.filter((e) => !_n(e)?.needsModel);
	if (0 === o.length) return s;
	const l = new Float64Array(3 * r);
	for (let u = 0; u < r; u++) l[3 * u] = t.x[u], l[3 * u + 1] = t.y[u], l[3 * u + 2] = t.z[u];
	j(n, `before detectNonwearUnifiedBatch(${o.join(",")})`);
	const c = await G(e, (e) => e.detectNonwearUnifiedBatch(o, {
		raw: l,
		sampleRate: t.sampleRate,
		epochSeconds: t.epochSeconds
	}), {
		ms: B,
		label: `detectNonwearUnifiedBatch(${o.join(",")})`,
		signal: n,
		cancel: a
	}).catch((e) => (Z(e, n, `detectNonwearUnifiedBatch(${o.join(",")})`), console.warn("[local-processing] A raw-signal nonwear batch failed."), null));
	if (c) for (const [u, d] of Object.entries(c)) s.set(u, d);
	return s;
}
async function Xi(e, t, n, i, a, s = xn, r = () => {
	_(e);
}) {
	const o = {}, l = s.filter((e) => !_n(e)?.needsModel);
	if (0 === l.length) return o;
	const c = n.map((e) => t[e]).filter((e) => void 0 !== e), u = Di(c.map((e) => e.timestamps)), d = Di(c.map((e) => e.axisY)), p = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
	for (const { start: h, end: g } of Ki(u, i)) {
		const t = d.slice(h, g);
		if (0 === t.length) continue;
		j(a, "before count nonwear continuous run");
		const n = await G(e, (e) => e.detectNonwearUnifiedBatch(l, {
			counts: t,
			epochSeconds: i
		}), {
			ms: B,
			label: "count nonwear continuous run",
			signal: a,
			cancel: r
		}).catch((e) => (Z(e, a, "count nonwear continuous run"), console.warn("[local-processing] A count-based nonwear batch failed for one contiguous run."), null));
		for (const [a, s] of Object.entries(n ?? {})) {
			if (!s.available || !s.nonwear?.length) {
				p.has(a) || p.set(a, s);
				continue;
			}
			const t = await mn(s, {
				baseTsSec: u[h],
				epochTimestampsSec: u.slice(h, g),
				epochLenSec: i
			}, e), n = p.get(a)?.nonwear ?? new Uint8Array(u.length);
			n.set(t, h), p.set(a, {
				...s,
				nonwear: n,
				elementSeconds: i
			}), f.set(a, (f.get(a) ?? 0) + t.length);
		}
	}
	let m = 0;
	for (const h of n) {
		const e = t[h]?.timestamps.length ?? 0;
		0 !== e && (o[h] = new Map([...p].map(([t, n]) => {
			const i = f.get(t) === u.length;
			return [t, {
				...n,
				available: i,
				nonwear: i ? n.nonwear.slice(m, m + e) : null
			}];
		})), m += e);
	}
	return o;
}
function Qi(e) {
	return null == e ? {} : { [p.OAKLEY_1997]: { oakleyThreshold: e } };
}
async function ea(e, t, n, i, a, s, r, o = () => {
	_(e);
}, l = {}, c = _i) {
	if (0 === c.length) return;
	const u = i.flatMap((e) => n[e] ?? []), d = Di(u.map((e) => e.timestamps)), p = Di(u.map((e) => e.axisY)), f = {}, m = /* @__PURE__ */ new Map();
	for (const { start: y, end: w } of Ki(d, a)) {
		const t = p.slice(y, w);
		if (!t || 0 === t.length) continue;
		const n = /* @__PURE__ */ new Map();
		for (const u of c) {
			const i = bi(u, a);
			if ("gate_needs_30s_epoch" === i.kind) {
				n.set(u, i.response);
				continue;
			}
			j(s, `before scoreEpochs(${u} continuous)`);
			const c = await G(e, (e) => e.scoreEpochs(ki({
				algorithm: u,
				counts: t,
				epochSeconds: a,
				...r ? { postprocessing: r } : {},
				...l[u] ? { config: l[u] } : {}
			})), {
				ms: B,
				label: `scoreEpochs(${u} continuous)`,
				signal: s,
				cancel: o
			}).catch((e) => (Z(e, s, `scoreEpochs(${u} continuous)`), console.warn("[local-processing] A descriptor-driven sleep/wake scorer failed for one contiguous run."), null));
			c && n.set(u, c);
		}
		const i = Ii(n, t.length);
		for (const [e, a] of Object.entries(i)) {
			const t = f[e] ?? new Uint8Array(d.length);
			t.set(a, y), f[e] = t, m.set(e, (m.get(e) ?? 0) + a.length);
		}
	}
	const h = Object.entries(f).filter(([e]) => m.get(e) === d.length);
	let g = 0;
	for (const y of i) {
		const e = n[y], i = t[y];
		if (!e) continue;
		const a = g + e.timestamps.length;
		i && (i.unifiedSleepWake = Object.fromEntries(h.map(([e, t]) => [e, t.slice(g, a)]))), g = a;
	}
}
function ta(e, t) {
	return {
		vector_magnitude: e.vectorMagnitude,
		axis_y: e.axisY,
		axis_x: e.axisX,
		axis_z: e.axisZ
	}[t];
}
async function na(e, t, n, i, a, s, r) {
	if (!e || !t || 0 === e.timestamps.byteLength) return;
	if ("counts_axis_y" !== _n(t)?.requiredSignal) return;
	if (wn(e, t, n)) return;
	const o = new Float64Array(e.timestamps), l = a ?? U(s), c = We(e) ?? await it(o, 60, l), u = on(sn(t) ?? [], c), d = u !== c, p = async (e, t) => {
		const n = {
			timestamps: new Float64Array(e.timestamps),
			axisY: new Float64Array(t),
			vectorMagnitude: new Float64Array(t)
		};
		return d ? xi(l, n, c) : n;
	}, f = (e, t) => d ? Ni(l, e, t, o) : t;
	let m;
	try {
		const a = [...(await wt(e.fileId, i, r)).values()];
		if (Tn.includes(t)) {
			const t = a.filter((e) => e.timestamps.byteLength > 0 && ta(e, n)).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), i = t.findIndex((t) => t.date === e.date);
			if (i < 0) return;
			const r = [];
			for (const e of t) r.push(await p(e, ta(e, n)));
			let o = i, c = i;
			const h = (e, t) => e.length > 0 && t.length > 0 && Math.abs(t[0] - e[e.length - 1] - u) < .001;
			for (; o > 0 && h(r[o - 1].timestamps, r[o].timestamps);) o--;
			for (; c + 1 < r.length && h(r[c].timestamps, r[c + 1].timestamps);) c++;
			const g = r.slice(o, c + 1), y = g.slice(0, i - o).reduce((e, t) => e + t.timestamps.length, 0), w = r[i], _ = new Float64Array(g.reduce((e, t) => e + t.axisY.length, 0));
			let v = 0;
			for (const e of g) _.set(e.axisY, v), v += e.axisY.length;
			s?.throwIfAborted();
			const b = _.length > 0 ? await l.detectNonwear(_, u) : /* @__PURE__ */ new Uint8Array(0);
			s?.throwIfAborted();
			const k = _.length > 0 ? await l.detectNonwearChoi2011(_, u) : /* @__PURE__ */ new Uint8Array(0), S = (e) => f(w.timestamps, e.slice(y, y + w.timestamps.length));
			if (!d && 0 === _.byteLength) return;
			m = {
				nonwearResults: (await S(b)).buffer,
				nonwearResultsChoi2011: (await S(k)).buffer,
				nonwearChoiAxis: n
			};
		} else {
			s?.throwIfAborted();
			const n = a.filter((e) => e.timestamps.byteLength > 0 && e.axisY.byteLength > 0).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), i = {};
			for (const e of n) i[e.date] = await p(e, e.axisY);
			const r = (await Xi(l, i, n.map((e) => e.date), u, s, [t]))[e.date]?.get(t);
			if (!r?.available || !r.nonwear) return;
			const d = await In(/* @__PURE__ */ new Map([[t, {
				...r,
				nonwear: await f(i[e.date].timestamps, r.nonwear),
				elementSeconds: c
			}]]), {
				baseTsSec: o[0] ?? 0,
				epochTimestampsSec: Array.from(o),
				epochLenSec: c
			}, l);
			if (!d.unifiedNonwearMasks?.[t]) return;
			m = {
				...d,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					...d.unifiedNonwearMasks
				}
			};
		}
	} catch {
		s?.throwIfAborted(), console.warn("[local-processing] A missing nonwear mask could not be computed from stored counts.");
		return;
	}
	s?.throwIfAborted(), await De(e.fileId, e.date, m, i, s), s?.throwIfAborted(), Object.assign(e, m);
}
async function ia(e, t, n, i, a, s = () => {
	_(e);
}) {
	const r = Di(n.map((e) => t[e].timestamps)), o = Di(n.map((e) => t[e].axisY)), l = Di(n.map((e) => t[e].choiAxis ?? t[e].vectorMagnitude)), c = Ki(r, i), u = await G(e, (e) => e.scoreAllDays(c.map(({ start: e, end: t }) => ({
		activityF64: o.slice(e, t),
		vmF64: l.slice(e, t),
		epochSeconds: i
	}))), {
		ms: B,
		label: "scoreAllDays continuous counts",
		signal: a,
		cancel: s
	}), d = {
		sadeh_actilife: new Uint8Array(o.length),
		sadeh_original: new Uint8Array(o.length),
		ck_actilife: new Uint8Array(o.length),
		ck_original: new Uint8Array(o.length),
		nonwear: new Uint8Array(o.length),
		nonwearChoi2011: new Uint8Array(o.length)
	}, p = /* @__PURE__ */ new Set();
	for (const [m, h] of c.entries()) {
		const t = u[m];
		if (!t) throw new Error("Continuous count scoring did not return every run.");
		for (const e of [
			"sadeh_actilife",
			"sadeh_original",
			"ck_actilife",
			"ck_original",
			"nonwear"
		]) if (0 === t[e].length) p.add(e);
		else {
			if (t[e].length !== h.end - h.start) throw new Error("Continuous count scoring returned a misaligned mask.");
			d[e].set(t[e], h.start);
		}
		const n = await G(e, (e) => e.detectNonwearChoi2011(l.slice(h.start, h.end), i), {
			ms: B,
			label: "detectNonwearChoi2011 continuous counts",
			signal: a,
			cancel: s
		});
		d.nonwearChoi2011.set(n, h.start);
	}
	let f = 0;
	return n.map((e) => {
		const n = f + t[e].timestamps.length, i = {
			sadeh_actilife: p.has("sadeh_actilife") ? /* @__PURE__ */ new Uint8Array() : d.sadeh_actilife.slice(f, n),
			sadeh_original: p.has("sadeh_original") ? /* @__PURE__ */ new Uint8Array() : d.sadeh_original.slice(f, n),
			ck_actilife: p.has("ck_actilife") ? /* @__PURE__ */ new Uint8Array() : d.ck_actilife.slice(f, n),
			ck_original: p.has("ck_original") ? /* @__PURE__ */ new Uint8Array() : d.ck_original.slice(f, n),
			nonwear: d.nonwear.slice(f, n),
			nonwearChoi2011: d.nonwearChoi2011.slice(f, n)
		};
		return f = n, i;
	});
}
function aa(e, t) {
	return "number" == typeof e && "number" == typeof t && e !== t;
}
M();
let sa = 0;
const ra = /* @__PURE__ */ new Set();
function oa(e, t, n) {
	if (n) {
		const e = Gt(n);
		if (!Vt(e)) return Zt(e);
	}
	return t ?? y.SMART;
}
function la(e, t) {
	e.invalidateQueries({ queryKey: t }).catch((e) => {
		lt("warn", "Query invalidation failed", {
			...mt(e),
			query_key: t.map(String).join(":")
		});
	});
}
async function ca(e, t, n) {
	const i = n ? await n.wearSiteHasptRouting(e, t ?? void 0) : await ft("wearSiteHasptRouting", `${e}:${t ?? ""}`, () => b().wearSiteHasptRouting(e, t ?? void 0));
	return {
		sensorLocation: i.sensorLocation,
		variant: i.variant,
		requiresLongitudinalAxis: i.requiresLongitudinalAxis,
		routedByWearSite: null == t
	};
}
var ua;
function da(e, t, n) {
	function i(n, i) {
		if (n._zod || Object.defineProperty(n, "_zod", {
			value: {
				def: i,
				constr: r,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: !1
		}), n._zod.traits.has(e)) return;
		n._zod.traits.add(e), t(n, i);
		const a = r.prototype, s = Object.keys(a);
		for (let e = 0; e < s.length; e++) {
			const t = s[e];
			t in n || (n[t] = a[t].bind(n));
		}
	}
	const a = n?.Parent ?? Object;
	class s extends a {}
	function r(e) {
		var t;
		const a = n?.Parent ? new s() : this;
		i(a, e), (t = a._zod).deferred ?? (t.deferred = []);
		for (const n of a._zod.deferred) n();
		return a;
	}
	return Object.defineProperty(s, "name", { value: e }), Object.defineProperty(r, "init", { value: i }), Object.defineProperty(r, Symbol.hasInstance, { value: (t) => !!(n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e) }), Object.defineProperty(r, "name", { value: e }), r;
}
var pa = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, fa = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(ua = globalThis).__zod_globalConfig ?? (ua.__zod_globalConfig = {});
const ma = globalThis.__zod_globalConfig;
function ha(e) {
	return e && Object.assign(ma, e), ma;
}
function ga(e) {
	const t = Object.values(e).filter((e) => "number" == typeof e);
	return Object.entries(e).filter(([e, n]) => -1 === t.indexOf(+e)).map(([e, t]) => t);
}
function ya(e, t) {
	return "bigint" == typeof t ? t.toString() : t;
}
function wa(e) {
	return { get value() {
		{
			const t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function _a(e) {
	return null == e;
}
function va(e) {
	const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
const ba = Symbol("evaluating");
function ka(e, t, n) {
	let i;
	Object.defineProperty(e, t, {
		get() {
			if (i !== ba) return void 0 === i && (i = ba, i = n()), i;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function Sa(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function Ia(...e) {
	const t = {};
	for (const n of e) {
		const e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Aa(e) {
	return JSON.stringify(e);
}
const xa = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function $a(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
const Na = wa(() => {
	if (ma.jitless) return !1;
	if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return new Function(""), !0;
	} catch (e) {
		return !1;
	}
});
function Ta(e) {
	if (!1 === $a(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	if ("function" != typeof t) return !0;
	const n = t.prototype;
	return !1 !== $a(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function za(e) {
	return Ta(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const Ma = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
function Da(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ra(e, t, n) {
	const i = new e._zod.constr(t ?? e._zod.def);
	return t && !n?.parent || (i._zod.parent = e), i;
}
function Ea(e) {
	const t = e;
	if (!t) return {};
	if ("string" == typeof t) return { error: () => t };
	if (void 0 !== t?.message) {
		if (void 0 !== t?.error) throw new Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, "string" == typeof t.error ? {
		...t,
		error: () => t.error
	} : t;
}
const Ca = {
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Fa(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!0 !== e.issues[n]?.continue) return !0;
	return !1;
}
function Oa(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!1 === e.issues[n]?.continue) return !0;
	return !1;
}
function Pa(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function ja(e) {
	return "string" == typeof e ? e : e?.message;
}
function Ba(e, t, n) {
	const i = e.message ? e.message : ja(e.inst?._zod.def?.error?.(e)) ?? ja(t?.error?.(e)) ?? ja(n.customError?.(e)) ?? ja(n.localeError?.(e)) ?? "Invalid input", { inst: a, continue: s, input: r, ...o } = e;
	return o.path ?? (o.path = []), o.message = i, t?.reportInput && (o.input = r), o;
}
function Za(e) {
	return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function qa(...e) {
	const [t, n, i] = e;
	return "string" == typeof t ? {
		message: t,
		code: "custom",
		input: n,
		inst: i
	} : { ...t };
}
const Ga = (e, t) => {
	e.name = "$ZodError", Object.defineProperty(e, "_zod", {
		value: e._zod,
		enumerable: !1
	}), Object.defineProperty(e, "issues", {
		value: t,
		enumerable: !1
	}), e.message = JSON.stringify(t, ya, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, Ua = da("$ZodError", Ga), Ha = da("$ZodError", Ga, { Parent: Error }), Ja = (e) => (t, n, i, a) => {
	const s = i ? {
		...i,
		async: !1
	} : { async: !1 }, r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise) throw new pa();
	if (r.issues.length) {
		const t = new ((a?.Err) ?? e)(r.issues.map((e) => Ba(e, s, ha())));
		throw xa(t, a?.callee), t;
	}
	return r.value;
}, La = (e) => async (t, n, i, a) => {
	const s = i ? {
		...i,
		async: !0
	} : { async: !0 };
	let r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise && (r = await r), r.issues.length) {
		const t = new ((a?.Err) ?? e)(r.issues.map((e) => Ba(e, s, ha())));
		throw xa(t, a?.callee), t;
	}
	return r.value;
}, Wa = (e) => (t, n, i) => {
	const a = i ? {
		...i,
		async: !1
	} : { async: !1 }, s = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (s instanceof Promise) throw new pa();
	return s.issues.length ? {
		success: !1,
		error: new (e ?? Ua)(s.issues.map((e) => Ba(e, a, ha())))
	} : {
		success: !0,
		data: s.value
	};
}, Va = Wa(Ha), Ka = (e) => async (t, n, i) => {
	const a = i ? {
		...i,
		async: !0
	} : { async: !0 };
	let s = t._zod.run({
		value: n,
		issues: []
	}, a);
	return s instanceof Promise && (s = await s), s.issues.length ? {
		success: !1,
		error: new e(s.issues.map((e) => Ba(e, a, ha())))
	} : {
		success: !0,
		data: s.value
	};
}, Ya = Ka(Ha), Xa = (e) => (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return Ja(e)(t, n, a);
}, Qa = (e) => (t, n, i) => Ja(e)(t, n, i), es = (e) => async (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return La(e)(t, n, a);
}, ts = (e) => async (t, n, i) => La(e)(t, n, i), ns = (e) => (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return Wa(e)(t, n, a);
}, is = (e) => (t, n, i) => Wa(e)(t, n, i), as = (e) => async (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return Ka(e)(t, n, a);
}, ss = (e) => async (t, n, i) => Ka(e)(t, n, i), rs = /^[cC][0-9a-z]{6,}$/, os = /^[0-9a-z]+$/, ls = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, cs = /^[0-9a-vA-V]{20}$/, us = /^[A-Za-z0-9]{27}$/, ds = /^[a-zA-Z0-9_-]{21}$/, ps = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, fs = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ms = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, hs = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, gs = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ys = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, ws = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, _s = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, vs = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, bs = /^[A-Za-z0-9_-]*$/, ks = /^https?$/, Ss = /^\+[1-9]\d{6,14}$/, Is = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", As = new RegExp(`^${Is}$`);
function xs(e) {
	const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return "number" == typeof e.precision ? -1 === e.precision ? `${t}` : 0 === e.precision ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
const $s = /^-?\d+$/, Ns = /^-?\d+(?:\.\d+)?$/, Ts = /^(?:true|false)$/i, zs = /^[^A-Z]*$/, Ms = /^[^a-z]*$/, Ds = da("$ZodCheck", (e, t) => {
	var n;
	e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Rs = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, Es = da("$ZodCheckLessThan", (e, t) => {
	Ds.init(e, t);
	const n = Rs[typeof t.value];
	e._zod.onattach.push((e) => {
		const n = e._zod.bag, i = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
		t.value < i && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
	}), e._zod.check = (i) => {
		(t.inclusive ? i.value <= t.value : i.value < t.value) || i.issues.push({
			origin: n,
			code: "too_big",
			maximum: "object" == typeof t.value ? t.value.getTime() : t.value,
			input: i.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Cs = da("$ZodCheckGreaterThan", (e, t) => {
	Ds.init(e, t);
	const n = Rs[typeof t.value];
	e._zod.onattach.push((e) => {
		const n = e._zod.bag, i = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
		t.value > i && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
	}), e._zod.check = (i) => {
		(t.inclusive ? i.value >= t.value : i.value > t.value) || i.issues.push({
			origin: n,
			code: "too_small",
			minimum: "object" == typeof t.value ? t.value.getTime() : t.value,
			input: i.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Fs = da("$ZodCheckMultipleOf", (e, t) => {
	Ds.init(e, t), e._zod.onattach.push((e) => {
		var n;
		(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
	}), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
		("bigint" == typeof n.value ? n.value % t.value !== BigInt(0) : 0 !== function(e, t) {
			const n = e / t, i = Math.round(n), a = Number.EPSILON * Math.max(Math.abs(n), 1);
			return Math.abs(n - i) < a ? 0 : n - i;
		}(n.value, t.value)) && n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Os = da("$ZodCheckNumberFormat", (e, t) => {
	Ds.init(e, t), t.format = t.format || "float64";
	const n = t.format?.includes("int"), i = n ? "int" : "number", [a, s] = Ca[t.format];
	e._zod.onattach.push((e) => {
		const i = e._zod.bag;
		i.format = t.format, i.minimum = a, i.maximum = s, n && (i.pattern = $s);
	}), e._zod.check = (r) => {
		const o = r.value;
		if (n) {
			if (!Number.isInteger(o)) return void r.issues.push({
				expected: i,
				format: t.format,
				code: "invalid_type",
				continue: !1,
				input: o,
				inst: e
			});
			if (!Number.isSafeInteger(o)) return void (o > 0 ? r.issues.push({
				input: o,
				code: "too_big",
				maximum: Number.MAX_SAFE_INTEGER,
				note: "Integers must be within the safe integer range.",
				inst: e,
				origin: i,
				inclusive: !0,
				continue: !t.abort
			}) : r.issues.push({
				input: o,
				code: "too_small",
				minimum: Number.MIN_SAFE_INTEGER,
				note: "Integers must be within the safe integer range.",
				inst: e,
				origin: i,
				inclusive: !0,
				continue: !t.abort
			}));
		}
		o < a && r.issues.push({
			origin: "number",
			input: o,
			code: "too_small",
			minimum: a,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), o > s && r.issues.push({
			origin: "number",
			input: o,
			code: "too_big",
			maximum: s,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), Ps = da("$ZodCheckMaxLength", (e, t) => {
	var n;
	Ds.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !_a(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		const i = n.value;
		if (i.length <= t.maximum) return;
		const a = Za(i);
		n.issues.push({
			origin: a,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: i,
			inst: e,
			continue: !t.abort
		});
	};
}), js = da("$ZodCheckMinLength", (e, t) => {
	var n;
	Ds.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !_a(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		const i = n.value;
		if (i.length >= t.minimum) return;
		const a = Za(i);
		n.issues.push({
			origin: a,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: i,
			inst: e,
			continue: !t.abort
		});
	};
}), Bs = da("$ZodCheckLengthEquals", (e, t) => {
	var n;
	Ds.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !_a(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		const i = n.value, a = i.length;
		if (a === t.length) return;
		const s = Za(i), r = a > t.length;
		n.issues.push({
			origin: s,
			...r ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Zs = da("$ZodCheckStringFormat", (e, t) => {
	var n, i;
	Ds.init(e, t), e._zod.onattach.push((e) => {
		const n = e._zod.bag;
		n.format = t.format, t.pattern && (n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(t.pattern));
	}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, t.pattern.test(n.value) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (i = e._zod).check ?? (i.check = () => {});
}), qs = da("$ZodCheckRegex", (e, t) => {
	Zs.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, t.pattern.test(n.value) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), Gs = da("$ZodCheckLowerCase", (e, t) => {
	t.pattern ?? (t.pattern = zs), Zs.init(e, t);
}), Us = da("$ZodCheckUpperCase", (e, t) => {
	t.pattern ?? (t.pattern = Ms), Zs.init(e, t);
}), Hs = da("$ZodCheckIncludes", (e, t) => {
	Ds.init(e, t);
	const n = Da(t.includes), i = new RegExp("number" == typeof t.position ? `^.{${t.position}}${n}` : n);
	t.pattern = i, e._zod.onattach.push((e) => {
		const t = e._zod.bag;
		t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(i);
	}), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Js = da("$ZodCheckStartsWith", (e, t) => {
	Ds.init(e, t);
	const n = new RegExp(`^${Da(t.prefix)}.*`);
	t.pattern ?? (t.pattern = n), e._zod.onattach.push((e) => {
		const t = e._zod.bag;
		t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Ls = da("$ZodCheckEndsWith", (e, t) => {
	Ds.init(e, t);
	const n = new RegExp(`.*${Da(t.suffix)}$`);
	t.pattern ?? (t.pattern = n), e._zod.onattach.push((e) => {
		const t = e._zod.bag;
		t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Ws = da("$ZodCheckOverwrite", (e, t) => {
	Ds.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
});
var Vs = class {
	constructor(e = []) {
		this.content = [], this.indent = 0, this && (this.args = e);
	}
	indented(e) {
		this.indent += 1, e(this), this.indent -= 1;
	}
	write(e) {
		if ("function" == typeof e) return e(this, { execution: "sync" }), void e(this, { execution: "async" });
		const t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), i = t.map((e) => e.slice(n)).map((e) => " ".repeat(2 * this.indent) + e);
		for (const a of i) this.content.push(a);
	}
	compile() {
		const e = Function, t = this?.args;
		return new e(...t, [...(this?.content ?? [""]).map((e) => `  ${e}`)].join("\n"));
	}
};
const Ks = {
	major: 4,
	minor: 4,
	patch: 3
}, Ys = da("$ZodType", (e, t) => {
	var n;
	e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Ks;
	const i = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && i.unshift(e);
	for (const a of i) for (const t of a._zod.onattach) t(e);
	if (0 === i.length) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		const t = (e, t, n) => {
			let i, a = Fa(e);
			for (const s of t) {
				if (s._zod.def.when) {
					if (Oa(e)) continue;
					if (!s._zod.def.when(e)) continue;
				} else if (a) continue;
				const t = e.issues.length, r = s._zod.check(e);
				if (r instanceof Promise && !1 === n?.async) throw new pa();
				if (i || r instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await r, e.issues.length !== t && (a || (a = Fa(e, t)));
				});
				else {
					if (e.issues.length === t) continue;
					a || (a = Fa(e, t));
				}
			}
			return i ? i.then(() => e) : e;
		}, n = (n, a, s) => {
			if (Fa(n)) return n.aborted = !0, n;
			const r = t(a, i, s);
			if (r instanceof Promise) {
				if (!1 === s.async) throw new pa();
				return r.then((t) => e._zod.parse(t, s));
			}
			return e._zod.parse(r, s);
		};
		e._zod.run = (a, s) => {
			if (s.skipChecks) return e._zod.parse(a, s);
			if ("backward" === s.direction) {
				const t = e._zod.parse({
					value: a.value,
					issues: []
				}, {
					...s,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, a, s)) : n(t, a, s);
			}
			const r = e._zod.parse(a, s);
			if (r instanceof Promise) {
				if (!1 === s.async) throw new pa();
				return r.then((e) => t(e, i, s));
			}
			return t(r, i, s);
		};
	}
	ka(e, "~standard", () => ({
		validate: (t) => {
			try {
				const n = Va(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch (n) {
				return Ya(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), Xs = da("$ZodString", (e, t) => {
	var n;
	Ys.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? (n = e._zod.bag, new RegExp(`^${n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*"}$`)), e._zod.parse = (n, i) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch (i) {}
		return "string" == typeof n.value || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), Qs = da("$ZodStringFormat", (e, t) => {
	Zs.init(e, t), Xs.init(e, t);
}), er = da("$ZodGUID", (e, t) => {
	t.pattern ?? (t.pattern = fs), Qs.init(e, t);
}), tr = da("$ZodUUID", (e, t) => {
	if (t.version) {
		const e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (void 0 === e) throw new Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ?? (t.pattern = ms(e));
	} else t.pattern ?? (t.pattern = ms());
	Qs.init(e, t);
}), nr = da("$ZodEmail", (e, t) => {
	t.pattern ?? (t.pattern = hs), Qs.init(e, t);
}), ir = da("$ZodURL", (e, t) => {
	Qs.init(e, t), e._zod.check = (n) => {
		try {
			const i = n.value.trim();
			if (!t.normalize && t.protocol?.source === ks.source && !/^https?:\/\//i.test(i)) return void n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid URL format",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
			const a = new URL(i);
			t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(a.hostname) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(a.protocol.endsWith(":") ? a.protocol.slice(0, -1) : a.protocol) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.normalize ? n.value = a.href : n.value = i;
			return;
		} catch (i) {
			n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), ar = da("$ZodEmoji", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Qs.init(e, t);
}), sr = da("$ZodNanoID", (e, t) => {
	t.pattern ?? (t.pattern = ds), Qs.init(e, t);
}), rr = da("$ZodCUID", (e, t) => {
	t.pattern ?? (t.pattern = rs), Qs.init(e, t);
}), or = da("$ZodCUID2", (e, t) => {
	t.pattern ?? (t.pattern = os), Qs.init(e, t);
}), lr = da("$ZodULID", (e, t) => {
	t.pattern ?? (t.pattern = ls), Qs.init(e, t);
}), cr = da("$ZodXID", (e, t) => {
	t.pattern ?? (t.pattern = cs), Qs.init(e, t);
}), ur = da("$ZodKSUID", (e, t) => {
	t.pattern ?? (t.pattern = us), Qs.init(e, t);
}), dr = da("$ZodISODateTime", (e, t) => {
	t.pattern ?? (t.pattern = function(e) {
		const t = xs({ precision: e.precision }), n = ["Z"];
		e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const i = `${t}(?:${n.join("|")})`;
		return new RegExp(`^${Is}T(?:${i})$`);
	}(t)), Qs.init(e, t);
}), pr = da("$ZodISODate", (e, t) => {
	t.pattern ?? (t.pattern = As), Qs.init(e, t);
}), fr = da("$ZodISOTime", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp(`^${xs(t)}$`)), Qs.init(e, t);
}), mr = da("$ZodISODuration", (e, t) => {
	t.pattern ?? (t.pattern = ps), Qs.init(e, t);
}), hr = da("$ZodIPv4", (e, t) => {
	t.pattern ?? (t.pattern = gs), Qs.init(e, t), e._zod.bag.format = "ipv4";
}), gr = da("$ZodIPv6", (e, t) => {
	t.pattern ?? (t.pattern = ys), Qs.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
		try {
			new URL(`http://[${n.value}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), yr = da("$ZodCIDRv4", (e, t) => {
	t.pattern ?? (t.pattern = ws), Qs.init(e, t);
}), wr = da("$ZodCIDRv6", (e, t) => {
	t.pattern ?? (t.pattern = _s), Qs.init(e, t), e._zod.check = (n) => {
		const i = n.value.split("/");
		try {
			if (2 !== i.length) throw new Error();
			const [e, t] = i;
			if (!t) throw new Error();
			const n = Number(t);
			if (`${n}` !== t) throw new Error();
			if (n < 0 || n > 128) throw new Error();
			new URL(`http://[${e}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
});
function _r(e) {
	if ("" === e) return !0;
	if (/\s/.test(e)) return !1;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
const vr = da("$ZodBase64", (e, t) => {
	t.pattern ?? (t.pattern = vs), Qs.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		_r(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), br = da("$ZodBase64URL", (e, t) => {
	t.pattern ?? (t.pattern = bs), Qs.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		(function(e) {
			if (!bs.test(e)) return !1;
			const t = e.replace(/[-_]/g, (e) => "-" === e ? "+" : "/");
			return _r(t.padEnd(4 * Math.ceil(t.length / 4), "="));
		})(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), kr = da("$ZodE164", (e, t) => {
	t.pattern ?? (t.pattern = Ss), Qs.init(e, t);
}), Sr = da("$ZodJWT", (e, t) => {
	Qs.init(e, t), e._zod.check = (n) => {
		(function(e, t = null) {
			try {
				const n = e.split(".");
				if (3 !== n.length) return !1;
				const [i] = n;
				if (!i) return !1;
				const a = JSON.parse(atob(i));
				return !("typ" in a && "JWT" !== a?.typ || !a.alg || t && (!("alg" in a) || a.alg !== t));
			} catch {
				return !1;
			}
		})(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Ir = da("$ZodNumber", (e, t) => {
	Ys.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Ns, e._zod.parse = (n, i) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch (r) {}
		const a = n.value;
		if ("number" == typeof a && !Number.isNaN(a) && Number.isFinite(a)) return n;
		const s = "number" == typeof a ? Number.isNaN(a) ? "NaN" : Number.isFinite(a) ? void 0 : "Infinity" : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: a,
			inst: e,
			...s ? { received: s } : {}
		}), n;
	};
}), Ar = da("$ZodNumberFormat", (e, t) => {
	Os.init(e, t), Ir.init(e, t);
}), xr = da("$ZodBoolean", (e, t) => {
	Ys.init(e, t), e._zod.pattern = Ts, e._zod.parse = (n, i) => {
		if (t.coerce) try {
			n.value = Boolean(n.value);
		} catch (s) {}
		const a = n.value;
		return "boolean" == typeof a || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: a,
			inst: e
		}), n;
	};
}), $r = da("$ZodUnknown", (e, t) => {
	Ys.init(e, t), e._zod.parse = (e) => e;
}), Nr = da("$ZodNever", (e, t) => {
	Ys.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function Tr(e, t, n) {
	e.issues.length && t.issues.push(...Pa(n, e.issues)), t.value[n] = e.value;
}
const zr = da("$ZodArray", (e, t) => {
	Ys.init(e, t), e._zod.parse = (n, i) => {
		const a = n.value;
		if (!Array.isArray(a)) return n.issues.push({
			expected: "array",
			code: "invalid_type",
			input: a,
			inst: e
		}), n;
		n.value = Array(a.length);
		const s = [];
		for (let e = 0; e < a.length; e++) {
			const r = a[e], o = t.element._zod.run({
				value: r,
				issues: []
			}, i);
			o instanceof Promise ? s.push(o.then((t) => Tr(t, n, e))) : Tr(o, n, e);
		}
		return s.length ? Promise.all(s).then(() => n) : n;
	};
});
function Mr(e, t, n, i, a, s) {
	const r = n in i;
	if (e.issues.length) {
		if (a && s && !r) return;
		t.issues.push(...Pa(n, e.issues));
	}
	r || a ? void 0 === e.value ? r && (t.value[n] = void 0) : t.value[n] = e.value : e.issues.length || t.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: void 0,
		path: [n]
	});
}
function Dr(e) {
	const t = Object.keys(e.shape);
	for (const a of t) if (!e.shape?.[a]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${a}": expected a Zod schema`);
	const n = (i = e.shape, Object.keys(i).filter((e) => "optional" === i[e]._zod.optin && "optional" === i[e]._zod.optout));
	var i;
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function Rr(e, t, n, i, a, s) {
	const r = [], o = a.keySet, l = a.catchall._zod, c = l.def.type, u = "optional" === l.optin, d = "optional" === l.optout;
	for (const p in t) {
		if ("__proto__" === p) continue;
		if (o.has(p)) continue;
		if ("never" === c) {
			r.push(p);
			continue;
		}
		const a = l.run({
			value: t[p],
			issues: []
		}, i);
		a instanceof Promise ? e.push(a.then((e) => Mr(e, n, p, t, u, d))) : Mr(a, n, p, t, u, d);
	}
	return r.length && n.issues.push({
		code: "unrecognized_keys",
		keys: r,
		input: t,
		inst: s
	}), e.length ? Promise.all(e).then(() => n) : n;
}
const Er = da("$ZodObject", (e, t) => {
	if (Ys.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		const e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			const n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	const n = wa(() => Dr(t));
	ka(e._zod, "propValues", () => {
		const e = t.shape, n = {};
		for (const t in e) {
			const i = e[t]._zod;
			if (i.values) {
				n[t] ?? (n[t] = /* @__PURE__ */ new Set());
				for (const e of i.values) n[t].add(e);
			}
		}
		return n;
	});
	const i = $a, a = t.catchall;
	let s;
	e._zod.parse = (t, r) => {
		s ?? (s = n.value);
		const o = t.value;
		if (!i(o)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: o,
			inst: e
		}), t;
		t.value = {};
		const l = [], c = s.shape;
		for (const e of s.keys) {
			const n = c[e], i = "optional" === n._zod.optin, a = "optional" === n._zod.optout, s = n._zod.run({
				value: o[e],
				issues: []
			}, r);
			s instanceof Promise ? l.push(s.then((n) => Mr(n, t, e, o, i, a))) : Mr(s, t, e, o, i, a);
		}
		return a ? Rr(l, o, t, r, n.value, e) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), Cr = da("$ZodObjectJIT", (e, t) => {
	Er.init(e, t);
	const n = e._zod.parse, i = wa(() => Dr(t));
	let a;
	const s = $a, r = !ma.jitless, o = r && Na.value, l = t.catchall;
	let c;
	e._zod.parse = (u, d) => {
		c ?? (c = i.value);
		const p = u.value;
		return s(p) ? r && o && !1 === d?.async && !0 !== d.jitless ? (a || (a = ((e) => {
			const t = new Vs([
				"shape",
				"payload",
				"ctx"
			]), n = i.value, a = (e) => {
				const t = Aa(e);
				return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
			};
			t.write("const input = payload.value;");
			const s = Object.create(null);
			let r = 0;
			for (const i of n.keys) s[i] = "key_" + r++;
			t.write("const newResult = {};");
			for (const i of n.keys) {
				const n = s[i], r = Aa(i), o = e[i], l = "optional" === o?._zod?.optin, c = "optional" === o?._zod?.optout;
				t.write(`const ${n} = ${a(i)};`), l && c ? t.write(`\n        if (${n}.issues.length) {\n          if (${r} in input) {\n            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [${r}, ...iss.path] : [${r}]\n            })));\n          }\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : l ? t.write(`\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : t.write(`\n        const ${n}_present = ${r} in input;\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        if (!${n}_present && !${n}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${r}]\n          });\n        }\n\n        if (${n}_present) {\n          if (${n}.value === undefined) {\n            newResult[${r}] = undefined;\n          } else {\n            newResult[${r}] = ${n}.value;\n          }\n        }\n\n      `);
			}
			t.write("payload.value = newResult;"), t.write("return payload;");
			const o = t.compile();
			return (t, n) => o(e, t, n);
		})(t.shape)), u = a(u, d), l ? Rr([], p, u, d, c, e) : u) : n(u, d) : (u.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), u);
	};
});
function Fr(e, t, n, i) {
	for (const s of e) if (0 === s.issues.length) return t.value = s.value, t;
	const a = e.filter((e) => !Fa(e));
	return 1 === a.length ? (t.value = a[0].value, a[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => Ba(e, i, ha())))
	}), t);
}
const Or = da("$ZodUnion", (e, t) => {
	Ys.init(e, t), ka(e._zod, "optin", () => t.options.some((e) => "optional" === e._zod.optin) ? "optional" : void 0), ka(e._zod, "optout", () => t.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0), ka(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), ka(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			const e = t.options.map((e) => e._zod.pattern);
			return new RegExp(`^(${e.map((e) => va(e.source)).join("|")})$`);
		}
	});
	const n = 1 === t.options.length ? t.options[0]._zod.run : null;
	e._zod.parse = (i, a) => {
		if (n) return n(i, a);
		let s = !1;
		const r = [];
		for (const e of t.options) {
			const t = e._zod.run({
				value: i.value,
				issues: []
			}, a);
			if (t instanceof Promise) r.push(t), s = !0;
			else {
				if (0 === t.issues.length) return t;
				r.push(t);
			}
		}
		return s ? Promise.all(r).then((t) => Fr(t, i, e, a)) : Fr(r, i, e, a);
	};
}), Pr = da("$ZodIntersection", (e, t) => {
	Ys.init(e, t), e._zod.parse = (e, n) => {
		const i = e.value, a = t.left._zod.run({
			value: i,
			issues: []
		}, n), s = t.right._zod.run({
			value: i,
			issues: []
		}, n);
		return a instanceof Promise || s instanceof Promise ? Promise.all([a, s]).then(([t, n]) => Br(e, t, n)) : Br(e, a, s);
	};
});
function jr(e, t) {
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (e instanceof Date && t instanceof Date && +e === +t) return {
		valid: !0,
		data: e
	};
	if (Ta(e) && Ta(t)) {
		const n = Object.keys(t), i = Object.keys(e).filter((e) => -1 !== n.indexOf(e)), a = {
			...e,
			...t
		};
		for (const s of i) {
			const n = jr(e[s], t[s]);
			if (!n.valid) return {
				valid: !1,
				mergeErrorPath: [s, ...n.mergeErrorPath]
			};
			a[s] = n.data;
		}
		return {
			valid: !0,
			data: a
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		const n = [];
		for (let i = 0; i < e.length; i++) {
			const a = jr(e[i], t[i]);
			if (!a.valid) return {
				valid: !1,
				mergeErrorPath: [i, ...a.mergeErrorPath]
			};
			n.push(a.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function Br(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	let a;
	for (const o of t.issues) if ("unrecognized_keys" === o.code) {
		a ?? (a = o);
		for (const e of o.keys) i.has(e) || i.set(e, {}), i.get(e).l = !0;
	} else e.issues.push(o);
	for (const o of n.issues) if ("unrecognized_keys" === o.code) for (const e of o.keys) i.has(e) || i.set(e, {}), i.get(e).r = !0;
	else e.issues.push(o);
	const s = [...i].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length && a && e.issues.push({
		...a,
		keys: s
	}), Fa(e)) return e;
	const r = jr(t.value, n.value);
	if (!r.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
	return e.value = r.data, e;
}
const Zr = da("$ZodRecord", (e, t) => {
	Ys.init(e, t), e._zod.parse = (n, i) => {
		const a = n.value;
		if (!Ta(a)) return n.issues.push({
			expected: "record",
			code: "invalid_type",
			input: a,
			inst: e
		}), n;
		const s = [], r = t.keyType._zod.values;
		if (r) {
			n.value = {};
			const o = /* @__PURE__ */ new Set();
			for (const c of r) if ("string" == typeof c || "number" == typeof c || "symbol" == typeof c) {
				o.add("number" == typeof c ? c.toString() : c);
				const r = t.keyType._zod.run({
					value: c,
					issues: []
				}, i);
				if (r instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (r.issues.length) {
					n.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: r.issues.map((e) => Ba(e, i, ha())),
						input: c,
						path: [c],
						inst: e
					});
					continue;
				}
				const l = r.value, u = t.valueType._zod.run({
					value: a[c],
					issues: []
				}, i);
				u instanceof Promise ? s.push(u.then((e) => {
					e.issues.length && n.issues.push(...Pa(c, e.issues)), n.value[l] = e.value;
				})) : (u.issues.length && n.issues.push(...Pa(c, u.issues)), n.value[l] = u.value);
			}
			let l;
			for (const e in a) o.has(e) || (l = l ?? [], l.push(e));
			l && l.length > 0 && n.issues.push({
				code: "unrecognized_keys",
				input: a,
				inst: e,
				keys: l
			});
		} else {
			n.value = {};
			for (const r of Reflect.ownKeys(a)) {
				if ("__proto__" === r) continue;
				if (!Object.prototype.propertyIsEnumerable.call(a, r)) continue;
				let o = t.keyType._zod.run({
					value: r,
					issues: []
				}, i);
				if (o instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if ("string" == typeof r && Ns.test(r) && o.issues.length) {
					const e = t.keyType._zod.run({
						value: Number(r),
						issues: []
					}, i);
					if (e instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
					0 === e.issues.length && (o = e);
				}
				if (o.issues.length) {
					"loose" === t.mode ? n.value[r] = a[r] : n.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: o.issues.map((e) => Ba(e, i, ha())),
						input: r,
						path: [r],
						inst: e
					});
					continue;
				}
				const l = t.valueType._zod.run({
					value: a[r],
					issues: []
				}, i);
				l instanceof Promise ? s.push(l.then((e) => {
					e.issues.length && n.issues.push(...Pa(r, e.issues)), n.value[o.value] = e.value;
				})) : (l.issues.length && n.issues.push(...Pa(r, l.issues)), n.value[o.value] = l.value);
			}
		}
		return s.length ? Promise.all(s).then(() => n) : n;
	};
}), qr = da("$ZodEnum", (e, t) => {
	Ys.init(e, t);
	const n = ga(t.entries), i = new Set(n);
	e._zod.values = i, e._zod.pattern = new RegExp(`^(${n.filter((e) => Ma.has(typeof e)).map((e) => "string" == typeof e ? Da(e) : e.toString()).join("|")})$`), e._zod.parse = (t, a) => {
		const s = t.value;
		return i.has(s) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: s,
			inst: e
		}), t;
	};
}), Gr = da("$ZodTransform", (e, t) => {
	Ys.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, i) => {
		if ("backward" === i.direction) throw new fa(e.constructor.name);
		const a = t.transform(n.value, n);
		if (i.async) return (a instanceof Promise ? a : Promise.resolve(a)).then((e) => (n.value = e, n.fallback = !0, n));
		if (a instanceof Promise) throw new pa();
		return n.value = a, n.fallback = !0, n;
	};
});
function Ur(e, t) {
	return void 0 === t && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e;
}
const Hr = da("$ZodOptional", (e, t) => {
	Ys.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", ka(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), ka(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${va(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if ("optional" === t.innerType._zod.optin) {
			const i = e.value, a = t.innerType._zod.run(e, n);
			return a instanceof Promise ? a.then((e) => Ur(e, i)) : Ur(a, i);
		}
		return void 0 === e.value ? e : t.innerType._zod.run(e, n);
	};
}), Jr = da("$ZodExactOptional", (e, t) => {
	Hr.init(e, t), ka(e._zod, "values", () => t.innerType._zod.values), ka(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), Lr = da("$ZodNullable", (e, t) => {
	Ys.init(e, t), ka(e._zod, "optin", () => t.innerType._zod.optin), ka(e._zod, "optout", () => t.innerType._zod.optout), ka(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${va(e.source)}|null)$`) : void 0;
	}), ka(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => null === e.value ? e : t.innerType._zod.run(e, n);
}), Wr = da("$ZodDefault", (e, t) => {
	Ys.init(e, t), e._zod.optin = "optional", ka(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		if (void 0 === e.value) return e.value = t.defaultValue, e;
		const i = t.innerType._zod.run(e, n);
		return i instanceof Promise ? i.then((e) => Vr(e, t)) : Vr(i, t);
	};
});
function Vr(e, t) {
	return void 0 === e.value && (e.value = t.defaultValue), e;
}
const Kr = da("$ZodPrefault", (e, t) => {
	Ys.init(e, t), e._zod.optin = "optional", ka(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => ("backward" === n.direction || void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), Yr = da("$ZodNonOptional", (e, t) => {
	Ys.init(e, t), ka(e._zod, "values", () => {
		const e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
	}), e._zod.parse = (n, i) => {
		const a = t.innerType._zod.run(n, i);
		return a instanceof Promise ? a.then((t) => Xr(t, e)) : Xr(a, e);
	};
});
function Xr(e, t) {
	return e.issues.length || void 0 !== e.value || e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
const Qr = da("$ZodCatch", (e, t) => {
	Ys.init(e, t), e._zod.optin = "optional", ka(e._zod, "optout", () => t.innerType._zod.optout), ka(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const i = t.innerType._zod.run(e, n);
		return i instanceof Promise ? i.then((i) => (e.value = i.value, i.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: i.issues.map((e) => Ba(e, n, ha())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e)) : (e.value = i.value, i.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: i.issues.map((e) => Ba(e, n, ha())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e);
	};
}), eo = da("$ZodPipe", (e, t) => {
	Ys.init(e, t), ka(e._zod, "values", () => t.in._zod.values), ka(e._zod, "optin", () => t.in._zod.optin), ka(e._zod, "optout", () => t.out._zod.optout), ka(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) {
			const i = t.out._zod.run(e, n);
			return i instanceof Promise ? i.then((e) => to(e, t.in, n)) : to(i, t.in, n);
		}
		const i = t.in._zod.run(e, n);
		return i instanceof Promise ? i.then((e) => to(e, t.out, n)) : to(i, t.out, n);
	};
});
function to(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues,
		fallback: e.fallback
	}, n);
}
const no = da("$ZodReadonly", (e, t) => {
	Ys.init(e, t), ka(e._zod, "propValues", () => t.innerType._zod.propValues), ka(e._zod, "values", () => t.innerType._zod.values), ka(e._zod, "optin", () => t.innerType?._zod?.optin), ka(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const i = t.innerType._zod.run(e, n);
		return i instanceof Promise ? i.then(io) : io(i);
	};
});
function io(e) {
	return e.value = Object.freeze(e.value), e;
}
const ao = da("$ZodCustom", (e, t) => {
	Ds.init(e, t), Ys.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		const i = n.value, a = t.fn(i);
		if (a instanceof Promise) return a.then((t) => so(t, n, i, e));
		so(a, n, i, e);
	};
});
function so(e, t, n, i) {
	if (!e) {
		const e = {
			code: "custom",
			input: n,
			inst: i,
			path: [...i._zod.def.path ?? []],
			continue: !i._zod.def.abort
		};
		i._zod.def.params && (e.params = i._zod.def.params), t.issues.push(qa(e));
	}
}
var ro;
(ro = globalThis).__zod_globalRegistry ?? (ro.__zod_globalRegistry = new class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		const n = t[0];
		return this._map.set(e, n), n && "object" == typeof n && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		const t = this._map.get(e);
		return t && "object" == typeof t && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		const t = e._zod.parent;
		if (t) {
			const n = { ...this.get(t) ?? {} };
			delete n.id;
			const i = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(i).length ? i : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
}());
const oo = globalThis.__zod_globalRegistry;
function lo(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...Ea(t)
	});
}
function co(e, t) {
	return new Es({
		check: "less_than",
		...Ea(t),
		value: e,
		inclusive: !1
	});
}
function uo(e, t) {
	return new Es({
		check: "less_than",
		...Ea(t),
		value: e,
		inclusive: !0
	});
}
function po(e, t) {
	return new Cs({
		check: "greater_than",
		...Ea(t),
		value: e,
		inclusive: !1
	});
}
function fo(e, t) {
	return new Cs({
		check: "greater_than",
		...Ea(t),
		value: e,
		inclusive: !0
	});
}
function mo(e, t) {
	return new Fs({
		check: "multiple_of",
		...Ea(t),
		value: e
	});
}
function ho(e, t) {
	return new Ps({
		check: "max_length",
		...Ea(t),
		maximum: e
	});
}
function go(e, t) {
	return new js({
		check: "min_length",
		...Ea(t),
		minimum: e
	});
}
function yo(e, t) {
	return new Bs({
		check: "length_equals",
		...Ea(t),
		length: e
	});
}
function wo(e) {
	return new Ws({
		check: "overwrite",
		tx: e
	});
}
function _o(e, t) {
	const n = new Ds({
		check: "custom",
		...Ea(t)
	});
	return n._zod.check = e, n;
}
function vo(e) {
	let t = e?.target ?? "draft-2020-12";
	return "draft-4" === t && (t = "draft-04"), "draft-7" === t && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? oo,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		external: e?.external ?? void 0
	};
}
function bo(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var i;
	const a = e._zod.def, s = t.seen.get(e);
	if (s) return s.count++, n.schemaPath.includes(e) && (s.cycle = n.path), s.schema;
	const r = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, r);
	const o = e._zod.toJSONSchema?.();
	if (o) r.schema = o;
	else {
		const i = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, r.schema, i);
		else {
			const n = r.schema, s = t.processors[a.type];
			if (!s) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${a.type}`);
			s(e, t, n, i);
		}
		const s = e._zod.parent;
		s && (r.ref || (r.ref = s), bo(s, t, i), t.seen.get(s).isParent = !0);
	}
	const l = t.metadataRegistry.get(e);
	return l && Object.assign(r.schema, l), "input" === t.io && Io(e) && (delete r.schema.examples, delete r.schema.default), "input" === t.io && "_prefault" in r.schema && ((i = r.schema).default ?? (i.default = r.schema._prefault)), delete r.schema._prefault, t.seen.get(e).schema;
}
function ko(e, t) {
	const n = e.seen.get(t);
	if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const i = /* @__PURE__ */ new Map();
	for (const s of e.seen.entries()) {
		const t = e.metadataRegistry.get(s[0])?.id;
		if (t) {
			const e = i.get(t);
			if (e && e !== s[0]) throw new Error(`Duplicate schema id "${t}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			i.set(t, s[0]);
		}
	}
	const a = (t) => {
		if (t[1].schema.$ref) return;
		const i = t[1], { ref: a, defId: s } = ((t) => {
			const i = "draft-2020-12" === e.target ? "$defs" : "definitions";
			if (e.external) {
				const n = e.external.registry.get(t[0])?.id, a = e.external.uri ?? ((e) => e);
				if (n) return { ref: a(n) };
				const s = t[1].defId ?? t[1].schema.id ?? "schema" + e.counter++;
				return t[1].defId = s, {
					defId: s,
					ref: `${a("__shared")}#/${i}/${s}`
				};
			}
			if (t[1] === n) return { ref: "#" };
			const a = `#/${i}/`, s = t[1].schema.id ?? "__schema" + e.counter++;
			return {
				defId: s,
				ref: a + s
			};
		})(t);
		i.def = { ...i.schema }, s && (i.defId = s);
		const r = i.schema;
		for (const e in r) delete r[e];
		r.$ref = a;
	};
	if ("throw" === e.cycles) for (const s of e.seen.entries()) {
		const e = s[1];
		if (e.cycle) throw new Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>\n\nSet the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (const s of e.seen.entries()) {
		const n = s[1];
		if (t !== s[0]) {
			if (e.external) {
				const n = e.external.registry.get(s[0])?.id;
				if (t !== s[0] && n) {
					a(s);
					continue;
				}
			}
			(e.metadataRegistry.get(s[0])?.id || n.cycle || n.count > 1 && "ref" === e.reused) && a(s);
		} else a(s);
	}
}
function So(e, t) {
	const n = e.seen.get(t);
	if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const i = (t) => {
		const n = e.seen.get(t);
		if (null === n.ref) return;
		const a = n.def ?? n.schema, s = { ...a }, r = n.ref;
		if (n.ref = null, r) {
			i(r);
			const n = e.seen.get(r), o = n.schema;
			if (!o.$ref || "draft-07" !== e.target && "draft-04" !== e.target && "openapi-3.0" !== e.target ? Object.assign(a, o) : (a.allOf = a.allOf ?? [], a.allOf.push(o)), Object.assign(a, s), t._zod.parent === r) for (const e in a) "$ref" !== e && "allOf" !== e && (e in s || delete a[e]);
			if (o.$ref && n.def) for (const e in a) "$ref" !== e && "allOf" !== e && e in n.def && JSON.stringify(a[e]) === JSON.stringify(n.def[e]) && delete a[e];
		}
		const o = t._zod.parent;
		if (o && o !== r) {
			i(o);
			const t = e.seen.get(o);
			if (t?.schema.$ref && (a.$ref = t.schema.$ref, t.def)) for (const e in a) "$ref" !== e && "allOf" !== e && e in t.def && JSON.stringify(a[e]) === JSON.stringify(t.def[e]) && delete a[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: a,
			path: n.path ?? []
		});
	};
	for (const l of [...e.seen.entries()].reverse()) i(l[0]);
	const a = {};
	if ("draft-2020-12" === e.target ? a.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === e.target ? a.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === e.target ? a.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		const n = e.external.registry.get(t)?.id;
		if (!n) throw new Error("Schema is missing an `id` property");
		a.$id = e.external.uri(n);
	}
	Object.assign(a, n.def ?? n.schema);
	const s = e.metadataRegistry.get(t)?.id;
	void 0 !== s && a.id === s && delete a.id;
	const r = e.external?.defs ?? {};
	for (const l of e.seen.entries()) {
		const e = l[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, r[e.defId] = e.def);
	}
	e.external || Object.keys(r).length > 0 && ("draft-2020-12" === e.target ? a.$defs = r : a.definitions = r);
	try {
		const n = JSON.parse(JSON.stringify(a));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Ao(t, "input", e.processors),
					output: Ao(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch (o) {
		throw new Error("Error converting schema to JSON.");
	}
}
function Io(e, t) {
	const n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	const i = e._zod.def;
	if ("transform" === i.type) return !0;
	if ("array" === i.type) return Io(i.element, n);
	if ("set" === i.type) return Io(i.valueType, n);
	if ("lazy" === i.type) return Io(i.getter(), n);
	if ("promise" === i.type || "optional" === i.type || "nonoptional" === i.type || "nullable" === i.type || "readonly" === i.type || "default" === i.type || "prefault" === i.type) return Io(i.innerType, n);
	if ("intersection" === i.type) return Io(i.left, n) || Io(i.right, n);
	if ("record" === i.type || "map" === i.type) return Io(i.keyType, n) || Io(i.valueType, n);
	if ("pipe" === i.type) return !!e._zod.traits.has("$ZodCodec") || Io(i.in, n) || Io(i.out, n);
	if ("object" === i.type) {
		for (const e in i.shape) if (Io(i.shape[e], n)) return !0;
		return !1;
	}
	if ("union" === i.type) {
		for (const e of i.options) if (Io(e, n)) return !0;
		return !1;
	}
	if ("tuple" === i.type) {
		for (const e of i.items) if (Io(e, n)) return !0;
		return !(!i.rest || !Io(i.rest, n));
	}
	return !1;
}
const Ao = (e, t, n = {}) => (i) => {
	const { libraryOptions: a, target: s } = i ?? {}, r = vo({
		...a ?? {},
		target: s,
		io: t,
		processors: n
	});
	return bo(e, r), ko(r, e), So(r, e);
}, xo = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, $o = (e, t, n, i) => {
	const a = e._zod.def;
	bo(a.innerType, t, i), t.seen.get(e).ref = a.innerType;
}, No = da("ZodISODateTime", (e, t) => {
	dr.init(e, t), Xo.init(e, t);
});
const To = da("ZodISODate", (e, t) => {
	pr.init(e, t), Xo.init(e, t);
});
const zo = da("ZodISOTime", (e, t) => {
	fr.init(e, t), Xo.init(e, t);
});
const Mo = da("ZodISODuration", (e, t) => {
	mr.init(e, t), Xo.init(e, t);
});
const Do = (e, t) => {
	Ua.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
		format: { value: (t) => function(e, t = (e) => e.message) {
			const n = { _errors: [] }, i = (e, a = []) => {
				for (const s of e.issues) if ("invalid_union" === s.code && s.errors.length) s.errors.map((e) => i({ issues: e }, [...a, ...s.path]));
				else if ("invalid_key" === s.code) i({ issues: s.issues }, [...a, ...s.path]);
				else if ("invalid_element" === s.code) i({ issues: s.issues }, [...a, ...s.path]);
				else {
					const e = [...a, ...s.path];
					if (0 === e.length) n._errors.push(t(s));
					else {
						let i = n, a = 0;
						for (; a < e.length;) {
							const n = e[a];
							a !== e.length - 1 ? i[n] = i[n] || { _errors: [] } : (i[n] = i[n] || { _errors: [] }, i[n]._errors.push(t(s))), i = i[n], a++;
						}
					}
				}
			};
			return i(e), n;
		}(e, t) },
		flatten: { value: (t) => function(e, t = (e) => e.message) {
			const n = {}, i = [];
			for (const a of e.issues) a.path.length > 0 ? (n[a.path[0]] = n[a.path[0]] || [], n[a.path[0]].push(t(a))) : i.push(t(a));
			return {
				formErrors: i,
				fieldErrors: n
			};
		}(e, t) },
		addIssue: { value: (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, ya, 2);
		} },
		addIssues: { value: (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, ya, 2);
		} },
		isEmpty: { get: () => 0 === e.issues.length }
	});
}, Ro = da("ZodError", Do, { Parent: Error }), Eo = Ja(Ro), Co = La(Ro), Fo = Wa(Ro), Oo = Ka(Ro), Po = Xa(Ro), jo = Qa(Ro), Bo = es(Ro), Zo = ts(Ro), qo = ns(Ro), Go = is(Ro), Uo = as(Ro), Ho = ss(Ro), Jo = /* @__PURE__ */ new WeakMap();
function Lo(e, t, n) {
	const i = Object.getPrototypeOf(e);
	let a = Jo.get(i);
	if (a || (a = /* @__PURE__ */ new Set(), Jo.set(i, a)), !a.has(t)) {
		a.add(t);
		for (const e in n) {
			const t = n[e];
			Object.defineProperty(i, e, {
				configurable: !0,
				enumerable: !1,
				get() {
					const n = t.bind(this);
					return Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: n
					}), n;
				},
				set(t) {
					Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: t
					});
				}
			});
		}
	}
}
const Wo = da("ZodType", (e, t) => (Ys.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: Ao(e, "input"),
	output: Ao(e, "output")
} }), e.toJSONSchema = ((e, t = {}) => (n) => {
	const i = vo({
		...n,
		processors: t
	});
	return bo(e, i), ko(i, e), So(i, e);
})(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (t, n) => Eo(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => Fo(e, t, n), e.parseAsync = async (t, n) => Co(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => Oo(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => Po(e, t, n), e.decode = (t, n) => jo(e, t, n), e.encodeAsync = async (t, n) => Bo(e, t, n), e.decodeAsync = async (t, n) => Zo(e, t, n), e.safeEncode = (t, n) => qo(e, t, n), e.safeDecode = (t, n) => Go(e, t, n), e.safeEncodeAsync = async (t, n) => Uo(e, t, n), e.safeDecodeAsync = async (t, n) => Ho(e, t, n), Lo(e, "ZodType", {
	check(...e) {
		const t = this.def;
		return this.clone(Ia(t, { checks: [...t.checks ?? [], ...e.map((e) => "function" == typeof e ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return Ra(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(function(e, t = {}) {
			return function(e, t, n) {
				return new Yl({
					type: "custom",
					check: "custom",
					fn: t,
					...Ea(n)
				});
			}(0, e, t);
		}(e, t));
	},
	superRefine(e, t) {
		return this.check(function(e, t) {
			return function(e, t) {
				const n = _o((t) => (t.addIssue = (e) => {
					if ("string" == typeof e) t.issues.push(qa(e, t.value, n._zod.def));
					else {
						const i = e;
						i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = t.value), i.inst ?? (i.inst = n), i.continue ?? (i.continue = !n._zod.def.abort), t.issues.push(qa(i));
					}
				}, e(t.value, t)), t);
				return n;
			}(e, t);
		}(e, t));
	},
	overwrite(e) {
		return this.check(wo(e));
	},
	optional() {
		return Bl(this);
	},
	exactOptional() {
		return new Zl({
			type: "optional",
			innerType: this
		});
	},
	nullable() {
		return Gl(this);
	},
	nullish() {
		return Bl(Gl(this));
	},
	nonoptional(e) {
		return function(e, t) {
			return new Jl({
				type: "nonoptional",
				innerType: e,
				...Ea(t)
			});
		}(this, e);
	},
	array() {
		return Nl(this);
	},
	or(e) {
		return Dl([this, e]);
	},
	and(e) {
		return new Rl({
			type: "intersection",
			left: this,
			right: e
		});
	},
	transform(e) {
		return Vl(this, new Pl({
			type: "transform",
			transform: e
		}));
	},
	default(e) {
		return t = e, new Ul({
			type: "default",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : za(t);
			}
		});
		var t;
	},
	prefault(e) {
		return t = e, new Hl({
			type: "prefault",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : za(t);
			}
		});
		var t;
	},
	catch(e) {
		return new Ll({
			type: "catch",
			innerType: this,
			catchValue: "function" == typeof (t = e) ? t : () => t
		});
		var t;
	},
	pipe(e) {
		return Vl(this, e);
	},
	readonly() {
		return new Kl({
			type: "readonly",
			innerType: this
		});
	},
	describe(e) {
		const t = this.clone();
		return oo.add(t, { description: e }), t;
	},
	meta(...e) {
		if (0 === e.length) return oo.get(this);
		const t = this.clone();
		return oo.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e) {
		return e(this);
	}
}), Object.defineProperty(e, "description", {
	get: () => oo.get(e)?.description,
	configurable: !0
}), e)), Vo = da("_ZodString", (e, t) => {
	Xs.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n) => {
		const i = n;
		i.type = "string";
		const { minimum: a, maximum: s, format: r, patterns: o, contentEncoding: l } = e._zod.bag;
		if ("number" == typeof a && (i.minLength = a), "number" == typeof s && (i.maxLength = s), r && (i.format = xo[r] ?? r, "" === i.format && delete i.format, "time" === r && delete i.format), l && (i.contentEncoding = l), o && o.size > 0) {
			const e = [...o];
			1 === e.length ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
				..."draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	})(e, t, n);
	const n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, Lo(e, "_ZodString", {
		regex(...e) {
			return this.check(function(e, t) {
				return new qs({
					check: "string_format",
					format: "regex",
					...Ea(t),
					pattern: e
				});
			}(...e));
		},
		includes(...e) {
			return this.check(function(e, t) {
				return new Hs({
					check: "string_format",
					format: "includes",
					...Ea(t),
					includes: e
				});
			}(...e));
		},
		startsWith(...e) {
			return this.check(function(e, t) {
				return new Js({
					check: "string_format",
					format: "starts_with",
					...Ea(t),
					prefix: e
				});
			}(...e));
		},
		endsWith(...e) {
			return this.check(function(e, t) {
				return new Ls({
					check: "string_format",
					format: "ends_with",
					...Ea(t),
					suffix: e
				});
			}(...e));
		},
		min(...e) {
			return this.check(go(...e));
		},
		max(...e) {
			return this.check(ho(...e));
		},
		length(...e) {
			return this.check(yo(...e));
		},
		nonempty(...e) {
			return this.check(go(1, ...e));
		},
		lowercase(e) {
			return this.check(function(e) {
				return new Gs({
					check: "string_format",
					format: "lowercase",
					...Ea(e)
				});
			}(e));
		},
		uppercase(e) {
			return this.check(function(e) {
				return new Us({
					check: "string_format",
					format: "uppercase",
					...Ea(e)
				});
			}(e));
		},
		trim() {
			return this.check(wo((e) => e.trim()));
		},
		normalize(...e) {
			return this.check(function(e) {
				return wo((t) => t.normalize(e));
			}(...e));
		},
		toLowerCase() {
			return this.check(wo((e) => e.toLowerCase()));
		},
		toUpperCase() {
			return this.check(wo((e) => e.toUpperCase()));
		},
		slugify() {
			return this.check(wo((e) => function(e) {
				return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
			}(e)));
		}
	});
}), Ko = da("ZodString", (e, t) => {
	Xs.init(e, t), Vo.init(e, t), e.email = (t) => e.check(function(e, t) {
		return new Qo({
			type: "string",
			format: "email",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.url = (t) => e.check(function(e, t) {
		return new nl({
			type: "string",
			format: "url",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.jwt = (t) => e.check(function(e, t) {
		return new yl({
			type: "string",
			format: "jwt",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.emoji = (t) => e.check(function(e, t) {
		return new il({
			type: "string",
			format: "emoji",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.guid = (t) => e.check(lo(el, t)), e.uuid = (t) => e.check(function(e, t) {
		return new tl({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.uuidv4 = (t) => e.check(function(e, t) {
		return new tl({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v4",
			...Ea(t)
		});
	}(0, t)), e.uuidv6 = (t) => e.check(function(e, t) {
		return new tl({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v6",
			...Ea(t)
		});
	}(0, t)), e.uuidv7 = (t) => e.check(function(e, t) {
		return new tl({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v7",
			...Ea(t)
		});
	}(0, t)), e.nanoid = (t) => e.check(function(e, t) {
		return new al({
			type: "string",
			format: "nanoid",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.guid = (t) => e.check(lo(el, t)), e.cuid = (t) => e.check(function(e, t) {
		return new sl({
			type: "string",
			format: "cuid",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.cuid2 = (t) => e.check(function(e, t) {
		return new rl({
			type: "string",
			format: "cuid2",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.ulid = (t) => e.check(function(e, t) {
		return new ol({
			type: "string",
			format: "ulid",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.base64 = (t) => e.check(function(e, t) {
		return new ml({
			type: "string",
			format: "base64",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.base64url = (t) => e.check(function(e, t) {
		return new hl({
			type: "string",
			format: "base64url",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.xid = (t) => e.check(function(e, t) {
		return new ll({
			type: "string",
			format: "xid",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.ksuid = (t) => e.check(function(e, t) {
		return new cl({
			type: "string",
			format: "ksuid",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.ipv4 = (t) => e.check(function(e, t) {
		return new ul({
			type: "string",
			format: "ipv4",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.ipv6 = (t) => e.check(function(e, t) {
		return new dl({
			type: "string",
			format: "ipv6",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.cidrv4 = (t) => e.check(function(e, t) {
		return new pl({
			type: "string",
			format: "cidrv4",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.cidrv6 = (t) => e.check(function(e, t) {
		return new fl({
			type: "string",
			format: "cidrv6",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.e164 = (t) => e.check(function(e, t) {
		return new gl({
			type: "string",
			format: "e164",
			check: "string_format",
			abort: !1,
			...Ea(t)
		});
	}(0, t)), e.datetime = (t) => e.check(function(e) {
		return function(e, t) {
			return new No({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: !1,
				local: !1,
				precision: null,
				...Ea(t)
			});
		}(0, e);
	}(t)), e.date = (t) => e.check(function(e) {
		return function(e, t) {
			return new To({
				type: "string",
				format: "date",
				check: "string_format",
				...Ea(t)
			});
		}(0, e);
	}(t)), e.time = (t) => e.check(function(e) {
		return function(e, t) {
			return new zo({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...Ea(t)
			});
		}(0, e);
	}(t)), e.duration = (t) => e.check(function(e) {
		return function(e, t) {
			return new Mo({
				type: "string",
				format: "duration",
				check: "string_format",
				...Ea(t)
			});
		}(0, e);
	}(t));
});
function Yo(e) {
	return function(e, t) {
		return new Ko({
			type: "string",
			...Ea(t)
		});
	}(0, e);
}
const Xo = da("ZodStringFormat", (e, t) => {
	Qs.init(e, t), Vo.init(e, t);
}), Qo = da("ZodEmail", (e, t) => {
	nr.init(e, t), Xo.init(e, t);
}), el = da("ZodGUID", (e, t) => {
	er.init(e, t), Xo.init(e, t);
}), tl = da("ZodUUID", (e, t) => {
	tr.init(e, t), Xo.init(e, t);
}), nl = da("ZodURL", (e, t) => {
	ir.init(e, t), Xo.init(e, t);
}), il = da("ZodEmoji", (e, t) => {
	ar.init(e, t), Xo.init(e, t);
}), al = da("ZodNanoID", (e, t) => {
	sr.init(e, t), Xo.init(e, t);
}), sl = da("ZodCUID", (e, t) => {
	rr.init(e, t), Xo.init(e, t);
}), rl = da("ZodCUID2", (e, t) => {
	or.init(e, t), Xo.init(e, t);
}), ol = da("ZodULID", (e, t) => {
	lr.init(e, t), Xo.init(e, t);
}), ll = da("ZodXID", (e, t) => {
	cr.init(e, t), Xo.init(e, t);
}), cl = da("ZodKSUID", (e, t) => {
	ur.init(e, t), Xo.init(e, t);
}), ul = da("ZodIPv4", (e, t) => {
	hr.init(e, t), Xo.init(e, t);
}), dl = da("ZodIPv6", (e, t) => {
	gr.init(e, t), Xo.init(e, t);
}), pl = da("ZodCIDRv4", (e, t) => {
	yr.init(e, t), Xo.init(e, t);
}), fl = da("ZodCIDRv6", (e, t) => {
	wr.init(e, t), Xo.init(e, t);
}), ml = da("ZodBase64", (e, t) => {
	vr.init(e, t), Xo.init(e, t);
}), hl = da("ZodBase64URL", (e, t) => {
	br.init(e, t), Xo.init(e, t);
}), gl = da("ZodE164", (e, t) => {
	kr.init(e, t), Xo.init(e, t);
}), yl = da("ZodJWT", (e, t) => {
	Sr.init(e, t), Xo.init(e, t);
}), wl = da("ZodNumber", (e, t) => {
	Ir.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n) => {
		const i = n, { minimum: a, maximum: s, format: r, multipleOf: o, exclusiveMaximum: l, exclusiveMinimum: c } = e._zod.bag;
		"string" == typeof r && r.includes("int") ? i.type = "integer" : i.type = "number";
		const u = "number" == typeof c && c >= (a ?? Number.NEGATIVE_INFINITY), d = "number" == typeof l && l <= (s ?? Number.POSITIVE_INFINITY), p = "draft-04" === t.target || "openapi-3.0" === t.target;
		u ? p ? (i.minimum = c, i.exclusiveMinimum = !0) : i.exclusiveMinimum = c : "number" == typeof a && (i.minimum = a), d ? p ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : "number" == typeof s && (i.maximum = s), "number" == typeof o && (i.multipleOf = o);
	})(e, t, n), Lo(e, "ZodNumber", {
		gt(e, t) {
			return this.check(po(e, t));
		},
		gte(e, t) {
			return this.check(fo(e, t));
		},
		min(e, t) {
			return this.check(fo(e, t));
		},
		lt(e, t) {
			return this.check(co(e, t));
		},
		lte(e, t) {
			return this.check(uo(e, t));
		},
		max(e, t) {
			return this.check(uo(e, t));
		},
		int(e) {
			return this.check(bl(e));
		},
		safe(e) {
			return this.check(bl(e));
		},
		positive(e) {
			return this.check(po(0, e));
		},
		nonnegative(e) {
			return this.check(fo(0, e));
		},
		negative(e) {
			return this.check(co(0, e));
		},
		nonpositive(e) {
			return this.check(uo(0, e));
		},
		multipleOf(e, t) {
			return this.check(mo(e, t));
		},
		step(e, t) {
			return this.check(mo(e, t));
		},
		finite() {
			return this;
		}
	});
	const n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function _l(e) {
	return function(e, t) {
		return new wl({
			type: "number",
			checks: [],
			...Ea(t)
		});
	}(0, e);
}
const vl = da("ZodNumberFormat", (e, t) => {
	Ar.init(e, t), wl.init(e, t);
});
function bl(e) {
	return function(e, t) {
		return new vl({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...Ea(t)
		});
	}(0, e);
}
const kl = da("ZodBoolean", (e, t) => {
	xr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.type = "boolean";
	})(0, 0, t);
});
function Sl(e) {
	return function(e, t) {
		return new kl({
			type: "boolean",
			...Ea(t)
		});
	}(0, e);
}
const Il = da("ZodUnknown", (e, t) => {
	$r.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (e, t, n) => {};
});
function Al() {
	return new Il({ type: "unknown" });
}
const xl = da("ZodNever", (e, t) => {
	Nr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.not = {};
	})(0, 0, t);
});
const $l = da("ZodArray", (e, t) => {
	zr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = n, s = e._zod.def, { minimum: r, maximum: o } = e._zod.bag;
		"number" == typeof r && (a.minItems = r), "number" == typeof o && (a.maxItems = o), a.type = "array", a.items = bo(s.element, t, {
			...i,
			path: [...i.path, "items"]
		});
	})(e, t, n, i), e.element = t.element, Lo(e, "ZodArray", {
		min(e, t) {
			return this.check(go(e, t));
		},
		nonempty(e) {
			return this.check(go(1, e));
		},
		max(e, t) {
			return this.check(ho(e, t));
		},
		length(e, t) {
			return this.check(yo(e, t));
		},
		unwrap() {
			return this.element;
		}
	});
});
function Nl(e, t) {
	return function(e, t, n) {
		return new $l({
			type: "array",
			element: t,
			...Ea(n)
		});
	}(0, e, t);
}
const Tl = da("ZodObject", (e, t) => {
	Cr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = n, s = e._zod.def;
		a.type = "object", a.properties = {};
		const r = s.shape;
		for (const c in r) a.properties[c] = bo(r[c], t, {
			...i,
			path: [
				...i.path,
				"properties",
				c
			]
		});
		const o = new Set(Object.keys(r)), l = new Set([...o].filter((e) => {
			const n = s.shape[e]._zod;
			return "input" === t.io ? void 0 === n.optin : void 0 === n.optout;
		}));
		l.size > 0 && (a.required = Array.from(l)), "never" === s.catchall?._zod.def.type ? a.additionalProperties = !1 : s.catchall ? s.catchall && (a.additionalProperties = bo(s.catchall, t, {
			...i,
			path: [...i.path, "additionalProperties"]
		})) : "output" === t.io && (a.additionalProperties = !1);
	})(e, t, n, i), ka(e, "shape", () => t.shape), Lo(e, "ZodObject", {
		keyof() {
			return Ol(Object.keys(this._zod.def.shape));
		},
		catchall(e) {
			return this.clone({
				...this._zod.def,
				catchall: e
			});
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: Al()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: Al()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: function(e, t) {
					return new xl({
						type: "never",
						...Ea(t)
					});
				}(0, e)
			});
			var e;
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(e) {
			return function(e, t) {
				if (!Ta(t)) throw new Error("Invalid input to extend: expected a plain object");
				const n = e._zod.def.checks;
				if (n && n.length > 0) {
					const n = e._zod.def.shape;
					for (const e in t) if (void 0 !== Object.getOwnPropertyDescriptor(n, e)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
				}
				return Ra(e, Ia(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return Sa(this, "shape", n), n;
				} }));
			}(this, e);
		},
		safeExtend(e) {
			return function(e, t) {
				if (!Ta(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
				return Ra(e, Ia(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return Sa(this, "shape", n), n;
				} }));
			}(this, e);
		},
		merge(e) {
			return function(e, t) {
				if (e._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
				return Ra(e, Ia(e._zod.def, {
					get shape() {
						const n = {
							...e._zod.def.shape,
							...t._zod.def.shape
						};
						return Sa(this, "shape", n), n;
					},
					get catchall() {
						return t._zod.def.catchall;
					},
					checks: t._zod.def.checks ?? []
				}));
			}(this, e);
		},
		pick(e) {
			return function(e, t) {
				const n = e._zod.def, i = n.checks;
				if (i && i.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
				return Ra(e, Ia(e._zod.def, {
					get shape() {
						const e = {};
						for (const i in t) {
							if (!(i in n.shape)) throw new Error(`Unrecognized key: "${i}"`);
							t[i] && (e[i] = n.shape[i]);
						}
						return Sa(this, "shape", e), e;
					},
					checks: []
				}));
			}(this, e);
		},
		omit(e) {
			return function(e, t) {
				const n = e._zod.def, i = n.checks;
				if (i && i.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
				return Ra(e, Ia(e._zod.def, {
					get shape() {
						const i = { ...e._zod.def.shape };
						for (const e in t) {
							if (!(e in n.shape)) throw new Error(`Unrecognized key: "${e}"`);
							t[e] && delete i[e];
						}
						return Sa(this, "shape", i), i;
					},
					checks: []
				}));
			}(this, e);
		},
		partial(...e) {
			return function(e, t, n) {
				const i = t._zod.def.checks;
				if (i && i.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
				return Ra(t, Ia(t._zod.def, {
					get shape() {
						const i = t._zod.def.shape, a = { ...i };
						if (n) for (const t in n) {
							if (!(t in i)) throw new Error(`Unrecognized key: "${t}"`);
							n[t] && (a[t] = e ? new e({
								type: "optional",
								innerType: i[t]
							}) : i[t]);
						}
						else for (const t in i) a[t] = e ? new e({
							type: "optional",
							innerType: i[t]
						}) : i[t];
						return Sa(this, "shape", a), a;
					},
					checks: []
				}));
			}(jl, this, e[0]);
		},
		required(...e) {
			return t = Jl, n = this, i = e[0], Ra(n, Ia(n._zod.def, { get shape() {
				const e = n._zod.def.shape, a = { ...e };
				if (i) for (const n in i) {
					if (!(n in a)) throw new Error(`Unrecognized key: "${n}"`);
					i[n] && (a[n] = new t({
						type: "nonoptional",
						innerType: e[n]
					}));
				}
				else for (const n in e) a[n] = new t({
					type: "nonoptional",
					innerType: e[n]
				});
				return Sa(this, "shape", a), a;
			} }));
			var t, n, i;
		}
	});
});
function zl(e, t) {
	const n = {
		type: "object",
		shape: e ?? {},
		...Ea(t)
	};
	return new Tl(n);
}
const Ml = da("ZodUnion", (e, t) => {
	Or.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = !1 === a.inclusive, r = a.options.map((e, n) => bo(e, t, {
			...i,
			path: [
				...i.path,
				s ? "oneOf" : "anyOf",
				n
			]
		}));
		s ? n.oneOf = r : n.anyOf = r;
	})(e, t, n, i), e.options = t.options;
});
function Dl(e, t) {
	return new Ml({
		type: "union",
		options: e,
		...Ea(t)
	});
}
const Rl = da("ZodIntersection", (e, t) => {
	Pr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = bo(a.left, t, {
			...i,
			path: [
				...i.path,
				"allOf",
				0
			]
		}), r = bo(a.right, t, {
			...i,
			path: [
				...i.path,
				"allOf",
				1
			]
		}), o = (e) => "allOf" in e && 1 === Object.keys(e).length;
		n.allOf = [...o(s) ? s.allOf : [s], ...o(r) ? r.allOf : [r]];
	})(e, t, n, i);
}), El = da("ZodRecord", (e, t) => {
	Zr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = n, s = e._zod.def;
		a.type = "object";
		const r = s.keyType, o = r._zod.bag?.patterns;
		if ("loose" === s.mode && o && o.size > 0) {
			const e = bo(s.valueType, t, {
				...i,
				path: [
					...i.path,
					"patternProperties",
					"*"
				]
			});
			a.patternProperties = {};
			for (const t of o) a.patternProperties[t.source] = e;
		} else "draft-07" !== t.target && "draft-2020-12" !== t.target || (a.propertyNames = bo(s.keyType, t, {
			...i,
			path: [...i.path, "propertyNames"]
		})), a.additionalProperties = bo(s.valueType, t, {
			...i,
			path: [...i.path, "additionalProperties"]
		});
		const l = r._zod.values;
		if (l) {
			const e = [...l].filter((e) => "string" == typeof e || "number" == typeof e);
			e.length > 0 && (a.required = e);
		}
	})(e, t, n, i), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Cl(e, t, n) {
	return t && t._zod ? new El({
		type: "record",
		keyType: e,
		valueType: t,
		...Ea(n)
	}) : new El({
		type: "record",
		keyType: Yo(),
		valueType: e,
		...Ea(t)
	});
}
const Fl = da("ZodEnum", (e, t) => {
	qr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n) => {
		const i = ga(e._zod.def.entries);
		i.every((e) => "number" == typeof e) && (n.type = "number"), i.every((e) => "string" == typeof e) && (n.type = "string"), n.enum = i;
	})(e, 0, n), e.enum = t.entries, e.options = Object.values(t.entries);
	const n = new Set(Object.keys(t.entries));
	e.extract = (e, i) => {
		const a = {};
		for (const s of e) {
			if (!n.has(s)) throw new Error(`Key ${s} not found in enum`);
			a[s] = t.entries[s];
		}
		return new Fl({
			...t,
			checks: [],
			...Ea(i),
			entries: a
		});
	}, e.exclude = (e, i) => {
		const a = { ...t.entries };
		for (const t of e) {
			if (!n.has(t)) throw new Error(`Key ${t} not found in enum`);
			delete a[t];
		}
		return new Fl({
			...t,
			checks: [],
			...Ea(i),
			entries: a
		});
	};
});
function Ol(e, t) {
	const n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new Fl({
		type: "enum",
		entries: n,
		...Ea(t)
	});
}
const Pl = da("ZodTransform", (e, t) => {
	Gr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
	})(0, e), e._zod.parse = (n, i) => {
		if ("backward" === i.direction) throw new fa(e.constructor.name);
		n.addIssue = (i) => {
			if ("string" == typeof i) n.issues.push(qa(i, n.value, t));
			else {
				const t = i;
				t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), t.input ?? (t.input = n.value), t.inst ?? (t.inst = e), n.issues.push(qa(t));
			}
		};
		const a = t.transform(n.value, n);
		return a instanceof Promise ? a.then((e) => (n.value = e, n.fallback = !0, n)) : (n.value = a, n.fallback = !0, n);
	};
}), jl = da("ZodOptional", (e, t) => {
	Hr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => $o(e, t, 0, i), e.unwrap = () => e._zod.def.innerType;
});
function Bl(e) {
	return new jl({
		type: "optional",
		innerType: e
	});
}
const Zl = da("ZodExactOptional", (e, t) => {
	Jr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => $o(e, t, 0, i), e.unwrap = () => e._zod.def.innerType;
}), ql = da("ZodNullable", (e, t) => {
	Lr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = bo(a.innerType, t, i), r = t.seen.get(e);
		"openapi-3.0" === t.target ? (r.ref = a.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType;
});
function Gl(e) {
	return new ql({
		type: "nullable",
		innerType: e
	});
}
const Ul = da("ZodDefault", (e, t) => {
	Wr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		bo(a.innerType, t, i), t.seen.get(e).ref = a.innerType, n.default = JSON.parse(JSON.stringify(a.defaultValue));
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
}), Hl = da("ZodPrefault", (e, t) => {
	Kr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		bo(a.innerType, t, i), t.seen.get(e).ref = a.innerType, "input" === t.io && (n._prefault = JSON.parse(JSON.stringify(a.defaultValue)));
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType;
}), Jl = da("ZodNonOptional", (e, t) => {
	Yr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		bo(a.innerType, t, i), t.seen.get(e).ref = a.innerType;
	})(e, t, 0, i), e.unwrap = () => e._zod.def.innerType;
}), Ll = da("ZodCatch", (e, t) => {
	Qr.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		let s;
		bo(a.innerType, t, i), t.seen.get(e).ref = a.innerType;
		try {
			s = a.catchValue(void 0);
		} catch {
			throw new Error("Dynamic catch values are not supported in JSON Schema");
		}
		n.default = s;
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
}), Wl = da("ZodPipe", (e, t) => {
	eo.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = a.in._zod.traits.has("$ZodTransform"), r = "input" === t.io ? s ? a.out : a.in : a.out;
		bo(r, t, i), t.seen.get(e).ref = r;
	})(e, t, 0, i), e.in = t.in, e.out = t.out;
});
function Vl(e, t) {
	return new Wl({
		type: "pipe",
		in: e,
		out: t
	});
}
const Kl = da("ZodReadonly", (e, t) => {
	no.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		bo(a.innerType, t, i), t.seen.get(e).ref = a.innerType, n.readOnly = !0;
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType;
}), Yl = da("ZodCustom", (e, t) => {
	ao.init(e, t), Wo.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
	})(0, e);
}), Xl = Ol((Ql = u, Object.values(Ql)));
var Ql;
zl({
	password: Yo(),
	username: Yo().max(100, "Username must be 100 characters or fewer")
});
const ec = zl({
	onset_timestamp: _l().nullable().optional(),
	offset_timestamp: _l().nullable().optional(),
	marker_index: _l().int().default(1),
	marker_type: Xl.default(u.MAIN_SLEEP)
}), tc = zl({
	start_timestamp: _l().nullable().optional(),
	end_timestamp: _l().nullable().optional(),
	marker_index: _l().int().default(1)
}), nc = (zl({
	sleep_markers: Nl(ec).optional().default([]),
	nonwear_markers: Nl(tc).optional().default([]),
	explicit_no_nonwear: Sl().optional().default(!1),
	is_invalid_night: Sl().optional().default(!1),
	needs_consensus: Sl().optional().default(!1),
	notes: Yo().nullable().optional(),
	sleep_period_detection_config: Cl(Yo(), Al()).nullable().optional()
}), zl({
	timestamps: Nl(_l()).optional().default([]),
	axis_x: Nl(_l()).optional().default([]),
	axis_y: Nl(_l()).optional().default([]),
	axis_z: Nl(_l()).optional().default([]),
	vector_magnitude: Nl(_l()).optional().default([]),
	temperature: Nl(_l()).optional().default([]),
	lux: Nl(_l()).optional().default([]),
	melanopic_lux: Nl(_l()).optional().default([]),
	ggir_timestamps: Nl(_l()).optional().default([]),
	ggir_enmo: Nl(_l()).optional().default([]),
	ggir_anglez: Nl(_l()).optional().default([]),
	ggir_sib: Nl(_l()).optional().default([]),
	timestamps_30s: Nl(_l()).optional().default([]),
	axis_x_30s: Nl(_l()).optional().default([]),
	axis_y_30s: Nl(_l()).optional().default([]),
	axis_z_30s: Nl(_l()).optional().default([]),
	vector_magnitude_30s: Nl(_l()).optional().default([])
})), ic = zl({
	resolution_id: Yo(),
	epoch_length_seconds: _l().int().positive(),
	category: Yo(),
	source_type: Yo().nullable().optional(),
	derived_from_resolution_id: Yo().nullable().optional(),
	aggregation_method: Yo().nullable().optional(),
	data: nc,
	algorithm_results: Nl(_l()).nullable().optional(),
	nonwear_results: Nl(_l()).nullable().optional()
}), ac = (zl({
	data: nc.optional(),
	epoch_resolutions: Nl(ic).optional().default([]),
	timestamps: Nl(_l()).optional(),
	axis_x: Nl(_l()).optional(),
	axis_y: Nl(_l()).optional(),
	axis_z: Nl(_l()).optional(),
	vector_magnitude: Nl(_l()).optional(),
	temperature: Nl(_l()).optional(),
	algorithm_results: Nl(_l()).nullable().optional(),
	nonwear_results: Nl(_l()).nullable().optional(),
	nonwear_results_choi_2011: Nl(_l()).nullable().optional(),
	event_markers: Nl(Dl([_l(), Sl()])).optional().default([]),
	event_marker_timestamps: Nl(_l()).optional().default([]),
	view_start: _l().nullable().optional(),
	view_end: _l().nullable().optional(),
	sensor_nonwear_periods: Nl(zl({
		start_timestamp: _l(),
		end_timestamp: _l()
	})).optional().default([]),
	device_nonwear_source: Ol([
		"gt3x_capsense",
		"detach_nonwear",
		"actiware_off_wrist",
		"uploaded_wear_sensor"
	]).nullable().optional(),
	algorithmic_nonwear_masks: Cl(Yo(), Nl(_l())).optional()
}), n.diary_tolerance_minutes, n.nap_min_consecutive_epochs, n.epoch_length_seconds, [
	"observed",
	"not_collected",
	"structurally_absent",
	"not_applicable",
	"nonresponse",
	"technically_unusable",
	"corrupt",
	"censored",
	"below_detection",
	"redacted",
	"mapping_unresolved",
	"unknown"
]), sc = ac.filter((e) => "observed" !== e && "technically_unusable" !== e && "corrupt" !== e), rc = [
	"insufficient_still_windows",
	"required_calibration_evidence_unavailable",
	"calibration_evidence_unusable"
];
function oc(e, t, n, i) {
	const a = (/* @__PURE__ */ new Date()).toISOString(), s = function(e, t) {
		if (!e) return null;
		const n = function(e) {
			const t = [], { resolution_id: n, factory_parameters_availability: i, factory_parameters_artifact: a, auto_calibration_availability: s, auto_calibration_execution: r, selected_source: o, fallback_source: l, fallback_reason: c, fallback_policy_execution: u, refusal: d } = e;
			/\S/.test(n) || t.push("resolution_id must be non-blank"), ac.includes(i) || t.push(`factory_parameters_availability '${i}' is not an ObservationAvailability`), ac.includes(s) || t.push(`auto_calibration_availability '${s}' is not an ObservationAvailability`);
			const p = [
				o,
				l,
				d
			].filter((e) => void 0 !== e).length;
			if (1 !== p && t.push(`exactly one of selected_source/fallback_source/refusal is required, found ${String(p)}`), "observed" === i && void 0 === a && t.push("observed factory_parameters requires factory_parameters_artifact"), "observed" !== i && void 0 !== a && t.push("non-observed factory_parameters must not carry factory_parameters_artifact"), "observed" === s && void 0 === r && t.push("observed auto_calibration requires auto_calibration_execution"), "observed" !== s && void 0 !== r && t.push("non-observed auto_calibration must not carry auto_calibration_execution"), "factory_parameters" === o && "observed" !== i && t.push("selected_source=factory_parameters requires observed factory evidence"), "auto_calibration" === o && "observed" !== s && t.push("selected_source=auto_calibration requires observed auto-calibration evidence"), void 0 === l || void 0 !== c && void 0 !== u || t.push("fallback_source requires fallback_reason and fallback_policy_execution"), void 0 !== l || void 0 === c && void 0 === u || t.push("fallback provenance is only allowed alongside fallback_source"), d) {
				rc.includes(d.code) || t.push(`refusal.code '${d.code}' is not a CalibrationRefusalCode`), "insufficient_still_windows" === d.code && ("auto_calibration" !== d.blocked_source && t.push("insufficient_still_windows must block auto_calibration"), "technically_unusable" !== d.availability && t.push("insufficient_still_windows must use availability technically_unusable")), "required_calibration_evidence_unavailable" !== d.code || sc.includes(d.availability) || t.push(`required_calibration_evidence_unavailable cannot use availability '${d.availability}'`), "calibration_evidence_unusable" === d.code && "technically_unusable" !== d.availability && "corrupt" !== d.availability && t.push(`calibration_evidence_unusable cannot use availability '${d.availability}'`);
				const e = "factory_parameters" === d.blocked_source ? i : s, n = "factory_parameters" === d.blocked_source ? s : i;
				e !== d.availability && t.push(`refusal blocking ${d.blocked_source} must match that channel's availability ('${e}' vs '${d.availability}')`), "observed" === n && t.push("a refusal must not coexist with an observed alternate calibration source");
			}
			if (t.length > 0) throw new Error(`CalibrationSourceResolution is invalid: ${t.join("; ")}`);
			return e;
		}(function(e, t) {
			const n = {
				resolution_id: t.resolutionId,
				factory_parameters_availability: "not_collected"
			};
			if (!e) return {
				...n,
				auto_calibration_availability: "not_collected",
				refusal: {
					code: "required_calibration_evidence_unavailable",
					blocked_source: "auto_calibration",
					availability: "not_collected"
				}
			};
			switch (e.disposition) {
				case "recalibrated":
				case "candidate_retained_below_preferred_quality": return {
					...n,
					auto_calibration_availability: "observed",
					auto_calibration_execution: t.executionId,
					selected_source: "auto_calibration"
				};
				case "skipped_disabled": return {
					...n,
					auto_calibration_availability: "not_applicable",
					refusal: {
						code: "required_calibration_evidence_unavailable",
						blocked_source: "auto_calibration",
						availability: "not_applicable"
					}
				};
				case "identity_fallback_error_increased": return {
					...n,
					auto_calibration_availability: "technically_unusable",
					refusal: {
						code: "calibration_evidence_unusable",
						blocked_source: "auto_calibration",
						availability: "technically_unusable"
					}
				};
				case "identity_fallback_no_valid_fit": return e.observed.fitAttempted ? {
					...n,
					auto_calibration_availability: "technically_unusable",
					refusal: {
						code: "insufficient_still_windows",
						blocked_source: "auto_calibration",
						availability: "technically_unusable"
					}
				} : {
					...n,
					auto_calibration_availability: "not_collected",
					refusal: {
						code: "required_calibration_evidence_unavailable",
						blocked_source: "auto_calibration",
						availability: "not_collected"
					}
				};
			}
		}(e, {
			resolutionId: `local:file-${String(t)}:calibration`,
			executionId: `local:file-${String(t)}:actours-part1-autocalibration`
		})), i = e.applied;
		return {
			scale: i.scale,
			offset: i.offset,
			errorStart: i.errorStart,
			errorEnd: i.errorEnd,
			numPoints: i.numPoints,
			hoursUsed: i.hoursUsed,
			fitAttempted: i.fitAttempted,
			success: i.success,
			disposition: e.disposition,
			message: i.message,
			resolution: n
		};
	}(n, t), r = (e, t = 0) => "number" == typeof e && Number.isFinite(e) ? e : t;
	return e.map((e) => ({
		fileId: t,
		analysisDate: e.calendarDate,
		...i ? { ggirConfigSha256: i.sha256 } : {},
		...e.lmWindows ? { lmWindows: e.lmWindows } : {},
		totalSleepTimeMinutes: r(e.tstMinutes),
		wasoMinutes: r(e.wasoMinutes),
		sleepEfficiency: 100 * r(e.sleepEfficiency),
		mvpaMinutes: r(e.mvpaMinutes),
		moderateMinutes: Number.isFinite(e.moderateMinutes) ? e.moderateMinutes : null,
		vigorousMinutes: Number.isFinite(e.vigorousMinutes) ? e.vigorousMinutes : null,
		lpaMinutes: r(e.lightMinutes),
		sedentaryMinutes: r(e.sedentaryMinutes),
		l5MidpointHour: r(e.l5MidpointHour),
		m5MidpointHour: r(e.m5MidpointHour),
		intensityGradient: Number.isFinite(e.igGradient) ? e.igGradient : null,
		nonwearMinutes: 60 * r(e.nonwearHours),
		validHours: r(e.validHours),
		cleaningCode: e.cleaningCode ?? null,
		fragmentationTpIn2Ac: Number.isFinite(e.fragTpIn2ac) ? e.fragTpIn2ac : null,
		fragmentationTpAc2In: Number.isFinite(e.fragTpAc2in) ? e.fragTpAc2in : null,
		fragmentCount: Number.isFinite(e.nFragments) ? e.nFragments : null,
		includeDayCriterionHours: e.includeDayCriterionHours,
		meetsIncludeDayCriterion: e.meetsIncludeDayCriterion,
		calibration: s,
		createdAt: a,
		updatedAt: a
	}));
}
const lc = "Re-import this file to compute GGIR's invalid mask.", cc = "Hip HDCZA needs the longitudinal angle (anglex or angley), which this recording lacks on GGIR's grid; no night was placed.";
function uc(e) {
	return e.isInvalidNight || e.sleepMarkers.some((e) => function(e, t = !1) {
		return "auto" !== e.source || function(e, t = !1) {
			if (!0 === e.edited || t) return !0;
			const n = e.placement;
			return aa(e.onsetTimestamp, n?.onset_timestamp) || aa(e.offsetTimestamp, n?.offset_timestamp);
		}(e, t);
	}(e));
}
async function dc(e, t, n, i) {
	return e.nightIntervalOverlap(t, n, Float64Array.from(i, ([e]) => e), Float64Array.from(i, ([, e]) => e), Float64Array.from(i, ([, , e]) => void 0 !== e && void 0 === e.unavailable ? e.weight : 0));
}
function pc(e, t) {
	const n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
	for (const [a, [, , s]] of t.entries()) if (s && e[a] > 0) {
		for (const e of s.detectors) n.add(e);
		for (const e of s.dropped ?? []) i.has(e.detector) || i.set(e.detector, e);
	}
	for (const a of n) i.delete(a);
	return {
		available: [...n],
		dropped: [...i.values()]
	};
}
async function fc(e, t, n, i) {
	const a = i.map(async ([, , i]) => {
		if (!i?.memberFlags || !i.timestamps) return [];
		const { memberFlags: a } = i, s = await e.epochsOverlapping(Float64Array.from(i.timestamps).subarray(0, a.length), 60, t, n);
		return s ? e.nonwearContributors([...a], Ht(i.detectors), s[0], s[1]) : [];
	});
	return Ht([...new Set((await Promise.all(a)).flat())]);
}
async function mc(e, t, n, i, a, s, r) {
	const o = vn(t, n), l = Object.fromEntries(Object.entries(o).map(([e, t]) => [e, new Uint8Array(t)])), c = We(t) ?? await it(e, 60, r), u = await An(a, l, {
		offPeriods: i,
		source: s
	}, {
		timestampsSec: e,
		epochLenSec: c
	}, r);
	return null === u || 0 === e.length ? [] : "unavailable" in u ? [[
		e[0],
		e[e.length - 1] + c,
		{
			detectors: [],
			weight: 0,
			unavailable: u.unavailable
		}
	]] : async function(e, t, n, i) {
		const a = await i.nonwearWeightRuns(Float64Array.from(t), Float64Array.from(e.weight), n);
		if (!a) return [];
		const s = e.available.length > 1 ? {
			memberFlags: e.memberFlags,
			timestamps: t
		} : {};
		return [[
			a.dayStart,
			a.dayEnd,
			{
				detectors: e.available,
				weight: 0,
				dropped: e.dropped,
				...s
			}
		], ...a.starts.map((t, n) => [
			t,
			a.ends[n],
			{
				detectors: e.available,
				weight: a.weights[n]
			}
		])];
	}(u, e, c, r);
}
async function hc(e, t, n = [], i = [], a = {}, s = null, r = b()) {
	const o = [], l = n.map(([e, t]) => ({
		startTimestamp: e,
		endTimestamp: t
	}));
	for (const [c, u] of Object.entries(e)) {
		const e = t[c]?.timestamps;
		e && 0 !== e.length && o.push(...await mc(e, {
			nonwearResults: u.nonwear.buffer,
			nonwearResultsChoi2011: u.nonwearChoi2011?.buffer ?? null,
			detachNonwear: u.detachNonwear?.buffer ?? null,
			...a[c]
		}, "", l, i, s, r));
	}
	return o;
}
async function gc(e, t, n, i = Cn, a) {
	return En((a) => {
		if (!e) return [];
		const s = [];
		for (const { start: r, end: o } of Ne(e)) {
			if (!r || !o) continue;
			const e = a.resolveSpan(r, o, t, x.daytime, i);
			e && s.push({
				markerType: u.NAP,
				markerIndex: n + s.length + 1,
				onsetTimestamp: e[0],
				offsetTimestamp: e[1]
			});
		}
		return s;
	}, new On(a));
}
function yc(e) {
	const t = e instanceof Error ? e.message : "";
	return t.startsWith("runGgirPart3:") ? t : t.includes("timed out") ? `it timed out after ${String(B / 6e4)} minutes` : t.includes("is not a function") ? "this build's actours WASM has no runGgirPart3 export" : "the actours WASM runtime failed (out of memory or a Rust panic)";
}
async function wc(e, t, n, i = [], a = /* @__PURE__ */ new Map(), s, r, o, l = "wrist", c = F(), d, f, m, h, g, y) {
	const w = c, v = r?.ggirConfig ?? await ui(w), k = t.length;
	if (0 === k) return null;
	const S = a.values().next().value;
	S && ve(e, S.importMappingProvenance);
	const I = f ?? b(), A = m ?? (() => _(I)), x = await ca(l, s?.variant, I), $ = x.variant, N = x.sensorLocation, T = {
		...o ?? {},
		haspt_variant: $,
		hdcza_proposal_revision: 6,
		ggir_config_sha256: v.sha256
	}, z = r?.angley5s, M = r?.anglex5s, D = z && z.length === k ? z : void 0, R = M && M.length === k ? M : void 0, E = r?.invalid5s?.length === k ? r.invalid5s : void 0, C = void 0 !== g && void 0 !== E;
	if (void 0 === E) return lc;
	const O = "hip" === N && !D && !R;
	if (O && (console.warn("[local-processing] Hip HDCZA was skipped because no aligned longitudinal axis was available."), !C)) return cc;
	let P = !1;
	const q = r?.dstRuns ?? [], U = E, H = r?.activity5s?.length === k ? r.activity5s : void 0;
	j(d, "before local HASPT placement");
	const J = await G(I, (e) => e.runGgirPart3({
		anglez: t,
		ggirConfigCsv: v.csvText,
		hasibCounts: Ke(v.csvText, r?.zeroCrossings5s),
		...R ? { anglex: R } : {},
		...D ? { angley: D } : {},
		...H ? { enmo: H } : {},
		invalid: U,
		startTsEpochSec: n,
		hasptAlgo: $,
		...void 0 !== s?.config ? { hasptConfig: s.config } : {},
		..."hip" !== N || R && D ? {} : { longitudinalAxis: D ? 2 : 1 },
		...r?.timezone ? { timezone: r.timezone } : {}
	}), {
		ms: B,
		label: `local ${$} placement`,
		signal: d,
		cancel: A
	}).then((e) => ({
		result: e,
		failure: null
	}), (e) => (Z(e, d, `local ${$} placement`), console.warn("[local-processing] GGIR Part 3 failed for this recording."), {
		result: null,
		failure: yc(e)
	}));
	if (J.result && C && g(J.result.part3Sib5s), O) return cc;
	if (!J.result) return `GGIR Part 3 (${$}) failed: ${J.failure}`;
	const L = J.result.part3SptNights, W = await I.ggirIndicesToWallClockMs(Uint32Array.from(L.flatMap((e) => [e.onsetIdx, e.wakeIdx])), 1e3 * n, [...q], r?.wallClockMs ? Float64Array.from(r.wallClockMs) : void 0), V = L.map((e, t) => ({
		onsetTimestamp: W[2 * t] / 1e3,
		offsetTimestamp: W[2 * t + 1] / 1e3,
		analysisDate: e.analysisDate
	}));
	for (const { onsetTimestamp: _, offsetTimestamp: b, analysisDate: F } of V) {
		j(d, "before local HASPT marker placement");
		const t = await $t(e, F, Mt, p.VAN_HEES_2015, null, w);
		if (t && uc(t)) continue;
		const n = await dc(I, _, b, i), s = pc(n.seconds, i), r = 0 === s.available.length && 0 === s.dropped.length ? T : {
			...T,
			nonwear_detectors_available: s.available,
			nonwear_detectors_dropped: s.dropped.map(({ detector: e, reason: t }) => ({
				detector: e,
				reason: t
			}))
		}, c = $n(s.dropped, "ggir"), f = (e) => [e, ...c].join("; "), m = n.weightedFraction, g = m > 0 && s.available.length > 1 ? await fc(I, _, b, i) : null, v = await gc(a.get(F) ?? null, F, 1, bt(e), I), k = fn(null, l), S = [{
			markerType: u.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: _,
			offsetTimestamp: b
		}, ...v].map((e) => ({
			...e,
			source: "auto",
			settingsHash: k
		}));
		j(d, "before local HASPT marker persistence"), await ai({
			signal: d,
			fileId: e,
			date: F,
			expected: Dt(t),
			username: "auto_score",
			sleepMarkers: S,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: f(`${$} SPT: ${Et(_)} → ${Et(b)}` + (v.length > 0 ? `; ${v.length} diary nap(s)` : "") + (m > 0 ? `; selected-detector nonwear overlap ${Math.round(100 * m)}%` : "") + (g ? ` from ${bn(g, s.available.length)}` : "")),
			algorithm: p.VAN_HEES_2015,
			sleepPeriodDetectionConfig: r
		}, w, {
			...h ? { binding: h } : {},
			events: () => h ? [{
				action: "auto_score_applied",
				payload: zt({
					algorithm: p.VAN_HEES_2015,
					sleepPeriodDetection: o ?? null,
					sleepCount: 1,
					napCount: v.length,
					markers: S
				})
			}] : []
		}).then(() => !0, (e) => (Z(e, d, "local HASPT marker persistence"), console.warn("[local-processing] HDCZA marker persistence failed."), P = !0, !1)) && y?.(F);
	}
	return P ? "one or more auto-marker writes failed" : null;
}
const _c = [
	"analysis_date",
	"epoch_length_seconds",
	"timestamps",
	"activity_counts",
	"sleep_scores",
	"choi_nonwear",
	"sensor_nonwear",
	"diary_onset_time",
	"diary_wake_time",
	"diary_nap_count",
	"diary_naps",
	"diary_nonwear",
	"diary_in_bed_time",
	"diary_out_bed_time",
	"is_weekend",
	"guider_targets",
	"anglez",
	"light",
	"temperature",
	"heart_rate",
	"detach_nonwear",
	"calibration_error",
	"imputed_fraction",
	"hdcza_window"
];
function vc(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function bc(e) {
	return JSON.stringify(e);
}
function kc(e) {
	const t = vc(e.config), n = vc(t?.signals) ?? t;
	return {
		...n ? { config: n } : {},
		days: e.days
	};
}
function Sc(e) {
	return JSON.stringify(kc(e));
}
function Ic(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function Ac(e) {
	const t = Ic(e), n = t?.analysis_date, i = Ic(t?.intrinsic), a = i?.state;
	if (!t || "string" != typeof n || 0 === n.length || !i || "string" != typeof a || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(a)) return null;
	const s = i.score, r = i.verdict, o = i.infinite_reason, l = {}, c = [], u = t.per_guider;
	if (Array.isArray(u)) for (const h of u) {
		const e = Ic(h);
		if (!e) continue;
		c.push(e);
		const t = e.guider;
		if ("string" != typeof t) continue;
		const n = e.confidence;
		Object.defineProperty(l, t, {
			value: "number" == typeof n && Number.isFinite(n) ? n : null,
			enumerable: !0,
			configurable: !0,
			writable: !0
		});
	}
	const d = Ic(i.features), p = d && Array.isArray(d.feature_values) ? d : null, f = Ic(i.legacy_complexity_features) ?? (null === p ? d : null) ?? {}, m = t.computed_at;
	return {
		difficulty: "number" == typeof s && Number.isFinite(s) ? s : null,
		state: a,
		verdict: "string" == typeof r ? r : null,
		infiniteReason: "string" == typeof o ? o : null,
		confidenceByGuider: l,
		features: f,
		featureVector: p,
		perGuider: c,
		computedAt: "string" == typeof m ? m : null,
		canonicalResult: t,
		canonicalIntrinsic: i
	};
}
const xc = /^[0-9a-f]{64}$/;
var $c = class extends Error {
	constructor(e = !1) {
		super(e ? "Stored complexity evidence failed integrity verification." : "Complexity evidence failed integrity verification."), this.name = "ComplexityEvidenceIntegrityError";
	}
}, Nc = class extends Error {
	constructor() {
		super("Complexity evidence diverged for an existing generation."), this.name = "ComplexityEvidenceDivergenceError";
	}
}, Tc = class extends Error {
	constructor() {
		super("Complexity evidence is older than the retained generation window."), this.name = "ComplexityEvidenceRetentionError";
	}
};
function zc(e = !1) {
	throw new $c(e);
}
function Mc(e) {
	"string" == typeof e && xc.test(e) || zc();
}
function Dc(e) {
	"string" == typeof e && 0 !== e.length && Number.isFinite(Date.parse(e)) || zc();
}
function Rc(e) {
	if (null === e) return "null";
	switch (typeof e) {
		case "string":
		case "boolean": return JSON.stringify(e);
		case "number": return Number.isFinite(e) || zc(), JSON.stringify(Object.is(e, -0) ? 0 : e);
		case "object": {
			if (Array.isArray(e)) {
				const t = [];
				for (let n = 0; n < e.length; n += 1) n in e || zc(), t.push(Rc(e[n]));
				return `[${t.join(",")}]`;
			}
			const t = Object.getPrototypeOf(e);
			t !== Object.prototype && null !== t && zc(), Object.getOwnPropertySymbols(e).length > 0 && zc();
			const n = e, i = [];
			for (const e of Object.keys(n).sort()) {
				const t = Object.getOwnPropertyDescriptor(n, e);
				t && "value" in t && t.enumerable || zc(), i.push(`${JSON.stringify(e)}:${Rc(t.value)}`);
			}
			return `{${i.join(",")}}`;
		}
		default: return zc();
	}
}
function Ec(e) {
	const t = Rc(e), n = JSON.parse(t);
	return (null == n || "object" != typeof n || Array.isArray(n)) && zc(), n;
}
async function Cc(e) {
	return O(Rc(e));
}
function Fc(e) {
	const t = e;
	for (const i of [
		"contractVersion",
		"crateVersion",
		"target",
		"semanticProfile",
		"profileProofStatus",
		"temporalBasis"
	]) "string" == typeof t[i] && "" !== t[i] || zc();
	null === t.sourceRevision || "string" == typeof t.sourceRevision && "" !== t.sourceRevision || zc(), Mc(t.artifactSha256);
	const n = t.compiledFeatures;
	Array.isArray(n) && n.every((e) => "string" == typeof e && e.length > 0) || zc(), Rc(e);
}
async function Oc(e, t) {
	"string" != typeof e && zc(), void 0 !== t && Mc(t);
	let n = 0;
	for (; n < e.length && /\s/.test(e[n]);) n += 1;
	let i = e.length - 1;
	for (; i >= n && /\s/.test(e[i]);) i -= 1;
	"{" === e[n] && "}" === e[i] || zc();
	const a = await O(e);
	return void 0 !== t && t !== a && zc(), a;
}
function Pc(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != typeof t || null === e || null === t) return !1;
	if (Array.isArray(e) || Array.isArray(t)) return !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((e, n) => Pc(e, t[n]));
	if ("object" != typeof e || "object" != typeof t) return !1;
	const n = Object.keys(e).sort(), i = Object.keys(t).sort();
	if (n.length !== i.length || n.some((e, t) => e !== i[t])) return !1;
	const a = e, s = t;
	return n.every((e) => Pc(a[e], s[e]));
}
function jc(e) {
	try {
		const t = JSON.parse(e);
		return (null === t || "object" != typeof t || Array.isArray(t)) && zc(), t;
	} catch {
		return zc();
	}
}
function Bc(e, t) {
	const n = Object.keys(e).sort(), i = [...t].sort();
	return n.length === i.length && n.every((e, t) => e === i[t]);
}
function Zc(e) {
	return "number" == typeof e && Number.isFinite(e);
}
function qc(e) {
	return null === e || "string" == typeof e && e.length > 0;
}
function Gc(e) {
	return Array.isArray(e) && e.every(Zc);
}
function Uc(e) {
	return Array.isArray(e) && e.every((e) => Number.isInteger(e) && (0 === e || 1 === e));
}
function Hc(e, t) {
	return 0 === e.length || e.length === t;
}
function Jc(e) {
	Array.isArray(e) || zc();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && zc();
		const e = t, n = e.start_ts, i = e.end_ts;
		Bc(e, ["start_ts", "end_ts"]) && Zc(n) && Zc(i) && !(i < n) || zc();
	}
}
function Lc(e, t) {
	Array.isArray(e) && e.length === t || zc();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && zc();
		const e = n;
		Bc(e, ["onset_time", "offset_time"]) && "string" == typeof e.onset_time && 0 !== e.onset_time.length && qc(e.offset_time) || zc();
	}
}
function Wc(e) {
	Array.isArray(e) || zc();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && zc();
		const e = t;
		Bc(e, ["start_time", "end_time"]) && "string" == typeof e.start_time && 0 !== e.start_time.length && "string" == typeof e.end_time && 0 !== e.end_time.length || zc();
	}
}
function Vc(e) {
	Array.isArray(e) || zc();
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && zc();
		const e = n, i = e.guider, a = e.detector, s = e.onset_ts, r = e.offset_ts;
		(!Bc(e, [
			"guider",
			"detector",
			"onset_ts",
			"offset_ts"
		]) || "string" != typeof i || 0 === i.length || t.has(i) || !qc(a) || null !== s && !Zc(s) || null !== r && !Zc(r) || null === s && null === r) && zc(), t.set(i, {
			detector: a,
			onset: s,
			offset: r
		});
	}
	return t;
}
function Kc(e) {
	if (null === e) return null;
	Array.isArray(e) && 2 === e.length || zc();
	const t = e[0], n = e[1];
	return (!Zc(t) || !Zc(n) || n <= t) && zc(), [t, n];
}
function Yc(e, t) {
	const n = jc(e), i = void 0 === n.config ? ["days"] : ["config", "days"], a = n.days;
	Bc(n, i) && Array.isArray(a) || zc(), void 0 === n.config || null !== n.config && "object" == typeof n.config && !Array.isArray(n.config) || zc();
	const s = /* @__PURE__ */ new Set();
	for (const o of a) {
		(null === o || "object" != typeof o || Array.isArray(o)) && zc();
		const e = o;
		Bc(e, _c) || zc();
		const t = e.analysis_date, n = e.epoch_length_seconds, i = e.timestamps, a = e.activity_counts, r = e.sleep_scores, l = e.choi_nonwear, c = e.diary_nap_count, u = e.anglez, d = e.light, p = e.temperature, f = e.heart_rate, m = e.detach_nonwear, h = e.is_weekend, g = e.calibration_error, w = e.imputed_fraction;
		!("string" != typeof t || 0 === t.length || s.has(t) || "number" != typeof n || !Number.isInteger(n) || n <= 0) && Gc(i) && 0 !== i.length && Gc(a) && a.length === i.length && Uc(r) && r.length === i.length && Uc(l) && Hc(l, i.length) && Number.isInteger(c) && !(c < 0) && qc(e.diary_onset_time) && qc(e.diary_wake_time) && qc(e.diary_in_bed_time) && qc(e.diary_out_bed_time) && (null === h || "boolean" == typeof h) && Gc(u) && Hc(u, i.length) && Gc(d) && Hc(d, i.length) && Gc(p) && Hc(p, i.length) && Gc(f) && Hc(f, i.length) && Uc(m) && Hc(m, i.length) && (null === g || Zc(g)) && (null === w || !(!Zc(w) || w < 0 || w > 1)) || zc(), Jc(e.sensor_nonwear), Lc(e.diary_naps, c), Wc(e.diary_nonwear);
		const _ = Vc(e.guider_targets), v = Kc(e.hdcza_window), b = _.get(y.HDCZA);
		(null === v && void 0 !== b || null !== v && (void 0 === b || null !== b.detector || b.onset !== v[0] || b.offset !== v[1])) && zc(), s.add(t);
	}
	const r = n;
	return Pc(jc(t), kc(r)) || zc(), {
		difficulty: r,
		dates: s
	};
}
function Xc(e, t, n, i) {
	Bc(t, ["config", "days"]) || zc(), Pc(t.config, e.difficulty.config ?? null) || zc();
	const a = t.days;
	Array.isArray(a) && a.length === e.difficulty.days.length || zc();
	for (let o = 0; o < a.length; o += 1) {
		const t = a[o], n = e.difficulty.days[o];
		(null === t || "object" != typeof t || Array.isArray(t) || null === n || "object" != typeof n || Array.isArray(n)) && zc();
		const i = t, s = n;
		Bc(i, [
			"analysis_date",
			"epoch_length_seconds",
			"timestamps"
		]) && i.analysis_date === s.analysis_date && i.epoch_length_seconds === s.epoch_length_seconds && Pc(i.timestamps, s.timestamps) || zc();
	}
	const s = Object.keys(n);
	(s.length !== e.dates.size || s.some((t) => !e.dates.has(t))) && zc();
	const r = new Map(e.difficulty.days.map((e) => [e.analysis_date, e]));
	for (const [o, l] of Object.entries(n)) {
		(null === l || "object" != typeof l || Array.isArray(l)) && zc();
		const e = l, t = Ac(e.canonicalResult);
		null !== t && t.canonicalResult.analysis_date === o && Pc(e, t) || zc();
	}
	if (null !== i) {
		const t = Object.keys(i);
		(t.length !== e.dates.size || t.some((t) => !e.dates.has(t))) && zc();
		for (const [e, n] of Object.entries(i)) {
			(null === n || "object" != typeof n || Array.isArray(n)) && zc();
			const t = n, i = r.get(e);
			t.analysis_date === e && Number.isInteger(t.epoch_length_seconds) && t.epoch_length_seconds === i?.epoch_length_seconds || zc();
		}
	}
}
async function Qc(e) {
	return Cc(function(e) {
		return {
			evidenceContractId: e.evidenceContractId,
			difficultyMethodId: e.difficultyMethodId,
			signalsMethodId: e.signalsMethodId,
			requestContractId: e.requestContractId,
			sourceContentHash: e.sourceContentHash,
			runtimeIdentity: e.runtimeIdentity,
			difficultyRequestSha256: e.difficultyRequestSha256,
			signalsRequestSha256: e.signalsRequestSha256
		};
	}(e));
}
async function eu(e) {
	try {
		Fc(e.runtimeIdentity), null !== e.sourceContentHash && Mc(e.sourceContentHash);
		const t = Ec(e.runtimeIdentity), n = await Oc(e.difficultyRequestWireJson, e.difficultyRequestSha256), i = await Oc(e.signalsRequestWireJson, e.signalsRequestSha256);
		Yc(e.difficultyRequestWireJson, e.signalsRequestWireJson);
		const a = {
			evidenceContractId: "sleep-scoring.complexity-evidence.v1",
			difficultyMethodId: "actours.computeNightDifficulty",
			signalsMethodId: "actours.computeNightSignals",
			requestContractId: "FileDifficultyRequest",
			sourceContentHash: e.sourceContentHash,
			runtimeIdentity: t,
			difficultyRequestWireJson: e.difficultyRequestWireJson,
			signalsRequestWireJson: e.signalsRequestWireJson,
			difficultyRequestSha256: n,
			signalsRequestSha256: i
		};
		return {
			...a,
			generationKey: await Qc(a)
		};
	} catch (t) {
		if (t instanceof $c) throw t;
		return zc();
	}
}
async function tu(e) {
	return Cc(function(e) {
		return {
			generationKey: e.generationKey,
			evidenceContractId: e.evidenceContractId,
			difficultyMethodId: e.difficultyMethodId,
			signalsMethodId: e.signalsMethodId,
			requestContractId: e.requestContractId,
			sourceContentHash: e.sourceContentHash,
			runtimeIdentity: e.runtimeIdentity,
			difficultyRequestSha256: e.difficultyRequestSha256,
			signalsRequestSha256: e.signalsRequestSha256,
			projectionSha256: e.projectionSha256,
			difficultyResultSha256: e.difficultyResultSha256,
			signalsResultSha256: e.signalsResultSha256,
			signalsPresent: null !== e.signalsResultSha256,
			createdAt: e.createdAt,
			updatedAt: e.updatedAt
		};
	}(e));
}
function nu(e, t) {
	void 0 !== t && (null !== t && Mc(t), e !== t && zc());
}
async function iu(e) {
	(!Number.isInteger(e.fileId) || e.fileId <= 0) && zc(), void 0 !== e.id && (!Number.isInteger(e.id) || e.id <= 0) && zc();
	for (const o of [
		e.generationKey,
		e.difficultyRequestSha256,
		e.signalsRequestSha256,
		e.projectionSha256,
		e.difficultyResultSha256,
		e.recordSha256
	]) Mc(o);
	null !== e.signalsResultSha256 && Mc(e.signalsResultSha256), null !== e.sourceContentHash && Mc(e.sourceContentHash), "sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || zc(), Fc(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || zc(), await Oc(e.difficultyRequestWireJson, e.difficultyRequestSha256), await Oc(e.signalsRequestWireJson, e.signalsRequestSha256);
	const t = Yc(e.difficultyRequestWireJson, e.signalsRequestWireJson);
	Dc(e.createdAt), Dc(e.updatedAt), Date.parse(e.updatedAt) < Date.parse(e.createdAt) && zc(), null === e.signalsByDate != (null === e.signalsResultSha256) && zc();
	const n = Ec(e.projectionInput), i = Ec(e.difficultyByDate), a = null === e.signalsByDate ? null : Ec(e.signalsByDate);
	Xc(t, n, i, a);
	const s = {
		evidenceContractId: e.evidenceContractId,
		difficultyMethodId: e.difficultyMethodId,
		signalsMethodId: e.signalsMethodId,
		requestContractId: e.requestContractId,
		sourceContentHash: e.sourceContentHash,
		runtimeIdentity: Ec(e.runtimeIdentity),
		difficultyRequestWireJson: e.difficultyRequestWireJson,
		signalsRequestWireJson: e.signalsRequestWireJson,
		difficultyRequestSha256: e.difficultyRequestSha256,
		signalsRequestSha256: e.signalsRequestSha256
	};
	await Qc(s) !== e.generationKey && zc(), await Cc(n) !== e.projectionSha256 && zc(), await Cc(i) !== e.difficultyResultSha256 && zc(), null !== a && await Cc(a) !== e.signalsResultSha256 && zc();
	const r = {
		...void 0 !== e.id ? { id: e.id } : {},
		fileId: e.fileId,
		generationKey: e.generationKey,
		...s,
		projectionSha256: e.projectionSha256,
		difficultyResultSha256: e.difficultyResultSha256,
		signalsResultSha256: e.signalsResultSha256,
		recordSha256: e.recordSha256,
		projectionInput: n,
		difficultyByDate: i,
		signalsByDate: a,
		createdAt: e.createdAt,
		updatedAt: e.updatedAt
	};
	return await tu(r) !== e.recordSha256 && zc(), r;
}
async function au(e) {
	try {
		return await iu(e);
	} catch {
		throw new $c(!0);
	}
}
function su(e, t, n = !1) {
	if (!t) throw new $c(n);
	if (null !== e.sourceContentHash && t.sourceContentHash !== e.sourceContentHash) throw new $c(n);
}
async function ru(e, t, n) {
	await pn({
		op: "complexity_evidence_put",
		fileId: e.fileId,
		payload: {
			kind: t,
			sourceBound: null !== e.sourceContentHash,
			signalsPresent: null !== e.signalsByDate,
			evictedCount: n
		}
	});
}
async function ou(e, t, n = F()) {
	const [i, a] = await n.transaction("r", [n.files, n.complexityEvidence], async () => Promise.all([n.complexityEvidence.where("[fileId+generationKey]").equals([e, t]).first(), n.files.get(e)]));
	if (!i) return;
	const s = await au(i);
	return su(s, a, !0), s;
}
function lu(e, t) {
	const n = [
		...Bn(e, fu, t),
		...Pn(e, fu),
		...jn(e, fu, t)
	];
	e.activity_column || n.push({
		key: "activity_column",
		message: "Map an activity/counts column."
	});
	const i = Boolean(e.datetime_column), a = Boolean(e.date_column && e.time_column);
	return i || a || n.push({
		key: "timestamp",
		message: "Map Date/time, or map both Date and Time."
	}), n;
}
function cu(e, t) {
	const n = uu(e, t), i = Boolean(e.datetime_column), a = Boolean(e.date_column && e.time_column);
	return i || a || n.push({
		key: "timestamp",
		message: "Map Date/time, or map both Date and Time."
	}), e.mims_unit_column || n.push({
		key: "mims_unit_column",
		message: "Map a MIMS unit column."
	}), n;
}
function uu(e, t) {
	return [
		...Bn(e, fu, t),
		...Pn(e, fu),
		...jn(e, fu, t)
	];
}
const du = [30, 60];
function pu(e) {
	return du.includes(e);
}
const fu = [
	{
		key: "date_column",
		label: "Date",
		aliases: [
			"date",
			"startdate",
			"analysis_date",
			"analysisdate",
			"day"
		],
		required: !1,
		uiGroup: "Time base",
		dataType: "date",
		valueKind: "date_field"
	},
	{
		key: "time_column",
		label: "Time",
		aliases: [
			"time",
			"timestamp_time",
			"clock_time"
		],
		required: !1,
		uiGroup: "Time base",
		dataType: "time",
		valueKind: "temporal_point"
	},
	{
		key: "datetime_column",
		label: "Date/time",
		aliases: [
			"datetime",
			"timestamp",
			"date_time",
			"timestamp_ms"
		],
		required: !1,
		uiGroup: "Time base",
		dataType: "datetime",
		valueKind: "datetime"
	},
	{
		key: "activity_column",
		label: "Activity / Y axis",
		aliases: [
			"activity",
			"axis1",
			"axis_1",
			"axis_y",
			"y",
			"counts",
			"activity_count",
			"pim",
			"tat",
			"zcm"
		],
		required: !0,
		uiGroup: "Activity signal",
		dataType: "float",
		valueKind: "activity_count"
	},
	{
		key: "axis_x_column",
		label: "X axis",
		aliases: [
			"axis2",
			"axis_2",
			"axis_x",
			"x",
			"x_count",
			"x_counts"
		],
		required: !1,
		uiGroup: "Raw axes",
		dataType: "float",
		valueKind: "axis_count"
	},
	{
		key: "axis_z_column",
		label: "Z axis",
		aliases: [
			"axis3",
			"axis_3",
			"axis_z",
			"z",
			"z_count",
			"z_counts"
		],
		required: !1,
		uiGroup: "Raw axes",
		dataType: "float",
		valueKind: "axis_count"
	},
	{
		key: "vector_magnitude_column",
		label: "Vector magnitude",
		aliases: [
			"vector_magnitude",
			"vm",
			"magnitude"
		],
		required: !1,
		uiGroup: "Activity signal",
		dataType: "float",
		valueKind: "vector_magnitude"
	},
	{
		key: "enmo_column",
		label: "ENMO",
		aliases: [
			"enmo",
			"enmo_mg",
			"enmo_milli_g",
			"ENMO"
		],
		required: !1,
		uiGroup: "GGIR / derived metrics",
		dataType: "float",
		valueKind: "acceleration_metric",
		canonicalUnit: "mg",
		acceptedUnits: ["mg", "g"]
	},
	{
		key: "anglez_column",
		label: "Angle Z",
		aliases: [
			"anglez",
			"angle_z",
			"angle_z_degrees",
			"anglez_degrees"
		],
		required: !1,
		uiGroup: "GGIR / derived metrics",
		dataType: "float",
		valueKind: "angle",
		canonicalUnit: "deg",
		acceptedUnits: ["deg", "degrees"]
	},
	{
		key: "ggir_sib_column",
		label: "GGIR SIB / sleep flag",
		aliases: [
			"sib",
			"ggir_sib",
			"hasib",
			"sleep_flag",
			"sleep_wake",
			"sleepwake",
			"sleepsib"
		],
		required: !1,
		uiGroup: "Quality flags",
		dataType: "bool",
		valueKind: "sleep_flag"
	},
	{
		key: "ggir_nonwear_column",
		label: "GGIR nonwear flag",
		aliases: [
			"nonwear",
			"nonwear_flag",
			"invalid",
			"invalid_flag",
			"wear",
			"wear_flag",
			"mask"
		],
		required: !1,
		uiGroup: "Quality flags",
		dataType: "bool",
		valueKind: "nonwear_flag"
	},
	{
		key: "event_marker_column",
		label: "Event marker / button press",
		aliases: [
			"marker",
			"event_marker",
			"eventmarker",
			"event",
			"button",
			"marker_event",
			"event_marker_button"
		],
		required: !1,
		uiGroup: "Quality flags",
		dataType: "bool",
		valueKind: "event_marker"
	},
	{
		key: "mims_unit_column",
		label: "MIMS unit",
		aliases: [
			"mims_unit",
			"mims",
			"mimsunit",
			"mims_units",
			"mims_triaxial"
		],
		required: !1,
		uiGroup: "MIMS metrics",
		dataType: "float",
		valueKind: "mims"
	},
	{
		key: "mims_unit_x_column",
		label: "MIMS X",
		aliases: [
			"mims_unit_x",
			"mims_x",
			"mimsx",
			"mims_axis_x"
		],
		required: !1,
		uiGroup: "MIMS metrics",
		dataType: "float",
		valueKind: "mims_axis"
	},
	{
		key: "mims_unit_y_column",
		label: "MIMS Y",
		aliases: [
			"mims_unit_y",
			"mims_y",
			"mimsy",
			"mims_axis_y"
		],
		required: !1,
		uiGroup: "MIMS metrics",
		dataType: "float",
		valueKind: "mims_axis"
	},
	{
		key: "mims_unit_z_column",
		label: "MIMS Z",
		aliases: [
			"mims_unit_z",
			"mims_z",
			"mimsz",
			"mims_axis_z"
		],
		required: !1,
		uiGroup: "MIMS metrics",
		dataType: "float",
		valueKind: "mims_axis"
	}
];
async function mu(e, t = b()) {
	return 0 === e.length ? [] : t.consensusDisagreements(e.map(({ usersForDate: e, kind: t }) => function(e, t) {
		const n = [];
		for (const [i, a] of e) "auto_score" !== i && n.push("sleep" === t ? {
			name: i,
			periods: a.sleepMarkers.map((e) => ({
				start: e.onsetTimestamp ?? null,
				end: e.offsetTimestamp ?? null,
				label: e.markerType
			})),
			explicitNone: a.isInvalidNight
		} : {
			name: i,
			periods: a.nonwearMarkers.map((e) => ({
				start: e.startTimestamp ?? null,
				end: e.endTimestamp ?? null,
				label: ""
			})),
			explicitNone: Boolean(a.explicitNoNonwear)
		});
		return n;
	}(e, t)));
}
function hu(e) {
	const t = dt.getState(), n = [de(an(t, e).nonwearDetectorsCounts, t.showChoiNonwear), de(Yt(t.nonwearDetectorsGgir, e), t.showChoiNonwear)];
	return n.filter((e, t) => n.findIndex((t) => X(t) === X(e)) === t);
}
function gu(e, t) {
	const n = [];
	let i = null;
	for (let a = 0; a < e.length; a++) 1 === e[a] && null === i ? i = t[a] ?? 0 : 1 !== e[a] && null !== i && (n.push({
		startTimestamp: i,
		endTimestamp: (t[a - 1] ?? i) + 60
	}), i = null);
	return null !== i && n.push({
		startTimestamp: i,
		endTimestamp: (t[e.length - 1] ?? i) + 60
	}), n;
}
function yu(e, t) {
	return [.../* @__PURE__ */ new Set([...e.availableDates, ...t])].sort();
}
function wu(e, t) {
	return e ? {
		detectors: [...e.detectors],
		any: Uint8Array.from(e.mask).buffer,
		weight: e.weight ? Float64Array.from(e.weight).buffer : null,
		grid: e.grid === t.timestamps ? "counts" : "ggir"
	} : null;
}
async function _u(e, { file: t, sets: n, capsense: i, db: a, signal: s }) {
	const r = n.filter((t) => !(X(t) in (e.displayNonwear ?? {})));
	if (0 === r.length) return;
	const o = U(s), l = await he(e, $e, "navigation facts", gn(), o);
	if (!l) return;
	const c = le(t.sourceType, t.sourceProfileId), u = {};
	for (const [m, h] of Object.entries(l.nonwearMasksByDetector)) 0 === h.length || se(m) || (u[m] = h);
	const d = {
		algorithmicNonwearMasks: u,
		timestamps: l.timestamps,
		ggirTimestamps: l.ggirTimestamps,
		sensorNonwearPeriods: "detach_nonwear" === c && l.detachNonwear ? gu(l.detachNonwear, l.timestamps) : i,
		deviceNonwearSource: c
	}, p = { ...e.displayNonwear }, f = await Promise.all(r.map((e) => (s?.throwIfAborted(), ue(d, e, o))));
	for (const [m, h] of r.entries()) p[X(h)] = wu(f[m], d);
	await ct(e.fileId, e.date, p, {
		seriesRevision: t.seriesRevision ?? 0,
		nonwearBandGeneration: t.nonwearBandGeneration ?? 0
	}, a, s);
}
const vu = /* @__PURE__ */ new WeakMap();
function bu(e, t, n) {
	let i = vu.get(t);
	i || vu.set(t, i = /* @__PURE__ */ new Map());
	const a = i.get(e);
	if (a) return D(a, n);
	const s = async function(e, t, n) {
		n?.throwIfAborted();
		const i = await rt(e, t);
		if (!i || "incomplete" === i.ingestState) return;
		const a = await gt(e, t);
		let s = i.navigationFacts;
		(function(e, t) {
			const n = e?.navigationFacts;
			if (!e || 1 !== n?.version) return !1;
			const i = yu(e, t);
			return n.dates.length === i.length && n.dates.every((e, t) => e === i[t]);
		})(i, a) || (s = await async function(e, t, n, i) {
			const a = U(i), s = {}, r = async (e) => {
				i?.throwIfAborted();
				const t = await a.nextDate(e);
				void 0 !== t && (s[e] = t);
			};
			await Promise.all(t.map(r)), await Promise.all(Object.values(s).filter((e) => !(e in s)).map(r));
			const o = {}, l = {};
			await Promise.all(e.availableDates.map(async (e) => {
				i?.throwIfAborted();
				const [t, n] = await Promise.all([a.analysisWindowBounds(e), a.analysisWindowBounds(e, 48)]);
				t && (o[e] = [t[0], t[1]]), n && (l[e] = [n[0], n[1]]);
			}));
			const c = await Zn(n), u = await Kn(e, c, i), d = [...new Set([u.zone, u.reason ? c : null].filter((e) => Boolean(e)))], p = {};
			return await En((t) => {
				for (const n of d) {
					const i = {};
					for (const a of e.availableDates) {
						const e = t.dstTransitionOnNight(n, a);
						e && (i[a] = e);
					}
					p[n] = i;
				}
			}, new On(a)), {
				version: 1,
				dates: [...t],
				next: s,
				window: o,
				view48: l,
				dst: p,
				dstZone: {
					...u,
					studyZone: c
				}
			};
		}(i, yu(i, a), t, n), n?.throwIfAborted(), await t.files.update(e, { navigationFacts: s }));
		const r = hu(i), o = r.map(X), l = i.seriesRevision ?? 0;
		if (s?.bands?.seriesRevision === l && o.every((e) => s.bands.keys.includes(e))) return;
		const c = "gt3x_capsense" === le(i.sourceType, i.sourceProfileId) ? (await Re(e, t)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : [];
		for (const u of a) {
			n?.throwIfAborted();
			const a = await Le(e, u, t);
			a && await _u(a, {
				file: i,
				sets: r,
				capsense: c,
				db: t,
				signal: n
			});
		}
		await t.transaction("rw", t.files, async () => {
			const a = await t.files.get(e);
			a?.navigationFacts && (a.seriesRevision ?? 0) === l && (a.nonwearBandGeneration ?? 0) === (i.nonwearBandGeneration ?? 0) && (n?.throwIfAborted(), await t.files.update(e, { navigationFacts: {
				...a.navigationFacts,
				bands: {
					keys: o,
					seriesRevision: l
				}
			} }));
		});
	}(e, t, n).catch((e) => {
		n?.throwIfAborted(), console.warn("[navigation-facts] A file's navigation facts could not be stored.", e);
	}).finally(() => {
		i.delete(e);
	});
	return i.set(e, s), s;
}
function ku(e, t) {
	for (const n of e) {
		const e = n.epochResolutions?.find((e) => e.category === t && !e.derivedFromResolutionId);
		if (e) return e.epochLengthSeconds;
	}
	return null;
}
function Su(e, t) {
	const n = "counts" === t ? e.timestamps : e.ggirTimestamps;
	return n ? Math.floor(n.byteLength / Float64Array.BYTES_PER_ELEMENT) : 0;
}
function Iu(e) {
	return "number" != typeof e ? String(e) : (/* @__PURE__ */ new Date(1e3 * e)).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: !1,
		timeZone: "UTC"
	});
}
function Au(e) {
	if ("object" != typeof e || null === e) return String(e).slice(0, 60);
	const t = e;
	return "onsetTimestamp" in t && "offsetTimestamp" in t ? `${Iu(t.onsetTimestamp)}–${Iu(t.offsetTimestamp)}` : "startTimestamp" in t && "endTimestamp" in t ? `${Iu(t.startTimestamp)}–${Iu(t.endTimestamp)}` : JSON.stringify(t).slice(0, 60);
}
function xu(e, t = "(unset)") {
	if (void 0 === e) return t;
	if (null === e) return t;
	const n = "string" == typeof e ? e : JSON.stringify(e);
	return n.length > 48 ? `${n.slice(0, 45)}…` : n;
}
function $u(e) {
	const t = e.rowCount, n = e.dayCount, i = [`${xu(e.subject, "export")} (${xu(e.format, "?")})`, xu(e.filename, "")].filter((e) => "" !== e), a = ["number" == typeof t ? `${t} rows` : null, "number" == typeof n ? `${n} day${1 === n ? "" : "s"}` : null].filter((e) => null !== e);
	return a.length > 0 ? `${i.join(" · ")} — ${a.join(", ")}` : i.join(" · ");
}
function Nu(e, t, n, i) {
	const a = n?.exportId;
	return "export_started" === t && "string" == typeof a && i.has(a) ? "" === e ? "outcome unknown" : `${e} · outcome unknown` : e;
}
function Tu(e, t) {
	const n = I({
		action: t ?? "",
		payload: e
	}), i = n.payload ?? e;
	switch (void 0 === t ? void 0 : n.action) {
		case "session_start": {
			const e = Array.isArray(i.sleepMarkers) ? i.sleepMarkers : [], t = Array.isArray(i.nonwearMarkers) ? i.nonwearMarkers : [];
			let n = `Loaded ${e.length} sleep, ${t.length} nonwear`;
			return i.isInvalidNight && (n += " | Invalid Night"), i.needsConsensus && (n += " | Flagged"), n;
		}
		case "session_end": return "Session ended";
		case "marker_placed": {
			const e = i.category ?? "sleep", t = i.periodIndex ?? "?", n = i.markerType ? ` (${i.markerType})` : "";
			return "onsetTimestamp" in i ? `${e} #${t}${n}: ${Iu(i.onsetTimestamp)}–${Iu(i.offsetTimestamp)}` : "startTimestamp" in i ? `${e} #${t}: ${Iu(i.startTimestamp)}–${Iu(i.endTimestamp)}` : `${e} #${t}${n}`;
		}
		case "sleep_period_split": return `sleep #${i.periodIndex ?? "?"} split at ${Iu(i.at)}`;
		case "sleep_period_merged": return `sleep #${i.periodIndex ?? "?"} merged ${i.direction ?? "?"}`;
		case "marker_adjusted": {
			const e = i.updates ?? {}, t = i.category ?? "?", n = i.periodIndex ?? "?", a = [];
			return void 0 !== e.onsetTimestamp && a.push(`onset → ${Iu(e.onsetTimestamp)}`), void 0 !== e.offsetTimestamp && a.push(`offset → ${Iu(e.offsetTimestamp)}`), void 0 !== e.startTimestamp && a.push(`start → ${Iu(e.startTimestamp)}`), void 0 !== e.endTimestamp && a.push(`end → ${Iu(e.endTimestamp)}`), void 0 !== e.markerType && a.push(`type → ${e.markerType}`), `${t} #${n}: ${a.join(", ")}`;
		}
		case "marker_moved": {
			const e = i.before, t = i.after;
			if (!e || !t) return "drag completed";
			const n = Array.isArray(e.sleepMarkers) ? e.sleepMarkers : [], a = Array.isArray(t.sleepMarkers) ? t.sleepMarkers : [];
			for (let i = 0; i < Math.max(n.length, a.length); i++) {
				const e = n[i], t = a[i];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `sleep #${i}: ${Au(e)} ⇒ ${Au(t)}`;
			}
			const s = Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : [], r = Array.isArray(t.nonwearMarkers) ? t.nonwearMarkers : [];
			for (let i = 0; i < Math.max(s.length, r.length); i++) {
				const e = s[i], t = r[i];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `nonwear #${i}: ${Au(e)} ⇒ ${Au(t)}`;
			}
			return "drag completed (no visible change)";
		}
		case "marker_deleted": {
			const e = i.category ?? "?", t = i.periodIndex ?? "?", n = i.before;
			return n ? `${e} #${t}: was ${Au(n)}` : `${e} #${t}`;
		}
		case "actiware_rest_edited": {
			const e = "string" == typeof i.edit ? i.edit : "?";
			return "add" === e ? `rest added: ${Au(i.to)}` : "remove" === e ? `rest removed: was ${Au(i.from)}` : `rest ${"move" === e ? "moved" : e}: ${Au(i.from)} ⇒ ${Au(i.to)}`;
		}
		case "markers_cleared": return `Cleared ${i.sleepCount ?? 0} sleep, ${i.nonwearCount ?? 0} nonwear`;
		case "undo":
		case "redo": {
			const e = i.sleepCount, t = i.nonwearCount;
			return "number" != typeof e && "number" != typeof t ? "" : `Restored: ${"number" == typeof e ? e : 0} sleep, ${"number" == typeof t ? t : 0} nonwear`;
		}
		case "auto_score_applied": return `${i.algorithm}: ${i.sleepCount ?? 0} sleep, ${i.napCount ?? 0} nap`;
		case "auto_nonwear_applied": {
			const e = Array.isArray(i.weights) ? i.weights.filter((e) => "string" == typeof e) : [], t = `${i.count ?? 0} nonwear periods detected`;
			return 0 === e.length ? t : `${t}: ${e.join("; ")}`;
		}
		case "markers_saved": {
			let e = `${i.sleepCount ?? 0} sleep, ${i.nonwearCount ?? 0} nonwear`;
			return i.notes && (e += ` | "${String(i.notes).slice(0, 50)}"`), i.isInvalidNight && (e += " | Invalid Night"), e;
		}
		case "invalid_night_toggled": {
			const e = i.value ? "Enabled" : "Disabled", t = i.clearedSleepMarkers, n = Array.isArray(t) ? t.length : 0;
			return 0 === n ? e : `${e} — cleared ${n} sleep marker${1 === n ? "" : "s"}`;
		}
		case "no_nonwear_toggled": return i.value ? "Confirmed no nonwear" : "No-nonwear cleared";
		case "consensus_toggled": return i.value ? "Flagged for consensus" : "Unflagged";
		case "candidate_copied": {
			const e = i.label ?? i.sourceUsername ?? "unknown", t = "nonwear" === i.kind ? `${i.nonwearCount ?? "?"} nonwear` : `${i.sleepCount ?? "?"} sleep`;
			return `From ${String(e)} (${t})`;
		}
		case "consensus_vote_cast": return null == i.candidateId ? "Vote withdrawn" : `Voted for candidate #${i.candidateId}`;
		case "consensus_resolved": {
			const e = i.kind;
			return "string" == typeof e && "" !== e ? `${e} consensus resolved` : "Consensus resolved";
		}
		case "transition_flagged": {
			const e = xu(i.intent, "mutation"), t = xu(i.guard, "?"), n = i.disposition, a = "refused_by_store" === n ? "refused" : "applied_with_violation" === n ? "applied anyway" : xu(n, "");
			return "" === a ? `${e} flagged: ${t}` : `${e} flagged: ${t} — ${a}`;
		}
		case "file_uploaded":
		case "file_processed":
		case "file_reprocessed":
		case "file_deleted": {
			const e = i.filename ?? "?", t = i.dateCount;
			return null == t ? String(e) : `${String(e)} (${String(t)} days)`;
		}
		case "notes_changed":
			if (void 0 !== i.after) {
				const e = xu(i.before, ""), t = xu(i.after, "");
				return "" === e ? `"${t}"` : `"${e}" → "${t}"`;
			}
			return i.text ? `"${String(i.text).slice(0, 60)}"` : i.notes ? `"${String(i.notes).slice(0, 60)}"` : `${i.length ?? "?"} chars`;
		case "settings_changed": return `${xu(i.scope, "?")} · ${xu(i.key, "?")}: ${xu(i.before)} → ${xu(i.after)}`;
		case "settings_reset": {
			const e = i.changed, t = xu(i.scope, "settings");
			if (!Array.isArray(e)) return `${t} reset to defaults`;
			if (0 === e.length) return `${t}: already at defaults`;
			const n = e.slice(0, 4).map((e) => xu(e, "?")).join(", "), a = e.length > 4 ? ", …" : "";
			return `${t}: ${String(e.length)} reset to default (${n}${a})`;
		}
		case "app_version_changed": return `${xu(i.before, "(first run)")} → ${xu(i.after, "?")}`;
		case "system_migration": return `${xu(i.subject, "schema")}: ${xu(i.before, "?")} → ${xu(i.after, "?")}`;
		case "data_exported": return $u(i);
		case "export_started": return `Started: ${$u(i)}`;
		case "export_cancelled": return `${xu(i.filename, "export")} — ${xu(i.reason, "cancelled")}`;
		case "preset_changed": {
			const e = xu(i.family, "preset"), t = xu(i.change, "changed"), n = xu(i.preset, "?"), a = i.before;
			return null == a ? `${e}: ${t} ${n}` : `${e}: ${t} ${n} (was ${xu(a)})`;
		}
		case "markers_synced": {
			const e = i.conflicts, t = i.errorCount;
			let n = `Pushed ${i.pushed ?? 0}, pulled ${i.pulled ?? 0}`;
			return "number" == typeof e && e > 0 && (n += `, ${e} conflict${1 === e ? "" : "s"}`), "number" == typeof t && t > 0 && (n += `, ${t} error${1 === t ? "" : "s"}`), n;
		}
		case "system_recalculation": return `Recalculated ${xu(i.subject, "derived data")}`;
		case "diary_staged": return `Staged ${i.staged ?? 0}, replaced ${i.replaced ?? 0}, skipped ${i.skipped ?? 0}`;
		case "diary_decision_recorded": return `Decided ${xu(i.ruleKind, "a rule")} → ${xu(i.outcome, "(no outcome)")} (${xu(i.scope, "unscoped")}, ${i.nights ?? 0} nights)`;
		case "diary_decision_state_saved": return `Saved decision state "${xu(i.restorePoint, "untitled")}" (${i.decisions ?? 0} decisions)`;
		case "diary_session_saved": {
			const e = xu(i.status, "saved"), t = xu(i.step, "an unknown step"), n = xu(i.sourceSha256Prefix, "an unnamed source");
			return "removed" === e ? `Removed the saved diary session for ${n}` : `Diary session ${n} saved as ${e} on ${t}`;
		}
		case "diary_decision_state_restored": return `Restored decision state "${xu(i.restorePoint, "untitled")}" (${i.reflagged ?? 0} reflagged, ${i.unflagged ?? 0} unflagged, ${i.nights ?? 0} nights)`;
		case "diary_decisions_reset": return `Reset ${i.decisions ?? 0} diary decisions across ${i.nights ?? 0} nights`;
		case "diary_attached": {
			const e = i.entryCount, t = i.matchBasis, n = ["number" == typeof e ? `${e} night${1 === e ? "" : "s"}` : null, "string" == typeof t && "" !== t ? `matched by ${t}` : null].filter((e) => null !== e).join(", ");
			return "" === n ? "Attached diary" : `Attached diary (${n})`;
		}
		case "diary_discarded": {
			const e = i.analysisDate;
			return null == e ? `Discarded ${xu(i.sourceKey, "diary")}` : `Discarded ${xu(i.sourceKey, "diary")} for ${xu(e, "?")}`;
		}
		case "diary_workspace_cleared": {
			const e = (e, t) => {
				const n = Number(i[e] ?? 0);
				return `${String(n)} ${t}${1 === n ? "" : "s"}`;
			};
			return `Cleared workspace diary (${e("staged", "staged night")}, ${e("occurrences", "response")})`;
		}
		case "diary_repaired": {
			const e = i.fields, t = Array.isArray(e) ? e.map((e) => xu(e, "?")).join(", ") : "";
			return "" === t ? `Repaired ${i.applied ?? 0} field${1 === i.applied ? "" : "s"}` : `Repaired ${i.applied ?? 0}: ${t}`;
		}
		case "diary_changed": {
			const e = i.fields, t = xu(i.change, "changed"), n = Array.isArray(e) ? e.map((e) => xu(e, "?")).join(", ") : "";
			return "" === n ? `Diary ${t}` : `Diary ${t}: ${n}`;
		}
		case "workspace_deleted": {
			const e = i.auditRowsDestroyed;
			return `${xu(i.displayName, "workspace")} deleted — ${i.auditRowsTotal ?? 0} audit rows, ${i.auditRowsReplicated ?? 0} replicated, ${e ?? 0} destroyed`;
		}
		case "audit_chain_reanchored": return `Restored ${i.restoredRows ?? 0} rows (restore ${String(i.restoreId ?? "?").slice(0, 8)})`;
		case "workspace_recovered": return `Recovered from backup ${xu(i.backupSha256, "?").slice(0, 8)} — ${xu(i.applied, "0")} changes put back, ${xu(i.skipped, "0")} skipped, ${xu(i.recordingsToReimport, "0")} recordings to import again`;
		case "access_changed": return `${xu(i.subject, "access")} · ${xu(i.scope, "?")}: ${xu(i.before)} → ${xu(i.after)}`;
		case "assignment_changed": {
			const e = i.fileCount, t = i.fileIds, n = "number" == typeof e ? e : Array.isArray(t) ? t.length : 0;
			return `${xu(i.change, "changed")} ${xu(i.subject, "assignment")} · ${xu(i.scope, "?")} (${n} file${1 === n ? "" : "s"})`;
		}
	}
	return Object.entries(i).slice(0, 5).map(([e, t]) => "number" == typeof t && e.toLowerCase().includes("timestamp") ? `${e}: ${Iu(t)}` : "string" == typeof t && t.length > 50 ? `${e}: "${t.slice(0, 47)}..."` : Array.isArray(t) ? `${e}: [${t.length} items]` : "object" == typeof t && null !== t ? `${e}: {…}` : `${e}: ${JSON.stringify(t)}`).join(", ");
}
var zu = a({
	GGIR_NIGHT_DIFFICULTY_NOT_RANKABLE: () => ld,
	LocalDataSource: () => Sd,
	backfillPlacementResults: () => xd,
	refreshStoredFilePlacement: () => Id,
	refreshStoredFilePlacements: () => Ad,
	refreshStoredNightDifficulty: () => pd,
	storePhysicalActivityFileAnswers: () => fd
});
function Mu(e) {
	return JSON.stringify(e.map((e) => ({
		start_timestamp: e.startTimestamp,
		end_timestamp: e.endTimestamp,
		marker_index: e.markerIndex
	})));
}
function Du(e, t) {
	const n = (a = t, "mims_metrics" === (i = e ?? "generic") ? cu(a, s) : "ggir_part5_daysummary" === i ? function(e, t) {
		const n = uu(e, t);
		return e.date_column || e.datetime_column || n.push({
			key: "date_column",
			message: "Map a date/day column for the daily summary table."
		}), n;
	}(a, s) : lu(a, s));
	var i, a, s;
	if (0 !== n.length) throw new Error(function(e) {
		return `Column-mapped CSV settings are incomplete: ${e.map((e) => e.message).join(" ")} ${si}`;
	}(n));
}
function Ru(e) {
	const t = /* @__PURE__ */ new Map();
	for (const i of e) "auto_score" !== i.username || i.algorithm !== p.VAN_HEES_2015 || i.isInvalidNight || t.set(i.date, yt(t.get(i.date), i));
	const n = /* @__PURE__ */ new Map();
	for (const [i, a] of t) {
		const e = a.sleepMarkers.filter((e) => e.markerType === u.MAIN_SLEEP);
		if (1 !== e.length) continue;
		const t = e[0], s = t?.onsetTimestamp, r = t?.offsetTimestamp;
		"number" == typeof s && Number.isFinite(s) && "number" == typeof r && Number.isFinite(r) && r > s && n.set(i, [s, r]);
	}
	return n;
}
async function Eu(e, t) {
	const n = t.dailyGgirSummaries;
	if (!n) return /* @__PURE__ */ new Map();
	const i = await n.where("fileId").equals(e).toArray();
	return new Map(i.map((e) => [e.analysisDate, e]));
}
function Cu(e) {
	return {
		id: e.id ?? 0,
		file_id: e.fileId,
		analysis_date: e.analysisDate,
		total_sleep_time_minutes: e.totalSleepTimeMinutes,
		waso_minutes: e.wasoMinutes,
		sleep_efficiency: e.sleepEfficiency,
		mvpa_minutes: e.mvpaMinutes,
		lpa_minutes: e.lpaMinutes,
		sedentary_minutes: e.sedentaryMinutes,
		l5_midpoint_hour: e.l5MidpointHour,
		m5_midpoint_hour: e.m5MidpointHour,
		intensity_gradient: e.intensityGradient,
		nonwear_minutes: e.nonwearMinutes,
		valid_hours: e.validHours,
		created_at: e.createdAt,
		updated_at: e.updatedAt
	};
}
function Fu(e, t, n, i) {
	const a = t?.days.find((e) => e.analysis_date === n), s = e?.[n];
	if (!a || !s || !i) return [];
	const r = a.timestamps, o = a.epoch_length_seconds;
	if (0 === r.length || !Number.isFinite(o) || o <= 0) return [];
	const l = [];
	for (const [c, u, d] of [[
		"onset_candidates",
		"onset_candidate",
		"Onset candidate"
	], [
		"offset_candidates",
		"offset_candidate",
		"Offset candidate"
	]]) {
		const e = s[c];
		Array.isArray(e) && e.forEach((e, t) => {
			if (null == e || "object" != typeof e || Array.isArray(e)) return;
			const n = e, a = n.run_start_epoch, s = n.run_end_epoch;
			if (!Number.isInteger(a) || !Number.isInteger(s) || a < 0 || s < a || s >= r.length) return;
			const c = r[a], p = r[s];
			if (null == c || null == p || !Number.isFinite(c) || !Number.isFinite(p)) return;
			const f = p + o;
			if (f <= c) return;
			const m = "string" == typeof n.generation_execution_id ? n.generation_execution_id : null, h = `${u}:${String(a)}:${String(s)}:${String(t)}`;
			l.push({
				id: h,
				kind: u,
				start_timestamp: c,
				end_timestamp: f,
				source_start_epoch: a,
				source_end_epoch: s,
				source_index: t,
				label: `${d} ${String(t + 1)}`,
				evidence_id: `${m ?? i}#${h}`,
				projection_revision: i
			});
		});
	}
	return l;
}
const Ou = "wasm-parallel";
function Pu(e) {
	const t = e.compiledFeatures;
	return {
		...e,
		compiledFeatures: t.includes(Ou) ? t.filter((e) => e !== Ou) : [...t, Ou]
	};
}
function ju(e, t) {
	const n = e.compiledFeatures.filter((e) => e !== Ou), i = t.compiledFeatures.filter((e) => e !== Ou);
	return e.contractVersion === t.contractVersion && e.crateVersion === t.crateVersion && e.sourceRevision === t.sourceRevision && e.target === t.target && e.semanticProfile === t.semanticProfile && e.profileProofStatus === t.profileProofStatus && e.temporalBasis === t.temporalBasis && e.artifactSha256 === t.artifactSha256 && n.length === i.length && n.every((e, t) => e === i[t]);
}
async function Bu(e, t, n, i, a = /* @__PURE__ */ new Map()) {
	const s = [];
	for (const l of [t, await ne(t, void 0, i)]) {
		const r = e.get(l);
		if (!r) continue;
		let o = a.get(l);
		o || a.set(l, o = he(r, n, `listDatesStatus ${l}`, gn(), i));
		const c = await o;
		if (!c) return null;
		s.push({
			unpacked: c,
			epochs: await qn(c.timestamps, t, i),
			ggir: await qn(c.ggirTimestamps, t, i)
		});
	}
	for (const l of a.keys()) l < t && a.delete(l);
	const r = (e, t) => {
		const n = [];
		for (const i of s) {
			const { startIndex: a, endIndex: s } = i[t];
			if (s <= a) continue;
			const r = e(i.unpacked), o = "epochs" === t ? i.unpacked.timestamps.length : i.unpacked.ggirTimestamps.length;
			if (null == r || r.length !== o) return null;
			for (let e = a; e < s; e += 1) n.push(r[e]);
		}
		return n;
	}, o = r((e) => e.timestamps, "epochs") ?? [];
	return 0 === o.length ? null : {
		timestamps: o,
		axisY: r((e) => e.axisY, "epochs"),
		sleepScores: r((e) => e.sleepScores, "epochs"),
		nonwearResults: r((e) => e.nonwearResults, "epochs"),
		temperature: r((e) => e.temperature, "epochs"),
		detachNonwear: r((e) => e.detachNonwear, "epochs"),
		ggirTimestamps: r((e) => e.ggirTimestamps, "ggir") ?? [],
		ggirAnglez: r((e) => e.ggirAnglez, "ggir") ?? []
	};
}
function Zu(e, t) {
	const n = new Set(t.map((e) => e.analysis_date)), i = Object.keys(e);
	return n.size === t.length && i.length === n.size && i.every((e) => n.has(e));
}
function qu(e) {
	const t = [...e.entries()].sort(([e], [t]) => e.localeCompare(t));
	let n = null, i = null;
	for (const [, r] of t) try {
		const e = He(r).timestamps;
		if (0 === e.length) continue;
		const t = e[0];
		if (null != t && Number.isFinite(t)) {
			n = t;
			break;
		}
	} catch {}
	for (let r = t.length - 1; r >= 0; r -= 1) {
		const e = t[r]?.[1];
		if (e) try {
			const t = He(e).timestamps;
			if (0 === t.length) continue;
			const n = t[t.length - 1];
			if (null != n && Number.isFinite(n)) {
				i = n;
				break;
			}
		} catch {}
	}
	if (null == n || null == i || i < n) return null;
	const a = 1e3 * n, s = 1e3 * i;
	return Number.isFinite(a) && Number.isFinite(s) ? {
		start: a,
		end: s
	} : null;
}
async function Gu(e, t, n, i, a, s, r) {
	const o = [], l = [];
	for (const c of new Set(t)) {
		let t = null;
		for (const o of e) if (o && 0 !== He(o).timestamps.length && (await na(o, c, n, a, void 0, s, r), t = Mn(c, vn(o, n), i), null !== t)) break;
		null === t ? o.push(c) : l.push({
			detector: c,
			reason: t
		});
	}
	return {
		available: o,
		dropped: l
	};
}
function Uu({ available: e, dropped: t }) {
	return 0 === e.length && t.length > 0 ? t.map((e) => e.reason).join("; ") : null;
}
function Hu(e) {
	if (!e) return {
		choiNonwear: null,
		nonwearWeight: null,
		nonwearMemberFlags: null,
		nonwearDetectors: []
	};
	const t = e.available.length > 1;
	return {
		choiNonwear: e.flagged,
		nonwearWeight: t ? e.weight : null,
		nonwearMemberFlags: t ? e.memberFlags : null,
		nonwearDetectors: e.available
	};
}
function Ju(e) {
	return 1 === e.length && zn(e[0]);
}
function Lu(e, t, n) {
	const i = e?.byDate[t];
	return i ? "refused" === i.kind ? i.reason : null : function(e) {
		const t = e?.sleepPeriodDetectionConfig?.nonwear_detector_unavailable;
		return "string" == typeof t ? t : null;
	}(n);
}
async function Wu(e, t) {
	if (!("placementResults" in e)) return;
	const n = await e.placementResults.get(t);
	return 2 === n?.policy ? n : void 0;
}
function Vu(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let i = 0; i < t; i += 1) {
		const t = e[i];
		if (null == t || !Number.isFinite(t)) return [];
		n[i] = t;
	}
	return n;
}
function Ku(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let i = 0; i < t; i += 1) {
		const t = e[i];
		if (0 !== t && 1 !== t) return [];
		n[i] = t;
	}
	return n;
}
function Yu(e, t, n) {
	if (t.length !== e.length || n.length !== e.length) return [];
	const i = new Array(e.length);
	for (let a = 0; a < e.length; a += 1) {
		const s = t[a], r = e[a], o = n[a];
		if (null == s || null == r || s !== r || null == o || !Number.isFinite(o)) return [];
		i[a] = o;
	}
	return i;
}
function Xu(e, t, n, i, a, s) {
	const r = [], o = null == t ? null : s.resolveInstant(t, e, x.evening_onset, a), l = null == n ? null : s.resolveInstant(n, e, x.morning_offset, a);
	return null == o && null == l || r.push({
		guider: y.DIARY,
		detector: null,
		onset_ts: o,
		offset_ts: l
	}), null != i && r.push({
		guider: y.HDCZA,
		detector: null,
		onset_ts: i[0],
		offset_ts: i[1]
	}), r;
}
function Qu(e) {
	return `complexity-evidence:${e.generationKey}`;
}
function ed(e) {
	return {
		generationKey: e.generationKey,
		evidenceContractId: e.evidenceContractId,
		sourceContentHash: e.sourceContentHash,
		difficultyRequestSha256: e.difficultyRequestSha256,
		signalsRequestSha256: e.signalsRequestSha256,
		projectionSha256: e.projectionSha256,
		difficultyResultSha256: e.difficultyResultSha256,
		signalsResultSha256: e.signalsResultSha256,
		recordSha256: e.recordSha256
	};
}
function td(e) {
	return e.projectionInput;
}
function nd(e) {
	return e.difficultyByDate;
}
function id(e) {
	return e.signalsByDate;
}
function ad(e, t, n, i) {
	return {
		has_markers: c(e),
		has_nonwear: f(e),
		is_invalid_night: e?.isInvalidNight ?? !1,
		needs_consensus: e?.needsConsensus ?? !1,
		auto_flagged: t,
		has_auto_score: (n?.sleepMarkers?.length ?? 0) > 0 || !0 === n?.isInvalidNight,
		auto_score_unavailable_reason: i
	};
}
async function sd(e, t, n, i) {
	const [a, s] = await Promise.all([i.markers.where("[fileId+date+username]").between([
		e,
		t,
		""
	], [
		e,
		t,
		"￿"
	], !0, !0).toArray(), Wu(i, e)]), r = /* @__PURE__ */ new Map();
	for (const c of a) r.set(c.username, yt(r.get(c.username), c));
	const o = r.size >= 2 && (await mu([{
		usersForDate: r,
		kind: "sleep"
	}, {
		usersForDate: r,
		kind: "nonwear"
	}])).some((e) => e.disagree), l = r.get(Mt);
	return ad(r.get(n), o, l, Lu(s, t, l));
}
function rd(e) {
	return JSON.stringify((e ?? []).map((e) => [e.startTimestamp ?? null, e.endTimestamp ?? null]));
}
function od(e) {
	const n = e ? null : dt.getState(), i = e?.nightStartHour ?? n?.nightStartHour ?? t.night_start_hour, a = e?.nightEndHour ?? n?.nightEndHour ?? t.night_end_hour, s = parseInt(i.split(":")[0] ?? "21", 10), r = parseInt(a.split(":")[0] ?? "9", 10);
	return {
		nightStartHour: Number.isNaN(s) ? 21 : s,
		nightEndHour: Number.isNaN(r) ? 9 : r
	};
}
const ld = "GGIR nights are not ranked by difficulty: the difficulty core reads 60 s activity counts and sleep scores, and a GGIR folder holds 5 s ENMO, anglez and SIB only.", cd = /* @__PURE__ */ new Set(), ud = /* @__PURE__ */ new WeakMap();
function dd(e, t, n, i) {
	const a = ud.get(e) ?? /* @__PURE__ */ new Map();
	ud.set(e, a);
	const s = a.get(t);
	if (s) {
		let r;
		return {
			run: s.run.catch((o) => {
				if (!s.signal?.aborted || n?.aborted) throw o;
				return a.get(t) === s && a.delete(t), r = dd(e, t, n, i), r.run;
			}),
			release: () => r?.release()
		};
	}
	const r = {
		run: i(),
		signal: n
	};
	return a.set(t, r), {
		run: r.run,
		release: () => {
			a.get(t) === r && a.delete(t);
		}
	};
}
function pd(e, t, n, i) {
	return q({
		kind: R.NIGHT_DIFFICULTY,
		key: `${R.NIGHT_DIFFICULTY}:${String(e)}`,
		label: "Update night difficulty",
		workspaceId: t.name,
		signal: i,
		rerun: !0,
		run: async (i) => {
			const a = new Sd();
			try {
				if (i.signal.throwIfAborted(), i.progress(0, 2), F() !== t) return;
				const s = await rt(e, t);
				if (!s || "incomplete" === s.ingestState) return;
				await bu(e, t, i.signal), i.signal.throwIfAborted(), i.progress(1, 2);
				const r = s.nightDifficulty, o = n ?? (r ? {
					nightStartHour: `${String(r.nightStartHour).padStart(2, "0")}:00`,
					nightEndHour: `${String(r.nightEndHour).padStart(2, "0")}:00`
				} : void 0);
				await a.computeDatesStatus(e, s.availableDates, dt.getState().username || "anonymous", o, i.signal), i.progress(2, 2);
			} finally {
				a.dispose();
			}
		}
	}).catch((e) => {
		e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] Stored night difficulty could not be refreshed.", e);
	});
}
function fd(e, t, n) {
	return q({
		kind: R.PHYSICAL_ACTIVITY,
		key: `${R.PHYSICAL_ACTIVITY}:${String(e)}`,
		label: "Store activity answers",
		workspaceId: t.name,
		signal: n,
		rerun: !0,
		run: (n) => pt(async (i) => {
			const [{ computeLocalPhysicalActivityAnalysis: a, physicalActivityStoreAnalysisOptions: s }, { createPhysicalActivityWorkspaceRepository: r, loadPhysicalActivityWorkspaceDays: o }] = await Promise.all([import("./local-physical-activity-analysis-CZzs5NXv.js"), import("./physical-activity-workspace-days-RIXIMyx-.js")]);
			if (n.signal.throwIfAborted(), n.progress(0, 2), F() !== t) return;
			const l = s(dt.getState());
			await a({
				...l,
				dbOverride: t,
				activityDayMemo: i,
				onlyFileIds: [e],
				signal: n.signal
			}), n.signal.throwIfAborted(), n.progress(1, 2), await o({
				username: l.username,
				maskPolicy: l.maskPolicy,
				repository: r(t, i),
				onlyFileIds: [e],
				signal: n.signal
			}), n.progress(2, 2);
		})
	}).catch((e) => {
		e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] A file's physical-activity answers could not be stored; the Activity tab computes them.", e);
	});
}
kt((e, t, n) => {
	pd(e, t, void 0, n);
});
const md = /* @__PURE__ */ new WeakMap();
function hd(e, t, n, i, a) {
	a?.throwIfAborted();
	let s = md.get(e);
	return s || (s = /* @__PURE__ */ new Map(), md.set(e, s)), s.set(t, {
		inputs: n,
		byDate: i
	}), i;
}
const gd = /* @__PURE__ */ new WeakMap();
function yd(e, t) {
	let n = gd.get(e);
	n || gd.set(e, n = /* @__PURE__ */ new Map());
	const i = Je(t);
	let a = n.get(i);
	return a || n.set(i, a = Me(e.values(), t)), a;
}
const wd = "An earlier audit record is still being written. The rest interval was not changed; try again.";
function _d(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.date);
		e && "auto_score" !== e.username && "auto_score" === n.username || t.set(n.date, "auto_score" === e?.username && "auto_score" !== n.username ? n : yt(e, n));
	}
	return [...t].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort();
}
async function vd(e, t, n) {
	try {
		const a = await t.actiwareFileData.get(e);
		if (!a?.actiwareSleepWake) return;
		const s = (await t.actiwareStatisticsInputs.get(e))?.input, r = (await t.files.get(e))?.seriesRevision ?? 0, o = _d(await t.markers.where("fileId").equals(e).toArray());
		let l = null;
		try {
			l = await Wn(a.actiwareIntervals, s, o, (e) => U(n).actiwareIntervalStatistics(e));
		} catch (i) {
			n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), lt("error", "Actiware statistics recalculation failed", mt(i));
		}
		await ge(t, [
			t.actiwareFileData,
			t.actiwareStatisticsInputs,
			t.files,
			t.markers
		], async () => {
			const n = await t.actiwareFileData.get(e), i = (await t.actiwareStatisticsInputs.get(e))?.input;
			if (!n || ((await t.files.get(e))?.seriesRevision ?? 0) !== r) return;
			if (JSON.stringify(i) !== JSON.stringify(s) || JSON.stringify(n.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
			const c = _d(await t.markers.where("fileId").equals(e).toArray());
			JSON.stringify(c) === JSON.stringify(o) && (await t.actiwareFileData.update(e, null === l ? { actiwareStatisticsNeedsRecompute: !0 } : {
				actiwareStatistics: l,
				actiwareStatisticsNeedsRecompute: !1
			}), await Qe(t, [e]));
		}, n);
	} catch (i) {
		n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), lt("error", "Actiware statistics recalculation failed", mt(i));
		try {
			await ge(t, [t.actiwareFileData, t.files], async () => {
				await t.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), await Qe(t, [e]);
			}, n);
		} catch {
			throw i instanceof Error ? i : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
		}
	}
}
async function bd(e, t, n, i, a) {
	const s = a ? a.file : await rt(e, n);
	if (Qt(s)) {
		if (en(s, dt.getState().analysisParadigm)) return vd(e, n, i);
		try {
			const a = await n.actiwareFileData.get(e);
			if (!a?.actiwareSleepWake) return;
			const s = (await n.actiwareStatisticsInputs.get(e))?.input, l = (await n.files.get(e))?.seriesRevision ?? 0, c = await n.markers.where("fileId").equals(e).toArray(), u = !0 === a.actiwareStatisticsNeedsRecompute, d = (e, t) => JSON.stringify(e.filter((e) => e.date === t).map((e) => [
				e.id,
				e.contentHash,
				e.lastModifiedAt,
				e.sleepMarkers
			])), p = (e) => JSON.stringify(e.map((e) => [
				e.markerType,
				e.onsetTimestamp,
				e.offsetTimestamp
			])), f = /* @__PURE__ */ new Map();
			for (const e of c) {
				if (!u && !t.has(e.date)) continue;
				const n = f.get(e.date);
				n && "auto_score" !== n.username && "auto_score" === e.username || f.set(e.date, "auto_score" === n?.username && "auto_score" !== e.username ? e : yt(n, e));
			}
			const m = u ? new Map([...[...f].map(([e, t]) => [e, t.sleepMarkers]), ...t]) : t, h = new Map([...m].flatMap(([e, t]) => {
				const n = f.get(e);
				return n && p(n.sleepMarkers) !== p(t) ? [] : [[e, {
					sleepMarkers: [...t],
					isInvalidNight: n?.isInvalidNight ?? !1
				}]];
			}));
			if (0 === h.size) return;
			const g = new Map([...h.keys()].map((e) => [e, d(c, e)]));
			let y = null;
			try {
				y = await Xn({
					file: a,
					statisticsInput: s
				}, h, (e) => U(i).actiwareIntervalStatistics(e), i);
			} catch (o) {
				i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), lt("error", "Actiware statistics recalculation failed", mt(o));
			}
			await ge(n, [
				n.actiwareFileData,
				n.actiwareStatisticsInputs,
				n.files,
				n.markers
			], async () => {
				const t = await n.actiwareFileData.get(e), o = (await n.actiwareStatisticsInputs.get(e))?.input;
				if (!t || ((await n.files.get(e))?.seriesRevision ?? 0) !== l) return;
				if (JSON.stringify(o) !== JSON.stringify(s) || JSON.stringify(t.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
				const c = await n.markers.where("fileId").equals(e).toArray(), p = new Map([...h].filter(([e]) => d(c, e) === g.get(e)));
				if (0 === p.size) return;
				if (null === y) return await n.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), void await Qe(n, [e]);
				const f = Vn(t, y), w = f.length > 0 ? await r.waitFor(Un(f, U(i))) : void 0, _ = ei(t, y, p.keys(), w);
				await n.actiwareFileData.update(e, {
					actiwareStatistics: _,
					actiwareStatisticsNeedsRecompute: !0 === t.actiwareStatisticsNeedsRecompute && !(u && p.size === m.size)
				}), await Qe(n, [e]);
			}, i);
		} catch (o) {
			i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), lt("error", "Actiware statistics recalculation failed", mt(o));
			try {
				await ge(n, [n.actiwareFileData, n.files], async () => {
					await n.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), await Qe(n, [e]);
				}, i);
			} catch {
				throw o instanceof Error ? o : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
			}
		}
	}
}
function kd(e) {
	return {
		sleepMarkers: e.sleepMarkers,
		nonwearMarkers: e.nonwearMarkers,
		manualNonwearVerdictPending: void 0 === e.manualNonwearInSleep,
		...void 0 !== e.manualNonwearInSleep ? { manualNonwearInSleep: e.manualNonwearInSleep } : {},
		isInvalidNight: e.isInvalidNight,
		...!0 === e.isInvalidNightImplicit ? { isInvalidNightImplicit: !0 } : {},
		explicitNoNonwear: e.explicitNoNonwear ?? !1,
		notes: e.notes,
		needsConsensus: e.needsConsensus ?? !1,
		sleepPeriodDetectionConfig: e.sleepPeriodDetectionConfig ?? null,
		contentHash: e.contentHash,
		storedAlgorithm: e.algorithm,
		storedDetectionRule: e.detectionRule ?? null
	};
}
var Sd = class t {
	sourceKey = "local";
	disposed = !1;
	operationProcessingOptions;
	constructor(e) {
		this.operationProcessingOptions = e;
	}
	fileBatches = /* @__PURE__ */ new Map();
	beginFileBatch(e, t = F(), n) {
		let i = this.fileBatches.get(e);
		i && i.db === t || (i = {
			db: t,
			signal: n,
			depth: 0,
			actiwareNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map()
		}, this.fileBatches.set(e, i));
		const a = i;
		a.depth += 1;
		let s = !1;
		return { end: async () => {
			if (!(s || (s = !0, a.depth -= 1, a.depth > 0 || (this.fileBatches.get(e) === a && this.fileBatches.delete(e), 0 === a.actiwareNights.size || a.signal?.aborted)))) try {
				await bd(e, a.actiwareNights, a.db, a.signal);
			} catch {
				console.warn("[actiware-statistics] a batch's statistics could neither be recomputed nor flagged.");
			}
		} };
	}
	fileBatch(e, t) {
		const n = this.fileBatches.get(e);
		return n?.db === t ? n : null;
	}
	placementDiaries(e, t, n = this.fileBatch(e, t)) {
		return n?.days ? n.diaries ??= et(e, t) : et(e, t);
	}
	async placementDiary(e, t, n, i = this.fileBatch(e, n)) {
		return i?.days ? (await this.placementDiaries(e, n, i)).find((e) => e.analysisDate === t) ?? null : tt(e, t, n);
	}
	async placementMarker(e, t, n, i, a = this.fileBatch(e, i)) {
		if (!a?.days) return $t(e, t, Mt, n, void 0, i);
		const s = await (a.markers ??= i.markers.where("fileId").equals(e).toArray()), r = Nt(s, {
			date: t,
			username: Mt
		}, n);
		return r ? At(r) : void 0;
	}
	async placementDay(e, t, n, i = this.fileBatch(e, n)) {
		return i?.days ? i.days.get(t) : Le(e, t, n, i?.activityDayMemo);
	}
	async scorerVerdict(e, t, n, i, a = this.fileBatch(t, e)) {
		return a?.days ? yd(a.days, n) : a?.activityDayMemo ? yd(await wt(t, e, a.activityDayMemo), n) : (await at(t, e, i))(n);
	}
	complexitySnapshotByFile = /* @__PURE__ */ new Map();
	complexityGenerationByFile = /* @__PURE__ */ new Map();
	complexitySignalGenerationByFile = /* @__PURE__ */ new Map();
	complexityFailureByFile = /* @__PURE__ */ new Map();
	latestComplexityTokenByFile = /* @__PURE__ */ new Map();
	nextComplexityGenerationToken = 0;
	publishComplexitySnapshot(e, t, n) {
		for (n?.throwIfAborted(), this.complexitySnapshotByFile.delete(e), this.complexitySnapshotByFile.set(e, t); this.complexitySnapshotByFile.size > 2;) {
			const e = this.complexitySnapshotByFile.keys().next().value;
			if (null == e) break;
			this.complexitySnapshotByFile.delete(e), this.complexitySignalGenerationByFile.delete(e);
		}
	}
	async awaitNewerComplexitySnapshot(e, t) {
		const n = this.latestComplexityTokenByFile.get(e);
		if (this.disposed || null == n || n === t) throw new Error("The local workspace changed while difficulty was being computed.");
		const i = this.complexityGenerationByFile.get(e);
		if (i?.token === n) return i.promise;
		const a = this.complexityFailureByFile.get(e);
		if (a?.token === n) throw a.error;
		const s = this.complexitySnapshotByFile.get(e);
		if (s?.token === n) return s;
		throw new Error("A newer local difficulty generation replaced this result.");
	}
	capabilities = {
		supportsConsensus: !1,
		supportsAuditLog: !0,
		supportsComplexityBreakdown: !0,
		supportsBackgroundAutoScore: !1,
		markerPollIntervalMs: 0,
		datesStatusStaleTimeMs: 3e4,
		supportsRawAxes: !0,
		requiresAuthentication: !1,
		supportsLocalAutoScorePanel: !0
	};
	async loadFileDaySeries(e, t) {
		const n = F(), i = await wt(e, n, this.fileBatch(e, n)?.activityDayMemo), a = yd(i, t), s = [];
		for (const [r, o] of [...i].sort(([e], [t]) => e.localeCompare(t))) {
			const e = await he(o, a, `loadFileDaySeries ${r}`, gn());
			e && s.push(e);
		}
		return s;
	}
	async loadActivityData(e, t, n) {
		const i = F();
		let a, s = await rt(e, i), r = null;
		if (Lt(s)) {
			const { ensureSavedGgirNonwear: t } = await import("./ggir-import-BbhDez2r.js").then((e) => e.t);
			try {
				r = await t(e, i, void 0, !1);
			} catch {
				a = "Saved GGIR nonwear recovery failed; recovered nonwear is unavailable.";
			}
			s = await rt(e, i);
		}
		const o = s?.navigationFacts;
		o?.window[t] || bu(e, i);
		const l = await ce(e, t, i, void 0, o);
		if (!l) throw new Error(`No activity data found for fileId=${e} date=${t}. File may not be processed yet.`);
		const c = await this.scorerVerdict(i, e, n?.algorithm, { file: s }), u = await he(l, c, `loadActivityData ${t}`, gn());
		if (!u) throw new Error(`Activity data for fileId=${e} date=${t} is corrupt; please reprocess.`);
		const d = await ne(t, o), p = 48 === n?.viewHours ? [d, await ne(d, o)] : [d], f = await Promise.all(p.map((t) => Le(e, t, i, this.fileBatch(e, i)?.activityDayMemo))), m = [l];
		for (const S of f) {
			if (!S) break;
			m.push(S);
			const e = await he(S, c, "loadActivityData next-day", gn());
			if (!e) throw new Error("Next-day activity data is corrupt; please reprocess.");
			const t = u.timestamps.length, n = e.timestamps.length;
			ee(u.timestamps, e.timestamps), ee(u.axisY, e.axisY), ee(u.vectorMagnitude, e.vectorMagnitude), (u.axisX.length > 0 || e.axisX.length > 0) && (u.axisX.length < t && (u.axisX = new Array(t).fill(0)), ee(u.axisX, e.axisX.length > 0 ? e.axisX : new Array(n).fill(0))), (u.axisZ.length > 0 || e.axisZ.length > 0) && (u.axisZ.length < t && (u.axisZ = new Array(t).fill(0)), ee(u.axisZ, e.axisZ.length > 0 ? e.axisZ : new Array(n).fill(0))), (u.temperature.length > 0 || e.temperature.length > 0) && (u.temperature.length < t && (u.temperature = new Array(t).fill(NaN)), ee(u.temperature, e.temperature.length > 0 ? e.temperature : new Array(n).fill(NaN))), (u.eventMarkers.length > 0 || e.eventMarkers.length > 0) && (u.eventMarkers.length < t && (u.eventMarkers = new Array(t).fill(0)), ee(u.eventMarkers, e.eventMarkers.length > 0 ? e.eventMarkers : new Array(n).fill(0))), ee(u.eventMarkerTimestamps, e.eventMarkerTimestamps), (u.lux.length > 0 || e.lux.length > 0) && (u.lux.length < t && (u.lux = new Array(t).fill(NaN)), ee(u.lux, e.lux.length > 0 ? e.lux : new Array(n).fill(NaN))), (u.sleepScores.length > 0 || e.sleepScores.length > 0) && (u.sleepScores.length < t && (u.sleepScores = new Array(t).fill(0)), ee(u.sleepScores, e.sleepScores.length > 0 ? e.sleepScores : new Array(n).fill(0))), (u.sleepScoreGaps.length > 0 || e.sleepScoreGaps.length > 0) && (u.sleepScoreGaps.length < t && (u.sleepScoreGaps = new Array(t).fill(0)), ee(u.sleepScoreGaps, e.sleepScoreGaps.length > 0 ? e.sleepScoreGaps : new Array(n).fill(0))), (u.lstmTimestamps30s.length > 0 || e.lstmTimestamps30s.length > 0) && (u.lstmTimestamps30s = W(u.lstmTimestamps30s, e.lstmTimestamps30s), u.lstmSleepWake30s = me(u.lstmSleepWake30s, e.lstmSleepWake30s)), pe(u, e, t, n), (u.ggirTimestamps.length > 0 || e.ggirTimestamps.length > 0) && (u.ggirSib = te(u.ggirTimestamps, u.ggirSib, e.ggirTimestamps, e.ggirSib), u.ggirTimestamps = W(u.ggirTimestamps, e.ggirTimestamps), u.ggirEnmo = W(u.ggirEnmo, e.ggirEnmo), u.ggirAnglez = W(u.ggirAnglez, e.ggirAnglez));
		}
		u.ggirSib = fe(u.ggirTimestamps, u.ggirSib);
		const { start: h, end: g } = await Gn(t, 48 === n?.viewHours ? 48 : void 0, o), y = le(s?.sourceType, s?.sourceProfileId);
		let w = [];
		"gt3x_capsense" === y || "actiware_off_wrist" === y ? w = (await Ze(e, h, g, i)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : "detach_nonwear" === y && u.detachNonwear && (w = gu(u.detachNonwear, u.timestamps));
		const _ = {};
		for (const [S, I] of Object.entries(u.nonwearMasksByDetector)) 0 !== I.length && (se(S) || (_[S] = I));
		const v = m.flatMap((e) => e.ggirTimestamps?.byteLength ? [e.ggirInvalid] : []);
		if (v.length > 0 && v.every((e) => void 0 !== e)) {
			const e = v.flatMap((e) => Array.from(new Uint8Array(e)));
			e.length === u.ggirTimestamps.length && (_[T.ggir_part2_invalid] = e);
		}
		nt(u.timestamps, ku(m, "count_sleep_wake")), nt(u.ggirTimestamps, ku(m, "ggir_sleep_period"));
		const b = function(e, t, n, i) {
			const a = {}, s = e.filter((e) => Su(e, "counts") > 0 || Su(e, "ggir") > 0);
			for (const r of hu(i)) {
				const e = X(r);
				if (!s.every((t) => t.displayNonwear && e in t.displayNonwear)) continue;
				const i = s.map((t) => t.displayNonwear[e] ?? null), o = i.filter((e) => null !== e), l = o[0]?.grid;
				if (!l) {
					a[e] = null;
					continue;
				}
				if (o.some((e) => e.grid !== l)) continue;
				const c = o.some((e) => null !== e.weight), u = [], d = [];
				if (s.forEach((e, t) => {
					const n = i[t], a = n ? new Uint8Array(n.any) : new Uint8Array(Su(e, l));
					for (const i of a) u.push(i);
					if (c) for (const i of n?.weight ? new Float64Array(n.weight) : a) d.push(i);
				}), u.length !== ("counts" === l ? t : n)) continue;
				const p = new Set(o.flatMap((e) => e.detectors));
				a[e] = {
					detectors: r.filter((e) => p.has(e)),
					mask: u,
					weight: c ? d : null,
					grid: l
				};
			}
			return a;
		}(m, u.timestamps.length, u.ggirTimestamps.length, s ?? null);
		Object.keys(b).length < hu(s ?? null).length && bu(e, i);
		const k = await re(u, m, c, s?.epochLengthSeconds ?? 60);
		return {
			timestamps: u.timestamps,
			axisX: u.axisX,
			axisY: u.axisY,
			axisZ: u.axisZ,
			vectorMagnitude: u.vectorMagnitude,
			temperature: u.temperature,
			lux: u.lux,
			melanopicLux: [],
			eventMarkers: u.eventMarkers,
			eventMarkerTimestamps: u.eventMarkerTimestamps,
			ggirTimestamps: u.ggirTimestamps,
			ggirEnmo: u.ggirEnmo,
			ggirAnglez: u.ggirAnglez,
			ggirSib: u.ggirSib,
			...u.ggirTimestamps.length > 0 && 0 === u.ggirSib.length ? { ggirSibMissingReason: oe(s, l) } : {},
			algorithmResults: u.sleepScores.length > 0 ? u.sleepScores : null,
			...u.sleepScoreGaps.length > 0 ? { algorithmResultGaps: u.sleepScoreGaps } : {},
			...n?.algorithm && !ae(n.algorithm) && 0 === u.sleepScores.length && u.timestamps.length > 0 ? { scorerMissingReason: "stale" === c.status ? c.reason : Q(n.algorithm, {
				sourceProfileId: s?.sourceProfileId,
				actiwareSleepWake: (await ht(e, i))?.actiwareSleepWake
			}) } : {},
			lstmTimestamps30s: u.lstmTimestamps30s,
			lstmSleepWake30s: u.lstmSleepWake30s,
			nonwearResults: u.nonwearResults,
			nonwearResultsChoi2011: u.nonwearResultsChoi2011,
			vanHeesNonwear: u.vanHeesNonwear,
			algorithmicNonwearMasks: _,
			nonwearBands: b,
			...r ? { nonwearSourceLabels: { [T.ggir_saved]: r } } : {},
			...a ? { savedNonwearMissingReason: a } : {},
			epochResolutions: k,
			viewStart: h,
			viewEnd: g,
			sensorNonwearPeriods: w,
			deviceNonwearSource: y
		};
	}
	async loadMarkers(e, t, n, i, a, s) {
		const r = s ?? F(), o = await $t(e, t, n, i, a, r);
		return o ? kd(o) : null;
	}
	async saveActiwareRestEdit(e, t, n, i = F(), a) {
		const s = await i.actiwareFileData.get(e), r = (await i.actiwareStatisticsInputs.get(e))?.input, o = s?.actiwareSleepWake;
		if (!o || !r) throw new ti("This recording has no Actiware analysis settings, so its rest intervals cannot be edited.");
		const l = U(a), c = s?.actiwareIntervals ?? [], u = await Jn(c, t, n, {
			epochs: r.epochs,
			params: o.params,
			grid: {
				startTimestamp: o.startTimestamp,
				epochSeconds: o.epochSeconds
			},
			core: l
		}), d = _d(await i.markers.where("fileId").equals(e).toArray()), p = await Wn(u, r, d, (e) => l.actiwareIntervalStatistics(e)).catch(Hn), { username: f, selectedStudyId: m } = dt.getState(), h = cn.captureWorkspaceBinding(i, {
			username: f,
			studyId: m
		});
		if (!await cn.settleWritesForDb(i, h)) throw new ti(wd);
		let g = !1;
		return await ge(i, [
			i.actiwareFileData,
			i.markers,
			i.files,
			i.placementResults,
			i.projectMeta,
			i.auditLog
		], async () => {
			const s = await i.actiwareFileData.get(e);
			if (JSON.stringify(s?.actiwareIntervals ?? []) !== JSON.stringify(c)) throw new ti("That rest interval changed since it was shown; reload the night.");
			if (g = null === p || JSON.stringify(_d(await i.markers.where("fileId").equals(e).toArray())) !== JSON.stringify(d), await i.actiwareFileData.update(e, g ? {
				actiwareIntervals: u,
				actiwareStatisticsNeedsRecompute: !0
			} : {
				actiwareIntervals: u,
				actiwareStatistics: p ?? [],
				actiwareStatisticsNeedsRecompute: !1
			}), await i.placementResults.delete(e), await Tt([e], i, a), await Qe(i, [e]), !await cn.recordFileEventDurably({
				fileId: e,
				analysisDate: t,
				action: S.ACTIWARE_REST_EDITED,
				payload: {
					edit: n.kind,
					...Yn(c, u)
				}
			}, h)) throw new ti(wd);
		}, a), g && await vd(e, i, a), ni(u, t, d.includes(t));
	}
	async saveMarkers(e, t, n, i, a, s, r, o, l) {
		const c = o ?? F(), u = dt.getState(), d = ii(c, {
			username: n,
			studyId: u.selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, l), p = r?.signal ?? this.fileBatch(e, c)?.signal;
		let f, m = null, h = null, g = !1, y = r?.sleepPeriodDetection ?? u.sleepPeriodDetection;
		const w = await Ot({
			fileId: e,
			date: t,
			username: n,
			algorithm: a ?? null,
			detectionRule: s ?? null,
			signal: p
		}, c, async (o) => {
			const l = "function" == typeof i ? await i(o ? kd(o) : null) : {
				data: i,
				settings: r
			};
			if (!l) return null;
			m = l.data;
			const d = l.settings ?? r, w = f = await rt(e, c);
			en(w, u.analysisParadigm) && (m = {
				...m,
				sleepMarkers: Ln(m.sleepMarkers, (await ht(e, c))?.actiwareIntervals, t, m.isInvalidNight ?? o?.isInvalidNight ?? !1)
			}), y = tn({
				algorithm: a ?? "",
				sleepPeriodDetection: d?.sleepPeriodDetection ?? u.sleepPeriodDetection
			});
			const _ = y ? rn(y) : null, v = void 0 === d?.periodGuider ? an(u, w) : null, b = d?.periodGuider ?? v?.periodGuider, k = d?.periodGuider ?? (_ && !0 !== v?.placementFromSource ? Zt(Gt(_)) : v?.periodGuider), S = a ? N(a) : null, I = S ? z(S) : null, A = await $t(e, t, n, a ?? null, s ?? null, c);
			g = !A || A.algorithm !== (a ?? null) || A.detectionRule !== (s ?? null) || JSON.stringify(A.sleepMarkers) !== JSON.stringify(m.sleepMarkers) || void 0 !== m.isInvalidNight && m.isInvalidNight !== A.isInvalidNight, h = void 0 !== m.nonwearMarkers && "auto_score" !== n ? rd(A?.nonwearMarkers) : null;
			let x = m.sleepPeriodDetectionConfig ?? null;
			if (null === x) {
				const n = await tt(e, t, c);
				x = Ut({
					algorithm: a ?? null,
					periodGuider: oa(0, b, y),
					sleepPeriodDetection: y,
					diaryOnsetTime: Pe(n),
					diaryWakeTime: we(n)
				});
			}
			return {
				kind: "save",
				input: {
					signal: p,
					fileId: e,
					date: t,
					username: n,
					sleepMarkers: m.sleepMarkers,
					...void 0 !== m.nonwearMarkers ? { nonwearMarkers: m.nonwearMarkers } : {},
					...void 0 !== m.isInvalidNight ? { isInvalidNight: m.isInvalidNight } : {},
					...void 0 !== m.isInvalidNightImplicit ? { isInvalidNightImplicit: m.isInvalidNightImplicit } : {},
					...void 0 !== m.explicitNoNonwear ? { explicitNoNonwear: m.explicitNoNonwear } : {},
					notes: m.notes,
					...void 0 !== m.needsConsensus ? { needsConsensus: m.needsConsensus } : {},
					algorithm: a ?? null,
					detectionRule: s ?? null,
					periodGuider: k ?? null,
					sleepPeriodDetectionConfig: x,
					algorithmVersion: I,
					...void 0 !== d?.expected ? { expected: d.expected } : {},
					...void 0 !== d?.guardHashOnly ? { guardHashOnly: d.guardHashOnly } : {}
				}
			};
		}, null === d ? null : {
			...d,
			sleepPeriodDetection: d.sleepPeriodDetection ?? y
		});
		if (!w?.record || !m) return null;
		const _ = m, v = kd(w.record), b = Qt(f), k = g || !b ? void 0 : await c.actiwareFileData.get(e);
		if (b && (g || k?.actiwareStatisticsNeedsRecompute || k?.actiwareSleepWake && !k.actiwareStatistics?.length)) {
			const n = this.fileBatch(e, c);
			n ? n.actiwareNights.set(t, _.sleepMarkers) : await bd(e, /* @__PURE__ */ new Map([[t, _.sleepMarkers]]), c, p, { file: f }).catch((e) => {
				if (!p?.aborted) throw e;
			});
		}
		if (p?.aborted) return v;
		Qn(e, n, c, p), null !== h && h !== rd(_.nonwearMarkers) && pd(e, c, void 0, p), g && $t(e, t, n, a ?? null, s ?? null, c).then(async (t) => {
			if (!t) return;
			const { storeNightPeriodMetrics: n } = await import("./local-export-worker-BcfT00U8.js").then((e) => e.T);
			return n(t, await this.scorerVerdict(c, e, t.algorithm), c, p);
		}).catch(() => {
			console.warn("[local-analysis] period metrics could not be stored with the saved night");
		});
		try {
			if (F() !== c) return v;
		} catch {
			return v;
		}
		const S = C();
		if (!S.capabilities.tauri) return v;
		try {
			const [i, r] = await Promise.all([rt(e, c), $t(e, t, n, a ?? null, s ?? null, c)]);
			if (!i?.fileHash || !r?.contentHash) return v;
			await S.workspace.saveMarkers({
				fileHash: i.fileHash,
				date: t,
				username: n,
				sleepMarkers: (I = _.sleepMarkers, JSON.stringify(I.map((e) => ({
					onset_timestamp: e.onsetTimestamp,
					offset_timestamp: e.offsetTimestamp,
					marker_index: e.markerIndex,
					marker_type: e.markerType
				})))),
				nonwearMarkers: Mu(r.nonwearMarkers),
				isInvalidNight: r.isInvalidNight,
				notes: _.notes,
				contentHash: r.contentHash
			});
		} catch {
			console.warn("[platform] native marker mirror failed for the active local selection");
		}
		var I;
		return v;
	}
	async listFiles() {
		const t = F();
		return (await je(t)).map((t) => {
			const n = t.id ?? 0, i = l(t);
			return {
				id: n,
				filename: t.filename,
				source: "local",
				available_dates: t.availableDates,
				participant_id: t.participantId ?? null,
				source_type: i,
				source_profile_id: t.sourceProfileId ?? null,
				...void 0 !== t.ggirBundleRevision ? { ggir_bundle_revision: t.ggirBundleRevision } : {},
				...t.ggirNonwearDetector ? { ggir_nonwear_detector: t.ggirNonwearDetector } : {},
				views: e(n, i, /* @__PURE__ */ new Set(), t.epochLengthSeconds),
				count_epoch_seconds: t.epochLengthSeconds
			};
		});
	}
	async listDates(e) {
		const t = F();
		return (await rt(e, t))?.availableDates ?? gt(e, t);
	}
	async getDiaryEntry(e, t) {
		const n = F(), i = await tt(e, t, n);
		return i ? Ee(i, await xe(e, n)) : null;
	}
	async listDiaryEntries(e) {
		const t = F(), n = await et(e, t);
		if (0 === n.length) return n;
		const i = await xe(e, t);
		return null === i ? n : qe(n, i);
	}
	async loadPlacementFileContext(e, t, n, i, a, s, r, o, l, c, u, d = this.fileBatch(e, s)) {
		if (!d) return this.readPlacementFileContext(e, t, n, i, a, s, r, o, l, c, u, null);
		const p = JSON.stringify([
			n ?? null,
			r,
			o,
			l,
			a,
			c
		]);
		let f = d.placementContexts.get(p);
		f || (f = this.readPlacementFileContext(e, null, n, i, a, s, r, o, l, c, u, d), d.placementContexts.set(p, f), f.catch(() => {
			d.placementContexts.delete(p);
		}));
		const { contextDays: m, deviceOffNonwear: h } = await f;
		return {
			contextDays: m.filter((e) => e.analysisDate !== t),
			deviceOffNonwear: h
		};
	}
	async readPlacementFileContext(e, t, n, i, a, s, r, o, l, c, u, d) {
		const p = U(u), [f, m, g] = await Promise.all([
			d?.days ? [...d.days.keys()].sort() : gt(e, s),
			this.placementDiaries(e, s, d),
			Ju(r) ? ke(e, s) : Ge(e, s)
		]), y = await qe(m, a, p), w = new Map(y.map((e) => [e.analysisDate, e])), _ = [], v = f.filter((e) => e !== t), b = await Promise.all(v.map((t) => this.placementDay(e, t, s, d)));
		for (const [k, S] of v.entries()) {
			const e = b[k];
			if (!e) continue;
			for (const n of r) await na(e, n, c, s, p, u, d?.activityDayMemo);
			const t = await he(e, i, `autoScore context ${S}`, c, p);
			if (!t || 0 === t.timestamps.length || 0 === t.sleepScores.length) continue;
			const a = w.get(S), f = t.timestamps[0] ?? 0, m = t.timestamps[t.timestamps.length - 1] ?? f, y = await it(t.timestamps, h(n), p), v = Hu(kn(await An(r, t.nonwearMasksByDetector, {
				offPeriods: o,
				source: l
			}, {
				timestampsSec: t.timestamps,
				epochLenSec: y
			}, p)));
			_.push({
				analysisDate: S,
				epochLengthSeconds: y,
				timestamps: t.timestamps,
				activityCounts: t.axisY,
				sleepScores: t.sleepScores,
				choiNonwear: v.choiNonwear,
				...v.nonwearWeight ? { nonwearWeight: v.nonwearWeight } : {},
				...v.nonwearMemberFlags ? { nonwearMemberFlags: v.nonwearMemberFlags } : {},
				sensorNonwear: g.filter((e) => e.startTimestamp <= m && e.endTimestamp >= f),
				diaryBedTime: Se(a),
				diaryOnsetTime: Pe(a),
				diaryWakeTime: we(a),
				diaryNaps: a ? Fe(a) : null,
				diaryNonwear: a ? Oe(a) : null
			});
		}
		return {
			contextDays: _,
			deviceOffNonwear: g
		};
	}
	async autoScore(e, t, n, i) {
		const a = i ?? F();
		if (this.fileBatch(e, a)) return this.autoScoreNight(e, t, n, ci, a);
		const s = {}, r = await wt(e, a, s), o = {
			db: a,
			signal: n.signal,
			depth: 0,
			actiwareNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map(),
			activityDayMemo: s,
			span: Promise.resolve(qu(r))
		};
		return this.autoScoreNight(e, t, n, ci, a, void 0, void 0, void 0, o);
	}
	async autoScoreFile(e, t, n = !0, i = F(), a) {
		if (E(i.name)) return /* @__PURE__ */ new Map();
		const s = await this.filePlacementState(e, t, i);
		if (!s) return /* @__PURE__ */ new Map();
		const { file: r, inputs: o, cached: l } = s, c = Kt(r);
		return c ? new Map(r.availableDates.map((e) => [e, {
			kind: "refused",
			reason: c
		}])) : l ? hd(i, e, o, l, t.signal) : n ? q({
			kind: R.AUTO_SCORE,
			key: `${R.AUTO_SCORE}:${String(e)}:${o}`,
			label: "Compute marker placement",
			workspaceId: i.name,
			signal: t.signal,
			run: async (n) => {
				const l = a?.inputs === o ? a.byDate : await this.computeFilePlacement(s, t, i, n);
				return await this.storeFilePlacement(e, o, l, i, {
					...t,
					signal: n.signal
				}) ? (n.progress(r.availableDates.length, r.availableDates.length), hd(i, e, o, l, n.signal)) : /* @__PURE__ */ new Map();
			}
		}) : /* @__PURE__ */ new Map();
	}
	async filePlacementState(e, t, n) {
		const i = await rt(e, n), a = md.get(n)?.get(e), [s, o, l] = await Promise.all([
			et(e, n),
			n.markerProvenance.get(e),
			a ? void 0 : Wu(n, e)
		]);
		if (!i) return null;
		const c = await r.waitFor(async function(e, t, n, i) {
			const a = dt.getState(), s = t.ruleset ?? a.placementRuleset, r = /* @__PURE__ */ new Set([p.VAN_HEES_2015, ...t.algorithm && ae(t.algorithm) ? [t.algorithm] : []]), o = (e) => "auto_score" === e.username && r.has(e.algorithm ?? ""), l = (i?.rows ?? []).filter((e) => o(e) || s !== g.LEGACY && e.nonwearDecided).map((e) => [e.id, o(e) ? e.lastModifiedAt : e.nonwearSpans ?? e.lastModifiedAt]), { signal: c, choiAxis: u, hasptVariant: d, studySettingsRevision: f, ...m } = t;
			return O(JSON.stringify({
				v: 2,
				options: m,
				ruleset: s,
				nonwearDetectors: t.nonwearDetectors ?? hn(Dn(t.algorithm)),
				choiAxis: t.choiAxis ?? a.choiAxis,
				hasptVariant: t.hasptVariant ?? a.ggirHasptVariant,
				seriesRevision: e.seriesRevision ?? 0,
				dates: e.availableDates,
				diaries: n,
				rows: l
			}));
		}(i, t, s, o));
		if (a?.inputs === c) return {
			fileId: e,
			file: i,
			diaries: s,
			inputs: c,
			cached: a.byDate
		};
		const u = a ? await Wu(n, e) : l;
		return {
			fileId: e,
			file: i,
			diaries: s,
			inputs: c,
			cached: u?.inputs === c ? new Map(Object.entries(u.byDate)) : null
		};
	}
	async storeFilePlacement(e, t, n, i, a) {
		if (a.signal?.throwIfAborted(), E(i.name)) return !1;
		const s = await ge(i, [
			i.files,
			i.diaryEntries,
			i.markerProvenance,
			i.placementResults,
			i.studySettings
		], async () => {
			if (void 0 !== a.studySettingsRevision && ((await Ae(i))?.contentHash ?? null) !== a.studySettingsRevision) return !1;
			const s = await this.filePlacementState(e, a, i);
			return !E(i.name) && s?.inputs === t && (await i.placementResults.put({
				fileId: e,
				policy: 2,
				inputs: t,
				byDate: Object.fromEntries(n)
			}), !0);
		}, a.signal);
		return s && F() === i && Ct(e, i), s;
	}
	async storeFilesPlacement(e, n, i, a, s) {
		const r = [], o = await Promise.allSettled(e.map(({ fileId: e, options: t }) => this.filePlacementState(e, t, n))), l = {
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: P()
		}, c = o.flatMap((e) => "fulfilled" === e.status && e.value ? [e.value.file] : []), u = c.flatMap((e) => e.sourceType === m.GGIR_5S_UPLOAD ? [{ size: e.sourceSizeBytes ?? 0 }] : []), d = u.length > 0 && u.length === c.length ? L(u, l) : {
			...l,
			maxExtraWorkers: Number.POSITIVE_INFINITY
		}, p = await J(e.map(({ fileId: e, options: a }, l) => ({
			name: `placement:${String(e)}`,
			cost: 1,
			run: async (c, u) => {
				try {
					const r = new t(), u = o[l];
					if ("rejected" === u.status) throw u.reason;
					const d = u.value;
					if (!d || d.cached) return null;
					const p = await r.computeFilePlacement(d, a, n, i, c, s);
					return {
						fileId: e,
						inputs: d.inputs,
						byDate: p
					};
				} catch {
					return i.signal.throwIfAborted(), u.primary || u.cancel(), r.push(e), null;
				}
			}
		})), {
			createWorker: v,
			extraWorkers: H(d),
			cancelOperation: () => {},
			...a,
			signal: i.signal
		});
		for (const [t, f] of p.entries()) {
			try {
				f && await this.storeFilePlacement(f.fileId, f.inputs, f.byDate, n, e[t].options) && hd(n, f.fileId, f.inputs, f.byDate, i.signal);
			} catch {
				i.signal.throwIfAborted(), r.push(e[t].fileId);
			}
			i.progress(t + 1, p.length);
		}
		if (r.length > 0) {
			const e = `Marker placement failed for recording ID(s) ${r.sort((e, t) => e - t).map(String).join(", ")}.`;
			throw i.progress(p.length, p.length, e), new Error(e);
		}
	}
	async storedAutoScore(e, t, n) {
		return (await this.autoScoreFile(e, n, !1)).get(t) ?? {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
	}
	async computeFilePlacement(e, t, n, i, a, s) {
		const r = e.fileId, o = e.file.availableDates, l = {
			...t,
			signal: i.signal
		};
		return pt(async (c) => {
			const u = await wt(r, n, c), d = s ?? (await ui(n)).csvText, p = void 0 !== a && ae(t.algorithm), f = [];
			let m, h = o.length;
			const g = new Promise((e) => {
				m = e;
			}).then(async () => {
				if (0 !== f.length) try {
					i.signal.throwIfAborted();
					const e = f.map((e) => e.opts), n = p && a ? await a.placeStoredGgirNights([...u.values()], Me([...u.values()], t.algorithm), f.map((e) => ({
						options: e.opts,
						...e.anchor
					}))) : await function(e, t = b()) {
						return Wt(e, t);
					}(e, a ?? U(i.signal));
					i.signal.throwIfAborted();
					for (const [t, i] of f.entries()) i.resolve(n[t]);
				} catch (e) {
					for (const t of f) t.reject(e);
				}
			}), y = this.beginFileBatch(r, n, i.signal), w = this.fileBatch(r, n), _ = {
				activityDayMemo: w.activityDayMemo,
				days: w.days,
				span: w.span,
				file: w.file,
				diaries: w.diaries,
				markers: w.markers
			};
			w.activityDayMemo = c, w.days = u, w.span = Promise.resolve(qu(u)), w.file = Promise.resolve(e.file), w.diaries = Promise.resolve(e.diaries);
			try {
				0 === o.length && m();
				const e = await Promise.all(o.map(async (e) => {
					let t = !1;
					const i = () => {
						t || (t = !0, h -= 1, 0 === h && m());
					};
					try {
						return [e, await this.autoScoreNight(r, e, l, (e) => new Promise((t, n) => {
							f.push({
								opts: e,
								resolve: t,
								reject: n
							}), i();
						}), n, d, a, p ? (e, t, n) => new Promise((a, s) => {
							f.push({
								opts: e,
								anchor: {
									day: t,
									nextDay: n
								},
								resolve: a,
								reject: s
							}), i();
						}) : void 0)];
					} finally {
						i();
					}
				}));
				await g;
				const t = new Map(e);
				return i.signal.throwIfAborted(), t;
			} finally {
				Object.assign(w, _), await y.end();
			}
		});
	}
	async autoScoreNight(e, t, n, i, a = F(), s, r, o, l) {
		const c = r ?? U(n.signal);
		n.signal?.throwIfAborted();
		const d = l ?? this.fileBatch(e, a), f = await (d ? d.file ??= rt(e, a) : rt(e, a)), m = Kt(f);
		if (m) return {
			kind: "refused",
			reason: m
		};
		const y = n.ruleset ?? dt.getState().placementRuleset, w = Dn(n.algorithm), _ = n.nonwearDetectors ?? hn(w), v = n.choiAxis ?? dt.getState().choiAxis, b = n.sleepPeriodDetection ? rn(n.sleepPeriodDetection) : void 0;
		let k = Sn(b, {
			path: w,
			selected: _
		}) ?? null;
		const S = await ce(e, t, a, (t) => this.placementDay(e, t, a, d), void 0, c);
		if (!S) return {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
		const I = () => Qt(f) ? d ? d.actiware ??= ht(e, a) : ht(e, a) : Promise.resolve(void 0);
		if (n.algorithm === p.ACTIWARE_SLEEP_WAKE) {
			const e = await I(), i = Pt(e?.actiwareIntervals, t), a = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(11, 19), s = e?.actiwareRestProposal?.notes?.[t], r = (e?.actiwareIntervals ?? []).some((e) => "rest" === e.kind && "scorer" === e.origin && null !== nn([e], t)), o = s && !r ? [`Rest proposal (SCREENS Autoscore): ${s}`] : [], { source_a: l, source_b: c, fusion_policy: d, apply_nonwear_gate: p } = rn(tn({
				algorithm: n.algorithm,
				periodGuider: n.periodGuider,
				sleepPeriodDetection: n.sleepPeriodDetection
			})), f = {
				...k,
				source_a: l,
				source_b: c,
				fusion_policy: d,
				apply_nonwear_gate: p
			};
			if (!i?.sleep) {
				const t = e?.actiwareIntervalsRefusal, n = (e?.actiwareIntervals ?? []).filter((e) => "rest" === e.kind && "scorer" !== e.origin), s = null !== i && n.some((e) => e.startTimestamp === i.rest.startTimestamp && e.endTimestamp === i.rest.endTimestamp);
				return {
					kind: "placed",
					sleep_markers: [],
					nap_markers: [],
					decisions: [],
					sleep_period_detection_config: f,
					notes: [i ? t && s ? `The Actiware sleep interval inside this night's rest interval (${a(i.rest.startTimestamp)}–${a(i.rest.endTimestamp)}) could not be set: ${t}.` : `Actiware sets no sleep interval inside this night's rest interval (${a(i.rest.startTimestamp)}–${a(i.rest.endTimestamp)}).` : t && 0 === n.length ? `Actiware rest intervals could not be set for this recording: ${t}.` : "Actiware sets no rest interval for this night.", ...o]
				};
			}
			return {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: i.sleep.startTimestamp,
					offset_timestamp: i.sleep.endTimestamp,
					marker_type: u.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: (i.additionalSleeps ?? []).map((e, t) => ({
					onset_timestamp: e.startTimestamp,
					offset_timestamp: e.endTimestamp,
					marker_type: u.NAP,
					marker_index: t + 2
				})),
				decisions: [],
				sleep_period_detection_config: f,
				notes: [`Actiware sleep interval ${a(i.sleep.startTimestamp)}–${a(i.sleep.endTimestamp)} inside rest interval ${a(i.rest.startTimestamp)}–${a(i.rest.endTimestamp)}, as Actiware sets it.`, ...o]
			};
		}
		const x = await this.placementDay(e, await ne(t, void 0, c), a, d), $ = await I(), N = le(f?.sourceType, f?.sourceProfileId), T = await Gu([S, x], _, v, N, a, n.signal, d?.activityDayMemo), z = await this.scorerVerdict(a, e, n.algorithm, { file: f }, d), M = ae(n.algorithm), D = M && o ? { kind: "angle-deferred" } : await ie({
			day: S,
			nextDay: x,
			verdict: z,
			angle: M,
			requireScores: !0,
			missingScoresReason: n.algorithm === p.LSTM_SLEEP_WAKE ? "No LSTM sleep/wake results are stored for this file. Re-import or reprocess the raw file so the app can compute spectral features and run the ONNX model." : "No algorithm results available",
			choiAxis: v,
			laterDays: async () => [...(d?.days ?? await wt(e, a, d?.activityDayMemo)).values()].filter((e) => e.date > t).sort((e, t) => e.date.localeCompare(t.date)),
			core: c
		});
		if ("refused" === D.kind) return D;
		const R = M ? null : Uu(T);
		if (null !== R) return {
			kind: "refused",
			reason: R
		};
		k = Sn(b, {
			path: w,
			selected: _,
			available: T.available,
			dropped: T.dropped
		}) ?? null;
		const E = $n(T.dropped, w), C = (e) => "refused" === e.kind || null === k && 0 === E.length ? e : {
			...e,
			notes: [...E, ...e.notes],
			sleep_period_detection_config: {
				...e.sleep_period_detection_config ?? {},
				...k ?? {}
			}
		};
		if ("angle" === D.kind || "angle-legacy" === D.kind || "angle-deferred" === D.kind) {
			const r = await this.placementMarker(e, t, n.algorithm ?? null, a, d) ?? await this.placementMarker(e, t, p.VAN_HEES_2015, a, d), l = r?.sleepMarkers[0], m = null != l?.onsetTimestamp && null != l.offsetTimestamp ? {
				startTimestamp: l.onsetTimestamp,
				endTimestamp: l.offsetTimestamp
			} : null, h = () => l && null != l.onsetTimestamp && null != l.offsetTimestamp ? {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: l.onsetTimestamp,
					offset_timestamp: l.offsetTimestamp,
					marker_type: u.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: [],
				notes: ["HDCZA fallback: no 5s SIB stream available for structured sleep-period fusion", `HDCZA window: ${Et(l.onsetTimestamp)} – ${Et(l.offsetTimestamp)}`],
				decisions: [],
				sleep_period_detection_config: r?.sleepPeriodDetectionConfig ?? k
			} : {
				kind: "refused",
				reason: "No HDCZA sleep window found — re-process the file to regenerate it"
			};
			if ("angle" === D.kind || "angle-deferred" === D.kind) {
				let l = {
					timestamps: /* @__PURE__ */ new Float64Array(),
					activityCounts: /* @__PURE__ */ new Float64Array(),
					sleepScores: /* @__PURE__ */ new Uint8Array()
				};
				if ("angle" === D.kind) {
					const e = await Y(D, t, c);
					if ("refused" === e.kind) return e;
					l = e.series;
				}
				const [u, p] = await Promise.all([this.placementDiary(e, t, a, d), d ? d.span ??= xe(e, a, f?.seriesRevision ?? 0) : xe(e, a, f?.seriesRevision ?? 0)]), w = u ? await Ee(u, p, c) : null, _ = (await ca(n.sensorLocation ?? "wrist", n.hasptVariant ?? dt.getState().ggirHasptVariant, c)).variant, v = function(e) {
					const t = e?.sleepPeriodDetectionConfig?.haspt_variant;
					return Object.values(A).includes(t) ? t : null;
				}(r), b = null == r ? null : null == v ? `HASPT variant not recorded at import; assumed ${_} from the study setting. Reprocess the file to record it.` : v !== _ ? `HASPT variant at import was ${v}; the study setting now gives ${_}. Placed with ${v}; reprocess the file to apply ${_}.` : null, k = y === g.GGIR_PART4, I = k ? await Be(await this.placementDiaries(e, a, d), void 0, c) : null, $ = I?.wakeIsOutBed ? null : st(w, I?.outBedIsWake ? "diary_out_of_bed_time" : "diary_wake_time"), N = I?.outBedIsWake ? null : st(w, I?.wakeIsOutBed ? "diary_wake_time" : "diary_out_of_bed_time"), T = {
					...l,
					choiNonwear: null,
					ggirHasptAlgo: v ?? _,
					ggirConfigCsv: s ?? (await ui(a)).csvText,
					...I?.hasBedlog ? { ggirDiaryHasBedlog: !0 } : {},
					...I?.hasSleeplog ? { ggirDiaryHasSleeplog: !0 } : {},
					diaryBedTime: k ? st(w, "diary_in_bed_time") : Se(w),
					diaryOutBedTime: k ? N : ot(w),
					diaryOnsetTime: k ? st(w, "diary_onset_time") : Pe(w),
					diaryWakeTime: k ? $ : we(w),
					diaryNaps: w ? Fe(w) : null,
					analysisDate: t,
					onsetMinConsecutiveSleep: 1,
					offsetMinConsecutiveMinutes: 1,
					algorithm: n.algorithm,
					periodGuider: oa(n.algorithm, n.periodGuider, n.sleepPeriodDetection),
					...void 0 !== n.sleepPeriodDetection ? { sleepPeriodDetection: n.sleepPeriodDetection } : {},
					...n.scorerPostprocessing ? { scorerPostprocessing: n.scorerPostprocessing } : {},
					ruleset: y,
					epochLengthSeconds: 5,
					hdczaWindow: m
				}, z = "angle-deferred" === D.kind ? await o(T, S, x) : await i(T);
				return "angle-legacy" === z ? h() : C(b && "refused" !== z.kind ? {
					...z,
					notes: [b, ...z.notes]
				} : z);
			}
			return h();
		}
		const [O, P] = await Promise.all([this.placementDiary(e, t, a, d), d ? d.span ??= xe(e, a, f?.seriesRevision ?? 0) : xe(e, a, f?.seriesRevision ?? 0)]), j = O ? await Ee(O, P, c) : null, { unpacked: B } = D, { timestamps: Z, axisY: q, sleepScores: G, eventMarkerTimestamps: H } = B, J = Xt(n.detectionRule), L = oa(n.algorithm, n.periodGuider, n.sleepPeriodDetection), W = await this.placementMarker(e, t, p.VAN_HEES_2015, a, d), V = W?.sleepMarkers.find((e) => e.markerType === u.MAIN_SLEEP) ?? W?.sleepMarkers[0], K = null != V?.onsetTimestamp && null != V.offsetTimestamp ? {
			startTimestamp: V.onsetTimestamp,
			endTimestamp: V.offsetTimestamp
		} : null, X = await it(Z, h(n.algorithm), c), Q = T.available.some(zn) ? await (d ? d.sensor ??= Re(e, a) : Re(e, a)) : [], ee = Hu(kn(await An(T.available, B.nonwearMasksByDetector, {
			offPeriods: Q,
			source: N
		}, {
			timestampsSec: Z,
			epochLenSec: X
		}, c))), te = y !== g.LEGACY ? await this.loadPlacementFileContext(e, t, n.algorithm, z, P, a, T.available, Q, N, v, n.signal, d) : null, { startIndex: se, endIndex: re } = await qn(Z, t, c);
		if (se === re) return {
			kind: "refused",
			reason: "No activity data found for this date"
		};
		const oe = Z.slice(se, re), ue = q.slice(se, re), de = G.slice(se, re), pe = ee.choiNonwear ? ee.choiNonwear.slice(se, re) : null, fe = ee.nonwearWeight ? ee.nonwearWeight.slice(se, re) : null, me = ee.nonwearMemberFlags ? ee.nonwearMemberFlags.slice(se, re) : null, he = oe[0] ?? 0, ge = oe[oe.length - 1] ?? he, ye = nn($?.actiwareIntervals, t);
		return C(await i({
			timestamps: oe,
			activityCounts: ue,
			sleepScores: de,
			choiNonwear: pe,
			...fe ? { nonwearWeight: fe } : {},
			...me ? { nonwearMemberFlags: me } : {},
			diaryBedTime: Se(j),
			diaryOnsetTime: Pe(j),
			diaryWakeTime: we(j),
			diaryNaps: j ? Fe(j) : null,
			diaryNonwear: j ? Oe(j) : null,
			analysisDate: t,
			onsetMinConsecutiveSleep: J.onsetN,
			offsetMinConsecutiveMinutes: J.offsetN,
			algorithm: n.algorithm,
			periodGuider: L,
			...void 0 !== n.sleepPeriodDetection ? { sleepPeriodDetection: n.sleepPeriodDetection } : {},
			...n.scorerPostprocessing ? { scorerPostprocessing: n.scorerPostprocessing } : {},
			ruleset: y,
			nonwearDetectors: ee.nonwearDetectors,
			epochLengthSeconds: X,
			hdczaWindow: K,
			eventMarkerTimestamps: H.filter((e) => e >= he && e <= ge + 60),
			actiwareRestWindow: ye,
			nightStartHour: Jt(n.nightStartHour),
			nightEndHour: Jt(n.nightEndHour),
			...te ? {
				sensorNonwear: te.deviceOffNonwear.filter((e) => e.startTimestamp <= ge && e.endTimestamp >= he),
				contextDays: te.contextDays
			} : {}
		}));
	}
	async autoNonwear(e, t, n) {
		if (void 0 === n.threshold) throw new Error("Local auto-nonwear requires a resolved nonwear threshold.");
		const i = F(), a = await ce(e, t, i, (t) => Le(e, t, i, this.fileBatch(e, i)?.activityDayMemo));
		if (!a) return {
			kind: "refused",
			reason: "No activity data"
		};
		const [s, r, o, l] = await Promise.all([
			Le(e, await ne(t), i, this.fileBatch(e, i)?.activityDayMemo),
			tt(e, t, i),
			Re(e, i),
			rt(e, i)
		]), c = dt.getState(), u = an(c, l), d = n.nonwearDetectors ?? ("ggir" === Dn(u.algorithm) ? c.nonwearDetectorsGgir : u.nonwearDetectorsCounts), p = le(l?.sourceType, l?.sourceProfileId), f = await Gu([a, s], d, gn(), p, i, void 0, this.fileBatch(e, i)?.activityDayMemo), m = Uu(f);
		if (null !== m) return {
			kind: "refused",
			reason: m
		};
		const h = await ie({
			day: a,
			nextDay: s,
			verdict: $e,
			angle: !1,
			requireScores: !1,
			missingScoresReason: "",
			choiAxis: gn(),
			laterDays: () => Promise.resolve([])
		});
		if ("counts" !== h.kind) return {
			kind: "refused",
			reason: "refused" === h.kind ? h.reason : K
		};
		const g = h.unpacked, { timestamps: y, axisY: w } = g, _ = y[0] ?? 0, v = y[y.length - 1] ?? _, S = kn(await An(f.available, g.nonwearMasksByDetector, {
			offPeriods: o.filter((e) => e.startTimestamp <= v && e.endTimestamp >= _),
			source: p
		}, {
			timestampsSec: y,
			epochLenSec: We(a, l) ?? await it(y, 60)
		})), I = Hu(S), A = Ju(f.available), x = r ? Oe(r) : [], $ = n.existingSleepMarkers, N = await async function(e) {
			if (0 === e.timestamps.length || 0 === e.activityCounts.length) return qt("No activity data");
			const t = {
				diary_nonwear: (e.diaryNonwear ?? []).filter(([e, t]) => null != e && null != t).map(([e, t]) => ({
					start_time: e,
					end_time: t
				})),
				choi_nonwear: null == e.choiNonwear ? null : [],
				sensor_nonwear_periods: e.sensorNonwearPeriods.map(([e, t]) => ({
					start_timestamp: e,
					end_timestamp: t
				})),
				existing_sleep_markers: e.existingSleepMarkers.map(([e, t]) => ({
					onset_timestamp: e,
					offset_timestamp: t
				})),
				analysis_date: e.analysisDate,
				epoch_length_seconds: e.epochLengthSeconds ?? 60,
				threshold: e.threshold ?? 0,
				min_duration_minutes: e.minDurationMinutes ?? 10,
				zero_activity_ratio: .65,
				diary_min_duration_minutes: e.diaryMinDurationMinutes ?? 1,
				...Bt(e.nonwearDetectors, e.nonwearWeight, {
					alwaysNameSingle: !0,
					memberFlags: e.nonwearMemberFlags
				})
			}, n = [
				JSON.stringify(t),
				e.timestamps instanceof Float64Array ? e.timestamps : Float64Array.from(e.timestamps),
				e.activityCounts instanceof Float64Array ? e.activityCounts : Float64Array.from(e.activityCounts),
				e.choiNonwear instanceof Uint8Array ? e.choiNonwear : Uint8Array.from(e.choiNonwear ?? [])
			], i = n.slice(1).filter((t) => ArrayBuffer.isView(t) && t !== e.timestamps && t !== e.activityCounts && t !== e.choiNonwear), a = await b().placeNonwearMarkers(k(n, i.map((e) => e.buffer)));
			return a ? {
				kind: "placed",
				nonwear_markers: a.nonwear_markers,
				notes: a.notes
			} : qt("Nonwear placement is unavailable in this build — reload while online to update the local engine.");
		}({
			timestamps: y,
			activityCounts: w,
			diaryNonwear: x,
			choiNonwear: A ? null : I.choiNonwear,
			nonwearDetectors: I.nonwearDetectors,
			...I.nonwearWeight ? { nonwearWeight: I.nonwearWeight } : {},
			...I.nonwearMemberFlags ? { nonwearMemberFlags: I.nonwearMemberFlags } : {},
			sensorNonwearPeriods: A ? o.filter((e) => e.startTimestamp <= v && e.endTimestamp >= _).sort((e, t) => e.startTimestamp - t.startTimestamp).map((e) => [e.startTimestamp, e.endTimestamp]) : [],
			existingSleepMarkers: $,
			analysisDate: t,
			threshold: n.threshold
		});
		return "refused" === N.kind ? N : {
			kind: "placed",
			nonwear_markers: N.nonwear_markers.map((e) => yn(e, S?.available.length ?? 0)),
			notes: [...$n(f.dropped, Dn(u.algorithm)), ...N.notes]
		};
	}
	async listFileScoringCounts(e, t, n) {
		return this.fileScoringCountsIn(F(), e, t, n);
	}
	async fileScoringCountsIn(e, t, n, i) {
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const { nightStartHour: a, nightEndHour: s } = od(i), [r, o] = await Promise.all([e.files.bulkGet([...t]), Te(t, e)]);
		return Promise.all(t.map(async (t, i) => {
			const l = r[i], c = l?.availableDates ?? await gt(t, e), u = /* @__PURE__ */ new Map();
			for (const e of o[i]?.rows ?? []) e.username === n && u.set(e.date, yt(u.get(e.date), e));
			const d = l?.nightDifficulty, p = d?.nightStartHour === a && d.nightEndHour === s;
			return {
				file_id: t,
				scored_dates: c.filter((e) => u.get(e)?.scored ?? !1).length,
				nonwear_scored_dates: c.filter((e) => u.get(e)?.nonwearDecided ?? !1).length,
				total_dates: c.length,
				no_diary_dates: p ? c.filter((e) => -1 === d.byDate[e]).length : 0,
				no_diary_current: p
			};
		}));
	}
	async listDatesStatus(e, t, n, i) {
		return await this.storedDatesStatus(e, t, n, i) ?? await this.computeDatesStatus(e, t, n, i);
	}
	async storedDatesStatus(e, t, n, i) {
		const a = F(), s = (await rt(e, a))?.nightDifficulty, { nightStartHour: r, nightEndHour: o } = od(i);
		if (s?.nightStartHour !== r || s.nightEndHour !== o || !t.every((e) => e in s.byDate)) return null;
		void 0 === s.notRankableReason && b().getComputeIdentity().then(({ sourceRevision: t }) => {
			s.sourceRevision !== String(t) && pd(e, a, i);
		}, () => {});
		const [l, c] = await Promise.all([ye(e, a), Wu(a, e)]), u = _t(l, n), d = _t(l, Mt), p = Xe(l), f = t.filter((e) => (p.get(e)?.size ?? 0) >= 2), m = await mu(f.flatMap((e) => [{
			usersForDate: p.get(e),
			kind: "sleep"
		}, {
			usersForDate: p.get(e),
			kind: "nonwear"
		}])), h = new Set(f.filter((e, t) => m[2 * t].disagree || m[2 * t + 1].disagree));
		return t.map((e) => ({
			date: e,
			...ad(u.get(e), h.has(e), d.get(e), Lu(c, e, d.get(e))),
			complexity_pre: s.byDate[e] ?? null,
			complexity_post: null
		}));
	}
	async computeDatesStatus(e, t, n, i, a) {
		let s;
		const r = new Promise((e) => {
			s = e;
		}), o = this.datesStatusGeneration(e, t, n, i, s, a);
		return o.catch(() => {}), a ? o : Promise.race([r, o]);
	}
	async datesStatusGeneration(e, t, n, i, a, s) {
		s?.throwIfAborted();
		const o = U(s);
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const l = F(), c = ++this.nextComplexityGenerationToken;
		let u, d;
		const p = new Promise((e, t) => {
			u = e, d = t;
		});
		p.catch(() => {}), this.latestComplexityTokenByFile.set(e, c), this.complexitySnapshotByFile.delete(e), this.complexitySignalGenerationByFile.delete(e), this.complexityFailureByFile.delete(e), this.complexityGenerationByFile.set(e, {
			token: c,
			promise: p
		});
		try {
			const d = async () => {
				const t = await ye(e, l), [i, a, s, r, o] = await Promise.all([
					wt(e),
					et(e),
					ke(e, l, t),
					Eu(e, l),
					rt(e)
				]);
				return [
					_t(t, n),
					_t(t, Mt),
					i,
					a,
					s,
					Xe(t),
					Ru(t),
					r,
					o
				];
			}, [p, m, h, g, y, w, _, v, b] = "function" == typeof l.transaction ? await l.transaction("r", [
				l.markers,
				l.activityDays,
				l.diaryEntries,
				l.sensorNonwear,
				l.dailyGgirSummaries,
				l.files
			], async () => {
				if (F() !== l) throw new Error("The local workspace changed before difficulty inputs could be read.");
				const e = await d();
				if (F() !== l) throw new Error("The local workspace changed while difficulty inputs were being read.");
				return e;
			}) : await d(), k = qu(h), I = new Map((await qe(g, k, o)).map((e) => [e.analysisDate, e])), { nightStartHour: A, nightEndHour: x } = od(i), $ = t.filter((e) => (w.get(e)?.size ?? 0) >= 2), N = await mu($.flatMap((e) => [{
				usersForDate: w.get(e),
				kind: "sleep"
			}, {
				usersForDate: w.get(e),
				kind: "nonwear"
			}]), o), T = new Set($.filter((e, t) => N[2 * t].disagree || N[2 * t + 1].disagree)), z = await Wu(l, e), M = (e) => t.map((t) => ({
				date: t,
				...ad(p.get(t), T.has(t), m.get(t), Lu(z, t, m.get(t))),
				complexity_pre: e(t),
				complexity_post: null
			})), D = b?.nightDifficulty;
			D?.nightStartHour === A && D.nightEndHour === x && t.every((e) => e in D.byDate) && (s?.throwIfAborted(), a(M((e) => D.byDate[e] ?? null)));
			const R = [], E = [...t], C = await di(E, o), O = new Map(E.map((e, t) => [e, C[t] ?? !1])), P = Me(h.values()), j = /* @__PURE__ */ new Map();
			for (const n of t) {
				s?.throwIfAborted();
				const t = await Bu(h, n, P, o, j);
				if (!t) continue;
				const { timestamps: i, axisY: a, sleepScores: r, nonwearResults: l, temperature: c, detachNonwear: u, ggirTimestamps: d, ggirAnglez: p } = t, f = Vu(i, i.length), m = Vu(a, f.length), g = Ku(r, f.length);
				if (0 === f.length || 0 === m.length || 0 === g.length) continue;
				const w = I.get(n), b = _.get(n) ?? null, k = await En((t) => {
					const i = ze(Pe(w), t), a = ze(we(w), t);
					return {
						naps: w ? Fe(w).map(([e, n]) => ({
							onset_time: ze(e, t),
							offset_time: ze(n, t)
						})).filter((e) => null != e.onset_time) : [],
						nonwear: w ? Oe(w).map(([e, n]) => [ze(e, t), ze(n, t)]).filter((e) => null != e[0] && null != e[1]).map(([e, t]) => ({
							start_time: e,
							end_time: t
						})) : [],
						onset: i,
						wake: a,
						inBed: ze(Se(w), t),
						outBed: ze(ot(w), t),
						guiderTargets: Xu(n, i, a, b, bt(e), t)
					};
				}, new On(o)), S = k.naps, A = k.nonwear, x = f[0] ?? 0, $ = f[f.length - 1] ?? x, N = k.onset, T = k.wake, z = v.get(n)?.calibration?.errorEnd;
				R.push({
					analysis_date: n,
					epoch_length_seconds: await it(f, 60, o),
					timestamps: f,
					activity_counts: m,
					sleep_scores: g,
					choi_nonwear: Ku(l, f.length),
					sensor_nonwear: y.filter((e) => e.startTimestamp <= $ && e.endTimestamp >= x).map((e) => ({
						start_ts: e.startTimestamp,
						end_ts: e.endTimestamp
					})),
					diary_onset_time: N,
					diary_wake_time: T,
					diary_nap_count: S.length,
					diary_naps: S,
					diary_nonwear: A,
					diary_in_bed_time: k.inBed,
					diary_out_bed_time: k.outBed,
					is_weekend: O.get(n) ?? null,
					guider_targets: k.guiderTargets,
					anglez: Yu(f, d, p),
					light: [],
					temperature: Vu(c, f.length),
					heart_rate: [],
					detach_nonwear: Ku(u, f.length),
					calibration_error: "number" == typeof z && Number.isFinite(z) ? z : null,
					imputed_fraction: null,
					hdcza_window: b
				});
			}
			let B, Z;
			try {
				if (R.length > 0) {
					const n = {
						config: { signals: {
							night_start_hour: A,
							night_end_hour: x
						} },
						days: R
					}, i = {
						config: n.config ?? null,
						days: n.days.map((e) => ({
							analysis_date: e.analysis_date,
							epoch_length_seconds: e.epoch_length_seconds,
							timestamps: e.timestamps
						}))
					}, a = o, u = await a.getComputeIdentity(), d = await eu({
						runtimeIdentity: u,
						difficultyRequestWireJson: bc(n),
						signalsRequestWireJson: Sc(n),
						sourceContentHash: b?.sourceContentHash ?? null
					}), p = [
						"timestamps",
						"activity_counts",
						"sleep_scores",
						"choi_nonwear",
						"anglez",
						"light",
						"temperature",
						"heart_rate",
						"detach_nonwear"
					], f = p.flatMap((e) => {
						const t = new Uint32Array(n.days.length + 1);
						for (const [a, s] of n.days.entries()) t[a + 1] = t[a] + s[e].length;
						const i = new ("sleep_scores" === e || "choi_nonwear" === e || "detach_nonwear" === e ? Uint8Array : Float64Array)(t[n.days.length]);
						for (const [a, s] of n.days.entries()) i.set(s[e], t[a]);
						return [i, t];
					}), m = [JSON.stringify({
						config: n.config,
						days: n.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !p.includes(e))))
					}), ...f], h = await ou(e, d.generationKey, l) ?? await ou(e, (await eu({
						runtimeIdentity: Pu(u),
						difficultyRequestWireJson: d.difficultyRequestWireJson,
						difficultyRequestSha256: d.difficultyRequestSha256,
						signalsRequestWireJson: d.signalsRequestWireJson,
						signalsRequestSha256: d.signalsRequestSha256,
						sourceContentHash: d.sourceContentHash
					})).generationKey, l);
					if (h) B = {
						token: c,
						evidenceDb: l,
						coveredDates: [...new Set(t)].sort(),
						signalRequest: null == h.signalsByDate ? m : null,
						projectionInput: td(h),
						difficultyByDate: nd(h),
						signalsByDate: id(h),
						computeIdentity: h.runtimeIdentity,
						projectionRevision: Qu(h),
						evidence: ed(h)
					};
					else {
						s?.throwIfAborted();
						const p = dd(l, d.generationKey, s, () => o.computeFileDifficulty(m));
						Z = p.release;
						const f = await p.run;
						if (s?.throwIfAborted(), !ju(u, await a.getComputeIdentity())) throw new Error("The local scoring runtime changed while difficulty was being computed. Re-run the calculation.");
						if (Zu(f.byDate, n.days)) {
							const n = await async function(e) {
								try {
									(!Number.isInteger(e.fileId) || e.fileId <= 0) && zc();
									const t = await async function(e) {
										"sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || zc(), null !== e.sourceContentHash && Mc(e.sourceContentHash), Fc(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || zc(), Mc(e.difficultyRequestSha256), Mc(e.signalsRequestSha256), await Oc(e.difficultyRequestWireJson, e.difficultyRequestSha256), await Oc(e.signalsRequestWireJson, e.signalsRequestSha256);
										const t = Yc(e.difficultyRequestWireJson, e.signalsRequestWireJson);
										Mc(e.generationKey);
										const { generationKey: n, ...i } = e;
										return await Qc(i) !== e.generationKey && zc(), t;
									}(e.identity), n = Ec(e.projectionInput), i = Ec(e.difficultyByDate), a = null == e.signalsByDate ? null : Ec(e.signalsByDate);
									Xc(t, n, i, a);
									const s = await Cc(n), r = await Cc(i), o = null === a ? null : await Cc(a);
									nu(s, e.expectedHashes?.projectionSha256), nu(r, e.expectedHashes?.difficultyResultSha256), nu(o, e.expectedHashes?.signalsResultSha256);
									const l = (/* @__PURE__ */ new Date()).toISOString(), c = e.createdAt ?? l, u = e.updatedAt ?? c;
									Dc(c), Dc(u), Date.parse(u) < Date.parse(c) && zc();
									const d = {
										fileId: e.fileId,
										generationKey: e.identity.generationKey,
										evidenceContractId: e.identity.evidenceContractId,
										difficultyMethodId: e.identity.difficultyMethodId,
										signalsMethodId: e.identity.signalsMethodId,
										requestContractId: e.identity.requestContractId,
										sourceContentHash: e.identity.sourceContentHash,
										runtimeIdentity: Ec(e.identity.runtimeIdentity),
										difficultyRequestWireJson: e.identity.difficultyRequestWireJson,
										signalsRequestWireJson: e.identity.signalsRequestWireJson,
										difficultyRequestSha256: e.identity.difficultyRequestSha256,
										signalsRequestSha256: e.identity.signalsRequestSha256,
										projectionSha256: s,
										difficultyResultSha256: r,
										signalsResultSha256: o,
										projectionInput: n,
										difficultyByDate: i,
										signalsByDate: a,
										createdAt: c,
										updatedAt: u
									}, p = await tu(d);
									return nu(p, e.expectedHashes?.recordSha256), {
										...d,
										recordSha256: p
									};
								} catch (t) {
									if (t instanceof $c) throw t;
									return zc();
								}
							}({
								fileId: e,
								identity: d,
								projectionInput: i,
								difficultyByDate: f.byDate,
								signalsByDate: null
							});
							if (this.disposed || null == this.latestComplexityTokenByFile.get(e)) throw new Error("The local workspace changed before difficulty evidence could be saved.");
							if (this.latestComplexityTokenByFile.get(e) !== c) throw new Error("A newer local difficulty generation superseded this computation.");
							s?.throwIfAborted();
							const a = await async function(e, t = F(), n = "fresh", i) {
								"fresh" !== n && "restore" !== n && zc();
								const a = await r.waitFor(au(e));
								return dn([t.files, t.complexityEvidence], async () => {
									const e = await t.files.get(a.fileId);
									su(a, e);
									const i = await t.complexityEvidence.where("[fileId+generationKey]").equals([a.fileId, a.generationKey]).first();
									if (i) {
										const e = await r.waitFor(au(i));
										if (o = a, (s = e).generationKey !== o.generationKey || s.projectionSha256 !== o.projectionSha256 || s.difficultyResultSha256 !== o.difficultyResultSha256 || s.difficultyRequestSha256 !== o.difficultyRequestSha256 || s.signalsRequestSha256 !== o.signalsRequestSha256 || s.sourceContentHash !== o.sourceContentHash) throw new Nc();
										if (null !== e.signalsResultSha256 && null !== a.signalsResultSha256 && e.signalsResultSha256 !== a.signalsResultSha256) throw new Nc();
										if (null === e.signalsByDate && null !== a.signalsByDate) {
											const n = new Date(Math.max(Date.now(), Date.parse(e.createdAt))).toISOString(), i = {
												...e,
												signalsByDate: a.signalsByDate,
												signalsResultSha256: a.signalsResultSha256,
												updatedAt: n
											}, s = await r.waitFor(tu(i)), o = {
												...i,
												recordSha256: s
											};
											return await t.complexityEvidence.put(o), await ru(o, "signals_enriched", 0), {
												record: o,
												disposition: "signals_enriched",
												evicted: 0
											};
										}
										return {
											record: e,
											disposition: "deduplicated",
											evicted: 0
										};
									}
									var s, o;
									await async function(e, t, n) {
										const i = await e.complexityEvidence.where("fileId").equals(t.fileId).toArray();
										if (i.length > 5) throw new $c(!0);
										if (i.length < 5) return;
										if ("fresh" === n) return;
										i.sort((e, t) => {
											const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
											return 0 !== n ? n : (t.id ?? 0) - (e.id ?? 0);
										});
										const a = i[i.length - 1];
										if (a && Date.parse(t.createdAt) < Date.parse(a.createdAt)) throw new Tc();
									}(t, a, n);
									const l = { ...a };
									delete l.id;
									const c = await t.complexityEvidence.add(l), u = {
										...l,
										id: c
									}, d = await async function(e, t, n) {
										const i = e.complexityEvidence, a = await i.where("fileId").equals(t).toArray();
										a.sort((e, t) => {
											if ("restore" === n) {
												const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
												if (0 !== n) return n;
											}
											return (t.id ?? 0) - (e.id ?? 0);
										});
										const s = a.slice(5).map((e) => e.id).filter((e) => void 0 !== e);
										return s.length > 0 && await i.bulkDelete(s), s.length;
									}(t, u.fileId, n);
									return await ru(u, "inserted", d), {
										record: u,
										disposition: "inserted",
										evicted: d
									};
								}, t, i);
							}(n, l, "fresh", s);
							"inserted" === a.disposition && await async function(e, t, n) {
								try {
									await cn.recordWorkspaceDurably(S.SYSTEM_RECALCULATION, {
										subject: "night_complexity_generation",
										generationKey: e.generationKey,
										difficultyResultSha256: e.difficultyResultSha256,
										dateCount: Object.keys(e.difficultyByDate).length
									}, t, n) || console.warn("[local-data-source] Complexity evidence was saved, but its audit event is still pending.");
								} catch {
									console.warn("[local-data-source] Complexity evidence was saved, but its audit event could not be recorded.");
								}
							}(a.record, l, s), B = {
								token: c,
								evidenceDb: l,
								coveredDates: [...new Set(t)].sort(),
								signalRequest: null == a.record.signalsByDate ? m : null,
								projectionInput: td(a.record),
								difficultyByDate: nd(a.record),
								signalsByDate: id(a.record),
								computeIdentity: a.record.runtimeIdentity,
								projectionRevision: Qu(a.record),
								evidence: ed(a.record)
							};
						} else console.warn("[local-data-source] Night difficulty is unavailable from the current local scoring runtime."), B = {
							token: c,
							evidenceDb: null,
							coveredDates: [...new Set(t)].sort(),
							signalRequest: null,
							projectionInput: null,
							difficultyByDate: {},
							signalsByDate: null,
							computeIdentity: null,
							projectionRevision: null,
							evidence: null
						};
					}
				} else B = {
					token: c,
					evidenceDb: null,
					coveredDates: [...new Set(t)].sort(),
					signalRequest: null,
					projectionInput: null,
					difficultyByDate: {},
					signalsByDate: null,
					computeIdentity: null,
					projectionRevision: null,
					evidence: null
				};
			} catch (f) {
				s?.throwIfAborted();
				const t = this.latestComplexityTokenByFile.get(e);
				if (this.disposed || null == t || t === c) throw f;
				B = await this.awaitNewerComplexitySnapshot(e, c);
			} finally {
				Z?.();
			}
			s?.throwIfAborted(), u(B), this.latestComplexityTokenByFile.get(e) === c && (s?.throwIfAborted(), this.publishComplexitySnapshot(e, B, s), this.complexityFailureByFile.delete(e));
			let q = B;
			if (this.latestComplexityTokenByFile.get(e) !== c) {
				const t = this.complexityGenerationByFile.get(e);
				if (t && t.token !== c) q = await t.promise;
				else {
					const t = this.complexityFailureByFile.get(e);
					if (void 0 !== t && t.token === this.latestComplexityTokenByFile.get(e)) throw t.error;
					const n = this.complexitySnapshotByFile.get(e);
					if (!n) throw new Error("A newer local difficulty generation replaced this result.");
					q = n;
				}
			}
			const G = q.difficultyByDate;
			if (q === B && (0 === R.length || null !== B.computeIdentity)) {
				const n = [...h.values()].map(He), i = 0 === R.length && n.some((e) => e.ggir) && n.every((e) => e.ggir || 0 === e.timestamps.length), a = {
					nightStartHour: A,
					nightEndHour: x,
					byDate: Object.fromEntries(t.map((e) => [e, G[e]?.difficulty ?? null])),
					sourceRevision: String((B.computeIdentity ?? await o.getComputeIdentity()).sourceRevision),
					...i ? { notRankableReason: ld } : {}
				};
				if (JSON.stringify(b?.nightDifficulty) !== JSON.stringify(a)) try {
					s?.throwIfAborted(), await ge(l, [l.files], () => l.files.update(e, { nightDifficulty: a }), s);
					for (const t of cd) t(e, l);
					s?.throwIfAborted();
				} catch {
					s?.throwIfAborted(), console.warn("[local-data-source] Stored night difficulty could not be written.");
				}
			}
			return M((e) => G[e]?.difficulty ?? null);
		} catch (f) {
			throw this.latestComplexityTokenByFile.get(e) === c && this.complexityFailureByFile.set(e, {
				token: c,
				error: /* @__PURE__ */ new Error("The newest local difficulty generation failed.")
			}), d(f), f;
		} finally {
			this.complexityGenerationByFile.get(e)?.token === c && this.complexityGenerationByFile.delete(e);
		}
	}
	async loadAdjacentMarkers(e, t, n) {
		const i = (await rt(e))?.availableDates?.slice().sort() ?? [], a = i.indexOf(t);
		if (a < 0) return null;
		const s = a > 0 ? i[a - 1] ?? null : null, r = a < i.length - 1 ? i[a + 1] ?? null : null, [o, l] = await Promise.all([s ? $t(e, s, n) : null, r ? $t(e, r, n) : null]), c = (e) => (e?.sleepMarkers ?? []).map((e) => ({
			onset_timestamp: e.onsetTimestamp,
			offset_timestamp: e.offsetTimestamp,
			marker_index: e.markerIndex
		}));
		return {
			previous_day_markers: c(o),
			next_day_markers: c(l),
			previous_date: s,
			next_date: r
		};
	}
	async auditRecordsForView(e, t) {
		const n = F(), i = await be(e, t, void 0, n);
		if (0 === e) return i;
		const a = await vt(e, t, n);
		return [...i, ...a].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
	}
	static isRecordInView(e, t, n) {
		return e.fileId === t && e.analysisDate === n || 0 !== t && _e(e, t, n);
	}
	async loadAuditLog(e, t, n) {
		const i = await this.auditRecordsForView(e, t), a = (n ? i.filter((e) => e.username === n) : i).filter((e) => "number" == typeof e.id).map((e) => ({
			id: e.id,
			action: e.action,
			client_timestamp: e.clientTimestamp,
			session_id: e.sessionId,
			sequence: e.sequence,
			payload: e.payload ?? null,
			username: e.username,
			file_id: e.fileId
		})), s = [...new Set(i.map((e) => e.username))], r = new Set(i.map((e) => e.sessionId)).size;
		let o = null, l = null;
		for (const c of i) {
			const e = c.clientTimestamp;
			(null === o || e < o) && (o = e), (null === l || e > l) && (l = e);
		}
		return {
			summary: {
				total_events: i.length,
				users: s,
				sessions: r,
				first_event: o,
				last_event: l
			},
			entries: a
		};
	}
	async exportAuditLogCsv(e, t, n) {
		const i = await this.auditRecordsForView(e, t), a = (n ? i.filter((e) => e.username === n) : i).filter((e) => "number" == typeof e.id), s = V("audit_log_csv", "local"), r = await xt(a), l = function(e) {
			const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
			for (const i of e) {
				const e = i.payload?.exportId;
				"string" == typeof e && ("export_started" === i.action ? t.add(e) : "data_exported" !== i.action && "export_cancelled" !== i.action || n.add(e));
			}
			for (const i of n) t.delete(i);
			return t;
		}(a), c = [s.join(",")];
		for (const [u, d] of a.entries()) {
			const e = d.payload ?? null, t = r[u];
			c.push([
				o(String(d.id)),
				o((/* @__PURE__ */ new Date(1e3 * d.clientTimestamp)).toISOString()),
				o(d.action),
				o(Nu(null === e ? "" : Tu(e, d.action), d.action, e, l)),
				o(d.username),
				o(String(d.fileId)),
				o(d.analysisDate ?? ""),
				o(null == d.studyId ? "" : String(d.studyId)),
				o(d.sessionId),
				o(String(d.sequence)),
				o(d.eventHash ?? ""),
				o(d.previousHash ?? ""),
				o(null === e ? "" : JSON.stringify(e)),
				o(t?.basis ?? "unanchored"),
				o(void 0 === t ? "" : St(t.state)),
				o(void 0 === t || "unanchored" === t.basis ? "" : JSON.stringify(t.state))
			].join(","));
		}
		return new Blob([`${c.join("\n")}\n`], { type: "text/csv;charset=utf-8" });
	}
	async verifyAuditChain(e, n) {
		const i = await Ye();
		return {
			...await un(i),
			total_rows: i.length,
			rows_for_view: i.filter((i) => t.isRecordInView(i, e, n)).length
		};
	}
	getComplexityProjectionRevision(e) {
		return this.complexitySnapshotByFile.get(e)?.projectionRevision ?? null;
	}
	invalidateLocalCaches() {
		this.nextComplexityGenerationToken += 1, this.complexitySnapshotByFile.clear(), this.complexityGenerationByFile.clear(), this.complexitySignalGenerationByFile.clear(), this.complexityFailureByFile.clear(), this.latestComplexityTokenByFile.clear();
	}
	dispose() {
		this.disposed = !0, this.invalidateLocalCaches();
	}
	async attachSignalsToCurrentComplexitySnapshot(e, t) {
		const n = this.complexitySnapshotByFile.get(e) ?? null;
		if (n?.token !== t.token) return n;
		if (t.signalsByDate || !t.signalRequest || !t.computeIdentity || !t.evidence || !t.evidenceDb) return t;
		const i = t.signalRequest, a = t.computeIdentity, s = t.evidence, o = t.evidenceDb, l = this.complexitySignalGenerationByFile.get(e);
		if (l?.token === t.token) return await l.promise;
		const c = (async () => {
			const n = () => this.complexitySnapshotByFile.get(e) ?? null, l = () => {
				const i = n();
				if (!i || i.token !== t.token) return i;
				const a = {
					...i,
					signalRequest: null
				};
				return this.publishComplexitySnapshot(e, a), a;
			};
			try {
				const c = b(), u = await c.getComputeIdentity();
				if (!ju(a, u)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), l();
				const d = await c.computeFileSignals(i), p = await c.getComputeIdentity();
				if (!ju(a, p)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), l();
				if (!Zu(d.byDate, JSON.parse(i[0]).days)) throw new Error("The local scoring runtime returned incomplete night-signal evidence.");
				if (this.disposed) throw new Error("The local workspace changed before night-signal evidence could be saved.");
				const f = n();
				if (!f) return null;
				if (f.token !== t.token) return f;
				if (f.signalsByDate) return f;
				const m = await async function(e, t = F(), n) {
					(!Number.isInteger(e.fileId) || e.fileId <= 0) && zc(), Mc(e.generationKey);
					const i = Ec(e.signalsByDate), a = await Cc(i);
					return nu(a, e.signalsResultSha256), dn([t.files, t.complexityEvidence], async () => {
						const n = await t.complexityEvidence.where("[fileId+generationKey]").equals([e.fileId, e.generationKey]).first();
						if (!n) throw new $c();
						const s = await r.waitFor(au(n));
						if (su(s, await t.files.get(s.fileId)), null !== s.signalsResultSha256) {
							if (s.signalsResultSha256 !== a) throw new Nc();
							return {
								record: s,
								disposition: "deduplicated",
								evicted: 0
							};
						}
						const o = new Date(Math.max(Date.now(), Date.parse(s.createdAt))).toISOString(), l = {
							...s,
							signalsByDate: i,
							signalsResultSha256: a,
							updatedAt: o
						}, c = await r.waitFor(tu(l)), u = await r.waitFor(iu({
							...l,
							recordSha256: c
						}));
						return await t.complexityEvidence.put(u), await ru(u, "signals_enriched", 0), {
							record: u,
							disposition: "signals_enriched",
							evicted: 0
						};
					}, t, n);
				}({
					fileId: e,
					generationKey: s.generationKey,
					signalsByDate: d.byDate
				}, o), h = n();
				if (!h) return null;
				if (h.token !== t.token) return h;
				if (h.signalsByDate) return h;
				const g = {
					...h,
					signalRequest: null,
					projectionInput: td(m.record),
					difficultyByDate: nd(m.record),
					signalsByDate: id(m.record),
					computeIdentity: m.record.runtimeIdentity,
					projectionRevision: Qu(m.record),
					evidence: ed(m.record)
				};
				return this.publishComplexitySnapshot(e, g), g;
			} catch {
				return console.warn("[local-data-source] Full night-signal detail is temporarily unavailable; showing the retained difficulty result."), n();
			}
		})();
		this.complexitySignalGenerationByFile.set(e, {
			token: t.token,
			promise: c
		});
		try {
			return await c;
		} finally {
			this.complexitySignalGenerationByFile.get(e)?.token === t.token && this.complexitySignalGenerationByFile.delete(e);
		}
	}
	async loadComplexityBreakdown(e, t, n) {
		let i = null;
		for (let l = 0; l < 8; l++) {
			const a = this.complexityGenerationByFile.get(e);
			if (a) {
				await a.promise;
				continue;
			}
			if (i = this.complexitySnapshotByFile.get(e) ?? null, !i || !i.coveredDates.includes(t)) {
				const i = await rt(e), a = i?.availableDates?.includes(t) ? [...new Set(i.availableDates)].sort() : [t];
				await this.computeDatesStatus(e, a, n);
				continue;
			}
			const s = await this.attachSignalsToCurrentComplexitySnapshot(e, i), r = this.complexityGenerationByFile.get(e);
			if (r) {
				await r.promise;
				continue;
			}
			const o = this.complexitySnapshotByFile.get(e) ?? null;
			if (s && o && o.token === s.token) {
				if (o.token === i.token) {
					i = o;
					break;
				}
				i = o;
			}
		}
		i && !i.coveredDates.includes(t) && (i = null), i || console.warn("[local-data-source] Difficulty detail could not converge on a stable local generation.");
		const a = i?.difficultyByDate[t], s = i?.projectionInput ?? null, r = i?.signalsByDate ?? null, o = i?.computeIdentity ?? null;
		return {
			complexity_pre: a?.difficulty ?? null,
			complexity_post: null,
			projection_revision: i?.projectionRevision ?? null,
			features: a?.features ?? {},
			state: a?.state ?? null,
			verdict: a?.verdict ?? null,
			infinite_reason: a?.infiniteReason ?? null,
			computed_at: a?.computedAt ?? null,
			feature_vector: a?.featureVector ?? null,
			per_guider: a?.perGuider ?? [],
			signals: r?.[t] ?? null,
			explanation: null,
			calculation_provenance: s ? {
				method_export: "computeNightDifficulty",
				request_contract: "FileDifficultyRequest",
				config: s.config,
				runtime_identity: o ?? null,
				evidence_record: i?.evidence ? {
					contract_id: i.evidence.evidenceContractId,
					generation_key: i.evidence.generationKey,
					source_content_sha256: i.evidence.sourceContentHash,
					difficulty_request_sha256: i.evidence.difficultyRequestSha256,
					signals_request_sha256: i.evidence.signalsRequestSha256,
					projection_sha256: i.evidence.projectionSha256,
					difficulty_result_sha256: i.evidence.difficultyResultSha256,
					signals_result_sha256: i.evidence.signalsResultSha256,
					record_sha256: i.evidence.recordSha256
				} : null
			} : null,
			canonical_result: a?.canonicalResult ?? null,
			canonical_intrinsic: a?.canonicalIntrinsic ?? null,
			plot_intervals: Fu(r ?? void 0, s ?? void 0, t, i?.projectionRevision ?? void 0)
		};
	}
	onMarkersChanged(e, t, n, i, a, s, r, o = null, l = null, c) {
		const u = [
			"markers",
			e,
			t,
			n || "anonymous",
			this.sourceKey,
			o,
			l,
			s,
			r
		], d = i.getQueryData(u);
		i.setQueryData(u, () => a);
		const p = void 0 !== d && "auto_score" !== n && JSON.stringify(d?.nonwearMarkers ?? []) === JSON.stringify(a?.nonwearMarkers ?? []);
		(function(e, t, n, i = {}) {
			!1 !== i.datesStatus && la(e, ["dates-status", t]), la(e, ["local-dates-status", t]), !1 !== i.fileQuality && la(e, ["file-quality"]), la(e, ["analysis-summary"]), la(e, ["adjacent-markers"]), la(e, [
				"audit-log",
				t,
				n
			]), la(e, ["actogram-markers", t]), la(e, [
				"night-stored-variant",
				t,
				n
			]), la(e, ["local-export-file-stats"]), la(e, ["local-export-circadian-coverage"]), function() {
				sa += 1;
				for (const e of ra) e();
			}();
		})(i, e, t, {
			datesStatus: !p,
			fileQuality: !1
		});
		const f = c ?? F();
		this.refreshFileScoringCounts(i, {
			fileId: e,
			username: n,
			workspaceScope: o,
			studyId: l
		}, f), p && this.patchDateStatus(i, {
			fileId: e,
			date: t,
			username: n,
			workspaceScope: o
		}, f);
	}
	async unscoreNight(e, t, n, i, a, s, r, o) {
		const l = r ?? F(), c = ii(l, {
			username: n || "anonymous",
			studyId: dt.getState().selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, o);
		return await Rt({
			fileId: e,
			date: t,
			username: n || "anonymous",
			algorithm: i,
			detectionRule: a,
			expected: s,
			signal: this.fileBatch(e, l)?.signal
		}, l, c), null;
	}
	refreshFileScoringCounts(e, t, n) {
		const { fileId: i, username: a, workspaceScope: s, studyId: r } = t, o = [
			"file-quality",
			this.sourceKey,
			s,
			a || "anonymous",
			r
		];
		e.getQueriesData({ queryKey: o }).length > 0 && this.fileScoringCountsIn(n, [i], a).then(([t]) => {
			t && e.setQueriesData({ queryKey: o }, (e) => e && {
				...e,
				items: e.items.map((e) => e.file_id === i ? {
					...e,
					scored_dates: t.scored_dates,
					nonwear_scored_dates: t.nonwear_scored_dates,
					total_dates: t.total_dates
				} : e)
			});
		}).catch(() => {
			la(e, o);
		});
	}
	async patchDateStatus(e, t, n) {
		const { fileId: i, date: a, username: s, workspaceScope: r } = t;
		for (const o of e.getQueryCache().findAll({ queryKey: ["dates-status", i] })) {
			const t = o.queryKey, l = o.state.data;
			if (t[2] === this.sourceKey && (t[3] !== r || t[4] !== (s || "anonymous"))) continue;
			if (o.state.isInvalidated) continue;
			if (!o.isActive()) {
				la(e, t);
				continue;
			}
			const c = t[4], u = o.state.dataUpdatedAt;
			try {
				if (!l || t[2] !== this.sourceKey || "string" != typeof c) throw new Error("not a local status list");
				const s = await sd(i, a, c, n);
				if (o.state.dataUpdatedAt !== u) continue;
				e.setQueryData(t, (e) => e?.map((e) => e.date === a ? {
					...e,
					...s
				} : e));
			} catch {
				la(e, t);
			}
		}
	}
	async ingestFile(e, t, n) {
		const { processLocalFile: i } = await import("./local-processing-DYdEngV7.js"), a = dt.getState(), s = this.operationProcessingOptions, r = s?.devicePreset ?? a.devicePreset, o = s?.skipRows ?? a.skipRows, l = s?.choiAxis ?? a.choiAxis, c = s?.columnMapping ?? a.columnMapping, u = s?.countEpochSeconds ?? (30 === a.epochLengthSeconds ? 30 : 60);
		e.name.toLowerCase().endsWith(".csv") && r && "actigraph" !== r && "geneactiv" !== r && Du(r, c);
		const d = F(), p = await i(e, r ?? "actigraph", o ?? 10, t, l ?? "vector_magnitude", c, n, {
			...s ? {} : Ve(a),
			countEpochSeconds: u,
			sleepPeriodDetectionConfig: rn(a.sleepPeriodDetection),
			...this.operationProcessingOptions
		});
		return p.alreadyImported || (pd(p.fileId, d, void 0, n), fd(p.fileId, d, n)), p;
	}
	async loadDailyGgirSummary(e, t) {
		return (t ? await Ie(e, t) : await Ue(e)).map(Cu);
	}
};
function Id(e, t, n) {
	return Ad([e], t, n);
}
function Ad(e, t, n, i) {
	const a = `${R.PLACEMENT}:${e.map(String).join(":")}`;
	return q({
		kind: R.PLACEMENT,
		key: a,
		label: "Store marker placement",
		workspaceId: t.name,
		signal: n,
		rerun: !0,
		run: async (n) => {
			if (E(t.name)) return;
			const { captureLocalScoringSettings: s, scoringSettingsForScope: r, autoScoreOptionsFromSettings: o } = await import("./scoped-scoring-settings-CxoEyK7f.js"), l = {
				sourceKey: "local",
				workspaceId: null,
				actor: "anonymous",
				studyId: null
			}, c = new Sd();
			try {
				n.signal.throwIfAborted();
				const [a, u] = await Promise.all([Ae(t), Ce([...e], t)]), d = s(l, a ?? null), p = u.map((e) => {
					if (!e || "incomplete" === e.ingestState) return [];
					const t = r(d, l, e);
					return t ? [{
						fileId: e.id,
						options: {
							...o(t, e),
							signal: n.signal
						}
					}] : [];
				});
				1 === e.length && !i && p[0]?.[0] ? await c.autoScoreFile(p[0][0].fileId, p[0][0].options, !0, t) : await c.storeFilesPlacement(p.flat(), t, n, i, d.ggirConfig.csvText);
			} catch (u) {
				if (E(t.name)) return;
				throw n.signal.throwIfAborted(), $.getState().update(`${t.name}:${a}`, { visible: !0 }), u;
			}
		}
	});
}
function xd(e, t) {
	return q({
		kind: R.PLACEMENT_RECOVERY,
		key: R.PLACEMENT_RECOVERY,
		label: "Resume marker placement",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			const { recoverPendingGgirRecomputes: n } = await import("./local-export-worker-BcfT00U8.js").then((e) => e.a);
			await n(e, t.signal);
			const i = await e.transaction("r", e.projectMeta, async () => {
				const [t, n] = await Promise.all([e.projectMeta.get(It), e.projectMeta.get(Ft)]);
				return {
					completed: void 0 !== t,
					generation: n?.revision ?? 0
				};
			}), { backfillInterruptedScoredVariantWarms: a } = await import("./cube-variants-DM1Gn19w.js");
			if (i.completed) await a(e, { signal: t.signal });
			else {
				for (const n of await je(e)) {
					if (F() !== e) return;
					null != n.id && "incomplete" !== n.ingestState && (await Id(n.id, e, t.signal), await t.yieldNow());
				}
				F() === e && (await a(e, { signal: t.signal }), F() === e && await ge(e, [e.projectMeta], async () => {
					const t = await e.projectMeta.get(Ft);
					F() === e && (t?.revision ?? 0) === i.generation && await e.projectMeta.put({
						key: It,
						revision: 1
					});
				}, t.signal));
			}
		}
	});
}
export { zi as A, di as B, Gi as C, Fi as D, Ti as E, _i as F, ci as H, gi as I, Si as L, xi as M, $i as N, Bi as O, Ni as P, fi as R, Li as S, Mi as T, ri as U, ui as V, Hi as _, lc as a, qi as b, wc as c, Qi as d, Yi as f, ji as g, Pi as h, cu as i, Wi as j, Ci as k, Xi as l, Ji as m, pu as n, hc as o, ia as p, lu as r, oc as s, zu as t, ea as u, Ui as v, Vi as w, Di as x, Zi as y, pi as z };
