import { B as e, Ct as t, Dt as n, Fn as a, I as r, L as i, M as s, Nn as o, P as l, Q as c, R as d, S as u, St as p, Tt as m, V as h, Y as f, _t as y, bt as g, c as w, d as v, en as _, ft as S, g as I, gt as k, h as b, i as D, j as M, kt as E, lt as A, n as P, nt as N, pt as x, r as O, st as T, t as F, vt as C, wt as R, xt as H, yt as L } from "./schema-Bbr1Zg5F.js";
import { r as j } from "./workers-BSP07cYu.js";
import { $ as K, A as q, C as G, D as U, F as V, I as B, J as z, L as W, Q as $, R as Q, W as J, a as Y, at as X, et as Z, it as ee, n as te, nt as ne, ot as ae, q as re, st as se, t as oe, w as le, x as ce, z as de } from "./workspace-db-BEYycimi.js";
import { l as ue } from "./legacy-invalid-night-zjKZRSNb.js";
import { a as pe, o as me, s as he } from "./content-hash-CZ-UAlQR.js";
import { S as fe, r as ye, t as ge } from "./background-jobs-DGv04HlX.js";
import { a as we, i as ve } from "./project-revision-C5TJ0HPW.js";
import { B as _e, D as Se, I as Ie, L as ke, P as be, R as De, V as Ee, _ as Ae, a as Pe, c as Ne, f as xe, i as Oe, l as Te, m as Fe, o as Ce, p as Re, t as He, u as Le, x as je } from "./night-session-registry-hkFY8FDC.js";
import { G as Ke, J as qe, Q as Ge, V as Ue, Z as Ve, d as Be, dt as ze, et as We, gt as $e, i as Qe, it as Je, l as Ye, nt as Xe, r as Ze, tt as et, v as tt } from "./per-source-defaults-DGxXQBbZ.js";
import { i as nt } from "./preset-families-C7znd6FJ.js";
import { a as at, t as rt } from "./audit-log-DX_8V0K_.js";
import "./audit-events-D-MHWdwf.js";
import "./audit-hash-DNLMlimm.js";
import { i as it, n as st, t as ot } from "./wal-CX7Pr7mo.js";
import { f as lt, t as ct } from "./physical-activity-cutpoint-presets-rv0tNO1z.js";
import { _ as dt, c as ut, d as pt, f as mt, i as ht, o as ft, p as yt } from "./diary-local-import-contract-DJjW5PDa.js";
import "./pre-migration-backup-D_wPKvI3.js";
Object.values({
	CAPACITY: "capacity",
	INTEGRITY: "integrity",
	VERIFICATION: "verification",
	OTHER: "other"
});
var gt = class extends Error {
	name = "BackupCapacityError";
	reason;
	constructor(e) {
		super(`Backup ${"source" === e ? "file" : "expanded data"} exceeds the local byte limit.`), this.reason = e;
	}
};
const wt = new Uint8Array([31, 139]);
function vt(e) {
	let t = 0;
	for (const r of e) t += r.length;
	const n = new Uint8Array(t);
	let a = 0;
	for (const r of e) n.set(r, a), a += r.length;
	return n;
}
async function _t(e, t) {
	if (!function(e, t) {
		if (t.length < e.length + 1) return !1;
		for (let n = 0; n < e.length; n++) if (t[n] !== e[n]) return !1;
		return !0;
	}(e, t)) throw new Error("opfs-codec: unrecognised cache frame (wrong magic)");
	const n = t[e.length] ?? 0, a = t.subarray(e.length + 1);
	return 1 & n ? async function(e, t = 536870912, n) {
		const a = [];
		let r = 0;
		for await (const o of async function* (e, t, n) {
			n?.throwIfAborted();
			const a = e instanceof Uint8Array ? new Blob([e]) : e, r = new Uint8Array(await a.slice(0, wt.length).arrayBuffer());
			n?.throwIfAborted();
			let i = a.stream();
			if ((s = r).length >= 2 && s[0] === wt[0] && s[1] === wt[1]) {
				if ("undefined" == typeof DecompressionStream) throw new Error("gzip payload received but DecompressionStream is unavailable in this environment");
				i = i.pipeThrough(new DecompressionStream("gzip"));
			}
			var s;
			const o = i.getReader(), l = () => {
				o.cancel(n?.reason).catch(() => {});
			};
			n?.addEventListener("abort", l, { once: !0 });
			let c = 0, d = !1;
			try {
				for (;;) {
					const { value: e, done: a } = await o.read();
					if (n?.throwIfAborted(), a) return void (d = !0);
					if (c += e.byteLength, c > t) throw new gt("expanded");
					yield e;
				}
			} finally {
				n?.removeEventListener("abort", l), d || n?.aborted || o.cancel().catch(() => {}), o.releaseLock();
			}
		}(e, t, n)) a.push(o), r += o.byteLength;
		if (1 === a.length) return a[0];
		const i = new Uint8Array(r);
		let s = 0;
		for (const o of a) i.set(o, s), s += o.byteLength;
		return i;
	}(a) : a.slice();
}
var St = "argument,value,context\ndatadir,,not applicable\ndo.report,\"c(2,4,5,6)\",not applicable\nf0,1,not applicable\nf1,542,not applicable\nmode,\"c(1,2,3,4,5,6)\",not applicable\noutputdir,,not applicable\nrawaccfiles_formats,csv,not applicable\nstudyname,,not applicable\nGGIRread_version,could not extract version,not applicable\nGGIRversion,3.0.0,not applicable\nR_version,R version 4.4.3 (2025-02-28),not applicable\nqwindow,\"c(0,24)\",params_247\nqlevels,\"c(0.958333333333333,0.979166666666667,0.993055555555556)\",params_247\nqwindow_dateformat,%d-%m-%Y,params_247\nilevels,c(),params_247\nIVIS_windowsize_minutes,60,params_247\nIVIS_epochsize_seconds,c(),params_247\nIVIS.activity.metric,2,params_247\nIVIS_acc_threshold,20,params_247\nqM5L5,c(),params_247\nMX.ig.min.dur,10,params_247\nM5L5res,10,params_247\nwinhr,\"c(5,10)\",params_247\niglevels,\"c(0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1025,1050,1075,1100,1125,1150,1175,1200,1225,1250,1275,1300,1325,1350,1375,1400,1425,1450,1475,1500,1525,1550,1575,1600,1625,1650,1675,1700,1725,1750,1775,1800,1825,1850,1875,1900,1925,1950,1975,2000,2025,2050,2075,2100,2125,2150,2175,2200,2225,2250,2275,2300,2325,2350,2375,2400,2425,2450,2475,2500,2525,2550,2575,2600,2625,2650,2675,2700,2725,2750,2775,2800,2825,2850,2875,2900,2925,2950,2975,3000,3025,3050,3075,3100,3125,3150,3175,3200,3225,3250,3275,3300,3325,3350,3375,3400,3425,3450,3475,3500,3525,3550,3575,3600,3625,3650,3675,3700,3725,3750,3775,3800,3825,3850,3875,3900,3925,3950,3975,4000,8000)\",params_247\nLUXthresholds,\"c(0,100,500,1000,3000,5000,10000)\",params_247\nLUX_cal_constant,c(),params_247\nLUX_cal_exponent,c(),params_247\nLUX_day_segments,c(),params_247\nwindow.summary.size,10,params_247\nL5M5window,\"c(0,24)\",params_247\ncosinor,TRUE,params_247\nincludedaycrit,1,params_cleaning\nndayswindow,7,params_cleaning\nstrategy,1,params_cleaning\nmaxdur,0,params_cleaning\nhrs.del.start,0,params_cleaning\nhrs.del.end,0,params_cleaning\nincludedaycrit.part5,0.083333333,params_cleaning\nexcludefirstlast.part5,FALSE,params_cleaning\nTimeSegments2ZeroFile,c(),params_cleaning\ndo.imp,TRUE,params_cleaning\ndata_cleaning_file,c(),params_cleaning\nminimum_MM_length.part5,23,params_cleaning\nexcludefirstlast,FALSE,params_cleaning\nincludenightcrit,1,params_cleaning\nexcludefirst.part4,FALSE,params_cleaning\nexcludelast.part4,FALSE,params_cleaning\nmax_calendar_days,0,params_cleaning\nnonWearEdgeCorrection,TRUE,params_cleaning\nnonwear_approach,2023,params_cleaning\nsegmentWEARcrit.part5,0.5,params_cleaning\nsegmentDAYSPTcrit.part5,\"c(0.9,0)\",params_cleaning\noverwrite,FALSE,params_general\nacc.metric,ENMO,params_general\nmaxNcores,c(),params_general\nprint.filename,FALSE,params_general\ndo.parallel,TRUE,params_general\nwindowsizes,\"c(5,900,3600)\",params_general\ndesiredtz,EST,params_general\nconfigtz,c(),params_general\nidloc,1,params_general\ndayborder,0,params_general\npart5_agg2_60seconds,FALSE,params_general\nsensor.location,wrist,params_general\nexpand_tail_max_hours,c(),params_general\nrecordingEndSleepHour,c(),params_general\ndataFormat,raw,params_general\nmaxRecordingInterval,c(),params_general\nextEpochData_timeformat,%d-%m-%Y %H:%M:%S,params_general\ndo.anglex,FALSE,params_metrics\ndo.angley,FALSE,params_metrics\ndo.anglez,TRUE,params_metrics\ndo.zcx,FALSE,params_metrics\ndo.zcy,FALSE,params_metrics\ndo.zcz,FALSE,params_metrics\ndo.enmo,TRUE,params_metrics\ndo.lfenmo,FALSE,params_metrics\ndo.en,FALSE,params_metrics\ndo.mad,FALSE,params_metrics\ndo.enmoa,FALSE,params_metrics\ndo.roll_med_acc_x,FALSE,params_metrics\ndo.roll_med_acc_y,FALSE,params_metrics\ndo.roll_med_acc_z,FALSE,params_metrics\ndo.dev_roll_med_acc_x,FALSE,params_metrics\ndo.dev_roll_med_acc_y,FALSE,params_metrics\ndo.dev_roll_med_acc_z,FALSE,params_metrics\ndo.bfen,FALSE,params_metrics\ndo.hfen,FALSE,params_metrics\ndo.hfenplus,FALSE,params_metrics\ndo.lfen,FALSE,params_metrics\ndo.lfx,FALSE,params_metrics\ndo.lfy,FALSE,params_metrics\ndo.lfz,FALSE,params_metrics\ndo.hfx,FALSE,params_metrics\ndo.hfy,FALSE,params_metrics\ndo.hfz,FALSE,params_metrics\ndo.bfx,FALSE,params_metrics\ndo.bfy,FALSE,params_metrics\ndo.bfz,FALSE,params_metrics\ndo.brondcounts,FALSE,params_metrics\ndo.neishabouricounts,FALSE,params_metrics\nhb,15,params_metrics\nlb,0.2,params_metrics\nn,4,params_metrics\nzc.lb,0.25,params_metrics\nzc.hb,3,params_metrics\nzc.sb,0.01,params_metrics\nzc.order,2,params_metrics\nzc.scale,1,params_metrics\nactilife_LFE,FALSE,params_metrics\nepochvalues2csv,FALSE,params_output\nsave_ms5rawlevels,TRUE,params_output\nsave_ms5raw_format,csv,params_output\nsave_ms5raw_without_invalid,TRUE,params_output\nstorefolderstructure,FALSE,params_output\ntimewindow,WW,params_output\nviewingwindow,1,params_output\ndofirstpage,TRUE,params_output\nvisualreport,TRUE,params_output\nweek_weekend_aggregate.part5,FALSE,params_output\ndo.part3.pdf,TRUE,params_output\noutliers.only,TRUE,params_output\ncriterror,4,params_output\ndo.visual,TRUE,params_output\ndo.sibreport,FALSE,params_output\ndo.part2.pdf,TRUE,params_output\nsep_reports,\",\",params_output\nsep_config,\",\",params_output\nvisualreport_without_invalid,FALSE,params_output\nmvpathreshold,100,params_phyact\nboutcriter,0.8,params_phyact\nmvpadur,\"c(1,5,10)\",params_phyact\nboutcriter.in,0.9,params_phyact\nboutcriter.lig,0.8,params_phyact\nboutcriter.mvpa,0.8,params_phyact\nthreshold.lig,30,params_phyact\nthreshold.mod,100,params_phyact\nthreshold.vig,400,params_phyact\nboutdur.mvpa,\"c(1,5,10)\",params_phyact\nboutdur.in,\"c(1,10,30)\",params_phyact\nboutdur.lig,\"c(1,10,30)\",params_phyact\nfrag.metrics,all,params_phyact\nchunksize,1,params_rawdata\nspherecrit,0.3,params_rawdata\nminloadcrit,72,params_rawdata\nprintsummary,FALSE,params_rawdata\ndo.cal,TRUE,params_rawdata\nbackup.cal.coef,retrieve,params_rawdata\ndynrange,c(),params_rawdata\nminimumFileSizeMB,2,params_rawdata\nrmc.dec,.,params_rawdata\nrmc.firstrow.acc,c(),params_rawdata\nrmc.firstrow.header,c(),params_rawdata\nrmc.header.length,c(),params_rawdata\nrmc.col.acc,\"c(1,2,3)\",params_rawdata\nrmc.col.temp,c(),params_rawdata\nrmc.col.time,c(),params_rawdata\nrmc.unit.acc,g,params_rawdata\nrmc.unit.temp,C,params_rawdata\nrmc.unit.time,POSIX,params_rawdata\nrmc.format.time,%Y-%m-%d %H:%M:%OS,params_rawdata\nrmc.bitrate,c(),params_rawdata\nrmc.dynamic_range,c(),params_rawdata\nrmc.unsignedbit,TRUE,params_rawdata\nrmc.origin,1/1/1970,params_rawdata\nrmc.desiredtz,c(),params_rawdata\nrmc.configtz,c(),params_rawdata\nrmc.sf,c(),params_rawdata\nrmc.headername.sf,c(),params_rawdata\nrmc.headername.sn,c(),params_rawdata\nrmc.headername.recordingid,c(),params_rawdata\nrmc.header.structure,c(),params_rawdata\nrmc.check4timegaps,FALSE,params_rawdata\nrmc.noise,13,params_rawdata\nrmc.col.wear,c(),params_rawdata\nrmc.doresample,FALSE,params_rawdata\ninterpolationType,1,params_rawdata\nimputeTimegaps,TRUE,params_rawdata\nfrequency_tol,0.1,params_rawdata\nrmc.scalefactor.acc,1,params_rawdata\nanglethreshold,5,params_sleep\ntimethreshold,5,params_sleep\nignorenonwear,TRUE,params_sleep\nconstrain2range,TRUE,params_sleep\nHASPT.algo,HDCZA,params_sleep\nHASIB.algo,vanHees2015,params_sleep\nSadeh_axis,,params_sleep\nlongitudinal_axis,c(),params_sleep\nHASPT.ignore.invalid,FALSE,params_sleep\nloglocation,c(),params_sleep\ncolid,1,params_sleep\ncoln1,2,params_sleep\nnnights,c(),params_sleep\nrelyonguider,FALSE,params_sleep\ndef.noc.sleep,1,params_sleep\nsleeplogsep,c(),params_sleep\nsleepwindowType,SPT,params_sleep\npossible_nap_window,\"c(9,18)\",params_sleep\npossible_nap_dur,\"c(15,240)\",params_sleep\n";
const It = "sleep-scoring:core-answer:", kt = /* @__PURE__ */ new Map();
let bt = null;
function Dt(e) {
	if (bt) return bt;
	const t = [];
	bt = t;
	try {
		const n = globalThis.localStorage, a = Array.from({ length: n.length }, (e, t) => n.key(t) ?? "");
		for (const r of a) r.startsWith(It) && (r.startsWith(`${It}${e}:`) ? t.push(r) : n.removeItem(r));
	} catch {}
	return t;
}
function Mt(e, t, n) {
	const a = "14e5ae1b8e3d4af2e2cf8fab4fe910276b70f08f4f4695939af6b4162af96a96";
	Dt(a);
	const r = `${It}${a}:${e}:${t}`;
	let i = kt.get(r);
	if (!i && (i = (async () => {
		try {
			const e = globalThis.localStorage?.getItem(r);
			if (e) return JSON.parse(e);
		} catch {}
		const e = await n();
		try {
			globalThis.localStorage?.setItem(r, JSON.stringify(e)), function(e, t) {
				const n = Dt(e);
				for (n.includes(t) || n.push(t); n.length > 1e3;) {
					const e = n.shift();
					try {
						e && globalThis.localStorage?.removeItem(e);
					} catch {}
				}
			}(a, r);
		} catch {}
		return e;
	})(), i.catch(() => kt.delete(r)), kt.set(r, i), kt.size > 1e3)) {
		const e = kt.keys().next();
		e.done || kt.delete(e.value);
	}
	return i;
}
const Et = Object.freeze({
	name: "default ELEMENT",
	sha256: he(St),
	csvText: St
});
function At(e) {
	const t = e?.ggir_config;
	if (t && "object" == typeof t) {
		const e = t;
		if ("string" == typeof e.name && "string" == typeof e.csvText && "string" == typeof e.sha256 && he(e.csvText) === e.sha256) return e;
	}
	return Et;
}
function Pt(e, t) {
	const n = /^"?Sadeh_axis"?,\s*"?([XYZ])"?,/m.exec(e)?.[1] ?? "Y";
	return t?.[{
		X: 0,
		Y: 1,
		Z: 2
	}[n]];
}
function Nt(e, t, n) {
	if (!n || 3 !== n.length || n.some((e) => e.length !== t.length)) return {};
	const a = /* @__PURE__ */ new Map();
	for (let i = 0; i < t.length; i++) a.set(t[i] / 1e3, i);
	const r = n.map((t) => Float64Array.from(e, (e) => t[a.get(e) ?? -1] ?? 0).buffer);
	return {
		ggirZcx5s: r[0],
		ggirZcy5s: r[1],
		ggirZcz5s: r[2]
	};
}
const xt = {
	[q.van_hees_2013]: "2013",
	[q.van_hees_2023]: "2023"
};
async function Ot(e, t) {
	return Mt("ggir-part2-nonwear", he(e ?? ""), async () => (await t.ggirAppConfigSummary(e, !0)).applied.nonwearApproach === xt.van_hees_2013 ? q.van_hees_2013 : q.van_hees_2023);
}
new RegExp(`\\b(?:${[
	"AggregateError",
	"EvalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError",
	"RuntimeError",
	"CompileError",
	"LinkError",
	"QuotaExceededError",
	"Error"
].join("|")})\\b`), Object.values(E.errnames);
const Tt = [], Ft = /* @__PURE__ */ new Set([
	"Precomputed variant mask persistence failed",
	"Actiware statistics recalculation failed",
	"Auto-nonwear consensus ballot invalidation failed",
	"Background scored-variant warm failed",
	"Date navigation save failed",
	"Derive HASIB sib from stored anglez failed",
	"GGIR results recompute failed",
	"Local activity day unpack failed",
	"Nonwear queue prefill failed",
	"Nonwear queue retry failed",
	"Persisted store hydration failed",
	"Persisted store remove failed",
	"Persisted store write failed",
	"Query invalidation failed",
	"Strict local algorithm requested without cached score",
	"Audit log entry has unparseable CloudEvent time",
	"Browser runtime error",
	"Unhandled promise rejection"
]), Ct = /* @__PURE__ */ new Set(["error_type", "has_context"]), Rt = /* @__PURE__ */ new Set([
	"AggregateError",
	"Error",
	"EvalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError",
	"RuntimeError",
	"CompileError",
	"LinkError",
	"QuotaExceededError",
	"object",
	"string",
	"number",
	"boolean",
	"undefined"
]);
function Ht(e, t, n) {
	const a = function(e) {
		if (!e) return;
		const t = {};
		for (const [n, a] of Object.entries(e)) Ct.has(n) && ("has_context" === n && "boolean" == typeof a && (t[n] = a), "error_type" === n && "string" == typeof a && (t[n] = Rt.has(a) ? a : "Error"));
		return Object.keys(t).length > 0 ? t : void 0;
	}(n);
	Tt.push({
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		level: e,
		message: Ft.has(t) ? t : "Diagnostic event",
		...a ? { context: a } : {}
	}), Tt.length > 500 && Tt.splice(0, Tt.length - 500);
}
function Lt(e) {
	return { error_type: e instanceof Error ? e.name : typeof e };
}
let jt = null;
function Kt() {
	if (null === jt) throw new Error("The scoring store is used before store/index.ts created it.");
	return jt;
}
const qt = p.physical_activity_enabled_classes;
function Gt() {
	const e = On?.state ?? Kt().store.getState();
	return {
		sleepMarkers: e.sleepMarkers,
		nonwearMarkers: e.nonwearMarkers,
		isInvalidNight: e.isInvalidNight,
		...e.isInvalidNight && !0 === e.isInvalidNightImplicit ? { isInvalidNightImplicit: !0 } : {},
		explicitNoNonwear: e.explicitNoNonwear,
		needsConsensus: e.needsConsensus,
		notes: e.notes
	};
}
function Ut(e, t, n) {
	const a = Kt().store.getState().lastSavedAt, r = n?.night ?? On ?? void 0, i = n?.after ?? r?.state ?? Gt(), s = {
		...i,
		saved: r?.state ? r.state.saved : null === a ? null : {
			at: a,
			sleepCount: i.sleepMarkers.length,
			nonwearCount: i.nonwearMarkers.length
		}
	}, o = De(e, {
		before: n?.before ?? s,
		after: s,
		event: {
			action: e,
			payload: t ?? null
		},
		payload: t ?? {},
		context: n?.context ?? {}
	}), l = 0 === o.length ? t : {
		...t,
		transitionViolations: o.map(({ guard: e, severity: t }) => ({
			guard: e,
			severity: t
		}))
	};
	if (!at(e)) return void rt.recordAppEvent(e, l);
	const c = Kt().store.getState(), d = r?.fileId ?? c.currentFileId, u = r?.analysisDate ?? c.availableDates[c.currentDateIndex];
	if (null == d || !u) return;
	const p = {
		store: void 0 !== r?.store ? r.store : te() ? oe().name : null,
		actor: r?.actor ?? (c.username || "anonymous"),
		fileId: d,
		date: u,
		action: e,
		payload: l,
		binding: r?.binding ?? null
	};
	r?.state ? (r.edits ??= []).push(p) : Vt.push({
		identity: He(c),
		edit: p
	});
}
let Vt = [];
function Bt(e, t) {
	const n = (n) => {
		return (a = n.edit).actor === e.actor && a.fileId === e.fileId && a.date === e.date && (null === e.store || null === a.store || a.store === e.store) && (!t || Ne(n.identity, t));
		var a;
	}, a = Vt.filter(n);
	return a.length > 0 && (Vt = Vt.filter((e) => !n(e))), a.map((e) => e.edit);
}
function zt() {
	const e = Vt;
	Vt = [];
	for (const { edit: t } of e) Ae(t);
}
const Wt = "This view is read-only. Its markers cannot be edited.", $t = "Offset must be after onset";
function Qt(e, t, n) {
	Ut("transition_flagged", {
		intent: e,
		guard: t,
		disposition: "refused_by_store"
	}, n ? { night: n } : void 0);
}
let Jt = null, Yt = null;
function Xt(e, t = Yt?.value ?? "", n) {
	if (!n && t !== e && Yt?.identity && !Ne(Yt.identity, He(Kt().store.getState()))) throw new Error("The notes audit has lost its owning night.");
	n || (Yt = null), t !== e && Ut("notes_changed", {
		before: t,
		after: e,
		beforeLength: t.length,
		afterLength: e.length
	}, n ? { night: n } : void 0);
}
function Zt(e) {
	null !== Jt && (clearTimeout(Jt), Jt = null, Xt(e));
}
function en(e, t) {
	return !(e.length > 0) && t;
}
function tn(e) {
	return e instanceof Error ? e.message : "Unknown error";
}
function nn(e) {
	return import("./workspace-switch-CChBPviX.js").then((e) => e.t).then(({ runWorkspaceScopeChange: t }) => t(e));
}
async function an() {
	return (await import("./night-session-DyB9iHE6.js").then((e) => e.t)).flushCurrentNight();
}
async function rn(e) {
	let t;
	try {
		return await Promise.race([e(), new Promise((e) => {
			t = setTimeout(() => e(!1), 1e4);
		})]);
	} finally {
		void 0 !== t && clearTimeout(t);
	}
}
function sn(e) {
	return {
		username: e.username,
		isAuthenticated: e.isAuthenticated,
		currentFileId: e.currentFileId,
		currentFilename: e.currentFilename,
		currentFileSource: e.currentFileSource,
		currentFileSourceType: e.currentFileSourceType,
		currentDateIndex: e.currentDateIndex,
		preferredDisplayColumn: e.preferredDisplayColumn,
		displayColumnChosenByUser: e.displayColumnChosenByUser,
		viewModeHours: e.viewModeHours,
		currentAlgorithm: e.currentAlgorithm,
		showAdjacentMarkers: e.showAdjacentMarkers,
		showNonwearOverlays: e.showNonwearOverlays,
		showChoiNonwear: e.showChoiNonwear,
		showLight: e.showLight,
		showEventMarkers: e.showEventMarkers,
		showAutoScoreProposal: e.showAutoScoreProposal,
		showDiaryOverlay: e.showDiaryOverlay,
		autoScoreOnNavigate: e.autoScoreOnNavigate,
		autoNonwearOnNavigate: e.autoNonwearOnNavigate,
		hideFilenames: e.hideFilenames,
		periodGuider: e.periodGuider,
		sleepPeriodDetection: e.sleepPeriodDetection,
		diaryDayBoundaryHour: e.diaryDayBoundaryHour,
		diaryMainSleepDateRule: e.diaryMainSleepDateRule,
		diaryNapDateRule: e.diaryNapDateRule,
		diaryNonwearDateRule: e.diaryNonwearDateRule,
		diaryDstFoldPolicy: e.diaryDstFoldPolicy,
		diaryDstGapPolicy: e.diaryDstGapPolicy,
		sleepDetectionRule: e.sleepDetectionRule,
		placementRuleset: e.placementRuleset,
		scorerPostprocessingPreset: e.scorerPostprocessingPreset,
		extractionPath: e.extractionPath,
		nonwearDetectorsCounts: e.nonwearDetectorsCounts,
		nonwearDetectorsGgir: e.nonwearDetectorsGgir,
		appliedStudySettingsAuthorityKey: e.appliedStudySettingsAuthorityKey,
		appliedUserPreferencesKey: e.appliedUserPreferencesKey,
		analysisParadigm: e.analysisParadigm,
		actiwareAnalysis: e.actiwareAnalysis,
		actiwareRestProposal: e.actiwareRestProposal,
		studyDeclaredFields: e.studyDeclaredFields,
		nightStartHour: e.nightStartHour,
		nightEndHour: e.nightEndHour,
		validDayCriteria: e.validDayCriteria,
		physicalActivityMethod: e.physicalActivityMethod,
		physicalActivityCutpointOverrides: e.physicalActivityCutpointOverrides,
		participantPopulation: e.participantPopulation,
		participantLaterality: e.participantLaterality,
		physicalActivityNonwearAsClass: e.physicalActivityNonwearAsClass,
		physicalActivityEnabledClasses: e.physicalActivityEnabledClasses,
		physicalActivityMaskPolicy: e.physicalActivityMaskPolicy,
		selectedStudyId: e.selectedStudyId,
		devicePreset: e.devicePreset,
		epochLengthSeconds: e.epochLengthSeconds,
		skipRows: e.skipRows,
		columnMapping: e.columnMapping,
		preferredActivityColumn: e.preferredActivityColumn,
		choiAxis: e.choiAxis,
		choiVariant: e.choiVariant,
		sensorLocation: e.sensorLocation,
		ggirConfig: e.ggirConfig,
		ggirHasptVariant: e.ggirHasptVariant,
		ggirHasibVariantsEnabled: e.ggirHasibVariantsEnabled,
		ggirHasibVariants: e.ggirHasibVariants,
		ggirHasibCountSource: e.ggirHasibCountSource,
		ggirHasibCountEpochSeconds: e.ggirHasibCountEpochSeconds,
		colorTheme: e.colorTheme
	};
}
function on(e, t) {
	const n = e.availableDates[e.currentDateIndex] ?? "";
	return {
		sleepMarkers: Te(e.proposalNight, e.currentFileId ?? -1, n, { sleepMarkers: e.sleepMarkers }).sleepMarkers,
		nonwearMarkers: t,
		isInvalidNight: e.isInvalidNight,
		explicitNoNonwear: en(t, e.explicitNoNonwear)
	};
}
function ln(e) {
	const { sleepMarkers: t, nonwearMarkers: n, isInvalidNight: a, explicitNoNonwear: r, needsConsensus: i, notes: s, selectedPeriodIndex: o, markerHistory: l, markerHistoryIndex: c, _editGeneration: d } = e, u = {
		proposalNight: e.proposalNight,
		sleepMarkers: t.map((e) => xe(e)),
		nonwearMarkers: n.map((e) => xe(e)),
		isInvalidNight: a,
		isInvalidNightImplicit: e.isInvalidNightImplicit,
		explicitNoNonwear: r,
		needsConsensus: i,
		notes: s,
		selectedPeriodIndex: o,
		timestamp: Date.now(),
		editGeneration: d
	}, p = l.slice(0, c + (l[c]?.editGeneration === d ? 0 : 1));
	return p.push(u), p.length > 50 && p.shift(), {
		markerHistory: p,
		markerHistoryIndex: p.length - 1
	};
}
function cn(e, t, n) {
	return t.map((t) => {
		const a = t.sourceRecordReference;
		if (void 0 === a || a === n) return t;
		const r = e.find((e) => e.sourceRecordReference === a);
		if (r && r.onsetTimestamp === t.onsetTimestamp && r.offsetTimestamp === t.offsetTimestamp && r.markerType === t.markerType) return t;
		const i = { ...t };
		return delete i.sourceRecordReference, i;
	});
}
function dn(e) {
	const { sleepMarkers: t, nonwearMarkers: n, isInvalidNight: a, isInvalidNightImplicit: r, explicitNoNonwear: i, needsConsensus: s, notes: o } = e;
	return {
		sleepMarkers: t,
		nonwearMarkers: n,
		isInvalidNight: a,
		...a && !0 === r ? { isInvalidNightImplicit: r } : {},
		explicitNoNonwear: i,
		needsConsensus: s,
		notes: o
	};
}
function un(e, t) {
	const { patch: n } = t, { isInvalidNightImplicit: a, ...r } = e, i = n.isInvalidNight ?? (!n.sleepMarkers?.some(Ge) && e.isInvalidNight), s = i && (void 0 === n.isInvalidNight ? !0 === e.isInvalidNightImplicit : !0 === n.isInvalidNightImplicit);
	return {
		...r,
		sleepMarkers: cn(t.since ?? e.sleepMarkers, n.sleepMarkers ?? e.sleepMarkers, t.placesReference),
		nonwearMarkers: n.nonwearMarkers ?? e.nonwearMarkers,
		isInvalidNight: i,
		...s ? { isInvalidNightImplicit: !0 } : {},
		explicitNoNonwear: n.explicitNoNonwear ?? e.explicitNoNonwear
	};
}
function pn(e, t, { date: n, offscreen: a, stepSec: r }) {
	const i = (e) => `${Le(e.onsetTimestamp, r)}–${Le(e.offsetTimestamp, r)}`, s = t.removed.map((t) => {
		const n = e.sleepMarkers[t];
		return Ge(n) ? `main sleep ${i(n)} removed` : `nap ${i(n)} removed`;
	});
	return t.invalidates && !t.removed.some((t) => Ge(e.sleepMarkers[t])) && s.unshift("GGIR main sleep removed"), `Manual nonwear lies inside a sleep period: ${s.join(", ")}${t.invalidates ? `; ${n || "this night"} is now an Invalid night` : ""}.${a ? "" : " Undo restores it."}`;
}
function mn(e, t, n, a) {
	n.isInvalidNight && !t.isInvalidNight && void 0 === e.patch.isInvalidNight && Ut("invalid_night_toggled", {
		value: !1,
		clearedSleepMarkers: []
	}, { after: t }), e.record?.(t, n), !n.isInvalidNight && t.isInvalidNight && !0 !== e.patch.isInvalidNight && Ut("invalid_night_toggled", {
		value: !0,
		clearedSleepMarkers: [],
		implicit: !0 === t.isInvalidNightImplicit
	}, { after: t }), (a.removed.length > 0 || a.invalidates) && function(e, t) {
		for (const n of [...t.removed].reverse()) Ut("marker_deleted", {
			category: "sleep",
			periodIndex: n,
			before: e.sleepMarkers[n]
		});
		if (t.invalidates) {
			const n = new Set(t.removed), a = new Set(t.kept);
			Ut("invalid_night_toggled", {
				value: !0,
				clearedSleepMarkers: e.sleepMarkers.filter((e, t) => !n.has(t) && !a.has(t))
			});
		}
	}(t, a);
}
function hn() {
	return Ce.waiting();
}
function fn() {
	return Ce.settled();
}
function yn(e, t, n = !1) {
	const a = Ce.executor(t.session);
	return a ? Promise.resolve(a(e)) : Ce.enqueue(t.session, (n) => (t.session = n, e()), n, Kt().session);
}
function gn(e, t, n) {
	const a = ("sleep" === t ? e.sleepMarkers : e.nonwearMarkers)[n];
	return a ? Re(a) : null;
}
function wn(e, t, n) {
	return null === n ? -1 : ("sleep" === t ? e.sleepMarkers : e.nonwearMarkers).findIndex((e) => Re(e) === n);
}
function vn(e) {
	return {
		fileId: e.fileId,
		analysisDate: e.date,
		binding: null,
		actor: e.identity.scope.actor,
		store: e.identity.db?.name ?? null,
		state: {
			...Ce.night(e),
			saved: null
		}
	};
}
function _n(e) {
	return {
		session: e,
		context: e.context
	};
}
function Sn(e) {
	return null !== e.session && Ce.holds(e.session, Kt().store.getState());
}
function In(e) {
	return !!Kt().store.getState().nightLoading && (Ht("info", "Marker edit refused: the night is still loading", { action: e }), !0);
}
function kn(e, t, n, { night: a, preview: r = !1 }) {
	if (In("marker_action") && !a.session) return Promise.resolve();
	const i = () => {
		const i = Sn(a) ? e() : {
			...Ce.context(a.session),
			...Ce.night(a.session)
		};
		let s = i, o = {};
		const l = {
			fileId: a.session.fileId,
			analysisDate: a.session.date,
			binding: null,
			actor: a.session.identity.scope.actor,
			store: a.session.identity.db?.name ?? null,
			state: {
				...dn(s),
				saved: null
			}
		}, c = (e) => {
			o = {
				...o,
				...e
			}, s = Fe(s, {
				...s,
				...e
			}), l.state = {
				...dn(s),
				saved: null
			};
		};
		On = l;
		try {
			n(() => s, c);
		} finally {
			On = null;
		}
		const d = () => {
			for (const t of l.edits ?? []) On?.state ? (On.edits ??= []).push(t) : Vt.push({
				identity: He(e()),
				edit: t
			});
		};
		if (!r && ("sleepMarkers" in o || "isInvalidNight" in o)) return Fn(e, t, {
			night: a,
			editsDisplayedSleep: !0,
			propose: () => ({
				patch: o,
				snapshot: !1,
				dirty: !1,
				record: d
			})
		}).then(() => {});
		Sn(a) ? (t(o), d()) : (Ce.updateContext(a.session, s), s._editGeneration !== i._editGeneration && Ce.write(a.session, dn(s), l.edits ?? [], s));
	}, s = Ce.executor(a.session);
	return Promise.resolve(s ? s(i) : yn(i, a, r));
}
function bn(e, t) {
	Ht("warn", "Marker action dropped: its marker is gone", {
		category: e,
		targeted: null !== t
	});
}
const Dn = "Under the Actiware paradigm a sleep period is derived from its rest interval. Move, add or delete the rest interval instead.";
function Mn(e) {
	return Ze(Qe(e.context), e.context.analysisParadigm);
}
function En(e, t) {
	const n = {
		placementRejected: !0,
		placementRejectionReason: t
	};
	Ce.holds(e, Kt().store.getState()) ? Kt().store.setState(n) : Ce.updateContext(e, {
		...Ce.context(e),
		...n
	});
}
async function An(e, t) {
	const n = await et(e);
	return !n || (En(t, n), (We("sleep", e.sleepMarkers.length) ?? We("nonwear", e.nonwearMarkers.length)) && Qt("marker_placed", "marker_limit_exceeded", vn(t)), !1);
}
async function Pn(e, t, n) {
	const a = t.identity.db;
	if (!a || !Ve(n) || e.isInvalidNight || e.sleepMarkers.some(Ge)) return e.sleepMarkers;
	const r = await a.ggirResultsBundles.get(t.fileId);
	if (!r) throw new Error("The imported GGIR night could not be read. No changes were saved.");
	const { ggirNightRecords: i } = await import("./local-export-shard-worker-BTR6svpv.js").then((e) => e.a), s = (await i(t.fileId, r.imported, /* @__PURE__ */ new Map(), n?.ggirClockSteps)).get(t.date)?.[0]?.sleepMarkers.find(Ge);
	return s ? [...e.sleepMarkers, {
		...s,
		markerIndex: e.sleepMarkers.length + 1
	}] : e.sleepMarkers;
}
async function Nn(e, t, n, a) {
	try {
		const r = n.identity.db ? await n.identity.db.files.get(n.fileId) : void 0;
		if (t.isInvalidNight && !0 === t.isInvalidNightImplicit && t.sleepMarkers.some(Ge) && (t.isInvalidNight = !1, t.isInvalidNightImplicit = !1), t.isInvalidNight || Oe(a.patch.proposalNight ?? null, n.fileId, n.date, t) || !qe(r, { sleepMarkers: a.since ?? e.sleepMarkers }, t) || (t.isInvalidNight = !0, t.isInvalidNightImplicit = !0), !await An(t, n)) return null;
		const i = {
			...t,
			sleepMarkers: await Pn(t, n, r)
		};
		if (i.sleepMarkers !== t.sleepMarkers && !await An(i, n)) return null;
		const [s] = await Ie([i], j());
		if (!s) throw new Error("The core returned no verdict for the marker edit.");
		return {
			...s,
			kept: s.kept.filter((e) => e < t.sleepMarkers.length),
			removed: s.removed.filter((e) => e < t.sleepMarkers.length)
		};
	} catch (r) {
		return Ce.fail(n, r), En(n, r instanceof Error ? r.message : String(r)), Ht("warn", "Marker edit refused: actours did not answer the manual-nonwear night rule", Lt(r)), null;
	}
}
function xn(e, t) {
	const { isInvalidNightImplicit: n, ...a } = e;
	return {
		...a,
		sleepMarkers: ke(e.sleepMarkers, t),
		isInvalidNight: e.isInvalidNight || t.invalidates,
		...!0 !== n || t.invalidates ? {} : { isInvalidNightImplicit: n }
	};
}
let On = null;
function Tn(e, { proposal: t, edited: n, baseNight: a, settle: r }) {
	const i = Ce.context(e), s = Fe(i, xn(n, r)), o = {
		fileId: e.fileId,
		analysisDate: e.date,
		binding: null,
		state: {
			...s,
			saved: null
		},
		actor: e.identity.scope.actor,
		store: e.identity.db?.name ?? null
	};
	On = o;
	try {
		mn(t, n, a, r);
	} finally {
		On = null;
	}
	const l = {
		...i,
		...!1 === t.snapshot ? {} : ln(i),
		...t.patch,
		...s,
		placementRejected: !1,
		placementRejectionReason: null,
		isDirty: !0,
		_editGeneration: i._editGeneration + 1
	};
	return Ce.write(e, s, o.edits ?? [], l), !0;
}
async function Fn(e, t, { propose: n, editsDisplayedSleep: a, night: r }) {
	if (!Sn(r)) {
		const e = r.session ? Ce.night(r.session) : null;
		if (!r.session || !e) return Ht("warn", "Marker edit refused: its night has no session to write it", {}), !1;
		const t = {
			...Ce.context(r.session),
			...e,
			isInvalidNightImplicit: !0 === e.isInvalidNightImplicit
		}, i = a ? t : Te(t.proposalNight, r.session.fileId, r.session.date, t), s = n(i, !0);
		if (!s) return !1;
		const o = dn(i), l = un(o, s), c = await Nn(o, l, r.session, s);
		return !!c && Tn(r.session, {
			proposal: s,
			edited: l,
			baseNight: o,
			settle: c
		});
	}
	const i = e(), s = i.availableDates[i.currentDateIndex] ?? "", o = null != i.currentFileId && I(i.proposalNight, i.currentFileId, s, i.sleepMarkers), l = a ? i : Te(i.proposalNight, i.currentFileId ?? -1, s, i), c = n(l, !1);
	if (!c) return !1;
	const d = dn(l), u = un(d, c), p = await Nn(d, u, r.session, c);
	if (!p) return !1;
	if (!Sn(r)) return r.session ? Tn(r.session, {
		proposal: c,
		edited: u,
		baseNight: d,
		settle: p
	}) : (Ht("warn", "Marker edit refused: its night has no session to write it", {}), !1);
	const m = e(), h = p.removed.length > 0 || p.invalidates, f = c.patch.markerMode ?? m.markerMode, y = xn(u, p);
	return t({
		...null !== m.proposalNight && (o || "proposalNight" in c.patch && null === c.patch.proposalNight) ? {
			proposalNight: null,
			acceptingProposal: m.proposalNight
		} : {},
		...!1 === c.snapshot ? {} : ln(Te(m.proposalNight, m.currentFileId ?? -1, s, m)),
		...c.patch,
		...!1 !== c.dirty || h ? {
			isDirty: !0,
			_editGeneration: m._editGeneration + 1
		} : {},
		sleepMarkers: y.sleepMarkers,
		isInvalidNight: y.isInvalidNight,
		isInvalidNightImplicit: !0 === y.isInvalidNightImplicit,
		placementRejected: !1,
		...h ? {
			selectedPeriodIndex: "sleep" === f ? null : c.patch.selectedPeriodIndex ?? m.selectedPeriodIndex,
			nightRuleReceipt: {
				date: s,
				text: pn(u, p, {
					date: s,
					offscreen: !1,
					stepSec: Pe(r.session)
				})
			}
		} : {}
	}), mn(c, u, d, p), !0;
}
function Cn(e, t, n, { editsDisplayedSleep: a = !1, night: r }) {
	const i = r;
	return yn(() => Fn(e, t, {
		propose: n,
		editsDisplayedSleep: a,
		night: i
	}), i);
}
const Rn = /* @__PURE__ */ new Set([
	"username",
	"isAuthenticated",
	"sitePassword"
]);
function Hn(e) {
	return Object.fromEntries(Object.entries(e).filter(([e]) => !Rn.has(e)));
}
const Ln = {
	preset: "default",
	onset: "#0080FF",
	offset: "#FF8000",
	sleepOverlay: "#00A99D",
	nonwear: "#DC143C",
	sensorNonwear: "#FFD700",
	choiNonwear: "#8B3FA8",
	activityLine: "#0EA5E9"
}, jn = {
	default: Ln,
	protanopia: {
		preset: "protanopia",
		onset: "#0072B2",
		offset: "#E69F00",
		sleepOverlay: "#56B4E9",
		nonwear: "#888888",
		sensorNonwear: "#F0E442",
		choiNonwear: "#CC79A7",
		activityLine: "#009E73"
	},
	deuteranopia: {
		preset: "deuteranopia",
		onset: "#CC6677",
		offset: "#DDCC77",
		sleepOverlay: "#332288",
		nonwear: "#EE7733",
		sensorNonwear: "#FFDD44",
		choiNonwear: "#AA3377",
		activityLine: "#66CCEE"
	},
	tritanopia: {
		preset: "tritanopia",
		onset: "#D55E00",
		offset: "#009E73",
		sleepOverlay: "#CC79A7",
		nonwear: "#E63946",
		sensorNonwear: "#2A9D8F",
		choiNonwear: "#E9C46A",
		activityLine: "#264653"
	},
	"high-contrast": {
		preset: "high-contrast",
		onset: "#0000FF",
		offset: "#FF8000",
		sleepOverlay: "#FF00FF",
		nonwear: "#FF0000",
		sensorNonwear: "#FFFF00",
		choiNonwear: "#00FFFF",
		activityLine: "#00FF00"
	}
}, Kn = R.wear_minutes_per_day, qn = R.valid_days_per_participant;
function Gn(e) {
	return "include" === e || "exclude" === e ? e : lt.partialDayPolicy;
}
function Un(e) {
	const t = "object" == typeof e && null !== e ? e : {}, n = t.minWearMinutesPerDay ?? t.min_wear_minutes_per_day, a = t.minValidDaysPerParticipant ?? t.min_valid_days_per_participant, r = t.requireWeekendDay ?? t.require_weekend_day, i = t.partialDayPolicy ?? t.partial_day_policy;
	return {
		minWearMinutesPerDay: m("wear_minutes_per_day", n) ?? lt.minWearMinutesPerDay,
		minValidDaysPerParticipant: m("valid_days_per_participant", a) ?? lt.minValidDaysPerParticipant,
		requireWeekendDay: "boolean" == typeof r ? r : lt.requireWeekendDay,
		partialDayPolicy: Gn(i)
	};
}
function Vn(e) {
	const t = "string" == typeof e.algoKey ? V(e.algoKey) : null;
	if (null !== t) return {
		algoKey: t,
		algoVersion: B(t),
		paramsHash: ""
	};
	const n = $e(e.cubeConfig);
	return null === n ? null : {
		algoKey: n.cellId,
		algoVersion: n.implementationVersion,
		paramsHash: n.configHash
	};
}
Kn.maximum, qn.maximum;
const Bn = "Scores were computed with different settings, so this night can't be auto-scored. Manual scoring still works.";
function zn(e) {
	return _.some((t) => e.startsWith(t));
}
function Wn(e, t) {
	const n = "string" == typeof t ? t : "recordedCellId" in t ? t.recordedCellId : t.id, a = e.map((e) => (e?.algorithmResults)?.[n]);
	if (!zn(n)) return {
		status: "ok",
		outputs: a,
		configHash: null
	};
	let r = null, i = "string" != typeof t && "recordedCellId" in t;
	if ("string" == typeof t) {
		const e = ze(n);
		r = e?.configHash ?? null, i = void 0 === e;
	} else if (!("recordedCellId" in t)) {
		const e = $e(t);
		if (null === e) throw new Error(`Refused a cube output read for ${n}: not a planned config`);
		r = e.configHash;
	}
	let s = null;
	for (const [o, l] of e.entries()) {
		if (void 0 === a[o] || void 0 === l?.algorithmResultHashes) continue;
		const e = l.algorithmResultHashes[n];
		if (void 0 === e) return {
			status: "stale",
			reason: `${n} was stored without its config`
		};
		if (!i && e !== r) return {
			status: "stale",
			reason: `${n} was stored under another config`
		};
		if (null !== s && e !== s) return {
			status: "stale",
			reason: `${n} was stored under two configs`
		};
		s = e;
	}
	return {
		status: "ok",
		outputs: a,
		configHash: s
	};
}
function $n(e) {
	const t = {};
	for (const n of Object.keys(e.algorithmResults ?? {})) t[n] = !0;
	return {
		...void 0 === e.date ? {} : { date: e.date },
		algorithmResults: t,
		algorithmResultHashes: e.algorithmResultHashes
	};
}
function Qn(e) {
	return e || "";
}
function Jn(e, t) {
	return Xn(Yn(e), t);
}
function Yn(e) {
	return [...e].filter((e) => void 0 !== e).map($n).sort((e, t) => (e.date ?? "").localeCompare(t.date ?? ""));
}
function Xn(e, t) {
	const n = Qn(t) || e.map((e) => Object.keys(e.algorithmResults)[0]).find((e) => void 0 !== e) || null;
	return null === n ? {
		key: n,
		status: "ok",
		configHash: null
	} : (() => {
		const t = Wn(e, n);
		return "stale" === t.status ? {
			key: n,
			status: "stale",
			reason: Bn
		} : {
			key: n,
			status: "ok",
			configHash: t.configHash
		};
	})();
}
const Zn = Jn([]);
function ea(e) {
	const t = Yn(e), n = /* @__PURE__ */ new Map(), a = [...new Set(t.flatMap((e) => Object.keys(e.algorithmResults)))].filter(zn);
	return Object.assign((e) => {
		const a = Qn(e);
		let r = n.get(a);
		return r || (r = Xn(t, e), n.set(a, r)), r;
	}, { cellIds: a });
}
function ta(e, t) {
	if ("stale" === t.status) return {
		status: "stale",
		reason: t.reason
	};
	if (null === t.key) return {
		status: "ok",
		key: null,
		outputs: e.map(() => {})
	};
	const n = Wn(e, t.key);
	return "stale" === n.status || null !== n.configHash && null !== t.configHash && n.configHash !== t.configHash ? {
		status: "stale",
		reason: Bn
	} : {
		status: "ok",
		key: t.key,
		outputs: n.outputs
	};
}
function na(e) {
	const t = {
		algorithmResults: e?.algorithmResults ?? {},
		algorithmResultHashes: e?.algorithmResultHashes
	};
	return Object.keys(t.algorithmResults).flatMap((e) => {
		const n = Wn([t], zn(e) ? { recordedCellId: e } : e), a = "ok" === n.status ? n.outputs[0] : void 0;
		return void 0 === a ? [] : [[e, a]];
	});
}
function aa(e, t) {
	const n = {};
	for (const [a, r] of Object.entries(e ?? {})) {
		const e = t(r, a);
		void 0 !== e && (n[a] = e);
	}
	return n;
}
function ra(e) {
	const t = {}, n = {};
	for (const { cubeConfig: a, results: r } of e ?? []) {
		const e = $e(a);
		if (null === e) throw new Error(`Refused a cube output for ${a.id}: not a planned config`);
		t[e.cellId] = r.slice(0), n[e.cellId] = e.configHash;
	}
	return {
		algorithmResults: t,
		algorithmResultHashes: n
	};
}
const ia = "__ui_state";
function sa() {
	return !oa && te();
}
let oa = !1;
function la(e) {
	oa = !0;
	try {
		return e();
	} finally {
		oa = !1;
	}
}
function ca(e) {
	return e ? `sleep-scoring-storage-${e}` : "sleep-scoring-storage";
}
function da(e) {
	try {
		return localStorage.getItem(ca(e));
	} catch {
		return null;
	}
}
function ua(e) {
	try {
		localStorage.removeItem(ca(e));
	} catch {}
}
function pa(e) {
	return `${ca(e)}:pending`;
}
let ma = null;
function ha(e) {
	try {
		return localStorage.getItem(pa(e));
	} catch {
		return null;
	}
}
function fa(e) {
	try {
		const t = JSON.parse(e), n = t?.state;
		if (null != n && "object" == typeof n && "sitePassword" in n) return delete n.sitePassword, JSON.stringify(t);
	} catch {}
	return e;
}
async function ya(e) {
	return e.studySettings.where("key").equals(ia).first();
}
"undefined" != typeof window && window.addEventListener("pagehide", function() {
	if (null !== ma) try {
		localStorage.setItem(pa(ma.workspaceId), ma.value);
	} catch {}
});
const ga = /* @__PURE__ */ new WeakMap();
async function wa(e, t) {
	const n = async function(e, t) {
		await e.transaction("rw", e.studySettings, async () => {
			const n = await ya(e);
			n?.id ? await e.studySettings.update(n.id, {
				extraSettings: { [S]: t },
				lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
			}) : await e.studySettings.add({
				key: ia,
				sleepDetectionRule: "",
				nightStartHour: "",
				nightEndHour: "",
				defaultAlgorithm: "",
				extraSettings: { [S]: t },
				contentHash: "",
				lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
			});
		});
	}(e, t);
	ga.set(e, {
		value: t,
		pending: n
	});
	try {
		await n;
	} catch (a) {
		throw ga.get(e)?.pending === n && ga.delete(e), a;
	}
}
const va = {
	getItem: async (e) => {
		if (!sa()) return null;
		const t = Y(), n = ha(t);
		try {
			const e = oe();
			if (null != n) {
				const a = fa(n);
				await wa(e, a);
				try {
					const e = pa(t);
					localStorage.getItem(e) === n && localStorage.removeItem(e);
				} catch {}
				return ua(t), a;
			}
			const a = (await ya(e))?.extraSettings[S];
			if ("string" == typeof a) return ua(t), fa(a);
			const r = await async function(e) {
				const t = await e.studySettings.where("key").equals("study").first(), n = t?.extraSettings[S];
				if ("string" != typeof n || !t?.id) return null;
				const a = fa(n);
				await wa(e, a);
				const { [S]: r, ...i } = t.extraSettings;
				return await e.studySettings.update(t.id, { extraSettings: i }), a;
			}(e);
			if (null !== r) return ua(t), r;
			const i = da(t);
			if (null != i) {
				const n = fa(i);
				return await wa(e, n), ua(t), n;
			}
			return null;
		} catch (a) {
			return Ht("warn", "Persisted store hydration from the workspace row failed", Lt(a)), null !== n ? fa(n) : da(t);
		}
	},
	setItem: async (e, t) => {
		if (!sa()) return;
		const n = {
			workspaceId: Y(),
			value: t
		}, a = ha(n.workspaceId);
		ma = n;
		try {
			const e = oe(), r = ga.get(e);
			if (r?.value === t ? await r.pending : await wa(e, t), ma === n) {
				ma = null;
				try {
					const e = ha(n.workspaceId);
					e !== a && e !== t || localStorage.removeItem(pa(n.workspaceId));
				} catch {}
			}
		} catch (r) {
			if (Ht("warn", "Persisted store write to the workspace row failed; falling back to the device sink", Lt(r)), ma !== n) return;
			try {
				localStorage.setItem(pa(n.workspaceId), t);
			} catch (i) {
				Ht("warn", "Persisted store write has no sink; this session's settings will not survive", Lt(i));
			}
		}
	},
	removeItem: async (e) => {
		const t = Y();
		ua(t);
		try {
			localStorage.removeItem(pa(t));
		} catch {}
		if (ma?.workspaceId === t && (ma = null), sa()) try {
			const e = oe();
			ga.delete(e);
			const t = await ya(e);
			if (!t?.id) return;
			const { [S]: n, ...a } = t.extraSettings;
			await e.studySettings.update(t.id, { extraSettings: a });
		} catch (n) {
			Ht("warn", "Persisted store clear on the workspace row failed", Lt(n));
		}
	}
};
function _a(e) {
	const t = e?.timestamps, n = t ? new Float64Array(t) : /* @__PURE__ */ new Float64Array(0), a = 0 === n.length ? e?.ggirTimestamps : void 0, r = Boolean(a?.byteLength), i = r ? e?.ggirSib : void 0;
	return {
		timestamps: r ? new Float64Array(a) : n,
		epochSec: r ? 5 : null,
		sleepScores: i?.byteLength ? new Uint8Array(i) : null,
		ggir: r
	};
}
function Sa(e) {
	return null != e && "" !== e;
}
function Ia(e) {
	return Sa(e.start) || Sa(e.end);
}
function ka(e) {
	return Sa(e.start) || Sa(e.end);
}
function ba(e) {
	return Array.isArray(e.naps) ? e.naps.map((e) => ({
		start: e.start ?? null,
		end: e.end ?? null
	})).filter(Ia) : [
		{
			start: e.nap1Start ?? null,
			end: e.nap1End ?? null
		},
		{
			start: e.nap2Start ?? null,
			end: e.nap2End ?? null
		},
		{
			start: e.nap3Start ?? null,
			end: e.nap3End ?? null
		}
	].filter(Ia);
}
function Da(e) {
	return Array.isArray(e.nonwearWindows) ? e.nonwearWindows.map((e) => ({
		start: e.start ?? null,
		end: e.end ?? null,
		reason: e.reason ?? null
	})).filter(ka) : [
		{
			start: e.nonwear1Start ?? null,
			end: e.nonwear1End ?? null,
			reason: e.nonwear1Reason ?? null
		},
		{
			start: e.nonwear2Start ?? null,
			end: e.nonwear2End ?? null,
			reason: e.nonwear2Reason ?? null
		},
		{
			start: e.nonwear3Start ?? null,
			end: e.nonwear3End ?? null,
			reason: e.nonwear3Reason ?? null
		}
	].filter(ka);
}
const Ma = pt.map((e) => ({
	key: e.key,
	label: e.label,
	dateTargetKey: e.date_target_key,
	timeTargetKey: e.time_target_key,
	datetimeTargetKey: e.datetime_target_key,
	required: e.required,
	temporalRole: e.temporal_role
}));
function Ea(e) {
	return "morning_offset" === e.temporalRole ? G.sleep_date_chronology : G.sleep_date_same_day;
}
function Aa(e) {
	const t = ht(e.key);
	return "nap" === t?.family ? le.naps : "nonwear" === t?.family ? le.nonwear : le.main_sleep;
}
(function(e, t = Ma) {
	const n = {};
	for (const a of t) {
		const t = e[Aa(a)];
		n[a.key] = t === ce.night_date || t === ce.period_start_day ? Ea(a) : G.explicit_only;
	}
	return {
		dateRules: n,
		pendingGroups: Object.keys(e).filter((t) => e[t] === ce.ask_per_night).sort()
	};
})(Object.freeze({
	[le.main_sleep]: g.diary_main_sleep_date_rule,
	[le.naps]: g.diary_nap_date_rule,
	[le.nonwear]: g.diary_nonwear_date_rule
})).dateRules, g.diary_day_boundary_hour, g.diary_dst_fold_policy, g.diary_dst_gap_policy, new Set(Ma.flatMap((e) => [
	e.dateTargetKey,
	e.timeTargetKey,
	e.datetimeTargetKey
])), Object.freeze({
	date: null,
	time: null,
	datetimeDate: null,
	datetimeTime: null,
	datetimeZone: null,
	resolvedDate: null,
	resolvedTime: null,
	status: "incomplete"
});
const Pa = Object.freeze({
	in_bed: "diaryInBedTime",
	sleep_onset: "diaryOnsetTime",
	sleep_offset: "diaryWakeTime",
	out_of_bed: "diaryOutOfBedTime"
});
var Na = a(z(), 1);
const xa = /* @__PURE__ */ new Map(), Oa = /* @__PURE__ */ new Set();
let Ta = 0;
function Fa(e, t) {
	const n = t?.diaryTemporalPolicy;
	var a, r;
	void 0 !== n && Number.isFinite(e) && (r = n, (void 0 === (a = xa.get(e)) || a.dayBoundaryHour !== r.dayBoundaryHour || a.mainSleepDateRule !== r.mainSleepDateRule || a.napDateRule !== r.napDateRule || a.nonwearDateRule !== r.nonwearDateRule || a.dstFoldPolicy !== r.dstFoldPolicy || a.dstGapPolicy !== r.dstGapPolicy) && (xa.set(e, n), function() {
		Ta += 1;
		for (const e of Oa) e();
	}()));
}
function Ca(e) {
	return (null == e ? void 0 : xa.get(e)) ?? function() {
		const e = Zo.getState(), a = e;
		for (const r of t) {
			if (!r.startsWith("diary_")) continue;
			const e = H[r].storeKeys.zustand;
			if (!e || null !== n(r, a[e])) throw new Error("The persisted study configuration has an incomplete diary temporal policy.");
		}
		return {
			dayBoundaryHour: e.diaryDayBoundaryHour,
			mainSleepDateRule: e.diaryMainSleepDateRule,
			napDateRule: e.diaryNapDateRule,
			nonwearDateRule: e.diaryNonwearDateRule,
			dstFoldPolicy: e.diaryDstFoldPolicy,
			dstGapPolicy: e.diaryDstGapPolicy
		};
	}();
}
function Ra(e) {
	return {
		dayStartHour: Ca(e).dayBoundaryHour,
		morningOffsetPadHours: mt.morningOffsetPadHours
	};
}
function Ha(e) {
	return ba(e).map((e) => [e.start, e.end]);
}
function La(e) {
	return Da(e).map((e) => [e.start, e.end]);
}
function ja(e, t) {
	return null == e ? null : t.wireClock(e);
}
const Ka = /* @__PURE__ */ new WeakMap();
function qa(e, t) {
	Ka.get(t)?.delete(e);
}
async function Ga(e, t, n) {
	const a = t ?? oe(), [r, i] = await Promise.all([ls(e, a), n ?? Ui(e, a).then((e) => e?.seriesRevision ?? 0)]);
	if (0 === r.length) return null;
	const s = `${i}|${r.length}|${r[0]}|${r[r.length - 1]}`;
	let o = Ka.get(a);
	const l = o?.get(e);
	if (l && l.dateKey === s) return l.promise;
	o || (o = /* @__PURE__ */ new Map(), Ka.set(a, o));
	const c = o, d = async function(e, t, n) {
		const [a, r] = await Promise.all([rs(e, t[0], n), rs(e, t[t.length - 1], n)]);
		if (!a || !r) return null;
		const i = _a(a).timestamps, s = _a(r).timestamps;
		return 0 === i.length || 0 === s.length ? null : {
			start: 1e3 * i[0],
			end: 1e3 * s[s.length - 1]
		};
	}(e, r, a).catch((t) => {
		throw c.get(e)?.promise === d && c.delete(e), t;
	});
	return o.set(e, {
		dateKey: s,
		promise: d
	}), d;
}
function Ua(e, t, n) {
	if (Fa(e.fileId, e.importMappingProvenance), null === t) return e;
	const a = {
		diaryInBedTime: e.diaryInBedTime ?? null,
		diaryOnsetTime: e.diaryOnsetTime ?? null,
		diaryWakeTime: e.diaryWakeTime ?? null
	}, { ampm_search_gap_min_hours: r, ampm_search_gap_max_hours: i, ampm_search_window_margin_hours: s } = ut.ampmSearchHours, o = n.correctDiaryAmPm({
		inBed: a.diaryInBedTime,
		onset: a.diaryOnsetTime,
		wake: a.diaryWakeTime,
		onsetAnchor: ft.onset.map(({ tsField: e }) => a[e]).find(Boolean) ?? null,
		baseDate: e.analysisDate,
		spanMs: [t.start, t.end],
		geometry: Ra(e.fileId),
		bounds: {
			gapMinHours: r,
			gapMaxHours: i,
			marginHours: s
		}
	});
	return null === o ? e : o.overlaps ? {
		...e,
		ampmCorrectionsJson: Object.keys(o.corrections).length > 0 ? o.corrections : null,
		ampmCorrectionNote: o.note
	} : {
		...e,
		ampmCorrectionsJson: null,
		ampmCorrectionNote: null
	};
}
function Va(e, t, n) {
	return dt((n) => Ua(e, t, n), new yt(n));
}
function Ba(e, t, n) {
	return dt((n) => e.map((e) => Ua(e, t, n)), new yt(n));
}
const za = {
	diary_in_bed_time: (e) => e.diaryInBedTime,
	diary_onset_time: (e) => e.diaryOnsetTime,
	diary_wake_time: (e) => e.diaryWakeTime,
	diary_out_of_bed_time: (e) => e.diaryOutOfBedTime
};
function Wa(e, t) {
	if (!e) return null;
	const n = e.decisionOverlayJson?.[t];
	if ("string" == typeof n && "" !== n) return n;
	const a = e.ampmCorrectionsJson?.[t];
	if ("string" == typeof a && "" !== a) return a;
	const r = za[t](e);
	return "string" == typeof r && "" !== r ? r : null;
}
async function $a(e, t, n = j()) {
	const a = [
		"diary_in_bed_time",
		"diary_out_of_bed_time",
		"diary_onset_time",
		"diary_wake_time"
	], r = [...e].flatMap((e) => a.map((t) => null === Wa(e, t) ? 0 : 1));
	return Mt("ggirDiaryLogShape", `${t ?? ""}:${r.join("")}`, () => n.ggirDiaryLogShape(Uint8Array.from(r), t));
}
function Qa(e, t) {
	for (const n of ft[e]) {
		const e = Wa(t, n.dbColumn);
		if (null !== e) return e;
	}
	return null;
}
function Ja(e) {
	return Qa("onset", e);
}
function Ya(e) {
	return Qa("wake", e);
}
function Xa(e) {
	return Qa("in_bed", e);
}
function Za(e) {
	return Qa("out_bed", e);
}
function er(e, t) {
	return `${e}|${t}`;
}
const tr = [
	"diaryEntries",
	"stagedDiaryEntries",
	"diaryOccurrences"
];
var nr = class {
	rows = [];
	rejected = [];
	operation;
	constructor(e) {
		this.operation = e;
	}
	row(e, t, n) {
		this.rows.push({
			store: e,
			change: t,
			...n
		});
	}
	reject(e) {
		this.rejected.push(e);
	}
	build() {
		const e = Object.fromEntries(tr.map((e) => {
			const t = this.rows.filter((t) => t.store === e);
			return [e, {
				added: t.filter((e) => "added" === e.change).length,
				replaced: t.filter((e) => "replaced" === e.change).length,
				deleted: t.filter((e) => "deleted" === e.change).length
			}];
		}));
		return {
			operation: this.operation,
			rows: [...this.rows],
			counts: e,
			rejected: [...this.rejected]
		};
	}
};
function ar(e, t) {
	const n = new nr(e);
	for (const a of t) {
		for (const { store: e, change: t, ...r } of a.rows) n.row(e, t, r);
		for (const e of a.rejected) n.reject(e);
	}
	return n.build();
}
var rr = class extends Error {
	constructor() {
		super("An earlier audit record is still being written. No diary rows were changed; try again."), this.name = "DiaryAuditPendingError";
	}
};
function ir(e, t) {
	if (t) return t;
	const { username: n, selectedStudyId: a } = Zo.getState();
	return rt.captureWorkspaceBinding(e, {
		username: n,
		studyId: a
	});
}
async function sr(e, t) {
	if (!await rt.settleWritesForDb(e, t)) throw new rr();
}
async function or(e, t, n = []) {
	const a = async (e) => {
		if (!await e) throw new rr();
	}, r = /* @__PURE__ */ new Map();
	for (const s of e.rows) "diaryEntries" === s.store && "deleted" !== s.change && null !== s.fileId && null !== s.analysisDate && r.set(s.fileId, [...r.get(s.fileId) ?? [], s.analysisDate]);
	const i = e.counts.stagedDiaryEntries;
	switch (e.operation) {
		case "import":
		case "attach":
		case "attach_chosen":
		case "move": {
			await (async () => {
				for (const [n, i] of r) await a(rt.recordFileEventDurably({
					fileId: n,
					analysisDate: [...i].sort()[0],
					action: ue.DIARY_ATTACHED,
					payload: {
						sourceKey: null,
						matchBasis: "attach_chosen" === e.operation ? "user_chosen_target" : "local_file_identity",
						entryCount: i.length
					}
				}, t));
			})();
			const s = e.rows.filter((e) => "diaryOccurrences" === e.store && "added" === e.change && null === e.analysisDate).length;
			(i.added + i.replaced > 0 || s > 0) && "attach" !== e.operation && "attach_chosen" !== e.operation && await a(rt.recordWorkspaceBoundDurably(t, ue.DIARY_STAGED, {
				staged: i.added + i.replaced,
				replaced: i.replaced,
				skipped: e.rejected.length,
				...s > 0 ? { occurrenceRecords: s } : {}
			}));
			const o = function(e) {
				return new Set(e.rows.flatMap((e) => "deleted" !== e.change && "diaryOccurrences" !== e.store && null !== e.analysisDate ? [er(h(e.sourceKey?.trim() ? e.sourceKey : `file:${String(e.fileId)}`), e.analysisDate)] : []));
			}(e), l = n.filter((e) => o.has(e.entryKey));
			l.length > 0 && await a(rt.recordWorkspaceBoundDurably(t, ue.DIARY_REPAIRED, {
				applied: l.length,
				fields: [...new Set(l.map((e) => e.field))].sort()
			}));
			return;
		}
		case "delete":
		case "workspace_clear":
			"workspace_clear" === e.operation && await a(rt.recordWorkspaceBoundDurably(t, ue.DIARY_WORKSPACE_CLEARED, {
				staged: e.counts.stagedDiaryEntries.deleted,
				canonical: e.counts.diaryEntries.deleted,
				occurrences: e.counts.diaryOccurrences.deleted
			}));
			for (const n of e.rows) "stagedDiaryEntries" === n.store && "deleted" === n.change && await a(rt.recordWorkspaceBoundDurably(t, ue.DIARY_DISCARDED, {
				sourceKey: null,
				analysisDate: null,
				...void 0 === n.rowId ? {} : { stagedEntryId: n.rowId }
			}));
			return;
		case "edit":
		case "restore":
		case "file_cascade": return;
		default: {
			const t = e.operation;
			throw new Error(`Unhandled diary operation ${String(t)}`);
		}
	}
}
fe.TIMESTAMP_MS, fe.AXIS_X, fe.AXIS_Y, fe.AXIS_Z, fe.VECTOR_MAGNITUDE, fe.TEMPERATURE;
let lr = null;
async function cr(e) {
	if ("undefined" != typeof navigator && navigator.storage?.getDirectory) try {
		await (await async function() {
			return (await (lr || (lr = "undefined" != typeof navigator && navigator.storage?.getDirectory ? navigator.storage.getDirectory() : Promise.reject(/* @__PURE__ */ new Error("OPFS is not available in this browser"))), lr)).getDirectoryHandle("activity_v5", { create: !1 });
		}()).removeEntry(function(e) {
			return `${e}.arrow`;
		}(e));
	} catch (t) {
		if (t instanceof DOMException && "NotFoundError" === t.name) return;
		throw t;
	}
}
const dr = Uint8Array.of(83, 67, 68, 49), ur = ".arrow";
function pr(e) {
	const t = JSON.stringify({
		v: "v6",
		choiAxis: e.choiAxis,
		extras: e.extras ?? {}
	});
	let n = 2166136261;
	for (let a = 0; a < t.length; a++) n ^= t.charCodeAt(a), n = Math.imul(n, 16777619) >>> 0;
	return n.toString(16).padStart(8, "0");
}
let mr = null;
async function hr(e = !1) {
	return (await (mr || (mr = "undefined" != typeof navigator && navigator.storage?.getDirectory ? navigator.storage.getDirectory() : Promise.reject(/* @__PURE__ */ new Error("OPFS is not available in this browser"))), mr)).getDirectoryHandle("scored", { create: e });
}
function fr(e, t) {
	return `${e}__${t}${ur}`;
}
function yr() {
	return "undefined" != typeof navigator && !!navigator.storage?.getDirectory;
}
function gr(e, t) {
	if (e.length === t) return e;
	const n = new Uint8Array(t);
	return n.set(e.subarray(0, t)), n;
}
async function wr(e, t, n) {
	if (!yr()) return;
	const a = pr(t), r = await (await (await hr(!0)).getFileHandle(fr(e, a), { create: !0 })).createWritable();
	try {
		const e = await async function(e) {
			const t = new TextEncoder(), n = [], a = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4));
			a.setUint32(0, e.size, !0), n.push(new Uint8Array(a.buffer));
			for (const [r, i] of e) {
				const e = t.encode(r), a = i.sadeh_actilife.length;
				let s = 0;
				i.detach_nonwear && (s |= 1), i.sadeh_ggir && (s |= 2), i.ck_ggir && (s |= 4), i.nonwear_choi_2011 && (s |= 8), i.lstm_sleep_wake && (s |= 16);
				const o = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(7));
				o.setUint16(0, e.length, !0), o.setUint32(2, a, !0), o.setUint8(6, s), n.push(new Uint8Array(o.buffer), e), n.push(gr(i.sadeh_actilife, a), gr(i.sadeh_original, a), gr(i.ck_actilife, a), gr(i.ck_original, a), gr(i.consensus_majority_vote, a), gr(i.nonwear, a)), i.detach_nonwear && n.push(gr(i.detach_nonwear, a)), i.sadeh_ggir && n.push(gr(i.sadeh_ggir, a)), i.ck_ggir && n.push(gr(i.ck_ggir, a)), i.nonwear_choi_2011 && n.push(gr(i.nonwear_choi_2011, a)), i.lstm_sleep_wake && n.push(gr(i.lstm_sleep_wake, a));
			}
			return async function(e, t) {
				let n = t, a = 0;
				"undefined" != typeof CompressionStream && (n = await async function(e) {
					if ("undefined" == typeof CompressionStream) return e;
					const t = new Blob([new Uint8Array(e)]).stream().pipeThrough(new CompressionStream("gzip")), n = await new Response(t).arrayBuffer();
					return new Uint8Array(n);
				}(t), a |= 1);
				const r = new Uint8Array(e.length + 1 + n.length);
				return r.set(e, 0), r[e.length] = a, r.set(n, e.length + 1), r;
			}(dr, vt(n));
		}(n);
		await r.write(e);
	} finally {
		await r.close();
	}
}
async function vr(e, t) {
	if (!yr()) return null;
	const n = pr(t);
	let a, r;
	try {
		a = await hr(!1);
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	try {
		r = await a.getFileHandle(fr(e, n), { create: !1 });
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	const i = await r.getFile(), s = new Uint8Array(await i.arrayBuffer());
	try {
		return await async function(e) {
			const t = await _t(dr, e), n = new DataView(t.buffer, t.byteOffset, t.byteLength), a = new TextDecoder();
			let r = 0;
			const i = n.getUint32(r, !0);
			r += 4;
			const s = /* @__PURE__ */ new Map();
			for (let o = 0; o < i; o++) {
				const e = n.getUint16(r, !0);
				r += 2;
				const i = n.getUint32(r, !0);
				r += 4;
				const o = n.getUint8(r);
				r += 1;
				const l = a.decode(t.subarray(r, r + e));
				r += e;
				const c = () => {
					const e = t.slice(r, r + i);
					return r += i, e;
				}, d = c(), u = c(), p = c(), m = c(), h = c(), f = c(), y = 1 & o ? c() : null, g = 2 & o ? c() : null, w = 4 & o ? c() : null, v = 8 & o ? c() : null, _ = 16 & o ? c() : null;
				s.set(l, {
					sadeh_actilife: d,
					sadeh_original: u,
					ck_actilife: p,
					ck_original: m,
					consensus_majority_vote: h,
					nonwear: f,
					detach_nonwear: y,
					sadeh_ggir: g,
					ck_ggir: w,
					nonwear_choi_2011: v,
					lstm_sleep_wake: _
				});
			}
			return s;
		}(s);
	} catch (o) {
		return console.warn("[opfs-scored] cache decode failed; deleting the corrupt entry:", o instanceof Error ? o.message : o), await a.removeEntry(fr(e, n)).catch((e) => {
			console.warn("[opfs-scored] failed to delete the corrupt cache entry:", e instanceof Error ? e.message : e);
		}), null;
	}
}
async function _r(e) {
	if (!yr()) return;
	let t;
	try {
		t = await hr(!1);
	} catch (r) {
		if (r instanceof DOMException && "NotFoundError" === r.name) return;
		throw r;
	}
	const n = `${e}__`, a = t.values();
	for await (const i of a) "file" === i.kind && i.name.startsWith(n) && i.name.endsWith(ur) && await t.removeEntry(i.name).catch((t) => {
		t instanceof DOMException && "NotFoundError" === t.name || console.warn(`[opfs-scored] deleteScoredForFile(${e}) failed for entry ${i.name}:`, t instanceof Error ? t.message : t);
	});
}
function Sr(e) {
	const t = Date.parse(e.lastModifiedAt);
	return Number.isFinite(t) ? t : Number.NEGATIVE_INFINITY;
}
function Ir(e, t) {
	if (!e) return t;
	const n = Sr(e), a = Sr(t);
	return a !== n ? a > n ? t : e : (t.id ?? 0) > (e.id ?? 0) ? t : e;
}
function kr(e, t, n = !1) {
	const a = /* @__PURE__ */ new Map();
	for (const r of e) r.username !== t || n && !b(r) || a.set(r.date, Ir(a.get(r.date), r));
	return a;
}
function br(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		let e = t.get(n.date);
		e || t.set(n.date, e = /* @__PURE__ */ new Map()), e.set(n.username, Ir(e.get(n.username), n));
	}
	return t;
}
function Dr(e) {
	const t = [];
	for (const n of e) if ("auto_score" !== n.username) for (const e of n.nonwearMarkers) null != e.startTimestamp && null != e.endTimestamp && t.push({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	});
	return t;
}
let Mr = !1, Er = !1;
async function Ar() {
	const e = navigator.storage;
	if (!e?.persisted) return !1;
	try {
		return await e.persisted();
	} catch {
		return !1;
	}
}
function Pr(e) {
	if (!e || "object" != typeof e) return !1;
	const t = e;
	return "QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name || 22 === t.code || 1014 === t.code || !("string" != typeof t.message || !/quota/i.test(t.message)) || (t.inner ? Pr(t.inner) : !!t.cause && Pr(t.cause));
}
const Nr = [];
function xr(e) {
	return e ? e instanceof ArrayBuffer ? new Float64Array(e, 0, Math.floor(e.byteLength / Float64Array.BYTES_PER_ELEMENT)) : e : Nr;
}
const Or = /* @__PURE__ */ new WeakMap();
function Tr(e, t) {
	"number" == typeof t && t > 0 && Or.set(e, t);
}
function Fr(e, t) {
	const n = (e?.epochResolutions?.find((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId))?.epochLengthSeconds ?? t?.epochLengthSeconds ?? void 0;
	return "number" == typeof n && n > 0 ? n : void 0;
}
async function Cr(e, t, n) {
	const a = xr(e);
	if (a.length < 2) return t;
	const r = function(e) {
		return Or.get(xr(e));
	}(a);
	return void 0 !== r ? r : await (n ?? j()).medianGapSeconds(Float64Array.from(a)) ?? t;
}
const Rr = {
	files: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "none",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: null
	},
	activityDays: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 1,
		workspaceOrder: null
	},
	scoredVariantMasks: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 2,
		workspaceOrder: null
	},
	markers: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 3,
		workspaceOrder: null
	},
	studySettings: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: 4
	},
	sensorNonwear: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 4,
		workspaceOrder: null
	},
	diaryEntries: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "diary",
		cascadeOrder: 5,
		workspaceOrder: null
	},
	stagedDiaryEntries: {
		class: "canonical",
		backup: !0,
		cascade: "attachedFileId",
		workspace: "unattached",
		aggregate: "diary",
		cascadeOrder: 7,
		workspaceOrder: 7
	},
	auditLog: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "none",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: null
	},
	scoringSessions: {
		class: "operational",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 8,
		workspaceOrder: null
	},
	walLog: {
		class: "operational",
		backup: !0,
		cascade: "fileId",
		workspace: "all",
		aggregate: "file",
		cascadeOrder: 20,
		workspaceOrder: 9
	},
	algorithmRuns: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 9,
		workspaceOrder: null
	},
	dailyGgirSummaries: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 12,
		workspaceOrder: null
	},
	viewLogs: {
		class: "operational",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: 6
	},
	localExecutions: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 10,
		workspaceOrder: null
	},
	complexityEvidence: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 11,
		workspaceOrder: null
	},
	projectMeta: {
		class: "operational",
		backup: !1,
		cascade: null,
		workspace: "none",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: null
	},
	diaryBindingDirty: {
		class: "operational",
		backup: !1,
		cascade: null,
		workspace: "none",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: null
	},
	presetFamilies: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: 5
	},
	diaryOccurrences: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "unattached",
		aggregate: "diary",
		cascadeOrder: 6,
		workspaceOrder: 8
	},
	diaryDecisionLogs: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: 3
	},
	diaryImportSessions: {
		class: "operational",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: 1
	},
	diaryImportSessionBytes: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: 2
	},
	ggirResultsBundles: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 13,
		workspaceOrder: null
	},
	ggirResultsBlobs: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 21,
		workspaceOrder: null
	},
	ggirCorrectedValues: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 22,
		workspaceOrder: null
	},
	ggirScorerReviews: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 14,
		workspaceOrder: null
	},
	actiwareStatisticsInputs: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 15,
		workspaceOrder: null
	},
	physicalActivityFileSummaries: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 16,
		workspaceOrder: null
	},
	markerProvenance: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 17,
		workspaceOrder: null
	},
	actiwareFileData: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 18,
		workspaceOrder: null
	},
	placementResults: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 19,
		workspaceOrder: null
	}
}, Hr = Object.fromEntries(Object.entries(Rr).filter(([, e]) => null !== e.cascade).sort(([, e], [, t]) => e.cascadeOrder - t.cascadeOrder).map(([e, t]) => [e, t.cascade])), Lr = Object.entries(Rr).filter(([, e]) => "none" !== e.workspace).sort(([, e], [, t]) => e.workspaceOrder - t.workspaceOrder).map(([e]) => e);
function jr(e) {
	if (!("diarySourceSha256" in e) || void 0 === e.diarySourceSha256) return {};
	if ("string" != typeof e.diarySourceSha256 || !/^[a-f0-9]{64}$/u.test(e.diarySourceSha256)) throw new Error("Diary source identity must be a SHA-256 digest.");
	return { diarySourceSha256: e.diarySourceSha256 };
}
function Kr(e, t) {
	if (void 0 !== t && void 0 === e) throw new Error("Diary replication transport requires its profile identity.");
	if (void 0 !== e?.transportSha256 && void 0 === t) throw new Error("Profile-backed diary imports require both profile identity and full replication transport.");
}
function qr(e) {
	return {
		...jr(e),
		...void 0 === e.sourceKey ? {} : { sourceKey: e.sourceKey },
		fileId: e.fileId,
		analysisDate: e.analysisDate,
		timezone: e.timezone ?? null,
		entryTimezone: e.entryTimezone ?? null,
		...void 0 !== e.importMappingProvenance ? { importMappingProvenance: e.importMappingProvenance } : {},
		...void 0 !== e.temporalEvidence ? { temporalEvidence: e.temporalEvidence } : {},
		...void 0 !== e.customFields ? { customFields: e.customFields } : {},
		...void 0 !== e.mappedSourceValues ? { mappedSourceValues: e.mappedSourceValues } : {},
		...void 0 !== e.instrumentMappingProvenance ? { instrumentMappingProvenance: e.instrumentMappingProvenance } : {},
		...void 0 !== e.instrumentValues ? { instrumentValues: e.instrumentValues } : {},
		...void 0 !== e.replicationProfileIdentity ? { replicationProfileIdentity: e.replicationProfileIdentity } : {},
		...void 0 !== e.replicationProfileTransport ? { replicationProfileTransport: e.replicationProfileTransport } : {},
		...void 0 !== e.decisionOverlayJson ? { decisionOverlayJson: e.decisionOverlayJson } : {},
		diaryInBedTime: e.diaryInBedTime ?? null,
		diaryWakeTime: e.diaryWakeTime ?? null,
		diaryOnsetTime: e.diaryOnsetTime ?? null,
		diaryOutOfBedTime: e.diaryOutOfBedTime ?? null,
		sleepQuality: e.sleepQuality ?? null,
		inHomeDlmo: e.inHomeDlmo ?? null,
		timeToFallAsleepMinutes: e.timeToFallAsleepMinutes ?? null,
		numberOfAwakenings: e.numberOfAwakenings ?? null,
		notes: e.notes ?? null,
		...null != e.naps ? { naps: e.naps } : {},
		...null != e.nonwearWindows ? { nonwearWindows: e.nonwearWindows } : {},
		nap1Start: e.nap1Start ?? null,
		nap1End: e.nap1End ?? null,
		nap2Start: e.nap2Start ?? null,
		nap2End: e.nap2End ?? null,
		nap3Start: e.nap3Start ?? null,
		nap3End: e.nap3End ?? null,
		nonwear1Start: e.nonwear1Start ?? null,
		nonwear1End: e.nonwear1End ?? null,
		nonwear1Reason: e.nonwear1Reason ?? null,
		nonwear2Start: e.nonwear2Start ?? null,
		nonwear2End: e.nonwear2End ?? null,
		nonwear2Reason: e.nonwear2Reason ?? null,
		nonwear3Start: e.nonwear3Start ?? null,
		nonwear3End: e.nonwear3End ?? null,
		nonwear3Reason: e.nonwear3Reason ?? null
	};
}
function Gr(e, t = e.sourceKey, n = e.targetChosenByUser) {
	const a = {
		timezone: e.timezone ?? null,
		entryTimezone: e.entryTimezone ?? null,
		...void 0 !== e.importMappingProvenance ? { importMappingProvenance: e.importMappingProvenance } : {},
		...void 0 !== e.temporalEvidence ? { temporalEvidence: e.temporalEvidence } : {},
		...void 0 !== e.customFields ? { customFields: e.customFields } : {},
		...void 0 !== e.mappedSourceValues ? { mappedSourceValues: e.mappedSourceValues } : {},
		...void 0 !== e.instrumentMappingProvenance ? { instrumentMappingProvenance: e.instrumentMappingProvenance } : {},
		...void 0 !== e.instrumentValues ? { instrumentValues: e.instrumentValues } : {},
		...void 0 !== e.replicationProfileIdentity ? { replicationProfileIdentity: e.replicationProfileIdentity } : {},
		...void 0 !== e.replicationProfileTransport ? { replicationProfileTransport: e.replicationProfileTransport } : {},
		...void 0 !== e.decisionOverlayJson ? { decisionOverlayJson: e.decisionOverlayJson } : {},
		diaryInBedTime: e.diaryInBedTime ?? null,
		diaryWakeTime: e.diaryWakeTime ?? null,
		diaryOnsetTime: e.diaryOnsetTime ?? null,
		diaryOutOfBedTime: e.diaryOutOfBedTime ?? null,
		sleepQuality: e.sleepQuality ?? null,
		inHomeDlmo: e.inHomeDlmo ?? null,
		timeToFallAsleepMinutes: e.timeToFallAsleepMinutes ?? null,
		numberOfAwakenings: e.numberOfAwakenings ?? null,
		notes: e.notes ?? null,
		nap1Start: e.nap1Start ?? null,
		nap1End: e.nap1End ?? null,
		nap2Start: e.nap2Start ?? null,
		nap2End: e.nap2End ?? null,
		nap3Start: e.nap3Start ?? null,
		nap3End: e.nap3End ?? null,
		nonwear1Start: e.nonwear1Start ?? null,
		nonwear1End: e.nonwear1End ?? null,
		nonwear1Reason: e.nonwear1Reason ?? null,
		nonwear2Start: e.nonwear2Start ?? null,
		nonwear2End: e.nonwear2End ?? null,
		nonwear2Reason: e.nonwear2Reason ?? null,
		nonwear3Start: e.nonwear3Start ?? null,
		nonwear3End: e.nonwear3End ?? null,
		nonwear3Reason: e.nonwear3Reason ?? null
	}, r = Array.isArray(e.naps) ? e.naps : ba(e);
	r.length > 3 && function(e, t) {
		const n = t.map((e) => ({
			start: e.start ?? null,
			end: e.end ?? null
		}));
		e.naps = n, e.nap1Start = n[0]?.start ?? null, e.nap1End = n[0]?.end ?? null, e.nap2Start = n[1]?.start ?? null, e.nap2End = n[1]?.end ?? null, e.nap3Start = n[2]?.start ?? null, e.nap3End = n[2]?.end ?? null;
	}(a, r);
	const i = Array.isArray(e.nonwearWindows) ? e.nonwearWindows : Da(e);
	return i.length > 3 && function(e, t) {
		const n = t.map((e) => ({
			start: e.start ?? null,
			end: e.end ?? null,
			reason: e.reason ?? null
		}));
		e.nonwearWindows = n, e.nonwear1Start = n[0]?.start ?? null, e.nonwear1End = n[0]?.end ?? null, e.nonwear1Reason = n[0]?.reason ?? null, e.nonwear2Start = n[1]?.start ?? null, e.nonwear2End = n[1]?.end ?? null, e.nonwear2Reason = n[1]?.reason ?? null, e.nonwear3Start = n[2]?.start ?? null, e.nonwear3End = n[2]?.end ?? null, e.nonwear3Reason = n[2]?.reason ?? null;
	}(a, i), {
		...jr(e),
		...void 0 === t ? {} : { sourceKey: t },
		...n ? { targetChosenByUser: !0 } : {},
		timezone: a.timezone ?? null,
		entryTimezone: a.entryTimezone ?? null,
		...void 0 !== a.importMappingProvenance ? { importMappingProvenance: a.importMappingProvenance } : {},
		...void 0 !== a.temporalEvidence ? { temporalEvidence: a.temporalEvidence } : {},
		...void 0 !== a.customFields ? { customFields: a.customFields } : {},
		...void 0 !== a.mappedSourceValues ? { mappedSourceValues: a.mappedSourceValues } : {},
		...void 0 !== a.instrumentMappingProvenance ? { instrumentMappingProvenance: a.instrumentMappingProvenance } : {},
		...void 0 !== a.instrumentValues ? { instrumentValues: a.instrumentValues } : {},
		...void 0 !== a.replicationProfileIdentity ? { replicationProfileIdentity: a.replicationProfileIdentity } : {},
		...void 0 !== a.replicationProfileTransport ? { replicationProfileTransport: a.replicationProfileTransport } : {},
		...void 0 !== a.decisionOverlayJson ? { decisionOverlayJson: a.decisionOverlayJson } : {},
		diaryInBedTime: a.diaryInBedTime ?? null,
		diaryWakeTime: a.diaryWakeTime ?? null,
		diaryOnsetTime: a.diaryOnsetTime ?? null,
		diaryOutOfBedTime: a.diaryOutOfBedTime ?? null,
		sleepQuality: a.sleepQuality ?? null,
		inHomeDlmo: a.inHomeDlmo ?? null,
		timeToFallAsleepMinutes: a.timeToFallAsleepMinutes ?? null,
		numberOfAwakenings: a.numberOfAwakenings ?? null,
		notes: a.notes ?? null,
		...void 0 !== a.naps ? { naps: a.naps } : {},
		...void 0 !== a.nonwearWindows ? { nonwearWindows: a.nonwearWindows } : {},
		nap1Start: a.nap1Start ?? null,
		nap1End: a.nap1End ?? null,
		nap2Start: a.nap2Start ?? null,
		nap2End: a.nap2End ?? null,
		nap3Start: a.nap3Start ?? null,
		nap3End: a.nap3End ?? null,
		nonwear1Start: a.nonwear1Start ?? null,
		nonwear1End: a.nonwear1End ?? null,
		nonwear1Reason: a.nonwear1Reason ?? null,
		nonwear2Start: a.nonwear2Start ?? null,
		nonwear2End: a.nonwear2End ?? null,
		nonwear2Reason: a.nonwear2Reason ?? null,
		nonwear3Start: a.nonwear3Start ?? null,
		nonwear3End: a.nonwear3End ?? null,
		nonwear3Reason: a.nonwear3Reason ?? null
	};
}
async function Ur(e, t, n = oe()) {
	const a = await n.diaryEntries.where("[fileId+analysisDate]").equals([e, t]).first();
	return a ? qr(a) : null;
}
async function Vr(e, t = oe()) {
	return (await t.diaryEntries.where("fileId").equals(e).toArray()).map(qr);
}
function Br(e, t = !1) {
	return Array.isArray(e) ? e.map((e) => Br(e, t)) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [t]) => e.localeCompare(t)).map(([n, a]) => {
		const r = e;
		return [n, (t && "replicationProfileTransport" === n ? r.replicationProfileIdentity?.transportSha256 : t && "importMappingProvenance" === n ? r.importMappingProvenance?.configurationSha256 : t && "instrumentMappingProvenance" === n ? r.instrumentMappingProvenance?.mappingSha256 : void 0) ?? Br(a, t)];
	})) : e;
}
function zr(e, t = !1) {
	return JSON.stringify(Br(e, t)) ?? "null";
}
Object.entries(Rr).filter(([, e]) => "unattached" === e.workspace).map(([e]) => e), Object.entries(Rr).filter(([, e]) => e.backup).map(([e]) => e), Lr.filter((e) => "diary" === Rr[e].aggregate);
const Wr = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakSet();
async function Qr(e) {
	let t = E.currentTransaction;
	for (; t?.parent;) t = t.parent;
	t && $r.has(t) || (t && $r.add(t), await je([], e));
}
async function Jr(e, t, n) {
	null != n ? await e.diaryEntries.put({
		...t,
		id: n
	}) : await e.diaryEntries.add(t), await Qr(e), Xr(e, t.fileId);
}
async function Yr(e, t, n) {
	await e.diaryEntries.delete(t), await Qr(e), Xr(e, n);
}
function Xr(e, t) {
	let n = E.currentTransaction;
	for (; n?.parent;) n = n.parent;
	if (!n) return void Se(t, e);
	const a = Wr.get(n);
	if (a) return void a.add(t);
	const r = /* @__PURE__ */ new Set([t]);
	Wr.set(n, r), n.idbtrans.addEventListener("complete", () => {
		for (const t of r) Se(t, e, r);
	}, { once: !0 });
}
function Zr(e) {
	return f(e.filename) !== e.filename;
}
function ei(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (null == n.id) continue;
		const e = l(n), a = t.get(e) ?? [];
		a.some((e) => e.id === n.id) || a.push(n), t.set(e, a);
	}
	return [...t.values()].map((e) => e.sort((e, t) => Number(Zr(e)) - Number(Zr(t)) || e.id - t.id));
}
function ti(e, t) {
	return {
		status: M.MATCHED,
		file: e[0],
		files: e,
		basis: t
	};
}
function ni(t, n, a, i) {
	const s = e(t, n, a, i);
	if (s.status === M.UNMATCHED) return s;
	if (s.status === M.MATCHED && "named" === s.basis) return ti(ei(a.byRecording.get(l(s.file)) ?? [s.file])[0], "identity");
	const o = ei(s.status === M.AMBIGUOUS ? s.candidates : [s.file, ...a.byParticipantId.covering(r(s.file), n)]), c = o.length > 1 ? function(e, t) {
		const n = e.map((e) => {
			const n = e.flatMap((e) => function(e, t) {
				const n = e.nonwearReview?.review.dates.find((e) => e.analysisDate === t);
				return n && null !== n.wearMinutes ? {
					worn: n.wearMinutes,
					recorded: n.recordedMinutes
				} : null;
			}(e, t) ?? []);
			return 0 === n.length ? null : {
				worn: Math.max(...n.map((e) => e.worn)),
				recorded: Math.max(...n.map((e) => e.recorded))
			};
		});
		if (n.some((e) => null === e)) return null;
		const a = e.filter((e, t) => n.every((e, a) => a === t || n[t].worn > e.recorded));
		return 1 === a.length ? a[0] : null;
	}(o, n) : null;
	return c ? ti(c, "wear") : s.status === M.AMBIGUOUS ? 1 === o.length ? ti(o[0], "identity") : {
		status: M.AMBIGUOUS,
		count: o.length
	} : ti(o.find((e) => e.some((e) => e.id === s.file.id)), "identity");
}
const ai = (e) => [e.markers, e.sensorNonwear];
function ri(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const i of t) {
		const e = r(i);
		e && n.set(e, (n.get(e) ?? /* @__PURE__ */ new Set()).add(l(i)));
	}
	const a = t.filter((e) => null != e.id && e.nonwearReview && (n.get(r(e))?.size ?? 0) > 1);
	return 0 === a.length ? E.Promise.resolve(s(t)) : async function(e, t, n) {
		const a = E.currentTransaction;
		if (a && !ai(e).every((e) => a.storeNames.includes(e.name))) throw new Error("Diary planning reads wear evidence: its transaction must include markers and sensorNonwear.");
		const r = import("./local-nonwear-review-DO9GB4rH.js"), { createLocalNonwearReviewRepository: i, currentNonwearReviewInputs: o } = a ? await E.waitFor(r) : await r, l = i(e), { username: c } = Zo.getState(), d = Promise.all(n.map(async (e) => await o(e, c, l) === e.nonwearReview.inputs ? null : e.id)), u = new Set((a ? await E.waitFor(d) : await d).filter((e) => null !== e));
		return s(t.map((e) => {
			if (!u.has(e.id)) return e;
			const { nonwearReview: t, ...n } = e;
			return n;
		}));
	}(e, t, a);
}
let ii;
function si() {
	return ii ?? E.waitFor(Promise.all([
		import("./diary-occurrence-store-CcFLvJh9.js"),
		import("./diary-import-provenance-C6CkrwCi.js"),
		import("./diary-instrument-mapping-DGYtAe1D.js"),
		import("./diary-replication-profile-uGnUGZb1.js").then((e) => e.i),
		import("./diary-replication-transport-HZo3ki6-.js")
	])).then(([e, t, n, a, r]) => ii = {
		occurrence: e,
		provenance: t,
		instrument: n,
		profile: a,
		transport: r
	});
}
function oi(e, t) {
	return e.status === M.MATCHED && e.files.some((e) => e.id === t);
}
async function li(e, t, n, { existing: a, participantFiles: i, excludeRowIds: s } = {}) {
	if (!t || a?.fileId === t.id) return null;
	const o = r(t);
	if (!o) return null;
	const c = l(t), d = i ? i.filter((e) => r(e) === o) : await e.files.where(O).equals(o).toArray(), u = new Set(d.filter((e) => e.id !== t.id && l(e) !== c).map((e) => e.id));
	return u.size > 0 && (await e.diaryEntries.where("analysisDate").equals(n).toArray()).some((e) => u.has(e.fileId) && e.id !== a?.id && !s?.has(e.id)) ? Object.assign(/* @__PURE__ */ new Error("Diary evidence already occupies this participant night on another recording."), {
		fileId: t.id,
		sourceKey: o,
		analysisDate: n
	}) : null;
}
async function ci(e = oe()) {
	const t = await e.diaryBindingDirty.toCollection().primaryKeys(), n = await Promise.all(t.filter((e) => "number" == typeof e).map((t) => e.files.where(P).between([t, "local"], [
		t,
		"local",
		[]
	]).keys()));
	return [.../* @__PURE__ */ new Set([...t.filter((e) => "string" == typeof e).map((e) => e.slice(F.length)), ...n.flat().map((e) => e[2])])].sort();
}
async function di(e = oe(), t) {
	return (await (t ? e.stagedDiaryEntries.where(D).anyOf([...t]).distinct() : e.stagedDiaryEntries).toArray()).sort((e, t) => e.importedAt.localeCompare(t.importedAt));
}
function ui(e, t) {
	return 0 === t.availableDates.length || t.availableDates.includes(e.analysisDate);
}
async function pi(e, t, n) {
	const a = l(t);
	return (await e.files.where(O).equals(r(t)).toArray()).filter((e) => e.id !== t.id && l(e) === a && w(e) && ui(n, e)).sort((e, t) => Number(Zr(e)) - Number(Zr(t)) || e.id - t.id);
}
async function mi(e, t, n = oe(), a = {}) {
	const i = e.id, s = t.id;
	if (!i || !s) return { status: "missing" };
	const o = n, l = await o.stagedDiaryEntries.get(i);
	l && Kr(l.replicationProfileIdentity, l.replicationProfileTransport);
	const { occurrence: { verifyDiaryOccurrenceRecord: c, assertDiaryOccurrenceMatchesCompatibilityEntry: d }, provenance: { verifyDiaryImportMappingProvenance: u, canonicalizeDiaryMappedSourceValues: p }, instrument: { verifyDiaryInstrumentMappingProvenance: m, canonicalizeDiaryInstrumentValues: f }, profile: { verifyDiaryReplicationProfileIdentity: y }, transport: { verifyDiaryReplicationTransport: g, assertDiaryReplicationTransportBinding: v } } = await si(), _ = a.targetChosenByUser ? "attach_chosen" : "attach", S = !0 === a.enclosingAudit;
	if (S && !E.currentTransaction?.storeNames.includes("auditLog")) throw new Error("An enclosing diary audit needs a transaction that includes the audit log.");
	const I = S ? null : ir(o, a.audit);
	return I && await sr(o, I), await it([
		o.files,
		o.diaryEntries,
		o.stagedDiaryEntries,
		o.diaryOccurrences,
		o.auditLog,
		...ai(o)
	], async () => {
		const e = new nr(_), n = await o.stagedDiaryEntries.get(i);
		if (!n) return { status: "missing" };
		const l = r(t), S = await o.files.where(O).equals(l).toArray(), k = a.targetChosenByUser ? await o.files.get(s) : S.find((e) => e.id === s);
		if (!k || !w(k)) return { status: "target_changed" };
		const b = await ri(o, S.filter((e) => "local" === e.source)), D = a.targetChosenByUser ? null : ni(n.sourceKey, n.analysisDate, b);
		if (!(a.targetChosenByUser ? ui(n, k) : null !== D && oi(D, s) && "local" === k.source && k.filename === t.filename && r(k) === l)) return { status: "target_changed" };
		const A = D?.status === M.MATCHED ? D.files : [k, ...await pi(o, k, n)], P = A[0].id, N = (await Promise.all(A.map((e) => o.diaryEntries.where("[fileId+analysisDate]").equals([e.id, n.analysisDate]).first()))).find((e) => void 0 !== e), x = function(e, t) {
			return {
				...jr(t),
				fileId: e,
				analysisDate: t.analysisDate,
				timezone: t.timezone ?? null,
				entryTimezone: t.entryTimezone ?? null,
				...void 0 !== t.importMappingProvenance ? { importMappingProvenance: t.importMappingProvenance } : {},
				...void 0 !== t.temporalEvidence ? { temporalEvidence: t.temporalEvidence } : {},
				...void 0 !== t.customFields ? { customFields: t.customFields } : {},
				...void 0 !== t.mappedSourceValues ? { mappedSourceValues: t.mappedSourceValues } : {},
				...void 0 !== t.instrumentMappingProvenance ? { instrumentMappingProvenance: t.instrumentMappingProvenance } : {},
				...void 0 !== t.instrumentValues ? { instrumentValues: t.instrumentValues } : {},
				...void 0 !== t.replicationProfileIdentity ? { replicationProfileIdentity: t.replicationProfileIdentity } : {},
				...void 0 !== t.replicationProfileTransport ? { replicationProfileTransport: t.replicationProfileTransport } : {},
				...void 0 !== t.decisionOverlayJson ? { decisionOverlayJson: t.decisionOverlayJson } : {},
				diaryInBedTime: t.diaryInBedTime ?? null,
				diaryWakeTime: t.diaryWakeTime ?? null,
				diaryOnsetTime: t.diaryOnsetTime ?? null,
				diaryOutOfBedTime: t.diaryOutOfBedTime ?? null,
				sleepQuality: t.sleepQuality ?? null,
				inHomeDlmo: t.inHomeDlmo ?? null,
				timeToFallAsleepMinutes: t.timeToFallAsleepMinutes ?? null,
				numberOfAwakenings: t.numberOfAwakenings ?? null,
				notes: t.notes ?? null,
				...null != t.naps ? { naps: t.naps } : {},
				...null != t.nonwearWindows ? { nonwearWindows: t.nonwearWindows } : {},
				nap1Start: t.nap1Start ?? null,
				nap1End: t.nap1End ?? null,
				nap2Start: t.nap2Start ?? null,
				nap2End: t.nap2End ?? null,
				nap3Start: t.nap3Start ?? null,
				nap3End: t.nap3End ?? null,
				nonwear1Start: t.nonwear1Start ?? null,
				nonwear1End: t.nonwear1End ?? null,
				nonwear1Reason: t.nonwear1Reason ?? null,
				nonwear2Start: t.nonwear2Start ?? null,
				nonwear2End: t.nonwear2End ?? null,
				nonwear2Reason: t.nonwear2Reason ?? null,
				nonwear3Start: t.nonwear3Start ?? null,
				nonwear3End: t.nonwear3End ?? null,
				nonwear3Reason: t.nonwear3Reason ?? null
			};
		}(s, n), T = await o.diaryOccurrences.where("[normalizedSourceKey+analysisDate]").equals([n.normalizedSourceKey, n.analysisDate]).toArray(), F = await E.waitFor(Promise.all(T.map(c)));
		if (N || await li(o, k, n.analysisDate, {
			existing: N,
			participantFiles: a.targetChosenByUser ? void 0 : S
		}) || F.some((e) => !oi(ni(e.sourceKey, n.analysisDate, b, a.targetChosenByUser ? s : void 0), P))) return e.reject({
			fileId: N ? N.fileId : null,
			sourceKey: n.sourceKey,
			analysisDate: n.analysisDate,
			reason: N ? "destination_held" : "participant_night_held"
		}), {
			status: "conflict",
			sourceKey: n.sourceKey,
			analysisDate: n.analysisDate,
			receipt: e.build()
		};
		if (F.some((e) => null !== e.fileId && e.fileId !== P)) throw new Error("A staged diary occurrence is already associated with a different local file.");
		if (!nt(x.timezone) || !nt(x.entryTimezone)) throw new Error("Staged diary entry contains an invalid IANA timezone.");
		const C = void 0 === x.importMappingProvenance ? void 0 : await E.waitFor(u(x.importMappingProvenance));
		if (void 0 !== x.mappedSourceValues && void 0 === C) throw new Error("Mapped diary source values require mapping provenance.");
		const R = void 0 === x.mappedSourceValues ? void 0 : p(C, x.mappedSourceValues);
		if (void 0 === x.instrumentMappingProvenance && (void 0 !== x.instrumentValues || void 0 !== x.replicationProfileIdentity || void 0 !== x.replicationProfileTransport)) throw new Error("Reviewed diary values and replication profile require mapping provenance.");
		if (void 0 !== x.instrumentMappingProvenance && void 0 === x.instrumentValues) throw new Error("Reviewed diary mapping provenance requires source values.");
		const H = void 0 === x.instrumentMappingProvenance ? void 0 : await E.waitFor(m(x.instrumentMappingProvenance)), L = void 0 === H ? void 0 : f(H, x.instrumentValues), j = void 0 === x.replicationProfileIdentity ? void 0 : y(x.replicationProfileIdentity), K = void 0 === x.replicationProfileTransport ? void 0 : await E.waitFor(g(x.replicationProfileTransport));
		if (Kr(j, K), void 0 !== H && void 0 !== j && (j.versionDefinitionId !== H.versionDefinitionId || j.versionDefinitionSha256 !== H.versionDefinitionSha256)) throw new Error("Diary replication profile identity does not match the reviewed mapping.");
		if (void 0 !== K && void 0 !== H && void 0 !== j) await E.waitFor(v(K, j, H));
		else if (void 0 !== K) throw new Error("Diary replication transport is missing its profile identity or reviewed mapping.");
		const q = {
			...x,
			...void 0 === C ? {} : { importMappingProvenance: C },
			...void 0 === R ? {} : { mappedSourceValues: R },
			...void 0 === H ? {} : {
				instrumentMappingProvenance: H,
				instrumentValues: L,
				...void 0 === j ? {} : { replicationProfileIdentity: j },
				...void 0 === K ? {} : { replicationProfileTransport: K }
			}
		};
		for (const t of F) {
			if (h(n.sourceKey) !== t.normalizedSourceKey) throw new Error("Diary occurrence response does not match its compatibility diary source.");
			d(t, q);
		}
		const G = (/* @__PURE__ */ new Date()).toISOString();
		for (const t of A) {
			const r = {
				fileId: t.id,
				analysisDate: n.analysisDate,
				...Gr(q, n.sourceKey, a.targetChosenByUser),
				importedAt: G
			};
			await ot({
				op: "diary_put",
				fileId: t.id,
				payload: {
					analysisDate: n.analysisDate,
					entry: r,
					replaced: !1
				}
			}), await Jr(o, r, void 0), e.row("diaryEntries", "added", {
				fileId: t.id,
				sourceKey: n.sourceKey,
				analysisDate: n.analysisDate
			});
		}
		for (const t of F) {
			if (t.fileId === P) continue;
			const n = {
				...t,
				fileId: P
			};
			await o.diaryOccurrences.put(n), e.row("diaryOccurrences", "replaced", {
				fileId: P,
				sourceKey: t.sourceKey,
				analysisDate: t.analysisDate
			}), await ot({
				op: "diary_occurrence_put",
				fileId: P,
				payload: {
					disposition: "staged_attach",
					record: n
				}
			});
		}
		await ot({
			op: "staged_diary_delete",
			payload: {
				id: i,
				sourceKey: n.sourceKey,
				normalizedSourceKey: n.normalizedSourceKey,
				analysisDate: n.analysisDate
			}
		}), await o.stagedDiaryEntries.delete(i), e.row("stagedDiaryEntries", "deleted", {
			fileId: null,
			sourceKey: n.sourceKey,
			analysisDate: n.analysisDate,
			rowId: i
		});
		const U = e.build();
		return I && await or(U, I), {
			status: "attached",
			sourceKey: n.sourceKey,
			analysisDate: n.analysisDate,
			fileIds: A.map((e) => e.id),
			receipt: U
		};
	}, o);
}
function hi(e) {
	const { id: t, fileId: n, sourceKey: a, targetChosenByUser: r, ...i } = e;
	return zr(i, !0);
}
async function fi(e, t = oe(), n) {
	const a = ir(t, n), i = [
		t.files,
		t.diaryEntries,
		t.stagedDiaryEntries,
		t.diaryOccurrences
	];
	return await rt.settleWritesForDb(t, a) ? t.transaction("rw", [
		...i,
		t.projectMeta,
		t.walLog,
		t.auditLog,
		...ai(t)
	], async () => {
		const n = await async function(e, t) {
			const n = [], a = [], i = [], s = /* @__PURE__ */ new Set(), o = {
				restaged: 0,
				moved: 0,
				mirrored: 0,
				conflicted: 0,
				unrecoverable: 0
			};
			if (0 === e.length) return {
				changes: n,
				mirrors: a,
				rejected: i,
				summary: o
			};
			const { occurrence: { assertDiaryOccurrenceMatchesCompatibilityEntry: c } } = await si(), d = await ji(t, {
				participantKeys: e,
				includeIncomplete: !0
			}), u = await ri(t, d), p = d.filter((t) => e.includes(r(t))).map((e) => e.id), m = await t.diaryEntries.where("fileId").anyOf(p).filter((e) => !e.targetChosenByUser).toArray();
			if (0 === m.length) return {
				changes: n,
				mirrors: a,
				rejected: i,
				summary: o
			};
			const f = await t.diaryOccurrences.where("fileId").anyOf(p).toArray(), y = (e) => JSON.stringify([e.fileId, e.analysisDate]), g = /* @__PURE__ */ new Map();
			for (const r of f) {
				const e = y(r), t = g.get(e) ?? [];
				t.push(r), g.set(e, t);
			}
			const w = new Map(d.map((e) => [e.id, e])), v = /* @__PURE__ */ new Map();
			for (const h of m) {
				const e = w.get(h.fileId), t = JSON.stringify([
					r(e),
					l(e),
					h.analysisDate
				]);
				v.set(t, [...v.get(t) ?? [], h]);
			}
			const _ = (e, t) => Number(Zr(w.get(e.fileId))) - Number(Zr(w.get(t.fileId))) || e.fileId - t.fileId;
			for (const r of [...v.values()].map((e) => e.sort(_))) {
				const e = r.map((e) => {
					const t = g.get(y(e)) ?? [], n = new Set(t.map((e) => e.sourceKey).filter((e) => e?.trim())), a = e.mappedSourceValues?.find((t) => "filename" === t.targetKey && "present" === t.presence && t.sourceFieldName === e.importMappingProvenance?.effectiveMapping[t.targetKey])?.lexicalValue;
					return {
						entry: e,
						associated: t,
						sourceKeys: n,
						sourceKey: (e.sourceKey?.trim() ? e.sourceKey : void 0) ?? (1 === n.size ? [...n][0] : void 0) ?? a
					};
				}), l = e.find((e) => e.sourceKey?.trim());
				if (!l) {
					o.unrecoverable += e.length;
					continue;
				}
				const { entry: d } = l, p = l.sourceKey, m = ni(p, d.analysisDate, u, d.fileId);
				if (e.some((e) => oi(m, e.entry.fileId))) {
					for (const n of m.status === M.MATCHED ? m.files : []) {
						const r = y({
							fileId: n.id,
							analysisDate: d.analysisDate
						});
						e.some((e) => e.entry.fileId === n.id) || s.has(r) || await t.diaryEntries.get({
							fileId: n.id,
							analysisDate: d.analysisDate
						}) || (s.add(r), a.push({
							entry: d,
							sourceKey: p,
							fileId: n.id
						}));
					}
					continue;
				}
				if (m.status === M.UNMATCHED) {
					o.unrecoverable += e.length;
					continue;
				}
				const f = (t) => {
					o.conflicted += e.length;
					for (const n of e) i.push({
						fileId: n.entry.fileId,
						sourceKey: p,
						analysisDate: d.analysisDate,
						reason: t
					});
				};
				if (new Set(e.map((e) => hi(e.entry))).size > 1) {
					f("twin_content_differs");
					continue;
				}
				const w = [...new Map([p, ...e.flatMap((e) => [...e.sourceKeys])].map((e) => [h(e), e])).values()];
				try {
					for (const t of e) for (const e of t.associated) {
						c(e, t.entry);
						const n = ni(e.sourceKey, d.analysisDate, u, t.entry.fileId);
						if (!e.sourceKey?.trim() || m.status === M.MATCHED && !oi(n, m.file.id)) throw new Error("Diary occurrence destination identity conflicts.");
					}
				} catch {
					f("occurrence_destination_differs");
					continue;
				}
				const v = await t.stagedDiaryEntries.where("[normalizedSourceKey+analysisDate]").anyOf(w.map((e) => [h(e), d.analysisDate])).first(), _ = m.status === M.MATCHED ? await t.diaryEntries.where("[fileId+analysisDate]").equals([m.file.id, d.analysisDate]).first() : void 0, S = m.status === M.MATCHED ? [y({
					fileId: m.file.id,
					analysisDate: d.analysisDate
				})] : w.map((e) => er(h(e), d.analysisDate)), I = m.status === M.MATCHED ? await li(t, m.file, d.analysisDate, {
					existing: d,
					excludeRowIds: new Set(e.map((e) => e.entry.id))
				}) : null;
				if (v || _ || I || S.some((e) => s.has(e))) {
					f(I ? "participant_night_held" : v ? "staged_evidence" : "destination_held");
					continue;
				}
				S.forEach((e) => s.add(e));
				const k = m.status === M.MATCHED ? m.file.id : null;
				n.push({
					entry: d,
					associated: l.associated,
					sourceKey: p,
					stagedKeys: w,
					destination: k
				});
				for (const t of e) t !== l && n.push({
					entry: t.entry,
					associated: t.associated,
					sourceKey: p,
					stagedKeys: [],
					destination: k,
					twin: !0
				});
				for (const n of m.status === M.MATCHED ? m.files.slice(1) : []) {
					const e = y({
						fileId: n.id,
						analysisDate: d.analysisDate
					});
					s.has(e) || await t.diaryEntries.get({
						fileId: n.id,
						analysisDate: d.analysisDate
					}) || (s.add(e), a.push({
						entry: d,
						sourceKey: p,
						fileId: n.id
					}));
				}
			}
			return {
				changes: n,
				mirrors: a,
				rejected: i,
				summary: o
			};
		}(e, t), s = n.summary, o = new nr("move");
		for (const e of n.rejected) o.reject(e);
		return 0 === n.changes.length && 0 === n.mirrors.length ? {
			...s,
			receipt: o.build()
		} : it([...i, t.auditLog], async () => {
			for (const { entry: a, associated: r, sourceKey: i, stagedKeys: l, destination: c, twin: d } of n.changes) {
				const { id: e, fileId: n, targetChosenByUser: u, sourceKey: p, ...m } = a, f = c;
				if (d);
				else if (null === f) {
					for (const e of l) {
						const n = h(e), r = {
							...m,
							sourceKey: e,
							normalizedSourceKey: n,
							attachedFileId: null,
							attachedAt: null
						};
						await t.stagedDiaryEntries.add(r), o.row("stagedDiaryEntries", "added", {
							fileId: null,
							sourceKey: e,
							analysisDate: a.analysisDate
						}), await ot({
							op: "staged_diary_put",
							payload: {
								sourceKey: e,
								normalizedSourceKey: n,
								analysisDate: a.analysisDate,
								entry: r,
								replaced: !1
							}
						});
					}
					s.restaged++;
				} else {
					const e = {
						...m,
						sourceKey: i,
						fileId: f
					};
					await Jr(t, e, void 0), o.row("diaryEntries", "added", {
						fileId: f,
						sourceKey: i,
						analysisDate: a.analysisDate
					}), await ot({
						op: "diary_put",
						fileId: f,
						payload: {
							analysisDate: a.analysisDate,
							entry: e,
							replaced: !1
						}
					}), s.moved++;
				}
				for (const a of r) {
					const e = {
						...a,
						fileId: f
					};
					await t.diaryOccurrences.put(e), o.row("diaryOccurrences", "replaced", {
						fileId: f,
						sourceKey: a.sourceKey,
						analysisDate: a.analysisDate
					}), await ot({
						op: "diary_occurrence_put",
						...null === f ? {} : { fileId: f },
						payload: {
							disposition: null === f ? "staged_unbind" : "staged_attach",
							record: e
						}
					});
				}
				await Yr(t, e, n), o.row("diaryEntries", "deleted", {
					fileId: n,
					sourceKey: i,
					analysisDate: a.analysisDate
				}), await ot({
					op: "diary_delete",
					fileId: n,
					payload: { analysisDate: a.analysisDate }
				});
			}
			for (const { entry: a, sourceKey: r, fileId: i } of n.mirrors) {
				const { id: e, fileId: n, targetChosenByUser: l, sourceKey: c, ...d } = a, u = {
					...d,
					sourceKey: r,
					fileId: i
				};
				await Jr(t, u, void 0), o.row("diaryEntries", "added", {
					fileId: i,
					sourceKey: r,
					analysisDate: a.analysisDate
				}), await ot({
					op: "diary_put",
					fileId: i,
					payload: {
						analysisDate: a.analysisDate,
						entry: u,
						replaced: !1
					}
				}), s.mirrored++;
			}
			const e = o.build();
			return await or(e, a), {
				...s,
				receipt: e
			};
		}, t);
	}) : {
		restaged: 0,
		moved: 0,
		mirrored: 0,
		conflicted: 0,
		unrecoverable: 0,
		deferred: !0,
		receipt: new nr("move").build()
	};
}
var yi = o({
	FILE_INGEST_FILENAME_CONFLICT_MESSAGE: () => wi,
	FILE_INGEST_IN_PROGRESS_MESSAGE: () => vi,
	FILE_INGEST_LEASE_MS: () => gi,
	FILE_INGEST_OWNERSHIP_LOST_MESSAGE: () => _i,
	FileIngestFilenameConflictError: () => Si,
	FileIngestInProgressError: () => ki,
	FileIngestOwnershipLostError: () => bi,
	FileIngestRecordingRevisedError: () => Ii,
	GgirImportRefusalsStorageError: () => vs,
	activityDaySaveFacts: () => Yi,
	attachStagedDiaryEntry: () => mi,
	beginFileIngest: () => Fi,
	bumpExportInputRevision: () => as,
	bumpSeriesRevision: () => ns,
	clearGgirImportRefusals: () => Ss,
	countMarkersInRows: () => Ni,
	deleteFileCaches: () => zi,
	deleteFileCascadeInCurrentTransaction: () => Ti,
	finalizeFileIngest: () => Ri,
	findFileByContentHash: () => qi,
	findFileByPrefixHash: () => Gi,
	getActivityDay: () => rs,
	getActiwareFileData: () => Vi,
	getAllActivityDaysForFile: () => ws,
	getAllAuditLogEntries: () => Cs,
	getAllMarkersByAlgorithmForFile: () => ys,
	getAllMarkersForFile: () => us,
	getAuditLogEntries: () => Os,
	getAvailableDates: () => ls,
	getConfirmedNonwearPeriodsForFile: () => hs,
	getDailyGgirSummary: () => Hs,
	getDeviceOffNonwearPeriodsForFile: () => fs,
	getDirtyDiaryParticipants: () => ci,
	getFileByFilename: () => Ki,
	getFileById: () => Ui,
	getFileMarkerRows: () => ms,
	getFileScorerVerdicts: () => ss,
	getFilesByIds: () => Bi,
	getGgirImportRefusals: () => _s,
	getLocalFiles: () => ji,
	getLocalStudySettings: () => ks,
	getMarkerProvenance: () => ds,
	getSensorNonwearForFile: () => Es,
	getSensorNonwearInWindow: () => As,
	getStagedDiaryEntries: () => di,
	getWorkspaceScopedAuditEntries: () => Fs,
	isWorkspaceScopedAuditEntryForView: () => Ts,
	listDailyGgirSummaries: () => Rs,
	mergeFileCircadianSignalDates: () => Zi,
	mergeLocalStudySettingsExtraSettings: () => Ds,
	mergeScoredVariantResults: () => os,
	nextNightDate: () => Qi,
	nightHasActivity: () => $i,
	nonDiaryTable: () => Ei,
	patchActivityDayNonwearMasks: () => es,
	preferredMarkerRecord: () => cs,
	putDailyGgirSummary: () => Ls,
	reconcileDiaryBindings: () => fi,
	recordAlgorithmRun: () => Ns,
	recordAlgorithmRunsBatch: () => xs,
	recordGgirImportRefusals: () => Is,
	renewFileIngestLease: () => Ci,
	rollbackFileIngest: () => Hi,
	saveActivityDay: () => Ji,
	saveActivityDays: () => Xi,
	saveSensorNonwearByDate: () => Ms,
	storeActivityDayNonwearBands: () => ts,
	totalCascadeRows: () => Oi,
	withActivityDayMemo: () => gs
});
const gi = 12e4, wi = "A completed import already uses this filename for different content. Rename the selected file and try again, or delete the completed import in Data Settings first.", vi = "This file is already being imported in another tab. Wait for that import to finish, then try again.", _i = "This import no longer owns its incomplete local record. Retry the import.";
var Si = class extends Error {
	category = Z;
	constructor() {
		super(wi), this.name = "FileIngestFilenameConflictError";
	}
}, Ii = class extends Error {
	category = Z;
	constructor() {
		super(ne), this.name = "FileIngestRecordingRevisedError";
	}
}, ki = class extends Error {
	category = ae;
	constructor() {
		super(vi), this.name = "FileIngestInProgressError";
	}
}, bi = class extends Error {
	category = ae;
	constructor() {
		super(_i), this.name = "FileIngestOwnershipLostError";
	}
};
const Di = Object.keys(Hr), Mi = /* @__PURE__ */ new Set([
	"diaryEntries",
	"diaryOccurrences",
	"stagedDiaryEntries"
]);
function Ei(e, t) {
	if (Mi.has(t)) throw new Error(`The diary store ${t} is written only by db/diary.`);
	return e[t];
}
const Ai = Di.filter((e) => !Mi.has(e));
function Pi(e) {
	return [e.files, ...Di.map((t) => e[t])];
}
function Ni(e) {
	return e.reduce((e, t) => e + (t.sleepMarkers?.length ?? 0) + (t.nonwearMarkers?.length ?? 0), 0);
}
async function xi(e, t, n = !1) {
	qa(t, e);
	const a = await async function(e, t) {
		const n = new nr("file_cascade"), a = await e.diaryEntries.where("fileId").equals(t).toArray(), r = await e.diaryOccurrences.where("fileId").equals(t).toArray(), i = await e.stagedDiaryEntries.where("attachedFileId").equals(t).toArray();
		await e.diaryEntries.bulkDelete(a.map((e) => e.id)), await e.diaryOccurrences.bulkDelete(r.map((e) => e.recordSha256)), await e.stagedDiaryEntries.bulkDelete(i.map((e) => e.id));
		for (const s of a) n.row("diaryEntries", "deleted", {
			fileId: t,
			sourceKey: s.sourceKey ?? null,
			analysisDate: s.analysisDate,
			rowId: s.id
		});
		for (const s of r) n.row("diaryOccurrences", "deleted", {
			fileId: t,
			sourceKey: s.sourceKey,
			analysisDate: s.analysisDate
		});
		for (const s of i) n.row("stagedDiaryEntries", "deleted", {
			fileId: t,
			sourceKey: s.sourceKey,
			analysisDate: s.analysisDate,
			rowId: s.id
		});
		return {
			counts: {
				diaryEntries: a.length,
				diaryOccurrences: r.length,
				stagedDiaryEntries: i.length
			},
			receipt: n.build()
		};
	}(e, t), r = await Promise.all(Ai.filter((e) => !n || "walLog" !== e).map(async (n) => {
		const a = Ei(e, n).where(Hr[n]).equals(t);
		if ("walLog" === n) return [n, await a.filter((e) => "audit_append" !== e.op).delete()];
		if ("markers" !== n) return [n, await a.delete()];
		const r = Ni(await e.markers.where("fileId").equals(t).toArray());
		return await a.delete(), [n, r];
	})), i = {
		...Object.fromEntries(r),
		...a.counts,
		files: 0
	};
	return i.ggirResultsBundles > 0 && await e.files.update(t, { ggirBundleRevision: crypto.randomUUID() }), i;
}
function Oi(e) {
	return Object.values(e).reduce((e, t) => e + t, 0);
}
async function Ti(e, t) {
	return {
		...await xi(e, t),
		files: await e.files.where(":id").equals(t).delete()
	};
}
async function Fi(e, t, n = oe(), a = Date.now()) {
	(function(e, t) {
		if (0 === e.length || 0 === t.length) throw new Error("Local ingest identity is invalid.");
	})(e.sourceContentHash, t), async function() {
		if (Mr) {
			if (await Ar()) return !0;
			Mr = !1, Er = !1;
		}
		if (Er) return await Ar();
		const e = navigator.storage;
		if (!e?.persist) return Er = !0, !1;
		try {
			const t = await e.persist();
			return Er = !0, Mr = !!t, !!t;
		} catch {
			return !1;
		}
	}().catch(() => {});
	const r = n;
	return it([...Pi(r), r.studySettings], async () => {
		const n = await r.files.where("sourceContentHash").equals(e.sourceContentHash).toArray(), i = n.find(w);
		if (null != i?.id) return await Ss(i, r), {
			kind: "already_complete",
			record: i
		};
		const s = e.aw5RecordingKey ? await r.files.where("aw5RecordingKey").equals(e.aw5RecordingKey).toArray() : [];
		if (s.some(w)) throw new Ii();
		const o = await r.files.where("filename").equals(e.filename).first();
		if (o && w(o)) throw new Si();
		const l = /* @__PURE__ */ new Map();
		for (const e of [
			...n,
			...s,
			...o ? [o] : []
		]) null != e.id && "incomplete" === e.ingestState && l.set(e.id, e);
		const c = [...l.values()].find((e) => e.ingestAttemptId === t);
		if (null != c?.id) return await r.files.update(c.id, { ingestLeaseExpiresAt: a + gi }), {
			kind: "started",
			guard: {
				fileId: c.id,
				attemptId: t
			},
			recovered: !1
		};
		if ([...l.values()].find((e) => (e.ingestLeaseExpiresAt ?? 0) > a)) throw new ki();
		for (const e of l.values()) null != e.id && (await ot({
			op: "file_delete",
			fileId: e.id,
			payload: { kind: "incomplete_ingest_recovery" }
		}), await Ti(r, e.id));
		const d = await r.files.add({
			...e,
			ingestState: "incomplete",
			ingestAttemptId: t,
			ingestLeaseExpiresAt: a + gi
		});
		return await ot({
			op: "file_put",
			fileId: d,
			payload: { kind: "incomplete_ingest_begin" }
		}), {
			kind: "started",
			guard: {
				fileId: d,
				attemptId: t
			},
			recovered: l.size > 0
		};
	}, r);
}
async function Ci(e, t = oe(), n = Date.now()) {
	const a = t;
	await a.transaction("rw", a.files, async () => {
		const t = await a.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new bi();
		await a.files.update(e.fileId, { ingestLeaseExpiresAt: n + gi });
	});
}
async function Ri(e, t = oe(), n) {
	const a = t;
	return it([a.files, a.studySettings], async () => {
		const t = await a.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new bi();
		const r = e.fileId;
		return await a.files.where(":id").equals(r).modify((e) => {
			e.ingestState = "complete", delete e.ingestAttemptId, delete e.ingestLeaseExpiresAt;
		}), await ot({
			op: "file_put",
			fileId: r,
			payload: { kind: "incomplete_ingest_finalize" }
		}), await Ss(t, a), await je([r], a, n), r;
	}, a, n);
}
async function Hi(e, t = oe()) {
	const n = t;
	return it(Pi(n), async () => {
		const t = await n.files.get(e.fileId);
		return t ? "incomplete" === t.ingestState && t.ingestAttemptId === e.attemptId && (await ot({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_rollback" }
		}), await Ti(n, e.fileId), !0) : Oi(await xi(n, e.fileId)) > 0 && (await ot({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_orphan_cleanup" }
		}), !0);
	}, n);
}
async function Li(e, t) {
	const n = [], a = await Cr(e.timestamps, null, t) ?? (e.timestamps.byteLength > 0 ? e.epochResolutions?.find((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId)?.epochLengthSeconds : null) ?? null;
	if (null !== a && new Float64Array(e.timestamps).length > 0 && n.push({
		resolutionId: `counts_${a}s`,
		epochLengthSeconds: a,
		category: "count_sleep_wake",
		sourceType: 60 === a ? "epochs_60s" : "actigraph_epoched_csv",
		derivedFromResolutionId: null,
		aggregationMethod: null,
		backingFields: "counts"
	}), null !== a && a > 0 && 60 !== a && 60 % a == 0) {
		const r = [
			{
				name: "axis_x",
				counts: e.axisX ? Array.from(new Float64Array(e.axisX)) : []
			},
			{
				name: "axis_y",
				counts: e.axisY ? Array.from(new Float64Array(e.axisY)) : []
			},
			{
				name: "axis_z",
				counts: e.axisZ ? Array.from(new Float64Array(e.axisZ)) : []
			},
			{
				name: "vector_magnitude",
				counts: e.vectorMagnitude ? Array.from(new Float64Array(e.vectorMagnitude)) : []
			}
		].filter(({ counts: e }) => e.length > 0), i = {
			timestamps_ms: Array.from(new Float64Array(e.timestamps), (e) => 1e3 * e),
			epoch_seconds: a,
			channels: r,
			light: [],
			light_channels: [],
			temperature: e.temperature ? Array.from(new Float64Array(e.temperature)) : [],
			off_wear: e.nonwearResults ? Array.from(new Uint8Array(e.nonwearResults), Boolean) : [],
			device: "browser",
			primary: "vector_magnitude"
		}, s = e.eventMarkers ? Array.from(new Uint8Array(e.eventMarkers), Boolean) : [], o = {}, l = await t.aggregateEpochSeries({
			target_seconds: 60,
			series: i,
			event_markers: s,
			sleep_scores: []
		}), c = i.timestamps_ms.length, d = l.series.timestamps_ms.length, u = {
			...i,
			channels: [],
			temperature: [],
			off_wear: []
		};
		for (const [n, a] of na(e)) {
			const e = Array.from(new Uint8Array(a));
			e.length !== d || d === c ? o[n] = (await t.aggregateEpochSeries({
				target_seconds: 60,
				series: u,
				event_markers: [],
				sleep_scores: e
			})).sleep_scores : o[n] = e;
		}
		const p = (e) => l.series.channels.find((t) => t.name === e)?.counts ?? [];
		n.push({
			resolutionId: "counts_60s",
			epochLengthSeconds: 60,
			category: "count_sleep_wake",
			sourceType: "epochs_60s",
			derivedFromResolutionId: `counts_${String(a)}s`,
			aggregationMethod: "sum_counts",
			backingFields: "counts",
			derivedData: {
				data: {
					timestamps: l.series.timestamps_ms.map((e) => e / 1e3),
					axisX: p("axis_x"),
					axisY: p("axis_y"),
					axisZ: p("axis_z"),
					vectorMagnitude: p("vector_magnitude"),
					temperature: l.series.temperature,
					eventMarkers: l.event_markers.map(Number),
					lux: [],
					melanopicLux: [],
					ggirTimestamps: [],
					ggirEnmo: [],
					ggirAnglez: [],
					ggirSib: []
				},
				algorithmResults: o,
				nonwearResults: e.nonwearResults ? l.series.off_wear.map(Number) : null
			}
		});
	}
	return e.ggirTimestamps && new Float64Array(e.ggirTimestamps).length > 0 && n.push({
		resolutionId: "ggir_5s",
		epochLengthSeconds: 5,
		category: "ggir_sleep_period",
		sourceType: "epochs_5s_ggir",
		derivedFromResolutionId: null,
		aggregationMethod: "ggir_epoch_metrics",
		backingFields: "ggir"
	}), e.lstmTimestamps30s && new Float64Array(e.lstmTimestamps30s).length > 0 && n.push({
		resolutionId: "lstm_30s",
		epochLengthSeconds: 30,
		category: "lstm_sleep_wake",
		sourceType: null,
		derivedFromResolutionId: null,
		aggregationMethod: "model_window",
		backingFields: "lstm"
	}), n;
}
async function ji(e = oe(), t) {
	let n = await (t?.participantKeys ? e.files.where(D).anyOf([...new Set(t.participantKeys.flatMap((e) => [h(e), ...i({ filename: e })]))]).distinct().filter((e) => "local" === e.source) : t?.onlyFileIds ? e.files.where(":id").anyOf([...t.onlyFileIds]).filter((e) => "local" === e.source) : e.files.where("source").equals("local")).toArray();
	if (t?.participantKeys) {
		const a = [...new Set(n.map(r).filter((e) => !t.participantKeys.includes(e)))];
		a.length && (n = [...n.filter((e) => !a.includes(r(e))), ...await e.files.where(O).anyOf(a).filter((e) => "local" === e.source).toArray()]);
	}
	return (!0 === t?.includeIncomplete ? n : n.filter(w)).map((e) => {
		const t = e.participantId ?? d(e.filename) ?? void 0;
		return {
			...e,
			availableDates: [...new Set(e.availableDates)],
			...void 0 === t ? {} : { participantId: t }
		};
	});
}
async function Ki(e, t = oe()) {
	return t.files.where("filename").equals(e).first();
}
async function qi(e, t = oe()) {
	if (e) return (await t.files.where("sourceContentHash").equals(e).toArray()).find(w);
}
async function Gi(e, t = oe(), n) {
	if (e) return (await t.files.where("fileHash").equals(e).toArray()).find((e) => w(e) && (void 0 === n || e.sourceContentHash === n));
}
async function Ui(e, t = oe()) {
	return t.files.get(e);
}
async function Vi(e, t = oe()) {
	return t.actiwareFileData.get(e);
}
async function Bi(e, t = oe()) {
	return t.files.bulkGet(e);
}
async function zi(e) {
	const t = new Set(e.flatMap((e) => [e.sourceContentHash, e.fileHash]).filter((e) => "string" == typeof e && e.length > 0));
	(await Promise.allSettled([...t].flatMap((e) => [cr(e), _r(e)]))).some((e) => "rejected" === e.status) && console.warn("[db] One or more local cache entries could not be deleted.");
}
async function Wi(e, t, n = j()) {
	const a = await n.shiftDate(e, t);
	if (void 0 === a) throw new RangeError(`Not a calendar date: ${e}`);
	return a;
}
async function $i(e, t, n, a = oe()) {
	return (await Promise.all([t, n].map((t) => a.activityDays.where("[fileId+date]").equals([e, t]).count()))).some((e) => e > 0);
}
async function Qi(e, t = j()) {
	const n = Wi(e, 1, t);
	return E.currentTransaction ? E.waitFor(n) : n;
}
async function Ji(e, t = oe(), n) {
	const [a] = await Xi([e], t, void 0, n);
	return a;
}
async function Yi(e, t = j()) {
	let n = e.epochResolutions;
	if (n) {
		if (void 0 !== e.algorithmResults && n.some((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId && 60 !== e.epochLengthSeconds && 60 % e.epochLengthSeconds == 0)) {
			const a = await Li(e, t);
			n = [...n.filter((e) => !e.derivedData), ...a.filter((e) => e.derivedData)];
		}
	} else n = await Li(e, t);
	return {
		epochResolutions: n,
		previousDate: await Wi(e.date, -1, t)
	};
}
async function Xi(e, t = oe(), n, a) {
	const r = t, i = new Set(e.map((e) => e.fileId));
	for (const d of i) qa(d, r);
	const s = ge(a), o = n ?? await Promise.all(e.map((e) => Yi(e, s))), l = await Promise.all(e.map(async (e, t) => {
		const { displayNonwear: n, ...a } = e;
		let r = o[t].epochResolutions;
		if (r.some((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId && 60 !== e.epochLengthSeconds && 60 % e.epochLengthSeconds == 0) && !function(e, t) {
			const n = t.find((e) => "counts_60s" === e.resolutionId)?.derivedData, a = n?.data.timestamps.length ?? 0;
			return !(!n || 0 === a) && [
				"axisX",
				"axisY",
				"axisZ",
				"vectorMagnitude",
				"temperature",
				"eventMarkers"
			].every((t) => !e[t]?.byteLength || n.data[t].length === a) && na(e).every(([e, t]) => {
				if (!t.byteLength) return !0;
				const r = Wn([{ algorithmResults: n.algorithmResults }], { recordedCellId: e });
				return "ok" === r.status && r.outputs[0]?.length === a;
			}) && (!e.nonwearResults?.byteLength || n.nonwearResults?.length === a);
		}(e, r)) {
			const t = await Li(e, s);
			r = [...r.filter((e) => "counts_60s" !== e.resolutionId), ...t.filter((e) => e.derivedData)];
		}
		return {
			activityDay: {
				...a,
				epochResolutions: r
			},
			previousDate: o[t].previousDate
		};
	})), c = await ve(r, [
		r.activityDays,
		r.scoredVariantMasks,
		r.files
	], async () => {
		await ns(r, [...i]);
		const e = [];
		for (const { activityDay: t, previousDate: n } of l) await r.scoredVariantMasks.bulkDelete([[t.fileId, t.date], [t.fileId, n]]), await r.activityDays.where("[fileId+date]").equals([t.fileId, t.date]).delete(), e.push(await r.activityDays.add(t));
		return e;
	}, a);
	for (const d of i) qa(d, r);
	return c;
}
async function Zi(e, t, n, a = oe(), r) {
	await we(a, [a.files], () => a.files.where(":id").equals(e).modify((e) => {
		const a = new Set(e.circadianSignalDates ?? []);
		for (const n of t) a.delete(n);
		for (const t of n) a.add(t);
		e.circadianSignalDates = [...a].sort();
	}), r);
}
async function es(e, t, n, a = oe(), r) {
	const i = a;
	await ve(i, [
		i.activityDays,
		i.physicalActivityFileSummaries,
		i.files
	], async () => {
		await i.activityDays.where("[fileId+date]").equals([e, t]).modify((e) => {
			Object.assign(e, n), delete e.displayNonwear;
		}), await i.physicalActivityFileSummaries.where("fileId").equals(e).delete(), await as(i, [e]), await i.files.where(":id").equals(e).modify((e) => {
			e.nonwearBandGeneration = (e.nonwearBandGeneration ?? 0) + 1, e.navigationFacts && delete e.navigationFacts.bands;
		});
	}, r);
}
async function ts(e, t, n, a, r = oe(), i) {
	const s = r;
	await s.transaction("rw", s.files, s.activityDays, async () => {
		const r = await s.files.get(e);
		r && (r.seriesRevision ?? 0) === a.seriesRevision && (r.nonwearBandGeneration ?? 0) === a.nonwearBandGeneration && (i?.throwIfAborted(), await s.activityDays.where("[fileId+date]").equals([e, t]).modify({ displayNonwear: n }));
	});
}
async function ns(e, t) {
	await e.files.where(":id").anyOf(t).modify((e) => {
		e.seriesRevision = (e.seriesRevision ?? 0) + 1;
	});
}
async function as(e, t) {
	await e.files.where(":id").anyOf(t).modify((e) => {
		e.exportInputRevision = (e.exportInputRevision ?? 0) + 1;
	});
}
async function rs(e, t, n = oe(), a) {
	return a ? (await ws(e, n, a)).get(t) : n.activityDays.where("[fileId+date]").equals([e, t]).first();
}
const is = /* @__PURE__ */ new WeakMap();
function ss(e, t = oe(), n) {
	const a = t;
	return (n ? Promise.resolve(n.file) : a.files.get(e)).then((t) => {
		const n = t?.seriesRevision ?? 0;
		let r = is.get(a);
		r || is.set(a, r = /* @__PURE__ */ new Map());
		const i = r.get(e);
		if (i?.revision === n) return i.verdicts;
		const s = [], o = v(a.activityDays.where("fileId").equals(e), (e) => {
			s.push($n(e));
		}).then(() => ea(s)), l = {
			revision: n,
			verdicts: o
		};
		return r.set(e, l), o.catch(() => {
			r.get(e) === l && r.delete(e);
		}), o;
	});
}
async function os(e, t, n, a, r = oe(), i, s) {
	const o = r, l = await $(Qi(t, i), s);
	return s?.throwIfAborted(), !!await $i(e, t, l, o) && we(o, [o.scoredVariantMasks], async () => {
		const r = await o.scoredVariantMasks.get([e, t]), i = void 0 !== a && null != r && r.diaryFingerprint !== a && (null != r.diaryFingerprint || a.startsWith("guider-v2:") || a.startsWith("warm-v3:"));
		return !(i || 0 !== Object.keys(n).length || void 0 !== a && null == r?.diaryFingerprint) || (await o.scoredVariantMasks.put({
			fileId: e,
			date: t,
			masks: i ? { ...n } : {
				...r?.masks,
				...n
			},
			...void 0 !== r?.diaryFingerprint ? { diaryFingerprint: r.diaryFingerprint } : {},
			...void 0 !== a ? { diaryFingerprint: a } : {}
		}), !0);
	}, s);
}
async function ls(e, t = oe()) {
	return (await t.activityDays.where("[fileId+date]").between([e, ""], [e, "￿"], !0, !0).keys()).map((e) => e[1]);
}
function cs(e, t = !1) {
	const n = t ? e?.filter(b) : void 0;
	let a;
	for (const r of n?.length ? n : e ?? []) a = Ir(a, r);
	return a;
}
async function ds(e, t = oe()) {
	return t.markerProvenance.bulkGet([...e]);
}
async function us(e, t, n = oe(), a = !1) {
	return kr(await ps(e, t, n), t, a);
}
async function ps(e, t, n) {
	const a = n.markers.where("[fileId+date+username]"), r = await a.between([e, E.minKey], [e, E.maxKey]).uniqueKeys();
	return (await a.anyOf(r.filter((e) => e[2] === t)).toArray()).map(be);
}
async function ms(e, t = oe()) {
	return (await t.markers.where("fileId").equals(e).toArray()).map(be);
}
async function hs(e, t = oe()) {
	return Dr(await ms(e, t));
}
async function fs(e, t = oe(), n) {
	const [a, r] = await Promise.all([Es(e, t), n ? Dr(n) : hs(e, t)]);
	return [...a.map((e) => ({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	})), ...r];
}
async function ys(e, t, n = oe()) {
	return function(e, t) {
		const n = /* @__PURE__ */ new Map();
		for (const a of e) {
			if (a.username !== t) continue;
			const e = n.get(a.date);
			e ? e.push(a) : n.set(a.date, [a]);
		}
		return n;
	}(await ps(e, t, n), t);
}
function gs(e) {
	return e({});
}
function ws(e, t = oe(), n) {
	return t.transaction("r", n ? [t.files, t.activityDays] : [t.activityDays], async () => {
		const a = n ? await t.files.get(e) : void 0, r = a ? a.seriesRevision ?? 0 : null;
		if (n?.days && n.db === t && n.fileId === e && n.revision === r) return n.days;
		const i = await t.activityDays.where("fileId").equals(e).primaryKeys(), s = await t.activityDays.bulkGet(i), o = /* @__PURE__ */ new Map();
		for (const e of s) e && o.set(e.date, e);
		return n && Object.assign(n, {
			db: t,
			fileId: e,
			revision: r,
			days: o
		}), o;
	});
}
var vs = class extends Error {
	category = se;
	constructor() {
		super("Stored GGIR import refusals could not be read; the existing records were kept."), this.name = "GgirImportRefusalsStorageError";
	}
};
function _s(e) {
	if (!e || "object" != typeof e || !("ggirImportRefusals" in e)) return [];
	const t = e[X];
	if (Array.isArray(t)) {
		const e = t.filter((e) => null != e && "object" == typeof e && "filename" in e && "string" == typeof e.filename && "reason" in e && "string" == typeof e.reason && "category" in e && K.includes(e.category));
		if (e.length === t.length) return [...new Map(e.map((e) => {
			const t = "ggir-folder" === e.category ? {
				...e,
				filename: ee
			} : e;
			return [JSON.stringify([t.filename, t.category]), t];
		})).values()];
	}
	throw new vs();
}
function Ss(e, t) {
	return Is([], t, "string" == typeof e ? [e] : [e.filename, ...Ve(e) ? [ee] : []]);
}
async function Is(e, t = oe(), n) {
	(e.length || void 0 !== n) && await bs({
		sleepDetectionRule: g.sleep_detection_rule,
		nightStartHour: g.night_start_hour,
		nightEndHour: g.night_end_hour,
		defaultAlgorithm: g.default_algorithm,
		extraSettings: {}
	}, t, {
		coreSettings: "existing",
		extraSettings: "merge",
		refusals: e,
		...void 0 === n ? {} : { importedFilenames: n }
	});
}
async function ks(e = oe()) {
	return e.studySettings.where("key").equals("study").first();
}
async function bs(e, t, n) {
	await it([t.studySettings], async () => {
		const a = await t.studySettings.where("key").equals("study").first();
		if (void 0 !== n.importedFilenames && !_s(a).some((e) => n.importedFilenames?.includes(e.filename))) return;
		const r = "existing" === n.coreSettings && a ? {
			sleepDetectionRule: a.sleepDetectionRule,
			nightStartHour: a.nightStartHour,
			nightEndHour: a.nightEndHour,
			defaultAlgorithm: a.defaultAlgorithm,
			...void 0 === a.sleepPeriodDetection ? {} : { sleepPeriodDetection: a.sleepPeriodDetection }
		} : e, { [S]: i, ...s } = a?.extraSettings ?? {}, o = {
			...r,
			sleepDetectionRule: (l = r.sleepDetectionRule, Object.values(A).includes(l) ? l : g.sleep_detection_rule),
			extraSettings: "merge" === n.extraSettings ? {
				...s,
				...e.extraSettings
			} : e.extraSettings
		};
		var l;
		const c = await E.waitFor(pe(JSON.stringify(o))), d = {
			key: "study",
			...o,
			...n.refusals ? { [X]: _s({ [X]: [..._s(a), ...n.refusals] }).filter((e) => !n.importedFilenames?.includes(e.filename)) } : {},
			contentHash: c,
			lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		await ot({
			op: "settings_put",
			payload: {
				settings: o,
				contentHash: c,
				prevContentHash: a?.contentHash,
				...n.refusals ? { [X]: _s(d) } : {},
				lastModifiedAt: d.lastModifiedAt
			}
		}), await async function(e, t, n) {
			t?.id ? await e.studySettings.update(t.id, n) : await e.studySettings.add(n);
		}(t, a, d);
	}, t);
}
async function Ds(e, t = oe()) {
	await bs(e, t, {
		coreSettings: "existing",
		extraSettings: "merge"
	});
}
async function Ms(e, t, n = oe(), a) {
	if (!t.size) return;
	const r = [...t];
	await it([n.sensorNonwear], async () => {
		await st(r.map(([t, n]) => ({
			op: "sensor_nonwear_put",
			fileId: e,
			payload: {
				analysisDate: t,
				periods: n
			}
		}))), await async function(e, t, n) {
			await e.sensorNonwear.where("[fileId+analysisDate]").anyOf(n.map(([e]) => [t, e])).delete(), await e.sensorNonwear.bulkAdd(n.flatMap(([e, n]) => n.map((n, a) => ({
				...n,
				fileId: t,
				analysisDate: e,
				periodIndex: a
			}))));
		}(n, e, r);
	}, n, a);
}
async function Es(e, t = oe()) {
	return t.sensorNonwear.where("fileId").equals(e).toArray();
}
async function As(e, t, n, a = oe()) {
	return (await Es(e, a)).filter((e) => e.startTimestamp <= n && e.endTimestamp >= t).sort((e, t) => e.startTimestamp - t.startTimestamp);
}
function Ps(e) {
	const t = {
		fileId: e.fileId,
		date: e.date,
		appVersion: e.appVersion,
		results: e.results,
		...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {}
	}, n = Vn(e);
	if (null !== n) return {
		...t,
		...n
	};
	throw new Error(`Refused an algorithm run for ${String(e.algoKey ?? e.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
}
async function Ns(e, t = oe(), n) {
	return await async function(e, t, n) {
		const a = t, r = await E.waitFor(me(e.results));
		return it([a.algorithmRuns], async () => {
			const t = await a.algorithmRuns.where("[fileId+date+algoKey+algoVersion+paramsHash]").equals([
				e.fileId,
				e.date,
				e.algoKey,
				e.algoVersion,
				e.paramsHash
			]).first();
			if (t?.id) return await ot({
				op: "algorithm_run_put",
				fileId: e.fileId,
				payload: {
					kind: "dedup_hit",
					existingId: t.id,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					contentHash: r
				}
			}), {
				id: t.id,
				inserted: !1,
				contentHash: r
			};
			const n = {
				fileId: e.fileId,
				date: e.date,
				algoKey: e.algoKey,
				algoVersion: e.algoVersion,
				paramsHash: e.paramsHash,
				appVersion: e.appVersion,
				...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {},
				results: e.results,
				contentHash: r,
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			}, i = await a.algorithmRuns.add(n);
			return await ot({
				op: "algorithm_run_put",
				fileId: e.fileId,
				payload: {
					kind: "insert",
					id: i,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					appVersion: e.appVersion,
					contentHash: r,
					byteLength: e.results.byteLength
				}
			}), {
				id: i,
				inserted: !0,
				contentHash: r
			};
		}, a, n);
	}(Ps(e), t, n);
}
async function xs(e, t, n) {
	return await async function(e, t, n) {
		if (0 === e.length) return [];
		const a = t ?? oe(), r = Promise.all(e.map((e) => me(e.results))), i = await (E.currentTransaction ? E.waitFor(r) : r);
		return it([a.algorithmRuns], async () => {
			const t = (e) => [
				e.fileId,
				e.date,
				e.algoKey,
				e.algoVersion,
				e.paramsHash
			], n = /* @__PURE__ */ new Map(), r = await a.algorithmRuns.where("[fileId+date+algoKey+algoVersion+paramsHash]").anyOf(e.map(t)).toArray();
			for (const e of r) {
				const a = JSON.stringify(t(e));
				null == e.id || n.has(a) || n.set(a, e.id);
			}
			const s = /* @__PURE__ */ new Map(), o = e.map((e, a) => {
				const r = JSON.stringify(t(e)), i = n.get(r);
				if (void 0 !== i) return { existingId: i };
				const o = s.get(r);
				return void 0 !== o ? { sameAs: o } : (s.set(r, a), { insert: !0 });
			}), l = (/* @__PURE__ */ new Date()).toISOString(), c = e.flatMap((e, t) => "insert" in o[t] ? [{
				fileId: e.fileId,
				date: e.date,
				algoKey: e.algoKey,
				algoVersion: e.algoVersion,
				paramsHash: e.paramsHash,
				appVersion: e.appVersion,
				...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {},
				results: e.results,
				contentHash: i[t],
				createdAt: e.createdAt ?? l
			}] : []), d = await a.algorithmRuns.bulkAdd(c, { allKeys: !0 }), u = /* @__PURE__ */ new Map();
			let p = 0;
			o.forEach((e, t) => {
				"insert" in e && u.set(t, d[p++]);
			});
			const m = o.map((e, t) => "insert" in e ? {
				id: u.get(t),
				inserted: !0,
				contentHash: i[t]
			} : {
				id: "existingId" in e ? e.existingId : u.get(e.sameAs),
				inserted: !1,
				contentHash: i[t]
			});
			return await st(e.map((e, t) => ({
				op: "algorithm_run_put",
				fileId: e.fileId,
				payload: m[t].inserted ? {
					kind: "insert",
					id: m[t].id,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					appVersion: e.appVersion,
					contentHash: i[t],
					byteLength: e.results.byteLength
				} : {
					kind: "dedup_hit",
					existingId: m[t].id,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					contentHash: i[t]
				}
			}))), m;
		}, a, n);
	}(e.map(Ps), t, n);
}
async function Os(e, t, n, a = oe()) {
	const r = a.auditLog;
	return n ? r.where("[fileId+analysisDate+username]").equals([
		e,
		t,
		n
	]).sortBy("id") : r.where("[fileId+analysisDate+username]").between([
		e,
		t,
		""
	], [
		e,
		t,
		"￿"
	], !0, !0).sortBy("id");
}
function Ts(e, t, n) {
	return 0 === e.fileId && e.payload?.openFileId === t && e.payload?.openAnalysisDate === n;
}
async function Fs(e, t, n = oe()) {
	return (await n.auditLog.where("[fileId+analysisDate+username]").between([
		0,
		"",
		""
	], [
		0,
		"￿",
		"￿"
	], !0, !0).toArray()).filter((n) => Ts(n, e, t)).sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
}
async function Cs() {
	return oe().auditLog.orderBy("id").toArray();
}
async function Rs(e, t = oe()) {
	return t.dailyGgirSummaries.where("[fileId+analysisDate]").between([e, ""], [e, "￿"]).toArray();
}
async function Hs(e, t) {
	const n = await oe().dailyGgirSummaries.where("[fileId+analysisDate]").equals([e, t]).first();
	return n ? [n] : [];
}
async function Ls(e, t = oe(), n) {
	const a = t, r = a.dailyGgirSummaries, i = Array.isArray(e) ? e : [e];
	0 !== i.length && await ve(a, [r, a.files], () => async function(e, t) {
		const n = e.dailyGgirSummaries, a = /* @__PURE__ */ new Map();
		for (const i of t) a.set(`${i.fileId}::${i.analysisDate}`, i);
		const r = await Promise.all([...a.values()].map(async (e) => {
			const t = await n.where("[fileId+analysisDate]").equals([e.fileId, e.analysisDate]).first();
			return null != t?.id ? {
				...e,
				id: t.id
			} : e;
		}));
		await n.bulkPut(r), await as(e, [...new Set(t.map((e) => e.fileId))]);
	}(a, i), n);
}
function js(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
const Ks = (e) => Symbol.iterator in e, qs = (e) => "entries" in e, Gs = (e, t) => {
	const n = e instanceof Map ? e : new Map(e.entries()), a = t instanceof Map ? t : new Map(t.entries());
	if (n.size !== a.size) return !1;
	for (const [r, i] of n) if (!a.has(r) || !Object.is(i, a.get(r))) return !1;
	return !0;
};
function Us(e) {
	const t = Na.useRef(void 0);
	return (n) => {
		const a = e(n);
		return r = t.current, i = a, Object.is(r, i) || "object" == typeof r && null !== r && "object" == typeof i && null !== i && Object.getPrototypeOf(r) === Object.getPrototypeOf(i) && (Ks(r) && Ks(i) ? qs(r) && qs(i) ? Gs(r, i) : ((e, t) => {
			const n = e[Symbol.iterator](), a = t[Symbol.iterator]();
			let r = n.next(), i = a.next();
			for (; !r.done && !i.done;) {
				if (!Object.is(r.value, i.value)) return !1;
				r = n.next(), i = a.next();
			}
			return !!r.done && !!i.done;
		})(r, i) : Gs({ entries: () => Object.entries(r) }, { entries: () => Object.entries(i) })) ? t.current : t.current = a;
		var r, i;
	};
}
const Vs = [
	"currentFileId",
	"currentFilename",
	"currentDateIndex",
	"displayColumnChosenByUser",
	...L
];
function Bs(e) {
	const t = Y();
	return t ? `sleep-scoring-prefs-${t}-${e}` : `sleep-scoring-user-prefs-${e}`;
}
const zs = {
	setTimeout: (e, t) => setTimeout(e, t),
	clearTimeout: (e) => clearTimeout(e),
	setInterval: (e, t) => setInterval(e, t),
	clearInterval: (e) => clearInterval(e)
}, Ws = new class {
	#e = zs;
	#t = !1;
	setTimeoutProvider(e) {
		this.#e = e;
	}
	setTimeout(e, t) {
		return this.#e.setTimeout(e, t);
	}
	clearTimeout(e) {
		this.#e.clearTimeout(e);
	}
	setInterval(e, t) {
		return this.#e.setInterval(e, t);
	}
	clearInterval(e) {
		this.#e.clearInterval(e);
	}
}(), $s = "undefined" == typeof window || "Deno" in globalThis;
function Qs() {}
function Js(e, t) {
	return "function" == typeof e ? e(t) : e;
}
function Ys(e, t) {
	const { type: n = "all", exact: a, fetchStatus: r, predicate: i, queryKey: s, stale: o } = e;
	if (s) {
		if (a) {
			if (t.queryHash !== Zs(s, t.options)) return !1;
		} else if (!to(t.queryKey, s)) return !1;
	}
	if ("all" !== n) {
		const e = t.isActive();
		if ("active" === n && !e) return !1;
		if ("inactive" === n && e) return !1;
	}
	return !("boolean" == typeof o && t.isStale() !== o || r && r !== t.state.fetchStatus || i && !i(t));
}
function Xs(e, t) {
	const { exact: n, status: a, predicate: r, mutationKey: i } = e;
	if (i) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (eo(t.options.mutationKey) !== eo(i)) return !1;
		} else if (!to(t.options.mutationKey, i)) return !1;
	}
	return !(a && t.state.status !== a || r && !r(t));
}
function Zs(e, t) {
	return (t?.queryKeyHashFn || eo)(e);
}
function eo(e) {
	return JSON.stringify(e, (e, t) => io(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t);
}
function to(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (e && t && "object" == typeof e && "object" == typeof t) {
		if (Array.isArray(e) && Array.isArray(t)) {
			for (let n = 0; n < t.length; n++) if (!to(e[n], t[n])) return !1;
			return !0;
		}
		const n = Object.keys(t);
		for (const a of n) if (!to(e[a], t[a])) return !1;
		return !0;
	}
	return !1;
}
const no = Object.prototype.hasOwnProperty;
function ao(e, t, n = 0) {
	if (e === t) return e;
	if (n > 500) return t;
	const a = ro(e) && ro(t);
	if (!(a || io(e) && io(t))) return t;
	const r = (a ? e : Object.keys(e)).length, i = a ? t : Object.keys(t), s = i.length, o = a ? new Array(s) : {};
	let l = 0;
	for (let c = 0; c < s; c++) {
		const s = a ? c : i[c], d = e[s], u = t[s];
		if (d === u) {
			o[s] = d, (a ? c < r : no.call(e, s)) && l++;
			continue;
		}
		if (null === d || null === u || "object" != typeof d || "object" != typeof u) {
			o[s] = u;
			continue;
		}
		const p = ao(d, u, n + 1);
		o[s] = p, p === d && l++;
	}
	return r === s && l === r ? e : o;
}
function ro(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function io(e) {
	if (!so(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	const n = t.prototype;
	return !!so(n) && !!n.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype;
}
function so(e) {
	return "[object Object]" === Object.prototype.toString.call(e);
}
function oo(e, t, n) {
	return "function" == typeof n.structuralSharing ? n.structuralSharing(e, t) : !1 !== n.structuralSharing ? ao(e, t) : t;
}
function lo(e, t, n = 0) {
	const a = [...e, t];
	return n && a.length > n ? a.slice(1) : a;
}
function co(e, t, n = 0) {
	const a = [t, ...e];
	return n && a.length > n ? a.slice(0, -1) : a;
}
const uo = Symbol();
function po(e, t) {
	return !e.queryFn && t?.initialPromise ? () => t.initialPromise : e.queryFn && e.queryFn !== uo ? e.queryFn : () => Promise.reject(/* @__PURE__ */ new Error(`Missing queryFn: '${e.queryHash}'`));
}
const mo = () => $s;
var ho = class {
	constructor() {
		this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
	}
	subscribe(e) {
		return this.listeners.add(e), this.onSubscribe(), () => {
			this.listeners.delete(e), this.onUnsubscribe();
		};
	}
	hasListeners() {
		return this.listeners.size > 0;
	}
	onSubscribe() {}
	onUnsubscribe() {}
};
const fo = new class extends ho {
	#n;
	#a;
	#r;
	constructor() {
		super(), this.#r = (e) => {
			if ("undefined" != typeof window && window.addEventListener) {
				const t = () => e();
				return window.addEventListener("visibilitychange", t, !1), () => {
					window.removeEventListener("visibilitychange", t);
				};
			}
		};
	}
	onSubscribe() {
		this.#a || this.setEventListener(this.#r);
	}
	onUnsubscribe() {
		this.hasListeners() || (this.#a?.(), this.#a = void 0);
	}
	setEventListener(e) {
		this.#r = e, this.#a?.(), this.#a = e((e) => {
			"boolean" == typeof e ? this.setFocused(e) : this.onFocus();
		});
	}
	setFocused(e) {
		this.#n !== e && (this.#n = e, this.onFocus());
	}
	onFocus() {
		const e = this.isFocused();
		this.listeners.forEach((t) => {
			t(e);
		});
	}
	isFocused() {
		return "boolean" == typeof this.#n ? this.#n : "hidden" !== globalThis.document?.visibilityState;
	}
}(), yo = function(e) {
	setTimeout(e, 0);
}, go = function() {
	let e = [], t = 0, n = (e) => {
		e();
	}, a = (e) => {
		e();
	}, r = yo;
	const i = (a) => {
		t ? e.push(a) : r(() => {
			n(a);
		});
	};
	return {
		batch: (i) => {
			let s;
			t++;
			try {
				s = i();
			} finally {
				t--, t || (() => {
					const t = e;
					e = [], t.length && r(() => {
						a(() => {
							t.forEach((e) => {
								n(e);
							});
						});
					});
				})();
			}
			return s;
		},
		batchCalls: (e) => (...t) => {
			i(() => {
				e(...t);
			});
		},
		schedule: i,
		setNotifyFunction: (e) => {
			n = e;
		},
		setBatchNotifyFunction: (e) => {
			a = e;
		},
		setScheduler: (e) => {
			r = e;
		}
	};
}(), wo = new class extends ho {
	#i = !0;
	#a;
	#r;
	constructor() {
		super(), this.#r = (e) => {
			if ("undefined" != typeof window && window.addEventListener) {
				const t = () => e(!0), n = () => e(!1);
				return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), () => {
					window.removeEventListener("online", t), window.removeEventListener("offline", n);
				};
			}
		};
	}
	onSubscribe() {
		this.#a || this.setEventListener(this.#r);
	}
	onUnsubscribe() {
		this.hasListeners() || (this.#a?.(), this.#a = void 0);
	}
	setEventListener(e) {
		this.#r = e, this.#a?.(), this.#a = e(this.setOnline.bind(this));
	}
	setOnline(e) {
		this.#i !== e && (this.#i = e, this.listeners.forEach((t) => {
			t(e);
		}));
	}
	isOnline() {
		return this.#i;
	}
}();
function vo(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function _o(e) {
	return "online" !== (e ?? "online") || wo.isOnline();
}
var So = class extends Error {
	constructor(e) {
		super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
	}
};
function Io(e) {
	let t, n, a, r = !1, i = 0, s = "pending";
	const o = new Promise((e, t) => {
		n = e, a = t;
	});
	o.catch(Qs);
	const l = () => "pending" !== s, c = () => fo.isFocused() && ("always" === e.networkMode || wo.isOnline()) && e.canRun(), d = () => _o(e.networkMode) && e.canRun(), u = (e) => {
		l() || (t?.(), s = "resolved", n(e));
	}, p = (e) => {
		l() || (t?.(), s = "rejected", a(e));
	}, m = () => new Promise((n) => {
		t = (e) => {
			(l() || c()) && n(e);
		}, e.onPause?.();
	}).then(() => {
		t = void 0, l() || e.onContinue?.();
	}), h = () => {
		if (l()) return;
		let t;
		const n = 0 === i ? e.initialPromise : void 0;
		try {
			t = n ?? e.fn();
		} catch (a) {
			t = Promise.reject(a);
		}
		Promise.resolve(t).then(u).catch((t) => {
			if (l()) return;
			const n = e.retry ?? (mo() ? 0 : 3), a = e.retryDelay ?? vo, s = "function" == typeof a ? a(i, t) : a, o = !0 === n || "number" == typeof n && i < n || "function" == typeof n && n(i, t);
			var d;
			!r && o ? (i++, e.onFail?.(i, t), (d = s, new Promise((e) => {
				Ws.setTimeout(e, d);
			})).then(() => c() ? void 0 : m()).then(() => {
				r ? p(t) : h();
			})) : p(t);
		});
	};
	return {
		promise: o,
		status: () => s,
		cancel: (t) => {
			if (!l()) {
				const n = new So(t);
				p(n), e.onCancel?.(n);
			}
		},
		continue: () => (t?.(), o),
		cancelRetry: () => {
			r = !0;
		},
		continueRetry: () => {
			r = !1;
		},
		canStart: d,
		start: () => (d() ? h() : m().then(h), o)
	};
}
var ko = class {
	#s;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		var e;
		this.clearGcTimeout(), "number" == typeof (e = this.gcTime) && e >= 0 && e !== 1 / 0 && (this.#s = Ws.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime));
	}
	updateGcTime(e) {
		this.gcTime = Math.max(this.gcTime || 0, e ?? (mo() ? 1 / 0 : 3e5));
	}
	clearGcTimeout() {
		void 0 !== this.#s && (Ws.clearTimeout(this.#s), this.#s = void 0);
	}
};
function bo(e) {
	return { onFetch: (t, n) => {
		const a = t.options, r = t.fetchOptions?.meta?.fetchMore?.direction, i = t.state.data?.pages || [], s = t.state.data?.pageParams || [];
		let o = {
			pages: [],
			pageParams: []
		}, l = 0;
		const c = async () => {
			let n = !1;
			const c = (e) => {
				(function(e, n, a) {
					let r, i = !1;
					Object.defineProperty(e, "signal", {
						enumerable: !0,
						get: () => (r ??= t.signal, i || (i = !0, r.aborted ? a() : r.addEventListener("abort", a, { once: !0 })), r)
					});
				})(e, 0, () => n = !0);
			}, d = po(t.options, t.fetchOptions), u = async (e, a, r) => {
				if (n) return Promise.reject(t.signal.reason);
				if (null == a && e.pages.length) return Promise.resolve(e);
				const i = (() => {
					const e = {
						client: t.client,
						queryKey: t.queryKey,
						pageParam: a,
						direction: r ? "backward" : "forward",
						meta: t.options.meta
					};
					return c(e), e;
				})(), s = await d(i), { maxPages: o } = t.options, l = r ? co : lo;
				return {
					pages: l(e.pages, s, o),
					pageParams: l(e.pageParams, a, o)
				};
			};
			if (r && i.length) {
				const e = "backward" === r, t = e ? Mo : Do, n = {
					pages: i,
					pageParams: s
				};
				o = await u(n, t(a, n), e);
			} else {
				const t = e ?? i.length;
				do {
					const e = 0 === l ? s[0] ?? a.initialPageParam : Do(a, o);
					if (l > 0 && null == e) break;
					o = await u(o, e), l++;
				} while (l < t);
			}
			return o;
		};
		t.options.persister ? t.fetchFn = () => t.options.persister?.(c, {
			client: t.client,
			queryKey: t.queryKey,
			meta: t.options.meta,
			signal: t.signal
		}, n) : t.fetchFn = c;
	} };
}
function Do(e, { pages: t, pageParams: n }) {
	const a = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[a], t, n[a], n) : void 0;
}
function Mo(e, { pages: t, pageParams: n }) {
	return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var Eo = class extends ko {
	#o;
	#l;
	#c;
	#d;
	#u;
	#p;
	#m;
	#h;
	constructor(e) {
		super(), this.#h = !1, this.#m = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#u = e.client, this.#d = this.#u.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#l = Po(this.options), this.state = e.state ?? this.#l, this.scheduleGc();
	}
	get meta() {
		return this.options.meta;
	}
	get queryType() {
		return this.#o;
	}
	get promise() {
		return this.#p?.promise;
	}
	setOptions(e) {
		if (this.options = {
			...this.#m,
			...e
		}, e?._type && (this.#o = e._type), this.updateGcTime(this.options.gcTime), this.state && void 0 === this.state.data) {
			const e = Po(this.options);
			void 0 !== e.data && (this.setState(Ao(e.data, e.dataUpdatedAt)), this.#l = e);
		}
	}
	optionalRemove() {
		this.observers.length || "idle" !== this.state.fetchStatus || this.#d.remove(this);
	}
	setData(e, t) {
		const n = oo(this.state.data, e, this.options);
		return this.#f({
			data: n,
			type: "success",
			dataUpdatedAt: t?.updatedAt,
			manual: t?.manual
		}), n;
	}
	setState(e) {
		this.#f({
			type: "setState",
			state: e
		});
	}
	cancel(e) {
		const t = this.#p?.promise;
		return this.#p?.cancel(e), t ? t.then(Qs).catch(Qs) : Promise.resolve();
	}
	destroy() {
		super.destroy(), this.cancel({ silent: !0 });
	}
	get resetState() {
		return this.#l;
	}
	reset() {
		this.destroy(), this.setState(this.resetState);
	}
	isActive() {
		return this.observers.some((e) => !1 !== Js(e.options.enabled, this));
	}
	isDisabled() {
		return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === uo || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		return this.getObserversCount() > 0 && this.observers.some((e) => "static" === Js(e.options.staleTime, this));
	}
	isStale() {
		return this.getObserversCount() > 0 ? this.observers.some((e) => e.getCurrentResult().isStale) : void 0 === this.state.data || this.state.isInvalidated;
	}
	isStaleByTime(e = 0) {
		return void 0 === this.state.data || "static" !== e && (!!this.state.isInvalidated || !function(e, t) {
			return Math.max(e + (t || 0) - Date.now(), 0);
		}(this.state.dataUpdatedAt, e));
	}
	onFocus() {
		this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }), this.#p?.continue();
	}
	onOnline() {
		this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }), this.#p?.continue();
	}
	addObserver(e) {
		this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#d.notify({
			type: "observerAdded",
			query: this,
			observer: e
		}));
	}
	removeObserver(e) {
		const t = this.observers.indexOf(e);
		-1 !== t && (this.observers.splice(t, 1), this.observers.length || (this.#p && (this.#h || "paused" === this.state.fetchStatus && "pending" === this.state.status ? this.#p.cancel({ revert: !0 }) : this.#p.cancelRetry()), this.scheduleGc()), this.#d.notify({
			type: "observerRemoved",
			query: this,
			observer: e
		}));
	}
	getObserversCount() {
		return this.observers.length;
	}
	invalidate() {
		this.state.isInvalidated || this.#f({ type: "invalidate" });
	}
	async fetch(e, t) {
		if ("idle" !== this.state.fetchStatus && "rejected" !== this.#p?.status()) {
			if (void 0 !== this.state.data && t?.cancelRefetch) this.cancel({ silent: !0 });
			else if (this.#p) return this.#p.continueRetry(), this.#p.promise;
		}
		if (e && this.setOptions(e), !this.options.queryFn) {
			const e = this.observers.find((e) => e.options.queryFn);
			e && this.setOptions(e.options);
		}
		const n = new AbortController(), a = (e) => {
			Object.defineProperty(e, "signal", {
				enumerable: !0,
				get: () => (this.#h = !0, n.signal)
			});
		}, r = () => {
			const e = po(this.options, t), n = (() => {
				const e = {
					client: this.#u,
					queryKey: this.queryKey,
					meta: this.meta
				};
				return a(e), e;
			})();
			return this.#h = !1, this.options.persister ? this.options.persister(e, n, this) : e(n);
		}, i = (() => {
			const e = {
				fetchOptions: t,
				options: this.options,
				queryKey: this.queryKey,
				client: this.#u,
				state: this.state,
				fetchFn: r
			};
			return a(e), e;
		})();
		("infinite" === this.#o ? bo(this.options.pages) : this.options.behavior)?.onFetch(i, this), this.#c = this.state, "idle" !== this.state.fetchStatus && this.state.fetchMeta === i.fetchOptions?.meta || this.#f({
			type: "fetch",
			meta: i.fetchOptions?.meta
		});
		const s = this.#p = Io({
			initialPromise: t?.initialPromise,
			fn: i.fetchFn,
			onCancel: (e) => {
				e instanceof So && e.revert && this.setState({
					...this.#c,
					fetchStatus: "idle"
				}), n.abort();
			},
			onFail: (e, t) => {
				this.#f({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#f({ type: "pause" });
			},
			onContinue: () => {
				this.#f({ type: "continue" });
			},
			retry: i.options.retry,
			retryDelay: i.options.retryDelay,
			networkMode: i.options.networkMode,
			canRun: () => !0
		});
		try {
			const e = await s.start();
			if (void 0 === e) throw new Error(`${this.queryHash} data is undefined`);
			return this.setData(e), this.#d.config.onSuccess?.(e, this), this.#d.config.onSettled?.(e, this.state.error, this), e;
		} catch (o) {
			if (o instanceof So) {
				if (o.silent) return this.#p.promise;
				if (o.revert) {
					if (void 0 === this.state.data) throw o;
					return this.state.data;
				}
			}
			throw this.#f({
				type: "error",
				error: o
			}), this.#d.config.onError?.(o, this), this.#d.config.onSettled?.(this.state.data, o, this), o;
		} finally {
			this.#p === s && (this.#p = void 0), this.scheduleGc();
		}
	}
	#f(e) {
		this.state = ((t) => {
			switch (e.type) {
				case "failed": return {
					...t,
					fetchFailureCount: e.failureCount,
					fetchFailureReason: e.error
				};
				case "pause": return {
					...t,
					fetchStatus: "paused"
				};
				case "continue": return {
					...t,
					fetchStatus: "fetching"
				};
				case "fetch": return {
					...t,
					...(n = t.data, a = this.options, {
						fetchFailureCount: 0,
						fetchFailureReason: null,
						fetchStatus: _o(a.networkMode) ? "fetching" : "paused",
						...void 0 === n && {
							error: null,
							status: "pending"
						}
					}),
					fetchMeta: e.meta ?? null
				};
				case "success":
					const r = {
						...t,
						...Ao(e.data, e.dataUpdatedAt),
						dataUpdateCount: t.dataUpdateCount + 1,
						...!e.manual && {
							fetchStatus: "idle",
							fetchFailureCount: 0,
							fetchFailureReason: null
						}
					};
					return this.#c = e.manual ? r : void 0, r;
				case "error":
					const i = e.error;
					return {
						...t,
						error: i,
						errorUpdateCount: t.errorUpdateCount + 1,
						errorUpdatedAt: Date.now(),
						fetchFailureCount: t.fetchFailureCount + 1,
						fetchFailureReason: i,
						fetchStatus: "idle",
						status: "error",
						isInvalidated: !0
					};
				case "invalidate": return {
					...t,
					isInvalidated: !0
				};
				case "setState": return {
					...t,
					...e.state
				};
			}
			var n, a;
		})(this.state), go.batch(() => {
			this.observers.slice().forEach((e) => {
				e.onQueryUpdate();
			}), this.#d.notify({
				query: this,
				type: "updated",
				action: e
			});
		});
	}
};
function Ao(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success"
	};
}
function Po(e) {
	const t = "function" == typeof e.initialData ? e.initialData() : e.initialData, n = void 0 !== t, a = n ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
	return {
		data: t,
		dataUpdateCount: 0,
		dataUpdatedAt: n ? a ?? Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: n ? "success" : "pending",
		fetchStatus: "idle"
	};
}
var No = class extends ko {
	#u;
	#y;
	#g;
	#p;
	constructor(e) {
		super(), this.#u = e.client, this.mutationId = e.mutationId, this.#g = e.mutationCache, this.#y = [], this.state = e.state || {
			context: void 0,
			data: void 0,
			error: null,
			failureCount: 0,
			failureReason: null,
			isPaused: !1,
			status: "idle",
			variables: void 0,
			submittedAt: 0
		}, this.setOptions(e.options), this.scheduleGc();
	}
	setOptions(e) {
		this.options = e, this.updateGcTime(this.options.gcTime);
	}
	get meta() {
		return this.options.meta;
	}
	addObserver(e) {
		this.#y.includes(e) || (this.#y.push(e), this.clearGcTimeout(), this.#g.notify({
			type: "observerAdded",
			mutation: this,
			observer: e
		}));
	}
	removeObserver(e) {
		this.#y = this.#y.filter((t) => t !== e), this.scheduleGc(), this.#g.notify({
			type: "observerRemoved",
			mutation: this,
			observer: e
		});
	}
	optionalRemove() {
		this.#y.length || ("pending" === this.state.status ? this.scheduleGc() : this.#g.remove(this));
	}
	continue() {
		return this.#p?.continue() ?? ("pending" === this.state.status ? this.execute(this.state.variables) : Promise.resolve());
	}
	async execute(e) {
		const t = () => {
			this.#f({ type: "continue" });
		}, n = {
			client: this.#u,
			meta: this.options.meta,
			mutationKey: this.options.mutationKey
		}, a = this.#p = Io({
			fn: () => this.options.mutationFn ? this.options.mutationFn(e, n) : Promise.reject(/* @__PURE__ */ new Error("No mutationFn found")),
			onFail: (e, t) => {
				this.#f({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#f({ type: "pause" });
			},
			onContinue: t,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#g.canRun(this)
		}), r = "pending" === this.state.status, i = !a.canStart();
		try {
			if (r) t();
			else {
				this.#f({
					type: "pending",
					variables: e,
					isPaused: i
				}), this.#g.config.onMutate && await this.#g.config.onMutate(e, this, n);
				const t = await this.options.onMutate?.(e, n);
				t !== this.state.context && this.#f({
					type: "pending",
					context: t,
					variables: e,
					isPaused: i
				});
			}
			const s = await a.start();
			return await this.#g.config.onSuccess?.(s, e, this.state.context, this, n), await this.options.onSuccess?.(s, e, this.state.context, n), await this.#g.config.onSettled?.(s, null, this.state.variables, this.state.context, this, n), await this.options.onSettled?.(s, null, e, this.state.context, n), this.#f({
				type: "success",
				data: s
			}), s;
		} catch (s) {
			try {
				await this.#g.config.onError?.(s, e, this.state.context, this, n);
			} catch (o) {
				Promise.reject(o);
			}
			try {
				await this.options.onError?.(s, e, this.state.context, n);
			} catch (o) {
				Promise.reject(o);
			}
			try {
				await this.#g.config.onSettled?.(void 0, s, this.state.variables, this.state.context, this, n);
			} catch (o) {
				Promise.reject(o);
			}
			try {
				await this.options.onSettled?.(void 0, s, e, this.state.context, n);
			} catch (o) {
				Promise.reject(o);
			}
			throw this.#f({
				type: "error",
				error: s
			}), s;
		} finally {
			this.#p === a && (this.#p = void 0), this.#g.runNext(this);
		}
	}
	#f(e) {
		this.state = ((t) => {
			switch (e.type) {
				case "failed": return {
					...t,
					failureCount: e.failureCount,
					failureReason: e.error
				};
				case "pause": return {
					...t,
					isPaused: !0
				};
				case "continue": return {
					...t,
					isPaused: !1
				};
				case "pending": return {
					...t,
					context: e.context,
					data: void 0,
					failureCount: 0,
					failureReason: null,
					error: null,
					isPaused: e.isPaused,
					status: "pending",
					variables: e.variables,
					submittedAt: Date.now()
				};
				case "success": return {
					...t,
					data: e.data,
					failureCount: 0,
					failureReason: null,
					error: null,
					status: "success",
					isPaused: !1
				};
				case "error": return {
					...t,
					data: void 0,
					error: e.error,
					failureCount: t.failureCount + 1,
					failureReason: e.error,
					isPaused: !1,
					status: "error"
				};
			}
		})(this.state), go.batch(() => {
			this.#y.forEach((t) => {
				t.onMutationUpdate(e);
			}), this.#g.notify({
				mutation: this,
				type: "updated",
				action: e
			});
		});
	}
}, xo = class extends ho {
	#w;
	#v;
	#_;
	constructor(e = {}) {
		super(), this.config = e, this.#w = /* @__PURE__ */ new Set(), this.#v = /* @__PURE__ */ new Map(), this.#_ = 0;
	}
	build(e, t, n) {
		const a = new No({
			client: e,
			mutationCache: this,
			mutationId: ++this.#_,
			options: e.defaultMutationOptions(t),
			state: n
		});
		return this.add(a), a;
	}
	add(e) {
		this.#w.add(e);
		const t = Oo(e);
		if ("string" == typeof t) {
			const n = this.#v.get(t);
			n ? n.push(e) : this.#v.set(t, [e]);
		}
		this.notify({
			type: "added",
			mutation: e
		});
	}
	remove(e) {
		if (this.#w.delete(e)) {
			const t = Oo(e);
			if ("string" == typeof t) {
				const n = this.#v.get(t);
				if (n) if (n.length > 1) {
					const t = n.indexOf(e);
					-1 !== t && n.splice(t, 1);
				} else n[0] === e && this.#v.delete(t);
			}
		}
		this.notify({
			type: "removed",
			mutation: e
		});
	}
	canRun(e) {
		const t = Oo(e);
		if ("string" == typeof t) {
			const n = this.#v.get(t)?.find((e) => "pending" === e.state.status);
			return !n || n === e;
		}
		return !0;
	}
	runNext(e) {
		const t = Oo(e);
		return "string" == typeof t ? (this.#v.get(t)?.find((t) => t !== e && t.state.isPaused))?.continue() ?? Promise.resolve() : Promise.resolve();
	}
	clear() {
		go.batch(() => {
			this.#w.forEach((e) => {
				this.notify({
					type: "removed",
					mutation: e
				});
			}), this.#w.clear(), this.#v.clear();
		});
	}
	getAll() {
		return Array.from(this.#w);
	}
	find(e) {
		const t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => Xs(t, e));
	}
	findAll(e = {}) {
		return this.getAll().filter((t) => Xs(e, t));
	}
	notify(e) {
		go.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	resumePausedMutations() {
		const e = this.getAll().filter((e) => e.state.isPaused);
		return go.batch(() => Promise.all(e.map((e) => e.continue().catch(Qs))));
	}
};
function Oo(e) {
	return e.options.scope?.id;
}
var To = class extends ho {
	#S;
	constructor(e = {}) {
		super(), this.config = e, this.#S = /* @__PURE__ */ new Map();
	}
	build(e, t, n) {
		const a = t.queryKey, r = t.queryHash ?? Zs(a, t);
		let i = this.get(r);
		return i || (i = new Eo({
			client: e,
			queryKey: a,
			queryHash: r,
			options: e.defaultQueryOptions(t),
			state: n,
			defaultOptions: e.getQueryDefaults(a)
		}), this.add(i)), i;
	}
	add(e) {
		this.#S.has(e.queryHash) || (this.#S.set(e.queryHash, e), this.notify({
			type: "added",
			query: e
		}));
	}
	remove(e) {
		const t = this.#S.get(e.queryHash);
		t && (e.destroy(), t === e && this.#S.delete(e.queryHash), this.notify({
			type: "removed",
			query: e
		}));
	}
	clear() {
		go.batch(() => {
			this.getAll().forEach((e) => {
				this.remove(e);
			});
		});
	}
	get(e) {
		return this.#S.get(e);
	}
	getAll() {
		return [...this.#S.values()];
	}
	find(e) {
		const t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => Ys(t, e));
	}
	findAll(e = {}) {
		const t = this.getAll();
		return Object.keys(e).length > 0 ? t.filter((t) => Ys(e, t)) : t;
	}
	notify(e) {
		go.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	onFocus() {
		go.batch(() => {
			this.getAll().forEach((e) => {
				e.onFocus();
			});
		});
	}
	onOnline() {
		go.batch(() => {
			this.getAll().forEach((e) => {
				e.onOnline();
			});
		});
	}
};
const Fo = new class {
	#I;
	#g;
	#m;
	#k;
	#b;
	#D;
	#M;
	#E;
	constructor(e = {}) {
		this.#I = e.queryCache || new To(), this.#g = e.mutationCache || new xo(), this.#m = e.defaultOptions || {}, this.#k = /* @__PURE__ */ new Map(), this.#b = /* @__PURE__ */ new Map(), this.#D = 0;
	}
	mount() {
		this.#D++, 1 === this.#D && (this.#M = fo.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#I.onFocus());
		}), this.#E = wo.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#I.onOnline());
		}));
	}
	unmount() {
		this.#D--, 0 === this.#D && (this.#M?.(), this.#M = void 0, this.#E?.(), this.#E = void 0);
	}
	isFetching(e) {
		return this.#I.findAll({
			...e,
			fetchStatus: "fetching"
		}).length;
	}
	isMutating(e) {
		return this.#g.findAll({
			...e,
			status: "pending"
		}).length;
	}
	getQueryData(e) {
		const t = this.defaultQueryOptions({ queryKey: e });
		return this.#I.get(t.queryHash)?.state.data;
	}
	ensureQueryData(e) {
		const t = this.defaultQueryOptions(e), n = this.#I.build(this, t), a = n.state.data;
		return void 0 === a ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Js(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(a));
	}
	getQueriesData(e) {
		return this.#I.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
	}
	setQueryData(e, t, n) {
		const a = this.defaultQueryOptions({ queryKey: e }), i = function(e, t) {
			return "function" == typeof e ? e(t) : e;
		}(t, this.#I.get(a.queryHash)?.state.data);
		if (void 0 !== i) return this.#I.build(this, a).setData(i, {
			...n,
			manual: !0
		});
	}
	setQueriesData(e, t, n) {
		return go.batch(() => this.#I.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]));
	}
	getQueryState(e) {
		const t = this.defaultQueryOptions({ queryKey: e });
		return this.#I.get(t.queryHash)?.state;
	}
	removeQueries(e) {
		const t = this.#I;
		go.batch(() => {
			t.findAll(e).forEach((e) => {
				t.remove(e);
			});
		});
	}
	resetQueries(e, t) {
		const n = this.#I;
		return go.batch(() => {
			const a = n.findAll(e), r = new Set(a);
			return a.forEach((e) => {
				e.reset();
			}), this.refetchQueries({
				type: "active",
				predicate: (e) => r.has(e)
			}, t);
		});
	}
	cancelQueries(e, t = {}) {
		const n = {
			revert: !0,
			...t
		}, a = go.batch(() => this.#I.findAll(e).map((e) => e.cancel(n)));
		return Promise.all(a).then(Qs).catch(Qs);
	}
	invalidateQueries(e, t = {}) {
		return go.batch(() => (this.#I.findAll(e).forEach((e) => {
			e.invalidate();
		}), "none" === e?.refetchType ? Promise.resolve() : this.refetchQueries({
			...e,
			type: e?.refetchType ?? e?.type ?? "active"
		}, t)));
	}
	refetchQueries(e, t = {}) {
		const n = {
			...t,
			cancelRefetch: t.cancelRefetch ?? !0
		}, a = go.batch(() => this.#I.findAll(e).filter((e) => !e.isDisabled() && !e.isStatic()).map((e) => {
			let t = e.fetch(void 0, n);
			return n.throwOnError || (t = t.catch(Qs)), "paused" === e.state.fetchStatus ? Promise.resolve() : t;
		}));
		return Promise.all(a).then(Qs);
	}
	async query(e) {
		const t = this.defaultQueryOptions(e);
		void 0 === t.retry && (t.retry = !1);
		const n = this.#I.build(this, t), a = n.isStaleByTime(Js(t.staleTime, n)) ? await n.fetch(t) : n.state.data, r = t.select;
		return r ? r(a) : a;
	}
	fetchQuery(e) {
		const t = this.defaultQueryOptions(e);
		void 0 === t.retry && (t.retry = !1);
		const n = this.#I.build(this, t);
		return n.isStaleByTime(Js(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
	}
	prefetchQuery(e) {
		return this.fetchQuery(e).then(Qs).catch(Qs);
	}
	infiniteQuery(e) {
		return e._type = "infinite", this.query(e);
	}
	fetchInfiniteQuery(e) {
		return e._type = "infinite", this.fetchQuery(e);
	}
	prefetchInfiniteQuery(e) {
		return this.fetchInfiniteQuery(e).then(Qs).catch(Qs);
	}
	ensureInfiniteQueryData(e) {
		return e._type = "infinite", this.ensureQueryData(e);
	}
	resumePausedMutations() {
		return wo.isOnline() ? this.#g.resumePausedMutations() : Promise.resolve();
	}
	getQueryCache() {
		return this.#I;
	}
	getMutationCache() {
		return this.#g;
	}
	getDefaultOptions() {
		return this.#m;
	}
	setDefaultOptions(e) {
		this.#m = e;
	}
	setQueryDefaults(e, t) {
		this.#k.set(eo(e), {
			queryKey: e,
			defaultOptions: t
		});
	}
	getQueryDefaults(e) {
		const t = [...this.#k.values()], n = {};
		return t.forEach((t) => {
			to(e, t.queryKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	setMutationDefaults(e, t) {
		this.#b.set(eo(e), {
			mutationKey: e,
			defaultOptions: t
		});
	}
	getMutationDefaults(e) {
		const t = [...this.#b.values()], n = {};
		return t.forEach((t) => {
			to(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	defaultQueryOptions(e) {
		if (e._defaulted) return e;
		const t = {
			...this.#m.queries,
			...this.getQueryDefaults(e.queryKey),
			...e,
			_defaulted: !0
		};
		return t.queryHash || (t.queryHash = Zs(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === uo && (t.enabled = !1), t;
	}
	defaultMutationOptions(e) {
		return e?._defaulted ? e : {
			...this.#m.mutations,
			...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
			...e,
			_defaulted: !0
		};
	}
	clear() {
		this.#I.clear(), this.#g.clear();
	}
}({ defaultOptions: { queries: {
	staleTime: 3e5,
	retry: 1,
	refetchOnWindowFocus: !1
} } }), Co = (e, t) => ({
	sitePassword: null,
	username: "anonymous",
	isAuthenticated: !1,
	isAdmin: !1,
	scopeExitBlocked: !1,
	setScopeExitBlocked: (t) => la(() => e({ scopeExitBlocked: t })),
	setAuth: (n, a, r) => nn(() => {
		e({
			sitePassword: n,
			username: a,
			isAuthenticated: !0,
			isAdmin: r ?? !1
		});
		const i = function(e) {
			try {
				const t = localStorage.getItem(Bs(e));
				if (!t) return null;
				const n = JSON.parse(t), a = {};
				for (const e of Vs) e in n && (a[e] = n[e]);
				return Object.keys(a).length > 0 ? a : null;
			} catch {
				return null;
			}
		}(a);
		if (i) {
			const { cursor: n, settings: r } = function(e) {
				const t = new Set(L), n = {}, a = {};
				for (const [r, i] of Object.entries(e)) t.has(r) ? a[r] = i : n[r] = i;
				return {
					cursor: n,
					settings: a
				};
			}(i), s = function(e) {
				return `${Y() ?? "legacy"}:${e}`;
			}(a), o = t().appliedUserPreferencesKey === s;
			e({
				...n,
				...o ? {} : r,
				appliedUserPreferencesKey: s
			});
		}
		const s = t();
		rt.setContext(s.currentFileId, s.availableDates[s.currentDateIndex] ?? null, a, s.selectedStudyId);
	}),
	setIsAdmin: (t) => e({ isAdmin: t }),
	clearAuth: () => nn(() => {
		const n = t();
		(function(e, t) {
			try {
				const n = {};
				for (const e of Vs) e in t && (n[e] = t[e]);
				localStorage.setItem(Bs(e), JSON.stringify(n));
			} catch {}
		})(n.username, n), Fo.clear(), e({
			sitePassword: null,
			username: "anonymous",
			isAuthenticated: !1,
			isAdmin: !1,
			appliedUserPreferencesKey: null,
			currentFileId: null,
			currentFilename: null,
			currentDateIndex: 0,
			availableDates: [],
			availableFiles: [],
			currentFileSource: "server",
			currentFileSourceType: null,
			sleepMarkers: [],
			nonwearMarkers: [],
			isDirty: !1,
			isSaving: !1,
			lastSavedAt: null,
			saveReceipt: null,
			saveError: null,
			selectedPeriodIndex: null,
			isInvalidNight: !1,
			explicitNoNonwear: !1,
			needsConsensus: !1,
			notes: "",
			markerMode: "sleep",
			creationMode: "idle",
			pendingOnsetTimestamp: null,
			markerHistory: [],
			markerHistoryIndex: -1,
			uploadProgress: null,
			uploadResult: null,
			isUploading: !1
		}), rt.setContext(null, null, "anonymous", t().selectedStudyId);
	})
});
let Ro = null;
const Ho = /* @__PURE__ */ new WeakMap(), Lo = (e, t) => ({
	sleepMarkers: [],
	nonwearMarkers: [],
	proposalNight: null,
	acceptingProposal: null,
	isDirty: !1,
	_editGeneration: 0,
	isSaving: !1,
	lastSavedAt: null,
	saveError: null,
	canDiscardNightChanges: !1,
	saveReceipt: null,
	selectedPeriodIndex: null,
	selectedActiwareRest: null,
	actiwareRestPreview: null,
	isInvalidNight: !1,
	isInvalidNightImplicit: !1,
	explicitNoNonwear: !1,
	needsConsensus: !1,
	notes: "",
	markerMode: "sleep",
	creationMode: "idle",
	pendingOnsetTimestamp: null,
	placementRejected: !1,
	placementRejectionReason: null,
	nightRuleReceipt: null,
	nightLoading: !0,
	markerHistory: [],
	markerHistoryIndex: -1,
	_isDragTransaction: !1,
	_dragSnapshotForAudit: null,
	showStoredNight: (n, a, r, i) => {
		const s = i?.view;
		if (!Ce.owns(n, t())) return !1;
		const o = t();
		if (!Ne(n.identity, {
			...n.identity,
			fileId: a,
			date: r
		})) return !1;
		const l = {
			sleepMarkers: i?.sleepMarkers ?? [],
			nonwearMarkers: i?.nonwearMarkers ?? [],
			isInvalidNight: i?.isInvalidNight ?? !1,
			explicitNoNonwear: i?.explicitNoNonwear ?? !1,
			needsConsensus: i?.needsConsensus ?? !1,
			notes: i?.notes ?? ""
		}, c = l.isInvalidNight && !0 === i?.isInvalidNightImplicit, d = function(e, t) {
			const n = (e) => e.sleepMarkers.map((e) => [
				e.onsetTimestamp,
				e.offsetTimestamp,
				e.markerType,
				e.markerIndex
			]), a = (e) => e.nonwearMarkers.map((e) => [
				e.startTimestamp,
				e.endTimestamp,
				e.markerIndex
			]);
			return JSON.stringify([
				n(e),
				a(e),
				e.isInvalidNight,
				e.explicitNoNonwear,
				e.needsConsensus,
				e.notes
			]) === JSON.stringify([
				n(t),
				a(t),
				t.isInvalidNight,
				t.explicitNoNonwear,
				t.needsConsensus,
				t.notes
			]);
		}(o, l);
		return e({
			sleepMarkers: l.sleepMarkers,
			nonwearMarkers: l.nonwearMarkers,
			isInvalidNight: l.isInvalidNight,
			isInvalidNightImplicit: c,
			explicitNoNonwear: l.explicitNoNonwear,
			needsConsensus: l.needsConsensus,
			notes: l.notes,
			isDirty: !1,
			nightLoading: !1,
			...s ?? (d ? {} : {
				selectedPeriodIndex: null,
				_editGeneration: o._editGeneration + 1
			})
		}), !0;
	},
	_loadSleepMarkersFromServer: (n, a) => {
		Ce.owns(n, t()) && e({ sleepMarkers: a });
	},
	_loadProposalMarkers: (n, a, r, i) => {
		Ce.owns(n, t()) && (e({
			sleepMarkers: i,
			acceptingProposal: null,
			proposalNight: {
				fileId: a,
				date: r,
				authoredSleepMarkers: t().proposalNight?.authoredSleepMarkers ?? t().sleepMarkers,
				sleepMarkers: i.map((e) => xe(e, {
					onsetTimestamp: e.onsetTimestamp,
					offsetTimestamp: e.offsetTimestamp,
					markerType: e.markerType
				}))
			}
		}), Ce.updateContext(n, t()));
	},
	forgetProposalNight: () => {
		null === t().proposalNight && null === t().acceptingProposal || e({
			proposalNight: null,
			acceptingProposal: null
		});
	},
	stageProposalAcceptance: () => {
		const n = t().proposalNight;
		null !== n && e({
			proposalNight: null,
			acceptingProposal: n
		});
	},
	settleProposalAcceptance: (n, a) => {
		const r = t();
		if (r.acceptingProposal !== n) return;
		const i = r.currentFileId === n.fileId && r.availableDates[r.currentDateIndex] === n.date;
		e(a || !i || null !== r.proposalNight ? { acceptingProposal: null } : {
			acceptingProposal: null,
			proposalNight: n
		});
	},
	_loadNonwearMarkersFromServer: (n, a) => {
		Ce.owns(n, t()) && e({ nonwearMarkers: a });
	},
	_loadExplicitNoNonwearFromServer: (n, a) => {
		Ce.owns(n, t()) && e({ explicitNoNonwear: a });
	},
	_loadStatusFlagsFromServer: (n, a) => {
		Ce.owns(n, t()) && e(a);
	},
	setSleepMarkers: (n, a, r) => {
		let i = !1;
		return Cn(t, e, (e) => {
			const t = a(e);
			if (null === t) return null;
			if (!r?.actiwareDerived && Mn(n) && !function(e, t) {
				const n = new Set(e.map((e) => `${String(e.onsetTimestamp)}:${String(e.offsetTimestamp)}`));
				return t.every((e) => n.has(`${String(e.onsetTimestamp)}:${String(e.offsetTimestamp)}`));
			}(e.sleepMarkers, t)) return i = !0, null;
			const s = {
				...r?.acceptProposal ? { proposalNight: null } : {},
				...void 0 !== r?.selectedPeriodIndex ? { selectedPeriodIndex: r.selectedPeriodIndex } : {}
			};
			if (void 0 === r?.invalidNight) return { patch: {
				sleepMarkers: t,
				...s
			} };
			const o = r.invalidNight, { kept: l, cleared: c } = o ? Xe(t) : {
				kept: t,
				cleared: []
			};
			return {
				patch: {
					sleepMarkers: o ? l.map((e, t) => ({
						...e,
						markerIndex: t + 1
					})) : t,
					isInvalidNight: o,
					...s
				},
				record: (e, t) => {
					t.isInvalidNight !== o && Ut("invalid_night_toggled", {
						value: o,
						clearedSleepMarkers: c
					});
				}
			};
		}, {
			night: _n(n),
			editsDisplayedSleep: !0
		}).then((e) => (i && En(n, Dn), e));
	},
	setNonwearMarkers: (n, a) => Cn(t, e, (e) => {
		const t = a(e);
		if (null === t) return null;
		const n = on(e, t);
		return { patch: {
			nonwearMarkers: n.nonwearMarkers,
			explicitNoNonwear: n.explicitNoNonwear
		} };
	}, { night: _n(n) }),
	editActiwareRest: async (n, a) => {
		const r = n.identity.dataSource;
		if (!r?.saveActiwareRestEdit) return En(n, "This night's rest intervals cannot be edited here."), !1;
		let i;
		try {
			i = await r.saveActiwareRestEdit(n.fileId, n.date, a, n.identity.db ?? void 0);
		} catch (c) {
			return En(n, c instanceof Error ? c.message : String(c)), !1;
		}
		await n.identity.queryClient.invalidateQueries({ queryKey: ["actiware-rests"] });
		const s = "remove" === a.kind ? null : a.to, o = s ? i.findIndex((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && e.onsetTimestamp >= s.startTimestamp && e.offsetTimestamp <= s.endTimestamp) : -1, l = await t().setSleepMarkers(n, () => i, {
			actiwareDerived: !0,
			...o >= 0 ? { selectedPeriodIndex: o } : {}
		});
		return l && Ce.owns(n, t()) && e(s && o < 0 ? {
			selectedActiwareRest: s,
			selectedPeriodIndex: null
		} : { selectedActiwareRest: null }), l;
	},
	setSelectedPeriod: (t) => e({
		selectedPeriodIndex: t,
		selectedActiwareRest: null,
		placementRejected: !1
	}),
	selectActiwareRest: (t) => e({
		selectedActiwareRest: t,
		selectedPeriodIndex: null,
		markerMode: "sleep",
		placementRejected: !1
	}),
	previewActiwareRestEdge: (n, a) => {
		void 0 !== a && t().actiwareRestPreview !== a || e({ actiwareRestPreview: n });
	},
	setMarkerMode: (t) => e({
		markerMode: t,
		creationMode: "idle",
		pendingOnsetTimestamp: null,
		placementRejected: !1,
		selectedPeriodIndex: null,
		selectedActiwareRest: null
	}),
	handlePlotClick: (n, a) => {
		const r = _n(n);
		return yn(async () => {
			const i = () => Sn(r) ? t() : {
				...Ce.context(n),
				...Ce.night(n)
			}, s = (t) => {
				Sn(r) ? e(t) : Ce.updateContext(n, {
					...i(),
					...t
				});
			};
			if (u(n.context.currentFileSourceType)) return Qt("marker_placed", "mutation_on_read_only_view"), En(r.session, Wt), Promise.resolve();
			const { markerMode: o, creationMode: l, pendingOnsetTimestamp: c, sleepMarkers: d, nonwearMarkers: p } = i();
			let m = a;
			const h = n.context._dataRange;
			if (h && (m = Math.max(h.min, Math.min(h.max, m))), "idle" === l) {
				const e = "sleep" === o ? d.findIndex((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && m >= e.onsetTimestamp && m <= e.offsetTimestamp) : p.findIndex((e) => null != e.startTimestamp && null != e.endTimestamp && m >= e.startTimestamp && m <= e.endTimestamp);
				if (-1 !== e) return s({
					selectedPeriodIndex: e,
					placementRejected: !1
				}), Promise.resolve();
				const t = We(o, ("sleep" === o ? d.length : p.length) + 1);
				if (t) return Qt("marker_placed", "marker_limit_exceeded"), void En(r.session, t);
				s({
					creationMode: "placing_onset",
					pendingOnsetTimestamp: m,
					placementRejected: !1
				});
			} else if ("placing_onset" === l && null !== c) {
				const e = Math.min(c, m), n = Math.max(c, m);
				s({ placementRejected: !1 }), await ("sleep" === o ? t().addSleepMarker(r.session, e, n) : t().addNonwearMarker(r.session, e, n)) && s({
					creationMode: "idle",
					pendingOnsetTimestamp: null
				});
				return;
			}
		}, r);
	},
	cancelMarkerCreation: () => e({
		creationMode: "idle",
		pendingOnsetTimestamp: null,
		placementRejected: !1
	}),
	addSleepMarker: (n, a, r, i) => {
		const s = "object" == typeof i ? i : void 0, o = "object" == typeof i ? i.markerType : i, l = vn(n);
		if (u(n.context.currentFileSourceType)) return Qt("marker_placed", "mutation_on_read_only_view", l), En(n, Wt), Promise.resolve(!1);
		if (!Number.isFinite(a) || !Number.isFinite(r) || r <= a) return console.warn($t), Qt("marker_placed", "boundaries_disordered", l), En(n, $t), Promise.resolve(!1);
		if (Mn(n)) return t().editActiwareRest(n, {
			kind: "add",
			to: {
				startTimestamp: a,
				endTimestamp: r
			}
		});
		const c = s?.sourceRecordReference;
		return Cn(t, e, (e) => {
			const t = e.sleepMarkers;
			if (void 0 !== c && t.some((e) => Ge(e) && e.sourceRecordReference !== c)) return Qt("marker_placed", "multiple_main_sleep", l), En(n, "Diary Place cannot replace the existing main sleep. Move or delete it before placing this diary's sleep."), null;
			const i = (o === N.MAIN_SLEEP ? t.find(Ge) : void 0) ?? (void 0 === c ? void 0 : t.find((e) => e.sourceRecordReference === c)), s = i ? t.indexOf(i) : t.length, d = o ?? i?.markerType ?? Je(t, e), u = {
				onsetTimestamp: a,
				offsetTimestamp: r,
				markerIndex: s + 1,
				markerType: d,
				...c ? { sourceRecordReference: c } : {}
			}, p = i ? xe(i, u) : u;
			return {
				placesReference: c,
				patch: {
					sleepMarkers: i ? t.map((e) => e === i ? p : e) : [...t, p],
					selectedPeriodIndex: s,
					markerMode: "sleep"
				},
				record: (e, t) => i ? Ut("marker_moved", {
					before: t,
					after: e
				}, { after: e }) : Ut("marker_placed", {
					category: "sleep",
					markerType: d,
					periodIndex: s,
					onsetTimestamp: a,
					offsetTimestamp: r
				}, { after: e })
			};
		}, { night: _n(n) });
	},
	addNonwearMarker: (n, a, r) => {
		const i = vn(n);
		return u(n.context.currentFileSourceType) ? (Qt("marker_placed", "mutation_on_read_only_view", i), En(n, Wt), Promise.resolve(!1)) : !Number.isFinite(a) || !Number.isFinite(r) || r <= a ? (console.warn($t), Qt("marker_placed", "boundaries_disordered", i), En(n, $t), Promise.resolve(!1)) : Cn(t, e, ({ nonwearMarkers: e }) => {
			const t = e.length, n = {
				startTimestamp: a,
				endTimestamp: r,
				markerIndex: t + 1
			};
			return {
				patch: {
					nonwearMarkers: [...e, n],
					explicitNoNonwear: !1,
					selectedPeriodIndex: t,
					markerMode: "nonwear"
				},
				record: (e) => Ut("marker_placed", {
					category: "nonwear",
					periodIndex: t,
					startTimestamp: a,
					endTimestamp: r
				}, { after: e })
			};
		}, { night: _n(n) });
	},
	updateMarker: (n, a, r, i) => {
		if (Ce.holds(n, t()) && In("marker_adjusted")) return Promise.resolve();
		if (u(n.context.currentFileSourceType)) return Qt("marker_adjusted", "mutation_on_read_only_view"), Promise.resolve();
		if ("sleep" === a && Mn(n)) return En(n, Dn), Promise.resolve();
		const s = i instanceof Promise, o = s ? null : Ho.get(n) ?? null, l = o ? { ...o.night } : _n(n), c = gn(l.context, a, r);
		return null === c ? Promise.resolve() : yn(async () => {
			let n = s ? await i : "function" == typeof i ? null : i;
			if (!n && "function" != typeof i) return;
			const d = (e, t = !1) => {
				const r = wn(e, a, c);
				if (r < 0) return bn(a, c), null;
				if ("function" == typeof i && (n = i(e, r)), !n) return null;
				const s = { ...n }, o = l.context._dataRange;
				o && (void 0 !== s.onsetTimestamp && (s.onsetTimestamp = Math.max(o.min, Math.min(o.max, s.onsetTimestamp))), void 0 !== s.offsetTimestamp && (s.offsetTimestamp = Math.max(o.min, Math.min(o.max, s.offsetTimestamp))), void 0 !== s.startTimestamp && (s.startTimestamp = Math.max(o.min, Math.min(o.max, s.startTimestamp))), void 0 !== s.endTimestamp && (s.endTimestamp = Math.max(o.min, Math.min(o.max, s.endTimestamp))));
				const d = "sleep" === a ? e.sleepMarkers[r] : void 0, u = "sleep" === a ? void 0 : e.nonwearMarkers[r], p = d ?? u;
				if (!p || Object.entries(s).every(([e, t]) => Reflect.get(p, e) === t)) return null;
				if (d ?? u) {
					const e = d ? s.onsetTimestamp ?? d.onsetTimestamp : s.startTimestamp ?? u?.startTimestamp ?? null, t = d ? s.offsetTimestamp ?? d.offsetTimestamp : s.endTimestamp ?? u?.endTimestamp ?? null;
					if (null !== e && null !== t && t <= e) return console.warn($t), Qt("marker_adjusted", "boundaries_disordered"), En(l.session, $t), null;
				}
				if ("sleep" === a) {
					const t = void 0 !== s.onsetTimestamp || void 0 !== s.offsetTimestamp;
					return { patch: {
						sleepMarkers: e.sleepMarkers.map((e, n) => {
							if (n !== r) return e;
							const a = {
								...e,
								...s
							};
							return t && ("auto" === a.source || a.placement) && (a.edited = !0), a;
						}),
						placementRejected: !1
					} };
				}
				const m = e.nonwearMarkers.map((e, t) => t === r ? {
					...e,
					...s
				} : e);
				return { patch: {
					nonwearMarkers: m,
					explicitNoNonwear: en(m, e.explicitNoNonwear),
					placementRejected: !1
				} };
			};
			if (o) {
				const n = Sn(l) ? t() : Ce.context(l.session), a = d(n);
				if (!a) return;
				const r = un(dn(n), a);
				if (!await An(r, l.session)) return;
				return kn(t, e, (e, t) => {
					o.snapshotPending && (o.snapshotPending = !1, t(ln(e()))), t({
						...a.patch,
						...r,
						isDirty: !0,
						_editGeneration: e()._editGeneration + 1
					});
				}, {
					night: l,
					preview: !0
				});
			}
			await Fn(t, e, {
				editsDisplayedSleep: "sleep" === a,
				night: l,
				propose: (e, t) => {
					const i = d(e, t);
					return i && {
						...i,
						record: (e) => {
							Ut("marker_adjusted", {
								category: a,
								periodIndex: r,
								updates: n
							}, { after: e });
						}
					};
				}
			});
		}, l, null !== o);
	},
	deleteMarker: (n, a, r) => {
		if ("sleep" === a && Mn(n)) {
			const e = n.context.sleepMarkers[r];
			return null == e?.onsetTimestamp || null == e.offsetTimestamp ? Promise.resolve() : t().editActiwareRest(n, {
				kind: "remove",
				holding: {
					startTimestamp: e.onsetTimestamp,
					endTimestamp: e.offsetTimestamp
				}
			}).then(() => {});
		}
		const i = _n(n), s = gn(i.context, a, r);
		return kn(t, e, (e, t) => {
			if (u(e().currentFileSourceType)) return void Qt("marker_deleted", "mutation_on_read_only_view");
			const n = wn(e(), a, s);
			if (n < 0) return void bn(a, s);
			const r = "sleep" === a ? e().sleepMarkers[n] : e().nonwearMarkers[n];
			if (t(ln(e())), "sleep" === a) {
				const { sleepMarkers: i } = e();
				t({
					sleepMarkers: i.filter((e, t) => t !== n).map((e, t) => ({
						...e,
						markerIndex: t + 1
					})),
					isDirty: !0,
					_editGeneration: e()._editGeneration + 1,
					selectedPeriodIndex: null
				}), Ut("marker_deleted", {
					category: a,
					periodIndex: n,
					before: r
				});
			} else {
				const { nonwearMarkers: i } = e();
				t({
					nonwearMarkers: i.filter((e, t) => t !== n).map((e, t) => ({
						...e,
						markerIndex: t + 1
					})),
					isDirty: !0,
					_editGeneration: e()._editGeneration + 1,
					selectedPeriodIndex: null
				}), Ut("marker_deleted", {
					category: a,
					periodIndex: n,
					before: r
				});
			}
		}, { night: i });
	},
	splitSleepPeriod: (n, a, r, i = []) => {
		if (u(n.context.currentFileSourceType)) return Qt("sleep_period_split", "mutation_on_read_only_view"), Promise.resolve();
		if (Mn(n)) return En(n, Dn), Promise.resolve();
		const s = _n(n), o = gn(s.context, "sleep", a);
		return Cn(t, e, (e) => {
			const t = wn(e, "sleep", o);
			if (t < 0) return bn("sleep", o), null;
			const n = i[i.indexOf(r) - 1], a = void 0 === n ? null : Ee(e.sleepMarkers, t, r, n);
			if (void 0 === n || !a?.ok || !a.markers) return Qt("sleep_period_split", "split_not_strictly_inside"), null;
			const s = a.newIndex ?? t + 1;
			return a.markers[s] = xe(a.markers[s], void 0, !0), {
				patch: {
					sleepMarkers: a.markers,
					selectedPeriodIndex: s,
					markerMode: "sleep"
				},
				record: (e, a) => Ut("sleep_period_split", {
					periodIndex: t,
					at: r,
					firstOffset: n
				}, { after: a })
			};
		}, {
			editsDisplayedSleep: !0,
			night: s
		}).then(() => {});
	},
	mergeSleepPeriod: (n, a, r) => {
		if (u(n.context.currentFileSourceType)) return Qt("sleep_period_merged", "mutation_on_read_only_view"), Promise.resolve();
		if (Mn(n)) return En(n, Dn), Promise.resolve();
		const i = _n(n), s = gn(i.context, "sleep", a);
		return Cn(t, e, (e) => {
			const t = wn(e, "sleep", s);
			if (t < 0) return bn("sleep", s), null;
			const n = _e(e.sleepMarkers, t, r);
			return n.ok && n.markers ? {
				patch: {
					sleepMarkers: n.markers,
					selectedPeriodIndex: n.mergedIndex ?? t,
					markerMode: "sleep"
				},
				record: (e, n) => Ut("sleep_period_merged", {
					periodIndex: t,
					direction: r
				}, { after: n })
			} : (Qt("sleep_period_merged", "merge_no_neighbor"), null);
		}, {
			editsDisplayedSleep: !0,
			night: i
		}).then(() => {});
	},
	setIsInvalidNight: (n, a) => {
		if (Ce.holds(n, t()) && In("invalid_night_toggled")) return Promise.resolve(0);
		let r = a && !t().isInvalidNight ? Xe(t().sleepMarkers).cleared.length : 0;
		return kn(t, e, (e, t) => {
			r = (() => {
				if (e().isInvalidNight === a) return 0;
				const { kept: n, cleared: r } = Xe(e().sleepMarkers), i = a ? r : [];
				t(ln(e()));
				const s = () => {
					Ut("invalid_night_toggled", {
						value: a,
						clearedSleepMarkers: i
					});
				};
				if (a) {
					const a = n.map((e, t) => ({
						...e,
						markerIndex: t + 1
					}));
					t({
						isInvalidNight: !0,
						sleepMarkers: a,
						isDirty: !0,
						_editGeneration: e()._editGeneration + 1,
						selectedPeriodIndex: a.length > 0 ? 0 : null
					}), s();
				} else t({
					isInvalidNight: !1,
					isDirty: !0,
					_editGeneration: e()._editGeneration + 1
				}), s();
				return i.length;
			})();
		}, { night: _n(n) }).then(() => r);
	},
	setExplicitNoNonwear: (n, a) => {
		kn(t, e, (e, t) => {
			if (e().explicitNoNonwear === a) return;
			t(ln(e()));
			const n = () => {
				Ut("no_nonwear_toggled", { value: a });
			};
			a ? (t({
				explicitNoNonwear: !0,
				nonwearMarkers: [],
				selectedPeriodIndex: null,
				isDirty: !0,
				_editGeneration: e()._editGeneration + 1,
				creationMode: "idle",
				pendingOnsetTimestamp: null
			}), n()) : (t({
				explicitNoNonwear: !1,
				isDirty: !0,
				_editGeneration: e()._editGeneration + 1
			}), n());
		}, { night: _n(n) });
	},
	setNeedsConsensus: (n, a) => {
		kn(t, e, (e, t) => {
			e().needsConsensus !== a && (Ut("consensus_toggled", { value: a }), t(ln(e())), t({
				needsConsensus: a,
				isDirty: !0,
				_editGeneration: e()._editGeneration + 1
			}));
		}, { night: _n(n) });
	},
	setNotes: (n, a) => {
		kn(t, e, (e, t) => {
			const r = e().notes, i = Ce.holds(n) ? null : On, s = null !== i || null === Jt;
			i || function(t) {
				null === Jt ? Yt = {
					identity: He(Kt().store.getState()),
					value: t
				} : clearTimeout(Jt), Jt = setTimeout(() => {
					Jt = null, Xt(e().notes);
				}, 1500);
			}(r), s && t(ln(e())), t({
				notes: a,
				isDirty: !0,
				_editGeneration: e()._editGeneration + 1
			}), i && Xt(a, r, i);
		}, { night: _n(n) });
	},
	setSaveError: (t) => e({ saveError: t }),
	_flushSave: an,
	pushMarkerSnapshot: () => e(ln(t())),
	undo: (n) => kn(t, e, (e, t) => {
		if (u(e().currentFileSourceType)) return void Qt("undo", "mutation_on_read_only_view");
		const n = () => {
			const e = Gt();
			Ut("undo", {
				sleepCount: e.sleepMarkers.length,
				nonwearCount: e.nonwearMarkers.length,
				stateAfter: e
			});
		}, { markerHistory: a, markerHistoryIndex: r, sleepMarkers: i, nonwearMarkers: s, isInvalidNight: o, explicitNoNonwear: l, needsConsensus: c, notes: d, selectedPeriodIndex: p, _editGeneration: m } = e();
		if (r < 0) return void Qt("undo", "undo_beyond_history");
		if (r === a.length - 1) {
			const u = {
				proposalNight: e().proposalNight,
				sleepMarkers: i.map((e) => xe(e)),
				nonwearMarkers: s.map((e) => xe(e)),
				isInvalidNight: o,
				isInvalidNightImplicit: e().isInvalidNightImplicit,
				explicitNoNonwear: l,
				needsConsensus: c,
				notes: d,
				selectedPeriodIndex: p,
				timestamp: Date.now(),
				editGeneration: m
			}, h = a[r];
			if (!h || h.editGeneration !== m) {
				const r = [...a, u];
				t({
					markerHistory: r,
					markerHistoryIndex: r.length - 1
				});
				const i = r[r.length - 2];
				i ? (t({
					proposalNight: i.proposalNight ?? null,
					sleepMarkers: i.sleepMarkers.map((e) => xe(e)),
					nonwearMarkers: i.nonwearMarkers.map((e) => xe(e)),
					isInvalidNight: i.isInvalidNight,
					isInvalidNightImplicit: i.isInvalidNightImplicit ?? !1,
					explicitNoNonwear: i.explicitNoNonwear,
					needsConsensus: i.needsConsensus,
					notes: i.notes,
					selectedPeriodIndex: i.selectedPeriodIndex,
					isDirty: !0,
					_editGeneration: e()._editGeneration + 1,
					markerHistory: r.map((t, n) => n === r.length - 2 ? {
						...t,
						editGeneration: e()._editGeneration + 1
					} : t),
					markerHistoryIndex: r.length - 2
				}), n()) : Qt("undo", "undo_beyond_history");
				return;
			}
		}
		const h = r - 1;
		if (h < 0) return void Qt("undo", "undo_beyond_history");
		const f = a[h];
		f ? (t({
			proposalNight: f.proposalNight ?? null,
			sleepMarkers: f.sleepMarkers.map((e) => xe(e)),
			nonwearMarkers: f.nonwearMarkers.map((e) => xe(e)),
			isInvalidNight: f.isInvalidNight,
			isInvalidNightImplicit: f.isInvalidNightImplicit ?? !1,
			explicitNoNonwear: f.explicitNoNonwear,
			needsConsensus: f.needsConsensus,
			notes: f.notes,
			selectedPeriodIndex: f.selectedPeriodIndex,
			isDirty: !0,
			_editGeneration: e()._editGeneration + 1,
			markerHistory: a.map((t, n) => n === h ? {
				...t,
				editGeneration: e()._editGeneration + 1
			} : t),
			markerHistoryIndex: h
		}), n()) : Qt("undo", "undo_beyond_history");
	}, { night: _n(n) }),
	redo: (n) => kn(t, e, (e, t) => {
		if (u(e().currentFileSourceType)) return void Qt("redo", "mutation_on_read_only_view");
		const { markerHistory: n, markerHistoryIndex: a } = e(), r = a + 1;
		if (r >= n.length) return void Qt("redo", "redo_beyond_history");
		const i = n[r];
		if (!i) return void Qt("redo", "redo_beyond_history");
		t({
			proposalNight: i.proposalNight ?? null,
			sleepMarkers: i.sleepMarkers.map((e) => xe(e)),
			nonwearMarkers: i.nonwearMarkers.map((e) => xe(e)),
			isInvalidNight: i.isInvalidNight,
			isInvalidNightImplicit: i.isInvalidNightImplicit ?? !1,
			explicitNoNonwear: i.explicitNoNonwear,
			needsConsensus: i.needsConsensus,
			notes: i.notes,
			selectedPeriodIndex: i.selectedPeriodIndex,
			isDirty: !0,
			_editGeneration: e()._editGeneration + 1,
			markerHistory: n.map((t, n) => n === r ? {
				...t,
				editGeneration: e()._editGeneration + 1
			} : t),
			markerHistoryIndex: r
		});
		const s = Gt();
		Ut("redo", {
			sleepCount: s.sleepMarkers.length,
			nonwearCount: s.nonwearMarkers.length,
			stateAfter: s
		});
	}, { night: _n(n) }),
	canUndo: () => {
		const { markerHistoryIndex: e, markerHistory: n, _editGeneration: a } = t();
		if (e < 0) return !1;
		if (e > 0) return !0;
		const r = n[0];
		return !r || r.editGeneration !== a;
	},
	canRedo: () => {
		const { markerHistory: e, markerHistoryIndex: n } = t();
		return n < e.length - 1;
	},
	beginDragTransaction: (n) => {
		if (In("marker_moved")) return;
		const a = {
			token: n,
			night: _n(n),
			before: null,
			snapshotPending: !0
		};
		Ro = a, Ho.set(n, a), kn(t, e, (e, t) => {
			a.before = e(), Ce.setDragging(n, !0), t({
				_isDragTransaction: !0,
				_dragSnapshotForAudit: {
					sleepMarkers: e().sleepMarkers.map((e) => xe(e)),
					nonwearMarkers: e().nonwearMarkers.map((e) => xe(e))
				}
			});
		}, { night: a.night });
	},
	commitDragTransaction: (n) => {
		const a = Ho.get(n);
		if (!a) return Promise.resolve();
		Ho.delete(n), Ro === a && (Ro = null);
		let r = null;
		return yn(async () => {
			try {
				const n = a.before;
				if (!n) return;
				const i = {
					sleepMarkers: n.sleepMarkers,
					nonwearMarkers: n.nonwearMarkers
				}, s = r ?? (Sn(a.night) ? t() : Ce.night(a.night.session));
				if (!s || JSON.stringify(i) === JSON.stringify({
					sleepMarkers: s.sleepMarkers,
					nonwearMarkers: s.nonwearMarkers
				})) return;
				const o = r ??= {
					sleepMarkers: s.sleepMarkers.map((e) => xe(e)),
					nonwearMarkers: s.nonwearMarkers.map((e) => xe(e))
				};
				if (!await Fn(t, e, {
					editsDisplayedSleep: !1,
					night: a.night,
					propose: () => ({
						patch: o,
						since: i.sleepMarkers,
						snapshot: !1,
						record: (e) => {
							const t = {
								sleepMarkers: e.sleepMarkers,
								nonwearMarkers: e.nonwearMarkers
							};
							JSON.stringify(i) !== JSON.stringify(t) && Ut("marker_moved", {
								before: i,
								after: t
							}, { after: e });
						}
					})
				})) {
					const n = {
						sleepMarkers: i.sleepMarkers.map((e) => xe(e)),
						nonwearMarkers: i.nonwearMarkers.map((e) => xe(e))
					};
					Sn(a.night) ? e({
						...n,
						isDirty: !0,
						_editGeneration: t()._editGeneration + 1
					}) : a.night.session && Ce.write(a.night.session, {
						...Ce.night(a.night.session),
						...n
					}, []);
				}
			} finally {
				if (Ce.setDragging(n, !1), Sn(a.night)) e({
					_isDragTransaction: !1,
					_dragSnapshotForAudit: null,
					...t().isDirty && !a.snapshotPending ? { _editGeneration: t()._editGeneration + 1 } : {}
				});
				else {
					const e = Ce.context(a.night.session);
					Ce.updateContext(a.night.session, {
						...e,
						_isDragTransaction: !1,
						_dragSnapshotForAudit: null
					});
				}
			}
		}, a.night).then(() => {});
	},
	clearAllMarkers: (n, a) => u(n.context.currentFileSourceType) || Ce.holds(n, t()) && In("markers_cleared") ? Promise.resolve(!1) : kn(t, e, (e, t) => {
		a?.skipAudit || Ut("markers_cleared", {
			sleepCount: e().sleepMarkers.length,
			nonwearCount: e().nonwearMarkers.length
		}), t(ln(e())), t({
			sleepMarkers: [],
			nonwearMarkers: [],
			isDirty: !0,
			_editGeneration: e()._editGeneration + 1,
			selectedPeriodIndex: null
		});
	}, { night: _n(n) }).then(() => !0),
	applyConsensusCandidate: (n, { kind: a, sleepMarkers: r, nonwearMarkers: i, isInvalidNight: s, explicitNoNonwear: o }) => Cn(t, e, () => {
		if ("nonwear" === a) {
			const e = o ?? !1, t = e ? [] : (i ?? []).map((e, t) => ({
				...e,
				markerIndex: t + 1
			}));
			return { patch: {
				explicitNoNonwear: e,
				nonwearMarkers: t,
				selectedPeriodIndex: 0 === t.length ? null : 0,
				markerMode: "nonwear",
				creationMode: "idle",
				pendingOnsetTimestamp: null
			} };
		}
		const e = (r ?? []).map((e, t) => ({
			...e,
			markerIndex: t + 1
		}));
		return { patch: {
			isInvalidNight: s ?? !1,
			sleepMarkers: e,
			selectedPeriodIndex: 0 === e.length ? null : 0,
			markerMode: "sleep",
			proposalNight: null
		} };
	}, {
		night: _n(n),
		editsDisplayedSleep: "sleep" === a
	})
});
let jo = !1, Ko = !1, qo = null, Go = Promise.resolve();
async function Uo() {
	for (;;) {
		const e = Go;
		if (await e, e === Go) return;
	}
}
const Vo = (e, t) => ({
	currentFileId: null,
	currentFilename: null,
	currentDateIndex: 0,
	availableDates: [],
	availableFiles: [],
	currentFileSource: "server",
	currentFileSourceType: null,
	_dataRange: null,
	_viewWindow: null,
	setDataRange: (n, a = null) => {
		const r = (e, t) => null === e && null === t || null !== e && null !== t && e.min === t.min && e.max === t.max, { _dataRange: i, _viewWindow: s } = t();
		r(i, n) && r(s, a) || e({
			_dataRange: n,
			_viewWindow: a
		});
	},
	setCurrentFile: (n, a, r, i) => {
		if (Ko) return void (qo = [
			n,
			a,
			r,
			i
		]);
		if (t().isDirty) return Ko = !0, void (Go = (async () => {
			try {
				if (t().isDirty && !await (t()._flushSave ?? an)()) return;
				Ko = !1, t().setCurrentFile(n, a, r, i);
			} catch (s) {
				e({ saveError: `File switch save failed: ${tn(s)}` }), Ht("warn", "File switch save failed", Lt(s));
			} finally {
				Ko = !1;
				const e = qo;
				qo = null, e && t().setCurrentFile(...e);
			}
		})());
		const { currentFileId: s } = t(), o = s === n;
		rt.setContext(n, o ? t().availableDates[t().currentDateIndex] ?? null : null, t().username, t().selectedStudyId), e({
			currentFileId: n,
			currentFilename: a,
			currentFileSource: r,
			...void 0 !== i ? { currentFileSourceType: i } : {},
			currentDateIndex: o ? t().currentDateIndex : 0,
			creationMode: "idle",
			pendingOnsetTimestamp: null,
			...n !== s ? {
				sleepMarkers: [],
				nonwearMarkers: [],
				selectedPeriodIndex: null,
				isInvalidNight: !1,
				explicitNoNonwear: !1,
				availableDates: [],
				needsConsensus: !1,
				notes: "",
				isDirty: !1,
				markerHistory: [],
				markerHistoryIndex: -1,
				lastSavedAt: null,
				saveReceipt: null,
				nightLoading: !0
			} : {}
		});
	},
	clearFileSelection: () => e({
		currentFileId: null,
		markerHistory: [],
		markerHistoryIndex: -1,
		currentFilename: null,
		availableDates: [],
		currentDateIndex: 0,
		currentFileSourceType: null
	}),
	setAvailableFiles: (t) => e({ availableFiles: t }),
	setAvailableDates: (n) => {
		const { currentDateIndex: a, availableDates: r } = t(), i = n.length > 0 ? Math.min(a, n.length - 1) : 0;
		e({
			availableDates: n,
			currentDateIndex: i,
			...r[a] !== n[i] ? {
				markerHistory: [],
				markerHistoryIndex: -1,
				nightLoading: !0
			} : {}
		});
	},
	setCurrentDateIndex: (n) => jo ? Promise.resolve(!1) : (jo = !0, (async () => {
		try {
			Ro && t().commitDragTransaction(Ro.token);
			const { currentDateIndex: a, isDirty: r } = t();
			if (n === a) return !0;
			if (r) {
				if (!await (t()._flushSave ?? an)()) return !1;
			} else await Promise.resolve();
			Zt(t().notes), Ut("session_end");
			const i = t().availableDates[n] ?? null;
			return rt.setContext(t().currentFileId, i, t().username, t().selectedStudyId), e({
				currentDateIndex: n,
				sleepMarkers: [],
				nonwearMarkers: [],
				selectedPeriodIndex: null,
				isInvalidNight: !1,
				explicitNoNonwear: !1,
				needsConsensus: !1,
				notes: "",
				isDirty: !1,
				creationMode: "idle",
				pendingOnsetTimestamp: null,
				markerHistory: [],
				markerHistoryIndex: -1,
				lastSavedAt: null,
				saveReceipt: null,
				nightLoading: !0
			}), !0;
		} catch (a) {
			return e({ saveError: `Navigation save failed: ${tn(a)}` }), Ht("warn", "Date navigation save failed", Lt(a)), !1;
		} finally {
			jo = !1;
		}
	})()),
	navigateDate: (n) => {
		jo || (jo = !0, (async () => {
			try {
				Ro && t().commitDragTransaction(Ro.token);
				const a = t(), r = a.currentDateIndex + n;
				if (r < 0 || r >= a.availableDates.length) return;
				if (a.isDirty) {
					if (!await (a._flushSave ?? an)()) return;
				} else await Promise.resolve();
				const i = t(), s = i.currentDateIndex + n;
				if (s < 0 || s >= i.availableDates.length) return;
				Zt(t().notes), Ut("session_end");
				const o = i.availableDates[s] ?? null;
				rt.setContext(i.currentFileId, o, t().username, t().selectedStudyId), e({
					currentDateIndex: s,
					sleepMarkers: [],
					nonwearMarkers: [],
					selectedPeriodIndex: null,
					isInvalidNight: !1,
					explicitNoNonwear: !1,
					needsConsensus: !1,
					notes: "",
					isDirty: !1,
					creationMode: "idle",
					pendingOnsetTimestamp: null,
					markerHistory: [],
					markerHistoryIndex: -1,
					lastSavedAt: null,
					saveReceipt: null,
					nightLoading: !0
				});
			} catch (a) {
				e({ saveError: `Navigation save failed: ${tn(a)}` }), Ht("warn", "Date navigation save failed", Lt(a));
			} finally {
				jo = !1;
			}
		})());
	}
}), Bo = {
	ggirHasptVariant: p.ggir_haspt_variant,
	ggirHasibVariantsEnabled: p.ggir_hasib_variants_enabled,
	ggirHasibVariants: [...p.ggir_hasib_variants],
	ggirHasibCountSource: p.ggir_hasib_count_source,
	ggirHasibCountEpochSeconds: p.ggir_hasib_count_epoch_seconds
}, zo = new Set(C), Wo = new Set(y), $o = new Set(k);
function Qo(e) {
	const t = e ?? {}, n = t.ggir_haspt_variant, a = t.ggir_hasib_variants_enabled, r = t.ggir_hasib_variants, i = t.ggir_hasib_count_source, s = t.ggir_hasib_count_epoch_seconds, o = Array.isArray(r) ? Array.from(new Set(r.filter((e) => "string" == typeof e && Wo.has(e)))) : [...Bo.ggirHasibVariants];
	return {
		ggirHasptVariant: "string" == typeof n && zo.has(n) ? n : Bo.ggirHasptVariant,
		ggirHasibVariantsEnabled: "boolean" == typeof a ? a : Bo.ggirHasibVariantsEnabled,
		ggirHasibVariants: o,
		ggirHasibCountSource: "string" == typeof i && $o.has(i) ? i : Bo.ggirHasibCountSource,
		ggirHasibCountEpochSeconds: "number" == typeof s && Number.isInteger(s) && s >= 1 ? s : Bo.ggirHasibCountEpochSeconds
	};
}
function Jo(e) {
	const t = "HDCZA" === e.ggirHasptVariant ? void 0 : { variant: e.ggirHasptVariant }, n = e.ggirHasibVariantsEnabled && e.ggirHasibVariants.length > 0 ? {
		variants: [...e.ggirHasibVariants],
		countSource: e.ggirHasibCountSource,
		countEpochSeconds: e.ggirHasibCountEpochSeconds
	} : void 0;
	if (t || n) return {
		...t ? { hasptVariant: t } : {},
		...n ? { hasibVariants: n } : {}
	};
}
const Yo = (e, n, a) => ({
	preferredDisplayColumn: g.preferred_display_column,
	displayColumnChosenByUser: !1,
	viewModeHours: g.view_mode_hours,
	currentAlgorithm: g.default_algorithm,
	showAdjacentMarkers: !0,
	showNonwearOverlays: !0,
	showChoiNonwear: p.show_choi_nonwear,
	showLight: !1,
	showEventMarkers: !0,
	showAutoScoreProposal: !0,
	showDiaryOverlay: !1,
	autoScoreOnNavigate: !1,
	autoNonwearOnNavigate: !1,
	periodGuider: g.period_guider,
	sleepPeriodDetection: Ue,
	hideFilenames: !1,
	diaryDayBoundaryHour: g.diary_day_boundary_hour,
	diaryMainSleepDateRule: g.diary_main_sleep_date_rule,
	diaryNapDateRule: g.diary_nap_date_rule,
	diaryNonwearDateRule: g.diary_nonwear_date_rule,
	diaryDstFoldPolicy: g.diary_dst_fold_policy,
	diaryDstGapPolicy: g.diary_dst_gap_policy,
	sleepDetectionRule: g.sleep_detection_rule,
	placementRuleset: g.placement_ruleset,
	scorerPostprocessingPreset: T.NONE,
	extractionPath: U.number_60s_epochs,
	nonwearDetectorsCounts: [...g.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...g.nonwear_detectors_ggir],
	appliedStudySettingsAuthorityKey: null,
	appliedUserPreferencesKey: null,
	analysisParadigm: null,
	actiwareAnalysis: p.actiware_analysis,
	actiwareRestProposal: tt(p.actiware_rest_proposal),
	studyDeclaredFields: [],
	nightStartHour: g.night_start_hour,
	nightEndHour: g.night_end_hour,
	validDayCriteria: lt,
	physicalActivityMethod: p.physical_activity_method,
	physicalActivityCutpointOverrides: p.physical_activity_cutpoints,
	participantPopulation: p.participant_population,
	participantLaterality: p.participant_laterality,
	physicalActivityNonwearAsClass: p.physical_activity_nonwear_class,
	physicalActivityEnabledClasses: [...p.physical_activity_enabled_classes],
	physicalActivityMaskPolicy: p.physical_activity_mask_policy,
	selectedStudyId: null,
	devicePreset: x,
	epochLengthSeconds: g.epoch_length_seconds,
	skipRows: g.skip_rows,
	columnMapping: {
		date_column: "",
		time_column: "",
		datetime_column: "",
		activity_column: "",
		axis_x_column: "",
		axis_z_column: "",
		vector_magnitude_column: ""
	},
	preferredActivityColumn: g.preferred_display_column,
	choiAxis: g.choi_axis,
	choiVariant: c.BOTH,
	sensorLocation: p.sensor_location,
	...Bo,
	ggirConfig: Et,
	uploadProgress: null,
	uploadResult: null,
	isUploading: !1,
	localProcessingError: null,
	localBatchSummary: null,
	setPreferredDisplayColumn: (t) => e({
		preferredDisplayColumn: t,
		displayColumnChosenByUser: !0
	}),
	setViewModeHours: (t) => e({ viewModeHours: t }),
	setCurrentAlgorithm: (t) => e({
		currentAlgorithm: t,
		...t !== n().currentAlgorithm ? { displayColumnChosenByUser: !1 } : {}
	}),
	setShowAdjacentMarkers: (t) => e({ showAdjacentMarkers: t }),
	setShowNonwearOverlays: (t) => e({ showNonwearOverlays: t }),
	setShowChoiNonwear: (t) => e({ showChoiNonwear: t }),
	setShowLight: (t) => e({ showLight: t }),
	setShowEventMarkers: (t) => e({ showEventMarkers: t }),
	setShowAutoScoreProposal: (t) => e({ showAutoScoreProposal: t }),
	setShowDiaryOverlay: (t) => e({ showDiaryOverlay: t }),
	setAutoScoreOnNavigate: (t) => e({ autoScoreOnNavigate: t }),
	setAutoNonwearOnNavigate: (t) => e({ autoNonwearOnNavigate: t }),
	setHideFilenames: (t) => e({ hideFilenames: t }),
	setPeriodGuider: (t) => e({ periodGuider: t }),
	setDiaryDayBoundaryHour: (t) => e({ diaryDayBoundaryHour: t }),
	setDiaryMainSleepDateRule: (t) => e({ diaryMainSleepDateRule: t }),
	setDiaryNapDateRule: (t) => e({ diaryNapDateRule: t }),
	setDiaryNonwearDateRule: (t) => e({ diaryNonwearDateRule: t }),
	setDiaryDstFoldPolicy: (t) => e({ diaryDstFoldPolicy: t }),
	setDiaryDstGapPolicy: (t) => e({ diaryDstGapPolicy: t }),
	setSleepPeriodDetection: (t) => e((e) => ({ sleepPeriodDetection: Ke({
		...e.sleepPeriodDetection,
		...t
	}) })),
	setSleepDetectionRule: (t) => e({ sleepDetectionRule: t }),
	setPlacementRuleset: (t) => e({ placementRuleset: t }),
	setScorerPostprocessingPreset: (t) => e({ scorerPostprocessingPreset: t }),
	setExtractionPath: (t) => e({ extractionPath: t }),
	setNonwearDetectorsCounts: (t) => e({ nonwearDetectorsCounts: [...new Set(t)] }),
	setNonwearDetectorsGgir: (t) => e({ nonwearDetectorsGgir: [...new Set(t)] }),
	applyStudyScoringDefaults: (t) => e({
		...void 0 !== t.currentAlgorithm ? {
			currentAlgorithm: t.currentAlgorithm,
			...t.currentAlgorithm !== n().currentAlgorithm ? { displayColumnChosenByUser: !1 } : {}
		} : {},
		...void 0 !== t.nonwearDetectorsCounts ? { nonwearDetectorsCounts: [...t.nonwearDetectorsCounts] } : {},
		...void 0 !== t.nonwearDetectorsGgir ? { nonwearDetectorsGgir: [...t.nonwearDetectorsGgir] } : {},
		...void 0 !== t.studyDeclaredFields ? { studyDeclaredFields: [...t.studyDeclaredFields] } : {}
	}),
	setActiwareAnalysis: (t) => {
		e({ actiwareAnalysis: Ye(t) });
	},
	setActiwareRestProposal: (t) => {
		e({ actiwareRestProposal: tt(t) });
	},
	setAnalysisParadigm: (t) => {
		e({ analysisParadigm: Be(t) });
	},
	applyScoringRecipePatch: (t) => e(t),
	setNightHours: (t, n) => e({
		nightStartHour: t,
		nightEndHour: n
	}),
	setAppliedStudySettingsAuthorityKey: (t, n) => e({
		appliedStudySettingsAuthorityKey: t,
		analysisParadigm: Be(n)
	}),
	setValidDayCriteria: (t) => e((e) => ({ validDayCriteria: Un({
		...e.validDayCriteria,
		...t
	}) })),
	setPhysicalActivityMethod: (t) => {
		e({ physicalActivityMethod: t });
	},
	setPhysicalActivityCutpoints: (t, n) => e((e) => {
		const a = Object.fromEntries(Object.entries(e.physicalActivityCutpointOverrides).filter(([e]) => e !== t));
		return null !== n && (a[t] = n), { physicalActivityCutpointOverrides: a };
	}),
	setPhysicalActivityCutpointOverrides: (t) => {
		e({ physicalActivityCutpointOverrides: { ...t } });
	},
	setParticipantPopulation: (t) => {
		e({ participantPopulation: t });
	},
	setParticipantLaterality: (t) => {
		e({ participantLaterality: t });
	},
	setPhysicalActivityNonwearAsClass: (t) => {
		e({ physicalActivityNonwearAsClass: t });
	},
	setPhysicalActivityEnabledClasses: (t) => {
		e({ physicalActivityEnabledClasses: qt.filter((e) => t.includes(e)) });
	},
	setPhysicalActivityMaskPolicy: (t) => {
		e({ physicalActivityMaskPolicy: { ...t } });
	},
	setSelectedStudyId: (t) => nn(() => {
		const a = n();
		rt.setContext(a.currentFileId, a.availableDates[a.currentDateIndex] ?? null, a.username, t), e({ selectedStudyId: t });
	}),
	setDevicePreset: (t) => e({ devicePreset: t }),
	setEpochLengthSeconds: (t) => e({ epochLengthSeconds: t }),
	setSkipRows: (t) => e({ skipRows: t }),
	setColumnMapping: (t) => e({ columnMapping: t }),
	setPreferredActivityColumn: (t) => e({ preferredActivityColumn: t }),
	setChoiAxis: (t) => e({ choiAxis: t }),
	setSensorLocation: (t) => {
		e({ sensorLocation: t });
	},
	setChoiVariant: (t) => e({ choiVariant: t }),
	setGgirConfig: (t) => e({ ggirConfig: t }),
	setLocalGgirProcessingSettings: (t) => e((e) => ({
		ggirHasptVariant: t.ggirHasptVariant ?? e.ggirHasptVariant,
		ggirHasibVariantsEnabled: t.ggirHasibVariantsEnabled ?? e.ggirHasibVariantsEnabled,
		ggirHasibVariants: t.ggirHasibVariants ?? e.ggirHasibVariants,
		ggirHasibCountSource: t.ggirHasibCountSource ?? e.ggirHasibCountSource,
		ggirHasibCountEpochSeconds: t.ggirHasibCountEpochSeconds ?? e.ggirHasibCountEpochSeconds
	})),
	setUploadProgress: (t) => e({ uploadProgress: t }),
	setUploadResult: (t) => e({ uploadResult: t }),
	setIsUploading: (t) => e({ isUploading: t }),
	setLocalProcessingError: (t) => e({ localProcessingError: t }),
	setLocalBatchSummary: (t) => e({ localBatchSummary: t }),
	colorTheme: { ...Ln },
	setColorTheme: (t) => e((e) => ({ colorTheme: {
		...e.colorTheme,
		...t,
		preset: "custom"
	} })),
	applyColorPreset: (t) => {
		const n = jn[t];
		n && e({ colorTheme: { ...n } });
	},
	resetColorTheme: () => e({ colorTheme: { ...Ln } }),
	resetPersistedSlice: () => {
		J.setState({
			localProcessingProgress: null,
			isLocalProcessing: !1
		});
		const t = Hn(sn(a.getInitialState()));
		la(() => e({
			...t,
			sleepMarkers: [],
			nonwearMarkers: [],
			selectedPeriodIndex: null,
			isInvalidNight: !1,
			explicitNoNonwear: !1,
			needsConsensus: !1,
			notes: "",
			isDirty: !1,
			availableDates: [],
			markerHistory: [],
			markerHistoryIndex: -1,
			localProcessingError: null,
			localBatchSummary: null
		}));
	},
	resetRegistrySettings: (n) => {
		const a = {};
		for (const e of t) {
			if (!H[e].persisted) continue;
			const t = H[e].storeKeys.zustand;
			t && (a[t] = n[e]);
		}
		a.sleepPeriodDetection = Ke(n.sleep_period_detection), a.actiwareRestProposal = tt(n.actiware_rest_proposal), e(a);
	}
});
var Xo = o({
	NOTES_AUDIT_DEBOUNCE_MS: () => 1500,
	fileSwitchSettled: () => Uo,
	flushNotesAudit: () => Zt,
	flushSaveWithTimeout: () => rn,
	markerActionsWaiting: () => hn,
	markerCommitsSettled: () => fn,
	nightForNonwearApply: () => on,
	nightSessionStore: () => il,
	nightStateAfter: () => Gt,
	persistedStoreSlice: () => sn,
	recordShownNightEditsForTest: () => zt,
	rehydratePersistedStore: () => tl,
	reviveOpenCutpointBands: () => el,
	takeShownNightEdits: () => Bt,
	useColorTheme: () => rl,
	useDates: () => nl,
	useMarkers: () => al,
	useSleepScoringStore: () => Zo,
	withoutSessionIdentity: () => Hn
});
const Zo = re()(Q(de((e, t, n) => {
	const a = (n, a) => {
		const r = t(), i = "function" == typeof n ? n(r) : n;
		if (i === r) return e(r);
		const s = !i || !("isInvalidNight" in i) || i.isInvalidNight && "isInvalidNightImplicit" in i ? i : {
			...i,
			isInvalidNightImplicit: !1
		}, o = Fe(r, !1 === s?.placementRejected ? {
			...s,
			placementRejectionReason: null
		} : s);
		return a ? e(o, !0) : e(o);
	};
	return n.setState = a, {
		...Co(a, t),
		...Vo(a, t),
		...Lo(a, t),
		...Yo(a, t, n)
	};
}, {
	name: "sleep-scoring-storage",
	storage: W(() => va),
	skipHydration: !0,
	onRehydrateStorage: () => (e, t) => {
		t && Ht("warn", "Persisted store rehydration failed", Lt(t));
	},
	partialize: (e) => sn(e),
	merge: (e, a) => {
		const r = {
			...a,
			...e
		};
		e && "object" == typeof e && "sitePassword" in e && (r.sitePassword = null), r.sleepPeriodDetection = Ke(r.sleepPeriodDetection), r.validDayCriteria = Un(r.validDayCriteria), r.physicalActivityCutpointOverrides = el(r.physicalActivityCutpointOverrides);
		const i = r;
		for (const s of t) {
			if (!s.startsWith("diary_")) continue;
			const e = H[s].storeKeys.zustand;
			e && null !== n(s, i[e]) && (i[e] = p[s]);
		}
		return r.colorTheme = function(e) {
			if (!e || "object" != typeof e) return { ...Ln };
			const t = jn[e.preset];
			return t ? { ...t } : { ...e };
		}(r.colorTheme), r;
	}
}), { name: "SleepScoringStore" }));
function el(e) {
	const t = {};
	for (const [n, a] of Object.entries(e ?? {})) {
		const e = a;
		t[n] = {
			...a,
			moderateMin: e.moderateMin ?? Number.POSITIVE_INFINITY,
			vigorousMin: e.vigorousMin ?? Number.POSITIVE_INFINITY
		};
	}
	return t;
}
async function tl(e) {
	await Zo.persist.rehydrate();
	const t = Zo.getState(), n = e ?? t.username;
	(t.isAuthenticated || void 0 !== e) && n && rt.setContext(t.currentFileId, t.availableDates[t.currentDateIndex] ?? null, n, t.selectedStudyId);
	const { cutpointOverrides: a } = await async function(e, t) {
		const n = { cutpointOverrides: null };
		if (null === e || "" === e) return n;
		const a = function(e) {
			return `sleep-scoring:legacy-device-settings:adopted:${e}`;
		}(e);
		if (null !== js(a)) return n;
		try {
			const e = t ? await ks(t) : await ks(), n = e?.extraSettings ?? {}, r = {}, i = function() {
				const e = js("sleep-scoring:sensor-location:selected");
				return "wrist" === e || "hip" === e ? e : null;
			}();
			null !== i && void 0 === n.sensor_location && (r.sensor_location = i);
			const s = function() {
				const e = js("sleep-scoring:lstm-onnx:selected-model");
				if (null === e || "" === e) return null;
				const t = js(`sleep-scoring:lstm-onnx:threshold:${e}`), n = null === t ? NaN : Number(t);
				return {
					modelId: e,
					threshold: Number.isFinite(n) ? n : null
				};
			}();
			if (null !== s && void 0 === n.lstm_model_selection && (r.lstm_model_selection = {
				modelId: s.modelId,
				threshold: s.threshold
			}), Object.keys(r).length > 0) {
				const n = {
					sleepDetectionRule: e?.sleepDetectionRule ?? "",
					nightStartHour: e?.nightStartHour ?? "",
					nightEndHour: e?.nightEndHour ?? "",
					defaultAlgorithm: e?.defaultAlgorithm ?? "",
					extraSettings: r
				};
				t ? await Ds(n, t) : await Ds(n);
			}
			const o = function(e = localStorage) {
				const t = ct(e), n = {};
				for (const a of t) n[a.method] = a.thresholds;
				return Object.keys(n).length > 0 ? n : null;
			}();
			try {
				localStorage.setItem(a, (/* @__PURE__ */ new Date()).toISOString());
			} catch {}
			return { cutpointOverrides: o };
		} catch (r) {
			return Ht("warn", "Adopting legacy device settings into the workspace failed", Lt(r)), n;
		}
	}(Y());
	null !== a && Zo.setState((e) => ({ physicalActivityCutpointOverrides: {
		...a,
		...e.physicalActivityCutpointOverrides
	} }));
	const { resetPersistedAlgorithmNonwear: r } = await import("./pa-mask-nonwear-reset-D-gNRiAX.js");
	await r(Y(), Zo.getState().physicalActivityMaskPolicy, (e) => {
		Zo.setState({ physicalActivityMaskPolicy: e });
	});
}
ye(() => Zo.getState());
const nl = () => Zo(Us((e) => ({
	currentDateIndex: e.currentDateIndex,
	availableDates: e.availableDates,
	currentDate: e.availableDates[e.currentDateIndex] ?? null,
	setAvailableDates: e.setAvailableDates,
	setCurrentDateIndex: e.setCurrentDateIndex,
	navigateDate: e.navigateDate
}))), al = () => Zo(Us((e) => ({
	sleepMarkers: e.sleepMarkers,
	nonwearMarkers: e.nonwearMarkers,
	isDirty: e.isDirty,
	selectedPeriodIndex: e.selectedPeriodIndex,
	isInvalidNight: e.isInvalidNight,
	explicitNoNonwear: e.explicitNoNonwear,
	needsConsensus: e.needsConsensus,
	notes: e.notes,
	markerMode: e.markerMode,
	creationMode: e.creationMode,
	pendingOnsetTimestamp: e.pendingOnsetTimestamp,
	placementRejected: e.placementRejected,
	placementRejectionReason: e.placementRejectionReason,
	isSaving: e.isSaving,
	lastSavedAt: e.lastSavedAt,
	saveError: e.saveError,
	setSleepMarkers: e.setSleepMarkers,
	setNonwearMarkers: e.setNonwearMarkers,
	setSelectedPeriod: e.setSelectedPeriod,
	setIsInvalidNight: e.setIsInvalidNight,
	setExplicitNoNonwear: e.setExplicitNoNonwear,
	setNeedsConsensus: e.setNeedsConsensus,
	setNotes: e.setNotes,
	setMarkerMode: e.setMarkerMode,
	handlePlotClick: e.handlePlotClick,
	cancelMarkerCreation: e.cancelMarkerCreation,
	addSleepMarker: e.addSleepMarker,
	addNonwearMarker: e.addNonwearMarker,
	updateMarker: e.updateMarker,
	deleteMarker: e.deleteMarker,
	splitSleepPeriod: e.splitSleepPeriod,
	mergeSleepPeriod: e.mergeSleepPeriod,
	setSaveError: e.setSaveError,
	undo: e.undo,
	redo: e.redo,
	canUndo: e.canUndo,
	canRedo: e.canRedo
}))), rl = () => Zo(Us((e) => ({
	colorTheme: e.colorTheme,
	setColorTheme: e.setColorTheme,
	applyColorPreset: e.applyColorPreset,
	resetColorTheme: e.resetColorTheme
}))), il = {
	getState: Zo.getState,
	getInitialState: () => Zo.getInitialState(),
	flushNotesAudit: () => Zt(Zo.getState().notes),
	setState: Zo.setState,
	takeShownEdits: (e) => (Zt(Zo.getState().notes), Bt({
		store: e.db?.name ?? null,
		actor: e.scope.actor,
		fileId: e.fileId,
		date: e.date
	}, e))
};
jt = {
	store: Zo,
	session: il
};
export { Ms as $, Lt as $t, ms as A, Ha as At, Rs as B, ba as Bt, Os as C, ar as Ct, fs as D, Za as Dt, Hs as E, Ja as Et, ds as F, Va as Ft, cs as G, ta as Gt, Ds as H, _a as Ht, Es as I, Ba as It, xs as J, Qn as Jt, Ls as K, Jn as Kt, As as L, Ra as Lt, Bi as M, $a as Mt, ji as N, Ga as Nt, Ki as O, Ya as Ot, ks as P, ja as Pt, Xi as Q, fn as Qt, Fs as R, Fa as Rt, us as S, or as St, hs as T, Xa as Tt, os as U, Zn as Ut, Zi as V, Da as Vt, es as W, ra as Wt, Hi as X, Vn as Xt, Ci as Y, aa as Yt, Ji as Z, Un as Zt, rs as _, kr as _t, Jo as a, Mt as an, di as at, Cs as b, vr as bt, bi as c, ri as ct, as as d, Hr as dt, Ht as en, ts as et, Ss as f, Lr as ft, Gi as g, Pr as gt, qi as h, Fr as ht, Qo as i, At as in, ci as it, ss as j, La as jt, Ui as k, Wa as kt, Yi as l, Vr as lt, Ri as m, Tr as mt, Xo as n, Nt as nn, fi as nt, gi as o, vt as on, ai as ot, yi as p, Cr as pt, Ns as q, ea as qt, Zo as r, Pt as rn, mi as rt, Si as s, ni as st, il as t, Ot as tn, gs as tt, Fi as u, Ur as ut, Vi as v, br as vt, ls as w, sr as wt, ys as x, wr as xt, ws as y, Ir as yt, Ts as z, Pa as zt };
