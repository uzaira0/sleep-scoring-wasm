import { At as e, Dn as t, F as n, Nn as a, Nt as s, On as r, Z as o, at as l, b as c, bt as u, h as d, it as p, kt as f, nt as m, ot as h, p as g, tt as y, x as w } from "./schema-Bbr1Zg5F.js";
import { i as _, n as v, r as b, s as k } from "./workers-BSP07cYu.js";
import { A as S, F as I, G as A, I as x, J as N, O as $, P as T, Q as z, W as M, r as D, s as R, t as E } from "./workspace-db-BEYycimi.js";
import { l as C, r as F } from "./legacy-invalid-night-zjKZRSNb.js";
import { a as O } from "./content-hash-CZ-UAlQR.js";
import { _ as P, d as j, l as B, m as Z, n as q, o as G, t as U } from "./background-jobs-DGv04HlX.js";
import { a as H, i as J, n as L } from "./api-errors-BGqE7Fcy.js";
import { C as W, S as V, T as K, a as Y, b as X, c as Q, d as ee, f as te, g as ne, h as ie, i as ae, j as se, l as re, m as oe, n as le, p as ce, s as ue, t as de, u as pe, v as fe, w as me, y as he } from "./nonwear-display-slots-BhrTaGYg.js";
import { a as ge } from "./project-revision-C5TJ0HPW.js";
import { $t as ye, A as we, At as _e, B as ve, Bt as be, C as ke, D as Se, Dt as Ie, E as Ae, Et as xe, F as Ne, Ft as $e, Ht as Te, I as ze, It as Me, Jt as De, Kt as Re, L as Ee, Lt as Ce, M as Fe, Mt as Oe, N as Pe, Nt as je, Ot as Be, P as Ze, Pt as qe, R as Ge, Rt as Ue, T as He, Tt as Je, Ut as Le, W as We, _ as Ve, _t as Ke, a as Ye, an as Xe, b as Qe, d as et, en as tt, et as nt, ht as it, in as at, j as st, jt as rt, k as ot, kt as lt, lt as ct, mt as ut, pt as dt, r as pt, rn as ft, tt as mt, ut as ht, v as gt, vt as yt, w as wt, y as _t, yt as vt, z as bt } from "./store-JiWMTGuM.js";
import { C as kt, F as St, H as It, M as At, N as xt, O as Nt, P as $t, S as Tt, U as zt, b as Mt, d as Dt, g as Rt, k as Et, x as Ct, y as Ft, z as Ot } from "./night-session-registry-hkFY8FDC.js";
import { A as Pt, F as jt, G as Bt, I as Zt, K as qt, L as Gt, M as Ut, N as Ht, O as Jt, P as Lt, R as Wt, T as Vt, U as Kt, W as Yt, X as Xt, Z as Qt, c as en, h as tn, k as nn, pt as an, r as sn, s as rn, st as on, vt as ln } from "./per-source-defaults-DGxXQBbZ.js";
import { t as cn } from "./audit-log-DX_8V0K_.js";
import { r as un } from "./audit-hash-DNLMlimm.js";
import { i as dn, t as pn } from "./wal-CX7Pr7mo.js";
import { y as fn } from "./ggir-results-import-B_zAUkw4.js";
import { C as mn, D as hn, E as gn, S as yn, T as wn, b as _n, c as vn, d as bn, h as kn, k as Sn, l as In, m as An, n as xn, p as Nn, s as $n, t as Tn, v as zn, w as Mn, x as Dn } from "./local-nonwear-unified-9vIGfRaW.js";
import { f as Rn } from "./physical-activity-cutpoint-presets-rv0tNO1z.js";
import { _ as En, f as Cn, g as Fn, p as On } from "./diary-local-import-contract-DJjW5PDa.js";
import { n as Pn, s as jn, t as Bn } from "./csv-column-mapping-BSSY09yh.js";
import { D as Zn, E as qn, O as Gn, T as Un, c as Hn, d as Jn, f as Ln, h as Wn, k as Vn, l as Kn, m as Yn, o as Xn, p as Qn, s as ei, u as ti } from "./local-export-shard-worker-BTR6svpv.js";
import { i as ni, r as ii } from "./night-session-DyB9iHE6.js";
const ai = "Review Data Settings > CSV Settings before opening this file.";
function si(e) {
	return `Column-mapped CSV mapping could not be applied: ${e.map((e) => e.message).join(" ")} ${ai}`;
}
const ri = {
	[l.RULE_1_INCLUDE_ACTIVITY]: "Included mid-sleep wake activity (continuous sleep follows)",
	[l.RULE_2_SMALL_PERIODS]: "Evaluated a small sleep period near onset",
	[l.RULE_3_EXTEND_BEFORE_DIARY]: "Extended onset backward through sleep preceding the diary marker",
	[l.RULE_4_NAP_VARIATION]: "Marked a long continuous block as a nap",
	[l.RULE_5_CHOI_SPIKE]: "Tolerated Choi-only nonwear (activity spike present in period)",
	[l.RULE_6_EQUIDISTANT]: "Chose between multiple candidate boundaries",
	[l.RULE_7_CROSS_DAY_NONWEAR]: "Applied cross-day diary nonwear pattern",
	[l.RULE_8_ONSET_BEFORE_INBED]: "Clamped onset to diary in-bed time (onset reported before in-bed)",
	[l.RULE_9_NAP_REGULARITY]: "Placed nap from this child's cross-day nap regularity (no diary nap logged)",
	[l.RULE_10_REGULARITY_OVERRIDE]: "Re-centered the sleep window on this child's cross-day sleep regularity",
	[l.RULE_11_RELIABILITY_FALLBACK]: "Diary unreliable for this night — anchored to accelerometry instead"
};
function oi(e) {
	const t = e.replace(/^rule_\d+_/, "").replace(/_/g, " ").trim();
	return 0 === t.length ? e : t.charAt(0).toUpperCase() + t.slice(1);
}
function li(e) {
	return Wt(e, b);
}
async function ci(e) {
	return at((await Ze(e))?.extraSettings);
}
async function ui(e, t = b()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
async function di(e, t = Rn, n) {
	const i = await U(n).validWearDays(Float64Array.from(e), t);
	return Array.from(i, (e) => 0 !== e);
}
async function pi(e, t = Rn, n) {
	return U(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
}
Object.fromEntries(Object.values(l).map((e) => [e, ri[e] ?? oi(e)]));
const fi = r.filter((e) => "sleep_wake" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds,
	supportedEpochSeconds: e.supportedEpochSeconds
})), mi = new Map(fi.map((e) => [e.id, e]));
function hi(e) {
	return mi.get(e);
}
const gi = [
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
	const t = new Set(fi.map((e) => e.id)), n = e.filter((e) => !t.has(e));
	if (n.length > 0) throw new Error(`LEGACY_COVERED_SLEEP_WAKE_IDS contains ids that are not sleep/wake method contracts (LinkML drift?): ${n.join(", ")}`);
})(gi);
const yi = new Set(gi), wi = fi.filter((e) => !(e.needsModel || yi.has(e.id) || "counts_axis_y" !== e.requiredSignal && "consensus_majority_vote" !== e.id)).map((e) => e.id);
for (const xd of wi) if (!I(xd)) throw new Error(`unified sleep/wake method ${xd} is not a declared AlgorithmRunKey (core.yaml)`);
function _i(e) {
	return {
		sleepWake: null,
		conformance: "needs_30s_epoch",
		available: !1,
		reason: `${e}: 30 s-native scorer is not run on the 60 s grid (feeding it 60 s counts would miscalibrate it); its native scoring is the exploratory 30 s cube surface.`,
		elementSeconds: 30
	};
}
function vi(e, t) {
	const n = hi(e);
	return 30 !== n?.nativeEpochSeconds || n.supportedEpochSeconds.includes(t) ? { kind: "score60s" } : {
		kind: "gate_needs_30s_epoch",
		response: _i(e)
	};
}
function bi(e) {
	const { counts: t } = e, n = {
		algorithm: e.algorithm,
		signals: {
			counts: t instanceof Float64Array ? t : Float64Array.from(t),
			epochSeconds: e.epochSeconds
		}
	};
	return e.postprocessing && (n.postprocessing = e.postprocessing), e.config && (n.config = e.config), n;
}
function ki(e, t) {
	if (!e.available || !e.sleepWake) return null;
	if (t > 0 && e.sleepWake.length !== t) return null;
	const n = new Uint8Array(e.sleepWake.length);
	for (let i = 0; i < e.sleepWake.length; i++) n[i] = e.sleepWake[i] ? 1 : 0;
	return n;
}
function Si(e, t) {
	const n = {};
	for (const [i, a] of e) {
		const e = ki(a, t);
		e && (n[i] = e);
	}
	return n;
}
const Ii = [
	["axis_x", "axisX"],
	["axis_y", "axisY"],
	["axis_z", "axisZ"],
	["vector_magnitude", "vectorMagnitude"],
	["choi_axis", "choiAxis"]
];
async function Ai(t, n, i) {
	const a = Ii.filter(([, e]) => (n[e]?.length ?? 0) > 0), { series: s } = await t.aggregateEpochSeries({
		target_seconds: e,
		series: {
			timestamps_ms: Array.from(n.timestamps, (e) => 1e3 * e),
			epoch_seconds: i,
			channels: a.map(([e, t]) => ({
				name: e,
				counts: Array.from(n[t])
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
	for (const [e, l] of a) "axisY" !== l && "vectorMagnitude" !== l && (o[l] = r(e));
	return o;
}
async function xi(e, t, n, i) {
	const a = n.flatMap((e) => t[e] ? [[e, t[e]]] : []), s = await Promise.all(a.map(([, t]) => Ai(e, t, i)));
	return Object.fromEntries(a.map(([e], t) => [e, s[t]]));
}
async function Ni(t, n, i, a) {
	return 0 === n.length ? new Uint8Array(a.length) : t.projectLabelsOntoGrid(n, i, e, a);
}
async function $i(e, t, n) {
	return Array.from(await e.roundCountStorage(Float64Array.from(t), n));
}
async function Ti(e, t) {
	const { dates: n, day: i } = await e.utcDayIndex(Float64Array.from(t)), a = new Map(n.map((e) => [e, []]));
	return i.forEach((e, t) => {
		const i = n[e];
		void 0 !== i && a.get(i)?.push(t);
	}), a;
}
function zi(e, t, n) {
	return t.map((t) => e[t] ?? n);
}
function Mi(e) {
	const t = new Float64Array(e.reduce((e, t) => e + t.length, 0));
	let n = 0;
	for (const i of e) t.set(i, n), n += i.length;
	return t;
}
function Di(e, t, n) {
	return Float64Array.from(t, (t) => e[t] ?? n);
}
async function Ri(e, t, n, i) {
	return Float64Array.from(await e.uniformTimestamps(t, 1e3 * n, i), (e) => e / 1e3);
}
async function Ei(e, t, n, i) {
	if (!Number.isFinite(t) || 0 === n.length || !Number.isFinite(i) || i <= 0) return /* @__PURE__ */ new Map();
	const a = await Ti(e, await Ri(e, t, i, n.length));
	return new Map(Array.from(a, ([e, t]) => [e, Uint8Array.from(zi(n, t, 0))]));
}
async function Ci(e, t, n, i, a = {}) {
	const s = /* @__PURE__ */ new Map();
	if (0 === t.length) return s;
	if (n.length !== t.length || i.length !== t.length) return console.warn("[local-processing] The 5 s GGIR timestamp grid does not match its ENMO/anglez series; skipping the GGIR day split rather than fabricating zeros."), s;
	const r = void 0 !== a.sib && a.sib.length === t.length, o = void 0 !== a.anglex && a.anglex.length === t.length, l = void 0 !== a.angley && a.angley.length === t.length, c = void 0 !== a.nonwear && a.nonwear.length === t.length, u = void 0 !== a.invalid && a.invalid.length === t.length, d = void 0 !== a.mimsUnit && a.mimsUnit.length === t.length, p = void 0 !== a.mimsUnitX && a.mimsUnitX.length === t.length, f = void 0 !== a.mimsUnitY && a.mimsUnitY.length === t.length, m = void 0 !== a.mimsUnitZ && a.mimsUnitZ.length === t.length, h = (e, t) => t.map((t) => (e[t] ?? 0) > 0 ? 1 : 0), g = Float64Array.from(t, (e) => e / 1e3);
	for (const [y, w] of await Ti(e, g)) s.set(y, {
		timestamps: zi(g, w, 0),
		enmo: zi(n, w, 0),
		anglez: zi(i, w, 0),
		...o ? { anglex: zi(a.anglex, w, 0) } : {},
		...l ? { angley: zi(a.angley, w, 0) } : {},
		...r ? { sib: zi(a.sib, w, 0) } : {},
		...c ? { nonwear: h(a.nonwear, w) } : {},
		...u ? { invalid: h(a.invalid, w) } : {},
		...d ? { mimsUnit: zi(a.mimsUnit, w, NaN) } : {},
		...p ? { mimsUnitX: zi(a.mimsUnitX, w, NaN) } : {},
		...f ? { mimsUnitY: zi(a.mimsUnitY, w, NaN) } : {},
		...m ? { mimsUnitZ: zi(a.mimsUnitZ, w, NaN) } : {}
	});
	return s;
}
async function Fi(e, t, n, i, a, s) {
	const r = /* @__PURE__ */ new Map();
	if (0 === t.length || !Number.isFinite(n)) return r;
	for (const [o, l] of Object.entries(i)) r.set(o, await e.foldUniformOntoGrid(n / 1e3, 30, t, Float64Array.from(l.timestamps), a, s));
	return r;
}
async function Oi(e, t, n, i, a) {
	const s = await Fi(e, Float64Array.from(t), n, i, a, "majority_ties_sleep");
	return new Map(Array.from(s, ([e, t]) => [e, Uint8Array.from(t)]));
}
async function Pi(e, t, n, i, a) {
	const s = await Fi(e, Float64Array.from(t), n, i, a, "mean");
	return new Map(Array.from(s, ([e, t]) => [e, Float32Array.from(t)]));
}
async function ji(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	if (!t || 0 === t.length || null === n || !Number.isFinite(n)) return i;
	const a = await Ri(e, n, 30, t.length);
	for (const [s, r] of await Ti(e, a)) i.set(s, {
		timestamps: zi(a, r, 0),
		scores: r.map((e) => t[e] ? 1 : 0)
	});
	return i;
}
async function Bi(e, t, n, i, a) {
	const s = await e.foldOntoGrid(Float64Array.from(t), Float64Array.from(n), Float64Array.from(i), 1e3 * a, "finite_mean");
	return Array.from(s);
}
async function Zi(e, t, n, i, a, s, r, o, l, c, u, d) {
	return async function(e, t, n, i, a, s, r, o, l, c, u, d) {
		const p = {}, f = null != a, m = null != s && s.length > 0, h = null != r && r.length > 0, g = null != o && o.length > 0, y = null != l?.unit && l.unit.length === t.length, w = null != l?.unitX && l.unitX.length === t.length, _ = null != l?.unitY && l.unitY.length === t.length, v = null != l?.unitZ && l.unitZ.length === t.length, b = null != u && u.length === t.length, k = null != c && c.length === t.length, S = null != d && d.length === t.length;
		for (const [I, A] of await Ti(e, t)) p[I] = {
			timestamps: Di(t, A, 0),
			axisY: Di(n, A, 0),
			vectorMagnitude: Di(i, A, 0),
			...h ? { axisX: Di(r, A, 0) } : {},
			...g ? { axisZ: Di(o, A, 0) } : {},
			...f ? { choiAxis: Di(a, A, 0) } : {},
			...m ? { temperature: Di(s, A, NaN) } : {},
			...y ? { mimsUnit: Di(l?.unit ?? [], A, NaN) } : {},
			...w ? { mimsUnitX: Di(l?.unitX ?? [], A, NaN) } : {},
			..._ ? { mimsUnitY: Di(l?.unitY ?? [], A, NaN) } : {},
			...v ? { mimsUnitZ: Di(l?.unitZ ?? [], A, NaN) } : {},
			...b ? { zeroCrossingX: Di(u, A, NaN) } : {},
			...k ? { zeroCrossingY: Di(c, A, NaN) } : {},
			...S ? { zeroCrossingZ: Di(d, A, NaN) } : {}
		};
		return p;
	}(e, t, await $i(e, n, 0), await $i(e, i, 2), void 0 !== r ? await $i(e, r, 0) : void 0, o, await $i(e, a, 0), await $i(e, s, 0), l, c, u, d);
}
function qi(e, t) {
	return 30 !== t && (Vt(e)?.hasRawAccel ?? !1);
}
async function Gi(e) {
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
		timestampsSec: await Ri(e.wasmApi, e.firstTsMs, 30, n.y.length),
		neishabouri: n,
		zeroCrossing: i
	};
}
async function Ui(e, t, n) {
	const i = n.zeroCrossing, a = await Zi(e, n.timestampsSec, n.neishabouri.y, n.neishabouri.vm, n.neishabouri.x, n.neishabouri.z, void 0, void 0, void 0, i ? await $i(e, i.zcy, 0) : void 0, i ? await $i(e, i.zcx, 0) : void 0, i ? await $i(e, i.zcz, 0) : void 0);
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
const Hi = "Recording crossed a timezone boundary (a 1 h jump in the device clock). Recording times are kept as the device's wall-clock time; no timezone or daylight-saving shift is applied, so local-time metrics around the jump may be off.";
async function Ji(e, t) {
	return await e.detectHourClockJumpMs(Float64Array.from(t)) ? Hi : null;
}
async function Li(e, t, n = 60) {
	(await e.irregularInternalDays(Float64Array.from(t), n)).forEach(() => {
		console.warn("[local-processing] A possible DST transition or partial internal day was detected; review the in-app import warning.");
	});
}
async function Wi(t, n, i) {
	const a = [...t], s = i && i.storedEpochSeconds < e ? i : void 0, r = s ? await Promise.all(a.map(([, t]) => async function(t, n, i) {
		const { series: a } = await t.aggregateEpochSeries({
			target_seconds: e,
			series: {
				timestamps_ms: Array.from(n, (e) => 1e3 * e),
				epoch_seconds: i,
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
	}(s.core, t.timestamps, s.storedEpochSeconds))) : a.map(([, e]) => e.timestamps), o = [];
	let l = Number.POSITIVE_INFINITY, c = Number.NEGATIVE_INFINITY;
	for (const [e, [u]] of a.entries()) {
		const t = r[e];
		s && 0 === t.length || (o.push(u), 0 !== t.length && (l = Math.min(l, t[0] ?? l), c = Math.max(c, t[t.length - 1] ?? c)));
	}
	return o.sort(), Number.isFinite(l) && Number.isFinite(c) ? Fn(o, l, c, void 0, n) : o;
}
function Vi(e, t) {
	if (0 === e.length) return [];
	const n = [0];
	for (let i = 1; i < e.length; i++) Math.abs(e[i] - e[i - 1] - t) > .001 && n.push(i);
	return n.map((t, i) => ({
		start: t,
		end: n[i + 1] ?? e.length
	}));
}
async function Ki(e, t, n, i = $n, a = () => {
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
async function Yi(e, t, n, i, a, s = xn, r = () => {
	_(e);
}) {
	const o = {}, l = s.filter((e) => !_n(e)?.needsModel);
	if (0 === l.length) return o;
	const c = n.map((e) => t[e]).filter((e) => void 0 !== e), u = Mi(c.map((e) => e.timestamps)), d = Mi(c.map((e) => e.axisY)), p = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
	for (const { start: h, end: g } of Vi(u, i)) {
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
function Xi(e) {
	return null == e ? {} : { [o.OAKLEY_1997]: { oakleyThreshold: e } };
}
async function Qi(e, t, n, i, a, s, r, o = () => {
	_(e);
}, l = {}, c = wi) {
	if (0 === c.length) return;
	const u = i.flatMap((e) => n[e] ?? []), d = Mi(u.map((e) => e.timestamps)), p = Mi(u.map((e) => e.axisY)), f = {}, m = /* @__PURE__ */ new Map();
	for (const { start: y, end: w } of Vi(d, a)) {
		const t = p.slice(y, w);
		if (!t || 0 === t.length) continue;
		const n = /* @__PURE__ */ new Map();
		for (const u of c) {
			const i = vi(u, a);
			if ("gate_needs_30s_epoch" === i.kind) {
				n.set(u, i.response);
				continue;
			}
			j(s, `before scoreEpochs(${u} continuous)`);
			const c = await G(e, (e) => e.scoreEpochs(bi({
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
		const i = Si(n, t.length);
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
function ea(e, t) {
	return {
		vector_magnitude: e.vectorMagnitude,
		axis_y: e.axisY,
		axis_x: e.axisX,
		axis_z: e.axisZ
	}[t];
}
async function ta(e, t, n, i, a, s, r) {
	if (!e || !t || 0 === e.timestamps.byteLength) return;
	if ("counts_axis_y" !== _n(t)?.requiredSignal) return;
	if (wn(e, t, n)) return;
	const o = new Float64Array(e.timestamps), l = a ?? U(s), c = it(e) ?? await dt(o, 60, l), u = ln(an(t) ?? [], c), d = u !== c, p = async (e, t) => {
		const n = {
			timestamps: new Float64Array(e.timestamps),
			axisY: new Float64Array(t),
			vectorMagnitude: new Float64Array(t)
		};
		return d ? Ai(l, n, c) : n;
	}, f = (e, t) => d ? Ni(l, e, t, o) : t;
	let m;
	try {
		const a = [...(await _t(e.fileId, i, r)).values()];
		if (Tn.includes(t)) {
			const t = a.filter((e) => e.timestamps.byteLength > 0 && ea(e, n)).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), i = t.findIndex((t) => t.date === e.date);
			if (i < 0) return;
			const r = [];
			for (const e of t) r.push(await p(e, ea(e, n)));
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
			const r = (await Yi(l, i, n.map((e) => e.date), u, s, [t]))[e.date]?.get(t);
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
	s?.throwIfAborted(), await We(e.fileId, e.date, m, i, s), s?.throwIfAborted(), Object.assign(e, m);
}
async function na(e, t, n, i, a, s = () => {
	_(e);
}) {
	const r = Mi(n.map((e) => t[e].timestamps)), o = Mi(n.map((e) => t[e].axisY)), l = Mi(n.map((e) => t[e].choiAxis ?? t[e].vectorMagnitude)), c = Vi(r, i), u = await G(e, (e) => e.scoreAllDays(c.map(({ start: e, end: t }) => ({
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
function ia(e, t) {
	return "number" == typeof e && "number" == typeof t && e !== t;
}
N();
let aa = 0;
const sa = /* @__PURE__ */ new Set();
function ra(e, t, n) {
	if (n) {
		const e = Bt(n);
		if (!Kt(e)) return Yt(e);
	}
	return t ?? p.SMART;
}
function oa(e, t) {
	e.invalidateQueries({ queryKey: t }).catch((e) => {
		tt("warn", "Query invalidation failed", {
			...ye(e),
			query_key: t.map(String).join(":")
		});
	});
}
async function la(e, t, n) {
	const i = n ? await n.wearSiteHasptRouting(e, t ?? void 0) : await Xe("wearSiteHasptRouting", `${e}:${t ?? ""}`, () => b().wearSiteHasptRouting(e, t ?? void 0));
	return {
		sensorLocation: i.sensorLocation,
		variant: i.variant,
		requiresLongitudinalAxis: i.requiresLongitudinalAxis,
		routedByWearSite: null == t
	};
}
var ca;
function ua(e, t, n) {
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
var da = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, pa = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(ca = globalThis).__zod_globalConfig ?? (ca.__zod_globalConfig = {});
const fa = globalThis.__zod_globalConfig;
function ma(e) {
	return e && Object.assign(fa, e), fa;
}
function ha(e) {
	const t = Object.values(e).filter((e) => "number" == typeof e);
	return Object.entries(e).filter(([e, n]) => -1 === t.indexOf(+e)).map(([e, t]) => t);
}
function ga(e, t) {
	return "bigint" == typeof t ? t.toString() : t;
}
function ya(e) {
	return { get value() {
		{
			const t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function wa(e) {
	return null == e;
}
function _a(e) {
	const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
const va = Symbol("evaluating");
function ba(e, t, n) {
	let i;
	Object.defineProperty(e, t, {
		get() {
			if (i !== va) return void 0 === i && (i = va, i = n()), i;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function ka(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function Sa(...e) {
	const t = {};
	for (const n of e) {
		const e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Ia(e) {
	return JSON.stringify(e);
}
const Aa = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function xa(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
const Na = ya(() => {
	if (fa.jitless) return !1;
	if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return new Function(""), !0;
	} catch (e) {
		return !1;
	}
});
function $a(e) {
	if (!1 === xa(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	if ("function" != typeof t) return !0;
	const n = t.prototype;
	return !1 !== xa(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function Ta(e) {
	return $a(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const za = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
function Ma(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Da(e, t, n) {
	const i = new e._zod.constr(t ?? e._zod.def);
	return t && !n?.parent || (i._zod.parent = e), i;
}
function Ra(e) {
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
const Ea = {
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Ca(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!0 !== e.issues[n]?.continue) return !0;
	return !1;
}
function Fa(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!1 === e.issues[n]?.continue) return !0;
	return !1;
}
function Oa(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function Pa(e) {
	return "string" == typeof e ? e : e?.message;
}
function ja(e, t, n) {
	const i = e.message ? e.message : Pa(e.inst?._zod.def?.error?.(e)) ?? Pa(t?.error?.(e)) ?? Pa(n.customError?.(e)) ?? Pa(n.localeError?.(e)) ?? "Invalid input", { inst: a, continue: s, input: r, ...o } = e;
	return o.path ?? (o.path = []), o.message = i, t?.reportInput && (o.input = r), o;
}
function Ba(e) {
	return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function Za(...e) {
	const [t, n, i] = e;
	return "string" == typeof t ? {
		message: t,
		code: "custom",
		input: n,
		inst: i
	} : { ...t };
}
const qa = (e, t) => {
	e.name = "$ZodError", Object.defineProperty(e, "_zod", {
		value: e._zod,
		enumerable: !1
	}), Object.defineProperty(e, "issues", {
		value: t,
		enumerable: !1
	}), e.message = JSON.stringify(t, ga, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, Ga = ua("$ZodError", qa), Ua = ua("$ZodError", qa, { Parent: Error }), Ha = (e) => (t, n, i, a) => {
	const s = i ? {
		...i,
		async: !1
	} : { async: !1 }, r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise) throw new da();
	if (r.issues.length) {
		const t = new ((a?.Err) ?? e)(r.issues.map((e) => ja(e, s, ma())));
		throw Aa(t, a?.callee), t;
	}
	return r.value;
}, Ja = (e) => async (t, n, i, a) => {
	const s = i ? {
		...i,
		async: !0
	} : { async: !0 };
	let r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise && (r = await r), r.issues.length) {
		const t = new ((a?.Err) ?? e)(r.issues.map((e) => ja(e, s, ma())));
		throw Aa(t, a?.callee), t;
	}
	return r.value;
}, La = (e) => (t, n, i) => {
	const a = i ? {
		...i,
		async: !1
	} : { async: !1 }, s = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (s instanceof Promise) throw new da();
	return s.issues.length ? {
		success: !1,
		error: new (e ?? Ga)(s.issues.map((e) => ja(e, a, ma())))
	} : {
		success: !0,
		data: s.value
	};
}, Wa = La(Ua), Va = (e) => async (t, n, i) => {
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
		error: new e(s.issues.map((e) => ja(e, a, ma())))
	} : {
		success: !0,
		data: s.value
	};
}, Ka = Va(Ua), Ya = (e) => (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return Ha(e)(t, n, a);
}, Xa = (e) => (t, n, i) => Ha(e)(t, n, i), Qa = (e) => async (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return Ja(e)(t, n, a);
}, es = (e) => async (t, n, i) => Ja(e)(t, n, i), ts = (e) => (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return La(e)(t, n, a);
}, ns = (e) => (t, n, i) => La(e)(t, n, i), is = (e) => async (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return Va(e)(t, n, a);
}, as = (e) => async (t, n, i) => Va(e)(t, n, i), ss = /^[cC][0-9a-z]{6,}$/, rs = /^[0-9a-z]+$/, os = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, ls = /^[0-9a-vA-V]{20}$/, cs = /^[A-Za-z0-9]{27}$/, us = /^[a-zA-Z0-9_-]{21}$/, ds = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, ps = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, fs = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ms = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, hs = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, gs = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, ys = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, ws = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, _s = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, vs = /^[A-Za-z0-9_-]*$/, bs = /^https?$/, ks = /^\+[1-9]\d{6,14}$/, Ss = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Is = new RegExp(`^${Ss}$`);
function As(e) {
	const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return "number" == typeof e.precision ? -1 === e.precision ? `${t}` : 0 === e.precision ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
const xs = /^-?\d+$/, Ns = /^-?\d+(?:\.\d+)?$/, $s = /^(?:true|false)$/i, Ts = /^[^A-Z]*$/, zs = /^[^a-z]*$/, Ms = ua("$ZodCheck", (e, t) => {
	var n;
	e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Ds = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, Rs = ua("$ZodCheckLessThan", (e, t) => {
	Ms.init(e, t);
	const n = Ds[typeof t.value];
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
}), Es = ua("$ZodCheckGreaterThan", (e, t) => {
	Ms.init(e, t);
	const n = Ds[typeof t.value];
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
}), Cs = ua("$ZodCheckMultipleOf", (e, t) => {
	Ms.init(e, t), e._zod.onattach.push((e) => {
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
}), Fs = ua("$ZodCheckNumberFormat", (e, t) => {
	Ms.init(e, t), t.format = t.format || "float64";
	const n = t.format?.includes("int"), i = n ? "int" : "number", [a, s] = Ea[t.format];
	e._zod.onattach.push((e) => {
		const i = e._zod.bag;
		i.format = t.format, i.minimum = a, i.maximum = s, n && (i.pattern = xs);
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
}), Os = ua("$ZodCheckMaxLength", (e, t) => {
	var n;
	Ms.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !wa(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		const i = n.value;
		if (i.length <= t.maximum) return;
		const a = Ba(i);
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
}), Ps = ua("$ZodCheckMinLength", (e, t) => {
	var n;
	Ms.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !wa(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		const i = n.value;
		if (i.length >= t.minimum) return;
		const a = Ba(i);
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
}), js = ua("$ZodCheckLengthEquals", (e, t) => {
	var n;
	Ms.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !wa(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		const i = n.value, a = i.length;
		if (a === t.length) return;
		const s = Ba(i), r = a > t.length;
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
}), Bs = ua("$ZodCheckStringFormat", (e, t) => {
	var n, i;
	Ms.init(e, t), e._zod.onattach.push((e) => {
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
}), Zs = ua("$ZodCheckRegex", (e, t) => {
	Bs.init(e, t), e._zod.check = (n) => {
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
}), qs = ua("$ZodCheckLowerCase", (e, t) => {
	t.pattern ?? (t.pattern = Ts), Bs.init(e, t);
}), Gs = ua("$ZodCheckUpperCase", (e, t) => {
	t.pattern ?? (t.pattern = zs), Bs.init(e, t);
}), Us = ua("$ZodCheckIncludes", (e, t) => {
	Ms.init(e, t);
	const n = Ma(t.includes), i = new RegExp("number" == typeof t.position ? `^.{${t.position}}${n}` : n);
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
}), Hs = ua("$ZodCheckStartsWith", (e, t) => {
	Ms.init(e, t);
	const n = new RegExp(`^${Ma(t.prefix)}.*`);
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
}), Js = ua("$ZodCheckEndsWith", (e, t) => {
	Ms.init(e, t);
	const n = new RegExp(`.*${Ma(t.suffix)}$`);
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
}), Ls = ua("$ZodCheckOverwrite", (e, t) => {
	Ms.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
});
var Ws = class {
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
const Vs = {
	major: 4,
	minor: 4,
	patch: 3
}, Ks = ua("$ZodType", (e, t) => {
	var n;
	e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Vs;
	const i = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && i.unshift(e);
	for (const a of i) for (const t of a._zod.onattach) t(e);
	if (0 === i.length) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		const t = (e, t, n) => {
			let i, a = Ca(e);
			for (const s of t) {
				if (s._zod.def.when) {
					if (Fa(e)) continue;
					if (!s._zod.def.when(e)) continue;
				} else if (a) continue;
				const t = e.issues.length, r = s._zod.check(e);
				if (r instanceof Promise && !1 === n?.async) throw new da();
				if (i || r instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await r, e.issues.length !== t && (a || (a = Ca(e, t)));
				});
				else {
					if (e.issues.length === t) continue;
					a || (a = Ca(e, t));
				}
			}
			return i ? i.then(() => e) : e;
		}, n = (n, a, s) => {
			if (Ca(n)) return n.aborted = !0, n;
			const r = t(a, i, s);
			if (r instanceof Promise) {
				if (!1 === s.async) throw new da();
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
				if (!1 === s.async) throw new da();
				return r.then((e) => t(e, i, s));
			}
			return t(r, i, s);
		};
	}
	ba(e, "~standard", () => ({
		validate: (t) => {
			try {
				const n = Wa(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch (n) {
				return Ka(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), Ys = ua("$ZodString", (e, t) => {
	var n;
	Ks.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? (n = e._zod.bag, new RegExp(`^${n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*"}$`)), e._zod.parse = (n, i) => {
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
}), Xs = ua("$ZodStringFormat", (e, t) => {
	Bs.init(e, t), Ys.init(e, t);
}), Qs = ua("$ZodGUID", (e, t) => {
	t.pattern ?? (t.pattern = ps), Xs.init(e, t);
}), er = ua("$ZodUUID", (e, t) => {
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
		t.pattern ?? (t.pattern = fs(e));
	} else t.pattern ?? (t.pattern = fs());
	Xs.init(e, t);
}), tr = ua("$ZodEmail", (e, t) => {
	t.pattern ?? (t.pattern = ms), Xs.init(e, t);
}), nr = ua("$ZodURL", (e, t) => {
	Xs.init(e, t), e._zod.check = (n) => {
		try {
			const i = n.value.trim();
			if (!t.normalize && t.protocol?.source === bs.source && !/^https?:\/\//i.test(i)) return void n.issues.push({
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
}), ir = ua("$ZodEmoji", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Xs.init(e, t);
}), ar = ua("$ZodNanoID", (e, t) => {
	t.pattern ?? (t.pattern = us), Xs.init(e, t);
}), sr = ua("$ZodCUID", (e, t) => {
	t.pattern ?? (t.pattern = ss), Xs.init(e, t);
}), rr = ua("$ZodCUID2", (e, t) => {
	t.pattern ?? (t.pattern = rs), Xs.init(e, t);
}), or = ua("$ZodULID", (e, t) => {
	t.pattern ?? (t.pattern = os), Xs.init(e, t);
}), lr = ua("$ZodXID", (e, t) => {
	t.pattern ?? (t.pattern = ls), Xs.init(e, t);
}), cr = ua("$ZodKSUID", (e, t) => {
	t.pattern ?? (t.pattern = cs), Xs.init(e, t);
}), ur = ua("$ZodISODateTime", (e, t) => {
	t.pattern ?? (t.pattern = function(e) {
		const t = As({ precision: e.precision }), n = ["Z"];
		e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const i = `${t}(?:${n.join("|")})`;
		return new RegExp(`^${Ss}T(?:${i})$`);
	}(t)), Xs.init(e, t);
}), dr = ua("$ZodISODate", (e, t) => {
	t.pattern ?? (t.pattern = Is), Xs.init(e, t);
}), pr = ua("$ZodISOTime", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp(`^${As(t)}$`)), Xs.init(e, t);
}), fr = ua("$ZodISODuration", (e, t) => {
	t.pattern ?? (t.pattern = ds), Xs.init(e, t);
}), mr = ua("$ZodIPv4", (e, t) => {
	t.pattern ?? (t.pattern = hs), Xs.init(e, t), e._zod.bag.format = "ipv4";
}), hr = ua("$ZodIPv6", (e, t) => {
	t.pattern ?? (t.pattern = gs), Xs.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
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
}), gr = ua("$ZodCIDRv4", (e, t) => {
	t.pattern ?? (t.pattern = ys), Xs.init(e, t);
}), yr = ua("$ZodCIDRv6", (e, t) => {
	t.pattern ?? (t.pattern = ws), Xs.init(e, t), e._zod.check = (n) => {
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
function wr(e) {
	if ("" === e) return !0;
	if (/\s/.test(e)) return !1;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
const _r = ua("$ZodBase64", (e, t) => {
	t.pattern ?? (t.pattern = _s), Xs.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		wr(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), vr = ua("$ZodBase64URL", (e, t) => {
	t.pattern ?? (t.pattern = vs), Xs.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		(function(e) {
			if (!vs.test(e)) return !1;
			const t = e.replace(/[-_]/g, (e) => "-" === e ? "+" : "/");
			return wr(t.padEnd(4 * Math.ceil(t.length / 4), "="));
		})(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), br = ua("$ZodE164", (e, t) => {
	t.pattern ?? (t.pattern = ks), Xs.init(e, t);
}), kr = ua("$ZodJWT", (e, t) => {
	Xs.init(e, t), e._zod.check = (n) => {
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
}), Sr = ua("$ZodNumber", (e, t) => {
	Ks.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Ns, e._zod.parse = (n, i) => {
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
}), Ir = ua("$ZodNumberFormat", (e, t) => {
	Fs.init(e, t), Sr.init(e, t);
}), Ar = ua("$ZodBoolean", (e, t) => {
	Ks.init(e, t), e._zod.pattern = $s, e._zod.parse = (n, i) => {
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
}), xr = ua("$ZodUnknown", (e, t) => {
	Ks.init(e, t), e._zod.parse = (e) => e;
}), Nr = ua("$ZodNever", (e, t) => {
	Ks.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function $r(e, t, n) {
	e.issues.length && t.issues.push(...Oa(n, e.issues)), t.value[n] = e.value;
}
const Tr = ua("$ZodArray", (e, t) => {
	Ks.init(e, t), e._zod.parse = (n, i) => {
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
			o instanceof Promise ? s.push(o.then((t) => $r(t, n, e))) : $r(o, n, e);
		}
		return s.length ? Promise.all(s).then(() => n) : n;
	};
});
function zr(e, t, n, i, a, s) {
	const r = n in i;
	if (e.issues.length) {
		if (a && s && !r) return;
		t.issues.push(...Oa(n, e.issues));
	}
	r || a ? void 0 === e.value ? r && (t.value[n] = void 0) : t.value[n] = e.value : e.issues.length || t.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: void 0,
		path: [n]
	});
}
function Mr(e) {
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
function Dr(e, t, n, i, a, s) {
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
		a instanceof Promise ? e.push(a.then((e) => zr(e, n, p, t, u, d))) : zr(a, n, p, t, u, d);
	}
	return r.length && n.issues.push({
		code: "unrecognized_keys",
		keys: r,
		input: t,
		inst: s
	}), e.length ? Promise.all(e).then(() => n) : n;
}
const Rr = ua("$ZodObject", (e, t) => {
	if (Ks.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		const e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			const n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	const n = ya(() => Mr(t));
	ba(e._zod, "propValues", () => {
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
	const i = xa, a = t.catchall;
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
			s instanceof Promise ? l.push(s.then((n) => zr(n, t, e, o, i, a))) : zr(s, t, e, o, i, a);
		}
		return a ? Dr(l, o, t, r, n.value, e) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), Er = ua("$ZodObjectJIT", (e, t) => {
	Rr.init(e, t);
	const n = e._zod.parse, i = ya(() => Mr(t));
	let a;
	const s = xa, r = !fa.jitless, o = r && Na.value, l = t.catchall;
	let c;
	e._zod.parse = (u, d) => {
		c ?? (c = i.value);
		const p = u.value;
		return s(p) ? r && o && !1 === d?.async && !0 !== d.jitless ? (a || (a = ((e) => {
			const t = new Ws([
				"shape",
				"payload",
				"ctx"
			]), n = i.value, a = (e) => {
				const t = Ia(e);
				return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
			};
			t.write("const input = payload.value;");
			const s = Object.create(null);
			let r = 0;
			for (const i of n.keys) s[i] = "key_" + r++;
			t.write("const newResult = {};");
			for (const i of n.keys) {
				const n = s[i], r = Ia(i), o = e[i], l = "optional" === o?._zod?.optin, c = "optional" === o?._zod?.optout;
				t.write(`const ${n} = ${a(i)};`), l && c ? t.write(`\n        if (${n}.issues.length) {\n          if (${r} in input) {\n            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [${r}, ...iss.path] : [${r}]\n            })));\n          }\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : l ? t.write(`\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : t.write(`\n        const ${n}_present = ${r} in input;\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        if (!${n}_present && !${n}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${r}]\n          });\n        }\n\n        if (${n}_present) {\n          if (${n}.value === undefined) {\n            newResult[${r}] = undefined;\n          } else {\n            newResult[${r}] = ${n}.value;\n          }\n        }\n\n      `);
			}
			t.write("payload.value = newResult;"), t.write("return payload;");
			const o = t.compile();
			return (t, n) => o(e, t, n);
		})(t.shape)), u = a(u, d), l ? Dr([], p, u, d, c, e) : u) : n(u, d) : (u.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), u);
	};
});
function Cr(e, t, n, i) {
	for (const s of e) if (0 === s.issues.length) return t.value = s.value, t;
	const a = e.filter((e) => !Ca(e));
	return 1 === a.length ? (t.value = a[0].value, a[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => ja(e, i, ma())))
	}), t);
}
const Fr = ua("$ZodUnion", (e, t) => {
	Ks.init(e, t), ba(e._zod, "optin", () => t.options.some((e) => "optional" === e._zod.optin) ? "optional" : void 0), ba(e._zod, "optout", () => t.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0), ba(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), ba(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			const e = t.options.map((e) => e._zod.pattern);
			return new RegExp(`^(${e.map((e) => _a(e.source)).join("|")})$`);
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
		return s ? Promise.all(r).then((t) => Cr(t, i, e, a)) : Cr(r, i, e, a);
	};
}), Or = ua("$ZodIntersection", (e, t) => {
	Ks.init(e, t), e._zod.parse = (e, n) => {
		const i = e.value, a = t.left._zod.run({
			value: i,
			issues: []
		}, n), s = t.right._zod.run({
			value: i,
			issues: []
		}, n);
		return a instanceof Promise || s instanceof Promise ? Promise.all([a, s]).then(([t, n]) => jr(e, t, n)) : jr(e, a, s);
	};
});
function Pr(e, t) {
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (e instanceof Date && t instanceof Date && +e === +t) return {
		valid: !0,
		data: e
	};
	if ($a(e) && $a(t)) {
		const n = Object.keys(t), i = Object.keys(e).filter((e) => -1 !== n.indexOf(e)), a = {
			...e,
			...t
		};
		for (const s of i) {
			const n = Pr(e[s], t[s]);
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
			const a = Pr(e[i], t[i]);
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
function jr(e, t, n) {
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
	}), Ca(e)) return e;
	const r = Pr(t.value, n.value);
	if (!r.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
	return e.value = r.data, e;
}
const Br = ua("$ZodRecord", (e, t) => {
	Ks.init(e, t), e._zod.parse = (n, i) => {
		const a = n.value;
		if (!$a(a)) return n.issues.push({
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
						issues: r.issues.map((e) => ja(e, i, ma())),
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
					e.issues.length && n.issues.push(...Oa(c, e.issues)), n.value[l] = e.value;
				})) : (u.issues.length && n.issues.push(...Oa(c, u.issues)), n.value[l] = u.value);
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
						issues: o.issues.map((e) => ja(e, i, ma())),
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
					e.issues.length && n.issues.push(...Oa(r, e.issues)), n.value[o.value] = e.value;
				})) : (l.issues.length && n.issues.push(...Oa(r, l.issues)), n.value[o.value] = l.value);
			}
		}
		return s.length ? Promise.all(s).then(() => n) : n;
	};
}), Zr = ua("$ZodEnum", (e, t) => {
	Ks.init(e, t);
	const n = ha(t.entries), i = new Set(n);
	e._zod.values = i, e._zod.pattern = new RegExp(`^(${n.filter((e) => za.has(typeof e)).map((e) => "string" == typeof e ? Ma(e) : e.toString()).join("|")})$`), e._zod.parse = (t, a) => {
		const s = t.value;
		return i.has(s) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: s,
			inst: e
		}), t;
	};
}), qr = ua("$ZodTransform", (e, t) => {
	Ks.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, i) => {
		if ("backward" === i.direction) throw new pa(e.constructor.name);
		const a = t.transform(n.value, n);
		if (i.async) return (a instanceof Promise ? a : Promise.resolve(a)).then((e) => (n.value = e, n.fallback = !0, n));
		if (a instanceof Promise) throw new da();
		return n.value = a, n.fallback = !0, n;
	};
});
function Gr(e, t) {
	return void 0 === t && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e;
}
const Ur = ua("$ZodOptional", (e, t) => {
	Ks.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", ba(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), ba(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${_a(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if ("optional" === t.innerType._zod.optin) {
			const i = e.value, a = t.innerType._zod.run(e, n);
			return a instanceof Promise ? a.then((e) => Gr(e, i)) : Gr(a, i);
		}
		return void 0 === e.value ? e : t.innerType._zod.run(e, n);
	};
}), Hr = ua("$ZodExactOptional", (e, t) => {
	Ur.init(e, t), ba(e._zod, "values", () => t.innerType._zod.values), ba(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), Jr = ua("$ZodNullable", (e, t) => {
	Ks.init(e, t), ba(e._zod, "optin", () => t.innerType._zod.optin), ba(e._zod, "optout", () => t.innerType._zod.optout), ba(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${_a(e.source)}|null)$`) : void 0;
	}), ba(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => null === e.value ? e : t.innerType._zod.run(e, n);
}), Lr = ua("$ZodDefault", (e, t) => {
	Ks.init(e, t), e._zod.optin = "optional", ba(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		if (void 0 === e.value) return e.value = t.defaultValue, e;
		const i = t.innerType._zod.run(e, n);
		return i instanceof Promise ? i.then((e) => Wr(e, t)) : Wr(i, t);
	};
});
function Wr(e, t) {
	return void 0 === e.value && (e.value = t.defaultValue), e;
}
const Vr = ua("$ZodPrefault", (e, t) => {
	Ks.init(e, t), e._zod.optin = "optional", ba(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => ("backward" === n.direction || void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), Kr = ua("$ZodNonOptional", (e, t) => {
	Ks.init(e, t), ba(e._zod, "values", () => {
		const e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
	}), e._zod.parse = (n, i) => {
		const a = t.innerType._zod.run(n, i);
		return a instanceof Promise ? a.then((t) => Yr(t, e)) : Yr(a, e);
	};
});
function Yr(e, t) {
	return e.issues.length || void 0 !== e.value || e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
const Xr = ua("$ZodCatch", (e, t) => {
	Ks.init(e, t), e._zod.optin = "optional", ba(e._zod, "optout", () => t.innerType._zod.optout), ba(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const i = t.innerType._zod.run(e, n);
		return i instanceof Promise ? i.then((i) => (e.value = i.value, i.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: i.issues.map((e) => ja(e, n, ma())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e)) : (e.value = i.value, i.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: i.issues.map((e) => ja(e, n, ma())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e);
	};
}), Qr = ua("$ZodPipe", (e, t) => {
	Ks.init(e, t), ba(e._zod, "values", () => t.in._zod.values), ba(e._zod, "optin", () => t.in._zod.optin), ba(e._zod, "optout", () => t.out._zod.optout), ba(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) {
			const i = t.out._zod.run(e, n);
			return i instanceof Promise ? i.then((e) => eo(e, t.in, n)) : eo(i, t.in, n);
		}
		const i = t.in._zod.run(e, n);
		return i instanceof Promise ? i.then((e) => eo(e, t.out, n)) : eo(i, t.out, n);
	};
});
function eo(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues,
		fallback: e.fallback
	}, n);
}
const to = ua("$ZodReadonly", (e, t) => {
	Ks.init(e, t), ba(e._zod, "propValues", () => t.innerType._zod.propValues), ba(e._zod, "values", () => t.innerType._zod.values), ba(e._zod, "optin", () => t.innerType?._zod?.optin), ba(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const i = t.innerType._zod.run(e, n);
		return i instanceof Promise ? i.then(no) : no(i);
	};
});
function no(e) {
	return e.value = Object.freeze(e.value), e;
}
const io = ua("$ZodCustom", (e, t) => {
	Ms.init(e, t), Ks.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		const i = n.value, a = t.fn(i);
		if (a instanceof Promise) return a.then((t) => ao(t, n, i, e));
		ao(a, n, i, e);
	};
});
function ao(e, t, n, i) {
	if (!e) {
		const e = {
			code: "custom",
			input: n,
			inst: i,
			path: [...i._zod.def.path ?? []],
			continue: !i._zod.def.abort
		};
		i._zod.def.params && (e.params = i._zod.def.params), t.issues.push(Za(e));
	}
}
var so;
(so = globalThis).__zod_globalRegistry ?? (so.__zod_globalRegistry = new class {
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
const ro = globalThis.__zod_globalRegistry;
function oo(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...Ra(t)
	});
}
function lo(e, t) {
	return new Rs({
		check: "less_than",
		...Ra(t),
		value: e,
		inclusive: !1
	});
}
function co(e, t) {
	return new Rs({
		check: "less_than",
		...Ra(t),
		value: e,
		inclusive: !0
	});
}
function uo(e, t) {
	return new Es({
		check: "greater_than",
		...Ra(t),
		value: e,
		inclusive: !1
	});
}
function po(e, t) {
	return new Es({
		check: "greater_than",
		...Ra(t),
		value: e,
		inclusive: !0
	});
}
function fo(e, t) {
	return new Cs({
		check: "multiple_of",
		...Ra(t),
		value: e
	});
}
function mo(e, t) {
	return new Os({
		check: "max_length",
		...Ra(t),
		maximum: e
	});
}
function ho(e, t) {
	return new Ps({
		check: "min_length",
		...Ra(t),
		minimum: e
	});
}
function go(e, t) {
	return new js({
		check: "length_equals",
		...Ra(t),
		length: e
	});
}
function yo(e) {
	return new Ls({
		check: "overwrite",
		tx: e
	});
}
function wo(e, t) {
	const n = new Ms({
		check: "custom",
		...Ra(t)
	});
	return n._zod.check = e, n;
}
function _o(e) {
	let t = e?.target ?? "draft-2020-12";
	return "draft-4" === t && (t = "draft-04"), "draft-7" === t && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? ro,
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
function vo(e, t, n = {
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
		s && (r.ref || (r.ref = s), vo(s, t, i), t.seen.get(s).isParent = !0);
	}
	const l = t.metadataRegistry.get(e);
	return l && Object.assign(r.schema, l), "input" === t.io && So(e) && (delete r.schema.examples, delete r.schema.default), "input" === t.io && "_prefault" in r.schema && ((i = r.schema).default ?? (i.default = r.schema._prefault)), delete r.schema._prefault, t.seen.get(e).schema;
}
function bo(e, t) {
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
function ko(e, t) {
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
					input: Io(t, "input", e.processors),
					output: Io(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch (o) {
		throw new Error("Error converting schema to JSON.");
	}
}
function So(e, t) {
	const n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	const i = e._zod.def;
	if ("transform" === i.type) return !0;
	if ("array" === i.type) return So(i.element, n);
	if ("set" === i.type) return So(i.valueType, n);
	if ("lazy" === i.type) return So(i.getter(), n);
	if ("promise" === i.type || "optional" === i.type || "nonoptional" === i.type || "nullable" === i.type || "readonly" === i.type || "default" === i.type || "prefault" === i.type) return So(i.innerType, n);
	if ("intersection" === i.type) return So(i.left, n) || So(i.right, n);
	if ("record" === i.type || "map" === i.type) return So(i.keyType, n) || So(i.valueType, n);
	if ("pipe" === i.type) return !!e._zod.traits.has("$ZodCodec") || So(i.in, n) || So(i.out, n);
	if ("object" === i.type) {
		for (const e in i.shape) if (So(i.shape[e], n)) return !0;
		return !1;
	}
	if ("union" === i.type) {
		for (const e of i.options) if (So(e, n)) return !0;
		return !1;
	}
	if ("tuple" === i.type) {
		for (const e of i.items) if (So(e, n)) return !0;
		return !(!i.rest || !So(i.rest, n));
	}
	return !1;
}
const Io = (e, t, n = {}) => (i) => {
	const { libraryOptions: a, target: s } = i ?? {}, r = _o({
		...a ?? {},
		target: s,
		io: t,
		processors: n
	});
	return vo(e, r), bo(r, e), ko(r, e);
}, Ao = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, xo = (e, t, n, i) => {
	const a = e._zod.def;
	vo(a.innerType, t, i), t.seen.get(e).ref = a.innerType;
}, No = ua("ZodISODateTime", (e, t) => {
	ur.init(e, t), Yo.init(e, t);
});
const $o = ua("ZodISODate", (e, t) => {
	dr.init(e, t), Yo.init(e, t);
});
const To = ua("ZodISOTime", (e, t) => {
	pr.init(e, t), Yo.init(e, t);
});
const zo = ua("ZodISODuration", (e, t) => {
	fr.init(e, t), Yo.init(e, t);
});
const Mo = (e, t) => {
	Ga.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
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
			e.issues.push(t), e.message = JSON.stringify(e.issues, ga, 2);
		} },
		addIssues: { value: (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, ga, 2);
		} },
		isEmpty: { get: () => 0 === e.issues.length }
	});
}, Do = ua("ZodError", Mo, { Parent: Error }), Ro = Ha(Do), Eo = Ja(Do), Co = La(Do), Fo = Va(Do), Oo = Ya(Do), Po = Xa(Do), jo = Qa(Do), Bo = es(Do), Zo = ts(Do), qo = ns(Do), Go = is(Do), Uo = as(Do), Ho = /* @__PURE__ */ new WeakMap();
function Jo(e, t, n) {
	const i = Object.getPrototypeOf(e);
	let a = Ho.get(i);
	if (a || (a = /* @__PURE__ */ new Set(), Ho.set(i, a)), !a.has(t)) {
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
const Lo = ua("ZodType", (e, t) => (Ks.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: Io(e, "input"),
	output: Io(e, "output")
} }), e.toJSONSchema = ((e, t = {}) => (n) => {
	const i = _o({
		...n,
		processors: t
	});
	return vo(e, i), bo(i, e), ko(i, e);
})(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (t, n) => Ro(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => Co(e, t, n), e.parseAsync = async (t, n) => Eo(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => Fo(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => Oo(e, t, n), e.decode = (t, n) => Po(e, t, n), e.encodeAsync = async (t, n) => jo(e, t, n), e.decodeAsync = async (t, n) => Bo(e, t, n), e.safeEncode = (t, n) => Zo(e, t, n), e.safeDecode = (t, n) => qo(e, t, n), e.safeEncodeAsync = async (t, n) => Go(e, t, n), e.safeDecodeAsync = async (t, n) => Uo(e, t, n), Jo(e, "ZodType", {
	check(...e) {
		const t = this.def;
		return this.clone(Sa(t, { checks: [...t.checks ?? [], ...e.map((e) => "function" == typeof e ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return Da(this, e, t);
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
				return new Kl({
					type: "custom",
					check: "custom",
					fn: t,
					...Ra(n)
				});
			}(0, e, t);
		}(e, t));
	},
	superRefine(e, t) {
		return this.check(function(e, t) {
			return function(e, t) {
				const n = wo((t) => (t.addIssue = (e) => {
					if ("string" == typeof e) t.issues.push(Za(e, t.value, n._zod.def));
					else {
						const i = e;
						i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = t.value), i.inst ?? (i.inst = n), i.continue ?? (i.continue = !n._zod.def.abort), t.issues.push(Za(i));
					}
				}, e(t.value, t)), t);
				return n;
			}(e, t);
		}(e, t));
	},
	overwrite(e) {
		return this.check(yo(e));
	},
	optional() {
		return jl(this);
	},
	exactOptional() {
		return new Bl({
			type: "optional",
			innerType: this
		});
	},
	nullable() {
		return ql(this);
	},
	nullish() {
		return jl(ql(this));
	},
	nonoptional(e) {
		return function(e, t) {
			return new Hl({
				type: "nonoptional",
				innerType: e,
				...Ra(t)
			});
		}(this, e);
	},
	array() {
		return Nl(this);
	},
	or(e) {
		return Ml([this, e]);
	},
	and(e) {
		return new Dl({
			type: "intersection",
			left: this,
			right: e
		});
	},
	transform(e) {
		return Wl(this, new Ol({
			type: "transform",
			transform: e
		}));
	},
	default(e) {
		return t = e, new Gl({
			type: "default",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Ta(t);
			}
		});
		var t;
	},
	prefault(e) {
		return t = e, new Ul({
			type: "prefault",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Ta(t);
			}
		});
		var t;
	},
	catch(e) {
		return new Jl({
			type: "catch",
			innerType: this,
			catchValue: "function" == typeof (t = e) ? t : () => t
		});
		var t;
	},
	pipe(e) {
		return Wl(this, e);
	},
	readonly() {
		return new Vl({
			type: "readonly",
			innerType: this
		});
	},
	describe(e) {
		const t = this.clone();
		return ro.add(t, { description: e }), t;
	},
	meta(...e) {
		if (0 === e.length) return ro.get(this);
		const t = this.clone();
		return ro.add(t, e[0]), t;
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
	get: () => ro.get(e)?.description,
	configurable: !0
}), e)), Wo = ua("_ZodString", (e, t) => {
	Ys.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n) => {
		const i = n;
		i.type = "string";
		const { minimum: a, maximum: s, format: r, patterns: o, contentEncoding: l } = e._zod.bag;
		if ("number" == typeof a && (i.minLength = a), "number" == typeof s && (i.maxLength = s), r && (i.format = Ao[r] ?? r, "" === i.format && delete i.format, "time" === r && delete i.format), l && (i.contentEncoding = l), o && o.size > 0) {
			const e = [...o];
			1 === e.length ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
				..."draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	})(e, t, n);
	const n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, Jo(e, "_ZodString", {
		regex(...e) {
			return this.check(function(e, t) {
				return new Zs({
					check: "string_format",
					format: "regex",
					...Ra(t),
					pattern: e
				});
			}(...e));
		},
		includes(...e) {
			return this.check(function(e, t) {
				return new Us({
					check: "string_format",
					format: "includes",
					...Ra(t),
					includes: e
				});
			}(...e));
		},
		startsWith(...e) {
			return this.check(function(e, t) {
				return new Hs({
					check: "string_format",
					format: "starts_with",
					...Ra(t),
					prefix: e
				});
			}(...e));
		},
		endsWith(...e) {
			return this.check(function(e, t) {
				return new Js({
					check: "string_format",
					format: "ends_with",
					...Ra(t),
					suffix: e
				});
			}(...e));
		},
		min(...e) {
			return this.check(ho(...e));
		},
		max(...e) {
			return this.check(mo(...e));
		},
		length(...e) {
			return this.check(go(...e));
		},
		nonempty(...e) {
			return this.check(ho(1, ...e));
		},
		lowercase(e) {
			return this.check(function(e) {
				return new qs({
					check: "string_format",
					format: "lowercase",
					...Ra(e)
				});
			}(e));
		},
		uppercase(e) {
			return this.check(function(e) {
				return new Gs({
					check: "string_format",
					format: "uppercase",
					...Ra(e)
				});
			}(e));
		},
		trim() {
			return this.check(yo((e) => e.trim()));
		},
		normalize(...e) {
			return this.check(function(e) {
				return yo((t) => t.normalize(e));
			}(...e));
		},
		toLowerCase() {
			return this.check(yo((e) => e.toLowerCase()));
		},
		toUpperCase() {
			return this.check(yo((e) => e.toUpperCase()));
		},
		slugify() {
			return this.check(yo((e) => function(e) {
				return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
			}(e)));
		}
	});
}), Vo = ua("ZodString", (e, t) => {
	Ys.init(e, t), Wo.init(e, t), e.email = (t) => e.check(function(e, t) {
		return new Xo({
			type: "string",
			format: "email",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.url = (t) => e.check(function(e, t) {
		return new tl({
			type: "string",
			format: "url",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.jwt = (t) => e.check(function(e, t) {
		return new gl({
			type: "string",
			format: "jwt",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.emoji = (t) => e.check(function(e, t) {
		return new nl({
			type: "string",
			format: "emoji",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.guid = (t) => e.check(oo(Qo, t)), e.uuid = (t) => e.check(function(e, t) {
		return new el({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.uuidv4 = (t) => e.check(function(e, t) {
		return new el({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v4",
			...Ra(t)
		});
	}(0, t)), e.uuidv6 = (t) => e.check(function(e, t) {
		return new el({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v6",
			...Ra(t)
		});
	}(0, t)), e.uuidv7 = (t) => e.check(function(e, t) {
		return new el({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v7",
			...Ra(t)
		});
	}(0, t)), e.nanoid = (t) => e.check(function(e, t) {
		return new il({
			type: "string",
			format: "nanoid",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.guid = (t) => e.check(oo(Qo, t)), e.cuid = (t) => e.check(function(e, t) {
		return new al({
			type: "string",
			format: "cuid",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.cuid2 = (t) => e.check(function(e, t) {
		return new sl({
			type: "string",
			format: "cuid2",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.ulid = (t) => e.check(function(e, t) {
		return new rl({
			type: "string",
			format: "ulid",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.base64 = (t) => e.check(function(e, t) {
		return new fl({
			type: "string",
			format: "base64",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.base64url = (t) => e.check(function(e, t) {
		return new ml({
			type: "string",
			format: "base64url",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.xid = (t) => e.check(function(e, t) {
		return new ol({
			type: "string",
			format: "xid",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.ksuid = (t) => e.check(function(e, t) {
		return new ll({
			type: "string",
			format: "ksuid",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.ipv4 = (t) => e.check(function(e, t) {
		return new cl({
			type: "string",
			format: "ipv4",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.ipv6 = (t) => e.check(function(e, t) {
		return new ul({
			type: "string",
			format: "ipv6",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.cidrv4 = (t) => e.check(function(e, t) {
		return new dl({
			type: "string",
			format: "cidrv4",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.cidrv6 = (t) => e.check(function(e, t) {
		return new pl({
			type: "string",
			format: "cidrv6",
			check: "string_format",
			abort: !1,
			...Ra(t)
		});
	}(0, t)), e.e164 = (t) => e.check(function(e, t) {
		return new hl({
			type: "string",
			format: "e164",
			check: "string_format",
			abort: !1,
			...Ra(t)
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
				...Ra(t)
			});
		}(0, e);
	}(t)), e.date = (t) => e.check(function(e) {
		return function(e, t) {
			return new $o({
				type: "string",
				format: "date",
				check: "string_format",
				...Ra(t)
			});
		}(0, e);
	}(t)), e.time = (t) => e.check(function(e) {
		return function(e, t) {
			return new To({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...Ra(t)
			});
		}(0, e);
	}(t)), e.duration = (t) => e.check(function(e) {
		return function(e, t) {
			return new zo({
				type: "string",
				format: "duration",
				check: "string_format",
				...Ra(t)
			});
		}(0, e);
	}(t));
});
function Ko(e) {
	return function(e, t) {
		return new Vo({
			type: "string",
			...Ra(t)
		});
	}(0, e);
}
const Yo = ua("ZodStringFormat", (e, t) => {
	Xs.init(e, t), Wo.init(e, t);
}), Xo = ua("ZodEmail", (e, t) => {
	tr.init(e, t), Yo.init(e, t);
}), Qo = ua("ZodGUID", (e, t) => {
	Qs.init(e, t), Yo.init(e, t);
}), el = ua("ZodUUID", (e, t) => {
	er.init(e, t), Yo.init(e, t);
}), tl = ua("ZodURL", (e, t) => {
	nr.init(e, t), Yo.init(e, t);
}), nl = ua("ZodEmoji", (e, t) => {
	ir.init(e, t), Yo.init(e, t);
}), il = ua("ZodNanoID", (e, t) => {
	ar.init(e, t), Yo.init(e, t);
}), al = ua("ZodCUID", (e, t) => {
	sr.init(e, t), Yo.init(e, t);
}), sl = ua("ZodCUID2", (e, t) => {
	rr.init(e, t), Yo.init(e, t);
}), rl = ua("ZodULID", (e, t) => {
	or.init(e, t), Yo.init(e, t);
}), ol = ua("ZodXID", (e, t) => {
	lr.init(e, t), Yo.init(e, t);
}), ll = ua("ZodKSUID", (e, t) => {
	cr.init(e, t), Yo.init(e, t);
}), cl = ua("ZodIPv4", (e, t) => {
	mr.init(e, t), Yo.init(e, t);
}), ul = ua("ZodIPv6", (e, t) => {
	hr.init(e, t), Yo.init(e, t);
}), dl = ua("ZodCIDRv4", (e, t) => {
	gr.init(e, t), Yo.init(e, t);
}), pl = ua("ZodCIDRv6", (e, t) => {
	yr.init(e, t), Yo.init(e, t);
}), fl = ua("ZodBase64", (e, t) => {
	_r.init(e, t), Yo.init(e, t);
}), ml = ua("ZodBase64URL", (e, t) => {
	vr.init(e, t), Yo.init(e, t);
}), hl = ua("ZodE164", (e, t) => {
	br.init(e, t), Yo.init(e, t);
}), gl = ua("ZodJWT", (e, t) => {
	kr.init(e, t), Yo.init(e, t);
}), yl = ua("ZodNumber", (e, t) => {
	Sr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n) => {
		const i = n, { minimum: a, maximum: s, format: r, multipleOf: o, exclusiveMaximum: l, exclusiveMinimum: c } = e._zod.bag;
		"string" == typeof r && r.includes("int") ? i.type = "integer" : i.type = "number";
		const u = "number" == typeof c && c >= (a ?? Number.NEGATIVE_INFINITY), d = "number" == typeof l && l <= (s ?? Number.POSITIVE_INFINITY), p = "draft-04" === t.target || "openapi-3.0" === t.target;
		u ? p ? (i.minimum = c, i.exclusiveMinimum = !0) : i.exclusiveMinimum = c : "number" == typeof a && (i.minimum = a), d ? p ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : "number" == typeof s && (i.maximum = s), "number" == typeof o && (i.multipleOf = o);
	})(e, t, n), Jo(e, "ZodNumber", {
		gt(e, t) {
			return this.check(uo(e, t));
		},
		gte(e, t) {
			return this.check(po(e, t));
		},
		min(e, t) {
			return this.check(po(e, t));
		},
		lt(e, t) {
			return this.check(lo(e, t));
		},
		lte(e, t) {
			return this.check(co(e, t));
		},
		max(e, t) {
			return this.check(co(e, t));
		},
		int(e) {
			return this.check(vl(e));
		},
		safe(e) {
			return this.check(vl(e));
		},
		positive(e) {
			return this.check(uo(0, e));
		},
		nonnegative(e) {
			return this.check(po(0, e));
		},
		negative(e) {
			return this.check(lo(0, e));
		},
		nonpositive(e) {
			return this.check(co(0, e));
		},
		multipleOf(e, t) {
			return this.check(fo(e, t));
		},
		step(e, t) {
			return this.check(fo(e, t));
		},
		finite() {
			return this;
		}
	});
	const n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function wl(e) {
	return function(e, t) {
		return new yl({
			type: "number",
			checks: [],
			...Ra(t)
		});
	}(0, e);
}
const _l = ua("ZodNumberFormat", (e, t) => {
	Ir.init(e, t), yl.init(e, t);
});
function vl(e) {
	return function(e, t) {
		return new _l({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...Ra(t)
		});
	}(0, e);
}
const bl = ua("ZodBoolean", (e, t) => {
	Ar.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.type = "boolean";
	})(0, 0, t);
});
function kl(e) {
	return function(e, t) {
		return new bl({
			type: "boolean",
			...Ra(t)
		});
	}(0, e);
}
const Sl = ua("ZodUnknown", (e, t) => {
	xr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (e, t, n) => {};
});
function Il() {
	return new Sl({ type: "unknown" });
}
const Al = ua("ZodNever", (e, t) => {
	Nr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.not = {};
	})(0, 0, t);
});
const xl = ua("ZodArray", (e, t) => {
	Tr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = n, s = e._zod.def, { minimum: r, maximum: o } = e._zod.bag;
		"number" == typeof r && (a.minItems = r), "number" == typeof o && (a.maxItems = o), a.type = "array", a.items = vo(s.element, t, {
			...i,
			path: [...i.path, "items"]
		});
	})(e, t, n, i), e.element = t.element, Jo(e, "ZodArray", {
		min(e, t) {
			return this.check(ho(e, t));
		},
		nonempty(e) {
			return this.check(ho(1, e));
		},
		max(e, t) {
			return this.check(mo(e, t));
		},
		length(e, t) {
			return this.check(go(e, t));
		},
		unwrap() {
			return this.element;
		}
	});
});
function Nl(e, t) {
	return function(e, t, n) {
		return new xl({
			type: "array",
			element: t,
			...Ra(n)
		});
	}(0, e, t);
}
const $l = ua("ZodObject", (e, t) => {
	Er.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = n, s = e._zod.def;
		a.type = "object", a.properties = {};
		const r = s.shape;
		for (const c in r) a.properties[c] = vo(r[c], t, {
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
		l.size > 0 && (a.required = Array.from(l)), "never" === s.catchall?._zod.def.type ? a.additionalProperties = !1 : s.catchall ? s.catchall && (a.additionalProperties = vo(s.catchall, t, {
			...i,
			path: [...i.path, "additionalProperties"]
		})) : "output" === t.io && (a.additionalProperties = !1);
	})(e, t, n, i), ba(e, "shape", () => t.shape), Jo(e, "ZodObject", {
		keyof() {
			return Fl(Object.keys(this._zod.def.shape));
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
				catchall: Il()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: Il()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: function(e, t) {
					return new Al({
						type: "never",
						...Ra(t)
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
				if (!$a(t)) throw new Error("Invalid input to extend: expected a plain object");
				const n = e._zod.def.checks;
				if (n && n.length > 0) {
					const n = e._zod.def.shape;
					for (const e in t) if (void 0 !== Object.getOwnPropertyDescriptor(n, e)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
				}
				return Da(e, Sa(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return ka(this, "shape", n), n;
				} }));
			}(this, e);
		},
		safeExtend(e) {
			return function(e, t) {
				if (!$a(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
				return Da(e, Sa(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return ka(this, "shape", n), n;
				} }));
			}(this, e);
		},
		merge(e) {
			return function(e, t) {
				if (e._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
				return Da(e, Sa(e._zod.def, {
					get shape() {
						const n = {
							...e._zod.def.shape,
							...t._zod.def.shape
						};
						return ka(this, "shape", n), n;
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
				return Da(e, Sa(e._zod.def, {
					get shape() {
						const e = {};
						for (const i in t) {
							if (!(i in n.shape)) throw new Error(`Unrecognized key: "${i}"`);
							t[i] && (e[i] = n.shape[i]);
						}
						return ka(this, "shape", e), e;
					},
					checks: []
				}));
			}(this, e);
		},
		omit(e) {
			return function(e, t) {
				const n = e._zod.def, i = n.checks;
				if (i && i.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
				return Da(e, Sa(e._zod.def, {
					get shape() {
						const i = { ...e._zod.def.shape };
						for (const e in t) {
							if (!(e in n.shape)) throw new Error(`Unrecognized key: "${e}"`);
							t[e] && delete i[e];
						}
						return ka(this, "shape", i), i;
					},
					checks: []
				}));
			}(this, e);
		},
		partial(...e) {
			return function(e, t, n) {
				const i = t._zod.def.checks;
				if (i && i.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
				return Da(t, Sa(t._zod.def, {
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
						return ka(this, "shape", a), a;
					},
					checks: []
				}));
			}(Pl, this, e[0]);
		},
		required(...e) {
			return t = Hl, n = this, i = e[0], Da(n, Sa(n._zod.def, { get shape() {
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
				return ka(this, "shape", a), a;
			} }));
			var t, n, i;
		}
	});
});
function Tl(e, t) {
	const n = {
		type: "object",
		shape: e ?? {},
		...Ra(t)
	};
	return new $l(n);
}
const zl = ua("ZodUnion", (e, t) => {
	Fr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = !1 === a.inclusive, r = a.options.map((e, n) => vo(e, t, {
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
function Ml(e, t) {
	return new zl({
		type: "union",
		options: e,
		...Ra(t)
	});
}
const Dl = ua("ZodIntersection", (e, t) => {
	Or.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = vo(a.left, t, {
			...i,
			path: [
				...i.path,
				"allOf",
				0
			]
		}), r = vo(a.right, t, {
			...i,
			path: [
				...i.path,
				"allOf",
				1
			]
		}), o = (e) => "allOf" in e && 1 === Object.keys(e).length;
		n.allOf = [...o(s) ? s.allOf : [s], ...o(r) ? r.allOf : [r]];
	})(e, t, n, i);
}), Rl = ua("ZodRecord", (e, t) => {
	Br.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = n, s = e._zod.def;
		a.type = "object";
		const r = s.keyType, o = r._zod.bag?.patterns;
		if ("loose" === s.mode && o && o.size > 0) {
			const e = vo(s.valueType, t, {
				...i,
				path: [
					...i.path,
					"patternProperties",
					"*"
				]
			});
			a.patternProperties = {};
			for (const t of o) a.patternProperties[t.source] = e;
		} else "draft-07" !== t.target && "draft-2020-12" !== t.target || (a.propertyNames = vo(s.keyType, t, {
			...i,
			path: [...i.path, "propertyNames"]
		})), a.additionalProperties = vo(s.valueType, t, {
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
function El(e, t, n) {
	return t && t._zod ? new Rl({
		type: "record",
		keyType: e,
		valueType: t,
		...Ra(n)
	}) : new Rl({
		type: "record",
		keyType: Ko(),
		valueType: e,
		...Ra(t)
	});
}
const Cl = ua("ZodEnum", (e, t) => {
	Zr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n) => {
		const i = ha(e._zod.def.entries);
		i.every((e) => "number" == typeof e) && (n.type = "number"), i.every((e) => "string" == typeof e) && (n.type = "string"), n.enum = i;
	})(e, 0, n), e.enum = t.entries, e.options = Object.values(t.entries);
	const n = new Set(Object.keys(t.entries));
	e.extract = (e, i) => {
		const a = {};
		for (const s of e) {
			if (!n.has(s)) throw new Error(`Key ${s} not found in enum`);
			a[s] = t.entries[s];
		}
		return new Cl({
			...t,
			checks: [],
			...Ra(i),
			entries: a
		});
	}, e.exclude = (e, i) => {
		const a = { ...t.entries };
		for (const t of e) {
			if (!n.has(t)) throw new Error(`Key ${t} not found in enum`);
			delete a[t];
		}
		return new Cl({
			...t,
			checks: [],
			...Ra(i),
			entries: a
		});
	};
});
function Fl(e, t) {
	const n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new Cl({
		type: "enum",
		entries: n,
		...Ra(t)
	});
}
const Ol = ua("ZodTransform", (e, t) => {
	qr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
	})(0, e), e._zod.parse = (n, i) => {
		if ("backward" === i.direction) throw new pa(e.constructor.name);
		n.addIssue = (i) => {
			if ("string" == typeof i) n.issues.push(Za(i, n.value, t));
			else {
				const t = i;
				t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), t.input ?? (t.input = n.value), t.inst ?? (t.inst = e), n.issues.push(Za(t));
			}
		};
		const a = t.transform(n.value, n);
		return a instanceof Promise ? a.then((e) => (n.value = e, n.fallback = !0, n)) : (n.value = a, n.fallback = !0, n);
	};
}), Pl = ua("ZodOptional", (e, t) => {
	Ur.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => xo(e, t, 0, i), e.unwrap = () => e._zod.def.innerType;
});
function jl(e) {
	return new Pl({
		type: "optional",
		innerType: e
	});
}
const Bl = ua("ZodExactOptional", (e, t) => {
	Hr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => xo(e, t, 0, i), e.unwrap = () => e._zod.def.innerType;
}), Zl = ua("ZodNullable", (e, t) => {
	Jr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = vo(a.innerType, t, i), r = t.seen.get(e);
		"openapi-3.0" === t.target ? (r.ref = a.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType;
});
function ql(e) {
	return new Zl({
		type: "nullable",
		innerType: e
	});
}
const Gl = ua("ZodDefault", (e, t) => {
	Lr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		vo(a.innerType, t, i), t.seen.get(e).ref = a.innerType, n.default = JSON.parse(JSON.stringify(a.defaultValue));
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
}), Ul = ua("ZodPrefault", (e, t) => {
	Vr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		vo(a.innerType, t, i), t.seen.get(e).ref = a.innerType, "input" === t.io && (n._prefault = JSON.parse(JSON.stringify(a.defaultValue)));
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType;
}), Hl = ua("ZodNonOptional", (e, t) => {
	Kr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		vo(a.innerType, t, i), t.seen.get(e).ref = a.innerType;
	})(e, t, 0, i), e.unwrap = () => e._zod.def.innerType;
}), Jl = ua("ZodCatch", (e, t) => {
	Xr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		let s;
		vo(a.innerType, t, i), t.seen.get(e).ref = a.innerType;
		try {
			s = a.catchValue(void 0);
		} catch {
			throw new Error("Dynamic catch values are not supported in JSON Schema");
		}
		n.default = s;
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
}), Ll = ua("ZodPipe", (e, t) => {
	Qr.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = a.in._zod.traits.has("$ZodTransform"), r = "input" === t.io ? s ? a.out : a.in : a.out;
		vo(r, t, i), t.seen.get(e).ref = r;
	})(e, t, 0, i), e.in = t.in, e.out = t.out;
});
function Wl(e, t) {
	return new Ll({
		type: "pipe",
		in: e,
		out: t
	});
}
const Vl = ua("ZodReadonly", (e, t) => {
	to.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		vo(a.innerType, t, i), t.seen.get(e).ref = a.innerType, n.readOnly = !0;
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType;
}), Kl = ua("ZodCustom", (e, t) => {
	io.init(e, t), Lo.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
	})(0, e);
}), Yl = Fl((Xl = m, Object.values(Xl)));
var Xl;
Tl({
	password: Ko(),
	username: Ko().max(100, "Username must be 100 characters or fewer")
});
const Ql = Tl({
	onset_timestamp: wl().nullable().optional(),
	offset_timestamp: wl().nullable().optional(),
	marker_index: wl().int().default(1),
	marker_type: Yl.default(m.MAIN_SLEEP)
}), ec = Tl({
	start_timestamp: wl().nullable().optional(),
	end_timestamp: wl().nullable().optional(),
	marker_index: wl().int().default(1)
}), tc = (Tl({
	sleep_markers: Nl(Ql).optional().default([]),
	nonwear_markers: Nl(ec).optional().default([]),
	explicit_no_nonwear: kl().optional().default(!1),
	is_invalid_night: kl().optional().default(!1),
	needs_consensus: kl().optional().default(!1),
	notes: Ko().nullable().optional(),
	sleep_period_detection_config: El(Ko(), Il()).nullable().optional()
}), Tl({
	timestamps: Nl(wl()).optional().default([]),
	axis_x: Nl(wl()).optional().default([]),
	axis_y: Nl(wl()).optional().default([]),
	axis_z: Nl(wl()).optional().default([]),
	vector_magnitude: Nl(wl()).optional().default([]),
	temperature: Nl(wl()).optional().default([]),
	lux: Nl(wl()).optional().default([]),
	melanopic_lux: Nl(wl()).optional().default([]),
	ggir_timestamps: Nl(wl()).optional().default([]),
	ggir_enmo: Nl(wl()).optional().default([]),
	ggir_anglez: Nl(wl()).optional().default([]),
	ggir_sib: Nl(wl()).optional().default([]),
	timestamps_30s: Nl(wl()).optional().default([]),
	axis_x_30s: Nl(wl()).optional().default([]),
	axis_y_30s: Nl(wl()).optional().default([]),
	axis_z_30s: Nl(wl()).optional().default([]),
	vector_magnitude_30s: Nl(wl()).optional().default([])
})), nc = Tl({
	resolution_id: Ko(),
	epoch_length_seconds: wl().int().positive(),
	category: Ko(),
	source_type: Ko().nullable().optional(),
	derived_from_resolution_id: Ko().nullable().optional(),
	aggregation_method: Ko().nullable().optional(),
	data: tc,
	algorithm_results: Nl(wl()).nullable().optional(),
	nonwear_results: Nl(wl()).nullable().optional()
}), ic = (Tl({
	data: tc.optional(),
	epoch_resolutions: Nl(nc).optional().default([]),
	timestamps: Nl(wl()).optional(),
	axis_x: Nl(wl()).optional(),
	axis_y: Nl(wl()).optional(),
	axis_z: Nl(wl()).optional(),
	vector_magnitude: Nl(wl()).optional(),
	temperature: Nl(wl()).optional(),
	algorithm_results: Nl(wl()).nullable().optional(),
	nonwear_results: Nl(wl()).nullable().optional(),
	nonwear_results_choi_2011: Nl(wl()).nullable().optional(),
	event_markers: Nl(Ml([wl(), kl()])).optional().default([]),
	event_marker_timestamps: Nl(wl()).optional().default([]),
	view_start: wl().nullable().optional(),
	view_end: wl().nullable().optional(),
	sensor_nonwear_periods: Nl(Tl({
		start_timestamp: wl(),
		end_timestamp: wl()
	})).optional().default([]),
	device_nonwear_source: Fl([
		"gt3x_capsense",
		"detach_nonwear",
		"actiware_off_wrist",
		"uploaded_wear_sensor"
	]).nullable().optional(),
	algorithmic_nonwear_masks: El(Ko(), Nl(wl())).optional()
}), t.diary_tolerance_minutes, t.nap_min_consecutive_epochs, t.epoch_length_seconds, [
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
]), ac = ic.filter((e) => "observed" !== e && "technically_unusable" !== e && "corrupt" !== e), sc = [
	"insufficient_still_windows",
	"required_calibration_evidence_unavailable",
	"calibration_evidence_unusable"
];
function rc(e, t, n, i) {
	const a = (/* @__PURE__ */ new Date()).toISOString(), s = function(e, t) {
		if (!e) return null;
		const n = function(e) {
			const t = [], { resolution_id: n, factory_parameters_availability: i, factory_parameters_artifact: a, auto_calibration_availability: s, auto_calibration_execution: r, selected_source: o, fallback_source: l, fallback_reason: c, fallback_policy_execution: u, refusal: d } = e;
			/\S/.test(n) || t.push("resolution_id must be non-blank"), ic.includes(i) || t.push(`factory_parameters_availability '${i}' is not an ObservationAvailability`), ic.includes(s) || t.push(`auto_calibration_availability '${s}' is not an ObservationAvailability`);
			const p = [
				o,
				l,
				d
			].filter((e) => void 0 !== e).length;
			if (1 !== p && t.push(`exactly one of selected_source/fallback_source/refusal is required, found ${String(p)}`), "observed" === i && void 0 === a && t.push("observed factory_parameters requires factory_parameters_artifact"), "observed" !== i && void 0 !== a && t.push("non-observed factory_parameters must not carry factory_parameters_artifact"), "observed" === s && void 0 === r && t.push("observed auto_calibration requires auto_calibration_execution"), "observed" !== s && void 0 !== r && t.push("non-observed auto_calibration must not carry auto_calibration_execution"), "factory_parameters" === o && "observed" !== i && t.push("selected_source=factory_parameters requires observed factory evidence"), "auto_calibration" === o && "observed" !== s && t.push("selected_source=auto_calibration requires observed auto-calibration evidence"), void 0 === l || void 0 !== c && void 0 !== u || t.push("fallback_source requires fallback_reason and fallback_policy_execution"), void 0 !== l || void 0 === c && void 0 === u || t.push("fallback provenance is only allowed alongside fallback_source"), d) {
				sc.includes(d.code) || t.push(`refusal.code '${d.code}' is not a CalibrationRefusalCode`), "insufficient_still_windows" === d.code && ("auto_calibration" !== d.blocked_source && t.push("insufficient_still_windows must block auto_calibration"), "technically_unusable" !== d.availability && t.push("insufficient_still_windows must use availability technically_unusable")), "required_calibration_evidence_unavailable" !== d.code || ac.includes(d.availability) || t.push(`required_calibration_evidence_unavailable cannot use availability '${d.availability}'`), "calibration_evidence_unusable" === d.code && "technically_unusable" !== d.availability && "corrupt" !== d.availability && t.push(`calibration_evidence_unusable cannot use availability '${d.availability}'`);
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
const oc = "Re-import this file to compute GGIR's invalid mask.", lc = "Hip HDCZA needs the longitudinal angle (anglex or angley), which this recording lacks on GGIR's grid; no night was placed.";
function cc(e) {
	return e.isInvalidNight || e.sleepMarkers.some((e) => function(e, t = !1) {
		return "auto" !== e.source || function(e, t = !1) {
			if (!0 === e.edited || t) return !0;
			const n = e.placement;
			return ia(e.onsetTimestamp, n?.onset_timestamp) || ia(e.offsetTimestamp, n?.offset_timestamp);
		}(e, t);
	}(e));
}
async function uc(e, t, n, i) {
	return e.nightIntervalOverlap(t, n, Float64Array.from(i, ([e]) => e), Float64Array.from(i, ([, e]) => e), Float64Array.from(i, ([, , e]) => void 0 !== e && void 0 === e.unavailable ? e.weight : 0));
}
function dc(e, t) {
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
async function pc(e, t, n, i) {
	const a = i.map(async ([, , i]) => {
		if (!i?.memberFlags || !i.timestamps) return [];
		const { memberFlags: a } = i, s = await e.epochsOverlapping(Float64Array.from(i.timestamps).subarray(0, a.length), 60, t, n);
		return s ? e.nonwearContributors([...a], Ut(i.detectors), s[0], s[1]) : [];
	});
	return Ut([...new Set((await Promise.all(a)).flat())]);
}
async function fc(e, t, n, i, a, s, r) {
	const o = vn(t, n), l = Object.fromEntries(Object.entries(o).map(([e, t]) => [e, new Uint8Array(t)])), c = it(t) ?? await dt(e, 60, r), u = await An(a, l, {
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
async function mc(e, t, n = [], i = [], a = {}, s = null, r = b()) {
	const o = [], l = n.map(([e, t]) => ({
		startTimestamp: e,
		endTimestamp: t
	}));
	for (const [c, u] of Object.entries(e)) {
		const e = t[c]?.timestamps;
		e && 0 !== e.length && o.push(...await fc(e, {
			nonwearResults: u.nonwear.buffer,
			nonwearResultsChoi2011: u.nonwearChoi2011?.buffer ?? null,
			detachNonwear: u.detachNonwear?.buffer ?? null,
			...a[c]
		}, "", l, i, s, r));
	}
	return o;
}
async function hc(e, t, n, i = Cn, a) {
	return En((a) => {
		if (!e) return [];
		const s = [];
		for (const { start: r, end: o } of be(e)) {
			if (!r || !o) continue;
			const e = a.resolveSpan(r, o, t, T.daytime, i);
			e && s.push({
				markerType: m.NAP,
				markerIndex: n + s.length + 1,
				onsetTimestamp: e[0],
				offsetTimestamp: e[1]
			});
		}
		return s;
	}, new On(a));
}
function gc(e) {
	const t = e instanceof Error ? e.message : "";
	return t.startsWith("runGgirPart3:") ? t : t.includes("timed out") ? `it timed out after ${String(B / 6e4)} minutes` : t.includes("is not a function") ? "this build's actours WASM has no runGgirPart3 export" : "the actours WASM runtime failed (out of memory or a Rust panic)";
}
async function yc(e, t, n, i = [], a = /* @__PURE__ */ new Map(), s, r, l, c = "wrist", u = E(), d, p, f, h, g, y) {
	const w = u, v = r?.ggirConfig ?? await ci(w), k = t.length;
	if (0 === k) return null;
	const S = a.values().next().value;
	S && Ue(e, S.importMappingProvenance);
	const I = p ?? b(), A = f ?? (() => _(I)), x = await la(c, s?.variant, I), N = x.variant, $ = x.sensorLocation, T = {
		...l ?? {},
		haspt_variant: N,
		hdcza_proposal_revision: 6,
		ggir_config_sha256: v.sha256
	}, z = r?.angley5s, M = r?.anglex5s, D = z && z.length === k ? z : void 0, R = M && M.length === k ? M : void 0, C = r?.invalid5s?.length === k ? r.invalid5s : void 0, F = void 0 !== g && void 0 !== C;
	if (void 0 === C) return oc;
	const O = "hip" === $ && !D && !R;
	if (O && (console.warn("[local-processing] Hip HDCZA was skipped because no aligned longitudinal axis was available."), !F)) return lc;
	let P = !1;
	const q = r?.dstRuns ?? [], U = C, H = r?.activity5s?.length === k ? r.activity5s : void 0;
	j(d, "before local HASPT placement");
	const J = await G(I, (e) => e.runGgirPart3({
		anglez: t,
		ggirConfigCsv: v.csvText,
		hasibCounts: ft(v.csvText, r?.zeroCrossings5s),
		...R ? { anglex: R } : {},
		...D ? { angley: D } : {},
		...H ? { enmo: H } : {},
		invalid: U,
		startTsEpochSec: n,
		hasptAlgo: N,
		...void 0 !== s?.config ? { hasptConfig: s.config } : {},
		..."hip" !== $ || R && D ? {} : { longitudinalAxis: D ? 2 : 1 },
		...r?.timezone ? { timezone: r.timezone } : {}
	}), {
		ms: B,
		label: `local ${N} placement`,
		signal: d,
		cancel: A
	}).then((e) => ({
		result: e,
		failure: null
	}), (e) => (Z(e, d, `local ${N} placement`), console.warn("[local-processing] GGIR Part 3 failed for this recording."), {
		result: null,
		failure: gc(e)
	}));
	if (J.result && F && g(J.result.part3Sib5s), O) return lc;
	if (!J.result) return `GGIR Part 3 (${N}) failed: ${J.failure}`;
	const L = J.result.part3SptNights, W = await I.ggirIndicesToWallClockMs(Uint32Array.from(L.flatMap((e) => [e.onsetIdx, e.wakeIdx])), 1e3 * n, [...q], r?.wallClockMs ? Float64Array.from(r.wallClockMs) : void 0), V = L.map((e, t) => ({
		onsetTimestamp: W[2 * t] / 1e3,
		offsetTimestamp: W[2 * t + 1] / 1e3,
		analysisDate: e.analysisDate
	}));
	for (const { onsetTimestamp: _, offsetTimestamp: b, analysisDate: E } of V) {
		j(d, "before local HASPT marker placement");
		const t = await At(e, E, zt, o.VAN_HEES_2015, null, w);
		if (t && cc(t)) continue;
		const n = await uc(I, _, b, i), s = dc(n.seconds, i), r = 0 === s.available.length && 0 === s.dropped.length ? T : {
			...T,
			nonwear_detectors_available: s.available,
			nonwear_detectors_dropped: s.dropped.map(({ detector: e, reason: t }) => ({
				detector: e,
				reason: t
			}))
		}, u = Nn(s.dropped, "ggir"), p = (e) => [e, ...u].join("; "), f = n.weightedFraction, g = f > 0 && s.available.length > 1 ? await pc(I, _, b, i) : null, v = await hc(a.get(E) ?? null, E, 1, Ce(e), I), k = fn(null, c), S = [{
			markerType: m.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: _,
			offsetTimestamp: b
		}, ...v].map((e) => ({
			...e,
			source: "auto",
			settingsHash: k
		}));
		j(d, "before local HASPT marker persistence"), await ii({
			signal: d,
			fileId: e,
			date: E,
			expected: Rt(t),
			username: "auto_score",
			sleepMarkers: S,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p(`${N} SPT: ${Dt(_)} → ${Dt(b)}` + (v.length > 0 ? `; ${v.length} diary nap(s)` : "") + (f > 0 ? `; selected-detector nonwear overlap ${Math.round(100 * f)}%` : "") + (g ? ` from ${bn(g, s.available.length)}` : "")),
			algorithm: o.VAN_HEES_2015,
			sleepPeriodDetectionConfig: r
		}, w, {
			...h ? { binding: h } : {},
			events: () => h ? [{
				action: "auto_score_applied",
				payload: It({
					algorithm: o.VAN_HEES_2015,
					sleepPeriodDetection: l ?? null,
					sleepCount: 1,
					napCount: v.length,
					markers: S
				})
			}] : []
		}).then(() => !0, (e) => (Z(e, d, "local HASPT marker persistence"), console.warn("[local-processing] HDCZA marker persistence failed."), P = !0, !1)) && y?.(E);
	}
	return P ? "one or more auto-marker writes failed" : null;
}
const wc = [
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
function _c(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function vc(e) {
	return JSON.stringify(e);
}
function bc(e) {
	const t = _c(e.config), n = _c(t?.signals) ?? t;
	return {
		...n ? { config: n } : {},
		days: e.days
	};
}
function kc(e) {
	return JSON.stringify(bc(e));
}
function Sc(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function Ic(e) {
	const t = Sc(e), n = t?.analysis_date, i = Sc(t?.intrinsic), a = i?.state;
	if (!t || "string" != typeof n || 0 === n.length || !i || "string" != typeof a || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(a)) return null;
	const s = i.score, r = i.verdict, o = i.infinite_reason, l = {}, c = [], u = t.per_guider;
	if (Array.isArray(u)) for (const h of u) {
		const e = Sc(h);
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
	const d = Sc(i.features), p = d && Array.isArray(d.feature_values) ? d : null, f = Sc(i.legacy_complexity_features) ?? (null === p ? d : null) ?? {}, m = t.computed_at;
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
const Ac = /^[0-9a-f]{64}$/;
var xc = class extends Error {
	constructor(e = !1) {
		super(e ? "Stored complexity evidence failed integrity verification." : "Complexity evidence failed integrity verification."), this.name = "ComplexityEvidenceIntegrityError";
	}
}, Nc = class extends Error {
	constructor() {
		super("Complexity evidence diverged for an existing generation."), this.name = "ComplexityEvidenceDivergenceError";
	}
}, $c = class extends Error {
	constructor() {
		super("Complexity evidence is older than the retained generation window."), this.name = "ComplexityEvidenceRetentionError";
	}
};
function Tc(e = !1) {
	throw new xc(e);
}
function zc(e) {
	"string" == typeof e && Ac.test(e) || Tc();
}
function Mc(e) {
	"string" == typeof e && 0 !== e.length && Number.isFinite(Date.parse(e)) || Tc();
}
function Dc(e) {
	if (null === e) return "null";
	switch (typeof e) {
		case "string":
		case "boolean": return JSON.stringify(e);
		case "number": return Number.isFinite(e) || Tc(), JSON.stringify(Object.is(e, -0) ? 0 : e);
		case "object": {
			if (Array.isArray(e)) {
				const t = [];
				for (let n = 0; n < e.length; n += 1) n in e || Tc(), t.push(Dc(e[n]));
				return `[${t.join(",")}]`;
			}
			const t = Object.getPrototypeOf(e);
			t !== Object.prototype && null !== t && Tc(), Object.getOwnPropertySymbols(e).length > 0 && Tc();
			const n = e, i = [];
			for (const e of Object.keys(n).sort()) {
				const t = Object.getOwnPropertyDescriptor(n, e);
				t && "value" in t && t.enumerable || Tc(), i.push(`${JSON.stringify(e)}:${Dc(t.value)}`);
			}
			return `{${i.join(",")}}`;
		}
		default: return Tc();
	}
}
function Rc(e) {
	const t = Dc(e), n = JSON.parse(t);
	return (null == n || "object" != typeof n || Array.isArray(n)) && Tc(), n;
}
async function Ec(e) {
	return O(Dc(e));
}
function Cc(e) {
	const t = e;
	for (const i of [
		"contractVersion",
		"crateVersion",
		"target",
		"semanticProfile",
		"profileProofStatus",
		"temporalBasis"
	]) "string" == typeof t[i] && "" !== t[i] || Tc();
	null === t.sourceRevision || "string" == typeof t.sourceRevision && "" !== t.sourceRevision || Tc(), zc(t.artifactSha256);
	const n = t.compiledFeatures;
	Array.isArray(n) && n.every((e) => "string" == typeof e && e.length > 0) || Tc(), Dc(e);
}
async function Fc(e, t) {
	"string" != typeof e && Tc(), void 0 !== t && zc(t);
	let n = 0;
	for (; n < e.length && /\s/.test(e[n]);) n += 1;
	let i = e.length - 1;
	for (; i >= n && /\s/.test(e[i]);) i -= 1;
	"{" === e[n] && "}" === e[i] || Tc();
	const a = await O(e);
	return void 0 !== t && t !== a && Tc(), a;
}
function Oc(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != typeof t || null === e || null === t) return !1;
	if (Array.isArray(e) || Array.isArray(t)) return !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((e, n) => Oc(e, t[n]));
	if ("object" != typeof e || "object" != typeof t) return !1;
	const n = Object.keys(e).sort(), i = Object.keys(t).sort();
	if (n.length !== i.length || n.some((e, t) => e !== i[t])) return !1;
	const a = e, s = t;
	return n.every((e) => Oc(a[e], s[e]));
}
function Pc(e) {
	try {
		const t = JSON.parse(e);
		return (null === t || "object" != typeof t || Array.isArray(t)) && Tc(), t;
	} catch {
		return Tc();
	}
}
function jc(e, t) {
	const n = Object.keys(e).sort(), i = [...t].sort();
	return n.length === i.length && n.every((e, t) => e === i[t]);
}
function Bc(e) {
	return "number" == typeof e && Number.isFinite(e);
}
function Zc(e) {
	return null === e || "string" == typeof e && e.length > 0;
}
function qc(e) {
	return Array.isArray(e) && e.every(Bc);
}
function Gc(e) {
	return Array.isArray(e) && e.every((e) => Number.isInteger(e) && (0 === e || 1 === e));
}
function Uc(e, t) {
	return 0 === e.length || e.length === t;
}
function Hc(e) {
	Array.isArray(e) || Tc();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && Tc();
		const e = t, n = e.start_ts, i = e.end_ts;
		jc(e, ["start_ts", "end_ts"]) && Bc(n) && Bc(i) && !(i < n) || Tc();
	}
}
function Jc(e, t) {
	Array.isArray(e) && e.length === t || Tc();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && Tc();
		const e = n;
		jc(e, ["onset_time", "offset_time"]) && "string" == typeof e.onset_time && 0 !== e.onset_time.length && Zc(e.offset_time) || Tc();
	}
}
function Lc(e) {
	Array.isArray(e) || Tc();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && Tc();
		const e = t;
		jc(e, ["start_time", "end_time"]) && "string" == typeof e.start_time && 0 !== e.start_time.length && "string" == typeof e.end_time && 0 !== e.end_time.length || Tc();
	}
}
function Wc(e) {
	Array.isArray(e) || Tc();
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && Tc();
		const e = n, i = e.guider, a = e.detector, s = e.onset_ts, r = e.offset_ts;
		(!jc(e, [
			"guider",
			"detector",
			"onset_ts",
			"offset_ts"
		]) || "string" != typeof i || 0 === i.length || t.has(i) || !Zc(a) || null !== s && !Bc(s) || null !== r && !Bc(r) || null === s && null === r) && Tc(), t.set(i, {
			detector: a,
			onset: s,
			offset: r
		});
	}
	return t;
}
function Vc(e) {
	if (null === e) return null;
	Array.isArray(e) && 2 === e.length || Tc();
	const t = e[0], n = e[1];
	return (!Bc(t) || !Bc(n) || n <= t) && Tc(), [t, n];
}
function Kc(e, t) {
	const n = Pc(e), i = void 0 === n.config ? ["days"] : ["config", "days"], a = n.days;
	jc(n, i) && Array.isArray(a) || Tc(), void 0 === n.config || null !== n.config && "object" == typeof n.config && !Array.isArray(n.config) || Tc();
	const s = /* @__PURE__ */ new Set();
	for (const o of a) {
		(null === o || "object" != typeof o || Array.isArray(o)) && Tc();
		const e = o;
		jc(e, wc) || Tc();
		const t = e.analysis_date, n = e.epoch_length_seconds, i = e.timestamps, a = e.activity_counts, r = e.sleep_scores, l = e.choi_nonwear, c = e.diary_nap_count, u = e.anglez, d = e.light, f = e.temperature, m = e.heart_rate, h = e.detach_nonwear, g = e.is_weekend, y = e.calibration_error, w = e.imputed_fraction;
		!("string" != typeof t || 0 === t.length || s.has(t) || "number" != typeof n || !Number.isInteger(n) || n <= 0) && qc(i) && 0 !== i.length && qc(a) && a.length === i.length && Gc(r) && r.length === i.length && Gc(l) && Uc(l, i.length) && Number.isInteger(c) && !(c < 0) && Zc(e.diary_onset_time) && Zc(e.diary_wake_time) && Zc(e.diary_in_bed_time) && Zc(e.diary_out_bed_time) && (null === g || "boolean" == typeof g) && qc(u) && Uc(u, i.length) && qc(d) && Uc(d, i.length) && qc(f) && Uc(f, i.length) && qc(m) && Uc(m, i.length) && Gc(h) && Uc(h, i.length) && (null === y || Bc(y)) && (null === w || !(!Bc(w) || w < 0 || w > 1)) || Tc(), Hc(e.sensor_nonwear), Jc(e.diary_naps, c), Lc(e.diary_nonwear);
		const _ = Wc(e.guider_targets), v = Vc(e.hdcza_window), b = _.get(p.HDCZA);
		(null === v && void 0 !== b || null !== v && (void 0 === b || null !== b.detector || b.onset !== v[0] || b.offset !== v[1])) && Tc(), s.add(t);
	}
	const r = n;
	return Oc(Pc(t), bc(r)) || Tc(), {
		difficulty: r,
		dates: s
	};
}
function Yc(e, t, n, i) {
	jc(t, ["config", "days"]) || Tc(), Oc(t.config, e.difficulty.config ?? null) || Tc();
	const a = t.days;
	Array.isArray(a) && a.length === e.difficulty.days.length || Tc();
	for (let o = 0; o < a.length; o += 1) {
		const t = a[o], n = e.difficulty.days[o];
		(null === t || "object" != typeof t || Array.isArray(t) || null === n || "object" != typeof n || Array.isArray(n)) && Tc();
		const i = t, s = n;
		jc(i, [
			"analysis_date",
			"epoch_length_seconds",
			"timestamps"
		]) && i.analysis_date === s.analysis_date && i.epoch_length_seconds === s.epoch_length_seconds && Oc(i.timestamps, s.timestamps) || Tc();
	}
	const s = Object.keys(n);
	(s.length !== e.dates.size || s.some((t) => !e.dates.has(t))) && Tc();
	const r = new Map(e.difficulty.days.map((e) => [e.analysis_date, e]));
	for (const [o, l] of Object.entries(n)) {
		(null === l || "object" != typeof l || Array.isArray(l)) && Tc();
		const e = l, t = Ic(e.canonicalResult);
		null !== t && t.canonicalResult.analysis_date === o && Oc(e, t) || Tc();
	}
	if (null !== i) {
		const t = Object.keys(i);
		(t.length !== e.dates.size || t.some((t) => !e.dates.has(t))) && Tc();
		for (const [e, n] of Object.entries(i)) {
			(null === n || "object" != typeof n || Array.isArray(n)) && Tc();
			const t = n, i = r.get(e);
			t.analysis_date === e && Number.isInteger(t.epoch_length_seconds) && t.epoch_length_seconds === i?.epoch_length_seconds || Tc();
		}
	}
}
async function Xc(e) {
	return Ec(function(e) {
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
async function Qc(e) {
	try {
		Cc(e.runtimeIdentity), null !== e.sourceContentHash && zc(e.sourceContentHash);
		const t = Rc(e.runtimeIdentity), n = await Fc(e.difficultyRequestWireJson, e.difficultyRequestSha256), i = await Fc(e.signalsRequestWireJson, e.signalsRequestSha256);
		Kc(e.difficultyRequestWireJson, e.signalsRequestWireJson);
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
			generationKey: await Xc(a)
		};
	} catch (t) {
		if (t instanceof xc) throw t;
		return Tc();
	}
}
async function eu(e) {
	return Ec(function(e) {
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
function tu(e, t) {
	void 0 !== t && (null !== t && zc(t), e !== t && Tc());
}
async function nu(e) {
	(!Number.isInteger(e.fileId) || e.fileId <= 0) && Tc(), void 0 !== e.id && (!Number.isInteger(e.id) || e.id <= 0) && Tc();
	for (const o of [
		e.generationKey,
		e.difficultyRequestSha256,
		e.signalsRequestSha256,
		e.projectionSha256,
		e.difficultyResultSha256,
		e.recordSha256
	]) zc(o);
	null !== e.signalsResultSha256 && zc(e.signalsResultSha256), null !== e.sourceContentHash && zc(e.sourceContentHash), "sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || Tc(), Cc(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || Tc(), await Fc(e.difficultyRequestWireJson, e.difficultyRequestSha256), await Fc(e.signalsRequestWireJson, e.signalsRequestSha256);
	const t = Kc(e.difficultyRequestWireJson, e.signalsRequestWireJson);
	Mc(e.createdAt), Mc(e.updatedAt), Date.parse(e.updatedAt) < Date.parse(e.createdAt) && Tc(), null === e.signalsByDate != (null === e.signalsResultSha256) && Tc();
	const n = Rc(e.projectionInput), i = Rc(e.difficultyByDate), a = null === e.signalsByDate ? null : Rc(e.signalsByDate);
	Yc(t, n, i, a);
	const s = {
		evidenceContractId: e.evidenceContractId,
		difficultyMethodId: e.difficultyMethodId,
		signalsMethodId: e.signalsMethodId,
		requestContractId: e.requestContractId,
		sourceContentHash: e.sourceContentHash,
		runtimeIdentity: Rc(e.runtimeIdentity),
		difficultyRequestWireJson: e.difficultyRequestWireJson,
		signalsRequestWireJson: e.signalsRequestWireJson,
		difficultyRequestSha256: e.difficultyRequestSha256,
		signalsRequestSha256: e.signalsRequestSha256
	};
	await Xc(s) !== e.generationKey && Tc(), await Ec(n) !== e.projectionSha256 && Tc(), await Ec(i) !== e.difficultyResultSha256 && Tc(), null !== a && await Ec(a) !== e.signalsResultSha256 && Tc();
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
	return await eu(r) !== e.recordSha256 && Tc(), r;
}
async function iu(e) {
	try {
		return await nu(e);
	} catch {
		throw new xc(!0);
	}
}
function au(e, t, n = !1) {
	if (!t) throw new xc(n);
	if (null !== e.sourceContentHash && t.sourceContentHash !== e.sourceContentHash) throw new xc(n);
}
async function su(e, t, n) {
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
async function ru(e, t, n = E()) {
	const [i, a] = await n.transaction("r", [n.files, n.complexityEvidence], async () => Promise.all([n.complexityEvidence.where("[fileId+generationKey]").equals([e, t]).first(), n.files.get(e)]));
	if (!i) return;
	const s = await iu(i);
	return au(s, a, !0), s;
}
function ou(e, t) {
	const n = [
		...Bn(e, pu, t),
		...Pn(e, pu),
		...jn(e, pu, t)
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
function lu(e, t) {
	const n = cu(e, t), i = Boolean(e.datetime_column), a = Boolean(e.date_column && e.time_column);
	return i || a || n.push({
		key: "timestamp",
		message: "Map Date/time, or map both Date and Time."
	}), e.mims_unit_column || n.push({
		key: "mims_unit_column",
		message: "Map a MIMS unit column."
	}), n;
}
function cu(e, t) {
	return [
		...Bn(e, pu, t),
		...Pn(e, pu),
		...jn(e, pu, t)
	];
}
const uu = [30, 60];
function du(e) {
	return uu.includes(e);
}
const pu = [
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
async function fu(e, t = b()) {
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
function mu(e) {
	const t = pt.getState(), n = [de(en(t, e).nonwearDetectorsCounts, t.showChoiNonwear), de(rn(t.nonwearDetectorsGgir, e), t.showChoiNonwear)];
	return n.filter((e, t) => n.findIndex((t) => Y(t) === Y(e)) === t);
}
function hu(e, t) {
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
function gu(e, t) {
	return [.../* @__PURE__ */ new Set([...e.availableDates, ...t])].sort();
}
function yu(e, t) {
	return e ? {
		detectors: [...e.detectors],
		any: Uint8Array.from(e.mask).buffer,
		weight: e.weight ? Float64Array.from(e.weight).buffer : null,
		grid: e.grid === t.timestamps ? "counts" : "ggir"
	} : null;
}
async function wu(e, { file: t, sets: n, capsense: i, db: a, signal: s }) {
	const r = n.filter((t) => !(Y(t) in (e.displayNonwear ?? {})));
	if (0 === r.length) return;
	const o = U(s), l = await he(e, Le, "navigation facts", gn(), o);
	if (!l) return;
	const c = le(t.sourceType, t.sourceProfileId), u = {};
	for (const [m, h] of Object.entries(l.nonwearMasksByDetector)) 0 === h.length || ae(m) || (u[m] = h);
	const d = {
		algorithmicNonwearMasks: u,
		timestamps: l.timestamps,
		ggirTimestamps: l.ggirTimestamps,
		sensorNonwearPeriods: "detach_nonwear" === c && l.detachNonwear ? hu(l.detachNonwear, l.timestamps) : i,
		deviceNonwearSource: c
	}, p = { ...e.displayNonwear }, f = await Promise.all(r.map((e) => (s?.throwIfAborted(), ue(d, e, o))));
	for (const [m, h] of r.entries()) p[Y(h)] = yu(f[m], d);
	await nt(e.fileId, e.date, p, {
		seriesRevision: t.seriesRevision ?? 0,
		nonwearBandGeneration: t.nonwearBandGeneration ?? 0
	}, a, s);
}
const _u = /* @__PURE__ */ new WeakMap();
function vu(e, t, n) {
	let i = _u.get(t);
	i || _u.set(t, i = /* @__PURE__ */ new Map());
	const a = i.get(e);
	if (a) return z(a, n);
	const s = async function(e, t, n) {
		n?.throwIfAborted();
		const i = await ot(e, t);
		if (!i || "incomplete" === i.ingestState) return;
		const a = await wt(e, t);
		let s = i.navigationFacts;
		(function(e, t) {
			const n = e?.navigationFacts;
			if (!e || 1 !== n?.version) return !1;
			const i = gu(e, t);
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
			const c = await Vn(n), u = await Gn(e, c, i), d = [...new Set([u.zone, u.reason ? c : null].filter((e) => Boolean(e)))], p = {};
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
		}(i, gu(i, a), t, n), n?.throwIfAborted(), await t.files.update(e, { navigationFacts: s }));
		const r = mu(i), o = r.map(Y), l = i.seriesRevision ?? 0;
		if (s?.bands?.seriesRevision === l && o.every((e) => s.bands.keys.includes(e))) return;
		const c = "gt3x_capsense" === le(i.sourceType, i.sourceProfileId) ? (await ze(e, t)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : [];
		for (const u of a) {
			n?.throwIfAborted();
			const a = await Ve(e, u, t);
			a && await wu(a, {
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
function bu(e, t) {
	for (const n of e) {
		const e = n.epochResolutions?.find((e) => e.category === t && !e.derivedFromResolutionId);
		if (e) return e.epochLengthSeconds;
	}
	return null;
}
function ku(e, t) {
	const n = "counts" === t ? e.timestamps : e.ggirTimestamps;
	return n ? Math.floor(n.byteLength / Float64Array.BYTES_PER_ELEMENT) : 0;
}
function Su(e) {
	return "number" != typeof e ? String(e) : (/* @__PURE__ */ new Date(1e3 * e)).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: !1,
		timeZone: "UTC"
	});
}
function Iu(e) {
	if ("object" != typeof e || null === e) return String(e).slice(0, 60);
	const t = e;
	return "onsetTimestamp" in t && "offsetTimestamp" in t ? `${Su(t.onsetTimestamp)}–${Su(t.offsetTimestamp)}` : "startTimestamp" in t && "endTimestamp" in t ? `${Su(t.startTimestamp)}–${Su(t.endTimestamp)}` : JSON.stringify(t).slice(0, 60);
}
function Au(e, t = "(unset)") {
	if (void 0 === e) return t;
	if (null === e) return t;
	const n = "string" == typeof e ? e : JSON.stringify(e);
	return n.length > 48 ? `${n.slice(0, 45)}…` : n;
}
function xu(e) {
	const t = e.rowCount, n = e.dayCount, i = [`${Au(e.subject, "export")} (${Au(e.format, "?")})`, Au(e.filename, "")].filter((e) => "" !== e), a = ["number" == typeof t ? `${t} rows` : null, "number" == typeof n ? `${n} day${1 === n ? "" : "s"}` : null].filter((e) => null !== e);
	return a.length > 0 ? `${i.join(" · ")} — ${a.join(", ")}` : i.join(" · ");
}
function Nu(e, t, n, i) {
	const a = n?.exportId;
	return "export_started" === t && "string" == typeof a && i.has(a) ? "" === e ? "outcome unknown" : `${e} · outcome unknown` : e;
}
function $u(e, t) {
	const n = F({
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
			return "onsetTimestamp" in i ? `${e} #${t}${n}: ${Su(i.onsetTimestamp)}–${Su(i.offsetTimestamp)}` : "startTimestamp" in i ? `${e} #${t}: ${Su(i.startTimestamp)}–${Su(i.endTimestamp)}` : `${e} #${t}${n}`;
		}
		case "sleep_period_split": return `sleep #${i.periodIndex ?? "?"} split at ${Su(i.at)}`;
		case "sleep_period_merged": return `sleep #${i.periodIndex ?? "?"} merged ${i.direction ?? "?"}`;
		case "marker_adjusted": {
			const e = i.updates ?? {}, t = i.category ?? "?", n = i.periodIndex ?? "?", a = [];
			return void 0 !== e.onsetTimestamp && a.push(`onset → ${Su(e.onsetTimestamp)}`), void 0 !== e.offsetTimestamp && a.push(`offset → ${Su(e.offsetTimestamp)}`), void 0 !== e.startTimestamp && a.push(`start → ${Su(e.startTimestamp)}`), void 0 !== e.endTimestamp && a.push(`end → ${Su(e.endTimestamp)}`), void 0 !== e.markerType && a.push(`type → ${e.markerType}`), `${t} #${n}: ${a.join(", ")}`;
		}
		case "marker_moved": {
			const e = i.before, t = i.after;
			if (!e || !t) return "drag completed";
			const n = Array.isArray(e.sleepMarkers) ? e.sleepMarkers : [], a = Array.isArray(t.sleepMarkers) ? t.sleepMarkers : [];
			for (let i = 0; i < Math.max(n.length, a.length); i++) {
				const e = n[i], t = a[i];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `sleep #${i}: ${Iu(e)} ⇒ ${Iu(t)}`;
			}
			const s = Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : [], r = Array.isArray(t.nonwearMarkers) ? t.nonwearMarkers : [];
			for (let i = 0; i < Math.max(s.length, r.length); i++) {
				const e = s[i], t = r[i];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `nonwear #${i}: ${Iu(e)} ⇒ ${Iu(t)}`;
			}
			return "drag completed (no visible change)";
		}
		case "marker_deleted": {
			const e = i.category ?? "?", t = i.periodIndex ?? "?", n = i.before;
			return n ? `${e} #${t}: was ${Iu(n)}` : `${e} #${t}`;
		}
		case "actiware_rest_edited": {
			const e = "string" == typeof i.edit ? i.edit : "?";
			return "add" === e ? `rest added: ${Iu(i.to)}` : "remove" === e ? `rest removed: was ${Iu(i.from)}` : `rest ${"move" === e ? "moved" : e}: ${Iu(i.from)} ⇒ ${Iu(i.to)}`;
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
			const e = Au(i.intent, "mutation"), t = Au(i.guard, "?"), n = i.disposition, a = "refused_by_store" === n ? "refused" : "applied_with_violation" === n ? "applied anyway" : Au(n, "");
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
				const e = Au(i.before, ""), t = Au(i.after, "");
				return "" === e ? `"${t}"` : `"${e}" → "${t}"`;
			}
			return i.text ? `"${String(i.text).slice(0, 60)}"` : i.notes ? `"${String(i.notes).slice(0, 60)}"` : `${i.length ?? "?"} chars`;
		case "settings_changed": return `${Au(i.scope, "?")} · ${Au(i.key, "?")}: ${Au(i.before)} → ${Au(i.after)}`;
		case "settings_reset": {
			const e = i.changed, t = Au(i.scope, "settings");
			if (!Array.isArray(e)) return `${t} reset to defaults`;
			if (0 === e.length) return `${t}: already at defaults`;
			const n = e.slice(0, 4).map((e) => Au(e, "?")).join(", "), a = e.length > 4 ? ", …" : "";
			return `${t}: ${String(e.length)} reset to default (${n}${a})`;
		}
		case "app_version_changed": return `${Au(i.before, "(first run)")} → ${Au(i.after, "?")}`;
		case "system_migration": return `${Au(i.subject, "schema")}: ${Au(i.before, "?")} → ${Au(i.after, "?")}`;
		case "data_exported": return xu(i);
		case "export_started": return `Started: ${xu(i)}`;
		case "export_cancelled": return `${Au(i.filename, "export")} — ${Au(i.reason, "cancelled")}`;
		case "preset_changed": {
			const e = Au(i.family, "preset"), t = Au(i.change, "changed"), n = Au(i.preset, "?"), a = i.before;
			return null == a ? `${e}: ${t} ${n}` : `${e}: ${t} ${n} (was ${Au(a)})`;
		}
		case "markers_synced": {
			const e = i.conflicts, t = i.errorCount;
			let n = `Pushed ${i.pushed ?? 0}, pulled ${i.pulled ?? 0}`;
			return "number" == typeof e && e > 0 && (n += `, ${e} conflict${1 === e ? "" : "s"}`), "number" == typeof t && t > 0 && (n += `, ${t} error${1 === t ? "" : "s"}`), n;
		}
		case "system_recalculation": return `Recalculated ${Au(i.subject, "derived data")}`;
		case "diary_staged": return `Staged ${i.staged ?? 0}, replaced ${i.replaced ?? 0}, skipped ${i.skipped ?? 0}`;
		case "diary_decision_recorded": return `Decided ${Au(i.ruleKind, "a rule")} → ${Au(i.outcome, "(no outcome)")} (${Au(i.scope, "unscoped")}, ${i.nights ?? 0} nights)`;
		case "diary_decision_state_saved": return `Saved decision state "${Au(i.restorePoint, "untitled")}" (${i.decisions ?? 0} decisions)`;
		case "diary_session_saved": {
			const e = Au(i.status, "saved"), t = Au(i.step, "an unknown step"), n = Au(i.sourceSha256Prefix, "an unnamed source");
			return "removed" === e ? `Removed the saved diary session for ${n}` : `Diary session ${n} saved as ${e} on ${t}`;
		}
		case "diary_decision_state_restored": return `Restored decision state "${Au(i.restorePoint, "untitled")}" (${i.reflagged ?? 0} reflagged, ${i.unflagged ?? 0} unflagged, ${i.nights ?? 0} nights)`;
		case "diary_decisions_reset": return `Reset ${i.decisions ?? 0} diary decisions across ${i.nights ?? 0} nights`;
		case "diary_attached": {
			const e = i.entryCount, t = i.matchBasis, n = ["number" == typeof e ? `${e} night${1 === e ? "" : "s"}` : null, "string" == typeof t && "" !== t ? `matched by ${t}` : null].filter((e) => null !== e).join(", ");
			return "" === n ? "Attached diary" : `Attached diary (${n})`;
		}
		case "diary_discarded": {
			const e = i.analysisDate;
			return null == e ? `Discarded ${Au(i.sourceKey, "diary")}` : `Discarded ${Au(i.sourceKey, "diary")} for ${Au(e, "?")}`;
		}
		case "diary_workspace_cleared": {
			const e = (e, t) => {
				const n = Number(i[e] ?? 0);
				return `${String(n)} ${t}${1 === n ? "" : "s"}`;
			};
			return `Cleared workspace diary (${e("staged", "staged night")}, ${e("occurrences", "response")})`;
		}
		case "diary_repaired": {
			const e = i.fields, t = Array.isArray(e) ? e.map((e) => Au(e, "?")).join(", ") : "";
			return "" === t ? `Repaired ${i.applied ?? 0} field${1 === i.applied ? "" : "s"}` : `Repaired ${i.applied ?? 0}: ${t}`;
		}
		case "diary_changed": {
			const e = i.fields, t = Au(i.change, "changed"), n = Array.isArray(e) ? e.map((e) => Au(e, "?")).join(", ") : "";
			return "" === n ? `Diary ${t}` : `Diary ${t}: ${n}`;
		}
		case "workspace_deleted": {
			const e = i.auditRowsDestroyed;
			return `${Au(i.displayName, "workspace")} deleted — ${i.auditRowsTotal ?? 0} audit rows, ${i.auditRowsReplicated ?? 0} replicated, ${e ?? 0} destroyed`;
		}
		case "audit_chain_reanchored": return `Restored ${i.restoredRows ?? 0} rows (restore ${String(i.restoreId ?? "?").slice(0, 8)})`;
		case "workspace_recovered": return `Recovered from backup ${Au(i.backupSha256, "?").slice(0, 8)} — ${Au(i.applied, "0")} changes put back, ${Au(i.skipped, "0")} skipped, ${Au(i.recordingsToReimport, "0")} recordings to import again`;
		case "access_changed": return `${Au(i.subject, "access")} · ${Au(i.scope, "?")}: ${Au(i.before)} → ${Au(i.after)}`;
		case "assignment_changed": {
			const e = i.fileCount, t = i.fileIds, n = "number" == typeof e ? e : Array.isArray(t) ? t.length : 0;
			return `${Au(i.change, "changed")} ${Au(i.subject, "assignment")} · ${Au(i.scope, "?")} (${n} file${1 === n ? "" : "s"})`;
		}
	}
	return Object.entries(i).slice(0, 5).map(([e, t]) => "number" == typeof t && e.toLowerCase().includes("timestamp") ? `${e}: ${Su(t)}` : "string" == typeof t && t.length > 50 ? `${e}: "${t.slice(0, 47)}..."` : Array.isArray(t) ? `${e}: [${t.length} items]` : "object" == typeof t && null !== t ? `${e}: {…}` : `${e}: ${JSON.stringify(t)}`).join(", ");
}
var Tu = a({
	GGIR_NIGHT_DIFFICULTY_NOT_RANKABLE: () => od,
	LocalDataSource: () => kd,
	backfillPlacementResults: () => Ad,
	refreshStoredFilePlacement: () => Sd,
	refreshStoredFilePlacements: () => Id,
	refreshStoredNightDifficulty: () => dd,
	storePhysicalActivityFileAnswers: () => pd
});
function zu(e) {
	return JSON.stringify(e.map((e) => ({
		start_timestamp: e.startTimestamp,
		end_timestamp: e.endTimestamp,
		marker_index: e.markerIndex
	})));
}
function Mu(e, t) {
	const n = (a = t, "mims_metrics" === (i = e ?? "generic") ? lu(a, s) : "ggir_part5_daysummary" === i ? function(e, t) {
		const n = cu(e, t);
		return e.date_column || e.datetime_column || n.push({
			key: "date_column",
			message: "Map a date/day column for the daily summary table."
		}), n;
	}(a, s) : ou(a, s));
	var i, a, s;
	if (0 !== n.length) throw new Error(function(e) {
		return `Column-mapped CSV settings are incomplete: ${e.map((e) => e.message).join(" ")} ${ai}`;
	}(n));
}
function Du(e) {
	const t = /* @__PURE__ */ new Map();
	for (const i of e) "auto_score" !== i.username || i.algorithm !== o.VAN_HEES_2015 || i.isInvalidNight || t.set(i.date, vt(t.get(i.date), i));
	const n = /* @__PURE__ */ new Map();
	for (const [i, a] of t) {
		const e = a.sleepMarkers.filter((e) => e.markerType === m.MAIN_SLEEP);
		if (1 !== e.length) continue;
		const t = e[0], s = t?.onsetTimestamp, r = t?.offsetTimestamp;
		"number" == typeof s && Number.isFinite(s) && "number" == typeof r && Number.isFinite(r) && r > s && n.set(i, [s, r]);
	}
	return n;
}
async function Ru(e, t) {
	const n = t.dailyGgirSummaries;
	if (!n) return /* @__PURE__ */ new Map();
	const i = await n.where("fileId").equals(e).toArray();
	return new Map(i.map((e) => [e.analysisDate, e]));
}
function Eu(e) {
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
function Cu(e, t, n, i) {
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
const Fu = "wasm-parallel";
function Ou(e) {
	const t = e.compiledFeatures;
	return {
		...e,
		compiledFeatures: t.includes(Fu) ? t.filter((e) => e !== Fu) : [...t, Fu]
	};
}
function Pu(e, t) {
	const n = e.compiledFeatures.filter((e) => e !== Fu), i = t.compiledFeatures.filter((e) => e !== Fu);
	return e.contractVersion === t.contractVersion && e.crateVersion === t.crateVersion && e.sourceRevision === t.sourceRevision && e.target === t.target && e.semanticProfile === t.semanticProfile && e.profileProofStatus === t.profileProofStatus && e.temporalBasis === t.temporalBasis && e.artifactSha256 === t.artifactSha256 && n.length === i.length && n.every((e, t) => e === i[t]);
}
async function ju(e, t, n, i, a = /* @__PURE__ */ new Map()) {
	const s = [];
	for (const l of [t, await te(t, void 0, i)]) {
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
function Bu(e, t) {
	const n = new Set(t.map((e) => e.analysis_date)), i = Object.keys(e);
	return n.size === t.length && i.length === n.size && i.every((e) => n.has(e));
}
function Zu(e) {
	const t = [...e.entries()].sort(([e], [t]) => e.localeCompare(t));
	let n = null, i = null;
	for (const [, r] of t) try {
		const e = Te(r).timestamps;
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
			const t = Te(e).timestamps;
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
async function qu(e, t, n, i, a, s, r) {
	const o = [], l = [];
	for (const c of new Set(t)) {
		let t = null;
		for (const o of e) if (o && 0 !== Te(o).timestamps.length && (await ta(o, c, n, a, void 0, s, r), t = Mn(c, vn(o, n), i), null !== t)) break;
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
function Gu({ available: e, dropped: t }) {
	return 0 === e.length && t.length > 0 ? t.map((e) => e.reason).join("; ") : null;
}
function Uu(e) {
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
function Hu(e) {
	return 1 === e.length && zn(e[0]);
}
function Ju(e, t, n) {
	const i = e?.byDate[t];
	return i ? "refused" === i.kind ? i.reason : null : function(e) {
		const t = e?.sleepPeriodDetectionConfig?.nonwear_detector_unavailable;
		return "string" == typeof t ? t : null;
	}(n);
}
async function Lu(e, t) {
	if (!("placementResults" in e)) return;
	const n = await e.placementResults.get(t);
	return 2 === n?.policy ? n : void 0;
}
function Wu(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let i = 0; i < t; i += 1) {
		const t = e[i];
		if (null == t || !Number.isFinite(t)) return [];
		n[i] = t;
	}
	return n;
}
function Vu(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let i = 0; i < t; i += 1) {
		const t = e[i];
		if (0 !== t && 1 !== t) return [];
		n[i] = t;
	}
	return n;
}
function Ku(e, t, n) {
	if (t.length !== e.length || n.length !== e.length) return [];
	const i = new Array(e.length);
	for (let a = 0; a < e.length; a += 1) {
		const s = t[a], r = e[a], o = n[a];
		if (null == s || null == r || s !== r || null == o || !Number.isFinite(o)) return [];
		i[a] = o;
	}
	return i;
}
function Yu(e, t, n, i, a, s) {
	const r = [], o = null == t ? null : s.resolveInstant(t, e, T.evening_onset, a), l = null == n ? null : s.resolveInstant(n, e, T.morning_offset, a);
	return null == o && null == l || r.push({
		guider: p.DIARY,
		detector: null,
		onset_ts: o,
		offset_ts: l
	}), null != i && r.push({
		guider: p.HDCZA,
		detector: null,
		onset_ts: i[0],
		offset_ts: i[1]
	}), r;
}
function Xu(e) {
	return `complexity-evidence:${e.generationKey}`;
}
function Qu(e) {
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
function ed(e) {
	return e.projectionInput;
}
function td(e) {
	return e.difficultyByDate;
}
function nd(e) {
	return e.signalsByDate;
}
function id(e, t, n, i) {
	return {
		has_markers: d(e),
		has_nonwear: g(e),
		is_invalid_night: e?.isInvalidNight ?? !1,
		needs_consensus: e?.needsConsensus ?? !1,
		auto_flagged: t,
		has_auto_score: (n?.sleepMarkers?.length ?? 0) > 0 || !0 === n?.isInvalidNight,
		auto_score_unavailable_reason: i
	};
}
async function ad(e, t, n, i) {
	const [a, s] = await Promise.all([i.markers.where("[fileId+date+username]").between([
		e,
		t,
		""
	], [
		e,
		t,
		"￿"
	], !0, !0).toArray(), Lu(i, e)]), r = /* @__PURE__ */ new Map();
	for (const c of a) r.set(c.username, vt(r.get(c.username), c));
	const o = r.size >= 2 && (await fu([{
		usersForDate: r,
		kind: "sleep"
	}, {
		usersForDate: r,
		kind: "nonwear"
	}])).some((e) => e.disagree), l = r.get(zt);
	return id(r.get(n), o, l, Ju(s, t, l));
}
function sd(e) {
	return JSON.stringify((e ?? []).map((e) => [e.startTimestamp ?? null, e.endTimestamp ?? null]));
}
function rd(e) {
	const t = e ? null : pt.getState(), n = e?.nightStartHour ?? t?.nightStartHour ?? u.night_start_hour, i = e?.nightEndHour ?? t?.nightEndHour ?? u.night_end_hour, a = parseInt(n.split(":")[0] ?? "21", 10), s = parseInt(i.split(":")[0] ?? "9", 10);
	return {
		nightStartHour: Number.isNaN(a) ? 21 : a,
		nightEndHour: Number.isNaN(s) ? 9 : s
	};
}
const od = "GGIR nights are not ranked by difficulty: the difficulty core reads 60 s activity counts and sleep scores, and a GGIR folder holds 5 s ENMO, anglez and SIB only.", ld = /* @__PURE__ */ new Set(), cd = /* @__PURE__ */ new WeakMap();
function ud(e, t, n, i) {
	const a = cd.get(e) ?? /* @__PURE__ */ new Map();
	cd.set(e, a);
	const s = a.get(t);
	if (s) {
		let r;
		return {
			run: s.run.catch((o) => {
				if (!s.signal?.aborted || n?.aborted) throw o;
				return a.get(t) === s && a.delete(t), r = ud(e, t, n, i), r.run;
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
function dd(e, t, n, i) {
	return q({
		kind: A.NIGHT_DIFFICULTY,
		key: `${A.NIGHT_DIFFICULTY}:${String(e)}`,
		label: "Update night difficulty",
		workspaceId: t.name,
		signal: i,
		rerun: !0,
		run: async (i) => {
			const a = new kd();
			try {
				if (i.signal.throwIfAborted(), i.progress(0, 2), E() !== t) return;
				const s = await ot(e, t);
				if (!s || "incomplete" === s.ingestState) return;
				await vu(e, t, i.signal), i.signal.throwIfAborted(), i.progress(1, 2);
				const r = s.nightDifficulty, o = n ?? (r ? {
					nightStartHour: `${String(r.nightStartHour).padStart(2, "0")}:00`,
					nightEndHour: `${String(r.nightEndHour).padStart(2, "0")}:00`
				} : void 0);
				await a.computeDatesStatus(e, s.availableDates, pt.getState().username || "anonymous", o, i.signal), i.progress(2, 2);
			} finally {
				a.dispose();
			}
		}
	}).catch((e) => {
		e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] Stored night difficulty could not be refreshed.", e);
	});
}
function pd(e, t, n) {
	return q({
		kind: A.PHYSICAL_ACTIVITY,
		key: `${A.PHYSICAL_ACTIVITY}:${String(e)}`,
		label: "Store activity answers",
		workspaceId: t.name,
		signal: n,
		rerun: !0,
		run: (n) => mt(async (i) => {
			const [{ computeLocalPhysicalActivityAnalysis: a, physicalActivityStoreAnalysisOptions: s }, { createPhysicalActivityWorkspaceRepository: r, loadPhysicalActivityWorkspaceDays: o }] = await Promise.all([import("./local-physical-activity-analysis-8p0jkUVY.js"), import("./physical-activity-workspace-days-DWhRMZgl.js")]);
			if (n.signal.throwIfAborted(), n.progress(0, 2), E() !== t) return;
			const l = s(pt.getState());
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
Et((e, t, n) => {
	dd(e, t, void 0, n);
});
const fd = /* @__PURE__ */ new WeakMap();
function md(e, t, n, i, a) {
	a?.throwIfAborted();
	let s = fd.get(e);
	return s || (s = /* @__PURE__ */ new Map(), fd.set(e, s)), s.set(t, {
		inputs: n,
		byDate: i
	}), i;
}
const hd = /* @__PURE__ */ new WeakMap();
function gd(e, t) {
	let n = hd.get(e);
	n || hd.set(e, n = /* @__PURE__ */ new Map());
	const i = De(t);
	let a = n.get(i);
	return a || n.set(i, a = Re(e.values(), t)), a;
}
const yd = "An earlier audit record is still being written. The rest interval was not changed; try again.";
function wd(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.date);
		e && "auto_score" !== e.username && "auto_score" === n.username || t.set(n.date, "auto_score" === e?.username && "auto_score" !== n.username ? n : vt(e, n));
	}
	return [...t].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort();
}
async function _d(e, t, n) {
	try {
		const a = await t.actiwareFileData.get(e);
		if (!a?.actiwareSleepWake) return;
		const s = (await t.actiwareStatisticsInputs.get(e))?.input, r = (await t.files.get(e))?.seriesRevision ?? 0, o = wd(await t.markers.where("fileId").equals(e).toArray());
		let l = null;
		try {
			l = await Ln(a.actiwareIntervals, s, o, (e) => U(n).actiwareIntervalStatistics(e));
		} catch (i) {
			n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), tt("error", "Actiware statistics recalculation failed", ye(i));
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
			const c = wd(await t.markers.where("fileId").equals(e).toArray());
			JSON.stringify(c) === JSON.stringify(o) && (await t.actiwareFileData.update(e, null === l ? { actiwareStatisticsNeedsRecompute: !0 } : {
				actiwareStatistics: l,
				actiwareStatisticsNeedsRecompute: !1
			}), await et(t, [e]));
		}, n);
	} catch (i) {
		n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), tt("error", "Actiware statistics recalculation failed", ye(i));
		try {
			await ge(t, [t.actiwareFileData, t.files], async () => {
				await t.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), await et(t, [e]);
			}, n);
		} catch {
			throw i instanceof Error ? i : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
		}
	}
}
async function vd(e, t, n, i, a) {
	const s = a ? a.file : await ot(e, n);
	if (tn(s)) {
		if (sn(s, pt.getState().analysisParadigm)) return _d(e, n, i);
		try {
			const a = await n.actiwareFileData.get(e);
			if (!a?.actiwareSleepWake) return;
			const s = (await n.actiwareStatisticsInputs.get(e))?.input, o = (await n.files.get(e))?.seriesRevision ?? 0, l = await n.markers.where("fileId").equals(e).toArray(), c = !0 === a.actiwareStatisticsNeedsRecompute, u = (e, t) => JSON.stringify(e.filter((e) => e.date === t).map((e) => [
				e.id,
				e.contentHash,
				e.lastModifiedAt,
				e.sleepMarkers
			])), d = (e) => JSON.stringify(e.map((e) => [
				e.markerType,
				e.onsetTimestamp,
				e.offsetTimestamp
			])), p = /* @__PURE__ */ new Map();
			for (const e of l) {
				if (!c && !t.has(e.date)) continue;
				const n = p.get(e.date);
				n && "auto_score" !== n.username && "auto_score" === e.username || p.set(e.date, "auto_score" === n?.username && "auto_score" !== e.username ? e : vt(n, e));
			}
			const m = c ? new Map([...[...p].map(([e, t]) => [e, t.sleepMarkers]), ...t]) : t, h = new Map([...m].flatMap(([e, t]) => {
				const n = p.get(e);
				return n && d(n.sleepMarkers) !== d(t) ? [] : [[e, {
					sleepMarkers: [...t],
					isInvalidNight: n?.isInvalidNight ?? !1
				}]];
			}));
			if (0 === h.size) return;
			const g = new Map([...h.keys()].map((e) => [e, u(l, e)]));
			let y = null;
			try {
				y = await Yn({
					file: a,
					statisticsInput: s
				}, h, (e) => U(i).actiwareIntervalStatistics(e), i);
			} catch (r) {
				i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), tt("error", "Actiware statistics recalculation failed", ye(r));
			}
			await ge(n, [
				n.actiwareFileData,
				n.actiwareStatisticsInputs,
				n.files,
				n.markers
			], async () => {
				const t = await n.actiwareFileData.get(e), r = (await n.actiwareStatisticsInputs.get(e))?.input;
				if (!t || ((await n.files.get(e))?.seriesRevision ?? 0) !== o) return;
				if (JSON.stringify(r) !== JSON.stringify(s) || JSON.stringify(t.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
				const l = await n.markers.where("fileId").equals(e).toArray(), d = new Map([...h].filter(([e]) => u(l, e) === g.get(e)));
				if (0 === d.size) return;
				if (null === y) return await n.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), void await et(n, [e]);
				const p = Wn(t, y), w = p.length > 0 ? await f.waitFor(Zn(p, U(i))) : void 0, _ = Qn(t, y, d.keys(), w);
				await n.actiwareFileData.update(e, {
					actiwareStatistics: _,
					actiwareStatisticsNeedsRecompute: !0 === t.actiwareStatisticsNeedsRecompute && !(c && d.size === m.size)
				}), await et(n, [e]);
			}, i);
		} catch (r) {
			i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), tt("error", "Actiware statistics recalculation failed", ye(r));
			try {
				await ge(n, [n.actiwareFileData, n.files], async () => {
					await n.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), await et(n, [e]);
				}, i);
			} catch {
				throw r instanceof Error ? r : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
			}
		}
	}
}
function bd(e) {
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
var kd = class e {
	sourceKey = "local";
	disposed = !1;
	operationProcessingOptions;
	constructor(e) {
		this.operationProcessingOptions = e;
	}
	fileBatches = /* @__PURE__ */ new Map();
	beginFileBatch(e, t = E(), n) {
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
				await vd(e, a.actiwareNights, a.db, a.signal);
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
		return n?.days ? n.diaries ??= ct(e, t) : ct(e, t);
	}
	async placementDiary(e, t, n, i = this.fileBatch(e, n)) {
		return i?.days ? (await this.placementDiaries(e, n, i)).find((e) => e.analysisDate === t) ?? null : ht(e, t, n);
	}
	async placementMarker(e, t, n, i, a = this.fileBatch(e, i)) {
		if (!a?.days) return At(e, t, zt, n, void 0, i);
		const s = await (a.markers ??= i.markers.where("fileId").equals(e).toArray()), r = xt(s, {
			date: t,
			username: zt
		}, n);
		return r ? $t(r) : void 0;
	}
	async placementDay(e, t, n, i = this.fileBatch(e, n)) {
		return i?.days ? i.days.get(t) : Ve(e, t, n, i?.activityDayMemo);
	}
	async scorerVerdict(e, t, n, i, a = this.fileBatch(t, e)) {
		return a?.days ? gd(a.days, n) : a?.activityDayMemo ? gd(await _t(t, e, a.activityDayMemo), n) : (await st(t, e, i))(n);
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
		const n = E(), i = await _t(e, n, this.fileBatch(e, n)?.activityDayMemo), a = gd(i, t), s = [];
		for (const [r, o] of [...i].sort(([e], [t]) => e.localeCompare(t))) {
			const e = await he(o, a, `loadFileDaySeries ${r}`, gn());
			e && s.push(e);
		}
		return s;
	}
	async loadActivityData(e, t, n) {
		const i = E();
		let a, s = await ot(e, i), r = null;
		if (Qt(s)) {
			const { ensureSavedGgirNonwear: t } = await import("./ggir-import-Du-DE8Ap.js").then((e) => e.t);
			try {
				r = await t(e, i, void 0, !1);
			} catch {
				a = "Saved GGIR nonwear recovery failed; recovered nonwear is unavailable.";
			}
			s = await ot(e, i);
		}
		const o = s?.navigationFacts;
		o?.window[t] || vu(e, i);
		const l = await ce(e, t, i, void 0, o);
		if (!l) throw new Error(`No activity data found for fileId=${e} date=${t}. File may not be processed yet.`);
		const c = await this.scorerVerdict(i, e, n?.algorithm, { file: s }), u = await he(l, c, `loadActivityData ${t}`, gn());
		if (!u) throw new Error(`Activity data for fileId=${e} date=${t} is corrupt; please reprocess.`);
		const d = await te(t, o), p = 48 === n?.viewHours ? [d, await te(d, o)] : [d], f = await Promise.all(p.map((t) => Ve(e, t, i, this.fileBatch(e, i)?.activityDayMemo))), m = [l];
		for (const S of f) {
			if (!S) break;
			m.push(S);
			const e = await he(S, c, "loadActivityData next-day", gn());
			if (!e) throw new Error("Next-day activity data is corrupt; please reprocess.");
			const t = u.timestamps.length, n = e.timestamps.length;
			Q(u.timestamps, e.timestamps), Q(u.axisY, e.axisY), Q(u.vectorMagnitude, e.vectorMagnitude), (u.axisX.length > 0 || e.axisX.length > 0) && (u.axisX.length < t && (u.axisX = new Array(t).fill(0)), Q(u.axisX, e.axisX.length > 0 ? e.axisX : new Array(n).fill(0))), (u.axisZ.length > 0 || e.axisZ.length > 0) && (u.axisZ.length < t && (u.axisZ = new Array(t).fill(0)), Q(u.axisZ, e.axisZ.length > 0 ? e.axisZ : new Array(n).fill(0))), (u.temperature.length > 0 || e.temperature.length > 0) && (u.temperature.length < t && (u.temperature = new Array(t).fill(NaN)), Q(u.temperature, e.temperature.length > 0 ? e.temperature : new Array(n).fill(NaN))), (u.eventMarkers.length > 0 || e.eventMarkers.length > 0) && (u.eventMarkers.length < t && (u.eventMarkers = new Array(t).fill(0)), Q(u.eventMarkers, e.eventMarkers.length > 0 ? e.eventMarkers : new Array(n).fill(0))), Q(u.eventMarkerTimestamps, e.eventMarkerTimestamps), (u.lux.length > 0 || e.lux.length > 0) && (u.lux.length < t && (u.lux = new Array(t).fill(NaN)), Q(u.lux, e.lux.length > 0 ? e.lux : new Array(n).fill(NaN))), (u.sleepScores.length > 0 || e.sleepScores.length > 0) && (u.sleepScores.length < t && (u.sleepScores = new Array(t).fill(0)), Q(u.sleepScores, e.sleepScores.length > 0 ? e.sleepScores : new Array(n).fill(0))), (u.sleepScoreGaps.length > 0 || e.sleepScoreGaps.length > 0) && (u.sleepScoreGaps.length < t && (u.sleepScoreGaps = new Array(t).fill(0)), Q(u.sleepScoreGaps, e.sleepScoreGaps.length > 0 ? e.sleepScoreGaps : new Array(n).fill(0))), (u.lstmTimestamps30s.length > 0 || e.lstmTimestamps30s.length > 0) && (u.lstmTimestamps30s = W(u.lstmTimestamps30s, e.lstmTimestamps30s), u.lstmSleepWake30s = me(u.lstmSleepWake30s, e.lstmSleepWake30s)), pe(u, e, t, n), (u.ggirTimestamps.length > 0 || e.ggirTimestamps.length > 0) && (u.ggirSib = ee(u.ggirTimestamps, u.ggirSib, e.ggirTimestamps, e.ggirSib), u.ggirTimestamps = W(u.ggirTimestamps, e.ggirTimestamps), u.ggirEnmo = W(u.ggirEnmo, e.ggirEnmo), u.ggirAnglez = W(u.ggirAnglez, e.ggirAnglez));
		}
		u.ggirSib = fe(u.ggirTimestamps, u.ggirSib);
		const { start: h, end: g } = await Un(t, 48 === n?.viewHours ? 48 : void 0, o), y = le(s?.sourceType, s?.sourceProfileId);
		let w = [];
		"gt3x_capsense" === y || "actiware_off_wrist" === y ? w = (await Ee(e, h, g, i)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : "detach_nonwear" === y && u.detachNonwear && (w = hu(u.detachNonwear, u.timestamps));
		const _ = {};
		for (const [S, I] of Object.entries(u.nonwearMasksByDetector)) 0 !== I.length && (ae(S) || (_[S] = I));
		const v = m.flatMap((e) => e.ggirTimestamps?.byteLength ? [e.ggirInvalid] : []);
		if (v.length > 0 && v.every((e) => void 0 !== e)) {
			const e = v.flatMap((e) => Array.from(new Uint8Array(e)));
			e.length === u.ggirTimestamps.length && (_[S.ggir_part2_invalid] = e);
		}
		ut(u.timestamps, bu(m, "count_sleep_wake")), ut(u.ggirTimestamps, bu(m, "ggir_sleep_period"));
		const b = function(e, t, n, i) {
			const a = {}, s = e.filter((e) => ku(e, "counts") > 0 || ku(e, "ggir") > 0);
			for (const r of mu(i)) {
				const e = Y(r);
				if (!s.every((t) => t.displayNonwear && e in t.displayNonwear)) continue;
				const i = s.map((t) => t.displayNonwear[e] ?? null), o = i.filter((e) => null !== e), l = o[0]?.grid;
				if (!l) {
					a[e] = null;
					continue;
				}
				if (o.some((e) => e.grid !== l)) continue;
				const c = o.some((e) => null !== e.weight), u = [], d = [];
				if (s.forEach((e, t) => {
					const n = i[t], a = n ? new Uint8Array(n.any) : new Uint8Array(ku(e, l));
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
		Object.keys(b).length < mu(s ?? null).length && vu(e, i);
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
			...n?.algorithm && !ie(n.algorithm) && 0 === u.sleepScores.length && u.timestamps.length > 0 ? { scorerMissingReason: "stale" === c.status ? c.reason : X(n.algorithm, {
				sourceProfileId: s?.sourceProfileId,
				actiwareSleepWake: (await gt(e, i))?.actiwareSleepWake
			}) } : {},
			lstmTimestamps30s: u.lstmTimestamps30s,
			lstmSleepWake30s: u.lstmSleepWake30s,
			nonwearResults: u.nonwearResults,
			nonwearResultsChoi2011: u.nonwearResultsChoi2011,
			vanHeesNonwear: u.vanHeesNonwear,
			algorithmicNonwearMasks: _,
			nonwearBands: b,
			...r ? { nonwearSourceLabels: { [S.ggir_saved]: r } } : {},
			...a ? { savedNonwearMissingReason: a } : {},
			epochResolutions: k,
			viewStart: h,
			viewEnd: g,
			sensorNonwearPeriods: w,
			deviceNonwearSource: y
		};
	}
	async loadMarkers(e, t, n, i, a, s) {
		const r = s ?? E(), o = await At(e, t, n, i, a, r);
		return o ? bd(o) : null;
	}
	async saveActiwareRestEdit(e, t, n, i = E(), a) {
		const s = await i.actiwareFileData.get(e), r = (await i.actiwareStatisticsInputs.get(e))?.input, o = s?.actiwareSleepWake;
		if (!o || !r) throw new ei("This recording has no Actiware analysis settings, so its rest intervals cannot be edited.");
		const l = U(a), c = s?.actiwareIntervals ?? [], u = await Hn(c, t, n, {
			epochs: r.epochs,
			params: o.params,
			grid: {
				startTimestamp: o.startTimestamp,
				epochSeconds: o.epochSeconds
			},
			core: l
		}), d = wd(await i.markers.where("fileId").equals(e).toArray()), p = await Ln(u, r, d, (e) => l.actiwareIntervalStatistics(e)).catch(() => null), { username: f, selectedStudyId: m } = pt.getState(), h = cn.captureWorkspaceBinding(i, {
			username: f,
			studyId: m
		});
		if (!await cn.settleWritesForDb(i, h)) throw new ei(yd);
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
			if (JSON.stringify(s?.actiwareIntervals ?? []) !== JSON.stringify(c)) throw new ei("That rest interval changed since it was shown; reload the night.");
			if (g = null === p || JSON.stringify(wd(await i.markers.where("fileId").equals(e).toArray())) !== JSON.stringify(d), await i.actiwareFileData.update(e, g ? {
				actiwareIntervals: u,
				actiwareStatisticsNeedsRecompute: !0
			} : {
				actiwareIntervals: u,
				actiwareStatistics: p ?? [],
				actiwareStatisticsNeedsRecompute: !1
			}), await i.placementResults.delete(e), await Ct([e], i, a), await et(i, [e]), !await cn.recordFileEventDurably({
				fileId: e,
				analysisDate: t,
				action: C.ACTIWARE_REST_EDITED,
				payload: {
					edit: n.kind,
					...Kn(c, u)
				}
			}, h)) throw new ei(yd);
		}, a), g && await _d(e, i, a), ti(u, t, d.includes(t));
	}
	async saveMarkers(e, t, n, i, a, s, r, o, l) {
		const c = o ?? E(), u = pt.getState(), d = ni(c, {
			username: n,
			studyId: u.selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, l), p = r?.signal ?? this.fileBatch(e, c)?.signal;
		let f, m = null, h = null, g = !1, y = r?.sleepPeriodDetection ?? u.sleepPeriodDetection;
		const w = await Mt({
			fileId: e,
			date: t,
			username: n,
			algorithm: a ?? null,
			detectionRule: s ?? null,
			signal: p
		}, c, async (o) => {
			const l = "function" == typeof i ? await i(o ? bd(o) : null) : {
				data: i,
				settings: r
			};
			if (!l) return null;
			m = l.data;
			const d = l.settings ?? r, w = f = await ot(e, c);
			sn(w, u.analysisParadigm) && (m = {
				...m,
				sleepMarkers: Jn(m.sleepMarkers, (await gt(e, c))?.actiwareIntervals, t, m.isInvalidNight ?? o?.isInvalidNight ?? !1)
			}), y = Pt({
				algorithm: a ?? "",
				sleepPeriodDetection: d?.sleepPeriodDetection ?? u.sleepPeriodDetection
			});
			const _ = y ? qt(y) : null, v = void 0 === d?.periodGuider ? en(u, w) : null, b = d?.periodGuider ?? v?.periodGuider, k = d?.periodGuider ?? (_ && !0 !== v?.placementFromSource ? Yt(Bt(_)) : v?.periodGuider), S = a ? I(a) : null, A = S ? x(S) : null, N = await At(e, t, n, a ?? null, s ?? null, c);
			g = !N || N.algorithm !== (a ?? null) || N.detectionRule !== (s ?? null) || JSON.stringify(N.sleepMarkers) !== JSON.stringify(m.sleepMarkers) || void 0 !== m.isInvalidNight && m.isInvalidNight !== N.isInvalidNight, h = void 0 !== m.nonwearMarkers && "auto_score" !== n ? sd(N?.nonwearMarkers) : null;
			let $ = m.sleepPeriodDetectionConfig ?? null;
			if (null === $) {
				const n = await ht(e, t, c);
				$ = Zt({
					algorithm: a ?? null,
					periodGuider: ra(0, b, y),
					sleepPeriodDetection: y,
					diaryOnsetTime: xe(n),
					diaryWakeTime: Be(n)
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
					sleepPeriodDetectionConfig: $,
					algorithmVersion: A,
					...void 0 !== d?.expected ? { expected: d.expected } : {},
					...void 0 !== d?.guardHashOnly ? { guardHashOnly: d.guardHashOnly } : {}
				}
			};
		}, null === d ? null : {
			...d,
			sleepPeriodDetection: d.sleepPeriodDetection ?? y
		});
		if (!w?.record || !m) return null;
		const _ = m, v = bd(w.record), b = tn(f), k = g || !b ? void 0 : await c.actiwareFileData.get(e);
		if (b && (g || k?.actiwareStatisticsNeedsRecompute || k?.actiwareSleepWake && !k.actiwareStatistics?.length)) {
			const n = this.fileBatch(e, c);
			n ? n.actiwareNights.set(t, _.sleepMarkers) : await vd(e, /* @__PURE__ */ new Map([[t, _.sleepMarkers]]), c, p, { file: f }).catch((e) => {
				if (!p?.aborted) throw e;
			});
		}
		if (p?.aborted) return v;
		Xn(e, n, c, p), null !== h && h !== sd(_.nonwearMarkers) && dd(e, c, void 0, p), g && At(e, t, n, a ?? null, s ?? null, c).then(async (t) => {
			if (!t) return;
			const { storeNightPeriodMetrics: n } = await import("./local-export-shard-worker-BTR6svpv.js").then((e) => e.w);
			return n(t, await this.scorerVerdict(c, e, t.algorithm), c, p);
		}).catch(() => {
			console.warn("[local-analysis] period metrics could not be stored with the saved night");
		});
		try {
			if (E() !== c) return v;
		} catch {
			return v;
		}
		const S = R();
		if (!S.capabilities.tauri) return v;
		try {
			const [i, r] = await Promise.all([ot(e, c), At(e, t, n, a ?? null, s ?? null, c)]);
			if (!i?.fileHash || !r?.contentHash) return v;
			await S.workspace.saveMarkers({
				fileHash: i.fileHash,
				date: t,
				username: n,
				sleepMarkers: (A = _.sleepMarkers, JSON.stringify(A.map((e) => ({
					onset_timestamp: e.onsetTimestamp,
					offset_timestamp: e.offsetTimestamp,
					marker_index: e.markerIndex,
					marker_type: e.markerType
				})))),
				nonwearMarkers: zu(r.nonwearMarkers),
				isInvalidNight: r.isInvalidNight,
				notes: _.notes,
				contentHash: r.contentHash
			});
		} catch {
			console.warn("[platform] native marker mirror failed for the active local selection");
		}
		var A;
		return v;
	}
	async listFiles() {
		const e = E();
		return (await Pe(e)).map((e) => {
			const t = e.id ?? 0, n = c(e);
			return {
				id: t,
				filename: e.filename,
				source: "local",
				available_dates: e.availableDates,
				participant_id: e.participantId ?? null,
				source_type: n,
				source_profile_id: e.sourceProfileId ?? null,
				...void 0 !== e.ggirBundleRevision ? { ggir_bundle_revision: e.ggirBundleRevision } : {},
				...e.ggirNonwearDetector ? { ggir_nonwear_detector: e.ggirNonwearDetector } : {},
				views: w(t, n, /* @__PURE__ */ new Set(), e.epochLengthSeconds),
				count_epoch_seconds: e.epochLengthSeconds
			};
		});
	}
	async listDates(e) {
		const t = E();
		return (await ot(e, t))?.availableDates ?? wt(e, t);
	}
	async getDiaryEntry(e, t) {
		const n = E(), i = await ht(e, t, n);
		return i ? $e(i, await je(e, n)) : null;
	}
	async listDiaryEntries(e) {
		const t = E(), n = await ct(e, t);
		if (0 === n.length) return n;
		const i = await je(e, t);
		return null === i ? n : Me(n, i);
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
	async readPlacementFileContext(e, t, n, i, a, r, o, l, c, u, d, p) {
		const f = U(d), [m, h, g] = await Promise.all([
			p?.days ? [...p.days.keys()].sort() : wt(e, r),
			this.placementDiaries(e, r, p),
			Hu(o) ? Se(e, r) : He(e, r)
		]), y = await Me(h, a, f), w = new Map(y.map((e) => [e.analysisDate, e])), _ = [], v = m.filter((e) => e !== t), b = await Promise.all(v.map((t) => this.placementDay(e, t, r, p)));
		for (const [k, S] of v.entries()) {
			const e = b[k];
			if (!e) continue;
			for (const n of o) await ta(e, n, u, r, f, d, p?.activityDayMemo);
			const t = await he(e, i, `autoScore context ${S}`, u, f);
			if (!t || 0 === t.timestamps.length || 0 === t.sleepScores.length) continue;
			const a = w.get(S), m = t.timestamps[0] ?? 0, h = t.timestamps[t.timestamps.length - 1] ?? m, y = await dt(t.timestamps, s(n), f), v = Uu(kn(await An(o, t.nonwearMasksByDetector, {
				offPeriods: l,
				source: c
			}, {
				timestampsSec: t.timestamps,
				epochLenSec: y
			}, f)));
			_.push({
				analysisDate: S,
				epochLengthSeconds: y,
				timestamps: t.timestamps,
				activityCounts: t.axisY,
				sleepScores: t.sleepScores,
				choiNonwear: v.choiNonwear,
				...v.nonwearWeight ? { nonwearWeight: v.nonwearWeight } : {},
				...v.nonwearMemberFlags ? { nonwearMemberFlags: v.nonwearMemberFlags } : {},
				sensorNonwear: g.filter((e) => e.startTimestamp <= h && e.endTimestamp >= m),
				diaryBedTime: Je(a),
				diaryOnsetTime: xe(a),
				diaryWakeTime: Be(a),
				diaryNaps: a ? _e(a) : null,
				diaryNonwear: a ? rt(a) : null
			});
		}
		return {
			contextDays: _,
			deviceOffNonwear: g
		};
	}
	async autoScore(e, t, n, i) {
		const a = i ?? E();
		if (this.fileBatch(e, a)) return this.autoScoreNight(e, t, n, li, a);
		const s = {}, r = await _t(e, a, s), o = {
			db: a,
			signal: n.signal,
			depth: 0,
			actiwareNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map(),
			activityDayMemo: s,
			span: Promise.resolve(Zu(r))
		};
		return this.autoScoreNight(e, t, n, li, a, void 0, void 0, void 0, o);
	}
	async autoScoreFile(e, t, n = !0, i = E(), a) {
		if (D(i.name)) return /* @__PURE__ */ new Map();
		const s = await this.filePlacementState(e, t, i);
		if (!s) return /* @__PURE__ */ new Map();
		const { file: r, inputs: o, cached: l } = s, c = Xt(r);
		return c ? new Map(r.availableDates.map((e) => [e, {
			kind: "refused",
			reason: c
		}])) : l ? md(i, e, o, l, t.signal) : n ? q({
			kind: A.AUTO_SCORE,
			key: `${A.AUTO_SCORE}:${String(e)}:${o}`,
			label: "Compute marker placement",
			workspaceId: i.name,
			signal: t.signal,
			run: async (n) => {
				const l = a?.inputs === o ? a.byDate : await this.computeFilePlacement(s, t, i, n);
				return await this.storeFilePlacement(e, o, l, i, {
					...t,
					signal: n.signal
				}) ? (n.progress(r.availableDates.length, r.availableDates.length), md(i, e, o, l, n.signal)) : /* @__PURE__ */ new Map();
			}
		}) : /* @__PURE__ */ new Map();
	}
	async filePlacementState(e, t, n) {
		const i = await ot(e, n), a = fd.get(n)?.get(e), [s, r, l] = await Promise.all([
			ct(e, n),
			n.markerProvenance.get(e),
			a ? void 0 : Lu(n, e)
		]);
		if (!i) return null;
		const c = await f.waitFor(async function(e, t, n, i) {
			const a = pt.getState(), s = t.ruleset ?? a.placementRuleset, r = /* @__PURE__ */ new Set([o.VAN_HEES_2015, ...t.algorithm && ie(t.algorithm) ? [t.algorithm] : []]), l = (e) => "auto_score" === e.username && r.has(e.algorithm ?? ""), c = (i?.rows ?? []).filter((e) => l(e) || s !== h.LEGACY && e.nonwearDecided).map((e) => [e.id, l(e) ? e.lastModifiedAt : e.nonwearSpans ?? e.lastModifiedAt]), { signal: u, choiAxis: d, hasptVariant: p, studySettingsRevision: f, ...m } = t;
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
				rows: c
			}));
		}(i, t, s, r));
		if (a?.inputs === c) return {
			fileId: e,
			file: i,
			diaries: s,
			inputs: c,
			cached: a.byDate
		};
		const u = a ? await Lu(n, e) : l;
		return {
			fileId: e,
			file: i,
			diaries: s,
			inputs: c,
			cached: u?.inputs === c ? new Map(Object.entries(u.byDate)) : null
		};
	}
	async storeFilePlacement(e, t, n, i, a) {
		if (a.signal?.throwIfAborted(), D(i.name)) return !1;
		const s = await ge(i, [
			i.files,
			i.diaryEntries,
			i.markerProvenance,
			i.placementResults,
			i.studySettings
		], async () => {
			if (void 0 !== a.studySettingsRevision && ((await Ze(i))?.contentHash ?? null) !== a.studySettingsRevision) return !1;
			const s = await this.filePlacementState(e, a, i);
			return !D(i.name) && s?.inputs === t && (await i.placementResults.put({
				fileId: e,
				policy: 2,
				inputs: t,
				byDate: Object.fromEntries(n)
			}), !0);
		}, a.signal);
		return s && E() === i && Nt(e, i), s;
	}
	async storeFilesPlacement(t, n, i, a, s) {
		const r = [], o = await Promise.allSettled(t.map(({ fileId: e, options: t }) => this.filePlacementState(e, t, n))), l = {
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: P()
		}, c = o.flatMap((e) => "fulfilled" === e.status && e.value ? [e.value.file] : []), u = c.flatMap((e) => e.sourceType === y.GGIR_5S_UPLOAD ? [{ size: e.sourceSizeBytes ?? 0 }] : []), d = u.length > 0 && u.length === c.length ? L(u, l) : {
			...l,
			maxExtraWorkers: Number.POSITIVE_INFINITY
		}, p = await H(t.map(({ fileId: t, options: a }, l) => ({
			name: `placement:${String(t)}`,
			cost: 1,
			run: async (c, u) => {
				try {
					const r = new e(), u = o[l];
					if ("rejected" === u.status) throw u.reason;
					const d = u.value;
					if (!d || d.cached) return null;
					const p = await r.computeFilePlacement(d, a, n, i, c, s);
					return {
						fileId: t,
						inputs: d.inputs,
						byDate: p
					};
				} catch {
					return i.signal.throwIfAborted(), u.primary || u.cancel(), r.push(t), null;
				}
			}
		})), {
			createWorker: v,
			extraWorkers: J(d),
			cancelOperation: () => {},
			...a,
			signal: i.signal
		});
		for (const [e, f] of p.entries()) {
			try {
				f && await this.storeFilePlacement(f.fileId, f.inputs, f.byDate, n, t[e].options) && md(n, f.fileId, f.inputs, f.byDate, i.signal);
			} catch {
				i.signal.throwIfAborted(), r.push(t[e].fileId);
			}
			i.progress(e + 1, p.length);
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
		return mt(async (c) => {
			const u = await _t(r, n, c), d = s ?? (await ci(n)).csvText, p = void 0 !== a && ie(t.algorithm), f = [];
			let m, h = o.length;
			const g = new Promise((e) => {
				m = e;
			}).then(async () => {
				if (0 !== f.length) try {
					i.signal.throwIfAborted();
					const e = f.map((e) => e.opts), n = p && a ? await a.placeStoredGgirNights([...u.values()], Re([...u.values()], t.algorithm), f.map((e) => ({
						options: e.opts,
						...e.anchor
					}))) : await function(e, t = b()) {
						return Gt(e, t);
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
			w.activityDayMemo = c, w.days = u, w.span = Promise.resolve(Zu(u)), w.file = Promise.resolve(e.file), w.diaries = Promise.resolve(e.diaries);
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
	async autoScoreNight(e, t, n, i, a = E(), r, l, c, u) {
		const d = l ?? U(n.signal);
		n.signal?.throwIfAborted();
		const p = u ?? this.fileBatch(e, a), f = await (p ? p.file ??= ot(e, a) : ot(e, a)), g = Xt(f);
		if (g) return {
			kind: "refused",
			reason: g
		};
		const y = n.ruleset ?? pt.getState().placementRuleset, w = Dn(n.algorithm), _ = n.nonwearDetectors ?? hn(w), v = n.choiAxis ?? pt.getState().choiAxis, b = n.sleepPeriodDetection ? qt(n.sleepPeriodDetection) : void 0;
		let k = Sn(b, {
			path: w,
			selected: _
		}) ?? null;
		const S = await ce(e, t, a, (t) => this.placementDay(e, t, a, p), void 0, d);
		if (!S) return {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
		const I = () => tn(f) ? p ? p.actiware ??= gt(e, a) : gt(e, a) : Promise.resolve(void 0);
		if (n.algorithm === o.ACTIWARE_SLEEP_WAKE) {
			const e = await I(), i = nn(e?.actiwareIntervals, t), a = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(11, 19), s = e?.actiwareRestProposal?.notes?.[t], r = (e?.actiwareIntervals ?? []).some((e) => "rest" === e.kind && "scorer" === e.origin && null !== Jt([e], t)), o = s && !r ? [`Rest proposal (SCREENS Autoscore): ${s}`] : [], { source_a: l, source_b: c, fusion_policy: u, apply_nonwear_gate: d } = qt(Pt({
				algorithm: n.algorithm,
				periodGuider: n.periodGuider,
				sleepPeriodDetection: n.sleepPeriodDetection
			})), p = {
				...k,
				source_a: l,
				source_b: c,
				fusion_policy: u,
				apply_nonwear_gate: d
			};
			return i?.sleep ? {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: i.sleep.startTimestamp,
					offset_timestamp: i.sleep.endTimestamp,
					marker_type: m.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: (i.additionalSleeps ?? []).map((e, t) => ({
					onset_timestamp: e.startTimestamp,
					offset_timestamp: e.endTimestamp,
					marker_type: m.NAP,
					marker_index: t + 2
				})),
				decisions: [],
				sleep_period_detection_config: p,
				notes: [`Actiware sleep interval ${a(i.sleep.startTimestamp)}–${a(i.sleep.endTimestamp)} inside rest interval ${a(i.rest.startTimestamp)}–${a(i.rest.endTimestamp)}, as Actiware sets it.`, ...o]
			} : {
				kind: "placed",
				sleep_markers: [],
				nap_markers: [],
				decisions: [],
				sleep_period_detection_config: p,
				notes: [i ? `Actiware sets no sleep interval inside this night's rest interval (${a(i.rest.startTimestamp)}–${a(i.rest.endTimestamp)}).` : "Actiware sets no rest interval for this night.", ...o]
			};
		}
		const A = await this.placementDay(e, await te(t, void 0, d), a, p), x = await I(), N = le(f?.sourceType, f?.sourceProfileId), T = await qu([S, A], _, v, N, a, n.signal, p?.activityDayMemo), z = await this.scorerVerdict(a, e, n.algorithm, { file: f }, p), M = ie(n.algorithm), D = M && c ? { kind: "angle-deferred" } : await ne({
			day: S,
			nextDay: A,
			verdict: z,
			angle: M,
			requireScores: !0,
			missingScoresReason: n.algorithm === o.LSTM_SLEEP_WAKE ? "No LSTM sleep/wake results are stored for this file. Re-import or reprocess the raw file so the app can compute spectral features and run the ONNX model." : "No algorithm results available",
			choiAxis: v,
			laterDays: async () => [...(p?.days ?? await _t(e, a, p?.activityDayMemo)).values()].filter((e) => e.date > t).sort((e, t) => e.date.localeCompare(t.date)),
			core: d
		});
		if ("refused" === D.kind) return D;
		const R = M ? null : Gu(T);
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
		const C = Nn(T.dropped, w), F = (e) => "refused" === e.kind || null === k && 0 === C.length ? e : {
			...e,
			notes: [...C, ...e.notes],
			sleep_period_detection_config: {
				...e.sleep_period_detection_config ?? {},
				...k ?? {}
			}
		};
		if ("angle" === D.kind || "angle-legacy" === D.kind || "angle-deferred" === D.kind) {
			const s = await this.placementMarker(e, t, n.algorithm ?? null, a, p) ?? await this.placementMarker(e, t, o.VAN_HEES_2015, a, p), l = s?.sleepMarkers[0], u = null != l?.onsetTimestamp && null != l.offsetTimestamp ? {
				startTimestamp: l.onsetTimestamp,
				endTimestamp: l.offsetTimestamp
			} : null, g = () => l && null != l.onsetTimestamp && null != l.offsetTimestamp ? {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: l.onsetTimestamp,
					offset_timestamp: l.offsetTimestamp,
					marker_type: m.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: [],
				notes: ["HDCZA fallback: no 5s SIB stream available for structured sleep-period fusion", `HDCZA window: ${Dt(l.onsetTimestamp)} – ${Dt(l.offsetTimestamp)}`],
				decisions: [],
				sleep_period_detection_config: s?.sleepPeriodDetectionConfig ?? k
			} : {
				kind: "refused",
				reason: "No HDCZA sleep window found — re-process the file to regenerate it"
			};
			if ("angle" === D.kind || "angle-deferred" === D.kind) {
				let o = {
					timestamps: /* @__PURE__ */ new Float64Array(),
					activityCounts: /* @__PURE__ */ new Float64Array(),
					sleepScores: /* @__PURE__ */ new Uint8Array()
				};
				if ("angle" === D.kind) {
					const e = await K(D, t, d);
					if ("refused" === e.kind) return e;
					o = e.series;
				}
				const [l, m] = await Promise.all([this.placementDiary(e, t, a, p), p ? p.span ??= je(e, a, f?.seriesRevision ?? 0) : je(e, a, f?.seriesRevision ?? 0)]), w = l ? await $e(l, m, d) : null, _ = (await la(n.sensorLocation ?? "wrist", n.hasptVariant ?? pt.getState().ggirHasptVariant, d)).variant, v = function(e) {
					const t = e?.sleepPeriodDetectionConfig?.haspt_variant;
					return Object.values($).includes(t) ? t : null;
				}(s), b = null == s ? null : null == v ? `HASPT variant not recorded at import; assumed ${_} from the study setting. Reprocess the file to record it.` : v !== _ ? `HASPT variant at import was ${v}; the study setting now gives ${_}. Placed with ${v}; reprocess the file to apply ${_}.` : null, k = y === h.GGIR_PART4, I = k ? await Oe(await this.placementDiaries(e, a, p), void 0, d) : null, x = I?.wakeIsOutBed ? null : lt(w, I?.outBedIsWake ? "diary_out_of_bed_time" : "diary_wake_time"), N = I?.outBedIsWake ? null : lt(w, I?.wakeIsOutBed ? "diary_wake_time" : "diary_out_of_bed_time"), T = {
					...o,
					choiNonwear: null,
					ggirHasptAlgo: v ?? _,
					ggirConfigCsv: r ?? (await ci(a)).csvText,
					...I?.hasBedlog ? { ggirDiaryHasBedlog: !0 } : {},
					...I?.hasSleeplog ? { ggirDiaryHasSleeplog: !0 } : {},
					diaryBedTime: k ? lt(w, "diary_in_bed_time") : Je(w),
					diaryOutBedTime: k ? N : Ie(w),
					diaryOnsetTime: k ? lt(w, "diary_onset_time") : xe(w),
					diaryWakeTime: k ? x : Be(w),
					diaryNaps: w ? _e(w) : null,
					analysisDate: t,
					onsetMinConsecutiveSleep: 1,
					offsetMinConsecutiveMinutes: 1,
					algorithm: n.algorithm,
					periodGuider: ra(n.algorithm, n.periodGuider, n.sleepPeriodDetection),
					...void 0 !== n.sleepPeriodDetection ? { sleepPeriodDetection: n.sleepPeriodDetection } : {},
					...n.scorerPostprocessing ? { scorerPostprocessing: n.scorerPostprocessing } : {},
					ruleset: y,
					epochLengthSeconds: 5,
					hdczaWindow: u
				}, z = "angle-deferred" === D.kind ? await c(T, S, A) : await i(T);
				return "angle-legacy" === z ? g() : F(b && "refused" !== z.kind ? {
					...z,
					notes: [b, ...z.notes]
				} : z);
			}
			return g();
		}
		const [O, P] = await Promise.all([this.placementDiary(e, t, a, p), p ? p.span ??= je(e, a, f?.seriesRevision ?? 0) : je(e, a, f?.seriesRevision ?? 0)]), j = O ? await $e(O, P, d) : null, { unpacked: B } = D, { timestamps: Z, axisY: q, sleepScores: G, eventMarkerTimestamps: H } = B, J = on(n.detectionRule), L = ra(n.algorithm, n.periodGuider, n.sleepPeriodDetection), W = await this.placementMarker(e, t, o.VAN_HEES_2015, a, p), V = W?.sleepMarkers.find((e) => e.markerType === m.MAIN_SLEEP) ?? W?.sleepMarkers[0], Y = null != V?.onsetTimestamp && null != V.offsetTimestamp ? {
			startTimestamp: V.onsetTimestamp,
			endTimestamp: V.offsetTimestamp
		} : null, X = await dt(Z, s(n.algorithm), d), Q = T.available.some(zn) ? await (p ? p.sensor ??= ze(e, a) : ze(e, a)) : [], ee = Uu(kn(await An(T.available, B.nonwearMasksByDetector, {
			offPeriods: Q,
			source: N
		}, {
			timestampsSec: Z,
			epochLenSec: X
		}, d))), ae = y !== h.LEGACY ? await this.loadPlacementFileContext(e, t, n.algorithm, z, P, a, T.available, Q, N, v, n.signal, p) : null, { startIndex: se, endIndex: re } = await qn(Z, t, d);
		if (se === re) return {
			kind: "refused",
			reason: "No activity data found for this date"
		};
		const oe = Z.slice(se, re), ue = q.slice(se, re), de = G.slice(se, re), pe = ee.choiNonwear ? ee.choiNonwear.slice(se, re) : null, fe = ee.nonwearWeight ? ee.nonwearWeight.slice(se, re) : null, me = ee.nonwearMemberFlags ? ee.nonwearMemberFlags.slice(se, re) : null, he = oe[0] ?? 0, ge = oe[oe.length - 1] ?? he, ye = Jt(x?.actiwareIntervals, t);
		return F(await i({
			timestamps: oe,
			activityCounts: ue,
			sleepScores: de,
			choiNonwear: pe,
			...fe ? { nonwearWeight: fe } : {},
			...me ? { nonwearMemberFlags: me } : {},
			diaryBedTime: Je(j),
			diaryOnsetTime: xe(j),
			diaryWakeTime: Be(j),
			diaryNaps: j ? _e(j) : null,
			diaryNonwear: j ? rt(j) : null,
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
			hdczaWindow: Y,
			eventMarkerTimestamps: H.filter((e) => e >= he && e <= ge + 60),
			actiwareRestWindow: ye,
			nightStartHour: Ht(n.nightStartHour),
			nightEndHour: Ht(n.nightEndHour),
			...ae ? {
				sensorNonwear: ae.deviceOffNonwear.filter((e) => e.startTimestamp <= ge && e.endTimestamp >= he),
				contextDays: ae.contextDays
			} : {}
		}));
	}
	async autoNonwear(e, t, n) {
		if (void 0 === n.threshold) throw new Error("Local auto-nonwear requires a resolved nonwear threshold.");
		const i = E(), a = await ce(e, t, i, (t) => Ve(e, t, i, this.fileBatch(e, i)?.activityDayMemo));
		if (!a) return {
			kind: "refused",
			reason: "No activity data"
		};
		const [s, r, o, l] = await Promise.all([
			Ve(e, await te(t), i, this.fileBatch(e, i)?.activityDayMemo),
			ht(e, t, i),
			ze(e, i),
			ot(e, i)
		]), c = pt.getState(), u = en(c, l), d = n.nonwearDetectors ?? ("ggir" === Dn(u.algorithm) ? c.nonwearDetectorsGgir : u.nonwearDetectorsCounts), p = le(l?.sourceType, l?.sourceProfileId), f = await qu([a, s], d, gn(), p, i, void 0, this.fileBatch(e, i)?.activityDayMemo), m = Gu(f);
		if (null !== m) return {
			kind: "refused",
			reason: m
		};
		const h = await ne({
			day: a,
			nextDay: s,
			verdict: Le,
			angle: !1,
			requireScores: !1,
			missingScoresReason: "",
			choiAxis: gn(),
			laterDays: () => Promise.resolve([])
		});
		if ("counts" !== h.kind) return {
			kind: "refused",
			reason: "refused" === h.kind ? h.reason : V
		};
		const g = h.unpacked, { timestamps: y, axisY: w } = g, _ = y[0] ?? 0, v = y[y.length - 1] ?? _, S = kn(await An(f.available, g.nonwearMasksByDetector, {
			offPeriods: o.filter((e) => e.startTimestamp <= v && e.endTimestamp >= _),
			source: p
		}, {
			timestampsSec: y,
			epochLenSec: it(a, l) ?? await dt(y, 60)
		})), I = Uu(S), A = Hu(f.available), x = r ? rt(r) : [], N = n.existingSleepMarkers, $ = await async function(e) {
			if (0 === e.timestamps.length || 0 === e.activityCounts.length) return jt("No activity data");
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
				...Lt(e.nonwearDetectors, e.nonwearWeight, {
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
			} : jt("Nonwear placement is unavailable in this build — reload while online to update the local engine.");
		}({
			timestamps: y,
			activityCounts: w,
			diaryNonwear: x,
			choiNonwear: A ? null : I.choiNonwear,
			nonwearDetectors: I.nonwearDetectors,
			...I.nonwearWeight ? { nonwearWeight: I.nonwearWeight } : {},
			...I.nonwearMemberFlags ? { nonwearMemberFlags: I.nonwearMemberFlags } : {},
			sensorNonwearPeriods: A ? o.filter((e) => e.startTimestamp <= v && e.endTimestamp >= _).sort((e, t) => e.startTimestamp - t.startTimestamp).map((e) => [e.startTimestamp, e.endTimestamp]) : [],
			existingSleepMarkers: N,
			analysisDate: t,
			threshold: n.threshold
		});
		return "refused" === $.kind ? $ : {
			kind: "placed",
			nonwear_markers: $.nonwear_markers.map((e) => yn(e, S?.available.length ?? 0)),
			notes: [...Nn(f.dropped, Dn(u.algorithm)), ...$.notes]
		};
	}
	async listFileScoringCounts(e, t, n) {
		return this.fileScoringCountsIn(E(), e, t, n);
	}
	async fileScoringCountsIn(e, t, n, i) {
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const { nightStartHour: a, nightEndHour: s } = rd(i), [r, o] = await Promise.all([e.files.bulkGet([...t]), Ne(t, e)]);
		return Promise.all(t.map(async (t, i) => {
			const l = r[i], c = l?.availableDates ?? await wt(t, e), u = /* @__PURE__ */ new Map();
			for (const e of o[i]?.rows ?? []) e.username === n && u.set(e.date, vt(u.get(e.date), e));
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
		const a = E(), s = (await ot(e, a))?.nightDifficulty, { nightStartHour: r, nightEndHour: o } = rd(i);
		if (s?.nightStartHour !== r || s.nightEndHour !== o || !t.every((e) => e in s.byDate)) return null;
		void 0 === s.notRankableReason && b().getComputeIdentity().then(({ sourceRevision: t }) => {
			s.sourceRevision !== String(t) && dd(e, a, i);
		}, () => {});
		const [l, c] = await Promise.all([we(e, a), Lu(a, e)]), u = Ke(l, n), d = Ke(l, zt), p = yt(l), f = t.filter((e) => (p.get(e)?.size ?? 0) >= 2), m = await fu(f.flatMap((e) => [{
			usersForDate: p.get(e),
			kind: "sleep"
		}, {
			usersForDate: p.get(e),
			kind: "nonwear"
		}])), h = new Set(f.filter((e, t) => m[2 * t].disagree || m[2 * t + 1].disagree));
		return t.map((e) => ({
			date: e,
			...id(u.get(e), h.has(e), d.get(e), Ju(c, e, d.get(e))),
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
		const r = U(s);
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const o = E(), l = ++this.nextComplexityGenerationToken;
		let c, u;
		const d = new Promise((e, t) => {
			c = e, u = t;
		});
		d.catch(() => {}), this.latestComplexityTokenByFile.set(e, l), this.complexitySnapshotByFile.delete(e), this.complexitySignalGenerationByFile.delete(e), this.complexityFailureByFile.delete(e), this.complexityGenerationByFile.set(e, {
			token: l,
			promise: d
		});
		try {
			const u = async () => {
				const t = await we(e, o), [i, a, s, r, l] = await Promise.all([
					_t(e),
					ct(e),
					Se(e, o, t),
					Ru(e, o),
					ot(e)
				]);
				return [
					Ke(t, n),
					Ke(t, zt),
					i,
					a,
					s,
					yt(t),
					Du(t),
					r,
					l
				];
			}, [d, m, h, g, y, w, _, v, b] = "function" == typeof o.transaction ? await o.transaction("r", [
				o.markers,
				o.activityDays,
				o.diaryEntries,
				o.sensorNonwear,
				o.dailyGgirSummaries,
				o.files
			], async () => {
				if (E() !== o) throw new Error("The local workspace changed before difficulty inputs could be read.");
				const e = await u();
				if (E() !== o) throw new Error("The local workspace changed while difficulty inputs were being read.");
				return e;
			}) : await u(), k = Zu(h), S = new Map((await Me(g, k, r)).map((e) => [e.analysisDate, e])), { nightStartHour: I, nightEndHour: A } = rd(i), x = t.filter((e) => (w.get(e)?.size ?? 0) >= 2), N = await fu(x.flatMap((e) => [{
				usersForDate: w.get(e),
				kind: "sleep"
			}, {
				usersForDate: w.get(e),
				kind: "nonwear"
			}]), r), $ = new Set(x.filter((e, t) => N[2 * t].disagree || N[2 * t + 1].disagree)), T = await Lu(o, e), z = (e) => t.map((t) => ({
				date: t,
				...id(d.get(t), $.has(t), m.get(t), Ju(T, t, m.get(t))),
				complexity_pre: e(t),
				complexity_post: null
			})), M = b?.nightDifficulty;
			M?.nightStartHour === I && M.nightEndHour === A && t.every((e) => e in M.byDate) && (s?.throwIfAborted(), a(z((e) => M.byDate[e] ?? null)));
			const D = [], R = [...t], F = await ui(R, r), O = new Map(R.map((e, t) => [e, F[t] ?? !1])), P = Re(h.values()), j = /* @__PURE__ */ new Map();
			for (const n of t) {
				s?.throwIfAborted();
				const t = await ju(h, n, P, r, j);
				if (!t) continue;
				const { timestamps: i, axisY: a, sleepScores: o, nonwearResults: l, temperature: c, detachNonwear: u, ggirTimestamps: d, ggirAnglez: p } = t, f = Wu(i, i.length), m = Wu(a, f.length), g = Vu(o, f.length);
				if (0 === f.length || 0 === m.length || 0 === g.length) continue;
				const w = S.get(n), b = _.get(n) ?? null, k = await En((t) => {
					const i = qe(xe(w), t), a = qe(Be(w), t);
					return {
						naps: w ? _e(w).map(([e, n]) => ({
							onset_time: qe(e, t),
							offset_time: qe(n, t)
						})).filter((e) => null != e.onset_time) : [],
						nonwear: w ? rt(w).map(([e, n]) => [qe(e, t), qe(n, t)]).filter((e) => null != e[0] && null != e[1]).map(([e, t]) => ({
							start_time: e,
							end_time: t
						})) : [],
						onset: i,
						wake: a,
						inBed: qe(Je(w), t),
						outBed: qe(Ie(w), t),
						guiderTargets: Yu(n, i, a, b, Ce(e), t)
					};
				}, new On(r)), I = k.naps, A = k.nonwear, x = f[0] ?? 0, N = f[f.length - 1] ?? x, $ = k.onset, T = k.wake, z = v.get(n)?.calibration?.errorEnd;
				D.push({
					analysis_date: n,
					epoch_length_seconds: await dt(f, 60, r),
					timestamps: f,
					activity_counts: m,
					sleep_scores: g,
					choi_nonwear: Vu(l, f.length),
					sensor_nonwear: y.filter((e) => e.startTimestamp <= N && e.endTimestamp >= x).map((e) => ({
						start_ts: e.startTimestamp,
						end_ts: e.endTimestamp
					})),
					diary_onset_time: $,
					diary_wake_time: T,
					diary_nap_count: I.length,
					diary_naps: I,
					diary_nonwear: A,
					diary_in_bed_time: k.inBed,
					diary_out_bed_time: k.outBed,
					is_weekend: O.get(n) ?? null,
					guider_targets: k.guiderTargets,
					anglez: Ku(f, d, p),
					light: [],
					temperature: Wu(c, f.length),
					heart_rate: [],
					detach_nonwear: Vu(u, f.length),
					calibration_error: "number" == typeof z && Number.isFinite(z) ? z : null,
					imputed_fraction: null,
					hdcza_window: b
				});
			}
			let B, Z;
			try {
				if (D.length > 0) {
					const n = {
						config: { signals: {
							night_start_hour: I,
							night_end_hour: A
						} },
						days: D
					}, i = {
						config: n.config ?? null,
						days: n.days.map((e) => ({
							analysis_date: e.analysis_date,
							epoch_length_seconds: e.epoch_length_seconds,
							timestamps: e.timestamps
						}))
					}, a = r, c = await a.getComputeIdentity(), u = await Qc({
						runtimeIdentity: c,
						difficultyRequestWireJson: vc(n),
						signalsRequestWireJson: kc(n),
						sourceContentHash: b?.sourceContentHash ?? null
					}), d = [
						"timestamps",
						"activity_counts",
						"sleep_scores",
						"choi_nonwear",
						"anglez",
						"light",
						"temperature",
						"heart_rate",
						"detach_nonwear"
					], p = d.flatMap((e) => {
						const t = new Uint32Array(n.days.length + 1);
						for (const [a, s] of n.days.entries()) t[a + 1] = t[a] + s[e].length;
						const i = new ("sleep_scores" === e || "choi_nonwear" === e || "detach_nonwear" === e ? Uint8Array : Float64Array)(t[n.days.length]);
						for (const [a, s] of n.days.entries()) i.set(s[e], t[a]);
						return [i, t];
					}), m = [JSON.stringify({
						config: n.config,
						days: n.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !d.includes(e))))
					}), ...p], h = await ru(e, u.generationKey, o) ?? await ru(e, (await Qc({
						runtimeIdentity: Ou(c),
						difficultyRequestWireJson: u.difficultyRequestWireJson,
						difficultyRequestSha256: u.difficultyRequestSha256,
						signalsRequestWireJson: u.signalsRequestWireJson,
						signalsRequestSha256: u.signalsRequestSha256,
						sourceContentHash: u.sourceContentHash
					})).generationKey, o);
					if (h) B = {
						token: l,
						evidenceDb: o,
						coveredDates: [...new Set(t)].sort(),
						signalRequest: null == h.signalsByDate ? m : null,
						projectionInput: ed(h),
						difficultyByDate: td(h),
						signalsByDate: nd(h),
						computeIdentity: h.runtimeIdentity,
						projectionRevision: Xu(h),
						evidence: Qu(h)
					};
					else {
						s?.throwIfAborted();
						const d = ud(o, u.generationKey, s, () => r.computeFileDifficulty(m));
						Z = d.release;
						const p = await d.run;
						if (s?.throwIfAborted(), !Pu(c, await a.getComputeIdentity())) throw new Error("The local scoring runtime changed while difficulty was being computed. Re-run the calculation.");
						if (Bu(p.byDate, n.days)) {
							const n = await async function(e) {
								try {
									(!Number.isInteger(e.fileId) || e.fileId <= 0) && Tc();
									const t = await async function(e) {
										"sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || Tc(), null !== e.sourceContentHash && zc(e.sourceContentHash), Cc(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || Tc(), zc(e.difficultyRequestSha256), zc(e.signalsRequestSha256), await Fc(e.difficultyRequestWireJson, e.difficultyRequestSha256), await Fc(e.signalsRequestWireJson, e.signalsRequestSha256);
										const t = Kc(e.difficultyRequestWireJson, e.signalsRequestWireJson);
										zc(e.generationKey);
										const { generationKey: n, ...i } = e;
										return await Xc(i) !== e.generationKey && Tc(), t;
									}(e.identity), n = Rc(e.projectionInput), i = Rc(e.difficultyByDate), a = null == e.signalsByDate ? null : Rc(e.signalsByDate);
									Yc(t, n, i, a);
									const s = await Ec(n), r = await Ec(i), o = null === a ? null : await Ec(a);
									tu(s, e.expectedHashes?.projectionSha256), tu(r, e.expectedHashes?.difficultyResultSha256), tu(o, e.expectedHashes?.signalsResultSha256);
									const l = (/* @__PURE__ */ new Date()).toISOString(), c = e.createdAt ?? l, u = e.updatedAt ?? c;
									Mc(c), Mc(u), Date.parse(u) < Date.parse(c) && Tc();
									const d = {
										fileId: e.fileId,
										generationKey: e.identity.generationKey,
										evidenceContractId: e.identity.evidenceContractId,
										difficultyMethodId: e.identity.difficultyMethodId,
										signalsMethodId: e.identity.signalsMethodId,
										requestContractId: e.identity.requestContractId,
										sourceContentHash: e.identity.sourceContentHash,
										runtimeIdentity: Rc(e.identity.runtimeIdentity),
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
									}, p = await eu(d);
									return tu(p, e.expectedHashes?.recordSha256), {
										...d,
										recordSha256: p
									};
								} catch (t) {
									if (t instanceof xc) throw t;
									return Tc();
								}
							}({
								fileId: e,
								identity: u,
								projectionInput: i,
								difficultyByDate: p.byDate,
								signalsByDate: null
							});
							if (this.disposed || null == this.latestComplexityTokenByFile.get(e)) throw new Error("The local workspace changed before difficulty evidence could be saved.");
							if (this.latestComplexityTokenByFile.get(e) !== l) throw new Error("A newer local difficulty generation superseded this computation.");
							s?.throwIfAborted();
							const a = await async function(e, t = E(), n = "fresh", i) {
								"fresh" !== n && "restore" !== n && Tc();
								const a = await f.waitFor(iu(e));
								return dn([t.files, t.complexityEvidence], async () => {
									const e = await t.files.get(a.fileId);
									au(a, e);
									const i = await t.complexityEvidence.where("[fileId+generationKey]").equals([a.fileId, a.generationKey]).first();
									if (i) {
										const e = await f.waitFor(iu(i));
										if (r = a, (s = e).generationKey !== r.generationKey || s.projectionSha256 !== r.projectionSha256 || s.difficultyResultSha256 !== r.difficultyResultSha256 || s.difficultyRequestSha256 !== r.difficultyRequestSha256 || s.signalsRequestSha256 !== r.signalsRequestSha256 || s.sourceContentHash !== r.sourceContentHash) throw new Nc();
										if (null !== e.signalsResultSha256 && null !== a.signalsResultSha256 && e.signalsResultSha256 !== a.signalsResultSha256) throw new Nc();
										if (null === e.signalsByDate && null !== a.signalsByDate) {
											const n = new Date(Math.max(Date.now(), Date.parse(e.createdAt))).toISOString(), i = {
												...e,
												signalsByDate: a.signalsByDate,
												signalsResultSha256: a.signalsResultSha256,
												updatedAt: n
											}, s = await f.waitFor(eu(i)), r = {
												...i,
												recordSha256: s
											};
											return await t.complexityEvidence.put(r), await su(r, "signals_enriched", 0), {
												record: r,
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
									var s, r;
									await async function(e, t, n) {
										const i = await e.complexityEvidence.where("fileId").equals(t.fileId).toArray();
										if (i.length > 5) throw new xc(!0);
										if (i.length < 5) return;
										if ("fresh" === n) return;
										i.sort((e, t) => {
											const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
											return 0 !== n ? n : (t.id ?? 0) - (e.id ?? 0);
										});
										const a = i[i.length - 1];
										if (a && Date.parse(t.createdAt) < Date.parse(a.createdAt)) throw new $c();
									}(t, a, n);
									const o = { ...a };
									delete o.id;
									const l = await t.complexityEvidence.add(o), c = {
										...o,
										id: l
									}, u = await async function(e, t, n) {
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
									}(t, c.fileId, n);
									return await su(c, "inserted", u), {
										record: c,
										disposition: "inserted",
										evicted: u
									};
								}, t, i);
							}(n, o, "fresh", s);
							"inserted" === a.disposition && await async function(e, t, n) {
								try {
									await cn.recordWorkspaceDurably(C.SYSTEM_RECALCULATION, {
										subject: "night_complexity_generation",
										generationKey: e.generationKey,
										difficultyResultSha256: e.difficultyResultSha256,
										dateCount: Object.keys(e.difficultyByDate).length
									}, t, n) || console.warn("[local-data-source] Complexity evidence was saved, but its audit event is still pending.");
								} catch {
									console.warn("[local-data-source] Complexity evidence was saved, but its audit event could not be recorded.");
								}
							}(a.record, o, s), B = {
								token: l,
								evidenceDb: o,
								coveredDates: [...new Set(t)].sort(),
								signalRequest: null == a.record.signalsByDate ? m : null,
								projectionInput: ed(a.record),
								difficultyByDate: td(a.record),
								signalsByDate: nd(a.record),
								computeIdentity: a.record.runtimeIdentity,
								projectionRevision: Xu(a.record),
								evidence: Qu(a.record)
							};
						} else console.warn("[local-data-source] Night difficulty is unavailable from the current local scoring runtime."), B = {
							token: l,
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
					token: l,
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
			} catch (p) {
				s?.throwIfAborted();
				const t = this.latestComplexityTokenByFile.get(e);
				if (this.disposed || null == t || t === l) throw p;
				B = await this.awaitNewerComplexitySnapshot(e, l);
			} finally {
				Z?.();
			}
			s?.throwIfAborted(), c(B), this.latestComplexityTokenByFile.get(e) === l && (s?.throwIfAborted(), this.publishComplexitySnapshot(e, B, s), this.complexityFailureByFile.delete(e));
			let q = B;
			if (this.latestComplexityTokenByFile.get(e) !== l) {
				const t = this.complexityGenerationByFile.get(e);
				if (t && t.token !== l) q = await t.promise;
				else {
					const t = this.complexityFailureByFile.get(e);
					if (void 0 !== t && t.token === this.latestComplexityTokenByFile.get(e)) throw t.error;
					const n = this.complexitySnapshotByFile.get(e);
					if (!n) throw new Error("A newer local difficulty generation replaced this result.");
					q = n;
				}
			}
			const G = q.difficultyByDate;
			if (q === B && (0 === D.length || null !== B.computeIdentity)) {
				const n = [...h.values()].map(Te), i = 0 === D.length && n.some((e) => e.ggir) && n.every((e) => e.ggir || 0 === e.timestamps.length), a = {
					nightStartHour: I,
					nightEndHour: A,
					byDate: Object.fromEntries(t.map((e) => [e, G[e]?.difficulty ?? null])),
					sourceRevision: String((B.computeIdentity ?? await r.getComputeIdentity()).sourceRevision),
					...i ? { notRankableReason: od } : {}
				};
				if (JSON.stringify(b?.nightDifficulty) !== JSON.stringify(a)) try {
					s?.throwIfAborted(), await ge(o, [o.files], () => o.files.update(e, { nightDifficulty: a }), s);
					for (const t of ld) t(e, o);
					s?.throwIfAborted();
				} catch {
					s?.throwIfAborted(), console.warn("[local-data-source] Stored night difficulty could not be written.");
				}
			}
			return z((e) => G[e]?.difficulty ?? null);
		} catch (p) {
			throw this.latestComplexityTokenByFile.get(e) === l && this.complexityFailureByFile.set(e, {
				token: l,
				error: /* @__PURE__ */ new Error("The newest local difficulty generation failed.")
			}), u(p), p;
		} finally {
			this.complexityGenerationByFile.get(e)?.token === l && this.complexityGenerationByFile.delete(e);
		}
	}
	async loadAdjacentMarkers(e, t, n) {
		const i = (await ot(e))?.availableDates?.slice().sort() ?? [], a = i.indexOf(t);
		if (a < 0) return null;
		const s = a > 0 ? i[a - 1] ?? null : null, r = a < i.length - 1 ? i[a + 1] ?? null : null, [o, l] = await Promise.all([s ? At(e, s, n) : null, r ? At(e, r, n) : null]), c = (e) => (e?.sleepMarkers ?? []).map((e) => ({
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
		const n = E(), i = await ke(e, t, void 0, n);
		if (0 === e) return i;
		const a = await Ge(e, t, n);
		return [...i, ...a].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
	}
	static isRecordInView(e, t, n) {
		return e.fileId === t && e.analysisDate === n || 0 !== t && bt(e, t, n);
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
	async exportAuditLogCsv(e, t, i) {
		const a = await this.auditRecordsForView(e, t), s = (i ? a.filter((e) => e.username === i) : a).filter((e) => "number" == typeof e.id), r = se("audit_log_csv", "local"), o = await St(s), l = function(e) {
			const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
			for (const i of e) {
				const e = i.payload?.exportId;
				"string" == typeof e && ("export_started" === i.action ? t.add(e) : "data_exported" !== i.action && "export_cancelled" !== i.action || n.add(e));
			}
			for (const i of n) t.delete(i);
			return t;
		}(s), c = [r.join(",")];
		for (const [u, d] of s.entries()) {
			const e = d.payload ?? null, t = o[u];
			c.push([
				n(String(d.id)),
				n((/* @__PURE__ */ new Date(1e3 * d.clientTimestamp)).toISOString()),
				n(d.action),
				n(Nu(null === e ? "" : $u(e, d.action), d.action, e, l)),
				n(d.username),
				n(String(d.fileId)),
				n(d.analysisDate ?? ""),
				n(null == d.studyId ? "" : String(d.studyId)),
				n(d.sessionId),
				n(String(d.sequence)),
				n(d.eventHash ?? ""),
				n(d.previousHash ?? ""),
				n(null === e ? "" : JSON.stringify(e)),
				n(t?.basis ?? "unanchored"),
				n(void 0 === t ? "" : Ot(t.state)),
				n(void 0 === t || "unanchored" === t.basis ? "" : JSON.stringify(t.state))
			].join(","));
		}
		return new Blob([`${c.join("\n")}\n`], { type: "text/csv;charset=utf-8" });
	}
	async verifyAuditChain(t, n) {
		const i = await Qe();
		return {
			...await un(i),
			total_rows: i.length,
			rows_for_view: i.filter((i) => e.isRecordInView(i, t, n)).length
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
		const i = t.signalRequest, a = t.computeIdentity, s = t.evidence, r = t.evidenceDb, o = this.complexitySignalGenerationByFile.get(e);
		if (o?.token === t.token) return await o.promise;
		const l = (async () => {
			const n = () => this.complexitySnapshotByFile.get(e) ?? null, o = () => {
				const i = n();
				if (!i || i.token !== t.token) return i;
				const a = {
					...i,
					signalRequest: null
				};
				return this.publishComplexitySnapshot(e, a), a;
			};
			try {
				const l = b(), c = await l.getComputeIdentity();
				if (!Pu(a, c)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), o();
				const u = await l.computeFileSignals(i), d = await l.getComputeIdentity();
				if (!Pu(a, d)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), o();
				if (!Bu(u.byDate, JSON.parse(i[0]).days)) throw new Error("The local scoring runtime returned incomplete night-signal evidence.");
				if (this.disposed) throw new Error("The local workspace changed before night-signal evidence could be saved.");
				const p = n();
				if (!p) return null;
				if (p.token !== t.token) return p;
				if (p.signalsByDate) return p;
				const m = await async function(e, t = E(), n) {
					(!Number.isInteger(e.fileId) || e.fileId <= 0) && Tc(), zc(e.generationKey);
					const i = Rc(e.signalsByDate), a = await Ec(i);
					return tu(a, e.signalsResultSha256), dn([t.files, t.complexityEvidence], async () => {
						const n = await t.complexityEvidence.where("[fileId+generationKey]").equals([e.fileId, e.generationKey]).first();
						if (!n) throw new xc();
						const s = await f.waitFor(iu(n));
						if (au(s, await t.files.get(s.fileId)), null !== s.signalsResultSha256) {
							if (s.signalsResultSha256 !== a) throw new Nc();
							return {
								record: s,
								disposition: "deduplicated",
								evicted: 0
							};
						}
						const r = new Date(Math.max(Date.now(), Date.parse(s.createdAt))).toISOString(), o = {
							...s,
							signalsByDate: i,
							signalsResultSha256: a,
							updatedAt: r
						}, l = await f.waitFor(eu(o)), c = await f.waitFor(nu({
							...o,
							recordSha256: l
						}));
						return await t.complexityEvidence.put(c), await su(c, "signals_enriched", 0), {
							record: c,
							disposition: "signals_enriched",
							evicted: 0
						};
					}, t, n);
				}({
					fileId: e,
					generationKey: s.generationKey,
					signalsByDate: u.byDate
				}, r), h = n();
				if (!h) return null;
				if (h.token !== t.token) return h;
				if (h.signalsByDate) return h;
				const g = {
					...h,
					signalRequest: null,
					projectionInput: ed(m.record),
					difficultyByDate: td(m.record),
					signalsByDate: nd(m.record),
					computeIdentity: m.record.runtimeIdentity,
					projectionRevision: Xu(m.record),
					evidence: Qu(m.record)
				};
				return this.publishComplexitySnapshot(e, g), g;
			} catch {
				return console.warn("[local-data-source] Full night-signal detail is temporarily unavailable; showing the retained difficulty result."), n();
			}
		})();
		this.complexitySignalGenerationByFile.set(e, {
			token: t.token,
			promise: l
		});
		try {
			return await l;
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
				const i = await ot(e), a = i?.availableDates?.includes(t) ? [...new Set(i.availableDates)].sort() : [t];
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
			plot_intervals: Cu(r ?? void 0, s ?? void 0, t, i?.projectionRevision ?? void 0)
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
			!1 !== i.datesStatus && oa(e, ["dates-status", t]), oa(e, ["local-dates-status", t]), !1 !== i.fileQuality && oa(e, ["file-quality"]), oa(e, ["analysis-summary"]), oa(e, ["adjacent-markers"]), oa(e, [
				"audit-log",
				t,
				n
			]), oa(e, ["actogram-markers", t]), oa(e, [
				"night-stored-variant",
				t,
				n
			]), oa(e, ["local-export-file-stats"]), oa(e, ["local-export-circadian-coverage"]), function() {
				aa += 1;
				for (const e of sa) e();
			}();
		})(i, e, t, {
			datesStatus: !p,
			fileQuality: !1
		});
		const f = c ?? E();
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
		const l = r ?? E(), c = ni(l, {
			username: n || "anonymous",
			studyId: pt.getState().selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, o);
		return await Ft({
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
			oa(e, o);
		});
	}
	async patchDateStatus(e, t, n) {
		const { fileId: i, date: a, username: s, workspaceScope: r } = t;
		for (const o of e.getQueryCache().findAll({ queryKey: ["dates-status", i] })) {
			const t = o.queryKey, l = o.state.data;
			if (t[2] === this.sourceKey && (t[3] !== r || t[4] !== (s || "anonymous"))) continue;
			if (o.state.isInvalidated) continue;
			if (!o.isActive()) {
				oa(e, t);
				continue;
			}
			const c = t[4], u = o.state.dataUpdatedAt;
			try {
				if (!l || t[2] !== this.sourceKey || "string" != typeof c) throw new Error("not a local status list");
				const s = await ad(i, a, c, n);
				if (o.state.dataUpdatedAt !== u) continue;
				e.setQueryData(t, (e) => e?.map((e) => e.date === a ? {
					...e,
					...s
				} : e));
			} catch {
				oa(e, t);
			}
		}
	}
	async ingestFile(e, t, n) {
		const { processLocalFile: i } = await import("./local-processing-EGFg6gsz.js"), a = pt.getState(), s = this.operationProcessingOptions, r = s?.devicePreset ?? a.devicePreset, o = s?.skipRows ?? a.skipRows, l = s?.choiAxis ?? a.choiAxis, c = s?.columnMapping ?? a.columnMapping, u = s?.countEpochSeconds ?? (30 === a.epochLengthSeconds ? 30 : 60);
		e.name.toLowerCase().endsWith(".csv") && r && "actigraph" !== r && "geneactiv" !== r && Mu(r, c);
		const d = E(), p = await i(e, r ?? "actigraph", o ?? 10, t, l ?? "vector_magnitude", c, n, {
			...s ? {} : Ye(a),
			countEpochSeconds: u,
			sleepPeriodDetectionConfig: qt(a.sleepPeriodDetection),
			...this.operationProcessingOptions
		});
		return p.alreadyImported || (dd(p.fileId, d, void 0, n), pd(p.fileId, d, n)), p;
	}
	async loadDailyGgirSummary(e, t) {
		return (t ? await Ae(e, t) : await ve(e)).map(Eu);
	}
};
function Sd(e, t, n) {
	return Id([e], t, n);
}
function Id(e, t, n, i) {
	const a = `${A.PLACEMENT}:${e.map(String).join(":")}`;
	return q({
		kind: A.PLACEMENT,
		key: a,
		label: "Store marker placement",
		workspaceId: t.name,
		signal: n,
		rerun: !0,
		run: async (n) => {
			if (D(t.name)) return;
			const { captureLocalScoringSettings: s, scoringSettingsForScope: r, autoScoreOptionsFromSettings: o } = await import("./scoped-scoring-settings-BBC4PNJp.js"), l = {
				sourceKey: "local",
				workspaceId: null,
				actor: "anonymous",
				studyId: null
			}, c = new kd();
			try {
				n.signal.throwIfAborted();
				const [a, u] = await Promise.all([Ze(t), Fe([...e], t)]), d = s(l, a ?? null), p = u.map((e) => {
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
				if (D(t.name)) return;
				throw n.signal.throwIfAborted(), M.getState().update(`${t.name}:${a}`, { visible: !0 }), u;
			}
		}
	});
}
function Ad(e, t) {
	return q({
		kind: A.PLACEMENT_RECOVERY,
		key: A.PLACEMENT_RECOVERY,
		label: "Resume marker placement",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			const { recoverPendingGgirRecomputes: n } = await import("./local-export-shard-worker-BTR6svpv.js").then((e) => e.a);
			await n(e, t.signal);
			const i = await e.transaction("r", e.projectMeta, async () => {
				const [t, n] = await Promise.all([e.projectMeta.get(Tt), e.projectMeta.get(kt)]);
				return {
					completed: void 0 !== t,
					generation: n?.revision ?? 0
				};
			}), { backfillInterruptedScoredVariantWarms: a } = await import("./cube-variants-BPq8unrb.js");
			if (i.completed) await a(e, { signal: t.signal });
			else {
				for (const n of await Pe(e)) {
					if (E() !== e) return;
					null != n.id && "incomplete" !== n.ingestState && (await Sd(n.id, e, t.signal), await t.yieldNow());
				}
				E() === e && (await a(e, { signal: t.signal }), E() === e && await ge(e, [e.projectMeta], async () => {
					const t = await e.projectMeta.get(kt);
					E() === e && (t?.revision ?? 0) === i.generation && await e.projectMeta.put({
						key: Tt,
						revision: 1
					});
				}, t.signal));
			}
		}
	});
}
export { Ti as A, ui as B, qi as C, Ci as D, $i as E, wi as F, li as H, hi as I, ki as L, Ai as M, xi as N, ji as O, Ni as P, pi as R, Ji as S, zi as T, si as U, ci as V, Ui as _, oc as a, Zi as b, yc as c, Xi as d, Ki as f, Pi as g, Oi as h, lu as i, Li as j, Ei as k, Yi as l, Hi as m, du as n, mc as o, na as p, ou as r, rc as s, Tu as t, Qi as u, Gi as v, Wi as w, Mi as x, Bi as y, di as z };
