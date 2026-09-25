var n = class n {
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
		Pe.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Pe.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Pe.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Pe.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Pe.streamchunkresult_axisX(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Pe.streamchunkresult_axisY(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Pe.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Pe.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Pe.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = be(n[0], n[1]).slice(), Pe.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Pe.streamchunkresult_counts(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Pe.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Pe.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Pe.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return Pe.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Pe.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Pe.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Pe.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Pe.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = be(n[0], n[1]).slice(), Pe.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Pe.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Pe.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Pe.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Pe.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Pe.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Pe.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Pe.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = Pe.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Pe.streamchunkresult_temperature(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Pe.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Pe.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Pe.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Pe.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Pe.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Pe.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, re.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, re.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Pe.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Pe.streamparseresult_axisX(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Pe.streamparseresult_axisY(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Pe.streamparseresult_axisZ(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Pe.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Pe.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = be(n[0], n[1]).slice(), Pe.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return Pe.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== Pe.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Pe.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Pe.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Pe.streamparseresult_temperature(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Pe.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Pe.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = ce(n[0], n[1]).slice();
		return Pe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n) {
	const e = Pe.actiwareIntervalStatistics(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function _(n, e, t) {
	const _ = Pe.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function r() {
	let n, e;
	try {
		const t = Pe.actoursVersion();
		return n = t[0], e = t[1], be(t[0], t[1]);
	} finally {
		Pe.__wbindgen_free(n, e, 1);
	}
}
function i(n) {
	const e = Pe.aggregateEpochSeries(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function o(n) {
	let e, t;
	try {
		const i = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), o = Ue, c = Pe.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, be(_, r);
	} finally {
		Pe.__wbindgen_free(e, t, 1);
	}
}
function c(n, e, t, _) {
	const r = Ae(n, Pe.__wbindgen_malloc), i = Ue, o = Ae(e, Pe.__wbindgen_malloc), c = Ue, a = Ae(t, Pe.__wbindgen_malloc), l = Ue, s = Pe.classifyActimetricPreschoolWristRf(r, i, o, c, a, l, _);
	if (s[3]) throw Re(s[2]);
	var u = le(s[0], s[1]).slice();
	return Pe.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function a(n, e, t, _) {
	const r = Ae(n, Pe.__wbindgen_malloc), i = Ue, o = Ae(e, Pe.__wbindgen_malloc), c = Ue, a = Ae(t, Pe.__wbindgen_malloc), l = Ue, s = Pe.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, l, _);
	if (s[3]) throw Re(s[2]);
	var u = le(s[0], s[1]).slice();
	return Pe.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function l(n, e, t, _) {
	const r = Ae(n, Pe.__wbindgen_malloc), i = Ue, o = Ae(e, Pe.__wbindgen_malloc), c = Ue, a = Ae(t, Pe.__wbindgen_malloc), l = Ue, s = Pe.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, l, _);
	if (s[3]) throw Re(s[2]);
	var u = le(s[0], s[1]).slice();
	return Pe.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function s(n, e, t, _) {
	const r = Ae(n, Pe.__wbindgen_malloc), i = Ue, o = Ae(e, Pe.__wbindgen_malloc), c = Ue, a = Ae(t, Pe.__wbindgen_malloc), l = Ue, s = Pe.computeAnglez5s(r, i, o, c, a, l, _);
	var u = ce(s[0], s[1]).slice();
	return Pe.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function u(n) {
	let e, t;
	try {
		const i = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), o = Ue, c = Pe.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, be(_, r);
	} finally {
		Pe.__wbindgen_free(e, t, 1);
	}
}
function w(n, e, t, _, r, i, o) {
	const c = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), a = Ue, l = Ae(e, Pe.__wbindgen_malloc), s = Ue, u = ve(t, Pe.__wbindgen_malloc), w = Ue, g = Ae(_, Pe.__wbindgen_malloc), b = Ue, f = ve(r, Pe.__wbindgen_malloc), d = Ue, m = ke(i, Pe.__wbindgen_malloc), h = Ue, p = ve(o, Pe.__wbindgen_malloc), y = Ue, v = Pe.computeCircadianTyped(c, a, l, s, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw Re(v[1]);
	return Re(v[0]);
}
function g(n, e, t, _) {
	const r = Ae(n, Pe.__wbindgen_malloc), i = Ue, o = Ae(e, Pe.__wbindgen_malloc), c = Ue, a = Ae(t, Pe.__wbindgen_malloc), l = Ue, s = Pe.computeEnmo5s(r, i, o, c, a, l, _);
	var u = ce(s[0], s[1]).slice();
	return Pe.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function b(n, e, t, _, r) {
	const i = Ae(n, Pe.__wbindgen_malloc), o = Ue, c = Ae(e, Pe.__wbindgen_malloc), a = Ue, l = Ae(t, Pe.__wbindgen_malloc), s = Ue, u = Pe.computeMimsUnit(i, o, c, a, l, s, _, r);
	if (u[2]) throw Re(u[1]);
	return Re(u[0]);
}
function f(n, e, t, _, r) {
	const i = Ae(n, Pe.__wbindgen_malloc), o = Ue, c = Ae(e, Pe.__wbindgen_malloc), a = Ue, l = Ae(t, Pe.__wbindgen_malloc), s = Ue, u = Ae(_, Pe.__wbindgen_malloc), w = Ue, g = Pe.computeMimsUnitDataframe(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw Re(g[1]);
	return Re(g[0]);
}
function d(n, e, t, _, r) {
	const i = Ae(n, Pe.__wbindgen_malloc), o = Ue, c = Ae(e, Pe.__wbindgen_malloc), a = Ue, l = Ae(t, Pe.__wbindgen_malloc), s = Ue, u = Pe.computeMimsUnitTimingBreakdown(i, o, c, a, l, s, _, r);
	if (u[2]) throw Re(u[1]);
	return Re(u[0]);
}
function m(n, e, t, _, r) {
	const i = Ae(n, Pe.__wbindgen_malloc), o = Ue, c = Ae(e, Pe.__wbindgen_malloc), a = Ue, l = Ae(t, Pe.__wbindgen_malloc), s = Ue, u = Pe.computeMimsUnitValues(i, o, c, a, l, s, _, r);
	if (u[3]) throw Re(u[2]);
	var w = ce(u[0], u[1]).slice();
	return Pe.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function h(n) {
	let e, t;
	try {
		const i = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), o = Ue, c = Pe.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, be(_, r);
	} finally {
		Pe.__wbindgen_free(e, t, 1);
	}
}
function p(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), y = Ue, v = Ae(e, Pe.__wbindgen_malloc), k = Ue, A = ve(t, Pe.__wbindgen_malloc), x = Ue, R = Ae(_, Pe.__wbindgen_malloc), S = Ue, C = ve(r, Pe.__wbindgen_malloc), F = Ue, M = ke(i, Pe.__wbindgen_malloc), P = Ue, U = ve(o, Pe.__wbindgen_malloc), I = Ue, D = ke(c, Pe.__wbindgen_malloc), B = Ue, W = ve(a, Pe.__wbindgen_malloc), z = Ue, O = Ae(l, Pe.__wbindgen_malloc), G = Ue, N = ve(s, Pe.__wbindgen_malloc), j = Ue, E = Ae(u, Pe.__wbindgen_malloc), T = Ue, V = ve(w, Pe.__wbindgen_malloc), L = Ue, q = Ae(g, Pe.__wbindgen_malloc), X = Ue, H = ve(b, Pe.__wbindgen_malloc), $ = Ue, Y = Ae(f, Pe.__wbindgen_malloc), Z = Ue, K = ve(d, Pe.__wbindgen_malloc), J = Ue, Q = ke(m, Pe.__wbindgen_malloc), nn = Ue, en = ve(h, Pe.__wbindgen_malloc), tn = Ue, _n = Pe.computeNightDifficultyTyped(p, y, v, k, A, x, R, S, C, F, M, P, U, I, D, B, W, z, O, G, N, j, E, T, V, L, q, X, H, $, Y, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw Re(_n[1]);
	return Re(_n[0]);
}
function y(n) {
	let e, t;
	try {
		const i = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), o = Ue, c = Pe.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, be(_, r);
	} finally {
		Pe.__wbindgen_free(e, t, 1);
	}
}
function v(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), y = Ue, v = Ae(e, Pe.__wbindgen_malloc), k = Ue, A = ve(t, Pe.__wbindgen_malloc), x = Ue, R = Ae(_, Pe.__wbindgen_malloc), S = Ue, C = ve(r, Pe.__wbindgen_malloc), F = Ue, M = ke(i, Pe.__wbindgen_malloc), P = Ue, U = ve(o, Pe.__wbindgen_malloc), I = Ue, D = ke(c, Pe.__wbindgen_malloc), B = Ue, W = ve(a, Pe.__wbindgen_malloc), z = Ue, O = Ae(l, Pe.__wbindgen_malloc), G = Ue, N = ve(s, Pe.__wbindgen_malloc), j = Ue, E = Ae(u, Pe.__wbindgen_malloc), T = Ue, V = ve(w, Pe.__wbindgen_malloc), L = Ue, q = Ae(g, Pe.__wbindgen_malloc), X = Ue, H = ve(b, Pe.__wbindgen_malloc), $ = Ue, Y = Ae(f, Pe.__wbindgen_malloc), Z = Ue, K = ve(d, Pe.__wbindgen_malloc), J = Ue, Q = ke(m, Pe.__wbindgen_malloc), nn = Ue, en = ve(h, Pe.__wbindgen_malloc), tn = Ue, _n = Pe.computeNightSignalsTyped(p, y, v, k, A, x, R, S, C, F, M, P, U, I, D, B, W, z, O, G, N, j, E, T, V, L, q, X, H, $, Y, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw Re(_n[1]);
	return Re(_n[0]);
}
function k(n, e, t) {
	const _ = ke(n, Pe.__wbindgen_malloc), r = Ue, i = Ae(e, Pe.__wbindgen_malloc), o = Ue, c = Pe.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw Re(c[1]);
	return Re(c[0]);
}
function A(n) {
	const e = Pe.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function x(n) {
	const e = ke(n, Pe.__wbindgen_malloc), t = Ue;
	Pe.csvBufferAppend(e, t);
}
function R(n) {
	Pe.csvBufferClear(n);
}
function S(n, e) {
	const t = Ae(n, Pe.__wbindgen_malloc), _ = Ue, r = Ae(e, Pe.__wbindgen_malloc), i = Ue, o = Pe.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw Re(o[2]);
	var c = le(o[0], o[1]).slice();
	return Pe.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function C(n, e) {
	let t, _;
	try {
		const r = ke(n, Pe.__wbindgen_malloc), i = Ue, o = xe(e, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), c = Ue, a = Pe.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], be(a[0], a[1]);
	} finally {
		Pe.__wbindgen_free(t, _, 1);
	}
}
function F(n) {
	const e = Pe.detectGgirHasptVariant(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function M(n, e, t, _) {
	const r = Ae(n, Pe.__wbindgen_malloc), i = Ue;
	var o = ye(e) ? 0 : xe(e, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), c = Ue, a = ye(t) ? 0 : Ae(t, Pe.__wbindgen_malloc), l = Ue, s = ye(_) ? 0 : Ae(_, Pe.__wbindgen_malloc), u = Ue;
	return Pe.detectHdcza(r, i, o, c, a, l, s, u);
}
function P(n) {
	const e = Ae(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.detectNonwear(e, t);
	var r = le(_[0], _[1]).slice();
	return Pe.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function U(n) {
	const e = Ae(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.detectNonwearChoi2011(e, t);
	var r = le(_[0], _[1]).slice();
	return Pe.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function I(n) {
	const e = Ae(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function D(n, e) {
	const t = Ae(n, Pe.__wbindgen_malloc), _ = Ue, r = Pe.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw Re(r[2]);
	var i = le(r[0], r[1]).slice();
	return Pe.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function B(n) {
	const e = Ae(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.detectNonwearChoi2012(e, t);
	var r = le(_[0], _[1]).slice();
	return Pe.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function W(n) {
	const e = Ae(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function z(n) {
	const e = Ae(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.detectNonwearChoiBouts(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function O(n) {
	let e, t;
	try {
		const i = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), o = Ue, c = Pe.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, be(_, r);
	} finally {
		Pe.__wbindgen_free(e, t, 1);
	}
}
function G(n, e, t, _, r, i, o) {
	const c = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), a = Ue, l = xe(e, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), s = Ue, u = Ae(t, Pe.__wbindgen_malloc), w = Ue, g = Ae(_, Pe.__wbindgen_malloc), b = Ue, f = Ae(r, Pe.__wbindgen_malloc), d = Ue, m = Pe.detectNonwearUnifiedBatchTyped(c, a, l, s, u, w, g, b, f, d, i, o);
	if (m[2]) throw Re(m[1]);
	return Re(m[0]);
}
function N(n, e, t, _, r) {
	const i = Ae(n, Pe.__wbindgen_malloc), o = Ue, c = Ae(e, Pe.__wbindgen_malloc), a = Ue, l = Ae(t, Pe.__wbindgen_malloc), s = Ue, u = Ae(_, Pe.__wbindgen_malloc), w = Ue, g = Pe.epochRawData(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw Re(g[1]);
	return Re(g[0]);
}
function j(n, e, t) {
	const _ = Ae(n, Pe.__wbindgen_malloc), r = Ue, i = Ae(e, Pe.__wbindgen_malloc), o = Ue, c = Pe.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw Re(c[1]);
	return Re(c[0]);
}
function E(n, e) {
	let t, _;
	try {
		const o = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), c = Ue, a = xe(e, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), l = Ue, s = Pe.executeHeroRuntime(o, c, a, l);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Re(s[2]);
		return t = r, _ = i, be(r, i);
	} finally {
		Pe.__wbindgen_free(t, _, 1);
	}
}
function T(n) {
	const e = ke(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.extractCapsense(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function V(n, e) {
	const t = Pe.generateActiwareRestIntervals(n, e);
	if (t[2]) throw Re(t[1]);
	return Re(t[0]);
}
function L() {
	const n = Pe.getComputeCapabilitiesV1();
	if (n[2]) throw Re(n[1]);
	return Re(n[0]);
}
function q(n) {
	let e, t;
	try {
		const i = ke(n, Pe.__wbindgen_malloc), o = Ue, c = Pe.identifyGgirRData(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, be(_, r);
	} finally {
		Pe.__wbindgen_free(e, t, 1);
	}
}
function X() {
	Pe.installPanicHook();
}
function H(n) {
	const e = ke(n, Pe.__wbindgen_malloc), t = Ue;
	return 0 !== Pe.isGeneactivFormat(e, t);
}
function $(n, e, t, _) {
	const r = Ae(n, Pe.__wbindgen_malloc), i = Ue, o = Ae(e, Pe.__wbindgen_malloc), c = Ue, a = Ae(t, Pe.__wbindgen_malloc), l = Ue, s = Pe.lstmSpectralFeatures30s(r, i, o, c, a, l, _);
	if (s[2]) throw Re(s[1]);
	return Re(s[0]);
}
function Y(n, e, t, _, r) {
	const i = Ae(n, Pe.__wbindgen_malloc), o = Ue, c = Ae(e, Pe.__wbindgen_malloc), a = Ue, l = Ae(t, Pe.__wbindgen_malloc), s = Ue, u = Pe.neishabouriCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw Re(u[1]);
	return Re(u[0]);
}
function Z(n, e) {
	const t = ke(n, Pe.__wbindgen_malloc), _ = Ue, r = Pe.parseActigraphCsv(t, _, e);
	if (r[2]) throw Re(r[1]);
	return Re(r[0]);
}
function K(n) {
	const e = Pe.parseActigraphCsvBuffered(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function J(n, e, t, _) {
	const r = ke(n, Pe.__wbindgen_malloc), i = Ue;
	var o = ye(e) ? 0 : xe(e, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), c = Ue, a = ye(_) ? 0 : xe(_, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), l = Ue;
	const s = Pe.parseAw5(r, i, o, c, ye(t) ? 0 : ie(t), a, l);
	if (s[2]) throw Re(s[1]);
	return Re(s[0]);
}
function Q(n) {
	const e = ke(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.parseCwa(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function nn(n, e) {
	const t = ke(n, Pe.__wbindgen_malloc), _ = Ue, r = xe(e, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), i = Ue, o = Pe.parseEpochSeries(t, _, r, i);
	if (o[2]) throw Re(o[1]);
	return Re(o[0]);
}
function en(n) {
	const e = ke(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.parseGeneactivBin(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function tn(n) {
	const e = ke(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.parseGeneactivCsv(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function _n() {
	const n = Pe.parseGeneactivCsvBuffered();
	if (n[2]) throw Re(n[1]);
	return Re(n[0]);
}
function rn(n) {
	const e = ke(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.parseGt3x(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function on(n) {
	let e, t;
	try {
		const i = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), o = Ue, c = Pe.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, be(_, r);
	} finally {
		Pe.__wbindgen_free(e, t, 1);
	}
}
function cn(n, e, t, _, r, i) {
	const o = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), c = Ue, a = Ae(e, Pe.__wbindgen_malloc), l = Ue, s = Ae(t, Pe.__wbindgen_malloc), u = Ue, w = ke(_, Pe.__wbindgen_malloc), g = Ue, b = ke(r, Pe.__wbindgen_malloc), f = Ue, d = xe(i, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), m = Ue, h = Pe.placeMarkersBatch(o, c, a, l, s, u, w, g, b, f, d, m);
	if (h[2]) throw Re(h[1]);
	return Re(h[0]);
}
function an(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), y = Ue, v = Ae(e, Pe.__wbindgen_malloc), k = Ue, A = ve(t, Pe.__wbindgen_malloc), x = Ue, R = Ae(_, Pe.__wbindgen_malloc), S = Ue, C = ve(r, Pe.__wbindgen_malloc), F = Ue, M = ke(i, Pe.__wbindgen_malloc), P = Ue, U = ve(o, Pe.__wbindgen_malloc), I = Ue, D = ke(c, Pe.__wbindgen_malloc), B = Ue, W = ve(a, Pe.__wbindgen_malloc), z = Ue, O = Ae(l, Pe.__wbindgen_malloc), G = Ue, N = ve(s, Pe.__wbindgen_malloc), j = Ue, E = Ae(u, Pe.__wbindgen_malloc), T = Ue, V = ve(w, Pe.__wbindgen_malloc), L = Ue, q = Ae(g, Pe.__wbindgen_malloc), X = Ue, H = ve(b, Pe.__wbindgen_malloc), $ = Ue, Y = Ae(f, Pe.__wbindgen_malloc), Z = Ue, K = ve(d, Pe.__wbindgen_malloc), J = Ue, Q = ke(m, Pe.__wbindgen_malloc), nn = Ue, en = ve(h, Pe.__wbindgen_malloc), tn = Ue, _n = Pe.placeMarkersTyped(p, y, v, k, A, x, R, S, C, F, M, P, U, I, D, B, W, z, O, G, N, j, E, T, V, L, q, X, H, $, Y, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw Re(_n[1]);
	return Re(_n[0]);
}
function ln(n) {
	let e, t;
	try {
		const i = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), o = Ue, c = Pe.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, be(_, r);
	} finally {
		Pe.__wbindgen_free(e, t, 1);
	}
}
function sn(n, e, t, _) {
	const r = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), i = Ue, o = Ae(e, Pe.__wbindgen_malloc), c = Ue, a = Ae(t, Pe.__wbindgen_malloc), l = Ue, s = ke(_, Pe.__wbindgen_malloc), u = Ue, w = Pe.placeNonwearMarkersTyped(r, i, o, c, a, l, s, u);
	if (w[2]) throw Re(w[1]);
	return Re(w[0]);
}
function un(n) {
	const e = Pe.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function wn(n) {
	const e = Pe.prepareCompactPipelineV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function gn(n, e, t, _, r, i, o) {
	const c = Ae(n, Pe.__wbindgen_malloc), a = Ue, l = Ae(e, Pe.__wbindgen_malloc), s = Ue, u = Ae(t, Pe.__wbindgen_malloc), w = Ue, g = Ae(_, Pe.__wbindgen_malloc), b = Ue;
	var f = ye(o) ? 0 : xe(o, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), d = Ue;
	const m = Pe.processGeneactivRaw(c, a, l, s, u, w, g, b, r, i, f, d);
	if (m[2]) throw Re(m[1]);
	return Re(m[0]);
}
function bn(n) {
	const e = ke(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.processGt3xFull(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function fn(n, e) {
	const t = ke(n, Pe.__wbindgen_malloc), _ = Ue, r = Pe.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw Re(r[1]);
	return Re(r[0]);
}
function dn(n) {
	const e = ke(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.processGt3xPart1(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function mn(n, e) {
	const t = ke(n, Pe.__wbindgen_malloc), _ = Ue, r = Pe.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw Re(r[1]);
	return Re(r[0]);
}
function hn(n, e, t, _, r, i) {
	const o = Ae(n, Pe.__wbindgen_malloc), c = Ue, a = Ae(e, Pe.__wbindgen_malloc), l = Ue, s = Ae(t, Pe.__wbindgen_malloc), u = Ue;
	var w = ye(i) ? 0 : xe(i, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), g = Ue;
	const b = Pe.processRawXyz(o, c, a, l, s, u, _, r, w, g);
	if (b[2]) throw Re(b[1]);
	return Re(b[0]);
}
function pn(n, e, t, _, r, i) {
	const o = Ae(n, Pe.__wbindgen_malloc), c = Ue, a = Ae(e, Pe.__wbindgen_malloc), l = Ue, s = Ae(t, Pe.__wbindgen_malloc), u = Ue, w = Ae(_, Pe.__wbindgen_malloc), g = Ue;
	var b = ye(i) ? 0 : xe(i, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), f = Ue;
	const d = Pe.processRawXyzImputed(o, c, a, l, s, u, w, g, r, b, f);
	if (d[2]) throw Re(d[1]);
	return Re(d[0]);
}
function yn(n, e, t, _, r, i, o) {
	const c = Ae(n, Pe.__wbindgen_malloc), a = Ue, l = Ae(e, Pe.__wbindgen_malloc), s = Ue, u = Ae(t, Pe.__wbindgen_malloc), w = Ue, g = Ae(_, Pe.__wbindgen_malloc), b = Ue;
	var f = ye(i) ? 0 : xe(i, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), d = Ue;
	const m = Pe.processRawXyzImputedWithEpoch(c, a, l, s, u, w, g, b, r, f, d, o);
	if (m[2]) throw Re(m[1]);
	return Re(m[0]);
}
function vn(n) {
	const e = ke(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.readGgirMeta(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function kn() {
	return Pe.recommended_chunk_size_mb() >>> 0;
}
function An(n, e) {
	const t = Ae(n, Pe.__wbindgen_malloc), _ = Ue, r = xe(e, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), i = Ue, o = Pe.reduceF64V1(t, _, r, i);
	if (o[2]) throw Re(o[1]);
	return o[0];
}
function xn(n, e, t, _, r, i, o, c, a, l, s) {
	const u = ke(n, Pe.__wbindgen_malloc), w = Ue, g = xe(e, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), b = Ue;
	var f = ye(t) ? 0 : ke(t, Pe.__wbindgen_malloc), d = Ue, m = ye(_) ? 0 : ke(_, Pe.__wbindgen_malloc), h = Ue, p = ye(r) ? 0 : ke(r, Pe.__wbindgen_malloc), y = Ue, v = ye(i) ? 0 : ke(i, Pe.__wbindgen_malloc), k = Ue, A = ye(o) ? 0 : ke(o, Pe.__wbindgen_malloc), x = Ue, R = ye(c) ? 0 : xe(c, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), S = Ue, C = ye(a) ? 0 : xe(a, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), F = Ue;
	const M = Pe.reviewGgirResults(u, w, g, b, f, d, m, h, p, y, v, k, A, x, R, S, C, F, l, s);
	if (M[2]) throw Re(M[1]);
	return Re(M[0]);
}
function Rn(n) {
	const e = Pe.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function Sn(n) {
	const e = Pe.runCompactPipelineV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function Cn(n, e) {
	const t = Pe.runFullPipeline(n, e);
	if (t[2]) throw Re(t[1]);
	return Re(t[0]);
}
function Fn(n) {
	const e = Pe.runFullPipelineOutcomeV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function Mn(n) {
	const e = Pe.runFullPipelineV1(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function Pn(n, e) {
	const t = Pe.runGgirFromEpoch(n, e);
	if (t[2]) throw Re(t[1]);
	return Re(t[0]);
}
function Un(n) {
	const e = Pe.runGgirPart3(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function In(n) {
	const e = ke(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.runMilestone(e, t);
	if (_[2]) throw Re(_[1]);
	return Re(_[0]);
}
function Dn(n) {
	const e = Pe.scoreAllDays(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function Bn(n, e) {
	const t = Ae(n, Pe.__wbindgen_malloc), _ = Ue, r = Pe.scoreColeKripke(t, _, e);
	var i = le(r[0], r[1]).slice();
	return Pe.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Wn(n) {
	let e, t;
	try {
		const i = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), o = Ue, c = Pe.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, be(_, r);
	} finally {
		Pe.__wbindgen_free(e, t, 1);
	}
}
function zn(n) {
	const e = Pe.scoreConsensusMajority(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function On(n, e, t) {
	const _ = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), r = Ue, i = ke(e, Pe.__wbindgen_malloc), o = Ue, c = ve(t, Pe.__wbindgen_malloc), a = Ue, l = Pe.scoreConsensusTyped(_, r, i, o, c, a);
	if (l[2]) throw Re(l[1]);
	return Re(l[0]);
}
function Gn(n) {
	let e, t;
	try {
		const i = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), o = Ue, c = Pe.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Re(c[2]);
		return e = _, t = r, be(_, r);
	} finally {
		Pe.__wbindgen_free(e, t, 1);
	}
}
function Nn(n, e, t, _, r, i) {
	const o = xe(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), c = Ue, a = Ae(e, Pe.__wbindgen_malloc), l = Ue, s = Ae(t, Pe.__wbindgen_malloc), u = Ue, w = Ae(_, Pe.__wbindgen_malloc), g = Ue, b = Pe.scoreEpochsTyped(o, c, a, l, s, u, w, g, r, i);
	if (b[2]) throw Re(b[1]);
	return Re(b[0]);
}
function jn(n) {
	const e = Ae(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.scoreGgirHasib(e, t);
	var r = le(_[0], _[1]).slice();
	return Pe.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function En(n) {
	const e = Pe.scoreGgirHasibVariant(n);
	if (e[2]) throw Re(e[1]);
	return Re(e[0]);
}
function Tn(n, e, t) {
	const _ = Ae(n, Pe.__wbindgen_malloc), r = Ue, i = Ae(e, Pe.__wbindgen_malloc), o = Ue, c = Pe.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw Re(c[1]);
	return Re(c[0]);
}
function Vn(n, e) {
	const t = Ae(n, Pe.__wbindgen_malloc), _ = Ue, r = Pe.scoreSadeh(t, _, e);
	var i = le(r[0], r[1]).slice();
	return Pe.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Ln(n) {
	const e = ke(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.sha256StreamFeed(e, t);
	if (_[1]) throw Re(_[0]);
}
function qn() {
	let n, e;
	try {
		const r = Pe.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, Re(r[2]);
		return n = t, e = _, be(t, _);
	} finally {
		Pe.__wbindgen_free(n, e, 1);
	}
}
function Xn() {
	Pe.sha256StreamStart();
}
function Hn(n, e) {
	const t = Pe.sleepWakeScores(n, e);
	if (t[2]) throw Re(t[1]);
	return Re(t[0]);
}
function $n(n) {
	const e = ke(n, Pe.__wbindgen_malloc), t = Ue, _ = Pe.streamParseFeed(e, t);
	if (_[2]) throw Re(_[1]);
	return _[0] >>> 0;
}
function Yn() {
	const n = Pe.streamParseFinish();
	if (n[2]) throw Re(n[1]);
	return e.__wrap(n[0]);
}
function Zn() {
	const e = Pe.streamParseFinishChunk();
	if (e[2]) throw Re(e[1]);
	return n.__wrap(e[0]);
}
function Kn(n, e) {
	const t = Pe.streamParseStart(n, e);
	if (t[1]) throw Re(t[0]);
}
function Jn(n, e) {
	const t = Pe.streamParseStartData(n, e);
	if (t[1]) throw Re(t[0]);
}
function Qn(n, e, t) {
	const _ = Pe.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw Re(_[0]);
}
function ne(n, e) {
	const t = ke(n, Pe.__wbindgen_malloc), _ = Ue, r = Pe.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw Re(r[1]);
	return Re(r[0]);
}
function ee(n, e, t, _, r) {
	const i = Ae(n, Pe.__wbindgen_malloc), o = Ue, c = Ae(e, Pe.__wbindgen_malloc), a = Ue, l = Ae(t, Pe.__wbindgen_malloc), s = Ue, u = Pe.zeroCrossingCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw Re(u[1]);
	return Re(u[0]);
}
function te() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(be(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = xe(String(e), Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), _ = Ue;
				ue().setInt32(n + 4, _, !0), ue().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				ue().setBigInt64(n + 8, ye(t) ? BigInt(0) : t, !0), ue().setInt32(n + 0, !ye(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return ye(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = xe(oe(e), Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), _ = Ue;
				ue().setInt32(n + 4, _, !0), ue().setInt32(n + 0, t, !0);
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
				ue().setFloat64(n + 8, ye(t) ? 0 : t, !0), ue().setInt32(n + 0, !ye(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = ye(t) ? 0 : xe(t, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), r = Ue;
				ue().setInt32(n + 4, r, !0), ue().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(be(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return pe(function(n, e) {
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
					t = n, _ = e, console.error(be(n, e));
				} finally {
					Pe.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return pe(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return pe(function(n, e) {
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
				return new Float64Array(ce(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(le(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return pe(function(n) {
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
				return pe(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(le(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return pe(function(n, e, t) {
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
				const t = xe(e.stack, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), _ = Ue;
				ue().setInt32(n + 4, _, !0), ue().setInt32(n + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return ye(n) ? 0 : ie(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return ye(n) ? 0 : ie(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return ye(n) ? 0 : ie(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return ye(n) ? 0 : ie(n);
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
				return le(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return be(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Pe.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
const _e = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Pe.__wbg_streamchunkresult_free(n >>> 0, 1)), re = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Pe.__wbg_streamparseresult_free(n >>> 0, 1));
function ie(n) {
	const e = Pe.__externref_table_alloc();
	return Pe.__wbindgen_externrefs.set(e, n), e;
}
function oe(n) {
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
		e > 0 && (t += oe(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + oe(n[_]);
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
function ce(n, e) {
	return n >>>= 0, ge().subarray(n / 8, n / 8 + e);
}
function ae(n, e) {
	return n >>>= 0, de().subarray(n / 4, n / 4 + e);
}
function le(n, e) {
	return n >>>= 0, he().subarray(n / 1, n / 1 + e);
}
let se = null;
function ue() {
	return (null === se || !0 === se.buffer.detached || void 0 === se.buffer.detached && se.buffer !== Pe.memory.buffer) && (se = new DataView(Pe.memory.buffer)), se;
}
let we = null;
function ge() {
	return null !== we && 0 !== we.byteLength || (we = new Float64Array(Pe.memory.buffer)), we;
}
function be(n, e) {
	return function(n, e) {
		return Fe += e, Fe >= Ce && (Se = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Se.decode(), Fe = e), Se.decode(he().subarray(n, n + e));
	}(n >>>= 0, e);
}
let fe = null;
function de() {
	return null !== fe && 0 !== fe.byteLength || (fe = new Uint32Array(Pe.memory.buffer)), fe;
}
let me = null;
function he() {
	return null !== me && 0 !== me.byteLength || (me = new Uint8Array(Pe.memory.buffer)), me;
}
function pe(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = ie(t);
		Pe.__wbindgen_exn_store(n);
	}
}
function ye(n) {
	return null == n;
}
function ve(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return de().set(n, t / 4), Ue = n.length, t;
}
function ke(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return he().set(n, t / 1), Ue = n.length, t;
}
function Ae(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return ge().set(n, t / 8), Ue = n.length, t;
}
function xe(n, e, t) {
	if (void 0 === t) {
		const t = Me.encode(n), _ = e(t.length, 1) >>> 0;
		return he().subarray(_, _ + t.length).set(t), Ue = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = he();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = he().subarray(r + o, r + _);
		o += Me.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return Ue = o, r;
}
function Re(n) {
	const e = Pe.__wbindgen_externrefs.get(n);
	return Pe.__externref_table_dealloc(n), e;
}
let Se = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
Se.decode();
const Ce = 2146435072;
let Fe = 0;
const Me = new TextEncoder();
"encodeInto" in Me || (Me.encodeInto = function(n, e) {
	const t = Me.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let Pe, Ue = 0;
function Ie(n, e) {
	return Pe = n.exports, se = null, we = null, fe = null, me = null, Pe.__wbindgen_start(), Pe;
}
function De(n) {
	if (void 0 !== Pe) return Pe;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = te();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Ie(new WebAssembly.Instance(n, e));
}
async function Be(n) {
	if (void 0 !== Pe) return Pe;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-BoDq0qmN.wasm", "" + import.meta.url));
	const e = te();
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
	return Ie(t);
}
export { n as StreamChunkResult, e as StreamParseResult, t as actiwareIntervalStatistics, _ as actiwareSleepIntervals, r as actoursVersion, i as aggregateEpochSeries, o as analyzePhysicalActivityDay, c as classifyActimetricPreschoolWristRf, a as classifyActimetricPreschoolWristRfLagLead, l as classifyActimetricPreschoolWristRfLagLeadCalibrated, s as computeAnglez5s, u as computeCircadian, w as computeCircadianTyped, g as computeEnmo5s, b as computeMimsUnit, f as computeMimsUnitDataframe, d as computeMimsUnitTimingBreakdown, m as computeMimsUnitValues, h as computeNightDifficulty, p as computeNightDifficultyTyped, y as computeNightSignals, v as computeNightSignalsTyped, k as computeSleepMetrics, A as configureComputeMemoryBudgetV1, x as csvBufferAppend, R as csvBufferClear, Be as default, S as detectDetachFromAccelerationG, C as detectDeviceFormat, F as detectGgirHasptVariant, M as detectHdcza, P as detectNonwear, U as detectNonwearChoi2011, I as detectNonwearChoi2011Bouts, D as detectNonwearChoi2011Epoch, B as detectNonwearChoi2012, W as detectNonwearChoi2012Bouts, z as detectNonwearChoiBouts, O as detectNonwearUnified, G as detectNonwearUnifiedBatchTyped, N as epochRawData, j as epochWithBandpass, E as executeHeroRuntime, T as extractCapsense, V as generateActiwareRestIntervals, L as getComputeCapabilitiesV1, q as identifyGgirRData, De as initSync, X as installPanicHook, H as isGeneactivFormat, $ as lstmSpectralFeatures30s, Y as neishabouriCounts, Z as parseActigraphCsv, K as parseActigraphCsvBuffered, J as parseAw5, Q as parseCwa, nn as parseEpochSeries, en as parseGeneactivBin, tn as parseGeneactivCsv, _n as parseGeneactivCsvBuffered, rn as parseGt3x, on as placeMarkers, cn as placeMarkersBatch, an as placeMarkersTyped, ln as placeNonwearMarkers, sn as placeNonwearMarkersTyped, un as prepareCompactPipelineOutcomeV1, wn as prepareCompactPipelineV1, gn as processGeneactivRaw, bn as processGt3xFull, fn as processGt3xFullWithEpoch, dn as processGt3xPart1, mn as processGt3xPart1WithEpoch, hn as processRawXyz, pn as processRawXyzImputed, yn as processRawXyzImputedWithEpoch, vn as readGgirMeta, kn as recommended_chunk_size_mb, An as reduceF64V1, xn as reviewGgirResults, Rn as runCompactPipelineOutcomeV1, Sn as runCompactPipelineV1, Cn as runFullPipeline, Fn as runFullPipelineOutcomeV1, Mn as runFullPipelineV1, Pn as runGgirFromEpoch, Un as runGgirPart3, In as runMilestone, Dn as scoreAllDays, Bn as scoreColeKripke, Wn as scoreConsensus, zn as scoreConsensusMajority, On as scoreConsensusTyped, Gn as scoreEpochs, Nn as scoreEpochsTyped, jn as scoreGgirHasib, En as scoreGgirHasibVariant, Tn as scoreGgirSib, Vn as scoreSadeh, Ln as sha256StreamFeed, qn as sha256StreamFinish, Xn as sha256StreamStart, Hn as sleepWakeScores, $n as streamParseFeed, Yn as streamParseFinish, Zn as streamParseFinishChunk, Kn as streamParseStart, Jn as streamParseStartData, Qn as streamParseStartWithEpoch, ne as summarizeActimetricPreschoolWristRfClasses, ee as zeroCrossingCounts };
