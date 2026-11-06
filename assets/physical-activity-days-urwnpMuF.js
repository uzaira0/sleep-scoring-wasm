import { en as e } from "./schema-B_tCLPTi.js";
import { t as n } from "./background-jobs-CKsUPhWg.js";
import { T as a, c as s } from "./local-nonwear-unified-BxFayBM2.js";
import { i as t } from "./physical-activity-mask-vt0u0WMt.js";
function r(n, a) {
	const s = [];
	for (const t of n.values()) {
		for (const n of t.sleepMarkers) {
			const a = n.markerType === e.MAIN_SLEEP ? "main_sleep" : n.markerType === e.NAP ? "nap" : null;
			a && null != n.onsetTimestamp && null != n.offsetTimestamp && s.push({
				kind: a,
				source: "human",
				start: n.onsetTimestamp,
				end: n.offsetTimestamp
			});
		}
		for (const e of t.nonwearMarkers) null != e.startTimestamp && null != e.endTimestamp && s.push({
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
function i(e, n, o, r) {
	const i = t(n), m = "union_all" === i ? Object.entries(s(e, o)) : [[i, a(e, i, o)], ..."detach_nonwear" === i ? [] : [["detach_nonwear", a(e, "detach_nonwear", o)]]], u = new Float64Array(e.timestamps);
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
