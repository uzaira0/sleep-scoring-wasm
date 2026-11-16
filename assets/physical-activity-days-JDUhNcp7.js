import { dr as e, n } from "./background-jobs-BCPfjgGQ.js";
import { t as a } from "./valid-day-criteria-D0FpZTom.js";
import { C as s, o as r } from "./local-nonwear-unified-DAJBkB8R.js";
function o(e) {
	return e.nonwearDetector ?? "union_all";
}
const t = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: "union_all"
}, i = {
	...t,
	minimumWakeWearMinutes: a.minWearMinutesPerDay
};
function u(e) {
	return e ? {
		...i,
		...e
	} : i;
}
function m(n, a) {
	const s = [];
	for (const r of n.values()) {
		for (const n of r.sleepMarkers) {
			const a = n.markerType === e.MAIN_SLEEP ? "main_sleep" : n.markerType === e.NAP ? "nap" : null;
			a && null != n.onsetTimestamp && null != n.offsetTimestamp && s.push({
				kind: a,
				source: "human",
				start: n.onsetTimestamp,
				end: n.offsetTimestamp
			});
		}
		for (const e of r.nonwearMarkers) null != e.startTimestamp && null != e.endTimestamp && s.push({
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
function c(e, n, a, t) {
	const i = o(n), u = "union_all" === i ? Object.entries(r(e, a)) : [[i, s(e, i, a)], ..."detach_nonwear" === i ? [] : [["detach_nonwear", s(e, "detach_nonwear", a)]]], m = new Float64Array(e.timestamps);
	return u.flatMap(([e, n]) => {
		if (!n) return [];
		const a = new Uint8Array(n);
		return 0 === a.length ? [] : [a.length === m.length ? {
			kind: "algorithm_nonwear",
			source: e,
			timestamps: m,
			epochSeconds: t,
			mask: a
		} : {
			kind: "algorithm_nonwear",
			source: e,
			mask: a
		}];
	});
}
function l(e) {
	return {
		excludeNonwear: e.excludeNonwear,
		excludeMainSleep: e.excludeMainSleep,
		excludeNaps: e.excludeNaps,
		useAlgorithmNonwear: e.useAlgorithmNonwear,
		useManualNonwear: e.useManualNonwear,
		minimumWakeWearMinutes: Number.isFinite(e.minimumWakeWearMinutes) ? Math.max(0, e.minimumWakeWearMinutes) : 0
	};
}
function p(e) {
	return {
		totalEpochs: e.totalEpochs,
		includedEpochs: e.includedEpochs,
		nonwearEpochs: e.nonwearEpochs,
		mainSleepEpochs: e.mainSleepEpochs,
		napEpochs: e.napEpochs,
		overlapEpochs: e.overlapEpochs
	};
}
function d(e, a) {
	return n(a).summarizePhysicalActivityDays(e);
}
export { d as a, o as c, p as i, m as n, t as o, c as r, u as s, l as t };
