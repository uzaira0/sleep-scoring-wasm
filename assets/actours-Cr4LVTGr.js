var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, X_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		St.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = mt(n, St.__wbindgen_malloc), _ = At, t = St.aw5batch_new(e, _);
		if (t[2]) throw pt(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, X_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), r = At;
		var i = ut(_) ? 0 : ht(_, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At;
		const c = St.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw pt(c[1]);
		return pt(c[0]);
	}
	subjects(n) {
		const e = St.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw pt(e[2]);
		var _ = Q_(e[0], e[1]).slice();
		return St.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, Z_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Z_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		St.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = St.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = St.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = St.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = St.streamchunkresult_axisX(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = St.streamchunkresult_axisY(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = St.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = St.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw pt(n[1]);
		return pt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== St.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = St.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ct(n[0], n[1]).slice(), St.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = St.streamchunkresult_counts(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = St.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = St.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = St.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = St.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = St.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = St.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = J_(e[0], e[1]).slice();
		return St.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return St.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = St.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = St.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== St.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = St.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ct(n[0], n[1]).slice(), St.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = St.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = St.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = St.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== St.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return St.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return St.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return St.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = St.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = St.streamchunkresult_temperature(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = St.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = St.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = St.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = St.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = St.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = St.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
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
		St.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = St.streamparseresult_axisX(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = St.streamparseresult_axisY(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = St.streamparseresult_axisZ(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = St.streamparseresult_calibration(this.__wbg_ptr);
		if (n[2]) throw pt(n[1]);
		return pt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== St.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = St.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ct(n[0], n[1]).slice(), St.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return St.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== St.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return St.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return St.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = St.streamparseresult_temperature(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = St.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = St.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return St.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n) {
	const e = St.actiwareIntervalStatistics(n);
	if (e[3]) throw pt(e[2]);
	var _ = Q_(e[0], e[1]).slice();
	return St.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function r(n, e, _) {
	const t = mt(e, St.__wbindgen_malloc), r = At, i = St.actiwareSleepIntervals(n, t, r, ut(_) ? 0 : Y_(_));
	if (i[3]) throw pt(i[2]);
	var o = Q_(i[0], i[1]).slice();
	return St.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function i(n, e) {
	const _ = St.actiwareWakeThreshold(n, ut(e) ? 0 : Y_(e));
	if (_[3]) throw pt(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function o() {
	let n, e;
	try {
		const _ = St.actoursVersion();
		return n = _[0], e = _[1], ct(_[0], _[1]);
	} finally {
		St.__wbindgen_free(n, e, 1);
	}
}
function c(n) {
	const e = St.aggregateEpochSeries(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function l(n) {
	const e = ft(n, St.__wbindgen_malloc), _ = At, t = St.analysisDatesOf(e, _);
	var r = Q_(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function a(n, e) {
	const _ = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), t = At, r = St.analysisWindowBounds(_, t, !ut(e), ut(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = J_(r[0], r[1]).slice(), St.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function s(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), i = At, o = St.analysisWindowSlice(_, t, r, i);
	var c = nt(o[0], o[1]).slice();
	return St.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function w(n) {
	let e, _;
	try {
		const i = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At, c = St.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		St.__wbindgen_free(e, _, 1);
	}
}
function g(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = ft(e, St.__wbindgen_malloc), c = At, l = ft(_, St.__wbindgen_malloc), a = At, s = St.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw pt(s[2]);
	var w = et(s[0], s[1]).slice();
	return St.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function u(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = ft(e, St.__wbindgen_malloc), c = At, l = ft(_, St.__wbindgen_malloc), a = At, s = St.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw pt(s[2]);
	var w = et(s[0], s[1]).slice();
	return St.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function b(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = ft(e, St.__wbindgen_malloc), c = At, l = ft(_, St.__wbindgen_malloc), a = At, s = St.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw pt(s[2]);
	var w = et(s[0], s[1]).slice();
	return St.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function d(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = ft(e, St.__wbindgen_malloc), c = At;
	return St.clippedUnionHours(r, i, o, c, _, t);
}
function f(n, e) {
	const _ = St.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw pt(_[1]);
	return pt(_[0]);
}
function m(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = ft(e, St.__wbindgen_malloc), c = At, l = ft(_, St.__wbindgen_malloc), a = At, s = St.computeAnglez5s(r, i, o, c, l, a, t);
	var w = J_(s[0], s[1]).slice();
	return St.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function h(n) {
	let e, _;
	try {
		const i = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At, c = St.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		St.__wbindgen_free(e, _, 1);
	}
}
function p(n, e, _, t, r, i, o) {
	const c = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), l = At, a = ft(e, St.__wbindgen_malloc), s = At, w = bt(_, St.__wbindgen_malloc), g = At, u = ft(t, St.__wbindgen_malloc), b = At, d = bt(r, St.__wbindgen_malloc), f = At, m = dt(i, St.__wbindgen_malloc), h = At, p = bt(o, St.__wbindgen_malloc), y = At, v = St.computeCircadianTyped(c, l, a, s, w, g, u, b, d, f, m, h, p, y);
	if (v[2]) throw pt(v[1]);
	return pt(v[0]);
}
function y(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = ft(e, St.__wbindgen_malloc), c = At, l = ft(_, St.__wbindgen_malloc), a = At, s = St.computeEnmo5s(r, i, o, c, l, a, t);
	var w = J_(s[0], s[1]).slice();
	return St.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function v(n, e, _, t, r) {
	const i = ft(n, St.__wbindgen_malloc), o = At, c = ft(e, St.__wbindgen_malloc), l = At, a = ft(_, St.__wbindgen_malloc), s = At, w = St.computeMimsUnit(i, o, c, l, a, s, t, ut(r) ? 0 : Y_(r));
	if (w[2]) throw pt(w[1]);
	return pt(w[0]);
}
function k(n, e, _, t, r) {
	const i = ft(n, St.__wbindgen_malloc), o = At, c = ft(e, St.__wbindgen_malloc), l = At, a = ft(_, St.__wbindgen_malloc), s = At, w = ft(t, St.__wbindgen_malloc), g = At, u = St.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, ut(r) ? 0 : Y_(r));
	if (u[2]) throw pt(u[1]);
	return pt(u[0]);
}
function C(n, e, _, t, r) {
	const i = ft(n, St.__wbindgen_malloc), o = At, c = ft(e, St.__wbindgen_malloc), l = At, a = ft(_, St.__wbindgen_malloc), s = At, w = St.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, ut(r) ? 0 : Y_(r));
	if (w[2]) throw pt(w[1]);
	return pt(w[0]);
}
function S(n, e, _, t, r) {
	const i = ft(n, St.__wbindgen_malloc), o = At, c = ft(e, St.__wbindgen_malloc), l = At, a = ft(_, St.__wbindgen_malloc), s = At, w = St.computeMimsUnitValues(i, o, c, l, a, s, t, ut(r) ? 0 : Y_(r));
	if (w[3]) throw pt(w[2]);
	var g = J_(w[0], w[1]).slice();
	return St.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function A(n) {
	let e, _;
	try {
		const i = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At, c = St.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		St.__wbindgen_free(e, _, 1);
	}
}
function R(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), y = At, v = ft(e, St.__wbindgen_malloc), k = At, C = bt(_, St.__wbindgen_malloc), S = At, A = ft(t, St.__wbindgen_malloc), R = At, D = bt(r, St.__wbindgen_malloc), x = At, M = dt(i, St.__wbindgen_malloc), P = At, I = bt(o, St.__wbindgen_malloc), F = At, W = dt(c, St.__wbindgen_malloc), O = At, U = bt(l, St.__wbindgen_malloc), N = At, z = ft(a, St.__wbindgen_malloc), G = At, B = bt(s, St.__wbindgen_malloc), T = At, V = ft(w, St.__wbindgen_malloc), j = At, L = bt(g, St.__wbindgen_malloc), E = At, H = ft(u, St.__wbindgen_malloc), q = At, X = bt(b, St.__wbindgen_malloc), Z = At, $ = ft(d, St.__wbindgen_malloc), Y = At, K = bt(f, St.__wbindgen_malloc), J = At, Q = dt(m, St.__wbindgen_malloc), nn = At, en = bt(h, St.__wbindgen_malloc), _n = At, tn = St.computeNightDifficultyTyped(p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, U, N, z, G, B, T, V, j, L, E, H, q, X, Z, $, Y, K, J, Q, nn, en, _n);
	if (tn[2]) throw pt(tn[1]);
	return pt(tn[0]);
}
function D(n) {
	let e, _;
	try {
		const i = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At, c = St.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		St.__wbindgen_free(e, _, 1);
	}
}
function x(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), y = At, v = ft(e, St.__wbindgen_malloc), k = At, C = bt(_, St.__wbindgen_malloc), S = At, A = ft(t, St.__wbindgen_malloc), R = At, D = bt(r, St.__wbindgen_malloc), x = At, M = dt(i, St.__wbindgen_malloc), P = At, I = bt(o, St.__wbindgen_malloc), F = At, W = dt(c, St.__wbindgen_malloc), O = At, U = bt(l, St.__wbindgen_malloc), N = At, z = ft(a, St.__wbindgen_malloc), G = At, B = bt(s, St.__wbindgen_malloc), T = At, V = ft(w, St.__wbindgen_malloc), j = At, L = bt(g, St.__wbindgen_malloc), E = At, H = ft(u, St.__wbindgen_malloc), q = At, X = bt(b, St.__wbindgen_malloc), Z = At, $ = ft(d, St.__wbindgen_malloc), Y = At, K = bt(f, St.__wbindgen_malloc), J = At, Q = dt(m, St.__wbindgen_malloc), nn = At, en = bt(h, St.__wbindgen_malloc), _n = At, tn = St.computeNightSignalsTyped(p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, U, N, z, G, B, T, V, j, L, E, H, q, X, Z, $, Y, K, J, Q, nn, en, _n);
	if (tn[2]) throw pt(tn[1]);
	return pt(tn[0]);
}
function M(n, e, _) {
	const t = dt(n, St.__wbindgen_malloc), r = At, i = ft(e, St.__wbindgen_malloc), o = At, c = St.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw pt(c[1]);
	return pt(c[0]);
}
function P(n) {
	const e = St.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function I(n) {
	const e = mt(n, St.__wbindgen_malloc), _ = At, t = St.consensusDisagreementDetail(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function F(n) {
	const e = St.consensusDisagreements(n);
	if (e[3]) throw pt(e[2]);
	var _ = Q_(e[0], e[1]).slice();
	return St.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function W(n) {
	const e = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), _ = At, t = St.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function O(n) {
	const e = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), _ = At, t = St.convertScreensRedcapDiary(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function U(n) {
	const e = dt(n, St.__wbindgen_malloc), _ = At;
	St.csvBufferAppend(e, _);
}
function N(n) {
	St.csvBufferClear(n);
}
function z(n, e) {
	const _ = St.cutpointEpochCompatibility(n, e);
	if (_[2]) throw pt(_[1]);
	return pt(_[0]);
}
function G(n, e, _, t, r) {
	const i = ft(n, St.__wbindgen_malloc), o = At, c = St.cutpointToneCodes(i, o, e, _, t, r);
	var l = et(c[0], c[1]).slice();
	return St.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = St.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = ct(r[0], r[1]).slice(), St.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function T(n, e, _, t) {
	return 0 !== St.cutpointsValid(n, e, _, t);
}
function V(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = bt(e, St.__wbindgen_malloc), i = At, o = St.describeColumns(_, t, r, i);
	if (o[3]) throw pt(o[2]);
	var c = Q_(o[0], o[1]).slice();
	return St.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function j(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = ft(e, St.__wbindgen_malloc), i = At, o = St.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw pt(o[2]);
	var c = et(o[0], o[1]).slice();
	return St.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function L(n, e) {
	let _, t;
	try {
		const r = dt(n, St.__wbindgen_malloc), i = At, o = ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), c = At, l = St.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], ct(l[0], l[1]);
	} finally {
		St.__wbindgen_free(_, t, 1);
	}
}
function E(n) {
	const e = St.detectGgirHasptVariant(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function H(n, e, _, t, r) {
	const i = ft(n, St.__wbindgen_malloc), o = At;
	var c = ut(e) ? 0 : ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), l = At, a = ut(_) ? 0 : ft(_, St.__wbindgen_malloc), s = At, w = ut(t) ? 0 : ft(t, St.__wbindgen_malloc), g = At, u = ut(r) ? 0 : ht(r, St.__wbindgen_malloc, St.__wbindgen_realloc), b = At;
	const d = St.detectHdcza(i, o, c, l, a, s, w, g, u, b);
	if (d[2]) throw pt(d[1]);
	return pt(d[0]);
}
function q(n) {
	const e = ft(n, St.__wbindgen_malloc), _ = At;
	return 0 !== St.detectHourClockJumpMs(e, _);
}
function X(n) {
	const e = ft(n, St.__wbindgen_malloc), _ = At, t = St.detectNonwear(e, _);
	var r = et(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Z(n) {
	const e = ft(n, St.__wbindgen_malloc), _ = At, t = St.detectNonwearChoi2011(e, _);
	var r = et(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = ft(n, St.__wbindgen_malloc), _ = At, t = St.detectNonwearChoi2011Bouts(e, _);
	if (t[3]) throw pt(t[2]);
	var r = Q_(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Y(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = St.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw pt(r[2]);
	var i = et(r[0], r[1]).slice();
	return St.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = ft(n, St.__wbindgen_malloc), _ = At, t = St.detectNonwearChoi2012(e, _);
	var r = et(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function J(n) {
	const e = ft(n, St.__wbindgen_malloc), _ = At, t = St.detectNonwearChoi2012Bouts(e, _);
	if (t[3]) throw pt(t[2]);
	var r = Q_(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Q(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = St.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw pt(r[2]);
	var i = et(r[0], r[1]).slice();
	return St.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function nn(n) {
	const e = ft(n, St.__wbindgen_malloc), _ = At, t = St.detectNonwearChoiBouts(e, _);
	if (t[3]) throw pt(t[2]);
	var r = Q_(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function en(n) {
	let e, _;
	try {
		const i = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At, c = St.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		St.__wbindgen_free(e, _, 1);
	}
}
function _n(n, e, _, t, r, i, o) {
	const c = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), l = At, a = ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), s = At, w = ft(_, St.__wbindgen_malloc), g = At, u = ft(t, St.__wbindgen_malloc), b = At, d = ft(r, St.__wbindgen_malloc), f = At, m = St.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, u, b, d, f, i, o);
	if (m[2]) throw pt(m[1]);
	return pt(m[0]);
}
function tn(n, e, _) {
	const t = mt(_, St.__wbindgen_malloc), r = At, i = St.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw pt(i[2]);
	var o = Q_(i[0], i[1]).slice();
	return St.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function rn(n, e, _, t) {
	const r = St.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = J_(r[0], r[1]).slice(), St.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function on(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = ft(e, St.__wbindgen_malloc), i = At, o = St.epochAgreement(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return pt(o[0]);
}
function cn(n, e, _, t, r) {
	const i = ft(n, St.__wbindgen_malloc), o = At, c = ft(e, St.__wbindgen_malloc), l = At, a = ft(_, St.__wbindgen_malloc), s = At, w = ft(t, St.__wbindgen_malloc), g = At, u = St.epochRawData(i, o, c, l, a, s, w, g, r);
	if (u[2]) throw pt(u[1]);
	return pt(u[0]);
}
function ln(n, e, _) {
	const t = ft(n, St.__wbindgen_malloc), r = At, i = ft(e, St.__wbindgen_malloc), o = At, c = St.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw pt(c[1]);
	return pt(c[0]);
}
function an(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = St.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = nt(o[0], o[1]).slice(), St.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function sn(n, e) {
	let _, t;
	try {
		const o = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), c = At, l = ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), a = At, s = St.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, pt(s[2]);
		return _ = r, t = i, ct(r, i);
	} finally {
		St.__wbindgen_free(_, t, 1);
	}
}
function wn(n) {
	const e = mt(n, St.__wbindgen_malloc), _ = At, t = St.exportNapAggregate(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function gn(n, e, _) {
	const t = mt(_, St.__wbindgen_malloc), r = At, i = St.exportPeriodFigures(!ut(n), ut(n) ? 0 : n, !ut(e), ut(e) ? 0 : e, t, r);
	if (i[2]) throw pt(i[1]);
	return pt(i[0]);
}
function un(n) {
	const e = dt(n, St.__wbindgen_malloc), _ = At, t = St.extractCapsense(e, _);
	if (t[3]) throw pt(t[2]);
	var r = Q_(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function bn(n, e, _, t, r) {
	const i = ft(n, St.__wbindgen_malloc), o = At, c = ft(e, St.__wbindgen_malloc), l = At, a = ft(_, St.__wbindgen_malloc), s = At, w = ht(r, St.__wbindgen_malloc, St.__wbindgen_realloc), g = At, u = St.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (u[3]) throw pt(u[2]);
	var b = J_(u[0], u[1]).slice();
	return St.__wbindgen_free(u[0], 8 * u[1], 8), b;
}
function dn(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = ht(t, St.__wbindgen_malloc, St.__wbindgen_realloc), c = At, l = St.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw pt(l[2]);
	var a = J_(l[0], l[1]).slice();
	return St.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function fn(n, e, _, t, r) {
	const i = dt(_, St.__wbindgen_malloc), o = At, c = ft(t, St.__wbindgen_malloc), l = At, a = St.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw pt(a[1]);
	return pt(a[0]);
}
function mn(n, e, _, t, r, i) {
	const o = ft(_, St.__wbindgen_malloc), c = At, l = ft(t, St.__wbindgen_malloc), a = At, s = ht(i, St.__wbindgen_malloc, St.__wbindgen_realloc), w = At, g = St.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw pt(g[2]);
	var u = J_(g[0], g[1]).slice();
	return St.__wbindgen_free(g[0], 8 * g[1], 8), u;
}
function hn(n) {
	const e = St.fuseNonwearMasks(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function pn(n, e, _) {
	var t = ut(_) ? 0 : ht(_, St.__wbindgen_malloc, St.__wbindgen_realloc), r = At;
	const i = St.generateActiwareRestIntervals(n, ut(e) ? 0 : Y_(e), t, r);
	if (i[3]) throw pt(i[2]);
	var o = Q_(i[0], i[1]).slice();
	return St.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function yn() {
	const n = St.getComputeCapabilitiesV1();
	if (n[2]) throw pt(n[1]);
	return pt(n[0]);
}
function vn(n, e, _) {
	const t = mt(_, St.__wbindgen_malloc), r = At, i = St.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw pt(i[2]);
	var o = J_(i[0], i[1]).slice();
	return St.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function kn(n, e) {
	var _ = ut(n) ? 0 : ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), t = At;
	const r = St.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw pt(r[1]);
	return pt(r[0]);
}
function Cn(n) {
	const e = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), _ = At, t = St.ggirConfigValues(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function Sn(n, e) {
	const _ = St.ggirDayValidFraction(n, e);
	return 0 === _[0] ? void 0 : _[1];
}
function An(n, e, _) {
	const t = ft(n, St.__wbindgen_malloc), r = At;
	var i = ut(e) ? 0 : ft(e, St.__wbindgen_malloc), o = At, c = ut(_) ? 0 : ht(_, St.__wbindgen_malloc, St.__wbindgen_realloc), l = At;
	const a = St.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw pt(a[2]);
	var s = et(a[0], a[1]).slice();
	return St.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function Rn(n, e) {
	const _ = dt(n, St.__wbindgen_malloc), t = At;
	var r = ut(e) ? 0 : ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), i = At;
	const o = St.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return pt(o[0]);
}
function Dn(n, e, _) {
	const t = mt(e, St.__wbindgen_malloc), r = At;
	var i = ut(_) ? 0 : ft(_, St.__wbindgen_malloc), o = At;
	const c = St.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw pt(c[2]);
	var l = Q_(c[0], c[1]).slice();
	return St.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function xn(n) {
	var e = ut(n) ? 0 : ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), _ = At;
	const t = St.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw pt(t[1]);
	return t[0];
}
function Mn(n, e, _, t) {
	const r = bt(n, St.__wbindgen_malloc), i = At, o = mt(_, St.__wbindgen_malloc), c = At;
	var l = ut(t) ? 0 : ft(t, St.__wbindgen_malloc), a = At;
	const s = St.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw pt(s[2]);
	var w = J_(s[0], s[1]).slice();
	return St.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function Pn(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = mt(e, St.__wbindgen_malloc), i = At, o = St.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw pt(o[2]);
	var c = J_(o[0], o[1]).slice();
	return St.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function In(n, e, _, t) {
	const r = mt(n, St.__wbindgen_malloc), i = At, o = ft(e, St.__wbindgen_malloc), c = At, l = ft(_, St.__wbindgen_malloc), a = At, s = ft(t, St.__wbindgen_malloc), w = At, g = St.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw pt(g[1]);
	return pt(g[0]);
}
function Fn(n) {
	const e = dt(n, St.__wbindgen_malloc), _ = At, t = St.ggirMilestoneVersion(e, _);
	if (t[3]) throw pt(t[2]);
	let r;
	return 0 !== t[0] && (r = ct(t[0], t[1]).slice(), St.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Wn(n) {
	const e = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), _ = At, t = St.ggirNonwearApproach(e, _);
	if (t[3]) throw pt(t[2]);
	let r;
	return 0 !== t[0] && (r = ct(t[0], t[1]).slice(), St.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function On() {
	const n = St.ggirRerunProfiles();
	if (n[3]) throw pt(n[2]);
	var e = Q_(n[0], n[1]).slice();
	return St.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function Un(n) {
	const e = dt(n, St.__wbindgen_malloc), _ = At, t = St.ggirSavedNonwearWindows(e, _);
	if (t[2]) throw pt(t[1]);
	return t[0] >>> 0;
}
function Nn(n, e, _, t) {
	const r = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), i = At, o = ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), c = At, l = ht(_, St.__wbindgen_malloc, St.__wbindgen_realloc), a = At, s = mt(t, St.__wbindgen_malloc), w = At, g = St.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw pt(g[2]);
	let u;
	return 0 !== g[0] && (u = Q_(g[0], g[1]).slice(), St.__wbindgen_free(g[0], 4 * g[1], 4)), u;
}
function zn(n, e) {
	return St.ggirSptDurationHours(n, e);
}
function Gn(n, e) {
	const _ = St.ggirSummaryDenominator(n, e);
	if (_[2]) throw pt(_[1]);
	return pt(_[0]);
}
function Bn(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = ft(e, St.__wbindgen_malloc), i = At, o = St.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Tn(n) {
	let e, _;
	try {
		const i = dt(n, St.__wbindgen_malloc), o = At, c = St.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		St.__wbindgen_free(e, _, 1);
	}
}
function Vn(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = ft(e, St.__wbindgen_malloc), c = At, l = ft(_, St.__wbindgen_malloc), a = At, s = ft(t, St.__wbindgen_malloc), w = At, g = St.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw pt(g[1]);
	return pt(g[0]);
}
function jn() {
	St.installPanicHook();
}
function Ln(n) {
	const e = mt(n, St.__wbindgen_malloc), _ = At, t = St.interRaterReliability(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function En(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = St.irregularInternalDays(_, t, e);
	var i = Q_(r[0], r[1]).slice();
	return St.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Hn(n) {
	const e = dt(n, St.__wbindgen_malloc), _ = At;
	return 0 !== St.isGeneactivFormat(e, _);
}
function qn() {
	return St.linearMemoryBytesV1();
}
function Xn(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = ft(e, St.__wbindgen_malloc), c = At, l = ft(_, St.__wbindgen_malloc), a = At, s = St.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw pt(s[1]);
	return pt(s[0]);
}
function Zn(n, e, _) {
	const t = ft(n, St.__wbindgen_malloc), r = At, i = St.markerIndexRange(t, r, e, _);
	var o = nt(i[0], i[1]).slice();
	return St.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function $n(n, e, _, t, r, i, o) {
	const c = ft(n, St.__wbindgen_malloc), l = At, a = ft(e, St.__wbindgen_malloc), s = At, w = St.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw pt(w[1]);
	return pt(w[0]);
}
function Yn(n) {
	const e = ft(n, St.__wbindgen_malloc), _ = At, t = St.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Kn(n, e, _, t) {
	const r = St.metricWarnings(n, e, _, t);
	var i = et(r[0], r[1]).slice();
	return St.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Jn(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = ft(e, St.__wbindgen_malloc), i = At, o = St.midSleepClockHours(_, t, r, i);
	var c = J_(o[0], o[1]).slice();
	return St.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Qn(n, e, _, t, r) {
	const i = ft(n, St.__wbindgen_malloc), o = At, c = ft(e, St.__wbindgen_malloc), l = At, a = ft(_, St.__wbindgen_malloc), s = At, w = St.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw pt(w[1]);
	return pt(w[0]);
}
function ne(n) {
	const e = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), _ = At, t = St.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = ct(t[0], t[1]).slice(), St.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function ee(n, e, _, t, r) {
	const i = ft(_, St.__wbindgen_malloc), o = At, c = ft(t, St.__wbindgen_malloc), l = At, a = ft(r, St.__wbindgen_malloc), s = At, w = St.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw pt(w[1]);
	return pt(w[0]);
}
function _e(n, e, _, t) {
	let r, i;
	try {
		const l = bt(n, St.__wbindgen_malloc), a = At, s = ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), w = At, g = St.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, pt(g[2]);
		return r = o, i = c, ct(o, c);
	} finally {
		St.__wbindgen_free(r, i, 1);
	}
}
function te(n) {
	const e = ft(n, St.__wbindgen_malloc), _ = At, t = St.nonwearInSleepCounts(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function re(n) {
	const e = St.nonwearSleepOverlap(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function ie(n, e, _) {
	const t = ft(n, St.__wbindgen_malloc), r = At, i = ft(e, St.__wbindgen_malloc), o = At, c = St.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw pt(c[1]);
	return pt(c[0]);
}
function oe(n, e, _, t, r, i) {
	const o = ht(r, St.__wbindgen_malloc, St.__wbindgen_realloc), c = At, l = St.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw pt(l[2]);
	var a = J_(l[0], l[1]).slice();
	return St.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function ce(n, e) {
	const _ = dt(n, St.__wbindgen_malloc), t = At, r = St.parseActigraphCsv(_, t, e);
	if (r[2]) throw pt(r[1]);
	return pt(r[0]);
}
function le(n) {
	const e = St.parseActigraphCsvBuffered(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function ae(n, e, _, t) {
	const r = dt(n, St.__wbindgen_malloc), i = At;
	var o = ut(e) ? 0 : ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), c = At, l = ut(_) ? 0 : mt(_, St.__wbindgen_malloc), a = At, s = ut(t) ? 0 : ht(t, St.__wbindgen_malloc, St.__wbindgen_realloc), w = At;
	const g = St.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw pt(g[1]);
	return pt(g[0]);
}
function se(n) {
	const e = dt(n, St.__wbindgen_malloc), _ = At, t = St.parseCwa(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function we(n, e) {
	const _ = dt(n, St.__wbindgen_malloc), t = At, r = ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), i = At, o = St.parseEpochSeries(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return pt(o[0]);
}
function ge(n) {
	const e = dt(n, St.__wbindgen_malloc), _ = At, t = St.parseGeneactivBin(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function ue(n) {
	const e = dt(n, St.__wbindgen_malloc), _ = At, t = St.parseGeneactivCsv(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function be() {
	const n = St.parseGeneactivCsvBuffered();
	if (n[2]) throw pt(n[1]);
	return pt(n[0]);
}
function de(n) {
	const e = dt(n, St.__wbindgen_malloc), _ = At, t = St.parseGt3x(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function fe(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = dt(e, St.__wbindgen_malloc), c = At, l = dt(_, St.__wbindgen_malloc), a = At, s = St.participantValidity(r, i, o, c, l, a, ut(t) ? 0 : Y_(t));
	if (s[2]) throw pt(s[1]);
	return pt(s[0]);
}
function me(n, e, _, t, r) {
	const i = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At, c = ft(e, St.__wbindgen_malloc), l = At;
	var a = ut(_) ? 0 : ft(_, St.__wbindgen_malloc), s = At;
	const w = St.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw pt(w[1]);
	return pt(w[0]);
}
function he(n) {
	let e, _;
	try {
		const i = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At, c = St.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		St.__wbindgen_free(e, _, 1);
	}
}
function pe(n, e, _, t, r, i) {
	const o = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), c = At, l = ft(e, St.__wbindgen_malloc), a = At, s = ft(_, St.__wbindgen_malloc), w = At, g = dt(t, St.__wbindgen_malloc), u = At, b = dt(r, St.__wbindgen_malloc), d = At, f = ht(i, St.__wbindgen_malloc, St.__wbindgen_realloc), m = At, h = St.placeMarkersBatch(o, c, l, a, s, w, g, u, b, d, f, m);
	if (h[2]) throw pt(h[1]);
	return pt(h[0]);
}
function ye(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h, p) {
	const y = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), v = At, k = ft(e, St.__wbindgen_malloc), C = At, S = bt(_, St.__wbindgen_malloc), A = At, R = ft(t, St.__wbindgen_malloc), D = At, x = bt(r, St.__wbindgen_malloc), M = At, P = dt(i, St.__wbindgen_malloc), I = At, F = bt(o, St.__wbindgen_malloc), W = At, O = dt(c, St.__wbindgen_malloc), U = At, N = bt(l, St.__wbindgen_malloc), z = At, G = ft(a, St.__wbindgen_malloc), B = At, T = bt(s, St.__wbindgen_malloc), V = At, j = ft(w, St.__wbindgen_malloc), L = At, E = bt(g, St.__wbindgen_malloc), H = At, q = ft(u, St.__wbindgen_malloc), X = At, Z = bt(b, St.__wbindgen_malloc), $ = At, Y = ft(d, St.__wbindgen_malloc), K = At, J = bt(f, St.__wbindgen_malloc), Q = At, nn = dt(m, St.__wbindgen_malloc), en = At, _n = bt(h, St.__wbindgen_malloc), tn = At;
	var rn = ut(p) ? 0 : ht(p, St.__wbindgen_malloc, St.__wbindgen_realloc), on = At;
	const cn = St.placeMarkersTyped(y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, U, N, z, G, B, T, V, j, L, E, H, q, X, Z, $, Y, K, J, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw pt(cn[1]);
	return pt(cn[0]);
}
function ve(n) {
	let e, _;
	try {
		const i = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At, c = St.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		St.__wbindgen_free(e, _, 1);
	}
}
function ke(n, e, _, t) {
	const r = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), i = At, o = ft(e, St.__wbindgen_malloc), c = At, l = ft(_, St.__wbindgen_malloc), a = At, s = dt(t, St.__wbindgen_malloc), w = At, g = St.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw pt(g[1]);
	return pt(g[0]);
}
function Ce(n) {
	const e = St.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Se(n) {
	const e = St.prepareCompactPipelineV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Ae(n, e, _, t, r, i, o, c) {
	const l = ft(n, St.__wbindgen_malloc), a = At, s = ft(e, St.__wbindgen_malloc), w = At, g = ft(_, St.__wbindgen_malloc), u = At, b = ft(t, St.__wbindgen_malloc), d = At;
	var f = ut(o) ? 0 : ht(o, St.__wbindgen_malloc, St.__wbindgen_realloc), m = At, h = ut(c) ? 0 : ht(c, St.__wbindgen_malloc, St.__wbindgen_realloc), p = At;
	const y = St.processGeneactivRaw(l, a, s, w, g, u, b, d, r, i, f, m, h, p);
	if (y[2]) throw pt(y[1]);
	return pt(y[0]);
}
function Re(n, e) {
	const _ = dt(n, St.__wbindgen_malloc), t = At;
	var r = ut(e) ? 0 : ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), i = At;
	const o = St.processGt3xPart1(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return pt(o[0]);
}
function De(n, e, _) {
	const t = dt(n, St.__wbindgen_malloc), r = At;
	var i = ut(_) ? 0 : ht(_, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At;
	const c = St.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw pt(c[1]);
	return pt(c[0]);
}
function xe(n, e, _, t, r, i, o) {
	const c = ft(n, St.__wbindgen_malloc), l = At, a = ft(e, St.__wbindgen_malloc), s = At, w = ft(_, St.__wbindgen_malloc), g = At;
	var u = ut(i) ? 0 : ht(i, St.__wbindgen_malloc, St.__wbindgen_realloc), b = At, d = ut(o) ? 0 : ht(o, St.__wbindgen_malloc, St.__wbindgen_realloc), f = At;
	const m = St.processRawXyz(c, l, a, s, w, g, t, r, u, b, d, f);
	if (m[2]) throw pt(m[1]);
	return pt(m[0]);
}
function Me(n, e, _, t, r, i, o, c) {
	const l = ft(n, St.__wbindgen_malloc), a = At, s = ft(e, St.__wbindgen_malloc), w = At, g = ft(_, St.__wbindgen_malloc), u = At, b = ft(t, St.__wbindgen_malloc), d = At;
	var f = ut(i) ? 0 : ht(i, St.__wbindgen_malloc, St.__wbindgen_realloc), m = At, h = ut(o) ? 0 : ht(o, St.__wbindgen_malloc, St.__wbindgen_realloc), p = At, y = ut(c) ? 0 : ft(c, St.__wbindgen_malloc), v = At;
	const k = St.processRawXyzImputed(l, a, s, w, g, u, b, d, r, f, m, h, p, y, v);
	if (k[2]) throw pt(k[1]);
	return pt(k[0]);
}
function Pe(n, e, _, t, r, i, o, c, l, a) {
	const s = ft(n, St.__wbindgen_malloc), w = At, g = ft(e, St.__wbindgen_malloc), u = At, b = ft(_, St.__wbindgen_malloc), d = At, f = ft(t, St.__wbindgen_malloc), m = At;
	var h = ut(i) ? 0 : ht(i, St.__wbindgen_malloc, St.__wbindgen_realloc), p = At, y = ut(c) ? 0 : ht(c, St.__wbindgen_malloc, St.__wbindgen_realloc), v = At, k = ut(a) ? 0 : ft(a, St.__wbindgen_malloc), C = At;
	const S = St.processRawXyzImputedWithEpoch(s, w, g, u, b, d, f, m, r, h, p, o, y, v, ut(l) ? 16777215 : l ? 1 : 0, k, C);
	if (S[2]) throw pt(S[1]);
	return pt(S[0]);
}
function Ie(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = dt(e, St.__wbindgen_malloc), c = At, l = ft(t, St.__wbindgen_malloc), a = At, s = St.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = et(s[0], s[1]).slice();
	return St.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function Fe(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = ft(e, St.__wbindgen_malloc), c = At, l = ft(_, St.__wbindgen_malloc), a = At, s = St.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw pt(s[1]);
	return pt(s[0]);
}
function We(n, e, _) {
	const t = dt(n, St.__wbindgen_malloc), r = At;
	var i = ut(e) ? 0 : ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At;
	const c = St.readGgirMeta(t, r, i, o, ut(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw pt(c[1]);
	return pt(c[0]);
}
function Oe(n, e) {
	const _ = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), t = At;
	var r = ut(e) ? 0 : ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), i = At;
	const o = St.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return pt(o[0]);
}
function Ue() {
	return St.recommended_chunk_size_mb() >>> 0;
}
function Ne(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), i = At, o = St.reduceF64V1(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return o[0];
}
function ze(n, e) {
	const _ = mt(e, St.__wbindgen_malloc), t = At, r = St.rerunGgirResults(n, _, t);
	if (r[2]) throw pt(r[1]);
	return pt(r[0]);
}
function Ge(n) {
	const e = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), _ = At, t = St.resolveTimezone(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function Be(n, e, _) {
	const t = ft(n, St.__wbindgen_malloc), r = At, i = ft(e, St.__wbindgen_malloc), o = At, c = bt(_, St.__wbindgen_malloc), l = At, a = St.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw pt(a[2]);
	var s = Q_(a[0], a[1]).slice();
	return St.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function Te(n, e, _, t, r, i, o, c, l, a, s, w, g, u) {
	const b = dt(n, St.__wbindgen_malloc), d = At, f = ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), m = At;
	var h = ut(_) ? 0 : dt(_, St.__wbindgen_malloc), p = At, y = ut(t) ? 0 : dt(t, St.__wbindgen_malloc), v = At, k = ut(r) ? 0 : dt(r, St.__wbindgen_malloc), C = At, S = ut(i) ? 0 : dt(i, St.__wbindgen_malloc), A = At, R = ut(o) ? 0 : dt(o, St.__wbindgen_malloc), D = At, x = ut(c) ? 0 : ht(c, St.__wbindgen_malloc, St.__wbindgen_realloc), M = At, P = ut(l) ? 0 : ht(l, St.__wbindgen_malloc, St.__wbindgen_realloc), I = At, F = ut(a) ? 0 : mt(a, St.__wbindgen_malloc), W = At, O = ut(w) ? 0 : ht(w, St.__wbindgen_malloc, St.__wbindgen_realloc), U = At, N = ut(g) ? 0 : ht(g, St.__wbindgen_malloc, St.__wbindgen_realloc), z = At;
	const G = St.reviewGgirResults(b, d, f, m, h, p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, s, O, U, N, z, ut(u) ? 4294967297 : u >>> 0);
	if (G[2]) throw pt(G[1]);
	return pt(G[0]);
}
function Ve(n) {
	const e = mt(n, St.__wbindgen_malloc), _ = At, t = St.reviewNonwearFile(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function je(n) {
	const e = mt(n, St.__wbindgen_malloc), _ = At, t = St.reviewNonwearTotals(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function Le(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = St.roundCountStorage(_, t, e);
	var i = J_(r[0], r[1]).slice();
	return St.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Ee(n) {
	const e = St.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function He(n) {
	const e = St.runCompactPipelineV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function qe(n) {
	const e = St.runFullPipelineOutcomeV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Xe(n) {
	const e = St.runFullPipelineV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Ze(n) {
	const e = St.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function $e(n) {
	const e = St.runGgirPart3(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Ye(n, e) {
	const _ = dt(n, St.__wbindgen_malloc), t = At;
	var r = ut(e) ? 0 : ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), i = At;
	const o = St.runMilestone(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return pt(o[0]);
}
function Ke(n) {
	const e = mt(n, St.__wbindgen_malloc), _ = At, t = St.scoreAllDays(e, _);
	if (t[3]) throw pt(t[2]);
	var r = Q_(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Je(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = St.scoreColeKripke(_, t, e);
	var i = et(r[0], r[1]).slice();
	return St.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Qe(n) {
	let e, _;
	try {
		const i = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At, c = St.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		St.__wbindgen_free(e, _, 1);
	}
}
function n_(n) {
	const e = St.scoreConsensusMajority(n);
	if (e[3]) throw pt(e[2]);
	var _ = et(e[0], e[1]).slice();
	return St.__wbindgen_free(e[0], 1 * e[1], 1), _;
}
function e_(n, e, _) {
	const t = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), r = At, i = dt(e, St.__wbindgen_malloc), o = At, c = bt(_, St.__wbindgen_malloc), l = At, a = St.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw pt(a[1]);
	return pt(a[0]);
}
function __(n) {
	let e, _;
	try {
		const i = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At, c = St.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		St.__wbindgen_free(e, _, 1);
	}
}
function t_(n, e, _, t, r, i) {
	const o = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), c = At, l = ft(e, St.__wbindgen_malloc), a = At, s = ft(_, St.__wbindgen_malloc), w = At, g = ft(t, St.__wbindgen_malloc), u = At, b = St.scoreEpochsTyped(o, c, l, a, s, w, g, u, r, i);
	if (b[2]) throw pt(b[1]);
	return pt(b[0]);
}
function r_(n, e, _) {
	const t = ft(n, St.__wbindgen_malloc), r = At;
	var i = ut(e) ? 0 : ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At, c = ut(_) ? 0 : ft(_, St.__wbindgen_malloc), l = At;
	const a = St.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw pt(a[2]);
	var s = et(a[0], a[1]).slice();
	return St.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function i_(n) {
	const e = St.scoreGgirHasibVariant(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function o_(n, e, _, t, r) {
	const i = ft(n, St.__wbindgen_malloc), o = At, c = ft(e, St.__wbindgen_malloc), l = At;
	var a = ut(t) ? 0 : ht(t, St.__wbindgen_malloc, St.__wbindgen_realloc), s = At, w = ut(r) ? 0 : ft(r, St.__wbindgen_malloc), g = At;
	const u = St.scoreGgirSib(i, o, c, l, _, a, s, w, g);
	if (u[2]) throw pt(u[1]);
	return pt(u[0]);
}
function c_(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = St.scoreSadeh(_, t, e);
	var i = et(r[0], r[1]).slice();
	return St.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function l_(n) {
	const e = mt(n, St.__wbindgen_malloc), _ = At, t = St.settleManualNonwearNights(e, _);
	if (t[3]) throw pt(t[2]);
	var r = Q_(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function a_(n) {
	const e = dt(n, St.__wbindgen_malloc), _ = At, t = St.sha256StreamFeed(e, _);
	if (t[1]) throw pt(t[0]);
}
function s_() {
	let n, e;
	try {
		const r = St.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, pt(r[2]);
		return n = _, e = t, ct(_, t);
	} finally {
		St.__wbindgen_free(n, e, 1);
	}
}
function w_() {
	St.sha256StreamStart();
}
function g_(n, e) {
	const _ = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), t = At, r = St.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = ct(r[0], r[1]).slice(), St.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function u_(n, e, _, t, r) {
	const i = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At, c = ft(e, St.__wbindgen_malloc), l = At, a = bt(_, St.__wbindgen_malloc), s = At, w = ft(t, St.__wbindgen_malloc), g = At, u = bt(r, St.__wbindgen_malloc), b = At, d = St.sleepRegularityIndex(i, o, c, l, a, s, w, g, u, b);
	if (d[3]) throw pt(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function b_(n, e) {
	const _ = St.sleepWakeScores(n, ut(e) ? 0 : Y_(e));
	if (_[2]) throw pt(_[1]);
	return pt(_[0]);
}
function d_(n) {
	const e = mt(n, St.__wbindgen_malloc), _ = At, t = St.sourceLabelsWallClockMs(e, _);
	var r = J_(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function f_(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = ft(e, St.__wbindgen_malloc), c = At, l = St.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function m_(n, e, _) {
	const t = ft(n, St.__wbindgen_malloc), r = At, i = mt(e, St.__wbindgen_malloc), o = At, c = ft(_, St.__wbindgen_malloc), l = At, a = St.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw pt(a[2]);
	let s;
	return 0 !== a[0] && (s = J_(a[0], a[1]).slice(), St.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function h_(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = dt(e, St.__wbindgen_malloc), c = At, l = ft(_, St.__wbindgen_malloc), a = At, s = ft(t, St.__wbindgen_malloc), w = At, g = St.statesInPeriods(r, i, o, c, l, a, s, w);
	var u = et(g[0], g[1]).slice();
	return St.__wbindgen_free(g[0], 1 * g[1], 1), u;
}
function p_(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = mt(e, St.__wbindgen_malloc), i = At, o = St.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw pt(o[2]);
	var c = J_(o[0], o[1]).slice();
	return St.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function y_(n) {
	const e = dt(n, St.__wbindgen_malloc), _ = At, t = St.streamParseFeed(e, _);
	if (t[2]) throw pt(t[1]);
	return t[0] >>> 0;
}
function v_() {
	const n = St.streamParseFinish();
	if (n[2]) throw pt(n[1]);
	return _.__wrap(n[0]);
}
function k_() {
	const n = St.streamParseFinishChunk();
	if (n[2]) throw pt(n[1]);
	return e.__wrap(n[0]);
}
function C_(n) {
	const _ = St.streamParseFinishChunkWithProgress(n);
	if (_[2]) throw pt(_[1]);
	return e.__wrap(_[0]);
}
function S_(n, e, _) {
	var t = ut(_) ? 0 : ht(_, St.__wbindgen_malloc, St.__wbindgen_realloc), r = At;
	const i = St.streamParseStart(n, e, t, r);
	if (i[1]) throw pt(i[0]);
}
function A_(n, e) {
	const _ = St.streamParseStartData(n, e);
	if (_[1]) throw pt(_[0]);
}
function R_(n, e, _, t, r) {
	var i = ut(t) ? 0 : ht(t, St.__wbindgen_malloc, St.__wbindgen_realloc), o = At;
	const c = St.streamParseStartWithEpoch(n, e, _, i, o, !ut(r), ut(r) ? 0 : r);
	if (c[1]) throw pt(c[0]);
}
function D_(n, e) {
	const _ = dt(n, St.__wbindgen_malloc), t = At, r = St.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw pt(r[1]);
	return pt(r[0]);
}
function x_(n) {
	const e = St.summarizeExportGroups(n);
	if (e[3]) throw pt(e[2]);
	var _ = Q_(e[0], e[1]).slice();
	return St.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function M_(n) {
	const e = St.summarizePhysicalActivityDays(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function P_(n) {
	const e = St.summarizePhysicalActivityTrace(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function I_(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = St.thresholdProbabilities(_, t, e);
	var i = et(r[0], r[1]).slice();
	return St.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function F_(n) {
	const e = mt(n, St.__wbindgen_malloc), _ = At, t = St.timeSemantics(e, _);
	if (t[3]) throw pt(t[2]);
	var r = Q_(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function W_(n, e, _) {
	const t = ft(n, St.__wbindgen_malloc), r = At, i = St.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw pt(i[2]);
	var o = Q_(i[0], i[1]).slice();
	return St.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function O_(n, e, _) {
	const t = St.uniformTimestamps(n, e, _);
	var r = J_(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function U_(n, e) {
	const _ = St.utcDatesInSpan(n, e);
	var t = Q_(_[0], _[1]).slice();
	return St.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function N_(n) {
	const e = ft(n, St.__wbindgen_malloc), _ = At, t = St.utcDayIndex(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function z_(n) {
	const e = dt(n, St.__wbindgen_malloc), _ = At, t = St.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function G_(n, e) {
	const _ = ft(n, St.__wbindgen_malloc), t = At, r = St.validWearDays(_, t, ut(e) ? 0 : Y_(e));
	if (r[3]) throw pt(r[2]);
	var i = et(r[0], r[1]).slice();
	return St.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function B_(n, e, _) {
	const t = ft(n, St.__wbindgen_malloc), r = At, i = St.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw pt(i[1]);
	return pt(i[0]);
}
function T_(n) {
	const e = ft(n, St.__wbindgen_malloc), _ = At, t = St.wallClockLabels(e, _);
	var r = Q_(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function V_(n, e, _) {
	const t = dt(n, St.__wbindgen_malloc), r = At, i = mt(_, St.__wbindgen_malloc), o = At, c = St.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw pt(c[2]);
	var l = et(c[0], c[1]).slice();
	return St.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function j_(n, e) {
	const _ = ht(n, St.__wbindgen_malloc, St.__wbindgen_realloc), t = At;
	var r = ut(e) ? 0 : ht(e, St.__wbindgen_malloc, St.__wbindgen_realloc), i = At;
	const o = St.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return pt(o[0]);
}
function L_(n) {
	const e = mt(n, St.__wbindgen_malloc), _ = At, t = St.weekendDates(e, _);
	var r = et(t[0], t[1]).slice();
	return St.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function E_(n, e, _, t) {
	const r = ft(n, St.__wbindgen_malloc), i = At, o = St.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function H_(n, e, _, t, r) {
	const i = ft(n, St.__wbindgen_malloc), o = At, c = ft(e, St.__wbindgen_malloc), l = At, a = ft(_, St.__wbindgen_malloc), s = At, w = St.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw pt(w[1]);
	return pt(w[0]);
}
function q_() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(ct(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = ht(String(e), St.__wbindgen_malloc, St.__wbindgen_realloc), t = At;
				tt().setInt32(n + 4, t, !0), tt().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				tt().setBigInt64(n + 8, ut(_) ? BigInt(0) : _, !0), tt().setInt32(n + 0, !ut(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return ut(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = ht(K_(e), St.__wbindgen_malloc, St.__wbindgen_realloc), t = At;
				tt().setInt32(n + 4, t, !0), tt().setInt32(n + 0, _, !0);
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
				tt().setFloat64(n + 8, ut(_) ? 0 : _, !0), tt().setInt32(n + 0, !ut(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = ut(_) ? 0 : ht(_, St.__wbindgen_malloc, St.__wbindgen_realloc), r = At;
				tt().setInt32(n + 4, r, !0), tt().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(ct(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return gt(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return gt(function(n, e, _, t) {
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
					_ = n, t = e, console.error(ct(n, e));
				} finally {
					St.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return gt(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return gt(function(n, e) {
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
				return new Uint32Array(nt(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(J_(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== rt && 0 !== rt.byteLength || (rt = new Float32Array(St.memory.buffer)), rt).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return gt(function(n) {
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
				return gt(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(et(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return gt(function(n, e, _) {
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
				const _ = ht(e.stack, St.__wbindgen_malloc, St.__wbindgen_realloc), t = At;
				tt().setInt32(n + 4, t, !0), tt().setInt32(n + 0, _, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return ut(n) ? 0 : Y_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return ut(n) ? 0 : Y_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return ut(n) ? 0 : Y_(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return ut(n) ? 0 : Y_(n);
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
				return et(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return ct(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = St.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
const X_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => St.__wbg_aw5batch_free(n >>> 0, 1)), Z_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => St.__wbg_streamchunkresult_free(n >>> 0, 1)), $_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => St.__wbg_streamparseresult_free(n >>> 0, 1));
function Y_(n) {
	const e = St.__externref_table_alloc();
	return St.__wbindgen_externrefs.set(e, n), e;
}
function K_(n) {
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
		e > 0 && (_ += K_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + K_(n[t]);
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
function J_(n, e) {
	return n >>>= 0, ot().subarray(n / 8, n / 8 + e);
}
function Q_(n, e) {
	n >>>= 0;
	const _ = tt(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(St.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return St.__externref_drop_slice(n, e), t;
}
function nt(n, e) {
	return n >>>= 0, at().subarray(n / 4, n / 4 + e);
}
function et(n, e) {
	return n >>>= 0, wt().subarray(n / 1, n / 1 + e);
}
let _t = null;
function tt() {
	return (null === _t || !0 === _t.buffer.detached || void 0 === _t.buffer.detached && _t.buffer !== St.memory.buffer) && (_t = new DataView(St.memory.buffer)), _t;
}
let rt = null, it = null;
function ot() {
	return null !== it && 0 !== it.byteLength || (it = new Float64Array(St.memory.buffer)), it;
}
function ct(n, e) {
	return function(n, e) {
		return kt += e, kt >= vt && (yt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), yt.decode(), kt = e), yt.decode(wt().subarray(n, n + e));
	}(n >>>= 0, e);
}
let lt = null;
function at() {
	return null !== lt && 0 !== lt.byteLength || (lt = new Uint32Array(St.memory.buffer)), lt;
}
let st = null;
function wt() {
	return null !== st && 0 !== st.byteLength || (st = new Uint8Array(St.memory.buffer)), st;
}
function gt(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = Y_(_);
		St.__wbindgen_exn_store(n);
	}
}
function ut(n) {
	return null == n;
}
function bt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return at().set(n, _ / 4), At = n.length, _;
}
function dt(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return wt().set(n, _ / 1), At = n.length, _;
}
function ft(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return ot().set(n, _ / 8), At = n.length, _;
}
function mt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = Y_(n[t]);
		tt().setUint32(_ + 4 * t, e, !0);
	}
	return At = n.length, _;
}
function ht(n, e, _) {
	if (void 0 === _) {
		const _ = Ct.encode(n), t = e(_.length, 1) >>> 0;
		return wt().subarray(t, t + _.length).set(_), At = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = wt();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = wt().subarray(r + o, r + t);
		o += Ct.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return At = o, r;
}
function pt(n) {
	const e = St.__wbindgen_externrefs.get(n);
	return St.__externref_table_dealloc(n), e;
}
let yt = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
yt.decode();
const vt = 2146435072;
let kt = 0;
const Ct = new TextEncoder();
"encodeInto" in Ct || (Ct.encodeInto = function(n, e) {
	const _ = Ct.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let St, At = 0;
function Rt(n, e) {
	return St = n.exports, _t = null, rt = null, it = null, lt = null, st = null, St.__wbindgen_start(), St;
}
function Dt(n) {
	if (void 0 !== St) return St;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = q_();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Rt(new WebAssembly.Instance(n, e));
}
async function xt(n) {
	if (void 0 !== St) return St;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-DQUqPOaC.wasm", "" + import.meta.url));
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
	return Rt(_);
}
export { n as Aw5Batch, e as StreamChunkResult, _ as StreamParseResult, t as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actiwareWakeThreshold, o as actoursVersion, c as aggregateEpochSeries, l as analysisDatesOf, a as analysisWindowBounds, s as analysisWindowSlice, w as analyzePhysicalActivityDay, g as classifyActimetricPreschoolWristRf, u as classifyActimetricPreschoolWristRfLagLead, b as classifyActimetricPreschoolWristRfLagLeadCalibrated, d as clippedUnionHours, f as compareNonwearDetectorMasks, m as computeAnglez5s, h as computeCircadian, p as computeCircadianTyped, y as computeEnmo5s, v as computeMimsUnit, k as computeMimsUnitDataframe, C as computeMimsUnitTimingBreakdown, S as computeMimsUnitValues, A as computeNightDifficulty, R as computeNightDifficultyTyped, D as computeNightSignals, x as computeNightSignalsTyped, M as computeSleepMetrics, P as configureComputeMemoryBudgetV1, I as consensusDisagreementDetail, F as consensusDisagreements, W as convertBedWakeDaysDiary, O as convertScreensRedcapDiary, U as csvBufferAppend, N as csvBufferClear, z as cutpointEpochCompatibility, G as cutpointToneCodes, B as cutpointsRefusal, T as cutpointsValid, xt as default, V as describeColumns, j as detectDetachFromAccelerationG, L as detectDeviceFormat, E as detectGgirHasptVariant, H as detectHdcza, q as detectHourClockJumpMs, X as detectNonwear, Z as detectNonwearChoi2011, $ as detectNonwearChoi2011Bouts, Y as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, J as detectNonwearChoi2012Bouts, Q as detectNonwearChoi2012Epoch, nn as detectNonwearChoiBouts, en as detectNonwearUnified, _n as detectNonwearUnifiedBatchTyped, tn as dstPlaceholderRuns, rn as effectiveOverrideCutpoints, on as epochAgreement, cn as epochRawData, ln as epochWithBandpass, an as epochsOverlapping, sn as executeHeroRuntime, wn as exportNapAggregate, gn as exportPeriodFigures, un as extractCapsense, bn as foldOntoGrid, dn as foldSampleBlocks, fn as foldSleepWakeVotes, mn as foldUniformOntoGrid, hn as fuseNonwearMasks, pn as generateActiwareRestIntervals, yn as getComputeCapabilitiesV1, vn as ggir5sWallClockMs, kn as ggirAppConfigSummary, Cn as ggirConfigValues, Sn as ggirDayValidFraction, An as ggirDaysIncluded, Rn as ggirDiaryLogShape, Dn as ggirDstPlaceholderCuts, xn as ggirIncludeDayCriterionHours, Mn as ggirIndicesToWallClockMs, Pn as ggirLabelsToStoredMs, In as ggirManualNightClocks, Fn as ggirMilestoneVersion, Wn as ggirNonwearApproach, On as ggirRerunProfiles, Un as ggirSavedNonwearWindows, Nn as ggirSleeplogStoredClocks, zn as ggirSptDurationHours, Gn as ggirSummaryDenominator, Bn as gridOffsetWithin, Tn as identifyGgirRData, Vn as implausibilityReasons, Dt as initSync, jn as installPanicHook, Ln as interRaterReliability, En as irregularInternalDays, Hn as isGeneactivFormat, qn as linearMemoryBytesV1, Xn as lstmSpectralFeatures30s, Zn as markerIndexRange, $n as markerSleepOnsetOffset, Yn as medianGapSeconds, Kn as metricWarnings, Jn as midSleepClockHours, Qn as neishabouriCounts, ne as nextDate, ee as nightIntervalOverlap, _e as nonwearContributors, te as nonwearInSleepCounts, re as nonwearSleepOverlap, ie as nonwearWeightRuns, oe as normalizeCutpoints, ce as parseActigraphCsv, le as parseActigraphCsvBuffered, ae as parseAw5, se as parseCwa, we as parseEpochSeries, ge as parseGeneactivBin, ue as parseGeneactivCsv, be as parseGeneactivCsvBuffered, de as parseGt3x, fe as participantValidity, me as physicalActivitySeriesGrid, he as placeMarkers, pe as placeMarkersBatch, ye as placeMarkersTyped, ve as placeNonwearMarkers, ke as placeNonwearMarkersTyped, Ce as prepareCompactPipelineOutcomeV1, Se as prepareCompactPipelineV1, Ae as processGeneactivRaw, Re as processGt3xPart1, De as processGt3xPart1WithEpoch, xe as processRawXyz, Me as processRawXyzImputed, Pe as processRawXyzImputedWithEpoch, Ie as projectLabelsOntoGrid, Fe as rasterizePeriods, We as readGgirMeta, Oe as readGgirReportCsv, Ue as recommended_chunk_size_mb, Ne as reduceF64V1, ze as rerunGgirResults, Ge as resolveTimezone, Be as restoredDstRuns, Te as reviewGgirResults, Ve as reviewNonwearFile, je as reviewNonwearTotals, Le as roundCountStorage, Ee as runCompactPipelineOutcomeV1, He as runCompactPipelineV1, qe as runFullPipelineOutcomeV1, Xe as runFullPipelineV1, Ze as runGgirDeclaredEpochsV1, $e as runGgirPart3, Ye as runMilestone, Ke as scoreAllDays, Je as scoreColeKripke, Qe as scoreConsensus, n_ as scoreConsensusMajority, e_ as scoreConsensusTyped, __ as scoreEpochs, t_ as scoreEpochsTyped, r_ as scoreGgirHasib, i_ as scoreGgirHasibVariant, o_ as scoreGgirSib, c_ as scoreSadeh, l_ as settleManualNonwearNights, a_ as sha256StreamFeed, s_ as sha256StreamFinish, w_ as sha256StreamStart, g_ as shiftDate, u_ as sleepRegularityIndex, b_ as sleepWakeScores, d_ as sourceLabelsWallClockMs, f_ as spanFiniteMean, m_ as spliceDstPlaceholders, h_ as statesInPeriods, p_ as storedToGgirLabelsMs, y_ as streamParseFeed, v_ as streamParseFinish, k_ as streamParseFinishChunk, C_ as streamParseFinishChunkWithProgress, S_ as streamParseStart, A_ as streamParseStartData, R_ as streamParseStartWithEpoch, D_ as summarizeActimetricPreschoolWristRfClasses, x_ as summarizeExportGroups, M_ as summarizePhysicalActivityDays, P_ as summarizePhysicalActivityTrace, I_ as thresholdProbabilities, F_ as timeSemantics, W_ as timestampDiscontinuities, O_ as uniformTimestamps, U_ as utcDatesInSpan, N_ as utcDayIndex, z_ as validStateFraction, G_ as validWearDays, B_ as wallClockDstPlaceholders, T_ as wallClockLabels, V_ as wallMaskOntoGgirGrid, j_ as wearSiteHasptRouting, L_ as weekendDates, E_ as windowCoverage, H_ as zeroCrossingCounts };
