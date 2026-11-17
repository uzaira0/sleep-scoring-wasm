import { n as e, pr as n } from "./background-jobs-yM6RprLt.js";
import { C as a, o as s } from "./local-nonwear-unified-SDc48L9O.js";
import { t as r } from "./valid-day-criteria-CyAcEGa9.js";
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
	minimumWakeWearMinutes: r.minWearMinutesPerDay
};
function u(e) {
	return e ? {
		...i,
		...e
	} : i;
}
function m(e, a) {
	const s = [];
	for (const r of e.values()) {
		for (const e of r.sleepMarkers) {
			const a = e.markerType === n.MAIN_SLEEP ? "main_sleep" : e.markerType === n.NAP ? "nap" : null;
			a && null != e.onsetTimestamp && null != e.offsetTimestamp && s.push({
				kind: a,
				source: "human",
				start: e.onsetTimestamp,
				end: e.offsetTimestamp
			});
		}
		for (const e of r.nonwearMarkers) null != e.startTimestamp && null != e.endTimestamp && s.push({
			kind: "manual_nonwear",
			source: "human",
			start: e.startTimestamp,
			end: e.endTimestamp
		});
	}
	for (const n of a) s.push({
		kind: "sensor_nonwear",
		source: "device",
		start: n.startTimestamp,
		end: n.endTimestamp
	});
	return s;
}
function c(e, n, r, t) {
	const i = o(n), u = "union_all" === i ? Object.entries(s(e, r)) : [[i, a(e, i, r)], ..."detach_nonwear" === i ? [] : [["detach_nonwear", a(e, "detach_nonwear", r)]]], m = new Float64Array(e.timestamps);
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
function d(n, a) {
	return e(a).summarizePhysicalActivityDays(n);
}
export { d as a, o as c, p as i, m as n, t as o, c as r, u as s, l as t };
