import { E as e, en as t, j as r, on as s, wt as n } from "./schema-MMK46mR-.js";
import { r as a } from "./workers-B1E_CQH7.js";
import { m as i } from "./ggir-results-types-4WFMLido.js";
import { Gt as o, _ as l } from "./store-CGm5oa9P.js";
import { v as g } from "./per-source-defaults-CxbMEjO8.js";
import { c as u } from "./local-nonwear-unified-BZU1ydsO.js";
import { r as c, t as m } from "./diagnostic-log-DgP2mz8K.js";
const d = {
	epoch_60s: {
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
}, p = { actiware_sleep_wake: "actiwareSleepWakeInvalid" };
function h(e, t, r, s = -1 / 0) {
	const n = t.length;
	return !r.some((e) => 0 !== e && e !== n) && ("unchecked" === d[e].order || function(e, t) {
		let r = t;
		for (const s of e) {
			if (!Number.isFinite(s) || s <= r) return !1;
			r = s;
		}
		return !0;
	}(t, s));
}
const f = "Activity data is corrupt — please reprocess the file";
function y(e) {
	return {
		ggirTimestamps: e.ggirTimestamps ? new Float64Array(e.ggirTimestamps) : /* @__PURE__ */ new Float64Array(0),
		ggirEnmo: e.ggirEnmo ? new Float64Array(e.ggirEnmo) : /* @__PURE__ */ new Float64Array(0),
		ggirAnglez: e.ggirAnglez ? new Float64Array(e.ggirAnglez) : /* @__PURE__ */ new Float64Array(0),
		ggirSib: e.ggirSib ? new Uint8Array(e.ggirSib) : /* @__PURE__ */ new Uint8Array(0)
	};
}
async function w(e, t, r) {
	const s = r?.next[e];
	if (void 0 !== s) return s;
	const n = await t().nextDate(e);
	if (void 0 === n) throw new RangeError(`Not a calendar date: ${e}`);
	return n;
}
function A(e, t) {
	const r = new Float64Array(e.length + t.length);
	return r.set(e, 0), r.set(t, e.length), r;
}
function v(e, t) {
	const r = new Uint8Array(e.length + t.length);
	return r.set(e, 0), r.set(t, e.length), r;
}
async function k(e, t, r) {
	const [s = 0, n = 0] = await r.analysisWindowSlice(e.ggirTimestamps, t);
	return s === n ? {
		kind: "refused",
		reason: "No activity data found for this date"
	} : {
		kind: "angle",
		series: {
			timestamps: e.ggirTimestamps.slice(s),
			activityCounts: e.ggirEnmo.slice(s),
			sleepScores: e.sib.slice(s),
			...e.invalid?.length === e.ggirTimestamps.length ? { ggirInvalid: e.invalid.slice(s) } : {}
		}
	};
}
async function S(e, r, n, i, o) {
	try {
		return await async function(e, r, n, i) {
			const o = Array.from(new Float64Array(e.timestamps)), l = Array.from(new Float64Array(e.axisY)), g = Array.from(new Float64Array(e.vectorMagnitude)), m = e.axisX ? Array.from(new Float64Array(e.axisX)) : [], d = e.axisZ ? Array.from(new Float64Array(e.axisZ)) : [], h = e.temperature ? Array.from(new Float64Array(e.temperature)) : [], f = e.eventMarkers ? Array.from(new Uint8Array(e.eventMarkers)) : [], w = e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : [], A = e.lux ? Array.from(new Float64Array(e.lux)) : [];
			if (o.length !== l.length || o.length !== g.length) throw new Error("Corrupt activity data: array lengths do not match");
			const v = y(e), k = _(e, r), S = "stale" === k.status ? k.reason : null, x = "ok" === k.status ? k.bytes : void 0, M = x ? r.key : null;
			null === r.key || x || c("warn", "Strict local algorithm requested without cached score");
			const T = e.lstmTimestamps30s ? new Float64Array(e.lstmTimestamps30s) : /* @__PURE__ */ new Float64Array(0), R = e.lstmSleepWake30s ? new Uint8Array(e.lstmSleepWake30s) : /* @__PURE__ */ new Uint8Array(0);
			let b = x ? Array.from(new Uint8Array(x)) : [];
			if (0 === b.length && r.key === t.LSTM_SLEEP_WAKE && T.length > 0 && R.length === T.length && (b = await async function(e, t, r, s, n = a()) {
				return Array.from(await n.projectLabelsOntoGrid(Float64Array.from(t), Uint8Array.from(r, (e) => e ? 1 : 0), s, Float64Array.from(e)));
			}(o, T, R, 30, i)), b.length > 0 && b.length !== o.length) {
				const t = await D(e, Uint8Array.from(b), i);
				t && (b = Array.from(t));
			}
			const F = null === M ? void 0 : Object.entries(p).find(([e]) => e === M)?.[1], E = void 0 === F ? void 0 : e[F], I = E instanceof ArrayBuffer && b.length > 0 ? Array.from(new Uint8Array(E)) : [], L = {};
			for (const [t, s] of Object.entries(u(e, n))) L[t] = Array.from(new Uint8Array(s));
			return {
				timestamps: o,
				axisX: m,
				axisY: l,
				axisZ: d,
				vectorMagnitude: g,
				temperature: h,
				eventMarkers: f,
				eventMarkerTimestamps: w,
				lux: A,
				...v,
				sleepScores: b,
				sleepScoreGaps: I,
				scoresStale: S,
				lstmTimestamps30s: T,
				lstmSleepWake30s: R,
				nonwearResults: L[s.CHOI_2012] ?? null,
				nonwearResultsChoi2011: L[s.CHOI_2011] ?? null,
				detachNonwear: L[s.DETACH_NONWEAR] ?? null,
				vanHeesNonwear: L[s.VAN_HEES_2023] ?? null,
				nonwearMasksByDetector: L
			};
		}(e, r, i, o);
	} catch (l) {
		return c("warn", "Local activity day unpack failed", {
			...m(l),
			has_context: Boolean(n)
		}), null;
	}
}
function _(e, t) {
	const r = x([e], t);
	return "ok" === r.status ? {
		status: "ok",
		key: r.key,
		bytes: r.outputs[0]
	} : r;
}
function x(e, t) {
	const r = o(e, t);
	return "stale" === r.status && c("warn", "Stored cube output is from another config"), r;
}
function M(e, t) {
	const r = i("AlgorithmType", e), s = n.find((t) => t.id === e);
	if ("vendor_analysis" === s?.execution && null !== s.sourceVendorLabel) {
		const n = s.sourceVendorLabel;
		return g(t, e) && null == t?.actiwareSleepWake ? `${r} has no scores for this file (no analysis settings)` : `${r} has no scores for this file (not ${/^[aeiou]/i.test(n) ? "an" : "a"} ${n} recording)`;
	}
	return `${r} has no scores for this night`;
}
async function T(e) {
	const { day: t, nextDay: r, verdict: s, choiAxis: n, core: a } = e;
	if (e.requireScores) {
		const e = x(r ? [t, r] : [t], s);
		if ("stale" === e.status) return {
			kind: "refused",
			reason: e.reason
		};
	}
	if (e.angle) return async function(e) {
		const { day: t, nextDay: r } = e;
		if (e.requireScores) {
			const s = o(r ? [t, r] : [t], e.verdict);
			if ("stale" === s.status) return {
				kind: "refused",
				reason: s.reason
			};
		}
		const s = [t, ...await e.laterDays()];
		let n = /* @__PURE__ */ new Float64Array(0), a = /* @__PURE__ */ new Float64Array(0), i = /* @__PURE__ */ new Uint8Array(0), l = /* @__PURE__ */ new Uint8Array(0), g = 0, u = 0, c = 0;
		for (const o of s) {
			let e;
			try {
				e = y(o);
			} catch {
				return {
					kind: "refused",
					reason: f
				};
			}
			const t = e.ggirTimestamps.length;
			if (0 === t) continue;
			const r = o.ggirInvalid ? new Uint8Array(o.ggirInvalid) : /* @__PURE__ */ new Uint8Array(0);
			if (e.ggirEnmo.length !== t || !h("epoch_5s", e.ggirTimestamps, [e.ggirSib.length, r.length], n[n.length - 1] ?? -1 / 0)) return {
				kind: "refused",
				reason: f
			};
			c += 1, e.ggirSib.length === t && (g += 1), r.length === t && (u += 1), n = A(n, e.ggirTimestamps), a = A(a, e.ggirEnmo), i = v(i, e.ggirSib), l = v(l, r);
		}
		return 0 === g ? { kind: "angle-legacy" } : g !== c || 0 !== u && u !== c ? {
			kind: "refused",
			reason: f
		} : {
			kind: "angle",
			ggirTimestamps: n,
			ggirEnmo: a,
			sib: i,
			invalid: 0 === u ? null : l
		};
	}({
		day: t,
		nextDay: r,
		verdict: s,
		requireScores: !1,
		laterDays: e.laterDays
	});
	const i = await S(t, s, "night inputs", n, a);
	if (!i) return {
		kind: "refused",
		reason: f
	};
	const l = r ? await S(r, s, "night inputs next-day", n, a) : null;
	if (r && !l) return {
		kind: "refused",
		reason: "Next-day activity data is corrupt — please reprocess the file"
	};
	if (e.requireScores) {
		const t = [i, ...l ? [l] : []].filter((e) => e.timestamps.length > 0);
		if (t.some((e) => 0 === e.sleepScores.length)) return {
			kind: "refused",
			reason: e.missingScoresReason
		};
		if (t.some((e) => e.sleepScores.length !== e.timestamps.length)) return {
			kind: "refused",
			reason: f
		};
		if (0 === t.length) return {
			kind: "refused",
			reason: e.missingScoresReason
		};
	}
	if (l) {
		const e = i.timestamps.length, t = l.timestamps.length;
		b(i.timestamps, l.timestamps), b(i.axisY, l.axisY), b(i.eventMarkerTimestamps, l.eventMarkerTimestamps), b(i.sleepScores, l.sleepScores), R(i, l, e, t);
	}
	return {
		kind: "counts",
		unpacked: i
	};
}
function R(e, t, r, n) {
	const a = /* @__PURE__ */ new Set([...Object.keys(e.nonwearMasksByDetector), ...Object.keys(t.nonwearMasksByDetector)]);
	for (const s of a) {
		const a = e.nonwearMasksByDetector[s], i = !a || a.length < r ? new Array(r).fill(0) : a;
		b(i, t.nonwearMasksByDetector[s] ?? new Array(n).fill(0)), e.nonwearMasksByDetector[s] = i;
	}
	var i;
	(i = e).nonwearResults = i.nonwearMasksByDetector[s.CHOI_2012] ?? null, i.nonwearResultsChoi2011 = i.nonwearMasksByDetector[s.CHOI_2011] ?? null, i.detachNonwear = i.nonwearMasksByDetector[s.DETACH_NONWEAR] ?? null, i.vanHeesNonwear = i.nonwearMasksByDetector[s.VAN_HEES_2023] ?? null;
}
function b(e, t) {
	const r = e.length;
	e.length = r + t.length;
	for (let s = 0; s < t.length; s++) e[r + s] = t[s];
}
function F(e, t, r, s) {
	return t.length === e.length && s.length === r.length ? v(t, s) : /* @__PURE__ */ new Uint8Array(0);
}
function E(e, t) {
	return "actoglance.source.ggir_generic_epoch_csv.v1" !== e?.sourceProfileId || t.ggirInvalid ? "Re-import this file to compute GGIR's sleep bouts." : "GGIR invalid mask missing";
}
function I(e, t) {
	return e.length > 0 && t.length === e.length ? t : /* @__PURE__ */ new Uint8Array(0);
}
async function D(t, r, s = a()) {
	const n = new Float64Array(t.timestamps);
	if (r.length === n.length) return r;
	const i = t.epochResolutions?.find((e) => "counts_60s" === e.resolutionId)?.derivedData?.data.timestamps;
	return i && i.length === r.length ? s.projectLabelsOntoGrid(Float64Array.from(i), r, e, n) : null;
}
function L(e) {
	return r(e);
}
async function U(e, t, r) {
	return w(e, () => r ?? a(), t);
}
async function O(e, t, r, s = (t) => l(e, t, r), n, i) {
	return async function(e, t, r, s, n) {
		const o = await r(t);
		if (o) return o;
		if (!await r(await w(t, () => i ?? a(), n))) return;
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
	}(e, t, s, 0, n);
}
function j(e, t, r, s = 60) {
	const n = [], a = t.flatMap((e) => e.epochResolutions ?? []).find((e) => "count_sleep_wake" === e.category && !e.derivedFromResolutionId)?.epochLengthSeconds ?? s;
	if (e.timestamps.length > 0) {
		const s = `counts_${a}s`;
		if (n.push({
			resolutionId: s,
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
				const i = o(a.map((t, r) => ({
					algorithmResults: t.algorithmResults,
					algorithmResultHashes: e[r].algorithmResultHashes
				})), r), l = "ok" === i.status ? i.outputs.map((e) => e ?? []) : [], g = l.some((e) => e.length > 0) ? l.flatMap((e, t) => e.length > 0 ? e : new Array(a[t].data.timestamps.length).fill(0)) : [], u = a.some((e) => null !== e.nonwearResults) ? a.flatMap((e) => e.nonwearResults ?? new Array(e.data.timestamps.length).fill(0)) : [];
				n.push({
					resolutionId: "counts_60s",
					epochLengthSeconds: 60,
					category: "count_sleep_wake",
					sourceType: "epochs_60s",
					derivedFromResolutionId: s,
					aggregationMethod: "sum_counts",
					data: t,
					algorithmResults: g.length > 0 ? g : null,
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
export { v as _, U as a, L as c, I as d, S as f, A as g, f as h, F as i, T as l, D as m, j as n, O as o, M as p, R as r, E as s, b as t, _ as u, k as v };
