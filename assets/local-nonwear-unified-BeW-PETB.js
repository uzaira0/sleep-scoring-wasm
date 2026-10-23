import { i as e, u as n } from "./workers-BGLkJCHh.js";
import { C as t, Kt as a, Lt as r, Ut as s, Wt as i, b as o, ct as c, dt as l, lt as u, on as m, qt as d, x as p } from "./schema-CYmiFjVW.js";
import { O as f, b as _, j as h } from "./workspace-db-DmdvN4sJ.js";
import { X as g } from "./night-session-registry-CznfYRTW.js";
import { a as w, c as y, n as v, r as b, s as S } from "./sleep-period-detection-CMDjTrts.js";
import { T } from "./valid-day-criteria-BvCKhd-p.js";
import { i as A } from "./store-DoL1akY8.js";
async function k(e, n, t, a) {
	if (0 === e.length || 0 === n.length) return new Array(n.length).fill(0);
	const r = await a.rasterizePeriods(Float64Array.from(e, (e) => e.startTsSec), Float64Array.from(e, (e) => e.endTsSec), Float64Array.from(n), t);
	return Array.from(r.mask);
}
const N = "diary", M = "none";
function C(e) {
	return e === d.WEBSTER ? { preset: e } : void 0;
}
const E = new Set(Object.values(r));
function O(e) {
	if (!e) return [];
	const n = [];
	for (const [t, a] of e) null != t && "" !== t.trim() && n.push({
		onset_time: t,
		offset_time: a ?? null
	});
	return n;
}
function D(e) {
	if (!e) return [];
	const n = [];
	for (const [t, a] of e) null != t && null != a && "" !== t.trim() && "" !== a.trim() && n.push({
		start_time: t,
		end_time: a
	});
	return n;
}
function R(e, n) {
	const t = (e) => ({
		source_a: e,
		source_b: "none",
		fusion_policy: "use_source_a",
		apply_nonwear_gate: !1
	});
	switch (e) {
		case i.DIARY: return;
		case i.HDCZA: return t("hdcza");
		case i.L5: return t("l5");
		case i.LONGEST_BOUT: return t("selected_scorer_longest_bout");
		case i.EVENT_MARKER: return t("event_marker");
		case i.ACTIWARE_REST_INTERVAL: return t("actiware_rest_interval");
		case i.NONE: return t("none");
		case i.SMART:
			if (n.hasDiary) return;
			return t("lstm_sleep_wake" === (a = n.algorithm) ? "selected_scorer_longest_bout" : o(a) ? "hdcza" : "l5");
		default: return;
	}
	var a;
}
function x(e, n) {
	const t = 86400, a = (e) => Math.floor((e - 43200) / t), r = a(Date.parse(`${n}T12:00:00Z`) / 1e3), s = [], i = (e ?? []).filter((e) => "rest" === e.kind);
	i.forEach((e, n) => {
		for (let r = a(e.startTimestamp); r <= a(e.endTimestamp); r++) {
			const a = r * t + 43200, i = Math.min(e.endTimestamp, a + t) - Math.max(e.startTimestamp, a);
			i > 0 && s.push({
				rest: n,
				night: r,
				overlap: i,
				start: e.startTimestamp
			});
		}
	}), s.sort((e, n) => n.overlap - e.overlap || e.start - n.start || e.night - n.night);
	const o = /* @__PURE__ */ new Set(), c = [];
	for (const m of s) {
		const { rest: e, night: n } = m;
		o.has(e) || (o.add(e), n === r && c.push(m));
	}
	const l = (n) => Math.max(0, ...(e ?? []).filter((e) => "sleep" === e.kind && e.startTimestamp >= i[n].startTimestamp && e.endTimestamp <= i[n].endTimestamp).map((e) => e.endTimestamp - e.startTimestamp));
	c.sort((e, n) => l(n.rest) - l(e.rest) || n.overlap - e.overlap || e.start - n.start);
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
function W(e, n) {
	const t = x(e, n);
	if (!t) return null;
	const a = (e ?? []).filter((e) => "rest" === e.kind && null !== x([e], n)), r = (e ?? []).filter((e) => "sleep" === e.kind && e.endTimestamp > e.startTimestamp && a.some((n) => e.startTimestamp >= n.startTimestamp && e.endTimestamp <= n.endTimestamp)).sort((e, n) => n.endTimestamp - n.startTimestamp - (e.endTimestamp - e.startTimestamp) || e.startTimestamp - n.startTimestamp), s = r[0];
	return {
		rest: t,
		sleep: s ? {
			startTimestamp: s.startTimestamp,
			endTimestamp: s.endTimestamp
		} : null,
		...r.length > 1 ? { additionalSleeps: r.slice(1).sort((e, n) => e.startTimestamp - n.startTimestamp).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) } : {}
	};
}
function H(e) {
	const n = Number.parseInt((e ?? "").split(":")[0] ?? "", 10);
	return Number.isInteger(n) && n >= 0 && n <= 23 ? n : null;
}
function I(e) {
	const n = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime), t = o(e.algorithm) ? void 0 : j(e), a = o(e.algorithm) && !n ? b.HDCZA : b.DIARY;
	return {
		...y(e.sleepPeriodDetection),
		...t ?? {
			source_a: a,
			source_b: b.NONE,
			fusion_policy: v.USE_SOURCE_A
		}
	};
}
function j(e) {
	if (e.sleepPeriodDetection && !w(S(e.sleepPeriodDetection))) {
		const n = y(e.sleepPeriodDetection);
		return {
			source_a: n.source_a,
			source_b: n.source_b,
			fusion_policy: n.fusion_policy,
			apply_nonwear_gate: n.apply_nonwear_gate
		};
	}
	const n = e.periodGuider ?? i.SMART, t = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime);
	return R(n, {
		algorithm: e.algorithm ?? null,
		hasDiary: t
	});
}
function F(e) {
	const n = { ruleset: o(e.algorithm) ? a.GGIR_PART4 : e.ruleset ?? "legacy" };
	e.algorithm && E.has(e.algorithm) && (n.classifier = e.algorithm), null != e.epochLengthSeconds && (n.epoch_length_seconds = e.epochLengthSeconds), null != e.onsetMinConsecutiveSleep && (n.onset_min_consecutive_sleep = e.onsetMinConsecutiveSleep), null != e.offsetMinConsecutiveMinutes && (n.offset_min_consecutive_minutes = e.offsetMinConsecutiveMinutes), e.scorerPostprocessing && (n.scorer_postprocessing = e.scorerPostprocessing);
	const { nonwear_detector: t, nonwear_detectors: r } = z(e.nonwearDetectors, null, { alwaysNameSingle: !1 });
	if (t && (n.nonwear_detector = t), r && (n.nonwear_detectors = r), e.sleepPeriodDetection) {
		const t = S(e.sleepPeriodDetection);
		n.merge_gap_minutes = t.mergeGapMinutes, n.padding_minutes = t.paddingMinutes, n.min_overlap_jaccard = t.minOverlapJaccard;
	}
	const s = j(e);
	return s && (n.detection = s), n;
}
const G = "study_selection", P = Object.values(h);
function $(e) {
	const n = (e) => {
		const n = P.indexOf(e);
		return -1 === n ? P.length : n;
	};
	return [...e].sort((e, t) => n(e) - n(t));
}
function z(e, n, { alwaysNameSingle: t, memberFlags: a }) {
	if (!e || 0 === e.length) return {};
	if (1 === e.length) {
		const [n] = e;
		return t || n !== h.choi_2011 ? { nonwear_detector: n } : {};
	}
	return {
		nonwear_detectors: $(e),
		...n ? { nonwear_weight: [...n] } : {},
		...n && a ? { nonwear_member_flags: [...a] } : {}
	};
}
function B(e) {
	const n = {
		analysis_date: e.analysisDate ?? "",
		epoch_length_seconds: e.epochLengthSeconds ?? 60,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (n.choi_nonwear = e.choiNonwear);
	const { nonwear_weight: t, nonwear_member_flags: a } = z(e.nonwearDetectors, e.nonwearWeight, {
		alwaysNameSingle: !1,
		memberFlags: e.nonwearMemberFlags
	});
	t && (n.nonwear_weight = t), a && (n.nonwear_member_flags = a), e.ggirInvalid && (n.ggir_invalid = Array.from(e.ggirInvalid)), e.ggirHasptAlgo && (n.ggir_haspt_algo = e.ggirHasptAlgo), e.ggirConfigCsv && (n.ggir_config_csv = e.ggirConfigCsv), e.ggirDiaryHasBedlog && (n.ggir_diary_has_bedlog = !0), e.ggirDiaryHasSleeplog && (n.ggir_diary_has_sleeplog = !0), e.sensorNonwear && e.sensorNonwear.length > 0 && (n.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (n.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (n.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (n.diary_in_bed_time = e.diaryBedTime), null != e.diaryOutBedTime && (n.diary_out_bed_time = e.diaryOutBedTime);
	const r = O(e.diaryNaps);
	r.length > 0 && (n.diary_naps = r);
	const s = D(e.diaryNonwear);
	return s.length > 0 && (n.diary_nonwear = s), e.hdczaWindow && (n.hdcza_window = [e.hdczaWindow.startTimestamp, e.hdczaWindow.endTimestamp]), e.eventMarkerTimestamps && e.eventMarkerTimestamps.length > 0 && (n.event_marker_timestamps = Array.from(e.eventMarkerTimestamps)), e.actiwareRestWindow && (n.actiware_rest_window = [e.actiwareRestWindow.startTimestamp, e.actiwareRestWindow.endTimestamp]), null != e.nightStartHour && (n.night_start_hour = e.nightStartHour), null != e.nightEndHour && (n.night_end_hour = e.nightEndHour), n;
}
function L(e) {
	const n = {
		analysis_date: e.analysisDate,
		epoch_length_seconds: e.epochLengthSeconds,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (n.choi_nonwear = e.choiNonwear), e.nonwearWeight && (n.nonwear_weight = [...e.nonwearWeight]), e.nonwearWeight && e.nonwearMemberFlags && (n.nonwear_member_flags = [...e.nonwearMemberFlags]), e.sensorNonwear && e.sensorNonwear.length > 0 && (n.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (n.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (n.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (n.diary_in_bed_time = e.diaryBedTime);
	const t = O(e.diaryNaps);
	t.length > 0 && (n.diary_naps = t);
	const a = D(e.diaryNonwear);
	return a.length > 0 && (n.diary_nonwear = a), n;
}
function U(e) {
	return e && 0 !== e.length ? e.map(([e, n]) => [e, n]) : null;
}
function q(e) {
	const n = [
		"timestamps",
		"activity_counts",
		"sleep_scores",
		"choi_nonwear",
		"anglez",
		"light",
		"temperature",
		"heart_rate",
		"detach_nonwear"
	], t = (n, t) => {
		const a = e.days.map((e) => e[n] ?? []), r = new Uint32Array(a.length + 1);
		for (const [e, o] of a.entries()) r[e + 1] = r[e] + o.length;
		const s = 1 === a.length ? a[0] : void 0, i = s instanceof t ? s : new t(r[a.length]);
		if (i !== s) for (const [e, o] of a.entries()) i.set(o, r[e]);
		return [i, r];
	}, a = {
		config: e.config,
		days: e.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !n.includes(e))))
	};
	return [
		JSON.stringify(a),
		...t("timestamps", Float64Array),
		...t("activity_counts", Float64Array),
		...t("sleep_scores", Uint8Array),
		...t("choi_nonwear", Uint8Array),
		...t("anglez", Float64Array),
		...t("light", Float64Array),
		...t("temperature", Float64Array),
		...t("heart_rate", Float64Array),
		...t("detach_nonwear", Uint8Array)
	];
}
function V(e) {
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
function Z(e, n) {
	const t = {
		onset_timestamp: e.onset_timestamp,
		offset_timestamp: e.offset_timestamp,
		marker_type: e.marker_type,
		marker_index: e.marker_index
	};
	return n && (t.placement = n), t;
}
function X(e) {
	return {
		kind: "refused",
		reason: e
	};
}
function J(e, n, t) {
	if (!e) return X("The placement engine returned no result for this night.");
	const a = e.guider ?? t, r = null == e.guider ? n : {
		...n,
		source_a: e.guider
	}, s = (e.decisions ?? []).map(V), i = (e, n) => s.find((t) => t.marker_type === e && t.marker_index === n);
	return {
		kind: "placed",
		sleep_markers: (e.sleep_markers ?? []).map((e) => Z(e, i(e.marker_type, e.marker_index))),
		nap_markers: (e.nap_markers ?? []).map((e) => Z(e, i(e.marker_type, e.marker_index))),
		notes: e.notes ?? [],
		decisions: s,
		sleep_period_detection_config: r,
		effective_detection_source_a: a,
		invalid_night: e.invalid_night ?? null,
		diary_available: e.diary_available ?? null
	};
}
const K = "Marker placement is unavailable in this build — reload while online to update the local engine.";
async function Y(e, t) {
	const a = I(e), r = String(a.source_a);
	if (0 === e.timestamps.length) return X("No activity data");
	const s = function(e) {
		let n;
		if ("variant" in e) {
			const { variant: a, timestamps: r, activityCounts: s, sleepScores: i, analysisDate: o, epochLengthSeconds: c, hdczaWindow: l, diary: u, onsetMinConsecutiveSleep: m, offsetMinConsecutiveMinutes: p, choiNonwear: f, nonwearDetectors: _, nonwearWeight: h, nonwearMemberFlags: g, eventMarkerTimestamps: w, actiwareRestWindow: y } = e, S = a.config.rescoring === d.WEBSTER ? C(d.WEBSTER) : void 0;
			n = {
				timestamps: r,
				activityCounts: s,
				sleepScores: i,
				...void 0 !== f ? { choiNonwear: f } : {},
				...void 0 !== _ ? { nonwearDetectors: _ } : {},
				...void 0 !== h ? { nonwearWeight: h } : {},
				...void 0 !== g ? { nonwearMemberFlags: g } : {},
				ruleset: a.config.ruleset,
				...void 0 !== S ? { scorerPostprocessing: S } : {},
				analysisDate: o,
				epochLengthSeconds: c,
				hdczaWindow: l ? {
					startTimestamp: l[0],
					endTimestamp: l[1]
				} : null,
				...w ? { eventMarkerTimestamps: w } : {},
				...y ? { actiwareRestWindow: y } : {},
				diaryBedTime: u?.diaryInBedTime ?? null,
				diaryOnsetTime: u?.onsetTime ?? null,
				diaryWakeTime: u?.diaryWakeTime ?? null,
				diaryNaps: U(u?.naps),
				diaryNonwear: U(u?.nonwear),
				...void 0 !== m ? { onsetMinConsecutiveSleep: m } : {},
				...void 0 !== p ? { offsetMinConsecutiveMinutes: p } : {},
				...(t = a.config.periodSource, t === N ? { periodGuider: N } : t === M ? { periodGuider: M } : { sleepPeriodDetection: {
					sourceA: t,
					sourceB: b.NONE,
					fusionPolicy: v.USE_SOURCE_A,
					applyNonwearGate: !1
				} })
			};
		} else n = e;
		var t;
		return q({
			config: F(n),
			days: [B(n), ...(n.contextDays ?? []).filter((e) => e.analysisDate !== (n.analysisDate ?? "")).map(L)]
		});
	}(e), i = await (e.wasmApiOverride ?? t()).placeMarkers(n(s, s.slice(1).filter((n) => ArrayBuffer.isView(n) && ![e, ...e.contextDays ?? []].some((e) => n === e.timestamps || n === e.activityCounts || n === e.sleepScores || n === e.choiNonwear)).map((e) => e.buffer)));
	return i ? J((e.analysisDate ? i.results.find((n) => n.analysis_date === e.analysisDate) : void 0) ?? i.results[0], a, r) : X(K);
}
async function Q(e, t) {
	const a = /* @__PURE__ */ new Map(), r = [];
	for (const [n, o] of e.entries()) {
		const e = F(o);
		if (0 === o.timestamps.length || "legacy" !== e.ruleset || (o.contextDays?.length ?? 0) > 0 || o.wasmApiOverride) {
			r.push(n);
			continue;
		}
		const t = JSON.stringify(e);
		a.set(t, [...a.get(t) ?? [], n]);
	}
	const s = new Array(e.length), i = [...r, ...[...a.values()].filter((e) => 1 === e.length).flat()];
	return await Promise.all(i.map(async (n) => {
		s[n] = await Y(e[n], () => t);
	})), await Promise.all([...a.values()].filter((e) => e.length > 1).map(async (a) => {
		const r = a.map((n) => e[n]), i = function(e) {
			const n = e[0];
			if (!n) throw new Error("buildNightsPlacementRequest needs at least one night.");
			return q({
				config: F(n),
				days: e.map(B)
			});
		}(r), o = await t.placeMarkers(n(i, i.slice(1).map((e) => e.buffer)));
		for (const [e, n] of a.entries()) {
			const t = r[e], a = I(t), i = o?.results.find((e) => e.analysis_date === t.analysisDate);
			s[n] = o ? J(i ?? o.results[e], a, String(a.source_a)) : X(K);
		}
	})), s;
}
const ee = new Map(l.map((e) => [e.id, e]));
function ne(e) {
	return "conformant" === e;
}
const te = {
	provisional: "Provisional — constants are not yet verified against the reference implementation.",
	needs_model: "Needs a trained model artifact — cannot produce a result."
}, ae = "Scientifically eligible, but this implementation is not available on the active runtime.", re = "Unavailable for this file: it does not carry the input this method needs.";
function se(e) {
	return te[e] ?? `Not selectable — conformance state "${e}" is not validated.`;
}
const ie = /* @__PURE__ */ new Set([
	"consensus_majority_vote",
	"manual",
	"natural_language",
	"van_hees_hasib_2015"
]), oe = Object.keys(g), ce = [30, 60], le = /* @__PURE__ */ new Set([
	...oe,
	...Object.values(T).flatMap((e) => [...e.countMetrics]),
	...l.flatMap((e) => [...e.compatibleCountMetrics])
]), ue = Object.values(_).filter((e) => le.has(e)), me = new Set(oe), de = {
	cole_kripke_1992: "Cole-Kripke (1992)",
	ucsd_scripps_2010: "UCSD / Scripps (2010)",
	van_hees_2015: "van Hees (2015)",
	van_hees_hasib_2015: "van Hees HASIB (2015)",
	lstm_sleep_wake: "LSTM Sleep/Wake",
	actiware_sleep_wake: "Actiware Sleep/Wake",
	syed_cnn: "Syed CNN"
}, pe = {
	original: "Original",
	actilife: "ActiLife",
	ggir: "GGIR",
	hasib: "HASIB",
	reference: "Reference",
	actiware: "Actiware"
};
function fe(e) {
	return e.split("_").map((e) => 0 === e.length ? e : e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
}
function _e(e) {
	return de[e] ?? fe(e);
}
function he(e) {
	return l.filter((n) => n.family === e);
}
function ge(e, n, t) {
	const a = /* @__PURE__ */ new Set(), r = [], s = n ? new Set(n.sleepAlgorithms) : null;
	for (const i of l) {
		if ("sleep_wake" !== i.kind) continue;
		const n = i.family;
		if (null === n || ie.has(n)) continue;
		if (a.has(n)) continue;
		a.add(n);
		const o = he(n);
		if (o.length > 0 && o.every((e) => !ne(e.conformance))) {
			const e = o.every((e) => "needs_model" === e.conformance) ? "needs_model" : "provisional";
			r.push({
				value: n,
				label: _e(n),
				disabled: !0,
				reason: se(e)
			});
			continue;
		}
		if (null !== s && o.every((e) => !s.has(e.id))) {
			r.push({
				value: n,
				label: _e(n),
				disabled: !0,
				reason: o.some((e) => t?.has(e.id)) ? re : ae
			});
			continue;
		}
		const c = we(n);
		void 0 === e || ye(c) === e ? r.push({
			value: n,
			label: _e(n)
		}) : r.push({
			value: n,
			label: _e(n),
			disabled: !0,
			reason: ve(c)
		});
	}
	return r;
}
function we(e) {
	const n = he(e)[0]?.execution;
	return "angle_spt" === n ? "angle" : "neural_model" === n ? "neural" : "vendor_analysis" === n ? "vendor" : "counts";
}
function ye(e) {
	return "angle" === e ? f.ggir_5s : f.number_60s_epochs;
}
function ve(e) {
	return "angle" === e ? "Requires the GGIR 5 s raw pipeline — switch the extraction path to score this." : "Requires the 60 s counts pipeline — switch the extraction path to score this.";
}
function be(e, n, t) {
	const a = n ? new Set(n.sleepAlgorithms) : null;
	return he(e).map((e) => {
		const n = e.implementation ?? "reference", r = (s = e.implementation ?? "reference", pe[s] ?? fe(s));
		var s;
		return ne(e.conformance) ? null === a || a.has(e.id) ? {
			value: n,
			label: r
		} : {
			value: n,
			label: r,
			disabled: !0,
			reason: t?.has(e.id) ? re : ae
		} : {
			value: n,
			label: r,
			disabled: !0,
			reason: se(e.conformance)
		};
	});
}
function Se(e, n) {
	return c[`${e}::${n}`] ?? null;
}
function Te(e, n) {
	const t = Se(e, n);
	return t ? ee.get(t) : void 0;
}
function Ae(e, n) {
	return Te(e, n)?.defaultCountMetric ?? oe[0] ?? "neishabouri";
}
function ke(e, n, t) {
	const a = Te(e, n), r = new Set(a?.compatibleCountMetrics ?? []), s = t ? new Set(t.countMetrics) : null, i = Ae(e, n);
	let o;
	o = r.size > 0 ? s ? new Set([...r].filter((e) => s.has(e))) : new Set(r) : s ? new Set(s) : /* @__PURE__ */ new Set();
	const c = new Set([...o].filter((e) => me.has(e))), l = new Set([...o].filter((e) => !me.has(e))), u = null === s || 0 === s.size, m = 0 === c.size && u;
	return ue.map((e) => {
		const n = function(e) {
			return "neishabouri" === e ? "Neishabouri (amplitude counts)" : "zero_crossing" === e ? "Zero-crossing (GGIR zc)" : "pim" === e ? "PIM (proportional integrating mode)" : "zcm" === e ? "ZCM (zero-crossing mode)" : "tat" === e ? "TAT (time above threshold)" : fe(e);
		}(e);
		return m ? e === i ? {
			value: e,
			label: n
		} : {
			value: e,
			label: n,
			disabled: !0,
			reason: "Source-native counts — this scorer declares no selectable substrate."
		} : c.has(e) ? {
			value: e,
			label: n
		} : {
			value: e,
			label: n,
			disabled: !0,
			reason: l.has(e) ? "Recorded by this device, but not yet scoreable as a variant — its count-substrate cube cell is pending." : r.size > 0 && !r.has(e) ? "Not a validated substrate for this scorer." : "This device does not record these counts."
		};
	});
}
function Ne(e) {
	return (g[e] ?? []).map((e) => ({
		value: e,
		label: Me(e)
	}));
}
function Me(e) {
	return "vm" === e ? "Vector magnitude" : `Axis ${e.toUpperCase()}`;
}
function Ce(e, n) {
	const t = we(e);
	if ("angle" === t) return u.filter((e) => "raw" === e.lineage).map((e) => ({
		value: String(e.seconds),
		label: `${String(e.seconds)} s`
	}));
	if ("neural" === t || "vendor" === t) {
		const t = Te(e, n)?.nativeEpochSeconds ?? 60;
		return [{
			value: String(t),
			label: `${String(t)} s (native)`
		}];
	}
	return u.filter((e) => "counts" === e.lineage).map((e) => ce.includes(e.seconds) ? {
		value: String(e.seconds),
		label: `${String(e.seconds)} s`
	} : {
		value: String(e.seconds),
		label: `${String(e.seconds)} s`,
		disabled: !0,
		reason: "Provisional — no scorer is validated at 15 s (not a cube epoch)."
	});
}
function Ee(e, n) {
	return e.find((e) => !e.disabled)?.value ?? e[0]?.value ?? n;
}
const Oe = De("count_cell");
function De(e) {
	const n = t.find((n) => n.grammarId === e), a = n?.segments[0]?.literalValue;
	if (void 0 === n || void 0 === a) throw new Error(`cell id grammar ${e} has no root segment`);
	return `${a}${n.segmentSeparator}`;
}
function Re(e) {
	const n = e.trim();
	if (n.startsWith(Oe)) {
		const e = p(n), t = e.scorer;
		if (void 0 !== t && ("count_hasib" === e.family || "angle_hasib" === e.family)) return xe({
			family: t,
			implementation: e.provenance ?? We(t),
			countMetric: e.countSource ?? "neishabouri",
			axis: "anglez" === e.signalAxis ? "y" : e.signalAxis ?? "y",
			epochSeconds: Number(e.epoch)
		});
		const a = n.slice(Oe.length).split("__")[0] ?? "";
		if (he(a).length > 0) return console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${n}" — keeping family "${a}", defaulting its substrate dials.`), xe({
			family: a,
			implementation: We(a),
			countMetric: "neishabouri",
			axis: "y",
			epochSeconds: 60
		});
		console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${n}" — falling back to the first selectable family.`);
	}
	const t = ee.get(n);
	return t && null !== t.family ? xe({
		family: t.family,
		implementation: t.implementation ?? "reference",
		countMetric: t.defaultCountMetric ?? "neishabouri",
		axis: "y",
		epochSeconds: t.nativeEpochSeconds
	}) : function(e, n) {
		const t = ge(void 0, n), a = t.some((n) => n.value === e.family && !n.disabled) ? e.family : Ee(t, e.family), r = be(a, n), s = r.some((n) => n.value === e.implementation && !n.disabled) ? e.implementation : Ee(r, e.implementation);
		if ("counts" !== we(a)) {
			const n = Ce(a, s), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Ee(n, String(e.epochSeconds)));
			return {
				family: a,
				implementation: s,
				countMetric: e.countMetric,
				axis: e.axis,
				epochSeconds: t
			};
		}
		const i = ke(a, s, n), o = i.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : Ee(i, Ae(a, s)), c = Ne(o), l = c.some((n) => n.value === e.axis && !n.disabled) ? e.axis : Ee(c, "y"), u = Ce(a, s);
		return {
			family: a,
			implementation: s,
			countMetric: o,
			axis: l,
			epochSeconds: u.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Ee(u, "60"))
		};
	}({
		family: ge().find((e) => !e.disabled)?.value ?? "sadeh_1994",
		implementation: "",
		countMetric: "neishabouri",
		axis: "y",
		epochSeconds: 60
	});
}
function xe(e) {
	return function(e) {
		if ("counts" !== we(e.family)) {
			const n = Ce(e.family, e.implementation), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Ee(n, String(e.epochSeconds)));
			return {
				...e,
				epochSeconds: t
			};
		}
		const n = ke(e.family, e.implementation), t = n.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : Ee(n, Ae(e.family, e.implementation)), a = Ne(t), r = a.some((n) => n.value === e.axis && !n.disabled) ? e.axis : Ee(a, "y"), s = Ce(e.family, e.implementation), i = s.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Ee(s, "60"));
		return {
			...e,
			countMetric: t,
			axis: r,
			epochSeconds: i
		};
	}(e);
}
function We(e) {
	return Se(e, "ggir") ? "ggir" : be(e).find((e) => !e.disabled)?.value ?? "reference";
}
function He(e, n) {
	if (function(e, n) {
		return n?.nonwearAlgorithms.some((n) => n === e) ?? !1;
	}(e, n)) return null;
	const t = Ie(e), a = l.find((n) => n.id === e), r = e === h.gt3x_capsense ? ["the GT3X CAPSENSE wear-sensor stream"] : [
		..."raw_accel" === a?.requiredSignal ? ["raw acceleration samples"] : [],
		..."counts_axis_y" === a?.requiredSignal ? ["60 s activity counts"] : [],
		...a?.requiresTemperature ? ["a temperature channel"] : []
	];
	return r.length > 0 ? `The selected nonwear detector (${t}) needs ${r.join(" and ")}, which this file does not provide on the active runtime.` : `The selected nonwear detector (${t}) is not implemented for this file on the active runtime.`;
}
function Ie(e) {
	return {
		[h.choi_2011]: "Choi 2011 (60 min)",
		[h.choi_2012]: "Choi 2012 (90 min)",
		[h.troiano_2008]: "Troiano 2008",
		[h.flat_activity]: "Flat activity",
		[h.gt3x_capsense]: "GT3X CAPSENSE",
		[h.actiware_off_wrist]: "Actiwatch off-wrist",
		[h.detach_nonwear]: "DETACH",
		[h.van_hees_2013]: "van Hees 2013",
		[h.van_hees_2023]: "van Hees 2023",
		[h.ggir_part2_invalid]: "GGIR invalid (Part 2)",
		[h.ahmadi_2020]: "Ahmadi 2020",
		[h.skovgaard_2023]: "Skovgaard 2023",
		study_selection: "Study selection (weighted)"
	}[e] ?? fe(e);
}
De("consensus_cell"), Object.values(h);
const je = l.filter((e) => "nonwear" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds
})), Fe = new Map(je.map((e) => [e.id, e]));
function Ge(e) {
	return Fe.get(e);
}
function Pe(e) {
	if (null == e) return !1;
	const n = e.length;
	for (let t = 0; t < n; t++) {
		const n = e[t];
		if (void 0 !== n && Number.isFinite(n)) return !0;
	}
	return !1;
}
const $e = {
	source_not_eligible: "DETACH nonwear was not run: this file's source type has no scientifically eligible DETACH path.",
	no_finite_temperature: "DETACH nonwear was not run: this file carries no finite temperature samples (the temperature column is absent or all-NaN).",
	no_acceleration_g: "DETACH nonwear was not run: this file carries no per-epoch acceleration in g. DETACH's acceleration threshold is 0.013 g and activity counts are not comparable to it, so no mask is produced from counts.",
	computation_failed: "DETACH nonwear failed while running for this day. Choi nonwear is intact."
};
function ze(e, n, t) {
	return e?.nonwearAlgorithms.some((e) => e === s.DETACH_NONWEAR) ? Pe(n) ? null == t || 0 === t.length ? "no_acceleration_g" : null : "no_finite_temperature" : "source_not_eligible";
}
function Be(e, n, t) {
	return null === ze(e, n, t);
}
const Le = je.filter((e) => "raw_accel" === e.requiredSignal && !e.needsModel && !e.requiresTemperature).map((e) => e.id), Ue = {
	[s.CHOI_2012]: "nonwearResults",
	[s.CHOI_2011]: "nonwearResultsChoi2011",
	[s.DETACH_NONWEAR]: "detachNonwear",
	[s.VAN_HEES_2023]: "vanHeesNonwear"
}, qe = Object.keys(Ue), Ve = je.filter((e) => "counts_axis_y" === e.requiredSignal && !e.needsModel && !e.requiresTemperature && !qe.includes(e.id)).map((e) => e.id);
function Ze(e, n, t) {
	if (!ln(e, n, t)) return;
	const a = Ue[n];
	return a ? e[a] : e.unifiedNonwearMasks?.[n];
}
async function Xe(n, t, a, r, s = e()) {
	if (!n) return null;
	const i = Ke(n, t, a.source);
	if (null !== i) return { unavailable: i };
	const { timestampsSec: o, epochLenSec: c } = r;
	if (Je(n)) return { mask: await k(a.offPeriods.map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	})), o, c, s) };
	const l = t[n], u = new Array(o.length).fill(0), m = Math.min(l.length, u.length);
	for (let e = 0; e < m; e++) u[e] = 1 === l[e] ? 1 : 0;
	return { mask: u };
}
function Je(e) {
	return e === s.GT3X_CAPSENSE || e === s.ACTIWARE_OFF_WRIST;
}
function Ke(e, n, t) {
	return e ? Je(e) ? t === e ? null : He(e) : n[e] ? null : "counts_axis_y" === Ge(e)?.requiredSignal ? function(e) {
		return `nonwear mask for ${Ie(e)} is missing; re-import the file`;
	}(e) : He(e) : null;
}
async function Ye(n, t, a, r, s = e()) {
	const i = [], o = [], c = [];
	for (const e of new Set(n)) {
		const n = await Xe(e, t, a, r, s);
		null !== n && ("unavailable" in n ? c.push({
			detector: e,
			reason: n.unavailable
		}) : (i.push(e), o.push(n.mask)));
	}
	if (0 === i.length) return 0 === c.length ? null : { unavailable: c.map((e) => e.reason).join("; ") };
	const l = $(i), u = await s.fuseNonwearMasks(l.map((e) => Uint8Array.from(o[i.indexOf(e)])));
	return {
		weight: u.weight,
		flagged: u.flagged,
		memberFlags: u.memberFlags,
		available: i,
		memberMasks: o,
		dropped: c
	};
}
function Qe(e) {
	return null !== e && "weight" in e ? e : null;
}
function en(e) {
	return o(e) ? "ggir" : "counts";
}
function nn(e, n = A.getState()) {
	return "ggir" === e ? n.nonwearDetectorsGgir : n.nonwearDetectorsCounts;
}
const tn = {
	counts: m.nonwear_detectors_counts,
	ggir: m.nonwear_detectors_ggir
};
function an(e, n) {
	return e.filter((e) => !tn[n].includes(e.detector)).map((e) => `${Ie(e.detector)} left out of the nonwear weight: ${e.reason}`);
}
function rn(e, n) {
	const t = 1 === n ? "detector" : "detectors";
	return `${String(e.length)} of ${String(n)} ${t} (${e.map(Ie).join(", ")})`;
}
function sn(e, n) {
	const { contributors: t, ...a } = e;
	return void 0 === t ? a : {
		...a,
		contributing_detectors: t,
		agreement: rn(t, n)
	};
}
function on() {
	return A.getState().choiAxis;
}
const cn = [s.CHOI_2011, s.CHOI_2012];
function ln(e, n, t) {
	if (!cn.includes(n)) return !0;
	const a = e.nonwearChoiAxis;
	return void 0 === a || a === t;
}
function un(e, n) {
	const t = {};
	for (const [a, r] of Object.entries(e.unifiedNonwearMasks ?? {})) r && (t[a] = r);
	for (const [a, r] of Object.entries(Ue)) {
		if (!ln(e, a, n)) continue;
		const s = e[r];
		s && (t[a] = s);
	}
	return t;
}
function mn(e, n) {
	if (!e.available || !e.nonwear) return [];
	const t = e.elementSeconds;
	return function(e) {
		const n = [];
		let t = null;
		for (let a = 0; a < e.length; a++) e[a] ? t ??= a : null !== t && (n.push({
			start: t,
			end: a - 1
		}), t = null);
		return null !== t && n.push({
			start: t,
			end: e.length - 1
		}), n;
	}(e.nonwear).map((e) => ({
		startTsSec: n + e.start * t,
		endTsSec: n + (e.end + 1) * t
	}));
}
function dn(n, t, a = e()) {
	return k(mn(n, t.baseTsSec), t.epochTimestampsSec, t.epochLenSec, a);
}
async function pn(e, n, t) {
	const a = {};
	if (0 === e.size || 0 === n.epochTimestampsSec.length) return a;
	const r = {};
	for (const [s, i] of e) {
		if (!i.available) continue;
		const e = await dn(i, n, t), o = new Uint8Array(e).buffer, c = Ue[s];
		c ? a[c] = o : r[s] = o;
	}
	return Object.keys(r).length > 0 && (a.unifiedNonwearMasks = r), a;
}
async function fn(n, t, a = e()) {
	if (0 === n.length || 0 === t.epochTimestampsSec.length) return {};
	let r = Float64Array.from(n);
	const i = Float64Array.from(t.epochTimestampsSec), o = "rounded_mean";
	let c;
	if (t.dstRuns?.length) {
		const e = await a.ggir5sWallClockMs(1e3 * t.baseTsSec, n.length, Array.from(t.dstRuns)), s = Array.from(e.keys()).filter((n) => Number.isFinite(e[n])), l = Float64Array.from(s, (n) => e[n] / 1e3);
		r = Float64Array.from(s, (e) => n[e]), c = await a.foldOntoGrid(l, r, i, t.epochLenSec, o);
	} else c = await a.foldUniformOntoGrid(t.baseTsSec, 5, r, i, t.epochLenSec, o);
	return { [Ue[s.VAN_HEES_2023]]: Uint8Array.from(c, (e) => 1 === e ? 1 : 0).buffer };
}
function _n(...e) {
	const n = {}, t = {};
	for (const a of e) {
		for (const e of Object.values(Ue)) {
			const t = a[e];
			t && (n[e] = t);
		}
		a.unifiedNonwearMasks && Object.assign(t, a.unifiedNonwearMasks);
	}
	return Object.keys(t).length > 0 && (n.unifiedNonwearMasks = t), n;
}
const hn = {
	path: "ggir",
	selected: [s.GGIR_PART2_INVALID],
	available: [s.GGIR_PART2_INVALID],
	dropped: []
};
function gn(e, n) {
	return 0 === n.selected.length ? e : {
		...e ?? {},
		nonwear_detectors: [...n.selected],
		nonwear_path: n.path,
		...n.available ? { nonwear_detectors_available: [...n.available] } : {},
		...n.dropped ? { nonwear_detectors_dropped: n.dropped.map(({ detector: e, reason: n }) => ({
			detector: e,
			reason: n
		})) } : {}
	};
}
s.VAN_HEES_2023, s.VAN_HEES_2023;
export { ye as A, I as B, Ke as C, mn as D, nn as E, W as F, k as G, Y as H, $ as I, H as L, Se as M, G as N, gn as O, x as P, z as R, dn as S, on as T, C as U, Q as V, R as W, Je as _, je as a, en as b, pn as c, ze as d, an as f, Pe as g, fn as h, hn as i, we as j, Re as k, Be as l, Qe as m, Ve as n, Le as o, Ye as p, $e as r, un as s, cn as t, rn as u, _n as v, Ze as w, sn as x, Ge as y, X as z };
