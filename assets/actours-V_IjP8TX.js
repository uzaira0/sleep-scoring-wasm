var n = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, Yn.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Yn.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		ke.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = ke.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = ke.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = ke.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = ke.streamchunkresult_axisX(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ke.streamchunkresult_axisY(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ke.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ke.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ke.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = oe(n[0], n[1]).slice(), ke.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = ke.streamchunkresult_counts(this.__wbg_ptr);
		var e = ne(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = ke.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = ne(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = ke.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = ke.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return ke.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = ke.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = ke.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== ke.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = ke.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = oe(n[0], n[1]).slice(), ke.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = ke.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = ke.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = ke.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== ke.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ke.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return ke.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ke.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = ke.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = ne(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = ke.streamchunkresult_temperature(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ke.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = ke.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ke.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = ke.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = ke.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = ke.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, Zn.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Zn.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		ke.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = ke.streamparseresult_axisX(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ke.streamparseresult_axisY(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ke.streamparseresult_axisZ(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ke.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ke.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = oe(n[0], n[1]).slice(), ke.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return ke.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== ke.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ke.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ke.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = ke.streamparseresult_temperature(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ke.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ke.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = Qn(n[0], n[1]).slice();
		return ke.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t() {
	let n, e;
	try {
		const t = ke.actoursVersion();
		return n = t[0], e = t[1], oe(t[0], t[1]);
	} finally {
		ke.__wbindgen_free(n, e, 1);
	}
}
function _(n) {
	const e = ke.aggregateEpochSeries(n);
	if (e[2]) throw me(e[1]);
	return me(e[0]);
}
function r(n) {
	let e, t;
	try {
		const i = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), o = Ae, c = ke.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, me(c[2]);
		return e = _, t = r, oe(_, r);
	} finally {
		ke.__wbindgen_free(e, t, 1);
	}
}
function i(n, e, t, _) {
	const r = fe(n, ke.__wbindgen_malloc), i = Ae, o = fe(e, ke.__wbindgen_malloc), c = Ae, a = fe(t, ke.__wbindgen_malloc), l = Ae, s = ke.classifyActimetricPreschoolWristRf(r, i, o, c, a, l, _);
	if (s[3]) throw me(s[2]);
	var u = ee(s[0], s[1]).slice();
	return ke.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function o(n, e, t, _) {
	const r = fe(n, ke.__wbindgen_malloc), i = Ae, o = fe(e, ke.__wbindgen_malloc), c = Ae, a = fe(t, ke.__wbindgen_malloc), l = Ae, s = ke.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, l, _);
	if (s[3]) throw me(s[2]);
	var u = ee(s[0], s[1]).slice();
	return ke.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function c(n, e, t, _) {
	const r = fe(n, ke.__wbindgen_malloc), i = Ae, o = fe(e, ke.__wbindgen_malloc), c = Ae, a = fe(t, ke.__wbindgen_malloc), l = Ae, s = ke.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, l, _);
	if (s[3]) throw me(s[2]);
	var u = ee(s[0], s[1]).slice();
	return ke.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function a(n, e, t, _) {
	const r = fe(n, ke.__wbindgen_malloc), i = Ae, o = fe(e, ke.__wbindgen_malloc), c = Ae, a = fe(t, ke.__wbindgen_malloc), l = Ae, s = ke.computeAnglez5s(r, i, o, c, a, l, _);
	var u = Qn(s[0], s[1]).slice();
	return ke.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function l(n) {
	let e, t;
	try {
		const i = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), o = Ae, c = ke.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, me(c[2]);
		return e = _, t = r, oe(_, r);
	} finally {
		ke.__wbindgen_free(e, t, 1);
	}
}
function s(n, e, t, _, r, i, o) {
	const c = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), a = Ae, l = fe(e, ke.__wbindgen_malloc), s = Ae, u = ge(t, ke.__wbindgen_malloc), w = Ae, g = fe(_, ke.__wbindgen_malloc), b = Ae, f = ge(r, ke.__wbindgen_malloc), d = Ae, m = be(i, ke.__wbindgen_malloc), h = Ae, p = ge(o, ke.__wbindgen_malloc), y = Ae, v = ke.computeCircadianTyped(c, a, l, s, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw me(v[1]);
	return me(v[0]);
}
function u(n, e, t, _) {
	const r = fe(n, ke.__wbindgen_malloc), i = Ae, o = fe(e, ke.__wbindgen_malloc), c = Ae, a = fe(t, ke.__wbindgen_malloc), l = Ae, s = ke.computeEnmo5s(r, i, o, c, a, l, _);
	var u = Qn(s[0], s[1]).slice();
	return ke.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function w(n, e, t, _, r) {
	const i = fe(n, ke.__wbindgen_malloc), o = Ae, c = fe(e, ke.__wbindgen_malloc), a = Ae, l = fe(t, ke.__wbindgen_malloc), s = Ae, u = ke.computeMimsUnit(i, o, c, a, l, s, _, r);
	if (u[2]) throw me(u[1]);
	return me(u[0]);
}
function g(n, e, t, _, r) {
	const i = fe(n, ke.__wbindgen_malloc), o = Ae, c = fe(e, ke.__wbindgen_malloc), a = Ae, l = fe(t, ke.__wbindgen_malloc), s = Ae, u = fe(_, ke.__wbindgen_malloc), w = Ae, g = ke.computeMimsUnitDataframe(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw me(g[1]);
	return me(g[0]);
}
function b(n, e, t, _, r) {
	const i = fe(n, ke.__wbindgen_malloc), o = Ae, c = fe(e, ke.__wbindgen_malloc), a = Ae, l = fe(t, ke.__wbindgen_malloc), s = Ae, u = ke.computeMimsUnitTimingBreakdown(i, o, c, a, l, s, _, r);
	if (u[2]) throw me(u[1]);
	return me(u[0]);
}
function f(n, e, t, _, r) {
	const i = fe(n, ke.__wbindgen_malloc), o = Ae, c = fe(e, ke.__wbindgen_malloc), a = Ae, l = fe(t, ke.__wbindgen_malloc), s = Ae, u = ke.computeMimsUnitValues(i, o, c, a, l, s, _, r);
	if (u[3]) throw me(u[2]);
	var w = Qn(u[0], u[1]).slice();
	return ke.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function d(n) {
	let e, t;
	try {
		const i = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), o = Ae, c = ke.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, me(c[2]);
		return e = _, t = r, oe(_, r);
	} finally {
		ke.__wbindgen_free(e, t, 1);
	}
}
function m(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), y = Ae, v = fe(e, ke.__wbindgen_malloc), k = Ae, A = ge(t, ke.__wbindgen_malloc), x = Ae, C = fe(_, ke.__wbindgen_malloc), R = Ae, S = ge(r, ke.__wbindgen_malloc), F = Ae, M = be(i, ke.__wbindgen_malloc), P = Ae, U = ge(o, ke.__wbindgen_malloc), D = Ae, I = be(c, ke.__wbindgen_malloc), z = Ae, B = ge(a, ke.__wbindgen_malloc), W = Ae, O = fe(l, ke.__wbindgen_malloc), N = Ae, j = ge(s, ke.__wbindgen_malloc), E = Ae, G = fe(u, ke.__wbindgen_malloc), T = Ae, V = ge(w, ke.__wbindgen_malloc), L = Ae, X = fe(g, ke.__wbindgen_malloc), q = Ae, H = ge(b, ke.__wbindgen_malloc), $ = Ae, Y = fe(f, ke.__wbindgen_malloc), Z = Ae, K = ge(d, ke.__wbindgen_malloc), J = Ae, Q = be(m, ke.__wbindgen_malloc), nn = Ae, en = ge(h, ke.__wbindgen_malloc), tn = Ae, _n = ke.computeNightDifficultyTyped(p, y, v, k, A, x, C, R, S, F, M, P, U, D, I, z, B, W, O, N, j, E, G, T, V, L, X, q, H, $, Y, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw me(_n[1]);
	return me(_n[0]);
}
function h(n) {
	let e, t;
	try {
		const i = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), o = Ae, c = ke.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, me(c[2]);
		return e = _, t = r, oe(_, r);
	} finally {
		ke.__wbindgen_free(e, t, 1);
	}
}
function p(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), y = Ae, v = fe(e, ke.__wbindgen_malloc), k = Ae, A = ge(t, ke.__wbindgen_malloc), x = Ae, C = fe(_, ke.__wbindgen_malloc), R = Ae, S = ge(r, ke.__wbindgen_malloc), F = Ae, M = be(i, ke.__wbindgen_malloc), P = Ae, U = ge(o, ke.__wbindgen_malloc), D = Ae, I = be(c, ke.__wbindgen_malloc), z = Ae, B = ge(a, ke.__wbindgen_malloc), W = Ae, O = fe(l, ke.__wbindgen_malloc), N = Ae, j = ge(s, ke.__wbindgen_malloc), E = Ae, G = fe(u, ke.__wbindgen_malloc), T = Ae, V = ge(w, ke.__wbindgen_malloc), L = Ae, X = fe(g, ke.__wbindgen_malloc), q = Ae, H = ge(b, ke.__wbindgen_malloc), $ = Ae, Y = fe(f, ke.__wbindgen_malloc), Z = Ae, K = ge(d, ke.__wbindgen_malloc), J = Ae, Q = be(m, ke.__wbindgen_malloc), nn = Ae, en = ge(h, ke.__wbindgen_malloc), tn = Ae, _n = ke.computeNightSignalsTyped(p, y, v, k, A, x, C, R, S, F, M, P, U, D, I, z, B, W, O, N, j, E, G, T, V, L, X, q, H, $, Y, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw me(_n[1]);
	return me(_n[0]);
}
function y(n, e, t) {
	const _ = be(n, ke.__wbindgen_malloc), r = Ae, i = fe(e, ke.__wbindgen_malloc), o = Ae, c = ke.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw me(c[1]);
	return me(c[0]);
}
function v(n) {
	const e = ke.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw me(e[1]);
	return me(e[0]);
}
function k(n) {
	const e = be(n, ke.__wbindgen_malloc), t = Ae;
	ke.csvBufferAppend(e, t);
}
function A(n) {
	ke.csvBufferClear(n);
}
function x(n, e) {
	const t = fe(n, ke.__wbindgen_malloc), _ = Ae, r = fe(e, ke.__wbindgen_malloc), i = Ae, o = ke.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw me(o[2]);
	var c = ee(o[0], o[1]).slice();
	return ke.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function C(n, e) {
	let t, _;
	try {
		const r = be(n, ke.__wbindgen_malloc), i = Ae, o = de(e, ke.__wbindgen_malloc, ke.__wbindgen_realloc), c = Ae, a = ke.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], oe(a[0], a[1]);
	} finally {
		ke.__wbindgen_free(t, _, 1);
	}
}
function R(n) {
	const e = ke.detectGgirHasptVariant(n);
	if (e[2]) throw me(e[1]);
	return me(e[0]);
}
function S(n, e, t, _) {
	const r = fe(n, ke.__wbindgen_malloc), i = Ae;
	var o = we(e) ? 0 : de(e, ke.__wbindgen_malloc, ke.__wbindgen_realloc), c = Ae, a = we(t) ? 0 : fe(t, ke.__wbindgen_malloc), l = Ae, s = we(_) ? 0 : fe(_, ke.__wbindgen_malloc), u = Ae;
	return ke.detectHdcza(r, i, o, c, a, l, s, u);
}
function F(n) {
	const e = fe(n, ke.__wbindgen_malloc), t = Ae, _ = ke.detectNonwear(e, t);
	var r = ee(_[0], _[1]).slice();
	return ke.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function M(n) {
	const e = fe(n, ke.__wbindgen_malloc), t = Ae, _ = ke.detectNonwearChoi2011(e, t);
	var r = ee(_[0], _[1]).slice();
	return ke.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function P(n) {
	const e = fe(n, ke.__wbindgen_malloc), t = Ae, _ = ke.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw me(_[1]);
	return me(_[0]);
}
function U(n, e) {
	const t = fe(n, ke.__wbindgen_malloc), _ = Ae, r = ke.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw me(r[2]);
	var i = ee(r[0], r[1]).slice();
	return ke.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function D(n) {
	const e = fe(n, ke.__wbindgen_malloc), t = Ae, _ = ke.detectNonwearChoi2012(e, t);
	var r = ee(_[0], _[1]).slice();
	return ke.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function I(n) {
	const e = fe(n, ke.__wbindgen_malloc), t = Ae, _ = ke.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw me(_[1]);
	return me(_[0]);
}
function z(n) {
	const e = fe(n, ke.__wbindgen_malloc), t = Ae, _ = ke.detectNonwearChoiBouts(e, t);
	if (_[2]) throw me(_[1]);
	return me(_[0]);
}
function B(n) {
	let e, t;
	try {
		const i = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), o = Ae, c = ke.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, me(c[2]);
		return e = _, t = r, oe(_, r);
	} finally {
		ke.__wbindgen_free(e, t, 1);
	}
}
function W(n, e, t, _, r, i, o) {
	const c = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), a = Ae, l = de(e, ke.__wbindgen_malloc, ke.__wbindgen_realloc), s = Ae, u = fe(t, ke.__wbindgen_malloc), w = Ae, g = fe(_, ke.__wbindgen_malloc), b = Ae, f = fe(r, ke.__wbindgen_malloc), d = Ae, m = ke.detectNonwearUnifiedBatchTyped(c, a, l, s, u, w, g, b, f, d, i, o);
	if (m[2]) throw me(m[1]);
	return me(m[0]);
}
function O(n, e, t, _, r) {
	const i = fe(n, ke.__wbindgen_malloc), o = Ae, c = fe(e, ke.__wbindgen_malloc), a = Ae, l = fe(t, ke.__wbindgen_malloc), s = Ae, u = fe(_, ke.__wbindgen_malloc), w = Ae, g = ke.epochRawData(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw me(g[1]);
	return me(g[0]);
}
function N(n, e, t) {
	const _ = fe(n, ke.__wbindgen_malloc), r = Ae, i = fe(e, ke.__wbindgen_malloc), o = Ae, c = ke.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw me(c[1]);
	return me(c[0]);
}
function j(n, e) {
	let t, _;
	try {
		const o = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), c = Ae, a = de(e, ke.__wbindgen_malloc, ke.__wbindgen_realloc), l = Ae, s = ke.executeHeroRuntime(o, c, a, l);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, me(s[2]);
		return t = r, _ = i, oe(r, i);
	} finally {
		ke.__wbindgen_free(t, _, 1);
	}
}
function E(n) {
	const e = be(n, ke.__wbindgen_malloc), t = Ae, _ = ke.extractCapsense(e, t);
	if (_[2]) throw me(_[1]);
	return me(_[0]);
}
function G() {
	const n = ke.getComputeCapabilitiesV1();
	if (n[2]) throw me(n[1]);
	return me(n[0]);
}
function T() {
	ke.installPanicHook();
}
function V(n) {
	const e = be(n, ke.__wbindgen_malloc), t = Ae;
	return 0 !== ke.isGeneactivFormat(e, t);
}
function L(n, e, t, _) {
	const r = fe(n, ke.__wbindgen_malloc), i = Ae, o = fe(e, ke.__wbindgen_malloc), c = Ae, a = fe(t, ke.__wbindgen_malloc), l = Ae, s = ke.lstmSpectralFeatures30s(r, i, o, c, a, l, _);
	if (s[2]) throw me(s[1]);
	return me(s[0]);
}
function X(n, e, t, _, r) {
	const i = fe(n, ke.__wbindgen_malloc), o = Ae, c = fe(e, ke.__wbindgen_malloc), a = Ae, l = fe(t, ke.__wbindgen_malloc), s = Ae, u = ke.neishabouriCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw me(u[1]);
	return me(u[0]);
}
function q(n, e) {
	const t = be(n, ke.__wbindgen_malloc), _ = Ae, r = ke.parseActigraphCsv(t, _, e);
	if (r[2]) throw me(r[1]);
	return me(r[0]);
}
function H(n) {
	const e = ke.parseActigraphCsvBuffered(n);
	if (e[2]) throw me(e[1]);
	return me(e[0]);
}
function $(n) {
	const e = be(n, ke.__wbindgen_malloc), t = Ae, _ = ke.parseCwa(e, t);
	if (_[2]) throw me(_[1]);
	return me(_[0]);
}
function Y(n, e) {
	const t = be(n, ke.__wbindgen_malloc), _ = Ae, r = de(e, ke.__wbindgen_malloc, ke.__wbindgen_realloc), i = Ae, o = ke.parseEpochSeries(t, _, r, i);
	if (o[2]) throw me(o[1]);
	return me(o[0]);
}
function Z(n) {
	const e = be(n, ke.__wbindgen_malloc), t = Ae, _ = ke.parseGeneactivBin(e, t);
	if (_[2]) throw me(_[1]);
	return me(_[0]);
}
function K(n) {
	const e = be(n, ke.__wbindgen_malloc), t = Ae, _ = ke.parseGeneactivCsv(e, t);
	if (_[2]) throw me(_[1]);
	return me(_[0]);
}
function J() {
	const n = ke.parseGeneactivCsvBuffered();
	if (n[2]) throw me(n[1]);
	return me(n[0]);
}
function Q(n) {
	const e = be(n, ke.__wbindgen_malloc), t = Ae, _ = ke.parseGt3x(e, t);
	if (_[2]) throw me(_[1]);
	return me(_[0]);
}
function nn(n) {
	let e, t;
	try {
		const i = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), o = Ae, c = ke.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, me(c[2]);
		return e = _, t = r, oe(_, r);
	} finally {
		ke.__wbindgen_free(e, t, 1);
	}
}
function en(n, e, t, _, r, i) {
	const o = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), c = Ae, a = fe(e, ke.__wbindgen_malloc), l = Ae, s = fe(t, ke.__wbindgen_malloc), u = Ae, w = be(_, ke.__wbindgen_malloc), g = Ae, b = be(r, ke.__wbindgen_malloc), f = Ae, d = de(i, ke.__wbindgen_malloc, ke.__wbindgen_realloc), m = Ae, h = ke.placeMarkersBatch(o, c, a, l, s, u, w, g, b, f, d, m);
	if (h[2]) throw me(h[1]);
	return me(h[0]);
}
function tn(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), y = Ae, v = fe(e, ke.__wbindgen_malloc), k = Ae, A = ge(t, ke.__wbindgen_malloc), x = Ae, C = fe(_, ke.__wbindgen_malloc), R = Ae, S = ge(r, ke.__wbindgen_malloc), F = Ae, M = be(i, ke.__wbindgen_malloc), P = Ae, U = ge(o, ke.__wbindgen_malloc), D = Ae, I = be(c, ke.__wbindgen_malloc), z = Ae, B = ge(a, ke.__wbindgen_malloc), W = Ae, O = fe(l, ke.__wbindgen_malloc), N = Ae, j = ge(s, ke.__wbindgen_malloc), E = Ae, G = fe(u, ke.__wbindgen_malloc), T = Ae, V = ge(w, ke.__wbindgen_malloc), L = Ae, X = fe(g, ke.__wbindgen_malloc), q = Ae, H = ge(b, ke.__wbindgen_malloc), $ = Ae, Y = fe(f, ke.__wbindgen_malloc), Z = Ae, K = ge(d, ke.__wbindgen_malloc), J = Ae, Q = be(m, ke.__wbindgen_malloc), nn = Ae, en = ge(h, ke.__wbindgen_malloc), tn = Ae, _n = ke.placeMarkersTyped(p, y, v, k, A, x, C, R, S, F, M, P, U, D, I, z, B, W, O, N, j, E, G, T, V, L, X, q, H, $, Y, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw me(_n[1]);
	return me(_n[0]);
}
function _n(n) {
	let e, t;
	try {
		const i = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), o = Ae, c = ke.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, me(c[2]);
		return e = _, t = r, oe(_, r);
	} finally {
		ke.__wbindgen_free(e, t, 1);
	}
}
function rn(n, e, t, _) {
	const r = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), i = Ae, o = fe(e, ke.__wbindgen_malloc), c = Ae, a = fe(t, ke.__wbindgen_malloc), l = Ae, s = be(_, ke.__wbindgen_malloc), u = Ae, w = ke.placeNonwearMarkersTyped(r, i, o, c, a, l, s, u);
	if (w[2]) throw me(w[1]);
	return me(w[0]);
}
function on(n) {
	const e = ke.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw me(e[1]);
	return me(e[0]);
}
function cn(n) {
	const e = ke.prepareCompactPipelineV1(n);
	if (e[2]) throw me(e[1]);
	return me(e[0]);
}
function an(n, e, t, _, r, i, o) {
	const c = fe(n, ke.__wbindgen_malloc), a = Ae, l = fe(e, ke.__wbindgen_malloc), s = Ae, u = fe(t, ke.__wbindgen_malloc), w = Ae, g = fe(_, ke.__wbindgen_malloc), b = Ae;
	var f = we(o) ? 0 : de(o, ke.__wbindgen_malloc, ke.__wbindgen_realloc), d = Ae;
	const m = ke.processGeneactivRaw(c, a, l, s, u, w, g, b, r, i, f, d);
	if (m[2]) throw me(m[1]);
	return me(m[0]);
}
function ln(n) {
	const e = be(n, ke.__wbindgen_malloc), t = Ae, _ = ke.processGt3xFull(e, t);
	if (_[2]) throw me(_[1]);
	return me(_[0]);
}
function sn(n, e) {
	const t = be(n, ke.__wbindgen_malloc), _ = Ae, r = ke.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw me(r[1]);
	return me(r[0]);
}
function un(n) {
	const e = be(n, ke.__wbindgen_malloc), t = Ae, _ = ke.processGt3xPart1(e, t);
	if (_[2]) throw me(_[1]);
	return me(_[0]);
}
function wn(n, e) {
	const t = be(n, ke.__wbindgen_malloc), _ = Ae, r = ke.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw me(r[1]);
	return me(r[0]);
}
function gn(n, e, t, _, r, i) {
	const o = fe(n, ke.__wbindgen_malloc), c = Ae, a = fe(e, ke.__wbindgen_malloc), l = Ae, s = fe(t, ke.__wbindgen_malloc), u = Ae;
	var w = we(i) ? 0 : de(i, ke.__wbindgen_malloc, ke.__wbindgen_realloc), g = Ae;
	const b = ke.processRawXyz(o, c, a, l, s, u, _, r, w, g);
	if (b[2]) throw me(b[1]);
	return me(b[0]);
}
function bn(n, e, t, _, r, i) {
	const o = fe(n, ke.__wbindgen_malloc), c = Ae, a = fe(e, ke.__wbindgen_malloc), l = Ae, s = fe(t, ke.__wbindgen_malloc), u = Ae, w = fe(_, ke.__wbindgen_malloc), g = Ae;
	var b = we(i) ? 0 : de(i, ke.__wbindgen_malloc, ke.__wbindgen_realloc), f = Ae;
	const d = ke.processRawXyzImputed(o, c, a, l, s, u, w, g, r, b, f);
	if (d[2]) throw me(d[1]);
	return me(d[0]);
}
function fn(n, e, t, _, r, i, o) {
	const c = fe(n, ke.__wbindgen_malloc), a = Ae, l = fe(e, ke.__wbindgen_malloc), s = Ae, u = fe(t, ke.__wbindgen_malloc), w = Ae, g = fe(_, ke.__wbindgen_malloc), b = Ae;
	var f = we(i) ? 0 : de(i, ke.__wbindgen_malloc, ke.__wbindgen_realloc), d = Ae;
	const m = ke.processRawXyzImputedWithEpoch(c, a, l, s, u, w, g, b, r, f, d, o);
	if (m[2]) throw me(m[1]);
	return me(m[0]);
}
function dn(n) {
	const e = be(n, ke.__wbindgen_malloc), t = Ae, _ = ke.readGgirMeta(e, t);
	if (_[2]) throw me(_[1]);
	return me(_[0]);
}
function mn() {
	return ke.recommended_chunk_size_mb() >>> 0;
}
function hn(n, e) {
	const t = fe(n, ke.__wbindgen_malloc), _ = Ae, r = de(e, ke.__wbindgen_malloc, ke.__wbindgen_realloc), i = Ae, o = ke.reduceF64V1(t, _, r, i);
	if (o[2]) throw me(o[1]);
	return o[0];
}
function pn(n) {
	const e = ke.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw me(e[1]);
	return me(e[0]);
}
function yn(n) {
	const e = ke.runCompactPipelineV1(n);
	if (e[2]) throw me(e[1]);
	return me(e[0]);
}
function vn(n, e) {
	const t = ke.runFullPipeline(n, e);
	if (t[2]) throw me(t[1]);
	return me(t[0]);
}
function kn(n) {
	const e = ke.runFullPipelineOutcomeV1(n);
	if (e[2]) throw me(e[1]);
	return me(e[0]);
}
function An(n) {
	const e = ke.runFullPipelineV1(n);
	if (e[2]) throw me(e[1]);
	return me(e[0]);
}
function xn(n, e) {
	const t = ke.runGgirFromEpoch(n, e);
	if (t[2]) throw me(t[1]);
	return me(t[0]);
}
function Cn(n) {
	const e = be(n, ke.__wbindgen_malloc), t = Ae, _ = ke.runMilestone(e, t);
	if (_[2]) throw me(_[1]);
	return me(_[0]);
}
function Rn(n) {
	const e = ke.scoreAllDays(n);
	if (e[2]) throw me(e[1]);
	return me(e[0]);
}
function Sn(n, e) {
	const t = fe(n, ke.__wbindgen_malloc), _ = Ae, r = ke.scoreColeKripke(t, _, e);
	var i = ee(r[0], r[1]).slice();
	return ke.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Fn(n) {
	let e, t;
	try {
		const i = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), o = Ae, c = ke.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, me(c[2]);
		return e = _, t = r, oe(_, r);
	} finally {
		ke.__wbindgen_free(e, t, 1);
	}
}
function Mn(n) {
	const e = ke.scoreConsensusMajority(n);
	if (e[2]) throw me(e[1]);
	return me(e[0]);
}
function Pn(n, e, t) {
	const _ = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), r = Ae, i = be(e, ke.__wbindgen_malloc), o = Ae, c = ge(t, ke.__wbindgen_malloc), a = Ae, l = ke.scoreConsensusTyped(_, r, i, o, c, a);
	if (l[2]) throw me(l[1]);
	return me(l[0]);
}
function Un(n) {
	let e, t;
	try {
		const i = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), o = Ae, c = ke.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, me(c[2]);
		return e = _, t = r, oe(_, r);
	} finally {
		ke.__wbindgen_free(e, t, 1);
	}
}
function Dn(n, e, t, _, r, i) {
	const o = de(n, ke.__wbindgen_malloc, ke.__wbindgen_realloc), c = Ae, a = fe(e, ke.__wbindgen_malloc), l = Ae, s = fe(t, ke.__wbindgen_malloc), u = Ae, w = fe(_, ke.__wbindgen_malloc), g = Ae, b = ke.scoreEpochsTyped(o, c, a, l, s, u, w, g, r, i);
	if (b[2]) throw me(b[1]);
	return me(b[0]);
}
function In(n) {
	const e = fe(n, ke.__wbindgen_malloc), t = Ae, _ = ke.scoreGgirHasib(e, t);
	var r = ee(_[0], _[1]).slice();
	return ke.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function zn(n) {
	const e = ke.scoreGgirHasibVariant(n);
	if (e[2]) throw me(e[1]);
	return me(e[0]);
}
function Bn(n, e, t) {
	const _ = fe(n, ke.__wbindgen_malloc), r = Ae, i = fe(e, ke.__wbindgen_malloc), o = Ae, c = ke.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw me(c[1]);
	return me(c[0]);
}
function Wn(n, e) {
	const t = fe(n, ke.__wbindgen_malloc), _ = Ae, r = ke.scoreSadeh(t, _, e);
	var i = ee(r[0], r[1]).slice();
	return ke.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function On(n) {
	const e = be(n, ke.__wbindgen_malloc), t = Ae, _ = ke.sha256StreamFeed(e, t);
	if (_[1]) throw me(_[0]);
}
function Nn() {
	let n, e;
	try {
		const r = ke.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, me(r[2]);
		return n = t, e = _, oe(t, _);
	} finally {
		ke.__wbindgen_free(n, e, 1);
	}
}
function jn() {
	ke.sha256StreamStart();
}
function En(n) {
	const e = be(n, ke.__wbindgen_malloc), t = Ae, _ = ke.streamParseFeed(e, t);
	if (_[2]) throw me(_[1]);
	return _[0] >>> 0;
}
function Gn() {
	const n = ke.streamParseFinish();
	if (n[2]) throw me(n[1]);
	return e.__wrap(n[0]);
}
function Tn() {
	const e = ke.streamParseFinishChunk();
	if (e[2]) throw me(e[1]);
	return n.__wrap(e[0]);
}
function Vn(n, e) {
	const t = ke.streamParseStart(n, e);
	if (t[1]) throw me(t[0]);
}
function Ln(n, e) {
	const t = ke.streamParseStartData(n, e);
	if (t[1]) throw me(t[0]);
}
function Xn(n, e, t) {
	const _ = ke.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw me(_[0]);
}
function qn(n, e) {
	const t = be(n, ke.__wbindgen_malloc), _ = Ae, r = ke.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw me(r[1]);
	return me(r[0]);
}
function Hn(n, e, t, _, r) {
	const i = fe(n, ke.__wbindgen_malloc), o = Ae, c = fe(e, ke.__wbindgen_malloc), a = Ae, l = fe(t, ke.__wbindgen_malloc), s = Ae, u = ke.zeroCrossingCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw me(u[1]);
	return me(u[0]);
}
function $n() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(oe(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = de(String(e), ke.__wbindgen_malloc, ke.__wbindgen_realloc), _ = Ae;
				_e().setInt32(n + 4, _, !0), _e().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				_e().setBigInt64(n + 8, we(t) ? BigInt(0) : t, !0), _e().setInt32(n + 0, !we(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return we(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = de(Jn(e), ke.__wbindgen_malloc, ke.__wbindgen_realloc), _ = Ae;
				_e().setInt32(n + 4, _, !0), _e().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_in_a5d8b22e52b24dd1: function(n, e) {
				return n in e;
			},
			__wbg___wbindgen_is_bigint_ec25c7f91b4d9e93: function(n) {
				return "bigint" == typeof n;
			},
			__wbg___wbindgen_is_function_3baa9db1a987f47d: function(n) {
				return "function" == typeof n;
			},
			__wbg___wbindgen_is_null_52ff4ec04186736f: function(n) {
				return null === n;
			},
			__wbg___wbindgen_is_object_63322ec0cd6ea4ef: function(n) {
				return "object" == typeof n && null !== n;
			},
			__wbg___wbindgen_is_string_6df3bf7ef1164ed3: function(n) {
				return "string" == typeof n;
			},
			__wbg___wbindgen_is_undefined_29a43b4d42920abd: function(n) {
				return void 0 === n;
			},
			__wbg___wbindgen_jsval_eq_d3465d8a07697228: function(n, e) {
				return n === e;
			},
			__wbg___wbindgen_jsval_loose_eq_cac3565e89b4134c: function(n, e) {
				return n == e;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const t = "number" == typeof e ? e : void 0;
				_e().setFloat64(n + 8, we(t) ? 0 : t, !0), _e().setInt32(n + 0, !we(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = we(t) ? 0 : de(t, ke.__wbindgen_malloc, ke.__wbindgen_realloc), r = Ae;
				_e().setInt32(n + 4, r, !0), _e().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(oe(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return ue(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_done_9158f7cc8751ba32: function(n) {
				return n.done;
			},
			__wbg_entries_e0b73aa8571ddb56: function(n) {
				return Object.entries(n);
			},
			__wbg_error_a6fa202b58aa1cd3: function(n, e) {
				let t, _;
				try {
					t = n, _ = e, console.error(oe(n, e));
				} finally {
					ke.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return ue(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return ue(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_8360291721e2339f: function(n, e) {
				return n[e >>> 0];
			},
			__wbg_get_unchecked_17f53dad852b9588: function(n, e) {
				return n[e >>> 0];
			},
			__wbg_get_with_ref_key_6412cf3094599694: function(n, e) {
				return n[e];
			},
			__wbg_instanceof_ArrayBuffer_7c8433c6ed14ffe3: function(n) {
				let e;
				try {
					e = n instanceof ArrayBuffer;
				} catch (t) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Float64Array_aa32a9a18a521df4: function(n) {
				let e;
				try {
					e = n instanceof Float64Array;
				} catch (t) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Map_1b76fd4635be43eb: function(n) {
				let e;
				try {
					e = n instanceof Map;
				} catch (t) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Uint8Array_152ba1f289edcf3f: function(n) {
				let e;
				try {
					e = n instanceof Uint8Array;
				} catch (t) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Window_cc64c86c8ef9e02b: function(n) {
				let e;
				try {
					e = n instanceof Window;
				} catch (t) {
					e = !1;
				}
				return e;
			},
			__wbg_isArray_c3109d14ffc06469: function(n) {
				return Array.isArray(n);
			},
			__wbg_isSafeInteger_4fc213d1989d6d2a: function(n) {
				return Number.isSafeInteger(n);
			},
			__wbg_isView_39f565da64ddb4dd: function(n) {
				return ArrayBuffer.isView(n);
			},
			__wbg_iterator_013bc09ec998c2a7: function() {
				return Symbol.iterator;
			},
			__wbg_length_3d4ecd04bd8d22f1: function(n) {
				return n.length;
			},
			__wbg_length_9f1775224cf1d815: function(n) {
				return n.length;
			},
			__wbg_navigator_bc077756492232c5: function(n) {
				return n.navigator;
			},
			__wbg_new_0c7403db6e782f19: function(n) {
				return new Uint8Array(n);
			},
			__wbg_new_227d7c05414eb861: function() {
				return /* @__PURE__ */ new Error();
			},
			__wbg_new_682678e2f47e32bc: function() {
				return new Array();
			},
			__wbg_new_aa8d0fa9762c29bd: function() {
				return /* @__PURE__ */ new Object();
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(Qn(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(ee(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return ue(function(n) {
					return n.next();
				}, arguments);
			},
			__wbg_next_7646edaa39458ef7: function(n) {
				return n.next;
			},
			__wbg_now_a9b7df1cbee90986: function() {
				return Date.now();
			},
			__wbg_ownKeys_0231887680f0f945: function() {
				return ue(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(ee(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return ue(function(n, e, t) {
					return Reflect.set(n, e, t);
				}, arguments);
			},
			__wbg_set_3bf1de9fab0cd644: function(n, e, t) {
				n[e >>> 0] = t;
			},
			__wbg_set_6be42768c690e380: function(n, e, t) {
				n[e] = t;
			},
			__wbg_set_index_2ca12d8345f872b3: function(n, e, t) {
				n[e >>> 0] = t;
			},
			__wbg_set_index_805dd976c110cd28: function(n, e, t) {
				n[e >>> 0] = t;
			},
			__wbg_slice_30ddef84546fd9d0: function(n, e, t) {
				return n.slice(e >>> 0, t >>> 0);
			},
			__wbg_slice_fcdcd53ca169108d: function(n, e, t) {
				return n.slice(e >>> 0, t >>> 0);
			},
			__wbg_stack_3b0d974bbf31e44f: function(n, e) {
				const t = de(e.stack, ke.__wbindgen_malloc, ke.__wbindgen_realloc), _ = Ae;
				_e().setInt32(n + 4, _, !0), _e().setInt32(n + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return we(n) ? 0 : Kn(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return we(n) ? 0 : Kn(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return we(n) ? 0 : Kn(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return we(n) ? 0 : Kn(n);
			},
			__wbg_value_ee3a06f4579184fa: function(n) {
				return n.value;
			},
			__wbindgen_cast_0000000000000001: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n, e) {
				return ee(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return oe(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = ke.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
const Yn = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ke.__wbg_streamchunkresult_free(n >>> 0, 1)), Zn = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ke.__wbg_streamparseresult_free(n >>> 0, 1));
function Kn(n) {
	const e = ke.__externref_table_alloc();
	return ke.__wbindgen_externrefs.set(e, n), e;
}
function Jn(n) {
	const e = typeof n;
	if ("number" == e || "boolean" == e || null == n) return `${n}`;
	if ("string" == e) return `"${n}"`;
	if ("symbol" == e) {
		const e = n.description;
		return null == e ? "Symbol" : `Symbol(${e})`;
	}
	if ("function" == e) {
		const e = n.name;
		return "string" == typeof e && e.length > 0 ? `Function(${e})` : "Function";
	}
	if (Array.isArray(n)) {
		const e = n.length;
		let t = "[";
		e > 0 && (t += Jn(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + Jn(n[_]);
		return t += "]", t;
	}
	const t = /\[object ([^\]]+)\]/.exec(toString.call(n));
	let _;
	if (!(t && t.length > 1)) return toString.call(n);
	if (_ = t[1], "Object" == _) try {
		return "Object(" + JSON.stringify(n) + ")";
	} catch (r) {
		return "Object";
	}
	return n instanceof Error ? `${n.name}: ${n.message}\n${n.stack}` : _;
}
function Qn(n, e) {
	return n >>>= 0, ie().subarray(n / 8, n / 8 + e);
}
function ne(n, e) {
	return n >>>= 0, ae().subarray(n / 4, n / 4 + e);
}
function ee(n, e) {
	return n >>>= 0, se().subarray(n / 1, n / 1 + e);
}
let te = null;
function _e() {
	return (null === te || !0 === te.buffer.detached || void 0 === te.buffer.detached && te.buffer !== ke.memory.buffer) && (te = new DataView(ke.memory.buffer)), te;
}
let re = null;
function ie() {
	return null !== re && 0 !== re.byteLength || (re = new Float64Array(ke.memory.buffer)), re;
}
function oe(n, e) {
	return function(n, e) {
		return ye += e, ye >= pe && (he = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), he.decode(), ye = e), he.decode(se().subarray(n, n + e));
	}(n >>>= 0, e);
}
let ce = null;
function ae() {
	return null !== ce && 0 !== ce.byteLength || (ce = new Uint32Array(ke.memory.buffer)), ce;
}
let le = null;
function se() {
	return null !== le && 0 !== le.byteLength || (le = new Uint8Array(ke.memory.buffer)), le;
}
function ue(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = Kn(t);
		ke.__wbindgen_exn_store(n);
	}
}
function we(n) {
	return null == n;
}
function ge(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return ae().set(n, t / 4), Ae = n.length, t;
}
function be(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return se().set(n, t / 1), Ae = n.length, t;
}
function fe(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return ie().set(n, t / 8), Ae = n.length, t;
}
function de(n, e, t) {
	if (void 0 === t) {
		const t = ve.encode(n), _ = e(t.length, 1) >>> 0;
		return se().subarray(_, _ + t.length).set(t), Ae = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = se();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = se().subarray(r + o, r + _);
		o += ve.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return Ae = o, r;
}
function me(n) {
	const e = ke.__wbindgen_externrefs.get(n);
	return ke.__externref_table_dealloc(n), e;
}
let he = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
he.decode();
const pe = 2146435072;
let ye = 0;
const ve = new TextEncoder();
"encodeInto" in ve || (ve.encodeInto = function(n, e) {
	const t = ve.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let ke, Ae = 0;
function xe(n, e) {
	return ke = n.exports, te = null, re = null, ce = null, le = null, ke.__wbindgen_start(), ke;
}
function Ce(n) {
	if (void 0 !== ke) return ke;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = $n();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), xe(new WebAssembly.Instance(n, e));
}
async function Re(n) {
	if (void 0 !== ke) return ke;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-4KRwDckJ.wasm", "" + import.meta.url));
	const e = $n();
	("string" == typeof n || "function" == typeof Request && n instanceof Request || "function" == typeof URL && n instanceof URL) && (n = fetch(n));
	const { instance: t, module: _ } = await async function(n, e) {
		if ("function" == typeof Response && n instanceof Response) {
			if ("function" == typeof WebAssembly.instantiateStreaming) try {
				return await WebAssembly.instantiateStreaming(n, e);
			} catch (t) {
				if (!n.ok || !function(n) {
					switch (n) {
						case "basic":
						case "cors":
						case "default": return !0;
					}
					return !1;
				}(n.type) || "application/wasm" === n.headers.get("Content-Type")) throw t;
				console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t);
			}
			const _ = await n.arrayBuffer();
			return await WebAssembly.instantiate(_, e);
		}
		{
			const t = await WebAssembly.instantiate(n, e);
			return t instanceof WebAssembly.Instance ? {
				instance: t,
				module: n
			} : t;
		}
	}(await n, e);
	return xe(t);
}
export { n as StreamChunkResult, e as StreamParseResult, t as actoursVersion, _ as aggregateEpochSeries, r as analyzePhysicalActivityDay, i as classifyActimetricPreschoolWristRf, o as classifyActimetricPreschoolWristRfLagLead, c as classifyActimetricPreschoolWristRfLagLeadCalibrated, a as computeAnglez5s, l as computeCircadian, s as computeCircadianTyped, u as computeEnmo5s, w as computeMimsUnit, g as computeMimsUnitDataframe, b as computeMimsUnitTimingBreakdown, f as computeMimsUnitValues, d as computeNightDifficulty, m as computeNightDifficultyTyped, h as computeNightSignals, p as computeNightSignalsTyped, y as computeSleepMetrics, v as configureComputeMemoryBudgetV1, k as csvBufferAppend, A as csvBufferClear, Re as default, x as detectDetachFromAccelerationG, C as detectDeviceFormat, R as detectGgirHasptVariant, S as detectHdcza, F as detectNonwear, M as detectNonwearChoi2011, P as detectNonwearChoi2011Bouts, U as detectNonwearChoi2011Epoch, D as detectNonwearChoi2012, I as detectNonwearChoi2012Bouts, z as detectNonwearChoiBouts, B as detectNonwearUnified, W as detectNonwearUnifiedBatchTyped, O as epochRawData, N as epochWithBandpass, j as executeHeroRuntime, E as extractCapsense, G as getComputeCapabilitiesV1, Ce as initSync, T as installPanicHook, V as isGeneactivFormat, L as lstmSpectralFeatures30s, X as neishabouriCounts, q as parseActigraphCsv, H as parseActigraphCsvBuffered, $ as parseCwa, Y as parseEpochSeries, Z as parseGeneactivBin, K as parseGeneactivCsv, J as parseGeneactivCsvBuffered, Q as parseGt3x, nn as placeMarkers, en as placeMarkersBatch, tn as placeMarkersTyped, _n as placeNonwearMarkers, rn as placeNonwearMarkersTyped, on as prepareCompactPipelineOutcomeV1, cn as prepareCompactPipelineV1, an as processGeneactivRaw, ln as processGt3xFull, sn as processGt3xFullWithEpoch, un as processGt3xPart1, wn as processGt3xPart1WithEpoch, gn as processRawXyz, bn as processRawXyzImputed, fn as processRawXyzImputedWithEpoch, dn as readGgirMeta, mn as recommended_chunk_size_mb, hn as reduceF64V1, pn as runCompactPipelineOutcomeV1, yn as runCompactPipelineV1, vn as runFullPipeline, kn as runFullPipelineOutcomeV1, An as runFullPipelineV1, xn as runGgirFromEpoch, Cn as runMilestone, Rn as scoreAllDays, Sn as scoreColeKripke, Fn as scoreConsensus, Mn as scoreConsensusMajority, Pn as scoreConsensusTyped, Un as scoreEpochs, Dn as scoreEpochsTyped, In as scoreGgirHasib, zn as scoreGgirHasibVariant, Bn as scoreGgirSib, Wn as scoreSadeh, On as sha256StreamFeed, Nn as sha256StreamFinish, jn as sha256StreamStart, En as streamParseFeed, Gn as streamParseFinish, Tn as streamParseFinishChunk, Vn as streamParseStart, Ln as streamParseStartData, Xn as streamParseStartWithEpoch, qn as summarizeActimetricPreschoolWristRfClasses, Hn as zeroCrossingCounts };
