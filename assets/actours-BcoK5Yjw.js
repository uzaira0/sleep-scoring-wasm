var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, E_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		vt.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = bt(n, vt.__wbindgen_malloc), _ = kt, t = vt.aw5batch_new(e, _);
		if (t[2]) throw ft(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, E_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), r = kt;
		var i = st(_) ? 0 : dt(_, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt;
		const c = vt.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw ft(c[1]);
		return ft(c[0]);
	}
	subjects(n) {
		const e = vt.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw ft(e[2]);
		var _ = Y_(e[0], e[1]).slice();
		return vt.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, H_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, H_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		vt.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = vt.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = vt.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = vt.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = vt.streamchunkresult_axisX(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = vt.streamchunkresult_axisY(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = vt.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = vt.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw ft(n[1]);
		return ft(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== vt.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = vt.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = rt(n[0], n[1]).slice(), vt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = vt.streamchunkresult_counts(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = vt.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = vt.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = vt.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = vt.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = vt.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = J_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = vt.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = $_(e[0], e[1]).slice();
		return vt.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return vt.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = vt.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = vt.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== vt.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = vt.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = rt(n[0], n[1]).slice(), vt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = vt.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = vt.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = vt.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== vt.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return vt.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return vt.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return vt.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = vt.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = vt.streamchunkresult_temperature(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = vt.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = vt.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = vt.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = vt.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = vt.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = vt.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
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
		vt.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = vt.streamparseresult_axisX(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = vt.streamparseresult_axisY(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = vt.streamparseresult_axisZ(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = vt.streamparseresult_calibration(this.__wbg_ptr);
		if (n[2]) throw ft(n[1]);
		return ft(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== vt.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = vt.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = rt(n[0], n[1]).slice(), vt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return vt.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== vt.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return vt.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return vt.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = vt.streamparseresult_temperature(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = vt.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = vt.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return vt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n) {
	const e = vt.actiwareIntervalStatistics(n);
	if (e[3]) throw ft(e[2]);
	var _ = Y_(e[0], e[1]).slice();
	return vt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function r(n, e, _) {
	const t = bt(e, vt.__wbindgen_malloc), r = kt, i = vt.actiwareSleepIntervals(n, t, r, st(_) ? 0 : q_(_));
	if (i[3]) throw ft(i[2]);
	var o = Y_(i[0], i[1]).slice();
	return vt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function i(n, e) {
	const _ = vt.actiwareWakeThreshold(n, st(e) ? 0 : q_(e));
	if (_[3]) throw ft(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function o() {
	let n, e;
	try {
		const _ = vt.actoursVersion();
		return n = _[0], e = _[1], rt(_[0], _[1]);
	} finally {
		vt.__wbindgen_free(n, e, 1);
	}
}
function c(n) {
	const e = vt.aggregateEpochSeries(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function l(n) {
	const e = ut(n, vt.__wbindgen_malloc), _ = kt, t = vt.analysisDatesOf(e, _);
	var r = Y_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function a(n, e) {
	const _ = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), t = kt, r = vt.analysisWindowBounds(_, t, !st(e), st(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = $_(r[0], r[1]).slice(), vt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function s(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), i = kt, o = vt.analysisWindowSlice(_, t, r, i);
	var c = K_(o[0], o[1]).slice();
	return vt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function w(n) {
	let e, _;
	try {
		const i = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt, c = vt.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ft(c[2]);
		return e = t, _ = r, rt(t, r);
	} finally {
		vt.__wbindgen_free(e, _, 1);
	}
}
function g(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = ut(e, vt.__wbindgen_malloc), c = kt, l = ut(_, vt.__wbindgen_malloc), a = kt, s = vt.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw ft(s[2]);
	var w = J_(s[0], s[1]).slice();
	return vt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function u(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = ut(e, vt.__wbindgen_malloc), c = kt, l = ut(_, vt.__wbindgen_malloc), a = kt, s = vt.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw ft(s[2]);
	var w = J_(s[0], s[1]).slice();
	return vt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function b(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = ut(e, vt.__wbindgen_malloc), c = kt, l = ut(_, vt.__wbindgen_malloc), a = kt, s = vt.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw ft(s[2]);
	var w = J_(s[0], s[1]).slice();
	return vt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function d(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = ut(e, vt.__wbindgen_malloc), c = kt;
	return vt.clippedUnionHours(r, i, o, c, _, t);
}
function f(n, e) {
	const _ = vt.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw ft(_[1]);
	return ft(_[0]);
}
function m(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = ut(e, vt.__wbindgen_malloc), c = kt, l = ut(_, vt.__wbindgen_malloc), a = kt, s = vt.computeAnglez5s(r, i, o, c, l, a, t);
	var w = $_(s[0], s[1]).slice();
	return vt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function h(n) {
	let e, _;
	try {
		const i = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt, c = vt.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ft(c[2]);
		return e = t, _ = r, rt(t, r);
	} finally {
		vt.__wbindgen_free(e, _, 1);
	}
}
function p(n, e, _, t, r, i, o) {
	const c = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), l = kt, a = ut(e, vt.__wbindgen_malloc), s = kt, w = wt(_, vt.__wbindgen_malloc), g = kt, u = ut(t, vt.__wbindgen_malloc), b = kt, d = wt(r, vt.__wbindgen_malloc), f = kt, m = gt(i, vt.__wbindgen_malloc), h = kt, p = wt(o, vt.__wbindgen_malloc), y = kt, v = vt.computeCircadianTyped(c, l, a, s, w, g, u, b, d, f, m, h, p, y);
	if (v[2]) throw ft(v[1]);
	return ft(v[0]);
}
function y(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = ut(e, vt.__wbindgen_malloc), c = kt, l = ut(_, vt.__wbindgen_malloc), a = kt, s = vt.computeEnmo5s(r, i, o, c, l, a, t);
	var w = $_(s[0], s[1]).slice();
	return vt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function v(n, e, _, t, r) {
	const i = ut(n, vt.__wbindgen_malloc), o = kt, c = ut(e, vt.__wbindgen_malloc), l = kt, a = ut(_, vt.__wbindgen_malloc), s = kt, w = vt.computeMimsUnit(i, o, c, l, a, s, t, st(r) ? 0 : q_(r));
	if (w[2]) throw ft(w[1]);
	return ft(w[0]);
}
function k(n, e, _, t, r) {
	const i = ut(n, vt.__wbindgen_malloc), o = kt, c = ut(e, vt.__wbindgen_malloc), l = kt, a = ut(_, vt.__wbindgen_malloc), s = kt, w = ut(t, vt.__wbindgen_malloc), g = kt, u = vt.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, st(r) ? 0 : q_(r));
	if (u[2]) throw ft(u[1]);
	return ft(u[0]);
}
function C(n, e, _, t, r) {
	const i = ut(n, vt.__wbindgen_malloc), o = kt, c = ut(e, vt.__wbindgen_malloc), l = kt, a = ut(_, vt.__wbindgen_malloc), s = kt, w = vt.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, st(r) ? 0 : q_(r));
	if (w[2]) throw ft(w[1]);
	return ft(w[0]);
}
function S(n, e, _, t, r) {
	const i = ut(n, vt.__wbindgen_malloc), o = kt, c = ut(e, vt.__wbindgen_malloc), l = kt, a = ut(_, vt.__wbindgen_malloc), s = kt, w = vt.computeMimsUnitValues(i, o, c, l, a, s, t, st(r) ? 0 : q_(r));
	if (w[3]) throw ft(w[2]);
	var g = $_(w[0], w[1]).slice();
	return vt.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function A(n) {
	let e, _;
	try {
		const i = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt, c = vt.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ft(c[2]);
		return e = t, _ = r, rt(t, r);
	} finally {
		vt.__wbindgen_free(e, _, 1);
	}
}
function R(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), y = kt, v = ut(e, vt.__wbindgen_malloc), k = kt, C = wt(_, vt.__wbindgen_malloc), S = kt, A = ut(t, vt.__wbindgen_malloc), R = kt, D = wt(r, vt.__wbindgen_malloc), x = kt, M = gt(i, vt.__wbindgen_malloc), P = kt, I = wt(o, vt.__wbindgen_malloc), F = kt, W = gt(c, vt.__wbindgen_malloc), O = kt, U = wt(l, vt.__wbindgen_malloc), z = kt, N = ut(a, vt.__wbindgen_malloc), G = kt, B = wt(s, vt.__wbindgen_malloc), T = kt, V = ut(w, vt.__wbindgen_malloc), j = kt, L = wt(g, vt.__wbindgen_malloc), E = kt, H = ut(u, vt.__wbindgen_malloc), X = kt, q = wt(b, vt.__wbindgen_malloc), Z = kt, $ = ut(d, vt.__wbindgen_malloc), Y = kt, K = wt(f, vt.__wbindgen_malloc), J = kt, Q = gt(m, vt.__wbindgen_malloc), nn = kt, en = wt(h, vt.__wbindgen_malloc), _n = kt, tn = vt.computeNightDifficultyTyped(p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, U, z, N, G, B, T, V, j, L, E, H, X, q, Z, $, Y, K, J, Q, nn, en, _n);
	if (tn[2]) throw ft(tn[1]);
	return ft(tn[0]);
}
function D(n) {
	let e, _;
	try {
		const i = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt, c = vt.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ft(c[2]);
		return e = t, _ = r, rt(t, r);
	} finally {
		vt.__wbindgen_free(e, _, 1);
	}
}
function x(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), y = kt, v = ut(e, vt.__wbindgen_malloc), k = kt, C = wt(_, vt.__wbindgen_malloc), S = kt, A = ut(t, vt.__wbindgen_malloc), R = kt, D = wt(r, vt.__wbindgen_malloc), x = kt, M = gt(i, vt.__wbindgen_malloc), P = kt, I = wt(o, vt.__wbindgen_malloc), F = kt, W = gt(c, vt.__wbindgen_malloc), O = kt, U = wt(l, vt.__wbindgen_malloc), z = kt, N = ut(a, vt.__wbindgen_malloc), G = kt, B = wt(s, vt.__wbindgen_malloc), T = kt, V = ut(w, vt.__wbindgen_malloc), j = kt, L = wt(g, vt.__wbindgen_malloc), E = kt, H = ut(u, vt.__wbindgen_malloc), X = kt, q = wt(b, vt.__wbindgen_malloc), Z = kt, $ = ut(d, vt.__wbindgen_malloc), Y = kt, K = wt(f, vt.__wbindgen_malloc), J = kt, Q = gt(m, vt.__wbindgen_malloc), nn = kt, en = wt(h, vt.__wbindgen_malloc), _n = kt, tn = vt.computeNightSignalsTyped(p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, U, z, N, G, B, T, V, j, L, E, H, X, q, Z, $, Y, K, J, Q, nn, en, _n);
	if (tn[2]) throw ft(tn[1]);
	return ft(tn[0]);
}
function M(n, e, _) {
	const t = gt(n, vt.__wbindgen_malloc), r = kt, i = ut(e, vt.__wbindgen_malloc), o = kt, c = vt.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw ft(c[1]);
	return ft(c[0]);
}
function P(n) {
	const e = vt.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function I(n) {
	const e = bt(n, vt.__wbindgen_malloc), _ = kt, t = vt.consensusDisagreementDetail(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function F(n) {
	const e = vt.consensusDisagreements(n);
	if (e[3]) throw ft(e[2]);
	var _ = Y_(e[0], e[1]).slice();
	return vt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function W(n) {
	const e = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), _ = kt, t = vt.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function O(n) {
	const e = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), _ = kt, t = vt.convertScreensRedcapDiary(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function U(n) {
	const e = gt(n, vt.__wbindgen_malloc), _ = kt;
	vt.csvBufferAppend(e, _);
}
function z(n) {
	vt.csvBufferClear(n);
}
function N(n, e) {
	const _ = vt.cutpointEpochCompatibility(n, e);
	if (_[2]) throw ft(_[1]);
	return ft(_[0]);
}
function G(n, e, _, t, r) {
	const i = ut(n, vt.__wbindgen_malloc), o = kt, c = vt.cutpointToneCodes(i, o, e, _, t, r);
	var l = J_(c[0], c[1]).slice();
	return vt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = vt.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = rt(r[0], r[1]).slice(), vt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function T(n, e, _, t) {
	return 0 !== vt.cutpointsValid(n, e, _, t);
}
function V(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = wt(e, vt.__wbindgen_malloc), i = kt, o = vt.describeColumns(_, t, r, i);
	if (o[3]) throw ft(o[2]);
	var c = Y_(o[0], o[1]).slice();
	return vt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function j(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = ut(e, vt.__wbindgen_malloc), i = kt, o = vt.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw ft(o[2]);
	var c = J_(o[0], o[1]).slice();
	return vt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function L(n, e) {
	let _, t;
	try {
		const r = gt(n, vt.__wbindgen_malloc), i = kt, o = dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), c = kt, l = vt.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], rt(l[0], l[1]);
	} finally {
		vt.__wbindgen_free(_, t, 1);
	}
}
function E(n) {
	const e = vt.detectGgirHasptVariant(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function H(n, e, _, t, r) {
	const i = ut(n, vt.__wbindgen_malloc), o = kt;
	var c = st(e) ? 0 : dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), l = kt, a = st(_) ? 0 : ut(_, vt.__wbindgen_malloc), s = kt, w = st(t) ? 0 : ut(t, vt.__wbindgen_malloc), g = kt, u = st(r) ? 0 : dt(r, vt.__wbindgen_malloc, vt.__wbindgen_realloc), b = kt;
	const d = vt.detectHdcza(i, o, c, l, a, s, w, g, u, b);
	if (d[2]) throw ft(d[1]);
	return ft(d[0]);
}
function X(n) {
	const e = ut(n, vt.__wbindgen_malloc), _ = kt;
	return 0 !== vt.detectHourClockJumpMs(e, _);
}
function q(n) {
	const e = ut(n, vt.__wbindgen_malloc), _ = kt, t = vt.detectNonwear(e, _);
	var r = J_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Z(n) {
	const e = ut(n, vt.__wbindgen_malloc), _ = kt, t = vt.detectNonwearChoi2011(e, _);
	var r = J_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = ut(n, vt.__wbindgen_malloc), _ = kt, t = vt.detectNonwearChoi2011Bouts(e, _);
	if (t[3]) throw ft(t[2]);
	var r = Y_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Y(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = vt.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw ft(r[2]);
	var i = J_(r[0], r[1]).slice();
	return vt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = ut(n, vt.__wbindgen_malloc), _ = kt, t = vt.detectNonwearChoi2012(e, _);
	var r = J_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function J(n) {
	const e = ut(n, vt.__wbindgen_malloc), _ = kt, t = vt.detectNonwearChoi2012Bouts(e, _);
	if (t[3]) throw ft(t[2]);
	var r = Y_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Q(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = vt.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw ft(r[2]);
	var i = J_(r[0], r[1]).slice();
	return vt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function nn(n) {
	const e = ut(n, vt.__wbindgen_malloc), _ = kt, t = vt.detectNonwearChoiBouts(e, _);
	if (t[3]) throw ft(t[2]);
	var r = Y_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function en(n) {
	let e, _;
	try {
		const i = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt, c = vt.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ft(c[2]);
		return e = t, _ = r, rt(t, r);
	} finally {
		vt.__wbindgen_free(e, _, 1);
	}
}
function _n(n, e, _, t, r, i, o) {
	const c = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), l = kt, a = dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), s = kt, w = ut(_, vt.__wbindgen_malloc), g = kt, u = ut(t, vt.__wbindgen_malloc), b = kt, d = ut(r, vt.__wbindgen_malloc), f = kt, m = vt.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, u, b, d, f, i, o);
	if (m[2]) throw ft(m[1]);
	return ft(m[0]);
}
function tn(n, e, _) {
	const t = bt(_, vt.__wbindgen_malloc), r = kt, i = vt.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw ft(i[2]);
	var o = Y_(i[0], i[1]).slice();
	return vt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function rn(n, e, _, t) {
	const r = vt.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = $_(r[0], r[1]).slice(), vt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function on(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = ut(e, vt.__wbindgen_malloc), i = kt, o = vt.epochAgreement(_, t, r, i);
	if (o[2]) throw ft(o[1]);
	return ft(o[0]);
}
function cn(n, e, _, t, r) {
	const i = ut(n, vt.__wbindgen_malloc), o = kt, c = ut(e, vt.__wbindgen_malloc), l = kt, a = ut(_, vt.__wbindgen_malloc), s = kt, w = ut(t, vt.__wbindgen_malloc), g = kt, u = vt.epochRawData(i, o, c, l, a, s, w, g, r);
	if (u[2]) throw ft(u[1]);
	return ft(u[0]);
}
function ln(n, e, _) {
	const t = ut(n, vt.__wbindgen_malloc), r = kt, i = ut(e, vt.__wbindgen_malloc), o = kt, c = vt.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw ft(c[1]);
	return ft(c[0]);
}
function an(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = vt.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = K_(o[0], o[1]).slice(), vt.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function sn(n, e) {
	let _, t;
	try {
		const o = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), c = kt, l = dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), a = kt, s = vt.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, ft(s[2]);
		return _ = r, t = i, rt(r, i);
	} finally {
		vt.__wbindgen_free(_, t, 1);
	}
}
function wn(n) {
	const e = bt(n, vt.__wbindgen_malloc), _ = kt, t = vt.exportNapAggregate(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function gn(n, e, _) {
	const t = bt(_, vt.__wbindgen_malloc), r = kt, i = vt.exportPeriodFigures(!st(n), st(n) ? 0 : n, !st(e), st(e) ? 0 : e, t, r);
	if (i[2]) throw ft(i[1]);
	return ft(i[0]);
}
function un(n) {
	const e = gt(n, vt.__wbindgen_malloc), _ = kt, t = vt.extractCapsense(e, _);
	if (t[3]) throw ft(t[2]);
	var r = Y_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function bn(n, e, _, t, r) {
	const i = ut(n, vt.__wbindgen_malloc), o = kt, c = ut(e, vt.__wbindgen_malloc), l = kt, a = ut(_, vt.__wbindgen_malloc), s = kt, w = dt(r, vt.__wbindgen_malloc, vt.__wbindgen_realloc), g = kt, u = vt.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (u[3]) throw ft(u[2]);
	var b = $_(u[0], u[1]).slice();
	return vt.__wbindgen_free(u[0], 8 * u[1], 8), b;
}
function dn(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = dt(t, vt.__wbindgen_malloc, vt.__wbindgen_realloc), c = kt, l = vt.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw ft(l[2]);
	var a = $_(l[0], l[1]).slice();
	return vt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function fn(n, e, _, t, r) {
	const i = gt(_, vt.__wbindgen_malloc), o = kt, c = ut(t, vt.__wbindgen_malloc), l = kt, a = vt.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw ft(a[1]);
	return ft(a[0]);
}
function mn(n, e, _, t, r, i) {
	const o = ut(_, vt.__wbindgen_malloc), c = kt, l = ut(t, vt.__wbindgen_malloc), a = kt, s = dt(i, vt.__wbindgen_malloc, vt.__wbindgen_realloc), w = kt, g = vt.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw ft(g[2]);
	var u = $_(g[0], g[1]).slice();
	return vt.__wbindgen_free(g[0], 8 * g[1], 8), u;
}
function hn(n) {
	const e = vt.fuseNonwearMasks(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function pn(n, e, _) {
	var t = st(_) ? 0 : dt(_, vt.__wbindgen_malloc, vt.__wbindgen_realloc), r = kt;
	const i = vt.generateActiwareRestIntervals(n, st(e) ? 0 : q_(e), t, r);
	if (i[3]) throw ft(i[2]);
	var o = Y_(i[0], i[1]).slice();
	return vt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function yn() {
	const n = vt.getComputeCapabilitiesV1();
	if (n[2]) throw ft(n[1]);
	return ft(n[0]);
}
function vn(n, e, _) {
	const t = bt(_, vt.__wbindgen_malloc), r = kt, i = vt.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw ft(i[2]);
	var o = $_(i[0], i[1]).slice();
	return vt.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function kn(n, e) {
	var _ = st(n) ? 0 : dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), t = kt;
	const r = vt.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw ft(r[1]);
	return ft(r[0]);
}
function Cn(n) {
	const e = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), _ = kt, t = vt.ggirConfigValues(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function Sn(n, e, _) {
	const t = ut(n, vt.__wbindgen_malloc), r = kt;
	var i = st(e) ? 0 : ut(e, vt.__wbindgen_malloc), o = kt, c = st(_) ? 0 : dt(_, vt.__wbindgen_malloc, vt.__wbindgen_realloc), l = kt;
	const a = vt.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw ft(a[2]);
	var s = J_(a[0], a[1]).slice();
	return vt.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function An(n, e) {
	const _ = gt(n, vt.__wbindgen_malloc), t = kt;
	var r = st(e) ? 0 : dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), i = kt;
	const o = vt.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw ft(o[1]);
	return ft(o[0]);
}
function Rn(n, e, _) {
	const t = bt(e, vt.__wbindgen_malloc), r = kt;
	var i = st(_) ? 0 : ut(_, vt.__wbindgen_malloc), o = kt;
	const c = vt.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw ft(c[2]);
	var l = Y_(c[0], c[1]).slice();
	return vt.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function Dn(n) {
	var e = st(n) ? 0 : dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), _ = kt;
	const t = vt.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw ft(t[1]);
	return t[0];
}
function xn(n, e, _, t) {
	const r = wt(n, vt.__wbindgen_malloc), i = kt, o = bt(_, vt.__wbindgen_malloc), c = kt;
	var l = st(t) ? 0 : ut(t, vt.__wbindgen_malloc), a = kt;
	const s = vt.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw ft(s[2]);
	var w = $_(s[0], s[1]).slice();
	return vt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function Mn(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = bt(e, vt.__wbindgen_malloc), i = kt, o = vt.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw ft(o[2]);
	var c = $_(o[0], o[1]).slice();
	return vt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Pn(n, e, _, t) {
	const r = bt(n, vt.__wbindgen_malloc), i = kt, o = ut(e, vt.__wbindgen_malloc), c = kt, l = ut(_, vt.__wbindgen_malloc), a = kt, s = ut(t, vt.__wbindgen_malloc), w = kt, g = vt.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw ft(g[1]);
	return ft(g[0]);
}
function In(n) {
	const e = gt(n, vt.__wbindgen_malloc), _ = kt, t = vt.ggirMilestoneVersion(e, _);
	if (t[3]) throw ft(t[2]);
	let r;
	return 0 !== t[0] && (r = rt(t[0], t[1]).slice(), vt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Fn() {
	const n = vt.ggirRerunProfiles();
	if (n[3]) throw ft(n[2]);
	var e = Y_(n[0], n[1]).slice();
	return vt.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function Wn(n, e, _, t) {
	const r = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), i = kt, o = dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), c = kt, l = dt(_, vt.__wbindgen_malloc, vt.__wbindgen_realloc), a = kt, s = bt(t, vt.__wbindgen_malloc), w = kt, g = vt.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw ft(g[2]);
	let u;
	return 0 !== g[0] && (u = Y_(g[0], g[1]).slice(), vt.__wbindgen_free(g[0], 4 * g[1], 4)), u;
}
function On(n, e) {
	return vt.ggirSptDurationHours(n, e);
}
function Un(n, e) {
	const _ = vt.ggirSummaryDenominator(n, e);
	if (_[2]) throw ft(_[1]);
	return ft(_[0]);
}
function zn(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = ut(e, vt.__wbindgen_malloc), i = kt, o = vt.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Nn(n) {
	let e, _;
	try {
		const i = gt(n, vt.__wbindgen_malloc), o = kt, c = vt.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ft(c[2]);
		return e = t, _ = r, rt(t, r);
	} finally {
		vt.__wbindgen_free(e, _, 1);
	}
}
function Gn(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = ut(e, vt.__wbindgen_malloc), c = kt, l = ut(_, vt.__wbindgen_malloc), a = kt, s = ut(t, vt.__wbindgen_malloc), w = kt, g = vt.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw ft(g[1]);
	return ft(g[0]);
}
function Bn() {
	vt.installPanicHook();
}
function Tn(n) {
	const e = bt(n, vt.__wbindgen_malloc), _ = kt, t = vt.interRaterReliability(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function Vn(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = vt.irregularInternalDays(_, t, e);
	var i = Y_(r[0], r[1]).slice();
	return vt.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function jn(n) {
	const e = gt(n, vt.__wbindgen_malloc), _ = kt;
	return 0 !== vt.isGeneactivFormat(e, _);
}
function Ln() {
	return vt.linearMemoryBytesV1();
}
function En(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = ut(e, vt.__wbindgen_malloc), c = kt, l = ut(_, vt.__wbindgen_malloc), a = kt, s = vt.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw ft(s[1]);
	return ft(s[0]);
}
function Hn(n, e, _) {
	const t = ut(n, vt.__wbindgen_malloc), r = kt, i = vt.markerIndexRange(t, r, e, _);
	var o = K_(i[0], i[1]).slice();
	return vt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Xn(n, e, _, t, r, i, o) {
	const c = ut(n, vt.__wbindgen_malloc), l = kt, a = ut(e, vt.__wbindgen_malloc), s = kt, w = vt.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw ft(w[1]);
	return ft(w[0]);
}
function qn(n) {
	const e = ut(n, vt.__wbindgen_malloc), _ = kt, t = vt.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Zn(n, e, _, t) {
	const r = vt.metricWarnings(n, e, _, t);
	var i = J_(r[0], r[1]).slice();
	return vt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function $n(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = ut(e, vt.__wbindgen_malloc), i = kt, o = vt.midSleepClockHours(_, t, r, i);
	var c = $_(o[0], o[1]).slice();
	return vt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Yn(n, e, _, t, r) {
	const i = ut(n, vt.__wbindgen_malloc), o = kt, c = ut(e, vt.__wbindgen_malloc), l = kt, a = ut(_, vt.__wbindgen_malloc), s = kt, w = vt.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw ft(w[1]);
	return ft(w[0]);
}
function Kn(n) {
	const e = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), _ = kt, t = vt.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = rt(t[0], t[1]).slice(), vt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Jn(n, e, _, t, r) {
	const i = ut(_, vt.__wbindgen_malloc), o = kt, c = ut(t, vt.__wbindgen_malloc), l = kt, a = ut(r, vt.__wbindgen_malloc), s = kt, w = vt.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw ft(w[1]);
	return ft(w[0]);
}
function Qn(n, e, _, t) {
	let r, i;
	try {
		const l = wt(n, vt.__wbindgen_malloc), a = kt, s = dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), w = kt, g = vt.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, ft(g[2]);
		return r = o, i = c, rt(o, c);
	} finally {
		vt.__wbindgen_free(r, i, 1);
	}
}
function ne(n) {
	const e = ut(n, vt.__wbindgen_malloc), _ = kt, t = vt.nonwearInSleepCounts(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function ee(n) {
	const e = vt.nonwearSleepOverlap(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function _e(n, e, _) {
	const t = ut(n, vt.__wbindgen_malloc), r = kt, i = ut(e, vt.__wbindgen_malloc), o = kt, c = vt.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw ft(c[1]);
	return ft(c[0]);
}
function te(n, e, _, t, r, i) {
	const o = dt(r, vt.__wbindgen_malloc, vt.__wbindgen_realloc), c = kt, l = vt.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw ft(l[2]);
	var a = $_(l[0], l[1]).slice();
	return vt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function re(n, e) {
	const _ = gt(n, vt.__wbindgen_malloc), t = kt, r = vt.parseActigraphCsv(_, t, e);
	if (r[2]) throw ft(r[1]);
	return ft(r[0]);
}
function ie(n) {
	const e = vt.parseActigraphCsvBuffered(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function oe(n, e, _, t) {
	const r = gt(n, vt.__wbindgen_malloc), i = kt;
	var o = st(e) ? 0 : dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), c = kt, l = st(_) ? 0 : bt(_, vt.__wbindgen_malloc), a = kt, s = st(t) ? 0 : dt(t, vt.__wbindgen_malloc, vt.__wbindgen_realloc), w = kt;
	const g = vt.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw ft(g[1]);
	return ft(g[0]);
}
function ce(n) {
	const e = gt(n, vt.__wbindgen_malloc), _ = kt, t = vt.parseCwa(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function le(n, e) {
	const _ = gt(n, vt.__wbindgen_malloc), t = kt, r = dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), i = kt, o = vt.parseEpochSeries(_, t, r, i);
	if (o[2]) throw ft(o[1]);
	return ft(o[0]);
}
function ae(n) {
	const e = gt(n, vt.__wbindgen_malloc), _ = kt, t = vt.parseGeneactivBin(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function se(n) {
	const e = gt(n, vt.__wbindgen_malloc), _ = kt, t = vt.parseGeneactivCsv(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function we() {
	const n = vt.parseGeneactivCsvBuffered();
	if (n[2]) throw ft(n[1]);
	return ft(n[0]);
}
function ge(n) {
	const e = gt(n, vt.__wbindgen_malloc), _ = kt, t = vt.parseGt3x(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function ue(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = gt(e, vt.__wbindgen_malloc), c = kt, l = gt(_, vt.__wbindgen_malloc), a = kt, s = vt.participantValidity(r, i, o, c, l, a, st(t) ? 0 : q_(t));
	if (s[2]) throw ft(s[1]);
	return ft(s[0]);
}
function be(n, e, _, t, r) {
	const i = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt, c = ut(e, vt.__wbindgen_malloc), l = kt;
	var a = st(_) ? 0 : ut(_, vt.__wbindgen_malloc), s = kt;
	const w = vt.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw ft(w[1]);
	return ft(w[0]);
}
function de(n) {
	let e, _;
	try {
		const i = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt, c = vt.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ft(c[2]);
		return e = t, _ = r, rt(t, r);
	} finally {
		vt.__wbindgen_free(e, _, 1);
	}
}
function fe(n, e, _, t, r, i) {
	const o = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), c = kt, l = ut(e, vt.__wbindgen_malloc), a = kt, s = ut(_, vt.__wbindgen_malloc), w = kt, g = gt(t, vt.__wbindgen_malloc), u = kt, b = gt(r, vt.__wbindgen_malloc), d = kt, f = dt(i, vt.__wbindgen_malloc, vt.__wbindgen_realloc), m = kt, h = vt.placeMarkersBatch(o, c, l, a, s, w, g, u, b, d, f, m);
	if (h[2]) throw ft(h[1]);
	return ft(h[0]);
}
function me(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h, p) {
	const y = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), v = kt, k = ut(e, vt.__wbindgen_malloc), C = kt, S = wt(_, vt.__wbindgen_malloc), A = kt, R = ut(t, vt.__wbindgen_malloc), D = kt, x = wt(r, vt.__wbindgen_malloc), M = kt, P = gt(i, vt.__wbindgen_malloc), I = kt, F = wt(o, vt.__wbindgen_malloc), W = kt, O = gt(c, vt.__wbindgen_malloc), U = kt, z = wt(l, vt.__wbindgen_malloc), N = kt, G = ut(a, vt.__wbindgen_malloc), B = kt, T = wt(s, vt.__wbindgen_malloc), V = kt, j = ut(w, vt.__wbindgen_malloc), L = kt, E = wt(g, vt.__wbindgen_malloc), H = kt, X = ut(u, vt.__wbindgen_malloc), q = kt, Z = wt(b, vt.__wbindgen_malloc), $ = kt, Y = ut(d, vt.__wbindgen_malloc), K = kt, J = wt(f, vt.__wbindgen_malloc), Q = kt, nn = gt(m, vt.__wbindgen_malloc), en = kt, _n = wt(h, vt.__wbindgen_malloc), tn = kt;
	var rn = st(p) ? 0 : dt(p, vt.__wbindgen_malloc, vt.__wbindgen_realloc), on = kt;
	const cn = vt.placeMarkersTyped(y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, U, z, N, G, B, T, V, j, L, E, H, X, q, Z, $, Y, K, J, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw ft(cn[1]);
	return ft(cn[0]);
}
function he(n) {
	let e, _;
	try {
		const i = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt, c = vt.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ft(c[2]);
		return e = t, _ = r, rt(t, r);
	} finally {
		vt.__wbindgen_free(e, _, 1);
	}
}
function pe(n, e, _, t) {
	const r = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), i = kt, o = ut(e, vt.__wbindgen_malloc), c = kt, l = ut(_, vt.__wbindgen_malloc), a = kt, s = gt(t, vt.__wbindgen_malloc), w = kt, g = vt.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw ft(g[1]);
	return ft(g[0]);
}
function ye(n) {
	const e = vt.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function ve(n) {
	const e = vt.prepareCompactPipelineV1(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function ke(n, e, _, t, r, i, o, c) {
	const l = ut(n, vt.__wbindgen_malloc), a = kt, s = ut(e, vt.__wbindgen_malloc), w = kt, g = ut(_, vt.__wbindgen_malloc), u = kt, b = ut(t, vt.__wbindgen_malloc), d = kt;
	var f = st(o) ? 0 : dt(o, vt.__wbindgen_malloc, vt.__wbindgen_realloc), m = kt, h = st(c) ? 0 : dt(c, vt.__wbindgen_malloc, vt.__wbindgen_realloc), p = kt;
	const y = vt.processGeneactivRaw(l, a, s, w, g, u, b, d, r, i, f, m, h, p);
	if (y[2]) throw ft(y[1]);
	return ft(y[0]);
}
function Ce(n, e) {
	const _ = gt(n, vt.__wbindgen_malloc), t = kt;
	var r = st(e) ? 0 : dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), i = kt;
	const o = vt.processGt3xPart1(_, t, r, i);
	if (o[2]) throw ft(o[1]);
	return ft(o[0]);
}
function Se(n, e, _) {
	const t = gt(n, vt.__wbindgen_malloc), r = kt;
	var i = st(_) ? 0 : dt(_, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt;
	const c = vt.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw ft(c[1]);
	return ft(c[0]);
}
function Ae(n, e, _, t, r, i, o) {
	const c = ut(n, vt.__wbindgen_malloc), l = kt, a = ut(e, vt.__wbindgen_malloc), s = kt, w = ut(_, vt.__wbindgen_malloc), g = kt;
	var u = st(i) ? 0 : dt(i, vt.__wbindgen_malloc, vt.__wbindgen_realloc), b = kt, d = st(o) ? 0 : dt(o, vt.__wbindgen_malloc, vt.__wbindgen_realloc), f = kt;
	const m = vt.processRawXyz(c, l, a, s, w, g, t, r, u, b, d, f);
	if (m[2]) throw ft(m[1]);
	return ft(m[0]);
}
function Re(n, e, _, t, r, i, o, c) {
	const l = ut(n, vt.__wbindgen_malloc), a = kt, s = ut(e, vt.__wbindgen_malloc), w = kt, g = ut(_, vt.__wbindgen_malloc), u = kt, b = ut(t, vt.__wbindgen_malloc), d = kt;
	var f = st(i) ? 0 : dt(i, vt.__wbindgen_malloc, vt.__wbindgen_realloc), m = kt, h = st(o) ? 0 : dt(o, vt.__wbindgen_malloc, vt.__wbindgen_realloc), p = kt, y = st(c) ? 0 : ut(c, vt.__wbindgen_malloc), v = kt;
	const k = vt.processRawXyzImputed(l, a, s, w, g, u, b, d, r, f, m, h, p, y, v);
	if (k[2]) throw ft(k[1]);
	return ft(k[0]);
}
function De(n, e, _, t, r, i, o, c, l, a) {
	const s = ut(n, vt.__wbindgen_malloc), w = kt, g = ut(e, vt.__wbindgen_malloc), u = kt, b = ut(_, vt.__wbindgen_malloc), d = kt, f = ut(t, vt.__wbindgen_malloc), m = kt;
	var h = st(i) ? 0 : dt(i, vt.__wbindgen_malloc, vt.__wbindgen_realloc), p = kt, y = st(c) ? 0 : dt(c, vt.__wbindgen_malloc, vt.__wbindgen_realloc), v = kt, k = st(a) ? 0 : ut(a, vt.__wbindgen_malloc), C = kt;
	const S = vt.processRawXyzImputedWithEpoch(s, w, g, u, b, d, f, m, r, h, p, o, y, v, st(l) ? 16777215 : l ? 1 : 0, k, C);
	if (S[2]) throw ft(S[1]);
	return ft(S[0]);
}
function xe(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = gt(e, vt.__wbindgen_malloc), c = kt, l = ut(t, vt.__wbindgen_malloc), a = kt, s = vt.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = J_(s[0], s[1]).slice();
	return vt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function Me(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = ut(e, vt.__wbindgen_malloc), c = kt, l = ut(_, vt.__wbindgen_malloc), a = kt, s = vt.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw ft(s[1]);
	return ft(s[0]);
}
function Pe(n, e, _) {
	const t = gt(n, vt.__wbindgen_malloc), r = kt;
	var i = st(e) ? 0 : dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt;
	const c = vt.readGgirMeta(t, r, i, o, st(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw ft(c[1]);
	return ft(c[0]);
}
function Ie(n, e) {
	const _ = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), t = kt;
	var r = st(e) ? 0 : dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), i = kt;
	const o = vt.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw ft(o[1]);
	return ft(o[0]);
}
function Fe() {
	return vt.recommended_chunk_size_mb() >>> 0;
}
function We(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), i = kt, o = vt.reduceF64V1(_, t, r, i);
	if (o[2]) throw ft(o[1]);
	return o[0];
}
function Oe(n, e) {
	const _ = bt(e, vt.__wbindgen_malloc), t = kt, r = vt.rerunGgirResults(n, _, t);
	if (r[2]) throw ft(r[1]);
	return ft(r[0]);
}
function Ue(n) {
	const e = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), _ = kt, t = vt.resolveTimezone(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function ze(n, e, _) {
	const t = ut(n, vt.__wbindgen_malloc), r = kt, i = ut(e, vt.__wbindgen_malloc), o = kt, c = wt(_, vt.__wbindgen_malloc), l = kt, a = vt.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw ft(a[2]);
	var s = Y_(a[0], a[1]).slice();
	return vt.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function Ne(n, e, _, t, r, i, o, c, l, a, s, w, g, u) {
	const b = gt(n, vt.__wbindgen_malloc), d = kt, f = dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), m = kt;
	var h = st(_) ? 0 : gt(_, vt.__wbindgen_malloc), p = kt, y = st(t) ? 0 : gt(t, vt.__wbindgen_malloc), v = kt, k = st(r) ? 0 : gt(r, vt.__wbindgen_malloc), C = kt, S = st(i) ? 0 : gt(i, vt.__wbindgen_malloc), A = kt, R = st(o) ? 0 : gt(o, vt.__wbindgen_malloc), D = kt, x = st(c) ? 0 : dt(c, vt.__wbindgen_malloc, vt.__wbindgen_realloc), M = kt, P = st(l) ? 0 : dt(l, vt.__wbindgen_malloc, vt.__wbindgen_realloc), I = kt, F = st(a) ? 0 : bt(a, vt.__wbindgen_malloc), W = kt, O = st(w) ? 0 : dt(w, vt.__wbindgen_malloc, vt.__wbindgen_realloc), U = kt, z = st(g) ? 0 : dt(g, vt.__wbindgen_malloc, vt.__wbindgen_realloc), N = kt;
	const G = vt.reviewGgirResults(b, d, f, m, h, p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, s, O, U, z, N, st(u) ? 4294967297 : u >>> 0);
	if (G[2]) throw ft(G[1]);
	return ft(G[0]);
}
function Ge(n) {
	const e = bt(n, vt.__wbindgen_malloc), _ = kt, t = vt.reviewNonwearFile(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function Be(n) {
	const e = bt(n, vt.__wbindgen_malloc), _ = kt, t = vt.reviewNonwearTotals(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function Te(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = vt.roundCountStorage(_, t, e);
	var i = $_(r[0], r[1]).slice();
	return vt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Ve(n) {
	const e = vt.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function je(n) {
	const e = vt.runCompactPipelineV1(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function Le(n) {
	const e = vt.runFullPipelineOutcomeV1(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function Ee(n) {
	const e = vt.runFullPipelineV1(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function He(n) {
	const e = vt.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function Xe(n) {
	const e = vt.runGgirPart3(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function qe(n, e) {
	const _ = gt(n, vt.__wbindgen_malloc), t = kt;
	var r = st(e) ? 0 : dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), i = kt;
	const o = vt.runMilestone(_, t, r, i);
	if (o[2]) throw ft(o[1]);
	return ft(o[0]);
}
function Ze(n) {
	const e = bt(n, vt.__wbindgen_malloc), _ = kt, t = vt.scoreAllDays(e, _);
	if (t[3]) throw ft(t[2]);
	var r = Y_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function $e(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = vt.scoreColeKripke(_, t, e);
	var i = J_(r[0], r[1]).slice();
	return vt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Ye(n) {
	let e, _;
	try {
		const i = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt, c = vt.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ft(c[2]);
		return e = t, _ = r, rt(t, r);
	} finally {
		vt.__wbindgen_free(e, _, 1);
	}
}
function Ke(n) {
	const e = vt.scoreConsensusMajority(n);
	if (e[3]) throw ft(e[2]);
	var _ = J_(e[0], e[1]).slice();
	return vt.__wbindgen_free(e[0], 1 * e[1], 1), _;
}
function Je(n, e, _) {
	const t = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), r = kt, i = gt(e, vt.__wbindgen_malloc), o = kt, c = wt(_, vt.__wbindgen_malloc), l = kt, a = vt.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw ft(a[1]);
	return ft(a[0]);
}
function Qe(n) {
	let e, _;
	try {
		const i = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt, c = vt.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ft(c[2]);
		return e = t, _ = r, rt(t, r);
	} finally {
		vt.__wbindgen_free(e, _, 1);
	}
}
function n_(n, e, _, t, r, i) {
	const o = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), c = kt, l = ut(e, vt.__wbindgen_malloc), a = kt, s = ut(_, vt.__wbindgen_malloc), w = kt, g = ut(t, vt.__wbindgen_malloc), u = kt, b = vt.scoreEpochsTyped(o, c, l, a, s, w, g, u, r, i);
	if (b[2]) throw ft(b[1]);
	return ft(b[0]);
}
function e_(n, e, _) {
	const t = ut(n, vt.__wbindgen_malloc), r = kt;
	var i = st(e) ? 0 : dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt, c = st(_) ? 0 : ut(_, vt.__wbindgen_malloc), l = kt;
	const a = vt.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw ft(a[2]);
	var s = J_(a[0], a[1]).slice();
	return vt.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function __(n) {
	const e = vt.scoreGgirHasibVariant(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function t_(n, e, _, t, r) {
	const i = ut(n, vt.__wbindgen_malloc), o = kt, c = ut(e, vt.__wbindgen_malloc), l = kt;
	var a = st(t) ? 0 : dt(t, vt.__wbindgen_malloc, vt.__wbindgen_realloc), s = kt, w = st(r) ? 0 : ut(r, vt.__wbindgen_malloc), g = kt;
	const u = vt.scoreGgirSib(i, o, c, l, _, a, s, w, g);
	if (u[2]) throw ft(u[1]);
	return ft(u[0]);
}
function r_(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = vt.scoreSadeh(_, t, e);
	var i = J_(r[0], r[1]).slice();
	return vt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function i_(n) {
	const e = bt(n, vt.__wbindgen_malloc), _ = kt, t = vt.settleManualNonwearNights(e, _);
	if (t[3]) throw ft(t[2]);
	var r = Y_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function o_(n) {
	const e = gt(n, vt.__wbindgen_malloc), _ = kt, t = vt.sha256StreamFeed(e, _);
	if (t[1]) throw ft(t[0]);
}
function c_() {
	let n, e;
	try {
		const r = vt.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, ft(r[2]);
		return n = _, e = t, rt(_, t);
	} finally {
		vt.__wbindgen_free(n, e, 1);
	}
}
function l_() {
	vt.sha256StreamStart();
}
function a_(n, e) {
	const _ = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), t = kt, r = vt.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = rt(r[0], r[1]).slice(), vt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function s_(n, e, _, t, r) {
	const i = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt, c = ut(e, vt.__wbindgen_malloc), l = kt, a = wt(_, vt.__wbindgen_malloc), s = kt, w = ut(t, vt.__wbindgen_malloc), g = kt, u = wt(r, vt.__wbindgen_malloc), b = kt, d = vt.sleepRegularityIndex(i, o, c, l, a, s, w, g, u, b);
	if (d[3]) throw ft(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function w_(n, e) {
	const _ = vt.sleepWakeScores(n, st(e) ? 0 : q_(e));
	if (_[2]) throw ft(_[1]);
	return ft(_[0]);
}
function g_(n) {
	const e = bt(n, vt.__wbindgen_malloc), _ = kt, t = vt.sourceLabelsWallClockMs(e, _);
	var r = $_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function u_(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = ut(e, vt.__wbindgen_malloc), c = kt, l = vt.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function b_(n, e, _) {
	const t = ut(n, vt.__wbindgen_malloc), r = kt, i = bt(e, vt.__wbindgen_malloc), o = kt, c = ut(_, vt.__wbindgen_malloc), l = kt, a = vt.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw ft(a[2]);
	let s;
	return 0 !== a[0] && (s = $_(a[0], a[1]).slice(), vt.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function d_(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = gt(e, vt.__wbindgen_malloc), c = kt, l = ut(_, vt.__wbindgen_malloc), a = kt, s = ut(t, vt.__wbindgen_malloc), w = kt, g = vt.statesInPeriods(r, i, o, c, l, a, s, w);
	var u = J_(g[0], g[1]).slice();
	return vt.__wbindgen_free(g[0], 1 * g[1], 1), u;
}
function f_(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = bt(e, vt.__wbindgen_malloc), i = kt, o = vt.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw ft(o[2]);
	var c = $_(o[0], o[1]).slice();
	return vt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function m_(n) {
	const e = gt(n, vt.__wbindgen_malloc), _ = kt, t = vt.streamParseFeed(e, _);
	if (t[2]) throw ft(t[1]);
	return t[0] >>> 0;
}
function h_() {
	const n = vt.streamParseFinish();
	if (n[2]) throw ft(n[1]);
	return _.__wrap(n[0]);
}
function p_() {
	const n = vt.streamParseFinishChunk();
	if (n[2]) throw ft(n[1]);
	return e.__wrap(n[0]);
}
function y_(n) {
	const _ = vt.streamParseFinishChunkWithProgress(n);
	if (_[2]) throw ft(_[1]);
	return e.__wrap(_[0]);
}
function v_(n, e, _) {
	var t = st(_) ? 0 : dt(_, vt.__wbindgen_malloc, vt.__wbindgen_realloc), r = kt;
	const i = vt.streamParseStart(n, e, t, r);
	if (i[1]) throw ft(i[0]);
}
function k_(n, e) {
	const _ = vt.streamParseStartData(n, e);
	if (_[1]) throw ft(_[0]);
}
function C_(n, e, _, t, r) {
	var i = st(t) ? 0 : dt(t, vt.__wbindgen_malloc, vt.__wbindgen_realloc), o = kt;
	const c = vt.streamParseStartWithEpoch(n, e, _, i, o, !st(r), st(r) ? 0 : r);
	if (c[1]) throw ft(c[0]);
}
function S_(n, e) {
	const _ = gt(n, vt.__wbindgen_malloc), t = kt, r = vt.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw ft(r[1]);
	return ft(r[0]);
}
function A_(n) {
	const e = vt.summarizeExportGroups(n);
	if (e[3]) throw ft(e[2]);
	var _ = Y_(e[0], e[1]).slice();
	return vt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function R_(n) {
	const e = vt.summarizePhysicalActivityDays(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function D_(n) {
	const e = vt.summarizePhysicalActivityTrace(n);
	if (e[2]) throw ft(e[1]);
	return ft(e[0]);
}
function x_(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = vt.thresholdProbabilities(_, t, e);
	var i = J_(r[0], r[1]).slice();
	return vt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function M_(n) {
	const e = bt(n, vt.__wbindgen_malloc), _ = kt, t = vt.timeSemantics(e, _);
	if (t[3]) throw ft(t[2]);
	var r = Y_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function P_(n, e, _) {
	const t = ut(n, vt.__wbindgen_malloc), r = kt, i = vt.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw ft(i[2]);
	var o = Y_(i[0], i[1]).slice();
	return vt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function I_(n, e, _) {
	const t = vt.uniformTimestamps(n, e, _);
	var r = $_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function F_(n, e) {
	const _ = vt.utcDatesInSpan(n, e);
	var t = Y_(_[0], _[1]).slice();
	return vt.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function W_(n) {
	const e = ut(n, vt.__wbindgen_malloc), _ = kt, t = vt.utcDayIndex(e, _);
	if (t[2]) throw ft(t[1]);
	return ft(t[0]);
}
function O_(n) {
	const e = gt(n, vt.__wbindgen_malloc), _ = kt, t = vt.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function U_(n, e) {
	const _ = ut(n, vt.__wbindgen_malloc), t = kt, r = vt.validWearDays(_, t, st(e) ? 0 : q_(e));
	if (r[3]) throw ft(r[2]);
	var i = J_(r[0], r[1]).slice();
	return vt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function z_(n, e, _) {
	const t = ut(n, vt.__wbindgen_malloc), r = kt, i = vt.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw ft(i[1]);
	return ft(i[0]);
}
function N_(n) {
	const e = ut(n, vt.__wbindgen_malloc), _ = kt, t = vt.wallClockLabels(e, _);
	var r = Y_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function G_(n, e, _) {
	const t = gt(n, vt.__wbindgen_malloc), r = kt, i = bt(_, vt.__wbindgen_malloc), o = kt, c = vt.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw ft(c[2]);
	var l = J_(c[0], c[1]).slice();
	return vt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B_(n, e) {
	const _ = dt(n, vt.__wbindgen_malloc, vt.__wbindgen_realloc), t = kt;
	var r = st(e) ? 0 : dt(e, vt.__wbindgen_malloc, vt.__wbindgen_realloc), i = kt;
	const o = vt.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw ft(o[1]);
	return ft(o[0]);
}
function T_(n) {
	const e = bt(n, vt.__wbindgen_malloc), _ = kt, t = vt.weekendDates(e, _);
	var r = J_(t[0], t[1]).slice();
	return vt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function V_(n, e, _, t) {
	const r = ut(n, vt.__wbindgen_malloc), i = kt, o = vt.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function j_(n, e, _, t, r) {
	const i = ut(n, vt.__wbindgen_malloc), o = kt, c = ut(e, vt.__wbindgen_malloc), l = kt, a = ut(_, vt.__wbindgen_malloc), s = kt, w = vt.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw ft(w[1]);
	return ft(w[0]);
}
function L_() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(rt(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = dt(String(e), vt.__wbindgen_malloc, vt.__wbindgen_realloc), t = kt;
				nt().setInt32(n + 4, t, !0), nt().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				nt().setBigInt64(n + 8, st(_) ? BigInt(0) : _, !0), nt().setInt32(n + 0, !st(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return st(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = dt(Z_(e), vt.__wbindgen_malloc, vt.__wbindgen_realloc), t = kt;
				nt().setInt32(n + 4, t, !0), nt().setInt32(n + 0, _, !0);
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
				nt().setFloat64(n + 8, st(_) ? 0 : _, !0), nt().setInt32(n + 0, !st(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = st(_) ? 0 : dt(_, vt.__wbindgen_malloc, vt.__wbindgen_realloc), r = kt;
				nt().setInt32(n + 4, r, !0), nt().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(rt(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return at(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return at(function(n, e, _, t) {
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
					_ = n, t = e, console.error(rt(n, e));
				} finally {
					vt.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return at(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return at(function(n, e) {
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
				return new Uint32Array(K_(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array($_(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== et && 0 !== et.byteLength || (et = new Float32Array(vt.memory.buffer)), et).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return at(function(n) {
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
				return at(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(J_(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return at(function(n, e, _) {
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
				const _ = dt(e.stack, vt.__wbindgen_malloc, vt.__wbindgen_realloc), t = kt;
				nt().setInt32(n + 4, t, !0), nt().setInt32(n + 0, _, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return st(n) ? 0 : q_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return st(n) ? 0 : q_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return st(n) ? 0 : q_(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return st(n) ? 0 : q_(n);
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
				return J_(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return rt(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = vt.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
const E_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => vt.__wbg_aw5batch_free(n >>> 0, 1)), H_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => vt.__wbg_streamchunkresult_free(n >>> 0, 1)), X_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => vt.__wbg_streamparseresult_free(n >>> 0, 1));
function q_(n) {
	const e = vt.__externref_table_alloc();
	return vt.__wbindgen_externrefs.set(e, n), e;
}
function Z_(n) {
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
		e > 0 && (_ += Z_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + Z_(n[t]);
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
function $_(n, e) {
	return n >>>= 0, tt().subarray(n / 8, n / 8 + e);
}
function Y_(n, e) {
	n >>>= 0;
	const _ = nt(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(vt.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return vt.__externref_drop_slice(n, e), t;
}
function K_(n, e) {
	return n >>>= 0, ot().subarray(n / 4, n / 4 + e);
}
function J_(n, e) {
	return n >>>= 0, lt().subarray(n / 1, n / 1 + e);
}
let Q_ = null;
function nt() {
	return (null === Q_ || !0 === Q_.buffer.detached || void 0 === Q_.buffer.detached && Q_.buffer !== vt.memory.buffer) && (Q_ = new DataView(vt.memory.buffer)), Q_;
}
let et = null, _t = null;
function tt() {
	return null !== _t && 0 !== _t.byteLength || (_t = new Float64Array(vt.memory.buffer)), _t;
}
function rt(n, e) {
	return function(n, e) {
		return pt += e, pt >= ht && (mt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), mt.decode(), pt = e), mt.decode(lt().subarray(n, n + e));
	}(n >>>= 0, e);
}
let it = null;
function ot() {
	return null !== it && 0 !== it.byteLength || (it = new Uint32Array(vt.memory.buffer)), it;
}
let ct = null;
function lt() {
	return null !== ct && 0 !== ct.byteLength || (ct = new Uint8Array(vt.memory.buffer)), ct;
}
function at(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = q_(_);
		vt.__wbindgen_exn_store(n);
	}
}
function st(n) {
	return null == n;
}
function wt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return ot().set(n, _ / 4), kt = n.length, _;
}
function gt(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return lt().set(n, _ / 1), kt = n.length, _;
}
function ut(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return tt().set(n, _ / 8), kt = n.length, _;
}
function bt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = q_(n[t]);
		nt().setUint32(_ + 4 * t, e, !0);
	}
	return kt = n.length, _;
}
function dt(n, e, _) {
	if (void 0 === _) {
		const _ = yt.encode(n), t = e(_.length, 1) >>> 0;
		return lt().subarray(t, t + _.length).set(_), kt = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = lt();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = lt().subarray(r + o, r + t);
		o += yt.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return kt = o, r;
}
function ft(n) {
	const e = vt.__wbindgen_externrefs.get(n);
	return vt.__externref_table_dealloc(n), e;
}
let mt = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
mt.decode();
const ht = 2146435072;
let pt = 0;
const yt = new TextEncoder();
"encodeInto" in yt || (yt.encodeInto = function(n, e) {
	const _ = yt.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let vt, kt = 0;
function Ct(n, e) {
	return vt = n.exports, Q_ = null, et = null, _t = null, it = null, ct = null, vt.__wbindgen_start(), vt;
}
function St(n) {
	if (void 0 !== vt) return vt;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = L_();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Ct(new WebAssembly.Instance(n, e));
}
async function At(n) {
	if (void 0 !== vt) return vt;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-BP2fuiVm.wasm", "" + import.meta.url));
	const e = L_();
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
	return Ct(_);
}
export { n as Aw5Batch, e as StreamChunkResult, _ as StreamParseResult, t as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actiwareWakeThreshold, o as actoursVersion, c as aggregateEpochSeries, l as analysisDatesOf, a as analysisWindowBounds, s as analysisWindowSlice, w as analyzePhysicalActivityDay, g as classifyActimetricPreschoolWristRf, u as classifyActimetricPreschoolWristRfLagLead, b as classifyActimetricPreschoolWristRfLagLeadCalibrated, d as clippedUnionHours, f as compareNonwearDetectorMasks, m as computeAnglez5s, h as computeCircadian, p as computeCircadianTyped, y as computeEnmo5s, v as computeMimsUnit, k as computeMimsUnitDataframe, C as computeMimsUnitTimingBreakdown, S as computeMimsUnitValues, A as computeNightDifficulty, R as computeNightDifficultyTyped, D as computeNightSignals, x as computeNightSignalsTyped, M as computeSleepMetrics, P as configureComputeMemoryBudgetV1, I as consensusDisagreementDetail, F as consensusDisagreements, W as convertBedWakeDaysDiary, O as convertScreensRedcapDiary, U as csvBufferAppend, z as csvBufferClear, N as cutpointEpochCompatibility, G as cutpointToneCodes, B as cutpointsRefusal, T as cutpointsValid, At as default, V as describeColumns, j as detectDetachFromAccelerationG, L as detectDeviceFormat, E as detectGgirHasptVariant, H as detectHdcza, X as detectHourClockJumpMs, q as detectNonwear, Z as detectNonwearChoi2011, $ as detectNonwearChoi2011Bouts, Y as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, J as detectNonwearChoi2012Bouts, Q as detectNonwearChoi2012Epoch, nn as detectNonwearChoiBouts, en as detectNonwearUnified, _n as detectNonwearUnifiedBatchTyped, tn as dstPlaceholderRuns, rn as effectiveOverrideCutpoints, on as epochAgreement, cn as epochRawData, ln as epochWithBandpass, an as epochsOverlapping, sn as executeHeroRuntime, wn as exportNapAggregate, gn as exportPeriodFigures, un as extractCapsense, bn as foldOntoGrid, dn as foldSampleBlocks, fn as foldSleepWakeVotes, mn as foldUniformOntoGrid, hn as fuseNonwearMasks, pn as generateActiwareRestIntervals, yn as getComputeCapabilitiesV1, vn as ggir5sWallClockMs, kn as ggirAppConfigSummary, Cn as ggirConfigValues, Sn as ggirDaysIncluded, An as ggirDiaryLogShape, Rn as ggirDstPlaceholderCuts, Dn as ggirIncludeDayCriterionHours, xn as ggirIndicesToWallClockMs, Mn as ggirLabelsToStoredMs, Pn as ggirManualNightClocks, In as ggirMilestoneVersion, Fn as ggirRerunProfiles, Wn as ggirSleeplogStoredClocks, On as ggirSptDurationHours, Un as ggirSummaryDenominator, zn as gridOffsetWithin, Nn as identifyGgirRData, Gn as implausibilityReasons, St as initSync, Bn as installPanicHook, Tn as interRaterReliability, Vn as irregularInternalDays, jn as isGeneactivFormat, Ln as linearMemoryBytesV1, En as lstmSpectralFeatures30s, Hn as markerIndexRange, Xn as markerSleepOnsetOffset, qn as medianGapSeconds, Zn as metricWarnings, $n as midSleepClockHours, Yn as neishabouriCounts, Kn as nextDate, Jn as nightIntervalOverlap, Qn as nonwearContributors, ne as nonwearInSleepCounts, ee as nonwearSleepOverlap, _e as nonwearWeightRuns, te as normalizeCutpoints, re as parseActigraphCsv, ie as parseActigraphCsvBuffered, oe as parseAw5, ce as parseCwa, le as parseEpochSeries, ae as parseGeneactivBin, se as parseGeneactivCsv, we as parseGeneactivCsvBuffered, ge as parseGt3x, ue as participantValidity, be as physicalActivitySeriesGrid, de as placeMarkers, fe as placeMarkersBatch, me as placeMarkersTyped, he as placeNonwearMarkers, pe as placeNonwearMarkersTyped, ye as prepareCompactPipelineOutcomeV1, ve as prepareCompactPipelineV1, ke as processGeneactivRaw, Ce as processGt3xPart1, Se as processGt3xPart1WithEpoch, Ae as processRawXyz, Re as processRawXyzImputed, De as processRawXyzImputedWithEpoch, xe as projectLabelsOntoGrid, Me as rasterizePeriods, Pe as readGgirMeta, Ie as readGgirReportCsv, Fe as recommended_chunk_size_mb, We as reduceF64V1, Oe as rerunGgirResults, Ue as resolveTimezone, ze as restoredDstRuns, Ne as reviewGgirResults, Ge as reviewNonwearFile, Be as reviewNonwearTotals, Te as roundCountStorage, Ve as runCompactPipelineOutcomeV1, je as runCompactPipelineV1, Le as runFullPipelineOutcomeV1, Ee as runFullPipelineV1, He as runGgirDeclaredEpochsV1, Xe as runGgirPart3, qe as runMilestone, Ze as scoreAllDays, $e as scoreColeKripke, Ye as scoreConsensus, Ke as scoreConsensusMajority, Je as scoreConsensusTyped, Qe as scoreEpochs, n_ as scoreEpochsTyped, e_ as scoreGgirHasib, __ as scoreGgirHasibVariant, t_ as scoreGgirSib, r_ as scoreSadeh, i_ as settleManualNonwearNights, o_ as sha256StreamFeed, c_ as sha256StreamFinish, l_ as sha256StreamStart, a_ as shiftDate, s_ as sleepRegularityIndex, w_ as sleepWakeScores, g_ as sourceLabelsWallClockMs, u_ as spanFiniteMean, b_ as spliceDstPlaceholders, d_ as statesInPeriods, f_ as storedToGgirLabelsMs, m_ as streamParseFeed, h_ as streamParseFinish, p_ as streamParseFinishChunk, y_ as streamParseFinishChunkWithProgress, v_ as streamParseStart, k_ as streamParseStartData, C_ as streamParseStartWithEpoch, S_ as summarizeActimetricPreschoolWristRfClasses, A_ as summarizeExportGroups, R_ as summarizePhysicalActivityDays, D_ as summarizePhysicalActivityTrace, x_ as thresholdProbabilities, M_ as timeSemantics, P_ as timestampDiscontinuities, I_ as uniformTimestamps, F_ as utcDatesInSpan, W_ as utcDayIndex, O_ as validStateFraction, U_ as validWearDays, z_ as wallClockDstPlaceholders, N_ as wallClockLabels, G_ as wallMaskOntoGgirGrid, B_ as wearSiteHasptRouting, T_ as weekendDates, V_ as windowCoverage, j_ as zeroCrossingCounts };
