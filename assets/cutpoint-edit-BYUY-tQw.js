import { Mr as i } from "./background-jobs-XKgiZRrI.js";
async function n(n, r = i()) {
	const t = await r.effectiveOverrideCutpoints(...(e = n, [
		e.sedentaryMax,
		e.lightMin,
		e.moderateMin,
		e.vigorousMin
	]));
	var e, o;
	return t ? {
		sedentaryMax: (o = t)[0],
		lightMin: o[1],
		moderateMin: o[2],
		vigorousMin: o[3]
	} : null;
}
export { n as t };
