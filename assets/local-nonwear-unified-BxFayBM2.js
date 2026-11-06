import { O as e, Yt as n, _t as t, an as a, gt as r, in as s, j as i, k as o, nn as c, vn as l, yt as u } from "./schema-B_tCLPTi.js";
import { r as m, s as d } from "./workers-ChOvAmOP.js";
import { M as p, k as f, x as h } from "./workspace-db-C0mqPCjA.js";
import { en as _, i as g } from "./store-DM814ES4.js";
import { a as w, c as y, n as v, r as b, s as S, w as T } from "./sleep-period-detection-DACRcT22.js";
import { P as k } from "./valid-day-criteria-BvWW5KT6.js";
async function A(e, n, t, a) {
	if (0 === e.length || 0 === n.length) return new Array(n.length).fill(0);
	const r = await a.rasterizePeriods(Float64Array.from(e, (e) => e.startTsSec), Float64Array.from(e, (e) => e.endTsSec), Float64Array.from(n), t);
	return Array.from(r.mask);
}
const M = "diary", N = "none";
function C(e) {
	return e === a.WEBSTER ? { preset: e } : void 0;
}
const x = new Set(Object.values(n));
function D(e) {
	if (!e) return [];
	const n = [];
	for (const [t, a] of e) null != t && "" !== t.trim() && n.push({
		onset_time: t,
		offset_time: a ?? null
	});
	return n;
}
function O(e) {
	if (!e) return [];
	const n = [];
	for (const [t, a] of e) null != t && null != a && "" !== t.trim() && "" !== a.trim() && n.push({
		start_time: t,
		end_time: a
	});
	return n;
}
function E(n, t) {
	const a = (e) => ({
		source_a: e,
		source_b: "none",
		fusion_policy: "use_source_a",
		apply_nonwear_gate: !1
	});
	switch (n) {
		case c.DIARY: return;
		case c.HDCZA: return a("hdcza");
		case c.L5: return a("l5");
		case c.LONGEST_BOUT: return a("selected_scorer_longest_bout");
		case c.EVENT_MARKER: return a("event_marker");
		case c.ACTIWARE_REST_INTERVAL: return a("actiware_rest_interval");
		case c.NONE: return a("none");
		case c.SMART:
			if (t.hasDiary) return;
			return a("lstm_sleep_wake" === (r = t.algorithm) ? "selected_scorer_longest_bout" : e(r) ? "hdcza" : "l5");
		default: return;
	}
	var r;
}
function R(e, n) {
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
	const t = R(e, n);
	if (!t) return null;
	const a = (e ?? []).filter((e) => "rest" === e.kind && null !== R([e], n)), r = (e ?? []).filter((e) => "sleep" === e.kind && e.endTimestamp > e.startTimestamp && a.some((n) => e.startTimestamp >= n.startTimestamp && e.endTimestamp <= n.endTimestamp)).sort((e, n) => n.endTimestamp - n.startTimestamp - (e.endTimestamp - e.startTimestamp) || e.startTimestamp - n.startTimestamp), s = r[0];
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
function j(e) {
	const n = Number.parseInt((e ?? "").split(":")[0] ?? "", 10);
	return Number.isInteger(n) && n >= 0 && n <= 23 ? n : null;
}
function H(n) {
	const t = Boolean(n.diaryOnsetTime) && Boolean(n.diaryWakeTime), a = e(n.algorithm) ? void 0 : F(n), r = e(n.algorithm) && !t ? b.HDCZA : b.DIARY;
	return {
		...y(n.sleepPeriodDetection),
		...a ?? {
			source_a: r,
			source_b: b.NONE,
			fusion_policy: v.USE_SOURCE_A
		}
	};
}
function F(e) {
	if (e.sleepPeriodDetection && !w(S(e.sleepPeriodDetection))) {
		const n = y(e.sleepPeriodDetection);
		return {
			source_a: n.source_a,
			source_b: n.source_b,
			fusion_policy: n.fusion_policy,
			apply_nonwear_gate: n.apply_nonwear_gate
		};
	}
	const n = e.periodGuider ?? c.SMART, t = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime);
	return E(n, {
		algorithm: e.algorithm ?? null,
		hasDiary: t
	});
}
function P(n) {
	const t = { ruleset: e(n.algorithm) ? s.GGIR_PART4 : n.ruleset ?? "legacy" };
	n.algorithm && x.has(n.algorithm) && (t.classifier = n.algorithm), null != n.epochLengthSeconds && (t.epoch_length_seconds = n.epochLengthSeconds), null != n.onsetMinConsecutiveSleep && (t.onset_min_consecutive_sleep = n.onsetMinConsecutiveSleep), null != n.offsetMinConsecutiveMinutes && (t.offset_min_consecutive_minutes = n.offsetMinConsecutiveMinutes), n.scorerPostprocessing && (t.scorer_postprocessing = n.scorerPostprocessing);
	const { nonwear_detector: a, nonwear_detectors: r } = B(n.nonwearDetectors, null, { alwaysNameSingle: !1 });
	if (a && (t.nonwear_detector = a), r && (t.nonwear_detectors = r), n.sleepPeriodDetection) {
		const e = S(n.sleepPeriodDetection);
		t.merge_gap_minutes = e.mergeGapMinutes, t.padding_minutes = e.paddingMinutes, t.min_overlap_jaccard = e.minOverlapJaccard;
	}
	const i = F(n);
	return i && (t.detection = i), t;
}
const $ = "study_selection", G = Object.values(p);
function z(e) {
	const n = (e) => {
		const n = G.indexOf(e);
		return -1 === n ? G.length : n;
	};
	return [...e].sort((e, t) => n(e) - n(t));
}
function B(e, n, { alwaysNameSingle: t, memberFlags: a }) {
	if (!e || 0 === e.length) return {};
	if (1 === e.length) {
		const [n] = e;
		return t || n !== p.choi_2011 ? { nonwear_detector: n } : {};
	}
	return {
		nonwear_detectors: z(e),
		...n ? { nonwear_weight: [...n] } : {},
		...n && a ? { nonwear_member_flags: [...a] } : {}
	};
}
function I(e) {
	const n = {
		analysis_date: e.analysisDate ?? "",
		epoch_length_seconds: e.epochLengthSeconds ?? 60,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (n.choi_nonwear = e.choiNonwear);
	const { nonwear_weight: t, nonwear_member_flags: a } = B(e.nonwearDetectors, e.nonwearWeight, {
		alwaysNameSingle: !1,
		memberFlags: e.nonwearMemberFlags
	});
	t && (n.nonwear_weight = t), a && (n.nonwear_member_flags = a), e.ggirInvalid && (n.ggir_invalid = Array.from(e.ggirInvalid)), e.ggirHasptAlgo && (n.ggir_haspt_algo = e.ggirHasptAlgo), e.ggirConfigCsv && (n.ggir_config_csv = e.ggirConfigCsv), e.ggirDiaryHasBedlog && (n.ggir_diary_has_bedlog = !0), e.ggirDiaryHasSleeplog && (n.ggir_diary_has_sleeplog = !0), e.sensorNonwear && e.sensorNonwear.length > 0 && (n.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (n.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (n.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (n.diary_in_bed_time = e.diaryBedTime), null != e.diaryOutBedTime && (n.diary_out_bed_time = e.diaryOutBedTime);
	const r = D(e.diaryNaps);
	r.length > 0 && (n.diary_naps = r);
	const s = O(e.diaryNonwear);
	return s.length > 0 && (n.diary_nonwear = s), e.hdczaWindow && (n.hdcza_window = [e.hdczaWindow.startTimestamp, e.hdczaWindow.endTimestamp]), e.eventMarkerTimestamps && e.eventMarkerTimestamps.length > 0 && (n.event_marker_timestamps = Array.from(e.eventMarkerTimestamps)), e.actiwareRestWindow && (n.actiware_rest_window = [e.actiwareRestWindow.startTimestamp, e.actiwareRestWindow.endTimestamp]), null != e.nightStartHour && (n.night_start_hour = e.nightStartHour), null != e.nightEndHour && (n.night_end_hour = e.nightEndHour), n;
}
function U(e) {
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
	const t = D(e.diaryNaps);
	t.length > 0 && (n.diary_naps = t);
	const a = O(e.diaryNonwear);
	return a.length > 0 && (n.diary_nonwear = a), n;
}
function q(e) {
	return e && 0 !== e.length ? e.map(([e, n]) => [e, n]) : null;
}
function L(e) {
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
function J(e) {
	return {
		kind: "refused",
		reason: e
	};
}
function K(e, n, t) {
	if (!e) return J("The placement engine returned no result for this night.");
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
const Y = "Marker placement is unavailable in this build — reload while online to update the local engine.";
async function X(e, n) {
	const t = H(e), r = String(t.source_a);
	if (0 === e.timestamps.length) return J("No activity data");
	const s = function(e) {
		let n;
		if ("variant" in e) {
			const { variant: r, timestamps: s, activityCounts: i, sleepScores: o, analysisDate: c, epochLengthSeconds: l, hdczaWindow: u, diary: m, onsetMinConsecutiveSleep: d, offsetMinConsecutiveMinutes: p, choiNonwear: f, nonwearDetectors: h, nonwearWeight: _, nonwearMemberFlags: g, eventMarkerTimestamps: w, actiwareRestWindow: y } = e, S = r.config.rescoring === a.WEBSTER ? C(a.WEBSTER) : void 0;
			n = {
				timestamps: s,
				activityCounts: i,
				sleepScores: o,
				...void 0 !== f ? { choiNonwear: f } : {},
				...void 0 !== h ? { nonwearDetectors: h } : {},
				...void 0 !== _ ? { nonwearWeight: _ } : {},
				...void 0 !== g ? { nonwearMemberFlags: g } : {},
				ruleset: r.config.ruleset,
				...void 0 !== S ? { scorerPostprocessing: S } : {},
				analysisDate: c,
				epochLengthSeconds: l,
				hdczaWindow: u ? {
					startTimestamp: u[0],
					endTimestamp: u[1]
				} : null,
				...w ? { eventMarkerTimestamps: w } : {},
				...y ? { actiwareRestWindow: y } : {},
				diaryBedTime: m?.diaryInBedTime ?? null,
				diaryOnsetTime: m?.onsetTime ?? null,
				diaryWakeTime: m?.diaryWakeTime ?? null,
				diaryNaps: q(m?.naps),
				diaryNonwear: q(m?.nonwear),
				...void 0 !== d ? { onsetMinConsecutiveSleep: d } : {},
				...void 0 !== p ? { offsetMinConsecutiveMinutes: p } : {},
				...(t = r.config.periodSource, t === M ? { periodGuider: M } : t === N ? { periodGuider: N } : { sleepPeriodDetection: {
					sourceA: t,
					sourceB: b.NONE,
					fusionPolicy: v.USE_SOURCE_A,
					applyNonwearGate: !1
				} })
			};
		} else n = e;
		var t;
		return L({
			config: P(n),
			days: [I(n), ...(n.contextDays ?? []).filter((e) => e.analysisDate !== (n.analysisDate ?? "")).map(U)]
		});
	}(e), i = await (e.wasmApiOverride ?? n()).placeMarkers(d(s, s.slice(1).filter((n) => ArrayBuffer.isView(n) && ![e, ...e.contextDays ?? []].some((e) => n === e.timestamps || n === e.activityCounts || n === e.sleepScores || n === e.choiNonwear)).map((e) => e.buffer)));
	return i ? K((e.analysisDate ? i.results.find((n) => n.analysis_date === e.analysisDate) : void 0) ?? i.results[0], t, r) : J(Y);
}
async function Q(e, n) {
	const t = /* @__PURE__ */ new Map(), a = [];
	for (const [i, o] of e.entries()) {
		const e = P(o);
		if (0 === o.timestamps.length || "legacy" !== e.ruleset || (o.contextDays?.length ?? 0) > 0 || o.wasmApiOverride) {
			a.push(i);
			continue;
		}
		const n = JSON.stringify(e);
		t.set(n, [...t.get(n) ?? [], i]);
	}
	const r = new Array(e.length), s = [...a, ...[...t.values()].filter((e) => 1 === e.length).flat()];
	return await Promise.all(s.map(async (t) => {
		r[t] = await X(e[t], () => n);
	})), await Promise.all([...t.values()].filter((e) => e.length > 1).map(async (t) => {
		const a = t.map((n) => e[n]), s = function(e) {
			const n = e[0];
			if (!n) throw new Error("buildNightsPlacementRequest needs at least one night.");
			return L({
				config: P(n),
				days: e.map(I)
			});
		}(a), i = await n.placeMarkers(d(s, s.slice(1).map((e) => e.buffer)));
		for (const [e, n] of t.entries()) {
			const t = a[e], s = H(t), o = i?.results.find((e) => e.analysis_date === t.analysisDate);
			r[n] = i ? K(o ?? i.results[e], s, String(s.source_a)) : J(Y);
		}
	})), r;
}
const ee = new Map(u.map((e) => [e.id, e]));
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
]), oe = Object.keys(T), ce = [30, 60], le = /* @__PURE__ */ new Set([
	...oe,
	...Object.values(k).flatMap((e) => [...e.countMetrics]),
	...u.flatMap((e) => [...e.compatibleCountMetrics])
]), ue = Object.values(h).filter((e) => le.has(e)), me = new Set(oe), de = {
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
function he(e) {
	return de[e] ?? fe(e);
}
function _e(e) {
	return u.filter((n) => n.family === e);
}
function ge(e, n, t) {
	const a = /* @__PURE__ */ new Set(), r = [], s = n ? new Set(n.sleepAlgorithms) : null;
	for (const i of u) {
		if ("sleep_wake" !== i.kind) continue;
		const n = i.family;
		if (null === n || ie.has(n)) continue;
		if (a.has(n)) continue;
		a.add(n);
		const o = _e(n);
		if (o.length > 0 && o.every((e) => !ne(e.conformance))) {
			const e = o.every((e) => "needs_model" === e.conformance) ? "needs_model" : "provisional";
			r.push({
				value: n,
				label: he(n),
				disabled: !0,
				reason: se(e)
			});
			continue;
		}
		if (null !== s && o.every((e) => !s.has(e.id))) {
			r.push({
				value: n,
				label: he(n),
				disabled: !0,
				reason: o.some((e) => t?.has(e.id)) ? re : ae
			});
			continue;
		}
		const c = we(n);
		void 0 === e || ye(c) === e ? r.push({
			value: n,
			label: he(n)
		}) : r.push({
			value: n,
			label: he(n),
			disabled: !0,
			reason: ve(c)
		});
	}
	return r;
}
function we(e) {
	const n = _e(e)[0]?.execution;
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
	return _e(e).map((e) => {
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
	return r[`${e}::${n}`] ?? null;
}
function Te(e, n) {
	const t = Se(e, n);
	return t ? ee.get(t) : void 0;
}
function ke(e, n) {
	return Te(e, n)?.defaultCountMetric ?? oe[0] ?? "neishabouri";
}
function Ae(e, n, t) {
	const a = Te(e, n), r = new Set(a?.compatibleCountMetrics ?? []), s = t ? new Set(t.countMetrics) : null, i = ke(e, n);
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
function Me(e) {
	return (T[e] ?? []).map((e) => ({
		value: e,
		label: Ne(e)
	}));
}
function Ne(e) {
	return "vm" === e ? "Vector magnitude" : `Axis ${e.toUpperCase()}`;
}
function Ce(e, n) {
	const a = we(e);
	if ("angle" === a) return t.filter((e) => "raw" === e.lineage).map((e) => ({
		value: String(e.seconds),
		label: `${String(e.seconds)} s`
	}));
	if ("neural" === a || "vendor" === a) {
		const t = Te(e, n)?.nativeEpochSeconds ?? 60;
		return [{
			value: String(t),
			label: `${String(t)} s (native)`
		}];
	}
	return t.filter((e) => "counts" === e.lineage).map((e) => ce.includes(e.seconds) ? {
		value: String(e.seconds),
		label: `${String(e.seconds)} s`
	} : {
		value: String(e.seconds),
		label: `${String(e.seconds)} s`,
		disabled: !0,
		reason: "Provisional — no scorer is validated at 15 s (not a cube epoch)."
	});
}
function xe(e, n) {
	return e.find((e) => !e.disabled)?.value ?? e[0]?.value ?? n;
}
const De = Oe("count_cell");
function Oe(e) {
	const n = i.find((n) => n.grammarId === e), t = n?.segments[0]?.literalValue;
	if (void 0 === n || void 0 === t) throw new Error(`cell id grammar ${e} has no root segment`);
	return `${t}${n.segmentSeparator}`;
}
function Ee(e) {
	const n = e.trim();
	if (n.startsWith(De)) {
		const e = o(n), t = e.scorer;
		if (void 0 !== t && ("count_hasib" === e.family || "angle_hasib" === e.family)) return Re({
			family: t,
			implementation: e.provenance ?? We(t),
			countMetric: e.countSource ?? "neishabouri",
			axis: "anglez" === e.signalAxis ? "y" : e.signalAxis ?? "y",
			epochSeconds: Number(e.epoch)
		});
		const a = n.slice(De.length).split("__")[0] ?? "";
		if (_e(a).length > 0) return console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${n}" — keeping family "${a}", defaulting its substrate dials.`), Re({
			family: a,
			implementation: We(a),
			countMetric: "neishabouri",
			axis: "y",
			epochSeconds: 60
		});
		console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${n}" — falling back to the first selectable family.`);
	}
	const t = ee.get(n);
	return t && null !== t.family ? Re({
		family: t.family,
		implementation: t.implementation ?? "reference",
		countMetric: t.defaultCountMetric ?? "neishabouri",
		axis: "y",
		epochSeconds: t.nativeEpochSeconds
	}) : function(e, n) {
		const t = ge(void 0, n), a = t.some((n) => n.value === e.family && !n.disabled) ? e.family : xe(t, e.family), r = be(a, n), s = r.some((n) => n.value === e.implementation && !n.disabled) ? e.implementation : xe(r, e.implementation);
		if ("counts" !== we(a)) {
			const n = Ce(a, s), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(xe(n, String(e.epochSeconds)));
			return {
				family: a,
				implementation: s,
				countMetric: e.countMetric,
				axis: e.axis,
				epochSeconds: t
			};
		}
		const i = Ae(a, s, n), o = i.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : xe(i, ke(a, s)), c = Me(o), l = c.some((n) => n.value === e.axis && !n.disabled) ? e.axis : xe(c, "y"), u = Ce(a, s);
		return {
			family: a,
			implementation: s,
			countMetric: o,
			axis: l,
			epochSeconds: u.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(xe(u, "60"))
		};
	}({
		family: ge().find((e) => !e.disabled)?.value ?? "sadeh_1994",
		implementation: "",
		countMetric: "neishabouri",
		axis: "y",
		epochSeconds: 60
	});
}
function Re(e) {
	return function(e) {
		if ("counts" !== we(e.family)) {
			const n = Ce(e.family, e.implementation), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(xe(n, String(e.epochSeconds)));
			return {
				...e,
				epochSeconds: t
			};
		}
		const n = Ae(e.family, e.implementation), t = n.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : xe(n, ke(e.family, e.implementation)), a = Me(t), r = a.some((n) => n.value === e.axis && !n.disabled) ? e.axis : xe(a, "y"), s = Ce(e.family, e.implementation), i = s.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(xe(s, "60"));
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
function je(e, n) {
	if (function(e, n) {
		return n?.nonwearAlgorithms.some((n) => n === e) ?? !1;
	}(e, n)) return null;
	const t = He(e), a = u.find((n) => n.id === e), r = e === p.gt3x_capsense ? ["the GT3X CAPSENSE wear-sensor stream"] : [
		..."raw_accel" === a?.requiredSignal ? ["raw acceleration samples"] : [],
		..."counts_axis_y" === a?.requiredSignal ? ["60 s activity counts"] : [],
		...a?.requiresTemperature ? ["a temperature channel"] : []
	];
	return r.length > 0 ? `The selected nonwear detector (${t}) needs ${r.join(" and ")}, which this file does not provide on the active runtime.` : `The selected nonwear detector (${t}) is not implemented for this file on the active runtime.`;
}
function He(e) {
	return {
		[p.choi_2011]: "Choi 2011 (60 min)",
		[p.choi_2012]: "Choi 2012 (90 min)",
		[p.troiano_2008]: "Troiano 2008",
		[p.flat_activity]: "Flat activity",
		[p.gt3x_capsense]: "GT3X CAPSENSE",
		[p.actiware_off_wrist]: "Actiwatch off-wrist",
		[p.detach_nonwear]: "DETACH",
		[p.van_hees_2013]: "van Hees 2013",
		[p.van_hees_2023]: "van Hees 2023",
		[p.ggir_saved]: "GGIR nonwear (as saved by the folder)",
		[p.ggir_part2_invalid]: "GGIR invalid (Part 2)",
		[p.ahmadi_2020]: "Ahmadi 2020",
		[p.skovgaard_2023]: "Skovgaard 2023",
		study_selection: "Study selection (weighted)"
	}[e] ?? fe(e);
}
Oe("consensus_cell"), Object.values(p);
const Fe = u.filter((e) => "nonwear" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds
})), Pe = new Map(Fe.map((e) => [e.id, e]));
function $e(e) {
	return Pe.get(e);
}
function Ge(e) {
	if (null == e) return !1;
	const n = e.length;
	for (let t = 0; t < n; t++) {
		const n = e[t];
		if (void 0 !== n && Number.isFinite(n)) return !0;
	}
	return !1;
}
const ze = {
	source_not_eligible: "DETACH nonwear was not run: this file's source type has no scientifically eligible DETACH path.",
	no_finite_temperature: "DETACH nonwear was not run: this file carries no finite temperature samples (the temperature column is absent or all-NaN).",
	no_acceleration_g: "DETACH nonwear was not run: this file carries no per-epoch acceleration in g. DETACH's acceleration threshold is 0.013 g and activity counts are not comparable to it, so no mask is produced from counts.",
	computation_failed: "DETACH nonwear failed while running for this day. Choi nonwear is intact."
};
function Be(e, n, t) {
	return e?.nonwearAlgorithms.some((e) => e === p.detach_nonwear) ? Ge(n) ? null == t || 0 === t.length ? "no_acceleration_g" : null : "no_finite_temperature" : "source_not_eligible";
}
function Ie(e, n, t) {
	return null === Be(e, n, t);
}
const Ue = Fe.filter((e) => "raw_accel" === e.requiredSignal && !e.needsModel && !e.requiresTemperature).map((e) => e.id), qe = {
	[p.choi_2012]: "nonwearResults",
	[p.choi_2011]: "nonwearResultsChoi2011",
	[p.detach_nonwear]: "detachNonwear",
	[p.van_hees_2023]: "vanHeesNonwear"
}, Le = Object.keys(qe), Ve = Fe.filter((e) => "counts_axis_y" === e.requiredSignal && !e.needsModel && !e.requiresTemperature && !Le.includes(e.id)).map((e) => e.id);
function Ze(e, n, t) {
	if (!ln(e, n, t)) return;
	const a = qe[n];
	return a ? e[a] : e.unifiedNonwearMasks?.[n];
}
async function Je(e, n, t, a, r = m()) {
	if (!e) return null;
	const s = Ye(e, n, t.source);
	if (null !== s) return { unavailable: s };
	const { timestampsSec: i, epochLenSec: o } = a;
	if (Ke(e)) return { mask: await A(t.offPeriods.map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	})), i, o, r) };
	const c = n[e], l = new Array(i.length).fill(0), u = Math.min(c.length, l.length);
	for (let m = 0; m < u; m++) l[m] = 1 === c[m] ? 1 : 0;
	return { mask: l };
}
function Ke(e) {
	return e === p.gt3x_capsense || e === p.actiware_off_wrist;
}
function Ye(e, n, t) {
	return e ? Ke(e) ? t === e ? null : je(e) : n[e] ? null : "counts_axis_y" === $e(e)?.requiredSignal ? function(e) {
		return `nonwear mask for ${He(e)} is missing; re-import the file`;
	}(e) : je(e) : null;
}
async function Xe(e, n, t, a, r = m()) {
	const s = [], i = [], o = [];
	for (const u of new Set(e)) {
		const e = await Je(u, n, t, a, r);
		null !== e && ("unavailable" in e ? o.push({
			detector: u,
			reason: e.unavailable
		}) : (s.push(u), i.push(e.mask)));
	}
	if (0 === s.length) return 0 === o.length ? null : { unavailable: o.map((e) => e.reason).join("; ") };
	const c = z(s), l = await r.fuseNonwearMasks(c.map((e) => Uint8Array.from(i[s.indexOf(e)])));
	return {
		weight: l.weight,
		flagged: l.flagged,
		memberFlags: l.memberFlags,
		available: s,
		memberMasks: i,
		dropped: o
	};
}
function Qe(e) {
	return null !== e && "weight" in e ? e : null;
}
function en(n) {
	return e(n) ? "ggir" : "counts";
}
function nn(e, n = g.getState()) {
	return "ggir" === e ? n.nonwearDetectorsGgir : n.nonwearDetectorsCounts;
}
const tn = {
	counts: l.nonwear_detectors_counts,
	ggir: l.nonwear_detectors_ggir
};
function an(e, n) {
	return e.filter((e) => !tn[n].includes(e.detector)).map((e) => `${He(e.detector)} left out of the nonwear weight: ${e.reason}`);
}
function rn(e, n) {
	const t = 1 === n ? "detector" : "detectors";
	return `${String(e.length)} of ${String(n)} ${t} (${e.map(He).join(", ")})`;
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
	return g.getState().choiAxis;
}
const cn = [p.choi_2011, p.choi_2012];
function ln(e, n, t) {
	if (!cn.includes(n)) return !0;
	const a = e.nonwearChoiAxis;
	return void 0 === a || a === t;
}
function un(e, n) {
	const t = {};
	for (const [a, r] of Object.entries(e.unifiedNonwearMasks ?? {})) r && (t[a] = r);
	for (const [a, r] of Object.entries(qe)) {
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
function dn(e, n, t = m()) {
	return A(mn(e, n.baseTsSec), n.epochTimestampsSec, n.epochLenSec, t);
}
async function pn(e, n, t) {
	const a = {};
	if (0 === e.size || 0 === n.epochTimestampsSec.length) return a;
	const r = {};
	for (const [s, i] of e) {
		if (!i.available) continue;
		const e = await dn(i, n, t), o = new Uint8Array(e).buffer, c = qe[s];
		c ? a[c] = o : r[s] = o;
	}
	return Object.keys(r).length > 0 && (a.unifiedNonwearMasks = r), hn(a);
}
async function fn(e, n, t = m()) {
	if (0 === e.length || 0 === n.epochTimestampsSec.length) return {};
	let a = Float64Array.from(e);
	const r = Float64Array.from(n.epochTimestampsSec), s = "rounded_mean";
	let i;
	if (n.dstRuns?.length) {
		const o = await t.ggir5sWallClockMs(1e3 * n.baseTsSec, e.length, Array.from(n.dstRuns)), c = Array.from(o.keys()).filter((e) => Number.isFinite(o[e])), l = Float64Array.from(c, (e) => o[e] / 1e3);
		a = Float64Array.from(c, (n) => e[n]), i = await t.foldOntoGrid(l, a, r, n.epochLenSec, s);
	} else i = await t.foldUniformOntoGrid(n.baseTsSec, 5, a, r, n.epochLenSec, s);
	const o = await _(n.ggirConfigCsv, t), c = Uint8Array.from(i, (e) => 1 === e ? 1 : 0).buffer, l = qe[o];
	return hn(l ? { [l]: c } : { unifiedNonwearMasks: { [o]: c } });
}
function hn(...e) {
	const n = {}, t = {};
	for (const a of e) {
		for (const e of Object.values(qe)) {
			const t = a[e];
			void 0 === t || null === t && void 0 !== n[e] || (n[e] = t);
		}
		a.unifiedNonwearMasks && Object.assign(t, a.unifiedNonwearMasks);
	}
	return Object.keys(t).length > 0 && (n.unifiedNonwearMasks = t), t[p.van_hees_2013] && void 0 === n.vanHeesNonwear && (n.vanHeesNonwear = null), n;
}
const _n = {
	path: "ggir",
	selected: [p.ggir_part2_invalid],
	available: [p.ggir_part2_invalid],
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
p.van_hees_2023, p.van_hees_2023;
export { Ee as A, j as B, dn as C, nn as D, on as E, $ as F, X as G, J as H, R as I, A as J, C as K, W as L, we as M, He as N, mn as O, Se as P, I as R, sn as S, Ze as T, H as U, B as V, Q as W, Ge as _, _n as a, $e as b, un as c, rn as d, Be as f, fn as g, Qe as h, ze as i, ye as j, gn as k, pn as l, Xe as m, Ve as n, Fe as o, an as p, E as q, qe as r, Ue as s, cn as t, Ie as u, Ke as v, Ye as w, en as x, hn as y, z };
