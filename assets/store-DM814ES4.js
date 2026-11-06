import { An as e, At as t, Cn as n, Dn as a, En as r, Ft as i, G as s, It as o, Mn as l, Mt as c, Pt as d, Rt as u, Sn as p, Xt as m, _ as h, _n as f, an as y, bn as g, dn as w, en as v, f as _, gn as S, hn as I, i as k, kt as b, l as D, mn as M, n as E, qt as A, r as P, sn as N, t as x, un as O, v as T, vn as F, w as C, xn as R, yn as H, zt as L } from "./schema-B_tCLPTi.js";
import { r as j } from "./workers-ChOvAmOP.js";
import { l as K } from "./legacy-invalid-night-zjKZRSNb.js";
import { $ as q, B as G, C as U, E as V, K as B, L as z, M as W, R as $, T as Q, V as J, X as Y, Y as X, a as Z, at as ee, ct as te, et as ne, k as re, n as ie, ot as se, rt as oe, st as le, t as ce, tt as de, z as ue } from "./workspace-db-C0mqPCjA.js";
import { c as pe, o as me, s as he } from "./content-hash-LIzlxz9S.js";
import { S as fe, r as ye, t as ge } from "./background-jobs-CKsUPhWg.js";
import { a as we, i as ve } from "./project-revision-BP4u1UU7.js";
import { B as _e, D as Se, I as Ie, L as ke, P as be, R as De, V as Ee, _ as Ae, a as Pe, c as Ne, f as xe, i as Oe, l as Te, m as Fe, p as Ce, s as Re, t as He, x as Le } from "./night-session-registry-7UYyF_Uo.js";
import { D as je, _ as Ke, b as qe, g as Ge, k as Ue, m as Ve, p as Be, s as ze, t as We, u as $e, v as Qe } from "./sleep-period-detection-DACRcT22.js";
import { i as Je } from "./preset-families-C-4e6hae.js";
import { a as Ye, t as Xe } from "./audit-log-GmDCUlwq.js";
import "./audit-events-D-MHWdwf.js";
import "./audit-hash-D_UvOsjj.js";
import { i as Ze, n as et, t as tt } from "./wal-b4Dt4nDf.js";
import { a as nt, b as at, f as rt, o as it, t as st, u as ot, y as lt } from "./valid-day-criteria-BvWW5KT6.js";
import { _ as ct, c as dt, d as ut, f as pt, i as mt, o as ht, p as ft } from "./diary-local-import-contract-DhSboCi-.js";
import "./pre-migration-backup-BEyVcOdk.js";
Object.values({
	CAPACITY: "capacity",
	INTEGRITY: "integrity",
	VERIFICATION: "verification",
	OTHER: "other"
});
var yt = class extends Error {
	name = "BackupCapacityError";
	reason;
	constructor(e) {
		super(`Backup ${"source" === e ? "file" : "expanded data"} exceeds the local byte limit.`), this.reason = e;
	}
};
const gt = new Uint8Array([31, 139]);
function wt(e) {
	let t = 0;
	for (const r of e) t += r.length;
	const n = new Uint8Array(t);
	let a = 0;
	for (const r of e) n.set(r, a), a += r.length;
	return n;
}
async function vt(e, t) {
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
			const a = e instanceof Uint8Array ? new Blob([e]) : e, r = new Uint8Array(await a.slice(0, gt.length).arrayBuffer());
			n?.throwIfAborted();
			let i = a.stream();
			if ((s = r).length >= 2 && s[0] === gt[0] && s[1] === gt[1]) {
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
					if (c += e.byteLength, c > t) throw new yt("expanded");
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
var _t = "argument,value,context\ndatadir,,not applicable\ndo.report,\"c(2,4,5,6)\",not applicable\nf0,1,not applicable\nf1,542,not applicable\nmode,\"c(1,2,3,4,5,6)\",not applicable\noutputdir,,not applicable\nrawaccfiles_formats,csv,not applicable\nstudyname,,not applicable\nGGIRread_version,could not extract version,not applicable\nGGIRversion,3.0.0,not applicable\nR_version,R version 4.4.3 (2025-02-28),not applicable\nqwindow,\"c(0,24)\",params_247\nqlevels,\"c(0.958333333333333,0.979166666666667,0.993055555555556)\",params_247\nqwindow_dateformat,%d-%m-%Y,params_247\nilevels,c(),params_247\nIVIS_windowsize_minutes,60,params_247\nIVIS_epochsize_seconds,c(),params_247\nIVIS.activity.metric,2,params_247\nIVIS_acc_threshold,20,params_247\nqM5L5,c(),params_247\nMX.ig.min.dur,10,params_247\nM5L5res,10,params_247\nwinhr,\"c(5,10)\",params_247\niglevels,\"c(0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1025,1050,1075,1100,1125,1150,1175,1200,1225,1250,1275,1300,1325,1350,1375,1400,1425,1450,1475,1500,1525,1550,1575,1600,1625,1650,1675,1700,1725,1750,1775,1800,1825,1850,1875,1900,1925,1950,1975,2000,2025,2050,2075,2100,2125,2150,2175,2200,2225,2250,2275,2300,2325,2350,2375,2400,2425,2450,2475,2500,2525,2550,2575,2600,2625,2650,2675,2700,2725,2750,2775,2800,2825,2850,2875,2900,2925,2950,2975,3000,3025,3050,3075,3100,3125,3150,3175,3200,3225,3250,3275,3300,3325,3350,3375,3400,3425,3450,3475,3500,3525,3550,3575,3600,3625,3650,3675,3700,3725,3750,3775,3800,3825,3850,3875,3900,3925,3950,3975,4000,8000)\",params_247\nLUXthresholds,\"c(0,100,500,1000,3000,5000,10000)\",params_247\nLUX_cal_constant,c(),params_247\nLUX_cal_exponent,c(),params_247\nLUX_day_segments,c(),params_247\nwindow.summary.size,10,params_247\nL5M5window,\"c(0,24)\",params_247\ncosinor,TRUE,params_247\nincludedaycrit,1,params_cleaning\nndayswindow,7,params_cleaning\nstrategy,1,params_cleaning\nmaxdur,0,params_cleaning\nhrs.del.start,0,params_cleaning\nhrs.del.end,0,params_cleaning\nincludedaycrit.part5,0.083333333,params_cleaning\nexcludefirstlast.part5,FALSE,params_cleaning\nTimeSegments2ZeroFile,c(),params_cleaning\ndo.imp,TRUE,params_cleaning\ndata_cleaning_file,c(),params_cleaning\nminimum_MM_length.part5,23,params_cleaning\nexcludefirstlast,FALSE,params_cleaning\nincludenightcrit,1,params_cleaning\nexcludefirst.part4,FALSE,params_cleaning\nexcludelast.part4,FALSE,params_cleaning\nmax_calendar_days,0,params_cleaning\nnonWearEdgeCorrection,TRUE,params_cleaning\nnonwear_approach,2023,params_cleaning\nsegmentWEARcrit.part5,0.5,params_cleaning\nsegmentDAYSPTcrit.part5,\"c(0.9,0)\",params_cleaning\noverwrite,FALSE,params_general\nacc.metric,ENMO,params_general\nmaxNcores,c(),params_general\nprint.filename,FALSE,params_general\ndo.parallel,TRUE,params_general\nwindowsizes,\"c(5,900,3600)\",params_general\ndesiredtz,EST,params_general\nconfigtz,c(),params_general\nidloc,1,params_general\ndayborder,0,params_general\npart5_agg2_60seconds,FALSE,params_general\nsensor.location,wrist,params_general\nexpand_tail_max_hours,c(),params_general\nrecordingEndSleepHour,c(),params_general\ndataFormat,raw,params_general\nmaxRecordingInterval,c(),params_general\nextEpochData_timeformat,%d-%m-%Y %H:%M:%S,params_general\ndo.anglex,FALSE,params_metrics\ndo.angley,FALSE,params_metrics\ndo.anglez,TRUE,params_metrics\ndo.zcx,FALSE,params_metrics\ndo.zcy,FALSE,params_metrics\ndo.zcz,FALSE,params_metrics\ndo.enmo,TRUE,params_metrics\ndo.lfenmo,FALSE,params_metrics\ndo.en,FALSE,params_metrics\ndo.mad,FALSE,params_metrics\ndo.enmoa,FALSE,params_metrics\ndo.roll_med_acc_x,FALSE,params_metrics\ndo.roll_med_acc_y,FALSE,params_metrics\ndo.roll_med_acc_z,FALSE,params_metrics\ndo.dev_roll_med_acc_x,FALSE,params_metrics\ndo.dev_roll_med_acc_y,FALSE,params_metrics\ndo.dev_roll_med_acc_z,FALSE,params_metrics\ndo.bfen,FALSE,params_metrics\ndo.hfen,FALSE,params_metrics\ndo.hfenplus,FALSE,params_metrics\ndo.lfen,FALSE,params_metrics\ndo.lfx,FALSE,params_metrics\ndo.lfy,FALSE,params_metrics\ndo.lfz,FALSE,params_metrics\ndo.hfx,FALSE,params_metrics\ndo.hfy,FALSE,params_metrics\ndo.hfz,FALSE,params_metrics\ndo.bfx,FALSE,params_metrics\ndo.bfy,FALSE,params_metrics\ndo.bfz,FALSE,params_metrics\ndo.brondcounts,FALSE,params_metrics\ndo.neishabouricounts,FALSE,params_metrics\nhb,15,params_metrics\nlb,0.2,params_metrics\nn,4,params_metrics\nzc.lb,0.25,params_metrics\nzc.hb,3,params_metrics\nzc.sb,0.01,params_metrics\nzc.order,2,params_metrics\nzc.scale,1,params_metrics\nactilife_LFE,FALSE,params_metrics\nepochvalues2csv,FALSE,params_output\nsave_ms5rawlevels,TRUE,params_output\nsave_ms5raw_format,csv,params_output\nsave_ms5raw_without_invalid,TRUE,params_output\nstorefolderstructure,FALSE,params_output\ntimewindow,WW,params_output\nviewingwindow,1,params_output\ndofirstpage,TRUE,params_output\nvisualreport,TRUE,params_output\nweek_weekend_aggregate.part5,FALSE,params_output\ndo.part3.pdf,TRUE,params_output\noutliers.only,TRUE,params_output\ncriterror,4,params_output\ndo.visual,TRUE,params_output\ndo.sibreport,FALSE,params_output\ndo.part2.pdf,TRUE,params_output\nsep_reports,\",\",params_output\nsep_config,\",\",params_output\nvisualreport_without_invalid,FALSE,params_output\nmvpathreshold,100,params_phyact\nboutcriter,0.8,params_phyact\nmvpadur,\"c(1,5,10)\",params_phyact\nboutcriter.in,0.9,params_phyact\nboutcriter.lig,0.8,params_phyact\nboutcriter.mvpa,0.8,params_phyact\nthreshold.lig,30,params_phyact\nthreshold.mod,100,params_phyact\nthreshold.vig,400,params_phyact\nboutdur.mvpa,\"c(1,5,10)\",params_phyact\nboutdur.in,\"c(1,10,30)\",params_phyact\nboutdur.lig,\"c(1,10,30)\",params_phyact\nfrag.metrics,all,params_phyact\nchunksize,1,params_rawdata\nspherecrit,0.3,params_rawdata\nminloadcrit,72,params_rawdata\nprintsummary,FALSE,params_rawdata\ndo.cal,TRUE,params_rawdata\nbackup.cal.coef,retrieve,params_rawdata\ndynrange,c(),params_rawdata\nminimumFileSizeMB,2,params_rawdata\nrmc.dec,.,params_rawdata\nrmc.firstrow.acc,c(),params_rawdata\nrmc.firstrow.header,c(),params_rawdata\nrmc.header.length,c(),params_rawdata\nrmc.col.acc,\"c(1,2,3)\",params_rawdata\nrmc.col.temp,c(),params_rawdata\nrmc.col.time,c(),params_rawdata\nrmc.unit.acc,g,params_rawdata\nrmc.unit.temp,C,params_rawdata\nrmc.unit.time,POSIX,params_rawdata\nrmc.format.time,%Y-%m-%d %H:%M:%OS,params_rawdata\nrmc.bitrate,c(),params_rawdata\nrmc.dynamic_range,c(),params_rawdata\nrmc.unsignedbit,TRUE,params_rawdata\nrmc.origin,1/1/1970,params_rawdata\nrmc.desiredtz,c(),params_rawdata\nrmc.configtz,c(),params_rawdata\nrmc.sf,c(),params_rawdata\nrmc.headername.sf,c(),params_rawdata\nrmc.headername.sn,c(),params_rawdata\nrmc.headername.recordingid,c(),params_rawdata\nrmc.header.structure,c(),params_rawdata\nrmc.check4timegaps,FALSE,params_rawdata\nrmc.noise,13,params_rawdata\nrmc.col.wear,c(),params_rawdata\nrmc.doresample,FALSE,params_rawdata\ninterpolationType,1,params_rawdata\nimputeTimegaps,TRUE,params_rawdata\nfrequency_tol,0.1,params_rawdata\nrmc.scalefactor.acc,1,params_rawdata\nanglethreshold,5,params_sleep\ntimethreshold,5,params_sleep\nignorenonwear,TRUE,params_sleep\nconstrain2range,TRUE,params_sleep\nHASPT.algo,HDCZA,params_sleep\nHASIB.algo,vanHees2015,params_sleep\nSadeh_axis,,params_sleep\nlongitudinal_axis,c(),params_sleep\nHASPT.ignore.invalid,FALSE,params_sleep\nloglocation,c(),params_sleep\ncolid,1,params_sleep\ncoln1,2,params_sleep\nnnights,c(),params_sleep\nrelyonguider,FALSE,params_sleep\ndef.noc.sleep,1,params_sleep\nsleeplogsep,c(),params_sleep\nsleepwindowType,SPT,params_sleep\npossible_nap_window,\"c(9,18)\",params_sleep\npossible_nap_dur,\"c(15,240)\",params_sleep\n";
const St = "sleep-scoring:core-answer:", It = /* @__PURE__ */ new Map();
let kt = null;
function bt(e) {
	if (kt) return kt;
	const t = [];
	kt = t;
	try {
		const n = globalThis.localStorage, a = Array.from({ length: n.length }, (e, t) => n.key(t) ?? "");
		for (const r of a) r.startsWith(St) && (r.startsWith(`${St}${e}:`) ? t.push(r) : n.removeItem(r));
	} catch {}
	return t;
}
function Dt(e, t, n) {
	const a = "eb3cb76e6e0ebcae82b208aef6cd7bc2661e9079b35414f7a5d64164cf2a1394";
	bt(a);
	const r = `${St}${a}:${e}:${t}`;
	let i = It.get(r);
	if (!i && (i = (async () => {
		try {
			const e = globalThis.localStorage?.getItem(r);
			if (e) return JSON.parse(e);
		} catch {}
		const e = await n();
		try {
			globalThis.localStorage?.setItem(r, JSON.stringify(e)), function(e, t) {
				const n = bt(e);
				for (n.includes(t) || n.push(t); n.length > 1e3;) {
					const e = n.shift();
					try {
						e && globalThis.localStorage?.removeItem(e);
					} catch {}
				}
			}(a, r);
		} catch {}
		return e;
	})(), i.catch(() => It.delete(r)), It.set(r, i), It.size > 1e3)) {
		const e = It.keys().next();
		e.done || It.delete(e.value);
	}
	return i;
}
const Mt = Object.freeze({
	name: "default ELEMENT",
	sha256: pe(_t),
	csvText: _t
});
function Et(e) {
	const t = e?.ggir_config;
	if (t && "object" == typeof t) {
		const e = t;
		if ("string" == typeof e.name && "string" == typeof e.csvText && "string" == typeof e.sha256 && pe(e.csvText) === e.sha256) return e;
	}
	return Mt;
}
function At(e, t) {
	const n = /^"?Sadeh_axis"?,\s*"?([XYZ])"?,/m.exec(e)?.[1] ?? "Y";
	return t?.[{
		X: 0,
		Y: 1,
		Z: 2
	}[n]];
}
function Pt(e, t, n) {
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
const Nt = {
	[W.van_hees_2013]: "2013",
	[W.van_hees_2023]: "2023"
};
async function xt(e, t) {
	return Dt("ggir-part2-nonwear", pe(e ?? ""), async () => (await t.ggirAppConfigSummary(e, !0)).applied.nonwearApproach === Nt.van_hees_2013 ? W.van_hees_2013 : W.van_hees_2023);
}
const Ot = (e) => Symbol.iterator in e, Tt = (e) => "entries" in e, Ft = (e, t) => {
	const n = e instanceof Map ? e : new Map(e.entries()), a = t instanceof Map ? t : new Map(t.entries());
	if (n.size !== a.size) return !1;
	for (const [r, i] of n) if (!a.has(r) || !Object.is(i, a.get(r))) return !1;
	return !0;
};
var Ct = l(Y(), 1);
function Rt(e) {
	const t = Ct.useRef(void 0);
	return (n) => {
		const a = e(n);
		return r = t.current, i = a, Object.is(r, i) || "object" == typeof r && null !== r && "object" == typeof i && null !== i && Object.getPrototypeOf(r) === Object.getPrototypeOf(i) && (Ot(r) && Ot(i) ? Tt(r) && Tt(i) ? Ft(r, i) : ((e, t) => {
			const n = e[Symbol.iterator](), a = t[Symbol.iterator]();
			let r = n.next(), i = a.next();
			for (; !r.done && !i.done;) {
				if (!Object.is(r.value, i.value)) return !1;
				r = n.next(), i = a.next();
			}
			return !!r.done && !!i.done;
		})(r, i) : Ft({ entries: () => Object.entries(r) }, { entries: () => Object.entries(i) })) ? t.current : t.current = a;
		var r, i;
	};
}
const Ht = {
	setTimeout: (e, t) => setTimeout(e, t),
	clearTimeout: (e) => clearTimeout(e),
	setInterval: (e, t) => setInterval(e, t),
	clearInterval: (e) => clearInterval(e)
}, Lt = new class {
	#e = Ht;
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
}(), jt = "undefined" == typeof window || "Deno" in globalThis;
function Kt() {}
function qt(e, t) {
	return "function" == typeof e ? e(t) : e;
}
function Gt(e, t) {
	const { type: n = "all", exact: a, fetchStatus: r, predicate: i, queryKey: s, stale: o } = e;
	if (s) {
		if (a) {
			if (t.queryHash !== Vt(s, t.options)) return !1;
		} else if (!zt(t.queryKey, s)) return !1;
	}
	if ("all" !== n) {
		const e = t.isActive();
		if ("active" === n && !e) return !1;
		if ("inactive" === n && e) return !1;
	}
	return !("boolean" == typeof o && t.isStale() !== o || r && r !== t.state.fetchStatus || i && !i(t));
}
function Ut(e, t) {
	const { exact: n, status: a, predicate: r, mutationKey: i } = e;
	if (i) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (Bt(t.options.mutationKey) !== Bt(i)) return !1;
		} else if (!zt(t.options.mutationKey, i)) return !1;
	}
	return !(a && t.state.status !== a || r && !r(t));
}
function Vt(e, t) {
	return (t?.queryKeyHashFn || Bt)(e);
}
function Bt(e) {
	return JSON.stringify(e, (e, t) => Jt(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t);
}
function zt(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (e && t && "object" == typeof e && "object" == typeof t) {
		if (Array.isArray(e) && Array.isArray(t)) {
			for (let n = 0; n < t.length; n++) if (!zt(e[n], t[n])) return !1;
			return !0;
		}
		const n = Object.keys(t);
		for (const a of n) if (!zt(e[a], t[a])) return !1;
		return !0;
	}
	return !1;
}
const Wt = Object.prototype.hasOwnProperty;
function $t(e, t, n = 0) {
	if (e === t) return e;
	if (n > 500) return t;
	const a = Qt(e) && Qt(t);
	if (!(a || Jt(e) && Jt(t))) return t;
	const r = (a ? e : Object.keys(e)).length, i = a ? t : Object.keys(t), s = i.length, o = a ? new Array(s) : {};
	let l = 0;
	for (let c = 0; c < s; c++) {
		const s = a ? c : i[c], d = e[s], u = t[s];
		if (d === u) {
			o[s] = d, (a ? c < r : Wt.call(e, s)) && l++;
			continue;
		}
		if (null === d || null === u || "object" != typeof d || "object" != typeof u) {
			o[s] = u;
			continue;
		}
		const p = $t(d, u, n + 1);
		o[s] = p, p === d && l++;
	}
	return r === s && l === r ? e : o;
}
function Qt(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Jt(e) {
	if (!Yt(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	const n = t.prototype;
	return !!Yt(n) && !!n.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype;
}
function Yt(e) {
	return "[object Object]" === Object.prototype.toString.call(e);
}
function Xt(e, t, n) {
	return "function" == typeof n.structuralSharing ? n.structuralSharing(e, t) : !1 !== n.structuralSharing ? $t(e, t) : t;
}
function Zt(e, t, n = 0) {
	const a = [...e, t];
	return n && a.length > n ? a.slice(1) : a;
}
function en(e, t, n = 0) {
	const a = [t, ...e];
	return n && a.length > n ? a.slice(0, -1) : a;
}
const tn = Symbol();
function nn(e, t) {
	return !e.queryFn && t?.initialPromise ? () => t.initialPromise : e.queryFn && e.queryFn !== tn ? e.queryFn : () => Promise.reject(/* @__PURE__ */ new Error(`Missing queryFn: '${e.queryHash}'`));
}
const an = () => jt;
var rn = class {
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
const sn = new class extends rn {
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
}(), on = function(e) {
	setTimeout(e, 0);
}, ln = function() {
	let e = [], t = 0, n = (e) => {
		e();
	}, a = (e) => {
		e();
	}, r = on;
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
}(), cn = new class extends rn {
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
function dn(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function un(e) {
	return "online" !== (e ?? "online") || cn.isOnline();
}
var pn = class extends Error {
	constructor(e) {
		super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
	}
};
function mn(e) {
	let t, n, a, r = !1, i = 0, s = "pending";
	const o = new Promise((e, t) => {
		n = e, a = t;
	});
	o.catch(Kt);
	const l = () => "pending" !== s, c = () => sn.isFocused() && ("always" === e.networkMode || cn.isOnline()) && e.canRun(), d = () => un(e.networkMode) && e.canRun(), u = (e) => {
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
			const n = e.retry ?? (an() ? 0 : 3), a = e.retryDelay ?? dn, s = "function" == typeof a ? a(i, t) : a, o = !0 === n || "number" == typeof n && i < n || "function" == typeof n && n(i, t);
			var d;
			!r && o ? (i++, e.onFail?.(i, t), (d = s, new Promise((e) => {
				Lt.setTimeout(e, d);
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
				const n = new pn(t);
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
var hn = class {
	#s;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		var e;
		this.clearGcTimeout(), "number" == typeof (e = this.gcTime) && e >= 0 && e !== 1 / 0 && (this.#s = Lt.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime));
	}
	updateGcTime(e) {
		this.gcTime = Math.max(this.gcTime || 0, e ?? (an() ? 1 / 0 : 3e5));
	}
	clearGcTimeout() {
		void 0 !== this.#s && (Lt.clearTimeout(this.#s), this.#s = void 0);
	}
};
function fn(e) {
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
			}, d = nn(t.options, t.fetchOptions), u = async (e, a, r) => {
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
				})(), s = await d(i), { maxPages: o } = t.options, l = r ? en : Zt;
				return {
					pages: l(e.pages, s, o),
					pageParams: l(e.pageParams, a, o)
				};
			};
			if (r && i.length) {
				const e = "backward" === r, t = e ? gn : yn, n = {
					pages: i,
					pageParams: s
				};
				o = await u(n, t(a, n), e);
			} else {
				const t = e ?? i.length;
				do {
					const e = 0 === l ? s[0] ?? a.initialPageParam : yn(a, o);
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
function yn(e, { pages: t, pageParams: n }) {
	const a = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[a], t, n[a], n) : void 0;
}
function gn(e, { pages: t, pageParams: n }) {
	return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var wn = class extends hn {
	#o;
	#l;
	#c;
	#d;
	#u;
	#p;
	#m;
	#h;
	constructor(e) {
		super(), this.#h = !1, this.#m = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#u = e.client, this.#d = this.#u.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#l = _n(this.options), this.state = e.state ?? this.#l, this.scheduleGc();
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
			const e = _n(this.options);
			void 0 !== e.data && (this.setState(vn(e.data, e.dataUpdatedAt)), this.#l = e);
		}
	}
	optionalRemove() {
		this.observers.length || "idle" !== this.state.fetchStatus || this.#d.remove(this);
	}
	setData(e, t) {
		const n = Xt(this.state.data, e, this.options);
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
		return this.#p?.cancel(e), t ? t.then(Kt).catch(Kt) : Promise.resolve();
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
		return this.observers.some((e) => !1 !== qt(e.options.enabled, this));
	}
	isDisabled() {
		return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === tn || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		return this.getObserversCount() > 0 && this.observers.some((e) => "static" === qt(e.options.staleTime, this));
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
			const e = nn(this.options, t), n = (() => {
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
		("infinite" === this.#o ? fn(this.options.pages) : this.options.behavior)?.onFetch(i, this), this.#c = this.state, "idle" !== this.state.fetchStatus && this.state.fetchMeta === i.fetchOptions?.meta || this.#f({
			type: "fetch",
			meta: i.fetchOptions?.meta
		});
		const s = this.#p = mn({
			initialPromise: t?.initialPromise,
			fn: i.fetchFn,
			onCancel: (e) => {
				e instanceof pn && e.revert && this.setState({
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
			if (o instanceof pn) {
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
						fetchStatus: un(a.networkMode) ? "fetching" : "paused",
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
						...vn(e.data, e.dataUpdatedAt),
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
		})(this.state), ln.batch(() => {
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
function vn(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success"
	};
}
function _n(e) {
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
var Sn = class extends hn {
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
		}, a = this.#p = mn({
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
		})(this.state), ln.batch(() => {
			this.#y.forEach((t) => {
				t.onMutationUpdate(e);
			}), this.#g.notify({
				mutation: this,
				type: "updated",
				action: e
			});
		});
	}
}, In = class extends rn {
	#w;
	#v;
	#_;
	constructor(e = {}) {
		super(), this.config = e, this.#w = /* @__PURE__ */ new Set(), this.#v = /* @__PURE__ */ new Map(), this.#_ = 0;
	}
	build(e, t, n) {
		const a = new Sn({
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
		const t = kn(e);
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
			const t = kn(e);
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
		const t = kn(e);
		if ("string" == typeof t) {
			const n = this.#v.get(t)?.find((e) => "pending" === e.state.status);
			return !n || n === e;
		}
		return !0;
	}
	runNext(e) {
		const t = kn(e);
		return "string" == typeof t ? (this.#v.get(t)?.find((t) => t !== e && t.state.isPaused))?.continue() ?? Promise.resolve() : Promise.resolve();
	}
	clear() {
		ln.batch(() => {
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
		return this.getAll().find((e) => Ut(t, e));
	}
	findAll(e = {}) {
		return this.getAll().filter((t) => Ut(e, t));
	}
	notify(e) {
		ln.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	resumePausedMutations() {
		const e = this.getAll().filter((e) => e.state.isPaused);
		return ln.batch(() => Promise.all(e.map((e) => e.continue().catch(Kt))));
	}
};
function kn(e) {
	return e.options.scope?.id;
}
var bn = class extends rn {
	#S;
	constructor(e = {}) {
		super(), this.config = e, this.#S = /* @__PURE__ */ new Map();
	}
	build(e, t, n) {
		const a = t.queryKey, r = t.queryHash ?? Vt(a, t);
		let i = this.get(r);
		return i || (i = new wn({
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
		ln.batch(() => {
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
		return this.getAll().find((e) => Gt(t, e));
	}
	findAll(e = {}) {
		const t = this.getAll();
		return Object.keys(e).length > 0 ? t.filter((t) => Gt(e, t)) : t;
	}
	notify(e) {
		ln.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	onFocus() {
		ln.batch(() => {
			this.getAll().forEach((e) => {
				e.onFocus();
			});
		});
	}
	onOnline() {
		ln.batch(() => {
			this.getAll().forEach((e) => {
				e.onOnline();
			});
		});
	}
};
const Dn = new class {
	#I;
	#g;
	#m;
	#k;
	#b;
	#D;
	#M;
	#E;
	constructor(e = {}) {
		this.#I = e.queryCache || new bn(), this.#g = e.mutationCache || new In(), this.#m = e.defaultOptions || {}, this.#k = /* @__PURE__ */ new Map(), this.#b = /* @__PURE__ */ new Map(), this.#D = 0;
	}
	mount() {
		this.#D++, 1 === this.#D && (this.#M = sn.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#I.onFocus());
		}), this.#E = cn.subscribe(async (e) => {
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
		return void 0 === a ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(qt(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(a));
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
		return ln.batch(() => this.#I.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]));
	}
	getQueryState(e) {
		const t = this.defaultQueryOptions({ queryKey: e });
		return this.#I.get(t.queryHash)?.state;
	}
	removeQueries(e) {
		const t = this.#I;
		ln.batch(() => {
			t.findAll(e).forEach((e) => {
				t.remove(e);
			});
		});
	}
	resetQueries(e, t) {
		const n = this.#I;
		return ln.batch(() => {
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
		}, a = ln.batch(() => this.#I.findAll(e).map((e) => e.cancel(n)));
		return Promise.all(a).then(Kt).catch(Kt);
	}
	invalidateQueries(e, t = {}) {
		return ln.batch(() => (this.#I.findAll(e).forEach((e) => {
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
		}, a = ln.batch(() => this.#I.findAll(e).filter((e) => !e.isDisabled() && !e.isStatic()).map((e) => {
			let t = e.fetch(void 0, n);
			return n.throwOnError || (t = t.catch(Kt)), "paused" === e.state.fetchStatus ? Promise.resolve() : t;
		}));
		return Promise.all(a).then(Kt);
	}
	async query(e) {
		const t = this.defaultQueryOptions(e);
		void 0 === t.retry && (t.retry = !1);
		const n = this.#I.build(this, t), a = n.isStaleByTime(qt(t.staleTime, n)) ? await n.fetch(t) : n.state.data, r = t.select;
		return r ? r(a) : a;
	}
	fetchQuery(e) {
		const t = this.defaultQueryOptions(e);
		void 0 === t.retry && (t.retry = !1);
		const n = this.#I.build(this, t);
		return n.isStaleByTime(qt(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
	}
	prefetchQuery(e) {
		return this.fetchQuery(e).then(Kt).catch(Kt);
	}
	infiniteQuery(e) {
		return e._type = "infinite", this.query(e);
	}
	fetchInfiniteQuery(e) {
		return e._type = "infinite", this.fetchQuery(e);
	}
	prefetchInfiniteQuery(e) {
		return this.fetchInfiniteQuery(e).then(Kt).catch(Kt);
	}
	ensureInfiniteQueryData(e) {
		return e._type = "infinite", this.ensureQueryData(e);
	}
	resumePausedMutations() {
		return cn.isOnline() ? this.#g.resumePausedMutations() : Promise.resolve();
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
		this.#k.set(Bt(e), {
			queryKey: e,
			defaultOptions: t
		});
	}
	getQueryDefaults(e) {
		const t = [...this.#k.values()], n = {};
		return t.forEach((t) => {
			zt(e, t.queryKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	setMutationDefaults(e, t) {
		this.#b.set(Bt(e), {
			mutationKey: e,
			defaultOptions: t
		});
	}
	getMutationDefaults(e) {
		const t = [...this.#b.values()], n = {};
		return t.forEach((t) => {
			zt(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
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
		return t.queryHash || (t.queryHash = Vt(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === tn && (t.enabled = !1), t;
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
} } }), Mn = [
	"currentFileId",
	"currentFilename",
	"currentDateIndex",
	"displayColumnChosenByUser",
	...f
];
function En(e) {
	const t = Z();
	return t ? `sleep-scoring-prefs-${t}-${e}` : `sleep-scoring-user-prefs-${e}`;
}
const An = {
	preset: "default",
	onset: "#0080FF",
	offset: "#FF8000",
	sleepOverlay: "#00A99D",
	nonwear: "#DC143C",
	sensorNonwear: "#FFD700",
	choiNonwear: "#8B3FA8",
	activityLine: "#0EA5E9"
}, Pn = {
	default: An,
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
}, Nn = (new RegExp(`\\b(?:${[
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
].join("|")})\\b`), Object.values(a.errnames), []), xn = /* @__PURE__ */ new Set([
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
]), On = /* @__PURE__ */ new Set(["error_type", "has_context"]), Tn = /* @__PURE__ */ new Set([
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
function Fn(e, t, n) {
	const a = function(e) {
		if (!e) return;
		const t = {};
		for (const [n, a] of Object.entries(e)) On.has(n) && ("has_context" === n && "boolean" == typeof a && (t[n] = a), "error_type" === n && "string" == typeof a && (t[n] = Tn.has(a) ? a : "Error"));
		return Object.keys(t).length > 0 ? t : void 0;
	}(n);
	Nn.push({
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		level: e,
		message: xn.has(t) ? t : "Diagnostic event",
		...a ? { context: a } : {}
	}), Nn.length > 500 && Nn.splice(0, Nn.length - 500);
}
function Cn(e) {
	return { error_type: e instanceof Error ? e.name : typeof e };
}
const Rn = "__ui_state";
function Hn() {
	return !Ln && ie();
}
let Ln = !1;
function jn(e) {
	Ln = !0;
	try {
		return e();
	} finally {
		Ln = !1;
	}
}
function Kn(e) {
	return e ? `sleep-scoring-storage-${e}` : "sleep-scoring-storage";
}
function qn(e) {
	try {
		return localStorage.getItem(Kn(e));
	} catch {
		return null;
	}
}
function Gn(e) {
	try {
		localStorage.removeItem(Kn(e));
	} catch {}
}
function Un(e) {
	return `${Kn(e)}:pending`;
}
let Vn = null;
function Bn(e) {
	try {
		return localStorage.getItem(Un(e));
	} catch {
		return null;
	}
}
function zn(e) {
	try {
		const t = JSON.parse(e), n = t?.state;
		if (null != n && "object" == typeof n && "sitePassword" in n) return delete n.sitePassword, JSON.stringify(t);
	} catch {}
	return e;
}
async function Wn(e) {
	return e.studySettings.where("key").equals(Rn).first();
}
"undefined" != typeof window && window.addEventListener("pagehide", function() {
	if (null !== Vn) try {
		localStorage.setItem(Un(Vn.workspaceId), Vn.value);
	} catch {}
});
const $n = /* @__PURE__ */ new WeakMap();
async function Qn(e, t) {
	const n = async function(e, t) {
		await e.transaction("rw", e.studySettings, async () => {
			const n = await Wn(e);
			n?.id ? await e.studySettings.update(n.id, {
				extraSettings: { [O]: t },
				lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
			}) : await e.studySettings.add({
				key: Rn,
				sleepDetectionRule: "",
				nightStartHour: "",
				nightEndHour: "",
				defaultAlgorithm: "",
				extraSettings: { [O]: t },
				contentHash: "",
				lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
			});
		});
	}(e, t);
	$n.set(e, {
		value: t,
		pending: n
	});
	try {
		await n;
	} catch (a) {
		throw $n.get(e)?.pending === n && $n.delete(e), a;
	}
}
const Jn = {
	getItem: async (e) => {
		if (!Hn()) return null;
		const t = Z(), n = Bn(t);
		try {
			const e = ce();
			if (null != n) {
				const a = zn(n);
				await Qn(e, a);
				try {
					const e = Un(t);
					localStorage.getItem(e) === n && localStorage.removeItem(e);
				} catch {}
				return Gn(t), a;
			}
			const a = (await Wn(e))?.extraSettings[O];
			if ("string" == typeof a) return Gn(t), zn(a);
			const r = await async function(e) {
				const t = await e.studySettings.where("key").equals("study").first(), n = t?.extraSettings[O];
				if ("string" != typeof n || !t?.id) return null;
				const a = zn(n);
				await Qn(e, a);
				const { [O]: r, ...i } = t.extraSettings;
				return await e.studySettings.update(t.id, { extraSettings: i }), a;
			}(e);
			if (null !== r) return Gn(t), r;
			const i = qn(t);
			if (null != i) {
				const n = zn(i);
				return await Qn(e, n), Gn(t), n;
			}
			return null;
		} catch (a) {
			return Fn("warn", "Persisted store hydration from the workspace row failed", Cn(a)), null !== n ? zn(n) : qn(t);
		}
	},
	setItem: async (e, t) => {
		if (!Hn()) return;
		const n = {
			workspaceId: Z(),
			value: t
		}, a = Bn(n.workspaceId);
		Vn = n;
		try {
			const e = ce(), r = $n.get(e);
			if (r?.value === t ? await r.pending : await Qn(e, t), Vn === n) {
				Vn = null;
				try {
					const e = Bn(n.workspaceId);
					e !== a && e !== t || localStorage.removeItem(Un(n.workspaceId));
				} catch {}
			}
		} catch (r) {
			if (Fn("warn", "Persisted store write to the workspace row failed; falling back to the device sink", Cn(r)), Vn !== n) return;
			try {
				localStorage.setItem(Un(n.workspaceId), t);
			} catch (i) {
				Fn("warn", "Persisted store write has no sink; this session's settings will not survive", Cn(i));
			}
		}
	},
	removeItem: async (e) => {
		const t = Z();
		Gn(t);
		try {
			localStorage.removeItem(Un(t));
		} catch {}
		if (Vn?.workspaceId === t && (Vn = null), Hn()) try {
			const e = ce();
			$n.delete(e);
			const t = await Wn(e);
			if (!t?.id) return;
			const { [O]: n, ...a } = t.extraSettings;
			await e.studySettings.update(t.id, { extraSettings: a });
		} catch (n) {
			Fn("warn", "Persisted store clear on the workspace row failed", Cn(n));
		}
	}
};
function Yn(e) {
	const t = "string" == typeof e.algoKey ? z(e.algoKey) : null;
	if (null !== t) return {
		algoKey: t,
		algoVersion: $(t),
		paramsHash: ""
	};
	const n = Ue(e.cubeConfig);
	return null === n ? null : {
		algoKey: n.cellId,
		algoVersion: n.implementationVersion,
		paramsHash: n.configHash
	};
}
const Xn = "Scores were computed with different settings, so this night can't be auto-scored. Manual scoring still works.";
function Zn(e) {
	return s.some((t) => e.startsWith(t));
}
function ea(e, t) {
	const n = "string" == typeof t ? t : "recordedCellId" in t ? t.recordedCellId : t.id, a = e.map((e) => (e?.algorithmResults)?.[n]);
	if (!Zn(n)) return {
		status: "ok",
		outputs: a,
		configHash: null
	};
	let r = null, i = "string" != typeof t && "recordedCellId" in t;
	if ("string" == typeof t) {
		const e = je(n);
		r = e?.configHash ?? null, i = void 0 === e;
	} else if (!("recordedCellId" in t)) {
		const e = Ue(t);
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
function ta(e) {
	const t = {};
	for (const n of Object.keys(e.algorithmResults ?? {})) t[n] = !0;
	return {
		...void 0 === e.date ? {} : { date: e.date },
		algorithmResults: t,
		algorithmResultHashes: e.algorithmResultHashes
	};
}
function na(e) {
	return e || "";
}
function aa(e, t) {
	return ia(ra(e), t);
}
function ra(e) {
	return [...e].filter((e) => void 0 !== e).map(ta).sort((e, t) => (e.date ?? "").localeCompare(t.date ?? ""));
}
function ia(e, t) {
	const n = na(t) || e.map((e) => Object.keys(e.algorithmResults)[0]).find((e) => void 0 !== e) || null;
	return null === n ? {
		key: n,
		status: "ok",
		configHash: null
	} : (() => {
		const t = ea(e, n);
		return "stale" === t.status ? {
			key: n,
			status: "stale",
			reason: Xn
		} : {
			key: n,
			status: "ok",
			configHash: t.configHash
		};
	})();
}
const sa = aa([]);
function oa(e) {
	const t = ra(e), n = /* @__PURE__ */ new Map(), a = [...new Set(t.flatMap((e) => Object.keys(e.algorithmResults)))].filter(Zn);
	return Object.assign((e) => {
		const a = na(e);
		let r = n.get(a);
		return r || (r = ia(t, e), n.set(a, r)), r;
	}, { cellIds: a });
}
function la(e, t) {
	if ("stale" === t.status) return {
		status: "stale",
		reason: t.reason
	};
	if (null === t.key) return {
		status: "ok",
		key: null,
		outputs: e.map(() => {})
	};
	const n = ea(e, t.key);
	return "stale" === n.status || null !== n.configHash && null !== t.configHash && n.configHash !== t.configHash ? {
		status: "stale",
		reason: Xn
	} : {
		status: "ok",
		key: t.key,
		outputs: n.outputs
	};
}
function ca(e) {
	const t = {
		algorithmResults: e?.algorithmResults ?? {},
		algorithmResultHashes: e?.algorithmResultHashes
	};
	return Object.keys(t.algorithmResults).flatMap((e) => {
		const n = ea([t], Zn(e) ? { recordedCellId: e } : e), a = "ok" === n.status ? n.outputs[0] : void 0;
		return void 0 === a ? [] : [[e, a]];
	});
}
function da(e, t) {
	const n = {};
	for (const [a, r] of Object.entries(e ?? {})) {
		const e = t(r, a);
		void 0 !== e && (n[a] = e);
	}
	return n;
}
function ua(e) {
	const t = {}, n = {};
	for (const { cubeConfig: a, results: r } of e ?? []) {
		const e = Ue(a);
		if (null === e) throw new Error(`Refused a cube output for ${a.id}: not a planned config`);
		t[e.cellId] = r.slice(0), n[e.cellId] = e.configHash;
	}
	return {
		algorithmResults: t,
		algorithmResultHashes: n
	};
}
function pa(e) {
	const t = e?.timestamps, n = t ? new Float64Array(t) : /* @__PURE__ */ new Float64Array(0), a = 0 === n.length ? e?.ggirTimestamps : void 0, r = Boolean(a?.byteLength), i = r ? e?.ggirSib : void 0;
	return {
		timestamps: r ? new Float64Array(a) : n,
		epochSec: r ? 5 : 60,
		sleepScores: i?.byteLength ? new Uint8Array(i) : null,
		ggir: r
	};
}
function ma(e) {
	return null != e && "" !== e;
}
function ha(e) {
	return ma(e.start) || ma(e.end);
}
function fa(e) {
	return ma(e.start) || ma(e.end);
}
function ya(e) {
	return Array.isArray(e.naps) ? e.naps.map((e) => ({
		start: e.start ?? null,
		end: e.end ?? null
	})).filter(ha) : [
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
	].filter(ha);
}
function ga(e) {
	return Array.isArray(e.nonwearWindows) ? e.nonwearWindows.map((e) => ({
		start: e.start ?? null,
		end: e.end ?? null,
		reason: e.reason ?? null
	})).filter(fa) : [
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
	].filter(fa);
}
const wa = ut.map((e) => ({
	key: e.key,
	label: e.label,
	dateTargetKey: e.date_target_key,
	timeTargetKey: e.time_target_key,
	datetimeTargetKey: e.datetime_target_key,
	required: e.required,
	temporalRole: e.temporal_role
}));
function va(e) {
	return "morning_offset" === e.temporalRole ? Q.sleep_date_chronology : Q.sleep_date_same_day;
}
function _a(e) {
	const t = mt(e.key);
	return "nap" === t?.family ? V.naps : "nonwear" === t?.family ? V.nonwear : V.main_sleep;
}
(function(e, t = wa) {
	const n = {};
	for (const a of t) {
		const t = e[_a(a)];
		n[a.key] = t === U.night_date || t === U.period_start_day ? va(a) : Q.explicit_only;
	}
	return {
		dateRules: n,
		pendingGroups: Object.keys(e).filter((t) => e[t] === U.ask_per_night).sort()
	};
})(Object.freeze({
	[V.main_sleep]: F.diary_main_sleep_date_rule,
	[V.naps]: F.diary_nap_date_rule,
	[V.nonwear]: F.diary_nonwear_date_rule
})).dateRules, F.diary_day_boundary_hour, F.diary_dst_fold_policy, F.diary_dst_gap_policy, new Set(wa.flatMap((e) => [
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
const Sa = Object.freeze({
	in_bed: "diaryInBedTime",
	sleep_onset: "diaryOnsetTime",
	sleep_offset: "diaryWakeTime",
	out_of_bed: "diaryOutOfBedTime"
}), Ia = /* @__PURE__ */ new Map(), ka = /* @__PURE__ */ new Set();
let ba = 0;
function Da(e, t) {
	const n = t?.diaryTemporalPolicy;
	var a, r;
	void 0 !== n && Number.isFinite(e) && (r = n, (void 0 === (a = Ia.get(e)) || a.dayBoundaryHour !== r.dayBoundaryHour || a.mainSleepDateRule !== r.mainSleepDateRule || a.napDateRule !== r.napDateRule || a.nonwearDateRule !== r.nonwearDateRule || a.dstFoldPolicy !== r.dstFoldPolicy || a.dstGapPolicy !== r.dstGapPolicy) && (Ia.set(e, n), function() {
		ba += 1;
		for (const e of ka) e();
	}()));
}
function Ma(e) {
	return (null == e ? void 0 : Ia.get(e)) ?? function() {
		const e = Uo.getState(), t = e;
		for (const n of R) {
			if (!n.startsWith("diary_")) continue;
			const e = H[n].storeKeys.zustand;
			if (!e || null !== r(n, t[e])) throw new Error("The persisted study configuration has an incomplete diary temporal policy.");
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
function Ea(e) {
	return {
		dayStartHour: Ma(e).dayBoundaryHour,
		morningOffsetPadHours: pt.morningOffsetPadHours
	};
}
function Aa(e) {
	return ya(e).map((e) => [e.start, e.end]);
}
function Pa(e) {
	return ga(e).map((e) => [e.start, e.end]);
}
function Na(e, t) {
	return null == e ? null : t.wireClock(e);
}
const xa = /* @__PURE__ */ new WeakMap();
function Oa(e, t) {
	xa.get(t)?.delete(e);
}
async function Ta(e, t, n) {
	const a = t ?? ce(), [r, i] = await Promise.all([Yi(e, a), n ?? Ti(e, a).then((e) => e?.seriesRevision ?? 0)]);
	if (0 === r.length) return null;
	const s = `${i}|${r.length}|${r[0]}|${r[r.length - 1]}`;
	let o = xa.get(a);
	const l = o?.get(e);
	if (l && l.dateKey === s) return l.promise;
	o || (o = /* @__PURE__ */ new Map(), xa.set(a, o));
	const c = o, d = async function(e, t, n) {
		const [a, r] = await Promise.all([Wi(e, t[0], n), Wi(e, t[t.length - 1], n)]);
		if (!a || !r) return null;
		const i = pa(a).timestamps, s = pa(r).timestamps;
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
function Fa(e, t, n) {
	if (Da(e.fileId, e.importMappingProvenance), null === t) return e;
	const a = {
		diaryInBedTime: e.diaryInBedTime ?? null,
		diaryOnsetTime: e.diaryOnsetTime ?? null,
		diaryWakeTime: e.diaryWakeTime ?? null
	}, { ampm_search_gap_min_hours: r, ampm_search_gap_max_hours: i, ampm_search_window_margin_hours: s } = dt.ampmSearchHours, o = n.correctDiaryAmPm({
		inBed: a.diaryInBedTime,
		onset: a.diaryOnsetTime,
		wake: a.diaryWakeTime,
		onsetAnchor: ht.onset.map(({ tsField: e }) => a[e]).find(Boolean) ?? null,
		baseDate: e.analysisDate,
		spanMs: [t.start, t.end],
		geometry: Ea(e.fileId),
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
function Ca(e, t, n) {
	return ct((n) => Fa(e, t, n), new ft(n));
}
function Ra(e, t, n) {
	return ct((n) => e.map((e) => Fa(e, t, n)), new ft(n));
}
const Ha = {
	diary_in_bed_time: (e) => e.diaryInBedTime,
	diary_onset_time: (e) => e.diaryOnsetTime,
	diary_wake_time: (e) => e.diaryWakeTime,
	diary_out_of_bed_time: (e) => e.diaryOutOfBedTime
};
function La(e, t) {
	if (!e) return null;
	const n = e.decisionOverlayJson?.[t];
	if ("string" == typeof n && "" !== n) return n;
	const a = e.ampmCorrectionsJson?.[t];
	if ("string" == typeof a && "" !== a) return a;
	const r = Ha[t](e);
	return "string" == typeof r && "" !== r ? r : null;
}
async function ja(e, t, n = j()) {
	const a = [
		"diary_in_bed_time",
		"diary_out_of_bed_time",
		"diary_onset_time",
		"diary_wake_time"
	], r = [...e].flatMap((e) => a.map((t) => null === La(e, t) ? 0 : 1));
	return Dt("ggirDiaryLogShape", `${t ?? ""}:${r.join("")}`, () => n.ggirDiaryLogShape(Uint8Array.from(r), t));
}
function Ka(e, t) {
	for (const n of ht[e]) {
		const e = La(t, n.dbColumn);
		if (null !== e) return e;
	}
	return null;
}
function qa(e) {
	return Ka("onset", e);
}
function Ga(e) {
	return Ka("wake", e);
}
function Ua(e) {
	return Ka("in_bed", e);
}
function Va(e) {
	return Ka("out_bed", e);
}
function Ba(e, t) {
	return `${e}|${t}`;
}
const za = [
	"diaryEntries",
	"stagedDiaryEntries",
	"diaryOccurrences"
];
var Wa = class {
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
		const e = Object.fromEntries(za.map((e) => {
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
function $a(e, t) {
	const n = new Wa(e);
	for (const a of t) {
		for (const { store: e, change: t, ...r } of a.rows) n.row(e, t, r);
		for (const e of a.rejected) n.reject(e);
	}
	return n.build();
}
var Qa = class extends Error {
	constructor() {
		super("An earlier audit record is still being written. No diary rows were changed; try again."), this.name = "DiaryAuditPendingError";
	}
};
function Ja(e, t) {
	if (t) return t;
	const { username: n, selectedStudyId: a } = Uo.getState();
	return Xe.captureWorkspaceBinding(e, {
		username: n,
		studyId: a
	});
}
async function Ya(e, t) {
	if (!await Xe.settleWritesForDb(e, t)) throw new Qa();
}
async function Xa(e, t, n = []) {
	const a = async (e) => {
		if (!await e) throw new Qa();
	}, r = /* @__PURE__ */ new Map();
	for (const s of e.rows) "diaryEntries" === s.store && "deleted" !== s.change && null !== s.fileId && null !== s.analysisDate && r.set(s.fileId, [...r.get(s.fileId) ?? [], s.analysisDate]);
	const i = e.counts.stagedDiaryEntries;
	switch (e.operation) {
		case "import":
		case "attach":
		case "attach_chosen":
		case "move": {
			await (async () => {
				for (const [n, i] of r) await a(Xe.recordFileEventDurably({
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
			(i.added + i.replaced > 0 || s > 0) && "attach" !== e.operation && "attach_chosen" !== e.operation && await a(Xe.recordWorkspaceBoundDurably(t, K.DIARY_STAGED, {
				staged: i.added + i.replaced,
				replaced: i.replaced,
				skipped: e.rejected.length,
				...s > 0 ? { occurrenceRecords: s } : {}
			}));
			const o = function(e) {
				return new Set(e.rows.flatMap((e) => "deleted" !== e.change && "diaryOccurrences" !== e.store && null !== e.analysisDate ? [Ba(L(e.sourceKey?.trim() ? e.sourceKey : `file:${String(e.fileId)}`), e.analysisDate)] : []));
			}(e), l = n.filter((e) => o.has(e.entryKey));
			l.length > 0 && await a(Xe.recordWorkspaceBoundDurably(t, K.DIARY_REPAIRED, {
				applied: l.length,
				fields: [...new Set(l.map((e) => e.field))].sort()
			}));
			return;
		}
		case "delete":
		case "workspace_clear":
			"workspace_clear" === e.operation && await a(Xe.recordWorkspaceBoundDurably(t, K.DIARY_WORKSPACE_CLEARED, {
				staged: e.counts.stagedDiaryEntries.deleted,
				canonical: e.counts.diaryEntries.deleted,
				occurrences: e.counts.diaryOccurrences.deleted
			}));
			for (const n of e.rows) "stagedDiaryEntries" === n.store && "deleted" === n.change && await a(Xe.recordWorkspaceBoundDurably(t, K.DIARY_DISCARDED, {
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
let Za = null;
async function er(e) {
	if ("undefined" != typeof navigator && navigator.storage?.getDirectory) try {
		await (await async function() {
			return (await (Za || (Za = "undefined" != typeof navigator && navigator.storage?.getDirectory ? navigator.storage.getDirectory() : Promise.reject(/* @__PURE__ */ new Error("OPFS is not available in this browser"))), Za)).getDirectoryHandle("activity_v5", { create: !1 });
		}()).removeEntry(function(e) {
			return `${e}.arrow`;
		}(e));
	} catch (t) {
		if (t instanceof DOMException && "NotFoundError" === t.name) return;
		throw t;
	}
}
const tr = Uint8Array.of(83, 67, 68, 49), nr = ".arrow";
function ar(e) {
	const t = JSON.stringify({
		v: "v6",
		choiAxis: e.choiAxis,
		extras: e.extras ?? {}
	});
	let n = 2166136261;
	for (let a = 0; a < t.length; a++) n ^= t.charCodeAt(a), n = Math.imul(n, 16777619) >>> 0;
	return n.toString(16).padStart(8, "0");
}
let rr = null;
async function ir(e = !1) {
	return (await (rr || (rr = "undefined" != typeof navigator && navigator.storage?.getDirectory ? navigator.storage.getDirectory() : Promise.reject(/* @__PURE__ */ new Error("OPFS is not available in this browser"))), rr)).getDirectoryHandle("scored", { create: e });
}
function sr(e, t) {
	return `${e}__${t}${nr}`;
}
function or() {
	return "undefined" != typeof navigator && !!navigator.storage?.getDirectory;
}
function lr(e, t) {
	if (e.length === t) return e;
	const n = new Uint8Array(t);
	return n.set(e.subarray(0, t)), n;
}
async function cr(e, t, n) {
	if (!or()) return;
	const a = ar(t), r = await (await (await ir(!0)).getFileHandle(sr(e, a), { create: !0 })).createWritable();
	try {
		const e = await async function(e) {
			const t = new TextEncoder(), n = [], a = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4));
			a.setUint32(0, e.size, !0), n.push(new Uint8Array(a.buffer));
			for (const [r, i] of e) {
				const e = t.encode(r), a = i.sadeh_actilife.length;
				let s = 0;
				i.detach_nonwear && (s |= 1), i.sadeh_ggir && (s |= 2), i.ck_ggir && (s |= 4), i.nonwear_choi_2011 && (s |= 8), i.lstm_sleep_wake && (s |= 16);
				const o = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(7));
				o.setUint16(0, e.length, !0), o.setUint32(2, a, !0), o.setUint8(6, s), n.push(new Uint8Array(o.buffer), e), n.push(lr(i.sadeh_actilife, a), lr(i.sadeh_original, a), lr(i.ck_actilife, a), lr(i.ck_original, a), lr(i.consensus_majority_vote, a), lr(i.nonwear, a)), i.detach_nonwear && n.push(lr(i.detach_nonwear, a)), i.sadeh_ggir && n.push(lr(i.sadeh_ggir, a)), i.ck_ggir && n.push(lr(i.ck_ggir, a)), i.nonwear_choi_2011 && n.push(lr(i.nonwear_choi_2011, a)), i.lstm_sleep_wake && n.push(lr(i.lstm_sleep_wake, a));
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
			}(tr, wt(n));
		}(n);
		await r.write(e);
	} finally {
		await r.close();
	}
}
async function dr(e, t) {
	if (!or()) return null;
	const n = ar(t);
	let a, r;
	try {
		a = await ir(!1);
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	try {
		r = await a.getFileHandle(sr(e, n), { create: !1 });
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	const i = await r.getFile(), s = new Uint8Array(await i.arrayBuffer());
	try {
		return await async function(e) {
			const t = await vt(tr, e), n = new DataView(t.buffer, t.byteOffset, t.byteLength), a = new TextDecoder();
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
		return console.warn("[opfs-scored] cache decode failed; deleting the corrupt entry:", o instanceof Error ? o.message : o), await a.removeEntry(sr(e, n)).catch((e) => {
			console.warn("[opfs-scored] failed to delete the corrupt cache entry:", e instanceof Error ? e.message : e);
		}), null;
	}
}
async function ur(e) {
	if (!or()) return;
	let t;
	try {
		t = await ir(!1);
	} catch (r) {
		if (r instanceof DOMException && "NotFoundError" === r.name) return;
		throw r;
	}
	const n = `${e}__`, a = t.values();
	for await (const i of a) "file" === i.kind && i.name.startsWith(n) && i.name.endsWith(nr) && await t.removeEntry(i.name).catch((t) => {
		t instanceof DOMException && "NotFoundError" === t.name || console.warn(`[opfs-scored] deleteScoredForFile(${e}) failed for entry ${i.name}:`, t instanceof Error ? t.message : t);
	});
}
function pr(e) {
	const t = Date.parse(e.lastModifiedAt);
	return Number.isFinite(t) ? t : Number.NEGATIVE_INFINITY;
}
function mr(e, t) {
	if (!e) return t;
	const n = pr(e), a = pr(t);
	return a !== n ? a > n ? t : e : (t.id ?? 0) > (e.id ?? 0) ? t : e;
}
function hr(e, t, n = !1) {
	const a = /* @__PURE__ */ new Map();
	for (const r of e) r.username !== t || n && !h(r) || a.set(r.date, mr(a.get(r.date), r));
	return a;
}
function fr(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		let e = t.get(n.date);
		e || t.set(n.date, e = /* @__PURE__ */ new Map()), e.set(n.username, mr(e.get(n.username), n));
	}
	return t;
}
function yr(e) {
	const t = [];
	for (const n of e) if ("auto_score" !== n.username) for (const e of n.nonwearMarkers) null != e.startTimestamp && null != e.endTimestamp && t.push({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	});
	return t;
}
let gr = !1, wr = !1;
async function vr() {
	const e = navigator.storage;
	if (!e?.persisted) return !1;
	try {
		return await e.persisted();
	} catch {
		return !1;
	}
}
function _r(e) {
	if (!e || "object" != typeof e) return !1;
	const t = e;
	return "QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name || 22 === t.code || 1014 === t.code || !("string" != typeof t.message || !/quota/i.test(t.message)) || (t.inner ? _r(t.inner) : !!t.cause && _r(t.cause));
}
const Sr = [];
function Ir(e) {
	return e ? e instanceof ArrayBuffer ? new Float64Array(e, 0, Math.floor(e.byteLength / Float64Array.BYTES_PER_ELEMENT)) : e : Sr;
}
const kr = /* @__PURE__ */ new WeakMap();
function br(e, t) {
	"number" == typeof t && t > 0 && kr.set(e, t);
}
async function Dr(e, t, n) {
	const a = Ir(e);
	if (a.length < 2) return t;
	const r = function(e) {
		return kr.get(Ir(e));
	}(a);
	return void 0 !== r ? r : await (n ?? j()).medianGapSeconds(Float64Array.from(a)) ?? t;
}
const Mr = {
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
}, Er = Object.fromEntries(Object.entries(Mr).filter(([, e]) => null !== e.cascade).sort(([, e], [, t]) => e.cascadeOrder - t.cascadeOrder).map(([e, t]) => [e, t.cascade])), Ar = Object.entries(Mr).filter(([, e]) => "none" !== e.workspace).sort(([, e], [, t]) => e.workspaceOrder - t.workspaceOrder).map(([e]) => e);
function Pr(e) {
	if (!("diarySourceSha256" in e) || void 0 === e.diarySourceSha256) return {};
	if ("string" != typeof e.diarySourceSha256 || !/^[a-f0-9]{64}$/u.test(e.diarySourceSha256)) throw new Error("Diary source identity must be a SHA-256 digest.");
	return { diarySourceSha256: e.diarySourceSha256 };
}
function Nr(e, t) {
	if (void 0 !== t && void 0 === e) throw new Error("Diary replication transport requires its profile identity.");
	if (void 0 !== e?.transportSha256 && void 0 === t) throw new Error("Profile-backed diary imports require both profile identity and full replication transport.");
}
function xr(e) {
	return {
		...Pr(e),
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
function Or(e, t = e.sourceKey, n = e.targetChosenByUser) {
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
	}, r = Array.isArray(e.naps) ? e.naps : ya(e);
	r.length > 3 && function(e, t) {
		const n = t.map((e) => ({
			start: e.start ?? null,
			end: e.end ?? null
		}));
		e.naps = n, e.nap1Start = n[0]?.start ?? null, e.nap1End = n[0]?.end ?? null, e.nap2Start = n[1]?.start ?? null, e.nap2End = n[1]?.end ?? null, e.nap3Start = n[2]?.start ?? null, e.nap3End = n[2]?.end ?? null;
	}(a, r);
	const i = Array.isArray(e.nonwearWindows) ? e.nonwearWindows : ga(e);
	return i.length > 3 && function(e, t) {
		const n = t.map((e) => ({
			start: e.start ?? null,
			end: e.end ?? null,
			reason: e.reason ?? null
		}));
		e.nonwearWindows = n, e.nonwear1Start = n[0]?.start ?? null, e.nonwear1End = n[0]?.end ?? null, e.nonwear1Reason = n[0]?.reason ?? null, e.nonwear2Start = n[1]?.start ?? null, e.nonwear2End = n[1]?.end ?? null, e.nonwear2Reason = n[1]?.reason ?? null, e.nonwear3Start = n[2]?.start ?? null, e.nonwear3End = n[2]?.end ?? null, e.nonwear3Reason = n[2]?.reason ?? null;
	}(a, i), {
		...Pr(e),
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
async function Tr(e, t, n = ce()) {
	const a = await n.diaryEntries.where("[fileId+analysisDate]").equals([e, t]).first();
	return a ? xr(a) : null;
}
async function Fr(e, t = ce()) {
	return (await t.diaryEntries.where("fileId").equals(e).toArray()).map(xr);
}
function Cr(e, t = !1) {
	return Array.isArray(e) ? e.map((e) => Cr(e, t)) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [t]) => e.localeCompare(t)).map(([n, a]) => {
		const r = e;
		return [n, (t && "replicationProfileTransport" === n ? r.replicationProfileIdentity?.transportSha256 : t && "importMappingProvenance" === n ? r.importMappingProvenance?.configurationSha256 : t && "instrumentMappingProvenance" === n ? r.instrumentMappingProvenance?.mappingSha256 : void 0) ?? Cr(a, t)];
	})) : e;
}
function Rr(e, t = !1) {
	return JSON.stringify(Cr(e, t)) ?? "null";
}
Object.entries(Mr).filter(([, e]) => "unattached" === e.workspace).map(([e]) => e), Object.entries(Mr).filter(([, e]) => e.backup).map(([e]) => e), Ar.filter((e) => "diary" === Mr[e].aggregate);
const Hr = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakSet();
async function jr(e) {
	let t = a.currentTransaction;
	for (; t?.parent;) t = t.parent;
	t && Lr.has(t) || (t && Lr.add(t), await Le([], e));
}
async function Kr(e, t, n) {
	null != n ? await e.diaryEntries.put({
		...t,
		id: n
	}) : await e.diaryEntries.add(t), await jr(e), Gr(e, t.fileId);
}
async function qr(e, t, n) {
	await e.diaryEntries.delete(t), await jr(e), Gr(e, n);
}
function Gr(e, t) {
	let n = a.currentTransaction;
	for (; n?.parent;) n = n.parent;
	if (!n) return void Se(t, e);
	const r = Hr.get(n);
	if (r) return void r.add(t);
	const i = /* @__PURE__ */ new Set([t]);
	Hr.set(n, i), n.idbtrans.addEventListener("complete", () => {
		for (const t of i) Se(t, e, i);
	}, { once: !0 });
}
function Ur(e) {
	return A(e.filename) !== e.filename;
}
function Vr(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (null == n.id) continue;
		const e = c(n), a = t.get(e) ?? [];
		a.some((e) => e.id === n.id) || a.push(n), t.set(e, a);
	}
	return [...t.values()].map((e) => e.sort((e, t) => Number(Ur(e)) - Number(Ur(t)) || e.id - t.id));
}
function Br(e, t) {
	return {
		status: b.MATCHED,
		file: e[0],
		files: e,
		basis: t
	};
}
function zr(e, t, n, a) {
	const r = u(e, t, n, a);
	if (r.status === b.UNMATCHED) return r;
	if (r.status === b.MATCHED && "named" === r.basis) return Br(Vr(n.byRecording.get(c(r.file)) ?? [r.file])[0], "identity");
	const i = Vr(r.status === b.AMBIGUOUS ? r.candidates : [r.file, ...n.byParticipantId.covering(d(r.file), t)]), s = i.length > 1 ? function(e, t) {
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
	return s ? Br(s, "wear") : r.status === b.AMBIGUOUS ? 1 === i.length ? Br(i[0], "identity") : {
		status: b.AMBIGUOUS,
		count: i.length
	} : Br(i.find((e) => e.some((e) => e.id === r.file.id)), "identity");
}
const Wr = (e) => [e.markers, e.sensorNonwear];
function $r(e, n) {
	const r = /* @__PURE__ */ new Map();
	for (const t of n) {
		const e = d(t);
		e && r.set(e, (r.get(e) ?? /* @__PURE__ */ new Set()).add(c(t)));
	}
	const i = n.filter((e) => null != e.id && e.nonwearReview && (r.get(d(e))?.size ?? 0) > 1);
	return 0 === i.length ? a.Promise.resolve(t(n)) : async function(e, n, r) {
		const i = a.currentTransaction;
		if (i && !Wr(e).every((e) => i.storeNames.includes(e.name))) throw new Error("Diary planning reads wear evidence: its transaction must include markers and sensorNonwear.");
		const s = import("./local-nonwear-review-D65J2LGm.js"), { createLocalNonwearReviewRepository: o, currentNonwearReviewInputs: l } = i ? await a.waitFor(s) : await s, c = o(e), { username: d } = Uo.getState(), u = Promise.all(r.map(async (e) => await l(e, d, c) === e.nonwearReview.inputs ? null : e.id)), p = new Set((i ? await a.waitFor(u) : await u).filter((e) => null !== e));
		return t(n.map((e) => {
			if (!p.has(e.id)) return e;
			const { nonwearReview: t, ...n } = e;
			return n;
		}));
	}(e, n, i);
}
let Qr;
function Jr() {
	return Qr ?? a.waitFor(Promise.all([
		import("./diary-occurrence-store-sPbqqWU8.js"),
		import("./diary-import-provenance-DOIhZd5m.js"),
		import("./diary-instrument-mapping-CbXoT5Zj.js"),
		import("./diary-replication-profile-CDi4gwmi.js").then((e) => e.i),
		import("./diary-replication-transport-DnWf6SRj.js")
	])).then(([e, t, n, a, r]) => Qr = {
		occurrence: e,
		provenance: t,
		instrument: n,
		profile: a,
		transport: r
	});
}
function Yr(e, t) {
	return e.status === b.MATCHED && e.files.some((e) => e.id === t);
}
async function Xr(e, t, n, { existing: a, participantFiles: r, excludeRowIds: i } = {}) {
	if (!t || a?.fileId === t.id) return null;
	const s = d(t);
	if (!s) return null;
	const o = c(t), l = r ? r.filter((e) => d(e) === s) : await e.files.where(P).equals(s).toArray(), u = new Set(l.filter((e) => e.id !== t.id && c(e) !== o).map((e) => e.id));
	return u.size > 0 && (await e.diaryEntries.where("analysisDate").equals(n).toArray()).some((e) => u.has(e.fileId) && e.id !== a?.id && !i?.has(e.id)) ? Object.assign(/* @__PURE__ */ new Error("Diary evidence already occupies this participant night on another recording."), {
		fileId: t.id,
		sourceKey: s,
		analysisDate: n
	}) : null;
}
async function Zr(e = ce()) {
	const t = await e.diaryBindingDirty.toCollection().primaryKeys(), n = await Promise.all(t.filter((e) => "number" == typeof e).map((t) => e.files.where(E).between([t, "local"], [
		t,
		"local",
		[]
	]).keys()));
	return [.../* @__PURE__ */ new Set([...t.filter((e) => "string" == typeof e).map((e) => e.slice(x.length)), ...n.flat().map((e) => e[2])])].sort();
}
async function ei(e = ce(), t) {
	return (await (t ? e.stagedDiaryEntries.where(k).anyOf([...t]).distinct() : e.stagedDiaryEntries).toArray()).sort((e, t) => e.importedAt.localeCompare(t.importedAt));
}
function ti(e, t) {
	return 0 === t.availableDates.length || t.availableDates.includes(e.analysisDate);
}
async function ni(e, t, n) {
	const a = c(t);
	return (await e.files.where(P).equals(d(t)).toArray()).filter((e) => e.id !== t.id && c(e) === a && D(e) && ti(n, e)).sort((e, t) => Number(Ur(e)) - Number(Ur(t)) || e.id - t.id);
}
async function ai(e, t, n = ce(), r = {}) {
	const i = e.id, s = t.id;
	if (!i || !s) return { status: "missing" };
	const o = n, l = await o.stagedDiaryEntries.get(i);
	l && Nr(l.replicationProfileIdentity, l.replicationProfileTransport);
	const { occurrence: { verifyDiaryOccurrenceRecord: c, assertDiaryOccurrenceMatchesCompatibilityEntry: u }, provenance: { verifyDiaryImportMappingProvenance: p, canonicalizeDiaryMappedSourceValues: m }, instrument: { verifyDiaryInstrumentMappingProvenance: h, canonicalizeDiaryInstrumentValues: f }, profile: { verifyDiaryReplicationProfileIdentity: y }, transport: { verifyDiaryReplicationTransport: g, assertDiaryReplicationTransportBinding: w } } = await Jr(), v = r.targetChosenByUser ? "attach_chosen" : "attach", _ = !0 === r.enclosingAudit;
	if (_ && !a.currentTransaction?.storeNames.includes("auditLog")) throw new Error("An enclosing diary audit needs a transaction that includes the audit log.");
	const S = _ ? null : Ja(o, r.audit);
	return S && await Ya(o, S), await Ze([
		o.files,
		o.diaryEntries,
		o.stagedDiaryEntries,
		o.diaryOccurrences,
		o.auditLog,
		...Wr(o)
	], async () => {
		const e = new Wa(v), n = await o.stagedDiaryEntries.get(i);
		if (!n) return { status: "missing" };
		const l = d(t), _ = await o.files.where(P).equals(l).toArray(), I = r.targetChosenByUser ? await o.files.get(s) : _.find((e) => e.id === s);
		if (!I || !D(I)) return { status: "target_changed" };
		const k = await $r(o, _.filter((e) => "local" === e.source)), M = r.targetChosenByUser ? null : zr(n.sourceKey, n.analysisDate, k);
		if (!(r.targetChosenByUser ? ti(n, I) : null !== M && Yr(M, s) && "local" === I.source && I.filename === t.filename && d(I) === l)) return { status: "target_changed" };
		const E = M?.status === b.MATCHED ? M.files : [I, ...await ni(o, I, n)], A = E[0].id, N = (await Promise.all(E.map((e) => o.diaryEntries.where("[fileId+analysisDate]").equals([e.id, n.analysisDate]).first()))).find((e) => void 0 !== e), x = function(e, t) {
			return {
				...Pr(t),
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
		}(s, n), O = await o.diaryOccurrences.where("[normalizedSourceKey+analysisDate]").equals([n.normalizedSourceKey, n.analysisDate]).toArray(), T = await a.waitFor(Promise.all(O.map(c)));
		if (N || await Xr(o, I, n.analysisDate, {
			existing: N,
			participantFiles: r.targetChosenByUser ? void 0 : _
		}) || T.some((e) => !Yr(zr(e.sourceKey, n.analysisDate, k, r.targetChosenByUser ? s : void 0), A))) return e.reject({
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
		if (T.some((e) => null !== e.fileId && e.fileId !== A)) throw new Error("A staged diary occurrence is already associated with a different local file.");
		if (!Je(x.timezone) || !Je(x.entryTimezone)) throw new Error("Staged diary entry contains an invalid IANA timezone.");
		const F = void 0 === x.importMappingProvenance ? void 0 : await a.waitFor(p(x.importMappingProvenance));
		if (void 0 !== x.mappedSourceValues && void 0 === F) throw new Error("Mapped diary source values require mapping provenance.");
		const C = void 0 === x.mappedSourceValues ? void 0 : m(F, x.mappedSourceValues);
		if (void 0 === x.instrumentMappingProvenance && (void 0 !== x.instrumentValues || void 0 !== x.replicationProfileIdentity || void 0 !== x.replicationProfileTransport)) throw new Error("Reviewed diary values and replication profile require mapping provenance.");
		if (void 0 !== x.instrumentMappingProvenance && void 0 === x.instrumentValues) throw new Error("Reviewed diary mapping provenance requires source values.");
		const R = void 0 === x.instrumentMappingProvenance ? void 0 : await a.waitFor(h(x.instrumentMappingProvenance)), H = void 0 === R ? void 0 : f(R, x.instrumentValues), j = void 0 === x.replicationProfileIdentity ? void 0 : y(x.replicationProfileIdentity), K = void 0 === x.replicationProfileTransport ? void 0 : await a.waitFor(g(x.replicationProfileTransport));
		if (Nr(j, K), void 0 !== R && void 0 !== j && (j.versionDefinitionId !== R.versionDefinitionId || j.versionDefinitionSha256 !== R.versionDefinitionSha256)) throw new Error("Diary replication profile identity does not match the reviewed mapping.");
		if (void 0 !== K && void 0 !== R && void 0 !== j) await a.waitFor(w(K, j, R));
		else if (void 0 !== K) throw new Error("Diary replication transport is missing its profile identity or reviewed mapping.");
		const q = {
			...x,
			...void 0 === F ? {} : { importMappingProvenance: F },
			...void 0 === C ? {} : { mappedSourceValues: C },
			...void 0 === R ? {} : {
				instrumentMappingProvenance: R,
				instrumentValues: H,
				...void 0 === j ? {} : { replicationProfileIdentity: j },
				...void 0 === K ? {} : { replicationProfileTransport: K }
			}
		};
		for (const t of T) {
			if (L(n.sourceKey) !== t.normalizedSourceKey) throw new Error("Diary occurrence response does not match its compatibility diary source.");
			u(t, q);
		}
		const G = (/* @__PURE__ */ new Date()).toISOString();
		for (const t of E) {
			const a = {
				fileId: t.id,
				analysisDate: n.analysisDate,
				...Or(q, n.sourceKey, r.targetChosenByUser),
				importedAt: G
			};
			await tt({
				op: "diary_put",
				fileId: t.id,
				payload: {
					analysisDate: n.analysisDate,
					entry: a,
					replaced: !1
				}
			}), await Kr(o, a, void 0), e.row("diaryEntries", "added", {
				fileId: t.id,
				sourceKey: n.sourceKey,
				analysisDate: n.analysisDate
			});
		}
		for (const t of T) {
			if (t.fileId === A) continue;
			const n = {
				...t,
				fileId: A
			};
			await o.diaryOccurrences.put(n), e.row("diaryOccurrences", "replaced", {
				fileId: A,
				sourceKey: t.sourceKey,
				analysisDate: t.analysisDate
			}), await tt({
				op: "diary_occurrence_put",
				fileId: A,
				payload: {
					disposition: "staged_attach",
					record: n
				}
			});
		}
		await tt({
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
		return S && await Xa(U, S), {
			status: "attached",
			sourceKey: n.sourceKey,
			analysisDate: n.analysisDate,
			fileIds: E.map((e) => e.id),
			receipt: U
		};
	}, o);
}
function ri(e) {
	const { id: t, fileId: n, sourceKey: a, targetChosenByUser: r, ...i } = e;
	return Rr(i, !0);
}
async function ii(e, t = ce(), n) {
	const a = Ja(t, n), r = [
		t.files,
		t.diaryEntries,
		t.stagedDiaryEntries,
		t.diaryOccurrences
	];
	return await Xe.settleWritesForDb(t, a) ? t.transaction("rw", [
		...r,
		t.projectMeta,
		t.walLog,
		t.auditLog,
		...Wr(t)
	], async () => {
		const n = await async function(e, t) {
			const n = [], a = [], r = [], i = /* @__PURE__ */ new Set(), s = {
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
				summary: s
			};
			const { occurrence: { assertDiaryOccurrenceMatchesCompatibilityEntry: o } } = await Jr(), l = await Pi(t, {
				participantKeys: e,
				includeIncomplete: !0
			}), u = await $r(t, l), p = l.filter((t) => e.includes(d(t))).map((e) => e.id), m = await t.diaryEntries.where("fileId").anyOf(p).filter((e) => !e.targetChosenByUser).toArray();
			if (0 === m.length) return {
				changes: n,
				mirrors: a,
				rejected: r,
				summary: s
			};
			const h = await t.diaryOccurrences.where("fileId").anyOf(p).toArray(), f = (e) => JSON.stringify([e.fileId, e.analysisDate]), y = /* @__PURE__ */ new Map();
			for (const c of h) {
				const e = f(c), t = y.get(e) ?? [];
				t.push(c), y.set(e, t);
			}
			const g = new Map(l.map((e) => [e.id, e])), w = /* @__PURE__ */ new Map();
			for (const _ of m) {
				const e = g.get(_.fileId), t = JSON.stringify([
					d(e),
					c(e),
					_.analysisDate
				]);
				w.set(t, [...w.get(t) ?? [], _]);
			}
			const v = (e, t) => Number(Ur(g.get(e.fileId))) - Number(Ur(g.get(t.fileId))) || e.fileId - t.fileId;
			for (const c of [...w.values()].map((e) => e.sort(v))) {
				const e = c.map((e) => {
					const t = y.get(f(e)) ?? [], n = new Set(t.map((e) => e.sourceKey).filter((e) => e?.trim())), a = e.mappedSourceValues?.find((t) => "filename" === t.targetKey && "present" === t.presence && t.sourceFieldName === e.importMappingProvenance?.effectiveMapping[t.targetKey])?.lexicalValue;
					return {
						entry: e,
						associated: t,
						sourceKeys: n,
						sourceKey: (e.sourceKey?.trim() ? e.sourceKey : void 0) ?? (1 === n.size ? [...n][0] : void 0) ?? a
					};
				}), l = e.find((e) => e.sourceKey?.trim());
				if (!l) {
					s.unrecoverable += e.length;
					continue;
				}
				const { entry: d } = l, p = l.sourceKey, m = zr(p, d.analysisDate, u, d.fileId);
				if (e.some((e) => Yr(m, e.entry.fileId))) {
					for (const n of m.status === b.MATCHED ? m.files : []) {
						const r = f({
							fileId: n.id,
							analysisDate: d.analysisDate
						});
						e.some((e) => e.entry.fileId === n.id) || i.has(r) || await t.diaryEntries.get({
							fileId: n.id,
							analysisDate: d.analysisDate
						}) || (i.add(r), a.push({
							entry: d,
							sourceKey: p,
							fileId: n.id
						}));
					}
					continue;
				}
				if (m.status === b.UNMATCHED) {
					s.unrecoverable += e.length;
					continue;
				}
				const h = (t) => {
					s.conflicted += e.length;
					for (const n of e) r.push({
						fileId: n.entry.fileId,
						sourceKey: p,
						analysisDate: d.analysisDate,
						reason: t
					});
				};
				if (new Set(e.map((e) => ri(e.entry))).size > 1) {
					h("twin_content_differs");
					continue;
				}
				const g = [...new Map([p, ...e.flatMap((e) => [...e.sourceKeys])].map((e) => [L(e), e])).values()];
				try {
					for (const t of e) for (const e of t.associated) {
						o(e, t.entry);
						const n = zr(e.sourceKey, d.analysisDate, u, t.entry.fileId);
						if (!e.sourceKey?.trim() || m.status === b.MATCHED && !Yr(n, m.file.id)) throw new Error("Diary occurrence destination identity conflicts.");
					}
				} catch {
					h("occurrence_destination_differs");
					continue;
				}
				const w = await t.stagedDiaryEntries.where("[normalizedSourceKey+analysisDate]").anyOf(g.map((e) => [L(e), d.analysisDate])).first(), v = m.status === b.MATCHED ? await t.diaryEntries.where("[fileId+analysisDate]").equals([m.file.id, d.analysisDate]).first() : void 0, _ = m.status === b.MATCHED ? [f({
					fileId: m.file.id,
					analysisDate: d.analysisDate
				})] : g.map((e) => Ba(L(e), d.analysisDate)), S = m.status === b.MATCHED ? await Xr(t, m.file, d.analysisDate, {
					existing: d,
					excludeRowIds: new Set(e.map((e) => e.entry.id))
				}) : null;
				if (w || v || S || _.some((e) => i.has(e))) {
					h(S ? "participant_night_held" : w ? "staged_evidence" : "destination_held");
					continue;
				}
				_.forEach((e) => i.add(e));
				const I = m.status === b.MATCHED ? m.file.id : null;
				n.push({
					entry: d,
					associated: l.associated,
					sourceKey: p,
					stagedKeys: g,
					destination: I
				});
				for (const t of e) t !== l && n.push({
					entry: t.entry,
					associated: t.associated,
					sourceKey: p,
					stagedKeys: [],
					destination: I,
					twin: !0
				});
				for (const n of m.status === b.MATCHED ? m.files.slice(1) : []) {
					const e = f({
						fileId: n.id,
						analysisDate: d.analysisDate
					});
					i.has(e) || await t.diaryEntries.get({
						fileId: n.id,
						analysisDate: d.analysisDate
					}) || (i.add(e), a.push({
						entry: d,
						sourceKey: p,
						fileId: n.id
					}));
				}
			}
			return {
				changes: n,
				mirrors: a,
				rejected: r,
				summary: s
			};
		}(e, t), i = n.summary, s = new Wa("move");
		for (const e of n.rejected) s.reject(e);
		return 0 === n.changes.length && 0 === n.mirrors.length ? {
			...i,
			receipt: s.build()
		} : Ze([...r, t.auditLog], async () => {
			for (const { entry: a, associated: r, sourceKey: o, stagedKeys: l, destination: c, twin: d } of n.changes) {
				const { id: e, fileId: n, targetChosenByUser: u, sourceKey: p, ...m } = a, h = c;
				if (d);
				else if (null === h) {
					for (const e of l) {
						const n = L(e), r = {
							...m,
							sourceKey: e,
							normalizedSourceKey: n,
							attachedFileId: null,
							attachedAt: null
						};
						await t.stagedDiaryEntries.add(r), s.row("stagedDiaryEntries", "added", {
							fileId: null,
							sourceKey: e,
							analysisDate: a.analysisDate
						}), await tt({
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
						sourceKey: o,
						fileId: h
					};
					await Kr(t, e, void 0), s.row("diaryEntries", "added", {
						fileId: h,
						sourceKey: o,
						analysisDate: a.analysisDate
					}), await tt({
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
					await t.diaryOccurrences.put(e), s.row("diaryOccurrences", "replaced", {
						fileId: h,
						sourceKey: a.sourceKey,
						analysisDate: a.analysisDate
					}), await tt({
						op: "diary_occurrence_put",
						...null === h ? {} : { fileId: h },
						payload: {
							disposition: null === h ? "staged_unbind" : "staged_attach",
							record: e
						}
					});
				}
				await qr(t, e, n), s.row("diaryEntries", "deleted", {
					fileId: n,
					sourceKey: o,
					analysisDate: a.analysisDate
				}), await tt({
					op: "diary_delete",
					fileId: n,
					payload: { analysisDate: a.analysisDate }
				});
			}
			for (const { entry: a, sourceKey: r, fileId: o } of n.mirrors) {
				const { id: e, fileId: n, targetChosenByUser: l, sourceKey: c, ...d } = a, u = {
					...d,
					sourceKey: r,
					fileId: o
				};
				await Kr(t, u, void 0), s.row("diaryEntries", "added", {
					fileId: o,
					sourceKey: r,
					analysisDate: a.analysisDate
				}), await tt({
					op: "diary_put",
					fileId: o,
					payload: {
						analysisDate: a.analysisDate,
						entry: u,
						replaced: !1
					}
				}), i.mirrored++;
			}
			const e = s.build();
			return await Xa(e, a), {
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
		receipt: new Wa("move").build()
	};
}
var si = e({
	FILE_INGEST_FILENAME_CONFLICT_MESSAGE: () => li,
	FILE_INGEST_IN_PROGRESS_MESSAGE: () => ci,
	FILE_INGEST_LEASE_MS: () => oi,
	FILE_INGEST_OWNERSHIP_LOST_MESSAGE: () => di,
	FileIngestFilenameConflictError: () => ui,
	FileIngestInProgressError: () => mi,
	FileIngestOwnershipLostError: () => hi,
	FileIngestRecordingRevisedError: () => pi,
	GgirImportRefusalsStorageError: () => ls,
	activityDaySaveFacts: () => qi,
	attachStagedDiaryEntry: () => ai,
	beginFileIngest: () => bi,
	bumpExportInputRevision: () => zi,
	bumpSeriesRevision: () => Bi,
	clearGgirImportRefusals: () => ds,
	countMarkersInRows: () => _i,
	deleteFileCaches: () => Ri,
	deleteFileCascadeInCurrentTransaction: () => ki,
	finalizeFileIngest: () => Mi,
	findFileByContentHash: () => xi,
	findFileByPrefixHash: () => Oi,
	getActivityDay: () => Wi,
	getActiwareFileData: () => Fi,
	getAllActivityDaysForFile: () => os,
	getAllAuditLogEntries: () => bs,
	getAllMarkersByAlgorithmForFile: () => is,
	getAllMarkersForFile: () => es,
	getAuditLogEntries: () => Ss,
	getAvailableDates: () => Yi,
	getConfirmedNonwearPeriodsForFile: () => as,
	getDailyGgirSummary: () => Ms,
	getDeviceOffNonwearPeriodsForFile: () => rs,
	getDirtyDiaryParticipants: () => Zr,
	getFileByFilename: () => Ni,
	getFileById: () => Ti,
	getFileMarkerRows: () => ns,
	getFileScorerVerdicts: () => Qi,
	getFilesByIds: () => Ci,
	getGgirImportRefusals: () => cs,
	getLocalFiles: () => Pi,
	getLocalStudySettings: () => ps,
	getMarkerProvenance: () => Zi,
	getSensorNonwearForFile: () => ys,
	getSensorNonwearInWindow: () => gs,
	getStagedDiaryEntries: () => ei,
	getWorkspaceScopedAuditEntries: () => ks,
	isWorkspaceScopedAuditEntryForView: () => Is,
	listDailyGgirSummaries: () => Ds,
	mergeFileCircadianSignalDates: () => Ui,
	mergeLocalStudySettingsExtraSettings: () => hs,
	mergeScoredVariantResults: () => Ji,
	nextNightDate: () => ji,
	nightHasActivity: () => Li,
	nonDiaryTable: () => gi,
	patchActivityDayNonwearMasks: () => Vi,
	preferredMarkerRecord: () => Xi,
	putDailyGgirSummary: () => Es,
	reconcileDiaryBindings: () => ii,
	recordAlgorithmRun: () => vs,
	recordAlgorithmRunsBatch: () => _s,
	recordGgirImportRefusals: () => us,
	renewFileIngestLease: () => Di,
	rollbackFileIngest: () => Ei,
	saveActivityDay: () => Ki,
	saveActivityDays: () => Gi,
	saveSensorNonwearByDate: () => fs,
	totalCascadeRows: () => Ii,
	withActivityDayMemo: () => ss
});
const oi = 12e4, li = "A completed import already uses this filename for different content. Rename the selected file and try again, or delete the completed import in Data Settings first.", ci = "This file is already being imported in another tab. Wait for that import to finish, then try again.", di = "This import no longer owns its incomplete local record. Retry the import.";
var ui = class extends Error {
	category = de;
	constructor() {
		super(li), this.name = "FileIngestFilenameConflictError";
	}
}, pi = class extends Error {
	category = de;
	constructor() {
		super(oe), this.name = "FileIngestRecordingRevisedError";
	}
}, mi = class extends Error {
	category = le;
	constructor() {
		super(ci), this.name = "FileIngestInProgressError";
	}
}, hi = class extends Error {
	category = le;
	constructor() {
		super(di), this.name = "FileIngestOwnershipLostError";
	}
};
const fi = Object.keys(Er), yi = /* @__PURE__ */ new Set([
	"diaryEntries",
	"diaryOccurrences",
	"stagedDiaryEntries"
]);
function gi(e, t) {
	if (yi.has(t)) throw new Error(`The diary store ${t} is written only by db/diary.`);
	return e[t];
}
const wi = fi.filter((e) => !yi.has(e));
function vi(e) {
	return [e.files, ...fi.map((t) => e[t])];
}
function _i(e) {
	return e.reduce((e, t) => e + (t.sleepMarkers?.length ?? 0) + (t.nonwearMarkers?.length ?? 0), 0);
}
async function Si(e, t, n = !1) {
	Oa(t, e);
	const a = await async function(e, t) {
		const n = new Wa("file_cascade"), a = await e.diaryEntries.where("fileId").equals(t).toArray(), r = await e.diaryOccurrences.where("fileId").equals(t).toArray(), i = await e.stagedDiaryEntries.where("attachedFileId").equals(t).toArray();
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
	}(e, t), r = await Promise.all(wi.filter((e) => !n || "walLog" !== e).map(async (n) => {
		const a = gi(e, n).where(Er[n]).equals(t);
		if ("walLog" === n) return [n, await a.filter((e) => "audit_append" !== e.op).delete()];
		if ("markers" !== n) return [n, await a.delete()];
		const r = _i(await e.markers.where("fileId").equals(t).toArray());
		return await a.delete(), [n, r];
	})), i = {
		...Object.fromEntries(r),
		...a.counts,
		files: 0
	};
	return i.ggirResultsBundles > 0 && await e.files.update(t, { ggirBundleRevision: crypto.randomUUID() }), i;
}
function Ii(e) {
	return Object.values(e).reduce((e, t) => e + t, 0);
}
async function ki(e, t) {
	return {
		...await Si(e, t),
		files: await e.files.where(":id").equals(t).delete()
	};
}
async function bi(e, t, n = ce(), a = Date.now()) {
	(function(e, t) {
		if (0 === e.length || 0 === t.length) throw new Error("Local ingest identity is invalid.");
	})(e.sourceContentHash, t), async function() {
		if (gr) {
			if (await vr()) return !0;
			gr = !1, wr = !1;
		}
		if (wr) return await vr();
		const e = navigator.storage;
		if (!e?.persist) return wr = !0, !1;
		try {
			const t = await e.persist();
			return wr = !0, gr = !!t, !!t;
		} catch {
			return !1;
		}
	}().catch(() => {});
	const r = n;
	return Ze([...vi(r), r.studySettings], async () => {
		const n = await r.files.where("sourceContentHash").equals(e.sourceContentHash).toArray(), i = n.find(D);
		if (null != i?.id) return await ds(i, r), {
			kind: "already_complete",
			record: i
		};
		const s = e.aw5RecordingKey ? await r.files.where("aw5RecordingKey").equals(e.aw5RecordingKey).toArray() : [];
		if (s.some(D)) throw new pi();
		const o = await r.files.where("filename").equals(e.filename).first();
		if (o && D(o)) throw new ui();
		const l = /* @__PURE__ */ new Map();
		for (const e of [
			...n,
			...s,
			...o ? [o] : []
		]) null != e.id && "incomplete" === e.ingestState && l.set(e.id, e);
		const c = [...l.values()].find((e) => e.ingestAttemptId === t);
		if (null != c?.id) return await r.files.update(c.id, { ingestLeaseExpiresAt: a + oi }), {
			kind: "started",
			guard: {
				fileId: c.id,
				attemptId: t
			},
			recovered: !1
		};
		if ([...l.values()].find((e) => (e.ingestLeaseExpiresAt ?? 0) > a)) throw new mi();
		for (const e of l.values()) null != e.id && (await tt({
			op: "file_delete",
			fileId: e.id,
			payload: { kind: "incomplete_ingest_recovery" }
		}), await ki(r, e.id));
		const d = await r.files.add({
			...e,
			ingestState: "incomplete",
			ingestAttemptId: t,
			ingestLeaseExpiresAt: a + oi
		});
		return await tt({
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
async function Di(e, t = ce(), n = Date.now()) {
	const a = t;
	await a.transaction("rw", a.files, async () => {
		const t = await a.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new hi();
		await a.files.update(e.fileId, { ingestLeaseExpiresAt: n + oi });
	});
}
async function Mi(e, t = ce(), n) {
	const a = t;
	return Ze([a.files, a.studySettings], async () => {
		const t = await a.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new hi();
		const r = e.fileId;
		return await a.files.where(":id").equals(r).modify((e) => {
			e.ingestState = "complete", delete e.ingestAttemptId, delete e.ingestLeaseExpiresAt;
		}), await tt({
			op: "file_put",
			fileId: r,
			payload: { kind: "incomplete_ingest_finalize" }
		}), await ds(t, a), await Le([r], a, n), r;
	}, a, n);
}
async function Ei(e, t = ce()) {
	const n = t;
	return Ze(vi(n), async () => {
		const t = await n.files.get(e.fileId);
		return t ? "incomplete" === t.ingestState && t.ingestAttemptId === e.attemptId && (await tt({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_rollback" }
		}), await ki(n, e.fileId), !0) : Ii(await Si(n, e.fileId)) > 0 && (await tt({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_orphan_cleanup" }
		}), !0);
	}, n);
}
async function Ai(e, t) {
	const n = [], a = await Dr(e.timestamps, null, t) ?? (e.timestamps.byteLength > 0 ? e.epochResolutions?.find((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId)?.epochLengthSeconds : null) ?? null;
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
		}, s = e.eventMarkers ? Array.from(new Uint8Array(e.eventMarkers), Boolean) : [], o = {};
		let l;
		const c = ca(e);
		for (const [e, n] of c.length > 0 ? c : [["", /* @__PURE__ */ new ArrayBuffer(0)]]) {
			const a = await t.aggregateEpochSeries({
				target_seconds: 60,
				series: i,
				event_markers: s,
				sleep_scores: Array.from(new Uint8Array(n))
			});
			l ??= a, e && (o[e] = a.sleep_scores);
		}
		if (l) {
			const t = (e) => l.series.channels.find((t) => t.name === e)?.counts ?? [];
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
						axisX: t("axis_x"),
						axisY: t("axis_y"),
						axisZ: t("axis_z"),
						vectorMagnitude: t("vector_magnitude"),
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
async function Pi(e = ce(), t) {
	let n = await (t?.participantKeys ? e.files.where(k).anyOf([...new Set(t.participantKeys.flatMap((e) => [L(e), ...i({ filename: e })]))]).distinct().filter((e) => "local" === e.source) : t?.onlyFileIds ? e.files.where(":id").anyOf([...t.onlyFileIds]).filter((e) => "local" === e.source) : e.files.where("source").equals("local")).toArray();
	if (t?.participantKeys) {
		const a = [...new Set(n.map(d).filter((e) => !t.participantKeys.includes(e)))];
		a.length && (n = [...n.filter((e) => !a.includes(d(e))), ...await e.files.where(P).anyOf(a).filter((e) => "local" === e.source).toArray()]);
	}
	return (!0 === t?.includeIncomplete ? n : n.filter(D)).map((e) => {
		const t = e.participantId ?? o(e.filename) ?? void 0;
		return {
			...e,
			availableDates: [...new Set(e.availableDates)],
			...void 0 === t ? {} : { participantId: t }
		};
	});
}
async function Ni(e, t = ce()) {
	return t.files.where("filename").equals(e).first();
}
async function xi(e, t = ce()) {
	if (e) return (await t.files.where("sourceContentHash").equals(e).toArray()).find(D);
}
async function Oi(e, t = ce(), n) {
	if (e) return (await t.files.where("fileHash").equals(e).toArray()).find((e) => D(e) && (void 0 === n || e.sourceContentHash === n));
}
async function Ti(e, t = ce()) {
	return t.files.get(e);
}
async function Fi(e, t = ce()) {
	return t.actiwareFileData.get(e);
}
async function Ci(e, t = ce()) {
	return t.files.bulkGet(e);
}
async function Ri(e) {
	const t = new Set(e.flatMap((e) => [e.sourceContentHash, e.fileHash]).filter((e) => "string" == typeof e && e.length > 0));
	(await Promise.allSettled([...t].flatMap((e) => [er(e), ur(e)]))).some((e) => "rejected" === e.status) && console.warn("[db] One or more local cache entries could not be deleted.");
}
async function Hi(e, t, n = j()) {
	const a = await n.shiftDate(e, t);
	if (void 0 === a) throw new RangeError(`Not a calendar date: ${e}`);
	return a;
}
async function Li(e, t, n, a = ce()) {
	return (await Promise.all([t, n].map((t) => a.activityDays.where("[fileId+date]").equals([e, t]).count()))).some((e) => e > 0);
}
async function ji(e, t = j()) {
	const n = Hi(e, 1, t);
	return a.currentTransaction ? a.waitFor(n) : n;
}
async function Ki(e, t = ce(), n) {
	const [a] = await Gi([e], t, void 0, n);
	return a;
}
async function qi(e, t = j()) {
	let n = e.epochResolutions;
	if (n) {
		if (void 0 !== e.algorithmResults && n.some((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId && 60 !== e.epochLengthSeconds && 60 % e.epochLengthSeconds == 0)) {
			const a = await Ai(e, t);
			n = [...n.filter((e) => !e.derivedData), ...a.filter((e) => e.derivedData)];
		}
	} else n = await Ai(e, t);
	return {
		epochResolutions: n,
		previousDate: await Hi(e.date, -1, t)
	};
}
async function Gi(e, t = ce(), n, a) {
	const r = t, i = new Set(e.map((e) => e.fileId));
	for (const d of i) Oa(d, r);
	const s = ge(a), o = n ?? await Promise.all(e.map((e) => qi(e, s))), l = await Promise.all(e.map(async (e, t) => {
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
			].every((t) => !e[t]?.byteLength || n.data[t].length === a) && ca(e).every(([e, t]) => {
				if (!t.byteLength) return !0;
				const r = ea([{ algorithmResults: n.algorithmResults }], { recordedCellId: e });
				return "ok" === r.status && r.outputs[0]?.length === a;
			}) && (!e.nonwearResults?.byteLength || n.nonwearResults?.length === a);
		}(e, r)) {
			const t = await Ai(e, s);
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
		await Bi(r, [...i]);
		const e = [];
		for (const { activityDay: t, previousDate: n } of l) await r.scoredVariantMasks.bulkDelete([[t.fileId, t.date], [t.fileId, n]]), await r.activityDays.where("[fileId+date]").equals([t.fileId, t.date]).delete(), e.push(await r.activityDays.add(t));
		return e;
	}, a);
	for (const d of i) Oa(d, r);
	return c;
}
async function Ui(e, t, n, a = ce(), r) {
	await we(a, [a.files], () => a.files.where(":id").equals(e).modify((e) => {
		const a = new Set(e.circadianSignalDates ?? []);
		for (const n of t) a.delete(n);
		for (const t of n) a.add(t);
		e.circadianSignalDates = [...a].sort();
	}), r);
}
async function Vi(e, t, n, a = ce(), r) {
	const i = a;
	await ve(i, [
		i.activityDays,
		i.physicalActivityFileSummaries,
		i.files
	], async () => {
		await i.activityDays.where("[fileId+date]").equals([e, t]).modify((e) => {
			Object.assign(e, n), delete e.displayNonwear;
		}), await i.physicalActivityFileSummaries.where("fileId").equals(e).delete(), await zi(i, [e]), await i.files.where(":id").equals(e).modify((e) => {
			e.nonwearBandGeneration = (e.nonwearBandGeneration ?? 0) + 1, e.navigationFacts && delete e.navigationFacts.bands;
		});
	}, r);
}
async function Bi(e, t) {
	await e.files.where(":id").anyOf(t).modify((e) => {
		e.seriesRevision = (e.seriesRevision ?? 0) + 1;
	});
}
async function zi(e, t) {
	await e.files.where(":id").anyOf(t).modify((e) => {
		e.exportInputRevision = (e.exportInputRevision ?? 0) + 1;
	});
}
async function Wi(e, t, n = ce(), a) {
	return a ? (await os(e, n, a)).get(t) : n.activityDays.where("[fileId+date]").equals([e, t]).first();
}
const $i = /* @__PURE__ */ new WeakMap();
function Qi(e, t = ce(), n) {
	const a = t;
	return (n ? Promise.resolve(n.file) : a.files.get(e)).then((t) => {
		const n = t?.seriesRevision ?? 0;
		let r = $i.get(a);
		r || $i.set(a, r = /* @__PURE__ */ new Map());
		const i = r.get(e);
		if (i?.revision === n) return i.verdicts;
		const s = [], o = _(a.activityDays.where("fileId").equals(e), (e) => {
			s.push(ta(e));
		}).then(() => oa(s)), l = {
			revision: n,
			verdicts: o
		};
		return r.set(e, l), o.catch(() => {
			r.get(e) === l && r.delete(e);
		}), o;
	});
}
async function Ji(e, t, n, a, r = ce(), i, s) {
	const o = r, l = await q(ji(t, i), s);
	return s?.throwIfAborted(), !!await Li(e, t, l, o) && we(o, [o.scoredVariantMasks], async () => {
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
async function Yi(e, t = ce()) {
	return (await t.activityDays.where("[fileId+date]").between([e, ""], [e, "￿"], !0, !0).keys()).map((e) => e[1]);
}
function Xi(e, t = !1) {
	const n = t ? e?.filter(h) : void 0;
	let a;
	for (const r of n?.length ? n : e ?? []) a = mr(a, r);
	return a;
}
async function Zi(e, t = ce()) {
	return t.markerProvenance.bulkGet([...e]);
}
async function es(e, t, n = ce(), a = !1) {
	return hr(await ts(e, t, n), t, a);
}
async function ts(e, t, n) {
	const r = n.markers.where("[fileId+date+username]"), i = await r.between([e, a.minKey], [e, a.maxKey]).uniqueKeys();
	return (await r.anyOf(i.filter((e) => e[2] === t)).toArray()).map(be);
}
async function ns(e, t = ce()) {
	return (await t.markers.where("fileId").equals(e).toArray()).map(be);
}
async function as(e, t = ce()) {
	return yr(await ns(e, t));
}
async function rs(e, t = ce(), n) {
	const [a, r] = await Promise.all([ys(e, t), n ? yr(n) : as(e, t)]);
	return [...a.map((e) => ({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	})), ...r];
}
async function is(e, t, n = ce()) {
	return function(e, t) {
		const n = /* @__PURE__ */ new Map();
		for (const a of e) {
			if (a.username !== t) continue;
			const e = n.get(a.date);
			e ? e.push(a) : n.set(a.date, [a]);
		}
		return n;
	}(await ts(e, t, n), t);
}
function ss(e) {
	return e({});
}
function os(e, t = ce(), n) {
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
var ls = class extends Error {
	category = te;
	constructor() {
		super("Stored GGIR import refusals could not be read; the existing records were kept."), this.name = "GgirImportRefusalsStorageError";
	}
};
function cs(e) {
	if (!e || "object" != typeof e || !("ggirImportRefusals" in e)) return [];
	const t = e[se];
	if (Array.isArray(t)) {
		const e = t.filter((e) => null != e && "object" == typeof e && "filename" in e && "string" == typeof e.filename && "reason" in e && "string" == typeof e.reason && "category" in e && ne.includes(e.category));
		if (e.length === t.length) return [...new Map(e.map((e) => {
			const t = "ggir-folder" === e.category ? {
				...e,
				filename: ee
			} : e;
			return [JSON.stringify([t.filename, t.category]), t];
		})).values()];
	}
	throw new ls();
}
function ds(e, t) {
	return us([], t, "string" == typeof e ? [e] : [e.filename, ...Be(e) ? [ee] : []]);
}
async function us(e, t = ce(), n) {
	(e.length || void 0 !== n) && await ms({
		sleepDetectionRule: F.sleep_detection_rule,
		nightStartHour: F.night_start_hour,
		nightEndHour: F.night_end_hour,
		defaultAlgorithm: F.default_algorithm,
		extraSettings: {}
	}, t, {
		coreSettings: "existing",
		extraSettings: "merge",
		refusals: e,
		...void 0 === n ? {} : { importedFilenames: n }
	});
}
async function ps(e = ce()) {
	return e.studySettings.where("key").equals("study").first();
}
async function ms(e, t, n) {
	await Ze([t.studySettings], async () => {
		const r = await t.studySettings.where("key").equals("study").first();
		if (void 0 !== n.importedFilenames && !cs(r).some((e) => n.importedFilenames?.includes(e.filename))) return;
		const i = "existing" === n.coreSettings && r ? {
			sleepDetectionRule: r.sleepDetectionRule,
			nightStartHour: r.nightStartHour,
			nightEndHour: r.nightEndHour,
			defaultAlgorithm: r.defaultAlgorithm,
			...void 0 === r.sleepPeriodDetection ? {} : { sleepPeriodDetection: r.sleepPeriodDetection }
		} : e, { [O]: s, ...o } = r?.extraSettings ?? {}, l = {
			...i,
			sleepDetectionRule: (c = i.sleepDetectionRule, Object.values(N).includes(c) ? c : F.sleep_detection_rule),
			extraSettings: "merge" === n.extraSettings ? {
				...o,
				...e.extraSettings
			} : e.extraSettings
		};
		var c;
		const d = await a.waitFor(me(JSON.stringify(l))), u = {
			key: "study",
			...l,
			...n.refusals ? { [se]: cs({ [se]: [...cs(r), ...n.refusals] }).filter((e) => !n.importedFilenames?.includes(e.filename)) } : {},
			contentHash: d,
			lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		await tt({
			op: "settings_put",
			payload: {
				settings: l,
				contentHash: d,
				prevContentHash: r?.contentHash,
				...n.refusals ? { [se]: cs(u) } : {},
				lastModifiedAt: u.lastModifiedAt
			}
		}), await async function(e, t, n) {
			t?.id ? await e.studySettings.update(t.id, n) : await e.studySettings.add(n);
		}(t, r, u);
	}, t);
}
async function hs(e, t = ce()) {
	await ms(e, t, {
		coreSettings: "existing",
		extraSettings: "merge"
	});
}
async function fs(e, t, n = ce(), a) {
	if (!t.size) return;
	const r = [...t];
	await Ze([n.sensorNonwear], async () => {
		await et(r.map(([t, n]) => ({
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
async function ys(e, t = ce()) {
	return t.sensorNonwear.where("fileId").equals(e).toArray();
}
async function gs(e, t, n, a = ce()) {
	return (await ys(e, a)).filter((e) => e.startTimestamp <= n && e.endTimestamp >= t).sort((e, t) => e.startTimestamp - t.startTimestamp);
}
function ws(e) {
	const t = {
		fileId: e.fileId,
		date: e.date,
		appVersion: e.appVersion,
		results: e.results,
		...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {}
	}, n = Yn(e);
	if (null !== n) return {
		...t,
		...n
	};
	throw new Error(`Refused an algorithm run for ${String(e.algoKey ?? e.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
}
async function vs(e, t = ce(), n) {
	return await async function(e, t, n) {
		const r = t, i = await a.waitFor(he(e.results));
		return Ze([r.algorithmRuns], async () => {
			const t = await r.algorithmRuns.where("[fileId+date+algoKey+algoVersion+paramsHash]").equals([
				e.fileId,
				e.date,
				e.algoKey,
				e.algoVersion,
				e.paramsHash
			]).first();
			if (t?.id) return await tt({
				op: "algorithm_run_put",
				fileId: e.fileId,
				payload: {
					kind: "dedup_hit",
					existingId: t.id,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					contentHash: i
				}
			}), {
				id: t.id,
				inserted: !1,
				contentHash: i
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
				contentHash: i,
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			}, a = await r.algorithmRuns.add(n);
			return await tt({
				op: "algorithm_run_put",
				fileId: e.fileId,
				payload: {
					kind: "insert",
					id: a,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					appVersion: e.appVersion,
					contentHash: i,
					byteLength: e.results.byteLength
				}
			}), {
				id: a,
				inserted: !0,
				contentHash: i
			};
		}, r, n);
	}(ws(e), t, n);
}
async function _s(e, t, n) {
	return await async function(e, t, n) {
		if (0 === e.length) return [];
		const r = t ?? ce(), i = Promise.all(e.map((e) => he(e.results))), s = await (a.currentTransaction ? a.waitFor(i) : i);
		return Ze([r.algorithmRuns], async () => {
			const t = (e) => [
				e.fileId,
				e.date,
				e.algoKey,
				e.algoVersion,
				e.paramsHash
			], n = /* @__PURE__ */ new Map(), a = await r.algorithmRuns.where("[fileId+date+algoKey+algoVersion+paramsHash]").anyOf(e.map(t)).toArray();
			for (const e of a) {
				const a = JSON.stringify(t(e));
				null == e.id || n.has(a) || n.set(a, e.id);
			}
			const i = /* @__PURE__ */ new Map(), o = e.map((e, a) => {
				const r = JSON.stringify(t(e)), s = n.get(r);
				if (void 0 !== s) return { existingId: s };
				const o = i.get(r);
				return void 0 !== o ? { sameAs: o } : (i.set(r, a), { insert: !0 });
			}), l = (/* @__PURE__ */ new Date()).toISOString(), c = e.flatMap((e, t) => "insert" in o[t] ? [{
				fileId: e.fileId,
				date: e.date,
				algoKey: e.algoKey,
				algoVersion: e.algoVersion,
				paramsHash: e.paramsHash,
				appVersion: e.appVersion,
				...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {},
				results: e.results,
				contentHash: s[t],
				createdAt: e.createdAt ?? l
			}] : []), d = await r.algorithmRuns.bulkAdd(c, { allKeys: !0 }), u = /* @__PURE__ */ new Map();
			let p = 0;
			o.forEach((e, t) => {
				"insert" in e && u.set(t, d[p++]);
			});
			const m = o.map((e, t) => "insert" in e ? {
				id: u.get(t),
				inserted: !0,
				contentHash: s[t]
			} : {
				id: "existingId" in e ? e.existingId : u.get(e.sameAs),
				inserted: !1,
				contentHash: s[t]
			});
			return await et(e.map((e, t) => ({
				op: "algorithm_run_put",
				fileId: e.fileId,
				payload: m[t].inserted ? {
					kind: "insert",
					id: m[t].id,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					appVersion: e.appVersion,
					contentHash: s[t],
					byteLength: e.results.byteLength
				} : {
					kind: "dedup_hit",
					existingId: m[t].id,
					algoKey: e.algoKey,
					algoVersion: e.algoVersion,
					paramsHash: e.paramsHash,
					contentHash: s[t]
				}
			}))), m;
		}, r, n);
	}(e.map(ws), t, n);
}
async function Ss(e, t, n, a = ce()) {
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
function Is(e, t, n) {
	return 0 === e.fileId && e.payload?.openFileId === t && e.payload?.openAnalysisDate === n;
}
async function ks(e, t, n = ce()) {
	return (await n.auditLog.where("[fileId+analysisDate+username]").between([
		0,
		"",
		""
	], [
		0,
		"￿",
		"￿"
	], !0, !0).toArray()).filter((n) => Is(n, e, t)).sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
}
async function bs() {
	return ce().auditLog.orderBy("id").toArray();
}
async function Ds(e, t = ce()) {
	return t.dailyGgirSummaries.where("[fileId+analysisDate]").between([e, ""], [e, "￿"]).toArray();
}
async function Ms(e, t) {
	const n = await ce().dailyGgirSummaries.where("[fileId+analysisDate]").equals([e, t]).first();
	return n ? [n] : [];
}
async function Es(e, t = ce(), n) {
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
		await n.bulkPut(r), await zi(e, [...new Set(t.map((e) => e.fileId))]);
	}(a, i), n);
}
function As(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
const Ps = {
	ggirHasptVariant: g.ggir_haspt_variant,
	ggirHasibVariantsEnabled: g.ggir_hasib_variants_enabled,
	ggirHasibVariants: [...g.ggir_hasib_variants],
	ggirHasibCountSource: g.ggir_hasib_count_source,
	ggirHasibCountEpochSeconds: g.ggir_hasib_count_epoch_seconds
}, Ns = new Set(S), xs = new Set(I), Os = new Set(M);
function Ts(e) {
	const t = e ?? {}, n = t.ggir_haspt_variant, a = t.ggir_hasib_variants_enabled, r = t.ggir_hasib_variants, i = t.ggir_hasib_count_source, s = t.ggir_hasib_count_epoch_seconds, o = Array.isArray(r) ? Array.from(new Set(r.filter((e) => "string" == typeof e && xs.has(e)))) : [...Ps.ggirHasibVariants];
	return {
		ggirHasptVariant: "string" == typeof n && Ns.has(n) ? n : Ps.ggirHasptVariant,
		ggirHasibVariantsEnabled: "boolean" == typeof a ? a : Ps.ggirHasibVariantsEnabled,
		ggirHasibVariants: o,
		ggirHasibCountSource: "string" == typeof i && Os.has(i) ? i : Ps.ggirHasibCountSource,
		ggirHasibCountEpochSeconds: "number" == typeof s && Number.isInteger(s) && s >= 1 ? s : Ps.ggirHasibCountEpochSeconds
	};
}
function Fs(e) {
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
const Cs = p.wear_minutes_per_day, Rs = p.valid_days_per_participant;
function Hs(e) {
	return "include" === e || "exclude" === e ? e : st.partialDayPolicy;
}
function Ls(e) {
	const t = "object" == typeof e && null !== e ? e : {}, a = t.minWearMinutesPerDay ?? t.min_wear_minutes_per_day, r = t.minValidDaysPerParticipant ?? t.min_valid_days_per_participant, i = t.requireWeekendDay ?? t.require_weekend_day, s = t.partialDayPolicy ?? t.partial_day_policy;
	return {
		minWearMinutesPerDay: n("wear_minutes_per_day", a) ?? st.minWearMinutesPerDay,
		minValidDaysPerParticipant: n("valid_days_per_participant", r) ?? st.minValidDaysPerParticipant,
		requireWeekendDay: "boolean" == typeof i ? i : st.requireWeekendDay,
		partialDayPolicy: Hs(s)
	};
}
Cs.maximum, Rs.maximum;
var js = e({
	NOTES_AUDIT_DEBOUNCE_MS: () => Qs,
	fileSwitchSettled: () => co,
	flushNotesAudit: () => Zs,
	flushSaveWithTimeout: () => ro,
	markerActionsWaiting: () => vo,
	markerCommitsSettled: () => _o,
	nightForNonwearApply: () => po,
	nightSessionStore: () => Yo,
	nightStateAfter: () => qs,
	persistedStoreSlice: () => uo,
	recordShownNightEditsForTest: () => Bs,
	rehydratePersistedStore: () => Wo,
	reviveOpenCutpointBands: () => Vo,
	takeShownNightEdits: () => Vs,
	useColorTheme: () => Jo,
	useDates: () => $o,
	useMarkers: () => Qo,
	useSleepScoringStore: () => Uo,
	withoutSessionIdentity: () => zo
});
const Ks = g.physical_activity_enabled_classes;
function qs() {
	const e = jo?.state ?? Uo.getState();
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
function Gs(e, t, n) {
	const a = Uo.getState().lastSavedAt, r = n?.night ?? jo ?? void 0, i = n?.after ?? r?.state ?? qs(), s = {
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
	if (!Ye(e)) return void Xe.recordAppEvent(e, l);
	const c = Uo.getState(), d = r?.fileId ?? c.currentFileId, u = r?.analysisDate ?? c.availableDates[c.currentDateIndex];
	if (null == d || !u) return;
	const p = {
		store: void 0 !== r?.store ? r.store : ie() ? ce().name : null,
		actor: r?.actor ?? (c.username || "anonymous"),
		fileId: d,
		date: u,
		action: e,
		payload: l,
		binding: r?.binding ?? null
	};
	r?.state ? (r.edits ??= []).push(p) : Us.push({
		identity: He(c),
		edit: p
	});
}
let Us = [];
function Vs(e, t) {
	const n = (n) => {
		return (a = n.edit).actor === e.actor && a.fileId === e.fileId && a.date === e.date && (null === e.store || null === a.store || a.store === e.store) && (!t || Re(n.identity, t));
		var a;
	}, a = Us.filter(n);
	return a.length > 0 && (Us = Us.filter((e) => !n(e))), a.map((e) => e.edit);
}
function Bs() {
	const e = Us;
	Us = [];
	for (const { edit: t } of e) Ae(t);
}
const zs = "This view is read-only. Its markers cannot be edited.", Ws = "Offset must be after onset";
function $s(e, t, n) {
	Gs("transition_flagged", {
		intent: e,
		guard: t,
		disposition: "refused_by_store"
	}, n ? { night: n } : void 0);
}
const Qs = 1500;
let Js = null, Ys = null;
function Xs(e, t = Ys?.value ?? "", n) {
	if (!n && t !== e && Ys?.identity && !Re(Ys.identity, He(Uo.getState()))) throw new Error("The notes audit has lost its owning night.");
	n || (Ys = null), t !== e && Gs("notes_changed", {
		before: t,
		after: e,
		beforeLength: t.length,
		afterLength: e.length
	}, n ? { night: n } : void 0);
}
function Zs(e) {
	null !== Js && (clearTimeout(Js), Js = null, Xs(e));
}
function eo(e, t) {
	return !(e.length > 0) && t;
}
function to(e) {
	return e instanceof Error ? e.message : "Unknown error";
}
function no(e) {
	return import("./workspace-switch-BFtIGTUd.js").then((e) => e.t).then(({ runWorkspaceScopeChange: t }) => t(e));
}
async function ao() {
	return (await import("./night-session-H5PR5Feu.js").then((e) => e.t)).flushCurrentNight();
}
async function ro(e) {
	let t;
	try {
		return await Promise.race([e(), new Promise((e) => {
			t = setTimeout(() => e(!1), 1e4);
		})]);
	} finally {
		void 0 !== t && clearTimeout(t);
	}
}
let io = !1, so = !1, oo = null, lo = Promise.resolve();
async function co() {
	for (;;) {
		const e = lo;
		if (await e, e === lo) return;
	}
}
function uo(e) {
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
function po(e, t) {
	const n = e.availableDates[e.currentDateIndex] ?? "";
	return {
		sleepMarkers: Ne(e.proposalNight, e.currentFileId ?? -1, n, { sleepMarkers: e.sleepMarkers }).sleepMarkers,
		nonwearMarkers: t,
		isInvalidNight: e.isInvalidNight,
		explicitNoNonwear: eo(t, e.explicitNoNonwear)
	};
}
function mo(e) {
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
function ho(e, t, n) {
	return t.map((t) => {
		const a = t.sourceRecordReference;
		if (void 0 === a || a === n) return t;
		const r = e.find((e) => e.sourceRecordReference === a);
		if (r && r.onsetTimestamp === t.onsetTimestamp && r.offsetTimestamp === t.offsetTimestamp && r.markerType === t.markerType) return t;
		const i = { ...t };
		return delete i.sourceRecordReference, i;
	});
}
function fo(e) {
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
function yo(e, t) {
	const { patch: n } = t, { isInvalidNightImplicit: a, ...r } = e, i = n.isInvalidNight ?? (!n.sleepMarkers?.some(Ve) && e.isInvalidNight), s = i && (void 0 === n.isInvalidNight ? !0 === e.isInvalidNightImplicit : !0 === n.isInvalidNightImplicit);
	return {
		...r,
		sleepMarkers: ho(t.since ?? e.sleepMarkers, n.sleepMarkers ?? e.sleepMarkers, t.placesReference),
		nonwearMarkers: n.nonwearMarkers ?? e.nonwearMarkers,
		isInvalidNight: i,
		...s ? { isInvalidNightImplicit: !0 } : {},
		explicitNoNonwear: n.explicitNoNonwear ?? e.explicitNoNonwear
	};
}
function go(e, t, n, a) {
	const r = (e) => `${null == e.onsetTimestamp ? "--:--" : Te(e.onsetTimestamp)}–${null == e.offsetTimestamp ? "--:--" : Te(e.offsetTimestamp)}`, i = t.removed.map((t) => {
		const n = e.sleepMarkers[t];
		return Ve(n) ? `main sleep ${r(n)} removed` : `nap ${r(n)} removed`;
	});
	return t.invalidates && !t.removed.some((t) => Ve(e.sleepMarkers[t])) && i.unshift("GGIR main sleep removed"), `Manual nonwear lies inside a sleep period: ${i.join(", ")}${t.invalidates ? `; ${n || "this night"} is now an Invalid night` : ""}.${a ? "" : " Undo restores it."}`;
}
function wo(e, t, n, a) {
	n.isInvalidNight && !t.isInvalidNight && void 0 === e.patch.isInvalidNight && Gs("invalid_night_toggled", {
		value: !1,
		clearedSleepMarkers: []
	}, { after: t }), e.record?.(t, n), !n.isInvalidNight && t.isInvalidNight && !0 !== e.patch.isInvalidNight && Gs("invalid_night_toggled", {
		value: !0,
		clearedSleepMarkers: [],
		implicit: !0 === t.isInvalidNightImplicit
	}, { after: t }), (a.removed.length > 0 || a.invalidates) && function(e, t) {
		for (const n of [...t.removed].reverse()) Gs("marker_deleted", {
			category: "sleep",
			periodIndex: n,
			before: e.sleepMarkers[n]
		});
		if (t.invalidates) {
			const n = new Set(t.removed), a = new Set(t.kept);
			Gs("invalid_night_toggled", {
				value: !0,
				clearedSleepMarkers: e.sleepMarkers.filter((e, t) => !n.has(t) && !a.has(t))
			});
		}
	}(t, a);
}
function vo() {
	return Pe.waiting();
}
function _o() {
	return Pe.settled();
}
function So(e, t, n = !1) {
	const a = Pe.executor(t.session);
	return a ? Promise.resolve(a(e)) : Pe.enqueue(t.session, (n) => (t.session = n, e()), n, Yo);
}
function Io(e, t, n) {
	const a = ("sleep" === t ? e.sleepMarkers : e.nonwearMarkers)[n];
	return a ? Ce(a) : null;
}
function ko(e, t, n) {
	return null === n ? -1 : ("sleep" === t ? e.sleepMarkers : e.nonwearMarkers).findIndex((e) => Ce(e) === n);
}
function bo(e) {
	return {
		fileId: e.fileId,
		analysisDate: e.date,
		binding: null,
		actor: e.identity.scope.actor,
		store: e.identity.db?.name ?? null,
		state: {
			...Pe.night(e),
			saved: null
		}
	};
}
function Do(e) {
	return {
		session: e,
		context: e.context
	};
}
function Mo(e) {
	return null !== e.session && Pe.holds(e.session, Uo.getState());
}
function Eo(e) {
	return !!Uo.getState().nightLoading && (Fn("info", "Marker edit refused: the night is still loading", { action: e }), !0);
}
function Ao(e, t, n, { night: a, preview: r = !1 }) {
	if (Eo("marker_action") && !a.session) return Promise.resolve();
	const i = () => {
		const i = Mo(a) ? e() : {
			...Pe.context(a.session),
			...Pe.night(a.session)
		};
		let s = i, o = {};
		const l = {
			fileId: a.session.fileId,
			analysisDate: a.session.date,
			binding: null,
			actor: a.session.identity.scope.actor,
			store: a.session.identity.db?.name ?? null,
			state: {
				...fo(s),
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
				...fo(s),
				saved: null
			};
		};
		jo = l;
		try {
			n(() => s, c);
		} finally {
			jo = null;
		}
		const d = () => {
			for (const t of l.edits ?? []) jo?.state ? (jo.edits ??= []).push(t) : Us.push({
				identity: He(e()),
				edit: t
			});
		};
		if (!r && ("sleepMarkers" in o || "isInvalidNight" in o)) return qo(e, t, {
			night: a,
			editsDisplayedSleep: !0,
			propose: () => ({
				patch: o,
				snapshot: !1,
				dirty: !1,
				record: d
			})
		}).then(() => {});
		Mo(a) ? (t(o), d()) : (Pe.updateContext(a.session, s), s._editGeneration !== i._editGeneration && Pe.write(a.session, fo(s), l.edits ?? [], s));
	}, s = Pe.executor(a.session);
	return Promise.resolve(s ? s(i) : So(i, a, r));
}
function Po(e, t) {
	Fn("warn", "Marker action dropped: its marker is gone", {
		category: e,
		targeted: null !== t
	});
}
let No = null;
const xo = /* @__PURE__ */ new WeakMap(), Oo = "Under the Actiware paradigm a sleep period is derived from its rest interval. Move, add or delete the rest interval instead.";
function To(e) {
	return nt(it(e.context), e.context.analysisParadigm);
}
function Fo(e, t) {
	const n = {
		placementRejected: !0,
		placementRejectionReason: t
	};
	Pe.holds(e, Uo.getState()) ? Uo.setState(n) : Pe.updateContext(e, {
		...Pe.context(e),
		...n
	});
}
async function Co(e, t) {
	const n = await Ke(e);
	return !n || (Fo(t, n), (Ge("sleep", e.sleepMarkers.length) ?? Ge("nonwear", e.nonwearMarkers.length)) && $s("marker_placed", "marker_limit_exceeded", bo(t)), !1);
}
async function Ro(e, t, n) {
	const a = t.identity.db;
	if (!a || !Be(n) || e.isInvalidNight || e.sleepMarkers.some(Ve)) return e.sleepMarkers;
	const r = await a.ggirResultsBundles.get(t.fileId);
	if (!r) throw new Error("The imported GGIR night could not be read. No changes were saved.");
	const { ggirNightRecords: i } = await import("./local-export-worker-Bu-eRJR3.js").then((e) => e.a), s = (await i(t.fileId, r.imported, /* @__PURE__ */ new Map(), n?.ggirClockSteps)).get(t.date)?.[0]?.sleepMarkers.find(Ve);
	return s ? [...e.sleepMarkers, {
		...s,
		markerIndex: e.sleepMarkers.length + 1
	}] : e.sleepMarkers;
}
async function Ho(e, t, n, a) {
	try {
		const r = n.identity.db ? await (await Promise.resolve().then(() => si)).getFileById(n.fileId, n.identity.db) : void 0;
		if (t.isInvalidNight && !0 === t.isInvalidNightImplicit && t.sleepMarkers.some(Ve) && (t.isInvalidNight = !1, t.isInvalidNightImplicit = !1), t.isInvalidNight || Oe(a.patch.proposalNight ?? null, n.fileId, n.date, t) || !$e(r, { sleepMarkers: a.since ?? e.sleepMarkers }, t) || (t.isInvalidNight = !0, t.isInvalidNightImplicit = !0), !await Co(t, n)) return null;
		const i = {
			...t,
			sleepMarkers: await Ro(t, n, r)
		};
		if (i.sleepMarkers !== t.sleepMarkers && !await Co(i, n)) return null;
		const [s] = await Ie([i], j());
		if (!s) throw new Error("The core returned no verdict for the marker edit.");
		return {
			...s,
			kept: s.kept.filter((e) => e < t.sleepMarkers.length),
			removed: s.removed.filter((e) => e < t.sleepMarkers.length)
		};
	} catch (r) {
		return Pe.fail(n, r), Fo(n, r instanceof Error ? r.message : String(r)), Fn("warn", "Marker edit refused: actours did not answer the manual-nonwear night rule", Cn(r)), null;
	}
}
function Lo(e, t) {
	const { isInvalidNightImplicit: n, ...a } = e;
	return {
		...a,
		sleepMarkers: ke(e.sleepMarkers, t),
		isInvalidNight: e.isInvalidNight || t.invalidates,
		...!0 !== n || t.invalidates ? {} : { isInvalidNightImplicit: n }
	};
}
let jo = null;
function Ko(e, { proposal: t, edited: n, baseNight: a, settle: r }) {
	const i = Pe.context(e), s = Fe(i, Lo(n, r)), o = {
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
	jo = o;
	try {
		wo(t, n, a, r);
	} finally {
		jo = null;
	}
	const l = {
		...i,
		...!1 === t.snapshot ? {} : mo(i),
		...t.patch,
		...s,
		placementRejected: !1,
		placementRejectionReason: null,
		isDirty: !0,
		_editGeneration: i._editGeneration + 1
	};
	return Pe.write(e, s, o.edits ?? [], l), !0;
}
async function qo(e, t, { propose: n, editsDisplayedSleep: a, night: r }) {
	if (!Mo(r)) {
		const e = r.session ? Pe.night(r.session) : null;
		if (!r.session || !e) return Fn("warn", "Marker edit refused: its night has no session to write it", {}), !1;
		const t = {
			...Pe.context(r.session),
			...e,
			isInvalidNightImplicit: !0 === e.isInvalidNightImplicit
		}, i = a ? t : Ne(t.proposalNight, r.session.fileId, r.session.date, t), s = n(i, !0);
		if (!s) return !1;
		const o = fo(i), l = yo(o, s), c = await Ho(o, l, r.session, s);
		return !!c && Ko(r.session, {
			proposal: s,
			edited: l,
			baseNight: o,
			settle: c
		});
	}
	const i = e(), s = i.availableDates[i.currentDateIndex] ?? "", o = null != i.currentFileId && T(i.proposalNight, i.currentFileId, s, i.sleepMarkers), l = a ? i : Ne(i.proposalNight, i.currentFileId ?? -1, s, i), c = n(l, !1);
	if (!c) return !1;
	const d = fo(l), u = yo(d, c), p = await Ho(d, u, r.session, c);
	if (!p) return !1;
	if (!Mo(r)) return r.session ? Ko(r.session, {
		proposal: c,
		edited: u,
		baseNight: d,
		settle: p
	}) : (Fn("warn", "Marker edit refused: its night has no session to write it", {}), !1);
	const m = e(), h = p.removed.length > 0 || p.invalidates, f = c.patch.markerMode ?? m.markerMode, y = Lo(u, p);
	return t({
		...null !== m.proposalNight && (o || "proposalNight" in c.patch && null === c.patch.proposalNight) ? {
			proposalNight: null,
			acceptingProposal: m.proposalNight
		} : {},
		...!1 === c.snapshot ? {} : mo(Ne(m.proposalNight, m.currentFileId ?? -1, s, m)),
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
				text: go(u, p, s, !1)
			}
		} : {}
	}), wo(c, u, d, p), !0;
}
function Go(e, t, n, { editsDisplayedSleep: a = !1, night: r }) {
	const i = r;
	return So(() => qo(e, t, {
		propose: n,
		editsDisplayedSleep: a,
		night: i
	}), i);
}
const Uo = X()(G(J((e, t, n) => {
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
		sitePassword: null,
		username: "anonymous",
		isAuthenticated: !1,
		isAdmin: !1,
		scopeExitBlocked: !1,
		setScopeExitBlocked: (e) => jn(() => a({ scopeExitBlocked: e })),
		currentFileId: null,
		currentFilename: null,
		currentDateIndex: 0,
		availableDates: [],
		availableFiles: [],
		currentFileSource: "server",
		currentFileSourceType: null,
		_dataRange: null,
		_viewWindow: null,
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
		pendingRestSelection: !1,
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
		showStoredNight: (e, n, r, i) => {
			const s = i?.view;
			if (!Pe.owns(e, Uo.getState())) return !1;
			const o = t();
			if (!Re(e.identity, {
				...e.identity,
				fileId: n,
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
			return a({
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
		preferredDisplayColumn: F.preferred_display_column,
		displayColumnChosenByUser: !1,
		viewModeHours: F.view_mode_hours,
		currentAlgorithm: F.default_algorithm,
		showAdjacentMarkers: !0,
		showNonwearOverlays: !0,
		showChoiNonwear: g.show_choi_nonwear,
		showLight: !1,
		showEventMarkers: !0,
		showAutoScoreProposal: !0,
		showDiaryOverlay: !1,
		autoScoreOnNavigate: !1,
		autoNonwearOnNavigate: !1,
		periodGuider: F.period_guider,
		sleepPeriodDetection: We,
		hideFilenames: !1,
		diaryDayBoundaryHour: F.diary_day_boundary_hour,
		diaryMainSleepDateRule: F.diary_main_sleep_date_rule,
		diaryNapDateRule: F.diary_nap_date_rule,
		diaryNonwearDateRule: F.diary_nonwear_date_rule,
		diaryDstFoldPolicy: F.diary_dst_fold_policy,
		diaryDstGapPolicy: F.diary_dst_gap_policy,
		sleepDetectionRule: F.sleep_detection_rule,
		placementRuleset: F.placement_ruleset,
		scorerPostprocessingPreset: y.NONE,
		extractionPath: re.number_60s_epochs,
		nonwearDetectorsCounts: [...F.nonwear_detectors_counts],
		nonwearDetectorsGgir: [...F.nonwear_detectors_ggir],
		appliedStudySettingsAuthorityKey: null,
		appliedUserPreferencesKey: null,
		analysisParadigm: rt(g.analysis_paradigm),
		actiwareAnalysis: g.actiware_analysis,
		actiwareRestProposal: lt(g.actiware_rest_proposal),
		studyDeclaredFields: [],
		nightStartHour: F.night_start_hour,
		nightEndHour: F.night_end_hour,
		validDayCriteria: st,
		physicalActivityMethod: g.physical_activity_method,
		physicalActivityCutpointOverrides: g.physical_activity_cutpoints,
		participantPopulation: g.participant_population,
		participantLaterality: g.participant_laterality,
		physicalActivityNonwearAsClass: g.physical_activity_nonwear_class,
		physicalActivityEnabledClasses: [...g.physical_activity_enabled_classes],
		physicalActivityMaskPolicy: g.physical_activity_mask_policy,
		selectedStudyId: null,
		devicePreset: w,
		epochLengthSeconds: F.epoch_length_seconds,
		skipRows: F.skip_rows,
		columnMapping: {
			date_column: "",
			time_column: "",
			datetime_column: "",
			activity_column: "",
			axis_x_column: "",
			axis_z_column: "",
			vector_magnitude_column: ""
		},
		preferredActivityColumn: F.preferred_display_column,
		choiAxis: F.choi_axis,
		choiVariant: m.BOTH,
		sensorLocation: g.sensor_location,
		...Ps,
		ggirConfig: Mt,
		uploadProgress: null,
		uploadResult: null,
		isUploading: !1,
		localProcessingError: null,
		localBatchSummary: null,
		setAuth: (e, n, r) => no(() => {
			a({
				sitePassword: e,
				username: n,
				isAuthenticated: !0,
				isAdmin: r ?? !1
			});
			const i = function(e) {
				try {
					const t = localStorage.getItem(En(e));
					if (!t) return null;
					const n = JSON.parse(t), a = {};
					for (const e of Mn) e in n && (a[e] = n[e]);
					return Object.keys(a).length > 0 ? a : null;
				} catch {
					return null;
				}
			}(n);
			if (i) {
				const { cursor: e, settings: r } = function(e) {
					const t = new Set(f), n = {}, a = {};
					for (const [r, i] of Object.entries(e)) t.has(r) ? a[r] = i : n[r] = i;
					return {
						cursor: n,
						settings: a
					};
				}(i), s = function(e) {
					return `${Z() ?? "legacy"}:${e}`;
				}(n), o = t().appliedUserPreferencesKey === s;
				a({
					...e,
					...o ? {} : r,
					appliedUserPreferencesKey: s
				});
			}
			const s = t();
			Xe.setContext(s.currentFileId, s.availableDates[s.currentDateIndex] ?? null, n, s.selectedStudyId);
		}),
		setIsAdmin: (e) => a({ isAdmin: e }),
		clearAuth: () => no(() => {
			const e = t();
			(function(e, t) {
				try {
					const n = {};
					for (const e of Mn) e in t && (n[e] = t[e]);
					localStorage.setItem(En(e), JSON.stringify(n));
				} catch {}
			})(e.username, e), Dn.clear(), a({
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
			}), Xe.setContext(null, null, "anonymous", t().selectedStudyId);
		}),
		setDataRange: (e, n = null) => {
			const r = (e, t) => null === e && null === t || null !== e && null !== t && e.min === t.min && e.max === t.max, { _dataRange: i, _viewWindow: s } = t();
			r(i, e) && r(s, n) || a({
				_dataRange: e,
				_viewWindow: n
			});
		},
		setCurrentFile: (e, n, r, i) => {
			if (so) return void (oo = [
				e,
				n,
				r,
				i
			]);
			if (t().isDirty) return so = !0, void (lo = (async () => {
				try {
					if (t().isDirty && !await (t()._flushSave ?? ao)()) return;
					so = !1, t().setCurrentFile(e, n, r, i);
				} catch (s) {
					a({ saveError: `File switch save failed: ${to(s)}` }), Fn("warn", "File switch save failed", Cn(s));
				} finally {
					so = !1;
					const e = oo;
					oo = null, e && t().setCurrentFile(...e);
				}
			})());
			const { currentFileId: s } = t(), o = s === e;
			Xe.setContext(e, o ? t().availableDates[t().currentDateIndex] ?? null : null, t().username, t().selectedStudyId), a({
				currentFileId: e,
				currentFilename: n,
				currentFileSource: r,
				...void 0 !== i ? { currentFileSourceType: i } : {},
				currentDateIndex: o ? t().currentDateIndex : 0,
				creationMode: "idle",
				pendingOnsetTimestamp: null,
				...e !== s ? {
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
		clearFileSelection: () => a({
			currentFileId: null,
			markerHistory: [],
			markerHistoryIndex: -1,
			currentFilename: null,
			availableDates: [],
			currentDateIndex: 0,
			currentFileSourceType: null
		}),
		setAvailableFiles: (e) => a({ availableFiles: e }),
		setAvailableDates: (e) => {
			const { currentDateIndex: n, availableDates: r } = t(), i = e.length > 0 ? Math.min(n, e.length - 1) : 0;
			a({
				availableDates: e,
				currentDateIndex: i,
				...r[n] !== e[i] ? {
					markerHistory: [],
					markerHistoryIndex: -1,
					nightLoading: !0
				} : {}
			});
		},
		setCurrentDateIndex: (e) => io ? Promise.resolve(!1) : (io = !0, (async () => {
			try {
				No && t().commitDragTransaction(No.token);
				const { currentDateIndex: n, isDirty: r } = t();
				if (e === n) return !0;
				if (r) {
					if (!await (t()._flushSave ?? ao)()) return !1;
				} else await Promise.resolve();
				Zs(t().notes), Gs("session_end");
				const i = t().availableDates[e] ?? null;
				return Xe.setContext(t().currentFileId, i, t().username, t().selectedStudyId), a({
					currentDateIndex: e,
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
			} catch (n) {
				return a({ saveError: `Navigation save failed: ${to(n)}` }), Fn("warn", "Date navigation save failed", Cn(n)), !1;
			} finally {
				io = !1;
			}
		})()),
		navigateDate: (e) => {
			io || (io = !0, (async () => {
				try {
					No && t().commitDragTransaction(No.token);
					const n = t(), r = n.currentDateIndex + e;
					if (r < 0 || r >= n.availableDates.length) return;
					if (n.isDirty) {
						if (!await (n._flushSave ?? ao)()) return;
					} else await Promise.resolve();
					const i = t(), s = i.currentDateIndex + e;
					if (s < 0 || s >= i.availableDates.length) return;
					Zs(t().notes), Gs("session_end");
					const o = i.availableDates[s] ?? null;
					Xe.setContext(i.currentFileId, o, t().username, t().selectedStudyId), a({
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
				} catch (n) {
					a({ saveError: `Navigation save failed: ${to(n)}` }), Fn("warn", "Date navigation save failed", Cn(n));
				} finally {
					io = !1;
				}
			})());
		},
		_loadSleepMarkersFromServer: (e, t) => {
			Pe.owns(e, Uo.getState()) && a({ sleepMarkers: t });
		},
		_loadProposalMarkers: (e, n, r, i) => {
			if (!Pe.owns(e, Uo.getState())) return;
			const s = t().proposalNight?.authoredSleepMarkers ?? t().sleepMarkers;
			a({
				sleepMarkers: i,
				acceptingProposal: null,
				proposalNight: {
					fileId: n,
					date: r,
					authoredSleepMarkers: s,
					sleepMarkers: i.map((e) => xe(e, {
						onsetTimestamp: e.onsetTimestamp,
						offsetTimestamp: e.offsetTimestamp,
						markerType: e.markerType
					}))
				}
			}), Pe.updateContext(e, t());
		},
		forgetProposalNight: () => {
			null === t().proposalNight && null === t().acceptingProposal || a({
				proposalNight: null,
				acceptingProposal: null
			});
		},
		stageProposalAcceptance: () => {
			const e = t().proposalNight;
			null !== e && a({
				proposalNight: null,
				acceptingProposal: e
			});
		},
		settleProposalAcceptance: (e, n) => {
			const r = t();
			if (r.acceptingProposal !== e) return;
			const i = r.currentFileId === e.fileId && r.availableDates[r.currentDateIndex] === e.date;
			a(n || !i || null !== r.proposalNight ? { acceptingProposal: null } : {
				acceptingProposal: null,
				proposalNight: e
			});
		},
		_loadNonwearMarkersFromServer: (e, t) => {
			Pe.owns(e, Uo.getState()) && a({ nonwearMarkers: t });
		},
		_loadExplicitNoNonwearFromServer: (e, t) => {
			Pe.owns(e, Uo.getState()) && a({ explicitNoNonwear: t });
		},
		_loadStatusFlagsFromServer: (e, t) => {
			Pe.owns(e, Uo.getState()) && a(t);
		},
		setSleepMarkers: (e, n, r) => {
			let i = !1;
			return Go(t, a, (t) => {
				const a = n(t);
				if (null === a) return null;
				if (!r?.actiwareDerived && To(e) && !function(e, t) {
					const n = new Set(e.map((e) => `${String(e.onsetTimestamp)}:${String(e.offsetTimestamp)}`));
					return t.every((e) => n.has(`${String(e.onsetTimestamp)}:${String(e.offsetTimestamp)}`));
				}(t.sleepMarkers, a)) return i = !0, null;
				const s = {
					...r?.acceptProposal ? { proposalNight: null } : {},
					...void 0 !== r?.selectedPeriodIndex ? { selectedPeriodIndex: r.selectedPeriodIndex } : {}
				};
				if (void 0 === r?.invalidNight) return { patch: {
					sleepMarkers: a,
					...s
				} };
				const o = r.invalidNight, { kept: l, cleared: c } = o ? Qe(a) : {
					kept: a,
					cleared: []
				};
				return {
					patch: {
						sleepMarkers: o ? l.map((e, t) => ({
							...e,
							markerIndex: t + 1
						})) : a,
						isInvalidNight: o,
						...s
					},
					record: (e, t) => {
						t.isInvalidNight !== o && Gs("invalid_night_toggled", {
							value: o,
							clearedSleepMarkers: c
						});
					}
				};
			}, {
				night: Do(e),
				editsDisplayedSleep: !0
			}).then((t) => (i && Fo(e, Oo), t));
		},
		setNonwearMarkers: (e, n) => Go(t, a, (e) => {
			const t = n(e);
			if (null === t) return null;
			const a = po(e, t);
			return { patch: {
				nonwearMarkers: a.nonwearMarkers,
				explicitNoNonwear: a.explicitNoNonwear
			} };
		}, { night: Do(e) }),
		editActiwareRest: async (e, n) => {
			const r = e.identity.dataSource;
			if (!r?.saveActiwareRestEdit) return Fo(e, "This night's rest intervals cannot be edited here."), !1;
			let i;
			try {
				i = await r.saveActiwareRestEdit(e.fileId, e.date, n, e.identity.db ?? void 0);
			} catch (c) {
				return Fo(e, c instanceof Error ? c.message : String(c)), !1;
			}
			e.identity.queryClient.invalidateQueries({ queryKey: ["actiware-rests"] });
			const s = "remove" === n.kind ? null : n.to, o = s ? i.findIndex((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && e.onsetTimestamp >= s.startTimestamp && e.offsetTimestamp <= s.endTimestamp) : -1, l = await t().setSleepMarkers(e, () => i, {
				actiwareDerived: !0,
				...o >= 0 ? { selectedPeriodIndex: o } : {}
			});
			return l && Pe.owns(e, t()) && a(s && o < 0 ? {
				selectedActiwareRest: s,
				selectedPeriodIndex: null,
				pendingRestSelection: !1
			} : {
				selectedActiwareRest: null,
				pendingRestSelection: !1
			}), l;
		},
		setSelectedPeriod: (e) => a({
			selectedPeriodIndex: e,
			selectedActiwareRest: null,
			pendingRestSelection: !1,
			placementRejected: !1
		}),
		selectActiwareRest: (e) => a({
			selectedActiwareRest: e,
			selectedPeriodIndex: null,
			pendingRestSelection: !1,
			markerMode: "sleep",
			placementRejected: !1
		}),
		setPendingRestSelection: (e) => a({ pendingRestSelection: e }),
		setMarkerMode: (e) => a({
			markerMode: e,
			creationMode: "idle",
			pendingOnsetTimestamp: null,
			placementRejected: !1,
			selectedPeriodIndex: null,
			selectedActiwareRest: null,
			pendingRestSelection: !1
		}),
		handlePlotClick: (e, n) => {
			const r = Do(e);
			return So(async () => {
				const i = () => Mo(r) ? t() : {
					...Pe.context(e),
					...Pe.night(e)
				}, s = (t) => {
					Mo(r) ? a(t) : Pe.updateContext(e, {
						...i(),
						...t
					});
				};
				if (C(e.context.currentFileSourceType)) return $s("marker_placed", "mutation_on_read_only_view"), Fo(r.session, zs), Promise.resolve();
				const { markerMode: o, creationMode: l, pendingOnsetTimestamp: c, sleepMarkers: d, nonwearMarkers: u } = i();
				let p = n;
				const m = e.context._dataRange;
				if (m && (p = Math.max(m.min, Math.min(m.max, p))), "idle" === l) {
					const e = "sleep" === o ? d.findIndex((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && p >= e.onsetTimestamp && p <= e.offsetTimestamp) : u.findIndex((e) => null != e.startTimestamp && null != e.endTimestamp && p >= e.startTimestamp && p <= e.endTimestamp);
					if (-1 !== e) return s({
						selectedPeriodIndex: e,
						placementRejected: !1
					}), Promise.resolve();
					const t = Ge(o, ("sleep" === o ? d.length : u.length) + 1);
					if (t) return $s("marker_placed", "marker_limit_exceeded"), void Fo(r.session, t);
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
		cancelMarkerCreation: () => a({
			creationMode: "idle",
			pendingOnsetTimestamp: null,
			placementRejected: !1
		}),
		addSleepMarker: (e, n, r, i) => {
			const s = "object" == typeof i ? i : void 0, o = "object" == typeof i ? i.markerType : i, l = bo(e);
			if (C(e.context.currentFileSourceType)) return $s("marker_placed", "mutation_on_read_only_view", l), Fo(e, zs), Promise.resolve(!1);
			if (!Number.isFinite(n) || !Number.isFinite(r) || r <= n) return console.warn(Ws), $s("marker_placed", "boundaries_disordered", l), Fo(e, Ws), Promise.resolve(!1);
			if (To(e)) return t().editActiwareRest(e, {
				kind: "add",
				to: {
					startTimestamp: n,
					endTimestamp: r
				}
			});
			const c = s?.sourceRecordReference;
			return Go(t, a, (t) => {
				const a = t.sleepMarkers;
				if (void 0 !== c && a.some((e) => Ve(e) && e.sourceRecordReference !== c)) return $s("marker_placed", "multiple_main_sleep", l), Fo(e, "Diary Place cannot replace the existing main sleep. Move or delete it before placing this diary's sleep."), null;
				const i = (o === v.MAIN_SLEEP ? a.find(Ve) : void 0) ?? (void 0 === c ? void 0 : a.find((e) => e.sourceRecordReference === c)), s = i ? a.indexOf(i) : a.length, d = o ?? i?.markerType ?? qe(a, t), u = {
					onsetTimestamp: n,
					offsetTimestamp: r,
					markerIndex: s + 1,
					markerType: d,
					...c ? { sourceRecordReference: c } : {}
				}, p = i ? xe(i, u) : u;
				return {
					placesReference: c,
					patch: {
						sleepMarkers: i ? a.map((e) => e === i ? p : e) : [...a, p],
						selectedPeriodIndex: s,
						markerMode: "sleep"
					},
					record: (e, t) => i ? Gs("marker_moved", {
						before: t,
						after: e
					}, { after: e }) : Gs("marker_placed", {
						category: "sleep",
						markerType: d,
						periodIndex: s,
						onsetTimestamp: n,
						offsetTimestamp: r
					}, { after: e })
				};
			}, { night: Do(e) });
		},
		addNonwearMarker: (e, n, r) => {
			const i = bo(e);
			return C(e.context.currentFileSourceType) ? ($s("marker_placed", "mutation_on_read_only_view", i), Fo(e, zs), Promise.resolve(!1)) : !Number.isFinite(n) || !Number.isFinite(r) || r <= n ? (console.warn(Ws), $s("marker_placed", "boundaries_disordered", i), Fo(e, Ws), Promise.resolve(!1)) : Go(t, a, ({ nonwearMarkers: e }) => {
				const t = e.length, a = {
					startTimestamp: n,
					endTimestamp: r,
					markerIndex: t + 1
				};
				return {
					patch: {
						nonwearMarkers: [...e, a],
						explicitNoNonwear: !1,
						selectedPeriodIndex: t,
						markerMode: "nonwear"
					},
					record: (e) => Gs("marker_placed", {
						category: "nonwear",
						periodIndex: t,
						startTimestamp: n,
						endTimestamp: r
					}, { after: e })
				};
			}, { night: Do(e) });
		},
		updateMarker: (e, n, r, i) => {
			if (Pe.holds(e, Uo.getState()) && Eo("marker_adjusted")) return Promise.resolve();
			if (C(e.context.currentFileSourceType)) return $s("marker_adjusted", "mutation_on_read_only_view"), Promise.resolve();
			if ("sleep" === n && To(e)) return Fo(e, Oo), Promise.resolve();
			const s = i instanceof Promise, o = s ? null : xo.get(e) ?? null, l = o ? { ...o.night } : Do(e), c = Io(l.context, n, r);
			return null === c ? Promise.resolve() : So(async () => {
				let e = s ? await i : "function" == typeof i ? null : i;
				if (!e && "function" != typeof i) return;
				const d = (t, a = !1) => {
					const r = ko(t, n, c);
					if (r < 0) return Po(n, c), null;
					if ("function" == typeof i && (e = i(t, r)), !e) return null;
					const s = { ...e }, o = l.context._dataRange;
					o && (void 0 !== s.onsetTimestamp && (s.onsetTimestamp = Math.max(o.min, Math.min(o.max, s.onsetTimestamp))), void 0 !== s.offsetTimestamp && (s.offsetTimestamp = Math.max(o.min, Math.min(o.max, s.offsetTimestamp))), void 0 !== s.startTimestamp && (s.startTimestamp = Math.max(o.min, Math.min(o.max, s.startTimestamp))), void 0 !== s.endTimestamp && (s.endTimestamp = Math.max(o.min, Math.min(o.max, s.endTimestamp))));
					const d = "sleep" === n ? t.sleepMarkers[r] : void 0, u = "sleep" === n ? void 0 : t.nonwearMarkers[r], p = d ?? u;
					if (!p || Object.entries(s).every(([e, t]) => Reflect.get(p, e) === t)) return null;
					if (d ?? u) {
						const e = d ? s.onsetTimestamp ?? d.onsetTimestamp : s.startTimestamp ?? u?.startTimestamp ?? null, t = d ? s.offsetTimestamp ?? d.offsetTimestamp : s.endTimestamp ?? u?.endTimestamp ?? null;
						if (null !== e && null !== t && t <= e) return console.warn(Ws), $s("marker_adjusted", "boundaries_disordered"), Fo(l.session, Ws), null;
					}
					if ("sleep" === n) {
						const e = void 0 !== s.onsetTimestamp || void 0 !== s.offsetTimestamp;
						return { patch: {
							sleepMarkers: t.sleepMarkers.map((t, n) => {
								if (n !== r) return t;
								const a = {
									...t,
									...s
								};
								return e && ("auto" === a.source || a.placement) && (a.edited = !0), a;
							}),
							placementRejected: !1
						} };
					}
					const m = t.nonwearMarkers.map((e, t) => t === r ? {
						...e,
						...s
					} : e);
					return { patch: {
						nonwearMarkers: m,
						explicitNoNonwear: eo(m, t.explicitNoNonwear),
						placementRejected: !1
					} };
				};
				if (o) {
					const e = Mo(l) ? t() : Pe.context(l.session), n = d(e);
					if (!n) return;
					const r = yo(fo(e), n);
					if (!await Co(r, l.session)) return;
					return Ao(t, a, (e, t) => {
						o.snapshotPending && (o.snapshotPending = !1, t(mo(e()))), t({
							...n.patch,
							...r,
							isDirty: !0,
							_editGeneration: e()._editGeneration + 1
						});
					}, {
						night: l,
						preview: !0
					});
				}
				await qo(t, a, {
					editsDisplayedSleep: "sleep" === n,
					night: l,
					propose: (t, a) => {
						const i = d(t, a);
						return i && {
							...i,
							record: (t) => {
								Gs("marker_adjusted", {
									category: n,
									periodIndex: r,
									updates: e
								}, { after: t });
							}
						};
					}
				});
			}, l, null !== o);
		},
		deleteMarker: (e, n, r) => {
			if ("sleep" === n && To(e)) {
				const n = e.context.sleepMarkers[r];
				return null == n?.onsetTimestamp || null == n.offsetTimestamp ? Promise.resolve() : t().editActiwareRest(e, {
					kind: "remove",
					holding: {
						startTimestamp: n.onsetTimestamp,
						endTimestamp: n.offsetTimestamp
					}
				}).then(() => {});
			}
			const i = Do(e), s = Io(i.context, n, r);
			return Ao(t, a, (e, t) => {
				if (C(e().currentFileSourceType)) return void $s("marker_deleted", "mutation_on_read_only_view");
				const a = ko(e(), n, s);
				if (a < 0) return void Po(n, s);
				const r = "sleep" === n ? e().sleepMarkers[a] : e().nonwearMarkers[a];
				if (t(mo(e())), "sleep" === n) {
					const { sleepMarkers: i } = e();
					t({
						sleepMarkers: i.filter((e, t) => t !== a).map((e, t) => ({
							...e,
							markerIndex: t + 1
						})),
						isDirty: !0,
						_editGeneration: e()._editGeneration + 1,
						selectedPeriodIndex: null
					}), Gs("marker_deleted", {
						category: n,
						periodIndex: a,
						before: r
					});
				} else {
					const { nonwearMarkers: i } = e();
					t({
						nonwearMarkers: i.filter((e, t) => t !== a).map((e, t) => ({
							...e,
							markerIndex: t + 1
						})),
						isDirty: !0,
						_editGeneration: e()._editGeneration + 1,
						selectedPeriodIndex: null
					}), Gs("marker_deleted", {
						category: n,
						periodIndex: a,
						before: r
					});
				}
			}, { night: i });
		},
		splitSleepPeriod: (e, n, r, i = []) => {
			if (C(e.context.currentFileSourceType)) return $s("sleep_period_split", "mutation_on_read_only_view"), Promise.resolve();
			if (To(e)) return Fo(e, Oo), Promise.resolve();
			const s = Do(e), o = Io(s.context, "sleep", n);
			return Go(t, a, (e) => {
				const t = ko(e, "sleep", o);
				if (t < 0) return Po("sleep", o), null;
				const n = i[i.indexOf(r) - 1], a = void 0 === n ? null : Ee(e.sleepMarkers, t, r, n);
				if (void 0 === n || !a?.ok || !a.markers) return $s("sleep_period_split", "split_not_strictly_inside"), null;
				const s = a.newIndex ?? t + 1;
				return a.markers[s] = xe(a.markers[s], void 0, !0), {
					patch: {
						sleepMarkers: a.markers,
						selectedPeriodIndex: s,
						markerMode: "sleep"
					},
					record: (e, a) => Gs("sleep_period_split", {
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
		mergeSleepPeriod: (e, n, r) => {
			if (C(e.context.currentFileSourceType)) return $s("sleep_period_merged", "mutation_on_read_only_view"), Promise.resolve();
			if (To(e)) return Fo(e, Oo), Promise.resolve();
			const i = Do(e), s = Io(i.context, "sleep", n);
			return Go(t, a, (e) => {
				const t = ko(e, "sleep", s);
				if (t < 0) return Po("sleep", s), null;
				const n = _e(e.sleepMarkers, t, r);
				return n.ok && n.markers ? {
					patch: {
						sleepMarkers: n.markers,
						selectedPeriodIndex: n.mergedIndex ?? t,
						markerMode: "sleep"
					},
					record: (e, n) => Gs("sleep_period_merged", {
						periodIndex: t,
						direction: r
					}, { after: n })
				} : ($s("sleep_period_merged", "merge_no_neighbor"), null);
			}, {
				editsDisplayedSleep: !0,
				night: i
			}).then(() => {});
		},
		setIsInvalidNight: (e, n) => {
			if (Pe.holds(e, Uo.getState()) && Eo("invalid_night_toggled")) return Promise.resolve(0);
			let r = n && !t().isInvalidNight ? Qe(t().sleepMarkers).cleared.length : 0;
			return Ao(t, a, (e, t) => {
				r = (() => {
					if (e().isInvalidNight === n) return 0;
					const { kept: a, cleared: r } = Qe(e().sleepMarkers), i = n ? r : [];
					t(mo(e()));
					const s = () => {
						Gs("invalid_night_toggled", {
							value: n,
							clearedSleepMarkers: i
						});
					};
					if (n) {
						const n = a.map((e, t) => ({
							...e,
							markerIndex: t + 1
						}));
						t({
							isInvalidNight: !0,
							sleepMarkers: n,
							isDirty: !0,
							_editGeneration: e()._editGeneration + 1,
							selectedPeriodIndex: n.length > 0 ? 0 : null
						}), s();
					} else t({
						isInvalidNight: !1,
						isDirty: !0,
						_editGeneration: e()._editGeneration + 1
					}), s();
					return i.length;
				})();
			}, { night: Do(e) }).then(() => r);
		},
		setExplicitNoNonwear: (e, n) => {
			Ao(t, a, (e, t) => {
				if (e().explicitNoNonwear === n) return;
				t(mo(e()));
				const a = () => {
					Gs("no_nonwear_toggled", { value: n });
				};
				n ? (t({
					explicitNoNonwear: !0,
					nonwearMarkers: [],
					selectedPeriodIndex: null,
					isDirty: !0,
					_editGeneration: e()._editGeneration + 1,
					creationMode: "idle",
					pendingOnsetTimestamp: null
				}), a()) : (t({
					explicitNoNonwear: !1,
					isDirty: !0,
					_editGeneration: e()._editGeneration + 1
				}), a());
			}, { night: Do(e) });
		},
		setNeedsConsensus: (e, n) => {
			Ao(t, a, (e, t) => {
				e().needsConsensus !== n && (Gs("consensus_toggled", { value: n }), t(mo(e())), t({
					needsConsensus: n,
					isDirty: !0,
					_editGeneration: e()._editGeneration + 1
				}));
			}, { night: Do(e) });
		},
		setNotes: (e, n) => {
			Ao(t, a, (t, a) => {
				const r = t().notes, i = Pe.holds(e) ? null : jo, s = null !== i || null === Js;
				i || function(e) {
					null === Js ? Ys = {
						identity: He(Uo.getState()),
						value: e
					} : clearTimeout(Js), Js = setTimeout(() => {
						Js = null, Xs(t().notes);
					}, Qs);
				}(r), s && a(mo(t())), a({
					notes: n,
					isDirty: !0,
					_editGeneration: t()._editGeneration + 1
				}), i && Xs(n, r, i);
			}, { night: Do(e) });
		},
		setSaveError: (e) => a({ saveError: e }),
		_flushSave: ao,
		pushMarkerSnapshot: () => a(mo(t())),
		undo: (e) => Ao(t, a, (e, t) => {
			if (C(e().currentFileSourceType)) return void $s("undo", "mutation_on_read_only_view");
			const n = () => {
				const e = qs();
				Gs("undo", {
					sleepCount: e.sleepMarkers.length,
					nonwearCount: e.nonwearMarkers.length,
					stateAfter: e
				});
			}, { markerHistory: a, markerHistoryIndex: r, sleepMarkers: i, nonwearMarkers: s, isInvalidNight: o, explicitNoNonwear: l, needsConsensus: c, notes: d, selectedPeriodIndex: u, _editGeneration: p } = e();
			if (r < 0) return void $s("undo", "undo_beyond_history");
			if (r === a.length - 1) {
				const m = {
					proposalNight: e().proposalNight,
					sleepMarkers: i.map((e) => xe(e)),
					nonwearMarkers: s.map((e) => xe(e)),
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
					}), n()) : $s("undo", "undo_beyond_history");
					return;
				}
			}
			const m = r - 1;
			if (m < 0) return void $s("undo", "undo_beyond_history");
			const h = a[m];
			h ? (t({
				proposalNight: h.proposalNight ?? null,
				sleepMarkers: h.sleepMarkers.map((e) => xe(e)),
				nonwearMarkers: h.nonwearMarkers.map((e) => xe(e)),
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
			}), n()) : $s("undo", "undo_beyond_history");
		}, { night: Do(e) }),
		redo: (e) => Ao(t, a, (e, t) => {
			if (C(e().currentFileSourceType)) return void $s("redo", "mutation_on_read_only_view");
			const { markerHistory: n, markerHistoryIndex: a } = e(), r = a + 1;
			if (r >= n.length) return void $s("redo", "redo_beyond_history");
			const i = n[r];
			if (!i) return void $s("redo", "redo_beyond_history");
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
			const s = qs();
			Gs("redo", {
				sleepCount: s.sleepMarkers.length,
				nonwearCount: s.nonwearMarkers.length,
				stateAfter: s
			});
		}, { night: Do(e) }),
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
		beginDragTransaction: (e) => {
			if (Eo("marker_moved")) return;
			const n = {
				token: e,
				night: Do(e),
				before: null,
				snapshotPending: !0
			};
			No = n, xo.set(e, n), Ao(t, a, (t, a) => {
				n.before = t(), Pe.setDragging(e, !0), a({
					_isDragTransaction: !0,
					_dragSnapshotForAudit: {
						sleepMarkers: t().sleepMarkers.map((e) => xe(e)),
						nonwearMarkers: t().nonwearMarkers.map((e) => xe(e))
					}
				});
			}, { night: n.night });
		},
		commitDragTransaction: (e) => {
			const n = xo.get(e);
			if (!n) return Promise.resolve();
			xo.delete(e), No === n && (No = null);
			let r = null;
			return So(async () => {
				try {
					const e = n.before;
					if (!e) return;
					const i = {
						sleepMarkers: e.sleepMarkers,
						nonwearMarkers: e.nonwearMarkers
					}, s = r ?? (Mo(n.night) ? t() : Pe.night(n.night.session));
					if (!s || JSON.stringify(i) === JSON.stringify({
						sleepMarkers: s.sleepMarkers,
						nonwearMarkers: s.nonwearMarkers
					})) return;
					const o = r ??= {
						sleepMarkers: s.sleepMarkers.map((e) => xe(e)),
						nonwearMarkers: s.nonwearMarkers.map((e) => xe(e))
					};
					if (!await qo(t, a, {
						editsDisplayedSleep: !1,
						night: n.night,
						propose: () => ({
							patch: o,
							since: i.sleepMarkers,
							snapshot: !1,
							record: (e) => {
								const t = {
									sleepMarkers: e.sleepMarkers,
									nonwearMarkers: e.nonwearMarkers
								};
								JSON.stringify(i) !== JSON.stringify(t) && Gs("marker_moved", {
									before: i,
									after: t
								}, { after: e });
							}
						})
					})) {
						const e = {
							sleepMarkers: i.sleepMarkers.map((e) => xe(e)),
							nonwearMarkers: i.nonwearMarkers.map((e) => xe(e))
						};
						Mo(n.night) ? a({
							...e,
							isDirty: !0,
							_editGeneration: t()._editGeneration + 1
						}) : n.night.session && Pe.write(n.night.session, {
							...Pe.night(n.night.session),
							...e
						}, []);
					}
				} finally {
					if (Pe.setDragging(e, !1), Mo(n.night)) a({
						_isDragTransaction: !1,
						_dragSnapshotForAudit: null,
						...t().isDirty && !n.snapshotPending ? { _editGeneration: t()._editGeneration + 1 } : {}
					});
					else {
						const e = Pe.context(n.night.session);
						Pe.updateContext(n.night.session, {
							...e,
							_isDragTransaction: !1,
							_dragSnapshotForAudit: null
						});
					}
				}
			}, n.night).then(() => {});
		},
		clearAllMarkers: (e, n) => C(e.context.currentFileSourceType) || Pe.holds(e, Uo.getState()) && Eo("markers_cleared") ? Promise.resolve(!1) : Ao(t, a, (e, t) => {
			n?.skipAudit || Gs("markers_cleared", {
				sleepCount: e().sleepMarkers.length,
				nonwearCount: e().nonwearMarkers.length
			}), t(mo(e())), t({
				sleepMarkers: [],
				nonwearMarkers: [],
				isDirty: !0,
				_editGeneration: e()._editGeneration + 1,
				selectedPeriodIndex: null
			});
		}, { night: Do(e) }).then(() => !0),
		applyConsensusCandidate: (e, { kind: n, sleepMarkers: r, nonwearMarkers: i, isInvalidNight: s, explicitNoNonwear: o }) => Go(t, a, () => {
			if ("nonwear" === n) {
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
			night: Do(e),
			editsDisplayedSleep: "sleep" === n
		}),
		setPreferredDisplayColumn: (e) => a({
			preferredDisplayColumn: e,
			displayColumnChosenByUser: !0
		}),
		setViewModeHours: (e) => a({ viewModeHours: e }),
		setCurrentAlgorithm: (e) => a({
			currentAlgorithm: e,
			...e !== t().currentAlgorithm ? { displayColumnChosenByUser: !1 } : {}
		}),
		setShowAdjacentMarkers: (e) => a({ showAdjacentMarkers: e }),
		setShowNonwearOverlays: (e) => a({ showNonwearOverlays: e }),
		setShowChoiNonwear: (e) => a({ showChoiNonwear: e }),
		setShowLight: (e) => a({ showLight: e }),
		setShowEventMarkers: (e) => a({ showEventMarkers: e }),
		setShowAutoScoreProposal: (e) => a({ showAutoScoreProposal: e }),
		setShowDiaryOverlay: (e) => a({ showDiaryOverlay: e }),
		setAutoScoreOnNavigate: (e) => a({ autoScoreOnNavigate: e }),
		setAutoNonwearOnNavigate: (e) => a({ autoNonwearOnNavigate: e }),
		setHideFilenames: (e) => a({ hideFilenames: e }),
		setPeriodGuider: (e) => a({ periodGuider: e }),
		setDiaryDayBoundaryHour: (e) => a({ diaryDayBoundaryHour: e }),
		setDiaryMainSleepDateRule: (e) => a({ diaryMainSleepDateRule: e }),
		setDiaryNapDateRule: (e) => a({ diaryNapDateRule: e }),
		setDiaryNonwearDateRule: (e) => a({ diaryNonwearDateRule: e }),
		setDiaryDstFoldPolicy: (e) => a({ diaryDstFoldPolicy: e }),
		setDiaryDstGapPolicy: (e) => a({ diaryDstGapPolicy: e }),
		setSleepPeriodDetection: (e) => a((t) => ({ sleepPeriodDetection: ze({
			...t.sleepPeriodDetection,
			...e
		}) })),
		setSleepDetectionRule: (e) => a({ sleepDetectionRule: e }),
		setPlacementRuleset: (e) => a({ placementRuleset: e }),
		setScorerPostprocessingPreset: (e) => a({ scorerPostprocessingPreset: e }),
		setExtractionPath: (e) => a({ extractionPath: e }),
		setNonwearDetectorsCounts: (e) => a({ nonwearDetectorsCounts: [...new Set(e)] }),
		setNonwearDetectorsGgir: (e) => a({ nonwearDetectorsGgir: [...new Set(e)] }),
		applyStudyScoringDefaults: (e) => a({
			...void 0 !== e.currentAlgorithm ? {
				currentAlgorithm: e.currentAlgorithm,
				...e.currentAlgorithm !== t().currentAlgorithm ? { displayColumnChosenByUser: !1 } : {}
			} : {},
			...void 0 !== e.nonwearDetectorsCounts ? { nonwearDetectorsCounts: [...e.nonwearDetectorsCounts] } : {},
			...void 0 !== e.nonwearDetectorsGgir ? { nonwearDetectorsGgir: [...e.nonwearDetectorsGgir] } : {},
			...void 0 !== e.studyDeclaredFields ? { studyDeclaredFields: [...e.studyDeclaredFields] } : {}
		}),
		setActiwareAnalysis: (e) => {
			a({ actiwareAnalysis: ot(e) });
		},
		setActiwareRestProposal: (e) => {
			a({ actiwareRestProposal: lt(e) });
		},
		setAnalysisParadigm: (e) => {
			a({ analysisParadigm: rt(e) });
		},
		applyScoringRecipePatch: (e) => a(e),
		setNightHours: (e, t) => a({
			nightStartHour: e,
			nightEndHour: t
		}),
		setAppliedStudySettingsAuthorityKey: (e) => a({ appliedStudySettingsAuthorityKey: e }),
		setValidDayCriteria: (e) => a((t) => ({ validDayCriteria: Ls({
			...t.validDayCriteria,
			...e
		}) })),
		setPhysicalActivityMethod: (e) => {
			a({ physicalActivityMethod: e });
		},
		setPhysicalActivityCutpoints: (e, t) => a((n) => {
			const a = Object.fromEntries(Object.entries(n.physicalActivityCutpointOverrides).filter(([t]) => t !== e));
			return null !== t && (a[e] = t), { physicalActivityCutpointOverrides: a };
		}),
		setPhysicalActivityCutpointOverrides: (e) => {
			a({ physicalActivityCutpointOverrides: { ...e } });
		},
		setParticipantPopulation: (e) => {
			a({ participantPopulation: e });
		},
		setParticipantLaterality: (e) => {
			a({ participantLaterality: e });
		},
		setPhysicalActivityNonwearAsClass: (e) => {
			a({ physicalActivityNonwearAsClass: e });
		},
		setPhysicalActivityEnabledClasses: (e) => {
			a({ physicalActivityEnabledClasses: Ks.filter((t) => e.includes(t)) });
		},
		setPhysicalActivityMaskPolicy: (e) => {
			a({ physicalActivityMaskPolicy: { ...e } });
		},
		setSelectedStudyId: (e) => no(() => {
			const n = t();
			Xe.setContext(n.currentFileId, n.availableDates[n.currentDateIndex] ?? null, n.username, e), a({ selectedStudyId: e });
		}),
		setDevicePreset: (e) => a({ devicePreset: e }),
		setEpochLengthSeconds: (e) => a({ epochLengthSeconds: e }),
		setSkipRows: (e) => a({ skipRows: e }),
		setColumnMapping: (e) => a({ columnMapping: e }),
		setPreferredActivityColumn: (e) => a({ preferredActivityColumn: e }),
		setChoiAxis: (e) => a({ choiAxis: e }),
		setSensorLocation: (e) => {
			a({ sensorLocation: e });
		},
		setChoiVariant: (e) => a({ choiVariant: e }),
		setGgirConfig: (e) => a({ ggirConfig: e }),
		setLocalGgirProcessingSettings: (e) => a((t) => ({
			ggirHasptVariant: e.ggirHasptVariant ?? t.ggirHasptVariant,
			ggirHasibVariantsEnabled: e.ggirHasibVariantsEnabled ?? t.ggirHasibVariantsEnabled,
			ggirHasibVariants: e.ggirHasibVariants ?? t.ggirHasibVariants,
			ggirHasibCountSource: e.ggirHasibCountSource ?? t.ggirHasibCountSource,
			ggirHasibCountEpochSeconds: e.ggirHasibCountEpochSeconds ?? t.ggirHasibCountEpochSeconds
		})),
		setUploadProgress: (e) => a({ uploadProgress: e }),
		setUploadResult: (e) => a({ uploadResult: e }),
		setIsUploading: (e) => a({ isUploading: e }),
		setLocalProcessingError: (e) => a({ localProcessingError: e }),
		setLocalBatchSummary: (e) => a({ localBatchSummary: e }),
		colorTheme: { ...An },
		setColorTheme: (e) => a((t) => ({ colorTheme: {
			...t.colorTheme,
			...e,
			preset: "custom"
		} })),
		applyColorPreset: (e) => {
			const t = Pn[e];
			t && a({ colorTheme: { ...t } });
		},
		resetColorTheme: () => a({ colorTheme: { ...An } }),
		resetPersistedSlice: () => {
			B.setState({
				localProcessingProgress: null,
				isLocalProcessing: !1
			});
			const e = zo(uo(n.getInitialState()));
			jn(() => a({
				...e,
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
		resetRegistrySettings: (e) => {
			const t = {};
			for (const n of R) {
				if (!H[n].persisted) continue;
				const a = H[n].storeKeys.zustand;
				a && (t[a] = e[n]);
			}
			t.sleepPeriodDetection = ze(e.sleep_period_detection), t.actiwareRestProposal = lt(e.actiware_rest_proposal), a(t);
		}
	};
}, {
	name: "sleep-scoring-storage",
	storage: ue(() => Jn),
	skipHydration: !0,
	onRehydrateStorage: () => (e, t) => {
		t && Fn("warn", "Persisted store rehydration failed", Cn(t));
	},
	partialize: (e) => uo(e),
	merge: (e, t) => {
		const n = {
			...t,
			...e
		};
		e && "object" == typeof e && "sitePassword" in e && (n.sitePassword = null), n.sleepPeriodDetection = ze(n.sleepPeriodDetection), n.validDayCriteria = Ls(n.validDayCriteria), n.physicalActivityCutpointOverrides = Vo(n.physicalActivityCutpointOverrides);
		const a = n;
		for (const i of R) {
			if (!i.startsWith("diary_")) continue;
			const e = H[i].storeKeys.zustand;
			e && null !== r(i, a[e]) && (a[e] = g[i]);
		}
		return n.colorTheme = function(e) {
			if (!e || "object" != typeof e) return { ...An };
			const t = Pn[e.preset];
			return t ? { ...t } : { ...e };
		}(n.colorTheme), n;
	}
}), { name: "SleepScoringStore" }));
function Vo(e) {
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
ye(() => Uo.getState());
const Bo = /* @__PURE__ */ new Set([
	"username",
	"isAuthenticated",
	"sitePassword"
]);
function zo(e) {
	return Object.fromEntries(Object.entries(e).filter(([e]) => !Bo.has(e)));
}
async function Wo(e) {
	await Uo.persist.rehydrate();
	const t = Uo.getState(), n = e ?? t.username;
	(t.isAuthenticated || void 0 !== e) && n && Xe.setContext(t.currentFileId, t.availableDates[t.currentDateIndex] ?? null, n, t.selectedStudyId);
	const { cutpointOverrides: a } = await async function(e, t) {
		const n = { cutpointOverrides: null };
		if (null === e || "" === e) return n;
		const a = function(e) {
			return `sleep-scoring:legacy-device-settings:adopted:${e}`;
		}(e);
		if (null !== As(a)) return n;
		try {
			const e = t ? await ps(t) : await ps(), n = e?.extraSettings ?? {}, r = {}, i = function() {
				const e = As("sleep-scoring:sensor-location:selected");
				return "wrist" === e || "hip" === e ? e : null;
			}();
			null !== i && void 0 === n.sensor_location && (r.sensor_location = i);
			const s = function() {
				const e = As("sleep-scoring:lstm-onnx:selected-model");
				if (null === e || "" === e) return null;
				const t = As(`sleep-scoring:lstm-onnx:threshold:${e}`), n = null === t ? NaN : Number(t);
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
				t ? await hs(n, t) : await hs(n);
			}
			const o = function(e = localStorage) {
				const t = at(e), n = {};
				for (const a of t) n[a.method] = a.thresholds;
				return Object.keys(n).length > 0 ? n : null;
			}();
			try {
				localStorage.setItem(a, (/* @__PURE__ */ new Date()).toISOString());
			} catch {}
			return { cutpointOverrides: o };
		} catch (r) {
			return Fn("warn", "Adopting legacy device settings into the workspace failed", Cn(r)), n;
		}
	}(Z());
	null !== a && Uo.setState((e) => ({ physicalActivityCutpointOverrides: {
		...a,
		...e.physicalActivityCutpointOverrides
	} }));
	const { resetPersistedAlgorithmNonwear: r } = await import("./pa-mask-nonwear-reset-Bj8JsyK_.js");
	await r(Z(), Uo.getState().physicalActivityMaskPolicy, (e) => {
		Uo.setState({ physicalActivityMaskPolicy: e });
	});
}
const $o = () => Uo(Rt((e) => ({
	currentDateIndex: e.currentDateIndex,
	availableDates: e.availableDates,
	currentDate: e.availableDates[e.currentDateIndex] ?? null,
	setAvailableDates: e.setAvailableDates,
	setCurrentDateIndex: e.setCurrentDateIndex,
	navigateDate: e.navigateDate
}))), Qo = () => Uo(Rt((e) => ({
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
}))), Jo = () => Uo(Rt((e) => ({
	colorTheme: e.colorTheme,
	setColorTheme: e.setColorTheme,
	applyColorPreset: e.applyColorPreset,
	resetColorTheme: e.resetColorTheme
}))), Yo = {
	getState: Uo.getState,
	getInitialState: () => Uo.getInitialState(),
	flushNotesAudit: () => Zs(Uo.getState().notes),
	setState: Uo.setState,
	takeShownEdits: (e) => (Zs(Uo.getState().notes), Vs({
		store: e.db?.name ?? null,
		actor: e.scope.actor,
		fileId: e.fileId,
		date: e.date
	}, e))
};
export { Ei as $, Fn as $t, Ti as A, La as At, ks as B, Sa as Bt, es as C, Xa as Ct, Ms as D, qa as Dt, as as E, Ua as Et, Pi as F, Na as Ft, Ji as G, ua as Gt, Ds as H, ga as Ht, ps as I, Ca as It, Xi as J, oa as Jt, gi as K, la as Kt, Zi as L, Ra as Lt, Qi as M, Pa as Mt, Ci as N, ja as Nt, rs as O, Va as Ot, cs as P, Ta as Pt, Di as Q, Cn as Qt, ys as R, Ea as Rt, is as S, cr as St, Yi as T, Ya as Tt, Ui as U, pa as Ut, Is as V, ya as Vt, hs as W, sa as Wt, vs as X, da as Xt, Es as Y, na as Yt, _s as Z, Yn as Zt, Oi as _, _r as _t, Ts as a, wt as an, ai as at, os as b, mr as bt, ui as c, Wr as ct, bi as d, Fr as dt, xt as en, Ki as et, zi as f, Tr as ft, xi as g, br as gt, Mi as h, Dr as ht, Uo as i, Dt as in, ii as it, ns as j, Aa as jt, Ni as k, Ga as kt, hi as l, zr as lt, si as m, Ar as mt, Yo as n, At as nn, fs as nt, Fs as o, Zr as ot, ds as p, Er as pt, Vi as q, aa as qt, js as r, Et as rn, ss as rt, oi as s, ei as st, _o as t, Pt as tn, Gi as tt, qi as u, $r as ut, Wi as v, hr as vt, Ss as w, $a as wt, bs as x, dr as xt, Fi as y, fr as yt, gs as z, Da as zt };
