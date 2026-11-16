import { an as e } from "./schema-MMK46mR-.js";
import { n } from "./background-jobs-Dz-LteaG.js";
import { T as a, c as s } from "./local-nonwear-unified-BZU1ydsO.js";
import { i as o } from "./physical-activity-mask-udLymLui.js";
function r(n, a) {
	const s = [];
	for (const o of n.values()) {
		for (const n of o.sleepMarkers) {
			const a = n.markerType === e.MAIN_SLEEP ? "main_sleep" : n.markerType === e.NAP ? "nap" : null;
			a && null != n.onsetTimestamp && null != n.offsetTimestamp && s.push({
				kind: a,
				source: "human",
				start: n.onsetTimestamp,
				end: n.offsetTimestamp
			});
		}
		for (const e of o.nonwearMarkers) null != e.startTimestamp && null != e.endTimestamp && s.push({
			kind: "manual_nonwear",
			source: "human",
			start: e.startTimestamp,
			end: e.endTimestamp
		});
	}
	for (const e of a) s.push({
		kind: "sensor_nonwear",
		source: "device",
		start: e.startTimestamp,
		end: e.endTimestamp
	});
	return s;
}
function i(e, n, t, r) {
	const i = o(n), m = "union_all" === i ? Object.entries(s(e, t)) : [[i, a(e, i, t)], ..."detach_nonwear" === i ? [] : [["detach_nonwear", a(e, "detach_nonwear", t)]]], u = new Float64Array(e.timestamps);
	return m.flatMap(([e, n]) => {
		if (!n) return [];
		const a = new Uint8Array(n);
		return 0 === a.length ? [] : [a.length === u.length ? {
			kind: "algorithm_nonwear",
			source: e,
			timestamps: u,
			epochSeconds: r,
			mask: a
		} : {
			kind: "algorithm_nonwear",
			source: e,
			mask: a
		}];
	});
}
function m(e) {
	return {
		excludeNonwear: e.excludeNonwear,
		excludeMainSleep: e.excludeMainSleep,
		excludeNaps: e.excludeNaps,
		useAlgorithmNonwear: e.useAlgorithmNonwear,
		useManualNonwear: e.useManualNonwear,
		minimumWakeWearMinutes: Number.isFinite(e.minimumWakeWearMinutes) ? Math.max(0, e.minimumWakeWearMinutes) : 0
	};
}
function u(e) {
	return {
		totalEpochs: e.totalEpochs,
		includedEpochs: e.includedEpochs,
		nonwearEpochs: e.nonwearEpochs,
		mainSleepEpochs: e.mainSleepEpochs,
		napEpochs: e.napEpochs,
		overlapEpochs: e.overlapEpochs
	};
}
function c(e, a) {
	return n(a).summarizePhysicalActivityDays(e);
}
export { c as a, u as i, r as n, i as r, m as t };
