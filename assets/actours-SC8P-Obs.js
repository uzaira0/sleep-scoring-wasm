var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, H_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		kt.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = dt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.aw5batch_new(e, _);
		if (t[2]) throw mt(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, H_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), r = Ct;
		var i = wt(_) ? 0 : ft(_, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct;
		const c = kt.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw mt(c[1]);
		return mt(c[0]);
	}
	subjects(n) {
		const e = kt.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw mt(e[2]);
		var _ = K_(e[0], e[1]).slice();
		return kt.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, q_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, q_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		kt.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = kt.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = kt.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = kt.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = kt.streamchunkresult_axisX(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = kt.streamchunkresult_axisY(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = kt.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = kt.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw mt(n[1]);
		return mt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== kt.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = kt.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = it(n[0], n[1]).slice(), kt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = kt.streamchunkresult_counts(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = kt.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = kt.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = kt.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = kt.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = kt.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = kt.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = Y_(e[0], e[1]).slice();
		return kt.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return kt.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = kt.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = kt.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== kt.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = kt.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = it(n[0], n[1]).slice(), kt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = kt.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = kt.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = kt.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== kt.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return kt.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return kt.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return kt.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = kt.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = kt.streamchunkresult_temperature(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = kt.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = kt.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = kt.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = kt.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = kt.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = kt.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, X_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, X_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		kt.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = kt.streamparseresult_axisX(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = kt.streamparseresult_axisY(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = kt.streamparseresult_axisZ(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = kt.streamparseresult_calibration(this.__wbg_ptr);
		if (n[2]) throw mt(n[1]);
		return mt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== kt.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = kt.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = it(n[0], n[1]).slice(), kt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return kt.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== kt.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return kt.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return kt.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = kt.streamparseresult_temperature(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = kt.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = kt.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return kt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n) {
	const e = kt.actiwareIntervalStatistics(n);
	if (e[3]) throw mt(e[2]);
	var _ = K_(e[0], e[1]).slice();
	return kt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function r(n, e, _) {
	const t = dt(e, kt.__wbindgen_malloc), r = Ct, i = kt.actiwareSleepIntervals(n, t, r, wt(_) ? 0 : Z_(_));
	if (i[3]) throw mt(i[2]);
	var o = K_(i[0], i[1]).slice();
	return kt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function i(n, e) {
	const _ = kt.actiwareWakeThreshold(n, wt(e) ? 0 : Z_(e));
	if (_[3]) throw mt(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function o() {
	let n, e;
	try {
		const _ = kt.actoursVersion();
		return n = _[0], e = _[1], it(_[0], _[1]);
	} finally {
		kt.__wbindgen_free(n, e, 1);
	}
}
function c(n) {
	const e = kt.aggregateEpochSeries(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function l(n) {
	const e = bt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.analysisDatesOf(e, _);
	var r = K_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function a(n, e) {
	const _ = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), t = Ct, r = kt.analysisWindowBounds(_, t, !wt(e), wt(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = Y_(r[0], r[1]).slice(), kt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function s(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), i = Ct, o = kt.analysisWindowSlice(_, t, r, i);
	var c = J_(o[0], o[1]).slice();
	return kt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function w(n) {
	let e, _;
	try {
		const i = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct, c = kt.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, mt(c[2]);
		return e = t, _ = r, it(t, r);
	} finally {
		kt.__wbindgen_free(e, _, 1);
	}
}
function g(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = bt(e, kt.__wbindgen_malloc), c = Ct, l = bt(_, kt.__wbindgen_malloc), a = Ct, s = kt.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw mt(s[2]);
	var w = Q_(s[0], s[1]).slice();
	return kt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function u(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = bt(e, kt.__wbindgen_malloc), c = Ct, l = bt(_, kt.__wbindgen_malloc), a = Ct, s = kt.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw mt(s[2]);
	var w = Q_(s[0], s[1]).slice();
	return kt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function b(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = bt(e, kt.__wbindgen_malloc), c = Ct, l = bt(_, kt.__wbindgen_malloc), a = Ct, s = kt.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw mt(s[2]);
	var w = Q_(s[0], s[1]).slice();
	return kt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function d(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = bt(e, kt.__wbindgen_malloc), c = Ct;
	return kt.clippedUnionHours(r, i, o, c, _, t);
}
function f(n, e) {
	const _ = kt.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw mt(_[1]);
	return mt(_[0]);
}
function m(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = bt(e, kt.__wbindgen_malloc), c = Ct, l = bt(_, kt.__wbindgen_malloc), a = Ct, s = kt.computeAnglez5s(r, i, o, c, l, a, t);
	var w = Y_(s[0], s[1]).slice();
	return kt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function h(n) {
	let e, _;
	try {
		const i = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct, c = kt.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, mt(c[2]);
		return e = t, _ = r, it(t, r);
	} finally {
		kt.__wbindgen_free(e, _, 1);
	}
}
function p(n, e, _, t, r, i, o) {
	const c = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), l = Ct, a = bt(e, kt.__wbindgen_malloc), s = Ct, w = gt(_, kt.__wbindgen_malloc), g = Ct, u = bt(t, kt.__wbindgen_malloc), b = Ct, d = gt(r, kt.__wbindgen_malloc), f = Ct, m = ut(i, kt.__wbindgen_malloc), h = Ct, p = gt(o, kt.__wbindgen_malloc), y = Ct, v = kt.computeCircadianTyped(c, l, a, s, w, g, u, b, d, f, m, h, p, y);
	if (v[2]) throw mt(v[1]);
	return mt(v[0]);
}
function y(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = bt(e, kt.__wbindgen_malloc), c = Ct, l = bt(_, kt.__wbindgen_malloc), a = Ct, s = kt.computeEnmo5s(r, i, o, c, l, a, t);
	var w = Y_(s[0], s[1]).slice();
	return kt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function v(n, e, _, t, r) {
	const i = bt(n, kt.__wbindgen_malloc), o = Ct, c = bt(e, kt.__wbindgen_malloc), l = Ct, a = bt(_, kt.__wbindgen_malloc), s = Ct, w = kt.computeMimsUnit(i, o, c, l, a, s, t, wt(r) ? 0 : Z_(r));
	if (w[2]) throw mt(w[1]);
	return mt(w[0]);
}
function k(n, e, _, t, r) {
	const i = bt(n, kt.__wbindgen_malloc), o = Ct, c = bt(e, kt.__wbindgen_malloc), l = Ct, a = bt(_, kt.__wbindgen_malloc), s = Ct, w = bt(t, kt.__wbindgen_malloc), g = Ct, u = kt.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, wt(r) ? 0 : Z_(r));
	if (u[2]) throw mt(u[1]);
	return mt(u[0]);
}
function C(n, e, _, t, r) {
	const i = bt(n, kt.__wbindgen_malloc), o = Ct, c = bt(e, kt.__wbindgen_malloc), l = Ct, a = bt(_, kt.__wbindgen_malloc), s = Ct, w = kt.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, wt(r) ? 0 : Z_(r));
	if (w[2]) throw mt(w[1]);
	return mt(w[0]);
}
function S(n, e, _, t, r) {
	const i = bt(n, kt.__wbindgen_malloc), o = Ct, c = bt(e, kt.__wbindgen_malloc), l = Ct, a = bt(_, kt.__wbindgen_malloc), s = Ct, w = kt.computeMimsUnitValues(i, o, c, l, a, s, t, wt(r) ? 0 : Z_(r));
	if (w[3]) throw mt(w[2]);
	var g = Y_(w[0], w[1]).slice();
	return kt.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function A(n) {
	let e, _;
	try {
		const i = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct, c = kt.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, mt(c[2]);
		return e = t, _ = r, it(t, r);
	} finally {
		kt.__wbindgen_free(e, _, 1);
	}
}
function R(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), y = Ct, v = bt(e, kt.__wbindgen_malloc), k = Ct, C = gt(_, kt.__wbindgen_malloc), S = Ct, A = bt(t, kt.__wbindgen_malloc), R = Ct, D = gt(r, kt.__wbindgen_malloc), x = Ct, M = ut(i, kt.__wbindgen_malloc), P = Ct, I = gt(o, kt.__wbindgen_malloc), F = Ct, W = ut(c, kt.__wbindgen_malloc), O = Ct, U = gt(l, kt.__wbindgen_malloc), z = Ct, N = bt(a, kt.__wbindgen_malloc), G = Ct, B = gt(s, kt.__wbindgen_malloc), T = Ct, V = bt(w, kt.__wbindgen_malloc), j = Ct, L = gt(g, kt.__wbindgen_malloc), E = Ct, H = bt(u, kt.__wbindgen_malloc), q = Ct, X = gt(b, kt.__wbindgen_malloc), Z = Ct, $ = bt(d, kt.__wbindgen_malloc), Y = Ct, K = gt(f, kt.__wbindgen_malloc), J = Ct, Q = ut(m, kt.__wbindgen_malloc), nn = Ct, en = gt(h, kt.__wbindgen_malloc), _n = Ct, tn = kt.computeNightDifficultyTyped(p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, U, z, N, G, B, T, V, j, L, E, H, q, X, Z, $, Y, K, J, Q, nn, en, _n);
	if (tn[2]) throw mt(tn[1]);
	return mt(tn[0]);
}
function D(n) {
	let e, _;
	try {
		const i = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct, c = kt.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, mt(c[2]);
		return e = t, _ = r, it(t, r);
	} finally {
		kt.__wbindgen_free(e, _, 1);
	}
}
function x(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), y = Ct, v = bt(e, kt.__wbindgen_malloc), k = Ct, C = gt(_, kt.__wbindgen_malloc), S = Ct, A = bt(t, kt.__wbindgen_malloc), R = Ct, D = gt(r, kt.__wbindgen_malloc), x = Ct, M = ut(i, kt.__wbindgen_malloc), P = Ct, I = gt(o, kt.__wbindgen_malloc), F = Ct, W = ut(c, kt.__wbindgen_malloc), O = Ct, U = gt(l, kt.__wbindgen_malloc), z = Ct, N = bt(a, kt.__wbindgen_malloc), G = Ct, B = gt(s, kt.__wbindgen_malloc), T = Ct, V = bt(w, kt.__wbindgen_malloc), j = Ct, L = gt(g, kt.__wbindgen_malloc), E = Ct, H = bt(u, kt.__wbindgen_malloc), q = Ct, X = gt(b, kt.__wbindgen_malloc), Z = Ct, $ = bt(d, kt.__wbindgen_malloc), Y = Ct, K = gt(f, kt.__wbindgen_malloc), J = Ct, Q = ut(m, kt.__wbindgen_malloc), nn = Ct, en = gt(h, kt.__wbindgen_malloc), _n = Ct, tn = kt.computeNightSignalsTyped(p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, U, z, N, G, B, T, V, j, L, E, H, q, X, Z, $, Y, K, J, Q, nn, en, _n);
	if (tn[2]) throw mt(tn[1]);
	return mt(tn[0]);
}
function M(n, e, _) {
	const t = ut(n, kt.__wbindgen_malloc), r = Ct, i = bt(e, kt.__wbindgen_malloc), o = Ct, c = kt.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw mt(c[1]);
	return mt(c[0]);
}
function P(n) {
	const e = kt.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function I(n) {
	const e = dt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.consensusDisagreementDetail(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function F(n) {
	const e = kt.consensusDisagreements(n);
	if (e[3]) throw mt(e[2]);
	var _ = K_(e[0], e[1]).slice();
	return kt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function W(n) {
	const e = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), _ = Ct, t = kt.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function O(n) {
	const e = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), _ = Ct, t = kt.convertScreensRedcapDiary(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function U(n) {
	const e = ut(n, kt.__wbindgen_malloc), _ = Ct;
	kt.csvBufferAppend(e, _);
}
function z(n) {
	kt.csvBufferClear(n);
}
function N(n, e) {
	const _ = kt.cutpointEpochCompatibility(n, e);
	if (_[2]) throw mt(_[1]);
	return mt(_[0]);
}
function G(n, e, _, t, r) {
	const i = bt(n, kt.__wbindgen_malloc), o = Ct, c = kt.cutpointToneCodes(i, o, e, _, t, r);
	var l = Q_(c[0], c[1]).slice();
	return kt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = kt.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = it(r[0], r[1]).slice(), kt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function T(n, e, _, t) {
	return 0 !== kt.cutpointsValid(n, e, _, t);
}
function V(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = gt(e, kt.__wbindgen_malloc), i = Ct, o = kt.describeColumns(_, t, r, i);
	if (o[3]) throw mt(o[2]);
	var c = K_(o[0], o[1]).slice();
	return kt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function j(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = bt(e, kt.__wbindgen_malloc), i = Ct, o = kt.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw mt(o[2]);
	var c = Q_(o[0], o[1]).slice();
	return kt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function L(n, e) {
	let _, t;
	try {
		const r = ut(n, kt.__wbindgen_malloc), i = Ct, o = ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), c = Ct, l = kt.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], it(l[0], l[1]);
	} finally {
		kt.__wbindgen_free(_, t, 1);
	}
}
function E(n) {
	const e = kt.detectGgirHasptVariant(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function H(n, e, _, t, r) {
	const i = bt(n, kt.__wbindgen_malloc), o = Ct;
	var c = wt(e) ? 0 : ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), l = Ct, a = wt(_) ? 0 : bt(_, kt.__wbindgen_malloc), s = Ct, w = wt(t) ? 0 : bt(t, kt.__wbindgen_malloc), g = Ct, u = wt(r) ? 0 : ft(r, kt.__wbindgen_malloc, kt.__wbindgen_realloc), b = Ct;
	const d = kt.detectHdcza(i, o, c, l, a, s, w, g, u, b);
	if (d[2]) throw mt(d[1]);
	return mt(d[0]);
}
function q(n) {
	const e = bt(n, kt.__wbindgen_malloc), _ = Ct;
	return 0 !== kt.detectHourClockJumpMs(e, _);
}
function X(n) {
	const e = bt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.detectNonwear(e, _);
	var r = Q_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Z(n) {
	const e = bt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.detectNonwearChoi2011(e, _);
	var r = Q_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = bt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.detectNonwearChoi2011Bouts(e, _);
	if (t[3]) throw mt(t[2]);
	var r = K_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Y(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = kt.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw mt(r[2]);
	var i = Q_(r[0], r[1]).slice();
	return kt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = bt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.detectNonwearChoi2012(e, _);
	var r = Q_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function J(n) {
	const e = bt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.detectNonwearChoi2012Bouts(e, _);
	if (t[3]) throw mt(t[2]);
	var r = K_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Q(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = kt.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw mt(r[2]);
	var i = Q_(r[0], r[1]).slice();
	return kt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function nn(n) {
	const e = bt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.detectNonwearChoiBouts(e, _);
	if (t[3]) throw mt(t[2]);
	var r = K_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function en(n) {
	let e, _;
	try {
		const i = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct, c = kt.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, mt(c[2]);
		return e = t, _ = r, it(t, r);
	} finally {
		kt.__wbindgen_free(e, _, 1);
	}
}
function _n(n, e, _, t, r, i, o) {
	const c = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), l = Ct, a = ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), s = Ct, w = bt(_, kt.__wbindgen_malloc), g = Ct, u = bt(t, kt.__wbindgen_malloc), b = Ct, d = bt(r, kt.__wbindgen_malloc), f = Ct, m = kt.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, u, b, d, f, i, o);
	if (m[2]) throw mt(m[1]);
	return mt(m[0]);
}
function tn(n, e, _) {
	const t = dt(_, kt.__wbindgen_malloc), r = Ct, i = kt.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw mt(i[2]);
	var o = K_(i[0], i[1]).slice();
	return kt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function rn(n, e, _, t) {
	const r = kt.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = Y_(r[0], r[1]).slice(), kt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function on(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = bt(e, kt.__wbindgen_malloc), i = Ct, o = kt.epochAgreement(_, t, r, i);
	if (o[2]) throw mt(o[1]);
	return mt(o[0]);
}
function cn(n, e, _, t, r) {
	const i = bt(n, kt.__wbindgen_malloc), o = Ct, c = bt(e, kt.__wbindgen_malloc), l = Ct, a = bt(_, kt.__wbindgen_malloc), s = Ct, w = bt(t, kt.__wbindgen_malloc), g = Ct, u = kt.epochRawData(i, o, c, l, a, s, w, g, r);
	if (u[2]) throw mt(u[1]);
	return mt(u[0]);
}
function ln(n, e, _) {
	const t = bt(n, kt.__wbindgen_malloc), r = Ct, i = bt(e, kt.__wbindgen_malloc), o = Ct, c = kt.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw mt(c[1]);
	return mt(c[0]);
}
function an(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = kt.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = J_(o[0], o[1]).slice(), kt.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function sn(n, e) {
	let _, t;
	try {
		const o = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), c = Ct, l = ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), a = Ct, s = kt.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, mt(s[2]);
		return _ = r, t = i, it(r, i);
	} finally {
		kt.__wbindgen_free(_, t, 1);
	}
}
function wn(n) {
	const e = dt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.exportNapAggregate(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function gn(n, e, _) {
	const t = dt(_, kt.__wbindgen_malloc), r = Ct, i = kt.exportPeriodFigures(!wt(n), wt(n) ? 0 : n, !wt(e), wt(e) ? 0 : e, t, r);
	if (i[2]) throw mt(i[1]);
	return mt(i[0]);
}
function un(n) {
	const e = ut(n, kt.__wbindgen_malloc), _ = Ct, t = kt.extractCapsense(e, _);
	if (t[3]) throw mt(t[2]);
	var r = K_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function bn(n, e, _, t, r) {
	const i = bt(n, kt.__wbindgen_malloc), o = Ct, c = bt(e, kt.__wbindgen_malloc), l = Ct, a = bt(_, kt.__wbindgen_malloc), s = Ct, w = ft(r, kt.__wbindgen_malloc, kt.__wbindgen_realloc), g = Ct, u = kt.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (u[3]) throw mt(u[2]);
	var b = Y_(u[0], u[1]).slice();
	return kt.__wbindgen_free(u[0], 8 * u[1], 8), b;
}
function dn(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = ft(t, kt.__wbindgen_malloc, kt.__wbindgen_realloc), c = Ct, l = kt.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw mt(l[2]);
	var a = Y_(l[0], l[1]).slice();
	return kt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function fn(n, e, _, t, r) {
	const i = ut(_, kt.__wbindgen_malloc), o = Ct, c = bt(t, kt.__wbindgen_malloc), l = Ct, a = kt.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw mt(a[1]);
	return mt(a[0]);
}
function mn(n, e, _, t, r, i) {
	const o = bt(_, kt.__wbindgen_malloc), c = Ct, l = bt(t, kt.__wbindgen_malloc), a = Ct, s = ft(i, kt.__wbindgen_malloc, kt.__wbindgen_realloc), w = Ct, g = kt.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw mt(g[2]);
	var u = Y_(g[0], g[1]).slice();
	return kt.__wbindgen_free(g[0], 8 * g[1], 8), u;
}
function hn(n) {
	const e = kt.fuseNonwearMasks(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function pn(n, e, _) {
	var t = wt(_) ? 0 : ft(_, kt.__wbindgen_malloc, kt.__wbindgen_realloc), r = Ct;
	const i = kt.generateActiwareRestIntervals(n, wt(e) ? 0 : Z_(e), t, r);
	if (i[3]) throw mt(i[2]);
	var o = K_(i[0], i[1]).slice();
	return kt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function yn() {
	const n = kt.getComputeCapabilitiesV1();
	if (n[2]) throw mt(n[1]);
	return mt(n[0]);
}
function vn(n, e, _) {
	const t = dt(_, kt.__wbindgen_malloc), r = Ct, i = kt.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw mt(i[2]);
	var o = Y_(i[0], i[1]).slice();
	return kt.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function kn(n, e) {
	var _ = wt(n) ? 0 : ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), t = Ct;
	const r = kt.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw mt(r[1]);
	return mt(r[0]);
}
function Cn(n) {
	const e = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), _ = Ct, t = kt.ggirConfigValues(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function Sn(n, e) {
	const _ = kt.ggirDayValidFraction(n, e);
	return 0 === _[0] ? void 0 : _[1];
}
function An(n, e, _) {
	const t = bt(n, kt.__wbindgen_malloc), r = Ct;
	var i = wt(e) ? 0 : bt(e, kt.__wbindgen_malloc), o = Ct, c = wt(_) ? 0 : ft(_, kt.__wbindgen_malloc, kt.__wbindgen_realloc), l = Ct;
	const a = kt.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw mt(a[2]);
	var s = Q_(a[0], a[1]).slice();
	return kt.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function Rn(n, e) {
	const _ = ut(n, kt.__wbindgen_malloc), t = Ct;
	var r = wt(e) ? 0 : ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), i = Ct;
	const o = kt.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw mt(o[1]);
	return mt(o[0]);
}
function Dn(n, e, _) {
	const t = dt(e, kt.__wbindgen_malloc), r = Ct;
	var i = wt(_) ? 0 : bt(_, kt.__wbindgen_malloc), o = Ct;
	const c = kt.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw mt(c[2]);
	var l = K_(c[0], c[1]).slice();
	return kt.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function xn(n) {
	var e = wt(n) ? 0 : ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), _ = Ct;
	const t = kt.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw mt(t[1]);
	return t[0];
}
function Mn(n, e, _, t) {
	const r = gt(n, kt.__wbindgen_malloc), i = Ct, o = dt(_, kt.__wbindgen_malloc), c = Ct;
	var l = wt(t) ? 0 : bt(t, kt.__wbindgen_malloc), a = Ct;
	const s = kt.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw mt(s[2]);
	var w = Y_(s[0], s[1]).slice();
	return kt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function Pn(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = dt(e, kt.__wbindgen_malloc), i = Ct, o = kt.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw mt(o[2]);
	var c = Y_(o[0], o[1]).slice();
	return kt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function In(n, e, _, t) {
	const r = dt(n, kt.__wbindgen_malloc), i = Ct, o = bt(e, kt.__wbindgen_malloc), c = Ct, l = bt(_, kt.__wbindgen_malloc), a = Ct, s = bt(t, kt.__wbindgen_malloc), w = Ct, g = kt.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw mt(g[1]);
	return mt(g[0]);
}
function Fn(n) {
	const e = ut(n, kt.__wbindgen_malloc), _ = Ct, t = kt.ggirMilestoneVersion(e, _);
	if (t[3]) throw mt(t[2]);
	let r;
	return 0 !== t[0] && (r = it(t[0], t[1]).slice(), kt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Wn() {
	const n = kt.ggirRerunProfiles();
	if (n[3]) throw mt(n[2]);
	var e = K_(n[0], n[1]).slice();
	return kt.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function On(n, e, _, t) {
	const r = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), i = Ct, o = ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), c = Ct, l = ft(_, kt.__wbindgen_malloc, kt.__wbindgen_realloc), a = Ct, s = dt(t, kt.__wbindgen_malloc), w = Ct, g = kt.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw mt(g[2]);
	let u;
	return 0 !== g[0] && (u = K_(g[0], g[1]).slice(), kt.__wbindgen_free(g[0], 4 * g[1], 4)), u;
}
function Un(n, e) {
	return kt.ggirSptDurationHours(n, e);
}
function zn(n, e) {
	const _ = kt.ggirSummaryDenominator(n, e);
	if (_[2]) throw mt(_[1]);
	return mt(_[0]);
}
function Nn(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = bt(e, kt.__wbindgen_malloc), i = Ct, o = kt.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Gn(n) {
	let e, _;
	try {
		const i = ut(n, kt.__wbindgen_malloc), o = Ct, c = kt.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, mt(c[2]);
		return e = t, _ = r, it(t, r);
	} finally {
		kt.__wbindgen_free(e, _, 1);
	}
}
function Bn(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = bt(e, kt.__wbindgen_malloc), c = Ct, l = bt(_, kt.__wbindgen_malloc), a = Ct, s = bt(t, kt.__wbindgen_malloc), w = Ct, g = kt.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw mt(g[1]);
	return mt(g[0]);
}
function Tn() {
	kt.installPanicHook();
}
function Vn(n) {
	const e = dt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.interRaterReliability(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function jn(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = kt.irregularInternalDays(_, t, e);
	var i = K_(r[0], r[1]).slice();
	return kt.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Ln(n) {
	const e = ut(n, kt.__wbindgen_malloc), _ = Ct;
	return 0 !== kt.isGeneactivFormat(e, _);
}
function En() {
	return kt.linearMemoryBytesV1();
}
function Hn(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = bt(e, kt.__wbindgen_malloc), c = Ct, l = bt(_, kt.__wbindgen_malloc), a = Ct, s = kt.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw mt(s[1]);
	return mt(s[0]);
}
function qn(n, e, _) {
	const t = bt(n, kt.__wbindgen_malloc), r = Ct, i = kt.markerIndexRange(t, r, e, _);
	var o = J_(i[0], i[1]).slice();
	return kt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Xn(n, e, _, t, r, i, o) {
	const c = bt(n, kt.__wbindgen_malloc), l = Ct, a = bt(e, kt.__wbindgen_malloc), s = Ct, w = kt.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw mt(w[1]);
	return mt(w[0]);
}
function Zn(n) {
	const e = bt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function $n(n, e, _, t) {
	const r = kt.metricWarnings(n, e, _, t);
	var i = Q_(r[0], r[1]).slice();
	return kt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Yn(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = bt(e, kt.__wbindgen_malloc), i = Ct, o = kt.midSleepClockHours(_, t, r, i);
	var c = Y_(o[0], o[1]).slice();
	return kt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Kn(n, e, _, t, r) {
	const i = bt(n, kt.__wbindgen_malloc), o = Ct, c = bt(e, kt.__wbindgen_malloc), l = Ct, a = bt(_, kt.__wbindgen_malloc), s = Ct, w = kt.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw mt(w[1]);
	return mt(w[0]);
}
function Jn(n) {
	const e = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), _ = Ct, t = kt.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = it(t[0], t[1]).slice(), kt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Qn(n, e, _, t, r) {
	const i = bt(_, kt.__wbindgen_malloc), o = Ct, c = bt(t, kt.__wbindgen_malloc), l = Ct, a = bt(r, kt.__wbindgen_malloc), s = Ct, w = kt.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw mt(w[1]);
	return mt(w[0]);
}
function ne(n, e, _, t) {
	let r, i;
	try {
		const l = gt(n, kt.__wbindgen_malloc), a = Ct, s = ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), w = Ct, g = kt.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, mt(g[2]);
		return r = o, i = c, it(o, c);
	} finally {
		kt.__wbindgen_free(r, i, 1);
	}
}
function ee(n) {
	const e = bt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.nonwearInSleepCounts(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function _e(n) {
	const e = kt.nonwearSleepOverlap(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function te(n, e, _) {
	const t = bt(n, kt.__wbindgen_malloc), r = Ct, i = bt(e, kt.__wbindgen_malloc), o = Ct, c = kt.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw mt(c[1]);
	return mt(c[0]);
}
function re(n, e, _, t, r, i) {
	const o = ft(r, kt.__wbindgen_malloc, kt.__wbindgen_realloc), c = Ct, l = kt.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw mt(l[2]);
	var a = Y_(l[0], l[1]).slice();
	return kt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function ie(n, e) {
	const _ = ut(n, kt.__wbindgen_malloc), t = Ct, r = kt.parseActigraphCsv(_, t, e);
	if (r[2]) throw mt(r[1]);
	return mt(r[0]);
}
function oe(n) {
	const e = kt.parseActigraphCsvBuffered(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function ce(n, e, _, t) {
	const r = ut(n, kt.__wbindgen_malloc), i = Ct;
	var o = wt(e) ? 0 : ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), c = Ct, l = wt(_) ? 0 : dt(_, kt.__wbindgen_malloc), a = Ct, s = wt(t) ? 0 : ft(t, kt.__wbindgen_malloc, kt.__wbindgen_realloc), w = Ct;
	const g = kt.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw mt(g[1]);
	return mt(g[0]);
}
function le(n) {
	const e = ut(n, kt.__wbindgen_malloc), _ = Ct, t = kt.parseCwa(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function ae(n, e) {
	const _ = ut(n, kt.__wbindgen_malloc), t = Ct, r = ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), i = Ct, o = kt.parseEpochSeries(_, t, r, i);
	if (o[2]) throw mt(o[1]);
	return mt(o[0]);
}
function se(n) {
	const e = ut(n, kt.__wbindgen_malloc), _ = Ct, t = kt.parseGeneactivBin(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function we(n) {
	const e = ut(n, kt.__wbindgen_malloc), _ = Ct, t = kt.parseGeneactivCsv(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function ge() {
	const n = kt.parseGeneactivCsvBuffered();
	if (n[2]) throw mt(n[1]);
	return mt(n[0]);
}
function ue(n) {
	const e = ut(n, kt.__wbindgen_malloc), _ = Ct, t = kt.parseGt3x(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function be(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = ut(e, kt.__wbindgen_malloc), c = Ct, l = ut(_, kt.__wbindgen_malloc), a = Ct, s = kt.participantValidity(r, i, o, c, l, a, wt(t) ? 0 : Z_(t));
	if (s[2]) throw mt(s[1]);
	return mt(s[0]);
}
function de(n, e, _, t, r) {
	const i = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct, c = bt(e, kt.__wbindgen_malloc), l = Ct;
	var a = wt(_) ? 0 : bt(_, kt.__wbindgen_malloc), s = Ct;
	const w = kt.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw mt(w[1]);
	return mt(w[0]);
}
function fe(n) {
	let e, _;
	try {
		const i = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct, c = kt.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, mt(c[2]);
		return e = t, _ = r, it(t, r);
	} finally {
		kt.__wbindgen_free(e, _, 1);
	}
}
function me(n, e, _, t, r, i) {
	const o = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), c = Ct, l = bt(e, kt.__wbindgen_malloc), a = Ct, s = bt(_, kt.__wbindgen_malloc), w = Ct, g = ut(t, kt.__wbindgen_malloc), u = Ct, b = ut(r, kt.__wbindgen_malloc), d = Ct, f = ft(i, kt.__wbindgen_malloc, kt.__wbindgen_realloc), m = Ct, h = kt.placeMarkersBatch(o, c, l, a, s, w, g, u, b, d, f, m);
	if (h[2]) throw mt(h[1]);
	return mt(h[0]);
}
function he(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h, p) {
	const y = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), v = Ct, k = bt(e, kt.__wbindgen_malloc), C = Ct, S = gt(_, kt.__wbindgen_malloc), A = Ct, R = bt(t, kt.__wbindgen_malloc), D = Ct, x = gt(r, kt.__wbindgen_malloc), M = Ct, P = ut(i, kt.__wbindgen_malloc), I = Ct, F = gt(o, kt.__wbindgen_malloc), W = Ct, O = ut(c, kt.__wbindgen_malloc), U = Ct, z = gt(l, kt.__wbindgen_malloc), N = Ct, G = bt(a, kt.__wbindgen_malloc), B = Ct, T = gt(s, kt.__wbindgen_malloc), V = Ct, j = bt(w, kt.__wbindgen_malloc), L = Ct, E = gt(g, kt.__wbindgen_malloc), H = Ct, q = bt(u, kt.__wbindgen_malloc), X = Ct, Z = gt(b, kt.__wbindgen_malloc), $ = Ct, Y = bt(d, kt.__wbindgen_malloc), K = Ct, J = gt(f, kt.__wbindgen_malloc), Q = Ct, nn = ut(m, kt.__wbindgen_malloc), en = Ct, _n = gt(h, kt.__wbindgen_malloc), tn = Ct;
	var rn = wt(p) ? 0 : ft(p, kt.__wbindgen_malloc, kt.__wbindgen_realloc), on = Ct;
	const cn = kt.placeMarkersTyped(y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, U, z, N, G, B, T, V, j, L, E, H, q, X, Z, $, Y, K, J, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw mt(cn[1]);
	return mt(cn[0]);
}
function pe(n) {
	let e, _;
	try {
		const i = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct, c = kt.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, mt(c[2]);
		return e = t, _ = r, it(t, r);
	} finally {
		kt.__wbindgen_free(e, _, 1);
	}
}
function ye(n, e, _, t) {
	const r = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), i = Ct, o = bt(e, kt.__wbindgen_malloc), c = Ct, l = bt(_, kt.__wbindgen_malloc), a = Ct, s = ut(t, kt.__wbindgen_malloc), w = Ct, g = kt.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw mt(g[1]);
	return mt(g[0]);
}
function ve(n) {
	const e = kt.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function ke(n) {
	const e = kt.prepareCompactPipelineV1(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function Ce(n, e, _, t, r, i, o, c) {
	const l = bt(n, kt.__wbindgen_malloc), a = Ct, s = bt(e, kt.__wbindgen_malloc), w = Ct, g = bt(_, kt.__wbindgen_malloc), u = Ct, b = bt(t, kt.__wbindgen_malloc), d = Ct;
	var f = wt(o) ? 0 : ft(o, kt.__wbindgen_malloc, kt.__wbindgen_realloc), m = Ct, h = wt(c) ? 0 : ft(c, kt.__wbindgen_malloc, kt.__wbindgen_realloc), p = Ct;
	const y = kt.processGeneactivRaw(l, a, s, w, g, u, b, d, r, i, f, m, h, p);
	if (y[2]) throw mt(y[1]);
	return mt(y[0]);
}
function Se(n, e) {
	const _ = ut(n, kt.__wbindgen_malloc), t = Ct;
	var r = wt(e) ? 0 : ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), i = Ct;
	const o = kt.processGt3xPart1(_, t, r, i);
	if (o[2]) throw mt(o[1]);
	return mt(o[0]);
}
function Ae(n, e, _) {
	const t = ut(n, kt.__wbindgen_malloc), r = Ct;
	var i = wt(_) ? 0 : ft(_, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct;
	const c = kt.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw mt(c[1]);
	return mt(c[0]);
}
function Re(n, e, _, t, r, i, o) {
	const c = bt(n, kt.__wbindgen_malloc), l = Ct, a = bt(e, kt.__wbindgen_malloc), s = Ct, w = bt(_, kt.__wbindgen_malloc), g = Ct;
	var u = wt(i) ? 0 : ft(i, kt.__wbindgen_malloc, kt.__wbindgen_realloc), b = Ct, d = wt(o) ? 0 : ft(o, kt.__wbindgen_malloc, kt.__wbindgen_realloc), f = Ct;
	const m = kt.processRawXyz(c, l, a, s, w, g, t, r, u, b, d, f);
	if (m[2]) throw mt(m[1]);
	return mt(m[0]);
}
function De(n, e, _, t, r, i, o, c) {
	const l = bt(n, kt.__wbindgen_malloc), a = Ct, s = bt(e, kt.__wbindgen_malloc), w = Ct, g = bt(_, kt.__wbindgen_malloc), u = Ct, b = bt(t, kt.__wbindgen_malloc), d = Ct;
	var f = wt(i) ? 0 : ft(i, kt.__wbindgen_malloc, kt.__wbindgen_realloc), m = Ct, h = wt(o) ? 0 : ft(o, kt.__wbindgen_malloc, kt.__wbindgen_realloc), p = Ct, y = wt(c) ? 0 : bt(c, kt.__wbindgen_malloc), v = Ct;
	const k = kt.processRawXyzImputed(l, a, s, w, g, u, b, d, r, f, m, h, p, y, v);
	if (k[2]) throw mt(k[1]);
	return mt(k[0]);
}
function xe(n, e, _, t, r, i, o, c, l, a) {
	const s = bt(n, kt.__wbindgen_malloc), w = Ct, g = bt(e, kt.__wbindgen_malloc), u = Ct, b = bt(_, kt.__wbindgen_malloc), d = Ct, f = bt(t, kt.__wbindgen_malloc), m = Ct;
	var h = wt(i) ? 0 : ft(i, kt.__wbindgen_malloc, kt.__wbindgen_realloc), p = Ct, y = wt(c) ? 0 : ft(c, kt.__wbindgen_malloc, kt.__wbindgen_realloc), v = Ct, k = wt(a) ? 0 : bt(a, kt.__wbindgen_malloc), C = Ct;
	const S = kt.processRawXyzImputedWithEpoch(s, w, g, u, b, d, f, m, r, h, p, o, y, v, wt(l) ? 16777215 : l ? 1 : 0, k, C);
	if (S[2]) throw mt(S[1]);
	return mt(S[0]);
}
function Me(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = ut(e, kt.__wbindgen_malloc), c = Ct, l = bt(t, kt.__wbindgen_malloc), a = Ct, s = kt.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = Q_(s[0], s[1]).slice();
	return kt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function Pe(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = bt(e, kt.__wbindgen_malloc), c = Ct, l = bt(_, kt.__wbindgen_malloc), a = Ct, s = kt.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw mt(s[1]);
	return mt(s[0]);
}
function Ie(n, e, _) {
	const t = ut(n, kt.__wbindgen_malloc), r = Ct;
	var i = wt(e) ? 0 : ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct;
	const c = kt.readGgirMeta(t, r, i, o, wt(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw mt(c[1]);
	return mt(c[0]);
}
function Fe(n, e) {
	const _ = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), t = Ct;
	var r = wt(e) ? 0 : ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), i = Ct;
	const o = kt.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw mt(o[1]);
	return mt(o[0]);
}
function We() {
	return kt.recommended_chunk_size_mb() >>> 0;
}
function Oe(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), i = Ct, o = kt.reduceF64V1(_, t, r, i);
	if (o[2]) throw mt(o[1]);
	return o[0];
}
function Ue(n, e) {
	const _ = dt(e, kt.__wbindgen_malloc), t = Ct, r = kt.rerunGgirResults(n, _, t);
	if (r[2]) throw mt(r[1]);
	return mt(r[0]);
}
function ze(n) {
	const e = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), _ = Ct, t = kt.resolveTimezone(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function Ne(n, e, _) {
	const t = bt(n, kt.__wbindgen_malloc), r = Ct, i = bt(e, kt.__wbindgen_malloc), o = Ct, c = gt(_, kt.__wbindgen_malloc), l = Ct, a = kt.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw mt(a[2]);
	var s = K_(a[0], a[1]).slice();
	return kt.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function Ge(n, e, _, t, r, i, o, c, l, a, s, w, g, u) {
	const b = ut(n, kt.__wbindgen_malloc), d = Ct, f = ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), m = Ct;
	var h = wt(_) ? 0 : ut(_, kt.__wbindgen_malloc), p = Ct, y = wt(t) ? 0 : ut(t, kt.__wbindgen_malloc), v = Ct, k = wt(r) ? 0 : ut(r, kt.__wbindgen_malloc), C = Ct, S = wt(i) ? 0 : ut(i, kt.__wbindgen_malloc), A = Ct, R = wt(o) ? 0 : ut(o, kt.__wbindgen_malloc), D = Ct, x = wt(c) ? 0 : ft(c, kt.__wbindgen_malloc, kt.__wbindgen_realloc), M = Ct, P = wt(l) ? 0 : ft(l, kt.__wbindgen_malloc, kt.__wbindgen_realloc), I = Ct, F = wt(a) ? 0 : dt(a, kt.__wbindgen_malloc), W = Ct, O = wt(w) ? 0 : ft(w, kt.__wbindgen_malloc, kt.__wbindgen_realloc), U = Ct, z = wt(g) ? 0 : ft(g, kt.__wbindgen_malloc, kt.__wbindgen_realloc), N = Ct;
	const G = kt.reviewGgirResults(b, d, f, m, h, p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, s, O, U, z, N, wt(u) ? 4294967297 : u >>> 0);
	if (G[2]) throw mt(G[1]);
	return mt(G[0]);
}
function Be(n) {
	const e = dt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.reviewNonwearFile(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function Te(n) {
	const e = dt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.reviewNonwearTotals(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function Ve(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = kt.roundCountStorage(_, t, e);
	var i = Y_(r[0], r[1]).slice();
	return kt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function je(n) {
	const e = kt.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function Le(n) {
	const e = kt.runCompactPipelineV1(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function Ee(n) {
	const e = kt.runFullPipelineOutcomeV1(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function He(n) {
	const e = kt.runFullPipelineV1(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function qe(n) {
	const e = kt.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function Xe(n) {
	const e = kt.runGgirPart3(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function Ze(n, e) {
	const _ = ut(n, kt.__wbindgen_malloc), t = Ct;
	var r = wt(e) ? 0 : ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), i = Ct;
	const o = kt.runMilestone(_, t, r, i);
	if (o[2]) throw mt(o[1]);
	return mt(o[0]);
}
function $e(n) {
	const e = dt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.scoreAllDays(e, _);
	if (t[3]) throw mt(t[2]);
	var r = K_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Ye(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = kt.scoreColeKripke(_, t, e);
	var i = Q_(r[0], r[1]).slice();
	return kt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Ke(n) {
	let e, _;
	try {
		const i = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct, c = kt.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, mt(c[2]);
		return e = t, _ = r, it(t, r);
	} finally {
		kt.__wbindgen_free(e, _, 1);
	}
}
function Je(n) {
	const e = kt.scoreConsensusMajority(n);
	if (e[3]) throw mt(e[2]);
	var _ = Q_(e[0], e[1]).slice();
	return kt.__wbindgen_free(e[0], 1 * e[1], 1), _;
}
function Qe(n, e, _) {
	const t = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), r = Ct, i = ut(e, kt.__wbindgen_malloc), o = Ct, c = gt(_, kt.__wbindgen_malloc), l = Ct, a = kt.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw mt(a[1]);
	return mt(a[0]);
}
function n_(n) {
	let e, _;
	try {
		const i = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct, c = kt.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, mt(c[2]);
		return e = t, _ = r, it(t, r);
	} finally {
		kt.__wbindgen_free(e, _, 1);
	}
}
function e_(n, e, _, t, r, i) {
	const o = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), c = Ct, l = bt(e, kt.__wbindgen_malloc), a = Ct, s = bt(_, kt.__wbindgen_malloc), w = Ct, g = bt(t, kt.__wbindgen_malloc), u = Ct, b = kt.scoreEpochsTyped(o, c, l, a, s, w, g, u, r, i);
	if (b[2]) throw mt(b[1]);
	return mt(b[0]);
}
function __(n, e, _) {
	const t = bt(n, kt.__wbindgen_malloc), r = Ct;
	var i = wt(e) ? 0 : ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct, c = wt(_) ? 0 : bt(_, kt.__wbindgen_malloc), l = Ct;
	const a = kt.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw mt(a[2]);
	var s = Q_(a[0], a[1]).slice();
	return kt.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function t_(n) {
	const e = kt.scoreGgirHasibVariant(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function r_(n, e, _, t, r) {
	const i = bt(n, kt.__wbindgen_malloc), o = Ct, c = bt(e, kt.__wbindgen_malloc), l = Ct;
	var a = wt(t) ? 0 : ft(t, kt.__wbindgen_malloc, kt.__wbindgen_realloc), s = Ct, w = wt(r) ? 0 : bt(r, kt.__wbindgen_malloc), g = Ct;
	const u = kt.scoreGgirSib(i, o, c, l, _, a, s, w, g);
	if (u[2]) throw mt(u[1]);
	return mt(u[0]);
}
function i_(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = kt.scoreSadeh(_, t, e);
	var i = Q_(r[0], r[1]).slice();
	return kt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function o_(n) {
	const e = dt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.settleManualNonwearNights(e, _);
	if (t[3]) throw mt(t[2]);
	var r = K_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function c_(n) {
	const e = ut(n, kt.__wbindgen_malloc), _ = Ct, t = kt.sha256StreamFeed(e, _);
	if (t[1]) throw mt(t[0]);
}
function l_() {
	let n, e;
	try {
		const r = kt.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, mt(r[2]);
		return n = _, e = t, it(_, t);
	} finally {
		kt.__wbindgen_free(n, e, 1);
	}
}
function a_() {
	kt.sha256StreamStart();
}
function s_(n, e) {
	const _ = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), t = Ct, r = kt.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = it(r[0], r[1]).slice(), kt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function w_(n, e, _, t, r) {
	const i = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct, c = bt(e, kt.__wbindgen_malloc), l = Ct, a = gt(_, kt.__wbindgen_malloc), s = Ct, w = bt(t, kt.__wbindgen_malloc), g = Ct, u = gt(r, kt.__wbindgen_malloc), b = Ct, d = kt.sleepRegularityIndex(i, o, c, l, a, s, w, g, u, b);
	if (d[3]) throw mt(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function g_(n, e) {
	const _ = kt.sleepWakeScores(n, wt(e) ? 0 : Z_(e));
	if (_[2]) throw mt(_[1]);
	return mt(_[0]);
}
function u_(n) {
	const e = dt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.sourceLabelsWallClockMs(e, _);
	var r = Y_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function b_(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = bt(e, kt.__wbindgen_malloc), c = Ct, l = kt.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function d_(n, e, _) {
	const t = bt(n, kt.__wbindgen_malloc), r = Ct, i = dt(e, kt.__wbindgen_malloc), o = Ct, c = bt(_, kt.__wbindgen_malloc), l = Ct, a = kt.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw mt(a[2]);
	let s;
	return 0 !== a[0] && (s = Y_(a[0], a[1]).slice(), kt.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function f_(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = ut(e, kt.__wbindgen_malloc), c = Ct, l = bt(_, kt.__wbindgen_malloc), a = Ct, s = bt(t, kt.__wbindgen_malloc), w = Ct, g = kt.statesInPeriods(r, i, o, c, l, a, s, w);
	var u = Q_(g[0], g[1]).slice();
	return kt.__wbindgen_free(g[0], 1 * g[1], 1), u;
}
function m_(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = dt(e, kt.__wbindgen_malloc), i = Ct, o = kt.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw mt(o[2]);
	var c = Y_(o[0], o[1]).slice();
	return kt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function h_(n) {
	const e = ut(n, kt.__wbindgen_malloc), _ = Ct, t = kt.streamParseFeed(e, _);
	if (t[2]) throw mt(t[1]);
	return t[0] >>> 0;
}
function p_() {
	const n = kt.streamParseFinish();
	if (n[2]) throw mt(n[1]);
	return _.__wrap(n[0]);
}
function y_() {
	const n = kt.streamParseFinishChunk();
	if (n[2]) throw mt(n[1]);
	return e.__wrap(n[0]);
}
function v_(n) {
	const _ = kt.streamParseFinishChunkWithProgress(n);
	if (_[2]) throw mt(_[1]);
	return e.__wrap(_[0]);
}
function k_(n, e, _) {
	var t = wt(_) ? 0 : ft(_, kt.__wbindgen_malloc, kt.__wbindgen_realloc), r = Ct;
	const i = kt.streamParseStart(n, e, t, r);
	if (i[1]) throw mt(i[0]);
}
function C_(n, e) {
	const _ = kt.streamParseStartData(n, e);
	if (_[1]) throw mt(_[0]);
}
function S_(n, e, _, t, r) {
	var i = wt(t) ? 0 : ft(t, kt.__wbindgen_malloc, kt.__wbindgen_realloc), o = Ct;
	const c = kt.streamParseStartWithEpoch(n, e, _, i, o, !wt(r), wt(r) ? 0 : r);
	if (c[1]) throw mt(c[0]);
}
function A_(n, e) {
	const _ = ut(n, kt.__wbindgen_malloc), t = Ct, r = kt.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw mt(r[1]);
	return mt(r[0]);
}
function R_(n) {
	const e = kt.summarizeExportGroups(n);
	if (e[3]) throw mt(e[2]);
	var _ = K_(e[0], e[1]).slice();
	return kt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function D_(n) {
	const e = kt.summarizePhysicalActivityDays(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function x_(n) {
	const e = kt.summarizePhysicalActivityTrace(n);
	if (e[2]) throw mt(e[1]);
	return mt(e[0]);
}
function M_(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = kt.thresholdProbabilities(_, t, e);
	var i = Q_(r[0], r[1]).slice();
	return kt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function P_(n) {
	const e = dt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.timeSemantics(e, _);
	if (t[3]) throw mt(t[2]);
	var r = K_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function I_(n, e, _) {
	const t = bt(n, kt.__wbindgen_malloc), r = Ct, i = kt.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw mt(i[2]);
	var o = K_(i[0], i[1]).slice();
	return kt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function F_(n, e, _) {
	const t = kt.uniformTimestamps(n, e, _);
	var r = Y_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function W_(n, e) {
	const _ = kt.utcDatesInSpan(n, e);
	var t = K_(_[0], _[1]).slice();
	return kt.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function O_(n) {
	const e = bt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.utcDayIndex(e, _);
	if (t[2]) throw mt(t[1]);
	return mt(t[0]);
}
function U_(n) {
	const e = ut(n, kt.__wbindgen_malloc), _ = Ct, t = kt.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function z_(n, e) {
	const _ = bt(n, kt.__wbindgen_malloc), t = Ct, r = kt.validWearDays(_, t, wt(e) ? 0 : Z_(e));
	if (r[3]) throw mt(r[2]);
	var i = Q_(r[0], r[1]).slice();
	return kt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function N_(n, e, _) {
	const t = bt(n, kt.__wbindgen_malloc), r = Ct, i = kt.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw mt(i[1]);
	return mt(i[0]);
}
function G_(n) {
	const e = bt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.wallClockLabels(e, _);
	var r = K_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function B_(n, e, _) {
	const t = ut(n, kt.__wbindgen_malloc), r = Ct, i = dt(_, kt.__wbindgen_malloc), o = Ct, c = kt.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw mt(c[2]);
	var l = Q_(c[0], c[1]).slice();
	return kt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function T_(n, e) {
	const _ = ft(n, kt.__wbindgen_malloc, kt.__wbindgen_realloc), t = Ct;
	var r = wt(e) ? 0 : ft(e, kt.__wbindgen_malloc, kt.__wbindgen_realloc), i = Ct;
	const o = kt.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw mt(o[1]);
	return mt(o[0]);
}
function V_(n) {
	const e = dt(n, kt.__wbindgen_malloc), _ = Ct, t = kt.weekendDates(e, _);
	var r = Q_(t[0], t[1]).slice();
	return kt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function j_(n, e, _, t) {
	const r = bt(n, kt.__wbindgen_malloc), i = Ct, o = kt.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function L_(n, e, _, t, r) {
	const i = bt(n, kt.__wbindgen_malloc), o = Ct, c = bt(e, kt.__wbindgen_malloc), l = Ct, a = bt(_, kt.__wbindgen_malloc), s = Ct, w = kt.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw mt(w[1]);
	return mt(w[0]);
}
function E_() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(it(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = ft(String(e), kt.__wbindgen_malloc, kt.__wbindgen_realloc), t = Ct;
				et().setInt32(n + 4, t, !0), et().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				et().setBigInt64(n + 8, wt(_) ? BigInt(0) : _, !0), et().setInt32(n + 0, !wt(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return wt(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = ft($_(e), kt.__wbindgen_malloc, kt.__wbindgen_realloc), t = Ct;
				et().setInt32(n + 4, t, !0), et().setInt32(n + 0, _, !0);
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
				const _ = "number" == typeof e ? e : void 0;
				et().setFloat64(n + 8, wt(_) ? 0 : _, !0), et().setInt32(n + 0, !wt(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = wt(_) ? 0 : ft(_, kt.__wbindgen_malloc, kt.__wbindgen_realloc), r = Ct;
				et().setInt32(n + 4, r, !0), et().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(it(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return st(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return st(function(n, e, _, t) {
					return n.call(e, _, t);
				}, arguments);
			},
			__wbg_done_9158f7cc8751ba32: function(n) {
				return n.done;
			},
			__wbg_entries_e0b73aa8571ddb56: function(n) {
				return Object.entries(n);
			},
			__wbg_error_a6fa202b58aa1cd3: function(n, e) {
				let _, t;
				try {
					_ = n, t = e, console.error(it(n, e));
				} finally {
					kt.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return st(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return st(function(n, e) {
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
				} catch (_) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Float64Array_aa32a9a18a521df4: function(n) {
				let e;
				try {
					e = n instanceof Float64Array;
				} catch (_) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Map_1b76fd4635be43eb: function(n) {
				let e;
				try {
					e = n instanceof Map;
				} catch (_) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Uint8Array_152ba1f289edcf3f: function(n) {
				let e;
				try {
					e = n instanceof Uint8Array;
				} catch (_) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Window_cc64c86c8ef9e02b: function(n) {
				let e;
				try {
					e = n instanceof Window;
				} catch (_) {
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
			__wbg_new_34d45cc8e36aaead: function() {
				return /* @__PURE__ */ new Map();
			},
			__wbg_new_682678e2f47e32bc: function() {
				return new Array();
			},
			__wbg_new_aa8d0fa9762c29bd: function() {
				return /* @__PURE__ */ new Object();
			},
			__wbg_new_from_slice_01793f7edd3b321a: function(n, e) {
				return new Uint32Array(J_(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(Y_(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== _t && 0 !== _t.byteLength || (_t = new Float32Array(kt.memory.buffer)), _t).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return st(function(n) {
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
				return st(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(Q_(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return st(function(n, e, _) {
					return Reflect.set(n, e, _);
				}, arguments);
			},
			__wbg_set_3bf1de9fab0cd644: function(n, e, _) {
				n[e >>> 0] = _;
			},
			__wbg_set_6be42768c690e380: function(n, e, _) {
				n[e] = _;
			},
			__wbg_set_fde2cec06c23692b: function(n, e, _) {
				return n.set(e, _);
			},
			__wbg_set_index_2ca12d8345f872b3: function(n, e, _) {
				n[e >>> 0] = _;
			},
			__wbg_set_index_805dd976c110cd28: function(n, e, _) {
				n[e >>> 0] = _;
			},
			__wbg_slice_30ddef84546fd9d0: function(n, e, _) {
				return n.slice(e >>> 0, _ >>> 0);
			},
			__wbg_slice_fcdcd53ca169108d: function(n, e, _) {
				return n.slice(e >>> 0, _ >>> 0);
			},
			__wbg_stack_3b0d974bbf31e44f: function(n, e) {
				const _ = ft(e.stack, kt.__wbindgen_malloc, kt.__wbindgen_realloc), t = Ct;
				et().setInt32(n + 4, t, !0), et().setInt32(n + 0, _, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return wt(n) ? 0 : Z_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return wt(n) ? 0 : Z_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return wt(n) ? 0 : Z_(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return wt(n) ? 0 : Z_(n);
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
				return Q_(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return it(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = kt.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
const H_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => kt.__wbg_aw5batch_free(n >>> 0, 1)), q_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => kt.__wbg_streamchunkresult_free(n >>> 0, 1)), X_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => kt.__wbg_streamparseresult_free(n >>> 0, 1));
function Z_(n) {
	const e = kt.__externref_table_alloc();
	return kt.__wbindgen_externrefs.set(e, n), e;
}
function $_(n) {
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
		let _ = "[";
		e > 0 && (_ += $_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + $_(n[t]);
		return _ += "]", _;
	}
	const _ = /\[object ([^\]]+)\]/.exec(toString.call(n));
	let t;
	if (!(_ && _.length > 1)) return toString.call(n);
	if (t = _[1], "Object" == t) try {
		return "Object(" + JSON.stringify(n) + ")";
	} catch (r) {
		return "Object";
	}
	return n instanceof Error ? `${n.name}: ${n.message}\n${n.stack}` : t;
}
function Y_(n, e) {
	return n >>>= 0, rt().subarray(n / 8, n / 8 + e);
}
function K_(n, e) {
	n >>>= 0;
	const _ = et(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(kt.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return kt.__externref_drop_slice(n, e), t;
}
function J_(n, e) {
	return n >>>= 0, ct().subarray(n / 4, n / 4 + e);
}
function Q_(n, e) {
	return n >>>= 0, at().subarray(n / 1, n / 1 + e);
}
let nt = null;
function et() {
	return (null === nt || !0 === nt.buffer.detached || void 0 === nt.buffer.detached && nt.buffer !== kt.memory.buffer) && (nt = new DataView(kt.memory.buffer)), nt;
}
let _t = null, tt = null;
function rt() {
	return null !== tt && 0 !== tt.byteLength || (tt = new Float64Array(kt.memory.buffer)), tt;
}
function it(n, e) {
	return function(n, e) {
		return yt += e, yt >= pt && (ht = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), ht.decode(), yt = e), ht.decode(at().subarray(n, n + e));
	}(n >>>= 0, e);
}
let ot = null;
function ct() {
	return null !== ot && 0 !== ot.byteLength || (ot = new Uint32Array(kt.memory.buffer)), ot;
}
let lt = null;
function at() {
	return null !== lt && 0 !== lt.byteLength || (lt = new Uint8Array(kt.memory.buffer)), lt;
}
function st(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = Z_(_);
		kt.__wbindgen_exn_store(n);
	}
}
function wt(n) {
	return null == n;
}
function gt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return ct().set(n, _ / 4), Ct = n.length, _;
}
function ut(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return at().set(n, _ / 1), Ct = n.length, _;
}
function bt(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return rt().set(n, _ / 8), Ct = n.length, _;
}
function dt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = Z_(n[t]);
		et().setUint32(_ + 4 * t, e, !0);
	}
	return Ct = n.length, _;
}
function ft(n, e, _) {
	if (void 0 === _) {
		const _ = vt.encode(n), t = e(_.length, 1) >>> 0;
		return at().subarray(t, t + _.length).set(_), Ct = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = at();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = at().subarray(r + o, r + t);
		o += vt.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return Ct = o, r;
}
function mt(n) {
	const e = kt.__wbindgen_externrefs.get(n);
	return kt.__externref_table_dealloc(n), e;
}
let ht = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
ht.decode();
const pt = 2146435072;
let yt = 0;
const vt = new TextEncoder();
"encodeInto" in vt || (vt.encodeInto = function(n, e) {
	const _ = vt.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let kt, Ct = 0;
function St(n, e) {
	return kt = n.exports, nt = null, _t = null, tt = null, ot = null, lt = null, kt.__wbindgen_start(), kt;
}
function At(n) {
	if (void 0 !== kt) return kt;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = E_();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), St(new WebAssembly.Instance(n, e));
}
async function Rt(n) {
	if (void 0 !== kt) return kt;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-D_qMdM-8.wasm", "" + import.meta.url));
	const e = E_();
	("string" == typeof n || "function" == typeof Request && n instanceof Request || "function" == typeof URL && n instanceof URL) && (n = fetch(n));
	const { instance: _, module: t } = await async function(n, e) {
		if ("function" == typeof Response && n instanceof Response) {
			if ("function" == typeof WebAssembly.instantiateStreaming) try {
				return await WebAssembly.instantiateStreaming(n, e);
			} catch (_) {
				if (!n.ok || !function(n) {
					switch (n) {
						case "basic":
						case "cors":
						case "default": return !0;
					}
					return !1;
				}(n.type) || "application/wasm" === n.headers.get("Content-Type")) throw _;
				console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _);
			}
			const t = await n.arrayBuffer();
			return await WebAssembly.instantiate(t, e);
		}
		{
			const _ = await WebAssembly.instantiate(n, e);
			return _ instanceof WebAssembly.Instance ? {
				instance: _,
				module: n
			} : _;
		}
	}(await n, e);
	return St(_);
}
export { n as Aw5Batch, e as StreamChunkResult, _ as StreamParseResult, t as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actiwareWakeThreshold, o as actoursVersion, c as aggregateEpochSeries, l as analysisDatesOf, a as analysisWindowBounds, s as analysisWindowSlice, w as analyzePhysicalActivityDay, g as classifyActimetricPreschoolWristRf, u as classifyActimetricPreschoolWristRfLagLead, b as classifyActimetricPreschoolWristRfLagLeadCalibrated, d as clippedUnionHours, f as compareNonwearDetectorMasks, m as computeAnglez5s, h as computeCircadian, p as computeCircadianTyped, y as computeEnmo5s, v as computeMimsUnit, k as computeMimsUnitDataframe, C as computeMimsUnitTimingBreakdown, S as computeMimsUnitValues, A as computeNightDifficulty, R as computeNightDifficultyTyped, D as computeNightSignals, x as computeNightSignalsTyped, M as computeSleepMetrics, P as configureComputeMemoryBudgetV1, I as consensusDisagreementDetail, F as consensusDisagreements, W as convertBedWakeDaysDiary, O as convertScreensRedcapDiary, U as csvBufferAppend, z as csvBufferClear, N as cutpointEpochCompatibility, G as cutpointToneCodes, B as cutpointsRefusal, T as cutpointsValid, Rt as default, V as describeColumns, j as detectDetachFromAccelerationG, L as detectDeviceFormat, E as detectGgirHasptVariant, H as detectHdcza, q as detectHourClockJumpMs, X as detectNonwear, Z as detectNonwearChoi2011, $ as detectNonwearChoi2011Bouts, Y as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, J as detectNonwearChoi2012Bouts, Q as detectNonwearChoi2012Epoch, nn as detectNonwearChoiBouts, en as detectNonwearUnified, _n as detectNonwearUnifiedBatchTyped, tn as dstPlaceholderRuns, rn as effectiveOverrideCutpoints, on as epochAgreement, cn as epochRawData, ln as epochWithBandpass, an as epochsOverlapping, sn as executeHeroRuntime, wn as exportNapAggregate, gn as exportPeriodFigures, un as extractCapsense, bn as foldOntoGrid, dn as foldSampleBlocks, fn as foldSleepWakeVotes, mn as foldUniformOntoGrid, hn as fuseNonwearMasks, pn as generateActiwareRestIntervals, yn as getComputeCapabilitiesV1, vn as ggir5sWallClockMs, kn as ggirAppConfigSummary, Cn as ggirConfigValues, Sn as ggirDayValidFraction, An as ggirDaysIncluded, Rn as ggirDiaryLogShape, Dn as ggirDstPlaceholderCuts, xn as ggirIncludeDayCriterionHours, Mn as ggirIndicesToWallClockMs, Pn as ggirLabelsToStoredMs, In as ggirManualNightClocks, Fn as ggirMilestoneVersion, Wn as ggirRerunProfiles, On as ggirSleeplogStoredClocks, Un as ggirSptDurationHours, zn as ggirSummaryDenominator, Nn as gridOffsetWithin, Gn as identifyGgirRData, Bn as implausibilityReasons, At as initSync, Tn as installPanicHook, Vn as interRaterReliability, jn as irregularInternalDays, Ln as isGeneactivFormat, En as linearMemoryBytesV1, Hn as lstmSpectralFeatures30s, qn as markerIndexRange, Xn as markerSleepOnsetOffset, Zn as medianGapSeconds, $n as metricWarnings, Yn as midSleepClockHours, Kn as neishabouriCounts, Jn as nextDate, Qn as nightIntervalOverlap, ne as nonwearContributors, ee as nonwearInSleepCounts, _e as nonwearSleepOverlap, te as nonwearWeightRuns, re as normalizeCutpoints, ie as parseActigraphCsv, oe as parseActigraphCsvBuffered, ce as parseAw5, le as parseCwa, ae as parseEpochSeries, se as parseGeneactivBin, we as parseGeneactivCsv, ge as parseGeneactivCsvBuffered, ue as parseGt3x, be as participantValidity, de as physicalActivitySeriesGrid, fe as placeMarkers, me as placeMarkersBatch, he as placeMarkersTyped, pe as placeNonwearMarkers, ye as placeNonwearMarkersTyped, ve as prepareCompactPipelineOutcomeV1, ke as prepareCompactPipelineV1, Ce as processGeneactivRaw, Se as processGt3xPart1, Ae as processGt3xPart1WithEpoch, Re as processRawXyz, De as processRawXyzImputed, xe as processRawXyzImputedWithEpoch, Me as projectLabelsOntoGrid, Pe as rasterizePeriods, Ie as readGgirMeta, Fe as readGgirReportCsv, We as recommended_chunk_size_mb, Oe as reduceF64V1, Ue as rerunGgirResults, ze as resolveTimezone, Ne as restoredDstRuns, Ge as reviewGgirResults, Be as reviewNonwearFile, Te as reviewNonwearTotals, Ve as roundCountStorage, je as runCompactPipelineOutcomeV1, Le as runCompactPipelineV1, Ee as runFullPipelineOutcomeV1, He as runFullPipelineV1, qe as runGgirDeclaredEpochsV1, Xe as runGgirPart3, Ze as runMilestone, $e as scoreAllDays, Ye as scoreColeKripke, Ke as scoreConsensus, Je as scoreConsensusMajority, Qe as scoreConsensusTyped, n_ as scoreEpochs, e_ as scoreEpochsTyped, __ as scoreGgirHasib, t_ as scoreGgirHasibVariant, r_ as scoreGgirSib, i_ as scoreSadeh, o_ as settleManualNonwearNights, c_ as sha256StreamFeed, l_ as sha256StreamFinish, a_ as sha256StreamStart, s_ as shiftDate, w_ as sleepRegularityIndex, g_ as sleepWakeScores, u_ as sourceLabelsWallClockMs, b_ as spanFiniteMean, d_ as spliceDstPlaceholders, f_ as statesInPeriods, m_ as storedToGgirLabelsMs, h_ as streamParseFeed, p_ as streamParseFinish, y_ as streamParseFinishChunk, v_ as streamParseFinishChunkWithProgress, k_ as streamParseStart, C_ as streamParseStartData, S_ as streamParseStartWithEpoch, A_ as summarizeActimetricPreschoolWristRfClasses, R_ as summarizeExportGroups, D_ as summarizePhysicalActivityDays, x_ as summarizePhysicalActivityTrace, M_ as thresholdProbabilities, P_ as timeSemantics, I_ as timestampDiscontinuities, F_ as uniformTimestamps, W_ as utcDatesInSpan, O_ as utcDayIndex, U_ as validStateFraction, z_ as validWearDays, N_ as wallClockDstPlaceholders, G_ as wallClockLabels, B_ as wallMaskOntoGgirGrid, T_ as wearSiteHasptRouting, V_ as weekendDates, j_ as windowCoverage, L_ as zeroCrossingCounts };
