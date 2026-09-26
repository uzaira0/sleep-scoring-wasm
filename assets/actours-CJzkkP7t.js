var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ie.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Ie.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = Ie.aw5batch_new(n);
		if (e[2]) throw Fe(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, ie.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, t) {
		const _ = Ce(e, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), r = De;
		var i = Ae(t) ? 0 : Ce(t, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), o = De;
		const c = Ie.aw5batch_recording(this.__wbg_ptr, n, _, r, i, o);
		if (c[2]) throw Fe(c[1]);
		return Fe(c[0]);
	}
	subjects(n) {
		const e = Ie.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw Fe(e[1]);
		return Fe(e[0]);
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, oe.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, oe.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Ie.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Ie.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Ie.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Ie.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Ie.streamchunkresult_axisX(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ie.streamchunkresult_axisY(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ie.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Ie.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ie.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = me(n[0], n[1]).slice(), Ie.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Ie.streamchunkresult_counts(this.__wbg_ptr);
		var e = ue(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Ie.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = ue(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Ie.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Ie.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return Ie.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Ie.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Ie.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Ie.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Ie.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = me(n[0], n[1]).slice(), Ie.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Ie.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Ie.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Ie.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Ie.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ie.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Ie.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ie.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = Ie.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = ue(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Ie.streamchunkresult_temperature(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ie.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Ie.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ie.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Ie.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Ie.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Ie.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var t = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, ce.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ce.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Ie.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Ie.streamparseresult_axisX(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ie.streamparseresult_axisY(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ie.streamparseresult_axisZ(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Ie.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ie.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = me(n[0], n[1]).slice(), Ie.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return Ie.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== Ie.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ie.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ie.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Ie.streamparseresult_temperature(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ie.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ie.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return Ie.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function _(n) {
	const e = Ie.actiwareIntervalStatistics(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function r(n, e, t) {
	const _ = Ie.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function i() {
	let n, e;
	try {
		const t = Ie.actoursVersion();
		return n = t[0], e = t[1], me(t[0], t[1]);
	} finally {
		Ie.__wbindgen_free(n, e, 1);
	}
}
function o(n) {
	const e = Ie.aggregateEpochSeries(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function c(n) {
	let e, t;
	try {
		const i = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), o = De, c = Ie.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Fe(c[2]);
		return e = _, t = r, me(_, r);
	} finally {
		Ie.__wbindgen_free(e, t, 1);
	}
}
function a(n, e, t, _) {
	const r = xe(n, Ie.__wbindgen_malloc), i = De, o = xe(e, Ie.__wbindgen_malloc), c = De, a = xe(t, Ie.__wbindgen_malloc), l = De, s = Ie.classifyActimetricPreschoolWristRf(r, i, o, c, a, l, _);
	if (s[3]) throw Fe(s[2]);
	var u = we(s[0], s[1]).slice();
	return Ie.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function l(n, e, t, _) {
	const r = xe(n, Ie.__wbindgen_malloc), i = De, o = xe(e, Ie.__wbindgen_malloc), c = De, a = xe(t, Ie.__wbindgen_malloc), l = De, s = Ie.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, l, _);
	if (s[3]) throw Fe(s[2]);
	var u = we(s[0], s[1]).slice();
	return Ie.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function s(n, e, t, _) {
	const r = xe(n, Ie.__wbindgen_malloc), i = De, o = xe(e, Ie.__wbindgen_malloc), c = De, a = xe(t, Ie.__wbindgen_malloc), l = De, s = Ie.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, l, _);
	if (s[3]) throw Fe(s[2]);
	var u = we(s[0], s[1]).slice();
	return Ie.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function u(n, e, t, _) {
	const r = xe(n, Ie.__wbindgen_malloc), i = De, o = xe(e, Ie.__wbindgen_malloc), c = De, a = xe(t, Ie.__wbindgen_malloc), l = De, s = Ie.computeAnglez5s(r, i, o, c, a, l, _);
	var u = se(s[0], s[1]).slice();
	return Ie.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function w(n) {
	let e, t;
	try {
		const i = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), o = De, c = Ie.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Fe(c[2]);
		return e = _, t = r, me(_, r);
	} finally {
		Ie.__wbindgen_free(e, t, 1);
	}
}
function g(n, e, t, _, r, i, o) {
	const c = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), a = De, l = xe(e, Ie.__wbindgen_malloc), s = De, u = Re(t, Ie.__wbindgen_malloc), w = De, g = xe(_, Ie.__wbindgen_malloc), b = De, f = Re(r, Ie.__wbindgen_malloc), d = De, m = Se(i, Ie.__wbindgen_malloc), h = De, p = Re(o, Ie.__wbindgen_malloc), y = De, v = Ie.computeCircadianTyped(c, a, l, s, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw Fe(v[1]);
	return Fe(v[0]);
}
function b(n, e, t, _) {
	const r = xe(n, Ie.__wbindgen_malloc), i = De, o = xe(e, Ie.__wbindgen_malloc), c = De, a = xe(t, Ie.__wbindgen_malloc), l = De, s = Ie.computeEnmo5s(r, i, o, c, a, l, _);
	var u = se(s[0], s[1]).slice();
	return Ie.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function f(n, e, t, _, r) {
	const i = xe(n, Ie.__wbindgen_malloc), o = De, c = xe(e, Ie.__wbindgen_malloc), a = De, l = xe(t, Ie.__wbindgen_malloc), s = De, u = Ie.computeMimsUnit(i, o, c, a, l, s, _, r);
	if (u[2]) throw Fe(u[1]);
	return Fe(u[0]);
}
function d(n, e, t, _, r) {
	const i = xe(n, Ie.__wbindgen_malloc), o = De, c = xe(e, Ie.__wbindgen_malloc), a = De, l = xe(t, Ie.__wbindgen_malloc), s = De, u = xe(_, Ie.__wbindgen_malloc), w = De, g = Ie.computeMimsUnitDataframe(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw Fe(g[1]);
	return Fe(g[0]);
}
function m(n, e, t, _, r) {
	const i = xe(n, Ie.__wbindgen_malloc), o = De, c = xe(e, Ie.__wbindgen_malloc), a = De, l = xe(t, Ie.__wbindgen_malloc), s = De, u = Ie.computeMimsUnitTimingBreakdown(i, o, c, a, l, s, _, r);
	if (u[2]) throw Fe(u[1]);
	return Fe(u[0]);
}
function h(n, e, t, _, r) {
	const i = xe(n, Ie.__wbindgen_malloc), o = De, c = xe(e, Ie.__wbindgen_malloc), a = De, l = xe(t, Ie.__wbindgen_malloc), s = De, u = Ie.computeMimsUnitValues(i, o, c, a, l, s, _, r);
	if (u[3]) throw Fe(u[2]);
	var w = se(u[0], u[1]).slice();
	return Ie.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function p(n) {
	let e, t;
	try {
		const i = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), o = De, c = Ie.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Fe(c[2]);
		return e = _, t = r, me(_, r);
	} finally {
		Ie.__wbindgen_free(e, t, 1);
	}
}
function y(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), y = De, v = xe(e, Ie.__wbindgen_malloc), k = De, A = Re(t, Ie.__wbindgen_malloc), R = De, S = xe(_, Ie.__wbindgen_malloc), x = De, C = Re(r, Ie.__wbindgen_malloc), F = De, M = Se(i, Ie.__wbindgen_malloc), P = De, U = Re(o, Ie.__wbindgen_malloc), z = De, I = Se(c, Ie.__wbindgen_malloc), D = De, W = Re(a, Ie.__wbindgen_malloc), B = De, O = xe(l, Ie.__wbindgen_malloc), j = De, G = Re(s, Ie.__wbindgen_malloc), N = De, E = xe(u, Ie.__wbindgen_malloc), T = De, V = Re(w, Ie.__wbindgen_malloc), L = De, X = xe(g, Ie.__wbindgen_malloc), q = De, H = Re(b, Ie.__wbindgen_malloc), Y = De, $ = xe(f, Ie.__wbindgen_malloc), Z = De, K = Re(d, Ie.__wbindgen_malloc), J = De, Q = Se(m, Ie.__wbindgen_malloc), nn = De, en = Re(h, Ie.__wbindgen_malloc), tn = De, _n = Ie.computeNightDifficultyTyped(p, y, v, k, A, R, S, x, C, F, M, P, U, z, I, D, W, B, O, j, G, N, E, T, V, L, X, q, H, Y, $, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw Fe(_n[1]);
	return Fe(_n[0]);
}
function v(n) {
	let e, t;
	try {
		const i = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), o = De, c = Ie.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Fe(c[2]);
		return e = _, t = r, me(_, r);
	} finally {
		Ie.__wbindgen_free(e, t, 1);
	}
}
function k(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), y = De, v = xe(e, Ie.__wbindgen_malloc), k = De, A = Re(t, Ie.__wbindgen_malloc), R = De, S = xe(_, Ie.__wbindgen_malloc), x = De, C = Re(r, Ie.__wbindgen_malloc), F = De, M = Se(i, Ie.__wbindgen_malloc), P = De, U = Re(o, Ie.__wbindgen_malloc), z = De, I = Se(c, Ie.__wbindgen_malloc), D = De, W = Re(a, Ie.__wbindgen_malloc), B = De, O = xe(l, Ie.__wbindgen_malloc), j = De, G = Re(s, Ie.__wbindgen_malloc), N = De, E = xe(u, Ie.__wbindgen_malloc), T = De, V = Re(w, Ie.__wbindgen_malloc), L = De, X = xe(g, Ie.__wbindgen_malloc), q = De, H = Re(b, Ie.__wbindgen_malloc), Y = De, $ = xe(f, Ie.__wbindgen_malloc), Z = De, K = Re(d, Ie.__wbindgen_malloc), J = De, Q = Se(m, Ie.__wbindgen_malloc), nn = De, en = Re(h, Ie.__wbindgen_malloc), tn = De, _n = Ie.computeNightSignalsTyped(p, y, v, k, A, R, S, x, C, F, M, P, U, z, I, D, W, B, O, j, G, N, E, T, V, L, X, q, H, Y, $, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw Fe(_n[1]);
	return Fe(_n[0]);
}
function A(n, e, t) {
	const _ = Se(n, Ie.__wbindgen_malloc), r = De, i = xe(e, Ie.__wbindgen_malloc), o = De, c = Ie.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw Fe(c[1]);
	return Fe(c[0]);
}
function R(n) {
	const e = Ie.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function S(n) {
	const e = Se(n, Ie.__wbindgen_malloc), t = De;
	Ie.csvBufferAppend(e, t);
}
function x(n) {
	Ie.csvBufferClear(n);
}
function C(n, e) {
	const t = xe(n, Ie.__wbindgen_malloc), _ = De, r = xe(e, Ie.__wbindgen_malloc), i = De, o = Ie.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw Fe(o[2]);
	var c = we(o[0], o[1]).slice();
	return Ie.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function F(n, e) {
	let t, _;
	try {
		const r = Se(n, Ie.__wbindgen_malloc), i = De, o = Ce(e, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), c = De, a = Ie.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], me(a[0], a[1]);
	} finally {
		Ie.__wbindgen_free(t, _, 1);
	}
}
function M(n) {
	const e = Ie.detectGgirHasptVariant(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function P(n, e, t, _) {
	const r = xe(n, Ie.__wbindgen_malloc), i = De;
	var o = Ae(e) ? 0 : Ce(e, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), c = De, a = Ae(t) ? 0 : xe(t, Ie.__wbindgen_malloc), l = De, s = Ae(_) ? 0 : xe(_, Ie.__wbindgen_malloc), u = De;
	return Ie.detectHdcza(r, i, o, c, a, l, s, u);
}
function U(n) {
	const e = xe(n, Ie.__wbindgen_malloc), t = De, _ = Ie.detectNonwear(e, t);
	var r = we(_[0], _[1]).slice();
	return Ie.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function z(n) {
	const e = xe(n, Ie.__wbindgen_malloc), t = De, _ = Ie.detectNonwearChoi2011(e, t);
	var r = we(_[0], _[1]).slice();
	return Ie.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function I(n) {
	const e = xe(n, Ie.__wbindgen_malloc), t = De, _ = Ie.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function D(n, e) {
	const t = xe(n, Ie.__wbindgen_malloc), _ = De, r = Ie.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw Fe(r[2]);
	var i = we(r[0], r[1]).slice();
	return Ie.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function W(n) {
	const e = xe(n, Ie.__wbindgen_malloc), t = De, _ = Ie.detectNonwearChoi2012(e, t);
	var r = we(_[0], _[1]).slice();
	return Ie.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function B(n) {
	const e = xe(n, Ie.__wbindgen_malloc), t = De, _ = Ie.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function O(n) {
	const e = xe(n, Ie.__wbindgen_malloc), t = De, _ = Ie.detectNonwearChoiBouts(e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function j(n) {
	let e, t;
	try {
		const i = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), o = De, c = Ie.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Fe(c[2]);
		return e = _, t = r, me(_, r);
	} finally {
		Ie.__wbindgen_free(e, t, 1);
	}
}
function G(n, e, t, _, r, i, o) {
	const c = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), a = De, l = Ce(e, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), s = De, u = xe(t, Ie.__wbindgen_malloc), w = De, g = xe(_, Ie.__wbindgen_malloc), b = De, f = xe(r, Ie.__wbindgen_malloc), d = De, m = Ie.detectNonwearUnifiedBatchTyped(c, a, l, s, u, w, g, b, f, d, i, o);
	if (m[2]) throw Fe(m[1]);
	return Fe(m[0]);
}
function N(n, e, t, _, r) {
	const i = xe(n, Ie.__wbindgen_malloc), o = De, c = xe(e, Ie.__wbindgen_malloc), a = De, l = xe(t, Ie.__wbindgen_malloc), s = De, u = xe(_, Ie.__wbindgen_malloc), w = De, g = Ie.epochRawData(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw Fe(g[1]);
	return Fe(g[0]);
}
function E(n, e, t) {
	const _ = xe(n, Ie.__wbindgen_malloc), r = De, i = xe(e, Ie.__wbindgen_malloc), o = De, c = Ie.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw Fe(c[1]);
	return Fe(c[0]);
}
function T(n, e) {
	let t, _;
	try {
		const o = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), c = De, a = Ce(e, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), l = De, s = Ie.executeHeroRuntime(o, c, a, l);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Fe(s[2]);
		return t = r, _ = i, me(r, i);
	} finally {
		Ie.__wbindgen_free(t, _, 1);
	}
}
function V(n) {
	const e = Se(n, Ie.__wbindgen_malloc), t = De, _ = Ie.extractCapsense(e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function L(n, e) {
	const t = Ie.generateActiwareRestIntervals(n, e);
	if (t[2]) throw Fe(t[1]);
	return Fe(t[0]);
}
function X() {
	const n = Ie.getComputeCapabilitiesV1();
	if (n[2]) throw Fe(n[1]);
	return Fe(n[0]);
}
function q(n) {
	let e, t;
	try {
		const i = Se(n, Ie.__wbindgen_malloc), o = De, c = Ie.identifyGgirRData(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Fe(c[2]);
		return e = _, t = r, me(_, r);
	} finally {
		Ie.__wbindgen_free(e, t, 1);
	}
}
function H() {
	Ie.installPanicHook();
}
function Y(n) {
	const e = Se(n, Ie.__wbindgen_malloc), t = De;
	return 0 !== Ie.isGeneactivFormat(e, t);
}
function $(n, e, t, _) {
	const r = xe(n, Ie.__wbindgen_malloc), i = De, o = xe(e, Ie.__wbindgen_malloc), c = De, a = xe(t, Ie.__wbindgen_malloc), l = De, s = Ie.lstmSpectralFeatures30s(r, i, o, c, a, l, _);
	if (s[2]) throw Fe(s[1]);
	return Fe(s[0]);
}
function Z(n, e, t, _, r) {
	const i = xe(n, Ie.__wbindgen_malloc), o = De, c = xe(e, Ie.__wbindgen_malloc), a = De, l = xe(t, Ie.__wbindgen_malloc), s = De, u = Ie.neishabouriCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw Fe(u[1]);
	return Fe(u[0]);
}
function K(n, e) {
	const t = Se(n, Ie.__wbindgen_malloc), _ = De, r = Ie.parseActigraphCsv(t, _, e);
	if (r[2]) throw Fe(r[1]);
	return Fe(r[0]);
}
function J(n) {
	const e = Ie.parseActigraphCsvBuffered(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function Q(n, e, t, _) {
	const r = Se(n, Ie.__wbindgen_malloc), i = De;
	var o = Ae(e) ? 0 : Ce(e, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), c = De, a = Ae(_) ? 0 : Ce(_, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), l = De;
	const s = Ie.parseAw5(r, i, o, c, Ae(t) ? 0 : ae(t), a, l);
	if (s[2]) throw Fe(s[1]);
	return Fe(s[0]);
}
function nn(n) {
	const e = Se(n, Ie.__wbindgen_malloc), t = De, _ = Ie.parseCwa(e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function en(n, e) {
	const t = Se(n, Ie.__wbindgen_malloc), _ = De, r = Ce(e, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), i = De, o = Ie.parseEpochSeries(t, _, r, i);
	if (o[2]) throw Fe(o[1]);
	return Fe(o[0]);
}
function tn(n) {
	const e = Se(n, Ie.__wbindgen_malloc), t = De, _ = Ie.parseGeneactivBin(e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function _n(n) {
	const e = Se(n, Ie.__wbindgen_malloc), t = De, _ = Ie.parseGeneactivCsv(e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function rn() {
	const n = Ie.parseGeneactivCsvBuffered();
	if (n[2]) throw Fe(n[1]);
	return Fe(n[0]);
}
function on(n) {
	const e = Se(n, Ie.__wbindgen_malloc), t = De, _ = Ie.parseGt3x(e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function cn(n) {
	let e, t;
	try {
		const i = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), o = De, c = Ie.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Fe(c[2]);
		return e = _, t = r, me(_, r);
	} finally {
		Ie.__wbindgen_free(e, t, 1);
	}
}
function an(n, e, t, _, r, i) {
	const o = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), c = De, a = xe(e, Ie.__wbindgen_malloc), l = De, s = xe(t, Ie.__wbindgen_malloc), u = De, w = Se(_, Ie.__wbindgen_malloc), g = De, b = Se(r, Ie.__wbindgen_malloc), f = De, d = Ce(i, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), m = De, h = Ie.placeMarkersBatch(o, c, a, l, s, u, w, g, b, f, d, m);
	if (h[2]) throw Fe(h[1]);
	return Fe(h[0]);
}
function ln(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), y = De, v = xe(e, Ie.__wbindgen_malloc), k = De, A = Re(t, Ie.__wbindgen_malloc), R = De, S = xe(_, Ie.__wbindgen_malloc), x = De, C = Re(r, Ie.__wbindgen_malloc), F = De, M = Se(i, Ie.__wbindgen_malloc), P = De, U = Re(o, Ie.__wbindgen_malloc), z = De, I = Se(c, Ie.__wbindgen_malloc), D = De, W = Re(a, Ie.__wbindgen_malloc), B = De, O = xe(l, Ie.__wbindgen_malloc), j = De, G = Re(s, Ie.__wbindgen_malloc), N = De, E = xe(u, Ie.__wbindgen_malloc), T = De, V = Re(w, Ie.__wbindgen_malloc), L = De, X = xe(g, Ie.__wbindgen_malloc), q = De, H = Re(b, Ie.__wbindgen_malloc), Y = De, $ = xe(f, Ie.__wbindgen_malloc), Z = De, K = Re(d, Ie.__wbindgen_malloc), J = De, Q = Se(m, Ie.__wbindgen_malloc), nn = De, en = Re(h, Ie.__wbindgen_malloc), tn = De, _n = Ie.placeMarkersTyped(p, y, v, k, A, R, S, x, C, F, M, P, U, z, I, D, W, B, O, j, G, N, E, T, V, L, X, q, H, Y, $, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw Fe(_n[1]);
	return Fe(_n[0]);
}
function sn(n) {
	let e, t;
	try {
		const i = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), o = De, c = Ie.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Fe(c[2]);
		return e = _, t = r, me(_, r);
	} finally {
		Ie.__wbindgen_free(e, t, 1);
	}
}
function un(n, e, t, _) {
	const r = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), i = De, o = xe(e, Ie.__wbindgen_malloc), c = De, a = xe(t, Ie.__wbindgen_malloc), l = De, s = Se(_, Ie.__wbindgen_malloc), u = De, w = Ie.placeNonwearMarkersTyped(r, i, o, c, a, l, s, u);
	if (w[2]) throw Fe(w[1]);
	return Fe(w[0]);
}
function wn(n) {
	const e = Ie.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function gn(n) {
	const e = Ie.prepareCompactPipelineV1(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function bn(n, e, t, _, r, i, o) {
	const c = xe(n, Ie.__wbindgen_malloc), a = De, l = xe(e, Ie.__wbindgen_malloc), s = De, u = xe(t, Ie.__wbindgen_malloc), w = De, g = xe(_, Ie.__wbindgen_malloc), b = De;
	var f = Ae(o) ? 0 : Ce(o, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), d = De;
	const m = Ie.processGeneactivRaw(c, a, l, s, u, w, g, b, r, i, f, d);
	if (m[2]) throw Fe(m[1]);
	return Fe(m[0]);
}
function fn(n) {
	const e = Se(n, Ie.__wbindgen_malloc), t = De, _ = Ie.processGt3xFull(e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function dn(n, e) {
	const t = Se(n, Ie.__wbindgen_malloc), _ = De, r = Ie.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw Fe(r[1]);
	return Fe(r[0]);
}
function mn(n) {
	const e = Se(n, Ie.__wbindgen_malloc), t = De, _ = Ie.processGt3xPart1(e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function hn(n, e) {
	const t = Se(n, Ie.__wbindgen_malloc), _ = De, r = Ie.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw Fe(r[1]);
	return Fe(r[0]);
}
function pn(n, e, t, _, r, i) {
	const o = xe(n, Ie.__wbindgen_malloc), c = De, a = xe(e, Ie.__wbindgen_malloc), l = De, s = xe(t, Ie.__wbindgen_malloc), u = De;
	var w = Ae(i) ? 0 : Ce(i, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), g = De;
	const b = Ie.processRawXyz(o, c, a, l, s, u, _, r, w, g);
	if (b[2]) throw Fe(b[1]);
	return Fe(b[0]);
}
function yn(n, e, t, _, r, i) {
	const o = xe(n, Ie.__wbindgen_malloc), c = De, a = xe(e, Ie.__wbindgen_malloc), l = De, s = xe(t, Ie.__wbindgen_malloc), u = De, w = xe(_, Ie.__wbindgen_malloc), g = De;
	var b = Ae(i) ? 0 : Ce(i, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), f = De;
	const d = Ie.processRawXyzImputed(o, c, a, l, s, u, w, g, r, b, f);
	if (d[2]) throw Fe(d[1]);
	return Fe(d[0]);
}
function vn(n, e, t, _, r, i, o) {
	const c = xe(n, Ie.__wbindgen_malloc), a = De, l = xe(e, Ie.__wbindgen_malloc), s = De, u = xe(t, Ie.__wbindgen_malloc), w = De, g = xe(_, Ie.__wbindgen_malloc), b = De;
	var f = Ae(i) ? 0 : Ce(i, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), d = De;
	const m = Ie.processRawXyzImputedWithEpoch(c, a, l, s, u, w, g, b, r, f, d, o);
	if (m[2]) throw Fe(m[1]);
	return Fe(m[0]);
}
function kn(n) {
	const e = Se(n, Ie.__wbindgen_malloc), t = De, _ = Ie.readGgirMeta(e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function An() {
	return Ie.recommended_chunk_size_mb() >>> 0;
}
function Rn(n, e) {
	const t = xe(n, Ie.__wbindgen_malloc), _ = De, r = Ce(e, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), i = De, o = Ie.reduceF64V1(t, _, r, i);
	if (o[2]) throw Fe(o[1]);
	return o[0];
}
function Sn(n) {
	const e = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), t = De, _ = Ie.resolveTimezone(e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function xn(n, e, t, _, r, i, o, c, a, l, s) {
	const u = Se(n, Ie.__wbindgen_malloc), w = De, g = Ce(e, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), b = De;
	var f = Ae(t) ? 0 : Se(t, Ie.__wbindgen_malloc), d = De, m = Ae(_) ? 0 : Se(_, Ie.__wbindgen_malloc), h = De, p = Ae(r) ? 0 : Se(r, Ie.__wbindgen_malloc), y = De, v = Ae(i) ? 0 : Se(i, Ie.__wbindgen_malloc), k = De, A = Ae(o) ? 0 : Se(o, Ie.__wbindgen_malloc), R = De, S = Ae(c) ? 0 : Ce(c, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), x = De, C = Ae(a) ? 0 : Ce(a, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), F = De;
	const M = Ie.reviewGgirResults(u, w, g, b, f, d, m, h, p, y, v, k, A, R, S, x, C, F, l, s);
	if (M[2]) throw Fe(M[1]);
	return Fe(M[0]);
}
function Cn(n) {
	const e = Ie.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function Fn(n) {
	const e = Ie.runCompactPipelineV1(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function Mn(n, e) {
	const t = Ie.runFullPipeline(n, e);
	if (t[2]) throw Fe(t[1]);
	return Fe(t[0]);
}
function Pn(n) {
	const e = Ie.runFullPipelineOutcomeV1(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function Un(n) {
	const e = Ie.runFullPipelineV1(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function zn(n, e) {
	const t = Ie.runGgirFromEpoch(n, e);
	if (t[2]) throw Fe(t[1]);
	return Fe(t[0]);
}
function In(n) {
	const e = Ie.runGgirPart3(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function Dn(n) {
	const e = Se(n, Ie.__wbindgen_malloc), t = De, _ = Ie.runMilestone(e, t);
	if (_[2]) throw Fe(_[1]);
	return Fe(_[0]);
}
function Wn(n) {
	const e = Ie.scoreAllDays(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function Bn(n, e) {
	const t = xe(n, Ie.__wbindgen_malloc), _ = De, r = Ie.scoreColeKripke(t, _, e);
	var i = we(r[0], r[1]).slice();
	return Ie.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function On(n) {
	let e, t;
	try {
		const i = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), o = De, c = Ie.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Fe(c[2]);
		return e = _, t = r, me(_, r);
	} finally {
		Ie.__wbindgen_free(e, t, 1);
	}
}
function jn(n) {
	const e = Ie.scoreConsensusMajority(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function Gn(n, e, t) {
	const _ = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), r = De, i = Se(e, Ie.__wbindgen_malloc), o = De, c = Re(t, Ie.__wbindgen_malloc), a = De, l = Ie.scoreConsensusTyped(_, r, i, o, c, a);
	if (l[2]) throw Fe(l[1]);
	return Fe(l[0]);
}
function Nn(n) {
	let e, t;
	try {
		const i = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), o = De, c = Ie.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Fe(c[2]);
		return e = _, t = r, me(_, r);
	} finally {
		Ie.__wbindgen_free(e, t, 1);
	}
}
function En(n, e, t, _, r, i) {
	const o = Ce(n, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), c = De, a = xe(e, Ie.__wbindgen_malloc), l = De, s = xe(t, Ie.__wbindgen_malloc), u = De, w = xe(_, Ie.__wbindgen_malloc), g = De, b = Ie.scoreEpochsTyped(o, c, a, l, s, u, w, g, r, i);
	if (b[2]) throw Fe(b[1]);
	return Fe(b[0]);
}
function Tn(n) {
	const e = xe(n, Ie.__wbindgen_malloc), t = De, _ = Ie.scoreGgirHasib(e, t);
	var r = we(_[0], _[1]).slice();
	return Ie.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function Vn(n) {
	const e = Ie.scoreGgirHasibVariant(n);
	if (e[2]) throw Fe(e[1]);
	return Fe(e[0]);
}
function Ln(n, e, t) {
	const _ = xe(n, Ie.__wbindgen_malloc), r = De, i = xe(e, Ie.__wbindgen_malloc), o = De, c = Ie.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw Fe(c[1]);
	return Fe(c[0]);
}
function Xn(n, e) {
	const t = xe(n, Ie.__wbindgen_malloc), _ = De, r = Ie.scoreSadeh(t, _, e);
	var i = we(r[0], r[1]).slice();
	return Ie.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function qn(n) {
	const e = Se(n, Ie.__wbindgen_malloc), t = De, _ = Ie.sha256StreamFeed(e, t);
	if (_[1]) throw Fe(_[0]);
}
function Hn() {
	let n, e;
	try {
		const r = Ie.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, Fe(r[2]);
		return n = t, e = _, me(t, _);
	} finally {
		Ie.__wbindgen_free(n, e, 1);
	}
}
function Yn() {
	Ie.sha256StreamStart();
}
function $n(n, e) {
	const t = Ie.sleepWakeScores(n, e);
	if (t[2]) throw Fe(t[1]);
	return Fe(t[0]);
}
function Zn(n) {
	const e = Se(n, Ie.__wbindgen_malloc), t = De, _ = Ie.streamParseFeed(e, t);
	if (_[2]) throw Fe(_[1]);
	return _[0] >>> 0;
}
function Kn() {
	const n = Ie.streamParseFinish();
	if (n[2]) throw Fe(n[1]);
	return t.__wrap(n[0]);
}
function Jn() {
	const n = Ie.streamParseFinishChunk();
	if (n[2]) throw Fe(n[1]);
	return e.__wrap(n[0]);
}
function Qn(n, e) {
	const t = Ie.streamParseStart(n, e);
	if (t[1]) throw Fe(t[0]);
}
function ne(n, e) {
	const t = Ie.streamParseStartData(n, e);
	if (t[1]) throw Fe(t[0]);
}
function ee(n, e, t) {
	const _ = Ie.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw Fe(_[0]);
}
function te(n, e) {
	const t = Se(n, Ie.__wbindgen_malloc), _ = De, r = Ie.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw Fe(r[1]);
	return Fe(r[0]);
}
function _e(n, e, t, _, r) {
	const i = xe(n, Ie.__wbindgen_malloc), o = De, c = xe(e, Ie.__wbindgen_malloc), a = De, l = xe(t, Ie.__wbindgen_malloc), s = De, u = Ie.zeroCrossingCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw Fe(u[1]);
	return Fe(u[0]);
}
function re() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(me(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = Ce(String(e), Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), _ = De;
				be().setInt32(n + 4, _, !0), be().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				be().setBigInt64(n + 8, Ae(t) ? BigInt(0) : t, !0), be().setInt32(n + 0, !Ae(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return Ae(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = Ce(le(e), Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), _ = De;
				be().setInt32(n + 4, _, !0), be().setInt32(n + 0, t, !0);
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
				be().setFloat64(n + 8, Ae(t) ? 0 : t, !0), be().setInt32(n + 0, !Ae(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = Ae(t) ? 0 : Ce(t, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), r = De;
				be().setInt32(n + 4, r, !0), be().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(me(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return ke(function(n, e) {
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
					t = n, _ = e, console.error(me(n, e));
				} finally {
					Ie.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return ke(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return ke(function(n, e) {
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
				return new Float64Array(se(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(we(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return ke(function(n) {
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
				return ke(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(we(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return ke(function(n, e, t) {
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
				const t = Ce(e.stack, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), _ = De;
				be().setInt32(n + 4, _, !0), be().setInt32(n + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return Ae(n) ? 0 : ae(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return Ae(n) ? 0 : ae(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return Ae(n) ? 0 : ae(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return Ae(n) ? 0 : ae(n);
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
				return we(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return me(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Ie.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
const ie = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ie.__wbg_aw5batch_free(n >>> 0, 1)), oe = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ie.__wbg_streamchunkresult_free(n >>> 0, 1)), ce = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ie.__wbg_streamparseresult_free(n >>> 0, 1));
function ae(n) {
	const e = Ie.__externref_table_alloc();
	return Ie.__wbindgen_externrefs.set(e, n), e;
}
function le(n) {
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
		e > 0 && (t += le(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + le(n[_]);
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
function se(n, e) {
	return n >>>= 0, de().subarray(n / 8, n / 8 + e);
}
function ue(n, e) {
	return n >>>= 0, pe().subarray(n / 4, n / 4 + e);
}
function we(n, e) {
	return n >>>= 0, ve().subarray(n / 1, n / 1 + e);
}
let ge = null;
function be() {
	return (null === ge || !0 === ge.buffer.detached || void 0 === ge.buffer.detached && ge.buffer !== Ie.memory.buffer) && (ge = new DataView(Ie.memory.buffer)), ge;
}
let fe = null;
function de() {
	return null !== fe && 0 !== fe.byteLength || (fe = new Float64Array(Ie.memory.buffer)), fe;
}
function me(n, e) {
	return function(n, e) {
		return Ue += e, Ue >= Pe && (Me = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Me.decode(), Ue = e), Me.decode(ve().subarray(n, n + e));
	}(n >>>= 0, e);
}
let he = null;
function pe() {
	return null !== he && 0 !== he.byteLength || (he = new Uint32Array(Ie.memory.buffer)), he;
}
let ye = null;
function ve() {
	return null !== ye && 0 !== ye.byteLength || (ye = new Uint8Array(Ie.memory.buffer)), ye;
}
function ke(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = ae(t);
		Ie.__wbindgen_exn_store(n);
	}
}
function Ae(n) {
	return null == n;
}
function Re(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return pe().set(n, t / 4), De = n.length, t;
}
function Se(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return ve().set(n, t / 1), De = n.length, t;
}
function xe(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return de().set(n, t / 8), De = n.length, t;
}
function Ce(n, e, t) {
	if (void 0 === t) {
		const t = ze.encode(n), _ = e(t.length, 1) >>> 0;
		return ve().subarray(_, _ + t.length).set(t), De = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = ve();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = ve().subarray(r + o, r + _);
		o += ze.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return De = o, r;
}
function Fe(n) {
	const e = Ie.__wbindgen_externrefs.get(n);
	return Ie.__externref_table_dealloc(n), e;
}
let Me = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
Me.decode();
const Pe = 2146435072;
let Ue = 0;
const ze = new TextEncoder();
"encodeInto" in ze || (ze.encodeInto = function(n, e) {
	const t = ze.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let Ie, De = 0;
function We(n, e) {
	return Ie = n.exports, ge = null, fe = null, he = null, ye = null, Ie.__wbindgen_start(), Ie;
}
function Be(n) {
	if (void 0 !== Ie) return Ie;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = re();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), We(new WebAssembly.Instance(n, e));
}
async function Oe(n) {
	if (void 0 !== Ie) return Ie;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-DiXrzYni.wasm", "" + import.meta.url));
	const e = re();
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
	return We(t);
}
export { n as Aw5Batch, e as StreamChunkResult, t as StreamParseResult, _ as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actoursVersion, o as aggregateEpochSeries, c as analyzePhysicalActivityDay, a as classifyActimetricPreschoolWristRf, l as classifyActimetricPreschoolWristRfLagLead, s as classifyActimetricPreschoolWristRfLagLeadCalibrated, u as computeAnglez5s, w as computeCircadian, g as computeCircadianTyped, b as computeEnmo5s, f as computeMimsUnit, d as computeMimsUnitDataframe, m as computeMimsUnitTimingBreakdown, h as computeMimsUnitValues, p as computeNightDifficulty, y as computeNightDifficultyTyped, v as computeNightSignals, k as computeNightSignalsTyped, A as computeSleepMetrics, R as configureComputeMemoryBudgetV1, S as csvBufferAppend, x as csvBufferClear, Oe as default, C as detectDetachFromAccelerationG, F as detectDeviceFormat, M as detectGgirHasptVariant, P as detectHdcza, U as detectNonwear, z as detectNonwearChoi2011, I as detectNonwearChoi2011Bouts, D as detectNonwearChoi2011Epoch, W as detectNonwearChoi2012, B as detectNonwearChoi2012Bouts, O as detectNonwearChoiBouts, j as detectNonwearUnified, G as detectNonwearUnifiedBatchTyped, N as epochRawData, E as epochWithBandpass, T as executeHeroRuntime, V as extractCapsense, L as generateActiwareRestIntervals, X as getComputeCapabilitiesV1, q as identifyGgirRData, Be as initSync, H as installPanicHook, Y as isGeneactivFormat, $ as lstmSpectralFeatures30s, Z as neishabouriCounts, K as parseActigraphCsv, J as parseActigraphCsvBuffered, Q as parseAw5, nn as parseCwa, en as parseEpochSeries, tn as parseGeneactivBin, _n as parseGeneactivCsv, rn as parseGeneactivCsvBuffered, on as parseGt3x, cn as placeMarkers, an as placeMarkersBatch, ln as placeMarkersTyped, sn as placeNonwearMarkers, un as placeNonwearMarkersTyped, wn as prepareCompactPipelineOutcomeV1, gn as prepareCompactPipelineV1, bn as processGeneactivRaw, fn as processGt3xFull, dn as processGt3xFullWithEpoch, mn as processGt3xPart1, hn as processGt3xPart1WithEpoch, pn as processRawXyz, yn as processRawXyzImputed, vn as processRawXyzImputedWithEpoch, kn as readGgirMeta, An as recommended_chunk_size_mb, Rn as reduceF64V1, Sn as resolveTimezone, xn as reviewGgirResults, Cn as runCompactPipelineOutcomeV1, Fn as runCompactPipelineV1, Mn as runFullPipeline, Pn as runFullPipelineOutcomeV1, Un as runFullPipelineV1, zn as runGgirFromEpoch, In as runGgirPart3, Dn as runMilestone, Wn as scoreAllDays, Bn as scoreColeKripke, On as scoreConsensus, jn as scoreConsensusMajority, Gn as scoreConsensusTyped, Nn as scoreEpochs, En as scoreEpochsTyped, Tn as scoreGgirHasib, Vn as scoreGgirHasibVariant, Ln as scoreGgirSib, Xn as scoreSadeh, qn as sha256StreamFeed, Hn as sha256StreamFinish, Yn as sha256StreamStart, $n as sleepWakeScores, Zn as streamParseFeed, Kn as streamParseFinish, Jn as streamParseFinishChunk, Qn as streamParseStart, ne as streamParseStartData, ee as streamParseStartWithEpoch, te as summarizeActimetricPreschoolWristRfClasses, _e as zeroCrossingCounts };
