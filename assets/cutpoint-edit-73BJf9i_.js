import { J as i } from "./background-jobs-BxZgJi0P.js";
async function n(n, t = i()) {
	const e = await t.effectiveOverrideCutpoints(...(r = n, [
		r.sedentaryMax,
		r.lightMin,
		r.moderateMin,
		r.vigorousMin
	]));
	var r, o;
	return e ? {
		sedentaryMax: (o = e)[0],
		lightMin: o[1],
		moderateMin: o[2],
		vigorousMin: o[3]
	} : null;
}
export { n as t };
