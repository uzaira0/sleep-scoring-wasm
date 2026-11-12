function n(n, e) {
	return new Promise((_) => {
		n.addEventListener("message", function t({ data: r }) {
			null != r && r.type === e && (n.removeEventListener("message", t), _(r));
		});
	});
}
n(self, "wasm_bindgen_worker_init").then(async (n) => {
	const e = await import(n.mainJS);
	await e.default({
		module_or_path: n.module,
		memory: n.memory
	}), postMessage({ type: "wasm_bindgen_worker_ready" }), e.wbg_rayon_start_worker(n.receiver);
});
var e = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, y_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Q_.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = H_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.aw5batch_new(e, _);
		if (t[2]) throw q_(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, y_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), r = nt;
		var i = j_(_) ? 0 : J_(_, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt;
		const c = Q_.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw q_(c[1]);
		return q_(c[0]);
	}
	subjects(n) {
		const e = Q_.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw q_(e[2]);
		var _ = x_(e[0], e[1]).slice();
		return Q_.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, v_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, v_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Q_.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Q_.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Q_.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Q_.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Q_.streamchunkresult_axisX(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Q_.streamchunkresult_axisY(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Q_.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = Q_.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw q_(n[1]);
		return q_(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== Q_.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Q_.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = P_(n[0], n[1]).slice(), Q_.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get enmo5s() {
		const n = Q_.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Q_.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = Q_.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = I_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = Q_.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = I_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = Q_.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = C_(e[0], e[1]).slice();
		return Q_.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return Q_.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Q_.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Q_.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Q_.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Q_.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = P_(n[0], n[1]).slice(), Q_.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Q_.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Q_.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Q_.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Q_.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Q_.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Q_.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Q_.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Q_.streamchunkresult_temperature(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Q_.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Q_.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Q_.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Q_.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Q_.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Q_.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = C_(n[0], n[1]).slice();
		return Q_.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n) {
	const e = Q_.actiwareIntervalStatistics(n);
	if (e[3]) throw q_(e[2]);
	var _ = x_(e[0], e[1]).slice();
	return Q_.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function r(n, e, _) {
	const t = H_(e, Q_.__wbindgen_malloc), r = nt, i = Q_.actiwareSleepIntervals(n, t, r, j_(_) ? 0 : S_(_));
	if (i[3]) throw q_(i[2]);
	var o = x_(i[0], i[1]).slice();
	return Q_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function i(n, e) {
	const _ = Q_.actiwareWakeThreshold(n, j_(e) ? 0 : S_(e));
	if (_[3]) throw q_(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function o(n) {
	const e = Q_.aggregateEpochSeries(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function c(n) {
	const e = V_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.analysisDatesOf(e, _);
	var r = x_(t[0], t[1]).slice();
	return Q_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function l(n, e) {
	const _ = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), t = nt, r = Q_.analysisWindowBounds(_, t, !j_(e), j_(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = C_(r[0], r[1]).slice(), Q_.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function a(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), i = nt, o = Q_.analysisWindowSlice(_, t, r, i);
	var c = D_(o[0], o[1]).slice();
	return Q_.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function s(n, e, _, t) {
	const r = V_(n, Q_.__wbindgen_malloc), i = nt, o = V_(e, Q_.__wbindgen_malloc), c = nt, l = V_(_, Q_.__wbindgen_malloc), a = nt, s = Q_.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw q_(s[2]);
	var w = I_(s[0], s[1]).slice();
	return Q_.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function w(n, e, _, t) {
	const r = V_(n, Q_.__wbindgen_malloc), i = nt, o = V_(e, Q_.__wbindgen_malloc), c = nt, l = V_(_, Q_.__wbindgen_malloc), a = nt, s = Q_.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw q_(s[2]);
	var w = I_(s[0], s[1]).slice();
	return Q_.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function g(n, e, _, t) {
	const r = V_(n, Q_.__wbindgen_malloc), i = nt, o = V_(e, Q_.__wbindgen_malloc), c = nt;
	return Q_.clippedUnionHours(r, i, o, c, _, t);
}
function b(n, e) {
	const _ = Q_.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw q_(_[1]);
	return q_(_[0]);
}
function u(n, e, _, t) {
	const r = V_(n, Q_.__wbindgen_malloc), i = nt, o = V_(e, Q_.__wbindgen_malloc), c = nt, l = V_(_, Q_.__wbindgen_malloc), a = nt, s = Q_.computeAnglez5s(r, i, o, c, l, a, t);
	var w = C_(s[0], s[1]).slice();
	return Q_.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function d(n) {
	let e, _;
	try {
		const i = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt, c = Q_.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, P_(t, r);
	} finally {
		Q_.__wbindgen_free(e, _, 1);
	}
}
function f(n, e, _, t, r, i, o) {
	const c = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), l = nt, a = V_(e, Q_.__wbindgen_malloc), s = nt, w = L_(_, Q_.__wbindgen_malloc), g = nt, b = V_(t, Q_.__wbindgen_malloc), u = nt, d = L_(r, Q_.__wbindgen_malloc), f = nt, m = B_(i, Q_.__wbindgen_malloc), h = nt, p = L_(o, Q_.__wbindgen_malloc), y = nt, v = Q_.computeCircadianTyped(c, l, a, s, w, g, b, u, d, f, m, h, p, y);
	if (v[2]) throw q_(v[1]);
	return q_(v[0]);
}
function m(n, e, _, t, r) {
	const i = V_(n, Q_.__wbindgen_malloc), o = nt, c = V_(e, Q_.__wbindgen_malloc), l = nt, a = V_(_, Q_.__wbindgen_malloc), s = nt, w = Q_.computeMimsUnit(i, o, c, l, a, s, t, j_(r) ? 0 : S_(r));
	if (w[2]) throw q_(w[1]);
	return q_(w[0]);
}
function h(n, e, _, t, r) {
	const i = V_(n, Q_.__wbindgen_malloc), o = nt, c = V_(e, Q_.__wbindgen_malloc), l = nt, a = V_(_, Q_.__wbindgen_malloc), s = nt, w = V_(t, Q_.__wbindgen_malloc), g = nt, b = Q_.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, j_(r) ? 0 : S_(r));
	if (b[2]) throw q_(b[1]);
	return q_(b[0]);
}
function p(n) {
	let e, _;
	try {
		const i = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt, c = Q_.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, P_(t, r);
	} finally {
		Q_.__wbindgen_free(e, _, 1);
	}
}
function y(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h) {
	const p = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), y = nt, v = V_(e, Q_.__wbindgen_malloc), k = nt, S = L_(_, Q_.__wbindgen_malloc), A = nt, R = V_(t, Q_.__wbindgen_malloc), C = nt, x = L_(r, Q_.__wbindgen_malloc), D = nt, I = B_(i, Q_.__wbindgen_malloc), M = nt, W = L_(o, Q_.__wbindgen_malloc), F = nt, U = B_(c, Q_.__wbindgen_malloc), z = nt, P = L_(l, Q_.__wbindgen_malloc), O = nt, T = V_(a, Q_.__wbindgen_malloc), N = nt, G = L_(s, Q_.__wbindgen_malloc), E = nt, j = V_(w, Q_.__wbindgen_malloc), L = nt, B = L_(g, Q_.__wbindgen_malloc), V = nt, H = V_(b, Q_.__wbindgen_malloc), J = nt, q = L_(u, Q_.__wbindgen_malloc), X = nt, $ = V_(d, Q_.__wbindgen_malloc), Z = nt, Y = L_(f, Q_.__wbindgen_malloc), K = nt, Q = B_(m, Q_.__wbindgen_malloc), nn = nt, en = L_(h, Q_.__wbindgen_malloc), _n = nt, tn = Q_.computeNightDifficultyTyped(p, y, v, k, S, A, R, C, x, D, I, M, W, F, U, z, P, O, T, N, G, E, j, L, B, V, H, J, q, X, $, Z, Y, K, Q, nn, en, _n);
	if (tn[2]) throw q_(tn[1]);
	return q_(tn[0]);
}
function v(n) {
	let e, _;
	try {
		const i = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt, c = Q_.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, P_(t, r);
	} finally {
		Q_.__wbindgen_free(e, _, 1);
	}
}
function k(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h) {
	const p = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), y = nt, v = V_(e, Q_.__wbindgen_malloc), k = nt, S = L_(_, Q_.__wbindgen_malloc), A = nt, R = V_(t, Q_.__wbindgen_malloc), C = nt, x = L_(r, Q_.__wbindgen_malloc), D = nt, I = B_(i, Q_.__wbindgen_malloc), M = nt, W = L_(o, Q_.__wbindgen_malloc), F = nt, U = B_(c, Q_.__wbindgen_malloc), z = nt, P = L_(l, Q_.__wbindgen_malloc), O = nt, T = V_(a, Q_.__wbindgen_malloc), N = nt, G = L_(s, Q_.__wbindgen_malloc), E = nt, j = V_(w, Q_.__wbindgen_malloc), L = nt, B = L_(g, Q_.__wbindgen_malloc), V = nt, H = V_(b, Q_.__wbindgen_malloc), J = nt, q = L_(u, Q_.__wbindgen_malloc), X = nt, $ = V_(d, Q_.__wbindgen_malloc), Z = nt, Y = L_(f, Q_.__wbindgen_malloc), K = nt, Q = B_(m, Q_.__wbindgen_malloc), nn = nt, en = L_(h, Q_.__wbindgen_malloc), _n = nt, tn = Q_.computeNightSignalsTyped(p, y, v, k, S, A, R, C, x, D, I, M, W, F, U, z, P, O, T, N, G, E, j, L, B, V, H, J, q, X, $, Z, Y, K, Q, nn, en, _n);
	if (tn[2]) throw q_(tn[1]);
	return q_(tn[0]);
}
function S(n, e, _) {
	const t = B_(n, Q_.__wbindgen_malloc), r = nt, i = V_(e, Q_.__wbindgen_malloc), o = nt, c = Q_.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw q_(c[1]);
	return q_(c[0]);
}
function A(n) {
	const e = Q_.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function R(n) {
	const e = H_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.consensusDisagreementDetail(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function C(n) {
	const e = Q_.consensusDisagreements(n);
	if (e[3]) throw q_(e[2]);
	var _ = x_(e[0], e[1]).slice();
	return Q_.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function x(n) {
	const e = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), _ = nt, t = Q_.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function D(n) {
	const e = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), _ = nt, t = Q_.convertScreensRedcapDiary(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function I(n, e) {
	const _ = H_(e, Q_.__wbindgen_malloc), t = nt, r = Q_.correctGgirRecording(n, _, t);
	if (r[2]) throw q_(r[1]);
	return q_(r[0]);
}
function M(n) {
	const e = B_(n, Q_.__wbindgen_malloc), _ = nt;
	Q_.csvBufferAppend(e, _);
}
function W(n) {
	Q_.csvBufferClear(n);
}
function F(n, e) {
	const _ = Q_.cutpointEpochCompatibility(n, e);
	if (_[2]) throw q_(_[1]);
	return q_(_[0]);
}
function U(n, e, _, t, r) {
	const i = V_(n, Q_.__wbindgen_malloc), o = nt, c = Q_.cutpointToneCodes(i, o, e, _, t, r);
	var l = I_(c[0], c[1]).slice();
	return Q_.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function z(n, e, _, t) {
	const r = Q_.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = P_(r[0], r[1]).slice(), Q_.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function P(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = L_(e, Q_.__wbindgen_malloc), i = nt, o = Q_.describeColumns(_, t, r, i);
	if (o[3]) throw q_(o[2]);
	var c = x_(o[0], o[1]).slice();
	return Q_.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function O(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = V_(e, Q_.__wbindgen_malloc), i = nt, o = Q_.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw q_(o[2]);
	var c = I_(o[0], o[1]).slice();
	return Q_.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function T(n, e) {
	let _, t;
	try {
		const r = B_(n, Q_.__wbindgen_malloc), i = nt, o = J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), c = nt, l = Q_.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], P_(l[0], l[1]);
	} finally {
		Q_.__wbindgen_free(_, t, 1);
	}
}
function N(n) {
	const e = Q_.detectGgirHasptVariant(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function G(n, e, _, t, r) {
	const i = V_(n, Q_.__wbindgen_malloc), o = nt;
	var c = j_(e) ? 0 : J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), l = nt, a = j_(_) ? 0 : V_(_, Q_.__wbindgen_malloc), s = nt, w = j_(t) ? 0 : V_(t, Q_.__wbindgen_malloc), g = nt, b = j_(r) ? 0 : J_(r, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), u = nt;
	const d = Q_.detectHdcza(i, o, c, l, a, s, w, g, b, u);
	if (d[2]) throw q_(d[1]);
	return q_(d[0]);
}
function E(n) {
	const e = V_(n, Q_.__wbindgen_malloc), _ = nt;
	return 0 !== Q_.detectHourClockJumpMs(e, _);
}
function j(n) {
	const e = V_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.detectNonwear(e, _);
	var r = I_(t[0], t[1]).slice();
	return Q_.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function L(n) {
	const e = V_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.detectNonwearChoi2011(e, _);
	var r = I_(t[0], t[1]).slice();
	return Q_.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function B(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = Q_.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw q_(r[2]);
	var i = I_(r[0], r[1]).slice();
	return Q_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function V(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = Q_.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw q_(r[2]);
	var i = I_(r[0], r[1]).slice();
	return Q_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function H(n) {
	let e, _;
	try {
		const i = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt, c = Q_.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, P_(t, r);
	} finally {
		Q_.__wbindgen_free(e, _, 1);
	}
}
function J(n, e, _, t, r, i, o) {
	const c = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), l = nt, a = J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), s = nt, w = V_(_, Q_.__wbindgen_malloc), g = nt, b = V_(t, Q_.__wbindgen_malloc), u = nt, d = V_(r, Q_.__wbindgen_malloc), f = nt, m = Q_.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, b, u, d, f, i, o);
	if (m[2]) throw q_(m[1]);
	return q_(m[0]);
}
function q(n, e, _) {
	const t = H_(_, Q_.__wbindgen_malloc), r = nt, i = Q_.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw q_(i[2]);
	var o = x_(i[0], i[1]).slice();
	return Q_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function X(n, e, _, t) {
	const r = Q_.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = C_(r[0], r[1]).slice(), Q_.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function $(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = V_(e, Q_.__wbindgen_malloc), i = nt, o = Q_.epochAgreement(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function Z(n, e, _, t) {
	const r = V_(n, Q_.__wbindgen_malloc), i = nt, o = Q_.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = D_(o[0], o[1]).slice(), Q_.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function Y(n, e, _) {
	const t = H_(n, Q_.__wbindgen_malloc), r = nt, i = H_(e, Q_.__wbindgen_malloc), o = nt, c = H_(_, Q_.__wbindgen_malloc), l = nt, a = Q_.exportFileNightFigures(t, r, i, o, c, l);
	if (a[3]) throw q_(a[2]);
	var s = x_(a[0], a[1]).slice();
	return Q_.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function K(n) {
	const e = H_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.exportNapAggregate(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function Q(n) {
	const e = B_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.extractCapsense(e, _);
	if (t[3]) throw q_(t[2]);
	var r = x_(t[0], t[1]).slice();
	return Q_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function nn(n, e, _, t, r) {
	const i = V_(n, Q_.__wbindgen_malloc), o = nt, c = V_(e, Q_.__wbindgen_malloc), l = nt, a = V_(_, Q_.__wbindgen_malloc), s = nt, w = J_(r, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), g = nt, b = Q_.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (b[3]) throw q_(b[2]);
	var u = C_(b[0], b[1]).slice();
	return Q_.__wbindgen_free(b[0], 8 * b[1], 8), u;
}
function en(n, e, _, t, r) {
	const i = B_(_, Q_.__wbindgen_malloc), o = nt, c = V_(t, Q_.__wbindgen_malloc), l = nt, a = Q_.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw q_(a[1]);
	return q_(a[0]);
}
function _n(n, e, _, t, r, i) {
	const o = V_(_, Q_.__wbindgen_malloc), c = nt, l = V_(t, Q_.__wbindgen_malloc), a = nt, s = J_(i, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), w = nt, g = Q_.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw q_(g[2]);
	var b = C_(g[0], g[1]).slice();
	return Q_.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function tn(n) {
	const e = Q_.fuseNonwearMasks(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function rn(n, e, _) {
	var t = j_(_) ? 0 : J_(_, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), r = nt;
	const i = Q_.generateActiwareRestIntervals(n, j_(e) ? 0 : S_(e), t, r);
	if (i[3]) throw q_(i[2]);
	var o = x_(i[0], i[1]).slice();
	return Q_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function on() {
	const n = Q_.getComputeCapabilitiesV1();
	if (n[2]) throw q_(n[1]);
	return q_(n[0]);
}
function cn(n, e, _) {
	const t = H_(_, Q_.__wbindgen_malloc), r = nt, i = Q_.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw q_(i[2]);
	var o = C_(i[0], i[1]).slice();
	return Q_.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function ln(n, e) {
	var _ = j_(n) ? 0 : J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), t = nt;
	const r = Q_.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw q_(r[1]);
	return q_(r[0]);
}
function an(n) {
	const e = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), _ = nt, t = Q_.ggirConfigValues(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function sn(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = V_(e, Q_.__wbindgen_malloc), i = nt, o = Q_.ggirDayValidFractions(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function wn(n, e, _) {
	const t = V_(n, Q_.__wbindgen_malloc), r = nt;
	var i = j_(e) ? 0 : V_(e, Q_.__wbindgen_malloc), o = nt, c = j_(_) ? 0 : J_(_, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), l = nt;
	const a = Q_.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw q_(a[2]);
	var s = I_(a[0], a[1]).slice();
	return Q_.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function gn(n, e) {
	const _ = B_(n, Q_.__wbindgen_malloc), t = nt;
	var r = j_(e) ? 0 : J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), i = nt;
	const o = Q_.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function bn(n, e, _) {
	const t = H_(e, Q_.__wbindgen_malloc), r = nt;
	var i = j_(_) ? 0 : V_(_, Q_.__wbindgen_malloc), o = nt;
	const c = Q_.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw q_(c[2]);
	var l = x_(c[0], c[1]).slice();
	return Q_.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function un(n) {
	var e = j_(n) ? 0 : J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), _ = nt;
	const t = Q_.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw q_(t[1]);
	return t[0];
}
function dn(n, e, _, t) {
	const r = L_(n, Q_.__wbindgen_malloc), i = nt, o = H_(_, Q_.__wbindgen_malloc), c = nt;
	var l = j_(t) ? 0 : V_(t, Q_.__wbindgen_malloc), a = nt;
	const s = Q_.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw q_(s[2]);
	var w = C_(s[0], s[1]).slice();
	return Q_.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function fn(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = H_(e, Q_.__wbindgen_malloc), i = nt, o = Q_.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw q_(o[2]);
	var c = C_(o[0], o[1]).slice();
	return Q_.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function mn(n, e, _, t) {
	const r = H_(n, Q_.__wbindgen_malloc), i = nt, o = V_(e, Q_.__wbindgen_malloc), c = nt, l = V_(_, Q_.__wbindgen_malloc), a = nt, s = V_(t, Q_.__wbindgen_malloc), w = nt, g = Q_.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw q_(g[1]);
	return q_(g[0]);
}
function hn(n) {
	const e = B_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.ggirMilestoneVersion(e, _);
	if (t[3]) throw q_(t[2]);
	let r;
	return 0 !== t[0] && (r = P_(t[0], t[1]).slice(), Q_.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function pn(n) {
	const e = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), _ = nt, t = Q_.ggirNonwearApproach(e, _);
	if (t[3]) throw q_(t[2]);
	let r;
	return 0 !== t[0] && (r = P_(t[0], t[1]).slice(), Q_.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function yn(n) {
	const e = Q_.ggirPersonSummaries(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function vn() {
	const n = Q_.ggirRerunProfiles();
	if (n[3]) throw q_(n[2]);
	var e = x_(n[0], n[1]).slice();
	return Q_.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function kn(n) {
	const e = B_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.ggirSavedNonwearWindows(e, _);
	if (t[2]) throw q_(t[1]);
	return t[0] >>> 0;
}
function Sn(n, e, _, t) {
	const r = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), i = nt, o = J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), c = nt, l = J_(_, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), a = nt, s = H_(t, Q_.__wbindgen_malloc), w = nt, g = Q_.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw q_(g[2]);
	let b;
	return 0 !== g[0] && (b = x_(g[0], g[1]).slice(), Q_.__wbindgen_free(g[0], 4 * g[1], 4)), b;
}
function An(n, e) {
	const _ = Q_.ggirSummaryDenominator(n, e);
	if (_[2]) throw q_(_[1]);
	return q_(_[0]);
}
function Rn(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = V_(e, Q_.__wbindgen_malloc), i = nt, o = Q_.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Cn(n) {
	let e, _;
	try {
		const i = B_(n, Q_.__wbindgen_malloc), o = nt, c = Q_.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, P_(t, r);
	} finally {
		Q_.__wbindgen_free(e, _, 1);
	}
}
function xn(n, e, _, t) {
	const r = V_(n, Q_.__wbindgen_malloc), i = nt, o = V_(e, Q_.__wbindgen_malloc), c = nt, l = V_(_, Q_.__wbindgen_malloc), a = nt, s = V_(t, Q_.__wbindgen_malloc), w = nt, g = Q_.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw q_(g[1]);
	return q_(g[0]);
}
function Dn(n) {
	return Q_.initThreadPool(n);
}
function In() {
	Q_.installPanicHook();
}
function Mn(n) {
	const e = H_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.interRaterReliability(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function Wn(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = Q_.irregularInternalDays(_, t, e);
	var i = x_(r[0], r[1]).slice();
	return Q_.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Fn(n, e, _, t) {
	const r = V_(n, Q_.__wbindgen_malloc), i = nt, o = V_(e, Q_.__wbindgen_malloc), c = nt, l = V_(_, Q_.__wbindgen_malloc), a = nt, s = Q_.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw q_(s[1]);
	return q_(s[0]);
}
function Un(n, e, _) {
	const t = V_(n, Q_.__wbindgen_malloc), r = nt, i = Q_.markerIndexRange(t, r, e, _);
	var o = D_(i[0], i[1]).slice();
	return Q_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function zn(n, e, _, t, r, i, o) {
	const c = V_(n, Q_.__wbindgen_malloc), l = nt, a = V_(e, Q_.__wbindgen_malloc), s = nt, w = Q_.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw q_(w[1]);
	return q_(w[0]);
}
function Pn(n) {
	const e = V_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function On(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = V_(e, Q_.__wbindgen_malloc), i = nt, o = Q_.midSleepClockHours(_, t, r, i);
	var c = C_(o[0], o[1]).slice();
	return Q_.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Tn(n, e, _, t, r) {
	const i = V_(n, Q_.__wbindgen_malloc), o = nt, c = V_(e, Q_.__wbindgen_malloc), l = nt, a = V_(_, Q_.__wbindgen_malloc), s = nt, w = Q_.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw q_(w[1]);
	return q_(w[0]);
}
function Nn(n) {
	const e = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), _ = nt, t = Q_.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = P_(t[0], t[1]).slice(), Q_.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Gn(n, e, _, t, r) {
	const i = V_(_, Q_.__wbindgen_malloc), o = nt, c = V_(t, Q_.__wbindgen_malloc), l = nt, a = V_(r, Q_.__wbindgen_malloc), s = nt, w = Q_.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw q_(w[1]);
	return q_(w[0]);
}
function En(n, e, _, t) {
	let r, i;
	try {
		const l = L_(n, Q_.__wbindgen_malloc), a = nt, s = J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), w = nt, g = Q_.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, q_(g[2]);
		return r = o, i = c, P_(o, c);
	} finally {
		Q_.__wbindgen_free(r, i, 1);
	}
}
function jn(n) {
	const e = V_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.nonwearInSleepCounts(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function Ln(n) {
	const e = Q_.nonwearSleepOverlap(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function Bn(n, e, _) {
	const t = V_(n, Q_.__wbindgen_malloc), r = nt, i = V_(e, Q_.__wbindgen_malloc), o = nt, c = Q_.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw q_(c[1]);
	return q_(c[0]);
}
function Vn(n, e, _, t, r, i) {
	const o = J_(r, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), c = nt, l = Q_.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw q_(l[2]);
	var a = C_(l[0], l[1]).slice();
	return Q_.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function Hn(n) {
	const e = Q_.parseActigraphCsvBuffered(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function Jn(n, e, _, t) {
	const r = B_(n, Q_.__wbindgen_malloc), i = nt;
	var o = j_(e) ? 0 : J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), c = nt, l = j_(_) ? 0 : H_(_, Q_.__wbindgen_malloc), a = nt, s = j_(t) ? 0 : J_(t, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), w = nt;
	const g = Q_.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw q_(g[1]);
	return q_(g[0]);
}
function qn(n, e) {
	const _ = B_(n, Q_.__wbindgen_malloc), t = nt, r = J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), i = nt, o = Q_.parseEpochSeries(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function Xn() {
	const n = Q_.parseGeneactivCsvBuffered();
	if (n[2]) throw q_(n[1]);
	return q_(n[0]);
}
function $n(n, e, _, t) {
	const r = V_(n, Q_.__wbindgen_malloc), i = nt, o = B_(e, Q_.__wbindgen_malloc), c = nt, l = B_(_, Q_.__wbindgen_malloc), a = nt, s = Q_.participantValidity(r, i, o, c, l, a, j_(t) ? 0 : S_(t));
	if (s[2]) throw q_(s[1]);
	return q_(s[0]);
}
function Zn(n, e, _, t, r) {
	const i = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt, c = V_(e, Q_.__wbindgen_malloc), l = nt;
	var a = j_(_) ? 0 : V_(_, Q_.__wbindgen_malloc), s = nt;
	const w = Q_.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw q_(w[1]);
	return q_(w[0]);
}
function Yn(n) {
	let e, _;
	try {
		const i = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt, c = Q_.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, P_(t, r);
	} finally {
		Q_.__wbindgen_free(e, _, 1);
	}
}
function Kn(n, e, _, t, r, i) {
	const o = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), c = nt, l = V_(e, Q_.__wbindgen_malloc), a = nt, s = V_(_, Q_.__wbindgen_malloc), w = nt, g = B_(t, Q_.__wbindgen_malloc), b = nt, u = B_(r, Q_.__wbindgen_malloc), d = nt, f = J_(i, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), m = nt, h = Q_.placeMarkersBatch(o, c, l, a, s, w, g, b, u, d, f, m);
	if (h[2]) throw q_(h[1]);
	return q_(h[0]);
}
function Qn(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h, p) {
	const y = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), v = nt, k = V_(e, Q_.__wbindgen_malloc), S = nt, A = L_(_, Q_.__wbindgen_malloc), R = nt, C = V_(t, Q_.__wbindgen_malloc), x = nt, D = L_(r, Q_.__wbindgen_malloc), I = nt, M = B_(i, Q_.__wbindgen_malloc), W = nt, F = L_(o, Q_.__wbindgen_malloc), U = nt, z = B_(c, Q_.__wbindgen_malloc), P = nt, O = L_(l, Q_.__wbindgen_malloc), T = nt, N = V_(a, Q_.__wbindgen_malloc), G = nt, E = L_(s, Q_.__wbindgen_malloc), j = nt, L = V_(w, Q_.__wbindgen_malloc), B = nt, V = L_(g, Q_.__wbindgen_malloc), H = nt, J = V_(b, Q_.__wbindgen_malloc), q = nt, X = L_(u, Q_.__wbindgen_malloc), $ = nt, Z = V_(d, Q_.__wbindgen_malloc), Y = nt, K = L_(f, Q_.__wbindgen_malloc), Q = nt, nn = B_(m, Q_.__wbindgen_malloc), en = nt, _n = L_(h, Q_.__wbindgen_malloc), tn = nt;
	var rn = j_(p) ? 0 : J_(p, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), on = nt;
	const cn = Q_.placeMarkersTyped(y, v, k, S, A, R, C, x, D, I, M, W, F, U, z, P, O, T, N, G, E, j, L, B, V, H, J, q, X, $, Z, Y, K, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw q_(cn[1]);
	return q_(cn[0]);
}
function ne(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h, p) {
	const y = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), v = nt, k = V_(e, Q_.__wbindgen_malloc), S = nt, A = L_(_, Q_.__wbindgen_malloc), R = nt, C = V_(t, Q_.__wbindgen_malloc), x = nt, D = L_(r, Q_.__wbindgen_malloc), I = nt, M = B_(i, Q_.__wbindgen_malloc), W = nt, F = L_(o, Q_.__wbindgen_malloc), U = nt, z = B_(c, Q_.__wbindgen_malloc), P = nt, O = L_(l, Q_.__wbindgen_malloc), T = nt, N = V_(a, Q_.__wbindgen_malloc), G = nt, E = L_(s, Q_.__wbindgen_malloc), j = nt, L = V_(w, Q_.__wbindgen_malloc), B = nt, V = L_(g, Q_.__wbindgen_malloc), H = nt, J = V_(b, Q_.__wbindgen_malloc), q = nt, X = L_(u, Q_.__wbindgen_malloc), $ = nt, Z = V_(d, Q_.__wbindgen_malloc), Y = nt, K = L_(f, Q_.__wbindgen_malloc), Q = nt, nn = B_(m, Q_.__wbindgen_malloc), en = nt, _n = L_(h, Q_.__wbindgen_malloc), tn = nt, rn = Q_.placeNightsTyped(y, v, k, S, A, R, C, x, D, I, M, W, F, U, z, P, O, T, N, G, E, j, L, B, V, H, J, q, X, $, Z, Y, K, Q, nn, en, _n, tn, p);
	if (rn[2]) throw q_(rn[1]);
	return q_(rn[0]);
}
function ee(n) {
	let e, _;
	try {
		const i = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt, c = Q_.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, P_(t, r);
	} finally {
		Q_.__wbindgen_free(e, _, 1);
	}
}
function _e(n, e, _, t) {
	const r = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), i = nt, o = V_(e, Q_.__wbindgen_malloc), c = nt, l = V_(_, Q_.__wbindgen_malloc), a = nt, s = B_(t, Q_.__wbindgen_malloc), w = nt, g = Q_.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw q_(g[1]);
	return q_(g[0]);
}
function te(n, e, _, t, r, i, o, c, l, a, s) {
	const w = B_(n, Q_.__wbindgen_malloc), g = nt, b = J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), u = nt;
	var d = j_(_) ? 0 : B_(_, Q_.__wbindgen_malloc), f = nt, m = j_(t) ? 0 : B_(t, Q_.__wbindgen_malloc), h = nt, p = j_(r) ? 0 : B_(r, Q_.__wbindgen_malloc), y = nt, v = j_(i) ? 0 : B_(i, Q_.__wbindgen_malloc), k = nt, S = j_(o) ? 0 : B_(o, Q_.__wbindgen_malloc), A = nt, R = j_(c) ? 0 : J_(c, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), C = nt, x = j_(l) ? 0 : J_(l, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), D = nt, I = j_(a) ? 0 : J_(a, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), M = nt, W = j_(s) ? 0 : J_(s, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), F = nt;
	const U = Q_.prepareGgirRecording(w, g, b, u, d, f, m, h, p, y, v, k, S, A, R, C, x, D, I, M, W, F);
	if (U[2]) throw q_(U[1]);
	return q_(U[0]);
}
function re(n, e) {
	const _ = B_(n, Q_.__wbindgen_malloc), t = nt;
	var r = j_(e) ? 0 : J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), i = nt;
	const o = Q_.processGt3xPart1(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function ie(n, e, _) {
	const t = B_(n, Q_.__wbindgen_malloc), r = nt;
	var i = j_(_) ? 0 : J_(_, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt;
	const c = Q_.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw q_(c[1]);
	return q_(c[0]);
}
function oe(n, e, _, t, r, i, o) {
	const c = V_(n, Q_.__wbindgen_malloc), l = nt, a = V_(e, Q_.__wbindgen_malloc), s = nt, w = V_(_, Q_.__wbindgen_malloc), g = nt;
	var b = j_(i) ? 0 : J_(i, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), u = nt, d = j_(o) ? 0 : J_(o, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), f = nt;
	const m = Q_.processRawXyz(c, l, a, s, w, g, t, r, b, u, d, f);
	if (m[2]) throw q_(m[1]);
	return q_(m[0]);
}
function ce(n, e, _, t, r, i, o, c) {
	const l = V_(n, Q_.__wbindgen_malloc), a = nt, s = V_(e, Q_.__wbindgen_malloc), w = nt, g = V_(_, Q_.__wbindgen_malloc), b = nt, u = V_(t, Q_.__wbindgen_malloc), d = nt;
	var f = j_(i) ? 0 : J_(i, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), m = nt, h = j_(o) ? 0 : J_(o, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), p = nt, y = j_(c) ? 0 : V_(c, Q_.__wbindgen_malloc), v = nt;
	const k = Q_.processRawXyzImputed(l, a, s, w, g, b, u, d, r, f, m, h, p, y, v);
	if (k[2]) throw q_(k[1]);
	return q_(k[0]);
}
function le(n, e, _, t, r, i, o, c, l, a) {
	const s = V_(n, Q_.__wbindgen_malloc), w = nt, g = V_(e, Q_.__wbindgen_malloc), b = nt, u = V_(_, Q_.__wbindgen_malloc), d = nt, f = V_(t, Q_.__wbindgen_malloc), m = nt;
	var h = j_(i) ? 0 : J_(i, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), p = nt, y = j_(c) ? 0 : J_(c, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), v = nt, k = j_(a) ? 0 : V_(a, Q_.__wbindgen_malloc), S = nt;
	const A = Q_.processRawXyzImputedWithEpoch(s, w, g, b, u, d, f, m, r, h, p, o, y, v, j_(l) ? 16777215 : l ? 1 : 0, k, S);
	if (A[2]) throw q_(A[1]);
	return q_(A[0]);
}
function ae(n, e, _, t) {
	const r = V_(n, Q_.__wbindgen_malloc), i = nt, o = B_(e, Q_.__wbindgen_malloc), c = nt, l = V_(t, Q_.__wbindgen_malloc), a = nt, s = Q_.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = I_(s[0], s[1]).slice();
	return Q_.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function se(n, e, _, t) {
	const r = V_(n, Q_.__wbindgen_malloc), i = nt, o = V_(e, Q_.__wbindgen_malloc), c = nt, l = V_(_, Q_.__wbindgen_malloc), a = nt, s = Q_.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw q_(s[1]);
	return q_(s[0]);
}
function we(n, e, _) {
	const t = B_(n, Q_.__wbindgen_malloc), r = nt;
	var i = j_(e) ? 0 : J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt;
	const c = Q_.readGgirMeta(t, r, i, o, j_(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw q_(c[1]);
	return q_(c[0]);
}
function ge(n, e) {
	const _ = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), t = nt;
	var r = j_(e) ? 0 : J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), i = nt;
	const o = Q_.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function be() {
	return Q_.recommended_chunk_size_mb() >>> 0;
}
function ue(n, e) {
	const _ = H_(e, Q_.__wbindgen_malloc), t = nt, r = Q_.rerunGgirResults(n, _, t);
	if (r[2]) throw q_(r[1]);
	return q_(r[0]);
}
function de(n) {
	const e = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), _ = nt, t = Q_.resolveTimezone(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function fe(n, e, _) {
	const t = V_(n, Q_.__wbindgen_malloc), r = nt, i = V_(e, Q_.__wbindgen_malloc), o = nt, c = L_(_, Q_.__wbindgen_malloc), l = nt, a = Q_.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw q_(a[2]);
	var s = x_(a[0], a[1]).slice();
	return Q_.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function me(n, e, _, t, r, i, o, c, l, a, s, w, g, b) {
	const u = B_(n, Q_.__wbindgen_malloc), d = nt, f = J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), m = nt;
	var h = j_(_) ? 0 : B_(_, Q_.__wbindgen_malloc), p = nt, y = j_(t) ? 0 : B_(t, Q_.__wbindgen_malloc), v = nt, k = j_(r) ? 0 : B_(r, Q_.__wbindgen_malloc), S = nt, A = j_(i) ? 0 : B_(i, Q_.__wbindgen_malloc), R = nt, C = j_(o) ? 0 : B_(o, Q_.__wbindgen_malloc), x = nt, D = j_(c) ? 0 : J_(c, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), I = nt, M = j_(l) ? 0 : J_(l, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), W = nt, F = j_(a) ? 0 : H_(a, Q_.__wbindgen_malloc), U = nt, z = j_(w) ? 0 : J_(w, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), P = nt, O = j_(g) ? 0 : J_(g, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), T = nt;
	const N = Q_.reviewGgirResults(u, d, f, m, h, p, y, v, k, S, A, R, C, x, D, I, M, W, F, U, s, z, P, O, T, j_(b) ? 4294967297 : b >>> 0);
	if (N[2]) throw q_(N[1]);
	return q_(N[0]);
}
function he(n) {
	const e = H_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.reviewNonwearFile(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function pe(n) {
	const e = H_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.reviewNonwearTotals(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function ye(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = Q_.roundCountStorage(_, t, e);
	var i = C_(r[0], r[1]).slice();
	return Q_.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function ve(n) {
	const e = Q_.runFullPipelineV1(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function ke(n) {
	const e = Q_.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function Se(n) {
	const e = Q_.runGgirPart3(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function Ae(n) {
	const e = H_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.scoreAllDays(e, _);
	if (t[3]) throw q_(t[2]);
	var r = x_(t[0], t[1]).slice();
	return Q_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Re(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = Q_.scoreColeKripke(_, t, e);
	var i = I_(r[0], r[1]).slice();
	return Q_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Ce(n) {
	let e, _;
	try {
		const i = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt, c = Q_.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, P_(t, r);
	} finally {
		Q_.__wbindgen_free(e, _, 1);
	}
}
function xe(n, e, _) {
	const t = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), r = nt, i = B_(e, Q_.__wbindgen_malloc), o = nt, c = L_(_, Q_.__wbindgen_malloc), l = nt, a = Q_.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw q_(a[1]);
	return q_(a[0]);
}
function De(n) {
	let e, _;
	try {
		const i = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt, c = Q_.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, P_(t, r);
	} finally {
		Q_.__wbindgen_free(e, _, 1);
	}
}
function Ie(n, e, _, t, r, i) {
	const o = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), c = nt, l = V_(e, Q_.__wbindgen_malloc), a = nt, s = V_(_, Q_.__wbindgen_malloc), w = nt, g = V_(t, Q_.__wbindgen_malloc), b = nt, u = Q_.scoreEpochsTyped(o, c, l, a, s, w, g, b, r, i);
	if (u[2]) throw q_(u[1]);
	return q_(u[0]);
}
function Me(n, e, _) {
	const t = V_(n, Q_.__wbindgen_malloc), r = nt;
	var i = j_(e) ? 0 : J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt, c = j_(_) ? 0 : V_(_, Q_.__wbindgen_malloc), l = nt;
	const a = Q_.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw q_(a[2]);
	var s = I_(a[0], a[1]).slice();
	return Q_.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function We(n) {
	const e = Q_.scoreGgirHasibVariant(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function Fe(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = Q_.scoreSadeh(_, t, e);
	var i = I_(r[0], r[1]).slice();
	return Q_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Ue(n, e, _) {
	const t = J_(_, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), r = nt, i = Q_.screensRestIntervals(n, j_(e) ? 0 : S_(e), t, r);
	if (i[2]) throw q_(i[1]);
	return q_(i[0]);
}
function ze(n) {
	const e = H_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.settleManualNonwearNights(e, _);
	if (t[3]) throw q_(t[2]);
	var r = x_(t[0], t[1]).slice();
	return Q_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Pe(n) {
	const e = B_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.sha256StreamFeed(e, _);
	if (t[1]) throw q_(t[0]);
}
function Oe() {
	let n, e;
	try {
		const r = Q_.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, q_(r[2]);
		return n = _, e = t, P_(_, t);
	} finally {
		Q_.__wbindgen_free(n, e, 1);
	}
}
function Te() {
	Q_.sha256StreamStart();
}
function Ne(n, e) {
	const _ = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), t = nt, r = Q_.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = P_(r[0], r[1]).slice(), Q_.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function Ge(n, e, _, t, r) {
	const i = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt, c = V_(e, Q_.__wbindgen_malloc), l = nt, a = L_(_, Q_.__wbindgen_malloc), s = nt, w = V_(t, Q_.__wbindgen_malloc), g = nt, b = L_(r, Q_.__wbindgen_malloc), u = nt, d = Q_.sleepRegularityIndex(i, o, c, l, a, s, w, g, b, u);
	if (d[3]) throw q_(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function Ee(n, e) {
	const _ = Q_.sleepWakeScores(n, j_(e) ? 0 : S_(e));
	if (_[2]) throw q_(_[1]);
	return q_(_[0]);
}
function je(n) {
	const e = H_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.sourceLabelsWallClockMs(e, _);
	var r = C_(t[0], t[1]).slice();
	return Q_.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function Le(n, e, _) {
	const t = V_(n, Q_.__wbindgen_malloc), r = nt, i = H_(e, Q_.__wbindgen_malloc), o = nt, c = V_(_, Q_.__wbindgen_malloc), l = nt, a = Q_.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw q_(a[2]);
	let s;
	return 0 !== a[0] && (s = C_(a[0], a[1]).slice(), Q_.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function Be(n) {
	return Q_.startThreadPool(n);
}
function Ve(n, e, _, t) {
	const r = V_(n, Q_.__wbindgen_malloc), i = nt, o = B_(e, Q_.__wbindgen_malloc), c = nt, l = V_(_, Q_.__wbindgen_malloc), a = nt, s = V_(t, Q_.__wbindgen_malloc), w = nt, g = Q_.statesInPeriods(r, i, o, c, l, a, s, w);
	var b = I_(g[0], g[1]).slice();
	return Q_.__wbindgen_free(g[0], 1 * g[1], 1), b;
}
function He(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = H_(e, Q_.__wbindgen_malloc), i = nt, o = Q_.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw q_(o[2]);
	var c = C_(o[0], o[1]).slice();
	return Q_.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Je(n) {
	const e = B_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.streamParseFeed(e, _);
	if (t[2]) throw q_(t[1]);
	return t[0] >>> 0;
}
function qe() {
	const n = Q_.streamParseFinishChunk();
	if (n[2]) throw q_(n[1]);
	return _.__wrap(n[0]);
}
function Xe(n) {
	const e = Q_.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw q_(e[1]);
	return _.__wrap(e[0]);
}
function $e(n, e, _) {
	var t = j_(_) ? 0 : J_(_, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), r = nt;
	const i = Q_.streamParseStart(n, e, t, r);
	if (i[1]) throw q_(i[0]);
}
function Ze(n, e, _, t, r) {
	var i = j_(t) ? 0 : J_(t, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), o = nt;
	const c = Q_.streamParseStartWithEpoch(n, e, _, i, o, !j_(r), j_(r) ? 0 : r);
	if (c[1]) throw q_(c[0]);
}
function Ye(n, e) {
	const _ = B_(n, Q_.__wbindgen_malloc), t = nt, r = Q_.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw q_(r[1]);
	return q_(r[0]);
}
function Ke(n) {
	const e = Q_.summarizeExportGroups(n);
	if (e[3]) throw q_(e[2]);
	var _ = x_(e[0], e[1]).slice();
	return Q_.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function Qe(n) {
	const e = Q_.summarizePhysicalActivityDays(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function n_(n) {
	const e = Q_.summarizePhysicalActivityTrace(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function e_() {
	return 0 !== Q_.threadPoolReady();
}
function __(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = Q_.thresholdProbabilities(_, t, e);
	var i = I_(r[0], r[1]).slice();
	return Q_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function t_(n) {
	const e = H_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.timeSemantics(e, _);
	if (t[3]) throw q_(t[2]);
	var r = x_(t[0], t[1]).slice();
	return Q_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function r_(n, e, _) {
	const t = V_(n, Q_.__wbindgen_malloc), r = nt, i = Q_.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw q_(i[2]);
	var o = x_(i[0], i[1]).slice();
	return Q_.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function i_(n, e, _) {
	const t = Q_.uniformTimestamps(n, e, _);
	var r = C_(t[0], t[1]).slice();
	return Q_.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function o_(n) {
	const e = V_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.utcDayIndex(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function c_(n) {
	const e = B_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function l_(n, e) {
	const _ = V_(n, Q_.__wbindgen_malloc), t = nt, r = Q_.validWearDays(_, t, j_(e) ? 0 : S_(e));
	if (r[3]) throw q_(r[2]);
	var i = I_(r[0], r[1]).slice();
	return Q_.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function a_(n, e, _) {
	const t = V_(n, Q_.__wbindgen_malloc), r = nt, i = Q_.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw q_(i[1]);
	return q_(i[0]);
}
function s_(n) {
	const e = V_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.wallClockLabels(e, _);
	var r = x_(t[0], t[1]).slice();
	return Q_.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function w_(n, e, _) {
	const t = B_(n, Q_.__wbindgen_malloc), r = nt, i = H_(_, Q_.__wbindgen_malloc), o = nt, c = Q_.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw q_(c[2]);
	var l = I_(c[0], c[1]).slice();
	return Q_.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var g_ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, k_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, k_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Q_.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		Q_.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return Q_.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return Q_.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return Q_.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function b_(n) {
	Q_.wbg_rayon_start_worker(n);
}
function u_(n, e) {
	const _ = J_(n, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), t = nt;
	var r = j_(e) ? 0 : J_(e, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), i = nt;
	const o = Q_.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function d_(n) {
	const e = H_(n, Q_.__wbindgen_malloc), _ = nt, t = Q_.weekendDates(e, _);
	var r = I_(t[0], t[1]).slice();
	return Q_.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function f_(n, e, _, t) {
	const r = V_(n, Q_.__wbindgen_malloc), i = nt, o = Q_.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function m_(n, e, _, t, r) {
	const i = V_(n, Q_.__wbindgen_malloc), o = nt, c = V_(e, Q_.__wbindgen_malloc), l = nt, a = V_(_, Q_.__wbindgen_malloc), s = nt, w = Q_.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw q_(w[1]);
	return q_(w[0]);
}
function h_(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(P_(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = J_(String(e), Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), t = nt;
				W_().setInt32(n + 4, t, !0), W_().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				W_().setBigInt64(n + 8, j_(_) ? BigInt(0) : _, !0), W_().setInt32(n + 0, !j_(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return j_(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = J_(R_(e), Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), t = nt;
				W_().setInt32(n + 4, t, !0), W_().setInt32(n + 0, _, !0);
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
			__wbg___wbindgen_memory_dfa12096f400c9bd: function() {
				return Q_.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return K_;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const _ = "number" == typeof e ? e : void 0;
				W_().setFloat64(n + 8, j_(_) ? 0 : _, !0), W_().setInt32(n + 0, !j_(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = j_(_) ? 0 : J_(_, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), r = nt;
				W_().setInt32(n + 4, r, !0), W_().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(P_(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return E_(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return E_(function(n, e, _, t) {
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
					_ = n, t = e, console.error(P_(n, e));
				} finally {
					Q_.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return E_(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return E_(function(n, e) {
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
				return new Uint32Array(D_(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(C_(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== F_ && F_.buffer === Q_.memory.buffer || (F_ = new Float32Array(Q_.memory.buffer)), F_).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return E_(function(n) {
					return n.next();
				}, arguments);
			},
			__wbg_next_7646edaa39458ef7: function(n) {
				return n.next;
			},
			__wbg_ownKeys_0231887680f0f945: function() {
				return E_(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(I_(n, e), _);
			},
			__wbg_prototypesetcall_c5875dab42ff6b97: function(n, e, _) {
				Float64Array.prototype.set.call(C_(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return E_(function(n, e, _) {
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
				const _ = J_(e.stack, Q_.__wbindgen_malloc, Q_.__wbindgen_realloc), t = nt;
				W_().setInt32(n + 4, t, !0), W_().setInt32(n + 0, _, !0);
			},
			__wbg_startWorkers_622cedd0d351664e: function(e, _, t) {
				return async function(e, _, t) {
					if (0 === t.numThreads()) throw new Error("num_threads must be > 0.");
					const r = {
						type: "wasm_bindgen_worker_init",
						module: e,
						memory: _,
						receiver: t.receiver(),
						mainJS: t.mainJS()
					};
					await Promise.all(Array.from({ length: t.numThreads() }, async () => {
						let e = await fetch(import.meta.url).then((n) => n.blob()), _ = URL.createObjectURL(e);
						const t = new Worker(_, { type: "module" });
						return t.postMessage(r), await n(t, "wasm_bindgen_worker_ready"), URL.revokeObjectURL(_), t;
					})), t.build();
				}(e, _, g_.__wrap(t));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return j_(n) ? 0 : S_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return j_(n) ? 0 : S_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return j_(n) ? 0 : S_(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return j_(n) ? 0 : S_(n);
			},
			__wbg_then_6701bb8428537e07: function(n, e) {
				return n.then(e);
			},
			__wbg_value_ee3a06f4579184fa: function(n) {
				return n.value;
			},
			__wbindgen_cast_0000000000000001: function(n, e) {
				return function(n, e, _) {
					const t = {
						a: n,
						b: e,
						cnt: 1
					}, r = (...n) => {
						t.cnt++;
						const e = t.a;
						t.a = 0;
						try {
							return _(e, t.b, ...n);
						} finally {
							t.a = e, r._wbg_cb_unref();
						}
					};
					return r._wbg_cb_unref = () => {
						0 === --t.cnt && (Q_.__wbindgen_destroy_closure(t.a, t.b), t.a = 0, A_.unregister(t));
					}, A_.register(r, t, t), r;
				}(n, e, p_);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return I_(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return P_(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Q_.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			},
			memory: e || new WebAssembly.Memory({
				initial: 180,
				maximum: 65536,
				shared: !0
			})
		}
	};
}
function p_(n, e, _) {
	Q_.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, _);
}
Symbol.dispose && (g_.prototype[Symbol.dispose] = g_.prototype.free);
const y_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Q_.__wbg_aw5batch_free(n >>> 0, 1)), v_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Q_.__wbg_streamchunkresult_free(n >>> 0, 1)), k_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Q_.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function S_(n) {
	const e = Q_.__externref_table_alloc();
	return Q_.__wbindgen_externrefs.set(e, n), e;
}
const A_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Q_.__wbindgen_destroy_closure(n.a, n.b));
function R_(n) {
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
		e > 0 && (_ += R_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + R_(n[t]);
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
function C_(n, e) {
	return n >>>= 0, z_().subarray(n / 8, n / 8 + e);
}
function x_(n, e) {
	n >>>= 0;
	const _ = W_(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(Q_.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return Q_.__externref_drop_slice(n, e), t;
}
function D_(n, e) {
	return n >>>= 0, T_().subarray(n / 4, n / 4 + e);
}
function I_(n, e) {
	return n >>>= 0, G_().subarray(n / 1, n / 1 + e);
}
let M_ = null;
function W_() {
	return null !== M_ && M_.buffer === Q_.memory.buffer || (M_ = new DataView(Q_.memory.buffer)), M_;
}
let F_ = null, U_ = null;
function z_() {
	return null !== U_ && U_.buffer === Q_.memory.buffer || (U_ = new Float64Array(Q_.memory.buffer)), U_;
}
function P_(n, e) {
	return function(n, e) {
		return Z_ += e, Z_ >= $_ && (X_ = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), X_.decode(), Z_ = e), X_.decode(G_().slice(n, n + e));
	}(n >>>= 0, e);
}
let O_ = null;
function T_() {
	return null !== O_ && O_.buffer === Q_.memory.buffer || (O_ = new Uint32Array(Q_.memory.buffer)), O_;
}
let N_ = null;
function G_() {
	return null !== N_ && N_.buffer === Q_.memory.buffer || (N_ = new Uint8Array(Q_.memory.buffer)), N_;
}
function E_(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = S_(_);
		Q_.__wbindgen_exn_store(n);
	}
}
function j_(n) {
	return null == n;
}
function L_(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return T_().set(n, _ / 4), nt = n.length, _;
}
function B_(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return G_().set(n, _ / 1), nt = n.length, _;
}
function V_(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return z_().set(n, _ / 8), nt = n.length, _;
}
function H_(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = S_(n[t]);
		W_().setUint32(_ + 4 * t, e, !0);
	}
	return nt = n.length, _;
}
function J_(n, e, _) {
	if (void 0 === _) {
		const _ = Y_.encode(n), t = e(_.length, 1) >>> 0;
		return G_().subarray(t, t + _.length).set(_), nt = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = G_();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = G_().subarray(r + o, r + t);
		o += Y_.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return nt = o, r;
}
function q_(n) {
	const e = Q_.__wbindgen_externrefs.get(n);
	return Q_.__externref_table_dealloc(n), e;
}
let X_ = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
X_ && X_.decode();
const $_ = 2146435072;
let Z_ = 0;
const Y_ = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
Y_ && (Y_.encodeInto = function(n, e) {
	const _ = Y_.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let K_, Q_, nt = 0;
function et(n, e, _) {
	if (Q_ = n.exports, K_ = e, M_ = null, F_ = null, U_ = null, O_ = null, N_ = null, void 0 !== _ && ("number" != typeof _ || 0 === _ || _ % 65536 != 0)) throw new Error("invalid stack size");
	return Q_.__wbindgen_start(_), Q_;
}
function _t(n, e) {
	if (void 0 !== Q_) return Q_;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const t = h_(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), et(new WebAssembly.Instance(n, t), n, _);
}
async function tt(n, e) {
	if (void 0 !== Q_) return Q_;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-0qy1iJeS.wasm", "" + import.meta.url));
	const t = h_(e);
	("string" == typeof n || "function" == typeof Request && n instanceof Request || "function" == typeof URL && n instanceof URL) && (n = fetch(n));
	const { instance: r, module: i } = await async function(n, e) {
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
	}(await n, t);
	return et(r, i, _);
}
export { e as Aw5Batch, _ as StreamChunkResult, t as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actiwareWakeThreshold, o as aggregateEpochSeries, c as analysisDatesOf, l as analysisWindowBounds, a as analysisWindowSlice, s as classifyActimetricPreschoolWristRf, w as classifyActimetricPreschoolWristRfLagLead, g as clippedUnionHours, b as compareNonwearDetectorMasks, u as computeAnglez5s, d as computeCircadian, f as computeCircadianTyped, m as computeMimsUnit, h as computeMimsUnitDataframe, p as computeNightDifficulty, y as computeNightDifficultyTyped, v as computeNightSignals, k as computeNightSignalsTyped, S as computeSleepMetrics, A as configureComputeMemoryBudgetV1, R as consensusDisagreementDetail, C as consensusDisagreements, x as convertBedWakeDaysDiary, D as convertScreensRedcapDiary, I as correctGgirRecording, M as csvBufferAppend, W as csvBufferClear, F as cutpointEpochCompatibility, U as cutpointToneCodes, z as cutpointsRefusal, tt as default, P as describeColumns, O as detectDetachFromAccelerationG, T as detectDeviceFormat, N as detectGgirHasptVariant, G as detectHdcza, E as detectHourClockJumpMs, j as detectNonwear, L as detectNonwearChoi2011, B as detectNonwearChoi2011Epoch, V as detectNonwearChoi2012Epoch, H as detectNonwearUnified, J as detectNonwearUnifiedBatchTyped, q as dstPlaceholderRuns, X as effectiveOverrideCutpoints, $ as epochAgreement, Z as epochsOverlapping, Y as exportFileNightFigures, K as exportNapAggregate, Q as extractCapsense, nn as foldOntoGrid, en as foldSleepWakeVotes, _n as foldUniformOntoGrid, tn as fuseNonwearMasks, rn as generateActiwareRestIntervals, on as getComputeCapabilitiesV1, cn as ggir5sWallClockMs, ln as ggirAppConfigSummary, an as ggirConfigValues, sn as ggirDayValidFractions, wn as ggirDaysIncluded, gn as ggirDiaryLogShape, bn as ggirDstPlaceholderCuts, un as ggirIncludeDayCriterionHours, dn as ggirIndicesToWallClockMs, fn as ggirLabelsToStoredMs, mn as ggirManualNightClocks, hn as ggirMilestoneVersion, pn as ggirNonwearApproach, yn as ggirPersonSummaries, vn as ggirRerunProfiles, kn as ggirSavedNonwearWindows, Sn as ggirSleeplogStoredClocks, An as ggirSummaryDenominator, Rn as gridOffsetWithin, Cn as identifyGgirRData, xn as implausibilityReasons, _t as initSync, Dn as initThreadPool, In as installPanicHook, Mn as interRaterReliability, Wn as irregularInternalDays, Fn as lstmSpectralFeatures30s, Un as markerIndexRange, zn as markerSleepOnsetOffset, Pn as medianGapSeconds, On as midSleepClockHours, Tn as neishabouriCounts, Nn as nextDate, Gn as nightIntervalOverlap, En as nonwearContributors, jn as nonwearInSleepCounts, Ln as nonwearSleepOverlap, Bn as nonwearWeightRuns, Vn as normalizeCutpoints, Hn as parseActigraphCsvBuffered, Jn as parseAw5, qn as parseEpochSeries, Xn as parseGeneactivCsvBuffered, $n as participantValidity, Zn as physicalActivitySeriesGrid, Yn as placeMarkers, Kn as placeMarkersBatch, Qn as placeMarkersTyped, ne as placeNightsTyped, ee as placeNonwearMarkers, _e as placeNonwearMarkersTyped, te as prepareGgirRecording, re as processGt3xPart1, ie as processGt3xPart1WithEpoch, oe as processRawXyz, ce as processRawXyzImputed, le as processRawXyzImputedWithEpoch, ae as projectLabelsOntoGrid, se as rasterizePeriods, we as readGgirMeta, ge as readGgirReportCsv, be as recommended_chunk_size_mb, ue as rerunGgirResults, de as resolveTimezone, fe as restoredDstRuns, me as reviewGgirResults, he as reviewNonwearFile, pe as reviewNonwearTotals, ye as roundCountStorage, ve as runFullPipelineV1, ke as runGgirDeclaredEpochsV1, Se as runGgirPart3, Ae as scoreAllDays, Re as scoreColeKripke, Ce as scoreConsensus, xe as scoreConsensusTyped, De as scoreEpochs, Ie as scoreEpochsTyped, Me as scoreGgirHasib, We as scoreGgirHasibVariant, Fe as scoreSadeh, Ue as screensRestIntervals, ze as settleManualNonwearNights, Pe as sha256StreamFeed, Oe as sha256StreamFinish, Te as sha256StreamStart, Ne as shiftDate, Ge as sleepRegularityIndex, Ee as sleepWakeScores, je as sourceLabelsWallClockMs, Le as spliceDstPlaceholders, Be as startThreadPool, Ve as statesInPeriods, He as storedToGgirLabelsMs, Je as streamParseFeed, qe as streamParseFinishChunk, Xe as streamParseFinishChunkWithProgress, $e as streamParseStart, Ze as streamParseStartWithEpoch, Ye as summarizeActimetricPreschoolWristRfClasses, Ke as summarizeExportGroups, Qe as summarizePhysicalActivityDays, n_ as summarizePhysicalActivityTrace, e_ as threadPoolReady, __ as thresholdProbabilities, t_ as timeSemantics, r_ as timestampDiscontinuities, i_ as uniformTimestamps, o_ as utcDayIndex, c_ as validStateFraction, l_ as validWearDays, a_ as wallClockDstPlaceholders, s_ as wallClockLabels, w_ as wallMaskOntoGgirGrid, g_ as wbg_rayon_PoolBuilder, b_ as wbg_rayon_start_worker, u_ as wearSiteHasptRouting, d_ as weekendDates, f_ as windowCoverage, m_ as zeroCrossingCounts };
