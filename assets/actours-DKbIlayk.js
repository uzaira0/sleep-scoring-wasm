var n = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, ne.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ne.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Re.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Re.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Re.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Re.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Re.streamchunkresult_axisX(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Re.streamchunkresult_axisY(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Re.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Re.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Re.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ue(n[0], n[1]).slice(), Re.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Re.streamchunkresult_counts(this.__wbg_ptr);
		var e = ie(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Re.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = ie(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Re.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Re.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return Re.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Re.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Re.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Re.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Re.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ue(n[0], n[1]).slice(), Re.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Re.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Re.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Re.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Re.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Re.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Re.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Re.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = Re.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = ie(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Re.streamchunkresult_temperature(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Re.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Re.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Re.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Re.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Re.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Re.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, ee.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ee.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Re.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Re.streamparseresult_axisX(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Re.streamparseresult_axisY(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Re.streamparseresult_axisZ(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Re.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Re.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ue(n[0], n[1]).slice(), Re.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return Re.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== Re.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Re.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Re.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Re.streamparseresult_temperature(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Re.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Re.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = re(n[0], n[1]).slice();
		return Re.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n, e, t) {
	const _ = Re.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw ke(_[1]);
	return ke(_[0]);
}
function _() {
	let n, e;
	try {
		const t = Re.actoursVersion();
		return n = t[0], e = t[1], ue(t[0], t[1]);
	} finally {
		Re.__wbindgen_free(n, e, 1);
	}
}
function r(n) {
	const e = Re.aggregateEpochSeries(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function i(n) {
	let e, t;
	try {
		const i = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), o = Fe, c = Re.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ke(c[2]);
		return e = _, t = r, ue(_, r);
	} finally {
		Re.__wbindgen_free(e, t, 1);
	}
}
function o(n, e, t, _) {
	const r = ye(n, Re.__wbindgen_malloc), i = Fe, o = ye(e, Re.__wbindgen_malloc), c = Fe, a = ye(t, Re.__wbindgen_malloc), l = Fe, s = Re.classifyActimetricPreschoolWristRf(r, i, o, c, a, l, _);
	if (s[3]) throw ke(s[2]);
	var u = oe(s[0], s[1]).slice();
	return Re.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function c(n, e, t, _) {
	const r = ye(n, Re.__wbindgen_malloc), i = Fe, o = ye(e, Re.__wbindgen_malloc), c = Fe, a = ye(t, Re.__wbindgen_malloc), l = Fe, s = Re.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, l, _);
	if (s[3]) throw ke(s[2]);
	var u = oe(s[0], s[1]).slice();
	return Re.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function a(n, e, t, _) {
	const r = ye(n, Re.__wbindgen_malloc), i = Fe, o = ye(e, Re.__wbindgen_malloc), c = Fe, a = ye(t, Re.__wbindgen_malloc), l = Fe, s = Re.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, l, _);
	if (s[3]) throw ke(s[2]);
	var u = oe(s[0], s[1]).slice();
	return Re.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function l(n, e, t, _) {
	const r = ye(n, Re.__wbindgen_malloc), i = Fe, o = ye(e, Re.__wbindgen_malloc), c = Fe, a = ye(t, Re.__wbindgen_malloc), l = Fe, s = Re.computeAnglez5s(r, i, o, c, a, l, _);
	var u = re(s[0], s[1]).slice();
	return Re.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function s(n) {
	let e, t;
	try {
		const i = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), o = Fe, c = Re.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ke(c[2]);
		return e = _, t = r, ue(_, r);
	} finally {
		Re.__wbindgen_free(e, t, 1);
	}
}
function u(n, e, t, _, r, i, o) {
	const c = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), a = Fe, l = ye(e, Re.__wbindgen_malloc), s = Fe, u = he(t, Re.__wbindgen_malloc), w = Fe, g = ye(_, Re.__wbindgen_malloc), b = Fe, f = he(r, Re.__wbindgen_malloc), d = Fe, m = pe(i, Re.__wbindgen_malloc), h = Fe, p = he(o, Re.__wbindgen_malloc), y = Fe, v = Re.computeCircadianTyped(c, a, l, s, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw ke(v[1]);
	return ke(v[0]);
}
function w(n, e, t, _) {
	const r = ye(n, Re.__wbindgen_malloc), i = Fe, o = ye(e, Re.__wbindgen_malloc), c = Fe, a = ye(t, Re.__wbindgen_malloc), l = Fe, s = Re.computeEnmo5s(r, i, o, c, a, l, _);
	var u = re(s[0], s[1]).slice();
	return Re.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function g(n, e, t, _, r) {
	const i = ye(n, Re.__wbindgen_malloc), o = Fe, c = ye(e, Re.__wbindgen_malloc), a = Fe, l = ye(t, Re.__wbindgen_malloc), s = Fe, u = Re.computeMimsUnit(i, o, c, a, l, s, _, r);
	if (u[2]) throw ke(u[1]);
	return ke(u[0]);
}
function b(n, e, t, _, r) {
	const i = ye(n, Re.__wbindgen_malloc), o = Fe, c = ye(e, Re.__wbindgen_malloc), a = Fe, l = ye(t, Re.__wbindgen_malloc), s = Fe, u = ye(_, Re.__wbindgen_malloc), w = Fe, g = Re.computeMimsUnitDataframe(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw ke(g[1]);
	return ke(g[0]);
}
function f(n, e, t, _, r) {
	const i = ye(n, Re.__wbindgen_malloc), o = Fe, c = ye(e, Re.__wbindgen_malloc), a = Fe, l = ye(t, Re.__wbindgen_malloc), s = Fe, u = Re.computeMimsUnitTimingBreakdown(i, o, c, a, l, s, _, r);
	if (u[2]) throw ke(u[1]);
	return ke(u[0]);
}
function d(n, e, t, _, r) {
	const i = ye(n, Re.__wbindgen_malloc), o = Fe, c = ye(e, Re.__wbindgen_malloc), a = Fe, l = ye(t, Re.__wbindgen_malloc), s = Fe, u = Re.computeMimsUnitValues(i, o, c, a, l, s, _, r);
	if (u[3]) throw ke(u[2]);
	var w = re(u[0], u[1]).slice();
	return Re.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function m(n) {
	let e, t;
	try {
		const i = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), o = Fe, c = Re.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ke(c[2]);
		return e = _, t = r, ue(_, r);
	} finally {
		Re.__wbindgen_free(e, t, 1);
	}
}
function h(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), y = Fe, v = ye(e, Re.__wbindgen_malloc), k = Fe, A = he(t, Re.__wbindgen_malloc), x = Fe, C = ye(_, Re.__wbindgen_malloc), S = Fe, R = he(r, Re.__wbindgen_malloc), F = Fe, P = pe(i, Re.__wbindgen_malloc), M = Fe, U = he(o, Re.__wbindgen_malloc), I = Fe, W = pe(c, Re.__wbindgen_malloc), z = Fe, B = he(a, Re.__wbindgen_malloc), D = Fe, O = ye(l, Re.__wbindgen_malloc), N = Fe, j = he(s, Re.__wbindgen_malloc), G = Fe, E = ye(u, Re.__wbindgen_malloc), T = Fe, V = he(w, Re.__wbindgen_malloc), L = Fe, X = ye(g, Re.__wbindgen_malloc), q = Fe, H = he(b, Re.__wbindgen_malloc), Z = Fe, $ = ye(f, Re.__wbindgen_malloc), Y = Fe, K = he(d, Re.__wbindgen_malloc), J = Fe, Q = pe(m, Re.__wbindgen_malloc), nn = Fe, en = he(h, Re.__wbindgen_malloc), tn = Fe, _n = Re.computeNightDifficultyTyped(p, y, v, k, A, x, C, S, R, F, P, M, U, I, W, z, B, D, O, N, j, G, E, T, V, L, X, q, H, Z, $, Y, K, J, Q, nn, en, tn);
	if (_n[2]) throw ke(_n[1]);
	return ke(_n[0]);
}
function p(n) {
	let e, t;
	try {
		const i = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), o = Fe, c = Re.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ke(c[2]);
		return e = _, t = r, ue(_, r);
	} finally {
		Re.__wbindgen_free(e, t, 1);
	}
}
function y(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), y = Fe, v = ye(e, Re.__wbindgen_malloc), k = Fe, A = he(t, Re.__wbindgen_malloc), x = Fe, C = ye(_, Re.__wbindgen_malloc), S = Fe, R = he(r, Re.__wbindgen_malloc), F = Fe, P = pe(i, Re.__wbindgen_malloc), M = Fe, U = he(o, Re.__wbindgen_malloc), I = Fe, W = pe(c, Re.__wbindgen_malloc), z = Fe, B = he(a, Re.__wbindgen_malloc), D = Fe, O = ye(l, Re.__wbindgen_malloc), N = Fe, j = he(s, Re.__wbindgen_malloc), G = Fe, E = ye(u, Re.__wbindgen_malloc), T = Fe, V = he(w, Re.__wbindgen_malloc), L = Fe, X = ye(g, Re.__wbindgen_malloc), q = Fe, H = he(b, Re.__wbindgen_malloc), Z = Fe, $ = ye(f, Re.__wbindgen_malloc), Y = Fe, K = he(d, Re.__wbindgen_malloc), J = Fe, Q = pe(m, Re.__wbindgen_malloc), nn = Fe, en = he(h, Re.__wbindgen_malloc), tn = Fe, _n = Re.computeNightSignalsTyped(p, y, v, k, A, x, C, S, R, F, P, M, U, I, W, z, B, D, O, N, j, G, E, T, V, L, X, q, H, Z, $, Y, K, J, Q, nn, en, tn);
	if (_n[2]) throw ke(_n[1]);
	return ke(_n[0]);
}
function v(n, e, t) {
	const _ = pe(n, Re.__wbindgen_malloc), r = Fe, i = ye(e, Re.__wbindgen_malloc), o = Fe, c = Re.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw ke(c[1]);
	return ke(c[0]);
}
function k(n) {
	const e = Re.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function A(n) {
	const e = pe(n, Re.__wbindgen_malloc), t = Fe;
	Re.csvBufferAppend(e, t);
}
function x(n) {
	Re.csvBufferClear(n);
}
function C(n, e) {
	const t = ye(n, Re.__wbindgen_malloc), _ = Fe, r = ye(e, Re.__wbindgen_malloc), i = Fe, o = Re.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw ke(o[2]);
	var c = oe(o[0], o[1]).slice();
	return Re.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function S(n, e) {
	let t, _;
	try {
		const r = pe(n, Re.__wbindgen_malloc), i = Fe, o = ve(e, Re.__wbindgen_malloc, Re.__wbindgen_realloc), c = Fe, a = Re.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], ue(a[0], a[1]);
	} finally {
		Re.__wbindgen_free(t, _, 1);
	}
}
function R(n) {
	const e = Re.detectGgirHasptVariant(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function F(n, e, t, _) {
	const r = ye(n, Re.__wbindgen_malloc), i = Fe;
	var o = me(e) ? 0 : ve(e, Re.__wbindgen_malloc, Re.__wbindgen_realloc), c = Fe, a = me(t) ? 0 : ye(t, Re.__wbindgen_malloc), l = Fe, s = me(_) ? 0 : ye(_, Re.__wbindgen_malloc), u = Fe;
	return Re.detectHdcza(r, i, o, c, a, l, s, u);
}
function P(n) {
	const e = ye(n, Re.__wbindgen_malloc), t = Fe, _ = Re.detectNonwear(e, t);
	var r = oe(_[0], _[1]).slice();
	return Re.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function M(n) {
	const e = ye(n, Re.__wbindgen_malloc), t = Fe, _ = Re.detectNonwearChoi2011(e, t);
	var r = oe(_[0], _[1]).slice();
	return Re.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function U(n) {
	const e = ye(n, Re.__wbindgen_malloc), t = Fe, _ = Re.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw ke(_[1]);
	return ke(_[0]);
}
function I(n, e) {
	const t = ye(n, Re.__wbindgen_malloc), _ = Fe, r = Re.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw ke(r[2]);
	var i = oe(r[0], r[1]).slice();
	return Re.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function W(n) {
	const e = ye(n, Re.__wbindgen_malloc), t = Fe, _ = Re.detectNonwearChoi2012(e, t);
	var r = oe(_[0], _[1]).slice();
	return Re.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function z(n) {
	const e = ye(n, Re.__wbindgen_malloc), t = Fe, _ = Re.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw ke(_[1]);
	return ke(_[0]);
}
function B(n) {
	const e = ye(n, Re.__wbindgen_malloc), t = Fe, _ = Re.detectNonwearChoiBouts(e, t);
	if (_[2]) throw ke(_[1]);
	return ke(_[0]);
}
function D(n) {
	let e, t;
	try {
		const i = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), o = Fe, c = Re.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ke(c[2]);
		return e = _, t = r, ue(_, r);
	} finally {
		Re.__wbindgen_free(e, t, 1);
	}
}
function O(n, e, t, _, r, i, o) {
	const c = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), a = Fe, l = ve(e, Re.__wbindgen_malloc, Re.__wbindgen_realloc), s = Fe, u = ye(t, Re.__wbindgen_malloc), w = Fe, g = ye(_, Re.__wbindgen_malloc), b = Fe, f = ye(r, Re.__wbindgen_malloc), d = Fe, m = Re.detectNonwearUnifiedBatchTyped(c, a, l, s, u, w, g, b, f, d, i, o);
	if (m[2]) throw ke(m[1]);
	return ke(m[0]);
}
function N(n, e, t, _, r) {
	const i = ye(n, Re.__wbindgen_malloc), o = Fe, c = ye(e, Re.__wbindgen_malloc), a = Fe, l = ye(t, Re.__wbindgen_malloc), s = Fe, u = ye(_, Re.__wbindgen_malloc), w = Fe, g = Re.epochRawData(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw ke(g[1]);
	return ke(g[0]);
}
function j(n, e, t) {
	const _ = ye(n, Re.__wbindgen_malloc), r = Fe, i = ye(e, Re.__wbindgen_malloc), o = Fe, c = Re.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw ke(c[1]);
	return ke(c[0]);
}
function G(n, e) {
	let t, _;
	try {
		const o = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), c = Fe, a = ve(e, Re.__wbindgen_malloc, Re.__wbindgen_realloc), l = Fe, s = Re.executeHeroRuntime(o, c, a, l);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, ke(s[2]);
		return t = r, _ = i, ue(r, i);
	} finally {
		Re.__wbindgen_free(t, _, 1);
	}
}
function E(n) {
	const e = pe(n, Re.__wbindgen_malloc), t = Fe, _ = Re.extractCapsense(e, t);
	if (_[2]) throw ke(_[1]);
	return ke(_[0]);
}
function T(n, e) {
	const t = Re.generateActiwareRestIntervals(n, e);
	if (t[2]) throw ke(t[1]);
	return ke(t[0]);
}
function V() {
	const n = Re.getComputeCapabilitiesV1();
	if (n[2]) throw ke(n[1]);
	return ke(n[0]);
}
function L() {
	Re.installPanicHook();
}
function X(n) {
	const e = pe(n, Re.__wbindgen_malloc), t = Fe;
	return 0 !== Re.isGeneactivFormat(e, t);
}
function q(n, e, t, _) {
	const r = ye(n, Re.__wbindgen_malloc), i = Fe, o = ye(e, Re.__wbindgen_malloc), c = Fe, a = ye(t, Re.__wbindgen_malloc), l = Fe, s = Re.lstmSpectralFeatures30s(r, i, o, c, a, l, _);
	if (s[2]) throw ke(s[1]);
	return ke(s[0]);
}
function H(n, e, t, _, r) {
	const i = ye(n, Re.__wbindgen_malloc), o = Fe, c = ye(e, Re.__wbindgen_malloc), a = Fe, l = ye(t, Re.__wbindgen_malloc), s = Fe, u = Re.neishabouriCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw ke(u[1]);
	return ke(u[0]);
}
function Z(n, e) {
	const t = pe(n, Re.__wbindgen_malloc), _ = Fe, r = Re.parseActigraphCsv(t, _, e);
	if (r[2]) throw ke(r[1]);
	return ke(r[0]);
}
function $(n) {
	const e = Re.parseActigraphCsvBuffered(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function Y(n, e, t, _) {
	const r = pe(n, Re.__wbindgen_malloc), i = Fe;
	var o = me(e) ? 0 : ve(e, Re.__wbindgen_malloc, Re.__wbindgen_realloc), c = Fe, a = me(_) ? 0 : ve(_, Re.__wbindgen_malloc, Re.__wbindgen_realloc), l = Fe;
	const s = Re.parseAw5(r, i, o, c, me(t) ? 0 : te(t), a, l);
	if (s[2]) throw ke(s[1]);
	return ke(s[0]);
}
function K(n) {
	const e = pe(n, Re.__wbindgen_malloc), t = Fe, _ = Re.parseCwa(e, t);
	if (_[2]) throw ke(_[1]);
	return ke(_[0]);
}
function J(n, e) {
	const t = pe(n, Re.__wbindgen_malloc), _ = Fe, r = ve(e, Re.__wbindgen_malloc, Re.__wbindgen_realloc), i = Fe, o = Re.parseEpochSeries(t, _, r, i);
	if (o[2]) throw ke(o[1]);
	return ke(o[0]);
}
function Q(n) {
	const e = pe(n, Re.__wbindgen_malloc), t = Fe, _ = Re.parseGeneactivBin(e, t);
	if (_[2]) throw ke(_[1]);
	return ke(_[0]);
}
function nn(n) {
	const e = pe(n, Re.__wbindgen_malloc), t = Fe, _ = Re.parseGeneactivCsv(e, t);
	if (_[2]) throw ke(_[1]);
	return ke(_[0]);
}
function en() {
	const n = Re.parseGeneactivCsvBuffered();
	if (n[2]) throw ke(n[1]);
	return ke(n[0]);
}
function tn(n) {
	const e = pe(n, Re.__wbindgen_malloc), t = Fe, _ = Re.parseGt3x(e, t);
	if (_[2]) throw ke(_[1]);
	return ke(_[0]);
}
function _n(n) {
	let e, t;
	try {
		const i = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), o = Fe, c = Re.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ke(c[2]);
		return e = _, t = r, ue(_, r);
	} finally {
		Re.__wbindgen_free(e, t, 1);
	}
}
function rn(n, e, t, _, r, i) {
	const o = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), c = Fe, a = ye(e, Re.__wbindgen_malloc), l = Fe, s = ye(t, Re.__wbindgen_malloc), u = Fe, w = pe(_, Re.__wbindgen_malloc), g = Fe, b = pe(r, Re.__wbindgen_malloc), f = Fe, d = ve(i, Re.__wbindgen_malloc, Re.__wbindgen_realloc), m = Fe, h = Re.placeMarkersBatch(o, c, a, l, s, u, w, g, b, f, d, m);
	if (h[2]) throw ke(h[1]);
	return ke(h[0]);
}
function on(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), y = Fe, v = ye(e, Re.__wbindgen_malloc), k = Fe, A = he(t, Re.__wbindgen_malloc), x = Fe, C = ye(_, Re.__wbindgen_malloc), S = Fe, R = he(r, Re.__wbindgen_malloc), F = Fe, P = pe(i, Re.__wbindgen_malloc), M = Fe, U = he(o, Re.__wbindgen_malloc), I = Fe, W = pe(c, Re.__wbindgen_malloc), z = Fe, B = he(a, Re.__wbindgen_malloc), D = Fe, O = ye(l, Re.__wbindgen_malloc), N = Fe, j = he(s, Re.__wbindgen_malloc), G = Fe, E = ye(u, Re.__wbindgen_malloc), T = Fe, V = he(w, Re.__wbindgen_malloc), L = Fe, X = ye(g, Re.__wbindgen_malloc), q = Fe, H = he(b, Re.__wbindgen_malloc), Z = Fe, $ = ye(f, Re.__wbindgen_malloc), Y = Fe, K = he(d, Re.__wbindgen_malloc), J = Fe, Q = pe(m, Re.__wbindgen_malloc), nn = Fe, en = he(h, Re.__wbindgen_malloc), tn = Fe, _n = Re.placeMarkersTyped(p, y, v, k, A, x, C, S, R, F, P, M, U, I, W, z, B, D, O, N, j, G, E, T, V, L, X, q, H, Z, $, Y, K, J, Q, nn, en, tn);
	if (_n[2]) throw ke(_n[1]);
	return ke(_n[0]);
}
function cn(n) {
	let e, t;
	try {
		const i = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), o = Fe, c = Re.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ke(c[2]);
		return e = _, t = r, ue(_, r);
	} finally {
		Re.__wbindgen_free(e, t, 1);
	}
}
function an(n, e, t, _) {
	const r = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), i = Fe, o = ye(e, Re.__wbindgen_malloc), c = Fe, a = ye(t, Re.__wbindgen_malloc), l = Fe, s = pe(_, Re.__wbindgen_malloc), u = Fe, w = Re.placeNonwearMarkersTyped(r, i, o, c, a, l, s, u);
	if (w[2]) throw ke(w[1]);
	return ke(w[0]);
}
function ln(n) {
	const e = Re.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function sn(n) {
	const e = Re.prepareCompactPipelineV1(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function un(n, e, t, _, r, i, o) {
	const c = ye(n, Re.__wbindgen_malloc), a = Fe, l = ye(e, Re.__wbindgen_malloc), s = Fe, u = ye(t, Re.__wbindgen_malloc), w = Fe, g = ye(_, Re.__wbindgen_malloc), b = Fe;
	var f = me(o) ? 0 : ve(o, Re.__wbindgen_malloc, Re.__wbindgen_realloc), d = Fe;
	const m = Re.processGeneactivRaw(c, a, l, s, u, w, g, b, r, i, f, d);
	if (m[2]) throw ke(m[1]);
	return ke(m[0]);
}
function wn(n) {
	const e = pe(n, Re.__wbindgen_malloc), t = Fe, _ = Re.processGt3xFull(e, t);
	if (_[2]) throw ke(_[1]);
	return ke(_[0]);
}
function gn(n, e) {
	const t = pe(n, Re.__wbindgen_malloc), _ = Fe, r = Re.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw ke(r[1]);
	return ke(r[0]);
}
function bn(n) {
	const e = pe(n, Re.__wbindgen_malloc), t = Fe, _ = Re.processGt3xPart1(e, t);
	if (_[2]) throw ke(_[1]);
	return ke(_[0]);
}
function fn(n, e) {
	const t = pe(n, Re.__wbindgen_malloc), _ = Fe, r = Re.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw ke(r[1]);
	return ke(r[0]);
}
function dn(n, e, t, _, r, i) {
	const o = ye(n, Re.__wbindgen_malloc), c = Fe, a = ye(e, Re.__wbindgen_malloc), l = Fe, s = ye(t, Re.__wbindgen_malloc), u = Fe;
	var w = me(i) ? 0 : ve(i, Re.__wbindgen_malloc, Re.__wbindgen_realloc), g = Fe;
	const b = Re.processRawXyz(o, c, a, l, s, u, _, r, w, g);
	if (b[2]) throw ke(b[1]);
	return ke(b[0]);
}
function mn(n, e, t, _, r, i) {
	const o = ye(n, Re.__wbindgen_malloc), c = Fe, a = ye(e, Re.__wbindgen_malloc), l = Fe, s = ye(t, Re.__wbindgen_malloc), u = Fe, w = ye(_, Re.__wbindgen_malloc), g = Fe;
	var b = me(i) ? 0 : ve(i, Re.__wbindgen_malloc, Re.__wbindgen_realloc), f = Fe;
	const d = Re.processRawXyzImputed(o, c, a, l, s, u, w, g, r, b, f);
	if (d[2]) throw ke(d[1]);
	return ke(d[0]);
}
function hn(n, e, t, _, r, i, o) {
	const c = ye(n, Re.__wbindgen_malloc), a = Fe, l = ye(e, Re.__wbindgen_malloc), s = Fe, u = ye(t, Re.__wbindgen_malloc), w = Fe, g = ye(_, Re.__wbindgen_malloc), b = Fe;
	var f = me(i) ? 0 : ve(i, Re.__wbindgen_malloc, Re.__wbindgen_realloc), d = Fe;
	const m = Re.processRawXyzImputedWithEpoch(c, a, l, s, u, w, g, b, r, f, d, o);
	if (m[2]) throw ke(m[1]);
	return ke(m[0]);
}
function pn(n) {
	const e = pe(n, Re.__wbindgen_malloc), t = Fe, _ = Re.readGgirMeta(e, t);
	if (_[2]) throw ke(_[1]);
	return ke(_[0]);
}
function yn() {
	return Re.recommended_chunk_size_mb() >>> 0;
}
function vn(n, e) {
	const t = ye(n, Re.__wbindgen_malloc), _ = Fe, r = ve(e, Re.__wbindgen_malloc, Re.__wbindgen_realloc), i = Fe, o = Re.reduceF64V1(t, _, r, i);
	if (o[2]) throw ke(o[1]);
	return o[0];
}
function kn(n) {
	const e = Re.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function An(n) {
	const e = Re.runCompactPipelineV1(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function xn(n, e) {
	const t = Re.runFullPipeline(n, e);
	if (t[2]) throw ke(t[1]);
	return ke(t[0]);
}
function Cn(n) {
	const e = Re.runFullPipelineOutcomeV1(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function Sn(n) {
	const e = Re.runFullPipelineV1(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function Rn(n, e) {
	const t = Re.runGgirFromEpoch(n, e);
	if (t[2]) throw ke(t[1]);
	return ke(t[0]);
}
function Fn(n) {
	const e = Re.runGgirPart3(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function Pn(n) {
	const e = pe(n, Re.__wbindgen_malloc), t = Fe, _ = Re.runMilestone(e, t);
	if (_[2]) throw ke(_[1]);
	return ke(_[0]);
}
function Mn(n) {
	const e = Re.scoreAllDays(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function Un(n, e) {
	const t = ye(n, Re.__wbindgen_malloc), _ = Fe, r = Re.scoreColeKripke(t, _, e);
	var i = oe(r[0], r[1]).slice();
	return Re.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function In(n) {
	let e, t;
	try {
		const i = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), o = Fe, c = Re.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ke(c[2]);
		return e = _, t = r, ue(_, r);
	} finally {
		Re.__wbindgen_free(e, t, 1);
	}
}
function Wn(n) {
	const e = Re.scoreConsensusMajority(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function zn(n, e, t) {
	const _ = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), r = Fe, i = pe(e, Re.__wbindgen_malloc), o = Fe, c = he(t, Re.__wbindgen_malloc), a = Fe, l = Re.scoreConsensusTyped(_, r, i, o, c, a);
	if (l[2]) throw ke(l[1]);
	return ke(l[0]);
}
function Bn(n) {
	let e, t;
	try {
		const i = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), o = Fe, c = Re.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ke(c[2]);
		return e = _, t = r, ue(_, r);
	} finally {
		Re.__wbindgen_free(e, t, 1);
	}
}
function Dn(n, e, t, _, r, i) {
	const o = ve(n, Re.__wbindgen_malloc, Re.__wbindgen_realloc), c = Fe, a = ye(e, Re.__wbindgen_malloc), l = Fe, s = ye(t, Re.__wbindgen_malloc), u = Fe, w = ye(_, Re.__wbindgen_malloc), g = Fe, b = Re.scoreEpochsTyped(o, c, a, l, s, u, w, g, r, i);
	if (b[2]) throw ke(b[1]);
	return ke(b[0]);
}
function On(n) {
	const e = ye(n, Re.__wbindgen_malloc), t = Fe, _ = Re.scoreGgirHasib(e, t);
	var r = oe(_[0], _[1]).slice();
	return Re.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function Nn(n) {
	const e = Re.scoreGgirHasibVariant(n);
	if (e[2]) throw ke(e[1]);
	return ke(e[0]);
}
function jn(n, e, t) {
	const _ = ye(n, Re.__wbindgen_malloc), r = Fe, i = ye(e, Re.__wbindgen_malloc), o = Fe, c = Re.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw ke(c[1]);
	return ke(c[0]);
}
function Gn(n, e) {
	const t = ye(n, Re.__wbindgen_malloc), _ = Fe, r = Re.scoreSadeh(t, _, e);
	var i = oe(r[0], r[1]).slice();
	return Re.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function En(n) {
	const e = pe(n, Re.__wbindgen_malloc), t = Fe, _ = Re.sha256StreamFeed(e, t);
	if (_[1]) throw ke(_[0]);
}
function Tn() {
	let n, e;
	try {
		const r = Re.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, ke(r[2]);
		return n = t, e = _, ue(t, _);
	} finally {
		Re.__wbindgen_free(n, e, 1);
	}
}
function Vn() {
	Re.sha256StreamStart();
}
function Ln(n, e) {
	const t = Re.sleepWakeScores(n, e);
	if (t[2]) throw ke(t[1]);
	return ke(t[0]);
}
function Xn(n) {
	const e = pe(n, Re.__wbindgen_malloc), t = Fe, _ = Re.streamParseFeed(e, t);
	if (_[2]) throw ke(_[1]);
	return _[0] >>> 0;
}
function qn() {
	const n = Re.streamParseFinish();
	if (n[2]) throw ke(n[1]);
	return e.__wrap(n[0]);
}
function Hn() {
	const e = Re.streamParseFinishChunk();
	if (e[2]) throw ke(e[1]);
	return n.__wrap(e[0]);
}
function Zn(n, e) {
	const t = Re.streamParseStart(n, e);
	if (t[1]) throw ke(t[0]);
}
function $n(n, e) {
	const t = Re.streamParseStartData(n, e);
	if (t[1]) throw ke(t[0]);
}
function Yn(n, e, t) {
	const _ = Re.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw ke(_[0]);
}
function Kn(n, e) {
	const t = pe(n, Re.__wbindgen_malloc), _ = Fe, r = Re.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw ke(r[1]);
	return ke(r[0]);
}
function Jn(n, e, t, _, r) {
	const i = ye(n, Re.__wbindgen_malloc), o = Fe, c = ye(e, Re.__wbindgen_malloc), a = Fe, l = ye(t, Re.__wbindgen_malloc), s = Fe, u = Re.zeroCrossingCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw ke(u[1]);
	return ke(u[0]);
}
function Qn() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(ue(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = ve(String(e), Re.__wbindgen_malloc, Re.__wbindgen_realloc), _ = Fe;
				ae().setInt32(n + 4, _, !0), ae().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				ae().setBigInt64(n + 8, me(t) ? BigInt(0) : t, !0), ae().setInt32(n + 0, !me(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return me(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = ve(_e(e), Re.__wbindgen_malloc, Re.__wbindgen_realloc), _ = Fe;
				ae().setInt32(n + 4, _, !0), ae().setInt32(n + 0, t, !0);
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
				ae().setFloat64(n + 8, me(t) ? 0 : t, !0), ae().setInt32(n + 0, !me(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = me(t) ? 0 : ve(t, Re.__wbindgen_malloc, Re.__wbindgen_realloc), r = Fe;
				ae().setInt32(n + 4, r, !0), ae().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(ue(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return de(function(n, e) {
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
					t = n, _ = e, console.error(ue(n, e));
				} finally {
					Re.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return de(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return de(function(n, e) {
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
				return new Float64Array(re(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(oe(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return de(function(n) {
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
				return de(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(oe(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return de(function(n, e, t) {
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
				const t = ve(e.stack, Re.__wbindgen_malloc, Re.__wbindgen_realloc), _ = Fe;
				ae().setInt32(n + 4, _, !0), ae().setInt32(n + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return me(n) ? 0 : te(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return me(n) ? 0 : te(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return me(n) ? 0 : te(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return me(n) ? 0 : te(n);
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
				return oe(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return ue(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Re.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
const ne = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Re.__wbg_streamchunkresult_free(n >>> 0, 1)), ee = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Re.__wbg_streamparseresult_free(n >>> 0, 1));
function te(n) {
	const e = Re.__externref_table_alloc();
	return Re.__wbindgen_externrefs.set(e, n), e;
}
function _e(n) {
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
		e > 0 && (t += _e(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + _e(n[_]);
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
function re(n, e) {
	return n >>>= 0, se().subarray(n / 8, n / 8 + e);
}
function ie(n, e) {
	return n >>>= 0, ge().subarray(n / 4, n / 4 + e);
}
function oe(n, e) {
	return n >>>= 0, fe().subarray(n / 1, n / 1 + e);
}
let ce = null;
function ae() {
	return (null === ce || !0 === ce.buffer.detached || void 0 === ce.buffer.detached && ce.buffer !== Re.memory.buffer) && (ce = new DataView(Re.memory.buffer)), ce;
}
let le = null;
function se() {
	return null !== le && 0 !== le.byteLength || (le = new Float64Array(Re.memory.buffer)), le;
}
function ue(n, e) {
	return function(n, e) {
		return Ce += e, Ce >= xe && (Ae = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Ae.decode(), Ce = e), Ae.decode(fe().subarray(n, n + e));
	}(n >>>= 0, e);
}
let we = null;
function ge() {
	return null !== we && 0 !== we.byteLength || (we = new Uint32Array(Re.memory.buffer)), we;
}
let be = null;
function fe() {
	return null !== be && 0 !== be.byteLength || (be = new Uint8Array(Re.memory.buffer)), be;
}
function de(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = te(t);
		Re.__wbindgen_exn_store(n);
	}
}
function me(n) {
	return null == n;
}
function he(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return ge().set(n, t / 4), Fe = n.length, t;
}
function pe(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return fe().set(n, t / 1), Fe = n.length, t;
}
function ye(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return se().set(n, t / 8), Fe = n.length, t;
}
function ve(n, e, t) {
	if (void 0 === t) {
		const t = Se.encode(n), _ = e(t.length, 1) >>> 0;
		return fe().subarray(_, _ + t.length).set(t), Fe = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = fe();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = fe().subarray(r + o, r + _);
		o += Se.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return Fe = o, r;
}
function ke(n) {
	const e = Re.__wbindgen_externrefs.get(n);
	return Re.__externref_table_dealloc(n), e;
}
let Ae = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
Ae.decode();
const xe = 2146435072;
let Ce = 0;
const Se = new TextEncoder();
"encodeInto" in Se || (Se.encodeInto = function(n, e) {
	const t = Se.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let Re, Fe = 0;
function Pe(n, e) {
	return Re = n.exports, ce = null, le = null, we = null, be = null, Re.__wbindgen_start(), Re;
}
function Me(n) {
	if (void 0 !== Re) return Re;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = Qn();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Pe(new WebAssembly.Instance(n, e));
}
async function Ue(n) {
	if (void 0 !== Re) return Re;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-Cs5uHUPZ.wasm", "" + import.meta.url));
	const e = Qn();
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
	return Pe(t);
}
export { n as StreamChunkResult, e as StreamParseResult, t as actiwareSleepIntervals, _ as actoursVersion, r as aggregateEpochSeries, i as analyzePhysicalActivityDay, o as classifyActimetricPreschoolWristRf, c as classifyActimetricPreschoolWristRfLagLead, a as classifyActimetricPreschoolWristRfLagLeadCalibrated, l as computeAnglez5s, s as computeCircadian, u as computeCircadianTyped, w as computeEnmo5s, g as computeMimsUnit, b as computeMimsUnitDataframe, f as computeMimsUnitTimingBreakdown, d as computeMimsUnitValues, m as computeNightDifficulty, h as computeNightDifficultyTyped, p as computeNightSignals, y as computeNightSignalsTyped, v as computeSleepMetrics, k as configureComputeMemoryBudgetV1, A as csvBufferAppend, x as csvBufferClear, Ue as default, C as detectDetachFromAccelerationG, S as detectDeviceFormat, R as detectGgirHasptVariant, F as detectHdcza, P as detectNonwear, M as detectNonwearChoi2011, U as detectNonwearChoi2011Bouts, I as detectNonwearChoi2011Epoch, W as detectNonwearChoi2012, z as detectNonwearChoi2012Bouts, B as detectNonwearChoiBouts, D as detectNonwearUnified, O as detectNonwearUnifiedBatchTyped, N as epochRawData, j as epochWithBandpass, G as executeHeroRuntime, E as extractCapsense, T as generateActiwareRestIntervals, V as getComputeCapabilitiesV1, Me as initSync, L as installPanicHook, X as isGeneactivFormat, q as lstmSpectralFeatures30s, H as neishabouriCounts, Z as parseActigraphCsv, $ as parseActigraphCsvBuffered, Y as parseAw5, K as parseCwa, J as parseEpochSeries, Q as parseGeneactivBin, nn as parseGeneactivCsv, en as parseGeneactivCsvBuffered, tn as parseGt3x, _n as placeMarkers, rn as placeMarkersBatch, on as placeMarkersTyped, cn as placeNonwearMarkers, an as placeNonwearMarkersTyped, ln as prepareCompactPipelineOutcomeV1, sn as prepareCompactPipelineV1, un as processGeneactivRaw, wn as processGt3xFull, gn as processGt3xFullWithEpoch, bn as processGt3xPart1, fn as processGt3xPart1WithEpoch, dn as processRawXyz, mn as processRawXyzImputed, hn as processRawXyzImputedWithEpoch, pn as readGgirMeta, yn as recommended_chunk_size_mb, vn as reduceF64V1, kn as runCompactPipelineOutcomeV1, An as runCompactPipelineV1, xn as runFullPipeline, Cn as runFullPipelineOutcomeV1, Sn as runFullPipelineV1, Rn as runGgirFromEpoch, Fn as runGgirPart3, Pn as runMilestone, Mn as scoreAllDays, Un as scoreColeKripke, In as scoreConsensus, Wn as scoreConsensusMajority, zn as scoreConsensusTyped, Bn as scoreEpochs, Dn as scoreEpochsTyped, On as scoreGgirHasib, Nn as scoreGgirHasibVariant, jn as scoreGgirSib, Gn as scoreSadeh, En as sha256StreamFeed, Tn as sha256StreamFinish, Vn as sha256StreamStart, Ln as sleepWakeScores, Xn as streamParseFeed, qn as streamParseFinish, Hn as streamParseFinishChunk, Zn as streamParseStart, $n as streamParseStartData, Yn as streamParseStartWithEpoch, Kn as summarizeActimetricPreschoolWristRfClasses, Jn as zeroCrossingCounts };
