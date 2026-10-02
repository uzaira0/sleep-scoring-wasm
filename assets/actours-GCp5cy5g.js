var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, T_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		ft.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = ft.aw5batch_new(n);
		if (e[2]) throw ut(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, T_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), r = mt;
		var i = it(_) ? 0 : st(_, ft.__wbindgen_malloc, ft.__wbindgen_realloc), o = mt;
		const c = ft.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw ut(c[1]);
		return ut(c[0]);
	}
	subjects(n) {
		const e = ft.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw ut(e[1]);
		return ut(e[0]);
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
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
		ft.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = ft.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = ft.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = ft.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = ft.streamchunkresult_axisX(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ft.streamchunkresult_axisY(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ft.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ft.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ft.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Q_(n[0], n[1]).slice(), ft.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = ft.streamchunkresult_counts(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = ft.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = ft.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = ft.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = ft.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = ft.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = $_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return ft.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = ft.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = ft.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== ft.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = ft.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Q_(n[0], n[1]).slice(), ft.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = ft.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = ft.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = ft.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== ft.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ft.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return ft.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ft.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = ft.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = q_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = ft.streamchunkresult_temperature(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ft.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = ft.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ft.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = ft.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = ft.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = ft.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
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
		ft.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = ft.streamparseresult_axisX(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ft.streamparseresult_axisY(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ft.streamparseresult_axisZ(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ft.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ft.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Q_(n[0], n[1]).slice(), ft.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return ft.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== ft.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ft.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ft.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = ft.streamparseresult_temperature(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ft.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ft.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = H_(n[0], n[1]).slice();
		return ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n) {
	const e = ft.actiwareIntervalStatistics(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function r(n, e, _) {
	const t = ft.actiwareSleepIntervals(n, e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function i(n, e) {
	const _ = ft.actiwareWakeThreshold(n, e);
	if (_[3]) throw ut(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function o() {
	let n, e;
	try {
		const _ = ft.actoursVersion();
		return n = _[0], e = _[1], Q_(_[0], _[1]);
	} finally {
		ft.__wbindgen_free(n, e, 1);
	}
}
function c(n) {
	const e = ft.aggregateEpochSeries(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function l(n) {
	const e = lt(n, ft.__wbindgen_malloc), _ = mt, t = ft.analysisDatesOf(e, _);
	var r = X_(t[0], t[1]).slice();
	return ft.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function a(n, e) {
	const _ = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), t = mt, r = ft.analysisWindowBounds(_, t, !it(e), it(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = H_(r[0], r[1]).slice(), ft.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function s(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), i = mt, o = ft.analysisWindowSlice(_, t, r, i);
	var c = q_(o[0], o[1]).slice();
	return ft.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function u(n) {
	let e, _;
	try {
		const i = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), o = mt, c = ft.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ut(c[2]);
		return e = t, _ = r, Q_(t, r);
	} finally {
		ft.__wbindgen_free(e, _, 1);
	}
}
function w(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = lt(e, ft.__wbindgen_malloc), c = mt, l = lt(_, ft.__wbindgen_malloc), a = mt, s = ft.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw ut(s[2]);
	var u = $_(s[0], s[1]).slice();
	return ft.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function g(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = lt(e, ft.__wbindgen_malloc), c = mt, l = lt(_, ft.__wbindgen_malloc), a = mt, s = ft.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw ut(s[2]);
	var u = $_(s[0], s[1]).slice();
	return ft.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function b(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = lt(e, ft.__wbindgen_malloc), c = mt, l = lt(_, ft.__wbindgen_malloc), a = mt, s = ft.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw ut(s[2]);
	var u = $_(s[0], s[1]).slice();
	return ft.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function d(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = lt(e, ft.__wbindgen_malloc), c = mt;
	return ft.clippedUnionHours(r, i, o, c, _, t);
}
function f(n, e) {
	const _ = ft.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw ut(_[1]);
	return ut(_[0]);
}
function m(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = lt(e, ft.__wbindgen_malloc), c = mt, l = lt(_, ft.__wbindgen_malloc), a = mt, s = ft.computeAnglez5s(r, i, o, c, l, a, t);
	var u = H_(s[0], s[1]).slice();
	return ft.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function h(n) {
	let e, _;
	try {
		const i = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), o = mt, c = ft.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ut(c[2]);
		return e = t, _ = r, Q_(t, r);
	} finally {
		ft.__wbindgen_free(e, _, 1);
	}
}
function p(n, e, _, t, r, i, o) {
	const c = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), l = mt, a = lt(e, ft.__wbindgen_malloc), s = mt, u = ot(_, ft.__wbindgen_malloc), w = mt, g = lt(t, ft.__wbindgen_malloc), b = mt, d = ot(r, ft.__wbindgen_malloc), f = mt, m = ct(i, ft.__wbindgen_malloc), h = mt, p = ot(o, ft.__wbindgen_malloc), y = mt, v = ft.computeCircadianTyped(c, l, a, s, u, w, g, b, d, f, m, h, p, y);
	if (v[2]) throw ut(v[1]);
	return ut(v[0]);
}
function y(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = lt(e, ft.__wbindgen_malloc), c = mt, l = lt(_, ft.__wbindgen_malloc), a = mt, s = ft.computeEnmo5s(r, i, o, c, l, a, t);
	var u = H_(s[0], s[1]).slice();
	return ft.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function v(n, e, _, t, r) {
	const i = lt(n, ft.__wbindgen_malloc), o = mt, c = lt(e, ft.__wbindgen_malloc), l = mt, a = lt(_, ft.__wbindgen_malloc), s = mt, u = ft.computeMimsUnit(i, o, c, l, a, s, t, r);
	if (u[2]) throw ut(u[1]);
	return ut(u[0]);
}
function k(n, e, _, t, r) {
	const i = lt(n, ft.__wbindgen_malloc), o = mt, c = lt(e, ft.__wbindgen_malloc), l = mt, a = lt(_, ft.__wbindgen_malloc), s = mt, u = lt(t, ft.__wbindgen_malloc), w = mt, g = ft.computeMimsUnitDataframe(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw ut(g[1]);
	return ut(g[0]);
}
function S(n, e, _, t, r) {
	const i = lt(n, ft.__wbindgen_malloc), o = mt, c = lt(e, ft.__wbindgen_malloc), l = mt, a = lt(_, ft.__wbindgen_malloc), s = mt, u = ft.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, r);
	if (u[2]) throw ut(u[1]);
	return ut(u[0]);
}
function C(n, e, _, t, r) {
	const i = lt(n, ft.__wbindgen_malloc), o = mt, c = lt(e, ft.__wbindgen_malloc), l = mt, a = lt(_, ft.__wbindgen_malloc), s = mt, u = ft.computeMimsUnitValues(i, o, c, l, a, s, t, r);
	if (u[3]) throw ut(u[2]);
	var w = H_(u[0], u[1]).slice();
	return ft.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function A(n) {
	let e, _;
	try {
		const i = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), o = mt, c = ft.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ut(c[2]);
		return e = t, _ = r, Q_(t, r);
	} finally {
		ft.__wbindgen_free(e, _, 1);
	}
}
function R(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), y = mt, v = lt(e, ft.__wbindgen_malloc), k = mt, S = ot(_, ft.__wbindgen_malloc), C = mt, A = lt(t, ft.__wbindgen_malloc), R = mt, x = ot(r, ft.__wbindgen_malloc), D = mt, M = ct(i, ft.__wbindgen_malloc), P = mt, I = ot(o, ft.__wbindgen_malloc), F = mt, W = ct(c, ft.__wbindgen_malloc), O = mt, U = ot(l, ft.__wbindgen_malloc), z = mt, G = lt(a, ft.__wbindgen_malloc), N = mt, B = ot(s, ft.__wbindgen_malloc), T = mt, j = lt(u, ft.__wbindgen_malloc), E = mt, L = ot(w, ft.__wbindgen_malloc), V = mt, H = lt(g, ft.__wbindgen_malloc), X = mt, q = ot(b, ft.__wbindgen_malloc), $ = mt, Y = lt(d, ft.__wbindgen_malloc), Z = mt, K = ot(f, ft.__wbindgen_malloc), J = mt, Q = ct(m, ft.__wbindgen_malloc), nn = mt, en = ot(h, ft.__wbindgen_malloc), _n = mt, tn = ft.computeNightDifficultyTyped(p, y, v, k, S, C, A, R, x, D, M, P, I, F, W, O, U, z, G, N, B, T, j, E, L, V, H, X, q, $, Y, Z, K, J, Q, nn, en, _n);
	if (tn[2]) throw ut(tn[1]);
	return ut(tn[0]);
}
function x(n) {
	let e, _;
	try {
		const i = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), o = mt, c = ft.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ut(c[2]);
		return e = t, _ = r, Q_(t, r);
	} finally {
		ft.__wbindgen_free(e, _, 1);
	}
}
function D(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), y = mt, v = lt(e, ft.__wbindgen_malloc), k = mt, S = ot(_, ft.__wbindgen_malloc), C = mt, A = lt(t, ft.__wbindgen_malloc), R = mt, x = ot(r, ft.__wbindgen_malloc), D = mt, M = ct(i, ft.__wbindgen_malloc), P = mt, I = ot(o, ft.__wbindgen_malloc), F = mt, W = ct(c, ft.__wbindgen_malloc), O = mt, U = ot(l, ft.__wbindgen_malloc), z = mt, G = lt(a, ft.__wbindgen_malloc), N = mt, B = ot(s, ft.__wbindgen_malloc), T = mt, j = lt(u, ft.__wbindgen_malloc), E = mt, L = ot(w, ft.__wbindgen_malloc), V = mt, H = lt(g, ft.__wbindgen_malloc), X = mt, q = ot(b, ft.__wbindgen_malloc), $ = mt, Y = lt(d, ft.__wbindgen_malloc), Z = mt, K = ot(f, ft.__wbindgen_malloc), J = mt, Q = ct(m, ft.__wbindgen_malloc), nn = mt, en = ot(h, ft.__wbindgen_malloc), _n = mt, tn = ft.computeNightSignalsTyped(p, y, v, k, S, C, A, R, x, D, M, P, I, F, W, O, U, z, G, N, B, T, j, E, L, V, H, X, q, $, Y, Z, K, J, Q, nn, en, _n);
	if (tn[2]) throw ut(tn[1]);
	return ut(tn[0]);
}
function M(n, e, _) {
	const t = ct(n, ft.__wbindgen_malloc), r = mt, i = lt(e, ft.__wbindgen_malloc), o = mt, c = ft.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw ut(c[1]);
	return ut(c[0]);
}
function P(n) {
	const e = ft.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function I(n) {
	const e = ft.consensusDisagreementDetail(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function F(n) {
	const e = ft.consensusDisagreements(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function W(n) {
	const e = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), _ = mt, t = ft.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function O(n) {
	const e = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), _ = mt, t = ft.convertScreensRedcapDiary(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function U(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt;
	ft.csvBufferAppend(e, _);
}
function z(n) {
	ft.csvBufferClear(n);
}
function G(n, e) {
	const _ = ft.cutpointEpochCompatibility(n, e);
	if (_[2]) throw ut(_[1]);
	return ut(_[0]);
}
function N(n, e, _, t, r) {
	const i = lt(n, ft.__wbindgen_malloc), o = mt, c = ft.cutpointToneCodes(i, o, e, _, t, r);
	var l = $_(c[0], c[1]).slice();
	return ft.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = ft.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = Q_(r[0], r[1]).slice(), ft.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function T(n, e, _, t) {
	return 0 !== ft.cutpointsValid(n, e, _, t);
}
function j(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = ot(e, ft.__wbindgen_malloc), i = mt, o = ft.describeColumns(_, t, r, i);
	if (o[2]) throw ut(o[1]);
	return ut(o[0]);
}
function E(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = lt(e, ft.__wbindgen_malloc), i = mt, o = ft.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw ut(o[2]);
	var c = $_(o[0], o[1]).slice();
	return ft.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function L(n, e) {
	let _, t;
	try {
		const r = ct(n, ft.__wbindgen_malloc), i = mt, o = st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), c = mt, l = ft.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], Q_(l[0], l[1]);
	} finally {
		ft.__wbindgen_free(_, t, 1);
	}
}
function V(n) {
	const e = ft.detectGgirHasptVariant(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function H(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt;
	var o = it(e) ? 0 : st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), c = mt, l = it(_) ? 0 : lt(_, ft.__wbindgen_malloc), a = mt, s = it(t) ? 0 : lt(t, ft.__wbindgen_malloc), u = mt;
	return ft.detectHdcza(r, i, o, c, l, a, s, u);
}
function X(n) {
	const e = lt(n, ft.__wbindgen_malloc), _ = mt;
	return 0 !== ft.detectHourClockJumpMs(e, _);
}
function q(n) {
	const e = lt(n, ft.__wbindgen_malloc), _ = mt, t = ft.detectNonwear(e, _);
	var r = $_(t[0], t[1]).slice();
	return ft.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = lt(n, ft.__wbindgen_malloc), _ = mt, t = ft.detectNonwearChoi2011(e, _);
	var r = $_(t[0], t[1]).slice();
	return ft.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Y(n) {
	const e = lt(n, ft.__wbindgen_malloc), _ = mt, t = ft.detectNonwearChoi2011Bouts(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function Z(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = ft.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw ut(r[2]);
	var i = $_(r[0], r[1]).slice();
	return ft.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = lt(n, ft.__wbindgen_malloc), _ = mt, t = ft.detectNonwearChoi2012(e, _);
	var r = $_(t[0], t[1]).slice();
	return ft.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function J(n) {
	const e = lt(n, ft.__wbindgen_malloc), _ = mt, t = ft.detectNonwearChoi2012Bouts(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function Q(n) {
	const e = lt(n, ft.__wbindgen_malloc), _ = mt, t = ft.detectNonwearChoiBouts(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function nn(n) {
	let e, _;
	try {
		const i = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), o = mt, c = ft.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ut(c[2]);
		return e = t, _ = r, Q_(t, r);
	} finally {
		ft.__wbindgen_free(e, _, 1);
	}
}
function en(n, e, _, t, r, i, o) {
	const c = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), l = mt, a = st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), s = mt, u = lt(_, ft.__wbindgen_malloc), w = mt, g = lt(t, ft.__wbindgen_malloc), b = mt, d = lt(r, ft.__wbindgen_malloc), f = mt, m = ft.detectNonwearUnifiedBatchTyped(c, l, a, s, u, w, g, b, d, f, i, o);
	if (m[2]) throw ut(m[1]);
	return ut(m[0]);
}
function _n(n, e, _) {
	const t = ft.dstPlaceholderRuns(n, e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function tn(n, e, _, t) {
	const r = ft.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = H_(r[0], r[1]).slice(), ft.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function rn(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = lt(e, ft.__wbindgen_malloc), i = mt, o = ft.epochAgreement(_, t, r, i);
	if (o[2]) throw ut(o[1]);
	return ut(o[0]);
}
function on(n, e, _, t, r) {
	const i = lt(n, ft.__wbindgen_malloc), o = mt, c = lt(e, ft.__wbindgen_malloc), l = mt, a = lt(_, ft.__wbindgen_malloc), s = mt, u = lt(t, ft.__wbindgen_malloc), w = mt, g = ft.epochRawData(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw ut(g[1]);
	return ut(g[0]);
}
function cn(n, e, _) {
	const t = lt(n, ft.__wbindgen_malloc), r = mt, i = lt(e, ft.__wbindgen_malloc), o = mt, c = ft.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw ut(c[1]);
	return ut(c[0]);
}
function ln(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = ft.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = q_(o[0], o[1]).slice(), ft.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function an(n, e) {
	let _, t;
	try {
		const o = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), c = mt, l = st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), a = mt, s = ft.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, ut(s[2]);
		return _ = r, t = i, Q_(r, i);
	} finally {
		ft.__wbindgen_free(_, t, 1);
	}
}
function sn(n) {
	const e = ft.exportNapAggregate(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function un(n, e, _) {
	const t = ft.exportPeriodFigures(!it(n), it(n) ? 0 : n, !it(e), it(e) ? 0 : e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function wn(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt, t = ft.extractCapsense(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function gn(n, e, _, t, r) {
	const i = lt(n, ft.__wbindgen_malloc), o = mt, c = lt(e, ft.__wbindgen_malloc), l = mt, a = lt(_, ft.__wbindgen_malloc), s = mt, u = st(r, ft.__wbindgen_malloc, ft.__wbindgen_realloc), w = mt, g = ft.foldOntoGrid(i, o, c, l, a, s, t, u, w);
	if (g[3]) throw ut(g[2]);
	var b = H_(g[0], g[1]).slice();
	return ft.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function bn(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = st(t, ft.__wbindgen_malloc, ft.__wbindgen_realloc), c = mt, l = ft.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw ut(l[2]);
	var a = H_(l[0], l[1]).slice();
	return ft.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function dn(n, e, _, t, r) {
	const i = ct(_, ft.__wbindgen_malloc), o = mt, c = lt(t, ft.__wbindgen_malloc), l = mt, a = ft.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw ut(a[1]);
	return ut(a[0]);
}
function fn(n, e, _, t, r, i) {
	const o = lt(_, ft.__wbindgen_malloc), c = mt, l = lt(t, ft.__wbindgen_malloc), a = mt, s = st(i, ft.__wbindgen_malloc, ft.__wbindgen_realloc), u = mt, w = ft.foldUniformOntoGrid(n, e, o, c, l, a, r, s, u);
	if (w[3]) throw ut(w[2]);
	var g = H_(w[0], w[1]).slice();
	return ft.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function mn(n) {
	const e = ft.fuseNonwearMasks(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function hn(n, e, _) {
	var t = it(_) ? 0 : st(_, ft.__wbindgen_malloc, ft.__wbindgen_realloc), r = mt;
	const i = ft.generateActiwareRestIntervals(n, e, t, r);
	if (i[2]) throw ut(i[1]);
	return ut(i[0]);
}
function pn() {
	const n = ft.getComputeCapabilitiesV1();
	if (n[2]) throw ut(n[1]);
	return ut(n[0]);
}
function yn(n, e, _) {
	const t = ft.ggir5sWallClockMs(n, e, _);
	if (t[3]) throw ut(t[2]);
	var r = H_(t[0], t[1]).slice();
	return ft.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function vn(n) {
	const e = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), _ = mt, t = ft.ggirConfigValues(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function kn(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt;
	var r = it(e) ? 0 : lt(e, ft.__wbindgen_malloc), i = mt;
	const o = ft.ggirDaysIncluded(_, t, r, i);
	var c = $_(o[0], o[1]).slice();
	return ft.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function Sn(n, e) {
	const _ = ct(n, ft.__wbindgen_malloc), t = mt;
	var r = it(e) ? 0 : st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), i = mt;
	const o = ft.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw ut(o[1]);
	return ut(o[0]);
}
function Cn(n, e, _) {
	var t = it(_) ? 0 : lt(_, ft.__wbindgen_malloc), r = mt;
	const i = ft.ggirDstPlaceholderCuts(n, e, t, r);
	if (i[2]) throw ut(i[1]);
	return ut(i[0]);
}
function An() {
	return ft.ggirIncludeDayCriterionHours();
}
function Rn(n, e, _, t) {
	const r = ot(n, ft.__wbindgen_malloc), i = mt;
	var o = it(t) ? 0 : lt(t, ft.__wbindgen_malloc), c = mt;
	const l = ft.ggirIndicesToWallClockMs(r, i, e, _, o, c);
	if (l[3]) throw ut(l[2]);
	var a = H_(l[0], l[1]).slice();
	return ft.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function xn(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = ft.ggirLabelsToStoredMs(_, t, e);
	if (r[3]) throw ut(r[2]);
	var i = H_(r[0], r[1]).slice();
	return ft.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Dn(n, e, _, t) {
	const r = at(n, ft.__wbindgen_malloc), i = mt, o = lt(e, ft.__wbindgen_malloc), c = mt, l = lt(_, ft.__wbindgen_malloc), a = mt, s = lt(t, ft.__wbindgen_malloc), u = mt, w = ft.ggirManualNightClocks(r, i, o, c, l, a, s, u);
	if (w[2]) throw ut(w[1]);
	return ut(w[0]);
}
function Mn(n, e, _, t) {
	const r = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), i = mt, o = st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), c = mt, l = st(_, ft.__wbindgen_malloc, ft.__wbindgen_realloc), a = mt, s = ft.ggirSleeplogStoredClocks(r, i, o, c, l, a, t);
	if (s[3]) throw ut(s[2]);
	let u;
	return 0 !== s[0] && (u = X_(s[0], s[1]).slice(), ft.__wbindgen_free(s[0], 4 * s[1], 4)), u;
}
function Pn(n, e) {
	return ft.ggirSptDurationHours(n, e);
}
function In(n, e) {
	const _ = ft.ggirSummaryDenominator(n, e);
	if (_[2]) throw ut(_[1]);
	return ut(_[0]);
}
function Fn(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = lt(e, ft.__wbindgen_malloc), i = mt, o = ft.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Wn(n) {
	let e, _;
	try {
		const i = ct(n, ft.__wbindgen_malloc), o = mt, c = ft.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ut(c[2]);
		return e = t, _ = r, Q_(t, r);
	} finally {
		ft.__wbindgen_free(e, _, 1);
	}
}
function On(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = lt(e, ft.__wbindgen_malloc), c = mt, l = lt(_, ft.__wbindgen_malloc), a = mt, s = lt(t, ft.__wbindgen_malloc), u = mt, w = ft.implausibilityReasons(r, i, o, c, l, a, s, u);
	if (w[2]) throw ut(w[1]);
	return ut(w[0]);
}
function Un() {
	ft.installPanicHook();
}
function zn(n) {
	const e = ft.interRaterReliability(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function Gn(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = ft.irregularInternalDays(_, t, e);
	var i = X_(r[0], r[1]).slice();
	return ft.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Nn(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt;
	return 0 !== ft.isGeneactivFormat(e, _);
}
function Bn(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = lt(e, ft.__wbindgen_malloc), c = mt, l = lt(_, ft.__wbindgen_malloc), a = mt, s = ft.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw ut(s[1]);
	return ut(s[0]);
}
function Tn(n, e, _) {
	const t = lt(n, ft.__wbindgen_malloc), r = mt, i = ft.markerIndexRange(t, r, e, _);
	var o = q_(i[0], i[1]).slice();
	return ft.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function jn(n, e, _, t, r, i, o) {
	const c = lt(n, ft.__wbindgen_malloc), l = mt, a = lt(e, ft.__wbindgen_malloc), s = mt, u = ft.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (u[2]) throw ut(u[1]);
	return ut(u[0]);
}
function En(n) {
	const e = lt(n, ft.__wbindgen_malloc), _ = mt, t = ft.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Ln(n, e, _, t) {
	const r = ft.metricWarnings(n, e, _, t);
	var i = $_(r[0], r[1]).slice();
	return ft.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Vn(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = lt(e, ft.__wbindgen_malloc), i = mt, o = ft.midSleepClockHours(_, t, r, i);
	var c = H_(o[0], o[1]).slice();
	return ft.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Hn(n, e, _, t, r) {
	const i = lt(n, ft.__wbindgen_malloc), o = mt, c = lt(e, ft.__wbindgen_malloc), l = mt, a = lt(_, ft.__wbindgen_malloc), s = mt, u = ft.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw ut(u[1]);
	return ut(u[0]);
}
function Xn(n) {
	const e = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), _ = mt, t = ft.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = Q_(t[0], t[1]).slice(), ft.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function qn(n, e, _, t, r) {
	const i = lt(_, ft.__wbindgen_malloc), o = mt, c = lt(t, ft.__wbindgen_malloc), l = mt, a = lt(r, ft.__wbindgen_malloc), s = mt, u = ft.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (u[2]) throw ut(u[1]);
	return ut(u[0]);
}
function $n(n, e, _, t) {
	let r, i;
	try {
		const l = ot(n, ft.__wbindgen_malloc), a = mt, s = st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), u = mt, w = ft.nonwearContributors(l, a, s, u, _, t);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, ut(w[2]);
		return r = o, i = c, Q_(o, c);
	} finally {
		ft.__wbindgen_free(r, i, 1);
	}
}
function Yn(n) {
	const e = lt(n, ft.__wbindgen_malloc), _ = mt, t = ft.nonwearInSleepCounts(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function Zn(n) {
	const e = ft.nonwearSleepOverlap(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function Kn(n, e, _) {
	const t = lt(n, ft.__wbindgen_malloc), r = mt, i = lt(e, ft.__wbindgen_malloc), o = mt, c = ft.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw ut(c[1]);
	return ut(c[0]);
}
function Jn(n, e, _, t, r, i) {
	const o = st(r, ft.__wbindgen_malloc, ft.__wbindgen_realloc), c = mt, l = ft.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw ut(l[2]);
	var a = H_(l[0], l[1]).slice();
	return ft.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function Qn(n, e) {
	const _ = ct(n, ft.__wbindgen_malloc), t = mt, r = ft.parseActigraphCsv(_, t, e);
	if (r[2]) throw ut(r[1]);
	return ut(r[0]);
}
function ne(n) {
	const e = ft.parseActigraphCsvBuffered(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function ee(n, e, _, t) {
	const r = ct(n, ft.__wbindgen_malloc), i = mt;
	var o = it(e) ? 0 : st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), c = mt, l = it(t) ? 0 : st(t, ft.__wbindgen_malloc, ft.__wbindgen_realloc), a = mt;
	const s = ft.parseAw5(r, i, o, c, it(_) ? 0 : L_(_), l, a);
	if (s[2]) throw ut(s[1]);
	return ut(s[0]);
}
function _e(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt, t = ft.parseCwa(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function te(n, e) {
	const _ = ct(n, ft.__wbindgen_malloc), t = mt, r = st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), i = mt, o = ft.parseEpochSeries(_, t, r, i);
	if (o[2]) throw ut(o[1]);
	return ut(o[0]);
}
function re(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt, t = ft.parseGeneactivBin(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function ie(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt, t = ft.parseGeneactivCsv(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function oe() {
	const n = ft.parseGeneactivCsvBuffered();
	if (n[2]) throw ut(n[1]);
	return ut(n[0]);
}
function ce(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt, t = ft.parseGt3x(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function le(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = ct(e, ft.__wbindgen_malloc), c = mt, l = ct(_, ft.__wbindgen_malloc), a = mt, s = ft.participantValidity(r, i, o, c, l, a, t);
	if (s[2]) throw ut(s[1]);
	return ut(s[0]);
}
function ae(n, e, _, t, r) {
	const i = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), o = mt, c = lt(e, ft.__wbindgen_malloc), l = mt;
	var a = it(_) ? 0 : lt(_, ft.__wbindgen_malloc), s = mt;
	const u = ft.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (u[2]) throw ut(u[1]);
	return ut(u[0]);
}
function se(n) {
	let e, _;
	try {
		const i = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), o = mt, c = ft.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ut(c[2]);
		return e = t, _ = r, Q_(t, r);
	} finally {
		ft.__wbindgen_free(e, _, 1);
	}
}
function ue(n, e, _, t, r, i) {
	const o = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), c = mt, l = lt(e, ft.__wbindgen_malloc), a = mt, s = lt(_, ft.__wbindgen_malloc), u = mt, w = ct(t, ft.__wbindgen_malloc), g = mt, b = ct(r, ft.__wbindgen_malloc), d = mt, f = st(i, ft.__wbindgen_malloc, ft.__wbindgen_realloc), m = mt, h = ft.placeMarkersBatch(o, c, l, a, s, u, w, g, b, d, f, m);
	if (h[2]) throw ut(h[1]);
	return ut(h[0]);
}
function we(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), y = mt, v = lt(e, ft.__wbindgen_malloc), k = mt, S = ot(_, ft.__wbindgen_malloc), C = mt, A = lt(t, ft.__wbindgen_malloc), R = mt, x = ot(r, ft.__wbindgen_malloc), D = mt, M = ct(i, ft.__wbindgen_malloc), P = mt, I = ot(o, ft.__wbindgen_malloc), F = mt, W = ct(c, ft.__wbindgen_malloc), O = mt, U = ot(l, ft.__wbindgen_malloc), z = mt, G = lt(a, ft.__wbindgen_malloc), N = mt, B = ot(s, ft.__wbindgen_malloc), T = mt, j = lt(u, ft.__wbindgen_malloc), E = mt, L = ot(w, ft.__wbindgen_malloc), V = mt, H = lt(g, ft.__wbindgen_malloc), X = mt, q = ot(b, ft.__wbindgen_malloc), $ = mt, Y = lt(d, ft.__wbindgen_malloc), Z = mt, K = ot(f, ft.__wbindgen_malloc), J = mt, Q = ct(m, ft.__wbindgen_malloc), nn = mt, en = ot(h, ft.__wbindgen_malloc), _n = mt, tn = ft.placeMarkersTyped(p, y, v, k, S, C, A, R, x, D, M, P, I, F, W, O, U, z, G, N, B, T, j, E, L, V, H, X, q, $, Y, Z, K, J, Q, nn, en, _n);
	if (tn[2]) throw ut(tn[1]);
	return ut(tn[0]);
}
function ge(n) {
	let e, _;
	try {
		const i = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), o = mt, c = ft.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ut(c[2]);
		return e = t, _ = r, Q_(t, r);
	} finally {
		ft.__wbindgen_free(e, _, 1);
	}
}
function be(n, e, _, t) {
	const r = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), i = mt, o = lt(e, ft.__wbindgen_malloc), c = mt, l = lt(_, ft.__wbindgen_malloc), a = mt, s = ct(t, ft.__wbindgen_malloc), u = mt, w = ft.placeNonwearMarkersTyped(r, i, o, c, l, a, s, u);
	if (w[2]) throw ut(w[1]);
	return ut(w[0]);
}
function de(n) {
	const e = ft.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function fe(n) {
	const e = ft.prepareCompactPipelineV1(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function me(n, e, _, t, r, i, o) {
	const c = lt(n, ft.__wbindgen_malloc), l = mt, a = lt(e, ft.__wbindgen_malloc), s = mt, u = lt(_, ft.__wbindgen_malloc), w = mt, g = lt(t, ft.__wbindgen_malloc), b = mt;
	var d = it(o) ? 0 : st(o, ft.__wbindgen_malloc, ft.__wbindgen_realloc), f = mt;
	const m = ft.processGeneactivRaw(c, l, a, s, u, w, g, b, r, i, d, f);
	if (m[2]) throw ut(m[1]);
	return ut(m[0]);
}
function he(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt, t = ft.processGt3xFull(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function pe(n, e) {
	const _ = ct(n, ft.__wbindgen_malloc), t = mt, r = ft.processGt3xFullWithEpoch(_, t, e);
	if (r[2]) throw ut(r[1]);
	return ut(r[0]);
}
function ye(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt, t = ft.processGt3xPart1(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function ve(n, e) {
	const _ = ct(n, ft.__wbindgen_malloc), t = mt, r = ft.processGt3xPart1WithEpoch(_, t, e);
	if (r[2]) throw ut(r[1]);
	return ut(r[0]);
}
function ke(n, e, _, t, r, i) {
	const o = lt(n, ft.__wbindgen_malloc), c = mt, l = lt(e, ft.__wbindgen_malloc), a = mt, s = lt(_, ft.__wbindgen_malloc), u = mt;
	var w = it(i) ? 0 : st(i, ft.__wbindgen_malloc, ft.__wbindgen_realloc), g = mt;
	const b = ft.processRawXyz(o, c, l, a, s, u, t, r, w, g);
	if (b[2]) throw ut(b[1]);
	return ut(b[0]);
}
function Se(n, e, _, t, r, i) {
	const o = lt(n, ft.__wbindgen_malloc), c = mt, l = lt(e, ft.__wbindgen_malloc), a = mt, s = lt(_, ft.__wbindgen_malloc), u = mt, w = lt(t, ft.__wbindgen_malloc), g = mt;
	var b = it(i) ? 0 : st(i, ft.__wbindgen_malloc, ft.__wbindgen_realloc), d = mt;
	const f = ft.processRawXyzImputed(o, c, l, a, s, u, w, g, r, b, d);
	if (f[2]) throw ut(f[1]);
	return ut(f[0]);
}
function Ce(n, e, _, t, r, i, o) {
	const c = lt(n, ft.__wbindgen_malloc), l = mt, a = lt(e, ft.__wbindgen_malloc), s = mt, u = lt(_, ft.__wbindgen_malloc), w = mt, g = lt(t, ft.__wbindgen_malloc), b = mt;
	var d = it(i) ? 0 : st(i, ft.__wbindgen_malloc, ft.__wbindgen_realloc), f = mt;
	const m = ft.processRawXyzImputedWithEpoch(c, l, a, s, u, w, g, b, r, d, f, o);
	if (m[2]) throw ut(m[1]);
	return ut(m[0]);
}
function Ae(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = ct(e, ft.__wbindgen_malloc), c = mt, l = lt(t, ft.__wbindgen_malloc), a = mt, s = ft.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var u = $_(s[0], s[1]).slice();
	return ft.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function Re(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = lt(e, ft.__wbindgen_malloc), c = mt, l = lt(_, ft.__wbindgen_malloc), a = mt, s = ft.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw ut(s[1]);
	return ut(s[0]);
}
function xe(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt, t = ft.readGgirMeta(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function De() {
	return ft.recommended_chunk_size_mb() >>> 0;
}
function Me(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), i = mt, o = ft.reduceF64V1(_, t, r, i);
	if (o[2]) throw ut(o[1]);
	return o[0];
}
function Pe(n) {
	const e = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), _ = mt, t = ft.resolveTimezone(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function Ie(n, e, _) {
	const t = lt(n, ft.__wbindgen_malloc), r = mt, i = lt(e, ft.__wbindgen_malloc), o = mt, c = ot(_, ft.__wbindgen_malloc), l = mt, a = ft.restoredDstRuns(t, r, i, o, c, l);
	if (a[2]) throw ut(a[1]);
	return ut(a[0]);
}
function Fe(n, e, _, t, r, i, o, c, l, a, s) {
	const u = ct(n, ft.__wbindgen_malloc), w = mt, g = st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), b = mt;
	var d = it(_) ? 0 : ct(_, ft.__wbindgen_malloc), f = mt, m = it(t) ? 0 : ct(t, ft.__wbindgen_malloc), h = mt, p = it(r) ? 0 : ct(r, ft.__wbindgen_malloc), y = mt, v = it(i) ? 0 : ct(i, ft.__wbindgen_malloc), k = mt, S = it(o) ? 0 : ct(o, ft.__wbindgen_malloc), C = mt, A = it(c) ? 0 : st(c, ft.__wbindgen_malloc, ft.__wbindgen_realloc), R = mt, x = it(l) ? 0 : st(l, ft.__wbindgen_malloc, ft.__wbindgen_realloc), D = mt;
	const M = ft.reviewGgirResults(u, w, g, b, d, f, m, h, p, y, v, k, S, C, A, R, x, D, a, s);
	if (M[2]) throw ut(M[1]);
	return ut(M[0]);
}
function We(n) {
	const e = ft.reviewNonwearFile(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function Oe(n) {
	const e = ft.reviewNonwearTotals(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function Ue(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = ft.roundCountStorage(_, t, e);
	var i = H_(r[0], r[1]).slice();
	return ft.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function ze(n) {
	const e = ft.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function Ge(n) {
	const e = ft.runCompactPipelineV1(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function Ne(n, e) {
	const _ = ft.runFullPipeline(n, e);
	if (_[2]) throw ut(_[1]);
	return ut(_[0]);
}
function Be(n) {
	const e = ft.runFullPipelineOutcomeV1(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function Te(n) {
	const e = ft.runFullPipelineV1(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function je(n, e) {
	const _ = ft.runGgirFromEpoch(n, e);
	if (_[2]) throw ut(_[1]);
	return ut(_[0]);
}
function Ee(n) {
	const e = ft.runGgirPart3(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function Le(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt, t = ft.runMilestone(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function Ve(n) {
	const e = ft.scoreAllDays(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function He(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = ft.scoreColeKripke(_, t, e);
	var i = $_(r[0], r[1]).slice();
	return ft.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Xe(n) {
	let e, _;
	try {
		const i = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), o = mt, c = ft.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ut(c[2]);
		return e = t, _ = r, Q_(t, r);
	} finally {
		ft.__wbindgen_free(e, _, 1);
	}
}
function qe(n) {
	const e = ft.scoreConsensusMajority(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function $e(n, e, _) {
	const t = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), r = mt, i = ct(e, ft.__wbindgen_malloc), o = mt, c = ot(_, ft.__wbindgen_malloc), l = mt, a = ft.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw ut(a[1]);
	return ut(a[0]);
}
function Ye(n) {
	let e, _;
	try {
		const i = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), o = mt, c = ft.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ut(c[2]);
		return e = t, _ = r, Q_(t, r);
	} finally {
		ft.__wbindgen_free(e, _, 1);
	}
}
function Ze(n, e, _, t, r, i) {
	const o = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), c = mt, l = lt(e, ft.__wbindgen_malloc), a = mt, s = lt(_, ft.__wbindgen_malloc), u = mt, w = lt(t, ft.__wbindgen_malloc), g = mt, b = ft.scoreEpochsTyped(o, c, l, a, s, u, w, g, r, i);
	if (b[2]) throw ut(b[1]);
	return ut(b[0]);
}
function Ke(n) {
	const e = lt(n, ft.__wbindgen_malloc), _ = mt, t = ft.scoreGgirHasib(e, _);
	var r = $_(t[0], t[1]).slice();
	return ft.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Je(n) {
	const e = ft.scoreGgirHasibVariant(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function Qe(n, e, _) {
	const t = lt(n, ft.__wbindgen_malloc), r = mt, i = lt(e, ft.__wbindgen_malloc), o = mt, c = ft.scoreGgirSib(t, r, i, o, _);
	if (c[2]) throw ut(c[1]);
	return ut(c[0]);
}
function n_(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = ft.scoreSadeh(_, t, e);
	var i = $_(r[0], r[1]).slice();
	return ft.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function e_(n) {
	const e = ft.settleManualNonwearNights(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function __(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt, t = ft.sha256StreamFeed(e, _);
	if (t[1]) throw ut(t[0]);
}
function t_() {
	let n, e;
	try {
		const r = ft.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, ut(r[2]);
		return n = _, e = t, Q_(_, t);
	} finally {
		ft.__wbindgen_free(n, e, 1);
	}
}
function r_() {
	ft.sha256StreamStart();
}
function i_(n, e) {
	const _ = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), t = mt, r = ft.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = Q_(r[0], r[1]).slice(), ft.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function o_(n, e, _, t, r) {
	const i = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), o = mt, c = lt(e, ft.__wbindgen_malloc), l = mt, a = ot(_, ft.__wbindgen_malloc), s = mt, u = lt(t, ft.__wbindgen_malloc), w = mt, g = ot(r, ft.__wbindgen_malloc), b = mt, d = ft.sleepRegularityIndex(i, o, c, l, a, s, u, w, g, b);
	if (d[3]) throw ut(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function c_(n, e) {
	const _ = ft.sleepWakeScores(n, e);
	if (_[2]) throw ut(_[1]);
	return ut(_[0]);
}
function l_(n) {
	const e = at(n, ft.__wbindgen_malloc), _ = mt, t = ft.sourceLabelsWallClockMs(e, _);
	var r = H_(t[0], t[1]).slice();
	return ft.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function a_(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = lt(e, ft.__wbindgen_malloc), c = mt, l = ft.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function s_(n, e, _) {
	const t = lt(n, ft.__wbindgen_malloc), r = mt, i = lt(_, ft.__wbindgen_malloc), o = mt, c = ft.spliceDstPlaceholders(t, r, e, i, o);
	if (c[3]) throw ut(c[2]);
	let l;
	return 0 !== c[0] && (l = H_(c[0], c[1]).slice(), ft.__wbindgen_free(c[0], 8 * c[1], 8)), l;
}
function u_(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = ct(e, ft.__wbindgen_malloc), c = mt, l = lt(_, ft.__wbindgen_malloc), a = mt, s = lt(t, ft.__wbindgen_malloc), u = mt, w = ft.statesInPeriods(r, i, o, c, l, a, s, u);
	var g = $_(w[0], w[1]).slice();
	return ft.__wbindgen_free(w[0], 1 * w[1], 1), g;
}
function w_(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = ft.storedToGgirLabelsMs(_, t, e);
	if (r[3]) throw ut(r[2]);
	var i = H_(r[0], r[1]).slice();
	return ft.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function g_(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt, t = ft.streamParseFeed(e, _);
	if (t[2]) throw ut(t[1]);
	return t[0] >>> 0;
}
function b_() {
	const n = ft.streamParseFinish();
	if (n[2]) throw ut(n[1]);
	return _.__wrap(n[0]);
}
function d_() {
	const n = ft.streamParseFinishChunk();
	if (n[2]) throw ut(n[1]);
	return e.__wrap(n[0]);
}
function f_(n) {
	const _ = ft.streamParseFinishChunkWithProgress(n);
	if (_[2]) throw ut(_[1]);
	return e.__wrap(_[0]);
}
function m_(n, e) {
	const _ = ft.streamParseStart(n, e);
	if (_[1]) throw ut(_[0]);
}
function h_(n, e) {
	const _ = ft.streamParseStartData(n, e);
	if (_[1]) throw ut(_[0]);
}
function p_(n, e, _) {
	const t = ft.streamParseStartWithEpoch(n, e, _);
	if (t[1]) throw ut(t[0]);
}
function y_(n, e) {
	const _ = ct(n, ft.__wbindgen_malloc), t = mt, r = ft.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw ut(r[1]);
	return ut(r[0]);
}
function v_(n) {
	const e = ft.summarizeExportGroups(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function k_(n) {
	const e = ft.summarizePhysicalActivityDays(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function S_(n) {
	const e = ft.summarizePhysicalActivityTrace(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function C_(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = ft.thresholdProbabilities(_, t, e);
	var i = $_(r[0], r[1]).slice();
	return ft.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function A_(n) {
	const e = ft.timeSemantics(n);
	if (e[2]) throw ut(e[1]);
	return ut(e[0]);
}
function R_(n, e, _) {
	const t = lt(n, ft.__wbindgen_malloc), r = mt, i = ft.timestampDiscontinuities(t, r, e, _);
	if (i[2]) throw ut(i[1]);
	return ut(i[0]);
}
function x_(n, e, _) {
	const t = ft.uniformTimestamps(n, e, _);
	var r = H_(t[0], t[1]).slice();
	return ft.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function D_(n, e) {
	const _ = ft.utcDatesInSpan(n, e);
	var t = X_(_[0], _[1]).slice();
	return ft.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function M_(n) {
	const e = lt(n, ft.__wbindgen_malloc), _ = mt, t = ft.utcDayIndex(e, _);
	if (t[2]) throw ut(t[1]);
	return ut(t[0]);
}
function P_(n) {
	const e = ct(n, ft.__wbindgen_malloc), _ = mt, t = ft.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function I_(n, e) {
	const _ = lt(n, ft.__wbindgen_malloc), t = mt, r = ft.validWearDays(_, t, e);
	if (r[3]) throw ut(r[2]);
	var i = $_(r[0], r[1]).slice();
	return ft.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function F_(n, e, _) {
	const t = lt(n, ft.__wbindgen_malloc), r = mt, i = ft.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw ut(i[1]);
	return ut(i[0]);
}
function W_(n) {
	const e = lt(n, ft.__wbindgen_malloc), _ = mt, t = ft.wallClockLabels(e, _);
	var r = X_(t[0], t[1]).slice();
	return ft.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function O_(n, e, _) {
	const t = ct(n, ft.__wbindgen_malloc), r = mt, i = ft.wallMaskOntoGgirGrid(t, r, e, _);
	if (i[3]) throw ut(i[2]);
	var o = $_(i[0], i[1]).slice();
	return ft.__wbindgen_free(i[0], 1 * i[1], 1), o;
}
function U_(n, e) {
	const _ = st(n, ft.__wbindgen_malloc, ft.__wbindgen_realloc), t = mt;
	var r = it(e) ? 0 : st(e, ft.__wbindgen_malloc, ft.__wbindgen_realloc), i = mt;
	const o = ft.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw ut(o[1]);
	return ut(o[0]);
}
function z_(n) {
	const e = at(n, ft.__wbindgen_malloc), _ = mt, t = ft.weekendDates(e, _);
	var r = $_(t[0], t[1]).slice();
	return ft.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function G_(n, e, _, t) {
	const r = lt(n, ft.__wbindgen_malloc), i = mt, o = ft.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function N_(n, e, _, t, r) {
	const i = lt(n, ft.__wbindgen_malloc), o = mt, c = lt(e, ft.__wbindgen_malloc), l = mt, a = lt(_, ft.__wbindgen_malloc), s = mt, u = ft.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw ut(u[1]);
	return ut(u[0]);
}
function B_() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(Q_(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = st(String(e), ft.__wbindgen_malloc, ft.__wbindgen_realloc), t = mt;
				Z_().setInt32(n + 4, t, !0), Z_().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				Z_().setBigInt64(n + 8, it(_) ? BigInt(0) : _, !0), Z_().setInt32(n + 0, !it(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return it(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = st(V_(e), ft.__wbindgen_malloc, ft.__wbindgen_realloc), t = mt;
				Z_().setInt32(n + 4, t, !0), Z_().setInt32(n + 0, _, !0);
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
				Z_().setFloat64(n + 8, it(_) ? 0 : _, !0), Z_().setInt32(n + 0, !it(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = it(_) ? 0 : st(_, ft.__wbindgen_malloc, ft.__wbindgen_realloc), r = mt;
				Z_().setInt32(n + 4, r, !0), Z_().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(Q_(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return rt(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return rt(function(n, e, _, t) {
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
					_ = n, t = e, console.error(Q_(n, e));
				} finally {
					ft.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return rt(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return rt(function(n, e) {
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
				return new Uint32Array(q_(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(H_(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array($_(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return rt(function(n) {
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
				return rt(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call($_(n, e), _);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return rt(function(n, e, _) {
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
				const _ = st(e.stack, ft.__wbindgen_malloc, ft.__wbindgen_realloc), t = mt;
				Z_().setInt32(n + 4, t, !0), Z_().setInt32(n + 0, _, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return it(n) ? 0 : L_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return it(n) ? 0 : L_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return it(n) ? 0 : L_(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return it(n) ? 0 : L_(n);
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
				return $_(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return Q_(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = ft.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
const T_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ft.__wbg_aw5batch_free(n >>> 0, 1)), j_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ft.__wbg_streamchunkresult_free(n >>> 0, 1)), E_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ft.__wbg_streamparseresult_free(n >>> 0, 1));
function L_(n) {
	const e = ft.__externref_table_alloc();
	return ft.__wbindgen_externrefs.set(e, n), e;
}
function V_(n) {
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
		e > 0 && (_ += V_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + V_(n[t]);
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
function H_(n, e) {
	return n >>>= 0, J_().subarray(n / 8, n / 8 + e);
}
function X_(n, e) {
	n >>>= 0;
	const _ = Z_(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(ft.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return ft.__externref_drop_slice(n, e), t;
}
function q_(n, e) {
	return n >>>= 0, et().subarray(n / 4, n / 4 + e);
}
function $_(n, e) {
	return n >>>= 0, tt().subarray(n / 1, n / 1 + e);
}
let Y_ = null;
function Z_() {
	return (null === Y_ || !0 === Y_.buffer.detached || void 0 === Y_.buffer.detached && Y_.buffer !== ft.memory.buffer) && (Y_ = new DataView(ft.memory.buffer)), Y_;
}
let K_ = null;
function J_() {
	return null !== K_ && 0 !== K_.byteLength || (K_ = new Float64Array(ft.memory.buffer)), K_;
}
function Q_(n, e) {
	return function(n, e) {
		return bt += e, bt >= gt && (wt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), wt.decode(), bt = e), wt.decode(tt().subarray(n, n + e));
	}(n >>>= 0, e);
}
let nt = null;
function et() {
	return null !== nt && 0 !== nt.byteLength || (nt = new Uint32Array(ft.memory.buffer)), nt;
}
let _t = null;
function tt() {
	return null !== _t && 0 !== _t.byteLength || (_t = new Uint8Array(ft.memory.buffer)), _t;
}
function rt(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = L_(_);
		ft.__wbindgen_exn_store(n);
	}
}
function it(n) {
	return null == n;
}
function ot(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return et().set(n, _ / 4), mt = n.length, _;
}
function ct(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return tt().set(n, _ / 1), mt = n.length, _;
}
function lt(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return J_().set(n, _ / 8), mt = n.length, _;
}
function at(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = L_(n[t]);
		Z_().setUint32(_ + 4 * t, e, !0);
	}
	return mt = n.length, _;
}
function st(n, e, _) {
	if (void 0 === _) {
		const _ = dt.encode(n), t = e(_.length, 1) >>> 0;
		return tt().subarray(t, t + _.length).set(_), mt = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = tt();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = tt().subarray(r + o, r + t);
		o += dt.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return mt = o, r;
}
function ut(n) {
	const e = ft.__wbindgen_externrefs.get(n);
	return ft.__externref_table_dealloc(n), e;
}
let wt = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
wt.decode();
const gt = 2146435072;
let bt = 0;
const dt = new TextEncoder();
"encodeInto" in dt || (dt.encodeInto = function(n, e) {
	const _ = dt.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let ft, mt = 0;
function ht(n, e) {
	return ft = n.exports, Y_ = null, K_ = null, nt = null, _t = null, ft.__wbindgen_start(), ft;
}
function pt(n) {
	if (void 0 !== ft) return ft;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = B_();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), ht(new WebAssembly.Instance(n, e));
}
async function yt(n) {
	if (void 0 !== ft) return ft;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-Id0uua9x.wasm", "" + import.meta.url));
	const e = B_();
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
	return ht(_);
}
export { n as Aw5Batch, e as StreamChunkResult, _ as StreamParseResult, t as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actiwareWakeThreshold, o as actoursVersion, c as aggregateEpochSeries, l as analysisDatesOf, a as analysisWindowBounds, s as analysisWindowSlice, u as analyzePhysicalActivityDay, w as classifyActimetricPreschoolWristRf, g as classifyActimetricPreschoolWristRfLagLead, b as classifyActimetricPreschoolWristRfLagLeadCalibrated, d as clippedUnionHours, f as compareNonwearDetectorMasks, m as computeAnglez5s, h as computeCircadian, p as computeCircadianTyped, y as computeEnmo5s, v as computeMimsUnit, k as computeMimsUnitDataframe, S as computeMimsUnitTimingBreakdown, C as computeMimsUnitValues, A as computeNightDifficulty, R as computeNightDifficultyTyped, x as computeNightSignals, D as computeNightSignalsTyped, M as computeSleepMetrics, P as configureComputeMemoryBudgetV1, I as consensusDisagreementDetail, F as consensusDisagreements, W as convertBedWakeDaysDiary, O as convertScreensRedcapDiary, U as csvBufferAppend, z as csvBufferClear, G as cutpointEpochCompatibility, N as cutpointToneCodes, B as cutpointsRefusal, T as cutpointsValid, yt as default, j as describeColumns, E as detectDetachFromAccelerationG, L as detectDeviceFormat, V as detectGgirHasptVariant, H as detectHdcza, X as detectHourClockJumpMs, q as detectNonwear, $ as detectNonwearChoi2011, Y as detectNonwearChoi2011Bouts, Z as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, J as detectNonwearChoi2012Bouts, Q as detectNonwearChoiBouts, nn as detectNonwearUnified, en as detectNonwearUnifiedBatchTyped, _n as dstPlaceholderRuns, tn as effectiveOverrideCutpoints, rn as epochAgreement, on as epochRawData, cn as epochWithBandpass, ln as epochsOverlapping, an as executeHeroRuntime, sn as exportNapAggregate, un as exportPeriodFigures, wn as extractCapsense, gn as foldOntoGrid, bn as foldSampleBlocks, dn as foldSleepWakeVotes, fn as foldUniformOntoGrid, mn as fuseNonwearMasks, hn as generateActiwareRestIntervals, pn as getComputeCapabilitiesV1, yn as ggir5sWallClockMs, vn as ggirConfigValues, kn as ggirDaysIncluded, Sn as ggirDiaryLogShape, Cn as ggirDstPlaceholderCuts, An as ggirIncludeDayCriterionHours, Rn as ggirIndicesToWallClockMs, xn as ggirLabelsToStoredMs, Dn as ggirManualNightClocks, Mn as ggirSleeplogStoredClocks, Pn as ggirSptDurationHours, In as ggirSummaryDenominator, Fn as gridOffsetWithin, Wn as identifyGgirRData, On as implausibilityReasons, pt as initSync, Un as installPanicHook, zn as interRaterReliability, Gn as irregularInternalDays, Nn as isGeneactivFormat, Bn as lstmSpectralFeatures30s, Tn as markerIndexRange, jn as markerSleepOnsetOffset, En as medianGapSeconds, Ln as metricWarnings, Vn as midSleepClockHours, Hn as neishabouriCounts, Xn as nextDate, qn as nightIntervalOverlap, $n as nonwearContributors, Yn as nonwearInSleepCounts, Zn as nonwearSleepOverlap, Kn as nonwearWeightRuns, Jn as normalizeCutpoints, Qn as parseActigraphCsv, ne as parseActigraphCsvBuffered, ee as parseAw5, _e as parseCwa, te as parseEpochSeries, re as parseGeneactivBin, ie as parseGeneactivCsv, oe as parseGeneactivCsvBuffered, ce as parseGt3x, le as participantValidity, ae as physicalActivitySeriesGrid, se as placeMarkers, ue as placeMarkersBatch, we as placeMarkersTyped, ge as placeNonwearMarkers, be as placeNonwearMarkersTyped, de as prepareCompactPipelineOutcomeV1, fe as prepareCompactPipelineV1, me as processGeneactivRaw, he as processGt3xFull, pe as processGt3xFullWithEpoch, ye as processGt3xPart1, ve as processGt3xPart1WithEpoch, ke as processRawXyz, Se as processRawXyzImputed, Ce as processRawXyzImputedWithEpoch, Ae as projectLabelsOntoGrid, Re as rasterizePeriods, xe as readGgirMeta, De as recommended_chunk_size_mb, Me as reduceF64V1, Pe as resolveTimezone, Ie as restoredDstRuns, Fe as reviewGgirResults, We as reviewNonwearFile, Oe as reviewNonwearTotals, Ue as roundCountStorage, ze as runCompactPipelineOutcomeV1, Ge as runCompactPipelineV1, Ne as runFullPipeline, Be as runFullPipelineOutcomeV1, Te as runFullPipelineV1, je as runGgirFromEpoch, Ee as runGgirPart3, Le as runMilestone, Ve as scoreAllDays, He as scoreColeKripke, Xe as scoreConsensus, qe as scoreConsensusMajority, $e as scoreConsensusTyped, Ye as scoreEpochs, Ze as scoreEpochsTyped, Ke as scoreGgirHasib, Je as scoreGgirHasibVariant, Qe as scoreGgirSib, n_ as scoreSadeh, e_ as settleManualNonwearNights, __ as sha256StreamFeed, t_ as sha256StreamFinish, r_ as sha256StreamStart, i_ as shiftDate, o_ as sleepRegularityIndex, c_ as sleepWakeScores, l_ as sourceLabelsWallClockMs, a_ as spanFiniteMean, s_ as spliceDstPlaceholders, u_ as statesInPeriods, w_ as storedToGgirLabelsMs, g_ as streamParseFeed, b_ as streamParseFinish, d_ as streamParseFinishChunk, f_ as streamParseFinishChunkWithProgress, m_ as streamParseStart, h_ as streamParseStartData, p_ as streamParseStartWithEpoch, y_ as summarizeActimetricPreschoolWristRfClasses, v_ as summarizeExportGroups, k_ as summarizePhysicalActivityDays, S_ as summarizePhysicalActivityTrace, C_ as thresholdProbabilities, A_ as timeSemantics, R_ as timestampDiscontinuities, x_ as uniformTimestamps, D_ as utcDatesInSpan, M_ as utcDayIndex, P_ as validStateFraction, I_ as validWearDays, F_ as wallClockDstPlaceholders, W_ as wallClockLabels, O_ as wallMaskOntoGgirGrid, U_ as wearSiteHasptRouting, z_ as weekendDates, G_ as windowCoverage, N_ as zeroCrossingCounts };
