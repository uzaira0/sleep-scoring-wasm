import { m as e } from "./ggir-results-types-kmrkPkJO.js";
import { Ct as t, On as s, Tt as r, Y as n, br as a, hr as i, jt as o } from "./background-jobs-CXps6j4v.js";
import { Q as l, Vt as g, d as u, lr as c, nt as m, sn as d, ur as p } from "./db-ylhhNiJn.js";
import { o as h } from "./local-nonwear-unified-CM_IZkiP.js";
const f = {
	recording_epoch: {
		anchor: "timestamps",
		order: "unchecked",
		faultValues: "its {field} values do not match its epochs",
		faultUnanchored: null,
		faultOrder: null
	},
	epoch_5s: {
		anchor: "ggirTimestamps",
		order: "strictly_increasing",
		faultValues: "its 5 s {field} values do not match its 5 s timestamps",
		faultUnanchored: "it has 5 s values without 5 s timestamps",
		faultOrder: "its 5 s timestamps are not in order"
	},
	lstm_30s: {
		anchor: "lstmTimestamps30s",
		order: "unchecked",
		faultValues: "its {field} values do not match its 30 s LSTM timestamps",
		faultUnanchored: "it has 30 s LSTM values without 30 s LSTM timestamps",
		faultOrder: null
	}
}, y = { actiware_sleep_wake: "actiwareSleepWakeInvalid" };
function w(e, t, s, r = -1 / 0) {
	const n = t.length;
	return !s.some((e) => 0 !== e && e !== n) && ("unchecked" === f[e].order || function(e, t) {
		let s = t;
		for (const r of e) {
			if (!Number.isFinite(r) || r <= s) return !1;
			s = r;
		}
		return !0;
	}(t, r));
}
const A = "Activity data is corrupt — please reprocess the file";
function k(e) {
	return {
		ggirTimestamps: e.ggirTimestamps ? new Float64Array(e.ggirTimestamps) : /* @__PURE__ */ new Float64Array(0),
		ggirEnmo: e.ggirEnmo ? new Float64Array(e.ggirEnmo) : /* @__PURE__ */ new Float64Array(0),
		ggirAnglez: e.ggirAnglez ? new Float64Array(e.ggirAnglez) : /* @__PURE__ */ new Float64Array(0),
		ggirSib: e.ggirSib ? new Uint8Array(e.ggirSib) : /* @__PURE__ */ new Uint8Array(0)
	};
}
async function v(e, t, s) {
	const r = s?.next[e];
	if (void 0 !== r) return r;
	const n = await t().nextDate(e);
	if (void 0 === n) throw new RangeError(`Not a calendar date: ${e}`);
	return n;
}
function S(e, t) {
	const s = new Float64Array(e.length + t.length);
	return s.set(e, 0), s.set(t, e.length), s;
}
function x(e, t) {
	const s = new Uint8Array(e.length + t.length);
	return s.set(e, 0), s.set(t, e.length), s;
}
async function _(e, t, s) {
	const [r = 0, n = 0] = await s.analysisWindowSlice(e.ggirTimestamps, t);
	return r === n ? {
		kind: "refused",
		reason: "No activity data found for this date"
	} : {
		kind: "angle",
		series: {
			timestamps: e.ggirTimestamps.slice(r),
			activityCounts: e.ggirEnmo.slice(r),
			sleepScores: e.sib.slice(r),
			...e.invalid?.length === e.ggirTimestamps.length ? { ggirInvalid: e.invalid.slice(r) } : {}
		}
	};
}
async function M(e, t, s, r, o) {
	try {
		return await async function(e, t, s, r) {
			const o = Array.from(new Float64Array(e.timestamps)), l = Array.from(new Float64Array(e.axisY)), g = Array.from(new Float64Array(e.vectorMagnitude)), u = e.axisX ? Array.from(new Float64Array(e.axisX)) : [], c = e.axisZ ? Array.from(new Float64Array(e.axisZ)) : [], m = e.temperature ? Array.from(new Float64Array(e.temperature)) : [], d = e.eventMarkers ? Array.from(new Uint8Array(e.eventMarkers)) : [], f = e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : [], w = e.lux ? Array.from(new Float64Array(e.lux)) : [];
			if (o.length !== l.length || o.length !== g.length) throw new Error("Corrupt activity data: array lengths do not match");
			const A = k(e), v = T(e, t), S = "stale" === v.status ? v.reason : null, x = "ok" === v.status ? v.bytes : void 0, _ = x ? t.key : null;
			null === t.key || x || p("warn", "Strict local algorithm requested without cached score");
			const M = e.lstmTimestamps30s ? new Float64Array(e.lstmTimestamps30s) : /* @__PURE__ */ new Float64Array(0), b = e.lstmSleepWake30s ? new Uint8Array(e.lstmSleepWake30s) : /* @__PURE__ */ new Uint8Array(0);
			let R = x ? Array.from(new Uint8Array(x)) : [];
			if (0 === R.length && t.key === i.LSTM_SLEEP_WAKE && M.length > 0 && b.length === M.length && (R = await async function(e, t, s, r, a = n()) {
				return Array.from(await a.projectLabelsOntoGrid(Float64Array.from(t), Uint8Array.from(s, (e) => e ? 1 : 0), r, Float64Array.from(e)));
			}(o, M, b, 30, r)), R.length > 0 && R.length !== o.length) {
				const t = await O(e, Uint8Array.from(R), r);
				t && (R = Array.from(t));
			}
			const F = null === _ ? void 0 : Object.entries(y).find(([e]) => e === _)?.[1], E = void 0 === F ? void 0 : e[F], I = E instanceof ArrayBuffer && R.length > 0 ? Array.from(new Uint8Array(E)) : [], D = {};
			for (const [n, a] of Object.entries(h(e, s))) D[n] = Array.from(new Uint8Array(a));
			return {
				timestamps: o,
				axisX: u,
				axisY: l,
				axisZ: c,
				vectorMagnitude: g,
				temperature: m,
				eventMarkers: d,
				eventMarkerTimestamps: f,
				lux: w,
				...A,
				sleepScores: R,
				sleepScoreGaps: I,
				scoresStale: S,
				lstmTimestamps30s: M,
				lstmSleepWake30s: b,
				nonwearResults: D[a.CHOI_2012] ?? null,
				nonwearResultsChoi2011: D[a.CHOI_2011] ?? null,
				detachNonwear: D[a.DETACH_NONWEAR] ?? null,
				vanHeesNonwear: D[a.VAN_HEES_2023] ?? null,
				nonwearMasksByDetector: D
			};
		}(e, t, r, o);
	} catch (l) {
		return p("warn", "Local activity day unpack failed", {
			...c(l),
			has_context: Boolean(s)
		}), null;
	}
}
function T(e, t) {
	const s = b([e], t);
	return "ok" === s.status ? {
		status: "ok",
		key: s.key,
		bytes: s.outputs[0]
	} : s;
}
function b(e, t) {
	const s = g(e, t);
	return "stale" === s.status && p("warn", "Stored cube output is from another config"), s;
}
function R(t, r) {
	const n = e("AlgorithmType", t), a = s.find((e) => e.id === t);
	if ("vendor_analysis" === a?.execution && null !== a.sourceVendorLabel) {
		const e = a.sourceVendorLabel;
		return d(r, t) && !0 !== r?.scorerSettingsStored ? `${n} has no scores for this file (no analysis settings)` : `${n} has no scores for this file (not ${/^[aeiou]/i.test(e) ? "an" : "a"} ${e} recording)`;
	}
	return `${n} has no scores for this night`;
}
async function F(e) {
	const { day: t, nextDay: s, verdict: r, choiAxis: n, core: a } = e;
	if (e.requireScores) {
		const e = b(s ? [t, s] : [t], r);
		if ("stale" === e.status) return {
			kind: "refused",
			reason: e.reason
		};
	}
	if (e.angle) return async function(e) {
		const { day: t, nextDay: s } = e;
		if (e.requireScores) {
			const r = g(s ? [t, s] : [t], e.verdict);
			if ("stale" === r.status) return {
				kind: "refused",
				reason: r.reason
			};
		}
		const r = [t, ...await e.laterDays()];
		let n = /* @__PURE__ */ new Float64Array(0), a = /* @__PURE__ */ new Float64Array(0), i = /* @__PURE__ */ new Uint8Array(0), o = /* @__PURE__ */ new Uint8Array(0), l = 0, u = 0, c = 0;
		for (const g of r) {
			let e;
			try {
				e = k(g);
			} catch {
				return {
					kind: "refused",
					reason: A
				};
			}
			const t = e.ggirTimestamps.length;
			if (0 === t) continue;
			const s = g.ggirInvalid ? new Uint8Array(g.ggirInvalid) : /* @__PURE__ */ new Uint8Array(0);
			if (e.ggirEnmo.length !== t || !w("epoch_5s", e.ggirTimestamps, [e.ggirSib.length, s.length], n[n.length - 1] ?? -1 / 0)) return {
				kind: "refused",
				reason: A
			};
			c += 1, e.ggirSib.length === t && (l += 1), s.length === t && (u += 1), n = S(n, e.ggirTimestamps), a = S(a, e.ggirEnmo), i = x(i, e.ggirSib), o = x(o, s);
		}
		return 0 === l ? { kind: "angle-legacy" } : l !== c || 0 !== u && u !== c ? {
			kind: "refused",
			reason: A
		} : {
			kind: "angle",
			ggirTimestamps: n,
			ggirEnmo: a,
			sib: i,
			invalid: 0 === u ? null : o
		};
	}({
		day: t,
		nextDay: s,
		verdict: r,
		requireScores: !1,
		laterDays: e.laterDays
	});
	const i = await M(t, r, "night inputs", n, a);
	if (!i) return {
		kind: "refused",
		reason: A
	};
	const o = s ? await M(s, r, "night inputs next-day", n, a) : null;
	if (s && !o) return {
		kind: "refused",
		reason: "Next-day activity data is corrupt — please reprocess the file"
	};
	if (e.requireScores) {
		const t = [i, ...o ? [o] : []].filter((e) => e.timestamps.length > 0);
		if (t.some((e) => 0 === e.sleepScores.length)) return {
			kind: "refused",
			reason: e.missingScoresReason
		};
		if (t.some((e) => e.sleepScores.length !== e.timestamps.length)) return {
			kind: "refused",
			reason: A
		};
		if (0 === t.length) return {
			kind: "refused",
			reason: e.missingScoresReason
		};
	}
	if (o) {
		const e = i.timestamps.length, t = o.timestamps.length;
		I(i.timestamps, o.timestamps), I(i.axisY, o.axisY), I(i.eventMarkerTimestamps, o.eventMarkerTimestamps), I(i.sleepScores, o.sleepScores), E(i, o, e, t);
	}
	return {
		kind: "counts",
		unpacked: i
	};
}
function E(e, t, s, r) {
	const n = /* @__PURE__ */ new Set([...Object.keys(e.nonwearMasksByDetector), ...Object.keys(t.nonwearMasksByDetector)]);
	for (const a of n) {
		const n = e.nonwearMasksByDetector[a], i = !n || n.length < s ? new Array(s).fill(0) : n;
		I(i, t.nonwearMasksByDetector[a] ?? new Array(r).fill(0)), e.nonwearMasksByDetector[a] = i;
	}
	var i;
	(i = e).nonwearResults = i.nonwearMasksByDetector[a.CHOI_2012] ?? null, i.nonwearResultsChoi2011 = i.nonwearMasksByDetector[a.CHOI_2011] ?? null, i.detachNonwear = i.nonwearMasksByDetector[a.DETACH_NONWEAR] ?? null, i.vanHeesNonwear = i.nonwearMasksByDetector[a.VAN_HEES_2023] ?? null;
}
function I(e, t) {
	const s = e.length;
	e.length = s + t.length;
	for (let r = 0; r < t.length; r++) e[s + r] = t[r];
}
function D(e, t, s, r) {
	return t.length === e.length && r.length === s.length ? x(t, r) : /* @__PURE__ */ new Uint8Array(0);
}
function U(e, s) {
	return !0 !== t(e?.sourceProfileId)?.epochGapsNeedInvalidMask || s.ggirInvalid ? "Re-import this file to compute GGIR's sleep bouts." : "GGIR invalid mask missing";
}
function L(e, t) {
	return e.length > 0 && t.length === e.length ? t : /* @__PURE__ */ new Uint8Array(0);
}
async function O(e, t, s = n()) {
	const a = new Float64Array(e.timestamps);
	if (t.length === a.length) return t;
	const i = e.epochResolutions?.find((e) => "counts_60s" === e.resolutionId)?.derivedData?.data.timestamps;
	return i && i.length === t.length ? s.projectLabelsOntoGrid(Float64Array.from(i), t, r, a) : null;
}
function N(e) {
	return o(e);
}
async function j(e, t, s) {
	return v(e, () => s ?? n(), t);
}
async function B(e, t, s, r = (t) => u(e, t, s), a, i) {
	return async function(e, t, s, r, a) {
		const o = await s(t);
		if (o) return o;
		if (!await s(await v(t, () => i ?? n(), a))) return;
		const l = /* @__PURE__ */ new ArrayBuffer(0);
		return {
			fileId: e,
			date: t,
			timestamps: l,
			axisY: l,
			vectorMagnitude: l,
			algorithmResults: {},
			nonwearResults: null
		};
	}(e, t, r, 0, a);
}
async function H(e, t, s, r) {
	const n = [], a = await l(e.timestamps, {
		day: t.find((e) => void 0 !== m(e)),
		file: r
	});
	if (e.timestamps.length > 0) {
		const r = `counts_${a}s`;
		if (n.push({
			resolutionId: r,
			epochLengthSeconds: a,
			category: "count_sleep_wake",
			sourceType: 60 === a ? "epochs_60s" : "actigraph_epoched_csv",
			derivedFromResolutionId: null,
			aggregationMethod: null,
			data: {
				timestamps: [],
				axisX: [],
				axisY: [],
				axisZ: [],
				vectorMagnitude: [],
				temperature: [],
				lux: [],
				melanopicLux: [],
				eventMarkers: [],
				ggirTimestamps: [],
				ggirEnmo: [],
				ggirAnglez: [],
				ggirSib: [],
				timestamps: e.timestamps,
				axisX: e.axisX,
				axisY: e.axisY,
				axisZ: e.axisZ,
				vectorMagnitude: e.vectorMagnitude,
				temperature: e.temperature,
				eventMarkers: e.eventMarkers
			},
			algorithmResults: e.sleepScores.length > 0 ? e.sleepScores : null,
			nonwearResults: e.nonwearResults
		}), 60 !== a) {
			const e = t.filter((e) => e.timestamps.byteLength > 0), a = e.map((e) => e.epochResolutions?.find((e) => "counts_60s" === e.resolutionId)?.derivedData);
			if (a.length > 0 && a.every((e) => void 0 !== e)) {
				const t = {
					timestamps: [],
					axisX: [],
					axisY: [],
					axisZ: [],
					vectorMagnitude: [],
					temperature: [],
					lux: [],
					melanopicLux: [],
					eventMarkers: [],
					ggirTimestamps: [],
					ggirEnmo: [],
					ggirAnglez: [],
					ggirSib: []
				};
				for (const e of Object.keys(t)) t[e] = a.flatMap((t) => Array.from(t.data[e]));
				const i = g(a.map((t, s) => ({
					algorithmResults: t.algorithmResults,
					algorithmResultHashes: e[s].algorithmResultHashes
				})), s), o = "ok" === i.status ? i.outputs.map((e) => e ?? []) : [], l = o.some((e) => e.length > 0) ? o.flatMap((e, t) => e.length > 0 ? e : new Array(a[t].data.timestamps.length).fill(0)) : [], u = a.some((e) => null !== e.nonwearResults) ? a.flatMap((e) => e.nonwearResults ?? new Array(e.data.timestamps.length).fill(0)) : [];
				n.push({
					resolutionId: "counts_60s",
					epochLengthSeconds: 60,
					category: "count_sleep_wake",
					sourceType: "epochs_60s",
					derivedFromResolutionId: r,
					aggregationMethod: "sum_counts",
					data: t,
					algorithmResults: l.length > 0 ? l : null,
					nonwearResults: u.length > 0 ? u : null
				});
			}
		}
	}
	return e.ggirTimestamps.length > 0 && n.push({
		resolutionId: "ggir_5s",
		epochLengthSeconds: 5,
		category: "ggir_sleep_period",
		sourceType: "epochs_5s_ggir",
		derivedFromResolutionId: null,
		aggregationMethod: "ggir_epoch_metrics",
		data: {
			timestamps: [],
			axisX: [],
			axisY: [],
			axisZ: [],
			vectorMagnitude: [],
			temperature: [],
			lux: [],
			melanopicLux: [],
			eventMarkers: [],
			ggirTimestamps: [],
			ggirEnmo: [],
			ggirAnglez: [],
			ggirSib: [],
			timestamps: e.ggirTimestamps,
			ggirTimestamps: e.ggirTimestamps,
			ggirEnmo: e.ggirEnmo,
			ggirAnglez: e.ggirAnglez,
			ggirSib: e.ggirSib
		},
		algorithmResults: e.ggirSib.length > 0 ? e.ggirSib : null,
		nonwearResults: null
	}), e.lstmTimestamps30s.length > 0 && n.push({
		resolutionId: "lstm_30s",
		epochLengthSeconds: 30,
		category: "lstm_sleep_wake",
		sourceType: null,
		derivedFromResolutionId: null,
		aggregationMethod: "model_window",
		data: {
			timestamps: [],
			axisX: [],
			axisY: [],
			axisZ: [],
			vectorMagnitude: [],
			temperature: [],
			lux: [],
			melanopicLux: [],
			eventMarkers: [],
			ggirTimestamps: [],
			ggirEnmo: [],
			ggirAnglez: [],
			ggirSib: [],
			timestamps: e.lstmTimestamps30s
		},
		algorithmResults: e.lstmSleepWake30s.length > 0 ? e.lstmSleepWake30s : null,
		nonwearResults: null
	}), Promise.resolve(n);
}
export { x as _, j as a, N as c, L as d, M as f, S as g, A as h, D as i, F as l, O as m, H as n, B as o, R as p, E as r, U as s, I as t, T as u, _ as v };
