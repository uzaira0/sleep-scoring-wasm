import { On as t, Qt as n, Tn as i, Zt as a, _t as s, b as r, en as o, gn as l, gt as c, h as u, jt as d, nn as p, p as f, qt as m, tn as h, x as g } from "./schema-B0CR2EpS.js";
import { i as y, n as w, r as _, s as v } from "./workers-D4og5Jak.js";
import { A as b, F as k, G as S, I, J as A, O as x, P as $, W as T, Z as N, r as z, s as D, t as R } from "./workspace-db-CwhwLMaR.js";
import { l as M, r as E } from "./legacy-invalid-night-zjKZRSNb.js";
import { a as O } from "./content-hash-SuSXU120.js";
import { _ as C, d as F, l as P, m as j, n as B, o as q, t as Z } from "./background-jobs-BvDFFUGv.js";
import { a as G, i as H, n as J } from "./api-errors-BdS5Sib6.js";
import { C as L, S as W, T as U, _ as V, a as K, b as Y, c as X, d as Q, f as ee, g as te, h as ne, i as ie, j as ae, l as se, m as re, n as oe, p as le, s as ce, t as ue, u as de, w as pe, x as fe, y as me } from "./nonwear-display-slots-3gROIlhe.js";
import { a as he } from "./project-revision-D6MjEMMu.js";
import { A as ge, At as ye, B as we, D as _e, Dt as ve, E as be, Et as ke, F as Se, Ft as Ie, G as Ae, Gt as xe, Ht as $e, I as Te, It as Ne, L as ze, Lt as De, M as Re, Mt as Me, N as Ee, Nt as Oe, O as Ce, Ot as Fe, P as Pe, Pt as je, R as Be, T as qe, Tt as Ze, V as Ge, Vt as He, Xt as Je, Zt as Le, _t as We, b as Ue, en as Ve, f as Ke, gt as Ye, i as Xe, j as Qe, jt as et, kt as tt, lt as nt, mt as it, nn as at, o as st, pt as rt, qt as ot, tn as lt, tt as ct, ut, v as dt, vt as pt, w as ft, wt as mt, x as ht, y as gt, z as yt, zt as wt } from "./store-DvfXJTpe.js";
import { D as _t, H as vt, M as bt, N as kt, O as St, P as It, R as At, S as xt, V as $t, b as Tt, h as Nt, j as zt, u as Dt, v as Rt, x as Mt, y as Et } from "./night-session-registry-pVArsQh2.js";
import { C as Ot, a as Ct, c as Ft, f as Pt, o as jt, p as Bt, s as qt } from "./sleep-period-detection-BnH8xZoy.js";
import { t as Zt } from "./audit-log-mBb24FKg.js";
import { r as Gt } from "./audit-hash-BmEZRNJA.js";
import { i as Ht, t as Jt } from "./wal-BtQRMETY.js";
import { y as Lt } from "./ggir-results-import-DD2olz8s.js";
import { B as Wt, C as Ut, D as Vt, E as Kt, G as Yt, H as Xt, I as Qt, L as en, S as tn, T as nn, U as an, V as sn, W as rn, b as on, c as ln, d as cn, h as un, k as dn, l as pn, m as fn, n as mn, p as hn, q as gn, s as yn, t as wn, v as _n, w as vn, x as bn, z as kn } from "./local-nonwear-unified-DPuDqwyk.js";
import { c as Sn, h as In, i as An, s as xn, t as $n } from "./valid-day-criteria-CIJnTk0q.js";
import { _ as Tn, f as Nn, p as zn } from "./diary-local-import-contract-tz7cH6WX.js";
import { n as Dn, s as Rn, t as Mn } from "./csv-column-mapping-BSSY09yh.js";
import { D as En, E as On, O as Cn, T as Fn, c as Pn, d as jn, f as Bn, h as qn, k as Zn, l as Gn, m as Hn, o as Jn, p as Ln, s as Wn, u as Un } from "./local-export-shard-worker-CRWHMs-Y.js";
import { i as Vn, r as Kn } from "./night-session-XOgVcrVz.js";
const Yn = "Review Data Settings > CSV Settings before opening this file.";
function Xn(e) {
	return `Column-mapped CSV mapping could not be applied: ${e.map((e) => e.message).join(" ")} ${Yn}`;
}
const Qn = {
	[h.RULE_1_INCLUDE_ACTIVITY]: "Included mid-sleep wake activity (continuous sleep follows)",
	[h.RULE_2_SMALL_PERIODS]: "Evaluated a small sleep period near onset",
	[h.RULE_3_EXTEND_BEFORE_DIARY]: "Extended onset backward through sleep preceding the diary marker",
	[h.RULE_4_NAP_VARIATION]: "Marked a long continuous block as a nap",
	[h.RULE_5_CHOI_SPIKE]: "Tolerated Choi-only nonwear (activity spike present in period)",
	[h.RULE_6_EQUIDISTANT]: "Chose between multiple candidate boundaries",
	[h.RULE_7_CROSS_DAY_NONWEAR]: "Applied cross-day diary nonwear pattern",
	[h.RULE_8_ONSET_BEFORE_INBED]: "Clamped onset to diary in-bed time (onset reported before in-bed)",
	[h.RULE_9_NAP_REGULARITY]: "Placed nap from this child's cross-day nap regularity (no diary nap logged)",
	[h.RULE_10_REGULARITY_OVERRIDE]: "Re-centered the sleep window on this child's cross-day sleep regularity",
	[h.RULE_11_RELIABILITY_FALLBACK]: "Diary unreliable for this night — anchored to accelerometry instead"
};
function ei(e) {
	const t = e.replace(/^rule_\d+_/, "").replace(/_/g, " ").trim();
	return 0 === t.length ? e : t.charAt(0).toUpperCase() + t.slice(1);
}
function ti(e) {
	return Yt(e, _);
}
async function ni(e) {
	return lt((await Se(e))?.extraSettings);
}
async function ii(e, t = _()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
async function ai(e, t = $n, n) {
	const i = await Z(n).validWearDays(Float64Array.from(e), t);
	return Array.from(i, (e) => 0 !== e);
}
async function si(e, t = $n, n) {
	return Z(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
}
Object.fromEntries(Object.values(h).map((e) => [e, Qn[e] ?? ei(e)]));
const ri = s.filter((e) => "sleep_wake" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds
})), oi = new Map(ri.map((e) => [e.id, e])), li = [
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
	const t = new Set(ri.map((e) => e.id)), n = e.filter((e) => !t.has(e));
	if (n.length > 0) throw new Error(`LEGACY_COVERED_SLEEP_WAKE_IDS contains ids that are not sleep/wake method contracts (LinkML drift?): ${n.join(", ")}`);
})(li);
const ci = new Set(li), ui = ri.filter((e) => !(e.needsModel || ci.has(e.id) || "counts_axis_y" !== e.requiredSignal && "consensus_majority_vote" !== e.id)).map((e) => e.id);
for (const Gu of ui) if (!k(Gu)) throw new Error(`unified sleep/wake method ${Gu} is not a declared AlgorithmRunKey (core.yaml)`);
function di(e) {
	return {
		sleepWake: null,
		conformance: "needs_30s_epoch",
		available: !1,
		reason: `${e}: 30 s-native scorer is not run on the 60 s grid (feeding it 60 s counts would miscalibrate it); its native scoring is the exploratory 30 s cube surface.`,
		elementSeconds: 30
	};
}
function pi(e) {
	return 30 === (t = e, oi.get(t))?.nativeEpochSeconds ? {
		kind: "gate_needs_30s_epoch",
		response: di(e)
	} : { kind: "score60s" };
	var t;
}
function fi(e) {
	const { counts: t } = e, n = {
		algorithm: e.algorithm,
		signals: {
			counts: t instanceof Float64Array ? t : Float64Array.from(t),
			epochSeconds: e.epochSeconds
		}
	};
	return e.postprocessing && (n.postprocessing = e.postprocessing), e.config && (n.config = e.config), n;
}
function mi(e, t) {
	if (!e.available || !e.sleepWake) return null;
	if (t > 0 && e.sleepWake.length !== t) return null;
	const n = new Uint8Array(e.sleepWake.length);
	for (let i = 0; i < e.sleepWake.length; i++) n[i] = e.sleepWake[i] ? 1 : 0;
	return n;
}
function hi(e, t) {
	const n = {};
	for (const [i, a] of e) {
		const e = mi(a, t);
		e && (n[i] = e);
	}
	return n;
}
function gi(e, t) {
	if (0 === e.length) return [];
	const n = [0];
	for (let i = 1; i < e.length; i++) Math.abs(e[i] - e[i - 1] - t) > .001 && n.push(i);
	return n.map((t, i) => ({
		start: t,
		end: n[i + 1] ?? e.length
	}));
}
async function yi(e, t, n, i = yn, a = () => {
	y(e);
}) {
	const s = /* @__PURE__ */ new Map(), r = Math.min(t.x.length, t.y.length, t.z.length);
	if (0 === r || t.sampleRate <= 0) return s;
	const o = i.filter((e) => !on(e)?.needsModel);
	if (0 === o.length) return s;
	const l = new Float64Array(3 * r);
	for (let u = 0; u < r; u++) l[3 * u] = t.x[u], l[3 * u + 1] = t.y[u], l[3 * u + 2] = t.z[u];
	F(n, `before detectNonwearUnifiedBatch(${o.join(",")})`);
	const c = await q(e, (e) => e.detectNonwearUnifiedBatch(o, {
		raw: l,
		sampleRate: t.sampleRate,
		epochSeconds: t.epochSeconds
	}), {
		ms: P,
		label: `detectNonwearUnifiedBatch(${o.join(",")})`,
		signal: n,
		cancel: a
	}).catch((e) => (j(e, n, `detectNonwearUnifiedBatch(${o.join(",")})`), console.warn("[local-processing] A raw-signal nonwear batch failed."), null));
	if (c) for (const [u, d] of Object.entries(c)) s.set(u, d);
	return s;
}
async function wi(e, t, n, i, a, s = mn, r = () => {
	y(e);
}) {
	const o = {}, l = s.filter((e) => !on(e)?.needsModel);
	if (0 === l.length) return o;
	const c = n.map((e) => t[e]).filter((e) => void 0 !== e), u = [], d = new Float64Array(c.reduce((e, t) => e + t.axisY.length, 0));
	let p = 0;
	for (const g of c) X(u, g.timestamps), d.set(g.axisY, p), p += g.axisY.length;
	const f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
	for (const { start: g, end: y } of gi(u, i)) {
		const t = d.slice(g, y);
		if (0 === t.length) continue;
		F(a, "before count nonwear continuous run");
		const n = await q(e, (e) => e.detectNonwearUnifiedBatch(l, {
			counts: t,
			epochSeconds: i
		}), {
			ms: P,
			label: "count nonwear continuous run",
			signal: a,
			cancel: r
		}).catch((e) => (j(e, a, "count nonwear continuous run"), console.warn("[local-processing] A count-based nonwear batch failed for one contiguous run."), null));
		for (const [a, s] of Object.entries(n ?? {})) {
			if (!s.available || !s.nonwear?.length) {
				f.has(a) || f.set(a, s);
				continue;
			}
			const t = await Ut(s, {
				baseTsSec: u[g],
				epochTimestampsSec: u.slice(g, y),
				epochLenSec: i
			}, e), n = f.get(a)?.nonwear ?? new Uint8Array(u.length);
			n.set(t, g), f.set(a, {
				...s,
				nonwear: n,
				elementSeconds: i
			}), m.set(a, (m.get(a) ?? 0) + t.length);
		}
	}
	let h = 0;
	for (const g of n) {
		const e = t[g]?.timestamps.length ?? 0;
		0 !== e && (o[g] = new Map([...f].map(([t, n]) => {
			const i = m.get(t) === u.length;
			return [t, {
				...n,
				available: i,
				nonwear: i ? n.nonwear.slice(h, h + e) : null
			}];
		})), h += e);
	}
	return o;
}
function _i(e) {
	return null == e ? {} : { [m.OAKLEY_1997]: { oakleyThreshold: e } };
}
async function vi(e, t, n, i, a, s, r, o = () => {
	y(e);
}, l = {}) {
	if (0 === ui.length) return;
	const c = i.flatMap((e) => n[e]?.timestamps ?? []), u = Float64Array.from(i.flatMap((e) => n[e]?.axisY ?? [])), d = {}, p = /* @__PURE__ */ new Map();
	for (const { start: h, end: g } of gi(c, a)) {
		const t = u.slice(h, g);
		if (!t || 0 === t.length) continue;
		const n = /* @__PURE__ */ new Map();
		for (const c of ui) {
			const i = pi(c);
			if ("gate_needs_30s_epoch" === i.kind) {
				n.set(c, i.response);
				continue;
			}
			F(s, `before scoreEpochs(${c} continuous)`);
			const u = await q(e, (e) => e.scoreEpochs(fi({
				algorithm: c,
				counts: t,
				epochSeconds: a,
				...r ? { postprocessing: r } : {},
				...l[c] ? { config: l[c] } : {}
			})), {
				ms: P,
				label: `scoreEpochs(${c} continuous)`,
				signal: s,
				cancel: o
			}).catch((e) => (j(e, s, `scoreEpochs(${c} continuous)`), console.warn("[local-processing] A descriptor-driven sleep/wake scorer failed for one contiguous run."), null));
			u && n.set(c, u);
		}
		const i = hi(n, t.length);
		for (const [e, a] of Object.entries(i)) {
			const t = d[e] ?? new Uint8Array(c.length);
			t.set(a, h), d[e] = t, p.set(e, (p.get(e) ?? 0) + a.length);
		}
	}
	const f = Object.entries(d).filter(([e]) => p.get(e) === c.length);
	let m = 0;
	for (const h of i) {
		const e = n[h], i = t[h];
		if (!e) continue;
		const a = m + e.timestamps.length;
		i && (i.unifiedSleepWake = Object.fromEntries(f.map(([e, t]) => [e, t.slice(m, a)]))), m = a;
	}
}
function bi(e, t) {
	return {
		vector_magnitude: e.vectorMagnitude,
		axis_y: e.axisY,
		axis_x: e.axisX,
		axis_z: e.axisZ
	}[t];
}
async function ki(e, t, n, i, a, s, r) {
	if (!e || !t || 0 === e.timestamps.byteLength) return;
	if ("counts_axis_y" !== on(t)?.requiredSignal) return;
	if (nn(e, t, n)) return;
	const o = new Float64Array(e.timestamps), l = a ?? Z(s), c = await rt(o, 60, l);
	let u;
	try {
		const a = [...(await Ue(e.fileId, i, r)).values()];
		if (wn.includes(t)) {
			const t = a.filter((e) => e.timestamps.byteLength > 0 && bi(e, n)).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), i = t.findIndex((t) => t.date === e.date);
			if (i < 0) return;
			let r = i, d = i;
			const p = (e, t) => {
				const n = new Float64Array(e.timestamps), i = new Float64Array(t.timestamps);
				return Math.abs(i[0] - n[n.length - 1] - c) < .001;
			};
			for (; r > 0 && p(t[r - 1], t[r]);) r--;
			for (; d + 1 < t.length && p(t[d], t[d + 1]);) d++;
			const f = t.slice(r, d + 1), m = f.slice(0, i - r).reduce((e, t) => e + t.timestamps.byteLength / 8, 0), h = f.map((e) => new Float64Array(bi(e, n))), g = new Float64Array(h.reduce((e, t) => e + t.length, 0));
			let y = 0;
			for (const e of h) g.set(e, y), y += e.length;
			if (0 === g.byteLength) return;
			s?.throwIfAborted();
			const w = await l.detectNonwear(g, c);
			s?.throwIfAborted();
			const _ = await l.detectNonwearChoi2011(g, c);
			u = {
				nonwearResults: w.slice(m, m + o.length).buffer,
				nonwearResultsChoi2011: _.slice(m, m + o.length).buffer,
				nonwearChoiAxis: n
			};
		} else {
			s?.throwIfAborted();
			const n = a.filter((e) => e.timestamps.byteLength > 0 && e.axisY.byteLength > 0).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), i = (await wi(l, Object.fromEntries(n.map((e) => [e.date, {
				timestamps: new Float64Array(e.timestamps),
				axisY: new Float64Array(e.axisY)
			}])), n.map((e) => e.date), c, s, [t]))[e.date]?.get(t);
			if (!i?.available) return;
			const r = await pn(/* @__PURE__ */ new Map([[t, i]]), {
				baseTsSec: o[0] ?? 0,
				epochTimestampsSec: Array.from(o),
				epochLenSec: c
			}, l);
			if (!r.unifiedNonwearMasks?.[t]) return;
			u = {
				...r,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					...r.unifiedNonwearMasks
				}
			};
		}
	} catch {
		s?.throwIfAborted(), console.warn("[local-processing] A missing nonwear mask could not be computed from stored counts.");
		return;
	}
	s?.throwIfAborted(), await Ae(e.fileId, e.date, u, i, s), s?.throwIfAborted(), Object.assign(e, u);
}
async function Si(e, t, n, i, a, s = () => {
	y(e);
}) {
	const r = n.flatMap((e) => t[e].timestamps), o = Float64Array.from(n.flatMap((e) => t[e].axisY)), l = Float64Array.from(n.flatMap((e) => t[e].choiAxis ?? t[e].vectorMagnitude)), c = gi(r, i), u = await q(e, (e) => e.scoreAllDays(c.map(({ start: e, end: t }) => ({
		activityF64: o.slice(e, t),
		vmF64: l.slice(e, t),
		epochSeconds: i
	}))), {
		ms: P,
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
		const n = await q(e, (e) => e.detectNonwearChoi2011(l.slice(h.start, h.end), i), {
			ms: P,
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
function Ii(e, t) {
	return "number" == typeof e && "number" == typeof t && e !== t;
}
A();
let Ai = 0;
const xi = /* @__PURE__ */ new Set();
function $i(e, t, n) {
	if (n) {
		const e = qt(n);
		if (!Ct(e)) return jt(e);
	}
	return t ?? o.SMART;
}
function Ti(e, t) {
	e.invalidateQueries({ queryKey: t }).catch((e) => {
		Le("warn", "Query invalidation failed", {
			...Je(e),
			query_key: t.map(String).join(":")
		});
	});
}
async function Ni(e, t, n) {
	const i = n ? await n.wearSiteHasptRouting(e, t ?? void 0) : await at("wearSiteHasptRouting", `${e}:${t ?? ""}`, () => _().wearSiteHasptRouting(e, t ?? void 0));
	return {
		sensorLocation: i.sensorLocation,
		variant: i.variant,
		requiresLongitudinalAxis: i.requiresLongitudinalAxis,
		routedByWearSite: null == t
	};
}
var zi;
function Di(e, t, n) {
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
var Ri = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, Mi = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(zi = globalThis).__zod_globalConfig ?? (zi.__zod_globalConfig = {});
const Ei = globalThis.__zod_globalConfig;
function Oi(e) {
	return e && Object.assign(Ei, e), Ei;
}
function Ci(e) {
	const t = Object.values(e).filter((e) => "number" == typeof e);
	return Object.entries(e).filter(([e, n]) => -1 === t.indexOf(+e)).map(([e, t]) => t);
}
function Fi(e, t) {
	return "bigint" == typeof t ? t.toString() : t;
}
function Pi(e) {
	return { get value() {
		{
			const t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function ji(e) {
	return null == e;
}
function Bi(e) {
	const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
const qi = Symbol("evaluating");
function Zi(e, t, n) {
	let i;
	Object.defineProperty(e, t, {
		get() {
			if (i !== qi) return void 0 === i && (i = qi, i = n()), i;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function Gi(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function Hi(...e) {
	const t = {};
	for (const n of e) {
		const e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Ji(e) {
	return JSON.stringify(e);
}
const Li = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Wi(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
const Ui = Pi(() => {
	if (Ei.jitless) return !1;
	if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return new Function(""), !0;
	} catch (e) {
		return !1;
	}
});
function Vi(e) {
	if (!1 === Wi(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	if ("function" != typeof t) return !0;
	const n = t.prototype;
	return !1 !== Wi(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function Ki(e) {
	return Vi(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const Yi = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
function Xi(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Qi(e, t, n) {
	const i = new e._zod.constr(t ?? e._zod.def);
	return t && !n?.parent || (i._zod.parent = e), i;
}
function ea(e) {
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
const ta = {
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function na(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!0 !== e.issues[n]?.continue) return !0;
	return !1;
}
function ia(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!1 === e.issues[n]?.continue) return !0;
	return !1;
}
function aa(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function sa(e) {
	return "string" == typeof e ? e : e?.message;
}
function ra(e, t, n) {
	const i = e.message ? e.message : sa(e.inst?._zod.def?.error?.(e)) ?? sa(t?.error?.(e)) ?? sa(n.customError?.(e)) ?? sa(n.localeError?.(e)) ?? "Invalid input", { inst: a, continue: s, input: r, ...o } = e;
	return o.path ?? (o.path = []), o.message = i, t?.reportInput && (o.input = r), o;
}
function oa(e) {
	return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function la(...e) {
	const [t, n, i] = e;
	return "string" == typeof t ? {
		message: t,
		code: "custom",
		input: n,
		inst: i
	} : { ...t };
}
const ca = (e, t) => {
	e.name = "$ZodError", Object.defineProperty(e, "_zod", {
		value: e._zod,
		enumerable: !1
	}), Object.defineProperty(e, "issues", {
		value: t,
		enumerable: !1
	}), e.message = JSON.stringify(t, Fi, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, ua = Di("$ZodError", ca), da = Di("$ZodError", ca, { Parent: Error }), pa = (e) => (t, n, i, a) => {
	const s = i ? {
		...i,
		async: !1
	} : { async: !1 }, r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise) throw new Ri();
	if (r.issues.length) {
		const t = new ((a?.Err) ?? e)(r.issues.map((e) => ra(e, s, Oi())));
		throw Li(t, a?.callee), t;
	}
	return r.value;
}, fa = (e) => async (t, n, i, a) => {
	const s = i ? {
		...i,
		async: !0
	} : { async: !0 };
	let r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise && (r = await r), r.issues.length) {
		const t = new ((a?.Err) ?? e)(r.issues.map((e) => ra(e, s, Oi())));
		throw Li(t, a?.callee), t;
	}
	return r.value;
}, ma = (e) => (t, n, i) => {
	const a = i ? {
		...i,
		async: !1
	} : { async: !1 }, s = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (s instanceof Promise) throw new Ri();
	return s.issues.length ? {
		success: !1,
		error: new (e ?? ua)(s.issues.map((e) => ra(e, a, Oi())))
	} : {
		success: !0,
		data: s.value
	};
}, ha = ma(da), ga = (e) => async (t, n, i) => {
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
		error: new e(s.issues.map((e) => ra(e, a, Oi())))
	} : {
		success: !0,
		data: s.value
	};
}, ya = ga(da), wa = (e) => (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return pa(e)(t, n, a);
}, _a = (e) => (t, n, i) => pa(e)(t, n, i), va = (e) => async (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return fa(e)(t, n, a);
}, ba = (e) => async (t, n, i) => fa(e)(t, n, i), ka = (e) => (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return ma(e)(t, n, a);
}, Sa = (e) => (t, n, i) => ma(e)(t, n, i), Ia = (e) => async (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return ga(e)(t, n, a);
}, Aa = (e) => async (t, n, i) => ga(e)(t, n, i), xa = /^[cC][0-9a-z]{6,}$/, $a = /^[0-9a-z]+$/, Ta = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Na = /^[0-9a-vA-V]{20}$/, za = /^[A-Za-z0-9]{27}$/, Da = /^[a-zA-Z0-9_-]{21}$/, Ra = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Ma = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ea = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Oa = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Ca = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Fa = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Pa = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, ja = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ba = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, qa = /^[A-Za-z0-9_-]*$/, Za = /^https?$/, Ga = /^\+[1-9]\d{6,14}$/, Ha = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Ja = new RegExp(`^${Ha}$`);
function La(e) {
	const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return "number" == typeof e.precision ? -1 === e.precision ? `${t}` : 0 === e.precision ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
const Wa = /^-?\d+$/, Ua = /^-?\d+(?:\.\d+)?$/, Va = /^(?:true|false)$/i, Ka = /^[^A-Z]*$/, Ya = /^[^a-z]*$/, Xa = Di("$ZodCheck", (e, t) => {
	var n;
	e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Qa = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, es = Di("$ZodCheckLessThan", (e, t) => {
	Xa.init(e, t);
	const n = Qa[typeof t.value];
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
}), ts = Di("$ZodCheckGreaterThan", (e, t) => {
	Xa.init(e, t);
	const n = Qa[typeof t.value];
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
}), ns = Di("$ZodCheckMultipleOf", (e, t) => {
	Xa.init(e, t), e._zod.onattach.push((e) => {
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
}), is = Di("$ZodCheckNumberFormat", (e, t) => {
	Xa.init(e, t), t.format = t.format || "float64";
	const n = t.format?.includes("int"), i = n ? "int" : "number", [a, s] = ta[t.format];
	e._zod.onattach.push((e) => {
		const i = e._zod.bag;
		i.format = t.format, i.minimum = a, i.maximum = s, n && (i.pattern = Wa);
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
}), as = Di("$ZodCheckMaxLength", (e, t) => {
	var n;
	Xa.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !ji(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		const i = n.value;
		if (i.length <= t.maximum) return;
		const a = oa(i);
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
}), ss = Di("$ZodCheckMinLength", (e, t) => {
	var n;
	Xa.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !ji(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		const i = n.value;
		if (i.length >= t.minimum) return;
		const a = oa(i);
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
}), rs = Di("$ZodCheckLengthEquals", (e, t) => {
	var n;
	Xa.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !ji(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		const i = n.value, a = i.length;
		if (a === t.length) return;
		const s = oa(i), r = a > t.length;
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
}), os = Di("$ZodCheckStringFormat", (e, t) => {
	var n, i;
	Xa.init(e, t), e._zod.onattach.push((e) => {
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
}), ls = Di("$ZodCheckRegex", (e, t) => {
	os.init(e, t), e._zod.check = (n) => {
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
}), cs = Di("$ZodCheckLowerCase", (e, t) => {
	t.pattern ?? (t.pattern = Ka), os.init(e, t);
}), us = Di("$ZodCheckUpperCase", (e, t) => {
	t.pattern ?? (t.pattern = Ya), os.init(e, t);
}), ds = Di("$ZodCheckIncludes", (e, t) => {
	Xa.init(e, t);
	const n = Xi(t.includes), i = new RegExp("number" == typeof t.position ? `^.{${t.position}}${n}` : n);
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
}), ps = Di("$ZodCheckStartsWith", (e, t) => {
	Xa.init(e, t);
	const n = new RegExp(`^${Xi(t.prefix)}.*`);
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
}), fs = Di("$ZodCheckEndsWith", (e, t) => {
	Xa.init(e, t);
	const n = new RegExp(`.*${Xi(t.suffix)}$`);
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
}), ms = Di("$ZodCheckOverwrite", (e, t) => {
	Xa.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
});
var hs = class {
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
const gs = {
	major: 4,
	minor: 4,
	patch: 3
}, ys = Di("$ZodType", (e, t) => {
	var n;
	e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = gs;
	const i = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && i.unshift(e);
	for (const a of i) for (const t of a._zod.onattach) t(e);
	if (0 === i.length) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		const t = (e, t, n) => {
			let i, a = na(e);
			for (const s of t) {
				if (s._zod.def.when) {
					if (ia(e)) continue;
					if (!s._zod.def.when(e)) continue;
				} else if (a) continue;
				const t = e.issues.length, r = s._zod.check(e);
				if (r instanceof Promise && !1 === n?.async) throw new Ri();
				if (i || r instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await r, e.issues.length !== t && (a || (a = na(e, t)));
				});
				else {
					if (e.issues.length === t) continue;
					a || (a = na(e, t));
				}
			}
			return i ? i.then(() => e) : e;
		}, n = (n, a, s) => {
			if (na(n)) return n.aborted = !0, n;
			const r = t(a, i, s);
			if (r instanceof Promise) {
				if (!1 === s.async) throw new Ri();
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
				if (!1 === s.async) throw new Ri();
				return r.then((e) => t(e, i, s));
			}
			return t(r, i, s);
		};
	}
	Zi(e, "~standard", () => ({
		validate: (t) => {
			try {
				const n = ha(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch (n) {
				return ya(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), ws = Di("$ZodString", (e, t) => {
	var n;
	ys.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? (n = e._zod.bag, new RegExp(`^${n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*"}$`)), e._zod.parse = (n, i) => {
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
}), _s = Di("$ZodStringFormat", (e, t) => {
	os.init(e, t), ws.init(e, t);
}), vs = Di("$ZodGUID", (e, t) => {
	t.pattern ?? (t.pattern = Ma), _s.init(e, t);
}), bs = Di("$ZodUUID", (e, t) => {
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
		t.pattern ?? (t.pattern = Ea(e));
	} else t.pattern ?? (t.pattern = Ea());
	_s.init(e, t);
}), ks = Di("$ZodEmail", (e, t) => {
	t.pattern ?? (t.pattern = Oa), _s.init(e, t);
}), Ss = Di("$ZodURL", (e, t) => {
	_s.init(e, t), e._zod.check = (n) => {
		try {
			const i = n.value.trim();
			if (!t.normalize && t.protocol?.source === Za.source && !/^https?:\/\//i.test(i)) return void n.issues.push({
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
}), Is = Di("$ZodEmoji", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), _s.init(e, t);
}), As = Di("$ZodNanoID", (e, t) => {
	t.pattern ?? (t.pattern = Da), _s.init(e, t);
}), xs = Di("$ZodCUID", (e, t) => {
	t.pattern ?? (t.pattern = xa), _s.init(e, t);
}), $s = Di("$ZodCUID2", (e, t) => {
	t.pattern ?? (t.pattern = $a), _s.init(e, t);
}), Ts = Di("$ZodULID", (e, t) => {
	t.pattern ?? (t.pattern = Ta), _s.init(e, t);
}), Ns = Di("$ZodXID", (e, t) => {
	t.pattern ?? (t.pattern = Na), _s.init(e, t);
}), zs = Di("$ZodKSUID", (e, t) => {
	t.pattern ?? (t.pattern = za), _s.init(e, t);
}), Ds = Di("$ZodISODateTime", (e, t) => {
	t.pattern ?? (t.pattern = function(e) {
		const t = La({ precision: e.precision }), n = ["Z"];
		e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const i = `${t}(?:${n.join("|")})`;
		return new RegExp(`^${Ha}T(?:${i})$`);
	}(t)), _s.init(e, t);
}), Rs = Di("$ZodISODate", (e, t) => {
	t.pattern ?? (t.pattern = Ja), _s.init(e, t);
}), Ms = Di("$ZodISOTime", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp(`^${La(t)}$`)), _s.init(e, t);
}), Es = Di("$ZodISODuration", (e, t) => {
	t.pattern ?? (t.pattern = Ra), _s.init(e, t);
}), Os = Di("$ZodIPv4", (e, t) => {
	t.pattern ?? (t.pattern = Ca), _s.init(e, t), e._zod.bag.format = "ipv4";
}), Cs = Di("$ZodIPv6", (e, t) => {
	t.pattern ?? (t.pattern = Fa), _s.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
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
}), Fs = Di("$ZodCIDRv4", (e, t) => {
	t.pattern ?? (t.pattern = Pa), _s.init(e, t);
}), Ps = Di("$ZodCIDRv6", (e, t) => {
	t.pattern ?? (t.pattern = ja), _s.init(e, t), e._zod.check = (n) => {
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
function js(e) {
	if ("" === e) return !0;
	if (/\s/.test(e)) return !1;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
const Bs = Di("$ZodBase64", (e, t) => {
	t.pattern ?? (t.pattern = Ba), _s.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		js(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), qs = Di("$ZodBase64URL", (e, t) => {
	t.pattern ?? (t.pattern = qa), _s.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		(function(e) {
			if (!qa.test(e)) return !1;
			const t = e.replace(/[-_]/g, (e) => "-" === e ? "+" : "/");
			return js(t.padEnd(4 * Math.ceil(t.length / 4), "="));
		})(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Zs = Di("$ZodE164", (e, t) => {
	t.pattern ?? (t.pattern = Ga), _s.init(e, t);
}), Gs = Di("$ZodJWT", (e, t) => {
	_s.init(e, t), e._zod.check = (n) => {
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
}), Hs = Di("$ZodNumber", (e, t) => {
	ys.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Ua, e._zod.parse = (n, i) => {
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
}), Js = Di("$ZodNumberFormat", (e, t) => {
	is.init(e, t), Hs.init(e, t);
}), Ls = Di("$ZodBoolean", (e, t) => {
	ys.init(e, t), e._zod.pattern = Va, e._zod.parse = (n, i) => {
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
}), Ws = Di("$ZodUnknown", (e, t) => {
	ys.init(e, t), e._zod.parse = (e) => e;
}), Us = Di("$ZodNever", (e, t) => {
	ys.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function Vs(e, t, n) {
	e.issues.length && t.issues.push(...aa(n, e.issues)), t.value[n] = e.value;
}
const Ks = Di("$ZodArray", (e, t) => {
	ys.init(e, t), e._zod.parse = (n, i) => {
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
			o instanceof Promise ? s.push(o.then((t) => Vs(t, n, e))) : Vs(o, n, e);
		}
		return s.length ? Promise.all(s).then(() => n) : n;
	};
});
function Ys(e, t, n, i, a, s) {
	const r = n in i;
	if (e.issues.length) {
		if (a && s && !r) return;
		t.issues.push(...aa(n, e.issues));
	}
	r || a ? void 0 === e.value ? r && (t.value[n] = void 0) : t.value[n] = e.value : e.issues.length || t.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: void 0,
		path: [n]
	});
}
function Xs(e) {
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
function Qs(e, t, n, i, a, s) {
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
		a instanceof Promise ? e.push(a.then((e) => Ys(e, n, p, t, u, d))) : Ys(a, n, p, t, u, d);
	}
	return r.length && n.issues.push({
		code: "unrecognized_keys",
		keys: r,
		input: t,
		inst: s
	}), e.length ? Promise.all(e).then(() => n) : n;
}
const er = Di("$ZodObject", (e, t) => {
	if (ys.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		const e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			const n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	const n = Pi(() => Xs(t));
	Zi(e._zod, "propValues", () => {
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
	const i = Wi, a = t.catchall;
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
			s instanceof Promise ? l.push(s.then((n) => Ys(n, t, e, o, i, a))) : Ys(s, t, e, o, i, a);
		}
		return a ? Qs(l, o, t, r, n.value, e) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), tr = Di("$ZodObjectJIT", (e, t) => {
	er.init(e, t);
	const n = e._zod.parse, i = Pi(() => Xs(t));
	let a;
	const s = Wi, r = !Ei.jitless, o = r && Ui.value, l = t.catchall;
	let c;
	e._zod.parse = (u, d) => {
		c ?? (c = i.value);
		const p = u.value;
		return s(p) ? r && o && !1 === d?.async && !0 !== d.jitless ? (a || (a = ((e) => {
			const t = new hs([
				"shape",
				"payload",
				"ctx"
			]), n = i.value, a = (e) => {
				const t = Ji(e);
				return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
			};
			t.write("const input = payload.value;");
			const s = Object.create(null);
			let r = 0;
			for (const i of n.keys) s[i] = "key_" + r++;
			t.write("const newResult = {};");
			for (const i of n.keys) {
				const n = s[i], r = Ji(i), o = e[i], l = "optional" === o?._zod?.optin, c = "optional" === o?._zod?.optout;
				t.write(`const ${n} = ${a(i)};`), l && c ? t.write(`\n        if (${n}.issues.length) {\n          if (${r} in input) {\n            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [${r}, ...iss.path] : [${r}]\n            })));\n          }\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : l ? t.write(`\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : t.write(`\n        const ${n}_present = ${r} in input;\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        if (!${n}_present && !${n}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${r}]\n          });\n        }\n\n        if (${n}_present) {\n          if (${n}.value === undefined) {\n            newResult[${r}] = undefined;\n          } else {\n            newResult[${r}] = ${n}.value;\n          }\n        }\n\n      `);
			}
			t.write("payload.value = newResult;"), t.write("return payload;");
			const o = t.compile();
			return (t, n) => o(e, t, n);
		})(t.shape)), u = a(u, d), l ? Qs([], p, u, d, c, e) : u) : n(u, d) : (u.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), u);
	};
});
function nr(e, t, n, i) {
	for (const s of e) if (0 === s.issues.length) return t.value = s.value, t;
	const a = e.filter((e) => !na(e));
	return 1 === a.length ? (t.value = a[0].value, a[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => ra(e, i, Oi())))
	}), t);
}
const ir = Di("$ZodUnion", (e, t) => {
	ys.init(e, t), Zi(e._zod, "optin", () => t.options.some((e) => "optional" === e._zod.optin) ? "optional" : void 0), Zi(e._zod, "optout", () => t.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0), Zi(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), Zi(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			const e = t.options.map((e) => e._zod.pattern);
			return new RegExp(`^(${e.map((e) => Bi(e.source)).join("|")})$`);
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
		return s ? Promise.all(r).then((t) => nr(t, i, e, a)) : nr(r, i, e, a);
	};
}), ar = Di("$ZodIntersection", (e, t) => {
	ys.init(e, t), e._zod.parse = (e, n) => {
		const i = e.value, a = t.left._zod.run({
			value: i,
			issues: []
		}, n), s = t.right._zod.run({
			value: i,
			issues: []
		}, n);
		return a instanceof Promise || s instanceof Promise ? Promise.all([a, s]).then(([t, n]) => rr(e, t, n)) : rr(e, a, s);
	};
});
function sr(e, t) {
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (e instanceof Date && t instanceof Date && +e === +t) return {
		valid: !0,
		data: e
	};
	if (Vi(e) && Vi(t)) {
		const n = Object.keys(t), i = Object.keys(e).filter((e) => -1 !== n.indexOf(e)), a = {
			...e,
			...t
		};
		for (const s of i) {
			const n = sr(e[s], t[s]);
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
			const a = sr(e[i], t[i]);
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
function rr(e, t, n) {
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
	}), na(e)) return e;
	const r = sr(t.value, n.value);
	if (!r.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
	return e.value = r.data, e;
}
const or = Di("$ZodRecord", (e, t) => {
	ys.init(e, t), e._zod.parse = (n, i) => {
		const a = n.value;
		if (!Vi(a)) return n.issues.push({
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
						issues: r.issues.map((e) => ra(e, i, Oi())),
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
					e.issues.length && n.issues.push(...aa(c, e.issues)), n.value[l] = e.value;
				})) : (u.issues.length && n.issues.push(...aa(c, u.issues)), n.value[l] = u.value);
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
				if ("string" == typeof r && Ua.test(r) && o.issues.length) {
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
						issues: o.issues.map((e) => ra(e, i, Oi())),
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
					e.issues.length && n.issues.push(...aa(r, e.issues)), n.value[o.value] = e.value;
				})) : (l.issues.length && n.issues.push(...aa(r, l.issues)), n.value[o.value] = l.value);
			}
		}
		return s.length ? Promise.all(s).then(() => n) : n;
	};
}), lr = Di("$ZodEnum", (e, t) => {
	ys.init(e, t);
	const n = Ci(t.entries), i = new Set(n);
	e._zod.values = i, e._zod.pattern = new RegExp(`^(${n.filter((e) => Yi.has(typeof e)).map((e) => "string" == typeof e ? Xi(e) : e.toString()).join("|")})$`), e._zod.parse = (t, a) => {
		const s = t.value;
		return i.has(s) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: s,
			inst: e
		}), t;
	};
}), cr = Di("$ZodTransform", (e, t) => {
	ys.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, i) => {
		if ("backward" === i.direction) throw new Mi(e.constructor.name);
		const a = t.transform(n.value, n);
		if (i.async) return (a instanceof Promise ? a : Promise.resolve(a)).then((e) => (n.value = e, n.fallback = !0, n));
		if (a instanceof Promise) throw new Ri();
		return n.value = a, n.fallback = !0, n;
	};
});
function ur(e, t) {
	return void 0 === t && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e;
}
const dr = Di("$ZodOptional", (e, t) => {
	ys.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Zi(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), Zi(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${Bi(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if ("optional" === t.innerType._zod.optin) {
			const i = e.value, a = t.innerType._zod.run(e, n);
			return a instanceof Promise ? a.then((e) => ur(e, i)) : ur(a, i);
		}
		return void 0 === e.value ? e : t.innerType._zod.run(e, n);
	};
}), pr = Di("$ZodExactOptional", (e, t) => {
	dr.init(e, t), Zi(e._zod, "values", () => t.innerType._zod.values), Zi(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), fr = Di("$ZodNullable", (e, t) => {
	ys.init(e, t), Zi(e._zod, "optin", () => t.innerType._zod.optin), Zi(e._zod, "optout", () => t.innerType._zod.optout), Zi(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${Bi(e.source)}|null)$`) : void 0;
	}), Zi(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => null === e.value ? e : t.innerType._zod.run(e, n);
}), mr = Di("$ZodDefault", (e, t) => {
	ys.init(e, t), e._zod.optin = "optional", Zi(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		if (void 0 === e.value) return e.value = t.defaultValue, e;
		const i = t.innerType._zod.run(e, n);
		return i instanceof Promise ? i.then((e) => hr(e, t)) : hr(i, t);
	};
});
function hr(e, t) {
	return void 0 === e.value && (e.value = t.defaultValue), e;
}
const gr = Di("$ZodPrefault", (e, t) => {
	ys.init(e, t), e._zod.optin = "optional", Zi(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => ("backward" === n.direction || void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), yr = Di("$ZodNonOptional", (e, t) => {
	ys.init(e, t), Zi(e._zod, "values", () => {
		const e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
	}), e._zod.parse = (n, i) => {
		const a = t.innerType._zod.run(n, i);
		return a instanceof Promise ? a.then((t) => wr(t, e)) : wr(a, e);
	};
});
function wr(e, t) {
	return e.issues.length || void 0 !== e.value || e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
const _r = Di("$ZodCatch", (e, t) => {
	ys.init(e, t), e._zod.optin = "optional", Zi(e._zod, "optout", () => t.innerType._zod.optout), Zi(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const i = t.innerType._zod.run(e, n);
		return i instanceof Promise ? i.then((i) => (e.value = i.value, i.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: i.issues.map((e) => ra(e, n, Oi())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e)) : (e.value = i.value, i.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: i.issues.map((e) => ra(e, n, Oi())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e);
	};
}), vr = Di("$ZodPipe", (e, t) => {
	ys.init(e, t), Zi(e._zod, "values", () => t.in._zod.values), Zi(e._zod, "optin", () => t.in._zod.optin), Zi(e._zod, "optout", () => t.out._zod.optout), Zi(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) {
			const i = t.out._zod.run(e, n);
			return i instanceof Promise ? i.then((e) => br(e, t.in, n)) : br(i, t.in, n);
		}
		const i = t.in._zod.run(e, n);
		return i instanceof Promise ? i.then((e) => br(e, t.out, n)) : br(i, t.out, n);
	};
});
function br(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues,
		fallback: e.fallback
	}, n);
}
const kr = Di("$ZodReadonly", (e, t) => {
	ys.init(e, t), Zi(e._zod, "propValues", () => t.innerType._zod.propValues), Zi(e._zod, "values", () => t.innerType._zod.values), Zi(e._zod, "optin", () => t.innerType?._zod?.optin), Zi(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const i = t.innerType._zod.run(e, n);
		return i instanceof Promise ? i.then(Sr) : Sr(i);
	};
});
function Sr(e) {
	return e.value = Object.freeze(e.value), e;
}
const Ir = Di("$ZodCustom", (e, t) => {
	Xa.init(e, t), ys.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		const i = n.value, a = t.fn(i);
		if (a instanceof Promise) return a.then((t) => Ar(t, n, i, e));
		Ar(a, n, i, e);
	};
});
function Ar(e, t, n, i) {
	if (!e) {
		const e = {
			code: "custom",
			input: n,
			inst: i,
			path: [...i._zod.def.path ?? []],
			continue: !i._zod.def.abort
		};
		i._zod.def.params && (e.params = i._zod.def.params), t.issues.push(la(e));
	}
}
var xr;
(xr = globalThis).__zod_globalRegistry ?? (xr.__zod_globalRegistry = new class {
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
const $r = globalThis.__zod_globalRegistry;
function Tr(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...ea(t)
	});
}
function Nr(e, t) {
	return new es({
		check: "less_than",
		...ea(t),
		value: e,
		inclusive: !1
	});
}
function zr(e, t) {
	return new es({
		check: "less_than",
		...ea(t),
		value: e,
		inclusive: !0
	});
}
function Dr(e, t) {
	return new ts({
		check: "greater_than",
		...ea(t),
		value: e,
		inclusive: !1
	});
}
function Rr(e, t) {
	return new ts({
		check: "greater_than",
		...ea(t),
		value: e,
		inclusive: !0
	});
}
function Mr(e, t) {
	return new ns({
		check: "multiple_of",
		...ea(t),
		value: e
	});
}
function Er(e, t) {
	return new as({
		check: "max_length",
		...ea(t),
		maximum: e
	});
}
function Or(e, t) {
	return new ss({
		check: "min_length",
		...ea(t),
		minimum: e
	});
}
function Cr(e, t) {
	return new rs({
		check: "length_equals",
		...ea(t),
		length: e
	});
}
function Fr(e) {
	return new ms({
		check: "overwrite",
		tx: e
	});
}
function Pr(e, t) {
	const n = new Xa({
		check: "custom",
		...ea(t)
	});
	return n._zod.check = e, n;
}
function jr(e) {
	let t = e?.target ?? "draft-2020-12";
	return "draft-4" === t && (t = "draft-04"), "draft-7" === t && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? $r,
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
function Br(e, t, n = {
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
		s && (r.ref || (r.ref = s), Br(s, t, i), t.seen.get(s).isParent = !0);
	}
	const l = t.metadataRegistry.get(e);
	return l && Object.assign(r.schema, l), "input" === t.io && Gr(e) && (delete r.schema.examples, delete r.schema.default), "input" === t.io && "_prefault" in r.schema && ((i = r.schema).default ?? (i.default = r.schema._prefault)), delete r.schema._prefault, t.seen.get(e).schema;
}
function qr(e, t) {
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
function Zr(e, t) {
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
					input: Hr(t, "input", e.processors),
					output: Hr(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch (o) {
		throw new Error("Error converting schema to JSON.");
	}
}
function Gr(e, t) {
	const n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	const i = e._zod.def;
	if ("transform" === i.type) return !0;
	if ("array" === i.type) return Gr(i.element, n);
	if ("set" === i.type) return Gr(i.valueType, n);
	if ("lazy" === i.type) return Gr(i.getter(), n);
	if ("promise" === i.type || "optional" === i.type || "nonoptional" === i.type || "nullable" === i.type || "readonly" === i.type || "default" === i.type || "prefault" === i.type) return Gr(i.innerType, n);
	if ("intersection" === i.type) return Gr(i.left, n) || Gr(i.right, n);
	if ("record" === i.type || "map" === i.type) return Gr(i.keyType, n) || Gr(i.valueType, n);
	if ("pipe" === i.type) return !!e._zod.traits.has("$ZodCodec") || Gr(i.in, n) || Gr(i.out, n);
	if ("object" === i.type) {
		for (const e in i.shape) if (Gr(i.shape[e], n)) return !0;
		return !1;
	}
	if ("union" === i.type) {
		for (const e of i.options) if (Gr(e, n)) return !0;
		return !1;
	}
	if ("tuple" === i.type) {
		for (const e of i.items) if (Gr(e, n)) return !0;
		return !(!i.rest || !Gr(i.rest, n));
	}
	return !1;
}
const Hr = (e, t, n = {}) => (i) => {
	const { libraryOptions: a, target: s } = i ?? {}, r = jr({
		...a ?? {},
		target: s,
		io: t,
		processors: n
	});
	return Br(e, r), qr(r, e), Zr(r, e);
}, Jr = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, Lr = (e, t, n, i) => {
	const a = e._zod.def;
	Br(a.innerType, t, i), t.seen.get(e).ref = a.innerType;
}, Wr = Di("ZodISODateTime", (e, t) => {
	Ds.init(e, t), wo.init(e, t);
});
const Ur = Di("ZodISODate", (e, t) => {
	Rs.init(e, t), wo.init(e, t);
});
const Vr = Di("ZodISOTime", (e, t) => {
	Ms.init(e, t), wo.init(e, t);
});
const Kr = Di("ZodISODuration", (e, t) => {
	Es.init(e, t), wo.init(e, t);
});
const Yr = (e, t) => {
	ua.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
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
			e.issues.push(t), e.message = JSON.stringify(e.issues, Fi, 2);
		} },
		addIssues: { value: (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, Fi, 2);
		} },
		isEmpty: { get: () => 0 === e.issues.length }
	});
}, Xr = Di("ZodError", Yr, { Parent: Error }), Qr = pa(Xr), eo = fa(Xr), to = ma(Xr), no = ga(Xr), io = wa(Xr), ao = _a(Xr), so = va(Xr), ro = ba(Xr), oo = ka(Xr), lo = Sa(Xr), co = Ia(Xr), uo = Aa(Xr), po = /* @__PURE__ */ new WeakMap();
function fo(e, t, n) {
	const i = Object.getPrototypeOf(e);
	let a = po.get(i);
	if (a || (a = /* @__PURE__ */ new Set(), po.set(i, a)), !a.has(t)) {
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
const mo = Di("ZodType", (e, t) => (ys.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: Hr(e, "input"),
	output: Hr(e, "output")
} }), e.toJSONSchema = ((e, t = {}) => (n) => {
	const i = jr({
		...n,
		processors: t
	});
	return Br(e, i), qr(i, e), Zr(i, e);
})(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (t, n) => Qr(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => to(e, t, n), e.parseAsync = async (t, n) => eo(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => no(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => io(e, t, n), e.decode = (t, n) => ao(e, t, n), e.encodeAsync = async (t, n) => so(e, t, n), e.decodeAsync = async (t, n) => ro(e, t, n), e.safeEncode = (t, n) => oo(e, t, n), e.safeDecode = (t, n) => lo(e, t, n), e.safeEncodeAsync = async (t, n) => co(e, t, n), e.safeDecodeAsync = async (t, n) => uo(e, t, n), fo(e, "ZodType", {
	check(...e) {
		const t = this.def;
		return this.clone(Hi(t, { checks: [...t.checks ?? [], ...e.map((e) => "function" == typeof e ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return Qi(this, e, t);
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
				return new yl({
					type: "custom",
					check: "custom",
					fn: t,
					...ea(n)
				});
			}(0, e, t);
		}(e, t));
	},
	superRefine(e, t) {
		return this.check(function(e, t) {
			return function(e, t) {
				const n = Pr((t) => (t.addIssue = (e) => {
					if ("string" == typeof e) t.issues.push(la(e, t.value, n._zod.def));
					else {
						const i = e;
						i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = t.value), i.inst ?? (i.inst = n), i.continue ?? (i.continue = !n._zod.def.abort), t.issues.push(la(i));
					}
				}, e(t.value, t)), t);
				return n;
			}(e, t);
		}(e, t));
	},
	overwrite(e) {
		return this.check(Fr(e));
	},
	optional() {
		return rl(this);
	},
	exactOptional() {
		return new ol({
			type: "optional",
			innerType: this
		});
	},
	nullable() {
		return cl(this);
	},
	nullish() {
		return rl(cl(this));
	},
	nonoptional(e) {
		return function(e, t) {
			return new pl({
				type: "nonoptional",
				innerType: e,
				...ea(t)
			});
		}(this, e);
	},
	array() {
		return Uo(this);
	},
	or(e) {
		return Xo([this, e]);
	},
	and(e) {
		return new Qo({
			type: "intersection",
			left: this,
			right: e
		});
	},
	transform(e) {
		return hl(this, new al({
			type: "transform",
			transform: e
		}));
	},
	default(e) {
		return t = e, new ul({
			type: "default",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Ki(t);
			}
		});
		var t;
	},
	prefault(e) {
		return t = e, new dl({
			type: "prefault",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Ki(t);
			}
		});
		var t;
	},
	catch(e) {
		return new fl({
			type: "catch",
			innerType: this,
			catchValue: "function" == typeof (t = e) ? t : () => t
		});
		var t;
	},
	pipe(e) {
		return hl(this, e);
	},
	readonly() {
		return new gl({
			type: "readonly",
			innerType: this
		});
	},
	describe(e) {
		const t = this.clone();
		return $r.add(t, { description: e }), t;
	},
	meta(...e) {
		if (0 === e.length) return $r.get(this);
		const t = this.clone();
		return $r.add(t, e[0]), t;
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
	get: () => $r.get(e)?.description,
	configurable: !0
}), e)), ho = Di("_ZodString", (e, t) => {
	ws.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n) => {
		const i = n;
		i.type = "string";
		const { minimum: a, maximum: s, format: r, patterns: o, contentEncoding: l } = e._zod.bag;
		if ("number" == typeof a && (i.minLength = a), "number" == typeof s && (i.maxLength = s), r && (i.format = Jr[r] ?? r, "" === i.format && delete i.format, "time" === r && delete i.format), l && (i.contentEncoding = l), o && o.size > 0) {
			const e = [...o];
			1 === e.length ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
				..."draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	})(e, t, n);
	const n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, fo(e, "_ZodString", {
		regex(...e) {
			return this.check(function(e, t) {
				return new ls({
					check: "string_format",
					format: "regex",
					...ea(t),
					pattern: e
				});
			}(...e));
		},
		includes(...e) {
			return this.check(function(e, t) {
				return new ds({
					check: "string_format",
					format: "includes",
					...ea(t),
					includes: e
				});
			}(...e));
		},
		startsWith(...e) {
			return this.check(function(e, t) {
				return new ps({
					check: "string_format",
					format: "starts_with",
					...ea(t),
					prefix: e
				});
			}(...e));
		},
		endsWith(...e) {
			return this.check(function(e, t) {
				return new fs({
					check: "string_format",
					format: "ends_with",
					...ea(t),
					suffix: e
				});
			}(...e));
		},
		min(...e) {
			return this.check(Or(...e));
		},
		max(...e) {
			return this.check(Er(...e));
		},
		length(...e) {
			return this.check(Cr(...e));
		},
		nonempty(...e) {
			return this.check(Or(1, ...e));
		},
		lowercase(e) {
			return this.check(function(e) {
				return new cs({
					check: "string_format",
					format: "lowercase",
					...ea(e)
				});
			}(e));
		},
		uppercase(e) {
			return this.check(function(e) {
				return new us({
					check: "string_format",
					format: "uppercase",
					...ea(e)
				});
			}(e));
		},
		trim() {
			return this.check(Fr((e) => e.trim()));
		},
		normalize(...e) {
			return this.check(function(e) {
				return Fr((t) => t.normalize(e));
			}(...e));
		},
		toLowerCase() {
			return this.check(Fr((e) => e.toLowerCase()));
		},
		toUpperCase() {
			return this.check(Fr((e) => e.toUpperCase()));
		},
		slugify() {
			return this.check(Fr((e) => function(e) {
				return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
			}(e)));
		}
	});
}), go = Di("ZodString", (e, t) => {
	ws.init(e, t), ho.init(e, t), e.email = (t) => e.check(function(e, t) {
		return new _o({
			type: "string",
			format: "email",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.url = (t) => e.check(function(e, t) {
		return new ko({
			type: "string",
			format: "url",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.jwt = (t) => e.check(function(e, t) {
		return new Fo({
			type: "string",
			format: "jwt",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.emoji = (t) => e.check(function(e, t) {
		return new So({
			type: "string",
			format: "emoji",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.guid = (t) => e.check(Tr(vo, t)), e.uuid = (t) => e.check(function(e, t) {
		return new bo({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.uuidv4 = (t) => e.check(function(e, t) {
		return new bo({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v4",
			...ea(t)
		});
	}(0, t)), e.uuidv6 = (t) => e.check(function(e, t) {
		return new bo({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v6",
			...ea(t)
		});
	}(0, t)), e.uuidv7 = (t) => e.check(function(e, t) {
		return new bo({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v7",
			...ea(t)
		});
	}(0, t)), e.nanoid = (t) => e.check(function(e, t) {
		return new Io({
			type: "string",
			format: "nanoid",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.guid = (t) => e.check(Tr(vo, t)), e.cuid = (t) => e.check(function(e, t) {
		return new Ao({
			type: "string",
			format: "cuid",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.cuid2 = (t) => e.check(function(e, t) {
		return new xo({
			type: "string",
			format: "cuid2",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.ulid = (t) => e.check(function(e, t) {
		return new $o({
			type: "string",
			format: "ulid",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.base64 = (t) => e.check(function(e, t) {
		return new Eo({
			type: "string",
			format: "base64",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.base64url = (t) => e.check(function(e, t) {
		return new Oo({
			type: "string",
			format: "base64url",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.xid = (t) => e.check(function(e, t) {
		return new To({
			type: "string",
			format: "xid",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.ksuid = (t) => e.check(function(e, t) {
		return new No({
			type: "string",
			format: "ksuid",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.ipv4 = (t) => e.check(function(e, t) {
		return new zo({
			type: "string",
			format: "ipv4",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.ipv6 = (t) => e.check(function(e, t) {
		return new Do({
			type: "string",
			format: "ipv6",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.cidrv4 = (t) => e.check(function(e, t) {
		return new Ro({
			type: "string",
			format: "cidrv4",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.cidrv6 = (t) => e.check(function(e, t) {
		return new Mo({
			type: "string",
			format: "cidrv6",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.e164 = (t) => e.check(function(e, t) {
		return new Co({
			type: "string",
			format: "e164",
			check: "string_format",
			abort: !1,
			...ea(t)
		});
	}(0, t)), e.datetime = (t) => e.check(function(e) {
		return function(e, t) {
			return new Wr({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: !1,
				local: !1,
				precision: null,
				...ea(t)
			});
		}(0, e);
	}(t)), e.date = (t) => e.check(function(e) {
		return function(e, t) {
			return new Ur({
				type: "string",
				format: "date",
				check: "string_format",
				...ea(t)
			});
		}(0, e);
	}(t)), e.time = (t) => e.check(function(e) {
		return function(e, t) {
			return new Vr({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...ea(t)
			});
		}(0, e);
	}(t)), e.duration = (t) => e.check(function(e) {
		return function(e, t) {
			return new Kr({
				type: "string",
				format: "duration",
				check: "string_format",
				...ea(t)
			});
		}(0, e);
	}(t));
});
function yo(e) {
	return function(e, t) {
		return new go({
			type: "string",
			...ea(t)
		});
	}(0, e);
}
const wo = Di("ZodStringFormat", (e, t) => {
	_s.init(e, t), ho.init(e, t);
}), _o = Di("ZodEmail", (e, t) => {
	ks.init(e, t), wo.init(e, t);
}), vo = Di("ZodGUID", (e, t) => {
	vs.init(e, t), wo.init(e, t);
}), bo = Di("ZodUUID", (e, t) => {
	bs.init(e, t), wo.init(e, t);
}), ko = Di("ZodURL", (e, t) => {
	Ss.init(e, t), wo.init(e, t);
}), So = Di("ZodEmoji", (e, t) => {
	Is.init(e, t), wo.init(e, t);
}), Io = Di("ZodNanoID", (e, t) => {
	As.init(e, t), wo.init(e, t);
}), Ao = Di("ZodCUID", (e, t) => {
	xs.init(e, t), wo.init(e, t);
}), xo = Di("ZodCUID2", (e, t) => {
	$s.init(e, t), wo.init(e, t);
}), $o = Di("ZodULID", (e, t) => {
	Ts.init(e, t), wo.init(e, t);
}), To = Di("ZodXID", (e, t) => {
	Ns.init(e, t), wo.init(e, t);
}), No = Di("ZodKSUID", (e, t) => {
	zs.init(e, t), wo.init(e, t);
}), zo = Di("ZodIPv4", (e, t) => {
	Os.init(e, t), wo.init(e, t);
}), Do = Di("ZodIPv6", (e, t) => {
	Cs.init(e, t), wo.init(e, t);
}), Ro = Di("ZodCIDRv4", (e, t) => {
	Fs.init(e, t), wo.init(e, t);
}), Mo = Di("ZodCIDRv6", (e, t) => {
	Ps.init(e, t), wo.init(e, t);
}), Eo = Di("ZodBase64", (e, t) => {
	Bs.init(e, t), wo.init(e, t);
}), Oo = Di("ZodBase64URL", (e, t) => {
	qs.init(e, t), wo.init(e, t);
}), Co = Di("ZodE164", (e, t) => {
	Zs.init(e, t), wo.init(e, t);
}), Fo = Di("ZodJWT", (e, t) => {
	Gs.init(e, t), wo.init(e, t);
}), Po = Di("ZodNumber", (e, t) => {
	Hs.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n) => {
		const i = n, { minimum: a, maximum: s, format: r, multipleOf: o, exclusiveMaximum: l, exclusiveMinimum: c } = e._zod.bag;
		"string" == typeof r && r.includes("int") ? i.type = "integer" : i.type = "number";
		const u = "number" == typeof c && c >= (a ?? Number.NEGATIVE_INFINITY), d = "number" == typeof l && l <= (s ?? Number.POSITIVE_INFINITY), p = "draft-04" === t.target || "openapi-3.0" === t.target;
		u ? p ? (i.minimum = c, i.exclusiveMinimum = !0) : i.exclusiveMinimum = c : "number" == typeof a && (i.minimum = a), d ? p ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : "number" == typeof s && (i.maximum = s), "number" == typeof o && (i.multipleOf = o);
	})(e, t, n), fo(e, "ZodNumber", {
		gt(e, t) {
			return this.check(Dr(e, t));
		},
		gte(e, t) {
			return this.check(Rr(e, t));
		},
		min(e, t) {
			return this.check(Rr(e, t));
		},
		lt(e, t) {
			return this.check(Nr(e, t));
		},
		lte(e, t) {
			return this.check(zr(e, t));
		},
		max(e, t) {
			return this.check(zr(e, t));
		},
		int(e) {
			return this.check(qo(e));
		},
		safe(e) {
			return this.check(qo(e));
		},
		positive(e) {
			return this.check(Dr(0, e));
		},
		nonnegative(e) {
			return this.check(Rr(0, e));
		},
		negative(e) {
			return this.check(Nr(0, e));
		},
		nonpositive(e) {
			return this.check(zr(0, e));
		},
		multipleOf(e, t) {
			return this.check(Mr(e, t));
		},
		step(e, t) {
			return this.check(Mr(e, t));
		},
		finite() {
			return this;
		}
	});
	const n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function jo(e) {
	return function(e, t) {
		return new Po({
			type: "number",
			checks: [],
			...ea(t)
		});
	}(0, e);
}
const Bo = Di("ZodNumberFormat", (e, t) => {
	Js.init(e, t), Po.init(e, t);
});
function qo(e) {
	return function(e, t) {
		return new Bo({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...ea(t)
		});
	}(0, e);
}
const Zo = Di("ZodBoolean", (e, t) => {
	Ls.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.type = "boolean";
	})(0, 0, t);
});
function Go(e) {
	return function(e, t) {
		return new Zo({
			type: "boolean",
			...ea(t)
		});
	}(0, e);
}
const Ho = Di("ZodUnknown", (e, t) => {
	Ws.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (e, t, n) => {};
});
function Jo() {
	return new Ho({ type: "unknown" });
}
const Lo = Di("ZodNever", (e, t) => {
	Us.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.not = {};
	})(0, 0, t);
});
const Wo = Di("ZodArray", (e, t) => {
	Ks.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = n, s = e._zod.def, { minimum: r, maximum: o } = e._zod.bag;
		"number" == typeof r && (a.minItems = r), "number" == typeof o && (a.maxItems = o), a.type = "array", a.items = Br(s.element, t, {
			...i,
			path: [...i.path, "items"]
		});
	})(e, t, n, i), e.element = t.element, fo(e, "ZodArray", {
		min(e, t) {
			return this.check(Or(e, t));
		},
		nonempty(e) {
			return this.check(Or(1, e));
		},
		max(e, t) {
			return this.check(Er(e, t));
		},
		length(e, t) {
			return this.check(Cr(e, t));
		},
		unwrap() {
			return this.element;
		}
	});
});
function Uo(e, t) {
	return function(e, t, n) {
		return new Wo({
			type: "array",
			element: t,
			...ea(n)
		});
	}(0, e, t);
}
const Vo = Di("ZodObject", (e, t) => {
	tr.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = n, s = e._zod.def;
		a.type = "object", a.properties = {};
		const r = s.shape;
		for (const c in r) a.properties[c] = Br(r[c], t, {
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
		l.size > 0 && (a.required = Array.from(l)), "never" === s.catchall?._zod.def.type ? a.additionalProperties = !1 : s.catchall ? s.catchall && (a.additionalProperties = Br(s.catchall, t, {
			...i,
			path: [...i.path, "additionalProperties"]
		})) : "output" === t.io && (a.additionalProperties = !1);
	})(e, t, n, i), Zi(e, "shape", () => t.shape), fo(e, "ZodObject", {
		keyof() {
			return il(Object.keys(this._zod.def.shape));
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
				catchall: Jo()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: Jo()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: function(e, t) {
					return new Lo({
						type: "never",
						...ea(t)
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
				if (!Vi(t)) throw new Error("Invalid input to extend: expected a plain object");
				const n = e._zod.def.checks;
				if (n && n.length > 0) {
					const n = e._zod.def.shape;
					for (const e in t) if (void 0 !== Object.getOwnPropertyDescriptor(n, e)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
				}
				return Qi(e, Hi(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return Gi(this, "shape", n), n;
				} }));
			}(this, e);
		},
		safeExtend(e) {
			return function(e, t) {
				if (!Vi(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
				return Qi(e, Hi(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return Gi(this, "shape", n), n;
				} }));
			}(this, e);
		},
		merge(e) {
			return function(e, t) {
				if (e._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
				return Qi(e, Hi(e._zod.def, {
					get shape() {
						const n = {
							...e._zod.def.shape,
							...t._zod.def.shape
						};
						return Gi(this, "shape", n), n;
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
				return Qi(e, Hi(e._zod.def, {
					get shape() {
						const e = {};
						for (const i in t) {
							if (!(i in n.shape)) throw new Error(`Unrecognized key: "${i}"`);
							t[i] && (e[i] = n.shape[i]);
						}
						return Gi(this, "shape", e), e;
					},
					checks: []
				}));
			}(this, e);
		},
		omit(e) {
			return function(e, t) {
				const n = e._zod.def, i = n.checks;
				if (i && i.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
				return Qi(e, Hi(e._zod.def, {
					get shape() {
						const i = { ...e._zod.def.shape };
						for (const e in t) {
							if (!(e in n.shape)) throw new Error(`Unrecognized key: "${e}"`);
							t[e] && delete i[e];
						}
						return Gi(this, "shape", i), i;
					},
					checks: []
				}));
			}(this, e);
		},
		partial(...e) {
			return function(e, t, n) {
				const i = t._zod.def.checks;
				if (i && i.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
				return Qi(t, Hi(t._zod.def, {
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
						return Gi(this, "shape", a), a;
					},
					checks: []
				}));
			}(sl, this, e[0]);
		},
		required(...e) {
			return t = pl, n = this, i = e[0], Qi(n, Hi(n._zod.def, { get shape() {
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
				return Gi(this, "shape", a), a;
			} }));
			var t, n, i;
		}
	});
});
function Ko(e, t) {
	const n = {
		type: "object",
		shape: e ?? {},
		...ea(t)
	};
	return new Vo(n);
}
const Yo = Di("ZodUnion", (e, t) => {
	ir.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = !1 === a.inclusive, r = a.options.map((e, n) => Br(e, t, {
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
function Xo(e, t) {
	return new Yo({
		type: "union",
		options: e,
		...ea(t)
	});
}
const Qo = Di("ZodIntersection", (e, t) => {
	ar.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = Br(a.left, t, {
			...i,
			path: [
				...i.path,
				"allOf",
				0
			]
		}), r = Br(a.right, t, {
			...i,
			path: [
				...i.path,
				"allOf",
				1
			]
		}), o = (e) => "allOf" in e && 1 === Object.keys(e).length;
		n.allOf = [...o(s) ? s.allOf : [s], ...o(r) ? r.allOf : [r]];
	})(e, t, n, i);
}), el = Di("ZodRecord", (e, t) => {
	or.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = n, s = e._zod.def;
		a.type = "object";
		const r = s.keyType, o = r._zod.bag?.patterns;
		if ("loose" === s.mode && o && o.size > 0) {
			const e = Br(s.valueType, t, {
				...i,
				path: [
					...i.path,
					"patternProperties",
					"*"
				]
			});
			a.patternProperties = {};
			for (const t of o) a.patternProperties[t.source] = e;
		} else "draft-07" !== t.target && "draft-2020-12" !== t.target || (a.propertyNames = Br(s.keyType, t, {
			...i,
			path: [...i.path, "propertyNames"]
		})), a.additionalProperties = Br(s.valueType, t, {
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
function tl(e, t, n) {
	return t && t._zod ? new el({
		type: "record",
		keyType: e,
		valueType: t,
		...ea(n)
	}) : new el({
		type: "record",
		keyType: yo(),
		valueType: e,
		...ea(t)
	});
}
const nl = Di("ZodEnum", (e, t) => {
	lr.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n) => {
		const i = Ci(e._zod.def.entries);
		i.every((e) => "number" == typeof e) && (n.type = "number"), i.every((e) => "string" == typeof e) && (n.type = "string"), n.enum = i;
	})(e, 0, n), e.enum = t.entries, e.options = Object.values(t.entries);
	const n = new Set(Object.keys(t.entries));
	e.extract = (e, i) => {
		const a = {};
		for (const s of e) {
			if (!n.has(s)) throw new Error(`Key ${s} not found in enum`);
			a[s] = t.entries[s];
		}
		return new nl({
			...t,
			checks: [],
			...ea(i),
			entries: a
		});
	}, e.exclude = (e, i) => {
		const a = { ...t.entries };
		for (const t of e) {
			if (!n.has(t)) throw new Error(`Key ${t} not found in enum`);
			delete a[t];
		}
		return new nl({
			...t,
			checks: [],
			...ea(i),
			entries: a
		});
	};
});
function il(e, t) {
	const n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new nl({
		type: "enum",
		entries: n,
		...ea(t)
	});
}
const al = Di("ZodTransform", (e, t) => {
	cr.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
	})(0, e), e._zod.parse = (n, i) => {
		if ("backward" === i.direction) throw new Mi(e.constructor.name);
		n.addIssue = (i) => {
			if ("string" == typeof i) n.issues.push(la(i, n.value, t));
			else {
				const t = i;
				t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), t.input ?? (t.input = n.value), t.inst ?? (t.inst = e), n.issues.push(la(t));
			}
		};
		const a = t.transform(n.value, n);
		return a instanceof Promise ? a.then((e) => (n.value = e, n.fallback = !0, n)) : (n.value = a, n.fallback = !0, n);
	};
}), sl = Di("ZodOptional", (e, t) => {
	dr.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => Lr(e, t, 0, i), e.unwrap = () => e._zod.def.innerType;
});
function rl(e) {
	return new sl({
		type: "optional",
		innerType: e
	});
}
const ol = Di("ZodExactOptional", (e, t) => {
	pr.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => Lr(e, t, 0, i), e.unwrap = () => e._zod.def.innerType;
}), ll = Di("ZodNullable", (e, t) => {
	fr.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = Br(a.innerType, t, i), r = t.seen.get(e);
		"openapi-3.0" === t.target ? (r.ref = a.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType;
});
function cl(e) {
	return new ll({
		type: "nullable",
		innerType: e
	});
}
const ul = Di("ZodDefault", (e, t) => {
	mr.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		Br(a.innerType, t, i), t.seen.get(e).ref = a.innerType, n.default = JSON.parse(JSON.stringify(a.defaultValue));
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
}), dl = Di("ZodPrefault", (e, t) => {
	gr.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		Br(a.innerType, t, i), t.seen.get(e).ref = a.innerType, "input" === t.io && (n._prefault = JSON.parse(JSON.stringify(a.defaultValue)));
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType;
}), pl = Di("ZodNonOptional", (e, t) => {
	yr.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		Br(a.innerType, t, i), t.seen.get(e).ref = a.innerType;
	})(e, t, 0, i), e.unwrap = () => e._zod.def.innerType;
}), fl = Di("ZodCatch", (e, t) => {
	_r.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		let s;
		Br(a.innerType, t, i), t.seen.get(e).ref = a.innerType;
		try {
			s = a.catchValue(void 0);
		} catch {
			throw new Error("Dynamic catch values are not supported in JSON Schema");
		}
		n.default = s;
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
}), ml = Di("ZodPipe", (e, t) => {
	vr.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = a.in._zod.traits.has("$ZodTransform"), r = "input" === t.io ? s ? a.out : a.in : a.out;
		Br(r, t, i), t.seen.get(e).ref = r;
	})(e, t, 0, i), e.in = t.in, e.out = t.out;
});
function hl(e, t) {
	return new ml({
		type: "pipe",
		in: e,
		out: t
	});
}
const gl = Di("ZodReadonly", (e, t) => {
	kr.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		Br(a.innerType, t, i), t.seen.get(e).ref = a.innerType, n.readOnly = !0;
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType;
}), yl = Di("ZodCustom", (e, t) => {
	Ir.init(e, t), mo.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
	})(0, e);
}), wl = il((_l = n, Object.values(_l)));
var _l;
Ko({
	password: yo(),
	username: yo().max(100, "Username must be 100 characters or fewer")
});
const vl = Ko({
	onset_timestamp: jo().nullable().optional(),
	offset_timestamp: jo().nullable().optional(),
	marker_index: jo().int().default(1),
	marker_type: wl.default(n.MAIN_SLEEP)
}), bl = Ko({
	start_timestamp: jo().nullable().optional(),
	end_timestamp: jo().nullable().optional(),
	marker_index: jo().int().default(1)
}), kl = (Ko({
	sleep_markers: Uo(vl).optional().default([]),
	nonwear_markers: Uo(bl).optional().default([]),
	explicit_no_nonwear: Go().optional().default(!1),
	is_invalid_night: Go().optional().default(!1),
	needs_consensus: Go().optional().default(!1),
	notes: yo().nullable().optional(),
	sleep_period_detection_config: tl(yo(), Jo()).nullable().optional()
}), Ko({
	timestamps: Uo(jo()).optional().default([]),
	axis_x: Uo(jo()).optional().default([]),
	axis_y: Uo(jo()).optional().default([]),
	axis_z: Uo(jo()).optional().default([]),
	vector_magnitude: Uo(jo()).optional().default([]),
	temperature: Uo(jo()).optional().default([]),
	lux: Uo(jo()).optional().default([]),
	melanopic_lux: Uo(jo()).optional().default([]),
	ggir_timestamps: Uo(jo()).optional().default([]),
	ggir_enmo: Uo(jo()).optional().default([]),
	ggir_anglez: Uo(jo()).optional().default([]),
	ggir_sib: Uo(jo()).optional().default([]),
	timestamps_30s: Uo(jo()).optional().default([]),
	axis_x_30s: Uo(jo()).optional().default([]),
	axis_y_30s: Uo(jo()).optional().default([]),
	axis_z_30s: Uo(jo()).optional().default([]),
	vector_magnitude_30s: Uo(jo()).optional().default([])
})), Sl = Ko({
	resolution_id: yo(),
	epoch_length_seconds: jo().int().positive(),
	category: yo(),
	source_type: yo().nullable().optional(),
	derived_from_resolution_id: yo().nullable().optional(),
	aggregation_method: yo().nullable().optional(),
	data: kl,
	algorithm_results: Uo(jo()).nullable().optional(),
	nonwear_results: Uo(jo()).nullable().optional()
}), Il = (Ko({
	data: kl.optional(),
	epoch_resolutions: Uo(Sl).optional().default([]),
	timestamps: Uo(jo()).optional(),
	axis_x: Uo(jo()).optional(),
	axis_y: Uo(jo()).optional(),
	axis_z: Uo(jo()).optional(),
	vector_magnitude: Uo(jo()).optional(),
	temperature: Uo(jo()).optional(),
	algorithm_results: Uo(jo()).nullable().optional(),
	nonwear_results: Uo(jo()).nullable().optional(),
	nonwear_results_choi_2011: Uo(jo()).nullable().optional(),
	event_markers: Uo(Xo([jo(), Go()])).optional().default([]),
	event_marker_timestamps: Uo(jo()).optional().default([]),
	view_start: jo().nullable().optional(),
	view_end: jo().nullable().optional(),
	sensor_nonwear_periods: Uo(Ko({
		start_timestamp: jo(),
		end_timestamp: jo()
	})).optional().default([]),
	device_nonwear_source: il([
		"gt3x_capsense",
		"detach_nonwear",
		"actiware_off_wrist",
		"uploaded_wear_sensor"
	]).nullable().optional(),
	algorithmic_nonwear_masks: tl(yo(), Uo(jo())).optional()
}), c.diary_tolerance_minutes, c.nap_min_consecutive_epochs, c.epoch_length_seconds, [
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
]), Al = Il.filter((e) => "observed" !== e && "technically_unusable" !== e && "corrupt" !== e), xl = [
	"insufficient_still_windows",
	"required_calibration_evidence_unavailable",
	"calibration_evidence_unusable"
];
function $l(e, t, n, i) {
	const a = (/* @__PURE__ */ new Date()).toISOString(), s = function(e, t) {
		if (!e) return null;
		const n = function(e) {
			const t = [], { resolution_id: n, factory_parameters_availability: i, factory_parameters_artifact: a, auto_calibration_availability: s, auto_calibration_execution: r, selected_source: o, fallback_source: l, fallback_reason: c, fallback_policy_execution: u, refusal: d } = e;
			/\S/.test(n) || t.push("resolution_id must be non-blank"), Il.includes(i) || t.push(`factory_parameters_availability '${i}' is not an ObservationAvailability`), Il.includes(s) || t.push(`auto_calibration_availability '${s}' is not an ObservationAvailability`);
			const p = [
				o,
				l,
				d
			].filter((e) => void 0 !== e).length;
			if (1 !== p && t.push(`exactly one of selected_source/fallback_source/refusal is required, found ${String(p)}`), "observed" === i && void 0 === a && t.push("observed factory_parameters requires factory_parameters_artifact"), "observed" !== i && void 0 !== a && t.push("non-observed factory_parameters must not carry factory_parameters_artifact"), "observed" === s && void 0 === r && t.push("observed auto_calibration requires auto_calibration_execution"), "observed" !== s && void 0 !== r && t.push("non-observed auto_calibration must not carry auto_calibration_execution"), "factory_parameters" === o && "observed" !== i && t.push("selected_source=factory_parameters requires observed factory evidence"), "auto_calibration" === o && "observed" !== s && t.push("selected_source=auto_calibration requires observed auto-calibration evidence"), void 0 === l || void 0 !== c && void 0 !== u || t.push("fallback_source requires fallback_reason and fallback_policy_execution"), void 0 !== l || void 0 === c && void 0 === u || t.push("fallback provenance is only allowed alongside fallback_source"), d) {
				xl.includes(d.code) || t.push(`refusal.code '${d.code}' is not a CalibrationRefusalCode`), "insufficient_still_windows" === d.code && ("auto_calibration" !== d.blocked_source && t.push("insufficient_still_windows must block auto_calibration"), "technically_unusable" !== d.availability && t.push("insufficient_still_windows must use availability technically_unusable")), "required_calibration_evidence_unavailable" !== d.code || Al.includes(d.availability) || t.push(`required_calibration_evidence_unavailable cannot use availability '${d.availability}'`), "calibration_evidence_unusable" === d.code && "technically_unusable" !== d.availability && "corrupt" !== d.availability && t.push(`calibration_evidence_unusable cannot use availability '${d.availability}'`);
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
const Tl = "Re-import this file to compute GGIR's invalid mask.", Nl = "Hip HDCZA needs the longitudinal angle (anglex or angley), which this recording lacks on GGIR's grid; no night was placed.";
function zl(e) {
	return e.isInvalidNight || e.sleepMarkers.some((e) => function(e, t = !1) {
		return "auto" !== e.source || function(e, t = !1) {
			if (!0 === e.edited || t) return !0;
			const n = e.placement;
			return Ii(e.onsetTimestamp, n?.onset_timestamp) || Ii(e.offsetTimestamp, n?.offset_timestamp);
		}(e, t);
	}(e));
}
async function Dl(e, t, n, i) {
	return e.nightIntervalOverlap(t, n, Float64Array.from(i, ([e]) => e), Float64Array.from(i, ([, e]) => e), Float64Array.from(i, ([, , e]) => void 0 !== e && void 0 === e.unavailable ? e.weight : 0));
}
function Rl(e, t) {
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
async function Ml(e, t, n, i) {
	const a = i.map(async ([, , i]) => {
		if (!i?.memberFlags || !i.timestamps) return [];
		const { memberFlags: a } = i, s = await e.epochsOverlapping(Float64Array.from(i.timestamps).subarray(0, a.length), 60, t, n);
		return s ? e.nonwearContributors([...a], kn(i.detectors), s[0], s[1]) : [];
	});
	return kn([...new Set((await Promise.all(a)).flat())]);
}
async function El(e, t, n, i, a, s, r) {
	const o = ln(t, n), l = Object.fromEntries(Object.entries(o).map(([e, t]) => [e, new Uint8Array(t)])), c = await fn(a, l, {
		offPeriods: i,
		source: s
	}, {
		timestampsSec: e,
		epochLenSec: 60
	}, r);
	return null === c || 0 === e.length ? [] : "unavailable" in c ? [[
		e[0],
		e[e.length - 1] + 60,
		{
			detectors: [],
			weight: 0,
			unavailable: c.unavailable
		}
	]] : async function(e, t, n) {
		const i = await n.nonwearWeightRuns(Float64Array.from(t), Float64Array.from(e.weight), 60);
		if (!i) return [];
		const a = e.available.length > 1 ? {
			memberFlags: e.memberFlags,
			timestamps: t
		} : {};
		return [[
			i.dayStart,
			i.dayEnd,
			{
				detectors: e.available,
				weight: 0,
				dropped: e.dropped,
				...a
			}
		], ...i.starts.map((t, n) => [
			t,
			i.ends[n],
			{
				detectors: e.available,
				weight: i.weights[n]
			}
		])];
	}(c, e, r);
}
async function Ol(e, t, n = [], i = [], a = {}, s = null, r = _()) {
	const o = [], l = n.map(([e, t]) => ({
		startTimestamp: e,
		endTimestamp: t
	}));
	for (const [c, u] of Object.entries(e)) {
		const e = t[c]?.timestamps;
		e && 0 !== e.length && o.push(...await El(e, {
			nonwearResults: u.nonwear.buffer,
			nonwearResultsChoi2011: u.nonwearChoi2011?.buffer ?? null,
			detachNonwear: u.detachNonwear?.buffer ?? null,
			...a[c]
		}, "", l, i, s, r));
	}
	return o;
}
async function Cl(e, t, i, a = Nn, s) {
	return Tn((s) => {
		if (!e) return [];
		const r = [];
		for (const { start: o, end: l } of wt(e)) {
			if (!o || !l) continue;
			const e = s.resolveSpan(o, l, t, $.daytime, a);
			e && r.push({
				markerType: n.NAP,
				markerIndex: i + r.length + 1,
				onsetTimestamp: e[0],
				offsetTimestamp: e[1]
			});
		}
		return r;
	}, new zn(s));
}
function Fl(e) {
	const t = e instanceof Error ? e.message : "";
	return t.startsWith("runGgirPart3:") ? t : t.includes("timed out") ? `it timed out after ${String(P / 6e4)} minutes` : t.includes("is not a function") ? "this build's actours WASM has no runGgirPart3 export" : "the actours WASM runtime failed (out of memory or a Rust panic)";
}
async function Pl(e, t, i, a = [], s = /* @__PURE__ */ new Map(), r, o, l, c = "wrist", u = R(), d, p, f, h, g, w) {
	const v = u, b = o?.ggirConfig ?? await ni(v), k = t.length;
	if (0 === k) return null;
	const S = s.values().next().value;
	S && De(e, S.importMappingProvenance);
	const I = p ?? _(), A = f ?? (() => y(I)), x = await Ni(c, r?.variant, I), $ = x.variant, T = x.sensorLocation, N = {
		...l ?? {},
		haspt_variant: $,
		hdcza_proposal_revision: 6,
		ggir_config_sha256: b.sha256
	}, z = o?.angley5s, D = o?.anglex5s, M = z && z.length === k ? z : void 0, E = D && D.length === k ? D : void 0, O = o?.invalid5s?.length === k ? o.invalid5s : void 0, C = void 0 !== g && void 0 !== O;
	if (void 0 === O) return Tl;
	const B = "hip" === T && !M && !E;
	if (B && (console.warn("[local-processing] Hip HDCZA was skipped because no aligned longitudinal axis was available."), !C)) return Nl;
	let Z = !1;
	const G = o?.dstRuns ?? [], H = O, J = o?.activity5s?.length === k ? o.activity5s : void 0;
	F(d, "before local HASPT placement");
	const L = await q(I, (e) => e.runGgirPart3({
		anglez: t,
		ggirConfigCsv: b.csvText,
		hasibCounts: Ve(b.csvText, o?.zeroCrossings5s),
		...E ? { anglex: E } : {},
		...M ? { angley: M } : {},
		...J ? { enmo: J } : {},
		invalid: H,
		startTsEpochSec: i,
		hasptAlgo: $,
		...void 0 !== r?.config ? { hasptConfig: r.config } : {},
		..."hip" !== T || E && M ? {} : { longitudinalAxis: M ? 2 : 1 },
		...o?.timezone ? { timezone: o.timezone } : {}
	}), {
		ms: P,
		label: `local ${$} placement`,
		signal: d,
		cancel: A
	}).then((e) => ({
		result: e,
		failure: null
	}), (e) => (j(e, d, `local ${$} placement`), console.warn("[local-processing] GGIR Part 3 failed for this recording."), {
		result: null,
		failure: Fl(e)
	}));
	if (L.result && C && g(L.result.part3Sib5s), B) return Nl;
	if (!L.result) return `GGIR Part 3 (${$}) failed: ${L.failure}`;
	const W = L.result.part3SptNights, U = await I.ggirIndicesToWallClockMs(Uint32Array.from(W.flatMap((e) => [e.onsetIdx, e.wakeIdx])), 1e3 * i, [...G], o?.wallClockMs ? Float64Array.from(o.wallClockMs) : void 0), V = W.map((e, t) => ({
		onsetTimestamp: U[2 * t] / 1e3,
		offsetTimestamp: U[2 * t + 1] / 1e3,
		analysisDate: e.analysisDate
	}));
	for (const { onsetTimestamp: y, offsetTimestamp: _, analysisDate: R } of V) {
		F(d, "before local HASPT marker placement");
		const t = await zt(e, R, vt, m.VAN_HEES_2015, null, v);
		if (t && zl(t)) continue;
		const i = await Dl(I, y, _, a), r = Rl(i.seconds, a), o = 0 === r.available.length && 0 === r.dropped.length ? N : {
			...N,
			nonwear_detectors_available: r.available,
			nonwear_detectors_dropped: r.dropped.map(({ detector: e, reason: t }) => ({
				detector: e,
				reason: t
			}))
		}, u = hn(r.dropped, "ggir"), p = (e) => [e, ...u].join("; "), f = i.weightedFraction, g = f > 0 && r.available.length > 1 ? await Ml(I, y, _, a) : null, b = await Cl(s.get(R) ?? null, R, 1, Ne(e), I), k = Lt(null, c), S = [{
			markerType: n.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: y,
			offsetTimestamp: _
		}, ...b].map((e) => ({
			...e,
			source: "auto",
			settingsHash: k
		}));
		F(d, "before local HASPT marker persistence"), await Kn({
			signal: d,
			fileId: e,
			date: R,
			expected: Nt(t),
			username: "auto_score",
			sleepMarkers: S,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p(`${$} SPT: ${Dt(y)} → ${Dt(_)}` + (b.length > 0 ? `; ${b.length} diary nap(s)` : "") + (f > 0 ? `; selected-detector nonwear overlap ${Math.round(100 * f)}%` : "") + (g ? ` from ${cn(g, r.available.length)}` : "")),
			algorithm: m.VAN_HEES_2015,
			sleepPeriodDetectionConfig: o
		}, v, {
			...h ? { binding: h } : {},
			events: () => h ? [{
				action: "auto_score_applied",
				payload: $t({
					algorithm: m.VAN_HEES_2015,
					sleepPeriodDetection: l ?? null,
					sleepCount: 1,
					napCount: b.length,
					markers: S
				})
			}] : []
		}).then(() => !0, (e) => (j(e, d, "local HASPT marker persistence"), console.warn("[local-processing] HDCZA marker persistence failed."), Z = !0, !1)) && w?.(R);
	}
	return Z ? "one or more auto-marker writes failed" : null;
}
const jl = [
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
function Bl(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function ql(e) {
	return JSON.stringify(e);
}
function Zl(e) {
	const t = Bl(e.config), n = Bl(t?.signals) ?? t;
	return {
		...n ? { config: n } : {},
		days: e.days
	};
}
function Gl(e) {
	return JSON.stringify(Zl(e));
}
function Hl(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function Jl(e) {
	const t = Hl(e), n = t?.analysis_date, i = Hl(t?.intrinsic), a = i?.state;
	if (!t || "string" != typeof n || 0 === n.length || !i || "string" != typeof a || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(a)) return null;
	const s = i.score, r = i.verdict, o = i.infinite_reason, l = {}, c = [], u = t.per_guider;
	if (Array.isArray(u)) for (const h of u) {
		const e = Hl(h);
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
	const d = Hl(i.features), p = d && Array.isArray(d.feature_values) ? d : null, f = Hl(i.legacy_complexity_features) ?? (null === p ? d : null) ?? {}, m = t.computed_at;
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
const Ll = /^[0-9a-f]{64}$/;
var Wl = class extends Error {
	constructor(e = !1) {
		super(e ? "Stored complexity evidence failed integrity verification." : "Complexity evidence failed integrity verification."), this.name = "ComplexityEvidenceIntegrityError";
	}
}, Ul = class extends Error {
	constructor() {
		super("Complexity evidence diverged for an existing generation."), this.name = "ComplexityEvidenceDivergenceError";
	}
}, Vl = class extends Error {
	constructor() {
		super("Complexity evidence is older than the retained generation window."), this.name = "ComplexityEvidenceRetentionError";
	}
};
function Kl(e = !1) {
	throw new Wl(e);
}
function Yl(e) {
	"string" == typeof e && Ll.test(e) || Kl();
}
function Xl(e) {
	"string" == typeof e && 0 !== e.length && Number.isFinite(Date.parse(e)) || Kl();
}
function Ql(e) {
	if (null === e) return "null";
	switch (typeof e) {
		case "string":
		case "boolean": return JSON.stringify(e);
		case "number": return Number.isFinite(e) || Kl(), JSON.stringify(Object.is(e, -0) ? 0 : e);
		case "object": {
			if (Array.isArray(e)) {
				const t = [];
				for (let n = 0; n < e.length; n += 1) n in e || Kl(), t.push(Ql(e[n]));
				return `[${t.join(",")}]`;
			}
			const t = Object.getPrototypeOf(e);
			t !== Object.prototype && null !== t && Kl(), Object.getOwnPropertySymbols(e).length > 0 && Kl();
			const n = e, i = [];
			for (const e of Object.keys(n).sort()) {
				const t = Object.getOwnPropertyDescriptor(n, e);
				t && "value" in t && t.enumerable || Kl(), i.push(`${JSON.stringify(e)}:${Ql(t.value)}`);
			}
			return `{${i.join(",")}}`;
		}
		default: return Kl();
	}
}
function ec(e) {
	const t = Ql(e), n = JSON.parse(t);
	return (null == n || "object" != typeof n || Array.isArray(n)) && Kl(), n;
}
async function tc(e) {
	return O(Ql(e));
}
function nc(e) {
	const t = e;
	for (const i of [
		"contractVersion",
		"crateVersion",
		"target",
		"semanticProfile",
		"profileProofStatus",
		"temporalBasis"
	]) "string" == typeof t[i] && "" !== t[i] || Kl();
	null === t.sourceRevision || "string" == typeof t.sourceRevision && "" !== t.sourceRevision || Kl(), Yl(t.artifactSha256);
	const n = t.compiledFeatures;
	Array.isArray(n) && n.every((e) => "string" == typeof e && e.length > 0) || Kl(), Ql(e);
}
async function ic(e, t) {
	"string" != typeof e && Kl(), void 0 !== t && Yl(t);
	let n = 0;
	for (; n < e.length && /\s/.test(e[n]);) n += 1;
	let i = e.length - 1;
	for (; i >= n && /\s/.test(e[i]);) i -= 1;
	"{" === e[n] && "}" === e[i] || Kl();
	const a = await O(e);
	return void 0 !== t && t !== a && Kl(), a;
}
function ac(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != typeof t || null === e || null === t) return !1;
	if (Array.isArray(e) || Array.isArray(t)) return !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((e, n) => ac(e, t[n]));
	if ("object" != typeof e || "object" != typeof t) return !1;
	const n = Object.keys(e).sort(), i = Object.keys(t).sort();
	if (n.length !== i.length || n.some((e, t) => e !== i[t])) return !1;
	const a = e, s = t;
	return n.every((e) => ac(a[e], s[e]));
}
function sc(e) {
	try {
		const t = JSON.parse(e);
		return (null === t || "object" != typeof t || Array.isArray(t)) && Kl(), t;
	} catch {
		return Kl();
	}
}
function rc(e, t) {
	const n = Object.keys(e).sort(), i = [...t].sort();
	return n.length === i.length && n.every((e, t) => e === i[t]);
}
function oc(e) {
	return "number" == typeof e && Number.isFinite(e);
}
function lc(e) {
	return null === e || "string" == typeof e && e.length > 0;
}
function cc(e) {
	return Array.isArray(e) && e.every(oc);
}
function uc(e) {
	return Array.isArray(e) && e.every((e) => Number.isInteger(e) && (0 === e || 1 === e));
}
function dc(e, t) {
	return 0 === e.length || e.length === t;
}
function pc(e) {
	Array.isArray(e) || Kl();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && Kl();
		const e = t, n = e.start_ts, i = e.end_ts;
		rc(e, ["start_ts", "end_ts"]) && oc(n) && oc(i) && !(i < n) || Kl();
	}
}
function fc(e, t) {
	Array.isArray(e) && e.length === t || Kl();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && Kl();
		const e = n;
		rc(e, ["onset_time", "offset_time"]) && "string" == typeof e.onset_time && 0 !== e.onset_time.length && lc(e.offset_time) || Kl();
	}
}
function mc(e) {
	Array.isArray(e) || Kl();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && Kl();
		const e = t;
		rc(e, ["start_time", "end_time"]) && "string" == typeof e.start_time && 0 !== e.start_time.length && "string" == typeof e.end_time && 0 !== e.end_time.length || Kl();
	}
}
function hc(e) {
	Array.isArray(e) || Kl();
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && Kl();
		const e = n, i = e.guider, a = e.detector, s = e.onset_ts, r = e.offset_ts;
		(!rc(e, [
			"guider",
			"detector",
			"onset_ts",
			"offset_ts"
		]) || "string" != typeof i || 0 === i.length || t.has(i) || !lc(a) || null !== s && !oc(s) || null !== r && !oc(r) || null === s && null === r) && Kl(), t.set(i, {
			detector: a,
			onset: s,
			offset: r
		});
	}
	return t;
}
function gc(e) {
	if (null === e) return null;
	Array.isArray(e) && 2 === e.length || Kl();
	const t = e[0], n = e[1];
	return (!oc(t) || !oc(n) || n <= t) && Kl(), [t, n];
}
function yc(e, t) {
	const n = sc(e), i = void 0 === n.config ? ["days"] : ["config", "days"], a = n.days;
	rc(n, i) && Array.isArray(a) || Kl(), void 0 === n.config || null !== n.config && "object" == typeof n.config && !Array.isArray(n.config) || Kl();
	const s = /* @__PURE__ */ new Set();
	for (const l of a) {
		(null === l || "object" != typeof l || Array.isArray(l)) && Kl();
		const e = l;
		rc(e, jl) || Kl();
		const t = e.analysis_date, n = e.epoch_length_seconds, i = e.timestamps, a = e.activity_counts, r = e.sleep_scores, c = e.choi_nonwear, u = e.diary_nap_count, d = e.anglez, p = e.light, f = e.temperature, m = e.heart_rate, h = e.detach_nonwear, g = e.is_weekend, y = e.calibration_error, w = e.imputed_fraction;
		!("string" != typeof t || 0 === t.length || s.has(t) || "number" != typeof n || !Number.isInteger(n) || n <= 0) && cc(i) && 0 !== i.length && cc(a) && a.length === i.length && uc(r) && r.length === i.length && uc(c) && dc(c, i.length) && Number.isInteger(u) && !(u < 0) && lc(e.diary_onset_time) && lc(e.diary_wake_time) && lc(e.diary_in_bed_time) && lc(e.diary_out_bed_time) && (null === g || "boolean" == typeof g) && cc(d) && dc(d, i.length) && cc(p) && dc(p, i.length) && cc(f) && dc(f, i.length) && cc(m) && dc(m, i.length) && uc(h) && dc(h, i.length) && (null === y || oc(y)) && (null === w || !(!oc(w) || w < 0 || w > 1)) || Kl(), pc(e.sensor_nonwear), fc(e.diary_naps, u), mc(e.diary_nonwear);
		const _ = hc(e.guider_targets), v = gc(e.hdcza_window), b = _.get(o.HDCZA);
		(null === v && void 0 !== b || null !== v && (void 0 === b || null !== b.detector || b.onset !== v[0] || b.offset !== v[1])) && Kl(), s.add(t);
	}
	const r = n;
	return ac(sc(t), Zl(r)) || Kl(), {
		difficulty: r,
		dates: s
	};
}
function wc(e, t, n, i) {
	rc(t, ["config", "days"]) || Kl(), ac(t.config, e.difficulty.config ?? null) || Kl();
	const a = t.days;
	Array.isArray(a) && a.length === e.difficulty.days.length || Kl();
	for (let o = 0; o < a.length; o += 1) {
		const t = a[o], n = e.difficulty.days[o];
		(null === t || "object" != typeof t || Array.isArray(t) || null === n || "object" != typeof n || Array.isArray(n)) && Kl();
		const i = t, s = n;
		rc(i, [
			"analysis_date",
			"epoch_length_seconds",
			"timestamps"
		]) && i.analysis_date === s.analysis_date && i.epoch_length_seconds === s.epoch_length_seconds && ac(i.timestamps, s.timestamps) || Kl();
	}
	const s = Object.keys(n);
	(s.length !== e.dates.size || s.some((t) => !e.dates.has(t))) && Kl();
	const r = new Map(e.difficulty.days.map((e) => [e.analysis_date, e]));
	for (const [o, l] of Object.entries(n)) {
		(null === l || "object" != typeof l || Array.isArray(l)) && Kl();
		const e = l, t = Jl(e.canonicalResult);
		null !== t && t.canonicalResult.analysis_date === o && ac(e, t) || Kl();
	}
	if (null !== i) {
		const t = Object.keys(i);
		(t.length !== e.dates.size || t.some((t) => !e.dates.has(t))) && Kl();
		for (const [e, n] of Object.entries(i)) {
			(null === n || "object" != typeof n || Array.isArray(n)) && Kl();
			const t = n, i = r.get(e);
			t.analysis_date === e && Number.isInteger(t.epoch_length_seconds) && t.epoch_length_seconds === i?.epoch_length_seconds || Kl();
		}
	}
}
async function _c(e) {
	return tc(function(e) {
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
async function vc(e) {
	try {
		nc(e.runtimeIdentity), null !== e.sourceContentHash && Yl(e.sourceContentHash);
		const t = ec(e.runtimeIdentity), n = await ic(e.difficultyRequestWireJson, e.difficultyRequestSha256), i = await ic(e.signalsRequestWireJson, e.signalsRequestSha256);
		yc(e.difficultyRequestWireJson, e.signalsRequestWireJson);
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
			generationKey: await _c(a)
		};
	} catch (t) {
		if (t instanceof Wl) throw t;
		return Kl();
	}
}
async function bc(e) {
	return tc(function(e) {
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
function kc(e, t) {
	void 0 !== t && (null !== t && Yl(t), e !== t && Kl());
}
async function Sc(e) {
	(!Number.isInteger(e.fileId) || e.fileId <= 0) && Kl(), void 0 !== e.id && (!Number.isInteger(e.id) || e.id <= 0) && Kl();
	for (const o of [
		e.generationKey,
		e.difficultyRequestSha256,
		e.signalsRequestSha256,
		e.projectionSha256,
		e.difficultyResultSha256,
		e.recordSha256
	]) Yl(o);
	null !== e.signalsResultSha256 && Yl(e.signalsResultSha256), null !== e.sourceContentHash && Yl(e.sourceContentHash), "sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || Kl(), nc(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || Kl(), await ic(e.difficultyRequestWireJson, e.difficultyRequestSha256), await ic(e.signalsRequestWireJson, e.signalsRequestSha256);
	const t = yc(e.difficultyRequestWireJson, e.signalsRequestWireJson);
	Xl(e.createdAt), Xl(e.updatedAt), Date.parse(e.updatedAt) < Date.parse(e.createdAt) && Kl(), null === e.signalsByDate != (null === e.signalsResultSha256) && Kl();
	const n = ec(e.projectionInput), i = ec(e.difficultyByDate), a = null === e.signalsByDate ? null : ec(e.signalsByDate);
	wc(t, n, i, a);
	const s = {
		evidenceContractId: e.evidenceContractId,
		difficultyMethodId: e.difficultyMethodId,
		signalsMethodId: e.signalsMethodId,
		requestContractId: e.requestContractId,
		sourceContentHash: e.sourceContentHash,
		runtimeIdentity: ec(e.runtimeIdentity),
		difficultyRequestWireJson: e.difficultyRequestWireJson,
		signalsRequestWireJson: e.signalsRequestWireJson,
		difficultyRequestSha256: e.difficultyRequestSha256,
		signalsRequestSha256: e.signalsRequestSha256
	};
	await _c(s) !== e.generationKey && Kl(), await tc(n) !== e.projectionSha256 && Kl(), await tc(i) !== e.difficultyResultSha256 && Kl(), null !== a && await tc(a) !== e.signalsResultSha256 && Kl();
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
	return await bc(r) !== e.recordSha256 && Kl(), r;
}
async function Ic(e) {
	try {
		return await Sc(e);
	} catch {
		throw new Wl(!0);
	}
}
function Ac(e, t, n = !1) {
	if (!t) throw new Wl(n);
	if (null !== e.sourceContentHash && t.sourceContentHash !== e.sourceContentHash) throw new Wl(n);
}
async function xc(e, t, n) {
	await Jt({
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
async function $c(e, t, n = R()) {
	const [i, a] = await n.transaction("r", [n.files, n.complexityEvidence], async () => Promise.all([n.complexityEvidence.where("[fileId+generationKey]").equals([e, t]).first(), n.files.get(e)]));
	if (!i) return;
	const s = await Ic(i);
	return Ac(s, a, !0), s;
}
function Tc(e, t) {
	const n = [
		...Mn(e, Dc, t),
		...Dn(e, Dc),
		...Rn(e, Dc, t)
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
function Nc(e, t) {
	const n = zc(e, t), i = Boolean(e.datetime_column), a = Boolean(e.date_column && e.time_column);
	return i || a || n.push({
		key: "timestamp",
		message: "Map Date/time, or map both Date and Time."
	}), e.mims_unit_column || n.push({
		key: "mims_unit_column",
		message: "Map a MIMS unit column."
	}), n;
}
function zc(e, t) {
	return [
		...Mn(e, Dc, t),
		...Dn(e, Dc),
		...Rn(e, Dc, t)
	];
}
const Dc = [
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
async function Rc(e, t = _()) {
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
function Mc(e) {
	const t = Xe.getState(), n = [ue(Sn(t, e).nonwearDetectorsCounts, t.showChoiNonwear), ue(xn(t.nonwearDetectorsGgir, e), t.showChoiNonwear)];
	return n.filter((e, t) => n.findIndex((t) => K(t) === K(e)) === t);
}
function Ec(e, t) {
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
function Oc(e, t) {
	return [.../* @__PURE__ */ new Set([...e.availableDates, ...t])].sort();
}
function Cc(e, t) {
	return e ? {
		detectors: [...e.detectors],
		any: Uint8Array.from(e.mask).buffer,
		weight: e.weight ? Float64Array.from(e.weight).buffer : null,
		grid: e.grid === t.timestamps ? "counts" : "ggir"
	} : null;
}
async function Fc(e, { file: t, sets: n, capsense: i, db: a, signal: s }) {
	const r = n.filter((t) => !(K(t) in (e.displayNonwear ?? {})));
	if (0 === r.length) return;
	const o = Z(s), l = await Y(e, $e, "navigation facts", Kt(), o);
	if (!l) return;
	const c = oe(t.sourceType, t.sourceProfileId), u = {};
	for (const [h, g] of Object.entries(l.nonwearMasksByDetector)) 0 === g.length || ie(h) || (u[h] = g);
	const d = {
		algorithmicNonwearMasks: u,
		timestamps: l.timestamps,
		ggirTimestamps: l.ggirTimestamps,
		sensorNonwearPeriods: "detach_nonwear" === c && l.detachNonwear ? Ec(l.detachNonwear, l.timestamps) : i,
		deviceNonwearSource: c
	}, p = { ...e.displayNonwear }, f = await Promise.all(r.map((e) => (s?.throwIfAborted(), ce(d, e, o))));
	for (const [h, g] of r.entries()) p[K(g)] = Cc(f[h], d);
	const m = t.seriesRevision ?? 0;
	await a.transaction("rw", a.files, a.activityDays, async () => {
		const n = await a.files.get(e.fileId);
		n && (n.seriesRevision ?? 0) === m && (n.nonwearBandGeneration ?? 0) === (t.nonwearBandGeneration ?? 0) && (s?.throwIfAborted(), await a.activityDays.where("[fileId+date]").equals([e.fileId, e.date]).modify({ displayNonwear: p }));
	});
}
const Pc = /* @__PURE__ */ new WeakMap();
function jc(e, t, n) {
	let i = Pc.get(t);
	i || Pc.set(t, i = /* @__PURE__ */ new Map());
	const a = i.get(e);
	if (a) return N(a, n);
	const s = async function(e, t, n) {
		n?.throwIfAborted();
		const i = await ge(e, t);
		if (!i || "incomplete" === i.ingestState) return;
		const a = await qe(e, t);
		let s = i.navigationFacts;
		(function(e, t) {
			const n = e?.navigationFacts;
			if (!e || 1 !== n?.version) return !1;
			const i = Oc(e, t);
			return n.dates.length === i.length && n.dates.every((e, t) => e === i[t]);
		})(i, a) || (s = await async function(e, t, n, i) {
			const a = Z(i), s = {}, r = async (e) => {
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
			const c = await Zn(n), u = await Cn(e, c, i), d = [...new Set([u.zone, u.reason ? c : null].filter((e) => Boolean(e)))], p = {};
			return await Tn((t) => {
				for (const n of d) {
					const i = {};
					for (const a of e.availableDates) {
						const e = t.dstTransitionOnNight(n, a);
						e && (i[a] = e);
					}
					p[n] = i;
				}
			}, new zn(a)), {
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
		}(i, Oc(i, a), t, n), n?.throwIfAborted(), await t.files.update(e, { navigationFacts: s }));
		const r = Mc(i), o = r.map(K), l = i.seriesRevision ?? 0;
		if (s?.bands?.seriesRevision === l && o.every((e) => s.bands.keys.includes(e))) return;
		const c = "gt3x_capsense" === oe(i.sourceType, i.sourceProfileId) ? (await ze(e, t)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : [];
		for (const u of a) {
			n?.throwIfAborted();
			const a = await dt(e, u, t);
			a && await Fc(a, {
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
function Bc(e, t) {
	for (const n of e) {
		const e = n.epochResolutions?.find((e) => e.category === t && !e.derivedFromResolutionId);
		if (e) return e.epochLengthSeconds;
	}
	return null;
}
function qc(e, t) {
	const n = "counts" === t ? e.timestamps : e.ggirTimestamps;
	return n ? Math.floor(n.byteLength / Float64Array.BYTES_PER_ELEMENT) : 0;
}
function Zc(e) {
	return "number" != typeof e ? String(e) : (/* @__PURE__ */ new Date(1e3 * e)).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: !1,
		timeZone: "UTC"
	});
}
function Gc(e) {
	if ("object" != typeof e || null === e) return String(e).slice(0, 60);
	const t = e;
	return "onsetTimestamp" in t && "offsetTimestamp" in t ? `${Zc(t.onsetTimestamp)}–${Zc(t.offsetTimestamp)}` : "startTimestamp" in t && "endTimestamp" in t ? `${Zc(t.startTimestamp)}–${Zc(t.endTimestamp)}` : JSON.stringify(t).slice(0, 60);
}
function Hc(e, t = "(unset)") {
	if (void 0 === e) return t;
	if (null === e) return t;
	const n = "string" == typeof e ? e : JSON.stringify(e);
	return n.length > 48 ? `${n.slice(0, 45)}…` : n;
}
function Jc(e) {
	const t = e.rowCount, n = e.dayCount, i = [`${Hc(e.subject, "export")} (${Hc(e.format, "?")})`, Hc(e.filename, "")].filter((e) => "" !== e), a = ["number" == typeof t ? `${t} rows` : null, "number" == typeof n ? `${n} day${1 === n ? "" : "s"}` : null].filter((e) => null !== e);
	return a.length > 0 ? `${i.join(" · ")} — ${a.join(", ")}` : i.join(" · ");
}
function Lc(e, t, n, i) {
	const a = n?.exportId;
	return "export_started" === t && "string" == typeof a && i.has(a) ? "" === e ? "outcome unknown" : `${e} · outcome unknown` : e;
}
function Wc(e, t) {
	const n = E({
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
			return "onsetTimestamp" in i ? `${e} #${t}${n}: ${Zc(i.onsetTimestamp)}–${Zc(i.offsetTimestamp)}` : "startTimestamp" in i ? `${e} #${t}: ${Zc(i.startTimestamp)}–${Zc(i.endTimestamp)}` : `${e} #${t}${n}`;
		}
		case "sleep_period_split": return `sleep #${i.periodIndex ?? "?"} split at ${Zc(i.at)}`;
		case "sleep_period_merged": return `sleep #${i.periodIndex ?? "?"} merged ${i.direction ?? "?"}`;
		case "marker_adjusted": {
			const e = i.updates ?? {}, t = i.category ?? "?", n = i.periodIndex ?? "?", a = [];
			return void 0 !== e.onsetTimestamp && a.push(`onset → ${Zc(e.onsetTimestamp)}`), void 0 !== e.offsetTimestamp && a.push(`offset → ${Zc(e.offsetTimestamp)}`), void 0 !== e.startTimestamp && a.push(`start → ${Zc(e.startTimestamp)}`), void 0 !== e.endTimestamp && a.push(`end → ${Zc(e.endTimestamp)}`), void 0 !== e.markerType && a.push(`type → ${e.markerType}`), `${t} #${n}: ${a.join(", ")}`;
		}
		case "marker_moved": {
			const e = i.before, t = i.after;
			if (!e || !t) return "drag completed";
			const n = Array.isArray(e.sleepMarkers) ? e.sleepMarkers : [], a = Array.isArray(t.sleepMarkers) ? t.sleepMarkers : [];
			for (let i = 0; i < Math.max(n.length, a.length); i++) {
				const e = n[i], t = a[i];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `sleep #${i}: ${Gc(e)} ⇒ ${Gc(t)}`;
			}
			const s = Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : [], r = Array.isArray(t.nonwearMarkers) ? t.nonwearMarkers : [];
			for (let i = 0; i < Math.max(s.length, r.length); i++) {
				const e = s[i], t = r[i];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `nonwear #${i}: ${Gc(e)} ⇒ ${Gc(t)}`;
			}
			return "drag completed (no visible change)";
		}
		case "marker_deleted": {
			const e = i.category ?? "?", t = i.periodIndex ?? "?", n = i.before;
			return n ? `${e} #${t}: was ${Gc(n)}` : `${e} #${t}`;
		}
		case "actiware_rest_edited": {
			const e = "string" == typeof i.edit ? i.edit : "?";
			return "add" === e ? `rest added: ${Gc(i.to)}` : "remove" === e ? `rest removed: was ${Gc(i.from)}` : `rest ${"move" === e ? "moved" : e}: ${Gc(i.from)} ⇒ ${Gc(i.to)}`;
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
			const e = Hc(i.intent, "mutation"), t = Hc(i.guard, "?"), n = i.disposition, a = "refused_by_store" === n ? "refused" : "applied_with_violation" === n ? "applied anyway" : Hc(n, "");
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
				const e = Hc(i.before, ""), t = Hc(i.after, "");
				return "" === e ? `"${t}"` : `"${e}" → "${t}"`;
			}
			return i.text ? `"${String(i.text).slice(0, 60)}"` : i.notes ? `"${String(i.notes).slice(0, 60)}"` : `${i.length ?? "?"} chars`;
		case "settings_changed": return `${Hc(i.scope, "?")} · ${Hc(i.key, "?")}: ${Hc(i.before)} → ${Hc(i.after)}`;
		case "settings_reset": {
			const e = i.changed, t = Hc(i.scope, "settings");
			if (!Array.isArray(e)) return `${t} reset to defaults`;
			if (0 === e.length) return `${t}: already at defaults`;
			const n = e.slice(0, 4).map((e) => Hc(e, "?")).join(", "), a = e.length > 4 ? ", …" : "";
			return `${t}: ${String(e.length)} reset to default (${n}${a})`;
		}
		case "app_version_changed": return `${Hc(i.before, "(first run)")} → ${Hc(i.after, "?")}`;
		case "system_migration": return `${Hc(i.subject, "schema")}: ${Hc(i.before, "?")} → ${Hc(i.after, "?")}`;
		case "data_exported": return Jc(i);
		case "export_started": return `Started: ${Jc(i)}`;
		case "export_cancelled": return `${Hc(i.filename, "export")} — ${Hc(i.reason, "cancelled")}`;
		case "preset_changed": {
			const e = Hc(i.family, "preset"), t = Hc(i.change, "changed"), n = Hc(i.preset, "?"), a = i.before;
			return null == a ? `${e}: ${t} ${n}` : `${e}: ${t} ${n} (was ${Hc(a)})`;
		}
		case "markers_synced": {
			const e = i.conflicts, t = i.errorCount;
			let n = `Pushed ${i.pushed ?? 0}, pulled ${i.pulled ?? 0}`;
			return "number" == typeof e && e > 0 && (n += `, ${e} conflict${1 === e ? "" : "s"}`), "number" == typeof t && t > 0 && (n += `, ${t} error${1 === t ? "" : "s"}`), n;
		}
		case "system_recalculation": return `Recalculated ${Hc(i.subject, "derived data")}`;
		case "diary_staged": return `Staged ${i.staged ?? 0}, replaced ${i.replaced ?? 0}, skipped ${i.skipped ?? 0}`;
		case "diary_decision_recorded": return `Decided ${Hc(i.ruleKind, "a rule")} → ${Hc(i.outcome, "(no outcome)")} (${Hc(i.scope, "unscoped")}, ${i.nights ?? 0} nights)`;
		case "diary_decision_state_saved": return `Saved decision state "${Hc(i.restorePoint, "untitled")}" (${i.decisions ?? 0} decisions)`;
		case "diary_session_saved": {
			const e = Hc(i.status, "saved"), t = Hc(i.step, "an unknown step"), n = Hc(i.sourceSha256Prefix, "an unnamed source");
			return "removed" === e ? `Removed the saved diary session for ${n}` : `Diary session ${n} saved as ${e} on ${t}`;
		}
		case "diary_decision_state_restored": return `Restored decision state "${Hc(i.restorePoint, "untitled")}" (${i.reflagged ?? 0} reflagged, ${i.unflagged ?? 0} unflagged, ${i.nights ?? 0} nights)`;
		case "diary_decisions_reset": return `Reset ${i.decisions ?? 0} diary decisions across ${i.nights ?? 0} nights`;
		case "diary_attached": {
			const e = i.entryCount, t = i.matchBasis, n = ["number" == typeof e ? `${e} night${1 === e ? "" : "s"}` : null, "string" == typeof t && "" !== t ? `matched by ${t}` : null].filter((e) => null !== e).join(", ");
			return "" === n ? "Attached diary" : `Attached diary (${n})`;
		}
		case "diary_discarded": {
			const e = i.analysisDate;
			return null == e ? `Discarded ${Hc(i.sourceKey, "diary")}` : `Discarded ${Hc(i.sourceKey, "diary")} for ${Hc(e, "?")}`;
		}
		case "diary_workspace_cleared": {
			const e = (e, t) => {
				const n = Number(i[e] ?? 0);
				return `${String(n)} ${t}${1 === n ? "" : "s"}`;
			};
			return `Cleared workspace diary (${e("staged", "staged night")}, ${e("occurrences", "response")})`;
		}
		case "diary_repaired": {
			const e = i.fields, t = Array.isArray(e) ? e.map((e) => Hc(e, "?")).join(", ") : "";
			return "" === t ? `Repaired ${i.applied ?? 0} field${1 === i.applied ? "" : "s"}` : `Repaired ${i.applied ?? 0}: ${t}`;
		}
		case "diary_changed": {
			const e = i.fields, t = Hc(i.change, "changed"), n = Array.isArray(e) ? e.map((e) => Hc(e, "?")).join(", ") : "";
			return "" === n ? `Diary ${t}` : `Diary ${t}: ${n}`;
		}
		case "workspace_deleted": {
			const e = i.auditRowsDestroyed;
			return `${Hc(i.displayName, "workspace")} deleted — ${i.auditRowsTotal ?? 0} audit rows, ${i.auditRowsReplicated ?? 0} replicated, ${e ?? 0} destroyed`;
		}
		case "audit_chain_reanchored": return `Restored ${i.restoredRows ?? 0} rows (restore ${String(i.restoreId ?? "?").slice(0, 8)})`;
		case "workspace_recovered": return `Recovered from backup ${Hc(i.backupSha256, "?").slice(0, 8)} — ${Hc(i.applied, "0")} changes put back, ${Hc(i.skipped, "0")} skipped, ${Hc(i.recordingsToReimport, "0")} recordings to import again`;
		case "access_changed": return `${Hc(i.subject, "access")} · ${Hc(i.scope, "?")}: ${Hc(i.before)} → ${Hc(i.after)}`;
		case "assignment_changed": {
			const e = i.fileCount, t = i.fileIds, n = "number" == typeof e ? e : Array.isArray(t) ? t.length : 0;
			return `${Hc(i.change, "changed")} ${Hc(i.subject, "assignment")} · ${Hc(i.scope, "?")} (${n} file${1 === n ? "" : "s"})`;
		}
	}
	return Object.entries(i).slice(0, 5).map(([e, t]) => "number" == typeof t && e.toLowerCase().includes("timestamp") ? `${e}: ${Zc(t)}` : "string" == typeof t && t.length > 50 ? `${e}: "${t.slice(0, 47)}..."` : Array.isArray(t) ? `${e}: [${t.length} items]` : "object" == typeof t && null !== t ? `${e}: {…}` : `${e}: ${JSON.stringify(t)}`).join(", ");
}
var Uc = t({
	GGIR_NIGHT_DIFFICULTY_NOT_RANKABLE: () => xu,
	LocalDataSource: () => ju,
	backfillPlacementResults: () => Zu,
	refreshStoredFilePlacement: () => Bu,
	refreshStoredFilePlacements: () => qu,
	refreshStoredNightDifficulty: () => Tu,
	storePhysicalActivityFileAnswers: () => Nu
});
function Vc(e) {
	return JSON.stringify(e.map((e) => ({
		start_timestamp: e.startTimestamp,
		end_timestamp: e.endTimestamp,
		marker_index: e.markerIndex
	})));
}
function Kc(e, t) {
	const n = (a = t, "mims_metrics" === (i = e ?? "generic") ? Nc(a, s) : "ggir_part5_daysummary" === i ? function(e, t) {
		const n = zc(e, t);
		return e.date_column || e.datetime_column || n.push({
			key: "date_column",
			message: "Map a date/day column for the daily summary table."
		}), n;
	}(a, s) : Tc(a, s));
	var i, a, s;
	if (0 !== n.length) throw new Error(function(e) {
		return `Column-mapped CSV settings are incomplete: ${e.map((e) => e.message).join(" ")} ${Yn}`;
	}(n));
}
function Yc(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) "auto_score" !== n.username || n.algorithm !== m.VAN_HEES_2015 || n.isInvalidNight || t.set(n.date, pt(t.get(n.date), n));
	const i = /* @__PURE__ */ new Map();
	for (const [a, s] of t) {
		const e = s.sleepMarkers.filter((e) => e.markerType === n.MAIN_SLEEP);
		if (1 !== e.length) continue;
		const t = e[0], r = t?.onsetTimestamp, o = t?.offsetTimestamp;
		"number" == typeof r && Number.isFinite(r) && "number" == typeof o && Number.isFinite(o) && o > r && i.set(a, [r, o]);
	}
	return i;
}
async function Xc(e, t) {
	const n = t.dailyGgirSummaries;
	if (!n) return /* @__PURE__ */ new Map();
	const i = await n.where("fileId").equals(e).toArray();
	return new Map(i.map((e) => [e.analysisDate, e]));
}
function Qc(e) {
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
function eu(e, t, n, i) {
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
const tu = "wasm-parallel";
function nu(e) {
	const t = e.compiledFeatures;
	return {
		...e,
		compiledFeatures: t.includes(tu) ? t.filter((e) => e !== tu) : [...t, tu]
	};
}
function iu(e, t) {
	const n = e.compiledFeatures.filter((e) => e !== tu), i = t.compiledFeatures.filter((e) => e !== tu);
	return e.contractVersion === t.contractVersion && e.crateVersion === t.crateVersion && e.sourceRevision === t.sourceRevision && e.target === t.target && e.semanticProfile === t.semanticProfile && e.profileProofStatus === t.profileProofStatus && e.temporalBasis === t.temporalBasis && e.artifactSha256 === t.artifactSha256 && n.length === i.length && n.every((e, t) => e === i[t]);
}
async function au(e, t, n, i, a = /* @__PURE__ */ new Map()) {
	const s = [];
	for (const l of [t, await le(t, void 0, i)]) {
		const r = e.get(l);
		if (!r) continue;
		let o = a.get(l);
		o || a.set(l, o = Y(r, n, `listDatesStatus ${l}`, Kt(), i));
		const c = await o;
		if (!c) return null;
		s.push({
			unpacked: c,
			epochs: await On(c.timestamps, t, i),
			ggir: await On(c.ggirTimestamps, t, i)
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
function su(e, t) {
	const n = new Set(t.map((e) => e.analysis_date)), i = Object.keys(e);
	return n.size === t.length && i.length === n.size && i.every((e) => n.has(e));
}
function ru(e) {
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
async function ou(e, t, n, i, a, s, r) {
	const o = [], l = [];
	for (const c of new Set(t)) {
		let t = null;
		for (const o of e) if (o && 0 !== He(o).timestamps.length && (await ki(o, c, n, a, void 0, s, r), t = vn(c, ln(o, n), i), null !== t)) break;
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
function lu({ available: e, dropped: t }) {
	return 0 === e.length && t.length > 0 ? t.map((e) => e.reason).join("; ") : null;
}
function cu(e) {
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
function uu(e) {
	return 1 === e.length && _n(e[0]);
}
function du(e, t, n) {
	const i = e?.byDate[t];
	return i ? "refused" === i.kind ? i.reason : null : function(e) {
		const t = e?.sleepPeriodDetectionConfig?.nonwear_detector_unavailable;
		return "string" == typeof t ? t : null;
	}(n);
}
async function pu(e, t) {
	if (!("placementResults" in e)) return;
	const n = await e.placementResults.get(t);
	return 2 === n?.policy ? n : void 0;
}
function fu(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let i = 0; i < t; i += 1) {
		const t = e[i];
		if (null == t || !Number.isFinite(t)) return [];
		n[i] = t;
	}
	return n;
}
function mu(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let i = 0; i < t; i += 1) {
		const t = e[i];
		if (0 !== t && 1 !== t) return [];
		n[i] = t;
	}
	return n;
}
function hu(e, t, n) {
	if (t.length !== e.length || n.length !== e.length) return [];
	const i = new Array(e.length);
	for (let a = 0; a < e.length; a += 1) {
		const s = t[a], r = e[a], o = n[a];
		if (null == s || null == r || s !== r || null == o || !Number.isFinite(o)) return [];
		i[a] = o;
	}
	return i;
}
function gu(e, t, n, i, a, s) {
	const r = [], l = null == t ? null : s.resolveInstant(t, e, $.evening_onset, a), c = null == n ? null : s.resolveInstant(n, e, $.morning_offset, a);
	return null == l && null == c || r.push({
		guider: o.DIARY,
		detector: null,
		onset_ts: l,
		offset_ts: c
	}), null != i && r.push({
		guider: o.HDCZA,
		detector: null,
		onset_ts: i[0],
		offset_ts: i[1]
	}), r;
}
function yu(e) {
	return `complexity-evidence:${e.generationKey}`;
}
function wu(e) {
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
function _u(e) {
	return e.projectionInput;
}
function vu(e) {
	return e.difficultyByDate;
}
function bu(e) {
	return e.signalsByDate;
}
function ku(e, t, n, i) {
	return {
		has_markers: u(e),
		has_nonwear: f(e),
		is_invalid_night: e?.isInvalidNight ?? !1,
		needs_consensus: e?.needsConsensus ?? !1,
		auto_flagged: t,
		has_auto_score: (n?.sleepMarkers?.length ?? 0) > 0 || !0 === n?.isInvalidNight,
		auto_score_unavailable_reason: i
	};
}
async function Su(e, t, n, i) {
	const [a, s] = await Promise.all([i.markers.where("[fileId+date+username]").between([
		e,
		t,
		""
	], [
		e,
		t,
		"￿"
	], !0, !0).toArray(), pu(i, e)]), r = /* @__PURE__ */ new Map();
	for (const c of a) r.set(c.username, pt(r.get(c.username), c));
	const o = r.size >= 2 && (await Rc([{
		usersForDate: r,
		kind: "sleep"
	}, {
		usersForDate: r,
		kind: "nonwear"
	}])).some((e) => e.disagree), l = r.get(vt);
	return ku(r.get(n), o, l, du(s, t, l));
}
function Iu(e) {
	return JSON.stringify((e ?? []).map((e) => [e.startTimestamp ?? null, e.endTimestamp ?? null]));
}
function Au(e) {
	const t = e ? null : Xe.getState(), n = e?.nightStartHour ?? t?.nightStartHour ?? l.night_start_hour, i = e?.nightEndHour ?? t?.nightEndHour ?? l.night_end_hour, a = parseInt(n.split(":")[0] ?? "21", 10), s = parseInt(i.split(":")[0] ?? "9", 10);
	return {
		nightStartHour: Number.isNaN(a) ? 21 : a,
		nightEndHour: Number.isNaN(s) ? 9 : s
	};
}
const xu = "GGIR nights are not ranked by difficulty: the difficulty core reads 60 s activity counts and sleep scores, and a GGIR folder holds 5 s ENMO, anglez and SIB only.", $u = /* @__PURE__ */ new Set();
function Tu(e, t, n, i) {
	return B({
		kind: S.NIGHT_DIFFICULTY,
		key: `${S.NIGHT_DIFFICULTY}:${String(e)}`,
		label: "Update night difficulty",
		workspaceId: t.name,
		signal: i,
		rerun: !0,
		run: async (i) => {
			const a = new ju();
			try {
				if (i.signal.throwIfAborted(), i.progress(0, 2), R() !== t) return;
				const s = await ge(e, t);
				if (!s || "incomplete" === s.ingestState) return;
				await jc(e, t, i.signal), i.signal.throwIfAborted(), i.progress(1, 2);
				const r = s.nightDifficulty, o = n ?? (r ? {
					nightStartHour: `${String(r.nightStartHour).padStart(2, "0")}:00`,
					nightEndHour: `${String(r.nightEndHour).padStart(2, "0")}:00`
				} : void 0);
				await a.computeDatesStatus(e, s.availableDates, Xe.getState().username || "anonymous", o, i.signal), i.progress(2, 2);
			} finally {
				a.dispose();
			}
		}
	}).catch((e) => {
		e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] Stored night difficulty could not be refreshed.", e);
	});
}
function Nu(e, t, n) {
	return B({
		kind: S.PHYSICAL_ACTIVITY,
		key: `${S.PHYSICAL_ACTIVITY}:${String(e)}`,
		label: "Store activity answers",
		workspaceId: t.name,
		signal: n,
		rerun: !0,
		run: (n) => ct(async (i) => {
			const [{ computeLocalPhysicalActivityAnalysis: a, physicalActivityStoreAnalysisOptions: s }, { createPhysicalActivityWorkspaceRepository: r, loadPhysicalActivityWorkspaceDays: o }] = await Promise.all([import("./local-physical-activity-analysis-tgn76C11.js"), import("./physical-activity-workspace-days-B1puJCo3.js")]);
			if (n.signal.throwIfAborted(), n.progress(0, 2), R() !== t) return;
			const l = s(Xe.getState());
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
St((e, t, n) => {
	Tu(e, t, void 0, n);
});
const zu = /* @__PURE__ */ new WeakMap();
function Du(e, t, n, i, a) {
	a?.throwIfAborted();
	let s = zu.get(e);
	return s || (s = /* @__PURE__ */ new Map(), zu.set(e, s)), s.set(t, {
		inputs: n,
		byDate: i
	}), i;
}
const Ru = /* @__PURE__ */ new WeakMap();
function Mu(e, t) {
	let n = Ru.get(e);
	n || Ru.set(e, n = /* @__PURE__ */ new Map());
	const i = ot(t);
	let a = n.get(i);
	return a || n.set(i, a = xe(e.values(), t)), a;
}
const Eu = "An earlier audit record is still being written. The rest interval was not changed; try again.";
function Ou(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.date);
		e && "auto_score" !== e.username && "auto_score" === n.username || t.set(n.date, "auto_score" === e?.username && "auto_score" !== n.username ? n : pt(e, n));
	}
	return [...t].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort();
}
async function Cu(e, t, n) {
	try {
		const a = await t.actiwareFileData.get(e);
		if (!a?.actiwareSleepWake) return;
		const s = (await t.actiwareStatisticsInputs.get(e))?.input, r = (await t.files.get(e))?.seriesRevision ?? 0, o = Ou(await t.markers.where("fileId").equals(e).toArray());
		let l = null;
		try {
			l = await Bn(a.actiwareIntervals, s, o, (e) => Z(n).actiwareIntervalStatistics(e));
		} catch (i) {
			n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), Le("error", "Actiware statistics recalculation failed", Je(i));
		}
		await he(t, [
			t.actiwareFileData,
			t.actiwareStatisticsInputs,
			t.files,
			t.markers
		], async () => {
			const n = await t.actiwareFileData.get(e), i = (await t.actiwareStatisticsInputs.get(e))?.input;
			if (!n || ((await t.files.get(e))?.seriesRevision ?? 0) !== r) return;
			if (JSON.stringify(i) !== JSON.stringify(s) || JSON.stringify(n.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
			const c = Ou(await t.markers.where("fileId").equals(e).toArray());
			JSON.stringify(c) === JSON.stringify(o) && (await t.actiwareFileData.update(e, null === l ? { actiwareStatisticsNeedsRecompute: !0 } : {
				actiwareStatistics: l,
				actiwareStatisticsNeedsRecompute: !1
			}), await Ke(t, [e]));
		}, n);
	} catch (i) {
		n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), Le("error", "Actiware statistics recalculation failed", Je(i));
		try {
			await he(t, [t.actiwareFileData, t.files], async () => {
				await t.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), await Ke(t, [e]);
			}, n);
		} catch {
			throw i instanceof Error ? i : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
		}
	}
}
async function Fu(e, t, n, a, s) {
	const r = s ? s.file : await ge(e, n);
	if (In(r)) {
		if (An(r, Xe.getState().analysisParadigm)) return Cu(e, n, a);
		try {
			const s = await n.actiwareFileData.get(e);
			if (!s?.actiwareSleepWake) return;
			const r = (await n.actiwareStatisticsInputs.get(e))?.input, l = (await n.files.get(e))?.seriesRevision ?? 0, c = await n.markers.where("fileId").equals(e).toArray(), u = !0 === s.actiwareStatisticsNeedsRecompute, d = (e, t) => JSON.stringify(e.filter((e) => e.date === t).map((e) => [
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
				n && "auto_score" !== n.username && "auto_score" === e.username || f.set(e.date, "auto_score" === n?.username && "auto_score" !== e.username ? e : pt(n, e));
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
				y = await Hn({
					file: s,
					statisticsInput: r
				}, h, (e) => Z(a).actiwareIntervalStatistics(e), a);
			} catch (o) {
				a?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), Le("error", "Actiware statistics recalculation failed", Je(o));
			}
			await he(n, [
				n.actiwareFileData,
				n.actiwareStatisticsInputs,
				n.files,
				n.markers
			], async () => {
				const t = await n.actiwareFileData.get(e), o = (await n.actiwareStatisticsInputs.get(e))?.input;
				if (!t || ((await n.files.get(e))?.seriesRevision ?? 0) !== l) return;
				if (JSON.stringify(o) !== JSON.stringify(r) || JSON.stringify(t.actiwareIntervals) !== JSON.stringify(s.actiwareIntervals)) return;
				const c = await n.markers.where("fileId").equals(e).toArray(), p = new Map([...h].filter(([e]) => d(c, e) === g.get(e)));
				if (0 === p.size) return;
				if (null === y) return await n.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), void await Ke(n, [e]);
				const f = qn(t, y), w = f.length > 0 ? await i.waitFor(En(f, Z(a))) : void 0, _ = Ln(t, y, p.keys(), w);
				await n.actiwareFileData.update(e, {
					actiwareStatistics: _,
					actiwareStatisticsNeedsRecompute: !0 === t.actiwareStatisticsNeedsRecompute && !(u && p.size === m.size)
				}), await Ke(n, [e]);
			}, a);
		} catch (o) {
			a?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), Le("error", "Actiware statistics recalculation failed", Je(o));
			try {
				await he(n, [n.actiwareFileData, n.files], async () => {
					await n.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), await Ke(n, [e]);
				}, a);
			} catch {
				throw o instanceof Error ? o : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
			}
		}
	}
}
function Pu(e) {
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
var ju = class e {
	sourceKey = "local";
	disposed = !1;
	operationProcessingOptions;
	constructor(e) {
		this.operationProcessingOptions = e;
	}
	fileBatches = /* @__PURE__ */ new Map();
	beginFileBatch(e, t = R(), n) {
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
				await Fu(e, a.actiwareNights, a.db, a.signal);
			} catch {
				console.warn("[actiware-statistics] a batch's statistics could neither be recomputed nor flagged.");
			}
		} };
	}
	fileBatch(e, t) {
		const n = this.fileBatches.get(e);
		return n?.db === t ? n : null;
	}
	placementDiaries(e, t) {
		const n = this.fileBatch(e, t);
		return n?.days ? n.diaries ??= nt(e, t) : nt(e, t);
	}
	async placementDiary(e, t, n) {
		return this.fileBatch(e, n)?.days ? (await this.placementDiaries(e, n)).find((e) => e.analysisDate === t) ?? null : ut(e, t, n);
	}
	async placementMarker(e, t, n, i) {
		const a = this.fileBatch(e, i);
		if (!a?.days) return zt(e, t, vt, n, void 0, i);
		const s = await (a.markers ??= i.markers.where("fileId").equals(e).toArray()), r = bt(s, {
			date: t,
			username: vt
		}, n);
		return r ? kt(r) : void 0;
	}
	async placementDay(e, t, n) {
		const i = this.fileBatch(e, n);
		return i?.days ? i.days.get(t) : dt(e, t, n, i?.activityDayMemo);
	}
	async scorerVerdict(e, t, n, i) {
		const a = this.fileBatch(t, e);
		return a?.days ? Mu(a.days, n) : a?.activityDayMemo ? Mu(await Ue(t, e, a.activityDayMemo), n) : (await Re(t, e, i))(n);
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
		const n = R(), i = await Ue(e, n, this.fileBatch(e, n)?.activityDayMemo), a = Mu(i, t), s = [];
		for (const [r, o] of [...i].sort(([e], [t]) => e.localeCompare(t))) {
			const e = await Y(o, a, `loadFileDaySeries ${r}`, Kt());
			e && s.push(e);
		}
		return s;
	}
	async loadActivityData(e, t, n) {
		const i = R();
		let a, s = await ge(e, i), r = null;
		if (Bt(s)) {
			const { ensureSavedGgirNonwear: t } = await import("./ggir-import-CoXrw_Cd.js").then((e) => e.t);
			try {
				r = await t(e, i, void 0, !1);
			} catch {
				a = "Saved GGIR nonwear recovery failed; recovered nonwear is unavailable.";
			}
			s = await ge(e, i);
		}
		const o = s?.navigationFacts;
		o?.window[t] || jc(e, i);
		const l = await re(e, t, i, void 0, o);
		if (!l) throw new Error(`No activity data found for fileId=${e} date=${t}. File may not be processed yet.`);
		const c = await this.scorerVerdict(i, e, n?.algorithm, { file: s }), u = await Y(l, c, `loadActivityData ${t}`, Kt());
		if (!u) throw new Error(`Activity data for fileId=${e} date=${t} is corrupt; please reprocess.`);
		const d = await le(t, o), p = 48 === n?.viewHours ? [d, await le(d, o)] : [d], f = await Promise.all(p.map((t) => dt(e, t, i, this.fileBatch(e, i)?.activityDayMemo))), m = [l];
		for (const b of f) {
			if (!b) break;
			m.push(b);
			const e = await Y(b, c, "loadActivityData next-day", Kt());
			if (!e) throw new Error("Next-day activity data is corrupt; please reprocess.");
			const t = u.timestamps.length, n = e.timestamps.length;
			X(u.timestamps, e.timestamps), X(u.axisY, e.axisY), X(u.vectorMagnitude, e.vectorMagnitude), (u.axisX.length > 0 || e.axisX.length > 0) && (u.axisX.length < t && (u.axisX = new Array(t).fill(0)), X(u.axisX, e.axisX.length > 0 ? e.axisX : new Array(n).fill(0))), (u.axisZ.length > 0 || e.axisZ.length > 0) && (u.axisZ.length < t && (u.axisZ = new Array(t).fill(0)), X(u.axisZ, e.axisZ.length > 0 ? e.axisZ : new Array(n).fill(0))), (u.temperature.length > 0 || e.temperature.length > 0) && (u.temperature.length < t && (u.temperature = new Array(t).fill(NaN)), X(u.temperature, e.temperature.length > 0 ? e.temperature : new Array(n).fill(NaN))), (u.eventMarkers.length > 0 || e.eventMarkers.length > 0) && (u.eventMarkers.length < t && (u.eventMarkers = new Array(t).fill(0)), X(u.eventMarkers, e.eventMarkers.length > 0 ? e.eventMarkers : new Array(n).fill(0))), X(u.eventMarkerTimestamps, e.eventMarkerTimestamps), (u.lux.length > 0 || e.lux.length > 0) && (u.lux.length < t && (u.lux = new Array(t).fill(NaN)), X(u.lux, e.lux.length > 0 ? e.lux : new Array(n).fill(NaN))), (u.sleepScores.length > 0 || e.sleepScores.length > 0) && (u.sleepScores.length < t && (u.sleepScores = new Array(t).fill(0)), X(u.sleepScores, e.sleepScores.length > 0 ? e.sleepScores : new Array(n).fill(0))), (u.sleepScoreGaps.length > 0 || e.sleepScoreGaps.length > 0) && (u.sleepScoreGaps.length < t && (u.sleepScoreGaps = new Array(t).fill(0)), X(u.sleepScoreGaps, e.sleepScoreGaps.length > 0 ? e.sleepScoreGaps : new Array(n).fill(0))), (u.lstmTimestamps30s.length > 0 || e.lstmTimestamps30s.length > 0) && (u.lstmTimestamps30s = L(u.lstmTimestamps30s, e.lstmTimestamps30s), u.lstmSleepWake30s = pe(u.lstmSleepWake30s, e.lstmSleepWake30s)), de(u, e, t, n), (u.ggirTimestamps.length > 0 || e.ggirTimestamps.length > 0) && (u.ggirSib = Q(u.ggirTimestamps, u.ggirSib, e.ggirTimestamps, e.ggirSib), u.ggirTimestamps = L(u.ggirTimestamps, e.ggirTimestamps), u.ggirEnmo = L(u.ggirEnmo, e.ggirEnmo), u.ggirAnglez = L(u.ggirAnglez, e.ggirAnglez));
		}
		u.ggirSib = me(u.ggirTimestamps, u.ggirSib);
		const { start: h, end: g } = await Fn(t, 48 === n?.viewHours ? 48 : void 0, o), y = oe(s?.sourceType, s?.sourceProfileId);
		let w = [];
		"gt3x_capsense" === y || "actiware_off_wrist" === y ? w = (await Be(e, h, g, i)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : "detach_nonwear" === y && u.detachNonwear && (w = Ec(u.detachNonwear, u.timestamps));
		const _ = {};
		for (const [b, I] of Object.entries(u.nonwearMasksByDetector)) 0 !== I.length && (ie(b) || (_[b] = I));
		const v = m.flatMap((e) => e.ggirTimestamps?.byteLength ? [e.ggirInvalid] : []);
		if (v.length > 0 && v.every((e) => void 0 !== e)) {
			const e = v.flatMap((e) => Array.from(new Uint8Array(e)));
			e.length === u.ggirTimestamps.length && (_[b.ggir_part2_invalid] = e);
		}
		it(u.timestamps, Bc(m, "count_sleep_wake")), it(u.ggirTimestamps, Bc(m, "ggir_sleep_period"));
		const k = function(e, t, n, i) {
			const a = {}, s = e.filter((e) => qc(e, "counts") > 0 || qc(e, "ggir") > 0);
			for (const r of Mc(i)) {
				const e = K(r);
				if (!s.every((t) => t.displayNonwear && e in t.displayNonwear)) continue;
				const i = s.map((t) => t.displayNonwear[e] ?? null), o = i.filter((e) => null !== e), l = o[0]?.grid;
				if (!l) {
					a[e] = null;
					continue;
				}
				if (o.some((e) => e.grid !== l)) continue;
				const c = o.some((e) => null !== e.weight), u = [], d = [];
				if (s.forEach((e, t) => {
					const n = i[t], a = n ? new Uint8Array(n.any) : new Uint8Array(qc(e, l));
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
		Object.keys(k).length < Mc(s ?? null).length && jc(e, i);
		const S = await se(u, m, c, s?.epochLengthSeconds ?? 60);
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
			...u.ggirTimestamps.length > 0 && 0 === u.ggirSib.length ? { ggirSibMissingReason: ne(s, l) } : {},
			algorithmResults: u.sleepScores.length > 0 ? u.sleepScores : null,
			...u.sleepScoreGaps.length > 0 ? { algorithmResultGaps: u.sleepScoreGaps } : {},
			...n?.algorithm && !te(n.algorithm) && 0 === u.sleepScores.length && u.timestamps.length > 0 ? { scorerMissingReason: "stale" === c.status ? c.reason : fe(n.algorithm, {
				sourceProfileId: s?.sourceProfileId,
				actiwareSleepWake: (await gt(e, i))?.actiwareSleepWake
			}) } : {},
			lstmTimestamps30s: u.lstmTimestamps30s,
			lstmSleepWake30s: u.lstmSleepWake30s,
			nonwearResults: u.nonwearResults,
			nonwearResultsChoi2011: u.nonwearResultsChoi2011,
			vanHeesNonwear: u.vanHeesNonwear,
			algorithmicNonwearMasks: _,
			nonwearBands: k,
			...r ? { nonwearSourceLabels: { [b.ggir_saved]: r } } : {},
			...a ? { savedNonwearMissingReason: a } : {},
			epochResolutions: S,
			viewStart: h,
			viewEnd: g,
			sensorNonwearPeriods: w,
			deviceNonwearSource: y
		};
	}
	async loadMarkers(e, t, n, i, a, s) {
		const r = s ?? R(), o = await zt(e, t, n, i, a, r);
		return o ? Pu(o) : null;
	}
	async saveActiwareRestEdit(e, t, n, i = R(), a) {
		const s = await i.actiwareFileData.get(e), r = (await i.actiwareStatisticsInputs.get(e))?.input, o = s?.actiwareSleepWake;
		if (!o || !r) throw new Wn("This recording has no Actiware analysis settings, so its rest intervals cannot be edited.");
		const l = Z(a), c = s?.actiwareIntervals ?? [], u = await Pn(c, t, n, {
			epochs: r.epochs,
			params: o.params,
			grid: {
				startTimestamp: o.startTimestamp,
				epochSeconds: o.epochSeconds
			},
			core: l
		}), d = Ou(await i.markers.where("fileId").equals(e).toArray()), p = await Bn(u, r, d, (e) => l.actiwareIntervalStatistics(e)).catch(() => null), { username: f, selectedStudyId: m } = Xe.getState(), h = Zt.captureWorkspaceBinding(i, {
			username: f,
			studyId: m
		});
		if (!await Zt.settleWritesForDb(i, h)) throw new Wn(Eu);
		let g = !1;
		return await he(i, [
			i.actiwareFileData,
			i.markers,
			i.files,
			i.placementResults,
			i.projectMeta,
			i.auditLog
		], async () => {
			const s = await i.actiwareFileData.get(e);
			if (JSON.stringify(s?.actiwareIntervals ?? []) !== JSON.stringify(c)) throw new Wn("That rest interval changed since it was shown; reload the night.");
			if (g = null === p || JSON.stringify(Ou(await i.markers.where("fileId").equals(e).toArray())) !== JSON.stringify(d), await i.actiwareFileData.update(e, g ? {
				actiwareIntervals: u,
				actiwareStatisticsNeedsRecompute: !0
			} : {
				actiwareIntervals: u,
				actiwareStatistics: p ?? [],
				actiwareStatisticsNeedsRecompute: !1
			}), await i.placementResults.delete(e), await Tt([e], i, a), await Ke(i, [e]), !await Zt.recordFileEventDurably({
				fileId: e,
				analysisDate: t,
				action: M.ACTIWARE_REST_EDITED,
				payload: {
					edit: n.kind,
					...Gn(c, u)
				}
			}, h)) throw new Wn(Eu);
		}, a), g && await Cu(e, i, a), Un(u, t, d.includes(t));
	}
	async saveMarkers(e, t, n, i, a, s, r, o, l) {
		const c = o ?? R(), u = Xe.getState(), d = Vn(c, {
			username: n,
			studyId: u.selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, l), p = r?.signal ?? this.fileBatch(e, c)?.signal;
		let f, m = null, h = null, g = !1, y = r?.sleepPeriodDetection ?? u.sleepPeriodDetection;
		const w = await Et({
			fileId: e,
			date: t,
			username: n,
			algorithm: a ?? null,
			detectionRule: s ?? null,
			signal: p
		}, c, async (o) => {
			const l = "function" == typeof i ? await i(o ? Pu(o) : null) : {
				data: i,
				settings: r
			};
			if (!l) return null;
			m = l.data;
			const d = l.settings ?? r, w = f = await ge(e, c);
			An(w, u.analysisParadigm) && (m = {
				...m,
				sleepMarkers: jn(m.sleepMarkers, (await gt(e, c))?.actiwareIntervals, t, m.isInvalidNight ?? o?.isInvalidNight ?? !1)
			}), y = d?.sleepPeriodDetection ?? u.sleepPeriodDetection;
			const _ = y ? Ft(y) : null, v = void 0 === d?.periodGuider ? Sn(u, w) : null, b = d?.periodGuider ?? v?.periodGuider, S = d?.periodGuider ?? (_ && !0 !== v?.placementFromSource ? jt(qt(_)) : v?.periodGuider), A = a ? k(a) : null, x = A ? I(A) : null, $ = await zt(e, t, n, a ?? null, s ?? null, c);
			g = !$ || $.algorithm !== (a ?? null) || $.detectionRule !== (s ?? null) || JSON.stringify($.sleepMarkers) !== JSON.stringify(m.sleepMarkers) || void 0 !== m.isInvalidNight && m.isInvalidNight !== $.isInvalidNight, h = void 0 !== m.nonwearMarkers && "auto_score" !== n ? Iu($?.nonwearMarkers) : null;
			let T = m.sleepPeriodDetectionConfig ?? null;
			if (null === T) {
				const n = await ut(e, t, c);
				T = an({
					algorithm: a ?? null,
					periodGuider: $i(0, b, y),
					sleepPeriodDetection: y,
					diaryOnsetTime: Ze(n),
					diaryWakeTime: ve(n)
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
					periodGuider: S ?? null,
					sleepPeriodDetectionConfig: T,
					algorithmVersion: x,
					...void 0 !== d?.expected ? { expected: d.expected } : {},
					...void 0 !== d?.guardHashOnly ? { guardHashOnly: d.guardHashOnly } : {}
				}
			};
		}, null === d ? null : {
			...d,
			sleepPeriodDetection: d.sleepPeriodDetection ?? y
		});
		if (!w?.record || !m) return null;
		const _ = m, v = Pu(w.record), b = In(f), S = g || !b ? void 0 : await c.actiwareFileData.get(e);
		if (b && (g || S?.actiwareStatisticsNeedsRecompute || S?.actiwareSleepWake && !S.actiwareStatistics?.length)) {
			const n = this.fileBatch(e, c);
			n ? n.actiwareNights.set(t, _.sleepMarkers) : await Fu(e, /* @__PURE__ */ new Map([[t, _.sleepMarkers]]), c, p, { file: f }).catch((e) => {
				if (!p?.aborted) throw e;
			});
		}
		if (p?.aborted) return v;
		Jn(e, n, c, p), null !== h && h !== Iu(_.nonwearMarkers) && Tu(e, c, void 0, p), g && zt(e, t, n, a ?? null, s ?? null, c).then(async (t) => {
			if (!t) return;
			const { storeNightPeriodMetrics: n } = await import("./local-export-shard-worker-CRWHMs-Y.js").then((e) => e.w);
			return n(t, await this.scorerVerdict(c, e, t.algorithm), c, p);
		}).catch(() => {
			console.warn("[local-analysis] period metrics could not be stored with the saved night");
		});
		try {
			if (R() !== c) return v;
		} catch {
			return v;
		}
		const A = D();
		if (!A.capabilities.tauri) return v;
		try {
			const [i, r] = await Promise.all([ge(e, c), zt(e, t, n, a ?? null, s ?? null, c)]);
			if (!i?.fileHash || !r?.contentHash) return v;
			await A.workspace.saveMarkers({
				fileHash: i.fileHash,
				date: t,
				username: n,
				sleepMarkers: (x = _.sleepMarkers, JSON.stringify(x.map((e) => ({
					onset_timestamp: e.onsetTimestamp,
					offset_timestamp: e.offsetTimestamp,
					marker_index: e.markerIndex,
					marker_type: e.markerType
				})))),
				nonwearMarkers: Vc(r.nonwearMarkers),
				isInvalidNight: r.isInvalidNight,
				notes: _.notes,
				contentHash: r.contentHash
			});
		} catch {
			console.warn("[platform] native marker mirror failed for the active local selection");
		}
		var x;
		return v;
	}
	async listFiles() {
		const e = R();
		return (await Pe(e)).map((e) => {
			const t = e.id ?? 0, n = r(e);
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
				views: g(t, n, /* @__PURE__ */ new Set(), e.epochLengthSeconds)
			};
		});
	}
	async listDates(e) {
		const t = R();
		return (await ge(e, t))?.availableDates ?? qe(e, t);
	}
	async getDiaryEntry(e, t) {
		const n = R(), i = await ut(e, t, n);
		return i ? je(i, await Me(e, n)) : null;
	}
	async listDiaryEntries(e) {
		const t = R(), n = await nt(e, t);
		if (0 === n.length) return n;
		const i = await Me(e, t);
		return null === i ? n : Ie(n, i);
	}
	async loadPlacementFileContext(e, t, n, i, a, s, r, o, l, c, u) {
		const d = this.fileBatch(e, s);
		if (!d) return this.readPlacementFileContext(e, t, n, i, a, s, r, o, l, c, u);
		const p = JSON.stringify([
			n ?? null,
			r,
			o,
			l,
			a,
			c
		]);
		let f = d.placementContexts.get(p);
		f || (f = this.readPlacementFileContext(e, null, n, i, a, s, r, o, l, c, u), d.placementContexts.set(p, f), f.catch(() => {
			d.placementContexts.delete(p);
		}));
		const { contextDays: m, deviceOffNonwear: h } = await f;
		return {
			contextDays: m.filter((e) => e.analysisDate !== t),
			deviceOffNonwear: h
		};
	}
	async readPlacementFileContext(e, t, n, i, a, s, r, o, l, c, u) {
		const d = Z(u), [p, f, m] = await Promise.all([
			this.fileBatch(e, s)?.days ? [...this.fileBatch(e, s).days.keys()].sort() : qe(e, s),
			this.placementDiaries(e, s),
			uu(r) ? Ce(e, s) : be(e, s)
		]), h = await Ie(f, a, d), g = new Map(h.map((e) => [e.analysisDate, e])), y = [], w = p.filter((e) => e !== t), _ = await Promise.all(w.map((t) => this.placementDay(e, t, s)));
		for (const [v, b] of w.entries()) {
			const t = _[v];
			if (!t) continue;
			for (const n of r) await ki(t, n, c, s, d, u, this.fileBatch(e, s)?.activityDayMemo);
			const a = await Y(t, i, `autoScore context ${b}`, c, d);
			if (!a || 0 === a.timestamps.length || 0 === a.sleepScores.length) continue;
			const p = g.get(b), f = a.timestamps[0] ?? 0, h = a.timestamps[a.timestamps.length - 1] ?? f, w = await rt(a.timestamps, ee(n), d), k = cu(un(await fn(r, a.nonwearMasksByDetector, {
				offPeriods: o,
				source: l
			}, {
				timestampsSec: a.timestamps,
				epochLenSec: w
			}, d)));
			y.push({
				analysisDate: b,
				epochLengthSeconds: w,
				timestamps: a.timestamps,
				activityCounts: a.axisY,
				sleepScores: a.sleepScores,
				choiNonwear: k.choiNonwear,
				...k.nonwearWeight ? { nonwearWeight: k.nonwearWeight } : {},
				...k.nonwearMemberFlags ? { nonwearMemberFlags: k.nonwearMemberFlags } : {},
				sensorNonwear: m.filter((e) => e.startTimestamp <= h && e.endTimestamp >= f),
				diaryBedTime: mt(p),
				diaryOnsetTime: Ze(p),
				diaryWakeTime: ve(p),
				diaryNaps: p ? tt(p) : null,
				diaryNonwear: p ? ye(p) : null
			});
		}
		return {
			contextDays: y,
			deviceOffNonwear: m
		};
	}
	async autoScore(e, t, n, i) {
		return this.autoScoreNight(e, t, n, ti, i);
	}
	async autoScoreFile(e, t, n = !0, i = R(), a) {
		if (z(i.name)) return /* @__PURE__ */ new Map();
		const s = await this.filePlacementState(e, t, i);
		if (!s) return /* @__PURE__ */ new Map();
		const { file: r, inputs: o, cached: l } = s, c = Pt(r);
		return c ? new Map(r.availableDates.map((e) => [e, {
			kind: "refused",
			reason: c
		}])) : l ? Du(i, e, o, l, t.signal) : n ? B({
			kind: S.AUTO_SCORE,
			key: `${S.AUTO_SCORE}:${String(e)}:${o}`,
			label: "Compute marker placement",
			workspaceId: i.name,
			signal: t.signal,
			run: async (n) => {
				const l = a?.inputs === o ? a.byDate : await this.computeFilePlacement(s, t, i, n);
				return await this.storeFilePlacement(e, o, l, i, {
					...t,
					signal: n.signal
				}) ? (n.progress(r.availableDates.length, r.availableDates.length), Du(i, e, o, l, n.signal)) : /* @__PURE__ */ new Map();
			}
		}) : /* @__PURE__ */ new Map();
	}
	async filePlacementState(e, t, n) {
		const a = await ge(e, n), s = zu.get(n)?.get(e), [r, o, l] = await Promise.all([
			nt(e, n),
			n.markerProvenance.get(e),
			s ? void 0 : pu(n, e)
		]);
		if (!a) return null;
		const c = await i.waitFor(async function(e, t, n, i) {
			const a = Xe.getState(), s = t.ruleset ?? a.placementRuleset, r = /* @__PURE__ */ new Set([m.VAN_HEES_2015, ...t.algorithm && te(t.algorithm) ? [t.algorithm] : []]), o = (e) => "auto_score" === e.username && r.has(e.algorithm ?? ""), l = (i?.rows ?? []).filter((e) => o(e) || s !== p.LEGACY && e.nonwearDecided).map((e) => [e.id, o(e) ? e.lastModifiedAt : e.nonwearSpans ?? e.lastModifiedAt]), { signal: c, choiAxis: u, hasptVariant: d, studySettingsRevision: f, ...h } = t;
			return O(JSON.stringify({
				v: 2,
				options: h,
				ruleset: s,
				nonwearDetectors: t.nonwearDetectors ?? Vt(bn(t.algorithm)),
				choiAxis: t.choiAxis ?? a.choiAxis,
				hasptVariant: t.hasptVariant ?? a.ggirHasptVariant,
				seriesRevision: e.seriesRevision ?? 0,
				dates: e.availableDates,
				diaries: n,
				rows: l
			}));
		}(a, t, r, o));
		if (s?.inputs === c) return {
			fileId: e,
			file: a,
			diaries: r,
			inputs: c,
			cached: s.byDate
		};
		const u = s ? await pu(n, e) : l;
		return {
			fileId: e,
			file: a,
			diaries: r,
			inputs: c,
			cached: u?.inputs === c ? new Map(Object.entries(u.byDate)) : null
		};
	}
	async storeFilePlacement(e, t, n, i, a) {
		if (a.signal?.throwIfAborted(), z(i.name)) return !1;
		const s = await he(i, [
			i.files,
			i.diaryEntries,
			i.markerProvenance,
			i.placementResults,
			i.studySettings
		], async () => {
			if (void 0 !== a.studySettingsRevision && ((await Se(i))?.contentHash ?? null) !== a.studySettingsRevision) return !1;
			const s = await this.filePlacementState(e, a, i);
			return !z(i.name) && s?.inputs === t && (await i.placementResults.put({
				fileId: e,
				policy: 2,
				inputs: t,
				byDate: Object.fromEntries(n)
			}), !0);
		}, a.signal);
		return s && R() === i && _t(e, i), s;
	}
	async storeFilesPlacement(t, n, i, s, r) {
		const o = [], l = await Promise.allSettled(t.map(({ fileId: e, options: t }) => this.filePlacementState(e, t, n))), c = {
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: C()
		}, u = l.flatMap((e) => "fulfilled" === e.status && e.value ? [e.value.file] : []), d = u.flatMap((e) => e.sourceType === a.GGIR_5S_UPLOAD ? [{ size: e.sourceSizeBytes ?? 0 }] : []), p = d.length > 0 && d.length === u.length ? J(d, c) : {
			...c,
			maxExtraWorkers: Number.POSITIVE_INFINITY
		}, f = await G(t.map(({ fileId: t, options: a }, s) => ({
			name: `placement:${String(t)}`,
			cost: 1,
			run: async (c, u) => {
				try {
					const o = new e(), u = l[s];
					if ("rejected" === u.status) throw u.reason;
					const d = u.value;
					if (!d || d.cached) return null;
					const p = await o.computeFilePlacement(d, a, n, i, c, r);
					return {
						fileId: t,
						inputs: d.inputs,
						byDate: p
					};
				} catch {
					return i.signal.throwIfAborted(), u.primary || u.cancel(), o.push(t), null;
				}
			}
		})), {
			createWorker: w,
			extraWorkers: H(p),
			cancelOperation: () => {},
			...s,
			signal: i.signal
		});
		for (const [e, a] of f.entries()) {
			try {
				a && await this.storeFilePlacement(a.fileId, a.inputs, a.byDate, n, t[e].options) && Du(n, a.fileId, a.inputs, a.byDate, i.signal);
			} catch {
				i.signal.throwIfAborted(), o.push(t[e].fileId);
			}
			i.progress(e + 1, f.length);
		}
		if (o.length > 0) {
			const e = `Marker placement failed for recording ID(s) ${o.sort((e, t) => e - t).map(String).join(", ")}.`;
			throw i.progress(f.length, f.length, e), new Error(e);
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
		return ct(async (c) => {
			const u = await Ue(r, n, c), d = s ?? (await ni(n)).csvText, p = void 0 !== a && te(t.algorithm), f = [];
			let m, h = o.length;
			const g = new Promise((e) => {
				m = e;
			}).then(async () => {
				if (0 !== f.length) try {
					i.signal.throwIfAborted();
					const e = f.map((e) => e.opts), n = p && a ? await a.placeStoredGgirNights([...u.values()], xe([...u.values()], t.algorithm), f.map((e) => ({
						options: e.opts,
						...e.anchor
					}))) : await function(e, t = _()) {
						return rn(e, t);
					}(e, a ?? Z(i.signal));
					i.signal.throwIfAborted();
					for (const [t, i] of f.entries()) i.resolve(n[t]);
				} catch (e) {
					for (const t of f) t.reject(e);
				}
			}), y = this.beginFileBatch(r, n, i.signal), w = this.fileBatch(r, n), v = {
				activityDayMemo: w.activityDayMemo,
				days: w.days,
				span: w.span,
				file: w.file,
				diaries: w.diaries,
				markers: w.markers
			};
			w.activityDayMemo = c, w.days = u, w.span = Promise.resolve(ru(u)), w.file = Promise.resolve(e.file), w.diaries = Promise.resolve(e.diaries);
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
				Object.assign(w, v), await y.end();
			}
		});
	}
	async autoScoreNight(e, t, i, a, s = R(), r, l, c) {
		const u = l ?? Z(i.signal);
		i.signal?.throwIfAborted();
		const d = this.fileBatch(e, s), f = await (d ? d.file ??= ge(e, s) : ge(e, s)), h = Pt(f);
		if (h) return {
			kind: "refused",
			reason: h
		};
		const g = i.ruleset ?? Xe.getState().placementRuleset, y = bn(i.algorithm), w = i.nonwearDetectors ?? Vt(y), _ = i.choiAxis ?? Xe.getState().choiAxis, v = i.sleepPeriodDetection ? Ft(i.sleepPeriodDetection) : void 0;
		let b = dn(v, {
			path: y,
			selected: w
		}) ?? null;
		const k = await re(e, t, s, (t) => this.placementDay(e, t, s), void 0, u);
		if (!k) return {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
		const S = () => In(f) ? d ? d.actiware ??= gt(e, s) : gt(e, s) : Promise.resolve(void 0);
		if (i.algorithm === m.ACTIWARE_SLEEP_WAKE) {
			const e = await S(), i = en(e?.actiwareIntervals, t), a = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(11, 19), s = e?.actiwareRestProposal?.notes?.[t], r = (e?.actiwareIntervals ?? []).some((e) => "rest" === e.kind && "scorer" === e.origin && null !== Qt([e], t)), l = s && !r ? [`Rest proposal (SCREENS Autoscore): ${s}`] : [], c = {
				...b,
				...gn(o.ACTIWARE_REST_INTERVAL, { hasDiary: !1 })
			};
			return i?.sleep ? {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: i.sleep.startTimestamp,
					offset_timestamp: i.sleep.endTimestamp,
					marker_type: n.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: (i.additionalSleeps ?? []).map((e, t) => ({
					onset_timestamp: e.startTimestamp,
					offset_timestamp: e.endTimestamp,
					marker_type: n.NAP,
					marker_index: t + 2
				})),
				decisions: [],
				sleep_period_detection_config: c,
				notes: [`Actiware sleep interval ${a(i.sleep.startTimestamp)}–${a(i.sleep.endTimestamp)} inside rest interval ${a(i.rest.startTimestamp)}–${a(i.rest.endTimestamp)}, as Actiware sets it.`, ...l]
			} : {
				kind: "placed",
				sleep_markers: [],
				nap_markers: [],
				decisions: [],
				sleep_period_detection_config: c,
				notes: [i ? `Actiware sets no sleep interval inside this night's rest interval (${a(i.rest.startTimestamp)}–${a(i.rest.endTimestamp)}).` : "Actiware sets no rest interval for this night.", ...l]
			};
		}
		const I = await this.placementDay(e, await le(t, void 0, u), s), A = await S(), $ = oe(f?.sourceType, f?.sourceProfileId), T = await ou([k, I], w, _, $, s, i.signal, this.fileBatch(e, s)?.activityDayMemo), N = await this.scorerVerdict(s, e, i.algorithm, { file: f }), z = te(i.algorithm), D = z && c ? { kind: "angle-deferred" } : await V({
			day: k,
			nextDay: I,
			verdict: N,
			angle: z,
			requireScores: !0,
			missingScoresReason: i.algorithm === m.LSTM_SLEEP_WAKE ? "No LSTM sleep/wake results are stored for this file. Re-import or reprocess the raw file so the app can compute spectral features and run the ONNX model." : "No algorithm results available",
			choiAxis: _,
			laterDays: async () => [...(d?.days ?? await Ue(e, s, d?.activityDayMemo)).values()].filter((e) => e.date > t).sort((e, t) => e.date.localeCompare(t.date)),
			core: u
		});
		if ("refused" === D.kind) return D;
		const M = z ? null : lu(T);
		if (null !== M) return {
			kind: "refused",
			reason: M
		};
		b = dn(v, {
			path: y,
			selected: w,
			available: T.available,
			dropped: T.dropped
		}) ?? null;
		const E = hn(T.dropped, y), O = (e) => "refused" === e.kind || null === b && 0 === E.length ? e : {
			...e,
			notes: [...E, ...e.notes],
			sleep_period_detection_config: {
				...e.sleep_period_detection_config ?? {},
				...b ?? {}
			}
		};
		if ("angle" === D.kind || "angle-legacy" === D.kind || "angle-deferred" === D.kind) {
			const o = await this.placementMarker(e, t, i.algorithm ?? null, s) ?? await this.placementMarker(e, t, m.VAN_HEES_2015, s), l = o?.sleepMarkers[0], h = null != l?.onsetTimestamp && null != l.offsetTimestamp ? {
				startTimestamp: l.onsetTimestamp,
				endTimestamp: l.offsetTimestamp
			} : null, y = () => l && null != l.onsetTimestamp && null != l.offsetTimestamp ? {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: l.onsetTimestamp,
					offset_timestamp: l.offsetTimestamp,
					marker_type: n.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: [],
				notes: ["HDCZA fallback: no 5s SIB stream available for structured sleep-period fusion", `HDCZA window: ${Dt(l.onsetTimestamp)} – ${Dt(l.offsetTimestamp)}`],
				decisions: [],
				sleep_period_detection_config: o?.sleepPeriodDetectionConfig ?? b
			} : {
				kind: "refused",
				reason: "No HDCZA sleep window found — re-process the file to regenerate it"
			};
			if ("angle" === D.kind || "angle-deferred" === D.kind) {
				let n = {
					timestamps: /* @__PURE__ */ new Float64Array(),
					activityCounts: /* @__PURE__ */ new Float64Array(),
					sleepScores: /* @__PURE__ */ new Uint8Array()
				};
				if ("angle" === D.kind) {
					const e = await U(D, t, u);
					if ("refused" === e.kind) return e;
					n = e.series;
				}
				const [l, m] = await Promise.all([this.placementDiary(e, t, s), d ? d.span ??= Me(e, s, f?.seriesRevision ?? 0) : Me(e, s, f?.seriesRevision ?? 0)]), w = l ? await je(l, m, u) : null, _ = (await Ni(i.sensorLocation ?? "wrist", i.hasptVariant ?? Xe.getState().ggirHasptVariant, u)).variant, v = function(e) {
					const t = e?.sleepPeriodDetectionConfig?.haspt_variant;
					return Object.values(x).includes(t) ? t : null;
				}(o), b = null == o ? null : null == v ? `HASPT variant not recorded at import; assumed ${_} from the study setting. Reprocess the file to record it.` : v !== _ ? `HASPT variant at import was ${v}; the study setting now gives ${_}. Placed with ${v}; reprocess the file to apply ${_}.` : null, S = g === p.GGIR_PART4, A = S ? await et(await this.placementDiaries(e, s), void 0, u) : null, $ = A?.wakeIsOutBed ? null : Fe(w, A?.outBedIsWake ? "diary_out_of_bed_time" : "diary_wake_time"), T = A?.outBedIsWake ? null : Fe(w, A?.wakeIsOutBed ? "diary_wake_time" : "diary_out_of_bed_time"), N = {
					...n,
					choiNonwear: null,
					ggirHasptAlgo: v ?? _,
					ggirConfigCsv: r ?? (await ni(s)).csvText,
					...A?.hasBedlog ? { ggirDiaryHasBedlog: !0 } : {},
					...A?.hasSleeplog ? { ggirDiaryHasSleeplog: !0 } : {},
					diaryBedTime: S ? Fe(w, "diary_in_bed_time") : mt(w),
					diaryOutBedTime: S ? T : ke(w),
					diaryOnsetTime: S ? Fe(w, "diary_onset_time") : Ze(w),
					diaryWakeTime: S ? $ : ve(w),
					diaryNaps: w ? tt(w) : null,
					analysisDate: t,
					onsetMinConsecutiveSleep: 1,
					offsetMinConsecutiveMinutes: 1,
					algorithm: i.algorithm,
					periodGuider: $i(i.algorithm, i.periodGuider, i.sleepPeriodDetection),
					...void 0 !== i.sleepPeriodDetection ? { sleepPeriodDetection: i.sleepPeriodDetection } : {},
					...i.scorerPostprocessing ? { scorerPostprocessing: i.scorerPostprocessing } : {},
					ruleset: g,
					epochLengthSeconds: 5,
					hdczaWindow: h
				}, z = "angle-deferred" === D.kind ? await c(N, k, I) : await a(N);
				return "angle-legacy" === z ? y() : O(b && "refused" !== z.kind ? {
					...z,
					notes: [b, ...z.notes]
				} : z);
			}
			return y();
		}
		const [C, F] = await Promise.all([this.placementDiary(e, t, s), d ? d.span ??= Me(e, s, f?.seriesRevision ?? 0) : Me(e, s, f?.seriesRevision ?? 0)]), P = C ? await je(C, F, u) : null, { unpacked: j } = D, { timestamps: B, axisY: q, sleepScores: G, eventMarkerTimestamps: H } = j, J = Ot(i.detectionRule), L = $i(i.algorithm, i.periodGuider, i.sleepPeriodDetection), W = await this.placementMarker(e, t, m.VAN_HEES_2015, s), K = W?.sleepMarkers.find((e) => e.markerType === n.MAIN_SLEEP) ?? W?.sleepMarkers[0], Y = null != K?.onsetTimestamp && null != K.offsetTimestamp ? {
			startTimestamp: K.onsetTimestamp,
			endTimestamp: K.offsetTimestamp
		} : null, X = await rt(B, ee(i.algorithm), u), Q = T.available.some(_n) ? await (d ? d.sensor ??= ze(e, s) : ze(e, s)) : [], ne = cu(un(await fn(T.available, j.nonwearMasksByDetector, {
			offPeriods: Q,
			source: $
		}, {
			timestampsSec: B,
			epochLenSec: X
		}, u))), ie = g !== p.LEGACY ? await this.loadPlacementFileContext(e, t, i.algorithm, N, F, s, T.available, Q, $, _, i.signal) : null, { startIndex: ae, endIndex: se } = await On(B, t, u);
		if (ae === se) return {
			kind: "refused",
			reason: "No activity data found for this date"
		};
		const ce = B.slice(ae, se), ue = q.slice(ae, se), de = G.slice(ae, se), pe = ne.choiNonwear ? ne.choiNonwear.slice(ae, se) : null, fe = ne.nonwearWeight ? ne.nonwearWeight.slice(ae, se) : null, me = ne.nonwearMemberFlags ? ne.nonwearMemberFlags.slice(ae, se) : null, he = ce[0] ?? 0, we = ce[ce.length - 1] ?? he, _e = Qt(A?.actiwareIntervals, t);
		return O(await a({
			timestamps: ce,
			activityCounts: ue,
			sleepScores: de,
			choiNonwear: pe,
			...fe ? { nonwearWeight: fe } : {},
			...me ? { nonwearMemberFlags: me } : {},
			diaryBedTime: mt(P),
			diaryOnsetTime: Ze(P),
			diaryWakeTime: ve(P),
			diaryNaps: P ? tt(P) : null,
			diaryNonwear: P ? ye(P) : null,
			analysisDate: t,
			onsetMinConsecutiveSleep: J.onsetN,
			offsetMinConsecutiveMinutes: J.offsetN,
			algorithm: i.algorithm,
			periodGuider: L,
			...void 0 !== i.sleepPeriodDetection ? { sleepPeriodDetection: i.sleepPeriodDetection } : {},
			...i.scorerPostprocessing ? { scorerPostprocessing: i.scorerPostprocessing } : {},
			ruleset: g,
			nonwearDetectors: ne.nonwearDetectors,
			epochLengthSeconds: X,
			hdczaWindow: Y,
			eventMarkerTimestamps: H.filter((e) => e >= he && e <= we + 60),
			actiwareRestWindow: _e,
			nightStartHour: Wt(i.nightStartHour),
			nightEndHour: Wt(i.nightEndHour),
			...ie ? {
				sensorNonwear: ie.deviceOffNonwear.filter((e) => e.startTimestamp <= we && e.endTimestamp >= he),
				contextDays: ie.contextDays
			} : {}
		}));
	}
	async autoNonwear(e, t, n) {
		if (void 0 === n.threshold) throw new Error("Local auto-nonwear requires a resolved nonwear threshold.");
		const i = R(), a = await re(e, t, i, (t) => dt(e, t, i, this.fileBatch(e, i)?.activityDayMemo));
		if (!a) return {
			kind: "refused",
			reason: "No activity data"
		};
		const [s, r, o, l] = await Promise.all([
			dt(e, await le(t), i, this.fileBatch(e, i)?.activityDayMemo),
			ut(e, t, i),
			ze(e, i),
			ge(e, i)
		]), c = Xe.getState(), u = Sn(c, l), d = n.nonwearDetectors ?? ("ggir" === bn(u.algorithm) ? c.nonwearDetectorsGgir : u.nonwearDetectorsCounts), p = oe(l?.sourceType, l?.sourceProfileId), f = await ou([a, s], d, Kt(), p, i, void 0, this.fileBatch(e, i)?.activityDayMemo), m = lu(f);
		if (null !== m) return {
			kind: "refused",
			reason: m
		};
		const h = await V({
			day: a,
			nextDay: s,
			verdict: $e,
			angle: !1,
			requireScores: !1,
			missingScoresReason: "",
			choiAxis: Kt(),
			laterDays: () => Promise.resolve([])
		});
		if ("counts" !== h.kind) return {
			kind: "refused",
			reason: "refused" === h.kind ? h.reason : W
		};
		const g = h.unpacked, { timestamps: y, axisY: w } = g, b = y[0] ?? 0, k = y[y.length - 1] ?? b, S = un(await fn(f.available, g.nonwearMasksByDetector, {
			offPeriods: o.filter((e) => e.startTimestamp <= k && e.endTimestamp >= b),
			source: p
		}, {
			timestampsSec: y,
			epochLenSec: 60
		})), I = cu(S), A = uu(f.available), x = r ? ye(r) : [], $ = n.existingSleepMarkers, T = await async function(e) {
			if (0 === e.timestamps.length || 0 === e.activityCounts.length) return Xt("No activity data");
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
				...sn(e.nonwearDetectors, e.nonwearWeight, {
					alwaysNameSingle: !0,
					memberFlags: e.nonwearMemberFlags
				})
			}, n = [
				JSON.stringify(t),
				e.timestamps instanceof Float64Array ? e.timestamps : Float64Array.from(e.timestamps),
				e.activityCounts instanceof Float64Array ? e.activityCounts : Float64Array.from(e.activityCounts),
				e.choiNonwear instanceof Uint8Array ? e.choiNonwear : Uint8Array.from(e.choiNonwear ?? [])
			], i = n.slice(1).filter((t) => ArrayBuffer.isView(t) && t !== e.timestamps && t !== e.activityCounts && t !== e.choiNonwear), a = await _().placeNonwearMarkers(v(n, i.map((e) => e.buffer)));
			return a ? {
				kind: "placed",
				nonwear_markers: a.nonwear_markers,
				notes: a.notes
			} : Xt("Nonwear placement is unavailable in this build — reload while online to update the local engine.");
		}({
			timestamps: y,
			activityCounts: w,
			diaryNonwear: x,
			choiNonwear: A ? null : I.choiNonwear,
			nonwearDetectors: I.nonwearDetectors,
			...I.nonwearWeight ? { nonwearWeight: I.nonwearWeight } : {},
			...I.nonwearMemberFlags ? { nonwearMemberFlags: I.nonwearMemberFlags } : {},
			sensorNonwearPeriods: A ? o.filter((e) => e.startTimestamp <= k && e.endTimestamp >= b).sort((e, t) => e.startTimestamp - t.startTimestamp).map((e) => [e.startTimestamp, e.endTimestamp]) : [],
			existingSleepMarkers: $,
			analysisDate: t,
			threshold: n.threshold
		});
		return "refused" === T.kind ? T : {
			kind: "placed",
			nonwear_markers: T.nonwear_markers.map((e) => tn(e, S?.available.length ?? 0)),
			notes: [...hn(f.dropped, bn(u.algorithm)), ...T.notes]
		};
	}
	async listFileScoringCounts(e, t, n) {
		return this.fileScoringCountsIn(R(), e, t, n);
	}
	async fileScoringCountsIn(e, t, n, i) {
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const { nightStartHour: a, nightEndHour: s } = Au(i), [r, o] = await Promise.all([e.files.bulkGet([...t]), Te(t, e)]);
		return Promise.all(t.map(async (t, i) => {
			const l = r[i], c = l?.availableDates ?? await qe(t, e), u = /* @__PURE__ */ new Map();
			for (const e of o[i]?.rows ?? []) e.username === n && u.set(e.date, pt(u.get(e.date), e));
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
		const a = R(), s = (await ge(e, a))?.nightDifficulty, { nightStartHour: r, nightEndHour: o } = Au(i);
		if (s?.nightStartHour !== r || s.nightEndHour !== o || !t.every((e) => e in s.byDate)) return null;
		void 0 === s.notRankableReason && _().getComputeIdentity().then(({ sourceRevision: t }) => {
			s.sourceRevision !== String(t) && Tu(e, a, i);
		}, () => {});
		const [l, c] = await Promise.all([Qe(e, a), pu(a, e)]), u = Ye(l, n), d = Ye(l, vt), p = We(l), f = t.filter((e) => (p.get(e)?.size ?? 0) >= 2), m = await Rc(f.flatMap((e) => [{
			usersForDate: p.get(e),
			kind: "sleep"
		}, {
			usersForDate: p.get(e),
			kind: "nonwear"
		}])), h = new Set(f.filter((e, t) => m[2 * t].disagree || m[2 * t + 1].disagree));
		return t.map((e) => ({
			date: e,
			...ku(u.get(e), h.has(e), d.get(e), du(c, e, d.get(e))),
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
	async datesStatusGeneration(e, t, n, a, s, r) {
		r?.throwIfAborted();
		const o = Z(r);
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const l = R(), c = ++this.nextComplexityGenerationToken;
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
				const t = await Qe(e, l), [i, a, s, r, o] = await Promise.all([
					Ue(e),
					nt(e),
					Ce(e, l, t),
					Xc(e, l),
					ge(e)
				]);
				return [
					Ye(t, n),
					Ye(t, vt),
					i,
					a,
					s,
					We(t),
					Yc(t),
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
				if (R() !== l) throw new Error("The local workspace changed before difficulty inputs could be read.");
				const e = await d();
				if (R() !== l) throw new Error("The local workspace changed while difficulty inputs were being read.");
				return e;
			}) : await d(), k = ru(h), S = new Map((await Ie(g, k, o)).map((e) => [e.analysisDate, e])), { nightStartHour: I, nightEndHour: A } = Au(a), x = t.filter((e) => (w.get(e)?.size ?? 0) >= 2), $ = await Rc(x.flatMap((e) => [{
				usersForDate: w.get(e),
				kind: "sleep"
			}, {
				usersForDate: w.get(e),
				kind: "nonwear"
			}]), o), T = new Set(x.filter((e, t) => $[2 * t].disagree || $[2 * t + 1].disagree)), N = await pu(l, e), z = (e) => t.map((t) => ({
				date: t,
				...ku(p.get(t), T.has(t), m.get(t), du(N, t, m.get(t))),
				complexity_pre: e(t),
				complexity_post: null
			})), D = b?.nightDifficulty;
			D?.nightStartHour === I && D.nightEndHour === A && t.every((e) => e in D.byDate) && (r?.throwIfAborted(), s(z((e) => D.byDate[e] ?? null)));
			const E = [], O = [...t], C = await ii(O, o), F = new Map(O.map((e, t) => [e, C[t] ?? !1])), P = xe(h.values()), j = /* @__PURE__ */ new Map();
			for (const n of t) {
				r?.throwIfAborted();
				const t = await au(h, n, P, o, j);
				if (!t) continue;
				const { timestamps: i, axisY: a, sleepScores: s, nonwearResults: l, temperature: c, detachNonwear: u, ggirTimestamps: d, ggirAnglez: p } = t, f = fu(i, i.length), m = fu(a, f.length), g = mu(s, f.length);
				if (0 === f.length || 0 === m.length || 0 === g.length) continue;
				const w = S.get(n), b = _.get(n) ?? null, k = await Tn((t) => {
					const i = Oe(Ze(w), t), a = Oe(ve(w), t);
					return {
						naps: w ? tt(w).map(([e, n]) => ({
							onset_time: Oe(e, t),
							offset_time: Oe(n, t)
						})).filter((e) => null != e.onset_time) : [],
						nonwear: w ? ye(w).map(([e, n]) => [Oe(e, t), Oe(n, t)]).filter((e) => null != e[0] && null != e[1]).map(([e, t]) => ({
							start_time: e,
							end_time: t
						})) : [],
						onset: i,
						wake: a,
						inBed: Oe(mt(w), t),
						outBed: Oe(ke(w), t),
						guiderTargets: gu(n, i, a, b, Ne(e), t)
					};
				}, new zn(o)), I = k.naps, A = k.nonwear, x = f[0] ?? 0, $ = f[f.length - 1] ?? x, T = k.onset, N = k.wake, z = v.get(n)?.calibration?.errorEnd;
				E.push({
					analysis_date: n,
					epoch_length_seconds: await rt(f, 60, o),
					timestamps: f,
					activity_counts: m,
					sleep_scores: g,
					choi_nonwear: mu(l, f.length),
					sensor_nonwear: y.filter((e) => e.startTimestamp <= $ && e.endTimestamp >= x).map((e) => ({
						start_ts: e.startTimestamp,
						end_ts: e.endTimestamp
					})),
					diary_onset_time: T,
					diary_wake_time: N,
					diary_nap_count: I.length,
					diary_naps: I,
					diary_nonwear: A,
					diary_in_bed_time: k.inBed,
					diary_out_bed_time: k.outBed,
					is_weekend: F.get(n) ?? null,
					guider_targets: k.guiderTargets,
					anglez: hu(f, d, p),
					light: [],
					temperature: fu(c, f.length),
					heart_rate: [],
					detach_nonwear: mu(u, f.length),
					calibration_error: "number" == typeof z && Number.isFinite(z) ? z : null,
					imputed_fraction: null,
					hdcza_window: b
				});
			}
			let B;
			try {
				if (E.length > 0) {
					const n = {
						config: { signals: {
							night_start_hour: I,
							night_end_hour: A
						} },
						days: E
					}, a = {
						config: n.config ?? null,
						days: n.days.map((e) => ({
							analysis_date: e.analysis_date,
							epoch_length_seconds: e.epoch_length_seconds,
							timestamps: e.timestamps
						}))
					}, s = o, u = await s.getComputeIdentity(), d = await vc({
						runtimeIdentity: u,
						difficultyRequestWireJson: ql(n),
						signalsRequestWireJson: Gl(n),
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
					}), ...f], h = await $c(e, d.generationKey, l) ?? await $c(e, (await vc({
						runtimeIdentity: nu(u),
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
						projectionInput: _u(h),
						difficultyByDate: vu(h),
						signalsByDate: bu(h),
						computeIdentity: h.runtimeIdentity,
						projectionRevision: yu(h),
						evidence: wu(h)
					};
					else {
						r?.throwIfAborted();
						const p = await o.computeFileDifficulty(m);
						if (r?.throwIfAborted(), !iu(u, await s.getComputeIdentity())) throw new Error("The local scoring runtime changed while difficulty was being computed. Re-run the calculation.");
						if (su(p.byDate, n.days)) {
							const n = await async function(e) {
								try {
									(!Number.isInteger(e.fileId) || e.fileId <= 0) && Kl();
									const t = await async function(e) {
										"sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || Kl(), null !== e.sourceContentHash && Yl(e.sourceContentHash), nc(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || Kl(), Yl(e.difficultyRequestSha256), Yl(e.signalsRequestSha256), await ic(e.difficultyRequestWireJson, e.difficultyRequestSha256), await ic(e.signalsRequestWireJson, e.signalsRequestSha256);
										const t = yc(e.difficultyRequestWireJson, e.signalsRequestWireJson);
										Yl(e.generationKey);
										const { generationKey: n, ...i } = e;
										return await _c(i) !== e.generationKey && Kl(), t;
									}(e.identity), n = ec(e.projectionInput), i = ec(e.difficultyByDate), a = null == e.signalsByDate ? null : ec(e.signalsByDate);
									wc(t, n, i, a);
									const s = await tc(n), r = await tc(i), o = null === a ? null : await tc(a);
									kc(s, e.expectedHashes?.projectionSha256), kc(r, e.expectedHashes?.difficultyResultSha256), kc(o, e.expectedHashes?.signalsResultSha256);
									const l = (/* @__PURE__ */ new Date()).toISOString(), c = e.createdAt ?? l, u = e.updatedAt ?? c;
									Xl(c), Xl(u), Date.parse(u) < Date.parse(c) && Kl();
									const d = {
										fileId: e.fileId,
										generationKey: e.identity.generationKey,
										evidenceContractId: e.identity.evidenceContractId,
										difficultyMethodId: e.identity.difficultyMethodId,
										signalsMethodId: e.identity.signalsMethodId,
										requestContractId: e.identity.requestContractId,
										sourceContentHash: e.identity.sourceContentHash,
										runtimeIdentity: ec(e.identity.runtimeIdentity),
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
									}, p = await bc(d);
									return kc(p, e.expectedHashes?.recordSha256), {
										...d,
										recordSha256: p
									};
								} catch (t) {
									if (t instanceof Wl) throw t;
									return Kl();
								}
							}({
								fileId: e,
								identity: d,
								projectionInput: a,
								difficultyByDate: p.byDate,
								signalsByDate: null
							});
							if (this.disposed || null == this.latestComplexityTokenByFile.get(e)) throw new Error("The local workspace changed before difficulty evidence could be saved.");
							if (this.latestComplexityTokenByFile.get(e) !== c) throw new Error("A newer local difficulty generation superseded this computation.");
							r?.throwIfAborted();
							const s = await async function(e, t = R(), n = "fresh", a) {
								"fresh" !== n && "restore" !== n && Kl();
								const s = await i.waitFor(Ic(e));
								return Ht([t.files, t.complexityEvidence], async () => {
									const e = await t.files.get(s.fileId);
									Ac(s, e);
									const a = await t.complexityEvidence.where("[fileId+generationKey]").equals([s.fileId, s.generationKey]).first();
									if (a) {
										const e = await i.waitFor(Ic(a));
										if (o = s, (r = e).generationKey !== o.generationKey || r.projectionSha256 !== o.projectionSha256 || r.difficultyResultSha256 !== o.difficultyResultSha256 || r.difficultyRequestSha256 !== o.difficultyRequestSha256 || r.signalsRequestSha256 !== o.signalsRequestSha256 || r.sourceContentHash !== o.sourceContentHash) throw new Ul();
										if (null !== e.signalsResultSha256 && null !== s.signalsResultSha256 && e.signalsResultSha256 !== s.signalsResultSha256) throw new Ul();
										if (null === e.signalsByDate && null !== s.signalsByDate) {
											const n = new Date(Math.max(Date.now(), Date.parse(e.createdAt))).toISOString(), a = {
												...e,
												signalsByDate: s.signalsByDate,
												signalsResultSha256: s.signalsResultSha256,
												updatedAt: n
											}, r = await i.waitFor(bc(a)), o = {
												...a,
												recordSha256: r
											};
											return await t.complexityEvidence.put(o), await xc(o, "signals_enriched", 0), {
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
									var r, o;
									await async function(e, t, n) {
										const i = await e.complexityEvidence.where("fileId").equals(t.fileId).toArray();
										if (i.length > 5) throw new Wl(!0);
										if (i.length < 5) return;
										if ("fresh" === n) return;
										i.sort((e, t) => {
											const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
											return 0 !== n ? n : (t.id ?? 0) - (e.id ?? 0);
										});
										const a = i[i.length - 1];
										if (a && Date.parse(t.createdAt) < Date.parse(a.createdAt)) throw new Vl();
									}(t, s, n);
									const l = { ...s };
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
									return await xc(u, "inserted", d), {
										record: u,
										disposition: "inserted",
										evicted: d
									};
								}, t, a);
							}(n, l, "fresh", r);
							"inserted" === s.disposition && await async function(e, t, n) {
								try {
									await Zt.recordWorkspaceDurably(M.SYSTEM_RECALCULATION, {
										subject: "night_complexity_generation",
										generationKey: e.generationKey,
										difficultyResultSha256: e.difficultyResultSha256,
										dateCount: Object.keys(e.difficultyByDate).length
									}, t, n) || console.warn("[local-data-source] Complexity evidence was saved, but its audit event is still pending.");
								} catch {
									console.warn("[local-data-source] Complexity evidence was saved, but its audit event could not be recorded.");
								}
							}(s.record, l, r), B = {
								token: c,
								evidenceDb: l,
								coveredDates: [...new Set(t)].sort(),
								signalRequest: null == s.record.signalsByDate ? m : null,
								projectionInput: _u(s.record),
								difficultyByDate: vu(s.record),
								signalsByDate: bu(s.record),
								computeIdentity: s.record.runtimeIdentity,
								projectionRevision: yu(s.record),
								evidence: wu(s.record)
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
				r?.throwIfAborted();
				const t = this.latestComplexityTokenByFile.get(e);
				if (this.disposed || null == t || t === c) throw f;
				B = await this.awaitNewerComplexitySnapshot(e, c);
			}
			r?.throwIfAborted(), u(B), this.latestComplexityTokenByFile.get(e) === c && (r?.throwIfAborted(), this.publishComplexitySnapshot(e, B, r), this.complexityFailureByFile.delete(e));
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
			const Z = q.difficultyByDate;
			if (q === B && (0 === E.length || null !== B.computeIdentity)) {
				const n = [...h.values()].map(He), i = 0 === E.length && n.some((e) => e.ggir) && n.every((e) => e.ggir || 0 === e.timestamps.length), a = {
					nightStartHour: I,
					nightEndHour: A,
					byDate: Object.fromEntries(t.map((e) => [e, Z[e]?.difficulty ?? null])),
					sourceRevision: String((B.computeIdentity ?? await o.getComputeIdentity()).sourceRevision),
					...i ? { notRankableReason: xu } : {}
				};
				if (JSON.stringify(b?.nightDifficulty) !== JSON.stringify(a)) try {
					r?.throwIfAborted(), await he(l, [l.files], () => l.files.update(e, { nightDifficulty: a }), r);
					for (const t of $u) t(e, l);
					r?.throwIfAborted();
				} catch {
					r?.throwIfAborted(), console.warn("[local-data-source] Stored night difficulty could not be written.");
				}
			}
			return z((e) => Z[e]?.difficulty ?? null);
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
		const i = (await ge(e))?.availableDates?.slice().sort() ?? [], a = i.indexOf(t);
		if (a < 0) return null;
		const s = a > 0 ? i[a - 1] ?? null : null, r = a < i.length - 1 ? i[a + 1] ?? null : null, [o, l] = await Promise.all([s ? zt(e, s, n) : null, r ? zt(e, r, n) : null]), c = (e) => (e?.sleepMarkers ?? []).map((e) => ({
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
		const n = R(), i = await ft(e, t, void 0, n);
		if (0 === e) return i;
		const a = await yt(e, t, n);
		return [...i, ...a].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
	}
	static isRecordInView(e, t, n) {
		return e.fileId === t && e.analysisDate === n || 0 !== t && we(e, t, n);
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
		const i = await this.auditRecordsForView(e, t), a = (n ? i.filter((e) => e.username === n) : i).filter((e) => "number" == typeof e.id), s = ae("audit_log_csv", "local"), r = await It(a), o = function(e) {
			const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
			for (const i of e) {
				const e = i.payload?.exportId;
				"string" == typeof e && ("export_started" === i.action ? t.add(e) : "data_exported" !== i.action && "export_cancelled" !== i.action || n.add(e));
			}
			for (const i of n) t.delete(i);
			return t;
		}(a), l = [s.join(",")];
		for (const [c, u] of a.entries()) {
			const e = u.payload ?? null, t = r[c];
			l.push([
				d(String(u.id)),
				d((/* @__PURE__ */ new Date(1e3 * u.clientTimestamp)).toISOString()),
				d(u.action),
				d(Lc(null === e ? "" : Wc(e, u.action), u.action, e, o)),
				d(u.username),
				d(String(u.fileId)),
				d(u.analysisDate ?? ""),
				d(null == u.studyId ? "" : String(u.studyId)),
				d(u.sessionId),
				d(String(u.sequence)),
				d(u.eventHash ?? ""),
				d(u.previousHash ?? ""),
				d(null === e ? "" : JSON.stringify(e)),
				d(t?.basis ?? "unanchored"),
				d(void 0 === t ? "" : At(t.state)),
				d(void 0 === t || "unanchored" === t.basis ? "" : JSON.stringify(t.state))
			].join(","));
		}
		return new Blob([`${l.join("\n")}\n`], { type: "text/csv;charset=utf-8" });
	}
	async verifyAuditChain(t, n) {
		const i = await ht();
		return {
			...await Gt(i),
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
		const a = t.signalRequest, s = t.computeIdentity, r = t.evidence, o = t.evidenceDb, l = this.complexitySignalGenerationByFile.get(e);
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
				const c = _(), u = await c.getComputeIdentity();
				if (!iu(s, u)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), l();
				const d = await c.computeFileSignals(a), p = await c.getComputeIdentity();
				if (!iu(s, p)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), l();
				if (!su(d.byDate, JSON.parse(a[0]).days)) throw new Error("The local scoring runtime returned incomplete night-signal evidence.");
				if (this.disposed) throw new Error("The local workspace changed before night-signal evidence could be saved.");
				const f = n();
				if (!f) return null;
				if (f.token !== t.token) return f;
				if (f.signalsByDate) return f;
				const m = await async function(e, t = R(), n) {
					(!Number.isInteger(e.fileId) || e.fileId <= 0) && Kl(), Yl(e.generationKey);
					const a = ec(e.signalsByDate), s = await tc(a);
					return kc(s, e.signalsResultSha256), Ht([t.files, t.complexityEvidence], async () => {
						const n = await t.complexityEvidence.where("[fileId+generationKey]").equals([e.fileId, e.generationKey]).first();
						if (!n) throw new Wl();
						const r = await i.waitFor(Ic(n));
						if (Ac(r, await t.files.get(r.fileId)), null !== r.signalsResultSha256) {
							if (r.signalsResultSha256 !== s) throw new Ul();
							return {
								record: r,
								disposition: "deduplicated",
								evicted: 0
							};
						}
						const o = new Date(Math.max(Date.now(), Date.parse(r.createdAt))).toISOString(), l = {
							...r,
							signalsByDate: a,
							signalsResultSha256: s,
							updatedAt: o
						}, c = await i.waitFor(bc(l)), u = await i.waitFor(Sc({
							...l,
							recordSha256: c
						}));
						return await t.complexityEvidence.put(u), await xc(u, "signals_enriched", 0), {
							record: u,
							disposition: "signals_enriched",
							evicted: 0
						};
					}, t, n);
				}({
					fileId: e,
					generationKey: r.generationKey,
					signalsByDate: d.byDate
				}, o), h = n();
				if (!h) return null;
				if (h.token !== t.token) return h;
				if (h.signalsByDate) return h;
				const g = {
					...h,
					signalRequest: null,
					projectionInput: _u(m.record),
					difficultyByDate: vu(m.record),
					signalsByDate: bu(m.record),
					computeIdentity: m.record.runtimeIdentity,
					projectionRevision: yu(m.record),
					evidence: wu(m.record)
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
				const i = await ge(e), a = i?.availableDates?.includes(t) ? [...new Set(i.availableDates)].sort() : [t];
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
			plot_intervals: eu(r ?? void 0, s ?? void 0, t, i?.projectionRevision ?? void 0)
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
			!1 !== i.datesStatus && Ti(e, ["dates-status", t]), Ti(e, ["local-dates-status", t]), !1 !== i.fileQuality && Ti(e, ["file-quality"]), Ti(e, ["analysis-summary"]), Ti(e, ["adjacent-markers"]), Ti(e, [
				"audit-log",
				t,
				n
			]), Ti(e, ["actogram-markers", t]), Ti(e, [
				"night-stored-variant",
				t,
				n
			]), Ti(e, ["local-export-file-stats"]), Ti(e, ["local-export-circadian-coverage"]), function() {
				Ai += 1;
				for (const e of xi) e();
			}();
		})(i, e, t, {
			datesStatus: !p,
			fileQuality: !1
		});
		const f = c ?? R();
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
		const l = r ?? R(), c = Vn(l, {
			username: n || "anonymous",
			studyId: Xe.getState().selectedStudyId
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
			Ti(e, o);
		});
	}
	async patchDateStatus(e, t, n) {
		const { fileId: i, date: a, username: s, workspaceScope: r } = t;
		for (const o of e.getQueryCache().findAll({ queryKey: ["dates-status", i] })) {
			const t = o.queryKey, l = o.state.data;
			if (t[2] === this.sourceKey && (t[3] !== r || t[4] !== (s || "anonymous"))) continue;
			if (o.state.isInvalidated) continue;
			const c = t[4], u = o.state.dataUpdatedAt;
			try {
				if (!l || t[2] !== this.sourceKey || "string" != typeof c) throw new Error("not a local status list");
				const s = await Su(i, a, c, n);
				if (o.state.dataUpdatedAt !== u) continue;
				e.setQueryData(t, (e) => e?.map((e) => e.date === a ? {
					...e,
					...s
				} : e));
			} catch {
				Ti(e, t);
			}
		}
	}
	async ingestFile(e, t, n) {
		const { processLocalFile: i } = await import("./local-processing-Cw7f7lnS.js"), a = Xe.getState(), s = this.operationProcessingOptions, r = s?.devicePreset ?? a.devicePreset, o = s?.skipRows ?? a.skipRows, l = s?.choiAxis ?? a.choiAxis, c = s?.columnMapping ?? a.columnMapping, u = s?.countEpochSeconds ?? (30 === a.epochLengthSeconds ? 30 : 60);
		e.name.toLowerCase().endsWith(".csv") && r && "actigraph" !== r && "geneactiv" !== r && Kc(r, c);
		const d = R(), p = await i(e, r ?? "actigraph", o ?? 10, t, l ?? "vector_magnitude", c, n, {
			...s ? {} : st(a),
			countEpochSeconds: u,
			sleepPeriodDetectionConfig: Ft(a.sleepPeriodDetection),
			...this.operationProcessingOptions
		});
		return p.alreadyImported || (Tu(p.fileId, d, void 0, n), Nu(p.fileId, d, n)), p;
	}
	async loadDailyGgirSummary(e, t) {
		return (t ? await _e(e, t) : await Ge(e)).map(Qc);
	}
};
function Bu(e, t, n) {
	return qu([e], t, n);
}
function qu(e, t, n, i) {
	const a = `${S.PLACEMENT}:${e.map(String).join(":")}`;
	return B({
		kind: S.PLACEMENT,
		key: a,
		label: "Store marker placement",
		workspaceId: t.name,
		signal: n,
		rerun: !0,
		run: async (n) => {
			if (z(t.name)) return;
			const { captureLocalScoringSettings: s, scoringSettingsForScope: r, autoScoreOptionsFromSettings: o } = await import("./scoped-scoring-settings-Cfihg84B.js"), l = {
				sourceKey: "local",
				workspaceId: null,
				actor: "anonymous",
				studyId: null
			}, c = new ju();
			try {
				n.signal.throwIfAborted();
				const [a, u] = await Promise.all([Se(t), Ee([...e], t)]), d = s(l, a ?? null), p = u.map((e) => {
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
				if (z(t.name)) return;
				throw n.signal.throwIfAborted(), T.getState().update(`${t.name}:${a}`, { visible: !0 }), u;
			}
		}
	});
}
function Zu(e, t) {
	return B({
		kind: S.PLACEMENT_RECOVERY,
		key: S.PLACEMENT_RECOVERY,
		label: "Resume marker placement",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			const { recoverPendingGgirRecomputes: n } = await import("./local-export-shard-worker-CRWHMs-Y.js").then((e) => e.a);
			await n(e, t.signal);
			const i = await e.transaction("r", e.projectMeta, async () => {
				const [t, n] = await Promise.all([e.projectMeta.get(Mt), e.projectMeta.get(xt)]);
				return {
					completed: void 0 !== t,
					generation: n?.revision ?? 0
				};
			}), { backfillInterruptedScoredVariantWarms: a } = await import("./cube-variants-c4XYvBRd.js");
			if (i.completed) await a(e, { signal: t.signal });
			else {
				for (const n of await Pe(e)) {
					if (R() !== e) return;
					null != n.id && "incomplete" !== n.ingestState && (await Bu(n.id, e, t.signal), await t.yieldNow());
				}
				R() === e && (await a(e, { signal: t.signal }), R() === e && await he(e, [e.projectMeta], async () => {
					const t = await e.projectMeta.get(xt);
					R() === e && (t?.revision ?? 0) === i.generation && await e.projectMeta.put({
						key: Mt,
						revision: 1
					});
				}, t.signal));
			}
		}
	});
}
export { ni as _, Ol as a, wi as c, yi as d, Si as f, ii as g, ai as h, Tl as i, vi as l, si as m, Tc as n, $l as o, mi as p, Nc as r, Pl as s, Uc as t, _i as u, ti as v, Xn as y };
