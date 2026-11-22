var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, u_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		H_.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = G_(n, H_.__wbindgen_malloc), _ = X_, t = H_.aw5batch_new(e, _);
		if (t[2]) throw j_(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, u_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), r = X_;
		var i = U_(_) ? 0 : T_(_, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_;
		const c = H_.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw j_(c[1]);
		return j_(c[0]);
	}
	subjects(n) {
		const e = H_.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw j_(e[2]);
		var _ = y_(e[0], e[1]).slice();
		return H_.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, f_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, f_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		H_.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = H_.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = H_.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = H_.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = H_.streamchunkresult_axisX(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = H_.streamchunkresult_axisY(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = H_.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = H_.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw j_(n[1]);
		return j_(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== H_.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = H_.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = x_(n[0], n[1]).slice(), H_.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get enmo5s() {
		const n = H_.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = H_.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = H_.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = k_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = H_.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = k_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = H_.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = p_(e[0], e[1]).slice();
		return H_.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return H_.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = H_.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = H_.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== H_.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = H_.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = x_(n[0], n[1]).slice(), H_.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = H_.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = H_.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = H_.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== H_.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return H_.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return H_.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return H_.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = H_.streamchunkresult_temperature(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = H_.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = H_.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = H_.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = H_.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = H_.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = H_.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = p_(n[0], n[1]).slice();
		return H_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function _(n) {
	const e = H_.actiwareIntervalStatistics(n);
	if (e[3]) throw j_(e[2]);
	var _ = y_(e[0], e[1]).slice();
	return H_.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function t(n) {
	const e = G_(n, H_.__wbindgen_malloc), _ = X_, t = H_.actiwareNights(e, _);
	if (t[3]) throw j_(t[2]);
	var r = y_(t[0], t[1]).slice();
	return H_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function r(n, e, _) {
	const t = G_(e, H_.__wbindgen_malloc), r = X_, i = H_.actiwareSleepIntervals(n, t, r, U_(_) ? 0 : m_(_));
	if (i[3]) throw j_(i[2]);
	var o = y_(i[0], i[1]).slice();
	return H_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function i(n, e) {
	const _ = H_.actiwareWakeThreshold(n, U_(e) ? 0 : m_(e));
	if (_[3]) throw j_(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function o(n) {
	const e = H_.aggregateEpochSeries(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function c(n) {
	const e = z_(n, H_.__wbindgen_malloc), _ = X_, t = H_.analysisDatesOf(e, _);
	var r = y_(t[0], t[1]).slice();
	return H_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function l(n, e) {
	const _ = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), t = X_, r = H_.analysisWindowBounds(_, t, !U_(e), U_(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = p_(r[0], r[1]).slice(), H_.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function a(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), i = X_, o = H_.analysisWindowSlice(_, t, r, i);
	var c = v_(o[0], o[1]).slice();
	return H_.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function s(n, e, _, t) {
	const r = z_(n, H_.__wbindgen_malloc), i = X_, o = z_(e, H_.__wbindgen_malloc), c = X_, l = z_(_, H_.__wbindgen_malloc), a = X_, s = H_.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw j_(s[2]);
	var w = k_(s[0], s[1]).slice();
	return H_.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function w(n, e, _, t) {
	const r = z_(n, H_.__wbindgen_malloc), i = X_, o = z_(e, H_.__wbindgen_malloc), c = X_, l = z_(_, H_.__wbindgen_malloc), a = X_, s = H_.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw j_(s[2]);
	var w = k_(s[0], s[1]).slice();
	return H_.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function g(n, e, _, t) {
	const r = z_(n, H_.__wbindgen_malloc), i = X_, o = z_(e, H_.__wbindgen_malloc), c = X_;
	return H_.clippedUnionHours(r, i, o, c, _, t);
}
function b(n, e) {
	const _ = H_.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw j_(_[1]);
	return j_(_[0]);
}
function d(n, e, _, t) {
	const r = z_(n, H_.__wbindgen_malloc), i = X_, o = z_(e, H_.__wbindgen_malloc), c = X_, l = z_(_, H_.__wbindgen_malloc), a = X_, s = H_.computeAnglez5s(r, i, o, c, l, a, t);
	var w = p_(s[0], s[1]).slice();
	return H_.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function u(n) {
	let e, _;
	try {
		const i = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_, c = H_.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, j_(c[2]);
		return e = t, _ = r, x_(t, r);
	} finally {
		H_.__wbindgen_free(e, _, 1);
	}
}
function f(n, e, _, t, r, i, o) {
	const c = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), l = X_, a = z_(e, H_.__wbindgen_malloc), s = X_, w = O_(_, H_.__wbindgen_malloc), g = X_, b = z_(t, H_.__wbindgen_malloc), d = X_, u = O_(r, H_.__wbindgen_malloc), f = X_, m = P_(i, H_.__wbindgen_malloc), h = X_, p = O_(o, H_.__wbindgen_malloc), y = X_, v = H_.computeCircadianTyped(c, l, a, s, w, g, b, d, u, f, m, h, p, y);
	if (v[2]) throw j_(v[1]);
	return j_(v[0]);
}
function m(n, e, _, t, r) {
	const i = z_(n, H_.__wbindgen_malloc), o = X_, c = z_(e, H_.__wbindgen_malloc), l = X_, a = z_(_, H_.__wbindgen_malloc), s = X_, w = H_.computeMimsUnit(i, o, c, l, a, s, t, U_(r) ? 0 : m_(r));
	if (w[2]) throw j_(w[1]);
	return j_(w[0]);
}
function h(n, e, _, t, r) {
	const i = z_(n, H_.__wbindgen_malloc), o = X_, c = z_(e, H_.__wbindgen_malloc), l = X_, a = z_(_, H_.__wbindgen_malloc), s = X_, w = z_(t, H_.__wbindgen_malloc), g = X_, b = H_.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, U_(r) ? 0 : m_(r));
	if (b[2]) throw j_(b[1]);
	return j_(b[0]);
}
function p(n) {
	let e, _;
	try {
		const i = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_, c = H_.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, j_(c[2]);
		return e = t, _ = r, x_(t, r);
	} finally {
		H_.__wbindgen_free(e, _, 1);
	}
}
function y(n, e, _, t, r, i, o, c, l, a, s, w, g, b, d, u, f, m, h) {
	const p = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), y = X_, v = z_(e, H_.__wbindgen_malloc), k = X_, S = O_(_, H_.__wbindgen_malloc), A = X_, C = z_(t, H_.__wbindgen_malloc), R = X_, D = O_(r, H_.__wbindgen_malloc), x = X_, I = P_(i, H_.__wbindgen_malloc), M = X_, W = O_(o, H_.__wbindgen_malloc), F = X_, N = P_(c, H_.__wbindgen_malloc), U = X_, O = O_(l, H_.__wbindgen_malloc), P = X_, z = z_(a, H_.__wbindgen_malloc), G = X_, T = O_(s, H_.__wbindgen_malloc), j = X_, B = z_(w, H_.__wbindgen_malloc), E = X_, L = O_(g, H_.__wbindgen_malloc), V = X_, H = z_(b, H_.__wbindgen_malloc), X = X_, $ = O_(d, H_.__wbindgen_malloc), q = X_, Z = z_(u, H_.__wbindgen_malloc), Y = X_, K = O_(f, H_.__wbindgen_malloc), J = X_, Q = P_(m, H_.__wbindgen_malloc), nn = X_, en = O_(h, H_.__wbindgen_malloc), _n = X_, tn = H_.computeNightDifficultyTyped(p, y, v, k, S, A, C, R, D, x, I, M, W, F, N, U, O, P, z, G, T, j, B, E, L, V, H, X, $, q, Z, Y, K, J, Q, nn, en, _n);
	if (tn[2]) throw j_(tn[1]);
	return j_(tn[0]);
}
function v(n) {
	let e, _;
	try {
		const i = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_, c = H_.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, j_(c[2]);
		return e = t, _ = r, x_(t, r);
	} finally {
		H_.__wbindgen_free(e, _, 1);
	}
}
function k(n, e, _, t, r, i, o, c, l, a, s, w, g, b, d, u, f, m, h) {
	const p = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), y = X_, v = z_(e, H_.__wbindgen_malloc), k = X_, S = O_(_, H_.__wbindgen_malloc), A = X_, C = z_(t, H_.__wbindgen_malloc), R = X_, D = O_(r, H_.__wbindgen_malloc), x = X_, I = P_(i, H_.__wbindgen_malloc), M = X_, W = O_(o, H_.__wbindgen_malloc), F = X_, N = P_(c, H_.__wbindgen_malloc), U = X_, O = O_(l, H_.__wbindgen_malloc), P = X_, z = z_(a, H_.__wbindgen_malloc), G = X_, T = O_(s, H_.__wbindgen_malloc), j = X_, B = z_(w, H_.__wbindgen_malloc), E = X_, L = O_(g, H_.__wbindgen_malloc), V = X_, H = z_(b, H_.__wbindgen_malloc), X = X_, $ = O_(d, H_.__wbindgen_malloc), q = X_, Z = z_(u, H_.__wbindgen_malloc), Y = X_, K = O_(f, H_.__wbindgen_malloc), J = X_, Q = P_(m, H_.__wbindgen_malloc), nn = X_, en = O_(h, H_.__wbindgen_malloc), _n = X_, tn = H_.computeNightSignalsTyped(p, y, v, k, S, A, C, R, D, x, I, M, W, F, N, U, O, P, z, G, T, j, B, E, L, V, H, X, $, q, Z, Y, K, J, Q, nn, en, _n);
	if (tn[2]) throw j_(tn[1]);
	return j_(tn[0]);
}
function S(n, e, _) {
	const t = P_(n, H_.__wbindgen_malloc), r = X_, i = z_(e, H_.__wbindgen_malloc), o = X_, c = H_.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw j_(c[1]);
	return j_(c[0]);
}
function A(n) {
	const e = H_.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function C(n) {
	const e = G_(n, H_.__wbindgen_malloc), _ = X_, t = H_.consensusDisagreementDetail(e, _);
	if (t[2]) throw j_(t[1]);
	return j_(t[0]);
}
function R(n) {
	const e = H_.consensusDisagreements(n);
	if (e[3]) throw j_(e[2]);
	var _ = y_(e[0], e[1]).slice();
	return H_.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function D(n) {
	const e = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), _ = X_, t = H_.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw j_(t[1]);
	return j_(t[0]);
}
function x(n) {
	const e = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), _ = X_, t = H_.convertScreensRedcapDiary(e, _);
	if (t[2]) throw j_(t[1]);
	return j_(t[0]);
}
function I(n, e) {
	const _ = G_(e, H_.__wbindgen_malloc), t = X_, r = H_.correctGgirRecording(n, _, t);
	if (r[2]) throw j_(r[1]);
	return j_(r[0]);
}
function M(n) {
	const e = P_(n, H_.__wbindgen_malloc), _ = X_;
	H_.csvBufferAppend(e, _);
}
function W(n) {
	H_.csvBufferClear(n);
}
function F(n, e) {
	const _ = H_.cutpointEpochCompatibility(n, e);
	if (_[2]) throw j_(_[1]);
	return j_(_[0]);
}
function N(n, e, _, t, r) {
	const i = z_(n, H_.__wbindgen_malloc), o = X_, c = H_.cutpointToneCodes(i, o, e, _, t, r);
	var l = k_(c[0], c[1]).slice();
	return H_.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function U(n, e, _, t) {
	const r = H_.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = x_(r[0], r[1]).slice(), H_.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function O(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = O_(e, H_.__wbindgen_malloc), i = X_, o = H_.describeColumns(_, t, r, i);
	if (o[3]) throw j_(o[2]);
	var c = y_(o[0], o[1]).slice();
	return H_.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function P(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = z_(e, H_.__wbindgen_malloc), i = X_, o = H_.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw j_(o[2]);
	var c = k_(o[0], o[1]).slice();
	return H_.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function z(n, e) {
	let _, t;
	try {
		const r = P_(n, H_.__wbindgen_malloc), i = X_, o = T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), c = X_, l = H_.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], x_(l[0], l[1]);
	} finally {
		H_.__wbindgen_free(_, t, 1);
	}
}
function G(n) {
	const e = H_.detectGgirHasptVariant(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function T(n, e, _, t, r) {
	const i = z_(n, H_.__wbindgen_malloc), o = X_;
	var c = U_(e) ? 0 : T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), l = X_, a = U_(_) ? 0 : z_(_, H_.__wbindgen_malloc), s = X_, w = U_(t) ? 0 : z_(t, H_.__wbindgen_malloc), g = X_, b = U_(r) ? 0 : T_(r, H_.__wbindgen_malloc, H_.__wbindgen_realloc), d = X_;
	const u = H_.detectHdcza(i, o, c, l, a, s, w, g, b, d);
	if (u[2]) throw j_(u[1]);
	return j_(u[0]);
}
function j(n) {
	const e = z_(n, H_.__wbindgen_malloc), _ = X_;
	return 0 !== H_.detectHourClockJumpMs(e, _);
}
function B(n) {
	const e = z_(n, H_.__wbindgen_malloc), _ = X_, t = H_.detectNonwear(e, _);
	var r = k_(t[0], t[1]).slice();
	return H_.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function E(n) {
	const e = z_(n, H_.__wbindgen_malloc), _ = X_, t = H_.detectNonwearChoi2011(e, _);
	var r = k_(t[0], t[1]).slice();
	return H_.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function L(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = H_.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw j_(r[2]);
	var i = k_(r[0], r[1]).slice();
	return H_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function V(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = H_.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw j_(r[2]);
	var i = k_(r[0], r[1]).slice();
	return H_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function H(n) {
	let e, _;
	try {
		const i = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_, c = H_.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, j_(c[2]);
		return e = t, _ = r, x_(t, r);
	} finally {
		H_.__wbindgen_free(e, _, 1);
	}
}
function X(n, e, _, t, r, i, o) {
	const c = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), l = X_, a = T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), s = X_, w = z_(_, H_.__wbindgen_malloc), g = X_, b = z_(t, H_.__wbindgen_malloc), d = X_, u = z_(r, H_.__wbindgen_malloc), f = X_, m = H_.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, b, d, u, f, i, o);
	if (m[2]) throw j_(m[1]);
	return j_(m[0]);
}
function $(n, e, _) {
	const t = G_(_, H_.__wbindgen_malloc), r = X_, i = H_.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw j_(i[2]);
	var o = y_(i[0], i[1]).slice();
	return H_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function q(n, e, _, t) {
	const r = H_.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = p_(r[0], r[1]).slice(), H_.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function Z(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = z_(e, H_.__wbindgen_malloc), i = X_, o = H_.epochAgreement(_, t, r, i);
	if (o[2]) throw j_(o[1]);
	return j_(o[0]);
}
function Y(n, e, _, t) {
	const r = z_(n, H_.__wbindgen_malloc), i = X_, o = H_.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = v_(o[0], o[1]).slice(), H_.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function K(n, e, _) {
	const t = G_(n, H_.__wbindgen_malloc), r = X_, i = G_(e, H_.__wbindgen_malloc), o = X_, c = G_(_, H_.__wbindgen_malloc), l = X_, a = H_.exportFileNightFigures(t, r, i, o, c, l);
	if (a[3]) throw j_(a[2]);
	var s = y_(a[0], a[1]).slice();
	return H_.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function J(n) {
	const e = G_(n, H_.__wbindgen_malloc), _ = X_, t = H_.exportNapAggregate(e, _);
	if (t[2]) throw j_(t[1]);
	return j_(t[0]);
}
function Q(n) {
	const e = P_(n, H_.__wbindgen_malloc), _ = X_, t = H_.extractCapsense(e, _);
	if (t[3]) throw j_(t[2]);
	var r = y_(t[0], t[1]).slice();
	return H_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function nn(n, e, _, t, r) {
	const i = z_(n, H_.__wbindgen_malloc), o = X_, c = z_(e, H_.__wbindgen_malloc), l = X_, a = z_(_, H_.__wbindgen_malloc), s = X_, w = T_(r, H_.__wbindgen_malloc, H_.__wbindgen_realloc), g = X_, b = H_.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (b[3]) throw j_(b[2]);
	var d = p_(b[0], b[1]).slice();
	return H_.__wbindgen_free(b[0], 8 * b[1], 8), d;
}
function en(n, e, _, t, r) {
	const i = P_(_, H_.__wbindgen_malloc), o = X_, c = z_(t, H_.__wbindgen_malloc), l = X_, a = H_.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw j_(a[1]);
	return j_(a[0]);
}
function _n(n, e, _, t, r, i) {
	const o = z_(_, H_.__wbindgen_malloc), c = X_, l = z_(t, H_.__wbindgen_malloc), a = X_, s = T_(i, H_.__wbindgen_malloc, H_.__wbindgen_realloc), w = X_, g = H_.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw j_(g[2]);
	var b = p_(g[0], g[1]).slice();
	return H_.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function tn(n) {
	const e = H_.fuseNonwearMasks(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function rn(n, e, _) {
	var t = U_(_) ? 0 : T_(_, H_.__wbindgen_malloc, H_.__wbindgen_realloc), r = X_;
	const i = H_.generateActiwareRestIntervals(n, U_(e) ? 0 : m_(e), t, r);
	if (i[3]) throw j_(i[2]);
	var o = y_(i[0], i[1]).slice();
	return H_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function on() {
	const n = H_.getComputeCapabilitiesV1();
	if (n[2]) throw j_(n[1]);
	return j_(n[0]);
}
function cn(n, e, _) {
	const t = G_(_, H_.__wbindgen_malloc), r = X_, i = H_.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw j_(i[2]);
	var o = p_(i[0], i[1]).slice();
	return H_.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function ln(n, e) {
	var _ = U_(n) ? 0 : T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), t = X_;
	const r = H_.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw j_(r[1]);
	return j_(r[0]);
}
function an(n) {
	const e = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), _ = X_, t = H_.ggirConfigValues(e, _);
	if (t[2]) throw j_(t[1]);
	return j_(t[0]);
}
function sn(n) {
	const e = H_.ggirDayRowsTouchedByEdits(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function wn(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = z_(e, H_.__wbindgen_malloc), i = X_, o = H_.ggirDayValidFractions(_, t, r, i);
	if (o[2]) throw j_(o[1]);
	return j_(o[0]);
}
function gn(n, e, _) {
	const t = z_(n, H_.__wbindgen_malloc), r = X_;
	var i = U_(e) ? 0 : z_(e, H_.__wbindgen_malloc), o = X_, c = U_(_) ? 0 : T_(_, H_.__wbindgen_malloc, H_.__wbindgen_realloc), l = X_;
	const a = H_.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw j_(a[2]);
	var s = k_(a[0], a[1]).slice();
	return H_.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function bn(n, e) {
	const _ = P_(n, H_.__wbindgen_malloc), t = X_;
	var r = U_(e) ? 0 : T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), i = X_;
	const o = H_.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw j_(o[1]);
	return j_(o[0]);
}
function dn(n, e, _) {
	const t = G_(e, H_.__wbindgen_malloc), r = X_;
	var i = U_(_) ? 0 : z_(_, H_.__wbindgen_malloc), o = X_;
	const c = H_.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw j_(c[2]);
	var l = y_(c[0], c[1]).slice();
	return H_.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function un(n) {
	var e = U_(n) ? 0 : T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), _ = X_;
	const t = H_.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw j_(t[1]);
	return t[0];
}
function fn(n, e, _, t) {
	const r = O_(n, H_.__wbindgen_malloc), i = X_, o = G_(_, H_.__wbindgen_malloc), c = X_;
	var l = U_(t) ? 0 : z_(t, H_.__wbindgen_malloc), a = X_;
	const s = H_.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw j_(s[2]);
	var w = p_(s[0], s[1]).slice();
	return H_.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function mn(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = G_(e, H_.__wbindgen_malloc), i = X_, o = H_.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw j_(o[2]);
	var c = p_(o[0], o[1]).slice();
	return H_.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function hn(n, e, _, t) {
	const r = G_(n, H_.__wbindgen_malloc), i = X_, o = z_(e, H_.__wbindgen_malloc), c = X_, l = z_(_, H_.__wbindgen_malloc), a = X_, s = z_(t, H_.__wbindgen_malloc), w = X_, g = H_.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw j_(g[1]);
	return j_(g[0]);
}
function pn(n) {
	const e = P_(n, H_.__wbindgen_malloc), _ = X_, t = H_.ggirMilestoneVersion(e, _);
	if (t[3]) throw j_(t[2]);
	let r;
	return 0 !== t[0] && (r = x_(t[0], t[1]).slice(), H_.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function yn(n) {
	const e = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), _ = X_, t = H_.ggirNonwearApproach(e, _);
	if (t[3]) throw j_(t[2]);
	let r;
	return 0 !== t[0] && (r = x_(t[0], t[1]).slice(), H_.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function vn(n) {
	const e = H_.ggirPersonSummaries(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function kn() {
	const n = H_.ggirRerunProfiles();
	if (n[3]) throw j_(n[2]);
	var e = y_(n[0], n[1]).slice();
	return H_.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function Sn(n) {
	const e = P_(n, H_.__wbindgen_malloc), _ = X_, t = H_.ggirSavedNonwearWindows(e, _);
	if (t[2]) throw j_(t[1]);
	return t[0] >>> 0;
}
function An(n, e, _, t) {
	const r = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), i = X_, o = T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), c = X_, l = T_(_, H_.__wbindgen_malloc, H_.__wbindgen_realloc), a = X_, s = G_(t, H_.__wbindgen_malloc), w = X_, g = H_.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw j_(g[2]);
	let b;
	return 0 !== g[0] && (b = y_(g[0], g[1]).slice(), H_.__wbindgen_free(g[0], 4 * g[1], 4)), b;
}
function Cn(n, e) {
	const _ = H_.ggirSummaryDenominator(n, e);
	if (_[2]) throw j_(_[1]);
	return j_(_[0]);
}
function Rn(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = z_(e, H_.__wbindgen_malloc), i = X_, o = H_.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Dn(n) {
	let e, _;
	try {
		const i = P_(n, H_.__wbindgen_malloc), o = X_, c = H_.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, j_(c[2]);
		return e = t, _ = r, x_(t, r);
	} finally {
		H_.__wbindgen_free(e, _, 1);
	}
}
function xn(n, e, _, t) {
	const r = z_(n, H_.__wbindgen_malloc), i = X_, o = z_(e, H_.__wbindgen_malloc), c = X_, l = z_(_, H_.__wbindgen_malloc), a = X_, s = z_(t, H_.__wbindgen_malloc), w = X_, g = H_.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw j_(g[1]);
	return j_(g[0]);
}
function In() {
	H_.installPanicHook();
}
function Mn(n) {
	const e = G_(n, H_.__wbindgen_malloc), _ = X_, t = H_.interRaterReliability(e, _);
	if (t[2]) throw j_(t[1]);
	return j_(t[0]);
}
function Wn(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = H_.irregularInternalDays(_, t, e);
	var i = y_(r[0], r[1]).slice();
	return H_.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Fn(n, e, _, t) {
	const r = z_(n, H_.__wbindgen_malloc), i = X_, o = z_(e, H_.__wbindgen_malloc), c = X_, l = z_(_, H_.__wbindgen_malloc), a = X_, s = H_.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw j_(s[1]);
	return j_(s[0]);
}
function Nn(n, e, _) {
	const t = z_(n, H_.__wbindgen_malloc), r = X_, i = H_.markerIndexRange(t, r, e, _);
	var o = v_(i[0], i[1]).slice();
	return H_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Un(n, e, _, t, r, i, o) {
	const c = z_(n, H_.__wbindgen_malloc), l = X_, a = z_(e, H_.__wbindgen_malloc), s = X_, w = H_.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw j_(w[1]);
	return j_(w[0]);
}
function On(n) {
	const e = z_(n, H_.__wbindgen_malloc), _ = X_, t = H_.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Pn(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = z_(e, H_.__wbindgen_malloc), i = X_, o = H_.midSleepClockHours(_, t, r, i);
	var c = p_(o[0], o[1]).slice();
	return H_.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function zn(n, e, _, t, r) {
	const i = z_(n, H_.__wbindgen_malloc), o = X_, c = z_(e, H_.__wbindgen_malloc), l = X_, a = z_(_, H_.__wbindgen_malloc), s = X_, w = H_.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw j_(w[1]);
	return j_(w[0]);
}
function Gn(n) {
	const e = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), _ = X_, t = H_.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = x_(t[0], t[1]).slice(), H_.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Tn(n, e, _, t, r) {
	const i = z_(_, H_.__wbindgen_malloc), o = X_, c = z_(t, H_.__wbindgen_malloc), l = X_, a = z_(r, H_.__wbindgen_malloc), s = X_, w = H_.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw j_(w[1]);
	return j_(w[0]);
}
function jn(n, e, _, t) {
	let r, i;
	try {
		const l = O_(n, H_.__wbindgen_malloc), a = X_, s = T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), w = X_, g = H_.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, j_(g[2]);
		return r = o, i = c, x_(o, c);
	} finally {
		H_.__wbindgen_free(r, i, 1);
	}
}
function Bn(n) {
	const e = z_(n, H_.__wbindgen_malloc), _ = X_, t = H_.nonwearInSleepCounts(e, _);
	if (t[2]) throw j_(t[1]);
	return j_(t[0]);
}
function En(n) {
	const e = H_.nonwearSleepOverlap(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function Ln(n, e, _) {
	const t = z_(n, H_.__wbindgen_malloc), r = X_, i = z_(e, H_.__wbindgen_malloc), o = X_, c = H_.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw j_(c[1]);
	return j_(c[0]);
}
function Vn(n, e, _, t, r, i) {
	const o = T_(r, H_.__wbindgen_malloc, H_.__wbindgen_realloc), c = X_, l = H_.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw j_(l[2]);
	var a = p_(l[0], l[1]).slice();
	return H_.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function Hn(n) {
	const e = H_.parseActigraphCsvBuffered(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function Xn(n, e, _, t) {
	const r = P_(n, H_.__wbindgen_malloc), i = X_;
	var o = U_(e) ? 0 : T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), c = X_, l = U_(_) ? 0 : G_(_, H_.__wbindgen_malloc), a = X_, s = U_(t) ? 0 : T_(t, H_.__wbindgen_malloc, H_.__wbindgen_realloc), w = X_;
	const g = H_.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw j_(g[1]);
	return j_(g[0]);
}
function $n(n, e) {
	const _ = P_(n, H_.__wbindgen_malloc), t = X_, r = T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), i = X_, o = H_.parseEpochSeries(_, t, r, i);
	if (o[2]) throw j_(o[1]);
	return j_(o[0]);
}
function qn() {
	const n = H_.parseGeneactivCsvBuffered();
	if (n[2]) throw j_(n[1]);
	return j_(n[0]);
}
function Zn(n, e, _, t) {
	const r = z_(n, H_.__wbindgen_malloc), i = X_, o = P_(e, H_.__wbindgen_malloc), c = X_, l = P_(_, H_.__wbindgen_malloc), a = X_, s = H_.participantValidity(r, i, o, c, l, a, U_(t) ? 0 : m_(t));
	if (s[2]) throw j_(s[1]);
	return j_(s[0]);
}
function Yn(n, e, _, t, r) {
	const i = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_, c = z_(e, H_.__wbindgen_malloc), l = X_;
	var a = U_(_) ? 0 : z_(_, H_.__wbindgen_malloc), s = X_;
	const w = H_.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw j_(w[1]);
	return j_(w[0]);
}
function Kn(n) {
	let e, _;
	try {
		const i = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_, c = H_.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, j_(c[2]);
		return e = t, _ = r, x_(t, r);
	} finally {
		H_.__wbindgen_free(e, _, 1);
	}
}
function Jn(n, e, _, t, r, i) {
	const o = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), c = X_, l = z_(e, H_.__wbindgen_malloc), a = X_, s = z_(_, H_.__wbindgen_malloc), w = X_, g = P_(t, H_.__wbindgen_malloc), b = X_, d = P_(r, H_.__wbindgen_malloc), u = X_, f = T_(i, H_.__wbindgen_malloc, H_.__wbindgen_realloc), m = X_, h = H_.placeMarkersBatch(o, c, l, a, s, w, g, b, d, u, f, m);
	if (h[2]) throw j_(h[1]);
	return j_(h[0]);
}
function Qn(n, e, _, t, r, i, o, c, l, a, s, w, g, b, d, u, f, m, h, p) {
	const y = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), v = X_, k = z_(e, H_.__wbindgen_malloc), S = X_, A = O_(_, H_.__wbindgen_malloc), C = X_, R = z_(t, H_.__wbindgen_malloc), D = X_, x = O_(r, H_.__wbindgen_malloc), I = X_, M = P_(i, H_.__wbindgen_malloc), W = X_, F = O_(o, H_.__wbindgen_malloc), N = X_, U = P_(c, H_.__wbindgen_malloc), O = X_, P = O_(l, H_.__wbindgen_malloc), z = X_, G = z_(a, H_.__wbindgen_malloc), T = X_, j = O_(s, H_.__wbindgen_malloc), B = X_, E = z_(w, H_.__wbindgen_malloc), L = X_, V = O_(g, H_.__wbindgen_malloc), H = X_, X = z_(b, H_.__wbindgen_malloc), $ = X_, q = O_(d, H_.__wbindgen_malloc), Z = X_, Y = z_(u, H_.__wbindgen_malloc), K = X_, J = O_(f, H_.__wbindgen_malloc), Q = X_, nn = P_(m, H_.__wbindgen_malloc), en = X_, _n = O_(h, H_.__wbindgen_malloc), tn = X_;
	var rn = U_(p) ? 0 : T_(p, H_.__wbindgen_malloc, H_.__wbindgen_realloc), on = X_;
	const cn = H_.placeMarkersTyped(y, v, k, S, A, C, R, D, x, I, M, W, F, N, U, O, P, z, G, T, j, B, E, L, V, H, X, $, q, Z, Y, K, J, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw j_(cn[1]);
	return j_(cn[0]);
}
function ne(n, e, _, t, r, i, o, c, l, a, s, w, g, b, d, u, f, m, h, p) {
	const y = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), v = X_, k = z_(e, H_.__wbindgen_malloc), S = X_, A = O_(_, H_.__wbindgen_malloc), C = X_, R = z_(t, H_.__wbindgen_malloc), D = X_, x = O_(r, H_.__wbindgen_malloc), I = X_, M = P_(i, H_.__wbindgen_malloc), W = X_, F = O_(o, H_.__wbindgen_malloc), N = X_, U = P_(c, H_.__wbindgen_malloc), O = X_, P = O_(l, H_.__wbindgen_malloc), z = X_, G = z_(a, H_.__wbindgen_malloc), T = X_, j = O_(s, H_.__wbindgen_malloc), B = X_, E = z_(w, H_.__wbindgen_malloc), L = X_, V = O_(g, H_.__wbindgen_malloc), H = X_, X = z_(b, H_.__wbindgen_malloc), $ = X_, q = O_(d, H_.__wbindgen_malloc), Z = X_, Y = z_(u, H_.__wbindgen_malloc), K = X_, J = O_(f, H_.__wbindgen_malloc), Q = X_, nn = P_(m, H_.__wbindgen_malloc), en = X_, _n = O_(h, H_.__wbindgen_malloc), tn = X_, rn = H_.placeNightsTyped(y, v, k, S, A, C, R, D, x, I, M, W, F, N, U, O, P, z, G, T, j, B, E, L, V, H, X, $, q, Z, Y, K, J, Q, nn, en, _n, tn, p);
	if (rn[2]) throw j_(rn[1]);
	return j_(rn[0]);
}
function ee(n) {
	let e, _;
	try {
		const i = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_, c = H_.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, j_(c[2]);
		return e = t, _ = r, x_(t, r);
	} finally {
		H_.__wbindgen_free(e, _, 1);
	}
}
function _e(n, e, _, t) {
	const r = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), i = X_, o = z_(e, H_.__wbindgen_malloc), c = X_, l = z_(_, H_.__wbindgen_malloc), a = X_, s = P_(t, H_.__wbindgen_malloc), w = X_, g = H_.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw j_(g[1]);
	return j_(g[0]);
}
function te(n, e, _, t, r, i, o, c, l, a, s) {
	const w = P_(n, H_.__wbindgen_malloc), g = X_, b = T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), d = X_;
	var u = U_(_) ? 0 : P_(_, H_.__wbindgen_malloc), f = X_, m = U_(t) ? 0 : P_(t, H_.__wbindgen_malloc), h = X_, p = U_(r) ? 0 : P_(r, H_.__wbindgen_malloc), y = X_, v = U_(i) ? 0 : P_(i, H_.__wbindgen_malloc), k = X_, S = U_(o) ? 0 : P_(o, H_.__wbindgen_malloc), A = X_, C = U_(c) ? 0 : T_(c, H_.__wbindgen_malloc, H_.__wbindgen_realloc), R = X_, D = U_(l) ? 0 : T_(l, H_.__wbindgen_malloc, H_.__wbindgen_realloc), x = X_, I = U_(a) ? 0 : T_(a, H_.__wbindgen_malloc, H_.__wbindgen_realloc), M = X_, W = U_(s) ? 0 : T_(s, H_.__wbindgen_malloc, H_.__wbindgen_realloc), F = X_;
	const N = H_.prepareGgirRecording(w, g, b, d, u, f, m, h, p, y, v, k, S, A, C, R, D, x, I, M, W, F);
	if (N[2]) throw j_(N[1]);
	return j_(N[0]);
}
function re(n, e) {
	const _ = P_(n, H_.__wbindgen_malloc), t = X_;
	var r = U_(e) ? 0 : T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), i = X_;
	const o = H_.processGt3xPart1(_, t, r, i);
	if (o[2]) throw j_(o[1]);
	return j_(o[0]);
}
function ie(n, e, _) {
	const t = P_(n, H_.__wbindgen_malloc), r = X_;
	var i = U_(_) ? 0 : T_(_, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_;
	const c = H_.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw j_(c[1]);
	return j_(c[0]);
}
function oe(n, e, _, t, r, i, o) {
	const c = z_(n, H_.__wbindgen_malloc), l = X_, a = z_(e, H_.__wbindgen_malloc), s = X_, w = z_(_, H_.__wbindgen_malloc), g = X_;
	var b = U_(i) ? 0 : T_(i, H_.__wbindgen_malloc, H_.__wbindgen_realloc), d = X_, u = U_(o) ? 0 : T_(o, H_.__wbindgen_malloc, H_.__wbindgen_realloc), f = X_;
	const m = H_.processRawXyz(c, l, a, s, w, g, t, r, b, d, u, f);
	if (m[2]) throw j_(m[1]);
	return j_(m[0]);
}
function ce(n, e, _, t, r, i, o, c) {
	const l = z_(n, H_.__wbindgen_malloc), a = X_, s = z_(e, H_.__wbindgen_malloc), w = X_, g = z_(_, H_.__wbindgen_malloc), b = X_, d = z_(t, H_.__wbindgen_malloc), u = X_;
	var f = U_(i) ? 0 : T_(i, H_.__wbindgen_malloc, H_.__wbindgen_realloc), m = X_, h = U_(o) ? 0 : T_(o, H_.__wbindgen_malloc, H_.__wbindgen_realloc), p = X_, y = U_(c) ? 0 : z_(c, H_.__wbindgen_malloc), v = X_;
	const k = H_.processRawXyzImputed(l, a, s, w, g, b, d, u, r, f, m, h, p, y, v);
	if (k[2]) throw j_(k[1]);
	return j_(k[0]);
}
function le(n, e, _, t, r, i, o, c, l, a) {
	const s = z_(n, H_.__wbindgen_malloc), w = X_, g = z_(e, H_.__wbindgen_malloc), b = X_, d = z_(_, H_.__wbindgen_malloc), u = X_, f = z_(t, H_.__wbindgen_malloc), m = X_;
	var h = U_(i) ? 0 : T_(i, H_.__wbindgen_malloc, H_.__wbindgen_realloc), p = X_, y = U_(c) ? 0 : T_(c, H_.__wbindgen_malloc, H_.__wbindgen_realloc), v = X_, k = U_(a) ? 0 : z_(a, H_.__wbindgen_malloc), S = X_;
	const A = H_.processRawXyzImputedWithEpoch(s, w, g, b, d, u, f, m, r, h, p, o, y, v, U_(l) ? 16777215 : l ? 1 : 0, k, S);
	if (A[2]) throw j_(A[1]);
	return j_(A[0]);
}
function ae(n, e, _, t) {
	const r = z_(n, H_.__wbindgen_malloc), i = X_, o = P_(e, H_.__wbindgen_malloc), c = X_, l = z_(t, H_.__wbindgen_malloc), a = X_, s = H_.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = k_(s[0], s[1]).slice();
	return H_.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function se(n, e, _, t) {
	const r = z_(n, H_.__wbindgen_malloc), i = X_, o = z_(e, H_.__wbindgen_malloc), c = X_, l = z_(_, H_.__wbindgen_malloc), a = X_, s = H_.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw j_(s[1]);
	return j_(s[0]);
}
function we(n, e, _) {
	const t = P_(n, H_.__wbindgen_malloc), r = X_;
	var i = U_(e) ? 0 : T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_;
	const c = H_.readGgirMeta(t, r, i, o, U_(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw j_(c[1]);
	return j_(c[0]);
}
function ge(n, e) {
	const _ = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), t = X_;
	var r = U_(e) ? 0 : T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), i = X_;
	const o = H_.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw j_(o[1]);
	return j_(o[0]);
}
function be() {
	return H_.recommended_chunk_size_mb() >>> 0;
}
function de(n, e) {
	const _ = G_(e, H_.__wbindgen_malloc), t = X_, r = H_.rerunGgirResults(n, _, t);
	if (r[2]) throw j_(r[1]);
	return j_(r[0]);
}
function ue(n) {
	const e = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), _ = X_, t = H_.resolveTimezone(e, _);
	if (t[2]) throw j_(t[1]);
	return j_(t[0]);
}
function fe(n, e, _) {
	const t = z_(n, H_.__wbindgen_malloc), r = X_, i = z_(e, H_.__wbindgen_malloc), o = X_, c = O_(_, H_.__wbindgen_malloc), l = X_, a = H_.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw j_(a[2]);
	var s = y_(a[0], a[1]).slice();
	return H_.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function me(n, e, _, t, r, i, o, c, l, a, s, w, g, b) {
	const d = P_(n, H_.__wbindgen_malloc), u = X_, f = T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), m = X_;
	var h = U_(_) ? 0 : P_(_, H_.__wbindgen_malloc), p = X_, y = U_(t) ? 0 : P_(t, H_.__wbindgen_malloc), v = X_, k = U_(r) ? 0 : P_(r, H_.__wbindgen_malloc), S = X_, A = U_(i) ? 0 : P_(i, H_.__wbindgen_malloc), C = X_, R = U_(o) ? 0 : P_(o, H_.__wbindgen_malloc), D = X_, x = U_(c) ? 0 : T_(c, H_.__wbindgen_malloc, H_.__wbindgen_realloc), I = X_, M = U_(l) ? 0 : T_(l, H_.__wbindgen_malloc, H_.__wbindgen_realloc), W = X_, F = U_(a) ? 0 : G_(a, H_.__wbindgen_malloc), N = X_, U = U_(w) ? 0 : T_(w, H_.__wbindgen_malloc, H_.__wbindgen_realloc), O = X_, P = U_(g) ? 0 : T_(g, H_.__wbindgen_malloc, H_.__wbindgen_realloc), z = X_;
	const G = H_.reviewGgirResults(d, u, f, m, h, p, y, v, k, S, A, C, R, D, x, I, M, W, F, N, s, U, O, P, z, U_(b) ? 4294967297 : b >>> 0);
	if (G[2]) throw j_(G[1]);
	return j_(G[0]);
}
function he(n) {
	const e = G_(n, H_.__wbindgen_malloc), _ = X_, t = H_.reviewNonwearFile(e, _);
	if (t[2]) throw j_(t[1]);
	return j_(t[0]);
}
function pe(n) {
	const e = G_(n, H_.__wbindgen_malloc), _ = X_, t = H_.reviewNonwearTotals(e, _);
	if (t[2]) throw j_(t[1]);
	return j_(t[0]);
}
function ye(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = H_.roundCountStorage(_, t, e);
	var i = p_(r[0], r[1]).slice();
	return H_.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function ve(n) {
	const e = H_.runFullPipelineV1(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function ke(n) {
	const e = H_.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function Se(n) {
	const e = H_.runGgirPart3(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function Ae(n) {
	const e = G_(n, H_.__wbindgen_malloc), _ = X_, t = H_.scoreAllDays(e, _);
	if (t[3]) throw j_(t[2]);
	var r = y_(t[0], t[1]).slice();
	return H_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Ce(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = H_.scoreColeKripke(_, t, e);
	var i = k_(r[0], r[1]).slice();
	return H_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Re(n) {
	let e, _;
	try {
		const i = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_, c = H_.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, j_(c[2]);
		return e = t, _ = r, x_(t, r);
	} finally {
		H_.__wbindgen_free(e, _, 1);
	}
}
function De(n, e, _) {
	const t = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), r = X_, i = P_(e, H_.__wbindgen_malloc), o = X_, c = O_(_, H_.__wbindgen_malloc), l = X_, a = H_.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw j_(a[1]);
	return j_(a[0]);
}
function xe(n) {
	let e, _;
	try {
		const i = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_, c = H_.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, j_(c[2]);
		return e = t, _ = r, x_(t, r);
	} finally {
		H_.__wbindgen_free(e, _, 1);
	}
}
function Ie(n, e, _, t, r, i) {
	const o = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), c = X_, l = z_(e, H_.__wbindgen_malloc), a = X_, s = z_(_, H_.__wbindgen_malloc), w = X_, g = z_(t, H_.__wbindgen_malloc), b = X_, d = H_.scoreEpochsTyped(o, c, l, a, s, w, g, b, r, i);
	if (d[2]) throw j_(d[1]);
	return j_(d[0]);
}
function Me(n, e, _) {
	const t = z_(n, H_.__wbindgen_malloc), r = X_;
	var i = U_(e) ? 0 : T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_, c = U_(_) ? 0 : z_(_, H_.__wbindgen_malloc), l = X_;
	const a = H_.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw j_(a[2]);
	var s = k_(a[0], a[1]).slice();
	return H_.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function We(n) {
	const e = H_.scoreGgirHasibVariant(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function Fe(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = H_.scoreSadeh(_, t, e);
	var i = k_(r[0], r[1]).slice();
	return H_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Ne(n, e, _) {
	const t = T_(_, H_.__wbindgen_malloc, H_.__wbindgen_realloc), r = X_, i = H_.screensRestIntervals(n, U_(e) ? 0 : m_(e), t, r);
	if (i[2]) throw j_(i[1]);
	return j_(i[0]);
}
function Ue(n) {
	const e = G_(n, H_.__wbindgen_malloc), _ = X_, t = H_.settleManualNonwearNights(e, _);
	if (t[3]) throw j_(t[2]);
	var r = y_(t[0], t[1]).slice();
	return H_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Oe(n) {
	const e = P_(n, H_.__wbindgen_malloc), _ = X_, t = H_.sha256StreamFeed(e, _);
	if (t[1]) throw j_(t[0]);
}
function Pe() {
	let n, e;
	try {
		const r = H_.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, j_(r[2]);
		return n = _, e = t, x_(_, t);
	} finally {
		H_.__wbindgen_free(n, e, 1);
	}
}
function ze() {
	H_.sha256StreamStart();
}
function Ge(n, e) {
	const _ = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), t = X_, r = H_.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = x_(r[0], r[1]).slice(), H_.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function Te(n, e, _, t, r) {
	const i = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_, c = z_(e, H_.__wbindgen_malloc), l = X_, a = O_(_, H_.__wbindgen_malloc), s = X_, w = z_(t, H_.__wbindgen_malloc), g = X_, b = O_(r, H_.__wbindgen_malloc), d = X_, u = H_.sleepRegularityIndex(i, o, c, l, a, s, w, g, b, d);
	if (u[3]) throw j_(u[2]);
	return 0 === u[0] ? void 0 : u[1];
}
function je(n, e) {
	const _ = H_.sleepWakeScores(n, U_(e) ? 0 : m_(e));
	if (_[2]) throw j_(_[1]);
	return j_(_[0]);
}
function Be(n) {
	const e = G_(n, H_.__wbindgen_malloc), _ = X_, t = H_.sourceLabelsWallClockMs(e, _);
	var r = p_(t[0], t[1]).slice();
	return H_.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function Ee(n, e, _) {
	const t = z_(n, H_.__wbindgen_malloc), r = X_, i = G_(e, H_.__wbindgen_malloc), o = X_, c = z_(_, H_.__wbindgen_malloc), l = X_, a = H_.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw j_(a[2]);
	let s;
	return 0 !== a[0] && (s = p_(a[0], a[1]).slice(), H_.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function Le(n, e, _, t) {
	const r = z_(n, H_.__wbindgen_malloc), i = X_, o = P_(e, H_.__wbindgen_malloc), c = X_, l = z_(_, H_.__wbindgen_malloc), a = X_, s = z_(t, H_.__wbindgen_malloc), w = X_, g = H_.statesInPeriods(r, i, o, c, l, a, s, w);
	var b = k_(g[0], g[1]).slice();
	return H_.__wbindgen_free(g[0], 1 * g[1], 1), b;
}
function Ve(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = G_(e, H_.__wbindgen_malloc), i = X_, o = H_.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw j_(o[2]);
	var c = p_(o[0], o[1]).slice();
	return H_.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function He(n) {
	const e = P_(n, H_.__wbindgen_malloc), _ = X_, t = H_.streamParseFeed(e, _);
	if (t[2]) throw j_(t[1]);
	return t[0] >>> 0;
}
function Xe() {
	const n = H_.streamParseFinishChunk();
	if (n[2]) throw j_(n[1]);
	return e.__wrap(n[0]);
}
function $e(n) {
	const _ = H_.streamParseFinishChunkWithProgress(n);
	if (_[2]) throw j_(_[1]);
	return e.__wrap(_[0]);
}
function qe(n, e, _) {
	var t = U_(_) ? 0 : T_(_, H_.__wbindgen_malloc, H_.__wbindgen_realloc), r = X_;
	const i = H_.streamParseStart(n, e, t, r);
	if (i[1]) throw j_(i[0]);
}
function Ze(n, e, _, t, r) {
	var i = U_(t) ? 0 : T_(t, H_.__wbindgen_malloc, H_.__wbindgen_realloc), o = X_;
	const c = H_.streamParseStartWithEpoch(n, e, _, i, o, !U_(r), U_(r) ? 0 : r);
	if (c[1]) throw j_(c[0]);
}
function Ye(n, e) {
	const _ = P_(n, H_.__wbindgen_malloc), t = X_, r = H_.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw j_(r[1]);
	return j_(r[0]);
}
function Ke(n) {
	const e = H_.summarizeExportGroups(n);
	if (e[3]) throw j_(e[2]);
	var _ = y_(e[0], e[1]).slice();
	return H_.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function Je(n) {
	const e = H_.summarizePhysicalActivityDays(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function Qe(n) {
	const e = H_.summarizePhysicalActivityTrace(n);
	if (e[2]) throw j_(e[1]);
	return j_(e[0]);
}
function n_(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = H_.thresholdProbabilities(_, t, e);
	var i = k_(r[0], r[1]).slice();
	return H_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function e_(n) {
	const e = G_(n, H_.__wbindgen_malloc), _ = X_, t = H_.timeSemantics(e, _);
	if (t[3]) throw j_(t[2]);
	var r = y_(t[0], t[1]).slice();
	return H_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function __(n, e, _) {
	const t = z_(n, H_.__wbindgen_malloc), r = X_, i = H_.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw j_(i[2]);
	var o = y_(i[0], i[1]).slice();
	return H_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function t_(n, e, _) {
	const t = H_.uniformTimestamps(n, e, _);
	var r = p_(t[0], t[1]).slice();
	return H_.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function r_(n) {
	const e = z_(n, H_.__wbindgen_malloc), _ = X_, t = H_.utcDayIndex(e, _);
	if (t[2]) throw j_(t[1]);
	return j_(t[0]);
}
function i_(n) {
	const e = P_(n, H_.__wbindgen_malloc), _ = X_, t = H_.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function o_(n, e) {
	const _ = z_(n, H_.__wbindgen_malloc), t = X_, r = H_.validWearDays(_, t, U_(e) ? 0 : m_(e));
	if (r[3]) throw j_(r[2]);
	var i = k_(r[0], r[1]).slice();
	return H_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function c_(n, e, _) {
	const t = z_(n, H_.__wbindgen_malloc), r = X_, i = H_.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw j_(i[1]);
	return j_(i[0]);
}
function l_(n) {
	const e = z_(n, H_.__wbindgen_malloc), _ = X_, t = H_.wallClockLabels(e, _);
	var r = y_(t[0], t[1]).slice();
	return H_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function a_(n, e, _) {
	const t = P_(n, H_.__wbindgen_malloc), r = X_, i = G_(_, H_.__wbindgen_malloc), o = X_, c = H_.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw j_(c[2]);
	var l = k_(c[0], c[1]).slice();
	return H_.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function s_(n, e) {
	const _ = T_(n, H_.__wbindgen_malloc, H_.__wbindgen_realloc), t = X_;
	var r = U_(e) ? 0 : T_(e, H_.__wbindgen_malloc, H_.__wbindgen_realloc), i = X_;
	const o = H_.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw j_(o[1]);
	return j_(o[0]);
}
function w_(n) {
	const e = G_(n, H_.__wbindgen_malloc), _ = X_, t = H_.weekendDates(e, _);
	var r = k_(t[0], t[1]).slice();
	return H_.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function g_(n, e, _, t) {
	const r = z_(n, H_.__wbindgen_malloc), i = X_, o = H_.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function b_(n, e, _, t, r) {
	const i = z_(n, H_.__wbindgen_malloc), o = X_, c = z_(e, H_.__wbindgen_malloc), l = X_, a = z_(_, H_.__wbindgen_malloc), s = X_, w = H_.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw j_(w[1]);
	return j_(w[0]);
}
function d_() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(x_(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = T_(String(e), H_.__wbindgen_malloc, H_.__wbindgen_realloc), t = X_;
				A_().setInt32(n + 4, t, !0), A_().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				A_().setBigInt64(n + 8, U_(_) ? BigInt(0) : _, !0), A_().setInt32(n + 0, !U_(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return U_(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = T_(h_(e), H_.__wbindgen_malloc, H_.__wbindgen_realloc), t = X_;
				A_().setInt32(n + 4, t, !0), A_().setInt32(n + 0, _, !0);
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
				A_().setFloat64(n + 8, U_(_) ? 0 : _, !0), A_().setInt32(n + 0, !U_(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = U_(_) ? 0 : T_(_, H_.__wbindgen_malloc, H_.__wbindgen_realloc), r = X_;
				A_().setInt32(n + 4, r, !0), A_().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(x_(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return N_(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return N_(function(n, e, _, t) {
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
					_ = n, t = e, console.error(x_(n, e));
				} finally {
					H_.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return N_(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return N_(function(n, e) {
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
				return new Uint32Array(v_(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(p_(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== C_ && 0 !== C_.byteLength || (C_ = new Float32Array(H_.memory.buffer)), C_).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return N_(function(n) {
					return n.next();
				}, arguments);
			},
			__wbg_next_7646edaa39458ef7: function(n) {
				return n.next;
			},
			__wbg_ownKeys_0231887680f0f945: function() {
				return N_(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(k_(n, e), _);
			},
			__wbg_prototypesetcall_c5875dab42ff6b97: function(n, e, _) {
				Float64Array.prototype.set.call(p_(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return N_(function(n, e, _) {
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
				const _ = T_(e.stack, H_.__wbindgen_malloc, H_.__wbindgen_realloc), t = X_;
				A_().setInt32(n + 4, t, !0), A_().setInt32(n + 0, _, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return U_(n) ? 0 : m_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return U_(n) ? 0 : m_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return U_(n) ? 0 : m_(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return U_(n) ? 0 : m_(n);
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
				return k_(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return x_(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = H_.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
const u_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => H_.__wbg_aw5batch_free(n >>> 0, 1)), f_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => H_.__wbg_streamchunkresult_free(n >>> 0, 1));
function m_(n) {
	const e = H_.__externref_table_alloc();
	return H_.__wbindgen_externrefs.set(e, n), e;
}
function h_(n) {
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
		e > 0 && (_ += h_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + h_(n[t]);
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
function p_(n, e) {
	return n >>>= 0, D_().subarray(n / 8, n / 8 + e);
}
function y_(n, e) {
	n >>>= 0;
	const _ = A_(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(H_.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return H_.__externref_drop_slice(n, e), t;
}
function v_(n, e) {
	return n >>>= 0, M_().subarray(n / 4, n / 4 + e);
}
function k_(n, e) {
	return n >>>= 0, F_().subarray(n / 1, n / 1 + e);
}
let S_ = null;
function A_() {
	return (null === S_ || !0 === S_.buffer.detached || void 0 === S_.buffer.detached && S_.buffer !== H_.memory.buffer) && (S_ = new DataView(H_.memory.buffer)), S_;
}
let C_ = null, R_ = null;
function D_() {
	return null !== R_ && 0 !== R_.byteLength || (R_ = new Float64Array(H_.memory.buffer)), R_;
}
function x_(n, e) {
	return function(n, e) {
		return L_ += e, L_ >= E_ && (B_ = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), B_.decode(), L_ = e), B_.decode(F_().subarray(n, n + e));
	}(n >>>= 0, e);
}
let I_ = null;
function M_() {
	return null !== I_ && 0 !== I_.byteLength || (I_ = new Uint32Array(H_.memory.buffer)), I_;
}
let W_ = null;
function F_() {
	return null !== W_ && 0 !== W_.byteLength || (W_ = new Uint8Array(H_.memory.buffer)), W_;
}
function N_(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = m_(_);
		H_.__wbindgen_exn_store(n);
	}
}
function U_(n) {
	return null == n;
}
function O_(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return M_().set(n, _ / 4), X_ = n.length, _;
}
function P_(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return F_().set(n, _ / 1), X_ = n.length, _;
}
function z_(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return D_().set(n, _ / 8), X_ = n.length, _;
}
function G_(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = m_(n[t]);
		A_().setUint32(_ + 4 * t, e, !0);
	}
	return X_ = n.length, _;
}
function T_(n, e, _) {
	if (void 0 === _) {
		const _ = V_.encode(n), t = e(_.length, 1) >>> 0;
		return F_().subarray(t, t + _.length).set(_), X_ = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = F_();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = F_().subarray(r + o, r + t);
		o += V_.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return X_ = o, r;
}
function j_(n) {
	const e = H_.__wbindgen_externrefs.get(n);
	return H_.__externref_table_dealloc(n), e;
}
let B_ = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
B_.decode();
const E_ = 2146435072;
let L_ = 0;
const V_ = new TextEncoder();
"encodeInto" in V_ || (V_.encodeInto = function(n, e) {
	const _ = V_.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let H_, X_ = 0;
function $_(n, e) {
	return H_ = n.exports, S_ = null, C_ = null, R_ = null, I_ = null, W_ = null, H_.__wbindgen_start(), H_;
}
function q_(n) {
	if (void 0 !== H_) return H_;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = d_();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), $_(new WebAssembly.Instance(n, e));
}
async function Z_(n) {
	if (void 0 !== H_) return H_;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-Dbp742da.wasm", "" + import.meta.url));
	const e = d_();
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
	return $_(_);
}
export { n as Aw5Batch, e as StreamChunkResult, _ as actiwareIntervalStatistics, t as actiwareNights, r as actiwareSleepIntervals, i as actiwareWakeThreshold, o as aggregateEpochSeries, c as analysisDatesOf, l as analysisWindowBounds, a as analysisWindowSlice, s as classifyActimetricPreschoolWristRf, w as classifyActimetricPreschoolWristRfLagLead, g as clippedUnionHours, b as compareNonwearDetectorMasks, d as computeAnglez5s, u as computeCircadian, f as computeCircadianTyped, m as computeMimsUnit, h as computeMimsUnitDataframe, p as computeNightDifficulty, y as computeNightDifficultyTyped, v as computeNightSignals, k as computeNightSignalsTyped, S as computeSleepMetrics, A as configureComputeMemoryBudgetV1, C as consensusDisagreementDetail, R as consensusDisagreements, D as convertBedWakeDaysDiary, x as convertScreensRedcapDiary, I as correctGgirRecording, M as csvBufferAppend, W as csvBufferClear, F as cutpointEpochCompatibility, N as cutpointToneCodes, U as cutpointsRefusal, Z_ as default, O as describeColumns, P as detectDetachFromAccelerationG, z as detectDeviceFormat, G as detectGgirHasptVariant, T as detectHdcza, j as detectHourClockJumpMs, B as detectNonwear, E as detectNonwearChoi2011, L as detectNonwearChoi2011Epoch, V as detectNonwearChoi2012Epoch, H as detectNonwearUnified, X as detectNonwearUnifiedBatchTyped, $ as dstPlaceholderRuns, q as effectiveOverrideCutpoints, Z as epochAgreement, Y as epochsOverlapping, K as exportFileNightFigures, J as exportNapAggregate, Q as extractCapsense, nn as foldOntoGrid, en as foldSleepWakeVotes, _n as foldUniformOntoGrid, tn as fuseNonwearMasks, rn as generateActiwareRestIntervals, on as getComputeCapabilitiesV1, cn as ggir5sWallClockMs, ln as ggirAppConfigSummary, an as ggirConfigValues, sn as ggirDayRowsTouchedByEdits, wn as ggirDayValidFractions, gn as ggirDaysIncluded, bn as ggirDiaryLogShape, dn as ggirDstPlaceholderCuts, un as ggirIncludeDayCriterionHours, fn as ggirIndicesToWallClockMs, mn as ggirLabelsToStoredMs, hn as ggirManualNightClocks, pn as ggirMilestoneVersion, yn as ggirNonwearApproach, vn as ggirPersonSummaries, kn as ggirRerunProfiles, Sn as ggirSavedNonwearWindows, An as ggirSleeplogStoredClocks, Cn as ggirSummaryDenominator, Rn as gridOffsetWithin, Dn as identifyGgirRData, xn as implausibilityReasons, q_ as initSync, In as installPanicHook, Mn as interRaterReliability, Wn as irregularInternalDays, Fn as lstmSpectralFeatures30s, Nn as markerIndexRange, Un as markerSleepOnsetOffset, On as medianGapSeconds, Pn as midSleepClockHours, zn as neishabouriCounts, Gn as nextDate, Tn as nightIntervalOverlap, jn as nonwearContributors, Bn as nonwearInSleepCounts, En as nonwearSleepOverlap, Ln as nonwearWeightRuns, Vn as normalizeCutpoints, Hn as parseActigraphCsvBuffered, Xn as parseAw5, $n as parseEpochSeries, qn as parseGeneactivCsvBuffered, Zn as participantValidity, Yn as physicalActivitySeriesGrid, Kn as placeMarkers, Jn as placeMarkersBatch, Qn as placeMarkersTyped, ne as placeNightsTyped, ee as placeNonwearMarkers, _e as placeNonwearMarkersTyped, te as prepareGgirRecording, re as processGt3xPart1, ie as processGt3xPart1WithEpoch, oe as processRawXyz, ce as processRawXyzImputed, le as processRawXyzImputedWithEpoch, ae as projectLabelsOntoGrid, se as rasterizePeriods, we as readGgirMeta, ge as readGgirReportCsv, be as recommended_chunk_size_mb, de as rerunGgirResults, ue as resolveTimezone, fe as restoredDstRuns, me as reviewGgirResults, he as reviewNonwearFile, pe as reviewNonwearTotals, ye as roundCountStorage, ve as runFullPipelineV1, ke as runGgirDeclaredEpochsV1, Se as runGgirPart3, Ae as scoreAllDays, Ce as scoreColeKripke, Re as scoreConsensus, De as scoreConsensusTyped, xe as scoreEpochs, Ie as scoreEpochsTyped, Me as scoreGgirHasib, We as scoreGgirHasibVariant, Fe as scoreSadeh, Ne as screensRestIntervals, Ue as settleManualNonwearNights, Oe as sha256StreamFeed, Pe as sha256StreamFinish, ze as sha256StreamStart, Ge as shiftDate, Te as sleepRegularityIndex, je as sleepWakeScores, Be as sourceLabelsWallClockMs, Ee as spliceDstPlaceholders, Le as statesInPeriods, Ve as storedToGgirLabelsMs, He as streamParseFeed, Xe as streamParseFinishChunk, $e as streamParseFinishChunkWithProgress, qe as streamParseStart, Ze as streamParseStartWithEpoch, Ye as summarizeActimetricPreschoolWristRfClasses, Ke as summarizeExportGroups, Je as summarizePhysicalActivityDays, Qe as summarizePhysicalActivityTrace, n_ as thresholdProbabilities, e_ as timeSemantics, __ as timestampDiscontinuities, t_ as uniformTimestamps, r_ as utcDayIndex, i_ as validStateFraction, o_ as validWearDays, c_ as wallClockDstPlaceholders, l_ as wallClockLabels, a_ as wallMaskOntoGgirGrid, s_ as wearSiteHasptRouting, w_ as weekendDates, g_ as windowCoverage, b_ as zeroCrossingCounts };
