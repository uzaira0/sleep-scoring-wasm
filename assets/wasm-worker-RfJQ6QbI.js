var e = Object.defineProperty, a = (a, n) => {
	let t = {};
	for (var r in a) e(t, r, {
		get: a[r],
		enumerable: !0
	});
	return n || e(t, Symbol.toStringTag, { value: "Module" }), t;
}, n = "argument,value,context\ndatadir,,not applicable\ndo.report,\"c(2,4,5,6)\",not applicable\nf0,1,not applicable\nf1,542,not applicable\nmode,\"c(1,2,3,4,5,6)\",not applicable\noutputdir,,not applicable\nrawaccfiles_formats,csv,not applicable\nstudyname,,not applicable\nGGIRread_version,could not extract version,not applicable\nGGIRversion,3.0.0,not applicable\nR_version,R version 4.4.3 (2025-02-28),not applicable\nqwindow,\"c(0,24)\",params_247\nqlevels,\"c(0.958333333333333,0.979166666666667,0.993055555555556)\",params_247\nqwindow_dateformat,%d-%m-%Y,params_247\nilevels,c(),params_247\nIVIS_windowsize_minutes,60,params_247\nIVIS_epochsize_seconds,c(),params_247\nIVIS.activity.metric,2,params_247\nIVIS_acc_threshold,20,params_247\nqM5L5,c(),params_247\nMX.ig.min.dur,10,params_247\nM5L5res,10,params_247\nwinhr,\"c(5,10)\",params_247\niglevels,\"c(0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1025,1050,1075,1100,1125,1150,1175,1200,1225,1250,1275,1300,1325,1350,1375,1400,1425,1450,1475,1500,1525,1550,1575,1600,1625,1650,1675,1700,1725,1750,1775,1800,1825,1850,1875,1900,1925,1950,1975,2000,2025,2050,2075,2100,2125,2150,2175,2200,2225,2250,2275,2300,2325,2350,2375,2400,2425,2450,2475,2500,2525,2550,2575,2600,2625,2650,2675,2700,2725,2750,2775,2800,2825,2850,2875,2900,2925,2950,2975,3000,3025,3050,3075,3100,3125,3150,3175,3200,3225,3250,3275,3300,3325,3350,3375,3400,3425,3450,3475,3500,3525,3550,3575,3600,3625,3650,3675,3700,3725,3750,3775,3800,3825,3850,3875,3900,3925,3950,3975,4000,8000)\",params_247\nLUXthresholds,\"c(0,100,500,1000,3000,5000,10000)\",params_247\nLUX_cal_constant,c(),params_247\nLUX_cal_exponent,c(),params_247\nLUX_day_segments,c(),params_247\nwindow.summary.size,10,params_247\nL5M5window,\"c(0,24)\",params_247\ncosinor,TRUE,params_247\nincludedaycrit,1,params_cleaning\nndayswindow,7,params_cleaning\nstrategy,1,params_cleaning\nmaxdur,0,params_cleaning\nhrs.del.start,0,params_cleaning\nhrs.del.end,0,params_cleaning\nincludedaycrit.part5,0.083333333,params_cleaning\nexcludefirstlast.part5,FALSE,params_cleaning\nTimeSegments2ZeroFile,c(),params_cleaning\ndo.imp,TRUE,params_cleaning\ndata_cleaning_file,c(),params_cleaning\nminimum_MM_length.part5,23,params_cleaning\nexcludefirstlast,FALSE,params_cleaning\nincludenightcrit,1,params_cleaning\nexcludefirst.part4,FALSE,params_cleaning\nexcludelast.part4,FALSE,params_cleaning\nmax_calendar_days,0,params_cleaning\nnonWearEdgeCorrection,TRUE,params_cleaning\nnonwear_approach,2023,params_cleaning\nsegmentWEARcrit.part5,0.5,params_cleaning\nsegmentDAYSPTcrit.part5,\"c(0.9,0)\",params_cleaning\noverwrite,FALSE,params_general\nacc.metric,ENMO,params_general\nmaxNcores,c(),params_general\nprint.filename,FALSE,params_general\ndo.parallel,TRUE,params_general\nwindowsizes,\"c(5,900,3600)\",params_general\ndesiredtz,EST,params_general\nconfigtz,c(),params_general\nidloc,1,params_general\ndayborder,0,params_general\npart5_agg2_60seconds,FALSE,params_general\nsensor.location,wrist,params_general\nexpand_tail_max_hours,c(),params_general\nrecordingEndSleepHour,c(),params_general\ndataFormat,raw,params_general\nmaxRecordingInterval,c(),params_general\nextEpochData_timeformat,%d-%m-%Y %H:%M:%S,params_general\ndo.anglex,FALSE,params_metrics\ndo.angley,FALSE,params_metrics\ndo.anglez,TRUE,params_metrics\ndo.zcx,FALSE,params_metrics\ndo.zcy,FALSE,params_metrics\ndo.zcz,FALSE,params_metrics\ndo.enmo,TRUE,params_metrics\ndo.lfenmo,FALSE,params_metrics\ndo.en,FALSE,params_metrics\ndo.mad,FALSE,params_metrics\ndo.enmoa,FALSE,params_metrics\ndo.roll_med_acc_x,FALSE,params_metrics\ndo.roll_med_acc_y,FALSE,params_metrics\ndo.roll_med_acc_z,FALSE,params_metrics\ndo.dev_roll_med_acc_x,FALSE,params_metrics\ndo.dev_roll_med_acc_y,FALSE,params_metrics\ndo.dev_roll_med_acc_z,FALSE,params_metrics\ndo.bfen,FALSE,params_metrics\ndo.hfen,FALSE,params_metrics\ndo.hfenplus,FALSE,params_metrics\ndo.lfen,FALSE,params_metrics\ndo.lfx,FALSE,params_metrics\ndo.lfy,FALSE,params_metrics\ndo.lfz,FALSE,params_metrics\ndo.hfx,FALSE,params_metrics\ndo.hfy,FALSE,params_metrics\ndo.hfz,FALSE,params_metrics\ndo.bfx,FALSE,params_metrics\ndo.bfy,FALSE,params_metrics\ndo.bfz,FALSE,params_metrics\ndo.brondcounts,FALSE,params_metrics\ndo.neishabouricounts,FALSE,params_metrics\nhb,15,params_metrics\nlb,0.2,params_metrics\nn,4,params_metrics\nzc.lb,0.25,params_metrics\nzc.hb,3,params_metrics\nzc.sb,0.01,params_metrics\nzc.order,2,params_metrics\nzc.scale,1,params_metrics\nactilife_LFE,FALSE,params_metrics\nepochvalues2csv,FALSE,params_output\nsave_ms5rawlevels,TRUE,params_output\nsave_ms5raw_format,csv,params_output\nsave_ms5raw_without_invalid,TRUE,params_output\nstorefolderstructure,FALSE,params_output\ntimewindow,WW,params_output\nviewingwindow,1,params_output\ndofirstpage,TRUE,params_output\nvisualreport,TRUE,params_output\nweek_weekend_aggregate.part5,FALSE,params_output\ndo.part3.pdf,TRUE,params_output\noutliers.only,TRUE,params_output\ncriterror,4,params_output\ndo.visual,TRUE,params_output\ndo.sibreport,FALSE,params_output\ndo.part2.pdf,TRUE,params_output\nsep_reports,\",\",params_output\nsep_config,\",\",params_output\nvisualreport_without_invalid,FALSE,params_output\nmvpathreshold,100,params_phyact\nboutcriter,0.8,params_phyact\nmvpadur,\"c(1,5,10)\",params_phyact\nboutcriter.in,0.9,params_phyact\nboutcriter.lig,0.8,params_phyact\nboutcriter.mvpa,0.8,params_phyact\nthreshold.lig,30,params_phyact\nthreshold.mod,100,params_phyact\nthreshold.vig,400,params_phyact\nboutdur.mvpa,\"c(1,5,10)\",params_phyact\nboutdur.in,\"c(1,10,30)\",params_phyact\nboutdur.lig,\"c(1,10,30)\",params_phyact\nfrag.metrics,all,params_phyact\nchunksize,1,params_rawdata\nspherecrit,0.3,params_rawdata\nminloadcrit,72,params_rawdata\nprintsummary,FALSE,params_rawdata\ndo.cal,TRUE,params_rawdata\nbackup.cal.coef,retrieve,params_rawdata\ndynrange,c(),params_rawdata\nminimumFileSizeMB,2,params_rawdata\nrmc.dec,.,params_rawdata\nrmc.firstrow.acc,c(),params_rawdata\nrmc.firstrow.header,c(),params_rawdata\nrmc.header.length,c(),params_rawdata\nrmc.col.acc,\"c(1,2,3)\",params_rawdata\nrmc.col.temp,c(),params_rawdata\nrmc.col.time,c(),params_rawdata\nrmc.unit.acc,g,params_rawdata\nrmc.unit.temp,C,params_rawdata\nrmc.unit.time,POSIX,params_rawdata\nrmc.format.time,%Y-%m-%d %H:%M:%OS,params_rawdata\nrmc.bitrate,c(),params_rawdata\nrmc.dynamic_range,c(),params_rawdata\nrmc.unsignedbit,TRUE,params_rawdata\nrmc.origin,1/1/1970,params_rawdata\nrmc.desiredtz,c(),params_rawdata\nrmc.configtz,c(),params_rawdata\nrmc.sf,c(),params_rawdata\nrmc.headername.sf,c(),params_rawdata\nrmc.headername.sn,c(),params_rawdata\nrmc.headername.recordingid,c(),params_rawdata\nrmc.header.structure,c(),params_rawdata\nrmc.check4timegaps,FALSE,params_rawdata\nrmc.noise,13,params_rawdata\nrmc.col.wear,c(),params_rawdata\nrmc.doresample,FALSE,params_rawdata\ninterpolationType,1,params_rawdata\nimputeTimegaps,TRUE,params_rawdata\nfrequency_tol,0.1,params_rawdata\nrmc.scalefactor.acc,1,params_rawdata\nanglethreshold,5,params_sleep\ntimethreshold,5,params_sleep\nignorenonwear,TRUE,params_sleep\nconstrain2range,TRUE,params_sleep\nHASPT.algo,HDCZA,params_sleep\nHASIB.algo,vanHees2015,params_sleep\nSadeh_axis,,params_sleep\nlongitudinal_axis,c(),params_sleep\nHASPT.ignore.invalid,FALSE,params_sleep\nloglocation,c(),params_sleep\ncolid,1,params_sleep\ncoln1,2,params_sleep\nnnights,c(),params_sleep\nrelyonguider,FALSE,params_sleep\ndef.noc.sleep,1,params_sleep\nsleeplogsep,c(),params_sleep\nsleepwindowType,SPT,params_sleep\npossible_nap_window,\"c(9,18)\",params_sleep\npossible_nap_dur,\"c(15,240)\",params_sleep\n";
const t = "no_sleep_toggled", r = "main_sleep_on_no_sleep_night";
Object.freeze({ [t]: "invalid_night_toggled" }), Object.freeze({ [r]: "main_sleep_on_invalid_night" }), Object.freeze({
	camel: "isNoSleep",
	snake: "is_no_sleep",
	placement: "no_sleep",
	auditAction: t,
	exportHeader: "Is No Sleep",
	guard: r
});
const s = new Uint32Array([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]);
function i(e, a) {
	return (e >>> a | e << 32 - a) >>> 0;
}
const o = {
	choi_2011: "choi_2011",
	flat_activity: "flat_activity",
	gt3x_capsense: "gt3x_capsense",
	actiware_off_wrist: "actiware_off_wrist",
	detach_nonwear: "detach_nonwear",
	van_hees_2013: "van_hees_2013",
	van_hees_2023: "van_hees_2023",
	ggir_saved: "ggir_saved",
	ggir_part2_invalid: "ggir_part2_invalid",
	choi_2012: "choi_2012",
	troiano_2008: "troiano_2008",
	ahmadi_2020: "ahmadi_2020",
	skovgaard_2023: "skovgaard_2023"
}, c = {
	diary: "diary",
	hdcza: "hdcza",
	l5: "l5",
	selected_scorer_first_last: "selected_scorer_first_last",
	selected_scorer_longest_bout: "selected_scorer_longest_bout",
	quiet_bout: "quiet_bout",
	event_marker: "event_marker",
	actiware_rest_interval: "actiware_rest_interval",
	none: "none"
}, l = n;
var u;
Object.freeze({
	name: "default ELEMENT",
	sha256: (u = n, function(e) {
		const a = e instanceof Uint8Array ? e : new Uint8Array(e);
		let n = "";
		for (const t of a) n += t.toString(16).padStart(2, "0");
		return n;
	}(function(e) {
		const a = new Uint32Array([
			1779033703,
			3144134277,
			1013904242,
			2773480762,
			1359893119,
			2600822924,
			528734635,
			1541459225
		]), n = 8n * BigInt(e.length), t = 64 * Math.ceil((e.length + 9) / 64), r = new Uint8Array(t);
		r.set(e), r[e.length] = 128;
		const o = new DataView(r.buffer);
		o.setBigUint64(t - 8, n, !1);
		const c = /* @__PURE__ */ new Uint32Array(64);
		for (let d = 0; d < t; d += 64) {
			for (let a = 0; a < 16; a++) c[a] = o.getUint32(d + 4 * a, !1);
			for (let a = 16; a < 64; a++) {
				const e = c[a - 15], n = c[a - 2], t = i(e, 7) ^ i(e, 18) ^ e >>> 3, r = i(n, 17) ^ i(n, 19) ^ n >>> 10;
				c[a] = c[a - 16] + t + c[a - 7] + r >>> 0;
			}
			let e = a[0], n = a[1], t = a[2], r = a[3], l = a[4], u = a[5], m = a[6], p = a[7];
			for (let a = 0; a < 64; a++) {
				const o = p + (i(l, 6) ^ i(l, 11) ^ i(l, 25)) + (l & u ^ ~l & m) + s[a] + c[a] >>> 0, d = (i(e, 2) ^ i(e, 13) ^ i(e, 22)) + (e & n ^ e & t ^ n & t) >>> 0;
				p = m, m = u, u = l, l = r + o >>> 0, r = t, t = n, n = e, e = o + d >>> 0;
			}
			a[0] = a[0] + e >>> 0, a[1] = a[1] + n >>> 0, a[2] = a[2] + t >>> 0, a[3] = a[3] + r >>> 0, a[4] = a[4] + l >>> 0, a[5] = a[5] + u >>> 0, a[6] = a[6] + m >>> 0, a[7] = a[7] + p >>> 0;
		}
		const l = /* @__PURE__ */ new Uint8Array(32), u = new DataView(l.buffer);
		for (let s = 0; s < 8; s++) u.setUint32(4 * s, a[s], !1);
		return l;
	}(new TextEncoder().encode(u)))),
	csvText: n
});
const d = Symbol("Comlink.proxy"), m = Symbol("Comlink.endpoint"), p = Symbol("Comlink.releaseProxy"), _ = Symbol("Comlink.finalizer"), f = Symbol("Comlink.thrown"), g = (e) => "object" == typeof e && null !== e || "function" == typeof e, y = /* @__PURE__ */ new Map([["proxy", {
	canHandle: (e) => g(e) && e[d],
	serialize(e) {
		const { port1: a, port2: n } = new MessageChannel();
		return h(e, a), [n, [n]];
	},
	deserialize: (e) => (e.start(), function(e) {
		const a = /* @__PURE__ */ new Map();
		return e.addEventListener("message", function(e) {
			const { data: n } = e;
			if (!n || !n.id) return;
			const t = a.get(n.id);
			if (t) try {
				t(n);
			} finally {
				a.delete(n.id);
			}
		}), E(e, a, [], void 0);
	}(e))
}], ["throw", {
	canHandle: (e) => g(e) && f in e,
	serialize({ value: e }) {
		let a;
		return a = e instanceof Error ? {
			isError: !0,
			value: {
				message: e.message,
				name: e.name,
				stack: e.stack
			}
		} : {
			isError: !1,
			value: e
		}, [a, []];
	},
	deserialize(e) {
		if (e.isError) throw Object.assign(new Error(e.value.message), e.value);
		throw e.value;
	}
}]]);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/ function h(e, a = globalThis, n = ["*"]) {
	a.addEventListener("message", function t(r) {
		if (!r || !r.data) return;
		if (!function(e, a) {
			for (const n of e) {
				if (a === n || "*" === n) return !0;
				if (n instanceof RegExp && n.test(a)) return !0;
			}
			return !1;
		}(n, r.origin)) return void console.warn(`Invalid origin '${r.origin}' for comlink proxy`);
		const { id: s, type: i, path: o } = Object.assign({ path: [] }, r.data), c = (r.data.argumentList || []).map(T);
		let l;
		try {
			const a = o.slice(0, -1).reduce((e, a) => e[a], e), n = o.reduce((e, a) => e[a], e);
			switch (i) {
				case "GET":
					l = n;
					break;
				case "SET":
					a[o.slice(-1)[0]] = T(r.data.value), l = !0;
					break;
				case "APPLY":
					l = n.apply(a, c);
					break;
				case "CONSTRUCT":
					l = function(e) {
						return Object.assign(e, { [d]: !0 });
					}(new n(...c));
					break;
				case "ENDPOINT":
					{
						const { port1: a, port2: n } = new MessageChannel();
						h(e, n), l = M(a, [a]);
					}
					break;
				case "RELEASE":
					l = void 0;
					break;
				default: return;
			}
		} catch (u) {
			l = {
				value: u,
				[f]: 0
			};
		}
		Promise.resolve(l).catch((e) => ({
			value: e,
			[f]: 0
		})).then((n) => {
			const [r, o] = I(n);
			a.postMessage(Object.assign(Object.assign({}, r), { id: s }), o), "RELEASE" === i && (a.removeEventListener("message", t), w(a), _ in e && "function" == typeof e[_] && e[_]());
		}).catch((e) => {
			const [n, t] = I({
				value: /* @__PURE__ */ new TypeError("Unserializable return value"),
				[f]: 0
			});
			a.postMessage(Object.assign(Object.assign({}, n), { id: s }), t);
		});
	}), a.start && a.start();
}
function w(e) {
	(function(e) {
		return "MessagePort" === e.constructor.name;
	})(e) && e.close();
}
function b(e) {
	if (e) throw new Error("Proxy has been released and is not useable");
}
function v(e) {
	return C(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
		w(e);
	});
}
const S = /* @__PURE__ */ new WeakMap(), A = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const a = (S.get(e) || 0) - 1;
	S.set(e, a), 0 === a && v(e);
});
function E(e, a, n = [], t = function() {}) {
	let r = !1;
	const s = new Proxy(t, {
		get(t, i) {
			if (b(r), i === p) return () => {
				(function(e) {
					A && A.unregister(e);
				})(s), v(e), a.clear(), r = !0;
			};
			if ("then" === i) {
				if (0 === n.length) return { then: () => s };
				const t = C(e, a, {
					type: "GET",
					path: n.map((e) => e.toString())
				}).then(T);
				return t.then.bind(t);
			}
			return E(e, a, [...n, i]);
		},
		set(t, s, i) {
			b(r);
			const [o, c] = I(i);
			return C(e, a, {
				type: "SET",
				path: [...n, s].map((e) => e.toString()),
				value: o
			}, c).then(T);
		},
		apply(t, s, i) {
			b(r);
			const o = n[n.length - 1];
			if (o === m) return C(e, a, { type: "ENDPOINT" }).then(T);
			if ("bind" === o) return E(e, a, n.slice(0, -1));
			const [c, l] = k(i);
			return C(e, a, {
				type: "APPLY",
				path: n.map((e) => e.toString()),
				argumentList: c
			}, l).then(T);
		},
		construct(t, s) {
			b(r);
			const [i, o] = k(s);
			return C(e, a, {
				type: "CONSTRUCT",
				path: n.map((e) => e.toString()),
				argumentList: i
			}, o).then(T);
		}
	});
	return function(e, a) {
		const n = (S.get(a) || 0) + 1;
		S.set(a, n), A && A.register(e, a, e);
	}(s, e), s;
}
function k(e) {
	const a = e.map(I);
	return [a.map((e) => e[0]), (n = a.map((e) => e[1]), Array.prototype.concat.apply([], n))];
	var n;
}
const x = /* @__PURE__ */ new WeakMap();
function M(e, a) {
	return x.set(e, a), e;
}
function I(e) {
	for (const [a, n] of y) if (n.canHandle(e)) {
		const [t, r] = n.serialize(e);
		return [{
			type: "HANDLER",
			name: a,
			value: t
		}, r];
	}
	return [{
		type: "RAW",
		value: e
	}, x.get(e) || []];
}
function T(e) {
	switch (e.type) {
		case "HANDLER": return y.get(e.name).deserialize(e.value);
		case "RAW": return e.value;
	}
}
function C(e, a, n, t) {
	return new Promise((r) => {
		const s = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		a.set(s, r), e.start && e.start(), e.postMessage(Object.assign({ id: s }, n), t);
	});
}
const F = "diary", R = "smart", z = "webster", N = {
	DIARY: c.diary,
	HDCZA: c.hdcza,
	L5: c.l5,
	SELECTED_SCORER_FIRST_LAST: c.selected_scorer_first_last,
	SELECTED_SCORER_LONGEST_BOUT: c.selected_scorer_longest_bout,
	QUIET_BOUT: c.quiet_bout,
	EVENT_MARKER: c.event_marker,
	ACTIWARE_REST_INTERVAL: c.actiware_rest_interval,
	NONE: c.none
}, D = "use_source_a", O = {
	sourceA: "hdcza",
	sourceB: "selected_scorer_first_last",
	fusionPolicy: "source_b_bounded_by_source_a",
	mergeGapMinutes: 45,
	paddingMinutes: 0,
	minOverlapJaccard: .5,
	applyNonwearGate: !1
}, L = {
	[N.DIARY]: "Diary",
	[N.HDCZA]: "HDCZA SPT",
	[N.L5]: "L5 least active 5h",
	[N.SELECTED_SCORER_FIRST_LAST]: "Selected scorer first-last sleep",
	[N.SELECTED_SCORER_LONGEST_BOUT]: "Selected scorer longest sleep bout",
	[N.QUIET_BOUT]: "Quiet-bout least-active window",
	[N.EVENT_MARKER]: "Event markers (button presses)",
	[N.ACTIWARE_REST_INTERVAL]: "Actiware rest interval",
	[N.NONE]: "None"
}, G = Object.values(c).map((e) => ({
	value: e,
	label: L[e]
}));
function U(e) {
	return G.find((a) => a.value === e)?.label ?? e;
}
function P(e) {
	const a = e ?? {};
	return {
		...O,
		sourceA: a.sourceA ?? a.source_a ?? O.sourceA,
		sourceB: a.sourceB ?? a.source_b ?? O.sourceB,
		fusionPolicy: a.fusionPolicy ?? a.fusion_policy ?? O.fusionPolicy,
		mergeGapMinutes: a.mergeGapMinutes ?? a.merge_gap_minutes ?? O.mergeGapMinutes,
		paddingMinutes: a.paddingMinutes ?? a.padding_minutes ?? O.paddingMinutes,
		minOverlapJaccard: a.minOverlapJaccard ?? a.min_overlap_jaccard ?? O.minOverlapJaccard,
		applyNonwearGate: a.applyNonwearGate ?? a.apply_nonwear_gate ?? O.applyNonwearGate
	};
}
function W(e) {
	const a = P(e);
	return {
		source_a: a.sourceA,
		source_b: a.sourceB,
		fusion_policy: a.fusionPolicy,
		merge_gap_minutes: a.mergeGapMinutes,
		padding_minutes: a.paddingMinutes,
		min_overlap_jaccard: a.minOverlapJaccard,
		apply_nonwear_gate: a.applyNonwearGate
	};
}
const q = [
	{
		id: "sadeh_1994_original",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "sadeh_1994::original",
		family: "sadeh_1994",
		implementation: "original",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "sadeh_1994_actilife",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "sadeh_1994::actilife",
		family: "sadeh_1994",
		implementation: "actilife",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "cole_kripke_1992_original",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "cole_kripke_1992::original",
		family: "cole_kripke_1992",
		implementation: "original",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "cole_kripke_1992_actilife",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "cole_kripke_1992::actilife",
		family: "cole_kripke_1992",
		implementation: "actilife",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "sadeh_1994_ggir",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "sadeh_1994::ggir",
		family: "sadeh_1994",
		implementation: "ggir",
		defaultCountMetric: "neishabouri",
		compatibleCountMetrics: ["neishabouri", "zero_crossing"],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "cole_kripke_1992_ggir",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "cole_kripke_1992::ggir",
		family: "cole_kripke_1992",
		implementation: "ggir",
		defaultCountMetric: "neishabouri",
		compatibleCountMetrics: ["neishabouri", "zero_crossing"],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "van_hees_2015",
		kind: "sleep_wake",
		requiredSignal: "angle_z",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "angle_spt",
		methodImplementationId: "van_hees_2015::ggir",
		family: "van_hees_2015",
		implementation: "ggir",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_5s"
	},
	{
		id: "van_hees_hasib_2015",
		kind: "sleep_wake",
		requiredSignal: "angle_z",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "angle_spt",
		methodImplementationId: "van_hees_hasib_2015::hasib",
		family: "van_hees_hasib_2015",
		implementation: "hasib",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_5s"
	},
	{
		id: "natural_language",
		kind: "sleep_wake",
		requiredSignal: "none",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "natural_language",
		methodImplementationId: "natural_language::reference",
		family: "natural_language",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "consensus_majority_vote",
		kind: "sleep_wake",
		requiredSignal: "epoch_scores",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "consensus_majority_vote::reference",
		family: "consensus_majority_vote",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "lstm_sleep_wake",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "neural_model",
		methodImplementationId: "lstm_sleep_wake::reference",
		family: "lstm_sleep_wake",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_5s"
	},
	{
		id: "manual",
		kind: "sleep_wake",
		requiredSignal: "none",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "manual",
		methodImplementationId: "manual::reference",
		family: "manual",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "oakley_1997",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [
			15,
			30,
			60
		],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "oakley_1997::hasib",
		family: "oakley_1997",
		implementation: "hasib",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "actiware_sleep_wake",
		kind: "sleep_wake",
		requiredSignal: "none",
		requiresTemperature: !1,
		nativeEpochSeconds: 30,
		supportedEpochSeconds: [30],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "vendor_analysis",
		methodImplementationId: "actiware_sleep_wake::actiware",
		family: "actiware_sleep_wake",
		implementation: "actiware",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "galland_2012",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "galland_2012::hasib",
		family: "galland_2012",
		implementation: "hasib",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "ucsd_scripps_2010",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 30,
		supportedEpochSeconds: [30],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "ucsd_scripps_2010::reference",
		family: "ucsd_scripps_2010",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "sazonov_2004",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 30,
		supportedEpochSeconds: [30],
		bindingEntry: "score_epochs",
		conformance: "provisional",
		execution: "count_scorer",
		methodImplementationId: "sazonov_2004::reference",
		family: "sazonov_2004",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "syed_cnn",
		kind: "sleep_wake",
		requiredSignal: "raw_accel",
		requiresTemperature: !1,
		nativeEpochSeconds: 30,
		supportedEpochSeconds: [30],
		bindingEntry: "score_epochs",
		conformance: "needs_model",
		execution: "neural_model",
		methodImplementationId: "syed_cnn::reference",
		family: "syed_cnn",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: "syed_cnn trained sleep/wake CNN checkpoint (weights + preprocessing spec)",
		displayGrid: "epoch_60s"
	},
	{
		id: "choi_2011",
		kind: "nonwear",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "count_detector",
		methodImplementationId: "choi_2011",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "flat_activity",
		kind: "nonwear",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "count_detector",
		methodImplementationId: "flat_activity",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "gt3x_capsense",
		kind: "nonwear",
		requiredSignal: "raw_accel",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "raw_detector",
		methodImplementationId: "gt3x_capsense",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "actiware_off_wrist",
		kind: "nonwear",
		requiredSignal: "none",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "device_statement",
		methodImplementationId: "actiware_off_wrist",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "detach_nonwear",
		kind: "nonwear",
		requiredSignal: "raw_accel",
		requiresTemperature: !0,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "count_detector",
		methodImplementationId: "detach_nonwear",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "van_hees_2013",
		kind: "nonwear",
		requiredSignal: "raw_accel",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "raw_detector",
		methodImplementationId: "van_hees_2013",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "van_hees_2023",
		kind: "nonwear",
		requiredSignal: "raw_accel",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "raw_detector",
		methodImplementationId: "van_hees_2023",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "ggir_saved",
		kind: "nonwear",
		requiredSignal: "none",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "ggir_part2",
		methodImplementationId: "ggir_saved",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "ggir_part2_invalid",
		kind: "nonwear",
		requiredSignal: "none",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "ggir_part2",
		methodImplementationId: "ggir_part2_invalid",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "choi_2012",
		kind: "nonwear",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "count_detector",
		methodImplementationId: "choi_2012",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "troiano_2008",
		kind: "nonwear",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "count_detector",
		methodImplementationId: "troiano_2008",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "ahmadi_2020",
		kind: "nonwear",
		requiredSignal: "raw_accel",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "detect_nonwear",
		conformance: "provisional",
		execution: "raw_detector",
		methodImplementationId: "ahmadi_2020",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "skovgaard_2023",
		kind: "nonwear",
		requiredSignal: "raw_accel",
		requiresTemperature: !0,
		nativeEpochSeconds: 30,
		supportedEpochSeconds: [30],
		bindingEntry: "detect_nonwear",
		conformance: "needs_model",
		execution: "raw_detector",
		methodImplementationId: "skovgaard_2023",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: "skovgaard_2023 trained temperature-nonwear model (weights + feature spec)",
		displayGrid: null
	}
], B = [
	{
		id: "epoch_60s",
		epochSeconds: 60,
		timestampsKey: "timestamps"
	},
	{
		id: "epoch_5s",
		epochSeconds: 5,
		timestampsKey: "ggirTimestamps"
	},
	{
		id: "epoch_30s",
		epochSeconds: 30,
		timestampsKey: "timestamps30s"
	}
], H = ([
	{
		id: "consecutive_onset3s_offset5s",
		onsetMinConsecutiveSleep: 3,
		offsetMinConsecutiveMinutes: 5,
		offsetScanState: "sleep",
		label: "3-min Onset / 5-min Offset (Default)"
	},
	{
		id: "consecutive_onset5s_offset10s",
		onsetMinConsecutiveSleep: 5,
		offsetMinConsecutiveMinutes: 10,
		offsetScanState: "sleep",
		label: "5-min Onset / 10-min Offset"
	},
	{
		id: "tudor_locke_2014",
		onsetMinConsecutiveSleep: 5,
		offsetMinConsecutiveMinutes: 10,
		offsetScanState: "wake",
		label: "Tudor-Locke (2014)"
	}
].map((e) => e.id), q.map((e) => e.id), [{
	id: "choi_plus_flat",
	components: ["choi_2011", "flat_activity"],
	combine: "union"
}, {
	id: "diary_anchored",
	components: ["choi_2011"],
	combine: "priority"
}].map((e) => e.id), [30, 60]), V = [
	"count_hasib",
	"angle_hasib",
	"lstm",
	"consensus"
], j = ["majority_tie_sleep", "strict_majority"], $ = "algorithm-output-cube/v1", K = ["counts_axis_y", "counts_vm"], Z = ["neural_model"], Y = "count_hasib", X = "lstm", J = "consensus", Q = "sleep_wake_epoch", ee = "exploratory", ae = "ggir_parity_default", ne = "literature_reference", te = "sleep_wake_epoch", re = "local_model_validated", se = "sleep_wake_epoch", ie = "derived_consensus", oe = ["sadeh_1994", "cole_kripke_1992"], ce = {
	neishabouri: {
		countFamilyId: "neishabouri",
		compatibleAxisIds: [
			"x",
			"y",
			"z",
			"vm"
		],
		seriesKeyTemplate: "neishabouri_{axis}_{epoch_seconds}s",
		labelTemplate: "Neishabouri {axis_label} {epoch_seconds}s counts"
	},
	zero_crossing: {
		countFamilyId: "zero_crossing",
		compatibleAxisIds: [
			"x",
			"y",
			"z"
		],
		seriesKeyTemplate: "zero_crossing_{axis}_{epoch_seconds}s",
		labelTemplate: "zero-crossing {axis_label} {epoch_seconds}s counts"
	}
}, le = {
	neishabouri: [
		"x",
		"y",
		"z",
		"vm"
	],
	zero_crossing: [
		"x",
		"y",
		"z"
	]
}, ue = {
	sadeh_1994: {
		methodFamilyId: "sadeh_1994",
		algorithmValue: "Sadeh1994",
		label: "Sadeh 1994"
	},
	cole_kripke_1992: {
		methodFamilyId: "cole_kripke_1992",
		algorithmValue: "ColeKripke1992",
		label: "Cole-Kripke 1992"
	},
	oakley_1997: {
		methodFamilyId: "oakley_1997",
		algorithmValue: "Oakley1997",
		label: "Oakley 1997"
	},
	galland_2012: {
		methodFamilyId: "galland_2012",
		algorithmValue: "Galland2012",
		label: "Galland 2012"
	},
	ucsd_scripps_2010: {
		methodFamilyId: "ucsd_scripps_2010",
		algorithmValue: "UcsdScripps2010",
		label: "UCSD Scripps 2010"
	},
	sazonov_2004: {
		methodFamilyId: "sazonov_2004",
		algorithmValue: "Sazonov2004",
		label: "Sazonov 2004"
	}
}, de = [
	{
		methodFamilyId: "sadeh_1994",
		implementationVariantId: "actilife",
		primitiveId: "sadeh",
		label: "ActiLife",
		parameters: { threshold: -4 },
		configurationAssignments: {
			implementation_variant: "actilife",
			scoring_threshold: -4
		}
	},
	{
		methodFamilyId: "sadeh_1994",
		implementationVariantId: "original",
		primitiveId: "sadeh",
		label: "Original",
		parameters: { threshold: 0 },
		configurationAssignments: {
			implementation_variant: "original",
			scoring_threshold: 0
		}
	},
	{
		methodFamilyId: "cole_kripke_1992",
		implementationVariantId: "actilife",
		primitiveId: "cole_kripke",
		label: "ActiLife",
		parameters: { useActilifeScaling: !0 },
		configurationAssignments: {
			implementation_variant: "actilife",
			use_actilife_scaling: !0
		}
	},
	{
		methodFamilyId: "cole_kripke_1992",
		implementationVariantId: "original",
		primitiveId: "cole_kripke",
		label: "Original",
		parameters: { useActilifeScaling: !1 },
		configurationAssignments: {
			implementation_variant: "original",
			use_actilife_scaling: !1
		}
	}
], me = { angle_hasib: {
	familyId: "angle_hasib",
	configId: "hasib__van_hees_2015__anglez_5s",
	label: "van Hees 2015 on AngleZ 5s",
	algorithmValue: "vanHees2015",
	methodBindingId: "van_hees_2015",
	outputKind: "sleep_period_mask",
	epochSeconds: 5,
	inputFamily: "anglez",
	inputAxis: "z",
	inputSeriesKey: "anglez_5s",
	parameters: {},
	validationStatus: "literature_reference",
	defaultIncluded: !0,
	exploratory: !1,
	lineageIds: ["anglez_5s"]
} }, pe = {
	id: "default",
	label: "Default threshold",
	threshold: .5
}, _e = {
	count_cell_label: "{method_label} on {input_label}",
	count_provenance_cell_label: "{method_label} {implementation_label} on {input_label}",
	model_cell_label: "{model_label} ({preset_label})",
	consensus_cell_label: "{scope_label} sleep/wake outputs, {strategy_label} ({suffix})",
	skipped_method_reason: "{algorithm_value} excluded from the plan by caller request.",
	count_30_warning: "30s count-HASIB outputs are planned for sensitivity analysis; literature/default GGIR parity is still 60s.",
	no_lstm_warning: "No LSTM model projections were supplied, so the plan contains no ONNX sleep/wake outputs.",
	unavailable_lstm_warning: "LSTM model artifact(s) not found on disk ({model_ids}); the ONNX projection cannot be loaded until the asset ships.",
	count_consensus_scope_label: "Count-HASIB",
	lstm_consensus_scope_label: "LSTM ({model_ids})",
	count_lstm_consensus_scope_label: "Count-HASIB + LSTM ({model_ids})",
	all_consensus_scope_label: "All"
}, fe = [
	{
		optionId: "ggir_parity_default",
		value: "ggir_parity_default",
		label: "GGIR parity default"
	},
	{
		optionId: "literature_reference",
		value: "literature_reference",
		label: "Literature reference"
	},
	{
		optionId: "local_model_validated",
		value: "local_model_validated",
		label: "Local model validated"
	},
	{
		optionId: "exploratory",
		value: "exploratory",
		label: "Exploratory"
	},
	{
		optionId: "derived_consensus",
		value: "derived_consensus",
		label: "Derived consensus"
	}
], ge = {
	majority_tie_sleep: "majority",
	strict_majority: "strict majority",
	intersection_sleep: "intersection",
	union_sleep: "union"
}, ye = {
	output_family: {
		count_hasib: "Count HASIB",
		angle_hasib: "Angle HASIB",
		lstm: "LSTM",
		consensus: "Consensus"
	},
	algorithm_id: {},
	count_family: {
		neishabouri: "Neishabouri",
		zero_crossing: "zero-crossing"
	},
	axis: {
		x: "X",
		y: "Y",
		z: "Z",
		vm: "VM"
	},
	epoch_seconds: {
		5: "5s",
		30: "30s",
		60: "60s"
	},
	model_id: {},
	model_threshold: {},
	implementation_variant: {
		hasib: "HASIB",
		actilife: "ActiLife",
		original: "Original"
	},
	scoring_threshold: {
		"-4": "-4",
		0: "0"
	},
	use_actilife_scaling: {
		False: "Original scaling",
		True: "ActiLife scaling"
	},
	neishabouri_cap_300: { True: "Enabled" },
	consensus_input_config_ids: {},
	consensus_strategy: {
		majority_tie_sleep: "majority",
		strict_majority: "strict majority",
		intersection_sleep: "intersection",
		union_sleep: "union"
	}
}, he = {
	hashContractId: "actoglance.hash.algorithm-output-cell.fnv1a32-json-v1",
	algorithm: "fnv1a_32",
	sortKeys: !0,
	itemSeparator: ",",
	keySeparator: ":",
	ensureAscii: !0,
	initialValue: 2166136261,
	prime: 16777619,
	unsignedWidthBits: 32,
	lowercaseHexWidth: 8,
	excludedFieldNames: ["configHash", "conformance"]
}, we = {
	method_family_ids: {
		sadeh_1994: {},
		cole_kripke_1992: {},
		oakley_1997: {},
		galland_2012: {},
		ucsd_scripps_2010: {},
		sazonov_2004: {}
	},
	fixed_output_method_binding_ids: { van_hees_2015: {} },
	count_provenance_implementation_variant_ids: {
		actilife: {},
		original: {}
	},
	consensus_strategy_ids: {
		majority_tie_sleep: {},
		strict_majority: {},
		intersection_sleep: {},
		union_sleep: {}
	},
	count_input_series_keys: {
		neishabouri_x_30s: {
			count_family: "neishabouri",
			axis: "x",
			epoch_seconds: 30
		},
		neishabouri_x_60s: {
			count_family: "neishabouri",
			axis: "x",
			epoch_seconds: 60
		},
		neishabouri_y_30s: {
			count_family: "neishabouri",
			axis: "y",
			epoch_seconds: 30
		},
		neishabouri_y_60s: {
			count_family: "neishabouri",
			axis: "y",
			epoch_seconds: 60
		},
		neishabouri_z_30s: {
			count_family: "neishabouri",
			axis: "z",
			epoch_seconds: 30
		},
		neishabouri_z_60s: {
			count_family: "neishabouri",
			axis: "z",
			epoch_seconds: 60
		},
		neishabouri_vm_30s: {
			count_family: "neishabouri",
			axis: "vm",
			epoch_seconds: 30
		},
		neishabouri_vm_60s: {
			count_family: "neishabouri",
			axis: "vm",
			epoch_seconds: 60
		},
		zero_crossing_x_30s: {
			count_family: "zero_crossing",
			axis: "x",
			epoch_seconds: 30
		},
		zero_crossing_x_60s: {
			count_family: "zero_crossing",
			axis: "x",
			epoch_seconds: 60
		},
		zero_crossing_y_30s: {
			count_family: "zero_crossing",
			axis: "y",
			epoch_seconds: 30
		},
		zero_crossing_y_60s: {
			count_family: "zero_crossing",
			axis: "y",
			epoch_seconds: 60
		},
		zero_crossing_z_30s: {
			count_family: "zero_crossing",
			axis: "z",
			epoch_seconds: 30
		},
		zero_crossing_z_60s: {
			count_family: "zero_crossing",
			axis: "z",
			epoch_seconds: 60
		}
	},
	fixed_output_series_keys: { anglez_5s: {
		axis: "z",
		epoch_seconds: 5
	} },
	epoch_suffixes: {
		"30s": { epoch_seconds: 30 },
		"60s": { epoch_seconds: 60 }
	}
}, be = [
	{
		grammarId: "count_cell",
		cellRole: "planner_output_cell",
		outputFamilyId: "count_hasib",
		segmentSeparator: "__",
		legacyTemplateFieldIds: ["count_config_id_template", "count_provenance_config_id_template"],
		segments: [
			{
				segmentRole: "root",
				literalValue: "hasib"
			},
			{
				segmentRole: "method_family",
				parameterId: "algorithm_id",
				valueEnumerationId: "method_family_ids"
			},
			{
				segmentRole: "implementation_variant",
				parameterId: "implementation_variant",
				valueEnumerationId: "count_provenance_implementation_variant_ids",
				optional: !0
			},
			{
				segmentRole: "series_key",
				valueEnumerationId: "count_input_series_keys",
				captures: [
					{
						captureId: "count_family",
						parameterId: "count_family"
					},
					{
						captureId: "axis",
						parameterId: "axis"
					},
					{
						captureId: "epoch_seconds",
						parameterId: "epoch_seconds"
					}
				]
			}
		]
	},
	{
		grammarId: "angle_cell",
		cellRole: "planner_output_cell",
		outputFamilyId: "angle_hasib",
		segmentSeparator: "__",
		segments: [
			{
				segmentRole: "root",
				literalValue: "hasib"
			},
			{
				segmentRole: "method_family",
				valueEnumerationId: "fixed_output_method_binding_ids"
			},
			{
				segmentRole: "series_key",
				valueEnumerationId: "fixed_output_series_keys",
				captures: [{
					captureId: "axis",
					parameterId: "axis"
				}, {
					captureId: "epoch_seconds",
					parameterId: "epoch_seconds"
				}]
			}
		]
	},
	{
		grammarId: "model_cell",
		cellRole: "planner_output_cell",
		outputFamilyId: "lstm",
		segmentSeparator: "__",
		legacyTemplateFieldIds: ["model_config_id_template"],
		segments: [
			{
				segmentRole: "root",
				literalValue: "lstm"
			},
			{
				segmentRole: "model_slug",
				parameterId: "model_id"
			},
			{
				segmentRole: "preset_slug",
				tagPrefix: "threshold_"
			}
		]
	},
	{
		grammarId: "consensus_cell",
		cellRole: "planner_output_cell",
		outputFamilyId: "consensus",
		segmentSeparator: "__",
		legacyTemplateFieldIds: ["consensus_config_id_template"],
		segments: [
			{
				segmentRole: "root",
				literalValue: "consensus"
			},
			{ segmentRole: "scope" },
			{
				segmentRole: "strategy",
				parameterId: "consensus_strategy",
				valueEnumerationId: "consensus_strategy_ids"
			},
			{
				segmentRole: "suffix",
				valueEnumerationId: "epoch_suffixes",
				captures: [{
					captureId: "epoch_seconds",
					parameterId: "epoch_seconds"
				}]
			}
		]
	},
	{
		grammarId: "count_skip_entry",
		cellRole: "planner_skip_entry",
		outputFamilyId: "count_hasib",
		segmentSeparator: "__",
		segments: [{
			segmentRole: "root",
			literalValue: "count_hasib"
		}, {
			segmentRole: "method_family",
			parameterId: "algorithm_id",
			valueEnumerationId: "method_family_ids"
		}]
	},
	{
		grammarId: "scored_variant",
		cellRole: "scored_variant",
		segmentSeparator: "__",
		segments: [
			{
				segmentRole: "root",
				literalValue: "variant"
			},
			{
				segmentRole: "classifier_config_id",
				greedy: !0
			},
			{
				segmentRole: "nonwear",
				tagPrefix: "nw_"
			},
			{
				segmentRole: "period_source",
				tagPrefix: "pg_"
			},
			{
				segmentRole: "ruleset",
				tagPrefix: "rs_"
			},
			{
				segmentRole: "rescoring",
				tagPrefix: "pp_"
			}
		]
	}
], ve = be.filter((e) => "planner_output_cell" === e.cellRole).map((e) => `${e.segments[0]?.literalValue ?? ""}${e.segmentSeparator}`).filter((e, a, n) => n.indexOf(e) === a).sort();
function Se(e, a, n) {
	const t = ce[e];
	if (!t.compatibleAxisIds.includes(a)) throw new Error(`${e} does not provide ${a} count input.`);
	return t.seriesKeyTemplate.replace("{axis}", a).replace("{epoch_seconds}", String(n));
}
function Ae(e, a, n, t) {
	return oe.includes(e) && "zero_crossing" === a && "y" === n && 60 === t;
}
function Ee(e, a) {
	return "sadeh_1994" === e && "neishabouri" === a;
}
function ke(e, a) {
	const n = e.segmentSeparator, t = e.segments, r = a.split(n), s = t.findIndex((e) => !0 === e.greedy);
	let i, o;
	if (s >= 0) {
		const e = t.length - s - 1;
		if (r.length < t.length) return null;
		o = r.slice(0, s).map((e) => [e]), o.push(r.slice(s, r.length - e));
		for (const a of r.slice(r.length - e)) o.push([a]);
		i = t;
	} else {
		const e = t.flatMap((e, a) => !0 === e.optional ? [a] : []), a = t.length - r.length;
		if (a < 0 || a > e.length) return null;
		const n = new Set(e.slice(e.length - a));
		i = t.filter((e, a) => !n.has(a)), o = r.map((e) => [e]);
	}
	const c = {};
	for (let l = 0; l < i.length; l += 1) {
		const e = i[l], a = o[l];
		if (void 0 === e || void 0 === a) return null;
		let t = a.join(n);
		if (void 0 === e.literalValue) {
			if (void 0 !== e.tagPrefix) {
				if (!t.startsWith(e.tagPrefix)) return null;
				t = t.slice(e.tagPrefix.length);
			}
			if (0 === t.length) return null;
			if (void 0 !== e.valueEnumerationId) {
				const a = we[e.valueEnumerationId]?.[t];
				if (void 0 === a) return null;
				for (const [e, n] of Object.entries(a)) c[e] = n;
			}
			c[e.segmentRole] = t;
		} else if (t !== e.literalValue) return null;
	}
	return c;
}
function xe(e) {
	let a = null;
	for (const n of be) {
		const t = ke(n, e);
		if (null !== t) {
			if (null !== a) return null;
			a = {
				grammarId: n.grammarId,
				values: t
			};
		}
	}
	return a;
}
function Me(e, a) {
	const n = be.find((a) => a.grammarId === e);
	if (void 0 === n) throw new Error(`Unknown cell id grammar ${e}.`);
	const t = [];
	for (const r of n.segments) {
		if (void 0 !== r.literalValue) {
			t.push(r.literalValue);
			continue;
		}
		const e = r.valueEnumerationId;
		let n = a[r.segmentRole];
		if (void 0 === n && void 0 !== e) {
			const t = Object.entries(we[e] ?? {}).filter(([, e]) => {
				const n = Object.entries(e);
				return n.length > 0 && n.every(([e, n]) => String(a[e]) === String(n));
			});
			n = (1 === t.length ? t[0] : void 0)?.[0];
		}
		if (void 0 === n) {
			if (!0 === r.optional) continue;
			throw new Error(`Cell id segment ${r.segmentRole} has no value.`);
		}
		const s = String(n);
		if (void 0 !== e && void 0 === we[e]?.[s]) throw new Error(`Cell id segment ${r.segmentRole} value ${s} is outside its declared enumeration.`);
		t.push(void 0 === r.tagPrefix ? s : `${r.tagPrefix}${s}`);
	}
	return t.join(n.segmentSeparator);
}
const Ie = { family: "unknown" };
function Te(e, a) {
	const n = e[a];
	return void 0 === n ? void 0 : String(n);
}
new Map(B.map((e) => [e.id, e])), new Map([
	{
		id: "axis_y",
		grid: "epoch_60s",
		seriesKey: "axisY",
		quantity: "activity_counts",
		countAxis: "y",
		label: "Y-Axis (Vertical, bandpass counts)",
		shortLabel: "Y-axis",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 7e3,
		sourceSelectable: !0,
		csvHeaderAliases: [
			"axis_y",
			"axis1",
			"y",
			"axis 1",
			"y-axis",
			"activity",
			"activity counts",
			"activitycounts",
			"counts",
			"activity_counts"
		],
		realizesSignal: "counts_axis_y"
	},
	{
		id: "axis_x",
		grid: "epoch_60s",
		seriesKey: "axisX",
		quantity: "activity_counts",
		countAxis: "x",
		label: "X-Axis (Lateral, bandpass counts)",
		shortLabel: "X-axis",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 7e3,
		sourceSelectable: !0,
		csvHeaderAliases: [
			"axis_x",
			"axis2",
			"x",
			"axis 2"
		],
		realizesSignal: null
	},
	{
		id: "axis_z",
		grid: "epoch_60s",
		seriesKey: "axisZ",
		quantity: "activity_counts",
		countAxis: "z",
		label: "Z-Axis (Forward, bandpass counts)",
		shortLabel: "Z-axis",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 7e3,
		sourceSelectable: !0,
		csvHeaderAliases: [
			"axis_z",
			"axis3",
			"z",
			"axis 3"
		],
		realizesSignal: null
	},
	{
		id: "vector_magnitude",
		grid: "epoch_60s",
		seriesKey: "vectorMagnitude",
		quantity: "activity_counts",
		countAxis: "vm",
		label: "Vector Magnitude",
		shortLabel: "VM",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 12e3,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: "counts_vm"
	},
	{
		id: "axis_y_30s",
		grid: "epoch_30s",
		seriesKey: "axisY30s",
		quantity: "activity_counts",
		countAxis: "y",
		label: "Y-Axis (Vertical, 30 s counts)",
		shortLabel: "Y-axis 30s",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 5e3,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: null
	},
	{
		id: "axis_x_30s",
		grid: "epoch_30s",
		seriesKey: "axisX30s",
		quantity: "activity_counts",
		countAxis: "x",
		label: "X-Axis (Lateral, 30 s counts)",
		shortLabel: "X-axis 30s",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 5e3,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: null
	},
	{
		id: "axis_z_30s",
		grid: "epoch_30s",
		seriesKey: "axisZ30s",
		quantity: "activity_counts",
		countAxis: "z",
		label: "Z-Axis (Forward, 30 s counts)",
		shortLabel: "Z-axis 30s",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 5e3,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: null
	},
	{
		id: "vector_magnitude_30s",
		grid: "epoch_30s",
		seriesKey: "vectorMagnitude30s",
		quantity: "activity_counts",
		countAxis: "vm",
		label: "Vector Magnitude (30 s counts)",
		shortLabel: "VM 30s",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 8e3,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: null
	},
	{
		id: "enmo",
		grid: "epoch_5s",
		seriesKey: "ggirEnmo",
		quantity: "enmo",
		countAxis: null,
		label: "ENMO (5 s, GGIR, mg)",
		shortLabel: "ENMO",
		storedUnit: "g",
		displayUnit: "mg",
		displayScale: 1e3,
		valueMin: 0,
		valueMax: 1e3,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: null
	},
	{
		id: "anglez",
		grid: "epoch_5s",
		seriesKey: "ggirAnglez",
		quantity: "anglez",
		countAxis: null,
		label: "Anglez (5 s, GGIR)",
		shortLabel: "AngleZ",
		storedUnit: "deg",
		displayUnit: "deg",
		displayScale: 1,
		valueMin: -90,
		valueMax: 90,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: "angle_z"
	},
	{
		id: "temperature",
		grid: "epoch_60s",
		seriesKey: "temperature",
		quantity: "temperature",
		countAxis: null,
		label: "Temperature",
		shortLabel: "Temp",
		storedUnit: "Cel",
		displayUnit: "Cel",
		displayScale: 1,
		valueMin: null,
		valueMax: null,
		sourceSelectable: !1,
		csvHeaderAliases: [
			"temperature",
			"temp",
			"skin_temp",
			"mean_temp"
		],
		realizesSignal: null
	},
	{
		id: "lux",
		grid: "epoch_60s",
		seriesKey: "lux",
		quantity: "lux",
		countAxis: null,
		label: "Light (photopic lux)",
		shortLabel: "Lux",
		storedUnit: "lx",
		displayUnit: "lx",
		displayScale: 1,
		valueMin: null,
		valueMax: null,
		sourceSelectable: !1,
		csvHeaderAliases: [],
		realizesSignal: null
	},
	{
		id: "melanopic_lux",
		grid: "epoch_60s",
		seriesKey: "melanopicLux",
		quantity: "melanopic_lux",
		countAxis: null,
		label: "Melanopic EDI",
		shortLabel: "mEDI",
		storedUnit: "lx",
		displayUnit: "lx",
		displayScale: 1,
		valueMin: null,
		valueMax: null,
		sourceSelectable: !1,
		csvHeaderAliases: [],
		realizesSignal: null
	}
].map((e) => [e.id, e]));
const Ce = q.filter((e) => "sleep_wake" === e.kind).map((e) => ({
	id: e.id,
	displayGrid: e.displayGrid,
	execution: e.execution,
	requiredSignal: e.requiredSignal,
	family: e.family
})), Fe = new Map(Ce.map((e) => [e.id, e]));
function Re(e) {
	if (!e) return !1;
	const a = Fe.get(e);
	return a ? "angle_spt" === a.execution : "angle_hasib" === function(e) {
		if ("string" != typeof e || 0 === e.length) return Ie;
		const a = xe(e);
		if (null === a) return Ie;
		const n = a.values;
		switch (a.grammarId) {
			case "count_cell": {
				const e = Te(n, "method_family"), a = Te(n, "count_family"), t = Te(n, "axis"), r = Te(n, "epoch_seconds");
				if (void 0 === e || void 0 === a || void 0 === t || void 0 === r) return Ie;
				const s = Te(n, "implementation_variant");
				return {
					family: "count_hasib",
					scorer: e,
					...void 0 !== s ? { provenance: s } : {},
					countSource: a,
					signalAxis: t,
					epoch: r
				};
			}
			case "angle_cell": {
				const e = Te(n, "method_family"), a = Te(n, "epoch_seconds");
				return void 0 === e || void 0 === a ? Ie : {
					family: "angle_hasib",
					scorer: e,
					signalAxis: "anglez",
					epoch: a
				};
			}
			case "model_cell": {
				const e = Te(n, "model_slug"), a = Te(n, "preset_slug");
				return void 0 === e || void 0 === a ? Ie : {
					family: "lstm",
					lstmModel: e,
					lstmThreshold: a
				};
			}
			case "consensus_cell": {
				const e = Te(n, "strategy"), a = Te(n, "epoch_seconds");
				return void 0 === e || void 0 === a ? Ie : {
					family: "consensus",
					consensusStrategy: e,
					epoch: a
				};
			}
			default: return Ie;
		}
	}(e).family;
}
new Map([...Ce].reverse().flatMap((e) => e.family ? [[e.family, e]] : [])), Math.max(...B.map((e) => 86400 / e.epochSeconds * 3));
var ze = a({
	GGIR_PART4_PER_FILE_LIMITS: () => qe,
	NONWEAR_STUDY_SELECTION: () => Ye,
	PLACEMENT_UNAVAILABLE_NOTE: () => da,
	actiwareRestWindowForNight: () => He,
	actiwareSleepForNight: () => Ve,
	buildConfig: () => Ze,
	buildDetection: () => Ke,
	buildNightsPlacementRequest: () => sa,
	buildPlacementRequest: () => ra,
	canonicalNonwearDetectors: () => Qe,
	clockHourOf: () => je,
	describePeriodGuide: () => Be,
	fusePrecomputedNonwear: () => Xe,
	nonwearSelectionWire: () => ea,
	refused: () => la,
	resolvedDetectionConfig: () => $e,
	runAutoScoringNightsWithApi: () => pa,
	runAutoScoringWithApi: () => ma,
	scorerPostprocessingForPreset: () => Oe,
	singleGuiderDetection: () => Pe,
	smartGuiderFallbackSource: () => We
});
const Ne = "diary", De = "none";
function Oe(e) {
	return e === z ? { preset: e } : void 0;
}
const Le = new Set(Object.values({
	SADEH_1994_ORIGINAL: "sadeh_1994_original",
	SADEH_1994_ACTILIFE: "sadeh_1994_actilife",
	COLE_KRIPKE_1992_ORIGINAL: "cole_kripke_1992_original",
	COLE_KRIPKE_1992_ACTILIFE: "cole_kripke_1992_actilife",
	SADEH_1994_GGIR: "sadeh_1994_ggir",
	COLE_KRIPKE_1992_GGIR: "cole_kripke_1992_ggir",
	VAN_HEES_2015: "van_hees_2015",
	VAN_HEES_HASIB_2015: "van_hees_hasib_2015",
	NATURAL_LANGUAGE: "natural_language",
	CONSENSUS_MAJORITY_VOTE: "consensus_majority_vote",
	LSTM_SLEEP_WAKE: "lstm_sleep_wake",
	MANUAL: "manual",
	OAKLEY_1997: "oakley_1997",
	ACTIWARE_SLEEP_WAKE: "actiware_sleep_wake",
	GALLAND_2012: "galland_2012",
	UCSD_SCRIPPS_2010: "ucsd_scripps_2010",
	SAZONOV_2004: "sazonov_2004",
	SYED_CNN: "syed_cnn"
}));
function Ge(e) {
	if (!e) return [];
	const a = [];
	for (const [n, t] of e) null != n && "" !== n.trim() && a.push({
		onset_time: n,
		offset_time: t ?? null
	});
	return a;
}
function Ue(e) {
	if (!e) return [];
	const a = [];
	for (const [n, t] of e) null != n && null != t && "" !== n.trim() && "" !== t.trim() && a.push({
		start_time: n,
		end_time: t
	});
	return a;
}
function Pe(e, a) {
	const n = (e) => ({
		source_a: e,
		source_b: "none",
		fusion_policy: "use_source_a",
		apply_nonwear_gate: !1
	});
	switch (e) {
		case F: return;
		case "hdcza": return n("hdcza");
		case "l5": return n("l5");
		case "longest_bout": return n("selected_scorer_longest_bout");
		case "event_marker": return n("event_marker");
		case "actiware_rest_interval": return n("actiware_rest_interval");
		case "none": return n("none");
		case R:
			if (a.hasDiary) return;
			return n(We(a.algorithm));
		default: return;
	}
}
function We(e) {
	return "lstm_sleep_wake" === e ? "selected_scorer_longest_bout" : Re(e) ? "hdcza" : "l5";
}
const qe = "Per-file approximation of GGIR Part 4, not a GGIR run. The sleep log is this app's diary (after its AM/PM correction), not GGIR's sleep-log file. A night with neither a log nor an HDCZA window gets no proposal, where GGIR takes the mean of the other nights' windows (cleaningcode 6). No naps are proposed. A diary with sleep times but no bed times under TimeInBed refuses only this file's nights, where GGIR stops Part 4 for the whole study (g.part4.R:56-62). GGIR's sleep-log remaps are not applied: in-bed with wake read as a bed log, onset with out-of-bed read as a sleep log (g.loadlog.R:350-363), and a basic-format log read as bed times under TimeInBed (g.loadlog.R:494-498).";
function Be(e, a) {
	const n = Re(a) ? R : e ?? R;
	if (n === F) return U(N.DIARY);
	const r = U(Pe(n, {
		algorithm: a ?? null,
		hasDiary: !1
	})?.source_a ?? N.NONE);
	return n === R ? `${U(N.DIARY)}, else ${r}` : r;
}
function He(e, a) {
	const n = 86400, t = (e) => Math.floor((e - 43200) / n), r = t(Date.parse(`${a}T12:00:00Z`) / 1e3), s = [], i = (e ?? []).filter((e) => "rest" === e.kind);
	i.forEach((e, a) => {
		for (let r = t(e.startTimestamp); r <= t(e.endTimestamp); r++) {
			const t = r * n + 43200, i = Math.min(e.endTimestamp, t + n) - Math.max(e.startTimestamp, t);
			i > 0 && s.push({
				rest: a,
				night: r,
				overlap: i,
				start: e.startTimestamp
			});
		}
	}), s.sort((e, a) => a.overlap - e.overlap || e.start - a.start || e.night - a.night);
	const o = /* @__PURE__ */ new Set(), c = [];
	for (const d of s) {
		const { rest: e, night: a } = d;
		o.has(e) || (o.add(e), a === r && c.push(d));
	}
	const l = (a) => Math.max(0, ...(e ?? []).filter((e) => "sleep" === e.kind && e.startTimestamp >= i[a].startTimestamp && e.endTimestamp <= i[a].endTimestamp).map((e) => e.endTimestamp - e.startTimestamp));
	c.sort((e, a) => l(a.rest) - l(e.rest) || a.overlap - e.overlap || e.start - a.start);
	const u = c[0];
	if (u) {
		const e = i[u.rest];
		return {
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		};
	}
	return null;
}
function Ve(e, a) {
	const n = He(e, a);
	if (!n) return null;
	const t = (e ?? []).filter((e) => "rest" === e.kind && null !== He([e], a)), r = (e ?? []).filter((e) => "sleep" === e.kind && e.endTimestamp > e.startTimestamp && t.some((a) => e.startTimestamp >= a.startTimestamp && e.endTimestamp <= a.endTimestamp)).sort((e, a) => a.endTimestamp - a.startTimestamp - (e.endTimestamp - e.startTimestamp) || e.startTimestamp - a.startTimestamp), s = r[0];
	return {
		rest: n,
		sleep: s ? {
			startTimestamp: s.startTimestamp,
			endTimestamp: s.endTimestamp
		} : null,
		...r.length > 1 ? { additionalSleeps: r.slice(1).sort((e, a) => e.startTimestamp - a.startTimestamp).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) } : {}
	};
}
function je(e) {
	const a = Number.parseInt((e ?? "").split(":")[0] ?? "", 10);
	return Number.isInteger(a) && a >= 0 && a <= 23 ? a : null;
}
function $e(e) {
	const a = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime), n = Re(e.algorithm) ? void 0 : Ke(e), t = Re(e.algorithm) && !a ? N.HDCZA : N.DIARY;
	return {
		...W(e.sleepPeriodDetection),
		...n ?? {
			source_a: t,
			source_b: N.NONE,
			fusion_policy: D
		}
	};
}
function Ke(e) {
	if (e.sleepPeriodDetection && !function(e) {
		const a = O;
		return e.sourceA === a.sourceA && e.sourceB === a.sourceB && e.fusionPolicy === a.fusionPolicy && e.mergeGapMinutes === a.mergeGapMinutes && e.paddingMinutes === a.paddingMinutes && e.minOverlapJaccard === a.minOverlapJaccard && e.applyNonwearGate === a.applyNonwearGate;
	}(P(e.sleepPeriodDetection))) {
		const a = W(e.sleepPeriodDetection);
		return {
			source_a: a.source_a,
			source_b: a.source_b,
			fusion_policy: a.fusion_policy,
			apply_nonwear_gate: a.apply_nonwear_gate
		};
	}
	const a = e.periodGuider ?? R, n = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime);
	return Pe(a, {
		algorithm: e.algorithm ?? null,
		hasDiary: n
	});
}
function Ze(e) {
	const a = { ruleset: Re(e.algorithm) ? "ggir_part4" : e.ruleset ?? "legacy" };
	e.algorithm && Le.has(e.algorithm) && (a.classifier = e.algorithm), null != e.epochLengthSeconds && (a.epoch_length_seconds = e.epochLengthSeconds), null != e.onsetMinConsecutiveSleep && (a.onset_min_consecutive_sleep = e.onsetMinConsecutiveSleep), null != e.offsetMinConsecutiveMinutes && (a.offset_min_consecutive_minutes = e.offsetMinConsecutiveMinutes), e.scorerPostprocessing && (a.scorer_postprocessing = e.scorerPostprocessing);
	const { nonwear_detector: n, nonwear_detectors: t } = ea(e.nonwearDetectors, null, { alwaysNameSingle: !1 });
	if (n && (a.nonwear_detector = n), t && (a.nonwear_detectors = t), e.sleepPeriodDetection) {
		const n = P(e.sleepPeriodDetection);
		a.merge_gap_minutes = n.mergeGapMinutes, a.padding_minutes = n.paddingMinutes, a.min_overlap_jaccard = n.minOverlapJaccard;
	}
	const r = Ke(e);
	return r && (a.detection = r), a;
}
const Ye = "study_selection";
async function Xe(e, a, n) {
	const t = [...new Set(e)].filter((e) => null != a[e]?.mask);
	if (0 === t.length) return null;
	const r = await n(Qe(t).map((e) => Uint8Array.from(a[e].mask)));
	return {
		weight: r.weight,
		flagged: r.flagged,
		available: t,
		memberFlags: r.memberFlags
	};
}
const Je = Object.values(o);
function Qe(e) {
	const a = (e) => {
		const a = Je.indexOf(e);
		return -1 === a ? Je.length : a;
	};
	return [...e].sort((e, n) => a(e) - a(n));
}
function ea(e, a, { alwaysNameSingle: n, memberFlags: t }) {
	if (!e || 0 === e.length) return {};
	if (1 === e.length) {
		const [a] = e;
		return n || a !== o.choi_2011 ? { nonwear_detector: a } : {};
	}
	return {
		nonwear_detectors: Qe(e),
		...a ? { nonwear_weight: [...a] } : {},
		...a && t ? { nonwear_member_flags: [...t] } : {}
	};
}
function aa(e) {
	const a = {
		analysis_date: e.analysisDate ?? "",
		epoch_length_seconds: e.epochLengthSeconds ?? 60,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (a.choi_nonwear = e.choiNonwear);
	const { nonwear_weight: n, nonwear_member_flags: t } = ea(e.nonwearDetectors, e.nonwearWeight, {
		alwaysNameSingle: !1,
		memberFlags: e.nonwearMemberFlags
	});
	n && (a.nonwear_weight = n), t && (a.nonwear_member_flags = t), e.ggirInvalid && (a.ggir_invalid = Array.from(e.ggirInvalid)), e.ggirHasptAlgo && (a.ggir_haspt_algo = e.ggirHasptAlgo), e.ggirConfigCsv && (a.ggir_config_csv = e.ggirConfigCsv), e.ggirDiaryHasBedlog && (a.ggir_diary_has_bedlog = !0), e.ggirDiaryHasSleeplog && (a.ggir_diary_has_sleeplog = !0), e.sensorNonwear && e.sensorNonwear.length > 0 && (a.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (a.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (a.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (a.diary_in_bed_time = e.diaryBedTime), null != e.diaryOutBedTime && (a.diary_out_bed_time = e.diaryOutBedTime);
	const r = Ge(e.diaryNaps);
	r.length > 0 && (a.diary_naps = r);
	const s = Ue(e.diaryNonwear);
	return s.length > 0 && (a.diary_nonwear = s), e.hdczaWindow && (a.hdcza_window = [e.hdczaWindow.startTimestamp, e.hdczaWindow.endTimestamp]), e.eventMarkerTimestamps && e.eventMarkerTimestamps.length > 0 && (a.event_marker_timestamps = Array.from(e.eventMarkerTimestamps)), e.actiwareRestWindow && (a.actiware_rest_window = [e.actiwareRestWindow.startTimestamp, e.actiwareRestWindow.endTimestamp]), null != e.nightStartHour && (a.night_start_hour = e.nightStartHour), null != e.nightEndHour && (a.night_end_hour = e.nightEndHour), a;
}
function na(e) {
	const a = {
		analysis_date: e.analysisDate,
		epoch_length_seconds: e.epochLengthSeconds,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (a.choi_nonwear = e.choiNonwear), e.nonwearWeight && (a.nonwear_weight = [...e.nonwearWeight]), e.nonwearWeight && e.nonwearMemberFlags && (a.nonwear_member_flags = [...e.nonwearMemberFlags]), e.sensorNonwear && e.sensorNonwear.length > 0 && (a.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (a.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (a.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (a.diary_in_bed_time = e.diaryBedTime);
	const n = Ge(e.diaryNaps);
	n.length > 0 && (a.diary_naps = n);
	const t = Ue(e.diaryNonwear);
	return t.length > 0 && (a.diary_nonwear = t), a;
}
function ta(e) {
	return e && 0 !== e.length ? e.map(([e, a]) => [e, a]) : null;
}
function ra(e) {
	let a;
	if ("variant" in e) {
		const { variant: t, timestamps: r, activityCounts: s, sleepScores: i, analysisDate: o, epochLengthSeconds: c, hdczaWindow: l, diary: u, onsetMinConsecutiveSleep: d, offsetMinConsecutiveMinutes: m, choiNonwear: p, nonwearDetectors: _, nonwearWeight: f, nonwearMemberFlags: g, eventMarkerTimestamps: y, actiwareRestWindow: h } = e, w = t.config.rescoring === z ? Oe(z) : void 0;
		a = {
			timestamps: r,
			activityCounts: s,
			sleepScores: i,
			...void 0 !== p ? { choiNonwear: p } : {},
			...void 0 !== _ ? { nonwearDetectors: _ } : {},
			...void 0 !== f ? { nonwearWeight: f } : {},
			...void 0 !== g ? { nonwearMemberFlags: g } : {},
			ruleset: t.config.ruleset,
			...void 0 !== w ? { scorerPostprocessing: w } : {},
			analysisDate: o,
			epochLengthSeconds: c,
			hdczaWindow: l ? {
				startTimestamp: l[0],
				endTimestamp: l[1]
			} : null,
			...y ? { eventMarkerTimestamps: y } : {},
			...h ? { actiwareRestWindow: h } : {},
			diaryBedTime: u?.diaryInBedTime ?? null,
			diaryOnsetTime: u?.onsetTime ?? null,
			diaryWakeTime: u?.diaryWakeTime ?? null,
			diaryNaps: ta(u?.naps),
			diaryNonwear: ta(u?.nonwear),
			...void 0 !== d ? { onsetMinConsecutiveSleep: d } : {},
			...void 0 !== m ? { offsetMinConsecutiveMinutes: m } : {},
			...(n = t.config.periodSource, n === Ne ? { periodGuider: Ne } : n === De ? { periodGuider: De } : { sleepPeriodDetection: {
				sourceA: n,
				sourceB: N.NONE,
				fusionPolicy: D,
				applyNonwearGate: !1
			} })
		};
	} else a = e;
	var n;
	return ia({
		config: Ze(a),
		days: [aa(a), ...(a.contextDays ?? []).filter((e) => e.analysisDate !== (a.analysisDate ?? "")).map(na)]
	});
}
function sa(e) {
	const a = e[0];
	if (!a) throw new Error("buildNightsPlacementRequest needs at least one night.");
	return ia({
		config: Ze(a),
		days: e.map(aa)
	});
}
function ia(e) {
	const a = [
		"timestamps",
		"activity_counts",
		"sleep_scores",
		"choi_nonwear",
		"anglez",
		"light",
		"temperature",
		"heart_rate",
		"detach_nonwear"
	], n = (a, n) => {
		const t = e.days.map((e) => e[a] ?? []), r = new Uint32Array(t.length + 1);
		for (const [e, o] of t.entries()) r[e + 1] = r[e] + o.length;
		const s = 1 === t.length ? t[0] : void 0, i = s instanceof n ? s : new n(r[t.length]);
		if (i !== s) for (const [e, o] of t.entries()) i.set(o, r[e]);
		return [i, r];
	}, t = {
		config: e.config,
		days: e.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !a.includes(e))))
	};
	return [
		JSON.stringify(t),
		...n("timestamps", Float64Array),
		...n("activity_counts", Float64Array),
		...n("sleep_scores", Uint8Array),
		...n("choi_nonwear", Uint8Array),
		...n("anglez", Float64Array),
		...n("light", Float64Array),
		...n("temperature", Float64Array),
		...n("heart_rate", Float64Array),
		...n("detach_nonwear", Uint8Array)
	];
}
function oa(e) {
	return {
		marker_type: e.marker_type,
		marker_index: e.marker_index,
		outcome: e.outcome,
		onset_timestamp: e.onset_timestamp ?? null,
		offset_timestamp: e.offset_timestamp ?? null,
		rules_applied: e.rules_applied ?? [],
		candidates_considered: e.candidates_considered ?? 0,
		notes: e.notes ?? [],
		used_diary_period: e.used_diary_period ?? null
	};
}
function ca(e, a) {
	const n = {
		onset_timestamp: e.onset_timestamp,
		offset_timestamp: e.offset_timestamp,
		marker_type: e.marker_type,
		marker_index: e.marker_index
	};
	return a && (n.placement = a), n;
}
function la(e) {
	return {
		kind: "refused",
		reason: e
	};
}
function ua(e, a, n) {
	if (!e) return la("The placement engine returned no result for this night.");
	const t = e.guider ?? n, r = null == e.guider ? a : {
		...a,
		source_a: e.guider
	}, s = (e.decisions ?? []).map(oa), i = (e, a) => s.find((n) => n.marker_type === e && n.marker_index === a);
	return {
		kind: "placed",
		sleep_markers: (e.sleep_markers ?? []).map((e) => ca(e, i(e.marker_type, e.marker_index))),
		nap_markers: (e.nap_markers ?? []).map((e) => ca(e, i(e.marker_type, e.marker_index))),
		notes: e.notes ?? [],
		decisions: s,
		sleep_period_detection_config: r,
		effective_detection_source_a: t,
		invalid_night: e.invalid_night ?? null,
		diary_available: e.diary_available ?? null
	};
}
const da = "Marker placement is unavailable in this build — reload while online to update the local engine.";
async function ma(e, a) {
	const n = $e(e), t = String(n.source_a);
	if (0 === e.timestamps.length) return la("No activity data");
	const r = ra(e), s = await (e.wasmApiOverride ?? a()).placeMarkers(M(r, r.slice(1).filter((a) => ArrayBuffer.isView(a) && ![e, ...e.contextDays ?? []].some((e) => a === e.timestamps || a === e.activityCounts || a === e.sleepScores || a === e.choiNonwear)).map((e) => e.buffer)));
	return s ? ua((e.analysisDate ? s.results.find((a) => a.analysis_date === e.analysisDate) : void 0) ?? s.results[0], n, t) : la(da);
}
async function pa(e, a) {
	const n = /* @__PURE__ */ new Map(), t = [];
	for (const [i, o] of e.entries()) {
		const e = Ze(o);
		if (0 === o.timestamps.length || "legacy" !== e.ruleset || (o.contextDays?.length ?? 0) > 0 || o.wasmApiOverride) {
			t.push(i);
			continue;
		}
		const a = JSON.stringify(e);
		n.set(a, [...n.get(a) ?? [], i]);
	}
	const r = new Array(e.length), s = [...t, ...[...n.values()].filter((e) => 1 === e.length).flat()];
	return await Promise.all(s.map(async (n) => {
		r[n] = await ma(e[n], () => a);
	})), await Promise.all([...n.values()].filter((e) => e.length > 1).map(async (n) => {
		const t = n.map((a) => e[a]), s = sa(t), i = await a.placeMarkers(M(s, s.slice(1).map((e) => e.buffer)));
		for (const [e, a] of n.entries()) {
			const n = t[e], s = $e(n), o = i?.results.find((e) => e.analysis_date === n.analysisDate);
			r[a] = i ? ua(o ?? i.results[e], s, String(s.source_a)) : la(da);
		}
	})), r;
}
let _a = null;
const fa = /unreachable|RuntimeError|out of bounds|wasm/i, ga = /* @__PURE__ */ new WeakSet();
async function ya() {
	const e = await async function(e) {
		if (!0 !== (a = e.scope).pinnedSingleThread && a.sharedArrayBuffer && a.crossOriginIsolated && a.cores > 1) {
			let a;
			try {
				const n = await e.loadThreaded();
				if (a = n, ga.has(n)) throw new Error("thread pool start was abandoned earlier in this worker");
				await n.default();
				const t = Math.min(4, e.scope.cores);
				return n.threadPoolReady() || await function(e, a) {
					let n;
					const t = new Promise((e, t) => {
						n = setTimeout(() => {
							t(/* @__PURE__ */ new Error(`thread pool did not start within ${String(a)} ms`));
						}, a);
					});
					return Promise.race([e, t]).finally(() => {
						clearTimeout(n);
					});
				}(n.startThreadPool(t), e.poolStartTimeoutMs ?? 15e3), {
					mod: n,
					runtime: {
						threaded: !0,
						threads: t
					}
				};
			} catch (t) {
				void 0 !== a && ga.add(a), e.warn("[wasm] threaded runtime unavailable, using the single-thread package", t);
			}
		}
		var a;
		const n = await e.loadSingle();
		return await n.default(), {
			mod: n,
			runtime: {
				threaded: !1,
				threads: 1
			}
		};
	}({
		scope: {
			pinnedSingleThread: "actours-single-thread" === globalThis.name,
			sharedArrayBuffer: "undefined" != typeof SharedArrayBuffer,
			crossOriginIsolated: "undefined" != typeof crossOriginIsolated && crossOriginIsolated,
			cores: "undefined" != typeof navigator ? navigator.hardwareConcurrency : 1
		},
		loadThreaded: () => import("./actours-D_0qhVTc.js"),
		loadSingle: () => import("./actours-CXdb08Jy.js"),
		warn: (e, a) => {
			console.warn(e, a);
		}
	});
	return function(e) {
		const a = /* @__PURE__ */ new Float64Array(16), n = new Uint8Array(e.scoreSadeh(a, -4));
		if (16 !== n.length) throw new Error(`WASM integrity check failed: scoreSadeh length ${String(n.length)}, expected ${String(16)}`);
		for (let t = 0; t < 16; t++) if (1 !== n[t]) throw new Error(`WASM integrity check failed: scoreSadeh(zeros)[${String(t)}] = ${String(n[t])}, expected 1. Bundle may be corrupt — clear the site cache and reload.`);
	}(e.mod), e;
}
function ha(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function wa(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function ba(e) {
	const a = wa(e), n = a?.analysis_date, t = wa(a?.intrinsic), r = t?.state;
	if (!a || "string" != typeof n || 0 === n.length || !t || "string" != typeof r || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(r)) return null;
	const s = t.score, i = t.verdict, o = t.infinite_reason, c = {}, l = [], u = a.per_guider;
	if (Array.isArray(u)) for (const f of u) {
		const e = wa(f);
		if (!e) continue;
		l.push(e);
		const a = e.guider;
		if ("string" != typeof a) continue;
		const n = e.confidence;
		Object.defineProperty(c, a, {
			value: "number" == typeof n && Number.isFinite(n) ? n : null,
			enumerable: !0,
			configurable: !0,
			writable: !0
		});
	}
	const d = wa(t.features), m = d && Array.isArray(d.feature_values) ? d : null, p = wa(t.legacy_complexity_features) ?? (null === m ? d : null) ?? {}, _ = a.computed_at;
	return {
		difficulty: "number" == typeof s && Number.isFinite(s) ? s : null,
		state: r,
		verdict: "string" == typeof i ? i : null,
		infiniteReason: "string" == typeof o ? o : null,
		confidenceByGuider: c,
		features: p,
		featureVector: m,
		perGuider: l,
		computedAt: "string" == typeof _ ? _ : null,
		canonicalResult: a,
		canonicalIntrinsic: t
	};
}
const va = 1073741824, Sa = "actours.compute.v1", Aa = "actours-corrected-3.3.7-v2";
let Ea = null;
function ka() {
	return Ea || (Ea = (async () => {
		const { mod: e, runtime: a } = await ya();
		return e.configureComputeMemoryBudgetV1(function() {
			const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
			if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return va;
			const a = Math.floor(1024 * e * 1024 * 1024 / 4);
			return Math.min(2147483648, Math.max(va, a));
		}()), e;
	})().catch((e) => {
		throw Ea = null, e;
	})), Ea;
}
function xa(e) {
	return M(e, Object.values(e).flatMap((e) => ArrayBuffer.isView(e) ? [e.buffer] : []));
}
function Ma(e, a) {
	return xa({
		...a,
		tz_jump: e.detectHourClockJumpMs(a.timestamps_ms)
	});
}
function Ia(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
const Ta = [];
function Ca(e, a) {
	const n = e.available && null !== e.nonwear;
	return {
		nonwear: n ? e.nonwear : null,
		conformance: e.conformance,
		available: n,
		reason: e.reason,
		elementSeconds: e.elementSeconds > 0 ? e.elementSeconds : a
	};
}
function Fa(e, a, n, t) {
	const r = n.epochSeconds, s = {}, i = (e) => ({
		nonwear: null,
		conformance: "unavailable",
		available: !1,
		reason: e,
		elementSeconds: r
	});
	let o;
	try {
		o = e.detectNonwearUnifiedBatchTyped(JSON.stringify(a), JSON.stringify(t ?? null), n.counts ?? /* @__PURE__ */ new Float64Array(), n.raw ?? /* @__PURE__ */ new Float64Array(), n.temperature ?? /* @__PURE__ */ new Float64Array(), n.epochSeconds, n.sampleRate ?? 0);
	} catch (c) {
		const e = `detectNonwearUnifiedBatchTyped failed: ${c instanceof Error ? c.message : String(c)}`;
		for (const n of a) s[n] = i(e);
		return s;
	}
	for (const l of a) {
		const e = o.results.find((e) => e.algorithm === l);
		s[l] = e ? Ca(e, r) : i(`no ${l} result`);
	}
	return s;
}
function Ra(e, a, n, t, r = l) {
	return e.scoreGgirHasibVariant({
		data: a,
		algo: n,
		...t ? { config: t } : {},
		ggirConfigCsv: r
	});
}
function za(e, a) {
	switch (a.kind) {
		case "hasib": return Ra(e, a.data, a.algo, a.config, a.ggirConfigCsv);
		case "sadeh": return new Uint8Array(e.scoreSadeh(a.activity, a.threshold));
		case "coleKripke": return new Uint8Array(e.scoreColeKripke(a.activity, a.useActilifeScaling));
	}
}
const Na = {
	async readDiaryWorkbook(e, a) {
		const { readDiaryWorkbookSheet: n } = await import("./diary-xlsx-adapter-DCIm-Mnw.js");
		return n(e, a);
	},
	async detectNonwearUnified(e) {
		const a = function(e, a) {
			return Fa(e, [a.algorithm], a.signals, a.config)[a.algorithm];
		}(await ka(), e);
		return M(a, a.nonwear ? [a.nonwear.buffer] : []);
	},
	async detectNonwearUnifiedBatch(e, a) {
		const n = Fa(await ka(), e, a);
		return M(n, Object.values(n).flatMap((e) => e.nonwear ? [e.nonwear.buffer] : []));
	},
	async scoreEpochs(e) {
		const a = function(e, a) {
			const { signals: n, ...t } = a;
			try {
				const a = e.scoreEpochsTyped(JSON.stringify(t), n.counts ?? /* @__PURE__ */ new Float64Array(), n.raw ?? /* @__PURE__ */ new Float64Array(), n.temperature ?? /* @__PURE__ */ new Float64Array(), n.epochSeconds, n.sampleRate ?? 0), r = a.available && null !== a.sleepWake;
				return {
					...a,
					available: r,
					sleepWake: r ? a.sleepWake : null
				};
			} catch (r) {
				return {
					sleepWake: null,
					conformance: "unavailable",
					available: !1,
					reason: `scoreEpochsTyped failed: ${r instanceof Error ? r.message : String(r)}`,
					elementSeconds: n.epochSeconds
				};
			}
		}(await ka(), e);
		return M(a, a.sleepWake ? [a.sleepWake.buffer] : []);
	},
	async scoreSadeh(e, a) {
		const n = za(await ka(), {
			kind: "sadeh",
			activity: e,
			threshold: a
		});
		return M(n, [n.buffer]);
	},
	async scoreColeKripke(e, a) {
		const n = za(await ka(), {
			kind: "coleKripke",
			activity: e,
			useActilifeScaling: a
		});
		return M(n, [n.buffer]);
	},
	async scoreCountScorerBatch(e) {
		const a = await ka(), n = [];
		return M(e.map((e) => {
			try {
				const t = za(a, e);
				return n.push((t instanceof Uint8Array ? t : t.sib).buffer), { result: t };
			} catch (t) {
				return { error: t instanceof Error ? t.message : String(t) };
			}
		}), n);
	},
	epochAgreement: async (e, a) => (await ka()).epochAgreement(e, a),
	async rasterizePeriods(e, a, n, t) {
		const r = (await ka()).rasterizePeriods(e, a, n, t);
		return M(r, [r.mask.buffer]);
	},
	async foldOntoGrid(e, a, n, t, r) {
		const s = (await ka()).foldOntoGrid(e, a, n, t, r);
		return M(s, [s.buffer]);
	},
	async foldUniformOntoGrid(e, a, n, t, r, s) {
		const i = (await ka()).foldUniformOntoGrid(e, a, n, t, r, s);
		return M(i, [i.buffer]);
	},
	async foldSampleBlocks(e, a, n, t) {
		const r = (await ka()).foldSampleBlocks(e, a, n, t);
		return M(r, [r.buffer]);
	},
	medianGapSeconds: async (e) => (await ka()).medianGapSeconds(e) ?? null,
	async utcDayIndex(e) {
		const a = (await ka()).utcDayIndex(e);
		return M(a, [a.day.buffer]);
	},
	irregularInternalDays: async (e, a) => (await ka()).irregularInternalDays(e, a),
	async roundCountStorage(e, a) {
		const n = (await ka()).roundCountStorage(e, a);
		return M(n, [n.buffer]);
	},
	async uniformTimestamps(e, a, n) {
		const t = (await ka()).uniformTimestamps(e, a, n);
		return M(t, [t.buffer]);
	},
	gridOffsetWithin: async (e, a) => (await ka()).gridOffsetWithin(e, a),
	detectHourClockJumpMs: async (e) => (await ka()).detectHourClockJumpMs(e),
	async projectLabelsOntoGrid(e, a, n, t) {
		const r = (await ka()).projectLabelsOntoGrid(e, a, n, t);
		return M(r, [r.buffer]);
	},
	spanFiniteMean: async (e, a, n, t) => (await ka()).spanFiniteMean(e, a, n, t),
	nextDate: async (e) => (await ka()).nextDate(e),
	shiftDate: async (e, a) => (await ka()).shiftDate(e, a),
	utcDatesInSpan: async (e, a) => (await ka()).utcDatesInSpan(e, a),
	dstPlaceholderRuns: async (e, a, n) => (await ka()).dstPlaceholderRuns(e, a, n),
	wallClockDstPlaceholders: async (e, a, n) => (await ka()).wallClockDstPlaceholders(e, a, n),
	ggir5sWallClockMs: async (e, a, n) => (await ka()).ggir5sWallClockMs(e, a, n),
	ggirIndicesToWallClockMs: async (e, a, n, t) => (await ka()).ggirIndicesToWallClockMs(e, a, n, t),
	wallMaskOntoGgirGrid: async (e, a, n) => (await ka()).wallMaskOntoGgirGrid(e, a, n),
	ggirDstPlaceholderCuts: async (e, a, n) => (await ka()).ggirDstPlaceholderCuts(e, a, n),
	restoredDstRuns: async (e, a, n) => (await ka()).restoredDstRuns(e, a, n),
	spliceDstPlaceholders: async (e, a, n) => (await ka()).spliceDstPlaceholders(e, a, n),
	ggirLabelsToStoredMs: async (e, a) => (await ka()).ggirLabelsToStoredMs(e, [...a]),
	storedToGgirLabelsMs: async (e, a) => (await ka()).storedToGgirLabelsMs(e, [...a]),
	wallClockLabels: async (e) => (await ka()).wallClockLabels(e),
	async ggirSleeplogStoredClocks(e, a, n, t) {
		const r = (await ka()).ggirSleeplogStoredClocks(e, a, n, [...t]);
		return r ? [r[0], r[1]] : void 0;
	},
	analysisWindowBounds: async (e, a) => (await ka()).analysisWindowBounds(e, a),
	analysisWindowSlice: async (e, a) => (await ka()).analysisWindowSlice(e, a),
	analysisDatesOf: async (e) => (await ka()).analysisDatesOf(e),
	nightIntervalOverlap: async (e, a, n, t, r) => (await ka()).nightIntervalOverlap(e, a, n, t, r),
	nonwearWeightRuns: async (e, a, n) => (await ka()).nonwearWeightRuns(e, a, n),
	epochsOverlapping: async (e, a, n, t) => (await ka()).epochsOverlapping(e, a, n, t),
	validStateFraction: async (e) => (await ka()).validStateFraction(e),
	clippedUnionHours: async (e, a, n, t) => (await ka()).clippedUnionHours(e, a, n, t),
	windowCoverage: async (e, a, n, t) => (await ka()).windowCoverage(e, a, n, t),
	ggirDiaryLogShape: async (e, a) => (await ka()).ggirDiaryLogShape(e, a),
	ggirManualNightClocks: async (e, a, n, t) => (await ka()).ggirManualNightClocks(e, a, n, t),
	settleManualNonwearNights: async (e) => (await ka()).settleManualNonwearNights(e),
	convertScreensRedcapDiary: async (e) => (await ka()).convertScreensRedcapDiary(e) ?? null,
	convertBedWakeDaysDiary: async (e) => (await ka()).convertBedWakeDaysDiary(e) ?? null,
	cutpointsRefusal: async (e, a, n, t) => (await ka()).cutpointsRefusal(e, a, n, t),
	normalizeCutpoints: async (e, a, n, t, r, s) => (await ka()).normalizeCutpoints(e, a, n, t, r, s),
	effectiveOverrideCutpoints: async (e, a, n, t) => (await ka()).effectiveOverrideCutpoints(e, a, n, t),
	ggirIncludeDayCriterionHours: async (e = l) => (await ka()).ggirIncludeDayCriterionHours(e ?? void 0),
	ggirAppConfigSummary: async (e = l, a = !1) => (await ka()).ggirAppConfigSummary(e, a),
	ggirDaysIncluded: async (e, a, n = l) => (await ka()).ggirDaysIncluded(e, a, n ?? void 0),
	describeColumns: async (e, a) => (await ka()).describeColumns(e, a),
	midSleepClockHours: async (e, a) => (await ka()).midSleepClockHours(e, a),
	timestampDiscontinuities: async (e, a, n) => (await ka()).timestampDiscontinuities(e, a, n),
	nonwearInSleepCounts: async (e) => (await ka()).nonwearInSleepCounts(e),
	statesInPeriods: async (e, a, n, t) => (await ka()).statesInPeriods(e, a, n, t),
	weekendDates: async (e) => (await ka()).weekendDates(e),
	validWearDays: async (e, a) => (await ka()).validWearDays(e, a),
	participantValidity: async (e, a, n, t) => (await ka()).participantValidity(e, a, n, t),
	implausibilityReasons: async (e, a, n, t) => (await ka()).implausibilityReasons(e, a, n, t),
	metricWarnings: async (e, a, n, t) => (await ka()).metricWarnings(e, a, n, t),
	consensusDisagreements: async (e) => (await ka()).consensusDisagreements(e),
	consensusDisagreementDetail: async (e) => (await ka()).consensusDisagreementDetail(e),
	timeSemantics: async (e) => (await ka()).timeSemantics(e),
	wearSiteHasptRouting: async (e, a) => (await ka()).wearSiteHasptRouting(e, a),
	markerSleepOnsetOffset: async (e, a, n, t, r, s, i) => (await ka()).markerSleepOnsetOffset(e, a, n, t, r, s, i),
	markerIndexRange: async (e, a, n) => (await ka()).markerIndexRange(e, a, n),
	interRaterReliability: async (e) => (await ka()).interRaterReliability(e),
	foldSleepWakeVotes: async (e, a, n, t, r) => (await ka()).foldSleepWakeVotes(e, a, n, t, r) ?? null,
	async thresholdProbabilities(e, a) {
		const n = (await ka()).thresholdProbabilities(e, a);
		return M(n, [n.buffer]);
	},
	exportNapAggregate: async (e) => (await ka()).exportNapAggregate(e),
	exportPeriodFigures: async (e, a, n) => (await ka()).exportPeriodFigures(e, a, n),
	summarizeExportGroups: async (e) => (await ka()).summarizeExportGroups(e),
	compareNonwearDetectorMasks: async (e, a) => (await ka()).compareNonwearDetectorMasks(e, a),
	reviewNonwearFile: async (e) => (await ka()).reviewNonwearFile(e),
	fuseNonwearMasks: async (e) => (await ka()).fuseNonwearMasks(e),
	nonwearSleepOverlap: async (e) => (await ka()).nonwearSleepOverlap(e),
	summarizePhysicalActivityTrace: async (e) => (await ka()).summarizePhysicalActivityTrace(e),
	summarizePhysicalActivityDays: async (e) => (await ka()).summarizePhysicalActivityDays(e),
	cutpointEpochCompatibility: async (e, a) => (await ka()).cutpointEpochCompatibility(e, a),
	sourceLabelsWallClockMs: async (e) => (await ka()).sourceLabelsWallClockMs(e),
	async cutpointToneCodes(e, a) {
		const n = (await ka()).cutpointToneCodes(e, a.sedentaryMax, a.lightMin, a.moderateMin, a.vigorousMin);
		return M(n, [n.buffer]);
	},
	ggirSummaryDenominator: async (e, a) => (await ka()).ggirSummaryDenominator(e, a),
	reviewNonwearTotals: async (e) => (await ka()).reviewNonwearTotals(e),
	async detectNonwear(e, a = 60) {
		const n = await ka(), t = new Uint8Array(60 === a ? n.detectNonwear(e) : n.detectNonwearChoi2012Epoch(e, a));
		return M(t, [t.buffer]);
	},
	async detectNonwearChoi2011(e, a = 60) {
		const n = await ka(), t = new Uint8Array(n.detectNonwearChoi2011Epoch(e, a));
		return M(t, [t.buffer]);
	},
	parseActigraphCsv: async (e, a) => xa((await ka()).parseActigraphCsv(e, a)),
	parseGeneactivCsv: async (e) => xa((await ka()).parseGeneactivCsv(e)),
	isGeneactivFormat: async (e) => (await ka()).isGeneactivFormat(e),
	async csvBufferClear(e) {
		(await ka()).csvBufferClear(e);
	},
	async csvBufferAppend(e) {
		(await ka()).csvBufferAppend(e);
	},
	async csvBufferAppendHashed(e) {
		const a = await ka();
		a.sha256StreamFeed(e), a.csvBufferAppend(e);
	},
	async parseGeneactivCsvBuffered() {
		const e = await ka();
		return Ma(e, e.parseGeneactivCsvBuffered());
	},
	async parseActigraphCsvBuffered(e) {
		const a = await ka();
		return Ma(a, a.parseActigraphCsvBuffered(e));
	},
	async sha256Start() {
		(await ka()).sha256StreamStart();
	},
	async sha256Feed(e) {
		(await ka()).sha256StreamFeed(e);
	},
	sha256Finish: async () => (await ka()).sha256StreamFinish(),
	async streamParseStart(e, a, n = 60, t = l) {
		(await ka()).streamParseStartWithEpoch(e, a, n, t);
	},
	streamParseFeed: async (e) => (await ka()).streamParseFeed(e),
	async streamParseFeedHashed(e) {
		const a = await ka();
		return a.sha256StreamFeed(e), a.streamParseFeed(e);
	},
	async streamParseFinishChunk(e) {
		const a = await ka(), n = e ? a.streamParseFinishChunkWithProgress((a, n) => {
			Promise.resolve(e(a, n)).catch(() => {});
		}) : a.streamParseFinishChunk(), t = new Float64Array(n.timestampsMs), r = new Float64Array(n.axisX), s = new Float64Array(n.axisY), i = new Float64Array(n.axisZ), o = new Float64Array(n.vectorMagnitude), c = new Float64Array(n.temperature), l = new Uint32Array(n.counts), u = new Uint32Array(n.tempCounts), d = new Float64Array(n.timestampsMs5s), m = new Float64Array(n.enmo5s), p = new Float64Array(n.anglez5s), _ = new Float64Array(n.anglex5s), f = new Float64Array(n.angley5s), g = new Float64Array(n.mad5s), y = new Float64Array(n.enmoa5s), h = new Uint8Array(n.ggirInvalid5s), w = [
			0,
			1,
			2
		].map((e) => n.ggirZeroCrossings5s(e)), b = w.every((e) => e.length > 0) ? w : void 0, v = new Uint8Array(n.ggirNonwear5s), S = new Float64Array(n.zcx60s), A = new Float64Array(n.zcy60s), E = new Float64Array(n.zcz60s), k = new Uint32Array(n.counts5s), x = new Float64Array(n.mimsUnit), I = new Float64Array(n.mimsUnitX), T = new Float64Array(n.mimsUnitY), C = new Float64Array(n.mimsUnitZ);
		return M({
			timestampsMs: t,
			axisX: r,
			axisY: s,
			axisZ: i,
			vectorMagnitude: o,
			temperature: c,
			counts: l,
			tempCounts: u,
			timestampsMs5s: d,
			enmo5s: m,
			anglez5s: p,
			anglex5s: _,
			angley5s: f,
			mad5s: g,
			enmoa5s: y,
			ggirInvalid5s: h,
			ggirNonwear5s: v,
			...b ? { ggirZeroCrossings5s: b } : {},
			zcx60s: S,
			zcy60s: A,
			zcz60s: E,
			counts5s: k,
			mimsUnit: x,
			mimsUnitX: I,
			mimsUnitY: T,
			mimsUnitZ: C,
			sampleFrequency: n.sampleFrequency,
			headerRowsSkipped: n.headerRowsSkipped,
			rowsDropped: n.rowsDropped,
			rawRetentionDegraded: n.rawRetentionDegraded,
			canonicalPassDegraded: n.canonicalPassDegraded,
			canonicalPassReason: n.canonicalPassReason
		}, [
			t.buffer,
			r.buffer,
			s.buffer,
			i.buffer,
			o.buffer,
			c.buffer,
			l.buffer,
			u.buffer,
			d.buffer,
			m.buffer,
			p.buffer,
			_.buffer,
			f.buffer,
			g.buffer,
			y.buffer,
			h.buffer,
			v.buffer,
			S.buffer,
			A.buffer,
			E.buffer,
			k.buffer,
			x.buffer,
			I.buffer,
			T.buffer,
			C.buffer
		]);
	},
	async neishabouriCounts(e, a, n, t, r) {
		const s = (await ka()).neishabouriCounts(e, a, n, t, r);
		return M(s, [
			s.x.buffer,
			s.y.buffer,
			s.z.buffer,
			s.vm.buffer
		]);
	},
	async zeroCrossingCounts(e, a, n, t, r) {
		const s = (await ka()).zeroCrossingCounts(e, a, n, t, r);
		return M(s, [
			s.zcx.buffer,
			s.zcy.buffer,
			s.zcz.buffer
		]);
	},
	async computeMimsUnit(e, a, n, t, r = {}) {
		const s = (await ka()).computeMimsUnit(e, a, n, t, r);
		return M(s, [
			s.mimsUnit.buffer,
			s.mimsUnitX?.buffer,
			s.mimsUnitY?.buffer,
			s.mimsUnitZ?.buffer,
			s.headerTimeStamp?.buffer,
			s.mimsOrientationTimestamp?.buffer,
			s.mimsOrientationXAngle?.buffer,
			s.mimsOrientationYAngle?.buffer,
			s.mimsOrientationZAngle?.buffer
		].filter((e) => e instanceof ArrayBuffer));
	},
	async computeMimsUnitDataframe(e, a, n, t, r = {}) {
		const s = (await ka()).computeMimsUnitDataframe(e, a, n, t, r);
		return M(s, [
			s.mimsUnit.buffer,
			s.mimsUnitX?.buffer,
			s.mimsUnitY?.buffer,
			s.mimsUnitZ?.buffer,
			s.headerTimeStamp?.buffer,
			s.mimsOrientationTimestamp?.buffer,
			s.mimsOrientationXAngle?.buffer,
			s.mimsOrientationYAngle?.buffer,
			s.mimsOrientationZAngle?.buffer
		].filter((e) => e instanceof ArrayBuffer));
	},
	async classifyActimetricPreschoolWristRf(e, a, n, t) {
		const r = {
			classes: (await ka()).classifyActimetricPreschoolWristRfLagLead(e, a, n, t),
			epochSeconds: 15
		};
		return M(r, [r.classes.buffer]);
	},
	async lstmSpectralFeatures30s(e, a, n, t) {
		const r = (await ka()).lstmSpectralFeatures30s(e, a, n, t);
		return M(r, [r.features.buffer]);
	},
	async scoreConsensus(e, a) {
		const n = await ka(), t = new Uint32Array(a.length + 1);
		for (const [i, o] of a.entries()) t[i + 1] = t[i] + o.length;
		const r = 1 === a.length ? a[0] : new Uint8Array(t[a.length]);
		if (1 !== a.length) for (const [i, o] of a.entries()) r.set(o, t[i]);
		const s = n.scoreConsensusTyped(JSON.stringify({ strategy: e }), r, t).consensus;
		return M(s, [s.buffer]);
	},
	ggirSptDurationHours: async (e, a) => (await ka()).ggirSptDurationHours(e, a),
	computeSleepMetrics: async (e, a, n) => (await ka()).computeSleepMetrics(e, a, n),
	computeFileDifficulty: async (e) => function(e, a) {
		return function(e) {
			const a = {}, n = /* @__PURE__ */ new Set(), t = Ia(e)?.results;
			if (!Array.isArray(t)) return { byDate: a };
			for (const r of t) {
				const e = ba(r);
				if (!e) return { byDate: {} };
				const t = e.canonicalResult.analysis_date;
				if (n.has(t)) return { byDate: {} };
				n.add(t), Object.defineProperty(a, t, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				});
			}
			return { byDate: a };
		}(e.computeNightDifficultyTyped(...a));
	}(await ka(), e),
	computeFileSignals: async (e) => function(e, a) {
		const [n, ...t] = a;
		return function(e) {
			const a = {}, n = /* @__PURE__ */ new Set(), t = Ia(e)?.signals;
			if (!Array.isArray(t)) return { byDate: a };
			for (const r of t) {
				const e = Ia(r), t = e?.analysis_date, s = e?.epoch_length_seconds;
				if (!e || "string" != typeof t || 0 === t.length || !Number.isInteger(s) || s <= 0) return { byDate: {} };
				if (n.has(t)) return { byDate: {} };
				n.add(t), Object.defineProperty(a, t, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				});
			}
			return { byDate: a };
		}(e.computeNightSignalsTyped(JSON.stringify(function(e) {
			const a = ha(e.config), n = ha(a?.signals) ?? a;
			return {
				...n ? { config: n } : {},
				days: e.days
			};
		}(JSON.parse(n))), ...t));
	}(await ka(), e),
	sleepRegularityIndex: async (e) => function(e, a) {
		return e.sleepRegularityIndex(...a) ?? null;
	}(await ka(), e),
	computeCircadian: async (e) => function(e, a) {
		return e.computeCircadianTyped(...a);
	}(await ka(), e),
	aggregateEpochSeries: async (e) => function(e, a) {
		return e.aggregateEpochSeries(a);
	}(await ka(), e),
	async detectDeviceFormat(e, a) {
		const n = await ka();
		try {
			return n.detectDeviceFormat(e, a);
		} catch {
			return null;
		}
	},
	parseEpochSeries: async (e, a) => (await ka()).parseEpochSeries(e, a),
	async actiwareIntervals(e, a, n) {
		const t = await ka();
		if (a.length > 0) {
			const r = t.actiwareSleepIntervals(e, a, n);
			return {
				intervals: [...a, ...r],
				generated: !1
			};
		}
		return {
			intervals: t.generateActiwareRestIntervals(e, n),
			generated: !0
		};
	},
	actiwareSleepWake: async (e, a) => (await ka()).sleepWakeScores(e, a),
	actiwareWakeThreshold: async (e, a) => (await ka()).actiwareWakeThreshold(e, a) ?? null,
	actiwareIntervalStatistics: async (e) => (await ka()).actiwareIntervalStatistics(e),
	parseAw5: async (e) => (await ka()).parseAw5(e, null),
	async openAw5Batch(e) {
		const a = new (await (ka())).Aw5Batch(e);
		return {
			handle: Ta.push(a) - 1,
			subjects: e.map((e, n) => a.subjects(n))
		};
	},
	aw5BatchRecording(e, a, n) {
		const t = Ta[e];
		return t ? Promise.resolve(t.recording(a, n, null)) : Promise.reject(/* @__PURE__ */ new Error("The .AW5 batch is not open in this worker."));
	},
	async runScoredVariantBatch(e) {
		const a = await ka(), n = {}, t = /* @__PURE__ */ new Set();
		let r = 0;
		const s = Object.keys(e.classifierOutputs).filter((a) => e.classifierOutputs[a]?.length === e.timestamps.length).sort(), i = new Set(s), o = Object.keys(e.nonwearMasks).filter((a) => null != e.nonwearMasks[a]?.mask).sort(), c = await Xe(e.studyNonwearDetectors ?? [], e.nonwearMasks, (e) => a.fuseNonwearMasks(e)), l = (e) => "none" === e ? -1 : "study_selection" !== e ? o.indexOf(e) : c ? 1 === c.available.length ? o.indexOf(c.available[0]) : -2 : -1, u = e.variants.filter((a) => {
			if (!i.has(a.classifierConfigId)) return r += 1, !1;
			if ("study_selection" === a.nonwear) return c || t.add("None of the study's nonwear detectors can run for this data — scored without a nonwear mask."), !0;
			const n = "none" === a.nonwear ? void 0 : e.nonwearMasks[a.nonwear];
			if ("none" !== a.nonwear && !n?.mask) {
				const e = n?.reason ? ` (${n.reason})` : "";
				t.add(`Nonwear detector "${a.nonwear}" is unavailable for this data — scored without a nonwear mask.${e}`);
			}
			return !0;
		}), d = e.timestamps.length;
		if (0 === d) {
			for (const e of u) n[e.id] = /* @__PURE__ */ new ArrayBuffer(0);
			u.length && t.add("No activity data");
		} else if (u.length) {
			const r = new Uint8Array(s.length * d);
			for (const [a, n] of s.entries()) {
				const t = e.classifierOutputs[n];
				if (t.length !== d) throw new Error(`classifier_scores length ${String(t.length)} does not match 1 rows × ${String(d)} epochs`);
				r.set(t, a * d);
			}
			const i = new Uint8Array(o.length * d);
			for (const [a, n] of o.entries()) {
				const t = e.nonwearMasks[n].mask;
				if (t.length !== d) throw new Error(`nonwear_masks length ${String(t.length)} does not match 1 rows × ${String(d)} epochs`);
				i.set(t, a * d);
			}
			const p = ra({
				...e,
				timestamps: [],
				activityCounts: [],
				sleepScores: [],
				variant: { config: {
					...u[0],
					periodSource: "l5",
					rescoring: "none"
				} }
			}), _ = JSON.parse(p[0]), f = _.days[0], g = c && c.available.length > 1 ? c : null, y = (n) => a.placeMarkersBatch(JSON.stringify({
				..._.config,
				...f,
				classifier_ids: s,
				nonwear_ids: o,
				...g ? {
					nonwear_weight: g.weight,
					nonwear_member_flags: g.memberFlags,
					nonwear_detectors: Qe(g.available)
				} : {}
			}), Float64Array.from(e.timestamps), Float64Array.from(e.activityCounts), r, i, JSON.stringify(n.map((e) => ({
				id: e.id,
				classifier_index: s.indexOf(e.classifierConfigId),
				nonwear_index: l(e.nonwear),
				ruleset: e.ruleset,
				period_source: e.periodSource,
				rescoring: e.rescoring
			}))));
			let h, w = u;
			try {
				h = y(w);
			} catch (m) {
				if (!g) throw m;
				w = u.filter((e) => -2 !== l(e.nonwear)), t.add("The loaded placement core predates weighted nonwear; the study-selection variants were not scored."), h = y(w);
			}
			for (const e of h.notes) t.add(e);
			for (const [e, a] of w.entries()) n[a.id] = h.masks.slice(e * d, (e + 1) * d).buffer;
		}
		return M({
			masks: n,
			notes: [...t],
			missingClassifier: r,
			placementUnavailable: !1
		}, Object.values(n));
	},
	async placeStoredGgirNights(e, a, n) {
		const [{ readGgirNightInputs: t, ggirNightPlacementSeries: r }, { runAutoScoringNightsWithApi: s }] = await Promise.all([import("./ggir-night-inputs-B2rHEH5e.js"), Promise.resolve().then(() => ze)]), i = Na, o = await Promise.all(n.map(async ({ options: n, day: s, nextDay: o }) => {
			const c = n.analysisDate, l = await t({
				day: s,
				nextDay: o,
				verdict: a,
				requireScores: !0,
				laterDays: () => Promise.resolve(e.filter((e) => e.date > c).sort((e, a) => e.date.localeCompare(a.date)))
			});
			if ("refused" === l.kind) return { result: l };
			if ("angle" !== l.kind) return { result: "angle-legacy" };
			const u = await r(l, c, i);
			return "refused" === u.kind ? { result: u } : { opts: {
				...n,
				...u.series
			} };
		})), c = await s(o.flatMap((e) => e.opts ? [e.opts] : []), i);
		let l = 0;
		return o.map((e) => e.result ?? c[l++]);
	},
	placeMarkers: async (e) => (await ka()).placeMarkersTyped(...e),
	placeNonwearMarkers: async (e) => (await ka()).placeNonwearMarkersTyped(...e),
	async nonwearContributors(e, a, n, t) {
		const r = await ka();
		return JSON.parse(r.nonwearContributors(Uint32Array.from(e), JSON.stringify(a), n, t));
	},
	epochRawData: async (e, a, n, t, r) => xa((await ka()).epochRawData(e, a, n, t, r)),
	async epochWithBandpass(e, a, n) {
		const t = (await ka()).epochWithBandpass(e, a, n), r = Float64Array.from(t.timestamps), s = Float64Array.from(t.counts);
		return M({
			timestamps: r,
			counts: s
		}, [r.buffer, s.buffer]);
	},
	async computeEnmo5s(e, a, n, t) {
		const r = await ka();
		return new Float64Array(r.computeEnmo5s(e, a, n, t));
	},
	async computeAnglez5s(e, a, n, t) {
		const r = await ka();
		return new Float64Array(r.computeAnglez5s(e, a, n, t));
	},
	async processRawXyz(e, a, n, t, r, s, i = l) {
		const o = (await ka()).processRawXyz(e, a, n, t, r, s ?? void 0, i), c = Float64Array.from(o.enmo5s), u = Float64Array.from(o.anglez5s), d = Float64Array.from(o.countsX), m = Float64Array.from(o.countsY), p = Float64Array.from(o.countsZ), _ = Float64Array.from(o.countsVm), f = Float64Array.from(o.anglex5s), g = Float64Array.from(o.angley5s), y = Float64Array.from(o.mad5s), h = Float64Array.from(o.enmoa5s);
		return M({
			enmo5s: c,
			anglez5s: u,
			anglex5s: f,
			angley5s: g,
			mad5s: y,
			enmoa5s: h,
			calibration: o.calibration,
			counts: {
				x: d,
				y: m,
				z: p,
				vm: _
			}
		}, [
			c.buffer,
			u.buffer,
			f.buffer,
			g.buffer,
			y.buffer,
			h.buffer,
			d.buffer,
			m.buffer,
			p.buffer,
			_.buffer
		]);
	},
	async processRawXyzImputed(e, a, n, t, r, s, i = 60, o = l, c) {
		const u = (await ka()).processRawXyzImputedWithEpoch(e, a, n, t, r, s ?? void 0, i, o, void 0, c), d = Float64Array.from(u.enmo5s), m = Float64Array.from(u.anglez5s), p = Float64Array.from(u.countsX), _ = Float64Array.from(u.countsY), f = Float64Array.from(u.countsZ), g = Float64Array.from(u.countsVm), y = Float64Array.from(u.anglex5s), h = Float64Array.from(u.angley5s), w = Float64Array.from(u.mad5s), b = Float64Array.from(u.enmoa5s), v = Uint8Array.from(u.ggirInvalid5s), S = u.ggirZeroCrossings5s?.map((e) => Float64Array.from(e)), A = Uint8Array.from(u.ggirNonwear5s), { firstTsMs: E, numGaps: k, samplesAdded: x, calibration: I } = u;
		return M({
			enmo5s: d,
			anglez5s: m,
			anglex5s: y,
			angley5s: h,
			mad5s: w,
			enmoa5s: b,
			counts: {
				x: p,
				y: _,
				z: f,
				vm: g
			},
			ggirInvalid5s: v,
			ggirNonwear5s: A,
			...S ? { ggirZeroCrossings5s: S } : {},
			firstTsMs: E,
			numGaps: k,
			samplesAdded: x,
			calibration: I
		}, [
			d.buffer,
			m.buffer,
			y.buffer,
			h.buffer,
			w.buffer,
			b.buffer,
			v.buffer,
			A.buffer,
			p.buffer,
			_.buffer,
			f.buffer,
			g.buffer
		]);
	},
	async detectDetachFromAccelerationG(e, a) {
		const n = await ka(), t = new Uint8Array(n.detectDetachFromAccelerationG(e, a));
		return M(t, [t.buffer]);
	},
	getComputeIdentity: async () => function(e, a) {
		if (!/^[0-9a-f]{64}$/.test(a)) throw new Error("Actours WASM artifact identity is unavailable or invalid; refusing to attest this runtime");
		const n = "object" == typeof e && null !== e ? e : {}, t = (e, a) => {
			const n = e[a];
			if ("string" != typeof n || 0 === n.length) throw new Error(`Actours capability ${a} must be a non-empty string`);
			return n;
		}, r = t(n, "contractVersion");
		if (r !== Sa) throw new Error(`Unsupported Actours compute contract ${r}; expected ${Sa}`);
		const s = t(n, "crateVersion"), i = n.sourceRevision;
		if (null !== i && ("string" != typeof i || 0 === i.length)) throw new Error("Actours capability sourceRevision must be null or a non-empty string");
		const o = n.compiledFeatures;
		if (!Array.isArray(o) || !o.every((e) => "string" == typeof e && e.length > 0)) throw new Error("Actours capability compiledFeatures must be an array of non-empty strings");
		const c = t("object" == typeof n.execution && null !== n.execution ? n.execution : {}, "target");
		if ("wasm" !== c) throw new Error(`Unsupported Actours execution target ${c}; expected wasm`);
		if (!(Array.isArray(n.semanticProfiles) ? n.semanticProfiles : []).includes(Aa)) throw new Error(`Actours capability does not provide required semantic profile ${Aa}`);
		const l = t(n, "profileProofStatus");
		if ("proof_pending" !== l) throw new Error(`Unsupported Actours profile proof status ${l}; expected proof_pending`);
		const u = t(n, "temporalBasis");
		if ("utc" !== u) throw new Error(`Unsupported Actours temporal basis ${u}; expected utc`);
		return {
			contractVersion: r,
			crateVersion: s,
			sourceRevision: i,
			artifactSha256: a,
			compiledFeatures: o,
			target: c,
			semanticProfile: Aa,
			profileProofStatus: l,
			temporalBasis: u
		};
	}((await ka()).getComputeCapabilitiesV1(), "5b90fc4dfe654e7807cfa0c9d6ff842eb49e3aca0e89a198ad5a1f62b082c3ea"),
	runGgirFromEpoch: async (...e) => function(e, a, n, t, r, s, i, o, c = l, u) {
		return {
			metadata: (d = e.runGgirDeclaredEpochsV1({
				contractVersion: "actours.declared-epochs.v1",
				provenance: a,
				sampleRateHz: r,
				startTsEpochSec: s,
				ws3: 5,
				anglez: n,
				enmo: t,
				invalid: i,
				countVm: u ?? null,
				timezone: o ?? null,
				ggirConfigCsv: c
			})).metadata,
			days: d.days.map(({ lmWindows: e, ...a }) => ({
				...a,
				...e.length > 1 || e[0] && 5 !== e[0].windowHours ? { lmWindows: e.map((e) => ({
					windowHours: e.windowHours,
					result: {
						l5_value: e.lValueMg / 1e3,
						m5_value: e.mValueMg / 1e3,
						l5_onset_epoch: e.lOnsetEpoch,
						m5_onset_epoch: e.mOnsetEpoch
					}
				})) } : {}
			}))
		};
		var d;
	}(await ka(), ...e),
	resolveTimezone: async (e) => (await ka()).resolveTimezone(e) ?? null,
	async readGgirMeta(e, a = l, n = !1) {
		const t = (await ka()).readGgirMeta(e, a, n);
		return M(t, [
			t.timestampsMs,
			t.enmo5s,
			t.anglez5s,
			t.anglez5sImputed,
			t.enmo5sImputed,
			t.invalidShort,
			t.nonwearShort,
			t.part3Sib5s
		].map((e) => e.buffer));
	},
	identifyGgirRData: async (e) => (await ka()).identifyGgirRData(e),
	ggirNonwearApproach: async (e) => (await ka()).ggirNonwearApproach(e),
	ggirConfigValues: async (e) => (await ka()).ggirConfigValues(e),
	rerunGgirResults: async (e, a) => (await ka()).rerunGgirResults(e, a),
	ggirPersonSummaries: async (e) => (await ka()).ggirPersonSummaries(e),
	ggirSupportedVersions: async () => (await ka()).ggirRerunProfiles().map((e) => e.ggir_version),
	ggirDayValidFraction: async (e, a) => (await ka()).ggirDayValidFraction(e, a),
	readGgirReportCsv: async (e, a) => (await ka()).readGgirReportCsv(e, a),
	async reviewGgirResults(e) {
		const a = (await ka()).reviewGgirResults(e.part1, e.configCsv, e.ms2, e.ms3, e.ms4, e.ms5, e.sleeplogRData, e.sleeplogCsv, e.recordingId, e.edits, !1, e.cleanedNightsCsv, e.dataCleaningCsv);
		return M(a, [
			a.sib.buffer,
			a.invalid.buffer,
			a.nonwear.buffer
		]);
	},
	async scoreGgirHasibVariant(e, a, n, t = l) {
		const r = Ra(await ka(), e, a, n, t);
		return M(r, [r.sib.buffer]);
	},
	async runGgirPart3(e) {
		const a = (await ka()).runGgirPart3({
			...e,
			hasibCounts: e.hasibCounts ?? null,
			ggirConfigCsv: e.ggirConfigCsv ?? l
		});
		return M(a, [a.part3Sib5s.buffer]);
	},
	async detectGgirHasptVariant(e) {
		const a = (await ka()).detectGgirHasptVariant({
			...e,
			ggirConfigCsv: e.ggirConfigCsv ?? l
		});
		return M(a, [a.nomov.buffer, a.rollingMedian.buffer]);
	},
	async scoreAllDays(e) {
		const a = (await ka()).scoreAllDays(e).map((e) => ({
			sadeh_actilife: new Uint8Array(e.sadeh_actilife),
			sadeh_original: new Uint8Array(e.sadeh_original),
			ck_actilife: new Uint8Array(e.ck_actilife),
			ck_original: new Uint8Array(e.ck_original),
			nonwear: new Uint8Array(e.nonwear)
		}));
		return M(a, a.flatMap((e) => [
			e.sadeh_actilife.buffer,
			e.sadeh_original.buffer,
			e.ck_actilife.buffer,
			e.ck_original.buffer,
			e.nonwear.buffer
		]));
	}
};
"undefined" != typeof self && "undefined" == typeof window && (function() {
	const e = console.error.bind(console);
	console.error = (...a) => {
		try {
			const n = a.map((e) => "string" == typeof e ? e : e instanceof Error ? e.stack ?? e.message : String(e)).join(" ");
			if (/panicked at|RuntimeError|unreachable/i.test(n)) {
				const a = /([A-Za-z0-9_.-]+\.rs):(\d+)/.exec(n);
				_a = a ? `Rust trap at ${a[1]}:${a[2]}` : "Rust runtime trap", e("[wasm-worker] WASM runtime trap captured");
				return;
			}
		} catch {}
		e(...a);
	};
}(), h(function(e) {
	const a = {};
	for (const n of Object.keys(e)) {
		const t = e[n];
		if ("function" != typeof t) {
			a[n] = t;
			continue;
		}
		const r = t;
		a[n] = async (...e) => {
			_a = null;
			try {
				return await r(...e);
			} catch (a) {
				const e = a instanceof Error ? a.message : String(a);
				if (_a && fa.test(e)) throw new Error(`WASM panic in ${n}(): ${_a}`, { cause: a });
				throw a;
			}
		};
	}
	return a;
}(Na)));
export { Se as A, ue as C, te as D, X as E, q as F, Me as M, Ae as N, ye as O, Ee as P, _e as S, pe as T, $ as _, ee as a, me as b, ce as c, de as d, ne as f, H as g, j as h, ie as i, xe as j, fe as k, Y as l, ve as m, se as n, ae as o, K as p, ge as r, le as s, J as t, Q as u, V as v, re as w, he as x, Z as y };
