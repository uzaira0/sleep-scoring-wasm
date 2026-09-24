var n = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, te.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, te.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Me.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Me.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Me.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Me.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Me.streamchunkresult_axisX(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Me.streamchunkresult_axisY(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Me.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Me.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Me.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ge(n[0], n[1]).slice(), Me.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Me.streamchunkresult_counts(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Me.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Me.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Me.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return Me.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Me.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Me.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Me.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Me.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ge(n[0], n[1]).slice(), Me.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Me.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Me.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Me.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Me.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Me.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Me.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Me.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = Me.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Me.streamchunkresult_temperature(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Me.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Me.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Me.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Me.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Me.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Me.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, _e.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, _e.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Me.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Me.streamparseresult_axisX(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Me.streamparseresult_axisY(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Me.streamparseresult_axisZ(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Me.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Me.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ge(n[0], n[1]).slice(), Me.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return Me.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== Me.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Me.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Me.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Me.streamparseresult_temperature(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Me.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Me.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = oe(n[0], n[1]).slice();
		return Me.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n, e, t) {
	const _ = Me.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function _() {
	let n, e;
	try {
		const t = Me.actoursVersion();
		return n = t[0], e = t[1], ge(t[0], t[1]);
	} finally {
		Me.__wbindgen_free(n, e, 1);
	}
}
function r(n) {
	const e = Me.aggregateEpochSeries(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function i(n) {
	let e, t;
	try {
		const i = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), o = Pe, c = Me.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, ge(_, r);
	} finally {
		Me.__wbindgen_free(e, t, 1);
	}
}
function o(n, e, t, _) {
	const r = ke(n, Me.__wbindgen_malloc), i = Pe, o = ke(e, Me.__wbindgen_malloc), c = Pe, a = ke(t, Me.__wbindgen_malloc), l = Pe, s = Me.classifyActimetricPreschoolWristRf(r, i, o, c, a, l, _);
	if (s[3]) throw Re(s[2]);
	var u = ae(s[0], s[1]).slice();
	return Me.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function c(n, e, t, _) {
	const r = ke(n, Me.__wbindgen_malloc), i = Pe, o = ke(e, Me.__wbindgen_malloc), c = Pe, a = ke(t, Me.__wbindgen_malloc), l = Pe, s = Me.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, l, _);
	if (s[3]) throw Re(s[2]);
	var u = ae(s[0], s[1]).slice();
	return Me.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function a(n, e, t, _) {
	const r = ke(n, Me.__wbindgen_malloc), i = Pe, o = ke(e, Me.__wbindgen_malloc), c = Pe, a = ke(t, Me.__wbindgen_malloc), l = Pe, s = Me.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, l, _);
	if (s[3]) throw Re(s[2]);
	var u = ae(s[0], s[1]).slice();
	return Me.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function l(n, e, t, _) {
	const r = ke(n, Me.__wbindgen_malloc), i = Pe, o = ke(e, Me.__wbindgen_malloc), c = Pe, a = ke(t, Me.__wbindgen_malloc), l = Pe, s = Me.computeAnglez5s(r, i, o, c, a, l, _);
	var u = oe(s[0], s[1]).slice();
	return Me.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function s(n) {
	let e, t;
	try {
		const i = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), o = Pe, c = Me.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, ge(_, r);
	} finally {
		Me.__wbindgen_free(e, t, 1);
	}
}
function u(n, e, t, _, r, i, o) {
	const c = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), a = Pe, l = ke(e, Me.__wbindgen_malloc), s = Pe, u = ye(t, Me.__wbindgen_malloc), w = Pe, g = ke(_, Me.__wbindgen_malloc), b = Pe, f = ye(r, Me.__wbindgen_malloc), d = Pe, m = ve(i, Me.__wbindgen_malloc), h = Pe, p = ye(o, Me.__wbindgen_malloc), y = Pe, v = Me.computeCircadianTyped(c, a, l, s, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw Re(v[1]);
	return Re(v[0]);
}
function w(n, e, t, _) {
	const r = ke(n, Me.__wbindgen_malloc), i = Pe, o = ke(e, Me.__wbindgen_malloc), c = Pe, a = ke(t, Me.__wbindgen_malloc), l = Pe, s = Me.computeEnmo5s(r, i, o, c, a, l, _);
	var u = oe(s[0], s[1]).slice();
	return Me.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function g(n, e, t, _, r) {
	const i = ke(n, Me.__wbindgen_malloc), o = Pe, c = ke(e, Me.__wbindgen_malloc), a = Pe, l = ke(t, Me.__wbindgen_malloc), s = Pe, u = Me.computeMimsUnit(i, o, c, a, l, s, _, r);
	if (u[2]) throw Re(u[1]);
	return Re(u[0]);
}
function b(n, e, t, _, r) {
	const i = ke(n, Me.__wbindgen_malloc), o = Pe, c = ke(e, Me.__wbindgen_malloc), a = Pe, l = ke(t, Me.__wbindgen_malloc), s = Pe, u = ke(_, Me.__wbindgen_malloc), w = Pe, g = Me.computeMimsUnitDataframe(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw Re(g[1]);
	return Re(g[0]);
}
function f(n, e, t, _, r) {
	const i = ke(n, Me.__wbindgen_malloc), o = Pe, c = ke(e, Me.__wbindgen_malloc), a = Pe, l = ke(t, Me.__wbindgen_malloc), s = Pe, u = Me.computeMimsUnitTimingBreakdown(i, o, c, a, l, s, _, r);
	if (u[2]) throw Re(u[1]);
	return Re(u[0]);
}
function d(n, e, t, _, r) {
	const i = ke(n, Me.__wbindgen_malloc), o = Pe, c = ke(e, Me.__wbindgen_malloc), a = Pe, l = ke(t, Me.__wbindgen_malloc), s = Pe, u = Me.computeMimsUnitValues(i, o, c, a, l, s, _, r);
	if (u[3]) throw Re(u[2]);
	var w = oe(u[0], u[1]).slice();
	return Me.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function m(n) {
	let e, t;
	try {
		const i = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), o = Pe, c = Me.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, ge(_, r);
	} finally {
		Me.__wbindgen_free(e, t, 1);
	}
}
function h(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), y = Pe, v = ke(e, Me.__wbindgen_malloc), k = Pe, A = ye(t, Me.__wbindgen_malloc), R = Pe, x = ke(_, Me.__wbindgen_malloc), S = Pe, C = ye(r, Me.__wbindgen_malloc), F = Pe, M = ve(i, Me.__wbindgen_malloc), P = Pe, U = ye(o, Me.__wbindgen_malloc), I = Pe, D = ve(c, Me.__wbindgen_malloc), W = Pe, z = ye(a, Me.__wbindgen_malloc), B = Pe, O = ke(l, Me.__wbindgen_malloc), G = Pe, N = ye(s, Me.__wbindgen_malloc), j = Pe, E = ke(u, Me.__wbindgen_malloc), T = Pe, V = ye(w, Me.__wbindgen_malloc), L = Pe, X = ke(g, Me.__wbindgen_malloc), q = Pe, H = ye(b, Me.__wbindgen_malloc), Y = Pe, $ = ke(f, Me.__wbindgen_malloc), Z = Pe, K = ye(d, Me.__wbindgen_malloc), J = Pe, Q = ve(m, Me.__wbindgen_malloc), nn = Pe, en = ye(h, Me.__wbindgen_malloc), tn = Pe, _n = Me.computeNightDifficultyTyped(p, y, v, k, A, R, x, S, C, F, M, P, U, I, D, W, z, B, O, G, N, j, E, T, V, L, X, q, H, Y, $, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw Re(_n[1]);
	return Re(_n[0]);
}
function p(n) {
	let e, t;
	try {
		const i = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), o = Pe, c = Me.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, ge(_, r);
	} finally {
		Me.__wbindgen_free(e, t, 1);
	}
}
function y(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), y = Pe, v = ke(e, Me.__wbindgen_malloc), k = Pe, A = ye(t, Me.__wbindgen_malloc), R = Pe, x = ke(_, Me.__wbindgen_malloc), S = Pe, C = ye(r, Me.__wbindgen_malloc), F = Pe, M = ve(i, Me.__wbindgen_malloc), P = Pe, U = ye(o, Me.__wbindgen_malloc), I = Pe, D = ve(c, Me.__wbindgen_malloc), W = Pe, z = ye(a, Me.__wbindgen_malloc), B = Pe, O = ke(l, Me.__wbindgen_malloc), G = Pe, N = ye(s, Me.__wbindgen_malloc), j = Pe, E = ke(u, Me.__wbindgen_malloc), T = Pe, V = ye(w, Me.__wbindgen_malloc), L = Pe, X = ke(g, Me.__wbindgen_malloc), q = Pe, H = ye(b, Me.__wbindgen_malloc), Y = Pe, $ = ke(f, Me.__wbindgen_malloc), Z = Pe, K = ye(d, Me.__wbindgen_malloc), J = Pe, Q = ve(m, Me.__wbindgen_malloc), nn = Pe, en = ye(h, Me.__wbindgen_malloc), tn = Pe, _n = Me.computeNightSignalsTyped(p, y, v, k, A, R, x, S, C, F, M, P, U, I, D, W, z, B, O, G, N, j, E, T, V, L, X, q, H, Y, $, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw Re(_n[1]);
	return Re(_n[0]);
}
function v(n, e, t) {
	const _ = ve(n, Me.__wbindgen_malloc), r = Pe, i = ke(e, Me.__wbindgen_malloc), o = Pe, c = Me.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw Re(c[1]);
	return Re(c[0]);
}
function k(n) {
	const e = Me.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function A(n) {
	const e = ve(n, Me.__wbindgen_malloc), t = Pe;
	Me.csvBufferAppend(e, t);
}
function R(n) {
	Me.csvBufferClear(n);
}
function x(n, e) {
	const t = ke(n, Me.__wbindgen_malloc), _ = Pe, r = ke(e, Me.__wbindgen_malloc), i = Pe, o = Me.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw Re(o[2]);
	var c = ae(o[0], o[1]).slice();
	return Me.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function S(n, e) {
	let t, _;
	try {
		const r = ve(n, Me.__wbindgen_malloc), i = Pe, o = Ae(e, Me.__wbindgen_malloc, Me.__wbindgen_realloc), c = Pe, a = Me.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], ge(a[0], a[1]);
	} finally {
		Me.__wbindgen_free(t, _, 1);
	}
}
function C(n) {
	const e = Me.detectGgirHasptVariant(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function F(n, e, t, _) {
	const r = ke(n, Me.__wbindgen_malloc), i = Pe;
	var o = pe(e) ? 0 : Ae(e, Me.__wbindgen_malloc, Me.__wbindgen_realloc), c = Pe, a = pe(t) ? 0 : ke(t, Me.__wbindgen_malloc), l = Pe, s = pe(_) ? 0 : ke(_, Me.__wbindgen_malloc), u = Pe;
	return Me.detectHdcza(r, i, o, c, a, l, s, u);
}
function M(n) {
	const e = ke(n, Me.__wbindgen_malloc), t = Pe, _ = Me.detectNonwear(e, t);
	var r = ae(_[0], _[1]).slice();
	return Me.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function P(n) {
	const e = ke(n, Me.__wbindgen_malloc), t = Pe, _ = Me.detectNonwearChoi2011(e, t);
	var r = ae(_[0], _[1]).slice();
	return Me.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function U(n) {
	const e = ke(n, Me.__wbindgen_malloc), t = Pe, _ = Me.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function I(n, e) {
	const t = ke(n, Me.__wbindgen_malloc), _ = Pe, r = Me.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw Re(r[2]);
	var i = ae(r[0], r[1]).slice();
	return Me.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function D(n) {
	const e = ke(n, Me.__wbindgen_malloc), t = Pe, _ = Me.detectNonwearChoi2012(e, t);
	var r = ae(_[0], _[1]).slice();
	return Me.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function W(n) {
	const e = ke(n, Me.__wbindgen_malloc), t = Pe, _ = Me.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function z(n) {
	const e = ke(n, Me.__wbindgen_malloc), t = Pe, _ = Me.detectNonwearChoiBouts(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function B(n) {
	let e, t;
	try {
		const i = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), o = Pe, c = Me.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, ge(_, r);
	} finally {
		Me.__wbindgen_free(e, t, 1);
	}
}
function O(n, e, t, _, r, i, o) {
	const c = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), a = Pe, l = Ae(e, Me.__wbindgen_malloc, Me.__wbindgen_realloc), s = Pe, u = ke(t, Me.__wbindgen_malloc), w = Pe, g = ke(_, Me.__wbindgen_malloc), b = Pe, f = ke(r, Me.__wbindgen_malloc), d = Pe, m = Me.detectNonwearUnifiedBatchTyped(c, a, l, s, u, w, g, b, f, d, i, o);
	if (m[2]) throw Re(m[1]);
	return Re(m[0]);
}
function G(n, e, t, _, r) {
	const i = ke(n, Me.__wbindgen_malloc), o = Pe, c = ke(e, Me.__wbindgen_malloc), a = Pe, l = ke(t, Me.__wbindgen_malloc), s = Pe, u = ke(_, Me.__wbindgen_malloc), w = Pe, g = Me.epochRawData(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw Re(g[1]);
	return Re(g[0]);
}
function N(n, e, t) {
	const _ = ke(n, Me.__wbindgen_malloc), r = Pe, i = ke(e, Me.__wbindgen_malloc), o = Pe, c = Me.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw Re(c[1]);
	return Re(c[0]);
}
function j(n, e) {
	let t, _;
	try {
		const o = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), c = Pe, a = Ae(e, Me.__wbindgen_malloc, Me.__wbindgen_realloc), l = Pe, s = Me.executeHeroRuntime(o, c, a, l);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Re(s[2]);
		return t = r, _ = i, ge(r, i);
	} finally {
		Me.__wbindgen_free(t, _, 1);
	}
}
function E(n) {
	const e = ve(n, Me.__wbindgen_malloc), t = Pe, _ = Me.extractCapsense(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function T(n, e) {
	const t = Me.generateActiwareRestIntervals(n, e);
	if (t[2]) throw Re(t[1]);
	return Re(t[0]);
}
function V() {
	const n = Me.getComputeCapabilitiesV1();
	if (n[2]) throw Re(n[1]);
	return Re(n[0]);
}
function L(n) {
	let e, t;
	try {
		const i = ve(n, Me.__wbindgen_malloc), o = Pe, c = Me.identifyGgirRData(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, ge(_, r);
	} finally {
		Me.__wbindgen_free(e, t, 1);
	}
}
function X() {
	Me.installPanicHook();
}
function q(n) {
	const e = ve(n, Me.__wbindgen_malloc), t = Pe;
	return 0 !== Me.isGeneactivFormat(e, t);
}
function H(n, e, t, _) {
	const r = ke(n, Me.__wbindgen_malloc), i = Pe, o = ke(e, Me.__wbindgen_malloc), c = Pe, a = ke(t, Me.__wbindgen_malloc), l = Pe, s = Me.lstmSpectralFeatures30s(r, i, o, c, a, l, _);
	if (s[2]) throw Re(s[1]);
	return Re(s[0]);
}
function Y(n, e, t, _, r) {
	const i = ke(n, Me.__wbindgen_malloc), o = Pe, c = ke(e, Me.__wbindgen_malloc), a = Pe, l = ke(t, Me.__wbindgen_malloc), s = Pe, u = Me.neishabouriCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw Re(u[1]);
	return Re(u[0]);
}
function $(n, e) {
	const t = ve(n, Me.__wbindgen_malloc), _ = Pe, r = Me.parseActigraphCsv(t, _, e);
	if (r[2]) throw Re(r[1]);
	return Re(r[0]);
}
function Z(n) {
	const e = Me.parseActigraphCsvBuffered(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function K(n, e, t, _) {
	const r = ve(n, Me.__wbindgen_malloc), i = Pe;
	var o = pe(e) ? 0 : Ae(e, Me.__wbindgen_malloc, Me.__wbindgen_realloc), c = Pe, a = pe(_) ? 0 : Ae(_, Me.__wbindgen_malloc, Me.__wbindgen_realloc), l = Pe;
	const s = Me.parseAw5(r, i, o, c, pe(t) ? 0 : re(t), a, l);
	if (s[2]) throw Re(s[1]);
	return Re(s[0]);
}
function J(n) {
	const e = ve(n, Me.__wbindgen_malloc), t = Pe, _ = Me.parseCwa(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function Q(n, e) {
	const t = ve(n, Me.__wbindgen_malloc), _ = Pe, r = Ae(e, Me.__wbindgen_malloc, Me.__wbindgen_realloc), i = Pe, o = Me.parseEpochSeries(t, _, r, i);
	if (o[2]) throw Re(o[1]);
	return Re(o[0]);
}
function nn(n) {
	const e = ve(n, Me.__wbindgen_malloc), t = Pe, _ = Me.parseGeneactivBin(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function en(n) {
	const e = ve(n, Me.__wbindgen_malloc), t = Pe, _ = Me.parseGeneactivCsv(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function tn() {
	const n = Me.parseGeneactivCsvBuffered();
	if (n[2]) throw Re(n[1]);
	return Re(n[0]);
}
function _n(n) {
	const e = ve(n, Me.__wbindgen_malloc), t = Pe, _ = Me.parseGt3x(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function rn(n) {
	let e, t;
	try {
		const i = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), o = Pe, c = Me.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, ge(_, r);
	} finally {
		Me.__wbindgen_free(e, t, 1);
	}
}
function on(n, e, t, _, r, i) {
	const o = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), c = Pe, a = ke(e, Me.__wbindgen_malloc), l = Pe, s = ke(t, Me.__wbindgen_malloc), u = Pe, w = ve(_, Me.__wbindgen_malloc), g = Pe, b = ve(r, Me.__wbindgen_malloc), f = Pe, d = Ae(i, Me.__wbindgen_malloc, Me.__wbindgen_realloc), m = Pe, h = Me.placeMarkersBatch(o, c, a, l, s, u, w, g, b, f, d, m);
	if (h[2]) throw Re(h[1]);
	return Re(h[0]);
}
function cn(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), y = Pe, v = ke(e, Me.__wbindgen_malloc), k = Pe, A = ye(t, Me.__wbindgen_malloc), R = Pe, x = ke(_, Me.__wbindgen_malloc), S = Pe, C = ye(r, Me.__wbindgen_malloc), F = Pe, M = ve(i, Me.__wbindgen_malloc), P = Pe, U = ye(o, Me.__wbindgen_malloc), I = Pe, D = ve(c, Me.__wbindgen_malloc), W = Pe, z = ye(a, Me.__wbindgen_malloc), B = Pe, O = ke(l, Me.__wbindgen_malloc), G = Pe, N = ye(s, Me.__wbindgen_malloc), j = Pe, E = ke(u, Me.__wbindgen_malloc), T = Pe, V = ye(w, Me.__wbindgen_malloc), L = Pe, X = ke(g, Me.__wbindgen_malloc), q = Pe, H = ye(b, Me.__wbindgen_malloc), Y = Pe, $ = ke(f, Me.__wbindgen_malloc), Z = Pe, K = ye(d, Me.__wbindgen_malloc), J = Pe, Q = ve(m, Me.__wbindgen_malloc), nn = Pe, en = ye(h, Me.__wbindgen_malloc), tn = Pe, _n = Me.placeMarkersTyped(p, y, v, k, A, R, x, S, C, F, M, P, U, I, D, W, z, B, O, G, N, j, E, T, V, L, X, q, H, Y, $, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw Re(_n[1]);
	return Re(_n[0]);
}
function an(n) {
	let e, t;
	try {
		const i = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), o = Pe, c = Me.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, ge(_, r);
	} finally {
		Me.__wbindgen_free(e, t, 1);
	}
}
function ln(n, e, t, _) {
	const r = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), i = Pe, o = ke(e, Me.__wbindgen_malloc), c = Pe, a = ke(t, Me.__wbindgen_malloc), l = Pe, s = ve(_, Me.__wbindgen_malloc), u = Pe, w = Me.placeNonwearMarkersTyped(r, i, o, c, a, l, s, u);
	if (w[2]) throw Re(w[1]);
	return Re(w[0]);
}
function sn(n) {
	const e = Me.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function un(n) {
	const e = Me.prepareCompactPipelineV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function wn(n, e, t, _, r, i, o) {
	const c = ke(n, Me.__wbindgen_malloc), a = Pe, l = ke(e, Me.__wbindgen_malloc), s = Pe, u = ke(t, Me.__wbindgen_malloc), w = Pe, g = ke(_, Me.__wbindgen_malloc), b = Pe;
	var f = pe(o) ? 0 : Ae(o, Me.__wbindgen_malloc, Me.__wbindgen_realloc), d = Pe;
	const m = Me.processGeneactivRaw(c, a, l, s, u, w, g, b, r, i, f, d);
	if (m[2]) throw Re(m[1]);
	return Re(m[0]);
}
function gn(n) {
	const e = ve(n, Me.__wbindgen_malloc), t = Pe, _ = Me.processGt3xFull(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function bn(n, e) {
	const t = ve(n, Me.__wbindgen_malloc), _ = Pe, r = Me.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw Re(r[1]);
	return Re(r[0]);
}
function fn(n) {
	const e = ve(n, Me.__wbindgen_malloc), t = Pe, _ = Me.processGt3xPart1(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function dn(n, e) {
	const t = ve(n, Me.__wbindgen_malloc), _ = Pe, r = Me.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw Re(r[1]);
	return Re(r[0]);
}
function mn(n, e, t, _, r, i) {
	const o = ke(n, Me.__wbindgen_malloc), c = Pe, a = ke(e, Me.__wbindgen_malloc), l = Pe, s = ke(t, Me.__wbindgen_malloc), u = Pe;
	var w = pe(i) ? 0 : Ae(i, Me.__wbindgen_malloc, Me.__wbindgen_realloc), g = Pe;
	const b = Me.processRawXyz(o, c, a, l, s, u, _, r, w, g);
	if (b[2]) throw Re(b[1]);
	return Re(b[0]);
}
function hn(n, e, t, _, r, i) {
	const o = ke(n, Me.__wbindgen_malloc), c = Pe, a = ke(e, Me.__wbindgen_malloc), l = Pe, s = ke(t, Me.__wbindgen_malloc), u = Pe, w = ke(_, Me.__wbindgen_malloc), g = Pe;
	var b = pe(i) ? 0 : Ae(i, Me.__wbindgen_malloc, Me.__wbindgen_realloc), f = Pe;
	const d = Me.processRawXyzImputed(o, c, a, l, s, u, w, g, r, b, f);
	if (d[2]) throw Re(d[1]);
	return Re(d[0]);
}
function pn(n, e, t, _, r, i, o) {
	const c = ke(n, Me.__wbindgen_malloc), a = Pe, l = ke(e, Me.__wbindgen_malloc), s = Pe, u = ke(t, Me.__wbindgen_malloc), w = Pe, g = ke(_, Me.__wbindgen_malloc), b = Pe;
	var f = pe(i) ? 0 : Ae(i, Me.__wbindgen_malloc, Me.__wbindgen_realloc), d = Pe;
	const m = Me.processRawXyzImputedWithEpoch(c, a, l, s, u, w, g, b, r, f, d, o);
	if (m[2]) throw Re(m[1]);
	return Re(m[0]);
}
function yn(n) {
	const e = ve(n, Me.__wbindgen_malloc), t = Pe, _ = Me.readGgirMeta(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function vn() {
	return Me.recommended_chunk_size_mb() >>> 0;
}
function kn(n, e) {
	const t = ke(n, Me.__wbindgen_malloc), _ = Pe, r = Ae(e, Me.__wbindgen_malloc, Me.__wbindgen_realloc), i = Pe, o = Me.reduceF64V1(t, _, r, i);
	if (o[2]) throw Re(o[1]);
	return o[0];
}
function An(n, e, t, _, r, i, o, c, a, l, s) {
	const u = ve(n, Me.__wbindgen_malloc), w = Pe, g = Ae(e, Me.__wbindgen_malloc, Me.__wbindgen_realloc), b = Pe;
	var f = pe(t) ? 0 : ve(t, Me.__wbindgen_malloc), d = Pe, m = pe(_) ? 0 : ve(_, Me.__wbindgen_malloc), h = Pe, p = pe(r) ? 0 : ve(r, Me.__wbindgen_malloc), y = Pe, v = pe(i) ? 0 : ve(i, Me.__wbindgen_malloc), k = Pe, A = pe(o) ? 0 : ve(o, Me.__wbindgen_malloc), R = Pe, x = pe(c) ? 0 : Ae(c, Me.__wbindgen_malloc, Me.__wbindgen_realloc), S = Pe, C = pe(a) ? 0 : Ae(a, Me.__wbindgen_malloc, Me.__wbindgen_realloc), F = Pe;
	const M = Me.reviewGgirResults(u, w, g, b, f, d, m, h, p, y, v, k, A, R, x, S, C, F, l, s);
	if (M[2]) throw Re(M[1]);
	return Re(M[0]);
}
function Rn(n) {
	const e = Me.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function xn(n) {
	const e = Me.runCompactPipelineV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function Sn(n, e) {
	const t = Me.runFullPipeline(n, e);
	if (t[2]) throw Re(t[1]);
	return Re(t[0]);
}
function Cn(n) {
	const e = Me.runFullPipelineOutcomeV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function Fn(n) {
	const e = Me.runFullPipelineV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function Mn(n, e) {
	const t = Me.runGgirFromEpoch(n, e);
	if (t[2]) throw Re(t[1]);
	return Re(t[0]);
}
function Pn(n) {
	const e = Me.runGgirPart3(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function Un(n) {
	const e = ve(n, Me.__wbindgen_malloc), t = Pe, _ = Me.runMilestone(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function In(n) {
	const e = Me.scoreAllDays(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function Dn(n, e) {
	const t = ke(n, Me.__wbindgen_malloc), _ = Pe, r = Me.scoreColeKripke(t, _, e);
	var i = ae(r[0], r[1]).slice();
	return Me.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Wn(n) {
	let e, t;
	try {
		const i = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), o = Pe, c = Me.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, ge(_, r);
	} finally {
		Me.__wbindgen_free(e, t, 1);
	}
}
function zn(n) {
	const e = Me.scoreConsensusMajority(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function Bn(n, e, t) {
	const _ = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), r = Pe, i = ve(e, Me.__wbindgen_malloc), o = Pe, c = ye(t, Me.__wbindgen_malloc), a = Pe, l = Me.scoreConsensusTyped(_, r, i, o, c, a);
	if (l[2]) throw Re(l[1]);
	return Re(l[0]);
}
function On(n) {
	let e, t;
	try {
		const i = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), o = Pe, c = Me.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, ge(_, r);
	} finally {
		Me.__wbindgen_free(e, t, 1);
	}
}
function Gn(n, e, t, _, r, i) {
	const o = Ae(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), c = Pe, a = ke(e, Me.__wbindgen_malloc), l = Pe, s = ke(t, Me.__wbindgen_malloc), u = Pe, w = ke(_, Me.__wbindgen_malloc), g = Pe, b = Me.scoreEpochsTyped(o, c, a, l, s, u, w, g, r, i);
	if (b[2]) throw Re(b[1]);
	return Re(b[0]);
}
function Nn(n) {
	const e = ke(n, Me.__wbindgen_malloc), t = Pe, _ = Me.scoreGgirHasib(e, t);
	var r = ae(_[0], _[1]).slice();
	return Me.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function jn(n) {
	const e = Me.scoreGgirHasibVariant(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function En(n, e, t) {
	const _ = ke(n, Me.__wbindgen_malloc), r = Pe, i = ke(e, Me.__wbindgen_malloc), o = Pe, c = Me.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw Re(c[1]);
	return Re(c[0]);
}
function Tn(n, e) {
	const t = ke(n, Me.__wbindgen_malloc), _ = Pe, r = Me.scoreSadeh(t, _, e);
	var i = ae(r[0], r[1]).slice();
	return Me.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Vn(n) {
	const e = ve(n, Me.__wbindgen_malloc), t = Pe, _ = Me.sha256StreamFeed(e, t);
	if (_[1]) throw Re(_[0]);
}
function Ln() {
	let n, e;
	try {
		const r = Me.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, Re(r[2]);
		return n = t, e = _, ge(t, _);
	} finally {
		Me.__wbindgen_free(n, e, 1);
	}
}
function Xn() {
	Me.sha256StreamStart();
}
function qn(n, e) {
	const t = Me.sleepWakeScores(n, e);
	if (t[2]) throw Re(t[1]);
	return Re(t[0]);
}
function Hn(n) {
	const e = ve(n, Me.__wbindgen_malloc), t = Pe, _ = Me.streamParseFeed(e, t);
	if (_[2]) throw Re(_[1]);
	return _[0] >>> 0;
}
function Yn() {
	const n = Me.streamParseFinish();
	if (n[2]) throw Re(n[1]);
	return e.__wrap(n[0]);
}
function $n() {
	const e = Me.streamParseFinishChunk();
	if (e[2]) throw Re(e[1]);
	return n.__wrap(e[0]);
}
function Zn(n, e) {
	const t = Me.streamParseStart(n, e);
	if (t[1]) throw Re(t[0]);
}
function Kn(n, e) {
	const t = Me.streamParseStartData(n, e);
	if (t[1]) throw Re(t[0]);
}
function Jn(n, e, t) {
	const _ = Me.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw Re(_[0]);
}
function Qn(n, e) {
	const t = ve(n, Me.__wbindgen_malloc), _ = Pe, r = Me.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw Re(r[1]);
	return Re(r[0]);
}
function ne(n, e, t, _, r) {
	const i = ke(n, Me.__wbindgen_malloc), o = Pe, c = ke(e, Me.__wbindgen_malloc), a = Pe, l = ke(t, Me.__wbindgen_malloc), s = Pe, u = Me.zeroCrossingCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw Re(u[1]);
	return Re(u[0]);
}
function ee() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(ge(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = Ae(String(e), Me.__wbindgen_malloc, Me.__wbindgen_realloc), _ = Pe;
				se().setInt32(n + 4, _, !0), se().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				se().setBigInt64(n + 8, pe(t) ? BigInt(0) : t, !0), se().setInt32(n + 0, !pe(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return pe(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = Ae(ie(e), Me.__wbindgen_malloc, Me.__wbindgen_realloc), _ = Pe;
				se().setInt32(n + 4, _, !0), se().setInt32(n + 0, t, !0);
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
				se().setFloat64(n + 8, pe(t) ? 0 : t, !0), se().setInt32(n + 0, !pe(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = pe(t) ? 0 : Ae(t, Me.__wbindgen_malloc, Me.__wbindgen_realloc), r = Pe;
				se().setInt32(n + 4, r, !0), se().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(ge(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return he(function(n, e) {
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
					t = n, _ = e, console.error(ge(n, e));
				} finally {
					Me.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return he(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return he(function(n, e) {
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
				return new Float64Array(oe(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(ae(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return he(function(n) {
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
				return he(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(ae(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return he(function(n, e, t) {
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
				const t = Ae(e.stack, Me.__wbindgen_malloc, Me.__wbindgen_realloc), _ = Pe;
				se().setInt32(n + 4, _, !0), se().setInt32(n + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return pe(n) ? 0 : re(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return pe(n) ? 0 : re(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return pe(n) ? 0 : re(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return pe(n) ? 0 : re(n);
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
				return ae(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return ge(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Me.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
const te = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Me.__wbg_streamchunkresult_free(n >>> 0, 1)), _e = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Me.__wbg_streamparseresult_free(n >>> 0, 1));
function re(n) {
	const e = Me.__externref_table_alloc();
	return Me.__wbindgen_externrefs.set(e, n), e;
}
function ie(n) {
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
		e > 0 && (t += ie(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + ie(n[_]);
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
function oe(n, e) {
	return n >>>= 0, we().subarray(n / 8, n / 8 + e);
}
function ce(n, e) {
	return n >>>= 0, fe().subarray(n / 4, n / 4 + e);
}
function ae(n, e) {
	return n >>>= 0, me().subarray(n / 1, n / 1 + e);
}
let le = null;
function se() {
	return (null === le || !0 === le.buffer.detached || void 0 === le.buffer.detached && le.buffer !== Me.memory.buffer) && (le = new DataView(Me.memory.buffer)), le;
}
let ue = null;
function we() {
	return null !== ue && 0 !== ue.byteLength || (ue = new Float64Array(Me.memory.buffer)), ue;
}
function ge(n, e) {
	return function(n, e) {
		return Ce += e, Ce >= Se && (xe = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), xe.decode(), Ce = e), xe.decode(me().subarray(n, n + e));
	}(n >>>= 0, e);
}
let be = null;
function fe() {
	return null !== be && 0 !== be.byteLength || (be = new Uint32Array(Me.memory.buffer)), be;
}
let de = null;
function me() {
	return null !== de && 0 !== de.byteLength || (de = new Uint8Array(Me.memory.buffer)), de;
}
function he(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = re(t);
		Me.__wbindgen_exn_store(n);
	}
}
function pe(n) {
	return null == n;
}
function ye(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return fe().set(n, t / 4), Pe = n.length, t;
}
function ve(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return me().set(n, t / 1), Pe = n.length, t;
}
function ke(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return we().set(n, t / 8), Pe = n.length, t;
}
function Ae(n, e, t) {
	if (void 0 === t) {
		const t = Fe.encode(n), _ = e(t.length, 1) >>> 0;
		return me().subarray(_, _ + t.length).set(t), Pe = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = me();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = me().subarray(r + o, r + _);
		o += Fe.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return Pe = o, r;
}
function Re(n) {
	const e = Me.__wbindgen_externrefs.get(n);
	return Me.__externref_table_dealloc(n), e;
}
let xe = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
xe.decode();
const Se = 2146435072;
let Ce = 0;
const Fe = new TextEncoder();
"encodeInto" in Fe || (Fe.encodeInto = function(n, e) {
	const t = Fe.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let Me, Pe = 0;
function Ue(n, e) {
	return Me = n.exports, le = null, ue = null, be = null, de = null, Me.__wbindgen_start(), Me;
}
function Ie(n) {
	if (void 0 !== Me) return Me;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = ee();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Ue(new WebAssembly.Instance(n, e));
}
async function De(n) {
	if (void 0 !== Me) return Me;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-pXYkFKpR.wasm", "" + import.meta.url));
	const e = ee();
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
	return Ue(t);
}
export { n as StreamChunkResult, e as StreamParseResult, t as actiwareSleepIntervals, _ as actoursVersion, r as aggregateEpochSeries, i as analyzePhysicalActivityDay, o as classifyActimetricPreschoolWristRf, c as classifyActimetricPreschoolWristRfLagLead, a as classifyActimetricPreschoolWristRfLagLeadCalibrated, l as computeAnglez5s, s as computeCircadian, u as computeCircadianTyped, w as computeEnmo5s, g as computeMimsUnit, b as computeMimsUnitDataframe, f as computeMimsUnitTimingBreakdown, d as computeMimsUnitValues, m as computeNightDifficulty, h as computeNightDifficultyTyped, p as computeNightSignals, y as computeNightSignalsTyped, v as computeSleepMetrics, k as configureComputeMemoryBudgetV1, A as csvBufferAppend, R as csvBufferClear, De as default, x as detectDetachFromAccelerationG, S as detectDeviceFormat, C as detectGgirHasptVariant, F as detectHdcza, M as detectNonwear, P as detectNonwearChoi2011, U as detectNonwearChoi2011Bouts, I as detectNonwearChoi2011Epoch, D as detectNonwearChoi2012, W as detectNonwearChoi2012Bouts, z as detectNonwearChoiBouts, B as detectNonwearUnified, O as detectNonwearUnifiedBatchTyped, G as epochRawData, N as epochWithBandpass, j as executeHeroRuntime, E as extractCapsense, T as generateActiwareRestIntervals, V as getComputeCapabilitiesV1, L as identifyGgirRData, Ie as initSync, X as installPanicHook, q as isGeneactivFormat, H as lstmSpectralFeatures30s, Y as neishabouriCounts, $ as parseActigraphCsv, Z as parseActigraphCsvBuffered, K as parseAw5, J as parseCwa, Q as parseEpochSeries, nn as parseGeneactivBin, en as parseGeneactivCsv, tn as parseGeneactivCsvBuffered, _n as parseGt3x, rn as placeMarkers, on as placeMarkersBatch, cn as placeMarkersTyped, an as placeNonwearMarkers, ln as placeNonwearMarkersTyped, sn as prepareCompactPipelineOutcomeV1, un as prepareCompactPipelineV1, wn as processGeneactivRaw, gn as processGt3xFull, bn as processGt3xFullWithEpoch, fn as processGt3xPart1, dn as processGt3xPart1WithEpoch, mn as processRawXyz, hn as processRawXyzImputed, pn as processRawXyzImputedWithEpoch, yn as readGgirMeta, vn as recommended_chunk_size_mb, kn as reduceF64V1, An as reviewGgirResults, Rn as runCompactPipelineOutcomeV1, xn as runCompactPipelineV1, Sn as runFullPipeline, Cn as runFullPipelineOutcomeV1, Fn as runFullPipelineV1, Mn as runGgirFromEpoch, Pn as runGgirPart3, Un as runMilestone, In as scoreAllDays, Dn as scoreColeKripke, Wn as scoreConsensus, zn as scoreConsensusMajority, Bn as scoreConsensusTyped, On as scoreEpochs, Gn as scoreEpochsTyped, Nn as scoreGgirHasib, jn as scoreGgirHasibVariant, En as scoreGgirSib, Tn as scoreSadeh, Vn as sha256StreamFeed, Ln as sha256StreamFinish, Xn as sha256StreamStart, qn as sleepWakeScores, Hn as streamParseFeed, Yn as streamParseFinish, $n as streamParseFinishChunk, Zn as streamParseStart, Kn as streamParseStartData, Jn as streamParseStartWithEpoch, Qn as summarizeActimetricPreschoolWristRfClasses, ne as zeroCrossingCounts };
