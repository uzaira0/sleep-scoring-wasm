import { An as n } from "./schema-B_tCLPTi.js";
var r = n({
	ggirCell: () => u,
	ggirColumn: () => t,
	ggirNum: () => e,
	ggirRow: () => i
});
function t(n, r) {
	return n.columns.indexOf(r);
}
function u(n, r, u) {
	const e = t(n, r);
	return e < 0 ? null : n.values[e]?.[u] ?? null;
}
function e(n, r, t) {
	const e = u(n, r, t);
	if ("number" == typeof e) return Number.isFinite(e) ? e : null;
	if ("string" == typeof e && "" !== e.trim()) {
		const n = Number(e);
		return Number.isFinite(n) ? n : null;
	}
	return null;
}
function i(n, r, u) {
	const e = t(n, r);
	if (e < 0) return -1;
	const i = n.values[e] ?? [];
	for (let t = 0; t < n.rows; t += 1) {
		const n = i[t];
		if (("number" == typeof n ? n : Number(n)) === u) return t;
	}
	return -1;
}
export { r as i, e as n, i as r, u as t };
