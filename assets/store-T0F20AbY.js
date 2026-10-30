import { l as e, s as t } from "./ggir-results-types-WB8axvb-.js";
import { i as n } from "./workers-x5pLIA5h.js";
import { At as a, Dt as r, Gt as i, Ht as s, Nt as o, Pt as l, S as c, Tt as d, V as u, Yt as p, _ as m, _n as h, an as y, bn as f, c as g, dn as w, en as v, fn as _, g as S, gn as I, hn as k, i as b, jt as D, kt as M, ln as E, mn as A, n as P, nn as N, on as O, pn as x, r as T, t as F, un as C, vn as R, wt as H, xn as L } from "./schema-BfdZ6EnO.js";
import { l as j } from "./legacy-invalid-night-BxvRkrkV.js";
import { A as K, C as q, D as G, F as U, I as V, J as B, L as z, Q as W, R as $, W as Q, X as J, Z as Y, a as X, at as Z, et as ee, it as te, n as ne, nt as ae, q as re, rt as ie, t as se, w as le, x as ce, z as de } from "./workspace-db-CzQx_9vK.js";
import { a as ue, o as pe, s as me } from "./content-hash-B-at0sOp.js";
import { S as he, r as ye, t as fe } from "./background-jobs-Csx1HbpJ.js";
import { a as ge, i as we } from "./project-revision-DgqSiJLh.js";
import { F as _e, L as Se, N as Ie, P as ke, R as be, a as De, b as Me, c as Ee, d as Ae, f as Pe, g as Ne, i as Oe, j as xe, l as Te, p as Fe, s as Ce, t as Re, w as He } from "./night-session-registry-C4XZbIvR.js";
import { D as Le, _ as je, b as Ke, g as qe, k as Ge, m as Ue, p as Ve, s as Be, t as ze, u as We, v as $e } from "./sleep-period-detection-sYqHWc2M.js";
import { i as Qe } from "./preset-families-DLQhCkDB.js";
import { a as Je, t as Ye } from "./audit-log-DpIvew_r.js";
import "./audit-events-Db1w7ukh.js";
import "./audit-hash-BdWutkgc.js";
import { i as Xe, n as Ze, t as et } from "./wal-W9Xr5Iom.js";
import { a as tt, p as nt, s as at, t as rt } from "./valid-day-criteria-DtsMUBqT.js";
import { _ as it, c as st, d as ot, f as lt, i as ct, o as dt, p as ut } from "./diary-local-import-contract-DWZbsGYE.js";
import "./pre-migration-backup-BvNyMTMP.js";
Object.values({
	CAPACITY: "capacity",
	INTEGRITY: "integrity",
	VERIFICATION: "verification",
	OTHER: "other"
});
var pt = class extends Error {
	name = "BackupCapacityError";
	reason;
	constructor(e) {
		super(`Backup ${"source" === e ? "file" : "expanded data"} exceeds the local byte limit.`), this.reason = e;
	}
};
const mt = new Uint8Array([31, 139]);
function ht(e) {
	let t = 0;
	for (const r of e) t += r.length;
	const n = new Uint8Array(t);
	let a = 0;
	for (const r of e) n.set(r, a), a += r.length;
	return n;
}
async function yt(e, t) {
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
			const a = e instanceof Uint8Array ? new Blob([e]) : e, r = new Uint8Array(await a.slice(0, mt.length).arrayBuffer());
			n?.throwIfAborted();
			let i = a.stream();
			if ((s = r).length >= 2 && s[0] === mt[0] && s[1] === mt[1]) {
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
					if (c += e.byteLength, c > t) throw new pt("expanded");
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
var ft = "argument,value,context\ndatadir,,not applicable\ndo.report,\"c(2,4,5,6)\",not applicable\nf0,1,not applicable\nf1,542,not applicable\nmode,\"c(1,2,3,4,5,6)\",not applicable\noutputdir,,not applicable\nrawaccfiles_formats,csv,not applicable\nstudyname,,not applicable\nGGIRread_version,could not extract version,not applicable\nGGIRversion,3.0.0,not applicable\nR_version,R version 4.4.3 (2025-02-28),not applicable\nqwindow,\"c(0,24)\",params_247\nqlevels,\"c(0.958333333333333,0.979166666666667,0.993055555555556)\",params_247\nqwindow_dateformat,%d-%m-%Y,params_247\nilevels,c(),params_247\nIVIS_windowsize_minutes,60,params_247\nIVIS_epochsize_seconds,c(),params_247\nIVIS.activity.metric,2,params_247\nIVIS_acc_threshold,20,params_247\nqM5L5,c(),params_247\nMX.ig.min.dur,10,params_247\nM5L5res,10,params_247\nwinhr,\"c(5,10)\",params_247\niglevels,\"c(0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1025,1050,1075,1100,1125,1150,1175,1200,1225,1250,1275,1300,1325,1350,1375,1400,1425,1450,1475,1500,1525,1550,1575,1600,1625,1650,1675,1700,1725,1750,1775,1800,1825,1850,1875,1900,1925,1950,1975,2000,2025,2050,2075,2100,2125,2150,2175,2200,2225,2250,2275,2300,2325,2350,2375,2400,2425,2450,2475,2500,2525,2550,2575,2600,2625,2650,2675,2700,2725,2750,2775,2800,2825,2850,2875,2900,2925,2950,2975,3000,3025,3050,3075,3100,3125,3150,3175,3200,3225,3250,3275,3300,3325,3350,3375,3400,3425,3450,3475,3500,3525,3550,3575,3600,3625,3650,3675,3700,3725,3750,3775,3800,3825,3850,3875,3900,3925,3950,3975,4000,8000)\",params_247\nLUXthresholds,\"c(0,100,500,1000,3000,5000,10000)\",params_247\nLUX_cal_constant,c(),params_247\nLUX_cal_exponent,c(),params_247\nLUX_day_segments,c(),params_247\nwindow.summary.size,10,params_247\nL5M5window,\"c(0,24)\",params_247\ncosinor,TRUE,params_247\nincludedaycrit,1,params_cleaning\nndayswindow,7,params_cleaning\nstrategy,1,params_cleaning\nmaxdur,0,params_cleaning\nhrs.del.start,0,params_cleaning\nhrs.del.end,0,params_cleaning\nincludedaycrit.part5,0.083333333,params_cleaning\nexcludefirstlast.part5,FALSE,params_cleaning\nTimeSegments2ZeroFile,c(),params_cleaning\ndo.imp,TRUE,params_cleaning\ndata_cleaning_file,c(),params_cleaning\nminimum_MM_length.part5,23,params_cleaning\nexcludefirstlast,FALSE,params_cleaning\nincludenightcrit,1,params_cleaning\nexcludefirst.part4,FALSE,params_cleaning\nexcludelast.part4,FALSE,params_cleaning\nmax_calendar_days,0,params_cleaning\nnonWearEdgeCorrection,TRUE,params_cleaning\nnonwear_approach,2023,params_cleaning\nsegmentWEARcrit.part5,0.5,params_cleaning\nsegmentDAYSPTcrit.part5,\"c(0.9,0)\",params_cleaning\noverwrite,FALSE,params_general\nacc.metric,ENMO,params_general\nmaxNcores,c(),params_general\nprint.filename,FALSE,params_general\ndo.parallel,TRUE,params_general\nwindowsizes,\"c(5,900,3600)\",params_general\ndesiredtz,EST,params_general\nconfigtz,c(),params_general\nidloc,1,params_general\ndayborder,0,params_general\npart5_agg2_60seconds,FALSE,params_general\nsensor.location,wrist,params_general\nexpand_tail_max_hours,c(),params_general\nrecordingEndSleepHour,c(),params_general\ndataFormat,raw,params_general\nmaxRecordingInterval,c(),params_general\nextEpochData_timeformat,%d-%m-%Y %H:%M:%S,params_general\ndo.anglex,FALSE,params_metrics\ndo.angley,FALSE,params_metrics\ndo.anglez,TRUE,params_metrics\ndo.zcx,FALSE,params_metrics\ndo.zcy,FALSE,params_metrics\ndo.zcz,FALSE,params_metrics\ndo.enmo,TRUE,params_metrics\ndo.lfenmo,FALSE,params_metrics\ndo.en,FALSE,params_metrics\ndo.mad,FALSE,params_metrics\ndo.enmoa,FALSE,params_metrics\ndo.roll_med_acc_x,FALSE,params_metrics\ndo.roll_med_acc_y,FALSE,params_metrics\ndo.roll_med_acc_z,FALSE,params_metrics\ndo.dev_roll_med_acc_x,FALSE,params_metrics\ndo.dev_roll_med_acc_y,FALSE,params_metrics\ndo.dev_roll_med_acc_z,FALSE,params_metrics\ndo.bfen,FALSE,params_metrics\ndo.hfen,FALSE,params_metrics\ndo.hfenplus,FALSE,params_metrics\ndo.lfen,FALSE,params_metrics\ndo.lfx,FALSE,params_metrics\ndo.lfy,FALSE,params_metrics\ndo.lfz,FALSE,params_metrics\ndo.hfx,FALSE,params_metrics\ndo.hfy,FALSE,params_metrics\ndo.hfz,FALSE,params_metrics\ndo.bfx,FALSE,params_metrics\ndo.bfy,FALSE,params_metrics\ndo.bfz,FALSE,params_metrics\ndo.brondcounts,FALSE,params_metrics\ndo.neishabouricounts,FALSE,params_metrics\nhb,15,params_metrics\nlb,0.2,params_metrics\nn,4,params_metrics\nzc.lb,0.25,params_metrics\nzc.hb,3,params_metrics\nzc.sb,0.01,params_metrics\nzc.order,2,params_metrics\nzc.scale,1,params_metrics\nactilife_LFE,FALSE,params_metrics\nepochvalues2csv,FALSE,params_output\nsave_ms5rawlevels,TRUE,params_output\nsave_ms5raw_format,csv,params_output\nsave_ms5raw_without_invalid,TRUE,params_output\nstorefolderstructure,FALSE,params_output\ntimewindow,WW,params_output\nviewingwindow,1,params_output\ndofirstpage,TRUE,params_output\nvisualreport,TRUE,params_output\nweek_weekend_aggregate.part5,FALSE,params_output\ndo.part3.pdf,TRUE,params_output\noutliers.only,TRUE,params_output\ncriterror,4,params_output\ndo.visual,TRUE,params_output\ndo.sibreport,FALSE,params_output\ndo.part2.pdf,TRUE,params_output\nsep_reports,\",\",params_output\nsep_config,\",\",params_output\nvisualreport_without_invalid,FALSE,params_output\nmvpathreshold,100,params_phyact\nboutcriter,0.8,params_phyact\nmvpadur,\"c(1,5,10)\",params_phyact\nboutcriter.in,0.9,params_phyact\nboutcriter.lig,0.8,params_phyact\nboutcriter.mvpa,0.8,params_phyact\nthreshold.lig,30,params_phyact\nthreshold.mod,100,params_phyact\nthreshold.vig,400,params_phyact\nboutdur.mvpa,\"c(1,5,10)\",params_phyact\nboutdur.in,\"c(1,10,30)\",params_phyact\nboutdur.lig,\"c(1,10,30)\",params_phyact\nfrag.metrics,all,params_phyact\nchunksize,1,params_rawdata\nspherecrit,0.3,params_rawdata\nminloadcrit,72,params_rawdata\nprintsummary,FALSE,params_rawdata\ndo.cal,TRUE,params_rawdata\nbackup.cal.coef,retrieve,params_rawdata\ndynrange,c(),params_rawdata\nminimumFileSizeMB,2,params_rawdata\nrmc.dec,.,params_rawdata\nrmc.firstrow.acc,c(),params_rawdata\nrmc.firstrow.header,c(),params_rawdata\nrmc.header.length,c(),params_rawdata\nrmc.col.acc,\"c(1,2,3)\",params_rawdata\nrmc.col.temp,c(),params_rawdata\nrmc.col.time,c(),params_rawdata\nrmc.unit.acc,g,params_rawdata\nrmc.unit.temp,C,params_rawdata\nrmc.unit.time,POSIX,params_rawdata\nrmc.format.time,%Y-%m-%d %H:%M:%OS,params_rawdata\nrmc.bitrate,c(),params_rawdata\nrmc.dynamic_range,c(),params_rawdata\nrmc.unsignedbit,TRUE,params_rawdata\nrmc.origin,1/1/1970,params_rawdata\nrmc.desiredtz,c(),params_rawdata\nrmc.configtz,c(),params_rawdata\nrmc.sf,c(),params_rawdata\nrmc.headername.sf,c(),params_rawdata\nrmc.headername.sn,c(),params_rawdata\nrmc.headername.recordingid,c(),params_rawdata\nrmc.header.structure,c(),params_rawdata\nrmc.check4timegaps,FALSE,params_rawdata\nrmc.noise,13,params_rawdata\nrmc.col.wear,c(),params_rawdata\nrmc.doresample,FALSE,params_rawdata\ninterpolationType,1,params_rawdata\nimputeTimegaps,TRUE,params_rawdata\nfrequency_tol,0.1,params_rawdata\nrmc.scalefactor.acc,1,params_rawdata\nanglethreshold,5,params_sleep\ntimethreshold,5,params_sleep\nignorenonwear,TRUE,params_sleep\nconstrain2range,TRUE,params_sleep\nHASPT.algo,HDCZA,params_sleep\nHASIB.algo,vanHees2015,params_sleep\nSadeh_axis,,params_sleep\nlongitudinal_axis,c(),params_sleep\nHASPT.ignore.invalid,FALSE,params_sleep\nloglocation,c(),params_sleep\ncolid,1,params_sleep\ncoln1,2,params_sleep\nnnights,c(),params_sleep\nrelyonguider,FALSE,params_sleep\ndef.noc.sleep,1,params_sleep\nsleeplogsep,c(),params_sleep\nsleepwindowType,SPT,params_sleep\npossible_nap_window,\"c(9,18)\",params_sleep\npossible_nap_dur,\"c(15,240)\",params_sleep\n";
const gt = "sleep-scoring:core-answer:", wt = /* @__PURE__ */ new Map();
let vt = null;
function _t(e) {
	if (vt) return vt;
	const t = [];
	vt = t;
	try {
		const n = globalThis.localStorage, a = Array.from({ length: n.length }, (e, t) => n.key(t) ?? "");
		for (const r of a) r.startsWith(gt) && (r.startsWith(`${gt}${e}:`) ? t.push(r) : n.removeItem(r));
	} catch {}
	return t;
}
function St(e, t, n) {
	const a = "5ab175dbf96643a5801d14761b9b2d20ea84df9cdd43bed5c49f3f2e5c289628";
	_t(a);
	const r = `${gt}${a}:${e}:${t}`;
	let i = wt.get(r);
	if (!i && (i = (async () => {
		try {
			const e = globalThis.localStorage?.getItem(r);
			if (e) return JSON.parse(e);
		} catch {}
		const e = await n();
		try {
			globalThis.localStorage?.setItem(r, JSON.stringify(e)), function(e, t) {
				const n = _t(e);
				for (n.includes(t) || n.push(t); n.length > 1e3;) {
					const e = n.shift();
					try {
						e && globalThis.localStorage?.removeItem(e);
					} catch {}
				}
			}(a, r);
		} catch {}
		return e;
	})(), i.catch(() => wt.delete(r)), wt.set(r, i), wt.size > 1e3)) {
		const e = wt.keys().next();
		e.done || wt.delete(e.value);
	}
	return i;
}
const It = Object.freeze({
	name: "default ELEMENT",
	sha256: me(ft),
	csvText: ft
});
function kt(e) {
	const t = e?.ggir_config;
	if (t && "object" == typeof t) {
		const e = t;
		if ("string" == typeof e.name && "string" == typeof e.csvText && "string" == typeof e.sha256 && me(e.csvText) === e.sha256) return e;
	}
	return It;
}
function bt(e, t) {
	const n = /^"?Sadeh_axis"?,\s*"?([XYZ])"?,/m.exec(e)?.[1] ?? "Y";
	return t?.[{
		X: 0,
		Y: 1,
		Z: 2
	}[n]];
}
function Dt(e, t, n) {
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
const Mt = {
	[K.van_hees_2013]: "2013",
	[K.van_hees_2023]: "2023"
};
async function Et(e, t) {
	return St("ggir-part2-nonwear", me(e ?? ""), async () => (await t.ggirAppConfigSummary(e, !0)).applied.nonwearApproach === Mt.van_hees_2013 ? K.van_hees_2013 : K.van_hees_2023);
}
const At = (e) => Symbol.iterator in e, Pt = (e) => "entries" in e, Nt = (e, t) => {
	const n = e instanceof Map ? e : new Map(e.entries()), a = t instanceof Map ? t : new Map(t.entries());
	if (n.size !== a.size) return !1;
	for (const [r, i] of n) if (!a.has(r) || !Object.is(i, a.get(r))) return !1;
	return !0;
};
var Ot = e(B(), 1);
function xt(e) {
	const t = Ot.useRef(void 0);
	return (n) => {
		const a = e(n);
		return r = t.current, i = a, Object.is(r, i) || "object" == typeof r && null !== r && "object" == typeof i && null !== i && Object.getPrototypeOf(r) === Object.getPrototypeOf(i) && (At(r) && At(i) ? Pt(r) && Pt(i) ? Nt(r, i) : ((e, t) => {
			const n = e[Symbol.iterator](), a = t[Symbol.iterator]();
			let r = n.next(), i = a.next();
			for (; !r.done && !i.done;) {
				if (!Object.is(r.value, i.value)) return !1;
				r = n.next(), i = a.next();
			}
			return !!r.done && !!i.done;
		})(r, i) : Nt({ entries: () => Object.entries(r) }, { entries: () => Object.entries(i) })) ? t.current : t.current = a;
		var r, i;
	};
}
const Tt = {
	setTimeout: (e, t) => setTimeout(e, t),
	clearTimeout: (e) => clearTimeout(e),
	setInterval: (e, t) => setInterval(e, t),
	clearInterval: (e) => clearInterval(e)
}, Ft = new class {
	#e = Tt;
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
}(), Ct = "undefined" == typeof window || "Deno" in globalThis;
function Rt() {}
function Ht(e, t) {
	return "function" == typeof e ? e(t) : e;
}
function Lt(e, t) {
	const { type: n = "all", exact: a, fetchStatus: r, predicate: i, queryKey: s, stale: o } = e;
	if (s) {
		if (a) {
			if (t.queryHash !== Kt(s, t.options)) return !1;
		} else if (!Gt(t.queryKey, s)) return !1;
	}
	if ("all" !== n) {
		const e = t.isActive();
		if ("active" === n && !e) return !1;
		if ("inactive" === n && e) return !1;
	}
	return !("boolean" == typeof o && t.isStale() !== o || r && r !== t.state.fetchStatus || i && !i(t));
}
function jt(e, t) {
	const { exact: n, status: a, predicate: r, mutationKey: i } = e;
	if (i) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (qt(t.options.mutationKey) !== qt(i)) return !1;
		} else if (!Gt(t.options.mutationKey, i)) return !1;
	}
	return !(a && t.state.status !== a || r && !r(t));
}
function Kt(e, t) {
	return (t?.queryKeyHashFn || qt)(e);
}
function qt(e) {
	return JSON.stringify(e, (e, t) => zt(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t);
}
function Gt(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (e && t && "object" == typeof e && "object" == typeof t) {
		if (Array.isArray(e) && Array.isArray(t)) {
			for (let n = 0; n < t.length; n++) if (!Gt(e[n], t[n])) return !1;
			return !0;
		}
		const n = Object.keys(t);
		for (const a of n) if (!Gt(e[a], t[a])) return !1;
		return !0;
	}
	return !1;
}
const Ut = Object.prototype.hasOwnProperty;
function Vt(e, t, n = 0) {
	if (e === t) return e;
	if (n > 500) return t;
	const a = Bt(e) && Bt(t);
	if (!(a || zt(e) && zt(t))) return t;
	const r = (a ? e : Object.keys(e)).length, i = a ? t : Object.keys(t), s = i.length, o = a ? new Array(s) : {};
	let l = 0;
	for (let c = 0; c < s; c++) {
		const s = a ? c : i[c], d = e[s], u = t[s];
		if (d === u) {
			o[s] = d, (a ? c < r : Ut.call(e, s)) && l++;
			continue;
		}
		if (null === d || null === u || "object" != typeof d || "object" != typeof u) {
			o[s] = u;
			continue;
		}
		const p = Vt(d, u, n + 1);
		o[s] = p, p === d && l++;
	}
	return r === s && l === r ? e : o;
}
function Bt(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function zt(e) {
	if (!Wt(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	const n = t.prototype;
	return !!Wt(n) && !!n.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype;
}
function Wt(e) {
	return "[object Object]" === Object.prototype.toString.call(e);
}
function $t(e, t, n) {
	return "function" == typeof n.structuralSharing ? n.structuralSharing(e, t) : !1 !== n.structuralSharing ? Vt(e, t) : t;
}
function Qt(e, t, n = 0) {
	const a = [...e, t];
	return n && a.length > n ? a.slice(1) : a;
}
function Jt(e, t, n = 0) {
	const a = [t, ...e];
	return n && a.length > n ? a.slice(0, -1) : a;
}
const Yt = Symbol();
function Xt(e, t) {
	return !e.queryFn && t?.initialPromise ? () => t.initialPromise : e.queryFn && e.queryFn !== Yt ? e.queryFn : () => Promise.reject(/* @__PURE__ */ new Error(`Missing queryFn: '${e.queryHash}'`));
}
const Zt = () => Ct;
var en = class {
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
const tn = new class extends en {
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
}(), nn = function(e) {
	setTimeout(e, 0);
}, an = function() {
	let e = [], t = 0, n = (e) => {
		e();
	}, a = (e) => {
		e();
	}, r = nn;
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
}(), rn = new class extends en {
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
function sn(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function on(e) {
	return "online" !== (e ?? "online") || rn.isOnline();
}
var ln = class extends Error {
	constructor(e) {
		super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
	}
};
function cn(e) {
	let t, n, a, r = !1, i = 0, s = "pending";
	const o = new Promise((e, t) => {
		n = e, a = t;
	});
	o.catch(Rt);
	const l = () => "pending" !== s, c = () => tn.isFocused() && ("always" === e.networkMode || rn.isOnline()) && e.canRun(), d = () => on(e.networkMode) && e.canRun(), u = (e) => {
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
			const n = e.retry ?? (Zt() ? 0 : 3), a = e.retryDelay ?? sn, s = "function" == typeof a ? a(i, t) : a, o = !0 === n || "number" == typeof n && i < n || "function" == typeof n && n(i, t);
			var d;
			!r && o ? (i++, e.onFail?.(i, t), (d = s, new Promise((e) => {
				Ft.setTimeout(e, d);
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
				const n = new ln(t);
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
var dn = class {
	#s;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		var e;
		this.clearGcTimeout(), "number" == typeof (e = this.gcTime) && e >= 0 && e !== 1 / 0 && (this.#s = Ft.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime));
	}
	updateGcTime(e) {
		this.gcTime = Math.max(this.gcTime || 0, e ?? (Zt() ? 1 / 0 : 3e5));
	}
	clearGcTimeout() {
		void 0 !== this.#s && (Ft.clearTimeout(this.#s), this.#s = void 0);
	}
};
function un(e) {
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
			}, d = Xt(t.options, t.fetchOptions), u = async (e, a, r) => {
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
				})(), s = await d(i), { maxPages: o } = t.options, l = r ? Jt : Qt;
				return {
					pages: l(e.pages, s, o),
					pageParams: l(e.pageParams, a, o)
				};
			};
			if (r && i.length) {
				const e = "backward" === r, t = e ? mn : pn, n = {
					pages: i,
					pageParams: s
				};
				o = await u(n, t(a, n), e);
			} else {
				const t = e ?? i.length;
				do {
					const e = 0 === l ? s[0] ?? a.initialPageParam : pn(a, o);
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
function pn(e, { pages: t, pageParams: n }) {
	const a = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[a], t, n[a], n) : void 0;
}
function mn(e, { pages: t, pageParams: n }) {
	return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var hn = class extends dn {
	#o;
	#l;
	#c;
	#d;
	#u;
	#p;
	#m;
	#h;
	constructor(e) {
		super(), this.#h = !1, this.#m = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#u = e.client, this.#d = this.#u.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#l = fn(this.options), this.state = e.state ?? this.#l, this.scheduleGc();
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
			const e = fn(this.options);
			void 0 !== e.data && (this.setState(yn(e.data, e.dataUpdatedAt)), this.#l = e);
		}
	}
	optionalRemove() {
		this.observers.length || "idle" !== this.state.fetchStatus || this.#d.remove(this);
	}
	setData(e, t) {
		const n = $t(this.state.data, e, this.options);
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
		return this.#p?.cancel(e), t ? t.then(Rt).catch(Rt) : Promise.resolve();
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
		return this.observers.some((e) => !1 !== Ht(e.options.enabled, this));
	}
	isDisabled() {
		return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Yt || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		return this.getObserversCount() > 0 && this.observers.some((e) => "static" === Ht(e.options.staleTime, this));
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
			const e = Xt(this.options, t), n = (() => {
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
		("infinite" === this.#o ? un(this.options.pages) : this.options.behavior)?.onFetch(i, this), this.#c = this.state, "idle" !== this.state.fetchStatus && this.state.fetchMeta === i.fetchOptions?.meta || this.#y({
			type: "fetch",
			meta: i.fetchOptions?.meta
		});
		const s = this.#p = cn({
			initialPromise: t?.initialPromise,
			fn: i.fetchFn,
			onCancel: (e) => {
				e instanceof ln && e.revert && this.setState({
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
			if (o instanceof ln) {
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
						fetchStatus: on(a.networkMode) ? "fetching" : "paused",
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
						...yn(e.data, e.dataUpdatedAt),
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
		})(this.state), an.batch(() => {
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
function yn(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success"
	};
}
function fn(e) {
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
var gn = class extends dn {
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
		}, a = this.#p = cn({
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
		})(this.state), an.batch(() => {
			this.#f.forEach((t) => {
				t.onMutationUpdate(e);
			}), this.#g.notify({
				mutation: this,
				type: "updated",
				action: e
			});
		});
	}
}, wn = class extends en {
	#w;
	#v;
	#_;
	constructor(e = {}) {
		super(), this.config = e, this.#w = /* @__PURE__ */ new Set(), this.#v = /* @__PURE__ */ new Map(), this.#_ = 0;
	}
	build(e, t, n) {
		const a = new gn({
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
		const t = vn(e);
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
			const t = vn(e);
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
		const t = vn(e);
		if ("string" == typeof t) {
			const n = this.#v.get(t)?.find((e) => "pending" === e.state.status);
			return !n || n === e;
		}
		return !0;
	}
	runNext(e) {
		const t = vn(e);
		return "string" == typeof t ? (this.#v.get(t)?.find((t) => t !== e && t.state.isPaused))?.continue() ?? Promise.resolve() : Promise.resolve();
	}
	clear() {
		an.batch(() => {
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
		return this.getAll().find((e) => jt(t, e));
	}
	findAll(e = {}) {
		return this.getAll().filter((t) => jt(e, t));
	}
	notify(e) {
		an.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	resumePausedMutations() {
		const e = this.getAll().filter((e) => e.state.isPaused);
		return an.batch(() => Promise.all(e.map((e) => e.continue().catch(Rt))));
	}
};
function vn(e) {
	return e.options.scope?.id;
}
var _n = class extends en {
	#S;
	constructor(e = {}) {
		super(), this.config = e, this.#S = /* @__PURE__ */ new Map();
	}
	build(e, t, n) {
		const a = t.queryKey, r = t.queryHash ?? Kt(a, t);
		let i = this.get(r);
		return i || (i = new hn({
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
		an.batch(() => {
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
		return this.getAll().find((e) => Lt(t, e));
	}
	findAll(e = {}) {
		const t = this.getAll();
		return Object.keys(e).length > 0 ? t.filter((t) => Lt(e, t)) : t;
	}
	notify(e) {
		an.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	onFocus() {
		an.batch(() => {
			this.getAll().forEach((e) => {
				e.onFocus();
			});
		});
	}
	onOnline() {
		an.batch(() => {
			this.getAll().forEach((e) => {
				e.onOnline();
			});
		});
	}
};
const Sn = new class {
	#I;
	#g;
	#m;
	#k;
	#b;
	#D;
	#M;
	#E;
	constructor(e = {}) {
		this.#I = e.queryCache || new _n(), this.#g = e.mutationCache || new wn(), this.#m = e.defaultOptions || {}, this.#k = /* @__PURE__ */ new Map(), this.#b = /* @__PURE__ */ new Map(), this.#D = 0;
	}
	mount() {
		this.#D++, 1 === this.#D && (this.#M = tn.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#I.onFocus());
		}), this.#E = rn.subscribe(async (e) => {
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
		return void 0 === a ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Ht(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(a));
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
		return an.batch(() => this.#I.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]));
	}
	getQueryState(e) {
		const t = this.defaultQueryOptions({ queryKey: e });
		return this.#I.get(t.queryHash)?.state;
	}
	removeQueries(e) {
		const t = this.#I;
		an.batch(() => {
			t.findAll(e).forEach((e) => {
				t.remove(e);
			});
		});
	}
	resetQueries(e, t) {
		const n = this.#I;
		return an.batch(() => {
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
		}, a = an.batch(() => this.#I.findAll(e).map((e) => e.cancel(n)));
		return Promise.all(a).then(Rt).catch(Rt);
	}
	invalidateQueries(e, t = {}) {
		return an.batch(() => (this.#I.findAll(e).forEach((e) => {
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
		}, a = an.batch(() => this.#I.findAll(e).filter((e) => !e.isDisabled() && !e.isStatic()).map((e) => {
			let t = e.fetch(void 0, n);
			return n.throwOnError || (t = t.catch(Rt)), "paused" === e.state.fetchStatus ? Promise.resolve() : t;
		}));
		return Promise.all(a).then(Rt);
	}
	async query(e) {
		const t = this.defaultQueryOptions(e);
		void 0 === t.retry && (t.retry = !1);
		const n = this.#I.build(this, t), a = n.isStaleByTime(Ht(t.staleTime, n)) ? await n.fetch(t) : n.state.data, r = t.select;
		return r ? r(a) : a;
	}
	fetchQuery(e) {
		const t = this.defaultQueryOptions(e);
		void 0 === t.retry && (t.retry = !1);
		const n = this.#I.build(this, t);
		return n.isStaleByTime(Ht(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
	}
	prefetchQuery(e) {
		return this.fetchQuery(e).then(Rt).catch(Rt);
	}
	infiniteQuery(e) {
		return e._type = "infinite", this.query(e);
	}
	fetchInfiniteQuery(e) {
		return e._type = "infinite", this.fetchQuery(e);
	}
	prefetchInfiniteQuery(e) {
		return this.fetchInfiniteQuery(e).then(Rt).catch(Rt);
	}
	ensureInfiniteQueryData(e) {
		return e._type = "infinite", this.ensureQueryData(e);
	}
	resumePausedMutations() {
		return rn.isOnline() ? this.#g.resumePausedMutations() : Promise.resolve();
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
		this.#k.set(qt(e), {
			queryKey: e,
			defaultOptions: t
		});
	}
	getQueryDefaults(e) {
		const t = [...this.#k.values()], n = {};
		return t.forEach((t) => {
			Gt(e, t.queryKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	setMutationDefaults(e, t) {
		this.#b.set(qt(e), {
			mutationKey: e,
			defaultOptions: t
		});
	}
	getMutationDefaults(e) {
		const t = [...this.#b.values()], n = {};
		return t.forEach((t) => {
			Gt(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
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
		return t.queryHash || (t.queryHash = Kt(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Yt && (t.enabled = !1), t;
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
} } }), In = [
	"currentFileId",
	"currentFilename",
	"currentDateIndex",
	"displayColumnChosenByUser",
	..._
];
function kn(e) {
	const t = X();
	return t ? `sleep-scoring-prefs-${t}-${e}` : `sleep-scoring-user-prefs-${e}`;
}
const bn = {
	preset: "default",
	onset: "#0080FF",
	offset: "#FF8000",
	sleepOverlay: "#00A99D",
	nonwear: "#DC143C",
	sensorNonwear: "#FFD700",
	choiNonwear: "#8B3FA8",
	activityLine: "#0EA5E9"
}, Dn = {
	default: bn,
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
}, Mn = (new RegExp(`\\b(?:${[
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
].join("|")})\\b`), Object.values(L.errnames), []), En = /* @__PURE__ */ new Set([
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
]), An = /* @__PURE__ */ new Set(["error_type", "has_context"]), Pn = /* @__PURE__ */ new Set([
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
function Nn(e, t, n) {
	const a = function(e) {
		if (!e) return;
		const t = {};
		for (const [n, a] of Object.entries(e)) An.has(n) && ("has_context" === n && "boolean" == typeof a && (t[n] = a), "error_type" === n && "string" == typeof a && (t[n] = Pn.has(a) ? a : "Error"));
		return Object.keys(t).length > 0 ? t : void 0;
	}(n);
	Mn.push({
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		level: e,
		message: En.has(t) ? t : "Diagnostic event",
		...a ? { context: a } : {}
	}), Mn.length > 500 && Mn.splice(0, Mn.length - 500);
}
function On(e) {
	return { error_type: e instanceof Error ? e.name : typeof e };
}
const xn = "__ui_state";
function Tn() {
	return !Fn && ne();
}
let Fn = !1;
function Cn(e) {
	Fn = !0;
	try {
		return e();
	} finally {
		Fn = !1;
	}
}
function Rn(e) {
	return e ? `sleep-scoring-storage-${e}` : "sleep-scoring-storage";
}
function Hn(e) {
	try {
		return localStorage.getItem(Rn(e));
	} catch {
		return null;
	}
}
function Ln(e) {
	try {
		localStorage.removeItem(Rn(e));
	} catch {}
}
function jn(e) {
	return `${Rn(e)}:pending`;
}
let Kn = null;
function qn(e) {
	try {
		return localStorage.getItem(jn(e));
	} catch {
		return null;
	}
}
function Gn(e) {
	try {
		const t = JSON.parse(e), n = t?.state;
		if (null != n && "object" == typeof n && "sitePassword" in n) return delete n.sitePassword, JSON.stringify(t);
	} catch {}
	return e;
}
async function Un(e) {
	return e.studySettings.where("key").equals(xn).first();
}
"undefined" != typeof window && window.addEventListener("pagehide", function() {
	if (null !== Kn) try {
		localStorage.setItem(jn(Kn.workspaceId), Kn.value);
	} catch {}
});
const Vn = /* @__PURE__ */ new WeakMap();
async function Bn(e, t) {
	const n = async function(e, t) {
		await e.transaction("rw", e.studySettings, async () => {
			const n = await Un(e);
			n?.id ? await e.studySettings.update(n.id, {
				extraSettings: { [y]: t },
				lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
			}) : await e.studySettings.add({
				key: xn,
				sleepDetectionRule: "",
				nightStartHour: "",
				nightEndHour: "",
				defaultAlgorithm: "",
				extraSettings: { [y]: t },
				contentHash: "",
				lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
			});
		});
	}(e, t);
	Vn.set(e, {
		value: t,
		pending: n
	});
	try {
		await n;
	} catch (a) {
		throw Vn.get(e)?.pending === n && Vn.delete(e), a;
	}
}
const zn = {
	getItem: async (e) => {
		if (!Tn()) return null;
		const t = X(), n = qn(t);
		try {
			const e = se();
			if (null != n) {
				const a = Gn(n);
				await Bn(e, a);
				try {
					const e = jn(t);
					localStorage.getItem(e) === n && localStorage.removeItem(e);
				} catch {}
				return Ln(t), a;
			}
			const a = (await Un(e))?.extraSettings[y];
			if ("string" == typeof a) return Ln(t), Gn(a);
			const r = await async function(e) {
				const t = await e.studySettings.where("key").equals("study").first(), n = t?.extraSettings[y];
				if ("string" != typeof n || !t?.id) return null;
				const a = Gn(n);
				await Bn(e, a);
				const { [y]: r, ...i } = t.extraSettings;
				return await e.studySettings.update(t.id, { extraSettings: i }), a;
			}(e);
			if (null !== r) return Ln(t), r;
			const i = Hn(t);
			if (null != i) {
				const n = Gn(i);
				return await Bn(e, n), Ln(t), n;
			}
			return null;
		} catch (a) {
			return Nn("warn", "Persisted store hydration from the workspace row failed", On(a)), null !== n ? Gn(n) : Hn(t);
		}
	},
	setItem: async (e, t) => {
		if (!Tn()) return;
		const n = {
			workspaceId: X(),
			value: t
		}, a = qn(n.workspaceId);
		Kn = n;
		try {
			const e = se(), r = Vn.get(e);
			if (r?.value === t ? await r.pending : await Bn(e, t), Kn === n) {
				Kn = null;
				try {
					const e = qn(n.workspaceId);
					e !== a && e !== t || localStorage.removeItem(jn(n.workspaceId));
				} catch {}
			}
		} catch (r) {
			if (Nn("warn", "Persisted store write to the workspace row failed; falling back to the device sink", On(r)), Kn !== n) return;
			try {
				localStorage.setItem(jn(n.workspaceId), t);
			} catch (i) {
				Nn("warn", "Persisted store write has no sink; this session's settings will not survive", On(i));
			}
		}
	},
	removeItem: async (e) => {
		const t = X();
		Ln(t);
		try {
			localStorage.removeItem(jn(t));
		} catch {}
		if (Kn?.workspaceId === t && (Kn = null), Tn()) try {
			const e = se();
			Vn.delete(e);
			const t = await Un(e);
			if (!t?.id) return;
			const { [y]: n, ...a } = t.extraSettings;
			await e.studySettings.update(t.id, { extraSettings: a });
		} catch (n) {
			Nn("warn", "Persisted store clear on the workspace row failed", On(n));
		}
	}
};
function Wn(e) {
	const t = "string" == typeof e.algoKey ? U(e.algoKey) : null;
	if (null !== t) return {
		algoKey: t,
		algoVersion: V(t),
		paramsHash: ""
	};
	const n = Ge(e.cubeConfig);
	return null === n ? null : {
		algoKey: n.cellId,
		algoVersion: n.implementationVersion,
		paramsHash: n.configHash
	};
}
const $n = "Scores were computed with different settings, so this night can't be auto-scored. Manual scoring still works.";
function Qn(e) {
	return u.some((t) => e.startsWith(t));
}
function Jn(e, t) {
	const n = "string" == typeof t ? t : "recordedCellId" in t ? t.recordedCellId : t.id, a = e.map((e) => (e?.algorithmResults)?.[n]);
	if (!Qn(n)) return {
		status: "ok",
		outputs: a,
		configHash: null
	};
	let r = null, i = "string" != typeof t && "recordedCellId" in t;
	if ("string" == typeof t) {
		const e = Le(n);
		r = e?.configHash ?? null, i = void 0 === e;
	} else if (!("recordedCellId" in t)) {
		const e = Ge(t);
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
function Yn(e) {
	const t = {};
	for (const n of Object.keys(e.algorithmResults ?? {})) t[n] = !0;
	return {
		...void 0 === e.date ? {} : { date: e.date },
		algorithmResults: t,
		algorithmResultHashes: e.algorithmResultHashes
	};
}
function Xn(e) {
	return e || "";
}
function Zn(e, t) {
	return ta(ea(e), t);
}
function ea(e) {
	return [...e].filter((e) => void 0 !== e).map(Yn).sort((e, t) => (e.date ?? "").localeCompare(t.date ?? ""));
}
function ta(e, t) {
	const n = Xn(t) || e.map((e) => Object.keys(e.algorithmResults)[0]).find((e) => void 0 !== e) || null;
	return null === n ? {
		key: n,
		status: "ok",
		configHash: null
	} : (() => {
		const t = Jn(e, n);
		return "stale" === t.status ? {
			key: n,
			status: "stale",
			reason: $n
		} : {
			key: n,
			status: "ok",
			configHash: t.configHash
		};
	})();
}
const na = Zn([]);
function aa(e) {
	const t = ea(e), n = /* @__PURE__ */ new Map(), a = [...new Set(t.flatMap((e) => Object.keys(e.algorithmResults)))].filter(Qn);
	return Object.assign((e) => {
		const a = Xn(e);
		let r = n.get(a);
		return r || (r = ta(t, e), n.set(a, r)), r;
	}, { cellIds: a });
}
function ra(e, t) {
	if ("stale" === t.status) return {
		status: "stale",
		reason: t.reason
	};
	if (null === t.key) return {
		status: "ok",
		key: null,
		outputs: e.map(() => {})
	};
	const n = Jn(e, t.key);
	return "stale" === n.status || null !== n.configHash && null !== t.configHash && n.configHash !== t.configHash ? {
		status: "stale",
		reason: $n
	} : {
		status: "ok",
		key: t.key,
		outputs: n.outputs
	};
}
function ia(e) {
	const t = {
		algorithmResults: e?.algorithmResults ?? {},
		algorithmResultHashes: e?.algorithmResultHashes
	};
	return Object.keys(t.algorithmResults).flatMap((e) => {
		const n = Jn([t], Qn(e) ? { recordedCellId: e } : e), a = "ok" === n.status ? n.outputs[0] : void 0;
		return void 0 === a ? [] : [[e, a]];
	});
}
function sa(e, t) {
	const n = {};
	for (const [a, r] of Object.entries(e ?? {})) {
		const e = t(r, a);
		void 0 !== e && (n[a] = e);
	}
	return n;
}
function oa(e) {
	const t = {}, n = {};
	for (const { cubeConfig: a, results: r } of e ?? []) {
		const e = Ge(a);
		if (null === e) throw new Error(`Refused a cube output for ${a.id}: not a planned config`);
		t[e.cellId] = r.slice(0), n[e.cellId] = e.configHash;
	}
	return {
		algorithmResults: t,
		algorithmResultHashes: n
	};
}
function la(e) {
	const t = e?.timestamps, n = t ? new Float64Array(t) : /* @__PURE__ */ new Float64Array(0), a = 0 === n.length ? e?.ggirTimestamps : void 0, r = Boolean(a?.byteLength), i = r ? e?.ggirSib : void 0;
	return {
		timestamps: r ? new Float64Array(a) : n,
		epochSec: r ? 5 : 60,
		sleepScores: i?.byteLength ? new Uint8Array(i) : null,
		ggir: r
	};
}
function ca(e) {
	return null != e && "" !== e;
}
function da(e) {
	return ca(e.start) || ca(e.end);
}
function ua(e) {
	return ca(e.start) || ca(e.end);
}
function pa(e) {
	return Array.isArray(e.naps) ? e.naps.map((e) => ({
		start: e.start ?? null,
		end: e.end ?? null
	})).filter(da) : [
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
	].filter(da);
}
function ma(e) {
	return Array.isArray(e.nonwearWindows) ? e.nonwearWindows.map((e) => ({
		start: e.start ?? null,
		end: e.end ?? null,
		reason: e.reason ?? null
	})).filter(ua) : [
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
	].filter(ua);
}
const ha = ot.map((e) => ({
	key: e.key,
	label: e.label,
	dateTargetKey: e.date_target_key,
	timeTargetKey: e.time_target_key,
	datetimeTargetKey: e.datetime_target_key,
	required: e.required,
	temporalRole: e.temporal_role
}));
function ya(e) {
	return "morning_offset" === e.temporalRole ? q.sleep_date_chronology : q.sleep_date_same_day;
}
function fa(e) {
	const t = ct(e.key);
	return "nap" === t?.family ? le.naps : "nonwear" === t?.family ? le.nonwear : le.main_sleep;
}
(function(e, t = ha) {
	const n = {};
	for (const a of t) {
		const t = e[fa(a)];
		n[a.key] = t === ce.night_date || t === ce.period_start_day ? ya(a) : q.explicit_only;
	}
	return {
		dateRules: n,
		pendingGroups: Object.keys(e).filter((t) => e[t] === ce.ask_per_night).sort()
	};
})(Object.freeze({
	[le.main_sleep]: x.diary_main_sleep_date_rule,
	[le.naps]: x.diary_nap_date_rule,
	[le.nonwear]: x.diary_nonwear_date_rule
})).dateRules, x.diary_day_boundary_hour, x.diary_dst_fold_policy, x.diary_dst_gap_policy, new Set(ha.flatMap((e) => [
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
const ga = Object.freeze({
	in_bed: "diaryInBedTime",
	sleep_onset: "diaryOnsetTime",
	sleep_offset: "diaryWakeTime",
	out_of_bed: "diaryOutOfBedTime"
}), wa = /* @__PURE__ */ new Map(), va = /* @__PURE__ */ new Set();
let _a = 0;
function Sa(e, t) {
	const n = t?.diaryTemporalPolicy;
	var a, r;
	void 0 !== n && Number.isFinite(e) && (r = n, (void 0 === (a = wa.get(e)) || a.dayBoundaryHour !== r.dayBoundaryHour || a.mainSleepDateRule !== r.mainSleepDateRule || a.napDateRule !== r.napDateRule || a.nonwearDateRule !== r.nonwearDateRule || a.dstFoldPolicy !== r.dstFoldPolicy || a.dstGapPolicy !== r.dstGapPolicy) && (wa.set(e, n), function() {
		_a += 1;
		for (const e of va) e();
	}()));
}
function Ia(e) {
	return (null == e ? void 0 : wa.get(e)) ?? function() {
		const e = No.getState(), t = e;
		for (const n of I) {
			if (!n.startsWith("diary_")) continue;
			const e = A[n].storeKeys.zustand;
			if (!e || null !== f(n, t[e])) throw new Error("The persisted study configuration has an incomplete diary temporal policy.");
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
function ka(e) {
	return {
		dayStartHour: Ia(e).dayBoundaryHour,
		morningOffsetPadHours: lt.morningOffsetPadHours
	};
}
function ba(e) {
	return pa(e).map((e) => [e.start, e.end]);
}
function Da(e) {
	return ma(e).map((e) => [e.start, e.end]);
}
function Ma(e, t) {
	return null == e ? null : t.wireClock(e);
}
const Ea = /* @__PURE__ */ new WeakMap();
function Aa(e, t) {
	Ea.get(t)?.delete(e);
}
async function Pa(e, t, n) {
	const a = t ?? se(), [r, i] = await Promise.all([Ki(e, a), n ?? bi(e, a).then((e) => e?.seriesRevision ?? 0)]);
	if (0 === r.length) return null;
	const s = `${i}|${r.length}|${r[0]}|${r[r.length - 1]}`;
	let o = Ea.get(a);
	const l = o?.get(e);
	if (l && l.dateKey === s) return l.promise;
	o || (o = /* @__PURE__ */ new Map(), Ea.set(a, o));
	const c = o, d = async function(e, t, n) {
		const [a, r] = await Promise.all([Li(e, t[0], n), Li(e, t[t.length - 1], n)]);
		if (!a || !r) return null;
		const i = la(a).timestamps, s = la(r).timestamps;
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
function Na(e, t, n) {
	if (Sa(e.fileId, e.importMappingProvenance), null === t) return e;
	const a = {
		diaryInBedTime: e.diaryInBedTime ?? null,
		diaryOnsetTime: e.diaryOnsetTime ?? null,
		diaryWakeTime: e.diaryWakeTime ?? null
	}, { ampm_search_gap_min_hours: r, ampm_search_gap_max_hours: i, ampm_search_window_margin_hours: s } = st.ampmSearchHours, o = n.correctDiaryAmPm({
		inBed: a.diaryInBedTime,
		onset: a.diaryOnsetTime,
		wake: a.diaryWakeTime,
		onsetAnchor: dt.onset.map(({ tsField: e }) => a[e]).find(Boolean) ?? null,
		baseDate: e.analysisDate,
		spanMs: [t.start, t.end],
		geometry: ka(e.fileId),
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
function Oa(e, t, n) {
	return it((n) => Na(e, t, n), new ut(n));
}
function xa(e, t, n) {
	return it((n) => e.map((e) => Na(e, t, n)), new ut(n));
}
const Ta = {
	diary_in_bed_time: (e) => e.diaryInBedTime,
	diary_onset_time: (e) => e.diaryOnsetTime,
	diary_wake_time: (e) => e.diaryWakeTime,
	diary_out_of_bed_time: (e) => e.diaryOutOfBedTime
};
function Fa(e, t) {
	if (!e) return null;
	const n = e.decisionOverlayJson?.[t];
	if ("string" == typeof n && "" !== n) return n;
	const a = e.ampmCorrectionsJson?.[t];
	if ("string" == typeof a && "" !== a) return a;
	const r = Ta[t](e);
	return "string" == typeof r && "" !== r ? r : null;
}
async function Ca(e, t, a = n()) {
	const r = [
		"diary_in_bed_time",
		"diary_out_of_bed_time",
		"diary_onset_time",
		"diary_wake_time"
	], i = [...e].flatMap((e) => r.map((t) => null === Fa(e, t) ? 0 : 1));
	return St("ggirDiaryLogShape", `${t ?? ""}:${i.join("")}`, () => a.ggirDiaryLogShape(Uint8Array.from(i), t));
}
function Ra(e, t) {
	for (const n of dt[e]) {
		const e = Fa(t, n.dbColumn);
		if (null !== e) return e;
	}
	return null;
}
function Ha(e) {
	return Ra("onset", e);
}
function La(e) {
	return Ra("wake", e);
}
function ja(e) {
	return Ra("in_bed", e);
}
function Ka(e) {
	return Ra("out_bed", e);
}
function qa(e, t) {
	return `${e}|${t}`;
}
const Ga = [
	"diaryEntries",
	"stagedDiaryEntries",
	"diaryOccurrences"
];
var Ua = class {
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
		const e = Object.fromEntries(Ga.map((e) => {
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
function Va(e, t) {
	const n = new Ua(e);
	for (const a of t) {
		for (const { store: e, change: t, ...r } of a.rows) n.row(e, t, r);
		for (const e of a.rejected) n.reject(e);
	}
	return n.build();
}
var Ba = class extends Error {
	constructor() {
		super("An earlier audit record is still being written. No diary rows were changed; try again."), this.name = "DiaryAuditPendingError";
	}
};
function za(e, t) {
	if (t) return t;
	const { username: n, selectedStudyId: a } = No.getState();
	return Ye.captureWorkspaceBinding(e, {
		username: n,
		studyId: a
	});
}
async function Wa(e, t) {
	if (!await Ye.settleWritesForDb(e, t)) throw new Ba();
}
async function $a(e, t, n = []) {
	const a = async (e) => {
		if (!await e) throw new Ba();
	}, r = /* @__PURE__ */ new Map();
	for (const s of e.rows) "diaryEntries" === s.store && "deleted" !== s.change && null !== s.fileId && null !== s.analysisDate && r.set(s.fileId, [...r.get(s.fileId) ?? [], s.analysisDate]);
	const i = e.counts.stagedDiaryEntries;
	switch (e.operation) {
		case "import":
		case "attach":
		case "attach_chosen":
		case "move": {
			await (async () => {
				for (const [n, i] of r) await a(Ye.recordFileEventDurably({
					fileId: n,
					analysisDate: [...i].sort()[0],
					action: j.DIARY_ATTACHED,
					payload: {
						sourceKey: null,
						matchBasis: "attach_chosen" === e.operation ? "user_chosen_target" : "local_file_identity",
						entryCount: i.length
					}
				}, t));
			})();
			const s = e.rows.filter((e) => "diaryOccurrences" === e.store && "added" === e.change && null === e.analysisDate).length;
			(i.added + i.replaced > 0 || s > 0) && "attach" !== e.operation && "attach_chosen" !== e.operation && await a(Ye.recordWorkspaceBoundDurably(t, j.DIARY_STAGED, {
				staged: i.added + i.replaced,
				replaced: i.replaced,
				skipped: e.rejected.length,
				...s > 0 ? { occurrenceRecords: s } : {}
			}));
			const o = function(e) {
				return new Set(e.rows.flatMap((e) => "deleted" !== e.change && "diaryOccurrences" !== e.store && null !== e.analysisDate ? [qa(l(e.sourceKey?.trim() ? e.sourceKey : `file:${String(e.fileId)}`), e.analysisDate)] : []));
			}(e), c = n.filter((e) => o.has(e.entryKey));
			c.length > 0 && await a(Ye.recordWorkspaceBoundDurably(t, j.DIARY_REPAIRED, {
				applied: c.length,
				fields: [...new Set(c.map((e) => e.field))].sort()
			}));
			return;
		}
		case "delete":
		case "workspace_clear":
			"workspace_clear" === e.operation && await a(Ye.recordWorkspaceBoundDurably(t, j.DIARY_WORKSPACE_CLEARED, {
				staged: e.counts.stagedDiaryEntries.deleted,
				canonical: e.counts.diaryEntries.deleted,
				occurrences: e.counts.diaryOccurrences.deleted
			}));
			for (const n of e.rows) "stagedDiaryEntries" === n.store && "deleted" === n.change && await a(Ye.recordWorkspaceBoundDurably(t, j.DIARY_DISCARDED, {
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
he.TIMESTAMP_MS, he.AXIS_X, he.AXIS_Y, he.AXIS_Z, he.VECTOR_MAGNITUDE, he.TEMPERATURE;
let Qa = null;
async function Ja(e) {
	if ("undefined" != typeof navigator && navigator.storage?.getDirectory) try {
		await (await async function() {
			return (await (Qa || (Qa = "undefined" != typeof navigator && navigator.storage?.getDirectory ? navigator.storage.getDirectory() : Promise.reject(/* @__PURE__ */ new Error("OPFS is not available in this browser"))), Qa)).getDirectoryHandle("activity_v5", { create: !1 });
		}()).removeEntry(function(e) {
			return `${e}.arrow`;
		}(e));
	} catch (t) {
		if (t instanceof DOMException && "NotFoundError" === t.name) return;
		throw t;
	}
}
const Ya = Uint8Array.of(83, 67, 68, 49), Xa = ".arrow";
function Za(e) {
	const t = JSON.stringify({
		v: "v6",
		choiAxis: e.choiAxis,
		extras: e.extras ?? {}
	});
	let n = 2166136261;
	for (let a = 0; a < t.length; a++) n ^= t.charCodeAt(a), n = Math.imul(n, 16777619) >>> 0;
	return n.toString(16).padStart(8, "0");
}
let er = null;
async function tr(e = !1) {
	return (await (er || (er = "undefined" != typeof navigator && navigator.storage?.getDirectory ? navigator.storage.getDirectory() : Promise.reject(/* @__PURE__ */ new Error("OPFS is not available in this browser"))), er)).getDirectoryHandle("scored", { create: e });
}
function nr(e, t) {
	return `${e}__${t}${Xa}`;
}
function ar() {
	return "undefined" != typeof navigator && !!navigator.storage?.getDirectory;
}
function rr(e, t) {
	if (e.length === t) return e;
	const n = new Uint8Array(t);
	return n.set(e.subarray(0, t)), n;
}
async function ir(e, t, n) {
	if (!ar()) return;
	const a = Za(t), r = await (await (await tr(!0)).getFileHandle(nr(e, a), { create: !0 })).createWritable();
	try {
		const e = await async function(e) {
			const t = new TextEncoder(), n = [], a = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4));
			a.setUint32(0, e.size, !0), n.push(new Uint8Array(a.buffer));
			for (const [r, i] of e) {
				const e = t.encode(r), a = i.sadeh_actilife.length;
				let s = 0;
				i.detach_nonwear && (s |= 1), i.sadeh_ggir && (s |= 2), i.ck_ggir && (s |= 4), i.nonwear_choi_2011 && (s |= 8), i.lstm_sleep_wake && (s |= 16);
				const o = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(7));
				o.setUint16(0, e.length, !0), o.setUint32(2, a, !0), o.setUint8(6, s), n.push(new Uint8Array(o.buffer), e), n.push(rr(i.sadeh_actilife, a), rr(i.sadeh_original, a), rr(i.ck_actilife, a), rr(i.ck_original, a), rr(i.consensus_majority_vote, a), rr(i.nonwear, a)), i.detach_nonwear && n.push(rr(i.detach_nonwear, a)), i.sadeh_ggir && n.push(rr(i.sadeh_ggir, a)), i.ck_ggir && n.push(rr(i.ck_ggir, a)), i.nonwear_choi_2011 && n.push(rr(i.nonwear_choi_2011, a)), i.lstm_sleep_wake && n.push(rr(i.lstm_sleep_wake, a));
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
			}(Ya, ht(n));
		}(n);
		await r.write(e);
	} finally {
		await r.close();
	}
}
async function sr(e, t) {
	if (!ar()) return null;
	const n = Za(t);
	let a, r;
	try {
		a = await tr(!1);
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	try {
		r = await a.getFileHandle(nr(e, n), { create: !1 });
	} catch (o) {
		if (o instanceof DOMException && "NotFoundError" === o.name) return null;
		throw o;
	}
	const i = await r.getFile(), s = new Uint8Array(await i.arrayBuffer());
	try {
		return await async function(e) {
			const t = await yt(Ya, e), n = new DataView(t.buffer, t.byteOffset, t.byteLength), a = new TextDecoder();
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
		return console.warn("[opfs-scored] cache decode failed; deleting the corrupt entry:", o instanceof Error ? o.message : o), await a.removeEntry(nr(e, n)).catch((e) => {
			console.warn("[opfs-scored] failed to delete the corrupt cache entry:", e instanceof Error ? e.message : e);
		}), null;
	}
}
async function or(e) {
	if (!ar()) return;
	let t;
	try {
		t = await tr(!1);
	} catch (r) {
		if (r instanceof DOMException && "NotFoundError" === r.name) return;
		throw r;
	}
	const n = `${e}__`, a = t.values();
	for await (const i of a) "file" === i.kind && i.name.startsWith(n) && i.name.endsWith(Xa) && await t.removeEntry(i.name).catch((t) => {
		t instanceof DOMException && "NotFoundError" === t.name || console.warn(`[opfs-scored] deleteScoredForFile(${e}) failed for entry ${i.name}:`, t instanceof Error ? t.message : t);
	});
}
let lr = !1, cr = !1;
async function dr() {
	const e = navigator.storage;
	if (!e?.persisted) return !1;
	try {
		return await e.persisted();
	} catch {
		return !1;
	}
}
function ur(e) {
	if (!e || "object" != typeof e) return !1;
	const t = e;
	return "QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name || 22 === t.code || 1014 === t.code || !("string" != typeof t.message || !/quota/i.test(t.message)) || (t.inner ? ur(t.inner) : !!t.cause && ur(t.cause));
}
const pr = [];
function mr(e) {
	return e ? e instanceof ArrayBuffer ? new Float64Array(e, 0, Math.floor(e.byteLength / Float64Array.BYTES_PER_ELEMENT)) : e : pr;
}
const hr = /* @__PURE__ */ new WeakMap();
function yr(e, t) {
	"number" == typeof t && t > 0 && hr.set(e, t);
}
async function fr(e, t, a) {
	const r = mr(e);
	if (r.length < 2) return t;
	const i = function(e) {
		return hr.get(mr(e));
	}(r);
	return void 0 !== i ? i : await (a ?? n()).medianGapSeconds(Float64Array.from(r)) ?? t;
}
const gr = {
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
}, wr = Object.fromEntries(Object.entries(gr).filter(([, e]) => null !== e.cascade).sort(([, e], [, t]) => e.cascadeOrder - t.cascadeOrder).map(([e, t]) => [e, t.cascade])), vr = Object.entries(gr).filter(([, e]) => "none" !== e.workspace).sort(([, e], [, t]) => e.workspaceOrder - t.workspaceOrder).map(([e]) => e);
function _r(e) {
	if (!("diarySourceSha256" in e) || void 0 === e.diarySourceSha256) return {};
	if ("string" != typeof e.diarySourceSha256 || !/^[a-f0-9]{64}$/u.test(e.diarySourceSha256)) throw new Error("Diary source identity must be a SHA-256 digest.");
	return { diarySourceSha256: e.diarySourceSha256 };
}
function Sr(e, t) {
	if (void 0 !== t && void 0 === e) throw new Error("Diary replication transport requires its profile identity.");
	if (void 0 !== e?.transportSha256 && void 0 === t) throw new Error("Profile-backed diary imports require both profile identity and full replication transport.");
}
function Ir(e) {
	return {
		..._r(e),
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
function kr(e, t = e.sourceKey, n = e.targetChosenByUser) {
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
	}, r = Array.isArray(e.naps) ? e.naps : pa(e);
	r.length > 3 && function(e, t) {
		const n = t.map((e) => ({
			start: e.start ?? null,
			end: e.end ?? null
		}));
		e.naps = n, e.nap1Start = n[0]?.start ?? null, e.nap1End = n[0]?.end ?? null, e.nap2Start = n[1]?.start ?? null, e.nap2End = n[1]?.end ?? null, e.nap3Start = n[2]?.start ?? null, e.nap3End = n[2]?.end ?? null;
	}(a, r);
	const i = Array.isArray(e.nonwearWindows) ? e.nonwearWindows : ma(e);
	return i.length > 3 && function(e, t) {
		const n = t.map((e) => ({
			start: e.start ?? null,
			end: e.end ?? null,
			reason: e.reason ?? null
		}));
		e.nonwearWindows = n, e.nonwear1Start = n[0]?.start ?? null, e.nonwear1End = n[0]?.end ?? null, e.nonwear1Reason = n[0]?.reason ?? null, e.nonwear2Start = n[1]?.start ?? null, e.nonwear2End = n[1]?.end ?? null, e.nonwear2Reason = n[1]?.reason ?? null, e.nonwear3Start = n[2]?.start ?? null, e.nonwear3End = n[2]?.end ?? null, e.nonwear3Reason = n[2]?.reason ?? null;
	}(a, i), {
		..._r(e),
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
async function br(e, t, n = se()) {
	const a = await n.diaryEntries.where("[fileId+analysisDate]").equals([e, t]).first();
	return a ? Ir(a) : null;
}
async function Dr(e, t = se()) {
	return (await t.diaryEntries.where("fileId").equals(e).toArray()).map(Ir);
}
function Mr(e, t = !1) {
	return Array.isArray(e) ? e.map((e) => Mr(e, t)) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [t]) => e.localeCompare(t)).map(([n, a]) => {
		const r = e;
		return [n, (t && "replicationProfileTransport" === n ? r.replicationProfileIdentity?.transportSha256 : t && "importMappingProvenance" === n ? r.importMappingProvenance?.configurationSha256 : t && "instrumentMappingProvenance" === n ? r.instrumentMappingProvenance?.mappingSha256 : void 0) ?? Mr(a, t)];
	})) : e;
}
function Er(e, t = !1) {
	return JSON.stringify(Mr(e, t)) ?? "null";
}
Object.entries(gr).filter(([, e]) => "unattached" === e.workspace).map(([e]) => e), Object.entries(gr).filter(([, e]) => e.backup).map(([e]) => e), vr.filter((e) => "diary" === gr[e].aggregate);
const Ar = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakSet();
async function Nr(e) {
	let t = L.currentTransaction;
	for (; t?.parent;) t = t.parent;
	t && Pr.has(t) || (t && Pr.add(t), await Me([], e));
}
async function Or(e, t, n) {
	null != n ? await e.diaryEntries.put({
		...t,
		id: n
	}) : await e.diaryEntries.add(t), await Nr(e), Tr(e, t.fileId);
}
async function xr(e, t, n) {
	await e.diaryEntries.delete(t), await Nr(e), Tr(e, n);
}
function Tr(e, t) {
	let n = L.currentTransaction;
	for (; n?.parent;) n = n.parent;
	if (!n) return void He(t, e);
	const a = Ar.get(n);
	if (a) return void a.add(t);
	const r = /* @__PURE__ */ new Set([t]);
	Ar.set(n, r), n.idbtrans.addEventListener("complete", () => {
		for (const t of r) He(t, e, r);
	}, { once: !0 });
}
function Fr(e) {
	return s(e.filename) !== e.filename;
}
function Cr(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (null == n.id) continue;
		const e = r(n), a = t.get(e) ?? [];
		a.some((e) => e.id === n.id) || a.push(n), t.set(e, a);
	}
	return [...t.values()].map((e) => e.sort((e, t) => Number(Fr(e)) - Number(Fr(t)) || e.id - t.id));
}
function Rr(e, t) {
	return {
		status: H.MATCHED,
		file: e[0],
		files: e,
		basis: t
	};
}
function Hr(e, t, n, a) {
	const i = o(e, t, n, a);
	if (i.status === H.UNMATCHED) return i;
	if (i.status === H.MATCHED && "named" === i.basis) return Rr(Cr(n.byRecording.get(r(i.file)) ?? [i.file])[0], "identity");
	const s = Cr(i.status === H.AMBIGUOUS ? i.candidates : [i.file, ...n.byParticipantId.covering(M(i.file), t)]), l = s.length > 1 ? function(e, t) {
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
	}(s, t) : null;
	return l ? Rr(l, "wear") : i.status === H.AMBIGUOUS ? 1 === s.length ? Rr(s[0], "identity") : {
		status: H.AMBIGUOUS,
		count: s.length
	} : Rr(s.find((e) => e.some((e) => e.id === i.file.id)), "identity");
}
const Lr = (e) => [e.markers, e.sensorNonwear];
function jr(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const i of t) {
		const e = M(i);
		e && n.set(e, (n.get(e) ?? /* @__PURE__ */ new Set()).add(r(i)));
	}
	const a = t.filter((e) => null != e.id && e.nonwearReview && (n.get(M(e))?.size ?? 0) > 1);
	return 0 === a.length ? L.Promise.resolve(d(t)) : async function(e, t, n) {
		const a = L.currentTransaction;
		if (a && !Lr(e).every((e) => a.storeNames.includes(e.name))) throw new Error("Diary planning reads wear evidence: its transaction must include markers and sensorNonwear.");
		const r = import("./local-nonwear-review-NVYri-Qa.js"), { createLocalNonwearReviewRepository: i, currentNonwearReviewInputs: s } = a ? await L.waitFor(r) : await r, o = i(e), { username: l } = No.getState(), c = Promise.all(n.map(async (e) => await s(e, l, o) === e.nonwearReview.inputs ? null : e.id)), u = new Set((a ? await L.waitFor(c) : await c).filter((e) => null !== e));
		return d(t.map((e) => {
			if (!u.has(e.id)) return e;
			const { nonwearReview: t, ...n } = e;
			return n;
		}));
	}(e, t, a);
}
let Kr;
function qr() {
	return Kr ?? L.waitFor(Promise.all([
		import("./diary-occurrence-store-DyWU9Rwn.js"),
		import("./diary-import-provenance-nMCYyfpO.js"),
		import("./diary-instrument-mapping-DegQIuRJ.js"),
		import("./diary-replication-profile-CGIB_1qV.js").then((e) => e.i),
		import("./diary-replication-transport-CBXTE9iw.js")
	])).then(([e, t, n, a, r]) => Kr = {
		occurrence: e,
		provenance: t,
		instrument: n,
		profile: a,
		transport: r
	});
}
function Gr(e, t) {
	return e.status === H.MATCHED && e.files.some((e) => e.id === t);
}
async function Ur(e, t, n, { existing: a, participantFiles: i, excludeRowIds: s } = {}) {
	if (!t || a?.fileId === t.id) return null;
	const o = M(t);
	if (!o) return null;
	const l = r(t), c = i ? i.filter((e) => M(e) === o) : await e.files.where(T).equals(o).toArray(), d = new Set(c.filter((e) => e.id !== t.id && r(e) !== l).map((e) => e.id));
	return d.size > 0 && (await e.diaryEntries.where("analysisDate").equals(n).toArray()).some((e) => d.has(e.fileId) && e.id !== a?.id && !s?.has(e.id)) ? Object.assign(/* @__PURE__ */ new Error("Diary evidence already occupies this participant night on another recording."), {
		fileId: t.id,
		sourceKey: o,
		analysisDate: n
	}) : null;
}
async function Vr(e = se()) {
	const t = await e.diaryBindingDirty.toCollection().primaryKeys(), n = await Promise.all(t.filter((e) => "number" == typeof e).map((t) => e.files.where(P).between([t, "local"], [
		t,
		"local",
		[]
	]).keys()));
	return [.../* @__PURE__ */ new Set([...t.filter((e) => "string" == typeof e).map((e) => e.slice(F.length)), ...n.flat().map((e) => e[2])])].sort();
}
async function Br(e = se(), t) {
	return (await (t ? e.stagedDiaryEntries.where(b).anyOf([...t]).distinct() : e.stagedDiaryEntries).toArray()).sort((e, t) => e.importedAt.localeCompare(t.importedAt));
}
function zr(e, t) {
	return 0 === t.availableDates.length || t.availableDates.includes(e.analysisDate);
}
async function Wr(e, t, n) {
	const a = r(t);
	return (await e.files.where(T).equals(M(t)).toArray()).filter((e) => e.id !== t.id && r(e) === a && g(e) && zr(n, e)).sort((e, t) => Number(Fr(e)) - Number(Fr(t)) || e.id - t.id);
}
async function $r(e, t, n = se(), a = {}) {
	const r = e.id, i = t.id;
	if (!r || !i) return { status: "missing" };
	const s = n, o = await s.stagedDiaryEntries.get(r);
	o && Sr(o.replicationProfileIdentity, o.replicationProfileTransport);
	const { occurrence: { verifyDiaryOccurrenceRecord: c, assertDiaryOccurrenceMatchesCompatibilityEntry: d }, provenance: { verifyDiaryImportMappingProvenance: u, canonicalizeDiaryMappedSourceValues: p }, instrument: { verifyDiaryInstrumentMappingProvenance: m, canonicalizeDiaryInstrumentValues: h }, profile: { verifyDiaryReplicationProfileIdentity: y }, transport: { verifyDiaryReplicationTransport: f, assertDiaryReplicationTransportBinding: w } } = await qr(), v = a.targetChosenByUser ? "attach_chosen" : "attach", _ = !0 === a.enclosingAudit;
	if (_ && !L.currentTransaction?.storeNames.includes("auditLog")) throw new Error("An enclosing diary audit needs a transaction that includes the audit log.");
	const S = _ ? null : za(s, a.audit);
	return S && await Wa(s, S), await Xe([
		s.files,
		s.diaryEntries,
		s.stagedDiaryEntries,
		s.diaryOccurrences,
		s.auditLog,
		...Lr(s)
	], async () => {
		const e = new Ua(v), n = await s.stagedDiaryEntries.get(r);
		if (!n) return { status: "missing" };
		const o = M(t), _ = await s.files.where(T).equals(o).toArray(), I = a.targetChosenByUser ? await s.files.get(i) : _.find((e) => e.id === i);
		if (!I || !g(I)) return { status: "target_changed" };
		const k = await jr(s, _.filter((e) => "local" === e.source)), b = a.targetChosenByUser ? null : Hr(n.sourceKey, n.analysisDate, k);
		if (!(a.targetChosenByUser ? zr(n, I) : null !== b && Gr(b, i) && "local" === I.source && I.filename === t.filename && M(I) === o)) return { status: "target_changed" };
		const D = b?.status === H.MATCHED ? b.files : [I, ...await Wr(s, I, n)], E = D[0].id, A = (await Promise.all(D.map((e) => s.diaryEntries.where("[fileId+analysisDate]").equals([e.id, n.analysisDate]).first()))).find((e) => void 0 !== e), P = function(e, t) {
			return {
				..._r(t),
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
		}(i, n), N = await s.diaryOccurrences.where("[normalizedSourceKey+analysisDate]").equals([n.normalizedSourceKey, n.analysisDate]).toArray(), O = await L.waitFor(Promise.all(N.map(c)));
		if (A || await Ur(s, I, n.analysisDate, {
			existing: A,
			participantFiles: a.targetChosenByUser ? void 0 : _
		}) || O.some((e) => !Gr(Hr(e.sourceKey, n.analysisDate, k, a.targetChosenByUser ? i : void 0), E))) return e.reject({
			fileId: A ? A.fileId : null,
			sourceKey: n.sourceKey,
			analysisDate: n.analysisDate,
			reason: A ? "destination_held" : "participant_night_held"
		}), {
			status: "conflict",
			sourceKey: n.sourceKey,
			analysisDate: n.analysisDate,
			receipt: e.build()
		};
		if (O.some((e) => null !== e.fileId && e.fileId !== E)) throw new Error("A staged diary occurrence is already associated with a different local file.");
		if (!Qe(P.timezone) || !Qe(P.entryTimezone)) throw new Error("Staged diary entry contains an invalid IANA timezone.");
		const x = void 0 === P.importMappingProvenance ? void 0 : await L.waitFor(u(P.importMappingProvenance));
		if (void 0 !== P.mappedSourceValues && void 0 === x) throw new Error("Mapped diary source values require mapping provenance.");
		const F = void 0 === P.mappedSourceValues ? void 0 : p(x, P.mappedSourceValues);
		if (void 0 === P.instrumentMappingProvenance && (void 0 !== P.instrumentValues || void 0 !== P.replicationProfileIdentity || void 0 !== P.replicationProfileTransport)) throw new Error("Reviewed diary values and replication profile require mapping provenance.");
		if (void 0 !== P.instrumentMappingProvenance && void 0 === P.instrumentValues) throw new Error("Reviewed diary mapping provenance requires source values.");
		const C = void 0 === P.instrumentMappingProvenance ? void 0 : await L.waitFor(m(P.instrumentMappingProvenance)), R = void 0 === C ? void 0 : h(C, P.instrumentValues), j = void 0 === P.replicationProfileIdentity ? void 0 : y(P.replicationProfileIdentity), K = void 0 === P.replicationProfileTransport ? void 0 : await L.waitFor(f(P.replicationProfileTransport));
		if (Sr(j, K), void 0 !== C && void 0 !== j && (j.versionDefinitionId !== C.versionDefinitionId || j.versionDefinitionSha256 !== C.versionDefinitionSha256)) throw new Error("Diary replication profile identity does not match the reviewed mapping.");
		if (void 0 !== K && void 0 !== C && void 0 !== j) await L.waitFor(w(K, j, C));
		else if (void 0 !== K) throw new Error("Diary replication transport is missing its profile identity or reviewed mapping.");
		const q = {
			...P,
			...void 0 === x ? {} : { importMappingProvenance: x },
			...void 0 === F ? {} : { mappedSourceValues: F },
			...void 0 === C ? {} : {
				instrumentMappingProvenance: C,
				instrumentValues: R,
				...void 0 === j ? {} : { replicationProfileIdentity: j },
				...void 0 === K ? {} : { replicationProfileTransport: K }
			}
		};
		for (const t of O) {
			if (l(n.sourceKey) !== t.normalizedSourceKey) throw new Error("Diary occurrence response does not match its compatibility diary source.");
			d(t, q);
		}
		const G = (/* @__PURE__ */ new Date()).toISOString();
		for (const t of D) {
			const r = {
				fileId: t.id,
				analysisDate: n.analysisDate,
				...kr(q, n.sourceKey, a.targetChosenByUser),
				importedAt: G
			};
			await et({
				op: "diary_put",
				fileId: t.id,
				payload: {
					analysisDate: n.analysisDate,
					entry: r,
					replaced: !1
				}
			}), await Or(s, r, void 0), e.row("diaryEntries", "added", {
				fileId: t.id,
				sourceKey: n.sourceKey,
				analysisDate: n.analysisDate
			});
		}
		for (const t of O) {
			if (t.fileId === E) continue;
			const n = {
				...t,
				fileId: E
			};
			await s.diaryOccurrences.put(n), e.row("diaryOccurrences", "replaced", {
				fileId: E,
				sourceKey: t.sourceKey,
				analysisDate: t.analysisDate
			}), await et({
				op: "diary_occurrence_put",
				fileId: E,
				payload: {
					disposition: "staged_attach",
					record: n
				}
			});
		}
		await et({
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
		const U = e.build();
		return S && await $a(U, S), {
			status: "attached",
			sourceKey: n.sourceKey,
			analysisDate: n.analysisDate,
			fileIds: D.map((e) => e.id),
			receipt: U
		};
	}, s);
}
function Qr(e) {
	const { id: t, fileId: n, sourceKey: a, targetChosenByUser: r, ...i } = e;
	return Er(i, !0);
}
async function Jr(e, t = se(), n) {
	const a = za(t, n), i = [
		t.files,
		t.diaryEntries,
		t.stagedDiaryEntries,
		t.diaryOccurrences
	];
	return await Ye.settleWritesForDb(t, a) ? t.transaction("rw", [
		...i,
		t.projectMeta,
		t.walLog,
		t.auditLog,
		...Lr(t)
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
			const { occurrence: { assertDiaryOccurrenceMatchesCompatibilityEntry: c } } = await qr(), d = await _i(t, {
				participantKeys: e,
				includeIncomplete: !0
			}), u = await jr(t, d), p = d.filter((t) => e.includes(M(t))).map((e) => e.id), m = await t.diaryEntries.where("fileId").anyOf(p).filter((e) => !e.targetChosenByUser).toArray();
			if (0 === m.length) return {
				changes: n,
				mirrors: a,
				rejected: i,
				summary: o
			};
			const h = await t.diaryOccurrences.where("fileId").anyOf(p).toArray(), y = (e) => JSON.stringify([e.fileId, e.analysisDate]), f = /* @__PURE__ */ new Map();
			for (const r of h) {
				const e = y(r), t = f.get(e) ?? [];
				t.push(r), f.set(e, t);
			}
			const g = new Map(d.map((e) => [e.id, e])), w = /* @__PURE__ */ new Map();
			for (const l of m) {
				const e = g.get(l.fileId), t = JSON.stringify([
					M(e),
					r(e),
					l.analysisDate
				]);
				w.set(t, [...w.get(t) ?? [], l]);
			}
			const v = (e, t) => Number(Fr(g.get(e.fileId))) - Number(Fr(g.get(t.fileId))) || e.fileId - t.fileId;
			for (const r of [...w.values()].map((e) => e.sort(v))) {
				const e = r.map((e) => {
					const t = f.get(y(e)) ?? [], n = new Set(t.map((e) => e.sourceKey).filter((e) => e?.trim())), a = e.mappedSourceValues?.find((t) => "filename" === t.targetKey && "present" === t.presence && t.sourceFieldName === e.importMappingProvenance?.effectiveMapping[t.targetKey])?.lexicalValue;
					return {
						entry: e,
						associated: t,
						sourceKeys: n,
						sourceKey: (e.sourceKey?.trim() ? e.sourceKey : void 0) ?? (1 === n.size ? [...n][0] : void 0) ?? a
					};
				}), d = e.find((e) => e.sourceKey?.trim());
				if (!d) {
					o.unrecoverable += e.length;
					continue;
				}
				const { entry: p } = d, m = d.sourceKey, h = Hr(m, p.analysisDate, u, p.fileId);
				if (e.some((e) => Gr(h, e.entry.fileId))) {
					for (const n of h.status === H.MATCHED ? h.files : []) {
						const r = y({
							fileId: n.id,
							analysisDate: p.analysisDate
						});
						e.some((e) => e.entry.fileId === n.id) || s.has(r) || await t.diaryEntries.get({
							fileId: n.id,
							analysisDate: p.analysisDate
						}) || (s.add(r), a.push({
							entry: p,
							sourceKey: m,
							fileId: n.id
						}));
					}
					continue;
				}
				if (h.status === H.UNMATCHED) {
					o.unrecoverable += e.length;
					continue;
				}
				const g = (t) => {
					o.conflicted += e.length;
					for (const n of e) i.push({
						fileId: n.entry.fileId,
						sourceKey: m,
						analysisDate: p.analysisDate,
						reason: t
					});
				};
				if (new Set(e.map((e) => Qr(e.entry))).size > 1) {
					g("twin_content_differs");
					continue;
				}
				const w = [...new Map([m, ...e.flatMap((e) => [...e.sourceKeys])].map((e) => [l(e), e])).values()];
				try {
					for (const t of e) for (const e of t.associated) {
						c(e, t.entry);
						const n = Hr(e.sourceKey, p.analysisDate, u, t.entry.fileId);
						if (!e.sourceKey?.trim() || h.status === H.MATCHED && !Gr(n, h.file.id)) throw new Error("Diary occurrence destination identity conflicts.");
					}
				} catch {
					g("occurrence_destination_differs");
					continue;
				}
				const v = await t.stagedDiaryEntries.where("[normalizedSourceKey+analysisDate]").anyOf(w.map((e) => [l(e), p.analysisDate])).first(), _ = h.status === H.MATCHED ? await t.diaryEntries.where("[fileId+analysisDate]").equals([h.file.id, p.analysisDate]).first() : void 0, S = h.status === H.MATCHED ? [y({
					fileId: h.file.id,
					analysisDate: p.analysisDate
				})] : w.map((e) => qa(l(e), p.analysisDate)), I = h.status === H.MATCHED ? await Ur(t, h.file, p.analysisDate, {
					existing: p,
					excludeRowIds: new Set(e.map((e) => e.entry.id))
				}) : null;
				if (v || _ || I || S.some((e) => s.has(e))) {
					g(I ? "participant_night_held" : v ? "staged_evidence" : "destination_held");
					continue;
				}
				S.forEach((e) => s.add(e));
				const k = h.status === H.MATCHED ? h.file.id : null;
				n.push({
					entry: p,
					associated: d.associated,
					sourceKey: m,
					stagedKeys: w,
					destination: k
				});
				for (const t of e) t !== d && n.push({
					entry: t.entry,
					associated: t.associated,
					sourceKey: m,
					stagedKeys: [],
					destination: k,
					twin: !0
				});
				for (const n of h.status === H.MATCHED ? h.files.slice(1) : []) {
					const e = y({
						fileId: n.id,
						analysisDate: p.analysisDate
					});
					s.has(e) || await t.diaryEntries.get({
						fileId: n.id,
						analysisDate: p.analysisDate
					}) || (s.add(e), a.push({
						entry: p,
						sourceKey: m,
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
		}(e, t), s = n.summary, o = new Ua("move");
		for (const e of n.rejected) o.reject(e);
		return 0 === n.changes.length && 0 === n.mirrors.length ? {
			...s,
			receipt: o.build()
		} : Xe([...i, t.auditLog], async () => {
			for (const { entry: a, associated: r, sourceKey: i, stagedKeys: c, destination: d, twin: u } of n.changes) {
				const { id: e, fileId: n, targetChosenByUser: p, sourceKey: m, ...h } = a, y = d;
				if (u);
				else if (null === y) {
					for (const e of c) {
						const n = l(e), r = {
							...h,
							sourceKey: e,
							normalizedSourceKey: n,
							attachedFileId: null,
							attachedAt: null
						};
						await t.stagedDiaryEntries.add(r), o.row("stagedDiaryEntries", "added", {
							fileId: null,
							sourceKey: e,
							analysisDate: a.analysisDate
						}), await et({
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
						...h,
						sourceKey: i,
						fileId: y
					};
					await Or(t, e, void 0), o.row("diaryEntries", "added", {
						fileId: y,
						sourceKey: i,
						analysisDate: a.analysisDate
					}), await et({
						op: "diary_put",
						fileId: y,
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
						fileId: y
					};
					await t.diaryOccurrences.put(e), o.row("diaryOccurrences", "replaced", {
						fileId: y,
						sourceKey: a.sourceKey,
						analysisDate: a.analysisDate
					}), await et({
						op: "diary_occurrence_put",
						...null === y ? {} : { fileId: y },
						payload: {
							disposition: null === y ? "staged_unbind" : "staged_attach",
							record: e
						}
					});
				}
				await xr(t, e, n), o.row("diaryEntries", "deleted", {
					fileId: n,
					sourceKey: i,
					analysisDate: a.analysisDate
				}), await et({
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
				await Or(t, u, void 0), o.row("diaryEntries", "added", {
					fileId: i,
					sourceKey: r,
					analysisDate: a.analysisDate
				}), await et({
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
			return await $a(e, a), {
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
		receipt: new Ua("move").build()
	};
}
var Yr = t({
	FILE_INGEST_FILENAME_CONFLICT_MESSAGE: () => Zr,
	FILE_INGEST_IN_PROGRESS_MESSAGE: () => ei,
	FILE_INGEST_LEASE_MS: () => Xr,
	FILE_INGEST_OWNERSHIP_LOST_MESSAGE: () => ti,
	FileIngestFilenameConflictError: () => ni,
	FileIngestInProgressError: () => ri,
	FileIngestOwnershipLostError: () => ii,
	FileIngestRecordingRevisedError: () => ai,
	GgirImportRefusalsStorageError: () => Yi,
	activityDaySaveFacts: () => xi,
	attachStagedDiaryEntry: () => $r,
	beginFileIngest: () => yi,
	bumpExportInputRevision: () => Hi,
	bumpSeriesRevision: () => Ri,
	clearGgirImportRefusals: () => Zi,
	countMarkersInRows: () => ui,
	deleteFileCaches: () => Ei,
	deleteFileCascadeInCurrentTransaction: () => hi,
	finalizeFileIngest: () => gi,
	findFileByContentHash: () => Ii,
	findFileByPrefixHash: () => ki,
	getActivityDay: () => Li,
	getActiwareFileData: () => Di,
	getAllActivityDaysForFile: () => Ji,
	getAllAuditLogEntries: () => ms,
	getAllMarkersByAlgorithmForFile: () => $i,
	getAllMarkersForFile: () => Bi,
	getAuditLogEntries: () => ds,
	getAvailableDates: () => Ki,
	getConfirmedNonwearPeriodsForFile: () => zi,
	getDailyGgirSummary: () => ys,
	getDeviceOffNonwearPeriodsForFile: () => Wi,
	getDirtyDiaryParticipants: () => Vr,
	getFileByFilename: () => Si,
	getFileById: () => bi,
	getFilesByIds: () => Mi,
	getGgirImportRefusals: () => Xi,
	getLocalFiles: () => _i,
	getLocalStudySettings: () => ts,
	getMarkerProvenance: () => Vi,
	getSensorNonwearForFile: () => is,
	getSensorNonwearInWindow: () => ss,
	getStagedDiaryEntries: () => Br,
	getWorkspaceScopedAuditEntries: () => ps,
	isWorkspaceScopedAuditEntryForView: () => us,
	listDailyGgirSummaries: () => hs,
	mergeFileCircadianSignalDates: () => Fi,
	mergeLocalStudySettingsExtraSettings: () => as,
	mergeScoredVariantResults: () => ji,
	nextNightDate: () => Ni,
	nightHasActivity: () => Pi,
	nonDiaryTable: () => li,
	patchActivityDayNonwearMasks: () => Ci,
	preferredMarkerRecord: () => Ui,
	putDailyGgirSummary: () => fs,
	reconcileDiaryBindings: () => Jr,
	recordAlgorithmRun: () => ls,
	recordAlgorithmRunsBatch: () => cs,
	recordGgirImportRefusals: () => es,
	renewFileIngestLease: () => fi,
	rollbackFileIngest: () => wi,
	saveActivityDay: () => Oi,
	saveActivityDays: () => Ti,
	saveSensorNonwearByDate: () => rs,
	selectPreferredMarkerRecordForDate: () => Gi,
	totalCascadeRows: () => mi,
	withActivityDayMemo: () => Qi
});
const Xr = 12e4, Zr = "A completed import already uses this filename for different content. Rename the selected file and try again, or delete the completed import in Data Settings first.", ei = "This file is already being imported in another tab. Wait for that import to finish, then try again.", ti = "This import no longer owns its incomplete local record. Retry the import.";
var ni = class extends Error {
	category = W;
	constructor() {
		super(Zr), this.name = "FileIngestFilenameConflictError";
	}
}, ai = class extends Error {
	category = W;
	constructor() {
		super(ee), this.name = "FileIngestRecordingRevisedError";
	}
}, ri = class extends Error {
	category = te;
	constructor() {
		super(ei), this.name = "FileIngestInProgressError";
	}
}, ii = class extends Error {
	category = te;
	constructor() {
		super(ti), this.name = "FileIngestOwnershipLostError";
	}
};
const si = Object.keys(wr), oi = /* @__PURE__ */ new Set([
	"diaryEntries",
	"diaryOccurrences",
	"stagedDiaryEntries"
]);
function li(e, t) {
	if (oi.has(t)) throw new Error(`The diary store ${t} is written only by db/diary.`);
	return e[t];
}
const ci = si.filter((e) => !oi.has(e));
function di(e) {
	return [e.files, ...si.map((t) => e[t])];
}
function ui(e) {
	return e.reduce((e, t) => e + (t.sleepMarkers?.length ?? 0) + (t.nonwearMarkers?.length ?? 0), 0);
}
async function pi(e, t) {
	Aa(t, e);
	const n = await async function(e, t) {
		const n = new Ua("file_cascade"), a = await e.diaryEntries.where("fileId").equals(t).toArray(), r = await e.diaryOccurrences.where("fileId").equals(t).toArray(), i = await e.stagedDiaryEntries.where("attachedFileId").equals(t).toArray();
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
	}(e, t), a = await Promise.all(ci.map(async (n) => {
		const a = li(e, n).where(wr[n]).equals(t);
		if ("markers" !== n) return [n, await a.delete()];
		const r = ui(await e.markers.where("fileId").equals(t).toArray());
		return await a.delete(), [n, r];
	})), r = {
		...Object.fromEntries(a),
		...n.counts,
		files: 0
	};
	return r.ggirResultsBundles > 0 && await e.files.update(t, { ggirBundleRevision: crypto.randomUUID() }), r;
}
function mi(e) {
	return Object.values(e).reduce((e, t) => e + t, 0);
}
async function hi(e, t) {
	return {
		...await pi(e, t),
		files: await e.files.where(":id").equals(t).delete()
	};
}
async function yi(e, t, n = se(), a = Date.now()) {
	(function(e, t) {
		if (0 === e.length || 0 === t.length) throw new Error("Local ingest identity is invalid.");
	})(e.sourceContentHash, t), async function() {
		if (lr) {
			if (await dr()) return !0;
			lr = !1, cr = !1;
		}
		if (cr) return await dr();
		const e = navigator.storage;
		if (!e?.persist) return cr = !0, !1;
		try {
			const t = await e.persist();
			return cr = !0, lr = !!t, !!t;
		} catch {
			return !1;
		}
	}().catch(() => {});
	const r = n;
	return Xe([...di(r), r.studySettings], async () => {
		const n = await r.files.where("sourceContentHash").equals(e.sourceContentHash).toArray(), i = n.find(g);
		if (null != i?.id) return await Zi(i, r), {
			kind: "already_complete",
			record: i
		};
		const s = e.aw5RecordingKey ? await r.files.where("aw5RecordingKey").equals(e.aw5RecordingKey).toArray() : [];
		if (s.some(g)) throw new ai();
		const o = await r.files.where("filename").equals(e.filename).first();
		if (o && g(o)) throw new ni();
		const l = /* @__PURE__ */ new Map();
		for (const e of [
			...n,
			...s,
			...o ? [o] : []
		]) null != e.id && "incomplete" === e.ingestState && l.set(e.id, e);
		const c = [...l.values()].find((e) => e.ingestAttemptId === t);
		if (null != c?.id) return await r.files.update(c.id, { ingestLeaseExpiresAt: a + Xr }), {
			kind: "started",
			guard: {
				fileId: c.id,
				attemptId: t
			},
			recovered: !1
		};
		if ([...l.values()].find((e) => (e.ingestLeaseExpiresAt ?? 0) > a)) throw new ri();
		for (const e of l.values()) null != e.id && (await et({
			op: "file_delete",
			fileId: e.id,
			payload: { kind: "incomplete_ingest_recovery" }
		}), await hi(r, e.id));
		const d = await r.files.add({
			...e,
			ingestState: "incomplete",
			ingestAttemptId: t,
			ingestLeaseExpiresAt: a + Xr
		});
		return await et({
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
async function fi(e, t = se(), n = Date.now()) {
	const a = t;
	await a.transaction("rw", a.files, async () => {
		const t = await a.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new ii();
		await a.files.update(e.fileId, { ingestLeaseExpiresAt: n + Xr });
	});
}
async function gi(e, t = se(), n) {
	const a = t;
	return Xe([a.files, a.studySettings], async () => {
		const t = await a.files.get(e.fileId);
		if ("incomplete" !== t?.ingestState || t.ingestAttemptId !== e.attemptId) throw new ii();
		const r = e.fileId;
		return await a.files.where(":id").equals(r).modify((e) => {
			e.ingestState = "complete", delete e.ingestAttemptId, delete e.ingestLeaseExpiresAt;
		}), await et({
			op: "file_put",
			fileId: r,
			payload: { kind: "incomplete_ingest_finalize" }
		}), await Zi(t, a), await Me([r], a, n), r;
	}, a, n);
}
async function wi(e, t = se()) {
	const n = t;
	return Xe(di(n), async () => {
		const t = await n.files.get(e.fileId);
		return t ? "incomplete" === t.ingestState && t.ingestAttemptId === e.attemptId && (await et({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_rollback" }
		}), await hi(n, e.fileId), !0) : mi(await pi(n, e.fileId)) > 0 && (await et({
			op: "file_delete",
			fileId: e.fileId,
			payload: { kind: "incomplete_ingest_orphan_cleanup" }
		}), !0);
	}, n);
}
async function vi(e, t) {
	const n = [], a = await fr(e.timestamps, null, t) ?? (e.timestamps.byteLength > 0 ? e.epochResolutions?.find((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId)?.epochLengthSeconds : null) ?? null;
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
		const c = ia(e);
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
async function _i(e = se(), t) {
	let n = await (t?.participantKeys ? e.files.where(b).anyOf([...new Set(t.participantKeys.flatMap((e) => [l(e), ...a({ filename: e })]))]).distinct().filter((e) => "local" === e.source) : t?.onlyFileIds ? e.files.where(":id").anyOf([...t.onlyFileIds]).filter((e) => "local" === e.source) : e.files.where("source").equals("local")).toArray();
	if (t?.participantKeys) {
		const a = [...new Set(n.map(M).filter((e) => !t.participantKeys.includes(e)))];
		a.length && (n = [...n.filter((e) => !a.includes(M(e))), ...await e.files.where(T).anyOf(a).filter((e) => "local" === e.source).toArray()]);
	}
	return (!0 === t?.includeIncomplete ? n : n.filter(g)).map((e) => {
		const t = e.participantId ?? D(e.filename) ?? void 0;
		return {
			...e,
			availableDates: [...new Set(e.availableDates)],
			...void 0 === t ? {} : { participantId: t }
		};
	});
}
async function Si(e, t = se()) {
	return t.files.where("filename").equals(e).first();
}
async function Ii(e, t = se()) {
	if (e) return (await t.files.where("sourceContentHash").equals(e).toArray()).find(g);
}
async function ki(e, t = se(), n) {
	if (e) return (await t.files.where("fileHash").equals(e).toArray()).find((e) => g(e) && (void 0 === n || e.sourceContentHash === n));
}
async function bi(e, t = se()) {
	return t.files.get(e);
}
async function Di(e, t = se()) {
	return t.actiwareFileData.get(e);
}
async function Mi(e, t = se()) {
	return t.files.bulkGet(e);
}
async function Ei(e) {
	const t = new Set(e.flatMap((e) => [e.sourceContentHash, e.fileHash]).filter((e) => "string" == typeof e && e.length > 0));
	(await Promise.allSettled([...t].flatMap((e) => [Ja(e), or(e)]))).some((e) => "rejected" === e.status) && console.warn("[db] One or more local cache entries could not be deleted.");
}
async function Ai(e, t, a = n()) {
	const r = await a.shiftDate(e, t);
	if (void 0 === r) throw new RangeError(`Not a calendar date: ${e}`);
	return r;
}
async function Pi(e, t, n, a = se()) {
	return (await Promise.all([t, n].map((t) => a.activityDays.where("[fileId+date]").equals([e, t]).count()))).some((e) => e > 0);
}
async function Ni(e, t = n()) {
	const a = Ai(e, 1, t);
	return L.currentTransaction ? L.waitFor(a) : a;
}
async function Oi(e, t = se(), n) {
	const [a] = await Ti([e], t, void 0, n);
	return a;
}
async function xi(e, t = n()) {
	let a = e.epochResolutions;
	if (a) {
		if (void 0 !== e.algorithmResults && a.some((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId && 60 !== e.epochLengthSeconds && 60 % e.epochLengthSeconds == 0)) {
			const n = await vi(e, t);
			a = [...a.filter((e) => !e.derivedData), ...n.filter((e) => e.derivedData)];
		}
	} else a = await vi(e, t);
	return {
		epochResolutions: a,
		previousDate: await Ai(e.date, -1, t)
	};
}
async function Ti(e, t = se(), n, a) {
	const r = t, i = new Set(e.map((e) => e.fileId));
	for (const d of i) Aa(d, r);
	const s = fe(a), o = n ?? await Promise.all(e.map((e) => xi(e, s))), l = await Promise.all(e.map(async (e, t) => {
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
			].every((t) => !e[t]?.byteLength || n.data[t].length === a) && ia(e).every(([e, t]) => {
				if (!t.byteLength) return !0;
				const r = Jn([{ algorithmResults: n.algorithmResults }], { recordedCellId: e });
				return "ok" === r.status && r.outputs[0]?.length === a;
			}) && (!e.nonwearResults?.byteLength || n.nonwearResults?.length === a);
		}(e, r)) {
			const t = await vi(e, s);
			r = [...r.filter((e) => "counts_60s" !== e.resolutionId), ...t.filter((e) => e.derivedData)];
		}
		return {
			activityDay: {
				...a,
				epochResolutions: r
			},
			previousDate: o[t].previousDate
		};
	})), c = await we(r, [
		r.activityDays,
		r.scoredVariantMasks,
		r.files
	], async () => {
		await Ri(r, [...i]);
		const e = [];
		for (const { activityDay: t, previousDate: n } of l) await r.scoredVariantMasks.bulkDelete([[t.fileId, t.date], [t.fileId, n]]), await r.activityDays.where("[fileId+date]").equals([t.fileId, t.date]).delete(), e.push(await r.activityDays.add(t));
		return e;
	}, a);
	for (const d of i) Aa(d, r);
	return c;
}
async function Fi(e, t, n, a = se(), r) {
	await ge(a, [a.files], () => a.files.where(":id").equals(e).modify((e) => {
		const a = new Set(e.circadianSignalDates ?? []);
		for (const n of t) a.delete(n);
		for (const t of n) a.add(t);
		e.circadianSignalDates = [...a].sort();
	}), r);
}
async function Ci(e, t, n, a = se(), r) {
	const i = a;
	await we(i, [
		i.activityDays,
		i.physicalActivityFileSummaries,
		i.files
	], async () => {
		await i.activityDays.where("[fileId+date]").equals([e, t]).modify((e) => {
			Object.assign(e, n), delete e.displayNonwear;
		}), await i.physicalActivityFileSummaries.where("fileId").equals(e).delete(), await Hi(i, [e]), await i.files.where(":id").equals(e).modify((e) => {
			e.nonwearBandGeneration = (e.nonwearBandGeneration ?? 0) + 1, e.navigationFacts && delete e.navigationFacts.bands;
		});
	}, r);
}
async function Ri(e, t) {
	await e.files.where(":id").anyOf(t).modify((e) => {
		e.seriesRevision = (e.seriesRevision ?? 0) + 1;
	});
}
async function Hi(e, t) {
	await e.files.where(":id").anyOf(t).modify((e) => {
		e.exportInputRevision = (e.exportInputRevision ?? 0) + 1;
	});
}
async function Li(e, t, n = se(), a) {
	return a ? (await Ji(e, n, a)).get(t) : n.activityDays.where("[fileId+date]").equals([e, t]).first();
}
async function ji(e, t, n, a, r = se(), i, s) {
	const o = r, l = await J(Ni(t, i), s);
	return s?.throwIfAborted(), !!await Pi(e, t, l, o) && ge(o, [o.scoredVariantMasks], async () => {
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
async function Ki(e, t = se()) {
	return (await t.activityDays.where("[fileId+date]").between([e, ""], [e, "￿"], !0, !0).keys()).map((e) => e[1]);
}
function qi(e) {
	const t = Date.parse(e.lastModifiedAt);
	return Number.isFinite(t) ? t : Number.NEGATIVE_INFINITY;
}
function Gi(e, t) {
	if (!e) return t;
	const n = qi(e), a = qi(t);
	return a !== n ? a > n ? t : e : (t.id ?? 0) > (e.id ?? 0) ? t : e;
}
function Ui(e, t = !1) {
	const n = t ? e?.filter(S) : void 0;
	let a;
	for (const r of n?.length ? n : e ?? []) a = Gi(a, r);
	return a;
}
async function Vi(e, t = se()) {
	return t.markerProvenance.bulkGet([...e]);
}
async function Bi(e, t, n = se(), a = !1) {
	const r = n.markers.where("[fileId+date+username]"), i = await r.between([e, L.minKey], [e, L.maxKey]).uniqueKeys(), s = await r.anyOf(i.filter((e) => e[2] === t)).toArray(), o = /* @__PURE__ */ new Map();
	for (const l of s) {
		const e = xe(l);
		a && !S(e) || o.set(l.date, Gi(o.get(l.date), e));
	}
	return o;
}
async function zi(e, t = se()) {
	const n = await t.markers.where("fileId").equals(e).toArray(), a = [];
	for (const r of n) if ("auto_score" !== r.username) for (const e of xe(r).nonwearMarkers) null != e.startTimestamp && null != e.endTimestamp && a.push({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	});
	return a;
}
async function Wi(e, t = se()) {
	const [n, a] = await Promise.all([is(e, t), zi(e, t)]);
	return [...n.map((e) => ({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	})), ...a];
}
async function $i(e, t, n = se()) {
	const a = await n.markers.where("fileId").equals(e).toArray(), r = /* @__PURE__ */ new Map();
	for (const i of a) {
		if (i.username !== t) continue;
		const e = r.get(i.date), n = xe(i);
		e ? e.push(n) : r.set(i.date, [n]);
	}
	return r;
}
function Qi(e) {
	return e({});
}
function Ji(e, t = se(), n) {
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
var Yi = class extends Error {
	category = Z;
	constructor() {
		super("Stored GGIR import refusals could not be read; the existing records were kept."), this.name = "GgirImportRefusalsStorageError";
	}
};
function Xi(e) {
	if (!e || "object" != typeof e || !("ggirImportRefusals" in e)) return [];
	const t = e[ie];
	if (Array.isArray(t)) {
		const e = t.filter((e) => null != e && "object" == typeof e && "filename" in e && "string" == typeof e.filename && "reason" in e && "string" == typeof e.reason && "category" in e && Y.includes(e.category));
		if (e.length === t.length) return [...new Map(e.map((e) => {
			const t = "ggir-folder" === e.category ? {
				...e,
				filename: ae
			} : e;
			return [JSON.stringify([t.filename, t.category]), t];
		})).values()];
	}
	throw new Yi();
}
function Zi(e, t) {
	return es([], t, "string" == typeof e ? [e] : [e.filename, ...Ve(e) ? [ae] : []]);
}
async function es(e, t = se(), n) {
	(e.length || void 0 !== n) && await ns({
		sleepDetectionRule: x.sleep_detection_rule,
		nightStartHour: x.night_start_hour,
		nightEndHour: x.night_end_hour,
		defaultAlgorithm: x.default_algorithm,
		extraSettings: {}
	}, t, {
		coreSettings: "existing",
		extraSettings: "merge",
		refusals: e,
		...void 0 === n ? {} : { importedFilenames: n }
	});
}
async function ts(e = se()) {
	return e.studySettings.where("key").equals("study").first();
}
async function ns(e, t, n) {
	await Xe([t.studySettings], async () => {
		const a = await t.studySettings.where("key").equals("study").first();
		if (void 0 !== n.importedFilenames && !Xi(a).some((e) => n.importedFilenames?.includes(e.filename))) return;
		const r = "existing" === n.coreSettings && a ? {
			sleepDetectionRule: a.sleepDetectionRule,
			nightStartHour: a.nightStartHour,
			nightEndHour: a.nightEndHour,
			defaultAlgorithm: a.defaultAlgorithm,
			...void 0 === a.sleepPeriodDetection ? {} : { sleepPeriodDetection: a.sleepPeriodDetection }
		} : e, { [y]: i, ...s } = a?.extraSettings ?? {}, o = {
			...r,
			sleepDetectionRule: (l = r.sleepDetectionRule, Object.values(N).includes(l) ? l : x.sleep_detection_rule),
			extraSettings: "merge" === n.extraSettings ? {
				...s,
				...e.extraSettings
			} : e.extraSettings
		};
		var l;
		const c = await L.waitFor(ue(JSON.stringify(o))), d = {
			key: "study",
			...o,
			...n.refusals ? { [ie]: Xi({ [ie]: [...Xi(a), ...n.refusals] }).filter((e) => !n.importedFilenames?.includes(e.filename)) } : {},
			contentHash: c,
			lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		await et({
			op: "settings_put",
			payload: {
				settings: o,
				contentHash: c,
				prevContentHash: a?.contentHash,
				...n.refusals ? { [ie]: Xi(d) } : {}
			}
		}), a?.id ? await t.studySettings.update(a.id, d) : await t.studySettings.add(d);
	}, t);
}
async function as(e, t = se()) {
	await ns(e, t, {
		coreSettings: "existing",
		extraSettings: "merge"
	});
}
async function rs(e, t, n = se(), a) {
	if (!t.size) return;
	const r = [...t];
	await Xe([n.sensorNonwear], async () => {
		await Ze(r.map(([t, n]) => ({
			op: "sensor_nonwear_put",
			fileId: e,
			payload: {
				analysisDate: t,
				periods: n
			}
		}))), await n.sensorNonwear.where("[fileId+analysisDate]").anyOf(r.map(([t]) => [e, t])).delete(), await n.sensorNonwear.bulkAdd(r.flatMap(([t, n]) => n.map((n, a) => ({
			...n,
			fileId: e,
			analysisDate: t,
			periodIndex: a
		}))));
	}, n, a);
}
async function is(e, t = se()) {
	return t.sensorNonwear.where("fileId").equals(e).toArray();
}
async function ss(e, t, n, a = se()) {
	return (await is(e, a)).filter((e) => e.startTimestamp <= n && e.endTimestamp >= t).sort((e, t) => e.startTimestamp - t.startTimestamp);
}
function os(e) {
	const t = {
		fileId: e.fileId,
		date: e.date,
		appVersion: e.appVersion,
		results: e.results,
		...void 0 !== e.sourceContentHash ? { sourceContentHash: e.sourceContentHash } : {}
	}, n = Wn(e);
	if (null !== n) return {
		...t,
		...n
	};
	throw new Error(`Refused an algorithm run for ${String(e.algoKey ?? e.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
}
async function ls(e, t = se(), n) {
	return await async function(e, t, n) {
		const a = t, r = await L.waitFor(pe(e.results));
		return Xe([a.algorithmRuns], async () => {
			const t = await a.algorithmRuns.where("[fileId+date+algoKey+algoVersion+paramsHash]").equals([
				e.fileId,
				e.date,
				e.algoKey,
				e.algoVersion,
				e.paramsHash
			]).first();
			if (t?.id) return await et({
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
			return await et({
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
	}(os(e), t, n);
}
async function cs(e, t, n) {
	return await async function(e, t, n) {
		if (0 === e.length) return [];
		const a = t ?? se(), r = Promise.all(e.map((e) => pe(e.results))), i = await (L.currentTransaction ? L.waitFor(r) : r);
		return Xe([a.algorithmRuns], async () => {
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
			return await Ze(e.map((e, t) => ({
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
	}(e.map(os), t, n);
}
async function ds(e, t, n, a = se()) {
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
function us(e, t, n) {
	return 0 === e.fileId && e.payload?.openFileId === t && e.payload?.openAnalysisDate === n;
}
async function ps(e, t, n = se()) {
	return (await n.auditLog.where("[fileId+analysisDate+username]").between([
		0,
		"",
		""
	], [
		0,
		"￿",
		"￿"
	], !0, !0).toArray()).filter((n) => us(n, e, t)).sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
}
async function ms() {
	return se().auditLog.orderBy("id").toArray();
}
async function hs(e, t = se()) {
	return t.dailyGgirSummaries.where("[fileId+analysisDate]").between([e, ""], [e, "￿"]).toArray();
}
async function ys(e, t) {
	const n = await se().dailyGgirSummaries.where("[fileId+analysisDate]").equals([e, t]).first();
	return n ? [n] : [];
}
async function fs(e, t = se(), n) {
	const a = t, r = a.dailyGgirSummaries, i = Array.isArray(e) ? e : [e];
	0 !== i.length && await we(a, [r, a.files], () => async function(e, t) {
		const n = e.dailyGgirSummaries, a = /* @__PURE__ */ new Map();
		for (const i of t) a.set(`${i.fileId}::${i.analysisDate}`, i);
		const r = await Promise.all([...a.values()].map(async (e) => {
			const t = await n.where("[fileId+analysisDate]").equals([e.fileId, e.analysisDate]).first();
			return null != t?.id ? {
				...e,
				id: t.id
			} : e;
		}));
		await n.bulkPut(r), await Hi(e, [...new Set(t.map((e) => e.fileId))]);
	}(a, i), n);
}
function gs(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
const ws = {
	ggirHasptVariant: k.ggir_haspt_variant,
	ggirHasibVariantsEnabled: k.ggir_hasib_variants_enabled,
	ggirHasibVariants: [...k.ggir_hasib_variants],
	ggirHasibCountSource: k.ggir_hasib_count_source,
	ggirHasibCountEpochSeconds: k.ggir_hasib_count_epoch_seconds
}, vs = new Set(w), _s = new Set(C), Ss = new Set(E);
function Is(e) {
	const t = e ?? {}, n = t.ggir_haspt_variant, a = t.ggir_hasib_variants_enabled, r = t.ggir_hasib_variants, i = t.ggir_hasib_count_source, s = t.ggir_hasib_count_epoch_seconds, o = Array.isArray(r) ? Array.from(new Set(r.filter((e) => "string" == typeof e && _s.has(e)))) : [...ws.ggirHasibVariants];
	return {
		ggirHasptVariant: "string" == typeof n && vs.has(n) ? n : ws.ggirHasptVariant,
		ggirHasibVariantsEnabled: "boolean" == typeof a ? a : ws.ggirHasibVariantsEnabled,
		ggirHasibVariants: o,
		ggirHasibCountSource: "string" == typeof i && Ss.has(i) ? i : ws.ggirHasibCountSource,
		ggirHasibCountEpochSeconds: "number" == typeof s && Number.isInteger(s) && s >= 1 ? s : ws.ggirHasibCountEpochSeconds
	};
}
function ks(e) {
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
const bs = h.wear_minutes_per_day, Ds = h.valid_days_per_participant;
function Ms(e) {
	return "include" === e || "exclude" === e ? e : rt.partialDayPolicy;
}
function Es(e) {
	const t = "object" == typeof e && null !== e ? e : {}, n = t.minWearMinutesPerDay ?? t.min_wear_minutes_per_day, a = t.minValidDaysPerParticipant ?? t.min_valid_days_per_participant, r = t.requireWeekendDay ?? t.require_weekend_day, i = t.partialDayPolicy ?? t.partial_day_policy;
	return {
		minWearMinutesPerDay: R("wear_minutes_per_day", n) ?? rt.minWearMinutesPerDay,
		minValidDaysPerParticipant: R("valid_days_per_participant", a) ?? rt.minValidDaysPerParticipant,
		requireWeekendDay: "boolean" == typeof r ? r : rt.requireWeekendDay,
		partialDayPolicy: Ms(i)
	};
}
bs.maximum, Ds.maximum;
var As = t({
	NOTES_AUDIT_DEBOUNCE_MS: () => Ls,
	fileSwitchSettled: () => Xs,
	flushNotesAudit: () => Gs,
	flushSaveWithTimeout: () => Ws,
	markerActionsWaiting: () => oo,
	markerCommitsSettled: () => lo,
	nightForNonwearApply: () => eo,
	nightSessionStore: () => Lo,
	nightStateAfter: () => Ns,
	persistedStoreSlice: () => Zs,
	recordShownNightEditsForTest: () => Fs,
	rehydratePersistedStore: () => Fo,
	reviveOpenCutpointBands: () => Oo,
	takeShownNightEdits: () => Ts,
	useColorTheme: () => Ho,
	useDates: () => Co,
	useMarkers: () => Ro,
	useSleepScoringStore: () => No,
	withoutSessionIdentity: () => To
});
const Ps = k.physical_activity_enabled_classes;
function Ns() {
	const e = Mo?.state ?? No.getState();
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
function Os(e, t, n) {
	const a = No.getState().lastSavedAt, r = n?.night ?? Mo ?? void 0, i = n?.after ?? r?.state ?? Ns(), s = {
		...i,
		saved: r?.state ? r.state.saved : null === a ? null : {
			at: a,
			sleepCount: i.sleepMarkers.length,
			nonwearCount: i.nonwearMarkers.length
		}
	}, o = _e(e, {
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
	if (!Je(e)) return void Ye.recordAppEvent(e, l);
	const c = No.getState(), d = r?.fileId ?? c.currentFileId, u = r?.analysisDate ?? c.availableDates[c.currentDateIndex];
	if (null == d || !u) return;
	const p = {
		store: void 0 !== r?.store ? r.store : ne() ? se().name : null,
		actor: r?.actor ?? (c.username || "anonymous"),
		fileId: d,
		date: u,
		action: e,
		payload: l,
		binding: r?.binding ?? null
	};
	r?.state ? (r.edits ??= []).push(p) : xs.push({
		identity: Re(c),
		edit: p
	});
}
let xs = [];
function Ts(e, t) {
	const n = (n) => {
		return (a = n.edit).actor === e.actor && a.fileId === e.fileId && a.date === e.date && (null === e.store || null === a.store || a.store === e.store) && (!t || Ce(n.identity, t));
		var a;
	}, a = xs.filter(n);
	return a.length > 0 && (xs = xs.filter((e) => !n(e))), a.map((e) => e.edit);
}
function Fs() {
	const e = xs;
	xs = [];
	for (const { edit: t } of e) Ne(t);
}
const Cs = "This view is read-only. Its markers cannot be edited.", Rs = "Offset must be after onset";
function Hs(e, t, n) {
	Os("transition_flagged", {
		intent: e,
		guard: t,
		disposition: "refused_by_store"
	}, n ? { night: n } : void 0);
}
const Ls = 1500;
let js = null, Ks = null;
function qs(e, t = Ks?.value ?? "", n) {
	if (!n && t !== e && Ks?.identity && !Ce(Ks.identity, Re(No.getState()))) throw new Error("The notes audit has lost its owning night.");
	n || (Ks = null), t !== e && Os("notes_changed", {
		before: t,
		after: e,
		beforeLength: t.length,
		afterLength: e.length
	}, n ? { night: n } : void 0);
}
function Gs(e) {
	null !== js && (clearTimeout(js), js = null, qs(e));
}
function Us(e, t) {
	return !(e.length > 0) && t;
}
function Vs(e) {
	return e instanceof Error ? e.message : "Unknown error";
}
function Bs(e) {
	return import("./workspace-switch-RLEOFBNn.js").then(({ runWorkspaceScopeChange: t }) => t(e));
}
async function zs() {
	return (await import("./night-session-Cp-KE0hD.js").then((e) => e.t)).flushCurrentNight();
}
async function Ws(e) {
	let t;
	try {
		return await Promise.race([e(), new Promise((e) => {
			t = setTimeout(() => e(!1), 1e4);
		})]);
	} finally {
		void 0 !== t && clearTimeout(t);
	}
}
let $s = !1, Qs = !1, Js = null, Ys = Promise.resolve();
async function Xs() {
	for (;;) {
		const e = Ys;
		if (await e, e === Ys) return;
	}
}
function Zs(e) {
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
function eo(e, t) {
	const n = e.availableDates[e.currentDateIndex] ?? "";
	return {
		sleepMarkers: Ee(e.proposalNight, e.currentFileId ?? -1, n, { sleepMarkers: e.sleepMarkers }).sleepMarkers,
		nonwearMarkers: t,
		isInvalidNight: e.isInvalidNight,
		explicitNoNonwear: Us(t, e.explicitNoNonwear)
	};
}
function to(e) {
	const { sleepMarkers: t, nonwearMarkers: n, isInvalidNight: a, explicitNoNonwear: r, needsConsensus: i, notes: s, selectedPeriodIndex: o, markerHistory: l, markerHistoryIndex: c, _editGeneration: d } = e, u = {
		proposalNight: e.proposalNight,
		sleepMarkers: t.map((e) => Ae(e)),
		nonwearMarkers: n.map((e) => Ae(e)),
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
function no(e, t, n) {
	return t.map((t) => {
		const a = t.sourceRecordReference;
		if (void 0 === a || a === n) return t;
		const r = e.find((e) => e.sourceRecordReference === a);
		if (r && r.onsetTimestamp === t.onsetTimestamp && r.offsetTimestamp === t.offsetTimestamp && r.markerType === t.markerType) return t;
		const i = { ...t };
		return delete i.sourceRecordReference, i;
	});
}
function ao(e) {
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
function ro(e, t) {
	const { patch: n } = t, { isInvalidNightImplicit: a, ...r } = e, i = n.isInvalidNight ?? (!n.sleepMarkers?.some(Ue) && e.isInvalidNight), s = i && (void 0 === n.isInvalidNight ? !0 === e.isInvalidNightImplicit : !0 === n.isInvalidNightImplicit);
	return {
		...r,
		sleepMarkers: no(t.since ?? e.sleepMarkers, n.sleepMarkers ?? e.sleepMarkers, t.placesReference),
		nonwearMarkers: n.nonwearMarkers ?? e.nonwearMarkers,
		isInvalidNight: i,
		...s ? { isInvalidNightImplicit: !0 } : {},
		explicitNoNonwear: n.explicitNoNonwear ?? e.explicitNoNonwear
	};
}
function io(e, t, n, a) {
	const r = (e) => `${null == e.onsetTimestamp ? "--:--" : Te(e.onsetTimestamp)}–${null == e.offsetTimestamp ? "--:--" : Te(e.offsetTimestamp)}`, i = t.removed.map((t) => {
		const n = e.sleepMarkers[t];
		return Ue(n) ? `main sleep ${r(n)} removed` : `nap ${r(n)} removed`;
	});
	return t.invalidates && !t.removed.some((t) => Ue(e.sleepMarkers[t])) && i.unshift("GGIR main sleep removed"), `Manual nonwear lies inside a sleep period: ${i.join(", ")}${t.invalidates ? `; ${n || "this night"} is now an Invalid night` : ""}.${a ? "" : " Undo restores it."}`;
}
function so(e, t, n, a) {
	n.isInvalidNight && !t.isInvalidNight && void 0 === e.patch.isInvalidNight && Os("invalid_night_toggled", {
		value: !1,
		clearedSleepMarkers: []
	}, { after: t }), e.record?.(t, n), !n.isInvalidNight && t.isInvalidNight && !0 !== e.patch.isInvalidNight && Os("invalid_night_toggled", {
		value: !0,
		clearedSleepMarkers: [],
		implicit: !0 === t.isInvalidNightImplicit
	}, { after: t }), (a.removed.length > 0 || a.invalidates) && function(e, t) {
		for (const n of [...t.removed].reverse()) Os("marker_deleted", {
			category: "sleep",
			periodIndex: n,
			before: e.sleepMarkers[n]
		});
		if (t.invalidates) {
			const n = new Set(t.removed), a = new Set(t.kept);
			Os("invalid_night_toggled", {
				value: !0,
				clearedSleepMarkers: e.sleepMarkers.filter((e, t) => !n.has(t) && !a.has(t))
			});
		}
	}(t, a);
}
function oo() {
	return De.waiting();
}
function lo() {
	return De.settled();
}
function co(e, t, n = !1) {
	const a = De.executor(t.session);
	return a ? Promise.resolve(a(e)) : De.enqueue(t.session, (n) => (t.session = n, e()), n, Lo);
}
function uo(e, t, n) {
	const a = ("sleep" === t ? e.sleepMarkers : e.nonwearMarkers)[n];
	return a ? Pe(a) : null;
}
function po(e, t, n) {
	return null === n ? -1 : ("sleep" === t ? e.sleepMarkers : e.nonwearMarkers).findIndex((e) => Pe(e) === n);
}
function mo(e) {
	return {
		fileId: e.fileId,
		analysisDate: e.date,
		binding: null,
		actor: e.identity.scope.actor,
		store: e.identity.db?.name ?? null,
		state: {
			...De.night(e),
			saved: null
		}
	};
}
function ho(e) {
	return {
		session: e,
		context: e.context
	};
}
function yo(e) {
	return null !== e.session && De.holds(e.session, No.getState());
}
function fo(e) {
	return !!No.getState().nightLoading && (Nn("info", "Marker edit refused: the night is still loading", { action: e }), !0);
}
function go(e, t, n, { night: a, preview: r = !1 }) {
	if (fo("marker_action") && !a.session) return Promise.resolve();
	const i = () => {
		const i = yo(a) ? e() : {
			...De.context(a.session),
			...De.night(a.session)
		};
		let s = i, o = {};
		const l = {
			fileId: a.session.fileId,
			analysisDate: a.session.date,
			binding: null,
			actor: a.session.identity.scope.actor,
			store: a.session.identity.db?.name ?? null,
			state: {
				...ao(s),
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
				...ao(s),
				saved: null
			};
		};
		Mo = l;
		try {
			n(() => s, c);
		} finally {
			Mo = null;
		}
		const d = () => {
			for (const t of l.edits ?? []) Mo?.state ? (Mo.edits ??= []).push(t) : xs.push({
				identity: Re(e()),
				edit: t
			});
		};
		if (!r && ("sleepMarkers" in o || "isInvalidNight" in o)) return Ao(e, t, {
			night: a,
			editsDisplayedSleep: !0,
			propose: () => ({
				patch: o,
				snapshot: !1,
				dirty: !1,
				record: d
			})
		}).then(() => {});
		yo(a) ? (t(o), d()) : (De.updateContext(a.session, s), s._editGeneration !== i._editGeneration && De.write(a.session, ao(s), l.edits ?? [], s));
	}, s = De.executor(a.session);
	return Promise.resolve(s ? s(i) : co(i, a, r));
}
function wo(e, t) {
	Nn("warn", "Marker action dropped: its marker is gone", {
		category: e,
		targeted: null !== t
	});
}
let vo = null;
const _o = /* @__PURE__ */ new WeakMap();
function So(e, t) {
	const n = {
		placementRejected: !0,
		placementRejectionReason: t
	};
	De.holds(e, No.getState()) ? No.setState(n) : De.updateContext(e, {
		...De.context(e),
		...n
	});
}
async function Io(e, t) {
	const n = await je(e);
	return !n || (So(t, n), (qe("sleep", e.sleepMarkers.length) ?? qe("nonwear", e.nonwearMarkers.length)) && Hs("marker_placed", "marker_limit_exceeded", mo(t)), !1);
}
async function ko(e, t, n) {
	const a = t.identity.db;
	if (!a || !Ve(n) || e.isInvalidNight || e.sleepMarkers.some(Ue)) return e.sleepMarkers;
	const r = await a.ggirResultsBundles.get(t.fileId);
	if (!r) throw new Error("The imported GGIR night could not be read. No changes were saved.");
	const { ggirNightRecords: i } = await import("./local-export-shard-worker-coYervya.js").then((e) => e.t), s = (await i(t.fileId, r.imported, /* @__PURE__ */ new Map(), n?.ggirClockSteps)).get(t.date)?.[0]?.sleepMarkers.find(Ue);
	return s ? [...e.sleepMarkers, {
		...s,
		markerIndex: e.sleepMarkers.length + 1
	}] : e.sleepMarkers;
}
async function bo(e, t, a, r) {
	try {
		const i = a.identity.db ? await (await Promise.resolve().then(() => Yr)).getFileById(a.fileId, a.identity.db) : void 0;
		if (t.isInvalidNight && !0 === t.isInvalidNightImplicit && t.sleepMarkers.some(Ue) && (t.isInvalidNight = !1, t.isInvalidNightImplicit = !1), t.isInvalidNight || Oe(r.patch.proposalNight ?? null, a.fileId, a.date, t) || !We(i, { sleepMarkers: r.since ?? e.sleepMarkers }, t) || (t.isInvalidNight = !0, t.isInvalidNightImplicit = !0), !await Io(t, a)) return null;
		const s = {
			...t,
			sleepMarkers: await ko(t, a, i)
		};
		if (s.sleepMarkers !== t.sleepMarkers && !await Io(s, a)) return null;
		const [o] = await Ie([s], n());
		if (!o) throw new Error("The core returned no verdict for the marker edit.");
		return {
			...o,
			kept: o.kept.filter((e) => e < t.sleepMarkers.length),
			removed: o.removed.filter((e) => e < t.sleepMarkers.length)
		};
	} catch (i) {
		return De.fail(a, i), So(a, i instanceof Error ? i.message : String(i)), Nn("warn", "Marker edit refused: actours did not answer the manual-nonwear night rule", On(i)), null;
	}
}
function Do(e, t) {
	const { isInvalidNightImplicit: n, ...a } = e;
	return {
		...a,
		sleepMarkers: ke(e.sleepMarkers, t),
		isInvalidNight: e.isInvalidNight || t.invalidates,
		...!0 !== n || t.invalidates ? {} : { isInvalidNightImplicit: n }
	};
}
let Mo = null;
function Eo(e, { proposal: t, edited: n, baseNight: a, settle: r }) {
	const i = De.context(e), s = Fe(i, Do(n, r)), o = {
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
	Mo = o;
	try {
		so(t, n, a, r);
	} finally {
		Mo = null;
	}
	const l = {
		...i,
		...!1 === t.snapshot ? {} : to(i),
		...t.patch,
		...s,
		placementRejected: !1,
		placementRejectionReason: null,
		isDirty: !0,
		_editGeneration: i._editGeneration + 1
	};
	return De.write(e, s, o.edits ?? [], l), !0;
}
async function Ao(e, t, { propose: n, editsDisplayedSleep: a, night: r }) {
	if (!yo(r)) {
		const e = r.session ? De.night(r.session) : null;
		if (!r.session || !e) return Nn("warn", "Marker edit refused: its night has no session to write it", {}), !1;
		const t = {
			...De.context(r.session),
			...e,
			isInvalidNightImplicit: !0 === e.isInvalidNightImplicit
		}, i = a ? t : Ee(t.proposalNight, r.session.fileId, r.session.date, t), s = n(i, !0);
		if (!s) return !1;
		const o = ao(i), l = ro(o, s), c = await bo(o, l, r.session, s);
		return !!c && Eo(r.session, {
			proposal: s,
			edited: l,
			baseNight: o,
			settle: c
		});
	}
	const i = e(), s = i.availableDates[i.currentDateIndex] ?? "", o = null != i.currentFileId && m(i.proposalNight, i.currentFileId, s, i.sleepMarkers), l = a ? i : Ee(i.proposalNight, i.currentFileId ?? -1, s, i), c = n(l, !1);
	if (!c) return !1;
	const d = ao(l), u = ro(d, c), p = await bo(d, u, r.session, c);
	if (!p) return !1;
	if (!yo(r)) return r.session ? Eo(r.session, {
		proposal: c,
		edited: u,
		baseNight: d,
		settle: p
	}) : (Nn("warn", "Marker edit refused: its night has no session to write it", {}), !1);
	const h = e(), y = p.removed.length > 0 || p.invalidates, f = c.patch.markerMode ?? h.markerMode, g = Do(u, p);
	return t({
		...null !== h.proposalNight && (o || "proposalNight" in c.patch && null === c.patch.proposalNight) ? {
			proposalNight: null,
			acceptingProposal: h.proposalNight
		} : {},
		...!1 === c.snapshot ? {} : to(Ee(h.proposalNight, h.currentFileId ?? -1, s, h)),
		...c.patch,
		...!1 !== c.dirty || y ? {
			isDirty: !0,
			_editGeneration: h._editGeneration + 1
		} : {},
		sleepMarkers: g.sleepMarkers,
		isInvalidNight: g.isInvalidNight,
		isInvalidNightImplicit: !0 === g.isInvalidNightImplicit,
		placementRejected: !1,
		...y ? {
			selectedPeriodIndex: "sleep" === f ? null : c.patch.selectedPeriodIndex ?? h.selectedPeriodIndex,
			nightRuleReceipt: {
				date: s,
				text: io(u, p, s, !1)
			}
		} : {}
	}), so(c, u, d, p), !0;
}
function Po(e, t, n, { editsDisplayedSleep: a = !1, night: r }) {
	const i = r;
	return co(() => Ao(e, t, {
		propose: n,
		editsDisplayedSleep: a,
		night: i
	}), i);
}
const No = re()($(de((e, t, n) => {
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
		setScopeExitBlocked: (e) => Cn(() => a({ scopeExitBlocked: e })),
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
			if (!De.owns(e, No.getState())) return !1;
			const o = t();
			if (!Ce(e.identity, {
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
		preferredDisplayColumn: x.preferred_display_column,
		displayColumnChosenByUser: !1,
		viewModeHours: x.view_mode_hours,
		currentAlgorithm: x.default_algorithm,
		showAdjacentMarkers: !0,
		showNonwearOverlays: !0,
		showChoiNonwear: k.show_choi_nonwear,
		showLight: !1,
		showEventMarkers: !0,
		showAutoScoreProposal: !0,
		showDiaryOverlay: !1,
		autoScoreOnNavigate: !1,
		autoNonwearOnNavigate: !1,
		periodGuider: x.period_guider,
		sleepPeriodDetection: ze,
		hideFilenames: !1,
		diaryDayBoundaryHour: x.diary_day_boundary_hour,
		diaryMainSleepDateRule: x.diary_main_sleep_date_rule,
		diaryNapDateRule: x.diary_nap_date_rule,
		diaryNonwearDateRule: x.diary_nonwear_date_rule,
		diaryDstFoldPolicy: x.diary_dst_fold_policy,
		diaryDstGapPolicy: x.diary_dst_gap_policy,
		sleepDetectionRule: x.sleep_detection_rule,
		placementRuleset: x.placement_ruleset,
		scorerPostprocessingPreset: v.NONE,
		extractionPath: G.number_60s_epochs,
		nonwearDetectorsCounts: [...x.nonwear_detectors_counts],
		nonwearDetectorsGgir: [...x.nonwear_detectors_ggir],
		appliedStudySettingsAuthorityKey: null,
		appliedUserPreferencesKey: null,
		analysisParadigm: at(k.analysis_paradigm),
		actiwareAnalysis: k.actiware_analysis,
		studyDeclaredFields: [],
		nightStartHour: x.night_start_hour,
		nightEndHour: x.night_end_hour,
		validDayCriteria: rt,
		physicalActivityMethod: k.physical_activity_method,
		physicalActivityCutpointOverrides: k.physical_activity_cutpoints,
		participantPopulation: k.participant_population,
		participantLaterality: k.participant_laterality,
		physicalActivityNonwearAsClass: k.physical_activity_nonwear_class,
		physicalActivityEnabledClasses: [...k.physical_activity_enabled_classes],
		physicalActivityMaskPolicy: k.physical_activity_mask_policy,
		selectedStudyId: null,
		devicePreset: O,
		epochLengthSeconds: x.epoch_length_seconds,
		skipRows: x.skip_rows,
		columnMapping: {
			date_column: "",
			time_column: "",
			datetime_column: "",
			activity_column: "",
			axis_x_column: "",
			axis_z_column: "",
			vector_magnitude_column: ""
		},
		preferredActivityColumn: x.preferred_display_column,
		choiAxis: x.choi_axis,
		choiVariant: i.BOTH,
		sensorLocation: k.sensor_location,
		...ws,
		ggirConfig: It,
		uploadProgress: null,
		uploadResult: null,
		isUploading: !1,
		localProcessingError: null,
		localBatchSummary: null,
		setAuth: (e, n, r) => Bs(() => {
			a({
				sitePassword: e,
				username: n,
				isAuthenticated: !0,
				isAdmin: r ?? !1
			});
			const i = function(e) {
				try {
					const t = localStorage.getItem(kn(e));
					if (!t) return null;
					const n = JSON.parse(t), a = {};
					for (const e of In) e in n && (a[e] = n[e]);
					return Object.keys(a).length > 0 ? a : null;
				} catch {
					return null;
				}
			}(n);
			if (i) {
				const { cursor: e, settings: r } = function(e) {
					const t = new Set(_), n = {}, a = {};
					for (const [r, i] of Object.entries(e)) t.has(r) ? a[r] = i : n[r] = i;
					return {
						cursor: n,
						settings: a
					};
				}(i), s = function(e) {
					return `${X() ?? "legacy"}:${e}`;
				}(n), o = t().appliedUserPreferencesKey === s;
				a({
					...e,
					...o ? {} : r,
					appliedUserPreferencesKey: s
				});
			}
			const s = t();
			Ye.setContext(s.currentFileId, s.availableDates[s.currentDateIndex] ?? null, n, s.selectedStudyId);
		}),
		setIsAdmin: (e) => a({ isAdmin: e }),
		clearAuth: () => Bs(() => {
			const e = t();
			(function(e, t) {
				try {
					const n = {};
					for (const e of In) e in t && (n[e] = t[e]);
					localStorage.setItem(kn(e), JSON.stringify(n));
				} catch {}
			})(e.username, e), Sn.clear(), a({
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
			}), Ye.setContext(null, null, "anonymous", t().selectedStudyId);
		}),
		setDataRange: (e, n = null) => {
			const r = (e, t) => null === e && null === t || null !== e && null !== t && e.min === t.min && e.max === t.max, { _dataRange: i, _viewWindow: s } = t();
			r(i, e) && r(s, n) || a({
				_dataRange: e,
				_viewWindow: n
			});
		},
		setCurrentFile: (e, n, r, i) => {
			if (Qs) return void (Js = [
				e,
				n,
				r,
				i
			]);
			if (t().isDirty) return Qs = !0, void (Ys = (async () => {
				try {
					if (t().isDirty && !await (t()._flushSave ?? zs)()) return;
					Qs = !1, t().setCurrentFile(e, n, r, i);
				} catch (s) {
					a({ saveError: `File switch save failed: ${Vs(s)}` }), Nn("warn", "File switch save failed", On(s));
				} finally {
					Qs = !1;
					const e = Js;
					Js = null, e && t().setCurrentFile(...e);
				}
			})());
			const { currentFileId: s } = t(), o = s === e;
			Ye.setContext(e, o ? t().availableDates[t().currentDateIndex] ?? null : null, t().username, t().selectedStudyId), a({
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
		setCurrentDateIndex: (e) => $s ? Promise.resolve(!1) : ($s = !0, (async () => {
			try {
				vo && t().commitDragTransaction(vo.token);
				const { currentDateIndex: n, isDirty: r } = t();
				if (e === n) return !0;
				if (r) {
					if (!await (t()._flushSave ?? zs)()) return !1;
				} else await Promise.resolve();
				Gs(t().notes), Os("session_end");
				const i = t().availableDates[e] ?? null;
				return Ye.setContext(t().currentFileId, i, t().username, t().selectedStudyId), a({
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
				return a({ saveError: `Navigation save failed: ${Vs(n)}` }), Nn("warn", "Date navigation save failed", On(n)), !1;
			} finally {
				$s = !1;
			}
		})()),
		navigateDate: (e) => {
			$s || ($s = !0, (async () => {
				try {
					vo && t().commitDragTransaction(vo.token);
					const n = t(), r = n.currentDateIndex + e;
					if (r < 0 || r >= n.availableDates.length) return;
					if (n.isDirty) {
						if (!await (n._flushSave ?? zs)()) return;
					} else await Promise.resolve();
					const i = t(), s = i.currentDateIndex + e;
					if (s < 0 || s >= i.availableDates.length) return;
					Gs(t().notes), Os("session_end");
					const o = i.availableDates[s] ?? null;
					Ye.setContext(i.currentFileId, o, t().username, t().selectedStudyId), a({
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
					a({ saveError: `Navigation save failed: ${Vs(n)}` }), Nn("warn", "Date navigation save failed", On(n));
				} finally {
					$s = !1;
				}
			})());
		},
		_loadSleepMarkersFromServer: (e, t) => {
			De.owns(e, No.getState()) && a({ sleepMarkers: t });
		},
		_loadProposalMarkers: (e, n, r, i) => {
			if (!De.owns(e, No.getState())) return;
			const s = t().proposalNight?.authoredSleepMarkers ?? t().sleepMarkers;
			a({
				sleepMarkers: i,
				acceptingProposal: null,
				proposalNight: {
					fileId: n,
					date: r,
					authoredSleepMarkers: s,
					sleepMarkers: i.map((e) => Ae(e, {
						onsetTimestamp: e.onsetTimestamp,
						offsetTimestamp: e.offsetTimestamp,
						markerType: e.markerType
					}))
				}
			}), De.updateContext(e, t());
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
			De.owns(e, No.getState()) && a({ nonwearMarkers: t });
		},
		_loadExplicitNoNonwearFromServer: (e, t) => {
			De.owns(e, No.getState()) && a({ explicitNoNonwear: t });
		},
		_loadStatusFlagsFromServer: (e, t) => {
			De.owns(e, No.getState()) && a(t);
		},
		setSleepMarkers: (e, n, r) => Po(t, a, (e) => {
			const t = n(e);
			if (null === t) return null;
			const a = r?.acceptProposal ? { proposalNight: null } : {};
			if (void 0 === r?.invalidNight) return { patch: {
				sleepMarkers: t,
				...a
			} };
			const i = r.invalidNight, { kept: s, cleared: o } = i ? $e(t) : {
				kept: t,
				cleared: []
			};
			return {
				patch: {
					sleepMarkers: i ? s.map((e, t) => ({
						...e,
						markerIndex: t + 1
					})) : t,
					isInvalidNight: i,
					...a
				},
				record: (e, t) => {
					t.isInvalidNight !== i && Os("invalid_night_toggled", {
						value: i,
						clearedSleepMarkers: o
					});
				}
			};
		}, {
			night: ho(e),
			editsDisplayedSleep: !0
		}),
		setNonwearMarkers: (e, n) => Po(t, a, (e) => {
			const t = n(e);
			if (null === t) return null;
			const a = eo(e, t);
			return { patch: {
				nonwearMarkers: a.nonwearMarkers,
				explicitNoNonwear: a.explicitNoNonwear
			} };
		}, { night: ho(e) }),
		setSelectedPeriod: (e) => a({
			selectedPeriodIndex: e,
			placementRejected: !1
		}),
		setMarkerMode: (e) => a({
			markerMode: e,
			creationMode: "idle",
			pendingOnsetTimestamp: null,
			placementRejected: !1,
			selectedPeriodIndex: null
		}),
		handlePlotClick: (e, n) => {
			const r = ho(e);
			return co(async () => {
				const i = () => yo(r) ? t() : {
					...De.context(e),
					...De.night(e)
				}, s = (t) => {
					yo(r) ? a(t) : De.updateContext(e, {
						...i(),
						...t
					});
				};
				if (c(e.context.currentFileSourceType)) return Hs("marker_placed", "mutation_on_read_only_view"), So(r.session, Cs), Promise.resolve();
				const { markerMode: o, creationMode: l, pendingOnsetTimestamp: d, sleepMarkers: u, nonwearMarkers: p } = i();
				let m = n;
				const h = e.context._dataRange;
				if (h && (m = Math.max(h.min, Math.min(h.max, m))), "idle" === l) {
					const e = "sleep" === o ? u.findIndex((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && m >= e.onsetTimestamp && m <= e.offsetTimestamp) : p.findIndex((e) => null != e.startTimestamp && null != e.endTimestamp && m >= e.startTimestamp && m <= e.endTimestamp);
					if (-1 !== e) return s({
						selectedPeriodIndex: e,
						placementRejected: !1
					}), Promise.resolve();
					const t = qe(o, ("sleep" === o ? u.length : p.length) + 1);
					if (t) return Hs("marker_placed", "marker_limit_exceeded"), void So(r.session, t);
					s({
						creationMode: "placing_onset",
						pendingOnsetTimestamp: m,
						placementRejected: !1
					});
				} else if ("placing_onset" === l && null !== d) {
					const e = Math.min(d, m), n = Math.max(d, m);
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
			const s = "object" == typeof i ? i : void 0, o = "object" == typeof i ? i.markerType : i, l = mo(e);
			if (c(e.context.currentFileSourceType)) return Hs("marker_placed", "mutation_on_read_only_view", l), So(e, Cs), Promise.resolve(!1);
			if (!Number.isFinite(n) || !Number.isFinite(r) || r <= n) return console.warn(Rs), Hs("marker_placed", "boundaries_disordered", l), So(e, Rs), Promise.resolve(!1);
			const d = s?.sourceRecordReference;
			return Po(t, a, (t) => {
				const a = t.sleepMarkers;
				if (void 0 !== d && a.some((e) => Ue(e) && e.sourceRecordReference !== d)) return Hs("marker_placed", "multiple_main_sleep", l), So(e, "Diary Place cannot replace the existing main sleep. Move or delete it before placing this diary's sleep."), null;
				const i = (o === p.MAIN_SLEEP ? a.find(Ue) : void 0) ?? (void 0 === d ? void 0 : a.find((e) => e.sourceRecordReference === d)), s = i ? a.indexOf(i) : a.length, c = o ?? i?.markerType ?? Ke(a, t), u = {
					onsetTimestamp: n,
					offsetTimestamp: r,
					markerIndex: s + 1,
					markerType: c,
					...d ? { sourceRecordReference: d } : {}
				}, m = i ? Ae(i, u) : u;
				return {
					placesReference: d,
					patch: {
						sleepMarkers: i ? a.map((e) => e === i ? m : e) : [...a, m],
						selectedPeriodIndex: s,
						markerMode: "sleep"
					},
					record: (e, t) => i ? Os("marker_moved", {
						before: t,
						after: e
					}, { after: e }) : Os("marker_placed", {
						category: "sleep",
						markerType: c,
						periodIndex: s,
						onsetTimestamp: n,
						offsetTimestamp: r
					}, { after: e })
				};
			}, { night: ho(e) });
		},
		addNonwearMarker: (e, n, r) => {
			const i = mo(e);
			return c(e.context.currentFileSourceType) ? (Hs("marker_placed", "mutation_on_read_only_view", i), So(e, Cs), Promise.resolve(!1)) : !Number.isFinite(n) || !Number.isFinite(r) || r <= n ? (console.warn(Rs), Hs("marker_placed", "boundaries_disordered", i), So(e, Rs), Promise.resolve(!1)) : Po(t, a, ({ nonwearMarkers: e }) => {
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
					record: (e) => Os("marker_placed", {
						category: "nonwear",
						periodIndex: t,
						startTimestamp: n,
						endTimestamp: r
					}, { after: e })
				};
			}, { night: ho(e) });
		},
		updateMarker: (e, n, r, i) => {
			if (De.holds(e, No.getState()) && fo("marker_adjusted")) return Promise.resolve();
			if (c(e.context.currentFileSourceType)) return Hs("marker_adjusted", "mutation_on_read_only_view"), Promise.resolve();
			const s = i instanceof Promise, o = s ? null : _o.get(e) ?? null, l = o ? { ...o.night } : ho(e), d = uo(l.context, n, r);
			return null === d ? Promise.resolve() : co(async () => {
				let e = s ? await i : "function" == typeof i ? null : i;
				if (!e && "function" != typeof i) return;
				const c = (t, a = !1) => {
					const r = po(t, n, d);
					if (r < 0) return wo(n, d), null;
					if ("function" == typeof i && (e = i(t, r)), !e) return null;
					const s = { ...e }, o = l.context._dataRange;
					o && (void 0 !== s.onsetTimestamp && (s.onsetTimestamp = Math.max(o.min, Math.min(o.max, s.onsetTimestamp))), void 0 !== s.offsetTimestamp && (s.offsetTimestamp = Math.max(o.min, Math.min(o.max, s.offsetTimestamp))), void 0 !== s.startTimestamp && (s.startTimestamp = Math.max(o.min, Math.min(o.max, s.startTimestamp))), void 0 !== s.endTimestamp && (s.endTimestamp = Math.max(o.min, Math.min(o.max, s.endTimestamp))));
					const c = "sleep" === n ? t.sleepMarkers[r] : void 0, u = "sleep" === n ? void 0 : t.nonwearMarkers[r], p = c ?? u;
					if (!p || Object.entries(s).every(([e, t]) => Reflect.get(p, e) === t)) return null;
					if (c ?? u) {
						const e = c ? s.onsetTimestamp ?? c.onsetTimestamp : s.startTimestamp ?? u?.startTimestamp ?? null, t = c ? s.offsetTimestamp ?? c.offsetTimestamp : s.endTimestamp ?? u?.endTimestamp ?? null;
						if (null !== e && null !== t && t <= e) return console.warn(Rs), Hs("marker_adjusted", "boundaries_disordered"), So(l.session, Rs), null;
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
						explicitNoNonwear: Us(m, t.explicitNoNonwear),
						placementRejected: !1
					} };
				};
				if (o) {
					const e = yo(l) ? t() : De.context(l.session), n = c(e);
					if (!n) return;
					const r = ro(ao(e), n);
					if (!await Io(r, l.session)) return;
					return go(t, a, (e, t) => {
						o.snapshotPending && (o.snapshotPending = !1, t(to(e()))), t({
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
				await Ao(t, a, {
					editsDisplayedSleep: "sleep" === n,
					night: l,
					propose: (t, a) => {
						const i = c(t, a);
						return i && {
							...i,
							record: (t) => {
								Os("marker_adjusted", {
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
			const i = ho(e), s = uo(i.context, n, r);
			return go(t, a, (e, t) => {
				if (c(e().currentFileSourceType)) return void Hs("marker_deleted", "mutation_on_read_only_view");
				const a = po(e(), n, s);
				if (a < 0) return void wo(n, s);
				const r = "sleep" === n ? e().sleepMarkers[a] : e().nonwearMarkers[a];
				if (t(to(e())), "sleep" === n) {
					const { sleepMarkers: i } = e();
					t({
						sleepMarkers: i.filter((e, t) => t !== a).map((e, t) => ({
							...e,
							markerIndex: t + 1
						})),
						isDirty: !0,
						_editGeneration: e()._editGeneration + 1,
						selectedPeriodIndex: null
					}), Os("marker_deleted", {
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
					}), Os("marker_deleted", {
						category: n,
						periodIndex: a,
						before: r
					});
				}
			}, { night: i });
		},
		splitSleepPeriod: (e, n, r, i = []) => {
			if (c(e.context.currentFileSourceType)) return Hs("sleep_period_split", "mutation_on_read_only_view"), Promise.resolve();
			const s = ho(e), o = uo(s.context, "sleep", n);
			return Po(t, a, (e) => {
				const t = po(e, "sleep", o);
				if (t < 0) return wo("sleep", o), null;
				const n = i[i.indexOf(r) - 1], a = void 0 === n ? null : be(e.sleepMarkers, t, r, n);
				if (void 0 === n || !a?.ok || !a.markers) return Hs("sleep_period_split", "split_not_strictly_inside"), null;
				const s = a.newIndex ?? t + 1;
				return a.markers[s] = Ae(a.markers[s], void 0, !0), {
					patch: {
						sleepMarkers: a.markers,
						selectedPeriodIndex: s,
						markerMode: "sleep"
					},
					record: (e, a) => Os("sleep_period_split", {
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
			if (c(e.context.currentFileSourceType)) return Hs("sleep_period_merged", "mutation_on_read_only_view"), Promise.resolve();
			const i = ho(e), s = uo(i.context, "sleep", n);
			return Po(t, a, (e) => {
				const t = po(e, "sleep", s);
				if (t < 0) return wo("sleep", s), null;
				const n = Se(e.sleepMarkers, t, r);
				return n.ok && n.markers ? {
					patch: {
						sleepMarkers: n.markers,
						selectedPeriodIndex: n.mergedIndex ?? t,
						markerMode: "sleep"
					},
					record: (e, n) => Os("sleep_period_merged", {
						periodIndex: t,
						direction: r
					}, { after: n })
				} : (Hs("sleep_period_merged", "merge_no_neighbor"), null);
			}, {
				editsDisplayedSleep: !0,
				night: i
			}).then(() => {});
		},
		setIsInvalidNight: (e, n) => {
			if (De.holds(e, No.getState()) && fo("invalid_night_toggled")) return Promise.resolve(0);
			let r = n && !t().isInvalidNight ? $e(t().sleepMarkers).cleared.length : 0;
			return go(t, a, (e, t) => {
				r = (() => {
					if (e().isInvalidNight === n) return 0;
					const { kept: a, cleared: r } = $e(e().sleepMarkers), i = n ? r : [];
					t(to(e()));
					const s = () => {
						Os("invalid_night_toggled", {
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
			}, { night: ho(e) }).then(() => r);
		},
		setExplicitNoNonwear: (e, n) => {
			go(t, a, (e, t) => {
				if (e().explicitNoNonwear === n) return;
				t(to(e()));
				const a = () => {
					Os("no_nonwear_toggled", { value: n });
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
			}, { night: ho(e) });
		},
		setNeedsConsensus: (e, n) => {
			go(t, a, (e, t) => {
				e().needsConsensus !== n && (Os("consensus_toggled", { value: n }), t(to(e())), t({
					needsConsensus: n,
					isDirty: !0,
					_editGeneration: e()._editGeneration + 1
				}));
			}, { night: ho(e) });
		},
		setNotes: (e, n) => {
			go(t, a, (t, a) => {
				const r = t().notes, i = De.holds(e) ? null : Mo, s = null !== i || null === js;
				i || function(e) {
					null === js ? Ks = {
						identity: Re(No.getState()),
						value: e
					} : clearTimeout(js), js = setTimeout(() => {
						js = null, qs(t().notes);
					}, Ls);
				}(r), s && a(to(t())), a({
					notes: n,
					isDirty: !0,
					_editGeneration: t()._editGeneration + 1
				}), i && qs(n, r, i);
			}, { night: ho(e) });
		},
		setSaveError: (e) => a({ saveError: e }),
		_flushSave: zs,
		pushMarkerSnapshot: () => a(to(t())),
		undo: (e) => go(t, a, (e, t) => {
			if (c(e().currentFileSourceType)) return void Hs("undo", "mutation_on_read_only_view");
			const n = () => {
				const e = Ns();
				Os("undo", {
					sleepCount: e.sleepMarkers.length,
					nonwearCount: e.nonwearMarkers.length,
					stateAfter: e
				});
			}, { markerHistory: a, markerHistoryIndex: r, sleepMarkers: i, nonwearMarkers: s, isInvalidNight: o, explicitNoNonwear: l, needsConsensus: d, notes: u, selectedPeriodIndex: p, _editGeneration: m } = e();
			if (r < 0) return void Hs("undo", "undo_beyond_history");
			if (r === a.length - 1) {
				const c = {
					proposalNight: e().proposalNight,
					sleepMarkers: i.map((e) => Ae(e)),
					nonwearMarkers: s.map((e) => Ae(e)),
					isInvalidNight: o,
					isInvalidNightImplicit: e().isInvalidNightImplicit,
					explicitNoNonwear: l,
					needsConsensus: d,
					notes: u,
					selectedPeriodIndex: p,
					timestamp: Date.now(),
					editGeneration: m
				}, h = a[r];
				if (!h || h.editGeneration !== m) {
					const r = [...a, c];
					t({
						markerHistory: r,
						markerHistoryIndex: r.length - 1
					});
					const i = r[r.length - 2];
					i ? (t({
						proposalNight: i.proposalNight ?? null,
						sleepMarkers: i.sleepMarkers.map((e) => Ae(e)),
						nonwearMarkers: i.nonwearMarkers.map((e) => Ae(e)),
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
					}), n()) : Hs("undo", "undo_beyond_history");
					return;
				}
			}
			const h = r - 1;
			if (h < 0) return void Hs("undo", "undo_beyond_history");
			const y = a[h];
			y ? (t({
				proposalNight: y.proposalNight ?? null,
				sleepMarkers: y.sleepMarkers.map((e) => Ae(e)),
				nonwearMarkers: y.nonwearMarkers.map((e) => Ae(e)),
				isInvalidNight: y.isInvalidNight,
				isInvalidNightImplicit: y.isInvalidNightImplicit ?? !1,
				explicitNoNonwear: y.explicitNoNonwear,
				needsConsensus: y.needsConsensus,
				notes: y.notes,
				selectedPeriodIndex: y.selectedPeriodIndex,
				isDirty: !0,
				_editGeneration: e()._editGeneration + 1,
				markerHistory: a.map((t, n) => n === h ? {
					...t,
					editGeneration: e()._editGeneration + 1
				} : t),
				markerHistoryIndex: h
			}), n()) : Hs("undo", "undo_beyond_history");
		}, { night: ho(e) }),
		redo: (e) => go(t, a, (e, t) => {
			if (c(e().currentFileSourceType)) return void Hs("redo", "mutation_on_read_only_view");
			const { markerHistory: n, markerHistoryIndex: a } = e(), r = a + 1;
			if (r >= n.length) return void Hs("redo", "redo_beyond_history");
			const i = n[r];
			if (!i) return void Hs("redo", "redo_beyond_history");
			t({
				proposalNight: i.proposalNight ?? null,
				sleepMarkers: i.sleepMarkers.map((e) => Ae(e)),
				nonwearMarkers: i.nonwearMarkers.map((e) => Ae(e)),
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
			const s = Ns();
			Os("redo", {
				sleepCount: s.sleepMarkers.length,
				nonwearCount: s.nonwearMarkers.length,
				stateAfter: s
			});
		}, { night: ho(e) }),
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
			if (fo("marker_moved")) return;
			const n = {
				token: e,
				night: ho(e),
				before: null,
				snapshotPending: !0
			};
			vo = n, _o.set(e, n), go(t, a, (t, a) => {
				n.before = t(), De.setDragging(e, !0), a({
					_isDragTransaction: !0,
					_dragSnapshotForAudit: {
						sleepMarkers: t().sleepMarkers.map((e) => Ae(e)),
						nonwearMarkers: t().nonwearMarkers.map((e) => Ae(e))
					}
				});
			}, { night: n.night });
		},
		commitDragTransaction: (e) => {
			const n = _o.get(e);
			if (!n) return Promise.resolve();
			_o.delete(e), vo === n && (vo = null);
			let r = null;
			return co(async () => {
				try {
					const e = n.before;
					if (!e) return;
					const i = {
						sleepMarkers: e.sleepMarkers,
						nonwearMarkers: e.nonwearMarkers
					}, s = r ?? (yo(n.night) ? t() : De.night(n.night.session));
					if (!s || JSON.stringify(i) === JSON.stringify({
						sleepMarkers: s.sleepMarkers,
						nonwearMarkers: s.nonwearMarkers
					})) return;
					const o = r ??= {
						sleepMarkers: s.sleepMarkers.map((e) => Ae(e)),
						nonwearMarkers: s.nonwearMarkers.map((e) => Ae(e))
					};
					if (!await Ao(t, a, {
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
								JSON.stringify(i) !== JSON.stringify(t) && Os("marker_moved", {
									before: i,
									after: t
								}, { after: e });
							}
						})
					})) {
						const e = {
							sleepMarkers: i.sleepMarkers.map((e) => Ae(e)),
							nonwearMarkers: i.nonwearMarkers.map((e) => Ae(e))
						};
						yo(n.night) ? a({
							...e,
							isDirty: !0,
							_editGeneration: t()._editGeneration + 1
						}) : n.night.session && De.write(n.night.session, {
							...De.night(n.night.session),
							...e
						}, []);
					}
				} finally {
					if (De.setDragging(e, !1), yo(n.night)) a({
						_isDragTransaction: !1,
						_dragSnapshotForAudit: null,
						...t().isDirty && !n.snapshotPending ? { _editGeneration: t()._editGeneration + 1 } : {}
					});
					else {
						const e = De.context(n.night.session);
						De.updateContext(n.night.session, {
							...e,
							_isDragTransaction: !1,
							_dragSnapshotForAudit: null
						});
					}
				}
			}, n.night).then(() => {});
		},
		clearAllMarkers: (e, n) => c(e.context.currentFileSourceType) || De.holds(e, No.getState()) && fo("markers_cleared") ? Promise.resolve(!1) : go(t, a, (e, t) => {
			n?.skipAudit || Os("markers_cleared", {
				sleepCount: e().sleepMarkers.length,
				nonwearCount: e().nonwearMarkers.length
			}), t(to(e())), t({
				sleepMarkers: [],
				nonwearMarkers: [],
				isDirty: !0,
				_editGeneration: e()._editGeneration + 1,
				selectedPeriodIndex: null
			});
		}, { night: ho(e) }).then(() => !0),
		applyConsensusCandidate: (e, { kind: n, sleepMarkers: r, nonwearMarkers: i, isInvalidNight: s, explicitNoNonwear: o }) => Po(t, a, () => {
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
			night: ho(e),
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
		setSleepPeriodDetection: (e) => a((t) => ({ sleepPeriodDetection: Be({
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
			a({ actiwareAnalysis: tt(e) });
		},
		setAnalysisParadigm: (e) => {
			a({ analysisParadigm: at(e) });
		},
		applyScoringRecipePatch: (e) => a(e),
		setNightHours: (e, t) => a({
			nightStartHour: e,
			nightEndHour: t
		}),
		setAppliedStudySettingsAuthorityKey: (e) => a({ appliedStudySettingsAuthorityKey: e }),
		setValidDayCriteria: (e) => a((t) => ({ validDayCriteria: Es({
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
			a({ physicalActivityEnabledClasses: Ps.filter((t) => e.includes(t)) });
		},
		setPhysicalActivityMaskPolicy: (e) => {
			a({ physicalActivityMaskPolicy: { ...e } });
		},
		setSelectedStudyId: (e) => Bs(() => {
			const n = t();
			Ye.setContext(n.currentFileId, n.availableDates[n.currentDateIndex] ?? null, n.username, e), a({ selectedStudyId: e });
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
		colorTheme: { ...bn },
		setColorTheme: (e) => a((t) => ({ colorTheme: {
			...t.colorTheme,
			...e,
			preset: "custom"
		} })),
		applyColorPreset: (e) => {
			const t = Dn[e];
			t && a({ colorTheme: { ...t } });
		},
		resetColorTheme: () => a({ colorTheme: { ...bn } }),
		resetPersistedSlice: () => {
			Q.setState({
				localProcessingProgress: null,
				isLocalProcessing: !1
			});
			const e = To(Zs(n.getInitialState()));
			Cn(() => a({
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
			for (const n of I) {
				if (!A[n].persisted) continue;
				const a = A[n].storeKeys.zustand;
				a && (t[a] = e[n]);
			}
			t.sleepPeriodDetection = Be(e.sleep_period_detection), a(t);
		}
	};
}, {
	name: "sleep-scoring-storage",
	storage: z(() => zn),
	skipHydration: !0,
	onRehydrateStorage: () => (e, t) => {
		t && Nn("warn", "Persisted store rehydration failed", On(t));
	},
	partialize: (e) => Zs(e),
	merge: (e, t) => {
		const n = {
			...t,
			...e
		};
		e && "object" == typeof e && "sitePassword" in e && (n.sitePassword = null), n.sleepPeriodDetection = Be(n.sleepPeriodDetection), n.validDayCriteria = Es(n.validDayCriteria), n.physicalActivityCutpointOverrides = Oo(n.physicalActivityCutpointOverrides);
		const a = n;
		for (const r of I) {
			if (!r.startsWith("diary_")) continue;
			const e = A[r].storeKeys.zustand;
			e && null !== f(r, a[e]) && (a[e] = k[r]);
		}
		return n.colorTheme = function(e) {
			if (!e || "object" != typeof e) return { ...bn };
			const t = Dn[e.preset];
			return t ? { ...t } : { ...e };
		}(n.colorTheme), n;
	}
}), { name: "SleepScoringStore" }));
function Oo(e) {
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
ye(() => No.getState());
const xo = /* @__PURE__ */ new Set([
	"username",
	"isAuthenticated",
	"sitePassword"
]);
function To(e) {
	return Object.fromEntries(Object.entries(e).filter(([e]) => !xo.has(e)));
}
async function Fo(e) {
	await No.persist.rehydrate();
	const t = No.getState(), n = e ?? t.username;
	(t.isAuthenticated || void 0 !== e) && n && Ye.setContext(t.currentFileId, t.availableDates[t.currentDateIndex] ?? null, n, t.selectedStudyId);
	const { cutpointOverrides: a } = await async function(e, t) {
		const n = { cutpointOverrides: null };
		if (null === e || "" === e) return n;
		const a = function(e) {
			return `sleep-scoring:legacy-device-settings:adopted:${e}`;
		}(e);
		if (null !== gs(a)) return n;
		try {
			const e = t ? await ts(t) : await ts(), n = e?.extraSettings ?? {}, r = {}, i = function() {
				const e = gs("sleep-scoring:sensor-location:selected");
				return "wrist" === e || "hip" === e ? e : null;
			}();
			null !== i && void 0 === n.sensor_location && (r.sensor_location = i);
			const s = function() {
				const e = gs("sleep-scoring:lstm-onnx:selected-model");
				if (null === e || "" === e) return null;
				const t = gs(`sleep-scoring:lstm-onnx:threshold:${e}`), n = null === t ? NaN : Number(t);
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
				t ? await as(n, t) : await as(n);
			}
			const o = function(e = localStorage) {
				const t = nt(e), n = {};
				for (const a of t) n[a.method] = a.thresholds;
				return Object.keys(n).length > 0 ? n : null;
			}();
			try {
				localStorage.setItem(a, (/* @__PURE__ */ new Date()).toISOString());
			} catch {}
			return { cutpointOverrides: o };
		} catch (r) {
			return Nn("warn", "Adopting legacy device settings into the workspace failed", On(r)), n;
		}
	}(X());
	null !== a && No.setState((e) => ({ physicalActivityCutpointOverrides: {
		...a,
		...e.physicalActivityCutpointOverrides
	} }));
	const { resetPersistedAlgorithmNonwear: r } = await import("./pa-mask-nonwear-reset-D2I-OgC6.js");
	await r(X(), No.getState().physicalActivityMaskPolicy, (e) => {
		No.setState({ physicalActivityMaskPolicy: e });
	});
}
const Co = () => No(xt((e) => ({
	currentDateIndex: e.currentDateIndex,
	availableDates: e.availableDates,
	currentDate: e.availableDates[e.currentDateIndex] ?? null,
	setAvailableDates: e.setAvailableDates,
	setCurrentDateIndex: e.setCurrentDateIndex,
	navigateDate: e.navigateDate
}))), Ro = () => No(xt((e) => ({
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
}))), Ho = () => No(xt((e) => ({
	colorTheme: e.colorTheme,
	setColorTheme: e.setColorTheme,
	applyColorPreset: e.applyColorPreset,
	resetColorTheme: e.resetColorTheme
}))), Lo = {
	getState: No.getState,
	getInitialState: () => No.getInitialState(),
	flushNotesAudit: () => Gs(No.getState().notes),
	setState: No.setState,
	takeShownEdits: (e) => (Gs(No.getState().notes), Ts({
		store: e.db?.name ?? null,
		actor: e.scope.actor,
		fileId: e.fileId,
		date: e.date
	}, e))
};
export { Gi as $, St as $t, bi as A, Oa as At, Fi as B, ra as Bt, Bi as C, La as Ct, ys as D, Ca as Dt, zi as E, Da as Et, is as F, pa as Ft, fs as G, Yn as Gt, ji as H, aa as Ht, ss as I, ma as It, fi as J, Nn as Jt, ls as K, Wn as Kt, ps as L, la as Lt, _i as M, ka as Mt, ts as N, Sa as Nt, Wi as O, Pa as Ot, Vi as P, ga as Pt, rs as Q, kt as Qt, us as R, na as Rt, $i as S, Ka as St, Ki as T, ba as Tt, Ci as U, Xn as Ut, as as V, Zn as Vt, Ui as W, sa as Wt, Oi as X, Dt as Xt, wi as Y, Et as Yt, Ti as Z, bt as Zt, ki as _, $a as _t, Is as a, Lr as at, Ji as b, ja as bt, ni as c, Dr as ct, yi as d, vr as dt, ht as en, Qi as et, Hi as f, fr as ft, Ii as g, ir as gt, gi as h, sr as ht, No as i, Br as it, Mi as j, xa as jt, Si as k, Ma as kt, ii as l, br as lt, Yr as m, ur as mt, Lo as n, $r as nt, ks as o, Hr as ot, Zi as p, yr as pt, cs as q, On as qt, As as r, Vr as rt, Xr as s, jr as st, lo as t, Jr as tt, xi as u, wr as ut, Li as v, Va as vt, ds as w, Fa as wt, ms as x, Ha as xt, Di as y, Wa as yt, hs as z, oa as zt };
