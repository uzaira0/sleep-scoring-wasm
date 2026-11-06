var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, u_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		V_.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = z_(n, V_.__wbindgen_malloc), _ = H_, t = V_.aw5batch_new(e, _);
		if (t[2]) throw T_(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, u_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), r = H_;
		var i = U_(_) ? 0 : G_(_, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_;
		const c = V_.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw T_(c[1]);
		return T_(c[0]);
	}
	subjects(n) {
		const e = V_.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw T_(e[2]);
		var _ = p_(e[0], e[1]).slice();
		return V_.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, d_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, d_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		V_.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = V_.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = V_.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = V_.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = V_.streamchunkresult_axisX(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = V_.streamchunkresult_axisY(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = V_.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = V_.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw T_(n[1]);
		return T_(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== V_.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = V_.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = D_(n[0], n[1]).slice(), V_.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get enmo5s() {
		const n = V_.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = V_.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = V_.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = v_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = V_.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = v_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = V_.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = h_(e[0], e[1]).slice();
		return V_.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return V_.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = V_.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = V_.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== V_.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = V_.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = D_(n[0], n[1]).slice(), V_.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = V_.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = V_.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = V_.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== V_.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return V_.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return V_.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return V_.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = V_.streamchunkresult_temperature(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = V_.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = V_.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = V_.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = V_.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = V_.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = V_.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = h_(n[0], n[1]).slice();
		return V_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function _(n) {
	const e = V_.actiwareIntervalStatistics(n);
	if (e[3]) throw T_(e[2]);
	var _ = p_(e[0], e[1]).slice();
	return V_.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function t(n, e, _) {
	const t = z_(e, V_.__wbindgen_malloc), r = H_, i = V_.actiwareSleepIntervals(n, t, r, U_(_) ? 0 : f_(_));
	if (i[3]) throw T_(i[2]);
	var o = p_(i[0], i[1]).slice();
	return V_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function r(n, e) {
	const _ = V_.actiwareWakeThreshold(n, U_(e) ? 0 : f_(e));
	if (_[3]) throw T_(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function i(n) {
	const e = V_.aggregateEpochSeries(n);
	if (e[2]) throw T_(e[1]);
	return T_(e[0]);
}
function o(n) {
	const e = P_(n, V_.__wbindgen_malloc), _ = H_, t = V_.analysisDatesOf(e, _);
	var r = p_(t[0], t[1]).slice();
	return V_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function c(n, e) {
	const _ = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), t = H_, r = V_.analysisWindowBounds(_, t, !U_(e), U_(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = h_(r[0], r[1]).slice(), V_.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function l(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), i = H_, o = V_.analysisWindowSlice(_, t, r, i);
	var c = y_(o[0], o[1]).slice();
	return V_.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function a(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = P_(e, V_.__wbindgen_malloc), c = H_, l = P_(_, V_.__wbindgen_malloc), a = H_, s = V_.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw T_(s[2]);
	var w = v_(s[0], s[1]).slice();
	return V_.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function s(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = P_(e, V_.__wbindgen_malloc), c = H_, l = P_(_, V_.__wbindgen_malloc), a = H_, s = V_.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw T_(s[2]);
	var w = v_(s[0], s[1]).slice();
	return V_.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function w(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = P_(e, V_.__wbindgen_malloc), c = H_;
	return V_.clippedUnionHours(r, i, o, c, _, t);
}
function g(n, e) {
	const _ = V_.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw T_(_[1]);
	return T_(_[0]);
}
function b(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = P_(e, V_.__wbindgen_malloc), c = H_, l = P_(_, V_.__wbindgen_malloc), a = H_, s = V_.computeAnglez5s(r, i, o, c, l, a, t);
	var w = h_(s[0], s[1]).slice();
	return V_.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function u(n) {
	let e, _;
	try {
		const i = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_, c = V_.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, T_(c[2]);
		return e = t, _ = r, D_(t, r);
	} finally {
		V_.__wbindgen_free(e, _, 1);
	}
}
function d(n, e, _, t, r, i, o) {
	const c = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), l = H_, a = P_(e, V_.__wbindgen_malloc), s = H_, w = N_(_, V_.__wbindgen_malloc), g = H_, b = P_(t, V_.__wbindgen_malloc), u = H_, d = N_(r, V_.__wbindgen_malloc), f = H_, m = O_(i, V_.__wbindgen_malloc), h = H_, p = N_(o, V_.__wbindgen_malloc), y = H_, v = V_.computeCircadianTyped(c, l, a, s, w, g, b, u, d, f, m, h, p, y);
	if (v[2]) throw T_(v[1]);
	return T_(v[0]);
}
function f(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = P_(e, V_.__wbindgen_malloc), c = H_, l = P_(_, V_.__wbindgen_malloc), a = H_, s = V_.computeEnmo5s(r, i, o, c, l, a, t);
	var w = h_(s[0], s[1]).slice();
	return V_.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function m(n, e, _, t, r) {
	const i = P_(n, V_.__wbindgen_malloc), o = H_, c = P_(e, V_.__wbindgen_malloc), l = H_, a = P_(_, V_.__wbindgen_malloc), s = H_, w = V_.computeMimsUnit(i, o, c, l, a, s, t, U_(r) ? 0 : f_(r));
	if (w[2]) throw T_(w[1]);
	return T_(w[0]);
}
function h(n, e, _, t, r) {
	const i = P_(n, V_.__wbindgen_malloc), o = H_, c = P_(e, V_.__wbindgen_malloc), l = H_, a = P_(_, V_.__wbindgen_malloc), s = H_, w = P_(t, V_.__wbindgen_malloc), g = H_, b = V_.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, U_(r) ? 0 : f_(r));
	if (b[2]) throw T_(b[1]);
	return T_(b[0]);
}
function p(n) {
	let e, _;
	try {
		const i = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_, c = V_.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, T_(c[2]);
		return e = t, _ = r, D_(t, r);
	} finally {
		V_.__wbindgen_free(e, _, 1);
	}
}
function y(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h) {
	const p = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), y = H_, v = P_(e, V_.__wbindgen_malloc), k = H_, S = N_(_, V_.__wbindgen_malloc), A = H_, C = P_(t, V_.__wbindgen_malloc), R = H_, D = N_(r, V_.__wbindgen_malloc), x = H_, I = O_(i, V_.__wbindgen_malloc), M = H_, W = N_(o, V_.__wbindgen_malloc), F = H_, U = O_(c, V_.__wbindgen_malloc), N = H_, O = N_(l, V_.__wbindgen_malloc), P = H_, z = P_(a, V_.__wbindgen_malloc), G = H_, T = N_(s, V_.__wbindgen_malloc), B = H_, j = P_(w, V_.__wbindgen_malloc), E = H_, L = N_(g, V_.__wbindgen_malloc), V = H_, H = P_(b, V_.__wbindgen_malloc), X = H_, $ = N_(u, V_.__wbindgen_malloc), q = H_, Z = P_(d, V_.__wbindgen_malloc), Y = H_, J = N_(f, V_.__wbindgen_malloc), K = H_, Q = O_(m, V_.__wbindgen_malloc), nn = H_, en = N_(h, V_.__wbindgen_malloc), _n = H_, tn = V_.computeNightDifficultyTyped(p, y, v, k, S, A, C, R, D, x, I, M, W, F, U, N, O, P, z, G, T, B, j, E, L, V, H, X, $, q, Z, Y, J, K, Q, nn, en, _n);
	if (tn[2]) throw T_(tn[1]);
	return T_(tn[0]);
}
function v(n) {
	let e, _;
	try {
		const i = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_, c = V_.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, T_(c[2]);
		return e = t, _ = r, D_(t, r);
	} finally {
		V_.__wbindgen_free(e, _, 1);
	}
}
function k(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h) {
	const p = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), y = H_, v = P_(e, V_.__wbindgen_malloc), k = H_, S = N_(_, V_.__wbindgen_malloc), A = H_, C = P_(t, V_.__wbindgen_malloc), R = H_, D = N_(r, V_.__wbindgen_malloc), x = H_, I = O_(i, V_.__wbindgen_malloc), M = H_, W = N_(o, V_.__wbindgen_malloc), F = H_, U = O_(c, V_.__wbindgen_malloc), N = H_, O = N_(l, V_.__wbindgen_malloc), P = H_, z = P_(a, V_.__wbindgen_malloc), G = H_, T = N_(s, V_.__wbindgen_malloc), B = H_, j = P_(w, V_.__wbindgen_malloc), E = H_, L = N_(g, V_.__wbindgen_malloc), V = H_, H = P_(b, V_.__wbindgen_malloc), X = H_, $ = N_(u, V_.__wbindgen_malloc), q = H_, Z = P_(d, V_.__wbindgen_malloc), Y = H_, J = N_(f, V_.__wbindgen_malloc), K = H_, Q = O_(m, V_.__wbindgen_malloc), nn = H_, en = N_(h, V_.__wbindgen_malloc), _n = H_, tn = V_.computeNightSignalsTyped(p, y, v, k, S, A, C, R, D, x, I, M, W, F, U, N, O, P, z, G, T, B, j, E, L, V, H, X, $, q, Z, Y, J, K, Q, nn, en, _n);
	if (tn[2]) throw T_(tn[1]);
	return T_(tn[0]);
}
function S(n, e, _) {
	const t = O_(n, V_.__wbindgen_malloc), r = H_, i = P_(e, V_.__wbindgen_malloc), o = H_, c = V_.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw T_(c[1]);
	return T_(c[0]);
}
function A(n) {
	const e = V_.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw T_(e[1]);
	return T_(e[0]);
}
function C(n) {
	const e = z_(n, V_.__wbindgen_malloc), _ = H_, t = V_.consensusDisagreementDetail(e, _);
	if (t[2]) throw T_(t[1]);
	return T_(t[0]);
}
function R(n) {
	const e = V_.consensusDisagreements(n);
	if (e[3]) throw T_(e[2]);
	var _ = p_(e[0], e[1]).slice();
	return V_.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function D(n) {
	const e = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), _ = H_, t = V_.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw T_(t[1]);
	return T_(t[0]);
}
function x(n) {
	const e = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), _ = H_, t = V_.convertScreensRedcapDiary(e, _);
	if (t[2]) throw T_(t[1]);
	return T_(t[0]);
}
function I(n) {
	const e = O_(n, V_.__wbindgen_malloc), _ = H_;
	V_.csvBufferAppend(e, _);
}
function M(n) {
	V_.csvBufferClear(n);
}
function W(n, e) {
	const _ = V_.cutpointEpochCompatibility(n, e);
	if (_[2]) throw T_(_[1]);
	return T_(_[0]);
}
function F(n, e, _, t, r) {
	const i = P_(n, V_.__wbindgen_malloc), o = H_, c = V_.cutpointToneCodes(i, o, e, _, t, r);
	var l = v_(c[0], c[1]).slice();
	return V_.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function U(n, e, _, t) {
	const r = V_.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = D_(r[0], r[1]).slice(), V_.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function N(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = N_(e, V_.__wbindgen_malloc), i = H_, o = V_.describeColumns(_, t, r, i);
	if (o[3]) throw T_(o[2]);
	var c = p_(o[0], o[1]).slice();
	return V_.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function O(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = P_(e, V_.__wbindgen_malloc), i = H_, o = V_.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw T_(o[2]);
	var c = v_(o[0], o[1]).slice();
	return V_.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function P(n, e) {
	let _, t;
	try {
		const r = O_(n, V_.__wbindgen_malloc), i = H_, o = G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), c = H_, l = V_.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], D_(l[0], l[1]);
	} finally {
		V_.__wbindgen_free(_, t, 1);
	}
}
function z(n) {
	const e = V_.detectGgirHasptVariant(n);
	if (e[2]) throw T_(e[1]);
	return T_(e[0]);
}
function G(n, e, _, t, r) {
	const i = P_(n, V_.__wbindgen_malloc), o = H_;
	var c = U_(e) ? 0 : G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), l = H_, a = U_(_) ? 0 : P_(_, V_.__wbindgen_malloc), s = H_, w = U_(t) ? 0 : P_(t, V_.__wbindgen_malloc), g = H_, b = U_(r) ? 0 : G_(r, V_.__wbindgen_malloc, V_.__wbindgen_realloc), u = H_;
	const d = V_.detectHdcza(i, o, c, l, a, s, w, g, b, u);
	if (d[2]) throw T_(d[1]);
	return T_(d[0]);
}
function T(n) {
	const e = P_(n, V_.__wbindgen_malloc), _ = H_;
	return 0 !== V_.detectHourClockJumpMs(e, _);
}
function B(n) {
	const e = P_(n, V_.__wbindgen_malloc), _ = H_, t = V_.detectNonwear(e, _);
	var r = v_(t[0], t[1]).slice();
	return V_.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function j(n) {
	const e = P_(n, V_.__wbindgen_malloc), _ = H_, t = V_.detectNonwearChoi2011(e, _);
	var r = v_(t[0], t[1]).slice();
	return V_.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function E(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = V_.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw T_(r[2]);
	var i = v_(r[0], r[1]).slice();
	return V_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function L(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = V_.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw T_(r[2]);
	var i = v_(r[0], r[1]).slice();
	return V_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function V(n) {
	let e, _;
	try {
		const i = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_, c = V_.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, T_(c[2]);
		return e = t, _ = r, D_(t, r);
	} finally {
		V_.__wbindgen_free(e, _, 1);
	}
}
function H(n, e, _, t, r, i, o) {
	const c = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), l = H_, a = G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), s = H_, w = P_(_, V_.__wbindgen_malloc), g = H_, b = P_(t, V_.__wbindgen_malloc), u = H_, d = P_(r, V_.__wbindgen_malloc), f = H_, m = V_.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, b, u, d, f, i, o);
	if (m[2]) throw T_(m[1]);
	return T_(m[0]);
}
function X(n, e, _) {
	const t = z_(_, V_.__wbindgen_malloc), r = H_, i = V_.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw T_(i[2]);
	var o = p_(i[0], i[1]).slice();
	return V_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function $(n, e, _, t) {
	const r = V_.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = h_(r[0], r[1]).slice(), V_.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function q(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = P_(e, V_.__wbindgen_malloc), i = H_, o = V_.epochAgreement(_, t, r, i);
	if (o[2]) throw T_(o[1]);
	return T_(o[0]);
}
function Z(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = V_.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = y_(o[0], o[1]).slice(), V_.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function Y(n, e, _) {
	const t = z_(n, V_.__wbindgen_malloc), r = H_, i = z_(e, V_.__wbindgen_malloc), o = H_, c = z_(_, V_.__wbindgen_malloc), l = H_, a = V_.exportFileNightFigures(t, r, i, o, c, l);
	if (a[3]) throw T_(a[2]);
	var s = p_(a[0], a[1]).slice();
	return V_.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function J(n) {
	const e = z_(n, V_.__wbindgen_malloc), _ = H_, t = V_.exportNapAggregate(e, _);
	if (t[2]) throw T_(t[1]);
	return T_(t[0]);
}
function K(n) {
	const e = O_(n, V_.__wbindgen_malloc), _ = H_, t = V_.extractCapsense(e, _);
	if (t[3]) throw T_(t[2]);
	var r = p_(t[0], t[1]).slice();
	return V_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Q(n, e, _, t, r) {
	const i = P_(n, V_.__wbindgen_malloc), o = H_, c = P_(e, V_.__wbindgen_malloc), l = H_, a = P_(_, V_.__wbindgen_malloc), s = H_, w = G_(r, V_.__wbindgen_malloc, V_.__wbindgen_realloc), g = H_, b = V_.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (b[3]) throw T_(b[2]);
	var u = h_(b[0], b[1]).slice();
	return V_.__wbindgen_free(b[0], 8 * b[1], 8), u;
}
function nn(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = G_(t, V_.__wbindgen_malloc, V_.__wbindgen_realloc), c = H_, l = V_.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw T_(l[2]);
	var a = h_(l[0], l[1]).slice();
	return V_.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function en(n, e, _, t, r) {
	const i = O_(_, V_.__wbindgen_malloc), o = H_, c = P_(t, V_.__wbindgen_malloc), l = H_, a = V_.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw T_(a[1]);
	return T_(a[0]);
}
function _n(n, e, _, t, r, i) {
	const o = P_(_, V_.__wbindgen_malloc), c = H_, l = P_(t, V_.__wbindgen_malloc), a = H_, s = G_(i, V_.__wbindgen_malloc, V_.__wbindgen_realloc), w = H_, g = V_.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw T_(g[2]);
	var b = h_(g[0], g[1]).slice();
	return V_.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function tn(n) {
	const e = V_.fuseNonwearMasks(n);
	if (e[2]) throw T_(e[1]);
	return T_(e[0]);
}
function rn(n, e, _) {
	var t = U_(_) ? 0 : G_(_, V_.__wbindgen_malloc, V_.__wbindgen_realloc), r = H_;
	const i = V_.generateActiwareRestIntervals(n, U_(e) ? 0 : f_(e), t, r);
	if (i[3]) throw T_(i[2]);
	var o = p_(i[0], i[1]).slice();
	return V_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function on() {
	const n = V_.getComputeCapabilitiesV1();
	if (n[2]) throw T_(n[1]);
	return T_(n[0]);
}
function cn(n, e, _) {
	const t = z_(_, V_.__wbindgen_malloc), r = H_, i = V_.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw T_(i[2]);
	var o = h_(i[0], i[1]).slice();
	return V_.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function ln(n, e) {
	var _ = U_(n) ? 0 : G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), t = H_;
	const r = V_.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw T_(r[1]);
	return T_(r[0]);
}
function an(n) {
	const e = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), _ = H_, t = V_.ggirConfigValues(e, _);
	if (t[2]) throw T_(t[1]);
	return T_(t[0]);
}
function sn(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = P_(e, V_.__wbindgen_malloc), i = H_, o = V_.ggirDayValidFractions(_, t, r, i);
	if (o[2]) throw T_(o[1]);
	return T_(o[0]);
}
function wn(n, e, _) {
	const t = P_(n, V_.__wbindgen_malloc), r = H_;
	var i = U_(e) ? 0 : P_(e, V_.__wbindgen_malloc), o = H_, c = U_(_) ? 0 : G_(_, V_.__wbindgen_malloc, V_.__wbindgen_realloc), l = H_;
	const a = V_.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw T_(a[2]);
	var s = v_(a[0], a[1]).slice();
	return V_.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function gn(n, e) {
	const _ = O_(n, V_.__wbindgen_malloc), t = H_;
	var r = U_(e) ? 0 : G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), i = H_;
	const o = V_.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw T_(o[1]);
	return T_(o[0]);
}
function bn(n, e, _) {
	const t = z_(e, V_.__wbindgen_malloc), r = H_;
	var i = U_(_) ? 0 : P_(_, V_.__wbindgen_malloc), o = H_;
	const c = V_.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw T_(c[2]);
	var l = p_(c[0], c[1]).slice();
	return V_.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function un(n) {
	var e = U_(n) ? 0 : G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), _ = H_;
	const t = V_.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw T_(t[1]);
	return t[0];
}
function dn(n, e, _, t) {
	const r = N_(n, V_.__wbindgen_malloc), i = H_, o = z_(_, V_.__wbindgen_malloc), c = H_;
	var l = U_(t) ? 0 : P_(t, V_.__wbindgen_malloc), a = H_;
	const s = V_.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw T_(s[2]);
	var w = h_(s[0], s[1]).slice();
	return V_.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function fn(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = z_(e, V_.__wbindgen_malloc), i = H_, o = V_.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw T_(o[2]);
	var c = h_(o[0], o[1]).slice();
	return V_.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function mn(n, e, _, t) {
	const r = z_(n, V_.__wbindgen_malloc), i = H_, o = P_(e, V_.__wbindgen_malloc), c = H_, l = P_(_, V_.__wbindgen_malloc), a = H_, s = P_(t, V_.__wbindgen_malloc), w = H_, g = V_.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw T_(g[1]);
	return T_(g[0]);
}
function hn(n) {
	const e = O_(n, V_.__wbindgen_malloc), _ = H_, t = V_.ggirMilestoneVersion(e, _);
	if (t[3]) throw T_(t[2]);
	let r;
	return 0 !== t[0] && (r = D_(t[0], t[1]).slice(), V_.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function pn(n) {
	const e = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), _ = H_, t = V_.ggirNonwearApproach(e, _);
	if (t[3]) throw T_(t[2]);
	let r;
	return 0 !== t[0] && (r = D_(t[0], t[1]).slice(), V_.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function yn(n) {
	const e = V_.ggirPersonSummaries(n);
	if (e[2]) throw T_(e[1]);
	return T_(e[0]);
}
function vn() {
	const n = V_.ggirRerunProfiles();
	if (n[3]) throw T_(n[2]);
	var e = p_(n[0], n[1]).slice();
	return V_.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function kn(n) {
	const e = O_(n, V_.__wbindgen_malloc), _ = H_, t = V_.ggirSavedNonwearWindows(e, _);
	if (t[2]) throw T_(t[1]);
	return t[0] >>> 0;
}
function Sn(n, e, _, t) {
	const r = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), i = H_, o = G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), c = H_, l = G_(_, V_.__wbindgen_malloc, V_.__wbindgen_realloc), a = H_, s = z_(t, V_.__wbindgen_malloc), w = H_, g = V_.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw T_(g[2]);
	let b;
	return 0 !== g[0] && (b = p_(g[0], g[1]).slice(), V_.__wbindgen_free(g[0], 4 * g[1], 4)), b;
}
function An(n, e) {
	const _ = V_.ggirSummaryDenominator(n, e);
	if (_[2]) throw T_(_[1]);
	return T_(_[0]);
}
function Cn(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = P_(e, V_.__wbindgen_malloc), i = H_, o = V_.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Rn(n) {
	let e, _;
	try {
		const i = O_(n, V_.__wbindgen_malloc), o = H_, c = V_.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, T_(c[2]);
		return e = t, _ = r, D_(t, r);
	} finally {
		V_.__wbindgen_free(e, _, 1);
	}
}
function Dn(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = P_(e, V_.__wbindgen_malloc), c = H_, l = P_(_, V_.__wbindgen_malloc), a = H_, s = P_(t, V_.__wbindgen_malloc), w = H_, g = V_.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw T_(g[1]);
	return T_(g[0]);
}
function xn() {
	V_.installPanicHook();
}
function In(n) {
	const e = z_(n, V_.__wbindgen_malloc), _ = H_, t = V_.interRaterReliability(e, _);
	if (t[2]) throw T_(t[1]);
	return T_(t[0]);
}
function Mn(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = V_.irregularInternalDays(_, t, e);
	var i = p_(r[0], r[1]).slice();
	return V_.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Wn(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = P_(e, V_.__wbindgen_malloc), c = H_, l = P_(_, V_.__wbindgen_malloc), a = H_, s = V_.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw T_(s[1]);
	return T_(s[0]);
}
function Fn(n, e, _) {
	const t = P_(n, V_.__wbindgen_malloc), r = H_, i = V_.markerIndexRange(t, r, e, _);
	var o = y_(i[0], i[1]).slice();
	return V_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Un(n, e, _, t, r, i, o) {
	const c = P_(n, V_.__wbindgen_malloc), l = H_, a = P_(e, V_.__wbindgen_malloc), s = H_, w = V_.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw T_(w[1]);
	return T_(w[0]);
}
function Nn(n) {
	const e = P_(n, V_.__wbindgen_malloc), _ = H_, t = V_.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function On(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = P_(e, V_.__wbindgen_malloc), i = H_, o = V_.midSleepClockHours(_, t, r, i);
	var c = h_(o[0], o[1]).slice();
	return V_.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Pn(n, e, _, t, r) {
	const i = P_(n, V_.__wbindgen_malloc), o = H_, c = P_(e, V_.__wbindgen_malloc), l = H_, a = P_(_, V_.__wbindgen_malloc), s = H_, w = V_.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw T_(w[1]);
	return T_(w[0]);
}
function zn(n) {
	const e = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), _ = H_, t = V_.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = D_(t[0], t[1]).slice(), V_.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Gn(n, e, _, t, r) {
	const i = P_(_, V_.__wbindgen_malloc), o = H_, c = P_(t, V_.__wbindgen_malloc), l = H_, a = P_(r, V_.__wbindgen_malloc), s = H_, w = V_.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw T_(w[1]);
	return T_(w[0]);
}
function Tn(n, e, _, t) {
	let r, i;
	try {
		const l = N_(n, V_.__wbindgen_malloc), a = H_, s = G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), w = H_, g = V_.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, T_(g[2]);
		return r = o, i = c, D_(o, c);
	} finally {
		V_.__wbindgen_free(r, i, 1);
	}
}
function Bn(n) {
	const e = P_(n, V_.__wbindgen_malloc), _ = H_, t = V_.nonwearInSleepCounts(e, _);
	if (t[2]) throw T_(t[1]);
	return T_(t[0]);
}
function jn(n) {
	const e = V_.nonwearSleepOverlap(n);
	if (e[2]) throw T_(e[1]);
	return T_(e[0]);
}
function En(n, e, _) {
	const t = P_(n, V_.__wbindgen_malloc), r = H_, i = P_(e, V_.__wbindgen_malloc), o = H_, c = V_.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw T_(c[1]);
	return T_(c[0]);
}
function Ln(n, e, _, t, r, i) {
	const o = G_(r, V_.__wbindgen_malloc, V_.__wbindgen_realloc), c = H_, l = V_.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw T_(l[2]);
	var a = h_(l[0], l[1]).slice();
	return V_.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function Vn(n) {
	const e = V_.parseActigraphCsvBuffered(n);
	if (e[2]) throw T_(e[1]);
	return T_(e[0]);
}
function Hn(n, e, _, t) {
	const r = O_(n, V_.__wbindgen_malloc), i = H_;
	var o = U_(e) ? 0 : G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), c = H_, l = U_(_) ? 0 : z_(_, V_.__wbindgen_malloc), a = H_, s = U_(t) ? 0 : G_(t, V_.__wbindgen_malloc, V_.__wbindgen_realloc), w = H_;
	const g = V_.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw T_(g[1]);
	return T_(g[0]);
}
function Xn(n, e) {
	const _ = O_(n, V_.__wbindgen_malloc), t = H_, r = G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), i = H_, o = V_.parseEpochSeries(_, t, r, i);
	if (o[2]) throw T_(o[1]);
	return T_(o[0]);
}
function $n(n) {
	const e = O_(n, V_.__wbindgen_malloc), _ = H_, t = V_.parseGeneactivBin(e, _);
	if (t[2]) throw T_(t[1]);
	return T_(t[0]);
}
function qn() {
	const n = V_.parseGeneactivCsvBuffered();
	if (n[2]) throw T_(n[1]);
	return T_(n[0]);
}
function Zn(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = O_(e, V_.__wbindgen_malloc), c = H_, l = O_(_, V_.__wbindgen_malloc), a = H_, s = V_.participantValidity(r, i, o, c, l, a, U_(t) ? 0 : f_(t));
	if (s[2]) throw T_(s[1]);
	return T_(s[0]);
}
function Yn(n, e, _, t, r) {
	const i = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_, c = P_(e, V_.__wbindgen_malloc), l = H_;
	var a = U_(_) ? 0 : P_(_, V_.__wbindgen_malloc), s = H_;
	const w = V_.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw T_(w[1]);
	return T_(w[0]);
}
function Jn(n) {
	let e, _;
	try {
		const i = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_, c = V_.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, T_(c[2]);
		return e = t, _ = r, D_(t, r);
	} finally {
		V_.__wbindgen_free(e, _, 1);
	}
}
function Kn(n, e, _, t, r, i) {
	const o = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), c = H_, l = P_(e, V_.__wbindgen_malloc), a = H_, s = P_(_, V_.__wbindgen_malloc), w = H_, g = O_(t, V_.__wbindgen_malloc), b = H_, u = O_(r, V_.__wbindgen_malloc), d = H_, f = G_(i, V_.__wbindgen_malloc, V_.__wbindgen_realloc), m = H_, h = V_.placeMarkersBatch(o, c, l, a, s, w, g, b, u, d, f, m);
	if (h[2]) throw T_(h[1]);
	return T_(h[0]);
}
function Qn(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h, p) {
	const y = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), v = H_, k = P_(e, V_.__wbindgen_malloc), S = H_, A = N_(_, V_.__wbindgen_malloc), C = H_, R = P_(t, V_.__wbindgen_malloc), D = H_, x = N_(r, V_.__wbindgen_malloc), I = H_, M = O_(i, V_.__wbindgen_malloc), W = H_, F = N_(o, V_.__wbindgen_malloc), U = H_, N = O_(c, V_.__wbindgen_malloc), O = H_, P = N_(l, V_.__wbindgen_malloc), z = H_, G = P_(a, V_.__wbindgen_malloc), T = H_, B = N_(s, V_.__wbindgen_malloc), j = H_, E = P_(w, V_.__wbindgen_malloc), L = H_, V = N_(g, V_.__wbindgen_malloc), H = H_, X = P_(b, V_.__wbindgen_malloc), $ = H_, q = N_(u, V_.__wbindgen_malloc), Z = H_, Y = P_(d, V_.__wbindgen_malloc), J = H_, K = N_(f, V_.__wbindgen_malloc), Q = H_, nn = O_(m, V_.__wbindgen_malloc), en = H_, _n = N_(h, V_.__wbindgen_malloc), tn = H_;
	var rn = U_(p) ? 0 : G_(p, V_.__wbindgen_malloc, V_.__wbindgen_realloc), on = H_;
	const cn = V_.placeMarkersTyped(y, v, k, S, A, C, R, D, x, I, M, W, F, U, N, O, P, z, G, T, B, j, E, L, V, H, X, $, q, Z, Y, J, K, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw T_(cn[1]);
	return T_(cn[0]);
}
function ne(n) {
	let e, _;
	try {
		const i = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_, c = V_.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, T_(c[2]);
		return e = t, _ = r, D_(t, r);
	} finally {
		V_.__wbindgen_free(e, _, 1);
	}
}
function ee(n, e, _, t) {
	const r = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), i = H_, o = P_(e, V_.__wbindgen_malloc), c = H_, l = P_(_, V_.__wbindgen_malloc), a = H_, s = O_(t, V_.__wbindgen_malloc), w = H_, g = V_.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw T_(g[1]);
	return T_(g[0]);
}
function _e(n, e, _, t, r, i, o, c, l, a, s) {
	const w = O_(n, V_.__wbindgen_malloc), g = H_, b = G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), u = H_;
	var d = U_(_) ? 0 : O_(_, V_.__wbindgen_malloc), f = H_, m = U_(t) ? 0 : O_(t, V_.__wbindgen_malloc), h = H_, p = U_(r) ? 0 : O_(r, V_.__wbindgen_malloc), y = H_, v = U_(i) ? 0 : O_(i, V_.__wbindgen_malloc), k = H_, S = U_(o) ? 0 : O_(o, V_.__wbindgen_malloc), A = H_, C = U_(c) ? 0 : G_(c, V_.__wbindgen_malloc, V_.__wbindgen_realloc), R = H_, D = U_(l) ? 0 : G_(l, V_.__wbindgen_malloc, V_.__wbindgen_realloc), x = H_, I = U_(a) ? 0 : G_(a, V_.__wbindgen_malloc, V_.__wbindgen_realloc), M = H_, W = U_(s) ? 0 : G_(s, V_.__wbindgen_malloc, V_.__wbindgen_realloc), F = H_;
	const U = V_.prepareGgirRecording(w, g, b, u, d, f, m, h, p, y, v, k, S, A, C, R, D, x, I, M, W, F);
	if (U[2]) throw T_(U[1]);
	return T_(U[0]);
}
function te(n, e) {
	const _ = O_(n, V_.__wbindgen_malloc), t = H_;
	var r = U_(e) ? 0 : G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), i = H_;
	const o = V_.processGt3xPart1(_, t, r, i);
	if (o[2]) throw T_(o[1]);
	return T_(o[0]);
}
function re(n, e, _) {
	const t = O_(n, V_.__wbindgen_malloc), r = H_;
	var i = U_(_) ? 0 : G_(_, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_;
	const c = V_.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw T_(c[1]);
	return T_(c[0]);
}
function ie(n, e, _, t, r, i, o) {
	const c = P_(n, V_.__wbindgen_malloc), l = H_, a = P_(e, V_.__wbindgen_malloc), s = H_, w = P_(_, V_.__wbindgen_malloc), g = H_;
	var b = U_(i) ? 0 : G_(i, V_.__wbindgen_malloc, V_.__wbindgen_realloc), u = H_, d = U_(o) ? 0 : G_(o, V_.__wbindgen_malloc, V_.__wbindgen_realloc), f = H_;
	const m = V_.processRawXyz(c, l, a, s, w, g, t, r, b, u, d, f);
	if (m[2]) throw T_(m[1]);
	return T_(m[0]);
}
function oe(n, e, _, t, r, i, o, c) {
	const l = P_(n, V_.__wbindgen_malloc), a = H_, s = P_(e, V_.__wbindgen_malloc), w = H_, g = P_(_, V_.__wbindgen_malloc), b = H_, u = P_(t, V_.__wbindgen_malloc), d = H_;
	var f = U_(i) ? 0 : G_(i, V_.__wbindgen_malloc, V_.__wbindgen_realloc), m = H_, h = U_(o) ? 0 : G_(o, V_.__wbindgen_malloc, V_.__wbindgen_realloc), p = H_, y = U_(c) ? 0 : P_(c, V_.__wbindgen_malloc), v = H_;
	const k = V_.processRawXyzImputed(l, a, s, w, g, b, u, d, r, f, m, h, p, y, v);
	if (k[2]) throw T_(k[1]);
	return T_(k[0]);
}
function ce(n, e, _, t, r, i, o, c, l, a) {
	const s = P_(n, V_.__wbindgen_malloc), w = H_, g = P_(e, V_.__wbindgen_malloc), b = H_, u = P_(_, V_.__wbindgen_malloc), d = H_, f = P_(t, V_.__wbindgen_malloc), m = H_;
	var h = U_(i) ? 0 : G_(i, V_.__wbindgen_malloc, V_.__wbindgen_realloc), p = H_, y = U_(c) ? 0 : G_(c, V_.__wbindgen_malloc, V_.__wbindgen_realloc), v = H_, k = U_(a) ? 0 : P_(a, V_.__wbindgen_malloc), S = H_;
	const A = V_.processRawXyzImputedWithEpoch(s, w, g, b, u, d, f, m, r, h, p, o, y, v, U_(l) ? 16777215 : l ? 1 : 0, k, S);
	if (A[2]) throw T_(A[1]);
	return T_(A[0]);
}
function le(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = O_(e, V_.__wbindgen_malloc), c = H_, l = P_(t, V_.__wbindgen_malloc), a = H_, s = V_.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = v_(s[0], s[1]).slice();
	return V_.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function ae(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = P_(e, V_.__wbindgen_malloc), c = H_, l = P_(_, V_.__wbindgen_malloc), a = H_, s = V_.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw T_(s[1]);
	return T_(s[0]);
}
function se(n, e, _) {
	const t = O_(n, V_.__wbindgen_malloc), r = H_;
	var i = U_(e) ? 0 : G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_;
	const c = V_.readGgirMeta(t, r, i, o, U_(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw T_(c[1]);
	return T_(c[0]);
}
function we(n, e) {
	const _ = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), t = H_;
	var r = U_(e) ? 0 : G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), i = H_;
	const o = V_.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw T_(o[1]);
	return T_(o[0]);
}
function ge() {
	return V_.recommended_chunk_size_mb() >>> 0;
}
function be(n, e) {
	const _ = z_(e, V_.__wbindgen_malloc), t = H_, r = V_.rerunGgirResults(n, _, t);
	if (r[2]) throw T_(r[1]);
	return T_(r[0]);
}
function ue(n) {
	const e = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), _ = H_, t = V_.resolveTimezone(e, _);
	if (t[2]) throw T_(t[1]);
	return T_(t[0]);
}
function de(n, e, _) {
	const t = P_(n, V_.__wbindgen_malloc), r = H_, i = P_(e, V_.__wbindgen_malloc), o = H_, c = N_(_, V_.__wbindgen_malloc), l = H_, a = V_.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw T_(a[2]);
	var s = p_(a[0], a[1]).slice();
	return V_.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function fe(n, e, _, t, r, i, o, c, l, a, s, w, g, b) {
	const u = O_(n, V_.__wbindgen_malloc), d = H_, f = G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), m = H_;
	var h = U_(_) ? 0 : O_(_, V_.__wbindgen_malloc), p = H_, y = U_(t) ? 0 : O_(t, V_.__wbindgen_malloc), v = H_, k = U_(r) ? 0 : O_(r, V_.__wbindgen_malloc), S = H_, A = U_(i) ? 0 : O_(i, V_.__wbindgen_malloc), C = H_, R = U_(o) ? 0 : O_(o, V_.__wbindgen_malloc), D = H_, x = U_(c) ? 0 : G_(c, V_.__wbindgen_malloc, V_.__wbindgen_realloc), I = H_, M = U_(l) ? 0 : G_(l, V_.__wbindgen_malloc, V_.__wbindgen_realloc), W = H_, F = U_(a) ? 0 : z_(a, V_.__wbindgen_malloc), U = H_, N = U_(w) ? 0 : G_(w, V_.__wbindgen_malloc, V_.__wbindgen_realloc), O = H_, P = U_(g) ? 0 : G_(g, V_.__wbindgen_malloc, V_.__wbindgen_realloc), z = H_;
	const G = V_.reviewGgirResults(u, d, f, m, h, p, y, v, k, S, A, C, R, D, x, I, M, W, F, U, s, N, O, P, z, U_(b) ? 4294967297 : b >>> 0);
	if (G[2]) throw T_(G[1]);
	return T_(G[0]);
}
function me(n) {
	const e = z_(n, V_.__wbindgen_malloc), _ = H_, t = V_.reviewNonwearFile(e, _);
	if (t[2]) throw T_(t[1]);
	return T_(t[0]);
}
function he(n) {
	const e = z_(n, V_.__wbindgen_malloc), _ = H_, t = V_.reviewNonwearTotals(e, _);
	if (t[2]) throw T_(t[1]);
	return T_(t[0]);
}
function pe(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = V_.roundCountStorage(_, t, e);
	var i = h_(r[0], r[1]).slice();
	return V_.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function ye(n) {
	const e = V_.runFullPipelineV1(n);
	if (e[2]) throw T_(e[1]);
	return T_(e[0]);
}
function ve(n) {
	const e = V_.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw T_(e[1]);
	return T_(e[0]);
}
function ke(n) {
	const e = V_.runGgirPart3(n);
	if (e[2]) throw T_(e[1]);
	return T_(e[0]);
}
function Se(n) {
	const e = z_(n, V_.__wbindgen_malloc), _ = H_, t = V_.scoreAllDays(e, _);
	if (t[3]) throw T_(t[2]);
	var r = p_(t[0], t[1]).slice();
	return V_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Ae(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = V_.scoreColeKripke(_, t, e);
	var i = v_(r[0], r[1]).slice();
	return V_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Ce(n) {
	let e, _;
	try {
		const i = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_, c = V_.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, T_(c[2]);
		return e = t, _ = r, D_(t, r);
	} finally {
		V_.__wbindgen_free(e, _, 1);
	}
}
function Re(n, e, _) {
	const t = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), r = H_, i = O_(e, V_.__wbindgen_malloc), o = H_, c = N_(_, V_.__wbindgen_malloc), l = H_, a = V_.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw T_(a[1]);
	return T_(a[0]);
}
function De(n) {
	let e, _;
	try {
		const i = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_, c = V_.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, T_(c[2]);
		return e = t, _ = r, D_(t, r);
	} finally {
		V_.__wbindgen_free(e, _, 1);
	}
}
function xe(n, e, _, t, r, i) {
	const o = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), c = H_, l = P_(e, V_.__wbindgen_malloc), a = H_, s = P_(_, V_.__wbindgen_malloc), w = H_, g = P_(t, V_.__wbindgen_malloc), b = H_, u = V_.scoreEpochsTyped(o, c, l, a, s, w, g, b, r, i);
	if (u[2]) throw T_(u[1]);
	return T_(u[0]);
}
function Ie(n, e, _) {
	const t = P_(n, V_.__wbindgen_malloc), r = H_;
	var i = U_(e) ? 0 : G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_, c = U_(_) ? 0 : P_(_, V_.__wbindgen_malloc), l = H_;
	const a = V_.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw T_(a[2]);
	var s = v_(a[0], a[1]).slice();
	return V_.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function Me(n) {
	const e = V_.scoreGgirHasibVariant(n);
	if (e[2]) throw T_(e[1]);
	return T_(e[0]);
}
function We(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = V_.scoreSadeh(_, t, e);
	var i = v_(r[0], r[1]).slice();
	return V_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Fe(n, e, _) {
	const t = G_(_, V_.__wbindgen_malloc, V_.__wbindgen_realloc), r = H_, i = V_.screensRestIntervals(n, U_(e) ? 0 : f_(e), t, r);
	if (i[2]) throw T_(i[1]);
	return T_(i[0]);
}
function Ue(n) {
	const e = z_(n, V_.__wbindgen_malloc), _ = H_, t = V_.settleManualNonwearNights(e, _);
	if (t[3]) throw T_(t[2]);
	var r = p_(t[0], t[1]).slice();
	return V_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Ne(n) {
	const e = O_(n, V_.__wbindgen_malloc), _ = H_, t = V_.sha256StreamFeed(e, _);
	if (t[1]) throw T_(t[0]);
}
function Oe() {
	let n, e;
	try {
		const r = V_.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, T_(r[2]);
		return n = _, e = t, D_(_, t);
	} finally {
		V_.__wbindgen_free(n, e, 1);
	}
}
function Pe() {
	V_.sha256StreamStart();
}
function ze(n, e) {
	const _ = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), t = H_, r = V_.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = D_(r[0], r[1]).slice(), V_.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function Ge(n, e, _, t, r) {
	const i = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_, c = P_(e, V_.__wbindgen_malloc), l = H_, a = N_(_, V_.__wbindgen_malloc), s = H_, w = P_(t, V_.__wbindgen_malloc), g = H_, b = N_(r, V_.__wbindgen_malloc), u = H_, d = V_.sleepRegularityIndex(i, o, c, l, a, s, w, g, b, u);
	if (d[3]) throw T_(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function Te(n, e) {
	const _ = V_.sleepWakeScores(n, U_(e) ? 0 : f_(e));
	if (_[2]) throw T_(_[1]);
	return T_(_[0]);
}
function Be(n) {
	const e = z_(n, V_.__wbindgen_malloc), _ = H_, t = V_.sourceLabelsWallClockMs(e, _);
	var r = h_(t[0], t[1]).slice();
	return V_.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function je(n, e, _) {
	const t = P_(n, V_.__wbindgen_malloc), r = H_, i = z_(e, V_.__wbindgen_malloc), o = H_, c = P_(_, V_.__wbindgen_malloc), l = H_, a = V_.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw T_(a[2]);
	let s;
	return 0 !== a[0] && (s = h_(a[0], a[1]).slice(), V_.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function Ee(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = O_(e, V_.__wbindgen_malloc), c = H_, l = P_(_, V_.__wbindgen_malloc), a = H_, s = P_(t, V_.__wbindgen_malloc), w = H_, g = V_.statesInPeriods(r, i, o, c, l, a, s, w);
	var b = v_(g[0], g[1]).slice();
	return V_.__wbindgen_free(g[0], 1 * g[1], 1), b;
}
function Le(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = z_(e, V_.__wbindgen_malloc), i = H_, o = V_.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw T_(o[2]);
	var c = h_(o[0], o[1]).slice();
	return V_.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Ve(n) {
	const e = O_(n, V_.__wbindgen_malloc), _ = H_, t = V_.streamParseFeed(e, _);
	if (t[2]) throw T_(t[1]);
	return t[0] >>> 0;
}
function He() {
	const n = V_.streamParseFinishChunk();
	if (n[2]) throw T_(n[1]);
	return e.__wrap(n[0]);
}
function Xe(n) {
	const _ = V_.streamParseFinishChunkWithProgress(n);
	if (_[2]) throw T_(_[1]);
	return e.__wrap(_[0]);
}
function $e(n, e, _) {
	var t = U_(_) ? 0 : G_(_, V_.__wbindgen_malloc, V_.__wbindgen_realloc), r = H_;
	const i = V_.streamParseStart(n, e, t, r);
	if (i[1]) throw T_(i[0]);
}
function qe(n, e, _, t, r) {
	var i = U_(t) ? 0 : G_(t, V_.__wbindgen_malloc, V_.__wbindgen_realloc), o = H_;
	const c = V_.streamParseStartWithEpoch(n, e, _, i, o, !U_(r), U_(r) ? 0 : r);
	if (c[1]) throw T_(c[0]);
}
function Ze(n, e) {
	const _ = O_(n, V_.__wbindgen_malloc), t = H_, r = V_.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw T_(r[1]);
	return T_(r[0]);
}
function Ye(n) {
	const e = V_.summarizeExportGroups(n);
	if (e[3]) throw T_(e[2]);
	var _ = p_(e[0], e[1]).slice();
	return V_.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function Je(n) {
	const e = V_.summarizePhysicalActivityDays(n);
	if (e[2]) throw T_(e[1]);
	return T_(e[0]);
}
function Ke(n) {
	const e = V_.summarizePhysicalActivityTrace(n);
	if (e[2]) throw T_(e[1]);
	return T_(e[0]);
}
function Qe(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = V_.thresholdProbabilities(_, t, e);
	var i = v_(r[0], r[1]).slice();
	return V_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function n_(n) {
	const e = z_(n, V_.__wbindgen_malloc), _ = H_, t = V_.timeSemantics(e, _);
	if (t[3]) throw T_(t[2]);
	var r = p_(t[0], t[1]).slice();
	return V_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function e_(n, e, _) {
	const t = P_(n, V_.__wbindgen_malloc), r = H_, i = V_.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw T_(i[2]);
	var o = p_(i[0], i[1]).slice();
	return V_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function __(n, e, _) {
	const t = V_.uniformTimestamps(n, e, _);
	var r = h_(t[0], t[1]).slice();
	return V_.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function t_(n) {
	const e = P_(n, V_.__wbindgen_malloc), _ = H_, t = V_.utcDayIndex(e, _);
	if (t[2]) throw T_(t[1]);
	return T_(t[0]);
}
function r_(n) {
	const e = O_(n, V_.__wbindgen_malloc), _ = H_, t = V_.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function i_(n, e) {
	const _ = P_(n, V_.__wbindgen_malloc), t = H_, r = V_.validWearDays(_, t, U_(e) ? 0 : f_(e));
	if (r[3]) throw T_(r[2]);
	var i = v_(r[0], r[1]).slice();
	return V_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function o_(n, e, _) {
	const t = P_(n, V_.__wbindgen_malloc), r = H_, i = V_.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw T_(i[1]);
	return T_(i[0]);
}
function c_(n) {
	const e = P_(n, V_.__wbindgen_malloc), _ = H_, t = V_.wallClockLabels(e, _);
	var r = p_(t[0], t[1]).slice();
	return V_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function l_(n, e, _) {
	const t = O_(n, V_.__wbindgen_malloc), r = H_, i = z_(_, V_.__wbindgen_malloc), o = H_, c = V_.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw T_(c[2]);
	var l = v_(c[0], c[1]).slice();
	return V_.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function a_(n, e) {
	const _ = G_(n, V_.__wbindgen_malloc, V_.__wbindgen_realloc), t = H_;
	var r = U_(e) ? 0 : G_(e, V_.__wbindgen_malloc, V_.__wbindgen_realloc), i = H_;
	const o = V_.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw T_(o[1]);
	return T_(o[0]);
}
function s_(n) {
	const e = z_(n, V_.__wbindgen_malloc), _ = H_, t = V_.weekendDates(e, _);
	var r = v_(t[0], t[1]).slice();
	return V_.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function w_(n, e, _, t) {
	const r = P_(n, V_.__wbindgen_malloc), i = H_, o = V_.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function g_(n, e, _, t, r) {
	const i = P_(n, V_.__wbindgen_malloc), o = H_, c = P_(e, V_.__wbindgen_malloc), l = H_, a = P_(_, V_.__wbindgen_malloc), s = H_, w = V_.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw T_(w[1]);
	return T_(w[0]);
}
function b_() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(D_(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = G_(String(e), V_.__wbindgen_malloc, V_.__wbindgen_realloc), t = H_;
				S_().setInt32(n + 4, t, !0), S_().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				S_().setBigInt64(n + 8, U_(_) ? BigInt(0) : _, !0), S_().setInt32(n + 0, !U_(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return U_(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = G_(m_(e), V_.__wbindgen_malloc, V_.__wbindgen_realloc), t = H_;
				S_().setInt32(n + 4, t, !0), S_().setInt32(n + 0, _, !0);
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
				S_().setFloat64(n + 8, U_(_) ? 0 : _, !0), S_().setInt32(n + 0, !U_(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = U_(_) ? 0 : G_(_, V_.__wbindgen_malloc, V_.__wbindgen_realloc), r = H_;
				S_().setInt32(n + 4, r, !0), S_().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(D_(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return F_(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return F_(function(n, e, _, t) {
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
					_ = n, t = e, console.error(D_(n, e));
				} finally {
					V_.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return F_(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return F_(function(n, e) {
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
			__wbg_length_d807629e96c741b8: function(n) {
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
				return new Uint32Array(y_(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(h_(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== A_ && 0 !== A_.byteLength || (A_ = new Float32Array(V_.memory.buffer)), A_).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return F_(function(n) {
					return n.next();
				}, arguments);
			},
			__wbg_next_7646edaa39458ef7: function(n) {
				return n.next;
			},
			__wbg_ownKeys_0231887680f0f945: function() {
				return F_(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(v_(n, e), _);
			},
			__wbg_prototypesetcall_c5875dab42ff6b97: function(n, e, _) {
				Float64Array.prototype.set.call(h_(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return F_(function(n, e, _) {
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
				const _ = G_(e.stack, V_.__wbindgen_malloc, V_.__wbindgen_realloc), t = H_;
				S_().setInt32(n + 4, t, !0), S_().setInt32(n + 0, _, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return U_(n) ? 0 : f_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return U_(n) ? 0 : f_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return U_(n) ? 0 : f_(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return U_(n) ? 0 : f_(n);
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
				return v_(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return D_(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = V_.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
const u_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => V_.__wbg_aw5batch_free(n >>> 0, 1)), d_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => V_.__wbg_streamchunkresult_free(n >>> 0, 1));
function f_(n) {
	const e = V_.__externref_table_alloc();
	return V_.__wbindgen_externrefs.set(e, n), e;
}
function m_(n) {
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
		e > 0 && (_ += m_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + m_(n[t]);
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
function h_(n, e) {
	return n >>>= 0, R_().subarray(n / 8, n / 8 + e);
}
function p_(n, e) {
	n >>>= 0;
	const _ = S_(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(V_.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return V_.__externref_drop_slice(n, e), t;
}
function y_(n, e) {
	return n >>>= 0, I_().subarray(n / 4, n / 4 + e);
}
function v_(n, e) {
	return n >>>= 0, W_().subarray(n / 1, n / 1 + e);
}
let k_ = null;
function S_() {
	return (null === k_ || !0 === k_.buffer.detached || void 0 === k_.buffer.detached && k_.buffer !== V_.memory.buffer) && (k_ = new DataView(V_.memory.buffer)), k_;
}
let A_ = null, C_ = null;
function R_() {
	return null !== C_ && 0 !== C_.byteLength || (C_ = new Float64Array(V_.memory.buffer)), C_;
}
function D_(n, e) {
	return function(n, e) {
		return E_ += e, E_ >= j_ && (B_ = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), B_.decode(), E_ = e), B_.decode(W_().subarray(n, n + e));
	}(n >>>= 0, e);
}
let x_ = null;
function I_() {
	return null !== x_ && 0 !== x_.byteLength || (x_ = new Uint32Array(V_.memory.buffer)), x_;
}
let M_ = null;
function W_() {
	return null !== M_ && 0 !== M_.byteLength || (M_ = new Uint8Array(V_.memory.buffer)), M_;
}
function F_(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = f_(_);
		V_.__wbindgen_exn_store(n);
	}
}
function U_(n) {
	return null == n;
}
function N_(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return I_().set(n, _ / 4), H_ = n.length, _;
}
function O_(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return W_().set(n, _ / 1), H_ = n.length, _;
}
function P_(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return R_().set(n, _ / 8), H_ = n.length, _;
}
function z_(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = f_(n[t]);
		S_().setUint32(_ + 4 * t, e, !0);
	}
	return H_ = n.length, _;
}
function G_(n, e, _) {
	if (void 0 === _) {
		const _ = L_.encode(n), t = e(_.length, 1) >>> 0;
		return W_().subarray(t, t + _.length).set(_), H_ = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = W_();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = W_().subarray(r + o, r + t);
		o += L_.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return H_ = o, r;
}
function T_(n) {
	const e = V_.__wbindgen_externrefs.get(n);
	return V_.__externref_table_dealloc(n), e;
}
let B_ = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
B_.decode();
const j_ = 2146435072;
let E_ = 0;
const L_ = new TextEncoder();
"encodeInto" in L_ || (L_.encodeInto = function(n, e) {
	const _ = L_.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let V_, H_ = 0;
function X_(n, e) {
	return V_ = n.exports, k_ = null, A_ = null, C_ = null, x_ = null, M_ = null, V_.__wbindgen_start(), V_;
}
function $_(n) {
	if (void 0 !== V_) return V_;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = b_();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), X_(new WebAssembly.Instance(n, e));
}
async function q_(n) {
	if (void 0 !== V_) return V_;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-oJebk3uS.wasm", "" + import.meta.url));
	const e = b_();
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
	return X_(_);
}
export { n as Aw5Batch, e as StreamChunkResult, _ as actiwareIntervalStatistics, t as actiwareSleepIntervals, r as actiwareWakeThreshold, i as aggregateEpochSeries, o as analysisDatesOf, c as analysisWindowBounds, l as analysisWindowSlice, a as classifyActimetricPreschoolWristRf, s as classifyActimetricPreschoolWristRfLagLead, w as clippedUnionHours, g as compareNonwearDetectorMasks, b as computeAnglez5s, u as computeCircadian, d as computeCircadianTyped, f as computeEnmo5s, m as computeMimsUnit, h as computeMimsUnitDataframe, p as computeNightDifficulty, y as computeNightDifficultyTyped, v as computeNightSignals, k as computeNightSignalsTyped, S as computeSleepMetrics, A as configureComputeMemoryBudgetV1, C as consensusDisagreementDetail, R as consensusDisagreements, D as convertBedWakeDaysDiary, x as convertScreensRedcapDiary, I as csvBufferAppend, M as csvBufferClear, W as cutpointEpochCompatibility, F as cutpointToneCodes, U as cutpointsRefusal, q_ as default, N as describeColumns, O as detectDetachFromAccelerationG, P as detectDeviceFormat, z as detectGgirHasptVariant, G as detectHdcza, T as detectHourClockJumpMs, B as detectNonwear, j as detectNonwearChoi2011, E as detectNonwearChoi2011Epoch, L as detectNonwearChoi2012Epoch, V as detectNonwearUnified, H as detectNonwearUnifiedBatchTyped, X as dstPlaceholderRuns, $ as effectiveOverrideCutpoints, q as epochAgreement, Z as epochsOverlapping, Y as exportFileNightFigures, J as exportNapAggregate, K as extractCapsense, Q as foldOntoGrid, nn as foldSampleBlocks, en as foldSleepWakeVotes, _n as foldUniformOntoGrid, tn as fuseNonwearMasks, rn as generateActiwareRestIntervals, on as getComputeCapabilitiesV1, cn as ggir5sWallClockMs, ln as ggirAppConfigSummary, an as ggirConfigValues, sn as ggirDayValidFractions, wn as ggirDaysIncluded, gn as ggirDiaryLogShape, bn as ggirDstPlaceholderCuts, un as ggirIncludeDayCriterionHours, dn as ggirIndicesToWallClockMs, fn as ggirLabelsToStoredMs, mn as ggirManualNightClocks, hn as ggirMilestoneVersion, pn as ggirNonwearApproach, yn as ggirPersonSummaries, vn as ggirRerunProfiles, kn as ggirSavedNonwearWindows, Sn as ggirSleeplogStoredClocks, An as ggirSummaryDenominator, Cn as gridOffsetWithin, Rn as identifyGgirRData, Dn as implausibilityReasons, $_ as initSync, xn as installPanicHook, In as interRaterReliability, Mn as irregularInternalDays, Wn as lstmSpectralFeatures30s, Fn as markerIndexRange, Un as markerSleepOnsetOffset, Nn as medianGapSeconds, On as midSleepClockHours, Pn as neishabouriCounts, zn as nextDate, Gn as nightIntervalOverlap, Tn as nonwearContributors, Bn as nonwearInSleepCounts, jn as nonwearSleepOverlap, En as nonwearWeightRuns, Ln as normalizeCutpoints, Vn as parseActigraphCsvBuffered, Hn as parseAw5, Xn as parseEpochSeries, $n as parseGeneactivBin, qn as parseGeneactivCsvBuffered, Zn as participantValidity, Yn as physicalActivitySeriesGrid, Jn as placeMarkers, Kn as placeMarkersBatch, Qn as placeMarkersTyped, ne as placeNonwearMarkers, ee as placeNonwearMarkersTyped, _e as prepareGgirRecording, te as processGt3xPart1, re as processGt3xPart1WithEpoch, ie as processRawXyz, oe as processRawXyzImputed, ce as processRawXyzImputedWithEpoch, le as projectLabelsOntoGrid, ae as rasterizePeriods, se as readGgirMeta, we as readGgirReportCsv, ge as recommended_chunk_size_mb, be as rerunGgirResults, ue as resolveTimezone, de as restoredDstRuns, fe as reviewGgirResults, me as reviewNonwearFile, he as reviewNonwearTotals, pe as roundCountStorage, ye as runFullPipelineV1, ve as runGgirDeclaredEpochsV1, ke as runGgirPart3, Se as scoreAllDays, Ae as scoreColeKripke, Ce as scoreConsensus, Re as scoreConsensusTyped, De as scoreEpochs, xe as scoreEpochsTyped, Ie as scoreGgirHasib, Me as scoreGgirHasibVariant, We as scoreSadeh, Fe as screensRestIntervals, Ue as settleManualNonwearNights, Ne as sha256StreamFeed, Oe as sha256StreamFinish, Pe as sha256StreamStart, ze as shiftDate, Ge as sleepRegularityIndex, Te as sleepWakeScores, Be as sourceLabelsWallClockMs, je as spliceDstPlaceholders, Ee as statesInPeriods, Le as storedToGgirLabelsMs, Ve as streamParseFeed, He as streamParseFinishChunk, Xe as streamParseFinishChunkWithProgress, $e as streamParseStart, qe as streamParseStartWithEpoch, Ze as summarizeActimetricPreschoolWristRfClasses, Ye as summarizeExportGroups, Je as summarizePhysicalActivityDays, Ke as summarizePhysicalActivityTrace, Qe as thresholdProbabilities, n_ as timeSemantics, e_ as timestampDiscontinuities, __ as uniformTimestamps, t_ as utcDayIndex, r_ as validStateFraction, i_ as validWearDays, o_ as wallClockDstPlaceholders, c_ as wallClockLabels, l_ as wallMaskOntoGgirGrid, a_ as wearSiteHasptRouting, s_ as weekendDates, w_ as windowCoverage, g_ as zeroCrossingCounts };
