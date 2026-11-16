import { f as e } from "./physical-activity-cutpoint-presets-BOMh7B4z.js";
const n = "union_all";
function a(e) {
	return e.nonwearDetector ?? "union_all";
}
const t = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: n
}, r = {
	...t,
	minimumWakeWearMinutes: e.minWearMinutesPerDay
};
function i(e) {
	return e ? {
		...r,
		...e
	} : r;
}
export { a as i, n, i as r, t };
