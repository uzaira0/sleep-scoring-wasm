var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, j_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		mt.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = mt.aw5batch_new(n);
		if (e[2]) throw wt(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, j_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), r = ht;
		var i = ot(_) ? 0 : ut(_, mt.__wbindgen_malloc, mt.__wbindgen_realloc), o = ht;
		const c = mt.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw wt(c[1]);
		return wt(c[0]);
	}
	subjects(n) {
		const e = mt.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw wt(e[1]);
		return wt(e[0]);
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, E_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, E_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		mt.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = mt.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = mt.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = mt.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = mt.streamchunkresult_axisX(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = mt.streamchunkresult_axisY(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = mt.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== mt.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = mt.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = nt(n[0], n[1]).slice(), mt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = mt.streamchunkresult_counts(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = mt.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = mt.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = mt.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = mt.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = mt.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = Y_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return mt.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = mt.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = mt.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== mt.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = mt.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = nt(n[0], n[1]).slice(), mt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = mt.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = mt.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = mt.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== mt.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return mt.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return mt.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return mt.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = mt.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = mt.streamchunkresult_temperature(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = mt.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = mt.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = mt.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = mt.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = mt.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = mt.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, L_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, L_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		mt.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = mt.streamparseresult_axisX(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = mt.streamparseresult_axisY(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = mt.streamparseresult_axisZ(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== mt.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = mt.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = nt(n[0], n[1]).slice(), mt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return mt.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== mt.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return mt.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return mt.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = mt.streamparseresult_temperature(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = mt.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = mt.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return mt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n) {
	const e = mt.actiwareIntervalStatistics(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function r(n, e, _) {
	const t = mt.actiwareSleepIntervals(n, e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function i(n, e) {
	const _ = mt.actiwareWakeThreshold(n, e);
	if (_[3]) throw wt(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function o() {
	let n, e;
	try {
		const _ = mt.actoursVersion();
		return n = _[0], e = _[1], nt(_[0], _[1]);
	} finally {
		mt.__wbindgen_free(n, e, 1);
	}
}
function c(n) {
	const e = mt.aggregateEpochSeries(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function l(n) {
	const e = at(n, mt.__wbindgen_malloc), _ = ht, t = mt.analysisDatesOf(e, _);
	var r = X_(t[0], t[1]).slice();
	return mt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function a(n, e) {
	const _ = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), t = ht, r = mt.analysisWindowBounds(_, t, !ot(e), ot(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = q_(r[0], r[1]).slice(), mt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function s(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), i = ht, o = mt.analysisWindowSlice(_, t, r, i);
	var c = $_(o[0], o[1]).slice();
	return mt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function u(n) {
	let e, _;
	try {
		const i = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), o = ht, c = mt.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, wt(c[2]);
		return e = t, _ = r, nt(t, r);
	} finally {
		mt.__wbindgen_free(e, _, 1);
	}
}
function w(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = at(e, mt.__wbindgen_malloc), c = ht, l = at(_, mt.__wbindgen_malloc), a = ht, s = mt.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw wt(s[2]);
	var u = Y_(s[0], s[1]).slice();
	return mt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function g(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = at(e, mt.__wbindgen_malloc), c = ht, l = at(_, mt.__wbindgen_malloc), a = ht, s = mt.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw wt(s[2]);
	var u = Y_(s[0], s[1]).slice();
	return mt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function b(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = at(e, mt.__wbindgen_malloc), c = ht, l = at(_, mt.__wbindgen_malloc), a = ht, s = mt.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw wt(s[2]);
	var u = Y_(s[0], s[1]).slice();
	return mt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function d(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = at(e, mt.__wbindgen_malloc), c = ht;
	return mt.clippedUnionHours(r, i, o, c, _, t);
}
function f(n, e) {
	const _ = mt.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw wt(_[1]);
	return wt(_[0]);
}
function m(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = at(e, mt.__wbindgen_malloc), c = ht, l = at(_, mt.__wbindgen_malloc), a = ht, s = mt.computeAnglez5s(r, i, o, c, l, a, t);
	var u = q_(s[0], s[1]).slice();
	return mt.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function h(n) {
	let e, _;
	try {
		const i = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), o = ht, c = mt.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, wt(c[2]);
		return e = t, _ = r, nt(t, r);
	} finally {
		mt.__wbindgen_free(e, _, 1);
	}
}
function p(n, e, _, t, r, i, o) {
	const c = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), l = ht, a = at(e, mt.__wbindgen_malloc), s = ht, u = ct(_, mt.__wbindgen_malloc), w = ht, g = at(t, mt.__wbindgen_malloc), b = ht, d = ct(r, mt.__wbindgen_malloc), f = ht, m = lt(i, mt.__wbindgen_malloc), h = ht, p = ct(o, mt.__wbindgen_malloc), y = ht, v = mt.computeCircadianTyped(c, l, a, s, u, w, g, b, d, f, m, h, p, y);
	if (v[2]) throw wt(v[1]);
	return wt(v[0]);
}
function y(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = at(e, mt.__wbindgen_malloc), c = ht, l = at(_, mt.__wbindgen_malloc), a = ht, s = mt.computeEnmo5s(r, i, o, c, l, a, t);
	var u = q_(s[0], s[1]).slice();
	return mt.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function v(n, e, _, t, r) {
	const i = at(n, mt.__wbindgen_malloc), o = ht, c = at(e, mt.__wbindgen_malloc), l = ht, a = at(_, mt.__wbindgen_malloc), s = ht, u = mt.computeMimsUnit(i, o, c, l, a, s, t, r);
	if (u[2]) throw wt(u[1]);
	return wt(u[0]);
}
function k(n, e, _, t, r) {
	const i = at(n, mt.__wbindgen_malloc), o = ht, c = at(e, mt.__wbindgen_malloc), l = ht, a = at(_, mt.__wbindgen_malloc), s = ht, u = at(t, mt.__wbindgen_malloc), w = ht, g = mt.computeMimsUnitDataframe(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw wt(g[1]);
	return wt(g[0]);
}
function S(n, e, _, t, r) {
	const i = at(n, mt.__wbindgen_malloc), o = ht, c = at(e, mt.__wbindgen_malloc), l = ht, a = at(_, mt.__wbindgen_malloc), s = ht, u = mt.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, r);
	if (u[2]) throw wt(u[1]);
	return wt(u[0]);
}
function C(n, e, _, t, r) {
	const i = at(n, mt.__wbindgen_malloc), o = ht, c = at(e, mt.__wbindgen_malloc), l = ht, a = at(_, mt.__wbindgen_malloc), s = ht, u = mt.computeMimsUnitValues(i, o, c, l, a, s, t, r);
	if (u[3]) throw wt(u[2]);
	var w = q_(u[0], u[1]).slice();
	return mt.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function A(n) {
	let e, _;
	try {
		const i = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), o = ht, c = mt.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, wt(c[2]);
		return e = t, _ = r, nt(t, r);
	} finally {
		mt.__wbindgen_free(e, _, 1);
	}
}
function R(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), y = ht, v = at(e, mt.__wbindgen_malloc), k = ht, S = ct(_, mt.__wbindgen_malloc), C = ht, A = at(t, mt.__wbindgen_malloc), R = ht, x = ct(r, mt.__wbindgen_malloc), D = ht, M = lt(i, mt.__wbindgen_malloc), P = ht, F = ct(o, mt.__wbindgen_malloc), I = ht, W = lt(c, mt.__wbindgen_malloc), O = ht, U = ct(l, mt.__wbindgen_malloc), N = ht, z = at(a, mt.__wbindgen_malloc), G = ht, B = ct(s, mt.__wbindgen_malloc), T = ht, j = at(u, mt.__wbindgen_malloc), E = ht, L = ct(w, mt.__wbindgen_malloc), V = ht, H = at(g, mt.__wbindgen_malloc), q = ht, X = ct(b, mt.__wbindgen_malloc), $ = ht, Y = at(d, mt.__wbindgen_malloc), Z = ht, K = ct(f, mt.__wbindgen_malloc), J = ht, Q = lt(m, mt.__wbindgen_malloc), nn = ht, en = ct(h, mt.__wbindgen_malloc), _n = ht, tn = mt.computeNightDifficultyTyped(p, y, v, k, S, C, A, R, x, D, M, P, F, I, W, O, U, N, z, G, B, T, j, E, L, V, H, q, X, $, Y, Z, K, J, Q, nn, en, _n);
	if (tn[2]) throw wt(tn[1]);
	return wt(tn[0]);
}
function x(n) {
	let e, _;
	try {
		const i = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), o = ht, c = mt.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, wt(c[2]);
		return e = t, _ = r, nt(t, r);
	} finally {
		mt.__wbindgen_free(e, _, 1);
	}
}
function D(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), y = ht, v = at(e, mt.__wbindgen_malloc), k = ht, S = ct(_, mt.__wbindgen_malloc), C = ht, A = at(t, mt.__wbindgen_malloc), R = ht, x = ct(r, mt.__wbindgen_malloc), D = ht, M = lt(i, mt.__wbindgen_malloc), P = ht, F = ct(o, mt.__wbindgen_malloc), I = ht, W = lt(c, mt.__wbindgen_malloc), O = ht, U = ct(l, mt.__wbindgen_malloc), N = ht, z = at(a, mt.__wbindgen_malloc), G = ht, B = ct(s, mt.__wbindgen_malloc), T = ht, j = at(u, mt.__wbindgen_malloc), E = ht, L = ct(w, mt.__wbindgen_malloc), V = ht, H = at(g, mt.__wbindgen_malloc), q = ht, X = ct(b, mt.__wbindgen_malloc), $ = ht, Y = at(d, mt.__wbindgen_malloc), Z = ht, K = ct(f, mt.__wbindgen_malloc), J = ht, Q = lt(m, mt.__wbindgen_malloc), nn = ht, en = ct(h, mt.__wbindgen_malloc), _n = ht, tn = mt.computeNightSignalsTyped(p, y, v, k, S, C, A, R, x, D, M, P, F, I, W, O, U, N, z, G, B, T, j, E, L, V, H, q, X, $, Y, Z, K, J, Q, nn, en, _n);
	if (tn[2]) throw wt(tn[1]);
	return wt(tn[0]);
}
function M(n, e, _) {
	const t = lt(n, mt.__wbindgen_malloc), r = ht, i = at(e, mt.__wbindgen_malloc), o = ht, c = mt.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw wt(c[1]);
	return wt(c[0]);
}
function P(n) {
	const e = mt.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function F(n) {
	const e = mt.consensusDisagreementDetail(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function I(n) {
	const e = mt.consensusDisagreements(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function W(n) {
	const e = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), _ = ht, t = mt.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function O(n) {
	const e = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), _ = ht, t = mt.convertScreensRedcapDiary(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function U(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht;
	mt.csvBufferAppend(e, _);
}
function N(n) {
	mt.csvBufferClear(n);
}
function z(n, e) {
	const _ = mt.cutpointEpochCompatibility(n, e);
	if (_[2]) throw wt(_[1]);
	return wt(_[0]);
}
function G(n, e, _, t, r) {
	const i = at(n, mt.__wbindgen_malloc), o = ht, c = mt.cutpointToneCodes(i, o, e, _, t, r);
	var l = Y_(c[0], c[1]).slice();
	return mt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = mt.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = nt(r[0], r[1]).slice(), mt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function T(n, e, _, t) {
	return 0 !== mt.cutpointsValid(n, e, _, t);
}
function j(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = ct(e, mt.__wbindgen_malloc), i = ht, o = mt.describeColumns(_, t, r, i);
	if (o[2]) throw wt(o[1]);
	return wt(o[0]);
}
function E(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = at(e, mt.__wbindgen_malloc), i = ht, o = mt.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw wt(o[2]);
	var c = Y_(o[0], o[1]).slice();
	return mt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function L(n, e) {
	let _, t;
	try {
		const r = lt(n, mt.__wbindgen_malloc), i = ht, o = ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), c = ht, l = mt.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], nt(l[0], l[1]);
	} finally {
		mt.__wbindgen_free(_, t, 1);
	}
}
function V(n) {
	const e = mt.detectGgirHasptVariant(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function H(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht;
	var o = ot(e) ? 0 : ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), c = ht, l = ot(_) ? 0 : at(_, mt.__wbindgen_malloc), a = ht, s = ot(t) ? 0 : at(t, mt.__wbindgen_malloc), u = ht;
	return mt.detectHdcza(r, i, o, c, l, a, s, u);
}
function q(n) {
	const e = at(n, mt.__wbindgen_malloc), _ = ht;
	return 0 !== mt.detectHourClockJumpMs(e, _);
}
function X(n) {
	const e = at(n, mt.__wbindgen_malloc), _ = ht, t = mt.detectNonwear(e, _);
	var r = Y_(t[0], t[1]).slice();
	return mt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = at(n, mt.__wbindgen_malloc), _ = ht, t = mt.detectNonwearChoi2011(e, _);
	var r = Y_(t[0], t[1]).slice();
	return mt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Y(n) {
	const e = at(n, mt.__wbindgen_malloc), _ = ht, t = mt.detectNonwearChoi2011Bouts(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function Z(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = mt.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw wt(r[2]);
	var i = Y_(r[0], r[1]).slice();
	return mt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = at(n, mt.__wbindgen_malloc), _ = ht, t = mt.detectNonwearChoi2012(e, _);
	var r = Y_(t[0], t[1]).slice();
	return mt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function J(n) {
	const e = at(n, mt.__wbindgen_malloc), _ = ht, t = mt.detectNonwearChoi2012Bouts(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function Q(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = mt.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw wt(r[2]);
	var i = Y_(r[0], r[1]).slice();
	return mt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function nn(n) {
	const e = at(n, mt.__wbindgen_malloc), _ = ht, t = mt.detectNonwearChoiBouts(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function en(n) {
	let e, _;
	try {
		const i = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), o = ht, c = mt.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, wt(c[2]);
		return e = t, _ = r, nt(t, r);
	} finally {
		mt.__wbindgen_free(e, _, 1);
	}
}
function _n(n, e, _, t, r, i, o) {
	const c = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), l = ht, a = ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), s = ht, u = at(_, mt.__wbindgen_malloc), w = ht, g = at(t, mt.__wbindgen_malloc), b = ht, d = at(r, mt.__wbindgen_malloc), f = ht, m = mt.detectNonwearUnifiedBatchTyped(c, l, a, s, u, w, g, b, d, f, i, o);
	if (m[2]) throw wt(m[1]);
	return wt(m[0]);
}
function tn(n, e, _) {
	const t = mt.dstPlaceholderRuns(n, e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function rn(n, e, _, t) {
	const r = mt.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = q_(r[0], r[1]).slice(), mt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function on(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = at(e, mt.__wbindgen_malloc), i = ht, o = mt.epochAgreement(_, t, r, i);
	if (o[2]) throw wt(o[1]);
	return wt(o[0]);
}
function cn(n, e, _, t, r) {
	const i = at(n, mt.__wbindgen_malloc), o = ht, c = at(e, mt.__wbindgen_malloc), l = ht, a = at(_, mt.__wbindgen_malloc), s = ht, u = at(t, mt.__wbindgen_malloc), w = ht, g = mt.epochRawData(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw wt(g[1]);
	return wt(g[0]);
}
function ln(n, e, _) {
	const t = at(n, mt.__wbindgen_malloc), r = ht, i = at(e, mt.__wbindgen_malloc), o = ht, c = mt.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw wt(c[1]);
	return wt(c[0]);
}
function an(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = mt.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = $_(o[0], o[1]).slice(), mt.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function sn(n, e) {
	let _, t;
	try {
		const o = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), c = ht, l = ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), a = ht, s = mt.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, wt(s[2]);
		return _ = r, t = i, nt(r, i);
	} finally {
		mt.__wbindgen_free(_, t, 1);
	}
}
function un(n) {
	const e = mt.exportNapAggregate(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function wn(n, e, _) {
	const t = mt.exportPeriodFigures(!ot(n), ot(n) ? 0 : n, !ot(e), ot(e) ? 0 : e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function gn(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht, t = mt.extractCapsense(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function bn(n, e, _, t, r) {
	const i = at(n, mt.__wbindgen_malloc), o = ht, c = at(e, mt.__wbindgen_malloc), l = ht, a = at(_, mt.__wbindgen_malloc), s = ht, u = ut(r, mt.__wbindgen_malloc, mt.__wbindgen_realloc), w = ht, g = mt.foldOntoGrid(i, o, c, l, a, s, t, u, w);
	if (g[3]) throw wt(g[2]);
	var b = q_(g[0], g[1]).slice();
	return mt.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function dn(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = ut(t, mt.__wbindgen_malloc, mt.__wbindgen_realloc), c = ht, l = mt.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw wt(l[2]);
	var a = q_(l[0], l[1]).slice();
	return mt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function fn(n, e, _, t, r) {
	const i = lt(_, mt.__wbindgen_malloc), o = ht, c = at(t, mt.__wbindgen_malloc), l = ht, a = mt.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw wt(a[1]);
	return wt(a[0]);
}
function mn(n, e, _, t, r, i) {
	const o = at(_, mt.__wbindgen_malloc), c = ht, l = at(t, mt.__wbindgen_malloc), a = ht, s = ut(i, mt.__wbindgen_malloc, mt.__wbindgen_realloc), u = ht, w = mt.foldUniformOntoGrid(n, e, o, c, l, a, r, s, u);
	if (w[3]) throw wt(w[2]);
	var g = q_(w[0], w[1]).slice();
	return mt.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function hn(n) {
	const e = mt.fuseNonwearMasks(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function pn(n, e, _) {
	var t = ot(_) ? 0 : ut(_, mt.__wbindgen_malloc, mt.__wbindgen_realloc), r = ht;
	const i = mt.generateActiwareRestIntervals(n, e, t, r);
	if (i[2]) throw wt(i[1]);
	return wt(i[0]);
}
function yn() {
	const n = mt.getComputeCapabilitiesV1();
	if (n[2]) throw wt(n[1]);
	return wt(n[0]);
}
function vn(n, e, _) {
	const t = mt.ggir5sWallClockMs(n, e, _);
	if (t[3]) throw wt(t[2]);
	var r = q_(t[0], t[1]).slice();
	return mt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function kn(n) {
	const e = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), _ = ht, t = mt.ggirConfigValues(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function Sn(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht;
	var r = ot(e) ? 0 : at(e, mt.__wbindgen_malloc), i = ht;
	const o = mt.ggirDaysIncluded(_, t, r, i);
	var c = Y_(o[0], o[1]).slice();
	return mt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function Cn(n, e) {
	const _ = lt(n, mt.__wbindgen_malloc), t = ht;
	var r = ot(e) ? 0 : ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), i = ht;
	const o = mt.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw wt(o[1]);
	return wt(o[0]);
}
function An(n, e, _) {
	var t = ot(_) ? 0 : at(_, mt.__wbindgen_malloc), r = ht;
	const i = mt.ggirDstPlaceholderCuts(n, e, t, r);
	if (i[2]) throw wt(i[1]);
	return wt(i[0]);
}
function Rn() {
	return mt.ggirIncludeDayCriterionHours();
}
function xn(n, e, _, t) {
	const r = ct(n, mt.__wbindgen_malloc), i = ht;
	var o = ot(t) ? 0 : at(t, mt.__wbindgen_malloc), c = ht;
	const l = mt.ggirIndicesToWallClockMs(r, i, e, _, o, c);
	if (l[3]) throw wt(l[2]);
	var a = q_(l[0], l[1]).slice();
	return mt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function Dn(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = mt.ggirLabelsToStoredMs(_, t, e);
	if (r[3]) throw wt(r[2]);
	var i = q_(r[0], r[1]).slice();
	return mt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Mn(n, e, _, t) {
	const r = st(n, mt.__wbindgen_malloc), i = ht, o = at(e, mt.__wbindgen_malloc), c = ht, l = at(_, mt.__wbindgen_malloc), a = ht, s = at(t, mt.__wbindgen_malloc), u = ht, w = mt.ggirManualNightClocks(r, i, o, c, l, a, s, u);
	if (w[2]) throw wt(w[1]);
	return wt(w[0]);
}
function Pn(n, e, _, t) {
	const r = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), i = ht, o = ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), c = ht, l = ut(_, mt.__wbindgen_malloc, mt.__wbindgen_realloc), a = ht, s = mt.ggirSleeplogStoredClocks(r, i, o, c, l, a, t);
	if (s[3]) throw wt(s[2]);
	let u;
	return 0 !== s[0] && (u = X_(s[0], s[1]).slice(), mt.__wbindgen_free(s[0], 4 * s[1], 4)), u;
}
function Fn(n, e) {
	return mt.ggirSptDurationHours(n, e);
}
function In(n, e) {
	const _ = mt.ggirSummaryDenominator(n, e);
	if (_[2]) throw wt(_[1]);
	return wt(_[0]);
}
function Wn(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = at(e, mt.__wbindgen_malloc), i = ht, o = mt.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function On(n) {
	let e, _;
	try {
		const i = lt(n, mt.__wbindgen_malloc), o = ht, c = mt.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, wt(c[2]);
		return e = t, _ = r, nt(t, r);
	} finally {
		mt.__wbindgen_free(e, _, 1);
	}
}
function Un(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = at(e, mt.__wbindgen_malloc), c = ht, l = at(_, mt.__wbindgen_malloc), a = ht, s = at(t, mt.__wbindgen_malloc), u = ht, w = mt.implausibilityReasons(r, i, o, c, l, a, s, u);
	if (w[2]) throw wt(w[1]);
	return wt(w[0]);
}
function Nn() {
	mt.installPanicHook();
}
function zn(n) {
	const e = mt.interRaterReliability(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function Gn(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = mt.irregularInternalDays(_, t, e);
	var i = X_(r[0], r[1]).slice();
	return mt.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Bn(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht;
	return 0 !== mt.isGeneactivFormat(e, _);
}
function Tn(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = at(e, mt.__wbindgen_malloc), c = ht, l = at(_, mt.__wbindgen_malloc), a = ht, s = mt.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw wt(s[1]);
	return wt(s[0]);
}
function jn(n, e, _) {
	const t = at(n, mt.__wbindgen_malloc), r = ht, i = mt.markerIndexRange(t, r, e, _);
	var o = $_(i[0], i[1]).slice();
	return mt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function En(n, e, _, t, r, i, o) {
	const c = at(n, mt.__wbindgen_malloc), l = ht, a = at(e, mt.__wbindgen_malloc), s = ht, u = mt.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (u[2]) throw wt(u[1]);
	return wt(u[0]);
}
function Ln(n) {
	const e = at(n, mt.__wbindgen_malloc), _ = ht, t = mt.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Vn(n, e, _, t) {
	const r = mt.metricWarnings(n, e, _, t);
	var i = Y_(r[0], r[1]).slice();
	return mt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Hn(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = at(e, mt.__wbindgen_malloc), i = ht, o = mt.midSleepClockHours(_, t, r, i);
	var c = q_(o[0], o[1]).slice();
	return mt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function qn(n, e, _, t, r) {
	const i = at(n, mt.__wbindgen_malloc), o = ht, c = at(e, mt.__wbindgen_malloc), l = ht, a = at(_, mt.__wbindgen_malloc), s = ht, u = mt.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw wt(u[1]);
	return wt(u[0]);
}
function Xn(n) {
	const e = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), _ = ht, t = mt.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = nt(t[0], t[1]).slice(), mt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function $n(n, e, _, t, r) {
	const i = at(_, mt.__wbindgen_malloc), o = ht, c = at(t, mt.__wbindgen_malloc), l = ht, a = at(r, mt.__wbindgen_malloc), s = ht, u = mt.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (u[2]) throw wt(u[1]);
	return wt(u[0]);
}
function Yn(n, e, _, t) {
	let r, i;
	try {
		const l = ct(n, mt.__wbindgen_malloc), a = ht, s = ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), u = ht, w = mt.nonwearContributors(l, a, s, u, _, t);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, wt(w[2]);
		return r = o, i = c, nt(o, c);
	} finally {
		mt.__wbindgen_free(r, i, 1);
	}
}
function Zn(n) {
	const e = at(n, mt.__wbindgen_malloc), _ = ht, t = mt.nonwearInSleepCounts(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function Kn(n) {
	const e = mt.nonwearSleepOverlap(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function Jn(n, e, _) {
	const t = at(n, mt.__wbindgen_malloc), r = ht, i = at(e, mt.__wbindgen_malloc), o = ht, c = mt.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw wt(c[1]);
	return wt(c[0]);
}
function Qn(n, e, _, t, r, i) {
	const o = ut(r, mt.__wbindgen_malloc, mt.__wbindgen_realloc), c = ht, l = mt.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw wt(l[2]);
	var a = q_(l[0], l[1]).slice();
	return mt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function ne(n, e) {
	const _ = lt(n, mt.__wbindgen_malloc), t = ht, r = mt.parseActigraphCsv(_, t, e);
	if (r[2]) throw wt(r[1]);
	return wt(r[0]);
}
function ee(n) {
	const e = mt.parseActigraphCsvBuffered(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function _e(n, e, _, t) {
	const r = lt(n, mt.__wbindgen_malloc), i = ht;
	var o = ot(e) ? 0 : ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), c = ht, l = ot(t) ? 0 : ut(t, mt.__wbindgen_malloc, mt.__wbindgen_realloc), a = ht;
	const s = mt.parseAw5(r, i, o, c, ot(_) ? 0 : V_(_), l, a);
	if (s[2]) throw wt(s[1]);
	return wt(s[0]);
}
function te(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht, t = mt.parseCwa(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function re(n, e) {
	const _ = lt(n, mt.__wbindgen_malloc), t = ht, r = ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), i = ht, o = mt.parseEpochSeries(_, t, r, i);
	if (o[2]) throw wt(o[1]);
	return wt(o[0]);
}
function ie(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht, t = mt.parseGeneactivBin(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function oe(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht, t = mt.parseGeneactivCsv(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function ce() {
	const n = mt.parseGeneactivCsvBuffered();
	if (n[2]) throw wt(n[1]);
	return wt(n[0]);
}
function le(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht, t = mt.parseGt3x(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function ae(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = lt(e, mt.__wbindgen_malloc), c = ht, l = lt(_, mt.__wbindgen_malloc), a = ht, s = mt.participantValidity(r, i, o, c, l, a, t);
	if (s[2]) throw wt(s[1]);
	return wt(s[0]);
}
function se(n, e, _, t, r) {
	const i = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), o = ht, c = at(e, mt.__wbindgen_malloc), l = ht;
	var a = ot(_) ? 0 : at(_, mt.__wbindgen_malloc), s = ht;
	const u = mt.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (u[2]) throw wt(u[1]);
	return wt(u[0]);
}
function ue(n) {
	let e, _;
	try {
		const i = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), o = ht, c = mt.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, wt(c[2]);
		return e = t, _ = r, nt(t, r);
	} finally {
		mt.__wbindgen_free(e, _, 1);
	}
}
function we(n, e, _, t, r, i) {
	const o = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), c = ht, l = at(e, mt.__wbindgen_malloc), a = ht, s = at(_, mt.__wbindgen_malloc), u = ht, w = lt(t, mt.__wbindgen_malloc), g = ht, b = lt(r, mt.__wbindgen_malloc), d = ht, f = ut(i, mt.__wbindgen_malloc, mt.__wbindgen_realloc), m = ht, h = mt.placeMarkersBatch(o, c, l, a, s, u, w, g, b, d, f, m);
	if (h[2]) throw wt(h[1]);
	return wt(h[0]);
}
function ge(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), y = ht, v = at(e, mt.__wbindgen_malloc), k = ht, S = ct(_, mt.__wbindgen_malloc), C = ht, A = at(t, mt.__wbindgen_malloc), R = ht, x = ct(r, mt.__wbindgen_malloc), D = ht, M = lt(i, mt.__wbindgen_malloc), P = ht, F = ct(o, mt.__wbindgen_malloc), I = ht, W = lt(c, mt.__wbindgen_malloc), O = ht, U = ct(l, mt.__wbindgen_malloc), N = ht, z = at(a, mt.__wbindgen_malloc), G = ht, B = ct(s, mt.__wbindgen_malloc), T = ht, j = at(u, mt.__wbindgen_malloc), E = ht, L = ct(w, mt.__wbindgen_malloc), V = ht, H = at(g, mt.__wbindgen_malloc), q = ht, X = ct(b, mt.__wbindgen_malloc), $ = ht, Y = at(d, mt.__wbindgen_malloc), Z = ht, K = ct(f, mt.__wbindgen_malloc), J = ht, Q = lt(m, mt.__wbindgen_malloc), nn = ht, en = ct(h, mt.__wbindgen_malloc), _n = ht, tn = mt.placeMarkersTyped(p, y, v, k, S, C, A, R, x, D, M, P, F, I, W, O, U, N, z, G, B, T, j, E, L, V, H, q, X, $, Y, Z, K, J, Q, nn, en, _n);
	if (tn[2]) throw wt(tn[1]);
	return wt(tn[0]);
}
function be(n) {
	let e, _;
	try {
		const i = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), o = ht, c = mt.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, wt(c[2]);
		return e = t, _ = r, nt(t, r);
	} finally {
		mt.__wbindgen_free(e, _, 1);
	}
}
function de(n, e, _, t) {
	const r = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), i = ht, o = at(e, mt.__wbindgen_malloc), c = ht, l = at(_, mt.__wbindgen_malloc), a = ht, s = lt(t, mt.__wbindgen_malloc), u = ht, w = mt.placeNonwearMarkersTyped(r, i, o, c, l, a, s, u);
	if (w[2]) throw wt(w[1]);
	return wt(w[0]);
}
function fe(n) {
	const e = mt.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function me(n) {
	const e = mt.prepareCompactPipelineV1(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function he(n, e, _, t, r, i, o) {
	const c = at(n, mt.__wbindgen_malloc), l = ht, a = at(e, mt.__wbindgen_malloc), s = ht, u = at(_, mt.__wbindgen_malloc), w = ht, g = at(t, mt.__wbindgen_malloc), b = ht;
	var d = ot(o) ? 0 : ut(o, mt.__wbindgen_malloc, mt.__wbindgen_realloc), f = ht;
	const m = mt.processGeneactivRaw(c, l, a, s, u, w, g, b, r, i, d, f);
	if (m[2]) throw wt(m[1]);
	return wt(m[0]);
}
function pe(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht, t = mt.processGt3xFull(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function ye(n, e) {
	const _ = lt(n, mt.__wbindgen_malloc), t = ht, r = mt.processGt3xFullWithEpoch(_, t, e);
	if (r[2]) throw wt(r[1]);
	return wt(r[0]);
}
function ve(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht, t = mt.processGt3xPart1(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function ke(n, e) {
	const _ = lt(n, mt.__wbindgen_malloc), t = ht, r = mt.processGt3xPart1WithEpoch(_, t, e);
	if (r[2]) throw wt(r[1]);
	return wt(r[0]);
}
function Se(n, e, _, t, r, i) {
	const o = at(n, mt.__wbindgen_malloc), c = ht, l = at(e, mt.__wbindgen_malloc), a = ht, s = at(_, mt.__wbindgen_malloc), u = ht;
	var w = ot(i) ? 0 : ut(i, mt.__wbindgen_malloc, mt.__wbindgen_realloc), g = ht;
	const b = mt.processRawXyz(o, c, l, a, s, u, t, r, w, g);
	if (b[2]) throw wt(b[1]);
	return wt(b[0]);
}
function Ce(n, e, _, t, r, i) {
	const o = at(n, mt.__wbindgen_malloc), c = ht, l = at(e, mt.__wbindgen_malloc), a = ht, s = at(_, mt.__wbindgen_malloc), u = ht, w = at(t, mt.__wbindgen_malloc), g = ht;
	var b = ot(i) ? 0 : ut(i, mt.__wbindgen_malloc, mt.__wbindgen_realloc), d = ht;
	const f = mt.processRawXyzImputed(o, c, l, a, s, u, w, g, r, b, d);
	if (f[2]) throw wt(f[1]);
	return wt(f[0]);
}
function Ae(n, e, _, t, r, i, o) {
	const c = at(n, mt.__wbindgen_malloc), l = ht, a = at(e, mt.__wbindgen_malloc), s = ht, u = at(_, mt.__wbindgen_malloc), w = ht, g = at(t, mt.__wbindgen_malloc), b = ht;
	var d = ot(i) ? 0 : ut(i, mt.__wbindgen_malloc, mt.__wbindgen_realloc), f = ht;
	const m = mt.processRawXyzImputedWithEpoch(c, l, a, s, u, w, g, b, r, d, f, o);
	if (m[2]) throw wt(m[1]);
	return wt(m[0]);
}
function Re(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = lt(e, mt.__wbindgen_malloc), c = ht, l = at(t, mt.__wbindgen_malloc), a = ht, s = mt.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var u = Y_(s[0], s[1]).slice();
	return mt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function xe(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = at(e, mt.__wbindgen_malloc), c = ht, l = at(_, mt.__wbindgen_malloc), a = ht, s = mt.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw wt(s[1]);
	return wt(s[0]);
}
function De(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht, t = mt.readGgirMeta(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function Me() {
	return mt.recommended_chunk_size_mb() >>> 0;
}
function Pe(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), i = ht, o = mt.reduceF64V1(_, t, r, i);
	if (o[2]) throw wt(o[1]);
	return o[0];
}
function Fe(n) {
	const e = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), _ = ht, t = mt.resolveTimezone(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function Ie(n, e, _) {
	const t = at(n, mt.__wbindgen_malloc), r = ht, i = at(e, mt.__wbindgen_malloc), o = ht, c = ct(_, mt.__wbindgen_malloc), l = ht, a = mt.restoredDstRuns(t, r, i, o, c, l);
	if (a[2]) throw wt(a[1]);
	return wt(a[0]);
}
function We(n, e, _, t, r, i, o, c, l, a, s) {
	const u = lt(n, mt.__wbindgen_malloc), w = ht, g = ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), b = ht;
	var d = ot(_) ? 0 : lt(_, mt.__wbindgen_malloc), f = ht, m = ot(t) ? 0 : lt(t, mt.__wbindgen_malloc), h = ht, p = ot(r) ? 0 : lt(r, mt.__wbindgen_malloc), y = ht, v = ot(i) ? 0 : lt(i, mt.__wbindgen_malloc), k = ht, S = ot(o) ? 0 : lt(o, mt.__wbindgen_malloc), C = ht, A = ot(c) ? 0 : ut(c, mt.__wbindgen_malloc, mt.__wbindgen_realloc), R = ht, x = ot(l) ? 0 : ut(l, mt.__wbindgen_malloc, mt.__wbindgen_realloc), D = ht;
	const M = mt.reviewGgirResults(u, w, g, b, d, f, m, h, p, y, v, k, S, C, A, R, x, D, a, s);
	if (M[2]) throw wt(M[1]);
	return wt(M[0]);
}
function Oe(n) {
	const e = mt.reviewNonwearFile(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function Ue(n) {
	const e = mt.reviewNonwearTotals(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function Ne(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = mt.roundCountStorage(_, t, e);
	var i = q_(r[0], r[1]).slice();
	return mt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function ze(n) {
	const e = mt.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function Ge(n) {
	const e = mt.runCompactPipelineV1(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function Be(n, e) {
	const _ = mt.runFullPipeline(n, e);
	if (_[2]) throw wt(_[1]);
	return wt(_[0]);
}
function Te(n) {
	const e = mt.runFullPipelineOutcomeV1(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function je(n) {
	const e = mt.runFullPipelineV1(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function Ee(n, e) {
	const _ = mt.runGgirFromEpoch(n, e);
	if (_[2]) throw wt(_[1]);
	return wt(_[0]);
}
function Le(n) {
	const e = mt.runGgirPart3(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function Ve(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht, t = mt.runMilestone(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function He(n) {
	const e = mt.scoreAllDays(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function qe(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = mt.scoreColeKripke(_, t, e);
	var i = Y_(r[0], r[1]).slice();
	return mt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Xe(n) {
	let e, _;
	try {
		const i = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), o = ht, c = mt.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, wt(c[2]);
		return e = t, _ = r, nt(t, r);
	} finally {
		mt.__wbindgen_free(e, _, 1);
	}
}
function $e(n) {
	const e = mt.scoreConsensusMajority(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function Ye(n, e, _) {
	const t = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), r = ht, i = lt(e, mt.__wbindgen_malloc), o = ht, c = ct(_, mt.__wbindgen_malloc), l = ht, a = mt.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw wt(a[1]);
	return wt(a[0]);
}
function Ze(n) {
	let e, _;
	try {
		const i = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), o = ht, c = mt.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, wt(c[2]);
		return e = t, _ = r, nt(t, r);
	} finally {
		mt.__wbindgen_free(e, _, 1);
	}
}
function Ke(n, e, _, t, r, i) {
	const o = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), c = ht, l = at(e, mt.__wbindgen_malloc), a = ht, s = at(_, mt.__wbindgen_malloc), u = ht, w = at(t, mt.__wbindgen_malloc), g = ht, b = mt.scoreEpochsTyped(o, c, l, a, s, u, w, g, r, i);
	if (b[2]) throw wt(b[1]);
	return wt(b[0]);
}
function Je(n) {
	const e = at(n, mt.__wbindgen_malloc), _ = ht, t = mt.scoreGgirHasib(e, _);
	var r = Y_(t[0], t[1]).slice();
	return mt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Qe(n) {
	const e = mt.scoreGgirHasibVariant(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function n_(n, e, _) {
	const t = at(n, mt.__wbindgen_malloc), r = ht, i = at(e, mt.__wbindgen_malloc), o = ht, c = mt.scoreGgirSib(t, r, i, o, _);
	if (c[2]) throw wt(c[1]);
	return wt(c[0]);
}
function e_(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = mt.scoreSadeh(_, t, e);
	var i = Y_(r[0], r[1]).slice();
	return mt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function __(n) {
	const e = mt.settleManualNonwearNights(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function t_(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht, t = mt.sha256StreamFeed(e, _);
	if (t[1]) throw wt(t[0]);
}
function r_() {
	let n, e;
	try {
		const r = mt.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, wt(r[2]);
		return n = _, e = t, nt(_, t);
	} finally {
		mt.__wbindgen_free(n, e, 1);
	}
}
function i_() {
	mt.sha256StreamStart();
}
function o_(n, e) {
	const _ = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), t = ht, r = mt.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = nt(r[0], r[1]).slice(), mt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function c_(n, e, _, t, r) {
	const i = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), o = ht, c = at(e, mt.__wbindgen_malloc), l = ht, a = ct(_, mt.__wbindgen_malloc), s = ht, u = at(t, mt.__wbindgen_malloc), w = ht, g = ct(r, mt.__wbindgen_malloc), b = ht, d = mt.sleepRegularityIndex(i, o, c, l, a, s, u, w, g, b);
	if (d[3]) throw wt(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function l_(n, e) {
	const _ = mt.sleepWakeScores(n, e);
	if (_[2]) throw wt(_[1]);
	return wt(_[0]);
}
function a_(n) {
	const e = st(n, mt.__wbindgen_malloc), _ = ht, t = mt.sourceLabelsWallClockMs(e, _);
	var r = q_(t[0], t[1]).slice();
	return mt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function s_(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = at(e, mt.__wbindgen_malloc), c = ht, l = mt.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function u_(n, e, _) {
	const t = at(n, mt.__wbindgen_malloc), r = ht, i = at(_, mt.__wbindgen_malloc), o = ht, c = mt.spliceDstPlaceholders(t, r, e, i, o);
	if (c[3]) throw wt(c[2]);
	let l;
	return 0 !== c[0] && (l = q_(c[0], c[1]).slice(), mt.__wbindgen_free(c[0], 8 * c[1], 8)), l;
}
function w_(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = lt(e, mt.__wbindgen_malloc), c = ht, l = at(_, mt.__wbindgen_malloc), a = ht, s = at(t, mt.__wbindgen_malloc), u = ht, w = mt.statesInPeriods(r, i, o, c, l, a, s, u);
	var g = Y_(w[0], w[1]).slice();
	return mt.__wbindgen_free(w[0], 1 * w[1], 1), g;
}
function g_(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = mt.storedToGgirLabelsMs(_, t, e);
	if (r[3]) throw wt(r[2]);
	var i = q_(r[0], r[1]).slice();
	return mt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function b_(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht, t = mt.streamParseFeed(e, _);
	if (t[2]) throw wt(t[1]);
	return t[0] >>> 0;
}
function d_() {
	const n = mt.streamParseFinish();
	if (n[2]) throw wt(n[1]);
	return _.__wrap(n[0]);
}
function f_() {
	const n = mt.streamParseFinishChunk();
	if (n[2]) throw wt(n[1]);
	return e.__wrap(n[0]);
}
function m_(n) {
	const _ = mt.streamParseFinishChunkWithProgress(n);
	if (_[2]) throw wt(_[1]);
	return e.__wrap(_[0]);
}
function h_(n, e) {
	const _ = mt.streamParseStart(n, e);
	if (_[1]) throw wt(_[0]);
}
function p_(n, e) {
	const _ = mt.streamParseStartData(n, e);
	if (_[1]) throw wt(_[0]);
}
function y_(n, e, _) {
	const t = mt.streamParseStartWithEpoch(n, e, _);
	if (t[1]) throw wt(t[0]);
}
function v_(n, e) {
	const _ = lt(n, mt.__wbindgen_malloc), t = ht, r = mt.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw wt(r[1]);
	return wt(r[0]);
}
function k_(n) {
	const e = mt.summarizeExportGroups(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function S_(n) {
	const e = mt.summarizePhysicalActivityDays(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function C_(n) {
	const e = mt.summarizePhysicalActivityTrace(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function A_(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = mt.thresholdProbabilities(_, t, e);
	var i = Y_(r[0], r[1]).slice();
	return mt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function R_(n) {
	const e = mt.timeSemantics(n);
	if (e[2]) throw wt(e[1]);
	return wt(e[0]);
}
function x_(n, e, _) {
	const t = at(n, mt.__wbindgen_malloc), r = ht, i = mt.timestampDiscontinuities(t, r, e, _);
	if (i[2]) throw wt(i[1]);
	return wt(i[0]);
}
function D_(n, e, _) {
	const t = mt.uniformTimestamps(n, e, _);
	var r = q_(t[0], t[1]).slice();
	return mt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function M_(n, e) {
	const _ = mt.utcDatesInSpan(n, e);
	var t = X_(_[0], _[1]).slice();
	return mt.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function P_(n) {
	const e = at(n, mt.__wbindgen_malloc), _ = ht, t = mt.utcDayIndex(e, _);
	if (t[2]) throw wt(t[1]);
	return wt(t[0]);
}
function F_(n) {
	const e = lt(n, mt.__wbindgen_malloc), _ = ht, t = mt.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function I_(n, e) {
	const _ = at(n, mt.__wbindgen_malloc), t = ht, r = mt.validWearDays(_, t, e);
	if (r[3]) throw wt(r[2]);
	var i = Y_(r[0], r[1]).slice();
	return mt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function W_(n, e, _) {
	const t = at(n, mt.__wbindgen_malloc), r = ht, i = mt.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw wt(i[1]);
	return wt(i[0]);
}
function O_(n) {
	const e = at(n, mt.__wbindgen_malloc), _ = ht, t = mt.wallClockLabels(e, _);
	var r = X_(t[0], t[1]).slice();
	return mt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function U_(n, e, _) {
	const t = lt(n, mt.__wbindgen_malloc), r = ht, i = mt.wallMaskOntoGgirGrid(t, r, e, _);
	if (i[3]) throw wt(i[2]);
	var o = Y_(i[0], i[1]).slice();
	return mt.__wbindgen_free(i[0], 1 * i[1], 1), o;
}
function N_(n, e) {
	const _ = ut(n, mt.__wbindgen_malloc, mt.__wbindgen_realloc), t = ht;
	var r = ot(e) ? 0 : ut(e, mt.__wbindgen_malloc, mt.__wbindgen_realloc), i = ht;
	const o = mt.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw wt(o[1]);
	return wt(o[0]);
}
function z_(n) {
	const e = st(n, mt.__wbindgen_malloc), _ = ht, t = mt.weekendDates(e, _);
	var r = Y_(t[0], t[1]).slice();
	return mt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function G_(n, e, _, t) {
	const r = at(n, mt.__wbindgen_malloc), i = ht, o = mt.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function B_(n, e, _, t, r) {
	const i = at(n, mt.__wbindgen_malloc), o = ht, c = at(e, mt.__wbindgen_malloc), l = ht, a = at(_, mt.__wbindgen_malloc), s = ht, u = mt.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw wt(u[1]);
	return wt(u[0]);
}
function T_() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(nt(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = ut(String(e), mt.__wbindgen_malloc, mt.__wbindgen_realloc), t = ht;
				K_().setInt32(n + 4, t, !0), K_().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				K_().setBigInt64(n + 8, ot(_) ? BigInt(0) : _, !0), K_().setInt32(n + 0, !ot(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return ot(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = ut(H_(e), mt.__wbindgen_malloc, mt.__wbindgen_realloc), t = ht;
				K_().setInt32(n + 4, t, !0), K_().setInt32(n + 0, _, !0);
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
				K_().setFloat64(n + 8, ot(_) ? 0 : _, !0), K_().setInt32(n + 0, !ot(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = ot(_) ? 0 : ut(_, mt.__wbindgen_malloc, mt.__wbindgen_realloc), r = ht;
				K_().setInt32(n + 4, r, !0), K_().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(nt(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return it(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return it(function(n, e, _, t) {
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
					_ = n, t = e, console.error(nt(n, e));
				} finally {
					mt.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return it(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return it(function(n, e) {
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
				return new Uint32Array($_(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(q_(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(Y_(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return it(function(n) {
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
				return it(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(Y_(n, e), _);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return it(function(n, e, _) {
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
				const _ = ut(e.stack, mt.__wbindgen_malloc, mt.__wbindgen_realloc), t = ht;
				K_().setInt32(n + 4, t, !0), K_().setInt32(n + 0, _, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return ot(n) ? 0 : V_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return ot(n) ? 0 : V_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return ot(n) ? 0 : V_(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return ot(n) ? 0 : V_(n);
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
				return Y_(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return nt(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = mt.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
const j_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => mt.__wbg_aw5batch_free(n >>> 0, 1)), E_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => mt.__wbg_streamchunkresult_free(n >>> 0, 1)), L_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => mt.__wbg_streamparseresult_free(n >>> 0, 1));
function V_(n) {
	const e = mt.__externref_table_alloc();
	return mt.__wbindgen_externrefs.set(e, n), e;
}
function H_(n) {
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
		e > 0 && (_ += H_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + H_(n[t]);
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
function q_(n, e) {
	return n >>>= 0, Q_().subarray(n / 8, n / 8 + e);
}
function X_(n, e) {
	n >>>= 0;
	const _ = K_(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(mt.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return mt.__externref_drop_slice(n, e), t;
}
function $_(n, e) {
	return n >>>= 0, _t().subarray(n / 4, n / 4 + e);
}
function Y_(n, e) {
	return n >>>= 0, rt().subarray(n / 1, n / 1 + e);
}
let Z_ = null;
function K_() {
	return (null === Z_ || !0 === Z_.buffer.detached || void 0 === Z_.buffer.detached && Z_.buffer !== mt.memory.buffer) && (Z_ = new DataView(mt.memory.buffer)), Z_;
}
let J_ = null;
function Q_() {
	return null !== J_ && 0 !== J_.byteLength || (J_ = new Float64Array(mt.memory.buffer)), J_;
}
function nt(n, e) {
	return function(n, e) {
		return dt += e, dt >= bt && (gt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), gt.decode(), dt = e), gt.decode(rt().subarray(n, n + e));
	}(n >>>= 0, e);
}
let et = null;
function _t() {
	return null !== et && 0 !== et.byteLength || (et = new Uint32Array(mt.memory.buffer)), et;
}
let tt = null;
function rt() {
	return null !== tt && 0 !== tt.byteLength || (tt = new Uint8Array(mt.memory.buffer)), tt;
}
function it(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = V_(_);
		mt.__wbindgen_exn_store(n);
	}
}
function ot(n) {
	return null == n;
}
function ct(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return _t().set(n, _ / 4), ht = n.length, _;
}
function lt(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return rt().set(n, _ / 1), ht = n.length, _;
}
function at(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return Q_().set(n, _ / 8), ht = n.length, _;
}
function st(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = V_(n[t]);
		K_().setUint32(_ + 4 * t, e, !0);
	}
	return ht = n.length, _;
}
function ut(n, e, _) {
	if (void 0 === _) {
		const _ = ft.encode(n), t = e(_.length, 1) >>> 0;
		return rt().subarray(t, t + _.length).set(_), ht = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = rt();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = rt().subarray(r + o, r + t);
		o += ft.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return ht = o, r;
}
function wt(n) {
	const e = mt.__wbindgen_externrefs.get(n);
	return mt.__externref_table_dealloc(n), e;
}
let gt = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
gt.decode();
const bt = 2146435072;
let dt = 0;
const ft = new TextEncoder();
"encodeInto" in ft || (ft.encodeInto = function(n, e) {
	const _ = ft.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let mt, ht = 0;
function pt(n, e) {
	return mt = n.exports, Z_ = null, J_ = null, et = null, tt = null, mt.__wbindgen_start(), mt;
}
function yt(n) {
	if (void 0 !== mt) return mt;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = T_();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), pt(new WebAssembly.Instance(n, e));
}
async function vt(n) {
	if (void 0 !== mt) return mt;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-CNvq0Qt9.wasm", "" + import.meta.url));
	const e = T_();
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
	return pt(_);
}
export { n as Aw5Batch, e as StreamChunkResult, _ as StreamParseResult, t as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actiwareWakeThreshold, o as actoursVersion, c as aggregateEpochSeries, l as analysisDatesOf, a as analysisWindowBounds, s as analysisWindowSlice, u as analyzePhysicalActivityDay, w as classifyActimetricPreschoolWristRf, g as classifyActimetricPreschoolWristRfLagLead, b as classifyActimetricPreschoolWristRfLagLeadCalibrated, d as clippedUnionHours, f as compareNonwearDetectorMasks, m as computeAnglez5s, h as computeCircadian, p as computeCircadianTyped, y as computeEnmo5s, v as computeMimsUnit, k as computeMimsUnitDataframe, S as computeMimsUnitTimingBreakdown, C as computeMimsUnitValues, A as computeNightDifficulty, R as computeNightDifficultyTyped, x as computeNightSignals, D as computeNightSignalsTyped, M as computeSleepMetrics, P as configureComputeMemoryBudgetV1, F as consensusDisagreementDetail, I as consensusDisagreements, W as convertBedWakeDaysDiary, O as convertScreensRedcapDiary, U as csvBufferAppend, N as csvBufferClear, z as cutpointEpochCompatibility, G as cutpointToneCodes, B as cutpointsRefusal, T as cutpointsValid, vt as default, j as describeColumns, E as detectDetachFromAccelerationG, L as detectDeviceFormat, V as detectGgirHasptVariant, H as detectHdcza, q as detectHourClockJumpMs, X as detectNonwear, $ as detectNonwearChoi2011, Y as detectNonwearChoi2011Bouts, Z as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, J as detectNonwearChoi2012Bouts, Q as detectNonwearChoi2012Epoch, nn as detectNonwearChoiBouts, en as detectNonwearUnified, _n as detectNonwearUnifiedBatchTyped, tn as dstPlaceholderRuns, rn as effectiveOverrideCutpoints, on as epochAgreement, cn as epochRawData, ln as epochWithBandpass, an as epochsOverlapping, sn as executeHeroRuntime, un as exportNapAggregate, wn as exportPeriodFigures, gn as extractCapsense, bn as foldOntoGrid, dn as foldSampleBlocks, fn as foldSleepWakeVotes, mn as foldUniformOntoGrid, hn as fuseNonwearMasks, pn as generateActiwareRestIntervals, yn as getComputeCapabilitiesV1, vn as ggir5sWallClockMs, kn as ggirConfigValues, Sn as ggirDaysIncluded, Cn as ggirDiaryLogShape, An as ggirDstPlaceholderCuts, Rn as ggirIncludeDayCriterionHours, xn as ggirIndicesToWallClockMs, Dn as ggirLabelsToStoredMs, Mn as ggirManualNightClocks, Pn as ggirSleeplogStoredClocks, Fn as ggirSptDurationHours, In as ggirSummaryDenominator, Wn as gridOffsetWithin, On as identifyGgirRData, Un as implausibilityReasons, yt as initSync, Nn as installPanicHook, zn as interRaterReliability, Gn as irregularInternalDays, Bn as isGeneactivFormat, Tn as lstmSpectralFeatures30s, jn as markerIndexRange, En as markerSleepOnsetOffset, Ln as medianGapSeconds, Vn as metricWarnings, Hn as midSleepClockHours, qn as neishabouriCounts, Xn as nextDate, $n as nightIntervalOverlap, Yn as nonwearContributors, Zn as nonwearInSleepCounts, Kn as nonwearSleepOverlap, Jn as nonwearWeightRuns, Qn as normalizeCutpoints, ne as parseActigraphCsv, ee as parseActigraphCsvBuffered, _e as parseAw5, te as parseCwa, re as parseEpochSeries, ie as parseGeneactivBin, oe as parseGeneactivCsv, ce as parseGeneactivCsvBuffered, le as parseGt3x, ae as participantValidity, se as physicalActivitySeriesGrid, ue as placeMarkers, we as placeMarkersBatch, ge as placeMarkersTyped, be as placeNonwearMarkers, de as placeNonwearMarkersTyped, fe as prepareCompactPipelineOutcomeV1, me as prepareCompactPipelineV1, he as processGeneactivRaw, pe as processGt3xFull, ye as processGt3xFullWithEpoch, ve as processGt3xPart1, ke as processGt3xPart1WithEpoch, Se as processRawXyz, Ce as processRawXyzImputed, Ae as processRawXyzImputedWithEpoch, Re as projectLabelsOntoGrid, xe as rasterizePeriods, De as readGgirMeta, Me as recommended_chunk_size_mb, Pe as reduceF64V1, Fe as resolveTimezone, Ie as restoredDstRuns, We as reviewGgirResults, Oe as reviewNonwearFile, Ue as reviewNonwearTotals, Ne as roundCountStorage, ze as runCompactPipelineOutcomeV1, Ge as runCompactPipelineV1, Be as runFullPipeline, Te as runFullPipelineOutcomeV1, je as runFullPipelineV1, Ee as runGgirFromEpoch, Le as runGgirPart3, Ve as runMilestone, He as scoreAllDays, qe as scoreColeKripke, Xe as scoreConsensus, $e as scoreConsensusMajority, Ye as scoreConsensusTyped, Ze as scoreEpochs, Ke as scoreEpochsTyped, Je as scoreGgirHasib, Qe as scoreGgirHasibVariant, n_ as scoreGgirSib, e_ as scoreSadeh, __ as settleManualNonwearNights, t_ as sha256StreamFeed, r_ as sha256StreamFinish, i_ as sha256StreamStart, o_ as shiftDate, c_ as sleepRegularityIndex, l_ as sleepWakeScores, a_ as sourceLabelsWallClockMs, s_ as spanFiniteMean, u_ as spliceDstPlaceholders, w_ as statesInPeriods, g_ as storedToGgirLabelsMs, b_ as streamParseFeed, d_ as streamParseFinish, f_ as streamParseFinishChunk, m_ as streamParseFinishChunkWithProgress, h_ as streamParseStart, p_ as streamParseStartData, y_ as streamParseStartWithEpoch, v_ as summarizeActimetricPreschoolWristRfClasses, k_ as summarizeExportGroups, S_ as summarizePhysicalActivityDays, C_ as summarizePhysicalActivityTrace, A_ as thresholdProbabilities, R_ as timeSemantics, x_ as timestampDiscontinuities, D_ as uniformTimestamps, M_ as utcDatesInSpan, P_ as utcDayIndex, F_ as validStateFraction, I_ as validWearDays, W_ as wallClockDstPlaceholders, O_ as wallClockLabels, U_ as wallMaskOntoGgirGrid, N_ as wearSiteHasptRouting, z_ as weekendDates, G_ as windowCoverage, B_ as zeroCrossingCounts };
