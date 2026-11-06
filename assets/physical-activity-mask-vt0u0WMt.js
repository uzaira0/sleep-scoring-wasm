import { t as e } from "./valid-day-criteria-BvWW5KT6.js";
const n = "union_all";
function a(e) {
	return e.nonwearDetector ?? "union_all";
}
const r = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: n
}, i = {
	...r,
	minimumWakeWearMinutes: e.minWearMinutesPerDay
};
function t(e) {
	return e ? {
		...i,
		...e
	} : i;
}
export { a as i, n, t as r, r as t };
