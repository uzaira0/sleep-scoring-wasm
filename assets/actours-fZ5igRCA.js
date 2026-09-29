var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, N_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		bt.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = bt.aw5batch_new(n);
		if (e[2]) throw at(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, N_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), r = ft;
		var i = tt(_) ? 0 : lt(_, bt.__wbindgen_malloc, bt.__wbindgen_realloc), o = ft;
		const c = bt.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw at(c[1]);
		return at(c[0]);
	}
	subjects(n) {
		const e = bt.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw at(e[1]);
		return at(e[0]);
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, B_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, B_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		bt.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = bt.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = bt.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = bt.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = bt.streamchunkresult_axisX(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = bt.streamchunkresult_axisY(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = bt.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== bt.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = bt.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = K_(n[0], n[1]).slice(), bt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = bt.streamchunkresult_counts(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = bt.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = bt.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = bt.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = bt.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = X_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = bt.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = X_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return bt.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = bt.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = bt.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== bt.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = bt.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = K_(n[0], n[1]).slice(), bt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = bt.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = bt.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = bt.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== bt.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return bt.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return bt.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return bt.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = bt.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = bt.streamchunkresult_temperature(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = bt.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = bt.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = bt.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = bt.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = bt.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = bt.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
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
		bt.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = bt.streamparseresult_axisX(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = bt.streamparseresult_axisY(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = bt.streamparseresult_axisZ(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== bt.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = bt.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = K_(n[0], n[1]).slice(), bt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return bt.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== bt.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return bt.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return bt.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = bt.streamparseresult_temperature(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = bt.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = bt.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = L_(n[0], n[1]).slice();
		return bt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n) {
	const e = bt.actiwareIntervalStatistics(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function r(n, e, _) {
	const t = bt.actiwareSleepIntervals(n, e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function i(n, e) {
	const _ = bt.actiwareWakeThreshold(n, e);
	if (_[3]) throw at(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function o() {
	let n, e;
	try {
		const _ = bt.actoursVersion();
		return n = _[0], e = _[1], K_(_[0], _[1]);
	} finally {
		bt.__wbindgen_free(n, e, 1);
	}
}
function c(n) {
	const e = bt.aggregateEpochSeries(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function l(n) {
	const e = ot(n, bt.__wbindgen_malloc), _ = ft, t = bt.analysisDatesOf(e, _);
	var r = V_(t[0], t[1]).slice();
	return bt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function a(n, e) {
	const _ = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), t = ft, r = bt.analysisWindowBounds(_, t, !tt(e), tt(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = L_(r[0], r[1]).slice(), bt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function s(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), i = ft, o = bt.analysisWindowSlice(_, t, r, i);
	var c = H_(o[0], o[1]).slice();
	return bt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function u(n) {
	let e, _;
	try {
		const i = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), o = ft, c = bt.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, at(c[2]);
		return e = t, _ = r, K_(t, r);
	} finally {
		bt.__wbindgen_free(e, _, 1);
	}
}
function w(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = ot(e, bt.__wbindgen_malloc), c = ft, l = ot(_, bt.__wbindgen_malloc), a = ft, s = bt.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw at(s[2]);
	var u = X_(s[0], s[1]).slice();
	return bt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function g(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = ot(e, bt.__wbindgen_malloc), c = ft, l = ot(_, bt.__wbindgen_malloc), a = ft, s = bt.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw at(s[2]);
	var u = X_(s[0], s[1]).slice();
	return bt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function b(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = ot(e, bt.__wbindgen_malloc), c = ft, l = ot(_, bt.__wbindgen_malloc), a = ft, s = bt.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw at(s[2]);
	var u = X_(s[0], s[1]).slice();
	return bt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function f(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = ot(e, bt.__wbindgen_malloc), c = ft;
	return bt.clippedUnionHours(r, i, o, c, _, t);
}
function d(n, e) {
	const _ = bt.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw at(_[1]);
	return at(_[0]);
}
function m(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = ot(e, bt.__wbindgen_malloc), c = ft, l = ot(_, bt.__wbindgen_malloc), a = ft, s = bt.computeAnglez5s(r, i, o, c, l, a, t);
	var u = L_(s[0], s[1]).slice();
	return bt.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function h(n) {
	let e, _;
	try {
		const i = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), o = ft, c = bt.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, at(c[2]);
		return e = t, _ = r, K_(t, r);
	} finally {
		bt.__wbindgen_free(e, _, 1);
	}
}
function p(n, e, _, t, r, i, o) {
	const c = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), l = ft, a = ot(e, bt.__wbindgen_malloc), s = ft, u = rt(_, bt.__wbindgen_malloc), w = ft, g = ot(t, bt.__wbindgen_malloc), b = ft, f = rt(r, bt.__wbindgen_malloc), d = ft, m = it(i, bt.__wbindgen_malloc), h = ft, p = rt(o, bt.__wbindgen_malloc), y = ft, v = bt.computeCircadianTyped(c, l, a, s, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw at(v[1]);
	return at(v[0]);
}
function y(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = ot(e, bt.__wbindgen_malloc), c = ft, l = ot(_, bt.__wbindgen_malloc), a = ft, s = bt.computeEnmo5s(r, i, o, c, l, a, t);
	var u = L_(s[0], s[1]).slice();
	return bt.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function v(n, e, _, t, r) {
	const i = ot(n, bt.__wbindgen_malloc), o = ft, c = ot(e, bt.__wbindgen_malloc), l = ft, a = ot(_, bt.__wbindgen_malloc), s = ft, u = bt.computeMimsUnit(i, o, c, l, a, s, t, r);
	if (u[2]) throw at(u[1]);
	return at(u[0]);
}
function k(n, e, _, t, r) {
	const i = ot(n, bt.__wbindgen_malloc), o = ft, c = ot(e, bt.__wbindgen_malloc), l = ft, a = ot(_, bt.__wbindgen_malloc), s = ft, u = ot(t, bt.__wbindgen_malloc), w = ft, g = bt.computeMimsUnitDataframe(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw at(g[1]);
	return at(g[0]);
}
function S(n, e, _, t, r) {
	const i = ot(n, bt.__wbindgen_malloc), o = ft, c = ot(e, bt.__wbindgen_malloc), l = ft, a = ot(_, bt.__wbindgen_malloc), s = ft, u = bt.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, r);
	if (u[2]) throw at(u[1]);
	return at(u[0]);
}
function C(n, e, _, t, r) {
	const i = ot(n, bt.__wbindgen_malloc), o = ft, c = ot(e, bt.__wbindgen_malloc), l = ft, a = ot(_, bt.__wbindgen_malloc), s = ft, u = bt.computeMimsUnitValues(i, o, c, l, a, s, t, r);
	if (u[3]) throw at(u[2]);
	var w = L_(u[0], u[1]).slice();
	return bt.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function A(n) {
	let e, _;
	try {
		const i = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), o = ft, c = bt.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, at(c[2]);
		return e = t, _ = r, K_(t, r);
	} finally {
		bt.__wbindgen_free(e, _, 1);
	}
}
function R(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, f, d, m, h) {
	const p = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), y = ft, v = ot(e, bt.__wbindgen_malloc), k = ft, S = rt(_, bt.__wbindgen_malloc), C = ft, A = ot(t, bt.__wbindgen_malloc), R = ft, x = rt(r, bt.__wbindgen_malloc), D = ft, M = it(i, bt.__wbindgen_malloc), P = ft, F = rt(o, bt.__wbindgen_malloc), I = ft, W = it(c, bt.__wbindgen_malloc), O = ft, U = rt(l, bt.__wbindgen_malloc), z = ft, G = ot(a, bt.__wbindgen_malloc), N = ft, B = rt(s, bt.__wbindgen_malloc), T = ft, j = ot(u, bt.__wbindgen_malloc), E = ft, L = rt(w, bt.__wbindgen_malloc), V = ft, H = ot(g, bt.__wbindgen_malloc), X = ft, q = rt(b, bt.__wbindgen_malloc), $ = ft, Y = ot(f, bt.__wbindgen_malloc), Z = ft, K = rt(d, bt.__wbindgen_malloc), J = ft, Q = it(m, bt.__wbindgen_malloc), nn = ft, en = rt(h, bt.__wbindgen_malloc), _n = ft, tn = bt.computeNightDifficultyTyped(p, y, v, k, S, C, A, R, x, D, M, P, F, I, W, O, U, z, G, N, B, T, j, E, L, V, H, X, q, $, Y, Z, K, J, Q, nn, en, _n);
	if (tn[2]) throw at(tn[1]);
	return at(tn[0]);
}
function x(n) {
	let e, _;
	try {
		const i = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), o = ft, c = bt.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, at(c[2]);
		return e = t, _ = r, K_(t, r);
	} finally {
		bt.__wbindgen_free(e, _, 1);
	}
}
function D(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, f, d, m, h) {
	const p = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), y = ft, v = ot(e, bt.__wbindgen_malloc), k = ft, S = rt(_, bt.__wbindgen_malloc), C = ft, A = ot(t, bt.__wbindgen_malloc), R = ft, x = rt(r, bt.__wbindgen_malloc), D = ft, M = it(i, bt.__wbindgen_malloc), P = ft, F = rt(o, bt.__wbindgen_malloc), I = ft, W = it(c, bt.__wbindgen_malloc), O = ft, U = rt(l, bt.__wbindgen_malloc), z = ft, G = ot(a, bt.__wbindgen_malloc), N = ft, B = rt(s, bt.__wbindgen_malloc), T = ft, j = ot(u, bt.__wbindgen_malloc), E = ft, L = rt(w, bt.__wbindgen_malloc), V = ft, H = ot(g, bt.__wbindgen_malloc), X = ft, q = rt(b, bt.__wbindgen_malloc), $ = ft, Y = ot(f, bt.__wbindgen_malloc), Z = ft, K = rt(d, bt.__wbindgen_malloc), J = ft, Q = it(m, bt.__wbindgen_malloc), nn = ft, en = rt(h, bt.__wbindgen_malloc), _n = ft, tn = bt.computeNightSignalsTyped(p, y, v, k, S, C, A, R, x, D, M, P, F, I, W, O, U, z, G, N, B, T, j, E, L, V, H, X, q, $, Y, Z, K, J, Q, nn, en, _n);
	if (tn[2]) throw at(tn[1]);
	return at(tn[0]);
}
function M(n, e, _) {
	const t = it(n, bt.__wbindgen_malloc), r = ft, i = ot(e, bt.__wbindgen_malloc), o = ft, c = bt.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw at(c[1]);
	return at(c[0]);
}
function P(n) {
	const e = bt.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function F(n) {
	const e = bt.consensusDisagreementDetail(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function I(n) {
	const e = bt.consensusDisagreements(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function W(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft;
	bt.csvBufferAppend(e, _);
}
function O(n) {
	bt.csvBufferClear(n);
}
function U(n, e) {
	const _ = bt.cutpointEpochCompatibility(n, e);
	if (_[2]) throw at(_[1]);
	return at(_[0]);
}
function z(n, e, _, t, r) {
	const i = ot(n, bt.__wbindgen_malloc), o = ft, c = bt.cutpointToneCodes(i, o, e, _, t, r);
	var l = X_(c[0], c[1]).slice();
	return bt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function G(n, e, _, t) {
	const r = bt.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = K_(r[0], r[1]).slice(), bt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function N(n, e, _, t) {
	return 0 !== bt.cutpointsValid(n, e, _, t);
}
function B(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = rt(e, bt.__wbindgen_malloc), i = ft, o = bt.describeColumns(_, t, r, i);
	if (o[2]) throw at(o[1]);
	return at(o[0]);
}
function T(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = ot(e, bt.__wbindgen_malloc), i = ft, o = bt.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw at(o[2]);
	var c = X_(o[0], o[1]).slice();
	return bt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function j(n, e) {
	let _, t;
	try {
		const r = it(n, bt.__wbindgen_malloc), i = ft, o = lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), c = ft, l = bt.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], K_(l[0], l[1]);
	} finally {
		bt.__wbindgen_free(_, t, 1);
	}
}
function E(n) {
	const e = bt.detectGgirHasptVariant(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function L(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft;
	var o = tt(e) ? 0 : lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), c = ft, l = tt(_) ? 0 : ot(_, bt.__wbindgen_malloc), a = ft, s = tt(t) ? 0 : ot(t, bt.__wbindgen_malloc), u = ft;
	return bt.detectHdcza(r, i, o, c, l, a, s, u);
}
function V(n) {
	const e = ot(n, bt.__wbindgen_malloc), _ = ft;
	return 0 !== bt.detectHourClockJumpMs(e, _);
}
function H(n) {
	const e = ot(n, bt.__wbindgen_malloc), _ = ft, t = bt.detectNonwear(e, _);
	var r = X_(t[0], t[1]).slice();
	return bt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function X(n) {
	const e = ot(n, bt.__wbindgen_malloc), _ = ft, t = bt.detectNonwearChoi2011(e, _);
	var r = X_(t[0], t[1]).slice();
	return bt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function q(n) {
	const e = ot(n, bt.__wbindgen_malloc), _ = ft, t = bt.detectNonwearChoi2011Bouts(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function $(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = bt.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw at(r[2]);
	var i = X_(r[0], r[1]).slice();
	return bt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Y(n) {
	const e = ot(n, bt.__wbindgen_malloc), _ = ft, t = bt.detectNonwearChoi2012(e, _);
	var r = X_(t[0], t[1]).slice();
	return bt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Z(n) {
	const e = ot(n, bt.__wbindgen_malloc), _ = ft, t = bt.detectNonwearChoi2012Bouts(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function K(n) {
	const e = ot(n, bt.__wbindgen_malloc), _ = ft, t = bt.detectNonwearChoiBouts(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function J(n) {
	let e, _;
	try {
		const i = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), o = ft, c = bt.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, at(c[2]);
		return e = t, _ = r, K_(t, r);
	} finally {
		bt.__wbindgen_free(e, _, 1);
	}
}
function Q(n, e, _, t, r, i, o) {
	const c = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), l = ft, a = lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), s = ft, u = ot(_, bt.__wbindgen_malloc), w = ft, g = ot(t, bt.__wbindgen_malloc), b = ft, f = ot(r, bt.__wbindgen_malloc), d = ft, m = bt.detectNonwearUnifiedBatchTyped(c, l, a, s, u, w, g, b, f, d, i, o);
	if (m[2]) throw at(m[1]);
	return at(m[0]);
}
function nn(n, e, _) {
	const t = bt.dstPlaceholderRuns(n, e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function en(n, e, _, t) {
	const r = bt.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = L_(r[0], r[1]).slice(), bt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function _n(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = ot(e, bt.__wbindgen_malloc), i = ft, o = bt.epochAgreement(_, t, r, i);
	if (o[2]) throw at(o[1]);
	return at(o[0]);
}
function tn(n, e, _, t, r) {
	const i = ot(n, bt.__wbindgen_malloc), o = ft, c = ot(e, bt.__wbindgen_malloc), l = ft, a = ot(_, bt.__wbindgen_malloc), s = ft, u = ot(t, bt.__wbindgen_malloc), w = ft, g = bt.epochRawData(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw at(g[1]);
	return at(g[0]);
}
function rn(n, e, _) {
	const t = ot(n, bt.__wbindgen_malloc), r = ft, i = ot(e, bt.__wbindgen_malloc), o = ft, c = bt.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw at(c[1]);
	return at(c[0]);
}
function on(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = bt.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = H_(o[0], o[1]).slice(), bt.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function cn(n, e) {
	let _, t;
	try {
		const o = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), c = ft, l = lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), a = ft, s = bt.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, at(s[2]);
		return _ = r, t = i, K_(r, i);
	} finally {
		bt.__wbindgen_free(_, t, 1);
	}
}
function ln(n) {
	const e = bt.exportNapAggregate(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function an(n, e, _) {
	const t = bt.exportPeriodFigures(!tt(n), tt(n) ? 0 : n, !tt(e), tt(e) ? 0 : e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function sn(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft, t = bt.extractCapsense(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function un(n, e, _, t, r) {
	const i = ot(n, bt.__wbindgen_malloc), o = ft, c = ot(e, bt.__wbindgen_malloc), l = ft, a = ot(_, bt.__wbindgen_malloc), s = ft, u = lt(r, bt.__wbindgen_malloc, bt.__wbindgen_realloc), w = ft, g = bt.foldOntoGrid(i, o, c, l, a, s, t, u, w);
	if (g[3]) throw at(g[2]);
	var b = L_(g[0], g[1]).slice();
	return bt.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function wn(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = lt(t, bt.__wbindgen_malloc, bt.__wbindgen_realloc), c = ft, l = bt.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw at(l[2]);
	var a = L_(l[0], l[1]).slice();
	return bt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function gn(n, e, _, t, r) {
	const i = it(_, bt.__wbindgen_malloc), o = ft, c = ot(t, bt.__wbindgen_malloc), l = ft, a = bt.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw at(a[1]);
	return at(a[0]);
}
function bn(n, e, _, t, r, i) {
	const o = ot(_, bt.__wbindgen_malloc), c = ft, l = ot(t, bt.__wbindgen_malloc), a = ft, s = lt(i, bt.__wbindgen_malloc, bt.__wbindgen_realloc), u = ft, w = bt.foldUniformOntoGrid(n, e, o, c, l, a, r, s, u);
	if (w[3]) throw at(w[2]);
	var g = L_(w[0], w[1]).slice();
	return bt.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function fn(n) {
	const e = bt.fuseNonwearMasks(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function dn(n, e) {
	const _ = bt.generateActiwareRestIntervals(n, e);
	if (_[2]) throw at(_[1]);
	return at(_[0]);
}
function mn() {
	const n = bt.getComputeCapabilitiesV1();
	if (n[2]) throw at(n[1]);
	return at(n[0]);
}
function hn(n, e, _) {
	const t = bt.ggir5sWallClockMs(n, e, _);
	if (t[3]) throw at(t[2]);
	var r = L_(t[0], t[1]).slice();
	return bt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function pn(n) {
	const e = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), _ = ft, t = bt.ggirConfigValues(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function yn(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft;
	var r = tt(e) ? 0 : ot(e, bt.__wbindgen_malloc), i = ft;
	const o = bt.ggirDaysIncluded(_, t, r, i);
	var c = X_(o[0], o[1]).slice();
	return bt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function vn(n, e) {
	const _ = it(n, bt.__wbindgen_malloc), t = ft;
	var r = tt(e) ? 0 : lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), i = ft;
	const o = bt.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw at(o[1]);
	return at(o[0]);
}
function kn(n, e, _) {
	var t = tt(_) ? 0 : ot(_, bt.__wbindgen_malloc), r = ft;
	const i = bt.ggirDstPlaceholderCuts(n, e, t, r);
	if (i[2]) throw at(i[1]);
	return at(i[0]);
}
function Sn() {
	return bt.ggirIncludeDayCriterionHours();
}
function Cn(n, e, _, t) {
	const r = rt(n, bt.__wbindgen_malloc), i = ft;
	var o = tt(t) ? 0 : ot(t, bt.__wbindgen_malloc), c = ft;
	const l = bt.ggirIndicesToWallClockMs(r, i, e, _, o, c);
	if (l[3]) throw at(l[2]);
	var a = L_(l[0], l[1]).slice();
	return bt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function An(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = bt.ggirLabelsToStoredMs(_, t, e);
	if (r[3]) throw at(r[2]);
	var i = L_(r[0], r[1]).slice();
	return bt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Rn(n, e, _, t) {
	const r = ct(n, bt.__wbindgen_malloc), i = ft, o = ot(e, bt.__wbindgen_malloc), c = ft, l = ot(_, bt.__wbindgen_malloc), a = ft, s = ot(t, bt.__wbindgen_malloc), u = ft, w = bt.ggirManualNightClocks(r, i, o, c, l, a, s, u);
	if (w[2]) throw at(w[1]);
	return at(w[0]);
}
function xn(n, e, _, t) {
	const r = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), i = ft, o = lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), c = ft, l = lt(_, bt.__wbindgen_malloc, bt.__wbindgen_realloc), a = ft, s = bt.ggirSleeplogStoredClocks(r, i, o, c, l, a, t);
	if (s[3]) throw at(s[2]);
	let u;
	return 0 !== s[0] && (u = V_(s[0], s[1]).slice(), bt.__wbindgen_free(s[0], 4 * s[1], 4)), u;
}
function Dn(n, e) {
	return bt.ggirSptDurationHours(n, e);
}
function Mn(n, e) {
	const _ = bt.ggirSummaryDenominator(n, e);
	if (_[2]) throw at(_[1]);
	return at(_[0]);
}
function Pn(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = ot(e, bt.__wbindgen_malloc), i = ft, o = bt.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Fn(n) {
	let e, _;
	try {
		const i = it(n, bt.__wbindgen_malloc), o = ft, c = bt.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, at(c[2]);
		return e = t, _ = r, K_(t, r);
	} finally {
		bt.__wbindgen_free(e, _, 1);
	}
}
function In(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = ot(e, bt.__wbindgen_malloc), c = ft, l = ot(_, bt.__wbindgen_malloc), a = ft, s = ot(t, bt.__wbindgen_malloc), u = ft, w = bt.implausibilityReasons(r, i, o, c, l, a, s, u);
	if (w[2]) throw at(w[1]);
	return at(w[0]);
}
function Wn() {
	bt.installPanicHook();
}
function On(n) {
	const e = bt.interRaterReliability(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function Un(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = bt.irregularInternalDays(_, t, e);
	var i = V_(r[0], r[1]).slice();
	return bt.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function zn(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft;
	return 0 !== bt.isGeneactivFormat(e, _);
}
function Gn(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = ot(e, bt.__wbindgen_malloc), c = ft, l = ot(_, bt.__wbindgen_malloc), a = ft, s = bt.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw at(s[1]);
	return at(s[0]);
}
function Nn(n, e, _) {
	const t = ot(n, bt.__wbindgen_malloc), r = ft, i = bt.markerIndexRange(t, r, e, _);
	var o = H_(i[0], i[1]).slice();
	return bt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Bn(n, e, _, t, r, i, o) {
	const c = ot(n, bt.__wbindgen_malloc), l = ft, a = ot(e, bt.__wbindgen_malloc), s = ft, u = bt.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (u[2]) throw at(u[1]);
	return at(u[0]);
}
function Tn(n) {
	const e = ot(n, bt.__wbindgen_malloc), _ = ft, t = bt.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function jn(n, e, _, t) {
	const r = bt.metricWarnings(n, e, _, t);
	var i = X_(r[0], r[1]).slice();
	return bt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function En(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = ot(e, bt.__wbindgen_malloc), i = ft, o = bt.midSleepClockHours(_, t, r, i);
	var c = L_(o[0], o[1]).slice();
	return bt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Ln(n, e, _, t, r) {
	const i = ot(n, bt.__wbindgen_malloc), o = ft, c = ot(e, bt.__wbindgen_malloc), l = ft, a = ot(_, bt.__wbindgen_malloc), s = ft, u = bt.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw at(u[1]);
	return at(u[0]);
}
function Vn(n) {
	const e = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), _ = ft, t = bt.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = K_(t[0], t[1]).slice(), bt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Hn(n, e, _, t, r) {
	const i = ot(_, bt.__wbindgen_malloc), o = ft, c = ot(t, bt.__wbindgen_malloc), l = ft, a = ot(r, bt.__wbindgen_malloc), s = ft, u = bt.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (u[2]) throw at(u[1]);
	return at(u[0]);
}
function Xn(n, e, _, t) {
	let r, i;
	try {
		const l = rt(n, bt.__wbindgen_malloc), a = ft, s = lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), u = ft, w = bt.nonwearContributors(l, a, s, u, _, t);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, at(w[2]);
		return r = o, i = c, K_(o, c);
	} finally {
		bt.__wbindgen_free(r, i, 1);
	}
}
function qn(n) {
	const e = ot(n, bt.__wbindgen_malloc), _ = ft, t = bt.nonwearInSleepCounts(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function $n(n) {
	const e = bt.nonwearSleepOverlap(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function Yn(n, e, _) {
	const t = ot(n, bt.__wbindgen_malloc), r = ft, i = ot(e, bt.__wbindgen_malloc), o = ft, c = bt.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw at(c[1]);
	return at(c[0]);
}
function Zn(n, e, _, t, r, i) {
	const o = lt(r, bt.__wbindgen_malloc, bt.__wbindgen_realloc), c = ft, l = bt.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw at(l[2]);
	var a = L_(l[0], l[1]).slice();
	return bt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function Kn(n, e) {
	const _ = it(n, bt.__wbindgen_malloc), t = ft, r = bt.parseActigraphCsv(_, t, e);
	if (r[2]) throw at(r[1]);
	return at(r[0]);
}
function Jn(n) {
	const e = bt.parseActigraphCsvBuffered(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function Qn(n, e, _, t) {
	const r = it(n, bt.__wbindgen_malloc), i = ft;
	var o = tt(e) ? 0 : lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), c = ft, l = tt(t) ? 0 : lt(t, bt.__wbindgen_malloc, bt.__wbindgen_realloc), a = ft;
	const s = bt.parseAw5(r, i, o, c, tt(_) ? 0 : j_(_), l, a);
	if (s[2]) throw at(s[1]);
	return at(s[0]);
}
function ne(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft, t = bt.parseCwa(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function ee(n, e) {
	const _ = it(n, bt.__wbindgen_malloc), t = ft, r = lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), i = ft, o = bt.parseEpochSeries(_, t, r, i);
	if (o[2]) throw at(o[1]);
	return at(o[0]);
}
function _e(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft, t = bt.parseGeneactivBin(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function te(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft, t = bt.parseGeneactivCsv(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function re() {
	const n = bt.parseGeneactivCsvBuffered();
	if (n[2]) throw at(n[1]);
	return at(n[0]);
}
function ie(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft, t = bt.parseGt3x(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function oe(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = it(e, bt.__wbindgen_malloc), c = ft, l = it(_, bt.__wbindgen_malloc), a = ft, s = bt.participantValidity(r, i, o, c, l, a, t);
	if (s[2]) throw at(s[1]);
	return at(s[0]);
}
function ce(n, e, _, t, r) {
	const i = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), o = ft, c = ot(e, bt.__wbindgen_malloc), l = ft;
	var a = tt(_) ? 0 : ot(_, bt.__wbindgen_malloc), s = ft;
	const u = bt.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (u[2]) throw at(u[1]);
	return at(u[0]);
}
function le(n) {
	let e, _;
	try {
		const i = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), o = ft, c = bt.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, at(c[2]);
		return e = t, _ = r, K_(t, r);
	} finally {
		bt.__wbindgen_free(e, _, 1);
	}
}
function ae(n, e, _, t, r, i) {
	const o = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), c = ft, l = ot(e, bt.__wbindgen_malloc), a = ft, s = ot(_, bt.__wbindgen_malloc), u = ft, w = it(t, bt.__wbindgen_malloc), g = ft, b = it(r, bt.__wbindgen_malloc), f = ft, d = lt(i, bt.__wbindgen_malloc, bt.__wbindgen_realloc), m = ft, h = bt.placeMarkersBatch(o, c, l, a, s, u, w, g, b, f, d, m);
	if (h[2]) throw at(h[1]);
	return at(h[0]);
}
function se(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, f, d, m, h) {
	const p = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), y = ft, v = ot(e, bt.__wbindgen_malloc), k = ft, S = rt(_, bt.__wbindgen_malloc), C = ft, A = ot(t, bt.__wbindgen_malloc), R = ft, x = rt(r, bt.__wbindgen_malloc), D = ft, M = it(i, bt.__wbindgen_malloc), P = ft, F = rt(o, bt.__wbindgen_malloc), I = ft, W = it(c, bt.__wbindgen_malloc), O = ft, U = rt(l, bt.__wbindgen_malloc), z = ft, G = ot(a, bt.__wbindgen_malloc), N = ft, B = rt(s, bt.__wbindgen_malloc), T = ft, j = ot(u, bt.__wbindgen_malloc), E = ft, L = rt(w, bt.__wbindgen_malloc), V = ft, H = ot(g, bt.__wbindgen_malloc), X = ft, q = rt(b, bt.__wbindgen_malloc), $ = ft, Y = ot(f, bt.__wbindgen_malloc), Z = ft, K = rt(d, bt.__wbindgen_malloc), J = ft, Q = it(m, bt.__wbindgen_malloc), nn = ft, en = rt(h, bt.__wbindgen_malloc), _n = ft, tn = bt.placeMarkersTyped(p, y, v, k, S, C, A, R, x, D, M, P, F, I, W, O, U, z, G, N, B, T, j, E, L, V, H, X, q, $, Y, Z, K, J, Q, nn, en, _n);
	if (tn[2]) throw at(tn[1]);
	return at(tn[0]);
}
function ue(n) {
	let e, _;
	try {
		const i = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), o = ft, c = bt.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, at(c[2]);
		return e = t, _ = r, K_(t, r);
	} finally {
		bt.__wbindgen_free(e, _, 1);
	}
}
function we(n, e, _, t) {
	const r = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), i = ft, o = ot(e, bt.__wbindgen_malloc), c = ft, l = ot(_, bt.__wbindgen_malloc), a = ft, s = it(t, bt.__wbindgen_malloc), u = ft, w = bt.placeNonwearMarkersTyped(r, i, o, c, l, a, s, u);
	if (w[2]) throw at(w[1]);
	return at(w[0]);
}
function ge(n) {
	const e = bt.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function be(n) {
	const e = bt.prepareCompactPipelineV1(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function fe(n, e, _, t, r, i, o) {
	const c = ot(n, bt.__wbindgen_malloc), l = ft, a = ot(e, bt.__wbindgen_malloc), s = ft, u = ot(_, bt.__wbindgen_malloc), w = ft, g = ot(t, bt.__wbindgen_malloc), b = ft;
	var f = tt(o) ? 0 : lt(o, bt.__wbindgen_malloc, bt.__wbindgen_realloc), d = ft;
	const m = bt.processGeneactivRaw(c, l, a, s, u, w, g, b, r, i, f, d);
	if (m[2]) throw at(m[1]);
	return at(m[0]);
}
function de(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft, t = bt.processGt3xFull(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function me(n, e) {
	const _ = it(n, bt.__wbindgen_malloc), t = ft, r = bt.processGt3xFullWithEpoch(_, t, e);
	if (r[2]) throw at(r[1]);
	return at(r[0]);
}
function he(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft, t = bt.processGt3xPart1(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function pe(n, e) {
	const _ = it(n, bt.__wbindgen_malloc), t = ft, r = bt.processGt3xPart1WithEpoch(_, t, e);
	if (r[2]) throw at(r[1]);
	return at(r[0]);
}
function ye(n, e, _, t, r, i) {
	const o = ot(n, bt.__wbindgen_malloc), c = ft, l = ot(e, bt.__wbindgen_malloc), a = ft, s = ot(_, bt.__wbindgen_malloc), u = ft;
	var w = tt(i) ? 0 : lt(i, bt.__wbindgen_malloc, bt.__wbindgen_realloc), g = ft;
	const b = bt.processRawXyz(o, c, l, a, s, u, t, r, w, g);
	if (b[2]) throw at(b[1]);
	return at(b[0]);
}
function ve(n, e, _, t, r, i) {
	const o = ot(n, bt.__wbindgen_malloc), c = ft, l = ot(e, bt.__wbindgen_malloc), a = ft, s = ot(_, bt.__wbindgen_malloc), u = ft, w = ot(t, bt.__wbindgen_malloc), g = ft;
	var b = tt(i) ? 0 : lt(i, bt.__wbindgen_malloc, bt.__wbindgen_realloc), f = ft;
	const d = bt.processRawXyzImputed(o, c, l, a, s, u, w, g, r, b, f);
	if (d[2]) throw at(d[1]);
	return at(d[0]);
}
function ke(n, e, _, t, r, i, o) {
	const c = ot(n, bt.__wbindgen_malloc), l = ft, a = ot(e, bt.__wbindgen_malloc), s = ft, u = ot(_, bt.__wbindgen_malloc), w = ft, g = ot(t, bt.__wbindgen_malloc), b = ft;
	var f = tt(i) ? 0 : lt(i, bt.__wbindgen_malloc, bt.__wbindgen_realloc), d = ft;
	const m = bt.processRawXyzImputedWithEpoch(c, l, a, s, u, w, g, b, r, f, d, o);
	if (m[2]) throw at(m[1]);
	return at(m[0]);
}
function Se(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = it(e, bt.__wbindgen_malloc), c = ft, l = ot(t, bt.__wbindgen_malloc), a = ft, s = bt.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var u = X_(s[0], s[1]).slice();
	return bt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function Ce(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = ot(e, bt.__wbindgen_malloc), c = ft, l = ot(_, bt.__wbindgen_malloc), a = ft, s = bt.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw at(s[1]);
	return at(s[0]);
}
function Ae(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft, t = bt.readGgirMeta(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function Re() {
	return bt.recommended_chunk_size_mb() >>> 0;
}
function xe(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), i = ft, o = bt.reduceF64V1(_, t, r, i);
	if (o[2]) throw at(o[1]);
	return o[0];
}
function De(n) {
	const e = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), _ = ft, t = bt.resolveTimezone(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function Me(n, e, _) {
	const t = ot(n, bt.__wbindgen_malloc), r = ft, i = ot(e, bt.__wbindgen_malloc), o = ft, c = rt(_, bt.__wbindgen_malloc), l = ft, a = bt.restoredDstRuns(t, r, i, o, c, l);
	if (a[2]) throw at(a[1]);
	return at(a[0]);
}
function Pe(n, e, _, t, r, i, o, c, l, a, s) {
	const u = it(n, bt.__wbindgen_malloc), w = ft, g = lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), b = ft;
	var f = tt(_) ? 0 : it(_, bt.__wbindgen_malloc), d = ft, m = tt(t) ? 0 : it(t, bt.__wbindgen_malloc), h = ft, p = tt(r) ? 0 : it(r, bt.__wbindgen_malloc), y = ft, v = tt(i) ? 0 : it(i, bt.__wbindgen_malloc), k = ft, S = tt(o) ? 0 : it(o, bt.__wbindgen_malloc), C = ft, A = tt(c) ? 0 : lt(c, bt.__wbindgen_malloc, bt.__wbindgen_realloc), R = ft, x = tt(l) ? 0 : lt(l, bt.__wbindgen_malloc, bt.__wbindgen_realloc), D = ft;
	const M = bt.reviewGgirResults(u, w, g, b, f, d, m, h, p, y, v, k, S, C, A, R, x, D, a, s);
	if (M[2]) throw at(M[1]);
	return at(M[0]);
}
function Fe(n) {
	const e = bt.reviewNonwearFile(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function Ie(n) {
	const e = bt.reviewNonwearTotals(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function We(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = bt.roundCountStorage(_, t, e);
	var i = L_(r[0], r[1]).slice();
	return bt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Oe(n) {
	const e = bt.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function Ue(n) {
	const e = bt.runCompactPipelineV1(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function ze(n, e) {
	const _ = bt.runFullPipeline(n, e);
	if (_[2]) throw at(_[1]);
	return at(_[0]);
}
function Ge(n) {
	const e = bt.runFullPipelineOutcomeV1(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function Ne(n) {
	const e = bt.runFullPipelineV1(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function Be(n, e) {
	const _ = bt.runGgirFromEpoch(n, e);
	if (_[2]) throw at(_[1]);
	return at(_[0]);
}
function Te(n) {
	const e = bt.runGgirPart3(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function je(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft, t = bt.runMilestone(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function Ee(n) {
	const e = bt.scoreAllDays(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function Le(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = bt.scoreColeKripke(_, t, e);
	var i = X_(r[0], r[1]).slice();
	return bt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Ve(n) {
	let e, _;
	try {
		const i = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), o = ft, c = bt.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, at(c[2]);
		return e = t, _ = r, K_(t, r);
	} finally {
		bt.__wbindgen_free(e, _, 1);
	}
}
function He(n) {
	const e = bt.scoreConsensusMajority(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function Xe(n, e, _) {
	const t = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), r = ft, i = it(e, bt.__wbindgen_malloc), o = ft, c = rt(_, bt.__wbindgen_malloc), l = ft, a = bt.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw at(a[1]);
	return at(a[0]);
}
function qe(n) {
	let e, _;
	try {
		const i = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), o = ft, c = bt.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, at(c[2]);
		return e = t, _ = r, K_(t, r);
	} finally {
		bt.__wbindgen_free(e, _, 1);
	}
}
function $e(n, e, _, t, r, i) {
	const o = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), c = ft, l = ot(e, bt.__wbindgen_malloc), a = ft, s = ot(_, bt.__wbindgen_malloc), u = ft, w = ot(t, bt.__wbindgen_malloc), g = ft, b = bt.scoreEpochsTyped(o, c, l, a, s, u, w, g, r, i);
	if (b[2]) throw at(b[1]);
	return at(b[0]);
}
function Ye(n) {
	const e = ot(n, bt.__wbindgen_malloc), _ = ft, t = bt.scoreGgirHasib(e, _);
	var r = X_(t[0], t[1]).slice();
	return bt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Ze(n) {
	const e = bt.scoreGgirHasibVariant(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function Ke(n, e, _) {
	const t = ot(n, bt.__wbindgen_malloc), r = ft, i = ot(e, bt.__wbindgen_malloc), o = ft, c = bt.scoreGgirSib(t, r, i, o, _);
	if (c[2]) throw at(c[1]);
	return at(c[0]);
}
function Je(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = bt.scoreSadeh(_, t, e);
	var i = X_(r[0], r[1]).slice();
	return bt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Qe(n) {
	const e = bt.settleManualNonwearNights(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function n_(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft, t = bt.sha256StreamFeed(e, _);
	if (t[1]) throw at(t[0]);
}
function e_() {
	let n, e;
	try {
		const r = bt.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, at(r[2]);
		return n = _, e = t, K_(_, t);
	} finally {
		bt.__wbindgen_free(n, e, 1);
	}
}
function __() {
	bt.sha256StreamStart();
}
function t_(n, e) {
	const _ = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), t = ft, r = bt.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = K_(r[0], r[1]).slice(), bt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function r_(n, e, _, t, r) {
	const i = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), o = ft, c = ot(e, bt.__wbindgen_malloc), l = ft, a = rt(_, bt.__wbindgen_malloc), s = ft, u = ot(t, bt.__wbindgen_malloc), w = ft, g = rt(r, bt.__wbindgen_malloc), b = ft, f = bt.sleepRegularityIndex(i, o, c, l, a, s, u, w, g, b);
	if (f[3]) throw at(f[2]);
	return 0 === f[0] ? void 0 : f[1];
}
function i_(n, e) {
	const _ = bt.sleepWakeScores(n, e);
	if (_[2]) throw at(_[1]);
	return at(_[0]);
}
function o_(n) {
	const e = ct(n, bt.__wbindgen_malloc), _ = ft, t = bt.sourceLabelsWallClockMs(e, _);
	var r = L_(t[0], t[1]).slice();
	return bt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function c_(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = ot(e, bt.__wbindgen_malloc), c = ft, l = bt.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function l_(n, e, _) {
	const t = ot(n, bt.__wbindgen_malloc), r = ft, i = ot(_, bt.__wbindgen_malloc), o = ft, c = bt.spliceDstPlaceholders(t, r, e, i, o);
	if (c[3]) throw at(c[2]);
	let l;
	return 0 !== c[0] && (l = L_(c[0], c[1]).slice(), bt.__wbindgen_free(c[0], 8 * c[1], 8)), l;
}
function a_(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = it(e, bt.__wbindgen_malloc), c = ft, l = ot(_, bt.__wbindgen_malloc), a = ft, s = ot(t, bt.__wbindgen_malloc), u = ft, w = bt.statesInPeriods(r, i, o, c, l, a, s, u);
	var g = X_(w[0], w[1]).slice();
	return bt.__wbindgen_free(w[0], 1 * w[1], 1), g;
}
function s_(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = bt.storedToGgirLabelsMs(_, t, e);
	if (r[3]) throw at(r[2]);
	var i = L_(r[0], r[1]).slice();
	return bt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function u_(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft, t = bt.streamParseFeed(e, _);
	if (t[2]) throw at(t[1]);
	return t[0] >>> 0;
}
function w_() {
	const n = bt.streamParseFinish();
	if (n[2]) throw at(n[1]);
	return _.__wrap(n[0]);
}
function g_() {
	const n = bt.streamParseFinishChunk();
	if (n[2]) throw at(n[1]);
	return e.__wrap(n[0]);
}
function b_(n) {
	const _ = bt.streamParseFinishChunkWithProgress(n);
	if (_[2]) throw at(_[1]);
	return e.__wrap(_[0]);
}
function f_(n, e) {
	const _ = bt.streamParseStart(n, e);
	if (_[1]) throw at(_[0]);
}
function d_(n, e) {
	const _ = bt.streamParseStartData(n, e);
	if (_[1]) throw at(_[0]);
}
function m_(n, e, _) {
	const t = bt.streamParseStartWithEpoch(n, e, _);
	if (t[1]) throw at(t[0]);
}
function h_(n, e) {
	const _ = it(n, bt.__wbindgen_malloc), t = ft, r = bt.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw at(r[1]);
	return at(r[0]);
}
function p_(n) {
	const e = bt.summarizeExportGroups(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function y_(n) {
	const e = bt.summarizePhysicalActivityDays(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function v_(n) {
	const e = bt.summarizePhysicalActivityTrace(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function k_(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = bt.thresholdProbabilities(_, t, e);
	var i = X_(r[0], r[1]).slice();
	return bt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function S_(n) {
	const e = bt.timeSemantics(n);
	if (e[2]) throw at(e[1]);
	return at(e[0]);
}
function C_(n, e, _) {
	const t = ot(n, bt.__wbindgen_malloc), r = ft, i = bt.timestampDiscontinuities(t, r, e, _);
	if (i[2]) throw at(i[1]);
	return at(i[0]);
}
function A_(n, e, _) {
	const t = bt.uniformTimestamps(n, e, _);
	var r = L_(t[0], t[1]).slice();
	return bt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function R_(n, e) {
	const _ = bt.utcDatesInSpan(n, e);
	var t = V_(_[0], _[1]).slice();
	return bt.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function x_(n) {
	const e = ot(n, bt.__wbindgen_malloc), _ = ft, t = bt.utcDayIndex(e, _);
	if (t[2]) throw at(t[1]);
	return at(t[0]);
}
function D_(n) {
	const e = it(n, bt.__wbindgen_malloc), _ = ft, t = bt.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function M_(n, e) {
	const _ = ot(n, bt.__wbindgen_malloc), t = ft, r = bt.validWearDays(_, t, e);
	if (r[3]) throw at(r[2]);
	var i = X_(r[0], r[1]).slice();
	return bt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function P_(n, e, _) {
	const t = ot(n, bt.__wbindgen_malloc), r = ft, i = bt.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw at(i[1]);
	return at(i[0]);
}
function F_(n) {
	const e = ot(n, bt.__wbindgen_malloc), _ = ft, t = bt.wallClockLabels(e, _);
	var r = V_(t[0], t[1]).slice();
	return bt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function I_(n, e, _) {
	const t = it(n, bt.__wbindgen_malloc), r = ft, i = bt.wallMaskOntoGgirGrid(t, r, e, _);
	if (i[3]) throw at(i[2]);
	var o = X_(i[0], i[1]).slice();
	return bt.__wbindgen_free(i[0], 1 * i[1], 1), o;
}
function W_(n, e) {
	const _ = lt(n, bt.__wbindgen_malloc, bt.__wbindgen_realloc), t = ft;
	var r = tt(e) ? 0 : lt(e, bt.__wbindgen_malloc, bt.__wbindgen_realloc), i = ft;
	const o = bt.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw at(o[1]);
	return at(o[0]);
}
function O_(n) {
	const e = ct(n, bt.__wbindgen_malloc), _ = ft, t = bt.weekendDates(e, _);
	var r = X_(t[0], t[1]).slice();
	return bt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function U_(n, e, _, t) {
	const r = ot(n, bt.__wbindgen_malloc), i = ft, o = bt.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function z_(n, e, _, t, r) {
	const i = ot(n, bt.__wbindgen_malloc), o = ft, c = ot(e, bt.__wbindgen_malloc), l = ft, a = ot(_, bt.__wbindgen_malloc), s = ft, u = bt.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw at(u[1]);
	return at(u[0]);
}
function G_() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(K_(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = lt(String(e), bt.__wbindgen_malloc, bt.__wbindgen_realloc), t = ft;
				$_().setInt32(n + 4, t, !0), $_().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				$_().setBigInt64(n + 8, tt(_) ? BigInt(0) : _, !0), $_().setInt32(n + 0, !tt(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return tt(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = lt(E_(e), bt.__wbindgen_malloc, bt.__wbindgen_realloc), t = ft;
				$_().setInt32(n + 4, t, !0), $_().setInt32(n + 0, _, !0);
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
				$_().setFloat64(n + 8, tt(_) ? 0 : _, !0), $_().setInt32(n + 0, !tt(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = tt(_) ? 0 : lt(_, bt.__wbindgen_malloc, bt.__wbindgen_realloc), r = ft;
				$_().setInt32(n + 4, r, !0), $_().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(K_(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return _t(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return _t(function(n, e, _, t) {
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
					_ = n, t = e, console.error(K_(n, e));
				} finally {
					bt.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return _t(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return _t(function(n, e) {
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
				return new Uint32Array(H_(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(L_(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(X_(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return _t(function(n) {
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
				return _t(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(X_(n, e), _);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return _t(function(n, e, _) {
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
				const _ = lt(e.stack, bt.__wbindgen_malloc, bt.__wbindgen_realloc), t = ft;
				$_().setInt32(n + 4, t, !0), $_().setInt32(n + 0, _, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return tt(n) ? 0 : j_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return tt(n) ? 0 : j_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return tt(n) ? 0 : j_(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return tt(n) ? 0 : j_(n);
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
				return X_(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return K_(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = bt.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
const N_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => bt.__wbg_aw5batch_free(n >>> 0, 1)), B_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => bt.__wbg_streamchunkresult_free(n >>> 0, 1)), T_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => bt.__wbg_streamparseresult_free(n >>> 0, 1));
function j_(n) {
	const e = bt.__externref_table_alloc();
	return bt.__wbindgen_externrefs.set(e, n), e;
}
function E_(n) {
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
		e > 0 && (_ += E_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + E_(n[t]);
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
function L_(n, e) {
	return n >>>= 0, Z_().subarray(n / 8, n / 8 + e);
}
function V_(n, e) {
	n >>>= 0;
	const _ = $_(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(bt.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return bt.__externref_drop_slice(n, e), t;
}
function H_(n, e) {
	return n >>>= 0, Q_().subarray(n / 4, n / 4 + e);
}
function X_(n, e) {
	return n >>>= 0, et().subarray(n / 1, n / 1 + e);
}
let q_ = null;
function $_() {
	return (null === q_ || !0 === q_.buffer.detached || void 0 === q_.buffer.detached && q_.buffer !== bt.memory.buffer) && (q_ = new DataView(bt.memory.buffer)), q_;
}
let Y_ = null;
function Z_() {
	return null !== Y_ && 0 !== Y_.byteLength || (Y_ = new Float64Array(bt.memory.buffer)), Y_;
}
function K_(n, e) {
	return function(n, e) {
		return wt += e, wt >= ut && (st = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), st.decode(), wt = e), st.decode(et().subarray(n, n + e));
	}(n >>>= 0, e);
}
let J_ = null;
function Q_() {
	return null !== J_ && 0 !== J_.byteLength || (J_ = new Uint32Array(bt.memory.buffer)), J_;
}
let nt = null;
function et() {
	return null !== nt && 0 !== nt.byteLength || (nt = new Uint8Array(bt.memory.buffer)), nt;
}
function _t(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = j_(_);
		bt.__wbindgen_exn_store(n);
	}
}
function tt(n) {
	return null == n;
}
function rt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return Q_().set(n, _ / 4), ft = n.length, _;
}
function it(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return et().set(n, _ / 1), ft = n.length, _;
}
function ot(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return Z_().set(n, _ / 8), ft = n.length, _;
}
function ct(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = j_(n[t]);
		$_().setUint32(_ + 4 * t, e, !0);
	}
	return ft = n.length, _;
}
function lt(n, e, _) {
	if (void 0 === _) {
		const _ = gt.encode(n), t = e(_.length, 1) >>> 0;
		return et().subarray(t, t + _.length).set(_), ft = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = et();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = et().subarray(r + o, r + t);
		o += gt.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return ft = o, r;
}
function at(n) {
	const e = bt.__wbindgen_externrefs.get(n);
	return bt.__externref_table_dealloc(n), e;
}
let st = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
st.decode();
const ut = 2146435072;
let wt = 0;
const gt = new TextEncoder();
"encodeInto" in gt || (gt.encodeInto = function(n, e) {
	const _ = gt.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let bt, ft = 0;
function dt(n, e) {
	return bt = n.exports, q_ = null, Y_ = null, J_ = null, nt = null, bt.__wbindgen_start(), bt;
}
function mt(n) {
	if (void 0 !== bt) return bt;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = G_();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), dt(new WebAssembly.Instance(n, e));
}
async function ht(n) {
	if (void 0 !== bt) return bt;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-Ctos5dpW.wasm", "" + import.meta.url));
	const e = G_();
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
	return dt(_);
}
export { n as Aw5Batch, e as StreamChunkResult, _ as StreamParseResult, t as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actiwareWakeThreshold, o as actoursVersion, c as aggregateEpochSeries, l as analysisDatesOf, a as analysisWindowBounds, s as analysisWindowSlice, u as analyzePhysicalActivityDay, w as classifyActimetricPreschoolWristRf, g as classifyActimetricPreschoolWristRfLagLead, b as classifyActimetricPreschoolWristRfLagLeadCalibrated, f as clippedUnionHours, d as compareNonwearDetectorMasks, m as computeAnglez5s, h as computeCircadian, p as computeCircadianTyped, y as computeEnmo5s, v as computeMimsUnit, k as computeMimsUnitDataframe, S as computeMimsUnitTimingBreakdown, C as computeMimsUnitValues, A as computeNightDifficulty, R as computeNightDifficultyTyped, x as computeNightSignals, D as computeNightSignalsTyped, M as computeSleepMetrics, P as configureComputeMemoryBudgetV1, F as consensusDisagreementDetail, I as consensusDisagreements, W as csvBufferAppend, O as csvBufferClear, U as cutpointEpochCompatibility, z as cutpointToneCodes, G as cutpointsRefusal, N as cutpointsValid, ht as default, B as describeColumns, T as detectDetachFromAccelerationG, j as detectDeviceFormat, E as detectGgirHasptVariant, L as detectHdcza, V as detectHourClockJumpMs, H as detectNonwear, X as detectNonwearChoi2011, q as detectNonwearChoi2011Bouts, $ as detectNonwearChoi2011Epoch, Y as detectNonwearChoi2012, Z as detectNonwearChoi2012Bouts, K as detectNonwearChoiBouts, J as detectNonwearUnified, Q as detectNonwearUnifiedBatchTyped, nn as dstPlaceholderRuns, en as effectiveOverrideCutpoints, _n as epochAgreement, tn as epochRawData, rn as epochWithBandpass, on as epochsOverlapping, cn as executeHeroRuntime, ln as exportNapAggregate, an as exportPeriodFigures, sn as extractCapsense, un as foldOntoGrid, wn as foldSampleBlocks, gn as foldSleepWakeVotes, bn as foldUniformOntoGrid, fn as fuseNonwearMasks, dn as generateActiwareRestIntervals, mn as getComputeCapabilitiesV1, hn as ggir5sWallClockMs, pn as ggirConfigValues, yn as ggirDaysIncluded, vn as ggirDiaryLogShape, kn as ggirDstPlaceholderCuts, Sn as ggirIncludeDayCriterionHours, Cn as ggirIndicesToWallClockMs, An as ggirLabelsToStoredMs, Rn as ggirManualNightClocks, xn as ggirSleeplogStoredClocks, Dn as ggirSptDurationHours, Mn as ggirSummaryDenominator, Pn as gridOffsetWithin, Fn as identifyGgirRData, In as implausibilityReasons, mt as initSync, Wn as installPanicHook, On as interRaterReliability, Un as irregularInternalDays, zn as isGeneactivFormat, Gn as lstmSpectralFeatures30s, Nn as markerIndexRange, Bn as markerSleepOnsetOffset, Tn as medianGapSeconds, jn as metricWarnings, En as midSleepClockHours, Ln as neishabouriCounts, Vn as nextDate, Hn as nightIntervalOverlap, Xn as nonwearContributors, qn as nonwearInSleepCounts, $n as nonwearSleepOverlap, Yn as nonwearWeightRuns, Zn as normalizeCutpoints, Kn as parseActigraphCsv, Jn as parseActigraphCsvBuffered, Qn as parseAw5, ne as parseCwa, ee as parseEpochSeries, _e as parseGeneactivBin, te as parseGeneactivCsv, re as parseGeneactivCsvBuffered, ie as parseGt3x, oe as participantValidity, ce as physicalActivitySeriesGrid, le as placeMarkers, ae as placeMarkersBatch, se as placeMarkersTyped, ue as placeNonwearMarkers, we as placeNonwearMarkersTyped, ge as prepareCompactPipelineOutcomeV1, be as prepareCompactPipelineV1, fe as processGeneactivRaw, de as processGt3xFull, me as processGt3xFullWithEpoch, he as processGt3xPart1, pe as processGt3xPart1WithEpoch, ye as processRawXyz, ve as processRawXyzImputed, ke as processRawXyzImputedWithEpoch, Se as projectLabelsOntoGrid, Ce as rasterizePeriods, Ae as readGgirMeta, Re as recommended_chunk_size_mb, xe as reduceF64V1, De as resolveTimezone, Me as restoredDstRuns, Pe as reviewGgirResults, Fe as reviewNonwearFile, Ie as reviewNonwearTotals, We as roundCountStorage, Oe as runCompactPipelineOutcomeV1, Ue as runCompactPipelineV1, ze as runFullPipeline, Ge as runFullPipelineOutcomeV1, Ne as runFullPipelineV1, Be as runGgirFromEpoch, Te as runGgirPart3, je as runMilestone, Ee as scoreAllDays, Le as scoreColeKripke, Ve as scoreConsensus, He as scoreConsensusMajority, Xe as scoreConsensusTyped, qe as scoreEpochs, $e as scoreEpochsTyped, Ye as scoreGgirHasib, Ze as scoreGgirHasibVariant, Ke as scoreGgirSib, Je as scoreSadeh, Qe as settleManualNonwearNights, n_ as sha256StreamFeed, e_ as sha256StreamFinish, __ as sha256StreamStart, t_ as shiftDate, r_ as sleepRegularityIndex, i_ as sleepWakeScores, o_ as sourceLabelsWallClockMs, c_ as spanFiniteMean, l_ as spliceDstPlaceholders, a_ as statesInPeriods, s_ as storedToGgirLabelsMs, u_ as streamParseFeed, w_ as streamParseFinish, g_ as streamParseFinishChunk, b_ as streamParseFinishChunkWithProgress, f_ as streamParseStart, d_ as streamParseStartData, m_ as streamParseStartWithEpoch, h_ as summarizeActimetricPreschoolWristRfClasses, p_ as summarizeExportGroups, y_ as summarizePhysicalActivityDays, v_ as summarizePhysicalActivityTrace, k_ as thresholdProbabilities, S_ as timeSemantics, C_ as timestampDiscontinuities, A_ as uniformTimestamps, R_ as utcDatesInSpan, x_ as utcDayIndex, D_ as validStateFraction, M_ as validWearDays, P_ as wallClockDstPlaceholders, F_ as wallClockLabels, I_ as wallMaskOntoGgirGrid, W_ as wearSiteHasptRouting, O_ as weekendDates, U_ as windowCoverage, z_ as zeroCrossingCounts };
