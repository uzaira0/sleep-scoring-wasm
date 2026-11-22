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
		return this.__wbg_ptr = 0, k_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		et.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = X_(n, et.__wbindgen_malloc), _ = _t, t = et.aw5batch_new(e, _);
		if (t[2]) throw q_(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, k_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), r = _t;
		var i = B_(_) ? 0 : $_(_, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t;
		const c = et.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw q_(c[1]);
		return q_(c[0]);
	}
	subjects(n) {
		const e = et.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw q_(e[2]);
		var _ = I_(e[0], e[1]).slice();
		return et.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, S_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, S_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		et.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = et.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = et.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = et.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = et.streamchunkresult_axisX(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = et.streamchunkresult_axisY(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = et.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = et.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw q_(n[1]);
		return q_(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== et.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = et.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = O_(n[0], n[1]).slice(), et.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get enmo5s() {
		const n = et.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = et.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = et.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = W_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = et.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = W_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = et.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = D_(e[0], e[1]).slice();
		return et.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return et.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = et.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = et.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== et.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = et.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = O_(n[0], n[1]).slice(), et.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = et.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = et.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = et.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== et.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return et.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return et.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return et.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = et.streamchunkresult_temperature(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = et.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = et.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = et.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = et.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = et.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = et.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = D_(n[0], n[1]).slice();
		return et.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n) {
	const e = et.actiwareIntervalStatistics(n);
	if (e[3]) throw q_(e[2]);
	var _ = I_(e[0], e[1]).slice();
	return et.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function r(n) {
	const e = X_(n, et.__wbindgen_malloc), _ = _t, t = et.actiwareNights(e, _);
	if (t[3]) throw q_(t[2]);
	var r = I_(t[0], t[1]).slice();
	return et.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function i(n, e, _) {
	const t = X_(e, et.__wbindgen_malloc), r = _t, i = et.actiwareSleepIntervals(n, t, r, B_(_) ? 0 : R_(_));
	if (i[3]) throw q_(i[2]);
	var o = I_(i[0], i[1]).slice();
	return et.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function o(n, e) {
	const _ = et.actiwareWakeThreshold(n, B_(e) ? 0 : R_(e));
	if (_[3]) throw q_(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function c(n) {
	const e = et.aggregateEpochSeries(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function l(n) {
	const e = J_(n, et.__wbindgen_malloc), _ = _t, t = et.analysisDatesOf(e, _);
	var r = I_(t[0], t[1]).slice();
	return et.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function a(n, e) {
	const _ = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), t = _t, r = et.analysisWindowBounds(_, t, !B_(e), B_(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = D_(r[0], r[1]).slice(), et.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function s(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), i = _t, o = et.analysisWindowSlice(_, t, r, i);
	var c = M_(o[0], o[1]).slice();
	return et.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function w(n, e, _, t) {
	const r = J_(n, et.__wbindgen_malloc), i = _t, o = J_(e, et.__wbindgen_malloc), c = _t, l = J_(_, et.__wbindgen_malloc), a = _t, s = et.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw q_(s[2]);
	var w = W_(s[0], s[1]).slice();
	return et.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function g(n, e, _, t) {
	const r = J_(n, et.__wbindgen_malloc), i = _t, o = J_(e, et.__wbindgen_malloc), c = _t, l = J_(_, et.__wbindgen_malloc), a = _t, s = et.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw q_(s[2]);
	var w = W_(s[0], s[1]).slice();
	return et.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function b(n, e, _, t) {
	const r = J_(n, et.__wbindgen_malloc), i = _t, o = J_(e, et.__wbindgen_malloc), c = _t;
	return et.clippedUnionHours(r, i, o, c, _, t);
}
function u(n, e) {
	const _ = et.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw q_(_[1]);
	return q_(_[0]);
}
function d(n, e, _, t) {
	const r = J_(n, et.__wbindgen_malloc), i = _t, o = J_(e, et.__wbindgen_malloc), c = _t, l = J_(_, et.__wbindgen_malloc), a = _t, s = et.computeAnglez5s(r, i, o, c, l, a, t);
	var w = D_(s[0], s[1]).slice();
	return et.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function f(n) {
	let e, _;
	try {
		const i = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t, c = et.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		et.__wbindgen_free(e, _, 1);
	}
}
function m(n, e, _, t, r, i, o) {
	const c = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), l = _t, a = J_(e, et.__wbindgen_malloc), s = _t, w = V_(_, et.__wbindgen_malloc), g = _t, b = J_(t, et.__wbindgen_malloc), u = _t, d = V_(r, et.__wbindgen_malloc), f = _t, m = H_(i, et.__wbindgen_malloc), h = _t, p = V_(o, et.__wbindgen_malloc), y = _t, v = et.computeCircadianTyped(c, l, a, s, w, g, b, u, d, f, m, h, p, y);
	if (v[2]) throw q_(v[1]);
	return q_(v[0]);
}
function h(n, e, _, t, r) {
	const i = J_(n, et.__wbindgen_malloc), o = _t, c = J_(e, et.__wbindgen_malloc), l = _t, a = J_(_, et.__wbindgen_malloc), s = _t, w = et.computeMimsUnit(i, o, c, l, a, s, t, B_(r) ? 0 : R_(r));
	if (w[2]) throw q_(w[1]);
	return q_(w[0]);
}
function p(n, e, _, t, r) {
	const i = J_(n, et.__wbindgen_malloc), o = _t, c = J_(e, et.__wbindgen_malloc), l = _t, a = J_(_, et.__wbindgen_malloc), s = _t, w = J_(t, et.__wbindgen_malloc), g = _t, b = et.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, B_(r) ? 0 : R_(r));
	if (b[2]) throw q_(b[1]);
	return q_(b[0]);
}
function y(n) {
	let e, _;
	try {
		const i = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t, c = et.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		et.__wbindgen_free(e, _, 1);
	}
}
function v(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h) {
	const p = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), y = _t, v = J_(e, et.__wbindgen_malloc), k = _t, S = V_(_, et.__wbindgen_malloc), A = _t, R = J_(t, et.__wbindgen_malloc), C = _t, x = V_(r, et.__wbindgen_malloc), D = _t, I = H_(i, et.__wbindgen_malloc), M = _t, W = V_(o, et.__wbindgen_malloc), F = _t, U = H_(c, et.__wbindgen_malloc), z = _t, P = V_(l, et.__wbindgen_malloc), T = _t, O = J_(a, et.__wbindgen_malloc), N = _t, G = V_(s, et.__wbindgen_malloc), E = _t, j = J_(w, et.__wbindgen_malloc), L = _t, B = V_(g, et.__wbindgen_malloc), V = _t, H = J_(b, et.__wbindgen_malloc), J = _t, X = V_(u, et.__wbindgen_malloc), $ = _t, q = J_(d, et.__wbindgen_malloc), Z = _t, Y = V_(f, et.__wbindgen_malloc), K = _t, Q = H_(m, et.__wbindgen_malloc), nn = _t, en = V_(h, et.__wbindgen_malloc), _n = _t, tn = et.computeNightDifficultyTyped(p, y, v, k, S, A, R, C, x, D, I, M, W, F, U, z, P, T, O, N, G, E, j, L, B, V, H, J, X, $, q, Z, Y, K, Q, nn, en, _n);
	if (tn[2]) throw q_(tn[1]);
	return q_(tn[0]);
}
function k(n) {
	let e, _;
	try {
		const i = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t, c = et.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		et.__wbindgen_free(e, _, 1);
	}
}
function S(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h) {
	const p = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), y = _t, v = J_(e, et.__wbindgen_malloc), k = _t, S = V_(_, et.__wbindgen_malloc), A = _t, R = J_(t, et.__wbindgen_malloc), C = _t, x = V_(r, et.__wbindgen_malloc), D = _t, I = H_(i, et.__wbindgen_malloc), M = _t, W = V_(o, et.__wbindgen_malloc), F = _t, U = H_(c, et.__wbindgen_malloc), z = _t, P = V_(l, et.__wbindgen_malloc), T = _t, O = J_(a, et.__wbindgen_malloc), N = _t, G = V_(s, et.__wbindgen_malloc), E = _t, j = J_(w, et.__wbindgen_malloc), L = _t, B = V_(g, et.__wbindgen_malloc), V = _t, H = J_(b, et.__wbindgen_malloc), J = _t, X = V_(u, et.__wbindgen_malloc), $ = _t, q = J_(d, et.__wbindgen_malloc), Z = _t, Y = V_(f, et.__wbindgen_malloc), K = _t, Q = H_(m, et.__wbindgen_malloc), nn = _t, en = V_(h, et.__wbindgen_malloc), _n = _t, tn = et.computeNightSignalsTyped(p, y, v, k, S, A, R, C, x, D, I, M, W, F, U, z, P, T, O, N, G, E, j, L, B, V, H, J, X, $, q, Z, Y, K, Q, nn, en, _n);
	if (tn[2]) throw q_(tn[1]);
	return q_(tn[0]);
}
function A(n, e, _) {
	const t = H_(n, et.__wbindgen_malloc), r = _t, i = J_(e, et.__wbindgen_malloc), o = _t, c = et.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw q_(c[1]);
	return q_(c[0]);
}
function R(n) {
	const e = et.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function C(n) {
	const e = X_(n, et.__wbindgen_malloc), _ = _t, t = et.consensusDisagreementDetail(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function x(n) {
	const e = et.consensusDisagreements(n);
	if (e[3]) throw q_(e[2]);
	var _ = I_(e[0], e[1]).slice();
	return et.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function D(n) {
	const e = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), _ = _t, t = et.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function I(n) {
	const e = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), _ = _t, t = et.convertScreensRedcapDiary(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function M(n, e) {
	const _ = X_(e, et.__wbindgen_malloc), t = _t, r = et.correctGgirRecording(n, _, t);
	if (r[2]) throw q_(r[1]);
	return q_(r[0]);
}
function W(n) {
	const e = H_(n, et.__wbindgen_malloc), _ = _t;
	et.csvBufferAppend(e, _);
}
function F(n) {
	et.csvBufferClear(n);
}
function U(n, e) {
	const _ = et.cutpointEpochCompatibility(n, e);
	if (_[2]) throw q_(_[1]);
	return q_(_[0]);
}
function z(n, e, _, t, r) {
	const i = J_(n, et.__wbindgen_malloc), o = _t, c = et.cutpointToneCodes(i, o, e, _, t, r);
	var l = W_(c[0], c[1]).slice();
	return et.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function P(n, e, _, t) {
	const r = et.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = O_(r[0], r[1]).slice(), et.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function T(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = V_(e, et.__wbindgen_malloc), i = _t, o = et.describeColumns(_, t, r, i);
	if (o[3]) throw q_(o[2]);
	var c = I_(o[0], o[1]).slice();
	return et.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function O(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = J_(e, et.__wbindgen_malloc), i = _t, o = et.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw q_(o[2]);
	var c = W_(o[0], o[1]).slice();
	return et.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function N(n, e) {
	let _, t;
	try {
		const r = H_(n, et.__wbindgen_malloc), i = _t, o = $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), c = _t, l = et.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], O_(l[0], l[1]);
	} finally {
		et.__wbindgen_free(_, t, 1);
	}
}
function G(n) {
	const e = et.detectGgirHasptVariant(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function E(n, e, _, t, r) {
	const i = J_(n, et.__wbindgen_malloc), o = _t;
	var c = B_(e) ? 0 : $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), l = _t, a = B_(_) ? 0 : J_(_, et.__wbindgen_malloc), s = _t, w = B_(t) ? 0 : J_(t, et.__wbindgen_malloc), g = _t, b = B_(r) ? 0 : $_(r, et.__wbindgen_malloc, et.__wbindgen_realloc), u = _t;
	const d = et.detectHdcza(i, o, c, l, a, s, w, g, b, u);
	if (d[2]) throw q_(d[1]);
	return q_(d[0]);
}
function j(n) {
	const e = J_(n, et.__wbindgen_malloc), _ = _t;
	return 0 !== et.detectHourClockJumpMs(e, _);
}
function L(n) {
	const e = J_(n, et.__wbindgen_malloc), _ = _t, t = et.detectNonwear(e, _);
	var r = W_(t[0], t[1]).slice();
	return et.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function B(n) {
	const e = J_(n, et.__wbindgen_malloc), _ = _t, t = et.detectNonwearChoi2011(e, _);
	var r = W_(t[0], t[1]).slice();
	return et.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function V(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = et.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw q_(r[2]);
	var i = W_(r[0], r[1]).slice();
	return et.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function H(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = et.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw q_(r[2]);
	var i = W_(r[0], r[1]).slice();
	return et.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function J(n) {
	let e, _;
	try {
		const i = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t, c = et.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		et.__wbindgen_free(e, _, 1);
	}
}
function X(n, e, _, t, r, i, o) {
	const c = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), l = _t, a = $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), s = _t, w = J_(_, et.__wbindgen_malloc), g = _t, b = J_(t, et.__wbindgen_malloc), u = _t, d = J_(r, et.__wbindgen_malloc), f = _t, m = et.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, b, u, d, f, i, o);
	if (m[2]) throw q_(m[1]);
	return q_(m[0]);
}
function $(n, e, _) {
	const t = X_(_, et.__wbindgen_malloc), r = _t, i = et.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw q_(i[2]);
	var o = I_(i[0], i[1]).slice();
	return et.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function q(n, e, _, t) {
	const r = et.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = D_(r[0], r[1]).slice(), et.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function Z(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = J_(e, et.__wbindgen_malloc), i = _t, o = et.epochAgreement(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function Y(n, e, _, t) {
	const r = J_(n, et.__wbindgen_malloc), i = _t, o = et.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = M_(o[0], o[1]).slice(), et.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function K(n, e, _) {
	const t = X_(n, et.__wbindgen_malloc), r = _t, i = X_(e, et.__wbindgen_malloc), o = _t, c = X_(_, et.__wbindgen_malloc), l = _t, a = et.exportFileNightFigures(t, r, i, o, c, l);
	if (a[3]) throw q_(a[2]);
	var s = I_(a[0], a[1]).slice();
	return et.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function Q(n) {
	const e = X_(n, et.__wbindgen_malloc), _ = _t, t = et.exportNapAggregate(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function nn(n) {
	const e = H_(n, et.__wbindgen_malloc), _ = _t, t = et.extractCapsense(e, _);
	if (t[3]) throw q_(t[2]);
	var r = I_(t[0], t[1]).slice();
	return et.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function en(n, e, _, t, r) {
	const i = J_(n, et.__wbindgen_malloc), o = _t, c = J_(e, et.__wbindgen_malloc), l = _t, a = J_(_, et.__wbindgen_malloc), s = _t, w = $_(r, et.__wbindgen_malloc, et.__wbindgen_realloc), g = _t, b = et.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (b[3]) throw q_(b[2]);
	var u = D_(b[0], b[1]).slice();
	return et.__wbindgen_free(b[0], 8 * b[1], 8), u;
}
function _n(n, e, _, t, r) {
	const i = H_(_, et.__wbindgen_malloc), o = _t, c = J_(t, et.__wbindgen_malloc), l = _t, a = et.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw q_(a[1]);
	return q_(a[0]);
}
function tn(n, e, _, t, r, i) {
	const o = J_(_, et.__wbindgen_malloc), c = _t, l = J_(t, et.__wbindgen_malloc), a = _t, s = $_(i, et.__wbindgen_malloc, et.__wbindgen_realloc), w = _t, g = et.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw q_(g[2]);
	var b = D_(g[0], g[1]).slice();
	return et.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function rn(n) {
	const e = et.fuseNonwearMasks(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function on(n, e, _) {
	var t = B_(_) ? 0 : $_(_, et.__wbindgen_malloc, et.__wbindgen_realloc), r = _t;
	const i = et.generateActiwareRestIntervals(n, B_(e) ? 0 : R_(e), t, r);
	if (i[3]) throw q_(i[2]);
	var o = I_(i[0], i[1]).slice();
	return et.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function cn() {
	const n = et.getComputeCapabilitiesV1();
	if (n[2]) throw q_(n[1]);
	return q_(n[0]);
}
function ln(n, e, _) {
	const t = X_(_, et.__wbindgen_malloc), r = _t, i = et.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw q_(i[2]);
	var o = D_(i[0], i[1]).slice();
	return et.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function an(n, e) {
	var _ = B_(n) ? 0 : $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), t = _t;
	const r = et.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw q_(r[1]);
	return q_(r[0]);
}
function sn(n) {
	const e = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), _ = _t, t = et.ggirConfigValues(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function wn(n) {
	const e = et.ggirDayRowsTouchedByEdits(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function gn(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = J_(e, et.__wbindgen_malloc), i = _t, o = et.ggirDayValidFractions(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function bn(n, e, _) {
	const t = J_(n, et.__wbindgen_malloc), r = _t;
	var i = B_(e) ? 0 : J_(e, et.__wbindgen_malloc), o = _t, c = B_(_) ? 0 : $_(_, et.__wbindgen_malloc, et.__wbindgen_realloc), l = _t;
	const a = et.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw q_(a[2]);
	var s = W_(a[0], a[1]).slice();
	return et.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function un(n, e) {
	const _ = H_(n, et.__wbindgen_malloc), t = _t;
	var r = B_(e) ? 0 : $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), i = _t;
	const o = et.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function dn(n, e, _) {
	const t = X_(e, et.__wbindgen_malloc), r = _t;
	var i = B_(_) ? 0 : J_(_, et.__wbindgen_malloc), o = _t;
	const c = et.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw q_(c[2]);
	var l = I_(c[0], c[1]).slice();
	return et.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function fn(n) {
	var e = B_(n) ? 0 : $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), _ = _t;
	const t = et.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw q_(t[1]);
	return t[0];
}
function mn(n, e, _, t) {
	const r = V_(n, et.__wbindgen_malloc), i = _t, o = X_(_, et.__wbindgen_malloc), c = _t;
	var l = B_(t) ? 0 : J_(t, et.__wbindgen_malloc), a = _t;
	const s = et.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw q_(s[2]);
	var w = D_(s[0], s[1]).slice();
	return et.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function hn(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = X_(e, et.__wbindgen_malloc), i = _t, o = et.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw q_(o[2]);
	var c = D_(o[0], o[1]).slice();
	return et.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function pn(n, e, _, t) {
	const r = X_(n, et.__wbindgen_malloc), i = _t, o = J_(e, et.__wbindgen_malloc), c = _t, l = J_(_, et.__wbindgen_malloc), a = _t, s = J_(t, et.__wbindgen_malloc), w = _t, g = et.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw q_(g[1]);
	return q_(g[0]);
}
function yn(n) {
	const e = H_(n, et.__wbindgen_malloc), _ = _t, t = et.ggirMilestoneVersion(e, _);
	if (t[3]) throw q_(t[2]);
	let r;
	return 0 !== t[0] && (r = O_(t[0], t[1]).slice(), et.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function vn(n) {
	const e = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), _ = _t, t = et.ggirNonwearApproach(e, _);
	if (t[3]) throw q_(t[2]);
	let r;
	return 0 !== t[0] && (r = O_(t[0], t[1]).slice(), et.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function kn(n) {
	const e = et.ggirPersonSummaries(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function Sn() {
	const n = et.ggirRerunProfiles();
	if (n[3]) throw q_(n[2]);
	var e = I_(n[0], n[1]).slice();
	return et.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function An(n) {
	const e = H_(n, et.__wbindgen_malloc), _ = _t, t = et.ggirSavedNonwearWindows(e, _);
	if (t[2]) throw q_(t[1]);
	return t[0] >>> 0;
}
function Rn(n, e, _, t) {
	const r = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), i = _t, o = $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), c = _t, l = $_(_, et.__wbindgen_malloc, et.__wbindgen_realloc), a = _t, s = X_(t, et.__wbindgen_malloc), w = _t, g = et.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw q_(g[2]);
	let b;
	return 0 !== g[0] && (b = I_(g[0], g[1]).slice(), et.__wbindgen_free(g[0], 4 * g[1], 4)), b;
}
function Cn(n, e) {
	const _ = et.ggirSummaryDenominator(n, e);
	if (_[2]) throw q_(_[1]);
	return q_(_[0]);
}
function xn(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = J_(e, et.__wbindgen_malloc), i = _t, o = et.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Dn(n) {
	let e, _;
	try {
		const i = H_(n, et.__wbindgen_malloc), o = _t, c = et.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		et.__wbindgen_free(e, _, 1);
	}
}
function In(n, e, _, t) {
	const r = J_(n, et.__wbindgen_malloc), i = _t, o = J_(e, et.__wbindgen_malloc), c = _t, l = J_(_, et.__wbindgen_malloc), a = _t, s = J_(t, et.__wbindgen_malloc), w = _t, g = et.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw q_(g[1]);
	return q_(g[0]);
}
function Mn(n) {
	return et.initThreadPool(n);
}
function Wn() {
	et.installPanicHook();
}
function Fn(n) {
	const e = X_(n, et.__wbindgen_malloc), _ = _t, t = et.interRaterReliability(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function Un(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = et.irregularInternalDays(_, t, e);
	var i = I_(r[0], r[1]).slice();
	return et.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function zn(n, e, _, t) {
	const r = J_(n, et.__wbindgen_malloc), i = _t, o = J_(e, et.__wbindgen_malloc), c = _t, l = J_(_, et.__wbindgen_malloc), a = _t, s = et.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw q_(s[1]);
	return q_(s[0]);
}
function Pn(n, e, _) {
	const t = J_(n, et.__wbindgen_malloc), r = _t, i = et.markerIndexRange(t, r, e, _);
	var o = M_(i[0], i[1]).slice();
	return et.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Tn(n, e, _, t, r, i, o) {
	const c = J_(n, et.__wbindgen_malloc), l = _t, a = J_(e, et.__wbindgen_malloc), s = _t, w = et.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw q_(w[1]);
	return q_(w[0]);
}
function On(n) {
	const e = J_(n, et.__wbindgen_malloc), _ = _t, t = et.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Nn(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = J_(e, et.__wbindgen_malloc), i = _t, o = et.midSleepClockHours(_, t, r, i);
	var c = D_(o[0], o[1]).slice();
	return et.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Gn(n, e, _, t, r) {
	const i = J_(n, et.__wbindgen_malloc), o = _t, c = J_(e, et.__wbindgen_malloc), l = _t, a = J_(_, et.__wbindgen_malloc), s = _t, w = et.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw q_(w[1]);
	return q_(w[0]);
}
function En(n) {
	const e = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), _ = _t, t = et.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = O_(t[0], t[1]).slice(), et.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function jn(n, e, _, t, r) {
	const i = J_(_, et.__wbindgen_malloc), o = _t, c = J_(t, et.__wbindgen_malloc), l = _t, a = J_(r, et.__wbindgen_malloc), s = _t, w = et.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw q_(w[1]);
	return q_(w[0]);
}
function Ln(n, e, _, t) {
	let r, i;
	try {
		const l = V_(n, et.__wbindgen_malloc), a = _t, s = $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), w = _t, g = et.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, q_(g[2]);
		return r = o, i = c, O_(o, c);
	} finally {
		et.__wbindgen_free(r, i, 1);
	}
}
function Bn(n) {
	const e = J_(n, et.__wbindgen_malloc), _ = _t, t = et.nonwearInSleepCounts(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function Vn(n) {
	const e = et.nonwearSleepOverlap(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function Hn(n, e, _) {
	const t = J_(n, et.__wbindgen_malloc), r = _t, i = J_(e, et.__wbindgen_malloc), o = _t, c = et.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw q_(c[1]);
	return q_(c[0]);
}
function Jn(n, e, _, t, r, i) {
	const o = $_(r, et.__wbindgen_malloc, et.__wbindgen_realloc), c = _t, l = et.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw q_(l[2]);
	var a = D_(l[0], l[1]).slice();
	return et.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function Xn(n) {
	const e = et.parseActigraphCsvBuffered(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function $n(n, e, _, t) {
	const r = H_(n, et.__wbindgen_malloc), i = _t;
	var o = B_(e) ? 0 : $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), c = _t, l = B_(_) ? 0 : X_(_, et.__wbindgen_malloc), a = _t, s = B_(t) ? 0 : $_(t, et.__wbindgen_malloc, et.__wbindgen_realloc), w = _t;
	const g = et.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw q_(g[1]);
	return q_(g[0]);
}
function qn(n, e) {
	const _ = H_(n, et.__wbindgen_malloc), t = _t, r = $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), i = _t, o = et.parseEpochSeries(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function Zn() {
	const n = et.parseGeneactivCsvBuffered();
	if (n[2]) throw q_(n[1]);
	return q_(n[0]);
}
function Yn(n, e, _, t) {
	const r = J_(n, et.__wbindgen_malloc), i = _t, o = H_(e, et.__wbindgen_malloc), c = _t, l = H_(_, et.__wbindgen_malloc), a = _t, s = et.participantValidity(r, i, o, c, l, a, B_(t) ? 0 : R_(t));
	if (s[2]) throw q_(s[1]);
	return q_(s[0]);
}
function Kn(n, e, _, t, r) {
	const i = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t, c = J_(e, et.__wbindgen_malloc), l = _t;
	var a = B_(_) ? 0 : J_(_, et.__wbindgen_malloc), s = _t;
	const w = et.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw q_(w[1]);
	return q_(w[0]);
}
function Qn(n) {
	let e, _;
	try {
		const i = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t, c = et.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		et.__wbindgen_free(e, _, 1);
	}
}
function ne(n, e, _, t, r, i) {
	const o = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), c = _t, l = J_(e, et.__wbindgen_malloc), a = _t, s = J_(_, et.__wbindgen_malloc), w = _t, g = H_(t, et.__wbindgen_malloc), b = _t, u = H_(r, et.__wbindgen_malloc), d = _t, f = $_(i, et.__wbindgen_malloc, et.__wbindgen_realloc), m = _t, h = et.placeMarkersBatch(o, c, l, a, s, w, g, b, u, d, f, m);
	if (h[2]) throw q_(h[1]);
	return q_(h[0]);
}
function ee(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h, p) {
	const y = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), v = _t, k = J_(e, et.__wbindgen_malloc), S = _t, A = V_(_, et.__wbindgen_malloc), R = _t, C = J_(t, et.__wbindgen_malloc), x = _t, D = V_(r, et.__wbindgen_malloc), I = _t, M = H_(i, et.__wbindgen_malloc), W = _t, F = V_(o, et.__wbindgen_malloc), U = _t, z = H_(c, et.__wbindgen_malloc), P = _t, T = V_(l, et.__wbindgen_malloc), O = _t, N = J_(a, et.__wbindgen_malloc), G = _t, E = V_(s, et.__wbindgen_malloc), j = _t, L = J_(w, et.__wbindgen_malloc), B = _t, V = V_(g, et.__wbindgen_malloc), H = _t, J = J_(b, et.__wbindgen_malloc), X = _t, $ = V_(u, et.__wbindgen_malloc), q = _t, Z = J_(d, et.__wbindgen_malloc), Y = _t, K = V_(f, et.__wbindgen_malloc), Q = _t, nn = H_(m, et.__wbindgen_malloc), en = _t, _n = V_(h, et.__wbindgen_malloc), tn = _t;
	var rn = B_(p) ? 0 : $_(p, et.__wbindgen_malloc, et.__wbindgen_realloc), on = _t;
	const cn = et.placeMarkersTyped(y, v, k, S, A, R, C, x, D, I, M, W, F, U, z, P, T, O, N, G, E, j, L, B, V, H, J, X, $, q, Z, Y, K, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw q_(cn[1]);
	return q_(cn[0]);
}
function _e(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h, p) {
	const y = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), v = _t, k = J_(e, et.__wbindgen_malloc), S = _t, A = V_(_, et.__wbindgen_malloc), R = _t, C = J_(t, et.__wbindgen_malloc), x = _t, D = V_(r, et.__wbindgen_malloc), I = _t, M = H_(i, et.__wbindgen_malloc), W = _t, F = V_(o, et.__wbindgen_malloc), U = _t, z = H_(c, et.__wbindgen_malloc), P = _t, T = V_(l, et.__wbindgen_malloc), O = _t, N = J_(a, et.__wbindgen_malloc), G = _t, E = V_(s, et.__wbindgen_malloc), j = _t, L = J_(w, et.__wbindgen_malloc), B = _t, V = V_(g, et.__wbindgen_malloc), H = _t, J = J_(b, et.__wbindgen_malloc), X = _t, $ = V_(u, et.__wbindgen_malloc), q = _t, Z = J_(d, et.__wbindgen_malloc), Y = _t, K = V_(f, et.__wbindgen_malloc), Q = _t, nn = H_(m, et.__wbindgen_malloc), en = _t, _n = V_(h, et.__wbindgen_malloc), tn = _t, rn = et.placeNightsTyped(y, v, k, S, A, R, C, x, D, I, M, W, F, U, z, P, T, O, N, G, E, j, L, B, V, H, J, X, $, q, Z, Y, K, Q, nn, en, _n, tn, p);
	if (rn[2]) throw q_(rn[1]);
	return q_(rn[0]);
}
function te(n) {
	let e, _;
	try {
		const i = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t, c = et.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		et.__wbindgen_free(e, _, 1);
	}
}
function re(n, e, _, t) {
	const r = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), i = _t, o = J_(e, et.__wbindgen_malloc), c = _t, l = J_(_, et.__wbindgen_malloc), a = _t, s = H_(t, et.__wbindgen_malloc), w = _t, g = et.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw q_(g[1]);
	return q_(g[0]);
}
function ie(n, e, _, t, r, i, o, c, l, a, s) {
	const w = H_(n, et.__wbindgen_malloc), g = _t, b = $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), u = _t;
	var d = B_(_) ? 0 : H_(_, et.__wbindgen_malloc), f = _t, m = B_(t) ? 0 : H_(t, et.__wbindgen_malloc), h = _t, p = B_(r) ? 0 : H_(r, et.__wbindgen_malloc), y = _t, v = B_(i) ? 0 : H_(i, et.__wbindgen_malloc), k = _t, S = B_(o) ? 0 : H_(o, et.__wbindgen_malloc), A = _t, R = B_(c) ? 0 : $_(c, et.__wbindgen_malloc, et.__wbindgen_realloc), C = _t, x = B_(l) ? 0 : $_(l, et.__wbindgen_malloc, et.__wbindgen_realloc), D = _t, I = B_(a) ? 0 : $_(a, et.__wbindgen_malloc, et.__wbindgen_realloc), M = _t, W = B_(s) ? 0 : $_(s, et.__wbindgen_malloc, et.__wbindgen_realloc), F = _t;
	const U = et.prepareGgirRecording(w, g, b, u, d, f, m, h, p, y, v, k, S, A, R, C, x, D, I, M, W, F);
	if (U[2]) throw q_(U[1]);
	return q_(U[0]);
}
function oe(n, e) {
	const _ = H_(n, et.__wbindgen_malloc), t = _t;
	var r = B_(e) ? 0 : $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), i = _t;
	const o = et.processGt3xPart1(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function ce(n, e, _) {
	const t = H_(n, et.__wbindgen_malloc), r = _t;
	var i = B_(_) ? 0 : $_(_, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t;
	const c = et.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw q_(c[1]);
	return q_(c[0]);
}
function le(n, e, _, t, r, i, o) {
	const c = J_(n, et.__wbindgen_malloc), l = _t, a = J_(e, et.__wbindgen_malloc), s = _t, w = J_(_, et.__wbindgen_malloc), g = _t;
	var b = B_(i) ? 0 : $_(i, et.__wbindgen_malloc, et.__wbindgen_realloc), u = _t, d = B_(o) ? 0 : $_(o, et.__wbindgen_malloc, et.__wbindgen_realloc), f = _t;
	const m = et.processRawXyz(c, l, a, s, w, g, t, r, b, u, d, f);
	if (m[2]) throw q_(m[1]);
	return q_(m[0]);
}
function ae(n, e, _, t, r, i, o, c) {
	const l = J_(n, et.__wbindgen_malloc), a = _t, s = J_(e, et.__wbindgen_malloc), w = _t, g = J_(_, et.__wbindgen_malloc), b = _t, u = J_(t, et.__wbindgen_malloc), d = _t;
	var f = B_(i) ? 0 : $_(i, et.__wbindgen_malloc, et.__wbindgen_realloc), m = _t, h = B_(o) ? 0 : $_(o, et.__wbindgen_malloc, et.__wbindgen_realloc), p = _t, y = B_(c) ? 0 : J_(c, et.__wbindgen_malloc), v = _t;
	const k = et.processRawXyzImputed(l, a, s, w, g, b, u, d, r, f, m, h, p, y, v);
	if (k[2]) throw q_(k[1]);
	return q_(k[0]);
}
function se(n, e, _, t, r, i, o, c, l, a) {
	const s = J_(n, et.__wbindgen_malloc), w = _t, g = J_(e, et.__wbindgen_malloc), b = _t, u = J_(_, et.__wbindgen_malloc), d = _t, f = J_(t, et.__wbindgen_malloc), m = _t;
	var h = B_(i) ? 0 : $_(i, et.__wbindgen_malloc, et.__wbindgen_realloc), p = _t, y = B_(c) ? 0 : $_(c, et.__wbindgen_malloc, et.__wbindgen_realloc), v = _t, k = B_(a) ? 0 : J_(a, et.__wbindgen_malloc), S = _t;
	const A = et.processRawXyzImputedWithEpoch(s, w, g, b, u, d, f, m, r, h, p, o, y, v, B_(l) ? 16777215 : l ? 1 : 0, k, S);
	if (A[2]) throw q_(A[1]);
	return q_(A[0]);
}
function we(n, e, _, t) {
	const r = J_(n, et.__wbindgen_malloc), i = _t, o = H_(e, et.__wbindgen_malloc), c = _t, l = J_(t, et.__wbindgen_malloc), a = _t, s = et.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = W_(s[0], s[1]).slice();
	return et.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function ge(n, e, _, t) {
	const r = J_(n, et.__wbindgen_malloc), i = _t, o = J_(e, et.__wbindgen_malloc), c = _t, l = J_(_, et.__wbindgen_malloc), a = _t, s = et.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw q_(s[1]);
	return q_(s[0]);
}
function be(n, e, _) {
	const t = H_(n, et.__wbindgen_malloc), r = _t;
	var i = B_(e) ? 0 : $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t;
	const c = et.readGgirMeta(t, r, i, o, B_(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw q_(c[1]);
	return q_(c[0]);
}
function ue(n, e) {
	const _ = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), t = _t;
	var r = B_(e) ? 0 : $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), i = _t;
	const o = et.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function de() {
	return et.recommended_chunk_size_mb() >>> 0;
}
function fe(n, e) {
	const _ = X_(e, et.__wbindgen_malloc), t = _t, r = et.rerunGgirResults(n, _, t);
	if (r[2]) throw q_(r[1]);
	return q_(r[0]);
}
function me(n) {
	const e = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), _ = _t, t = et.resolveTimezone(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function he(n, e, _) {
	const t = J_(n, et.__wbindgen_malloc), r = _t, i = J_(e, et.__wbindgen_malloc), o = _t, c = V_(_, et.__wbindgen_malloc), l = _t, a = et.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw q_(a[2]);
	var s = I_(a[0], a[1]).slice();
	return et.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function pe(n, e, _, t, r, i, o, c, l, a, s, w, g, b) {
	const u = H_(n, et.__wbindgen_malloc), d = _t, f = $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), m = _t;
	var h = B_(_) ? 0 : H_(_, et.__wbindgen_malloc), p = _t, y = B_(t) ? 0 : H_(t, et.__wbindgen_malloc), v = _t, k = B_(r) ? 0 : H_(r, et.__wbindgen_malloc), S = _t, A = B_(i) ? 0 : H_(i, et.__wbindgen_malloc), R = _t, C = B_(o) ? 0 : H_(o, et.__wbindgen_malloc), x = _t, D = B_(c) ? 0 : $_(c, et.__wbindgen_malloc, et.__wbindgen_realloc), I = _t, M = B_(l) ? 0 : $_(l, et.__wbindgen_malloc, et.__wbindgen_realloc), W = _t, F = B_(a) ? 0 : X_(a, et.__wbindgen_malloc), U = _t, z = B_(w) ? 0 : $_(w, et.__wbindgen_malloc, et.__wbindgen_realloc), P = _t, T = B_(g) ? 0 : $_(g, et.__wbindgen_malloc, et.__wbindgen_realloc), O = _t;
	const N = et.reviewGgirResults(u, d, f, m, h, p, y, v, k, S, A, R, C, x, D, I, M, W, F, U, s, z, P, T, O, B_(b) ? 4294967297 : b >>> 0);
	if (N[2]) throw q_(N[1]);
	return q_(N[0]);
}
function ye(n) {
	const e = X_(n, et.__wbindgen_malloc), _ = _t, t = et.reviewNonwearFile(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function ve(n) {
	const e = X_(n, et.__wbindgen_malloc), _ = _t, t = et.reviewNonwearTotals(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function ke(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = et.roundCountStorage(_, t, e);
	var i = D_(r[0], r[1]).slice();
	return et.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Se(n) {
	const e = et.runFullPipelineV1(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function Ae(n) {
	const e = et.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function Re(n) {
	const e = et.runGgirPart3(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function Ce(n) {
	const e = X_(n, et.__wbindgen_malloc), _ = _t, t = et.scoreAllDays(e, _);
	if (t[3]) throw q_(t[2]);
	var r = I_(t[0], t[1]).slice();
	return et.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function xe(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = et.scoreColeKripke(_, t, e);
	var i = W_(r[0], r[1]).slice();
	return et.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function De(n) {
	let e, _;
	try {
		const i = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t, c = et.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		et.__wbindgen_free(e, _, 1);
	}
}
function Ie(n, e, _) {
	const t = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), r = _t, i = H_(e, et.__wbindgen_malloc), o = _t, c = V_(_, et.__wbindgen_malloc), l = _t, a = et.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw q_(a[1]);
	return q_(a[0]);
}
function Me(n) {
	let e, _;
	try {
		const i = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t, c = et.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, q_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		et.__wbindgen_free(e, _, 1);
	}
}
function We(n, e, _, t, r, i) {
	const o = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), c = _t, l = J_(e, et.__wbindgen_malloc), a = _t, s = J_(_, et.__wbindgen_malloc), w = _t, g = J_(t, et.__wbindgen_malloc), b = _t, u = et.scoreEpochsTyped(o, c, l, a, s, w, g, b, r, i);
	if (u[2]) throw q_(u[1]);
	return q_(u[0]);
}
function Fe(n, e, _) {
	const t = J_(n, et.__wbindgen_malloc), r = _t;
	var i = B_(e) ? 0 : $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t, c = B_(_) ? 0 : J_(_, et.__wbindgen_malloc), l = _t;
	const a = et.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw q_(a[2]);
	var s = W_(a[0], a[1]).slice();
	return et.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function Ue(n) {
	const e = et.scoreGgirHasibVariant(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function ze(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = et.scoreSadeh(_, t, e);
	var i = W_(r[0], r[1]).slice();
	return et.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Pe(n, e, _) {
	const t = $_(_, et.__wbindgen_malloc, et.__wbindgen_realloc), r = _t, i = et.screensRestIntervals(n, B_(e) ? 0 : R_(e), t, r);
	if (i[2]) throw q_(i[1]);
	return q_(i[0]);
}
function Te(n) {
	const e = X_(n, et.__wbindgen_malloc), _ = _t, t = et.settleManualNonwearNights(e, _);
	if (t[3]) throw q_(t[2]);
	var r = I_(t[0], t[1]).slice();
	return et.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Oe(n) {
	const e = H_(n, et.__wbindgen_malloc), _ = _t, t = et.sha256StreamFeed(e, _);
	if (t[1]) throw q_(t[0]);
}
function Ne() {
	let n, e;
	try {
		const r = et.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, q_(r[2]);
		return n = _, e = t, O_(_, t);
	} finally {
		et.__wbindgen_free(n, e, 1);
	}
}
function Ge() {
	et.sha256StreamStart();
}
function Ee(n, e) {
	const _ = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), t = _t, r = et.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = O_(r[0], r[1]).slice(), et.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function je(n, e, _, t, r) {
	const i = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t, c = J_(e, et.__wbindgen_malloc), l = _t, a = V_(_, et.__wbindgen_malloc), s = _t, w = J_(t, et.__wbindgen_malloc), g = _t, b = V_(r, et.__wbindgen_malloc), u = _t, d = et.sleepRegularityIndex(i, o, c, l, a, s, w, g, b, u);
	if (d[3]) throw q_(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function Le(n, e) {
	const _ = et.sleepWakeScores(n, B_(e) ? 0 : R_(e));
	if (_[2]) throw q_(_[1]);
	return q_(_[0]);
}
function Be(n) {
	const e = X_(n, et.__wbindgen_malloc), _ = _t, t = et.sourceLabelsWallClockMs(e, _);
	var r = D_(t[0], t[1]).slice();
	return et.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function Ve(n, e, _) {
	const t = J_(n, et.__wbindgen_malloc), r = _t, i = X_(e, et.__wbindgen_malloc), o = _t, c = J_(_, et.__wbindgen_malloc), l = _t, a = et.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw q_(a[2]);
	let s;
	return 0 !== a[0] && (s = D_(a[0], a[1]).slice(), et.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function He(n) {
	return et.startThreadPool(n);
}
function Je(n, e, _, t) {
	const r = J_(n, et.__wbindgen_malloc), i = _t, o = H_(e, et.__wbindgen_malloc), c = _t, l = J_(_, et.__wbindgen_malloc), a = _t, s = J_(t, et.__wbindgen_malloc), w = _t, g = et.statesInPeriods(r, i, o, c, l, a, s, w);
	var b = W_(g[0], g[1]).slice();
	return et.__wbindgen_free(g[0], 1 * g[1], 1), b;
}
function Xe(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = X_(e, et.__wbindgen_malloc), i = _t, o = et.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw q_(o[2]);
	var c = D_(o[0], o[1]).slice();
	return et.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function $e(n) {
	const e = H_(n, et.__wbindgen_malloc), _ = _t, t = et.streamParseFeed(e, _);
	if (t[2]) throw q_(t[1]);
	return t[0] >>> 0;
}
function qe() {
	const n = et.streamParseFinishChunk();
	if (n[2]) throw q_(n[1]);
	return _.__wrap(n[0]);
}
function Ze(n) {
	const e = et.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw q_(e[1]);
	return _.__wrap(e[0]);
}
function Ye(n, e, _) {
	var t = B_(_) ? 0 : $_(_, et.__wbindgen_malloc, et.__wbindgen_realloc), r = _t;
	const i = et.streamParseStart(n, e, t, r);
	if (i[1]) throw q_(i[0]);
}
function Ke(n, e, _, t, r) {
	var i = B_(t) ? 0 : $_(t, et.__wbindgen_malloc, et.__wbindgen_realloc), o = _t;
	const c = et.streamParseStartWithEpoch(n, e, _, i, o, !B_(r), B_(r) ? 0 : r);
	if (c[1]) throw q_(c[0]);
}
function Qe(n, e) {
	const _ = H_(n, et.__wbindgen_malloc), t = _t, r = et.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw q_(r[1]);
	return q_(r[0]);
}
function n_(n) {
	const e = et.summarizeExportGroups(n);
	if (e[3]) throw q_(e[2]);
	var _ = I_(e[0], e[1]).slice();
	return et.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function e_(n) {
	const e = et.summarizePhysicalActivityDays(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function __(n) {
	const e = et.summarizePhysicalActivityTrace(n);
	if (e[2]) throw q_(e[1]);
	return q_(e[0]);
}
function t_() {
	return 0 !== et.threadPoolReady();
}
function r_(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = et.thresholdProbabilities(_, t, e);
	var i = W_(r[0], r[1]).slice();
	return et.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function i_(n) {
	const e = X_(n, et.__wbindgen_malloc), _ = _t, t = et.timeSemantics(e, _);
	if (t[3]) throw q_(t[2]);
	var r = I_(t[0], t[1]).slice();
	return et.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function o_(n, e, _) {
	const t = J_(n, et.__wbindgen_malloc), r = _t, i = et.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw q_(i[2]);
	var o = I_(i[0], i[1]).slice();
	return et.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function c_(n, e, _) {
	const t = et.uniformTimestamps(n, e, _);
	var r = D_(t[0], t[1]).slice();
	return et.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function l_(n) {
	const e = J_(n, et.__wbindgen_malloc), _ = _t, t = et.utcDayIndex(e, _);
	if (t[2]) throw q_(t[1]);
	return q_(t[0]);
}
function a_(n) {
	const e = H_(n, et.__wbindgen_malloc), _ = _t, t = et.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function s_(n, e) {
	const _ = J_(n, et.__wbindgen_malloc), t = _t, r = et.validWearDays(_, t, B_(e) ? 0 : R_(e));
	if (r[3]) throw q_(r[2]);
	var i = W_(r[0], r[1]).slice();
	return et.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function w_(n, e, _) {
	const t = J_(n, et.__wbindgen_malloc), r = _t, i = et.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw q_(i[1]);
	return q_(i[0]);
}
function g_(n) {
	const e = J_(n, et.__wbindgen_malloc), _ = _t, t = et.wallClockLabels(e, _);
	var r = I_(t[0], t[1]).slice();
	return et.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function b_(n, e, _) {
	const t = H_(n, et.__wbindgen_malloc), r = _t, i = X_(_, et.__wbindgen_malloc), o = _t, c = et.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw q_(c[2]);
	var l = W_(c[0], c[1]).slice();
	return et.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var u_ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, A_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, A_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		et.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		et.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return et.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return et.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return et.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function d_(n) {
	et.wbg_rayon_start_worker(n);
}
function f_(n, e) {
	const _ = $_(n, et.__wbindgen_malloc, et.__wbindgen_realloc), t = _t;
	var r = B_(e) ? 0 : $_(e, et.__wbindgen_malloc, et.__wbindgen_realloc), i = _t;
	const o = et.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw q_(o[1]);
	return q_(o[0]);
}
function m_(n) {
	const e = X_(n, et.__wbindgen_malloc), _ = _t, t = et.weekendDates(e, _);
	var r = W_(t[0], t[1]).slice();
	return et.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function h_(n, e, _, t) {
	const r = J_(n, et.__wbindgen_malloc), i = _t, o = et.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function p_(n, e, _, t, r) {
	const i = J_(n, et.__wbindgen_malloc), o = _t, c = J_(e, et.__wbindgen_malloc), l = _t, a = J_(_, et.__wbindgen_malloc), s = _t, w = et.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw q_(w[1]);
	return q_(w[0]);
}
function y_(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(O_(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = $_(String(e), et.__wbindgen_malloc, et.__wbindgen_realloc), t = _t;
				U_().setInt32(n + 4, t, !0), U_().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				U_().setBigInt64(n + 8, B_(_) ? BigInt(0) : _, !0), U_().setInt32(n + 0, !B_(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return B_(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = $_(x_(e), et.__wbindgen_malloc, et.__wbindgen_realloc), t = _t;
				U_().setInt32(n + 4, t, !0), U_().setInt32(n + 0, _, !0);
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
				return et.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return nt;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const _ = "number" == typeof e ? e : void 0;
				U_().setFloat64(n + 8, B_(_) ? 0 : _, !0), U_().setInt32(n + 0, !B_(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = B_(_) ? 0 : $_(_, et.__wbindgen_malloc, et.__wbindgen_realloc), r = _t;
				U_().setInt32(n + 4, r, !0), U_().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(O_(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return L_(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return L_(function(n, e, _, t) {
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
					_ = n, t = e, console.error(O_(n, e));
				} finally {
					et.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return L_(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return L_(function(n, e) {
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
				return new Uint32Array(M_(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(D_(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== z_ && z_.buffer === et.memory.buffer || (z_ = new Float32Array(et.memory.buffer)), z_).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return L_(function(n) {
					return n.next();
				}, arguments);
			},
			__wbg_next_7646edaa39458ef7: function(n) {
				return n.next;
			},
			__wbg_ownKeys_0231887680f0f945: function() {
				return L_(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(W_(n, e), _);
			},
			__wbg_prototypesetcall_c5875dab42ff6b97: function(n, e, _) {
				Float64Array.prototype.set.call(D_(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return L_(function(n, e, _) {
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
				const _ = $_(e.stack, et.__wbindgen_malloc, et.__wbindgen_realloc), t = _t;
				U_().setInt32(n + 4, t, !0), U_().setInt32(n + 0, _, !0);
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
				}(e, _, u_.__wrap(t));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return B_(n) ? 0 : R_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return B_(n) ? 0 : R_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return B_(n) ? 0 : R_(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return B_(n) ? 0 : R_(n);
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
						0 === --t.cnt && (et.__wbindgen_destroy_closure(t.a, t.b), t.a = 0, C_.unregister(t));
					}, C_.register(r, t, t), r;
				}(n, e, v_);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return W_(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return O_(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = et.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			},
			memory: e || new WebAssembly.Memory({
				initial: 181,
				maximum: 65536,
				shared: !0
			})
		}
	};
}
function v_(n, e, _) {
	et.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, _);
}
Symbol.dispose && (u_.prototype[Symbol.dispose] = u_.prototype.free);
const k_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => et.__wbg_aw5batch_free(n >>> 0, 1)), S_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => et.__wbg_streamchunkresult_free(n >>> 0, 1)), A_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => et.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function R_(n) {
	const e = et.__externref_table_alloc();
	return et.__wbindgen_externrefs.set(e, n), e;
}
const C_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => et.__wbindgen_destroy_closure(n.a, n.b));
function x_(n) {
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
		e > 0 && (_ += x_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + x_(n[t]);
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
function D_(n, e) {
	return n >>>= 0, T_().subarray(n / 8, n / 8 + e);
}
function I_(n, e) {
	n >>>= 0;
	const _ = U_(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(et.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return et.__externref_drop_slice(n, e), t;
}
function M_(n, e) {
	return n >>>= 0, G_().subarray(n / 4, n / 4 + e);
}
function W_(n, e) {
	return n >>>= 0, j_().subarray(n / 1, n / 1 + e);
}
let F_ = null;
function U_() {
	return null !== F_ && F_.buffer === et.memory.buffer || (F_ = new DataView(et.memory.buffer)), F_;
}
let z_ = null, P_ = null;
function T_() {
	return null !== P_ && P_.buffer === et.memory.buffer || (P_ = new Float64Array(et.memory.buffer)), P_;
}
function O_(n, e) {
	return function(n, e) {
		return K_ += e, K_ >= Y_ && (Z_ = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Z_.decode(), K_ = e), Z_.decode(j_().slice(n, n + e));
	}(n >>>= 0, e);
}
let N_ = null;
function G_() {
	return null !== N_ && N_.buffer === et.memory.buffer || (N_ = new Uint32Array(et.memory.buffer)), N_;
}
let E_ = null;
function j_() {
	return null !== E_ && E_.buffer === et.memory.buffer || (E_ = new Uint8Array(et.memory.buffer)), E_;
}
function L_(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = R_(_);
		et.__wbindgen_exn_store(n);
	}
}
function B_(n) {
	return null == n;
}
function V_(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return G_().set(n, _ / 4), _t = n.length, _;
}
function H_(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return j_().set(n, _ / 1), _t = n.length, _;
}
function J_(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return T_().set(n, _ / 8), _t = n.length, _;
}
function X_(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = R_(n[t]);
		U_().setUint32(_ + 4 * t, e, !0);
	}
	return _t = n.length, _;
}
function $_(n, e, _) {
	if (void 0 === _) {
		const _ = Q_.encode(n), t = e(_.length, 1) >>> 0;
		return j_().subarray(t, t + _.length).set(_), _t = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = j_();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = j_().subarray(r + o, r + t);
		o += Q_.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return _t = o, r;
}
function q_(n) {
	const e = et.__wbindgen_externrefs.get(n);
	return et.__externref_table_dealloc(n), e;
}
let Z_ = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
Z_ && Z_.decode();
const Y_ = 2146435072;
let K_ = 0;
const Q_ = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
Q_ && (Q_.encodeInto = function(n, e) {
	const _ = Q_.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let nt, et, _t = 0;
function tt(n, e, _) {
	if (et = n.exports, nt = e, F_ = null, z_ = null, P_ = null, N_ = null, E_ = null, void 0 !== _ && ("number" != typeof _ || 0 === _ || _ % 65536 != 0)) throw new Error("invalid stack size");
	return et.__wbindgen_start(_), et;
}
function rt(n, e) {
	if (void 0 !== et) return et;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const t = y_(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), tt(new WebAssembly.Instance(n, t), n, _);
}
async function it(n, e) {
	if (void 0 !== et) return et;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-DxgxTJWc.wasm", "" + import.meta.url));
	const t = y_(e);
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
	return tt(r, i, _);
}
export { e as Aw5Batch, _ as StreamChunkResult, t as actiwareIntervalStatistics, r as actiwareNights, i as actiwareSleepIntervals, o as actiwareWakeThreshold, c as aggregateEpochSeries, l as analysisDatesOf, a as analysisWindowBounds, s as analysisWindowSlice, w as classifyActimetricPreschoolWristRf, g as classifyActimetricPreschoolWristRfLagLead, b as clippedUnionHours, u as compareNonwearDetectorMasks, d as computeAnglez5s, f as computeCircadian, m as computeCircadianTyped, h as computeMimsUnit, p as computeMimsUnitDataframe, y as computeNightDifficulty, v as computeNightDifficultyTyped, k as computeNightSignals, S as computeNightSignalsTyped, A as computeSleepMetrics, R as configureComputeMemoryBudgetV1, C as consensusDisagreementDetail, x as consensusDisagreements, D as convertBedWakeDaysDiary, I as convertScreensRedcapDiary, M as correctGgirRecording, W as csvBufferAppend, F as csvBufferClear, U as cutpointEpochCompatibility, z as cutpointToneCodes, P as cutpointsRefusal, it as default, T as describeColumns, O as detectDetachFromAccelerationG, N as detectDeviceFormat, G as detectGgirHasptVariant, E as detectHdcza, j as detectHourClockJumpMs, L as detectNonwear, B as detectNonwearChoi2011, V as detectNonwearChoi2011Epoch, H as detectNonwearChoi2012Epoch, J as detectNonwearUnified, X as detectNonwearUnifiedBatchTyped, $ as dstPlaceholderRuns, q as effectiveOverrideCutpoints, Z as epochAgreement, Y as epochsOverlapping, K as exportFileNightFigures, Q as exportNapAggregate, nn as extractCapsense, en as foldOntoGrid, _n as foldSleepWakeVotes, tn as foldUniformOntoGrid, rn as fuseNonwearMasks, on as generateActiwareRestIntervals, cn as getComputeCapabilitiesV1, ln as ggir5sWallClockMs, an as ggirAppConfigSummary, sn as ggirConfigValues, wn as ggirDayRowsTouchedByEdits, gn as ggirDayValidFractions, bn as ggirDaysIncluded, un as ggirDiaryLogShape, dn as ggirDstPlaceholderCuts, fn as ggirIncludeDayCriterionHours, mn as ggirIndicesToWallClockMs, hn as ggirLabelsToStoredMs, pn as ggirManualNightClocks, yn as ggirMilestoneVersion, vn as ggirNonwearApproach, kn as ggirPersonSummaries, Sn as ggirRerunProfiles, An as ggirSavedNonwearWindows, Rn as ggirSleeplogStoredClocks, Cn as ggirSummaryDenominator, xn as gridOffsetWithin, Dn as identifyGgirRData, In as implausibilityReasons, rt as initSync, Mn as initThreadPool, Wn as installPanicHook, Fn as interRaterReliability, Un as irregularInternalDays, zn as lstmSpectralFeatures30s, Pn as markerIndexRange, Tn as markerSleepOnsetOffset, On as medianGapSeconds, Nn as midSleepClockHours, Gn as neishabouriCounts, En as nextDate, jn as nightIntervalOverlap, Ln as nonwearContributors, Bn as nonwearInSleepCounts, Vn as nonwearSleepOverlap, Hn as nonwearWeightRuns, Jn as normalizeCutpoints, Xn as parseActigraphCsvBuffered, $n as parseAw5, qn as parseEpochSeries, Zn as parseGeneactivCsvBuffered, Yn as participantValidity, Kn as physicalActivitySeriesGrid, Qn as placeMarkers, ne as placeMarkersBatch, ee as placeMarkersTyped, _e as placeNightsTyped, te as placeNonwearMarkers, re as placeNonwearMarkersTyped, ie as prepareGgirRecording, oe as processGt3xPart1, ce as processGt3xPart1WithEpoch, le as processRawXyz, ae as processRawXyzImputed, se as processRawXyzImputedWithEpoch, we as projectLabelsOntoGrid, ge as rasterizePeriods, be as readGgirMeta, ue as readGgirReportCsv, de as recommended_chunk_size_mb, fe as rerunGgirResults, me as resolveTimezone, he as restoredDstRuns, pe as reviewGgirResults, ye as reviewNonwearFile, ve as reviewNonwearTotals, ke as roundCountStorage, Se as runFullPipelineV1, Ae as runGgirDeclaredEpochsV1, Re as runGgirPart3, Ce as scoreAllDays, xe as scoreColeKripke, De as scoreConsensus, Ie as scoreConsensusTyped, Me as scoreEpochs, We as scoreEpochsTyped, Fe as scoreGgirHasib, Ue as scoreGgirHasibVariant, ze as scoreSadeh, Pe as screensRestIntervals, Te as settleManualNonwearNights, Oe as sha256StreamFeed, Ne as sha256StreamFinish, Ge as sha256StreamStart, Ee as shiftDate, je as sleepRegularityIndex, Le as sleepWakeScores, Be as sourceLabelsWallClockMs, Ve as spliceDstPlaceholders, He as startThreadPool, Je as statesInPeriods, Xe as storedToGgirLabelsMs, $e as streamParseFeed, qe as streamParseFinishChunk, Ze as streamParseFinishChunkWithProgress, Ye as streamParseStart, Ke as streamParseStartWithEpoch, Qe as summarizeActimetricPreschoolWristRfClasses, n_ as summarizeExportGroups, e_ as summarizePhysicalActivityDays, __ as summarizePhysicalActivityTrace, t_ as threadPoolReady, r_ as thresholdProbabilities, i_ as timeSemantics, o_ as timestampDiscontinuities, c_ as uniformTimestamps, l_ as utcDayIndex, a_ as validStateFraction, s_ as validWearDays, w_ as wallClockDstPlaceholders, g_ as wallClockLabels, b_ as wallMaskOntoGgirGrid, u_ as wbg_rayon_PoolBuilder, d_ as wbg_rayon_start_worker, f_ as wearSiteHasptRouting, m_ as weekendDates, h_ as windowCoverage, p_ as zeroCrossingCounts };
