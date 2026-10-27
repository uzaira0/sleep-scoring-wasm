var e = Object.create, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, o = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty, l = (e, t, r) => () => {
	if (r) throw r[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (n) {
		throw r = [n], n;
	}
}, s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), a = (e, r) => {
	let n = {};
	for (var o in e) t(n, o, {
		get: e[o],
		enumerable: !0
	});
	return r || t(n, Symbol.toStringTag, { value: "Module" }), n;
}, i = (e, o, l, s) => {
	if (o && "object" == typeof o || "function" == typeof o) for (var a, i = n(o), c = 0, f = i.length; c < f; c++) a = i[c], u.call(e, a) || a === l || t(e, a, {
		get: ((e) => o[e]).bind(null, a),
		enumerable: !(s = r(o, a)) || s.enumerable
	});
	return e;
}, c = (r, n, l) => (l = null != r ? e(o(r)) : {}, i(!n && r && r.__esModule && u.call(r, "default") ? l : t(l, "default", {
	value: r,
	enumerable: !0
}), r)), f = (e) => u.call(e, "module.exports") ? e["module.exports"] : i(t({}, "__esModule", { value: !0 }), e), b = a({
	ggirCell: () => m,
	ggirColumn: () => p,
	ggirNum: () => g,
	ggirRow: () => y
});
function p(e, t) {
	return e.columns.indexOf(t);
}
function m(e, t, r) {
	const n = p(e, t);
	return n < 0 ? null : e.values[n]?.[r] ?? null;
}
function g(e, t, r) {
	const n = m(e, t, r);
	if ("number" == typeof n) return Number.isFinite(n) ? n : null;
	if ("string" == typeof n && "" !== n.trim()) {
		const e = Number(n);
		return Number.isFinite(e) ? e : null;
	}
	return null;
}
function y(e, t, r) {
	const n = p(e, t);
	if (n < 0) return -1;
	const o = e.values[n] ?? [];
	for (let u = 0; u < e.rows; u += 1) {
		const e = o[u];
		if (("number" == typeof e ? e : Number(e)) === r) return u;
	}
	return -1;
}
export { s as a, f as c, b as i, c as l, g as n, l as o, y as r, a as s, m as t };
