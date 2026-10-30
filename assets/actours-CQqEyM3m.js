var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Z_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		At.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = ht(n, At.__wbindgen_malloc), _ = Rt, t = At.aw5batch_new(e, _);
		if (t[2]) throw yt(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, Z_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), r = Rt;
		var i = bt(_) ? 0 : pt(_, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt;
		const c = At.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw yt(c[1]);
		return yt(c[0]);
	}
	subjects(n) {
		const e = At.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw yt(e[2]);
		var _ = nt(e[0], e[1]).slice();
		return At.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, $_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, $_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		At.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = At.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = At.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = At.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = At.streamchunkresult_axisX(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = At.streamchunkresult_axisY(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = At.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = At.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw yt(n[1]);
		return yt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== At.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = At.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = lt(n[0], n[1]).slice(), At.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = At.streamchunkresult_counts(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = At.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = At.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = At.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = At.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = _t(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = At.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = _t(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = At.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = Q_(e[0], e[1]).slice();
		return At.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return At.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = At.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = At.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== At.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = At.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = lt(n[0], n[1]).slice(), At.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = At.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = At.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = At.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== At.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return At.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return At.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return At.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = At.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = At.streamchunkresult_temperature(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = At.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = At.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = At.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = At.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = At.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = At.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, Y_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Y_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		At.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = At.streamparseresult_axisX(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = At.streamparseresult_axisY(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = At.streamparseresult_axisZ(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = At.streamparseresult_calibration(this.__wbg_ptr);
		if (n[2]) throw yt(n[1]);
		return yt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== At.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = At.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = lt(n[0], n[1]).slice(), At.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return At.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== At.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return At.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return At.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = At.streamparseresult_temperature(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = At.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = At.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n) {
	const e = At.actiwareIntervalStatistics(n);
	if (e[3]) throw yt(e[2]);
	var _ = nt(e[0], e[1]).slice();
	return At.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function r(n, e, _) {
	const t = ht(e, At.__wbindgen_malloc), r = Rt, i = At.actiwareSleepIntervals(n, t, r, bt(_) ? 0 : K_(_));
	if (i[3]) throw yt(i[2]);
	var o = nt(i[0], i[1]).slice();
	return At.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function i(n, e) {
	const _ = At.actiwareWakeThreshold(n, bt(e) ? 0 : K_(e));
	if (_[3]) throw yt(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function o() {
	let n, e;
	try {
		const _ = At.actoursVersion();
		return n = _[0], e = _[1], lt(_[0], _[1]);
	} finally {
		At.__wbindgen_free(n, e, 1);
	}
}
function c(n) {
	const e = At.aggregateEpochSeries(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function l(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = Rt, t = At.analysisDatesOf(e, _);
	var r = nt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function a(n, e) {
	const _ = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), t = Rt, r = At.analysisWindowBounds(_, t, !bt(e), bt(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = Q_(r[0], r[1]).slice(), At.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function s(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), i = Rt, o = At.analysisWindowSlice(_, t, r, i);
	var c = et(o[0], o[1]).slice();
	return At.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function w(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt, c = At.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function g(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = mt(e, At.__wbindgen_malloc), c = Rt, l = mt(_, At.__wbindgen_malloc), a = Rt, s = At.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw yt(s[2]);
	var w = _t(s[0], s[1]).slice();
	return At.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function u(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = mt(e, At.__wbindgen_malloc), c = Rt, l = mt(_, At.__wbindgen_malloc), a = Rt, s = At.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw yt(s[2]);
	var w = _t(s[0], s[1]).slice();
	return At.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function b(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = mt(e, At.__wbindgen_malloc), c = Rt, l = mt(_, At.__wbindgen_malloc), a = Rt, s = At.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw yt(s[2]);
	var w = _t(s[0], s[1]).slice();
	return At.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function d(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = mt(e, At.__wbindgen_malloc), c = Rt;
	return At.clippedUnionHours(r, i, o, c, _, t);
}
function f(n, e) {
	const _ = At.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw yt(_[1]);
	return yt(_[0]);
}
function m(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = mt(e, At.__wbindgen_malloc), c = Rt, l = mt(_, At.__wbindgen_malloc), a = Rt, s = At.computeAnglez5s(r, i, o, c, l, a, t);
	var w = Q_(s[0], s[1]).slice();
	return At.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function h(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt, c = At.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function p(n, e, _, t, r, i, o) {
	const c = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), l = Rt, a = mt(e, At.__wbindgen_malloc), s = Rt, w = dt(_, At.__wbindgen_malloc), g = Rt, u = mt(t, At.__wbindgen_malloc), b = Rt, d = dt(r, At.__wbindgen_malloc), f = Rt, m = ft(i, At.__wbindgen_malloc), h = Rt, p = dt(o, At.__wbindgen_malloc), y = Rt, v = At.computeCircadianTyped(c, l, a, s, w, g, u, b, d, f, m, h, p, y);
	if (v[2]) throw yt(v[1]);
	return yt(v[0]);
}
function y(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = mt(e, At.__wbindgen_malloc), c = Rt, l = mt(_, At.__wbindgen_malloc), a = Rt, s = At.computeEnmo5s(r, i, o, c, l, a, t);
	var w = Q_(s[0], s[1]).slice();
	return At.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function v(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = Rt, c = mt(e, At.__wbindgen_malloc), l = Rt, a = mt(_, At.__wbindgen_malloc), s = Rt, w = At.computeMimsUnit(i, o, c, l, a, s, t, bt(r) ? 0 : K_(r));
	if (w[2]) throw yt(w[1]);
	return yt(w[0]);
}
function k(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = Rt, c = mt(e, At.__wbindgen_malloc), l = Rt, a = mt(_, At.__wbindgen_malloc), s = Rt, w = mt(t, At.__wbindgen_malloc), g = Rt, u = At.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, bt(r) ? 0 : K_(r));
	if (u[2]) throw yt(u[1]);
	return yt(u[0]);
}
function C(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = Rt, c = mt(e, At.__wbindgen_malloc), l = Rt, a = mt(_, At.__wbindgen_malloc), s = Rt, w = At.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, bt(r) ? 0 : K_(r));
	if (w[2]) throw yt(w[1]);
	return yt(w[0]);
}
function S(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = Rt, c = mt(e, At.__wbindgen_malloc), l = Rt, a = mt(_, At.__wbindgen_malloc), s = Rt, w = At.computeMimsUnitValues(i, o, c, l, a, s, t, bt(r) ? 0 : K_(r));
	if (w[3]) throw yt(w[2]);
	var g = Q_(w[0], w[1]).slice();
	return At.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function A(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt, c = At.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function R(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), y = Rt, v = mt(e, At.__wbindgen_malloc), k = Rt, C = dt(_, At.__wbindgen_malloc), S = Rt, A = mt(t, At.__wbindgen_malloc), R = Rt, D = dt(r, At.__wbindgen_malloc), x = Rt, M = ft(i, At.__wbindgen_malloc), P = Rt, I = dt(o, At.__wbindgen_malloc), F = Rt, W = ft(c, At.__wbindgen_malloc), O = Rt, N = dt(l, At.__wbindgen_malloc), U = Rt, z = mt(a, At.__wbindgen_malloc), G = Rt, B = dt(s, At.__wbindgen_malloc), T = Rt, V = mt(w, At.__wbindgen_malloc), j = Rt, L = dt(g, At.__wbindgen_malloc), E = Rt, H = mt(u, At.__wbindgen_malloc), X = Rt, q = dt(b, At.__wbindgen_malloc), Z = Rt, $ = mt(d, At.__wbindgen_malloc), Y = Rt, K = dt(f, At.__wbindgen_malloc), J = Rt, Q = ft(m, At.__wbindgen_malloc), nn = Rt, en = dt(h, At.__wbindgen_malloc), _n = Rt, tn = At.computeNightDifficultyTyped(p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, N, U, z, G, B, T, V, j, L, E, H, X, q, Z, $, Y, K, J, Q, nn, en, _n);
	if (tn[2]) throw yt(tn[1]);
	return yt(tn[0]);
}
function D(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt, c = At.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function x(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), y = Rt, v = mt(e, At.__wbindgen_malloc), k = Rt, C = dt(_, At.__wbindgen_malloc), S = Rt, A = mt(t, At.__wbindgen_malloc), R = Rt, D = dt(r, At.__wbindgen_malloc), x = Rt, M = ft(i, At.__wbindgen_malloc), P = Rt, I = dt(o, At.__wbindgen_malloc), F = Rt, W = ft(c, At.__wbindgen_malloc), O = Rt, N = dt(l, At.__wbindgen_malloc), U = Rt, z = mt(a, At.__wbindgen_malloc), G = Rt, B = dt(s, At.__wbindgen_malloc), T = Rt, V = mt(w, At.__wbindgen_malloc), j = Rt, L = dt(g, At.__wbindgen_malloc), E = Rt, H = mt(u, At.__wbindgen_malloc), X = Rt, q = dt(b, At.__wbindgen_malloc), Z = Rt, $ = mt(d, At.__wbindgen_malloc), Y = Rt, K = dt(f, At.__wbindgen_malloc), J = Rt, Q = ft(m, At.__wbindgen_malloc), nn = Rt, en = dt(h, At.__wbindgen_malloc), _n = Rt, tn = At.computeNightSignalsTyped(p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, N, U, z, G, B, T, V, j, L, E, H, X, q, Z, $, Y, K, J, Q, nn, en, _n);
	if (tn[2]) throw yt(tn[1]);
	return yt(tn[0]);
}
function M(n, e, _) {
	const t = ft(n, At.__wbindgen_malloc), r = Rt, i = mt(e, At.__wbindgen_malloc), o = Rt, c = At.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw yt(c[1]);
	return yt(c[0]);
}
function P(n) {
	const e = At.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function I(n) {
	const e = ht(n, At.__wbindgen_malloc), _ = Rt, t = At.consensusDisagreementDetail(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function F(n) {
	const e = At.consensusDisagreements(n);
	if (e[3]) throw yt(e[2]);
	var _ = nt(e[0], e[1]).slice();
	return At.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function W(n) {
	const e = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), _ = Rt, t = At.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function O(n) {
	const e = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), _ = Rt, t = At.convertScreensRedcapDiary(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function N(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = Rt;
	At.csvBufferAppend(e, _);
}
function U(n) {
	At.csvBufferClear(n);
}
function z(n, e) {
	const _ = At.cutpointEpochCompatibility(n, e);
	if (_[2]) throw yt(_[1]);
	return yt(_[0]);
}
function G(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = Rt, c = At.cutpointToneCodes(i, o, e, _, t, r);
	var l = _t(c[0], c[1]).slice();
	return At.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = At.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = lt(r[0], r[1]).slice(), At.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function T(n, e, _, t) {
	return 0 !== At.cutpointsValid(n, e, _, t);
}
function V(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = dt(e, At.__wbindgen_malloc), i = Rt, o = At.describeColumns(_, t, r, i);
	if (o[3]) throw yt(o[2]);
	var c = nt(o[0], o[1]).slice();
	return At.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function j(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = mt(e, At.__wbindgen_malloc), i = Rt, o = At.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw yt(o[2]);
	var c = _t(o[0], o[1]).slice();
	return At.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function L(n, e) {
	let _, t;
	try {
		const r = ft(n, At.__wbindgen_malloc), i = Rt, o = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), c = Rt, l = At.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], lt(l[0], l[1]);
	} finally {
		At.__wbindgen_free(_, t, 1);
	}
}
function E(n) {
	const e = At.detectGgirHasptVariant(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function H(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = Rt;
	var c = bt(e) ? 0 : pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), l = Rt, a = bt(_) ? 0 : mt(_, At.__wbindgen_malloc), s = Rt, w = bt(t) ? 0 : mt(t, At.__wbindgen_malloc), g = Rt, u = bt(r) ? 0 : pt(r, At.__wbindgen_malloc, At.__wbindgen_realloc), b = Rt;
	const d = At.detectHdcza(i, o, c, l, a, s, w, g, u, b);
	if (d[2]) throw yt(d[1]);
	return yt(d[0]);
}
function X(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = Rt;
	return 0 !== At.detectHourClockJumpMs(e, _);
}
function q(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = Rt, t = At.detectNonwear(e, _);
	var r = _t(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Z(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = Rt, t = At.detectNonwearChoi2011(e, _);
	var r = _t(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = Rt, t = At.detectNonwearChoi2011Bouts(e, _);
	if (t[3]) throw yt(t[2]);
	var r = nt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Y(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = At.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw yt(r[2]);
	var i = _t(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = Rt, t = At.detectNonwearChoi2012(e, _);
	var r = _t(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function J(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = Rt, t = At.detectNonwearChoi2012Bouts(e, _);
	if (t[3]) throw yt(t[2]);
	var r = nt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Q(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = At.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw yt(r[2]);
	var i = _t(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function nn(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = Rt, t = At.detectNonwearChoiBouts(e, _);
	if (t[3]) throw yt(t[2]);
	var r = nt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function en(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt, c = At.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function _n(n, e, _, t, r, i, o) {
	const c = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), l = Rt, a = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), s = Rt, w = mt(_, At.__wbindgen_malloc), g = Rt, u = mt(t, At.__wbindgen_malloc), b = Rt, d = mt(r, At.__wbindgen_malloc), f = Rt, m = At.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, u, b, d, f, i, o);
	if (m[2]) throw yt(m[1]);
	return yt(m[0]);
}
function tn(n, e, _) {
	const t = ht(_, At.__wbindgen_malloc), r = Rt, i = At.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw yt(i[2]);
	var o = nt(i[0], i[1]).slice();
	return At.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function rn(n, e, _, t) {
	const r = At.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = Q_(r[0], r[1]).slice(), At.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function on(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = mt(e, At.__wbindgen_malloc), i = Rt, o = At.epochAgreement(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return yt(o[0]);
}
function cn(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = Rt, c = mt(e, At.__wbindgen_malloc), l = Rt, a = mt(_, At.__wbindgen_malloc), s = Rt, w = mt(t, At.__wbindgen_malloc), g = Rt, u = At.epochRawData(i, o, c, l, a, s, w, g, r);
	if (u[2]) throw yt(u[1]);
	return yt(u[0]);
}
function ln(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = Rt, i = mt(e, At.__wbindgen_malloc), o = Rt, c = At.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw yt(c[1]);
	return yt(c[0]);
}
function an(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = At.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = et(o[0], o[1]).slice(), At.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function sn(n, e) {
	let _, t;
	try {
		const o = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), c = Rt, l = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), a = Rt, s = At.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, yt(s[2]);
		return _ = r, t = i, lt(r, i);
	} finally {
		At.__wbindgen_free(_, t, 1);
	}
}
function wn(n) {
	const e = ht(n, At.__wbindgen_malloc), _ = Rt, t = At.exportNapAggregate(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function gn(n, e, _) {
	const t = ht(_, At.__wbindgen_malloc), r = Rt, i = At.exportPeriodFigures(!bt(n), bt(n) ? 0 : n, !bt(e), bt(e) ? 0 : e, t, r);
	if (i[2]) throw yt(i[1]);
	return yt(i[0]);
}
function un(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = Rt, t = At.extractCapsense(e, _);
	if (t[3]) throw yt(t[2]);
	var r = nt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function bn(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = Rt, c = mt(e, At.__wbindgen_malloc), l = Rt, a = mt(_, At.__wbindgen_malloc), s = Rt, w = pt(r, At.__wbindgen_malloc, At.__wbindgen_realloc), g = Rt, u = At.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (u[3]) throw yt(u[2]);
	var b = Q_(u[0], u[1]).slice();
	return At.__wbindgen_free(u[0], 8 * u[1], 8), b;
}
function dn(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = pt(t, At.__wbindgen_malloc, At.__wbindgen_realloc), c = Rt, l = At.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw yt(l[2]);
	var a = Q_(l[0], l[1]).slice();
	return At.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function fn(n, e, _, t, r) {
	const i = ft(_, At.__wbindgen_malloc), o = Rt, c = mt(t, At.__wbindgen_malloc), l = Rt, a = At.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw yt(a[1]);
	return yt(a[0]);
}
function mn(n, e, _, t, r, i) {
	const o = mt(_, At.__wbindgen_malloc), c = Rt, l = mt(t, At.__wbindgen_malloc), a = Rt, s = pt(i, At.__wbindgen_malloc, At.__wbindgen_realloc), w = Rt, g = At.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw yt(g[2]);
	var u = Q_(g[0], g[1]).slice();
	return At.__wbindgen_free(g[0], 8 * g[1], 8), u;
}
function hn(n) {
	const e = At.fuseNonwearMasks(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function pn(n, e, _) {
	var t = bt(_) ? 0 : pt(_, At.__wbindgen_malloc, At.__wbindgen_realloc), r = Rt;
	const i = At.generateActiwareRestIntervals(n, bt(e) ? 0 : K_(e), t, r);
	if (i[3]) throw yt(i[2]);
	var o = nt(i[0], i[1]).slice();
	return At.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function yn() {
	const n = At.getComputeCapabilitiesV1();
	if (n[2]) throw yt(n[1]);
	return yt(n[0]);
}
function vn(n, e, _) {
	const t = ht(_, At.__wbindgen_malloc), r = Rt, i = At.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw yt(i[2]);
	var o = Q_(i[0], i[1]).slice();
	return At.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function kn(n, e) {
	var _ = bt(n) ? 0 : pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), t = Rt;
	const r = At.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw yt(r[1]);
	return yt(r[0]);
}
function Cn(n) {
	const e = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), _ = Rt, t = At.ggirConfigValues(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function Sn(n, e) {
	const _ = At.ggirDayValidFraction(n, e);
	return 0 === _[0] ? void 0 : _[1];
}
function An(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = Rt;
	var i = bt(e) ? 0 : mt(e, At.__wbindgen_malloc), o = Rt, c = bt(_) ? 0 : pt(_, At.__wbindgen_malloc, At.__wbindgen_realloc), l = Rt;
	const a = At.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw yt(a[2]);
	var s = _t(a[0], a[1]).slice();
	return At.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function Rn(n, e) {
	const _ = ft(n, At.__wbindgen_malloc), t = Rt;
	var r = bt(e) ? 0 : pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), i = Rt;
	const o = At.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return yt(o[0]);
}
function Dn(n, e, _) {
	const t = ht(e, At.__wbindgen_malloc), r = Rt;
	var i = bt(_) ? 0 : mt(_, At.__wbindgen_malloc), o = Rt;
	const c = At.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw yt(c[2]);
	var l = nt(c[0], c[1]).slice();
	return At.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function xn(n) {
	var e = bt(n) ? 0 : pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), _ = Rt;
	const t = At.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw yt(t[1]);
	return t[0];
}
function Mn(n, e, _, t) {
	const r = dt(n, At.__wbindgen_malloc), i = Rt, o = ht(_, At.__wbindgen_malloc), c = Rt;
	var l = bt(t) ? 0 : mt(t, At.__wbindgen_malloc), a = Rt;
	const s = At.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw yt(s[2]);
	var w = Q_(s[0], s[1]).slice();
	return At.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function Pn(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = ht(e, At.__wbindgen_malloc), i = Rt, o = At.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw yt(o[2]);
	var c = Q_(o[0], o[1]).slice();
	return At.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function In(n, e, _, t) {
	const r = ht(n, At.__wbindgen_malloc), i = Rt, o = mt(e, At.__wbindgen_malloc), c = Rt, l = mt(_, At.__wbindgen_malloc), a = Rt, s = mt(t, At.__wbindgen_malloc), w = Rt, g = At.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw yt(g[1]);
	return yt(g[0]);
}
function Fn(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = Rt, t = At.ggirMilestoneVersion(e, _);
	if (t[3]) throw yt(t[2]);
	let r;
	return 0 !== t[0] && (r = lt(t[0], t[1]).slice(), At.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Wn(n) {
	const e = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), _ = Rt, t = At.ggirNonwearApproach(e, _);
	if (t[3]) throw yt(t[2]);
	let r;
	return 0 !== t[0] && (r = lt(t[0], t[1]).slice(), At.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function On(n) {
	const e = At.ggirPersonSummaries(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Nn() {
	const n = At.ggirRerunProfiles();
	if (n[3]) throw yt(n[2]);
	var e = nt(n[0], n[1]).slice();
	return At.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function Un(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = Rt, t = At.ggirSavedNonwearWindows(e, _);
	if (t[2]) throw yt(t[1]);
	return t[0] >>> 0;
}
function zn(n, e, _, t) {
	const r = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), i = Rt, o = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), c = Rt, l = pt(_, At.__wbindgen_malloc, At.__wbindgen_realloc), a = Rt, s = ht(t, At.__wbindgen_malloc), w = Rt, g = At.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw yt(g[2]);
	let u;
	return 0 !== g[0] && (u = nt(g[0], g[1]).slice(), At.__wbindgen_free(g[0], 4 * g[1], 4)), u;
}
function Gn(n, e) {
	return At.ggirSptDurationHours(n, e);
}
function Bn(n, e) {
	const _ = At.ggirSummaryDenominator(n, e);
	if (_[2]) throw yt(_[1]);
	return yt(_[0]);
}
function Tn(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = mt(e, At.__wbindgen_malloc), i = Rt, o = At.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Vn(n) {
	let e, _;
	try {
		const i = ft(n, At.__wbindgen_malloc), o = Rt, c = At.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function jn(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = mt(e, At.__wbindgen_malloc), c = Rt, l = mt(_, At.__wbindgen_malloc), a = Rt, s = mt(t, At.__wbindgen_malloc), w = Rt, g = At.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw yt(g[1]);
	return yt(g[0]);
}
function Ln() {
	At.installPanicHook();
}
function En(n) {
	const e = ht(n, At.__wbindgen_malloc), _ = Rt, t = At.interRaterReliability(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function Hn(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = At.irregularInternalDays(_, t, e);
	var i = nt(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Xn(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = Rt;
	return 0 !== At.isGeneactivFormat(e, _);
}
function qn() {
	return At.linearMemoryBytesV1();
}
function Zn(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = mt(e, At.__wbindgen_malloc), c = Rt, l = mt(_, At.__wbindgen_malloc), a = Rt, s = At.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw yt(s[1]);
	return yt(s[0]);
}
function $n(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = Rt, i = At.markerIndexRange(t, r, e, _);
	var o = et(i[0], i[1]).slice();
	return At.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Yn(n, e, _, t, r, i, o) {
	const c = mt(n, At.__wbindgen_malloc), l = Rt, a = mt(e, At.__wbindgen_malloc), s = Rt, w = At.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw yt(w[1]);
	return yt(w[0]);
}
function Kn(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = Rt, t = At.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Jn(n, e, _, t) {
	const r = At.metricWarnings(n, e, _, t);
	var i = _t(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Qn(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = mt(e, At.__wbindgen_malloc), i = Rt, o = At.midSleepClockHours(_, t, r, i);
	var c = Q_(o[0], o[1]).slice();
	return At.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function ne(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = Rt, c = mt(e, At.__wbindgen_malloc), l = Rt, a = mt(_, At.__wbindgen_malloc), s = Rt, w = At.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw yt(w[1]);
	return yt(w[0]);
}
function ee(n) {
	const e = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), _ = Rt, t = At.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = lt(t[0], t[1]).slice(), At.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function _e(n, e, _, t, r) {
	const i = mt(_, At.__wbindgen_malloc), o = Rt, c = mt(t, At.__wbindgen_malloc), l = Rt, a = mt(r, At.__wbindgen_malloc), s = Rt, w = At.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw yt(w[1]);
	return yt(w[0]);
}
function te(n, e, _, t) {
	let r, i;
	try {
		const l = dt(n, At.__wbindgen_malloc), a = Rt, s = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), w = Rt, g = At.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, yt(g[2]);
		return r = o, i = c, lt(o, c);
	} finally {
		At.__wbindgen_free(r, i, 1);
	}
}
function re(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = Rt, t = At.nonwearInSleepCounts(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function ie(n) {
	const e = At.nonwearSleepOverlap(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function oe(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = Rt, i = mt(e, At.__wbindgen_malloc), o = Rt, c = At.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw yt(c[1]);
	return yt(c[0]);
}
function ce(n, e, _, t, r, i) {
	const o = pt(r, At.__wbindgen_malloc, At.__wbindgen_realloc), c = Rt, l = At.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw yt(l[2]);
	var a = Q_(l[0], l[1]).slice();
	return At.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function le(n, e) {
	const _ = ft(n, At.__wbindgen_malloc), t = Rt, r = At.parseActigraphCsv(_, t, e);
	if (r[2]) throw yt(r[1]);
	return yt(r[0]);
}
function ae(n) {
	const e = At.parseActigraphCsvBuffered(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function se(n, e, _, t) {
	const r = ft(n, At.__wbindgen_malloc), i = Rt;
	var o = bt(e) ? 0 : pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), c = Rt, l = bt(_) ? 0 : ht(_, At.__wbindgen_malloc), a = Rt, s = bt(t) ? 0 : pt(t, At.__wbindgen_malloc, At.__wbindgen_realloc), w = Rt;
	const g = At.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw yt(g[1]);
	return yt(g[0]);
}
function we(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = Rt, t = At.parseCwa(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function ge(n, e) {
	const _ = ft(n, At.__wbindgen_malloc), t = Rt, r = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), i = Rt, o = At.parseEpochSeries(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return yt(o[0]);
}
function ue(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = Rt, t = At.parseGeneactivBin(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function be(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = Rt, t = At.parseGeneactivCsv(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function de() {
	const n = At.parseGeneactivCsvBuffered();
	if (n[2]) throw yt(n[1]);
	return yt(n[0]);
}
function fe(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = Rt, t = At.parseGt3x(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function me(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = ft(e, At.__wbindgen_malloc), c = Rt, l = ft(_, At.__wbindgen_malloc), a = Rt, s = At.participantValidity(r, i, o, c, l, a, bt(t) ? 0 : K_(t));
	if (s[2]) throw yt(s[1]);
	return yt(s[0]);
}
function he(n, e, _, t, r) {
	const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt, c = mt(e, At.__wbindgen_malloc), l = Rt;
	var a = bt(_) ? 0 : mt(_, At.__wbindgen_malloc), s = Rt;
	const w = At.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw yt(w[1]);
	return yt(w[0]);
}
function pe(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt, c = At.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function ye(n, e, _, t, r, i) {
	const o = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), c = Rt, l = mt(e, At.__wbindgen_malloc), a = Rt, s = mt(_, At.__wbindgen_malloc), w = Rt, g = ft(t, At.__wbindgen_malloc), u = Rt, b = ft(r, At.__wbindgen_malloc), d = Rt, f = pt(i, At.__wbindgen_malloc, At.__wbindgen_realloc), m = Rt, h = At.placeMarkersBatch(o, c, l, a, s, w, g, u, b, d, f, m);
	if (h[2]) throw yt(h[1]);
	return yt(h[0]);
}
function ve(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h, p) {
	const y = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), v = Rt, k = mt(e, At.__wbindgen_malloc), C = Rt, S = dt(_, At.__wbindgen_malloc), A = Rt, R = mt(t, At.__wbindgen_malloc), D = Rt, x = dt(r, At.__wbindgen_malloc), M = Rt, P = ft(i, At.__wbindgen_malloc), I = Rt, F = dt(o, At.__wbindgen_malloc), W = Rt, O = ft(c, At.__wbindgen_malloc), N = Rt, U = dt(l, At.__wbindgen_malloc), z = Rt, G = mt(a, At.__wbindgen_malloc), B = Rt, T = dt(s, At.__wbindgen_malloc), V = Rt, j = mt(w, At.__wbindgen_malloc), L = Rt, E = dt(g, At.__wbindgen_malloc), H = Rt, X = mt(u, At.__wbindgen_malloc), q = Rt, Z = dt(b, At.__wbindgen_malloc), $ = Rt, Y = mt(d, At.__wbindgen_malloc), K = Rt, J = dt(f, At.__wbindgen_malloc), Q = Rt, nn = ft(m, At.__wbindgen_malloc), en = Rt, _n = dt(h, At.__wbindgen_malloc), tn = Rt;
	var rn = bt(p) ? 0 : pt(p, At.__wbindgen_malloc, At.__wbindgen_realloc), on = Rt;
	const cn = At.placeMarkersTyped(y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, N, U, z, G, B, T, V, j, L, E, H, X, q, Z, $, Y, K, J, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw yt(cn[1]);
	return yt(cn[0]);
}
function ke(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt, c = At.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function Ce(n, e, _, t) {
	const r = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), i = Rt, o = mt(e, At.__wbindgen_malloc), c = Rt, l = mt(_, At.__wbindgen_malloc), a = Rt, s = ft(t, At.__wbindgen_malloc), w = Rt, g = At.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw yt(g[1]);
	return yt(g[0]);
}
function Se(n) {
	const e = At.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Ae(n) {
	const e = At.prepareCompactPipelineV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Re(n, e, _, t, r, i, o, c) {
	const l = mt(n, At.__wbindgen_malloc), a = Rt, s = mt(e, At.__wbindgen_malloc), w = Rt, g = mt(_, At.__wbindgen_malloc), u = Rt, b = mt(t, At.__wbindgen_malloc), d = Rt;
	var f = bt(o) ? 0 : pt(o, At.__wbindgen_malloc, At.__wbindgen_realloc), m = Rt, h = bt(c) ? 0 : pt(c, At.__wbindgen_malloc, At.__wbindgen_realloc), p = Rt;
	const y = At.processGeneactivRaw(l, a, s, w, g, u, b, d, r, i, f, m, h, p);
	if (y[2]) throw yt(y[1]);
	return yt(y[0]);
}
function De(n, e) {
	const _ = ft(n, At.__wbindgen_malloc), t = Rt;
	var r = bt(e) ? 0 : pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), i = Rt;
	const o = At.processGt3xPart1(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return yt(o[0]);
}
function xe(n, e, _) {
	const t = ft(n, At.__wbindgen_malloc), r = Rt;
	var i = bt(_) ? 0 : pt(_, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt;
	const c = At.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw yt(c[1]);
	return yt(c[0]);
}
function Me(n, e, _, t, r, i, o) {
	const c = mt(n, At.__wbindgen_malloc), l = Rt, a = mt(e, At.__wbindgen_malloc), s = Rt, w = mt(_, At.__wbindgen_malloc), g = Rt;
	var u = bt(i) ? 0 : pt(i, At.__wbindgen_malloc, At.__wbindgen_realloc), b = Rt, d = bt(o) ? 0 : pt(o, At.__wbindgen_malloc, At.__wbindgen_realloc), f = Rt;
	const m = At.processRawXyz(c, l, a, s, w, g, t, r, u, b, d, f);
	if (m[2]) throw yt(m[1]);
	return yt(m[0]);
}
function Pe(n, e, _, t, r, i, o, c) {
	const l = mt(n, At.__wbindgen_malloc), a = Rt, s = mt(e, At.__wbindgen_malloc), w = Rt, g = mt(_, At.__wbindgen_malloc), u = Rt, b = mt(t, At.__wbindgen_malloc), d = Rt;
	var f = bt(i) ? 0 : pt(i, At.__wbindgen_malloc, At.__wbindgen_realloc), m = Rt, h = bt(o) ? 0 : pt(o, At.__wbindgen_malloc, At.__wbindgen_realloc), p = Rt, y = bt(c) ? 0 : mt(c, At.__wbindgen_malloc), v = Rt;
	const k = At.processRawXyzImputed(l, a, s, w, g, u, b, d, r, f, m, h, p, y, v);
	if (k[2]) throw yt(k[1]);
	return yt(k[0]);
}
function Ie(n, e, _, t, r, i, o, c, l, a) {
	const s = mt(n, At.__wbindgen_malloc), w = Rt, g = mt(e, At.__wbindgen_malloc), u = Rt, b = mt(_, At.__wbindgen_malloc), d = Rt, f = mt(t, At.__wbindgen_malloc), m = Rt;
	var h = bt(i) ? 0 : pt(i, At.__wbindgen_malloc, At.__wbindgen_realloc), p = Rt, y = bt(c) ? 0 : pt(c, At.__wbindgen_malloc, At.__wbindgen_realloc), v = Rt, k = bt(a) ? 0 : mt(a, At.__wbindgen_malloc), C = Rt;
	const S = At.processRawXyzImputedWithEpoch(s, w, g, u, b, d, f, m, r, h, p, o, y, v, bt(l) ? 16777215 : l ? 1 : 0, k, C);
	if (S[2]) throw yt(S[1]);
	return yt(S[0]);
}
function Fe(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = ft(e, At.__wbindgen_malloc), c = Rt, l = mt(t, At.__wbindgen_malloc), a = Rt, s = At.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = _t(s[0], s[1]).slice();
	return At.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function We(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = mt(e, At.__wbindgen_malloc), c = Rt, l = mt(_, At.__wbindgen_malloc), a = Rt, s = At.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw yt(s[1]);
	return yt(s[0]);
}
function Oe(n, e, _) {
	const t = ft(n, At.__wbindgen_malloc), r = Rt;
	var i = bt(e) ? 0 : pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt;
	const c = At.readGgirMeta(t, r, i, o, bt(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw yt(c[1]);
	return yt(c[0]);
}
function Ne(n, e) {
	const _ = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), t = Rt;
	var r = bt(e) ? 0 : pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), i = Rt;
	const o = At.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return yt(o[0]);
}
function Ue() {
	return At.recommended_chunk_size_mb() >>> 0;
}
function ze(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), i = Rt, o = At.reduceF64V1(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return o[0];
}
function Ge(n, e) {
	const _ = ht(e, At.__wbindgen_malloc), t = Rt, r = At.rerunGgirResults(n, _, t);
	if (r[2]) throw yt(r[1]);
	return yt(r[0]);
}
function Be(n) {
	const e = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), _ = Rt, t = At.resolveTimezone(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function Te(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = Rt, i = mt(e, At.__wbindgen_malloc), o = Rt, c = dt(_, At.__wbindgen_malloc), l = Rt, a = At.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw yt(a[2]);
	var s = nt(a[0], a[1]).slice();
	return At.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function Ve(n, e, _, t, r, i, o, c, l, a, s, w, g, u) {
	const b = ft(n, At.__wbindgen_malloc), d = Rt, f = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), m = Rt;
	var h = bt(_) ? 0 : ft(_, At.__wbindgen_malloc), p = Rt, y = bt(t) ? 0 : ft(t, At.__wbindgen_malloc), v = Rt, k = bt(r) ? 0 : ft(r, At.__wbindgen_malloc), C = Rt, S = bt(i) ? 0 : ft(i, At.__wbindgen_malloc), A = Rt, R = bt(o) ? 0 : ft(o, At.__wbindgen_malloc), D = Rt, x = bt(c) ? 0 : pt(c, At.__wbindgen_malloc, At.__wbindgen_realloc), M = Rt, P = bt(l) ? 0 : pt(l, At.__wbindgen_malloc, At.__wbindgen_realloc), I = Rt, F = bt(a) ? 0 : ht(a, At.__wbindgen_malloc), W = Rt, O = bt(w) ? 0 : pt(w, At.__wbindgen_malloc, At.__wbindgen_realloc), N = Rt, U = bt(g) ? 0 : pt(g, At.__wbindgen_malloc, At.__wbindgen_realloc), z = Rt;
	const G = At.reviewGgirResults(b, d, f, m, h, p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, s, O, N, U, z, bt(u) ? 4294967297 : u >>> 0);
	if (G[2]) throw yt(G[1]);
	return yt(G[0]);
}
function je(n) {
	const e = ht(n, At.__wbindgen_malloc), _ = Rt, t = At.reviewNonwearFile(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function Le(n) {
	const e = ht(n, At.__wbindgen_malloc), _ = Rt, t = At.reviewNonwearTotals(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function Ee(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = At.roundCountStorage(_, t, e);
	var i = Q_(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function He(n) {
	const e = At.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Xe(n) {
	const e = At.runCompactPipelineV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function qe(n) {
	const e = At.runFullPipelineOutcomeV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Ze(n) {
	const e = At.runFullPipelineV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function $e(n) {
	const e = At.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Ye(n) {
	const e = At.runGgirPart3(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Ke(n, e) {
	const _ = ft(n, At.__wbindgen_malloc), t = Rt;
	var r = bt(e) ? 0 : pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), i = Rt;
	const o = At.runMilestone(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return yt(o[0]);
}
function Je(n) {
	const e = ht(n, At.__wbindgen_malloc), _ = Rt, t = At.scoreAllDays(e, _);
	if (t[3]) throw yt(t[2]);
	var r = nt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Qe(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = At.scoreColeKripke(_, t, e);
	var i = _t(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function n_(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt, c = At.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function e_(n) {
	const e = At.scoreConsensusMajority(n);
	if (e[3]) throw yt(e[2]);
	var _ = _t(e[0], e[1]).slice();
	return At.__wbindgen_free(e[0], 1 * e[1], 1), _;
}
function __(n, e, _) {
	const t = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), r = Rt, i = ft(e, At.__wbindgen_malloc), o = Rt, c = dt(_, At.__wbindgen_malloc), l = Rt, a = At.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw yt(a[1]);
	return yt(a[0]);
}
function t_(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt, c = At.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function r_(n, e, _, t, r, i) {
	const o = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), c = Rt, l = mt(e, At.__wbindgen_malloc), a = Rt, s = mt(_, At.__wbindgen_malloc), w = Rt, g = mt(t, At.__wbindgen_malloc), u = Rt, b = At.scoreEpochsTyped(o, c, l, a, s, w, g, u, r, i);
	if (b[2]) throw yt(b[1]);
	return yt(b[0]);
}
function i_(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = Rt;
	var i = bt(e) ? 0 : pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt, c = bt(_) ? 0 : mt(_, At.__wbindgen_malloc), l = Rt;
	const a = At.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw yt(a[2]);
	var s = _t(a[0], a[1]).slice();
	return At.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function o_(n) {
	const e = At.scoreGgirHasibVariant(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function c_(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = Rt, c = mt(e, At.__wbindgen_malloc), l = Rt;
	var a = bt(t) ? 0 : pt(t, At.__wbindgen_malloc, At.__wbindgen_realloc), s = Rt, w = bt(r) ? 0 : mt(r, At.__wbindgen_malloc), g = Rt;
	const u = At.scoreGgirSib(i, o, c, l, _, a, s, w, g);
	if (u[2]) throw yt(u[1]);
	return yt(u[0]);
}
function l_(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = At.scoreSadeh(_, t, e);
	var i = _t(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function a_(n) {
	const e = ht(n, At.__wbindgen_malloc), _ = Rt, t = At.settleManualNonwearNights(e, _);
	if (t[3]) throw yt(t[2]);
	var r = nt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function s_(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = Rt, t = At.sha256StreamFeed(e, _);
	if (t[1]) throw yt(t[0]);
}
function w_() {
	let n, e;
	try {
		const r = At.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, yt(r[2]);
		return n = _, e = t, lt(_, t);
	} finally {
		At.__wbindgen_free(n, e, 1);
	}
}
function g_() {
	At.sha256StreamStart();
}
function u_(n, e) {
	const _ = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), t = Rt, r = At.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = lt(r[0], r[1]).slice(), At.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function b_(n, e, _, t, r) {
	const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt, c = mt(e, At.__wbindgen_malloc), l = Rt, a = dt(_, At.__wbindgen_malloc), s = Rt, w = mt(t, At.__wbindgen_malloc), g = Rt, u = dt(r, At.__wbindgen_malloc), b = Rt, d = At.sleepRegularityIndex(i, o, c, l, a, s, w, g, u, b);
	if (d[3]) throw yt(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function d_(n, e) {
	const _ = At.sleepWakeScores(n, bt(e) ? 0 : K_(e));
	if (_[2]) throw yt(_[1]);
	return yt(_[0]);
}
function f_(n) {
	const e = ht(n, At.__wbindgen_malloc), _ = Rt, t = At.sourceLabelsWallClockMs(e, _);
	var r = Q_(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function m_(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = mt(e, At.__wbindgen_malloc), c = Rt, l = At.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function h_(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = Rt, i = ht(e, At.__wbindgen_malloc), o = Rt, c = mt(_, At.__wbindgen_malloc), l = Rt, a = At.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw yt(a[2]);
	let s;
	return 0 !== a[0] && (s = Q_(a[0], a[1]).slice(), At.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function p_(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = ft(e, At.__wbindgen_malloc), c = Rt, l = mt(_, At.__wbindgen_malloc), a = Rt, s = mt(t, At.__wbindgen_malloc), w = Rt, g = At.statesInPeriods(r, i, o, c, l, a, s, w);
	var u = _t(g[0], g[1]).slice();
	return At.__wbindgen_free(g[0], 1 * g[1], 1), u;
}
function y_(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = ht(e, At.__wbindgen_malloc), i = Rt, o = At.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw yt(o[2]);
	var c = Q_(o[0], o[1]).slice();
	return At.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function v_(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = Rt, t = At.streamParseFeed(e, _);
	if (t[2]) throw yt(t[1]);
	return t[0] >>> 0;
}
function k_() {
	const n = At.streamParseFinish();
	if (n[2]) throw yt(n[1]);
	return _.__wrap(n[0]);
}
function C_() {
	const n = At.streamParseFinishChunk();
	if (n[2]) throw yt(n[1]);
	return e.__wrap(n[0]);
}
function S_(n) {
	const _ = At.streamParseFinishChunkWithProgress(n);
	if (_[2]) throw yt(_[1]);
	return e.__wrap(_[0]);
}
function A_(n, e, _) {
	var t = bt(_) ? 0 : pt(_, At.__wbindgen_malloc, At.__wbindgen_realloc), r = Rt;
	const i = At.streamParseStart(n, e, t, r);
	if (i[1]) throw yt(i[0]);
}
function R_(n, e) {
	const _ = At.streamParseStartData(n, e);
	if (_[1]) throw yt(_[0]);
}
function D_(n, e, _, t, r) {
	var i = bt(t) ? 0 : pt(t, At.__wbindgen_malloc, At.__wbindgen_realloc), o = Rt;
	const c = At.streamParseStartWithEpoch(n, e, _, i, o, !bt(r), bt(r) ? 0 : r);
	if (c[1]) throw yt(c[0]);
}
function x_(n, e) {
	const _ = ft(n, At.__wbindgen_malloc), t = Rt, r = At.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw yt(r[1]);
	return yt(r[0]);
}
function M_(n) {
	const e = At.summarizeExportGroups(n);
	if (e[3]) throw yt(e[2]);
	var _ = nt(e[0], e[1]).slice();
	return At.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function P_(n) {
	const e = At.summarizePhysicalActivityDays(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function I_(n) {
	const e = At.summarizePhysicalActivityTrace(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function F_(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = At.thresholdProbabilities(_, t, e);
	var i = _t(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function W_(n) {
	const e = ht(n, At.__wbindgen_malloc), _ = Rt, t = At.timeSemantics(e, _);
	if (t[3]) throw yt(t[2]);
	var r = nt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function O_(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = Rt, i = At.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw yt(i[2]);
	var o = nt(i[0], i[1]).slice();
	return At.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function N_(n, e, _) {
	const t = At.uniformTimestamps(n, e, _);
	var r = Q_(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function U_(n, e) {
	const _ = At.utcDatesInSpan(n, e);
	var t = nt(_[0], _[1]).slice();
	return At.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function z_(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = Rt, t = At.utcDayIndex(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function G_(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = Rt, t = At.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function B_(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = Rt, r = At.validWearDays(_, t, bt(e) ? 0 : K_(e));
	if (r[3]) throw yt(r[2]);
	var i = _t(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function T_(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = Rt, i = At.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw yt(i[1]);
	return yt(i[0]);
}
function V_(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = Rt, t = At.wallClockLabels(e, _);
	var r = nt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function j_(n, e, _) {
	const t = ft(n, At.__wbindgen_malloc), r = Rt, i = ht(_, At.__wbindgen_malloc), o = Rt, c = At.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw yt(c[2]);
	var l = _t(c[0], c[1]).slice();
	return At.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function L_(n, e) {
	const _ = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), t = Rt;
	var r = bt(e) ? 0 : pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), i = Rt;
	const o = At.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return yt(o[0]);
}
function E_(n) {
	const e = ht(n, At.__wbindgen_malloc), _ = Rt, t = At.weekendDates(e, _);
	var r = _t(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function H_(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = Rt, o = At.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function X_(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = Rt, c = mt(e, At.__wbindgen_malloc), l = Rt, a = mt(_, At.__wbindgen_malloc), s = Rt, w = At.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw yt(w[1]);
	return yt(w[0]);
}
function q_() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(lt(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = pt(String(e), At.__wbindgen_malloc, At.__wbindgen_realloc), t = Rt;
				rt().setInt32(n + 4, t, !0), rt().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				rt().setBigInt64(n + 8, bt(_) ? BigInt(0) : _, !0), rt().setInt32(n + 0, !bt(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return bt(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = pt(J_(e), At.__wbindgen_malloc, At.__wbindgen_realloc), t = Rt;
				rt().setInt32(n + 4, t, !0), rt().setInt32(n + 0, _, !0);
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
				rt().setFloat64(n + 8, bt(_) ? 0 : _, !0), rt().setInt32(n + 0, !bt(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = bt(_) ? 0 : pt(_, At.__wbindgen_malloc, At.__wbindgen_realloc), r = Rt;
				rt().setInt32(n + 4, r, !0), rt().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(lt(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return ut(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return ut(function(n, e, _, t) {
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
					_ = n, t = e, console.error(lt(n, e));
				} finally {
					At.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return ut(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return ut(function(n, e) {
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
				return new Uint32Array(et(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(Q_(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== it && 0 !== it.byteLength || (it = new Float32Array(At.memory.buffer)), it).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return ut(function(n) {
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
				return ut(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(_t(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return ut(function(n, e, _) {
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
				const _ = pt(e.stack, At.__wbindgen_malloc, At.__wbindgen_realloc), t = Rt;
				rt().setInt32(n + 4, t, !0), rt().setInt32(n + 0, _, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return bt(n) ? 0 : K_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return bt(n) ? 0 : K_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return bt(n) ? 0 : K_(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return bt(n) ? 0 : K_(n);
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
				return _t(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return lt(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = At.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
const Z_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => At.__wbg_aw5batch_free(n >>> 0, 1)), $_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => At.__wbg_streamchunkresult_free(n >>> 0, 1)), Y_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => At.__wbg_streamparseresult_free(n >>> 0, 1));
function K_(n) {
	const e = At.__externref_table_alloc();
	return At.__wbindgen_externrefs.set(e, n), e;
}
function J_(n) {
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
		e > 0 && (_ += J_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + J_(n[t]);
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
function Q_(n, e) {
	return n >>>= 0, ct().subarray(n / 8, n / 8 + e);
}
function nt(n, e) {
	n >>>= 0;
	const _ = rt(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(At.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return At.__externref_drop_slice(n, e), t;
}
function et(n, e) {
	return n >>>= 0, st().subarray(n / 4, n / 4 + e);
}
function _t(n, e) {
	return n >>>= 0, gt().subarray(n / 1, n / 1 + e);
}
let tt = null;
function rt() {
	return (null === tt || !0 === tt.buffer.detached || void 0 === tt.buffer.detached && tt.buffer !== At.memory.buffer) && (tt = new DataView(At.memory.buffer)), tt;
}
let it = null, ot = null;
function ct() {
	return null !== ot && 0 !== ot.byteLength || (ot = new Float64Array(At.memory.buffer)), ot;
}
function lt(n, e) {
	return function(n, e) {
		return Ct += e, Ct >= kt && (vt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), vt.decode(), Ct = e), vt.decode(gt().subarray(n, n + e));
	}(n >>>= 0, e);
}
let at = null;
function st() {
	return null !== at && 0 !== at.byteLength || (at = new Uint32Array(At.memory.buffer)), at;
}
let wt = null;
function gt() {
	return null !== wt && 0 !== wt.byteLength || (wt = new Uint8Array(At.memory.buffer)), wt;
}
function ut(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = K_(_);
		At.__wbindgen_exn_store(n);
	}
}
function bt(n) {
	return null == n;
}
function dt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return st().set(n, _ / 4), Rt = n.length, _;
}
function ft(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return gt().set(n, _ / 1), Rt = n.length, _;
}
function mt(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return ct().set(n, _ / 8), Rt = n.length, _;
}
function ht(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = K_(n[t]);
		rt().setUint32(_ + 4 * t, e, !0);
	}
	return Rt = n.length, _;
}
function pt(n, e, _) {
	if (void 0 === _) {
		const _ = St.encode(n), t = e(_.length, 1) >>> 0;
		return gt().subarray(t, t + _.length).set(_), Rt = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = gt();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = gt().subarray(r + o, r + t);
		o += St.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return Rt = o, r;
}
function yt(n) {
	const e = At.__wbindgen_externrefs.get(n);
	return At.__externref_table_dealloc(n), e;
}
let vt = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
vt.decode();
const kt = 2146435072;
let Ct = 0;
const St = new TextEncoder();
"encodeInto" in St || (St.encodeInto = function(n, e) {
	const _ = St.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let At, Rt = 0;
function Dt(n, e) {
	return At = n.exports, tt = null, it = null, ot = null, at = null, wt = null, At.__wbindgen_start(), At;
}
function xt(n) {
	if (void 0 !== At) return At;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = q_();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Dt(new WebAssembly.Instance(n, e));
}
async function Mt(n) {
	if (void 0 !== At) return At;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-C_HQm9_k.wasm", "" + import.meta.url));
	const e = q_();
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
	return Dt(_);
}
export { n as Aw5Batch, e as StreamChunkResult, _ as StreamParseResult, t as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actiwareWakeThreshold, o as actoursVersion, c as aggregateEpochSeries, l as analysisDatesOf, a as analysisWindowBounds, s as analysisWindowSlice, w as analyzePhysicalActivityDay, g as classifyActimetricPreschoolWristRf, u as classifyActimetricPreschoolWristRfLagLead, b as classifyActimetricPreschoolWristRfLagLeadCalibrated, d as clippedUnionHours, f as compareNonwearDetectorMasks, m as computeAnglez5s, h as computeCircadian, p as computeCircadianTyped, y as computeEnmo5s, v as computeMimsUnit, k as computeMimsUnitDataframe, C as computeMimsUnitTimingBreakdown, S as computeMimsUnitValues, A as computeNightDifficulty, R as computeNightDifficultyTyped, D as computeNightSignals, x as computeNightSignalsTyped, M as computeSleepMetrics, P as configureComputeMemoryBudgetV1, I as consensusDisagreementDetail, F as consensusDisagreements, W as convertBedWakeDaysDiary, O as convertScreensRedcapDiary, N as csvBufferAppend, U as csvBufferClear, z as cutpointEpochCompatibility, G as cutpointToneCodes, B as cutpointsRefusal, T as cutpointsValid, Mt as default, V as describeColumns, j as detectDetachFromAccelerationG, L as detectDeviceFormat, E as detectGgirHasptVariant, H as detectHdcza, X as detectHourClockJumpMs, q as detectNonwear, Z as detectNonwearChoi2011, $ as detectNonwearChoi2011Bouts, Y as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, J as detectNonwearChoi2012Bouts, Q as detectNonwearChoi2012Epoch, nn as detectNonwearChoiBouts, en as detectNonwearUnified, _n as detectNonwearUnifiedBatchTyped, tn as dstPlaceholderRuns, rn as effectiveOverrideCutpoints, on as epochAgreement, cn as epochRawData, ln as epochWithBandpass, an as epochsOverlapping, sn as executeHeroRuntime, wn as exportNapAggregate, gn as exportPeriodFigures, un as extractCapsense, bn as foldOntoGrid, dn as foldSampleBlocks, fn as foldSleepWakeVotes, mn as foldUniformOntoGrid, hn as fuseNonwearMasks, pn as generateActiwareRestIntervals, yn as getComputeCapabilitiesV1, vn as ggir5sWallClockMs, kn as ggirAppConfigSummary, Cn as ggirConfigValues, Sn as ggirDayValidFraction, An as ggirDaysIncluded, Rn as ggirDiaryLogShape, Dn as ggirDstPlaceholderCuts, xn as ggirIncludeDayCriterionHours, Mn as ggirIndicesToWallClockMs, Pn as ggirLabelsToStoredMs, In as ggirManualNightClocks, Fn as ggirMilestoneVersion, Wn as ggirNonwearApproach, On as ggirPersonSummaries, Nn as ggirRerunProfiles, Un as ggirSavedNonwearWindows, zn as ggirSleeplogStoredClocks, Gn as ggirSptDurationHours, Bn as ggirSummaryDenominator, Tn as gridOffsetWithin, Vn as identifyGgirRData, jn as implausibilityReasons, xt as initSync, Ln as installPanicHook, En as interRaterReliability, Hn as irregularInternalDays, Xn as isGeneactivFormat, qn as linearMemoryBytesV1, Zn as lstmSpectralFeatures30s, $n as markerIndexRange, Yn as markerSleepOnsetOffset, Kn as medianGapSeconds, Jn as metricWarnings, Qn as midSleepClockHours, ne as neishabouriCounts, ee as nextDate, _e as nightIntervalOverlap, te as nonwearContributors, re as nonwearInSleepCounts, ie as nonwearSleepOverlap, oe as nonwearWeightRuns, ce as normalizeCutpoints, le as parseActigraphCsv, ae as parseActigraphCsvBuffered, se as parseAw5, we as parseCwa, ge as parseEpochSeries, ue as parseGeneactivBin, be as parseGeneactivCsv, de as parseGeneactivCsvBuffered, fe as parseGt3x, me as participantValidity, he as physicalActivitySeriesGrid, pe as placeMarkers, ye as placeMarkersBatch, ve as placeMarkersTyped, ke as placeNonwearMarkers, Ce as placeNonwearMarkersTyped, Se as prepareCompactPipelineOutcomeV1, Ae as prepareCompactPipelineV1, Re as processGeneactivRaw, De as processGt3xPart1, xe as processGt3xPart1WithEpoch, Me as processRawXyz, Pe as processRawXyzImputed, Ie as processRawXyzImputedWithEpoch, Fe as projectLabelsOntoGrid, We as rasterizePeriods, Oe as readGgirMeta, Ne as readGgirReportCsv, Ue as recommended_chunk_size_mb, ze as reduceF64V1, Ge as rerunGgirResults, Be as resolveTimezone, Te as restoredDstRuns, Ve as reviewGgirResults, je as reviewNonwearFile, Le as reviewNonwearTotals, Ee as roundCountStorage, He as runCompactPipelineOutcomeV1, Xe as runCompactPipelineV1, qe as runFullPipelineOutcomeV1, Ze as runFullPipelineV1, $e as runGgirDeclaredEpochsV1, Ye as runGgirPart3, Ke as runMilestone, Je as scoreAllDays, Qe as scoreColeKripke, n_ as scoreConsensus, e_ as scoreConsensusMajority, __ as scoreConsensusTyped, t_ as scoreEpochs, r_ as scoreEpochsTyped, i_ as scoreGgirHasib, o_ as scoreGgirHasibVariant, c_ as scoreGgirSib, l_ as scoreSadeh, a_ as settleManualNonwearNights, s_ as sha256StreamFeed, w_ as sha256StreamFinish, g_ as sha256StreamStart, u_ as shiftDate, b_ as sleepRegularityIndex, d_ as sleepWakeScores, f_ as sourceLabelsWallClockMs, m_ as spanFiniteMean, h_ as spliceDstPlaceholders, p_ as statesInPeriods, y_ as storedToGgirLabelsMs, v_ as streamParseFeed, k_ as streamParseFinish, C_ as streamParseFinishChunk, S_ as streamParseFinishChunkWithProgress, A_ as streamParseStart, R_ as streamParseStartData, D_ as streamParseStartWithEpoch, x_ as summarizeActimetricPreschoolWristRfClasses, M_ as summarizeExportGroups, P_ as summarizePhysicalActivityDays, I_ as summarizePhysicalActivityTrace, F_ as thresholdProbabilities, W_ as timeSemantics, O_ as timestampDiscontinuities, N_ as uniformTimestamps, U_ as utcDatesInSpan, z_ as utcDayIndex, G_ as validStateFraction, B_ as validWearDays, T_ as wallClockDstPlaceholders, V_ as wallClockLabels, j_ as wallMaskOntoGgirGrid, L_ as wearSiteHasptRouting, E_ as weekendDates, H_ as windowCoverage, X_ as zeroCrossingCounts };
