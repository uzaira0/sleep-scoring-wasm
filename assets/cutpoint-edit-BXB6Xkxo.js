import { J as i } from "./background-jobs-BCPfjgGQ.js";
import { n as r } from "./valid-day-criteria-D0FpZTom.js";
async function t(r, t = i()) {
	const a = await t.effectiveOverrideCutpoints(...(n = r, [
		n.sedentaryMax,
		n.lightMin,
		n.moderateMin,
		n.vigorousMin
	]));
	var n, e;
	return a ? {
		sedentaryMax: (e = a)[0],
		lightMin: e[1],
		moderateMin: e[2],
		vigorousMin: e[3]
	} : null;
}
r();
export { t };
