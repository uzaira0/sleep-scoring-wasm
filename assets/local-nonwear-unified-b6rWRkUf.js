import { Dn as e, Lt as n, Pt as t, Tn as a, Z as s, bt as r, it as i, ot as o, st as c, wn as l, zt as u } from "./schema-CuSEBD8u.js";
import { r as m, s as d } from "./workers-BSP07cYu.js";
import { A as p, D as f, y as h } from "./workspace-db-DC1JGCSh.js";
import { en as g, r as _ } from "./store-D44nsaQj.js";
import { N as w, O as y, P as v, S as b, X as S, j as T, k, nt as A, rt as M } from "./per-source-defaults-BCxPLiaZ.js";
async function N(e, n, t, a) {
	if (0 === e.length || 0 === n.length) return new Array(n.length).fill(0);
	const s = await a.rasterizePeriods(Float64Array.from(e, (e) => e.startTsSec), Float64Array.from(e, (e) => e.endTsSec), Float64Array.from(n), t);
	return Array.from(s.mask);
}
const C = "diary", D = "none";
function x(e) {
	return e === c.WEBSTER ? { preset: e } : void 0;
}
const O = new Set(Object.values(s));
function E(e) {
	if (!e) return [];
	const n = [];
	for (const [t, a] of e) null != t && "" !== t.trim() && n.push({
		onset_time: t,
		offset_time: a ?? null
	});
	return n;
}
function R(e) {
	if (!e) return [];
	const n = [];
	for (const [t, a] of e) null != t && null != a && "" !== t.trim() && "" !== a.trim() && n.push({
		start_time: t,
		end_time: a
	});
	return n;
}
function W(e, n) {
	const a = (e) => ({
		source_a: e,
		source_b: "none",
		fusion_policy: "use_source_a",
		apply_nonwear_gate: !1
	});
	switch (e) {
		case i.DIARY: return;
		case i.HDCZA: return a("hdcza");
		case i.L5: return a("l5");
		case i.LONGEST_BOUT: return a("selected_scorer_longest_bout");
		case i.EVENT_MARKER: return a("event_marker");
		case i.ACTIWARE_REST_INTERVAL: return a("actiware_rest_interval");
		case i.NONE: return a("none");
		case i.SMART:
			if (n.hasDiary) return;
			return a("lstm_sleep_wake" === (s = n.algorithm) ? "selected_scorer_longest_bout" : t(s) ? "hdcza" : "l5");
		default: return;
	}
	var s;
}
function j(e, n) {
	const t = 86400, a = (e) => Math.floor((e - 43200) / t), s = a(Date.parse(`${n}T12:00:00Z`) / 1e3), r = [], i = (e ?? []).filter((e) => "rest" === e.kind);
	i.forEach((e, n) => {
		for (let s = a(e.startTimestamp); s <= a(e.endTimestamp); s++) {
			const a = s * t + 43200, i = Math.min(e.endTimestamp, a + t) - Math.max(e.startTimestamp, a);
			i > 0 && r.push({
				rest: n,
				night: s,
				overlap: i,
				start: e.startTimestamp
			});
		}
	}), r.sort((e, n) => n.overlap - e.overlap || e.start - n.start || e.night - n.night);
	const o = /* @__PURE__ */ new Set(), c = [];
	for (const m of r) {
		const { rest: e, night: n } = m;
		o.has(e) || (o.add(e), n === s && c.push(m));
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
function H(e, n) {
	const t = j(e, n);
	if (!t) return null;
	const a = (e ?? []).filter((e) => "rest" === e.kind && null !== j([e], n)), s = (e ?? []).filter((e) => "sleep" === e.kind && e.endTimestamp > e.startTimestamp && a.some((n) => e.startTimestamp >= n.startTimestamp && e.endTimestamp <= n.endTimestamp)).sort((e, n) => n.endTimestamp - n.startTimestamp - (e.endTimestamp - e.startTimestamp) || e.startTimestamp - n.startTimestamp), r = s[0];
	return {
		rest: t,
		sleep: r ? {
			startTimestamp: r.startTimestamp,
			endTimestamp: r.endTimestamp
		} : null,
		...s.length > 1 ? { additionalSleeps: s.slice(1).sort((e, n) => e.startTimestamp - n.startTimestamp).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) } : {}
	};
}
function P(e) {
	const n = Number.parseInt((e ?? "").split(":")[0] ?? "", 10);
	return Number.isInteger(n) && n >= 0 && n <= 23 ? n : null;
}
function F(e) {
	const n = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime), a = t(e.algorithm) ? void 0 : $(e), s = t(e.algorithm) && !n ? k.HDCZA : k.DIARY;
	return {
		...v(e.sleepPeriodDetection),
		...a ?? {
			source_a: s,
			source_b: k.NONE,
			fusion_policy: y.USE_SOURCE_A
		}
	};
}
function $(e) {
	if (e.sleepPeriodDetection && !T(w(e.sleepPeriodDetection))) {
		const n = v(e.sleepPeriodDetection);
		return {
			source_a: n.source_a,
			source_b: n.source_b,
			fusion_policy: n.fusion_policy,
			apply_nonwear_gate: n.apply_nonwear_gate
		};
	}
	const n = e.periodGuider ?? i.SMART, t = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime);
	return W(n, {
		algorithm: e.algorithm ?? null,
		hasDiary: t
	});
}
function G(e) {
	const n = { ruleset: t(e.algorithm) ? o.GGIR_PART4 : e.ruleset ?? "legacy" };
	e.algorithm && O.has(e.algorithm) && (n.classifier = e.algorithm), null != e.epochLengthSeconds && (n.epoch_length_seconds = e.epochLengthSeconds), null != e.onsetMinConsecutiveSleep && (n.onset_min_consecutive_sleep = e.onsetMinConsecutiveSleep), null != e.offsetMinConsecutiveMinutes && (n.offset_min_consecutive_minutes = e.offsetMinConsecutiveMinutes), e.scorerPostprocessing && (n.scorer_postprocessing = e.scorerPostprocessing);
	const { nonwear_detector: a, nonwear_detectors: s } = L(e.nonwearDetectors, null, { alwaysNameSingle: !1 });
	if (a && (n.nonwear_detector = a), s && (n.nonwear_detectors = s), e.sleepPeriodDetection) {
		const t = w(e.sleepPeriodDetection);
		n.merge_gap_minutes = t.mergeGapMinutes, n.padding_minutes = t.paddingMinutes, n.min_overlap_jaccard = t.minOverlapJaccard;
	}
	const r = $(e);
	return r && (n.detection = r), n;
}
const z = "study_selection", B = Object.values(p);
function I(e) {
	const n = (e) => {
		const n = B.indexOf(e);
		return -1 === n ? B.length : n;
	};
	return [...e].sort((e, t) => n(e) - n(t));
}
function L(e, n, { alwaysNameSingle: t, memberFlags: a }) {
	if (!e || 0 === e.length) return {};
	if (1 === e.length) {
		const [n] = e;
		return t || n !== p.choi_2011 ? { nonwear_detector: n } : {};
	}
	return {
		nonwear_detectors: I(e),
		...n ? { nonwear_weight: [...n] } : {},
		...n && a ? { nonwear_member_flags: [...a] } : {}
	};
}
function U(e) {
	const n = {
		analysis_date: e.analysisDate ?? "",
		epoch_length_seconds: e.epochLengthSeconds ?? 60,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (n.choi_nonwear = e.choiNonwear);
	const { nonwear_weight: t, nonwear_member_flags: a } = L(e.nonwearDetectors, e.nonwearWeight, {
		alwaysNameSingle: !1,
		memberFlags: e.nonwearMemberFlags
	});
	t && (n.nonwear_weight = t), a && (n.nonwear_member_flags = a), e.ggirInvalid && (n.ggir_invalid = Array.from(e.ggirInvalid)), e.ggirHasptAlgo && (n.ggir_haspt_algo = e.ggirHasptAlgo), e.ggirConfigCsv && (n.ggir_config_csv = e.ggirConfigCsv), e.ggirDiaryHasBedlog && (n.ggir_diary_has_bedlog = !0), e.ggirDiaryHasSleeplog && (n.ggir_diary_has_sleeplog = !0), e.sensorNonwear && e.sensorNonwear.length > 0 && (n.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (n.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (n.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (n.diary_in_bed_time = e.diaryBedTime), null != e.diaryOutBedTime && (n.diary_out_bed_time = e.diaryOutBedTime);
	const s = E(e.diaryNaps);
	s.length > 0 && (n.diary_naps = s);
	const r = R(e.diaryNonwear);
	return r.length > 0 && (n.diary_nonwear = r), e.hdczaWindow && (n.hdcza_window = [e.hdczaWindow.startTimestamp, e.hdczaWindow.endTimestamp]), e.eventMarkerTimestamps && e.eventMarkerTimestamps.length > 0 && (n.event_marker_timestamps = Array.from(e.eventMarkerTimestamps)), e.actiwareRestWindow && (n.actiware_rest_window = [e.actiwareRestWindow.startTimestamp, e.actiwareRestWindow.endTimestamp]), null != e.nightStartHour && (n.night_start_hour = e.nightStartHour), null != e.nightEndHour && (n.night_end_hour = e.nightEndHour), n;
}
function q(e) {
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
	const t = E(e.diaryNaps);
	t.length > 0 && (n.diary_naps = t);
	const a = R(e.diaryNonwear);
	return a.length > 0 && (n.diary_nonwear = a), n;
}
function V(e) {
	return e && 0 !== e.length ? e.map(([e, n]) => [e, n]) : null;
}
function Z(e) {
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
		const a = e.days.map((e) => e[n] ?? []), s = new Uint32Array(a.length + 1);
		for (const [e, o] of a.entries()) s[e + 1] = s[e] + o.length;
		const r = 1 === a.length ? a[0] : void 0, i = r instanceof t ? r : new t(s[a.length]);
		if (i !== r) for (const [e, o] of a.entries()) i.set(o, s[e]);
		return [i, s];
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
function J(e) {
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
function K(e, n) {
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
function Y(e, n, t) {
	if (!e) return X("The placement engine returned no result for this night.");
	const a = e.guider ?? t, s = null == e.guider ? n : {
		...n,
		source_a: e.guider
	}, r = (e.decisions ?? []).map(J), i = (e, n) => r.find((t) => t.marker_type === e && t.marker_index === n);
	return {
		kind: "placed",
		sleep_markers: (e.sleep_markers ?? []).map((e) => K(e, i(e.marker_type, e.marker_index))),
		nap_markers: (e.nap_markers ?? []).map((e) => K(e, i(e.marker_type, e.marker_index))),
		notes: e.notes ?? [],
		decisions: r,
		sleep_period_detection_config: s,
		effective_detection_source_a: a,
		invalid_night: e.invalid_night ?? null,
		diary_available: e.diary_available ?? null
	};
}
const Q = "Marker placement is unavailable in this build — reload while online to update the local engine.";
async function ee(e, n) {
	const t = F(e), a = String(t.source_a);
	if (0 === e.timestamps.length) return X("No activity data");
	const s = function(e) {
		let n;
		if ("variant" in e) {
			const { variant: a, timestamps: s, activityCounts: r, sleepScores: i, analysisDate: o, epochLengthSeconds: l, hdczaWindow: u, diary: m, onsetMinConsecutiveSleep: d, offsetMinConsecutiveMinutes: p, choiNonwear: f, nonwearDetectors: h, nonwearWeight: g, nonwearMemberFlags: _, eventMarkerTimestamps: w, actiwareRestWindow: v } = e, b = a.config.rescoring === c.WEBSTER ? x(c.WEBSTER) : void 0;
			n = {
				timestamps: s,
				activityCounts: r,
				sleepScores: i,
				...void 0 !== f ? { choiNonwear: f } : {},
				...void 0 !== h ? { nonwearDetectors: h } : {},
				...void 0 !== g ? { nonwearWeight: g } : {},
				...void 0 !== _ ? { nonwearMemberFlags: _ } : {},
				ruleset: a.config.ruleset,
				...void 0 !== b ? { scorerPostprocessing: b } : {},
				analysisDate: o,
				epochLengthSeconds: l,
				hdczaWindow: u ? {
					startTimestamp: u[0],
					endTimestamp: u[1]
				} : null,
				...w ? { eventMarkerTimestamps: w } : {},
				...v ? { actiwareRestWindow: v } : {},
				diaryBedTime: m?.diaryInBedTime ?? null,
				diaryOnsetTime: m?.onsetTime ?? null,
				diaryWakeTime: m?.diaryWakeTime ?? null,
				diaryNaps: V(m?.naps),
				diaryNonwear: V(m?.nonwear),
				...void 0 !== d ? { onsetMinConsecutiveSleep: d } : {},
				...void 0 !== p ? { offsetMinConsecutiveMinutes: p } : {},
				...(t = a.config.periodSource, t === C ? { periodGuider: C } : t === D ? { periodGuider: D } : { sleepPeriodDetection: {
					sourceA: t,
					sourceB: k.NONE,
					fusionPolicy: y.USE_SOURCE_A,
					applyNonwearGate: !1
				} })
			};
		} else n = e;
		var t;
		return Z({
			config: G(n),
			days: [U(n), ...(n.contextDays ?? []).filter((e) => e.analysisDate !== (n.analysisDate ?? "")).map(q)]
		});
	}(e), r = await (e.wasmApiOverride ?? n()).placeMarkers(d(s, s.slice(1).filter((n) => ArrayBuffer.isView(n) && ![e, ...e.contextDays ?? []].some((e) => n === e.timestamps || n === e.activityCounts || n === e.sleepScores || n === e.choiNonwear)).map((e) => e.buffer)));
	return r ? Y((e.analysisDate ? r.results.find((n) => n.analysis_date === e.analysisDate) : void 0) ?? r.results[0], t, a) : X(Q);
}
async function ne(e, n) {
	const t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), s = [];
	for (const [l, u] of e.entries()) {
		const e = G(u);
		if (0 === u.timestamps.length || u.wasmApiOverride) {
			s.push(l);
			continue;
		}
		const n = JSON.stringify(e), r = "legacy" === e.ruleset && 0 === (u.contextDays?.length ?? 0) ? t : a;
		r.set(n, [...r.get(n) ?? [], l]);
	}
	const r = new Array(e.length), i = [...a.values()].flatMap((n) => {
		const t = n.map((n) => e[n]), a = function(e) {
			const n = /* @__PURE__ */ new Map();
			for (const a of e) for (const e of a.contextDays ?? []) n.has(e.analysisDate) || n.set(e.analysisDate, e);
			const t = [...n.values()].sort((e, n) => e.analysisDate.localeCompare(n.analysisDate));
			return e.every((e) => {
				const n = e.contextDays ?? [], a = t.filter((n) => n.analysisDate !== (e.analysisDate ?? ""));
				return n.length === a.length && n.every((e, n) => e === a[n]);
			}) ? t : null;
		}(t);
		return null === a ? (s.push(...n), []) : [{
			group: n,
			members: t,
			context: a
		}];
	}), o = [...s, ...[...t.values()].filter((e) => 1 === e.length).flat()];
	await Promise.all(o.map(async (t) => {
		r[t] = await ee(e[t], () => n);
	}));
	const c = (e, n, t) => {
		for (const [a, s] of e.entries()) {
			const e = n[a], i = F(e), o = t?.results.find((n) => n.analysis_date === e.analysisDate);
			r[s] = t ? Y(o ?? t.results[a], i, String(i.source_a)) : X(Q);
		}
	};
	return await Promise.all([...[...t.values()].filter((e) => e.length > 1).map(async (t) => {
		const a = t.map((n) => e[n]), s = function(e) {
			const n = e[0];
			if (!n) throw new Error("buildNightsPlacementRequest needs at least one night.");
			return Z({
				config: G(n),
				days: e.map(U)
			});
		}(a);
		c(t, a, await n.placeMarkers(d(s, s.slice(1).map((e) => e.buffer))));
	}), ...i.map(async ({ group: e, members: t, context: a }) => {
		const s = Z({
			config: G(t[0]),
			days: [...t.map(U), ...a.map(q)]
		}), r = new Set([...t, ...a].flatMap((e) => [
			e.timestamps,
			e.activityCounts,
			e.sleepScores,
			e.choiNonwear
		])), i = s.slice(1).filter((e) => ArrayBuffer.isView(e) && !r.has(e)).map((e) => e.buffer);
		c(e, t, await n.placeNights(d([...s, t.length], i)));
	})]), r;
}
const te = new Map(e.map((e) => [e.id, e]));
function ae(e) {
	return "conformant" === e;
}
const se = {
	provisional: "Provisional — constants are not yet verified against the reference implementation.",
	needs_model: "Needs a trained model artifact — cannot produce a result."
}, re = "Scientifically eligible, but this implementation is not available on the active runtime.", ie = "Unavailable for this file: it does not carry the input this method needs.";
function oe(e) {
	return se[e] ?? `Not selectable — conformance state "${e}" is not validated.`;
}
const ce = /* @__PURE__ */ new Set([
	"consensus_majority_vote",
	"manual",
	"natural_language",
	"van_hees_hasib_2015"
]), le = Object.keys(S), ue = [30, 60], me = /* @__PURE__ */ new Set([
	...le,
	...Object.values(b).flatMap((e) => [...e.countMetrics]),
	...e.flatMap((e) => [...e.compatibleCountMetrics])
]), de = Object.values(h).filter((e) => me.has(e)), pe = new Set(le), fe = {
	cole_kripke_1992: "Cole-Kripke (1992)",
	ucsd_scripps_2010: "UCSD / Scripps (2010)",
	van_hees_2015: "van Hees (2015)",
	van_hees_hasib_2015: "van Hees HASIB (2015)",
	lstm_sleep_wake: "LSTM Sleep/Wake",
	actiware_sleep_wake: "Actiware Sleep/Wake",
	syed_cnn: "Syed CNN"
}, he = {
	original: "Original",
	actilife: "ActiLife",
	ggir: "GGIR",
	hasib: "HASIB",
	reference: "Reference",
	actiware: "Actiware"
};
function ge(e) {
	return e.split("_").map((e) => 0 === e.length ? e : e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
}
function _e(e) {
	return fe[e] ?? ge(e);
}
function we(n) {
	return e.filter((e) => e.family === n);
}
function ye(n, t, a) {
	const s = /* @__PURE__ */ new Set(), r = [], i = t ? new Set(t.sleepAlgorithms) : null;
	for (const o of e) {
		if ("sleep_wake" !== o.kind) continue;
		const e = o.family;
		if (null === e || ce.has(e)) continue;
		if (s.has(e)) continue;
		s.add(e);
		const t = we(e);
		if (t.length > 0 && t.every((e) => !ae(e.conformance))) {
			const n = t.every((e) => "needs_model" === e.conformance) ? "needs_model" : "provisional";
			r.push({
				value: e,
				label: _e(e),
				disabled: !0,
				reason: oe(n)
			});
			continue;
		}
		if (null !== i && t.every((e) => !i.has(e.id))) {
			r.push({
				value: e,
				label: _e(e),
				disabled: !0,
				reason: t.some((e) => a?.has(e.id)) ? ie : re
			});
			continue;
		}
		const c = ve(e);
		void 0 === n || be(c) === n ? r.push({
			value: e,
			label: _e(e)
		}) : r.push({
			value: e,
			label: _e(e),
			disabled: !0,
			reason: Se(c)
		});
	}
	return r;
}
function ve(e) {
	const n = we(e)[0]?.execution;
	return "angle_spt" === n ? "angle" : "neural_model" === n ? "neural" : "vendor_analysis" === n ? "vendor" : "counts";
}
function be(e) {
	return "angle" === e ? f.ggir_5s : f.number_60s_epochs;
}
function Se(e) {
	return "angle" === e ? "Requires the GGIR 5 s raw pipeline — switch the extraction path to score this." : "Requires the 60 s counts pipeline — switch the extraction path to score this.";
}
function Te(e, n, t) {
	const a = n ? new Set(n.sleepAlgorithms) : null;
	return we(e).map((e) => {
		const n = e.implementation ?? "reference", s = (r = e.implementation ?? "reference", he[r] ?? ge(r));
		var r;
		return ae(e.conformance) ? null === a || a.has(e.id) ? {
			value: n,
			label: s
		} : {
			value: n,
			label: s,
			disabled: !0,
			reason: t?.has(e.id) ? ie : re
		} : {
			value: n,
			label: s,
			disabled: !0,
			reason: oe(e.conformance)
		};
	});
}
function ke(e, n) {
	return l[`${e}::${n}`] ?? null;
}
function Ae(e, n) {
	const t = ke(e, n);
	return t ? te.get(t) : void 0;
}
function Me(e, n) {
	return Ae(e, n)?.defaultCountMetric ?? le[0] ?? "neishabouri";
}
function Ne(e, n, t) {
	const a = Ae(e, n), s = new Set(a?.compatibleCountMetrics ?? []), r = t ? new Set(t.countMetrics) : null, i = Me(e, n);
	let o;
	o = s.size > 0 ? r ? new Set([...s].filter((e) => r.has(e))) : new Set(s) : r ? new Set(r) : /* @__PURE__ */ new Set();
	const c = new Set([...o].filter((e) => pe.has(e))), l = new Set([...o].filter((e) => !pe.has(e))), u = null === r || 0 === r.size, m = 0 === c.size && u;
	return de.map((e) => {
		const n = function(e) {
			return "neishabouri" === e ? "Neishabouri (amplitude counts)" : "zero_crossing" === e ? "Zero-crossing (GGIR zc)" : "pim" === e ? "PIM (proportional integrating mode)" : "zcm" === e ? "ZCM (zero-crossing mode)" : "tat" === e ? "TAT (time above threshold)" : ge(e);
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
			reason: l.has(e) ? "Recorded by this device, but not yet scoreable as a variant — its count-substrate cube cell is pending." : s.size > 0 && !s.has(e) ? "Not a validated substrate for this scorer." : "This device does not record these counts."
		};
	});
}
function Ce(e) {
	return (S[e] ?? []).map((e) => ({
		value: e,
		label: De(e)
	}));
}
function De(e) {
	return "vm" === e ? "Vector magnitude" : `Axis ${e.toUpperCase()}`;
}
function xe(e, n) {
	const t = ve(e);
	if ("angle" === t) return a.filter((e) => "raw" === e.lineage).map((e) => ({
		value: String(e.seconds),
		label: `${String(e.seconds)} s`
	}));
	if ("neural" === t || "vendor" === t) {
		const t = Ae(e, n)?.nativeEpochSeconds ?? 60;
		return [{
			value: String(t),
			label: `${String(t)} s (native)`
		}];
	}
	const s = M(e);
	return a.filter((e) => "counts" === e.lineage).map((n) => {
		const t = {
			value: String(n.seconds),
			label: `${String(n.seconds)} s`
		};
		return ue.includes(n.seconds) ? A(s, n.seconds) ? t : {
			...t,
			disabled: !0,
			reason: `${_e(e)} is valid only at ${s.join(", ")} s.`
		} : {
			...t,
			disabled: !0,
			reason: "Provisional — no scorer is validated at 15 s (not a cube epoch)."
		};
	});
}
function Oe(e, n) {
	return e.find((e) => !e.disabled)?.value ?? e[0]?.value ?? n;
}
const Ee = Re("count_cell");
function Re(e) {
	const n = u.find((n) => n.grammarId === e), t = n?.segments[0]?.literalValue;
	if (void 0 === n || void 0 === t) throw new Error(`cell id grammar ${e} has no root segment`);
	return `${t}${n.segmentSeparator}`;
}
function We(e) {
	const t = e.trim();
	if (t.startsWith(Ee)) {
		const e = n(t), a = e.scorer;
		if (void 0 !== a && ("count_hasib" === e.family || "angle_hasib" === e.family)) return je({
			family: a,
			implementation: e.provenance ?? He(a),
			countMetric: e.countSource ?? "neishabouri",
			axis: "anglez" === e.signalAxis ? "y" : e.signalAxis ?? "y",
			epochSeconds: Number(e.epoch)
		});
		const s = t.slice(Ee.length).split("__")[0] ?? "";
		if (we(s).length > 0) return console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${t}" — keeping family "${s}", defaulting its substrate dials.`), je({
			family: s,
			implementation: He(s),
			countMetric: "neishabouri",
			axis: "y",
			epochSeconds: 60
		});
		console.warn(`[variant-dials] decomposeAlgorithm: unparseable cube cell id "${t}" — falling back to the first selectable family.`);
	}
	const a = te.get(t);
	return a && null !== a.family ? je({
		family: a.family,
		implementation: a.implementation ?? "reference",
		countMetric: a.defaultCountMetric ?? "neishabouri",
		axis: "y",
		epochSeconds: a.nativeEpochSeconds
	}) : function(e, n) {
		const t = ye(void 0, n), a = t.some((n) => n.value === e.family && !n.disabled) ? e.family : Oe(t, e.family), s = Te(a, n), r = s.some((n) => n.value === e.implementation && !n.disabled) ? e.implementation : Oe(s, e.implementation);
		if ("counts" !== ve(a)) {
			const n = xe(a, r), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Oe(n, String(e.epochSeconds)));
			return {
				family: a,
				implementation: r,
				countMetric: e.countMetric,
				axis: e.axis,
				epochSeconds: t
			};
		}
		const i = Ne(a, r, n), o = i.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : Oe(i, Me(a, r)), c = Ce(o), l = c.some((n) => n.value === e.axis && !n.disabled) ? e.axis : Oe(c, "y"), u = xe(a, r);
		return {
			family: a,
			implementation: r,
			countMetric: o,
			axis: l,
			epochSeconds: u.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Oe(u, "60"))
		};
	}({
		family: ye().find((e) => !e.disabled)?.value ?? "sadeh_1994",
		implementation: "",
		countMetric: "neishabouri",
		axis: "y",
		epochSeconds: 60
	});
}
function je(e) {
	return function(e) {
		if ("counts" !== ve(e.family)) {
			const n = xe(e.family, e.implementation), t = n.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Oe(n, String(e.epochSeconds)));
			return {
				...e,
				epochSeconds: t
			};
		}
		const n = Ne(e.family, e.implementation), t = n.some((n) => n.value === e.countMetric && !n.disabled) ? e.countMetric : Oe(n, Me(e.family, e.implementation)), a = Ce(t), s = a.some((n) => n.value === e.axis && !n.disabled) ? e.axis : Oe(a, "y"), r = xe(e.family, e.implementation), i = r.some((n) => String(e.epochSeconds) === n.value && !n.disabled) ? e.epochSeconds : Number(Oe(r, "60"));
		return {
			...e,
			countMetric: t,
			axis: s,
			epochSeconds: i
		};
	}(e);
}
function He(e) {
	return ke(e, "ggir") ? "ggir" : Te(e).find((e) => !e.disabled)?.value ?? "reference";
}
function Pe(n, t) {
	if (function(e, n) {
		return n?.nonwearAlgorithms.some((n) => n === e) ?? !1;
	}(n, t)) return null;
	const a = Fe(n), s = e.find((e) => e.id === n), r = n === p.gt3x_capsense ? ["the GT3X CAPSENSE wear-sensor stream"] : [
		..."raw_accel" === s?.requiredSignal ? ["raw acceleration samples"] : [],
		..."counts_axis_y" === s?.requiredSignal ? ["60 s activity counts"] : [],
		...s?.requiresTemperature ? ["a temperature channel"] : []
	];
	return r.length > 0 ? `The selected nonwear detector (${a}) needs ${r.join(" and ")}, which this file does not provide on the active runtime.` : `The selected nonwear detector (${a}) is not implemented for this file on the active runtime.`;
}
function Fe(e) {
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
	}[e] ?? ge(e);
}
Re("consensus_cell"), Object.values(p);
const $e = e.filter((e) => "nonwear" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds
})), Ge = new Map($e.map((e) => [e.id, e]));
function ze(e) {
	return Ge.get(e);
}
function Be(e) {
	if (null == e) return !1;
	const n = e.length;
	for (let t = 0; t < n; t++) {
		const n = e[t];
		if (void 0 !== n && Number.isFinite(n)) return !0;
	}
	return !1;
}
const Ie = {
	source_not_eligible: "DETACH nonwear was not run: this file's source type has no scientifically eligible DETACH path.",
	no_finite_temperature: "DETACH nonwear was not run: this file carries no finite temperature samples (the temperature column is absent or all-NaN).",
	no_acceleration_g: "DETACH nonwear was not run: this file carries no per-epoch acceleration in g. DETACH's acceleration threshold is 0.013 g and activity counts are not comparable to it, so no mask is produced from counts.",
	computation_failed: "DETACH nonwear failed while running for this day. Choi nonwear is intact."
};
function Le(e, n, t) {
	return e?.nonwearAlgorithms.some((e) => e === p.detach_nonwear) ? Be(n) ? null == t || 0 === t.length ? "no_acceleration_g" : null : "no_finite_temperature" : "source_not_eligible";
}
function Ue(e, n, t) {
	return null === Le(e, n, t);
}
const qe = $e.filter((e) => "raw_accel" === e.requiredSignal && !e.needsModel && !e.requiresTemperature).map((e) => e.id), Ve = {
	[p.choi_2012]: "nonwearResults",
	[p.choi_2011]: "nonwearResultsChoi2011",
	[p.detach_nonwear]: "detachNonwear",
	[p.van_hees_2023]: "vanHeesNonwear"
}, Ze = Object.keys(Ve), Je = $e.filter((e) => "counts_axis_y" === e.requiredSignal && !e.needsModel && !e.requiresTemperature && !Ze.includes(e.id)).map((e) => e.id);
function Ke(e, n, t) {
	if (!mn(e, n, t)) return;
	const a = Ve[n];
	return a ? e[a] : e.unifiedNonwearMasks?.[n];
}
async function Xe(e, n, t, a, s = m()) {
	if (!e) return null;
	const r = Qe(e, n, t.source);
	if (null !== r) return { unavailable: r };
	const { timestampsSec: i, epochLenSec: o } = a;
	if (Ye(e)) return { mask: await N(t.offPeriods.map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	})), i, o, s) };
	const c = n[e], l = new Array(i.length).fill(0), u = Math.min(c.length, l.length);
	for (let m = 0; m < u; m++) l[m] = 1 === c[m] ? 1 : 0;
	return { mask: l };
}
function Ye(e) {
	return e === p.gt3x_capsense || e === p.actiware_off_wrist;
}
function Qe(e, n, t) {
	return e ? Ye(e) ? t === e ? null : Pe(e) : n[e] ? null : "counts_axis_y" === ze(e)?.requiredSignal ? function(e) {
		return `nonwear mask for ${Fe(e)} is missing; re-import the file`;
	}(e) : Pe(e) : null;
}
async function en(e, n, t, a, s = m()) {
	const r = [], i = [], o = [];
	for (const u of new Set(e)) {
		const e = await Xe(u, n, t, a, s);
		null !== e && ("unavailable" in e ? o.push({
			detector: u,
			reason: e.unavailable
		}) : (r.push(u), i.push(e.mask)));
	}
	if (0 === r.length) return 0 === o.length ? null : { unavailable: o.map((e) => e.reason).join("; ") };
	const c = I(r), l = await s.fuseNonwearMasks(c.map((e) => Uint8Array.from(i[r.indexOf(e)])));
	return {
		weight: l.weight,
		flagged: l.flagged,
		memberFlags: l.memberFlags,
		available: r,
		memberMasks: i,
		dropped: o
	};
}
function nn(e) {
	return null !== e && "weight" in e ? e : null;
}
function tn(e) {
	return t(e) ? "ggir" : "counts";
}
function an(e, n = _.getState()) {
	return "ggir" === e ? n.nonwearDetectorsGgir : n.nonwearDetectorsCounts;
}
const sn = {
	counts: r.nonwear_detectors_counts,
	ggir: r.nonwear_detectors_ggir
};
function rn(e, n) {
	return e.filter((e) => !sn[n].includes(e.detector)).map((e) => `${Fe(e.detector)} left out of the nonwear weight: ${e.reason}`);
}
function on(e, n) {
	const t = 1 === n ? "detector" : "detectors";
	return `${String(e.length)} of ${String(n)} ${t} (${e.map(Fe).join(", ")})`;
}
function cn(e, n) {
	const { contributors: t, ...a } = e;
	return void 0 === t ? a : {
		...a,
		contributing_detectors: t,
		agreement: on(t, n)
	};
}
function ln() {
	return _.getState().choiAxis;
}
const un = [p.choi_2011, p.choi_2012];
function mn(e, n, t) {
	if (!un.includes(n)) return !0;
	const a = e.nonwearChoiAxis;
	return void 0 === a || a === t;
}
function dn(e, n) {
	const t = {};
	for (const [a, s] of Object.entries(e.unifiedNonwearMasks ?? {})) s && (t[a] = s);
	for (const [a, s] of Object.entries(Ve)) {
		if (!mn(e, a, n)) continue;
		const r = e[s];
		r && (t[a] = r);
	}
	return t;
}
function pn(e, n) {
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
function fn(e, n, t = m()) {
	return e.available && e.nonwear && e.elementSeconds === n.epochLenSec && e.nonwear.length === n.epochTimestampsSec.length ? Promise.resolve(Array.from(e.nonwear)) : N(pn(e, n.baseTsSec), n.epochTimestampsSec, n.epochLenSec, t);
}
async function hn(e, n, t) {
	const a = {};
	if (0 === e.size || 0 === n.epochTimestampsSec.length) return a;
	const s = {};
	for (const [r, i] of e) {
		if (!i.available) continue;
		const e = await fn(i, n, t), o = new Uint8Array(e).buffer, c = Ve[r];
		c ? a[c] = o : s[r] = o;
	}
	return Object.keys(s).length > 0 && (a.unifiedNonwearMasks = s), _n(a);
}
async function gn(e, n, t = m()) {
	if (0 === e.length || 0 === n.epochTimestampsSec.length) return {};
	let a = Float64Array.from(e);
	const s = Float64Array.from(n.epochTimestampsSec), r = "rounded_mean";
	let i;
	if (n.dstRuns?.length) {
		const o = await t.ggir5sWallClockMs(1e3 * n.baseTsSec, e.length, Array.from(n.dstRuns)), c = Array.from(o.keys()).filter((e) => Number.isFinite(o[e])), l = Float64Array.from(c, (e) => o[e] / 1e3);
		a = Float64Array.from(c, (n) => e[n]), i = await t.foldOntoGrid(l, a, s, n.epochLenSec, r);
	} else i = await t.foldUniformOntoGrid(n.baseTsSec, 5, a, s, n.epochLenSec, r);
	const o = await g(n.ggirConfigCsv, t), c = Uint8Array.from(i, (e) => 1 === e ? 1 : 0).buffer, l = Ve[o];
	return _n(l ? { [l]: c } : { unifiedNonwearMasks: { [o]: c } });
}
function _n(...e) {
	const n = {}, t = {};
	for (const a of e) {
		for (const e of Object.values(Ve)) {
			const t = a[e];
			void 0 === t || null === t && void 0 !== n[e] || (n[e] = t);
		}
		a.unifiedNonwearMasks && Object.assign(t, a.unifiedNonwearMasks);
	}
	return Object.keys(t).length > 0 && (n.unifiedNonwearMasks = t), t[p.van_hees_2013] && void 0 === n.vanHeesNonwear && (n.vanHeesNonwear = null), n;
}
const wn = {
	path: "ggir",
	selected: [p.ggir_part2_invalid],
	available: [p.ggir_part2_invalid],
	dropped: []
};
function yn(e, n) {
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
export { We as A, P as B, fn as C, an as D, ln as E, z as F, ee as G, X as H, j as I, N as J, x as K, H as L, ve as M, Fe as N, pn as O, ke as P, U as R, cn as S, Ke as T, F as U, L as V, ne as W, Be as _, wn as a, ze as b, dn as c, on as d, Le as f, gn as g, nn as h, Ie as i, be as j, yn as k, hn as l, en as m, Je as n, $e as o, rn as p, W as q, Ve as r, qe as s, un as t, Ue as u, Ye as v, Qe as w, tn as x, _n as y, I as z };
