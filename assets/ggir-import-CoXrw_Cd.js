import { On as e, Vt as t, Wt as a, Zt as n, f as r, kt as s, qt as i, s as o, vn as l, zt as c } from "./schema-B0CR2EpS.js";
import { i as u, r as d, s as m } from "./workers-D4og5Jak.js";
import { _ as g, n as f, o as p, r as h, s as w, y } from "./local-data-source-Vom-dl1p.js";
import { A as v, d as b, lt as I, q as S, t as _, u as C } from "./workspace-db-CwhwLMaR.js";
import { r as M } from "./content-hash-SuSXU120.js";
import { d as A, l as R, m as N, o as G, s as x, t as z, v as F } from "./background-jobs-BvDFFUGv.js";
import { n as D, o as T } from "./nonwear-display-slots-3gROIlhe.js";
import { a as U, i as k } from "./project-revision-D6MjEMMu.js";
import { $ as E, A as P, G as O, H as j, J as L, Q as V, Qt as B, T as H, X as Y, Y as $, Yt as X, Z, _ as W, b as q, c as K, d as Q, g as J, h as ee, ht as te, i as ae, k as ne, l as re, lt as se, p as ie, q as oe, s as le, u as ce } from "./store-DvfXJTpe.js";
import { p as ue } from "./sleep-period-detection-BnH8xZoy.js";
import { r as de, t as me } from "./audit-log-mBb24FKg.js";
import { a as ge, g as fe, h as pe, m as he, n as we, o as ye, p as ve, s as be, t as Ie, v as Se } from "./ggir-results-import-DD2olz8s.js";
import { T as _e, _ as Ce, a as Me, k as Ae, s as Re } from "./local-nonwear-unified-DPuDqwyk.js";
import { I as Ne } from "./valid-day-criteria-CIJnTk0q.js";
import { _ as Ge, g as xe, p as ze } from "./diary-local-import-contract-tz7cH6WX.js";
import { a as Fe } from "./csv-column-mapping-BSSY09yh.js";
import { t as De } from "./file-sensor-location-D3poeAvf.js";
import { A as Te, j as Ue } from "./local-export-shard-worker-CRWHMs-Y.js";
import { i as ke, n as Ee, r as Pe } from "./local-provenance-C4he56-t.js";
import { i as Oe, n as je } from "./lstm-model-manager-BenKZ4vQ.js";
const Le = S((e) => ({
	storageFull: !1,
	lastOperation: null,
	lastMessage: null,
	reportStorageFull: (t, a) => e({
		storageFull: !0,
		lastOperation: t,
		lastMessage: a ?? null
	}),
	clearStorageFull: () => e({
		storageFull: !1,
		lastOperation: null,
		lastMessage: null
	})
}));
function Ve() {
	return [
		"Could not identify file format.",
		"Use Data Settings > CSV Import for mapped vendor, GGIR, MIMS, or generic activity CSV exports.",
		"Native local ingest supports ActiGraph CSV/GT3X, GENEActiv raw CSV/.bin, GGIR meta RData, NHANES PAX80 archives, and recognized generic CSV mappings.",
		"Condor ActLumus/ActTrust TXT files require the server parser today."
	].join(" ");
}
function Be(e, t) {
	te(e) && Le.getState().reportStorageFull(t, "Browser storage quota was exceeded while saving local results.");
}
function He(e) {
	return "the local model runtime or its input contract rejected the operation";
}
function Ye(e) {
	return `LSTM ONNX sleep/wake scoring could not be computed for this raw file${e ? ` because ${e}` : ""}. Count-based scoring is intact.`;
}
function $e(e) {
	if (!e || 0 === e.length) return "";
	let t = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, n = 0;
	for (const r of e) t = Math.min(t, r), a = Math.max(a, r), n += r;
	return ` (sleep probability min=${t.toFixed(3)}, mean=${(n / e.length).toFixed(3)}, max=${a.toFixed(3)})`;
}
function Xe(e, t) {
	if (!e || 0 === e.length) return null;
	let a = 0;
	for (const n of e) a += n ? 1 : 0;
	return 0 === a ? `LSTM ONNX sleep/wake scoring produced an all-wake result${$e(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : a === e.length ? `LSTM ONNX sleep/wake scoring produced an all-sleep result${$e(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : null;
}
async function Ze(e, t, a) {
	return Array.from(await e.roundCountStorage(Float64Array.from(t), a));
}
async function We(e, t) {
	const { dates: a, day: n } = await e.utcDayIndex(Float64Array.from(t)), r = new Map(a.map((e) => [e, []]));
	return n.forEach((e, t) => {
		const n = a[e];
		void 0 !== n && r.get(n)?.push(t);
	}), r;
}
function qe(e, t, a) {
	return t.map((t) => e[t] ?? a);
}
async function Ke(e, t, a, n) {
	return Float64Array.from(await e.uniformTimestamps(t, 1e3 * a, n), (e) => e / 1e3);
}
async function Qe(e, t, a, n) {
	if (!Number.isFinite(t) || 0 === a.length || !Number.isFinite(n) || n <= 0) return /* @__PURE__ */ new Map();
	const r = await We(e, await Ke(e, t, n, a.length));
	return new Map(Array.from(r, ([e, t]) => [e, Uint8Array.from(qe(a, t, 0))]));
}
async function Je(e, t, a, n, r = {}) {
	const s = /* @__PURE__ */ new Map();
	if (0 === t.length) return s;
	if (a.length !== t.length || n.length !== t.length) return console.warn("[local-processing] The 5 s GGIR timestamp grid does not match its ENMO/anglez series; skipping the GGIR day split rather than fabricating zeros."), s;
	const i = void 0 !== r.sib && r.sib.length === t.length, o = void 0 !== r.anglex && r.anglex.length === t.length, l = void 0 !== r.angley && r.angley.length === t.length, c = void 0 !== r.nonwear && r.nonwear.length === t.length, u = void 0 !== r.invalid && r.invalid.length === t.length, d = void 0 !== r.mimsUnit && r.mimsUnit.length === t.length, m = void 0 !== r.mimsUnitX && r.mimsUnitX.length === t.length, g = void 0 !== r.mimsUnitY && r.mimsUnitY.length === t.length, f = void 0 !== r.mimsUnitZ && r.mimsUnitZ.length === t.length, p = (e, t) => t.map((t) => (e[t] ?? 0) > 0 ? 1 : 0), h = Float64Array.from(t, (e) => e / 1e3);
	for (const [w, y] of await We(e, h)) s.set(w, {
		timestamps: qe(h, y, 0),
		enmo: qe(a, y, 0),
		anglez: qe(n, y, 0),
		...o ? { anglex: qe(r.anglex, y, 0) } : {},
		...l ? { angley: qe(r.angley, y, 0) } : {},
		...i ? { sib: qe(r.sib, y, 0) } : {},
		...c ? { nonwear: p(r.nonwear, y) } : {},
		...u ? { invalid: p(r.invalid, y) } : {},
		...d ? { mimsUnit: qe(r.mimsUnit, y, NaN) } : {},
		...m ? { mimsUnitX: qe(r.mimsUnitX, y, NaN) } : {},
		...g ? { mimsUnitY: qe(r.mimsUnitY, y, NaN) } : {},
		...f ? { mimsUnitZ: qe(r.mimsUnitZ, y, NaN) } : {}
	});
	return s;
}
async function et(e, t, a, n, r, s) {
	const i = /* @__PURE__ */ new Map();
	if (0 === t.length || !Number.isFinite(a)) return i;
	for (const [o, l] of Object.entries(n)) i.set(o, await e.foldUniformOntoGrid(a / 1e3, 30, t, Float64Array.from(l.timestamps), r, s));
	return i;
}
async function tt(e, t, a, n, r) {
	const s = await et(e, Float64Array.from(t), a, n, r, "majority_ties_sleep");
	return new Map(Array.from(s, ([e, t]) => [e, Uint8Array.from(t)]));
}
async function at(e, t, a, n, r) {
	const s = await et(e, Float64Array.from(t), a, n, r, "mean");
	return new Map(Array.from(s, ([e, t]) => [e, Float32Array.from(t)]));
}
async function nt(e, t, a) {
	const n = /* @__PURE__ */ new Map();
	if (!t || 0 === t.length || null === a || !Number.isFinite(a)) return n;
	const r = await Ke(e, a, 30, t.length);
	for (const [s, i] of await We(e, r)) n.set(s, {
		timestamps: qe(r, i, 0),
		scores: i.map((e) => t[e] ? 1 : 0)
	});
	return n;
}
async function rt(e, t, a, n, r) {
	const s = await e.foldOntoGrid(Float64Array.from(t), Float64Array.from(a), Float64Array.from(n), 1e3 * r, "finite_mean");
	return Array.from(s);
}
async function st(e, t, a, n, r, s, i, o, l, c, u, d) {
	return async function(e, t, a, n, r, s, i, o, l, c, u, d) {
		const m = {}, g = null != r, f = null != s && s.length > 0, p = null != i && i.length > 0, h = null != o && o.length > 0, w = null != l?.unit && l.unit.length === t.length, y = null != l?.unitX && l.unitX.length === t.length, v = null != l?.unitY && l.unitY.length === t.length, b = null != l?.unitZ && l.unitZ.length === t.length, I = null != u && u.length === t.length, S = null != c && c.length === t.length, _ = null != d && d.length === t.length;
		for (const [C, M] of await We(e, t)) m[C] = {
			timestamps: qe(t, M, 0),
			axisY: qe(a, M, 0),
			vectorMagnitude: qe(n, M, 0),
			...p ? { axisX: qe(i, M, 0) } : {},
			...h ? { axisZ: qe(o, M, 0) } : {},
			...g ? { choiAxis: qe(r, M, 0) } : {},
			...f ? { temperature: qe(s, M, NaN) } : {},
			...w ? { mimsUnit: qe(l?.unit ?? [], M, NaN) } : {},
			...y ? { mimsUnitX: qe(l?.unitX ?? [], M, NaN) } : {},
			...v ? { mimsUnitY: qe(l?.unitY ?? [], M, NaN) } : {},
			...b ? { mimsUnitZ: qe(l?.unitZ ?? [], M, NaN) } : {},
			...I ? { zeroCrossingX: qe(u, M, NaN) } : {},
			...S ? { zeroCrossingY: qe(c, M, NaN) } : {},
			..._ ? { zeroCrossingZ: qe(d, M, NaN) } : {}
		};
		return m;
	}(e, t, await Ze(e, a, 0), await Ze(e, n, 2), void 0 !== i ? await Ze(e, i, 0) : void 0, o, await Ze(e, r, 0), await Ze(e, s, 0), l, c, u, d);
}
function it(e, t) {
	return 30 !== t && (Ne(e)?.hasRawAccel ?? !1);
}
async function ot(e) {
	if (e.timestampsMs) {
		const t = 1e3 / e.sampleRate, a = e.timestampsMs[0] !== e.firstTsMs, n = e.timestampsMs.some((a, n) => Math.abs(a - e.firstTsMs - n * t) > .5 * t);
		if (a || n) return console.warn("[local-processing] Native 30-second counts were skipped because raw preparation changed the sample timeline."), null;
	}
	const t = e.cancelOperation ?? (() => {
		u(e.wasmApi);
	}), a = await G(e.wasmApi, (t) => t.neishabouriCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: R,
		label: `neishabouriCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}), n = await G(e.wasmApi, (t) => t.zeroCrossingCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: R,
		label: `zeroCrossingCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}).catch((t) => (N(t, e.signal, `zeroCrossingCounts 30s (${e.label})`), console.warn("[local-processing] The optional 30-second zero-crossing pass failed."), null));
	return {
		timestampsSec: await Ke(e.wasmApi, e.firstTsMs, 30, a.y.length),
		neishabouri: a,
		zeroCrossing: n
	};
}
async function lt(e, t, a) {
	const n = a.zeroCrossing, r = await st(e, a.timestampsSec, a.neishabouri.y, a.neishabouri.vm, a.neishabouri.x, a.neishabouri.z, void 0, void 0, void 0, n ? await Ze(e, n.zcy, 0) : void 0, n ? await Ze(e, n.zcx, 0) : void 0, n ? await Ze(e, n.zcz, 0) : void 0);
	for (const [s, i] of Object.entries(r)) {
		const e = t[s];
		e && (e.counts30s = {
			timestamps: i.timestamps,
			axisY: i.axisY,
			vectorMagnitude: i.vectorMagnitude,
			...i.axisX ? { axisX: i.axisX } : {},
			...i.axisZ ? { axisZ: i.axisZ } : {},
			...i.zeroCrossingX ? { zeroCrossingX: i.zeroCrossingX } : {},
			...i.zeroCrossingY ? { zeroCrossingY: i.zeroCrossingY } : {},
			...i.zeroCrossingZ ? { zeroCrossingZ: i.zeroCrossingZ } : {}
		});
	}
}
const ct = "Recording crossed a timezone boundary (a 1 h jump in the device clock). Recording times are kept as the device's wall-clock time; no timezone or daylight-saving shift is applied, so local-time metrics around the jump may be off.";
async function ut(e, t) {
	return await e.detectHourClockJumpMs(Float64Array.from(t)) ? ct : null;
}
async function dt(e, t, a = 60) {
	(await e.irregularInternalDays(Float64Array.from(t), a)).forEach(() => {
		console.warn("[local-processing] A possible DST transition or partial internal day was detected; review the in-app import warning.");
	});
}
async function mt(e, t) {
	const a = [];
	let n = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY;
	for (const [s, i] of e) {
		a.push(s);
		const e = i.timestamps;
		0 !== e.length && (n = Math.min(n, e[0] ?? n), r = Math.max(r, e[e.length - 1] ?? r));
	}
	return a.sort(), Number.isFinite(n) && Number.isFinite(r) ? xe(a, n, r, void 0, t) : a;
}
function gt(e) {
	return /[",\r\n]/.test(e) ? `"${e.replace(/"/g, "\"\"")}"` : e;
}
function ft(e, t) {
	if (!t) return null;
	const a = Fe(t), n = e.findIndex((e) => Fe(e) === a);
	return n >= 0 ? n : null;
}
function pt(e) {
	const t = (e ?? "").trim().toLowerCase();
	return "" === t || [
		"0",
		"false",
		"no",
		"n",
		"none",
		"nan",
		"na"
	].includes(t) ? 0 : 1;
}
function ht(e, t) {
	if (e.length !== t.length) return console.warn("[local-processing] Event-marker column dropped: mapped row count differs from the parsed epoch count."), /* @__PURE__ */ new Float64Array(0);
	const a = [];
	for (let n = 0; n < e.length; n += 1) {
		const r = t[n];
		1 === e[n] && null != r && Number.isFinite(r) && a.push(r / 1e3);
	}
	return Float64Array.from(a.sort((e, t) => e - t));
}
function wt(e, t, a) {
	const n = new Uint8Array(e.length);
	let r = 0;
	for (const s of Array.from(t)) {
		for (; r + 1 < e.length && (e[r + 1] ?? 1 / 0) <= s;) r += 1;
		const t = e[r];
		null != t && s >= t && s < t + a && (n[r] = 1);
	}
	return n;
}
function yt(e, t) {
	const a = Date.parse(`${t}T00:00:00Z`) / 1e3, n = [];
	for (const r of Array.from(e)) r >= a && r < a + 86400 && n.push(r);
	return Float64Array.from(n);
}
async function vt(e, n, r, i) {
	A(i, "standardizing mapped CSV");
	const o = a(await e.text());
	A(i, "standardizing mapped CSV");
	const l = t(o);
	if (l.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
	const u = l.records, d = u[n]?.text;
	if (!d) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
	const m = s(d), g = c(d, m), p = f(r, g);
	if (p.length > 0) throw new Error(y(p));
	const h = ft(g, r.datetime_column), w = ft(g, r.date_column), v = ft(g, r.time_column), b = ft(g, r.activity_column), I = ft(g, r.axis_x_column), S = ft(g, r.axis_z_column), _ = ft(g, r.vector_magnitude_column), C = [
		{
			header: "ENMO",
			idx: ft(g, r.enmo_column)
		},
		{
			header: "AngleZ",
			idx: ft(g, r.anglez_column)
		},
		{
			header: "GGIR_SIB",
			idx: ft(g, r.ggir_sib_column)
		},
		{
			header: "GGIR_NONWEAR",
			idx: ft(g, r.ggir_nonwear_column)
		},
		{
			header: "MIMS_UNIT",
			idx: ft(g, r.mims_unit_column)
		},
		{
			header: "MIMS_UNIT_X",
			idx: ft(g, r.mims_unit_x_column)
		},
		{
			header: "MIMS_UNIT_Y",
			idx: ft(g, r.mims_unit_y_column)
		},
		{
			header: "MIMS_UNIT_Z",
			idx: ft(g, r.mims_unit_z_column)
		}
	].filter((e) => null !== e.idx), M = ft(g, r.event_marker_column), R = null === M ? null : [];
	if (null === b) throw new Error("Column-mapped CSV mapping requires an activity/counts column before import.");
	if (null === h && (null === w || null === v)) throw new Error("Column-mapped CSV mapping requires Date/time, or both Date and Time, before import.");
	const N = null !== h ? ["Datetime", "Axis1"] : [
		"Date",
		"Time",
		"Axis1"
	];
	null !== I && N.push("Axis2"), null !== S && N.push("Axis3"), null !== _ && N.push("Vector Magnitude"), N.push(...C.map((e) => e.header));
	const G = [N.join(",")];
	for (let t = n + 1; t < u.length; t += 1) {
		(t - n - 1) % 1e3 == 0 && (await x(), A(i, "standardizing mapped CSV"));
		const e = u[t];
		if (!e.text.trim()) continue;
		const a = c(e.text, m), r = null !== h ? [a[h] ?? "", a[b] ?? ""] : [
			null === w ? "" : a[w] ?? "",
			null === v ? "" : a[v] ?? "",
			a[b] ?? ""
		];
		null !== I && r.push(a[I] ?? ""), null !== S && r.push(a[S] ?? ""), null !== _ && r.push(a[_] ?? "");
		for (const t of C) r.push(a[t.idx] ?? "");
		R && null !== M && R.push(pt(a[M])), G.push(r.map(gt).join(","));
	}
	const z = new Blob([`${G.join("\n")}\n`], { type: "text/csv" });
	return {
		name: e.name,
		lastModified: e.lastModified,
		size: z.size,
		arrayBuffer: () => z.arrayBuffer(),
		text: () => z.text(),
		slice: (e, t) => z.slice(e, t),
		...R ? { eventMarkerRows: Uint8Array.from(R) } : {}
	};
}
function bt(e, t, a, n) {
	if (null !== t) return e[t] ?? "";
	const r = null === a ? "" : e[a] ?? "", s = null === n ? "" : e[n] ?? "";
	return `${r.trim()} ${s.trim()}`;
}
function It(e, t) {
	if (null === t) return NaN;
	const a = e[t]?.trim() ?? "";
	if (!a) return NaN;
	const n = Number(a);
	return Number.isFinite(n) ? n : NaN;
}
function St(e, t) {
	return e.length === t && e.some((e) => Number.isFinite(e)) ? e : void 0;
}
function _t(e, t) {
	const a = e.headerBodySite ?? e.bodySite, n = e.headerLaterality ?? e.laterality;
	return {
		...e,
		...t,
		...e.laterality ? { laterality: e.laterality } : {},
		placementSourceReference: "study_default",
		...a ? { headerBodySite: a } : {},
		...n ? { headerLaterality: n } : {}
	};
}
async function Ct(e, t) {
	return await Ge((t) => t.recordingFacts(e), new ze(t)) ?? {};
}
async function Mt(e, t, a) {
	a?.throwIfAborted();
	const n = await e.slice(0, Math.min(e.size, 65536)).arrayBuffer();
	a?.throwIfAborted();
	const r = new TextDecoder("utf-8", { fatal: !1 }).decode(n);
	for (const s of [/measurement frequency\s*[,:\t]\s*(\d+)/i, /sample rate(?:\s*hz)?\s*[,:\t]\s*(\d+)/i]) {
		const e = s.exec(r);
		if (e && e[1]) {
			const t = Number.parseInt(e[1], 10);
			if (Number.isFinite(t) && t > 0) return t;
		}
	}
	return F[t];
}
async function At(e, t, a) {
	t?.throwIfAborted();
	const n = Math.min(e.size, Math.max(65536, 2048));
	let r;
	try {
		r = new Uint8Array(await e.slice(0, n).arrayBuffer());
	} catch {
		return {};
	}
	if (t?.throwIfAborted(), e.name.toLowerCase().endsWith(".gt3x")) {
		const e = function(e) {
			const t = new DataView(e.buffer, e.byteOffset, e.byteLength);
			let a = 0;
			for (; a + 30 <= e.byteLength;) {
				if (67324752 !== t.getUint32(a, !0)) return null;
				const n = t.getUint16(a + 8, !0), r = t.getUint32(a + 18, !0), s = t.getUint16(a + 26, !0), i = a + 30 + s + t.getUint16(a + 28, !0);
				if (i > e.byteLength) return null;
				const o = i + r;
				if (new TextDecoder().decode(e.subarray(a + 30, a + 30 + s)).toLowerCase().endsWith("info.txt")) return 0 !== n || o > e.byteLength ? null : new TextDecoder("utf-8", { fatal: !1 }).decode(e.subarray(i, o));
				if (0 === r) return null;
				a = o;
			}
			return null;
		}(r);
		return null === e ? {} : await Ct(e, a);
	}
	return await Ct(new TextDecoder("utf-8", { fatal: !1 }).decode(r), a);
}
async function Rt(e, t, a) {
	const n = [];
	for (const i of t) {
		const t = Ue(e, i);
		t && n.push(t.wire);
	}
	if (0 === n.length) return [];
	const { request: r, transfer: s } = Te(n);
	return (await a.computeCircadian(m(r, s))).day_summaries.filter((e) => e.has_signal).map((e) => e.analysis_date);
}
function Nt(e) {
	return `stored_nonwear_mask:${e}`;
}
Object.freeze([]);
const Gt = {
	temperature_epoch_stream: (e) => null != e.temperature && Ce(new Float64Array(e.temperature)),
	sleep_wake_epoch_stream: (e) => null != e.algorithmResults?.[i.ACTIWARE_SLEEP_WAKE],
	device_wear_state_evidence_stream: (e) => !0 === e.actiwareOffWristChannel
};
function xt(e) {
	const t = [];
	for (const [a, n] of Object.entries(Gt)) for (const r of e) if (n(r)) {
		t.push(a);
		break;
	}
	for (const a of Re) e.some((e) => null != _e(e, a, "")) && t.push(Nt(a));
	return t;
}
function zt(e) {
	return e instanceof Error ? e : /* @__PURE__ */ new Error("Local ingest lease renewal failed.");
}
const Ft = Math.max(1e3, Math.floor(le / 4));
async function Dt(e) {
	void 0 !== e.heartbeatId && (clearInterval(e.heartbeatId), delete e.heartbeatId), await e.heartbeatPending, delete e.heartbeatPending;
}
async function Tt(e, t, a) {
	const n = ae.getState(), r = {
		...e.recording,
		...t.recording
	}, s = e.placement ?? {
		bodySite: n.sensorLocation,
		laterality: n.participantLaterality
	}, i = await Q({
		...t,
		...t.ggirPart2Config ? { ggirNonwearDetector: await B(t.ggirPart2Config.csvText, a ?? z(e.signal)) } : {},
		...e.ingestProvenance ? { ingestProvenance: e.ingestProvenance } : {},
		recording: _t(r, s)
	}, e.attemptId, e.db);
	return "started" === i.kind && (e.guard = i.guard, function(e) {
		void 0 === e.heartbeatId && (e.heartbeatId = setInterval(() => function(e) {
			const t = e.guard;
			t && void 0 === e.heartbeatError && (e.heartbeatPending = (e.heartbeatPending ?? Promise.resolve()).then(() => Y(t, e.db)).catch((t) => {
				e.heartbeatError = t;
			}));
		}(e), Ft));
	}(e)), i;
}
async function Ut(e) {
	if (await e.heartbeatPending, void 0 !== e.heartbeatError) throw zt(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new re();
	return await Y(t, e.db), t;
}
async function kt(e) {
	if (await Dt(e), void 0 !== e.heartbeatError) throw zt(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new re();
	await async function(e, t = _()) {
		try {
			return await async function(e, t = _(), a) {
				const n = t;
				for (;;) {
					a?.throwIfAborted();
					const [t, r] = await Promise.all([n.files.get(e), n.sensorNonwear.where("fileId").equals(e).count()]), s = (e, t) => JSON.stringify([
						e?.id,
						e?.seriesRevision ?? 0,
						e?.exportInputRevision ?? 0,
						e?.sourceContentHash,
						e?.sourceType,
						e?.sourceProfileId,
						t
					]), i = s(t, r), o = xt([...(await q(e, n)).values()]);
					if (t && "actiware_off_wrist" === D(t.sourceType, t.sourceProfileId) && !o.includes("device_wear_state_evidence_stream") && r > 0 && o.push("device_wear_state_evidence_stream"), void 0 === t?.id) return o;
					if (await U(n, [
						n.files,
						n.sensorNonwear,
						n.projectMeta
					], async () => {
						const t = await n.files.get(e);
						return s(t, await n.sensorNonwear.where("fileId").equals(e).count()) === i && (t && (r = t.resolvedCapabilities, l = o, void 0 === r || r.length !== l.length || !l.every((e) => r.includes(e)) || 4 !== t.resolvedCapabilitiesRevision) && await k(n, [n.files], () => n.files.update(e, {
							resolvedCapabilities: o,
							resolvedCapabilitiesRevision: 4
						}), a), !0);
						var r, l;
					}, a)) return o;
				}
			}(e, t);
		} catch {
			return console.warn("Capability refresh failed. Stored data was kept; conditional capabilities remain unavailable until the next read."), [];
		}
	}(t.fileId, e.db), e.finalizedFileId = await ee(t, e.db, e.signal), delete e.guard;
}
async function Et(e, t) {
	try {
		await Dt(e);
		const t = e.guard, a = !!t && await Z(t, e.db);
		t && delete e.guard, a ? (console.warn("[local-processing] Rolled back an incomplete local ingest."), e.rollbackOutcome = "rolled_back") : e.rollbackOutcome ??= "nothing_to_roll_back";
	} catch {
		console.error("[local-processing] Incomplete local ingest rollback also failed."), e.rollbackOutcome = "failed";
	}
}
function Pt(e, t) {
	return "object" == typeof e && null !== e && void 0 !== t.rollbackOutcome && (e.__localIngestRollbackOutcome = t.rollbackOutcome), e;
}
async function Ot(e, t, a, n, r) {
	try {
		const s = await Rt(e, t, n);
		await j(e, t.map((e) => e.date), s, a, r);
	} catch {
		r?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}
}
function jt(e, t, a, n) {
	return n <= 0 ? 0 : .9 * (e - 1 + (t - e + 1) * a / 3) / n;
}
function Lt({ scope: e, fileId: t, sourceContentHash: a, label: n, signalDates: r, onChunk: s }) {
	const i = [];
	let o = 0;
	const l = {
		saved: 0,
		activityFailed: !1,
		historyFailed: !1
	}, c = async () => {
		const c = i.splice(0);
		if (0 === c.length) return;
		const u = o - c.length + 1, d = o;
		s?.(u, d, 0), await Ut(e), s?.(u, d, 1);
		try {
			const t = c.map((e) => e.facts);
			await E(c.map((e) => e.day), e.db, t.every((e) => void 0 !== e) ? t : void 0, e.signal);
		} catch (f) {
			throw console.warn("[local-processing] Activity-day persistence failed."), Be(f, `saveActivityDay (${n})`), l.activityFailed = !0, f;
		}
		l.saved += c.length;
		const m = c.map((e) => e.day.date);
		try {
			await j(t, m, m.filter((e) => r.has(e)), e.db, e.signal);
		} catch {
			console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
		}
		s?.(u, d, 2);
		const g = c.flatMap((e) => e.history.map((t) => ({
			...t,
			date: e.day.date
		})));
		await async function(e, t, a, n, r = _(), s) {
			const i = r, o = de(), l = n.map((n) => {
				const r = {
					fileId: e,
					date: n.date ?? t,
					appVersion: o,
					results: n.results,
					...void 0 !== a ? { sourceContentHash: a } : {}
				};
				if (null === X(n)) throw new Error(`Refused an algorithm run for ${String(n.algoKey ?? n.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
				return void 0 !== n.cubeConfig ? {
					...r,
					cubeConfig: n.cubeConfig
				} : {
					...r,
					algoKey: n.algoKey
				};
			});
			try {
				return await $(l, i, s), !0;
			} catch {
				s?.throwIfAborted(), console.error("[local-processing] Algorithm history batch write failed; retrying records individually.");
			}
			let c = !1;
			for (const u of l) try {
				await L(u, i, s);
			} catch {
				s?.throwIfAborted(), c = !0, console.error("[local-processing] An algorithm history write failed; latest scoring remains available.");
				try {
					await Bt({
						op: "algorithm_run_put",
						fileId: e,
						payload: {
							kind: "history_write_failed",
							...X(u),
							date: u.date,
							error: "history_write_failed"
						}
					}, i, s);
				} catch {}
			}
			return !c;
		}(t, c[0].day.date, a, g, e.db, e.signal) || (l.historyFailed = !0), s?.(u, d, 3), await x();
	};
	return {
		state: l,
		flush: c,
		add: async (e, t, a) => {
			i.push({
				day: e,
				history: t,
				facts: a
			}), o += 1, i.length >= 8 && await c();
		}
	};
}
async function Vt(e, t = _(), a) {
	const n = t;
	try {
		const t = await e.identity(), r = await se(e.fileId, n);
		await ke({
			fileId: e.fileId,
			sourceContentSha256: e.sourceContentHash,
			...e.ggirConfigSha256 ? { ggirConfigSha256: e.ggirConfigSha256 } : {},
			sourceSizeBytes: e.sourceSizeBytes,
			sourceDigestScope: e.sourceDigestScope ?? "full_file_sha256",
			computePath: "epoch_series_part3to5",
			runtimeBuild: {
				crateVersion: t.crateVersion,
				sourceRevision: t.sourceRevision,
				artifactSha256: t.artifactSha256,
				compiledFeatures: t.compiledFeatures,
				target: t.target
			},
			semanticProfile: t.semanticProfile,
			profileProofStatus: Ee(t.profileProofStatus),
			temporalBasis: Pe(t.temporalBasis),
			calibration: e.calibration,
			diaryDisposition: r.length > 0 ? "present" : "absent",
			timestampGrid: e.timestampGrid ?? "epoch_5s_floor_seconds",
			dailyRows: e.rows,
			appVersion: de(),
			startedAt: e.startedAt,
			finishedAt: e.finishedAt ?? (/* @__PURE__ */ new Date()).toISOString()
		}, n, a);
	} catch {
		a?.throwIfAborted(), console.error("[local-processing] Execution attestation write failed; day summaries remain stored.");
	}
}
async function Bt(e, t = _(), a) {
	const n = t, { appendWal: r, withWalTx: s } = await import("./wal-BtQRMETY.js").then((e) => e.r);
	await s([], async () => {
		await r(e);
	}, n, a);
}
const Ht = /* @__PURE__ */ new Set([
	2,
	5,
	6
]);
function Yt(e) {
	return !1 !== e.imputeTimegaps && (null == e.dataFormat || Ht.has(e.dataFormat)) && (null == e.configtz || e.configtz === e.desiredtz);
}
function $t(e) {
	return `GGIR zone ${e} from the GT3X info.txt TimeZone: the app's assumption, since GGIR takes desiredtz and configtz from its own settings`;
}
async function Xt(e, t, a, n, r) {
	const s = n.anglez.length;
	return (await e.ggirDstPlaceholderCuts(t, [...a], r)).map(({ start: e, count: t, beforeTimestampSec: a }) => {
		const r = (a) => a && a.length === s ? Array.from(a.subarray(e, e + t)) : void 0, i = r(n.anglex), o = r(n.angley), l = r(n.enmo), c = r(n.zcx), u = r(n.zcy), d = r(n.zcz);
		return {
			beforeTimestampSec: a,
			anglez: r(n.anglez) ?? [],
			...i ? { anglex: i } : {},
			...o ? { angley: o } : {},
			...l ? { enmo: l } : {},
			...c ? { zcx: c } : {},
			...u ? { zcy: u } : {},
			...d ? { zcz: d } : {}
		};
	});
}
function Zt(e, t) {
	return De(void 0 === t ? void 0 : { recording: t }, e?.sensorLocation ?? l.sensor_location);
}
function Wt(e) {
	return 30 === e ? 30 : 60;
}
function qt(e) {
	const t = Oe(e?.lstmSelection);
	return {
		selection: t,
		descriptor: je(t.modelId),
		scoreOptions: {
			modelId: t.modelId,
			...null != t.threshold ? { threshold: t.threshold } : {}
		}
	};
}
function Kt(e) {
	const t = qt(e);
	return { extras: {
		lstmFeatureContract: "spectral_30s_mean_centered_v3_probabilities",
		lstmModelId: t.descriptor.id,
		lstmModelVersion: t.descriptor.version,
		lstmThreshold: String(t.selection.threshold ?? t.descriptor.defaultThreshold),
		ggirCountScorerContract: "zcy_ws3_count_epoch_v4"
	} };
}
var Qt = e({
	GGIR_NO_RESULTS_TABLES: () => ta,
	GgirImportRefusal: () => Jt,
	ensureSavedGgirNonwear: () => ca,
	existingGgirRecording: () => da,
	ggirNightsWithData: () => ua,
	isGeneactivEpochCsv: () => ya,
	processGgirMetaRDataFile: () => ma,
	processMappedMimsCsvFile: () => ga,
	refuseUnimportableGgirRecording: () => ea
}), Jt = class extends Error {
	name = "GgirImportRefusal";
	category;
	constructor(e) {
		super(I(e)), this.category = e;
	}
};
function ea(e, t) {
	const a = C(e);
	if (a && (a.notRead && a.notRead.length > 0 && t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR output",
		warning: a.notRead.map((e) => `not read: ${e.path}: ${e.reason}.`).join(" ")
	}), a.refusedNotRead)) throw new Jt("ggir-not-read");
}
const ta = "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.", aa = "actoglance.source.ggir_rdata.v1";
function na(e, t) {
	const { username: a, selectedStudyId: n } = ae.getState();
	return me.captureWorkspaceBinding(e, {
		signal: t,
		username: a,
		studyId: n
	});
}
const ra = /* @__PURE__ */ new WeakMap();
async function sa(e, t, a, n) {
	const r = e.timestampsMs.length;
	if (0 === r || e.enmo5s.length !== r || e.anglez5s.length !== r) throw new Error("GGIR meta RData did not contain aligned metashort timestamp, ENMO, and anglez columns.");
	const s = {
		desiredtz: e.desiredtz ?? void 0,
		dataFormat: e.inspection?.dformc ?? void 0,
		...n ? b(await a.ggirConfigValues(n)) : {}
	}, { runs: i, storedMs: o, steps: l } = await a.wallClockDstPlaceholders(e.timestampsMs, 1e3 * e.epochSeconds, Yt(s)), c = o.filter((e) => !Number.isNaN(e)), u = (e.timestampsMs[0] ?? 0) / 1e3, d = t?.sources.ms2 ? t.nonwear : e.nonwearShort, m = {
		...d.length === r ? { nonwear: d } : {},
		...e.invalidShort.length === e.timestampsMs.length ? { invalid: e.invalidShort } : {}
	}, g = t ? t.sources.ms3 ? t.sib : void 0 : e.part3Sib5s?.length === r ? e.part3Sib5s : void 0, f = await Je(a, o, e.enmo5s, e.anglez5s, {
		...m,
		...t?.sources.ms2 ? { invalid: t.invalid } : {},
		...g ? { sib: g } : {}
	});
	if (t && (we(t.sleepWindows), t.sources.ms3 && t.sib.length !== r || t.sources.ms2 && (t.invalid.length !== r || t.nonwear.length > 0 && t.nonwear.length !== r))) throw new Error("GGIR Parts 2–3 do not cover the same 5 s epochs as Part 1.");
	return {
		n: r,
		startSec: u,
		dstRuns: i,
		storedMs: o,
		clockSteps: l,
		wallClockMs: c,
		timegaps: s,
		ggirSib: g,
		ggirByDate: f
	};
}
const ia = /* @__PURE__ */ new WeakMap();
var oa = class extends Error {};
const la = /* @__PURE__ */ new WeakMap();
async function ca(e, t, a, n = !0) {
	let r = la.get(t);
	if (r || (r = /* @__PURE__ */ new Map(), la.set(t, r)), r.has(e)) {
		const t = r.get(e);
		if (!(t instanceof oa)) return t;
		if (!n) throw t;
	}
	let s = ia.get(t);
	s || (s = /* @__PURE__ */ new Map(), ia.set(t, s));
	const i = s.get(e);
	if (i) return i;
	const l = (async () => {
		const n = await P(e, t);
		if (!ue(n)) return null;
		if (0 === (await H(e, t)).length) return null;
		const r = await t.ggirResultsBundles.get(e);
		if (!r) return null;
		const s = z(a);
		if (n?.ggirSavedNonwearSettled) return T(r.configCsv, s);
		const i = [...(await q(e, t)).values()].filter((e) => e.ggirTimestamps?.byteLength && e.unifiedNonwearMasks?.[v.ggir_saved]?.byteLength !== e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), l = i.filter((e) => e.vanHeesNonwear?.byteLength === e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), c = i.filter((e) => !l.includes(e)), u = c.length ? await o(t, e) : null, d = u?.ms2 ? await s.reviewGgirResults({
			part1: new Uint8Array(u.part1),
			configCsv: u.configCsv,
			ms2: new Uint8Array(u.ms2),
			edits: [],
			crossCheck: !1
		}) : null, m = u && d?.nonwear.length ? (await sa(await s.readGgirMeta(new Uint8Array(u.part1), null, !0), d, s, u.configCsv)).ggirByDate : null, g = [...l.map((e) => ({
			date: e.date,
			unifiedNonwearMasks: {
				...e.unifiedNonwearMasks,
				[v.ggir_saved]: e.vanHeesNonwear
			},
			vanHeesNonwear: null
		})), ...m ? c.map((e) => {
			const t = m.get(e.date), a = new Float64Array(e.ggirTimestamps);
			if (!t?.nonwear || t.timestamps.length !== a.length || !a.every((e, a) => e === t.timestamps[a])) throw new oa("Saved GGIR nonwear does not match the stored epoch grid.");
			return {
				date: e.date,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					[v.ggir_saved]: new Uint8Array(t.nonwear).buffer
				},
				vanHeesNonwear: null
			};
		}) : []];
		return await U(t, [
			t.projectMeta,
			t.activityDays,
			t.physicalActivityFileSummaries,
			t.files
		], async () => {
			await Promise.all(g.map(({ date: n, ...r }) => O(e, n, r, t, a))), await t.files.update(e, { ggirSavedNonwearSettled: !0 });
		}, a), g.length, T(r.configCsv, s);
	})().then((t) => (r.set(e, t), t)).catch((t) => {
		throw !a?.aborted && t instanceof oa && r.set(e, t), console.warn("[local-processing] Could not fill saved GGIR nonwear from retained ms2."), t;
	}).finally(() => {
		s.delete(e);
	});
	return s.set(e, l), l;
}
async function ua(e, t, a) {
	const n = await Promise.all(e.map(async (e) => t.has(e) || t.has(await a(e) ?? "")));
	return e.filter((e, t) => n[t]);
}
async function da(e, t, a, n) {
	const r = n ?? await M(e, void 0, a), s = await J(r.fullHash, t) ?? await W(r.prefixHash, t, r.fullHash);
	return s?.id ? s : void 0;
}
async function ma(e, t, a, s, i, o, l) {
	const c = ra.get(e);
	ra.delete(e);
	const f = i?.db ?? _(), h = s?.ggirConfig ?? await g(f), y = o ?? d(), b = i ?? {
		db: f,
		attemptId: r(),
		auditBinding: na(f, a),
		signal: a,
		recording: await At(e, a, y)
	};
	A(a, "processGgirMetaRDataFile"), ea(e, t);
	const I = l ?? (() => {
		u(y);
	});
	t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR meta RData..."
	});
	const { prefixHash: S, fullHash: x } = c?.value?.hashes ?? await M(e, (e) => {
		t?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, a), z = await da(e, f, a, {
		prefixHash: S,
		fullHash: x
	});
	if (z?.id) {
		t?.({
			phase: "complete",
			percent: 100,
			message: "File already imported"
		});
		const a = z.availableDates;
		return await ie(e.name, f), {
			alreadyImported: !0,
			fileId: z.id,
			availableDates: a,
			sourceType: z.sourceType ?? n.GGIR_5S_UPLOAD
		};
	}
	const F = await ne(e.name, f);
	if (F && "incomplete" !== F.ingestState) throw new K();
	if (t?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing GGIR metashort and metalong..."
	}), A(a, "before reading GGIR RData"), c && "error" in c) throw c.error;
	const D = C(e), T = c?.value?.input ?? (D ? await he(D) : null), k = c?.value || !T ? void 0 : await G(y, (e) => e.prepareGgirRecording(T), {
		ms: R,
		label: "prepareGgirRecording",
		signal: a,
		cancel: I
	}), O = k && T ? (L = T, null === (V = k.cleanedNightsCsv) ? L : {
		...L,
		cleanedNightsCsv: V
	}) : T;
	var L, V;
	const H = c?.value || O ? void 0 : await e.arrayBuffer();
	A(a, "after reading GGIR RData");
	const Y = c?.value?.meta ?? k?.meta ?? await G(y, (e) => e.readGgirMeta(m(new Uint8Array(H), [H]), h.csvText, !1), {
		ms: 3e5,
		label: "readGgirMeta",
		signal: a,
		cancel: I
	}), $ = function(e, t) {
		return t && !t.sources.ms4 && e?.notRead?.some((e) => /(?:^|\/)meta\/ms4\.out\//u.test(e.path)) ? {
			...t,
			importNotices: [...t.importNotices, Ie]
		} : t;
	}(D, c?.value?.review ?? k?.review ?? null), X = c?.value?.computed ?? await async function(e, t, a, n, r) {
		const s = C(e)?.configCsv, { n: i, startSec: o, dstRuns: l, storedMs: c, clockSteps: u, wallClockMs: d, timegaps: m, ggirSib: g, ggirByDate: f } = await sa(t, a, n, await s?.text()), p = [...f.keys()].sort(), h = a ? await ua(ye(a), f, (e) => n.nextDate(e)) : [], w = h.length > 0 ? h : await mt(f, n);
		if (0 === p.length) throw new Error("GGIR meta RData did not contain any dated 5 s epochs.");
		const y = p.flatMap((e) => {
			const t = f.get(e);
			if (!t) return [];
			A(r, `saveActivityDay ${e}`);
			const n = /* @__PURE__ */ new Float64Array();
			return [{
				fileId: 0,
				date: e,
				timestamps: n.buffer,
				axisY: n.buffer,
				vectorMagnitude: n.buffer,
				ggirTimestamps: new Float64Array(t.timestamps).buffer,
				ggirEnmo: new Float64Array(t.enmo).buffer,
				ggirAnglez: new Float64Array(t.anglez).buffer,
				...t.anglex ? { ggirAnglex: new Float64Array(t.anglex).buffer } : {},
				...t.angley ? { ggirAngley: new Float64Array(t.angley).buffer } : {},
				...t.sib ? { ggirSib: new Uint8Array(t.sib).buffer } : {},
				...t.nonwear ? a ? { unifiedNonwearMasks: { [v.ggir_saved]: new Uint8Array(t.nonwear).buffer } } : { vanHeesNonwear: new Uint8Array(t.nonwear).buffer } : {},
				...t.invalid ? { ggirInvalid: new Uint8Array(t.invalid).buffer } : {},
				algorithmResults: {},
				nonwearResults: null
			}];
		});
		return {
			n: i,
			startSec: o,
			dstRuns: l,
			storedMs: c,
			clockSteps: u,
			wallClockMs: d,
			timegaps: m,
			rdataConfig: s,
			availableDates: p,
			nightDates: w,
			ggirSib: g,
			dayRecords: y,
			facts: await Promise.all(y.map((e) => ce(e, n))),
			signalDates: await Rt(0, y, n).catch(() => (r?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days."), null)),
			placeholders: l.length > 0 ? await Xt(n, 1e3 * o, l, {
				anglez: t.anglez5s,
				enmo: t.enmo5s
			}, d) : void 0,
			summaries: a ? await Se(a, 0, r, n) : [],
			markers: a ? await ve(a, u, n) : void 0
		};
	}(e, Y, $, y, a), { n: Z, startSec: W, dstRuns: q, storedMs: Q, clockSteps: J, wallClockMs: ee, timegaps: te, rdataConfig: ae, availableDates: re, nightDates: le, ggirSib: ue } = X;
	t?.({
		phase: "storing",
		percent: 55,
		message: "Saving GGIR 5 s epochs..."
	});
	const de = await Tt(b, {
		filename: e.name,
		devicePreset: "ggir_5s_meta",
		epochLengthSeconds: Y.epochSeconds,
		availableDates: le,
		fileHash: S,
		sourceContentHash: x,
		sourceSizeBytes: e.size,
		source: "local",
		eventMarkerInstants: [],
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: n.GGIR_5S_UPLOAD,
		...W > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * W)).toISOString() } } : {},
		sourceProfileId: aa,
		...Y.desiredtz ? { ggirTimezone: Y.desiredtz } : {},
		...q.length + J.length > 0 ? { ggirClockBasis: (me = te, we = null != ae, Yt(me) ? `GGIR's imputed fall-back hour left out (${we ? "config.csv: imputeTimegaps TRUE, configtz = desiredtz" : "no config.csv, so GGIR's defaults are assumed"})` : `GGIR's repeated fall-back hour kept as recorded data (${!1 === me.imputeTimegaps ? "imputeTimegaps = FALSE" : null == me.dataFormat || Ht.has(me.dataFormat) ? `configtz ${me.configtz ?? ""} differs from desiredtz ${me.desiredtz ?? ""}` : `GGIR does not gap-impute data format ${String(me.dataFormat)}`})`) } : {},
		...J.length > 0 ? { ggirClockSteps: J } : {},
		...q.length > 0 ? { ggirDstPlaceholders: X.placeholders } : {}
	}, y);
	var me, we;
	if ("already_complete" === de.kind) {
		const t = de.record.id;
		if (null == t) throw new Error("Completed local import identity is invalid.");
		return await ie(e.name, f), {
			alreadyImported: !0,
			fileId: t,
			availableDates: de.record.availableDates,
			sourceType: de.record.sourceType ?? n.GGIR_5S_UPLOAD
		};
	}
	const _e = de.guard.fileId;
	let Ce = null, Re = !1;
	const Ne = !$ && !ue, Ge = await D?.qwindowCsv?.text();
	if ($ && O) try {
		const t = O.configCsv ? await B(O.configCsv, y) : void 0;
		if (await Ut(b), await oe(X.summaries.map((e) => ({
			...e,
			fileId: _e
		})), f, a), await U(f, [f.files, f.ggirResultsBundles], async () => {
			await f.ggirResultsBundles.put(be(_e, D?.recordingFile ?? e.name, O, $, {
				part2Reports: D?.part2Reports,
				personReports: D?.personReports,
				qwindowCsv: Ge,
				resultsCsv: D?.resultsCsv
			})), await f.files.update(_e, {
				ggirBundleRevision: crypto.randomUUID(),
				ggirSavedNonwearSettled: !0,
				...t ? { ggirNonwearDetector: t } : {}
			});
		}, a), !await fe(_e, $, Zt(s, b.recording), f, !0, J, a, X.markers)) throw new Error("GGIR results markers could not be saved.");
	} catch (je) {
		throw await Et(b), je;
	}
	const xe = Y.invalidShort.length === Z ? Y.invalidShort : null, ze = $ ? null : await G(y, (e) => e.runGgirFromEpoch({
		source: "ggir_part1_rdata",
		invalidMask: xe ? "ggir_part2" : "none"
	}, Y.anglez5s, Y.enmo5s, Y.epochSeconds, W, xe ?? new Uint8Array(Z), Y.desiredtz ?? void 0, h.csvText).catch((e) => (N(e, a, "runGgirFromEpoch (GGIR RData)"), console.warn("[local-processing] GGIR epoch analysis failed for a local metadata import."), Re = !0, null)), {
		ms: R,
		label: "runGgirFromEpoch (GGIR RData)",
		signal: a,
		cancel: I
	});
	if (ze?.days?.length) {
		const e = p(ze.days, _e, void 0, h);
		await Ut(b), await oe(e, f, a).catch(() => {
			console.warn("[local-processing] GGIR RData daily-summary persistence failed."), Re = !0;
		});
	}
	const Fe = function(e, t) {
		const a = [];
		if (!t || t.length !== e.length) return a;
		let n = null;
		for (let r = 0; r < e.length; r++) {
			const s = e[r] ?? 0, i = 0 !== (t[r] ?? 0);
			if (i && null === n && (n = s), (!i || r === e.length - 1) && null !== n) {
				const t = i && r === e.length - 1 ? s + 5e3 : s;
				a.push([n / 1e3, t / 1e3]), n = null;
			}
		}
		return a;
	}(J.length > 0 ? Q : Y.timestampsMs, Y.nonwearShort), De = new Map(($ ? [] : await se(_e, f)).map((e) => [e.analysisDate, e])), Te = Y.anglez5sImputed?.length === Z ? Y.anglez5sImputed : Y.anglez5s, Ue = Y.enmo5sImputed?.length === Z ? Y.enmo5sImputed : Y.enmo5s;
	Ce = $ ? Ce : await w(_e, Te, W, Fe, De, s?.hasptVariant, {
		activity5s: Ue,
		...xe ? { invalid5s: xe } : {},
		dstRuns: q,
		wallClockMs: ee,
		...Y.desiredtz ? { timezone: Y.desiredtz } : {}
	}, Ae(s?.sleepPeriodDetectionConfig, Me), Zt(s, b.recording), f, a, y, I, b.auditBinding);
	const ke = X.dayRecords.map((e) => ({
		...e,
		fileId: _e
	}));
	let Ee = !1;
	await Ut(b);
	const Pe = (await E(ke, f, X.facts, a).catch((e) => (console.warn("[local-processing] GGIR RData activity-day persistence failed."), Be(e, "saveActivityDay (GGIR RData)"), Ee = !0, []))).length;
	if (!Ee && X.signalDates && await j(_e, re, X.signalDates, f, a).catch(() => {
		a?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}), Ee || Pe !== re.length || 0 === Pe) throw await Et(b), /* @__PURE__ */ new Error("Could not save any GGIR RData epochs — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	A(a, "before completing GGIR RData ingest"), await kt(b);
	const Oe = [
		...$?.configWarnings ?? [],
		...$?.importNotices ?? [],
		$?.sources.ms4 && ge($),
		D && !D.resultsCsv && "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.",
		Ee && "One or more days of GGIR RData epochs could not be saved.",
		Ce && ($ ? "GGIR results markers could not be saved." : "Sleep window detection (HDCZA) could not place auto-markers."),
		Re && ($ ? "GGIR source summaries could not be saved." : "GGIR daily summaries could not be computed or saved for this GGIR RData file."),
		Ne && "GGIR HASIB sleep/wake flags could not be computed."
	].filter(Boolean).join(" ");
	return t?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete",
		...Oe ? { warning: Oe } : {}
	}), {
		fileId: _e,
		availableDates: le,
		sourceType: n.GGIR_5S_UPLOAD,
		...$ ? { ggir: {
			...(await import("./ggir-results-import-DD2olz8s.js").then((e) => e.u)).ggirImportCounts($, pe(D?.part2Reports, $, O?.recordingId)),
			bodySite: (await P(_e, f))?.recording?.bodySite
		} } : {}
	};
}
async function ga(e, i, o, l, u, m, g) {
	const f = m?.db ?? _(), p = g ?? z(u), w = m ?? {
		db: f,
		attemptId: r(),
		auditBinding: na(f, u),
		signal: u,
		recording: await At(e, u, p)
	};
	A(u, "processMappedMimsCsvFile"), l?.({
		phase: "reading",
		percent: 0,
		message: "Reading mapped MIMS CSV..."
	});
	const { prefixHash: v, fullHash: b } = await M(e, (e) => {
		l?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, u), I = await da(e, f, u, {
		prefixHash: v,
		fullHash: b
	});
	if (I?.id) {
		l?.({
			phase: "complete",
			percent: 100,
			message: "File already imported"
		});
		const e = I.availableDates;
		return {
			alreadyImported: !0,
			fileId: I.id,
			availableDates: e,
			sourceType: I.sourceType ?? n.EPOCHS_60S
		};
	}
	const S = await ne(e.name, f);
	if (S && "incomplete" !== S.ingestState) throw new K();
	l?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing mapped MIMS columns..."
	}), A(u, "before reading mapped MIMS CSV");
	const C = await async function(e, n, r, i) {
		const o = a(await e.text()), l = t(o);
		if (l.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
		const u = l.records, m = u[n]?.text;
		if (!m) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
		const g = s(m), f = c(m, g), p = h(r, f);
		if (p.length > 0) throw new Error(y(p));
		const w = ft(f, r.datetime_column), v = ft(f, r.date_column), b = ft(f, r.time_column), I = ft(f, r.mims_unit_column), S = ft(f, r.mims_unit_x_column), _ = ft(f, r.mims_unit_y_column), C = ft(f, r.mims_unit_z_column), M = [], A = [], R = [], N = [], G = [], x = [];
		for (let t = n + 2; t <= u.length; t++) {
			const e = u[t - 1];
			if (!e?.text.trim()) continue;
			const a = c(e.text, g);
			x.push({
				sourceRow: e.sourceRow,
				row: a,
				label: bt(a, w, v, b)
			});
		}
		const z = await (i ?? d()).sourceLabelsWallClockMs(x.map(({ label: e }) => e)), F = x.findIndex((e, t) => !Number.isFinite(z[t] ?? NaN));
		if (F >= 0) throw new Error(`Could not parse timestamp on row ${String(x[F].sourceRow)} of the mapped MIMS CSV.`);
		for (const [t, { row: a }] of x.entries()) M.push(z[t]), A.push(It(a, I)), R.push(It(a, S)), N.push(It(a, _)), G.push(It(a, C));
		if (0 === M.length) throw new Error("The mapped MIMS CSV did not contain any data rows.");
		return {
			timestampsMs: new Float64Array(M),
			mimsUnit: null === I ? /* @__PURE__ */ new Float64Array() : new Float64Array(A),
			mimsUnitX: null === S ? /* @__PURE__ */ new Float64Array() : new Float64Array(R),
			mimsUnitY: null === _ ? /* @__PURE__ */ new Float64Array() : new Float64Array(N),
			mimsUnitZ: null === C ? /* @__PURE__ */ new Float64Array() : new Float64Array(G)
		};
	}(e, i, o, p);
	A(u, "after reading mapped MIMS CSV");
	const R = n.EPOCHS_60S, N = await async function(e, t) {
		const a = /* @__PURE__ */ new Map(), n = t.timestampsMs.length, r = St(t.mimsUnit, n), s = St(t.mimsUnitX, n), i = St(t.mimsUnitY, n), o = St(t.mimsUnitZ, n), l = Float64Array.from(t.timestampsMs, (e) => e / 1e3);
		for (const [c, u] of await We(e, l)) a.set(c, {
			timestamps: qe(l, u, 0),
			...r ? { mimsUnit: qe(r, u, NaN) } : {},
			...s ? { mimsUnitX: qe(s, u, NaN) } : {},
			...i ? { mimsUnitY: qe(i, u, NaN) } : {},
			...o ? { mimsUnitZ: qe(o, u, NaN) } : {}
		});
		return a;
	}(p, C), G = [...N.keys()].sort(), x = await mt(N, p);
	l?.({
		phase: "storing",
		percent: 55,
		message: "Saving mapped MIMS epochs..."
	});
	const F = await Tt(w, {
		filename: e.name,
		devicePreset: "mims_metrics",
		epochLengthSeconds: 60,
		availableDates: x,
		fileHash: v,
		sourceContentHash: b,
		sourceSizeBytes: e.size,
		source: "local",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: R,
		...(C.timestampsMs[0] ?? 0) > 0 ? { recording: { effectiveTime: new Date(C.timestampsMs[0] ?? 0).toISOString() } } : {}
	}, p);
	if ("already_complete" === F.kind) {
		const e = F.record.id;
		if (null == e) throw new Error("Completed local import identity is invalid.");
		return {
			alreadyImported: !0,
			fileId: e,
			availableDates: F.record.availableDates,
			sourceType: F.record.sourceType ?? R
		};
	}
	const D = F.guard.fileId;
	let T = !1, U = 0;
	for (const t of G) {
		const e = N.get(t);
		if (!e) continue;
		A(u, `saveActivityDay ${t}`);
		const a = /* @__PURE__ */ new Float64Array();
		await Ut(w);
		const n = {
			fileId: D,
			date: t,
			timestamps: a.buffer,
			axisY: a.buffer,
			vectorMagnitude: a.buffer,
			ggirTimestamps: new Float64Array(e.timestamps).buffer,
			...e.mimsUnit ? { mimsUnit: new Float64Array(e.mimsUnit).buffer } : {},
			...e.mimsUnitX ? { mimsUnitX: new Float64Array(e.mimsUnitX).buffer } : {},
			...e.mimsUnitY ? { mimsUnitY: new Float64Array(e.mimsUnitY).buffer } : {},
			...e.mimsUnitZ ? { mimsUnitZ: new Float64Array(e.mimsUnitZ).buffer } : {},
			algorithmResults: {},
			nonwearResults: null
		};
		await V(n, f, u).then(() => !0).catch((e) => (console.warn("[local-processing] Mapped MIMS activity-day persistence failed."), Be(e, "saveActivityDay (mapped MIMS CSV)"), T = !0, !1)) && (U += 1, await Ot(D, [n], f, p, u));
	}
	if (T || U !== G.length || 0 === U) throw await Et(w), /* @__PURE__ */ new Error("Could not save any mapped MIMS data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return A(u, "before completing mapped MIMS ingest"), await kt(w), l?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete"
	}), {
		fileId: D,
		availableDates: x,
		sourceType: R
	};
}
const fa = 12, pa = 16384, ha = 16777216;
function wa(e) {
	const t = e.trim();
	if (!/^\d{4}-\d{2}-\d{2}/.test(t)) return null;
	const a = t.includes("	") ? "	" : ",";
	return t.split(a).length;
}
async function ya(e, t) {
	const a = Math.min(e.size, ha);
	let n = Math.min(pa, a);
	for (;;) {
		A(t, "before reading GeneActiv CSV header");
		const r = await e.slice(0, n).text();
		A(t, "after reading GeneActiv CSV header");
		const s = n >= a, i = r.split("\n"), o = s && n >= e.size ? i : i.slice(0, -1);
		for (const e of o) {
			const t = wa(e);
			if (null !== t) return t >= fa;
		}
		if (s) return !1;
		n = Math.min(2 * n, a);
	}
}
export { at as A, nt as B, _t as C, vt as D, wt as E, ut as F, Xe as G, dt as H, it as I, Ye as K, mt as L, ot as M, rt as N, ct as O, st as P, Ze as R, Mt as S, ht as T, He as U, Qe as V, Be as W, kt as _, ea as a, Rt as b, qt as c, $t as d, Ut as f, jt as g, Lt as h, ga as i, lt as j, tt as k, Zt as l, Tt as m, ya as n, Kt as o, Vt as p, Ve as q, ma as r, Wt as s, Qt as t, Xt as u, Et as v, yt as w, At as x, Pt as y, Je as z };
