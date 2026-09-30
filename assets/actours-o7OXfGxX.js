var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, B_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		dt.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = dt.aw5batch_new(n);
		if (e[2]) throw st(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, B_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), r = ft;
		var i = rt(_) ? 0 : at(_, dt.__wbindgen_malloc, dt.__wbindgen_realloc), o = ft;
		const c = dt.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw st(c[1]);
		return st(c[0]);
	}
	subjects(n) {
		const e = dt.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw st(e[1]);
		return st(e[0]);
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, T_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, T_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		dt.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = dt.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = dt.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = dt.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = dt.streamchunkresult_axisX(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = dt.streamchunkresult_axisY(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = dt.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== dt.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = dt.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = J_(n[0], n[1]).slice(), dt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = dt.streamchunkresult_counts(this.__wbg_ptr);
		var e = X_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = dt.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = X_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = dt.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = dt.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = dt.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = dt.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return dt.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = dt.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = dt.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== dt.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = dt.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = J_(n[0], n[1]).slice(), dt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = dt.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = dt.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = dt.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== dt.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return dt.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return dt.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return dt.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = dt.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = X_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = dt.streamchunkresult_temperature(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = dt.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = dt.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = dt.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = dt.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = dt.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = dt.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, j_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, j_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		dt.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = dt.streamparseresult_axisX(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = dt.streamparseresult_axisY(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = dt.streamparseresult_axisZ(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== dt.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = dt.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = J_(n[0], n[1]).slice(), dt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return dt.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== dt.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return dt.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return dt.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = dt.streamparseresult_temperature(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = dt.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = dt.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = V_(n[0], n[1]).slice();
		return dt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n) {
	const e = dt.actiwareIntervalStatistics(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function r(n, e, _) {
	const t = dt.actiwareSleepIntervals(n, e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function i(n, e) {
	const _ = dt.actiwareWakeThreshold(n, e);
	if (_[3]) throw st(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function o() {
	let n, e;
	try {
		const _ = dt.actoursVersion();
		return n = _[0], e = _[1], J_(_[0], _[1]);
	} finally {
		dt.__wbindgen_free(n, e, 1);
	}
}
function c(n) {
	const e = dt.aggregateEpochSeries(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function l(n) {
	const e = ct(n, dt.__wbindgen_malloc), _ = ft, t = dt.analysisDatesOf(e, _);
	var r = H_(t[0], t[1]).slice();
	return dt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function a(n, e) {
	const _ = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), t = ft, r = dt.analysisWindowBounds(_, t, !rt(e), rt(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = V_(r[0], r[1]).slice(), dt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function s(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), i = ft, o = dt.analysisWindowSlice(_, t, r, i);
	var c = X_(o[0], o[1]).slice();
	return dt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function u(n) {
	let e, _;
	try {
		const i = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), o = ft, c = dt.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, st(c[2]);
		return e = t, _ = r, J_(t, r);
	} finally {
		dt.__wbindgen_free(e, _, 1);
	}
}
function w(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = ct(e, dt.__wbindgen_malloc), c = ft, l = ct(_, dt.__wbindgen_malloc), a = ft, s = dt.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw st(s[2]);
	var u = q_(s[0], s[1]).slice();
	return dt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function g(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = ct(e, dt.__wbindgen_malloc), c = ft, l = ct(_, dt.__wbindgen_malloc), a = ft, s = dt.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw st(s[2]);
	var u = q_(s[0], s[1]).slice();
	return dt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function b(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = ct(e, dt.__wbindgen_malloc), c = ft, l = ct(_, dt.__wbindgen_malloc), a = ft, s = dt.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw st(s[2]);
	var u = q_(s[0], s[1]).slice();
	return dt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function d(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = ct(e, dt.__wbindgen_malloc), c = ft;
	return dt.clippedUnionHours(r, i, o, c, _, t);
}
function f(n, e) {
	const _ = dt.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw st(_[1]);
	return st(_[0]);
}
function m(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = ct(e, dt.__wbindgen_malloc), c = ft, l = ct(_, dt.__wbindgen_malloc), a = ft, s = dt.computeAnglez5s(r, i, o, c, l, a, t);
	var u = V_(s[0], s[1]).slice();
	return dt.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function h(n) {
	let e, _;
	try {
		const i = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), o = ft, c = dt.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, st(c[2]);
		return e = t, _ = r, J_(t, r);
	} finally {
		dt.__wbindgen_free(e, _, 1);
	}
}
function p(n, e, _, t, r, i, o) {
	const c = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), l = ft, a = ct(e, dt.__wbindgen_malloc), s = ft, u = it(_, dt.__wbindgen_malloc), w = ft, g = ct(t, dt.__wbindgen_malloc), b = ft, d = it(r, dt.__wbindgen_malloc), f = ft, m = ot(i, dt.__wbindgen_malloc), h = ft, p = it(o, dt.__wbindgen_malloc), y = ft, v = dt.computeCircadianTyped(c, l, a, s, u, w, g, b, d, f, m, h, p, y);
	if (v[2]) throw st(v[1]);
	return st(v[0]);
}
function y(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = ct(e, dt.__wbindgen_malloc), c = ft, l = ct(_, dt.__wbindgen_malloc), a = ft, s = dt.computeEnmo5s(r, i, o, c, l, a, t);
	var u = V_(s[0], s[1]).slice();
	return dt.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function v(n, e, _, t, r) {
	const i = ct(n, dt.__wbindgen_malloc), o = ft, c = ct(e, dt.__wbindgen_malloc), l = ft, a = ct(_, dt.__wbindgen_malloc), s = ft, u = dt.computeMimsUnit(i, o, c, l, a, s, t, r);
	if (u[2]) throw st(u[1]);
	return st(u[0]);
}
function k(n, e, _, t, r) {
	const i = ct(n, dt.__wbindgen_malloc), o = ft, c = ct(e, dt.__wbindgen_malloc), l = ft, a = ct(_, dt.__wbindgen_malloc), s = ft, u = ct(t, dt.__wbindgen_malloc), w = ft, g = dt.computeMimsUnitDataframe(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw st(g[1]);
	return st(g[0]);
}
function S(n, e, _, t, r) {
	const i = ct(n, dt.__wbindgen_malloc), o = ft, c = ct(e, dt.__wbindgen_malloc), l = ft, a = ct(_, dt.__wbindgen_malloc), s = ft, u = dt.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, r);
	if (u[2]) throw st(u[1]);
	return st(u[0]);
}
function C(n, e, _, t, r) {
	const i = ct(n, dt.__wbindgen_malloc), o = ft, c = ct(e, dt.__wbindgen_malloc), l = ft, a = ct(_, dt.__wbindgen_malloc), s = ft, u = dt.computeMimsUnitValues(i, o, c, l, a, s, t, r);
	if (u[3]) throw st(u[2]);
	var w = V_(u[0], u[1]).slice();
	return dt.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function A(n) {
	let e, _;
	try {
		const i = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), o = ft, c = dt.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, st(c[2]);
		return e = t, _ = r, J_(t, r);
	} finally {
		dt.__wbindgen_free(e, _, 1);
	}
}
function R(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), y = ft, v = ct(e, dt.__wbindgen_malloc), k = ft, S = it(_, dt.__wbindgen_malloc), C = ft, A = ct(t, dt.__wbindgen_malloc), R = ft, x = it(r, dt.__wbindgen_malloc), D = ft, M = ot(i, dt.__wbindgen_malloc), P = ft, F = it(o, dt.__wbindgen_malloc), I = ft, W = ot(c, dt.__wbindgen_malloc), O = ft, U = it(l, dt.__wbindgen_malloc), z = ft, G = ct(a, dt.__wbindgen_malloc), N = ft, B = it(s, dt.__wbindgen_malloc), T = ft, j = ct(u, dt.__wbindgen_malloc), E = ft, L = it(w, dt.__wbindgen_malloc), V = ft, H = ct(g, dt.__wbindgen_malloc), X = ft, q = it(b, dt.__wbindgen_malloc), $ = ft, Y = ct(d, dt.__wbindgen_malloc), Z = ft, K = it(f, dt.__wbindgen_malloc), J = ft, Q = ot(m, dt.__wbindgen_malloc), nn = ft, en = it(h, dt.__wbindgen_malloc), _n = ft, tn = dt.computeNightDifficultyTyped(p, y, v, k, S, C, A, R, x, D, M, P, F, I, W, O, U, z, G, N, B, T, j, E, L, V, H, X, q, $, Y, Z, K, J, Q, nn, en, _n);
	if (tn[2]) throw st(tn[1]);
	return st(tn[0]);
}
function x(n) {
	let e, _;
	try {
		const i = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), o = ft, c = dt.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, st(c[2]);
		return e = t, _ = r, J_(t, r);
	} finally {
		dt.__wbindgen_free(e, _, 1);
	}
}
function D(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), y = ft, v = ct(e, dt.__wbindgen_malloc), k = ft, S = it(_, dt.__wbindgen_malloc), C = ft, A = ct(t, dt.__wbindgen_malloc), R = ft, x = it(r, dt.__wbindgen_malloc), D = ft, M = ot(i, dt.__wbindgen_malloc), P = ft, F = it(o, dt.__wbindgen_malloc), I = ft, W = ot(c, dt.__wbindgen_malloc), O = ft, U = it(l, dt.__wbindgen_malloc), z = ft, G = ct(a, dt.__wbindgen_malloc), N = ft, B = it(s, dt.__wbindgen_malloc), T = ft, j = ct(u, dt.__wbindgen_malloc), E = ft, L = it(w, dt.__wbindgen_malloc), V = ft, H = ct(g, dt.__wbindgen_malloc), X = ft, q = it(b, dt.__wbindgen_malloc), $ = ft, Y = ct(d, dt.__wbindgen_malloc), Z = ft, K = it(f, dt.__wbindgen_malloc), J = ft, Q = ot(m, dt.__wbindgen_malloc), nn = ft, en = it(h, dt.__wbindgen_malloc), _n = ft, tn = dt.computeNightSignalsTyped(p, y, v, k, S, C, A, R, x, D, M, P, F, I, W, O, U, z, G, N, B, T, j, E, L, V, H, X, q, $, Y, Z, K, J, Q, nn, en, _n);
	if (tn[2]) throw st(tn[1]);
	return st(tn[0]);
}
function M(n, e, _) {
	const t = ot(n, dt.__wbindgen_malloc), r = ft, i = ct(e, dt.__wbindgen_malloc), o = ft, c = dt.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw st(c[1]);
	return st(c[0]);
}
function P(n) {
	const e = dt.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function F(n) {
	const e = dt.consensusDisagreementDetail(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function I(n) {
	const e = dt.consensusDisagreements(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function W(n) {
	const e = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), _ = ft, t = dt.convertScreensRedcapDiary(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function O(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft;
	dt.csvBufferAppend(e, _);
}
function U(n) {
	dt.csvBufferClear(n);
}
function z(n, e) {
	const _ = dt.cutpointEpochCompatibility(n, e);
	if (_[2]) throw st(_[1]);
	return st(_[0]);
}
function G(n, e, _, t, r) {
	const i = ct(n, dt.__wbindgen_malloc), o = ft, c = dt.cutpointToneCodes(i, o, e, _, t, r);
	var l = q_(c[0], c[1]).slice();
	return dt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function N(n, e, _, t) {
	const r = dt.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = J_(r[0], r[1]).slice(), dt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function B(n, e, _, t) {
	return 0 !== dt.cutpointsValid(n, e, _, t);
}
function T(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = it(e, dt.__wbindgen_malloc), i = ft, o = dt.describeColumns(_, t, r, i);
	if (o[2]) throw st(o[1]);
	return st(o[0]);
}
function j(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = ct(e, dt.__wbindgen_malloc), i = ft, o = dt.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw st(o[2]);
	var c = q_(o[0], o[1]).slice();
	return dt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function E(n, e) {
	let _, t;
	try {
		const r = ot(n, dt.__wbindgen_malloc), i = ft, o = at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), c = ft, l = dt.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], J_(l[0], l[1]);
	} finally {
		dt.__wbindgen_free(_, t, 1);
	}
}
function L(n) {
	const e = dt.detectGgirHasptVariant(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function V(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft;
	var o = rt(e) ? 0 : at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), c = ft, l = rt(_) ? 0 : ct(_, dt.__wbindgen_malloc), a = ft, s = rt(t) ? 0 : ct(t, dt.__wbindgen_malloc), u = ft;
	return dt.detectHdcza(r, i, o, c, l, a, s, u);
}
function H(n) {
	const e = ct(n, dt.__wbindgen_malloc), _ = ft;
	return 0 !== dt.detectHourClockJumpMs(e, _);
}
function X(n) {
	const e = ct(n, dt.__wbindgen_malloc), _ = ft, t = dt.detectNonwear(e, _);
	var r = q_(t[0], t[1]).slice();
	return dt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function q(n) {
	const e = ct(n, dt.__wbindgen_malloc), _ = ft, t = dt.detectNonwearChoi2011(e, _);
	var r = q_(t[0], t[1]).slice();
	return dt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = ct(n, dt.__wbindgen_malloc), _ = ft, t = dt.detectNonwearChoi2011Bouts(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function Y(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = dt.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw st(r[2]);
	var i = q_(r[0], r[1]).slice();
	return dt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Z(n) {
	const e = ct(n, dt.__wbindgen_malloc), _ = ft, t = dt.detectNonwearChoi2012(e, _);
	var r = q_(t[0], t[1]).slice();
	return dt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function K(n) {
	const e = ct(n, dt.__wbindgen_malloc), _ = ft, t = dt.detectNonwearChoi2012Bouts(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function J(n) {
	const e = ct(n, dt.__wbindgen_malloc), _ = ft, t = dt.detectNonwearChoiBouts(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function Q(n) {
	let e, _;
	try {
		const i = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), o = ft, c = dt.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, st(c[2]);
		return e = t, _ = r, J_(t, r);
	} finally {
		dt.__wbindgen_free(e, _, 1);
	}
}
function nn(n, e, _, t, r, i, o) {
	const c = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), l = ft, a = at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), s = ft, u = ct(_, dt.__wbindgen_malloc), w = ft, g = ct(t, dt.__wbindgen_malloc), b = ft, d = ct(r, dt.__wbindgen_malloc), f = ft, m = dt.detectNonwearUnifiedBatchTyped(c, l, a, s, u, w, g, b, d, f, i, o);
	if (m[2]) throw st(m[1]);
	return st(m[0]);
}
function en(n, e, _) {
	const t = dt.dstPlaceholderRuns(n, e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function _n(n, e, _, t) {
	const r = dt.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = V_(r[0], r[1]).slice(), dt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function tn(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = ct(e, dt.__wbindgen_malloc), i = ft, o = dt.epochAgreement(_, t, r, i);
	if (o[2]) throw st(o[1]);
	return st(o[0]);
}
function rn(n, e, _, t, r) {
	const i = ct(n, dt.__wbindgen_malloc), o = ft, c = ct(e, dt.__wbindgen_malloc), l = ft, a = ct(_, dt.__wbindgen_malloc), s = ft, u = ct(t, dt.__wbindgen_malloc), w = ft, g = dt.epochRawData(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw st(g[1]);
	return st(g[0]);
}
function on(n, e, _) {
	const t = ct(n, dt.__wbindgen_malloc), r = ft, i = ct(e, dt.__wbindgen_malloc), o = ft, c = dt.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw st(c[1]);
	return st(c[0]);
}
function cn(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = dt.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = X_(o[0], o[1]).slice(), dt.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function ln(n, e) {
	let _, t;
	try {
		const o = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), c = ft, l = at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), a = ft, s = dt.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, st(s[2]);
		return _ = r, t = i, J_(r, i);
	} finally {
		dt.__wbindgen_free(_, t, 1);
	}
}
function an(n) {
	const e = dt.exportNapAggregate(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function sn(n, e, _) {
	const t = dt.exportPeriodFigures(!rt(n), rt(n) ? 0 : n, !rt(e), rt(e) ? 0 : e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function un(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft, t = dt.extractCapsense(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function wn(n, e, _, t, r) {
	const i = ct(n, dt.__wbindgen_malloc), o = ft, c = ct(e, dt.__wbindgen_malloc), l = ft, a = ct(_, dt.__wbindgen_malloc), s = ft, u = at(r, dt.__wbindgen_malloc, dt.__wbindgen_realloc), w = ft, g = dt.foldOntoGrid(i, o, c, l, a, s, t, u, w);
	if (g[3]) throw st(g[2]);
	var b = V_(g[0], g[1]).slice();
	return dt.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function gn(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = at(t, dt.__wbindgen_malloc, dt.__wbindgen_realloc), c = ft, l = dt.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw st(l[2]);
	var a = V_(l[0], l[1]).slice();
	return dt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function bn(n, e, _, t, r) {
	const i = ot(_, dt.__wbindgen_malloc), o = ft, c = ct(t, dt.__wbindgen_malloc), l = ft, a = dt.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw st(a[1]);
	return st(a[0]);
}
function dn(n, e, _, t, r, i) {
	const o = ct(_, dt.__wbindgen_malloc), c = ft, l = ct(t, dt.__wbindgen_malloc), a = ft, s = at(i, dt.__wbindgen_malloc, dt.__wbindgen_realloc), u = ft, w = dt.foldUniformOntoGrid(n, e, o, c, l, a, r, s, u);
	if (w[3]) throw st(w[2]);
	var g = V_(w[0], w[1]).slice();
	return dt.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function fn(n) {
	const e = dt.fuseNonwearMasks(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function mn(n, e, _) {
	var t = rt(_) ? 0 : at(_, dt.__wbindgen_malloc, dt.__wbindgen_realloc), r = ft;
	const i = dt.generateActiwareRestIntervals(n, e, t, r);
	if (i[2]) throw st(i[1]);
	return st(i[0]);
}
function hn() {
	const n = dt.getComputeCapabilitiesV1();
	if (n[2]) throw st(n[1]);
	return st(n[0]);
}
function pn(n, e, _) {
	const t = dt.ggir5sWallClockMs(n, e, _);
	if (t[3]) throw st(t[2]);
	var r = V_(t[0], t[1]).slice();
	return dt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function yn(n) {
	const e = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), _ = ft, t = dt.ggirConfigValues(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function vn(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft;
	var r = rt(e) ? 0 : ct(e, dt.__wbindgen_malloc), i = ft;
	const o = dt.ggirDaysIncluded(_, t, r, i);
	var c = q_(o[0], o[1]).slice();
	return dt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function kn(n, e) {
	const _ = ot(n, dt.__wbindgen_malloc), t = ft;
	var r = rt(e) ? 0 : at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), i = ft;
	const o = dt.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw st(o[1]);
	return st(o[0]);
}
function Sn(n, e, _) {
	var t = rt(_) ? 0 : ct(_, dt.__wbindgen_malloc), r = ft;
	const i = dt.ggirDstPlaceholderCuts(n, e, t, r);
	if (i[2]) throw st(i[1]);
	return st(i[0]);
}
function Cn() {
	return dt.ggirIncludeDayCriterionHours();
}
function An(n, e, _, t) {
	const r = it(n, dt.__wbindgen_malloc), i = ft;
	var o = rt(t) ? 0 : ct(t, dt.__wbindgen_malloc), c = ft;
	const l = dt.ggirIndicesToWallClockMs(r, i, e, _, o, c);
	if (l[3]) throw st(l[2]);
	var a = V_(l[0], l[1]).slice();
	return dt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function Rn(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = dt.ggirLabelsToStoredMs(_, t, e);
	if (r[3]) throw st(r[2]);
	var i = V_(r[0], r[1]).slice();
	return dt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function xn(n, e, _, t) {
	const r = lt(n, dt.__wbindgen_malloc), i = ft, o = ct(e, dt.__wbindgen_malloc), c = ft, l = ct(_, dt.__wbindgen_malloc), a = ft, s = ct(t, dt.__wbindgen_malloc), u = ft, w = dt.ggirManualNightClocks(r, i, o, c, l, a, s, u);
	if (w[2]) throw st(w[1]);
	return st(w[0]);
}
function Dn(n, e, _, t) {
	const r = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), i = ft, o = at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), c = ft, l = at(_, dt.__wbindgen_malloc, dt.__wbindgen_realloc), a = ft, s = dt.ggirSleeplogStoredClocks(r, i, o, c, l, a, t);
	if (s[3]) throw st(s[2]);
	let u;
	return 0 !== s[0] && (u = H_(s[0], s[1]).slice(), dt.__wbindgen_free(s[0], 4 * s[1], 4)), u;
}
function Mn(n, e) {
	return dt.ggirSptDurationHours(n, e);
}
function Pn(n, e) {
	const _ = dt.ggirSummaryDenominator(n, e);
	if (_[2]) throw st(_[1]);
	return st(_[0]);
}
function Fn(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = ct(e, dt.__wbindgen_malloc), i = ft, o = dt.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function In(n) {
	let e, _;
	try {
		const i = ot(n, dt.__wbindgen_malloc), o = ft, c = dt.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, st(c[2]);
		return e = t, _ = r, J_(t, r);
	} finally {
		dt.__wbindgen_free(e, _, 1);
	}
}
function Wn(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = ct(e, dt.__wbindgen_malloc), c = ft, l = ct(_, dt.__wbindgen_malloc), a = ft, s = ct(t, dt.__wbindgen_malloc), u = ft, w = dt.implausibilityReasons(r, i, o, c, l, a, s, u);
	if (w[2]) throw st(w[1]);
	return st(w[0]);
}
function On() {
	dt.installPanicHook();
}
function Un(n) {
	const e = dt.interRaterReliability(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function zn(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = dt.irregularInternalDays(_, t, e);
	var i = H_(r[0], r[1]).slice();
	return dt.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Gn(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft;
	return 0 !== dt.isGeneactivFormat(e, _);
}
function Nn(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = ct(e, dt.__wbindgen_malloc), c = ft, l = ct(_, dt.__wbindgen_malloc), a = ft, s = dt.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw st(s[1]);
	return st(s[0]);
}
function Bn(n, e, _) {
	const t = ct(n, dt.__wbindgen_malloc), r = ft, i = dt.markerIndexRange(t, r, e, _);
	var o = X_(i[0], i[1]).slice();
	return dt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Tn(n, e, _, t, r, i, o) {
	const c = ct(n, dt.__wbindgen_malloc), l = ft, a = ct(e, dt.__wbindgen_malloc), s = ft, u = dt.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (u[2]) throw st(u[1]);
	return st(u[0]);
}
function jn(n) {
	const e = ct(n, dt.__wbindgen_malloc), _ = ft, t = dt.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function En(n, e, _, t) {
	const r = dt.metricWarnings(n, e, _, t);
	var i = q_(r[0], r[1]).slice();
	return dt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Ln(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = ct(e, dt.__wbindgen_malloc), i = ft, o = dt.midSleepClockHours(_, t, r, i);
	var c = V_(o[0], o[1]).slice();
	return dt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Vn(n, e, _, t, r) {
	const i = ct(n, dt.__wbindgen_malloc), o = ft, c = ct(e, dt.__wbindgen_malloc), l = ft, a = ct(_, dt.__wbindgen_malloc), s = ft, u = dt.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw st(u[1]);
	return st(u[0]);
}
function Hn(n) {
	const e = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), _ = ft, t = dt.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = J_(t[0], t[1]).slice(), dt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Xn(n, e, _, t, r) {
	const i = ct(_, dt.__wbindgen_malloc), o = ft, c = ct(t, dt.__wbindgen_malloc), l = ft, a = ct(r, dt.__wbindgen_malloc), s = ft, u = dt.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (u[2]) throw st(u[1]);
	return st(u[0]);
}
function qn(n, e, _, t) {
	let r, i;
	try {
		const l = it(n, dt.__wbindgen_malloc), a = ft, s = at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), u = ft, w = dt.nonwearContributors(l, a, s, u, _, t);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, st(w[2]);
		return r = o, i = c, J_(o, c);
	} finally {
		dt.__wbindgen_free(r, i, 1);
	}
}
function $n(n) {
	const e = ct(n, dt.__wbindgen_malloc), _ = ft, t = dt.nonwearInSleepCounts(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function Yn(n) {
	const e = dt.nonwearSleepOverlap(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function Zn(n, e, _) {
	const t = ct(n, dt.__wbindgen_malloc), r = ft, i = ct(e, dt.__wbindgen_malloc), o = ft, c = dt.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw st(c[1]);
	return st(c[0]);
}
function Kn(n, e, _, t, r, i) {
	const o = at(r, dt.__wbindgen_malloc, dt.__wbindgen_realloc), c = ft, l = dt.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw st(l[2]);
	var a = V_(l[0], l[1]).slice();
	return dt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function Jn(n, e) {
	const _ = ot(n, dt.__wbindgen_malloc), t = ft, r = dt.parseActigraphCsv(_, t, e);
	if (r[2]) throw st(r[1]);
	return st(r[0]);
}
function Qn(n) {
	const e = dt.parseActigraphCsvBuffered(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function ne(n, e, _, t) {
	const r = ot(n, dt.__wbindgen_malloc), i = ft;
	var o = rt(e) ? 0 : at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), c = ft, l = rt(t) ? 0 : at(t, dt.__wbindgen_malloc, dt.__wbindgen_realloc), a = ft;
	const s = dt.parseAw5(r, i, o, c, rt(_) ? 0 : E_(_), l, a);
	if (s[2]) throw st(s[1]);
	return st(s[0]);
}
function ee(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft, t = dt.parseCwa(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function _e(n, e) {
	const _ = ot(n, dt.__wbindgen_malloc), t = ft, r = at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), i = ft, o = dt.parseEpochSeries(_, t, r, i);
	if (o[2]) throw st(o[1]);
	return st(o[0]);
}
function te(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft, t = dt.parseGeneactivBin(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function re(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft, t = dt.parseGeneactivCsv(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function ie() {
	const n = dt.parseGeneactivCsvBuffered();
	if (n[2]) throw st(n[1]);
	return st(n[0]);
}
function oe(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft, t = dt.parseGt3x(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function ce(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = ot(e, dt.__wbindgen_malloc), c = ft, l = ot(_, dt.__wbindgen_malloc), a = ft, s = dt.participantValidity(r, i, o, c, l, a, t);
	if (s[2]) throw st(s[1]);
	return st(s[0]);
}
function le(n, e, _, t, r) {
	const i = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), o = ft, c = ct(e, dt.__wbindgen_malloc), l = ft;
	var a = rt(_) ? 0 : ct(_, dt.__wbindgen_malloc), s = ft;
	const u = dt.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (u[2]) throw st(u[1]);
	return st(u[0]);
}
function ae(n) {
	let e, _;
	try {
		const i = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), o = ft, c = dt.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, st(c[2]);
		return e = t, _ = r, J_(t, r);
	} finally {
		dt.__wbindgen_free(e, _, 1);
	}
}
function se(n, e, _, t, r, i) {
	const o = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), c = ft, l = ct(e, dt.__wbindgen_malloc), a = ft, s = ct(_, dt.__wbindgen_malloc), u = ft, w = ot(t, dt.__wbindgen_malloc), g = ft, b = ot(r, dt.__wbindgen_malloc), d = ft, f = at(i, dt.__wbindgen_malloc, dt.__wbindgen_realloc), m = ft, h = dt.placeMarkersBatch(o, c, l, a, s, u, w, g, b, d, f, m);
	if (h[2]) throw st(h[1]);
	return st(h[0]);
}
function ue(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), y = ft, v = ct(e, dt.__wbindgen_malloc), k = ft, S = it(_, dt.__wbindgen_malloc), C = ft, A = ct(t, dt.__wbindgen_malloc), R = ft, x = it(r, dt.__wbindgen_malloc), D = ft, M = ot(i, dt.__wbindgen_malloc), P = ft, F = it(o, dt.__wbindgen_malloc), I = ft, W = ot(c, dt.__wbindgen_malloc), O = ft, U = it(l, dt.__wbindgen_malloc), z = ft, G = ct(a, dt.__wbindgen_malloc), N = ft, B = it(s, dt.__wbindgen_malloc), T = ft, j = ct(u, dt.__wbindgen_malloc), E = ft, L = it(w, dt.__wbindgen_malloc), V = ft, H = ct(g, dt.__wbindgen_malloc), X = ft, q = it(b, dt.__wbindgen_malloc), $ = ft, Y = ct(d, dt.__wbindgen_malloc), Z = ft, K = it(f, dt.__wbindgen_malloc), J = ft, Q = ot(m, dt.__wbindgen_malloc), nn = ft, en = it(h, dt.__wbindgen_malloc), _n = ft, tn = dt.placeMarkersTyped(p, y, v, k, S, C, A, R, x, D, M, P, F, I, W, O, U, z, G, N, B, T, j, E, L, V, H, X, q, $, Y, Z, K, J, Q, nn, en, _n);
	if (tn[2]) throw st(tn[1]);
	return st(tn[0]);
}
function we(n) {
	let e, _;
	try {
		const i = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), o = ft, c = dt.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, st(c[2]);
		return e = t, _ = r, J_(t, r);
	} finally {
		dt.__wbindgen_free(e, _, 1);
	}
}
function ge(n, e, _, t) {
	const r = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), i = ft, o = ct(e, dt.__wbindgen_malloc), c = ft, l = ct(_, dt.__wbindgen_malloc), a = ft, s = ot(t, dt.__wbindgen_malloc), u = ft, w = dt.placeNonwearMarkersTyped(r, i, o, c, l, a, s, u);
	if (w[2]) throw st(w[1]);
	return st(w[0]);
}
function be(n) {
	const e = dt.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function de(n) {
	const e = dt.prepareCompactPipelineV1(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function fe(n, e, _, t, r, i, o) {
	const c = ct(n, dt.__wbindgen_malloc), l = ft, a = ct(e, dt.__wbindgen_malloc), s = ft, u = ct(_, dt.__wbindgen_malloc), w = ft, g = ct(t, dt.__wbindgen_malloc), b = ft;
	var d = rt(o) ? 0 : at(o, dt.__wbindgen_malloc, dt.__wbindgen_realloc), f = ft;
	const m = dt.processGeneactivRaw(c, l, a, s, u, w, g, b, r, i, d, f);
	if (m[2]) throw st(m[1]);
	return st(m[0]);
}
function me(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft, t = dt.processGt3xFull(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function he(n, e) {
	const _ = ot(n, dt.__wbindgen_malloc), t = ft, r = dt.processGt3xFullWithEpoch(_, t, e);
	if (r[2]) throw st(r[1]);
	return st(r[0]);
}
function pe(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft, t = dt.processGt3xPart1(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function ye(n, e) {
	const _ = ot(n, dt.__wbindgen_malloc), t = ft, r = dt.processGt3xPart1WithEpoch(_, t, e);
	if (r[2]) throw st(r[1]);
	return st(r[0]);
}
function ve(n, e, _, t, r, i) {
	const o = ct(n, dt.__wbindgen_malloc), c = ft, l = ct(e, dt.__wbindgen_malloc), a = ft, s = ct(_, dt.__wbindgen_malloc), u = ft;
	var w = rt(i) ? 0 : at(i, dt.__wbindgen_malloc, dt.__wbindgen_realloc), g = ft;
	const b = dt.processRawXyz(o, c, l, a, s, u, t, r, w, g);
	if (b[2]) throw st(b[1]);
	return st(b[0]);
}
function ke(n, e, _, t, r, i) {
	const o = ct(n, dt.__wbindgen_malloc), c = ft, l = ct(e, dt.__wbindgen_malloc), a = ft, s = ct(_, dt.__wbindgen_malloc), u = ft, w = ct(t, dt.__wbindgen_malloc), g = ft;
	var b = rt(i) ? 0 : at(i, dt.__wbindgen_malloc, dt.__wbindgen_realloc), d = ft;
	const f = dt.processRawXyzImputed(o, c, l, a, s, u, w, g, r, b, d);
	if (f[2]) throw st(f[1]);
	return st(f[0]);
}
function Se(n, e, _, t, r, i, o) {
	const c = ct(n, dt.__wbindgen_malloc), l = ft, a = ct(e, dt.__wbindgen_malloc), s = ft, u = ct(_, dt.__wbindgen_malloc), w = ft, g = ct(t, dt.__wbindgen_malloc), b = ft;
	var d = rt(i) ? 0 : at(i, dt.__wbindgen_malloc, dt.__wbindgen_realloc), f = ft;
	const m = dt.processRawXyzImputedWithEpoch(c, l, a, s, u, w, g, b, r, d, f, o);
	if (m[2]) throw st(m[1]);
	return st(m[0]);
}
function Ce(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = ot(e, dt.__wbindgen_malloc), c = ft, l = ct(t, dt.__wbindgen_malloc), a = ft, s = dt.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var u = q_(s[0], s[1]).slice();
	return dt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function Ae(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = ct(e, dt.__wbindgen_malloc), c = ft, l = ct(_, dt.__wbindgen_malloc), a = ft, s = dt.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw st(s[1]);
	return st(s[0]);
}
function Re(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft, t = dt.readGgirMeta(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function xe() {
	return dt.recommended_chunk_size_mb() >>> 0;
}
function De(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), i = ft, o = dt.reduceF64V1(_, t, r, i);
	if (o[2]) throw st(o[1]);
	return o[0];
}
function Me(n) {
	const e = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), _ = ft, t = dt.resolveTimezone(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function Pe(n, e, _) {
	const t = ct(n, dt.__wbindgen_malloc), r = ft, i = ct(e, dt.__wbindgen_malloc), o = ft, c = it(_, dt.__wbindgen_malloc), l = ft, a = dt.restoredDstRuns(t, r, i, o, c, l);
	if (a[2]) throw st(a[1]);
	return st(a[0]);
}
function Fe(n, e, _, t, r, i, o, c, l, a, s) {
	const u = ot(n, dt.__wbindgen_malloc), w = ft, g = at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), b = ft;
	var d = rt(_) ? 0 : ot(_, dt.__wbindgen_malloc), f = ft, m = rt(t) ? 0 : ot(t, dt.__wbindgen_malloc), h = ft, p = rt(r) ? 0 : ot(r, dt.__wbindgen_malloc), y = ft, v = rt(i) ? 0 : ot(i, dt.__wbindgen_malloc), k = ft, S = rt(o) ? 0 : ot(o, dt.__wbindgen_malloc), C = ft, A = rt(c) ? 0 : at(c, dt.__wbindgen_malloc, dt.__wbindgen_realloc), R = ft, x = rt(l) ? 0 : at(l, dt.__wbindgen_malloc, dt.__wbindgen_realloc), D = ft;
	const M = dt.reviewGgirResults(u, w, g, b, d, f, m, h, p, y, v, k, S, C, A, R, x, D, a, s);
	if (M[2]) throw st(M[1]);
	return st(M[0]);
}
function Ie(n) {
	const e = dt.reviewNonwearFile(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function We(n) {
	const e = dt.reviewNonwearTotals(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function Oe(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = dt.roundCountStorage(_, t, e);
	var i = V_(r[0], r[1]).slice();
	return dt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Ue(n) {
	const e = dt.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function ze(n) {
	const e = dt.runCompactPipelineV1(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function Ge(n, e) {
	const _ = dt.runFullPipeline(n, e);
	if (_[2]) throw st(_[1]);
	return st(_[0]);
}
function Ne(n) {
	const e = dt.runFullPipelineOutcomeV1(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function Be(n) {
	const e = dt.runFullPipelineV1(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function Te(n, e) {
	const _ = dt.runGgirFromEpoch(n, e);
	if (_[2]) throw st(_[1]);
	return st(_[0]);
}
function je(n) {
	const e = dt.runGgirPart3(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function Ee(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft, t = dt.runMilestone(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function Le(n) {
	const e = dt.scoreAllDays(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function Ve(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = dt.scoreColeKripke(_, t, e);
	var i = q_(r[0], r[1]).slice();
	return dt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function He(n) {
	let e, _;
	try {
		const i = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), o = ft, c = dt.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, st(c[2]);
		return e = t, _ = r, J_(t, r);
	} finally {
		dt.__wbindgen_free(e, _, 1);
	}
}
function Xe(n) {
	const e = dt.scoreConsensusMajority(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function qe(n, e, _) {
	const t = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), r = ft, i = ot(e, dt.__wbindgen_malloc), o = ft, c = it(_, dt.__wbindgen_malloc), l = ft, a = dt.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw st(a[1]);
	return st(a[0]);
}
function $e(n) {
	let e, _;
	try {
		const i = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), o = ft, c = dt.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, st(c[2]);
		return e = t, _ = r, J_(t, r);
	} finally {
		dt.__wbindgen_free(e, _, 1);
	}
}
function Ye(n, e, _, t, r, i) {
	const o = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), c = ft, l = ct(e, dt.__wbindgen_malloc), a = ft, s = ct(_, dt.__wbindgen_malloc), u = ft, w = ct(t, dt.__wbindgen_malloc), g = ft, b = dt.scoreEpochsTyped(o, c, l, a, s, u, w, g, r, i);
	if (b[2]) throw st(b[1]);
	return st(b[0]);
}
function Ze(n) {
	const e = ct(n, dt.__wbindgen_malloc), _ = ft, t = dt.scoreGgirHasib(e, _);
	var r = q_(t[0], t[1]).slice();
	return dt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Ke(n) {
	const e = dt.scoreGgirHasibVariant(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function Je(n, e, _) {
	const t = ct(n, dt.__wbindgen_malloc), r = ft, i = ct(e, dt.__wbindgen_malloc), o = ft, c = dt.scoreGgirSib(t, r, i, o, _);
	if (c[2]) throw st(c[1]);
	return st(c[0]);
}
function Qe(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = dt.scoreSadeh(_, t, e);
	var i = q_(r[0], r[1]).slice();
	return dt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function n_(n) {
	const e = dt.settleManualNonwearNights(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function e_(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft, t = dt.sha256StreamFeed(e, _);
	if (t[1]) throw st(t[0]);
}
function __() {
	let n, e;
	try {
		const r = dt.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, st(r[2]);
		return n = _, e = t, J_(_, t);
	} finally {
		dt.__wbindgen_free(n, e, 1);
	}
}
function t_() {
	dt.sha256StreamStart();
}
function r_(n, e) {
	const _ = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), t = ft, r = dt.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = J_(r[0], r[1]).slice(), dt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function i_(n, e, _, t, r) {
	const i = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), o = ft, c = ct(e, dt.__wbindgen_malloc), l = ft, a = it(_, dt.__wbindgen_malloc), s = ft, u = ct(t, dt.__wbindgen_malloc), w = ft, g = it(r, dt.__wbindgen_malloc), b = ft, d = dt.sleepRegularityIndex(i, o, c, l, a, s, u, w, g, b);
	if (d[3]) throw st(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function o_(n, e) {
	const _ = dt.sleepWakeScores(n, e);
	if (_[2]) throw st(_[1]);
	return st(_[0]);
}
function c_(n) {
	const e = lt(n, dt.__wbindgen_malloc), _ = ft, t = dt.sourceLabelsWallClockMs(e, _);
	var r = V_(t[0], t[1]).slice();
	return dt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function l_(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = ct(e, dt.__wbindgen_malloc), c = ft, l = dt.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function a_(n, e, _) {
	const t = ct(n, dt.__wbindgen_malloc), r = ft, i = ct(_, dt.__wbindgen_malloc), o = ft, c = dt.spliceDstPlaceholders(t, r, e, i, o);
	if (c[3]) throw st(c[2]);
	let l;
	return 0 !== c[0] && (l = V_(c[0], c[1]).slice(), dt.__wbindgen_free(c[0], 8 * c[1], 8)), l;
}
function s_(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = ot(e, dt.__wbindgen_malloc), c = ft, l = ct(_, dt.__wbindgen_malloc), a = ft, s = ct(t, dt.__wbindgen_malloc), u = ft, w = dt.statesInPeriods(r, i, o, c, l, a, s, u);
	var g = q_(w[0], w[1]).slice();
	return dt.__wbindgen_free(w[0], 1 * w[1], 1), g;
}
function u_(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = dt.storedToGgirLabelsMs(_, t, e);
	if (r[3]) throw st(r[2]);
	var i = V_(r[0], r[1]).slice();
	return dt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function w_(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft, t = dt.streamParseFeed(e, _);
	if (t[2]) throw st(t[1]);
	return t[0] >>> 0;
}
function g_() {
	const n = dt.streamParseFinish();
	if (n[2]) throw st(n[1]);
	return _.__wrap(n[0]);
}
function b_() {
	const n = dt.streamParseFinishChunk();
	if (n[2]) throw st(n[1]);
	return e.__wrap(n[0]);
}
function d_(n) {
	const _ = dt.streamParseFinishChunkWithProgress(n);
	if (_[2]) throw st(_[1]);
	return e.__wrap(_[0]);
}
function f_(n, e) {
	const _ = dt.streamParseStart(n, e);
	if (_[1]) throw st(_[0]);
}
function m_(n, e) {
	const _ = dt.streamParseStartData(n, e);
	if (_[1]) throw st(_[0]);
}
function h_(n, e, _) {
	const t = dt.streamParseStartWithEpoch(n, e, _);
	if (t[1]) throw st(t[0]);
}
function p_(n, e) {
	const _ = ot(n, dt.__wbindgen_malloc), t = ft, r = dt.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw st(r[1]);
	return st(r[0]);
}
function y_(n) {
	const e = dt.summarizeExportGroups(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function v_(n) {
	const e = dt.summarizePhysicalActivityDays(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function k_(n) {
	const e = dt.summarizePhysicalActivityTrace(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function S_(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = dt.thresholdProbabilities(_, t, e);
	var i = q_(r[0], r[1]).slice();
	return dt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function C_(n) {
	const e = dt.timeSemantics(n);
	if (e[2]) throw st(e[1]);
	return st(e[0]);
}
function A_(n, e, _) {
	const t = ct(n, dt.__wbindgen_malloc), r = ft, i = dt.timestampDiscontinuities(t, r, e, _);
	if (i[2]) throw st(i[1]);
	return st(i[0]);
}
function R_(n, e, _) {
	const t = dt.uniformTimestamps(n, e, _);
	var r = V_(t[0], t[1]).slice();
	return dt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function x_(n, e) {
	const _ = dt.utcDatesInSpan(n, e);
	var t = H_(_[0], _[1]).slice();
	return dt.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function D_(n) {
	const e = ct(n, dt.__wbindgen_malloc), _ = ft, t = dt.utcDayIndex(e, _);
	if (t[2]) throw st(t[1]);
	return st(t[0]);
}
function M_(n) {
	const e = ot(n, dt.__wbindgen_malloc), _ = ft, t = dt.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function P_(n, e) {
	const _ = ct(n, dt.__wbindgen_malloc), t = ft, r = dt.validWearDays(_, t, e);
	if (r[3]) throw st(r[2]);
	var i = q_(r[0], r[1]).slice();
	return dt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function F_(n, e, _) {
	const t = ct(n, dt.__wbindgen_malloc), r = ft, i = dt.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw st(i[1]);
	return st(i[0]);
}
function I_(n) {
	const e = ct(n, dt.__wbindgen_malloc), _ = ft, t = dt.wallClockLabels(e, _);
	var r = H_(t[0], t[1]).slice();
	return dt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function W_(n, e, _) {
	const t = ot(n, dt.__wbindgen_malloc), r = ft, i = dt.wallMaskOntoGgirGrid(t, r, e, _);
	if (i[3]) throw st(i[2]);
	var o = q_(i[0], i[1]).slice();
	return dt.__wbindgen_free(i[0], 1 * i[1], 1), o;
}
function O_(n, e) {
	const _ = at(n, dt.__wbindgen_malloc, dt.__wbindgen_realloc), t = ft;
	var r = rt(e) ? 0 : at(e, dt.__wbindgen_malloc, dt.__wbindgen_realloc), i = ft;
	const o = dt.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw st(o[1]);
	return st(o[0]);
}
function U_(n) {
	const e = lt(n, dt.__wbindgen_malloc), _ = ft, t = dt.weekendDates(e, _);
	var r = q_(t[0], t[1]).slice();
	return dt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function z_(n, e, _, t) {
	const r = ct(n, dt.__wbindgen_malloc), i = ft, o = dt.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function G_(n, e, _, t, r) {
	const i = ct(n, dt.__wbindgen_malloc), o = ft, c = ct(e, dt.__wbindgen_malloc), l = ft, a = ct(_, dt.__wbindgen_malloc), s = ft, u = dt.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw st(u[1]);
	return st(u[0]);
}
function N_() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(J_(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = at(String(e), dt.__wbindgen_malloc, dt.__wbindgen_realloc), t = ft;
				Y_().setInt32(n + 4, t, !0), Y_().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				Y_().setBigInt64(n + 8, rt(_) ? BigInt(0) : _, !0), Y_().setInt32(n + 0, !rt(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return rt(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = at(L_(e), dt.__wbindgen_malloc, dt.__wbindgen_realloc), t = ft;
				Y_().setInt32(n + 4, t, !0), Y_().setInt32(n + 0, _, !0);
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
				Y_().setFloat64(n + 8, rt(_) ? 0 : _, !0), Y_().setInt32(n + 0, !rt(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = rt(_) ? 0 : at(_, dt.__wbindgen_malloc, dt.__wbindgen_realloc), r = ft;
				Y_().setInt32(n + 4, r, !0), Y_().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(J_(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return tt(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return tt(function(n, e, _, t) {
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
					_ = n, t = e, console.error(J_(n, e));
				} finally {
					dt.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return tt(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return tt(function(n, e) {
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
				return new Uint32Array(X_(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(V_(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(q_(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return tt(function(n) {
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
				return tt(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(q_(n, e), _);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return tt(function(n, e, _) {
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
				const _ = at(e.stack, dt.__wbindgen_malloc, dt.__wbindgen_realloc), t = ft;
				Y_().setInt32(n + 4, t, !0), Y_().setInt32(n + 0, _, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return rt(n) ? 0 : E_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return rt(n) ? 0 : E_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return rt(n) ? 0 : E_(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return rt(n) ? 0 : E_(n);
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
				return q_(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return J_(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = dt.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
const B_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => dt.__wbg_aw5batch_free(n >>> 0, 1)), T_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => dt.__wbg_streamchunkresult_free(n >>> 0, 1)), j_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => dt.__wbg_streamparseresult_free(n >>> 0, 1));
function E_(n) {
	const e = dt.__externref_table_alloc();
	return dt.__wbindgen_externrefs.set(e, n), e;
}
function L_(n) {
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
		e > 0 && (_ += L_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + L_(n[t]);
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
function V_(n, e) {
	return n >>>= 0, K_().subarray(n / 8, n / 8 + e);
}
function H_(n, e) {
	n >>>= 0;
	const _ = Y_(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(dt.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return dt.__externref_drop_slice(n, e), t;
}
function X_(n, e) {
	return n >>>= 0, nt().subarray(n / 4, n / 4 + e);
}
function q_(n, e) {
	return n >>>= 0, _t().subarray(n / 1, n / 1 + e);
}
let $_ = null;
function Y_() {
	return (null === $_ || !0 === $_.buffer.detached || void 0 === $_.buffer.detached && $_.buffer !== dt.memory.buffer) && ($_ = new DataView(dt.memory.buffer)), $_;
}
let Z_ = null;
function K_() {
	return null !== Z_ && 0 !== Z_.byteLength || (Z_ = new Float64Array(dt.memory.buffer)), Z_;
}
function J_(n, e) {
	return function(n, e) {
		return gt += e, gt >= wt && (ut = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), ut.decode(), gt = e), ut.decode(_t().subarray(n, n + e));
	}(n >>>= 0, e);
}
let Q_ = null;
function nt() {
	return null !== Q_ && 0 !== Q_.byteLength || (Q_ = new Uint32Array(dt.memory.buffer)), Q_;
}
let et = null;
function _t() {
	return null !== et && 0 !== et.byteLength || (et = new Uint8Array(dt.memory.buffer)), et;
}
function tt(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = E_(_);
		dt.__wbindgen_exn_store(n);
	}
}
function rt(n) {
	return null == n;
}
function it(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return nt().set(n, _ / 4), ft = n.length, _;
}
function ot(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return _t().set(n, _ / 1), ft = n.length, _;
}
function ct(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return K_().set(n, _ / 8), ft = n.length, _;
}
function lt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = E_(n[t]);
		Y_().setUint32(_ + 4 * t, e, !0);
	}
	return ft = n.length, _;
}
function at(n, e, _) {
	if (void 0 === _) {
		const _ = bt.encode(n), t = e(_.length, 1) >>> 0;
		return _t().subarray(t, t + _.length).set(_), ft = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = _t();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = _t().subarray(r + o, r + t);
		o += bt.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return ft = o, r;
}
function st(n) {
	const e = dt.__wbindgen_externrefs.get(n);
	return dt.__externref_table_dealloc(n), e;
}
let ut = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
ut.decode();
const wt = 2146435072;
let gt = 0;
const bt = new TextEncoder();
"encodeInto" in bt || (bt.encodeInto = function(n, e) {
	const _ = bt.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let dt, ft = 0;
function mt(n, e) {
	return dt = n.exports, $_ = null, Z_ = null, Q_ = null, et = null, dt.__wbindgen_start(), dt;
}
function ht(n) {
	if (void 0 !== dt) return dt;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = N_();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), mt(new WebAssembly.Instance(n, e));
}
async function pt(n) {
	if (void 0 !== dt) return dt;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-D0fkEtr3.wasm", "" + import.meta.url));
	const e = N_();
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
	return mt(_);
}
export { n as Aw5Batch, e as StreamChunkResult, _ as StreamParseResult, t as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actiwareWakeThreshold, o as actoursVersion, c as aggregateEpochSeries, l as analysisDatesOf, a as analysisWindowBounds, s as analysisWindowSlice, u as analyzePhysicalActivityDay, w as classifyActimetricPreschoolWristRf, g as classifyActimetricPreschoolWristRfLagLead, b as classifyActimetricPreschoolWristRfLagLeadCalibrated, d as clippedUnionHours, f as compareNonwearDetectorMasks, m as computeAnglez5s, h as computeCircadian, p as computeCircadianTyped, y as computeEnmo5s, v as computeMimsUnit, k as computeMimsUnitDataframe, S as computeMimsUnitTimingBreakdown, C as computeMimsUnitValues, A as computeNightDifficulty, R as computeNightDifficultyTyped, x as computeNightSignals, D as computeNightSignalsTyped, M as computeSleepMetrics, P as configureComputeMemoryBudgetV1, F as consensusDisagreementDetail, I as consensusDisagreements, W as convertScreensRedcapDiary, O as csvBufferAppend, U as csvBufferClear, z as cutpointEpochCompatibility, G as cutpointToneCodes, N as cutpointsRefusal, B as cutpointsValid, pt as default, T as describeColumns, j as detectDetachFromAccelerationG, E as detectDeviceFormat, L as detectGgirHasptVariant, V as detectHdcza, H as detectHourClockJumpMs, X as detectNonwear, q as detectNonwearChoi2011, $ as detectNonwearChoi2011Bouts, Y as detectNonwearChoi2011Epoch, Z as detectNonwearChoi2012, K as detectNonwearChoi2012Bouts, J as detectNonwearChoiBouts, Q as detectNonwearUnified, nn as detectNonwearUnifiedBatchTyped, en as dstPlaceholderRuns, _n as effectiveOverrideCutpoints, tn as epochAgreement, rn as epochRawData, on as epochWithBandpass, cn as epochsOverlapping, ln as executeHeroRuntime, an as exportNapAggregate, sn as exportPeriodFigures, un as extractCapsense, wn as foldOntoGrid, gn as foldSampleBlocks, bn as foldSleepWakeVotes, dn as foldUniformOntoGrid, fn as fuseNonwearMasks, mn as generateActiwareRestIntervals, hn as getComputeCapabilitiesV1, pn as ggir5sWallClockMs, yn as ggirConfigValues, vn as ggirDaysIncluded, kn as ggirDiaryLogShape, Sn as ggirDstPlaceholderCuts, Cn as ggirIncludeDayCriterionHours, An as ggirIndicesToWallClockMs, Rn as ggirLabelsToStoredMs, xn as ggirManualNightClocks, Dn as ggirSleeplogStoredClocks, Mn as ggirSptDurationHours, Pn as ggirSummaryDenominator, Fn as gridOffsetWithin, In as identifyGgirRData, Wn as implausibilityReasons, ht as initSync, On as installPanicHook, Un as interRaterReliability, zn as irregularInternalDays, Gn as isGeneactivFormat, Nn as lstmSpectralFeatures30s, Bn as markerIndexRange, Tn as markerSleepOnsetOffset, jn as medianGapSeconds, En as metricWarnings, Ln as midSleepClockHours, Vn as neishabouriCounts, Hn as nextDate, Xn as nightIntervalOverlap, qn as nonwearContributors, $n as nonwearInSleepCounts, Yn as nonwearSleepOverlap, Zn as nonwearWeightRuns, Kn as normalizeCutpoints, Jn as parseActigraphCsv, Qn as parseActigraphCsvBuffered, ne as parseAw5, ee as parseCwa, _e as parseEpochSeries, te as parseGeneactivBin, re as parseGeneactivCsv, ie as parseGeneactivCsvBuffered, oe as parseGt3x, ce as participantValidity, le as physicalActivitySeriesGrid, ae as placeMarkers, se as placeMarkersBatch, ue as placeMarkersTyped, we as placeNonwearMarkers, ge as placeNonwearMarkersTyped, be as prepareCompactPipelineOutcomeV1, de as prepareCompactPipelineV1, fe as processGeneactivRaw, me as processGt3xFull, he as processGt3xFullWithEpoch, pe as processGt3xPart1, ye as processGt3xPart1WithEpoch, ve as processRawXyz, ke as processRawXyzImputed, Se as processRawXyzImputedWithEpoch, Ce as projectLabelsOntoGrid, Ae as rasterizePeriods, Re as readGgirMeta, xe as recommended_chunk_size_mb, De as reduceF64V1, Me as resolveTimezone, Pe as restoredDstRuns, Fe as reviewGgirResults, Ie as reviewNonwearFile, We as reviewNonwearTotals, Oe as roundCountStorage, Ue as runCompactPipelineOutcomeV1, ze as runCompactPipelineV1, Ge as runFullPipeline, Ne as runFullPipelineOutcomeV1, Be as runFullPipelineV1, Te as runGgirFromEpoch, je as runGgirPart3, Ee as runMilestone, Le as scoreAllDays, Ve as scoreColeKripke, He as scoreConsensus, Xe as scoreConsensusMajority, qe as scoreConsensusTyped, $e as scoreEpochs, Ye as scoreEpochsTyped, Ze as scoreGgirHasib, Ke as scoreGgirHasibVariant, Je as scoreGgirSib, Qe as scoreSadeh, n_ as settleManualNonwearNights, e_ as sha256StreamFeed, __ as sha256StreamFinish, t_ as sha256StreamStart, r_ as shiftDate, i_ as sleepRegularityIndex, o_ as sleepWakeScores, c_ as sourceLabelsWallClockMs, l_ as spanFiniteMean, a_ as spliceDstPlaceholders, s_ as statesInPeriods, u_ as storedToGgirLabelsMs, w_ as streamParseFeed, g_ as streamParseFinish, b_ as streamParseFinishChunk, d_ as streamParseFinishChunkWithProgress, f_ as streamParseStart, m_ as streamParseStartData, h_ as streamParseStartWithEpoch, p_ as summarizeActimetricPreschoolWristRfClasses, y_ as summarizeExportGroups, v_ as summarizePhysicalActivityDays, k_ as summarizePhysicalActivityTrace, S_ as thresholdProbabilities, C_ as timeSemantics, A_ as timestampDiscontinuities, R_ as uniformTimestamps, x_ as utcDatesInSpan, D_ as utcDayIndex, M_ as validStateFraction, P_ as validWearDays, F_ as wallClockDstPlaceholders, I_ as wallClockLabels, W_ as wallMaskOntoGgirGrid, O_ as wearSiteHasptRouting, U_ as weekendDates, z_ as windowCoverage, G_ as zeroCrossingCounts };
