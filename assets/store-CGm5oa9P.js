import { Bt as e, Cn as t, Dn as n, En as a, Ft as r, In as i, Lt as s, Mn as o, Nn as l, On as c, Pt as d, Qt as u, Rn as p, Tn as m, Ut as h, Vt as y, Wt as f, X as g, _ as w, an as v, bn as _, f as S, fn as I, gn as k, hn as D, i as b, kn as M, l as E, n as A, r as P, t as N, tn as T, un as x, v as F, w as C, wn as R, xn as O, yn as H, zt as L } from "./schema-MMK46mR-.js";
import { r as j } from "./workers-B1E_CQH7.js";
import { l as K } from "./legacy-invalid-night-zjKZRSNb.js";
import { $ as q, C as G, D as V, G as U, I as z, K as W, L as $, O as Q, Q as J, R as Y, U as X, V as Z, W as ee, Z as te, a as ne, ct as ae, ft as re, it as ie, j as se, n as oe, st as le, t as ce, w as de, x as ue, z as pe } from "./workspace-db-YhWSrcvp.js";
import { c as me, o as he, s as ye } from "./content-hash-D4_ZE65l.js";
import { C as fe, i as ge, n as we } from "./background-jobs-Dz-LteaG.js";
import { a as ve, i as _e } from "./project-revision-CUz5eq5n.js";
import { B as Se, G as Ie, H as ke, K as De, R as be, T as Me, V as Ee, W as Ae, _ as Ne, a as Te, c as xe, g as Fe, i as Ce, j as Re, l as Oe, m as He, o as Le, q as je, t as Ke, u as qe, v as Ge, x as Ve } from "./night-session-registry-Ds5SlWLP.js";
import { G as Ue, Q as Be, S as ze, Y as We, a as $e, at as Qe, bt as Je, ct as Ye, f as Xe, ht as Ze, it as et, m as tt, nt, o as at, ot as rt, tt as it } from "./per-source-defaults-CxbMEjO8.js";
import { i as st } from "./preset-families-HrBVMIi7.js";
import { t as ot } from "./store-lifecycle-CBdMPA62.js";
import { a as lt, t as ct } from "./audit-log-BT8eFzV0.js";
import "./audit-hash-B_VayGEe.js";
import { i as dt, n as ut, t as pt } from "./wal-Bu50KF-H.js";
import { r as mt, t as ht } from "./diagnostic-log-DgP2mz8K.js";
import { f as yt, t as ft } from "./physical-activity-cutpoint-presets-DknwgBpP.js";
import { _ as gt, c as wt, d as vt, f as _t, i as St, o as It, p as kt } from "./diary-local-import-contract-DjaiAxQT.js";
import "./pre-migration-backup-CdsOi_gM.js";
Object.values({
	CAPACITY: "capacity",
	INTEGRITY: "integrity",
	VERIFICATION: "verification",
	OTHER: "other"
});
var Dt = class extends Error {
	name = "BackupCapacityError";
	reason;
	constructor(e) {
		super(`Backup ${"source" === e ? "file" : "expanded data"} exceeds the local byte limit.`), this.reason = e;
	}
};
const bt = new Uint8Array([31, 139]);
function Mt(e) {
	let t = 0;
	for (const r of e) t += r.length;
	const n = new Uint8Array(t);
	let a = 0;
	for (const r of e) n.set(r, a), a += r.length;
	return n;
}
async function Et(e, t) {
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
			const a = e instanceof Uint8Array ? new Blob([e]) : e, r = new Uint8Array(await a.slice(0, bt.length).arrayBuffer());
			n?.throwIfAborted();
			let i = a.stream();
			if ((s = r).length >= 2 && s[0] === bt[0] && s[1] === bt[1]) {
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
					if (c += e.byteLength, c > t) throw new Dt("expanded");
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
var At = "argument,value,context\ndatadir,,not applicable\ndo.report,\"c(2,4,5,6)\",not applicable\nf0,1,not applicable\nf1,542,not applicable\nmode,\"c(1,2,3,4,5,6)\",not applicable\noutputdir,,not applicable\nrawaccfiles_formats,csv,not applicable\nstudyname,,not applicable\nGGIRread_version,could not extract version,not applicable\nGGIRversion,3.0.0,not applicable\nR_version,R version 4.4.3 (2025-02-28),not applicable\nqwindow,\"c(0,24)\",params_247\nqlevels,\"c(0.958333333333333,0.979166666666667,0.993055555555556)\",params_247\nqwindow_dateformat,%d-%m-%Y,params_247\nilevels,c(),params_247\nIVIS_windowsize_minutes,60,params_247\nIVIS_epochsize_seconds,c(),params_247\nIVIS.activity.metric,2,params_247\nIVIS_acc_threshold,20,params_247\nqM5L5,c(),params_247\nMX.ig.min.dur,10,params_247\nM5L5res,10,params_247\nwinhr,\"c(5,10)\",params_247\niglevels,\"c(0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1025,1050,1075,1100,1125,1150,1175,1200,1225,1250,1275,1300,1325,1350,1375,1400,1425,1450,1475,1500,1525,1550,1575,1600,1625,1650,1675,1700,1725,1750,1775,1800,1825,1850,1875,1900,1925,1950,1975,2000,2025,2050,2075,2100,2125,2150,2175,2200,2225,2250,2275,2300,2325,2350,2375,2400,2425,2450,2475,2500,2525,2550,2575,2600,2625,2650,2675,2700,2725,2750,2775,2800,2825,2850,2875,2900,2925,2950,2975,3000,3025,3050,3075,3100,3125,3150,3175,3200,3225,3250,3275,3300,3325,3350,3375,3400,3425,3450,3475,3500,3525,3550,3575,3600,3625,3650,3675,3700,3725,3750,3775,3800,3825,3850,3875,3900,3925,3950,3975,4000,8000)\",params_247\nLUXthresholds,\"c(0,100,500,1000,3000,5000,10000)\",params_247\nLUX_cal_constant,c(),params_247\nLUX_cal_exponent,c(),params_247\nLUX_day_segments,c(),params_247\nwindow.summary.size,10,params_247\nL5M5window,\"c(0,24)\",params_247\ncosinor,TRUE,params_247\nincludedaycrit,1,params_cleaning\nndayswindow,7,params_cleaning\nstrategy,1,params_cleaning\nmaxdur,0,params_cleaning\nhrs.del.start,0,params_cleaning\nhrs.del.end,0,params_cleaning\nincludedaycrit.part5,0.083333333,params_cleaning\nexcludefirstlast.part5,FALSE,params_cleaning\nTimeSegments2ZeroFile,c(),params_cleaning\ndo.imp,TRUE,params_cleaning\ndata_cleaning_file,c(),params_cleaning\nminimum_MM_length.part5,23,params_cleaning\nexcludefirstlast,FALSE,params_cleaning\nincludenightcrit,1,params_cleaning\nexcludefirst.part4,FALSE,params_cleaning\nexcludelast.part4,FALSE,params_cleaning\nmax_calendar_days,0,params_cleaning\nnonWearEdgeCorrection,TRUE,params_cleaning\nnonwear_approach,2023,params_cleaning\nsegmentWEARcrit.part5,0.5,params_cleaning\nsegmentDAYSPTcrit.part5,\"c(0.9,0)\",params_cleaning\noverwrite,FALSE,params_general\nacc.metric,ENMO,params_general\nmaxNcores,c(),params_general\nprint.filename,FALSE,params_general\ndo.parallel,TRUE,params_general\nwindowsizes,\"c(5,900,3600)\",params_general\ndesiredtz,EST,params_general\nconfigtz,c(),params_general\nidloc,1,params_general\ndayborder,0,params_general\npart5_agg2_60seconds,FALSE,params_general\nsensor.location,wrist,params_general\nexpand_tail_max_hours,c(),params_general\nrecordingEndSleepHour,c(),params_general\ndataFormat,raw,params_general\nmaxRecordingInterval,c(),params_general\nextEpochData_timeformat,%d-%m-%Y %H:%M:%S,params_general\ndo.anglex,FALSE,params_metrics\ndo.angley,FALSE,params_metrics\ndo.anglez,TRUE,params_metrics\ndo.zcx,FALSE,params_metrics\ndo.zcy,FALSE,params_metrics\ndo.zcz,FALSE,params_metrics\ndo.enmo,TRUE,params_metrics\ndo.lfenmo,FALSE,params_metrics\ndo.en,FALSE,params_metrics\ndo.mad,FALSE,params_metrics\ndo.enmoa,FALSE,params_metrics\ndo.roll_med_acc_x,FALSE,params_metrics\ndo.roll_med_acc_y,FALSE,params_metrics\ndo.roll_med_acc_z,FALSE,params_metrics\ndo.dev_roll_med_acc_x,FALSE,params_metrics\ndo.dev_roll_med_acc_y,FALSE,params_metrics\ndo.dev_roll_med_acc_z,FALSE,params_metrics\ndo.bfen,FALSE,params_metrics\ndo.hfen,FALSE,params_metrics\ndo.hfenplus,FALSE,params_metrics\ndo.lfen,FALSE,params_metrics\ndo.lfx,FALSE,params_metrics\ndo.lfy,FALSE,params_metrics\ndo.lfz,FALSE,params_metrics\ndo.hfx,FALSE,params_metrics\ndo.hfy,FALSE,params_metrics\ndo.hfz,FALSE,params_metrics\ndo.bfx,FALSE,params_metrics\ndo.bfy,FALSE,params_metrics\ndo.bfz,FALSE,params_metrics\ndo.brondcounts,FALSE,params_metrics\ndo.neishabouricounts,FALSE,params_metrics\nhb,15,params_metrics\nlb,0.2,params_metrics\nn,4,params_metrics\nzc.lb,0.25,params_metrics\nzc.hb,3,params_metrics\nzc.sb,0.01,params_metrics\nzc.order,2,params_metrics\nzc.scale,1,params_metrics\nactilife_LFE,FALSE,params_metrics\nepochvalues2csv,FALSE,params_output\nsave_ms5rawlevels,TRUE,params_output\nsave_ms5raw_format,csv,params_output\nsave_ms5raw_without_invalid,TRUE,params_output\nstorefolderstructure,FALSE,params_output\ntimewindow,WW,params_output\nviewingwindow,1,params_output\ndofirstpage,TRUE,params_output\nvisualreport,TRUE,params_output\nweek_weekend_aggregate.part5,FALSE,params_output\ndo.part3.pdf,TRUE,params_output\noutliers.only,TRUE,params_output\ncriterror,4,params_output\ndo.visual,TRUE,params_output\ndo.sibreport,FALSE,params_output\ndo.part2.pdf,TRUE,params_output\nsep_reports,\",\",params_output\nsep_config,\",\",params_output\nvisualreport_without_invalid,FALSE,params_output\nmvpathreshold,100,params_phyact\nboutcriter,0.8,params_phyact\nmvpadur,\"c(1,5,10)\",params_phyact\nboutcriter.in,0.9,params_phyact\nboutcriter.lig,0.8,params_phyact\nboutcriter.mvpa,0.8,params_phyact\nthreshold.lig,30,params_phyact\nthreshold.mod,100,params_phyact\nthreshold.vig,400,params_phyact\nboutdur.mvpa,\"c(1,5,10)\",params_phyact\nboutdur.in,\"c(1,10,30)\",params_phyact\nboutdur.lig,\"c(1,10,30)\",params_phyact\nfrag.metrics,all,params_phyact\nchunksize,1,params_rawdata\nspherecrit,0.3,params_rawdata\nminloadcrit,72,params_rawdata\nprintsummary,FALSE,params_rawdata\ndo.cal,TRUE,params_rawdata\nbackup.cal.coef,retrieve,params_rawdata\ndynrange,c(),params_rawdata\nminimumFileSizeMB,2,params_rawdata\nrmc.dec,.,params_rawdata\nrmc.firstrow.acc,c(),params_rawdata\nrmc.firstrow.header,c(),params_rawdata\nrmc.header.length,c(),params_rawdata\nrmc.col.acc,\"c(1,2,3)\",params_rawdata\nrmc.col.temp,c(),params_rawdata\nrmc.col.time,c(),params_rawdata\nrmc.unit.acc,g,params_rawdata\nrmc.unit.temp,C,params_rawdata\nrmc.unit.time,POSIX,params_rawdata\nrmc.format.time,%Y-%m-%d %H:%M:%OS,params_rawdata\nrmc.bitrate,c(),params_rawdata\nrmc.dynamic_range,c(),params_rawdata\nrmc.unsignedbit,TRUE,params_rawdata\nrmc.origin,1/1/1970,params_rawdata\nrmc.desiredtz,c(),params_rawdata\nrmc.configtz,c(),params_rawdata\nrmc.sf,c(),params_rawdata\nrmc.headername.sf,c(),params_rawdata\nrmc.headername.sn,c(),params_rawdata\nrmc.headername.recordingid,c(),params_rawdata\nrmc.header.structure,c(),params_rawdata\nrmc.check4timegaps,FALSE,params_rawdata\nrmc.noise,13,params_rawdata\nrmc.col.wear,c(),params_rawdata\nrmc.doresample,FALSE,params_rawdata\ninterpolationType,1,params_rawdata\nimputeTimegaps,TRUE,params_rawdata\nfrequency_tol,0.1,params_rawdata\nrmc.scalefactor.acc,1,params_rawdata\nanglethreshold,5,params_sleep\ntimethreshold,5,params_sleep\nignorenonwear,TRUE,params_sleep\nconstrain2range,TRUE,params_sleep\nHASPT.algo,HDCZA,params_sleep\nHASIB.algo,vanHees2015,params_sleep\nSadeh_axis,,params_sleep\nlongitudinal_axis,c(),params_sleep\nHASPT.ignore.invalid,FALSE,params_sleep\nloglocation,c(),params_sleep\ncolid,1,params_sleep\ncoln1,2,params_sleep\nnnights,c(),params_sleep\nrelyonguider,FALSE,params_sleep\ndef.noc.sleep,1,params_sleep\nsleeplogsep,c(),params_sleep\nsleepwindowType,SPT,params_sleep\npossible_nap_window,\"c(9,18)\",params_sleep\npossible_nap_dur,\"c(15,240)\",params_sleep\n";
const Pt = "sleep-scoring:core-answer:", Nt = /* @__PURE__ */ new Map();
let Tt = null;
function xt(e) {
	if (Tt) return Tt;
	const t = [];
	Tt = t;
	try {
		const n = globalThis.localStorage, a = Array.from({ length: n.length }, (e, t) => n.key(t) ?? "");
		for (const r of a) r.startsWith(Pt) && (r.startsWith(`${Pt}${e}:`) ? t.push(r) : n.removeItem(r));
	} catch {}
	return t;
}
function Ft(e, t, n) {
	const a = "2a2597e78388e21e15afcdc466b0fae5cd2a42ac0ddc3b06f4eb39e644efeed9";
	xt(a);
	const r = `${Pt}${a}:${e}:${t}`;
	let i = Nt.get(r);
	if (!i && (i = (async () => {
		try {
			const e = globalThis.localStorage?.getItem(r);
			if (e) return JSON.parse(e);
		} catch {}
		const e = await n();
		try {
			globalThis.localStorage?.setItem(r, JSON.stringify(e)), function(e, t) {
				const n = xt(e);
				for (n.includes(t) || n.push(t); n.length > 1e3;) {
					const e = n.shift();
					try {
						e && globalThis.localStorage?.removeItem(e);
					} catch {}
				}
			}(a, r);
		} catch {}
		return e;
	})(), i.catch(() => Nt.delete(r)), Nt.set(r, i), Nt.size > 1e3)) {
		const e = Nt.keys().next();
		e.done || Nt.delete(e.value);
	}
	return i;
}
const Ct = Object.freeze({
	name: "default ELEMENT",
	sha256: me(At),
	csvText: At
});
function Rt(e) {
	const t = e?.ggir_config;
	if (t && "object" == typeof t) {
		const e = t;
		if ("string" == typeof e.name && "string" == typeof e.csvText && "string" == typeof e.sha256 && me(e.csvText) === e.sha256) return e;
	}
	return Ct;
}
function Ot(e, t) {
	const n = /^"?Sadeh_axis"?,\s*"?([XYZ])"?,/m.exec(e)?.[1] ?? "Y";
	return t?.[{
		X: 0,
		Y: 1,
		Z: 2
	}[n]];
}
function Ht(e, t, n) {
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
const Lt = {
	[se.van_hees_2013]: "2013",
	[se.van_hees_2023]: "2023"
};
async function jt(e, t) {
	return Ft("ggir-part2-nonwear", me(e ?? ""), async () => (await t.ggirAppConfigSummary(e, !0)).applied.nonwearApproach === Lt.van_hees_2013 ? se.van_hees_2013 : se.van_hees_2023);
}
let Kt = null;
function qt() {
	if (null === Kt) throw new Error("The scoring store is used before store/index.ts created it.");
	return Kt;
}
const Gt = a.physical_activity_enabled_classes;
function Vt() {
	const e = xn?.state ?? qt().store.getState();
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
	const a = qt().store.getState().lastSavedAt, r = n?.night ?? xn ?? void 0, i = n?.after ?? r?.state ?? Vt(), s = {
		...i,
		saved: r?.state ? r.state.saved : null === a ? null : {
			at: a,
			sleepCount: i.sleepMarkers.length,
			nonwearCount: i.nonwearMarkers.length
		}
	}, o = ke(e, {
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
	if (!lt(e)) return void ct.recordAppEvent(e, l);
	const c = qt().store.getState(), d = r?.fileId ?? c.currentFileId, u = r?.analysisDate ?? c.availableDates[c.currentDateIndex];
	if (null == d || !u) return;
	const p = {
		store: void 0 !== r?.store ? r.store : oe() ? ce().name : null,
		actor: r?.actor ?? (c.username || "anonymous"),
		fileId: d,
		date: u,
		action: e,
		payload: l,
		binding: r?.binding ?? null
	};
	r?.state ? (r.edits ??= []).push(p) : Bt.push({
		identity: Ke(c),
		edit: p
	});
}
let Bt = [];
function zt(e, t) {
	const n = (n) => {
		return (a = n.edit).actor === e.actor && a.fileId === e.fileId && a.date === e.date && (null === e.store || null === a.store || a.store === e.store) && (!t || xe(n.identity, t));
		var a;
	}, a = Bt.filter(n);
	return a.length > 0 && (Bt = Bt.filter((e) => !n(e))), a.map((e) => e.edit);
}
function Wt() {
	const e = Bt;
	Bt = [];
	for (const { edit: t } of e) Ve(t);
}
const $t = "This view is read-only. Its markers cannot be edited.", Qt = "Offset must be after onset";
function Jt(e, t, n) {
	Ut("transition_flagged", {
		intent: e,
		guard: t,
		disposition: "refused_by_store"
	}, n ? { night: n } : void 0);
}
let Yt = null, Xt = null;
function Zt(e, t = Xt?.value ?? "", n) {
	if (!n && t !== e && Xt?.identity && !xe(Xt.identity, Ke(qt().store.getState()))) throw new Error("The notes audit has lost its owning night.");
	n || (Xt = null), t !== e && Ut("notes_changed", {
		before: t,
		after: e,
		beforeLength: t.length,
		afterLength: e.length
	}, n ? { night: n } : void 0);
}
function en(e) {
	null !== Yt && (clearTimeout(Yt), Yt = null, Zt(e));
}
function tn(e, t) {
	return !(e.length > 0) && t;
}
function nn(e) {
	return e instanceof Error ? e.message : "Unknown error";
}
function an(e) {
	return import("./workspace-switch-8eKTWnSi.js").then((e) => e.t).then(({ runWorkspaceScopeChange: t }) => t(e));
}
async function rn() {
	return (await import("./night-session-DNvyyJTB.js").then((e) => e.t)).flushCurrentNight();
}
async function sn(e) {
	let t;
	try {
		return await Promise.race([e(), new Promise((e) => {
			t = setTimeout(() => e(!1), 1e4);
		})]);
	} finally {
		void 0 !== t && clearTimeout(t);
	}
}
function on(e) {
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
function ln(e, t) {
	const n = e.availableDates[e.currentDateIndex] ?? "";
	return {
		sleepMarkers: Oe(e.proposalNight, e.currentFileId ?? -1, n, { sleepMarkers: e.sleepMarkers }).sleepMarkers,
		nonwearMarkers: t,
		isInvalidNight: e.isInvalidNight,
		explicitNoNonwear: tn(t, e.explicitNoNonwear)
	};
}
function cn(e) {
	const { sleepMarkers: t, nonwearMarkers: n, isInvalidNight: a, explicitNoNonwear: r, needsConsensus: i, notes: s, selectedPeriodIndex: o, markerHistory: l, markerHistoryIndex: c, _editGeneration: d } = e, u = {
		proposalNight: e.proposalNight,
		sleepMarkers: t.map((e) => Fe(e)),
		nonwearMarkers: n.map((e) => Fe(e)),
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
function dn(e, t, n) {
	return t.map((t) => {
		const a = t.sourceRecordReference;
		if (void 0 === a || a === n) return t;
		const r = e.find((e) => e.sourceRecordReference === a);
		if (r && r.onsetTimestamp === t.onsetTimestamp && r.offsetTimestamp === t.offsetTimestamp && r.markerType === t.markerType) return t;
		const i = { ...t };
		return delete i.sourceRecordReference, i;
	});
}
function un(e) {
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
function pn(e, t) {
	const { patch: n } = t, { isInvalidNightImplicit: a, ...r } = e, i = n.isInvalidNight ?? (!n.sleepMarkers?.some(nt) && e.isInvalidNight), s = i && (void 0 === n.isInvalidNight ? !0 === e.isInvalidNightImplicit : !0 === n.isInvalidNightImplicit);
	return {
		...r,
		sleepMarkers: dn(t.since ?? e.sleepMarkers, n.sleepMarkers ?? e.sleepMarkers, t.placesReference),
		nonwearMarkers: n.nonwearMarkers ?? e.nonwearMarkers,
		isInvalidNight: i,
		...s ? { isInvalidNightImplicit: !0 } : {},
		explicitNoNonwear: n.explicitNoNonwear ?? e.explicitNoNonwear
	};
}
function mn(e, t, { date: n, offscreen: a, stepSec: r }) {
	const i = (e) => `${qe(e.onsetTimestamp, r)}–${qe(e.offsetTimestamp, r)}`, s = t.removed.map((t) => {
		const n = e.sleepMarkers[t];
		return nt(n) ? `main sleep ${i(n)} removed` : `nap ${i(n)} removed`;
	});
	return t.invalidates && !t.removed.some((t) => nt(e.sleepMarkers[t])) && s.unshift("GGIR main sleep removed"), `Manual nonwear lies inside a sleep period: ${s.join(", ")}${t.invalidates ? `; ${n || "this night"} is now an Invalid night` : ""}.${a ? "" : " Undo restores it."}`;
}
function hn(e, t, n, a) {
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
function yn() {
	return Le.waiting();
}
function fn() {
	return Le.settled();
}
function gn(e, t, n = !1) {
	const a = Le.executor(t.session);
	return a ? Promise.resolve(a(e)) : Le.enqueue(t.session, (n) => (t.session = n, e()), n, qt().session);
}
function wn(e, t, n) {
	const a = ("sleep" === t ? e.sleepMarkers : e.nonwearMarkers)[n];
	return a ? Ne(a) : null;
}
function vn(e, t, n) {
	return null === n ? -1 : ("sleep" === t ? e.sleepMarkers : e.nonwearMarkers).findIndex((e) => Ne(e) === n);
}
function _n(e) {
	return {
		fileId: e.fileId,
		analysisDate: e.date,
		binding: null,
		actor: e.identity.scope.actor,
		store: e.identity.db?.name ?? null,
		state: {
			...Le.night(e),
			saved: null
		}
	};
}
function Sn(e) {
	return {
		session: e,
		context: e.context
	};
}
function In(e) {
	return null !== e.session && Le.holds(e.session, qt().store.getState());
}
function kn(e) {
	return !!qt().store.getState().nightLoading && (mt("info", "Marker edit refused: the night is still loading", { action: e }), !0);
}
function Dn(e, t, n, { night: a, preview: r = !1 }) {
	if (kn("marker_action") && !a.session) return Promise.resolve();
	const i = () => {
		const i = In(a) ? e() : {
			...Le.context(a.session),
			...Le.night(a.session)
		};
		let s = i, o = {};
		const l = {
			fileId: a.session.fileId,
			analysisDate: a.session.date,
			binding: null,
			actor: a.session.identity.scope.actor,
			store: a.session.identity.db?.name ?? null,
			state: {
				...un(s),
				saved: null
			}
		}, c = (e) => {
			o = {
				...o,
				...e
			}, s = Ge(s, {
				...s,
				...e
			}), l.state = {
				...un(s),
				saved: null
			};
		};
		xn = l;
		try {
			n(() => s, c);
		} finally {
			xn = null;
		}
		const d = () => {
			for (const t of l.edits ?? []) xn?.state ? (xn.edits ??= []).push(t) : Bt.push({
				identity: Ke(e()),
				edit: t
			});
		};
		if (!r && ("sleepMarkers" in o || "isInvalidNight" in o)) return Cn(e, t, {
			night: a,
			editsDisplayedSleep: !0,
			propose: () => ({
				patch: o,
				snapshot: !1,
				dirty: !1,
				record: d
			})
		}).then(() => {});
		In(a) ? (t(o), d()) : (Le.updateContext(a.session, s), s._editGeneration !== i._editGeneration && Le.write(a.session, un(s), l.edits ?? [], s));
	}, s = Le.executor(a.session);
	return Promise.resolve(s ? s(i) : gn(i, a, r));
}
function bn(e, t) {
	mt("warn", "Marker action dropped: its marker is gone", {
		category: e,
		targeted: null !== t
	});
}
function Mn(e) {
	return at($e(e.context), e.context.analysisParadigm);
}
function En(e, t) {
	const n = {
		placementRejected: !0,
		placementRejectionReason: t
	};
	Le.holds(e, qt().store.getState()) ? qt().store.setState(n) : Le.updateContext(e, {
		...Le.context(e),
		...n
	});
}
async function An(e, t) {
	const n = await Qe(e);
	return !n || (En(t, n), (et("sleep", e.sleepMarkers.length) ?? et("nonwear", e.nonwearMarkers.length)) && Jt("marker_placed", "marker_limit_exceeded", _n(t)), !1);
}
async function Pn(e, t, n) {
	const a = t.identity.db;
	if (!a || !it(n) || e.isInvalidNight || e.sleepMarkers.some(nt)) return e.sleepMarkers;
	const r = await a.ggirResultsBundles.get(t.fileId);
	if (!r) throw new Error("The imported GGIR night could not be read. No changes were saved.");
	const { ggirNightRecords: i } = await import("./local-export-worker-_QiDE5PV.js").then((e) => e.y), s = (await i(t.fileId, r.imported, /* @__PURE__ */ new Map(), n?.ggirClockSteps)).get(t.date)?.[0]?.sleepMarkers.find(nt);
	return s ? [...e.sleepMarkers, {
		...s,
		markerIndex: e.sleepMarkers.length + 1
	}] : e.sleepMarkers;
}
async function Nn(e, t, n, a) {
	try {
		const r = n.identity.db ? await n.identity.db.files.get(n.fileId) : void 0;
		if (t.isInvalidNight && !0 === t.isInvalidNightImplicit && t.sleepMarkers.some(nt) && (t.isInvalidNight = !1, t.isInvalidNightImplicit = !1), t.isInvalidNight || Ce(a.patch.proposalNight ?? null, n.fileId, n.date, t) || !Be(r, { sleepMarkers: a.since ?? e.sleepMarkers }, t) || (t.isInvalidNight = !0, t.isInvalidNightImplicit = !0), !await An(t, n)) return null;
		const i = {
			...t,
			sleepMarkers: await Pn(t, n, r)
		};
		if (i.sleepMarkers !== t.sleepMarkers && !await An(i, n)) return null;
		const [s] = await Se([i], j());
		if (!s) throw new Error("The core returned no verdict for the marker edit.");
		return {
			...s,
			kept: s.kept.filter((e) => e < t.sleepMarkers.length),
			removed: s.removed.filter((e) => e < t.sleepMarkers.length)
		};
	} catch (r) {
		return Le.fail(n, r), En(n, r instanceof Error ? r.message : String(r)), mt("warn", "Marker edit refused: actours did not answer the manual-nonwear night rule", ht(r)), null;
	}
}
function Tn(e, t) {
	const { isInvalidNightImplicit: n, ...a } = e;
	return {
		...a,
		sleepMarkers: Ee(e.sleepMarkers, t),
		isInvalidNight: e.isInvalidNight || t.invalidates,
		...!0 !== n || t.invalidates ? {} : { isInvalidNightImplicit: n }
	};
}
let xn = null;
function Fn(e, { proposal: t, edited: n, baseNight: a, settle: r }) {
	const i = Le.context(e), s = Ge(i, Tn(n, r)), o = {
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
	xn = o;
	try {
		hn(t, n, a, r);
	} finally {
		xn = null;
	}
	const l = {
		...i,
		...!1 === t.snapshot ? {} : cn(i),
		...t.patch,
		...s,
		placementRejected: !1,
		placementRejectionReason: null,
		isDirty: !0,
		_editGeneration: i._editGeneration + 1
	};
	return Le.write(e, s, o.edits ?? [], l), !0;
}
async function Cn(e, t, { propose: n, editsDisplayedSleep: a, night: r }) {
	if (!In(r)) {
		const e = r.session ? Le.night(r.session) : null;
		if (!r.session || !e) return mt("warn", "Marker edit refused: its night has no session to write it", {}), !1;
		const t = {
			...Le.context(r.session),
			...e,
			isInvalidNightImplicit: !0 === e.isInvalidNightImplicit
		}, i = a ? t : Oe(t.proposalNight, r.session.fileId, r.session.date, t), s = n(i, !0);
		if (!s) return !1;
		const o = un(i), l = pn(o, s), c = await Nn(o, l, r.session, s);
		return !!c && Fn(r.session, {
			proposal: s,
			edited: l,
			baseNight: o,
			settle: c
		});
	}
	const i = e(), s = i.availableDates[i.currentDateIndex] ?? "", o = null != i.currentFileId && F(i.proposalNight, i.currentFileId, s, i.sleepMarkers), l = a ? i : Oe(i.proposalNight, i.currentFileId ?? -1, s, i), c = n(l, !1);
	if (!c) return !1;
	const d = un(l), u = pn(d, c), p = await Nn(d, u, r.session, c);
	if (!p) return !1;
	if (!In(r)) return r.session ? Fn(r.session, {
		proposal: c,
		edited: u,
		baseNight: d,
		settle: p
	}) : (mt("warn", "Marker edit refused: its night has no session to write it", {}), !1);
	const m = e(), h = p.removed.length > 0 || p.invalidates, y = c.patch.markerMode ?? m.markerMode, f = Tn(u, p);
	return t({
		...null !== m.proposalNight && (o || "proposalNight" in c.patch && null === c.patch.proposalNight) ? {
			proposalNight: null,
			acceptingProposal: m.proposalNight
		} : {},
		...!1 === c.snapshot ? {} : cn(Oe(m.proposalNight, m.currentFileId ?? -1, s, m)),
		...c.patch,
		...!1 !== c.dirty || h ? {
			isDirty: !0,
			_editGeneration: m._editGeneration + 1
		} : {},
		sleepMarkers: f.sleepMarkers,
		isInvalidNight: f.isInvalidNight,
		isInvalidNightImplicit: !0 === f.isInvalidNightImplicit,
		placementRejected: !1,
		...h ? {
			selectedPeriodIndex: "sleep" === y ? null : c.patch.selectedPeriodIndex ?? m.selectedPeriodIndex,
			nightRuleReceipt: {
				date: s,
				text: mn(u, p, {
					date: s,
					offscreen: !1,
					stepSec: Te(r.session)
				})
			}
		} : {}
	}), hn(c, u, d, p), !0;
}
function Rn(e, t, n, { editsDisplayedSleep: a = !1, night: r }) {
	const i = r;
	return gn(() => Cn(e, t, {
		propose: n,
		editsDisplayedSleep: a,
		night: i
	}), i);
}
const On = /* @__PURE__ */ new Set([
	"username",
	"isAuthenticated",
	"sitePassword"
]);
function Hn(e) {
	return Object.fromEntries(Object.entries(e).filter(([e]) => !On.has(e)));
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
}, Kn = c.wear_minutes_per_day, qn = c.valid_days_per_participant;
function Gn(e) {
	return "include" === e || "exclude" === e ? e : yt.partialDayPolicy;
}
function Vn(e) {
	const t = "object" == typeof e && null !== e ? e : {}, n = t.minWearMinutesPerDay ?? t.min_wear_minutes_per_day, a = t.minValidDaysPerParticipant ?? t.min_valid_days_per_participant, r = t.requireWeekendDay ?? t.require_weekend_day, i = t.partialDayPolicy ?? t.partial_day_policy;
	return {
		minWearMinutesPerDay: M("wear_minutes_per_day", n) ?? yt.minWearMinutesPerDay,
		minValidDaysPerParticipant: M("valid_days_per_participant", a) ?? yt.minValidDaysPerParticipant,
		requireWeekendDay: "boolean" == typeof r ? r : yt.requireWeekendDay,
		partialDayPolicy: Gn(i)
	};
}
function Un(e) {
	const t = "string" == typeof e.algoKey ? z(e.algoKey) : null;
	if (null !== t) return {
		algoKey: t,
		algoVersion: $(t),
		paramsHash: ""
	};
	const n = Je(e.cubeConfig);
	return null === n ? null : {
		algoKey: n.cellId,
		algoVersion: n.implementationVersion,
		paramsHash: n.configHash
	};
}
Kn.maximum, qn.maximum;
const Bn = "Scores were computed with different settings, so this night can't be auto-scored. Manual scoring still works.";
function zn(e) {
	return g.some((t) => e.startsWith(t));
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
		const e = Ze(n);
		r = e?.configHash ?? null, i = void 0 === e;
	} else if (!("recordedCellId" in t)) {
		const e = Je(t);
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
		const e = Je(a);
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
	return !oa && oe();
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
function ya(e) {
	try {
		const t = JSON.parse(e), n = t?.state;
		if (null != n && "object" == typeof n && "sitePassword" in n) return delete n.sitePassword, JSON.stringify(t);
	} catch {}
	return e;
}
async function fa(e) {
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
			const n = await fa(e);
			n?.id ? await e.studySettings.update(n.id, {
				extraSettings: { [D]: t },
				lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
			}) : await e.studySettings.add({
				key: ia,
				sleepDetectionRule: "",
				nightStartHour: "",
				nightEndHour: "",
				defaultAlgorithm: "",
				extraSettings: { [D]: t },
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
		const t = ne(), n = ha(t);
		try {
			const e = ce();
			if (null != n) {
				const a = ya(n);
				await wa(e, a);
				try {
					const e = pa(t);
					localStorage.getItem(e) === n && localStorage.removeItem(e);
				} catch {}
				return ua(t), a;
			}
			const a = (await fa(e))?.extraSettings[D];
			if ("string" == typeof a) return ua(t), ya(a);
			const r = await async function(e) {
				const t = await e.studySettings.where("key").equals("study").first(), n = t?.extraSettings[D];
				if ("string" != typeof n || !t?.id) return null;
				const a = ya(n);
				await wa(e, a);
				const { [D]: r, ...i } = t.extraSettings;
				return await e.studySettings.update(t.id, { extraSettings: i }), a;
			}(e);
			if (null !== r) return ua(t), r;
			const i = da(t);
			if (null != i) {
				const n = ya(i);
				return await wa(e, n), ua(t), n;
			}
			return null;
		} catch (a) {
			return mt("warn", "Persisted store hydration from the workspace row failed", ht(a)), null !== n ? ya(n) : da(t);
		}
	},
	setItem: async (e, t) => {
		if (!sa()) return;
		const n = {
			workspaceId: ne(),
			value: t
		}, a = ha(n.workspaceId);
		ma = n;
		try {
			const e = ce(), r = ga.get(e);
			if (r?.value === t ? await r.pending : await wa(e, t), ma === n) {
				ma = null;
				try {
					const e = ha(n.workspaceId);
					e !== a && e !== t || localStorage.removeItem(pa(n.workspaceId));
				} catch {}
			}
		} catch (r) {
			if (mt("warn", "Persisted store write to the workspace row failed; falling back to the device sink", ht(r)), ma !== n) return;
			try {
				localStorage.setItem(pa(n.workspaceId), t);
			} catch (i) {
				mt("warn", "Persisted store write has no sink; this session's settings will not survive", ht(i));
			}
		}
	},
	removeItem: async (e) => {
		const t = ne();
		ua(t);
		try {
			localStorage.removeItem(pa(t));
		} catch {}
		if (ma?.workspaceId === t && (ma = null), sa()) try {
			const e = ce();
			ga.delete(e);
			const t = await fa(e);
			if (!t?.id) return;
			const { [D]: n, ...a } = t.extraSettings;
			await e.studySettings.update(t.id, { extraSettings: a });
		} catch (n) {
			mt("warn", "Persisted store clear on the workspace row failed", ht(n));
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
function Da(e) {
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
function ba(e) {
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
const Ma = vt.map((e) => ({
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
	const t = St(e.key);
	return "nap" === t?.family ? de.naps : "nonwear" === t?.family ? de.nonwear : de.main_sleep;
}
(function(e, t = Ma) {
	const n = {};
	for (const a of t) {
		const t = e[Aa(a)];
		n[a.key] = t === ue.night_date || t === ue.period_start_day ? Ea(a) : G.explicit_only;
	}
	return {
		dateRules: n,
		pendingGroups: Object.keys(e).filter((t) => e[t] === ue.ask_per_night).sort()
	};
})(Object.freeze({
	[de.main_sleep]: R.diary_main_sleep_date_rule,
	[de.naps]: R.diary_nap_date_rule,
	[de.nonwear]: R.diary_nonwear_date_rule
})).dateRules, R.diary_day_boundary_hour, R.diary_dst_fold_policy, R.diary_dst_gap_policy, new Set(Ma.flatMap((e) => [
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
var Na = p(ae(), 1);
const Ta = /* @__PURE__ */ new Map(), xa = /* @__PURE__ */ new Set();
let Fa = 0;
function Ca(e, t) {
	const n = t?.diaryTemporalPolicy;
	var a, r;
	void 0 !== n && Number.isFinite(e) && (r = n, (void 0 === (a = Ta.get(e)) || a.dayBoundaryHour !== r.dayBoundaryHour || a.mainSleepDateRule !== r.mainSleepDateRule || a.napDateRule !== r.napDateRule || a.nonwearDateRule !== r.nonwearDateRule || a.dstFoldPolicy !== r.dstFoldPolicy || a.dstGapPolicy !== r.dstGapPolicy) && (Ta.set(e, n), function() {
		Fa += 1;
		for (const e of xa) e();
	}()));
}
function Ra(e) {
	return (null == e ? void 0 : Ta.get(e)) ?? function() {
		const e = tl.getState(), t = e;
		for (const a of n) {
			if (!a.startsWith("diary_")) continue;
			const e = m[a].storeKeys.zustand;
			if (!e || null !== o(a, t[e])) throw new Error("The persisted study configuration has an incomplete diary temporal policy.");
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
function Oa(e) {
	return {
		dayStartHour: Ra(e).dayBoundaryHour,
		morningOffsetPadHours: _t.morningOffsetPadHours
	};
}
function Ha(e) {
	return Da(e).map((e) => [e.start, e.end]);
}
function La(e) {
	return ba(e).map((e) => [e.start, e.end]);
}
function ja(e, t) {
	return null == e ? null : t.wireClock(e);
}
const Ka = /* @__PURE__ */ new WeakMap();
function qa(e, t) {
	Ka.get(t)?.delete(e);
}
async function Ga(e, t, n) {
	const a = t ?? ce(), [r, i] = await Promise.all([rs(e, a), n ?? Li(e, a).then((e) => e?.seriesRevision ?? 0)]);
	if (0 === r.length) return null;
	const s = `${i}|${r.length}|${r[0]}|${r[r.length - 1]}`;
	let o = Ka.get(a);
	const l = o?.get(e);
	if (l && l.dateKey === s) return l.promise;
	o || (o = /* @__PURE__ */ new Map(), Ka.set(a, o));
	const c = o, d = async function(e, t, n) {
		const [a, r] = await Promise.all([es(e, t[0], n), es(e, t[t.length - 1], n)]);
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
function Va(e, t, n) {
	if (Ca(e.fileId, e.importMappingProvenance), null === t) return e;
	const a = {
		diaryInBedTime: e.diaryInBedTime ?? null,
		diaryOnsetTime: e.diaryOnsetTime ?? null,
		diaryWakeTime: e.diaryWakeTime ?? null
	}, { ampm_search_gap_min_hours: r, ampm_search_gap_max_hours: i, ampm_search_window_margin_hours: s } = wt.ampmSearchHours, o = n.correctDiaryAmPm({
		inBed: a.diaryInBedTime,
		onset: a.diaryOnsetTime,
		wake: a.diaryWakeTime,
		onsetAnchor: It.onset.map(({ tsField: e }) => a[e]).find(Boolean) ?? null,
		baseDate: e.analysisDate,
		spanMs: [t.start, t.end],
		geometry: Oa(e.fileId),
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
function Ua(e, t, n) {
	return gt((n) => Va(e, t, n), new kt(n));
}
function Ba(e, t, n) {
	return gt((n) => e.map((e) => Va(e, t, n)), new kt(n));
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
	return Ft("ggirDiaryLogShape", `${t ?? ""}:${r.join("")}`, () => n.ggirDiaryLogShape(Uint8Array.from(r), t));
}
function Qa(e, t) {
	for (const n of It[e]) {
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
	const { username: n, selectedStudyId: a } = tl.getState();
	return ct.captureWorkspaceBinding(e, {
		username: n,
		studyId: a
	});
}
async function sr(e, t) {
	if (!await ct.settleWritesForDb(e, t)) throw new rr();
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
				for (const [n, i] of r) await a(ct.recordFileEventDurably({
					fileId: n,
					analysisDate: [...i].sort()[0],
					action: K.DIARY_ATTACHED,
					payload: {
						sourceKey: null,
						matchBasis: "attach_chosen" === e.operation ? "user_chosen_target" : "local_file_identity",
						entryCount: i.length
					}
				}, t));
			})();
			const s = e.rows.filter((e) => "diaryOccurrences" === e.store && "added" === e.change && null === e.analysisDate).length;
			(i.added + i.replaced > 0 || s > 0) && "attach" !== e.operation && "attach_chosen" !== e.operation && await a(ct.recordWorkspaceBoundDurably(t, K.DIARY_STAGED, {
				staged: i.added + i.replaced,
				replaced: i.replaced,
				skipped: e.rejected.length,
				...s > 0 ? { occurrenceRecords: s } : {}
			}));
			const o = function(e) {
				return new Set(e.rows.flatMap((e) => "deleted" !== e.change && "diaryOccurrences" !== e.store && null !== e.analysisDate ? [er(f(e.sourceKey?.trim() ? e.sourceKey : `file:${String(e.fileId)}`), e.analysisDate)] : []));
			}(e), l = n.filter((e) => o.has(e.entryKey));
			l.length > 0 && await a(ct.recordWorkspaceBoundDurably(t, K.DIARY_REPAIRED, {
				applied: l.length,
				fields: [...new Set(l.map((e) => e.field))].sort()
			}));
			return;
		}
		case "delete":
		case "workspace_clear":
			"workspace_clear" === e.operation && await a(ct.recordWorkspaceBoundDurably(t, K.DIARY_WORKSPACE_CLEARED, {
				staged: e.counts.stagedDiaryEntries.deleted,
				canonical: e.counts.diaryEntries.deleted,
				occurrences: e.counts.diaryOccurrences.deleted
			}));
			for (const n of e.rows) "stagedDiaryEntries" === n.store && "deleted" === n.change && await a(ct.recordWorkspaceBoundDurably(t, K.DIARY_DISCARDED, {
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
function yr(e, t) {
	return `${e}__${t}${ur}`;
}
function fr() {
	return "undefined" != typeof navigator && !!navigator.storage?.getDirectory;
}
function gr(e, t) {
	if (e.length === t) return e;
	const n = new Uint8Array(t);
	return n.set(e.subarray(0, t)), n;
}
async function wr(e, t, n) {
	if (!fr()) return;
	const a = pr(t), r = await (await (await hr(!0)).getFileHandle(yr(e, a), { create: !0 })).createWritable();
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
			}(dr, Mt(n));
		}(n);
		await r.write(e);
	} finally {
		await r.close();
	}
}
async function vr(e, t) {
	if (!fr()) return null;
	const n = pr(t);
	let a, r;
	try {
		a = await hr(!1);
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	try {
		r = await a.getFileHandle(yr(e, n), { create: !1 });
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	const i = await r.getFile(), s = new Uint8Array(await i.arrayBuffer());
	try {
		return await async function(e) {
			const t = await Et(dr, e), n = new DataView(t.buffer, t.byteOffset, t.byteLength), a = new TextDecoder();
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
				}, d = c(), u = c(), p = c(), m = c(), h = c(), y = c(), f = 1 & o ? c() : null, g = 2 & o ? c() : null, w = 4 & o ? c() : null, v = 8 & o ? c() : null, _ = 16 & o ? c() : null;
				s.set(l, {
					sadeh_actilife: d,
					sadeh_original: u,
					ck_actilife: p,
					ck_original: m,
					consensus_majority_vote: h,
					nonwear: y,
					detach_nonwear: f,
					sadeh_ggir: g,
					ck_ggir: w,
					nonwear_choi_2011: v,
					lstm_sleep_wake: _
				});
			}
			return s;
		}(s);
	} catch (o) {
		return console.warn("[opfs-scored] cache decode failed; deleting the corrupt entry:", o instanceof Error ? o.message : o), await a.removeEntry(yr(e, n)).catch((e) => {
			console.warn("[opfs-scored] failed to delete the corrupt cache entry:", e instanceof Error ? e.message : e);
		}), null;
	}
}
async function _r(e) {
	if (!fr()) return;
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
	for (const r of e) r.username !== t || n && !w(r) || a.set(r.date, Ir(a.get(r.date), r));
	return a;
}
function Dr(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		let e = t.get(n.date);
		e || t.set(n.date, e = /* @__PURE__ */ new Map()), e.set(n.username, Ir(e.get(n.username), n));
	}
	return t;
}
function br(e) {
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
function Tr(e) {
	return e ? e instanceof ArrayBuffer ? new Float64Array(e, 0, Math.floor(e.byteLength / Float64Array.BYTES_PER_ELEMENT)) : e : Nr;
}
const xr = /* @__PURE__ */ new WeakMap();
function Fr(e, t) {
	"number" == typeof t && t > 0 && xr.set(e, t);
}
function Cr(e, t) {
	const n = (e?.epochResolutions?.find((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId))?.epochLengthSeconds ?? t?.epochLengthSeconds ?? void 0;
	return "number" == typeof n && n > 0 ? n : void 0;
}
async function Rr(e, t, n) {
	const a = Tr(e);
	if (a.length < 2) return t;
	const r = function(e) {
		return xr.get(Tr(e));
	}(a);
	return void 0 !== r ? r : await (n ?? j()).medianGapSeconds(Float64Array.from(a)) ?? t;
}
function Or(e) {
	if (!("diarySourceSha256" in e) || void 0 === e.diarySourceSha256) return {};
	if ("string" != typeof e.diarySourceSha256 || !/^[a-f0-9]{64}$/u.test(e.diarySourceSha256)) throw new Error("Diary source identity must be a SHA-256 digest.");
	return { diarySourceSha256: e.diarySourceSha256 };
}
function Hr(e, t) {
	if (void 0 !== t && void 0 === e) throw new Error("Diary replication transport requires its profile identity.");
	if (void 0 !== e?.transportSha256 && void 0 === t) throw new Error("Profile-backed diary imports require both profile identity and full replication transport.");
}
function Lr(e) {
	return {
		...Or(e),
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
function jr(e, t = e.sourceKey, n = e.targetChosenByUser) {
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
	}, r = Array.isArray(e.naps) ? e.naps : Da(e);
	r.length > 3 && function(e, t) {
		const n = t.map((e) => ({
			start: e.start ?? null,
			end: e.end ?? null
		}));
		e.naps = n, e.nap1Start = n[0]?.start ?? null, e.nap1End = n[0]?.end ?? null, e.nap2Start = n[1]?.start ?? null, e.nap2End = n[1]?.end ?? null, e.nap3Start = n[2]?.start ?? null, e.nap3End = n[2]?.end ?? null;
	}(a, r);
	const i = Array.isArray(e.nonwearWindows) ? e.nonwearWindows : ba(e);
	return i.length > 3 && function(e, t) {
		const n = t.map((e) => ({
			start: e.start ?? null,
			end: e.end ?? null,
			reason: e.reason ?? null
		}));
		e.nonwearWindows = n, e.nonwear1Start = n[0]?.start ?? null, e.nonwear1End = n[0]?.end ?? null, e.nonwear1Reason = n[0]?.reason ?? null, e.nonwear2Start = n[1]?.start ?? null, e.nonwear2End = n[1]?.end ?? null, e.nonwear2Reason = n[1]?.reason ?? null, e.nonwear3Start = n[2]?.start ?? null, e.nonwear3End = n[2]?.end ?? null, e.nonwear3Reason = n[2]?.reason ?? null;
	}(a, i), {
		...Or(e),
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
async function Kr(e, t, n = ce()) {
	const a = await n.diaryEntries.where("[fileId+analysisDate]").equals([e, t]).first();
	return a ? Lr(a) : null;
}
async function qr(e, t = ce()) {
	return (await t.diaryEntries.where("fileId").equals(e).toArray()).map(Lr);
}
function Gr(e, t = !1) {
	return Array.isArray(e) ? e.map((e) => Gr(e, t)) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [t]) => e.localeCompare(t)).map(([n, a]) => {
		const r = e;
		return [n, (t && "replicationProfileTransport" === n ? r.replicationProfileIdentity?.transportSha256 : t && "importMappingProvenance" === n ? r.importMappingProvenance?.configurationSha256 : t && "instrumentMappingProvenance" === n ? r.instrumentMappingProvenance?.mappingSha256 : void 0) ?? Gr(a, t)];
	})) : e;
}
function Vr(e, t = !1) {
	return JSON.stringify(Gr(e, t)) ?? "null";
}
const Ur = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakSet();
async function zr(e) {
	let t = l.currentTransaction;
	for (; t?.parent;) t = t.parent;
	t && Br.has(t) || (t && Br.add(t), await Me([], e));
}
async function Wr(e, t, n) {
	null != n ? await e.diaryEntries.put({
		...t,
		id: n
	}) : await e.diaryEntries.add(t), await zr(e), Qr(e, t.fileId);
}
async function $r(e, t, n) {
	await e.diaryEntries.delete(t), await zr(e), Qr(e, n);
}
function Qr(e, t) {
	let n = l.currentTransaction;
	for (; n?.parent;) n = n.parent;
	if (!n) return void Re(t, e);
	const a = Ur.get(n);
	if (a) return void a.add(t);
	const r = /* @__PURE__ */ new Set([t]);
	Ur.set(n, r), n.idbtrans.addEventListener("complete", () => {
		for (const t of r) Re(t, e, r);
	}, { once: !0 });
}
function Jr(e) {
	return u(e.filename) !== e.filename;
}
function Yr(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (null == n.id) continue;
		const e = s(n), a = t.get(e) ?? [];
		a.some((e) => e.id === n.id) || a.push(n), t.set(e, a);
	}
	return [...t.values()].map((e) => e.sort((e, t) => Number(Jr(e)) - Number(Jr(t)) || e.id - t.id));
}
function Xr(e, t) {
	return {
		status: d.MATCHED,
		file: e[0],
		files: e,
		basis: t
	};
}
function Zr(e, t, n, a) {
	const r = h(e, t, n, a);
	if (r.status === d.UNMATCHED) return r;
	if (r.status === d.MATCHED && "named" === r.basis) return Xr(Yr(n.byRecording.get(s(r.file)) ?? [r.file])[0], "identity");
	const i = Yr(r.status === d.AMBIGUOUS ? r.candidates : [r.file, ...n.byParticipantId.covering(L(r.file), t)]), o = i.length > 1 ? function(e, t) {
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
	}(i, t) : null;
	return o ? Xr(o, "wear") : r.status === d.AMBIGUOUS ? 1 === i.length ? Xr(i[0], "identity") : {
		status: d.AMBIGUOUS,
		count: i.length
	} : Xr(i.find((e) => e.some((e) => e.id === r.file.id)), "identity");
}
const ei = (e) => [e.markers, e.sensorNonwear];
function ti(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const r of t) {
		const e = L(r);
		e && n.set(e, (n.get(e) ?? /* @__PURE__ */ new Set()).add(s(r)));
	}
	const a = t.filter((e) => null != e.id && e.nonwearReview && (n.get(L(e))?.size ?? 0) > 1);
	return 0 === a.length ? l.Promise.resolve(r(t)) : async function(e, t, n) {
		const a = l.currentTransaction;
		if (a && !ei(e).every((e) => a.storeNames.includes(e.name))) throw new Error("Diary planning reads wear evidence: its transaction must include markers and sensorNonwear.");
		const i = import("./local-nonwear-review-VLkHeft-.js"), { createLocalNonwearReviewRepository: s, currentNonwearReviewInputs: o } = a ? await l.waitFor(i) : await i, c = s(e), { username: d } = tl.getState(), u = Promise.all(n.map(async (e) => await o(e, d, c) === e.nonwearReview.inputs ? null : e.id)), p = new Set((a ? await l.waitFor(u) : await u).filter((e) => null !== e));
		return r(t.map((e) => {
			if (!p.has(e.id)) return e;
			const { nonwearReview: t, ...n } = e;
			return n;
		}));
	}(e, t, a);
}
let ni;
function ai() {
	return ni ?? l.waitFor(Promise.all([
		import("./diary-occurrence-store-DuguSQKC.js"),
		import("./diary-import-provenance-DOh-xbL0.js"),
		import("./diary-instrument-mapping-DRkoXUQm.js"),
		import("./diary-replication-profile-D53PTxVx.js").then((e) => e.i),
		import("./diary-replication-transport-DdNjZUN7.js")
	])).then(([e, t, n, a, r]) => ni = {
		occurrence: e,
		provenance: t,
		instrument: n,
		profile: a,
		transport: r
	});
}
function ri(e, t) {
	return e.status === d.MATCHED && e.files.some((e) => e.id === t);
}
async function ii(e, t, n, { existing: a, participantFiles: r, excludeRowIds: i } = {}) {
	if (!t || a?.fileId === t.id) return null;
	const o = L(t);
	if (!o) return null;
	const l = s(t), c = r ? r.filter((e) => L(e) === o) : await e.files.where(P).equals(o).toArray(), d = new Set(c.filter((e) => e.id !== t.id && s(e) !== l).map((e) => e.id));
	return d.size > 0 && (await e.diaryEntries.where("analysisDate").equals(n).toArray()).some((e) => d.has(e.fileId) && e.id !== a?.id && !i?.has(e.id)) ? Object.assign(/* @__PURE__ */ new Error("Diary evidence already occupies this participant night on another recording."), {
		fileId: t.id,
		sourceKey: o,
		analysisDate: n
	}) : null;
}
async function si(e = ce()) {
	const t = await e.diaryBindingDirty.toCollection().primaryKeys(), n = await Promise.all(t.filter((e) => "number" == typeof e).map((t) => e.files.where(A).between([t, "local"], [
		t,
		"local",
		[]
	]).keys()));
	return [.../* @__PURE__ */ new Set([...t.filter((e) => "string" == typeof e).map((e) => e.slice(N.length)), ...n.flat().map((e) => e[2])])].sort();
}
async function oi(e = ce(), t) {
	return (await (t ? e.stagedDiaryEntries.where(b).anyOf([...t]).distinct() : e.stagedDiaryEntries).toArray()).sort((e, t) => e.importedAt.localeCompare(t.importedAt));
}
function li(e, t) {
	return 0 === t.availableDates.length || t.availableDates.includes(e.analysisDate);
}
async function ci(e, t, n) {
	const a = s(t);
	return (await e.files.where(P).equals(L(t)).toArray()).filter((e) => e.id !== t.id && s(e) === a && E(e) && li(n, e)).sort((e, t) => Number(Jr(e)) - Number(Jr(t)) || e.id - t.id);
}
async function di(e, t, n = ce(), a = {}) {
	const r = e.id, i = t.id;
	if (!r || !i) return { status: "missing" };
	const s = n, o = await s.stagedDiaryEntries.get(r);
	o && Hr(o.replicationProfileIdentity, o.replicationProfileTransport);
	const { occurrence: { verifyDiaryOccurrenceRecord: c, assertDiaryOccurrenceMatchesCompatibilityEntry: u }, provenance: { verifyDiaryImportMappingProvenance: p, canonicalizeDiaryMappedSourceValues: m }, instrument: { verifyDiaryInstrumentMappingProvenance: h, canonicalizeDiaryInstrumentValues: y }, profile: { verifyDiaryReplicationProfileIdentity: g }, transport: { verifyDiaryReplicationTransport: w, assertDiaryReplicationTransportBinding: v } } = await ai(), _ = a.targetChosenByUser ? "attach_chosen" : "attach", S = !0 === a.enclosingAudit;
	if (S && !l.currentTransaction?.storeNames.includes("auditLog")) throw new Error("An enclosing diary audit needs a transaction that includes the audit log.");
	const I = S ? null : ir(s, a.audit);
	return I && await sr(s, I), await dt([
		s.files,
		s.diaryEntries,
		s.stagedDiaryEntries,
		s.diaryOccurrences,
		s.auditLog,
		...ei(s)
	], async () => {
		const e = new nr(_), n = await s.stagedDiaryEntries.get(r);
		if (!n) return { status: "missing" };
		const o = L(t), S = await s.files.where(P).equals(o).toArray(), k = a.targetChosenByUser ? await s.files.get(i) : S.find((e) => e.id === i);
		if (!k || !E(k)) return { status: "target_changed" };
		const D = await ti(s, S.filter((e) => "local" === e.source)), b = a.targetChosenByUser ? null : Zr(n.sourceKey, n.analysisDate, D);
		if (!(a.targetChosenByUser ? li(n, k) : null !== b && ri(b, i) && "local" === k.source && k.filename === t.filename && L(k) === o)) return { status: "target_changed" };
		const M = b?.status === d.MATCHED ? b.files : [k, ...await ci(s, k, n)], A = M[0].id, N = (await Promise.all(M.map((e) => s.diaryEntries.where("[fileId+analysisDate]").equals([e.id, n.analysisDate]).first()))).find((e) => void 0 !== e), T = function(e, t) {
			return {
				...Or(t),
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
		}(i, n), x = await s.diaryOccurrences.where("[normalizedSourceKey+analysisDate]").equals([n.normalizedSourceKey, n.analysisDate]).toArray(), F = await l.waitFor(Promise.all(x.map(c)));
		if (N || await ii(s, k, n.analysisDate, {
			existing: N,
			participantFiles: a.targetChosenByUser ? void 0 : S
		}) || F.some((e) => !ri(Zr(e.sourceKey, n.analysisDate, D, a.targetChosenByUser ? i : void 0), A))) return e.reject({
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
		if (F.some((e) => null !== e.fileId && e.fileId !== A)) throw new Error("A staged diary occurrence is already associated with a different local file.");
		if (!st(T.timezone) || !st(T.entryTimezone)) throw new Error("Staged diary entry contains an invalid IANA timezone.");
		const C = void 0 === T.importMappingProvenance ? void 0 : await l.waitFor(p(T.importMappingProvenance));
		if (void 0 !== T.mappedSourceValues && void 0 === C) throw new Error("Mapped diary source values require mapping provenance.");
		const R = void 0 === T.mappedSourceValues ? void 0 : m(C, T.mappedSourceValues);
		if (void 0 === T.instrumentMappingProvenance && (void 0 !== T.instrumentValues || void 0 !== T.replicationProfileIdentity || void 0 !== T.replicationProfileTransport)) throw new Error("Reviewed diary values and replication profile require mapping provenance.");
		if (void 0 !== T.instrumentMappingProvenance && void 0 === T.instrumentValues) throw new Error("Reviewed diary mapping provenance requires source values.");
		const O = void 0 === T.instrumentMappingProvenance ? void 0 : await l.waitFor(h(T.instrumentMappingProvenance)), H = void 0 === O ? void 0 : y(O, T.instrumentValues), j = void 0 === T.replicationProfileIdentity ? void 0 : g(T.replicationProfileIdentity), K = void 0 === T.replicationProfileTransport ? void 0 : await l.waitFor(w(T.replicationProfileTransport));
		if (Hr(j, K), void 0 !== O && void 0 !== j && (j.versionDefinitionId !== O.versionDefinitionId || j.versionDefinitionSha256 !== O.versionDefinitionSha256)) throw new Error("Diary replication profile identity does not match the reviewed mapping.");
		if (void 0 !== K && void 0 !== O && void 0 !== j) await l.waitFor(v(K, j, O));
		else if (void 0 !== K) throw new Error("Diary replication transport is missing its profile identity or reviewed mapping.");
		const q = {
			...T,
			...void 0 === C ? {} : { importMappingProvenance: C },
			...void 0 === R ? {} : { mappedSourceValues: R },
			...void 0 === O ? {} : {
				instrumentMappingProvenance: O,
				instrumentValues: H,
				...void 0 === j ? {} : { replicationProfileIdentity: j },
				...void 0 === K ? {} : { replicationProfileTransport: K }
			}
		};
		for (const t of F) {
			if (f(n.sourceKey) !== t.normalizedSourceKey) throw new Error("Diary occurrence response does not match its compatibility diary source.");
			u(t, q);
		}
		const G = (/* @__PURE__ */ new Date()).toISOString();
		for (const t of M) {
			const r = {
				fileId: t.id,
				analysisDate: n.analysisDate,
				...jr(q, n.sourceKey, a.targetChosenByUser),
				importedAt: G
			};
			await pt({
				op: "diary_put",
				fileId: t.id,
				payload: {
					analysisDate: n.analysisDate,
					entry: r,
					replaced: !1
				}
			}), await Wr(s, r, void 0), e.row("diaryEntries", "added", {
				fileId: t.id,
				sourceKey: n.sourceKey,
				analysisDate: n.analysisDate
			});
		}
		for (const t of F) {
			if (t.fileId === A) continue;
			const n = {
				...t,
				fileId: A
			};
			await s.diaryOccurrences.put(n), e.row("diaryOccurrences", "replaced", {
				fileId: A,
				sourceKey: t.sourceKey,
				analysisDate: t.analysisDate
			}), await pt({
				op: "diary_occurrence_put",
				fileId: A,
				payload: {
					disposition: "staged_attach",
					record: n
				}
			});
		}
		await pt({
			op: "staged_diary_delete",
			payload: {
				id: r,
				sourceKey: n.sourceKey,
				normalizedSourceKey: n.normalizedSourceKey,
				analysisDate: n.analysisDate
			}
		}), await s.stagedDiaryEntries.delete(r), e.row("stagedDiaryEntries", "deleted", {
			fileId: null,
			sourceKey: n.sourceKey,
			analysisDate: n.analysisDate,
			rowId: r
		});
		const V = e.build();
		return I && await or(V, I), {
			status: "attached",
			sourceKey: n.sourceKey,
			analysisDate: n.analysisDate,
			fileIds: M.map((e) => e.id),
			receipt: V
		};
	}, s);
}
function ui(e) {
	const { id: t, fileId: n, sourceKey: a, targetChosenByUser: r, ...i } = e;
	return Vr(i, !0);
}
async function pi(e, t = ce(), n) {
	const a = ir(t, n), r = [
		t.files,
		t.diaryEntries,
		t.stagedDiaryEntries,
		t.diaryOccurrences
	];
	return await ct.settleWritesForDb(t, a) ? t.transaction("rw", [
		...r,
		t.projectMeta,
		t.walLog,
		t.auditLog,
		...ei(t)
	], async () => {
		const n = await async function(e, t) {
			const n = [], a = [], r = [], i = /* @__PURE__ */ new Set(), o = {
				restaged: 0,
				moved: 0,
				mirrored: 0,
				conflicted: 0,
				unrecoverable: 0
			};
			if (0 === e.length) return {
				changes: n,
				mirrors: a,
				rejected: r,
				summary: o
			};
			const { occurrence: { assertDiaryOccurrenceMatchesCompatibilityEntry: l } } = await ai(), c = await Ci(t, {
				participantKeys: e,
				includeIncomplete: !0
			}), u = await ti(t, c), p = c.filter((t) => e.includes(L(t))).map((e) => e.id), m = await t.diaryEntries.where("fileId").anyOf(p).filter((e) => !e.targetChosenByUser).toArray();
			if (0 === m.length) return {
				changes: n,
				mirrors: a,
				rejected: r,
				summary: o
			};
			const h = await t.diaryOccurrences.where("fileId").anyOf(p).toArray(), y = (e) => JSON.stringify([e.fileId, e.analysisDate]), g = /* @__PURE__ */ new Map();
			for (const s of h) {
				const e = y(s), t = g.get(e) ?? [];
				t.push(s), g.set(e, t);
			}
			const w = new Map(c.map((e) => [e.id, e])), v = /* @__PURE__ */ new Map();
			for (const d of m) {
				const e = w.get(d.fileId), t = JSON.stringify([
					L(e),
					s(e),
					d.analysisDate
				]);
				v.set(t, [...v.get(t) ?? [], d]);
			}
			const _ = (e, t) => Number(Jr(w.get(e.fileId))) - Number(Jr(w.get(t.fileId))) || e.fileId - t.fileId;
			for (const s of [...v.values()].map((e) => e.sort(_))) {
				const e = s.map((e) => {
					const t = g.get(y(e)) ?? [], n = new Set(t.map((e) => e.sourceKey).filter((e) => e?.trim())), a = e.mappedSourceValues?.find((t) => "filename" === t.targetKey && "present" === t.presence && t.sourceFieldName === e.importMappingProvenance?.effectiveMapping[t.targetKey])?.lexicalValue;
					return {
						entry: e,
						associated: t,
						sourceKeys: n,
						sourceKey: (e.sourceKey?.trim() ? e.sourceKey : void 0) ?? (1 === n.size ? [...n][0] : void 0) ?? a
					};
				}), c = e.find((e) => e.sourceKey?.trim());
				if (!c) {
					o.unrecoverable += e.length;
					continue;
				}
				const { entry: p } = c, m = c.sourceKey, h = Zr(m, p.analysisDate, u, p.fileId);
				if (e.some((e) => ri(h, e.entry.fileId))) {
					for (const n of h.status === d.MATCHED ? h.files : []) {
						const r = y({
							fileId: n.id,
							analysisDate: p.analysisDate
						});
						e.some((e) => e.entry.fileId === n.id) || i.has(r) || await t.diaryEntries.get({
							fileId: n.id,
							analysisDate: p.analysisDate
						}) || (i.add(r), a.push({
							entry: p,
							sourceKey: m,
							fileId: n.id
						}));
					}
					continue;
				}
				if (h.status === d.UNMATCHED) {
					o.unrecoverable += e.length;
					continue;
				}
				const w = (t) => {
					o.conflicted += e.length;
					for (const n of e) r.push({
						fileId: n.entry.fileId,
						sourceKey: m,
						analysisDate: p.analysisDate,
						reason: t
					});
				};
				if (new Set(e.map((e) => ui(e.entry))).size > 1) {
					w("twin_content_differs");
					continue;
				}
				const v = [...new Map([m, ...e.flatMap((e) => [...e.sourceKeys])].map((e) => [f(e), e])).values()];
				try {
					for (const t of e) for (const e of t.associated) {
						l(e, t.entry);
						const n = Zr(e.sourceKey, p.analysisDate, u, t.entry.fileId);
						if (!e.sourceKey?.trim() || h.status === d.MATCHED && !ri(n, h.file.id)) throw new Error("Diary occurrence destination identity conflicts.");
					}
				} catch {
					w("occurrence_destination_differs");
					continue;
				}
				const _ = await t.stagedDiaryEntries.where("[normalizedSourceKey+analysisDate]").anyOf(v.map((e) => [f(e), p.analysisDate])).first(), S = h.status === d.MATCHED ? await t.diaryEntries.where("[fileId+analysisDate]").equals([h.file.id, p.analysisDate]).first() : void 0, I = h.status === d.MATCHED ? [y({
					fileId: h.file.id,
					analysisDate: p.analysisDate
				})] : v.map((e) => er(f(e), p.analysisDate)), k = h.status === d.MATCHED ? await ii(t, h.file, p.analysisDate, {
					existing: p,
					excludeRowIds: new Set(e.map((e) => e.entry.id))
				}) : null;
				if (_ || S || k || I.some((e) => i.has(e))) {
					w(k ? "participant_night_held" : _ ? "staged_evidence" : "destination_held");
					continue;
				}
				I.forEach((e) => i.add(e));
				const D = h.status === d.MATCHED ? h.file.id : null;
				n.push({
					entry: p,
					associated: c.associated,
					sourceKey: m,
					stagedKeys: v,
					destination: D
				});
				for (const t of e) t !== c && n.push({
					entry: t.entry,
					associated: t.associated,
					sourceKey: m,
					stagedKeys: [],
					destination: D,
					twin: !0
				});
				for (const n of h.status === d.MATCHED ? h.files.slice(1) : []) {
					const e = y({
						fileId: n.id,
						analysisDate: p.analysisDate
					});
					i.has(e) || await t.diaryEntries.get({
						fileId: n.id,
						analysisDate: p.analysisDate
					}) || (i.add(e), a.push({
						entry: p,
						sourceKey: m,
						fileId: n.id
					}));
				}
			}
			return {
				changes: n,
				mirrors: a,
				rejected: r,
				summary: o
			};
		}(e, t), i = n.summary, o = new nr("move");
		for (const e of n.rejected) o.reject(e);
		return 0 === n.changes.length && 0 === n.mirrors.length ? {
			...i,
			receipt: o.build()
		} : dt([...r, t.auditLog], async () => {
			for (const { entry: a, associated: r, sourceKey: s, stagedKeys: l, destination: c, twin: d } of n.changes) {
				const { id: e, fileId: n, targetChosenByUser: u, sourceKey: p, ...m } = a, h = c;
				if (d);
				else if (null === h) {
					for (const e of l) {
						const n = f(e), r = {
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
						}), await pt({
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
					i.restaged++;
				} else {
					const e = {
						...m,
						sourceKey: s,
						fileId: h
					};
					await Wr(t, e, void 0), o.row("diaryEntries", "added", {
						fileId: h,
						sourceKey: s,
						analysisDate: a.analysisDate
					}), await pt({
						op: "diary_put",
						fileId: h,
						payload: {
							analysisDate: a.analysisDate,
							entry: e,
							replaced: !1
						}
					}), i.moved++;
				}
				for (const a of r) {
					const e = {
						...a,
						fileId: h
					};
					await t.diaryOccurrences.put(e), o.row("diaryOccurrences", "replaced", {
						fileId: h,
						sourceKey: a.sourceKey,
						analysisDate: a.analysisDate
					}), await pt({
						op: "diary_occurrence_put",
						...null === h ? {} : { fileId: h },
						payload: {
							disposition: null === h ? "staged_unbind" : "staged_attach",
							record: e
						}
					});
				}
				await $r(t, e, n), o.row("diaryEntries", "deleted", {
					fileId: n,
					sourceKey: s,
					analysisDate: a.analysisDate
				}), await pt({
					op: "diary_delete",
					fileId: n,
					payload: { analysisDate: a.analysisDate }
				});
			}
			for (const { entry: a, sourceKey: r, fileId: s } of n.mirrors) {
				const { id: e, fileId: n, targetChosenByUser: l, sourceKey: c, ...d } = a, u = {
					...d,
					sourceKey: r,
					fileId: s
				};
				await Wr(t, u, void 0), o.row("diaryEntries", "added", {
					fileId: s,
					sourceKey: r,
					analysisDate: a.analysisDate
				}), await pt({
					op: "diary_put",
					fileId: s,
					payload: {
						analysisDate: a.analysisDate,
						entry: u,
						replaced: !1
					}
				}), i.mirrored++;
			}
			const e = o.build();
			return await or(e, a), {
				...i,
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
var mi = i({
	FILE_INGEST_FILENAME_CONFLICT_MESSAGE: () => yi,
	FILE_INGEST_IN_PROGRESS_MESSAGE: () => fi,
	FILE_INGEST_LEASE_MS: () => hi,
	FILE_INGEST_OWNERSHIP_LOST_MESSAGE: () => gi,
	FileIngestFilenameConflictError: () => wi,
	FileIngestInProgressError: () => _i,
	FileIngestOwnershipLostError: () => Si,
	FileIngestRecordingRevisedError: () => vi,
	GgirImportRefusalsStorageError: () => ys,
	activityDaySaveFacts: () => zi,
	attachStagedDiaryEntry: () => di,
	beginFileIngest: () => Pi,
	bumpExportInputRevision: () => Zi,
	bumpSeriesRevision: () => Xi,
	clearGgirImportRefusals: () => gs,
	countMarkersInRows: () => bi,
	deleteFileCaches: () => qi,
	deleteFileCascadeInCurrentTransaction: () => Ai,
	finalizeFileIngest: () => Ti,
	findFileByContentHash: () => Oi,
	findFileByPrefixHash: () => Hi,
	getActivityDay: () => es,
	getActiwareFileData: () => ji,
	getAllActivityDaysForFile: () => hs,
	getAllAuditLogEntries: () => Ts,
	getAllMarkersByAlgorithmForFile: () => ps,
	getAllMarkersForFile: () => os,
	getAuditLogEntries: () => As,
	getAvailableDates: () => rs,
	getConfirmedNonwearPeriodsForFile: () => ds,
	getDailyGgirSummary: () => Fs,
	getDeviceOffNonwearPeriodsForFile: () => us,
	getDirtyDiaryParticipants: () => si,
	getFileByFilename: () => Ri,
	getFileById: () => Li,
	getFileMarkerRows: () => cs,
	getFileScorerVerdicts: () => ns,
	getFilesByIds: () => Ki,
	getGgirImportRefusals: () => fs,
	getLocalFiles: () => Ci,
	getLocalStudySettings: () => vs,
	getMarkerProvenance: () => ss,
	getSensorNonwearForFile: () => ks,
	getSensorNonwearInWindow: () => Ds,
	getStagedDiaryEntries: () => oi,
	getWorkspaceScopedAuditEntries: () => Ns,
	isWorkspaceScopedAuditEntryForView: () => Ps,
	listDailyGgirSummaries: () => xs,
	mergeFileCircadianSignalDates: () => $i,
	mergeLocalStudySettingsExtraSettings: () => Ss,
	mergeScoredVariantResults: () => as,
	nextNightDate: () => Ui,
	nightHasActivity: () => Vi,
	patchActivityDayColumns: () => Ji,
	patchActivityDayNonwearMasks: () => Qi,
	preferredMarkerRecord: () => is,
	putDailyGgirSummary: () => Cs,
	reconcileDiaryBindings: () => pi,
	recordAlgorithmRun: () => Ms,
	recordAlgorithmRunsBatch: () => Es,
	recordGgirImportRefusals: () => ws,
	renewFileIngestLease: () => Ni,
	rollbackFileIngest: () => xi,
	saveActivityDay: () => Bi,
	saveActivityDays: () => Wi,
	saveSensorNonwearByDate: () => Is,
	storeActivityDayNonwearBands: () => Yi,
	totalCascadeRows: () => Ei,
	withActivityDayMemo: () => ms
});
const hi = 12e4, yi = "A completed import already uses this filename for different content. Rename the selected file and try again, or delete the completed import in Data Settings first.", fi = "This file is already being imported in another tab. Wait for that import to finish, then try again.", gi = "This import no longer owns its incomplete local record. Retry the import.";
var wi = class extends Error {
	category = pe;
	constructor() {
		super(yi), this.name = "FileIngestFilenameConflictError";
	}
}, vi = class extends Error {
	category = pe;
	constructor() {
		super(Z), this.name = "FileIngestRecordingRevisedError";
	}
}, _i = class extends Error {
	category = U;
	constructor() {
		super(fi), this.name = "FileIngestInProgressError";
	}
}, Si = class extends Error {
	category = U;
	constructor() {
		super(gi), this.name = "FileIngestOwnershipLostError";
	}
};
const Ii = Object.keys(ot), ki = Ii.filter((e) => !De.has(e));
function Di(e) {
	return [e.files, ...Ii.map((t) => e[t])];
}
function bi(e) {
	return e.reduce((e, t) => e + (t.sleepMarkers?.length ?? 0) + (t.nonwearMarkers?.length ?? 0), 0);
}
async function Mi(e, t, n = !1) {
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
	}(e, t), r = await Promise.all(ki.filter((e) => !n || "walLog" !== e).map(async (n) => {
		const a = je(e, n).where(ot[n]).equals(t);
		if ("walLog" === n) return [n, await a.filter((e) => "audit_append" !== e.op).delete()];
		if ("markers" !== n) return [n, await a.delete()];
		const r = bi(await e.markers.where("fileId").equals(t).toArray());
		return await a.delete(), [n, r];
	})), i = {
		...Object.fromEntries(r),
		...a.counts,
		files: 0
	};
	return i.ggirResultsBundles > 0 && await e.files.update(t, { ggirBundleRevision: crypto.randomUUID() }), i;
}
function Ei(e) {
	return Object.values(e).reduce((e, t) => e + t, 0);
}
async function Ai(e, t) {
	return {
		...await Mi(e, t),
		files: await e.files.where(":id").equals(t).delete()
	};
}
async function Pi(e, t, n = ce(), a = Date.now()) {
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
	return dt([...Di(r), r.studySettings], async () => {
		const n = await r.files.where("sourceContentHash").equals(e.sourceContentHash).toArray(), i = n.find(E);
		if (null != i?.id) return await gs(i, r), {
			kind: "already_complete",
			record: i
		};
		const s = e.aw5RecordingKey ? await r.files.where("aw5RecordingKey").equals(e.aw5RecordingKey).toArray() : [];
		if (s.some(E)) throw new vi();
		const o = await r.files.where("filename").equals(e.filename).first();
		if (o && E(o)) throw new wi();
		const l = /* @__PURE__ */ new Map();
		for (const e of [
			...n,
			...s,
			...o ? [o] : []
		]) null != e.id && "incomplete" === e.ingestState && l.set(e.id, e);
		const c = [...l.values()].find((e) => e.ingestAttemptId === t);
		if (null != c?.id) return await r.files.update(c.id, { ingestLeaseExpiresAt: a + hi }), {
			kind: "started",
			guard: {
				fileId: c.id,
				attemptId: t
			},
			recovered: !1
		};
		if ([...l.values()].find((e) => (e.ingestLeaseExpiresAt ?? 0) > a)) throw new _i();
		for (const e of l.values()) null != e.id && (await pt({
			op: "file_delete",
			fileId: e.id,
			payload: { kind: "incomplete_ingest_recovery" }
		}), await Ai(r, e.id));
		const d = await r.files.add({
			...e,
			ingestState: "incomplete",
			ingestAttemptId: t,
			ingestLeaseExpiresAt: a + hi
		});
		return await pt({
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
async function Ni(e, t = ce(), n = Date.now()) {
	const a = t;
	await a.transaction("rw", a.files, async () => {
		const t = await a.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new Si();
		await a.files.update(e.fileId, { ingestLeaseExpiresAt: n + hi });
	});
}
async function Ti(e, t = ce(), n) {
	const a = t;
	return dt([a.files, a.studySettings], async () => {
		const t = await a.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new Si();
		const r = e.fileId;
		return await a.files.where(":id").equals(r).modify((e) => {
			e.ingestState = "complete", delete e.ingestAttemptId, delete e.ingestLeaseExpiresAt;
		}), await pt({
			op: "file_put",
			fileId: r,
			payload: { kind: "incomplete_ingest_finalize" }
		}), await gs(t, a), await Me([r], a, n), r;
	}, a, n);
}
async function xi(e, t = ce()) {
	const n = t;
	return dt(Di(n), async () => {
		const t = await n.files.get(e.fileId);
		return t ? "incomplete" === t.ingestState && t.ingestAttemptId === e.attemptId && (await pt({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_rollback" }
		}), await Ai(n, e.fileId), !0) : Ei(await Mi(n, e.fileId)) > 0 && (await pt({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_orphan_cleanup" }
		}), !0);
	}, n);
}
async function Fi(e, t) {
	const n = [], a = await Rr(e.timestamps, null, t) ?? (e.timestamps.byteLength > 0 ? e.epochResolutions?.find((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId)?.epochLengthSeconds : null) ?? null;
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
async function Ci(t = ce(), n) {
	let a = await (n?.participantKeys ? t.files.where(b).anyOf([...new Set(n.participantKeys.flatMap((t) => [f(t), ...e({ filename: t })]))]).distinct().filter((e) => "local" === e.source) : n?.onlyFileIds ? t.files.where(":id").anyOf([...n.onlyFileIds]).filter((e) => "local" === e.source) : t.files.where("source").equals("local")).toArray();
	if (n?.participantKeys) {
		const e = [...new Set(a.map(L).filter((e) => !n.participantKeys.includes(e)))];
		e.length && (a = [...a.filter((t) => !e.includes(L(t))), ...await t.files.where(P).anyOf(e).filter((e) => "local" === e.source).toArray()]);
	}
	return (!0 === n?.includeIncomplete ? a : a.filter(E)).map((e) => {
		const t = e.participantId ?? y(e.filename) ?? void 0;
		return {
			...e,
			availableDates: [...new Set(e.availableDates)],
			...void 0 === t ? {} : { participantId: t }
		};
	});
}
async function Ri(e, t = ce()) {
	return t.files.where("filename").equals(e).first();
}
async function Oi(e, t = ce()) {
	if (e) return (await t.files.where("sourceContentHash").equals(e).toArray()).find(E);
}
async function Hi(e, t = ce(), n) {
	if (e) return (await t.files.where("fileHash").equals(e).toArray()).find((e) => E(e) && (void 0 === n || e.sourceContentHash === n));
}
async function Li(e, t = ce()) {
	return t.files.get(e);
}
async function ji(e, t = ce()) {
	return t.actiwareFileData.get(e);
}
async function Ki(e, t = ce()) {
	return t.files.bulkGet(e);
}
async function qi(e) {
	const t = new Set(e.flatMap((e) => [e.sourceContentHash, e.fileHash]).filter((e) => "string" == typeof e && e.length > 0));
	(await Promise.allSettled([...t].flatMap((e) => [cr(e), _r(e)]))).some((e) => "rejected" === e.status) && console.warn("[db] One or more local cache entries could not be deleted.");
}
async function Gi(e, t, n = j()) {
	const a = await n.shiftDate(e, t);
	if (void 0 === a) throw new RangeError(`Not a calendar date: ${e}`);
	return a;
}
async function Vi(e, t, n, a = ce()) {
	return (await Promise.all([t, n].map((t) => a.activityDays.where("[fileId+date]").equals([e, t]).count()))).some((e) => e > 0);
}
async function Ui(e, t = j()) {
	const n = Gi(e, 1, t);
	return l.currentTransaction ? l.waitFor(n) : n;
}
async function Bi(e, t = ce(), n) {
	const [a] = await Wi([e], t, void 0, n);
	return a;
}
async function zi(e, t = j()) {
	let n = e.epochResolutions;
	if (n) {
		if (void 0 !== e.algorithmResults && n.some((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId && 60 !== e.epochLengthSeconds && 60 % e.epochLengthSeconds == 0)) {
			const a = await Fi(e, t);
			n = [...n.filter((e) => !e.derivedData), ...a.filter((e) => e.derivedData)];
		}
	} else n = await Fi(e, t);
	return {
		epochResolutions: n,
		previousDate: await Gi(e.date, -1, t)
	};
}
async function Wi(e, t = ce(), n, a) {
	const r = t, i = new Set(e.map((e) => e.fileId));
	for (const d of i) qa(d, r);
	const s = we(a), o = n ?? await Promise.all(e.map((e) => zi(e, s))), l = await Promise.all(e.map(async (e, t) => {
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
			const t = await Fi(e, s);
			r = [...r.filter((e) => "counts_60s" !== e.resolutionId), ...t.filter((e) => e.derivedData)];
		}
		return {
			activityDay: {
				...a,
				epochResolutions: r
			},
			previousDate: o[t].previousDate
		};
	})), c = await _e(r, [
		r.activityDays,
		r.scoredVariantMasks,
		r.files
	], async () => {
		await Xi(r, [...i]);
		const e = [];
		for (const { activityDay: t, previousDate: n } of l) await r.scoredVariantMasks.bulkDelete([[t.fileId, t.date], [t.fileId, n]]), await r.activityDays.where("[fileId+date]").equals([t.fileId, t.date]).delete(), e.push(await r.activityDays.add(t));
		return e;
	}, a);
	for (const d of i) qa(d, r);
	return c;
}
async function $i(e, t, n, a = ce(), r) {
	await ve(a, [a.files], () => a.files.where(":id").equals(e).modify((e) => {
		const a = new Set(e.circadianSignalDates ?? []);
		for (const n of t) a.delete(n);
		for (const t of n) a.add(t);
		e.circadianSignalDates = [...a].sort();
	}), r);
}
async function Qi(e, t, n, a = ce(), r) {
	const i = a;
	await _e(i, [
		i.activityDays,
		i.physicalActivityFileSummaries,
		i.files
	], async () => {
		await i.activityDays.where("[fileId+date]").equals([e, t]).modify((e) => {
			Object.assign(e, n), delete e.displayNonwear;
		}), await i.physicalActivityFileSummaries.where("fileId").equals(e).delete(), await Zi(i, [e]), await i.files.where(":id").equals(e).modify((e) => {
			e.nonwearBandGeneration = (e.nonwearBandGeneration ?? 0) + 1, e.navigationFacts && delete e.navigationFacts.bands;
		});
	}, r);
}
async function Ji(e, t, n = ce(), a, r = we(a)) {
	const i = n, s = [...t.keys()], o = await l.waitFor(Promise.all(s.map((e) => Gi(e, -1, r))));
	qa(e, i), await _e(i, [
		i.activityDays,
		i.scoredVariantMasks,
		i.files
	], async () => {
		for (const [n, a] of s.entries()) {
			const r = t.get(a), s = new Set(Object.entries(r).flatMap(([e, t]) => void 0 === t ? [e] : []));
			await i.activityDays.where("[fileId+date]").equals([e, a]).modify((e, t) => {
				t.value = Object.fromEntries(Object.entries({
					...e,
					...r
				}).filter(([e]) => !s.has(e)));
			}), await i.scoredVariantMasks.bulkDelete([[e, a], [e, o[n]]]);
		}
		await Xi(i, [e]);
	}, a), qa(e, i);
}
async function Yi(e, t, n, a, r = ce(), i) {
	const s = r;
	await s.transaction("rw", s.files, s.activityDays, async () => {
		const r = await s.files.get(e);
		r && (r.seriesRevision ?? 0) === a.seriesRevision && (r.nonwearBandGeneration ?? 0) === a.nonwearBandGeneration && (i?.throwIfAborted(), await s.activityDays.where("[fileId+date]").equals([e, t]).modify({ displayNonwear: n }));
	});
}
async function Xi(e, t) {
	await e.files.where(":id").anyOf(t).modify((e) => {
		e.seriesRevision = (e.seriesRevision ?? 0) + 1;
	});
}
async function Zi(e, t) {
	await e.files.where(":id").anyOf(t).modify((e) => {
		e.exportInputRevision = (e.exportInputRevision ?? 0) + 1;
	});
}
async function es(e, t, n = ce(), a) {
	return a ? (await hs(e, n, a)).get(t) : n.activityDays.where("[fileId+date]").equals([e, t]).first();
}
const ts = /* @__PURE__ */ new WeakMap();
function ns(e, t = ce(), n) {
	const a = t;
	return (n ? Promise.resolve(n.file) : a.files.get(e)).then((t) => {
		const n = t?.seriesRevision ?? 0;
		let r = ts.get(a);
		r || ts.set(a, r = /* @__PURE__ */ new Map());
		const i = r.get(e);
		if (i?.revision === n) return i.verdicts;
		const s = [], o = S(a.activityDays.where("fileId").equals(e), (e) => {
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
async function as(e, t, n, a, r = ce(), i, s) {
	const o = r, l = await re(Ui(t, i), s);
	return s?.throwIfAborted(), !!await Vi(e, t, l, o) && ve(o, [o.scoredVariantMasks], async () => {
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
async function rs(e, t = ce()) {
	return (await t.activityDays.where("[fileId+date]").between([e, ""], [e, "￿"], !0, !0).keys()).map((e) => e[1]);
}
function is(e, t = !1) {
	const n = t ? e?.filter(w) : void 0;
	let a;
	for (const r of n?.length ? n : e ?? []) a = Ir(a, r);
	return a;
}
async function ss(e, t = ce()) {
	return t.markerProvenance.bulkGet([...e]);
}
async function os(e, t, n = ce(), a = !1) {
	return kr(await ls(e, t, n), t, a);
}
async function ls(e, t, n) {
	const a = n.markers.where("[fileId+date+username]"), r = await a.between([e, l.minKey], [e, l.maxKey]).uniqueKeys();
	return (await a.anyOf(r.filter((e) => e[2] === t)).toArray()).map(be);
}
async function cs(e, t = ce()) {
	return (await t.markers.where("fileId").equals(e).toArray()).map(be);
}
async function ds(e, t = ce()) {
	return br(await cs(e, t));
}
async function us(e, t = ce(), n) {
	const [a, r] = await Promise.all([ks(e, t), n ? br(n) : ds(e, t)]);
	return [...a.map((e) => ({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	})), ...r];
}
async function ps(e, t, n = ce()) {
	return function(e, t) {
		const n = /* @__PURE__ */ new Map();
		for (const a of e) {
			if (a.username !== t) continue;
			const e = n.get(a.date);
			e ? e.push(a) : n.set(a.date, [a]);
		}
		return n;
	}(await ls(e, t, n), t);
}
function ms(e) {
	return e({});
}
function hs(e, t = ce(), n) {
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
var ys = class extends Error {
	category = W;
	constructor() {
		super("Stored GGIR import refusals could not be read; the existing records were kept."), this.name = "GgirImportRefusalsStorageError";
	}
};
function fs(e) {
	if (!e || "object" != typeof e || !("ggirImportRefusals" in e)) return [];
	const t = e[ee];
	if (Array.isArray(t)) {
		const e = t.filter((e) => null != e && "object" == typeof e && "filename" in e && "string" == typeof e.filename && "reason" in e && "string" == typeof e.reason && "category" in e && Y.includes(e.category));
		if (e.length === t.length) return [...new Map(e.map((e) => {
			const t = "ggir-folder" === e.category ? {
				...e,
				filename: X
			} : e;
			return [JSON.stringify([t.filename, t.category]), t];
		})).values()];
	}
	throw new ys();
}
function gs(e, t) {
	return ws([], t, "string" == typeof e ? [e] : [e.filename, ...it(e) ? [X] : []]);
}
async function ws(e, t = ce(), n) {
	(e.length || void 0 !== n) && await _s({
		sleepDetectionRule: R.sleep_detection_rule,
		nightStartHour: R.night_start_hour,
		nightEndHour: R.night_end_hour,
		defaultAlgorithm: R.default_algorithm,
		extraSettings: {}
	}, t, {
		coreSettings: "existing",
		extraSettings: "merge",
		refusals: e,
		...void 0 === n ? {} : { importedFilenames: n }
	});
}
async function vs(e = ce()) {
	return e.studySettings.where("key").equals("study").first();
}
async function _s(e, t, n) {
	await dt([t.studySettings], async () => {
		const a = await t.studySettings.where("key").equals("study").first();
		if (void 0 !== n.importedFilenames && !fs(a).some((e) => n.importedFilenames?.includes(e.filename))) return;
		const r = "existing" === n.coreSettings && a ? {
			sleepDetectionRule: a.sleepDetectionRule,
			nightStartHour: a.nightStartHour,
			nightEndHour: a.nightEndHour,
			defaultAlgorithm: a.defaultAlgorithm,
			...void 0 === a.sleepPeriodDetection ? {} : { sleepPeriodDetection: a.sleepPeriodDetection }
		} : e, { [D]: i, ...s } = a?.extraSettings ?? {}, o = {
			...r,
			sleepDetectionRule: (c = r.sleepDetectionRule, Object.values(I).includes(c) ? c : R.sleep_detection_rule),
			extraSettings: "merge" === n.extraSettings ? {
				...s,
				...e.extraSettings
			} : e.extraSettings
		};
		var c;
		const d = await l.waitFor(he(JSON.stringify(o))), u = {
			key: "study",
			...o,
			...n.refusals ? { [ee]: fs({ [ee]: [...fs(a), ...n.refusals] }).filter((e) => !n.importedFilenames?.includes(e.filename)) } : {},
			contentHash: d,
			lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		await pt({
			op: "settings_put",
			payload: {
				settings: o,
				contentHash: d,
				prevContentHash: a?.contentHash,
				...n.refusals ? { [ee]: fs(u) } : {},
				lastModifiedAt: u.lastModifiedAt
			}
		}), await async function(e, t, n) {
			t?.id ? await e.studySettings.update(t.id, n) : await e.studySettings.add(n);
		}(t, a, u);
	}, t);
}
async function Ss(e, t = ce()) {
	await _s(e, t, {
		coreSettings: "existing",
		extraSettings: "merge"
	});
}
async function Is(e, t, n = ce(), a) {
	if (!t.size) return;
	const r = [...t];
	await dt([n.sensorNonwear], async () => {
		await ut(r.map(([t, n]) => ({
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
async function ks(e, t = ce()) {
	return t.sensorNonwear.where("fileId").equals(e).toArray();
}
async function Ds(e, t, n, a = ce()) {
	return (await ks(e, a)).filter((e) => e.startTimestamp <= n && e.endTimestamp >= t).sort((e, t) => e.startTimestamp - t.startTimestamp);
}
function bs(e) {
	const t = {
		fileId: e.fileId,
		date: e.date,
		appVersion: e.appVersion,
		results: e.results,
		...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {}
	}, n = Un(e);
	if (null !== n) return {
		...t,
		...n
	};
	throw new Error(`Refused an algorithm run for ${String(e.algoKey ?? e.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
}
async function Ms(e, t = ce(), n) {
	return await async function(e, t, n) {
		const a = t, r = await l.waitFor(ye(e.results));
		return dt([a.algorithmRuns], async () => {
			const t = await a.algorithmRuns.where("[fileId+date+algoKey+algoVersion+paramsHash]").equals([
				e.fileId,
				e.date,
				e.algoKey,
				e.algoVersion,
				e.paramsHash
			]).first();
			if (t?.id) return await pt({
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
			return await pt({
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
	}(bs(e), t, n);
}
async function Es(e, t, n) {
	return await async function(e, t, n) {
		if (0 === e.length) return [];
		const a = t ?? ce(), r = Promise.all(e.map((e) => ye(e.results))), i = await (l.currentTransaction ? l.waitFor(r) : r);
		return dt([a.algorithmRuns], async () => {
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
			return await ut(e.map((e, t) => ({
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
	}(e.map(bs), t, n);
}
async function As(e, t, n, a = ce()) {
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
function Ps(e, t, n) {
	return 0 === e.fileId && e.payload?.openFileId === t && e.payload?.openAnalysisDate === n;
}
async function Ns(e, t, n = ce()) {
	return (await n.auditLog.where("[fileId+analysisDate+username]").between([
		0,
		"",
		""
	], [
		0,
		"￿",
		"￿"
	], !0, !0).toArray()).filter((n) => Ps(n, e, t)).sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
}
async function Ts() {
	return ce().auditLog.orderBy("id").toArray();
}
async function xs(e, t = ce()) {
	return t.dailyGgirSummaries.where("[fileId+analysisDate]").between([e, ""], [e, "￿"]).toArray();
}
async function Fs(e, t) {
	const n = await ce().dailyGgirSummaries.where("[fileId+analysisDate]").equals([e, t]).first();
	return n ? [n] : [];
}
async function Cs(e, t = ce(), n) {
	const a = t, r = a.dailyGgirSummaries, i = Array.isArray(e) ? e : [e];
	0 !== i.length && await _e(a, [r, a.files], () => async function(e, t) {
		const n = e.dailyGgirSummaries, a = /* @__PURE__ */ new Map();
		for (const i of t) a.set(`${i.fileId}::${i.analysisDate}`, i);
		const r = await Promise.all([...a.values()].map(async (e) => {
			const t = await n.where("[fileId+analysisDate]").equals([e.fileId, e.analysisDate]).first();
			return null != t?.id ? {
				...e,
				id: t.id
			} : e;
		}));
		await n.bulkPut(r), await Zi(e, [...new Set(t.map((e) => e.fileId))]);
	}(a, i), n);
}
function Rs(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
const Os = (e) => Symbol.iterator in e, Hs = (e) => "entries" in e, Ls = (e, t) => {
	const n = e instanceof Map ? e : new Map(e.entries()), a = t instanceof Map ? t : new Map(t.entries());
	if (n.size !== a.size) return !1;
	for (const [r, i] of n) if (!a.has(r) || !Object.is(i, a.get(r))) return !1;
	return !0;
};
function js(e) {
	const t = Na.useRef(void 0);
	return (n) => {
		const a = e(n);
		return r = t.current, i = a, Object.is(r, i) || "object" == typeof r && null !== r && "object" == typeof i && null !== i && Object.getPrototypeOf(r) === Object.getPrototypeOf(i) && (Os(r) && Os(i) ? Hs(r) && Hs(i) ? Ls(r, i) : ((e, t) => {
			const n = e[Symbol.iterator](), a = t[Symbol.iterator]();
			let r = n.next(), i = a.next();
			for (; !r.done && !i.done;) {
				if (!Object.is(r.value, i.value)) return !1;
				r = n.next(), i = a.next();
			}
			return !!r.done && !!i.done;
		})(r, i) : Ls({ entries: () => Object.entries(r) }, { entries: () => Object.entries(i) })) ? t.current : t.current = a;
		var r, i;
	};
}
const Ks = [
	"currentFileId",
	"currentFilename",
	"currentDateIndex",
	"displayColumnChosenByUser",
	...t
];
function qs(e) {
	const t = ne();
	return t ? `sleep-scoring-prefs-${t}-${e}` : `sleep-scoring-user-prefs-${e}`;
}
const Gs = {
	setTimeout: (e, t) => setTimeout(e, t),
	clearTimeout: (e) => clearTimeout(e),
	setInterval: (e, t) => setInterval(e, t),
	clearInterval: (e) => clearInterval(e)
}, Vs = new class {
	#e = Gs;
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
}(), Us = "undefined" == typeof window || "Deno" in globalThis;
function Bs() {}
function zs(e, t) {
	return "function" == typeof e ? e(t) : e;
}
function Ws(e, t) {
	const { type: n = "all", exact: a, fetchStatus: r, predicate: i, queryKey: s, stale: o } = e;
	if (s) {
		if (a) {
			if (t.queryHash !== Qs(s, t.options)) return !1;
		} else if (!Ys(t.queryKey, s)) return !1;
	}
	if ("all" !== n) {
		const e = t.isActive();
		if ("active" === n && !e) return !1;
		if ("inactive" === n && e) return !1;
	}
	return !("boolean" == typeof o && t.isStale() !== o || r && r !== t.state.fetchStatus || i && !i(t));
}
function $s(e, t) {
	const { exact: n, status: a, predicate: r, mutationKey: i } = e;
	if (i) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (Js(t.options.mutationKey) !== Js(i)) return !1;
		} else if (!Ys(t.options.mutationKey, i)) return !1;
	}
	return !(a && t.state.status !== a || r && !r(t));
}
function Qs(e, t) {
	return (t?.queryKeyHashFn || Js)(e);
}
function Js(e) {
	return JSON.stringify(e, (e, t) => to(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t);
}
function Ys(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (e && t && "object" == typeof e && "object" == typeof t) {
		if (Array.isArray(e) && Array.isArray(t)) {
			for (let n = 0; n < t.length; n++) if (!Ys(e[n], t[n])) return !1;
			return !0;
		}
		const n = Object.keys(t);
		for (const a of n) if (!Ys(e[a], t[a])) return !1;
		return !0;
	}
	return !1;
}
const Xs = Object.prototype.hasOwnProperty;
function Zs(e, t, n = 0) {
	if (e === t) return e;
	if (n > 500) return t;
	const a = eo(e) && eo(t);
	if (!(a || to(e) && to(t))) return t;
	const r = (a ? e : Object.keys(e)).length, i = a ? t : Object.keys(t), s = i.length, o = a ? new Array(s) : {};
	let l = 0;
	for (let c = 0; c < s; c++) {
		const s = a ? c : i[c], d = e[s], u = t[s];
		if (d === u) {
			o[s] = d, (a ? c < r : Xs.call(e, s)) && l++;
			continue;
		}
		if (null === d || null === u || "object" != typeof d || "object" != typeof u) {
			o[s] = u;
			continue;
		}
		const p = Zs(d, u, n + 1);
		o[s] = p, p === d && l++;
	}
	return r === s && l === r ? e : o;
}
function eo(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function to(e) {
	if (!no(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	const n = t.prototype;
	return !!no(n) && !!n.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype;
}
function no(e) {
	return "[object Object]" === Object.prototype.toString.call(e);
}
function ao(e, t, n) {
	return "function" == typeof n.structuralSharing ? n.structuralSharing(e, t) : !1 !== n.structuralSharing ? Zs(e, t) : t;
}
function ro(e, t, n = 0) {
	const a = [...e, t];
	return n && a.length > n ? a.slice(1) : a;
}
function io(e, t, n = 0) {
	const a = [t, ...e];
	return n && a.length > n ? a.slice(0, -1) : a;
}
const so = Symbol();
function oo(e, t) {
	return !e.queryFn && t?.initialPromise ? () => t.initialPromise : e.queryFn && e.queryFn !== so ? e.queryFn : () => Promise.reject(/* @__PURE__ */ new Error(`Missing queryFn: '${e.queryHash}'`));
}
const lo = () => Us;
var co = class {
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
const uo = new class extends co {
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
}(), po = function(e) {
	setTimeout(e, 0);
}, mo = function() {
	let e = [], t = 0, n = (e) => {
		e();
	}, a = (e) => {
		e();
	}, r = po;
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
}(), ho = new class extends co {
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
function yo(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function fo(e) {
	return "online" !== (e ?? "online") || ho.isOnline();
}
var go = class extends Error {
	constructor(e) {
		super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
	}
};
function wo(e) {
	let t, n, a, r = !1, i = 0, s = "pending";
	const o = new Promise((e, t) => {
		n = e, a = t;
	});
	o.catch(Bs);
	const l = () => "pending" !== s, c = () => uo.isFocused() && ("always" === e.networkMode || ho.isOnline()) && e.canRun(), d = () => fo(e.networkMode) && e.canRun(), u = (e) => {
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
			const n = e.retry ?? (lo() ? 0 : 3), a = e.retryDelay ?? yo, s = "function" == typeof a ? a(i, t) : a, o = !0 === n || "number" == typeof n && i < n || "function" == typeof n && n(i, t);
			var d;
			!r && o ? (i++, e.onFail?.(i, t), (d = s, new Promise((e) => {
				Vs.setTimeout(e, d);
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
				const n = new go(t);
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
var vo = class {
	#s;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		var e;
		this.clearGcTimeout(), "number" == typeof (e = this.gcTime) && e >= 0 && e !== 1 / 0 && (this.#s = Vs.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime));
	}
	updateGcTime(e) {
		this.gcTime = Math.max(this.gcTime || 0, e ?? (lo() ? 1 / 0 : 3e5));
	}
	clearGcTimeout() {
		void 0 !== this.#s && (Vs.clearTimeout(this.#s), this.#s = void 0);
	}
};
function _o(e) {
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
			}, d = oo(t.options, t.fetchOptions), u = async (e, a, r) => {
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
				})(), s = await d(i), { maxPages: o } = t.options, l = r ? io : ro;
				return {
					pages: l(e.pages, s, o),
					pageParams: l(e.pageParams, a, o)
				};
			};
			if (r && i.length) {
				const e = "backward" === r, t = e ? Io : So, n = {
					pages: i,
					pageParams: s
				};
				o = await u(n, t(a, n), e);
			} else {
				const t = e ?? i.length;
				do {
					const e = 0 === l ? s[0] ?? a.initialPageParam : So(a, o);
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
function So(e, { pages: t, pageParams: n }) {
	const a = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[a], t, n[a], n) : void 0;
}
function Io(e, { pages: t, pageParams: n }) {
	return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var ko = class extends vo {
	#o;
	#l;
	#c;
	#d;
	#u;
	#p;
	#m;
	#h;
	constructor(e) {
		super(), this.#h = !1, this.#m = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#u = e.client, this.#d = this.#u.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#l = bo(this.options), this.state = e.state ?? this.#l, this.scheduleGc();
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
			const e = bo(this.options);
			void 0 !== e.data && (this.setState(Do(e.data, e.dataUpdatedAt)), this.#l = e);
		}
	}
	optionalRemove() {
		this.observers.length || "idle" !== this.state.fetchStatus || this.#d.remove(this);
	}
	setData(e, t) {
		const n = ao(this.state.data, e, this.options);
		return this.#y({
			data: n,
			type: "success",
			dataUpdatedAt: t?.updatedAt,
			manual: t?.manual
		}), n;
	}
	setState(e) {
		this.#y({
			type: "setState",
			state: e
		});
	}
	cancel(e) {
		const t = this.#p?.promise;
		return this.#p?.cancel(e), t ? t.then(Bs).catch(Bs) : Promise.resolve();
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
		return this.observers.some((e) => !1 !== zs(e.options.enabled, this));
	}
	isDisabled() {
		return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === so || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		return this.getObserversCount() > 0 && this.observers.some((e) => "static" === zs(e.options.staleTime, this));
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
		this.state.isInvalidated || this.#y({ type: "invalidate" });
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
			const e = oo(this.options, t), n = (() => {
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
		("infinite" === this.#o ? _o(this.options.pages) : this.options.behavior)?.onFetch(i, this), this.#c = this.state, "idle" !== this.state.fetchStatus && this.state.fetchMeta === i.fetchOptions?.meta || this.#y({
			type: "fetch",
			meta: i.fetchOptions?.meta
		});
		const s = this.#p = wo({
			initialPromise: t?.initialPromise,
			fn: i.fetchFn,
			onCancel: (e) => {
				e instanceof go && e.revert && this.setState({
					...this.#c,
					fetchStatus: "idle"
				}), n.abort();
			},
			onFail: (e, t) => {
				this.#y({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#y({ type: "pause" });
			},
			onContinue: () => {
				this.#y({ type: "continue" });
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
			if (o instanceof go) {
				if (o.silent) return this.#p.promise;
				if (o.revert) {
					if (void 0 === this.state.data) throw o;
					return this.state.data;
				}
			}
			throw this.#y({
				type: "error",
				error: o
			}), this.#d.config.onError?.(o, this), this.#d.config.onSettled?.(this.state.data, o, this), o;
		} finally {
			this.#p === s && (this.#p = void 0), this.scheduleGc();
		}
	}
	#y(e) {
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
						fetchStatus: fo(a.networkMode) ? "fetching" : "paused",
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
						...Do(e.data, e.dataUpdatedAt),
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
		})(this.state), mo.batch(() => {
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
function Do(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success"
	};
}
function bo(e) {
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
var Mo = class extends vo {
	#u;
	#f;
	#g;
	#p;
	constructor(e) {
		super(), this.#u = e.client, this.mutationId = e.mutationId, this.#g = e.mutationCache, this.#f = [], this.state = e.state || {
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
		this.#f.includes(e) || (this.#f.push(e), this.clearGcTimeout(), this.#g.notify({
			type: "observerAdded",
			mutation: this,
			observer: e
		}));
	}
	removeObserver(e) {
		this.#f = this.#f.filter((t) => t !== e), this.scheduleGc(), this.#g.notify({
			type: "observerRemoved",
			mutation: this,
			observer: e
		});
	}
	optionalRemove() {
		this.#f.length || ("pending" === this.state.status ? this.scheduleGc() : this.#g.remove(this));
	}
	continue() {
		return this.#p?.continue() ?? ("pending" === this.state.status ? this.execute(this.state.variables) : Promise.resolve());
	}
	async execute(e) {
		const t = () => {
			this.#y({ type: "continue" });
		}, n = {
			client: this.#u,
			meta: this.options.meta,
			mutationKey: this.options.mutationKey
		}, a = this.#p = wo({
			fn: () => this.options.mutationFn ? this.options.mutationFn(e, n) : Promise.reject(/* @__PURE__ */ new Error("No mutationFn found")),
			onFail: (e, t) => {
				this.#y({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#y({ type: "pause" });
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
				this.#y({
					type: "pending",
					variables: e,
					isPaused: i
				}), this.#g.config.onMutate && await this.#g.config.onMutate(e, this, n);
				const t = await this.options.onMutate?.(e, n);
				t !== this.state.context && this.#y({
					type: "pending",
					context: t,
					variables: e,
					isPaused: i
				});
			}
			const s = await a.start();
			return await this.#g.config.onSuccess?.(s, e, this.state.context, this, n), await this.options.onSuccess?.(s, e, this.state.context, n), await this.#g.config.onSettled?.(s, null, this.state.variables, this.state.context, this, n), await this.options.onSettled?.(s, null, e, this.state.context, n), this.#y({
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
			throw this.#y({
				type: "error",
				error: s
			}), s;
		} finally {
			this.#p === a && (this.#p = void 0), this.#g.runNext(this);
		}
	}
	#y(e) {
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
		})(this.state), mo.batch(() => {
			this.#f.forEach((t) => {
				t.onMutationUpdate(e);
			}), this.#g.notify({
				mutation: this,
				type: "updated",
				action: e
			});
		});
	}
}, Eo = class extends co {
	#w;
	#v;
	#_;
	constructor(e = {}) {
		super(), this.config = e, this.#w = /* @__PURE__ */ new Set(), this.#v = /* @__PURE__ */ new Map(), this.#_ = 0;
	}
	build(e, t, n) {
		const a = new Mo({
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
		const t = Ao(e);
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
			const t = Ao(e);
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
		const t = Ao(e);
		if ("string" == typeof t) {
			const n = this.#v.get(t)?.find((e) => "pending" === e.state.status);
			return !n || n === e;
		}
		return !0;
	}
	runNext(e) {
		const t = Ao(e);
		return "string" == typeof t ? (this.#v.get(t)?.find((t) => t !== e && t.state.isPaused))?.continue() ?? Promise.resolve() : Promise.resolve();
	}
	clear() {
		mo.batch(() => {
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
		return this.getAll().find((e) => $s(t, e));
	}
	findAll(e = {}) {
		return this.getAll().filter((t) => $s(e, t));
	}
	notify(e) {
		mo.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	resumePausedMutations() {
		const e = this.getAll().filter((e) => e.state.isPaused);
		return mo.batch(() => Promise.all(e.map((e) => e.continue().catch(Bs))));
	}
};
function Ao(e) {
	return e.options.scope?.id;
}
var Po = class extends co {
	#S;
	constructor(e = {}) {
		super(), this.config = e, this.#S = /* @__PURE__ */ new Map();
	}
	build(e, t, n) {
		const a = t.queryKey, r = t.queryHash ?? Qs(a, t);
		let i = this.get(r);
		return i || (i = new ko({
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
		mo.batch(() => {
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
		return this.getAll().find((e) => Ws(t, e));
	}
	findAll(e = {}) {
		const t = this.getAll();
		return Object.keys(e).length > 0 ? t.filter((t) => Ws(e, t)) : t;
	}
	notify(e) {
		mo.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	onFocus() {
		mo.batch(() => {
			this.getAll().forEach((e) => {
				e.onFocus();
			});
		});
	}
	onOnline() {
		mo.batch(() => {
			this.getAll().forEach((e) => {
				e.onOnline();
			});
		});
	}
};
const No = new class {
	#I;
	#g;
	#m;
	#k;
	#D;
	#b;
	#M;
	#E;
	constructor(e = {}) {
		this.#I = e.queryCache || new Po(), this.#g = e.mutationCache || new Eo(), this.#m = e.defaultOptions || {}, this.#k = /* @__PURE__ */ new Map(), this.#D = /* @__PURE__ */ new Map(), this.#b = 0;
	}
	mount() {
		this.#b++, 1 === this.#b && (this.#M = uo.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#I.onFocus());
		}), this.#E = ho.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#I.onOnline());
		}));
	}
	unmount() {
		this.#b--, 0 === this.#b && (this.#M?.(), this.#M = void 0, this.#E?.(), this.#E = void 0);
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
		return void 0 === a ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(zs(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(a));
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
		return mo.batch(() => this.#I.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]));
	}
	getQueryState(e) {
		const t = this.defaultQueryOptions({ queryKey: e });
		return this.#I.get(t.queryHash)?.state;
	}
	removeQueries(e) {
		const t = this.#I;
		mo.batch(() => {
			t.findAll(e).forEach((e) => {
				t.remove(e);
			});
		});
	}
	resetQueries(e, t) {
		const n = this.#I;
		return mo.batch(() => {
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
		}, a = mo.batch(() => this.#I.findAll(e).map((e) => e.cancel(n)));
		return Promise.all(a).then(Bs).catch(Bs);
	}
	invalidateQueries(e, t = {}) {
		return mo.batch(() => (this.#I.findAll(e).forEach((e) => {
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
		}, a = mo.batch(() => this.#I.findAll(e).filter((e) => !e.isDisabled() && !e.isStatic()).map((e) => {
			let t = e.fetch(void 0, n);
			return n.throwOnError || (t = t.catch(Bs)), "paused" === e.state.fetchStatus ? Promise.resolve() : t;
		}));
		return Promise.all(a).then(Bs);
	}
	async query(e) {
		const t = this.defaultQueryOptions(e);
		void 0 === t.retry && (t.retry = !1);
		const n = this.#I.build(this, t), a = n.isStaleByTime(zs(t.staleTime, n)) ? await n.fetch(t) : n.state.data, r = t.select;
		return r ? r(a) : a;
	}
	fetchQuery(e) {
		const t = this.defaultQueryOptions(e);
		void 0 === t.retry && (t.retry = !1);
		const n = this.#I.build(this, t);
		return n.isStaleByTime(zs(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
	}
	prefetchQuery(e) {
		return this.fetchQuery(e).then(Bs).catch(Bs);
	}
	infiniteQuery(e) {
		return e._type = "infinite", this.query(e);
	}
	fetchInfiniteQuery(e) {
		return e._type = "infinite", this.fetchQuery(e);
	}
	prefetchInfiniteQuery(e) {
		return this.fetchInfiniteQuery(e).then(Bs).catch(Bs);
	}
	ensureInfiniteQueryData(e) {
		return e._type = "infinite", this.ensureQueryData(e);
	}
	resumePausedMutations() {
		return ho.isOnline() ? this.#g.resumePausedMutations() : Promise.resolve();
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
		this.#k.set(Js(e), {
			queryKey: e,
			defaultOptions: t
		});
	}
	getQueryDefaults(e) {
		const t = [...this.#k.values()], n = {};
		return t.forEach((t) => {
			Ys(e, t.queryKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	setMutationDefaults(e, t) {
		this.#D.set(Js(e), {
			mutationKey: e,
			defaultOptions: t
		});
	}
	getMutationDefaults(e) {
		const t = [...this.#D.values()], n = {};
		return t.forEach((t) => {
			Ys(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
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
		return t.queryHash || (t.queryHash = Qs(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === so && (t.enabled = !1), t;
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
} } }), To = (e, n) => ({
	sitePassword: null,
	username: "anonymous",
	isAuthenticated: !1,
	isAdmin: !1,
	scopeExitBlocked: !1,
	setScopeExitBlocked: (t) => la(() => e({ scopeExitBlocked: t })),
	setAuth: (a, r, i) => an(() => {
		e({
			sitePassword: a,
			username: r,
			isAuthenticated: !0,
			isAdmin: i ?? !1
		});
		const s = function(e) {
			try {
				const t = localStorage.getItem(qs(e));
				if (!t) return null;
				const n = JSON.parse(t), a = {};
				for (const e of Ks) e in n && (a[e] = n[e]);
				return Object.keys(a).length > 0 ? a : null;
			} catch {
				return null;
			}
		}(r);
		if (s) {
			const { cursor: a, settings: i } = function(e) {
				const n = new Set(t), a = {}, r = {};
				for (const [t, i] of Object.entries(e)) n.has(t) ? r[t] = i : a[t] = i;
				return {
					cursor: a,
					settings: r
				};
			}(s), o = function(e) {
				return `${ne() ?? "legacy"}:${e}`;
			}(r), l = n().appliedUserPreferencesKey === o;
			e({
				...a,
				...l ? {} : i,
				appliedUserPreferencesKey: o
			});
		}
		const o = n();
		ct.setContext(o.currentFileId, o.availableDates[o.currentDateIndex] ?? null, r, o.selectedStudyId);
	}),
	setIsAdmin: (t) => e({ isAdmin: t }),
	clearAuth: () => an(() => {
		const t = n();
		(function(e, t) {
			try {
				const n = {};
				for (const e of Ks) e in t && (n[e] = t[e]);
				localStorage.setItem(qs(e), JSON.stringify(n));
			} catch {}
		})(t.username, t), No.clear(), e({
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
		}), ct.setContext(null, null, "anonymous", n().selectedStudyId);
	})
});
let xo = null;
const Fo = /* @__PURE__ */ new WeakMap(), Co = (e, t, n) => ({
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
		if (!Le.owns(n, t())) return !1;
		const o = t();
		if (!xe(n.identity, {
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
		Le.owns(n, t()) && e({ sleepMarkers: a });
	},
	_loadProposalMarkers: (n, a, r, i) => {
		Le.owns(n, t()) && (e({
			sleepMarkers: i,
			acceptingProposal: null,
			proposalNight: {
				fileId: a,
				date: r,
				authoredSleepMarkers: t().proposalNight?.authoredSleepMarkers ?? t().sleepMarkers,
				sleepMarkers: i.map((e) => Fe(e, {
					onsetTimestamp: e.onsetTimestamp,
					offsetTimestamp: e.offsetTimestamp,
					markerType: e.markerType
				}))
			}
		}), Le.updateContext(n, t()));
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
		Le.owns(n, t()) && e({ nonwearMarkers: a });
	},
	_loadExplicitNoNonwearFromServer: (n, a) => {
		Le.owns(n, t()) && e({ explicitNoNonwear: a });
	},
	_loadStatusFlagsFromServer: (n, a) => {
		Le.owns(n, t()) && e(a);
	},
	setSleepMarkers: (a, r, i) => {
		let s = null;
		return Rn(t, e, (e) => {
			const t = r(e);
			if (null === t) return null;
			const o = n[Mn(a)].replacementRefusal(a, e.sleepMarkers, t);
			if (null !== o) return s = o, null;
			const l = {
				...i?.acceptProposal ? { proposalNight: null } : {},
				...void 0 !== i?.selectedPeriodIndex ? { selectedPeriodIndex: i.selectedPeriodIndex } : {}
			};
			if (void 0 === i?.invalidNight) return { patch: {
				sleepMarkers: t,
				...l
			} };
			const c = i.invalidNight, { kept: d, cleared: u } = c ? rt(t) : {
				kept: t,
				cleared: []
			};
			return {
				patch: {
					sleepMarkers: c ? d.map((e, t) => ({
						...e,
						markerIndex: t + 1
					})) : t,
					isInvalidNight: c,
					...l
				},
				record: (e, t) => {
					t.isInvalidNight !== c && Ut("invalid_night_toggled", {
						value: c,
						clearedSleepMarkers: u
					});
				}
			};
		}, {
			night: Sn(a),
			editsDisplayedSleep: !0
		}).then((e) => (null !== s && En(a, s), e));
	},
	setNonwearMarkers: (n, a) => Rn(t, e, (e) => {
		const t = a(e);
		if (null === t) return null;
		const n = ln(e, t);
		return { patch: {
			nonwearMarkers: n.nonwearMarkers,
			explicitNoNonwear: n.explicitNoNonwear
		} };
	}, { night: Sn(n) }),
	setSelectedPeriod: (t) => e({
		selectedPeriodIndex: t,
		...He,
		placementRejected: !1
	}),
	setMarkerMode: (t) => e({
		markerMode: t,
		creationMode: "idle",
		pendingOnsetTimestamp: null,
		placementRejected: !1,
		selectedPeriodIndex: null,
		...He
	}),
	handlePlotClick: (n, a) => {
		const r = Sn(n);
		return gn(async () => {
			const i = () => In(r) ? t() : {
				...Le.context(n),
				...Le.night(n)
			}, s = (t) => {
				In(r) ? e(t) : Le.updateContext(n, {
					...i(),
					...t
				});
			};
			if (C(n.context.currentFileSourceType)) return Jt("marker_placed", "mutation_on_read_only_view"), En(r.session, $t), Promise.resolve();
			const { markerMode: o, creationMode: l, pendingOnsetTimestamp: c, sleepMarkers: d, nonwearMarkers: u } = i();
			let p = a;
			const m = n.context._dataRange;
			if (m && (p = Math.max(m.min, Math.min(m.max, p))), "idle" === l) {
				const e = "sleep" === o ? d.findIndex((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && p >= e.onsetTimestamp && p <= e.offsetTimestamp) : u.findIndex((e) => null != e.startTimestamp && null != e.endTimestamp && p >= e.startTimestamp && p <= e.endTimestamp);
				if (-1 !== e) return s({
					selectedPeriodIndex: e,
					placementRejected: !1
				}), Promise.resolve();
				const t = et(o, ("sleep" === o ? d.length : u.length) + 1);
				if (t) return Jt("marker_placed", "marker_limit_exceeded"), void En(r.session, t);
				s({
					creationMode: "placing_onset",
					pendingOnsetTimestamp: p,
					placementRejected: !1
				});
			} else if ("placing_onset" === l && null !== c) {
				const e = Math.min(c, p), n = Math.max(c, p);
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
	addSleepMarker: (a, r, i, s) => {
		const o = _n(a);
		return C(a.context.currentFileSourceType) ? (Jt("marker_placed", "mutation_on_read_only_view", o), En(a, $t), Promise.resolve(!1)) : !Number.isFinite(r) || !Number.isFinite(i) || i <= r ? (console.warn(Qt), Jt("marker_placed", "boundaries_disordered", o), En(a, Qt), Promise.resolve(!1)) : n[Mn(a)].place({
			set: e,
			get: t
		}, a, {
			startTimestamp: r,
			endTimestamp: i
		}, s);
	},
	addNonwearMarker: (n, a, r) => {
		const i = _n(n);
		return C(n.context.currentFileSourceType) ? (Jt("marker_placed", "mutation_on_read_only_view", i), En(n, $t), Promise.resolve(!1)) : !Number.isFinite(a) || !Number.isFinite(r) || r <= a ? (console.warn(Qt), Jt("marker_placed", "boundaries_disordered", i), En(n, Qt), Promise.resolve(!1)) : Rn(t, e, ({ nonwearMarkers: e }) => {
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
		}, { night: Sn(n) });
	},
	updateMarker: (a, r, i, s) => {
		if (Le.holds(a, t()) && kn("marker_adjusted")) return Promise.resolve();
		if (C(a.context.currentFileSourceType)) return Jt("marker_adjusted", "mutation_on_read_only_view"), Promise.resolve();
		if ("sleep" === r) {
			const r = n[Mn(a)];
			if (r.adjust) return r.adjust({
				set: e,
				get: t
			}, a, i, s);
		}
		const o = s instanceof Promise, l = o ? null : Fo.get(a) ?? null, c = l ? { ...l.night } : Sn(a), d = wn(c.context, r, i);
		return null === d ? Promise.resolve() : gn(async () => {
			let n = o ? await s : "function" == typeof s ? null : s;
			if (!n && "function" != typeof s) return;
			const a = (e, t = !1) => {
				const a = vn(e, r, d);
				if (a < 0) return bn(r, d), null;
				if ("function" == typeof s && (n = s(e, a)), !n) return null;
				const i = { ...n }, o = c.context._dataRange;
				o && (void 0 !== i.onsetTimestamp && (i.onsetTimestamp = Math.max(o.min, Math.min(o.max, i.onsetTimestamp))), void 0 !== i.offsetTimestamp && (i.offsetTimestamp = Math.max(o.min, Math.min(o.max, i.offsetTimestamp))), void 0 !== i.startTimestamp && (i.startTimestamp = Math.max(o.min, Math.min(o.max, i.startTimestamp))), void 0 !== i.endTimestamp && (i.endTimestamp = Math.max(o.min, Math.min(o.max, i.endTimestamp))));
				const l = "sleep" === r ? e.sleepMarkers[a] : void 0, u = "sleep" === r ? void 0 : e.nonwearMarkers[a], p = l ?? u;
				if (!p || Object.entries(i).every(([e, t]) => Reflect.get(p, e) === t)) return null;
				if (l ?? u) {
					const e = l ? i.onsetTimestamp ?? l.onsetTimestamp : i.startTimestamp ?? u?.startTimestamp ?? null, t = l ? i.offsetTimestamp ?? l.offsetTimestamp : i.endTimestamp ?? u?.endTimestamp ?? null;
					if (null !== e && null !== t && t <= e) return console.warn(Qt), Jt("marker_adjusted", "boundaries_disordered"), En(c.session, Qt), null;
				}
				if ("sleep" === r) {
					const t = void 0 !== i.onsetTimestamp || void 0 !== i.offsetTimestamp;
					return { patch: {
						sleepMarkers: e.sleepMarkers.map((e, n) => {
							if (n !== a) return e;
							const r = {
								...e,
								...i
							};
							return t && ("auto" === r.source || r.placement) && (r.edited = !0), r;
						}),
						placementRejected: !1
					} };
				}
				const m = e.nonwearMarkers.map((e, t) => t === a ? {
					...e,
					...i
				} : e);
				return { patch: {
					nonwearMarkers: m,
					explicitNoNonwear: tn(m, e.explicitNoNonwear),
					placementRejected: !1
				} };
			};
			if (l) {
				const n = In(c) ? t() : Le.context(c.session), r = a(n);
				if (!r) return;
				const i = pn(un(n), r);
				if (!await An(i, c.session)) return;
				return Dn(t, e, (e, t) => {
					l.snapshotPending && (l.snapshotPending = !1, t(cn(e()))), t({
						...r.patch,
						...i,
						isDirty: !0,
						_editGeneration: e()._editGeneration + 1
					});
				}, {
					night: c,
					preview: !0
				});
			}
			await Cn(t, e, {
				editsDisplayedSleep: "sleep" === r,
				night: c,
				propose: (e, t) => {
					const s = a(e, t);
					return s && {
						...s,
						record: (e) => {
							Ut("marker_adjusted", {
								category: r,
								periodIndex: i,
								updates: n
							}, { after: e });
						}
					};
				}
			});
		}, c, null !== l);
	},
	deleteMarker: (a, r, i) => {
		if ("sleep" === r) {
			const r = n[Mn(a)];
			if (r.remove) return r.remove({
				set: e,
				get: t
			}, a, i);
		}
		const s = Sn(a), o = wn(s.context, r, i);
		return Dn(t, e, (e, t) => {
			if (C(e().currentFileSourceType)) return void Jt("marker_deleted", "mutation_on_read_only_view");
			const n = vn(e(), r, o);
			if (n < 0) return void bn(r, o);
			const a = "sleep" === r ? e().sleepMarkers[n] : e().nonwearMarkers[n];
			if (t(cn(e())), "sleep" === r) {
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
					category: r,
					periodIndex: n,
					before: a
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
					category: r,
					periodIndex: n,
					before: a
				});
			}
		}, { night: s });
	},
	splitSleepPeriod: (a, r, i, s = []) => C(a.context.currentFileSourceType) ? (Jt("sleep_period_split", "mutation_on_read_only_view"), Promise.resolve()) : n[Mn(a)].split({
		set: e,
		get: t
	}, a, r, {
		at: i,
		timestamps: s
	}),
	mergeSleepPeriod: (a, r, i) => C(a.context.currentFileSourceType) ? (Jt("sleep_period_merged", "mutation_on_read_only_view"), Promise.resolve()) : n[Mn(a)].merge({
		set: e,
		get: t
	}, a, r, i),
	setIsInvalidNight: (n, a) => {
		if (Le.holds(n, t()) && kn("invalid_night_toggled")) return Promise.resolve(0);
		let r = a && !t().isInvalidNight ? rt(t().sleepMarkers).cleared.length : 0;
		return Dn(t, e, (e, t) => {
			r = (() => {
				if (e().isInvalidNight === a) return 0;
				const { kept: n, cleared: r } = rt(e().sleepMarkers), i = a ? r : [];
				t(cn(e()));
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
		}, { night: Sn(n) }).then(() => r);
	},
	setExplicitNoNonwear: (n, a) => {
		Dn(t, e, (e, t) => {
			if (e().explicitNoNonwear === a) return;
			t(cn(e()));
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
		}, { night: Sn(n) });
	},
	setNeedsConsensus: (n, a) => {
		Dn(t, e, (e, t) => {
			e().needsConsensus !== a && (Ut("consensus_toggled", { value: a }), t(cn(e())), t({
				needsConsensus: a,
				isDirty: !0,
				_editGeneration: e()._editGeneration + 1
			}));
		}, { night: Sn(n) });
	},
	setNotes: (n, a) => {
		Dn(t, e, (e, t) => {
			const r = e().notes, i = Le.holds(n) ? null : xn, s = null !== i || null === Yt;
			i || function(t) {
				null === Yt ? Xt = {
					identity: Ke(qt().store.getState()),
					value: t
				} : clearTimeout(Yt), Yt = setTimeout(() => {
					Yt = null, Zt(e().notes);
				}, 1500);
			}(r), s && t(cn(e())), t({
				notes: a,
				isDirty: !0,
				_editGeneration: e()._editGeneration + 1
			}), i && Zt(a, r, i);
		}, { night: Sn(n) });
	},
	setSaveError: (t) => e({ saveError: t }),
	_flushSave: rn,
	pushMarkerSnapshot: () => e(cn(t())),
	undo: (n) => Dn(t, e, (e, t) => {
		if (C(e().currentFileSourceType)) return void Jt("undo", "mutation_on_read_only_view");
		const n = () => {
			const e = Vt();
			Ut("undo", {
				sleepCount: e.sleepMarkers.length,
				nonwearCount: e.nonwearMarkers.length,
				stateAfter: e
			});
		}, { markerHistory: a, markerHistoryIndex: r, sleepMarkers: i, nonwearMarkers: s, isInvalidNight: o, explicitNoNonwear: l, needsConsensus: c, notes: d, selectedPeriodIndex: u, _editGeneration: p } = e();
		if (r < 0) return void Jt("undo", "undo_beyond_history");
		if (r === a.length - 1) {
			const m = {
				proposalNight: e().proposalNight,
				sleepMarkers: i.map((e) => Fe(e)),
				nonwearMarkers: s.map((e) => Fe(e)),
				isInvalidNight: o,
				isInvalidNightImplicit: e().isInvalidNightImplicit,
				explicitNoNonwear: l,
				needsConsensus: c,
				notes: d,
				selectedPeriodIndex: u,
				timestamp: Date.now(),
				editGeneration: p
			}, h = a[r];
			if (!h || h.editGeneration !== p) {
				const r = [...a, m];
				t({
					markerHistory: r,
					markerHistoryIndex: r.length - 1
				});
				const i = r[r.length - 2];
				i ? (t({
					proposalNight: i.proposalNight ?? null,
					sleepMarkers: i.sleepMarkers.map((e) => Fe(e)),
					nonwearMarkers: i.nonwearMarkers.map((e) => Fe(e)),
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
				}), n()) : Jt("undo", "undo_beyond_history");
				return;
			}
		}
		const m = r - 1;
		if (m < 0) return void Jt("undo", "undo_beyond_history");
		const h = a[m];
		h ? (t({
			proposalNight: h.proposalNight ?? null,
			sleepMarkers: h.sleepMarkers.map((e) => Fe(e)),
			nonwearMarkers: h.nonwearMarkers.map((e) => Fe(e)),
			isInvalidNight: h.isInvalidNight,
			isInvalidNightImplicit: h.isInvalidNightImplicit ?? !1,
			explicitNoNonwear: h.explicitNoNonwear,
			needsConsensus: h.needsConsensus,
			notes: h.notes,
			selectedPeriodIndex: h.selectedPeriodIndex,
			isDirty: !0,
			_editGeneration: e()._editGeneration + 1,
			markerHistory: a.map((t, n) => n === m ? {
				...t,
				editGeneration: e()._editGeneration + 1
			} : t),
			markerHistoryIndex: m
		}), n()) : Jt("undo", "undo_beyond_history");
	}, { night: Sn(n) }),
	redo: (n) => Dn(t, e, (e, t) => {
		if (C(e().currentFileSourceType)) return void Jt("redo", "mutation_on_read_only_view");
		const { markerHistory: n, markerHistoryIndex: a } = e(), r = a + 1;
		if (r >= n.length) return void Jt("redo", "redo_beyond_history");
		const i = n[r];
		if (!i) return void Jt("redo", "redo_beyond_history");
		t({
			proposalNight: i.proposalNight ?? null,
			sleepMarkers: i.sleepMarkers.map((e) => Fe(e)),
			nonwearMarkers: i.nonwearMarkers.map((e) => Fe(e)),
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
		const s = Vt();
		Ut("redo", {
			sleepCount: s.sleepMarkers.length,
			nonwearCount: s.nonwearMarkers.length,
			stateAfter: s
		});
	}, { night: Sn(n) }),
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
		if (kn("marker_moved")) return;
		const a = {
			token: n,
			night: Sn(n),
			before: null,
			snapshotPending: !0
		};
		xo = a, Fo.set(n, a), Dn(t, e, (e, t) => {
			a.before = e(), Le.setDragging(n, !0), t({
				_isDragTransaction: !0,
				_dragSnapshotForAudit: {
					sleepMarkers: e().sleepMarkers.map((e) => Fe(e)),
					nonwearMarkers: e().nonwearMarkers.map((e) => Fe(e))
				}
			});
		}, { night: a.night });
	},
	commitDragTransaction: (n) => {
		const a = Fo.get(n);
		if (!a) return Promise.resolve();
		Fo.delete(n), xo === a && (xo = null);
		let r = null;
		return gn(async () => {
			try {
				const n = a.before;
				if (!n) return;
				const i = {
					sleepMarkers: n.sleepMarkers,
					nonwearMarkers: n.nonwearMarkers
				}, s = r ?? (In(a.night) ? t() : Le.night(a.night.session));
				if (!s || JSON.stringify(i) === JSON.stringify({
					sleepMarkers: s.sleepMarkers,
					nonwearMarkers: s.nonwearMarkers
				})) return;
				const o = r ??= {
					sleepMarkers: s.sleepMarkers.map((e) => Fe(e)),
					nonwearMarkers: s.nonwearMarkers.map((e) => Fe(e))
				};
				if (!await Cn(t, e, {
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
						sleepMarkers: i.sleepMarkers.map((e) => Fe(e)),
						nonwearMarkers: i.nonwearMarkers.map((e) => Fe(e))
					};
					In(a.night) ? e({
						...n,
						isDirty: !0,
						_editGeneration: t()._editGeneration + 1
					}) : a.night.session && Le.write(a.night.session, {
						...Le.night(a.night.session),
						...n
					}, []);
				}
			} finally {
				if (Le.setDragging(n, !1), In(a.night)) e({
					_isDragTransaction: !1,
					_dragSnapshotForAudit: null,
					...t().isDirty && !a.snapshotPending ? { _editGeneration: t()._editGeneration + 1 } : {}
				});
				else {
					const e = Le.context(a.night.session);
					Le.updateContext(a.night.session, {
						...e,
						_isDragTransaction: !1,
						_dragSnapshotForAudit: null
					});
				}
			}
		}, a.night).then(() => {});
	},
	clearAllMarkers: (n, a) => C(n.context.currentFileSourceType) || Le.holds(n, t()) && kn("markers_cleared") ? Promise.resolve(!1) : Dn(t, e, (e, t) => {
		a?.skipAudit || Ut("markers_cleared", {
			sleepCount: e().sleepMarkers.length,
			nonwearCount: e().nonwearMarkers.length
		}), t(cn(e())), t({
			sleepMarkers: [],
			nonwearMarkers: [],
			isDirty: !0,
			_editGeneration: e()._editGeneration + 1,
			selectedPeriodIndex: null
		});
	}, { night: Sn(n) }).then(() => !0),
	applyConsensusCandidate: (n, { kind: a, sleepMarkers: r, nonwearMarkers: i, isInvalidNight: s, explicitNoNonwear: o }) => Rn(t, e, () => {
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
		night: Sn(n),
		editsDisplayedSleep: "sleep" === a
	})
});
let Ro = !1, Oo = !1, Ho = null, Lo = Promise.resolve();
async function jo() {
	for (;;) {
		const e = Lo;
		if (await e, e === Lo) return;
	}
}
const Ko = (e, t) => ({
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
		if (Oo) return void (Ho = [
			n,
			a,
			r,
			i
		]);
		if (t().isDirty) return Oo = !0, void (Lo = (async () => {
			try {
				if (t().isDirty && !await (t()._flushSave ?? rn)()) return;
				Oo = !1, t().setCurrentFile(n, a, r, i);
			} catch (s) {
				e({ saveError: `File switch save failed: ${nn(s)}` }), mt("warn", "File switch save failed", ht(s));
			} finally {
				Oo = !1;
				const e = Ho;
				Ho = null, e && t().setCurrentFile(...e);
			}
		})());
		const { currentFileId: s } = t(), o = s === n;
		ct.setContext(n, o ? t().availableDates[t().currentDateIndex] ?? null : null, t().username, t().selectedStudyId), e({
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
	setCurrentDateIndex: (n) => Ro ? Promise.resolve(!1) : (Ro = !0, (async () => {
		try {
			xo && t().commitDragTransaction(xo.token);
			const { currentDateIndex: a, isDirty: r } = t();
			if (n === a) return !0;
			if (r) {
				if (!await (t()._flushSave ?? rn)()) return !1;
			} else await Promise.resolve();
			en(t().notes), Ut("session_end");
			const i = t().availableDates[n] ?? null;
			return ct.setContext(t().currentFileId, i, t().username, t().selectedStudyId), e({
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
			return e({ saveError: `Navigation save failed: ${nn(a)}` }), mt("warn", "Date navigation save failed", ht(a)), !1;
		} finally {
			Ro = !1;
		}
	})()),
	navigateDate: (n) => {
		Ro || (Ro = !0, (async () => {
			try {
				xo && t().commitDragTransaction(xo.token);
				const a = t(), r = a.currentDateIndex + n;
				if (r < 0 || r >= a.availableDates.length) return;
				if (a.isDirty) {
					if (!await (a._flushSave ?? rn)()) return;
				} else await Promise.resolve();
				const i = t(), s = i.currentDateIndex + n;
				if (s < 0 || s >= i.availableDates.length) return;
				en(t().notes), Ut("session_end");
				const o = i.availableDates[s] ?? null;
				ct.setContext(i.currentFileId, o, t().username, t().selectedStudyId), e({
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
				e({ saveError: `Navigation save failed: ${nn(a)}` }), mt("warn", "Date navigation save failed", ht(a));
			} finally {
				Ro = !1;
			}
		})());
	}
}), qo = "Under the Actiware paradigm a sleep period is derived from its rest interval. Move, add or delete the rest interval instead.";
function Go(e, t) {
	return En(t, qo), Promise.resolve();
}
const Vo = {
	nightRecordEdits: {
		place: ({ get: e }, t, { startTimestamp: n, endTimestamp: a }) => e().editActiwareRest(t, {
			kind: "add",
			to: {
				startTimestamp: n,
				endTimestamp: a
			}
		}),
		adjust: Go,
		remove: ({ get: e }, t, n) => {
			const a = t.context.sleepMarkers[n];
			return null == a?.onsetTimestamp || null == a.offsetTimestamp ? Promise.resolve() : e().editActiwareRest(t, {
				kind: "remove",
				holding: {
					startTimestamp: a.onsetTimestamp,
					endTimestamp: a.offsetTimestamp
				}
			}).then(() => {});
		},
		split: Go,
		merge: Go,
		replacementRefusal: (e, t, n) => function(e, t) {
			const n = new Set(e.map((e) => `${String(e.onsetTimestamp)}:${String(e.offsetTimestamp)}`));
			return t.every((e) => n.has(`${String(e.onsetTimestamp)}:${String(e.offsetTimestamp)}`));
		}(t, n) ? null : qo
	},
	slice: { create: (e, t) => ({
		selectedActiwareRest: null,
		actiwareRestPreview: null,
		editActiwareRest: async (n, a) => {
			const r = n.identity.dataSource?.nightRecordData?.rest_intervals;
			if (!r?.writeEdit) return En(n, "This night's rest intervals cannot be edited here."), !1;
			let i;
			try {
				i = await r.writeEdit({
					fileId: n.fileId,
					date: n.date,
					actor: {
						username: t().username,
						studyId: t().selectedStudyId
					}
				}, a, n.identity.db ?? void 0);
			} catch (c) {
				return En(n, c instanceof Error ? c.message : String(c)), !1;
			}
			await n.identity.queryClient.invalidateQueries({ queryKey: ["actiware-rests"] });
			const s = "remove" === a.kind ? null : a.to, o = s ? i.findIndex((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && e.onsetTimestamp >= s.startTimestamp && e.offsetTimestamp <= s.endTimestamp) : -1, l = await Rn(t, e, () => ({ patch: {
				sleepMarkers: i,
				...o >= 0 ? { selectedPeriodIndex: o } : {}
			} }), {
				night: Sn(n),
				editsDisplayedSleep: !0
			});
			return l && Le.owns(n, t()) && e(s && o < 0 ? {
				selectedActiwareRest: s,
				selectedPeriodIndex: null
			} : { selectedActiwareRest: null }), l;
		},
		selectActiwareRest: (t) => e({
			selectedActiwareRest: t,
			selectedPeriodIndex: null,
			markerMode: "sleep",
			placementRejected: !1
		}),
		previewActiwareRestEdge: (n, a) => {
			void 0 !== a && t().actiwareRestPreview !== a || e({ actiwareRestPreview: n });
		}
	}) }
}, Uo = {
	place: ({ set: e, get: t }, n, { startTimestamp: a, endTimestamp: r }, i) => {
		const s = "object" == typeof i ? i : void 0, o = "object" == typeof i ? i.markerType : i, l = _n(n), c = s?.sourceRecordReference;
		return Rn(t, e, (e) => {
			const t = e.sleepMarkers;
			if (void 0 !== c && t.some((e) => nt(e) && e.sourceRecordReference !== c)) return Jt("marker_placed", "multiple_main_sleep", l), En(n, "Diary Place cannot replace the existing main sleep. Move or delete it before placing this diary's sleep."), null;
			const i = (o === v.MAIN_SLEEP ? t.find(nt) : void 0) ?? (void 0 === c ? void 0 : t.find((e) => e.sourceRecordReference === c)), s = i ? t.indexOf(i) : t.length, d = o ?? i?.markerType ?? Ye(t, e), u = {
				onsetTimestamp: a,
				offsetTimestamp: r,
				markerIndex: s + 1,
				markerType: d,
				...c ? { sourceRecordReference: c } : {}
			}, p = i ? Fe(i, u) : u;
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
		}, { night: Sn(n) });
	},
	split: ({ set: e, get: t }, n, a, { at: r, timestamps: i = [] }) => {
		const s = Sn(n), o = wn(s.context, "sleep", a);
		return Rn(t, e, (e) => {
			const t = vn(e, "sleep", o);
			if (t < 0) return bn("sleep", o), null;
			const n = i[i.indexOf(r) - 1], a = void 0 === n ? null : Ie(e.sleepMarkers, t, r, n);
			if (void 0 === n || !a?.ok || !a.markers) return Jt("sleep_period_split", "split_not_strictly_inside"), null;
			const s = a.newIndex ?? t + 1;
			return a.markers[s] = Fe(a.markers[s], void 0, !0), {
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
	merge: ({ set: e, get: t }, n, a, r) => {
		const i = Sn(n), s = wn(i.context, "sleep", a);
		return Rn(t, e, (e) => {
			const t = vn(e, "sleep", s);
			if (t < 0) return bn("sleep", s), null;
			const n = Ae(e.sleepMarkers, t, r);
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
			} : (Jt("sleep_period_merged", "merge_no_neighbor"), null);
		}, {
			editsDisplayedSleep: !0,
			night: i
		}).then(() => {});
	},
	replacementRefusal: () => null
}, Bo = {
	[V.sleep_periods]: Uo,
	[V.rest_intervals]: Vo.nightRecordEdits
}, zo = [Vo.slice], Wo = {
	ggirHasptVariant: a.ggir_haspt_variant,
	ggirHasibVariantsEnabled: a.ggir_hasib_variants_enabled,
	ggirHasibVariants: [...a.ggir_hasib_variants],
	ggirHasibCountSource: a.ggir_hasib_count_source,
	ggirHasibCountEpochSeconds: a.ggir_hasib_count_epoch_seconds
}, $o = new Set(O), Qo = new Set(_), Jo = new Set(H);
function Yo(e) {
	const t = e ?? {}, n = t.ggir_haspt_variant, a = t.ggir_hasib_variants_enabled, r = t.ggir_hasib_variants, i = t.ggir_hasib_count_source, s = t.ggir_hasib_count_epoch_seconds, o = Array.isArray(r) ? Array.from(new Set(r.filter((e) => "string" == typeof e && Qo.has(e)))) : [...Wo.ggirHasibVariants];
	return {
		ggirHasptVariant: "string" == typeof n && $o.has(n) ? n : Wo.ggirHasptVariant,
		ggirHasibVariantsEnabled: "boolean" == typeof a ? a : Wo.ggirHasibVariantsEnabled,
		ggirHasibVariants: o,
		ggirHasibCountSource: "string" == typeof i && Jo.has(i) ? i : Wo.ggirHasibCountSource,
		ggirHasibCountEpochSeconds: "number" == typeof s && Number.isInteger(s) && s >= 1 ? s : Wo.ggirHasibCountEpochSeconds
	};
}
function Xo(e) {
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
const Zo = (e, t, r) => ({
	preferredDisplayColumn: R.preferred_display_column,
	displayColumnChosenByUser: !1,
	viewModeHours: R.view_mode_hours,
	currentAlgorithm: R.default_algorithm,
	showAdjacentMarkers: !0,
	showNonwearOverlays: !0,
	showChoiNonwear: a.show_choi_nonwear,
	showLight: !1,
	showEventMarkers: !0,
	showAutoScoreProposal: !0,
	showDiaryOverlay: !1,
	autoScoreOnNavigate: !1,
	autoNonwearOnNavigate: !1,
	periodGuider: R.period_guider,
	sleepPeriodDetection: Ue,
	hideFilenames: !1,
	diaryDayBoundaryHour: R.diary_day_boundary_hour,
	diaryMainSleepDateRule: R.diary_main_sleep_date_rule,
	diaryNapDateRule: R.diary_nap_date_rule,
	diaryNonwearDateRule: R.diary_nonwear_date_rule,
	diaryDstFoldPolicy: R.diary_dst_fold_policy,
	diaryDstGapPolicy: R.diary_dst_gap_policy,
	sleepDetectionRule: R.sleep_detection_rule,
	placementRuleset: R.placement_ruleset,
	scorerPostprocessingPreset: x.NONE,
	extractionPath: Q.number_60s_epochs,
	nonwearDetectorsCounts: [...R.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...R.nonwear_detectors_ggir],
	appliedStudySettingsAuthorityKey: null,
	appliedUserPreferencesKey: null,
	analysisParadigm: null,
	actiwareAnalysis: a.actiware_analysis,
	actiwareRestProposal: ze(a.actiware_rest_proposal),
	studyDeclaredFields: [],
	nightStartHour: R.night_start_hour,
	nightEndHour: R.night_end_hour,
	validDayCriteria: yt,
	physicalActivityMethod: a.physical_activity_method,
	physicalActivityCutpointOverrides: a.physical_activity_cutpoints,
	participantPopulation: a.participant_population,
	participantLaterality: a.participant_laterality,
	physicalActivityNonwearAsClass: a.physical_activity_nonwear_class,
	physicalActivityEnabledClasses: [...a.physical_activity_enabled_classes],
	physicalActivityMaskPolicy: a.physical_activity_mask_policy,
	selectedStudyId: null,
	devicePreset: k,
	epochLengthSeconds: R.epoch_length_seconds,
	skipRows: R.skip_rows,
	columnMapping: {
		date_column: "",
		time_column: "",
		datetime_column: "",
		activity_column: "",
		axis_x_column: "",
		axis_z_column: "",
		vector_magnitude_column: ""
	},
	preferredActivityColumn: R.preferred_display_column,
	choiAxis: R.choi_axis,
	choiVariant: T.BOTH,
	sensorLocation: a.sensor_location,
	...Wo,
	ggirConfig: Ct,
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
	setCurrentAlgorithm: (n) => e({
		currentAlgorithm: n,
		...n !== t().currentAlgorithm ? { displayColumnChosenByUser: !1 } : {}
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
	setSleepPeriodDetection: (t) => e((e) => ({ sleepPeriodDetection: We({
		...e.sleepPeriodDetection,
		...t
	}) })),
	setSleepDetectionRule: (t) => e({ sleepDetectionRule: t }),
	setPlacementRuleset: (t) => e({ placementRuleset: t }),
	setScorerPostprocessingPreset: (t) => e({ scorerPostprocessingPreset: t }),
	setExtractionPath: (t) => e({ extractionPath: t }),
	setNonwearDetectorsCounts: (t) => e({ nonwearDetectorsCounts: [...new Set(t)] }),
	setNonwearDetectorsGgir: (t) => e({ nonwearDetectorsGgir: [...new Set(t)] }),
	applyStudyScoringDefaults: (n) => e({
		...void 0 !== n.currentAlgorithm ? {
			currentAlgorithm: n.currentAlgorithm,
			...n.currentAlgorithm !== t().currentAlgorithm ? { displayColumnChosenByUser: !1 } : {}
		} : {},
		...void 0 !== n.nonwearDetectorsCounts ? { nonwearDetectorsCounts: [...n.nonwearDetectorsCounts] } : {},
		...void 0 !== n.nonwearDetectorsGgir ? { nonwearDetectorsGgir: [...n.nonwearDetectorsGgir] } : {},
		...void 0 !== n.studyDeclaredFields ? { studyDeclaredFields: [...n.studyDeclaredFields] } : {}
	}),
	setActiwareAnalysis: (t) => {
		e({ actiwareAnalysis: Xe(t) });
	},
	setActiwareRestProposal: (t) => {
		e({ actiwareRestProposal: ze(t) });
	},
	setAnalysisParadigm: (t) => {
		e({ analysisParadigm: tt(t) });
	},
	applyScoringRecipePatch: (t) => e(t),
	setNightHours: (t, n) => e({
		nightStartHour: t,
		nightEndHour: n
	}),
	setAppliedStudySettingsAuthorityKey: (t, n) => e({
		appliedStudySettingsAuthorityKey: t,
		analysisParadigm: tt(n)
	}),
	setValidDayCriteria: (t) => e((e) => ({ validDayCriteria: Vn({
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
		e({ physicalActivityEnabledClasses: Gt.filter((e) => t.includes(e)) });
	},
	setPhysicalActivityMaskPolicy: (t) => {
		e({ physicalActivityMaskPolicy: { ...t } });
	},
	setSelectedStudyId: (n) => an(() => {
		const a = t();
		ct.setContext(a.currentFileId, a.availableDates[a.currentDateIndex] ?? null, a.username, n), e({ selectedStudyId: n });
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
		ie.setState({
			localProcessingProgress: null,
			isLocalProcessing: !1
		});
		const t = Hn(on(r.getInitialState()));
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
	resetRegistrySettings: (t) => {
		const a = {};
		for (const e of n) {
			if (!m[e].persisted) continue;
			const n = m[e].storeKeys.zustand;
			n && (a[n] = t[e]);
		}
		a.sleepPeriodDetection = We(t.sleep_period_detection), a.actiwareRestProposal = ze(t.actiware_rest_proposal), e(a);
	}
});
var el = i({
	NOTES_AUDIT_DEBOUNCE_MS: () => 1500,
	fileSwitchSettled: () => jo,
	flushNotesAudit: () => en,
	flushSaveWithTimeout: () => sn,
	markerActionsWaiting: () => yn,
	markerCommitsSettled: () => fn,
	nightForNonwearApply: () => ln,
	nightSessionStore: () => ol,
	nightStateAfter: () => Vt,
	persistedStoreSlice: () => on,
	recordShownNightEditsForTest: () => Wt,
	rehydratePersistedStore: () => al,
	reviveOpenCutpointBands: () => nl,
	takeShownNightEdits: () => zt,
	useColorTheme: () => sl,
	useDates: () => rl,
	useMarkers: () => il,
	useSleepScoringStore: () => tl,
	withoutSessionIdentity: () => Hn
});
const tl = le()(J(q((e, t, n) => {
	const a = (n, a) => {
		const r = t(), i = "function" == typeof n ? n(r) : n;
		if (i === r) return e(r);
		const s = !i || !("isInvalidNight" in i) || i.isInvalidNight && "isInvalidNightImplicit" in i ? i : {
			...i,
			isInvalidNightImplicit: !1
		}, o = Ge(r, !1 === s?.placementRejected ? {
			...s,
			placementRejectionReason: null
		} : s);
		return a ? e(o, !0) : e(o);
	};
	return n.setState = a, {
		...To(a, t),
		...Ko(a, t),
		...Co(a, t, Bo),
		...zo.map((e) => e.create(a, t)).reduce((e, t) => ({
			...e,
			...t
		})),
		...Zo(a, t, n)
	};
}, {
	name: "sleep-scoring-storage",
	storage: te(() => va),
	skipHydration: !0,
	onRehydrateStorage: () => (e, t) => {
		t && mt("warn", "Persisted store rehydration failed", ht(t));
	},
	partialize: (e) => on(e),
	merge: (e, t) => {
		const r = {
			...t,
			...e
		};
		e && "object" == typeof e && "sitePassword" in e && (r.sitePassword = null), r.sleepPeriodDetection = We(r.sleepPeriodDetection), r.validDayCriteria = Vn(r.validDayCriteria), r.physicalActivityCutpointOverrides = nl(r.physicalActivityCutpointOverrides);
		const i = r;
		for (const s of n) {
			if (!s.startsWith("diary_")) continue;
			const e = m[s].storeKeys.zustand;
			e && null !== o(s, i[e]) && (i[e] = a[s]);
		}
		return r.colorTheme = function(e) {
			if (!e || "object" != typeof e) return { ...Ln };
			const t = jn[e.preset];
			return t ? { ...t } : { ...e };
		}(r.colorTheme), r;
	}
}), { name: "SleepScoringStore" }));
function nl(e) {
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
async function al(e) {
	await tl.persist.rehydrate();
	const t = tl.getState(), n = e ?? t.username;
	(t.isAuthenticated || void 0 !== e) && n && ct.setContext(t.currentFileId, t.availableDates[t.currentDateIndex] ?? null, n, t.selectedStudyId);
	const { cutpointOverrides: a } = await async function(e, t) {
		const n = { cutpointOverrides: null };
		if (null === e || "" === e) return n;
		const a = function(e) {
			return `sleep-scoring:legacy-device-settings:adopted:${e}`;
		}(e);
		if (null !== Rs(a)) return n;
		try {
			const e = t ? await vs(t) : await vs(), n = e?.extraSettings ?? {}, r = {}, i = function() {
				const e = Rs("sleep-scoring:sensor-location:selected");
				return "wrist" === e || "hip" === e ? e : null;
			}();
			null !== i && void 0 === n.sensor_location && (r.sensor_location = i);
			const s = function() {
				const e = Rs("sleep-scoring:lstm-onnx:selected-model");
				if (null === e || "" === e) return null;
				const t = Rs(`sleep-scoring:lstm-onnx:threshold:${e}`), n = null === t ? NaN : Number(t);
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
				t ? await Ss(n, t) : await Ss(n);
			}
			const o = function(e = localStorage) {
				const t = ft(e), n = {};
				for (const a of t) n[a.method] = a.thresholds;
				return Object.keys(n).length > 0 ? n : null;
			}();
			try {
				localStorage.setItem(a, (/* @__PURE__ */ new Date()).toISOString());
			} catch {}
			return { cutpointOverrides: o };
		} catch (r) {
			return mt("warn", "Adopting legacy device settings into the workspace failed", ht(r)), n;
		}
	}(ne());
	null !== a && tl.setState((e) => ({ physicalActivityCutpointOverrides: {
		...a,
		...e.physicalActivityCutpointOverrides
	} }));
	const { resetPersistedAlgorithmNonwear: r } = await import("./pa-mask-nonwear-reset-DOV0w2E0.js");
	await r(ne(), tl.getState().physicalActivityMaskPolicy, (e) => {
		tl.setState({ physicalActivityMaskPolicy: e });
	});
}
ge(() => tl.getState());
const rl = () => tl(js((e) => ({
	currentDateIndex: e.currentDateIndex,
	availableDates: e.availableDates,
	currentDate: e.availableDates[e.currentDateIndex] ?? null,
	setAvailableDates: e.setAvailableDates,
	setCurrentDateIndex: e.setCurrentDateIndex,
	navigateDate: e.navigateDate
}))), il = () => tl(js((e) => ({
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
}))), sl = () => tl(js((e) => ({
	colorTheme: e.colorTheme,
	setColorTheme: e.setColorTheme,
	applyColorPreset: e.applyColorPreset,
	resetColorTheme: e.resetColorTheme
}))), ol = {
	getState: tl.getState,
	getInitialState: () => tl.getInitialState(),
	flushNotesAudit: () => en(tl.getState().notes),
	setState: tl.setState,
	takeShownEdits: (e) => (en(tl.getState().notes), zt({
		store: e.db?.name ?? null,
		actor: e.scope.actor,
		fileId: e.fileId,
		date: e.date
	}, e))
};
Kt = {
	store: tl,
	session: ol
};
export { Bi as $, jt as $t, cs as A, Ha as At, Ps as B, Da as Bt, As as C, ar as Ct, us as D, Za as Dt, Fs as E, Ja as Et, vs as F, Ua as Ft, Ji as G, ta as Gt, $i as H, _a as Ht, ss as I, Ba as It, Cs as J, Qn as Jt, Qi as K, Jn as Kt, ks as L, Oa as Lt, Ki as M, $a as Mt, fs as N, Ga as Nt, Ri as O, Ya as Ot, Ci as P, ja as Pt, xi as Q, fn as Qt, Ds as R, Ca as Rt, os as S, or as St, ds as T, Xa as Tt, Ss as U, Zn as Ut, xs as V, ba as Vt, as as W, ra as Wt, Es as X, Un as Xt, Ms as Y, aa as Yt, Ni as Z, Vn as Zt, es as _, kr as _t, Xo as a, di as at, Ts as b, vr as bt, Si as c, ei as ct, Zi as d, qr as dt, Ht as en, Wi as et, gs as f, Kr as ft, Hi as g, Pr as gt, Oi as h, Cr as ht, Yo as i, Mt as in, pi as it, ns as j, La as jt, Li as k, Wa as kt, zi as l, Zr as lt, Ti as m, Fr as mt, el as n, Rt as nn, Yi as nt, hi as o, si as ot, mi as p, Rr as pt, is as q, ea as qt, tl as r, Ft as rn, ms as rt, wi as s, oi as st, ol as t, Ot as tn, Is as tt, Pi as u, ti as ut, ji as v, Dr as vt, rs as w, sr as wt, ps as x, wr as xt, hs as y, Ir as yt, Ns as z, Pa as zt };
