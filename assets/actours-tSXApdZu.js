var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, b_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		E_.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = P_(n, E_.__wbindgen_malloc), _ = V_, t = E_.aw5batch_new(e, _);
		if (t[2]) throw G_(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, b_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), r = V_;
		var i = F_(_) ? 0 : z_(_, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_;
		const c = E_.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw G_(c[1]);
		return G_(c[0]);
	}
	subjects(n) {
		const e = E_.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw G_(e[2]);
		var _ = h_(e[0], e[1]).slice();
		return E_.__wbindgen_free(e[0], 4 * e[1], 4), _;
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
		E_.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = E_.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = E_.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = E_.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = E_.streamchunkresult_axisX(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = E_.streamchunkresult_axisY(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = E_.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = E_.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw G_(n[1]);
		return G_(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== E_.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = E_.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = R_(n[0], n[1]).slice(), E_.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get enmo5s() {
		const n = E_.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = E_.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = E_.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = y_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = E_.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = y_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = E_.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = m_(e[0], e[1]).slice();
		return E_.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return E_.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = E_.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = E_.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== E_.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = E_.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = R_(n[0], n[1]).slice(), E_.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = E_.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = E_.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = E_.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== E_.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return E_.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return E_.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return E_.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = E_.streamchunkresult_temperature(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = E_.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = E_.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = E_.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = E_.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = E_.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = E_.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = m_(n[0], n[1]).slice();
		return E_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function _(n) {
	const e = E_.actiwareIntervalStatistics(n);
	if (e[3]) throw G_(e[2]);
	var _ = h_(e[0], e[1]).slice();
	return E_.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function t(n, e, _) {
	const t = P_(e, E_.__wbindgen_malloc), r = V_, i = E_.actiwareSleepIntervals(n, t, r, F_(_) ? 0 : u_(_));
	if (i[3]) throw G_(i[2]);
	var o = h_(i[0], i[1]).slice();
	return E_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function r(n, e) {
	const _ = E_.actiwareWakeThreshold(n, F_(e) ? 0 : u_(e));
	if (_[3]) throw G_(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function i(n) {
	const e = E_.aggregateEpochSeries(n);
	if (e[2]) throw G_(e[1]);
	return G_(e[0]);
}
function o(n) {
	const e = O_(n, E_.__wbindgen_malloc), _ = V_, t = E_.analysisDatesOf(e, _);
	var r = h_(t[0], t[1]).slice();
	return E_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function c(n, e) {
	const _ = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), t = V_, r = E_.analysisWindowBounds(_, t, !F_(e), F_(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = m_(r[0], r[1]).slice(), E_.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function l(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), i = V_, o = E_.analysisWindowSlice(_, t, r, i);
	var c = p_(o[0], o[1]).slice();
	return E_.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function a(n, e, _, t) {
	const r = O_(n, E_.__wbindgen_malloc), i = V_, o = O_(e, E_.__wbindgen_malloc), c = V_, l = O_(_, E_.__wbindgen_malloc), a = V_, s = E_.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw G_(s[2]);
	var w = y_(s[0], s[1]).slice();
	return E_.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function s(n, e, _, t) {
	const r = O_(n, E_.__wbindgen_malloc), i = V_, o = O_(e, E_.__wbindgen_malloc), c = V_, l = O_(_, E_.__wbindgen_malloc), a = V_, s = E_.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw G_(s[2]);
	var w = y_(s[0], s[1]).slice();
	return E_.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function w(n, e, _, t) {
	const r = O_(n, E_.__wbindgen_malloc), i = V_, o = O_(e, E_.__wbindgen_malloc), c = V_;
	return E_.clippedUnionHours(r, i, o, c, _, t);
}
function g(n, e) {
	const _ = E_.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw G_(_[1]);
	return G_(_[0]);
}
function b(n, e, _, t) {
	const r = O_(n, E_.__wbindgen_malloc), i = V_, o = O_(e, E_.__wbindgen_malloc), c = V_, l = O_(_, E_.__wbindgen_malloc), a = V_, s = E_.computeAnglez5s(r, i, o, c, l, a, t);
	var w = m_(s[0], s[1]).slice();
	return E_.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function d(n) {
	let e, _;
	try {
		const i = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_, c = E_.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, G_(c[2]);
		return e = t, _ = r, R_(t, r);
	} finally {
		E_.__wbindgen_free(e, _, 1);
	}
}
function u(n, e, _, t, r, i, o) {
	const c = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), l = V_, a = O_(e, E_.__wbindgen_malloc), s = V_, w = N_(_, E_.__wbindgen_malloc), g = V_, b = O_(t, E_.__wbindgen_malloc), d = V_, u = N_(r, E_.__wbindgen_malloc), f = V_, m = U_(i, E_.__wbindgen_malloc), h = V_, p = N_(o, E_.__wbindgen_malloc), y = V_, v = E_.computeCircadianTyped(c, l, a, s, w, g, b, d, u, f, m, h, p, y);
	if (v[2]) throw G_(v[1]);
	return G_(v[0]);
}
function f(n, e, _, t, r) {
	const i = O_(n, E_.__wbindgen_malloc), o = V_, c = O_(e, E_.__wbindgen_malloc), l = V_, a = O_(_, E_.__wbindgen_malloc), s = V_, w = E_.computeMimsUnit(i, o, c, l, a, s, t, F_(r) ? 0 : u_(r));
	if (w[2]) throw G_(w[1]);
	return G_(w[0]);
}
function m(n, e, _, t, r) {
	const i = O_(n, E_.__wbindgen_malloc), o = V_, c = O_(e, E_.__wbindgen_malloc), l = V_, a = O_(_, E_.__wbindgen_malloc), s = V_, w = O_(t, E_.__wbindgen_malloc), g = V_, b = E_.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, F_(r) ? 0 : u_(r));
	if (b[2]) throw G_(b[1]);
	return G_(b[0]);
}
function h(n) {
	let e, _;
	try {
		const i = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_, c = E_.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, G_(c[2]);
		return e = t, _ = r, R_(t, r);
	} finally {
		E_.__wbindgen_free(e, _, 1);
	}
}
function p(n, e, _, t, r, i, o, c, l, a, s, w, g, b, d, u, f, m, h) {
	const p = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), y = V_, v = O_(e, E_.__wbindgen_malloc), k = V_, S = N_(_, E_.__wbindgen_malloc), A = V_, C = O_(t, E_.__wbindgen_malloc), R = V_, D = N_(r, E_.__wbindgen_malloc), x = V_, I = U_(i, E_.__wbindgen_malloc), M = V_, W = N_(o, E_.__wbindgen_malloc), F = V_, N = U_(c, E_.__wbindgen_malloc), U = V_, O = N_(l, E_.__wbindgen_malloc), P = V_, z = O_(a, E_.__wbindgen_malloc), G = V_, T = N_(s, E_.__wbindgen_malloc), j = V_, L = O_(w, E_.__wbindgen_malloc), B = V_, E = N_(g, E_.__wbindgen_malloc), V = V_, H = O_(b, E_.__wbindgen_malloc), X = V_, $ = N_(d, E_.__wbindgen_malloc), q = V_, Z = O_(u, E_.__wbindgen_malloc), Y = V_, J = N_(f, E_.__wbindgen_malloc), K = V_, Q = U_(m, E_.__wbindgen_malloc), nn = V_, en = N_(h, E_.__wbindgen_malloc), _n = V_, tn = E_.computeNightDifficultyTyped(p, y, v, k, S, A, C, R, D, x, I, M, W, F, N, U, O, P, z, G, T, j, L, B, E, V, H, X, $, q, Z, Y, J, K, Q, nn, en, _n);
	if (tn[2]) throw G_(tn[1]);
	return G_(tn[0]);
}
function y(n) {
	let e, _;
	try {
		const i = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_, c = E_.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, G_(c[2]);
		return e = t, _ = r, R_(t, r);
	} finally {
		E_.__wbindgen_free(e, _, 1);
	}
}
function v(n, e, _, t, r, i, o, c, l, a, s, w, g, b, d, u, f, m, h) {
	const p = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), y = V_, v = O_(e, E_.__wbindgen_malloc), k = V_, S = N_(_, E_.__wbindgen_malloc), A = V_, C = O_(t, E_.__wbindgen_malloc), R = V_, D = N_(r, E_.__wbindgen_malloc), x = V_, I = U_(i, E_.__wbindgen_malloc), M = V_, W = N_(o, E_.__wbindgen_malloc), F = V_, N = U_(c, E_.__wbindgen_malloc), U = V_, O = N_(l, E_.__wbindgen_malloc), P = V_, z = O_(a, E_.__wbindgen_malloc), G = V_, T = N_(s, E_.__wbindgen_malloc), j = V_, L = O_(w, E_.__wbindgen_malloc), B = V_, E = N_(g, E_.__wbindgen_malloc), V = V_, H = O_(b, E_.__wbindgen_malloc), X = V_, $ = N_(d, E_.__wbindgen_malloc), q = V_, Z = O_(u, E_.__wbindgen_malloc), Y = V_, J = N_(f, E_.__wbindgen_malloc), K = V_, Q = U_(m, E_.__wbindgen_malloc), nn = V_, en = N_(h, E_.__wbindgen_malloc), _n = V_, tn = E_.computeNightSignalsTyped(p, y, v, k, S, A, C, R, D, x, I, M, W, F, N, U, O, P, z, G, T, j, L, B, E, V, H, X, $, q, Z, Y, J, K, Q, nn, en, _n);
	if (tn[2]) throw G_(tn[1]);
	return G_(tn[0]);
}
function k(n, e, _) {
	const t = U_(n, E_.__wbindgen_malloc), r = V_, i = O_(e, E_.__wbindgen_malloc), o = V_, c = E_.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw G_(c[1]);
	return G_(c[0]);
}
function S(n) {
	const e = E_.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw G_(e[1]);
	return G_(e[0]);
}
function A(n) {
	const e = P_(n, E_.__wbindgen_malloc), _ = V_, t = E_.consensusDisagreementDetail(e, _);
	if (t[2]) throw G_(t[1]);
	return G_(t[0]);
}
function C(n) {
	const e = E_.consensusDisagreements(n);
	if (e[3]) throw G_(e[2]);
	var _ = h_(e[0], e[1]).slice();
	return E_.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function R(n) {
	const e = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), _ = V_, t = E_.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw G_(t[1]);
	return G_(t[0]);
}
function D(n) {
	const e = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), _ = V_, t = E_.convertScreensRedcapDiary(e, _);
	if (t[2]) throw G_(t[1]);
	return G_(t[0]);
}
function x(n, e) {
	const _ = P_(e, E_.__wbindgen_malloc), t = V_, r = E_.correctGgirRecording(n, _, t);
	if (r[2]) throw G_(r[1]);
	return G_(r[0]);
}
function I(n) {
	const e = U_(n, E_.__wbindgen_malloc), _ = V_;
	E_.csvBufferAppend(e, _);
}
function M(n) {
	E_.csvBufferClear(n);
}
function W(n, e) {
	const _ = E_.cutpointEpochCompatibility(n, e);
	if (_[2]) throw G_(_[1]);
	return G_(_[0]);
}
function F(n, e, _, t, r) {
	const i = O_(n, E_.__wbindgen_malloc), o = V_, c = E_.cutpointToneCodes(i, o, e, _, t, r);
	var l = y_(c[0], c[1]).slice();
	return E_.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function N(n, e, _, t) {
	const r = E_.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = R_(r[0], r[1]).slice(), E_.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function U(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = N_(e, E_.__wbindgen_malloc), i = V_, o = E_.describeColumns(_, t, r, i);
	if (o[3]) throw G_(o[2]);
	var c = h_(o[0], o[1]).slice();
	return E_.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function O(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = O_(e, E_.__wbindgen_malloc), i = V_, o = E_.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw G_(o[2]);
	var c = y_(o[0], o[1]).slice();
	return E_.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function P(n, e) {
	let _, t;
	try {
		const r = U_(n, E_.__wbindgen_malloc), i = V_, o = z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), c = V_, l = E_.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], R_(l[0], l[1]);
	} finally {
		E_.__wbindgen_free(_, t, 1);
	}
}
function z(n) {
	const e = E_.detectGgirHasptVariant(n);
	if (e[2]) throw G_(e[1]);
	return G_(e[0]);
}
function G(n, e, _, t, r) {
	const i = O_(n, E_.__wbindgen_malloc), o = V_;
	var c = F_(e) ? 0 : z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), l = V_, a = F_(_) ? 0 : O_(_, E_.__wbindgen_malloc), s = V_, w = F_(t) ? 0 : O_(t, E_.__wbindgen_malloc), g = V_, b = F_(r) ? 0 : z_(r, E_.__wbindgen_malloc, E_.__wbindgen_realloc), d = V_;
	const u = E_.detectHdcza(i, o, c, l, a, s, w, g, b, d);
	if (u[2]) throw G_(u[1]);
	return G_(u[0]);
}
function T(n) {
	const e = O_(n, E_.__wbindgen_malloc), _ = V_;
	return 0 !== E_.detectHourClockJumpMs(e, _);
}
function j(n) {
	const e = O_(n, E_.__wbindgen_malloc), _ = V_, t = E_.detectNonwear(e, _);
	var r = y_(t[0], t[1]).slice();
	return E_.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function L(n) {
	const e = O_(n, E_.__wbindgen_malloc), _ = V_, t = E_.detectNonwearChoi2011(e, _);
	var r = y_(t[0], t[1]).slice();
	return E_.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function B(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = E_.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw G_(r[2]);
	var i = y_(r[0], r[1]).slice();
	return E_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function E(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = E_.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw G_(r[2]);
	var i = y_(r[0], r[1]).slice();
	return E_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function V(n) {
	let e, _;
	try {
		const i = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_, c = E_.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, G_(c[2]);
		return e = t, _ = r, R_(t, r);
	} finally {
		E_.__wbindgen_free(e, _, 1);
	}
}
function H(n, e, _, t, r, i, o) {
	const c = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), l = V_, a = z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), s = V_, w = O_(_, E_.__wbindgen_malloc), g = V_, b = O_(t, E_.__wbindgen_malloc), d = V_, u = O_(r, E_.__wbindgen_malloc), f = V_, m = E_.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, b, d, u, f, i, o);
	if (m[2]) throw G_(m[1]);
	return G_(m[0]);
}
function X(n, e, _) {
	const t = P_(_, E_.__wbindgen_malloc), r = V_, i = E_.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw G_(i[2]);
	var o = h_(i[0], i[1]).slice();
	return E_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function $(n, e, _, t) {
	const r = E_.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = m_(r[0], r[1]).slice(), E_.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function q(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = O_(e, E_.__wbindgen_malloc), i = V_, o = E_.epochAgreement(_, t, r, i);
	if (o[2]) throw G_(o[1]);
	return G_(o[0]);
}
function Z(n, e, _, t) {
	const r = O_(n, E_.__wbindgen_malloc), i = V_, o = E_.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = p_(o[0], o[1]).slice(), E_.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function Y(n, e, _) {
	const t = P_(n, E_.__wbindgen_malloc), r = V_, i = P_(e, E_.__wbindgen_malloc), o = V_, c = P_(_, E_.__wbindgen_malloc), l = V_, a = E_.exportFileNightFigures(t, r, i, o, c, l);
	if (a[3]) throw G_(a[2]);
	var s = h_(a[0], a[1]).slice();
	return E_.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function J(n) {
	const e = P_(n, E_.__wbindgen_malloc), _ = V_, t = E_.exportNapAggregate(e, _);
	if (t[2]) throw G_(t[1]);
	return G_(t[0]);
}
function K(n) {
	const e = U_(n, E_.__wbindgen_malloc), _ = V_, t = E_.extractCapsense(e, _);
	if (t[3]) throw G_(t[2]);
	var r = h_(t[0], t[1]).slice();
	return E_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Q(n, e, _, t, r) {
	const i = O_(n, E_.__wbindgen_malloc), o = V_, c = O_(e, E_.__wbindgen_malloc), l = V_, a = O_(_, E_.__wbindgen_malloc), s = V_, w = z_(r, E_.__wbindgen_malloc, E_.__wbindgen_realloc), g = V_, b = E_.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (b[3]) throw G_(b[2]);
	var d = m_(b[0], b[1]).slice();
	return E_.__wbindgen_free(b[0], 8 * b[1], 8), d;
}
function nn(n, e, _, t, r) {
	const i = U_(_, E_.__wbindgen_malloc), o = V_, c = O_(t, E_.__wbindgen_malloc), l = V_, a = E_.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw G_(a[1]);
	return G_(a[0]);
}
function en(n, e, _, t, r, i) {
	const o = O_(_, E_.__wbindgen_malloc), c = V_, l = O_(t, E_.__wbindgen_malloc), a = V_, s = z_(i, E_.__wbindgen_malloc, E_.__wbindgen_realloc), w = V_, g = E_.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw G_(g[2]);
	var b = m_(g[0], g[1]).slice();
	return E_.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function _n(n) {
	const e = E_.fuseNonwearMasks(n);
	if (e[2]) throw G_(e[1]);
	return G_(e[0]);
}
function tn(n, e, _) {
	var t = F_(_) ? 0 : z_(_, E_.__wbindgen_malloc, E_.__wbindgen_realloc), r = V_;
	const i = E_.generateActiwareRestIntervals(n, F_(e) ? 0 : u_(e), t, r);
	if (i[3]) throw G_(i[2]);
	var o = h_(i[0], i[1]).slice();
	return E_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function rn() {
	const n = E_.getComputeCapabilitiesV1();
	if (n[2]) throw G_(n[1]);
	return G_(n[0]);
}
function on(n, e, _) {
	const t = P_(_, E_.__wbindgen_malloc), r = V_, i = E_.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw G_(i[2]);
	var o = m_(i[0], i[1]).slice();
	return E_.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function cn(n, e) {
	var _ = F_(n) ? 0 : z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), t = V_;
	const r = E_.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw G_(r[1]);
	return G_(r[0]);
}
function ln(n) {
	const e = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), _ = V_, t = E_.ggirConfigValues(e, _);
	if (t[2]) throw G_(t[1]);
	return G_(t[0]);
}
function an(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = O_(e, E_.__wbindgen_malloc), i = V_, o = E_.ggirDayValidFractions(_, t, r, i);
	if (o[2]) throw G_(o[1]);
	return G_(o[0]);
}
function sn(n, e, _) {
	const t = O_(n, E_.__wbindgen_malloc), r = V_;
	var i = F_(e) ? 0 : O_(e, E_.__wbindgen_malloc), o = V_, c = F_(_) ? 0 : z_(_, E_.__wbindgen_malloc, E_.__wbindgen_realloc), l = V_;
	const a = E_.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw G_(a[2]);
	var s = y_(a[0], a[1]).slice();
	return E_.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function wn(n, e) {
	const _ = U_(n, E_.__wbindgen_malloc), t = V_;
	var r = F_(e) ? 0 : z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), i = V_;
	const o = E_.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw G_(o[1]);
	return G_(o[0]);
}
function gn(n, e, _) {
	const t = P_(e, E_.__wbindgen_malloc), r = V_;
	var i = F_(_) ? 0 : O_(_, E_.__wbindgen_malloc), o = V_;
	const c = E_.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw G_(c[2]);
	var l = h_(c[0], c[1]).slice();
	return E_.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function bn(n) {
	var e = F_(n) ? 0 : z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), _ = V_;
	const t = E_.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw G_(t[1]);
	return t[0];
}
function dn(n, e, _, t) {
	const r = N_(n, E_.__wbindgen_malloc), i = V_, o = P_(_, E_.__wbindgen_malloc), c = V_;
	var l = F_(t) ? 0 : O_(t, E_.__wbindgen_malloc), a = V_;
	const s = E_.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw G_(s[2]);
	var w = m_(s[0], s[1]).slice();
	return E_.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function un(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = P_(e, E_.__wbindgen_malloc), i = V_, o = E_.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw G_(o[2]);
	var c = m_(o[0], o[1]).slice();
	return E_.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function fn(n, e, _, t) {
	const r = P_(n, E_.__wbindgen_malloc), i = V_, o = O_(e, E_.__wbindgen_malloc), c = V_, l = O_(_, E_.__wbindgen_malloc), a = V_, s = O_(t, E_.__wbindgen_malloc), w = V_, g = E_.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw G_(g[1]);
	return G_(g[0]);
}
function mn(n) {
	const e = U_(n, E_.__wbindgen_malloc), _ = V_, t = E_.ggirMilestoneVersion(e, _);
	if (t[3]) throw G_(t[2]);
	let r;
	return 0 !== t[0] && (r = R_(t[0], t[1]).slice(), E_.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function hn(n) {
	const e = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), _ = V_, t = E_.ggirNonwearApproach(e, _);
	if (t[3]) throw G_(t[2]);
	let r;
	return 0 !== t[0] && (r = R_(t[0], t[1]).slice(), E_.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function pn(n) {
	const e = E_.ggirPersonSummaries(n);
	if (e[2]) throw G_(e[1]);
	return G_(e[0]);
}
function yn() {
	const n = E_.ggirRerunProfiles();
	if (n[3]) throw G_(n[2]);
	var e = h_(n[0], n[1]).slice();
	return E_.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function vn(n) {
	const e = U_(n, E_.__wbindgen_malloc), _ = V_, t = E_.ggirSavedNonwearWindows(e, _);
	if (t[2]) throw G_(t[1]);
	return t[0] >>> 0;
}
function kn(n, e, _, t) {
	const r = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), i = V_, o = z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), c = V_, l = z_(_, E_.__wbindgen_malloc, E_.__wbindgen_realloc), a = V_, s = P_(t, E_.__wbindgen_malloc), w = V_, g = E_.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw G_(g[2]);
	let b;
	return 0 !== g[0] && (b = h_(g[0], g[1]).slice(), E_.__wbindgen_free(g[0], 4 * g[1], 4)), b;
}
function Sn(n, e) {
	const _ = E_.ggirSummaryDenominator(n, e);
	if (_[2]) throw G_(_[1]);
	return G_(_[0]);
}
function An(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = O_(e, E_.__wbindgen_malloc), i = V_, o = E_.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Cn(n) {
	let e, _;
	try {
		const i = U_(n, E_.__wbindgen_malloc), o = V_, c = E_.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, G_(c[2]);
		return e = t, _ = r, R_(t, r);
	} finally {
		E_.__wbindgen_free(e, _, 1);
	}
}
function Rn(n, e, _, t) {
	const r = O_(n, E_.__wbindgen_malloc), i = V_, o = O_(e, E_.__wbindgen_malloc), c = V_, l = O_(_, E_.__wbindgen_malloc), a = V_, s = O_(t, E_.__wbindgen_malloc), w = V_, g = E_.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw G_(g[1]);
	return G_(g[0]);
}
function Dn() {
	E_.installPanicHook();
}
function xn(n) {
	const e = P_(n, E_.__wbindgen_malloc), _ = V_, t = E_.interRaterReliability(e, _);
	if (t[2]) throw G_(t[1]);
	return G_(t[0]);
}
function In(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = E_.irregularInternalDays(_, t, e);
	var i = h_(r[0], r[1]).slice();
	return E_.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Mn(n, e, _, t) {
	const r = O_(n, E_.__wbindgen_malloc), i = V_, o = O_(e, E_.__wbindgen_malloc), c = V_, l = O_(_, E_.__wbindgen_malloc), a = V_, s = E_.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw G_(s[1]);
	return G_(s[0]);
}
function Wn(n, e, _) {
	const t = O_(n, E_.__wbindgen_malloc), r = V_, i = E_.markerIndexRange(t, r, e, _);
	var o = p_(i[0], i[1]).slice();
	return E_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Fn(n, e, _, t, r, i, o) {
	const c = O_(n, E_.__wbindgen_malloc), l = V_, a = O_(e, E_.__wbindgen_malloc), s = V_, w = E_.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw G_(w[1]);
	return G_(w[0]);
}
function Nn(n) {
	const e = O_(n, E_.__wbindgen_malloc), _ = V_, t = E_.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Un(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = O_(e, E_.__wbindgen_malloc), i = V_, o = E_.midSleepClockHours(_, t, r, i);
	var c = m_(o[0], o[1]).slice();
	return E_.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function On(n, e, _, t, r) {
	const i = O_(n, E_.__wbindgen_malloc), o = V_, c = O_(e, E_.__wbindgen_malloc), l = V_, a = O_(_, E_.__wbindgen_malloc), s = V_, w = E_.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw G_(w[1]);
	return G_(w[0]);
}
function Pn(n) {
	const e = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), _ = V_, t = E_.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = R_(t[0], t[1]).slice(), E_.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function zn(n, e, _, t, r) {
	const i = O_(_, E_.__wbindgen_malloc), o = V_, c = O_(t, E_.__wbindgen_malloc), l = V_, a = O_(r, E_.__wbindgen_malloc), s = V_, w = E_.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw G_(w[1]);
	return G_(w[0]);
}
function Gn(n, e, _, t) {
	let r, i;
	try {
		const l = N_(n, E_.__wbindgen_malloc), a = V_, s = z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), w = V_, g = E_.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, G_(g[2]);
		return r = o, i = c, R_(o, c);
	} finally {
		E_.__wbindgen_free(r, i, 1);
	}
}
function Tn(n) {
	const e = O_(n, E_.__wbindgen_malloc), _ = V_, t = E_.nonwearInSleepCounts(e, _);
	if (t[2]) throw G_(t[1]);
	return G_(t[0]);
}
function jn(n) {
	const e = E_.nonwearSleepOverlap(n);
	if (e[2]) throw G_(e[1]);
	return G_(e[0]);
}
function Ln(n, e, _) {
	const t = O_(n, E_.__wbindgen_malloc), r = V_, i = O_(e, E_.__wbindgen_malloc), o = V_, c = E_.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw G_(c[1]);
	return G_(c[0]);
}
function Bn(n, e, _, t, r, i) {
	const o = z_(r, E_.__wbindgen_malloc, E_.__wbindgen_realloc), c = V_, l = E_.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw G_(l[2]);
	var a = m_(l[0], l[1]).slice();
	return E_.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function En(n) {
	const e = E_.parseActigraphCsvBuffered(n);
	if (e[2]) throw G_(e[1]);
	return G_(e[0]);
}
function Vn(n, e, _, t) {
	const r = U_(n, E_.__wbindgen_malloc), i = V_;
	var o = F_(e) ? 0 : z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), c = V_, l = F_(_) ? 0 : P_(_, E_.__wbindgen_malloc), a = V_, s = F_(t) ? 0 : z_(t, E_.__wbindgen_malloc, E_.__wbindgen_realloc), w = V_;
	const g = E_.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw G_(g[1]);
	return G_(g[0]);
}
function Hn(n, e) {
	const _ = U_(n, E_.__wbindgen_malloc), t = V_, r = z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), i = V_, o = E_.parseEpochSeries(_, t, r, i);
	if (o[2]) throw G_(o[1]);
	return G_(o[0]);
}
function Xn() {
	const n = E_.parseGeneactivCsvBuffered();
	if (n[2]) throw G_(n[1]);
	return G_(n[0]);
}
function $n(n, e, _, t) {
	const r = O_(n, E_.__wbindgen_malloc), i = V_, o = U_(e, E_.__wbindgen_malloc), c = V_, l = U_(_, E_.__wbindgen_malloc), a = V_, s = E_.participantValidity(r, i, o, c, l, a, F_(t) ? 0 : u_(t));
	if (s[2]) throw G_(s[1]);
	return G_(s[0]);
}
function qn(n, e, _, t, r) {
	const i = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_, c = O_(e, E_.__wbindgen_malloc), l = V_;
	var a = F_(_) ? 0 : O_(_, E_.__wbindgen_malloc), s = V_;
	const w = E_.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw G_(w[1]);
	return G_(w[0]);
}
function Zn(n) {
	let e, _;
	try {
		const i = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_, c = E_.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, G_(c[2]);
		return e = t, _ = r, R_(t, r);
	} finally {
		E_.__wbindgen_free(e, _, 1);
	}
}
function Yn(n, e, _, t, r, i) {
	const o = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), c = V_, l = O_(e, E_.__wbindgen_malloc), a = V_, s = O_(_, E_.__wbindgen_malloc), w = V_, g = U_(t, E_.__wbindgen_malloc), b = V_, d = U_(r, E_.__wbindgen_malloc), u = V_, f = z_(i, E_.__wbindgen_malloc, E_.__wbindgen_realloc), m = V_, h = E_.placeMarkersBatch(o, c, l, a, s, w, g, b, d, u, f, m);
	if (h[2]) throw G_(h[1]);
	return G_(h[0]);
}
function Jn(n, e, _, t, r, i, o, c, l, a, s, w, g, b, d, u, f, m, h, p) {
	const y = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), v = V_, k = O_(e, E_.__wbindgen_malloc), S = V_, A = N_(_, E_.__wbindgen_malloc), C = V_, R = O_(t, E_.__wbindgen_malloc), D = V_, x = N_(r, E_.__wbindgen_malloc), I = V_, M = U_(i, E_.__wbindgen_malloc), W = V_, F = N_(o, E_.__wbindgen_malloc), N = V_, U = U_(c, E_.__wbindgen_malloc), O = V_, P = N_(l, E_.__wbindgen_malloc), z = V_, G = O_(a, E_.__wbindgen_malloc), T = V_, j = N_(s, E_.__wbindgen_malloc), L = V_, B = O_(w, E_.__wbindgen_malloc), E = V_, V = N_(g, E_.__wbindgen_malloc), H = V_, X = O_(b, E_.__wbindgen_malloc), $ = V_, q = N_(d, E_.__wbindgen_malloc), Z = V_, Y = O_(u, E_.__wbindgen_malloc), J = V_, K = N_(f, E_.__wbindgen_malloc), Q = V_, nn = U_(m, E_.__wbindgen_malloc), en = V_, _n = N_(h, E_.__wbindgen_malloc), tn = V_;
	var rn = F_(p) ? 0 : z_(p, E_.__wbindgen_malloc, E_.__wbindgen_realloc), on = V_;
	const cn = E_.placeMarkersTyped(y, v, k, S, A, C, R, D, x, I, M, W, F, N, U, O, P, z, G, T, j, L, B, E, V, H, X, $, q, Z, Y, J, K, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw G_(cn[1]);
	return G_(cn[0]);
}
function Kn(n, e, _, t, r, i, o, c, l, a, s, w, g, b, d, u, f, m, h, p) {
	const y = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), v = V_, k = O_(e, E_.__wbindgen_malloc), S = V_, A = N_(_, E_.__wbindgen_malloc), C = V_, R = O_(t, E_.__wbindgen_malloc), D = V_, x = N_(r, E_.__wbindgen_malloc), I = V_, M = U_(i, E_.__wbindgen_malloc), W = V_, F = N_(o, E_.__wbindgen_malloc), N = V_, U = U_(c, E_.__wbindgen_malloc), O = V_, P = N_(l, E_.__wbindgen_malloc), z = V_, G = O_(a, E_.__wbindgen_malloc), T = V_, j = N_(s, E_.__wbindgen_malloc), L = V_, B = O_(w, E_.__wbindgen_malloc), E = V_, V = N_(g, E_.__wbindgen_malloc), H = V_, X = O_(b, E_.__wbindgen_malloc), $ = V_, q = N_(d, E_.__wbindgen_malloc), Z = V_, Y = O_(u, E_.__wbindgen_malloc), J = V_, K = N_(f, E_.__wbindgen_malloc), Q = V_, nn = U_(m, E_.__wbindgen_malloc), en = V_, _n = N_(h, E_.__wbindgen_malloc), tn = V_, rn = E_.placeNightsTyped(y, v, k, S, A, C, R, D, x, I, M, W, F, N, U, O, P, z, G, T, j, L, B, E, V, H, X, $, q, Z, Y, J, K, Q, nn, en, _n, tn, p);
	if (rn[2]) throw G_(rn[1]);
	return G_(rn[0]);
}
function Qn(n) {
	let e, _;
	try {
		const i = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_, c = E_.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, G_(c[2]);
		return e = t, _ = r, R_(t, r);
	} finally {
		E_.__wbindgen_free(e, _, 1);
	}
}
function ne(n, e, _, t) {
	const r = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), i = V_, o = O_(e, E_.__wbindgen_malloc), c = V_, l = O_(_, E_.__wbindgen_malloc), a = V_, s = U_(t, E_.__wbindgen_malloc), w = V_, g = E_.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw G_(g[1]);
	return G_(g[0]);
}
function ee(n, e, _, t, r, i, o, c, l, a, s) {
	const w = U_(n, E_.__wbindgen_malloc), g = V_, b = z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), d = V_;
	var u = F_(_) ? 0 : U_(_, E_.__wbindgen_malloc), f = V_, m = F_(t) ? 0 : U_(t, E_.__wbindgen_malloc), h = V_, p = F_(r) ? 0 : U_(r, E_.__wbindgen_malloc), y = V_, v = F_(i) ? 0 : U_(i, E_.__wbindgen_malloc), k = V_, S = F_(o) ? 0 : U_(o, E_.__wbindgen_malloc), A = V_, C = F_(c) ? 0 : z_(c, E_.__wbindgen_malloc, E_.__wbindgen_realloc), R = V_, D = F_(l) ? 0 : z_(l, E_.__wbindgen_malloc, E_.__wbindgen_realloc), x = V_, I = F_(a) ? 0 : z_(a, E_.__wbindgen_malloc, E_.__wbindgen_realloc), M = V_, W = F_(s) ? 0 : z_(s, E_.__wbindgen_malloc, E_.__wbindgen_realloc), F = V_;
	const N = E_.prepareGgirRecording(w, g, b, d, u, f, m, h, p, y, v, k, S, A, C, R, D, x, I, M, W, F);
	if (N[2]) throw G_(N[1]);
	return G_(N[0]);
}
function _e(n, e) {
	const _ = U_(n, E_.__wbindgen_malloc), t = V_;
	var r = F_(e) ? 0 : z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), i = V_;
	const o = E_.processGt3xPart1(_, t, r, i);
	if (o[2]) throw G_(o[1]);
	return G_(o[0]);
}
function te(n, e, _) {
	const t = U_(n, E_.__wbindgen_malloc), r = V_;
	var i = F_(_) ? 0 : z_(_, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_;
	const c = E_.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw G_(c[1]);
	return G_(c[0]);
}
function re(n, e, _, t, r, i, o) {
	const c = O_(n, E_.__wbindgen_malloc), l = V_, a = O_(e, E_.__wbindgen_malloc), s = V_, w = O_(_, E_.__wbindgen_malloc), g = V_;
	var b = F_(i) ? 0 : z_(i, E_.__wbindgen_malloc, E_.__wbindgen_realloc), d = V_, u = F_(o) ? 0 : z_(o, E_.__wbindgen_malloc, E_.__wbindgen_realloc), f = V_;
	const m = E_.processRawXyz(c, l, a, s, w, g, t, r, b, d, u, f);
	if (m[2]) throw G_(m[1]);
	return G_(m[0]);
}
function ie(n, e, _, t, r, i, o, c) {
	const l = O_(n, E_.__wbindgen_malloc), a = V_, s = O_(e, E_.__wbindgen_malloc), w = V_, g = O_(_, E_.__wbindgen_malloc), b = V_, d = O_(t, E_.__wbindgen_malloc), u = V_;
	var f = F_(i) ? 0 : z_(i, E_.__wbindgen_malloc, E_.__wbindgen_realloc), m = V_, h = F_(o) ? 0 : z_(o, E_.__wbindgen_malloc, E_.__wbindgen_realloc), p = V_, y = F_(c) ? 0 : O_(c, E_.__wbindgen_malloc), v = V_;
	const k = E_.processRawXyzImputed(l, a, s, w, g, b, d, u, r, f, m, h, p, y, v);
	if (k[2]) throw G_(k[1]);
	return G_(k[0]);
}
function oe(n, e, _, t, r, i, o, c, l, a) {
	const s = O_(n, E_.__wbindgen_malloc), w = V_, g = O_(e, E_.__wbindgen_malloc), b = V_, d = O_(_, E_.__wbindgen_malloc), u = V_, f = O_(t, E_.__wbindgen_malloc), m = V_;
	var h = F_(i) ? 0 : z_(i, E_.__wbindgen_malloc, E_.__wbindgen_realloc), p = V_, y = F_(c) ? 0 : z_(c, E_.__wbindgen_malloc, E_.__wbindgen_realloc), v = V_, k = F_(a) ? 0 : O_(a, E_.__wbindgen_malloc), S = V_;
	const A = E_.processRawXyzImputedWithEpoch(s, w, g, b, d, u, f, m, r, h, p, o, y, v, F_(l) ? 16777215 : l ? 1 : 0, k, S);
	if (A[2]) throw G_(A[1]);
	return G_(A[0]);
}
function ce(n, e, _, t) {
	const r = O_(n, E_.__wbindgen_malloc), i = V_, o = U_(e, E_.__wbindgen_malloc), c = V_, l = O_(t, E_.__wbindgen_malloc), a = V_, s = E_.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = y_(s[0], s[1]).slice();
	return E_.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function le(n, e, _, t) {
	const r = O_(n, E_.__wbindgen_malloc), i = V_, o = O_(e, E_.__wbindgen_malloc), c = V_, l = O_(_, E_.__wbindgen_malloc), a = V_, s = E_.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw G_(s[1]);
	return G_(s[0]);
}
function ae(n, e, _) {
	const t = U_(n, E_.__wbindgen_malloc), r = V_;
	var i = F_(e) ? 0 : z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_;
	const c = E_.readGgirMeta(t, r, i, o, F_(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw G_(c[1]);
	return G_(c[0]);
}
function se(n, e) {
	const _ = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), t = V_;
	var r = F_(e) ? 0 : z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), i = V_;
	const o = E_.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw G_(o[1]);
	return G_(o[0]);
}
function we() {
	return E_.recommended_chunk_size_mb() >>> 0;
}
function ge(n, e) {
	const _ = P_(e, E_.__wbindgen_malloc), t = V_, r = E_.rerunGgirResults(n, _, t);
	if (r[2]) throw G_(r[1]);
	return G_(r[0]);
}
function be(n) {
	const e = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), _ = V_, t = E_.resolveTimezone(e, _);
	if (t[2]) throw G_(t[1]);
	return G_(t[0]);
}
function de(n, e, _) {
	const t = O_(n, E_.__wbindgen_malloc), r = V_, i = O_(e, E_.__wbindgen_malloc), o = V_, c = N_(_, E_.__wbindgen_malloc), l = V_, a = E_.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw G_(a[2]);
	var s = h_(a[0], a[1]).slice();
	return E_.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function ue(n, e, _, t, r, i, o, c, l, a, s, w, g, b) {
	const d = U_(n, E_.__wbindgen_malloc), u = V_, f = z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), m = V_;
	var h = F_(_) ? 0 : U_(_, E_.__wbindgen_malloc), p = V_, y = F_(t) ? 0 : U_(t, E_.__wbindgen_malloc), v = V_, k = F_(r) ? 0 : U_(r, E_.__wbindgen_malloc), S = V_, A = F_(i) ? 0 : U_(i, E_.__wbindgen_malloc), C = V_, R = F_(o) ? 0 : U_(o, E_.__wbindgen_malloc), D = V_, x = F_(c) ? 0 : z_(c, E_.__wbindgen_malloc, E_.__wbindgen_realloc), I = V_, M = F_(l) ? 0 : z_(l, E_.__wbindgen_malloc, E_.__wbindgen_realloc), W = V_, F = F_(a) ? 0 : P_(a, E_.__wbindgen_malloc), N = V_, U = F_(w) ? 0 : z_(w, E_.__wbindgen_malloc, E_.__wbindgen_realloc), O = V_, P = F_(g) ? 0 : z_(g, E_.__wbindgen_malloc, E_.__wbindgen_realloc), z = V_;
	const G = E_.reviewGgirResults(d, u, f, m, h, p, y, v, k, S, A, C, R, D, x, I, M, W, F, N, s, U, O, P, z, F_(b) ? 4294967297 : b >>> 0);
	if (G[2]) throw G_(G[1]);
	return G_(G[0]);
}
function fe(n) {
	const e = P_(n, E_.__wbindgen_malloc), _ = V_, t = E_.reviewNonwearFile(e, _);
	if (t[2]) throw G_(t[1]);
	return G_(t[0]);
}
function me(n) {
	const e = P_(n, E_.__wbindgen_malloc), _ = V_, t = E_.reviewNonwearTotals(e, _);
	if (t[2]) throw G_(t[1]);
	return G_(t[0]);
}
function he(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = E_.roundCountStorage(_, t, e);
	var i = m_(r[0], r[1]).slice();
	return E_.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function pe(n) {
	const e = E_.runFullPipelineV1(n);
	if (e[2]) throw G_(e[1]);
	return G_(e[0]);
}
function ye(n) {
	const e = E_.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw G_(e[1]);
	return G_(e[0]);
}
function ve(n) {
	const e = E_.runGgirPart3(n);
	if (e[2]) throw G_(e[1]);
	return G_(e[0]);
}
function ke(n) {
	const e = P_(n, E_.__wbindgen_malloc), _ = V_, t = E_.scoreAllDays(e, _);
	if (t[3]) throw G_(t[2]);
	var r = h_(t[0], t[1]).slice();
	return E_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Se(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = E_.scoreColeKripke(_, t, e);
	var i = y_(r[0], r[1]).slice();
	return E_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Ae(n) {
	let e, _;
	try {
		const i = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_, c = E_.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, G_(c[2]);
		return e = t, _ = r, R_(t, r);
	} finally {
		E_.__wbindgen_free(e, _, 1);
	}
}
function Ce(n, e, _) {
	const t = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), r = V_, i = U_(e, E_.__wbindgen_malloc), o = V_, c = N_(_, E_.__wbindgen_malloc), l = V_, a = E_.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw G_(a[1]);
	return G_(a[0]);
}
function Re(n) {
	let e, _;
	try {
		const i = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_, c = E_.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, G_(c[2]);
		return e = t, _ = r, R_(t, r);
	} finally {
		E_.__wbindgen_free(e, _, 1);
	}
}
function De(n, e, _, t, r, i) {
	const o = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), c = V_, l = O_(e, E_.__wbindgen_malloc), a = V_, s = O_(_, E_.__wbindgen_malloc), w = V_, g = O_(t, E_.__wbindgen_malloc), b = V_, d = E_.scoreEpochsTyped(o, c, l, a, s, w, g, b, r, i);
	if (d[2]) throw G_(d[1]);
	return G_(d[0]);
}
function xe(n, e, _) {
	const t = O_(n, E_.__wbindgen_malloc), r = V_;
	var i = F_(e) ? 0 : z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_, c = F_(_) ? 0 : O_(_, E_.__wbindgen_malloc), l = V_;
	const a = E_.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw G_(a[2]);
	var s = y_(a[0], a[1]).slice();
	return E_.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function Ie(n) {
	const e = E_.scoreGgirHasibVariant(n);
	if (e[2]) throw G_(e[1]);
	return G_(e[0]);
}
function Me(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = E_.scoreSadeh(_, t, e);
	var i = y_(r[0], r[1]).slice();
	return E_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function We(n, e, _) {
	const t = z_(_, E_.__wbindgen_malloc, E_.__wbindgen_realloc), r = V_, i = E_.screensRestIntervals(n, F_(e) ? 0 : u_(e), t, r);
	if (i[2]) throw G_(i[1]);
	return G_(i[0]);
}
function Fe(n) {
	const e = P_(n, E_.__wbindgen_malloc), _ = V_, t = E_.settleManualNonwearNights(e, _);
	if (t[3]) throw G_(t[2]);
	var r = h_(t[0], t[1]).slice();
	return E_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Ne(n) {
	const e = U_(n, E_.__wbindgen_malloc), _ = V_, t = E_.sha256StreamFeed(e, _);
	if (t[1]) throw G_(t[0]);
}
function Ue() {
	let n, e;
	try {
		const r = E_.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, G_(r[2]);
		return n = _, e = t, R_(_, t);
	} finally {
		E_.__wbindgen_free(n, e, 1);
	}
}
function Oe() {
	E_.sha256StreamStart();
}
function Pe(n, e) {
	const _ = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), t = V_, r = E_.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = R_(r[0], r[1]).slice(), E_.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function ze(n, e, _, t, r) {
	const i = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_, c = O_(e, E_.__wbindgen_malloc), l = V_, a = N_(_, E_.__wbindgen_malloc), s = V_, w = O_(t, E_.__wbindgen_malloc), g = V_, b = N_(r, E_.__wbindgen_malloc), d = V_, u = E_.sleepRegularityIndex(i, o, c, l, a, s, w, g, b, d);
	if (u[3]) throw G_(u[2]);
	return 0 === u[0] ? void 0 : u[1];
}
function Ge(n, e) {
	const _ = E_.sleepWakeScores(n, F_(e) ? 0 : u_(e));
	if (_[2]) throw G_(_[1]);
	return G_(_[0]);
}
function Te(n) {
	const e = P_(n, E_.__wbindgen_malloc), _ = V_, t = E_.sourceLabelsWallClockMs(e, _);
	var r = m_(t[0], t[1]).slice();
	return E_.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function je(n, e, _) {
	const t = O_(n, E_.__wbindgen_malloc), r = V_, i = P_(e, E_.__wbindgen_malloc), o = V_, c = O_(_, E_.__wbindgen_malloc), l = V_, a = E_.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw G_(a[2]);
	let s;
	return 0 !== a[0] && (s = m_(a[0], a[1]).slice(), E_.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function Le(n, e, _, t) {
	const r = O_(n, E_.__wbindgen_malloc), i = V_, o = U_(e, E_.__wbindgen_malloc), c = V_, l = O_(_, E_.__wbindgen_malloc), a = V_, s = O_(t, E_.__wbindgen_malloc), w = V_, g = E_.statesInPeriods(r, i, o, c, l, a, s, w);
	var b = y_(g[0], g[1]).slice();
	return E_.__wbindgen_free(g[0], 1 * g[1], 1), b;
}
function Be(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = P_(e, E_.__wbindgen_malloc), i = V_, o = E_.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw G_(o[2]);
	var c = m_(o[0], o[1]).slice();
	return E_.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Ee(n) {
	const e = U_(n, E_.__wbindgen_malloc), _ = V_, t = E_.streamParseFeed(e, _);
	if (t[2]) throw G_(t[1]);
	return t[0] >>> 0;
}
function Ve() {
	const n = E_.streamParseFinishChunk();
	if (n[2]) throw G_(n[1]);
	return e.__wrap(n[0]);
}
function He(n) {
	const _ = E_.streamParseFinishChunkWithProgress(n);
	if (_[2]) throw G_(_[1]);
	return e.__wrap(_[0]);
}
function Xe(n, e, _) {
	var t = F_(_) ? 0 : z_(_, E_.__wbindgen_malloc, E_.__wbindgen_realloc), r = V_;
	const i = E_.streamParseStart(n, e, t, r);
	if (i[1]) throw G_(i[0]);
}
function $e(n, e, _, t, r) {
	var i = F_(t) ? 0 : z_(t, E_.__wbindgen_malloc, E_.__wbindgen_realloc), o = V_;
	const c = E_.streamParseStartWithEpoch(n, e, _, i, o, !F_(r), F_(r) ? 0 : r);
	if (c[1]) throw G_(c[0]);
}
function qe(n, e) {
	const _ = U_(n, E_.__wbindgen_malloc), t = V_, r = E_.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw G_(r[1]);
	return G_(r[0]);
}
function Ze(n) {
	const e = E_.summarizeExportGroups(n);
	if (e[3]) throw G_(e[2]);
	var _ = h_(e[0], e[1]).slice();
	return E_.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function Ye(n) {
	const e = E_.summarizePhysicalActivityDays(n);
	if (e[2]) throw G_(e[1]);
	return G_(e[0]);
}
function Je(n) {
	const e = E_.summarizePhysicalActivityTrace(n);
	if (e[2]) throw G_(e[1]);
	return G_(e[0]);
}
function Ke(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = E_.thresholdProbabilities(_, t, e);
	var i = y_(r[0], r[1]).slice();
	return E_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Qe(n) {
	const e = P_(n, E_.__wbindgen_malloc), _ = V_, t = E_.timeSemantics(e, _);
	if (t[3]) throw G_(t[2]);
	var r = h_(t[0], t[1]).slice();
	return E_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function n_(n, e, _) {
	const t = O_(n, E_.__wbindgen_malloc), r = V_, i = E_.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw G_(i[2]);
	var o = h_(i[0], i[1]).slice();
	return E_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function e_(n, e, _) {
	const t = E_.uniformTimestamps(n, e, _);
	var r = m_(t[0], t[1]).slice();
	return E_.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function __(n) {
	const e = O_(n, E_.__wbindgen_malloc), _ = V_, t = E_.utcDayIndex(e, _);
	if (t[2]) throw G_(t[1]);
	return G_(t[0]);
}
function t_(n) {
	const e = U_(n, E_.__wbindgen_malloc), _ = V_, t = E_.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function r_(n, e) {
	const _ = O_(n, E_.__wbindgen_malloc), t = V_, r = E_.validWearDays(_, t, F_(e) ? 0 : u_(e));
	if (r[3]) throw G_(r[2]);
	var i = y_(r[0], r[1]).slice();
	return E_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function i_(n, e, _) {
	const t = O_(n, E_.__wbindgen_malloc), r = V_, i = E_.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw G_(i[1]);
	return G_(i[0]);
}
function o_(n) {
	const e = O_(n, E_.__wbindgen_malloc), _ = V_, t = E_.wallClockLabels(e, _);
	var r = h_(t[0], t[1]).slice();
	return E_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function c_(n, e, _) {
	const t = U_(n, E_.__wbindgen_malloc), r = V_, i = P_(_, E_.__wbindgen_malloc), o = V_, c = E_.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw G_(c[2]);
	var l = y_(c[0], c[1]).slice();
	return E_.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function l_(n, e) {
	const _ = z_(n, E_.__wbindgen_malloc, E_.__wbindgen_realloc), t = V_;
	var r = F_(e) ? 0 : z_(e, E_.__wbindgen_malloc, E_.__wbindgen_realloc), i = V_;
	const o = E_.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw G_(o[1]);
	return G_(o[0]);
}
function a_(n) {
	const e = P_(n, E_.__wbindgen_malloc), _ = V_, t = E_.weekendDates(e, _);
	var r = y_(t[0], t[1]).slice();
	return E_.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function s_(n, e, _, t) {
	const r = O_(n, E_.__wbindgen_malloc), i = V_, o = E_.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function w_(n, e, _, t, r) {
	const i = O_(n, E_.__wbindgen_malloc), o = V_, c = O_(e, E_.__wbindgen_malloc), l = V_, a = O_(_, E_.__wbindgen_malloc), s = V_, w = E_.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw G_(w[1]);
	return G_(w[0]);
}
function g_() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(R_(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = z_(String(e), E_.__wbindgen_malloc, E_.__wbindgen_realloc), t = V_;
				k_().setInt32(n + 4, t, !0), k_().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				k_().setBigInt64(n + 8, F_(_) ? BigInt(0) : _, !0), k_().setInt32(n + 0, !F_(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return F_(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = z_(f_(e), E_.__wbindgen_malloc, E_.__wbindgen_realloc), t = V_;
				k_().setInt32(n + 4, t, !0), k_().setInt32(n + 0, _, !0);
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
				k_().setFloat64(n + 8, F_(_) ? 0 : _, !0), k_().setInt32(n + 0, !F_(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = F_(_) ? 0 : z_(_, E_.__wbindgen_malloc, E_.__wbindgen_realloc), r = V_;
				k_().setInt32(n + 4, r, !0), k_().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(R_(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return W_(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return W_(function(n, e, _, t) {
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
					_ = n, t = e, console.error(R_(n, e));
				} finally {
					E_.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return W_(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return W_(function(n, e) {
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
				return new Uint32Array(p_(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(m_(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== S_ && 0 !== S_.byteLength || (S_ = new Float32Array(E_.memory.buffer)), S_).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return W_(function(n) {
					return n.next();
				}, arguments);
			},
			__wbg_next_7646edaa39458ef7: function(n) {
				return n.next;
			},
			__wbg_ownKeys_0231887680f0f945: function() {
				return W_(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(y_(n, e), _);
			},
			__wbg_prototypesetcall_c5875dab42ff6b97: function(n, e, _) {
				Float64Array.prototype.set.call(m_(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return W_(function(n, e, _) {
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
				const _ = z_(e.stack, E_.__wbindgen_malloc, E_.__wbindgen_realloc), t = V_;
				k_().setInt32(n + 4, t, !0), k_().setInt32(n + 0, _, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return F_(n) ? 0 : u_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return F_(n) ? 0 : u_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return F_(n) ? 0 : u_(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return F_(n) ? 0 : u_(n);
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
				return y_(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return R_(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = E_.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
const b_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => E_.__wbg_aw5batch_free(n >>> 0, 1)), d_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => E_.__wbg_streamchunkresult_free(n >>> 0, 1));
function u_(n) {
	const e = E_.__externref_table_alloc();
	return E_.__wbindgen_externrefs.set(e, n), e;
}
function f_(n) {
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
		e > 0 && (_ += f_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + f_(n[t]);
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
function m_(n, e) {
	return n >>>= 0, C_().subarray(n / 8, n / 8 + e);
}
function h_(n, e) {
	n >>>= 0;
	const _ = k_(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(E_.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return E_.__externref_drop_slice(n, e), t;
}
function p_(n, e) {
	return n >>>= 0, x_().subarray(n / 4, n / 4 + e);
}
function y_(n, e) {
	return n >>>= 0, M_().subarray(n / 1, n / 1 + e);
}
let v_ = null;
function k_() {
	return (null === v_ || !0 === v_.buffer.detached || void 0 === v_.buffer.detached && v_.buffer !== E_.memory.buffer) && (v_ = new DataView(E_.memory.buffer)), v_;
}
let S_ = null, A_ = null;
function C_() {
	return null !== A_ && 0 !== A_.byteLength || (A_ = new Float64Array(E_.memory.buffer)), A_;
}
function R_(n, e) {
	return function(n, e) {
		return L_ += e, L_ >= j_ && (T_ = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), T_.decode(), L_ = e), T_.decode(M_().subarray(n, n + e));
	}(n >>>= 0, e);
}
let D_ = null;
function x_() {
	return null !== D_ && 0 !== D_.byteLength || (D_ = new Uint32Array(E_.memory.buffer)), D_;
}
let I_ = null;
function M_() {
	return null !== I_ && 0 !== I_.byteLength || (I_ = new Uint8Array(E_.memory.buffer)), I_;
}
function W_(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = u_(_);
		E_.__wbindgen_exn_store(n);
	}
}
function F_(n) {
	return null == n;
}
function N_(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return x_().set(n, _ / 4), V_ = n.length, _;
}
function U_(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return M_().set(n, _ / 1), V_ = n.length, _;
}
function O_(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return C_().set(n, _ / 8), V_ = n.length, _;
}
function P_(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = u_(n[t]);
		k_().setUint32(_ + 4 * t, e, !0);
	}
	return V_ = n.length, _;
}
function z_(n, e, _) {
	if (void 0 === _) {
		const _ = B_.encode(n), t = e(_.length, 1) >>> 0;
		return M_().subarray(t, t + _.length).set(_), V_ = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = M_();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = M_().subarray(r + o, r + t);
		o += B_.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return V_ = o, r;
}
function G_(n) {
	const e = E_.__wbindgen_externrefs.get(n);
	return E_.__externref_table_dealloc(n), e;
}
let T_ = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
T_.decode();
const j_ = 2146435072;
let L_ = 0;
const B_ = new TextEncoder();
"encodeInto" in B_ || (B_.encodeInto = function(n, e) {
	const _ = B_.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let E_, V_ = 0;
function H_(n, e) {
	return E_ = n.exports, v_ = null, S_ = null, A_ = null, D_ = null, I_ = null, E_.__wbindgen_start(), E_;
}
function X_(n) {
	if (void 0 !== E_) return E_;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = g_();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), H_(new WebAssembly.Instance(n, e));
}
async function $_(n) {
	if (void 0 !== E_) return E_;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-ffzJetTL.wasm", "" + import.meta.url));
	const e = g_();
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
	return H_(_);
}
export { n as Aw5Batch, e as StreamChunkResult, _ as actiwareIntervalStatistics, t as actiwareSleepIntervals, r as actiwareWakeThreshold, i as aggregateEpochSeries, o as analysisDatesOf, c as analysisWindowBounds, l as analysisWindowSlice, a as classifyActimetricPreschoolWristRf, s as classifyActimetricPreschoolWristRfLagLead, w as clippedUnionHours, g as compareNonwearDetectorMasks, b as computeAnglez5s, d as computeCircadian, u as computeCircadianTyped, f as computeMimsUnit, m as computeMimsUnitDataframe, h as computeNightDifficulty, p as computeNightDifficultyTyped, y as computeNightSignals, v as computeNightSignalsTyped, k as computeSleepMetrics, S as configureComputeMemoryBudgetV1, A as consensusDisagreementDetail, C as consensusDisagreements, R as convertBedWakeDaysDiary, D as convertScreensRedcapDiary, x as correctGgirRecording, I as csvBufferAppend, M as csvBufferClear, W as cutpointEpochCompatibility, F as cutpointToneCodes, N as cutpointsRefusal, $_ as default, U as describeColumns, O as detectDetachFromAccelerationG, P as detectDeviceFormat, z as detectGgirHasptVariant, G as detectHdcza, T as detectHourClockJumpMs, j as detectNonwear, L as detectNonwearChoi2011, B as detectNonwearChoi2011Epoch, E as detectNonwearChoi2012Epoch, V as detectNonwearUnified, H as detectNonwearUnifiedBatchTyped, X as dstPlaceholderRuns, $ as effectiveOverrideCutpoints, q as epochAgreement, Z as epochsOverlapping, Y as exportFileNightFigures, J as exportNapAggregate, K as extractCapsense, Q as foldOntoGrid, nn as foldSleepWakeVotes, en as foldUniformOntoGrid, _n as fuseNonwearMasks, tn as generateActiwareRestIntervals, rn as getComputeCapabilitiesV1, on as ggir5sWallClockMs, cn as ggirAppConfigSummary, ln as ggirConfigValues, an as ggirDayValidFractions, sn as ggirDaysIncluded, wn as ggirDiaryLogShape, gn as ggirDstPlaceholderCuts, bn as ggirIncludeDayCriterionHours, dn as ggirIndicesToWallClockMs, un as ggirLabelsToStoredMs, fn as ggirManualNightClocks, mn as ggirMilestoneVersion, hn as ggirNonwearApproach, pn as ggirPersonSummaries, yn as ggirRerunProfiles, vn as ggirSavedNonwearWindows, kn as ggirSleeplogStoredClocks, Sn as ggirSummaryDenominator, An as gridOffsetWithin, Cn as identifyGgirRData, Rn as implausibilityReasons, X_ as initSync, Dn as installPanicHook, xn as interRaterReliability, In as irregularInternalDays, Mn as lstmSpectralFeatures30s, Wn as markerIndexRange, Fn as markerSleepOnsetOffset, Nn as medianGapSeconds, Un as midSleepClockHours, On as neishabouriCounts, Pn as nextDate, zn as nightIntervalOverlap, Gn as nonwearContributors, Tn as nonwearInSleepCounts, jn as nonwearSleepOverlap, Ln as nonwearWeightRuns, Bn as normalizeCutpoints, En as parseActigraphCsvBuffered, Vn as parseAw5, Hn as parseEpochSeries, Xn as parseGeneactivCsvBuffered, $n as participantValidity, qn as physicalActivitySeriesGrid, Zn as placeMarkers, Yn as placeMarkersBatch, Jn as placeMarkersTyped, Kn as placeNightsTyped, Qn as placeNonwearMarkers, ne as placeNonwearMarkersTyped, ee as prepareGgirRecording, _e as processGt3xPart1, te as processGt3xPart1WithEpoch, re as processRawXyz, ie as processRawXyzImputed, oe as processRawXyzImputedWithEpoch, ce as projectLabelsOntoGrid, le as rasterizePeriods, ae as readGgirMeta, se as readGgirReportCsv, we as recommended_chunk_size_mb, ge as rerunGgirResults, be as resolveTimezone, de as restoredDstRuns, ue as reviewGgirResults, fe as reviewNonwearFile, me as reviewNonwearTotals, he as roundCountStorage, pe as runFullPipelineV1, ye as runGgirDeclaredEpochsV1, ve as runGgirPart3, ke as scoreAllDays, Se as scoreColeKripke, Ae as scoreConsensus, Ce as scoreConsensusTyped, Re as scoreEpochs, De as scoreEpochsTyped, xe as scoreGgirHasib, Ie as scoreGgirHasibVariant, Me as scoreSadeh, We as screensRestIntervals, Fe as settleManualNonwearNights, Ne as sha256StreamFeed, Ue as sha256StreamFinish, Oe as sha256StreamStart, Pe as shiftDate, ze as sleepRegularityIndex, Ge as sleepWakeScores, Te as sourceLabelsWallClockMs, je as spliceDstPlaceholders, Le as statesInPeriods, Be as storedToGgirLabelsMs, Ee as streamParseFeed, Ve as streamParseFinishChunk, He as streamParseFinishChunkWithProgress, Xe as streamParseStart, $e as streamParseStartWithEpoch, qe as summarizeActimetricPreschoolWristRfClasses, Ze as summarizeExportGroups, Ye as summarizePhysicalActivityDays, Je as summarizePhysicalActivityTrace, Ke as thresholdProbabilities, Qe as timeSemantics, n_ as timestampDiscontinuities, e_ as uniformTimestamps, __ as utcDayIndex, t_ as validStateFraction, r_ as validWearDays, i_ as wallClockDstPlaceholders, o_ as wallClockLabels, c_ as wallMaskOntoGgirGrid, l_ as wearSiteHasptRouting, a_ as weekendDates, s_ as windowCoverage, w_ as zeroCrossingCounts };
