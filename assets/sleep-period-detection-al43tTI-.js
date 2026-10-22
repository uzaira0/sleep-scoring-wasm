import { Wt as e, on as a } from "./schema-B_evdEdj.js";
import { M as r, j as n } from "./workspace-db-nrwH3Dt2.js";
const s = {
	DIARY: r.diary,
	HDCZA: r.hdcza,
	L5: r.l5,
	SELECTED_SCORER_FIRST_LAST: r.selected_scorer_first_last,
	SELECTED_SCORER_LONGEST_BOUT: r.selected_scorer_longest_bout,
	QUIET_BOUT: r.quiet_bout,
	EVENT_MARKER: r.event_marker,
	ACTIWARE_REST_INTERVAL: r.actiware_rest_interval,
	NONE: r.none
}, _ = {
	USE_SOURCE_A: n.use_source_a,
	USE_SOURCE_B: n.use_source_b,
	INTERSECTION: n.intersection,
	UNION: n.union,
	SOURCE_B_BOUNDED_BY_SOURCE_A: n.source_b_bounded_by_source_a,
	SANITY_CLAMP_SOURCE_B_TO_SOURCE_A: n.sanity_clamp_source_b_to_source_a
}, o = {
	sourceA: a.sleep_period_detection.source_a,
	sourceB: a.sleep_period_detection.source_b,
	fusionPolicy: a.sleep_period_detection.fusion_policy,
	mergeGapMinutes: a.sleep_period_detection.merge_gap_minutes,
	paddingMinutes: a.sleep_period_detection.padding_minutes,
	minOverlapJaccard: a.sleep_period_detection.min_overlap_jaccard,
	applyNonwearGate: a.sleep_period_detection.apply_nonwear_gate
};
function t(e) {
	const a = o;
	return e.sourceA === a.sourceA && e.sourceB === a.sourceB && e.fusionPolicy === a.fusionPolicy && e.mergeGapMinutes === a.mergeGapMinutes && e.paddingMinutes === a.paddingMinutes && e.minOverlapJaccard === a.minOverlapJaccard && e.applyNonwearGate === a.applyNonwearGate;
}
const c = {
	[s.DIARY]: "Diary",
	[s.HDCZA]: "HDCZA SPT",
	[s.L5]: "L5 least active 5h",
	[s.SELECTED_SCORER_FIRST_LAST]: "Selected scorer first-last sleep",
	[s.SELECTED_SCORER_LONGEST_BOUT]: "Selected scorer longest sleep bout",
	[s.QUIET_BOUT]: "Quiet-bout least-active window",
	[s.EVENT_MARKER]: "Event markers (button presses)",
	[s.ACTIWARE_REST_INTERVAL]: "Actiware rest interval",
	[s.NONE]: "None"
}, i = Object.values(r).map((e) => ({
	value: e,
	label: c[e]
})), u = [
	{
		value: _.USE_SOURCE_A,
		label: "Use source A"
	},
	{
		value: _.USE_SOURCE_B,
		label: "Use source B"
	},
	{
		value: _.INTERSECTION,
		label: "A intersect B"
	},
	{
		value: _.UNION,
		label: "A union B"
	},
	{
		value: _.SOURCE_B_BOUNDED_BY_SOURCE_A,
		label: "B bounded by A"
	},
	{
		value: _.SANITY_CLAMP_SOURCE_B_TO_SOURCE_A,
		label: "Use B, clamp to A if mismatch"
	}
];
function l(e) {
	return i.find((a) => a.value === e)?.label ?? e;
}
function E(e) {
	const a = p(e), r = a.applyNonwearGate ? "nonwear gate on" : "nonwear gate off";
	return `${l(a.sourceA)} + ${l(a.sourceB)}; ${function(e) {
		return u.find((a) => a.value === e)?.label ?? e;
	}(a.fusionPolicy)}; ${r}`;
}
function p(e) {
	const a = e ?? {};
	return {
		...o,
		sourceA: a.sourceA ?? a.source_a ?? o.sourceA,
		sourceB: a.sourceB ?? a.source_b ?? o.sourceB,
		fusionPolicy: a.fusionPolicy ?? a.fusion_policy ?? o.fusionPolicy,
		mergeGapMinutes: a.mergeGapMinutes ?? a.merge_gap_minutes ?? o.mergeGapMinutes,
		paddingMinutes: a.paddingMinutes ?? a.padding_minutes ?? o.paddingMinutes,
		minOverlapJaccard: a.minOverlapJaccard ?? a.min_overlap_jaccard ?? o.minOverlapJaccard,
		applyNonwearGate: a.applyNonwearGate ?? a.apply_nonwear_gate ?? o.applyNonwearGate
	};
}
function d(e) {
	const a = p(e);
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
function R(a) {
	switch (a.fusionPolicy === _.USE_SOURCE_B ? a.sourceB : a.sourceA) {
		case s.DIARY: return e.DIARY;
		case s.HDCZA: return e.HDCZA;
		case s.L5: return e.L5;
		case s.SELECTED_SCORER_FIRST_LAST:
		case s.SELECTED_SCORER_LONGEST_BOUT: return e.LONGEST_BOUT;
		case s.EVENT_MARKER: return e.EVENT_MARKER;
		case s.ACTIWARE_REST_INTERVAL: return e.ACTIWARE_REST_INTERVAL;
		case s.NONE: return e.NONE;
	}
	return e.NONE;
}
export { t as a, d as c, E as i, _ as n, R as o, s as r, p as s, o as t };
